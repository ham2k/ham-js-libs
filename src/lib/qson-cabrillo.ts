import camelCase from 'camelcase'
import { bandForFrequency, type Band } from '@ham2k/lib-operation-data'

export interface CabrilloToQSONResult {
  source: 'cabrillo'
  rawHeaders: CabrilloHeaders
  qsos: CabrilloQso[]
  qsosOther: CabrilloQso[]
}

export type CabrilloHeaders = Record<string, string | string[] | undefined>

export interface CabrilloQso {
  our: CabrilloQsoSide
  their: CabrilloQsoSide
  source: 'cabrillo'
  freq?: number | string
  band?: Band
  mode?: string
  startAt?: string
  startAtMillis?: number
  refs?: { contest: ContestReference }
  _number?: number
  _line?: number
}

/** One side of a QSO; exchange fields depend on contest rules. */
export type CabrilloQsoSide = {
  call?: string
  transmitter?: string | number
  sent?: Record<string, string | number>
} & Record<string, string | number | Record<string, string | number> | undefined>

export interface ContestReference {
  ref?: string
  call?: string
  club?: string
  operators?: string[]
  location?: string
  grid?: string
  claimedScore?: string
  categoryAssisted?: string
  categoryBand?: string
  categoryMode?: string
  categoryOperator?: string
  categoryOverlay?: string
  categoryStation?: string
  categoryTransmitter?: string
  [key: string]: string | string[] | undefined
}

export function cabrilloToQSON (str: string): CabrilloToQSONResult {
  return parseCabrillo(str)
}

const REGEXP_FOR_END_OF_LINE = /\r?\n/
const REGEXP_FOR_LINE_TAG = /^([A-Z-]+):\s*(.*)\s*$/
const REGEXP_FOR_LINE_PARTS = /\s+/

const CABRILLO_MODES_TO_QSON_MODES: Record<string, string> = {
  RY: 'RTTY',
  CW: 'CW',
  PH: 'SSB',
  FM: 'FM'
}

interface ParserCache {
  contestSplitter?: (parts: string[]) => CabrilloQso
  hasTransmitterId?: boolean
}

function parseCabrillo (str: string): CabrilloToQSONResult {
  const cache: ParserCache = {}
  const headers: CabrilloHeaders = {}
  const qsos: CabrilloQso[] = []
  const qsosOther: CabrilloQso[] = []

  let qsoCount = 0

  const lines = str.split(REGEXP_FOR_END_OF_LINE)
  lines.forEach((line, i) => {
    line = line.toUpperCase()
    const matches = line.match(REGEXP_FOR_LINE_TAG)
    if (matches) {
      const tag = camelCase(matches[1])
      const data = matches[2]

      if (tag === 'qso') {
        const qso = parseCabrilloQSO(data.split(REGEXP_FOR_LINE_PARTS), headers, cache)
        qsoCount++
        qso._number = qsoCount
        qso._line = i + 1
        qsos.push(qso)
      } else if (tag === 'xQso') {
        const qso = parseCabrilloQSO(data.split(REGEXP_FOR_LINE_PARTS), headers, cache)
        qsoCount++
        qso._number = qsoCount
        qso._line = i + 1
        qsosOther.push(qso)
      } else {
        if (tag === 'startOfLog') {
          headers.version = data
        } else if (tag === 'endOfLog') {
          // Do nothing
        } else if (tag === 'soapbox' || tag === 'address') {
          headers[tag] = (headers[tag] as string[] | undefined) ?? []
          ;(headers[tag] as string[]).push(data)
        } else {
          headers[tag] = data
        }
      }
    }
  })

  const ref = contestReferenceInfo(headers)

  qsos.forEach((qso) => {
    qso.refs = { contest: ref }
  })

  qsos.sort((a, b) => (a.startAtMillis ?? 0) - (b.startAtMillis ?? 0))

  return {
    source: 'cabrillo',
    rawHeaders: headers,
    qsos,
    qsosOther
  }
}

function parseCabrilloQSO (parts: string[], headers: CabrilloHeaders, cache: ParserCache): CabrilloQso {
  if (cache.contestSplitter === undefined) cache.contestSplitter = selectContestSplitter(headers)

  const qso = cache.contestSplitter(parts)

  qso.freq = parseFrequency(parts[0])
  qso.band = bandForFrequency(freqToNumber(qso.freq))
  qso.mode = CABRILLO_MODES_TO_QSON_MODES[parts[1] ?? ''] ?? parts[1]
  qso.startAt = `${parts[2]}T${parts[3].substring(0, 2)}:${parts[3].substring(2, 4)}:00Z`
  qso.startAtMillis = Date.parse(qso.startAt).valueOf()
  if (cache.hasTransmitterId) {
    qso.our.transmitter = parts[parts.length - 1]
  }

  return qso
}

function freqToNumber (freq: number | string): number {
  return typeof freq === 'number' ? freq : Number(freq)
}

const REGEXP_FOR_NUMERIC_FREQUENCY = /^\d+$/

function parseFrequency (freq: string): number | string {
  if (freq.match(REGEXP_FOR_NUMERIC_FREQUENCY)) return Number.parseInt(freq, 10)
  else return freq
}

const REGEXP_FOR_OPERATOR_LIST = /(,\s*|\s+)/

/** Single-string form of a header (Cabrillo tags are usually one string; soapbox/address are arrays). */
function headerString (v: string | string[] | undefined): string | undefined {
  if (v === undefined) return undefined
  return Array.isArray(v) ? v[0] : v
}

function contestReferenceInfo (headers: CabrilloHeaders): ContestReference {
  const ref: ContestReference = {}

  ref.ref = headerString(headers.contest)

  if (headers.callsign) ref.call = headerString(headers.callsign)
  if (headers.club) ref.club = headerString(headers.club)
  const operators = headerString(headers.operators)
  if (operators) ref.operators = operators.split(REGEXP_FOR_OPERATOR_LIST)
  if (headers.location) ref.location = headerString(headers.location)
  if (headers.gridLocator) ref.grid = headerString(headers.gridLocator)
  if (headers.claimedScore) ref.claimedScore = headerString(headers.claimedScore)

  if (headers.categoryAssisted) ref.categoryAssisted = headerString(headers.categoryAssisted)
  if (headers.categoryBand) ref.categoryBand = headerString(headers.categoryBand)
  if (headers.categoryMode) ref.categoryMode = headerString(headers.categoryMode)
  if (headers.categoryOperator) ref.categoryOperator = headerString(headers.categoryOperator)
  if (headers.categoryMode) ref.categoryMode = headerString(headers.categoryMode)
  if (headers.categoryOverlay) ref.categoryOverlay = headerString(headers.categoryOverlay)
  if (headers.categoryStation) ref.categoryStation = headerString(headers.categoryStation)
  if (headers.categoryTransmitter) ref.categoryTransmitter = headerString(headers.categoryTransmitter)

  return ref
}

type ExchangeField =
  | 'rst'
  | 'serial'
  | 'location'
  | 'class'
  | 'section'
  | 'name'
  | 'grid'
  | 'sectionOrPower'
  | 'prec'
  | 'check'
  | 'cqZone'
  | 'zoneOrHQ'
  | 'exchange'
  | 'ituZone'

function selectContestSplitter (headers: CabrilloHeaders): (parts: string[]) => CabrilloQso {
  const contest = headerString(headers.contest) ?? 'unknown'
  const isNumeric: Partial<Record<ExchangeField, true>> = { serial: true, check: true, cqZone: true, ituZone: true }
  let fields: ExchangeField[] = []

  if (contest.match(/^CQ-WPX-|DARC-WAEDC-|RSGB-AFS-|RSGB-NFD|RGSB-SSB|RSGB-80/)) {
    fields = ['rst', 'serial']
  } else if (contest.match(/^RSGB-160-|RSGB-COMM|RSGB-IOTA|RSGB-LOW/)) {
    fields = ['rst', 'serial', 'location']
  } else if (contest.match(/^ARRL-FD|ARRL-FIELD-DAY|WFD/)) {
    fields = ['class', 'section']
  } else if (contest.match(/^NAQP-/)) {
    fields = ['name', 'location']
  } else if (contest.match(/QSO-PARTY/)) {
    fields = ['rst', 'location']
  } else if (contest.match(/^CQ-VHF-/)) {
    fields = ['rst', 'grid']
  } else if (contest.match(/^ARRL-DX-/)) {
    fields = ['rst', 'sectionOrPower']
  } else if (contest.match(/^ARRL-160-/)) {
    fields = ['rst', 'section']
  } else if (contest.match(/^ARRL-VHF-/)) {
    fields = ['grid']
  } else if (contest.match(/^ARRL-SS-/)) {
    fields = ['serial', 'prec', 'check', 'section']
  } else if (contest.match(/^CQ-WW-/)) {
    fields = ['rst', 'cqZone']
  } else if (contest.match(/^IARU-HF/)) {
    fields = ['rst', 'zoneOrHQ']
  } else {
    fields = ['rst', 'exchange']
  }

  return (parts) => {
    const len = fields.length
    const qso: CabrilloQso = { our: {}, their: {}, source: 'cabrillo' }
    qso.our.call = parts[4]
    qso.their.call = parts[4 + len + 1]
    qso.our.sent = {}
    qso.their.sent = {}
    fields.forEach((field, i) => {
      if (isNumeric[field]) {
        qso.our[field] = Number.parseInt(parts[4 + 1 + i], 10)
        qso.their[field] = Number.parseInt(parts[4 + 1 + len + 1 + i], 10)
        qso.our.sent![field] = Number.parseInt(parts[4 + 1 + i], 10)
        qso.their.sent![field] = Number.parseInt(parts[4 + 1 + len + 1 + i], 10)
      } else {
        qso.our[field] = parts[4 + 1 + i]
        qso.their[field] = parts[4 + 1 + len + 1 + i]
        qso.our.sent![field] = parts[4 + 1 + i]
        qso.their.sent![field] = parts[4 + 1 + len + 1 + i]
      }
    })
    if (fields.length % 2 === 0) {
      qso.our.transmitter = Number.parseInt(parts[parts.length - 1], 10)
    }

    return qso
  }
}

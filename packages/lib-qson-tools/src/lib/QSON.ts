export type CallInfo = {
  call: string

  // Related to callsign parsing (see `@ham2k/lib-callsigns`)
  baseCall?: string
  prefix?: string
  prefixOverride?: string
  ituPrefix?: string
  digit?: string
  preindicator?: string
  postindicators?: string[]
  indicators?: string[]

  // Related to DXCC Info (see `@ham2k/lib-country-files`)
  entityPrefix?: string
  entityName?: string
  dxccCode?: number
  continent?: string
  cqZone?: number
  ituZone?: number
  regionCode?: string
  tz?: string
  matchSource?: string
  matchNote?: string

  // Related to location
  location?: String
  lat?: number
  lon?: number
  grid?: string
  locSource?: string
  locationScope?: "qth" | "prefixed" | "portable"

  // Other common attributes
  name?: string
  city?: string
  state?: string
  county?: string
  country?: string

  exchange?: string
  sent?: string
}

export type CallInfoLookup = CallInfo & {
  source?: String
  scope?: "general" | "operation" | "qso"
  notes?: String[]
  history?: QSON[]
}

export type AnnotatedCallInfo = CallInfo & {
  guess?: CallInfo
  lookups?: CallInfoLookup[]
}

export type RefInfo = {
  type: string
  ref?: string
  label?: string
}

export type QSLInfo = {
  type: string
  ref?: string
  label?: string
  received?: boolean
}

export type EventInfo = {
  event: string
  operation?: Operation
}

export type QSON = {
  uuid?: string
  event?: EventInfo
  our: AnnotatedCallInfo
  their: AnnotatedCallInfo
  freq: number
  band: string
  mode: string
  startAt?: string
  startAtMillis?: number
  endAt?: string
  endAtMillis?: number
  number?: number
  line?: number
  deleted?: boolean
  refs?: RefInfo[]
  qsl?: QSLInfo[]
}

export type Operation = {
  uuid?: string
  deleted?: boolean
  stationCall?: string
  stationCallPlus?: string
  operatorCall?: string
  grid?: string
  qsoCount?: number
  title?: string
  qsos?: QSON[]
  refs?: RefInfo[]
}

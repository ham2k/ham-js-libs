import { AdifParser } from 'adif-parser-ts'
import type { SimpleAdif } from 'adif-parser-ts'
import { bandForFrequency } from '@ham2k/lib-operation-data'
import { decode } from 'html-entities'

export interface AdifToQsonOptions {
  source?: string
  /** When `'qsl'`, generic QSL fields are mapped; `false` skips them (e.g. LoTW). */
  genericQSL?: boolean | 'qsl'
}

/** Parsed ADIF header after HTML entity decoding. */
export type AdifHeaders = Record<string, string>

export interface QSONFromAdif {
  version: string
  source: string
  rawHeaders: AdifHeaders
  qsos: Qso[]
  errors: Qso[]
}

/** QSO object produced from ADIF (shape varies by fields present). */
export type Qso = Record<string, unknown>

function parseADIF(str: string, options: AdifToQsonOptions = {}): Omit<QSONFromAdif, 'version'> {
  const adif: SimpleAdif = AdifParser.parseAdi(cleanupBadADIF(str))

  const headers: AdifHeaders = { ...(adif.header ?? {}) }
  Object.keys(headers).forEach((key) => {
    headers[key] = decode(headers[key])
  })

  if (headers?.programid === 'LoTW') {
    options.genericQSL = false
  } else {
    options.genericQSL = 'qsl'
  }

  const qsos: Qso[] = []
  const errors: Qso[] = []

  let qsoCount = 0
  ;(adif.records ?? []).forEach((adifQSO) => {
    Object.keys(adifQSO).forEach((key) => {
      adifQSO[key] = decode(adifQSO[key])
    })
    const qso = parseAdifQSO(adifQSO, options)
    if (qso) {
      qsoCount++
      qso._number = qsoCount
      if (options.source) qso._source = options.source + ':qso-' + qsoCount

      if (qso._error) {
        errors.push(qso)
      } else {
        qsos.push(qso)
      }
    }
  })

  qsos.sort((a, b) => {
    if ((a.startAtMillis as number | undefined || 0) !== (b.startAtMillis as number | undefined || 0)) {
      return (a.startAtMillis as number | undefined || 0) - (b.startAtMillis as number | undefined || 0)
    } else {
      return (a._number as number) - (b._number as number)
    }
  })

  return {
    source: 'adif',
    rawHeaders: headers,
    qsos,
    errors
  }
}

function condSet (
  src: Record<string, string>,
  dest: Record<string, unknown>,
  field: string,
  destField?: string,
  f?: (val: string) => unknown
): unknown {
  const raw = src[field] ?? src[field + '_intl']
  if (raw === undefined) return undefined
  const out = f ? f(raw) : raw
  dest[destField ?? field] = out
  return raw
}

const REGEXP_FOR_EOH = /<BR>(?=(.*)<EOH>)/gi
const REGEXP_FOR_MIXW_BAD_ADIF = /<(PROGRAMID|PROGRAMVERSION)>(.+)([\n\r]+)/gi

function cleanupBadADIF(str: string): string {
  str = str.replaceAll(REGEXP_FOR_EOH, '')
  str = str.replaceAll(REGEXP_FOR_MIXW_BAD_ADIF, (match, p1: string, p2: string, p3: string) => `<${p1}:${p2.length}>${p2}${p3}`)
  return str
}

const REGEXP_FOR_US_COUNTRY = /(United States|Hawaii|Alaska)/i
const REGEXP_FOR_OTHER_COUNTRIES_WITH_COUNTIES = /(Puerto Rico)/i

function cleanupCounty(country: string | undefined, county: string): string {
  if (country?.match(REGEXP_FOR_US_COUNTRY)) {
    return `US/${county.replace(/,\s*/, '/')}`
  } else if (country?.match(REGEXP_FOR_OTHER_COUNTRIES_WITH_COUNTIES)) {
    return county.replace(/,\s*/, '/')
  } else {
    return `??/${county.replace(/,\s*/, '/')}`
  }
}

function parseAdifQSO(adifQSO: Record<string, string>, options: AdifToQsonOptions): Qso | undefined {
  const qso: Qso = { our: {}, their: {} }
  try {

    condSet(adifQSO, qso.their as Record<string, unknown>, 'call', 'call', (x) => x.replace('_', '/'))
    condSet(adifQSO, qso.their as Record<string, unknown>, 'contacted_op', 'operator', (x) => x.replace('_', '/'))
    condSet(adifQSO, qso.their as Record<string, unknown>, 'eq_call', 'owner', (x) => x.replace('_', '/'))

    condSet(adifQSO, qso.our as Record<string, unknown>, 'operator', 'operator', (x) => x.replace('_', '/'))
    condSet(adifQSO, qso.our as Record<string, unknown>, 'owner_callsign', 'owner', (x) => x.replace('_', '/'))
    condSet(adifQSO, qso.our as Record<string, unknown>, 'operator', 'call', (x) => x.replace('_', '/'))
    condSet(adifQSO, qso.our as Record<string, unknown>, 'station_callsign', 'call', (x) => x.replace('_', '/'))

    qso.freq = parseFrequency(adifQSO.freq)
    qso.band = (adifQSO.band && adifQSO.band.toLowerCase()) || bandForFrequency(qso.freq as number | string | undefined)

    if (adifQSO.freq_rx) {
      const rx = parseFrequency(adifQSO.freq_rx)
      if (rx !== qso.freq) {
        (qso.their as Record<string, unknown>).freq = parseFrequency(adifQSO.freq_rx)
        ;(qso.their as Record<string, unknown>).band = adifQSO.band_rx || bandForFrequency((qso.their as Record<string, unknown>).freq as number | string | undefined)
      }
    }

    qso.mode = adifQSO.mode

    if (adifQSO.qso_date) {
      qso.startAt = adifDateToISO(adifQSO.qso_date, adifQSO.time_on || adifQSO.time_off || '000000')
      qso.startAtMillis = Date.parse(qso.startAt as string).valueOf()
    }

    if (adifQSO.qso_date_off) {
      qso.endAt = adifDateToISO(adifQSO.qso_date_off, adifQSO.time_off || '235959')
      qso.endAtMillis = Date.parse(qso.endAt as string).valueOf()
    } else if (adifQSO.time_off) {
      qso.endAt = adifDateToISO(adifQSO.qso_date, adifQSO.time_off || '235959')
      qso.endAtMillis = Date.parse(qso.endAt as string).valueOf()
      if ((qso.endAtMillis as number) < (qso.startAtMillis as number)) {
        qso.endAtMillis = (qso.endAtMillis as number) + 24 * 60 * 60 * 1000
        qso.endAt = new Date(qso.endAtMillis as number).toISOString()
      }
    }

    if (!qso.endAt && qso.startAt) {
      qso.endAt = qso.startAt
      qso.endAtMillis = qso.startAtMillis
    }
    if (!qso.startAt && qso.endAt) {
      qso.startAt = qso.endAt
      qso.startAtMillis = qso.endAtMillis
    }

    condSet(adifQSO, qso.their as Record<string, unknown>, 'name', 'name')
    condSet(adifQSO, qso.their as Record<string, unknown>, 'cont', 'continent')
    condSet(adifQSO, qso.their as Record<string, unknown>, 'country', 'entityName')
    condSet(adifQSO, qso.their as Record<string, unknown>, 'country', 'country')
    condSet(adifQSO, qso.their as Record<string, unknown>, 'qth', 'qth')
    condSet(adifQSO, qso.their as Record<string, unknown>, 'city', 'city')
    condSet(adifQSO, qso.their as Record<string, unknown>, 'state', 'state')
    condSet(adifQSO, qso.their as Record<string, unknown>, 'region', 'regionCode')
    condSet(adifQSO, qso.their as Record<string, unknown>, 'rst_rcvd', 'sent')
    condSet(adifQSO, qso.their as Record<string, unknown>, 'cnty', 'county', (x) => cleanupCounty((qso.their as Record<string, unknown>).country as string | undefined, x))
    condSet(adifQSO, qso.their as Record<string, unknown>, 'cqz', 'cqZone', (x) => parseInt(x, 10))
    condSet(adifQSO, qso.their as Record<string, unknown>, 'cq_zone', 'cqZone', (x) => parseInt(x, 10))
    condSet(adifQSO, qso.their as Record<string, unknown>, 'ituz', 'ituZone', (x) => parseInt(x, 10))
    condSet(adifQSO, qso.their as Record<string, unknown>, 'itu_zone', 'ituZone', (x) => parseInt(x, 10))
    condSet(adifQSO, qso.their as Record<string, unknown>, 'dxcc', 'dxccCode', (x) => parseInt(x, 10))
    condSet(adifQSO, qso.their as Record<string, unknown>, 'email', 'email')
    condSet(adifQSO, qso.their as Record<string, unknown>, 'gridsquare', 'grid')
    condSet(adifQSO, qso.their as Record<string, unknown>, 'lat', 'lat')
    condSet(adifQSO, qso.their as Record<string, unknown>, 'lon', 'lon')
    condSet(adifQSO, qso.their as Record<string, unknown>, 'ituPrefix', 'entityPrefix')

    condSet(adifQSO, qso.our as Record<string, unknown>, 'my_name', 'name')
    condSet(adifQSO, qso.our as Record<string, unknown>, 'my_cont', 'continent')
    condSet(adifQSO, qso.our as Record<string, unknown>, 'my_country', 'entityName')
    condSet(adifQSO, qso.our as Record<string, unknown>, 'my_country', 'country')
    condSet(adifQSO, qso.our as Record<string, unknown>, 'my_qth', 'qth')
    condSet(adifQSO, qso.our as Record<string, unknown>, 'my_city', 'city')
    condSet(adifQSO, qso.our as Record<string, unknown>, 'my_state', 'state')
    condSet(adifQSO, qso.our as Record<string, unknown>, 'my_region', 'regionCode')
    condSet(adifQSO, qso.our as Record<string, unknown>, 'rst_sent', 'sent')
    condSet(adifQSO, qso.our as Record<string, unknown>, 'my_cnty', 'county', (x) => cleanupCounty((qso.our as Record<string, unknown>).country as string | undefined, x))
    condSet(adifQSO, qso.our as Record<string, unknown>, 'my_cqz', 'cqZone', (x) => parseInt(x, 10))
    condSet(adifQSO, qso.our as Record<string, unknown>, 'my_cq_zone', 'cqZone', (x) => parseInt(x, 10))
    condSet(adifQSO, qso.our as Record<string, unknown>, 'my_ituz', 'ituZone', (x) => parseInt(x, 10))
    condSet(adifQSO, qso.our as Record<string, unknown>, 'my_itu_zone', 'ituZone', (x) => parseInt(x, 10))
    condSet(adifQSO, qso.our as Record<string, unknown>, 'my_dxcc', 'dxccCode', (x) => parseInt(x, 10))
    condSet(adifQSO, qso.our as Record<string, unknown>, 'my_email', 'email')
    condSet(adifQSO, qso.our as Record<string, unknown>, 'my_gridsquare', 'grid')
    condSet(adifQSO, qso.our as Record<string, unknown>, 'my_lat', 'lat')
    condSet(adifQSO, qso.our as Record<string, unknown>, 'my_lon', 'lon')
    condSet(adifQSO, qso.our as Record<string, unknown>, 'my_pfx', 'entityPrefix')

    condSet(adifQSO, qso.our as Record<string, unknown>, 'tx_pwr', 'power')

    // QSL Information
    if (adifQSO.app_qrzlog_qsldate) {
      qso.qsl = qso.qsl ?? {}
      ;(qso.qsl as Record<string, unknown>).qrz = { received: true }
      condSet(adifQSO, (qso.qsl as Record<string, Record<string, unknown>>).qrz, 'app_qrzlog_logid', 'id')
      condSet(adifQSO, (qso.qsl as Record<string, Record<string, unknown>>).qrz, 'app_qrzlog_qsldate', 'receivedOn', adifDateToISO)
    }

    if (adifQSO.lotw_qslrdate) {
      // QRZ ADIF includes LOTW dates
      qso.qsl = qso.qsl ?? {}
      ;(qso.qsl as Record<string, unknown>).lotw = { received: true }
      condSet(adifQSO, (qso.qsl as Record<string, Record<string, unknown>>).lotw, 'lotw_qslrdate', 'receivedOn', adifDateToISO)
      condSet(adifQSO, (qso.qsl as Record<string, Record<string, unknown>>).lotw, 'lotw_qslsdate', 'sentOn', adifDateToISO)
    } else if (adifQSO.app_lotw_rxqsl) {
      qso.qsl = qso.qsl ?? {}
      ;(qso.qsl as Record<string, unknown>).lotw = { received: true }
      condSet(adifQSO, (qso.qsl as Record<string, Record<string, unknown>>).lotw, 'app_qrzlog_logid', 'id')
      condSet(adifQSO, (qso.qsl as Record<string, Record<string, unknown>>).lotw, 'app_lotw_rxqsl', 'receivedOn', (x) => x.replace(/(\d+) (\d+):/, '$1T$2:') + 'Z')
      condSet(adifQSO, (qso.qsl as Record<string, Record<string, unknown>>).lotw, 'app_lotw_rxqso', 'sentOn', (x) => x.replace(/(\d+) (\d+):/, '$1T$2:') + 'Z')
    } else if (adifQSO.lotw_qsl_rcvd === 'Y') {
      qso.qsl = qso.qsl ?? {}
      ;(qso.qsl as Record<string, unknown>).lotw = { received: true }
    }

    if (adifQSO.eqsl_qsl_rcvd === 'Y') {
      qso.qsl = qso.qsl ?? {}
      ;(qso.qsl as Record<string, unknown>).eqsl = { received: true }
      condSet(adifQSO, (qso.qsl as Record<string, Record<string, unknown>>).eqsl, 'eqsl_qsl_rdate', 'receivedOn', adifDateToISO)
    }

    if (adifQSO.app_dxkeeper_clublog_qsl_rcvd === 'Y') {
      qso.qsl = qso.qsl ?? {}
      ;(qso.qsl as Record<string, unknown>).clublog = { received: true }
      condSet(adifQSO, (qso.qsl as Record<string, Record<string, unknown>>).clublog, 'app_dxkeeper_clublog_qslrdate', 'receivedOn', adifDateToISO)
    }

    if (adifQSO.qsl_rcvd === 'Y' && options.genericQSL) {
      qso.qsl = qso.qsl ?? {}
      ;(qso.qsl as Record<string, unknown>).qsl = { received: true }
      condSet(adifQSO, (qso.qsl as Record<string, Record<string, unknown>>).qsl, 'qslrdate', 'receivedOn', adifDateToISO)
      condSet(adifQSO, (qso.qsl as Record<string, Record<string, unknown>>).qsl, 'qslsdate', 'sentOn', adifDateToISO)
    }

    Object.keys((qso.qsl as Record<string, unknown>) || {}).forEach((s) => {
      const qsl = qso.qsl as Record<string, { received?: boolean; receivedOn?: string; sentOn?: string; receivedOnMillis?: number; sentOnMillis?: number }>
      qsl.received = qsl.received || qsl[s].received

      if (qsl[s].receivedOn) {
        qsl[s].receivedOnMillis = Date.parse(qsl[s].receivedOn).valueOf()
      }

      if (qsl[s].sentOn) {
        qsl[s].sentOnMillis = Date.parse(qsl[s].sentOn).valueOf()
      }
    })

    // References
    if (adifQSO.contest_id) {
      qso.refs = qso.refs ?? []
      ;(qso.refs as unknown[]).push({ type: 'contest', ref: adifQSO.contest_id })
    }

    if (adifQSO.iota) {
      qso.refs = qso.refs ?? []
      const ref: Record<string, unknown> = { type: 'iota', ref: adifQSO.iota }
      condSet(adifQSO, ref, 'iota_island_id', 'island')
      ;(qso.refs as unknown[]).push(ref)
    }
    if (adifQSO.my_iota) {
      qso.refs = qso.refs ?? []
      const ref: Record<string, unknown> = { type: 'iotaActivation', ref: adifQSO.my_iota }
      condSet(adifQSO, ref, 'my_iota_island_id', 'island')
      ;(qso.refs as unknown[]).push(ref)
    }

    if (adifQSO.sota) {
      qso.refs = qso.refs ?? []
      ;(qso.refs as unknown[]).push({ type: 'sota', ref: adifQSO.sota })
    }
    if (adifQSO.my_sota) {
      qso.refs = qso.refs ?? []
      ;(qso.refs as unknown[]).push({ type: 'sotaActivation', ref: adifQSO.my_sota })
    }

    if (adifQSO.sig || adifQSO.sig_intl || adifQSO.my_sig || adifQSO.my_sig_intl) {
      const sigType = (adifQSO.sig_intl || adifQSO.my_sig_intl || adifQSO.sig || adifQSO.my_sig).toLowerCase()

      qso.refs = qso.refs ?? []

      const sigValue = adifQSO.sig_info_intl ?? adifQSO.sig_info
      if (sigValue || adifQSO.sig || adifQSO.sig_intl) (qso.refs as unknown[]).push({ type: sigType, ref: sigValue })

      const mySigValue = adifQSO.my_sig_info_intl ?? adifQSO.my_sig_info
      if (mySigValue || adifQSO.my_sig || adifQSO.my_sig_intl) (qso.refs as unknown[]).push({ type: `${sigType}Activation`, ref: mySigValue })
    }

    return qso
  } catch (error: unknown) {
    const err = error as Error
    qso._error = `${err.name}: ${err.message}`
    console.error(
      `Error parsing ADIF QSO - ${err.name}: ${err.message}`,
      '-- QSO Data:',
      adifQSO,
      '-- Error:',
      error
    )
    return qso
  }
}

const REGEXP_FOR_NUMERIC_FREQUENCY = /^[\d.]+$/

function parseFrequency(freq: string | undefined): number | string | undefined {
  if (freq && freq.match(REGEXP_FOR_NUMERIC_FREQUENCY)) {
    const n = Number.parseFloat(freq) * 1000
    return Math.round((n + Number.EPSILON) * 100) / 100
  } else {
    return freq
  }
}

function adifDateToISO(str: string, time?: string): string {
  if (time && time.indexOf(':')) {
    time = [time.substring(0, 2) || '00', time.substring(2, 4) || '00', time.substring(4, 6) || '00'].join(':')
  } else {
    time = '00:00:00'
  }
  return [str.substring(0, 4), str.substring(4, 6), str.substring(6, 8)].join('-') + `T${time}Z`
}

export function adifToQSON(str: string, options?: AdifToQsonOptions): QSONFromAdif {
  const qson = parseADIF(str, options)
  return { ...qson, version: '0.4' }
}

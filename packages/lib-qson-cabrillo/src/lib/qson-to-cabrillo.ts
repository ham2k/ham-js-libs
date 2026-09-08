// A Cabrillo 3.0 writer: the other direction from `qson-cabrillo.ts`, which
// only parses.
//
// Contest-agnostic on purpose — the headers and the per-QSO exchange columns
// are passed in — so every contest that submits a Cabrillo shares one writer
// rather than a copy of it.

import { fmtCabrilloDate, fmtCabrilloTime } from '@ham2k/lib-format-tools'
import { EHF_BANDS, SHF_BANDS, UHF_BANDS, VHF_BANDS } from '@ham2k/lib-operation-data'

/// A QSON record as this writer reads it. Structural, and JSON-shaped, so any
/// QSON record satisfies it without this package owning a schema for one.
export type QsonValue = string | number | boolean | null | QsonValue[] | { [key: string]: QsonValue }

export type QsonQso = Record<string, QsonValue>

/// VHF+ Cabrillo logs name their band rather than a kHz frequency; HF logs use
/// kHz. Includes the two entries the standard does not name ('5m', '12m').
const DEFAULT_FREQUENCIES_PER_BAND: Record<string, string> = {
  '160m': '1800', '80m': '3500', '60m': '5332', '40m': '7000', '30m': '10100',
  '20m': '14000', '17m': '18068', '15m': '21000', '12m': '24890', '10m': '28000',
  '6m': '50', '5m': '60', '4m': '70', '2m': '144', '1.25m': '222',
  '70cm': '432', '33cm': '902',
  '23cm': '1.2G', '13cm': '2.3G', '9cm': '3.4G', '6cm': '5.7G', '3cm': '10G',
  '1.25cm': '24G', '6mm': '47G', '4mm': '75G', '2.5mm': '122G', '2mm': '134G',
  '1mm': '241G', submm: 'LIGHT'
}

/// Every band whose Cabrillo column is an identifier rather than a frequency.
/// A band listed here MUST have an entry above, or its QSOs export as '0' —
/// the spec holds the two to each other.
const BANDS_REPORTED_AS_IDENTIFIERS = new Set<string>([
  ...VHF_BANDS, ...UHF_BANDS, ...SHF_BANDS, ...EHF_BANDS
])

function str (value: QsonValue | undefined): string {
  return typeof value === 'string' ? value : ''
}

/// The band decides, not the frequency: microwave operators log '10368.1'
/// meaning MHz, and a magnitude test reports that as an HF kHz frequency
/// instead of '10G'.
export function cabrilloFreq (qso: QsonQso): string {
  const band = str(qso.band)
  if (BANDS_REPORTED_AS_IDENTIFIERS.has(band)) return DEFAULT_FREQUENCIES_PER_BAND[band] ?? '0'
  const freq = Number(qso.freq)
  if (freq) return `${Math.round(freq)}`
  return DEFAULT_FREQUENCIES_PER_BAND[band] ?? '0'
}

/// Cabrillo collapses every phone mode to PH and everything non-CW/phone to DG.
export function cabrilloMode (qso: QsonQso): string {
  switch (str(qso.mode)) {
    case 'SSB': case 'USB': case 'LSB': case 'AM': case 'FM': return 'PH'
    case 'CW': return 'CW'
    default: return 'DG'
  }
}

export interface CabrilloOptions {
  /// `[name, value]` pairs emitted after START-OF-LOG; empty values are dropped.
  headers: Array<[string, string | undefined]>
  /// The exchange columns for one QSO, after frequency/mode/date/time — e.g.
  /// `[ourCall, ourRst, ourExchange, theirCall, theirRst, theirExchange]`.
  ///
  /// May answer with SEVERAL rows, which a QSO party's county line needs: a
  /// station operating from two counties submits one line per pairing, because
  /// each pairing is what the checker matches against the other station's log.
  /// Answering with no rows drops the contact from the file — how a contest
  /// declines to claim a QSO it cannot express.
  qsoParts: (qso: QsonQso) => string[] | string[][]
  createdBy?: string
}

/// One row, or several. A row is a list of strings; several rows are a list of
/// those — told apart by looking at the first element, since an empty answer
/// means "no rows" either way.
function rowsOf (parts: string[] | string[][]): string[][] {
  return Array.isArray(parts[0]) ? (parts as string[][]) : parts.length > 0 ? [parts as string[]] : []
}

export function qsonToCabrillo (
  qsos: QsonQso[],
  { headers, qsoParts, createdBy = 'Ham2K Logger' }: CabrilloOptions
): string {
  const lines: string[] = ['START-OF-LOG: 3.0', `CREATED-BY: ${createdBy}`]

  for (const [name, value] of headers) {
    if (value) lines.push(`${name}: ${value}`)
  }

  for (const qso of qsos) {
    // Event rows (breaks/starts) and deleted records aren't contacts.
    if (qso.band === 'event' || qso.deleted === true) continue
    const at = Number(qso.startAtMillis ?? qso.endAtMillis ?? 0)
    const prefix = [
      cabrilloFreq(qso).padEnd(5, ' '),
      cabrilloMode(qso).padEnd(2, ' '),
      fmtCabrilloDate(at).padEnd(10, ' '),
      fmtCabrilloTime(at).padEnd(4, ' ')
    ]
    for (const row of rowsOf(qsoParts(qso))) {
      lines.push(`QSO: ${[...prefix, row.join(' ')].join(' ')}`)
    }
  }

  lines.push('END-OF-LOG:')
  return lines.join('\n') + '\n'
}

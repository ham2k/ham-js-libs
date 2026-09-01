import { ARRL_SECTIONS } from './sections.js'
import { ARRL_DIVISIONS } from './divisions.js'

/**
 * The official section list, transcribed from ARRL's "ARRL / RAC Section
 * Abbreviation List", updated 6/2024:
 * https://www.arrl.org/files/file/Field-Day/2024/4_35-ARRL-RAC%20Section%20List.pdf
 *
 * This guards against drift from memory — the list has changed twice recently
 * (GTA became GH in 2023, and Maritime split into NB, NS and PE), and both
 * changes were initially missed here.
 */
const OFFICIAL_US_SECTIONS = [
  'CT', 'EMA', 'ME', 'NH', 'RI', 'VT', 'WMA',                                  // call area 1
  'ENY', 'NLI', 'NNJ', 'NNY', 'SNJ', 'WNY',                                    // 2
  'DE', 'EPA', 'MDC', 'WPA',                                                   // 3
  'AL', 'GA', 'KY', 'NC', 'NFL', 'SC', 'SFL', 'TN', 'VA', 'WCF', 'PR', 'VI',   // 4
  'AR', 'LA', 'MS', 'NM', 'NTX', 'OK', 'STX', 'WTX',                           // 5
  'EB', 'LAX', 'ORG', 'SB', 'SCV', 'SDG', 'SF', 'SJV', 'SV', 'PAC',            // 6
  'AK', 'AZ', 'EWA', 'ID', 'MT', 'NV', 'OR', 'UT', 'WWA', 'WY',                // 7
  'MI', 'OH', 'WV',                                                            // 8
  'IL', 'IN', 'WI',                                                            // 9
  'CO', 'IA', 'KS', 'MN', 'MO', 'NE', 'ND', 'SD'                               // 0
]

const OFFICIAL_CANADIAN_SECTIONS = [
  'AB', 'BC', 'GH', 'MB', 'NB', 'NL', 'NS', 'ONE', 'ONN', 'ONS', 'PE', 'QC', 'SK', 'TER'
]

describe('the official ARRL/RAC section list', () => {
  it('has 71 US and 14 Canadian sections', () => {
    expect(OFFICIAL_US_SECTIONS.length).toEqual(71)
    expect(OFFICIAL_CANADIAN_SECTIONS.length).toEqual(14)
  })

  it('matches ARRL_SECTIONS exactly, with no extras and nothing missing', () => {
    const official = [...OFFICIAL_US_SECTIONS, ...OFFICIAL_CANADIAN_SECTIONS].sort()
    expect(Object.keys(ARRL_SECTIONS).sort()).toEqual(official)
  })

  it('assigns each section to the right country', () => {
    for (const code of OFFICIAL_US_SECTIONS) expect(ARRL_SECTIONS[code].countryCode).toEqual('US')
    for (const code of OFFICIAL_CANADIAN_SECTIONS) expect(ARRL_SECTIONS[code].countryCode).toEqual('CA')
  })

  it('lists every section in exactly one division', () => {
    const listed = Object.values(ARRL_DIVISIONS).flatMap((d) => d.sectionCodes)
    expect(listed.sort()).toEqual([...OFFICIAL_US_SECTIONS, ...OFFICIAL_CANADIAN_SECTIONS].sort())
  })

  it('no longer carries the retired GTA and MAR codes', () => {
    expect(ARRL_SECTIONS.GTA).toBeUndefined()
    expect(ARRL_SECTIONS.MAR).toBeUndefined()
  })
})

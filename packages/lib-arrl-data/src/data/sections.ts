import { ARRLSection } from '../types.js'
import { ARRL_DIVISIONS } from './divisions.js'
import { SECTION_POINTS } from './sectionPoints.js'
import { SECTIONS_FOR_STATES } from './sectionsForStates.js'

const SECTION_NAMES: Record<string, string> = {
  AB: 'Alberta',
  AK: 'Alaska',
  AL: 'Alabama',
  AR: 'Arkansas',
  AZ: 'Arizona',
  BC: 'British Columbia',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  EB: 'East Bay',
  EMA: 'Eastern Massachusetts',
  ENY: 'Eastern New York',
  EPA: 'Eastern Pennsylvania',
  EWA: 'Eastern Washington',
  GA: 'Georgia',
  GH: 'Golden Horseshoe',
  IA: 'Iowa',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  LAX: 'Los Angeles',
  MB: 'Manitoba',
  MDC: 'Maryland-DC',
  ME: 'Maine',
  MI: 'Michigan',
  MN: 'Minnesota',
  MO: 'Missouri',
  MS: 'Mississippi',
  MT: 'Montana',
  NB: 'New Brunswick',
  NC: 'North Carolina',
  ND: 'North Dakota',
  NE: 'Nebraska',
  NFL: 'Northern Florida',
  NH: 'New Hampshire',
  NL: 'Newfoundland/Labrador',
  NLI: 'New York City-Long Island',
  NM: 'New Mexico',
  NNJ: 'Northern New Jersey',
  NNY: 'Northern New York',
  NTX: 'North Texas',
  NS: 'Nova Scotia',
  NV: 'Nevada',
  OH: 'Ohio',
  OK: 'Oklahoma',
  ONE: 'Ontario East',
  ONN: 'Ontario North',
  ONS: 'Ontario South',
  OR: 'Oregon',
  ORG: 'Orange',
  PAC: 'Pacific',
  PE: 'Prince Edward Island',
  PR: 'Puerto Rico',
  QC: 'Quebec',
  RI: 'Rhode Island',
  SB: 'Santa Barbara',
  SC: 'South Carolina',
  SCV: 'Santa Clara Valley',
  SD: 'South Dakota',
  SDG: 'San Diego',
  SF: 'San Francisco',
  SFL: 'Southern Florida',
  SJV: 'San Joaquin Valley',
  SK: 'Saskatchewan',
  SNJ: 'Southern New Jersey',
  STX: 'South Texas',
  SV: 'Sacramento Valley',
  TER: 'Territories',
  TN: 'Tennessee',
  UT: 'Utah',
  VA: 'Virginia',
  VI: 'Virgin Islands',
  VT: 'Vermont',
  WCF: 'West Central Florida',
  WI: 'Wisconsin',
  WMA: 'Western Massachusetts',
  WNY: 'Western New York',
  WPA: 'Western Pennsylvania',
  WTX: 'West Texas',
  WV: 'West Virginia',
  WWA: 'Western Washington',
  WY: 'Wyoming'
}

function pointFor (code: string): { lat: number, lon: number } {
  const point = SECTION_POINTS[code]
  if (!point) throw new Error(`No point for section ${code}: run npm run generate:points, then npm run generate`)
  return { lat: point.lat, lon: point.lon }
}

/** The states and provinces each section covers, and the counties, when it covers only part of one. */
const AREAS: Record<string, { states: string[], counties?: string[] }> = {}
for (const [state, sections] of Object.entries(SECTIONS_FOR_STATES).sort(([a], [b]) => a.localeCompare(b))) {
  if (typeof sections === 'string') {
    (AREAS[sections] ??= { states: [] }).states.push(state)
  } else {
    for (const [county, code] of Object.entries(sections).sort(([a], [b]) => a.localeCompare(b))) {
      const area = (AREAS[code] ??= { states: [] })
      if (!area.states.includes(state)) area.states.push(state)
      ;(area.counties ??= []).push(county)
    }
  }
}

export const ARRL_SECTIONS: Record<string, ARRLSection> = Object.fromEntries(
  Object.values(ARRL_DIVISIONS).flatMap((division) =>
    division.sectionCodes.map((code) => [code, {
      code,
      name: SECTION_NAMES[code],
      divisionCode: division.code,
      countryCode: division.countryCode,
      ...pointFor(code),
      ...AREAS[code]
    }])
  )
)

import { ARRLDivision } from '../types.js'

export const ARRL_DIVISIONS: Record<string, ARRLDivision> = {
  ATL: { code: 'ATL', name: 'Atlantic', countryCode: 'US', sectionCodes: ['DE', 'EPA', 'MDC', 'NNY', 'SNJ', 'WNY', 'WPA'] },
  CEN: { code: 'CEN', name: 'Central', countryCode: 'US', sectionCodes: ['IL', 'IN', 'WI'] },
  DAK: { code: 'DAK', name: 'Dakota', countryCode: 'US', sectionCodes: ['MN', 'ND', 'SD'] },
  DEL: { code: 'DEL', name: 'Delta', countryCode: 'US', sectionCodes: ['AR', 'LA', 'MS', 'TN'] },
  GL: { code: 'GL', name: 'Great Lakes', countryCode: 'US', sectionCodes: ['KY', 'MI', 'OH'] },
  HUD: { code: 'HUD', name: 'Hudson', countryCode: 'US', sectionCodes: ['ENY', 'NLI', 'NNJ'] },
  MID: { code: 'MID', name: 'Midwest', countryCode: 'US', sectionCodes: ['IA', 'KS', 'MO', 'NE'] },
  NE: { code: 'NE', name: 'New England', countryCode: 'US', sectionCodes: ['CT', 'EMA', 'ME', 'NH', 'RI', 'VT', 'WMA'] },
  NW: { code: 'NW', name: 'Northwestern', countryCode: 'US', sectionCodes: ['AK', 'EWA', 'ID', 'MT', 'OR', 'WWA'] },
  PAC: { code: 'PAC', name: 'Pacific', countryCode: 'US', sectionCodes: ['EB', 'NV', 'PAC', 'SCV', 'SF', 'SJV', 'SV'] },
  ROA: { code: 'ROA', name: 'Roanoke', countryCode: 'US', sectionCodes: ['NC', 'SC', 'VA', 'WV'] },
  RM: { code: 'RM', name: 'Rocky Mountain', countryCode: 'US', sectionCodes: ['CO', 'NM', 'UT', 'WY'] },
  SE: { code: 'SE', name: 'Southeastern', countryCode: 'US', sectionCodes: ['AL', 'GA', 'NFL', 'PR', 'SFL', 'VI', 'WCF'] },
  SW: { code: 'SW', name: 'Southwestern', countryCode: 'US', sectionCodes: ['AZ', 'LAX', 'ORG', 'SB', 'SDG'] },
  WG: { code: 'WG', name: 'West Gulf', countryCode: 'US', sectionCodes: ['NTX', 'OK', 'STX', 'WTX'] },
  CAN: { code: 'CAN', name: 'Canada', countryCode: 'CA', sectionCodes: ['AB', 'BC', 'GH', 'MB', 'NB', 'NL', 'NS', 'ONE', 'ONN', 'ONS', 'PE', 'QC', 'SK', 'TER'] }
}

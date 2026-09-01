import { findSection, findSectionCode, sectionsForState } from './findSection.js'
import { ARRL_SECTIONS } from '../data/sections.js'
import { ARRL_DIVISIONS } from '../data/divisions.js'
import { SECTIONS_FOR_STATES } from '../data/sectionsForStates.js'

describe('findSection', () => {
  it('finds sections for single-section states', () => {
    expect(findSection('VT')?.code).toEqual('VT')
    expect(findSection('VT')?.name).toEqual('Vermont')
    expect(findSection('DC')?.code).toEqual('MDC')
    expect(findSection('HI')?.code).toEqual('PAC')
    expect(findSection('PE')?.code).toEqual('PE')
    expect(findSection('NB')?.code).toEqual('NB')
    expect(findSection('NT')?.code).toEqual('TER')
  })

  it('ignores case and whitespace in state codes', () => {
    expect(findSectionCode(' vt ')).toEqual('VT')
  })

  it('finds sections for multi-section states, given a county', () => {
    expect(findSectionCode('MA', 'Suffolk')).toEqual('EMA')
    expect(findSectionCode('MA', 'Berkshire')).toEqual('WMA')
    expect(findSectionCode('NY', 'Kings')).toEqual('NLI')
    expect(findSectionCode('NY', 'St. Lawrence')).toEqual('NNY')
    expect(findSectionCode('CA', 'Santa Clara')).toEqual('SCV')
    expect(findSectionCode('TX', 'El Paso')).toEqual('WTX')
    expect(findSectionCode('FL', 'Miami-Dade')).toEqual('SFL')
    expect(findSectionCode('PA', 'Northampton')).toEqual('EPA')
    expect(findSectionCode('PA', 'Forest')).toEqual('WPA')
  })

  it('ignores case, punctuation and suffixes in county names', () => {
    expect(findSectionCode('NY', 'saint lawrence county')).toEqual('NNY')
    expect(findSectionCode('FL', 'miami dade')).toEqual('SFL')
    expect(findSectionCode('WA', 'PEND OREILLE County')).toEqual('EWA')
    expect(findSectionCode('LA', 'Orleans Parish')).toEqual('LA')
  })

  it('returns null when the county is needed but missing or unknown', () => {
    expect(findSection('MA')).toBeNull()
    expect(findSection('TX')).toBeNull()
    expect(findSection('MA', 'Nowhere')).toBeNull()
  })

  it('returns null for unknown or empty states', () => {
    expect(findSection('ZZ')).toBeNull()
    expect(findSection('')).toBeNull()
    expect(findSection(undefined)).toBeNull()
    expect(findSection(null)).toBeNull()
  })

  it('ignores the county when the state has a single section', () => {
    expect(findSectionCode('VT', 'Chittenden')).toEqual('VT')
  })
})

describe('Ontario', () => {
  it('finds the four Ontario sections by census division', () => {
    expect(findSectionCode('ON', 'Toronto')).toEqual('GH')
    expect(findSectionCode('ON', 'Peel')).toEqual('GH')
    expect(findSectionCode('ON', 'Hamilton')).toEqual('GH')
    expect(findSectionCode('ON', 'Niagara')).toEqual('GH')
    expect(findSectionCode('ON', 'Ottawa')).toEqual('ONE')
    expect(findSectionCode('ON', 'Renfrew')).toEqual('ONE')
    expect(findSectionCode('ON', 'Thunder Bay')).toEqual('ONN')
    expect(findSectionCode('ON', 'Greater Sudbury')).toEqual('ONN')
    expect(findSectionCode('ON', 'Essex')).toEqual('ONS')
    expect(findSectionCode('ON', 'Parry Sound')).toEqual('ONS')
  })

  it('matches compound names written with "and" or "&"', () => {
    expect(findSectionCode('ON', 'Leeds and Grenville')).toEqual('ONE')
    expect(findSectionCode('ON', 'Leeds & Grenville')).toEqual('ONE')
    expect(findSectionCode('ON', 'Stormont, Dundas & Glengarry')).toEqual('ONE')
    expect(findSectionCode('ON', 'Lennox & Addington')).toEqual('ONE')
  })

  it('recognizes the places RAC names directly', () => {
    expect(findSectionCode('ON', 'Burlington')).toEqual('GH')
    expect(findSectionCode('ON', 'North Bay')).toEqual('ONN')
    expect(findSectionCode('ON', 'Killarney')).toEqual('ONN')
    expect(findSectionCode('ON', 'Algonquin Park')).toEqual('ONE')
  })

  it('still needs a division for Ontario', () => {
    expect(findSection('ON')).toBeNull()
    expect(sectionsForState('ON').map((s) => s.code)).toEqual(['GH', 'ONE', 'ONN', 'ONS'])
  })
})

describe('sectionsForState', () => {
  it('lists every section covering a state', () => {
    expect(sectionsForState('MA').map((s) => s.code)).toEqual(['EMA', 'WMA'])
    expect(sectionsForState('TX').map((s) => s.code)).toEqual(['NTX', 'STX', 'WTX'])
    expect(sectionsForState('VT').map((s) => s.code)).toEqual(['VT'])
    expect(sectionsForState('ZZ')).toEqual([])
  })
})

describe('ARRL_SECTIONS and ARRL_DIVISIONS', () => {
  it('names every section', () => {
    for (const section of Object.values(ARRL_SECTIONS)) {
      expect(section.name).toBeTruthy()
      expect(ARRL_DIVISIONS[section.divisionCode]).toBeTruthy()
    }
  })

  it('only maps states to known sections', () => {
    for (const sections of Object.values(SECTIONS_FOR_STATES)) {
      const codes = typeof sections === 'string' ? [sections] : Object.values(sections)
      for (const code of codes) expect(ARRL_SECTIONS[code]).toBeTruthy()
    }
  })
})

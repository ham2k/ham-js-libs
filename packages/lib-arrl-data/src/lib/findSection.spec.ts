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
    expect(findSection('PE')?.code).toEqual('MAR')
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

describe('sectionsForState', () => {
  it('lists every section covering a state', () => {
    expect(sectionsForState('MA').map((s) => s.code)).toEqual(['EMA', 'WMA'])
    expect(sectionsForState('TX').map((s) => s.code)).toEqual(['NTX', 'STX', 'WTX'])
    expect(sectionsForState('VT').map((s) => s.code)).toEqual(['VT'])
    expect(sectionsForState('ZZ')).toEqual([])
  })
})

describe('ARRL_SECTIONS and ARRL_DIVISIONS', () => {
  it('has 71 US sections and 12 Canadian sections', () => {
    const sections = Object.values(ARRL_SECTIONS)
    expect(sections.filter((s) => s.countryCode === 'US').length).toEqual(71)
    expect(sections.filter((s) => s.countryCode === 'CA').length).toEqual(12)
  })

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

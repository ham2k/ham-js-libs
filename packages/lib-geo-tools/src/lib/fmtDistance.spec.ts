import GLOBAL from '../global'
import { fmtDistance } from './fmtDistance'

describe('fmtDistance', () => {
  it('returns empty string for falsy distance', () => {
    expect(fmtDistance(0, {})).toBe('')
    expect(fmtDistance(undefined, {})).toBe('')
  })

  it('formats kilometers by default', () => {
    expect(fmtDistance(3.456, { units: 'km' })).toMatch(/3\.5 km$/)
  })

  it('uses fewer decimals for large distances when precision is omitted', () => {
    expect(fmtDistance(12.3, {})).toMatch(/12 km$/)
  })

  it('formats miles', () => {
    expect(fmtDistance(10, { units: 'miles', precision: 0 })).toBe('10 mi')
  })

  it('adds thousands separator for whole-number strings', () => {
    expect(fmtDistance(123456, {})).toBe('123,456 km')
  })

  it('appends " away" when options.away is set (fallback without i18n)', () => {
    expect(fmtDistance(5, { away: true })).toBe('5.0 km away')
  })

  it('uses GLOBAL.t when provided', () => {
    const prev = GLOBAL.t
    GLOBAL.t = () => 'translated'
    expect(fmtDistance(5, { away: true })).toBe('translated')
    GLOBAL.t = prev
  })
})

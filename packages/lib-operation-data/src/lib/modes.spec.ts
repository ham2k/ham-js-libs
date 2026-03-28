import { modeForFrequency } from './modes'

describe('modeForFrequency', () => {
  it('should find the most common mode for a frequency', () => {
    expect(modeForFrequency(14255)).toEqual('SSB')
    expect(modeForFrequency(14107)).toEqual('CW')
    expect(modeForFrequency(14074)).toEqual('FT8')
  })

  it('should handle different bandplans for different regions', () => {
    expect(modeForFrequency(14140)).toEqual('CW')
    expect(modeForFrequency(14140, { ituRegion: 2 })).toEqual('SSB')
  })

  it('should handle different priorities', () => {
    // ituRegion 2 should make CW be the match for 14074, but priority 100 for FT8 should make FT8 the match
    expect(modeForFrequency(14074, { ituRegion: 2 })).toEqual('FT8')
  })

  // The current bandplan data does not have any entity-specific segments
  // TODO: mock data for this test
  // it('should handle different bandplans for different entities', () => {
  //   expect(modeForFrequency(14140, { entityPrefix: 'K' })).toEqual('CW')
  //   expect(modeForFrequency(14140, { entityPrefix: 'VK' })).toBeNull()
  // })

  it('should handle different bandplans for different countries', () => {
    expect(modeForFrequency(7090, { countryCode: 'us' })).toBe('RTTY')
    expect(modeForFrequency(7090, { countryCode: 've' })).toBe('SSB')
    expect(modeForFrequency(7090, { countryCode: 'au' })).toBeNull()
  })

})


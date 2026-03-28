import { locationForQSONInfo } from './locationForQSONInfo'

describe('locationForQSONInfo', () => {
  it('resolves a maidenhead grid', () => {
    const loc = locationForQSONInfo({ grid: 'FN31' })
    expect(loc).toEqual({ latitude: 41.5, longitude: -73.0 })
  })

  it('reads grid from guess', () => {
    const loc = locationForQSONInfo({ guess: { grid: 'EM75' } })
    expect(loc).toEqual({ latitude: 35.5, longitude: -85.0 })
  })

  it('returns null for placeholder grids', () => {
    expect(locationForQSONInfo({ grid: 'AA00' })).toBeNull()
    expect(locationForQSONInfo({ grid: 'AA00aa' })).toBeNull()
  })

  it('uses entityRegionLocations for PREFIX-STATE when state is known', () => {
    const loc = locationForQSONInfo({ entityPrefix: 'K', state: 'ca' })
    expect(loc).toEqual({ latitude: 37.6, longitude: -119.7 })
  })

  it('falls back to DXCC_BY_PREFIX when there is no region row', () => {
    const loc = locationForQSONInfo({ entityPrefix: 'K' })
    expect(loc).toEqual({ latitude: 37.6, longitude: -91.87 })
  })

  it('returns null when nothing matches', () => {
    expect(locationForQSONInfo({})).toBeNull()
  })
})

import { distanceForQSON } from './distanceForQSON'

describe('distanceForQSON', () => {
  it('returns null when either side has no location', () => {
    expect(distanceForQSON({}, { units: 'km' })).toBeNull()
    expect(distanceForQSON({ our: { grid: 'FN31' } }, { units: 'km' })).toBeNull()
  })

  it('computes distance between two grids', () => {
    const km = distanceForQSON({
      our: { grid: 'FN31' },
      their: { grid: 'EM75' }
    }, { units: 'km' })
    expect(km).not.toBeNull()
    expect(km!).toBeGreaterThan(1000)
  })
})

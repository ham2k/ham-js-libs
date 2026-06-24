import { distanceForRegion1VHFContests } from './distanceForRegion1VHFContests'
import { gridToLocation } from './gridToLocation'

describe('distanceForRegion1VHFContests', () => {
  it('returns null when locations are missing or invalid', () => {
    expect(distanceForRegion1VHFContests(null, 'JO55ww')).toBeNull()
    expect(distanceForRegion1VHFContests('JO55ww', null)).toBeNull()
    expect(distanceForRegion1VHFContests('invalid', 'JO55ww')).toBeNull()
    expect(distanceForRegion1VHFContests({}, { lat: 1, lon: 1 })).toBeNull()
  })

  it('matches the documented JO55WW / JO65FR example', () => {
    // VUSHF / IARU R1 rules example: 43.17 km → 44 contest points
    expect(distanceForRegion1VHFContests('JO55WW', 'JO65FR')).toBe(44)
  })

  it('matches other examples', () => {
    expect(distanceForRegion1VHFContests('FN21rq', 'FN21rp')).toBe(5)
    expect(distanceForRegion1VHFContests('JO33fd', 'IO91mm')).toBe(536)
  })

  it('uses the centre of each locator square', () => {
    const [lat1, lon1] = gridToLocation('JO55WW')
    const [lat2, lon2] = gridToLocation('JO65FR')
    expect(distanceForRegion1VHFContests('JO55WW', 'JO65FR'))
      .toBe(distanceForRegion1VHFContests({ lat: lat1, lon: lon1 }, { lat: lat2, lon: lon2 }))
  })

  it('accepts grid on a location object', () => {
    expect(distanceForRegion1VHFContests({ grid: 'JO55WW' }, { grid: 'JO65FR' })).toBe(44)
  })

  it('scores a minimum of 1 point for co-located stations', () => {
    expect(distanceForRegion1VHFContests('JO55WW', 'JO55WW')).toBe(1)
  })
})

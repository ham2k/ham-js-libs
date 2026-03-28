import { distanceOnEarth } from './distanceOnEarth'

describe('distanceOnEarth', () => {
  it('returns null when coordinates are missing', () => {
    expect(distanceOnEarth({}, {})).toBeNull()
    expect(distanceOnEarth({ lat: 1 }, { lat: 1, lon: 1 })).toBeNull()
  })

  it('returns 0 for identical points', () => {
    const p = { lat: 40.7128, lon: -74.006 }
    expect(distanceOnEarth(p, p)).toBe(0)
  })

  it('supports lat/lon and latitude/longitude keys', () => {
    const a = { latitude: 51.5074, longitude: -0.1278 }
    const b = { lat: 48.8566, lon: 2.3522 }
    const km = distanceOnEarth(a, b)
    expect(km).not.toBeNull()
    expect(km!).toBeGreaterThan(300)
    expect(km!).toBeLessThan(400)
  })

  it('handles equator and prime meridian', () => {
    expect(distanceOnEarth({ lat: 0, lon: 0 }, { lat: 0, lon: 1 })).not.toBeNull()
  })

  it('uses miles when units is miles', () => {
    const km = distanceOnEarth({ lat: 0, lon: 0 }, { lat: 0, lon: 1 }, { units: 'km' })
    const mi = distanceOnEarth({ lat: 0, lon: 0 }, { lat: 0, lon: 1 }, { units: 'miles' })
    expect(km).not.toBeNull()
    expect(mi).not.toBeNull()
    expect(mi! / km!).toBeCloseTo(3958.8 / 6371, 5)
  })
})

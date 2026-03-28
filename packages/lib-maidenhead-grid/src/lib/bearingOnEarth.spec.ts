import { bearingOnEarth } from './bearingOnEarth'

describe('bearingOnEarth', () => {
  it('returns null when coordinates are missing', () => {
    expect(bearingOnEarth({}, {})).toBeNull()
  })

  it('returns a compass bearing in degrees [0, 360)', () => {
    const london = { lat: 51.5074, lon: -0.1278 }
    const paris = { lat: 48.8566, lon: 2.3522 }
    const b = bearingOnEarth(london, paris)
    expect(b).not.toBeNull()
    expect(b!).toBeGreaterThanOrEqual(0)
    expect(b!).toBeLessThan(360)
  })

  it('handles equator points', () => {
    const b = bearingOnEarth({ lat: 0, lon: 0 }, { lat: 0, lon: 10 })
    expect(b).not.toBeNull()
  })
})

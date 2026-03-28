import { bearingForQSON } from './bearingForQSON'

describe('bearingForQSON', () => {
  it('returns null when either side has no location', () => {
    expect(bearingForQSON({})).toBeNull()
  })

  it('returns bearing from our station to their station', () => {
    const b = bearingForQSON({
      our: { grid: 'FN31' },
      their: { grid: 'EM75' }
    })
    expect(b).not.toBeNull()
    expect(b!).toBeGreaterThanOrEqual(0)
    expect(b!).toBeLessThan(360)
  })
})

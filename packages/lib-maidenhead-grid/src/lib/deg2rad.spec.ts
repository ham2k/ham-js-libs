import { deg2rad } from './deg2rad'

describe('deg2rad', () => {
  it('converts degrees to radians', () => {
    expect(deg2rad(0)).toBe(0)
    expect(deg2rad(90)).toBeCloseTo(Math.PI / 2)
    expect(deg2rad(180)).toBeCloseTo(Math.PI)
    expect(deg2rad(-45)).toBeCloseTo(-Math.PI / 4)
  })

  it('returns NaN for missing values', () => {
    expect(deg2rad(undefined)).toBeNaN()
    expect(deg2rad(null)).toBeNaN()
  })
})

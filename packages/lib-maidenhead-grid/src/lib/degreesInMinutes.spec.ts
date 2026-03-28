import { degreesInMinutes } from './degreesInMinutes'

describe('degreesInMinutes', () => {
  it('splits decimal degrees into components', () => {
    expect(degreesInMinutes(37.5)).toMatchObject({
      degrees: 37,
      minutes: 30,
      seconds: 0
    })
  })

  it('preserves sign on whole degrees', () => {
    expect(degreesInMinutes(-12)).toMatchObject({ degrees: -12, minutes: 0 })
  })
})

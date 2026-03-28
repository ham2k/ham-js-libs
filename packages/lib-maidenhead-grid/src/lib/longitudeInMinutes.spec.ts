import { longitudeInMinutes } from './longitudeInMinutes'

describe('longitudeInMinutes', () => {
  it('uses E/W and absolute degrees', () => {
    expect(longitudeInMinutes(151.2)).toMatchObject({
      direction: 'E',
      degrees: 151
    })
    expect(longitudeInMinutes(-74.0)).toMatchObject({
      direction: 'W',
      degrees: 74
    })
  })
})

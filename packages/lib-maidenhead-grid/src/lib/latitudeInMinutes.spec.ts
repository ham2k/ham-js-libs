import { latitudeInMinutes } from './latitudeInMinutes'

describe('latitudeInMinutes', () => {
  it('uses N/S and absolute degrees', () => {
    expect(latitudeInMinutes(40.5)).toMatchObject({
      direction: 'N',
      degrees: 40
    })
    expect(latitudeInMinutes(-33.2)).toMatchObject({
      direction: 'S',
      degrees: 33
    })
  })
})

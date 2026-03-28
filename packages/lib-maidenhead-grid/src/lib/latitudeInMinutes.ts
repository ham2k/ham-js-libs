import { degreesInMinutes } from './degreesInMinutes'

export function latitudeInMinutes (latitude: number): {
  degrees: number
  minutes: number
  fractionalMinutes: number
  seconds: number
  direction: 'N' | 'S'
} {
  const values = degreesInMinutes(latitude)
  return {
    ...values,
    direction: values.degrees < 0 ? 'S' : 'N',
    degrees: Math.abs(values.degrees)
  }
}

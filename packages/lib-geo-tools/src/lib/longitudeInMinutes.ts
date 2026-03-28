import { degreesInMinutes } from './degreesInMinutes'

export function longitudeInMinutes (longitude: number): {
  degrees: number
  minutes: number
  fractionalMinutes: number
  seconds: number
  direction: 'E' | 'W'
} {
  const values = degreesInMinutes(longitude)
  return {
    ...values,
    direction: values.degrees < 0 ? 'W' : 'E',
    degrees: Math.abs(values.degrees)
  }
}

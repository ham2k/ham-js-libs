import { deg2rad } from './deg2rad'

export interface EarthLocationInput {
  lat?: number
  lon?: number
  latitude?: number
  longitude?: number
}

export function distanceOnEarth (
  location1: EarthLocationInput | null | undefined,
  location2: EarthLocationInput | null | undefined,
  options: { units?: string } = {}
): number | null {
  let radius: number
  if (options.units === 'miles') {
    radius = 3958.8 // Radius of the Earth in miles
  } else {
    radius = 6371 // Radius of the Earth in km
  }

  const lat1 = deg2rad(location1?.lat ?? location1?.latitude)
  const lon1 = deg2rad(location1?.lon ?? location1?.longitude)
  const lat2 = deg2rad(location2?.lat ?? location2?.latitude)
  const lon2 = deg2rad(location2?.lon ?? location2?.longitude)

  if (Number.isNaN(lat1) || Number.isNaN(lon1) || Number.isNaN(lat2) || Number.isNaN(lon2)) {
    return null
  }

  const sinLat = Math.sin((lat2 - lat1) / 2)
  const sinLon = Math.sin((lon2 - lon1) / 2)

  const a = sinLat * sinLat + Math.cos(lat1) * Math.cos(lat2) * sinLon * sinLon
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return radius * c
}

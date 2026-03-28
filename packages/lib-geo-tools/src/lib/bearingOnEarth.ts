import { deg2rad } from './deg2rad'
import type { EarthLocationInput } from './distanceOnEarth'

export function bearingOnEarth (
  location1: EarthLocationInput | null | undefined,
  location2: EarthLocationInput | null | undefined
): number | null {
  const lat1 = deg2rad(location1?.lat ?? location1?.latitude)
  const lon1 = deg2rad(location1?.lon ?? location1?.longitude)
  const lat2 = deg2rad(location2?.lat ?? location2?.latitude)
  const lon2 = deg2rad(location2?.lon ?? location2?.longitude)

  if (Number.isNaN(lat1) || Number.isNaN(lon1) || Number.isNaN(lat2) || Number.isNaN(lon2)) {
    return null
  }

  const y = Math.sin(lon2 - lon1) * Math.cos(lat2)
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1)
  const theta = Math.atan2(y, x)

  return (theta * 180 / Math.PI + 360) % 360 // in degrees
}

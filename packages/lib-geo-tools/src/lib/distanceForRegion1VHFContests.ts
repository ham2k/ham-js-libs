import { deg2rad } from './deg2rad'
import { gridToLocation } from './gridToLocation'
import type { EarthLocationInput } from './distanceOnEarth'

/** IARU Region 1 VHF contest rules use 111.2 km per degree (Noordwijkerhout, 1987). */
const KM_PER_DEGREE = 111.2

export interface Region1VHFContestLocationInput extends EarthLocationInput {
  grid?: string
}

function resolveLocation (
  input: Region1VHFContestLocationInput | string | null | undefined
): { lat: number, lon: number } | null {
  if (input == null) return null

  if (typeof input === 'string') {
    try {
      const [lat, lon] = gridToLocation(input)
      return { lat, lon }
    } catch {
      return null
    }
  }

  if (input.grid) {
    try {
      const [lat, lon] = gridToLocation(input.grid)
      return { lat, lon }
    } catch {
      return null
    }
  }

  const lat = input.lat ?? input.latitude
  const lon = input.lon ?? input.longitude
  if (lat == null || lon == null || Number.isNaN(lat) || Number.isNaN(lon)) {
    return null
  }

  return { lat, lon }
}

/**
 * Distance in kilometres between two stations using the IARU Region 1 VHF contest
 * spherical geometry formula (111.2 km per degree). Locator squares are resolved
 * to the centre of each square.
 */
function region1VHFContestDistanceKm (
  location1: Region1VHFContestLocationInput | string | null | undefined,
  location2: Region1VHFContestLocationInput | string | null | undefined
): number | null {
  const loc1 = resolveLocation(location1)
  const loc2 = resolveLocation(location2)
  if (!loc1 || !loc2) return null

  const lat1 = deg2rad(loc1.lat)
  const lon1 = deg2rad(loc1.lon)
  const lat2 = deg2rad(loc2.lat)
  const lon2 = deg2rad(loc2.lon)

  if (Number.isNaN(lat1) || Number.isNaN(lon1) || Number.isNaN(lat2) || Number.isNaN(lon2)) {
    return null
  }

  const cosAngle = Math.sin(lat1) * Math.sin(lat2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2)

  // Guard against floating-point drift outside arccos domain.
  const angleRadians = Math.acos(Math.min(1, Math.max(-1, cosAngle)))

  // 111.2 is km per degree of arc (not per radian).
  return KM_PER_DEGREE * (angleRadians * (180 / Math.PI))
}

/**
 * Contest distance points for IARU Region 1 VHF contests (bands up to 10 GHz):
 * calculated kilometres are truncated to an integer and 1 km is added.
 */
export function distanceForRegion1VHFContests (
  location1: Region1VHFContestLocationInput | string | null | undefined,
  location2: Region1VHFContestLocationInput | string | null | undefined
): number | null {
  const km = region1VHFContestDistanceKm(location1, location2)
  if (km === null) return null
  return Math.floor(km) + 1
}

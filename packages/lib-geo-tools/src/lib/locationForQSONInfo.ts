import { DXCC_BY_PREFIX } from '@ham2k/lib-dxcc-data'
import entityRegionLocations from '../data/entityRegionLocations.json'
import { gridToLocation } from './gridToLocation'

export interface QSONInfoLike {
  grid?: string
  guess?: { grid?: string, entityPrefix?: string, state?: string }
  entityPrefix?: string
  state?: string
}

export interface QSONLike {
  their?: QSONInfoLike | null
  our?: QSONInfoLike | null
}

export function locationForQSONInfo (qsonInfo: QSONInfoLike | null | undefined): {
  latitude: number
  longitude: number
} | null {
  try {
    const grid = qsonInfo?.grid ?? qsonInfo?.guess?.grid

    if (grid && grid !== 'AA00' && grid !== 'AA00aa') {
      const [latitude, longitude] = gridToLocation(grid)
      return { latitude, longitude }
    }

    const entityPrefix = qsonInfo?.entityPrefix ?? qsonInfo?.guess?.entityPrefix
    const rawState = qsonInfo?.state ?? qsonInfo?.guess?.state
    const region = rawState?.trim() ? rawState.trim().toUpperCase() : undefined
    if (entityPrefix) {
      const compositeKey = region ? `${entityPrefix}-${region}` : entityPrefix

      if (region) {
        const table = entityRegionLocations as Record<string, number[]>
        const pair = table[compositeKey]
        if (pair && pair.length >= 2) {
          return { latitude: pair[1], longitude: pair[0] }
        }
      }

      const entity = DXCC_BY_PREFIX[compositeKey] ?? DXCC_BY_PREFIX[entityPrefix]
      if (entity?.lat != null && entity?.lon != null) {
        return { latitude: entity.lat, longitude: entity.lon }
      }
    }
    return null
  } catch {
    return null
  }
}

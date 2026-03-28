import { distanceOnEarth } from './distanceOnEarth'
import { locationForQSONInfo, type QSONLike } from './locationForQSONInfo'

export function distanceForQSON (
  qso: QSONLike | null | undefined,
  { units }: { units?: string }
): number | null {
  const theirLocation = locationForQSONInfo(qso?.their)
  const ourLocation = locationForQSONInfo(qso?.our)
  return (theirLocation && ourLocation) ? distanceOnEarth(theirLocation, ourLocation, { units }) : null
}

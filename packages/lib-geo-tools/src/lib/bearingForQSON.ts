import { bearingOnEarth } from './bearingOnEarth'
import { locationForQSONInfo, type QSONLike } from './locationForQSONInfo'

export function bearingForQSON (qso: QSONLike | null | undefined): number | null {
  const theirLocation = locationForQSONInfo(qso?.their)
  const ourLocation = locationForQSONInfo(qso?.our)
  return (theirLocation && ourLocation) ? bearingOnEarth(ourLocation, theirLocation) : null
}

export function deg2rad (deg: number | undefined | null): number {
  if (deg === undefined || deg === null) return Number.NaN
  return deg * (Math.PI / 180)
}

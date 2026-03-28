import GLOBAL from '../global'

const THOUSANDS_DELIMITER_REGEX = /^(\d+)(\d\d\d)$/

export function fmtDistance (
  dist: number | null | undefined,
  options: { precision?: number, units?: string, away?: boolean }
): string {
  if (!dist) return ''

  let fixedPrecision = options.precision ?? 1
  if (options.precision === undefined && dist > 5) {
    fixedPrecision = 0
  }

  const fmtDist = dist.toFixed(fixedPrecision).replace(THOUSANDS_DELIMITER_REGEX, '$1,$2') +
    (options.units === 'miles' ? ' mi' : ' km')
  if (options.away) {
    return GLOBAL?.t?.('general.formatting.distance.away', '{{distance}} away', { distance: fmtDist }) ??
      `${fmtDist} away`
  }
  return fmtDist
}

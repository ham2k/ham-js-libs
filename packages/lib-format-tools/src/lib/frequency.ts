const THOUSANDS_DELIMITER_REGEX = /^(\d+)(\d\d\d)([.,]\d+|)$/
const TRAILING_DIGITS_REGEX = /([.,])(\d+)$/

// In general in Ham2K code we use 
// * `freq` as a frequency in kHz, 
// * `frequency` as a frequency in Hz

export function fmtFreq(freq: number, { mode } = { mode: 'trim' }): string {
  if (freq && freq.toFixed) {
    const withDecimals = freq.toFixed(3)
    const withSeparator = withDecimals.replace(THOUSANDS_DELIMITER_REGEX, '$1.$2$3')
    if (mode === 'full') {
      return withSeparator
    } else if (mode === 'compact') { // Remove decimals, but show separator or space for alignment
      return withSeparator.replace(TRAILING_DIGITS_REGEX, (_, p1, p2) => p2 === '000' ? '' : p1)
    } else { // Remove trailing zeroes
      return withSeparator.replace(TRAILING_DIGITS_REGEX, (_, p1, p2) => p2 === '000' ? '' : p1 + p2)
    }
  } else {
    return ''
  }
}

export function partsForFreq(freq: number): string[] {
  if (!freq || Number.isNaN(freq)) return ['?', '', '']

  const parts = fmtFreq(freq).split(/[,.]/)
  parts[1] = parts[1] ?? '000'
  parts[2] = parts[2] ?? '000'
  return parts
}

const REMOVE_NON_DIGITS_REGEX = /[^0-9.,]/g
const MORE_THAN_ONE_PERIOD_REGEX = /(\.)(\d+)(\.)/g

export function parseFreq(freq: string | number): number | null {
  if (freq === null || freq === undefined) return null

  if (typeof freq !== 'number') {
    freq = freq.replace(REMOVE_NON_DIGITS_REGEX, '')
    freq = freq.replace(',', '.')
    freq = freq.replace(MORE_THAN_ONE_PERIOD_REGEX, '$2$3')

    freq = parseFloat(freq)
  }

  if (freq !== undefined) {
    if (freq < 1000) {
      // General case: 14.000 -> 14,000
      freq *= 1000
    } else if (freq >= 14400 && freq < 14800) {
      // 14652 -> 146,520
      freq *= 10
    } else if (freq >= 22200 && freq < 22500) {
      // 22252 -> 222,520
      freq *= 10
    } else if (freq >= 42000 && freq < 45000) {
      // 43520 -> 435,200
      freq *= 10
    }

    return parseFloat(freq.toFixed(3))
  } else {
    return null
  }
}

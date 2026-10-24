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
const COMMAS_REGEX = /,/g

// The bands where a number read the obvious way is no band but read a
// thousandfold off is one, in kHz. Not a band plan: only these decide between
// readings, so a band whose digits mean something else as MHz must leave
// them out — 30m, read as MHz, sits inside 3cm read as GHz, and 3.5 is 80m.
const KHZ_RESCUES = [[135.7, 137.8], [472, 479]] // 2190m, 630m
const GHZ_RESCUES = [
  [1240000, 1300000], // 23cm
  [2300000, 2450000], // 13cm
  [3300000, 3450000], // 9cm
  [5650000, 5925000], // 6cm
  [10000000, 10099999], [10150001, 10500000], // 3cm, around 30m
  [24000000, 24250000] // 1.25cm
]

function isIn(ranges: number[][], freq: number): boolean {
  return ranges.some(([low, high]) => freq >= low && freq <= high)
}

/**
 * Reads a frequency typed or displayed in Ham2K notation, in kHz.
 *
 * A period or a comma marks both thousands and the decimal — `14.285`,
 * `14.285.5`, `1.296.000` — so one mark has up to three readings a thousandfold
 * apart, and the one that names a band wins: MHz (`14.285`), else kHz for
 * 2190m and 630m (`472.5`), else GHz for the microwave bands (`1.296`).
 * Above 1000 one mark is kHz (`14285.5`), unless only MHz names a band:
 * `1296.000`, which is how `fmtFreq` writes 23cm. With two or more marks the
 * last is the decimal (`14.200.5`), unless only reading every mark as
 * grouping names a band (`1.296.000`).
 *
 * A group that cannot be grouping (`14.2.5`) gives null rather than a guess.
 */
export function parseFreq(freq: string | number): number | null {
  if (freq === null || freq === undefined) return null

  if (typeof freq !== 'number') {
    const marked = freq.replace(REMOVE_NON_DIGITS_REGEX, '').replace(COMMAS_REGEX, '.')
    const groups = marked.split('.')
    if (groups.length > 2) return parseGroupedFreq(groups)
    // `1.25` also names the 1.25m band, which a frequency must not shadow.
    if (marked === '1.25') return 1250
    freq = parseFloat(marked)
    // 1296.000 -> 1,296,000
    if (groups.length === 2 && freq >= 1000 && isIn(GHZ_RESCUES, freq * 1000)) return parseFloat((freq * 1000).toFixed(3))
  }

  if (freq < 1000) {
    if (isIn(GHZ_RESCUES, freq * 1000000)) {
      // 1.296 -> 1,296,000
      freq *= 1000000
    } else if (!isIn(KHZ_RESCUES, freq)) {
      // General case: 14.000 -> 14,000, but 472.5 stays 472.5
      freq *= 1000
    }
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
}

function parseGroupedFreq(groups: string[]): number | null {
  const first = groups[0]
  const last = groups[groups.length - 1]
  if (first.length < 1 || last.length < 1) return null
  if (groups.slice(1, -1).some((group) => group.length !== 3)) return null

  const allGrouped = parseFloat(groups.join(''))
  if (first.length <= 3 && last.length === 3 && isIn(GHZ_RESCUES, allGrouped)) return allGrouped

  // No short forms here: the marks already say where the kHz are.
  const withDecimal = parseFloat(parseFloat(`${groups.slice(0, -1).join('')}.${last}`).toFixed(3))
  // A first group past three digits is whole MHz, as fmtFreq writes a
  // microwave frequency (`10368.100.5`), or else a stray mark (`14285.200.5`).
  if (first.length > 3 && !isIn(GHZ_RESCUES, withDecimal)) return null
  return withDecimal
}

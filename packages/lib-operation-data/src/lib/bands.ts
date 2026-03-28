export const EXTENDED_BANDS = [  // Includes 11m
  '2190m',
  '630m',
  '560m',
  '160m',
  '80m',
  '60m',
  '40m',
  '30m',
  '20m',
  '17m',
  '15m',
  '12m',
  '11m',
  '10m',
  '6m',
  '5m',
  '4m',
  '2m',
  '1.25m',
  '70cm',
  '33cm',
  '23cm',
  '13cm',
  '9cm',
  '6cm',
  '3cm',
  '1.25cm',
  '6mm',
  '4mm',
  '2.5mm',
  '2mm',
  '1mm',
  'submm',
  'other'
] as const

export const BANDS = [
  '2190m',
  '630m',
  '560m',
  '160m',
  '80m',
  '60m',
  '40m',
  '30m',
  '20m',
  '17m',
  '15m',
  '12m',
  '10m',
  '6m',
  '5m',
  '4m',
  '2m',
  '1.25m',
  '70cm',
  '33cm',
  '23cm',
  '13cm',
  '9cm',
  '6cm',
  '3cm',
  '1.25cm',
  '6mm',
  '4mm',
  '2.5mm',
  '2mm',
  '1mm',
  'submm',
  'other'
] as const

export type Band = typeof EXTENDED_BANDS[number]

export const HF_BANDS = ['160m', '80m', '60m', '40m', '30m', '20m', '17m', '15m', '12m', '10m'] as const
export const VHF_BANDS = ['6m', '5m', '4m', '2m', '1.25m'] as const
export const UHF_BANDS = ['70cm', '33cm', '23cm', '13cm'] as const
export const SHF_BANDS = ['9cm', '6cm', '3cm', '1.25cm'] as const
export const EHF_BANDS = ['6mm', '4mm', '2mm', '2.5mm', '1mm', 'submm'] as const

export const POPULAR_BANDS = ['160m', '80m', '60m', '40m', '30m', '20m', '17m', '15m', '12m', '10m', '6m', '2m', '70cm'] as const
export const CONTEST_BANDS = ['160m', '80m', '40m', '20m', '15m', '10m'] as const

export function bandForFrequency(freq: number): Band {
  return bandForExactFrequencyInMHz(freq) ?? bandForExactFrequencyInMHz(freq * 1000) ?? 'other'
}

function bandForExactFrequencyInMHz(freq: number): Band | undefined {
  if (freq >= 130 && freq <= 140) return '2190m'
  else if (freq >= 450 && freq <= 499) return '630m'
  else if (freq >= 500 && freq <= 505) return '560m'
  else if (freq >= 1700 && freq <= 2100) return '160m'
  else if (freq >= 3400 && freq <= 4100) return '80m'
  else if (freq >= 5300 && freq <= 5500) return '60m'
  else if (freq >= 6900 && freq <= 7400) return '40m'
  else if (freq >= 10000 && freq <= 10200) return '30m'
  else if (freq >= 13900 && freq <= 14400) return '20m'
  else if (freq >= 18000 && freq <= 18200) return '17m'
  else if (freq >= 20900 && freq <= 21600) return '15m'
  else if (freq >= 24500 && freq <= 25200) return '12m'
  else if (freq >= 26000 && freq <= 27500) return '11m'
  else if (freq >= 27900 && freq <= 30000) return '10m'
  else if (freq >= 50000 && freq <= 54000) return '6m'
  else if (freq >= 54001 && freq <= 69999) return '5m'
  else if (freq >= 70000 && freq <= 71000) return '4m'
  else if (freq >= 140000 && freq <= 150000) return '2m'
  else if (freq >= 219000 && freq <= 230000) return '1.25m'
  else if (freq >= 400000 && freq <= 460000) return '70cm'
  else if (freq >= 900000 && freq <= 930000) return '33cm'
  else if (freq >= 1180000 && freq <= 1420000) return '23cm'
  else if (freq >= 2300000 && freq <= 2450000) return '13cm'
  else if (freq >= 3290000 && freq <= 3510000) return '9cm'
  else if (freq >= 5640000 && freq <= 5926000) return '6cm'
  else if (freq >= 10000000 && freq <= 10500000) return '3cm'
  else if (freq >= 24000000 && freq <= 24250000) return '1.25cm'
  else if (freq >= 47000000 && freq <= 47200000) return '6mm'
  else if (freq >= 75000000 && freq <= 81000000) return '4mm'
  else if (freq >= 122250000 && freq <= 123000000) return '2.5mm'
  else if (freq >= 134000000 && freq <= 141000000) return '2mm'
  else if (freq >= 241000000 && freq <= 250000000) return '1mm'
  else if (freq >= 300000000 && freq <= 7500000000) return 'submm'
  else return undefined
}

export function frequencyForBand(band: Band, mode?: string): number | undefined {
  if (band === '2190m') return 135.7
  else if (band === '630m') return 472
  else if (band === '560m') return 501
  else if (band === '160m') {
    if (mode === 'FT8' || mode === 'FT4') return 1840
    else return 1800
  }
  else if (band === '80m') {
    if (mode === 'SSB' || mode === 'LSB') return 3800
    else if (mode === 'FT8') return 3573
    else if (mode === 'FT4') return 3575
    else return 3000
  }
  else if (band === '60m') {
    if (mode === 'FT8') return 5357
    else return 5330
  }
  else if (band === '40m') {
    if (mode === 'SSB' || mode === 'LSB') return 7175
    else if (mode === 'FT8') return 7074
    else if (mode === 'FT4') return 7047.5
    else return 7000
  }
  else if (band === '30m') {
    if (mode === 'FT8') return 10136
    else if (mode === 'FT4') return 10140
    else return 10100
  }
  else if (band === '20m') {
    if (mode === 'SSB' || mode === 'USB') return 14225
    else if (mode === 'FT8') return 14074
    else if (mode === 'FT4') return 14080
    else return 14000
  }
  else if (band === '17m') {
    if (mode === 'SSB' || mode === 'USB') return 18110
    else if (mode === 'FT8') return 18100
    else if (mode === 'FT4') return 18104
    else return 18068
  }
  else if (band === '15m') {
    if (mode === 'SSB' || mode === 'USB') return 21275
    else if (mode === 'FT8') return 21074
    else if (mode === 'FT4') return 21140
    else return 21000
  }
  else if (band === '12m') {
    if (mode === 'SSB' || mode === 'USB') return 24930
    else if (mode === 'FT8') return 24915
    else if (mode === 'FT4') return 24919
    else return 24890
  }
  else if (band === '11m') {
    return 26965
  }
  else if (band === '10m') {
    if (mode === 'SSB' || mode === 'USB') return 28300
    else if (mode === 'FM' || mode === 'AM') return 28500
    else if (mode === 'FT8') return 28074
    else if (mode === 'FT4') return 28180
    else return 28000
  }
  else if (band === '6m') {
    if (mode === 'SSB' || mode === 'USB') return 50125
    else if (mode === 'FT8') return 50313
    else if (mode === 'FT4') return 50318
    else return 50000
  }
  else if (band === '5m') return 55000
  else if (band === '4m') return 70090
  else if (band === '2m') return 145400
  else if (band === '1.25m') return 222000
  else if (band === '70cm') return 420000
  else if (band === '33cm') return 902000
  else if (band === '23cm') return 1240000
  else if (band === '13cm') return 2300000
  else if (band === '9cm') return 3300000
  else if (band === '6cm') return 5650000
  else if (band === '3cm') return 10000000
  else if (band === '1.25cm') return 24000000
  else if (band === '6mm') return 47000000
  else if (band === '4mm') return 75500000
  else if (band === '2.5mm') return 122500000
  else if (band === '2mm') return 134000000
  else if (band === '1mm') return 241000000
  else if (band === 'submm') return 300000000
  else return undefined
}


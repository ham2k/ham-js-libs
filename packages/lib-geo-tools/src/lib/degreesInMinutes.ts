export interface DegreesMinutesSeconds {
  degrees: number
  minutes: number
  fractionalMinutes: number
  seconds: number
}

export function degreesInMinutes (degrees: number): DegreesMinutesSeconds {
  const sign = degrees < 0 ? -1 : 1
  degrees = Math.abs(degrees)
  const d = Math.floor(degrees)
  const fractM = (degrees - d) * 60
  const m = Math.floor((degrees - d) * 60)
  const s = Math.round(((degrees - d) * 60 - m) * 60)

  return {
    degrees: sign * d,
    minutes: m,
    fractionalMinutes: fractM,
    seconds: s
  }
}

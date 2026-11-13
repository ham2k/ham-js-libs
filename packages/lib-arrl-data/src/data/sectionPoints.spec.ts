import { ARRL_SECTIONS } from './sections.js'

function km (a: { lat: number, lon: number }, b: { lat: number, lon: number }): number {
  const rad = Math.PI / 180
  const h = Math.sin((b.lat - a.lat) * rad / 2) ** 2 +
    Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin((b.lon - a.lon) * rad / 2) ** 2
  return 2 * 6371 * Math.asin(Math.sqrt(h))
}

describe('where each section\'s hams are', () => {
  it('gives every section a point in North America or the Caribbean and Pacific', () => {
    for (const section of Object.values(ARRL_SECTIONS)) {
      expect(section.lat).toBeGreaterThan(17)
      expect(section.lat).toBeLessThan(72)
      expect(section.lon).toBeGreaterThan(-170)
      expect(section.lon).toBeLessThan(-52)
    }
  })

  it('puts a section near the people in it', () => {
    expect(km(ARRL_SECTIONS.NLI, { lat: 40.71, lon: -74.01 })).toBeLessThan(40)   // New York City
    expect(km(ARRL_SECTIONS.LAX, { lat: 34.05, lon: -118.24 })).toBeLessThan(40)  // Los Angeles
    expect(km(ARRL_SECTIONS.SDG, { lat: 32.72, lon: -117.16 })).toBeLessThan(40)  // San Diego
    expect(km(ARRL_SECTIONS.GH, { lat: 43.65, lon: -79.38 })).toBeLessThan(40)    // Toronto
    expect(km(ARRL_SECTIONS.PAC, { lat: 21.31, lon: -157.86 })).toBeLessThan(150) // Honolulu
  })

  it('tells the parts of a split state apart', () => {
    expect(ARRL_SECTIONS.EWA.lon).toBeGreaterThan(ARRL_SECTIONS.WWA.lon)
    expect(ARRL_SECTIONS.EPA.lon).toBeGreaterThan(ARRL_SECTIONS.WPA.lon)
    expect(ARRL_SECTIONS.EMA.lon).toBeGreaterThan(ARRL_SECTIONS.WMA.lon)
    expect(ARRL_SECTIONS.NNJ.lat).toBeGreaterThan(ARRL_SECTIONS.SNJ.lat)
    expect(ARRL_SECTIONS.NFL.lat).toBeGreaterThan(ARRL_SECTIONS.SFL.lat)
    expect(ARRL_SECTIONS.ONN.lat).toBeGreaterThan(ARRL_SECTIONS.ONS.lat)
    expect(ARRL_SECTIONS.WTX.lon).toBeLessThan(ARRL_SECTIONS.NTX.lon)
  })
})

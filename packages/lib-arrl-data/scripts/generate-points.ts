/**
 * Regenerates `data/section-points.json`: the center of every ARRL/RAC section's
 * licensed amateurs.
 *
 * Each active US and Canadian amateur license from the Ham2K calls dataset
 * (FCC ULS and ISED, geocoded from the licensee's address to a Maidenhead grid)
 * counts once, at the middle of its grid square, in the section of its state or
 * province. Where a state or province is split, the license goes to the county
 * (or Ontario census division) of the GeoNames town nearest it in that state.
 *
 * Downloads go to `tmp/section-points` and are reused on later runs; delete the
 * folder to start from fresh data. Run with `npm run generate:points`, then
 * `npm run generate` to rebuild the source. See data/NOTES.md.
 */
import fs from 'node:fs'
import path from 'node:path'
import readline from 'node:readline'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { findSectionCode } from '../src/lib/findSectionCode.js'
import { ARRL_DIVISIONS } from '../src/data/divisions.js'
import { SECTIONS_FOR_STATES } from '../src/data/sectionsForStates.js'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
const cache = path.join(root, 'tmp/section-points')

const CALLS = 'https://services.ham2k.net/lookups/calls/download?set=all'
const TOWNS = 'https://download.geonames.org/export/dump/cities500.zip'
const COUNTIES = 'https://download.geonames.org/export/dump/admin2Codes.txt'

/** GeoNames `admin1` codes for Canada, to postal codes. */
const PROVINCES: Record<string, string> = {
  '01': 'AB', '02': 'BC', '03': 'MB', '04': 'NB', '05': 'NL', '07': 'NS', '08': 'ON',
  '09': 'PE', '10': 'QC', '11': 'SK', '12': 'YT', '13': 'NT', '14': 'NU'
}

/**
 * States whose licenses are left out although the section table names them:
 * Guam is in the Pacific section, but its few hundred licensees would pull
 * Hawaii's point thousands of kilometres out to sea, near no one.
 */
const LEFT_OUT = new Set(['GU'])

/** A license this far from every town in its own state is geocoded elsewhere, and left out. */
const MAX_KM_FROM_A_TOWN = 200

/**
 * More licenses than this near the towns of one county the section table does not
 * name means a county was renamed, and the run stops rather than quietly leave its
 * licensees out of their section.
 */
const MAX_IN_AN_UNKNOWN_COUNTY = 50

async function download (url: string, name: string): Promise<string> {
  const file = path.join(cache, name)
  if (!fs.existsSync(file)) {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`${url}: ${response.status} ${response.statusText}`)
    // Written aside and renamed, so a download cut short is never taken for a whole one.
    fs.writeFileSync(`${file}.part`, Buffer.from(await response.arrayBuffer()))
    fs.renameSync(`${file}.part`, file)
  }
  return file
}

/** The middle of a Maidenhead square of 4, 6 or 8 characters, or null. */
function gridCenter (grid: string): { lat: number, lon: number } | null {
  const g = grid.toUpperCase()
  if (!/^[A-R]{2}[0-9]{2}([A-X]{2}([0-9]{2})?)?$/.test(g)) return null
  let lon = (g.charCodeAt(0) - 65) * 20 - 180 + Number(g[2]) * 2
  let lat = (g.charCodeAt(1) - 65) * 10 - 90 + Number(g[3])
  let width = 2
  let height = 1
  if (g.length >= 6) {
    width /= 24; height /= 24
    lon += (g.charCodeAt(4) - 65) * width
    lat += (g.charCodeAt(5) - 65) * height
  }
  if (g.length === 8) {
    width /= 10; height /= 10
    lon += Number(g[6]) * width
    lat += Number(g[7]) * height
  }
  return { lat: lat + height / 2, lon: lon + width / 2 }
}

function km (a: { lat: number, lon: number }, b: { lat: number, lon: number }): number {
  const rad = Math.PI / 180
  const h = Math.sin((b.lat - a.lat) * rad / 2) ** 2 +
    Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin((b.lon - a.lon) * rad / 2) ** 2
  return 2 * 6371 * Math.asin(Math.sqrt(h))
}

interface Town { lat: number, lon: number, county: string }

/** GeoNames towns of 500 people or more, by state or province, each with its county name. */
async function townsByState (): Promise<Record<string, Town[]>> {
  const counties: Record<string, string> = {}
  for (const line of fs.readFileSync(await download(COUNTIES, 'admin2Codes.txt'), 'utf8').split('\n')) {
    const [key, name] = line.split('\t')
    if (key) counties[key] = name
  }

  const zip = await download(TOWNS, 'cities500.zip')
  execFileSync('unzip', ['-oq', zip, 'cities500.txt', '-d', cache])

  const towns: Record<string, Town[]> = {}
  for (const line of fs.readFileSync(path.join(cache, 'cities500.txt'), 'utf8').split('\n')) {
    const row = line.split('\t')
    const country = row[8]
    if (country !== 'US' && country !== 'CA' && country !== 'PR' && country !== 'VI') continue
    const state = country === 'CA' ? PROVINCES[row[10]] : country === 'US' ? row[10] : country
    if (!state) continue
    const county = countyName(state, counties[`${country}.${row[10]}.${row[11]}`] ?? '')
    const lat = Number(row[4])
    const lon = Number(row[5])
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) throw new Error(`cities500.txt: no position for ${row[1]}, ${state}; has GeoNames changed its columns?`)
    ;(towns[state] ??= []).push({ lat, lon, county })
  }

  const without = Object.keys(SECTIONS_FOR_STATES).filter((state) => !LEFT_OUT.has(state) && !towns[state])
  if (without.length) throw new Error(`cities500.txt: no towns in ${without.join(', ')}; has GeoNames changed its columns?`)
  return towns
}

/**
 * GeoNames names some counties, and Ontario's census divisions, in full; the
 * section table uses the short form ("San Francisco", "Muskoka").
 */
function countyName (state: string, name: string): string {
  name = name.replace(/^City and County of\s+/i, '')
  if (state !== 'ON') return name
  return name
    .replace(/^(Regional Municipality of|District Municipality of|United Counties of|Comtés unis de|Comtes unis de)\s+/i, '')
    .replace(/\s+District$/i, '')
    .replace(/\s+et\s+/, ' and ')
}

/** Weighted points are summed as unit vectors, so the mean is right on a sphere too. */
const sums: Record<string, { x: number, y: number, z: number, count: number }> = {}

function add (section: string, { lat, lon }: { lat: number, lon: number }): void {
  const φ = lat * Math.PI / 180
  const λ = lon * Math.PI / 180
  const sum = sums[section] ?? (sums[section] = { x: 0, y: 0, z: 0, count: 0 })
  sum.x += Math.cos(φ) * Math.cos(λ)
  sum.y += Math.cos(φ) * Math.sin(λ)
  sum.z += Math.sin(φ)
  sum.count += 1
}

async function main (): Promise<void> {
  fs.mkdirSync(cache, { recursive: true })
  const towns = await townsByState()

  const skipped = { noGrid: 0, noSection: 0, farAway: 0, noCounty: 0, leftOut: 0 }
  const unknownCounties: Record<string, number> = {}
  const file = await download(CALLS, 'calls.ndjson')
  let lineNumber = 0
  for await (const line of readline.createInterface({ input: fs.createReadStream(file) })) {
    lineNumber++
    if (!line.trim()) continue
    let record
    try {
      record = JSON.parse(line)
    } catch (error) {
      throw new Error(`${file}:${lineNumber}: ${(error as Error).message} (delete tmp/section-points to download it again)`)
    }
    if (record.country !== 'US' && record.country !== 'CA') continue
    const state = String(record.state ?? '').toUpperCase()
    if (LEFT_OUT.has(state)) { skipped.leftOut++; continue }
    if (!SECTIONS_FOR_STATES[state]) { skipped.noSection++; continue }
    const point = record.grid ? gridCenter(record.grid) : null
    if (!point) { skipped.noGrid++; continue }

    let nearest: Town | null = null
    let distance = Infinity
    for (const town of towns[state] ?? []) {
      const d = km(point, town)
      if (d < distance) { distance = d; nearest = town }
    }
    if (!nearest || distance > MAX_KM_FROM_A_TOWN) { skipped.farAway++; continue }

    const section = findSectionCode(state, nearest.county)
    if (!section) {
      skipped.noCounty++
      const key = `${state} ${nearest.county || '(none)'}`
      unknownCounties[key] = (unknownCounties[key] ?? 0) + 1
      continue
    }
    add(section, point)
  }

  const missing = Object.values(ARRL_DIVISIONS).flatMap((division) => division.sectionCodes).filter((code) => !sums[code])
  if (missing.length) throw new Error(`No licenses in ${missing.join(', ')} (if it is every section, check ${file})`)
  const renamed = Object.entries(unknownCounties).filter(([, count]) => count > MAX_IN_AN_UNKNOWN_COUNTY)
  if (renamed.length) throw new Error(`Licenses near towns in counties the section table does not name: ${JSON.stringify(Object.fromEntries(renamed))}`)
  const counted = Object.values(sums).reduce((n, s) => n + s.count, 0)
  if (skipped.noCounty + skipped.farAway > counted * 0.01) throw new Error(`Too many licenses left out: ${JSON.stringify(skipped)}`)
  console.log(`Counted ${counted} licenses; left out ${JSON.stringify(skipped)}`)
  if (skipped.noCounty) console.log(`Towns in no county of the section table: ${JSON.stringify(unknownCounties)}`)

  const points: Record<string, { lat: number, lon: number, licenses: number }> = {}
  for (const code of Object.keys(sums).sort()) {
    const { x, y, z, count } = sums[code]
    const lat = Math.atan2(z, Math.hypot(x, y)) * 180 / Math.PI
    const lon = Math.atan2(y, x) * 180 / Math.PI
    points[code] = { lat: Math.round(lat * 100) / 100, lon: Math.round(lon * 100) / 100, licenses: count }
  }

  fs.writeFileSync(path.join(root, 'data/section-points.json'), JSON.stringify(points, null, 2) + '\n')
  console.log(`Wrote ${Object.keys(points).length} section points`)
}

main().catch((error) => { console.error(error); process.exit(1) })

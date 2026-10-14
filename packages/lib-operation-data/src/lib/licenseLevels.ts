import LicenseLevelsJSON from '../data/licenseLevels.json'
import BandPlans from '../data/bandPlans.json'
import type { BandPlansData } from '../types'
import { SUPER_MODES, superModeForMode } from './modes'

/**
 * Where a level sits among its regulator's, judged by frequencies and modes alone: `full` has
 * everything the regulator's widest level has, `intermediate` has some phone below 28 MHz, `basic` has none.
 */
export type LicenseTier = 'basic' | 'intermediate' | 'full'

export interface LicenseLevel {
  code: string
  name: string
  nameLocal?: string
  tier: LicenseTier
  /** No longer issued, but still held. */
  legacy?: boolean
  /** Names of legacy classes the rules convert into this one. */
  aliases?: string[]
  maxPowerW?: number
  /** The only supermodes this level may use anywhere; absent means all of them. */
  superModes?: string[]
}

/**
 * A callsign series that gives the level away. `pattern` is matched against the bare callsign
 * (no portable prefix or suffix). With `atLeast`, the series only proves a minimum: the holder
 * kept the call through an upgrade, or the series is shared with higher levels.
 */
export interface LicenseCallsignRule {
  pattern: string
  level: string
  atLeast?: boolean
  entities?: string[]
}

export interface LicenseJurisdiction {
  key: string
  name: string
  regulator: string
  rules?: string
  /** What the levels are called, in English ("License Class", "Category", …). */
  term: string
  termLocal?: string
  /** DXCC entity prefixes whose operators this regulator licenses. */
  entities: string[]
  /** Lowest to highest. */
  levels: LicenseLevel[]
  /** First match wins. */
  callsigns?: LicenseCallsignRule[]
}

export interface LicenseLevelsData {
  jurisdictions: LicenseJurisdiction[]
}

export const LICENSE_LEVELS: LicenseLevelsData = LicenseLevelsJSON as LicenseLevelsData

const bandPlansData = BandPlans as unknown as BandPlansData

/** The jurisdiction licensing operators in a DXCC entity, or undefined when we have no per-level data for it. */
export function licenseJurisdictionForEntity(entityPrefix: string): LicenseJurisdiction | undefined {
  return LICENSE_LEVELS.jurisdictions.find(jurisdiction => jurisdiction.entities.includes(entityPrefix))
}

/**
 * How a level is named in the band plan and wherever it is stored: the jurisdiction travels with the
 * code ("us:G"), because codes repeat across regulators.
 */
export function licenseLevelKey(jurisdiction: LicenseJurisdiction, level: LicenseLevel): string {
  return `${jurisdiction.key}:${level.code}`
}

/** The jurisdiction and level a key ("us:G") names, or undefined when it names nothing we know. */
export function resolveLicenseLevel(key: string): { jurisdiction: LicenseJurisdiction, level: LicenseLevel } | undefined {
  const colon = key.indexOf(':')
  if (colon <= 0) return undefined
  const jurisdiction = LICENSE_LEVELS.jurisdictions.find(j => j.key === key.slice(0, colon))
  const level = jurisdiction?.levels.find(l => l.code === key.slice(colon + 1))
  return jurisdiction && level ? { jurisdiction, level } : undefined
}

/**
 * The level a callsign's series gives away under the regulator of `entityPrefix`, or undefined when
 * it gives none away. Portable prefixes and suffixes are ignored: the bare call is the longest
 * slash-separated part.
 */
export function licenseLevelForCallsign(call: string, entityPrefix: string): { jurisdiction: LicenseJurisdiction, level: LicenseLevel, atLeast: boolean } | undefined {
  const jurisdiction = licenseJurisdictionForEntity(entityPrefix)
  if (!jurisdiction) return undefined
  const bare = call.toUpperCase().split('/').reduce((best, part) => part.length > best.length ? part : best, '')
  const rule = jurisdiction.callsigns?.find(r => (!r.entities || r.entities.includes(entityPrefix)) && new RegExp(r.pattern).test(bare))
  const level = rule && jurisdiction.levels.find(l => l.code === rule.level)
  return rule && level ? { jurisdiction, level, atLeast: Boolean(rule.atLeast) } : undefined
}

export interface LicensePrivilegesOptions {
  /** The level's key, as `licenseLevelKey` makes it ("us:G"). */
  level: string
  /** Where the station is. A level only applies under its own regulator. */
  entityPrefix: string
  ituRegion?: number
  /** The mode in use; without it only the frequency is judged. */
  mode?: string
}

/**
 * Whether transmitting on `khz` is outside a level's privileges: true or false, or undefined when
 * there is nothing to judge by — an unknown level, a station under another regulator, or a frequency
 * on no band.
 *
 * Every level may use a band unless the band or a segment says otherwise. A segment's edges are
 * outside it, so an operator on the line between two privileges is not flagged. Without an
 * `ituRegion`, region-scoped segments are skipped: the permissive answer, so a station whose
 * region is unknown is never flagged by mistake.
 *
 * Mode rules that bind every level of a country alike are left to the band plan's own segments;
 * the `superModes` here only narrow one level against its regulator's others.
 */
export function isOutsideLicensePrivileges(khz: number, options: LicensePrivilegesOptions): boolean | undefined {
  const { level: key, entityPrefix, ituRegion, mode } = options
  const resolved = resolveLicenseLevel(key)
  if (!resolved || !resolved.jurisdiction.entities.includes(entityPrefix)) return undefined
  const band = Object.values(bandPlansData.bands).find(b => b.mhz[0] <= khz && khz <= b.mhz[1])
  if (!band) return undefined

  if (band.exceptLevels?.includes(key)) return true
  let allowed: readonly string[] = resolved.level.superModes ?? SUPER_MODES
  for (const segment of band.segments) {
    if (!(segment.mhz[0] < khz && khz < segment.mhz[1])) continue
    if (segment.entities && !segment.entities.includes(entityPrefix)) continue
    if (segment.regions && !(ituRegion && segment.regions.includes(ituRegion))) continue
    if (segment.exceptLevels?.includes(key)) return true
    if (segment.levels?.includes(key)) allowed = allowed.filter(m => segment.superModes?.includes(m))
  }
  return mode ? !allowed.includes(superModeForMode(mode)) : false
}

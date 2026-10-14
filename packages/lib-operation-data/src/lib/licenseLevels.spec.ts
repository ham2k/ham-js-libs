import BandPlans from '../data/bandPlans.json'
import type { BandPlansData } from '../types'
import {
  LICENSE_LEVELS, isOutsideLicensePrivileges, licenseJurisdictionForEntity, licenseLevelForCallsign, licenseLevelKey, resolveLicenseLevel
} from './licenseLevels'
import { modeForFrequency } from './modes'

const outside = (khz: number, entityPrefix: string, level: string, options: { ituRegion?: number, mode?: string } = {}) =>
  isOutsideLicensePrivileges(khz, { level, entityPrefix, ...options })

describe('isOutsideLicensePrivileges', () => {
  it('keeps each US class inside its own sub-bands', () => {
    // The class edges are the whole point of the data: a Technician on 20 m, or a General in the
    // Extra-only 14150-14175 phone segment, is the mistake the app exists to catch.
    expect(outside(7030, 'K', 'us:T')).toBe(false)
    expect(outside(14074, 'K', 'us:T')).toBe(true)
    expect(outside(28400, 'K', 'us:T')).toBe(false)
    expect(outside(14200, 'K', 'us:G')).toBe(true)
    expect(outside(14250, 'K', 'us:G')).toBe(false)
    expect(outside(14200, 'K', 'us:A')).toBe(false)
    expect(outside(14160, 'K', 'us:A')).toBe(true)
    expect(outside(14160, 'K', 'us:E')).toBe(false)
  })

  it('treats the line between two privileges as inside both', () => {
    // An operator sitting exactly on a sub-band edge is using the last frequency the class
    // allows; flagging it would accuse them of a violation they are not committing.
    expect(outside(14225, 'K', 'us:G')).toBe(false)
    expect(outside(14175, 'K', 'us:A')).toBe(false)
  })

  it('narrows a level to the supermodes its rules give it', () => {
    // A Technician's 40 m privilege is CW only: FT8 on 7.074 is outside it even though the
    // frequency itself is one they may use.
    expect(outside(7074, 'K', 'us:T', { mode: 'FT8' })).toBe(true)
    expect(outside(7030, 'K', 'us:T', { mode: 'CW' })).toBe(false)
    expect(outside(28400, 'K', 'us:T', { mode: 'USB' })).toBe(false)
    expect(outside(28400, 'K', 'us:T', { mode: 'FT8' })).toBe(true)
    expect(outside(7074, 'K', 'us:G', { mode: 'FT8' })).toBe(false)
  })

  it('never lets a level send Morse where its rules forbid it anywhere', () => {
    expect(outside(7030, 'JA', 'jp:4', { mode: 'CW' })).toBe(true)
    expect(outside(7030, 'JA', 'jp:4', { mode: 'LSB' })).toBe(false)
    expect(outside(7030, 'JA', 'jp:3', { mode: 'CW' })).toBe(false)
    expect(outside(144050, 'HL', 'kr:4', { mode: 'CW' })).toBe(true)
  })

  it('judges only the frequency when no mode is given', () => {
    expect(outside(7074, 'K', 'us:T')).toBe(false)
  })

  it('applies region-scoped limits only where the region is known', () => {
    // Region 2 extends 40 m to 7300, and there a Technician still has nothing above 7125.
    expect(outside(7250, 'K', 'us:T', { ituRegion: 2 })).toBe(true)
    expect(outside(7250, 'K', 'us:T')).toBe(false)
  })

  it('keeps entry levels off HF where the rules do', () => {
    expect(outside(14074, 'UA', 'ru:4')).toBe(true)
    expect(outside(7074, 'VE', 'ca:B')).toBe(true)
    expect(outside(7074, 'VE', 'ca:B/H')).toBe(false)
    expect(outside(28074, 'DL', 'de:N')).toBe(false)
  })

  it('tells "outside the privileges" apart from "nothing to judge by"', () => {
    expect(outside(14074, 'DL', 'de:N')).toBe(true)
    expect(outside(14074, 'DL', 'de:X')).toBeUndefined()
    // A US General operating as EA8/… is under Spain's rules, which this level says nothing about.
    expect(outside(14200, 'EA8', 'us:G')).toBeUndefined()
    expect(outside(12000, 'K', 'us:E')).toBeUndefined()
  })
})

describe('licenseLevelForCallsign', () => {
  const guess = (call: string, entity: string) => {
    const found = licenseLevelForCallsign(call, entity)
    return found && `${found.level.code}${found.atLeast ? '+' : ''}`
  }

  it('reads the level from series that encode it, and only a minimum where a call survives an upgrade', () => {
    expect(guess('M7ABC', 'G')).toBe('F')
    expect(guess('2E0ABC', 'G')).toBe('I')
    expect(guess('DO1ABC', 'DL')).toBe('E+')
    expect(guess('N2ABC', 'K')).toBe('T+')
  })

  it('ignores portable prefixes and suffixes', () => {
    expect(guess('KI2D/P', 'K')).toBe('E')
    expect(guess('GM/M7ABC', 'GM')).toBe('F')
  })

  it('scopes rules to the entities whose series they describe', () => {
    // WP4AB has the mainland's Group B (Advanced) 2x2 shape, but in Puerto Rico it is a Group C
    // (Technician or General) call: applying the mainland rule there would overstate the class.
    expect(guess('WP4AB', 'KP4')).toBe('T+')
    expect(guess('VE3ABC', 'VE')).toBeUndefined()
  })
})

describe('the band plan', () => {
  const bands = (BandPlans as unknown as BandPlansData).bands

  it('names only levels that exist', () => {
    // A misspelt key ("us:Gen") silently never matches, which reads as "no limit here".
    for (const band of Object.values(bands)) {
      const keys = [...(band.exceptLevels ?? []), ...band.segments.flatMap(s => [...(s.exceptLevels ?? []), ...(s.levels ?? [])])]
      for (const key of keys) expect(resolveLicenseLevel(key)).toBeDefined()
    }
  })

  it('gives every mode limit its supermodes', () => {
    for (const band of Object.values(bands)) {
      for (const segment of band.segments.filter(s => s.levels)) expect(segment.superModes?.length).toBeGreaterThan(0)
    }
  })

  it('leaves the mode guess to the band plan, even where a license segment is the narrowest match', () => {
    // 14000-14025 is an Extra-only segment, narrower than every CW segment around it; if the mode
    // lookup took it in, it would win on width and answer with its (absent) mode.
    expect(modeForFrequency(14010)).toBe('CW')
  })
})

describe('LICENSE_LEVELS', () => {
  // A mistake in hand-edited data shows up as a level nobody can pick, a callsign rule that
  // never matches, or an entity two regulators both claim — none of which fails loudly at use.
  it('gives every entity to exactly one jurisdiction', () => {
    const all = LICENSE_LEVELS.jurisdictions.flatMap(j => j.entities)
    expect(new Set(all).size).toBe(all.length)
    expect(licenseJurisdictionForEntity('KH6')?.key).toBe('us')
    expect(licenseJurisdictionForEntity('EA')).toBeUndefined()
  })

  it('has more than one level, with unique codes, everywhere, and round-trips every key', () => {
    for (const jurisdiction of LICENSE_LEVELS.jurisdictions) {
      expect(jurisdiction.levels.length).toBeGreaterThan(1)
      const codes = jurisdiction.levels.map(l => l.code)
      expect(new Set(codes).size).toBe(codes.length)
      for (const level of jurisdiction.levels) {
        expect(resolveLicenseLevel(licenseLevelKey(jurisdiction, level))?.level).toBe(level)
      }
    }
  })

  it('points every callsign rule at a real level and a valid pattern', () => {
    for (const jurisdiction of LICENSE_LEVELS.jurisdictions) {
      const codes = new Set(jurisdiction.levels.map(l => l.code))
      for (const rule of jurisdiction.callsigns ?? []) {
        expect(codes.has(rule.level)).toBe(true)
        expect(() => new RegExp(rule.pattern)).not.toThrow()
        for (const entity of rule.entities ?? []) expect(jurisdiction.entities).toContain(entity)
      }
    }
  })
})

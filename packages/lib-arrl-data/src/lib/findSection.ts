import { ARRLSection } from '../types.js'
import { ARRL_SECTIONS } from '../data/sections.js'
import { SECTIONS_FOR_STATES } from '../data/sectionsForStates.js'
import { findSectionCode } from './findSectionCode.js'

export { findSectionCode }

/**
 * Returns the ARRL/RAC section for a state or province, and an optional county.
 *
 * Returns `null` when the state is unknown, or when the state spans more than one
 * section and the county is missing or not recognized.
 *
 * ```ts
 * findSection('VT')                 // Vermont
 * findSection('MA', 'Suffolk')      // Eastern Massachusetts
 * findSection('MA')                 // null — Massachusetts has two sections
 * ```
 */
export function findSection (state?: string | null, county?: string | null): ARRLSection | null {
  const code = findSectionCode(state, county)
  return code ? ARRL_SECTIONS[code] ?? null : null
}

/** All the sections that cover any part of a state or province, in code order. */
export function sectionsForState (state?: string | null): ARRLSection[] {
  if (!state) return []

  const sections = SECTIONS_FOR_STATES[state.trim().toUpperCase()]
  if (!sections) return []

  const codes = typeof sections === 'string' ? [sections] : [...new Set(Object.values(sections))]
  return codes.sort().map((code) => ARRL_SECTIONS[code]).filter(Boolean)
}

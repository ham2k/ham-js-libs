import { ARRLSection } from '../types.js'
import { ARRL_SECTIONS } from '../data/sections.js'
import { SECTIONS_FOR_STATES } from '../data/sectionsForStates.js'

/**
 * Normalizes a county name for matching: case, punctuation, whitespace and the
 * usual "County"/"Parish"/"Borough" suffixes are all ignored, "St."/"Ste." are
 * expanded and "&" is read as "and", so "St. Lawrence", "saint lawrence county"
 * and "STLAWRENCE" all match, as do "Leeds & Grenville" and "Leeds and Grenville".
 *
 * The "&" rule matters for Ontario, where several census divisions have compound
 * names people write both ways.
 */
function normalizeCounty (county: string): string {
  return county
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\bst[e]?\.?\s+/g, (match) => (match.trim().startsWith('ste') ? 'sainte' : 'saint'))
    .replace(/\b(county|parish|borough|census area|city and borough|municipality)\b/g, '')
    .replace(/[^a-z0-9]/g, '')
}

const NORMALIZED_COUNTIES: Record<string, Record<string, string>> = {}
for (const [state, sections] of Object.entries(SECTIONS_FOR_STATES)) {
  if (typeof sections === 'string') continue
  const index: Record<string, string> = {}
  for (const [county, code] of Object.entries(sections)) index[normalizeCounty(county)] = code
  NORMALIZED_COUNTIES[state] = index
}

function normalizeState (state: string): string {
  return state.trim().toUpperCase()
}

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

/** Same as {@link findSection}, but returns just the section code, i.e. "EMA". */
export function findSectionCode (state?: string | null, county?: string | null): string | null {
  if (!state) return null

  const sections = SECTIONS_FOR_STATES[normalizeState(state)]
  if (!sections) return null
  if (typeof sections === 'string') return sections
  if (!county) return null

  return NORMALIZED_COUNTIES[normalizeState(state)][normalizeCounty(county)] ?? null
}

/** All the sections that cover any part of a state or province, in code order. */
export function sectionsForState (state?: string | null): ARRLSection[] {
  if (!state) return []

  const sections = SECTIONS_FOR_STATES[normalizeState(state)]
  if (!sections) return []

  const codes = typeof sections === 'string' ? [sections] : [...new Set(Object.values(sections))]
  return codes.sort().map((code) => ARRL_SECTIONS[code]).filter(Boolean)
}

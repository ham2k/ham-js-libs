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
 * Same as `findSection`, but returns just the section code, i.e. "EMA". Kept apart
 * from the section table so that the scripts that generate it can use it.
 */
export function findSectionCode (state?: string | null, county?: string | null): string | null {
  if (!state) return null

  const sections = SECTIONS_FOR_STATES[normalizeState(state)]
  if (!sections) return null
  if (typeof sections === 'string') return sections
  if (!county) return null

  return NORMALIZED_COUNTIES[normalizeState(state)][normalizeCounty(county)] ?? null
}

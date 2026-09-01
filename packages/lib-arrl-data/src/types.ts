/** An ARRL (or RAC) division: a group of sections represented by one elected director. */
export interface ARRLDivision {
  /** Short code, as used by Ham2K and other software. Not an official ARRL identifier. */
  code: string
  /** Full division name, i.e. "New England" */
  name: string
  /** DXCC-style country the division belongs to: "US" or "CA" */
  countryCode: string
  /** Codes of the sections in this division */
  sectionCodes: string[]
}

/** An ARRL (or RAC) section, as used for contest and traffic exchanges. */
export interface ARRLSection {
  /** Section abbreviation used on the air and in logs, i.e. "EMA" */
  code: string
  /** Full section name, i.e. "Eastern Massachusetts" */
  name: string
  /** Code of the division this section belongs to */
  divisionCode: string
  /** DXCC-style country the section belongs to: "US" or "CA" */
  countryCode: string
}

/**
 * Section assignments for one state or province: either a single section code,
 * or a map of county (or parish, borough, census area) name to section code.
 */
export type SectionsForState = string | Record<string, string>

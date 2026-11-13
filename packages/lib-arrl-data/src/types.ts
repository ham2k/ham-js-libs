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
  /**
   * Latitude of the center of the section's licensed amateurs, to 0.01°. A coarse
   * point for maps, distances and bearings: it can fall outside the section, even at sea.
   */
  lat: number
  /** Longitude of the center of the section's licensed amateurs, to 0.01°. */
  lon: number
  /** The states and provinces the section covers, in whole or in part, i.e. ["DC", "MD"] */
  states: string[]
  /**
   * When the section is part of a split state or province, its counties, as
   * `findSection` knows them, in alphabetical order. For Ontario these are census
   * divisions and the places RAC names. Absent when the section covers whole states.
   */
  counties?: string[]
}

/**
 * Section assignments for one state or province: either a single section code,
 * or a map of county (or parish, borough, census area) name to section code.
 */
export type SectionsForState = string | Record<string, string>

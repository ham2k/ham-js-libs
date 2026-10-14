export interface BandPlanSegment {
  name: string
  mhz: [number, number] | number[]
  mode?: string | null
  submode?: string
  priority?: number
  regions?: number[]
  entities?: string[]
  countries?: string[]
  /** License levels ("us:G") that may not transmit anywhere in this segment. */
  exceptLevels?: string[]
  /** License levels ("us:T") limited, in this segment, to `superModes`. */
  levels?: string[]
  superModes?: string[]
}

export interface BandPlan {
  mhz: [number, number] | number[]
  /** License levels ("us:T") that may not transmit anywhere on the band. */
  exceptLevels?: string[]
  segments: BandPlanSegment[]
}

export interface BandPlansData {
  sources: Array<{ url: string }>
  bands: Record<string, BandPlan>
}

export interface SegmentWithMetadata {
  name: string
  mhz: [number, number]
  mode?: string | null | false
  submode?: string
  priority?: number
  band: string
  width: number
  regions: Record<string, boolean>
  entities: Record<string, boolean>
  countries: Record<string, boolean>
}

export interface ModeForFrequencyOptions {
  ituRegion?: number
  countryCode?: string
  entityPrefix?: string
}


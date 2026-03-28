export interface BandPlanSegment {
  name: string
  mhz: [number, number] | number[]
  mode?: string | null
  submode?: string
  priority?: number
  regions?: number[]
  entities?: string[]
  countries?: string[]
}

export interface BandPlan {
  mhz: [number, number] | number[]
  segments: BandPlanSegment[]
}

export interface BandPlansData {
  sources: Array<{ url: string }>
  bands: Record<string, BandPlan>
}

export interface SegmentWithMetadata {
  name: string
  mhz: [number, number]
  mode?: string | null
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


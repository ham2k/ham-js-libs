import { ParsedCallsign } from "@ham2k/lib-callsigns"

export interface CFEntity {
  entityPrefix: string
  name: string
  dxccCode: number
  continent: string
  cqZone: number
  ituZone: number
  lat: number
  lon: number
  tz: string
  isWAE?: boolean
  regionCode?: string
}

export interface CFMatch {
  p: string // entity prefix
  c?: number // CQ zone override
  i?: number // ITU zone override
  o?: string // continent override
  y?: number // latitude override
  x?: number // longitude override
  matchSource?: string
  matchNote?: string
  regionCode?: string
}

export interface CFIndexes {
  entities: Record<string, CFEntity>
  exact: Record<string, CFMatch>
  prefix: Record<string, CFMatch>
  prefixWAE: Record<string, CFMatch>
  exactWAE: Record<string, CFMatch>
}

// `call` is optional here, unlike on ParsedCallsign: these types describe both the
// partial info passed *into* annotation — which may identify an entity by dxccCode or
// entityPrefix alone, with no callsign at all — and the entity/zone/location fields
// analyzeFromCountryFile returns, which never include a callsign.
export type CombinedCallInfo = Omit<ParsedCallsign, 'call'> & {
  call?: string
  isoPrefix?: string
  dxccCode?: number
  regionCode?: string
  state?: string
  entityPrefix?: string
  entityName?: string
  continent?: string
  cqZone?: number
  ituZone?: number
  lat?: number
  lon?: number
  tz?: string
  matchSource?: string
  matchNote?: string
  locSource?: string
}

export type AnnotatedCallInfo = CombinedCallInfo & {
  originalValues?: AnnotatedCallInfo
  cfValues?: AnnotatedCallInfo
}

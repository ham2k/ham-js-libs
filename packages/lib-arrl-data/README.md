# lib-arrl-data

ARRL data for amateur radio: sections with the states and counties they cover and a
point where their hams are, divisions, and section lookup by state and county.

## Installation

```bash
npm install @ham2k/lib-arrl-data
```

## Usage

This library supports both ESM (ES Modules) and CommonJS formats.

```typescript
import { findSection, findSectionCode, sectionsForState, ARRL_SECTIONS, ARRL_DIVISIONS } from '@ham2k/lib-arrl-data'

findSection('VT')                    // { code: 'VT', name: 'Vermont', divisionCode: 'NE', countryCode: 'US' }
findSection('MA', 'Suffolk')         // { code: 'EMA', name: 'Eastern Massachusetts', ... }
findSection('MA')                    // null — Massachusetts spans two sections
findSectionCode('NY', 'St. Lawrence') // 'NNY'
sectionsForState('TX')               // [ North Texas, South Texas, West Texas ]

ARRL_SECTIONS.EMA.name               // "Eastern Massachusetts"
ARRL_SECTIONS.SDG                    // { ..., lat: 32.93, lon: -117.07 }
ARRL_SECTIONS.MDC.states             // ['DC', 'MD']
ARRL_SECTIONS.WMA.counties           // ['Berkshire', 'Franklin', 'Hampden', 'Hampshire', 'Worcester']
ARRL_DIVISIONS.NE.sectionCodes       // ['CT', 'EMA', 'ME', 'NH', 'RI', 'VT', 'WMA']
```

CommonJS:

```javascript
const { findSection } = require('@ham2k/lib-arrl-data')
```

## Exports

- `findSection(state, county?)` — the `ARRLSection` for a state or province, or `null`
- `findSectionCode(state, county?)` — the same, as a section code string
- `sectionsForState(state)` — every section covering any part of a state or province
- `ARRL_SECTIONS` — all 71 US and 14 Canadian sections, keyed by code, each with
  the `states` it covers, its `counties` when it is part of a split state or province,
  and the `lat` and `lon` of the center of its licensed amateurs
- `ARRL_DIVISIONS` — all 16 divisions, keyed by code
- `SECTIONS_FOR_STATES` — the raw state → section (or county → section) table

### Lookups

`findSection` returns a single section or `null`. For states and provinces that hold more
than one section, the county is required — without it, or with a county that isn't
recognized, the result is `null`. Use `sectionsForState` to list the candidates instead.

County names are matched loosely: case, punctuation, whitespace and `County` / `Parish` /
`Borough` suffixes are ignored, and `St.` is treated as `Saint`.

Ontario is keyed on census divisions — counties, districts, regional municipalities
and single-tier cities — since that is how RAC defines its four sections. Two of them,
Muskoka and Kawartha Lakes, RAC does not name at all and are assigned by elimination;
see [data/NOTES.md](./data/NOTES.md).

A section's `counties` are the same names `findSection` matches, from the same table: a
section in a split state lists them, one that covers whole states (`VT`, `MDC`, `TER`)
has none, and its `states` say which.

## Data

The county-to-section table was contributed by Tom Schaefer, NY4I. See
[data/NOTES.md](./data/NOTES.md) for the corrections applied to it.

`data/sections-for-states.json` is the source of truth; run `npm run generate` after
editing it to rebuild `src/data/sectionsForStates.ts`.

### Where a section's hams are

Each section's `lat` and `lon` is the center of its licensed amateurs, to 0.01°: a coarse
point for a map, a distance or a bearing when all you know of a station is its section.
It is not a place in the section, and can fall outside it — the Pacific section's is off
Lanai, between Oahu's hams and those of Maui and the Big Island.

The points come from every active US and Canadian amateur license, located by the
licensee's address (FCC ULS and ISED, through the Ham2K calls dataset).
`data/section-points.json` holds them, with how many licenses each was found from;
`npm run generate:points` downloads the sources and recomputes it, then
`npm run generate` rebuilds `src/data/sectionPoints.ts`. See [data/NOTES.md](./data/NOTES.md).

## TypeScript Support

Full TypeScript definitions are included: `ARRLSection`, `ARRLDivision`, `SectionsForState`.

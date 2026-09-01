# lib-arrl-data

ARRL data for amateur radio: sections, divisions, and section lookup by state and county.

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
- `ARRL_SECTIONS` — all 71 US and 12 Canadian sections, keyed by code
- `ARRL_DIVISIONS` — all 16 divisions, keyed by code
- `SECTIONS_FOR_STATES` — the raw state → section (or county → section) table

### Lookups

`findSection` returns a single section or `null`. For states and provinces that hold more
than one section, the county is required — without it, or with a county that isn't
recognized, the result is `null`. Use `sectionsForState` to list the candidates instead.

County names are matched loosely: case, punctuation, whitespace and `County` / `Parish` /
`Borough` suffixes are ignored, and `St.` is treated as `Saint`.

Ontario has no county mapping (see below), so `findSection('ON')` returns `null` even
though `ARRL_SECTIONS` includes its four sections.

## Data

The county-to-section table was contributed by Tom Schaefer, NY4I. See
[data/NOTES.md](./data/NOTES.md) for the corrections applied to it.

`data/sections-for-states.json` is the source of truth; run `npm run generate` after
editing it to rebuild `src/data/sectionsForStates.ts`.

## TypeScript Support

Full TypeScript definitions are included: `ARRLSection`, `ARRLDivision`, `SectionsForState`.

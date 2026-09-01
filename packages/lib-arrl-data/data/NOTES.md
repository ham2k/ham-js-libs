# Notes on `sections-for-states.json`

The county-to-section table was contributed by Tom Schaefer, NY4I, as a Perl hash.
The following corrections were applied when converting it:

## Missing or misspelled counties

- **MA / Suffolk** → `EMA` — added; the contributed table listed 13 of the 14 Massachusetts counties.
- **PA / Forest** → `WPA` — added; the contributed table listed 66 of the 67 Pennsylvania counties.
- **PA / Northhampton** → renamed to **Northampton** (`EPA`).

With these, every county count matches the official one: CA 58, FL 67, MA 14, NJ 21,
NY 62, PA 67, TX 254, WA 39.

## Canadian and territorial codes

The contributed table mapped some provinces and territories to their postal codes
rather than to ARRL/RAC section codes. Corrected to actual sections:

- **NT**, **NU**, **YT** -> `TER` (Territories, formerly NT).
- **GU** -> `PAC` (Guam is part of the Pacific section).
- **ON** -> replaced with a census-division mapping; see below. The contributed table
  had none, and for a while `findSection('ON')` returned `null` rather than an
  invented answer.

**NB** and **NS** were left exactly as contributed. An earlier version of this file
mapped them to a `MAR` (Maritime) section and claimed the table was wrong; that was
backwards. Maritime was split into separate New Brunswick, Nova Scotia and Prince
Edward Island sections, so the contributed `NB` and `NS` were correct and only the
table's `PE -> MAR` was stale. `PE` now maps to `PE`.

## Keeping the section list honest

Section codes change. `GTA` became `GH` (Golden Horseshoe) on 1 January 2023, and
Maritime split into `NB`/`NS`/`PE`; both were initially wrong here because they were
written from memory. `src/data/officialSections.spec.ts` now holds the section list
transcribed from ARRL's published abbreviation list and fails if the data drifts from
it. When ARRL publishes a new list, update that spec first, then the data.

Source: [ARRL / RAC Section Abbreviation List, updated 6/2024](https://www.arrl.org/files/file/Field-Day/2024/4_35-ARRL-RAC%20Section%20List.pdf)

## Ontario

Ontario's four sections are keyed on census divisions — counties, districts, regional
municipalities and single-tier cities — because that is how RAC defines them. There is
no postal-code-based source; FSA letters (`K`, `L`, `M`, `N`, `P`) approximate the
boundaries but `L` straddles GH and ONS, so they cannot be used for this.

RAC's definitions:

- **ONN** — all of Northwest Ontario, including Manitoulin Island, Northeastern
  Manitoulin and the Islands, Killarney, the cities of Greater Sudbury and North Bay,
  and Nipissing District.
- **ONE** — Algonquin Park, Renfrew, Hastings, Prince Edward, Haliburton, Peterborough
  and Northumberland Counties, and the cities and counties to the east.
- **GH** — the City of Toronto and the Regions of Halton (including the City of
  Burlington), Peel, York and Durham. The City of Hamilton and the Regional
  Municipality of Niagara moved here from ONS effective 1 April.
- **ONS** — Parry Sound District, the counties of Simcoe, Grey, Bruce, Dufferin and
  Wellington, and the remainder of Southwestern Ontario.

### Two divisions RAC does not name

**Muskoka** and **Kawartha Lakes** appear in none of the four definitions. Both are
assigned to `ONS` here by elimination: neither lies in ONN's northern area, neither is
east of Peterborough for ONE, and neither is one of GH's named regions, which leaves
ONS's "remainder". Muskoka additionally sits between Simcoe and Parry Sound, both
explicitly ONS. This is an inference, not a quotation — if RAC publishes something
more precise, these are the two entries to check first.

### Algonquin Park

RAC's own text overlaps here: Algonquin Park is named in ONE, but the park's northern
part lies in Nipissing District, which is named in ONN. The park is not a census
division, so it is carried as an alias resolving to `ONE`, following the explicit
mention. A station in the Nipissing portion is arguably ONN.

Sources: [RAC field organization changes](https://www.rac.ca/changes-to-the-rac-field-organization-effective-january-1-2023/),
[ARRL news on the Ontario boundaries](http://www.arrl.org/news/rac-announces-new-ontario-section-boundaries-abbreviations)

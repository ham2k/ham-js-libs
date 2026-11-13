# Notes on `sections-for-states.json`

The county-to-section table was contributed by Tom Schaefer, NY4I, as a Perl hash.
The following corrections were applied when converting it:

## Missing or misspelled counties

- **MA / Suffolk** → `EMA` — added; the contributed table listed 13 of the 14 Massachusetts counties.
- **PA / Forest** → `WPA` — added; the contributed table listed 66 of the 67 Pennsylvania counties.
- **PA / Northhampton** → renamed to **Northampton** (`EPA`).

With these, every county count matches the official one: CA 58, FL 67, MA 14, NJ 21,
NY 62, PA 67, TX 254, WA 39.

## Counties in the wrong section

- **TX / Anderson** → `NTX` (was `WTX`). North Texas lists it in its ARES District 9
  ([arrlntx.org](https://arrlntx.org/WP/public-service/ares/)), and none of its
  neighbors is in West Texas.
- **TX / Bastrop** → `STX` (was `WTX`). South and West Texas publish no county lists,
  but all five of Bastrop's neighbors, Travis (Austin) among them, are in South Texas.

Both turned up when every split state was checked against the Census Bureau's
[county adjacency file](https://www.census.gov/geographies/reference-files/time-series/geo/county-adjacency.html):
no other county borders none of its own section's, Los Angeles aside, a section of
its own. North Texas's published district lists also match the table county for county.

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

# `section-points.json`

Each section's point is the center of its licensed amateurs: the mean position of every
active license in it, found by summing the positions as vectors on a sphere and rounding
to 0.01°. `scripts/generate-points.ts` computes it, and records how many licenses each
point was found from.

## Sources

- **Licenses**: the Ham2K calls dataset's `all` set
  (`https://services.ham2k.net/lookups/calls/download?set=all`), every active amateur
  license from the FCC's ULS and ISED, each with the state or province of the licensee's
  address and a Maidenhead grid geocoded from it. A license counts once, at the middle of
  its grid square: under a kilometre across for most, several kilometres for the one in
  twelve geocoded only to a 6-character square.
- **Counties**: [GeoNames](https://download.geonames.org/export/dump/) towns of 500
  people or more, with their counties (`admin2`; for Ontario, census divisions). Where a
  state or province is split, a license goes to the county of the nearest town in its
  own state or province, and through `sections-for-states.json` to a section. A
  license near a section line can land on the wrong side of it, but those are few
  against the thousands in each section.

## What is left out

From the 2026-11-09 data, 877,879 licenses counted, and left out:

- about 33,000 with no grid, mostly Canadian licenses whose address ISED does not
  publish or that could not be geocoded;
- about 2,600 with no state or province in a section: military addresses (AE, AP),
  American Samoa and the Northern Marianas, which are in no section's table;
- Guam's 274, although Guam is in the Pacific section: they would pull Hawaii's point
  thousands of kilometres out to sea, near no one. PAC is Hawaii's hams alone.
- about 150 geocoded more than 200 km from any town in their own state, or near a town
  with no county.

The script stops if a section has no licenses; if more than 50 licenses are near towns
of one county the section table does not name, which is how a renamed county shows; or
if the licenses left out for being far from every town, or near a town in no county of
the table, come to more than 1% of those counted.

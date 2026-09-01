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
- **ON** -> removed. Ontario holds four sections (`GH`, `ONE`, `ONN`, `ONS`) and the
  contributed table had no district-level data to split them, so `findSection('ON')`
  returns `null` rather than an invented answer. The boundaries are defined by county
  and regional municipality, not postal code, so they fit this table's shape; adding
  them is the main open item for this data set.

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

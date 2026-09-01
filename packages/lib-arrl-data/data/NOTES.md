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

The contributed table mapped several provinces and territories to their postal codes
rather than to ARRL/RAC section codes. Corrected to actual sections:

- **NB**, **NS** → `MAR` (Maritime), joining **PE** which was already correct.
- **NT**, **NU**, **YT** → `TER` (Territories).
- **GU** → `PAC` (Guam is part of the Pacific section).
- **ON** → removed. Ontario holds four sections (`GTA`, `ONE`, `ONN`, `ONS`) and the
  contributed table had no district-level data to split them, so `findSection('ON')`
  returns `null` rather than an invented answer. Adding an Ontario county/district
  mapping is the main open item for this data set.

# lib-operation-data

Basic data related to Amateur Radio operation, such as bands, modes, etc

## License levels

`LICENSE_LEVELS` lists, per national regulator, the license levels in order — each with a `tier` (`basic`, `intermediate` or `full`) — plus the callsign series that give a level away. A level is named by its key, `"<jurisdiction>:<code>"` (`"us:G"`): `licenseLevelKey` makes one, `resolveLicenseLevel` reads one back, `licenseJurisdictionForEntity(entityPrefix)` finds a regulator by DXCC entity, and `licenseLevelForCallsign(call, entityPrefix)` guesses a level from the callsign.

What each level may transmit on lives in `bandPlans.json`, alongside the mode segments. Every level may use a band unless:

- the band's `exceptLevels` names it — it has nothing on that band;
- a segment's `exceptLevels` names it — it has nothing in that segment;
- a segment's `levels` names it — there it is limited to that segment's `superModes`.

A level's own `superModes` limit it everywhere (Japan's 4th class sends no CW). Mode rules that bind every level of a country alike are left to the mode segments, and stretches no level of a country may use are an allocation question, not a level's. `isOutsideLicensePrivileges(khz, { level, entityPrefix, ituRegion, mode })` answers for one frequency, and `modeForFrequency` ignores these segments.

## Research

[research/license-levels/](research/license-levels/README.md) holds the research behind the license-level data: what each country calls its license levels, each level's band, mode and power privileges, legacy classes, and callsign → level inference, with sources and a confidence mark on each fact. It is not part of the published package.

`src/data/licenseLevels.json` was derived from the research's high-confidence jurisdictions and is now the data's source of truth: correct it there, and record the evidence in the research.

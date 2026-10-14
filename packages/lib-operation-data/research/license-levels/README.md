# License levels — top 50 Ham2K entities (research, 2026-10-14)

Detail per jurisdiction (rules, band/mode/power tables, legacy mapping, callsign inference, sources with confidence) is in the regional files next to this one. `license-levels.json` holds every jurisdiction's machine-readable summary in one shape: frequencies in kHz, each range `{loKHz, hiKHz, modes[], powerW?, note?}`, mode tags among `all, CW, phone, image, data, RTTY`. Spot channels (Ireland's 60 m) have `loKHz == hiKHz`.

44 rule sets cover the 50 entities: UK (G/GM/GW/GI) is one Ofcom regime, and US + Puerto Rico are one FCC regime. Puerto Rico differs on one detail: phone on 7075–7100 kHz is allowed because it lies south of 20°N.

## What the level is called

| English term | Where |
|---|---|
| License/Licence Class | US, UK, Ireland, NL, BE, FR, CH, DE, AT, IT, ES, PT, GR, RO, RS, BG, TR, BR, MY, ZA, VE |
| Category | SP, AR, CO, CL, RU, (UA legacy) |
| Operator Class | JP, CN, KR, CZ, SK, SI, HR |
| Qualification | CA, AU (ACMA "qualification"), UA (since 2023) |
| Certificate | SE (no licence since 2004; certificate level), DK (certificate category), CH (Fähigkeitszeugnis since 2021) |
| Grade / Level | HU, IN, ID, NZ |

"License Class" is the natural English UI label. A local term can be shown as a hint where it differs (Canada "Qualification", Russia "Category").

## No meaningful levels: hide the field

- **Mexico**: one licence since the IFT era; the 1988 classes are legacy only.
- **Spain**: one level since 2006; legacy B/C have full privileges.
- **France**: one HAREC level issued; legacy Classe 3 (F0, 2 m at 10 W only) is still held.
- **Italy**: Class A only; Class N is in law (Jan 2026) but its privileges are not yet defined.
- **New Zealand**: one General certificate; new licensees are barred from 5–25 MHz until they have held it 3 months and logged 50 QSOs (time-based, not a level).
- **Ireland**: CEPT Class 1 and 2 have identical privileges.

France and Italy would each need a single entry or a legacy entry to be useful. Everywhere else has 2–5 current levels.

## Overview

| Entities | Regulator | Local term / English | Current levels, low → high (max HF power) | Legacy still held | Confidence |
|---|---|---|---|---|---|
| VK | ACMA | qualification / Licence Level | Foundation (10 W) → Standard (100 W) → Advanced (400 W) | — | high |
| ZL | RSM | General Amateur Operator's Certificate of Competency / Licence Level | General (1000 W) | — | high |
| JA | MIC | 資格 / 級 / Operator Class | 4th Class (20 W) → 3rd Class (50 W) → 2nd Class (200 W) → 1st Class (1000 W) | — | high |
| BY, BT | MIIT | 业余无线电台操作技术能力类别 / Operator Class | Class A (25 W) → Class B (15 W) → Class C (1000 W) | Class B (obtained before 2024-03-01) | high |
| 9M2, 9M6, 9M8, 9W2… | MCMC | Kelas / Licence Class | Class C (25 W) → Class B (50 W) → Class A (1000 W) | — | high |
| HL, DS, DT, 6K… | MSIT | 아마추어무선기사 자격 등급 / Operator Class | 4th Class (10 W) → 3rd Class (Telephony) (100 W) → 3rd Class (Telegraphy) (100 W) → 2nd Class (200 W) → 1st Class (1000 W) | — | high |
| VU | DoT / WPC Wing | Category of ASOC / Licence Grade | Restricted (50 W) → General (400 W) | Grade II (legacy), Grade I / Advanced (legacy) | medium |
| YB, YC, YD, YE… | Komdigi | Tingkat IAR / Licence Level | General (100 W) → Advanced (500 W) → Extra Class (1000 W) | — | high |
| ZS, ZR, ZU | ICASA | Class / Licence Class | Class B (100 W) → Class A (1000 W) | Former restricted (ZR) | medium |
| DL | BNetzA | Klasse / License Class | Class N (10 W) → Class E (100 W) → Class A (750 W) | — | high |
| OE | Fernmeldebüros | Bewilligungsklasse / License Class | Class 3 (100 W) → Class 4 (100 W) → Class 1 (1000 W) | — | high |
| OK, OL | ČTÚ | třída operátora / Operator Class | Class N (Novice) (10 W) → Class A (750 W) | — | high |
| OM | RÚ | trieda operátora / Operator Class | Class N (Novice) (100 W) → Class E (750 W) | — | medium |
| SP | UKE | kategoria pozwolenia / License Category | Category 3 (100 W) → Category 1 (500 W) | — | high |
| HA, HG | NMHH | engedély fokozata / License Grade | Beginner (Kezdő) (100 W) → CEPT Novice (200 W) → CEPT (full) (1500 W) | — | high |
| S5 | AKOS | razred radioamaterja / Operator Class | Class N (Novice) (100 W) → Class A (1500 W) | — | high |
| 9A | HAKOM | radioamaterski razred / Operator Class | Class P (Beginner) (100 W) → Class A (1500 W) | — | high |
| LU, LW, AY, AZ… | ENACOM | categoría / License Category | Novice (200 W) → General (1000 W) → Superior (1500 W) → Special (1500 W) | Initial (legacy), Intermediate (legacy) | high |
| PY, PP, PQ, PR… | Anatel | classe / License Class | Class C (100 W) → Class B (1000 W) → Class A (1500 W) | Class D (legacy) | high |
| HK, HJ, 5J, 5K | MinTIC | categoría / License Category | Second Category / Novice (100 W) → First Category / Expert (600 W) → Advanced (2000 W) | — | high |
| CE, CA, CB, CC… | SUBTEL | categoría / License Category | Aspirant (100 W) → Novice (200 W) → General (1200 W) → Superior (1200 W) | — | high |
| YV, YY, YW, 4M | CONATEL | categoría / License Category | Class A (200 W) → Class B (1000 W) | — | medium |
| LA, JW, JX, 3Y | Nasjonal kommunikasjonsmyndighet | lisensklasse / Licence class | Limited licence (10 W) → Full licence (1000 W) | — | high |
| SM | Post- och telestyrelsen | certifikat / Certificate | Entry-level certificate (25 W) → Amateur radio certificate (HAREC) (200 W) | — | high |
| OZ | Digitaliseringsstyrelsen | certifikat, kategori / Certificate category | Category D (50 W) → Category B (100 W) → Category A (1000 W) | Category C (legacy) | high |
| OH, OH0, OJ0 | Traficom | luokka / Class | Basic class (120 W) → General class (1500 W) | Technical class (legacy) | medium |
| UA, UA2, UA9 | ГКРЧ / Минцифры России | категория / Category | Category 4 (5 W) → Category 3 (10 W) → Category 2 (1000 W) → Category 1 (1000 W) | — | high |
| UR | НКЕК | кваліфікація радіоаматора / Qualification | Entry level (student) (40 W) → Novice (100 W) → Higher qualification (HAREC) (200 W) | Category 1 (legacy), Category 2 (legacy), Category 3 (legacy) | high |
| K, KP4 | FCC | operator license class / License Class | Technician (1500 W) → General (1500 W) → Amateur Extra (1500 W) | Novice, Advanced | high |
| VE | ISED | qualification / Qualification | Basic (560 W) → Basic with Honours (560 W) → Basic + Morse (5 wpm) (560 W) → Basic + Advanced (2250 W) | — | high |
| XE | CRT | none currently / none (single licence) | Amateur licence (single class) | Restricted (legacy), Novice (legacy), Class II (legacy), Class I (legacy) | medium |
| I | MIMIT | patente / License Class | Class N (Novice) → Class A (500 W) | Class B (legacy) | medium |
| EA, EA6, EA8, EA9 | SETID | autorización de radioaficionado / License Class | Amateur authorisation (full) (1000 W) | Class B (legacy), Class C (legacy novice) | high |
| CT, CU, CT3 | ANACOM | categoria de amador / License Class | Category 3 (10 W) → Category 2 (200 W) → Category 1 (1500 W) | Category C (legacy), Category B (legacy) | medium |
| SV, SV5, SV9, SV/A | Ministry of Digital Governance | κατηγορία άδειας / License Class | Entry level (10 W) → Category 1 (500 W) | Category 2 of 2002 (legacy, SW) | medium |
| YO | ANCOM | clasa / License Class | Class IV (50 W) → Class III (100 W) → Class II (200 W) → Class I (400 W) | — | high |
| YU | RATEL | класа радио-аматера / License Class | Class C (basic) (100 W) → Class B (advanced) (100 W) → Class A (1500 W) | — | high |
| LZ | CRC | радиолюбителски клас / License Class | Class 2 (5 W) → Class 1 (350 W) | — | high |
| TA, TA1 | BTK | amatör telsizcilik belgesi sınıfı / License Class | Class C (5 W) → Class B (400 W) → Class A (400 W) | — | medium |
| G, GM, GW, GI | Ofcom | licence class / Licence Class | Foundation (25 W) → Intermediate (100 W) → Full (1000 W) | — | high |
| EI | ComReg | licence type / CEPT Class / Licence Class | CEPT Class 2 (400 W) → CEPT Class 1 (400 W) | — | high |
| PA | RDI | categorie registratie / Licence Class | Novice (100 W) → Full (400 W) | — | high |
| ON | BIPT/IBPT | certificat d'opérateur de classe A/B/C / Licence Class | Entry (Basic) (25 W) → Novice (100 W) → HAREC (1500 W) | — | high |
| F | ANFR | classe de certificat d'opérateur / Licence Class | HAREC (Classes 1/2) (500 W) | Novice (Classe 3) | high |
| HB | OFCOM/BAKOM | Fähigkeitszeugnis / Licence Class | Novice (100 W) → Full (CEPT) (1000 W) | — | high |

Power figures are the highest per level on HF, and their basis varies (PEP output in most places, mean power in Slovenia, DC input in India's 2009 schedule; not stated in the rules for China, Korea or Indonesia). Several levels differ only in power, with the same bands: Romania (all four classes), Austria 3 vs 4 on HF, Russia 1 vs 2, Argentina Superior vs Especial, Canada Basic+Honours vs Basic+Morse. Several levels differ in things the app does not model, such as building transmitters, running repeaters or holding club calls.

## Callsign → level inference

- **Reliable (issue-time class):** UK, Switzerland, Belgium, Netherlands (PD = Novice), Greece (SY/SV), Portugal (CR/CS/CT 7-9), Chile (CD/CA/CE/XQ), Venezuela (YY/YV), Indonesia (YD/YC/YB), South Africa (ZU/ZS), Malaysia (9W3/9W2/9M2), Sweden (SH = entry), Czech Republic (OK9 = N), Germany (DN9 = N, DO = E).
- **Partial or lower bound only:** US (1x2/2x1 etc. imply a minimum class), Australia (2-letter suffix = Advanced), Brazil (PU = C), Colombia (HJ = Novice), Russia (suffix length), Turkey (TA = A), Bulgaria/Romania (2-letter suffix = top classes), India (VU3), Slovenia, Slovakia, Ukraine, France (F0), Ireland (cosmetic).
- **None:** Canada, Japan, China, Korea, Austria, Poland, Hungary, Croatia, Serbia, Denmark, Finland, Argentina, Norway (new series not yet published), NZ, Spain, Italy, Mexico.

Callsign inference could pre-fill the field, but never override what the user set. An upgrade often keeps the old call (Germany DO→A, Slovakia, Portugal suffix, Venezuela suffix), so an inferred value is a lower bound.

## Weakest data (needs verification before shipping)

- **Slovakia**: the current decree has no per-class bands or power; the 100 W / 750 W figures come from older and draft sources (low confidence).
- **Venezuela**: the Category A 160 m entry contradicts itself; two versions disagree on the 80/40 m edges.
- **Colombia**: the national band table was not found, so the band edges above Novicio are assumed Region 2 defaults.
- **India**: the 2024 rules have no band/power table; the 2009 schedule was used.
- **South Africa**: from a SARL extract, not the gazette; 6 m Class B power looks wrong.
- **Portugal**: the new Lei 22/2026 (in force 25 Aug 2026) was not read directly.
- **Greece**: HF power is 400 W in the 2011 text vs 500 W per the national society.
- **Hungary**: a revised frequency ordinance takes effect 15 Nov 2026.
- **Brazil**: unconfirmed whether the amateur articles of Res. 777/2025 are in force.
- **Mexico**: CRT final rules are not yet in the gazette.
- **Regulator table typos, kept as printed**: UK 30 m printed as 10000–10150 kHz (almost certainly 10100), Sweden 13 cm 100 mW, Ukraine 5 W on VHF/UHF.

## Recent reforms (2024–2026) that a stale source would miss

Germany N (Jun 2024), Poland new regulation (May 2026), Norway Begrenset lisens (Mar 2026), Sweden instegscertifikat (Mar 2025), Denmark BEK 499/2026, Ukraine A/B/C (2023), China Order 67 (Mar 2024), Brazil Ato 926/2024 and 3448/2026, Argentina Res. 1186/2024, Serbia 2024 rulebook, Portugal Lei 22/2026, Italy Class N (2026, pending), US 60 m (Feb 2026), Mexico IFT → CRT.

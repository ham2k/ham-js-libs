# Amateur licence levels: North America (K, KP4, VE, XE)

Research date: 2026-10-14. Confidence tags: **[H]** = primary source fetched and read; **[M]** = society/secondary source, or a primary source read in part; **[L]** = unverified or inferred.

Frequencies are in kHz unless marked. The US and Puerto Rico share one section because both fall under FCC Part 97.

---

## United States (K) and Puerto Rico (KP4) — FCC Part 97

### 1. Regulator and rules

- **Regulator:** Federal Communications Commission (FCC), Wireless Telecommunications Bureau. **[H]**
- **Rules:** 47 CFR Part 97, *Amateur Radio Service*. I read it from the eCFR versioner API, current to 2026-10-09. **[H]** The sections that matter here:
  - §97.9 lists the licence classes.
  - §97.301 sets frequency bands by class.
  - §97.303 sets sharing rules, including the 60 m channels.
  - §97.305 sets which emission types may be used on each segment.
  - §97.307(f) sets emission standards, including the Novice/Technician CW-only and SSB-only rules.
  - §97.313 sets power limits.
  - §97.19 covers vanity call signs, §97.21 renewals, and §97.501/§97.505 exam elements and credit.
  - URL: https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-97. The web page refuses automated clients; the API at `https://www.ecfr.gov/api/versioner/v1/full/2026-10-09/title-47.xml?part=97` worked.
- **Puerto Rico:** Appendix 1 to Part 97 lists the Commonwealth of Puerto Rico as an FCC-regulated area in ITU Region 2, and the note to §97.303 places PR in Region 2. PR operators therefore use the same rules and the Region 2 columns of §97.301. **[H]**
- **Latest amendment:** 91 FR 1430 (14 Jan 2026, effective 13 Feb 2026), the WRC-15 implementation order. It added 5351.5–5366.5 kHz on 60 m at 9.15 W ERP. It kept four discrete channels at 5332, 5348, 5373 and 5405 kHz at 100 W ERP, and dropped the old 5358.5 kHz channel. It did not change how privileges are split by class. **[H]** for the rule text; **[M]** for "dropped 5358.5" (inferred because the channel is absent from the current text).
- **Pending:** ARRL's 2018 "Technician enhancement" petition (RM-11828) would give Technicians phone on 3900–4000, 7225–7300 and 21350–21450, plus more data access. The FCC has not acted on it. I found no NPRM that changes the class structure as of Oct 2026. **[M]**

### 2. Term

- Local term: **"operator license class"** (§97.9: "classes of amateur operator license grants"). Usually shortened to "license class". **[H]**
- English UI word: **"License Class"**.

### 3. Current levels (lowest to highest)

| Order | Official name | Code | CEPT equivalence | New licences? | Exam elements (§97.501) |
|---|---|---|---|---|---|
| 0 | Novice | N | none | No (legacy) | — |
| 1 | Technician | T | none | Yes | 2 |
| 2 | General | G | CEPT Novice under ECC Rec (05)06, only where implemented | Yes | 2 + 3 |
| 3 | Advanced | A | CEPT licence (HAREC level, T/R 61-01) | No (legacy) | — |
| 4 | Amateur Extra | E | CEPT licence (HAREC level, T/R 61-01) | Yes | 2 + 3 + 4 |

- The class list comes from §97.9(a): "Novice, Technician, General, Advanced, and Amateur Extra". **[H]** §97.501 only offers exams for Extra, General and Technician, so Novice and Advanced can no longer be newly granted. **[H]**
- CEPT: T/R 61-01 (edition of 23 Oct 2020), Annex 4 Table 3, maps "Amateur Extra and Advanced" to the CEPT licence and lists "Com. of Puerto Rico — KP4" as a separate row. **[H]** ECC Rec (05)06 (amended 2016, Annex 2 updated Feb 2024) maps US "General" to the CEPT Novice licence. **[H]** ARRL notes there is no CEPT equivalent for Technician or Novice. **[M]**

### 4. Legacy and grandfathered classes

- **Novice:** still valid and renewable. Its HF privileges are the same as Technician's: CW only in 3525–3600, 7025–7125 and 21025–21200, plus 10 m at 28000–28500. Above 30 MHz it has only 222–225 MHz at 25 W PEP and 1270–1295 MHz at 5 W PEP. It has no 6 m, 2 m or 70 cm. **[H]** (§97.301(e), §97.313(d)(e))
- **Advanced:** still valid and renewable. It sits between General and Extra and has its own sub-band edges (table below). **[H]**
- **Technician Plus:** merged. Renewal "will be processed as an application for renewal of a Technician Class" licence (§97.21(a)(3)). Since the Morse exam was dropped in 2007, every Technician has the old Tech-Plus/Novice HF privileges. Map it to Technician. **[H]**
- **Technicians licensed before 21 March 1987** get Element 3 (General) credit when they upgrade (§97.505(a)(2)). This matters only for upgrades; their operating privileges are plain Technician. **[H]**
- **CSCE holders:** someone who has passed an upgrade exam may use the higher class's privileges for up to 365 days, pending the grant, and must add an "/AG" or "/AE"-style indicator (§97.9(b), §97.119(f)). An app may want a "pending upgrade" state. **[H]**

### 5. Band privileges by class (ITU Region 2, which includes PR)

"CW/data" means CW, RTTY and data (§97.305(c)). CW is allowed anywhere the operator has privileges (§97.305(a)). "Phone" segments also allow image modes.

**HF and MF (kHz).** **[H]**

| Band | Extra | Advanced | General | Technician / Novice |
|---|---|---|---|---|
| 2200 m | 135.7–137.8 | same | same | — |
| 630 m | 472–479 | same | same | — |
| 160 m | 1800–2000 all modes | same | same | — |
| 80 m CW/data | 3500–3600 | 3525–3600 | 3525–3600 | 3525–3600 **CW only** |
| 75 m phone | 3600–4000 | 3700–4000 | 3800–4000 | — |
| 60 m | 4 channels + 5351.5–5366.5 | same | same | — |
| 40 m CW/data | 7000–7125 | 7025–7125 | 7025–7125 | 7025–7125 **CW only** |
| 40 m phone | 7125–7300 | 7125–7300 | 7175–7300 | — |
| 30 m CW/data | 10100–10150 | same | same | — |
| 20 m CW/data | 14000–14150 | 14025–14150 | 14025–14150 | — |
| 20 m phone | 14150–14350 | 14175–14350 | 14225–14350 | — |
| 17 m | 18068–18110 CW/data; 18110–18168 phone | same | same | — |
| 15 m CW/data | 21000–21200 | 21025–21200 | 21025–21200 | 21025–21200 **CW only** |
| 15 m phone | 21200–21450 | 21225–21450 | 21275–21450 | — |
| 12 m | 24890–24930 CW/data; 24930–24990 phone | same | same | — |
| 10 m | 28000–28300 CW/data; 28300–29700 phone | same | same | 28000–28300 CW/RTTY/data; 28300–28500 **CW + SSB only** |

Notes on the HF table:

- **Technician/Novice modes.** §97.307(f)(9) limits Novice and Technician to CW on the 80/40/15 m segments. §97.307(f)(10) limits them to CW plus J3E/R3E (SSB) on 28.3–28.5 MHz. RTTY and data on 28.0–28.3 MHz are allowed to them, because that segment cites only (f)(3). **[H]**
- **40 m, 7075–7100 kHz.** This part of the CW/data segment becomes phone/image for stations in Regions 1 and 3, and for Region 2 stations south of 20°N or west of 130°W (§97.305(c)(3)(v), §97.307(f)(11)). **Puerto Rico (about 18°N) and the USVI qualify**, as do Hawaii and the Pacific territories. In PR, Extra, Advanced and General holders may therefore use phone on 7075–7100. That is still within General's 7025–7125 CW/data range, so the class edges do not change. **[H]**
- **60 m.** Phone, RTTY, data and CW only; at most 2.8 kHz bandwidth. On the channels, the carrier for phone or data is set 1.5 kHz below the centre frequency; for CW the carrier is on the centre frequency (§97.303(h)(3), §97.307(f)(14)). **[H]**
- **Region 2 edges** for the higher classes are as shown. Other regions, such as Pacific territories in Region 3, differ (e.g. 75 m ends at 3900 and 40 m at 7200). **[H]**

**VHF and up (Technician, General, Advanced, Extra all identical — §97.301(a)).** **[H]**

| Band | Range (MHz) | Mode note (all classes) |
|---|---|---|
| 6 m | 50–54 | 50.0–50.1 CW only |
| 2 m | 144–148 | 144.0–144.1 CW only |
| 1.25 m | 219–220 (fixed digital message forwarding only, 50 W PEP); 222–225 | — |
| 70 cm | 420–450 | — |
| 33 cm | 902–928 | — |
| 23 cm | 1240–1300 | — |
| 13 cm and up | 2300–2310, 2390–2450; 5650–5925; 10.0–10.5 GHz; 24.0–24.25 GHz; 47.0–47.2; 76–81; 122.25–123; 134–141; 241–250 GHz; above 275 GHz | — |

Novice above 30 MHz: 222–225 MHz (25 W PEP) and 1270–1295 MHz (5 W PEP) only.

**Power limits (§97.313).** **[H]**

- The general maximum is **1.5 kW PEP**. §97.313(b) says "transmitter power"; §97.313(c) and the definitions make it PEP output.
- **200 W PEP output** applies on 30 m for every class.
- **200 W PEP output** applies to Novice and Technician on the 3525–3600, 7025–7125, 21025–21200 and 28000–28500 kHz segments.
- Novice: **25 W PEP** on 1.25 m and **5 W PEP** on 23 cm.
- 60 m: **100 W ERP** on the channels and **9.15 W ERP** in 5351.5–5366.5. ERP is PEP times antenna gain over a dipole.
- 2200 m: 1.5 kW PEP and 1 W EIRP. 630 m: 500 W PEP and 5 W EIRP (1 W EIRP in Alaska within 800 km of Russia).
- 219–220 MHz: 50 W PEP. Spread spectrum: 10 W PEP. 4 mm: 316 W peak EIRP.
- Location limits on 70 cm and 33 cm (near military areas and White Sands) do not depend on class.
- Other than the Novice/Tech HF and Novice VHF/UHF limits, power does not vary by class.

**Puerto Rico differences.** Privileges are identical to the US. The differences are:

- the 7075–7100 phone point above; **[H]**
- repeaters within 16 km of the Arecibo Observatory must notify the observatory first (§97.205(h)); **[H]**
- call signs are region-12 formats (below).

### 6. Can class be inferred from the call sign?

The answer is **partly, and only as a lower bound.**

- **FCC sequential call sign system.** I took this from FCC tables reproduced at radioqth.net and Wikipedia; fcc.gov returned 403 to automated fetches. **[M]**

| Group | Who | Regions 1–10 (contiguous US) | Region 12 (PR = KP3/KP4/NP3/NP4/WP3/WP4; also KP2 USVI, KP1 Navassa, KP5 Desecheo) |
|---|---|---|---|
| A | Extra | 1x2 (K/N/W#XX), 2x1 (A_/K_/N_/W_#X), 2x2 AA–AK#XX | 2x1 KP#X, NP#X, WP#X |
| B | Advanced | 2x2 K_/N_/W_#XX | 2x2 KP#XX |
| C | General, Technician (Tech Plus) | 1x3 K/N/W#XXX | 2x2 NP#XX, WP#XX |
| D | Novice, club, military rec.; also Technician/General when C is exhausted | 2x3 K_/W_#XXX | 2x3 KP#XXX, WP#XXX |

- **Rules:**
  - Vanity calls must come from the applicant's own group or a lower one (§97.19(d)). **[H]**
  - Call signs do not change on upgrade.
  - Region-specific calls (KP4 etc.) need a mailing address in that area (§97.19(d)(4)). A PR resident may still hold a contiguous-format call. **[H]**
  - When a regional group runs out, the FCC issues from the next lower group. For example, a new Extra may get a Group B 2x2. **[M]**
- **Inference rule for an app:**
  - Group A format means Extra. That is reliable for calls issued under the sequential and vanity systems (1978 onward). Pre-1978 calls, special-event 1x1 calls and club calls are exceptions.
  - Group B means at least Advanced.
  - Group C means at least Technician (it excludes Novice).
  - Group D gives no information.
  - **Watch the PR trap:** a 2x2 like WP4XX is Group C (Technician or General), not Advanced.
  - The current class can be higher than the group implies. Use the ULS or the callbook as ground truth: the FCC ULS licence record holds the operator class.

### 7. Sources (US/PR)

| URL | What it supported | Confidence |
|---|---|---|
| https://www.ecfr.gov/api/versioner/v1/full/2026-10-09/title-47.xml?part=97 | Full Part 97 text, current to 2026-10-09: §§97.9, 97.19, 97.21, 97.119, 97.205(h), 97.301, 97.303, 97.305, 97.307, 97.313, 97.501, 97.505, Appendix 1 | H |
| https://www.federalregister.gov/documents/2026/01/14/2026-00587/implementation-of-the-final-acts-of-the-world-radiocommunication-conference-geneva-2015-wrc-15-other | 2026 60 m order, effective 13 Feb 2026 (seen via search; rule text read in eCFR) | M |
| https://docdb.cept.org/download/2ae38a89-e58a/TR6101.pdf | T/R 61-01 Annex 4 Table 3: Extra and Advanced = CEPT; PR listed as KP4 | H |
| https://docdb.cept.org/download/4413 | ECC Rec (05)06: US General = CEPT Novice | H |
| http://www.arrl.org/cept | No CEPT equivalent for Technician/Novice (search summary) | M |
| https://www.radioqth.net/vanity/SeqCallSystem | Group A–D formats per region, including region 12 | M |
| https://en.wikipedia.org/wiki/Amateur_radio_call_signs_of_the_United_States | Group formats, region numerals (P3/P4 = PR), caveats | M (lead only) |
| https://www.arrl.org/news/arrl-requests-expanded-hf-privileges-for-technician-licensees ; https://www.radioworld.com/news-and-business/business-and-law/arrl-seeks-entry-level-hf-privileges-in-fcc-proposal | Pending Tech petition, no FCC action | M |

**Not verified:**

- I could not read the FCC sequential call sign page directly (HTTP 403).
- I could not confirm the "AA–AK" vs "AA–AL" edge for contiguous Group A 2x2. AL is used for Alaska.
- The exact date (April 15, 2000) after which no new Novice or Advanced licences were issued comes from memory of the 1999 restructuring order. The eCFR only shows the 65 FR 6550 (Feb 2000) citation. **[L]**

```json
{
 "entities": ["K", "KP4"],
 "regulator": "FCC",
 "rules": "47 CFR Part 97 (eCFR, current to 2026-10-09)",
 "termLocal": "operator license class",
 "termEnglish": "License Class",
 "levels": [
  {
   "code": "N",
   "name": "Novice",
   "nameLocal": "Novice",
   "order": 0,
   "cept": "none",
   "issued": false,
   "legacy": true,
   "maxPowerW": 200,
   "powerNote": "PEP output on HF segments; 25 W PEP on 1.25m; 5 W PEP on 23cm",
   "bands": [
    {"band": "80m", "ranges": [[3525, 3600, "CW"]], "note": "200 W PEP output"},
    {"band": "40m", "ranges": [[7025, 7125, "CW"]], "note": "200 W PEP output"},
    {"band": "15m", "ranges": [[21025, 21200, "CW"]], "note": "200 W PEP output"},
    {"band": "10m", "ranges": [[28000, 28300, "CW,RTTY,data"], [28300, 28500, "CW,phone"]], "note": "200 W PEP output; 28.3-28.5 MHz phone is SSB only (J3E/R3E), no image/AM/FM (97.307(f)(10))"},
    {"band": "1.25m", "ranges": [[222000, 225000, "all"]], "note": "25 W PEP (97.313(d))"},
    {"band": "23cm", "ranges": [[1270000, 1295000, "all"]], "note": "5 W PEP (97.313(e))"}
   ],
   "notes": "No new grants since 2000; still renewable (97.9(a), 97.21). HF segments identical to Technician."
  },
  {
   "code": "T",
   "name": "Technician",
   "nameLocal": "Technician",
   "order": 1,
   "cept": "none",
   "issued": true,
   "legacy": false,
   "maxPowerW": 1500,
   "powerNote": "1.5 kW PEP output above 50 MHz; 200 W PEP output on HF segments",
   "bands": [
    {"band": "80m", "ranges": [[3525, 3600, "CW"]], "note": "200 W PEP output"},
    {"band": "40m", "ranges": [[7025, 7125, "CW"]], "note": "200 W PEP output"},
    {"band": "15m", "ranges": [[21025, 21200, "CW"]], "note": "200 W PEP output"},
    {"band": "10m", "ranges": [[28000, 28300, "CW,RTTY,data"], [28300, 28500, "CW,phone"]], "note": "200 W PEP output; 28.3-28.5 MHz phone is SSB only (J3E/R3E), no image/AM/FM (97.307(f)(10))"},
    {"band": "6m", "ranges": [[50000, 50100, "CW"], [50100, 54000, "all"]]},
    {"band": "2m", "ranges": [[144000, 144100, "CW"], [144100, 148000, "all"]]},
    {"band": "1.25m", "ranges": [[219000, 220000, "data"], [222000, 225000, "all"]], "note": "219-220 MHz only for fixed point-to-point digital message forwarding, 50 W PEP"},
    {"band": "70cm", "ranges": [[420000, 450000, "all"]], "note": "PR is Region 2: 420-450 MHz; 50 W PEP near listed military areas (97.313(f))"},
    {"band": "33cm", "ranges": [[902000, 928000, "all"]]},
    {"band": "23cm", "ranges": [[1240000, 1300000, "all"]]},
    {"band": "13cm", "ranges": [[2300000, 2310000, "all"], [2390000, 2450000, "all"]]},
    {"band": "5cm", "ranges": [[5650000, 5925000, "all"]]},
    {"band": "3cm", "ranges": [[10000000, 10500000, "all"]]},
    {"band": "1.2cm", "ranges": [[24000000, 24250000, "all"]]},
    {"band": "6mm", "ranges": [[47000000, 47200000, "all"]]},
    {"band": "4mm", "ranges": [[76000000, 81000000, "all"]]},
    {"band": "2.5mm", "ranges": [[122250000, 123000000, "all"]]},
    {"band": "2mm", "ranges": [[134000000, 141000000, "all"]]},
    {"band": "1mm", "ranges": [[241000000, 250000000, "all"]]}
   ],
   "notes": "Includes legacy Technician Plus (renewed as Technician, 97.21(a)(3)). No 160/60/30/20/17/12m, no 2200/630m."
  },
  {
   "code": "G",
   "name": "General",
   "nameLocal": "General",
   "order": 2,
   "cept": "CEPT Novice (ECC Rec (05)06)",
   "issued": true,
   "legacy": false,
   "maxPowerW": 1500,
   "powerNote": "PEP output; 200 W PEP on 30m",
   "bands": [
    {"band": "2200m", "ranges": [[135.7, 137.8, "all"]], "note": "1 W EIRP, 1.5 kW PEP; prior UTC notification (97.303(g))"},
    {"band": "630m", "ranges": [[472, 479, "all"]], "note": "5 W EIRP (1 W in AK near Russia), 500 W PEP"},
    {"band": "160m", "ranges": [[1800, 2000, "all"]]},
    {"band": "80m", "ranges": [[3525, 3600, "CW,RTTY,data"]]},
    {"band": "75m", "ranges": [[3800, 4000, "CW,phone,image"]]},
    {"band": "60m", "ranges": [[5330.6, 5333.4, "CW,phone,RTTY,data"], [5346.6, 5349.4, "CW,phone,RTTY,data"], [5351.5, 5366.5, "CW,phone,RTTY,data"], [5371.6, 5374.4, "CW,phone,RTTY,data"], [5403.6, 5406.4, "CW,phone,RTTY,data"]], "note": "Channels centred 5332/5348/5373/5405 kHz at 100 W ERP; 5351.5-5366.5 kHz at 9.15 W ERP; max 2.8 kHz bandwidth (97.303(h), 97.313(i))"},
    {"band": "40m", "ranges": [[7025, 7125, "CW,RTTY,data"], [7175, 7300, "CW,phone,image"]], "note": "7075-7100 kHz is phone/image only for stations south of 20N (incl. Puerto Rico, USVI) or west of 130W (97.307(f)(11)); elsewhere in R2 it is CW/RTTY/data"},
    {"band": "30m", "ranges": [[10100, 10150, "CW,RTTY,data"]], "note": "200 W PEP output for every class (97.313(c)(1))"},
    {"band": "20m", "ranges": [[14025, 14150, "CW,RTTY,data"], [14225, 14350, "CW,phone,image"]]},
    {"band": "17m", "ranges": [[18068, 18110, "CW,RTTY,data"], [18110, 18168, "CW,phone,image"]]},
    {"band": "15m", "ranges": [[21025, 21200, "CW,RTTY,data"], [21275, 21450, "CW,phone,image"]]},
    {"band": "12m", "ranges": [[24890, 24930, "CW,RTTY,data"], [24930, 24990, "CW,phone,image"]]},
    {"band": "10m", "ranges": [[28000, 28300, "CW,RTTY,data"], [28300, 29700, "CW,phone,image"]]},
    {"band": "6m", "ranges": [[50000, 50100, "CW"], [50100, 54000, "all"]]},
    {"band": "2m", "ranges": [[144000, 144100, "CW"], [144100, 148000, "all"]]},
    {"band": "1.25m", "ranges": [[219000, 220000, "data"], [222000, 225000, "all"]], "note": "219-220 MHz only for fixed point-to-point digital message forwarding, 50 W PEP"},
    {"band": "70cm", "ranges": [[420000, 450000, "all"]], "note": "PR is Region 2: 420-450 MHz; 50 W PEP near listed military areas (97.313(f))"},
    {"band": "33cm", "ranges": [[902000, 928000, "all"]]},
    {"band": "23cm", "ranges": [[1240000, 1300000, "all"]]},
    {"band": "13cm", "ranges": [[2300000, 2310000, "all"], [2390000, 2450000, "all"]]},
    {"band": "5cm", "ranges": [[5650000, 5925000, "all"]]},
    {"band": "3cm", "ranges": [[10000000, 10500000, "all"]]},
    {"band": "1.2cm", "ranges": [[24000000, 24250000, "all"]]},
    {"band": "6mm", "ranges": [[47000000, 47200000, "all"]]},
    {"band": "4mm", "ranges": [[76000000, 81000000, "all"]]},
    {"band": "2.5mm", "ranges": [[122250000, 123000000, "all"]]},
    {"band": "2mm", "ranges": [[134000000, 141000000, "all"]]},
    {"band": "1mm", "ranges": [[241000000, 250000000, "all"]]}
   ],
   "notes": "ECC (05)06 equivalence only in countries that implement it."
  },
  {
   "code": "A",
   "name": "Advanced",
   "nameLocal": "Advanced",
   "order": 3,
   "cept": "HAREC (T/R 61-01)",
   "issued": false,
   "legacy": true,
   "maxPowerW": 1500,
   "powerNote": "PEP output; 200 W PEP on 30m",
   "bands": [
    {"band": "2200m", "ranges": [[135.7, 137.8, "all"]], "note": "1 W EIRP, 1.5 kW PEP; prior UTC notification (97.303(g))"},
    {"band": "630m", "ranges": [[472, 479, "all"]], "note": "5 W EIRP (1 W in AK near Russia), 500 W PEP"},
    {"band": "160m", "ranges": [[1800, 2000, "all"]]},
    {"band": "80m", "ranges": [[3525, 3600, "CW,RTTY,data"]]},
    {"band": "75m", "ranges": [[3700, 4000, "CW,phone,image"]]},
    {"band": "60m", "ranges": [[5330.6, 5333.4, "CW,phone,RTTY,data"], [5346.6, 5349.4, "CW,phone,RTTY,data"], [5351.5, 5366.5, "CW,phone,RTTY,data"], [5371.6, 5374.4, "CW,phone,RTTY,data"], [5403.6, 5406.4, "CW,phone,RTTY,data"]], "note": "Channels centred 5332/5348/5373/5405 kHz at 100 W ERP; 5351.5-5366.5 kHz at 9.15 W ERP; max 2.8 kHz bandwidth (97.303(h), 97.313(i))"},
    {"band": "40m", "ranges": [[7025, 7125, "CW,RTTY,data"], [7125, 7300, "CW,phone,image"]], "note": "7075-7100 kHz is phone/image only for stations south of 20N (incl. Puerto Rico, USVI) or west of 130W (97.307(f)(11)); elsewhere in R2 it is CW/RTTY/data"},
    {"band": "30m", "ranges": [[10100, 10150, "CW,RTTY,data"]], "note": "200 W PEP output for every class (97.313(c)(1))"},
    {"band": "20m", "ranges": [[14025, 14150, "CW,RTTY,data"], [14175, 14350, "CW,phone,image"]]},
    {"band": "17m", "ranges": [[18068, 18110, "CW,RTTY,data"], [18110, 18168, "CW,phone,image"]]},
    {"band": "15m", "ranges": [[21025, 21200, "CW,RTTY,data"], [21225, 21450, "CW,phone,image"]]},
    {"band": "12m", "ranges": [[24890, 24930, "CW,RTTY,data"], [24930, 24990, "CW,phone,image"]]},
    {"band": "10m", "ranges": [[28000, 28300, "CW,RTTY,data"], [28300, 29700, "CW,phone,image"]]},
    {"band": "6m", "ranges": [[50000, 50100, "CW"], [50100, 54000, "all"]]},
    {"band": "2m", "ranges": [[144000, 144100, "CW"], [144100, 148000, "all"]]},
    {"band": "1.25m", "ranges": [[219000, 220000, "data"], [222000, 225000, "all"]], "note": "219-220 MHz only for fixed point-to-point digital message forwarding, 50 W PEP"},
    {"band": "70cm", "ranges": [[420000, 450000, "all"]], "note": "PR is Region 2: 420-450 MHz; 50 W PEP near listed military areas (97.313(f))"},
    {"band": "33cm", "ranges": [[902000, 928000, "all"]]},
    {"band": "23cm", "ranges": [[1240000, 1300000, "all"]]},
    {"band": "13cm", "ranges": [[2300000, 2310000, "all"], [2390000, 2450000, "all"]]},
    {"band": "5cm", "ranges": [[5650000, 5925000, "all"]]},
    {"band": "3cm", "ranges": [[10000000, 10500000, "all"]]},
    {"band": "1.2cm", "ranges": [[24000000, 24250000, "all"]]},
    {"band": "6mm", "ranges": [[47000000, 47200000, "all"]]},
    {"band": "4mm", "ranges": [[76000000, 81000000, "all"]]},
    {"band": "2.5mm", "ranges": [[122250000, 123000000, "all"]]},
    {"band": "2mm", "ranges": [[134000000, 141000000, "all"]]},
    {"band": "1mm", "ranges": [[241000000, 250000000, "all"]]}
   ],
   "notes": "No new grants since 2000; still renewable."
  },
  {
   "code": "E",
   "name": "Amateur Extra",
   "nameLocal": "Amateur Extra",
   "order": 4,
   "cept": "HAREC (T/R 61-01)",
   "issued": true,
   "legacy": false,
   "maxPowerW": 1500,
   "powerNote": "PEP output; 200 W PEP on 30m",
   "bands": [
    {"band": "2200m", "ranges": [[135.7, 137.8, "all"]], "note": "1 W EIRP, 1.5 kW PEP; prior UTC notification (97.303(g))"},
    {"band": "630m", "ranges": [[472, 479, "all"]], "note": "5 W EIRP (1 W in AK near Russia), 500 W PEP"},
    {"band": "160m", "ranges": [[1800, 2000, "all"]]},
    {"band": "80m", "ranges": [[3500, 3600, "CW,RTTY,data"]]},
    {"band": "75m", "ranges": [[3600, 4000, "CW,phone,image"]]},
    {"band": "60m", "ranges": [[5330.6, 5333.4, "CW,phone,RTTY,data"], [5346.6, 5349.4, "CW,phone,RTTY,data"], [5351.5, 5366.5, "CW,phone,RTTY,data"], [5371.6, 5374.4, "CW,phone,RTTY,data"], [5403.6, 5406.4, "CW,phone,RTTY,data"]], "note": "Channels centred 5332/5348/5373/5405 kHz at 100 W ERP; 5351.5-5366.5 kHz at 9.15 W ERP; max 2.8 kHz bandwidth (97.303(h), 97.313(i))"},
    {"band": "40m", "ranges": [[7000, 7125, "CW,RTTY,data"], [7125, 7300, "CW,phone,image"]], "note": "7075-7100 kHz is phone/image only for stations south of 20N (incl. Puerto Rico, USVI) or west of 130W (97.307(f)(11)); elsewhere in R2 it is CW/RTTY/data"},
    {"band": "30m", "ranges": [[10100, 10150, "CW,RTTY,data"]], "note": "200 W PEP output for every class (97.313(c)(1))"},
    {"band": "20m", "ranges": [[14000, 14150, "CW,RTTY,data"], [14150, 14350, "CW,phone,image"]]},
    {"band": "17m", "ranges": [[18068, 18110, "CW,RTTY,data"], [18110, 18168, "CW,phone,image"]]},
    {"band": "15m", "ranges": [[21000, 21200, "CW,RTTY,data"], [21200, 21450, "CW,phone,image"]]},
    {"band": "12m", "ranges": [[24890, 24930, "CW,RTTY,data"], [24930, 24990, "CW,phone,image"]]},
    {"band": "10m", "ranges": [[28000, 28300, "CW,RTTY,data"], [28300, 29700, "CW,phone,image"]]},
    {"band": "6m", "ranges": [[50000, 50100, "CW"], [50100, 54000, "all"]]},
    {"band": "2m", "ranges": [[144000, 144100, "CW"], [144100, 148000, "all"]]},
    {"band": "1.25m", "ranges": [[219000, 220000, "data"], [222000, 225000, "all"]], "note": "219-220 MHz only for fixed point-to-point digital message forwarding, 50 W PEP"},
    {"band": "70cm", "ranges": [[420000, 450000, "all"]], "note": "PR is Region 2: 420-450 MHz; 50 W PEP near listed military areas (97.313(f))"},
    {"band": "33cm", "ranges": [[902000, 928000, "all"]]},
    {"band": "23cm", "ranges": [[1240000, 1300000, "all"]]},
    {"band": "13cm", "ranges": [[2300000, 2310000, "all"], [2390000, 2450000, "all"]]},
    {"band": "5cm", "ranges": [[5650000, 5925000, "all"]]},
    {"band": "3cm", "ranges": [[10000000, 10500000, "all"]]},
    {"band": "1.2cm", "ranges": [[24000000, 24250000, "all"]]},
    {"band": "6mm", "ranges": [[47000000, 47200000, "all"]]},
    {"band": "4mm", "ranges": [[76000000, 81000000, "all"]]},
    {"band": "2.5mm", "ranges": [[122250000, 123000000, "all"]]},
    {"band": "2mm", "ranges": [[134000000, 141000000, "all"]]},
    {"band": "1mm", "ranges": [[241000000, 250000000, "all"]]}
   ],
   "notes": "All amateur frequencies."
  }
 ],
 "callsignInference": "Lower bound only. Group A (Extra-only) formats imply Extra; Group B implies Advanced or Extra; Group C implies Technician or higher; Group D gives no information. Contiguous US: 1x2 and 2x1 (K/N/W, two-letter A/K/N/W prefixes) and 2x2 with AA-AK prefix = Group A; 2x2 with K/N/W two-letter prefix = Group B; 1x3 = Group C; 2x3 = Group D. Puerto Rico (KP/NP/WP 3 or 4): 2x1 = A, KP#XX = B, NP#XX/WP#XX = C, KP#XXX/WP#XXX = D. Calls never change on upgrade, so current class can be higher than the group implies. Pre-1978 calls and club calls do not follow the scheme.",
 "asOf": "2026-10",
 "confidence": "high"
}
```

---

## Canada (VE) — ISED

### 1. Regulator and rules

- **Regulator:** Innovation, Science and Economic Development Canada (ISED), Spectrum Management. Certificates and call signs are handled by the Amateur Radio Service Centre. **[H]**
- **Rules:**
  - **RBR-4**, *Standards for the Operation of Radio Stations in the Amateur Radio Service*, Issue 3, July 2022: bands by qualification, bandwidths and power. It is binding through s.45 of the Radiocommunication Regulations. https://ised-isde.canada.ca/site/spectrum-management-telecommunications/en/licences-and-certificates/regulations-reference-rbr/rbr-4-standards-operation-radio-stations-amateur-radio-service **[H]**
  - **RIC-3**, *Information on the Amateur Radio Service*, Issue 5, March 2022: qualifications, privileges, legacy certificates, CEPT and IARP. https://ised-isde.canada.ca/site/spectrum-management-telecommunications/en/licences-and-certificates/radiocom-information-circulars-ric/ric-3-information-amateur-radio-service **[H]**
  - **RIC-9**, *Call Sign Policy*, Issue 2 (Provisional), Oct 2005. **[H]**
  - The pages still showed these issues when fetched on 2026-10-14. I found no newer issue and no open consultation on qualification structure. RAC reports a new Basic question bank (27 Jan 2025) and work on the Advanced bank, which are exam content only. **[M]**

### 2. Term

- English: **"qualification"**, as in an "Amateur Radio Operator Certificate with Basic Qualification". French: **"compétence"** (compétence de base, compétence de base reçue avec distinction, compétence en code Morse, compétence supérieure). **[H]**
- English UI word: **"Qualification"** or "Certificate Qualification". The levels are cumulative add-ons to one certificate, not exclusive classes.

### 3. Current levels

RBR-4 Schedule I codes are: **B** (Basic), **B/H** (Basic with Honours, ≥80%), **5** (Morse 5 wpm), **A** (Advanced). Every HF band row reads "**B and 5, B/H, B and A**". **[H]**

| Order | Effective level | Codes | CEPT | Issued? |
|---|---|---|---|---|
| 1 | Basic | B | none | Yes |
| 2 | Basic with Honours | B/H | none | Yes (by exam score ≥80%) |
| 2 | Basic + Morse | B + 5 | none | Yes (5 wpm Morse test) |
| 3 | Basic + Advanced (with or without Honours or Morse) | B + A | CEPT licence (T/R 61-01), but only if the call sign is on the certificate (RIC-3 §8.2.1) | Yes |

Notes:

- Operating authority needs Basic. Advanced (a 50-question exam) and Morse are add-ons. Exams may be taken in any order, but Advanced without Basic gives no operating privileges. **[H]**
- **Advanced alone gives HF** ("B and A"), even when the Basic score was below 80%. **[H]**
- T/R 61-01 Annex 4 Table 2 lists Canada's CEPT equivalent as "Amateur Radio Operator Certificate with Basic and Advanced Qualifications and call sign". **[H]** Canada is not in ECC Rec (05)06 (no CEPT-Novice mapping). **[H]**
- IARP (Inter-American permit): Class 1 = Basic + Morse **12 wpm**; Class 2 = Basic only (RIC-3). **[H]**

### 4. Legacy and grandfathered levels (RIC-3 §4.2–4.4)

- **Basic issued before 2 April 2002** (RIC-3 says "prior to April 1, 2002" in §4.3 and "prior to April 2, 2002" in §4.4) carries **Honours privileges** (HF). **[H]**
- The **Amateur Radio Operator's Certificate** and **Amateur Radio Operator's Advanced Certificate**, both issued under the repealed Radio Operator's Certificate Regulations, carry the privileges of Basic + Honours + Advanced. **[H]**
- The **Amateur Digital Radio Operator's Certificate** carries the privileges of Basic + Advanced. **[H]**
- Radiotelephone Operator's General Certificates (Aeronautical, Maritime or Land) can be authorized with Basic privileges. **[H]**
- The **Morse 12 wpm** qualification is older. It is equivalent to Morse 5 wpm for privileges and matters only for IARP Class 1. **[H]** (inferred from RIC-3 and RIC-9 references to "5 w.p.m., 12 w.p.m.")

### 5. Band privileges

Canada has **no sub-band or mode segmentation by qualification**. Each band is either all-or-nothing for a qualification, with a maximum bandwidth. Mode use within bands follows the voluntary RAC band plan. **[H]**

| Band | Range (kHz / MHz) | Max bandwidth | B | B/H, B+5, B+A |
|---|---|---|---|---|
| 2200 m | 135.7–137.8 kHz (1 W EIRP) | 100 Hz | — | yes |
| 630 m | 472–479 kHz (RR 5.80A EIRP) | 1 kHz | — | yes |
| 160 m | 1800–2000 | 6 kHz | — | yes |
| 80 m | 3500–4000 | 6 kHz | — | yes |
| 60 m | 5332, 5348, 5373, 5405 kHz centre + 5351.5–5366.5 kHz; **100 W PEP ERP**; J3E/J2D/J2B/A1A | 2.8 kHz | — | yes |
| 40 m | 7000–7300 | 6 kHz | — | yes |
| 30 m | 10100–10150 | **1 kHz** | — | yes |
| 20 m | 14000–14350 | 6 kHz | — | yes |
| 17 m | 18068–18168 | 6 kHz | — | yes |
| 15 m | 21000–21450 | 6 kHz | — | yes |
| 12 m | 24890–24990 | 6 kHz | — | yes |
| 10 m | 28000–29700 | 20 kHz | — | yes |
| 6 m | 50–54 MHz | 30 kHz | yes | yes |
| 2 m | 144–148 MHz | 30 kHz | yes | yes |
| 1.25 m | 219–220, 222–225 MHz (220–222 only in emergencies) | 100 kHz | yes | yes |
| 70 cm | **430–450 MHz** | 12 MHz | yes | yes |
| 33 cm | 902–928 MHz | 12 MHz | yes | yes |
| 23 cm and up | 1240–1300, 2300–2450, **3300–3500**, 5650–5925 MHz; 10.0–10.5, 24.0–24.25, 47.0–47.2, 76–81.5, 122.25–123, 134–141, 241–250 GHz | n/s | yes | yes |

Notes:

- On 60 m, Canada allows 100 W PEP ERP across the whole 15 kHz band, unlike the US limit of 9.15 W ERP. **[H]**
- RAC says 60 m needs Advanced or Honours; that is consistent with the "B and 5, B/H, B and A" rows. **[H]**

**Power (RBR-4 §10).** The limit depends only on Basic vs Advanced; Honours and Morse do not raise it. **[H]**

| Qualification | DC input to final | RF output, SSB | RF output, other emissions |
|---|---|---|---|
| Basic (incl. B/H, B+5) | 250 W | 560 W PEP | 190 W carrier |
| Advanced | 1000 W | 2250 W PEP | 750 W carrier |

An amplifier must not be capable of exceeding these limits by more than 3 dB (§10.1). **[H]**

**Other privileges (RIC-3 §4.5).** **[H]**

- **Basic:** may assemble commercial kits but not home-made transmitters. May reprogram radios by software only. May operate cross-band repeaters and use repeaters set up by Advanced holders. No remote control of fixed stations.
- **Advanced:** may build and operate transmitters and modify radios in hardware. May set up repeaters and club stations (club and repeater call signs need an Advanced holder, RIC-9 §1.5–1.6). May remote-control fixed stations, including over radio links. A repeater transmitting below 30 MHz also needs a Morse qualification (RIC-9 §1.6.2).
- **Retransmission:** signals may be automatically retransmitted below 29.5 MHz only if they come from a station whose operator is qualified for HF (RBR-4 §11).

**US visitors** may operate under the Basic + Advanced provisions, capped at their own FCC privileges (RBR-4 §3.2). They identify as "<FCC call>/VE3" etc. **[H]**

### 6. Can the qualification be inferred from the call sign?

**No.**

- The prefix shows only province or territory. VA1–VA7 and VE1–VE7 are both in use; VE8, VE9, VO1/VO2, VY0/VY1/VY2, and VE0 is for vessels (RIC-9 §1.2; RBR-4 Schedule V). **[H]**
- Two-letter suffixes need 5 years as a Basic holder in VE1–VE7 and VO1. In VE8, VE9, VY and VO2 they are freely available. Neither rule is tied to a qualification (RIC-9 §1.3.3). **[H]**
- Club calls always have three-letter suffixes and imply that an Advanced holder applied (RIC-9 §1.5). **[H]**
- The ISED callsign database lists qualifications per certificate. That is the only reliable source. **[M]**

### 7. Sources (Canada)

| URL | What it supported | Confidence |
|---|---|---|
| https://www.ic.gc.ca/eic/site/smt-gst.nsf/eng/sf10650.html (redirects to the ised-isde.canada.ca RBR-4 page; modified 2022-07-27) | Schedule I bands and qualifications; bandwidths; power §10; 60 m note C21; foreign equivalence §3.2; Schedule V prefixes | H |
| https://ised-isde.canada.ca/site/spectrum-management-telecommunications/sites/default/files/attachments/2022/RBR-4-i3-2022-07EN.pdf | PDF of RBR-4 Issue 3 (located, not separately parsed) | M |
| https://www.ic.gc.ca/eic/site/smt-gst.nsf/fra/sf10650.html (IPR-4) | French terminology (compétence de base / reçue avec distinction / code Morse / supérieure) | H |
| https://ic.gc.ca/eic/site/smt-gst.nsf/eng/sf01008.html (redirects to RIC-3 Issue 5) | Qualifications; legacy equivalences; pre-2002 Basic = Honours; privileges per qualification; CEPT and IARP | H |
| https://ised-isde.canada.ca/site/spectrum-management-telecommunications/en/licences-and-certificates/radiocom-information-circulars-ric/ric-9-call-sign-policy-and-special-event-prefixes | Call sign prefixes, two-letter suffix rule, club and repeater calls | H |
| https://docdb.cept.org/download/2ae38a89-e58a/TR6101.pdf | Canada CEPT equivalence (Basic + Advanced + call sign) | H |
| https://www.rac.ca/update-of-basic-amateur-radio-exam-ised/ ; https://www.rac.ca/60metres/ | 2025 question bank update; 60 m access (search summaries) | M |

**Not verified:**

- Whether ISED plans an RBR-4 Issue 4 or a qualification change. None was found.
- The exact Radiocommunication Regulations Schedule I list of repealed-certificate equivalences (RIC-3 points to it; I did not fetch it).

```json
{
 "entities": ["VE"],
 "regulator": "ISED",
 "rules": "RBR-4 Issue 3 (July 2022); RIC-3 Issue 5 (March 2022); Radiocommunication Regulations",
 "termLocal": "qualification (EN) / compétence (FR)",
 "termEnglish": "Qualification",
 "levels": [
  {
   "code": "B",
   "name": "Basic",
   "nameLocal": "Basic Qualification / compétence de base",
   "order": 1,
   "cept": "none",
   "issued": true,
   "legacy": false,
   "maxPowerW": 560,
   "powerNote": "250 W DC input to final, or 560 W PEP output (SSB) / 190 W carrier output (other emissions)",
   "bands": [
    {"band": "6m", "ranges": [[50000, 54000, "all"]], "note": "max bandwidth 30 kHz"},
    {"band": "2m", "ranges": [[144000, 148000, "all"]], "note": "max bandwidth 30 kHz"},
    {"band": "1.25m", "ranges": [[219000, 220000, "all"], [222000, 225000, "all"]], "note": "max bandwidth 100 kHz; 220-222 MHz only in exceptional (disaster) circumstances"},
    {"band": "70cm", "ranges": [[430000, 450000, "all"]], "note": "max bandwidth 12 MHz"},
    {"band": "33cm", "ranges": [[902000, 928000, "all"]], "note": "max bandwidth 12 MHz"},
    {"band": "23cm", "ranges": [[1240000, 1300000, "all"]]},
    {"band": "13cm", "ranges": [[2300000, 2450000, "all"]]},
    {"band": "9cm", "ranges": [[3300000, 3500000, "all"]]},
    {"band": "5cm", "ranges": [[5650000, 5925000, "all"]]},
    {"band": "3cm", "ranges": [[10000000, 10500000, "all"]]},
    {"band": "1.2cm", "ranges": [[24000000, 24250000, "all"]]},
    {"band": "6mm", "ranges": [[47000000, 47200000, "all"]]},
    {"band": "4mm", "ranges": [[76000000, 81500000, "all"]]},
    {"band": "2.5mm", "ranges": [[122250000, 123000000, "all"]]},
    {"band": "2mm", "ranges": [[134000000, 141000000, "all"]]},
    {"band": "1mm", "ranges": [[241000000, 250000000, "all"]]}
   ],
   "notes": "No access below 30 MHz. May assemble commercial kits but not build transmitters; no repeaters (except digital above 30 MHz), no remote control. Pass mark 70%."
  },
  {
   "code": "B/H",
   "name": "Basic with Honours",
   "nameLocal": "Basic Qualification with Honours / compétence de base reçue avec distinction",
   "order": 2,
   "cept": "none",
   "issued": true,
   "legacy": false,
   "maxPowerW": 560,
   "powerNote": "same as Basic",
   "bands": [
    {"band": "2200m", "ranges": [[135.7, 137.8, "all"]], "note": "max bandwidth 100 Hz; 1 W EIRP (RR 5.67A)"},
    {"band": "630m", "ranges": [[472, 479, "all"]], "note": "max bandwidth 1 kHz; 1 W EIRP, 5 W where >800 km from listed countries (RR 5.80A)"},
    {"band": "160m", "ranges": [[1800, 2000, "all"]], "note": "max bandwidth 6 kHz"},
    {"band": "80m", "ranges": [[3500, 4000, "all"]], "note": "max bandwidth 6 kHz"},
    {"band": "60m", "ranges": [[5330.6, 5333.4, "CW,phone,RTTY,data"], [5346.6, 5349.4, "CW,phone,RTTY,data"], [5351.5, 5366.5, "CW,phone,RTTY,data"], [5371.6, 5374.4, "CW,phone,RTTY,data"], [5403.6, 5406.4, "CW,phone,RTTY,data"]], "note": "Centre frequencies 5332/5348/5373/5405 kHz plus 5351.5-5366.5 kHz; 100 W PEP ERP; 2.8 kHz max; J3E, J2D, J2B, A1A only (CAN-18 / C21)"},
    {"band": "40m", "ranges": [[7000, 7300, "all"]], "note": "max bandwidth 6 kHz"},
    {"band": "30m", "ranges": [[10100, 10150, "all"]], "note": "max bandwidth 1 kHz (effectively CW/narrow data)"},
    {"band": "20m", "ranges": [[14000, 14350, "all"]], "note": "max bandwidth 6 kHz"},
    {"band": "17m", "ranges": [[18068, 18168, "all"]], "note": "max bandwidth 6 kHz"},
    {"band": "15m", "ranges": [[21000, 21450, "all"]], "note": "max bandwidth 6 kHz"},
    {"band": "12m", "ranges": [[24890, 24990, "all"]], "note": "max bandwidth 6 kHz"},
    {"band": "10m", "ranges": [[28000, 29700, "all"]], "note": "max bandwidth 20 kHz"},
    {"band": "6m", "ranges": [[50000, 54000, "all"]], "note": "max bandwidth 30 kHz"},
    {"band": "2m", "ranges": [[144000, 148000, "all"]], "note": "max bandwidth 30 kHz"},
    {"band": "1.25m", "ranges": [[219000, 220000, "all"], [222000, 225000, "all"]], "note": "max bandwidth 100 kHz; 220-222 MHz only in exceptional (disaster) circumstances"},
    {"band": "70cm", "ranges": [[430000, 450000, "all"]], "note": "max bandwidth 12 MHz"},
    {"band": "33cm", "ranges": [[902000, 928000, "all"]], "note": "max bandwidth 12 MHz"},
    {"band": "23cm", "ranges": [[1240000, 1300000, "all"]]},
    {"band": "13cm", "ranges": [[2300000, 2450000, "all"]]},
    {"band": "9cm", "ranges": [[3300000, 3500000, "all"]]},
    {"band": "5cm", "ranges": [[5650000, 5925000, "all"]]},
    {"band": "3cm", "ranges": [[10000000, 10500000, "all"]]},
    {"band": "1.2cm", "ranges": [[24000000, 24250000, "all"]]},
    {"band": "6mm", "ranges": [[47000000, 47200000, "all"]]},
    {"band": "4mm", "ranges": [[76000000, 81500000, "all"]]},
    {"band": "2.5mm", "ranges": [[122250000, 123000000, "all"]]},
    {"band": "2mm", "ranges": [[134000000, 141000000, "all"]]},
    {"band": "1mm", "ranges": [[241000000, 250000000, "all"]]}
   ],
   "notes": "Basic exam score >= 80%. Basic certificates issued before 2 April 2002 carry the same privileges. Same power and building limits as Basic."
  },
  {
   "code": "B+5",
   "name": "Basic + Morse (5 wpm)",
   "nameLocal": "Morse Code Qualification / compétence en code Morse",
   "order": 2,
   "cept": "none",
   "issued": true,
   "legacy": false,
   "maxPowerW": 560,
   "powerNote": "same as Basic",
   "bands": [
    {"band": "2200m", "ranges": [[135.7, 137.8, "all"]], "note": "max bandwidth 100 Hz; 1 W EIRP (RR 5.67A)"},
    {"band": "630m", "ranges": [[472, 479, "all"]], "note": "max bandwidth 1 kHz; 1 W EIRP, 5 W where >800 km from listed countries (RR 5.80A)"},
    {"band": "160m", "ranges": [[1800, 2000, "all"]], "note": "max bandwidth 6 kHz"},
    {"band": "80m", "ranges": [[3500, 4000, "all"]], "note": "max bandwidth 6 kHz"},
    {"band": "60m", "ranges": [[5330.6, 5333.4, "CW,phone,RTTY,data"], [5346.6, 5349.4, "CW,phone,RTTY,data"], [5351.5, 5366.5, "CW,phone,RTTY,data"], [5371.6, 5374.4, "CW,phone,RTTY,data"], [5403.6, 5406.4, "CW,phone,RTTY,data"]], "note": "Centre frequencies 5332/5348/5373/5405 kHz plus 5351.5-5366.5 kHz; 100 W PEP ERP; 2.8 kHz max; J3E, J2D, J2B, A1A only (CAN-18 / C21)"},
    {"band": "40m", "ranges": [[7000, 7300, "all"]], "note": "max bandwidth 6 kHz"},
    {"band": "30m", "ranges": [[10100, 10150, "all"]], "note": "max bandwidth 1 kHz (effectively CW/narrow data)"},
    {"band": "20m", "ranges": [[14000, 14350, "all"]], "note": "max bandwidth 6 kHz"},
    {"band": "17m", "ranges": [[18068, 18168, "all"]], "note": "max bandwidth 6 kHz"},
    {"band": "15m", "ranges": [[21000, 21450, "all"]], "note": "max bandwidth 6 kHz"},
    {"band": "12m", "ranges": [[24890, 24990, "all"]], "note": "max bandwidth 6 kHz"},
    {"band": "10m", "ranges": [[28000, 29700, "all"]], "note": "max bandwidth 20 kHz"},
    {"band": "6m", "ranges": [[50000, 54000, "all"]], "note": "max bandwidth 30 kHz"},
    {"band": "2m", "ranges": [[144000, 148000, "all"]], "note": "max bandwidth 30 kHz"},
    {"band": "1.25m", "ranges": [[219000, 220000, "all"], [222000, 225000, "all"]], "note": "max bandwidth 100 kHz; 220-222 MHz only in exceptional (disaster) circumstances"},
    {"band": "70cm", "ranges": [[430000, 450000, "all"]], "note": "max bandwidth 12 MHz"},
    {"band": "33cm", "ranges": [[902000, 928000, "all"]], "note": "max bandwidth 12 MHz"},
    {"band": "23cm", "ranges": [[1240000, 1300000, "all"]]},
    {"band": "13cm", "ranges": [[2300000, 2450000, "all"]]},
    {"band": "9cm", "ranges": [[3300000, 3500000, "all"]]},
    {"band": "5cm", "ranges": [[5650000, 5925000, "all"]]},
    {"band": "3cm", "ranges": [[10000000, 10500000, "all"]]},
    {"band": "1.2cm", "ranges": [[24000000, 24250000, "all"]]},
    {"band": "6mm", "ranges": [[47000000, 47200000, "all"]]},
    {"band": "4mm", "ranges": [[76000000, 81500000, "all"]]},
    {"band": "2.5mm", "ranges": [[122250000, 123000000, "all"]]},
    {"band": "2mm", "ranges": [[134000000, 141000000, "all"]]},
    {"band": "1mm", "ranges": [[241000000, 250000000, "all"]]}
   ],
   "notes": "Morse is an add-on to Basic; gives the same HF access as Honours. Older 12 wpm Morse qualification is legacy (affects IARP class only)."
  },
  {
   "code": "B+A",
   "name": "Basic + Advanced",
   "nameLocal": "Advanced Qualification / compétence supérieure",
   "order": 3,
   "cept": "HAREC (T/R 61-01)",
   "issued": true,
   "legacy": false,
   "maxPowerW": 2250,
   "powerNote": "1000 W DC input to final, or 2250 W PEP output (SSB) / 750 W carrier output (other emissions)",
   "bands": [
    {"band": "2200m", "ranges": [[135.7, 137.8, "all"]], "note": "max bandwidth 100 Hz; 1 W EIRP (RR 5.67A)"},
    {"band": "630m", "ranges": [[472, 479, "all"]], "note": "max bandwidth 1 kHz; 1 W EIRP, 5 W where >800 km from listed countries (RR 5.80A)"},
    {"band": "160m", "ranges": [[1800, 2000, "all"]], "note": "max bandwidth 6 kHz"},
    {"band": "80m", "ranges": [[3500, 4000, "all"]], "note": "max bandwidth 6 kHz"},
    {"band": "60m", "ranges": [[5330.6, 5333.4, "CW,phone,RTTY,data"], [5346.6, 5349.4, "CW,phone,RTTY,data"], [5351.5, 5366.5, "CW,phone,RTTY,data"], [5371.6, 5374.4, "CW,phone,RTTY,data"], [5403.6, 5406.4, "CW,phone,RTTY,data"]], "note": "Centre frequencies 5332/5348/5373/5405 kHz plus 5351.5-5366.5 kHz; 100 W PEP ERP; 2.8 kHz max; J3E, J2D, J2B, A1A only (CAN-18 / C21)"},
    {"band": "40m", "ranges": [[7000, 7300, "all"]], "note": "max bandwidth 6 kHz"},
    {"band": "30m", "ranges": [[10100, 10150, "all"]], "note": "max bandwidth 1 kHz (effectively CW/narrow data)"},
    {"band": "20m", "ranges": [[14000, 14350, "all"]], "note": "max bandwidth 6 kHz"},
    {"band": "17m", "ranges": [[18068, 18168, "all"]], "note": "max bandwidth 6 kHz"},
    {"band": "15m", "ranges": [[21000, 21450, "all"]], "note": "max bandwidth 6 kHz"},
    {"band": "12m", "ranges": [[24890, 24990, "all"]], "note": "max bandwidth 6 kHz"},
    {"band": "10m", "ranges": [[28000, 29700, "all"]], "note": "max bandwidth 20 kHz"},
    {"band": "6m", "ranges": [[50000, 54000, "all"]], "note": "max bandwidth 30 kHz"},
    {"band": "2m", "ranges": [[144000, 148000, "all"]], "note": "max bandwidth 30 kHz"},
    {"band": "1.25m", "ranges": [[219000, 220000, "all"], [222000, 225000, "all"]], "note": "max bandwidth 100 kHz; 220-222 MHz only in exceptional (disaster) circumstances"},
    {"band": "70cm", "ranges": [[430000, 450000, "all"]], "note": "max bandwidth 12 MHz"},
    {"band": "33cm", "ranges": [[902000, 928000, "all"]], "note": "max bandwidth 12 MHz"},
    {"band": "23cm", "ranges": [[1240000, 1300000, "all"]]},
    {"band": "13cm", "ranges": [[2300000, 2450000, "all"]]},
    {"band": "9cm", "ranges": [[3300000, 3500000, "all"]]},
    {"band": "5cm", "ranges": [[5650000, 5925000, "all"]]},
    {"band": "3cm", "ranges": [[10000000, 10500000, "all"]]},
    {"band": "1.2cm", "ranges": [[24000000, 24250000, "all"]]},
    {"band": "6mm", "ranges": [[47000000, 47200000, "all"]]},
    {"band": "4mm", "ranges": [[76000000, 81500000, "all"]]},
    {"band": "2.5mm", "ranges": [[122250000, 123000000, "all"]]},
    {"band": "2mm", "ranges": [[134000000, 141000000, "all"]]},
    {"band": "1mm", "ranges": [[241000000, 250000000, "all"]]}
   ],
   "notes": "Advanced gives HF even without Honours or Morse. May build transmitters, modify radios, set up repeaters and club stations, remote-control fixed stations. CEPT eligibility also needs the call sign shown on the certificate."
  }
 ],
 "callsignInference": "None. Canadian prefixes (VA/VE 1-7, VE8, VE9, VO1/VO2, VY0/VY1/VY2) indicate province/territory only; two-letter suffixes need 5 years of holding Basic, not a qualification. Club and repeater calls need an Advanced holder.",
 "asOf": "2026-10",
 "confidence": "high"
}
```

---

## Mexico (XE) — CRT (formerly IFT)

### 1. Regulator and rules

- **Regulator:** **Comisión Reguladora de Telecomunicaciones (CRT)**. The CRT replaced the Instituto Federal de Telecomunicaciones (IFT) under the **Ley en Materia de Telecomunicaciones y Radiodifusión** (DOF 16 July 2025), which repealed the 2014 Ley Federal de Telecomunicaciones y Radiodifusión (LFTR). ift.org.mx now carries CRT branding, and the CRT portal is https://portal.crt.gob.mx. **[H]** for the law (text fetched); **[M]** for the institutional handover details.
- **Current instruments:**
  1. **IFT-era concession** (2015–2025): "Concesión de espectro radioeléctrico para uso privado, con propósitos de radioaficionados" (LFTR art. 76 III b). The model title (Anexo I of IFT resolution P/IFT/061223/707, Dec 2023) grants "las bandas de frecuencias atribuidas en el CNAF al Servicio de Aficionados y/o al Servicio de Aficionados por Satélite", on a primary or secondary basis per the CNAF. It runs 5 years, renewable. **It defines no operator classes and no power limits.** **[H]**
  2. **2025 law:** amateur licences become a "Constancia de Registro" (art. 3 XX: "Las licencias de radioaficionados y las constancias de registro…"). The CRT is to issue guidelines for them. **[H]**
  3. **CRT draft "Lineamientos Generales para el otorgamiento y operación de las Constancias de Registro"**, consultation 30 Mar–24 Apr 2026 (now closed). It creates a single **"Licencia de Radioaficionado"**:
     - open to any nationality, and to minors aged 12–17 through a guardian;
     - technical capacity shown by courses, experience or formal studies, with **no class exam**;
     - holders may use all CNAF amateur bands (art. 25);
     - call sign zones XE1–XE5 on the mainland and XF1–XF3 for islands (art. 28);
     - existing concession holders may migrate;
     - licences run up to 10 years, renewable (art. 44).

     I found no DOF publication of the final text as of Oct 2026. **[H]** for the draft text; **[L]** for its current status.
  4. **CNAF** (Cuadro Nacional de Atribución de Frecuencias), last modified DOF 10 Sep 2024: band allocations and national notes. **[H]**
- **Legacy:** the "Reglamento para Instalar y Operar Estaciones Radioeléctricas del Servicio de Aficionados" (SCT, DOF 28 Nov 1988; annexes 8 Dec 1988). It defined classes of "certificado de aptitud". I found no explicit repeal. Its certificate-and-permit regime was replaced by IFT concessions from 2015 on: certificate holders migrated to concessions, and the IFT concession title mentions no class. **[H]** for the text (unofficial transcription on qsl.net); **[M]** for its status.

### 2. Term

- **Currently none.** There is one licence (concesión, later licencia) with no levels.
- Legacy local term: **"clase"** or **"categoría"** of the *certificado de aptitud*. English: "class".
- English UI: offer no level for Mexico, or a single "Amateur" value. A legacy class may be displayed but carries no current legal meaning.

### 3. Current levels

| Order | Name | CEPT | Issued? |
|---|---|---|---|
| 1 | Radioaficionado (single licence) | none (Mexico is not in T/R 61-01 or ECC (05)06) | Yes |

**[H]** for no classes in the concession title; **[H]** for Mexico absent from the CEPT annexes.

### 4. Legacy classes (1988 Reglamento, Art. 4 and Anexo B.2) — no longer issued

| Order | Class | Max power | Restrictions |
|---|---|---|---|
| 0 | Aficionado Restringido | 50 W mean A3E / 50 W PEP J3E; 45 W FM | 1-year non-renewable. Annex note: "exclusivamente" 7050–7100 and 144–148 MHz phone, 7000–7050 CW |
| 1 | Aficionado Novato | 150 W mean CW / 150 W PEP SSB; 45 W FM | 2-year non-renewable; one fixed station only |
| 2 | Aficionado Clase II | 500 W mean / PEP; 200 W above 144 MHz for image/fax modes | — |
| 3 | Aficionado Clase I | 1250 W mean / PEP; 500 W above 144 MHz for image/fax modes | — |

- **[M]**: the source is an unofficial HTML transcription.
- The asterisk in the annex marks both Novato and Restringido. It is unclear whether the band restriction covers Novato too. **[L]**
- The annex text says "7050 a 7100 MHz", an obvious typo for kHz.
- The per-class band list could not be read: the Anexo A table was garbled in the transcription.

### 5. Band privileges (any licence holder)

These come from the CNAF Mexican column. The PDF table is complex and I parsed it as text, so treat them as **[M]**.

| Band | Range (kHz / MHz) | Note |
|---|---|---|
| 2200 m | 135.7–137.8 | secondary; 1 W EIRP |
| 630 m | 472–479 | secondary |
| 160 m | 1800–2000 | 1850–2000 shared, no interference to radionavigation (MX29) |
| 80 m | 3500–4000 | 3750–4000 shared |
| 60 m | 5351.5–5366.5 | **20 W EIRP** (MX40A; RR 5.133B Mexico value) |
| 40 m | 7000–7300 | — |
| 30 m | 10100–10150 | secondary |
| 20 / 17 / 15 / 12 / 10 m | 14000–14350 / 18068–18168 / 21000–21450 / 24890–24990 / 28000–29700 | — |
| 6 m | 50–54 MHz | — |
| 2 m | 144–148 MHz | — |
| 1.25 m | 220–225 MHz | — |
| 70 cm | 430–440 MHz | secondary |
| 33 cm / 23 cm | 902–928 / 1240–1300 MHz | secondary |
| higher | 2400–2450 MHz, 10–10.5 GHz, 24–24.25 GHz, 76–81 GHz, 136–141 GHz, 241–250 GHz, etc. | per CNAF |

- No mode segments or power by level. The only power limits found are band-specific ones (60 m 20 W EIRP, 2200 m 1 W EIRP). The 1988 Class I cap (1250 W) is the only historical general limit; whether it still applies is unclear. **[L]**

### 6. Can the level be inferred from the call sign?

**No.** There are no current levels. Prefixes indicate region only: XE1/XE2/XE3 by state today, with XE4/XE5 and XF1–XF3 proposed in the CRT draft. **[H]** for the draft. I found no historical rule tying suffix length to the 1988 classes; any such convention is unverified. **[L]**

### 7. Sources (Mexico)

| URL | What it supported | Confidence |
|---|---|---|
| https://poderjudicialchiapas.gob.mx/storage/legislacion/PJE-1758823369.pdf | Text of the Ley en Materia de Telecomunicaciones y Radiodifusión (DOF 16-07-2025); art. 3 XX (amateur licences as Constancias de Registro); CRT definition | H (unofficial host of the official text) |
| https://sidof.segob.gob.mx/notas/docFuente/5763167 | DOF decree issuing the 2025 law (seen in search) | M |
| https://www.ift.org.mx/sites/default/files/conocenos/pleno/sesiones/acuerdoliga/pift061223707.pdf | IFT 2023 resolution with the model concession title (Anexo I): all CNAF amateur bands, no classes, 5-year term | H |
| https://www.ift.org.mx/sites/default/files/contenidogeneral/industria/tripticoconcaficionados.pdf | IFT applicant leaflet: concession for Mexican nationals, technical capacity by courses or experience | H |
| https://portal.crt.gob.mx/ConsultaPublica/Detalle/4 ; https://portal.crt.gob.mx/archivos-consulta-publica/33b8bd4e-916d-4835-b6c4-1f52e03455f4.pdf | CRT draft Lineamientos (2026): single Licencia de Radioaficionado, zones XE1–XE5/XF1–XF3, migration | H (draft) |
| https://alfadelta.org/2026/03/29/quieres-ser-un-radio-aficionado-aqui-el-como/ | Summary of the CRT draft (10-year term, confirmed in draft art. 44) | M |
| https://www.ift.org.mx/sites/default/files/contenidogeneral/espectro-radioelectrico/versionintegralcnaf-2024.pdf | CNAF 2024 amateur allocations; notes MX28, MX29, MX40A | M (table parsed from PDF text) |
| https://www.qsl.net/xe3jas/reglamento.htm | 1988 Reglamento text: classes (Art. 4), power and modes (Anexo B.2) | M |
| https://www.ift.org.mx/sites/default/files/industria/temasrelevantes/consultaspublicas/documentos/Olavo_Corona_Loubet.pdf ; https://www.ift.org.mx/sites/default/files/industria/temasrelevantes/consultaspublicas/documentos/Federacion_Mexicana_de_Radio_Experimentadores_%20AC.pdf | 2015 consultation comments: old classes; FMRE expectation that classes would move into the concession title (they did not) | M |
| https://www.elimparcial.com/mexico/2025/12/29/programa-de-radiofrecuencias-2026-crt-avala-nuevas-bandas-para-telecomunicaciones-y-radiodifusion/ | CRT operating as regulator (Dec 2025) | M |

**Not verified:**

- Whether the CRT Lineamientos were published in final form (the draft says up to 10 years; existing IFT concessions run 5 years).
- Whether the 1988 Reglamento's power table is still enforceable.
- The official DOF copy of the 1988 Reglamento.
- Individual concession titles: rpc.ift.org.mx did not resolve.
- Whether Mexico participates in the IARP.

```json
{
 "entities": ["XE"],
 "regulator": "CRT (Comisión Reguladora de Telecomunicaciones; successor of IFT)",
 "rules": "Ley en Materia de Telecomunicaciones y Radiodifusión (DOF 2025-07-16); IFT-era concession title model; CNAF (last modified DOF 2024-09-10); draft CRT Lineamientos de Constancias de Registro (consultation Mar-Apr 2026)",
 "termLocal": "none currently (legacy: clase / categoría del certificado de aptitud)",
 "termEnglish": "none (single licence)",
 "levels": [
  {
   "code": "XE",
   "name": "Amateur licence (single class)",
   "nameLocal": "Concesión de espectro para uso privado con propósitos de radioaficionado; Licencia de Radioaficionado (2025 law / CRT draft)",
   "order": 1,
   "cept": "none",
   "issued": true,
   "legacy": false,
   "maxPowerW": null,
   "powerNote": "No licence-level limit stated in the title; band-specific limits in the CNAF (e.g. 60m 20 W EIRP). Whether the 1988 Reglamento power table still binds is unclear.",
   "bands": [
    {"band": "2200m", "ranges": [[135.7, 137.8, "all"]], "note": "secondary; 1 W EIRP (RR 5.67A)"},
    {"band": "630m", "ranges": [[472, 479, "all"]], "note": "secondary (RR 5.80A)"},
    {"band": "160m", "ranges": [[1800, 2000, "all"]], "note": "1850-2000 kHz shared, must not interfere with radionavigation (MX29)"},
    {"band": "80m", "ranges": [[3500, 4000, "all"]]},
    {"band": "60m", "ranges": [[5351.5, 5366.5, "all"]], "note": "20 W EIRP (MX40A, RR 5.133B); no discrete channels found in CNAF"},
    {"band": "40m", "ranges": [[7000, 7300, "all"]]},
    {"band": "30m", "ranges": [[10100, 10150, "all"]], "note": "secondary"},
    {"band": "20m", "ranges": [[14000, 14350, "all"]]},
    {"band": "17m", "ranges": [[18068, 18168, "all"]]},
    {"band": "15m", "ranges": [[21000, 21450, "all"]]},
    {"band": "12m", "ranges": [[24890, 24990, "all"]]},
    {"band": "10m", "ranges": [[28000, 29700, "all"]]},
    {"band": "6m", "ranges": [[50000, 54000, "all"]]},
    {"band": "2m", "ranges": [[144000, 148000, "all"]]},
    {"band": "1.25m", "ranges": [[220000, 225000, "all"]]},
    {"band": "70cm", "ranges": [[430000, 440000, "all"]], "note": "secondary"},
    {"band": "33cm", "ranges": [[902000, 928000, "all"]], "note": "secondary"},
    {"band": "23cm", "ranges": [[1240000, 1300000, "all"]], "note": "secondary"}
   ],
   "notes": "Every holder may use all bands the CNAF allocates to the amateur and amateur-satellite services."
  },
  {
   "code": "R",
   "name": "Restricted (legacy)",
   "nameLocal": "Aficionado Restringido",
   "order": 0,
   "cept": "none",
   "issued": false,
   "legacy": true,
   "maxPowerW": 50,
   "powerNote": "50 W mean (A3E) / 50 W PEP (J3E); 45 W mean F3E",
   "bands": [
    {"band": "40m", "ranges": [[7000, 7050, "CW"], [7050, 7100, "phone"]]},
    {"band": "2m", "ranges": [[144000, 148000, "phone"]]}
   ],
   "notes": "1988 Reglamento; 1-year non-renewable certificate. Band note may also apply to Novato (asterisk ambiguous)."
  },
  {
   "code": "N",
   "name": "Novice (legacy)",
   "nameLocal": "Aficionado Novato",
   "order": 1,
   "cept": "none",
   "issued": false,
   "legacy": true,
   "maxPowerW": 150,
   "powerNote": "150 W mean CW / 150 W PEP SSB; 45 W mean FM",
   "bands": [],
   "notes": "1988 Reglamento; 2-year non-renewable certificate; fixed station only. Band list not verified."
  },
  {
   "code": "II",
   "name": "Class II (legacy)",
   "nameLocal": "Aficionado Clase II",
   "order": 2,
   "cept": "none",
   "issued": false,
   "legacy": true,
   "maxPowerW": 500,
   "powerNote": "500 W mean / PEP; 200 W above 144 MHz for image/fax modes",
   "bands": [],
   "notes": "1988 Reglamento."
  },
  {
   "code": "I",
   "name": "Class I (legacy)",
   "nameLocal": "Aficionado Clase I",
   "order": 3,
   "cept": "none",
   "issued": false,
   "legacy": true,
   "maxPowerW": 1250,
   "powerNote": "1250 W mean / PEP; 500 W above 144 MHz for image/fax modes",
   "bands": [],
   "notes": "1988 Reglamento."
  }
 ],
 "callsignInference": "None. No licence classes today. The CRT draft assigns XE1-XE5 by group of states and XF1-XF3 for islands; region only.",
 "asOf": "2026-10",
 "confidence": "medium"
}
```

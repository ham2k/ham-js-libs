# Licence levels: Western Europe (G/GM/GW/GI, EI, PA, ON, F, HB)

Research date: 2026-10-14. Scope: UK (England G, Scotland GM, Wales GW, Northern Ireland GI), Ireland (EI), Netherlands (PA), Belgium (ON), France (F), Switzerland (HB).

Conventions used in this file:

- Frequencies are in kHz in the JSON blocks. The prose tables use the units of the source document.
- Confidence: **high** means a primary source (regulator or official legal text) was fetched and read. **Medium** means a society or secondary source, or a primary source whose table layout had to be interpreted. **Low** means unverified or inferred.
- JSON range tuples follow the shape `[startKHz, endKHz, "modes"]`. Two optional extensions are used: a 4th element, the max power in W for that range when it differs from the level's `maxPowerW`, and a 5th element, a note on that power (for example "ERP" or "EIRP").
  - `modes` is one tag, or several joined with `|`, from: `all`, `CW`, `phone`, `image`, `data`, `RTTY`.
  - "all" means no level-tied mode restriction. National band plans (IARU R1) still apply, but they are not licence conditions.
- CEPT references:
  - **HAREC** means a national class listed as equivalent to the CEPT licence in T/R 61-01 (exam per T/R 61-02).
  - **Novice** means listed in ECC/REC/(05)06 Annex 2.
  - **Entry** means described by its regulator as ECC Report 89 equivalent. ECC Report 89 is a report, not a recognition instrument, so no reciprocal operating comes with it.

### CEPT cross-reference (primary, ECO documents fetched)

| Country | T/R 61-01 (HAREC) classes, Appendix II, ed. 4 Oct 2011 | ECC/REC/(05)06 Annex 2 (Novice), ed. 16 Jun 2023 |
|---|---|---|
| United Kingdom (M, MI…) | FULL | not listed (UK does not participate) |
| Ireland (EI, EJ) | CEPT 1 & CEPT 2 | not listed |
| Netherlands (PA) | A, C and F (old A/C, current F) | PD: **N** |
| Belgium (ON) | A | ON: **B** |
| France (F, TK, FG…) | 1 and 2 | not listed |
| Switzerland (HB9) | 1, 2, CEPT | HB3: **3** (Liechtenstein HB0Y: 3) |

Sources: T/R 61-01 ed. 2011, https://docdb.cept.org/download/2775. ECC/REC/(05)06 ed. 2023, https://docdb.cept.org/download/4372. I did not find a T/R 61-01 edition newer than 2011 on docdb; a 2016 amendment may exist but was not located.

---

## United Kingdom (G, GM, GW, GI): one section for all four entities

England, Scotland, Wales and Northern Ireland share one licence regime under Ofcom. The Crown Dependencies (GD, GJ, GU) are licensed by Ofcom on the same terms but are outside this scope. The entities differ only in the Regional Secondary Locator (RSL), and the RSL never encodes the licence class.

### 1. Regulator and rules

- **Regulator:** Ofcom (Office of Communications).
- **Instrument:** Amateur Radio Licence under the Wireless Telegraphy Act 2006. The terms are the licence itself plus the "Amateur Radio Wireless Telegraphy Licence Conditions Booklet OfW 611". Schedule 1 has Table A (Foundation), Table B (Intermediate) and Table C (Full, Full (Temporary Reciprocal) and Full (Club)).
- **Current version:** in force from 21 February 2024 (Ofcom General Notice of decision to vary amateur radio licences, Feb 2024).
- **Later phases:** Ofcom implemented Phases 2 and 3 of the review on 14 October 2025:
  - M8/M9 Intermediate call signs went live.
  - Licensees can change call sign once every 5 years.
  - Only a single personal licence may be held; the lower licence is revoked on progression.
  - Revalidation is required every 5 years.
  - Special event station (SES) rules were liberalised.
- **Key documents:**
  - General Notice of decision (Feb 2024), containing the full licence text and Schedule 1 tables: https://www.ofcom.org.uk/siteassets/resources/documents/manage-your-licence/amateur/general-notice-of-decision-to-vary-amateur-radio-licences. Ofcom returns 403 to scripts; I read the Wayback copy at https://web.archive.org/web/20240803103528/https://www.ofcom.org.uk/siteassets/resources/documents/manage-your-licence/amateur/general-notice-of-decision-to-vary-amateur-radio-licences?v=330960.
  - Statement "Updating the amateur radio licensing framework" (Dec 2023).
  - "Amateur radio guidance – Licensing guidance document" (v. Nov 2025).
  - "Implementing Phase 2 and 3 of the Amateur Review" (14 Oct 2025).

### 2. Term

- **Ofcom's term:** "licence class", printed on the licence face as "Licence class / Classe de licence / Lizenzklasse". Schedule 1 says "level of Licence" and the guidance uses "licence level".
- **English UI label:** **Licence Class**, or "Licence Level" for a neutral cross-country label.

### 3. Current levels (lowest to highest)

| Order | Official name | Code | CEPT | Issued? | Confidence |
|---|---|---|---|---|---|
| 1 | Foundation Licence | F | none (not in ECC/REC/(05)06; often cited as the model behind ECC Report 89, low) | yes | high |
| 2 | Intermediate Licence | I | none (UK not in ECC/REC/(05)06) | yes | high |
| 3 | Full Licence, Full (Club), Full (Temporary Reciprocal) | FULL | HAREC (T/R 61-01 "FULL") | Full yes. Full (Temporary Reciprocal) "will shortly be phased out" per the guidance (2025) | high |

### 4. Legacy and grandfathered classes

All legacy classes now hold Foundation, Intermediate or Full privileges. No distinct legacy privilege tier survives in the current licence.

- **Class A, Class B, Class A/B (M5) → Full.**
  - Class B (VHF-only, no Morse) call signs are G1, G4, G6, G7, G8, M1 (and some M0).
  - Class A/B was introduced 2 Aug 1999 with the M5 prefix.
  - Today's Ofcom call-sign table lists G0–G8, M0, M1 and M5 all as Full.
  - Confidence for the mapping is high (Ofcom table). The merger history is medium (OARC licence archive). The exact date Class B gained HF as "Full" is not verified; it was around 2003–2004 after Morse was dropped.
- **Novice A / Novice B (1991–2002, 2E0/2E1 and others) → Intermediate.** Medium (OARC archive): Intermediate replaced Novice around 2001–2002.
- **"2"-series Intermediate call signs (2#0xxx, 2#1xxx):** still valid. They must carry the RSL (for example 2E0, 2M0, 2W0, 2I0). Holders may switch to the reserved M8 (for 2#0) or M9 (for 2#1) equivalent. High.

### 5. Band privileges

All powers are **PEP** ("average power supplied to the antenna by a transmitter during one radio frequency cycle at the crest of the modulation envelope"). Exceptions are marked ERP or EIRP. Airborne use is permitted only where a 500 mW EIRP airborne limit is listed. The UK licence has **no level-tied mode restrictions**: all modes are open to all three levels, subject only to RR/encryption rules and the 5 MHz conditions. High confidence (Schedule 1, Feb 2024 notice).

| Band | Range | Foundation | Intermediate | Full |
|---|---|---|---|---|
| 2200m | 135.7–137.8 kHz | 1 W ERP | 1 W ERP | 1 W ERP |
| 630m | 472–479 kHz | — | — | 5 W EIRP |
| 160m | 1810–1850 kHz | 25 W | 100 W | 1000 W |
| 160m | 1850–2000 kHz | 25 W | 32 W | 32 W |
| 80m | 3500–3800 kHz | 25 W | 100 W | 1000 W |
| 60m | 11 channels 5258.5–5406.5 kHz* | — | — | 100 W, max 200 W EIRP |
| 40m | 7000–7200 kHz | 25 W | 100 W | 1000 W |
| 30m | 10100–10150 kHz** | 25 W | 100 W | 400 W |
| 20m | 14000–14350 kHz | 25 W | 100 W | 1000 W |
| 17m | 18068–18168 kHz | 25 W | 100 W | 1000 W |
| 15m | 21000–21450 kHz | 25 W | 100 W | 1000 W |
| 12m | 24890–24990 kHz | 25 W | 100 W | 1000 W |
| 10m | 28.0–29.7 MHz | 25 W | 100 W | 1000 W |
| 6m | 50–51 MHz | 25 W | 100 W | 1000 W |
| 6m | 51–52 MHz | 25 W | 100 W | 100 W |
| 4m | 70.0–70.5 MHz | 25 W | 100 W | 160 W |
| 2m | 144–146 MHz | 25 W | 100 W | 1000 W |
| 70cm | 430–432 MHz*** | 25 W ERP | 40 W ERP | 40 W ERP |
| 70cm | 432–440 MHz | 25 W | 100 W | 400 W |
| 23cm | 1240–1325 MHz | — | 100 W | 400 W |
| 13cm | 2310–2350, 2390–2400 MHz | — | 100 W | 400 W |
| 13cm | 2400–2450 MHz | 2 W | 100 W | 400 W |
| 9cm | 3400–3410 MHz | — | 100 W | 400 W |
| 6cm | 5650–5680, 5755–5765, 5820–5830 MHz | 2 W | 100 W | 400 W |
| 6cm | 5830–5850 MHz | — | 100 W | 400 W |
| 3cm | 10.000–10.125, 10.225–10.500 GHz | 1 W | 100 W | 400 W |
| 1.2cm | 24.00–24.05 GHz | — | 100 W | 1000 W |
| 1.2cm | 24.05–24.25 GHz (24.05–24.15 only with Ofcom written consent) | — | 100 W | 400 W |
| 6mm | 47.0–47.2 GHz | — | 100 W | 1000 W |
| 4mm | 75.5–81 GHz | — | 100 W | 1000 W (75.875–76.0, 77.5–78.0) / 400 W (rest) |
| 2.5mm | 122.25–123 GHz | — | 100 W | 400 W |
| 2mm | 134–141 GHz | — | 100 W | 1000 W (134–136) / 400 W (136–141) |
| 1mm | 241–250 GHz | — | 100 W | 1000 W (248–250) / 400 W (241–248) |

Table notes:

- \* **60m channels (kHz):** 5258.5–5264, 5276–5284, 5288.5–5292, 5298–5307, 5313–5323, 5333–5338, 5354–5358, 5362–5374.5, 5378–5382, 5395–5401.5, 5403.5–5406.5. Further conditions: DSB bandwidth ≤ 6 kHz, antenna ≤ 20 m AGL, and location reporting when portable.
- \*\* **30m:** Tables A and B print "10000 to 10150 kHz", but Table C prints 10.10–10.15 MHz. The UK allocation is 10100–10150 kHz, so the A/B text is almost certainly a typo (medium). Use 10100.
- \*\*\* **431–432 MHz** is not available within 100 km of Charing Cross, London.
- **Full NoV bands:** Full and Full (Club) licensees can also obtain 70.5–71.5 MHz and 146–147 MHz via a Notice of Variation; these are not in the standard licence (Statement §3.224, high). 40 MHz is available only via an Innovation and Trial licence, which is not an amateur licence.
- **Foundation:** may now build their own equipment and use internet remote control (2024 changes).

### 6. Call-sign inference

Ofcom states: "The call sign that we issue shows the level of the station." Each licence carries its own call sign, and the privileges follow the licence under which the call sign was issued. So for UK call signs **the prefix digit identifies the class of the licence being used**. High confidence (Ofcom guidance Table 1, Nov 2025).

| Prefix (after stripping the RSL) | Class |
|---|---|
| M3, M6, M7 (all "currently issuing") | Foundation |
| M8, M9 (from Oct 2025); 2#0, 2#1 (formerly issued, RSL mandatory) | Intermediate |
| G0–G8, M0, M1, M5 (all "currently issuing"; G2 and 2-letter suffixes only to previous holders) | Full |

RSLs (optional except on 2-series calls). For all licences: E (England), M (Scotland), W (Wales), I (Northern Ireland), D (Isle of Man), J (Jersey), U (Guernsey). For Full (Club) only: X, S, C, N, T, H, P. A call such as GM7ABC is therefore Foundation, and MW0ABC is Full. To parse a call:

- For 2-series calls, the RSL is the 2nd character (2E0ABC).
- For G/M calls with an RSL, it is the 2nd character (GM, MW, …).

Exceptions and caveats:

- **Special Contest Calls** (format G/M + digit + one letter, e.g. G8Z, M7R) are issued only to experienced Full licensees. Their digit does not follow the table, so do not infer the class from them.
- **GB special event calls**: no inference.
- **Full (Club) calls**: G/M + digit + 3 letters, which looks like a Full call. That is correct, since the class is Full.
- Until the single-licence rule took full effect (Oct 2025), a person could hold several licences, for example a Full call and an old M6. The privilege still follows the call in use.
- The "currently issuing M3/M6" and "G1–G8" entries mean old series are re-issuable, so the digit is not a reliable proxy for *when* someone was licensed.

### 7. Sources

- Ofcom General Notice of decision to vary licences (Feb 2024), Schedule 1 Tables A–C, licence conditions 13–24, definitions. Read via the Wayback copy above. Supports the band/power tables, PEP definition, RSL rules and 2-series RSL requirement. High.
- Ofcom Statement "Updating the amateur radio licensing framework" (Dec 2023), via Wayback: https://web.archive.org/web/2024/https://www.ofcom.org.uk/__data/assets/pdf_file/0037/272998/Statement-Updating-the-amateur-radio-licensing-framework.pdf. Supports M8/M9, single licence, NoV-only 70.5–71.5 and 146 MHz, and 40 MHz. High.
- Ofcom "Amateur radio guidance" (Nov 2025), https://www.ofcom.org.uk/siteassets/resources/documents/manage-your-licence/amateur/amateur_radio_licence_guidance_for_licensees.pdf (read via Wayback 20251117). Supports Table 1 call-sign formats, Table 2 RSLs, power summary, Temporary Reciprocal phase-out, and SCC format. High.
- Ofcom "Implementing Phase 2 and 3 of the Amateur Review" (14 Oct 2025), https://www.ofcom.org.uk/siteassets/resources/documents/manage-your-licence/amateur/amateur-radio-phase-2-and-3-review.pdf (Wayback 20251115). Supports M8/M9 live, 20→M8 / 21→M9 mapping, call-sign change every 5 years, and single licence. High.
- Ofcom sample licence (2024) for the "Licence class" field term: https://www.ofcom.org.uk/siteassets/resources/documents/manage-your-licence/amateur/amateur-radio---sample-licence (Wayback). High.
- OARC UK licence archive, https://wiki.oarc.uk/uk-licence-archive. Supports legacy class history (Class A/B, Novice 1991, M5 1999, Foundation 2001–02). Medium.
- **Not verified:** exact date and mechanism of Class B → Full conversion; whether any Novice holders remain unconverted; whether Ofcom has amended Schedule 1 since Feb 2024. The Nov 2025 guidance power table matches Feb 2024.

```json
{"entities":["G","GM","GW","GI"],"regulator":"Ofcom","termLocal":"licence class","termEnglish":"Licence Class","levels":[
{"code":"F","name":"Foundation","nameLocal":"Foundation Licence","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":25,"powerNote":"PEP (power supplied to antenna); exceptions noted per range","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all",1,"ERP"]]},
{"band":"160m","ranges":[[1810,2000,"all"]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"30m","ranges":[[10100,10150,"all"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,52000,"all"]]},
{"band":"4m","ranges":[[70000,70500,"all"]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430000,432000,"all",25,"ERP; 431-432 MHz excluded within 100 km of London"],[432000,440000,"all"]]},
{"band":"13cm","ranges":[[2400000,2450000,"all",2]]},
{"band":"6cm","ranges":[[5650000,5680000,"all",2],[5755000,5765000,"all",2],[5820000,5830000,"all",2]]},
{"band":"3cm","ranges":[[10000000,10125000,"all",1],[10225000,10500000,"all",1]]}],
"notes":"Call signs M3/M6/M7. 25 W PEP since 21 Feb 2024 (was 10 W). Schedule text prints 30m as 10000-10150 kHz (typo; UK allocation is 10100-10150). No 630m, 60m, 23cm."},
{"code":"I","name":"Intermediate","nameLocal":"Intermediate Licence","order":2,"cept":"none","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"PEP; exceptions noted per range","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all",1,"ERP"]]},
{"band":"160m","ranges":[[1810,1850,"all"],[1850,2000,"all",32]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"30m","ranges":[[10100,10150,"all"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,52000,"all"]]},
{"band":"4m","ranges":[[70000,70500,"all"]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430000,432000,"all",40,"ERP; 431-432 MHz excluded within 100 km of London"],[432000,440000,"all"]]},
{"band":"23cm","ranges":[[1240000,1325000,"all"]]},
{"band":"13cm","ranges":[[2310000,2350000,"all"],[2390000,2450000,"all"]]},
{"band":"9cm","ranges":[[3400000,3410000,"all"]]},
{"band":"6cm","ranges":[[5650000,5680000,"all"],[5755000,5765000,"all"],[5820000,5850000,"all"]]},
{"band":"3cm","ranges":[[10000000,10125000,"all"],[10225000,10500000,"all"]]},
{"band":"1.2cm","ranges":[[24000000,24250000,"all",100,"24.05-24.15 GHz only with Ofcom written consent"]]},
{"band":"6mm","ranges":[[47000000,47200000,"all"]]},
{"band":"4mm","ranges":[[75500000,81000000,"all"]]},
{"band":"2.5mm","ranges":[[122250000,123000000,"all"]]},
{"band":"2mm","ranges":[[134000000,141000000,"all"]]},
{"band":"1mm","ranges":[[241000000,250000000,"all"]]}],
"notes":"Call signs M8/M9 (since Oct 2025) or legacy 2#0/2#1 (RSL mandatory). 100 W PEP since Feb 2024 (was 50 W). No 630m or 60m."},
{"code":"FULL","name":"Full","nameLocal":"Full Licence","order":3,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":1000,"powerNote":"PEP; 1000 W only in primary bands, 400 W in most secondary bands; exceptions per range","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all",1,"ERP"]]},
{"band":"630m","ranges":[[472,479,"all",5,"EIRP"]]},
{"band":"160m","ranges":[[1810,1850,"all"],[1850,2000,"all",32]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"60m","ranges":[[5258.5,5264,"all",100,"max 200 W EIRP"],[5276,5284,"all",100,"max 200 W EIRP"],[5288.5,5292,"all",100,"max 200 W EIRP"],[5298,5307,"all",100,"max 200 W EIRP"],[5313,5323,"all",100,"max 200 W EIRP"],[5333,5338,"all",100,"max 200 W EIRP"],[5354,5358,"all",100,"max 200 W EIRP"],[5362,5374.5,"all",100,"max 200 W EIRP"],[5378,5382,"all",100,"max 200 W EIRP"],[5395,5401.5,"all",100,"max 200 W EIRP"],[5403.5,5406.5,"all",100,"max 200 W EIRP"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"30m","ranges":[[10100,10150,"all",400]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,51000,"all"],[51000,52000,"all",100]]},
{"band":"4m","ranges":[[70000,70500,"all",160]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430000,432000,"all",40,"ERP; 431-432 MHz excluded within 100 km of London"],[432000,440000,"all",400]]},
{"band":"23cm","ranges":[[1240000,1325000,"all",400]]},
{"band":"13cm","ranges":[[2310000,2350000,"all",400],[2390000,2450000,"all",400]]},
{"band":"9cm","ranges":[[3400000,3410000,"all",400]]},
{"band":"6cm","ranges":[[5650000,5680000,"all",400],[5755000,5765000,"all",400],[5820000,5850000,"all",400]]},
{"band":"3cm","ranges":[[10000000,10125000,"all",400],[10225000,10500000,"all",400]]},
{"band":"1.2cm","ranges":[[24000000,24050000,"all",1000],[24050000,24250000,"all",400,"24.05-24.15 GHz only with Ofcom written consent"]]},
{"band":"6mm","ranges":[[47000000,47200000,"all",1000]]},
{"band":"4mm","ranges":[[75500000,75875000,"all",400],[75875000,76000000,"all",1000],[76000000,77500000,"all",400],[77500000,78000000,"all",1000],[78000000,81000000,"all",400]]},
{"band":"2.5mm","ranges":[[122250000,123000000,"all",400]]},
{"band":"2mm","ranges":[[134000000,136000000,"all",1000],[136000000,141000000,"all",400]]},
{"band":"1mm","ranges":[[241000000,248000000,"all",400],[248000000,250000000,"all",1000]]}],
"notes":"Also Full (Club) and Full (Temporary Reciprocal, being phased out). 70.5-71.5 MHz and 146-147 MHz available only by NoV. Call signs G0-G8, M0, M1, M5."}],
"legacyMapping":{"Class A":"FULL","Class B":"FULL","Class A/B (M5)":"FULL","Novice A/B":"I"},
"callsignInference":"Strip the RSL (2nd char for G/M calls with a locator, e.g. GM/MW/GI/GW/GE; 2nd char for 2-series). M3/M6/M7 = Foundation; M8/M9 and 2x0/2x1 = Intermediate; G0-G8, M0, M1, M5 = Full. Reliable because privileges follow the licence the call sign belongs to. Exceptions: Special Contest Calls (G/M + digit + 1 letter, e.g. G8Z, M7R, Full-only), GB special-event calls, Full (Temporary Reciprocal).",
"asOf":"2026-10","confidence":"high"}
```

---

## Ireland (EI, EJ)

### 1. Regulator and rules

- **Regulator:** ComReg (Commission for Communications Regulation / An Coimisiún um Rialáil Cumarsáide).
- **Legal instrument:** Wireless Telegraphy (Amateur Station Licence) Regulations 2009, S.I. No. 192 of 2009.
- **Operating detail:** "Amateur Station Licence Guidelines", ComReg 09/45R6, dated 29 May 2023. Annex 1 has the permitted bands, bandwidths, powers and modes.
- **URLs:** guidelines at https://www.comreg.ie/media/2023/05/ComReg-0945R6.pdf (ComReg's firewall blocks scripts; read via Wayback 20240714). Licence page: https://www.comreg.ie/industry/radio-spectrum/licensing/search-licence-type/radio-amateurs-2/.

### 2. Term

ComReg uses "Licence Types" and "CEPT Class 1 Licence" / "CEPT Class 2 Licence". **English UI label:** Licence Class.

### 3. Current levels

| Order | Name | Code | CEPT | Issued? | Notes |
|---|---|---|---|---|---|
| 1 | CEPT Class 2 Licence | CEPT2 | HAREC (T/R 61-01 "CEPT 1 & CEPT 2") | yes | HAREC holder, **no** Morse evidence |
| 2 | CEPT Class 1 Licence | CEPT1 | HAREC | yes | HAREC holder **with** Morse evidence (5 wpm) |

- ComReg states that it "acknowledges the existence of one CEPT Examination … HAREC Standard and that all Amateur Station Licences granted by ComReg meet that standard." **The guidelines state that Annex 1's bands are available to both Class 1 and Class 2.** The two classes have identical operating privileges; the difference is only the Morse record and the call-sign format. High.
- There is **no novice, foundation or entry licence**. ComReg "does not recognise novice or intermediate licences" for visiting or reciprocal licences. High.
- No reform consultation was found. A 2012 Dáil answer recorded IRTS advising that a foundation licence was "not something of interest". Medium.

### 4. Legacy

Before the Morse requirement was dropped from T/R 61-01 (15 Sep 2003), Class 2 was VHF/UHF-only. T/R 61-01 footnote 10 says both classes now have "full access to HF". There is no current legacy tier with reduced privileges. High (T/R 61-01 ed. 2011, footnote 10).

### 5. Band privileges (identical for Class 1 and Class 2)

Power is PEP "measured at the output of the transmitter or R.F. Power Amplifier". Other limits:

- Mobile: max 17 dBW (50 W), and 14 dBW (25 W) on 70.125–70.450 MHz.
- Maritime mobile: 10 dBW (10 W).
- Islands within harbour areas: 17 dBW.

High confidence for all rows.

| Band | Range | Max power | Level-tied mode / other limits |
|---|---|---|---|
| 2200m | 135.7–137.8 kHz | 1 W EIRP | — |
| 630m | 472–479 kHz | 5 W EIRP | — |
| 160m | 1810–1850 kHz | 400 W | — |
| 160m | 1850–2000 kHz | 10 W | — |
| 80m | 3500–3800 kHz | 400 W | — |
| 60m | 5351.5–5366.5 kHz | 15 W EIRP | — |
| 60m | "5000–5500 kHz" spot frequencies 5280, 5300, 5332, 5348, 5400, 5405 kHz | 200 W | Emissions A1A, J3E, G1B only (CW, SSB, PM) |
| 40m | 7000–7200 kHz | 400 W | — |
| 30m | 10100–10130 kHz | 400 W | **Morse only** |
| 30m | 10130–10150 kHz | 400 W | Narrowband digital ≤ 500 Hz; no news bulletins; SSB only in emergencies |
| 20m–10m | 14000–14350, 18068–18168, 21000–21450, 24890–24990, 28000–29700 kHz | 400 W | — |
| 8m (40 MHz) | 30.000–49.000 MHz | 50 W | — |
| 6m | 50–52 MHz | 100 W | — |
| (5m) | 54.000–69.900 MHz | 50 W | — |
| 4m | 69.900–70.500 MHz | 50 W, fixed operation only (mobile 25 W) | — |
| 2m | 144–146 MHz | 400 W | — |
| 70cm | 430–432 MHz | 50 W | — |
| 70cm | 432–440 MHz | 400 W | — |
| 23cm | 1240–1300 MHz | 158 W | — |
| 13cm | 2300–2400 MHz | 158 W | 2400–2450 by separate application, 25 W, satellite only |
| 6cm | 5570–5850 MHz | 158 W | — |
| 3cm | 10000–10500 MHz (not 10270–10300) | 158 W | — |
| mm | 24000–24050, 47000–47200, 76000–81000, 134000–141000, 241000–250000 MHz | 50 W | — |

### 6. Call-sign inference

From ComReg 09/45R6 §4.9–4.10 (high confidence):

- **CEPT Class 1:** EI/EJ + digit 2–9 + 2 characters (one alphanumeric, then a letter), e.g. EI2xA.
- **CEPT Class 2:** EI/EJ + digit 2–9 + 3 characters, the last always **B**, e.g. EI2xxB.
- EJ is used for stations on offshore islands.

Inference is **reliable for distinguishing Class 1 from Class 2**, though it rarely matters since the privileges are identical. A call sign changes only when moving from Class 2 to Class 1, and it is otherwise lifetime. Club calls, special-event calls and visitor licences do not follow these patterns. Older legacy formats were not verified (medium).

### 7. Sources

- ComReg 09/45R6 (29 May 2023), via Wayback copy of https://www.comreg.ie/media/2023/05/ComReg-0945R6.pdf. Supports classes, the single HAREC exam, Annex 1 tables, call-sign formats and power measurement. High.
- ComReg Radio Amateurs licence page (fetched). Supports the licence types, the S.I. 192/2009 link, and the visiting-licence exclusion of novice/intermediate. High.
- T/R 61-01 ed. 2011, Appendix II and footnote 10. Supports CEPT equivalence and full HF access for Class 2. High.
- Oireachtas written answer 2012-06-21 (search snippet only; not fetched). Supports IRTS's view on a foundation licence. Low.

```json
{"entities":["EI"],"regulator":"ComReg","termLocal":"licence type / CEPT Class","termEnglish":"Licence Class","levels":[
{"code":"CEPT2","name":"CEPT Class 2","nameLocal":"CEPT Class 2 Licence","order":1,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":400,"powerNote":"PEP at transmitter/PA output; mobile max 50 W, maritime mobile 10 W","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all",1,"EIRP"]]},
{"band":"630m","ranges":[[472,479,"all",5,"EIRP"]]},
{"band":"160m","ranges":[[1810,1850,"all"],[1850,2000,"all",10]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"60m","ranges":[[5351.5,5366.5,"all",15,"EIRP"],[5280,5280,"CW|phone|data",200,"spot channel"],[5300,5300,"CW|phone|data",200,"spot channel"],[5332,5332,"CW|phone|data",200,"spot channel"],[5348,5348,"CW|phone|data",200,"spot channel"],[5400,5400,"CW|phone|data",200,"spot channel"],[5405,5405,"CW|phone|data",200,"spot channel"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"30m","ranges":[[10100,10130,"CW"],[10130,10150,"data|RTTY",400,"narrowband <=500 Hz; SSB emergencies only"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"8m","ranges":[[30000,49000,"all",50]]},
{"band":"6m","ranges":[[50000,52000,"all",100]]},
{"band":"5m","ranges":[[54000,69900,"all",50]]},
{"band":"4m","ranges":[[69900,70500,"all",50,"fixed operation; mobile 25 W"]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430000,432000,"all",50],[432000,440000,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all",158]]},
{"band":"13cm","ranges":[[2300000,2400000,"all",158]]},
{"band":"6cm","ranges":[[5570000,5850000,"all",158]]},
{"band":"3cm","ranges":[[10000000,10270000,"all",158],[10300000,10500000,"all",158]]},
{"band":"1.2cm","ranges":[[24000000,24050000,"all",50]]},
{"band":"6mm","ranges":[[47000000,47200000,"all",50]]},
{"band":"4mm","ranges":[[76000000,81000000,"all",50]]},
{"band":"2mm","ranges":[[134000000,141000000,"all",50]]},
{"band":"1mm","ranges":[[241000000,250000000,"all",50]]}],
"notes":"HAREC without Morse evidence. Privileges identical to Class 1."},
{"code":"CEPT1","name":"CEPT Class 1","nameLocal":"CEPT Class 1 Licence","order":2,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":400,"powerNote":"PEP at transmitter/PA output","bands":[{"band":"2200m","ranges":[[135.7,137.8,"all",1,"EIRP"]]},
{"band":"630m","ranges":[[472,479,"all",5,"EIRP"]]},
{"band":"160m","ranges":[[1810,1850,"all"],[1850,2000,"all",10]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"60m","ranges":[[5351.5,5366.5,"all",15,"EIRP"],[5280,5280,"CW|phone|data",200,"spot channel"],[5300,5300,"CW|phone|data",200,"spot channel"],[5332,5332,"CW|phone|data",200,"spot channel"],[5348,5348,"CW|phone|data",200,"spot channel"],[5400,5400,"CW|phone|data",200,"spot channel"],[5405,5405,"CW|phone|data",200,"spot channel"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"30m","ranges":[[10100,10130,"CW"],[10130,10150,"data|RTTY",400,"narrowband <=500 Hz; SSB emergencies only"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"8m","ranges":[[30000,49000,"all",50]]},
{"band":"6m","ranges":[[50000,52000,"all",100]]},
{"band":"5m","ranges":[[54000,69900,"all",50]]},
{"band":"4m","ranges":[[69900,70500,"all",50,"fixed operation; mobile 25 W"]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430000,432000,"all",50],[432000,440000,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all",158]]},
{"band":"13cm","ranges":[[2300000,2400000,"all",158]]},
{"band":"6cm","ranges":[[5570000,5850000,"all",158]]},
{"band":"3cm","ranges":[[10000000,10270000,"all",158],[10300000,10500000,"all",158]]},
{"band":"1.2cm","ranges":[[24000000,24050000,"all",50]]},
{"band":"6mm","ranges":[[47000000,47200000,"all",50]]},
{"band":"4mm","ranges":[[76000000,81000000,"all",50]]},
{"band":"2mm","ranges":[[134000000,141000000,"all",50]]},
{"band":"1mm","ranges":[[241000000,250000000,"all",50]]}],"notes":"HAREC plus Morse (5 wpm) evidence. Bands identical to CEPT2 (ComReg 09/45R6 A1.2)."}],
"callsignInference":"EI/EJ + digit 2-9 + 2-char suffix = Class 1; + 3-char suffix ending in 'B' = Class 2. Reliable, but privileges are identical so inference is cosmetic. EJ = offshore islands.",
"asOf":"2026-10","confidence":"high"}
```

---

## Netherlands (PA, and also PB, PD, PE, PH…)

### 1. Regulator and rules

- **Regulator:** Rijksinspectie Digitale Infrastructuur (RDI), formerly Agentschap Telecom, renamed 2023, part of the Ministry of Economic Affairs. Exams are run by CBR (RZAM-N and RZAM-F).
- **Instrument:** *Regeling gebruik van frequentieruimte met meldingsplicht 2015* (BWBR0036375), Article 4(2) and **Bijlage 1 "Radiozendamateurs"**. Consolidated text is "geldend van 20-06-2024 t/m heden", consulted 14-10-2026: https://wetten.overheid.nl/BWBR0036375/.
- **Underlying decree:** *Frequentiebesluit 2013* (BWBR0032895), Art. 3–5.
- **Licensing model:** since 2015 amateurs **register** (melding/registratie) rather than holding a licence. A licence (vergunning) is needed only for repeaters, beacons and higher power.

### 2. Term

- **Dutch term:** "categorie registratie" (registration category), "F-registratie" / "N-registratie". Older texts say "machtiging" or "vergunningsklasse".
- **English UI label:** Licence Class.

### 3. Current levels

| Order | Name | Code | CEPT | Issued? |
|---|---|---|---|---|
| 1 | N-registratie (beperkte toegang, "novice") | N | Novice (ECC/REC/(05)06 Annex 2: PD, N) | yes |
| 2 | F-registratie (volledige toegang, "full") | F | HAREC (T/R 61-01: "A, C and F") | yes |

Bijlage 1 footnote 1 defines F (full) and N (novice), and states that a foreign HAREC equals an F exam. High.

### 4. Legacy

- **Old machtiging classes A and C → F.** T/R 61-01 (2011) still lists "A, C and F", with footnote 14: "New licences will be granted as Full licence". Former class B and the novice classes are understood to map to F and N respectively. Low: the exact mapping of old B/D was not verified.
- **Rule change (2021):** the 2021 amendment (Stcrt. 2021, 31799) removed the minimum ages of 14 (F) and 12 (N). High.

### 5. Band privileges

Power is PEP: "het door de direct met de antenne-inrichting te koppelen trap … afgegeven gemiddeld vermogen … tijdens het maximum van de omhullende", i.e. output of the stage feeding the antenna. High.

| Band | Range (MHz) | F (W PEP) | N (W PEP) | Level-tied conditions |
|---|---|---|---|---|
| 2200m | 0.1357–0.1378 | 400 | — | Only A1A (CW) |
| 630m | 0.472–0.479 | 100 | — | Only A1A, F1A, G1A, J2A (CW/data); no contests |
| 160m | 1.81–1.85 | 400 | — | — |
| 160m | 1.85–1.88 | 400 | — | — |
| 80m | 3.5–3.8 | 400 | — | — |
| 60m | 5.3515–5.3665 | 15 EIRP | — | — |
| 40m | 7.0–7.2 | 400 | **100** | — |
| 30m | 10.1–10.15 | 400 | — | No contests; 10.14–10.15 bandwidth ≤ 500 Hz |
| 20m | 14.0–14.35 | 400 | **100** | — |
| 17m | 18.068–18.168 | 400 | — | — |
| 15m | 21.0–21.45 | 400 | — | — |
| 12m | 24.89–24.99 | 400 | — | — |
| 10m | 28.0–29.7 | 400 | **100** | — |
| 6m | 50.0–50.5 | 120 | — | — |
| 6m | 50.5–52.0 | 30 | — | No duplex |
| 4m | 70.0–70.5 | 50 | — | No duplex |
| 2m | 144–146 | 400 | **25** | — |
| 70cm | 430–440 | 400 | **25** | — |
| 23cm | 1240–1300 | 120 | — | — |
| 13cm | 2320–2400 | 120 | — | — |
| 13cm | 2400–2450 | 120 | — | Satellite (Earth-to-space) only |
| 9cm | 3400–3410 | 120 | — | — |
| 6cm | 5650–5850 | 120 | — | — |
| 3cm | 10000–10500 | 120 | — | — |
| mm | 24000–24250, 47000–47200, 75500–81500, 122250–123000, 134000–141000, 241000–250000 | 120 | — | — |

N therefore has **only 40m, 20m and 10m at 100 W, plus 2m and 70cm at 25 W**. High.

### 6. Call-sign inference

- ECC/REC/(05)06 Annex 2 lists the Netherlands novice prefix as **PD** (high).
- Per the RDI registration form, N-registrations get **PD** calls and F-registrations get prefixes in the **PA–PH** range other than PD: PA, PB, PE, PG, PH. Medium: this comes from the form, as summarised by search; I could not fetch it directly.
- The rule "PD = N, any other personal PA–PH = F" is reliable for current registrations. An N→F upgrade implies a new non-PD call (low; not verified in a primary text).
- PI is used for clubs, repeaters and beacons (low). PJ (Caribbean Netherlands) is separate and out of scope.

### 7. Sources

- wetten.overheid.nl BWBR0036375, Bijlage 1 (fetched; consolidated version in force since 20-06-2024). Supports the band/power/condition table, the F/N definitions and the PEP definition. High.
- ECC/REC/(05)06 ed. 2023 Annex 2 (PD, N), and T/R 61-01 ed. 2011 (A, C and F; footnote 14). High.
- Stcrt. 2021, 31799 (search snippet): age limits removed. Medium.
- government.nl and rdi.nl registration pages (fetched): registration model and exams via CBR. High.
- RDI form "Melden frequentieruimte Radiozendamateurs F of N" (only the search-tool summary was available; the direct fetch returned 404). Supports PD for N and PA–PH for F. Medium.
- **Not verified:** exact old-class conversion (A/B/C/D → F/N); whether an N→F upgrade forces a call change; any pending RDI reform. None was found.

```json
{"entities":["PA"],"regulator":"RDI (Rijksinspectie Digitale Infrastructuur)","termLocal":"categorie registratie (F-registratie / N-registratie)","termEnglish":"Licence Class","levels":[
{"code":"N","name":"Novice","nameLocal":"N-registratie (beperkte toegang)","order":1,"cept":"Novice","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"PEP output of final stage","bands":[
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"2m","ranges":[[144000,146000,"all",25]]},
{"band":"70cm","ranges":[[430000,440000,"all",25]]}],
"notes":"Call signs PD."},
{"code":"F","name":"Full","nameLocal":"F-registratie (volledige toegang)","order":2,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":400,"powerNote":"PEP output of final stage; 120 W on most VHF/UHF/SHF above 2m/70cm","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"CW",400]]},
{"band":"630m","ranges":[[472,479,"CW|data",100,"A1A, F1A, G1A, J2A only; no contests"]]},
{"band":"160m","ranges":[[1810,1880,"all"]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"60m","ranges":[[5351.5,5366.5,"all",15,"EIRP"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"30m","ranges":[[10100,10140,"all",400,"no contests"],[10140,10150,"all",400,"bandwidth <=500 Hz; no contests"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,50500,"all",120],[50500,52000,"all",30,"no duplex"]]},
{"band":"4m","ranges":[[70000,70500,"all",50,"no duplex"]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all",120]]},
{"band":"13cm","ranges":[[2320000,2400000,"all",120],[2400000,2450000,"all",120,"satellite uplink only"]]},
{"band":"9cm","ranges":[[3400000,3410000,"all",120]]},
{"band":"6cm","ranges":[[5650000,5850000,"all",120]]},
{"band":"3cm","ranges":[[10000000,10500000,"all",120]]},
{"band":"1.2cm","ranges":[[24000000,24250000,"all",120]]},
{"band":"6mm","ranges":[[47000000,47200000,"all",120]]},
{"band":"4mm","ranges":[[75500000,81500000,"all",120]]},
{"band":"2.5mm","ranges":[[122250000,123000000,"all",120]]},
{"band":"2mm","ranges":[[134000000,141000000,"all",120]]},
{"band":"1mm","ranges":[[241000000,250000000,"all",120]]}],
"notes":"Call signs PA, PB, PE, PG, PH (medium). Legacy machtiging A/C (and B) map here."}],
"legacyMapping":{"A":"F","B":"F (low)","C":"F","D/old novice":"N (low)"},
"callsignInference":"PD prefix = N (novice); other personal PA-PH prefixes = F. PD = N is in ECC/REC/(05)06 (high); the F series is medium. PI = clubs/repeaters.",
"asOf":"2026-10","confidence":"high"}
```

---

## Belgium (ON, plus OO–OT specials)

### 1. Regulator and rules

- **Regulator:** BIPT / IBPT (Belgian Institute for Postal Services and Telecommunications; FR Institut belge des services postaux et des télécommunications; NL Belgisch Instituut voor postdiensten en telecommunicatie).
- **Royal Decree:** Arrêté royal du 18 décembre 2009 relatif aux communications radioélectriques privées ("AR 2009"). It was amended by the AR of 14 December 2018, in force 1 Jan 2019, which created the three operator-certificate classes A, B and C.
- **Privileges:** *Décision du Conseil de l'IBPT du 24 mai 2019 concernant les fréquences, les puissances et les modes de transmission pouvant être utilisés par les radioamateurs*, Annex 2. URL: https://bipt.be/consumers/publication/decision-of-24th-may-2019-on-frequencies-capacities-and-transmission-modes-that-radio-amateurs-are-allowed-to-use.
- **Exams:** Décision du 19 janvier 2021.
- **Current extract:** BIPT "Frequency bands and technical characteristics authorised for radio amateurs (Extract from the BIPT Council Decision of 24 May 2019)", PDF dated 19 June 2025: https://www.bipt.be/file/cc73d96153bbd5448a56f19d925d05b1379c7f21/dd6ba0d4094625ded08277255de9ac1143f4976c/freq-en.pdf.
- **Pending reform:** consultation CONSULT-2024-B1 (27 Mar 2024) proposes replacing Annex 2 with effect from 1 Jan 2025. The main change is splitting 1240–1300 MHz per ITU-R M.2164 (WRC-23). It also restates all three class tables, unchanged elsewhere.
  - The June 2025 BIPT extract still shows the 2019 23 cm rows, so I could **not confirm that the 2024 draft was adopted**.
  - A separate decision of 29 Aug 2023 opened 40.66–40.69 MHz to class A (5 W ERP; A1A, F3E, J2D, J2B, J3E per UBA). It is missing from the 2025 extract. Medium.

### 2. Term

- **French:** "certificat d'opérateur de classe A/B/C" (the station needs a separate "autorisation de station").
- **Dutch:** "bedieningscertificaat van klasse A/B/C".
- **Before 2019:** "licence de base" (ON3) and "licence HAREC".
- **English UI label:** Licence Class (operator certificate class).

### 3. Current levels

| Order | Official | English | Code | CEPT | Issued? |
|---|---|---|---|---|---|
| 1 | Certificat d'opérateur de classe C (former "certificat/licence de base") | Entry / Basic | C (ON3) | Entry (ECC Report 89 per BIPT 2019 decision §7) | yes |
| 2 | Certificat d'opérateur de classe B (new 2019) | Novice | B (ON2) | Novice (ECC/REC/(05)06 Annex 2 "B") | yes |
| 3 | Certificat d'opérateur de classe A (former "certificat HAREC") | HAREC / Full | A (ON1, ON4–ON9) | HAREC (T/R 61-01 "A") | yes |

### 4. Legacy

- **Old licence C (pre-15 Sep 2005, ON2 calls).** The AM of 1 Sep 2005 replaced licence C (ON2) with the licence de base (ON3) and gave ON2 holders new ON3 calls. The BIPT decision of 26 Oct 2010 let ON3 holders who passed before 15 Sep 2005 (the old ON2 exam, CEPT-Novice compliant) re-apply for an ON2 call. High (primary decision fetched).
- **How old ON2 holders map since 2019.** Whether these legacy ON2 holders were converted to class B or remain class C is **not verified**.
  - The 2019 decision's "règle des 3 dB" and the ECC Annex 2 entry "B" suggest class B became the novice class going forward.
  - A legacy ON2 call is therefore ambiguous: it is either a pre-2005 novice re-issue or a post-2019 class B.
  - The UBA states that the class limits apply "indépendamment de l'indicatif d'appel utilisé", i.e. regardless of the call sign used.
- **ON1 historically:** a pre-2003 no-Morse / VHF class. It is now listed by UBA and BIPT among the class A prefixes. Medium.
- **Equipment rules (2019 decision §24–26):**
  - Class A/B holders may own equipment up to the class limit + 3 dB.
  - Class C holders may own equipment of max 100 W and **may not own or use external power amplifiers**.

### 5. Band privileges

The power column is "Maximum power authorised". The extract does not define it as PEP vs mean; it is presumed transmitter output. Low on the measurement basis; high on the values.

| Band | Range (MHz) | Class A | Class B | Class C |
|---|---|---|---|---|
| 2200m | 0.1357–0.1378 | 1 W ERP | — | — |
| 630m | 0.472–0.479 | 5 W EIRP | — | — |
| 630m | 0.501–0.504 | 5 W EIRP, A1A only, ≤ 100 Hz | — | — |
| 160m | 1.81–1.85 | 1500 W | 100 W | — |
| 160m | 1.85–2.00 | 150 W | 100 W | — |
| 80m | 3.5–3.8 | 1500 W | 100 W | 25 W |
| 60m | 5.3515–5.3665 | 15 W ERP | — | — |
| 40m | 7.0–7.2 | 1500 W | 100 W | 25 W |
| 30m | 10.1–10.15 | 1500 W | 100 W | 25 W |
| 20m | 14.0–14.35 | 1500 W | 100 W | 25 W |
| 17m | 18.068–18.168 | 1500 W | 100 W | — |
| 15m | 21.0–21.45 | 1500 W | 100 W | 25 W |
| 12m | 24.89–24.99 | 1500 W | 100 W | — |
| 10m | 28.0–29.7 | 1500 W | 100 W | 25 W |
| 8m | 40.66–40.69 (2023 decision; not in 2025 extract) | 5 W ERP | — | — |
| 6m | 50–52 | 200 W | 100 W | — |
| 4m | 69.950 (single channel, ≤ 10 kHz) | 10 W EIRP | — | — |
| 4m | 70.1125–70.4125 | 50 W | — | — |
| 2m | 144–146 | 1500 W | 50 W | 50 W |
| 70cm | 430–433.05 | 1500 W | 50 W | 50 W |
| 70cm | 433.05–434.79 | 200 W ((D)ATV 200 W EIRP) | 50 W | 50 W |
| 70cm | 434.79–440 | 1500 W | 50 W | 50 W |
| 23cm | 1240–1300 | 200 W (1270–1300 ATV 20 W ERP) | — | — |
| 13cm and up | 2300–2450, 5650–5850, 10000–10500, 24000–24250, 47000–47200, 75500–81000, 122250–123000, 142000–149000, 241000–250000 | 200 W | — | — |

Notes:

- **Level-tied modes:**
  - Class A: all emission classes.
  - **Classes B and C: all emission classes except ATV / D-ATV.**
- **2024 draft only (not confirmed adopted):**
  - Class A 23 cm becomes: 1255.76–1258 MHz (125 W EIRP/150 kHz wideband, or 50 W EIRP), 1260–1262 MHz (50 W EIRP, EME only), 1296–1298 MHz (50 W, ≤ 150 kHz), 1298–1300 MHz (150 W, ≤ 150 kHz).
  - Class B gains 1296–1300 MHz at 50 W, ≤ 150 kHz.

### 6. Call-sign inference

From the BIPT extract headers ("Class A (ON1, ON4, ON5, ON6, ON7, ON8, ON9)", "Class B (ON2)", "Class C (ON3)") and UBA:

| Call sign | Class | Reliability |
|---|---|---|
| ON3xxx | C | high |
| ON2xxx | B | medium: legacy ON2 re-issues to pre-2005 novices exist, mapping unverified |
| ON1, ON4–ON9 | A | high |
| ON0 | repeaters/beacons | — |
| OO, OP, OQ, OR, OS, OT | special event; "+1 letter" vanity calls | not inferable |

An upgrade from ON3 to ON2 or ON4+ normally means a new call, but this was not verified for 2019+ (low).

### 7. Sources

- BIPT freq-en.pdf (June 2025 extract of the 24 May 2019 decision; fetched). Supports the band, power and mode table and the prefixes per class. High.
- BIPT Council decision 24 May 2019 (FR PDF, fetched, §2–7, §15–26). Supports the AR 2009 / AR 2018 basis, A/B/C definitions, ECC Report 89 / (05)06 equivalence, 3 dB rule and class C amplifier ban. High.
- BIPT NL version of the decision (fetched). Supports the Dutch term "bedieningscertificaat van klasse A/B/C". High.
- BIPT consultation CONSULT-2024-B1 (27 Mar 2024), https://www.bipt.be/index.php/file/cc73d96153bbd5448a56f19d925d05b1379c7f21/0c75d2adbb9417ed6c285a8ced9e9c3b944b6452/consultation-ram-2024-03-27.pdf (fetched). Supports the pending 23 cm changes. High as a draft; adoption is unverified.
- BIPT decision 26 Oct 2010 (FR PDF, fetched). Supports the ON2/ON3 history. High.
- BIPT radioamateurs page (fetched). Supports the operator-certificate concept and links. High.
- UBA "Rules and regulations" (https://www.uba.be/en/visiting-belgium/rules-and-regulations) and "Fréquences & puissances" (https://www.uba.be/fr/info/frequences-puissances). Supports prefixes, the 40 MHz note and "regardless of the call sign used". Medium.
- **Not verified:** adoption of the 2024 23 cm amendment; class of pre-2005 legacy ON2 holders after 2019; the PEP-vs-mean basis of BIPT's power figures.

```json
{"entities":["ON"],"regulator":"BIPT/IBPT","termLocal":"certificat d'opérateur de classe A/B/C (FR); bedieningscertificaat van klasse A/B/C (NL)","termEnglish":"Licence Class","levels":[
{"code":"C","name":"Entry (Basic)","nameLocal":"Certificat d'opérateur de classe C (ex licence de base)","order":1,"cept":"Entry (ECC Report 89)","issued":true,"legacy":false,"maxPowerW":25,"powerNote":"Transmitter power (basis not stated); 50 W on 2m/70cm; equipment max 100 W, no external amplifiers","bands":[
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"30m","ranges":[[10100,10150,"all"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"2m","ranges":[[144000,146000,"all",50]]},
{"band":"70cm","ranges":[[430000,440000,"all",50]]}],
"notes":"All emission classes except ATV/D-ATV. Call sign ON3."},
{"code":"B","name":"Novice","nameLocal":"Certificat d'opérateur de classe B","order":2,"cept":"Novice","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"Transmitter power (basis not stated); 50 W on 2m/70cm","bands":[
{"band":"160m","ranges":[[1810,2000,"all"]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"30m","ranges":[[10100,10150,"all"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,52000,"all"]]},
{"band":"2m","ranges":[[144000,146000,"all",50]]},
{"band":"70cm","ranges":[[430000,440000,"all",50]]}],
"notes":"Created 2019. All emission classes except ATV/D-ATV. No 60m. Call sign ON2. 2024 draft would add 1296-1300 MHz 50 W."},
{"code":"A","name":"HAREC","nameLocal":"Certificat d'opérateur de classe A (ex certificat HAREC)","order":3,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":1500,"powerNote":"Transmitter power (basis not stated); exceptions per range","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all",1,"ERP"]]},
{"band":"630m","ranges":[[472,479,"all",5,"EIRP"],[501,504,"CW",5,"EIRP; <=100 Hz"]]},
{"band":"160m","ranges":[[1810,1850,"all"],[1850,2000,"all",150]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"60m","ranges":[[5351.5,5366.5,"all",15,"ERP"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"30m","ranges":[[10100,10150,"all"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"8m","ranges":[[40660,40690,"CW|phone|data",5,"ERP; 2023 decision, medium"]]},
{"band":"6m","ranges":[[50000,52000,"all",200]]},
{"band":"4m","ranges":[[69950,69950,"all",10,"EIRP; <=10 kHz"],[70112.5,70412.5,"all",50]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430000,433050,"all"],[433050,434790,"all",200,"(D)ATV 200 W EIRP"],[434790,440000,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all",200,"1270-1300 ATV 20 W ERP; 2024 draft would restrict to sub-bands"]]},
{"band":"13cm","ranges":[[2300000,2450000,"all",200]]},
{"band":"6cm","ranges":[[5650000,5850000,"all",200]]},
{"band":"3cm","ranges":[[10000000,10500000,"all",200]]},
{"band":"1.2cm","ranges":[[24000000,24250000,"all",200]]},
{"band":"6mm","ranges":[[47000000,47200000,"all",200]]},
{"band":"4mm","ranges":[[75500000,81000000,"all",200]]},
{"band":"2.5mm","ranges":[[122250000,123000000,"all",200]]},
{"band":"2mm","ranges":[[142000000,149000000,"all",200]]},
{"band":"1mm","ranges":[[241000000,250000000,"all",200]]}],
"notes":"Call signs ON1, ON4-ON9."}],
"legacyMapping":{"licence HAREC":"A","licence de base (ON3)":"C","old licence C / ON2 (pre-2005 exam, re-issued from 2010)":"unverified (B or C)","ON1 (old no-Morse)":"A"},
"callsignInference":"ON3 = C; ON2 = B (legacy pre-2005 ON2 re-issues are ambiguous); ON1, ON4-ON9 = A; ON0 = repeaters/beacons; OO-OT special/vanity = not inferable. The class limits apply regardless of the call sign used (UBA).",
"asOf":"2026-10","confidence":"high"}
```

---

## France (F)

### 1. Regulator and rules

- **Regulators:**
  - ANFR (Agence nationale des fréquences) runs exams and issues call signs.
  - ARCEP (Autorité de régulation des communications électroniques, des postes et de la distribution de la presse) sets the frequency/power conditions.
  - The Ministry (DGE) signs the arrêtés.
- **Certificates and call signs:** *Arrêté du 21 septembre 2000 modifié fixant les conditions d'obtention des certificats d'opérateur des services d'amateur et d'attribution et de retrait des indicatifs d'appel* (JORFTEXT000000401783). Key amendments: arrêté du 30 janvier 2009, arrêté du 23 avril 2012 (JORFTEXT000025825514), arrêté du 2 mars 2021.
- **Frequencies and powers:** *Décision ARCEP n° 2012-1241 du 2 octobre 2012 modifiée* (JORFTEXT000027144455), amended by n° 2013-1515 and **n° 2019-1412 du 24 septembre 2019**, which replaced the whole annex (homologated by arrêté du 5 février 2020, JORF 13 Feb 2020). URL: https://arcep.fr/uploads/tx_gsavis/19-1412.pdf.
- Légifrance blocks scripted access (Cloudflare), so the consolidated texts were not read directly. ANFR's "Cadre juridique" page lists 2019-1412 as the latest ARCEP amendment.

### 2. Term

- **French:** "classe de certificat d'opérateur (des services d'amateur)".
- **English UI label:** Licence Class (operator certificate class).

### 3. Current levels

| Order | Name | Code | CEPT | Issued? |
|---|---|---|---|---|
| 1 | Certificat d'opérateur classe 3 ("novice") | 3 | none (France not in ECC/REC/(05)06) | **no** (legacy only; no class 3 exam since 2012) |
| 2 | Certificat d'opérateur des services d'amateur (HAREC). Former classes 1 and 2 are merged in privileges. | HAREC (1/2) | HAREC (T/R 61-01 "1 and 2") | yes. Since 2012 a single exam (no Morse since 2012); ANFR states equivalence with HAREC |

**There is one issued level today.** ARCEP's table distinguishes only "classes de certificat d'opérateur autres que la classe 3" and "classe 3". High (ARCEP 2019-1412). The statement that no class 3 has been issued since 2012 comes from a preparation guide (medium); the ANFR call-sign page supports it (high).

### 4. Legacy

- **Classe 1** (with Morse, F5/F6/F8 and older F2/F3/F9) and **Classe 2** (without Morse, F1/F4) both now have identical "autres que la classe 3" privileges. High.
- **Classe 3** (novice, F0 calls) is grandfathered at **144–146 MHz only, 10 W PEP**. High. A secondary guide gives the modes as CW, AM, FM and SSB (medium).

### 5. Band privileges

Power is "puissance en crête maximale à la sortie de l'émetteur" (PEP at transmitter output, RR 1.157). The exception is EIRP at 135.7 kHz, 472 kHz and 60 m. There are **no level-tied mode restrictions** for the HAREC level.

| Band | Range (kHz / MHz) | HAREC (classes 1/2) | Classe 3 |
|---|---|---|---|
| 2200m | 135.7–137.8 kHz | 1 W EIRP | — |
| 630m | 472–479 kHz | 1 W EIRP | — |
| 160m | 1810–1850 kHz | 500 W | — |
| 80m | 3500–3800 kHz | 500 W | — |
| 60m | 5351.5–5366.5 kHz | 15 W EIRP | — |
| 40m | 7000–7200 kHz | 500 W | — |
| 30m | 10100–10150 kHz | 500 W | — |
| 20m | 14000–14350 kHz | 500 W | — |
| 17m | 18068–18168 kHz | 500 W | — |
| 15m | 21000–21450 kHz | 500 W | — |
| 12m | 24890–24990 kHz | 500 W | — |
| 10m | 28.0–29.7 MHz | 250 W | — |
| 6m | 50–52 MHz | 120 W | — |
| 2m | 144–146 MHz | 120 W | **10 W** |
| 70cm | 430–440 MHz | 120 W | — |
| 23cm | 1240–1300 MHz | 120 W | — |
| 13cm | 2300–2450 MHz | 120 W | — |
| 6cm | 5650–5850 MHz | 120 W | — |
| 3cm | 10.00–10.50 GHz | 120 W | — |
| mm | 24.00–24.25, 47.0–47.2, 76.0–81.5, 122.25–123, 134–141, 241–250 GHz | 120 W (see note) | — |

Notes:

- **Table rows that apply only to Region 2 overseas territories** are omitted: 1800–1810, 1850–2000, 3800–4000, 7200–7300 kHz, 52–54, 146–148, 220–225 MHz, 3.3–3.5 GHz and 5850–5925 MHz.
- **How the power spans were read** (medium):
  - The ARCEP table uses merged power cells. I mapped each cell to its rows from the PDF's text coordinates: 500 W spans 1.8–4 MHz and 7–25 MHz, 250 W covers only the 28 MHz row, and 120 W spans 50 MHz to 1300 MHz.
  - Rows from 2.3 GHz up sit on the next page with an empty power column. They are presumed to continue the 120 W cell (low).
  - A secondary source would help confirm 50 MHz and 144 MHz at 120 W.

### 6. Call-sign inference

From ANFR "Les indicatifs" (high confidence):

- Before April 2012, the digit indicated the class: **5, 6 or 8 = classe 1; 1 or 4 = classe 2; 0 = classe 3**.
- **Since April 2012 only the digit 4 is used** for new calls, until the stock runs out.

Practical rule:

- **F0 = classe 3 (legacy, 2m 10 W).**
- Any other F + digit = HAREC-level privileges. The class 1 vs class 2 distinction no longer affects privileges.

Reliability:

- Reliable for F0. A class 3 holder who upgraded normally received a new non-0 call (medium; not verified in the primary text).
- F4 is ambiguous between a pre-2012 classe 2 and a post-2012 HAREC licensee, but both have the same privileges.
- Special-event calls (TM, TO… prefixes) are not inferable.

### 7. Sources

- ARCEP Décision 2019-1412 (fetched PDF, annex = full replacement table). Supports bands, powers, the class 3 limits and the PEP definition. High for bands; medium for the power-cell spans.
- ANFR "Les indicatifs" (https://www.anfr.fr/gerer/radioamateurs/les-indicatifs, fetched). Supports digit-to-class history and digit 4 since April 2012. High.
- ANFR "Les certificats" (fetched). Supports HAREC equivalence and no Morse since 2012. High.
- ANFR "Cadre juridique" (fetched). Supports the legal texts list and 2019-1412 as the latest ARCEP amendment. High.
- T/R 61-01 ed. 2011 ("1 and 2"); ECC/REC/(05)06 (France absent). High.
- Secondary: radioamateur preparation guide (Feb 2020, via search snippet) for class 3 modes and "no class 3 since 2012". Medium.
- **Not verified:** the consolidated arrêté du 21 sept 2000 (Légifrance blocked); any ARCEP amendment after 2019 (e.g. a WRC-23 23 cm change); 120 W above 2.3 GHz.

```json
{"entities":["F"],"regulator":"ANFR (exams, call signs) / ARCEP (frequencies, powers)","termLocal":"classe de certificat d'opérateur","termEnglish":"Licence Class","levels":[
{"code":"3","name":"Novice (Classe 3)","nameLocal":"Certificat d'opérateur classe 3","order":1,"cept":"none","issued":false,"legacy":true,"maxPowerW":10,"powerNote":"PEP at transmitter output","bands":[
{"band":"2m","ranges":[[144000,146000,"all"]]}],
"notes":"Grandfathered; no class 3 exam since 2012. Call signs F0. Modes reportedly CW/AM/FM/SSB (medium)."},
{"code":"HAREC","name":"HAREC (Classes 1/2)","nameLocal":"Certificat d'opérateur des services d'amateur (ex classes 1 et 2)","order":2,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":500,"powerNote":"PEP at transmitter output; 250 W on 10m, 120 W from 50 MHz up (medium)","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all",1,"EIRP"]]},
{"band":"630m","ranges":[[472,479,"all",1,"EIRP"]]},
{"band":"160m","ranges":[[1810,1850,"all"]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"60m","ranges":[[5351.5,5366.5,"all",15,"EIRP"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"30m","ranges":[[10100,10150,"all"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all",250]]},
{"band":"6m","ranges":[[50000,52000,"all",120]]},
{"band":"2m","ranges":[[144000,146000,"all",120]]},
{"band":"70cm","ranges":[[430000,440000,"all",120]]},
{"band":"23cm","ranges":[[1240000,1300000,"all",120]]},
{"band":"13cm","ranges":[[2300000,2450000,"all",120,"power presumed (low)"]]},
{"band":"6cm","ranges":[[5650000,5850000,"all",120,"power presumed (low)"]]},
{"band":"3cm","ranges":[[10000000,10500000,"all",120,"power presumed (low)"]]},
{"band":"1.2cm","ranges":[[24000000,24250000,"all",120,"power presumed (low)"]]},
{"band":"6mm","ranges":[[47000000,47200000,"all",120,"power presumed (low)"]]},
{"band":"4mm","ranges":[[76000000,81500000,"all",120,"power presumed (low)"]]},
{"band":"2.5mm","ranges":[[122250000,123000000,"all",120,"power presumed (low)"]]},
{"band":"2mm","ranges":[[134000000,141000000,"all",120,"power presumed (low)"]]},
{"band":"1mm","ranges":[[241000000,250000000,"all",120,"power presumed (low)"]]}],
"notes":"Single issued level since 2012. Legacy classe 1 (F2/F3/F5/F6/F8/F9) and classe 2 (F1/F4) have identical privileges. New calls F4."}],
"legacyMapping":{"Classe 1":"HAREC","Classe 2":"HAREC","Classe 3":"3"},
"callsignInference":"F0 = classe 3 (legacy, 2m 10 W only). Any other F+digit = HAREC privileges. Pre-2012 digit history: 5/6/8 = classe 1, 1/4 = classe 2, 0 = classe 3. Only digit 4 issued since April 2012.",
"asOf":"2026-10","confidence":"high"}
```

---

## Switzerland (HB)

HB9 and HB3 are in scope. Liechtenstein (HB0) is a separate DXCC entity that uses Swiss law and Swiss call-sign series, but it is outside this scope.

### 1. Regulator and rules

- **Regulator:** OFCOM / BAKOM / OFCOM (Bundesamt für Kommunikation / Office fédéral de la communication / Ufficio federale delle comunicazioni).
- **Ordinances:**
  - *Verordnung über die Nutzung des Funkfrequenzspektrums* (VNF, SR 784.102.1), Art. 44–51.
  - *Verordnung des BAKOM über die Nutzung des Funkfrequenzspektrums* (VVNF, SR 784.102.11), Art. 6–7 and Annex 4 (frequency ranges per certificate).
  - Call signs: Art. 47f AEFV (SR 784.104).
- **Status:** VNF in force since **1 January 2021**. Its transitional provisions abolished the amateur **Konzession** ("verlieren die Konzessionen zur Teilnahme am Amateurfunkdienst … ihre Gültigkeit"). Existing call signs count as assigned, and earlier certificates remain valid.
- **Current documents:**
  - BAKOM "Hilfstabellen" (VVNF Art. 6 / Annex 4), status 27.10.2025: https://www.bakom.admin.ch/dam/de/sd-web/oW59XCrgOEpK/20251028_Hilfstabellen%20en.pdf.
  - BAKOM "Merkblatt Amateurfunkdienst", edition 30.09.2026: https://www.bakom.admin.ch/dam/de/sd-web/o7l5gAQXyfUB/Merkblatt%20Amateurfunk_DE.pdf.
  - VNF text (consolidation 2024-01-01): https://fedlex.data.admin.ch/filestore/fedlex.data.admin.ch/eli/cc/2020/1024/20240101/de/html/fedlex-data-admin-ch-eli-cc-2020-1024-20240101-de-html-6.html.

### 2. Term

- **German:** "Fähigkeitszeugnis" (certificate of competence). The Merkblatt says "Fähigkeitszeugnis CEPT (HB9)" and "Fähigkeitszeugnis Novice (HB3)", and the VNF says "Einsteigerausweis für Funkamateurinnen und Funkamateure".
- **French:** "certificat de capacité pour radioamateurs" / "certificat de radioamateur novice".
- **Legacy terms:** "Konzession" or "Lizenz" before 2021. BAKOM's English tables still say "full radio amateur licence (HB9)" and "NOVICE amateur radio licence (HB3)".
- **English UI label:** Licence Class.

### 3. Current levels

| Order | Official (VNF Art. 44(1)(a)) | English | Code | CEPT | Issued? |
|---|---|---|---|---|---|
| 1 | Ziff. 4 Einsteigerausweis für Funkamateurinnen und Funkamateure / certificat de radioamateur novice | Novice | HB3 | Novice (ECC/REC/(05)06 Annex 2: HB3, "3") | yes |
| 2 | Ziff. 1 Fähigkeitszeugnis für den Amateurfunk / certificat de capacité pour radioamateurs | Full (CEPT) | HB9 | HAREC (T/R 61-01 "1, 2, CEPT") | yes |

### 4. Legacy

- VNF Art. 44(1)(a) Ziff. 2 **Radiotelegrafistenausweis** and Ziff. 3 **Radiotelefonistenausweis für den Amateurfunk** are older certificates that remain valid. **Art. 45(1) gives Ziff. 1–3 identical full privileges.** All three map to HB9 Full. High.
- T/R 61-01 (2011) lists the old Swiss licence classes "1, 2" plus "CEPT", all HAREC-equivalent. Medium: the old class definitions were not fetched.
- The Merkblatt repeatedly says "HB9 … mit Zugang zu allen Amateurfunkbändern und Sendearten" when stating who may lead a club station. This hints that some HB9 holders once lacked full access, but under current VNF Art. 45 all Ziff. 1–3 holders have all bands. Low concern.

### 5. Band privileges

Power is **PEP transmitter output** ("Max. transmitter output, PEP"), with ERP or EIRP exceptions.

Level-tied modes (VNF Art. 45, high):

- Ziff. 1–3 (HB9): Morse telegraphy, radiotelephony, facsimile and **television**.
- **Ziff. 4 (HB3): Morse, radiotelephony and facsimile only, so no television (ATV).**

Digital modes are allowed generally if open, unencrypted and common (Merkblatt §1.8).

| Band | Range | HB9 (W PEP) | HB3 (W PEP) |
|---|---|---|---|
| 2200m | 135.7–137.8 kHz | 1 ERP | — |
| 630m | 472–479 kHz | 5 EIRP | — |
| 160m | 1810–2000 kHz | 1000 | 100 |
| 80m | 3500–3800 kHz | 1000 | 100 |
| 60m | 5351.5–5366.5 kHz | 15 EIRP | — |
| 40m | 7000–7200 kHz | 1000 | — |
| 30m | 10100–10150 kHz | 1000 | — |
| 20m | 14000–14350 kHz | 1000 | — |
| 17m | 18068–18168 kHz | 1000 | — |
| 15m | 21000–21450 kHz | 1000 | 100 |
| 12m | 24890–24990 kHz | 1000 | — |
| 10m | 28000–29700 kHz | 1000 | 100 |
| 6m | 50–52 MHz | 100 | — |
| 4m | 70.000–70.0375 and 70.1125–70.500 MHz | 25 ERP | — |
| 2m | 144–146 MHz | 1000 | 50 |
| 70cm | 430–440 MHz | 1000 | 50 |
| 23cm | 1240–1300 MHz (1240–1260 only after notification to OFCOM) | 1000 | — |
| 13cm | 2300–2450 MHz (> 20 W only after notification) | 100 | — |
| 6cm | 5650–5850 MHz | 100 | — |
| 3cm | 10000–10500 MHz | 100 | — |
| mm | 24.00–24.25, 47.0–47.2, 76.0–81.5, 122.25–123, 134–141, 241–250 GHz | 10 | — |

HB3 therefore has **160, 80, 15 and 10 m at 100 W, plus 2 m and 70 cm at 50 W**. It has no 40, 30, 20, 17, 12 or 6 m. High.

### 6. Call-sign inference

- Personal calls are assigned sequentially; no wishes are accepted, and an assigned call "cannot be changed" (Merkblatt §1.1.1).
- **HB3 + 3-letter suffix = Novice. HB9 + 3-letter suffix = Full.** HB9 + 2-letter suffix is reserved for clubs today, though old personal 2-letter HB9 calls exist (medium).
- HB1, HB2 and HB5–HB8 are club contest calls; HB4 is military-related clubs; other HB-prefixed calls are special events. These are not inferable.
- The HB3 vs HB9 rule is reliable: an HB3 holder who passes the full exam receives an HB9 call (medium; implied by the certificate-bound call series, not stated verbatim).

### 7. Sources

- BAKOM Hilfstabellen VVNF Art. 6, EN version 27.10.2025 (fetched PDF). Supports the full band/power table for HB9 and HB3 and the PEP basis. High.
- VNF (fedlex consolidation 2024-01-01, DE and FR, fetched). Supports Art. 44 certificate list, Art. 45 mode rights, and the 2021 abolition of Konzessionen. High.
- VVNF (lexaris mirror, status 1 Jan 2023). Supports Art. 6/7 and Annex 4 structure (Ziff. 1–3 vs Ziff. 4). Medium (mirror).
- BAKOM Merkblatt Amateurfunkdienst, edition 30.09.2026, DE and FR (fetched). Supports call-sign allocation, club/contest/special formats, CEPT T/R 61-01 for HB9 and ECC/REC/(05)06 for HB3, and terms. High.
- ECC/REC/(05)06 Annex 2 (HB3, "3"); T/R 61-01 ed. 2011 ("1, 2, CEPT"). High.
- **Not verified:** whether the VNF has a consolidation newer than 2024-01-01 affecting Art. 44–45 (the 2025–2026 BAKOM documents are consistent with it); the definitions of old Swiss classes 1/2.

```json
{"entities":["HB"],"regulator":"OFCOM/BAKOM","termLocal":"Fähigkeitszeugnis (DE) / certificat de capacité (FR); formerly Konzession","termEnglish":"Licence Class","levels":[
{"code":"HB3","name":"Novice","nameLocal":"Einsteigerausweis für Funkamateurinnen und Funkamateure (Fähigkeitszeugnis Novice)","order":1,"cept":"Novice","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"PEP transmitter output; 50 W on 2m/70cm","bands":[
{"band":"160m","ranges":[[1810,2000,"CW|phone|image|data"]]},
{"band":"80m","ranges":[[3500,3800,"CW|phone|image|data"]]},
{"band":"15m","ranges":[[21000,21450,"CW|phone|image|data"]]},
{"band":"10m","ranges":[[28000,29700,"CW|phone|image|data"]]},
{"band":"2m","ranges":[[144000,146000,"CW|phone|image|data",50]]},
{"band":"70cm","ranges":[[430000,440000,"CW|phone|image|data",50]]}],
"notes":"VNF Art. 45(2): Morse, radiotelephony, facsimile; no television (ATV). 'image' here means facsimile/SSTV only. Digital modes allowed per BAKOM Merkblatt 1.8."},
{"code":"HB9","name":"Full (CEPT)","nameLocal":"Fähigkeitszeugnis für den Amateurfunk (CEPT)","order":2,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":1000,"powerNote":"PEP transmitter output; exceptions per range","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all",1,"ERP"]]},
{"band":"630m","ranges":[[472,479,"all",5,"EIRP"]]},
{"band":"160m","ranges":[[1810,2000,"all"]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"60m","ranges":[[5351.5,5366.5,"all",15,"EIRP"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"30m","ranges":[[10100,10150,"all"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,52000,"all",100]]},
{"band":"4m","ranges":[[70000,70037.5,"all",25,"ERP"],[70112.5,70500,"all",25,"ERP"]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all",1000,"1240-1260 only after notification to OFCOM"]]},
{"band":"13cm","ranges":[[2300000,2450000,"all",100,">20 W only after notification to OFCOM"]]},
{"band":"6cm","ranges":[[5650000,5850000,"all",100]]},
{"band":"3cm","ranges":[[10000000,10500000,"all",100]]},
{"band":"1.2cm","ranges":[[24000000,24250000,"all",10]]},
{"band":"6mm","ranges":[[47000000,47200000,"all",10]]},
{"band":"4mm","ranges":[[76000000,81500000,"all",10]]},
{"band":"2.5mm","ranges":[[122250000,123000000,"all",10]]},
{"band":"2mm","ranges":[[134000000,141000000,"all",10]]},
{"band":"1mm","ranges":[[241000000,250000000,"all",10]]}],
"notes":"Also covers legacy Radiotelegrafistenausweis and Radiotelefonistenausweis für den Amateurfunk (VNF Art. 44(1)(a) Ziff. 2-3; same rights per Art. 45(1)). Old Konzession classes 1/2 map here."}],
"legacyMapping":{"Radiotelegrafistenausweis":"HB9","Radiotelefonistenausweis für den Amateurfunk":"HB9","Konzession Klasse 1/2/CEPT (pre-2021)":"HB9","Novice Konzession (pre-2021)":"HB3"},
"callsignInference":"HB3 + 3 letters = Novice; HB9 + 3 letters = Full. HB9 + 2 letters = clubs (some old personal). HB1/2/4-8 = club contest/military; other HB specials not inferable. Reliable: calls are certificate-bound and cannot be changed.",
"asOf":"2026-10","confidence":"high"}
```

---

## Open questions and unverified items (all sections)

1. **UK.**
   - The Tables A/B "10000 to 10150 kHz" text (presumed typo for 10100) should be confirmed against the latest OfW 611 booklet.
   - Ofcom.org.uk blocks scripted fetches, so everything was read through the Wayback Machine (snapshots dated 2024-08 and 2025-11).
2. **Belgium.**
   - It is unclear whether the 2024 draft (23 cm sub-banding; class B gaining 1296–1300 MHz) was adopted. BIPT's June 2025 extract still shows the 2019 values.
   - The privilege class of pre-2005 "old licence C" holders who were re-issued ON2 calls is unknown.
   - The 40 MHz (class A) 2023 decision was not read in primary form.
3. **France.**
   - The power-cell spans (250 W only on 10 m; 120 W from 50 MHz up; 120 W presumed above 2.3 GHz) were derived from PDF layout coordinates. They need a secondary confirmation, for example REF.
   - The consolidated arrêté du 21 sept 2000 was not readable (Légifrance blocked).
   - It is unknown whether any ARCEP amendment after 2019-1412 exists.
4. **Netherlands.**
   - The F call-sign series (PA/PB/PE/PG/PH) rests on a summarised RDI form (medium).
   - The old-class (A/B/C/D) conversion is unverified.
5. **Ireland.**
   - The "5000–5500 kHz, 200 W PEP, spot frequencies" row is reproduced as printed. It overlaps oddly with the WRC-15 5351.5–5366.5 kHz 15 W EIRP row; check with ComReg/IRTS before encoding.
6. **Switzerland.**
   - The latest VNF consolidation available via fedlex SPARQL was 2024-01-01. The BAKOM documents from 2025–2026 agree with it.
7. **CEPT.**
   - The newest T/R 61-01 Appendix II found was the 2011 edition. ECC/REC/(05)06 Annex 2 is the 2023 edition.

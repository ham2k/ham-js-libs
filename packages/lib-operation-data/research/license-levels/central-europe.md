# Amateur licence levels in Central Europe (DL, OE, OK, OM, SP, HA, S5, 9A)

As of 2026-10-14. Research for the Ham2K Logger "License Level" field.

Conventions:
- Frequencies are in kHz unless a column says otherwise. In the JSON blocks every frequency is in kHz.
- Power is stated as the rule states it: PEP, mean, output, ERP or EIRP. Where the rule only says "output power" without PEP/mean, that is said explicitly.
- Confidence: **high** means a primary source (gazette, consolidated law, regulator document) was fetched and read; **medium** means a society or secondary source, or a primary source whose interpretation needed judgement; **low** means unverified or inferred.
- Mode tags in JSON: `all`, `CW`, `phone`, `image`, `data`, `RTTY`. A range limited to several modes appears once per mode.
- JSON band objects may carry two optional fields beyond the requested shape: `maxPowerW` and `powerNote`, used where a band's limit differs from the level's overall maximum.

Summary of current levels (lowest to highest):

| Entity | Term (local / English) | Levels, low → high | Notes |
|---|---|---|---|
| DL Germany | Klasse (Zeugnisklasse) / Licence Class | N → E → A | N added 24 Jun 2024 |
| OE Austria | Bewilligungsklasse / Licence Class | 3 → 4 → 1 | Class 2 merged into 1 in 2004 |
| OK Czech Rep. | třída operátora / Operator Class | N → A | Rules unchanged since 2005 |
| OM Slovakia | trieda (operátorská trieda) / Operator Class | N → E | Classes N/E; per-class power not in the decree |
| SP Poland | kategoria pozwolenia / Licence Category | 3 → 1 | New regulation Dz.U. 2026 poz. 406; cat. 3 gained 30/17/12 m |
| HA Hungary | engedély fokozata / Licence Grade | Kezdő → CEPT Novice → CEPT | Kezdő only for <18 or ≥60 |
| S5 Slovenia | razred radioamaterja / Operator Class | N → A | Power is MEAN power |
| 9A Croatia | radioamaterski razred / Operator Class | P → A | |

---

## Germany

**Regulator:** Bundesnetzagentur (BNetzA).
**Rules:**
- Amateurfunkgesetz (AFuG) of 23 June 1997.
- Amateurfunkverordnung (AFuV) of 2005, as amended. The current Anlage 1 is the version published in BGBl. 2024 I Nr. 175, in force 24 June 2024. That amendment created Klasse N.
  - Index: https://www.gesetze-im-internet.de/afuv_2005/
  - Anlage 1: https://www.gesetze-im-internet.de/afuv_2005/anlage_1.html
- Rufzeichenplan (call-sign plan) Vfg. Nr. 15/2025, Amtsblatt 05/2025, valid from 01.04.2025.

**Term:**
- AFuV § 2 Nr. 2 calls the certificate grade "Zeugnisklasse". § 7(1) says the Amateurfunkzeugnisse are divided into "Klassen A, E und N".
- Common usage is "Klasse A/E/N", in English "licence class".
- UI word: **License Class**.

### Current levels (lowest → highest)

| Order | Code | Official name | English | CEPT equivalence | Issued |
|---|---|---|---|---|---|
| 1 | N | Amateurfunkzeugnis Klasse N | Class N (entry) | None. National class, not CEPT-recognised (DARC; alsor.de) | yes |
| 2 | E | Klasse E | Class E | CEPT Novice, ECC/REC (05)06 | yes |
| 3 | A | Klasse A | Class A (full) | CEPT licence (T/R 61-01) / HAREC (T/R 61-02) | yes |

Notes on the classes (high, AFuV § 4 and § 7, plus Wikipedia/DARC for the CEPT mapping):
- The classes build on each other. N → E and N/E → A need only a supplementary exam (Zusatzprüfung).
- A can be taken directly.

### Legacy / grandfathered classes

AFuV § 19 (high):
- Old **Klasse 3** certificates and licences are equivalent to **E**.
- **All other** previously issued certificates are equivalent to **A**. That covers Klasse 1 and Klasse 2, pre-1998 classes, and East German (DDR) classes.

Training call signs (Ausbildungsrufzeichen) DN1–DN8:
- These are not a licence class.
- No new DN1–DN8 calls since 24.06.2025. Existing ones stay valid until 31.12.2028 (§ 19(3); Rufzeichenplan Nr. 10).
- Per the plan, DN1–DN6 were tied to class A and DN7–DN8 to class E.

### Band privileges (AFuV Anlage 1, Teil A)

All A/E power figures are **PEP** unless marked ERP. Class N figures are **ERP**.

| Band | Range (kHz / MHz) | Status | Class A | Class E | Class N |
|---|---|---|---|---|---|
| 2200 m | 135.7–137.8 kHz | S | 1 W ERP | – | – |
| 630 m | 472–479 kHz | S | 1 W ERP | – | – |
| 160 m | 1810–1850 kHz | P | 750 W | 100 W | – |
| | 1850–1890 kHz | S | 75 W | 75 W | – |
| | 1890–2000 kHz | S | 10 W | 10 W | – |
| 80 m | 3500–3800 kHz | P | 750 W | 100 W | – |
| 60 m | 5351.5–5366.5 kHz | S | 9.14 W ERP | – | – |
| 40 m | 7000–7200 kHz | P | 750 W | – | – |
| 30 m | 10100–10150 kHz | S | 150 W | – | – |
| 20 m | 14000–14350 kHz | P | 750 W | – | – |
| 17 m | 18068–18168 kHz | P | 750 W | – | – |
| 15 m | 21000–21450 kHz | P | 750 W | 100 W | – |
| 12 m | 24890–24990 kHz | P | 750 W | – | – |
| 10 m | 28–29.7 MHz | P | 750 W | 100 W | 10 W ERP |
| 6 m | 50.0–50.4 MHz | S | 750 W | – | – |
| | 50.4–52.0 MHz | S | 25 W | – | – |
| 4 m | – | – | – | – | – |
| 2 m | 144–146 MHz | P | 750 W | 75 W | 6.1 W ERP |
| 70 cm | 430–440 MHz | P | 750 W | 75 W | 6.1 W ERP |
| 23 cm | 1240–1300 MHz | S | 750 W | 75 W | – |
| 13 cm | 2320–2450 MHz | S | 75 W | 5 W | – |
| 9 cm | 3400–3475 MHz | S | 75 W | 5 W | – |
| 6 cm | 5650–5850 MHz | S | 75 W | 5 W | – |
| 3 cm | 10.0–10.5 GHz | S | 75 W | 5 W | – |
| 1.2 cm | 24.0–24.25 GHz | P/S | 75 W | 5 W | – |
| 6 mm | 47.0–47.2 GHz | P | 75 W | 5 W | – |
| 4 mm | 76–81 GHz | S | 75 W | 5 W | – |
| 2.5 mm | 122.25–123 GHz | S | 75 W | 5 W | – |
| 2 mm | 134–141 GHz | P/S | 75 W | 5 W | – |
| 1 mm | 241–250 GHz | S/P | 75 W | 5 W | – |
| > 275 GHz | 444–453, 510–546 GHz … | – | per BNetzA Amtsblatt | – | – |

**Mode restrictions:** none are tied to class. Anlage 1 Teil B limits occupied bandwidth instead, the same for every class (high):
- 800 Hz on 2200 m, 630 m and 30 m. This rules out SSB phone there; CW and narrow data only.
- 2.7 kHz on 160 m to 12 m and on 60 m.
- 7 kHz below 29 MHz and 40 kHz above 29 MHz on 10 m.
- 40 kHz on 2 m.
- 12 kHz on 6 m.
- 2 MHz on 70 cm, or 7 MHz for AM TV.

The IARU band plan is not legally binding in DL.

**Special conditions (high):**
- 160 m, 1850–2000 kHz on weekends: A may run 750 W PEP and E 100 W PEP, and contests are allowed. On weekdays contests are prohibited in 1850–2000 kHz and on 30 m (note 10 and note 15).
- 6 m: fixed stations only, horizontal polarisation only, no interference to wind-profiler radars (note 5).
- 23 cm, 1247–1263 MHz: 3.05 W ERP cap (note 11).
- 2200 m: the operating site must be notified to BNetzA (note 2).

### Call-sign inference

Source: Rufzeichenplan Vfg. 15/2025 (high). Personal-call series (PZ) per class:

| Class | Personal series |
|---|---|
| A | DA1, DA2, DB1–DB9, DC0–DC9, DD0–DD9, DF1–DF9, DG0–DG9, DH0–DH9, DJ0–DJ9, DK1–DK9, DL1–DL9, DM1–DM9 |
| E | DO1–DO9, DA6 |
| N | DN9 |

Other series:
- Club stations: A on DA0, DF0, DK0, DL0 and others; E on DA7 and DO0 (closing out); N on DA8 and DP8.
- Training calls: DN1–DN8 (closing out).
- Short-term foreign licences: "DL/" prefix means A, "DO/" means E.

Reliability: **good for N and E** (DN9 means N; DO and DA6 mean E). A call in an A series implies A.

Caveat (low): the plan ties a series to a class at assignment time. Whether an E holder who upgrades to A may keep a DO call was not confirmed. If they may, then "DO" is only a lower bound. The app should let the user override.

```json
{"entities":["DL"],"regulator":"BNetzA (Bundesnetzagentur)","termLocal":"Klasse (Zeugnisklasse)","termEnglish":"License Class","levels":[
{"code":"N","name":"Class N","nameLocal":"Klasse N","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":10,"powerNote":"10 W ERP on 10 m; 6.1 W ERP on 2 m and 70 cm","bands":[
{"band":"10m","ranges":[[28000,29700,"all"]],"maxPowerW":10,"powerNote":"ERP"},
{"band":"2m","ranges":[[144000,146000,"all"]],"maxPowerW":6.1,"powerNote":"ERP"},
{"band":"70cm","ranges":[[430000,440000,"all"]],"maxPowerW":6.1,"powerNote":"ERP"}],"notes":"Introduced by AFuV amendment in force 24 Jun 2024. Not CEPT-recognised. Personal calls DN9xx."},
{"code":"E","name":"Class E","nameLocal":"Klasse E","order":2,"cept":"Novice","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"PEP. 100 W HF, 75 W 2m/70cm/23cm, 5 W >=2.3 GHz","bands":[
{"band":"160m","ranges":[[1810,1850,"all"],[1850,1890,"all"],[1890,2000,"all"]],"maxPowerW":100,"powerNote":"100 W PEP 1810-1850; 75 W 1850-1890; 10 W 1890-2000 on weekdays; 100 W PEP 1850-2000 at weekends"},
{"band":"80m","ranges":[[3500,3800,"all"]],"maxPowerW":100},
{"band":"15m","ranges":[[21000,21450,"all"]],"maxPowerW":100},
{"band":"10m","ranges":[[28000,29700,"all"]],"maxPowerW":100},
{"band":"2m","ranges":[[144000,146000,"all"]],"maxPowerW":75},
{"band":"70cm","ranges":[[430000,440000,"all"]],"maxPowerW":75},
{"band":"23cm","ranges":[[1240000,1300000,"all"]],"maxPowerW":75,"powerNote":"3.05 W ERP in 1247-1263 MHz"},
{"band":"13cm","ranges":[[2320000,2450000,"all"]],"maxPowerW":5},
{"band":"9cm","ranges":[[3400000,3475000,"all"]],"maxPowerW":5},
{"band":"6cm","ranges":[[5650000,5850000,"all"]],"maxPowerW":5},
{"band":"3cm","ranges":[[10000000,10500000,"all"]],"maxPowerW":5},
{"band":"1.25cm","ranges":[[24000000,24250000,"all"]],"maxPowerW":5},
{"band":"6mm","ranges":[[47000000,47200000,"all"]],"maxPowerW":5},
{"band":"4mm","ranges":[[76000000,81000000,"all"]],"maxPowerW":5},
{"band":"2.5mm","ranges":[[122250000,123000000,"all"]],"maxPowerW":5},
{"band":"2mm","ranges":[[134000000,141000000,"all"]],"maxPowerW":5},
{"band":"1mm","ranges":[[241000000,250000000,"all"]],"maxPowerW":5}],"notes":"Legacy Klasse 3 = E (AFuV §19). Personal calls DO1-DO9, DA6."},
{"code":"A","name":"Class A","nameLocal":"Klasse A","order":3,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":750,"powerNote":"PEP; 75 W PEP >=2.3 GHz; ERP limits on LF/MF/60m","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"CW"],[135.7,137.8,"data"]],"maxPowerW":1,"powerNote":"1 W ERP; 800 Hz max bandwidth; site notification"},
{"band":"630m","ranges":[[472,479,"CW"],[472,479,"data"]],"maxPowerW":1,"powerNote":"1 W ERP; 800 Hz max bandwidth"},
{"band":"160m","ranges":[[1810,1850,"all"],[1850,1890,"all"],[1890,2000,"all"]],"maxPowerW":750,"powerNote":"750 W 1810-1850; 75 W 1850-1890; 10 W 1890-2000 on weekdays; 750 W 1850-2000 at weekends"},
{"band":"80m","ranges":[[3500,3800,"all"]],"maxPowerW":750},
{"band":"60m","ranges":[[5351.5,5366.5,"all"]],"maxPowerW":9.14,"powerNote":"9.14 W ERP (15 W EIRP); 2.7 kHz bandwidth"},
{"band":"40m","ranges":[[7000,7200,"all"]],"maxPowerW":750},
{"band":"30m","ranges":[[10100,10150,"CW"],[10100,10150,"data"]],"maxPowerW":150,"powerNote":"800 Hz max bandwidth; no contests"},
{"band":"20m","ranges":[[14000,14350,"all"]],"maxPowerW":750},
{"band":"17m","ranges":[[18068,18168,"all"]],"maxPowerW":750},
{"band":"15m","ranges":[[21000,21450,"all"]],"maxPowerW":750},
{"band":"12m","ranges":[[24890,24990,"all"]],"maxPowerW":750},
{"band":"10m","ranges":[[28000,29700,"all"]],"maxPowerW":750},
{"band":"6m","ranges":[[50000,50400,"all"],[50400,52000,"all"]],"maxPowerW":750,"powerNote":"750 W PEP 50.0-50.4 MHz; 25 W PEP 50.4-52 MHz; fixed stations, horizontal polarisation only"},
{"band":"2m","ranges":[[144000,146000,"all"]],"maxPowerW":750},
{"band":"70cm","ranges":[[430000,440000,"all"]],"maxPowerW":750},
{"band":"23cm","ranges":[[1240000,1300000,"all"]],"maxPowerW":750,"powerNote":"3.05 W ERP in 1247-1263 MHz"},
{"band":"13cm","ranges":[[2320000,2450000,"all"]],"maxPowerW":75},
{"band":"9cm","ranges":[[3400000,3475000,"all"]],"maxPowerW":75},
{"band":"6cm","ranges":[[5650000,5850000,"all"]],"maxPowerW":75},
{"band":"3cm","ranges":[[10000000,10500000,"all"]],"maxPowerW":75},
{"band":"1.25cm","ranges":[[24000000,24250000,"all"]],"maxPowerW":75},
{"band":"6mm","ranges":[[47000000,47200000,"all"]],"maxPowerW":75},
{"band":"4mm","ranges":[[76000000,81000000,"all"]],"maxPowerW":75},
{"band":"2.5mm","ranges":[[122250000,123000000,"all"]],"maxPowerW":75},
{"band":"2mm","ranges":[[134000000,141000000,"all"]],"maxPowerW":75},
{"band":"1mm","ranges":[[241000000,250000000,"all"]],"maxPowerW":75}],"notes":"Legacy Klasse 1, Klasse 2 and all other pre-2005 classes (incl. DDR) = A (AFuV §19)."}],
"callsignInference":"Rufzeichenplan Vfg 15/2025: DN9 = N; DO1-DO9 and DA6 = E; DA1, DA2, DB1-9, DC, DD, DF1-9, DG, DH, DJ, DK1-9, DL1-9, DM1-9 = A. DN1-DN8 are expiring training calls (valid to 2028-12-31). Club and repeater series (DA0, DF0, DK0, DL0, DB0, DM0, DO0, DA7, DA8, DP*, DR*) are not personal. Reliable for issue-time class; upgrade retention not verified.","asOf":"2026-10","confidence":"high"}
```

---

## Austria

**Regulator:**
- Fernmeldebehörde. Licences are issued by the **Fernmeldebüros**.
- The responsible ministry is currently the Bundesministerium für Finanzen; BGBl. II 61/2023 was signed by the Finance Minister.

**Rules:**
- Amateurfunkgesetz 1998 (AFG), BGBl. I Nr. 25/1999.
- Amateurfunkverordnung (AFV), BGBl. II Nr. 126/1999, last amended BGBl. II Nr. 61/2023. It sets the classes (§ 8) and the power levels (§ 9).
  - RIS consolidated text, Fassung 14.10.2026: https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10012930
- Since 13 March 2023 the band and power table is **Anlage 4 of the Frequenznutzungsverordnung 2013 (FNV)**, BGBl. II Nr. 63/2014, as amended by BGBl. II Nr. 61/2023.
  - https://ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2023_II_61/BGBLA_2023_II_61.pdf
  - BGBl. II 61/2023 Art. 3 repealed AFV Anlage 2.

**Term:**
- **"Bewilligungsklasse"** (licence class). The exam is the "Prüfungskategorie", and power tiers are "Leistungsstufe A–D".
- UI word: **License Class**.

### Current levels (lowest → highest)

| Order | Code | Official name | English | CEPT | Issued |
|---|---|---|---|---|---|
| 1 | 3 | Bewilligungsklasse 3 | Class 3 (national entry, VHF/UHF) | None. Valid only in Austria (AFV § 26(3)) | yes |
| 2 | 4 | Bewilligungsklasse 4 | Class 4 (Novice) | CEPT Novice, ECC/REC (05)06 (AFV § 3(3)) | yes |
| 3 | 1 | Bewilligungsklasse 1 | Class 1 (full) | CEPT licence T/R 61-01 / HAREC (AFV § 3(3), § 27) | yes |

Equipment rule (AFV § 8):
- Classes 3 and 4 may use **only commercially built, unmodified transmitters**. No home-built equipment.
- Classes 3 and 4 may operate only at Leistungsstufe A.

### Legacy (AFV § 46, § 47; high)

- Licences issued before the AFG (1999) = Class 1.
- Old **Klasse 2** (issued before BGBl. II 455/2003) = Class 1.
- Old "Sendeklassen A–D" = Leistungsstufen A–D.

### Power

- AFV § 9 (high) defines the Leistungsstufen, all PEP:
  - A: 100 W.
  - B: 200 W.
  - C: 400 W, on application after 1 year at B without interference at that site.
  - D: 1000 W, clubs and organisations only.
  - Tolerance is +20%.
- Classes 3 and 4 are fixed at **Leistungsstufe A = 100 W PEP**.
- FNV Anlage 4 note (high):
  - In bands not marked "High Power", the maximum is 100 W or 200 W PEP depending on the class.
  - In "High Power" bands, Class 1 holders and club stations may apply for 1000 W PEP after at least 1 year of interference-free operation at that site.
  - The ÖVSV summary says this covers 80, 40, 20, 17, 15, 12 and 10 m.

### Band privileges (FNV Anlage 4, 2023; ÖVSV summary for the power cells)

| Band | Range | Status | Class 1 | Class 4 | Class 3 |
|---|---|---|---|---|---|
| 2200 m | 135.7–137.8 kHz | S | 1 W ERP | – | – |
| 630 m | 472–479 kHz | S | 1 W EIRP | – | – |
| 160 m | 1810–1850 kHz | P | 200 W | 100 W | – |
| | 1850–2000 kHz | S | 100 W | 100 W | – |
| 80 m | 3500–3800 kHz | P | per licence; HP up to 1 kW | 100 W | – |
| 60 m | 5351.5–5366.5 kHz | S | 15 W EIRP | – | – |
| 40 m | 7000–7200 kHz | P | per licence; HP up to 1 kW | – | – |
| 30 m | 10100–10150 kHz | S | 200 W | – | – |
| 20 m | 14000–14350 kHz | P | per licence; HP up to 1 kW | – | – |
| 17 m | 18068–18168 kHz | P | per licence; HP up to 1 kW | – | – |
| 15 m | 21000–21450 kHz | P | per licence; HP up to 1 kW | 100 W | – |
| 12 m | 24890–24990 kHz | P | per licence; HP up to 1 kW | – | – |
| 10 m | 28.0–29.7 MHz | P | per licence; HP up to 1 kW | 100 W | – |
| 6 m | 50.0–50.5 MHz | P | 200 W | – | – |
| | 50.5–52.0 MHz | S | 200 W | – | – |
| | 52–54 MHz | S | 100 W (R&D projects, ≤2 MHz bandwidth, temporary) | – | – |
| 2 m | 144–146 MHz | P | 200 W (1 kW EME/MS with ≥15 dBd antenna) | 100 W | 100 W |
| 70 cm | 430–439.1 MHz | P | 200 W (1 kW EME/MS) | 100 W | 100 W |
| | 439.1–440 MHz | S | receive only (except 439.930 pager repeaters) | – | – |
| 23 cm | 1240–1300 MHz | S | 10 W, max 16K0 bandwidth | – | – |
| 13 cm | 2304–2310, 2320–2322, 2400–2450 MHz | S | 200 W | – | – |
| 9 cm | 3400–3410 MHz | S | 200 W | – | – |
| 6 cm | 5650–5850 MHz | S | 200 W | – | – |
| 3 cm | 10.368–10.370 GHz | S | 40 dBW EIRP | – | – |
| | 10.40–10.50 GHz | S | 200 W | – | – |
| 1.2 cm | 24.0–24.25 GHz | S | 200 W | – | – |
| ≥47 GHz | 47–47.2, 76–81.5, 122.25–123, 134–141, 241–250, 275–3000 GHz | P/S | 200 W | – | – |

**Mode restrictions:**
- AFV § 7 allows all technically possible modes. Restrictions are by bandwidth (AFV § 10) and the FNV notes.
- No mode restriction is tied to class.

### Call-sign inference

AFV § 5 (high):
- Format is OE + a digit for the Bundesland + 1 or 3 letters.
- "X" after the digit marks clubs, repeaters and beacons; "XR" marks digipeaters.
- OE#ZAA–ZZZ is used for foreigners with a longer stay.

**There is no class-specific series**, so the class **cannot be inferred** from the call sign. Whether the Fernmeldebüros use an informal class-specific practice was not found (low).

```json
{"entities":["OE"],"regulator":"Fernmeldebüros (Fernmeldebehörde, Bundesministerium für Finanzen)","termLocal":"Bewilligungsklasse","termEnglish":"License Class","levels":[
{"code":"3","name":"Class 3","nameLocal":"Bewilligungsklasse 3","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"PEP (Leistungsstufe A); commercial unmodified equipment only","bands":[
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430000,439100,"all"]],"powerNote":"439.1-440 MHz receive only"}],"notes":"National entry class, valid only in Austria."},
{"code":"4","name":"Class 4","nameLocal":"Bewilligungsklasse 4","order":2,"cept":"Novice","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"PEP (Leistungsstufe A); commercial unmodified equipment only","bands":[
{"band":"160m","ranges":[[1810,2000,"all"]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430000,439100,"all"]]}],"notes":"CEPT Novice equivalent (AFV §3(3))."},
{"code":"1","name":"Class 1","nameLocal":"Bewilligungsklasse 1","order":3,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":1000,"powerNote":"PEP; per licensed Leistungsstufe A 100 / B 200 / C 400 W; 1000 W High Power on application on 80/40/20/17/15/12/10 m after 1 year; non-HP bands 200 W","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all"]],"maxPowerW":1,"powerNote":"ERP"},
{"band":"630m","ranges":[[472,479,"all"]],"maxPowerW":1,"powerNote":"EIRP"},
{"band":"160m","ranges":[[1810,1850,"all"],[1850,2000,"all"]],"maxPowerW":200,"powerNote":"200 W 1810-1850; 100 W 1850-2000"},
{"band":"80m","ranges":[[3500,3800,"all"]],"maxPowerW":1000,"powerNote":"High Power band"},
{"band":"60m","ranges":[[5351.5,5366.5,"all"]],"maxPowerW":15,"powerNote":"EIRP"},
{"band":"40m","ranges":[[7000,7200,"all"]],"maxPowerW":1000,"powerNote":"High Power band"},
{"band":"30m","ranges":[[10100,10150,"all"]],"maxPowerW":200},
{"band":"20m","ranges":[[14000,14350,"all"]],"maxPowerW":1000,"powerNote":"High Power band"},
{"band":"17m","ranges":[[18068,18168,"all"]],"maxPowerW":1000,"powerNote":"High Power band"},
{"band":"15m","ranges":[[21000,21450,"all"]],"maxPowerW":1000,"powerNote":"High Power band"},
{"band":"12m","ranges":[[24890,24990,"all"]],"maxPowerW":1000,"powerNote":"High Power band"},
{"band":"10m","ranges":[[28000,29700,"all"]],"maxPowerW":1000,"powerNote":"High Power band"},
{"band":"6m","ranges":[[50000,52000,"all"],[52000,54000,"all"]],"maxPowerW":200,"powerNote":"200 W 50-52 MHz; 100 W 52-54 MHz (R&D projects, temporary)"},
{"band":"2m","ranges":[[144000,146000,"all"]],"maxPowerW":200,"powerNote":"1 kW for EME/MS with >=15 dBd antennas"},
{"band":"70cm","ranges":[[430000,439100,"all"]],"maxPowerW":200,"powerNote":"1 kW EME/MS; 439.1-440 receive only"},
{"band":"23cm","ranges":[[1240000,1300000,"all"]],"maxPowerW":10,"powerNote":"max 16K0 bandwidth (GNSS protection)"},
{"band":"13cm","ranges":[[2304000,2310000,"all"],[2320000,2322000,"all"],[2400000,2450000,"all"]],"maxPowerW":200},
{"band":"9cm","ranges":[[3400000,3410000,"all"]],"maxPowerW":200},
{"band":"6cm","ranges":[[5650000,5850000,"all"]],"maxPowerW":200},
{"band":"3cm","ranges":[[10368000,10370000,"all"],[10400000,10500000,"all"]],"maxPowerW":200,"powerNote":"10.368-10.370 GHz: 40 dBW EIRP"},
{"band":"1.25cm","ranges":[[24000000,24250000,"all"]],"maxPowerW":200},
{"band":"6mm","ranges":[[47000000,47200000,"all"]],"maxPowerW":200},
{"band":"4mm","ranges":[[76000000,81500000,"all"]],"maxPowerW":200},
{"band":"2.5mm","ranges":[[122250000,123000000,"all"]],"maxPowerW":200},
{"band":"2mm","ranges":[[134000000,141000000,"all"]],"maxPowerW":200},
{"band":"1mm","ranges":[[241000000,250000000,"all"]],"maxPowerW":200}],"notes":"Legacy Klasse 2 and pre-1999 licences = Class 1 (AFV §46)."}],
"callsignInference":"Not inferable: OE + region digit + 1 or 3 letters for all classes (AFV §5). X after the digit = club/repeater/beacon.","asOf":"2026-10","confidence":"high"}
```

---

## Czech Republic

**Regulator:** Český telekomunikační úřad (ČTÚ).

**Rules:**
- **Vyhláška č. 156/2005 Sb.**, o technických a provozních podmínkách amatérské radiokomunikační služby. It sets the classes, power and band tables (Příloha 1).
  - https://www.zakonyprolidi.cz/cs/2005-156
  - Shown as "Aktuální znění 01.05.2005 (verze 1)", i.e. never amended. The ČTÚ exam FAQ of 05/2026 still cites it.
- Vyhláška č. 157/2005 Sb. covers exams and certificates (HAREC for class A, NOVICE for class N).
- Vyhláška č. 155/2005 Sb. covers call signs. Current version 23.08.2023.
  - https://www.zakonyprolidi.cz/cs/2005-155

**Term:**
- **"třída operátora" / "operátorská třída"** (operator class).
- UI word: **Operator Class** (or License Class).

### Current levels

| Order | Code | Official name | English | CEPT | Issued |
|---|---|---|---|---|---|
| 1 | N | Operátorská třída N (Novice) | Class N | CEPT Novice; NOVICE certificate per ERC Report 32 / ECC/REC (05)06 | yes |
| 2 | A | Operátorská třída A | Class A | HAREC / T/R 61-01 | yes |

### Power (§ 4; high)

- Maximum **output power** ("výstupní výkon"):
  - **A: 750 W.**
  - **N: 10 W.**
  - Lower limits apply in specific segments.
- Class A in international contests or EME: **1500 W** in a built-up area (intravilán), **3000 W** outside it.
- ČTÚ exam answers express the 750 W as "750 W PEP" (medium: PEP is not stated in the decree text).
- Unattended stations: 50 W.

### Mode restrictions

§ 4(3) (high):
- Within the allocated bands, segments must be used for each mode **according to the IARU Region 1 band plan**. This applies to every class.
- Plus the class-independent footnotes in the band table below.

### Band privileges (Příloha 1, Tables 1 and 2)

| Band | Class A | Class N |
|---|---|---|
| 2200 m | 135.7–137.8 kHz S, A1A/F1A/G1A only | – |
| 160 m | 1810–1850 P; 1850–1890 NIB **75 W**; 1890–2000 NIB **10 W** | 1830–1850 P; 1850–2000 NIB 10 W |
| 80 m | 3500–3800 | **3550–3700** |
| 40 m | 7000–7200 | – |
| 30 m | 10100–10140 S (A1A, F1A, G1A, J2A only); 10140–10150 S (J1D, J2D, F1D, G1D data only) | – |
| 20 m | 14000–14350 | – |
| 17 m | 18068–18168 | – |
| 15 m | 21000–21450 | **21050–21200** |
| 12 m | 24890–24990 | – |
| 10 m | 28000–29700 | **28050–28400** |
| 6 m | 50–52 MHz NIB **25 W** | – |
| 2 m | 144–146 MHz | 144–146 MHz |
| 70 cm | 430–440 MHz | 430–440 MHz |
| 23 cm | 1240–1300 MHz S | same |
| 13 cm | 2300–2450 MHz S | same |
| 9 cm | 3400–3410 MHz NIB 25 W | same, NIB 10 W |
| 6 cm, 3 cm | 5650–5850 MHz; 10.0–10.5 GHz | same |
| 1.2 cm and up | 24.0–24.25, 47.0–47.2, 75.5–81, 122.25–123, 134–141, 241–250 GHz | same |

Bands that are **not** in the decree: 630 m (472–479 kHz), 60 m and 4 m (70 MHz).
- A 2019 amendment draft that would have added them, and would have raised N to 100 W, is mentioned in course material.
- No evidence was found that it was adopted. Zakonyprolidi still shows version 1 of the decree.
- Czech amateurs may obtain these bands by individual authorisation, but this was **not verified** (low).

### Legacy

- Pre-2005 Czechoslovak/Czech operator classes existed. Vyhláška 390/1992 Zb. had four classes D, C, B, A.
- No transitional mapping was found in 156/2005 or 157/2005 as read (low).
- Holders active today hold either HAREC (A) or NOVICE (N) certificates.

### Call-sign inference

Vyhláška 155/2005 § 9(3)(j) (high):

| Series | Assigned to |
|---|---|
| OK1–OK7 + 2 or 3 letters (except OK1/OK2 + K/O/R…) | Individual **class A** (HAREC) holders |
| **OK9 + 3 letters** | Individual **class N** (NOVICE) holders |
| OK8 + 2 or 3 letters | Foreign nationals |
| OK0 | Unattended stations |
| OK1/OK2 + K/O/R + 2 letters | Clubs |
| OL0–OL9 | Special or temporary calls |
| OK1–OK7 or OL0–OL9 + 1 letter | Contests |

Reliability: **high** for issue-time class. Because OK9 is reserved for N, an upgrade to A should imply a new call; this is inferred, not verified.

```json
{"entities":["OK","OL"],"regulator":"ČTÚ (Český telekomunikační úřad)","termLocal":"třída operátora (operátorská třída)","termEnglish":"Operator Class","levels":[
{"code":"N","name":"Class N (Novice)","nameLocal":"Operátorská třída N","order":1,"cept":"Novice","issued":true,"legacy":false,"maxPowerW":10,"powerNote":"output power","bands":[
{"band":"160m","ranges":[[1830,1850,"all"],[1850,2000,"all"]]},
{"band":"80m","ranges":[[3550,3700,"all"]]},
{"band":"15m","ranges":[[21050,21200,"all"]]},
{"band":"10m","ranges":[[28050,28400,"all"]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all"]]},
{"band":"13cm","ranges":[[2300000,2450000,"all"]]},
{"band":"9cm","ranges":[[3400000,3410000,"all"]]},
{"band":"6cm","ranges":[[5650000,5850000,"all"]]},
{"band":"3cm","ranges":[[10000000,10500000,"all"]]},
{"band":"1.25cm","ranges":[[24000000,24250000,"all"]]},
{"band":"6mm","ranges":[[47000000,47200000,"all"]]},
{"band":"4mm","ranges":[[75500000,81000000,"all"]]},
{"band":"2.5mm","ranges":[[122250000,123000000,"all"]]},
{"band":"2mm","ranges":[[134000000,141000000,"all"]]},
{"band":"1mm","ranges":[[241000000,250000000,"all"]]}],"notes":"Segments must follow IARU Region 1 band plan (§4(3)). Personal calls OK9xxx."},
{"code":"A","name":"Class A","nameLocal":"Operátorská třída A","order":2,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":750,"powerNote":"output power (ČTÚ: PEP); 1500 W (3000 W outside built-up areas) in international contests and EME","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"CW"],[135.7,137.8,"RTTY"]],"powerNote":"A1A, F1A, G1A only"},
{"band":"160m","ranges":[[1810,1850,"all"],[1850,1890,"all"],[1890,2000,"all"]],"maxPowerW":750,"powerNote":"75 W 1850-1890; 10 W 1890-2000"},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"30m","ranges":[[10100,10140,"CW"],[10100,10140,"RTTY"],[10140,10150,"data"]],"powerNote":"10100-10140: A1A, F1A, G1A, J2A only; 10140-10150: J1D, J2D, F1D, G1D only"},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,52000,"all"]],"maxPowerW":25,"powerNote":"non-interference basis"},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all"]]},
{"band":"13cm","ranges":[[2300000,2450000,"all"]]},
{"band":"9cm","ranges":[[3400000,3410000,"all"]],"maxPowerW":25},
{"band":"6cm","ranges":[[5650000,5850000,"all"]]},
{"band":"3cm","ranges":[[10000000,10500000,"all"]]},
{"band":"1.25cm","ranges":[[24000000,24250000,"all"]]},
{"band":"6mm","ranges":[[47000000,47200000,"all"]]},
{"band":"4mm","ranges":[[75500000,81000000,"all"]]},
{"band":"2.5mm","ranges":[[122250000,123000000,"all"]]},
{"band":"2mm","ranges":[[134000000,141000000,"all"]]},
{"band":"1mm","ranges":[[241000000,250000000,"all"]]}],"notes":"630 m, 60 m, 4 m not in decree 156/2005 (individual permits unverified)."}],
"callsignInference":"Vyhláška 155/2005 §9(3)(j): OK9 + 3 letters = class N; OK1-OK7 + 2/3 letters (excluding OK1/OK2 + K/O/R club block) = class A; OK8 = foreigners; OK0 = unattended; OL = special events. Reliable for issue-time class.","asOf":"2026-10","confidence":"high"}
```

---

## Slovak Republic

**Regulator:** Úrad pre reguláciu elektronických komunikácií a poštových služieb (RÚ), https://www.teleoff.gov.sk.

**Rules:**
- Zákon č. 452/2021 Z. z. o elektronických komunikáciách. § 35 covers individual permits.
- **Vyhláška č. 291/2022 Z. z.**, ktorou sa ustanovujú prevádzkové podmienky pre amatérske stanice. In force 1 Sept 2022.
  - https://static.slov-lex.sk/pdf/SK/ZZ/2022/291/ZZ_2022_291_20220901.pdf
- Exams and certificates: vyhláška č. 283/2022 Z. z.

**Term:**
- **"trieda operátora" / "operátorská trieda"**, with "osvedčenie triedy N/E" for the certificate.
- UI word: **Operator Class**.

### Current levels

| Order | Code | Official name | English | CEPT | Issued |
|---|---|---|---|---|---|
| 1 | N | trieda N | Class N (Novice) | CEPT Novice; the permit includes a CEPT Novice licence (§ 3(3)) | yes |
| 2 | E | trieda E | Class E (full) | CEPT T/R 61-01; the permit includes a CEPT licence (§ 3(2)) | yes |

Upgrade N → E (§ 8): the E exam requires at least **1 year as class N and at least 500 QSOs**, shown from the log.

### Band privileges and power

- Decree 291/2022, Annex 1 Tables 1–5 (high), gives **one** legally binding band plan for the amateur service, with mode and bandwidth per segment.
- The decree contains **no per-class band or power table**. Per-class conditions therefore sit in each **individual permit** (povolenie, § 35 of the Act). They were **not verified** from a primary source.

Decree limits that apply regardless of class (high):
- 135.7–137.8 kHz and 472–479 kHz: 1 W EIRP.
- 1850–2000 kHz: 10 W.
- 5351.5–5366.5 kHz: 15 W EIRP.
- ARDF transmitters: 5 W on 80 m, 10 W on 2 m.

The decree band plan covers:
- 2200 m, 630 m.
- 160 m (1810–2000).
- 80 m (3500–3800).
- 60 m (5351.5–5366.5).
- 40 m (7000–7200).
- 30 m (10100–10150).
- 20 m, 17 m, 15 m, 12 m, 10 m.
- 6 m (50–52 MHz).
- 4 m (70–70.5 MHz).
- 2 m, 70 cm and microwave bands.

Mode by segment follows the IARU-style table, e.g. 3500–3570 CW and 7000–7040 CW. Mode limits are not class-specific.

Per-class figures (medium/low):
- **2007 Všeobecné povoľovacie podmienky** (TÚ SR, as published by OM3KTR; superseded):
  - Class E: 750 W, all bands in Table 1.
  - Class N: 100 W on Table 2 only: 160 m (1810–2000, 10 W above 1850), 80 m (3520–3770), 15 m (21050–21200), 10 m (28050–28190 and 28600–29700), 2 m, 70 cm and microwaves.
- **June 2022 draft** of the current rules (cq.sk): class N 100 W and class E 750 W, **both on all bands in Tables 1–5**. Reader comments note the final decree dropped the per-class table.
- The JSON below uses the draft/permit values (N 100 W, E 750 W) at **low** confidence.

### Legacy

- Vyhláška 390/1992 Zb. (federal) had classes D, C, B, A.
- The 2004–2022 TÚ SR conditions had classes E and N, per hamradio.sk and the 2007 VPP.
- No primary text mapping A/B/C/D to E/N was found (low). Active legacy holders are presumably E.
- § 11: call signs issued before 31 Aug 2022 remain valid.

### Call-sign inference

Decree Annex 2 (high):

| Series | Assigned to |
|---|---|
| Region prefix + **2-letter** suffix AA–ZZ | Class **E** |
| Region prefix + **3-letter** suffix **AAA–JZZ** | Class **N** |
| OM3 + KAA–KZZ / RAA–RZZ | Clubs |
| OM0 + MAA…/NAA…/OAA… | Unattended stations |
| OM9 | Special and guest calls |
| OM1–OM0 + 1 letter | Contest calls (E only) |

Region prefixes: OM1, OM2, OM4–OM8, OM0, and OM3 for no regional split.

Reliability: **low/medium**.
- § 10(2): **on upgrade N → E the call sign is kept unless a change is requested.**
- Pre-2022 calls stay valid.
- So a 2-letter suffix implies E, but a 3-letter A–J suffix does not imply N.

```json
{"entities":["OM"],"regulator":"RÚ (Úrad pre reguláciu elektronických komunikácií a poštových služieb)","termLocal":"trieda operátora (operátorská trieda)","termEnglish":"Operator Class","levels":[
{"code":"N","name":"Class N (Novice)","nameLocal":"trieda N","order":1,"cept":"Novice","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"UNVERIFIED: set in individual permit; 100 W per 2007 conditions and 2022 draft","bands":[
{"band":"160m","ranges":[[1810,2000,"all"]],"powerNote":"10 W in 1850-2000 (decree)"},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]}],"notes":"Band set per 2007 Table 2 (narrower sub-bands then); current permit band set unverified - the 2022 draft would allow all bands. Treat as low confidence."},
{"code":"E","name":"Class E","nameLocal":"trieda E","order":2,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":750,"powerNote":"UNVERIFIED: set in individual permit; 750 W per 2007 conditions and 2022 draft","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"CW"],[135.7,137.8,"data"]],"maxPowerW":1,"powerNote":"EIRP"},
{"band":"630m","ranges":[[472,475,"CW"],[475,479,"all"]],"maxPowerW":1,"powerNote":"EIRP"},
{"band":"160m","ranges":[[1810,1838,"CW"],[1838,2000,"all"]],"powerNote":"10 W in 1850-2000"},
{"band":"80m","ranges":[[3500,3570,"CW"],[3570,3800,"all"]]},
{"band":"60m","ranges":[[5351.5,5354,"CW"],[5354,5366,"all"],[5366,5366.5,"data"]],"maxPowerW":15,"powerNote":"EIRP"},
{"band":"40m","ranges":[[7000,7040,"CW"],[7040,7200,"all"]]},
{"band":"30m","ranges":[[10100,10130,"CW"],[10130,10150,"data"]]},
{"band":"20m","ranges":[[14000,14060,"CW"],[14060,14350,"all"]]},
{"band":"17m","ranges":[[18068,18095,"CW"],[18095,18168,"all"]]},
{"band":"15m","ranges":[[21000,21070,"CW"],[21070,21450,"all"]]},
{"band":"12m","ranges":[[24890,24915,"CW"],[24915,24990,"all"]]},
{"band":"10m","ranges":[[28000,28070,"CW"],[28070,29700,"all"]]},
{"band":"6m","ranges":[[50000,52000,"all"]]},
{"band":"4m","ranges":[[70000,70500,"all"]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]}],"notes":"Band plan (mode per segment) is in decree 291/2022 Annex 1 and applies to all classes; microwave bands also listed in Annex 1 Tables 3-5 (not itemised here)."}],
"callsignInference":"Decree 291/2022 Annex 2: 2-letter suffix = E; 3-letter suffix AAA-JZZ = N. But N->E upgrade keeps the call (§10(2)) and pre-Sept-2022 calls remain valid, so a 3-letter suffix does not reliably mean N.","asOf":"2026-10","confidence":"medium"}
```

---

## Poland

**Regulator:** Urząd Komunikacji Elektronicznej (UKE). The President of UKE issues permits.

**Rules:**
- Prawo komunikacji elektronicznej, Act of 12 July 2024 (Dz.U. 2024 poz. 1221).
- **Rozporządzenie Ministra Cyfryzacji z dnia 19 marca 2026 r. w sprawie pozwoleń radiowych dla służby radiokomunikacyjnej amatorskiej, Dz.U. 2026 poz. 406**, published 26 March 2026.
  - https://dziennikustaw.gov.pl/D2026000040601.pdf
  - Entry into force: the first day of the month after 14 days from publication. **Computed** as 1 May 2026.
  - It replaced the Rozporządzenie MAiC of 10 Dec 2014 (Dz.U. 2015 poz. 10): https://dziennikustaw.gov.pl/D2015000001001.pdf
- Since 12 Nov 2024, passing the exam produces a "zaświadczenie" (certificate of passing) rather than an operator certificate ("świadectwo"). Source: UKE BIP.

**Term:**
- **"kategoria pozwolenia"** (permit/licence category). The older term is "klasa świadectwa" (certificate class A/B/C/D).
- UI word: **License Category** (or License Class).

### Current levels

| Order | Code | Official name | English | CEPT | Issued |
|---|---|---|---|---|---|
| 1 | 3 | pozwolenie kategorii 3 | Category 3 | CEPT Novice, ECC (05)06 (§ 2(3) pt 2) | yes |
| 2 | 1 | pozwolenie kategorii 1 | Category 1 | CEPT, T/R 61-01 (§ 2(3) pt 1) | yes |

Not personal levels:
- Category 5: unattended station, SR prefix. 50 W up to 30 MHz, 15 W above.
- **pozwolenie dodatkowe** (additional permit): up to **1500 W** on all bands, for contests and occasional use. It requires category 1 and lasts at most 12 months.
- The app could model the additional permit as a power flag on a category-1 holder.

### Legacy (§ 3, § 4 of 2026 regulation; high)

- Certificates **class A or B** qualify for **category 1**.
- Certificates **class C or D** qualify for **category 3**.
- Permits issued under the 2014/2015 regulation remain until expiry. Validity is now up to 25 years for categories 1 and 3.

### Band privileges and power

Both categories use maximum **transmitter output power** ("maksymalna moc wyjściowa nadajnika"). PEP vs mean is not specified (medium).

| Band | Category 1 | Category 3 (2026) | Category 3 under 2015 rules |
|---|---|---|---|
| 160 m | yes, 500 W | 1810–2000 kHz, 100 W | yes |
| 80 m | yes, 500 W | 3500–3800 kHz, 100 W | yes |
| 40 m | yes, 500 W | 7000–7200 kHz, 100 W | yes |
| 30 m | yes, 500 W | **10100–10150 kHz, 100 W (new 2026)** | no |
| 20 m | yes, 500 W | 14000–14350 kHz, 100 W | yes |
| 17 m | yes, 500 W | **18068–18168 kHz, 100 W (new 2026)** | no |
| 15 m | yes, 500 W | 21000–21450 kHz, 100 W | yes |
| 12 m | yes, 500 W | **24890–24990 kHz, 100 W (new 2026)** | no |
| 10 m | yes, 500 W | 28000–29700 kHz, 100 W | yes |
| 2 m | yes, 500 W | 144–146 MHz, 100 W | yes |
| 70 cm | yes, 500 W | 430–440 MHz, 100 W | yes |
| 3 cm | yes, 500 W | 10.0–10.5 GHz, 100 W | yes |
| 2200 m, 630 m, 60 m, 6 m, 4 m, 23 cm, other microwave bands | "all amateur ranges" at 500 W, subject to the national allocation table (KTPCz) | – | – |

Band-specific limits for category 1 (e.g. EIRP caps on 2200 m, 630 m and 60 m, and 6 m or 4 m conditions):
- They come from the national frequency allocation (KTPCz) and the UKE "zakresy amatorskie" annex.
- They were **not verified** (low).

There are no class-specific mode restrictions in the regulation.

### Call-sign inference

§ 21 (high):
- Prefix HF, SN, SO, SP, SQ, SR or 3Z, then a digit, then up to 4 characters ending in a letter. The additional permit allows up to 7.
- **SR is reserved for category 5** (unattended stations).
- The applicant may propose a call (§ 22).

The category **cannot be inferred** from the call sign. Historical tendencies, e.g. SO or 3Z prefixes on novice-era calls, are anecdotal and were not verified (low).

```json
{"entities":["SP"],"regulator":"UKE (Urząd Komunikacji Elektronicznej)","termLocal":"kategoria pozwolenia","termEnglish":"License Category","levels":[
{"code":"3","name":"Category 3","nameLocal":"pozwolenie kategorii 3","order":1,"cept":"Novice","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"transmitter output power","bands":[
{"band":"160m","ranges":[[1810,2000,"all"]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"30m","ranges":[[10100,10150,"all"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]},
{"band":"3cm","ranges":[[10000000,10500000,"all"]]}],"notes":"30/17/12 m added by Dz.U. 2026 poz. 406 (in force 2026-05-01); under the 2015 rules category 3 lacked them. Legacy certificates class C and D qualify."},
{"code":"1","name":"Category 1","nameLocal":"pozwolenie kategorii 1","order":2,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":500,"powerNote":"transmitter output power; up to 1500 W with a separate 'pozwolenie dodatkowe' for contests/occasional use","bands":[
{"band":"160m","ranges":[[1810,2000,"all"]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"30m","ranges":[[10100,10150,"all"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]}],"notes":"Regulation grants ALL amateur allocations in Poland; LF/MF/60m/6m/4m/microwave availability and caps come from KTPCz (not verified, not itemised). Legacy certificates class A and B qualify."}],
"callsignInference":"Not inferable. Any of HF/SN/SO/SP/SQ/3Z + digit + up to 4 chars; SR reserved for unattended (category 5) stations.","asOf":"2026-10","confidence":"high"}
```

---

## Hungary

**Regulator:** Nemzeti Média- és Hírközlési Hatóság (NMHH).

**Rules:**
- **15/2013. (IX. 25.) NMHH rendelet a rádióamatőr szolgálatról**, as amended by 3/2014, 2/2016, 13/2017 and 2/2018. Current text in force since 2018-07-21.
  - https://net.jogtar.hu/jogszabaly?docid=a1300015.nmh
- Band and power privileges per licence grade are in the **NFFF: 7/2015. (XI. 13.) NMHH rendelet** (national frequency allocation and band-use rules), Annex section 7.2 "Amatőr- és műholdas amatőrszolgálat alkalmazásai".
  - https://net.jogtar.hu/jogszabaly?docid=a1500007.nmh, page 2
  - The version read is in force 2026-04-03 to 2026-11-14. **A new NFFF version takes effect 2026-11-15**; its amateur section was not checked (see open questions).

**Term:**
- Licence: **"engedély fokozata"** (licence grade): Kezdő, CEPT Novice, CEPT.
- Exam: "vizsgafokozat": Kezdő, Alap, HAREC.
- UI word: **License Grade** (or License Class).

### Current levels (15/2013 § 8(6); high)

| Order | Code | Licence grade | Exam basis | English | CEPT | Issued |
|---|---|---|---|---|---|---|
| 1 | KEZDO | Kezdő fokozatú engedély | Kezdő exam (oral) | Beginner/Entry | none (national) | yes, **only to applicants under 18 or aged 60+** |
| 2 | NOVICE | CEPT Novice fokozatú | Alap exam (ERC Report 32) or foreign CEPT Novice | CEPT Novice | ECC/REC (05)06 | yes |
| 3 | CEPT | CEPT fokozatú | HAREC exam | CEPT (full) | T/R 61-01 / HAREC | yes |

Morse:
- A separate Morse exam may be taken (§ 5(3)).
- NFFF 7.1.2: **hand-keyed CW requires a passed Morse exam.** Computer-to-computer CW does not. Medium: the asterisk markers did not survive extraction, so it is unclear which rows carry them.

### Legacy (15/2013 § 21(2); high)

| Old certificate | Maps to |
|---|---|
| "RA" or CEPT-A basic | Alap + Morse |
| "RB", "RC" or CEPT-A intermediate/advanced | HAREC + Morse |
| "URH", "UA" or CEPT-B basic | Alap |
| "UB", "UC" or CEPT-B intermediate/advanced | HAREC |

Alap leads to a CEPT Novice licence; HAREC leads to a CEPT licence.

### Band privileges and power (NFFF 7.2; high)

The column is "Legnagyobb adóteljesítmény [W]", i.e. maximum **transmitter power**. PEP vs mean is not stated. A dash means not permitted.

| Band | Segment(s) | Kezdő | CEPT Novice | CEPT |
|---|---|---|---|---|
| 2200 m | 135.7–137.8 kHz | – | – | 1 W EIRP |
| 630 m | 472–479 kHz | – | – | 1 W EIRP |
| 160 m | 1810–1850 kHz | – | 200 | 1500 |
| | 1850–2000 kHz | – | – | 10 |
| 80 m | 3500–3800 kHz | 100 | 200 | 1500 |
| 60 m | 5351.5–5366.5 kHz | – | – | 15 W EIRP |
| 40 m | 7000–7100 and 7175–7200 kHz | 100 | 200 | 1500 |
| | 7100–7175 kHz | – | 200 | 1500 |
| 30 m | 10100–10150 kHz | – | – | 1500 |
| 20 m | 14000–14300 kHz (beacons 14099–14101: CEPT 100 W only) | 100 | 200 | 1500 |
| | 14300–14350 kHz | – | 200 | 1500 |
| 17 m | 18068–18168 kHz | – | – | 1500 |
| 15 m | 21000–21450 kHz (except beacons 21149–21151) | 100 | 200 | 1500 |
| 12 m | 24890–24990 kHz (except beacons 24929–24931) | – | 200 | 1500 |
| 10 m | 28000–29700 kHz (except beacons 28190–28225 and guard 29510–29520) | 100 | 200 | 1500 |
| 6 m | 50–52 MHz | – | – | 10 W ERP |
| 4 m | 70–70.5 MHz | – | – | 10 W ERP |
| 2 m | 144–146 MHz (except beacons 144.4–144.49 and repeater outputs 145.575–145.7935) | 50 | 200 | 1000 |
| 70 cm | 430–431.975 MHz | 10 | 10 | 25 |
| | 432–438 MHz (except beacons 432.4–432.49) | 50 | 100 | 1000 |
| | 438–440 MHz | – | – | 25 |
| 23 cm | 1290.994–1291.494 and 1297.494–1298 MHz (FM) | 10 | 50 | 500 |
| | rest of 1240–1300 MHz | – | – | 500 (50–100 in some sub-segments) |
| 13 cm | 2300–2450 MHz | – | – | 150 |
| 6 cm, 3 cm | 5650–5850 MHz; 10.0–10.5 GHz | – | – | 75 |
| ≥24 GHz | 24.0–24.25, 47.0–47.2, 76–81.5, 122.25–123, 134–141, 241–250 GHz | – | – | 30 |

**Mode restrictions:** the NFFF sets modes per segment following the IARU band plan. The same segmentation applies to all grades. Examples (CW = "távíró"):
- 3500–3570 CW.
- 3570–3600 narrow modes.
- 3600–3800 all modes.
- 10100–10130 CW.
- 21110–21120 all modes except SSB.

### Call-sign inference

15/2013 § 12 (high):
- First two characters HA or HG, then a digit, ending in a letter. 5–7 characters in total.
- **No grade-specific series** is defined, so the grade is **not inferable**.
- The NMHH publishes a call-sign register that includes the grade (§ 14(2)–(3)). A lookup there is the reliable route.

```json
{"entities":["HA","HG"],"regulator":"NMHH (Nemzeti Média- és Hírközlési Hatóság)","termLocal":"engedély fokozata","termEnglish":"License Grade","levels":[
{"code":"KEZDO","name":"Beginner (Kezdő)","nameLocal":"Kezdő fokozatú engedély","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"transmitter power; 100 W HF, 50 W 2m/70cm, 10 W 430-432 MHz and 23 cm","bands":[
{"band":"80m","ranges":[[3500,3570,"CW"],[3570,3600,"data"],[3600,3800,"all"]],"maxPowerW":100},
{"band":"40m","ranges":[[7000,7040,"CW"],[7040,7050,"data"],[7050,7100,"all"],[7175,7200,"all"]],"maxPowerW":100},
{"band":"20m","ranges":[[14000,14070,"CW"],[14070,14099,"data"],[14101,14300,"all"]],"maxPowerW":100},
{"band":"15m","ranges":[[21000,21070,"CW"],[21070,21149,"data"],[21151,21450,"all"]],"maxPowerW":100},
{"band":"10m","ranges":[[28000,28070,"CW"],[28070,28190,"data"],[28225,29510,"all"],[29520,29700,"all"]],"maxPowerW":100},
{"band":"2m","ranges":[[144000,144400,"all"],[144500,145562.5,"all"],[145794,146000,"all"]],"maxPowerW":50},
{"band":"70cm","ranges":[[430000,431975,"all"],[432000,432400,"all"],[432500,438000,"all"]],"maxPowerW":50,"powerNote":"10 W in 430-431.975 MHz"},
{"band":"23cm","ranges":[[1290994,1291494,"phone"],[1297494,1298000,"phone"]],"maxPowerW":10,"powerNote":"FM only"}],"notes":"Issued only to applicants under 18 or 60 and over (15/2013 §8(6)). National grade, no CEPT equivalence."},
{"code":"NOVICE","name":"CEPT Novice","nameLocal":"CEPT Novice fokozatú engedély","order":2,"cept":"Novice","issued":true,"legacy":false,"maxPowerW":200,"powerNote":"transmitter power; 200 W HF and 2 m, 100 W 70 cm, 50 W 23 cm FM segments","bands":[
{"band":"160m","ranges":[[1810,1838,"CW"],[1838,1840,"data"],[1840,1850,"all"]],"maxPowerW":200},
{"band":"80m","ranges":[[3500,3570,"CW"],[3570,3600,"data"],[3600,3800,"all"]],"maxPowerW":200},
{"band":"40m","ranges":[[7000,7040,"CW"],[7040,7050,"data"],[7050,7200,"all"]],"maxPowerW":200},
{"band":"20m","ranges":[[14000,14070,"CW"],[14070,14099,"data"],[14101,14350,"all"]],"maxPowerW":200},
{"band":"15m","ranges":[[21000,21070,"CW"],[21070,21149,"data"],[21151,21450,"all"]],"maxPowerW":200},
{"band":"12m","ranges":[[24890,24915,"CW"],[24915,24929,"data"],[24931,24990,"all"]],"maxPowerW":200},
{"band":"10m","ranges":[[28000,28070,"CW"],[28070,28190,"data"],[28225,29510,"all"],[29520,29700,"all"]],"maxPowerW":200},
{"band":"2m","ranges":[[144000,144400,"all"],[144500,145562.5,"all"],[145794,146000,"all"]],"maxPowerW":200},
{"band":"70cm","ranges":[[430000,431975,"all"],[432000,432400,"all"],[432500,438000,"all"]],"maxPowerW":100,"powerNote":"10 W in 430-431.975 MHz"},
{"band":"23cm","ranges":[[1290994,1291494,"phone"],[1297494,1298000,"phone"]],"maxPowerW":50,"powerNote":"FM only"}],"notes":"From Alap exam or foreign CEPT Novice. Legacy RA (+Morse), URH, UA certificates map to Alap."},
{"code":"CEPT","name":"CEPT (full)","nameLocal":"CEPT fokozatú engedély","order":3,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":1500,"powerNote":"transmitter power; 1500 W HF, 1000 W 2m/70cm, 500 W 23cm, 150 W 13cm, 75 W 6/3cm, 30 W >=24 GHz","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"CW"],[135.7,137.8,"data"]],"maxPowerW":1,"powerNote":"EIRP"},
{"band":"630m","ranges":[[472,475,"CW"],[475,479,"data"]],"maxPowerW":1,"powerNote":"EIRP"},
{"band":"160m","ranges":[[1810,1838,"CW"],[1838,1840,"data"],[1840,2000,"all"]],"maxPowerW":1500,"powerNote":"10 W in 1850-2000"},
{"band":"80m","ranges":[[3500,3570,"CW"],[3570,3600,"data"],[3600,3800,"all"]],"maxPowerW":1500},
{"band":"60m","ranges":[[5351.5,5354,"CW"],[5351.5,5354,"data"],[5354,5366,"all"],[5366,5366.5,"data"]],"maxPowerW":15,"powerNote":"EIRP"},
{"band":"40m","ranges":[[7000,7040,"CW"],[7040,7050,"data"],[7050,7200,"all"]],"maxPowerW":1500},
{"band":"30m","ranges":[[10100,10130,"CW"],[10130,10150,"data"]],"maxPowerW":1500},
{"band":"20m","ranges":[[14000,14070,"CW"],[14070,14099,"data"],[14101,14350,"all"]],"maxPowerW":1500},
{"band":"17m","ranges":[[18068,18095,"CW"],[18095,18109,"data"],[18111,18168,"all"]],"maxPowerW":1500},
{"band":"15m","ranges":[[21000,21070,"CW"],[21070,21149,"data"],[21151,21450,"all"]],"maxPowerW":1500},
{"band":"12m","ranges":[[24890,24915,"CW"],[24915,24929,"data"],[24931,24990,"all"]],"maxPowerW":1500},
{"band":"10m","ranges":[[28000,28070,"CW"],[28070,28190,"data"],[28225,29510,"all"],[29520,29700,"all"]],"maxPowerW":1500},
{"band":"6m","ranges":[[50000,50100,"CW"],[50100,52000,"all"]],"maxPowerW":10,"powerNote":"ERP"},
{"band":"4m","ranges":[[70000,70500,"all"]],"maxPowerW":10,"powerNote":"ERP"},
{"band":"2m","ranges":[[144000,146000,"all"]],"maxPowerW":1000},
{"band":"70cm","ranges":[[430000,440000,"all"]],"maxPowerW":1000,"powerNote":"25 W in 430-431.975 and 438-440 MHz"},
{"band":"23cm","ranges":[[1240000,1300000,"all"]],"maxPowerW":500},
{"band":"13cm","ranges":[[2300000,2450000,"all"]],"maxPowerW":150},
{"band":"6cm","ranges":[[5650000,5850000,"all"]],"maxPowerW":75},
{"band":"3cm","ranges":[[10000000,10500000,"all"]],"maxPowerW":75},
{"band":"1.25cm","ranges":[[24000000,24250000,"all"]],"maxPowerW":30},
{"band":"6mm","ranges":[[47000000,47200000,"all"]],"maxPowerW":30},
{"band":"4mm","ranges":[[76000000,81500000,"all"]],"maxPowerW":30},
{"band":"2.5mm","ranges":[[122250000,123000000,"all"]],"maxPowerW":30},
{"band":"2mm","ranges":[[134000000,141000000,"all"]],"maxPowerW":30},
{"band":"1mm","ranges":[[241000000,250000000,"all"]],"maxPowerW":30}],"notes":"From HAREC exam. Legacy RB/RC (+Morse), UB/UC certificates map to HAREC. Hand-keyed CW requires Morse exam (NFFF 7.1.2)."}],
"callsignInference":"Not inferable: HA/HG + digit + letters, 5-7 chars, no grade series (15/2013 §12). NMHH public call-sign register lists the grade.","asOf":"2026-10","confidence":"high"}
```

---

## Slovenia

**Regulator:** Agencija za komunikacijska omrežja in storitve Republike Slovenije (AKOS).

**Rules:**
- **Splošni akt o pogojih za uporabo radijskih frekvenc, namenjenih radioamaterski in radioamaterski satelitski storitvi**, Uradni list RS 14/2023. Issued 30 Jan 2023, in force the day after publication.
  - https://www.uradni-list.si/glasilo-uradni-list-rs/vsebina/2023-01-0256?sop=2023-01-0256
  - It replaced the act in Uradni list RS 68/13 and 48/18.
  - No 2024–2026 amendment was found by search (medium).
- Issued under ZEKom-2 (Uradni list RS 130/22).

**Term:**
- **"razred radioamaterja"** (radio amateur class), "razred A / razred N".
- UI word: **Operator Class**.

### Current levels

| Order | Code | Official name | English | CEPT | Issued |
|---|---|---|---|---|---|
| 1 | N | radioamater razreda N | Class N (Novice) | ERC Report 32 exam; licence per ECC/REC (05)06 (Art. 12, 14) | yes |
| 2 | A | radioamater razreda A | Class A | HAREC T/R 61-02; licence per T/R 61-01 | yes |

- A foreign HAREC is recognised as A (Art. 12(3)).
- Morse is an optional subject for either class.

### Power

Art. 4(4) (high):
- Power is the **mean power** ("srednja") delivered to the antenna feed line, summed over all transmitters on the same frequency range.
- This differs from the PEP used in most neighbouring countries.

### Band privileges (Art. 4, Tabela 1; high)

| Band | Range | Status | Class A | Class N |
|---|---|---|---|---|
| 2200 m | 135.7–137.8 kHz | S | 1 W EIRP | – |
| 630 m | 472–479 kHz | S | **5 W EIRP** | – |
| 160 m | 1810–1850 / 1850–2000 kHz | P / S | 1500 W | – |
| 80 m | 3500–3800 kHz | P | 1500 W | 100 W |
| 60 m | 5351.5–5366.5 kHz | S | 15 W EIRP | – |
| 40 m | 7000–7200 kHz | P | 1500 W | 100 W |
| 30 m | 10100–10150 kHz | S | 300 W | – |
| 20 m | 14000–14350 kHz | P | 1500 W | – |
| 17 m | 18068–18168 kHz | P | 1500 W | – |
| 15 m | 21000–21450 kHz | P | 1500 W | 100 W |
| 12 m | 24890–24990 kHz | P | 1500 W | – |
| 10 m | 28000–29700 kHz | P | 1500 W | 100 W |
| 8 m (ISM) | 40.66–40.70 MHz | S | 100 W | – |
| 6 m | 50–52 MHz | S | 100 W | 25 W |
| 4 m | 70–70.45 MHz | S | 100 W | 25 W |
| 2 m | 144–146 MHz | P | 1500 W | 25 W |
| 70 cm | 430–432 MHz | P | 50 W | 25 W |
| | 432–438 MHz | P | 1500 W | 25 W |
| | 438–440 MHz | P | 50 W | 25 W |
| 23 cm | 1240–1300 MHz | S | 300 W | – |
| 13 cm | 2300–2450 MHz | S | 300 W | – |
| 9 cm | 3400–3410 MHz | S | 100 W | – |
| 6 cm | 5650–5830 MHz | S | 100 W | – |
| 3 cm | 10.0–10.5 GHz | S | 100 W | – |
| 1.2 cm and up | 24.0–24.25, 47.0–48.5, 75.5–81.5, 122.25–123, 134–141, 241–250 GHz | P/S | 50 W | – |

Satellite-service bands:
- A separate column lists the satellite segments for class A: 7000–7100, 14000–14250, 21000–21450, 28000–29700 kHz, 144–146, 432–438 MHz, and others.
- **Class N may not use the satellite bands** (Art. 4(2)).

There are no mode restrictions by class. Art. 3 requires conditions to follow ITU, CEPT and IARU documents.

### Legacy

- Earlier general acts existed: 2004 (UL 117/2004) and 2013/2018 (UL 68/13, 48/18).
- Their class structure and any transitional mapping were **not verified** (low).

### Call-sign inference

Art. 6, Tabela 2 (high). Format: S5 + digit + 1–3 letters.

| Series | Assigned to |
|---|---|
| **S52AAA–S52XZZ, S52ZAA–S52ZZZ, S58AAA–S58XZZ** | **Class N** |
| S50A–S50Z | A, clubs and organisation |
| S50AA–S50ZZ | A and organisation |
| S51AA–S59ZZ | Class A |
| S50AAA–S50XZZ, S54AAA–S54XZZ, S54ZAA–S54ZZZ | Class A |
| S56AAA–S56XZZ, S56ZAA–S57XZZ, S57ZAA–S57ZZZ, S58ZAA–S58ZZZ | Class A |
| S51, S53, S59 3-letter blocks | Clubs |
| S5xY.. | Special transmission techniques |
| S55… | Repeaters and beacons |

Reliability: **medium**.
- Good for issue-time class.
- A holder may change the call after 5 years (Art. 6(9)).
- It is not stated whether an N → A upgrade forces a new call.
- Calls issued under the older acts may not fit this table.

```json
{"entities":["S5"],"regulator":"AKOS (Agencija za komunikacijska omrežja in storitve RS)","termLocal":"razred radioamaterja","termEnglish":"Operator Class","levels":[
{"code":"N","name":"Class N (Novice)","nameLocal":"razred N","order":1,"cept":"Novice","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"MEAN power; 100 W HF, 25 W VHF/UHF","bands":[
{"band":"80m","ranges":[[3500,3800,"all"]],"maxPowerW":100},
{"band":"40m","ranges":[[7000,7200,"all"]],"maxPowerW":100},
{"band":"15m","ranges":[[21000,21450,"all"]],"maxPowerW":100},
{"band":"10m","ranges":[[28000,29700,"all"]],"maxPowerW":100},
{"band":"6m","ranges":[[50000,52000,"all"]],"maxPowerW":25},
{"band":"4m","ranges":[[70000,70450,"all"]],"maxPowerW":25},
{"band":"2m","ranges":[[144000,146000,"all"]],"maxPowerW":25},
{"band":"70cm","ranges":[[430000,440000,"all"]],"maxPowerW":25}],"notes":"No satellite-service use (Art. 4(2)). Calls S52xxx / S58xxx."},
{"code":"A","name":"Class A","nameLocal":"razred A","order":2,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":1500,"powerNote":"MEAN power; per-band caps","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all"]],"maxPowerW":1,"powerNote":"EIRP"},
{"band":"630m","ranges":[[472,479,"all"]],"maxPowerW":5,"powerNote":"EIRP"},
{"band":"160m","ranges":[[1810,2000,"all"]],"maxPowerW":1500},
{"band":"80m","ranges":[[3500,3800,"all"]],"maxPowerW":1500},
{"band":"60m","ranges":[[5351.5,5366.5,"all"]],"maxPowerW":15,"powerNote":"EIRP"},
{"band":"40m","ranges":[[7000,7200,"all"]],"maxPowerW":1500},
{"band":"30m","ranges":[[10100,10150,"all"]],"maxPowerW":300},
{"band":"20m","ranges":[[14000,14350,"all"]],"maxPowerW":1500},
{"band":"17m","ranges":[[18068,18168,"all"]],"maxPowerW":1500},
{"band":"15m","ranges":[[21000,21450,"all"]],"maxPowerW":1500},
{"band":"12m","ranges":[[24890,24990,"all"]],"maxPowerW":1500},
{"band":"10m","ranges":[[28000,29700,"all"]],"maxPowerW":1500},
{"band":"8m","ranges":[[40660,40700,"all"]],"maxPowerW":100},
{"band":"6m","ranges":[[50000,52000,"all"]],"maxPowerW":100},
{"band":"4m","ranges":[[70000,70450,"all"]],"maxPowerW":100},
{"band":"2m","ranges":[[144000,146000,"all"]],"maxPowerW":1500},
{"band":"70cm","ranges":[[430000,440000,"all"]],"maxPowerW":1500,"powerNote":"50 W in 430-432 and 438-440 MHz"},
{"band":"23cm","ranges":[[1240000,1300000,"all"]],"maxPowerW":300},
{"band":"13cm","ranges":[[2300000,2450000,"all"]],"maxPowerW":300},
{"band":"9cm","ranges":[[3400000,3410000,"all"]],"maxPowerW":100},
{"band":"6cm","ranges":[[5650000,5850000,"all"]],"maxPowerW":100},
{"band":"3cm","ranges":[[10000000,10500000,"all"]],"maxPowerW":100},
{"band":"1.25cm","ranges":[[24000000,24250000,"all"]],"maxPowerW":50},
{"band":"6mm","ranges":[[47000000,48500000,"all"]],"maxPowerW":50},
{"band":"4mm","ranges":[[75500000,81500000,"all"]],"maxPowerW":50},
{"band":"2.5mm","ranges":[[122250000,123000000,"all"]],"maxPowerW":50},
{"band":"2mm","ranges":[[134000000,141000000,"all"]],"maxPowerW":50},
{"band":"1mm","ranges":[[241000000,250000000,"all"]],"maxPowerW":50}],"notes":""}],
"callsignInference":"Art. 6 Tabela 2: S52AAA-S52XZZ, S52ZAA-S52ZZZ, S58AAA-S58XZZ = class N; S50/S51-S59 2-letter and S50, S54, S56, S57, S58Z 3-letter blocks = class A; S51/S53/S59 3-letter = clubs; S55 = repeaters/beacons. Medium reliability (call changes allowed after 5 years; pre-2023 calls).","asOf":"2026-10","confidence":"high"}
```

---

## Croatia

**Regulator:** Hrvatska regulatorna agencija za mrežne djelatnosti (HAKOM).

**Rules:**
- **Pravilnik o amaterskim radijskim komunikacijama**, Narodne novine 150/2022 (21.12.2022). In force 8 days after publication.
  - https://narodne-novine.nn.hr/clanci/sluzbeni/2022_12_150_2313.html
- It replaced NN 45/12, 97/14 and 116/17. No later amendment was found (medium).

**Term:**
- **"radioamaterski razred"** (radio amateur class): A razred, and "početnički P razred" (beginner P class).
- UI word: **Operator Class**.

### Current levels

| Order | Code | Official name | English | CEPT | Issued |
|---|---|---|---|---|---|
| 1 | P | početnički P razred | Class P (Beginner/Novice) | Exam per ERC Report 32; licence per ECC/REC (05)06 (Art. 7, 12) | yes |
| 2 | A | A razred | Class A | Exam per T/R 61-02 (HAREC); licence per T/R 61-01 | yes |

### Legacy (Art. 10(6); high)

Exams passed for the former **B or C class** are recognised as **class A**.

### Power (Dodatak 1, 2.2.1; high)

- **PEP**: class A **1500 W**, class P **100 W**.
- Lower per-band limits apply. Note 6: 1850–2000 kHz is capped at 1000 W **mean** power.

### Band privileges (Dodatak 1, Tablica 1)

| Band | Class A | Class P |
|---|---|---|
| 2200 m | 135.7–137.8 kHz, 1 W EIRP | – |
| 630 m | 472–479 kHz, 1 W EIRP | – |
| 160 m | 1810–1850 kHz 1500 W; 1850–2000 kHz 1000 W (mean) | – |
| 80 m | 3500–3800 kHz 1500 W | 3500–3800 kHz 100 W |
| 60 m | 5351.5–5366.5 kHz 15 W EIRP | – |
| 40 m | 7000–7200 kHz 1500 W | 7000–7200 kHz 100 W |
| 30 m | 10100–10150 kHz 250 W, **A1A (CW) and F1B (FSK/RTTY) only** | – |
| 20 m | 14000–14350 kHz 1500 W | **14040–14150 and 14280–14350 kHz** 100 W |
| 17 m | 18068–18168 kHz 1500 W | – |
| 15 m | 21000–21450 kHz 1500 W | 21000–21450 kHz 100 W |
| 12 m | 24890–24990 kHz 1500 W | – |
| 10 m | 28000–29700 kHz 1500 W | 28000–29700 kHz 100 W |
| 6 m | 50.0–50.5 MHz 500 W; 50.5–51.9 MHz 100 W | – |
| 4 m | 70.0–70.45 MHz 10 W | – |
| 2 m | 144–146 MHz 1500 W | 144–146 MHz 100 W |
| 70 cm | 430–440 MHz 1500 W | 430–440 MHz (100 W class cap) |
| 23 cm | 1240–1300 MHz 1500 W | 1240–1300 MHz (100 W cap) |
| 13 cm | 2300–2400 MHz 150 W; 2400–2450 MHz | 2300–2450 MHz (100 W cap) |
| 9 cm | 3400–3410 MHz | – |
| 6 cm, 3 cm | 5650–5850 MHz; 10.0–10.5 GHz | same (100 W cap) |
| ≥24 GHz | 24–24.25, 47–47.2, 76–81, 122.25–123, 134–141, 241–250 GHz | same (100 W cap) |

Blank power cells in the table fall back to the class PEP cap of 1500 W or 100 W. That fallback is an interpretation (medium).

### Call-sign inference

Art. 15 (high):
- 9A + one digit + at most 3 letters. The call is proposed by the Hrvatski radioamaterski savez (HRS).
- **No class-specific series** in the rulebook, so the class is **not inferable**.

```json
{"entities":["9A"],"regulator":"HAKOM (Hrvatska regulatorna agencija za mrežne djelatnosti)","termLocal":"radioamaterski razred","termEnglish":"Operator Class","levels":[
{"code":"P","name":"Class P (Beginner)","nameLocal":"početnički P razred","order":1,"cept":"Novice","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"PEP","bands":[
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"20m","ranges":[[14040,14150,"all"],[14280,14350,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all"]]},
{"band":"13cm","ranges":[[2300000,2450000,"all"]]},
{"band":"6cm","ranges":[[5650000,5850000,"all"]]},
{"band":"3cm","ranges":[[10000000,10500000,"all"]]},
{"band":"1.25cm","ranges":[[24000000,24250000,"all"]]},
{"band":"6mm","ranges":[[47000000,47200000,"all"]]},
{"band":"4mm","ranges":[[76000000,81000000,"all"]]},
{"band":"2.5mm","ranges":[[122250000,123000000,"all"]]},
{"band":"2mm","ranges":[[134000000,141000000,"all"]]},
{"band":"1mm","ranges":[[241000000,250000000,"all"]]}],"notes":""},
{"code":"A","name":"Class A","nameLocal":"A razred","order":2,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":1500,"powerNote":"PEP","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all"]],"maxPowerW":1,"powerNote":"EIRP"},
{"band":"630m","ranges":[[472,479,"all"]],"maxPowerW":1,"powerNote":"EIRP"},
{"band":"160m","ranges":[[1810,1850,"all"],[1850,2000,"all"]],"maxPowerW":1500,"powerNote":"1850-2000 kHz: 1000 W mean"},
{"band":"80m","ranges":[[3500,3800,"all"]],"maxPowerW":1500},
{"band":"60m","ranges":[[5351.5,5366.5,"all"]],"maxPowerW":15,"powerNote":"EIRP"},
{"band":"40m","ranges":[[7000,7200,"all"]],"maxPowerW":1500},
{"band":"30m","ranges":[[10100,10150,"CW"],[10100,10150,"RTTY"]],"maxPowerW":250,"powerNote":"A1A and F1B only"},
{"band":"20m","ranges":[[14000,14350,"all"]],"maxPowerW":1500},
{"band":"17m","ranges":[[18068,18168,"all"]],"maxPowerW":1500},
{"band":"15m","ranges":[[21000,21450,"all"]],"maxPowerW":1500},
{"band":"12m","ranges":[[24890,24990,"all"]],"maxPowerW":1500},
{"band":"10m","ranges":[[28000,29700,"all"]],"maxPowerW":1500},
{"band":"6m","ranges":[[50000,50500,"all"],[50500,51900,"all"]],"maxPowerW":500,"powerNote":"100 W in 50.5-51.9 MHz"},
{"band":"4m","ranges":[[70000,70450,"all"]],"maxPowerW":10},
{"band":"2m","ranges":[[144000,146000,"all"]],"maxPowerW":1500},
{"band":"70cm","ranges":[[430000,440000,"all"]],"maxPowerW":1500},
{"band":"23cm","ranges":[[1240000,1300000,"all"]],"maxPowerW":1500},
{"band":"13cm","ranges":[[2300000,2450000,"all"]],"maxPowerW":1500,"powerNote":"150 W in 2300-2400 MHz"},
{"band":"9cm","ranges":[[3400000,3410000,"all"]]},
{"band":"6cm","ranges":[[5650000,5850000,"all"]]},
{"band":"3cm","ranges":[[10000000,10500000,"all"]]},
{"band":"1.25cm","ranges":[[24000000,24250000,"all"]]},
{"band":"6mm","ranges":[[47000000,47200000,"all"]]},
{"band":"4mm","ranges":[[76000000,81000000,"all"]]},
{"band":"2.5mm","ranges":[[122250000,123000000,"all"]]},
{"band":"2mm","ranges":[[134000000,141000000,"all"]]},
{"band":"1mm","ranges":[[241000000,250000000,"all"]]}],"notes":"Legacy class B and C exams recognised as A (Art. 10(6))."}],
"callsignInference":"Not inferable: 9A + digit + up to 3 letters for all classes (Art. 15).","asOf":"2026-10","confidence":"high"}
```

---

## Sources

| # | URL | Supports | Confidence |
|---|---|---|---|
| 1 | https://www.gesetze-im-internet.de/afuv_2005/anlage_1.html | DE Anlage 1 band/power table per class (BGBl. 2024 I Nr. 175) | high |
| 2 | https://www.gesetze-im-internet.de/afuv_2005/__7.html, __2.html, __19.html, __10.html | DE classes A/E/N, "Zeugnisklasse", legacy mapping, DN1–DN8 sunset | high |
| 3 | https://www.bundesnetzagentur.de/DE/Fachthemen/Telekommunikation/Frequenzen/SpezielleAnwendungen/Amateurfunk/DL_Vfg_AFu/Rufzeichenplan_10_24_Auszug_aus_Vfg_15_2025.pdf?__blob=publicationFile&v=4 | DE call-sign series per class (Vfg 15/2025) | high |
| 4 | https://www.darc.de/der-club/distrikte/m/ortsverbaende/31/amateurfunk-klassen/ ; https://de.wikipedia.org/wiki/Amateurfunkklasse | DE CEPT mapping (A = CEPT, E = Novice, N not CEPT), N start date 24 Jun 2024; OE class overview (lead only) | medium |
| 5 | https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10012930 | AT AFV consolidated: §3, §5 call signs, §8 classes, §9 Leistungsstufen, §46/47 legacy | high |
| 6 | https://www.ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2008_II_390/BGBLA_2008_II_390.pdf | AT class 1/3/4 definitions, CEPT Novice = class 4 | high |
| 7 | https://ris.bka.gv.at/Dokumente/BgblAuth/BGBLA_2023_II_61/BGBLA_2023_II_61.pdf and its Anlage 4 (https://cert05external-www.360.lexisnexis.at/media/attachment/nor40251381ii_61_2023_anlage_4/pdf) | AT FNV Anlage 4 band table by category 1/3/4, High Power rule | high |
| 8 | https://oe3.oevsv.at/export/shared/.content/.galleries/pdf-Downloads/2023-03-13_FNV-Bandplan.pdf | AT per-band power cells (ÖVSV summary of FNV 2023) | medium |
| 9 | https://www.zakonyprolidi.cz/cs/2005-156 | CZ classes A/N, power, Příloha 1 tables | high |
| 10 | https://www.zakonyprolidi.cz/cs/2005-155 | CZ call-sign series (OK9 = N, OK1–7 = A) | high |
| 11 | https://www.zakonyprolidi.cz/cs/2005-157 | CZ HAREC/NOVICE certificates | high |
| 12 | https://ctu.gov.cz/sites/default/files/obsah/Prukazy/amaterske_zkousky_faq_05-2026.pdf | CZ rules still current in 2026; "750 W PEP" | high |
| 13 | https://static.slov-lex.sk/pdf/SK/ZZ/2022/291/ZZ_2022_291_20220901.pdf | SK classes N/E, CEPT mapping, upgrade rule, band plan, call-sign Annex 2 | high |
| 14 | https://www.om3ktr.sk/pp1.html | SK 2007 VPP: E 750 W / N 100 W, N Table 2 (superseded) | medium |
| 15 | https://cq.sk/navrh-novych-povolovacich-podmienok-pre-radioamaterske-stanice/ | SK 2022 draft: N 100 W, E 750 W, all bands | low |
| 16 | http://www.hamradio.sk/zacinajucim/novice_predpisy_odpovede.htm | SK pre-2022 N 100 W, E/N classes | medium |
| 17 | https://dziennikustaw.gov.pl/D2026000040601.pdf | PL Dz.U. 2026 poz. 406: categories 1/3/5/additional, bands, power, legacy A/B/C/D, call signs | high |
| 18 | https://dziennikustaw.gov.pl/D2015000001001.pdf | PL 2015 rules (category 3 band set before 2026) | high |
| 19 | https://bip.uke.gov.pl/jak-uzyskac-rezerwacje--pozwolenie--zezwolenie-tresc/sluzba-amatorska,6,50.html | PL UKE overview (CEPT labels, zaświadczenie since 12 Nov 2024) | high |
| 20 | https://net.jogtar.hu/jogszabaly?docid=a1300015.nmh | HU 15/2013 NMHH: grades, age rule, legacy certificates, call signs | high |
| 21 | https://net.jogtar.hu/jogszabaly?docid=a1500007.nmh&pagenum=2 | HU NFFF 7.2 band/power table per grade | high |
| 22 | https://qrp.hu/nmhh-uj-lehetosegek-mellett-megnyilik-a-60-meter/ | HU 2017 draft context (superseded) | low |
| 23 | https://www.uradni-list.si/glasilo-uradni-list-rs/vsebina/2023-01-0256?sop=2023-01-0256 | SI act UL 14/2023: classes, Tabela 1 power per class, mean-power definition, call-sign Tabela 2 | high |
| 24 | https://narodne-novine.nn.hr/clanci/sluzbeni/2022_12_150_2313.html | HR Pravilnik NN 150/2022: classes A/P, Tablica 1, PEP caps, legacy B/C | high |

## Open questions and unverified items

1. **DL:** whether an E holder upgrading to A may keep the DO call. If so, DO is only a lower bound. Not found in the AFuV or the Rufzeichenplan.
2. **OE:** how Leistungsstufe C (400 W, AFV § 9) interacts with the 2023 FNV note that non-High-Power bands are capped at "100 W or 200 W". The 160 m Class 1 figure (200 W) and the other per-band cells come from the ÖVSV summary, not from the FNV text itself.
3. **OK:** 630 m, 60 m and 4 m are absent from vyhláška 156/2005. Whether ČTÚ grants them by individual permit, and on what terms, is unverified. Legacy pre-2005 class mapping is not found.
4. **OM:** the **per-class bands and power are not in decree 291/2022**. The current values (N 100 W? N band set? E 750 W?) need confirmation from a current RÚ permit or the SZR. The mapping of legacy A/B/C/D to E/N is not found.
5. **SP:** band-specific limits for category 1 (2200 m, 630 m, 60 m, 6 m, 4 m, microwaves) come from KTPCz and the UKE annex, which were not fetched. The entry-into-force date of 1 May 2026 is computed from the publication rule.
6. **HA:** a new NFFF version takes effect **2026-11-15**. A comparison script showed the amateur section unchanged, but the jogtar target-date query may have returned the current text, so treat that as unconfirmed. It is also unconfirmed which rows carry the "* hand-keyed CW needs Morse exam" marker. Power type (PEP vs mean) is not stated.
7. **S5:** the class structure under the 2013/2018 acts and any legacy mapping are not verified. Absence of 2024–2026 amendments is based on search only.
8. **9A:** whether blank power cells for class A microwave bands mean the 1500 W cap. HR call-sign class practice (HRS) is not checked.
9. **Entry-level classes:** DL N, OE 3 and HA Kezdő are national entry levels. None is formally mapped to ECC Report 89 in the sources read, so each is marked "none".

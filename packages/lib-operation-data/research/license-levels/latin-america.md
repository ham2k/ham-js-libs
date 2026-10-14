# Amateur license levels — Latin America (LU, PY, HK, CE, YV)

As of 2026-10-14. Frequencies in kHz unless noted. Confidence tags: **[H]** = primary source fetched and read; **[M]** = society/secondary source or inference from a primary source; **[L]** = unverified / assumed.

Cross-cutting findings:

- **CEPT T/R 61-01:** none of the five countries appears in the Annex 4 non-CEPT list (checked the Feb 2024 and June 2022 editions, docdb.cept.org/download/4541 and /4045; only Peru appears from South America) **[H]**. ECC/REC (05)06 (novice) was not checked **[L]**.
- **CITEL IARP (Inter-American Convention, 1995):** OAS status table, seen only as a search excerpt because oas.org blocks automated fetches: Argentina acceded 1997, Brazil ratified 1999, Venezuela signed 1995 with no ratification shown **[M]**. Argentina's rules cite Ley 24.730 (IARP) **[H]**. Brazil's cite Decreto 3.241/1999 **[H]**. Chile's DS 523 Art. 18 refers to IARP "under conventions in force", and Chile signed the 2019 amendment **[M]**. Colombia's status was not verified **[L]**. The Convention's two permit classes are Class 1 (all bands) and Class 2 (above 30 MHz). Which national levels map to which permit class was **not verified** for any of the five **[L]**. A reasonable rule: a level with any HF privilege maps to Class 1.
- **UI term:** all four Spanish-speaking regulators say *categoría*, which renders as "License Category". Brazil says *classe*, which renders as "License Class". For one English label across entities, use **"License Class"**, the most familiar word to English-speaking hams. Show the local level name (e.g. "Novicio", "Classe C") as the value.

---

## Argentina

### 1. Regulator and rules

- **Regulator:** ENACOM (Ente Nacional de Comunicaciones), currently under government intervention.
- **Main rules:** *Reglamento General de Radioaficionados*, approved by **Resolución ENACOM 3635-E/2017** (30 Oct 2017; Boletín Oficial 7 Nov 2017; in force 90 days later, early Feb 2018). Annex IF-2017-25743421-APN-DNPYC#ENACOM, 42 pages. Its Anexo A is the band plan, which assigns privileges by category **[H]**.
- **Amended by Resolución ENACOM 1186/2024** (29 Nov 2024, published 3 Dec 2024). Licences no longer expire, the 5-year renewal is abolished, and a criminal-record certificate is still required every 5 years. **Categories and bands are unchanged** **[H]**.
- **Repealed:** Res. SC 50/1998, 2337/1998, 138/2002 and CNC 1263/1998.

### 2. Term

- **Local:** "categoría" (de Radioaficionado).
- **English:** License Category; in the UI, "License Class".

### 3. Current levels (lowest to highest)

| Order | Official name | English | Code (Anexo A) | Min. requirements | Issued |
|---|---|---|---|---|---|
| 1 | NOVICIO | Novice | N | Age 9+; written exams incl. theoretical Morse | yes |
| 2 | GENERAL | General | G | Age 13+; 3 years continuous as Novicio; Morse receive 5 wpm | yes (by upgrade) |
| 3 | SUPERIOR | Superior | S | 3 years as General; Morse 10 wpm receive and send | yes (by upgrade) |
| 4 | ESPECIAL | Special | (E, unofficial) | Superior plus 20 consecutive years of activity; distinction only | yes |

- §4.8: "La categoría ESPECIAL no otorga prerrogativa alguna con respecto a la categoría SUPERIOR". **For privileges, Especial = Superior** **[H]**.
- Radio clubs and authorised institutions are licensed as SUPERIOR (§3.1, 3.10, 3.17) **[H]**.

### 4. Legacy levels (Res. 50/1998)

Transitional rules in §14.1 **[H]**:

| Old category | New category |
|---|---|
| INICIAL | NOVICIO (had to pass the written Morse exam if not already taken) |
| NOVICIO | NOVICIO |
| INTERMEDIA | GENERAL |
| GENERAL | GENERAL |
| SUPERIOR | SUPERIOR |

- Converted Inicial and Intermedia licences were barred from upgrading for 5 years after reissue (§14.1.3).
- Inicial and Intermedia no longer exist as privilege levels. An operator may still *call* themselves "Intermedia", but the privileges are General's **[M]**.

### 5. Privileges

**Power** (§4.11) **[H]**. The limit is *potencia de portadora de RF*, defined in §1.4.24 as "potencia media … medida a la salida de la última etapa de RF del emisor, en ausencia de modulación", i.e. mean carrier power at the transmitter output.

| Level | Max power |
|---|---|
| Novicio | 200 W |
| General | 1000 W |
| Superior / Especial | 1500 W |

Other power rules:

- **AM:** 70% of the above (§4.12).
- **EME:** 2000 W for all categories (§4.11.5).
- **Band caps:**
  - 2200 m: 1 W EIRP
  - 630 m: 5 W EIRP
  - 60 m: 25 W EIRP
  - 30 m: 250 W, and contests are prohibited
  - 432.08–432.10 MHz: 1 W for N and G **[H]**

How "carrier power" applies to SSB is not spelled out (no PEP figure is given). Treat the figure as transmitter output power **[M]**.

**Bands by category** (Anexo A; X = allowed) **[H]**. Mode-by-segment rules (CW-only, digital, SSB, AM…) are the same for every category. Only the restrictions listed apply to one level.

| Band | Range (kHz) | N | G | S | Level-specific note |
|---|---|---|---|---|---|
| 2200 m | 135.7–137.8 | X | X | X | 1 W EIRP |
| 630 m | 472–479 | X | X | X | CW/digital, 5 W EIRP |
| 160 m | 1800–2000 | X | X | X | |
| 80 m | 3500–3800 (primary), 3800–4000 (secondary) | X | X | X | |
| 60 m | 5351.5–5366.5 | X | X | X | 25 W EIRP |
| 40 m | 7000–7300 | X | X | X | |
| 30 m | 10100–10150 | – | – | X | **Superior only**; 250 W; no contests |
| 20 m | 14000–14070 | – | X | X | CW |
| 20 m | 14070–14099 | X | X | X | CW, digital, RTTY, packet. **Novice's only 20 m segment** |
| 20 m | 14099–14101 | (beacons) | | | IBP beacons only |
| 20 m | 14101–14350 | – | X | X | |
| 17 m | 18068–18168 | – | X | X | Novice: none. The table marks N only on the 18109–18111 IBP beacon slot, which is not usable for QSOs |
| 15 m | 21000–21070 | – | X | X | CW |
| 15 m | 21070–21149 | X | X | X | CW + digital (21070–21125); CW (21125–21149) |
| 15 m | 21151–21250 | – | X | X | CW/SSB |
| 15 m | 21200–21310 | X* | X* | X | *Satellite segment: N and G may use it **only via satellite** |
| 15 m | 21250–21450 | – | – | X | **Superior only** |
| 12 m | 24890–24990 | – | X | X | No Novice |
| 10 m | 28000–28300 | X | X | X | |
| 10 m | 28300–28350 | X* | X* | X | *N and G: **DX contacts only** |
| 10 m | 28350–29300 | X | X | X | |
| 10 m | 29300–29510 | X* | X* | X | *Satellite only for N and G (and for everyone, satellite-exclusive) |
| 10 m | 29510–29700 | X | X | X | FM / repeaters |
| 6 m | 50–54 MHz | X | X | X | 51.0–51.1 MHz: **Novice CW only** |
| 2 m | 144–148 MHz | X | X | X | |
| 1.25 m | 220–225 MHz | X | X | X | 220.5–221 MHz: **Novice packet only** |
| 70 cm | 430–440 MHz | X | X | X | 432.08–432.10 MHz: N and G weak-signal only, 1 W |
| 23 cm | 1240–1300 MHz | X | X | X | |
| 13 cm | 2390–2450 MHz | X | X | X | |
| 9 cm | 3300–3400 MHz | X | X | X | |
| 5 cm | 5650–5925 MHz | X | X | X | |
| 3 cm | 10.0–10.5 GHz | X | X | X | |
| 1.2 cm | 24.0–24.25 GHz | X | X | X | |
| 6 mm | 47.0–47.2 GHz | X | X | X | |

Novice summary: 160 / 80 / 60 / 40 m in full, a slice of 20 m and 15 m, 10 m and everything above. No 30, 17 or 12 m.

### 6. Callsign inference

The structure is prefix (LU, LW, L2–L9, AY/AZ special…) + digit + suffix. The suffix's first letter(s) encode the **province**, not the category (§8.1 table, e.g. D–E = Buenos Aires, H = Córdoba) **[H]**.

The only category signal: a **two-letter suffix** may be granted on request only to SUPERIOR or ESPECIAL (§8.3) **[H]**. Old callsigns are kept unchanged (§14.1.7), and Res. 50/98-era two-letter calls may belong to anyone who held one then **[M]**.

**Rule:** the category cannot be inferred from an LU/LW callsign. A 1×2 or 2×2 suffix ("LU5AB") suggests Superior/Especial (low–medium reliability).

### 7. Sources

- https://www.boletinoficial.gob.ar/detalleAviso/primera/174291/20171107 and the PDF /pdf/aviso/primera/174291/20171107: Res. 3635-E/2017 resolution text (repeals, in-force date) **[H]**.
- The annex, fetched from the same Boletín Oficial page via the `/pdf/download_anexo` POST endpoint (anexo id 5426600): full Reglamento including §4 (categories, requirements, power), §8 (callsigns), §14 (transitional) and Anexo A (band plan by N/G/S) **[H]**.
- https://www.boletinoficial.gob.ar/pdf/aviso/primera/317598/20250507: Res. 1186/2024 (licences no longer expire) **[H]**.
- https://www.argentina.gob.ar/normativa/nacional/norma-286986: norm record; it lists no other modifying norm **[H]**.
- https://www.qsl.net/lu7dot/prefijos.htm: LU/LW usage **[M]**.

**Not verified:**

- How Argentina maps categories to IARP Class 1/2 (Res. SC 3745/1997 was not fetched).
- Whether any band-plan amendment after 2017 exists (none found).

```json
{"entities":["LU","LW","AY","AZ","L2","L3","L4","L5","L6","L7","L8","L9","LO","LP","LQ","LR","LS","LT","LV"],"regulator":"ENACOM","rules":"Resolución ENACOM 3635-E/2017 (Reglamento General de Radioaficionados, Anexo A band plan) as amended by Res. ENACOM 1186/2024","termLocal":"categoría","termEnglish":"License Category","levels":[
{"code":"N","name":"Novice","nameLocal":"Novicio","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":200,"powerNote":"RF carrier power (mean, transmitter output); AM 70%; EME 2000 W; 60m 25 W EIRP; 2200m 1 W EIRP; 630m 5 W EIRP","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all"]]},
{"band":"630m","ranges":[[472,479,"CW"],[472,479,"data"]]},
{"band":"160m","ranges":[[1800,2000,"all"]]},
{"band":"80m","ranges":[[3500,4000,"all"]]},
{"band":"60m","ranges":[[5351.5,5366.5,"all"]]},
{"band":"40m","ranges":[[7000,7300,"all"]]},
{"band":"20m","ranges":[[14070,14099,"CW"],[14070,14099,"data"],[14070,14099,"RTTY"]]},
{"band":"15m","ranges":[[21070,21149,"CW"],[21070,21125,"data"],[21070,21125,"RTTY"],[21200,21310,"all"]]},
{"band":"10m","ranges":[[28000,28300,"all"],[28300,28350,"all"],[28350,29300,"all"],[29300,29510,"all"],[29510,29700,"all"]]},
{"band":"6m","ranges":[[50000,51000,"all"],[51000,51100,"CW"],[51100,54000,"all"]]},
{"band":"2m","ranges":[[144000,148000,"all"]]},
{"band":"1.25m","ranges":[[220000,220500,"all"],[220500,221000,"data"],[221000,225000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all"]]},
{"band":"13cm","ranges":[[2390000,2450000,"all"]]},
{"band":"9cm","ranges":[[3300000,3400000,"all"]]},
{"band":"5cm","ranges":[[5650000,5925000,"all"]]},
{"band":"3cm","ranges":[[10000000,10500000,"all"]]},
{"band":"1.2cm","ranges":[[24000000,24250000,"all"]]},
{"band":"6mm","ranges":[[47000000,47200000,"all"]]}],
"notes":"No 30m, 17m or 12m. 15m 21200-21310 and 10m 29300-29510 only via satellite; 10m 28300-28350 DX contacts only; 432.08-432.10 MHz weak-signal, 1 W max. Within each range the band plan's per-segment mode rules apply to all categories."},
{"code":"G","name":"General","nameLocal":"General","order":2,"cept":"none","issued":true,"legacy":false,"maxPowerW":1000,"powerNote":"RF carrier power (mean, transmitter output); AM 70%; EME 2000 W; band EIRP caps as Novice","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all"]]},
{"band":"630m","ranges":[[472,479,"CW"],[472,479,"data"]]},
{"band":"160m","ranges":[[1800,2000,"all"]]},
{"band":"80m","ranges":[[3500,4000,"all"]]},
{"band":"60m","ranges":[[5351.5,5366.5,"all"]]},
{"band":"40m","ranges":[[7000,7300,"all"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21250,"all"],[21250,21310,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,54000,"all"]]},
{"band":"2m","ranges":[[144000,148000,"all"]]},
{"band":"1.25m","ranges":[[220000,225000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all"]]},
{"band":"13cm","ranges":[[2390000,2450000,"all"]]},
{"band":"9cm","ranges":[[3300000,3400000,"all"]]},
{"band":"5cm","ranges":[[5650000,5925000,"all"]]},
{"band":"3cm","ranges":[[10000000,10500000,"all"]]},
{"band":"1.2cm","ranges":[[24000000,24250000,"all"]]},
{"band":"6mm","ranges":[[47000000,47200000,"all"]]}],
"notes":"No 30m; no 15m 21250-21450 (21250-21310 satellite only). 10m 28300-28350 DX only and 29300-29510 satellite only. Former Res.50/98 'Intermedia' holders are General."},
{"code":"S","name":"Superior","nameLocal":"Superior","order":3,"cept":"none","issued":true,"legacy":false,"maxPowerW":1500,"powerNote":"RF carrier power (mean, transmitter output); AM 70%; EME 2000 W; 30m max 250 W; band EIRP caps as Novice","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all"]]},
{"band":"630m","ranges":[[472,479,"CW"],[472,479,"data"]]},
{"band":"160m","ranges":[[1800,2000,"all"]]},
{"band":"80m","ranges":[[3500,4000,"all"]]},
{"band":"60m","ranges":[[5351.5,5366.5,"all"]]},
{"band":"40m","ranges":[[7000,7300,"all"]]},
{"band":"30m","ranges":[[10100,10150,"CW"],[10130,10150,"data"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,54000,"all"]]},
{"band":"2m","ranges":[[144000,148000,"all"]]},
{"band":"1.25m","ranges":[[220000,225000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all"]]},
{"band":"13cm","ranges":[[2390000,2450000,"all"]]},
{"band":"9cm","ranges":[[3300000,3400000,"all"]]},
{"band":"5cm","ranges":[[5650000,5925000,"all"]]},
{"band":"3cm","ranges":[[10000000,10500000,"all"]]},
{"band":"1.2cm","ranges":[[24000000,24250000,"all"]]},
{"band":"6mm","ranges":[[47000000,47200000,"all"]]}],
"notes":"All bands. 30m: CW 10100-10130, CW/digital 10130-10150, 250 W, no contests. Radio clubs are licensed Superior."},
{"code":"E","name":"Special","nameLocal":"Especial","order":4,"cept":"none","issued":true,"legacy":false,"maxPowerW":1500,"powerNote":"Same as Superior","bands":[],"notes":"Honorific: Superior + 20 consecutive years. 'No otorga prerrogativa alguna con respecto a la categoría SUPERIOR' (§4.8). Use Superior's band table. Code 'E' is unofficial."},
{"code":"INICIAL","name":"Initial (legacy)","nameLocal":"Inicial","order":0,"cept":"none","issued":false,"legacy":true,"maxPowerW":200,"powerNote":"Converted to Novicio","bands":[],"notes":"Res. SC 50/1998 category; converted to Novicio by Res. 3635/2017 §14.1.1.1. Use Novicio privileges."},
{"code":"INTERMEDIA","name":"Intermediate (legacy)","nameLocal":"Intermedia","order":0,"cept":"none","issued":false,"legacy":true,"maxPowerW":1000,"powerNote":"Converted to General","bands":[],"notes":"Res. SC 50/1998 category; converted to General by §14.1.1.3. Use General privileges."}],
"callsignInference":"Not inferable. Suffix letters encode the province, not the category. A two-letter suffix may be granted on request only to Superior/Especial (§8.3), so a 2-letter suffix weakly suggests Superior/Especial; pre-2018 calls were kept unchanged, so this is not reliable.","asOf":"2026-10","confidence":"high"}
```

---

## Brazil

### 1. Regulator and rules (all **[H]**)

**Regulator:** Anatel (Agência Nacional de Telecomunicações). The rules have been reorganised since Resolução 697/2018 and now sit in three layers:

- **Resolução Anatel nº 777/2025, the RGST** (28 Apr 2025). Arts. 274–282 cover the amateur service. **Art. 277 defines Classes C, B and A** and the time-in-class rules. It **revoked Res. 449/2006**, the old Regulamento do Serviço de Radioamador.
- **Ato SOR nº 926/2024** (1 Feb 2024; DOU 5 Feb 2024; corrected 6 Feb 2024): *Requisitos Técnicos e Operacionais para uso de radiofrequências associadas ao Serviço de Radioamador*. **Table I gives bands by class, §5.2 gives power by class**, §7 is the band plan by mode.
- **Ato nº 3448/2026** (11 Mar 2026; DOU 13 Mar 2026): operating requirements, the COER exam (**Morse removed**), call-sign formation (Tables II–V), IARP, and foreign amateurs.

**Superseded:**

- Res. 697/2018, replaced by Res. 759/2023 (the PDFF, now Res. 772/2025).
- Res. 452/2006 (old radio-frequency conditions).
- Res. 449/2006.

### 2. Term

- **Local:** "classe" (do COER, the *Certificado de Operador de Estação de Radioamador*).
- **English:** License Class; in the UI, "License Class".

### 3. Current levels (lowest to highest)

| Order | Name | English | Code | Requirements (Res. 777/2025 Art. 277; Ato 3448 §11) | Issued |
|---|---|---|---|---|---|
| 1 | Classe "C" | Class C (entry) | C | Exams: legislation, technique & ethics, basic electronics (15 questions each) | yes |
| 2 | Classe "B" | Class B | B | Over 18: direct exam. Under 18: 2 years as C. Exams have 20 questions each | yes |
| 3 | Classe "A" | Class A | A | 1 year as B; exams have 30 questions each | yes |

Other rules:

- **Foreign licences:** a foreign licensee whose class can't be matched is licensed as **Class C** (Ato 3448 §8.4).
- **Repeaters:** a legal entity's repeater needs a Class A operator responsible for it (RGST Art. 10-B §4).
- **Morse:** no exam for any class since Ato 3448/2026. The old Res. 449 required Morse for B and A.

### 4. Legacy levels

- **Class "D"** was VHF-and-up, about 50 W. It was abolished by Res. 449/2006, which ordered migration to Class C: first within 24 months, later extended to 60 months by Res. 541/2010, so roughly by **Jan 2012** **[H]**. No Class D holders should remain.
- **Ex-Class D operators are Class C.** Class D is not a current level.

### 5. Privileges

**Power** (Ato 926 §5.2) **[H]**: **mean power at the transmitter output, over the active duty cycle**.

| Class | Max power |
|---|---|
| A | 1500 W |
| B | 1000 W |
| C | 100 W |

Overrides (§5.2.1), all levels:

- 135.7–137.8 kHz: 1 W EIRP
- 472–479 kHz: 5 W EIRP
- 5351.5–5366.5 kHz: 25 W EIRP
- 2300–2450 MHz, 3400–3500 MHz and 47–47.2 GHz terrestrial links: 100 W EIRP

**Bands by class** (Ato 926, Table I) **[H]**:

| Band | Range (kHz unless noted) | C | B | A |
|---|---|---|---|---|
| 2200 m | 135.7–137.8 | X | X | X |
| 630 m | 472–479 | X | X | X |
| 160 m | 1800–1850 | X | X | X |
| 160 m | 1850–2000 | – | – | X |
| 80 m | 3500–3800 | X | X | X |
| 80 m | 3800–4000 | – | – | X |
| 60 m | 5351.5–5366.5 | – | – | X |
| 40 m | 7000–7047 | X | X | X |
| 40 m | 7047–7300 | – | X | X |
| 30 m | 10100–10150 | – | – | X |
| 20 m | 14000–14350 | – | – | X |
| 17 m | 18068–18168 | – | – | X |
| 15 m | 21000–21150 | X | X | X |
| 15 m | 21150–21300 | – | X | X |
| 15 m | 21300–21450 | – | – | X |
| 12 m | 24890–24990 | X | X | X |
| 10 m | 28.0–29.7 MHz | X | X | X |
| 6 m | 50–54 MHz | X | X | X |
| 2 m | 144–148 MHz | X | X | X |
| 1.25 m | 220–225 MHz | X | X | X |
| 70 cm | 430–440 MHz | X | X | X |
| 33 cm | 902–907.5 and 915–928 MHz | X | X | X |
| 23 cm | 1240–1300 MHz | X | X | X |
| 13 cm | 2300–2450 MHz | X | X | X |
| 9 cm | 3300–3500 MHz | X | X | X |
| 5 cm | 5650–5925 MHz | X | X | X |
| 3 cm | 10.0–10.5 GHz | X | X | X |
| 1.2 cm | 24.0–24.25 GHz | X | X | X |
| mm-wave | 47–47.2, 76–81.5, 122.25–123, 134–141, 241–250 GHz | X | X | X |

**Note:** Class B has no 20 m, 17 m, 30 m or 60 m, and no 80 m above 3800 or 160 m above 1850. This is a well-known Brazilian quirk, confirmed in Table I **[H]**.

Mode segmentation (Ato 926 §7) applies equally to every class. No mode restriction is tied to class **[H]**.

### 6. Callsign inference (Ato 3448 §12.10–12.12, Tables II–V) **[H]**

**Class C:**

- Regular calls: **PU** + region digit + 3 letters. The suffix block identifies the state, e.g. PU2KAA–PU2YZZ is São Paulo.
- **PV2KAA–PV2YZZ** is also Class C (São Paulo overflow).
- Islands and Antarctica: PU0 + 3 letters.

**Classes A and B** share the same prefixes:

- State prefixes: PY, PP, PT, PQ, PR, PS, PV, PW + digit, with a 2-letter suffix (AA–ZZ) or a 3-letter suffix (AAA–YZZ).
- São Paulo: PY2 or PR2.
- Islands and Antarctica: PY0.

**Special event calls:**

- Class C: ZV–ZZ + digit with a suffix whose first letter is **"W"**.
- Classes A and B: ZV–ZZ.
- **PP–PX special prefixes:** Class A only, and only with 2 or more international contests.

**Foreign residents:** the suffix starts with "Z".

**Rule:**

- PU (any), or PV2 with a K–Y 3-letter suffix → **C** (high reliability).
- PY/PP/PT/PQ/PR/PS/PV/PW (non-PV2-Class-C) → **A or B**. The callsign cannot tell A from B.
- PP–PX special prefixes (e.g. PX2, PQ5 special) → A.
- ZV–ZZ special with a W suffix → C.

Upgrading from C means a new licence (Ato 3448 §5.3), and in practice a new non-PU callsign **[M]**.

### 7. Sources

- https://informacoes.anatel.gov.br/legislacao/atos-de-requisitos-tecnicos-de-gestao-do-espectro/2024/1919-ato-926: Ato 926/2024, Table I (bands by class), §5.2 (power), band plan **[H]**.
- https://informacoes.anatel.gov.br/legislacao/atos-de-requisitos-operacionais-de-outorga-e-licenciamento/2148-ato-3448-26: Ato 3448/2026 (exams by class, callsign tables, IARP, foreigners → C) **[H]**.
- https://informacoes.anatel.gov.br/legislacao/resolucoes/2025/2022-resolucao-777: RGST Art. 277 (class definitions and time-in-class) **[H]**.
- https://informacoes.anatel.gov.br/legislacao/resolucoes/2006/93-resolucao-449: Res. 449/2006, marked REVOGADA by Res. 777/2025; Class D migration in Art. 74 **[H]**.
- https://informacoes.anatel.gov.br/legislacao/resolucoes/2018/1157-resolucao-697: Res. 697/2018, revoked by Res. 759/2023 **[H]**.
- gov.br/anatel news page and its "cartilha" PDF: returned HTTP 401 (restricted), not read.

**Not verified:**

- Res. 777's page notes postponed effective dates (Acórdãos 202/2025 and 321/2025) for some articles. I did not confirm whether Arts. 274–282 are affected **[L]**. Ato 3448 and Ato 926 are in force regardless.
- IARP class mapping.

```json
{"entities":["PY","PP","PQ","PR","PS","PT","PU","PV","PW","PX","ZV","ZW","ZX","ZY","ZZ"],"regulator":"Anatel","rules":"Res. Anatel 777/2025 (RGST) Art. 277 (classes); Ato SOR 926/2024 (bands/power by class); Ato 3448/2026 (operations, exams, callsigns)","termLocal":"classe","termEnglish":"License Class","levels":[
{"code":"C","name":"Class C","nameLocal":"Classe C","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"Mean transmitter output power over duty cycle; 2200m 1 W EIRP, 630m 5 W EIRP","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all"]]},
{"band":"630m","ranges":[[472,479,"all"]]},
{"band":"160m","ranges":[[1800,1850,"all"]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"40m","ranges":[[7000,7047,"all"]]},
{"band":"15m","ranges":[[21000,21150,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,54000,"all"]]},
{"band":"2m","ranges":[[144000,148000,"all"]]},
{"band":"1.25m","ranges":[[220000,225000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]},
{"band":"33cm","ranges":[[902000,907500,"all"],[915000,928000,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all"]]},
{"band":"13cm","ranges":[[2300000,2450000,"all"]]},
{"band":"9cm","ranges":[[3300000,3500000,"all"]]},
{"band":"5cm","ranges":[[5650000,5925000,"all"]]},
{"band":"3cm","ranges":[[10000000,10500000,"all"]]},
{"band":"1.2cm","ranges":[[24000000,24250000,"all"]]}],
"notes":"No 60/30/20/17m; 160m only 1800-1850; 80m only to 3800; 40m only 7000-7047; 15m only 21000-21150. mm-wave bands (47, 76-81.5, 122.25-123, 134-141, 241-250 GHz) also all classes. Ex-Class D holders migrated here."},
{"code":"B","name":"Class B","nameLocal":"Classe B","order":2,"cept":"none","issued":true,"legacy":false,"maxPowerW":1000,"powerNote":"Mean transmitter output power over duty cycle; EIRP caps as Class C","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all"]]},
{"band":"630m","ranges":[[472,479,"all"]]},
{"band":"160m","ranges":[[1800,1850,"all"]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"40m","ranges":[[7000,7300,"all"]]},
{"band":"15m","ranges":[[21000,21300,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,54000,"all"]]},
{"band":"2m","ranges":[[144000,148000,"all"]]},
{"band":"1.25m","ranges":[[220000,225000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]},
{"band":"33cm","ranges":[[902000,907500,"all"],[915000,928000,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all"]]},
{"band":"13cm","ranges":[[2300000,2450000,"all"]]},
{"band":"9cm","ranges":[[3300000,3500000,"all"]]},
{"band":"5cm","ranges":[[5650000,5925000,"all"]]},
{"band":"3cm","ranges":[[10000000,10500000,"all"]]},
{"band":"1.2cm","ranges":[[24000000,24250000,"all"]]}],
"notes":"No 60/30/20/17m; 160m only to 1850; 80m only to 3800; 15m only to 21300."},
{"code":"A","name":"Class A","nameLocal":"Classe A","order":3,"cept":"none","issued":true,"legacy":false,"maxPowerW":1500,"powerNote":"Mean transmitter output power over duty cycle; 60m 25 W EIRP; 2200m 1 W EIRP; 630m 5 W EIRP","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all"]]},
{"band":"630m","ranges":[[472,479,"all"]]},
{"band":"160m","ranges":[[1800,2000,"all"]]},
{"band":"80m","ranges":[[3500,4000,"all"]]},
{"band":"60m","ranges":[[5351.5,5366.5,"all"]]},
{"band":"40m","ranges":[[7000,7300,"all"]]},
{"band":"30m","ranges":[[10100,10150,"all"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,54000,"all"]]},
{"band":"2m","ranges":[[144000,148000,"all"]]},
{"band":"1.25m","ranges":[[220000,225000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]},
{"band":"33cm","ranges":[[902000,907500,"all"],[915000,928000,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all"]]},
{"band":"13cm","ranges":[[2300000,2450000,"all"]]},
{"band":"9cm","ranges":[[3300000,3500000,"all"]]},
{"band":"5cm","ranges":[[5650000,5925000,"all"]]},
{"band":"3cm","ranges":[[10000000,10500000,"all"]]},
{"band":"1.2cm","ranges":[[24000000,24250000,"all"]]}],
"notes":"All bands. Per-segment mode rules (Ato 926 §7) are not class-dependent."},
{"code":"D","name":"Class D (legacy)","nameLocal":"Classe D","order":0,"cept":"none","issued":false,"legacy":true,"maxPowerW":100,"powerNote":"Migrated to Class C","bands":[],"notes":"Abolished by Res. 449/2006; mandatory migration to Class C by ~Jan 2012 (Res. 541/2010). Treat as Class C."}],
"callsignInference":"PU + digit + 3 letters (and PV2KAA-PV2YZZ in São Paulo) = Class C (high reliability). PY/PP/PT/PQ/PR/PS/PV/PW + digit + 2-3 letters = Class A or B (cannot distinguish). Special calls: PP-PX special prefixes = Class A only; ZV-ZZ with suffix starting 'W' = Class C. Suffix starting 'Z' = foreign resident.","asOf":"2026-10","confidence":"high"}
```

---

## Colombia

### 1. Regulator and rules

- **Regulator:** MinTIC (Ministerio de Tecnologías de la Información y las Comunicaciones).
- **Rules:** **Decreto 1078 de 2015** (DUR-TIC), Libro 2, Parte 2, **Título 5 "Servicio de Radioaficionado"**, arts. 2.2.5.1.1–2.2.5.9.x **[H]**.
  - It compiles **Decreto 963 de 2009** unchanged on categories, bands, callsigns and power **[H]**.
  - Later edits touch only repeaters and fees (UVT values by Decreto 2640/2022) **[H]**.
  - Underlying law: Ley 94 de 1993.
- **Band edges** come from the *Cuadro Nacional de Atribución de Bandas de Frecuencias* (CNABF, managed by ANE). Art. 2.2.5.6.1 adopts the IARU Region 2 frequencies as accepted in the CNABF **[H]**.
- **Reform status:** no pending reform of categories was found **[M]**.

### 2. Term

- **Local:** "categoría" (de la licencia).
- **English:** License Category; in the UI, "License Class".

### 3. Current levels (lowest to highest)

Art. 2.2.5.2.2–2.2.5.2.3 **[H]**:

| Order | Official name | English | Code | Requirements | Licence term | Issued |
|---|---|---|---|---|---|---|
| 1 | Segunda Categoría o de Novicio | Second Category / Novice | none official (suggest "N") | MinTIC aptitude exam (online via RABCA) | 5 years | yes |
| 2 | Primera Categoría o de Experto | First Category / Expert | (suggest "E") | 4 years as Novicio, **or** 2 years + 50 QSOs (25 foreign DXCC), **or** 2 years + 1 merit activity; logbook | 10 years | yes |
| 3 | Categoría Avanzada | Advanced | (suggest "A") | 6 years as Experto, **or** 3 years + 100 QSOs (50 foreign), **or** 3 years + 2 merit activities | 10 years | yes |

Primera and Avanzada have **identical bands and modes**. They differ in power and in the right to request special temporary callsigns, which only Avanzada has.

### 4. Legacy levels

Decreto 2765/1997 (repealed) used the same three names: Segunda, Primera, Avanzada **[M]**. There is no mapping issue.

### 5. Privileges

**Bands:**

- **Avanzada and Primera/Experto:** "todas las frecuencias y bandas … atribuidas al servicio, en todas las modalidades … de conformidad con el CNABF" (arts. 2.2.5.6.3 and 2.2.5.6.4) **[H]**.
- **Segunda/Novicio:** an explicit list (art. 2.2.5.6.5) **[H]**, below.

| Band | Range (kHz) | Novice emission types | Novice mode tags |
|---|---|---|---|
| 160 m | 1800–2000 | A1A, A2A, P0A, X3E; A3E, R3E, J3E, F3E | CW + phone |
| 80 m | 3500–3750 | A1A, A2A, P0A, X3E | CW |
| 80 m | 3525–3750 | A3E, R3E, J3E, F3E | phone |
| 40 m | 7000–7300 | A1A, A2A, P0A, X3E | CW |
| 40 m | 7040–7300 | A3E, R3E, J3E, F3E | phone |
| 15 m | 21000–21450 | A1A, A2A, P0A, X3E | **CW only** |
| 10 m | 28000–29500 | A1A, A2A, P0A, X3E | CW |
| 10 m | 28300–29500 | A3E, R3E, J3E, F3E | phone |
| 6 m | 50–54 MHz | A1A, A2A, P0A, X3E | **CW only** |
| 2 m | 144–148 MHz | A1A, A2A, P0A, X3E; A3E, R3E, J3E, F3E | CW + phone |
| 70 cm | 430–440 MHz | A1A, A2A, P0A, X3E | **CW only** (as written) |

Novicio is **not** listed for:

- 60, 30, 20, 17 or 12 m
- 80 m above 3750 kHz
- 10 m above 29.5 MHz
- 1.25 m, or any band above 440 MHz

Read strictly, the list also contains **no data or RTTY emissions** (F1B, J2B, etc.), so digital modes are not authorised for Novicio. Some of this is probably a drafting artefact: CW only on 70 cm and 6 m, and the "X3E" entries. It is the official text **[H]**, but how it is enforced was not verified **[L]**.

**Power** (art. 2.2.5.7.4; PEP defined as mean power supplied to the antenna feed line during one RF cycle at the envelope crest) **[H]**:

| Range | Avanzada | Primera/Experto | Segunda/Novicio |
|---|---|---|---|
| MF (160 m) | 2000 W PEP | 600 W PEP | 200 W PEP |
| HF fixed | 2000 W PEP | 600 W PEP | 100 W PEP |
| HF mobile | 200 W PEP | 100 W PEP | 50 W PEP |
| VHF (fixed and mobile) | 100 W PEP | 50 W PEP | 25 W PEP |
| UHF | 50 W PEP | 50 W PEP | 25 W PEP |
| SHF | 50 W fixed / 25 W mobile | 25 W | — (no privilege) |
| EHF | 10 W | 10 W | — |

Avanzada may also use **2000 W PEP for EME on VHF/UHF**.

**Band edges for Primera and Avanzada:** the CNABF amateur table was **not fetched** **[L]**. The JSON uses the ITU/IARU Region 2 edges: 160 m 1800–2000, 80 m 3500–4000, 30 m 10100–10150, 20 m 14000–14350, 17 m 18068–18168, 15 m 21000–21450, 12 m 24890–24990, 10 m 28000–29700, 6 m 50–54 MHz, 2 m 144–148, 1.25 m 220–225, 70 cm 430–440, 23 cm 1240–1300.

Whether Colombia allocates **60 m** (5351.5–5366.5) to amateurs is **unverified** **[L]**.

### 6. Callsign inference

Art. 2.2.5.7.1 **[H]**: **HJ** + zone digit + 1–3 letters = **Segunda/Novicio**. **HK** + digit + 1–3 letters = **Primera or Avanzada**.

Exceptions:

- Associations use HK.
- Temporary or special calls use **5J/5K** (associations, art. 2.2.5.4.6). Avanzada may request special calls.
- Zone 0 = insular territory (San Andrés etc.).

**Rule:**

- HJ → Novice (reliable if the operator re-licensed on upgrade, which the rule implies) **[M]**.
- HK → Expert or Advanced (cannot distinguish).
- 5J/5K → special, unknown level.

### 7. Sources

- https://normograma.mintic.gov.co/mintic/compilacion/docs/decreto_1078_2015.htm: current consolidated DUR-TIC, Título 5 (categories, requirements, novice bands, callsigns, power) **[H]**.
- https://mintic.gov.co/portal/715/articles-3953_Decreto_963_2009.pdf: original Decreto 963/2009 (power table layout) **[H]**.
- https://cancilleria.gov.co/sites/default/files/Normograma/docs/pdf/decreto_1078_2015_pr004.pdf: DUR excerpt **[H]**.
- https://www.mintic.gov.co/portal/715/w3-article-3946.html (RABCA novice licence page; search snippet only): online exam **[M]**.

**Not verified:**

- The CNABF amateur band table (60 m; exact edges).
- Enforcement of the "no digital for Novicio" reading.
- Colombia's IARP status.

```json
{"entities":["HK","HJ","5J","5K"],"regulator":"MinTIC","rules":"Decreto 1078 de 2015 (DUR-TIC) Libro 2 Parte 2 Título 5, compiling Decreto 963 de 2009","termLocal":"categoría","termEnglish":"License Category","levels":[
{"code":"N","name":"Second Category / Novice","nameLocal":"Segunda Categoría o de Novicio","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"PEP into antenna feed line: HF fixed 100 W, HF mobile 50 W, MF (160m) 200 W, VHF 25 W, UHF 25 W; no SHF/EHF","bands":[
{"band":"160m","ranges":[[1800,2000,"CW"],[1800,2000,"phone"]]},
{"band":"80m","ranges":[[3500,3750,"CW"],[3525,3750,"phone"]]},
{"band":"40m","ranges":[[7000,7300,"CW"],[7040,7300,"phone"]]},
{"band":"15m","ranges":[[21000,21450,"CW"]]},
{"band":"10m","ranges":[[28000,29500,"CW"],[28300,29500,"phone"]]},
{"band":"6m","ranges":[[50000,54000,"CW"]]},
{"band":"2m","ranges":[[144000,148000,"CW"],[144000,148000,"phone"]]},
{"band":"70cm","ranges":[[430000,440000,"CW"]]}],
"notes":"Code 'N' unofficial. No data/RTTY emissions listed for Novice. No 60/30/20/17/12m, no 1.25m, nothing above 440 MHz. HJ prefix."},
{"code":"E","name":"First Category / Expert","nameLocal":"Primera Categoría o de Experto","order":2,"cept":"none","issued":true,"legacy":false,"maxPowerW":600,"powerNote":"PEP into feed line: MF/HF fixed 600 W, HF mobile 100 W, VHF 50 W, UHF 50 W, SHF 25 W, EHF 10 W","bands":[
{"band":"160m","ranges":[[1800,2000,"all"]]},
{"band":"80m","ranges":[[3500,4000,"all"]]},
{"band":"40m","ranges":[[7000,7300,"all"]]},
{"band":"30m","ranges":[[10100,10150,"all"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,54000,"all"]]},
{"band":"2m","ranges":[[144000,148000,"all"]]},
{"band":"1.25m","ranges":[[220000,225000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all"]]}],
"notes":"All bands allocated in the CNABF; edges here are ITU/IARU R2 assumptions (CNABF not fetched). 60m unverified. HK prefix. Code 'E' unofficial."},
{"code":"A","name":"Advanced","nameLocal":"Categoría Avanzada","order":3,"cept":"none","issued":true,"legacy":false,"maxPowerW":2000,"powerNote":"PEP into feed line: MF/HF fixed 2000 W, HF mobile 200 W, VHF 100 W, UHF 50 W, SHF 50 W fixed/25 W mobile, EHF 10 W; EME 2000 W PEP on VHF/UHF","bands":[
{"band":"160m","ranges":[[1800,2000,"all"]]},
{"band":"80m","ranges":[[3500,4000,"all"]]},
{"band":"40m","ranges":[[7000,7300,"all"]]},
{"band":"30m","ranges":[[10100,10150,"all"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,54000,"all"]]},
{"band":"2m","ranges":[[144000,148000,"all"]]},
{"band":"1.25m","ranges":[[220000,225000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all"]]}],
"notes":"Same bands as Expert; higher power; may request special temporary callsigns for expeditions/contests. Edges are R2 assumptions. HK prefix."}],
"callsignInference":"HJ + digit + 1-3 letters = Novice (Segunda). HK + digit + 1-3 letters = Expert or Advanced (indistinguishable); associations also HK. 5J/5K = special/temporary, level unknown.","asOf":"2026-10","confidence":"high"}
```

---

## Chile

### 1. Regulator and rules (all **[H]**)

- **Regulator:** SUBTEL (Subsecretaría de Telecomunicaciones, Ministerio de Transportes y Telecomunicaciones).
- **Main rules:** **Decreto Supremo N° 523/2006**, *Reglamento del Servicio de Aficionados a las Radiocomunicaciones* (promulgated 21 Sep 2006; DO 27 Jan 2007; BCN idNorma 257890).
  - Amended by **DS N° 213/2012** (DO 21 Jun 2013), the latest version per BCN. Changes: time-in-grade extended; **Novicio gained 10 MHz**; the Aspirante licence became renewable.
- **Callsigns:** **Res. Exenta 1.228/2008**, amended by **Res. Exenta 175/2014** (DO 23 Jan 2014; idNorma 280338).
- **Band allocations:** **DS 127/2006**, the Plan General de Uso del Espectro Radioeléctrico, amended by **DS 192/2023** (25 Apr 2023), which added 60 m, 30 m primary and 3.3 GHz. SUBTEL publishes them as the *Tabla de Frecuencias para Radioaficionados* (June 2025).

### 2. Term

- **Local:** "categoría" (de licencia).
- **English:** License Category; in the UI, "License Class".

### 3. Current levels (lowest to highest)

DS 523 Art. 4, as amended **[H]**:

| Order | Name | English | Prefix | Requirements | Issued |
|---|---|---|---|---|---|
| 1 | Aspirante | Aspirant / Entry | CD | Age 10+; exam; no fee | yes |
| 2 | Novicio | Novice | CA | Age 12+; 1 year as Aspirante (6 months with a radio-club course); exam | yes |
| 3 | General | General | CE | Age 15+; **3 years** as Novicio; exam | yes |
| 4 | Superior | Superior / Advanced | XQ | Age 18+; **5 years** as General; exam **and** distinguished activity attested by clubs | yes |

There are no official letter codes. Use the names; the prefixes are a de facto code.

### 4. Legacy levels

- There are none in the privilege sense. DS 372/1999 (repealed by DS 523) used the same scheme; not examined in detail **[L]**.
- Special CB-prefix calls issued under Res. 1705/2001 could be used only until their licence expired **[H]**.
- The "CC" prefix mentioned in the brief is **not** in the current callsign norm, which lists CA, CB, CD, CE, XQ, XR and 3G. Any CC calls are historical **[H]**/**[L]** as to their origin.

### 5. Privileges

**Bands allocated in Chile** (SUBTEL Tabla 2025, from DS 127 + DS 192) **[H]**:

| Band | Range (kHz unless noted) |
|---|---|
| 2200 m | 135.7–137.8 (secondary) |
| 630 m | 472–479 (secondary) |
| 160 m | **1800–1850 only** |
| 80 m | **3500–3750 only** |
| 60 m | 5351.5–5366.5 (primary, since 2023) |
| 40 m | 7000–7300 |
| 30 m | 10100–10150 |
| 20 m | 14000–14350 |
| 17 m | 18068–18168 |
| 15 m | 21000–21450 |
| 12 m | 24890–24990 |
| 10 m | 28.0–29.7 MHz |
| 6 m | 50–54 MHz |
| 2 m | 144–148 MHz |
| 1.25 m | 220–225 MHz |
| 70 cm | 430–440 MHz |
| 23 cm | 1240–1300 MHz |
| 13 cm | 2400–2450 MHz |
| 9 cm | 3300–3400 MHz |
| 5 cm | 5650–5850 MHz |
| 3 cm | 10.45–10.5 GHz only |
| 1.2 cm | 24.0–24.25 GHz |
| mm-wave | 47–47.2, 76–81, 122.25–123, 134–141, 241–250 GHz |

**Privileges by category** (DS 523 Arts. 9, 11, 13, 15) **[H]**:

| Category | Bands | Power |
|---|---|---|
| **Superior** | **All** amateur and amateur-satellite bands in the Plan | **Fixed:** 1200 W PEP below 30 MHz; 100 W VHF; 50 W UHF up to 1270 MHz; 10 W above 1270 MHz. **Mobile:** 200 W PEP below 30 MHz; 50 W VHF; 25 W UHF up to 1270 MHz; 10 W above 1270 MHz. **Also:** temporary experimental higher power, and temporary use (under 7 days) of internationally allocated bands not allocated in Chile. All limits are at the antenna feed-line input |
| **General** | Same as Superior (Art. 11) | Same power, **except** no experimental high-power or unallocated-band permits (Art. 9(e)). May request special callsigns |
| **Novicio** | HF: **3.5, 7, 10 and 28 MHz**. VHF: **50, 144 and 220 MHz**. UHF: **430, 1270 (23 cm), 2400 and 5650 MHz**. Plus amateur-satellite | **Fixed:** 200 W PEP HF; 50 W VHF; 25 W UHF up to 1270 MHz; 10 W on 2400/5650. **Mobile HF:** 50 W PEP |
| **Aspirante** | **Fixed station only** on HF **3.5, 7 and 28 MHz**; fixed or mobile on **144 MHz**. Under 15s need supervision by a Novicio+ for HF | 100 W PEP HF; 50 W on 144 MHz |

Novicio has no 160, 60, 20, 17, 15 or 12 m. Aspirante has only 80/40/10 m (fixed) plus 2 m.

**Modes:** DS 523 has no category-specific mode restrictions **[H]**. The sub-band edges inside a band are those of the Plan (whole bands). The IARU R2 band plan is voluntary. The power basis is the "entrada de la línea de alimentación de la antena", i.e. transmitter output into the feed line. The HF limits are stated as PEP; the VHF/UHF figures don't say PEP or mean.

### 6. Callsign inference (Res. 1228/2008 as amended, Arts. 5, 7–9, 13–15) **[H]**

| Prefix + suffix | Category |
|---|---|
| **XQ** + zone + 1–3 letters | Superior |
| **CE** + zone + 1–3 letters | General; also clubs and state stations (2–3 letters) |
| **CA** + zone + 3 letters | Novicio |
| **CD** + zone + 3 letters | Aspirante |
| **CB / XR / 3G** | special event (Superior/General/clubs only), level unknown |
| **CE#/homecall** | foreign IARP holder |

- 1-letter suffixes go only to General or Superior with 20+ years of HF activity.
- Zone 0 is islands and space: suffix X = Sala y Gómez / San Félix / San Ambrosio, Y = Easter Island, Z = Juan Fernández.

**Rule:** the prefix maps directly to the category (high reliability). The prefix changes on upgrade, since Art. 7 assigns it by category; the suffix is typically kept **[M]**. CE is ambiguous only because club stations also use it.

### 7. Sources

- https://www.subtel.gob.cl/images/stories/articles/subtel/asocfile/ds_n523_2006.pdf: SUBTEL unofficial consolidated DS 523, 2006 text **[H]**.
- https://nuevo.leychile.cl/servicios/Navegar/get_norma_json?idNorma=257890: BCN current version of DS 523 (2013-06-21), showing Art. 13 with 10 MHz **[H]**.
- https://nuevo.leychile.cl/servicios/Navegar/get_norma_json?idNorma=1052106: DS 213 amendment text **[H]**.
- https://nuevo.leychile.cl/servicios/Navegar/get_norma_json?idNorma=280338: Res. 1228/2008 + Res. 175/2014 callsign norm **[H]**.
- https://www.subtel.gob.cl/wp-content/uploads/2025/06/Tabla_de_Bandas_Actualizada_2025.pdf: allocated bands (DS 127 + DS 192/2023) **[H]**.
- https://www.subtel.gob.cl/wp-content/uploads/2026/01/Res-2614-Manual-de-Tramites-SUBTEL.pdf: 2026 procedures manual (four categories, 3- and 5-year time-in-grade) **[H]**.
- https://chileatiende.gob.cl/fichas/3838-examen-para-obtener-una-licencia-de-radioaficionados: requirements, fees, legal framework **[H]**.
- https://www.subtel.gob.cl/inicio-concesionario/servicios-de-telecomunicaciones/servicios-de-radio-aficionados/: SUBTEL amateur portal (norm list) **[H]**.

**Not verified:**

- Chile's IARP party status (only the 2019 amendment signature, from an ARRL report).
- Whether "1.270 MHz band" for Novicio means all of 1240–1300; assumed yes.

```json
{"entities":["CE","CA","CB","CC","CD","XQ","XR","3G"],"regulator":"SUBTEL","rules":"DS 523/2006 (Reglamento del Servicio de Aficionados a las Radiocomunicaciones) as amended by DS 213/2012; Res. Exenta 1228/2008 + 175/2014 (callsigns); DS 127/2006 + DS 192/2023 (band plan)","termLocal":"categoría","termEnglish":"License Category","levels":[
{"code":"ASP","name":"Aspirant","nameLocal":"Aspirante","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"HF 100 W PEP at feed-line input, fixed station only; 144 MHz 50 W fixed or mobile","bands":[
{"band":"80m","ranges":[[3500,3750,"all"]]},
{"band":"40m","ranges":[[7000,7300,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"2m","ranges":[[144000,148000,"all"]]}],
"notes":"Code unofficial. HF fixed stations only; under-15s need supervision for HF. CD prefix."},
{"code":"N","name":"Novice","nameLocal":"Novicio","order":2,"cept":"none","issued":true,"legacy":false,"maxPowerW":200,"powerNote":"Fixed: HF 200 W PEP, VHF 50 W, UHF<=1270 MHz 25 W, 2400/5650 MHz 10 W; mobile HF 50 W PEP; at feed-line input","bands":[
{"band":"80m","ranges":[[3500,3750,"all"]]},
{"band":"40m","ranges":[[7000,7300,"all"]]},
{"band":"30m","ranges":[[10100,10150,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,54000,"all"]]},
{"band":"2m","ranges":[[144000,148000,"all"]]},
{"band":"1.25m","ranges":[[220000,225000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all"]]},
{"band":"13cm","ranges":[[2400000,2450000,"all"]]},
{"band":"5cm","ranges":[[5650000,5850000,"all"]]}],
"notes":"No 160/60/20/17/15/12m. Satellite allowed. CA prefix."},
{"code":"G","name":"General","nameLocal":"General","order":3,"cept":"none","issued":true,"legacy":false,"maxPowerW":1200,"powerNote":"Fixed: <30 MHz 1200 W PEP, VHF 100 W, UHF<=1270 MHz 50 W, >1270 MHz 10 W; mobile: 200 W PEP HF, 50 W VHF, 25 W UHF, 10 W >1270; at feed-line input","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all"]]},
{"band":"630m","ranges":[[472,479,"all"]]},
{"band":"160m","ranges":[[1800,1850,"all"]]},
{"band":"80m","ranges":[[3500,3750,"all"]]},
{"band":"60m","ranges":[[5351.5,5366.5,"all"]]},
{"band":"40m","ranges":[[7000,7300,"all"]]},
{"band":"30m","ranges":[[10100,10150,"all"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,54000,"all"]]},
{"band":"2m","ranges":[[144000,148000,"all"]]},
{"band":"1.25m","ranges":[[220000,225000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all"]]},
{"band":"13cm","ranges":[[2400000,2450000,"all"]]},
{"band":"9cm","ranges":[[3300000,3400000,"all"]]},
{"band":"5cm","ranges":[[5650000,5850000,"all"]]},
{"band":"3cm","ranges":[[10450000,10500000,"all"]]},
{"band":"1.2cm","ranges":[[24000000,24250000,"all"]]}],
"notes":"All bands in the national plan (160m only 1800-1850, 80m only 3500-3750, 3cm only 10.45-10.5 GHz). CE prefix (also used by clubs)."},
{"code":"S","name":"Superior","nameLocal":"Superior","order":4,"cept":"none","issued":true,"legacy":false,"maxPowerW":1200,"powerNote":"Same as General; may obtain temporary experimental authorisation for higher power","bands":[],"notes":"Same bands as General (use General's table) plus temporary (<7 days) use of internationally allocated amateur bands not allocated in Chile and temporary higher-power experimental permits (Art. 9 e). XQ prefix."}],
"callsignInference":"Prefix encodes category: XQ = Superior, CE = General (or club/state station), CA = Novicio (3-letter suffix), CD = Aspirante (3-letter suffix). CB/XR/3G = special event (Superior/General/clubs), level unknown. CE#/homecall = foreign IARP visitor. High reliability for XQ/CA/CD; CE ambiguous only with club stations.","asOf":"2026-10","confidence":"high"}
```

---

## Venezuela

### 1. Regulator and rules

- **Regulator:** CONATEL (Comisión Nacional de Telecomunicaciones).
- **Main rules:** **Reglamento sobre el Servicio de Radioaficionados**, **Decreto N° 2.836** (25 Feb 1993; Gaceta Oficial N° 35.194, 21 Apr 1993) **[H]**.
- **Bands, modes and power per category** are in the **Instructivo Técnico-Administrativo del Reglamento de Radioaficionados** (CONATEL, August 1995) **[H]**/**[M]**.
- **Status:** CONATEL hosts both as a single compilation PDF uploaded in **Aug 2024**. The compilation is by YV6KV, so it is "courtesy" text, not the Gaceta facsimile. No newer regulation or consultation was found, so this is treated as current **[M]**.

### 2. Term

- **Local:** "categoría" (del permiso). The course certificate reads "Operador … Clase A".
- **English:** License Category; in the UI, "License Class".

### 3. Current levels (lowest to highest)

Reglamento Arts. 6–10 **[H]**:

| Order | Name | English | Code | Requirements | Prefix | Issued |
|---|---|---|---|---|---|---|
| 1 | Categoría "A" | Class A (entry) | A | Approved instruction course (80 h) + CONATEL exam; minimum age 12 for A only | **YY** | yes |
| 2 | Categoría "B" | Class B (full) | B | At least 2 years in A, **plus** QSL-confirmed contacts with **75 countries and all 9 Venezuelan circuits** | **YV** | yes (by upgrade) |

### 4. Legacy levels

- Permits issued before the 1993 Reglamento were all classified as **Category B** (Art. 58) **[H]**.
- Holders of old "Clase B General" operator certificates could obtain a Category B permit (Art. 59).
- Old-timers with YV calls are therefore B.

### 5. Privileges (Instructivo Ch. V)

**Category B:** all bands, segments and modes **[H]**/**[M]**.

| Band | Range (kHz) and segment modes |
|---|---|
| 160 m | 1800–1850 CW/digital; 1850–2000 CW/phone |
| 80 m | 3500–3580 CW; 3580–3700 CW/digital; 3700–4000 CW/phone |
| 40 m | 7000–7035 CW; 7035–7045 digital; 7045–7095 phone (DX); 7110–7300 all modes, **200 W PEP** |
| 30 m | "10.000–10.150" (sic, read 10100–10150) **digital only** |
| 20 m | 14000–14075 CW; 14075–14099 digital; 14099–14101 beacons; 14101–14115 packet; 14115–14225 phone; 14225–14235 fax/SSTV; 14235–14350 phone |
| 17 m | 18068–18099 CW; 18100–18110 digital; 18110–18168 phone |
| 15 m | 21000–21074 CW; 21075–21100 digital; 21100–21110 packet; 21110–21149 phone; 21149–21151 beacon; 21151–21450 phone |
| 12 m | 24890–24920 CW; 24920–24930 digital; 24930–24990 phone |
| 10 m | 28000–28075 CW; 28075–28300 digital; 28300–28700 CW/phone; 28700–29300 phone/fax/SSTV; 29300–29550 FM links/satellite |
| 6 m | 50.0–50.1 MHz CW; 50.1–52 phone/digital; 52–54 FM repeaters |
| 2 m | 144–148 MHz |
| 1.25 m | 220–224.9 MHz |
| 70 cm | 430–440 MHz |
| 23 cm | 1240–1300 MHz |

Fax and SSTV are not allowed in segments i, k, q, t, z and ac.

**Category B power:**

| Range | Max power |
|---|---|
| HF | 1000 W PEP (200 W PEP in 7110–7300) |
| VHF, CW and simplex phone | 1000 W PEP |
| VHF repeaters | 25 W PEP |
| 70 cm | 25 W PEP |
| 33 cm and 23 cm | 5 W PEP |

**Category A** (CONATEL-hosted text) **[H]** as text, **[L]** as to which version is in force:

| Band | Range and modes |
|---|---|
| 80 m | 3500–3580 CW; 3580–3700 CW/digital; 3700–4000 CW/phone |
| 40 m | 7000–7035 CW; 7035–7045 digital; 7045–7100 phone (DX); 7100–7150 phone/emergency |
| 15 m | 21025–21100 CW/digital; 21103–21150 CW; 21150–21200 phone |
| 10 m | 28100–28300 CW/digital; 28300–28500 CW/phone |
| 6 m | 50.125–51.500 MHz CW/phone/digital |
| 1.25 m | 220.00–220.99 CW; 221–222 digital; 222.00–223.99 MHz phone/repeaters |
| 23 cm | 1270–1295 MHz phone/repeaters |

- **Explicitly excluded for A:** 12, 17, 20, 30 and **160 m**; **2 m**; **70 cm**. The qsl.net copy also excludes 33 cm.
- **A digital modes:** only RTTY, ASCII, packet and AMTOR. **No** PACTOR, CLOVER, fax or SSTV.
- **A power:** HF 200 W PEP; VHF 25 W PEP; UHF 5 W PEP; SHF 5 W PEP.

**Conflict to flag** (Rule 7): two versions of the Category A table exist.

- The **CONATEL-hosted compilation** lists 160 m (1800–2000) in A's band table **but also excludes 160 m** in the next paragraph. It also gives 80 m 3500–4000 and 40 m 7000–7150.
- An **older copy** (qsl.net/yv5usb, undated) gives A only **3675–3800** (80 m) and **7025–7100** (40 m), with no 160 m.

Recommendation: use the CONATEL-hosted version but **treat 160 m as excluded for A**, since the exclusion sentence is unambiguous and repeated in both copies. Flag the 80/40 m segment edges as uncertain.

### 6. Callsign inference (Reglamento Arts. 29–32) **[H]**

| Prefix | Category |
|---|---|
| **YY** + circuit digit + 1–3 letters | Category A |
| **YV** + digit + suffix | Category B |
| **4M**, **YW** | special prefixes; 4M requires at least 1 year in B (Instructivo) |

- The suffix assigned in A is kept on upgrade, and the prefix changes YY→YV (Art. 32).
- Digit 0 = Isla de Aves (B only).

**Rule:** YY → A, YV → B (high reliability). 4M/YW → B or a club (special), level otherwise unknown. The brief's "YY/4M" mapping is confirmed.

### 7. Sources

- https://conatel.gob.ve/wp-content/uploads/2024/08/reglamento-servicio-radioaficionados.pdf: Decreto 2.836/1993 + Instructivo (Aug 1995) compilation hosted by CONATEL (categories, prefixes, bands and power per category, transitional rules) **[H]**.
- https://www.qsl.net/yv5usb/instructivo_tecnico.html: alternate (older?) Instructivo text with different Category A HF segments **[M]**.

**Not verified:**

- Whether a later CONATEL providencia replaced the 1995 Instructivo.
- 60 m status in Venezuela.
- 29.55–29.7 MHz (not listed for B).
- IARP: Venezuela signed in 1995; no ratification found.

```json
{"entities":["YV","YY","YW","4M"],"regulator":"CONATEL","rules":"Decreto 2.836/1993 Reglamento sobre el Servicio de Radioaficionados (G.O. 35.194) + Instructivo Técnico-Administrativo (Aug 1995)","termLocal":"categoría","termEnglish":"License Category","levels":[
{"code":"A","name":"Class A","nameLocal":"Categoría A","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":200,"powerNote":"HF 200 W PEP; VHF 25 W PEP; UHF 5 W PEP; SHF 5 W PEP","bands":[
{"band":"80m","ranges":[[3500,3580,"CW"],[3580,3700,"CW"],[3580,3700,"data"],[3700,4000,"CW"],[3700,4000,"phone"]]},
{"band":"40m","ranges":[[7000,7035,"CW"],[7035,7045,"data"],[7045,7150,"phone"]]},
{"band":"15m","ranges":[[21025,21100,"CW"],[21025,21100,"data"],[21103,21150,"CW"],[21150,21200,"phone"]]},
{"band":"10m","ranges":[[28100,28300,"CW"],[28100,28300,"data"],[28300,28500,"CW"],[28300,28500,"phone"]]},
{"band":"6m","ranges":[[50125,51500,"CW"],[50125,51500,"phone"],[50125,51500,"data"]]},
{"band":"1.25m","ranges":[[220000,220990,"CW"],[221000,222000,"data"],[222000,223990,"phone"]]},
{"band":"23cm","ranges":[[1270000,1295000,"phone"]]}],
"notes":"Excluded: 160, 30, 20, 17, 12m, 2m, 70cm (and 33cm per one copy). Digital limited to RTTY/ASCII/packet/AMTOR; no PACTOR/CLOVER/fax/SSTV. CONATEL text also lists 160m 1800-2000 for A, contradicting its own exclusion; treated as excluded. An older copy gives 80m 3675-3800 and 40m 7025-7100 only; edges uncertain. YY prefix."},
{"code":"B","name":"Class B","nameLocal":"Categoría B","order":2,"cept":"none","issued":true,"legacy":false,"maxPowerW":1000,"powerNote":"HF 1000 W PEP (7110-7300 kHz 200 W PEP); VHF 1000 W PEP CW/simplex phone, repeaters 25 W; 70cm 25 W PEP; 33/23cm 5 W PEP","bands":[
{"band":"160m","ranges":[[1800,1850,"CW"],[1800,1850,"data"],[1850,2000,"CW"],[1850,2000,"phone"]]},
{"band":"80m","ranges":[[3500,3580,"CW"],[3580,3700,"CW"],[3580,3700,"data"],[3700,4000,"CW"],[3700,4000,"phone"]]},
{"band":"40m","ranges":[[7000,7035,"CW"],[7035,7045,"data"],[7045,7095,"phone"],[7110,7300,"all"]]},
{"band":"30m","ranges":[[10100,10150,"data"]]},
{"band":"20m","ranges":[[14000,14075,"CW"],[14075,14099,"data"],[14101,14115,"data"],[14115,14225,"phone"],[14225,14235,"image"],[14235,14350,"phone"]]},
{"band":"17m","ranges":[[18068,18099,"CW"],[18100,18110,"data"],[18110,18168,"phone"]]},
{"band":"15m","ranges":[[21000,21074,"CW"],[21075,21110,"data"],[21110,21149,"phone"],[21151,21450,"phone"]]},
{"band":"12m","ranges":[[24890,24920,"CW"],[24920,24930,"data"],[24930,24990,"phone"]]},
{"band":"10m","ranges":[[28000,28075,"CW"],[28075,28300,"data"],[28300,28700,"CW"],[28300,28700,"phone"],[28700,29300,"phone"],[28700,29300,"image"],[29300,29550,"phone"]]},
{"band":"6m","ranges":[[50000,50100,"CW"],[50100,52000,"phone"],[50100,52000,"data"],[52000,54000,"phone"]]},
{"band":"2m","ranges":[[144000,148000,"all"]]},
{"band":"1.25m","ranges":[[220000,224900,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all"]]}],
"notes":"All bands/segments. 30m listed as '10.000-10.150 kHz' (sic) digital only. 29300-29550 FM links/satellite. Pre-1993 permits classified as B. YV prefix."}],
"callsignInference":"YY = Category A; YV = Category B (suffix kept on upgrade, prefix changes YY->YV). 4M/YW = special prefixes (4M requires >=1 year in B). High reliability.","asOf":"2026-10","confidence":"medium"}
```

---

## Open questions

1. **Colombia:**
   - Exact CNABF amateur edges for Primera/Avanzada, including 60 m.
   - Whether MinTIC enforces "no digital modes" for Novicio as literally written.
2. **Venezuela:**
   - Which Instructivo version is authoritative for Category A's 80/40 m segments.
   - The internal 160 m contradiction.
   - Whether anything newer than 1995 exists.
3. **Brazil:**
   - Whether the RGST (Res. 777/2025) amateur articles are already in force or postponed. Class rules are the same either way.
4. **All five:** IARP Class 1/2 mapping per national level, and whether any national level is in ECC/REC (05)06.
5. **Argentina:** how "carrier power" applies to SSB (the rule gives no PEP figure).

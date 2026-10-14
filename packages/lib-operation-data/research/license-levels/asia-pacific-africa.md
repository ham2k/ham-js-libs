# Amateur licence levels: Asia-Pacific and Africa

Researched 2026-10-14. Covers VK, ZL, JA, BY, 9M2 (all of Malaysia), HL, VU, YB and ZS.

**How to read the confidence marks:**
- **(H)**: I fetched and read the primary regulatory text.
- **(M)**: The source is a national society or a reliable secondary source, or I inferred it from a primary layout.
- **(L)**: Not verified.

**Frequencies:** in kHz unless a unit is given.

**Power terms:**
- **PEP**: peak envelope power.
- **pX / pY** (Australia): PEP and mean power, both supplied to the antenna transmission line.
- **EIRP**: effective isotropic radiated power.

---

## Australia (VK)

### 1. Regulator and rules
- **Regulator:** Australian Communications and Media Authority (ACMA). **(H)**
- **Rules:** *Radiocommunications (Amateur Stations) Class Licence 2023*, instrument F2023L01648. **(H)**
  - Made 7 Dec 2023, registered 12 Dec 2023, in force from 19 Feb 2024.
  - The Federal Register of Legislation API (Versions endpoint) lists compilation 0, with `isLatest:true` and no amendments as of 2026-10. **(H)**
  - URL: https://www.legislation.gov.au/F2023L01648/latest/text
  - As-made text: https://www.legislation.gov.au/F2023L01648/asmade/2023-12-12/text/original/epub/OEBPS/document_1/document_1.html
- **What changed in 2024:** Individual amateur apparatus licences ended on 19 Feb 2024. Operation is now authorised by the class licence together with a qualification and an ACMA-assigned call sign. **(H)**
- **Qualifications:** An "ACMA recognition certificate (Foundation / Standard / Advanced)" or an equivalent "recognised qualification (… Type)". ACMA has run the exams through accredited assessors since 2023. **(H)**
- **Not found:** I found no 2025–2026 variation instrument and no published Foundation-privilege reform. **(M**: negative search result)

### 2. Term
- The instrument says **"qualification"**: "ACMA recognition certificate (Foundation)" and "recognised qualification (Foundation Type)". **(H)**
- Common usage is "licence level" or "licence class" (left over from the apparatus-licence era).
- Suggested English UI label: **"Licence Level"** or **"Qualification"**.

### 3. Current levels (lowest to highest)

| Order | Code | Official name | CEPT | New certificates issued? |
|---|---|---|---|---|
| 1 | F | Foundation (ACMA recognition certificate (Foundation)) | none (entry level; no CEPT equivalence) **(M)** | yes **(H)** |
| 2 | S | Standard | none / roughly CEPT Novice **(L)** | yes **(H)** |
| 3 | A | Advanced | CEPT T/R 61-01 / HAREC equivalent **(M)** | yes **(H)** |

### 4. Legacy levels
Pre-2024 certificates of proficiency are deemed equivalent recognised qualifications under Schedule 5, cl. 2. **(H)**

The 2005 restructure (effective 19 Oct 2005) mapped the old licences as follows. **(M**: ARRL Letter Nov 2005)
- Unrestricted (AOCP), Intermediate and Limited (AOCP(L)) became **Advanced**.
- Novice (NAOCP) and Novice Limited (NLAOCP) became **Standard**.
- Foundation was new in 2005.

Overseas licences listed in ACMA's equivalence tables are deemed Advanced, Standard or Foundation Type. **(H)**

### 5. Band privileges (Schedule 2, tables A, B and C) **(H)**

**Power:**

| Level | Power limit |
|---|---|
| Foundation | 10 W pX on every band |
| Standard | J3E/R3E (SSB): 100 W pX. Any other emission: 30 W pY. On 50–52 MHz, C3F, J3E and R3E get 100 W pX. |
| Advanced | C3F/J3E/R3E: 400 W pX. Any other emission: 120 W pY. On 2200 m: 1 W pX EIRP. On 630 m: 5 W pX EIRP. |

**Bandwidth limits by band:**
- 1.8, 3.5, 7.0–7.1, 14, 18, 21 and 24 MHz: above 8 kHz necessary bandwidth, power spectral density must not exceed 1 W/100 kHz.
- 7.1–7.3 MHz, 3.776–3.8 MHz and 10.1 MHz: necessary bandwidth must not exceed 8 kHz.
- 28 MHz: above 16 kHz, the 1 W/100 kHz density limit applies.
- 50–52 MHz: necessary bandwidth must not exceed 100 kHz.
- 2200 m: necessary bandwidth must not exceed 2.1 kHz.
- 630 m: necessary bandwidth must not exceed 3 kHz.
- **No class-based mode restriction remains.** Foundation may use any emission that fits the bandwidth limits. Earlier digital-mode bans were lifted. **(H)**

**Bands:**

| Band | Foundation | Standard | Advanced |
|---|---|---|---|
| 2200 m | – | – | 135.7–137.8 |
| 630 m | – | – | 472–479 |
| 160 m | – | – | 1800–1875 |
| 80 m | 3500–3700 | 3500–3700 | 3500–3700, 3776–3800 |
| 60 m | – (Australia has no amateur 5 MHz allocation) | – | – |
| 40 m | 7000–7300 (7100–7300 ≤ 8 kHz bandwidth) | 7000–7300 | 7000–7300 |
| 30 m | – | – | 10100–10150 |
| 20 m | – | 14000–14350 | 14000–14350 |
| 17 m | – | – | 18068–18168 |
| 15 m | 21000–21450 | 21000–21450 | 21000–21450 |
| 12 m | – | – | 24890–24990 |
| 10 m | 28000–29700 | 28000–29700 | 28000–29700 |
| 6 m | – | 50–54 MHz | 50–54 MHz |
| 2 m | 144–148 MHz | 144–148 MHz | 144–148 MHz |
| 70 cm | 430–450 MHz | 430–450 MHz | 430–450 MHz |
| 23 cm | – | 1240–1300 MHz | 1240–1300 MHz |
| 13 cm | – | 2400–2450 MHz | 2300–2302, 2400–2450 MHz |
| 9 cm | – | – | 3300–3400, 3400–3600 MHz (excluded HCIS areas, Schedule 3) |
| 6 cm | – | 5650–5850 MHz | 5650–5850 MHz |
| 3 cm and up | – | – | 10.0–10.5, 24.0–24.25, 47.0–47.2, 76–81, 122.25–123, 134–141, 241–250 GHz |

### 6. Call sign inference
Based on the ACMA call sign policy, as summarised by SARC (Mar 2026), and WIA (2020). **(M)**
- **2-letter suffix** (VKnAA): assigned only to Advanced holders (and to clubs with an Advanced custodian). A personal 2×2 call therefore implies **Advanced**. Reliability: high.
- **2×1 contest calls** (VJ/VK/VL): Advanced only.
- **3-letter suffix:** any level. Since the 2020 "call sign for life" change, the suffix is no longer tied to the qualification. Holders keep their call when they upgrade.
- **4-letter F-series** (VKnFxxx): no longer issued, but existing holders keep them. Such a call **only proves the holder was Foundation when it was issued**. The holder may since have upgraded. Treat it as "at least Foundation".

### 7. Sources
- https://www.legislation.gov.au/F2023L01648/asmade/2023-12-12/text/original/epub/OEBPS/document_1/document_1.html: full text, Schedule 2 tables, Schedule 5 deeming provisions. **(H)**
- https://api.prod.legislation.gov.au/v1/Versions?$filter=titleId%20eq%20'F2023L01648': no compilations or amendments. **(H)**
- https://sarc.org.au/wp-content/uploads/2026/03/Regulations-exam-call-sign-policy-V01-10MAR2026-1.pdf: SARC extract of the ACMA call sign policy (F-series, 2-letter calls Advanced-only). **(M)**
- https://wia.org.au/newsevents/news/2020/20200729-1/index.php: 2020 call-sign-for-life change. **(M)**
- https://reflector.arrl.org/archives/list/arrl-odv@reflector.arrl.org/thread/NSWRP7H3JQELSUUYHZYICMKMOCFVNOVR: 2005 class mapping. **(M)**

**Not verified:**
- The acma.gov.au pages blocked automated fetches, so I could not read the call sign policy PDF directly.
- The exact wording defining pX and pY: by convention these are PEP and mean power, defined in the Radiocommunications (Interpretation) Determination. **(M)**
- Any 2025–2026 consultation on Foundation changes.

```json
{"entities":["VK"],"regulator":"ACMA","termLocal":"qualification (ACMA recognition certificate)","termEnglish":"Licence Level","levels":[
{"code":"F","name":"Foundation","nameLocal":"ACMA recognition certificate (Foundation)","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":10,"powerNote":"10 W pX (PEP) on all bands","bands":[
{"band":"80m","ranges":[[3500,3700,"all"]]},{"band":"40m","ranges":[[7000,7300,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"2m","ranges":[[144000,148000,"all"]]},{"band":"70cm","ranges":[[430000,450000,"all"]]}],
"notes":"Bandwidth caps: 7100-7300 <=8 kHz; >8 kHz (HF) or >16 kHz (10m) limited to 1 W/100 kHz PSD. No class-based mode limits."},
{"code":"S","name":"Standard","nameLocal":"ACMA recognition certificate (Standard)","order":2,"cept":"none","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"100 W pX for J3E/R3E (and C3F on 50-52 MHz); 30 W pY otherwise","bands":[
{"band":"80m","ranges":[[3500,3700,"all"]]},{"band":"40m","ranges":[[7000,7300,"all"]]},{"band":"20m","ranges":[[14000,14350,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,54000,"all"]]},{"band":"2m","ranges":[[144000,148000,"all"]]},{"band":"70cm","ranges":[[430000,450000,"all"]]},{"band":"23cm","ranges":[[1240000,1300000,"all"]]},{"band":"13cm","ranges":[[2400000,2450000,"all"]]},{"band":"6cm","ranges":[[5650000,5850000,"all"]]}],
"notes":"Legacy Novice and Novice Limited map here."},
{"code":"A","name":"Advanced","nameLocal":"ACMA recognition certificate (Advanced)","order":3,"cept":"HAREC/T-R 61-01 equivalent","issued":true,"legacy":false,"maxPowerW":400,"powerNote":"400 W pX for C3F/J3E/R3E; 120 W pY otherwise; 1 W pX EIRP on 2200m, 5 W pX EIRP on 630m","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all"]]},{"band":"630m","ranges":[[472,479,"all"]]},{"band":"160m","ranges":[[1800,1875,"all"]]},{"band":"80m","ranges":[[3500,3700,"all"],[3776,3800,"all"]]},{"band":"40m","ranges":[[7000,7300,"all"]]},{"band":"30m","ranges":[[10100,10150,"all"]]},{"band":"20m","ranges":[[14000,14350,"all"]]},{"band":"17m","ranges":[[18068,18168,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"12m","ranges":[[24890,24990,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,54000,"all"]]},{"band":"2m","ranges":[[144000,148000,"all"]]},{"band":"70cm","ranges":[[430000,450000,"all"]]},{"band":"23cm","ranges":[[1240000,1300000,"all"]]},{"band":"13cm","ranges":[[2300000,2302000,"all"],[2400000,2450000,"all"]]},{"band":"9cm","ranges":[[3300000,3600000,"all"]]},{"band":"6cm","ranges":[[5650000,5850000,"all"]]},{"band":"3cm","ranges":[[10000000,10500000,"all"]]},{"band":"1.2cm","ranges":[[24000000,24250000,"all"]]},{"band":"6mm","ranges":[[47000000,47200000,"all"]]},{"band":"4mm","ranges":[[76000000,81000000,"all"]]},{"band":"2.5mm","ranges":[[122250000,123000000,"all"]]},{"band":"2mm","ranges":[[134000000,141000000,"all"]]},{"band":"1mm","ranges":[[241000000,250000000,"all"]]}],
"notes":"Legacy Unrestricted, Intermediate and Limited map here. 3.4-3.6 GHz excluded in listed HCIS areas."}],
"callsignInference":"2-letter suffix (VKnXX) or 2x1 contest call => Advanced (high). 3-letter suffix => any level (none). Legacy VKnFxxx => Foundation at issue, may have upgraded (lower bound only).","asOf":"2026-10","confidence":"high"}
```

---

## New Zealand (ZL)

### 1. Regulator and rules
- **Regulator:** Radio Spectrum Management (RSM), part of the Ministry of Business, Innovation and Employment (MBIE). **(H)**
- **Licence:** *Radiocommunications Regulations (General User Radio Licence for Amateur Radio Operators) Notice 2025*. **(H)**
  - NZ Gazette notice 2025-go3272, in force from 1 Jul 2025. Licence no. 409957.
  - It revokes the 2023 notice (2023-go5698). The 2025 change only removed ITU-R M.1544 from the recognised overseas qualifications.
  - URL: https://www.rsm.govt.nz/assets/Uploads/documents/gazette/radiocommunications-regulations-general-user-radio-licence-for-amateur-radio-operators-notice-2025.pdf
- **Certificate and call sign rules:** PIB 46, *Radio Operator Certificate and Callsign Rules*, Issue 19.1 (July 2025). **(H)**

### 2. Term
- NZ has **no licence levels.** There is a single certificate, the "General Amateur Operator's Certificate of Competency" (GAOC). **(H)**
- Suggested UI: show "General (single class)" or hide the level field for ZL.

### 3. Current levels

| Order | Code | Name | CEPT | Issued? |
|---|---|---|---|---|
| 1 | G | General Amateur Operator's Certificate (GAOC) | HAREC/T-R 61-02 recognised both ways **(H)** | yes |

**A quasi-level exists by time and experience: the newcomer restriction.** **(H)**
- Operation **between 5 MHz and 25 MHz** (60, 40, 30, 20, 17, 15 and 12 m) is not permitted until the holder has:
  - held the GAOC for 3 months, and
  - logged 50 contacts.
- Licence s7(3).

### 4. Legacy levels
- Earlier NZ classes (e.g. Limited/no-code, Novice) were merged into the single General certificate. I did not find the merger history in a primary source. **(L)**
- PIB 46 now recognises only the GAOC and HAREC. Reciprocity: Australian Advanced, and Japanese 1st/2nd class. **(H)**

### 5. Band privileges (licence s3) **(H)**
- Power is PEP of the transmitter unless stated as EIRP (General condition 11). **30 dBW = 1000 W PEP.**
- There are no mode restrictions by class.

| Band | Range | Max power |
|---|---|---|
| 2200 m | 130–190 | 7 dBW EIRP (5 W), temporary allocation |
| 630 m | 472–479 | 14 dBW EIRP (25 W) |
| 160 m | 1800–1950 | 30 dBW |
| 80 m | 3500–3900 | 30 dBW |
| 60 m | 5351.5–5366.5 | 11.8 dBW EIRP (~15 W) |
| 40 m | 7000–7300 | 30 dBW |
| 30 m | 10100–10150 | 30 dBW |
| 20 m | 14000–14350 | 30 dBW |
| 17 m | 18068–18168 | 30 dBW |
| 15 m | 21000–21450 | 30 dBW |
| 12 m | 24890–24990 | 30 dBW |
| 11 m (telecommand) | 26950–27300 | 7 dBW EIRP |
| 10 m | 28000–29700 | 30 dBW |
| 6 m | 50–54 MHz | 30 dBW |
| 2 m | 144–148 MHz | 30 dBW |
| 70 cm | 430–440 MHz | 30 dBW |
| 33 cm | 915–928 MHz | 14 dBW EIRP |
| 23 cm | 1240–1300 MHz | 30 dBW |
| 13 cm | 2396–2450 MHz | 30 dBW |
| 6 cm | 5650–5850 MHz | 30 dBW |
| 3 cm and up | 10–10.5, 24–24.25, 47–47.2, 76–81, 122.25–123, 134–141, 241–250, 275–1000 GHz | 30 dBW |

### 6. Call sign inference
**None.** **(H)**
- Format: ZL + digit + 1–6 letters, with no class component.
- ZL0–4 and ZL6: general.
- ZL5: Antarctica.
- ZL7: Chatham Is.
- ZL8: Kermadecs.
- ZL9: sub-Antarctic.
- ZM may replace ZL in contests.

### 7. Sources
- RSM GURL Notice 2025 PDF (above): bands, power, newcomer restriction. **(H)**
- https://www.rsm.govt.nz/assets/Uploads/documents/pibs/radio-operator-certificate-and-callsign-rules-pib-46.pdf: GAOC, call sign series, reciprocity. **(H)**
- https://gazette.govt.nz/notice/id/2025-go3272: gazette record. **(M**: via search snippet)

**Not verified:** the history of the legacy NZ grades.

```json
{"entities":["ZL"],"regulator":"RSM (MBIE)","termLocal":"General Amateur Operator's Certificate of Competency","termEnglish":"Licence Level","levels":[
{"code":"G","name":"General","nameLocal":"General Amateur Operator's Certificate (GAOC)","order":1,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":1000,"powerNote":"30 dBW PEP unless noted; 2200m 7 dBW EIRP, 630m 14 dBW EIRP, 60m 11.8 dBW EIRP","bands":[
{"band":"2200m","ranges":[[130,190,"all"]]},{"band":"630m","ranges":[[472,479,"all"]]},{"band":"160m","ranges":[[1800,1950,"all"]]},{"band":"80m","ranges":[[3500,3900,"all"]]},{"band":"60m","ranges":[[5351.5,5366.5,"all"]]},{"band":"40m","ranges":[[7000,7300,"all"]]},{"band":"30m","ranges":[[10100,10150,"all"]]},{"band":"20m","ranges":[[14000,14350,"all"]]},{"band":"17m","ranges":[[18068,18168,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"12m","ranges":[[24890,24990,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,54000,"all"]]},{"band":"2m","ranges":[[144000,148000,"all"]]},{"band":"70cm","ranges":[[430000,440000,"all"]]},{"band":"33cm","ranges":[[915000,928000,"all"]]},{"band":"23cm","ranges":[[1240000,1300000,"all"]]},{"band":"13cm","ranges":[[2396000,2450000,"all"]]},{"band":"6cm","ranges":[[5650000,5850000,"all"]]},{"band":"3cm","ranges":[[10000000,10500000,"all"]]},{"band":"1.2cm","ranges":[[24000000,24250000,"all"]]},{"band":"6mm","ranges":[[47000000,47200000,"all"]]},{"band":"4mm","ranges":[[76000000,81000000,"all"]]},{"band":"2.5mm","ranges":[[122250000,123000000,"all"]]},{"band":"2mm","ranges":[[134000000,141000000,"all"]]},{"band":"1mm","ranges":[[241000000,250000000,"all"]]}],
"notes":"Single class. 5-25 MHz (60/40/30/20/17/15/12 m) barred until GAOC held 3 months AND 50 contacts logged."}],
"callsignInference":"None; ZL/ZM call signs carry no class information.","asOf":"2026-10","confidence":"high"}
```

---

## Japan (JA)

### 1. Regulator and rules
- **Regulator:** Ministry of Internal Affairs and Communications (MIC, 総務省). Exams are run by the Japan Radio Institute (日本無線協会). **(H)**
- **Operating scope by class:** 電波法施行令 (Radio Act Enforcement Order, Cabinet Order 245 of 2001) Art. 3(3). **(H)**
  - Current revision in force 2026-09-03; the amateur rows are unchanged.
  - URL: https://laws.e-gov.go.jp/law/413CO0000000245
- **Station designation:** 周波数等の一括表示記号 ("blanket frequency symbols"), MIC Notice No. 77 of 2023, in force from **25 Sep 2023**. **(H)**
  - Every amateur station licence now carries a symbol encoding the operator class and whether the station is fixed or mobile: 1AF/1AM, 2AF/2AM, 3AF/3AM, 4AF/4AM.
  - The symbol defines the station's bands and powers.
  - MIC Q&A leaflet: https://www.soumu.go.jp/main_content/000903134.pdf
- **Band usage segments:** MIC Notice No. 80 of 2023 (使用区別). https://www.soumu.go.jp/main_content/001040318.pdf **(H**, chart form)

**The 2023 reforms (March and September 2023):** **(M)**
- Unlicensed people may operate any amateur station under the licensee's supervision (体験).
- Operator and station licences can be applied for simultaneously.
- The 一括表示記号 replaced per-band station listings.
- **The class privileges themselves did not change.**

### 2. Term
- **資格 (shikaku)**, "qualification". The holder has an アマチュア無線技士 licence of a given **級 (kyū, "class")**: 第一級〜第四級アマチュア無線技士.
- Suggested English UI: **"Operator Class"** (1st–4th Class Amateur Radio Operator).

### 3. Current levels (lowest to highest) **(H)**

| Order | Code | Local name | English | CEPT | Issued? |
|---|---|---|---|---|---|
| 1 | 4 | 第四級アマチュア無線技士 | 4th Class | none | yes |
| 2 | 3 | 第三級アマチュア無線技士 | 3rd Class | none | yes |
| 3 | 2 | 第二級アマチュア無線技士 | 2nd Class | none (NZ recognises 1st/2nd) | yes |
| 4 | 1 | 第一級アマチュア無線技士 | 1st Class | treated as full/HAREC level by NZ and others **(M)** | yes |

### 4. Legacy levels
- 電信級 (Telegraphy class) and 電話級 (Telephony class) were renamed in the 1990 reform to 3rd and 4th class respectively. Their holders hold those classes today. **(M)**
- Certain commercial radio operator licences also confer amateur privileges (Art. 3(5)). **(H)**

| Commercial licence | Amateur scope conferred |
|---|---|
| 第一級総合無線通信士 (1st Class Radio Operator, General) | 1st class amateur scope |
| 第二級 and 第三級総合 (2nd and 3rd Class, General) | 2nd class scope |
| 第一級, 第二級 and 第四級海上無線通信士 (1st, 2nd and 4th Class Maritime Radio Operator) and 航空無線通信士 (Aeronautical Radio Operator) | 4th class scope |

### 5. Band privileges

**Operating scope by class, from the Order Art. 3(3):** **(H)**

| Class | Scope |
|---|---|
| 1st | All amateur station operation. |
| 2nd | Antenna power (空中線電力) ≤ 200 W. |
| 3rd | ≤ 50 W, and only frequencies **≥ 18 MHz or ≤ 8 MHz**. This excludes 10 MHz and 14 MHz. |
| 4th | ≤ 10 W on **21–30 MHz or ≤ 8 MHz**, ≤ 20 W **above 30 MHz**. **No Morse telegraphy.** This excludes 10, 14 and 18 MHz. |

- Keyed-AM CW: power is counted as 15/40 of the rated power. **(H)**
- Antenna power is the power supplied to the antenna. Japan conventionally measures SSB in PEP and FM/carrier modes in mean power. That convention comes from the 電波法施行規則 definitions, which I did not fetch. **(M)**

**Station powers by 一括表示記号** (F = fixed, M = mobile), from the MIC Q&A table. **(H)**

| Band (designated freq) | 1AF | 1AM | 2AF | 2AM | 3AF | 3AM | 4AF | 4AM |
|---|---|---|---|---|---|---|---|---|
| 135 kHz (136.75) | 200 W, EIRP ≤ 1 W | 50 | 200 | 50 | 50 | 50 | 10 | 10 |
| 475 kHz (475.5) | 200 W, EIRP ≤ 1 W | 50 | 200 | 50 | 50 | 50 | 10 | 10 |
| 1.9 MHz | 1000 | 50 | 200 | 50 | 50 | 50 | 10 | 10 |
| 3.5 / 3.8 MHz | 1000 | 50 | 200 | 50 | 50 | 50 | 10 | 10 |
| 7 MHz | 1000 | 50 | 200 | 50 | 50 | 50 | 10 | 10 |
| 10 MHz | 1000 | 50 | 200 | 50 | – | – | – | – |
| 14 MHz | 1000 | 50 | 200 | 50 | – | – | – | – |
| 18 MHz | 1000 | 50 | 200 | 50 | 50 | 50 | – | – |
| 21 / 24 / 28 MHz | 1000 | 50 | 200 | 50 | 50 | 50 | 10 | 10 |
| 50 MHz | 500 (1000 W for DX on 50–51.5) | 50 | 200 | 50 | 50 | 50 | 20 | 20 |
| 144 / 430 MHz | 50 | 50 | 50 | 50 | 50 | 50 | 20 | 20 |
| 1200 MHz | 10 | 1 (10 at home location) | 10 | 1 | 10 | 1 | 10 | 1 |
| 2.4 / 5.6 / 10 / 24 GHz | 2 | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
| 47 / 77 / 135 GHz | 0.2 | 0.2 | 0.2 | 0.2 | 0.2 | 0.2 | 0.2 | 0.2 |
| 249 GHz | 0.1 | 0.1 | 0.1 | 0.1 | 0.1 | 0.1 | 0.1 | 0.1 |

- 4AF/4AM on 145 and 435 MHz: Morse excluded.
- 4630 kHz (A1A): emergency calling only, for classes 1–3.

**Band edges:** from the JARL band plan (rev. 2020-04-21), consistent with the MIC 2023 usage notice. **(M)**

| Band | Range |
|---|---|
| 135 kHz | 135.7–137.8 |
| 475 kHz | 472–479 |
| 1.9 MHz | 1800–1875, 1907.5–1912.5 |
| 3.5 MHz | 3500–3580, 3599–3612, 3662–3687 |
| 3.8 MHz | 3702–3716, 3745–3770, 3791–3805 |
| 7 MHz | 7000–7200 |
| 10 MHz | 10100–10150 |
| 14 MHz | 14000–14350 |
| 18 MHz | 18068–18168 |
| 21 MHz | 21000–21450 |
| 24 MHz | 24890–24990 |
| 28 MHz | 28000–29700 |
| 50 MHz | 50–54 MHz |
| 144 MHz | 144–146 MHz |
| 430 MHz | 430–440 MHz |
| 1200 MHz | 1260–1300 MHz |
| 2400 MHz | 2400–2450 MHz |
| 5600 MHz | 5650–5850 MHz |
| 10 GHz | 10.0–10.25, 10.45–10.5 GHz |
| 24 GHz | 24.0–24.05 GHz |
| 47 GHz | 47.0–47.2 GHz |
| 77 GHz | 77.5–78 GHz |
| 135 GHz | 134–136 GHz |
| 249 GHz | 248–250 GHz |

**Modes:** Mode segments (CW, narrow-band, wide-band) follow the band plan and are **not** class-dependent. The one exception: **4th class may not use Morse on any band.**

### 6. Call sign inference
**None.** **(M)**
- JA–JS and 7J–7N (7K–7N only in the Kantō area) are assigned sequentially by region.
- Class is not encoded. The station licence's 一括表示記号 (1AF…4AM) does encode it, but that is not visible from the call sign.

### 7. Sources
- e-Gov API `laws.e-gov.go.jp/api/2/law_data/413CO0000000245` (電波法施行令, revision 2026-09-03), Art. 3(3) and 3(5). **(H)**
- https://www.soumu.go.jp/main_content/000903134.pdf: 一括表示記号 Q&A and power table. **(H)**
- https://www.soumu.go.jp/main_content/001040318.pdf: MIC Notice 80/2023 usage chart. **(H**: chart; edges not extractable)
- https://www.jarl.org/English/6_Band_Plan/JapaneseAmateurBandplan20210129.pdf: band edges. **(M)**

**Not verified:**
- The exact SSB PEP vs mean power definition.
- The 電信級/電話級 conversion date and details.
- Whether the 3.5/3.8 MHz edges changed in the Sep 2023 revision.

```json
{"entities":["JA"],"regulator":"MIC (総務省)","termLocal":"資格 / 級 (第n級アマチュア無線技士)","termEnglish":"Operator Class","levels":[
{"code":"4","name":"4th Class","nameLocal":"第四級アマチュア無線技士","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":20,"powerNote":"Antenna power: 10 W on <=8 MHz and 21-30 MHz; 20 W above 30 MHz (1200 MHz: 10 W fixed / 1 W mobile; >=2.4 GHz per symbol 2 W or less). No Morse.","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"data"]]},{"band":"630m","ranges":[[472,479,"data"]]},{"band":"160m","ranges":[[1800,1875,"all"],[1907.5,1912.5,"data"]]},{"band":"80m","ranges":[[3500,3580,"all"],[3599,3612,"all"],[3662,3687,"all"],[3702,3716,"all"],[3745,3770,"all"],[3791,3805,"all"]]},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"12m","ranges":[[24890,24990,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,54000,"all"]]},{"band":"2m","ranges":[[144000,146000,"all"]]},{"band":"70cm","ranges":[[430000,440000,"all"]]},{"band":"23cm","ranges":[[1260000,1300000,"all"]]},{"band":"13cm","ranges":[[2400000,2450000,"all"]]},{"band":"6cm","ranges":[[5650000,5850000,"all"]]},{"band":"3cm","ranges":[[10000000,10250000,"all"],[10450000,10500000,"all"]]},{"band":"1.2cm","ranges":[[24000000,24050000,"all"]]},{"band":"6mm","ranges":[[47000000,47200000,"all"]]},{"band":"4mm","ranges":[[77500000,78000000,"all"]]},{"band":"2mm","ranges":[[134000000,136000000,"all"]]},{"band":"1mm","ranges":[[248000000,250000000,"all"]]}],
"notes":"'all' here means all modes EXCEPT Morse/CW (4th class may never send Morse). 136/475 kHz are effectively CW/narrow data per band plan; 4th class cannot use CW there. No 10, 14, 18 MHz."},
{"code":"3","name":"3rd Class","nameLocal":"第三級アマチュア無線技士","order":2,"cept":"none","issued":true,"legacy":false,"maxPowerW":50,"powerNote":"Antenna power <=50 W; only <=8 MHz or >=18 MHz; 1200 MHz 10 W fixed / 1 W mobile","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all"]]},{"band":"630m","ranges":[[472,479,"all"]]},{"band":"160m","ranges":[[1800,1875,"all"],[1907.5,1912.5,"all"]]},{"band":"80m","ranges":[[3500,3580,"all"],[3599,3612,"all"],[3662,3687,"all"],[3702,3716,"all"],[3745,3770,"all"],[3791,3805,"all"]]},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"17m","ranges":[[18068,18168,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"12m","ranges":[[24890,24990,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,54000,"all"]]},{"band":"2m","ranges":[[144000,146000,"all"]]},{"band":"70cm","ranges":[[430000,440000,"all"]]},{"band":"23cm","ranges":[[1260000,1300000,"all"]]},{"band":"13cm","ranges":[[2400000,2450000,"all"]]},{"band":"6cm","ranges":[[5650000,5850000,"all"]]},{"band":"3cm","ranges":[[10000000,10250000,"all"],[10450000,10500000,"all"]]},{"band":"1.2cm","ranges":[[24000000,24050000,"all"]]},{"band":"6mm","ranges":[[47000000,47200000,"all"]]},{"band":"4mm","ranges":[[77500000,78000000,"all"]]},{"band":"2mm","ranges":[[134000000,136000000,"all"]]},{"band":"1mm","ranges":[[248000000,250000000,"all"]]}],
"notes":"No 10 MHz or 14 MHz. Legacy 電信級 holders are now 3rd class."},
{"code":"2","name":"2nd Class","nameLocal":"第二級アマチュア無線技士","order":3,"cept":"none","issued":true,"legacy":false,"maxPowerW":200,"powerNote":"Antenna power <=200 W (2AF); mobile 2AM 50 W; 144/430 MHz 50 W","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all"]]},{"band":"630m","ranges":[[472,479,"all"]]},{"band":"160m","ranges":[[1800,1875,"all"],[1907.5,1912.5,"all"]]},{"band":"80m","ranges":[[3500,3580,"all"],[3599,3612,"all"],[3662,3687,"all"],[3702,3716,"all"],[3745,3770,"all"],[3791,3805,"all"]]},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"30m","ranges":[[10100,10150,"all"]]},{"band":"20m","ranges":[[14000,14350,"all"]]},{"band":"17m","ranges":[[18068,18168,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"12m","ranges":[[24890,24990,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,54000,"all"]]},{"band":"2m","ranges":[[144000,146000,"all"]]},{"band":"70cm","ranges":[[430000,440000,"all"]]},{"band":"23cm","ranges":[[1260000,1300000,"all"]]},{"band":"13cm","ranges":[[2400000,2450000,"all"]]},{"band":"6cm","ranges":[[5650000,5850000,"all"]]},{"band":"3cm","ranges":[[10000000,10250000,"all"],[10450000,10500000,"all"]]},{"band":"1.2cm","ranges":[[24000000,24050000,"all"]]},{"band":"6mm","ranges":[[47000000,47200000,"all"]]},{"band":"4mm","ranges":[[77500000,78000000,"all"]]},{"band":"2mm","ranges":[[134000000,136000000,"all"]]},{"band":"1mm","ranges":[[248000000,250000000,"all"]]}],"notes":""},
{"code":"1","name":"1st Class","nameLocal":"第一級アマチュア無線技士","order":4,"cept":"HAREC-level (recognised by NZ)","issued":true,"legacy":false,"maxPowerW":1000,"powerNote":"1AF: 1 kW HF (EIRP<=1 W on 136/475 kHz), 500 W 50 MHz (1 kW DX 50-51.5), 50 W 144/430, 10 W 1200; mobile 1AM 50 W","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all"]]},{"band":"630m","ranges":[[472,479,"all"]]},{"band":"160m","ranges":[[1800,1875,"all"],[1907.5,1912.5,"all"]]},{"band":"80m","ranges":[[3500,3580,"all"],[3599,3612,"all"],[3662,3687,"all"],[3702,3716,"all"],[3745,3770,"all"],[3791,3805,"all"]]},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"30m","ranges":[[10100,10150,"all"]]},{"band":"20m","ranges":[[14000,14350,"all"]]},{"band":"17m","ranges":[[18068,18168,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"12m","ranges":[[24890,24990,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,54000,"all"]]},{"band":"2m","ranges":[[144000,146000,"all"]]},{"band":"70cm","ranges":[[430000,440000,"all"]]},{"band":"23cm","ranges":[[1260000,1300000,"all"]]},{"band":"13cm","ranges":[[2400000,2450000,"all"]]},{"band":"6cm","ranges":[[5650000,5850000,"all"]]},{"band":"3cm","ranges":[[10000000,10250000,"all"],[10450000,10500000,"all"]]},{"band":"1.2cm","ranges":[[24000000,24050000,"all"]]},{"band":"6mm","ranges":[[47000000,47200000,"all"]]},{"band":"4mm","ranges":[[77500000,78000000,"all"]]},{"band":"2mm","ranges":[[134000000,136000000,"all"]]},{"band":"1mm","ranges":[[248000000,250000000,"all"]]}],"notes":""}],
"callsignInference":"None from the call sign. The station licence's 一括表示記号 (1AF/1AM...4AF/4AM) encodes the class if the user enters it.","asOf":"2026-10","confidence":"high"}
```

---

## China (BY)

### 1. Regulator and rules
- **Regulator:** Ministry of Industry and Information Technology (MIIT, 工业和信息化部). Its national radio administration bureau and the provincial radio administrations issue station licences. **(H)**
- **Rules:** **《业余无线电台管理办法》 (Administrative Measures for Amateur Radio Stations), MIIT Order No. 67.** **(H)**
  - Adopted 2024-01-11, in force from **2024-03-01**. It repeals Order No. 22 (2012).
  - URL: https://www.gov.cn/gongbao/2024/issue_11286/202404/content_6945591.html
  - Also: https://www.miit.gov.cn/zcfg/wxdl/art/2024/art_3c0db49faea543f1a7bf54318b60df6a.html
  - Annex 1 (application form with the band list) and Annex 2 (call sign rules) are on the MIIT page. **(H)**

### 2. Term
- **业余无线电台操作技术能力类别** ("amateur radio station operating technical ability **category**"), i.e. **A类 / B类 / C类**. **(H)**
- Suggested English UI: **"Operator Class"** (Class A/B/C).

### 3. Current levels (lowest to highest) **(H)**

| Order | Code | Local | Who can take the exam | Privilege (Art. 30) | Issued? |
|---|---|---|---|---|---|
| 1 | A | A类 | anyone | **30–3000 MHz, ≤ 25 W** | yes (provincial or national exam) |
| 2 | B | B类 | ≥ 6 months holding a station licence | **< 15 W below 30 MHz** (all amateur bands); ≤ 25 W above 30 MHz | yes (provincial or national) |
| 3 | C | C类 | ≥ 18 months holding a licence that lists HF bands | **≤ 1000 W below 30 MHz**; ≤ 25 W above 30 MHz | yes (national exam only) |

Additional rules: **(H)**
- **Minors** may only operate 30–3000 MHz at ≤ 25 W (Art. 8).
- HF stations of **15 W or more** require approval by the national administration (Art. 10/16).
- A C-class holder may get temporary approval for more than the licensed power for special tests (Art. 41).
- **CEPT:** no equivalence.

### 4. Legacy levels
- **Grandfathered pre-2024 B class (Art. 58).** **(H)**
  - Holders who obtained B **before 2024-03-01** may apply for HF stations up to **≤ 100 W** below 30 MHz (≤ 25 W above).
  - Existing station licences remain valid with their listed parameters until they expire.
- **Pre-2013 system:** 一级 / 二级 / 三级 (VHF/UHF or HF) / 四级 (listen-only) operator certificates. I could not confirm a primary source for how these map to A/B/C. **(L)**

### 5. Band privileges
**No class-based mode restrictions.** Bands available in the 2024 application form (Annex 1). **(H)**

| Band | Range | A | B | C |
|---|---|---|---|---|
| 2200 m | 135.7–137.8 | – | yes | yes |
| 160 m | 1800–2000 | – | yes | yes |
| 80 m | 3500–3900 | – | yes | yes |
| 60 m | 5351.5–5366.5 | – | yes | yes |
| 40 m | 7000–7200 | – | yes | yes |
| 30 m | 10100–10150 | – | yes | yes |
| 20 m | 14000–14350 | – | yes | yes |
| 17 m | 18068–18168 | – | yes | yes |
| 15 m | 21000–21450 | – | yes | yes |
| 12 m | 24890–24990 | – | yes | yes |
| 10 m | 28000–29700 | – | yes | yes |
| 6 m | 50–54 MHz | yes | yes | yes |
| 2 m | 144–148 MHz | yes | yes | yes |
| 70 cm | 430–440 MHz | yes | yes | yes |
| 23 cm | 1240–1300 MHz | yes | yes | yes |
| 13 cm | 2300–2450 MHz | yes | yes | yes |
| 9 cm | 3300–3500 MHz | – (above 3000 MHz) | yes | yes |
| 6 cm | 5650–5850 MHz | – | yes | yes |
| 3 cm and up | 10–10.5, 24.05–24.25, 47–47.2, 76–81.5, 134–141, 241–248 GHz | – | yes | yes |

- Power: B is < 15 W HF (< 100 W if grandfathered); C is ≤ 1000 W HF; everyone is ≤ 25 W above 30 MHz.
- **472–479 kHz is not on the form** (not allocated). **(H)**
- The rules do not say whether power is PEP or mean ("最大发射功率", maximum transmit power). **(L)**

### 6. Call sign inference
**None.** **(H)**
- **Format:** B + station-type letter + zone digit + suffix of 1–4 letters (Annex 2).
- **General stations** use type letters **G, H, I, D, A, B, C, E, F, K, L**, assigned **sequentially in that order**. They do not indicate class.
- **Other type letters:** J is space stations, R is repeaters and beacons, and S/T/Y/Z are reserved (e.g. BY clubs, BT special).
- **Suffixes:** 1-letter and 4-letter suffixes are reserved nationally.
- **Historical patterns:** BA calls were historically the oldest or highest-grade, and BD/BG the later series. Treat these patterns as anecdotal. **(L)**

### 7. Sources
- gov.cn State Council Gazette 2024 No. 11: full text of Order 67 (Arts. 8, 10, 25–30, 41, 58). **(H)**
- MIIT attachments: `/cms_files/filemanager/1226211233/attach/202312/d850c4f65a9d4df6a3d7fae8e3c4925e.pdf` (application form with the band list) and `.../20238/e3a97cec523441028cc51de62886101c.pdf` (call sign rules). **(H)**

**Not verified:**
- The power measurement basis.
- How the pre-2013 grades convert.
- The current issue status of BA/BD calls.

```json
{"entities":["BY","BT"],"regulator":"MIIT (工业和信息化部)","termLocal":"业余无线电台操作技术能力类别 (A类/B类/C类)","termEnglish":"Operator Class","levels":[
{"code":"A","name":"Class A","nameLocal":"A类","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":25,"powerNote":"<=25 W, 30-3000 MHz only (basis unspecified)","bands":[
{"band":"6m","ranges":[[50000,54000,"all"]]},{"band":"2m","ranges":[[144000,148000,"all"]]},{"band":"70cm","ranges":[[430000,440000,"all"]]},{"band":"23cm","ranges":[[1240000,1300000,"all"]]},{"band":"13cm","ranges":[[2300000,2450000,"all"]]}],"notes":"Minors are limited to these privileges regardless of class."},
{"code":"B","name":"Class B","nameLocal":"B类","order":2,"cept":"none","issued":true,"legacy":false,"maxPowerW":15,"powerNote":"<15 W below 30 MHz; <=25 W above 30 MHz","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all"]]},{"band":"160m","ranges":[[1800,2000,"all"]]},{"band":"80m","ranges":[[3500,3900,"all"]]},{"band":"60m","ranges":[[5351.5,5366.5,"all"]]},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"30m","ranges":[[10100,10150,"all"]]},{"band":"20m","ranges":[[14000,14350,"all"]]},{"band":"17m","ranges":[[18068,18168,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"12m","ranges":[[24890,24990,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,54000,"all"]]},{"band":"2m","ranges":[[144000,148000,"all"]]},{"band":"70cm","ranges":[[430000,440000,"all"]]},{"band":"23cm","ranges":[[1240000,1300000,"all"]]},{"band":"13cm","ranges":[[2300000,2450000,"all"]]},{"band":"9cm","ranges":[[3300000,3500000,"all"]]},{"band":"6cm","ranges":[[5650000,5850000,"all"]]},{"band":"3cm","ranges":[[10000000,10500000,"all"]]},{"band":"1.2cm","ranges":[[24050000,24250000,"all"]]},{"band":"6mm","ranges":[[47000000,47200000,"all"]]},{"band":"4mm","ranges":[[76000000,81500000,"all"]]},{"band":"2mm","ranges":[[134000000,141000000,"all"]]},{"band":"1mm","ranges":[[241000000,248000000,"all"]]}],"notes":"Requires >=6 months as a licensed station."},
{"code":"B-pre2024","name":"Class B (obtained before 2024-03-01)","nameLocal":"B类 (2024年3月1日前取得)","order":2,"cept":"none","issued":false,"legacy":true,"maxPowerW":100,"powerNote":"<=100 W below 30 MHz; <=25 W above","bands":[],"notes":"Same bands as Class B; Order 67 Art. 58 grandfathers the higher HF power."},
{"code":"C","name":"Class C","nameLocal":"C类","order":3,"cept":"none","issued":true,"legacy":false,"maxPowerW":1000,"powerNote":"<=1000 W below 30 MHz; <=25 W above 30 MHz","bands":[],"notes":"Same bands as Class B. National exam only; requires >=18 months with an HF-endorsed licence."}],
"callsignInference":"None. Type letter (G,H,I,D,A,B,C,E,F,K,L) is assigned sequentially, not by class.","asOf":"2026-10","confidence":"high"}
```

---

## Malaysia (9M2, 9W2, 9M6/9M8, 9W6/9W8, 9W3)

### 1. Regulator and rules
- **Regulator:** Malaysian Communications and Multimedia Commission (MCMC, Suruhanjaya Komunikasi dan Multimedia Malaysia). **(H)**
- **Legal basis:** Communications and Multimedia Act 1998. Stations are authorised by an **Apparatus Assignment (AA)** for an "Amateur Station Class A/B/C", backed by an **Amateur Radio Operator's Certificate (AROC)** of the same class.
- **Governing document:** *Guidelines for Amateur Radio Service in Malaysia*, Third Edition (20 Dec 2022). Appendix 4 holds the frequency, power and emission table by class. **(H)**
  - URL: https://www.mcmc.gov.my/skmmgovmy/media/General/pdf2/Guidelines-for-Amateur-Radio-Service-in-Malaysia-3rd-Edition.pdf
- **Class C** (9W3) was introduced and became the **entry level from 1 Jan 2023**. **(H** guideline; **M** for the date)
- The AAIG portal (aaig.mcmc.gov.my) was down for maintenance during this research.

### 2. Term
- **"Class"** (Class A/B/C), on both the AROC and the AA. Malay: "Kelas". **(H)**
- Suggested English UI: **"Licence Class"**.

### 3. Current levels (lowest to highest) **(H)**

| Order | Code | Name | Prefix | Requirement | Issued? |
|---|---|---|---|---|---|
| 1 | C | Class C | 9W3 (nationwide) | RAE Class C; minimum age 12 | yes |
| 2 | B | Class B | 9W2 (W. Malaysia), 9W6 (Sabah), 9W8 (Sarawak) | AROC C + RAE Class B | yes |
| 3 | A | Class A | 9M2 (W. Malaysia), 9M6, 9M8 | AROC B + ≥ 1 year on an AA Class B + RAE Class A (the CW test was dropped) | yes |

- **CEPT:** none formally. Class A is the full licence. **(M)**

### 4. Legacy levels
- Before 2023 there were only Class B (9W, the former no-code VHF/limited-HF licence) and Class A (9M). Those holders keep their class. **(M)**
- No other grandfathered classes were found.

### 5. Band privileges (Appendix 4) **(H)**
Power is in **watts PEP measured at the final amplifier output** unless stated otherwise.

| Band | Range (MHz) | Class A | Class B | Class C |
|---|---|---|---|---|
| 2200 m | 0.1357–0.1378 | 1 W EIRP: A1A, A2A, J2B, J2D (CW and data) | – | – |
| 630 m | 0.472–0.479 | 5 W EIRP: same emissions | – | – |
| 160 m | 1.800–2.000 | 1000 W | – | – |
| 80 m | 3.500–3.900 | 1000 W | 50 W | – |
| 60 m | 5.3515–5.3665 | 15 W EIRP | 15 W EIRP | – |
| 40 m | 7.000–7.200 | 1000 W | 50 W | – |
| 30 m | 10.100–10.150 | 1000 W: **CW and data only** (no SSB) | 50 W: CW and data only | – |
| 20/17/15/12 m | 14.000–14.350, 18.068–18.168, 21.000–21.450, 24.890–24.990 | 1000 W | 50 W | – |
| 10 m | 28.000–29.700 | 1000 W (adds F3E FM) | 50 W | – |
| 6 m | 50–54 | 500 W | 50 W | **25 W, FM voice/data only** (F1D, F1E, F2D, F3E, FXD, FXE) |
| 2 m | 144–148 | 50 W | 50 W | 25 W, FM only |
| 70 cm | 430–440 | 50 W | 50 W | 25 W, FM only |
| 23 cm and up to 3 cm | 1240–1300, 2400–2450, 3300–3400, 5650–5850, 10000–10500 | 50 W | – | – |
| 1.2 cm, 6 mm, 4 mm | 24000–24250, 47000–47200, 76000–81500 | 50 W | – | – |
| 1 mm | 241000–250000 | 25 W | – | – |

- **HF emissions:** both A and B include A1A, A3E, J3E, R3E, F1B, G1B etc. Class B has the same HF modes as A.
- Some microwave bands (marked #) need case-by-case MCMC approval.

### 6. Call sign inference
**Yes, from the prefix.** The guideline's own rule is: "MCMC will issue a call sign with '9W3', '9W2/6/8', or '9M' prefix depending on the operating class." **(H)**

| Prefix | Class |
|---|---|
| 9W3 | C |
| 9W2 / 9W6 / 9W8 | B |
| 9M2 / 9M6 / 9M8 | A |

- Reliability: **high**.
- **Exceptions:** 9M4 and other special/club/event calls, and 9M0 (Spratly). These should not be inferred.

### 7. Sources
- MCMC Guidelines, Third Edition PDF (above): paras 8, 25–26 and 69–70; Appendix 4 (pp. 64–66, read from rendered page images). **(H)**
- https://forum.lowyat.net/topic/4785871/+60 and https://callsign.hamradio.my/exam: Class C start date of 1 Jan 2023. **(M)**

**Not verified:**
- The current MCMC "Guideline on the Allocation of Call Sign to the Amateur Radio Service" (not found online).
- Whether a 4th edition of the guidelines exists after 2022.
- The 9M4 usage.

```json
{"entities":["9M2","9M6","9M8","9W2","9W6","9W8","9W3"],"regulator":"MCMC","termLocal":"Kelas (AROC / Apparatus Assignment Class)","termEnglish":"Licence Class","levels":[
{"code":"C","name":"Class C","nameLocal":"Kelas C","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":25,"powerNote":"25 W PEP at final amplifier output","bands":[
{"band":"6m","ranges":[[50000,54000,"phone"],[50000,54000,"data"]]},{"band":"2m","ranges":[[144000,148000,"phone"],[144000,148000,"data"]]},{"band":"70cm","ranges":[[430000,440000,"phone"],[430000,440000,"data"]]}],"notes":"FM only (F1D,F1E,F2D,F3E,FXD,FXE). Entry level since 2023."},
{"code":"B","name":"Class B","nameLocal":"Kelas B","order":2,"cept":"none","issued":true,"legacy":false,"maxPowerW":50,"powerNote":"50 W PEP; 60m 15 W EIRP","bands":[
{"band":"80m","ranges":[[3500,3900,"all"]]},{"band":"60m","ranges":[[5351.5,5366.5,"all"]]},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"30m","ranges":[[10100,10150,"CW"],[10100,10150,"data"]]},{"band":"20m","ranges":[[14000,14350,"all"]]},{"band":"17m","ranges":[[18068,18168,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"12m","ranges":[[24890,24990,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,54000,"all"]]},{"band":"2m","ranges":[[144000,148000,"all"]]},{"band":"70cm","ranges":[[430000,440000,"all"]]}],"notes":"No 2200/630/160m or microwave."},
{"code":"A","name":"Class A","nameLocal":"Kelas A","order":3,"cept":"full","issued":true,"legacy":false,"maxPowerW":1000,"powerNote":"1000 W PEP HF; 500 W 6m; 50 W 2m/70cm/microwave; 25 W 241-250 GHz; 1 W EIRP 2200m, 5 W EIRP 630m, 15 W EIRP 60m","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"CW"],[135.7,137.8,"data"]]},{"band":"630m","ranges":[[472,479,"CW"],[472,479,"data"]]},{"band":"160m","ranges":[[1800,2000,"all"]]},{"band":"80m","ranges":[[3500,3900,"all"]]},{"band":"60m","ranges":[[5351.5,5366.5,"all"]]},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"30m","ranges":[[10100,10150,"CW"],[10100,10150,"data"]]},{"band":"20m","ranges":[[14000,14350,"all"]]},{"band":"17m","ranges":[[18068,18168,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"12m","ranges":[[24890,24990,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,54000,"all"]]},{"band":"2m","ranges":[[144000,148000,"all"]]},{"band":"70cm","ranges":[[430000,440000,"all"]]},{"band":"23cm","ranges":[[1240000,1300000,"all"]]},{"band":"13cm","ranges":[[2400000,2450000,"all"]]},{"band":"9cm","ranges":[[3300000,3400000,"all"]]},{"band":"6cm","ranges":[[5650000,5850000,"all"]]},{"band":"3cm","ranges":[[10000000,10500000,"all"]]},{"band":"1.2cm","ranges":[[24000000,24250000,"all"]]},{"band":"6mm","ranges":[[47000000,47200000,"all"]]},{"band":"4mm","ranges":[[76000000,81500000,"all"]]},{"band":"1mm","ranges":[[241000000,250000000,"all"]]}],"notes":""}],
"callsignInference":"Prefix encodes class: 9W3=C; 9W2/9W6/9W8=B; 9M2/9M6/9M8=A (high). Exclude special/club calls (e.g. 9M4) and 9M0.","asOf":"2026-10","confidence":"high"}
```

---

## Republic of Korea (HL)

### 1. Regulator and rules
- **Regulator:** Ministry of Science and ICT (MSIT, 과학기술정보통신부).
  - Station licences are issued by the Central Radio Management Service (중앙전파관리소).
  - Operator qualification exams are run by the Korea Communications Agency (KCA, 한국방송통신전파진흥원).
  - The Korean Amateur Radio League (KARL) runs the 4th-class course. **(H/M)**
- **Operating scope by grade:** 전파법 시행령 (Enforcement Decree of the Radio Waves Act), Art. 115 and **[별표 17]**, last amended 2016-06-21. Decree version in force 2025-10-01. **(H)**
  - URL: https://www.law.go.kr/법령/전파법시행령
- **Station conditions:** Decree Art. 3 (station-opening conditions): **antenna supply power ≤ 1 kW, mobile amateur stations ≤ 50 W.** **(H)**
- **Frequencies:** 「무선국의 운용 등에 관한 규정」 (Regulation on Operation of Radio Stations, MSIT notice 2025-1), **[별표 8] 아마추어국이 사용할 수 있는 주파수** (frequencies amateur stations may use). **(H)**

### 2. Term
- **급 (geup, "grade/class")** of 아마추어무선기사 (amateur radio operator) **자격 (qualification)**: 제1급 … 제4급. **(H)**
- Suggested English UI: **"Operator Class"**.

### 3. Current levels (lowest to highest) **(H)**

| Order | Code | Local | English | Scope ([별표 17]) | Issued? |
|---|---|---|---|---|---|
| 1 | 4 | 제4급 아마추어무선기사 | 4th Class | **≤ 10 W, frequencies ≥ 30 MHz only, no Morse** | yes |
| 2 | 3P | 제3급 아마추어무선기사(전화급) | 3rd Class (Telephony) | **≤ 100 W, ≥ 21 MHz or ≤ 8 MHz, no Morse** | yes |
| 3 | 3T | 제3급 아마추어무선기사(전신급) | 3rd Class (Telegraphy) | **≤ 100 W, ≥ 21 MHz or ≤ 8 MHz** (CW permitted) | yes |
| 4 | 2 | 제2급 아마추어무선기사 | 2nd Class | **≤ 200 W**, all amateur bands | yes |
| 5 | 1 | 제1급 아마추어무선기사 | 1st Class | **≤ 1 kW**, all amateur bands | yes |

- Holders of commercial licences (전파전자통신기사, 무선통신사 etc.) get 1st, 2nd or 3rd(전화급) amateur scope ([별표 17]). **(H)**
- **CEPT:** none. **(L)**

### 4. Legacy levels
- None found beyond the five above. The 3rd class Telephony/Telegraphy split is itself the long-standing structure.
- I found no 2024–2026 amendment that expands 4th-class HF access. **(M**: negative search)

### 5. Band privileges
**Frequency table ([별표 8]):** **(H)**

| Band | Range | 4th | 3rd | 2nd/1st |
|---|---|---|---|---|
| 160 m | 1800–1825 | – | yes | yes |
| 80 m | 3500–3550, 3790–3800 | – | yes | yes |
| 40 m | 7000–7200 | – | yes | yes |
| 30 m | 10100–10150 | – | – | yes |
| 20 m | 14000–14350 | – | – | yes |
| 17 m | 18068–18168 | – | – | yes |
| 15 m | 21000–21450 | – | yes | yes |
| 12 m | 24890–24990 | – | yes | yes |
| 10 m | 28000–29700 | – | yes | yes |
| 6 m | 50–54 MHz | yes | yes | yes |
| 2 m | 144–146 MHz | yes | yes | yes |
| 70 cm | 430–440 MHz | yes | yes | yes |
| 23 cm | 1260–1300 MHz | yes | yes | yes |
| 13 cm | 2400–2450 MHz | yes | yes | yes |
| 3 cm | 10.3–10.5 GHz | yes | yes | yes |
| Above | 24–24.05, 47–47.2, 75.5–76, 142–144, 248–250 GHz | yes | yes | yes |

- [별표 8] does **not** list 135 kHz, 472 kHz or 5 MHz.
- Mode limits by class: 4th and 3rd(전화급) may not send Morse. Otherwise there are no class-based mode segments.
- **Power:** 1st 1 kW, 2nd 200 W, 3rd 100 W, 4th 10 W. Any mobile station is limited to 50 W.
  - Power is 안테나공급전력 (antenna supply power).
  - The decree does not say whether this is PEP or mean. **(L)**

### 6. Call sign inference
**None reliable.** **(M)**
- Series: HL, DS (also DT), 6K–6N, D7–D9.
- The digit is the region; 0 is clubs/science stations.
- HL calls keep their suffix across regions. Resident foreigners get HLnZxx.
- No documented mapping to grade.

### 7. Sources
- law.go.kr: 전파법 시행령 (lsiSeq 278235, version in force 2025-10-01), Arts. 3, 103–105, 115; **[별표 17] PDF** (flSeq 157120879). **(H)**
- law.go.kr: 무선국의 운용 등에 관한 규정 (admRulSeq 2100000262854, notice 2025-1), **[별표 8] PDF** (flSeq 155599583). **(H)**
- https://en.wikipedia.org/wiki/Call_signs_in_Korea: call sign series. **(L/M)**

**Not verified:**
- Whether 135.7 kHz, 472 kHz or 5 MHz are authorised by the 중앙전파관리소 outside [별表 8]. HamWiki lists 472–479 kHz in the 전파관리소 column.
- The power measurement basis.

```json
{"entities":["HL","DS","DT","6K","6L","6M","6N","D7","D8","D9"],"regulator":"MSIT (과학기술정보통신부) / 중앙전파관리소; exams KCA","termLocal":"아마추어무선기사 자격 등급 (제n급)","termEnglish":"Operator Class","levels":[
{"code":"4","name":"4th Class","nameLocal":"제4급 아마추어무선기사","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":10,"powerNote":"<=10 W antenna supply power; >=30 MHz only; no Morse","bands":[
{"band":"6m","ranges":[[50000,54000,"phone"],[50000,54000,"data"],[50000,54000,"image"]]},{"band":"2m","ranges":[[144000,146000,"phone"],[144000,146000,"data"],[144000,146000,"image"]]},{"band":"70cm","ranges":[[430000,440000,"phone"],[430000,440000,"data"],[430000,440000,"image"]]},{"band":"23cm","ranges":[[1260000,1300000,"phone"],[1260000,1300000,"data"]]},{"band":"13cm","ranges":[[2400000,2450000,"phone"],[2400000,2450000,"data"]]},{"band":"3cm","ranges":[[10300000,10500000,"phone"],[10300000,10500000,"data"]]}],"notes":"No CW. Also 24/47/75.5/142/248 GHz bands."},
{"code":"3P","name":"3rd Class (Telephony)","nameLocal":"제3급 아마추어무선기사(전화급)","order":2,"cept":"none","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"<=100 W; only <=8 MHz or >=21 MHz; no Morse","bands":[
{"band":"160m","ranges":[[1800,1825,"phone"],[1800,1825,"data"]]},{"band":"80m","ranges":[[3500,3550,"phone"],[3500,3550,"data"],[3790,3800,"phone"],[3790,3800,"data"]]},{"band":"40m","ranges":[[7000,7200,"phone"],[7000,7200,"data"]]},{"band":"15m","ranges":[[21000,21450,"phone"],[21000,21450,"data"]]},{"band":"12m","ranges":[[24890,24990,"phone"],[24890,24990,"data"]]},{"band":"10m","ranges":[[28000,29700,"phone"],[28000,29700,"data"]]},{"band":"6m","ranges":[[50000,54000,"phone"],[50000,54000,"data"]]},{"band":"2m","ranges":[[144000,146000,"phone"],[144000,146000,"data"]]},{"band":"70cm","ranges":[[430000,440000,"phone"],[430000,440000,"data"]]}],"notes":"No CW. Microwave bands as 4th class."},
{"code":"3T","name":"3rd Class (Telegraphy)","nameLocal":"제3급 아마추어무선기사(전신급)","order":3,"cept":"none","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"<=100 W; only <=8 MHz or >=21 MHz","bands":[
{"band":"160m","ranges":[[1800,1825,"all"]]},{"band":"80m","ranges":[[3500,3550,"all"],[3790,3800,"all"]]},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"12m","ranges":[[24890,24990,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,54000,"all"]]},{"band":"2m","ranges":[[144000,146000,"all"]]},{"band":"70cm","ranges":[[430000,440000,"all"]]}],"notes":"No 10/14/18 MHz. Microwave bands as 4th class."},
{"code":"2","name":"2nd Class","nameLocal":"제2급 아마추어무선기사","order":4,"cept":"none","issued":true,"legacy":false,"maxPowerW":200,"powerNote":"<=200 W; mobile <=50 W","bands":[
{"band":"160m","ranges":[[1800,1825,"all"]]},{"band":"80m","ranges":[[3500,3550,"all"],[3790,3800,"all"]]},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"30m","ranges":[[10100,10150,"all"]]},{"band":"20m","ranges":[[14000,14350,"all"]]},{"band":"17m","ranges":[[18068,18168,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"12m","ranges":[[24890,24990,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,54000,"all"]]},{"band":"2m","ranges":[[144000,146000,"all"]]},{"band":"70cm","ranges":[[430000,440000,"all"]]},{"band":"23cm","ranges":[[1260000,1300000,"all"]]},{"band":"13cm","ranges":[[2400000,2450000,"all"]]},{"band":"3cm","ranges":[[10300000,10500000,"all"]]},{"band":"1.2cm","ranges":[[24000000,24050000,"all"]]},{"band":"6mm","ranges":[[47000000,47200000,"all"]]},{"band":"4mm","ranges":[[75500000,76000000,"all"]]},{"band":"2mm","ranges":[[142000000,144000000,"all"]]},{"band":"1mm","ranges":[[248000000,250000000,"all"]]}],"notes":""},
{"code":"1","name":"1st Class","nameLocal":"제1급 아마추어무선기사","order":5,"cept":"none","issued":true,"legacy":false,"maxPowerW":1000,"powerNote":"<=1 kW; mobile <=50 W","bands":[],"notes":"Same bands as 2nd class."}],
"callsignInference":"None; HL/DS/6K-6N/D7-D9 series and digits indicate region/series, not class.","asOf":"2026-10","confidence":"high"}
```

---

## India (VU)

### 1. Regulator and rules
- **Regulator:** Wireless Planning & Coordination (WPC) Wing, Department of Telecommunications (DoT), Ministry of Communications. **(H)**
- **Rules:** **Telecommunications (Amateur Services) Rules, 2024**, G.S.R. 675(E), notified 29 Oct 2024. **(H)**
  - Made under the Telecommunications Act 2023 (s.47 r/w s.56(2)(zi)).
  - In force on publication (30 Oct 2024).
  - They **supersede the Indian Wireless Telegraphs (Amateur Service) Rules, 1978** as amended in 2009 (G.S.R. 385(E)).
  - A DoT FAQ of 05.12.2024 (No. P-14036/02/2023-COP) cites the rules as "GSR 657(E)", apparently a typo.
  - Text via NIAR compilation (21 Mar 2025): https://www.qsl.net/vu2jos/WPC2020.pdf
- **No band or power schedule in the 2024 rules.** **(H)**
  - Rule 7(1) says bands, emissions and power are "as specified by the Central Government in respect of each category", and that General gets "more emission types and higher power" than Restricted.
  - In practice the 2009 schedule ("Authorised Frequency Bands, Power & Emissions for Radio Amateurs in India") remains the operative published table. **(M)**
- **Migration:** a DoT Office Memorandum of 11.03.2025 required booklet-era licences to migrate to the Saral Sanchar portal by 15.09.2025. **(H)**

### 2. Term
- **"Category"** of Amateur Station Operator Certificate (ASOC). Before 2009 the term was "Grade", and "General Grade / Restricted Grade" is still common usage. **(H)**
- Suggested English UI: **"Licence Grade"** or **"Category"**.

### 3. Current levels (lowest to highest) **(H)**

| Order | Code | Name | Exam | Issued? |
|---|---|---|---|---|
| 1 | R | ASOC (Restricted) | written, ≥ 40%, no Morse | yes |
| 2 | G | ASOC (General) | written ≥ 40%, plus Morse proficiency (Rule 5(4)) | yes |

- **CEPT:** none. **(L)**

### 4. Legacy levels
The 2009 amendment rules note: **(H)**
- **Grade II and Grade II Restricted** migrate to **Restricted** at renewal. The licence notes the old type. **Old Grade II licensees keep CW (A1A/A2A) privileges** on the Restricted bands.
- **Grade I and Advanced Grade** migrate to **General**.
- Short Wave Listener (receive only) no longer exists as a licence. **(M)**

### 5. Band privileges (2009 schedule, still the published reference) **(H** for 2009 text; **M** that it is still applied)
Power is **DC input power to the final stage**, not RF output.

| Band | Range | Restricted | General |
|---|---|---|---|
| 160 m | 1820–1860 | 50 W DC input; A3E, H3E, J3E, R3E (phone only) | 400 W DC input; A1A, A2A, A3E, H3E, J3E, R3E, F1B, F2B, F3E, F3C, A3C, A3F |
| 80 m | 3500–3700 | same | same |
| 75 m | 3890–3900 | same | same |
| 40 m | 7000–7200 | same | same |
| 30 m | 10100–10150 | same | same |
| 20 m | 14000–14350 | same | same |
| 17 m | 18068–18168 | same | same |
| 15 m | 21000–21450 | same | same |
| 12 m | 24890–24990 | same | same |
| 10 m | 28000–29700 | same | same |
| 2 m | 144–146 MHz | 10 W; F1B, F2B, F3E, F3C | 25 W; same emissions |
| 70 cm | 434–438 MHz | 10 W; same | 25 W; same |
| 5 cm | 5725–5840 MHz | – | 25 W |

- Amateur-satellite service is General only, 30 dBW EIRP.
- Restricted gets **no CW on HF** (phone only), except legacy Grade II holders.
- Restricted also gets no RTTY/data (F1B), no SSTV and no FAX.
- Bands reported in secondary sources but **not** in the 2009 published schedule: 6 m (50–54 MHz), 60 m (5351.5–5366.5), 630 m and 23 cm. Wikipedia lists 6 m at 10/25 W, which may come from individual licence endorsements. **(L)**

### 6. Call sign inference
**Partial.** The 2009 rules note 3: "VU2 shall be reserved for General Grade and VU3 to Restricted Grade for **future** licences". **(H)**
- **VU3** generally means Restricted. Reliability: medium-high. A VU3 holder who later upgraded may keep the call. **(L)**
- **VU2** was issued to every grade before 2009, so many old Grade II (now Restricted) holders have VU2 calls. VU2 **does not reliably mean General.** Reliability: low.
- Special-event calls (AT, AU, VU…) exist.

### 7. Sources
- https://www.qsl.net/vu2jos/WPC2020.pdf: NIAR compilation with the 2024 rules text, DoT FAQ 05.12.2024, rule-change table and migration OM 11.03.2025. **(H**: verbatim gazette; FAQ/OM read from page images)
- http://www.niar.org/downloads/ham-downloads/Amateur-Radio-Rules.pdf: 2009 amendment rules, grade migration notes, VU2/VU3 rule, band/power/emission schedule p.19. **(H)**
- https://www.scconline.com/blog/post/2024/11/04/ministry-of-communication-notifies-telecommunications-amateur-services-rules/: notification dates. **(M)**
- https://en.wikipedia.org/wiki/Amateur_radio_licence_categories_in_India and https://en.wikipedia.org/wiki/List_of_amateur_radio_frequency_bands_in_India: leads only. **(L)**

**Not verified:**
- Any post-2024 DoT order specifying bands and power per category (none found; eservices.dot.gov.in returned 403).
- 6 m, 60 m and 23 cm status.

```json
{"entities":["VU"],"regulator":"DoT / WPC Wing","termLocal":"Category of ASOC (formerly 'Grade')","termEnglish":"Licence Grade","levels":[
{"code":"R","name":"Restricted","nameLocal":"ASOC (Restricted)","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":50,"powerNote":"50 W DC input to final stage on HF; 10 W on VHF/UHF","bands":[
{"band":"160m","ranges":[[1820,1860,"phone"]]},{"band":"80m","ranges":[[3500,3700,"phone"],[3890,3900,"phone"]]},{"band":"40m","ranges":[[7000,7200,"phone"]]},{"band":"30m","ranges":[[10100,10150,"phone"]]},{"band":"20m","ranges":[[14000,14350,"phone"]]},{"band":"17m","ranges":[[18068,18168,"phone"]]},{"band":"15m","ranges":[[21000,21450,"phone"]]},{"band":"12m","ranges":[[24890,24990,"phone"]]},{"band":"10m","ranges":[[28000,29700,"phone"]]},{"band":"2m","ranges":[[144000,146000,"phone"],[144000,146000,"data"]]},{"band":"70cm","ranges":[[434000,438000,"phone"],[434000,438000,"data"]]}],"notes":"HF phone only (A3E/H3E/J3E/R3E); VHF/UHF F1B/F2B/F3E/F3C. Legacy Grade II holders (migrated here) may also use A1A/A2A (CW)."},
{"code":"G","name":"General","nameLocal":"ASOC (General)","order":2,"cept":"none","issued":true,"legacy":false,"maxPowerW":400,"powerNote":"400 W DC input on HF; 25 W VHF/UHF/5.7 GHz; satellite 30 dBW EIRP","bands":[
{"band":"160m","ranges":[[1820,1860,"all"]]},{"band":"80m","ranges":[[3500,3700,"all"],[3890,3900,"all"]]},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"30m","ranges":[[10100,10150,"all"]]},{"band":"20m","ranges":[[14000,14350,"all"]]},{"band":"17m","ranges":[[18068,18168,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"12m","ranges":[[24890,24990,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"2m","ranges":[[144000,146000,"all"]]},{"band":"70cm","ranges":[[434000,438000,"all"]]},{"band":"6cm","ranges":[[5725000,5840000,"all"]]}],"notes":"Legacy Grade I and Advanced map here."},
{"code":"GII","name":"Grade II (legacy)","nameLocal":"Grade II / Grade II Restricted","order":1,"cept":"none","issued":false,"legacy":true,"maxPowerW":50,"powerNote":"as Restricted","bands":[],"notes":"Migrates to Restricted; keeps A1A/A2A (CW) on Restricted bands."},
{"code":"GI","name":"Grade I / Advanced (legacy)","nameLocal":"Grade I / Advanced Grade","order":2,"cept":"none","issued":false,"legacy":true,"maxPowerW":400,"powerNote":"as General","bands":[],"notes":"Migrates to General."}],
"callsignInference":"Since 2009, new VU3 = Restricted, new VU2 = General. Pre-2009 VU2 calls were issued to all grades, so VU2 alone is not proof of General (low); VU3 suggests Restricted (medium).","asOf":"2026-10","confidence":"medium"}
```

---

## Indonesia (YB)

### 1. Regulator and rules
- **Regulator:** Kementerian Komunikasi dan Digital (Komdigi). It was Kominfo until Oct 2024. The Ditjen SDPPI (Directorate General of Resources and Equipment for Post and Informatics) issues licences.
- ORARI (Organisasi Amatir Radio Indonesia) is the recognised national society. **(H)**
- **Rules:** **Peraturan Menteri Kominfo No. 17 Tahun 2018** tentang Kegiatan Amatir Radio dan Komunikasi Radio Antar Penduduk, dated 31 Dec 2018. **(H)**
  - It revoked PM 33/PER/M.KOMINFO/08/2009.
  - URL: https://jdih.komdigi.go.id/storage/files/1547180160-PM_Kominfo_No_17_Tahun_2018_JDIH.pdf
- **Pending draft:** a consultation draft *"Ketentuan Operasional Operator Radio Maritim, Amatir Radio, dan KRAP"* (labelled 2020, hosted by Komdigi) would replace it. It keeps the same three tiers, powers and prefixes. **I found no evidence it has been enacted.** **(M)**

### 2. Term
- **"Tingkat"** (level) of the **IAR (Izin Amatir Radio)**. **(H)**
- The regulation supplies its own English glosses: **Siaga (General), Penggalang (Advanced), Penegak (Extra Class)**.
- Suggested English UI: **"Licence Level"**, showing the local name with its gloss.

### 3. Current levels (lowest to highest) **(H)**

| Order | Code | Local | Official English | Prefix | Issued? |
|---|---|---|---|---|---|
| 1 | D | Tingkat Siaga | General | YD or YG | yes (UNAR exam, or holders of the Restricted/General Radio Operator certificates) |
| 2 | C | Tingkat Penggalang | Advanced | YC or YF | yes (upgrade via UNAR; holders of Radio Electronics Operator Class I/II may enter here) |
| 3 | B | Tingkat Penegak | Extra Class | YB or YE | yes (upgrade via UNAR) |

- Upgrades must go one tier at a time (Pasal 11). UNAR is the national amateur radio exam (Ujian Negara Amatir Radio).
- **CEPT:** none. **(L)**

### 4. Legacy levels
- Before 2009 there was a lower **Tingkat Pemula** (beginner) tier. It is reported to have been folded into Siaga. **(L)**
- **YH** is now reserved for **IAR Khusus** (special purpose: training, experiments, JOTA, repeaters/beacons, disaster). **7A–7I and 8A–8I** are IAR Khusus at Penegak level (DXpeditions, contests, IOTA, ORARI special calls). **(H)**

### 5. Band privileges

**Power (Pasal 43):** "effective power supplied to the antenna", basis (PEP vs mean) not stated. **(H)**

| Tier | Below 30 MHz | Above 30 MHz |
|---|---|---|
| Siaga | 100 W | 75 W |
| Penggalang | 500 W | 200 W |
| Penegak | 1000 W | 500 W |

- 60 m (5351.5–5366.5): 15 W maximum.
- DXpedition, international contest, IOTA and EME: up to 2000 W with a special permit.

**Bands by tier (Lampiran II):** the regulation ticks each sub-segment per tier; summarised below. **(H)**

| Band | Penegak | Penggalang | Siaga |
|---|---|---|---|
| 2200 m 135.7–137.8 (CW, data) | yes | yes | – |
| 630 m 472–479 (CW, data) | yes | yes | – |
| 160 m 1800–2000 | yes | yes | – |
| 80 m 3500–3900 | yes | yes | **yes** |
| 60 m 5351.5–5366.5 | yes (15 W) | – | – |
| 40 m 7000–7200 | yes | yes | **yes** |
| 30 m 10100–10150 (CW, data) | yes | – | – |
| 20 m 14000–14350 | yes | **14000–14150 only** | – |
| 17 m 18068–18168 | yes | – | – |
| 15 m 21000–21450 | yes | yes | **21000–21200 CW only, plus data 21070–21125** |
| 12 m 24890–24990 | yes | – | – |
| 10 m 28000–29700 | yes | yes | **yes** |
| 6 m 50–54 MHz | yes | yes | – |
| 2 m 144–148 MHz | yes | yes | yes |
| 70 cm 430–438 MHz (secondary; note no 438–440) | yes | yes | yes |
| 23 cm 1240–1300 MHz | yes | yes | yes |
| 13 cm 2300–2450 MHz | yes | yes | yes |
| 9 cm 3300–3500 MHz | yes | yes | yes |
| 5 cm 5650–5850 MHz | yes | yes | yes |
| 3 cm 10.0–10.5 GHz and above (24, 47, 76–81, 122, 134 GHz…) | yes | yes | – |

**Penggalang's 20 m segment, 14000–14150:**
- 14000–14070: CW
- 14070–14099: data
- 14099–14101: IBP beacons (International Beacon Project)
- 14101–14110: data
- 14110–14150: all modes

Sub-segment modes (CW / DM = digital modes / "Semua Mode" = all modes) follow the national band plan. The tier restriction is that some segments are ticked only for some tiers, as above.

### 6. Call sign inference
**Yes, by regulation (Pasal 50(2)(a)):** the 2-letter prefix encodes the tier. **(H)**

| Prefix | Tier |
|---|---|
| YD / YG | Siaga |
| YC / YF | Penggalang |
| YB / YE | Penegak |
| YH | special (do not infer) |
| 7A–7I / 8A–8I | special, Penegak level |

- The digit is the region (province code, Lampiran III).
- Reliability: high. An upgrade changes the prefix letter.

### 7. Sources
- jdih.komdigi.go.id PM 17/2018 PDF: Pasal 10, 11, 19, 43, 47–51; Lampiran II (band table per tier); Lampiran III (prefix/suffix by province). **(H)**
- web.komdigi.go.id draft RPM (base64 resource link from search): draft only. **(M)**

**Not verified:**
- Enactment status of the replacement draft.
- History of the Pemula tier.
- The power basis.

```json
{"entities":["YB","YC","YD","YE","YF","YG","YH"],"regulator":"Komdigi (formerly Kominfo), Ditjen SDPPI","termLocal":"Tingkat IAR (Siaga / Penggalang / Penegak)","termEnglish":"Licence Level","levels":[
{"code":"SIAGA","name":"General","nameLocal":"Tingkat Siaga","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"100 W below 30 MHz, 75 W above (effective power to antenna)","bands":[
{"band":"80m","ranges":[[3500,3900,"all"]]},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"15m","ranges":[[21000,21200,"CW"],[21070,21125,"data"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"2m","ranges":[[144000,148000,"all"]]},{"band":"70cm","ranges":[[430000,438000,"all"]]},{"band":"23cm","ranges":[[1240000,1300000,"all"]]},{"band":"13cm","ranges":[[2300000,2450000,"all"]]},{"band":"9cm","ranges":[[3300000,3500000,"all"]]},{"band":"6cm","ranges":[[5650000,5850000,"all"]]}],"notes":"Prefix YD/YG."},
{"code":"PENGGALANG","name":"Advanced","nameLocal":"Tingkat Penggalang","order":2,"cept":"none","issued":true,"legacy":false,"maxPowerW":500,"powerNote":"500 W below 30 MHz, 200 W above","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"CW"],[135.7,137.8,"data"]]},{"band":"630m","ranges":[[472,479,"CW"],[472,479,"data"]]},{"band":"160m","ranges":[[1800,2000,"all"]]},{"band":"80m","ranges":[[3500,3900,"all"]]},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"20m","ranges":[[14000,14070,"CW"],[14070,14110,"data"],[14110,14150,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,54000,"all"]]},{"band":"2m","ranges":[[144000,148000,"all"]]},{"band":"70cm","ranges":[[430000,438000,"all"]]},{"band":"23cm","ranges":[[1240000,1300000,"all"]]},{"band":"13cm","ranges":[[2300000,2450000,"all"]]},{"band":"9cm","ranges":[[3300000,3500000,"all"]]},{"band":"6cm","ranges":[[5650000,5850000,"all"]]},{"band":"3cm","ranges":[[10000000,10500000,"all"]]},{"band":"1.2cm","ranges":[[24000000,24250000,"all"]]},{"band":"6mm","ranges":[[47000000,47200000,"all"]]},{"band":"4mm","ranges":[[76000000,81000000,"all"]]},{"band":"2.5mm","ranges":[[122250000,123000000,"all"]]},{"band":"2mm","ranges":[[134000000,136000000,"all"]]}],"notes":"Prefix YC/YF. No 60/30/17/12m; 20m only 14000-14150."},
{"code":"PENEGAK","name":"Extra Class","nameLocal":"Tingkat Penegak","order":3,"cept":"none","issued":true,"legacy":false,"maxPowerW":1000,"powerNote":"1000 W below 30 MHz, 500 W above; 60m 15 W; up to 2000 W by special permit","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"CW"],[135.7,137.8,"data"]]},{"band":"630m","ranges":[[472,479,"CW"],[472,479,"data"]]},{"band":"160m","ranges":[[1800,2000,"all"]]},{"band":"80m","ranges":[[3500,3900,"all"]]},{"band":"60m","ranges":[[5351.5,5366.5,"all"]]},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"30m","ranges":[[10100,10150,"CW"],[10100,10150,"data"]]},{"band":"20m","ranges":[[14000,14350,"all"]]},{"band":"17m","ranges":[[18068,18168,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"12m","ranges":[[24890,24990,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,54000,"all"]]},{"band":"2m","ranges":[[144000,148000,"all"]]},{"band":"70cm","ranges":[[430000,438000,"all"]]},{"band":"23cm","ranges":[[1240000,1300000,"all"]]},{"band":"13cm","ranges":[[2300000,2450000,"all"]]},{"band":"9cm","ranges":[[3300000,3500000,"all"]]},{"band":"6cm","ranges":[[5650000,5850000,"all"]]},{"band":"3cm","ranges":[[10000000,10500000,"all"]]},{"band":"1.2cm","ranges":[[24000000,24250000,"all"]]},{"band":"6mm","ranges":[[47000000,47200000,"all"]]},{"band":"4mm","ranges":[[76000000,81000000,"all"]]},{"band":"2.5mm","ranges":[[122250000,123000000,"all"]]},{"band":"2mm","ranges":[[134000000,136000000,"all"]]}],"notes":"Prefix YB/YE."}],
"callsignInference":"Prefix encodes tier by regulation: YD/YG=Siaga, YC/YF=Penggalang, YB/YE=Penegak (high). YH and 7A-7I/8A-8I are special-purpose.","asOf":"2026-10","confidence":"high"}
```

---

## South Africa (ZS)

### 1. Regulator and rules
- **Regulator:** Independent Communications Authority of South Africa (ICASA).
- **Rules:** **Radio Frequency Spectrum Regulations, 2015**, Government Gazette No. 38641 of 30 Mar 2015. **(M/H)**
  - Subpart 23 covers amateur radio, Annexure H the emissions, Annexure I the bands and power per class, Annexure J the call sign zones.
  - Read via the SARL verbatim extract (V1.0, 2016): https://mysarl.org.za/wp-content/uploads/2025/05/ICASA-Regulations-Effective-for-Oct-2016-examination-and-onwards.pdf
- **Power:** the regulations tie power and modes to the National Radio Frequency Plan. NRFP 2021 is in force; an NRFP 2025 draft is in consultation.

### 2. Term
- **"Class"**: Class-A licence, Class-B licence. **(H** via verbatim extract)
- Suggested English UI: **"Licence Class"**.

### 3. Current levels (lowest to highest)

| Order | Code | Name | Prefix | Requirement | CEPT | Issued? |
|---|---|---|---|---|---|---|
| 1 | B | Class B (novice) | ZU | Class-B operator certificate; **age ≤ 20**; must pass Class A before the 25th birthday or the licence is cancelled | none | yes (youth only) |
| 2 | A | Class A | ZS (and legacy ZR) | HAREC | **CEPT Class 1** (stated in the regulation) | yes |

### 4. Legacy levels
- **ZR:** the former restricted (originally no-code / limited HF) licence. It was merged into Class A, and ZR holders now have **full Class A privileges.** **(M)**
- ZR calls remain in use.

### 5. Band privileges (Annexure I, as reformatted by SARL) **(M/H)**
The extract states maximum power in dBW (30 dBW = 1 kW; 26 dBW ≈ 400 W; 20 dBW = 100 W). The PEP vs mean basis is not stated. SARL and IARU treat these as PEP. **(M)**

| Band | Class A | Class B |
|---|---|---|
| 2200 m | 135.7–137.8, 1 W EIRP | – |
| 630 m | 472–479, 5 W EIRP | 472–479, 5 W EIRP |
| 160 m | 1810–2000, 30 dBW | – |
| 80 m | 3500–3800, 30 dBW | 3500–3800, **20 dBW** |
| 60 m | see note below | see note below |
| 40 m | 7000–7200, 30 dBW | 7000–7200, 20 dBW |
| 30 m | 10100–10150, 26 dBW | – |
| 20 m | 14000–14350, 30 dBW | – |
| 17 m | 18068–18168, 30 dBW | – |
| 15 m | 21000–21450, 30 dBW | – |
| 12 m | 24890–24990, 30 dBW | – |
| 10 m | 28000–29700, 30 dBW | **28050–28150 and 28300–28500 only**, 20 dBW |
| 29.7–30 MHz | 26 dBW, disaster and exercises only | 26 dBW, same |
| 8 m (40.675–40.685 MHz) | 26 dBW, propagation studies only | 26 dBW, same |
| 6 m | 50–53 MHz 30 dBW; 53–54 MHz 26 dBW | same as Class A (likely a gazette error, see below) |
| 4 m | 70.0–70.3 MHz, 26 dBW | – |
| 2 m | 144–146 MHz, 30 dBW | 144–146 MHz, 20 dBW |
| 70 cm | 430–440 MHz, 30 dBW | 430–440 MHz, 20 dBW |
| 23 cm | 1240–1300 MHz, 30 dBW | – |
| 13 cm and up | 2300–2450, 5650–5850, 10000–10450, 24000–24450 MHz; 47–47.2, 75.5–81, 122.25–123, 134–141 GHz; 26 dBW | – |

- **Mode restrictions:** none by class, beyond Annexure H. Pulse is only allowed above 10 GHz, and FSTV only above 1200 MHz.
- **6 m for Class B:** as printed, Class B gets the same 30 dBW as Class A. This looks like a gazette error; SARL itself says the text is "verbatim, with errors". **(L)**
- **60 m:** NRFP (May 2018) allocated **5350–5450 kHz plus channel 5290 kHz** (secondary), and 5351.5–5366.5 kHz at 15 W EIRP. As of Jan 2021, ICASA had **not updated Annexure I**. SARL requested 26 dBW for ZS/ZR and 20 dBW for ZU. Current status unconfirmed. **(M)**

### 6. Call sign inference
**Yes.** **(H/M)**
- **ZU** → Class B (high reliability).
- **ZS / ZR** → Class A (high reliability).
- The digit is the zone (Annexure J): 1 W. Cape, 2 E. Cape, 3 N. Cape, 4 Free State, 5 KZN, 6 Gauteng / North West / Limpopo / Mpumalanga. **(M)**
- Special prefixes such as ZT and ZS8 (Marion Island) also exist.

### 7. Sources
- SARL extract PDF (above): Subpart 23, Annexures H, I and J. **(H**: verbatim extract, not the gazette itself)
- https://www.iaru-r1.org/2021/5-mhz-band-in-south-africa/: 60 m status. **(M)**
- https://www.icasa.org.za/uploads/files/NRFP-Web_29032022.html: NRFP 2021, which has no class tables. **(H)**
- https://en.wikipedia.org/wiki/Amateur_radio_call_signs_in_Africa: the ZR merger (lead). **(L/M)**

**Not verified:**
- Any 2016–2026 amendment of Annexure I (60 m, Class B 6 m power).
- Whether the NRFP 2025 is final.
- The power basis.

```json
{"entities":["ZS","ZR","ZU"],"regulator":"ICASA","termLocal":"Class (Class-A / Class-B licence)","termEnglish":"Licence Class","levels":[
{"code":"B","name":"Class B","nameLocal":"Class-B (novice) licence","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"20 dBW (100 W) HF/2m/70cm; 630m 5 W EIRP; 6m 30/26 dBW as printed (likely error); 29.7-30 and 40.68 MHz 26 dBW","bands":[
{"band":"630m","ranges":[[472,479,"all"]]},{"band":"80m","ranges":[[3500,3800,"all"]]},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"10m","ranges":[[28050,28150,"all"],[28300,28500,"all"]]},{"band":"6m","ranges":[[50000,54000,"all"]]},{"band":"2m","ranges":[[144000,146000,"all"]]},{"band":"70cm","ranges":[[430000,440000,"all"]]}],"notes":"Only issued to persons aged <=20; cancelled unless Class A passed by 25th birthday."},
{"code":"A","name":"Class A","nameLocal":"Class-A licence (ZS - CEPT Class 1)","order":2,"cept":"CEPT Class 1 / HAREC","issued":true,"legacy":false,"maxPowerW":1000,"powerNote":"30 dBW (1 kW) primary HF/6m/2m/70cm/23cm; 26 dBW (~400 W) secondary bands; 2200m 1 W EIRP, 630m 5 W EIRP","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all"]]},{"band":"630m","ranges":[[472,479,"all"]]},{"band":"160m","ranges":[[1810,2000,"all"]]},{"band":"80m","ranges":[[3500,3800,"all"]]},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"30m","ranges":[[10100,10150,"all"]]},{"band":"20m","ranges":[[14000,14350,"all"]]},{"band":"17m","ranges":[[18068,18168,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"12m","ranges":[[24890,24990,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,54000,"all"]]},{"band":"4m","ranges":[[70000,70300,"all"]]},{"band":"2m","ranges":[[144000,146000,"all"]]},{"band":"70cm","ranges":[[430000,440000,"all"]]},{"band":"23cm","ranges":[[1240000,1300000,"all"]]},{"band":"13cm","ranges":[[2300000,2450000,"all"]]},{"band":"6cm","ranges":[[5650000,5850000,"all"]]},{"band":"3cm","ranges":[[10000000,10450000,"all"]]},{"band":"1.2cm","ranges":[[24000000,24450000,"all"]]},{"band":"6mm","ranges":[[47000000,47200000,"all"]]},{"band":"4mm","ranges":[[75500000,81000000,"all"]]},{"band":"2.5mm","ranges":[[122250000,123000000,"all"]]},{"band":"2mm","ranges":[[134000000,141000000,"all"]]}],"notes":"60m (5351.5-5366.5 at 15 W EIRP; NRFP 5350-5450 + 5290) allocated in NRFP 2018 but Annexure I not updated as of 2021 - unconfirmed."},
{"code":"ZR","name":"Former restricted (ZR)","nameLocal":"ZR","order":2,"cept":"CEPT Class 1","issued":false,"legacy":true,"maxPowerW":1000,"powerNote":"as Class A","bands":[],"notes":"Merged into Class A; full Class A privileges."}],
"callsignInference":"ZU => Class B (high); ZS or ZR => Class A (high).","asOf":"2026-10","confidence":"medium"}
```

---

## Cross-cutting notes for the app

**Levels found:**

| Entity | Levels |
|---|---|
| VK | Foundation, Standard, Advanced |
| ZL | single General |
| JA | 4th, 3rd, 2nd, 1st |
| BY | A, B, C, plus grandfathered pre-2024 B at 100 W |
| 9M/9W | C, B, A |
| HL | 4th, 3rd Telephony, 3rd Telegraphy, 2nd, 1st |
| VU | Restricted, General, plus legacy Grade II and Grade I/Advanced |
| YB | Siaga, Penggalang, Penegak |
| ZS | Class B (ZU), Class A (ZS/ZR) |

**Call-sign-inferable:**
- Strong: Malaysia (9W3/9W2/9M2), Indonesia (YD/YC/YB), South Africa (ZU vs ZS/ZR).
- Partial: Australia (2-letter suffix means Advanced; F-series is a lower bound), India (VU3 means Restricted; VU2 is ambiguous).
- None: ZL, JA, BY, HL.

**Restrictions not tied to a band or class:**
- **Mode bans:** Japan and Korea forbid Morse at their lowest classes. India Restricted is phone-only on HF. Malaysia Class C is FM-only. Australia's limits are bandwidth-based, not mode-based.
- **Experience gates:** NZ's 3-months/50-QSO gate on 5–25 MHz.
- **Mobile power caps:** Japan (*M symbols) and Korea (50 W) cap mobile stations.
- **Station-licence power caps:** in Japan the station's 一括表示記号 can be lower than the operator class.

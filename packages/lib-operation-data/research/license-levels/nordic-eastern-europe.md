# Amateur licence levels: Nordic countries, Russia, Ukraine

Research date: 2026-10-14. Scope: Norway (LA), Sweden (SM), Denmark (OZ), Finland (OH), Russia (UA, European part, but the same federal rules cover UA2/UA9/UA0), Ukraine (UR).

Confidence tags used inline: **[H]** = primary regulatory text fetched and read; **[M]** = regulator web page summary, national society, or a primary text whose currency could not be fully confirmed; **[L]** = secondary/forum source or inference.

JSON conventions (all sections): frequencies in kHz. Each range is `[lowKHz, highKHz, mode]` and, where the power differs inside one band, a 4th element `powerW` overrides the level's `maxPowerW` for that range. Mode tags: `all`, `CW`, `phone`, `image`, `data`, `RTTY`. Where a regulator sets only a bandwidth limit and no modes, ranges are tagged `all`. Ranges whose bandwidth limit rules out phone (e.g. 1 kHz) are tagged `CW` + `data`.

Cross-cutting CEPT references (fetched):
- CEPT T/R 61-02 (HAREC), Annex 4, edition 16 Feb 2024, "national licences corresponding to HAREC": Denmark **A**, Finland **Y and T**, Norway **A**, Sweden **1**, Ukraine **A (old 1, 2)**. Russia is not listed (its CEPT participation is suspended). **[H]**
- ECC/REC/(05)06 (CEPT Novice), Annex 2, editorial update June 2023: Denmark **B**, Finland **P**, but a footnote says Finland has no class equivalent to CEPT Novice and only accepts visiting novices. Norway, Sweden, Russia and Ukraine are not listed. The 2017 edition listed "Russian Federation RC, 3", which the 2023 edition drops. **[H]**

---

## Norway

### 1. Regulator and rules
- Regulator: **Nasjonal kommunikasjonsmyndighet (Nkom)**.
- Governing rules: **Forskrift om radioamatørvirksomhet, FOR-2026-03-23-465**, adopted 23 March 2026, published in Norsk Lovtidend on 25 March 2026, in force immediately. It replaces FOR-2009-11-05-1340 (forskrift om radioamatørlisens). Callsign assignment follows nummerforskriften § 35b. **[H]**
  - Lovdata: https://lovdata.no/dokument/SF/forskrift/2026-03-23-465
  - The full Lovtidend PDF that was read (a copy hosted by SSA): https://www.ssa.se/wp-content/uploads/2026/03/Radioamatorforskrifter-2026.pdf
- **Recent reform:** a consultation on 24 Nov 2025 proposed a "begynnerlisens". After 42 responses, the class was adopted under the name **"begrenset lisens"**. Before this, 2009–2026, there was a single unclassed licence. **[H]**

### 2. Term
- Local: **lisensklasse** (§ 4: "Radioamatørlisens har to lisensklasser"). English: "licence class". **[H]**
- Suggested English UI word: **"Licence class"**.

### 3. Current levels (lowest to highest)
| Order | Official name | English | Code | CEPT | Issued? |
|---|---|---|---|---|---|
| 1 | Begrenset lisens (kun gyldig i Norge) | Limited licence (valid in Norway only) | none official; "begrenset" | none. National class; NRRL asked for it as an "Entry Level" class, but it is not registered with CEPT | Yes, since 23 Mar 2026. Exam rollout was pending as of Mar 2026 **[M]** |
| 2 | Full lisens (HAREC klasse A) | Full licence | A | HAREC (T/R 61-02) | Yes |

Restrictions on Begrenset lisens **[H]**:
- Remote control is not allowed.
- Equipment, kits included, must be usable within the limited-licence limits (§ 9).
- Its callsign may only be used under limited-licence rules (§ 7).
- For training toward class A, a holder may transmit with class A parameters under the physical supervision of a class A holder (§ 6).

### 4. Legacy levels
- **FOR-2009-11-05-1340, 2009–2026, had no classes.** It granted a single licence to anyone who passed the exam. That licence corresponds to HAREC "A" in T/R 61-02. **[H]**
- The 2026 regulation has no transitional clause. Every licence issued before 23 Mar 2026 is in practice a **full licence (A)**. **[M]** (inferred: the regulation has no other class to map to, and Nkom/CEPT list Norway as "A".)
- Pre-2004/2009 classes, e.g. the historical A/B/C/T/N classes under the 1984 supplementary regulation, were merged long ago. They are not modelled and were not verified. **[L]**

### 5. Band privileges
Power is **"utgangseffekt fra sender", defined as PEP measured at the transmitter's final-stage antenna connector** (§ 3 i). The regulation sets bandwidth limits, not mode sub-bands. There is a general rule (§ 7): power must be reduced to ≤100 W if it causes interference. **[H]**

| Band | Begrenset lisens | Full lisens (A) |
|---|---|---|
| 2200m | — | 135.7–137.8 kHz, 200 W, max 1 W EIRP, 1 kHz BW |
| 630m | — | 472–479 kHz, 100 W, max 1 W EIRP, 1 kHz BW |
| 160m | — | 1810–1850 kHz 1000 W; 1850–2000 kHz 10 W mean (any mode); 6 kHz BW |
| 80m | 3500–3800 kHz, 10 W, 6 kHz BW | 3500–3800 kHz, 1000 W |
| 60m | — | 5260–5410 kHz, 100 W, 6 kHz BW (secondary) |
| 40m | 7000–7200 kHz, 10 W | 7000–7200 kHz, 1000 W |
| 30m | — | 10100–10150 kHz, 1000 W, 1 kHz BW |
| 20m | 14000–14350 kHz, 10 W | 1000 W |
| 17m | 18068–18168 kHz, 10 W | 1000 W |
| 15m | 21000–21450 kHz, 10 W | 1000 W |
| 12m | — | 24740–24890 kHz (secondary) + 24890–24990 kHz, 1000 W |
| 10m | 28000–29700 kHz, 10 W, 18 kHz BW | 1000 W |
| 6m | 50–52 MHz, 10 W, 18 kHz BW | 50–52 MHz, 1000 W |
| 4m | — | 69.9–70.5 MHz, 100 W (1000 W EME/MS with directional antenna + logging) |
| 2m | 144–146 MHz, 10 W, 18 kHz BW | 144–146 MHz, 300 W (1000 W EME/MS) |
| 70cm | 432–438 MHz, 10 W, 30 kHz BW (200 kHz in 433.6–434.0) | 432–438 MHz, 300 W (1000 W EME/MS) |
| 23cm | — | 1240–1300 MHz 300 W until 31 Dec 2027. From 1 Jan 2028: 1240–1258 MHz 300 W; 1258–1296 MHz 0.02 W EIRP; 1296–1298 MHz 50 W EIRP; 1298–1300 MHz 158 W EIRP |
| 13cm | 2300–2450 MHz, 5 W (secondary) | 2300–2450 MHz, 100 W |
| 9cm | — | 3400–3410 MHz, 100 W |
| 6cm | — | 5650–5850 MHz, 100 W |
| 3cm | 10.25–10.50 GHz, 1 W | 10.25–10.50 GHz, 100 W |
| 1.2cm and up | — | 24.0–24.25, 47.0–47.2, 76–81, 122.25–123, 134–141, 241–250 GHz, 100 W |

All figures **[H]** (Lovtidend text, §§ 5 and 5a).

### 6. Callsign inference
- Mainland prefixes LA–LN. JW is Svalbard/Bjørnøya, JX Jan Mayen, 3Y Bouvet/Peter I/Antarctica. Holders whose call does not start with LA prefix it abroad, e.g. JW/LB1XX. **[H]**
- Series history (Nkom page): LAnXXA was used from 1983 until 2014; since then new personal calls are **LBnXX**. LAnXXX/LAnXXXX are club calls. **LC** calls are 2x1 contest calls. **[M]**
- § 4 says Nkom "assigns a callsign that identifies the licence class". **No series for the begrenset lisens had been published** by Oct 2026. **Not verified.** A consultation response suggested an "LF" series, but this is unconfirmed. **[L]**
- **Rule for the app:** treat any existing LA/LB/LC/JW/JX/3Y holder as Full (A) unless a published begrenset series matches. **Reliability:** high for existing calls, unknown for new ones.

### 7. Sources
- Lovdata FOR-2026-03-23-465 (§4, §5, §5a): https://lovdata.no/dokument/SF/forskrift/2026-03-23-465. Supports the classes, tables, power definition and dates. **[H]**
- Norsk Lovtidend PDF (SSA copy): https://www.ssa.se/wp-content/uploads/2026/03/Radioamatorforskrifter-2026.pdf. Supports the verbatim §§ 3–12. **[H]**
- Nkom consultation draft, 24.11.2025: https://nkom.no/hoeringer/horing-om-radioamatorforskriften/_/attachment/download/89cd4385-3cf0-4a8d-ad9c-d6e5a39cb0e6:275325b3eb42c46a2c3696e1f1bec4b4e74258f2/Endring%20av%20forskrift%20om%20radioamat%C3%B8rlisens%20av%205.november%202009%20nr%203698988_2824383_0.pdf. Supports the reform history. **[H]**
- Nkom consultation page: https://nkom.no/tidligere-horinger/horing-om-radioamatorforskriften. **[M]**
- Nkom news, 19.02.2026: https://nkom.no/aktuelt/snart-kommer-ny-radioamator-forskrift. **[M]**
- Nkom radioamatør page (callsign series, fees): https://nkom.no/frekvenser-og-elektronisk-utstyr/radioamator. **[M]**
- Lovdata FOR-2009-11-05-1340 (no classes): https://lovdata.no/dokument/LTI/forskrift/2009-11-05-1340. **[H]**
- LA6M club news, 25.03.2026 (exam rollout pending): https://www.la6m.no/2026/03/25/snart-kommer-ny-radioamator-forskrift/. **[L]**
- **Unverified:** the callsign series for begrenset lisens; whether exams for it have started; pre-2004 class history.

```json
{"entities":["LA","JW","JX","3Y"],"regulator":"Nasjonal kommunikasjonsmyndighet (Nkom)","rules":"Forskrift om radioamatørvirksomhet FOR-2026-03-23-465 (in force 2026-03-23)","termLocal":"lisensklasse","termEnglish":"Licence class","levels":[
{"code":"begrenset","name":"Limited licence","nameLocal":"Begrenset lisens","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":10,"powerNote":"PEP output at final stage","bands":[
{"band":"80m","ranges":[[3500,3800,"all"]]},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"20m","ranges":[[14000,14350,"all"]]},{"band":"17m","ranges":[[18068,18168,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,52000,"all"]]},{"band":"2m","ranges":[[144000,146000,"all"]]},{"band":"70cm","ranges":[[432000,438000,"all"]]},{"band":"13cm","ranges":[[2300000,2450000,"all",5]]},{"band":"3cm","ranges":[[10250000,10500000,"all",1]]}],
"notes":"Valid only in Norway. No remote operation. Bandwidth 6 kHz on HF below 28 MHz, 18 kHz on 10m/6m/2m, 30 kHz on 70cm. May operate with class A parameters under physical supervision of an A holder for training."},
{"code":"A","name":"Full licence","nameLocal":"Full lisens (HAREC klasse A)","order":2,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":1000,"powerNote":"PEP output at final stage; VHF/UHF 300 W; 1000 W EME/MS on 4m/2m/70cm/23cm","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"CW",200],[135.7,137.8,"data",200]],"notes":"max 1 W EIRP"},{"band":"630m","ranges":[[472,479,"CW",100],[472,479,"data",100]],"notes":"max 1 W EIRP"},
{"band":"160m","ranges":[[1810,1850,"all",1000],[1850,2000,"all",10]],"notes":"1850-2000: 10 W mean"},{"band":"80m","ranges":[[3500,3800,"all"]]},{"band":"60m","ranges":[[5260,5410,"all",100]]},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"30m","ranges":[[10100,10150,"CW"],[10100,10150,"data"]]},{"band":"20m","ranges":[[14000,14350,"all"]]},{"band":"17m","ranges":[[18068,18168,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"12m","ranges":[[24740,24990,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,52000,"all"]]},{"band":"4m","ranges":[[69900,70500,"all",100]]},{"band":"2m","ranges":[[144000,146000,"all",300]]},{"band":"70cm","ranges":[[432000,438000,"all",300]]},{"band":"23cm","ranges":[[1240000,1300000,"all",300]],"notes":"until 2027-12-31; from 2028 split 1240-1258 300 W, 1258-1296 0.02 W EIRP, 1296-1298 50 W EIRP, 1298-1300 158 W EIRP"},{"band":"13cm","ranges":[[2300000,2450000,"all",100]]},{"band":"9cm","ranges":[[3400000,3410000,"all",100]]},{"band":"6cm","ranges":[[5650000,5850000,"all",100]]},{"band":"3cm","ranges":[[10250000,10500000,"all",100]]},{"band":"1.2cm","ranges":[[24000000,24250000,"all",100]]}],
"notes":"All pre-2026 Norwegian licences (2009 regulation had no classes) are treated as Full (A)."}],
"callsignInference":"Existing LA/LB personal calls (and LC contest calls) = Full (A). Begrenset lisens gets a class-identifying series 'fastsatt av Nkom' that was not yet published as of 2026-10; until known, inference for new calls is unavailable.","asOf":"2026-10","confidence":"high"}
```

---

## Sweden

### 1. Regulator and rules
- Regulator: **Post- och telestyrelsen (PTS)**.
- **No individual licence has been required since 1 Oct 2004.** Amateur transmitters are **exempt from licensing** for anyone holding a valid certificate issued or recognised by PTS. PTS issues no personal amateur licences. **[H]**
- Governing rules: **PTSFS 2025:1**, "Post- och telestyrelsens föreskrifter om undantag från tillståndsplikt för användning av vissa radiosändare". Decided 20 Feb 2025, in force 17 Mar 2025. It replaces PTSFS 2022:19. The amateur provisions are 3 kap. §§ 27, 35, 38–41, 43, 46, 48–49, 52, 59–64, 85–86, 98–99, 103–104, 123, 154, 185, 203, 213, 226, 235, 248, 256, 258, 259. **[H]** https://pts.se/contentassets/b05c8a7d01a64783aafc6a19e1b78590/ptsfs-2025-1-foreskrifter-om-undantag-fran-tillstandsplikt-for-anvandning-av-vissa-radiosandare.pdf
- Certificates and callsigns are issued by **Sveriges Sändareamatörer (SSA)** under PTS delegation. The current delegation decision is Dnr 25-17524, with Bilaga C, the callsign instructions, in force **1 Apr 2026**. **[H]**
- Above the exemption limits, e.g. more than 200 W PEP, an **individual PTS radio licence** is needed. PTS's page confirms this. ARRL (2018) reports that permits go up to 1 kW on 160 m (1810–1850 kHz), 80–10 m, 2 m and 70 cm, with a fee and 3-year term. **[M]**

### 2. Term
- Local: **certifikat**: "amatörradiocertifikat" (full) and "instegscertifikat för amatörradio" (entry). PTS's English text uses "certificate". **[H]**
- Since there is no licence, "licence level" here means **certificate type**. Suggested English UI word: **"Certificate"** (values "Entry", "Full/HAREC").

### 3. Current levels
| Order | Official name | English | Code | CEPT | Issued? |
|---|---|---|---|---|---|
| 1 | Instegscertifikat för amatörradio | Entry-level certificate | none (callsign series SH) | ECC Report 89 entry level ("kunskaper i enlighet med ECC Report 89", § 49) | Yes, since PTSFS 2025:1 (17 Mar 2025) |
| 2 | Amatörradiocertifikat | Amateur radio certificate (HAREC) | "1" in T/R 61-02 | HAREC (CEPT T/R 61-02 Annex 6) | Yes |

Entry certificate conditions **[H]**:
- CE-marked transmitters only.
- No automatic stations (beacons/repeaters).
- No remote control.

### 4. Legacy levels
- Certificates and licences issued before 1 Oct 2004 remain valid indefinitely. PTS lists the old classes **Klass A** (16 wpm CW), **Klass B** (12 wpm), **Klass C** (8 wpm), **CEPT 1** (12 wpm), **CEPT 2** (no CW) and **Klass 1** (5 wpm). **[H]**
- PTSFS 2025:1 knows only "amatörradiocertifikat", defined as any PTS-issued or approved proof of competence. **All legacy classes therefore carry full-certificate privileges today.** **[M]** (inferred from the definition. The PTS letter does not state the mapping explicitly.)

### 5. Band privileges (PTSFS 2025:1)
Power is "effekt tillförd antennsystemet" in **W PEP**, except where ERP/EIRP is stated. There are no mode or bandwidth sub-band rules tied to certificate. **[H]**

| Band | Instegscertifikat | Amatörradiocertifikat |
|---|---|---|
| 2200m | — | 135.7–137.8 kHz, 1 W ERP |
| 630m | — | 472–479 kHz, 1 W EIRP |
| 160m | — | 1810–1850 kHz 200 W; 1850–1900 10 W; 1900–1950 100 W; 1950–2000 10 W |
| 80m | — | 3500–3800 kHz, 200 W |
| 60m | — | 5351.5–5366.5 kHz, 15 W EIRP |
| 40m | 7000–7200 kHz, 25 W PEP | 200 W |
| 30m | — | 10100–10150 kHz, 150 W |
| 20m | 14000–14350 kHz, 25 W | 200 W |
| 17m | — | 18068–18168 kHz, 200 W |
| 15m | 21000–21450 kHz, 25 W | 200 W |
| 12m | — | 24890–24990 kHz, 200 W |
| 10m | 28000–29700 kHz, 25 W | 200 W |
| 6m | 50–52 MHz, 25 W PEP | 200 W |
| 4m | — | **Not in the exemption.** Would need an individual permit; not verified **[L]** |
| 2m | 144–146 MHz, **25 W ERP** | 200 W PEP |
| 70cm | — | 432–438 MHz, 200 W |
| 23cm | — | 1240–1300 MHz, 200 W |
| 13cm | — | 2400–2450 MHz, **100 mW PEP** (as printed in § 185) |
| 6cm | — | 5650–5850 MHz, 200 W |
| 3cm | — | 10.0–10.5 GHz, 200 W |
| up | — | 24.00–24.25, 47.0–47.2, 75.5–81.0, 122.25–123.0, 134–141, 241–250 GHz, 200 W |

Higher power, up to 1 kW on the bands listed in §1, requires an individual PTS permit. Most Swedish full-certificate holders operate at ≤200 W PEP. **[M]**

### 6. Callsign inference (PTS Bilaga C, 2026-03-31) **[H]**
- **SA + digit + 3-letter suffix** is the ordinary call for a full (HAREC) certificate, e.g. SA0ABC.
- **SH + digit + 3-letter suffix** is the ordinary call for an **instegscertifikat**, e.g. SH7DEF.
- Holders of older **SM** calls have full certificates (pre-2004 licences or earlier SSA issue).
- **SK** is for clubs and legal entities. The **SL** series may no longer be issued or renewed.
- Extra calls (series SA–SJ, SM, 7S, 8S, with suffix-length rules) go **only to holders of an ordinary SA, SM or SK call**. So 7S/8S, SB–SG, SI–SJ and short- or long-suffix SA/SM calls indicate a full-certificate holder. An SH call **with other than a 3-letter suffix** is an extra call of a full holder.
- **Rule:** SH#XXX (3-letter suffix) → Entry. Everything else Swedish → Full. **Reliability:** high, but an SH holder who upgrades to HAREC normally gets a new SA call. Whether an upgrader may keep the SH call was not verified, so treat SH#XXX as "entry or possibly upgraded".

### 7. Sources
- PTSFS 2025:1 (full text read): link above. Supports definitions, all band/power figures, entry rules and dates. **[H]**
- PTS letter "Amateur radio licenses in Sweden" (2022-07-01): https://pts.se/contentassets/8a829f8840544a8d9e83f3c69f0eaa70/amateur-radio-in-sweden-1.pdf. Supports the 2004 exemption and legacy classes. **[H]**
- PTS Bilaga C, callsign instructions (2026-03-31): https://www.ssa.se/wp-content/uploads/2026/04/Bilaga-C.pdf. Supports the SA/SH/SK/SL/extra series rules. **[H]**
- PTS amateur page (updated 2025-03-06): https://pts.se/radio/amatorradio/. Supports the 200 W exemption limit and individual licence above it. **[M]**
- SSA "Kom igång": https://www.ssa.se/amatorradio/bli-radioamator/. Supports SA vs SH examples and fees. **[M]**
- SSA news "Nya regler för anropssignaler" (2026-04-01): https://www.ssa.se/nya-regler-for-anropssignaler/. **[M]**
- SK4EA club page on instegscertifikat: https://sk4ea.se/infomation-om-instegscertifikat/. **[L]**
- ARRL on the >200 W permit (2018): https://www.arrl.org/news/sweden-s-telecommunications-regulatory-agency-to-require-fee-to-run-more-than-200-w. **[M]**
- CEPT T/R 61-02 Annex 4 (Sweden "1"): https://docdb.cept.org/download/4424. **[H]**
- **Unverified:** the current band list and maximum power of the individual >200 W permit; 4m status; whether the 13cm 100 mW figure is a drafting error.

```json
{"entities":["SM"],"regulator":"Post- och telestyrelsen (PTS); certificates/callsigns issued by SSA under delegation","rules":"PTSFS 2025:1 (licence exemption; in force 2025-03-17)","termLocal":"certifikat (amatörradiocertifikat / instegscertifikat)","termEnglish":"Certificate","levels":[
{"code":"insteg","name":"Entry-level certificate","nameLocal":"Instegscertifikat för amatörradio","order":1,"cept":"ECC Report 89 entry level","issued":true,"legacy":false,"maxPowerW":25,"powerNote":"PEP to antenna system; 2m 25 W ERP","bands":[
{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"20m","ranges":[[14000,14350,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,52000,"all"]]},{"band":"2m","ranges":[[144000,146000,"all",25]],"notes":"25 W ERP"}],
"notes":"CE-marked transmitters only; no automatic stations; no remote control. Callsign SH#XXX."},
{"code":"1","name":"Amateur radio certificate (HAREC)","nameLocal":"Amatörradiocertifikat","order":2,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":200,"powerNote":"PEP to antenna system under licence exemption; more than 200 W requires an individual PTS permit","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all",1]],"notes":"1 W ERP"},{"band":"630m","ranges":[[472,479,"all",1]],"notes":"1 W EIRP"},{"band":"160m","ranges":[[1810,1850,"all",200],[1850,1900,"all",10],[1900,1950,"all",100],[1950,2000,"all",10]]},{"band":"80m","ranges":[[3500,3800,"all"]]},{"band":"60m","ranges":[[5351.5,5366.5,"all",15]],"notes":"15 W EIRP"},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"30m","ranges":[[10100,10150,"all",150]]},{"band":"20m","ranges":[[14000,14350,"all"]]},{"band":"17m","ranges":[[18068,18168,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"12m","ranges":[[24890,24990,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,52000,"all"]]},{"band":"2m","ranges":[[144000,146000,"all"]]},{"band":"70cm","ranges":[[432000,438000,"all"]]},{"band":"23cm","ranges":[[1240000,1300000,"all"]]},{"band":"13cm","ranges":[[2400000,2450000,"all",0.1]],"notes":"100 mW PEP as printed"},{"band":"6cm","ranges":[[5650000,5850000,"all"]]},{"band":"3cm","ranges":[[10000000,10500000,"all"]]},{"band":"1.2cm","ranges":[[24000000,24250000,"all"]]}],
"notes":"Also covers all pre-2004 classes (Klass A/B/C, CEPT 1/2, Klass 1). No 4m under the exemption."}],
"callsignInference":"SH + digit + 3-letter suffix = instegscertifikat. SA#XXX, SM (any), SK (club), and all extra calls (SB-SJ, 7S, 8S, non-3-letter SA/SM/SH) = full-certificate holder. High reliability per PTS Bilaga C (2026-04-01).","asOf":"2026-10","confidence":"high"}
```

---

## Denmark

### 1. Regulator and rules
- Regulator: **Digitaliseringsstyrelsen** (Danish Agency for Digital Government). It took over the frequency/amateur function previously named Styrelsen for Dataforsyning og Infrastruktur (SDFI). Contact is now frekvens@digst.dk. **[H]**
- Governing rules: **Bekendtgørelse nr. 499 af 29. maj 2026** "om anvendelse af radiofrekvenser uden tilladelse samt om amatørradioprøver og kaldesignaler m.v.". In force **1 July 2026**, replacing BEK nr. 1423 of 25 Nov 2025. Amateur bands and powers are in **Bilag 4**; exams are in **Bilag 6**. No individual licence is required: use is licence-exempt with a certificate and callsign (§ 5). **[H]** https://www.retsinformation.dk/eli/lta/2026/499 (PDF: https://www.lovtidende.dk/api/pdf/256437)

### 2. Term
- Local: **certifikat** in a **kategori** ("certifikat i kategorierne A, B og D"). English: "certificate category". **[H]**
- Suggested English UI word: **"Certificate category"**, or simply "Category".

### 3. Current levels
| Order | Official name | English | Code | CEPT | Issued? |
|---|---|---|---|---|---|
| 1 | Certifikat kategori D | Category D | D | none listed. Entry-level style: non-technical exam only | Yes |
| 2 | Certifikat kategori B | Category B | B | CEPT Novice (ECC/REC/(05)06 lists Denmark "B") | Yes |
| 3 | Certifikat kategori A | Category A | A | HAREC (T/R 61-02 lists Denmark "A"); HAREC certificate issued on request (§ 15 stk. 2) | Yes |

Exams (Bilag 6) **[H]**:
- D: non-technical exam.
- B: limited technical + non-technical.
- A: general technical + limited technical + non-technical.

### 4. Legacy levels
- **Kategori C** certificates issued under earlier rules "are regarded as category A certificates" (§ 23 stk. 5). **[H]**
- All earlier certificates and callsigns remain valid (§ 23 stk. 3–5). **[H]**

### 5. Band privileges (Bilag 4, 1.1 manned stations, and 1.5 amateur-satellite)
Power is **PEP** measured at the transmitter's last stage. On 135.7–137.8 and 472–479 kHz the limit is **ERP**. Bandwidth limits apply:
- below 1810 kHz: 2.1 kHz;
- 1810 kHz–30 MHz: 8 kHz;
- 50–146 MHz: 16 kHz;
- above 146 MHz: the band width.

There are no mode sub-bands. **[H]**

| Band | D | B | A |
|---|---|---|---|
| 2200m 135.7–137.8 kHz | — | 1 W ERP | 1 W ERP |
| 630m 472–479 kHz | — | 1 W ERP | 1 W ERP |
| 160m | — | 1810–1850 kHz 100 W; 1850–2000 kHz 10 W | 1810–1850 kHz 1000 W; 1850–2000 kHz 10 W |
| 80m 3500–3800 | — | 100 W | 1000 W |
| 60m 5250–5450 kHz | — | 100 W | 1000 W |
| 40m 7000–7200 | — | 100 W | 1000 W |
| 30m 10100–10150 | — | 100 W | 1000 W |
| 20m 14000–14350 | — | 100 W | 1000 W |
| 17m 18068–18168 | — | 100 W | 1000 W |
| 15m 21000–21450 | — | 100 W | 1000 W |
| 12m 24890–24990 | — | 100 W | 1000 W |
| 10m 28000–29700 | 50 W | 100 W | 1000 W |
| 6m 50–52 MHz | 50 W | 100 W | 1000 W |
| 4m 69.8875–70.5125 MHz | 25 W | 25 W | 25 W |
| 2m 144–146 | 50 W | 100 W | 1000 W |
| 70cm 432–438 | 50 W | 100 W | 1000 W |
| 23cm 1240–1258 / 1258–1296 / 1296–1298 / 1298–1300 | 50 W each | 100 / 100 / 100 / 500 W | 250 / 250 / 250 / 500 W |
| 13cm 2400–2450 | — | 100 W | 250 W |
| 9cm 3400–3410 | — | 100 W | 250 W |
| 6cm 5650–5850 | — | 100 W | 250 W |
| 3cm 10.0–10.5 GHz | — | 100 W | 250 W |
| 24 GHz and up (24.00–24.25, 47.0–47.2, 76.0–81.5, 122.25–123.0, 134–141, 241–250 GHz) | — | 100 W | 250 W |

23cm notes **[H]**:
- 1258–1296 MHz is withdrawn from 1 Jan 2029.
- 1296–1298 MHz drops to 50 W for all from 1 Jan 2029.
- 1298–1300 MHz needs ≥30 dBi gain and ≥15° elevation for 500 W, otherwise 160 W.

Amateur-satellite (1.5) **[H]**:
- D: only 28–29.7, 144–146, 435–438 and 1260–1270 MHz, at 50 W.
- B/A: 7000–7100 kHz, 14000–14250 kHz, 18068–18168, 21000–21450, 24890–24990, 28–29.7 MHz, and more.

Conditions **[H]**:
- D holders may use only factory-made equipment.
- B holders may use A power under physical supervision of an A holder.
- D holders may use B/A frequencies, power and equipment under supervision of a B/A holder.

### 6. Callsign inference
- Series OZ, OU, OV, 5P, 5Q (§ 18 stk. 3). The four non-OZ series were added 1 Mar 2007. **[H]**
- The regulation **ties no series to a category**. Digitaliseringsstyrelsen says an amateur "may choose a free callsign". **[M]**
- **Inference is not possible.** Reliability: none. **Not verified:** any informal historical convention, e.g. that 5P/5Q or 4-character suffixes were used for D/B.

### 7. Sources
- BEK nr. 499 af 29/05/2026 (full PDF read): https://www.lovtidende.dk/api/pdf/256437 and https://www.retsinformation.dk/eli/lta/2026/499. Supports §§ 14–23 and Bilag 4/6. **[H]**
- BEK nr. 1423 af 25/11/2025 (previous; identical Bilag 4 table): https://www.retsinformation.dk/api/pdf/253831. **[H]**
- BEK 2009 (series, C→A history): https://retsinformation.dk/eli/lta/2009/1119/dan/pdf. **[H]**
- Digitaliseringsstyrelsen, exam guide 2026: https://digst.dk/media/iwwfz5lp/vejledning-om-amatoerradioproever-2026.pdf. **[H]**
- Digitaliseringsstyrelsen radioamatører page: https://digst.dk/tele/frekvenser/radioamatoerer/. Supports free choice of callsign. **[M]**
- ECC/REC/(05)06 Annex 2 (Denmark B = Novice): https://docdb.cept.org/download/4372. **[H]**
- T/R 61-02 Annex 4 (Denmark A = HAREC): https://docdb.cept.org/download/4424. **[H]**
- Faroe Islands (OY) and Greenland (OX) appear in CEPT tables with the same A/B but were **not researched**. Their rules may differ.

```json
{"entities":["OZ"],"regulator":"Digitaliseringsstyrelsen (formerly SDFI)","rules":"BEK nr 499 af 29/05/2026 (in force 2026-07-01), Bilag 4","termLocal":"certifikat, kategori","termEnglish":"Certificate category","levels":[
{"code":"D","name":"Category D","nameLocal":"Certifikat kategori D","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":50,"powerNote":"PEP at transmitter output; 4m 25 W","bands":[
{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,52000,"all"]]},{"band":"4m","ranges":[[69887.5,70512.5,"all",25]]},{"band":"2m","ranges":[[144000,146000,"all"]]},{"band":"70cm","ranges":[[432000,438000,"all"]]},{"band":"23cm","ranges":[[1240000,1300000,"all"]],"notes":"1258-1296 withdrawn from 2029-01-01"}],
"notes":"Factory-made equipment only. Non-technical exam only."},
{"code":"B","name":"Category B","nameLocal":"Certifikat kategori B","order":2,"cept":"ECC Rec (05)06 Novice","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"PEP at transmitter output; LF/MF 1 W ERP","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all",1]]},{"band":"630m","ranges":[[472,479,"all",1]]},{"band":"160m","ranges":[[1810,1850,"all",100],[1850,2000,"all",10]]},{"band":"80m","ranges":[[3500,3800,"all"]]},{"band":"60m","ranges":[[5250,5450,"all"]]},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"30m","ranges":[[10100,10150,"all"]]},{"band":"20m","ranges":[[14000,14350,"all"]]},{"band":"17m","ranges":[[18068,18168,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"12m","ranges":[[24890,24990,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,52000,"all"]]},{"band":"4m","ranges":[[69887.5,70512.5,"all",25]]},{"band":"2m","ranges":[[144000,146000,"all"]]},{"band":"70cm","ranges":[[432000,438000,"all"]]},{"band":"23cm","ranges":[[1240000,1298000,"all",100],[1298000,1300000,"all",500]]},{"band":"13cm","ranges":[[2400000,2450000,"all"]]},{"band":"9cm","ranges":[[3400000,3410000,"all"]]},{"band":"6cm","ranges":[[5650000,5850000,"all"]]},{"band":"3cm","ranges":[[10000000,10500000,"all"]]},{"band":"1.2cm","ranges":[[24000000,24250000,"all"]]}],
"notes":"Bandwidth: <1810 kHz 2.1 kHz; 1810 kHz-30 MHz 8 kHz; 50-146 MHz 16 kHz."},
{"code":"A","name":"Category A","nameLocal":"Certifikat kategori A","order":3,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":1000,"powerNote":"PEP at transmitter output; 23cm and up 250 W; 4m 25 W","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all",1]]},{"band":"630m","ranges":[[472,479,"all",1]]},{"band":"160m","ranges":[[1810,1850,"all",1000],[1850,2000,"all",10]]},{"band":"80m","ranges":[[3500,3800,"all"]]},{"band":"60m","ranges":[[5250,5450,"all"]]},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"30m","ranges":[[10100,10150,"all"]]},{"band":"20m","ranges":[[14000,14350,"all"]]},{"band":"17m","ranges":[[18068,18168,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"12m","ranges":[[24890,24990,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,52000,"all"]]},{"band":"4m","ranges":[[69887.5,70512.5,"all",25]]},{"band":"2m","ranges":[[144000,146000,"all"]]},{"band":"70cm","ranges":[[432000,438000,"all"]]},{"band":"23cm","ranges":[[1240000,1298000,"all",250],[1298000,1300000,"all",500]]},{"band":"13cm","ranges":[[2400000,2450000,"all",250]]},{"band":"9cm","ranges":[[3400000,3410000,"all",250]]},{"band":"6cm","ranges":[[5650000,5850000,"all",250]]},{"band":"3cm","ranges":[[10000000,10500000,"all",250]]},{"band":"1.2cm","ranges":[[24000000,24250000,"all",250]]}],
"notes":"Legacy category C certificates are treated as A (BEK 499 §23 stk.5)."},
{"code":"C","name":"Category C (legacy)","nameLocal":"Certifikat kategori C","order":3,"cept":"HAREC","issued":false,"legacy":true,"maxPowerW":1000,"powerNote":"same as A","bands":[],"notes":"Maps to A."}],
"callsignInference":"Not possible: series OZ/OU/OV/5P/5Q are not tied to category and callsigns are freely chosen.","asOf":"2026-10","confidence":"high"}
```

---

## Finland

### 1. Regulator and rules
- Regulator: **Liikenne- ja viestintävirasto Traficom** (Finnish Transport and Communications Agency).
- Governing rules:
  - **Radiotaajuusmääräys 4 (Määräys 4 AG/2026 M)**, in force 31 Mar 2026. This is the frequency allocation table with the amateur power limits per class. The version actually read was **4 AF/2025 M** (in force 31 Mar 2025). Traficom's memo says the 2026 changes concern 8 GHz/23 GHz fixed links, and **no amateur change was found**. **[M]**
  - **Radioamatöörimääräys 6 (Määräys 6 K/2019 M)**, in force 10 Apr 2019. It covers amateur station construction and use. The text was **not fetched**. **[M]**
  - Exams and certificates: Traficom. A personal certificate (pätevyystodistus) **plus** a radio licence (radioamatöörilupa, €35/yr) with callsign are required. **[M]**
- PDF read: https://www.traficom.fi/sites/default/files/media/regulation/Radiotaajuusm%C3%A4%C3%A4r%C3%A4ys%204AF2025M.pdf (the 4AG2026M URL returned 404 during research).

### 2. Term
- Local: **luokka** / **pätevyysluokka**: "perusluokka", "yleisluokka". The document is the "pätevyystodistus". Swedish: grundklass / allmän klass. English: "class". **[M]**
- Suggested English UI word: **"Class"** ("Basic", "General").

### 3. Current levels
| Order | Official name | English | Code | CEPT | Issued? |
|---|---|---|---|---|---|
| 1 | Perusluokka (exam modules K + T1) | Basic class | P | Listed as "P" in ECC/REC/(05)06 Annex 2, but its footnote says Finland has no class equivalent to CEPT Novice → treat as **none** | Yes |
| 2 | Yleisluokka (exam modules K + T2) | General class | Y | HAREC (T/R 61-02 lists "Y and T") | Yes |

Only General-class holders can be granted special permits, e.g. higher power for experiments, and supervise special stations. **[M]**

### 4. Legacy levels
- **Teknillinen luokka (T)**, technical class. CEPT T/R 61-02 (2024) lists it as HAREC-equivalent alongside Y. The current power table has only perus/yleis columns, so T holders presumably get **yleisluokka** privileges. **[L]** The mapping is inferred and not found in an official text.
- Older novice-type classes: none found. **Not verified.**

### 5. Band privileges (Määräys 4 frequency table)
- Power is **transmitter power**. The figure is **PEP when the carrier is suppressed ≥6 dB (SSB)** and otherwise **carrier power** (CW/FM/AM carrier). **[H]**
- Bandwidth without special permit (Traficom summary): HF ≤8 kHz, VHF ≤18 kHz. **[M]**
- No class-specific mode sub-bands.

| Band | Perusluokka | Yleisluokka |
|---|---|---|
| 2200m 135.7–137.8 kHz | 1 W EIRP | 1 W EIRP |
| 630m 472–479 kHz | 1 W EIRP | 1 W EIRP |
| 160m | 1810–1850 kHz 120 W; 1850–2000 kHz 15 W carrier / 60 W PEP | 1810–1850 kHz 1500 W; 1850–2000 kHz 15 W / 60 W PEP |
| 80m 3500–3800 | 120 W | 1500 W |
| 60m 5351.5–5366.5 | 15 W EIRP | 15 W EIRP |
| 40m 7000–7200 | 120 W | 1500 W |
| 30m 10100–10150 | 120 W | 1500 W |
| 20m 14000–14350 | 120 W | 1500 W |
| 17m 18068–18168 | 120 W | 1500 W |
| 15m 21000–21450 | 120 W | 1500 W |
| 12m 24890–24990 | 120 W | 1500 W |
| 10m 28000–29700 | 120 W | 1500 W |
| 6m 50.0–52.0 MHz | 30 W (120 W PEP) | 150 W (200 W PEP) |
| 4m | 70.000–70.050 25 W; 70.050–70.250 30 W; 70.250–70.300 25 W | 70.000–70.050 25 W; 70.050–70.250 100 W; 70.250–70.300 25 W |
| 2m 144–146 | 30 W (120 W PEP) | 150 W (600 W PEP); 600 W carrier on 144.000–144.150 for A1A and ≤3 kHz digital |
| 70cm 432–438 | 30 W (120 W PEP) | 150 W (600 W PEP); 600 W carrier on 432.000–432.150 for A1A and ≤3 kHz digital |
| 23cm 1240–1300 | case-by-case permit only (Galileo) | same |
| 13cm 2300–2450 | 30 W (120 W PEP) | 150 W (600 W PEP) |
| 9cm 3400–3408, 6cm 5650–5850, 3cm 10.000–10.280 / 10.368–10.370 / 10.450–10.500, 12mm 24.000–24.250 GHz, and EHF bands | 30 W (120 W PEP) where checked | 150 W (600 W PEP) where checked |

Regional restrictions **[H]**:
- 6m: field strength limit at the Russian border. No 6m operation in part of Tohmajärvi.
- 4m: banned in 13 eastern municipalities. 25 W within 50 km of the Russian or Norwegian border.

### 6. Callsign inference
- Standard series is **OH + digit + 3-letter suffix**. OH0 is Åland and OJ0 is Märket.
- Custom calls in **OG** or **OH** (1–4 character suffix) can be had for a fee.
- Traficom ties no series to class. **[M]**
- **Inference is not possible.** Reliability: none.

### 7. Sources
- Traficom, Radiotaajuusmääräys 4 AF/2025 M frequency table (full PDF read): link above. Supports all power figures and the power definition. **[H]**
- Traficom summary "Radioamatööriviestinnän taajuusalueet" (15.8.2025): https://www.traficom.fi/files/media/file/Radioamat%C3%B6%C3%B6riviestinn%C3%A4n%20taajuusalueet.pdf. Supports bands, bandwidths, the 23cm permit and the high-power permit. **[H]**
- Traficom qualifications page: https://traficom.fi/fi/radioluvat-ja-taajuudet/radiotaajuuksien-kaytto/radioamatooritoiminnan-patevyydet-ja-taajuudet. Supports classes, modules, regulation numbers, OH/OG callsigns and fees. **[M]**
- Finlex entry for Määräys 6 (2019): https://finlex.fi/en/authorities/regulations/traficom-viestinta/2019/45134. Metadata only. **[M]**
- SRAL visitors page: https://www.sral.fi/en/amateur-radio-for-visitors-and-immigrants/. **[M]**
- CEPT T/R 61-02 Annex 4 (Y and T): https://docdb.cept.org/download/4424. ECC/REC/(05)06 Annex 2 (P with footnote): https://docdb.cept.org/download/4372. **[H]**
- **Unverified:** the text of Määräys 6 K/2019 M (class definitions, legacy-class mapping); the 4 AG/2026 M amateur rows (assumed unchanged); 13cm–EHF rows beyond those spot-checked.

```json
{"entities":["OH","OH0","OJ0"],"regulator":"Traficom (Liikenne- ja viestintävirasto)","rules":"Radiotaajuusmääräys 4 (4 AG/2026 M; read as 4 AF/2025 M) + Radioamatöörimääräys 6 (6 K/2019 M)","termLocal":"luokka (perusluokka / yleisluokka); pätevyystodistus","termEnglish":"Class","levels":[
{"code":"P","name":"Basic class","nameLocal":"Perusluokka","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":120,"powerNote":"PEP if carrier suppressed >=6 dB, else carrier power; VHF/UHF 30 W (120 W PEP)","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all",1]]},{"band":"630m","ranges":[[472,479,"all",1]]},{"band":"160m","ranges":[[1810,1850,"all",120],[1850,2000,"all",15]]},{"band":"80m","ranges":[[3500,3800,"all"]]},{"band":"60m","ranges":[[5351.5,5366.5,"all",15]],"notes":"15 W EIRP"},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"30m","ranges":[[10100,10150,"all"]]},{"band":"20m","ranges":[[14000,14350,"all"]]},{"band":"17m","ranges":[[18068,18168,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"12m","ranges":[[24890,24990,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,52000,"all",30]]},{"band":"4m","ranges":[[70000,70050,"all",25],[70050,70250,"all",30],[70250,70300,"all",25]]},{"band":"2m","ranges":[[144000,146000,"all",30]]},{"band":"70cm","ranges":[[432000,438000,"all",30]]},{"band":"13cm","ranges":[[2300000,2450000,"all",30]]}],
"notes":"23cm only by case-by-case permit. Regional limits on 6m/4m near Russian/Norwegian borders."},
{"code":"Y","name":"General class","nameLocal":"Yleisluokka","order":2,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":1500,"powerNote":"PEP if carrier suppressed >=6 dB, else carrier power; 6m 150 W (200 PEP); 2m/70cm and up 150 W (600 PEP)","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all",1]]},{"band":"630m","ranges":[[472,479,"all",1]]},{"band":"160m","ranges":[[1810,1850,"all",1500],[1850,2000,"all",15]]},{"band":"80m","ranges":[[3500,3800,"all"]]},{"band":"60m","ranges":[[5351.5,5366.5,"all",15]]},{"band":"40m","ranges":[[7000,7200,"all"]]},{"band":"30m","ranges":[[10100,10150,"all"]]},{"band":"20m","ranges":[[14000,14350,"all"]]},{"band":"17m","ranges":[[18068,18168,"all"]]},{"band":"15m","ranges":[[21000,21450,"all"]]},{"band":"12m","ranges":[[24890,24990,"all"]]},{"band":"10m","ranges":[[28000,29700,"all"]]},{"band":"6m","ranges":[[50000,52000,"all",150]]},{"band":"4m","ranges":[[70000,70050,"all",25],[70050,70250,"all",100],[70250,70300,"all",25]]},{"band":"2m","ranges":[[144000,146000,"all",150]],"notes":"600 W carrier 144.000-144.150 for CW / <=3 kHz digital"},{"band":"70cm","ranges":[[432000,438000,"all",150]],"notes":"600 W carrier 432.000-432.150 for CW / <=3 kHz digital"},{"band":"13cm","ranges":[[2300000,2450000,"all",150]]}],
"notes":"May apply for higher-power special permit."},
{"code":"T","name":"Technical class (legacy)","nameLocal":"Teknillinen luokka","order":2,"cept":"HAREC","issued":false,"legacy":true,"maxPowerW":1500,"powerNote":"assumed same as yleisluokka (unverified)","bands":[],"notes":"Listed with Y as HAREC-equivalent in T/R 61-02 (2024)."}],
"callsignInference":"Not possible: OH (standard) and OG/OH custom calls are not tied to class.","asOf":"2026-10","confidence":"medium"}
```

---

## European Russia

### 1. Regulator and rules
- Regulators:
  - **ГКРЧ** (State Commission for Radio Frequencies) under the **Минцифры России** (Ministry of Digital Development) allocates the bands.
  - **Роскомнадзор** / ФГУП «ГРЧЦ» register stations and issue callsigns.
  - Qualification exams are run by **Союз радиолюбителей России (СРР)** qualification commissions under its procedure (current version approved 26.10.2021). **[M]**
- Governing rules:
  - **Решение ГКРЧ от 15.07.2010 № 10-07-01** "О выделении полос радиочастот для РЭС любительской и любительской спутниковой служб", **as restated in full by Решение ГКРЧ от 16.04.2018 № 18-45-02**. In force from 16.04.2018, **valid until 1 April 2028** (item 8). The powers per category are in **Table 7**. **[H]** https://www.garant.ru/products/ipo/prime/doc/71829332/
  - **Приказ Минкомсвязи от 26.07.2012 № 184** "Требования к использованию радиочастотного спектра любительской службой…", amended 17.11.2016 (№ 572). It defines the 4 categories. **[H]** https://www.garant.ru/products/ipo/prime/doc/70163118/
  - **Приказ Минкомсвязи от 12.01.2012 № 4** "Порядок образования позывных сигналов…", ред. 04.03.2019. Section VIII sets the callsign structure per category. **[H]**
- No amendment to 10-07-01 after 2018 was found. Pending, not adopted:
  - 50.08–50.28 MHz (incl. a Crimea-specific item);
  - 5351.5–5366.5 kHz, a project closed "due to the position of security agencies". **[M]**

### 2. Term
- Local: **категория** (квалификации радиооператора): "четвертая/третья/вторая/первая категория". English: "category". **[H]**
- Suggested English UI word: **"Category"** (values 1–4; note 1 is highest).

### 3. Current levels (lowest to highest)
| Order | Official | English | Code | CEPT | Issued? |
|---|---|---|---|---|---|
| 1 | Четвертая категория, "начальная квалификация" | Category 4 (entry) | 4 | none | Yes |
| 2 | Третья категория, "квалификация новичка" | Category 3 (novice) | 3 | Table 7 groups it with "СЕРТ NOVICE"; the 2017 ECC/REC/(05)06 listed RU "3". Russia is no longer listed | Yes |
| 3 | Вторая категория, "основная (базовая)" | Category 2 (basic) | 2 | Table 7 groups "1, 2 категория и СЕРТ" (= HAREC level) | Yes |
| 4 | Первая категория, "высшая" | Category 1 (highest) | 1 | same as 2 (HAREC level). Requires a Morse receiving test at the SRR exam **[M]** | Yes |

Under 18-45-02, **categories 1 and 2 have identical band and power privileges**. The differences are:
- callsign format (1-2 letter suffixes are only for cat 1);
- the exam (Morse for cat 1);
- for RY training stations, Order № 4 says operators must hold first category. **[H]**

Some secondary pages (e.g. r9c.ru) still say cat 2 = 100 W. That is the pre-2018 rule and is superseded. **[M]**

### 4. Legacy levels
- Categories are unchanged in name since 2010–2012.
- Older callsigns (pre-2012/2013 formats, e.g. UA/RA/RV with 3-letter suffix held by former 2nd/3rd category, or pre-2013 R#XXX for cat 4) remain valid until changed. **[M]**
- Older categories had different powers (e.g. cat 2 = 100 W before 2018; cat 3 had no 30/20/17/12 m before 16.10.2015, decision 15-35-02). **[M]**

### 5. Band privileges (Решение 10-07-01 ред. 18-45-02)
Power definition (Table 7 fn 1) **[H]**:
- **2200 m: max EIRP.**
- **1810–2000 kHz: mean power.**
- **All bands above 3500 kHz: peak (PEP).**

| Band | Cat 4 | Cat 3 | Cat 1 & 2 |
|---|---|---|---|
| 2200m 135.7–137.8 kHz | — | 1 W EIRP | 1 W EIRP |
| 630m | — (not allocated) | — | — |
| 160m 1810–2000 kHz | — | 10 W mean | 10 W mean; **500 W PEP on 1810–1950 during official contests** |
| 80m 3500–3800 | — | 10 W PEP | 1000 W PEP |
| 60m | — (not allocated) | — | — |
| 40m 7000–7200 | — | 10 W | 1000 W |
| 30m 10100–10150 | — | 10 W | 1000 W |
| 20m 14000–14350 | — | 10 W | 1000 W |
| 17m 18068–18168 | — | 10 W | 1000 W |
| 15m 21000–21450 | — | 10 W | 1000 W |
| 12m 24890–24990 | — | 10 W | 1000 W |
| 10m 28000–29700 | — | 10 W | 1000 W |
| 6m / 4m | — (not allocated) | — | — |
| 2m 144–146 MHz | 5 W | 10 W | 100 W |
| 70cm 430–440 MHz | 5 W | 10 W | 10 W (100 W in contests on 432.000–432.400 and 433.600–434.000) |
| 23cm 1260–1300 MHz | 5 W | 10 W | 10 W (100 W in contests on 1296.000–1296.800) |
| 13cm 2320–2320.15 (EME only); 2400–2450 (satellite only) | 5 W | 10 W | 10 W |
| 6cm 5650–5670, 5725–5850; 3cm 10.0–10.5 GHz; 24.0–24.25, 47.0–47.2, 76–78, 122.25–123, 134–141, 241–250 GHz | 5 W | 10 W | 10 W |

Special stations (Tables 5 and 6, not tied to category) **[H]**:
- EME/MS on 144.025–144.165, 144.180–144.399, 432–432.5, 434–434.025, 1296–1296.15 and 2320–2320.15 MHz: **1500 W**.
- Higher microwave EME: 100 W.
- Repeaters/beacons: 10 W on 160 m, 100 W on HF, 50 W on 2 m, 100 W on 430 MHz and up.

**Mode sub-bands** (Tables 1–4) are legally binding and the **same for every category** **[H]**:
- **CW (Table 1):** whole of every band.
- **Narrowband data (Table 2):**
  - HF: 1838–2000, 3570–3800, 7040–7200, 10130–10150, 14070–14350, 18095–18168, 21070–21450, 24915–24990, 28070–29700 kHz.
  - VHF and up: 144.1–146 MHz, 430–440 MHz and microwave.
- **Analog phone (Table 3):**
  - HF (kHz): 1840–2000, 3600–3800, 7050–7200, 14101–14350, 18111–18168, 21151–21450, 24931–24990, 28225–29700. AM/FM only above 28 MHz.
  - VHF/UHF (MHz): 144.15–144.399, 144.491–146, 430–432, 432.1–432.4, 432.5–434, 434.1–440.
  - **No phone on 30 m.**
- **Digital voice/data/image (Table 4):** the phone ranges plus 21110–21120 kHz. On 2 m: 144.15–144.399 and 144.5–146 MHz.
- **430–433 MHz is prohibited within 350 km of Moscow.**

### 6. Callsign inference (Order № 4 ред. 04.03.2019, section VIII) **[H]**
- General structure: prefix **R** or **RA–RZ / UA–UI** + digit + suffix of up to 4 characters ending in a letter. "The permanent callsign must indicate the operator's qualification level."
- **Category 1 only:** 1- or 2-letter suffixes, e.g. RA3A, R3AA, UA3AA, RA3AA.
- **Category 1 or 2:** 3-letter suffix in RA, RC–RD, RG, RJ–RO, RQ, RT–RZ, UA, or bare **R#XXX**.
- **Category 3:** **UB0AAA–UD9ZZZ** (UB/UC/UD + digit + 3 letters).
- **Category 4:** **R0AAAA–R9ZZZZ** (R + digit + 4 letters).
- Training stations are **RY#XXX**. **UB#XXXX** (4 letters) is radio multi-sport training/competition.
- Temporary/special-event calls (8.6.5) are not category-bound.
- **Reliability:**
  - The format gives the category **at time of issue**, a **lower bound**.
  - An operator **may** request a new call when the category changes but is not required to (8.1).
  - Pre-2012 calls may not follow the scheme.
- **Rule:**
  - R#XXXX → ≥4;
  - UB/UC/UD#XXX → ≥3;
  - other 3-letter → ≥2 (1 or 2, same privileges);
  - 1–2 letter suffix → 1.

### 7. Sources
- Решение ГКРЧ № 18-45-02 (restating 10-07-01), Garant full text decoded from cp1251: https://www.garant.ru/products/ipo/prime/doc/71829332/. Supports allocations, conditions, Tables 1–7, validity to 2028-04-01. **[H]**
- Приказ № 184 (2012), Garant: https://www.garant.ru/products/ipo/prime/doc/70163118/. Supports the four categories and their definitions. **[H]** (ред. 17.11.2016 not seen in full)
- Приказ № 4 (2012) section VIII, ред. 04.03.2019 (sudact mirror): https://sudact.ru/law/prikaz-minkomsviazi-rf-ot-12012012-n-4/poriadok-obrazovaniia-pozyvnykh-signalov-dlia/viii/. Supports callsign blocks per category. **[H]** (mirror, not the official portal)
- СРР "Радиочастоты" page: https://srr.ru/radiooperatoram/radiochastoty/. Supports the power summary and pending 50 MHz/60 m proposals. **[M]**
- СРР on decision 15-35-02 (2015): https://srr.ru/gkrch-prinyala-reshenie/. **[M]**
- radiochief.ru on cat 3 getting all HF bands (2015): https://radiochief.ru/news/tretya-radiolyubitelskaya-kategoriya-vse-diapazony/. **[L]**
- QRZ.ru forum on 18-45-02 (cat 2 = 1 kW, valid to 2028): https://forum.qrz.ru/340-lyubitelskoe-radio-i-pravovye-voprosy/48060-prilozhenie-k-resheniyu-gkrch-ot-16-aprelya-2018-g-18-45-02-a.html. **[L]**
- r9c.ru on categories and SRR procedure (outdated power figures): https://r9c.ru/begin/hamcat and https://r9c.ru/begin/main/calls. **[L]**
- ECC/REC/(05)06, 2017 edition (Russia "RC, 3"): https://docdb.cept.org/download/2770. 2023 edition (Russia absent): https://docdb.cept.org/download/4372. **[H]**
- **Unverified:**
  - whether any GKRCh amendment was adopted 2019–2026 (none found);
  - whether Order № 184 was replaced in the 2021 "regulatory guillotine" (no replacement found);
  - whether Table 5 EME powers apply to all categories.

```json
{"entities":["UA","UA2","UA9"],"regulator":"ГКРЧ / Минцифры России (allocation), Роскомнадзор + ФГУП ГРЧЦ (registration, callsigns), СРР (qualification exams)","rules":"Решение ГКРЧ 10-07-01 ред. 18-45-02 (2018-04-16, valid to 2028-04-01); Приказ Минкомсвязи №184 (2012); Приказ №4 (2012) ред. 2019","termLocal":"категория","termEnglish":"Category","levels":[
{"code":"4","name":"Category 4","nameLocal":"4 категория (начальная квалификация)","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":5,"powerNote":"PEP; VHF and above only","bands":[
{"band":"2m","ranges":[[144000,146000,"CW"],[144100,146000,"data"],[144150,144399,"phone"],[144491,146000,"phone"],[144150,144399,"image"],[144500,146000,"image"]]},
{"band":"70cm","ranges":[[430000,440000,"CW"],[430000,440000,"data"],[430000,432000,"phone"],[432100,432400,"phone"],[432500,434000,"phone"],[434100,440000,"phone"]],"notes":"430-433 MHz prohibited within 350 km of Moscow"},
{"band":"23cm","ranges":[[1260000,1300000,"all"]]},{"band":"6cm","ranges":[[5650000,5670000,"all"],[5725000,5850000,"all"]]},{"band":"3cm","ranges":[[10000000,10500000,"all"]]},{"band":"1.2cm","ranges":[[24000000,24250000,"all"]]}],
"notes":"No LF/MF/HF privileges."},
{"code":"3","name":"Category 3","nameLocal":"3 категория (квалификация новичка)","order":2,"cept":"ECC Rec (05)06 Novice (historically; Russia no longer listed)","issued":true,"legacy":false,"maxPowerW":10,"powerNote":"PEP above 3.5 MHz; 160m mean; 2200m EIRP","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"CW",1],[135.7,137.8,"data",1]],"notes":"1 W EIRP"},
{"band":"160m","ranges":[[1810,2000,"CW"],[1838,2000,"data"],[1840,2000,"phone"]],"notes":"10 W mean"},
{"band":"80m","ranges":[[3500,3800,"CW"],[3570,3800,"data"],[3600,3800,"phone"],[3600,3800,"image"]]},
{"band":"40m","ranges":[[7000,7200,"CW"],[7040,7200,"data"],[7050,7200,"phone"],[7050,7200,"image"]]},
{"band":"30m","ranges":[[10100,10150,"CW"],[10130,10150,"data"]]},
{"band":"20m","ranges":[[14000,14350,"CW"],[14070,14350,"data"],[14101,14350,"phone"],[14101,14350,"image"]]},
{"band":"17m","ranges":[[18068,18168,"CW"],[18095,18168,"data"],[18111,18168,"phone"],[18111,18168,"image"]]},
{"band":"15m","ranges":[[21000,21450,"CW"],[21070,21450,"data"],[21151,21450,"phone"],[21110,21120,"image"],[21151,21450,"image"]]},
{"band":"12m","ranges":[[24890,24990,"CW"],[24915,24990,"data"],[24931,24990,"phone"],[24931,24990,"image"]]},
{"band":"10m","ranges":[[28000,29700,"CW"],[28070,29700,"data"],[28225,29700,"phone"],[28225,29700,"image"]]},
{"band":"2m","ranges":[[144000,146000,"CW"],[144100,146000,"data"],[144150,144399,"phone"],[144491,146000,"phone"]]},
{"band":"70cm","ranges":[[430000,440000,"CW"],[430000,440000,"data"],[430000,432000,"phone"],[432100,432400,"phone"],[432500,434000,"phone"],[434100,440000,"phone"]]},
{"band":"23cm","ranges":[[1260000,1300000,"all"]]},{"band":"6cm","ranges":[[5650000,5670000,"all"],[5725000,5850000,"all"]]},{"band":"3cm","ranges":[[10000000,10500000,"all"]]},{"band":"1.2cm","ranges":[[24000000,24250000,"all"]]}],
"notes":"Same band set as cat 1/2 since 2015-10-16; 10 W everywhere."},
{"code":"2","name":"Category 2","nameLocal":"2 категория (основная/базовая квалификация)","order":3,"cept":"HAREC-level (Table 7 'СЕРТ')","issued":true,"legacy":false,"maxPowerW":1000,"powerNote":"PEP above 3.5 MHz; 160m 10 W mean (500 W PEP 1810-1950 in contests); 2m 100 W; 70cm+ 10 W (100 W in contests on 432.0-432.4, 433.6-434.0, 1296.0-1296.8)","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"CW",1],[135.7,137.8,"data",1]]},
{"band":"160m","ranges":[[1810,2000,"CW",10],[1838,2000,"data",10],[1840,2000,"phone",10]]},
{"band":"80m","ranges":[[3500,3800,"CW"],[3570,3800,"data"],[3600,3800,"phone"],[3600,3800,"image"]]},
{"band":"40m","ranges":[[7000,7200,"CW"],[7040,7200,"data"],[7050,7200,"phone"],[7050,7200,"image"]]},
{"band":"30m","ranges":[[10100,10150,"CW"],[10130,10150,"data"]]},
{"band":"20m","ranges":[[14000,14350,"CW"],[14070,14350,"data"],[14101,14350,"phone"],[14101,14350,"image"]]},
{"band":"17m","ranges":[[18068,18168,"CW"],[18095,18168,"data"],[18111,18168,"phone"],[18111,18168,"image"]]},
{"band":"15m","ranges":[[21000,21450,"CW"],[21070,21450,"data"],[21151,21450,"phone"],[21110,21120,"image"],[21151,21450,"image"]]},
{"band":"12m","ranges":[[24890,24990,"CW"],[24915,24990,"data"],[24931,24990,"phone"],[24931,24990,"image"]]},
{"band":"10m","ranges":[[28000,29700,"CW"],[28070,29700,"data"],[28225,29700,"phone"],[28225,29700,"image"]]},
{"band":"2m","ranges":[[144000,146000,"CW",100],[144100,146000,"data",100],[144150,144399,"phone",100],[144491,146000,"phone",100]]},
{"band":"70cm","ranges":[[430000,440000,"CW",10],[430000,440000,"data",10],[430000,432000,"phone",10],[432100,432400,"phone",10],[432500,434000,"phone",10],[434100,440000,"phone",10]]},
{"band":"23cm","ranges":[[1260000,1300000,"all",10]]},{"band":"6cm","ranges":[[5650000,5670000,"all",10],[5725000,5850000,"all",10]]},{"band":"3cm","ranges":[[10000000,10500000,"all",10]]},{"band":"1.2cm","ranges":[[24000000,24250000,"all",10]]}],
"notes":"Identical privileges to category 1 since 2018 (decision 18-45-02)."},
{"code":"1","name":"Category 1","nameLocal":"1 категория (высшая квалификация)","order":4,"cept":"HAREC-level (Table 7 'СЕРТ')","issued":true,"legacy":false,"maxPowerW":1000,"powerNote":"same as category 2","bands":[],"notes":"Bands/power identical to category 2 (copy category 2 bands). Distinction: Morse exam; eligible for 1-2 letter suffix calls; RY training-station supervision."}],
"callsignInference":"Order No.4 sec. VIII: R#XXXX (4-letter suffix) = cat 4; UB/UC/UD#XXX = cat 3; 3-letter suffix in RA/RC-RD/RG/RJ-RO/RQ/RT-RZ/UA or R#XXX = cat 1 or 2; 1-2 letter suffix = cat 1. RY#XXX = training station; UB#XXXX = radio multi-sport. Category at time of issue only (lower bound); upgrade does not force a callsign change; pre-2012 calls may not conform.","asOf":"2026-10","confidence":"high"}
```

---

## Ukraine

### 1. Regulator and rules
- Regulator: **НКЕК**, Національна комісія, що здійснює державне регулювання у сферах електронних комунікацій, радіочастотного спектра та надання послуг поштового зв'язку. Technical administration and callsign/permit issue: **УДЦР** (Ukrainian State Centre of Radio Frequencies). Exams: **КТК** qualification-technical commissions. **[H]**
- Governing rules: **Регламент аматорського радіозв'язку України**, approved by **Постанова НКЕК від 10.05.2023 № 173**. Registered with the Ministry of Justice **29.06.2023 № 1106/40162**, in force from official publication. It repeals the 2010 Regulation (рішення НКРЗ № 475). Bands and powers per qualification are in **Annex 2, Table 12**; callsign structure is in **Annex 31**. **[H]**
  - https://nkek.gov.ua/static-objects/nkek-october-prod/sites/1/%D0%A0%D0%9E%20%D1%82%D0%B0%20%D0%92%D0%9F/reglament-rz-173.pdf
  - https://zakon.rada.gov.ua/laws/show/z1106-23 (the site was unreachable during research)
- No amendment after 2023 was found. **[M]**
- **Martial law caveat:**
  - A presidential decree of 24 Feb 2022 (state of emergency) banned operation of amateur transmitters for personal and collective use. **[M]** (ARRL)
  - A 2022 secondary account says that under the martial-law regime (from 26 Mar 2022) a ban exists only where the General Staff or regional military administrations impose one. Several oblasts replied "no ban". **[L]**
  - The **current (Oct 2026) legal status of on-air operation could not be verified.** Martial law was still being extended as of 2025.

### 2. Term
- Local: **кваліфікація радіоаматора** (A, B, C). The legacy term is **категорія** (1, 2, 3). Station "категорія АРС" also appears. English: "qualification". **[H]**
- Suggested English UI word: **"Qualification"**, or "Class" (A/B/C).

### 3. Current levels (Section V)
| Order | Official | English | Code | CEPT | Issued? |
|---|---|---|---|---|---|
| 1 | C, радіоаматор-учень | Entry level (student) | C | ECC Report 89 Entry-Level (exam programme Annex 3) | Yes ("нова кваліфікація") |
| 2 | B, радіоаматор-початківець | Novice | B | CEPT Novice (ECC/REC/(05)06; NOVICE certificate issued by УДЦР) | Yes |
| 3 | A, вища кваліфікація | Higher qualification | A | HAREC (T/R 61-02 lists Ukraine "A (old 1, 2)") | Yes |

### 4. Legacy levels (Section XII p.4) **[H]**
- Old **категорія 1 and 2 → A**.
- Old **категорія 3 → B**.
- C is new.
- Permits issued under the 2010 Regulation remain valid until expiry.

### 5. Band privileges (Annex 2, Table 12)
- Power is **transmitter output power (Р вих)**, measured into a matched dummy load in **continuous-emission mode** (§ III.17). It is effectively carrier/mean output; PEP is not stated. **[H]**
- "—" = not permitted. Modes are as listed in the regulation (CW, SSB, AM, FM, SSTV, DIGI/MGM, SAT, EME, IBP beacons).

| Band / segment (kHz or MHz) | Modes | A | B | C |
|---|---|---|---|---|
| 2200m 135.7–137.8 kHz | CW, DIGI | 1 W EIRP | — | — |
| 160m 1810–1840 kHz | CW | 100 | 50 | 5 |
| 160m 1838–1842 | DIGI | 100 | 50 | 5 |
| 160m 1840–1850 | SSB, CW | 100 | 50 | — |
| 160m 1850–1900 | SSB, CW | 10 | 5 | 5 |
| 160m 1900–2000 | AM, SSB, CW | 10 | 5 | 5 |
| 80m 3500–3600 | CW | 200 | 100 | 40 |
| 80m 3573–3620 | DIGI | 200 | 100 | 40 |
| 80m 3600–3650 | SSB, CW | 200 | 100 | 40 |
| 80m 3650–3700 | SSB, CW | 200 | 100 | — |
| 80m 3700–3800 | SSB, CW | 200 | — | — |
| 80m 3730–3740 | SSTV | 200 | 100 | — |
| 40m 7000–7100 | CW | 200 | 100 | 40 |
| 40m 7040–7080 | SSTV, DIGI | 200 | 100 | — |
| 40m 7050–7100 | SSB | 200 | 100 | 40 |
| 40m 7100–7200 | SSB, CW | 200 | — | — |
| 30m 10100–10150 | CW | 200 | 100 | 40 |
| 30m 10136–10150 | DIGI | 200 | 100 | — |
| 20m 14000–14250 | CW | 200 | 100 | — |
| 20m 14070–14112 | DIGI | 200 | 100 | — |
| 20m 14100–14250 | SSB | 200 | — | — |
| 20m 14225–14235 | SSTV | 200 | — | — |
| 20m 14250–14350 | SSB, CW | 200 | — | — |
| 17m 18068–18168 | CW | 200 | 100 | 40 |
| 17m 18100–18110 | DIGI | 200 | 100 | — |
| 17m 18110–18168 | SSB | 200 | 100 | — |
| 15m 21000–21450 | CW | 200 | 100 | 40 |
| 15m 21074–21120 | DIGI | 200 | 100 | 40 |
| 15m 21150–21250 | SSB | 200 | 100 | 40 |
| 15m 21250–21450 | SSB | 200 | — | — |
| 15m 21335–21345 | SSTV | 200 | — | — |
| 12m 24890–24990 | CW | 200 | 100 | 40 |
| 12m 24915–24930 | DIGI | 200 | 100 | — |
| 12m 24930–24990 | SSB | 200 | 100 | — |
| 10m 28000–28200 | CW | 200 | 100 | 40 |
| 10m 28070–28150, 28300–28320, 29200–29300 | DIGI | 200 | 100 | 40 |
| 10m 28200–28800 | SSB, CW | 200 | 100 | 40 |
| 10m 28675–28685 | SSTV | 200 | — | — |
| 10m 28800–29300 | SSB, AM, CW | 200 | 100 | 40 |
| 10m 29300–29510 | SAT | 200 | 100 | — |
| 10m 29520–29700 | FM, SSB, CW | 200 | 100 | 40 |
| 6m 50.0–52.0 MHz (secondary; separate УДЦР document required) | CW, SSB, DIGI | 50 | — | — |
| 2m 144.000–144.035 | EME | 5 | — | — |
| 2m 144.035–146.000 | CW, SSB, FM, DIGI, SSTV, SAT (segmented) | 5 | 5 | 5 |
| 70cm 430–440 MHz (432.000–432.025 EME: A only) | FM, DIGI, CW, SSB, AM, SAT (segmented) | 5 | 5 | 5 |
| 6cm 5650–5670 MHz (5660–5670 SAT/EME and 5830–5850: A only) | FM, CW, SSB | 5 | 5 | 5 |
| 3cm 10100–10150 MHz (needs General Staff coordination) | FM, CW, SSB | 5 | 5 | 5 |
| 24.00–24.05, 47.0–47.2, 76–81, 122.25–123, 134–141, 241–250 GHz | FM, CW, SSB | 5 | 5 | 5 |

Not allocated: **630m, 60m, 4m, 23cm, 13cm, 9cm.** **[H]**

Odd features of the table, all as printed **[H]**:
- the low VHF/UHF power (5 W for all classes);
- C at 40 W on HF but 5 W on 160 m.

Possible NKEK power cut to 10 W on 1810–1830 kHz (fn 3).

### 6. Callsign inference (Annex 31) **[H]**
- Structure: prefix **UR, US, UT, UU, UV, UW, UX, UY, UZ** + digit, then a **2- or 3-letter suffix**.
  - UU0–UU8 are Crimea; UU9 is Sevastopol.
  - EM/EN/EO are special calls.
  - The first suffix letter is the oblast. The second letter A–V means an individual station, W–Z a collective one.
- "Individual stations of the **first category** may on request get a **2-letter suffix**." The wording still uses the legacy "category".
- **Rule:**
  - UR–UZ + digit + 2 letters → A (formerly cat 1).
  - 3-letter suffix → any of A/B/C.
  - **Reliability:** low except for the 2-letter case.
- Observers: US-<oblast letter>-<number>. Repeaters/beacons: UR0.

### 7. Sources
- НКЕК Постанова № 173 + Регламент (official PDF, 107 pp., read): link above. Supports sections V and XII, Table 12, Annex 31, power measurement. **[H]**
- 2023 draft copy (cross-check): http://vovlru.cc.ua/files/reglament_2023.pdf. **[M]**
- НКЕК 2022 draft (decision № 205): https://nkek.gov.ua/static-objects/nkek/imported_content/668e6ada0d74e.pdf. **[M]**
- НКЕК NPA page: https://nkek.gov.ua/npas/postanova-nkek-vid-10052023-no-173-pro-zatverdzennia-reglamentu-amatorskogo-radiozviazku-ukrayini. **[M]**
- iplex (MoJ registration 29.06.2023 № 1106/40162): https://iplex.com.ua/doc.php?code=z1106-23. **[M]**
- CEPT T/R 61-02 Annex 4 (Ukraine "A (old 1, 2)"): https://docdb.cept.org/download/4424. **[H]**
- ARRL, 2022 ban: https://www.arrl.org/news/ukraine-maintains-ham-radio-silence-in-state-of-emergency. **[M]**
- 2022 secondary clarification: https://eindhoven.space/2022/10/08/ham-radio-usage-in-ukraine-war-clarified/. **[L]**
- **Unverified:**
  - the current martial-law status of transmitting;
  - any amendments after 2023;
  - whether the 5 W VHF/UHF figures are intended (they look unusually low but are as printed).

```json
{"entities":["UR"],"regulator":"НКЕК (National Commission for State Regulation of Electronic Communications...), УДЦР (callsigns/permits)","rules":"Регламент аматорського радіозв'язку України, Постанова НКЕК 10.05.2023 №173 (МЮ 29.06.2023 №1106/40162), Annex 2 Table 12","termLocal":"кваліфікація радіоаматора (legacy: категорія)","termEnglish":"Qualification","levels":[
{"code":"C","name":"Entry level (student)","nameLocal":"C — радіоаматор-учень","order":1,"cept":"ECC Report 89 entry level","issued":true,"legacy":false,"maxPowerW":40,"powerNote":"output power, continuous-emission measurement; 160m 5 W; VHF/UHF 5 W","bands":[
{"band":"160m","ranges":[[1810,1840,"CW",5],[1838,1842,"data",5],[1850,2000,"phone",5],[1850,2000,"CW",5]]},
{"band":"80m","ranges":[[3500,3650,"CW"],[3573,3620,"data"],[3600,3650,"phone"]]},
{"band":"40m","ranges":[[7000,7100,"CW"],[7050,7100,"phone"]]},
{"band":"30m","ranges":[[10100,10150,"CW"]]},
{"band":"17m","ranges":[[18068,18168,"CW"]]},
{"band":"15m","ranges":[[21000,21450,"CW"],[21074,21120,"data"],[21150,21250,"phone"]]},
{"band":"12m","ranges":[[24890,24990,"CW"]]},
{"band":"10m","ranges":[[28000,29300,"CW"],[28070,28150,"data"],[28300,28320,"data"],[29200,29300,"data"],[28200,29300,"phone"],[29520,29700,"phone"],[29520,29700,"CW"]]},
{"band":"2m","ranges":[[144035,146000,"all",5]]},
{"band":"70cm","ranges":[[430000,432000,"all",5],[432025,440000,"all",5]]},
{"band":"6cm","ranges":[[5650000,5670000,"all",5]]},{"band":"3cm","ranges":[[10100000,10150000,"all",5]]},{"band":"1.2cm","ranges":[[24000000,24050000,"all",5]]}],
"notes":"No 20m. New qualification since 2023."},
{"code":"B","name":"Novice","nameLocal":"B — радіоаматор-початківець","order":2,"cept":"ECC Rec (05)06 Novice","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"output power; 160m 50 W (1810-1850) / 5 W (1850-2000); VHF/UHF 5 W","bands":[
{"band":"160m","ranges":[[1810,1850,"CW",50],[1838,1842,"data",50],[1840,1850,"phone",50],[1850,2000,"phone",5],[1850,2000,"CW",5]]},
{"band":"80m","ranges":[[3500,3700,"CW"],[3573,3620,"data"],[3600,3700,"phone"],[3730,3740,"image"]]},
{"band":"40m","ranges":[[7000,7100,"CW"],[7040,7080,"data"],[7040,7080,"image"],[7050,7100,"phone"]]},
{"band":"30m","ranges":[[10100,10150,"CW"],[10136,10150,"data"]]},
{"band":"20m","ranges":[[14000,14250,"CW"],[14070,14112,"data"]]},
{"band":"17m","ranges":[[18068,18168,"CW"],[18100,18110,"data"],[18110,18168,"phone"]]},
{"band":"15m","ranges":[[21000,21450,"CW"],[21074,21120,"data"],[21150,21250,"phone"]]},
{"band":"12m","ranges":[[24890,24990,"CW"],[24915,24930,"data"],[24930,24990,"phone"]]},
{"band":"10m","ranges":[[28000,29700,"CW"],[28070,28150,"data"],[28300,28320,"data"],[29200,29300,"data"],[28200,29300,"phone"],[29520,29700,"phone"]]},
{"band":"2m","ranges":[[144035,146000,"all",5]]},
{"band":"70cm","ranges":[[430000,432000,"all",5],[432025,440000,"all",5]]},
{"band":"6cm","ranges":[[5650000,5660000,"all",5]]},{"band":"3cm","ranges":[[10100000,10150000,"all",5]]},{"band":"1.2cm","ranges":[[24000000,24050000,"all",5]]}],
"notes":"Old category 3 maps here. No phone on 20m."},
{"code":"A","name":"Higher qualification (HAREC)","nameLocal":"A — вища кваліфікація радіоаматора","order":3,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":200,"powerNote":"output power; 160m 100 W (1810-1850) / 10 W (1850-2000); 6m 50 W; VHF/UHF/microwave 5 W","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"CW",1],[135.7,137.8,"data",1]],"notes":"1 W EIRP"},
{"band":"160m","ranges":[[1810,1850,"CW",100],[1838,1842,"data",100],[1840,1850,"phone",100],[1850,2000,"phone",10],[1850,2000,"CW",10]]},
{"band":"80m","ranges":[[3500,3800,"CW"],[3573,3620,"data"],[3600,3800,"phone"],[3730,3740,"image"]]},
{"band":"40m","ranges":[[7000,7200,"CW"],[7040,7080,"data"],[7040,7080,"image"],[7050,7200,"phone"]]},
{"band":"30m","ranges":[[10100,10150,"CW"],[10136,10150,"data"]]},
{"band":"20m","ranges":[[14000,14350,"CW"],[14070,14112,"data"],[14100,14350,"phone"],[14225,14235,"image"]]},
{"band":"17m","ranges":[[18068,18168,"CW"],[18100,18110,"data"],[18110,18168,"phone"]]},
{"band":"15m","ranges":[[21000,21450,"CW"],[21074,21120,"data"],[21150,21450,"phone"],[21335,21345,"image"]]},
{"band":"12m","ranges":[[24890,24990,"CW"],[24915,24930,"data"],[24930,24990,"phone"]]},
{"band":"10m","ranges":[[28000,29700,"CW"],[28070,28150,"data"],[28300,28320,"data"],[29200,29300,"data"],[28200,29300,"phone"],[29520,29700,"phone"],[28675,28685,"image"]]},
{"band":"6m","ranges":[[50000,52000,"CW",50],[50100,52000,"phone",50],[50300,52000,"data",50]],"notes":"secondary; requires separate УДЦР operating document"},
{"band":"2m","ranges":[[144000,146000,"all",5]]},
{"band":"70cm","ranges":[[430000,440000,"all",5]]},
{"band":"6cm","ranges":[[5650000,5670000,"all",5],[5830000,5850000,"all",5]]},{"band":"3cm","ranges":[[10100000,10150000,"all",5]]},{"band":"1.2cm","ranges":[[24000000,24050000,"all",5]]}],
"notes":"Old categories 1 and 2 map here."},
{"code":"1","name":"Category 1 (legacy)","nameLocal":"1 категорія","order":3,"cept":"HAREC","issued":false,"legacy":true,"maxPowerW":200,"powerNote":"= A","bands":[],"notes":"Maps to A."},
{"code":"2","name":"Category 2 (legacy)","nameLocal":"2 категорія","order":3,"cept":"HAREC","issued":false,"legacy":true,"maxPowerW":200,"powerNote":"= A","bands":[],"notes":"Maps to A."},
{"code":"3","name":"Category 3 (legacy)","nameLocal":"3 категорія","order":2,"cept":"ECC Rec (05)06 Novice","issued":false,"legacy":true,"maxPowerW":100,"powerNote":"= B","bands":[],"notes":"Maps to B."}],
"callsignInference":"UR-UZ + digit + 2-letter suffix = A (former 1st category, on request). 3-letter suffix = any qualification (2nd letter A-V individual, W-Z collective). Low reliability beyond the 2-letter case.","asOf":"2026-10","confidence":"high"}
```

---

## Open questions and unverified items (all jurisdictions)
1. **Norway:** the callsign series for the new begrenset lisens, and whether exams for it have actually started.
2. **Sweden:**
   - current terms of the individual permit above 200 W (the 1 kW figure comes from 2018 ARRL reports);
   - 4m status (not in the exemption);
   - 13cm "100 mW", which may be a drafting error.
3. **Denmark:** no official callsign/category link exists; any informal convention is unverified. Faroe/Greenland were not researched.
4. **Finland:**
   - the Määräys 6 K/2019 M text was not obtained, so the legacy T-class mapping is inferred;
   - the 4 AG/2026 M amateur rows are assumed unchanged from 4 AF/2025 M.
5. **Russia:**
   - no post-2018 GKRCh amendment was found; decision 18-45-02 expires 2028-04-01, so expect a re-issue;
   - Order 184's current redaction was not seen in full;
   - EME table category applicability is unclear.
6. **Ukraine:**
   - whether amateurs may currently transmit under martial law;
   - amendments after 2023;
   - the unusually low VHF/UHF powers are as printed.

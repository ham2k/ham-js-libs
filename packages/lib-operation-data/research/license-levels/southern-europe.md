# Licence levels: Southern Europe (I, EA, CT, SV, YO, YU, LZ, TA)

Research date: 2026-10-14. Scope: Italy (I), Spain (EA), Portugal (CT, plus CU Azores and CT3 Madeira, which share the regime), Greece (SV), Romania (YO), Serbia (YU), Bulgaria (LZ), Turkey (TA; European and Asiatic Turkey share one regime).

Conventions used in this file:

- Frequencies are in kHz in the JSON blocks. The prose tables use the units of the source document.
- Confidence: **high** means a primary source (a regulator's own document or an official gazette text) was fetched and read. **Medium** means a society or secondary source, or a primary source whose table layout had to be interpreted. **Low** means unverified or inferred.
- JSON range tuples have the shape `[startKHz, endKHz, "modes"]`. Two optional extensions are used: a 4th element, the max power in W for that range when it differs from the level's `maxPowerW`, and a 5th element, a note on that power (for example "EIRP", "ERP" or "mean").
  - `modes` is one tag, or several joined with `|`, from: `all`, `CW`, `phone`, `image`, `data`, `RTTY`.
  - `all` means no mode restriction tied to the licence level. National band plans (IARU R1) still apply, but they are not licence conditions.
- Power is transmitter output PEP unless stated otherwise.
- "Bands" lists only bands where the level may transmit on its **own** station. Several countries (Portugal, Turkey, Spain) let lower levels use more bands at a club station or under a higher-class operator's supervision. That is noted in prose, not encoded in JSON.

### CEPT cross-reference (primary, CEPT ECO documents fetched)

| Country | T/R 61-01 (HAREC) classes, Appendix II, ed. 4 Oct 2011 | ECC/REC/(05)06 Annex 2 (Novice), ed. 16 Jun 2023 |
|---|---|---|
| Italy (I) | "General" | not listed |
| Spain (EA) | A | not listed |
| Portugal (CT) | 1, A and B (prefix CT7) | **2** (CS7 / CS8 / CS9) |
| Greece (SV, SW) | 1 and 2 (the 2002 categories) | not listed |
| Romania (YO) | I and II | **III** |
| Serbia (YU) | 1 (now A) | not listed |
| Bulgaria (LZ) | Class 1 | not listed |
| Turkey (TA) | A | not listed |

Sources: T/R 61-01 ed. 2011, https://docdb.cept.org/download/2775. ECC/REC/(05)06 ed. 2023, https://docdb.cept.org/download/4372. Both were downloaded and read (high). The 2011 T/R 61-01 appendix predates several of the reforms below, so its class names are partly out of date (Greece, Serbia).

---

## Italy (I)

### 1. Regulator and rules

- **Regulator:** Ministero delle Imprese e del Made in Italy (MIMIT), Direzione generale per i servizi territoriali. Exams and licences are handled by the regional *Ispettorati territoriali*, also called "Case del made in Italy".
- **Primary law:** Codice delle comunicazioni elettroniche, D.Lgs. 1 agosto 2003 n. 259, Titolo III Capo VII, artt. 134–145 ("Attività radioamatoriale"). The text was rewritten by D.Lgs. 207/2021, and art. 135 (types of authorisation), art. 136 (patente) and art. 139 (nominativi) were amended by D.Lgs. 24 marzo 2024 n. 48. The current art. 136 reads "patente di operatore di classe A … o di classe N" (high, from the Brocardi text of art. 136).
- **Technical rules:** Allegato 26 al Codice (normativa tecnica dell'attività radioamatoriale). It was replaced in full by the DM of 1 March 2021, which adopts T/R 61-02, issues a single "HAREC level A" patente, and sets 500 W PEP in art. 15 (medium: read via the studiocerbone.com reproduction of the DM, not via the GU text).
- **Class N decree:** DM 26 gennaio 2026, "Criteri generali e modalità per il conseguimento della patente di classe N e delle modalità di assegnazione e gestione dei nominativi a scelta", GU Serie Generale n. 51 del 3 marzo 2026 (high: the MIMIT PDF was downloaded).
  - Art. 1 adopts ECC/REC/(05)06. The exam is written or oral, the pass mark is 60%, and the syllabus follows ERC Report 32. A *decreto direttoriale* will set the syllabus.
  - Art. 3: anything not covered falls under Allegati 25 and 26, as amended by future *decreti direttoriali*.
  - Art. 4: until those decrees are adopted, "continuano ad applicarsi le disposizioni vigenti".
- **Status:** The MIMIT Ispettorati page (last edited after 11 May 2026) still says the implementing decrees are "in corso di definizione". I found no implementing decree published by 2026-10-14.
- **Pending consultation:** MIMIT ran a 2025 consultation on amending Allegato 26, with responses due 30 June 2025. It asked about four things:
  - Class N technical norms and power limits.
  - A callsign series reserved for class N.
  - Vanity calls of up to 5 characters.
  - Keeping a callsign when moving region.

### 2. Term

- **Local term:** "patente di operatore di stazione di radioamatore di classe A / classe N". The station authorisation is the "autorizzazione generale di classe A / N".
- **English rendering:** "Licence class".
- **Recommended UI word:** **License Class**.

### 3. Current levels (lowest to highest)

| Order | Local name | English | Code | CEPT | Issued? |
|---|---|---|---|---|---|
| 1 | Patente di classe N | Novice | N | Novice (ECC/REC/(05)06, by law) | **Not yet.** It exists in law (D.Lgs. 48/2024, DM 26/1/2026), but there is no syllabus, privileges or callsign series as of 2026-10. |
| 2 | Patente di classe A (HAREC level A) | Full | A | HAREC / T/R 61-01 "General" | Yes |

Today Italy is effectively a **single-level** country: every active licensee is class A.

### 4. Legacy levels

- **Classe B** ("patente speciale"; HAREC level B in the 2003 Allegato 26). It was a written exam with no Morse test.
  - The old Allegato 26 art. 15 gave it **50 W PEP**, against 500 W for class A (high: old MIMIT Allegato_26.pdf, with class A/B text).
  - Old art. 8 let class B practise Morse on 28–29.7 MHz only at a class A station. That implies B had no HF of its own.
  - B was a VHF+ class (CEPT class 2), though I did not verify that in a primary text (medium).
- **Merger:** Class B was merged into class A by the "Unificazione delle patenti" decree (GU n. 196 del 24 agosto 2005), per the MIMIT Ispettorati page (high: the page states "sono state unificate nell'unica classe A").
- Former B holders now hold A privileges. **Map legacy B to A.**
- Pre-2003 "licenze ordinarie e speciali" were converted to general authorisations (old art. 19). They are also now A.

### 5. Band privileges

Class A may use every band the Piano nazionale di ripartizione delle frequenze (PNRF) assigns to the amateur service.

- **Power:** 500 W PEP, fixed or mobile/portable (Allegato 26 art. 15), "fatte salve" any lower PNRF limits.
- **Repeaters:** 10 W ERP.
- **Mode restrictions:** none tied to licence level.

| Band | Range | Class A | Class N |
|---|---|---|---|
| 2200m | 135.7–137.8 kHz | 1 W EIRP (RR 5.67A; PNRF) | TBD |
| 630m | 472–479 kHz | 1 W EIRP (RR 5.80A) | TBD |
| 160m | 1810–1850 kHz | 500 W PEP | TBD |
| 80m | 3500–3800 kHz | 500 W PEP | TBD |
| 60m | 5351.5–5366.5 kHz | 15 W EIRP (PNRF 2018, secondary) | TBD |
| 40m–10m | standard R1 ranges | 500 W PEP | TBD |
| 6m | 50–52 MHz (national limits apply) | 500 W PEP / PNRF | TBD |
| 4m | 70 MHz, temporary experimental authorisations only (ARI renewals reported 2025) | per authorisation | – |
| 2m, 70cm and up | PNRF ranges | 500 W PEP / PNRF | TBD |

Confidence:

- 500 W PEP: high in the old Allegato 26, medium in the 2021 text.
- Per-band PNRF sub-limits (60m 15 W EIRP; LF/MF 1 W EIRP): medium.
- Exact Italian 6m and 70cm edges: not verified.
- Class N privileges are **not defined yet**. A 2026 commentary (paolettopn.it) guesses at VHF/UHF only and ≤50 W, but this is speculation (low). Do not encode it.

### 6. Callsign inference

- **Structure:** "I", optionally a second letter, one digit (region), and up to 3 letters (Allegato 26 art. 6).
- **No inference is possible today.** Every series (I, IK, IZ, IU, IW, IN3…) belongs to class A holders.
  - Historically, IW (and some IZ/IU) were issued to class B. After the 2005 merger those holders are A.
  - The digit is regional (IS0 Sardinia, IT9 Sicily, etc.), not class-related.
- **Future:** the 2025 consultation proposes a callsign series exclusive to class N. If adopted, class N might become inferable. Watch for the *decreto direttoriale*.
- **Vanity calls:** chosen callsigns (≤5 characters) lapse automatically without a valid class A authorisation (DM 26/1/2026 art. 2). So a vanity-format call implies class A (high).

### 7. Sources

| URL | Supported | Confidence |
|---|---|---|
| https://brocardi.it/codice-delle-comunicazioni-elettroniche/titolo-iii/capo-vii/art136.html | Current art. 136 (class A or N; ECC/REC/(05)06), as replaced by D.Lgs. 48/2024 | high |
| https://ispettorati.mise.gov.it/images/ispettorati/Modulistica_DGST/DM_26_gennaio_2026__GU_51_del_332026.pdf (and the mirror gazzettaufficiale.biz/atti/2026/20260051/26A00956.htm) | DM 26/1/2026: class N, vanity calls, Art. 4 transitional rule | high |
| https://ispettorati.mise.gov.it/index.php/servizi/radioamatori | 2005 A/B unification; class N implementing decrees still pending | high |
| https://www.mimit.gov.it/images/stories/documenti/allegati/scheda_informativa_e_quesiti_Consultazione_pubblica_online_radioamatori_2025.pdf | 2025 consultation topics (class N limits, exclusive class N calls, vanity calls) | high |
| https://www.mimit.gov.it/images/stories/recuperi/Comunicazioni/Allegato_26.pdf | Old Allegato 26: classes A/B; 500 W vs 50 W; B Morse practice on 10m | high (historical) |
| https://www.studiocerbone.com/?p=450464 | DM 1/3/2021 replacing Allegato 26: single HAREC level A; 500 W PEP; 10-year authorisation | medium |
| https://www.iw5edi.com/ham-radio/2907/habemus-lx-metris-italy-gains-60-meters | 60m in PNRF 2018 at 15 W EIRP | medium |
| https://www.paolettopn.it/2026/03/06/patente-n-novita-mimit-per-radioamatori/ | Commentary on class N (speculative privileges) | low |
| https://www.arnewsline.org/news-text/2025/5/1/three-bands-okd-for-italian-amateur-experimentation | 70 MHz experimental use | low |

**Could not verify:**

- Whether a class N *decreto direttoriale* was issued between May and October 2026. MIMIT said none had been.
- The official GU text of the 2021 Allegato 26.
- Exact PNRF band edges and notes for 6m, 4m and 70cm.

```json
{"entities":["I"],"regulator":"MIMIT (Ministero delle Imprese e del Made in Italy)","termLocal":"patente (classe)","termEnglish":"License Class","levels":[
{"code":"N","name":"Class N (Novice)","nameLocal":"Patente di classe N","order":1,"cept":"Novice","issued":false,"legacy":false,"maxPowerW":null,"powerNote":"Not yet defined: implementing decreto direttoriale pending (DM 26/1/2026 art. 4)","bands":[],"notes":"Created by D.Lgs. 48/2024 and DM 26/1/2026 (GU 51, 3/3/2026). No exam syllabus, privileges or callsign series in force as of 2026-10. A class N callsign series is proposed."},
{"code":"A","name":"Class A","nameLocal":"Patente di classe A (HAREC level A)","order":2,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":500,"powerNote":"PEP output (Allegato 26 art. 15), subject to lower PNRF limits per band","bands":[
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
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,52000,"all"]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]}],"notes":"The only level actually held. 6m and 70cm edges follow the PNRF and were not verified. 4m only via temporary experimental authorisations."},
{"code":"B","name":"Class B (legacy)","nameLocal":"Patente di classe B / patente speciale","order":2,"cept":"HAREC","issued":false,"legacy":true,"maxPowerW":50,"powerNote":"PEP, per the old Allegato 26 art. 15","bands":[],"notes":"Merged into class A in 2005 (GU 196, 24/8/2005). Treat holders as class A. Historically VHF+ only, often IW calls."}],
"callsignInference":"Not possible today: all series are class A. Old IW/IZ calls of ex-class-B holders are now class A. A vanity (chosen) callsign implies class A. A future class N series is proposed but not defined.","asOf":"2026-10","confidence":"medium"}
```

---

## Spain (EA)

### 1. Regulator and rules

- **Regulator:** Ministerio para la Transformación Digital y de la Función Pública, Secretaría de Estado de Telecomunicaciones e Infraestructuras Digitales (SETID). Field administration is handled by the Jefaturas Provinciales de Inspección de Telecomunicaciones.
- **Rules:** Orden IET/1311/2013, de 9 de julio, por la que se aprueba el Reglamento de uso del dominio público radioeléctrico por radioaficionados, BOE núm. 166, 12/07/2013 (BOE-A-2013-7624).
  - It was modified only in its Disposición adicional segunda, by Orden IET/614/2015 (consolidated text current from 11/04/2015, per the BOE).
  - The ministry still lists it as current law.
- **Band edges:** bands and special conditions (60m, 4m, 160m) are set in the Cuadro Nacional de Atribución de Frecuencias (CNAF) notes, such as UN-132.

### 2. Term

- **Local term:** "autorización de radioaficionado". It has no classes. The old term was "licencia de clase A/B/C".
- **Recommended UI word:** **License Class**, with the single value "Radioaficionado (HAREC)".

### 3. Current levels

| Order | Local name | English | Code | CEPT | Issued? |
|---|---|---|---|---|---|
| 1 | Autorización de radioaficionado | Amateur authorisation (full) | – | HAREC (T/R 61-01 lists Spain "A") | Yes |

Spain has had a **single level** since 2006.

- The authorisation is permanent: it stays in force until the holder renounces it (Reglamento art. 5.4).
- It gives access to all bands allocated to the amateur and amateur-satellite services (art. 5.3) (high).

### 4. Legacy levels

- Before 2006 there were classes **A, B and C**:
  - A: full, with Morse.
  - B: no Morse; the UK "Limited" equivalent.
  - C: novice; the UK "Novice" equivalent.

  The UK equivalences come from a 1992 BOE equivalence order (medium).
- Orden ITC/1791/2006, Disposición final segunda, says: "Los actuales titulares de licencias B y C podrán hacer uso de todas las bandas de frecuencias atribuidas" (high: BOE 9/6/2006 PDF read).
- Since then **B and C have full privileges. Map all legacy classes to the single level.**

### 5. Band privileges (single level)

Power table, Reglamento Anexo I §3.1. The row grouping was resolved from PDF word coordinates (high):

| Band | Max power |
|---|---|
| 2200m (137 kHz) | 1 W EIRP |
| 630m (475 kHz) | 1 W EIRP; up to 5 W EIRP in zones more than 800 km from African borders |
| 160m–10m (1.8 to 28 MHz) | 1000 W PEP |
| 6m, 4m, 2m (50, 70, 144–146 MHz) | 600 W PEP |
| 70cm (430–440 MHz) | 300 W PEP |
| 23cm, 13cm (1240–1300, 2300–2450 MHz) | 1000 W EIRP |
| 6cm and up (5.65 GHz to 250 GHz) | 1000 W EIRP |

Additional rules:

- §3.2: in bands where the amateur service is **secondary**, the maximum is **50%** of the table value. That covers, for example, 30m, 60m, 6m, 4m and 70cm where secondary.
- §3.3: EME and meteor scatter in the IARU sub-bands, outside urban areas, may use up to 1000 W PEP.
- Disposición adicional segunda (original text): 2300–2450 MHz (except 2316–2332), 5650–5850 MHz (except 5700–5720 and 5760–5762) and 24.05–24.25 GHz need a special authorisation. Orden IET/614/2015 amended this list; I did not read the amended wording.
- 60m (5351.5–5366.5 kHz) is in the CNAF as a secondary allocation (ARRL 2017 report). The 15 W EIRP limit is the RR 5.133B value (medium).
- 4m: the CNAF note UN-132 was extended by Orden IET/614/2015. I did not verify the current edges (historically 70.150–70.200 MHz at 10 W).
- No mode restrictions are tied to licence level. Emissions follow the IARU R1 plan "como norma general" (§3.1).
- Club stations may be used by novices for demonstrations at ≤40% of the band maximum, capped at 100 W EIRP (art. 30.6). This is not a licence level.

### 6. Callsign inference

- **Structure:** prefix EA, EB or EC ("para las autorizaciones individuales o estaciones colectivas"), a district digit 1–9, and a suffix of up to 3 letters (art. 27) (high).
- ED is for unattended stations. ED/EE/EF/EG/EH/AM/AN/AO are temporary prefixes.
- **No inference:** EA, EB and EC carry identical privileges. EB and EC historically indicated legacy classes B and C, but those classes have had full privileges since 2006.

### 7. Sources

| URL | Supported | Confidence |
|---|---|---|
| https://boe.es/boe/dias/2013/07/12/pdfs/BOE-A-2013-7624.pdf | Single authorisation, power table, callsign structure, secondary 50% rule | high |
| https://www.boe.es/buscar/act.php?id=BOE-A-2013-7624 | Consolidation status (one amendment, IET/614/2015) | high |
| https://boe.es/boe/dias/2006/06/09/pdfs/A22051-22068.pdf | Orden ITC/1791/2006: B and C holders get all bands | high |
| https://digital.gob.es/telecomunicaciones-infraestructuras-digitales/areas-interes/espectro-radioelectrico/radioaficionados-cb27/legislacion | Ministry legislation list (IET/1311/2013 current) | high |
| https://arrl.org/news/radio-amateurs-in-spain-argentina-gain-new-and-extended-bands | 60m adopted in the CNAF | medium |
| https://www.arrl.org/news/spain-extends-amateur-privileges-on-70-mhz | 2010 temporary 4m (historical) | medium |
| https://boe.es/boe/dias/1992/01/27/pdfs/A02513-02514.pdf (search snippet only) | Old A/B/C equivalences | medium |

**Could not verify:**

- The current CNAF UN-notes for 60m (power) and 4m (edges and power).
- The Orden IET/614/2015 rewording of the special-authorisation band list.

```json
{"entities":["EA","EA6","EA8","EA9"],"regulator":"SETID (Ministerio para la Transformación Digital y de la Función Pública)","termLocal":"autorización de radioaficionado","termEnglish":"License Class","levels":[
{"code":"EA","name":"Amateur authorisation (full)","nameLocal":"Autorización de radioaficionado","order":1,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":1000,"powerNote":"PEP output on HF; 50% of the table value where the amateur service is secondary (Anexo I 3.2)","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all",1,"EIRP"]]},
{"band":"630m","ranges":[[472,479,"all",1,"EIRP"]]},
{"band":"160m","ranges":[[1810,2000,"all",1000]]},
{"band":"80m","ranges":[[3500,3800,"all",1000]]},
{"band":"60m","ranges":[[5351.5,5366.5,"all",15,"EIRP"]]},
{"band":"40m","ranges":[[7000,7200,"all",1000]]},
{"band":"30m","ranges":[[10100,10150,"all",500,"secondary: 50% of 1000 W"]]},
{"band":"20m","ranges":[[14000,14350,"all",1000]]},
{"band":"17m","ranges":[[18068,18168,"all",1000]]},
{"band":"15m","ranges":[[21000,21450,"all",1000]]},
{"band":"12m","ranges":[[24890,24990,"all",1000]]},
{"band":"10m","ranges":[[28000,29700,"all",1000]]},
{"band":"6m","ranges":[[50000,52000,"all",600,"PEP; 50% if secondary"]]},
{"band":"4m","ranges":[[70150,70200,"all",600,"edges per CNAF UN-132, unverified"]]},
{"band":"2m","ranges":[[144000,146000,"all",600]]},
{"band":"70cm","ranges":[[430000,440000,"all",300,"PEP; 50% if secondary"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all",1000,"EIRP; 50% if secondary"]]}],"notes":"Single level since 2006. 160m 1850-2000 kHz is secondary (50% rule). 60m edges and power come from the CNAF. Special authorisation needed for parts of 13cm, 6cm and 24 GHz."},
{"code":"B","name":"Class B (legacy)","nameLocal":"Licencia de clase B","order":1,"cept":"HAREC","issued":false,"legacy":true,"maxPowerW":1000,"powerNote":"Same as the current authorisation","bands":[],"notes":"All bands since Orden ITC/1791/2006 DF 2a. Treat as the full level."},
{"code":"C","name":"Class C (legacy novice)","nameLocal":"Licencia de clase C","order":1,"cept":"HAREC","issued":false,"legacy":true,"maxPowerW":1000,"powerNote":"Same as the current authorisation","bands":[],"notes":"All bands since 2006. Treat as the full level."}],
"callsignInference":"None. EA/EB/EC prefixes are interchangeable (art. 27); EB/EC once suggested legacy classes B/C, which have had full privileges since 2006.","asOf":"2026-10","confidence":"high"}
```

---

## Portugal (CT, CU, CT3)

### 1. Regulator and rules

- **Regulator:** ANACOM (Autoridade Nacional de Comunicações).
- **Law:** Decreto-Lei n.º 53/2009, de 2 de março (DR 1.ª série n.º 42), in force since 1 June 2009. It was **amended by Lei n.º 22/2026, de 27 de maio**, in force from **25 August 2026** (90 days after publication). ANACOM then has 120 days to publish the implementing rules, which runs to about late December 2026.
- **Band and power table:** QNAF Anexo 6, "Utilização de frequências pelos serviços de amador e de amador por satélite". The current ANACOM file is SAAS_setembro_2013.pdf (contentId 1188800), still linked from ANACOM's amateur page in August 2025 (high, fetched via the Internet Archive because anacom.pt answers 403 to automated clients).
- **Procedures:** ANACOM "Procedimentos" of 27/05/2009 (decisaoamador27052009.pdf), with call signs in Parte IX and Anexo 3 (high).
- **Pending procedures:** a new procedures draft (Procedimentos_SA_SAS.pdf) is marked "NOTA: ESTES PROCEDIMENTOS NÃO ESTÃO EM VIGOR". I could not read it.

### 2. Term

- **Local term:** "categoria de amador" (Categoria 1, 2, 3; legacy A, B, C), recorded ("averbada") on the CAN, the Certificado de Amador Nacional.
- **English:** "Category".
- **Recommended UI word:** **License Class** (render the values as "Category 1/2/3").

### 3. Current levels (lowest to highest)

DL 53/2009 art. 5 defines six categories: 1, 2, 3 (current, by exam) and A, B, C (legacy, retained).

| Order | Local | English | Code | CEPT | Issued? |
|---|---|---|---|---|---|
| 1 | Categoria 3 | Category 3 (entry, "Básico") | 3 | none | Yes |
| 2 | Categoria 2 | Category 2 (intermediate) | 2 | **Novice** (ECC/REC/(05)06 Annex 2 lists Portugal "2"; QNAF note d) | Yes |
| 3 | Categoria 1 | Category 1 (full) | 1 | HAREC (T/R 61-01 "1, A and B") | Yes |

**Category 3 before the reform (DL 53/2009 art. 8.2, high):**

- On their own station they could **only receive**.
- They could transmit only on a higher-category amateur's station, under that amateur's supervision and in that amateur's bands.
- They could also transmit at a common-use (club) station, supervised by a category 1/A/B amateur, in the supervisor's *primary* bands.
- The CAN lapsed if the holder stayed in category 3 for five years (art. 6.7 b).

**Category 3 after Lei 22/2026 (from 2026-08-25; medium, secondary sources only):**

- The five-year cap and the minimum waiting times between categories are removed.
- The minimum exam age is removed. Under-16 category 3 holders must be supervised.
- Two independent secondary sources (ct2hmr.com and radioescola.pt) say category 3 may now use its own station on transitional bands "até revisão do QNAF": 10 W on 80, 40 and 20 m segments, 100 W on 10 m, 50 W on 6/2/70 cm.
- I could not read the law's text (diariodarepublica.pt is JavaScript-only, and anacom.pt returns 403).

### 4. Legacy levels (still held)

- **A:** same privileges as category 1. The QNAF uses a single column "1 e A".
- **B:** a separate QNAF column, roughly half power of category 1: 750 W on HF, 150 W on V/UHF, no 160m 1810–1830 kHz and no 4m.
- **C:** old entry level: 10m at 100 W; 6m 51–52 MHz, 2m 144–145.806 MHz and 70cm 430–435/438–440 MHz at 50 W. No other HF.

Exams open to legacy holders: C holders may sit the category 2 exam; A and B holders may sit the category 1 exam (art. 5.3 and 5.4).

### 5. Band privileges (QNAF Anexo 6, Sept 2013 edition; W PEP output unless noted) (high)

| Band | Range | 1 & A | B | 2 | C | 3 (transitional, post-2026-08-25, medium) |
|---|---|---|---|---|---|---|
| 2200m | 135.7–137.8 kHz | 1 EIRP | 1 EIRP | – | – | – |
| 630m | 472–479 kHz | 1 EIRP | 1 EIRP | – | – | – |
| 160m | 1810–1830 kHz | 200 | – | – | – | – |
| 160m | 1830–1850 kHz | 1500 | 750 | – | – | – |
| 80m | 3500–3700 kHz | 1500 | 750 | – | – | – |
| 80m | 3700–3800 kHz | 1500 | 750 | 200 | – | 10 |
| 40m | 7000–7100 kHz | 1500 | 750 | – | – | – |
| 40m | 7100–7200 kHz | 1500 | 750 | 200 | – | 10 |
| 30m | 10100–10150 kHz | 750 | 200 | – | – | – |
| 20m | 14000–14125 kHz | 1500 | 750 | – | – | – |
| 20m | 14125–14250 kHz | 1500 | 750 | 200 | – | – |
| 20m | 14250–14350 kHz | 1500 | 750 | 200 | – | 10 |
| 17m | 18068–18168 kHz | 1500 | 750 | – | – | – |
| 15m | 21000–21151 kHz | 1500 | 750 | – | – | – |
| 15m | 21151–21450 kHz | 1500 | 750 | 200 | – | – |
| 12m | 24890–24990 kHz | 1500 | 750 | – | – | – |
| 10m | 28–29.7 MHz | 1500 | 750 | 200 | 100 | 100 |
| 6m | 50–50.5 MHz | 300 | 150 | 150 | – | – |
| 6m | 50.5–51 MHz | 25 ERP | 25 ERP | – | – | – |
| 6m | 51–52 MHz | 300 | 150 | 150 | 50 | 50 |
| 4m | 70.1570–70.2125, 70.2375–70.2875 MHz | 100 ERP | – | – | – | – |
| 2m | 144–145.806 MHz | 300 | 150 | 150 | 50 | 50 |
| 2m | 145.806–146 MHz (satellite) | 300 | 150 | 150 | – | – |
| 70cm | 430–435 MHz | 300 | 150 | 150 | 50 | 50 |
| 70cm | 435–438 MHz (satellite) | 300 | 150 | – | – | – |
| 70cm | 438–440 MHz | 300 | 150 | 150 | 50 | 50 |
| 23cm | 1240–1270 MHz | 50 EIRP | 50 EIRP | – | – | – |
| 23cm | 1270–1300 MHz | 300 EIRP | 300 EIRP | 100 EIRP | – | – |
| 13cm, 6cm, 10.37–10.45 GHz | – | case-by-case authorisation | same | – | – | – |
| 3cm | 10–10.37, 10.45–10.5 GHz | 300 EIRP | 300 EIRP | – | – | – |
| 24 GHz | 24–24.05 GHz | 50 | 10 | 10 | – | – |
| 24 GHz | 24.05–24.25 GHz | 50 | 10 | – | – | – |
| 47, 77.5–78, 134–136, 248–250 GHz | – | 50 | 10 | 10 | – | – |
| Other mm-wave | 75.5–77.5, 78–81, 122.25–123, 136–141, 241–248 GHz | 50 | – | – | – | – |

Notes:

- Note (j): with antennas pointed at space (EME) there is no power cap, but the listed value may not be exceeded toward the horizon.
- Modes follow IARU (note h). No mode restriction is tied to the category.
- 60m does not appear in the 2013 QNAF Anexo 6; I did not find a Portuguese 60m authorisation.
- 160m 1850–2000 kHz has a separate ANACOM page ("Utilização da faixa 1850-2000 kHz"), so presumably special authorisation applies. Not read.

### 6. Callsign inference (high, ANACOM Procedimentos 2009 Anexo 3)

Current categories:

| | Mainland (POR) | Azores (AZR) | Madeira (MDR) |
|---|---|---|---|
| Category 1 | CT7 | CT8 | CT9 |
| Category 2 | CS7 | CS8 | CS9 |
| Category 3 | CR7 | CR8 | CR9 |

Each takes a 3-letter sequential suffix.

- **Upgrades:** "A alteração de categoria de um amador impõe a alteração do prefixo … mantendo-se o sufixo" (Parte IX §10). An upgrade from CR7ABC goes to CS7ABC, then CT7ABC.

Legacy categories:

| | POR | AZR | MDR |
|---|---|---|---|
| A | CT1, CT4 | CU1–CU9 | CT3 |
| B | CT1, CT2, CT4 | CU1–CU9 | CT3 |
| C | CT5 | CU0 | CT3 |

Other prefixes (not categories):

- Clubs (UC): CQ0, CS5 (POR); CQ1, CS4 (AZR); CQ2, CS3 (MDR).
- Civil protection: CR0.
- Occasional/annual: CQ7, CR5, CR6, CS2 (POR); CQ8, CR1, CR2 (AZR); CQ3, CQ9, CR3 (MDR).
- Old association stations: CS0, CS1, CS6, CT6.

Inference rules:

- CT7, CS7 and CR7 (and the 8/9 variants) followed by a 3-letter suffix map to 1, 2 and 3 **reliably**.
- Visitors prepend CT7/, CS7/ or CR7/ to their home call (CEPT, CEPT-novice or reciprocity). A callsign with "/" is not a Portuguese category.
- CT5 maps to C.
- CT2 maps to B.
- CT1/CT4/CU1–9 means "A or B" (ambiguous).
- CT3 means "A, B or C" (ambiguous).
- Caution: Lei 22/2026 may change the procedures (draft not in force).

### 7. Sources

| URL | Supported | Confidence |
|---|---|---|
| https://portal.arrlx.pt/wp-content/uploads/2021/01/DecretoLei-53-2009.pdf | DL 53/2009 original: six categories, category 3 receive-only, art. 15 (QNAF sets power) | high |
| https://web.archive.org/web/20260219044942/https://www.anacom.pt/render.jsp?contentId=956876 | ANACOM consolidated DL text as of Feb 2026 (pre-reform) | high |
| https://web.archive.org/web/2025id_/https://anacom.pt/streaming/SAAS_setembro_2013.pdf?contentId=1188800&field=ATTACHED_FILE | Current QNAF Anexo 6 table (categories 1 & A / B / 2 / C) | high |
| https://web.archive.org/web/20250804060637/https://anacom.pt/render.jsp?contentId=310786 | ANACOM page linking that QNAF file (updated 16.02.2024) | high |
| https://web.archive.org/web/2025id_/https://anacom.pt/streaming/decisaoamador27052009.pdf?contentId=955142&field=ATTACHED_FILE | Callsign prefixes per category; prefix changes on upgrade | high |
| https://docdb.cept.org/download/4372 ; https://docdb.cept.org/download/2775 | Category 2 = CEPT Novice; 1/A/B = CEPT licence | high |
| https://diariodarepublica.pt/dr/detalhe/lei/22-2026-1126675654 (search snippets only) | Lei 22/2026 exists, in force 25/8/2026, keeps categories 1/2/3 and A/B/C | medium |
| https://ct2hmr.com/radioamadorismo-portugues.html | Post-reform category 3 transitional table | medium |
| https://www.radioescola.pt/ser-radioamador | Post-reform summary (category 3 at 10 W HF / 100 W 10m / 50 W VHF/UHF; age and waiting-time removal) | medium |
| https://lisbohemian.com/pt/lei-radioamadorismo-portugal-taxa-idade-minima/ | Reform summary (fee and age removal) | medium |

**Could not verify:**

- The text of Lei 22/2026, including whether category 3 may transmit on its own station and the exact transitional bands.
- Whether ANACOM had already published new procedures or a revised QNAF by 2026-10-14.
- Portuguese 60m and 1850–2000 kHz conditions.

```json
{"entities":["CT","CU","CT3"],"regulator":"ANACOM","termLocal":"categoria de amador","termEnglish":"License Class","levels":[
{"code":"3","name":"Category 3","nameLocal":"Categoria 3","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":10,"powerNote":"PEP; 100 W on 10m, 50 W on 6m/2m/70cm. Transitional per Lei 22/2026 (from 2026-08-25), from secondary sources","bands":[
{"band":"80m","ranges":[[3700,3800,"all",10]]},
{"band":"40m","ranges":[[7100,7200,"all",10]]},
{"band":"20m","ranges":[[14250,14350,"all",10]]},
{"band":"10m","ranges":[[28000,29700,"all",100]]},
{"band":"6m","ranges":[[51000,52000,"all",50]]},
{"band":"2m","ranges":[[144000,145806,"all",50]]},
{"band":"70cm","ranges":[[430000,435000,"all",50],[438000,440000,"all",50]]}],"notes":"Before 2026-08-25 (DL 53/2009 art. 8.2): receive-only on its own station; may transmit only under supervision at a higher-category or club station. Post-reform bands are medium confidence."},
{"code":"C","name":"Category C (legacy)","nameLocal":"Categoria C","order":1,"cept":"none","issued":false,"legacy":true,"maxPowerW":100,"powerNote":"PEP; 100 W on 10m, 50 W on VHF/UHF","bands":[
{"band":"10m","ranges":[[28000,29700,"all",100]]},
{"band":"6m","ranges":[[51000,52000,"all",50]]},
{"band":"2m","ranges":[[144000,145806,"all",50]]},
{"band":"70cm","ranges":[[430000,435000,"all",50],[438000,440000,"all",50]]}],"notes":"Pre-2009 entry level, CT5/CU0 (CT3 in Madeira). May sit the category 2 exam."},
{"code":"2","name":"Category 2","nameLocal":"Categoria 2","order":2,"cept":"Novice","issued":true,"legacy":false,"maxPowerW":200,"powerNote":"PEP output on HF; 150 W on 6m/2m/70cm","bands":[
{"band":"80m","ranges":[[3700,3800,"all",200]]},
{"band":"40m","ranges":[[7100,7200,"all",200]]},
{"band":"20m","ranges":[[14125,14350,"all",200]]},
{"band":"15m","ranges":[[21151,21450,"all",200]]},
{"band":"10m","ranges":[[28000,29700,"all",200]]},
{"band":"6m","ranges":[[50000,50500,"all",150],[51000,52000,"all",150]]},
{"band":"2m","ranges":[[144000,146000,"all",150]]},
{"band":"70cm","ranges":[[430000,435000,"all",150],[438000,440000,"all",150]]},
{"band":"23cm","ranges":[[1270000,1300000,"all",100,"EIRP"]]}],"notes":"Also 24.00-24.05, 47.0-47.2, 77.5-78, 134-136 and 248-250 GHz at 10 W."},
{"code":"B","name":"Category B (legacy)","nameLocal":"Categoria B","order":3,"cept":"HAREC","issued":false,"legacy":true,"maxPowerW":750,"powerNote":"PEP output on HF (200 W on 30m); 150 W on 6m/2m/70cm","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all",1,"EIRP"]]},
{"band":"630m","ranges":[[472,479,"all",1,"EIRP"]]},
{"band":"160m","ranges":[[1830,1850,"all",750]]},
{"band":"80m","ranges":[[3500,3800,"all",750]]},
{"band":"40m","ranges":[[7000,7200,"all",750]]},
{"band":"30m","ranges":[[10100,10150,"all",200]]},
{"band":"20m","ranges":[[14000,14350,"all",750]]},
{"band":"17m","ranges":[[18068,18168,"all",750]]},
{"band":"15m","ranges":[[21000,21450,"all",750]]},
{"band":"12m","ranges":[[24890,24990,"all",750]]},
{"band":"10m","ranges":[[28000,29700,"all",750]]},
{"band":"6m","ranges":[[50000,50500,"all",150],[50500,51000,"all",25,"ERP"],[51000,52000,"all",150]]},
{"band":"2m","ranges":[[144000,146000,"all",150]]},
{"band":"70cm","ranges":[[430000,440000,"all",150]]},
{"band":"23cm","ranges":[[1240000,1270000,"all",50,"EIRP"],[1270000,1300000,"all",300,"EIRP"]]}],"notes":"Legacy, prefixes CT1/CT2/CT4 (CU1-9, CT3). Listed under T/R 61-01. No 160m 1810-1830 kHz and no 4m. 10 W on 24/47/77.5/134/248 GHz."},
{"code":"1","name":"Category 1","nameLocal":"Categoria 1 (and legacy A)","order":4,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":1500,"powerNote":"PEP output on HF (200 W on 1810-1830 kHz, 750 W on 30m); 300 W on 6m/2m/70cm","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all",1,"EIRP"]]},
{"band":"630m","ranges":[[472,479,"all",1,"EIRP"]]},
{"band":"160m","ranges":[[1810,1830,"all",200],[1830,1850,"all",1500]]},
{"band":"80m","ranges":[[3500,3800,"all",1500]]},
{"band":"40m","ranges":[[7000,7200,"all",1500]]},
{"band":"30m","ranges":[[10100,10150,"all",750]]},
{"band":"20m","ranges":[[14000,14350,"all",1500]]},
{"band":"17m","ranges":[[18068,18168,"all",1500]]},
{"band":"15m","ranges":[[21000,21450,"all",1500]]},
{"band":"12m","ranges":[[24890,24990,"all",1500]]},
{"band":"10m","ranges":[[28000,29700,"all",1500]]},
{"band":"6m","ranges":[[50000,50500,"all",300],[50500,51000,"all",25,"ERP"],[51000,52000,"all",300]]},
{"band":"4m","ranges":[[70157,70212.5,"all",100,"ERP"],[70237.5,70287.5,"all",100,"ERP"]]},
{"band":"2m","ranges":[[144000,146000,"all",300]]},
{"band":"70cm","ranges":[[430000,440000,"all",300]]},
{"band":"23cm","ranges":[[1240000,1270000,"all",50,"EIRP"],[1270000,1300000,"all",300,"EIRP"]]}],"notes":"Legacy category A has identical privileges (QNAF column '1 e A'). 13cm and 6cm by case-by-case authorisation. 3cm 300 W EIRP; mm-wave 50 W. No 60m in QNAF 2013."}],
"callsignInference":"Reliable for current categories: CT7/CT8/CT9 = category 1, CS7/CS8/CS9 = category 2, CR7/CR8/CR9 = category 3, each with a 3-letter suffix (POR/AZR/MDR). The prefix changes and the suffix is kept on upgrade. Legacy: CT5 or CU0 = C; CT2 = B; CT1/CT4/CU1-9 = A or B (ambiguous); CT3 = A, B or C (ambiguous). Not categories: CQ, CS5/CS4/CS3 clubs; CR0 civil protection; CR5/CR6/CS2/CQ7 occasional. A '/' callsign (CT7/xx) is a visitor.","asOf":"2026-10","confidence":"medium"}
```

---

## Greece (SV)

### 1. Regulator and rules

- **Regulator:** Ministry of Digital Governance, General Secretariat of Telecommunications and Posts (communications control division). RAAG calls it "Ministry of Digital Policy, Dpt. of Communication Control". The 2011 regulation was issued by the then Ministry of Infrastructure, Transport and Networks (ΥΥΜΔ).
- **Licensing:** exams and licences are run by the regional Transport and Communications Directorates (ΔΜΕ/ΑΠΥ of each Περιφέρεια). EETT is not the licensing body.
- **Rules:** Υπουργική Απόφαση 38200/1136/2011, "Κανονισμός λειτουργίας ερασιτεχνικών σταθμών ασυρμάτου", ΦΕΚ Β' 1969/2-9-2011.
  - Amended by ΥΑ 10800/310/4-3-2013, ΦΕΚ Β' 648/21-3-2013. I could not read that text.
  - Bands are set by the Εθνικός Κανονισμός Κατανομής Ζωνών Συχνοτήτων (ΕΚΚΖΣ, the national frequency allocation table).
  - The original (unamended) 2011 text was read from e-nomothesia.gr (high for 2011). The codified version is paywalled.

### 2. Term

- **Local term:** "κατηγορία άδειας" / "κατηγορία πτυχίου": «κατηγορία 1» and «κατηγορία εισαγωγικού επιπέδου».
- **English:** "Licence category".
- **Recommended UI word:** **License Class**.

### 3. Current levels (lowest to highest)

| Order | Local | English | Code | CEPT | Issued? |
|---|---|---|---|---|---|
| 1 | Κατηγορία εισαγωγικού επιπέδου | Entry level | E (SY) | Entry (ECC Report 89, stated in art. 6) | Yes |
| 2 | Κατηγορία 1 | Category 1 | 1 (SV) | HAREC / CEPT T/R 61-01 | Yes |

Minimum exam age is 12. Entry-level holders upgrade by passing the category 1 exam (art. 2.10).

### 4. Legacy levels

- Under ΥΑ 68000/763/2002 (ΦΕΚ Β' 1579) there were categories 1 and 2. Category 2 used the **SW** prefix.
- Art. 27.2 of the 2011 rule equates both to «κατηγορία 1» (CEPT): "Στα χαρακτηριστικά κλήσεως, το πρόθεμα «SW» αντικαθίσταται με το πρόθεμα «SV»". The replacement happens at renewal.
- **Map legacy categories 1 and 2 (SW) to category 1.**
- Club callsigns moved from SV to SZ by 31-12-2013.

### 5. Band privileges

**2011 regulation, art. 21.1, original text (high):** max PEP transmitter output.

| Band | Range | Category 1 | Entry level |
|---|---|---|---|
| 2200m | 135.7–137.8 kHz | 1 W EIRP | no TX |
| 160m | 1810–1850 kHz | 400 W | no TX |
| 80m | 3500–3800 kHz | 400 W | no TX |
| 40m | 7000–7100 kHz | 400 W | no TX |
| 40m | 7100–7200 kHz | 400 W | **10 W** |
| 30m | 10100–10150 kHz | 400 W | no TX |
| 20m | 14000–14250 kHz | 400 W | no TX |
| 20m | 14250–14350 kHz | 400 W | **10 W** |
| 17m | 18068–18168 kHz | 400 W | no TX |
| 15m | 21000–21450 kHz | 400 W | **10 W** |
| 12m | 24890–24990 kHz | 400 W | no TX |
| 10m | 28000–29700 kHz | 400 W | **10 W** |
| 6m | 50–52 MHz (temporary, experimental, category 1 only) | 100 W | no TX |
| 4m | 70.20–70.25 MHz (same) | 100 W | no TX |
| 2m | 144–146 MHz | 100 W | **10 W** |
| 70cm | 430–440 MHz | 50 W | **10 W** |
| ≥23cm | above 1240 MHz | 50 W | no TX |

Entry level also has a maximum antenna gain of **3 dBi** (art. 21.3). Receiving is allowed on all bands (art. 20.23).

**Current figures per RAAG (medium):** these presumably reflect the 2013 amendment and later ΕΚΚΖΣ changes, but I did not verify them in a primary source.

- HF: **500 W PEP**.
- 60m (5351.5–5366.5 kHz): 15 W EIRP.
- VHF: 100 W PEP.
- UHF to 440 MHz: 100 W PEP.
- 1240 MHz and up: 50 W PEP.
- 2200m and 630m (472–479 kHz): 1 W EIRP.
- 160m 1850–2000 kHz is secondary from 1 Jan 2022.
- 4m is listed as 70.000–70.250 MHz.

RAAG says only "SY call holders (entry level) use some parts of some bands". I found no evidence that entry-level privileges changed from the 2011 table. **Recommendation:** encode entry level per the 2011 table, which is high confidence. Encode category 1 with 500 W HF / 100 W VHF/UHF (medium), and flag the 400 W figure from the 2011 text.

### 6. Callsign inference (high, 2011 art. 12 and Annex)

| Prefix | Meaning |
|---|---|
| SV1–SV9 + 2–4 letters | Category 1 (CEPT) |
| SY1–SY9 + 3–4 letters | Entry level |
| SV0 + 2–3 letters | Foreign-licence (reciprocity) holders |
| SZ1–SZ9 | Clubs and institutions |
| SW | Legacy category 2, converted to SV at renewal; treat as category 1 |
| SX, J4 | Special-event prefixes |
| /A suffix | Alternative location |

- The digit is the region, not the level.
- SV5 (Dodecanese), SV9 (Crete) and SV/A (Mount Athos) are separate DXCC entities under the same Greek regime.
- **Inference:** the SV vs SY prefix gives the level **reliably**. SW is a stale legacy prefix that means category 1.

### 7. Sources

| URL | Supported | Confidence |
|---|---|---|
| https://www.e-nomothesia.gr/kat-epikoinonies-telepikoinonies-telephonia/ya-38200-1136-2011.html | 2011 original text: art. 6 categories (CEPT / ECC Report 89), art. 12 callsigns, art. 21 power table, art. 27 transitional | high |
| https://raag.org/sv-operating/ ; https://raag.org/licensing/ | Current band list and power (500 W HF etc.); SV vs SY | medium |
| https://www.qsl.net/sz1a/download/art/SY%20SZ1A%20ver.3.23.pdf | 2023 entry-level guide (restricted bands, power, 3 dBi antenna) | medium |
| https://sz2sz.wordpress.com/νομοι/ ; https://www.patt.gov.gr (search results) | Amendment ΥΑ 10800/310/2013, ΦΕΚ Β' 648/2013 | medium |
| https://docdb.cept.org/download/2775 | Greece "1 and 2" (SV, SW) under T/R 61-01 | high |

**Could not verify:**

- The content of ΦΕΚ Β' 648/2013, and whether it raised category 1 to 500 W, changed entry-level privileges, or added 60m/630m.
- Any amendment after 2013. mydocman.gr lists a last-modified date of 18/02/2024 for the regulation entry, with no detail.

```json
{"entities":["SV","SV5","SV9","SV/A"],"regulator":"Ministry of Digital Governance (licences issued by regional Transport & Communications Directorates)","termLocal":"κατηγορία άδειας","termEnglish":"License Class","levels":[
{"code":"E","name":"Entry level","nameLocal":"Κατηγορία εισαγωγικού επιπέδου","order":1,"cept":"Entry","issued":true,"legacy":false,"maxPowerW":10,"powerNote":"PEP output; antenna gain max 3 dBi","bands":[
{"band":"40m","ranges":[[7100,7200,"all"]]},
{"band":"20m","ranges":[[14250,14350,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]}],"notes":"Per ΥΑ 38200/1136/2011 art. 21 (original text). The 2013 amendment was not verified. SY callsigns."},
{"code":"1","name":"Category 1","nameLocal":"Κατηγορία 1","order":2,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":500,"powerNote":"PEP output on HF per RAAG (current, medium); the 2011 text says 400 W. 100 W on VHF/UHF to 440 MHz, 50 W from 1240 MHz","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all",1,"EIRP"]]},
{"band":"630m","ranges":[[472,479,"all",1,"EIRP"]]},
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
{"band":"4m","ranges":[[70000,70250,"all",100]]},
{"band":"2m","ranges":[[144000,146000,"all",100]]},
{"band":"70cm","ranges":[[430000,440000,"all",100,"2011 text: 50 W; RAAG: 100 W"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all",50]]}],"notes":"160m 1850-2000 kHz secondary since 2022 (RAAG). 6m/4m originally temporary experimental (2011)."},
{"code":"2-2002","name":"Category 2 of 2002 (legacy, SW)","nameLocal":"Κατηγορία 2 (ΥΑ 68000/763/2002)","order":2,"cept":"HAREC","issued":false,"legacy":true,"maxPowerW":500,"powerNote":"Same as category 1","bands":[],"notes":"Equated to category 1 by the 2011 art. 27.2; SW prefix replaced by SV at renewal."}],
"callsignInference":"Reliable: SV1-9 = category 1; SY1-9 = entry level. SW (legacy) = category 1. SV0 = foreign reciprocity licence. SZ = club. SX/J4 = special. The digit is regional (SV5/SV9/SV/A are separate DXCC entities, same regime).","asOf":"2026-10","confidence":"medium"}
```

---

## Romania (YO)

### 1. Regulator and rules

- **Regulator:** ANCOM (Autoritatea Națională pentru Administrare și Reglementare în Comunicații).
- **Rules:** Decizia Președintelui ANCOM nr. 245/2017 privind reglementarea serviciului de amator. It was amended by Decizia nr. 139/2022.
  - ANCOM publishes an unofficial consolidated text "în vigoare la data de 31 martie 2022", in Romanian and English (high: both PDFs read).
  - The annex "Condiții de utilizare a benzilor de frecvențe radio în serviciul de amator" holds the power table.
  - ANCOM's amateur page lists no later amendment, and its callbook was updated 29.09.2026.

### 2. Term

- **Local term:** "clasa": "certificat de radioamator clasa I/II/III/IV" (exam) and "autorizație de radioamator clasa …" (licence). "Clasa de autorizare" is used in the annex.
- **English:** "Class".
- **Recommended UI word:** **License Class**.

### 3. Current levels (lowest to highest) (high)

| Order | Local | English | Code | CEPT (art. 10/19) | Issued? |
|---|---|---|---|---|---|
| 1 | Clasa a IV-a | Class IV | IV | Entry (ECC Report 89) | Yes |
| 2 | Clasa a III-a | Class III | III | Novice (ECC/REC/(05)06 Annex 2 lists YO "III") | Yes |
| 3 | Clasa a II-a | Class II | II | HAREC | Yes |
| 4 | Clasa I | Class I | I | HAREC | Yes |

Progression and access:

- Class II requires class III held for at least 12 months, plus the class II exam.
- Class I requires class II held for at least 12 months, plus the class I exam.
- Under-14s may sit only the class IV exam.
- Foreign HAREC holders are treated as class II.
- Reciprocity holders without an equivalence are treated as class III.

ANCOM callbook distribution of individual licences, 29.09.2026 (high, computed from Callbook.xlsx):

| Class | Holders |
|---|---|
| I | 738 |
| II | 1023 |
| III | 2077 |
| IV | 1002 |

### 4. Legacy levels

"Clasa a III-a restrânsă" (restricted class III) under the former IGCTI Decision 660/2005 is equated to **class IV** (art. 36). Those documents stay valid until they expire.

### 5. Band privileges (annex §II.1)

Max power is "putere la vârf de modulație" (PEP), in W. **Every class has every band**; only the power differs. There are no class-tied mode restrictions (high).

| Band | Range | I | II | III | IV |
|---|---|---|---|---|---|
| 2200m | 135.7–137.8 kHz | 1 | 1 | 1 | 1 |
| 630m | 472–479 kHz | 1 | 1 | 1 | 1 |
| 160m | 1810–2000 kHz (1830–1850 NG primary; others shared) | 400 / 1000* | 200 | 100 | 50 |
| 80m | 3500–3800 kHz | 400 / 1000* | 200 | 100 | 50 |
| 60m | 5351.5–5366.5 kHz (individual authorisation required) | 400 | 200 | 100 | 50 |
| 40m | 7000–7200 kHz | 400 / 1000* | 200 | 100 | 50 |
| 30m | 10100–10150 kHz | 400 / 1000* | 200 | 100 | 50 |
| 20m–10m | 14000–14350, 18068–18168, 21000–21450, 24890–24990, 28000–29700 kHz | 400 / 1000* | 200 | 100 | 50 |
| 6m | 50–52 MHz | 400 | 200 | 100 | 50 |
| 4m | 70.0–70.3 MHz (individual authorisation, MApN coordination, 12.5 kHz bandwidth) | 20 | 20 | 20 | 20 |
| 2m | 144–146 MHz | 400 / 1000* (EME/MS 144.0–144.4) | 200 | 100 | 50 |
| 70cm | 431.2–440 MHz | 200 / 1000* (EME/MS 432.0–432.3) | 100 | 50 | 30 |
| 23cm and up | 1240–1300 MHz … 248–250 GHz | 200 | 100 | 50 | 30 |

Notes:

- \* 1000 W PEP is for class I only, with an individual "putere mărită" authorisation. Conditions: SR EN 301 783 compliance, a justification, and an event or contest. For contests, notification is enough.
- On 2200m and 630m the decision uses "putere aparent radiată (PAR)", i.e. ERP, not PEP. RR 5.67A/5.80A use EIRP.
- 70cm starts at 431.2 MHz; 430–431.2 MHz is not amateur in Romania.
- Club stations use the class of the club manager. Operators use their own class's power when signing their own call (annex §IV.10).

### 6. Callsign inference

- **Structure:** YO + area digit (2–9, by county) + 2- or 3-letter suffix (art. 4). Clubs use YO + digit + K + 2 letters. YP, YQ, YR and YO0/YO1 are special calls.
- **2-letter suffix:** "possession of a first or second class amateur radio license by the applicant" is a condition for 2-letter calls (art. 5.3 b). In the 2026 callbook, 344 of the 382 individual 2-letter calls are class I or II; 38 are legacy class III/IV.
- **3-letter suffix:** any class (546 I, 871 II, 2040 III, 1001 IV).
- **Inference:** a 2-letter suffix means "likely class I/II" (~90%). Otherwise the callsign gives **no inference**.
- **Better option:** ANCOM publishes **Callbook.xlsx**, which lists the callsign and class (Clasa) for every holder (opt-in personal data, but the class is always listed). An app could look the class up rather than infer it.

### 7. Sources

| URL | Supported | Confidence |
|---|---|---|
| https://www.ancom.ro/wp-content/uploads/2010/07/DECIZIA_ANCOM_245_2017_PRIVIND_REGLEMENTAREA_SERVICIULUI_DE_AMATOR_CONSOLIDATA_31_martie_2022.pdf | Classes, CEPT equivalence, callsigns, power table (Romanian) | high |
| https://www.ancom.ro/uploads/links_files/DECIZIA_ANCOM_245_2017_PRIVIND_REGLEMENTAREA_SERVICIULUI_DE_AMATOR_CONSOLIDATA_en.pdf | English consolidated text (machine-garbled numbers; Romanian used for figures) | high |
| https://www.ancom.ro/radioamatori_2899 | Legislation list (245/2017 consolidated, 139/2022), callbook link and date | high |
| https://www.ancom.ro/wp-content/uploads/2010/07/Callbook.xlsx | Class per callsign; suffix-length statistics | high |
| https://docdb.cept.org/download/4372 ; /2775 | III = CEPT Novice; I and II = CEPT licence | high |

**Could not verify:** any ANCOM amendment after Decizia 139/2022. None is listed on ANCOM's page.

```json
{"entities":["YO"],"regulator":"ANCOM","termLocal":"clasa (de autorizare)","termEnglish":"License Class","levels":[
{"code":"IV","name":"Class IV","nameLocal":"Clasa a IV-a","order":1,"cept":"Entry","issued":true,"legacy":false,"maxPowerW":50,"powerNote":"PEP output on HF/6m/2m; 30 W from 70cm up; 20 W on 4m; 1 W ERP on 2200m/630m","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all",1,"ERP"]]},
{"band":"630m","ranges":[[472,479,"all",1,"ERP"]]},
{"band":"160m","ranges":[[1810,2000,"all"]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"60m","ranges":[[5351.5,5366.5,"all",50,"individual authorisation required"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"30m","ranges":[[10100,10150,"all"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,52000,"all"]]},
{"band":"4m","ranges":[[70000,70300,"all",20,"individual authorisation required"]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[431200,440000,"all",30]]},
{"band":"23cm","ranges":[[1240000,1300000,"all",30]]}],"notes":"Includes legacy restricted class III (Decision 660/2005). All bands; power-limited only."},
{"code":"III","name":"Class III","nameLocal":"Clasa a III-a","order":2,"cept":"Novice","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"PEP output on HF/6m/2m; 50 W from 70cm up; 20 W on 4m; 1 W ERP on LF/MF","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all",1,"ERP"]]},
{"band":"630m","ranges":[[472,479,"all",1,"ERP"]]},
{"band":"160m","ranges":[[1810,2000,"all"]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"60m","ranges":[[5351.5,5366.5,"all",100,"individual authorisation required"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"30m","ranges":[[10100,10150,"all"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,52000,"all"]]},
{"band":"4m","ranges":[[70000,70300,"all",20,"individual authorisation required"]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[431200,440000,"all",50]]},
{"band":"23cm","ranges":[[1240000,1300000,"all",50]]}],"notes":"Must hold class III for 12 months before sitting the class II exam."},
{"code":"II","name":"Class II","nameLocal":"Clasa a II-a","order":3,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":200,"powerNote":"PEP output on HF/6m/2m; 100 W from 70cm up; 20 W on 4m; 1 W ERP on LF/MF","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all",1,"ERP"]]},
{"band":"630m","ranges":[[472,479,"all",1,"ERP"]]},
{"band":"160m","ranges":[[1810,2000,"all"]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"60m","ranges":[[5351.5,5366.5,"all",200,"individual authorisation required"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"30m","ranges":[[10100,10150,"all"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,52000,"all"]]},
{"band":"4m","ranges":[[70000,70300,"all",20,"individual authorisation required"]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[431200,440000,"all",100]]},
{"band":"23cm","ranges":[[1240000,1300000,"all",100]]}],"notes":"Foreign HAREC holders are treated as class II."},
{"code":"I","name":"Class I","nameLocal":"Clasa I","order":4,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":400,"powerNote":"PEP output; up to 1000 W PEP on HF, 144.0-144.4 and 432.0-432.3 MHz with an individual increased-power authorisation (contests: notification). 200 W from 70cm up; 20 W on 4m","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all",1,"ERP"]]},
{"band":"630m","ranges":[[472,479,"all",1,"ERP"]]},
{"band":"160m","ranges":[[1810,2000,"all"]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"60m","ranges":[[5351.5,5366.5,"all",400,"individual authorisation required"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"30m","ranges":[[10100,10150,"all"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,52000,"all"]]},
{"band":"4m","ranges":[[70000,70300,"all",20,"individual authorisation required"]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[431200,440000,"all",200]]},
{"band":"23cm","ranges":[[1240000,1300000,"all",200]]}],"notes":"Only class I may apply for 1000 W."}],
"callsignInference":"Weak. Suffix of 2 letters requires class I or II (art. 5.3b): about 90% reliable, as some legacy III/IV holders keep 2-letter calls. 3-letter suffixes: any class. K-first 3-letter suffix = club. Prefer a lookup: ANCOM publishes Callbook.xlsx with the class of every callsign.","asOf":"2026-10","confidence":"high"}
```

---

## Serbia (YU)

### 1. Regulator and rules

- **Regulator:** RATEL (Регулаторно тело за електронске комуникације и поштанске услуге).
- **Rules:** Правилник о начину коришћења радио-станица од стране радио-аматера, „Службени гласник РС", бр. 82/2024 of 11.10.2024, **in force 19.10.2024** (high: the RATEL PDF was read).
  - It replaced the 2011 Правилник о начину коришћења аматерских радио станица (Сл. гласник 52/11).
- **Exams:** the exam programme is issued by Савез радио-аматера Србије (SRS): "Plan i program obuke i način organizacije ispita za radio-amaterske klase", 20.03.2025.

### 2. Term

- **Local term:** "класа радио-аматера" / "радиоаматерска класа" (A, B, C).
- **English:** "Class".
- **Recommended UI word:** **License Class**.

### 3. Current levels (lowest to highest) (high)

| Order | Local | English | Code | CEPT | Issued? |
|---|---|---|---|---|---|
| 1 | Класа C (osnovna) | Class C (basic) | C | Entry (SRS plan: ECC Report 89) | Yes |
| 2 | Класа B (napredna) | Class B (advanced) | B | Novice syllabus (SRS plan: ERC Report 32); not listed in ECC/REC/(05)06 Annex 2 | Yes |
| 3 | Класа A (ekspertska) | Class A | A | HAREC (T/R 61-02); CEPT licence on request | Yes |

- The Правилник calls B and C "националне класе".
- Progression: the C exam is open to anyone. The B exam requires C, and may be sat the same day. The A exam requires B, plus either 1 year in B or 150 confirmed DXCC entities (SRS plan).
- Licences run for 10 years.

### 4. Legacy levels

Under the 2024 rule art. 46, the 2011 classes map as follows. Note the crossover:

| 2011 class | 2024 class |
|---|---|
| Class 1 | A |
| **Class 2** | **C** |
| **Class 3** | **B** |

The 2011 rule (art. 41) had mapped the pre-2007 classes A, B, C, D and F to class 1, and E to class 2. Licences issued before 19.10.2024 stay valid until they expire. They may still show the old 1/2/3 class numbers, which must be translated using the table above.

### 5. Band privileges (Table 2, art. 7)

Max transmitter power PEP, in W. Column positions were verified from PDF coordinates (high).

| Band | Range | A | B | C |
|---|---|---|---|---|
| 2200m | 135.7–137.8 kHz | 1 EIRP | – | – |
| 630m | 472–479 kHz | 1 EIRP | – | – |
| 160m | 1810–2000 kHz | 1000 | – | – |
| 80m | 3500–3800 kHz | 1500 | 100 | 100 |
| 60m | 5351.5–5366.5 kHz | 15 EIRP | – | – |
| 40m | 7000–7200 kHz | 1500 | 100 | 100 |
| 30m | 10100–10150 kHz | 300 | – | – |
| 20m | 14000–14350 kHz | 1500 | 100 | – |
| 17m | 18068–18168 kHz | 1500 | – | – |
| 15m | 21000–21450 kHz | 1500 | 100 | – |
| 12m | 24890–24990 kHz | 1500 | – | – |
| 10m | 28000–29700 kHz | 1500 | 100 | – |
| 6m | 50–52 MHz | 100 (ERP 10 W urban / 100 W outside, note SRB18) | – | – |
| 4m | 69.9–70.5 MHz | 10 | – | – |
| 2m | 144–146 MHz | 1500 | 75 | 75 |
| 70cm | 430–432 MHz | 1500 | 50 | 50 |
| 70cm | 432–438 MHz | 1500 | 75 | 75 |
| 70cm | 438–440 MHz | 1500 | 50 | 50 |
| 23cm, 13cm, 6cm | 1240–1300, 2300–2450, 5650–5850 MHz | 300 | – | – |
| 3cm | 10–10.5 GHz | 150 | – | – |
| 24 GHz and up | 24–250 GHz segments | 75 | – | – |

- No class-tied mode restrictions. Emissions follow IARU recommendations; the radio unions coordinate sub-bands.
- The unions may agree lower powers (note 6).

### 6. Callsign inference

- **Structure:** YT or YU + one digit + 1–3 letters (art. 17).
- The rule has no class-based prefix or suffix, so **no inference**.
- Occasional and contest calls have free format.

### 7. Sources

| URL | Supported | Confidence |
|---|---|---|
| https://www.ratel.rs/uploads/documents/empire_plugin/Pravilnik%20o%20nacinu%20koriscenja%20radio%20stanica%20od%20strane%20radio%20amatera.pdf | 2024 rule: classes, Table 2, callsigns, transitional mapping | high |
| https://www.ratel.rs/uploads/documents/pdf_documents/documents/Regulativa/Pravilnici/Radiokomunikacije/Pravilnik%20o%20nacinu%20koriscenja%20amaterskih%20radio%20stanica.pdf | 2011 rule (classes 1/2/3; pre-2007 A–F mapping) | high |
| https://yu1srs.org.rs/wp-content/uploads/2025/03/Plan-i-program-obuke-i-nacin-organizacije-ispita-za-radio-amaterske-klase-20032025.pdf | CEPT alignment of A/B/C; exam progression | medium (society document under the rule) |
| https://docdb.cept.org/download/2775 | Serbia "1" (now A) under T/R 61-01 | high |

**Could not verify:** whether RATEL has notified CEPT of class B as a Novice equivalent. It is not in the 2023 Annex 2.

```json
{"entities":["YU"],"regulator":"RATEL","termLocal":"класа радио-аматера (A/B/C)","termEnglish":"License Class","levels":[
{"code":"C","name":"Class C (basic)","nameLocal":"Класа C","order":1,"cept":"Entry","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"PEP output on 80/40m; 75 W on 2m and 432-438 MHz; 50 W on 430-432 and 438-440 MHz","bands":[
{"band":"80m","ranges":[[3500,3800,"all",100]]},
{"band":"40m","ranges":[[7000,7200,"all",100]]},
{"band":"2m","ranges":[[144000,146000,"all",75]]},
{"band":"70cm","ranges":[[430000,432000,"all",50],[432000,438000,"all",75],[438000,440000,"all",50]]}],"notes":"Legacy 2011 class 2 maps to C (art. 46)."},
{"code":"B","name":"Class B (advanced)","nameLocal":"Класа B","order":2,"cept":"none","issued":true,"legacy":false,"maxPowerW":100,"powerNote":"PEP output on HF; 75 W on 2m and 432-438 MHz; 50 W on 430-432 and 438-440 MHz","bands":[
{"band":"80m","ranges":[[3500,3800,"all",100]]},
{"band":"40m","ranges":[[7000,7200,"all",100]]},
{"band":"20m","ranges":[[14000,14350,"all",100]]},
{"band":"15m","ranges":[[21000,21450,"all",100]]},
{"band":"10m","ranges":[[28000,29700,"all",100]]},
{"band":"2m","ranges":[[144000,146000,"all",75]]},
{"band":"70cm","ranges":[[430000,432000,"all",50],[432000,438000,"all",75],[438000,440000,"all",50]]}],"notes":"National class; syllabus per ERC Report 32 (novice) but not listed in ECC/REC/(05)06. Legacy 2011 class 3 maps to B."},
{"code":"A","name":"Class A","nameLocal":"Класа A","order":3,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":1500,"powerNote":"PEP output (1000 W on 160m, 300 W on 30m, 100 W on 6m, 10 W on 4m)","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"all",1,"EIRP"]]},
{"band":"630m","ranges":[[472,479,"all",1,"EIRP"]]},
{"band":"160m","ranges":[[1810,2000,"all",1000]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"60m","ranges":[[5351.5,5366.5,"all",15,"EIRP"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"30m","ranges":[[10100,10150,"all",300]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,52000,"all",100,"ERP 10 W urban / 100 W outside (SRB18)"]]},
{"band":"4m","ranges":[[69900,70500,"all",10]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430000,440000,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all",300]]}],"notes":"Legacy 2011 class 1 (and pre-2007 A-D, F) maps to A. 13cm/6cm 300 W; 3cm 150 W; 24 GHz+ 75 W."}],
"callsignInference":"None: YT/YU + digit + 1-3 letters for all classes (art. 17).","asOf":"2026-10","confidence":"high"}
```

---

## Bulgaria (LZ)

### 1. Regulator and rules

- **Regulator:** Комисия за регулиране на съобщенията (КРС / CRC).
- **Rules:** Правила за използване на радиочестотен спектър за радиосъоръжения от любителска радиослужба. Adopted by Решение № 135/20.04.2022, ДВ бр. 35 of 10.05.2022, and **amended ДВ бр. 64 of 05.08.2025** (high: the consolidated text with the 2025 amendments was read from iisda.government.bg).
- These rules repealed the 2018/2019 "Технически изисквания" (Решение № 559/2018, ДВ бр. 6/2019).
- **Re-issue deadline:** the 2025 amendment (new §7) requires holders to apply within 3 years to re-issue callsign documents. Otherwise the callsigns are released.

### 2. Term

- **Local term:** "радиолюбителски клас" / "разрешително за правоспособност на радиолюбител клас 1 / клас 2".
- **English:** "Class".
- **Recommended UI word:** **License Class**.

### 3. Current levels (lowest to highest) (high)

| Order | Local | English | Code | CEPT | Issued? |
|---|---|---|---|---|---|
| 1 | Клас 2 | Class 2 (national) | 2 | none ("национален клас") | Yes |
| 2 | Клас 1 | Class 1 | 1 | HAREC / CEPT licence (T/R 61-01 "Class 1") | Yes |

- Everyone starts at class 2 (Annex 2 §4).
- There is no age limit for the class 2 exam. The class 1 exam requires age 14 or over.

### 4. Legacy levels (§6 of the final provisions)

| Old document | Current class |
|---|---|
| Certificates for class **A, B, C** | Class 1 |
| Certificate class **D** | Class 2 |
| Old permit class 2 | **Class 1** |
| Old permit class 3 | **Class 2** |

### 5. Band privileges (Annex 1)

Max output power is expressed as peak power (PEP), per §1 т.6 of the definitions. Values in W.

| Band | Range | Class 1 | Class 1 modes | Class 2 |
|---|---|---|---|---|
| 2200m | 135.7–137.8 kHz | 1 EIRP | A1A | – |
| 630m | 472–479 kHz | 1 EIRP | A1A | – |
| 160m | 1810–1850 kHz | 100 (1000/1500*) | A1A, J3E (CW, SSB) | – |
| 160m | 1850–2000 kHz | 10 | A1A, J3E | – |
| 80m | 3500–3800 kHz | 350 (1000*) | all | – |
| 60m | 5250–5450 kHz (5351.5–5366.5: 15 W EIRP) | 100 | all | – |
| 40m | 7000–7200 kHz | 350 (1000/1500*) | all | – |
| 30m | 10100–10150 kHz | 350 | A1A, J2(A,B,C,D): CW and data only | – |
| 20m | 14000–14350 kHz | 350 (1000/1500*) | all | – |
| 17m | 18068–18168 kHz | 350 (1000*) | all | – |
| 15m | 21000–21450 kHz | 350 (1000/1500*) | all | – |
| 12m | 24890–24990 kHz | 350 (1000*) | all | – |
| 10m | 28–29.7 MHz | 350 (1000/1500*) | all | – |
| 6m | 50–50.9625 and 51.5125–51.5375 MHz (the latter fixed station only; no protection from wind profilers) | 100 | all | – |
| 4m | 70.0–70.5 MHz | 50 | A1(A–D), J3(C,E,F) | – |
| 2m | 144–146 MHz | 150 (1000*) | all | **5 W: A3E, F2D, F3E, J3E** |
| 70cm | 430–440 MHz | 100 (1000* on 430–433.05) | all | **5 W: A3E, F2D, F3E, J3E** |
| 23cm | 1240–1300 MHz | 50 | all | – |
| 13cm, 9cm, 6cm | 2300–2450, 3400–3500, 5650–5850 MHz | 5 | all | – |
| 3cm and up | 10 GHz–250 GHz | 1 | all | – |

\* Notes в) and г):

- 1000 W output for contests and experiments (EME, MS) on 160m–10m, 2m and 430–433.05 MHz.
- 1500 W for contests on 160, 40, 20, 15 and 10 m.
- Both apply only to **class 1 holders with at least 5 years' experience**, and to clubs. The station details must be filed with the CRC.

Other notes:

- Class 2 modes: AM phone (A3E), FM phone (F3E), FM data (F2D, e.g. AFSK/APRS) and SSB phone (J3E). No CW (A1A) and no digital other than F2D.
- Mobile (vehicle) stations: max 50 W. Handhelds: max 10 W. Repeaters: 100 W on 10m, 50 W on 2m/70cm, 10 W on 23cm.

### 6. Callsign inference (high, Annex 3)

- **Personal calls:** LZ + one digit + 2 or 3 letters.
  - The digit is a **geographic zone**: odd (1, 3, 5, 7, 9) for South Bulgaria, even (2, 4, 6, 8) for North Bulgaria.
  - Three-letter calls are issued with digits 1–4.
  - Two-letter suffixes go **only to class 1, on request** (§1.2).
- **Other formats:** clubs LZ#K?? (KAA–KZZ); repeaters and beacons LZ0 + 3 letters; temporary/contest LZ + digit + 1 letter, or LZ0 + 2 letters; ARDF transmitters MO*.
- **Inference:**
  - A 2-letter suffix means class 1 (reliable for current rules; older 2-letter calls were also class 1/A).
  - A 3-letter suffix means either class.
  - The digit says nothing about class (unlike older folklore about "LZ1 vs LZ2").
- **Registry:** CRC publishes the callsign list with the class (art. 8(3)), so a lookup is possible.

### 7. Sources

| URL | Supported | Confidence |
|---|---|---|
| https://iisda.government.bg/adm_services/service_regulatory_file/2797_218700 | Current Rules (ДВ 35/2022, amended ДВ 64/2025): classes, Annex 1 table, Annex 2 exams, Annex 3 callsigns, legacy mapping | high |
| https://crc.bg/files/techicheski_iziskvania_radiolub_2019-01-18_30.01.2019.pdf | Predecessor 2019 requirements (same structure; definitions of PEP) | high (historical) |
| https://docdb.cept.org/download/2775 | Bulgaria "Class 1" under T/R 61-01 | high |

**Could not verify:** nothing material. The iisda copy is labelled as including the 2025 amendments.

```json
{"entities":["LZ"],"regulator":"CRC (Комисия за регулиране на съобщенията)","termLocal":"радиолюбителски клас","termEnglish":"License Class","levels":[
{"code":"2","name":"Class 2","nameLocal":"Клас 2","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":5,"powerNote":"PEP output","bands":[
{"band":"2m","ranges":[[144000,146000,"phone|data"]]},
{"band":"70cm","ranges":[[430000,440000,"phone|data"]]}],"notes":"Emission classes A3E, F2D, F3E, J3E only (AM/FM/SSB phone, FM data). Legacy class D certificate and old class 3 permit map here."},
{"code":"1","name":"Class 1","nameLocal":"Клас 1","order":2,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":350,"powerNote":"PEP output on HF (100 W on 1810-1850, 10 W on 1850-2000); 1000 W (contests/experiments) or 1500 W (contests on 160/40/20/15/10m) for class 1 with 5+ years. Mobile max 50 W, handheld max 10 W","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"CW",1,"EIRP"]]},
{"band":"630m","ranges":[[472,479,"CW",1,"EIRP"]]},
{"band":"160m","ranges":[[1810,1850,"CW|phone",100],[1850,2000,"CW|phone",10]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"60m","ranges":[[5351.5,5366.5,"all",15,"EIRP"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"30m","ranges":[[10100,10150,"CW|data"]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,50962.5,"all",100],[51512.5,51537.5,"all",100,"fixed station only"]]},
{"band":"4m","ranges":[[70000,70500,"CW|phone|data",50]]},
{"band":"2m","ranges":[[144000,146000,"all",150]]},
{"band":"70cm","ranges":[[430000,440000,"all",100]]},
{"band":"23cm","ranges":[[1240000,1300000,"all",50]]}],"notes":"The 60m table row is 5250-5450 kHz at 100 W, but note d) limits 5351.5-5366.5 to 15 W EIRP. 13/9/6 cm 5 W; 10 GHz+ 1 W. Legacy A/B/C certificates and old class 2 permits map here."}],
"callsignInference":"A 2-letter suffix is class 1 only (Annex 3 §1.2). A 3-letter suffix is either class. The digit is a geographic zone (odd = south, even = north), not the class. K-first suffix = club; LZ0+3 letters = repeater/beacon. CRC publishes the class with each callsign.","asOf":"2026-10","confidence":"high"}
```

---

## Turkey (TA, Asiatic Turkey; TA1 European Turkey shares the regime)

### 1. Regulator and rules

Responsibility is split between two bodies:

- **KEGM** (Kıyı Emniyeti Genel Müdürlüğü, under the Ulaştırma ve Altyapı Bakanlığı) runs exams, certificates and callsigns under the **Amatör Telsizcilik Sınav ve Belgelendirme Yönetmeliği**, RG 03.02.2010 sayı 27482, amended RG 20.02.2011 sayı 27852 (high for the 2011 amendment text via lexpera; medium for the base text via tracizmir.org.tr).
- **BTK** (Bilgi Teknolojileri ve İletişim Kurumu) sets the technical criteria. These are in the **"Frekans Tahsisinden Muaf Telsiz Cihaz ve Sistemlerine İlişkin Teknik Ölçütler"**, Kurul kararı 23.09.2022 no. 2022/İK-SYD/245: Madde 22 and **Tablo 25** (amateur), under the Frekans Tahsisinden Muaf Telsiz Cihaz ve Sistemleri Hakkında Yönetmelik.
  - The 2022 and January 2023 BTK PDFs carry the same decision and identical amateur text (high).

### 2. Term

- **Local term:** "amatör telsizcilik belgesi sınıfı" (A, B, C sınıfı).
- **English:** "Class".
- **Recommended UI word:** **License Class**.

### 3. Current levels (lowest to highest)

| Order | Local | English | Code | CEPT | Issued? |
|---|---|---|---|---|---|
| 1 | C sınıfı | Class C | C | none known | Yes |
| 2 | B sınıfı | Class B | B | none known (not in ECC/REC/(05)06 Annex 2) | Yes |
| 3 | A sınıfı | Class A | A | HAREC / T/R 61-01 "A" | Yes |

- **Exam** (Yönetmelik art. 16; 50 questions since 2011): 75+ points gives A; 60–74 gives B. C has its own exam with a pass mark of 60.
- **Upgrade:** by re-examination.

### 4. Legacy levels

- Before 2010 the Telekomünikasyon Kurumu yönetmeliği had A and B only.
- Callsigns not brought into compliance by 1/3/2012 were cancelled ex officio (geçici madde 3, 2011). So active callsigns follow the 2010/2011 scheme.

### 5. Band privileges (BTK Tablo 25, 2022)

Power is given as "75 W, 400 W (PEP)", which means 75 W mean (carrier) output and 400 W PEP.

| Band | Range | A | B | C |
|---|---|---|---|---|
| 2200m | 135.7–137.8 kHz | 1 W EIRP | – | – |
| 630m | 472–479 kHz | 5 W EIRP | – | – |
| 160m | 1810–1850 kHz | 100 W / 400 W PEP; CW and data, J3E only on 1832–1835 kHz | – | – |
| 80m | 3500–3800 kHz | 100 / 400 PEP | – | – |
| 60m | 5351.5–5366.5 kHz | 15 W EIRP | – | – |
| 40m | 7000–7200 kHz | 100 / 400 PEP | **7000–7100 kHz, ≤5 W, home-built rig only** | – |
| 30m | 10100–10150 kHz | 75 / 100 PEP, **CW and digital only** | – | – |
| 20m–12m | 14000–14350, 18068–18168, 21000–21450, 24890–24990 kHz | 75 / 400 PEP | – | – |
| 10m | 28000–29700 kHz (no F3E/G3E FM below 29500) | 75 / 400 PEP | **≤5 W, home-built rig only** | – |
| 6m | 50–52 MHz | 100 W | 100 W | – |
| 2m | 144–146 MHz | 75 / 400 PEP (FM handhelds ≤5 W) | same | **≤5 W** |
| 70cm | 430.2–430.7, 431.55–431.825, 432.0–432.975, 433.4–433.575, 435.0–437.975, 439.15–439.425 MHz only | 75 / 400 PEP | same | **≤5 W** |
| 23cm and up | 1240–1300, 5650–5670, 5820–5850, 10450–10452, 24000–24050 MHz; 47–47.2, 75.5–76, 134–142 GHz | 75 / 400 PEP | same | – |

Confidence: HF rows, 6m, 2m and the class columns are high. The 70cm and microwave power values sit in merged cells that did not extract; they are taken from the BTK TAD08-01-05/06 sheets (2018), which group them with 2m (medium). The 70cm C-class 5 W note is high.

Supervised operation (Madde 22(10)): B and C holders may use **all** bands and emissions at a club, school, emergency or scout station, or at an A-class amateur's station, under the responsible operator's supervision. On their own station they are limited to their class.

Conflict: the 2018 BTK TAD08-01-02 sheet listed 160m for A, B and C at 9 W / 30 W PEP. The 2022 Tablo 25 gives 100/400 W and lists only A for the HF block. **Use 2022.**

### 6. Callsign inference (high for the rules)

- **Structure:** prefix + region digit + suffix (Yönetmelik art. 6).
  - **TA** = class A.
  - **TB** = class B **and** class C.
  - **TC** = temporary (contests, special occasions).
  - **YM** = organisations and their repeaters.
  - Individuals get 3-letter suffixes (art. 9).
- **C-class suffix** (2011 amendment, art. 6 f): "C sınıfı amatör telsizcilik çağrı işaretlerinin son eki C, P, T, W ile başlayan üçlü harf grubundan oluşur."
- **Inference rules:**
  - TA + digit + 3 letters means A (reliable).
  - TB + digit + a 3-letter suffix starting with C, P, T or W means C.
  - Other TB calls mean B.
  - The B/C split assumes B suffixes avoid those initial letters. The rule implies this but does not state it (medium).
- The region digit is geographic. TA1 (Thrace/Istanbul European side) is a separate DXCC entity (TA1) with the same regime.

### 7. Sources

| URL | Supported | Confidence |
|---|---|---|
| https://www.btk.gov.tr/uploads/pages/frekans-tahsisinden-muaf-telsiz-cihaz-sistemleri-olcutler-633d4ca68c0b1.pdf | 2022 Tablo 25 (bands, power, classes); Madde 22 (supervised operation) | high (merged-cell rows medium) |
| https://www.btk.gov.tr/uploads/pages/ftm-teknik-olcutler-ek-5.pdf | Jan 2023 copy, same decision and text | high |
| https://www.btk.gov.tr/uploads/pages/amator-sistemleri-tad.pdf | 2018 TAD sheets (70cm segments grouped with 2m; class lists) | medium (older) |
| https://www.lexpera.com.tr/resmi-gazete/metin/kiyi-emniyeti-genel-mudurlugu-amator-telsizcilik-sinav-ve-belgelendirme-yonetmeliginde-degisiklik | 2011 amendment: C suffix letters, YM, 50-question exam, callsign compliance by 1/3/2012 | high |
| https://tracizmir.org.tr/index.php/bilgi/amator-telsizcilik-sinav-ve-belgelendirme-yonetmeligi/ | 2010 base regulation: TA/TB/TC/YM, class scope, scores | medium |
| https://radio.org.tr/amator-telsiz-lisanslari | Society summary of A/B/C (2025) | medium |
| https://docdb.cept.org/download/2775 | Turkey "A" under T/R 61-01 | high |

**Could not verify:**

- The power for the 70cm and microwave rows in the 2022 table (merged cells).
- Whether KEGM has amended the regulation since 2011.
- Whether B suffixes are guaranteed never to start with C, P, T or W.

```json
{"entities":["TA","TA1"],"regulator":"BTK (technical criteria) / KEGM (exams, certificates, callsigns)","termLocal":"amatör telsizcilik belgesi sınıfı","termEnglish":"License Class","levels":[
{"code":"C","name":"Class C","nameLocal":"C sınıfı","order":1,"cept":"none","issued":true,"legacy":false,"maxPowerW":5,"powerNote":"Transmitter output","bands":[
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430200,430700,"all"],[431550,431825,"all"],[432000,432975,"all"],[433400,433575,"all"],[435000,437975,"all"],[439150,439425,"all"]]}],"notes":"TB prefix; suffix starts with C, P, T or W. May use all bands under supervision at club or A-class stations."},
{"code":"B","name":"Class B","nameLocal":"B sınıfı","order":2,"cept":"none","issued":true,"legacy":false,"maxPowerW":400,"powerNote":"75 W mean / 400 W PEP output on 2m/70cm/23cm+; 100 W on 6m; HF 5 W on home-built rigs only","bands":[
{"band":"40m","ranges":[[7000,7100,"all",5,"home-built equipment only"]]},
{"band":"10m","ranges":[[28000,29700,"all",5,"home-built equipment only"]]},
{"band":"6m","ranges":[[50000,52000,"all",100]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430200,430700,"all"],[431550,431825,"all"],[432000,432975,"all"],[433400,433575,"all"],[435000,437975,"all"],[439150,439425,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all"]]}],"notes":"TB prefix. Microwave segments 5650-5670, 5820-5850, 10450-10452, 24000-24050 MHz and 47/75.5/134-142 GHz shared with A. 70cm and microwave power from the 2018 TAD (medium)."},
{"code":"A","name":"Class A","nameLocal":"A sınıfı","order":3,"cept":"HAREC","issued":true,"legacy":false,"maxPowerW":400,"powerNote":"PEP output; mean/carrier limit 100 W on 160/80/40m, 75 W elsewhere; 30m 100 W PEP; 6m 100 W","bands":[
{"band":"2200m","ranges":[[135.7,137.8,"CW|data",1,"EIRP"]]},
{"band":"630m","ranges":[[472,479,"CW|data",5,"EIRP"]]},
{"band":"160m","ranges":[[1810,1832,"CW|data"],[1832,1835,"CW|data|phone"],[1835,1850,"CW|data"]]},
{"band":"80m","ranges":[[3500,3800,"all"]]},
{"band":"60m","ranges":[[5351.5,5366.5,"all",15,"EIRP"]]},
{"band":"40m","ranges":[[7000,7200,"all"]]},
{"band":"30m","ranges":[[10100,10150,"CW|data",100]]},
{"band":"20m","ranges":[[14000,14350,"all"]]},
{"band":"17m","ranges":[[18068,18168,"all"]]},
{"band":"15m","ranges":[[21000,21450,"all"]]},
{"band":"12m","ranges":[[24890,24990,"all"]]},
{"band":"10m","ranges":[[28000,29700,"all"]]},
{"band":"6m","ranges":[[50000,52000,"all",100]]},
{"band":"2m","ranges":[[144000,146000,"all"]]},
{"band":"70cm","ranges":[[430200,430700,"all"],[431550,431825,"all"],[432000,432975,"all"],[433400,433575,"all"],[435000,437975,"all"],[439150,439425,"all"]]},
{"band":"23cm","ranges":[[1240000,1300000,"all"]]}],"notes":"TA prefix. 2200/630m emissions A1A/A1B/A1D. No FM (F3E/G3E) on 28000-29500 kHz. FM handhelds max 5 W on VHF/UHF."}],
"callsignInference":"Mostly reliable: TA = class A; TB = class B or C. Among TB calls, a 3-letter suffix starting with C, P, T or W = class C (2011 amendment art. 6 f); others = B. TC = temporary/contest; YM = club/repeater.","asOf":"2026-10","confidence":"medium"}
```

---

## Open questions (all entities)

1. **Italy:** the class N implementing decree (syllabus, privileges, callsign series) was still pending as of the last MIMIT statement. Re-check the Ispettorati page.
2. **Portugal:**
   - The Lei 22/2026 text could not be read directly. Category 3's own-station transmit rights and transitional bands come from two secondary sources.
   - ANACOM's new procedures and QNAF revision are due around December 2026.
3. **Greece:** the content of the 2013 amendment (ΦΕΚ Β' 648/2013) is unread. Category 1 power is 400 W in the 2011 text versus 500 W per RAAG; 70cm is 50 W versus 100 W. Entry-level privileges are taken from the 2011 text.
4. **Turkey:**
   - 70cm and microwave power values sit in merged table cells and were taken from the 2018 TAD.
   - The B-vs-C suffix inference rests on the C-suffix rule alone.
5. **Spain:** the current CNAF notes for 60m and 4m were not read.

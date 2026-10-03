# Rumelia Atlas Gazetteer Research v1: Skopje–Tetovo–Prizren corridor

## Entity-resolution rules used in this pass

Each record below is one settlement, archaeological locality, or named urban quarter. Historical, Ottoman, local-language, and script variants are grouped under the entity they name; they are not separate duplicate records. A predecessor site is kept separate only when the source treats it as a distinct archaeological place rather than as the present city itself (for example, Scupi versus modern Skopje). Names are reproduced as found in the opened source. I do not normalize an uncertain reading, expand a transliteration, or turn an administrative unit into a settlement without explicit evidence. Unknown fields are `NULL`.

Coordinates are included only where two open gazetteer services agree closely enough to verify the place point: GeoNames populated-place result plus OpenStreetMap Nominatim result. These are **place-reference points**, not surveyed boundaries. Precision is therefore stated as an approximate city/town point. The archaeological Scupi coordinate comes from the Digital Atlas of the Roman Empire, which gives an explicit 2,000 m precision. No coordinates are supplied for the quarters or for Gorno Nerezi/Staro Nagoričane because the opened historical sources did not provide a sufficiently unambiguous point.

## Gazetteer records

### SKP-001 — Skopje / Скопје / Üsküp / Skoplje / Scupi

- **Modern identity:** Skopje; Macedonian `Скопје`.
- **Other documented forms (not separate entities):**
  - `Scupi` — ancient form used by Britannica and the Macedonian tourism authority; the Roman/ancient predecessor is also separately catalogued as SKP-002 because the archaeological site is not the modern municipal city. [SRC-001] [SRC-002]
  - `Skopia` — Byzantine-document form reported by the tourism authority. [SRC-002]
  - `Skopie`, `Skopje`, `Skoplje` — Slavic forms reported by the tourism authority; `Skoplje` is also in Britannica's “also known as” field. [SRC-001] [SRC-002]
  - `Shkup` — Albanian form in Britannica's “also known as” field. [SRC-001]
  - `Usküb` — Britannica's spelling for the Ottoman/Turkish form. [SRC-001]
  - `Üsküp` — diacritic-bearing Turkish form in the Macedonian tourism authority's account. [SRC-002]
- **Dates of use / evidence:** The ancient city is identified as Scupi; Britannica says Skopje was destroyed by an earthquake in 518. [SRC-001] The tourism authority says Byzantine documents used Skopia, Slavs used Skopie/Skopje/Skoplje, and the Ottomans captured the city in 1392 and named it Uskup (Üsküp). [SRC-002] Britannica dates Ottoman capture to 1392 and incorporation into Serbia by treaty in 1913. [SRC-001] Exact first and last dates for each language form are `NULL`.
- **Coordinates:** `41.9963889, 21.4313889` (WGS84; GeoNames city point). Nominatim returns the Skopje administrative-city point at `41.9962164, 21.4318935`, a close match. [SRC-021] [SRC-022]
- **Coordinate precision:** Approx. 0.1–0.5 km as a city-reference point; not a municipal-boundary survey.
- **Place type:** Living city; national capital and administrative/commercial centre. [SRC-001]
- **Status:** Active modern settlement; historical Ottoman provincial capital from 1392 until the Balkan-war/Serbian transfer period, with exact handover date not fixed here. [SRC-001] [SRC-002]
- **Confidence:** **High** for the modern identity, Scupi, Skoplje, Shkup, and Ottoman Üsküp/Usküb; **medium** for the un-dated period ranges of individual forms because the opened sources provide only some anchor dates.
- **Identity note:** Do not create separate modern records for Üsküp, Usküb, Skoplje, Shkup, or Skopia. Keep Scupi separate only as SKP-002, an ancient archaeological locality.

### SKP-002 — Scupi / Σκούποι / Skupi archaeological locality

- **Modern identity:** Scupi archaeological site, on the outskirts of modern Skopje; associated with the area near Zajčev Rid and the Vardar, but this record is the ancient site, not the whole modern city.
- **Other documented forms:** `Colonia Flavia Scupinorum` and `Scupi`; Greek form shown by the Digital Atlas as `Σκούποι`. [SRC-017] [SRC-018]
- **Dates of use / evidence:** The German Archaeological Institute describes Scupi as founded in the 2nd century BCE, granted colonia status under the Flavian dynasty, and abandoned after a devastating earthquake in the 6th century CE. [SRC-017] The Digital Atlas gives a narrower database range of 81–518 CE, explicitly labels the historical name Scupi, and records 2,000 m precision. [SRC-018]
- **Coordinates:** `42.016885, 21.391437` (WGS84). [SRC-018]
- **Coordinate precision:** 2,000 m, explicitly supplied by the Digital Atlas; archaeological locality reference, not an exact excavation trench.
- **Place type:** Ancient city / Roman colonia / archaeological site.
- **Status:** Abandoned ancient settlement and protected/researched archaeological locality; modern Skopje is its nearby successor urban context, not a one-to-one polygonal continuation. [SRC-017]
- **Confidence:** **High** for the site identity, name, date range, and coordinate precision.

### SKP-003 — Gorno Nerezi / Nerezi

- **Modern identity:** Gorno Nerezi village, commonly shortened in English to Nerezi.
- **Other documented forms:** `Gorno Nerezi`; `Nerezi`. No separate Ottoman or older local-language name was found in the opened source: `NULL`.
- **Dates of use / evidence:** Princeton's dissertation record places the Church of St. Panteleimon in the village of Gorno Nerezi, about 6.5 km southwest of Skopje, and dates its decoration to 1164. [SRC-019]
- **Coordinates:** `NULL`.
- **Coordinate precision:** `NULL`.
- **Place type:** Village with a major Byzantine church/monastery monument.
- **Status:** Active village; the 12th-century church survives as a major Middle Byzantine monument.
- **Confidence:** **High** for village identity, relation to Skopje, and 1164 date; **low/unknown** for any omitted historical name because no such form was attested in the opened record.

### TET-001 — Tetovo / Тетово / Tetovë / Tetova / Kalkandelen

- **Modern identity:** Tetovo; Macedonian `Тетово`; current Albanian forms `Tetovë` and `Tetova` are used by the scholarly article. [SRC-004] [SRC-005]
- **Other documented forms:**
  - `Htetova (IhTetova)` — exact OCR/transcription as printed in the 2025 study for the 1452–1453 Ottoman register. It is retained verbatim; the opened extraction does not show the original Ottoman script, so no script normalization is attempted. [SRC-005]
  - `Kalkandele` — the province/administrative name in the 1452–1453 discussion. [SRC-005]
  - `Kalkandelen` — Ottoman-period city name in the 2024 study. [SRC-004]
- **Dates of use / evidence:** The 1452–1453 register records the settlement as a village that was also a marketplace under `Htetova (IhTetova)`. The same study says `Kalkandele` was used for the Vilayet of Tetovo, but not yet for the settlement centre. [SRC-005] In the 1467–1468 register, the settlement takes the name of the nahija/province, and the study describes Tetovo as transformed from village to city and administrative-military centre. [SRC-005] The 2024 study places the city under Ottoman rule in the 14th century, initially in the Pasha Sanjak, in the 16th century under Üsküp/Skopje, and in the second half of the 19th century in Kosovo Vilayet; it calls the Ottoman city Kalkandelen and notes its prominence from the 18th century onward. [SRC-004] The official municipal history independently records a 1436 vakif reference to shops and new streets, a 1470 description of an emerging town, and a 16th-century Turkish-document description as a village. [SRC-003]
- **Coordinates:** `42.0097222, 20.9713889` (WGS84; GeoNames populated-place point). Nominatim returns `42.0068297, 20.9728556` for the Tetovo city administrative relation. [SRC-023] [SRC-024]
- **Coordinate precision:** Approx. 0.3–0.5 km as a city-reference point.
- **Place type:** Living city; historically a village/marketplace in the 1452–1453 register, then a city and administrative-military centre by 1467–1468. [SRC-005]
- **Status:** Active city; former Ottoman nahiya/kaza and later Kosovo-Vilayet urban centre.
- **Confidence:** **High** for Tetovo/Tetovë/Tetova, the 1452–1468 register sequence, and Kalkandelen/Kalkandele; **medium** for `Htetova (IhTetova)` as a transliterated form because the displayed source is an OCR/transcription rather than the original script image.
- **Identity note:** `Kalkandelen`, `Kalkandele`, `Tetovë`, `Tetova`, and `Тетово` are grouped as one city. Do not create a second record for the province/nahija name unless a future corpus treats it as a distinct administrative entity.

### GOS-001 — Gostivar / Гостивар

- **Modern identity:** Gostivar; Macedonian `Гостивар`.
- **Other documented forms:** The opened GeoNames record lists `Gostiwar`, `Gostivara`, `Gostivari`, and `Kostovon` among alternate spellings. These are retained as gazetteer spellings only; their language, historical status, and dates are `NULL`. [SRC-037]
- **Ottoman/local historical evidence:** The late-Ottoman translation of Sami Frashëri's *Kamus al-a'lam* places `Gostivar` as the nahiye under the kaza of Tetova in the Prizren sandjak and assigns 161 villages to that nahiye. [SRC-010] The 2025 Tetovo study also describes the 15th-century Pashasanjak of Skopje as extending westward to Gostivar and Kicevo. [SRC-005]
- **Dates of use:** `Gostivar` is attested in the 1889–1898 late-Ottoman reference as a nahiye name; exact first use is `NULL`. The opening sources do **not** verify a distinct Ottoman Turkish exonym for the town; `NULL`.
- **Coordinates:** `41.7961111, 20.9077778` (WGS84; GeoNames city point). Nominatim returns `41.7920222, 20.9081703` for the Gostivar city administrative relation. [SRC-037] [SRC-038]
- **Coordinate precision:** Approx. 0.4–0.5 km as a city-reference point.
- **Place type:** Living city; late-Ottoman nahiye/subdistrict centre within Tetova kaza in the cited administrative table.
- **Status:** Active city and municipal seat.
- **Confidence:** **High** for the modern identity, late-Ottoman administrative placement, and coordinate; **medium** for the listed spelling variants; **low/NULL** for any unverified Turkish exonym.

### KUM-001 — Kumanovo / Куманово / Kumanova / Comonova

- **Modern identity:** Kumanovo; Macedonian `Куманово`.
- **Other documented forms:** `Kumanova` (alias in the Austrian Academy of Sciences TIB record); `Comonova` (Edward Brown's 1668/69 travel-literature form). [SRC-006] GeoNames also lists `Kumanava`, `Kumanova`, and other transliterations, but does not date them. [SRC-027]
- **Dates of use / evidence:** TIB says the medieval written sources do not provide evidence for Kumanovo itself and that its first source appearance is in the Ottoman defter of the Sanjak of Köstendil. It is registered in 1519 and 1570–1572 as a **village**. Evliya Çelebi visited in 1660 and called it a `kasaba` (small town); Edward Brown passed through `Comonova` in 1668/69. [SRC-006] Britannica places the modern city northeast of Skopje and records the 1912 Kumanovo battle. [SRC-007]
- **Caution on predecessor hypotheses:** TIB says present Kumanovo lies **probably** on the remains of ancient Aquae and that Žegligovo and Nagoričino were medieval regional centres. These are hypotheses/related regional identities, not aliases to be merged into Kumanovo. [SRC-006]
- **Coordinates:** `42.1327778, 21.7158333` (WGS84; GeoNames city point). Nominatim returns `42.1359130, 21.7185474` for the Kumanovo city administrative relation. [SRC-027] [SRC-028]
- **Coordinate precision:** Approx. 0.3–0.5 km as a city-reference point.
- **Place type:** Living city; Ottoman village in the 16th-century registers and kasaba by 1660.
- **Status:** Active city and municipal centre.
- **Confidence:** **High** for Kumanovo, the 1519/1570–1572 and 1660/1668–69 evidence, and the coordinate; **medium** for Kumanova/Comonova as historical forms; **low** for the proposed Aquae identification, which remains explicitly probabilistic.

### PRI-001 — Prizren / Призрен / Pürzerrin / Perzerrin / Pürzen / Zerrin

- **Modern identity:** Prizren; Serbian Cyrillic `Призрен` is the directly corresponding script form.
- **Other documented forms:**
  - `Pürzerrin`, `Perzerrin`, `Pürzen`, `Zerrin` — forms reported in a Turkish-language article as occurring in Ottoman sources. [SRC-012]
  - `pür zerrin` — Ottoman-era Turkish expression reported by *Hürriyet Daily News*; the article glosses it as “pure gold.” [SRC-011]
  - `Perzeren`, `Perzerin` — alternate spellings in the GeoNames record. [SRC-025]
  These are recorded as evidence-bearing variants, not silently converted into a single etymology. The opened sources do not establish the exact first/last date for each form.
- **Dates of use / evidence:** Britannica describes Prizren as a town in the foothills of the Šar Mountains, a large cultural/trading centre and Serbian capital in the 14th century, with churches, mosques, old houses, and Turkish baths. [SRC-008] Katıć's peer-reviewed OTAM study states that Prizren was the long-established city and sancak centre in the 15th and 16th centuries and that Ottoman tahrir and financial registers underpin the study. [SRC-009] Sami Frashëri's 1889–1898 description calls it the capital of the Prizren sandjak, gives its position west of the Šar Mountains, and says the town was formerly under Serbian control and was conquered by Sultan Murat I and then Sultan Mehmet II; it also records that the sandjak later moved from the Vilayet of Monastir to the Vilayet of Kosova. [SRC-010]
- **Coordinates:** `42.2138889, 20.7397222` (WGS84; GeoNames populated-place point). Nominatim returns `42.2130151, 20.7363339` for the Prizren city place node. [SRC-025] [SRC-026]
- **Coordinate precision:** Approx. 0.3–0.5 km as a city-reference point.
- **Place type:** Living city; medieval Serbian capital and Ottoman sancak centre; late-Ottoman capital of the Prizren sandjak.
- **Status:** Active city and historic centre; Ottoman architectural and administrative heritage remains visible. [SRC-008] [SRC-013]
- **Confidence:** **High** for modern identity, Serbian script form, medieval/Ottoman administrative role, and coordinate; **medium** for the Ottoman forms because the opened Turkish-language sources report them but do not display the underlying archival entries; **low** for treating “pür zerrin” as the proven etymology rather than a reported Ottoman-era explanation.

### PRI-002 — Prizren historic centre: Nën-Kalaja / Shadërvan / Saraçhane / Marash

This is a **quarter/urban-heritage grouping**, not a second Prizren city. The records below keep the named urban units distinct from PRI-001 while preserving their relationship to it.

- **Nën-Kalaja (Nen-Kalaja):** The official tourism site places St. Spas Church in the historical centre on the southeastern side of `Nen-Kalaja`. The same page says the Prizren fortress contains prehistoric, Roman, late-antique, medieval, and Ottoman layers. [SRC-013]
  - Dates: church 1333–1335; fortress occupation layers extend from the Late Bronze Age through medieval and Ottoman periods. [SRC-013]
  - Place type/status: active historic quarter/under-fortress zone; exact quarter coordinates `NULL`.
  - Confidence: **High** for the documented name and heritage association; **NULL** for an Ottoman-language equivalent.
- **Shadërvan Square:** The official tourism site locates the St. George–Runovic Church in Shadërvan Square and describes the church as late 15th/early 16th century. [SRC-013]
  - Dates: church end of 15th/beginning of 16th century; exact first use of the square name `NULL`.
  - Place type/status: active historic square/urban node; coordinates `NULL`.
  - Confidence: **High** for the present place name and historic association; Ottoman equivalent `NULL`.
- **Saraçhane neighborhood:** The official page places the Halveti Tekke in Saraçhane neighborhood and dates its establishment to 1690–1713. The page also calls the Suzi Çelebi bridge the Tabakhane Bridge and places it in the craftsmen's leather-working area. [SRC-013]
  - Dates: Saraçhane neighborhood attested on the current heritage page; Halveti Tekke 1690–1713; Suzi Çelebi bridge 1513.
  - Place type/status: active historic neighborhood and Ottoman-era craft/tekke area; coordinates `NULL`.
  - Confidence: **High** for the quarter name and dated monuments; exact older-script form `NULL`.
- **Marash Mahala / Marash Urban Complex:** The official tourism site calls this an urban complex under the castle on the left bank of the Lumbardh and uses both `Marash Mahala` and `Marash Complex`; it gives an Arabic meaning for “marash” but does not provide a historical first-use date. [SRC-013]
  - Dates: `NULL` for first use; current heritage description only.
  - Place type/status: active historic urban complex/quarter; coordinates `NULL`.
  - Confidence: **High** for the present documented identity; **low/NULL** for an Ottoman-period name chronology.

### PRI-003 — Prishtina / Prishtinë / Priština

- **Modern identity:** Prishtina; Albanian `Prishtinë`; Serbian `Priština`. Britannica's quick facts and “also known as” field provide both language forms. [SRC-015]
- **Ottoman/local historical evidence:** The late-Ottoman Sami Frashëri translation calls it `Prishtina`, a `kasaba` and the capital of a sandjak in the Vilayet of Kosova; it says Turkish was widely spoken and lists the kaza's villages. [SRC-010] Britannica states that Pristina was the capital of the Serbian state before the 1389 Battle of Kosovo and is linked to Skopje by road and rail. [SRC-015]
- **Other forms:** `Pristina` is the English/Latinized form used by Britannica; exact Ottoman Turkish form in the original Ottoman script `NULL`. Do not infer `Priştine` from the Latin transliteration.
- **Dates of use:** Serbian-capital status before 1389; late-Ottoman `kasaba` and sandjak capital attested in the 1889–1898 reference. [SRC-010] [SRC-015] Exact first attestation of Prishtinë/Priština `NULL` in this pass.
- **Coordinates:** `42.6725000, 21.1666667` (WGS84; GeoNames capital point). Nominatim returns `42.6638771, 21.1640849` for the municipal-city relation. [SRC-029] [SRC-030]
- **Coordinate precision:** Approx. 1 km as a capital/city reference point; boundary-centroid and populated-place points differ more than for the smaller towns.
- **Place type:** Living capital city; medieval Serbian capital and late-Ottoman sandjak capital.
- **Status:** Active national capital of Kosovo.
- **Confidence:** **High** for modern names, late-Ottoman administrative role, and broad historical identity; **medium** for the coordinate precision because the two datasets represent slightly different city geometries; Ottoman-script form `NULL`.

### VUS-001 — Vushtrri / Vushtrria / Vučitrn / Vuçitërn / Vicianum / Viciana

- **Modern identity:** Vushtrri; Albanian definite form `Vushtrria`; Serbian `Vučitrn`; Albanian historical/alternate spelling `Vuçitërn`. Sami Frashëri's late-Ottoman translation explicitly gives `Vushtrria [Vuçitërn, Vučitrn]`. [SRC-010] GeoNames lists `Vushtrri`, `Vuçitërn`, `Vučitrn`, `Vıçıtırın`, and `Vicianum` among alternate forms. [SRC-031]
- **Ancient/medieval forms:** The municipality's history page calls the locality `Vicianum` and `Viciana`, linking the name to an old Illyrian form and to the Dardanian/Roman period. This is a municipal historical claim; it should not be expanded beyond what the page says. [SRC-014]
- **Ottoman/Turkish form:** `Vıçıtırın` is present in the GeoNames alternate-name list. The opened strong sources do not supply a dated archival Ottoman-script attestation, so date and script status are `NULL` rather than inferred. [SRC-031]
- **Dates of use / evidence:** The municipality describes Roman/Byzantine development, Ottoman invasion beginning in the 14th century, and Vushtrri as one of the larger Ottoman cities in the 15th–18th centuries. [SRC-014] Sami Frashëri's 1889–1898 entry calls it a `kasaba`, capital of a kaza in the Sandjak of Prishtina and Vilayet of Kosova, with a fortress, bridge, schools, and railway station. [SRC-010]
- **Coordinates:** `42.8230556, 20.9675000` (WGS84; GeoNames town point). Nominatim returns `42.8219248, 20.9674413` for the Vushtrri town/administrative relation. [SRC-031] [SRC-032]
- **Coordinate precision:** Approx. 0.2 km as a town-reference point.
- **Place type:** Living town/city; late-Ottoman kasaba and kaza capital; ancient/medieval locality.
- **Status:** Active municipality and town.
- **Confidence:** **High** for Vushtrri/Vučitrn/Vuçitërn and the late-Ottoman kaza role; **medium** for Vicianum/Viciana because the direct evidence is a municipal history page; **low/medium** for Vıçıtırın as a historical Ottoman form because the opened evidence is an undated gazetteer alias.

### KAC-001 — Kaçanik / Kačanik

- **Modern identity:** Kaçanik; Serbian form `Kačanik`.
- **Other documented forms:** GeoNames lists `Kachanik`, `Kaçaniku`, `Kačanikas`, and `Orhanye` among alternate spellings. [SRC-033] Because the opened strong historical pages do not establish which are Ottoman, Serbian, Albanian, or later transliterations, they are recorded as undated variants only. `Orhanye` is not promoted to a confirmed Ottoman name.
- **Historical evidence:** Sami Frashëri's late-Ottoman description identifies the Lepenc river as flowing through the Gorge of Kaçanik and uses the gorge as a major geographic connector between the Prishtina and Skopje sides of the corridor. [SRC-010] A Brill chapter on early Ottoman Kosovo confirms that Ottoman tax/land-register compilation is the relevant evidentiary framework for early settlement history, but the opened chapter text did not expose a Kaçanik-specific name form. [SRC-041] The Cambridge page located in search results could not be extracted; no claims from it are used here.
- **Dates of use:** Modern Kaçanik/Kačanik is current; exact first historical attestation and dates for the alternate spellings are `NULL` in this pass. Ottoman/Turkish name `NULL` (undated web candidates excluded).
- **Coordinates:** `42.2319444, 21.2594444` (WGS84; GeoNames town point). Nominatim returns `42.2280602, 21.2579777` for the town relation. [SRC-033] [SRC-034]
- **Coordinate precision:** Approx. 0.4–0.5 km as a town-reference point.
- **Place type:** Living town; strategic pass/corridor settlement and municipality.
- **Status:** Active town on the Skopje–Kosovo route.
- **Confidence:** **High** for current identity and coordinate; **medium** for the corridor role; **low** for undated alternate spellings and historical names. This record should be upgraded with an Ottoman defter or vakif deed before asserting a 15th/16th-century name chronology.

### FER-001 — Ferizaj / Ferizovik / Ferizović / Uroševac

- **Modern identity:** Ferizaj.
- **Other documented forms:** `Ferizovik`, `Ferizović`, `Uroševac` (including GeoNames transliterations `Urosevac`, `Uroshevac`); GeoNames also lists `Ferizovic`. [SRC-035] These are grouped under one settlement, not separate cities.
- **Dates of use / evidence:** The opened sources securely establish the co-reference but not a complete date table. GeoNames gives all four forms in the populated-place record and classifies Ferizaj as the seat of the Ferizaj first-order administrative division. [SRC-035] The CEEOL record for Mörsdorf's peer-reviewed article concerns the 1912–1913 Balkan Wars and the Prochaska Affair in the Prizren/Kosovo setting, but its extracted abstract does not itself display the Ferizovik sentence; it is therefore not used to assert a date. [SRC-042]
- **Ottoman/Turkish form:** `Ferizovik`/`Ferizović` are recorded as undated historical/gazetteer forms; an exact Ottoman-script form and first/last use date are `NULL`.
- **Coordinates:** `42.3705556, 21.1552778` (WGS84; GeoNames populated-place point). Nominatim returns `42.3682168, 21.1532848` for the Ferizaj city relation. [SRC-035] [SRC-036]
- **Coordinate precision:** Approx. 0.3–0.4 km as a city-reference point.
- **Place type:** Living city and municipal seat; railway/corridor settlement identity is plausible but not asserted here without a directly opened historical railway source.
- **Status:** Active city; `Uroševac` remains a documented Serbian alternate form, but the present official identity is Ferizaj.
- **Confidence:** **High** for co-reference and coordinates; **medium** for Ferizovik/Ferizović/Uroševac as historical spellings; **low** for exact dates of use. A future pass should add a railway-era primary/archival source and a 1913 naming decree before assigning date ranges.

### RAH-001 — Rahovec / Rahoveci / Orahovac / Ораховац

- **Modern identity:** Rahovec; Albanian definite `Rahoveci`; Serbian `Orahovac`; Serbian Cyrillic `Ораховац`.
- **Other documented forms:** GeoNames groups `Rahovec`, `Rahoveci`, `Orahovac`, `Orakhovac`, and `Rahavec`. [SRC-039] The UN Human Security page uses the paired form `Orahovac (Rahovec)` in its title. [SRC-040]
- **Historical evidence:** Sami Frashëri's 1889–1898 entry for the Prizren kaza says the kaza stretches along a fertile plain and includes Rahovec; the administrative table lists Rahovec as the nahiye under the Prizren kaza. [SRC-010] This is strong evidence for the late-Ottoman administrative-geographic identity, but it is a translated reference and does not show the original Ottoman script. The opened sources do **not** verify `Rahofça` directly; that candidate is therefore excluded from the confirmed-name field.
- **Dates of use:** `Rahovec` is attested in the late-Ottoman translated administrative description; exact first use `NULL`. `Orahovac` and `Rahoveci` are current/modern co-reference forms in the opened UN/GeoNames pages; first dates `NULL`.
- **Coordinates:** `42.3994444, 20.6547222` (WGS84; GeoNames town point). Nominatim returns `42.3998736, 20.6527389` for the Rahovec town place. [SRC-039] [SRC-040]
- **Coordinate precision:** Approx. 0.2 km as a town-reference point.
- **Place type:** Living town; late-Ottoman nahiye/area within Prizren kaza.
- **Status:** Active town and municipality.
- **Confidence:** **High** for modern co-reference and coordinate; **medium-high** for late-Ottoman administrative placement; **low/NULL** for a Turkish/Ottoman exonym not attested in the opened strong sources.

### NAG-001 — Staro Nagoričane / Старо Нагоричане

- **Modern identity:** Staro Nagoričane; Macedonian `Старо Нагоричане`.
- **Other documented forms:** `Nagoričino` appears in the TIB Kumanovo record as a medieval regional centre, but the source does not equate it with the modern village name or give a one-to-one settlement continuity statement. [SRC-006] Treat `Nagoričino` as related regional evidence, not as an alias.
- **Dates of use / evidence:** Britannica places the Staro Nagoričane Monastery near Kumanovo and dates its construction to 1318 by Serbian King Milutin. [SRC-020] Britannica's Kumanovo entry likewise places the monastery about 13 km east of Kumanovo. [SRC-007] The medieval regional significance of Nagoričino is noted by TIB. [SRC-006]
- **Coordinates:** `NULL`.
- **Coordinate precision:** `NULL`.
- **Place type:** Village and monastery/heritage locality near Kumanovo.
- **Status:** Active village; medieval church/monastery survives.
- **Confidence:** **High** for the village/monastery relation and 1318 monument date; **medium** for linking the regional medieval form Nagoričino to the modern name; no Ottoman/Turkish equivalent established.

## Deliberately unresolved or excluded forms

- `Enea` for Tetovo is mentioned by the Tetovo municipal history page as an antique name, but it is not corroborated by the stronger 15th-century Ottoman-register study. It is therefore not entered as a confirmed alias; it remains a municipal-source lead only. [SRC-003] [SRC-005]
- `Aquae` as an ancient predecessor of Kumanovo is retained only as an explicitly probabilistic TIB hypothesis, not as a resolved alias. [SRC-006]
- `Rahofça` for Rahovec/Orahovac, `Priştine` for Prishtina, and similar web-only Ottoman/Turkish forms were not promoted to confirmed names without an opened source giving the form in a usable historical context.
- `Hani i Elezit / Elez Han`, villages in the Polog and Prizren hinterlands, and additional Skopje quarters are candidates for a follow-up pass. They are not included as records here because this pass did not open sufficiently strong source pages that both documented their historical identity and supported a non-duplicative name/date resolution.

## Source registry

- **SRC-001** — Encyclopaedia Britannica, “Skopje,” https://www.britannica.com/place/Skopje (opened). Names Scupi, Shkup, Skoplje, Usküb; gives 518 earthquake, 1392 Ottoman capture, 1913 Serbian incorporation, and present city identity.
- **SRC-002** — North Macedonia Timeless, “Skopje,” https://macedonia-timeless.com/eng/cities_and_regions/cities/skopje/ (opened). Gives Skupi, Skopia, Skopie/Skopje/Skoplje and Üsküp/Uskup with 1392 Ottoman capture.
- **SRC-003** — Municipality of Tetovo, “History and heritage,” https://old.tetova.gov.mk/getartm.aspx?aid=288&men=15&lan=3&sub=94 (opened). Gives municipal historical account, 1436 vakif, 1470 town description, 16th-century village evidence.
- **SRC-004** — Merve Doğan and Mustafa Mesut Özekmekçi, “Weapons Production in Kalkandelen (Tetovo) in the Nineteenth and Beginning of the Twentieth Centuries,” *Terra Sebus* 16 (2024), PDF, https://acikerisim.comu.edu.tr/bitstreams/4403bd64-6b5e-440d-ba9f-f88825d82831/download (opened). Ottoman Kalkandelen identity and administrative chronology.
- **SRC-005** — E. Sulimani, “Tetovo According to the Censuses of 1452–…,” *Philosophica* PDF, https://eprints.unite.edu.mk/2007/1/PHILOSOPHICA25-43-53.pdf (opened). 1452–1453 and 1467–1468 registers; Htetova/IhTetova, Kalkandele, village-to-city transition.
- **SRC-006** — Austrian Academy of Sciences, TIB Balkan, “Kumanovo,” https://tib.oeaw.ac.at/balkan/explore/entity/116483 (opened). Kumanova/Куманово, defter dates, village/kasaba status, Comonova, Aquae hypothesis.
- **SRC-007** — Encyclopaedia Britannica, “Kumanovo,” https://www.britannica.com/place/Kumanovo (opened). Modern city and Kumanovo plain/monastery context.
- **SRC-008** — Encyclopaedia Britannica, “Prizren,” https://www.britannica.com/place/Prizren (opened). Medieval Serbian capital, Šar foothill town, Ottoman-built heritage.
- **SRC-009** — Tatjana Katıć, “The Sancak of Prizren in the 15th and 16th century,” OTAM/Ankara University, 2013, https://dergipark.org.tr/tr/doi/10.1501/OTAM_0000000617 (opened). Peer-reviewed Ottoman administrative and settlement study based on tahrir/financial registers.
- **SRC-010** — Sami Frashëri, *Kamus al-a'lam* extracts, 1889–1898, translated by Robert Elsie, https://www.albanianhistory.net/1889_Frasheri2/index.html (opened). Late-Ottoman kasaba/sandjak/kaza/nahiye descriptions of Prishtina, Prizren, Vushtrria, Tetova, Gostivar, Rahovec and the Kaçanik gorge.
- **SRC-011** — *Hürriyet Daily News*, “Visitors trace Turkish footprint in ‘Ottoman gem’ Prizren,” 31 May 2025, https://www.hurriyetdailynews.com/visitors-trace-turkish-footprint-in-ottoman-gem-prizren-209786 (opened). Reports the Ottoman-era Turkish expression “pür zerrin.”
- **SRC-012** — *Bir Dünya Haber*, “Cities of Islam: Prizren,” 6 Aug. 2023, http://www.bidunyahaber.org/cities-of-islam-prizren/ (opened). Reports Pürzerrin, Perzerrin, Pürzen, Zerrin as Ottoman-source forms; treated as secondary and medium confidence.
- **SRC-013** — Visit Prizren official tourism site, https://visit-prizren.com/en/ (opened). Historic centre, Nën-Kalaja, Shadërvan, Saraçhane, Marash, fortress, Ottoman and medieval monuments.
- **SRC-014** — Municipality of Vushtrri, “History,” https://vushtrri.rks-gov.net/en/history/ (opened). Vushtrri/Vicianum/Viciana and Roman–Ottoman chronology.
- **SRC-015** — Encyclopaedia Britannica, “Pristina,” https://www.britannica.com/place/Pristina (opened). Prishtinë/Priština, Serbian-capital and modern capital identity.
- **SRC-016** — State Archives of Macedonia edition description, “Turkish Documents … Detailed Census Defter No. 4 (1467–1468),” https://www.makedonskadrzava.com/books/turkish-documents-on-the-history-of-the-macedonian-people-detailed-census-defter-no-4-1467-1468 (opened). Scholarly edition of the Ottoman census register.
- **SRC-017** — German Archaeological Institute, “Ancient Scupi – Between Spolia and Stones,” https://www.dainst.org/blogs/noslug/532 (opened). Scupi/Colonia Flavia Scupinorum, 2nd century BCE to 6th century CE, relation to Skopje.
- **SRC-018** — Digital Atlas of the Roman Empire, “Scupi, Skopje,” http://imperium.ahlfeldt.se/places/21410 (opened). Scupi, 81–518 CE, WGS84 coordinate and explicit 2,000 m precision.
- **SRC-019** — Penn State Open Publishing, Ida Sinkevic, “The Church of St. Panteleimon at Nerezi,” 1994, https://openpublishing.psu.edu/ahd/content/church-st-panteleimon-nerezi-architecture-painting-and-sculpture (opened). Gorno Nerezi village, 6.5 km southwest of Skopje, 1164 church.
- **SRC-020** — Encyclopaedia Britannica, “Staro Nagoričane Monastery,” https://www.britannica.com/place/Staro-Nagoricane-Monastery (opened). Monastery near Kumanovo, built 1318.
- **SRC-021** — GeoNames search for Skopje, https://www.geonames.org/search.html?q=Skopje&country=MK (opened). City point, coordinates, alternate spellings.
- **SRC-022** — OpenStreetMap Nominatim Skopje query, https://nominatim.openstreetmap.org/search?q=Skopje%2C%20North%20Macedonia&format=jsonv2&limit=1 (opened). Administrative-city coordinate cross-check.
- **SRC-023** — GeoNames search for Tetovo, https://www.geonames.org/search.html?q=Tetovo&country=MK (opened). City point and Kalkandelen/Tetova aliases.
- **SRC-024** — OpenStreetMap Nominatim Tetovo query, https://nominatim.openstreetmap.org/search?q=Tetovo%2C%20North%20Macedonia&format=jsonv2&limit=1 (opened). Administrative-city coordinate cross-check.
- **SRC-025** — GeoNames search for Prizren, https://www.geonames.org/search.html?q=Prizren&country=XK (opened). City point and Perzeren/Perzerin variants.
- **SRC-026** — OpenStreetMap Nominatim Prizren query, https://nominatim.openstreetmap.org/search?q=Prizren%2C%20Kosovo&format=jsonv2&limit=1 (opened). City coordinate cross-check.
- **SRC-027** — GeoNames search for Kumanovo, https://www.geonames.org/search.html?q=Kumanovo&country=MK (opened). City point and transliteration list.
- **SRC-028** — OpenStreetMap Nominatim Kumanovo query, https://nominatim.openstreetmap.org/search?q=Kumanovo%2C%20North%20Macedonia&format=jsonv2&limit=1 (opened). Administrative-city coordinate cross-check.
- **SRC-029** — GeoNames search for Prishtina, https://www.geonames.org/search.html?q=Prishtina&country=XK (opened). Capital point and transliteration list.
- **SRC-030** — OpenStreetMap Nominatim Prishtina query, https://nominatim.openstreetmap.org/search?q=Prishtina%2C%20Kosovo&format=jsonv2&limit=1 (opened). Administrative-city coordinate cross-check.
- **SRC-031** — GeoNames search for Vushtrri, https://www.geonames.org/search.html?q=Vushtrri&country=XK (opened). Vushtrri/Vučitrn/Vuçitërn/Vıçıtırın and town point.
- **SRC-032** — OpenStreetMap Nominatim Vushtrri query, https://nominatim.openstreetmap.org/search?q=Vushtrri%2C%20Kosovo&format=jsonv2&limit=1 (opened). Town coordinate cross-check.
- **SRC-033** — GeoNames search for Kaçanik, https://www.geonames.org/search.html?q=Kacanik&country=XK (opened). Kaçanik/Kačanik variants and town point.
- **SRC-034** — OpenStreetMap Nominatim Kaçanik query, https://nominatim.openstreetmap.org/search?q=Ka%C3%A7anik%2C%20Kosovo&format=jsonv2&limit=1 (opened). Town coordinate cross-check.
- **SRC-035** — GeoNames search for Ferizaj, https://www.geonames.org/search.html?q=Ferizaj&country=XK (opened). Ferizaj/Ferizovik/Ferizović/Uroševac variants and city point.
- **SRC-036** — OpenStreetMap Nominatim Ferizaj query, https://nominatim.openstreetmap.org/search?q=Ferizaj%2C%20Kosovo&format=jsonv2&limit=1 (opened). City coordinate cross-check.
- **SRC-037** — GeoNames search for Gostivar, https://www.geonames.org/search.html?q=Gostivar&country=MK (opened). Gostivar spellings and city point.
- **SRC-038** — OpenStreetMap Nominatim Gostivar query, https://nominatim.openstreetmap.org/search?q=Gostivar%2C%20North%20Macedonia&format=jsonv2&limit=1 (opened). City coordinate cross-check.
- **SRC-039** — GeoNames search for Rahovec, https://www.geonames.org/search.html?q=Rahovec&country=XK (opened). Rahovec/Orahovac/Rahoveci spellings and town point.
- **SRC-040** — OpenStreetMap Nominatim Rahovec query, https://nominatim.openstreetmap.org/search?q=Rahovec%2C%20Kosovo&format=jsonv2&limit=1 (opened). Town coordinate cross-check.
- **SRC-041** — Mirela Altic, “The Period of Early Ottoman Rule in Kosovo,” in *Kosovo: History in Maps*, Brill, 2025, https://brill.com/display/book/9789004732025/BP000012.xml (opened). Methodological context for early Ottoman registers; Kaçanik-specific text was not exposed in the open page.
- **SRC-042** — Sven Mörsdorf, “The Prochaska Affair Revisited: Towards a Revaluation of Austria-Hungary’s Balkan Consuls,” CEEOL record, 2022, https://www.ceeol.com/search/article-detail?id=1076311 (opened). 1912–1913 Balkan Wars context; the extracted abstract did not expose the Ferizovik sentence and is not used for a date claim.

# North Macedonia beyond the pilot corridor: source/data-readiness memo

**Coverage:** Bitola/Manastır, Ohrid, Prilep, Štip/İştip, Veles/Köprülü, Kičevo/Kırçova, Gostivar and Strumica, with linked hinterlands where the relevant archive or census geography is wider than the municipality.

## Bottom line

North Macedonia is **production-ready for a modern demographic and heritage baseline**, but only **conditionally ready for Ottoman-era place-by-place reconstruction**. The strongest immediately usable combination is: the State Statistical Office’s 2021 municipality tables; the State Archive’s regional-branch network and published Ottoman-document editions; the National Conservation Centre’s central immovable-heritage register; and a small number of map/GIS anchors. The hard part is not proving that sources exist. It is creating a defensible crosswalk between Ottoman administrative units, post-1912 Serbian/Yugoslav units, socialist and current municipalities, and the changing spellings of the same settlement.

The State Statistical Office provides the current anchor: 1,836,713 resident persons in the 2021 census, with separate tables for ethnic affiliation, religion and mother tongue. The release reports Macedonian, Albanian, Turkish, Roma, Serbian, Bosniak and Vlach categories separately, and warns that some records were taken from administrative sources. [1] The full English publication has municipality-level tables for the main ethnic groups, religion and mother tongue, including all eight target municipalities. [2]

Ottoman sources are uneven but unusually promising for a pilot expansion. The Turkish State Archives’ inventory of Ottoman material in Macedonian repositories identifies Manastır kadı sicils from 1607 to 1912, tapu registers for Manastır, Resne, Prilep, Prespa, Krushevo, Ohrid and Kırçova, municipal and fiscal series for Köprülü, Prilep and İştip, and other local administrative records. It also states that much material is held in the Skopje central archive and in regional archives such as Ohrid and Bitola. [5] The State Archive’s own Macedonian network page independently confirms the Bitola kadı-court series, Ottoman municipal and kaymakamlık holdings, maps, fermans, berats and vakıfname collections. [3]

Do **not** turn Ottoman Muslim/non-Muslim labels into modern ethnic labels. Tahrir defters are fiscal-administrative working documents, not modern ethnic censuses. The CEU spatial-defter project explicitly cautions that they reveal administrative and economic practice and only occasionally explain social identity. [6] For the atlas, Ottoman registers should be represented as dated observations with the original category, script, transcription and administrative context preserved.

## Current demographic anchor (2021 resident population)

The figures below are **municipality totals**, not city-proper counts. They are the most reproducible current baseline for the eight requested places. “Macedonian, Albanian, Turkish and Roma” are ethnic-affiliation fields; “Muslim” is a religious-affiliation field and must remain separate. The published table also carries Vlach, Serbian, Bosniak, other, undeclared and unknown fields. [2]

| Municipality | Resident total | Macedonian | Albanian | Turkish | Roma | Muslim (Islam) |
|---|---:|---:|---:|---:|---:|---:|
| Bitola | 85,164 | 69,182 | 4,018 | 1,174 | 2,890 | 8,232 |
| Ohrid | 51,428 | 40,488 | 1,942 | 1,831 | 232 | 5,908 |
| Prilep | 69,025 | 58,349 | 127 | 1,060 | 3,966 | 5,063 |
| Štip | 44,866 | 34,752 | 33 | 1,334 | 2,301 | 3,798 |
| Veles | 48,463 | 36,825 | 2,736 | 1,037 | 507 | 6,286 |
| Kičevo | 39,669 | 16,020 | 16,373 | 2,553 | 2,003 | 21,056 |
| Gostivar | 59,770 | 12,807 | 33,076 | 7,597 | 2,273 | 43,459 |
| Strumica | 49,995 | 38,949 | 22 | 3,927 | 218 | 4,331 |

The same census publication separates mother tongue. Examples of its value for the requested categories are Albanian/Turkish mother-tongue counts of 4,032/920 in Bitola, 2,716/1,101 in Veles, 33,204/7,576 in Gostivar, 16,351/1,905 in Kičevo, 2,707/1,770 in Ohrid, 228/1,026 in Prilep, 31/4,062 in Strumica and 26/1,862 in Štip. [2] These should be kept as linguistic observations, not substituted for ethnicity. The same publication includes Macedonian mother-tongue counts and a full long tail of other languages.

The census release reports 32.17% Muslim affiliation in the resident population, but the municipality table shows why religion cannot stand in for ethnicity: Kičevo and Gostivar have large Muslim populations with mixed Albanian, Turkish, Roma and Macedonian-affiliation counts, while Bitola, Ohrid and Veles also have Muslim residents who are not a single ethnic category. [1] The atlas should therefore use at least three separate fields: `ethnic_affiliation`, `religious_affiliation`, and `mother_tongue`, each with census year, unit, source table and denominator.

## Ottoman and archival source catalog by place

### Bitola / Manastır

Bitola is the best-developed Ottoman archival case in this set. The Turkish inventory lists a large Manastır kadı-court run from 1607 through the end of Ottoman rule, with 185 sicils preserved as a set and microfilmed for the Ottoman Archives. It also lists a very substantial Manastır tapu series, covering the late nineteenth and early twentieth centuries, plus municipal, fiscal and cadastral records. [5] The Macedonian State Archive describes the Bitola kadı fund as 190 sicil books containing about 40,000 individual acts in Ottoman Turkish, and identifies the Bitola vakıf administration and muftiate, Greek-Pelagonian metropolitanate, civil registers and family/photographic collections. [3]

**Best use:** urban property, court disputes, waqf institutions, neighborhoods, occupations, migration and named individuals. Combine kadı sicils with tapu and late Ottoman salname/nüfus searches rather than treating any one series as a population census. Bitola’s Jewish documentation is also unusually cataloged: EHRI describes 17 lists of Macedonian Jews, photographs and 955 archival units for Jews from Bitola, with English and Macedonian descriptions and dates from 1918–1962. [14]

**Readiness:** **high for archival discovery; medium-high for digitized extraction; high for heritage and current demography.** The main gaps are Ottoman-script transcription, item-level digitization and a neighborhood/place-name crosswalk between Manastır, Bitola, Bitolj, Bitolja and Monastir.

### Ohrid

Ohrid has a strong archival and heritage position but a weaker public item-level inventory. The Turkish inventory records Ohrid kadı material among the surviving regional sicils and identifies Ohrid tapu registers within the small combined set for Ohrid, Kırçova and Selvice. It also reports an Oriental manuscript and printed-book collection in the Ohrid archive and warns that, at the time of the inventory, a substantial part of the regional Ottoman material was uncataloged. [5] The Macedonian State Archive describes Ohrid’s branch as covering Ohrid, Debarca, Struga, Vevčani, Kičevo and neighboring western municipalities, with Orthodox and Islamic religious fonds, Oriental manuscripts and printed books, and nineteenth-/early-twentieth-century material. [3]

Ohrid is also the clearest heritage/GIS case. UNESCO’s mixed World Heritage property includes the town, lake and surrounding region; the cultural description specifically notes well-preserved late-Ottoman urban residential architecture from the eighteenth and nineteenth centuries. [10] UNESCO provides downloadable nomination maps, management plans, boundary documents and state-of-conservation reports. [11]

**Best use:** old-town building inventory, late-Ottoman houses and religious sites, kadı/tapu leads, lake/shoreline spatial history, and a heritage-risk layer. **Readiness:** **high for heritage and spatial boundary work; medium for Ottoman demographic reconstruction.** The key gap is a public, item-level catalog of Ohrid’s Ottoman material and a consistent linkage to settlement-level tahrir/nüfus data.

### Prilep

Prilep is one of the strongest early-Ottoman research nodes. The ISAM article identifies the 1445–1455 *Defter-i Köhne* as the earliest timar register for the Prilep–Kırçova section, providing a direct early Ottoman source for both Prilep and Kičevo. [7] The Turkish inventory adds Prilep kadı material, municipality, kaymakamlık, finance, tapu and cadastral series. [5] The State Archive’s Prilep branch covers Prilep, Dolneni, Krivogaštani, Kruševo, Makedonski Brod and Plasnica, but its public branch description says that most of its 540 fonds and seven collections concern the post-1944 period. [3]

**Best use:** early Ottoman timar/tahrir settlement and revenue history; late Ottoman administrative, cadastral and municipal history; tobacco and commercial history; and a mixed religious/heritage layer. **Readiness:** **high for early-Ottoman source identification; medium for direct extraction; medium-high for current census.** Verify whether each Prilep register survives locally, in microfilm, or only as a catalog reference before promising a digitized dataset.

### Štip / İştip

The Turkish inventory names İştip among the kazas with surviving Ottoman kadı material and lists İştip municipal records. [5] The Macedonian State Archive’s Štip branch covers Štip and a broad eastern hinterland including Kočani, Radoviš, Probishtip, Sveti Nikole and Delčevo. It has 523 fonds and 22 collections, but the branch page says that its oldest material is from 1895 and that most holdings are post-1944; religious holdings include the Islamic Community’s muftiates in Štip, Kočani and Radoviš. [3]

**Best use:** late Ottoman municipal, religious and property sources; eastern Macedonia settlement network; comparison with the CEU tahrir dataset; and current Turkish/Roma/Orthodox/Muslim distributions. **Readiness:** **medium for Ottoman extraction; high for current census; medium for heritage inventory.** The major gap is an item-level public guide to the İştip sicils and older Ottoman administrative series.

### Veles / Köprülü

The Ottoman inventory identifies Köprülü municipal records and places Veles within the administrative-document series, but it does not offer the same dense surviving kadı/tapu inventory that it does for Manastır or Prilep. [5] The Macedonian State Archive’s Veles branch covers Veles and a broad Vardar corridor, including Gradsko, Kavadarci, Negotino and Gevgelija. It has 538 fonds and eight collections; the branch description identifies holdings as old as 1768, including municipal and family-commercial fonds, but much of the accessible description concerns the nineteenth and twentieth centuries. [3]

**Best use:** Köprülü/Veles urban morphology, trade and transport, municipal records, family-commercial archives and the Vardar corridor. **Readiness:** **medium for late Ottoman local history; medium for Ottoman demographic extraction; high for current census and basic GIS.** A targeted catalog request should test for Köprülü municipal, tax, land and court series and for links to the 1909 Manastır atlas.

### Kičevo / Kırçova

Kičevo is a key crosswalk node. The 1445–1455 Prilep–Kırçova timar register is a direct early-Ottoman entry point. [7] The Turkish inventory includes Kırçova in the surviving tapu set and identifies Kırçova within the regional Ottoman archive geography. [5] The State Archive’s published catalog lists a Macedonian edition of nineteenth-century Ottoman records for **Kičevo kaza, 1832/33**, and the Albanian edition of the same series is also listed. [4] The Ohrid branch covers Kičevo and neighboring municipalities and holds Ottoman-era and Islamic-community material, but the branch description emphasizes that most material is nineteenth-/twentieth-century and that the user-facing catalog is not a full Ottoman item inventory. [3]

**Best use:** early Ottoman settlement/timar history; nineteenth-century population and administrative reconstruction; Albanian/Turkish/Macedonian place-name variants; and a contemporary ethnic/religious/language comparison. **Readiness:** **high for current demographic separation; medium-high for Ottoman source identification; medium for digitized extraction.** Kičevo is a priority because the modern municipality is sharply mixed and because the Ottoman source chain is unusually explicit.

### Gostivar

Gostivar is historically tied to the western administrative and linguistic zone, but the public catalog is less direct than for Kičevo or Bitola. The State Archive’s branch network places Gostivar under the Tetovo branch, which covers nine municipalities and holds 701 fonds and collections; the branch has Orthodox and Islamic-community fonds and a Turkish-language collection whose oldest document is dated 1705. [3] The State Archive’s published catalog also includes Ottoman-record editions for Tetovo kaza and Albanian-language editions, which should be checked for the wider Tetovo–Gostivar administrative geography. [4]

**Best use:** Albanian/Turkish/Macedonian and Muslim/non-Muslim differentiation; western Macedonia village and migration histories; religious-institution records; and modern settlement-level census mapping. **Readiness:** **high for 2021 demographic categories; medium for archival discovery; low-to-medium for a ready Ottoman GIS layer.** Do not assume that Tetovo kaza volumes contain every Gostivar locality without checking the edition’s contents and Ottoman administrative boundaries.

### Strumica

Strumica is comparatively weak for publicly documented Ottoman-era extraction in the sources reviewed here. The State Archive’s Strumica branch covers Strumica and the southeastern municipalities, has 453 fonds and eight collections, and identifies an oldest document from 1882; the branch description is dominated by 1882–1990 and especially post-1944 municipal, commercial and institutional records. [3] This does not mean Ottoman material is absent. It means that the currently visible branch description does not establish an item-level Ottoman tahrir/nüfus/salname series.

**Best use:** modern demographic and heritage baseline; post-1878/1912 administrative transitions; southeastern corridor and cross-border map context; and a targeted search for late Ottoman municipal, land, church and Muslim-community records in central or regional holdings. **Readiness:** **high for current census and basic GIS; low-to-medium for Ottoman demographic reconstruction.** Strumica should be included as a “relevant where evidence exists” extension, not presented as equally documented with Bitola or Prilep until a catalog request confirms the Ottoman series.

## Archive and publication infrastructure

The Macedonian State Archive’s archive-network page is the operational map for research visits and requests. The system has regional branches in Bitola, Veles, Ohrid, Prilep, Strumica and Štip, while Gostivar is served through Tetovo and Kičevo through Ohrid. [3] The central archive reports more than 1,300 fonds, 27 collections, almost five million microfilm images, foreign-archive copies and a set of geographic maps. [3] The branch structure is therefore usable for provenance and access planning, but the public web descriptions are not a substitute for a current archival guide or item-level finding aid.

The State Archive publication catalog is a major readiness asset. It lists Macedonian, Albanian and Turkish editions of nineteenth-century Ottoman records, including 1832/33 records for Skopje, Tetovo and Kičevo; it also lists Albanian documents, Greek documents and Serbian documents for the history of Macedonia. [4] These editions are the best immediate way to establish a multilingual controlled vocabulary and to test how Ottoman categories were editorially transcribed. Treat the printed editions as finding aids or scholarly editions unless the original scan and editorial method are documented.

The Turkish State Archives’ *Makedonya’daki Osmanlı Evrakı* is the strongest single inventory for locating Ottoman material outside a modern digital portal. Its contents distinguish local administration, firmans/berats/vakıfname, religious institutions, tapu books, kadı registers and municipal/fiscal records. [5] It should be used to create a request list with fund/series, locality, date span, script, physical location and reproduction status. The inventory itself dates from 1996 and must be rechecked against current catalog and preservation conditions.

## Maps, GIS and place-name control

The 1909 *Manastir Vilayeti* sheet in the David Rumsey Historical Map Collection is directly usable as a map anchor. Its record identifies authors Mehmet Nasrullah, Mehmet Rushtu and Mehmet Eshref, publication in Istanbul, a 1:1,500,000 scale, administrative boundaries, cities, towns, roads, rivers and mountains, with Arabic/Turkish-script place names. It has a full-image download and a georeferencing interface. [8] This is appropriate for vilayet-level context, not for parcel-scale accuracy.

The CEU spatial-defter project is the most relevant existing Ottoman historical-GIS precedent. It compiled fifteenth- and sixteenth-century tahrir-based settlement data for areas within modern North Macedonia, organized settlements by Ottoman nahiye and years 1445–1583, digitized a nahiye map, and combined it with modern borders, rivers and elevation. [6] It cites the Macedonian scholarly compilation *Naselbi i Naselenie vo Makedonija – XV i XVI Vek*, which should be acquired and reconciled with the 1445–1455 Prilep–Kırçova register and later tahrir editions.

IPUMS Census Mosaic supplies useful historical GIS supplements, but it does **not** replace an Ottoman settlement layer. It offers Europe 1900–2003 boundary files, Serbia 1865–1895 district shapefiles, and an Albania 1918 file tied to the first census in the Austro-Hungarian-occupied area; the data are free for non-commercial scientific use after registration and citation. [12] The Serbia file can support post-1878/post-1912 cross-border context, while the Europe file can provide a broad comparison grid. North Macedonia-specific Ottoman polygons still need to be built from the CEU and State Archive material.

The Government of North Macedonia’s open-data portal is a practical discovery layer. Its Macedonian page currently advertises 781 datasets from 79 organizations, while the Ministry of Digital Transformation describes machine-readable CSV/JSON and API access. [13] Search for cadastre, municipal boundaries, settlements, roads, protected sites and cultural heritage, then record the dataset version and license. The portal is broader than heritage and will require metadata review; do not assume that a listed dataset is authoritative or stable without checking its producer.

The National Conservation Centre is the authoritative institutional lead for heritage records. It maintains the central register for immovable cultural monuments, basic records and documentation through its INDOC/INDOK service, supervises local institutes in Ohrid, Bitola, Prilep, Štip and Strumica, and reports inventories of archaeological sites, churches, monasteries and other objects. [9] For production use, request the register extract or geospatial layer with object identifier, legal status, date, coordinate reference system, geometry precision, source photograph and conservation status. Public web prose alone is not a structured dataset.

## Language and identity verification matrix

| Language/source channel | What is verified | Production use | Remaining check |
|---|---|---|---|
| Macedonian | State Archive network, central/branch remit, holdings and publication catalog; national open-data portal. [3] [4] [13] | Primary institutional discovery and current administrative vocabulary. | Obtain current finding aids and register exports; normalize Cyrillic and Latin forms. |
| Albanian | State Archive catalog lists Albanian editions of Ottoman records for Skopje, Tetovo and Kičevo and Albanian documents for Macedonia. [4] | Western Macedonia source discovery and parallel editorial terminology. | Verify each Albanian edition against the original and document locality coverage; the dynamic Albanian archive page did not yield machine-readable text in this review. |
| Turkish/Ottoman Turkish | Turkish State Archives inventory; Ottoman record terminology; David Rumsey’s Arabic/Turkish-script map metadata. [5] [8] | Defter, nüfus, salname, tapu, kadı-sicil, vakıf and locality searches; script-aware OCR/transcription. | Confirm current catalog identifiers and obtain Ottoman paleography/transcription support. |
| English | State Statistical Office census release and tables; UNESCO; CEU GIS; IPUMS; EHRI. [1] [2] [6] [10] [11] [12] [14] | Reproducible current baseline, heritage boundaries, GIS precedent and international metadata. | Preserve source table/page and avoid back-translating editorial categories. |
| Serbian/Serbo-Croatian | Yad Vashem’s Bitolj place record preserves Serbian-Croatian/Turkish aliases and points to the 1931 Yugoslav definitive census published in Belgrade; the State Archive catalog also lists Serbian documents for Macedonia. [15] [4] | Post-1912 comparator and historical alias/administrative vocabulary. | Acquire the 1931 volume and relevant 1921/1931/1948 tables; verify which units cover each target place. |

## Data model recommended for the atlas

Use one canonical settlement ID and separate observation tables rather than a single blended population table.

1. **Gazetteer:** canonical present-day place and municipality; all observed forms (`Bitola`, `Bitolj`, `Manastır`, `Monastir`, `Manastir`, etc.); script; language; source; confidence; latitude/longitude; geometry version.
2. **Ottoman observation:** source type (`tahrir`, `timar`, `nüfus`, `salname`, `tapu`, `kadı sicil`, `municipal`, `vakıf`); register ID; date; Ottoman administrative unit; original script; transcription; translated label; counted unit (household, adult male, taxpayer, tax item, person, building); category exactly as written; page/folio; image URL or archive call number.
3. **Modern demographic observation:** census year; geography level; total; ethnic affiliation fields; religious affiliation; mother tongue; sex; source table; whether resident, enumerated, non-resident or administrative-source-derived.
4. **Heritage/GIS observation:** object ID; monument/site type; legal status; construction/alteration date; community or institution where explicitly documented; geometry; CRS; source map; survey date; conservation status; rights.
5. **Uncertainty:** `direct`, `editorially transcribed`, `georeferenced`, `inferred`, or `unresolved`. Never hide inferred modern equivalents inside the canonical name.

## Priority queue for production

1. **Acquire the current State Archive finding aids and reproductions** for Manastır kadı sicils, Manastır tapu, Prilep/Kırçova early defters, Kičevo 1832/33, İştip, Ohrid and Köprülü municipal/property records. Ask for fund/series identifiers, folio counts, digitization status and restrictions.
2. **Acquire the Macedonian, Albanian and Turkish published editions** listed by the State Archive and build a bilingual/trilingual vocabulary of place names and category terms. Record whether each volume is a transcription, translation, facsimile or selection.
3. **Build the eight-place alias gazetteer** before any map join. Include Ottoman Turkish, Macedonian Cyrillic, Latin Macedonian, Albanian, Serbian/Serbo-Croatian and English forms, plus nearby villages and historical kazas.
4. **Join 2021 census tables to current municipality and settlement polygons.** Keep municipality totals as the first layer and add city-proper or settlement rows only when the geographic unit is explicit.
5. **Digitize the 1909 Manastır map and UNESCO Ohrid maps** as contextual layers. Capture map sheet, scale, control points, CRS, residual error and whether a boundary is administrative, heritage, buffer or interpretive.
6. **Use CEU/IPUMS as crosswalk aids, not as substitutes for primary records.** Reconcile settlement names and boundaries against the original Ottoman publications and archival images.
7. **Field-check heritage and community labels.** For Turkish, Muslim, Albanian, Roma, Jewish, Vlach, Serbian and other categories, preserve historical source wording and distinguish self-identification, administrative classification, religion, language, institution and later scholarly interpretation.

## Gaps and risks

- Public archive pages confirm substantial holdings but do not expose a complete, stable, item-level Ottoman catalog or download API.
- Ottoman tahrir and timar records are not ethnic censuses; household, taxpayer, adult-male and revenue units are not interchangeable with people.
- The 2021 figures are municipality-level and include a documented administrative-source component; city-proper comparisons require a separate settlement table and boundary control. [1] [2]
- “Turkish,” “Muslim,” “Albanian,” “Roma” and other labels change meaning by period and record-maker. They must remain separate variables.
- Gostivar and Strumica are currently weaker in public Ottoman catalog evidence than Bitola, Prilep and Kičevo. Treat them as targeted archival searches, not as equally ready datasets.
- The 1996 Turkish inventory is invaluable but old; holdings, identifiers, conservation status and access rules may have changed. [5]
- Heritage inventories are institutionally authoritative but need a structured extract, object IDs, geometries and rights statement before ingestion. [9]
- The reviewed Albanian archive URL was not machine-readable in this pass, although the State Archive catalog verifies Albanian-language editions and titles. [4]

**Overall production rating:** **amber / conditionally ready**. Release a v1 atlas with the modern census, heritage and map layers now; label Ottoman population layers as source-linked research layers with explicit units and confidence. Bitola, Prilep and Kičevo can lead the next extraction sprint, followed by Ohrid and Štip. Veles, Gostivar and Strumica need catalog confirmation before their Ottoman demographic data are presented at the same confidence level.

## References

[1]: https://www.stat.gov.mk/PrikaziSoopstenie_en.aspx?rbrtxt=146 "State Statistical Office: Census of Population, Households and Dwellings, 2021 — first dataset"
[2]: https://www.stat.gov.mk/publikacii/2022/POPIS_DZS_web_EN.pdf "Census of Population, Households and Dwellings in the Republic of North Macedonia, 2021"
[3]: https://arhiv.gov.mk/%D0%B0%D1%80%D1%85%D0%B8%D0%B2%D1%81%D0%BA%D0%B0-%D0%BC%D1%80%D0%B5%D0%B6%D0%B0/ "State Archive of the Republic of North Macedonia: Archive network"
[4]: https://arhiv.mk/publikuvanje-2/ "State Archive of the Republic of North Macedonia: Publications"
[5]: https://www.devletarsivleri.gov.tr/varliklar/dosyalar/eskisiteden/yayinlar/osmanli-arsivi-yayinlar/makedonyadaki_osmanli_evraki.pdf "Makedonya’daki Osmanlı Evrakı"
[6]: https://syslab.ceu.edu/projects/a-spatial-approach-to-ottoman-defter-studies "A Spatial Approach to Ottoman Defter Studies"
[7]: https://osmanliarastirmalari.isam.org.tr/dergi/article/view/328 "Defter-i Köhne: Pirlepe-Kırçova Kesiminin En Eski Timar Defteri (1445–1455)"
[8]: https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~311586~90081076:Manastir-Vilayeti "Manastir Vilayeti, 1909 — David Rumsey Historical Map Collection"
[9]: https://heritage.gov.mk/en/za-nas/ "National Center for Conservation — About us"
[10]: https://whc.unesco.org/en/list/99/ "Natural and Cultural Heritage of the Ohrid region — UNESCO World Heritage Centre"
[11]: https://whc.unesco.org/en/list/99/documents/ "Natural and Cultural Heritage of the Ohrid region — UNESCO documents, maps and management plans"
[12]: https://mosaic.ipums.org/historical-gis-datafiles "Census Mosaic / IPUMS: Historical GIS datafiles"
[13]: https://data.gov.mk/ "Government of North Macedonia Open Data Portal"
[14]: https://portal.ehri-project.eu/units/mk-006339-jews_from_bitola_1918_1963/search?sort=detail&country=mk "EHRI: Bitola Jews 1918–1962"
[15]: https://collections.yadvashem.org/en/places/5421045 "Yad Vashem: Bitolj, Yugoslavia — place record and Yugoslav census bibliography"

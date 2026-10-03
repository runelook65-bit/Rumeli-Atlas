Montenegro’s six requested municipalities sit across three Ottoman historical geographies rather than one continuous administrative unit: the Skadar/İşkodra sphere in the south (Podgorica, Bar and Ulcinj), the Herzegovina–Novi Pazar/Sandžak corridor in the north (Pljevlja, Bijelo Polje and Rožaje), and a shifting Ottoman–Montenegrin frontier between them. The most reliable current demographic baseline is the Statistical Office of Montenegro (MONSTAT) 2023 census. The most useful Ottoman evidence is uneven: Pljevlja has a substantial published defter/sidžil trail, Bijelo Polje has a documented Bihor/Akova administrative sequence, while open, town-level Ottoman registers for Rožaje, Bar and Ulcinj remain **NULL** in the sources checked.

## How to read the demographic evidence

MONSTAT’s final release reports **municipality totals**, not city-proper totals. It separates (1) self-declared national/ethnic affiliation, (2) religion, (3) mother tongue, and (4) language usually spoken. “Bosniak,” “Muslim” and “Albanian” are therefore not interchangeable variables. In particular, the identity category “Muslims” is not the same as the religion category “Islam.” MONSTAT marks values with frequency below 10 as `z` (protected), and a dash as no occurrence; protected values are rendered below as **NULL (<10; protected)** rather than as zero. [1] [2]

### 2023 municipality baseline

| Municipality | Total | Bosniak identity | “Muslim” identity | Albanian identity | Turkish identity | Roma identity | Islam as religion |
|---|---:|---:|---:|---:|---:|---:|---:|
| Bar | 45,812 | 3,901 (8.52%) | 1,565 (3.42%) | 1,919 (4.19%) | 116 (0.25%) | 158 (0.34%) | 14,640 (31.96%) |
| Bijelo Polje | 38,662 | 12,315 (31.85%) | 2,916 (7.54%) | 55 (0.14%) | 15 (0.04%) | 134 (0.35%) | 17,202 (44.49%) |
| Pljevlja | 24,134 | 1,765 (7.31%) | 797 (3.30%) | **NULL (<10; protected)** | **NULL (<10; protected)** | 50 (0.21%) | 4,092 (16.96%) |
| Podgorica | 179,505 | 4,697 (2.62%) | 1,559 (0.87%) | 1,780 (0.99%) | **NULL (<10; protected)** | 3,431 (1.91%) | 18,776 (10.46%) |
| Rožaje | 23,184 | 19,627 (84.66%) | 738 (3.18%) | 1,176 (5.07%) | **NULL (<10; protected)** | 0 (no occurrence) | 22,378 (96.52%) |
| Ulcinj | 20,507 | 797 (3.89%) | 330 (1.61%) | 15,078 (73.53%) | 17 (0.08%) | 259 (1.26%) | 15,769 (76.90%) |

These figures show sharply different contemporary patterns. Rožaje is overwhelmingly Bosniak by self-identification and Islamic by religion; Ulcinj is overwhelmingly Albanian by self-identification, with a large Islamic majority; Bijelo Polje combines a large Bosniak population with a substantial Serbian-identified population; Bar is more mixed; Pljevlja is majority Serbian-identified and Orthodox but retains a sizeable Muslim religious minority; Podgorica is the largest and most heterogeneous municipality, with the country’s largest Roma count among the six. [2] The Rožaje municipal profile republishes the same MONSTAT identity figures and adds the local interpretation that repeated out-migration has been a major demographic brake. [3]

### Language data useful for the Atlas

The MONSTAT mother-tongue table gives the following counts for categories most relevant to this project. These are **mother tongue**, not ethnicity or religion; the separate “language usually spoken” table is similar but not identical. [2]

| Municipality | Bosnian mother tongue | Albanian mother tongue | Turkish mother tongue | Roma mother tongue |
|---|---:|---:|---:|---:|
| Bar | 2,110 (4.61%) | 2,030 (4.43%) | 110 (0.24%) | 187 (0.41%) |
| Bijelo Polje | 7,894 (20.42%) | 51 (0.13%) | **NULL (<10; protected)** | 129 (0.33%) |
| Pljevlja | 972 (4.03%) | 18 (0.07%) | **NULL (<10; protected)** | 20 (0.08%) |
| Podgorica | 2,425 (1.35%) | 2,533 (1.41%) | 959 (0.53%) | 2,923 (1.63%) |
| Rožaje | 17,167 (74.05%) | 1,006 (4.34%) | **NULL (<10; protected)** | 0 (no occurrence) |
| Ulcinj | 405 (1.97%) | 15,233 (74.28%) | 14 (0.07%) | 101 (0.49%) |

The pattern is especially useful for preventing category collapse. Ulcinj’s Albanian identity and Albanian mother-tongue shares are both about three-quarters, while Rožaje’s Bosniak identity share is higher than its Bosnian mother-tongue share. In Pljevlja, the modern Bosnian-language share is small, but the Ottoman-era evidence below shows that nineteenth-century administrative descriptions could explicitly distinguish Turkish knowledge from Bosnian speech. This is a warning against translating Ottoman labels such as “Muslim,” “Turk” or “Türkçe bilen” directly into modern ethnic categories.

## Town and municipality briefs

### Podgorica / Ottoman Depedögen–Podgorica

The best verified Ottoman administrative statement is that Podgorica was conquered in the mid-fifteenth century and attached as a **kaza to the Sanjak of Skadar (İşkodra)**. Pepiç’s Turkish-language history is based on Montenegrin, Ottoman and regional literature and points specifically to the two defters of Montenegro from the period of Skender-beg Crnojević as a major primary-source lead. [4]

For heritage, Podgorica retains an Ottoman clock tower. Alihodžić’s architectural study places Podgorica among four Montenegrin towns with substantially authentic Ottoman clock towers (the others are Pljevlja, Bar and Ulcinj); it treats these towers as surviving urban landmarks rather than as proof of a single homogeneous urban population. [5]

The 2023 municipality is large and internally diverse: 2.62% Bosniak, 0.87% “Muslim” by identity, 0.99% Albanian, 1.91% Roma and 0.53% Turkish by identity; 10.46% declared Islam. The Turkish identity count is protected (**NULL**), but Turkish mother tongue is reported at 959 (0.53%), a useful example of why identity, mother tongue and religion must be kept in separate GIS fields. [2]

**Archival/GIS priority:** obtain the two Crnojević-era defters cited by Pepiç and link kaza-level place names to modern settlement polygons. The exact defter folios, a verified Ottoman toponym list, and a city-proper demographic series are **NULL** in the open sources reviewed.

### Pljevlja / Taşlıca

Pljevlja has the strongest Ottoman urban and archival documentation of the six places. Machiel Kiel’s TDV İslâm Ansiklopedisi entry reports that the pre-Ottoman settlement was first noted in 1430; the Ottomans annexed the region in 1465, attached it to Kukanj nahiye, and conducted a survey three years later. The 1468 register counted 72 households, and the 1477 record 101 households, described as Christian. In 1520 the settlement had 133 households, including three Muslim households. Between 1520 and 1570 it developed into a predominantly Muslim town; the source gives 195 households, of which 125 (about 64%) were Muslim. [6]

Pljevlja became a kadi centre before 1532 and in 1572 the seat of the Herzegovina sanjak was transferred there. The town remained an important Herzegovinian administrative and commercial centre until 1833. The same entry cites Ottoman records including **Başbakanlık Arşivi TD 5 (1468), MAD 22977 (1520), and TK TD 483 (1585)**. A 1585 record gives 125 Muslim and 51 Christian households after a plague-era decline. [6]

The surviving heritage core includes the Hüseyin Paşa Mosque and an Ottoman clock tower. Kiel also records the mosque’s 1579 Qur’an manuscript and the nearby Sveta Trojica monastery’s library, which is described as holding a substantial collection of Ottoman documents. The latter claim should be checked against the monastery’s own catalogue before being used as a document-level GIS assertion. [6] Alihodžić describes Pljevlja’s tower as the oldest and most lavish of the five Ottoman-period clock-tower sites in Montenegro. [5]

After the 1878 settlement, Taşlıca and the surrounding district were placed with Akova/Bijelo Polje, Plav, Gusinje and Rožaje in the new Kosovo vilayet. The 1880 reorganization created a separate Sanjak of Pljevlja (Taşlıca) in the Kosovo vilayet; Austria-Hungary maintained a military presence in the Sanjak of Pljevlja from 1879 to 1908 while sovereignty remained Ottoman. [6] [7]

The CANU edition **Turski (osmanski) izvori za istoriju Crne Gore — Pljevaljski sidžil** is a major research gateway: it was published in 2021, edited by Šerbo Rastoder, has 836 pages, and carries ISBN 978-86-7215-494-8 and COBISS.CG-ID 17505540. [8] The catalogue page does not establish the manuscript’s full date range or provide open folio-level digitization; those fields are **NULL** pending inspection of the volume and/or the underlying register.

In the 2023 municipality, 7.31% identify as Bosniaks, 3.30% as “Muslims,” and 16.96% profess Islam. Albanian and Turkish identity counts are protected and therefore unresolved, not zero. The Muslim religious share is considerably larger than the modern “Muslim” identity category, which is exactly why both fields should be preserved. [2]

### Bijelo Polje / Akova, Bihor

The Ottoman history of Bijelo Polje is tied to **Bihor** and the Lim valley. Temizer’s Turkish-language study reports that the area was a rural caravan stop before Ottoman consolidation; Bihor appears in Ottoman records from 1483–1491, and Akova/Bijelo Polje became the important urban centre of the nahiye. The study distinguishes earlier names including Nikoloj Pazar and Bijelo Polje and says that “Akova” became the Ottoman-period name from 1667. [9]

The study’s administrative sequence is: Bihor nahiye initially attached to the Skadar vilayet; transfer with Akova to the Sanjak of Novi Pazar and Bosna vilayet in 1855; kaza status in 1857; attachment to Kosovo vilayet in 1877. These dates should be checked against the cited Bosnian and Kosovo vilayet salnames before publication as a definitive boundary layer. [9]

Material heritage is unusually legible in the Akova study. It identifies the 1640 conversion of the St Peter church into the Fethiye Mosque as a turning point in the formation of the town and states that more than 20 mosque records can be found for the Ottoman period, while warning that published mosque counts differ. The study also notes that a 1902 fire and the failure to connect the town to the expanding railway contributed to out-migration, including movement toward Berane. [9]

Bijelo Polje’s 2023 municipality is 31.85% Bosniak by identity, 7.54% “Muslim” by identity and 44.49% Islamic by religion. Its Albanian and Turkish identity categories are small but not fully suppressed (55 and 15 respectively), and Roma identity is 134. [2]

**Archival/GIS priority:** connect the Bihor/Akova references to the 1483–1491 records and the 1857/1877 salnames cited by Temizer. Exact archive call numbers and page/folio extracts for the Bihor registers are **NULL** in the open article; the published study is a secondary guide, not a substitute for the registers.

### Rožaje

Rožaje belongs in the northeastern Sandžak/borderland layer rather than being treated as a generic “Muslim town.” The 2023 municipality has the highest Bosniak identity share of the six (84.66%), 96.52% Islamic by religion, 5.07% Albanian identity and 3.18% “Muslim” identity. The municipality reports no Roma identity occurrence and a protected Turkish identity count; both should be stored as `0` and `NULL (<10; protected)` respectively, not conflated. [2] [3]

The Rožaje municipal profile states that sustained out-migration occurred in several waves, explicitly naming 1914, 1924 and 1992, with destinations including Turkey, Bosnia and Herzegovina, North Macedonia, Kosovo and Metohija, and later western Europe. This is a local-government summary rather than a verified migration register; it is suitable as a hypothesis and oral-history lead, but the underlying counts and household lists are **NULL**. [3]

The strongest regional administrative clue comes from the Taşlıca and Sanjak sources: after 1878, Rožaje was grouped with Akova, Plav and Gusinje in the Kosovo-vilayet reorganization, while the 1880 Sanjak of Pljevlja was separated from the remaining Sanjak of Novi Pazar. [6] [7] The Sanjak of Novi Pazar source describes the region as inhabited by Serbs, Montenegrins, Albanians, Turks and Slav Muslims and emphasizes continuous migration across the post-1878 frontier. [7]

A verified open Ottoman court register, detailed salname table, or settlement-level Ottoman population series for Rožaje was not located in the sources checked: **NULL**. Heritage documentation for Rožaje is also **NULL** at the level needed for a defensible Atlas layer; a local monument inventory and cadastral/waqf evidence should be obtained before naming specific towers, mosques or family houses.

### Bar / Antivari

Bar was part of the southern Ottoman/Skadar sphere. Memić’s study of Islamization in present-day Montenegro dates the occupation of Bar and Ulcinj to 1571, after the longer sequence of Ottoman advances from the late fourteenth century through the attachment of the Crnojević-ruled Montenegro to the Sanjak of Skadar in 1496. [17]

The Bar fortress was a frontier settlement with military, fiscal and agricultural functions. Erler and Mlacović’s Turkish-language study, based on an archival sketch of Bar Castle, covers Ottoman life in the fortress from 1523 to 1881 and treats it as a serhat city where the Ottomans maintained earlier urban elements while adding new military and productive functions. [10] A separate architectural study identifies Bar’s surviving Ottoman clock tower as one of the four substantially authentic Ottoman clock towers in Montenegro. [5]

Bar’s 2023 municipality is more mixed than Ulcinj or Rožaje: 8.52% Bosniak, 3.42% “Muslim,” 4.19% Albanian, 0.25% Turkish and 0.34% Roma by identity; Islam is 31.96% of the municipality. Albanian and Bosnian mother tongues are close in size (2,030 and 2,110), while Turkish mother tongue is 110. [2]

A verified open Bar kaza defter or court-register series, and a city-proper Ottoman-to-post-1878 population sequence, are **NULL** in the reviewed sources. The Bar Castle sketch identified by Erler and Mlacović should be prioritized for scanning, georeferencing and extraction of named buildings, streets, military functions and tax/economic information.

### Ulcinj / Ülgün, Ulqin

Ulcinj is the clearest Albanian-Muslim centre in the current dataset. In 2023, 73.53% of the municipality identified as Albanian, 76.90% declared Islam, and Albanian was the mother tongue for 74.28%. Bosniak, “Muslim,” Turkish and Roma identity categories are present but small. [2]

The Ottoman administrative affiliation is well supported in the accessible literature. The CEEOL record for Hadžibrahimović’s Bosnian-language study states that Ottoman Ulcinj was in the Sanjak of Skadar and that the city’s urban form acquired an oriental character as Muslim and Albanian population increased. The article focuses on Albanian-Muslim education and culture from the mid-nineteenth to the early twentieth century, but its full text is paywalled; the record is therefore a bibliographic and abstract-level source, not a substitute for its institutional case studies. [11]

UNESCO’s Tentative List describes the Old Town as a nationally protected cultural property since 1961 and identifies Ottoman layers from 1571 to 1878. It emphasizes the interweaving of Mediterranean/Venetian and Ottoman forms, including fortification layers, narrow streets, residential types and Ottoman organizational elements such as the divanhan, musander and hamam. [12] Alihodžić places Ulcinj’s clock tower among the authentic Ottoman-period towers of Montenegro. [5]

Ulcinj’s Ottoman-era population should not be reduced to a single ethnographic label. The city’s Albanian language and identity majority is historically compatible with the Ottoman record of an Albanian-speaking Muslim and Catholic borderland, while the modern census also records people selecting Bosniak, “Muslim,” Turkish and Roma categories. The exact Ottoman defter, court-register and waqf series for Ulcinj, and quantified migration totals after 1878, remain **NULL** in the open sources reviewed.

## Ottoman administrative records and border zones

### Administrative sequence to encode

1. **Late fourteenth–1496:** Memić’s synthesis describes Ottoman advances through Jelač, Srednje Polimlje and Potarje, from Skadar into the Zeta valley, and from Herzegovina toward Novi/Onogošt, Komarnica and Piva. It places the attachment of the Crnojević-ruled Montenegro to the Sanjak of Skadar in 1496. This is a regional conquest framework, not a settlement-level chronology. [17]
2. **1465–1572:** Pljevlja/Taşlıca moves from Kukanj nahiye to kadi-centre and then Herzegovina-sanjak headquarters; the TDV entry provides the clearest defter-backed sequence. [6]
3. **1571:** Bar and Ulcinj enter the Ottoman sphere, and Ulcinj is administratively tied to the Sanjak of Skadar in the accessible Bosnian-language study. [11] [17]
4. **1855–1857:** Akova/Bijelo Polje and Bihor are reported as transferred from the Skadar sphere to the Sanjak of Novi Pazar/Bosna vilayet, with kaza status by 1857. [9]
5. **1853 cartographic frame:** An Ottoman map held in the Ottoman Archives of the Presidency in Istanbul (BOA, HRT.h 102) covers the Sanjaks of Herzegovina and Skadar. It marks their boundary, roads, settlements, mineral deposits and the Adriatic outlets at Klek and Sutorina. In the Ottoman cartographic conception, Montenegro is represented within the Skadar sanjak rather than as an independent state unit. [13]
6. **1858–1860 boundary work:** The Belleten study documents an international engineers’ commission that met in Ragusa/Dubrovnik in July 1858 to work from the 1856 de facto status quo. It cites Ottoman Foreign Ministry and other BOA series including HR.MKT, A.MKT.MHM, İ.HR and A.AMD. The source is strong for the diplomatic/engineering process, but the exact GIS line and all boundary markers have not been digitized here: **NULL**. [14]
7. **1878–1880:** The Treaty of Berlin made the Sanjak a strategic buffer intended to prevent a Serbia–Montenegro land bridge and preserve an Ottoman link around occupied Bosnia-Herzegovina. In 1880 the northern part became the separate Sanjak of Pljevlja/Taşlıca in the Kosovo vilayet; Austro-Hungarian troops occupied the area from 1879 to 1908 while Ottoman sovereignty formally continued. [7]
8. **1912–1913:** The First Balkan War divided the Sanjak between Serbia and Montenegro. The border created then remains the principal state boundary through the modern Sandžak. [7]

### Borderland social categories

Reinkowski’s study of the Ottoman borderlands in Northern Albania is particularly useful because it treats the frontier as a negotiated zone, not a clean ethnic line. It identifies two Ottoman–Montenegrin fronts: one toward Herzegovina and one toward Northern Albania. Ottoman officials balanced co-optation, taxation concessions and military control, while local populations used shifting allegiance to increase bargaining power. [15]

The source describes the northern Albanian side as including Albanian-speaking Muslims and Catholics, and notes mixed tribal formations in which Albanian and Montenegrin elements, Orthodox Christians, Muslims and Catholics coexisted. It cites 1862 evidence for lower Vasojevići/Vasovik of 1,052 Muslim and 1,028 Orthodox households. This figure is a borderland case study, not a population count for Rožaje or any of the six municipalities; it should not be transplanted into the Atlas city table. [15]

For the Sandžak side, the 1914–1918 Online entry reports a population composed of Serbs, Montenegrins, Albanians, Turks and Slav Muslims and emphasizes constant migration: Bosnian-Herzegovinian Muslims moved after the 1878 Habsburg occupation, Muslims moved from Montenegro, and Orthodox populations often moved toward Serbia. [7] Brill’s 2023 chapter likewise frames Muslim migration from Montenegro between 1870 and 1914 as forced displacement and coerced movement, with migrants integrated into frontier defence and Ottoman bureaucracy. It does not provide town-level counts for the six municipalities. [16]

## Heritage and map/GIS implementation notes

### Heritage layers

The first-pass heritage layer should include:

- **Podgorica:** Ottoman clock tower; exact surviving mosque/waqf inventory **NULL** in the reviewed open sources. [5]
- **Pljevlja:** Hüseyin Paşa Mosque, Ottoman clock tower, the 1579 Qur’an manuscript cited by Kiel, and Sveta Trojica monastery as a potential Ottoman-document repository pending catalogue verification. [5] [6]
- **Bijelo Polje:** Fethiye Mosque, converted from St Peter church in 1640 according to the Akova study; other mosque counts require source reconciliation. [9]
- **Bar:** Bar Castle/Stari Bar archival-sketch layer and Ottoman clock tower. The 2016 study is a useful bridge between archival mapping and material archaeology. [5] [10]
- **Ulcinj:** protected Old Town, citadel and ramparts, Ottoman-period urban and residential layers, and clock tower. [5] [12]
- **Rožaje:** **NULL** pending a verified municipal monument register, waqf/cadastral sources or an architectural survey.

### Cartographic sources

Three source families are ready for a historical GIS workflow:

1. **1853 Ottoman BOA map, HRT.h 102.** The map is 74 × 47.5 cm, assembled from 12 numbered pieces, and carries Ottoman labels for the Herzegovina and Skadar sanjaks, Montenegro/Kara Dağ, roads, distances in hours, borders and mineral deposits. It is the best source checked for the mid-nineteenth-century administrative imagination, but its authorship and exact production method remain partly unresolved. [13]
2. **1869/1875 Montenegro vicinity map in the Duke Ottoman Empire Maps collection.** The catalogue describes a 105 × 110 cm, 24-piece cloth-mounted map prepared in 1875 from an Austrian 1869 military-geography map and Ottoman 1852 Montenegro campaign maps. It covers Montenegro, Albania and Shkodër from a geographical and administrative perspective. The item identifier is RL.11740-M-003, ARK `ark:/87924/m1cw6x`. [19]
3. **Library of Congress Montenegro collections.** The LOC guide reports hundreds of regional maps, including a Montenegro title collection for approximately 1685–1970 and maps catalogued under “Turkey in Europe” that are relevant to the Ottoman period. It also points to digitized maps and the Geography and Map Reading Room for uncatalogued or collection-level material. [18]

### Suggested GIS schema

Create separate feature classes or layers for: `places_modern`, `places_ottoman`, `administrative_units`, `borders_claimed`, `heritage_sites`, `migration_events`, `source_documents`, and `census_municipalities`. Each place record should carry `modern_name`, `historical_names`, `language_variants`, `source_date`, `administrative_parent`, `source_id`, `confidence`, and `notes`. Do not store “Muslim,” “Bosniak,” “Albanian,” “Turkish” and “Roma” in one ethnicity field without a `variable_type` field that distinguishes modern identity, Ottoman administrative label, religion, mother tongue and language usually spoken.

For boundaries, create time slices for at least 1465, 1496, 1571, 1572, 1853, 1855, 1857, 1877, 1878, 1880 and 1912. The 1853 map should be georeferenced as a historical representation, with an explicit `cartographic_status = interpreted/uncertain`; the 1858–60 engineer-commission line should remain a separate layer until the BOA/commission maps and boundary markers are extracted. A source-aware map should distinguish the Ottoman claim that represented Montenegro inside the Skadar sanjak from the de facto autonomous/independent Montenegrin territory recognized in changing diplomatic practice.

## NULL / unresolved items requiring the next research pass

- **City-proper demographics:** MONSTAT figures above are municipality totals. Settlement-level tables for the six named urban centres are not extracted here: **NULL**.
- **Cross-tabulation:** No cited open MONSTAT table cross-tabulates national identity with religion or language. A Bosniak identity count cannot be converted into a Muslim religious count: **NULL**.
- **Ottoman records outside Pljevlja:** Open, folio-level defter, sicil or waqf evidence for Rožaje, Bar and Ulcinj was not verified. **NULL**.
- **Pljevlja sidžil coverage:** CANU’s 2021 catalogue confirms the edition, but the manuscript date span, folio-level names and digitized access are **NULL** from the catalogue page alone. [8]
- **Rožaje heritage:** a reliable, source-cited Ottoman monument inventory is **NULL** in the reviewed sources.
- **Bar and Ulcinj migration counts:** the existence of post-1878 Muslim migration is well supported regionally, but town-level totals, destinations and household-level series are **NULL**.
- **Albanian-language city series:** Albanian search terms surfaced useful Ulcinj bibliographic leads, but no open, independently verifiable Albanian-language town-level Ottoman demographic series was validated in this pass. **NULL**.
- **Exact 1858–60 border geometry:** the commission and BOA file series are identified, but the line, marker coordinates and settlement-by-settlement consequences are **NULL** pending map extraction.
- **“Turk” in Ottoman sources:** modern Turkish identity counts are small or protected, while Ottoman administrative texts may use Turkish language, office or imperial categories rather than modern ethnicity. Direct equivalence is **NULL** and should not be inferred.
- **Roma historical continuity:** the 2023 census supplies modern Roma identity, mother-tongue and language values, but no city-level Ottoman Roma register was verified. Historical continuity claims for the six municipalities are **NULL**.

## References

[1]: https://www.monstat.org/eng/page.php?id=1758 "MONSTAT, The 2023 Census of Population, Households, and Dwellings — methodology and releases"

[2]: https://www.monstat.org/uploads/files/popis%202021/saopstenja/SAOPSTENJE_Popis%20stanovnistva%202023%20II_ENG.pdf "MONSTAT, Population of Montenegro by National/Ethnical Affiliation, Religion, Mother Tongue, and Language Usually Spoken, Census 2023"

[3]: https://www.rozaje.me/stanovnistvo/ "Opština Rožaje, Stanovništvo — demographic profile based on MONSTAT 2023"

[4]: https://dergipark.org.tr/en/pub/otam/article/132393 "Adnan Pepiç, Podgorica’nın Kısa Bir Tarihçesi, OTAM 18 (2005)"

[5]: https://metujfa.arch.metu.edu.tr/index.php/jfa/article/view/2019.2.6 "Rifat Alihodžić, Clock Towers From The Ottoman Period In The Territory of Today’s Montenegro, METU Journal of the Faculty of Architecture 36/2 (2019)"

[6]: https://islamansiklopedisi.org.tr/taslica "Machiel Kiel, Taşlıca, TDV İslâm Ansiklopedisi (2019)"

[7]: https://encyclopedia.1914-1918-online.net/article/sanjak-of-novi-pazar/ "Tamara Scheer, Sanjak of Novi Pazar, 1914–1918 Online (2015)"

[8]: https://canupub.me/knjiga/turski-osmanski-izvori-za-istoriju-crne-gore-pljevaljski-sidzil/ "CANU, Turski (osmanski) izvori za istoriju Crne Gore — Pljevaljski sidžil, Book 2/Volume I (2021)"

[9]: https://makale.isam.org.tr/bitstreams/1f8b832e-64df-477d-94ee-ac5e3f9ae5a6/download "Abidin Temizer, Osmanlı’nın Balkanlarda Kurduğu Bir Şehir: Akova (Bijelo Polje)"

[10]: https://dergipark.org.tr/en/pub/ohsc/article/285780?issue_id=27166 "Mehmet Yavuz Erler and Dušan Mlacović, Antik Bir Kalede Osmanlı Tarzı Yaşam: Adriyatik Bar Kalesi (1523–1881)"

[11]: https://www.ceeol.com/search/article-detail?id=533695 "Maksut Dž. Hadžibrahimović, Razvitak albanske-muslimanske prosvjete i kulture u Ulcinju od sredine XIX do početka XX vijeka, Almanah 48–49 (2010)"

[12]: https://whc.unesco.org/en/tentativelists/6300/ "UNESCO World Heritage Centre, Old Town of Ulcinj, Tentative List entry 6300"

[13]: https://hrcak.srce.hr/clanak/472180 "Edina Korić, An Ottoman Map of Sanjak of Herzegovina and Sanjak of Scutari from 1853, BOSNIACA 29 (2024)"

[14]: https://belleten.gov.tr/tam-metin/209/tur "Osmanlı-Karadağ Sınır Tespiti (1858–60), Belleten"

[15]: https://d-nb.info/1123416311/34 "Maurus Reinkowski, Double Struggle, No Income: Ottoman Borderlands in Northern Albania, International Journal of Turkish Studies 9 (2003)"

[16]: https://brill.com/display/book/9789004543690/BP000012.xml?language=en "Denis Ljuljanović, Seeking a Homeland, Serving the Empire: Muslim Migrants from Montenegro and Their Integration within the Ottoman Bureaucracy (1870–1914), Brill (2023)"

[17]: https://www.ceeol.com/search/article-detail?id=209834 "Mustafa Memić, Nastanak i širenje islama u sadašnjim granicama Crne Gore, Prilozi za orijentalnu filologiju 41 (1991)"

[18]: https://guides.loc.gov/montenegro/special-collections-maps "Library of Congress, Montenegro and the Montenegrin Collections — Geography and Maps"

[19]: https://archives.lib.duke.edu/catalog/ottomanempiremaps_aspace_d743112cacc06aa117fa2a3e609d1bcf "Duke University Libraries, Karadağ ve civarının haritası / A Map of Montenegro and its vicinity, 1869/1875"

# Serbia and Sandžak — Rumelia Atlas research memo

## Core findings for the atlas

The Serbia–Sandžak zone should be modelled as a sequence of changing Ottoman and post-Ottoman administrative spaces, not as a single timeless region. The main historical units are the Bosnian eyalet/vilayet, the Novi Pazar (Yeni Pazar) sanjak, the Niš sanjak, the Kosovo vilayet, and the Serbian districts created or enlarged after 1878. In modern usage, Sandžak is a cross-border historical region rather than an administrative unit. Its Serbian side commonly includes Novi Pazar, Tutin, Sjenica, Prijepolje, Priboj and Nova Varoš; its Montenegrin side includes Bijelo Polje, Rožaje, Plav, Pljevlja, Berane and Andrijevica. [1] [2] [3]

The source record is unusually good for historical geography but uneven for ethnicity. Ottoman **tahrir defters** are fiscal-administrative registers. Their basic unit is normally the taxable adult male or household head, listed under a settlement, not a modern individual census. They record names, patronyms, land, crops, livestock, taxes, settlement type and, in some series, waqf income. Mufassal (detailed), icmal (summary) and evkaf (waqf) registers must be distinguished. A tahrir can support settlement history, approximate demographic reconstruction and GIS, but it cannot be read as a modern ethnic census. [4] [5]

The most important rule for the Atlas is therefore: **keep religion, language, imperial category and later national self-identification in separate fields**. “Muslim” in a defter or 19th-century administrative table is not synonymous with Bosniak, Albanian or Turk. The 1873 Ottoman inventory of the Niš sanjak classified the urban Muslim population partly by language: Niš and Pirot were described as mostly Turkish-speaking; Vranje and Leskovac as Turkish and Albanian; Prokuplje and Kuršumlija as mostly Albanian. This is useful evidence, but it is not a direct ethnicity count and it covers cities, not every village in the district. [6]

## Place dossiers

### Novi Pazar / Yeni Pazar

Novi Pazar was an Ottoman foundation associated with İsa Bey Ishaković, built at the junction of the Bosnia, Zeta and Dubrovnik roads. The early urban complex included a mosque, imaret, double bath, caravanserai, 56 shops and mills. The older Ras/Trgovište landscape was gradually displaced by a market and administrative city oriented toward Bosnia, Niš, Skopje, Thessaloniki, Sofia and Istanbul. [1] The Institute of Archaeology’s interdisciplinary study is useful for mapping this transition from medieval Ras to Ottoman Novi Pazar and for treating the city as a change in cultural landscape rather than as a simple replacement of population. [7]

The Yeni Pazar entry gives a valuable sequence of tahrir snapshots:

- In 1468, the city had 276 households: 75 Muslim and 201 Christian, with the source’s rough conversion of about 380 and 1,000 persons respectively.
- In 1485, five Muslim and Christian quarters contained 167 Muslim households and 71 Christian households, plus two Ragusan families.
- A later late-15th-century register records 152 Muslim and 54 Christian households.
- In 1516, the register lists 367 Muslim and 76 Christian households.
- By 1530, Muslims made up approximately 84% of the city population; the city had two mosques, five mescids and twelve quarters.
- In the second half of the 16th century, 451 Muslim households, 65 unmarried Muslim men and 47 Christian households were recorded.
- The 1604 register lists three mosques, 13 mescids, 18 Muslim quarters and four Christian quarters. [1]

These numbers are best represented as **register-specific household or adult-male observations**, with a separate `estimated_persons` field only when the source itself supplies an estimate. They should not be plotted as directly comparable percentages without recording the register date, unit and coverage.

Novi Pazar became a sanjak centre in the Bosnian administrative system in 1584 and remained strategically important in the 18th century. In the 1865 reorganization of the Bosnian vilayet, the sanjak’s centre was Sjenica and it included ten kazas: Novi Pazar, Sjenica, Pljevlja, Nova Varoš, Prijepolje, Bijelo Polje, Kosovska Mitrovica, Berane, Kolašin and Eskipazar/Trgovište. [1] After the Berlin settlement, the territory was transferred from the Bosnian to the Kosovo administrative orbit and was reorganized in 1880. Austria-Hungary received the right to station troops in the sanjak, but its troops were concentrated in the northern Pljevlja sector; they did not occupy Novi Pazar town. [2] [3]

The Ottoman urban landscape is documented through tahrirs, waqf records, travel accounts and surviving monuments. The 1528 and 1540 waqf evidence includes mosques, mescids, tekkes, imarets, schools, a madrasa, baths, caravanserais, shops, bridges, mills and bakeries. A Turkish study identifies Muslim quarter names such as Kapıcıbaşı, Voyvoda Hamza, Voyvoda Ahmed, Ak İlyas and İsa Bey, and links them to waqf institutions. [8] Evliya Çelebi’s 1660 description should be stored as a travel-account layer rather than as a literal building inventory: it names Altun Alem, Gazi İsa Bey, Hacı Muhterem and Taşköprü mosques, as well as mescids, madrasas, schools, baths, hans and shops. [1] [8]

Standing and recently altered heritage is a major atlas theme. The Novi Pazar tourism organization identifies Altun Alem Mosque as a 16th-century protected monument within the “Novi Pazar Fortress–old bazaar–Altun Alem complex,” built by Muslihedin Abdul Gani and located on the former imperial road toward Mitrovica, Skopje and Istanbul. Its conservation record also warns that later reconstruction reduced authenticity. [9] IRCICA’s inventory gives Lejlek Mosque a 15th-century date, coordinates at approximately 43°08′37.79″ N, 20°31′11.01″ E, and a history of repeated burning and destruction. [10]

The heritage layer must also record loss and intervention. BIRN reported that the protected Arap Mosque, dated 1528, was demolished during a 2018 “renovation”; the Kurd Celebi Mosque, dated 1604, was radically altered; and other historic mosques, including Hadži Hurem Bor, Gazi Sinan Beg, Hajrudin Bajramli and Iskender Celebi, were partially or completely rebuilt. Altun Alem and Lejlek retained the most authentic exterior among the sites discussed in that report, although their interiors had also been affected by unprofessional restoration. [11]

### Sjenica / Seniçe

Sjenica should be represented as a strategic highland settlement and a changing administrative centre, not merely as a modern municipality. Ottoman records and a 2025 Turkish master’s thesis frame it as a frontier and communications node whose status moved from nahiya to kaza and eventually to sanjak-level importance. The same study focuses on Sjenica Castle as a military and administrative symbol within the Bosnian strategic line. [12]

Sjenica became the centre of the enlarged Novi Pazar sanjak in the 1865 Bosnian vilayet arrangement. [1] Its most visible late-Ottoman monument is the Valide Sultan Mosque, built in 1870 by Pertevniyal Sultan, mother of Sultan Abdülaziz. The mosque was registered as a cultural monument in 1989; TİKA planned restoration according to the original plan. The building suffered the loss of its lead dome covering in 1917 and damage during the Second World War. The surviving mihrab, mahfil and wooden columns are particularly useful for the heritage record. [13]

Sjenica is also important for demographic caution. Present-day reporting often describes it as predominantly Bosniak, but late Ottoman and modern categories are not identical. A Rumelia Atlas entry should store Ottoman Muslim/Christian observations, later Bosniak/Muslim census identifications and the language/ethnicity classifications of any specific source in separate fields. Do not backcast the modern Bosniak category into the 15th- or 16th-century tahrirs.

### Tutin

Tutin lies in the historical Novi Pazar–Sjenica zone and should be mapped as a settlement network node linked to roads, pastureland and rural administrative units rather than assumed to have been a major Ottoman town. A 2023 study of Sandžak waqfs found records for 73 waqfs in the region’s identifiable towns, but no waqf document for Tutin or Rožaje. The authors interpret this absence as evidence that the two places were small villages in the Ottoman period and that their populations were largely Christian at the time. This is a research lead, not a final demographic conclusion: absence of a located waqf record may also reflect archive survival, cataloguing or jurisdictional problems. [8]

For Tutin, prioritize village-level tahrir and cadastral entries, Ottoman place-name variants, later salname records, Serbian post-1912 and post-1945 censuses, and oral-history or cemetery mapping. Tutin is a good test case for the Atlas’s distinction between **urban mosque/waqf visibility** and **rural settlement continuity**.

### Niš

Niš was a major Ottoman centre and the administrative heart of the Niš sanjak. In the 1873 Ottoman inventory, the Niš district had 17,107 Christian and 4,291 Muslim men; urban housing was recorded as 3,500 Christian and 2,000 Muslim houses; the city population was estimated at 18,255; and the urban Muslim population was described as Turkish-speaking. [6] These are not equivalent units: the table combines male counts, houses and city inhabitants. The Atlas should preserve the original unit in every field.

The Serbian Statistical Office’s 1879 census of the newly liberated districts is important for the transition from Ottoman to Serbian rule. It covered the districts of Niš, Pirot, Vranje and Toplica and collected houses and families, inhabitants by sex, marital status and religion, and head-tax information. [14] The 1884 Serbian census then published data by municipality and settlement, including sex, marital status, literacy, ethnicity and religion. [14]

The best-known surviving Ottoman monument in Niš is the Bali-Bey Mosque inside Niš Fortress, built in 1521–23; the building is rectangular, with an entrance porch and central dome, and is now a former mosque used within the fortress heritage complex. [15] The fortress itself is a layered Roman–Byzantine–Ottoman–modern site, so the Atlas should map the mosque separately from the fortification polygon and retain construction and reconstruction phases.

Niš is also an archival priority. The Serbian archive project specifically identifies defter material for Niš, alongside Belgrade, Pirot, Vranje, Leskovac, Kruševac, Čačak, Užice and other settlements, including places that later disappeared or changed names. [16] The immediate research objective should be to locate the Niš kaza entries, extract settlement spellings, and align them with the 1873 Ottoman inventory and the 1879/1884 Serbian census geography.

### Leskovac

Leskovac belonged to the Niš sanjak before the Serbian conquest of 1877–78. The 1873 inventory records 21,030 Christian and 10,525 Muslim men in the district; urban housing was listed as 2,500 Christian and 1,000 Muslim houses; the city population was estimated at 13,445; and the urban Muslim population was described as half Turkish and half Albanian by language. [6]

Leskovac is therefore a key place for a **Turkish-speaking Muslim / Albanian-speaking Muslim distinction**, but not for treating those labels as modern national identities. The same source’s discussion of the 1877–78 war estimates that Muslim emigration from the new Serbian regions was substantially larger than the often-repeated figure of 30,000 Albanians: at least 71,000 Muslims emigrated, of whom about 49,000 were Albanians. [6] Leskovac should be mapped as both a pre-war mixed urban district and a post-war transformation zone, with property abandonment, refugee movement and new Serbian administrative boundaries as separate layers.

The local built heritage requires a targeted inventory of vanished mosques, baths, markets and Muslim-owned properties. Serbian heritage scholarship emphasizes that Ottoman monuments were systematically demolished or erased in many towns after uprisings, independence and later nation-state consolidation. The absence of standing monuments in Leskovac should therefore not be treated as evidence of an absence of Ottoman urban infrastructure. [17]

### Vranje

Vranje was also part of the Niš sanjak before 1878. The 1873 table records 30,061 Christian and 12,502 Muslim men in the district, with 2,500 Christian and 800 Muslim urban houses and an estimated city population of 10,345. Urban Muslims were described as approximately half Turkish-speaking and half Albanian-speaking. [6]

Vranje should be a priority for Ottoman-to-Serbian transition mapping because the city combines a substantial Muslim population before 1878 with later demographic change. The Serbian census sequence—1879 in the liberated territory and 1884 with ethnicity and religion by settlement—offers the most direct way to measure the post-war transition, while the Ottoman defter collection in the Serbian archives is the route back to earlier village and kaza geography. [14] [16]

For Vranje and Leskovac, the Atlas should not collapse “Turk,” “Albanian,” “Muslim,” “Arnaut” and “Albanian-speaking” into one category. Use a controlled vocabulary with fields for `religion_as_recorded`, `language_as_recorded`, `ethnicity_as_recorded`, `later_census_identity` and `atlas_interpretation`.

### Belgrade and the Smederevo zone

Belgrade is the clearest example of a large Ottoman urban layer that was mostly demolished rather than preserved. Serbian heritage scholarship estimates that the city had up to 98,000 inhabitants in the 17th century and dozens of mosques; after the Ottoman withdrawal, all except Bajrakli and Batal mosques were destroyed, and Batal was later demolished, leaving Bajrakli as the surviving mosque. [17]

The surviving and documented traces include Bajrakli Mosque; Damad Ali-paša’s türbe in Belgrade Fortress; Sheikh Mustafa’s türbe near Students’ Square; a former hamam now used as a planetarium; and the site/history of the Kadiri tekke associated with Sheikh Mustafa. A Serbian urban-history account also names the former Ejnehan-beg, Bajram-beg and Kizlar-agina mosques and records 18th- and 19th-century sketches that can help reconstruct the Ottoman street and skyline. [18]

Belgrade should not be treated only as a monument point layer. The Serbian archive project reports documents on the city as a trading centre, including a 1526 record about the Sava bridge and its repair, river shipping on the Danube, port taxation and embankment works. Defters, tax lists, rent lists, payrolls and timar registers can support a broader urban-economic GIS of wharves, markets, bridges, religious institutions and property. [16]

The Belgrade–Smederevo corridor also matters for early modern migration. The Bosnian Institute’s Bosnian-language study of migration in the Bosnian eyalet warns against treating large refugee totals as a homogeneous ethnic mass and calls for tracing where different groups actually settled, including flows toward the Smederevo sanjak. [19]

## Population categories and how to encode them

**Muslim.** Use as a religious or administrative category when that is how the source records it. In the Yeni Pazar tahrirs it is a household/population classification, not a modern nation. In the 1873 Niš sanjak table it is a confessional category supplemented by an urban language description. [1] [6]

**Bosniak / Muslim.** Use “Bosniak” primarily for modern or late Yugoslav/Serbian/Montenegrin self-identification. The Princeton overview notes that the 1993 Sarajevo congress adopted “Bosniak” as a national term, while some people retained “Muslim” as a census identity. In Serbia’s 2002 census, the overview gives 1.82% identifying as Bosniak and 0.26% as Muslim, with Bosniak identification strongest in municipalities such as Novi Pazar and Tutin. These figures are modern census categories and must not be projected backward into Ottoman records. [20]

**Albanian.** Record only when the source explicitly says Albanian, Arnaut, Albanian-speaking or otherwise provides a comparable label. For 1873, the strongest evidence is the urban language classification for Vranje and Leskovac and the district-level description of Prokuplje and Kuršumlija. The 1877–78 emigration estimate is useful for migration modelling, but should be stored with its source, assumptions and uncertainty. [6]

**Turkish / Turk.** In the 1873 city table, “Turkish” is effectively a language-based description of urban Muslims. It may reflect language, identity, state usage or the compiler’s classification. Treat it as `language_or_source_category = Turkish`, not automatically as modern Turkish ethnicity. [6]

**Roma.** The 1866 Serbian census explicitly included all Gypsies, both settled and unsettled, which is an unusually important methodological note for Roma historical demography. Modern Sandžak sources describe Roma as a small population distributed across the region. Roma should therefore be tracked through census category, settlement, occupational and mobility records, not inferred from Ottoman Muslim/Christian counts. [14] [20]

**Serb / Orthodox / Christian.** Do not equate Ottoman Christian with Serbian. The tahrirs and 1873 tables may describe religion, household status or language rather than national identity. A later Serbian census may record ethnicity, but the category belongs to that census date and political context.

## Refugees, muhacir and demographic rupture

The 1877–78 war and the Berlin settlement produced a major demographic break. The new Serbian districts were Niš, Pirot, Vranje and Toplica. The 1879 Serbian census was ordered specifically to establish the population situation in the liberated territories. [14] The scholarly reconstruction of the 1873 Ottoman inventory argues that at least 71,000 Muslims emigrated from the new Serbian regions, including approximately 49,000 Albanians, and stresses that migration was larger and more consequential than older narratives suggested. [6]

The Novi Pazar sanjak simultaneously received Muslim migrants. The region’s mixed population included Serbs, Montenegrins, Albanians, Turks and Slav Muslims; Bosnian-Herzegovinian Muslims fled the Habsburg occupation in 1878, and Muslims from Montenegro also moved into the sanjak. Orthodox residents often moved toward Serbia. [3] This makes the sanjak a **receiving, transit and borderland space**, not merely a residual Ottoman territory.

The chronology should be extended backward. Bosnian-language scholarship on the Bosnian eyalet describes complex migration waves after 1683–99, including Muslim refugees from territories lost to the Habsburgs and Venice, onward movement toward other Ottoman eyalets and the need to disaggregate military, civilian, converted and locally rooted populations. [19] The Atlas should create event records with `date_or_range`, `origin`, `destination`, `status` (refugee, muhacir, deportee, emigrant, returnee), `group_as_recorded`, `source` and `confidence`, rather than a single “population replacement” layer.

## Archives, defters and Serbian census series

The primary source stack should be built in four levels.

1. **Ottoman administrative sources:** Tapu tahrir and Maliye defters for 15th–16th-century settlement and fiscal geography; evkaf and waqf registers for mosques, baths, shops, schools and revenue; mühimme, fermans and berats for administrative decisions; later nüfus defters, salnames and property records for the 19th century. The Turkish Presidency State Archives publishes catalogues and editions including *Osmanlı Yer Adları* (2017), the catalogue guide and the 1530 Rum-ili defter series. [5] [21]
2. **Serbian archive holdings:** The Archive of Serbia reported receiving approximately 15,000 digitized Ottoman documents and a further 7,000 in 2017 under a 2015 cooperation protocol with the Turkish state archives. The material includes defters for Belgrade, Niš, Vranje, Leskovac, Pirot, Kruševac, Čačak, Užice and settlements that disappeared or changed names. [16]
3. **Serbian statistical series:** The 1866 census is considered the first modern Serbian census and recorded sex, marital status, age, occupation, literacy and the settled and unsettled Roma population, although not all variables were processed. The 1874 census was more complete. The 1879 census covered the liberated southern districts and recorded houses, families, sex, marital status, religion and head tax. The 1884 census published settlement-level data on sex, marital status, literacy, ethnicity and religion. [14]
4. **Regional and municipal heritage archives:** Institute of Cultural Monuments records, waqf and vakuf registers, mosque inventories, cadastral plans, local museums, Islamic Community archives, cemetery surveys and building permits. The main problem is not only missing sources but also the systematic demolition or insensitive rebuilding of Ottoman monuments, which means documentary and archaeological proxies are essential. [11] [17]

## Historical maps and GIS plan

The most directly usable historical map located in this survey is the 1882 German-language *Generalkarte von Bosnien, der Herzegovina und dem Sandschak Novi-Bazar*, attributed to Anton Steinhauser and Artaria and preserved through Gallica. The Commons record provides the Gallica identifier `btv1b53021005d`, a 10,303 × 7,634 pixel scan and public-domain status. It is suitable for georeferencing roads, administrative boundaries, passes and settlement names, but its provenance and cartographic generalization should remain in the metadata. [22]

OldMapsOnline provides a practical discovery layer for Serbia and related place pages, including Belgrade, Jablanica, Pčinja and Toplica. Its timeline and map-search functions are useful for locating 18th–20th-century maps before georeferencing them against modern OpenStreetMap or official Serbian base data. [23]

The IPUMS MOSAIC Population History GIS Collection provides a ready-made Serbia 1865–1895 administrative-boundary series at district/srez level. It is freely usable for non-commercial scientific work after registration and citation. The collection also provides wider Europe and 1910 Austro-Hungarian boundary data, which can help align the Serbian census geography with the Habsburg military and border context. [24]

For a Rumelia Atlas, each settlement record should include:

- `canonical_name`, `historical_names`, `Ottoman_transliteration`, `Serbian/Bosnian/Turkish/German variants`;
- `latitude`, `longitude`, `geometry_type` and `georeferencing_confidence`;
- `administrative_unit`, `unit_type` and `valid_from/valid_to`;
- `source_register`, `register_date`, `folio/page`, `settlement_type` (city, kasaba, village, mezraa, pasture, fortress, han, waqf estate);
- `households`, `adult_males`, `estimated_persons`, `religion_as_recorded`, `language_as_recorded`, `ethnicity_as_recorded` and `modern_census_identity` as separate fields;
- `heritage_type`, `construction_date`, `patron/founder`, `current_state`, `loss_or_reconstruction_date`;
- `migration_event`, `origin`, `destination`, `muhacir/refugee status`, and `confidence`;
- `map_source`, `scan_identifier`, `georeferencing method`, `digitizer` and `uncertainty note`.

Historical place-name normalization is especially important. Ottoman forms such as Yeni Pazar, Seniçe, Taşlıca, Akova and Eskipazar must be linked to Novi Pazar, Sjenica, Pljevlja, Bijelo Polje and Trgovište without erasing the period-specific name. The Turkish archive publication *Osmanlı Yer Adları* and the Serbian archive’s defter work are useful starting points for this gazetteer. [16] [21]

## Priority research sequence

1. Obtain or photograph the relevant Novi Pazar, Sjenica and Niš tahrir/waqf folios, beginning with the registers and citations listed in the TDV entry: BA TD 24, 56 and 211; MAD 3992; the 1528/1540 waqf material; and the published literature of Hazim Šabanović, Ejup Mušović, Olga Zirojević and İsmail Susević. [1]
2. Build a place-name concordance for Novi Pazar–Sjenica–Tutin and the Niš–Leskovac–Vranje corridor before attempting ethnic or demographic aggregation.
3. Digitize the 1873 Ottoman Niš-sanjak table and the Serbian 1879/1884 tables into source-faithful units, then create a second normalized layer for comparison. [6] [14]
4. Create a refugee/muhacir event layer for 1683–1718, 1877–78, 1878–1908 and 1912–13, marking whether a figure is an observed count, estimate, destination claim or later historiographic reconstruction. [3] [6] [19]
5. Carry out a monument-by-monument audit in Novi Pazar, Sjenica, Niš and Belgrade, explicitly recording demolished, reconstructed and surviving sites; extend to Leskovac, Vranje and Tutin through cadastral, cemetery, mosque and local-museum evidence. [11] [13] [15] [17]
6. Georeference the 1882 German map and compare it with Ottoman administrative descriptions, the IPUMS Serbia 1865–1895 boundaries and modern settlement points. [22] [24]

## Language and source coverage

The research used English sources (1914–1918 Online, Princeton, IPUMS, OldMapsOnline, BIRN and heritage databases), Serbian sources (Statistical Office, RTS, Belgrade urban-history material and Novi Pazar tourism/heritage pages), Turkish sources (TDV İslâm Ansiklopedisi, State Archives, Dergipark and Sjenica thesis), Bosnian-language scholarship from the Institute for History at the University of Sarajevo, and German-language orientation/map material. The German Wikipedia page was used only to identify terminology and map leads; claims in the memo rely on the cited scholarly, archival, institutional or heritage sources wherever possible.

## References

[1]: https://islamansiklopedisi.org.tr/yenipazar--sirbistan "YENİPAZAR — TDV İslâm Ansiklopedisi"
[2]: https://journals.openedition.org/balkanologie/265?lang=en "The Emigration of Muslims from the New Serbian Regions"
[3]: https://encyclopedia.1914-1918-online.net/article/sanjak-of-novi-pazar/ "Sanjak of Novi Pazar — 1914–1918 Online"
[4]: https://belleten.gov.tr/eng/full-text/71/eng "The Ottoman Tahrir Defters as a Source for Historical Geography"
[5]: https://www.devletarsivleri.gov.tr/Sayfalar/Yayinlar/Yayinlar.aspx "Turkish Presidency State Archives Publications"
[6]: https://journals.openedition.org/balkanologie/265?lang=en "The Emigration of Muslims from the New Serbian Regions — 1873 Niš Sanjak Inventory and Migration Study"
[7]: https://rai.ai.ac.rs/handle/123456789/1464 "Transformation of the medieval urban landscape: from Serbian Ras to Ottoman Novi Pazar"
[8]: https://dergipark.org.tr/tr/download/article-file/3149698 "Sancak Bölgesi Osmanlı Vakıfları"
[9]: https://tonp.rs/portfolio/altum-alem-dzamija/ "Altun Alem Mosque — Tourist Organization of Novi Pazar"
[10]: https://www.islamicarchitecturalheritage.com/listings/lejlek-mosque "Lejlek Mosque — IRCICA Islamic Architectural Heritage"
[11]: https://balkaninsight.com/2020/12/30/in-muslim-region-of-serbia-ottoman-era-mosques-perish/bi/ "In Muslim Region of Serbia, Ottoman-era Mosques Perish"
[12]: https://openaccess.izu.edu.tr/entities/publication/35cd9d77-32ff-4941-845f-045165347751 "Hudud-u Hâkanî'de Bir Kale: Seniçe"
[13]: https://www.dailysabah.com/religion/2016/12/23/unique-ottoman-mosque-in-serbia-to-go-under-restoration "Unique Ottoman Mosque in Serbia to Go Under Restoration"
[14]: https://www.stat.gov.rs/en-us/o-nama/history/ "History — Statistical Office of the Republic of Serbia"
[15]: https://religiana.com/bali-bey-mosque-nis "Bali-Bey Mosque, Niš — Religiana"
[16]: https://www.rts.rs/lat/vesti/drustvo/3017871/.html?print=true "Šta o Srbima u Osmanlijskom carstvu otkrivaju turski arhivi"
[17]: https://dergipark.org.tr/tr/download/article-file/1470437 "The Problems of Studying Ottoman Heritage in Serbia"
[18]: https://kaldrma.rs/islamsko-naslede-beograda/ "Islamsko nasleđe Beograda"
[19]: https://iis.unsa.ba/wp-content/uploads/MIgracije-i-Bosanski-ejalet.pdf "Migracije i Bosanski ejalet: 1683–1718"
[20]: https://pesd.princeton.edu/node/731 "Sandžak — Princeton Encyclopedia of Self-Determination"
[21]: https://www.devletarsivleri.gov.tr/Sayfalar/Yayinlar/Yayinlar.aspx "Osmanlı Yer Adları and Ottoman Archive Catalogue Publications"
[22]: https://commons.wikimedia.org/wiki/File:1882_-_Generalkarte_von_Bosnien,_der_Herzegovina_und_dem_Sandschak_Novi-Bazar.jpg "1882 Generalkarte von Bosnien, der Herzegovina und dem Sandschak Novi-Bazar"
[23]: https://www.oldmapsonline.org/en/Serbia "OldMapsOnline — Serbia"
[24]: https://mosaic.ipums.org/historical-gis-datafiles "Historical GIS Datafiles — Census Mosaic / IPUMS"

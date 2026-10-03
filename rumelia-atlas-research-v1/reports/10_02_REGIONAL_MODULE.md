# Bulgaria — Deliorman/Ludogorie regional research memo

**Rumelia Atlas expansion | version 1 | 2 October 2026**

## Working geographic frame

Deliorman (Bulgarian **Делиорман**, modern Bulgarian **Лудогорие**) is a historical and physical-region label, not a stable Ottoman or modern administrative unit. Vasil Marinov’s 1933 Bulgarian study explicitly says that the region’s boundaries were understood differently at different times. It places historical references to Şumnu/Shumen, Preslav, Razgrad, Cherven near Ruse, Rusçuk/Ruse and Doristar/Silistria within some historical understandings of Deliorman, while warning against treating every modern town commonly associated with the name as automatically inside the region.[1] Marinov’s own 1933 boundary proposal was based on local nomenclature, landscape characteristics and field visits to 134 Deliorman villages and hamlets; it should therefore be stored as one dated, source-specific polygon, not as the timeless “true” extent of the region.[1]

The same study records that the 1913 Bucharest settlement left large parts of the Deliorman area, especially in the Silistra, Ak Kadınlar, Tutrakan and Dobrich areas, in Romania.[1] For Atlas work, the region should consequently be modeled as overlapping historical geographies: a source-defined Deliorman/Ludogorie extent; Ottoman administrative units; Bulgarian/Romanian post-1878 units; and modern Bulgarian oblast/municipality boundaries. Do not dissolve these into one boundary.

## Ottoman record trail: what is available and what it can support

The most useful Ottoman source families are distinct and should remain distinct in the data model.

- **Tahrir / mufassal and icmal registers** are fiscal-administrative surveys. They can provide settlement names, administrative hierarchy, taxable households or taxpayers, land/revenue categories, and sometimes religious or status distinctions as recorded in the register. They are not modern population censuses and should not be converted directly into total population or modern ethnicity without a source-specific method.
- **Nüfus registers** belong mainly to the nineteenth-century population-registration regime and must be checked for date, sex coverage, household/person unit, and whether they count only Muslims, all residents, males, or another administrative universe.
- **Temettuat registers** are household/property/income-tax records. They are valuable for household economy and local notables, but a temettuat count is not interchangeable with a census count.
- **Vilayet and state salnames** are administrative yearbooks. They can preserve changing administrative affiliation, officials, institutions, schools, religious buildings, population summaries and place-name spellings. A salname figure must be labeled with its yearbook, year, unit and counting convention.

The Turkish State Archives’ *Osmanlı Yer Adları* is a practical name-and-hierarchy control source. Its introduction says that the project used tahrir defters for the earlier period and, for the later period, state/vilayet salnames and other official records. It defines the working hierarchy as liva/sancak, kaza, nahiye and merkez köy, and cautions that ordinary villages and mezras are generally outside its main coverage unless they acquired nahiye status.[2] That limitation matters for a village-level atlas: use the book to generate candidate historical names and administrative parents, then verify each village against the underlying register or a gazetteer.

The Turkish State Archives’ online research guidance confirms that the catalogue can be searched online, catalogue descriptions and previews inspected, and selected document images obtained through the archival system; access requires a researcher account and image purchase for selected pages.[3] The catalogue should be searched with both Ottoman/Turkish and Bulgarian place-name variants. Start with **Deliorman / Deli-orman**, **Silistre**, **Şumnu**, **Rusçuk**, **Tuna vilayeti**, **Dobruca**, **Razgrad**, **Ak Kadınlar**, **Tutrakan**, plus the relevant liva/kaza/nahiye terms. Preserve the exact catalogue identifier and image/page reference for every extracted row.

A directly relevant published entry is the Turkish State Archives’ **370 Numaralı Muhâsebe-i Vilâyet-i Rûm-ili Defteri (937/1530)**. The UConn bibliography identifies volume II as covering the Çirmen, Silistre, Kefe, Niğbolu and Vidin livas, as well as Yörük and Tatar communities and other Rumeli administrative groups.[4] The State Archives’ PDF/search record also exposes contents for Silistre and related kazas, including Şumnu and other northeastern place names.[5] This is a strong starting point for sixteenth-century settlement and fiscal geography, but it is not evidence that every Razgrad, Shumen, Ruse, Silistra or Dobrich village appears in one volume. The Atlas should record the exact liva/kaza and folio before linking any settlement.

The UConn published-tahrir bibliography also points to the Bulgarian scholarly edition **Turski Izvori za B’lgarska Istorija** and to the work of Bistra Cvetkova and collaborators; it is useful for finding Bulgarian editions, translations and references that may be easier to work with than an unedited Ottoman manuscript.[4] The Austrian Academy of Sciences’ *Historical Gazetteer of Ottoman Bulgaria* is particularly relevant for linking Ottoman-era toponyms to present-day locations. Its project description says that the database extracts settlement toponymy from fifteenth- to nineteenth-century Ottoman primary sources and mines the 1878 Russian 3-verst map, the Austrian *Generalkarte von Mitteleuropa*, the Ottoman *Rumeli-i şahane haritası* and other historical maps.[6] This is the best discovered bridge between archival names and reusable spatial points, but the Atlas should retain the gazetteer’s source, spelling and confidence rather than treating a point as a surveyed boundary.

## Bulgarian census and settlement gazetteers

The Bulgarian Statistical Institute’s early publications are unusually useful because they are bilingual in Bulgarian and French and expose the historical counting vocabulary. The NSI 1909 statistical yearbook states that the first regular census of northern Bulgaria was carried out on 1 January 1881, followed by the 1885 southern-Bulgaria/Eastern Rumelia census and the unified censuses of 1888, 1892, 1900 and 1905; its contents include tables by district, religion, birthplace, nationality, citizenship and other variables.[7] The Library of Congress guide verifies that the 1881 publication gives population, age, native language, religion, occupation, place of birth and citizenship, while the 1888/1893/1900 compilation breaks results down by **okrug**, **okoliia** and **naseleni mesta**.[8]

The 1905 population census is an especially strong source for the requested separation of categories. The Library of Congress description says that the 1905 volumes report age, gender, literacy, ethnicity/nationality, religion, native language and occupation, with separate nationality/ethnicity (**narodnost / nationalité ethnique**) and citizenship (**poddanstvo / sujétion**) fields. Its listed ethnic categories include Bulgarian, Russian, Serbian, other Slavs, Turkish, **Tatar**, Greek, Romanian, Jewish, Armenian, German, French, Roma and other; religions are separately listed as Eastern Orthodox, Catholic, Protestant, Muslim, Jewish, Armeno-Gregorian, other and unknown.[8] This is directly relevant to Rumelia Atlas: a 1905 “Turkish” row is not a Muslim row, a “Tatar” row is not a Turkish row, and neither is a proxy for Pomak identity. Extract the published column label exactly, preserve the bilingual wording, and do not calculate a category that the table does not provide.

The modern NSI census publication makes the methodological break explicit. Bulgaria observed religion and mother tongue in the late nineteenth-century censuses, added “nationality” in 1900, and later moved to ethnic-group, mother-tongue and religion questions. In 2011 and 2021, ethnicity, mother tongue and religion were voluntary, self-defined and allowed a free-text answer.[9] For the 2021 target-area baseline, NSI reports ethnic self-identification separately from mother tongue and religion. The five target oblasts should be stored as separate fields, not collapsed into a “Muslim/Turk” class:

- **Ethnic self-identification, 2021:** NSI’s oblast table reports Bulgarian/Turkish/Roma/other rows. The Turkish self-identification counts are 18,835 in Dobrich, 49,318 in Razgrad, 23,958 in Ruse, 34,392 in Silistra and 44,263 in Shumen. These are counts in the NSI ethnic self-identification table, with separate “cannot determine,” “do not wish to answer” and “not shown” fields; they are not religion counts.[9]
- **Mother tongue, 2021:** the same NSI publication reports Turkish mother tongue separately: 21,514 in Dobrich, 51,560 in Razgrad, 23,836 in Ruse, 37,366 in Silistra and 46,271 in Shumen. These figures are not an ethnic classification and should not be used to infer Tatar or Pomak identity.[9]
- **Religion, 2021:** NSI’s separate religion table reports Muslim religion as 26,207 in Dobrich, 53,121 in Razgrad, 25,514 in Ruse, 35,767 in Silistra and 47,752 in Shumen. These are religion responses, not ethnic self-identifications. The same table has Christian, Jewish, other, no religion, cannot determine, do-not-wish-to-answer and not-shown fields.[9]

The 2021 figures are useful as a modern reference layer only. They cannot be back-projected into Ottoman categories, and they do not establish that a person or village is Turkish, Tatar, Pomak, Gacal or any other historical community.

The NSI **National Register of Populated Places (NRNM)** is the authoritative current settlement and administrative crosswalk. It records settlements, municipalities, oblasts, historical administrative units, names in Bulgarian and transliteration, creation/closure/change events, administrative relationships, type, altitude, area and population by censuses/current demographic statistics.[10] It offers downloadable EKATTE Excel and JSON files; records include EKATTE code, Bulgarian name, transliteration, oblast and municipality codes/names, NUTS codes, settlement type/category and document year.[11] The register itself warns that pre-1949 administrative hierarchies are not fully described, so it is a modern crosswalk and change log—not a substitute for Ottoman administrative reconstruction.[10]

The NRNM spatial-data page exposes settlement, municipality, oblast and other boundary downloads for the 31 December 2019 statistical geography.[12] A reusable current boundary backup is the OCHA/UNICEF Bulgaria COD-AB dataset, which provides Admin 1 oblast and Admin 2 municipality layers in GeoJSON, Shapefile, Geodatabase and XLSX under CC BY-IGO; it is suitable for a current base map, not for historic borders.[13]

## Identity and community categories: rules for the Atlas

Keep at least these dimensions separate in every row: **religion/faith**, **ethnic or nationality label**, **mother tongue/language**, **citizenship**, **administrative status**, and **source author’s analytical label**. Add a seventh field for **self-identification** when the source uses it. Do not infer identity from a personal name, a Muslim institution, a Turkish or Arabic toponym, a language, a census district, or a modern political party.

For modern and late Ottoman/Bulgarian sources, use the source’s own labels: “Muslim,” “Turkish,” “Tatar,” “Pomak/Pomaci,” “Roma,” “Bulgarian,” “other,” “unknown,” and so on. Only create a normalized label when the original and the normalization are both stored. “Turkish-speaking,” “Muslim,” “Tatar,” “Pomak,” “Gacal” and “Alevi/Bektashi” must never be silently merged.

The French-language scholarship is useful as a warning against homogenization. Alexandre Popovic describes the Bulgarian Muslim community as non-homogeneous and discusses Pomaks, Turks, Tatars and Roma as different groups, while also using historical estimates that should not be imported as current counts.[14] Thierry Zarcone treats Deli Orman and Dobruja as a distinctive zone in the history of Kızılbaş-Alevi and Bektashi networks, and identifies a research tradition on Deliorman Turks and related communities; this is a religious-social history, not a census classification.[15] For the Atlas, cite these works for historiography and research leads, but use the Bulgarian census or Ottoman register column for any numerical claim.

A German-language minority-policy study is useful for a different reason: it documents how repeated Bulgarian territorial reforms changed the boundaries of **oblasti**, **okrăzi**, **okolii** and **obštini**, making regional time-series comparisons unsafe unless the units are harmonized.[16] This supports a hard Atlas rule: every statistic must carry the source year, administrative unit name in the original language, unit type and a crosswalk version. A modern oblast is not automatically comparable to an Ottoman liva, kaza or nahiye.

## Heritage inventories and place-based source leads

UNESCO’s Bulgaria state-party page confirms the regional heritage anchors that should be linked into the expansion: **Madara Rider** (near Shumen), **Thracian Tomb of Sveshtari** (Razgrad area), **Rock-Hewn Churches of Ivanovo** (Ruse area), and **Srebarna Nature Reserve** (Silistra area). It also lists the **Late Ancient Tomb of Silistra** on Bulgaria’s Tentative List.[17] These are internationally verified anchors, but they are not a complete inventory of Ottoman, Islamic, Tatar, Pomak, village, vernacular or local heritage.

The Bulgarian Ministry of Culture maintains the national lists of immovable cultural properties and related heritage registers. The public “national significance” list discovered for this pass is dated to December 2021, but the page could not be fetched in this environment because the Ministry host failed DNS resolution. Treat it as a lead for the next pass, not as a verified export. For production, capture the official record identifier, category, locality, coordinates, legal act, current condition and source date from the Ministry/NIICH record rather than scraping a third-party list.

Heritage discovery should include municipal museum and local-history catalogues for Razgrad, Shumen, Silistra, Ruse and Dobrich, but no local listing should be promoted to a national inventory item without the official register ID. Ottoman mosques, tekkes, türbes, cemeteries, fountains, bridges, caravan routes, schools and village houses need their own typology; the presence of an Islamic building is not evidence for the ethnicity of its users.

## Historical maps and reusable GIS

Three map layers are immediately reusable as research assets, subject to rights and georeferencing checks.

1. **Marinov, 1933 — Deliorman boundary map and article.** The Bulgarian journal scan gives the article title, historical discussion, a source-defined boundary and a map at 1:750,000. The Wikimedia Commons crop identifies the author, source article, 1933 publication and CC BY-SA 4.0 license; the original file is 1,344 × 1,018 pixels.[1][18] Use it as a dated interpretive boundary and preserve the scan/citation; do not present it as an Ottoman administrative boundary.
2. **Generalkarte von Mitteleuropa 1:200,000.** UC Berkeley’s digitized collection contains 387 images, with sheets covering Bulgaria and neighboring areas. The catalogue describes the set as 1938–1945 German military maps based on the Austro-Hungarian Military Geographic Institute series, with Bulgarian and other place names in transliteration. Berkeley permits free and open use of its digitized public-domain materials while warning that rights status must be checked for each item.[19] Use individual sheet IDs and editions, not one generic “Generalkarte” citation.
3. **OldMapsOnline.** Its Bulgaria portal is a discovery index connecting maps to places including Razgrad, Ruse, Silistra, Shumen and Dobrich provinces. It is useful for finding scans and map metadata, but reuse rights are set by the supplying library for each item; download and cite the original holding institution rather than treating OldMapsOnline as the rights holder.[20]

The OEAW Historical Gazetteer is the key candidate for a historical-place layer because it combines Ottoman primary-source toponyms with historical-map mining and spatial locations.[6] For production, export or manually transcribe only records with a source citation and confidence. Retain original script/transliteration, modern normalized name, map date, coordinate method and an “identity inference prohibited” flag for any label that is only a place name.

## District and city coverage priorities

- **Razgrad / Razgrad oblast:** central Ludogorie anchor. Prioritize the 1905 Bulgarian census tables, NSI settlement crosswalk, Ottoman Silistre/Rumeli search terms and the Sveshtari heritage record. Keep the 2021 ethnic self-identification and Muslim-religion fields separate.
- **Shumen / Shumen oblast:** use Şumnu/Shumen variants and the Marinov map’s historical association carefully. Link Madara Rider as a heritage anchor. Search Ottoman registers by liva/kaza/nahiye rather than “Shumen region” alone.
- **Silistra / Silistra oblast:** prioritize Silistre/Silistria/Doristar variants, the 1530 Rumeli register, later Tuna vilayeti yearbooks and the Late Ancient Tomb of Silistra tentative-list record. Treat the 1913 border change as a major historical-geography break.
- **Ruse / Ruse oblast:** include Rusçuk/Rustchuk/Ruse variants only when the source supports the equivalence; Marinov’s 1933 discussion explicitly mentions Rusçuk and Cherven near Ruse. Link Ivanovo heritage records separately from city records.
- **Dobrich / Dobrich oblast:** include the Deliorman–Dobruja transition rather than assuming the whole oblast is Deliorman. Search Dobruca, Dobrich and older Ak Kadınlar/related variants in Ottoman and Romanian/Bulgarian sources; verify every name against a register or map. Do not infer a Turkish/Tatar/Pomak identity from a historical Turkish toponym.

## Recommended Atlas record shape

For each settlement, administrative unit, record or heritage object, store:

- `modern_name_bg`, `modern_name_transliteration`, `historical_name_original`, `historical_name_latinized`;
- `source_language`, `source_title`, `archive_or_catalogue_id`, `date_start`, `date_end`, `folio/page`;
- `unit_type_as_source` and `parent_unit_as_source` (liva/sancak, kaza, nahiye, village, oblast, okrug, okolii, municipality);
- `modern_crosswalk` (EKATTE code, municipality, oblast, NUTS code) and crosswalk source/version;
- `latitude`, `longitude`, `coordinate_method`, `map_sheet`, `georeferencing_confidence`;
- separate fields for `religion_as_reported`, `ethnicity_or_nationality_as_reported`, `mother_tongue_as_reported`, `citizenship_as_reported`, `self_identification_as_reported`, `community_or_order_as_reported`;
- `count_unit` (person, male, household, taxpayer, building, village, institution), `count_scope`, `denominator`, `nonresponse_or_unknown`, and `transcription_notes`;
- `heritage_register_id`, `heritage_category`, `legal_status`, `condition`, and reuse rights;
- `identity_inference_status` set to `prohibited`, `source-explicit`, or `analytical-hypothesis` with a citation.

This schema prevents a 1905 census “Tatar” row, a 2021 Muslim-religion row, an Ottoman village name, and a modern Turkish self-identification row from being conflated merely because they share a place.

## Gaps and cautions for the next pass

- The Turkish State Archives catalogue must be queried directly for exact **nüfus**, **temettuat** and **salname** series for Şumnu, Silistre, Rusçuk, Razgrad, Dobrich/Ak Kadınlar and Tutrakan; the present memo identifies the archive and search vocabulary but does not claim a complete shelfmark list.
- The 370 Rumeli publication is a sixteenth-century fiscal/administrative source, not a complete demographic census. Extracted figures must be labeled by register unit and measure.
- The NSI NRNM is strongest for modern and post-1878 crosswalks; it explicitly says that pre-1949 administrative hierarchies are not fully described. Ottoman-to-EKATTE joins therefore need an intermediate historical gazetteer and confidence score.[10]
- The national immovable-heritage list needs a verified Ministry/NIICH download and record-by-record extraction. Ministry access failed in this pass; UNESCO records are verified but partial.
- The 2021 NSI table is voluntary self-identification and has nonresponse/not-shown categories. It is not directly comparable to 1905 nationality, Ottoman Muslim registration or an author’s historical community label.[9]
- French, German, Turkish and Bulgarian scholarship uses overlapping but non-identical terms for Muslim communities. Translate only after retaining the original term and bibliographic context.

## References

[1]: https://geography.bg/images/JBGS/vol1_1933/JBGS_vol1_Marinov_V.pdf "V. Marinov, Положение, име, граници, пространство и административно деление на Дели-ормана, 1933"

[2]: https://www.devletarsivleri.gov.tr/varliklar/dosyalar/eskisiteden/yayinlar/genel-mudurluk-yayinlar/osmanli_yer_adlari.pdf "Tahir Sezen, Osmanlı Yer Adları, Turkish State Archives, 2017"

[3]: https://www.devletarsivleri.gov.tr/Sayfalar/Sayfa.aspx?icerik=12&h=AA54A70923B86C8AD74249E0E555F5948A9923AE2A51E06E2DFE30B4D635A1E2 "Turkish State Archives, Arşivde Araştırma Esasları"

[4]: https://ottoman.uconn.edu/bibliography/published-tahrirs/ "University of Connecticut, List of Published Ottoman Tax Registers (Tahrir Defterleri)"

[5]: https://www.devletarsivleri.gov.tr/varliklar/dosyalar/eskisiteden/yayinlar/osmanli-arsivi-yayinlar/370_nolu_muhasebei_rum_ili_defteri.pdf "Turkish State Archives, 370 Numaralı Muhâsebe-i Vilâyet-i Rûm-ili Defteri"

[6]: https://www.oeaw.ac.at/en/ihb/forschungsbereiche/balkanforschung/archiv-abgeschlossene-forschungsprojekte/population-and-space/historical-gazetteer-of-ottoman-bulgaria "Austrian Academy of Sciences, Historical Gazetteer of Ottoman Bulgaria"

[7]: https://site-test.nsi.bg/file/17339/God1909.pdf "Bulgarian National Statistical Institute, Statistical Yearbook 1909"

[8]: https://guides.loc.gov/bulgarian-statistics/censuses "Library of Congress, Bulgarian Statistics: A Resource Guide — Censuses"

[9]: https://www.nsi.bg/file/24016/Census2021-ethnos.pdf "Bulgarian National Statistical Institute, Ethno-cultural characteristics of the population as of 7 September 2021"

[10]: https://www.nsi.bg/nrnm/pages/za-nrnm "Bulgarian National Statistical Institute, National Register of Populated Places — About the register"

[11]: https://www.nsi.bg/nrnm/ekatte/territorial-units/json "Bulgarian National Statistical Institute, EKATTE settlement JSON export"

[12]: https://www.nsi.bg/nrnm/spatial-data "Bulgarian National Statistical Institute, NRNM spatial data"

[13]: https://data.humdata.org/dataset/cod-ab-bgr "OCHA/UNICEF, Bulgaria — Subnational Administrative Boundaries"

[14]: https://www.persee.fr/doc/cmr_0008-0160_1986_num_27_3_2087 "Alexandre Popovic, Les Turcs de Bulgarie, 1878–1985, 1986"

[15]: https://www.persee.fr/doc/anatm_1297-8094_1992_num_4_1_909 "Thierry Zarcone, Nouvelles perspectives dans les recherches sur les Kızılbaş-Alévis et les Bektachis de la Dobroudja, de Deli Orman et de la Thrace orientale, 1992"

[16]: https://epub.ub.uni-muenchen.de/554/1/buechsenschuetz-minderheiten.pdf "Uwe Büchsenschütz, Minderheitenpolitik in Bulgarien, 1997"

[17]: https://whc.unesco.org/en/statesparties/bg "UNESCO World Heritage Centre, Bulgaria state-party page"

[18]: https://commons.wikimedia.org/wiki/File:Deliorman_map.jpg "Wikimedia Commons, Deliorman map — Vassil Marinov, 1933, CC BY-SA 4.0"

[19]: https://digicoll.lib.berkeley.edu/record/275895?ln=en "UC Berkeley Digital Collections, Generalkarte von Mitteleuropa 1:200 000"

[20]: https://www.oldmapsonline.org/en/Bulgaria "OldMapsOnline, Old maps of Bulgaria"

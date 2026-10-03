# Rumelia Atlas — Bulgarian Rhodopes regional discovery and data-readiness memo

**Region ID:** `regional_03_bulgarian_rhodopes`  
**Primary coverage:** Bulgarian Western, Central, and Eastern Rhodopes, with priority on **Smolyan, Kardzhali, and Haskovo** oblasts.  
**Secondary coverage to retain:** Rhodope-facing municipalities in Pazardzhik, Plovdiv, Blagoevgrad, and Stara Zagora where a source, migration route, historical kaza, or map sheet crosses the present administrative boundary.  
**Time depth:** Ottoman-period records (15th–19th centuries) through the 1877–78, 1912–13, interwar, socialist, 1989, and 2021 data points.  
**Status:** Research-ready source inventory; village-level entity resolution and systematic extraction remain outstanding.

The Bulgarian Rhodopes should be modeled as a **historical landscape of changing self-identifications**, not as a single ethnic territory. The key analytical rule is to keep **religion, language, ethnicity, historical status, and self-description in separate fields**. “Muslim” is a religious affiliation. “Turkish” may refer to ethnic self-identification, mother tongue, political belonging, or an Ottoman-era confessional usage. “Pomak” is a contested and historically changing label for Bulgarian-speaking Muslims and is not a field in the Bulgarian census. “Yörük” is primarily a historical Ottoman administrative, pastoral, and settlement category; it must not be used as a synonym for either Pomaks or all Turks. Official data support these distinctions: the National Statistical Institute (NSI) defines an ethnic group through closeness of origin, everyday life, culture, and language, but collects the contemporary answers through voluntary self-identification, while mother tongue and religion are separate questions.[1] [2]

## What can be said without conflation

**Bulgarian-speaking Muslims / Pomaks.** The strongest comparative sources describe Pomaks as a historically contingent, usually Bulgarian-speaking Muslim population concentrated in the western and central Rhodopes, while also stressing that the label has never mapped cleanly onto one language, culture, or self-identification. Karagiannis’s German study notes that Central Rhodope Muslims may visit türbe shrines while western-Rhodope communities follow different practices; it argues that “Rhodopian Islam” is sometimes a safer analytical term than a unitary “Pomak Islam.” It also records self-descriptions such as Bulgarian, Turk, Muslim, Pomak, and Bulgarian Mohammedan, and warns that census categories have not captured all of them.[3] Lory’s French study places the consolidation of the term *Pomak* in nineteenth-century national and ethnographic classification. In the pre-national Ottoman context, “Turk” could function as a confessional label for Muslims rather than an ethnic one.[4] Those are historical arguments, not a basis for assigning a Pomak label to every Muslim village.

**Ethnic Turks and Turkish-speaking Muslims.** In the 2021 census, Turkish ethnicity and Turkish mother tongue are measurable self-reported categories. They overlap strongly in Kardzhali but are not interchangeable with religion. A person may identify as Turkish and Muslim, Bulgarian and Muslim, Roma and Muslim, or decline to answer. The Eastern Rhodopes, especially Kardzhali and parts of Haskovo, contain substantial Turkish-speaking and Turkish-identifying populations, but village-level assignment requires a source for that village and date rather than regional generalization.

**Yörüks.** Ottoman records and Turkish scholarship use *Yörük* for mobile or semi-mobile pastoral groups and for related administrative arrangements. The Western Rhodope conversion thesis by D. Avcı uses three Ottoman registers—MAD 525, TD3, and TD7—and discusses Yörük settlement as one possible channel through which Islam and new institutions entered the region. The thesis also makes clear that tahrir registers are tax and administrative inventories with chronological and demographic limits.[5] A Yörük tag should therefore be attached only where a primary record, specialized study, or a clearly identified secondary source provides it. `yoruk_current_population = NULL` is the correct default.

**Other populations.** Orthodox Bulgarians, Roma, smaller Christian communities, and people who report “other,” “no religion,” “cannot determine,” or no answer must remain visible. Mixed Muslim-Christian settings are not evidence of a single blended ethnicity. Lubanska’s institutional record for her Rhodopes monograph emphasizes detailed ethnography of mixed Muslim and Orthodox communities and treats apparent syncretism as a social strategy shaped by unequal institutions and power, rather than as proof of a timeless common religion.[6]

## Current statistical baseline: 2021

NSI’s 2021 release is the authoritative starting point for current regional totals. It reports nationally 508,378 people self-identifying as Turkish, 514,386 with Turkish as mother tongue, and 638,708 with Muslim religious affiliation. None of those totals is a Pomak count.[1]

| Oblast | Key 2021 self-identification results | Mother tongue | Religion | Readiness and warning |
|---|---|---|---|---|
| **Kardzhali** | Bulgarian 37,383 (29.0% of ethnic respondents); Turkish 83,280 (64.5%); Roma 1,354 (1.0%); other 2,130 (1.7%); cannot determine 640; no answer 4,269; not shown 12,121.[7] | Bulgarian 39,062; Turkish 83,293; Roma 1,198; other 274; cannot determine 335; no answer 3,322; not shown 13,693.[7] | Muslim 88,705 (69.6% of religion respondents); Christian 19,872 (15.6%); no religion 1,902; cannot determine 3,518; no answer 13,442; not shown 13,693.[7] | **High** for oblast/municipality totals. Turkish ethnicity, Turkish mother tongue, and Muslim affiliation are close but not identical. |
| **Smolyan** | Bulgarian 86,818 (90.9%); Turkish 3,049 (3.2%); Roma 483 (0.5%); other 3,589 (3.8%); cannot determine 236; no answer 1,373; not shown 736.[8] | Bulgarian 90,526; Turkish 3,373; Roma 443; other 321; cannot determine 85; no answer 731; not shown 805.[8] | Muslim 39,217 (41.1%); Christian 23,079 (24.2%); no religion 6,519; cannot determine 8,044; no answer 18,552; not shown 805.[8] | **High** for municipality aggregates; **low** for a Pomak count. The large religion nonresponse must be mapped rather than hidden. |
| **Haskovo** | Bulgarian 154,088 (78.5%); Turkish 25,555 (13.0%); Roma 12,572 (6.4%); other 1,764 (0.9%); cannot determine 362; no answer 1,892; not shown 15,332.[9] | Bulgarian 150,186; Turkish 25,424; Roma 12,198; other 1,831; cannot determine 313; no answer 1,450; not shown 20,163.[9] | Muslim 27,914 (14.6%); Christian 134,343 (70.2%); no religion 6,900; cannot determine 7,764; no answer 14,364; not shown 20,163.[9] | **High** for oblast/municipality aggregates. Haskovo includes lowland/Thracian territory, so it is not a proxy for the whole Eastern Rhodopes. |

The NSI PDFs provide the municipality layer needed for a first atlas release. In Kardzhali, Turkish ethnicity is the majority in every municipality: 96.7% in Chernoochene, 83.2% in Momchilgrad, 77.6% in Dzhebel, and 71.7% in Ardino. In Haskovo, Stambolovo (3,648 Turkish-identifying versus 976 Bulgarian-identifying respondents) and Mineralni Bani (2,760 versus 2,065) stand out, but these are municipality aggregates and not village-level ethnographies.[7] [9] In Smolyan, Muslim affiliation is highest in Dospat (88.0%), Rudozem (84.3%), Madan (78.7%), and Borino (69.2%); Christian affiliation is highest in Chepelare, Smolyan, and Devin. These figures describe religion, not “Pomak ethnicity.”[8]

### Recommended interpretation fields

For every statistical record, store at least: `population_year`, `geography_level`, `geography_id`, `ethnicity_self_id`, `mother_tongue`, `religion_self_id`, `religiosity`, `cannot_determine`, `no_answer`, `not_shown`, `source_denominator`, and `source_url`. Keep the NSI response denominator explicit. Do not convert Muslim counts into Pomak counts; set `pomak_count = NULL` unless a source explicitly reports a self-identifying Pomak population for the same geography and date.

## Villages and mountain districts to prioritize

The atlas should use **municipality and village entities**, not a single “Pomak region” polygon. The following are priority research clusters rather than predetermined ethnic assignments:

* **Central and western Smolyan:** Smolyan, Devin, Dospat, Borino, Madan, Rudozem, Nedelino, Zlatograd, Banite, and Chepelare municipalities. Brunnbauer’s family-history study provides a rare village-scale research model using parish household listings from Shiroka Laka, Chepelare, and Stoykite, additional household material from Arda, Petkovo, Dolno Raykovo, and other villages, Smolyan District State Archive fonds, Bulgarian Academy of Sciences ethnographic material, and 1995–97 fieldwork.[10] These sites are suitable for a documented sample layer, not for extrapolating a single Pomak identity across the oblast.
* **Kardzhali/Eastern Rhodopes:** Ardino, Chernoochene, Dzhebel, Kirkovo, Krumovgrad, Momchilgrad, and Kardzhali municipalities. The NSI municipality tables and the NINKN heritage workbooks make this the most immediately actionable Eastern-Rhodope cluster.[7] [12]
* **Haskovo-facing Eastern Rhodopes:** Stambolovo, Mineralni Bani, Madzharovo, Ivaylovgrad, and adjacent municipalities. Haskovo’s full oblast census must be clipped to the mountain-facing municipalities before any “Rhodopes” statistic is computed.[9] [13]
* **Cross-border and adjacent mountain districts:** The historical Rhodopes extend into present-day Greece, and historical Ottoman administrative units do not match current Bulgarian oblasts. Add Pazardzhik/Plovdiv and the Mesta-facing Blagoevgrad side when a source or migration event requires them. For each crosswalk, preserve `historical_unit`, `modern_unit`, `valid_from`, `valid_to`, and `crosswalk_confidence`; unknown dates are `NULL`.

For a first village layer, use the Austrian Academy of Sciences **Historical Gazetteer of Ottoman Bulgaria** as the name and location spine. It extracts Ottoman settlement toponymy from 15th–19th-century primary sources and mines the 1878 Russian 3-verst map, the Austrian *Generalkarte von Mitteleuropa*, the Ottoman *Rumeli-i şahane* map, and other historical maps.[11] Pair it with NSI current settlement identifiers and the Geodesy, Cartography and Cadastre Agency (GCCA) official geographic-names register. A village should not be labeled “Pomak,” “Turkish,” or “Yörük” merely because an Ottoman or modern name is associated with a group.

## Vakıf, mosques, türbe, and heritage records

The **National Library of Bulgaria, Oriental Collections** is the most important Bulgarian institutional lead for Ottoman-period work. It reports 4,000 manuscript codices, 2,000 early printed books, and approximately one million archival sheets in 342,000 archival units. The holdings cover the 15th to early 20th centuries and include Ottoman Turkish, Arabic, and Persian documents; settlement funds; 730 defters; 185 sicils; and 25,000 microfilms exchanged with Turkish archives. Its catalog bibliography includes *Turkish Sources for Bulgarian History*, jizye-register inventories, timar-register inventories, and Ottoman documents for local settlements.[14] This collection can support village names, tax status, religious institutions, vakıf administration, and migration-related correspondence, but a record-level extraction and language/transcription plan is still needed.

The Turkish State Archives publication on **Ottoman documents in Bulgaria** is a complementary archival inventory, not a ready-made Rhodope database. It describes 15th–19th-century timar, zeamet, vakıf, ahkâm, military, and occupational records in Bulgarian holdings, including a 713-defter group and an estimated 1.5 million documents; it notes roughly 200 locally produced provincial defters for places now within Bulgaria. Its bibliography points to studies of Bulgarian village names in 16th–18th-century Turkish records and to work on Western Rhodopes/Mesta demographic relations.[15] Treat the figures as an archive-description lead and verify any item-level claim against the relevant catalog or scan.

For standing buildings, the **National Institute for Immovable Cultural Heritage (NINKN)** publishes official lists by oblast, municipality, and settlement. The register pages for Kardzhali, Smolyan, and Haskovo link municipal spreadsheets and state that the data include acts in the National Public Register, with addresses, plot-plan numbers, and related fields current to the date when status was granted. Publication is staged and the lists are not a substitute for a condition survey, ownership history, or a complete list of all religious buildings.[12] [13] [16]

Create separate heritage entities for:

* `building_type`: mosque, mescit, türbe, tekke, cemetery, bridge, school, bath, shrine, church, monastery, house, or unknown;
* `historical_function`: vakıf-supported, congregational, military, commercial, educational, funerary, or `NULL`;
* `heritage_status`: NINKN status, municipal status, archaeological status, or `NULL`;
* `vakif_foundation`: named foundation and founder when documented, otherwise `NULL`;
* `current_condition`, `current_owner`, `survival_status`, and `religious_use_today`.

Do not infer vakıf ownership from the presence of a mosque. A vakıf record is a legal/economic relation; a heritage listing is a modern statutory status; a surviving building is a physical fact. They are related but different objects.

## Migrations, forced conversion, and changing names

The atlas should represent migration as dated events with actor, direction, legal/political cause, and evidence level, rather than as one “Turkish migration” layer.

1. **1877–78 and the post-Ottoman border settlement.** The Rhodopes passed through administrative and border changes that affected markets, seasonal movement, and the relationship between Ottoman and Bulgarian institutions. Brunnbauer shows that the region remained largely Ottoman until 1912, was divided between Bulgaria and Greece in 1912, and that western Thrace was then lost to Greece under the 1919 settlement.[10] A village-level displacement total for the Bulgarian Rhodopes is `NULL` in this source set.
2. **1912–13 Balkan Wars.** Koyuncu’s Turkish peer-reviewed study uses Ottoman and Bulgarian archival sources to document forced Christianization of Pomak communities in the Rhodopes, Western Thrace, and eastern Macedonia. It reports conversion of mosques into churches or their destruction, Bulgarian naming, coercive religious practice, and restoration of Islam after the Istanbul Agreement; the article states that the process had ended by mid-February 1914.[17] Because the study’s headline estimate covers a wider region than the Bulgarian Rhodopes alone, store the event geography as `multi_region`, and store a Bulgarian-Rhodope-only number as `NULL` unless extracted from the article’s archival tables.
3. **1940s–1970s assimilation and name changes.** Minority Rights Group’s 2018 profile records government-led name changing of Bulgarian-speaking Muslims in the early 1940s, population transfers in 1948, and campaigns in 1970–73 to replace Muslim/Arabic names with Bulgarian ones.[18] These are useful leads but are not a village-by-village official register. For each person or village entry, distinguish `personal_name_change`, `village_toponym_change`, and `institution_name_change`; do not merge them.
4. **1984–89 “Revival Process” and 1989 emigration.** Vasileva’s peer-reviewed migration study reports that 369,839 people reached the Turkish border in 1989, that 154,937 later returned, and that post-regime laws permitted ethnic Turks to resume Turkish names.[19] These figures concern the mass Turkish emigration and return, not a Pomak total. Minority Rights Group separately notes that Bulgarian-speaking Muslims were often denied permission to emigrate to Türkiye, showing why the two histories must not be conflated.[18]
5. **Post-1989 identity change.** Ghodsee’s Harvard research page describes extensive ethnography among Pomaks in the Madan area and links post-1989 religious reorientation to the collapse of state-subsidized mines, international Islamic aid, and changes in gender and mosque life.[20] This is a strong community study but not a population count.

For place names, the OEAW Gazetteer is the primary crosswalk candidate. Its project description explicitly connects the replacement of Turkish/Islamic toponyms to nationalist efforts and migrations, but the claim is not a license to assign a single motive to every local change.[11] GCCA’s official names register and NINKN’s historical status lists should provide modern legal names and, where present, older names; Ottoman defters, Bulgarian administrative acts, cadastral plans, and local archive files are needed to date each transition. Use `name_change_date = NULL` until the date is sourced.

## Maps and GIS sources

**Authoritative modern geography.** GCCA creates and maintains cadastral maps and registers, the national geodetic/cartographic/cadastral fund, topographic maps at 1:5,000 and 1:10,000, geographic information systems, and the official geographic-names register.[21] Use GCCA as the modern geometry authority, while retaining the source version/date and any access restrictions. Coordinate reference system for a given downloaded layer: `NULL` until confirmed from its metadata.

**Historical settlement and population geography.** OEAW’s Population and Space programme and Historical Gazetteer are the highest-value GIS-oriented academic sources for Ottoman Bulgaria. The programme is explicitly built around time, space, population geography, and spatial analysis, and it links the Gazetteer, Population Geography of Bulgaria, and Zograf Ottoman Archive projects.[11] [22]

**Digitized map collections.** The Library of Congress reports hundreds of Bulgarian maps and atlases, a 1936 ethnographic map showing distributions of Muslims, Roma, Vlachs, Jews, and Germans, the 1803 Ottoman *Cedid atlas tercümesi*, and a 1850–1970 collection of approximately 400 Bulgarian maps covering regions, towns, roads, administration, and topography.[23] The University of Texas Perry-Castañeda collection provides downloadable historical Balkan map images from 1849 through the early twentieth century, including 1856/1859 Balkans maps, 1878 maps, 1899 Balkan States, and 1912–14 boundary and war maps.[24] These are excellent visual and georeferencing references but require map-sheet metadata, control points, and explicit uncertainty polygons before analytical use.

### GIS ingestion schema

| Entity | Minimum fields | Default unknown value |
|---|---|---|
| Settlement | `settlement_id`, current Bulgarian name, Latin transliteration, historical names, name language, modern municipality/oblast, historical kaza/sanjak, latitude, longitude, geometry source, valid-from/to | `NULL` |
| Population observation | settlement/municipality ID, year, ethnicity self-ID, mother tongue, religion, religiosity, denominator, nonresponse categories, source and page | `NULL` for unavailable dimensions; do not use zero |
| Heritage object | object ID, current/historical name, type, coordinates, NINKN ID/status, date of designation, source, current condition, vakıf relation | `NULL` |
| Migration event | date range, origin, destination, population label as used by source, actor, mechanism, estimate, geography, evidence level | `NULL` |
| Name event | old name, new name, language, object type, date, legal act/source, confidence, notes | `NULL` |
| Historical map | title, creator, year, scale, language, archive, URL, sheet/coverage, digitization quality, CRS/control-point notes | `NULL` |

## Source priority and production readiness

| Priority | Source family | Best use | Main limitation | Production readiness |
|---|---|---|---|---|
| 1 | NSI 2021 oblast and municipality PDFs | Current ethnicity, mother tongue, religion, nonresponse | No Pomak or Yörük category; village layer not established in this memo | **High** |
| 2 | GCCA names/cadastre/topographic data | Modern geometry, legal names, cadastral joins | Obtain layer metadata and usage terms; historical names are not guaranteed | **High for base GIS; medium for toponymy** |
| 3 | OEAW Gazetteer / Population and Space | Ottoman names, historical settlement locations, spatial research | Record-level access and exact coverage for each Rhodope village need checking | **Medium-high** |
| 4 | NINKN regional lists | Heritage status and municipal object inventories | Staged publication, designation-date fields, not condition/ownership or full vakıf history | **Medium-high** |
| 5 | National Library Oriental Collections and Bulgarian/Turkish archives | Defters, sicils, settlement funds, vakıf and migration documents | Catalog and language work required; access/reproduction workflow needed | **Medium for discovery; low until extracted** |
| 6 | Brunnbauer, Lubanska, Ghodsee and comparable ethnographies | Village-level social history, household, religious practice, post-1989 change | Non-representative samples; do not convert ethnography into census totals | **Medium** |
| 7 | Karagiannis, Lory, Minority Rights Group, Koyuncu, Vasileva | Terminology, identity change, migration and contested historiography | Uneven geography and differing political/disciplinary frames | **Medium, with claim-level citation** |
| 8 | LOC/UT historical maps | Visual geography and georeferencing | Ethnographic maps can encode period political assumptions; map projection/control points vary | **Medium for reference; low for unqualified population inference** |

## Immediate build sequence

1. **Build the modern spine:** import GCCA or an approved settlement/cadastral layer; join NSI municipality codes and preserve Bulgarian names exactly as supplied. Add transliteration only as a separate field.
2. **Extract the NSI tables:** load the three 2021 oblast PDFs, retain all response and nonresponse fields, and compute only the published denominators. Flag Haskovo municipalities as `rhodope_relevance = partial` until a geography rule is documented.
3. **Create the historical name crosswalk:** ingest OEAW Gazetteer records, then reconcile with National Library settlement funds, Ottoman defter references, NINKN names, and GCCA current names. Every alias needs a source and date; otherwise `valid_to = NULL`.
4. **Create the heritage layer:** parse NINKN municipal workbooks for Kardzhali, Smolyan, and Haskovo. Attach `ninkn_status`, designation date, settlement, and coordinates only when a reliable join exists. Then link vakıf evidence from the National Library and Ottoman State Archives as documentary relations, not as building attributes by default.
5. **Add migration/name events:** start with 1912–14, 1970–73, and 1989 because the source trail is strongest. Store source labels verbatim—especially “Pomak,” “Bulgarian Muslim,” “Turk,” and “Muslim”—and add a normalized interpretation field only with a confidence note.
6. **Add a documented village sample:** use Shiroka Laka, Chepelare, Stoykite, Arda, Petkovo, Dolno Raykovo, Dospat, Borino, Madan, Rudozem, Ardino, Chernoochene, Momchilgrad, Stambolovo, and Mineralni Bani as initial research nodes because they are supported by the sources above. Do not mark any as a homogeneous population without a village/date-specific observation.

## Material gaps

* Official 2021 **Pomak population by village or municipality:** `NULL`.
* Official current **Yörük population:** `NULL`; historical Yörük evidence must be document-specific.
* Complete village-level 1880–2021 time series for ethnicity, language, and religion: `NULL`.
* Record-level extraction of all relevant Rhodope Ottoman defters, sicils, and vakıf deeds: `NULL`.
* A complete list of surviving, demolished, converted, or currently functioning mosque/türbe/tekke sites with condition and ownership: `NULL`.
* Exact dates and legal acts for every personal-name and village-toponym change: `NULL`.
* Machine-readable OEAW Gazetteer export, field schema, and coverage of each target municipality: `NULL` pending project-level access check.
* CRS and control-point metadata for each historical map scan: `NULL`.
* Comparable population estimates across censuses are constrained by the 1985 omission of ethnic, language, and religion questions and by voluntary self-identification in later censuses.[9] The atlas must preserve those breaks rather than interpolate them as if they were ordinary missing values.

The region is therefore **production-ready for a careful modern statistical and geographic foundation**, **medium-ready for heritage and historical place-name discovery**, and **not yet production-ready for a village-level ethnic map of Pomaks, Turks, or Yörüks**. The correct first release is a multi-layer atlas of self-identification, language, religion, historical names, documentary migration events, and heritage objects, with explicit `NULL` values and source-level uncertainty wherever the evidence does not support a stronger claim.

## References

[1]: https://www.nsi.bg/en/press-release/ethno-cultural-characteristics-of-the-population-as-of-september-7-2021-6833 "National Statistical Institute, Ethno-cultural characteristics of the population as of September 7, 2021"
[2]: https://www.nsi.bg/tsb/2022/12/08/%D0%B5%D1%82%D0%BD%D0%BE%D0%BA%D1%83%D0%BB%D1%82%D1%83%D1%80%D0%BD%D0%B8-%D1%85%D0%B0%D1%80%D0%B0%D0%BA%D1%82%D0%B5%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%BD%D0%B0%D1%81%D0%B5-8/ "NSI Haskovo district, Ethno-cultural characteristics of the population"
[3]: https://www.zeitschrift-fuer-balkanologie.de/index.php/zfb/article/download/4/4 "Evangelos Karagiannis, Bemerkungen zu den Pomaken Bulgariens"
[4]: https://journals.openedition.org/res/393?lang=en "Bernard Lory, Circulation des mots et des idées entre Bulgarie et Occident: le terme Pomak (1833–1875)"
[5]: https://repository.bilkent.edu.tr/bitstreams/3389d30e-b370-4730-a24c-5f13547f951b/download "D. Avcı, The Pomaks: Conversion to Islam in the Western Rhodope Mountains in the 15th Century"
[6]: https://www.etnologia.uw.edu.pl/en/publications/muslims-and-christians-bulgarian-rhodopes-studies-religious-antisyncretism "University of Warsaw, Magdalena Lubańska, Muslims and Christians in the Bulgarian Rhodopes"
[7]: https://www.nsi.bg/tsb/wp-content/uploads/2022/12/etnos-TSB_YUG_KARDZHALI.pdf "NSI, Kardzhali district 2021 ethno-cultural characteristics PDF"
[8]: https://www.nsi.bg/tsb/wp-content/uploads/2022/12/Census2021_ethnos_Smolyan.pdf "NSI, Smolyan district 2021 ethno-cultural characteristics PDF"
[9]: https://www.nsi.bg/tsb/wp-content/uploads/2022/12/Census2021-ethnos_Haskovo.pdf "NSI, Haskovo district 2021 ethno-cultural characteristics PDF"
[10]: https://www.hks.re/wiki/_media/2014:families_and_mountains_in_the_balkans.pdf "Ulf Brunnbauer, Families and Mountains in the Balkans"
[11]: https://www.oeaw.ac.at/en/ihb/forschungsbereiche/balkanforschung/archiv-abgeschlossene-forschungsprojekte/population-and-space/historical-gazetteer-of-ottoman-bulgaria "Austrian Academy of Sciences, Historical Gazetteer of Ottoman Bulgaria"
[12]: http://ninkn.bg/Documents/categoryPreview/35 "NINKN, Immovable cultural heritage list for Kardzhali oblast"
[13]: http://ninkn.bg/Documents/categoryPreview/49 "NINKN, Immovable cultural heritage list for Haskovo oblast"
[14]: https://www.nationallibrary.bg/www/our-collections/%D0%BA%D0%BE%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D0%B8-%D0%BD%D0%B0-%D0%BE%D1%82%D0%B4%D0%B5%D0%BB-%D0%BE%D1%80%D0%B8%D0%B5%D0%BD%D1%82%D0%B0%D0%BB%D1%81%D0%BA%D0%B8-%D1%81%D0%B1%D0%B8%D1%80%D0%BA/ "National Library of Bulgaria, Oriental Collections"
[15]: https://www.devletarsivleri.gov.tr/cdn/file/download?fileId=43 "Turkish State Archives, Bulgaristan'daki Osmanlı Belgeleri"
[16]: http://ninkn.bg/Documents/categoryPreview/46 "NINKN, Immovable cultural heritage list for Smolyan oblast"
[17]: https://dergipark.org.tr/tr/doi/10.1501/OTAM_0000000618 "Aşkın Koyuncu, Balkan Savaşları sırasında Pomakların zorla tanassur edilmesi (1912–1913)"
[18]: https://minorityrights.org/communities/bulgarian-speaking-muslims-pomaks/ "Minority Rights Group, Bulgarian-speaking Muslims (Pomaks) in Bulgaria"
[19]: https://pubmed.ncbi.nlm.nih.gov/12285857/ "D. Vasileva, Bulgarian Turkish emigration and return"
[20]: https://kristenghodsee.scholars.harvard.edu/pages/muslim-lives-eastern-europe "Kristen Ghodsee, Muslim Lives in Eastern Europe"
[21]: https://www.cadastre.bg/en/about-us "Geodesy, Cartography and Cadastre Agency, About Us"
[22]: https://www.oeaw.ac.at/en/ihb/forschungsbereiche/balkanforschung/archiv-abgeschlossene-forschungsprojekte/population-and-space "Austrian Academy of Sciences, Population and Space"
[23]: https://guides.loc.gov/bulgarian-collections/special-collections/maps "Library of Congress, Bulgarian Collections: Geography and Maps"
[24]: https://maps.lib.utexas.edu/maps/historical/history_balkans.html "Perry-Castañeda Library Map Collection, Historical Maps of the Balkans"

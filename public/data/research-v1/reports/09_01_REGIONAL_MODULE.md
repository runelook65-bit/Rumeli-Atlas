# Rumelia Atlas regional memo: Eastern Thrace / European Turkey

**Region:** Edirne, Tekirdağ, Kırklareli, Çorlu, Lüleburgaz and Enez, with Ottoman Rumelia context only where the evidence is accessible.  
**Research status:** source discovery and verification pass, 2 October 2026.  
**Recommendation:** proceed with a controlled vocabulary, source registry and current-GIS scaffolding; do not yet publish historical population totals or reconstructed Ottoman boundaries as authoritative data.

## Bottom line

Eastern Thrace is unusually well supplied with discoverable material, but the sources are not equally machine-ready. The strongest foundation is a three-part combination: (1) the Turkish State Archives catalogue and the official *Osmanlı Yer Adları* reference; (2) the Edirne provincial *salname* run, which is identifiable as 28 volumes for H. 1287–1319 / 1870–1903 and is accessible through several library and scan routes; and (3) modern scholarly work that names the underlying Ottoman registers, court books, administrative series and migration records rather than merely repeating totals. The State Archives catalogue is online, but researcher registration is required and the official guidance states that online document images are chargeable; this makes it a primary discovery and ordering system, not a frictionless bulk-download source [1] [2].

The most defensible first production release is therefore a **source-linked place and bibliography layer**: the six target places, their explicitly evidenced historical forms, the Edirne *salname* metadata, stable links to scans/catalogues, and a current administrative base. Population figures, parish/village extents, historical polygons and migration counts should remain in a reviewed research layer until each row has a source, date, administrative unit, counting convention and transcription check.

Because the pilot hierarchy is not present in this task context, this memo applies the same practical hierarchy expected for an atlas: **Tier 1, primary or official records; Tier 2, scholarly editions and archival studies; Tier 3, institutional digital projects and openly reusable datasets; Tier 4, secondary discovery pages.** Tier 4 pages are used only to locate better evidence, not as the sole basis for a record.

## Source hierarchy and strongest sources

### Tier 1: primary/official records and finding aids

**Turkish State Archives (Devlet Arşivleri Başkanlığı).** The catalogue is the authoritative discovery point for Ottoman and Republican archival holdings. Its research guidance says that researchers can search catalogue records and preview/order document images through BETSİS; it also specifies registration/e-Devlet routes and a per-image fee. The page explicitly identifies online access to the Ottoman Archive catalogue, but not unrestricted bulk export [1] [2]. Use it for exact archival identifiers, not for inferred record numbers.

The same institution’s **Tahir Sezen, *Osmanlı Yer Adları*** is the best starting controlled vocabulary. The official 2017 expanded second edition explains that it was built from *tahrir* registers for early periods and, especially after the Tanzimat, state and provincial *salnames*, cabinet decisions and *Düstur*, with provincial yearbooks also consulted. It focuses on administrative units at **nahiye and above** (kaza, sancak, vilayet, eyalet), while most villages and mezras are excluded unless they had nahiye status. It also explains that administrative labels changed over time and provides an index [3]. This is strong for administrative-name discovery, but it is not a complete village gazetteer and should not be treated as a geocoded database without source-level reconciliation.

**Edirne provincial yearbooks (*salname*).** The Institute for Mediterranean Studies (FORTH) confirms a 28-volume Edirne series, H. 1287–1319 / 1870–1903, in a digitized collection held in its library [4]. HathiTrust’s catalog gives full-view links for multiple volumes, including 1871, 1875, 1882, 1888, 1892, 1893, 1895, 1896, 1898, 1899 and 1901 [6]. Internet Archive hosts the 28-volume scan item, with downloadable OCR/EPUB and JP2/PDF derivatives; the item metadata identifies Ottoman Turkish, the 28 numbered volumes and OCR limitations (detected script includes Arabic and Latin, while the OCR language is not reliably Ottoman Turkish) [5].

These *salnames* are the single highest-value near-term source for Rumelia Atlas because they can supply dated administrative hierarchies, officials, infrastructure, institutions and sometimes demographic or economic tables. They are **not** a uniform annual census: the Turkish Thrace study notes that the local demographic detail is especially visible in later Edirne *salnames*, while earlier issues do not consistently provide the desired population detail for the relevant sancaks [7]. Treat each volume as a dated publication with page-level citations.

**French 1878 ethnographic compilation.** *Ethnographie des vilayets d’Andrinople, de Monastir, et de Salonique* is catalogued by HathiTrust as a 1878 Constantinople publication, 27 + 110 pages, excerpted from *Courrier d’Orient*, with a full-view copy at the University of California [13]. Internet Archive supplies a public-domain scan, PDF, full-text OCR and MARC metadata. It is valuable as a contemporary comparative lead for the post-1877/78 context, but its publication genre and provenance require source criticism; do not merge its figures with Ottoman census tables without documenting the difference.

### Tier 2: scholarly studies that expose the record base

**Population registers and census history.** A recent open study of the 1839 Bursa register explains the wider Ottoman register system and its limits: the 1830/31 and 1839/44 waves were pre-censuses aimed at conscription, poll-tax administration, fiscal assessment and movement control; entries were normally male-focused and organized by mahalle or village, household and person, with updates for births, deaths and migration. The article notes that registers exist for European provinces including Rumelia and Silistra, but its released microdataset is Bursa, not Eastern Thrace [9]. This is a sound schema and methods model for future Edirne work, not evidence that a ready-made Eastern Thrace microdataset exists.

The Turkish study on **population and settlement policy in Turkish Thrace, 1830–1914** states that the first broad 1831 enumeration counted males, the 1844 effort was not fully successful, and the most detailed nineteenth-century regional material comes from the 1881/82–1893 enumeration and later Edirne *salnames*. It identifies migration settlement in inland areas including Çorlu and Lüleburgaz and cites Ottoman Interior and council series for individual settlement cases (for example, DH.MKT, A.MKT.UM and Yıldız material) [7]. Those series references are useful research leads; they are not substitutes for checking the original catalogue entries.

Servet Mutlu’s **“Late Ottoman Population and Its Ethnic Distribution”** provides comparative tables for 1897, 1906/07 and 1914 and includes an Edirne appendix. It also supplies a critical warning: the 1897 figures may represent different registration periods between vilayets, and later Ottoman census reports require discretion. The article’s corrected figures are model-based estimates, not raw census observations, and the Edirne values should be kept separate from uncorrected counts [8].

Daniel Panzac’s French article **“L’enjeu du nombre. La population de la Turquie de 1914 à 1927”** is particularly useful for source criticism. Its contents explicitly treat geographic distribution, urban populations, reliability, Greek and Armenian data, and the 1914/1927 administrative maps [10]. It should be used to explain disagreements between Ottoman, ecclesiastical, consular and later national statistics rather than to choose a single “true” number.

**Urban and local records.** Ö. Sert-Sandfuchs’s dissertation, *Reconstructing a Town from its Court Records*, is a strong model for Tekirdağ/Rodosçuk. It identifies the first three Rodosçuk court books (RŞS 1510–1512) for 1546–1552, held at the National Library in Ankara, supplemented by waqf registers, *Mühimme* registers and *Tapu Tahrir* volumes from 1528, 1540–41 and the late sixteenth century. It explicitly describes Rodosçuk as modern Tekirdağ and demonstrates how quarters can be mapped from court entries [14]. This is a source lead for urban reconstruction, not a completed GIS dataset.

**Migration and violence.** For 1912–14, Eyal Ginio’s open-access Cambridge article on Cisr-i Mustafa Paşa/Svilengrad is a useful comparative borderland study. It combines Ottoman, Jewish, international and translated Bulgarian sources and shows how Balkan War violence, state policy and postwar exchange agreements reshaped communities [35]. Taner Akçam’s Princeton chapter is a higher-level study of the 1913–14 “emptying” of Eastern Thrace and the Aegean littoral, including official agreements, the Prime Ministerial Ottoman Archive and the dual-track mechanism of exchange and coercion; the chapter page is bibliographically verified but full text is access-controlled [36].

For the Republic and the post-1923 settlement record, the Turkish Historical Society publication **Trakya Bölgesi’ne İskân Edilen Göçmenler (1923–1960)** is unusually useful. Its contents and method cover Edirne, Tekirdağ and Kırklareli and list tables for 1921–29 settlement, Edirne 1924–34, 1927 provincial populations, and settlement origin/destination. The study states that it transcribed *Muhacir Esas Kayıt Defterleri* and grouped fields including origin, destination, age, sex, occupation, animals, agricultural tools and state aid. It separates 1923–34, 1935–38, 1939–49 and 1950–60 periods [12]. This is a safe bibliography and structured-data lead; any atlas import should use the publication’s exact table/page or the underlying registers, not an unreferenced rekeying.

A French OpenEdition article on the expulsion and diasporization of Greeks discusses Eastern Thrace and reproduces the important methodological distinction between Ottoman 1914, ecclesiastical/consular and later refugee statistics. It reports that 23% of refugees recorded in Greece in 1928 were from Eastern Thrace, but that figure is a refugee-origin distribution in a specific source context, not the total population of the region and not a substitute for a local census [11].

### Tier 3: heritage, maps and digital projects

**Heritage inventories.** The Kırklareli Cultural Heritage Inventory is a public, searchable project with filters for district and structure type. Its landing page reports 708 monument records and 516 site records and lists the districts of Merkez, Babaeski, Demirköy, Kofçaz, Lüleburgaz, Pınarhisar, Pehlivanköy and Vize. The project includes Ottoman and later religious, civic, transport, industrial, military and archaeological categories, plus intangible culture and a bibliography [16]. It is highly useful for discovery and spot-checking, but a bulk-ingest license and stable export schema were not verified.

The Kultur Envanteri portal gives Enez a page with 57 linked records and Wikidata/Q610751 reconciliation, and it provides a separate Edirne source record for *Edirne Taşınmaz Kültür Varlıkları Envanteri Cilt I* (Edirne Governorship Publications, 2013) with an Archive.org source link. These are good linkable catalog targets [17] [18]. They are not automatically authoritative substitutes for the Turkish Ministry’s registration files, and licensing/record completeness should be checked before copying all entries.

The Hrant Dink Foundation’s **Turkey Cultural Heritage Map** is a major discovery layer for Armenian, Greek, Syriac and Jewish heritage. The foundation says the map is based on research ongoing since 2014 and contains roughly 10,000 heritage sites plus multimedia and intangible heritage material [19]. It can materially improve the atlas’s multicultural coverage, but its data license, field-level export and completeness for Eastern Thrace were not verified in this pass. Use it first as a citation and candidate-place source.

**Historical maps.** The Library of Congress record **Map Empire Ottoman: division administrative** is a stable catalog page and identifies the map as an administrative/political division map with city tables and population insets [20]. David Rumsey’s search result identifies a 1909 **Edirne Vilayeti** map by Mehmet Nasrullah, Mehmet Rushtu and Mehmet Eshref, but the map viewer returned an access-verification page during this pass; treat the item as discovered, not fully inspected [21]. Houshamadyan provides an early-1900s pre-Balkan-Wars Edirne Vilayet map and states that its reconstruction relies mainly on Rahmi Tekin and Baş Yaşar’s *Osmanlı Atlası. XX. Yüzyıl başları* (2003) [15].

For Enez, the open scholarly article on Ainos explicitly identifies modern Enez in Edirne, supplies environmental and historical maps, and cites a nineteenth-century Ottoman map in the Istanbul University Archive (no. 92281), Kiepert’s 1891 map and a 1809 Choiseul-Gouffier map [34]. These map citations are more valuable than an unreferenced online image because they provide provenance and a route to original cartographic material.

### GIS and gazetteer layers

**Ottoman-Gazetteer.** The open GitHub repository describes itself as materials for a historical Ottoman gazetteer. It reports a 2016 TSV of 6,411 administrative units, an early RDF dump and an ontology, and is licensed CC BY-NC 4.0 [22]. Its data dictionary confirms that it transforms Tahir Sezen’s *Osmanlı Yer Adları*, stores Turkish Latin and Ottoman-script names, variants, administrative titles, superior units and optional Wikidata links; it also warns that the lowest-level coverage is incomplete and that many Republican “merkez” entries were filtered or tagged separately [23]. This is safe for **staging and reconciliation**, not automatic publication: preserve the source version, license and transformation provenance.

**World Historical Gazetteer (WHG).** WHG provides an index of place records with coordinates, historical metadata and linked toponyms, an interactive search interface, an API and dataset/collection workflows [24]. It is a good reconciliation target for normalized IDs and temporal names. It should not be treated as the sole authority for an Ottoman boundary or a disputed historical identification.

**Modern boundary scaffolding.** The Turkish General Command of Mapping offers a free ESRI SHP download for current provincial/district boundaries. Its own notice says the boundaries are derived for display, are not official legal boundaries and may be used freely for non-commercial fair use with attribution [25]. HDX/OCHA republishes a current Turkey Admin 0–2 package (81 provinces, 973 districts), with SHP, GeoJSON, geodatabase and XLSX downloads. It identifies the source as the General Command of Mapping, describes 1:1,000,000 source data cleaned and PCODE-assigned by UNHCR/OCHA, and licenses the published package CC BY-IGO [26]. These are safe **current** basemaps only; they must not be projected backward into Ottoman administrative borders.

## Candidate normalized places

The recommended canonical label is the modern Turkish place name. Historical forms should be stored as time-bounded aliases or source attestations, not collapsed into a single timeless name. The highest-risk conflations are city versus district/kaza, and ancient/Byzantine settlement names versus Ottoman or modern administrative units.

| Canonical place | Evidence-backed forms to stage | Confidence and normalization note |
|---|---|---|
| **Edirne** | Edirne; Adrianople; Andrinople (French scholarly usage, as in *vilayet d’Andrinople*); Ottoman province/vilayet context | **High** for Edirne ↔ Adrianople/Andrinople at the city/province level. Keep separate entities for the city, Edirne sancak and Edirne vilayet. The official *Osmanlı Yer Adları* should be used to verify Ottoman-script spelling and date spans [3] [10] [13]. |
| **Tekirdağ** | Tekirdağ; Tekfürdağı/Tekfürtaği; Rodosçuk/Rodoscuk; Rodosto; Raidestos/Rhaedestos; Bisanthe/Bysanthe | **High** for the main modern/Ottoman/classical chain. The Virtual Genocide Memorial page documents the sequence and 1912 sancak context, and GeoNames exposes a broad alternate-name list with ID 738927 [27] [28]. Keep the classical names as historical toponyms, not as automatic evidence of an identical medieval boundary. |
| **Kırklareli** | Kırklareli (since 1924); Kırk Kilise/Kırkkilise; Saránta Ekklisiés/Saranta Ekklisies (Greek); Lozengrad (Bulgarian) | **High** for the city-name chain. The bilingual/tri-lingual forms and the post-1924 change are documented in the regional page; Britannica independently confirms Kırk Kilise and the Lüleburgaz/Arcadiopolis relationship [29] [31]. Keep Kırklareli sancak separate from the city. |
| **Çorlu** | Çorlu; Tzarylus; Tzurulum/Tzurulus/Tzurule; Tschurla; Tzirallum/Tzirallon; Tzouroulos/Tsurulos; Tsorlou/Tyroloi | **Medium–high** for the variant set, because the Çorlu Chamber page supplies old-atlas forms and the regional page documents the Greek/Byzantine forms and the Ottoman kaza context [30] [32]. The Chamber page is a secondary local history page; verify each spelling against *salname*, court-book or Ottoman-script evidence before using as a normalized alias. |
| **Lüleburgaz** | Lüleburgaz; Arcadiopolis/Arkadiopolis/Arcadioupolis; Bergoule/Bergula (earlier settlement form) | **Medium–high** for Lüleburgaz ↔ Arcadiopolis. Britannica and the Byzantine Legacy page identify modern Lüleburgaz with Arcadiopolis and discuss the earlier Bergoule form [31] [33]. Treat the ancient/Byzantine site as a historical place relationship with uncertainty, not as an unqualified Ottoman administrative synonym. |
| **Enez** | Enez; Ainos (Greek Αἶνος/Αίνος); Aenus/Aenos (Latin/Latinized) | **High** for Enez ↔ Ainos at the settlement/site level. The OpenEdition study explicitly calls Ainos “modern Enez” in Edirne and provides the historical-geographical evidence [34]. Preserve separate ancient, Ottoman and modern temporal attestations. |

A practical normalized record should include: `canonical_name`, `source_name`, `script`, `language`, `name_type` (endonym/exonym/ancient/administrative), `valid_from`, `valid_to`, `feature_type`, `parent_at_time`, `geometry`, `geometry_precision`, `source_url`, `source_page`, `confidence`, and `notes`. Do not put a modern province code directly on an Ottoman kaza without a temporal relationship record.

## Major migration episodes to represent as source-linked events

1. **Post-1850 Muslim migration and settlement.** The Turkish Thrace study identifies the later nineteenth century as an “outside migration” period and specifically notes settlement in inland districts including Çorlu and Lüleburgaz. It links settlement planning to the Muhacirin Commission and cites Ottoman administrative correspondence [7]. Model this as a set of dated policies, arrivals and settlement actions, not as one regional total.
2. **Russo-Turkish War of 1877–78 and aftermath.** The episode is a major driver of Muslim displacement and borderland insecurity, but local totals are source-dependent. Use State Archives catalog searches and contemporary ethnographic/census material; do not reuse an undifferentiated empire-wide figure [2] [13].
3. **Balkan Wars, 1912–13.** Çorlu was an Ottoman command post, was taken by Bulgarian forces in December 1912 and retaken in July 1913 according to the regional source page [32]. The Ginio study shows how the wider Thracian borderland experienced violence, flight, state intervention and later exchange agreements [35].
4. **1913–14 expulsions and forced migration.** Akçam’s chapter explicitly centers the “emptying” of Eastern Thrace and the Aegean littoral and distinguishes formal exchange arrangements from coercive displacement [36]. This should be represented with contested claims and source attribution, not as a single neutral migration count.
5. **1922–24 collapse, Lausanne and the Greek–Turkish exchange.** The French demographic scholarship and OpenEdition article distinguish Ottoman, ecclesiastical/consular and refugee-origin statistics. The OpenEdition article reports Eastern Thrace as 23% of the refugees recorded in Greece in 1928, but this is not a population total [10] [11].
6. **1923–34, 1935–38, 1939–49 and 1950–60 Republican settlement.** The TTK publication divides these periods and identifies the *Muhacir Esas Kayıt Defterleri* as its most important operational source for 1934-era settlement, with provincial coverage for Edirne, Tekirdağ and Kırklareli [12]. These are the best candidates for a later structured migration dataset if the underlying registers or exact table pages are captured.

## Datasets and records that can be safely added now

### Safe for production (with normal provenance fields)

- **Six-place controlled vocabulary:** modern canonical name, only the historical forms listed above, source URL, name language/script, feature type and confidence. Use GeoNames/WHG IDs as reconciliation links, not as historical truth [23] [24] [27].
- **Edirne *salname* bibliographic manifest:** 28 volume records, H. 1287–1319 / 1870–1903, issue number, catalog/scan URL, availability status and scan/OCR format. The manifest is safe; derived statistics are not until page-level checking [4] [5] [6].
- **Current administrative basemap:** HGM SHP or HDX/OCHA SHP/GeoJSON/GDB, clearly labeled “current Turkey, not Ottoman.” Preserve license/attribution and the official warning that the HGM boundaries are display-derived [25] [26].
- **Source registry:** stable URLs and bibliographic records for State Archives, *Osmanlı Yer Adları*, the French 1878 ethnography, the TTK migration study, HathiTrust/IMS/Internet Archive *salname* routes, the Edirne and Kırklareli inventory projects and map catalogs.

### Safe as staged research assets, pending review

- **Ottoman-Gazetteer TSV/RDF material:** stage a versioned copy or link with CC BY-NC 4.0 and a note that it is a transformation of Sezen with partial geocoding and preliminary ontology [22] [23]. Do not silently relicense it as a production public-domain layer.
- **Heritage discovery links:** add source-level links and manually reviewed records from Kırklareli’s 708/516 inventory, Edirne’s 2013 inventory volume, Enez’s 57-record page and Hrant Dink’s multicultural heritage map. Bulk replication waits on export and reuse terms [16] [17] [18] [19].
- **Historical-map bibliography:** add LOC, Houshamadyan, Ainos-map citations and the discovered David Rumsey record with an “access not verified in this pass” flag for the latter [15] [20] [21] [34]. Public-domain Archive.org scans can be linked immediately; image redistribution still requires checking each item’s stated rights.
- **Migration bibliography and schema:** add event records for the episodes above, with source, date range, affected place and claim type. Do not add an aggregate number unless the number is transcribed from a named table/register and its denominator is known.

### Do not publish as authoritative yet

- Population figures copied from Wikipedia, unsourced ethnographic maps or a single partisan statistical tradition.
- “Ottoman boundary” polygons inferred from present-day provincial boundaries.
- OCR-only names or numbers from the 28 *salnames* without Ottoman-script/scan verification.
- A single combined total for “Eastern Thrace” across censuses that differ in date, territorial extent, sex coverage, religious categories and registration completeness.
- Full heritage copies from public websites where the license/export terms were not verified.

## Production-readiness assessment

**Overall: medium for discovery and controlled staging; low-to-medium for historical demographic publication; low for a finished Ottoman GIS layer.**

**Ready now:** a source-linked place vocabulary; a 28-volume Edirne *salname* manifest; current administrative geometry; and a research bibliography with language, date and access flags.

**Ready after one editorial pass:** page-level extraction from selected *salnames* (start with 1870, 1882, 1892/93, 1898 and 1903); manually reviewed heritage records for the six targets; and a small map index with rights and resolution fields.

**Requires specialist production work:** Ottoman-script transcription, transliteration QA, reconciliation of city/kaza/sancak/vilayet levels, digitization of court and population registers, and historical boundary reconstruction. A minimum acceptance test should require two independent attestations for an alias, one dated administrative attestation for a hierarchy, an explicit geometry uncertainty class, and a source-page citation for every demographic value.

## Evidence gaps and next research actions

- **Item-level State Archives evidence is still missing.** The public catalogue page verifies the system and access workflow, but this pass did not log exact BOA record IDs for each target town. Next step: registered searches for `Edirne/ادرنه`, `Tekfurdağı/تكفور داغى`, `Rodosçuk`, `Kırkkilise`, `Çorlu`, `Lüleburgaz` and `Enez/Ainos`, with series, folder and image references recorded.
- **The *salname* OCR is not production-grade by itself.** Internet Archive exposes scans and OCR, but its own metadata shows mixed-script detection and a non-Ottoman-Turkish OCR label [5]. Build a page-level verification workflow and preserve the original image page.
- **The census denominator problem is unresolved.** 1830/31 and 1839/44 registers are male-focused pre-censuses; later reports differ in registration timing and undercount. The Mutlu, Panzac and Kabadayı studies should be used together, not flattened into one series [8] [9] [10].
- **Historical administrative geometry is not yet open and consistent.** Sezen is primarily a name/administrative reference; HGM and HDX are current boundaries. A historical polygon layer will require map georeferencing and dated hierarchy evidence.
- **Village-level coverage is uneven.** Sezen intentionally excludes most villages and mezras without nahiye status [3]. The TTK migration work may contain village-level origins and destinations, but the underlying register scans and exact row-level export were not located in this pass [12].
- **Heritage inventories have unknown bulk-reuse conditions.** Public visibility is verified, but data dictionaries, export endpoints, update policy and licenses require a separate check [16] [17] [19].
- **Cross-language normalization remains incomplete.** Turkish, Ottoman Turkish, Greek, Bulgarian, German and French sources use different transliteration conventions. The candidate list above is intentionally conservative; every alias should be attached to the exact source and date rather than expanded from search snippets.
- **Migration totals remain contested and asymmetric.** Ottoman, Greek ecclesiastical/consular, Bulgarian, Armenian and later Turkish sources were produced for different administrative or political purposes. The atlas should publish claims with provenance and uncertainty rather than adjudicating a single total.

## References

[1]: https://katalog.devletarsivleri.gov.tr/ "T.C. Cumhurbaşkanlığı Devlet Arşivleri Başkanlığı catalogue"
[2]: https://www.devletarsivleri.gov.tr/Sayfalar/Sayfa.aspx?icerik=12&h=AA54A70923B86C8AD74249E0E555F5948A9923AE2A51E06E2DFE30B4D635A1E2 "Arşivde Araştırma Esasları"
[3]: https://www.devletarsivleri.gov.tr/varliklar/dosyalar/eskisiteden/yayinlar/genel-mudurluk-yayinlar/osmanli_yer_adlari.pdf "Tahir Sezen, Osmanlı Yer Adları, expanded second edition"
[4]: https://ims.forth.gr/en/page/view?id=47 "Salname (almanacs) of the Balkan and island provinces of the Ottoman Empire"
[5]: https://archive.org/details/edirne-vilayet-salnamesi "Edirne Vilayet Salnamesi, Internet Archive scan item"
[6]: https://catalog.hathitrust.org/Record/003514333 "Salname-yi Vilâyet-i Edirne, HathiTrust catalog"
[7]: https://dergipark.org.tr/tr/download/article-file/321363 "Kaya Göktepe, Türkiye Trakya’sında Nüfus ve İskân Politikaları (1830–1914)"
[8]: https://dergipark.org.tr/en/download/article-file/213586 "Servet Mutlu, Late Ottoman Population and Its Ethnic Distribution"
[9]: https://pmc.ncbi.nlm.nih.gov/articles/PMC11148089/ "Kabadayı et al., A nineteenth-century urban Ottoman population micro dataset"
[10]: https://www.persee.fr/doc/remmm_0035-1474_1988_num_50_1_2253 "Daniel Panzac, L’enjeu du nombre. La population de la Turquie de 1914 à 1927"
[11]: https://journals.openedition.org/anatoli/426 "Michel Bruneau, L’expulsion et la diasporisation des Grecs d’Asie Mineure et de Thrace orientale"
[12]: https://www.ttk.gov.tr/karekod/trakyabolgesigocmenler.pdf "Ayşegül İnginar Kemaloğlu, Trakya Bölgesi’ne İskân Edilen Göçmenler (1923–1960)"
[13]: https://archive.org/details/ethnographiedesvilayetsdandrinople "Ethnographie des vilayets d’Andrinople, de Monastir, et de Salonique, 1878"
[14]: https://edoc.ub.uni-muenchen.de/8676/1/Sert-Sandfuchs_Oezlem.pdf "Özlem Sert-Sandfuchs, Reconstructing a Town from its Court Records"
[15]: https://www.houshamadyan.org/mapottomanempire/vilayet-of-edirne.html "Houshamadyan, Province of Edirne map and source notes"
[16]: https://kirklarelienvanteri.gov.tr/ "Kırklareli Kültür Varlıkları Envanteri"
[17]: https://kulturenvanteri.com/bolge/turkiye/marmara-bolgesi/edirne/enez/ "Enez Kültür Envanteri"
[18]: https://kulturenvanteri.com/kaynak/edirne-tasinmaz-kultur-varliklari-envanteri-cilt-i/ "Edirne Taşınmaz Kültür Varlıkları Envanteri Cilt I"
[19]: https://hrantdink.org/en/activities/projects/cultural-heritage/12-turkey-cultural-heritage-map "Hrant Dink Foundation, Turkey Cultural Heritage Map"
[20]: https://www.loc.gov/resource/g7431f.ct002181/ "Library of Congress, Map Empire Ottoman: division administrative"
[21]: https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~311584~90081078:Edirne-Vilayeti "David Rumsey, Edirne Vilayeti (1909) catalog record"
[22]: https://github.com/whanley/Ottoman-Gazetteer "Ottoman-Gazetteer repository"
[23]: https://github.com/whanley/Ottoman-Gazetteer/blob/master/data/metadata_dictionary.md "Ottoman-Gazetteer data dictionary"
[24]: https://whgazetteer.org/ "World Historical Gazetteer"
[25]: https://www.harita.gov.tr/urun/turkiye-mulki-idare-sinirlari/232 "Turkish General Command of Mapping, Türkiye Mülki İdare Sınırları"
[26]: https://data.humdata.org/dataset/cod-ab-tur "HDX/OCHA, Türkiye – Subnational Administrative Boundaries"
[27]: https://www.virtual-genocide-memorial.de/region/the-black-sea-marmara-and-aegean-littorals-eastern-thrace-and-central-anatolia/edirne-adrianople-vilayet-province/sancak-of-rodosto-%E1%BF%A5%CE%B1%CE%B9%CE%B4%CE%B5%CF%83%CF%84%CF%8C%CF%82-raidestos-%CE%B2%CE%B9%CF%83%CE%AC%CE%BD%CE%B8%CE%B7-bisanthe-tekfurtagi-tekirdag/ "Rodosto/Tekirdağ regional toponym and administrative page"
[28]: https://www.geonames.org/search.html?q=Uturuki&country=TR&startRow=50 "GeoNames search results showing Tekirdağ and alternate names"
[29]: https://www.virtual-genocide-memorial.de/region/the-black-sea-marmara-and-aegean-littorals-eastern-thrace-and-central-anatolia/edirne-adrianople-vilayet-province/sancak-of-kirkkilise-saranta-ekklisies-%CF%83%CE%B1%CF%81%CE%AC%CE%BD%CF%84%CE%B1-%CE%B5%CE%BA%CE%BA%CE%BB%CE%B7%CF%83%CE%B9%CE%AD%CF%82-kirklareli/ "Kırkkilise/Kırklareli/Saránta Ekklisiés/Lozengrad page"
[30]: https://eng.corlutso.org.tr/content-221-history.html "Çorlu Chamber of Commerce and Industry, history and recorded name variants"
[31]: https://www.britannica.com/place/Kirklareli "Encyclopaedia Britannica, Kırklareli"
[32]: https://www.virtual-genocide-memorial.de/region/the-black-sea-marmara-and-aegean-littorals-eastern-thrace-and-central-anatolia/edirne-adrianople-vilayet-province/sancak-of-rodosto-%E1%BF%A5%CE%B1%CE%B9%CE%B4%CE%B5%CF%83%CF%84%CF%8C%CF%82-raidestos-%CE%B2%CE%B9%CF%83%CE%AC%CE%BD%CE%B8%CE%B7-bisanthe-tekfurtagi-tekirdag/kaza-of-corlu-t%CF%83%CF%8C%CF%81%CE%BB%CE%BF%CF%85-tsorlou-%CF%84%CF%85%CF%81%CE%BF%CE%BB%CF%8C%CE%B7-tyroloi/ "Çorlu/Tsorlou/Tyroloi regional page"
[33]: https://www.thebyzantinelegacy.com/arcadiopolis "Arcadiopolis/Lüleburgaz historical page"
[34]: https://journals.openedition.org/anatoliaantiqua/882 "A. Dan, Ainos in Thrace: Research Perspectives in Historical Geography and Geoarchaeology"
[35]: https://www.cambridge.org/core/journals/international-journal-of-middle-east-studies/article/from-cisri-mustafa-pasa-to-svilengrad-the-ethnic-homogenization-of-a-thracian-town-in-the-balkan-wars/215EC9FA51CEB3FDDDA1FDE2900EB73C "Eyal Ginio, From Cisr-i Mustafa Paşa to Svilengrad"
[36]: https://princeton.universitypressscholarship.com/view/10.23943/princeton/9780691153339.001.0001/upso-9780691153339-chapter-003 "Taner Akçam, The Aftermath of the Balkan Wars and the Emptying of Eastern Thrace"
[37]: https://guides.loc.gov/maps-genealogy-eastern-europe/reference/gazetteers "Library of Congress, Cartographic Resources for Genealogical Research: Gazetteers"

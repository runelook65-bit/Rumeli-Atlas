# Rumelia Atlas · pilot research and implementation notes

## BayAtlas review, 1 October 2026
Observed in browser: map-first full-screen surface, floating search, Atlas/Swiss style controls, relief shading / contours / land cover / boundaries toggles, URL viewport hash. Basemap tiles did not render in this session. Therefore terrain rendering, zoom-dependent labels, actual search quality and performance could not be evaluated. This pilot borrows map-first hierarchy, restrained controls and readable names; does not claim replication of the unseen cartography.

## Evidence and open data
The pilot has 8 entities / 6 linked scholarly or institutional sources in lib/atlas-data.ts. Facts are paraphrased, not copied as articles. TDV entries have author, publication date, bibliography and locators; they are scholarly secondary sources, not direct inspection of archival folios. CEIPA is a university inventory. Its Burmali entry has an erroneous translated status field; explanatory text is used, conflicting field is disclosed. Coordinates were manually assigned approximately from described locations, not extracted from the cited historical documents. They must be checked against monument inventories and surveys before precise analysis.

Natural Earth current-country geometry was fetched from the official maintainer's natural-earth-vector GitHub repository (ne_10m_admin_0_countries.geojson). Selected 17 countries provide geographical context. Kosovo polygons reflect this dataset's cartographic convention, not a sovereignty determination. Geometry is not an Ottoman boundary. OSM raster source is optional and visibly labelled contemporary. No live historical PMTiles archive is attached.

Next sources: MAKStat 2021 municipal ethnicity, mother tongue, religion tables; Kosovo Agency of Statistics 2024 municipal and settlement tables; original Ottoman tahrirs and provincial yearbooks in institutional archives; CEIPA inventories; UNESCO and national heritage registers; Europeana archival imagery with item-level rights checks; OpenHistoricalMap (feature-level source/date and geometry review mandatory). Public access is not equivalent to a reuse license. Census data must retain territorial scope and category definitions.

## Temporal rules
An observed census value belongs only to its observation year. No interpolation or carrying forward. 1354 is the atlas lower limit, not a city founding date. Publication-based attestations (Alaca Tetovo, Harabati) appear only from 2001 until earlier evidence is processed; this is explicitly not a construction date. Heritage survivors shown after an attestation are not claims of verified 2026 condition: source-as-of dates remain visible. Burmali historical existence uses [1495,1925); in-year destruction date is unknown. Lost mode spans all years and explicitly bypasses normal year filtering. Partial complex loss uses a complex-centre proxy and unknown loss date, not invented vanished building footprints. Prizren language statement is dated to source publication 2007, with historical reference period disclosed as imprecise. Prizren administration interval is a source-supported centre designation, not a continuously reconstructed polygon. Tetovo administrative observation is limited to 1562, not the whole Ottoman period.

## Model
entities: physical or geographical identity and geometry provenance.
names: independently dated aliases and languages.
observations: separate ethnicity, language, religion, administration, settlement_origin, heritage, migration, transport, cultural_region; every statement has a source and locator.
measurements: value, unit, denominator, estimate flag/method, territorial scope.
alternative_interpretations: alternative statement with independent source.
events: bounded dates, confidence, source locator.
heritage_states: source-as-of condition; unknown change dates retained.
See database/001_atlas.sql. RLS allows only published data reads; client editing not enabled. SQL is prepared, not applied to a live Supabase instance. Review geometry, resolve original archival references, and attach a Supabase project before importing for production.

## Scaling gate
1. Confirm original source references and permission for archival imagery.
2. Review exact coordinates / cadastral footprints and name validity intervals.
3. Import reviewed records into PostGIS; preserve provenance on every observation.
4. Reconstruct a single dated administrative sheet; georeference, record uncertainty, compare independent sources, then publish its polygons.
5. Add contemporary census snapshots with matching geographical units.
6. Build versioned PMTiles from reviewed feature geometries with source-layer contracts, CORS/range support and source IDs retained.
7. Extend settlement and lost-neighbourhood inventory; no inference from mosque presence to ethnicity.
8. Extend the adjacent region only after source and geometry review passes.

This is an evidence-bearing first pilot, not a completed 672-year Balkan history dataset. No extinct settlement, ethnicity distribution, historical rail route or migration geometry has yet been validated in this dataset.

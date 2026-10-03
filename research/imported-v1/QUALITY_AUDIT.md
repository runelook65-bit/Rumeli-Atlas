# QUALITY_AUDIT

Manual audit completed against the cited evidence memos and source catalog on 2026-10-01. The audit is a first-pass source-to-row check; it does not replace reading the underlying Ottoman folios.

## Sample sizes

- Settlements/gazetteer: 20 sampled claims (14 place entities plus 6 named quarter/derbend claims).
- Heritage: 10 sampled objects/components.
- Demographics: 10 sampled rows.
- Migrations: 5 sampled events.

## Results

| Sample | Result | Notes |
|---|---|---|
| Skopje, Tetovo, Prizren and adjoining place identities | PASS | Names, coordinates and confidence match the gazetteer memo; uncertain variants remain undated or NULL. |
| Veşlovik/Yeşlovik, Mavriyani/Mavreva, Pavrova | PASS WITH LIMITATION | Historical derbend evidence is cited; modern coordinates intentionally absent. |
| 10 heritage records across Skopje, Tetovo and Prizren | PASS | Names, status and dates match the heritage memo; destruction is used only where explicit. |
| Skopje 1833, Tetovo 1452/53 and 1467/68, Prizren 1477/1571 | PASS WITH LIMITATION | Source-native categories preserved; Tetovo 146 vs 159 conflict remains separate. |
| 1877-78, 1912-13, 1918-41, 1945-67 and 1998-99 migration events | PASS WITH LIMITATION | Wider-area totals are labeled as such; no route geometry invented. |

## Issues found and disposition

1. **Tetovo 1452/53 Christian count conflict:** retained as DEM-0007 and DEM-0008 with `DISPUTED`; no averaging.
2. **Ottoman identity categories:** Muslim, Christian, Yahudiyân, Kıbtî, Cemaat-i Müslümanan and Cemaat-i Gebran remain source categories; no ethnic inference was added.
3. **Coordinate precision:** building, approximate, quarter and village-centroid labels are retained; no exact survey claim is made.
4. **Null geometry:** cultural regions and migration claims remain valid GeoJSON features with null geometry; this is intentional and documented.
5. **Rights:** historical map and GIS records retain license restrictions/unknowns; no copyrighted scan is redistributed.

No serious fabrication or broken source relationship was found in this first audit. The largest remaining risk is not a detected false record but incomplete extraction of primary Ottoman pages and historical polygons.

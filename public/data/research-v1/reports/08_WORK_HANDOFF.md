# Work handoff for the next AI/development environment

## Import order

1. Import `data/sources.csv` and enforce unique `source_id`.
2. Import `data/places.csv`, then `data/place_names.csv`.
3. Import `data/administrative_units.csv` and keep date validity separate from place identity.
4. Import `data/demographics.csv`, `data/heritage.csv` and `data/migrations.csv`, validating all source foreign keys.
5. Load `geo/settlements.geojson` and `geo/heritage.geojson`. Treat `geo/cultural_regions.geojson` and `geo/migrations.geojson` as claim layers because their null geometry is intentional.
6. Load `historical_maps.csv` and `gis_sources.csv` as discovery/provenance catalogs, not as automatically redistributable assets.

## Suggested relational schema

Use `places(place_id PK)`, `place_names(name_id PK, place_id FK)`, `sources(source_id PK)`, `demographics(demographic_id PK, place_id FK, source_id FK)`, `administrative_units(admin_id PK, parent_admin_id self-FK, source_id FK)`, `heritage(heritage_id PK, place_id FK, source_id FK)`, and `migrations(migration_id PK, origin_place_id nullable FK, destination_place_id nullable FK, source_id FK)`. Add a claims table later for one-row-per-source assertions and conflict groups.

## Temporal queries

For a requested year `Y`, include rows where `valid_from` is NULL or <= Y and `valid_to` is NULL or >= Y, but never interpolate between observations. For ranges described only as centuries or approximate periods, preserve the textual period and expose confidence instead of converting it to a false exact date.

## Map generation

Use WGS84 longitude/latitude order for GeoJSON. Show `coordinate_precision`, confidence, `source_id`, and notes on every feature. Do not draw historical administrative polygons until a dated map/register extraction supplies geometry. Do not draw migration arrows from null endpoints; present them as source-claim records.

## Verification queue

Acquire and transcribe the underlying Ottoman pages named in `reports/03_SOURCE_CATALOG.md`; confirm all salname pages for each year; resolve the three Tetovo derbend candidates; obtain official cadastral/heritage exports; add Prizren rural settlements and municipality historical series; and run a second audit after upgrades.


## Regional expansion files

The 13 regional modules are intentionally separated from the pilot normalized tables. Import `data/regional_research_status.csv` as a project-status table, `data/regional_sources.csv` as a discovery/source registry, and `data/regional_place_candidates.csv` only as a staging queue. Do not promote candidate rows into `places.csv` without a source-backed place-name equivalence, coordinate precision and date scope. The detailed regional memos in `reports/` are the authoritative research handoff for the next extraction phase.

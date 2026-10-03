# Data dictionary

All files are UTF-8 CSV or RFC 7946 GeoJSON. `NULL` means the evidence was not established. Every non-trivial row has a `source_id` foreign key into `data/sources.csv`.

- **places.csv:** persistent place entities; latitude/longitude are representative WGS84 points only; `coordinate_precision` distinguishes settlement centroid, historical estimate, approximate or unknown.
- **place_names.csv:** multilingual/source-specific names attached to a place; dates are NULL unless directly established.
- **demographics.csv:** source-native demographic observations; `category_type`, `category_name_original`, `measurement_type` and notes preserve the source's universe and unit. Conflicts are separate rows.
- **administrative_units.csv:** date-bounded Ottoman/modern administrative labels. No polygon is implied by a row.
- **heritage.csv:** named cultural-heritage objects and components; `status` uses extant, partially_extant, converted, reconstructed, ruined and destroyed conservatively.
- **migrations.csv:** movement claims; numbers are source-stated estimates or plans, not reconciled totals. NULL origin/destination means a route endpoint was not modeled as a persistent place entity.
- **historical_maps.csv:** map metadata and rights/georeferencing notes; map scans are not redistributed.
- **gis_sources.csv:** candidate datasets and license/usage restrictions.
- **GeoJSON:** `settlements.geojson` and `heritage.geojson` contain point features. `cultural_regions.geojson` and `migrations.geojson` intentionally use null geometry where no source-supported polygon/line was extracted.

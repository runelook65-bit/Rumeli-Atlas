# Pilot validation · 1 October 2026

Passed: TypeScript compilation; production build; alias lookup for Filibe/Plovdiv, Üsküp/Skopje and Kalkandelen; source linkage and coordinate bounds for all 8 objects; exact-year demographic filtering; no carry-forward of 1894 values into 1895; hâne versus kişi units; city versus kaza scope; Burmalı Camii disappears at 1925 in historical view and remains discoverable in Lost mode; unknown founding dates are not invented.

Prepared but not executed: PostGIS migration (no live database connection). Browser rendering, marker interaction, mobile layout, external raster tile availability and WebMCP registration/state read-back are not verified in this session because the required control-browser skill is unavailable. Supervised preview started, but loopback HTTP access was unavailable; this does not establish a rendered-browser pass. Build verification is not a substitute for visual QA.

Every coordinate is approximate. Current heritage condition uses the source's own date and is not asserted to have been field-checked in 2026. The lost complex proxy does not reconstruct vanished structure footprints. Further archival and geometry review is a release gate for analytical use.

## Map-loading repair
Production logs identified GET /_next/static/chunks/maplibre-gl-worker.mjs returning 404. MapLibre 6's separately shipped worker was absent from the packaged client. The worker and same-version shared module are now copied into public/maplibre at every dev/build startup; setWorkerUrl points to that explicit same-origin location before map creation. Production output was checked for exact file parity, and the worker's full module dependency chain imports successfully. Marker activation now uses style.load so optional raster requests do not delay the historical overlays. TypeScript, production build and pilot temporal checks pass after this change. Full rendered-browser QA remains unavailable.

## Compatible renderer repair and browser validation
The internal browser reproduced GPUInitializationError: WebGL2 is required. MapLibre remains the primary renderer; initialization failure now automatically selects Leaflet's SVG/DOM renderer with the same local geographic files, marker actions, layer settings and camera controls. No WebGL support or external raster response is required for the local vector basemap. Browser validation passed in the WebGL2-unavailable environment: 84 SVG geographic paths and 6 historical markers appeared; Balkan-wide view and pilot camera controls operated; Lost Rumelia listed 2 objects and the Burmali record opened its own 1495/1925 chronology; selecting 1925 removed the Burmali marker and changed visible markers from 6 to 5; selecting 1894 restored 6. Fixed map-canvas stacking so Leaflet's panes cannot obscure search or atlas controls. Added explicit switch styling to preserve visible checked states.


## 2026-10-01: blank-map opening hardening
- Default interactive renderer starts directly with Leaflet, without waiting for a WebGL context or map worker.
- Natural Earth geometry is included in server-rendered SVG markup (67 geographic paths); the SVG remains visible until interactive loading completes.
- Mobile layout has explicit minimum map height and hides the caption to preserve the map viewport.
- Browser reload verified Leaflet readiness, dimensions 1055 × 740, and 67 fallback paths in the DOM. 1925 filter verified 5 interactive markers.
- TypeScript and pilot provenance/time checks passed. iOS Safari and the user's authenticated production session were not directly tested.


## Mobile usability update, 2026-10-02
- Tested the real atlas within a 390 × 740 browser iframe; the temporary wrapper was removed before the production build.
- Compact 82px header, 82px timeline, collapsible records, and bottom sheets preserve map area.
- Verified records list opens and selecting Burmalı Camii closes it and opens the source-backed detail panel.
- Initial mobile bounds focus on the pilot corridor; settlement labels are placed above pins and hidden at Balkan overview zooms.
- Browser screenshot confirms distinct Prizren, Kalkandelen and Üsküp labels. This is responsive Chromium QA, not an iOS Safari test.


## Research package v1 import — 2026-10-02
- Original 9 CSV tables, 4 GeoJSON datasets and 8 reports plus package quality audit are available in the research catalog. No supplied executable was run.
- Source IDs and place foreign keys validated; 32 package sources merge with 6 existing sources.
- 12 located settlement/site entities and 31 heritage objects merge with 8 originals into 44 distinct objects. 2 unlocated settlements remain in the catalog.
- Religion, ethnicity, language and community/legal categories remain separate. Household, family, person and percentage measures are not mixed.
- Tetovo 1452 values 146 and 159 remain separate disputed observations. Historical counts are shown only in the supplied observation year.
- Century-only construction claims use the upper end of the stated century for conservative first display, labeled as an uncertain interval, never as an exact founding year. Undated records are shown only as current evidence or in Lost Rumelia.
- 10 migration claims and 3 cultural regions retain null geometry. No routes or boundaries are fabricated. Administrative claims use reference centers only.
- Source confidence is retained as package metadata; import is not independent verification. Component demolition or flood damage is not converted to whole-building destruction.
- Browser verified 35 records at 1894, catalog tabs, all 10 migration claims and downloadable reports/data.

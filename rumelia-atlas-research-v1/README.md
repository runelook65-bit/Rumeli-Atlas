# Rumelia Atlas Research v1

This archive is the first evidence-backed pilot package for reconstructing historical human geography along the **Skopje/Üsküp–Tetovo/Kalkandelen–Prizren** corridor. It is designed for import into a future historical atlas. It is not a political-territorial claim and does not treat Turkish, Muslim, Ottoman, Turkish-speaking, Yörük, Tatar, Albanian, Bosniak, Roma or other categories as interchangeable.

## Contents

- `reports/` — executive summary, methodology, source catalog, pilot report, regional plan, data dictionary, limitations and operational handoff.
- `data/` — source-traceable CSV tables.
- `geo/` — RFC 7946 GeoJSON layers.
- `pilot/` — scoped dossiers for Skopje, Tetovo and Prizren.
- `workflow/` — detailed evidence memos retained from the research pass.
- `data/regional_research_status.csv` — machine-readable status for 13 additional Balkan modules.
- `data/regional_sources.csv` — source-discovery URLs extracted from the regional memos.
- `data/regional_place_candidates.csv` — candidate anchors explicitly marked discovery-only, not production places.
- `reports/09_REGIONAL_EXPANSION_STATUS.md` and `reports/09_–21_...` — regional expansion report and module memos.

## Immediate use

Read `reports/01_EXECUTIVE_SUMMARY.md`, then `reports/08_WORK_HANDOFF.md`. Import `data/sources.csv` first. Every major record has a `source_id`. Follow that key to the cited URL, archive shelfmark or page reference. `NULL` is intentional where evidence was not established.

## Important cautions

Ottoman registers are not modern censuses. The source-native categories and measurement units are retained. Conflicting values are not averaged. The GeoJSON layer for cultural regions contains null geometries because no source-supported boundary was extracted in this pass. The migration layer contains claim records with null geometries because route lines were not defensibly digitized.

## Version

Pilot v1; research access checked 2026-10-01. See the reports for acquisition priorities and unresolved evidence gaps.

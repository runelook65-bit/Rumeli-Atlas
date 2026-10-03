# Regional expansion status — Rumelia Atlas v1

The pilot corridor remains the only deeply normalized place/demographic/heritage dataset. The remaining Balkan regions are now added as **source-backed regional research modules**, not as fabricated complete census layers. Each module has a detailed memo, source URLs, candidate anchors, readiness judgment and an explicit next acquisition step.

## Coverage

The expansion covers Eastern Thrace, Bulgaria/Deliorman, Bulgarian Rhodopes, Dobruja, Western Thrace, Greek Macedonia, North Macedonia beyond the pilot, Kosovo beyond Prizren, Albania, Serbia/Sandžak, Bosnia and Herzegovina, Montenegro and Romania/Dobruja.

See `data/regional_research_status.csv` for machine-readable status, `data/regional_sources.csv` for extracted source discovery links, and `data/regional_place_candidates.csv` for non-production candidate anchors.

## Interpretation rule

A candidate place is not a verified place entity until it has a persistent place_id, source-backed name equivalence, date scope, coordinate precision, and source_id. Regional memos may report census or migration figures at provincial or national scales, but those figures must not be copied into the pilot demographic table without denominator, unit and category verification.

## Common next step

For each module: acquire primary register/catalog records; transcribe page/folio references; resolve multilingual names; obtain dated administrative geometry; add heritage object IDs and rights metadata; then run the same duplicate, chronology, identity and coordinate audit used for the pilot.

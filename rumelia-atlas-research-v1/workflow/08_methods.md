# Pilot methods and limitations: the Skopje–Tetovo–Prizren corridor

Treat the corridor as a **set of claims about connections**, not as a single self-evident line. The evidence reviewed here supports at least three different objects: the established transport relationship between Skopje and Tetovo, the proposed Tetovo–Prizren road/tunnel connection, and the much broader official branding of Corridor VIII. The European Commission describes Corridor VIII as a strategic TEN-T, multimodal network running from southern Italian ports through Albania, North Macedonia and Bulgaria to the Black Sea [12]. A North Macedonian ministry statement reported by MIA describes the proposed Tetovo–Prizren tunnel as part of Corridor 8 and as contributing to connections among Skopje, Tirana and Prishtina [11]. These statements are compatible at different scales; neither by itself defines a canonical “Skopje–Tetovo–Prizren corridor” centerline.

## Recommended classification rules

Use one record for each **claimable entity** and keep the corridor relationship explicit. Do not put a road, a proposed project, a city, and an ethnic or linguistic observation in the same undifferentiated feature class.

1. **`settlement`** — a named populated place such as Skopje, Tetovo, Prizren, Brodec or Veshala. Store a representative point only if the source says what it represents (city hall, settlement centroid, locality label, or other). A point is not an administrative boundary.
2. **`transport_link_existing`** — a road or rail link evidenced as present or operational by a current authoritative network or direct observation. The World Bank’s 1999 Transport Sector Project is useful historical evidence that improving the Tetovo–Grupcin road was a transport objective, but it is not evidence of the road’s current geometry or condition [10].
3. **`transport_link_planned`** — a proposed, feasibility-stage, agreed, or otherwise not-yet-verified link. The 12 January 2024 report says the two governments signed a co-financing agreement for a 6.4 km tunnel, with an additional 17 km of road on the Tetovo–Prizren connection; it does not provide an as-built survey or opening evidence [11]. Until a current primary source confirms construction completion and operation, classify this as `planned` or `implementation_announced`, not `operational`.
4. **`transport_project`** — a project container whose status may change over time. Link it to one or more proposed segments, rather than treating the project name as the segment itself.
5. **`energy_link`** — a power interconnection or other non-transport infrastructure. Keep this separate even when an official source calls it a corridor. A transport “Corridor VIII” label must not be used to classify an electricity line.
6. **`corridor_claim`** — a source’s assertion that a feature belongs to a named corridor. Store the source’s wording and scope. This is the appropriate place for a broad Corridor VIII relation when no authoritative local centerline is available.
7. **`toponym_variant`** — a language, script, transliteration, historical, or source-specific name attached to the same place identifier. Do not create a new settlement merely because a second language uses a different spelling.
8. **`source_claim`** — a document-level or observation-level claim that cannot yet be resolved into a geometry. It may have null geometry and should still be retained for auditability.

Use a small, controlled status vocabulary: `operational`, `under_construction`, `planned`, `feasibility`, `historical`, `cancelled`, and `unknown`. Add `status_as_of` and `status_source_date`. “Agreement signed”, “feasibility route selected”, “construction started”, “construction complete”, and “open to traffic” are different milestones. Do not collapse them into `built`.

Use a separate `corridor_role`: `anchor`, `segment`, `approach`, `crossing`, `node`, `context`, or `claim_only`. Skopje, Tetovo and Prizren can be `anchor`/`node` records. Brodec and Veshala can be `route_anchor` records only when the cited source actually uses them as route points. An endpoint mentioned in prose is not automatically a border crossing or a constructed road.

For a pilot, use a **two-layer representation**:

- **Evidence layer:** one row per source claim, with verbatim wording, source date, source URL, source authority, and geometry status.
- **Interpretation layer:** one normalized entity or segment, with a stable ID and an explicit link to all supporting and contradicting claim IDs.

This prevents a later source from silently overwriting an earlier claim. It also makes it possible to show the difference between “the ministry announced a tunnel” and “a mapped tunnel exists.”

## Confidence and coordinate precision

Do not use decimal places as a confidence score. RFC 7946 explicitly says that the number of digits in a GeoJSON coordinate must not be interpreted as uncertainty [1]. GBIF’s georeferencing guidance makes the same practical distinction: coordinate precision is only one contributor to total uncertainty, and coordinates without a documented uncertainty have unclear meaning [2].

Record at least four separate concepts:

- **`evidence_grade`** — strength of the source for the claim, not the location. A practical pilot scale is `A` for a current primary authority or survey, `B` for an institutional secondary source, `C` for a peer-reviewed or otherwise credible scholarly interpretation, and `D` for an unverified report or crowd assertion.
- **`claim_confidence`** — `high`, `medium`, `low`, or `unresolved`. Use `high` only when a current primary source directly supports the claim and the scope is clear, or when two independent sources agree. Use `medium` for one credible source with limited scope. Use `low` when the source is indirect, old, translated without a checked original, or contradicted. Use `unresolved` when sources cannot be reconciled.
- **`coordinate_uncertainty_m`** — the radius or other quantified uncertainty around the geometry. For a settlement point, this is the uncertainty of the representative point, not the settlement’s area. For a textual route with only endpoints, leave it null rather than inventing a line.
- **`geometry_method`** — for example `survey`, `official_network`, `geocoded_locality`, `map_digitized`, `centroid`, `point_radius`, or `no_geometry_claim_only`.

For GeoJSON export, use WGS 84 longitude/latitude in **`[longitude, latitude]` order**. RFC 7946 makes WGS 84/CRS84 the GeoJSON coordinate reference system and allows an optional third height value in metres; alternative CRS handling was removed from the core format because of interoperability problems [1]. Transform source coordinates into WGS 84 before export, and preserve `source_crs` and `transform_method` in properties. Do not use a fourth “M” coordinate for route measures in a portable GeoJSON file.

Round only to the precision justified by the source and the stated uncertainty. Six decimal degrees is about 10 cm in the RFC’s size discussion, but that does **not** mean a phone geocode is accurate to 10 cm [1]. For a city-centre point whose uncertainty is 1–5 km, six decimals are false precision; three or four decimals may be appropriate for display, while the stored uncertainty remains the controlling field. For a surveyed vertex, preserve the source precision and its stated accuracy. If the source gives no accuracy, store the coordinate as unquantified and make the missing uncertainty visible.

For vague localities or route corridors, use GBIF’s point-radius logic: store a corrected centre, a maximum uncertainty radius, the datum, and the locality text; or use a polygon/line only when the source actually supports the shape [2]. A bare point is not an adequate representation of a route, an administrative area, or a project footprint. RFC 7946 allows a Feature’s geometry to be `null`, which is preferable to a fabricated line [1].

## Handling source conflicts

The pilot should not force a single “truth” where the sources are answering different questions.

- **Corridor scope conflict:** EU and Transport Community materials use Corridor VIII for a broad Adriatic–Black Sea multimodal network [12] [13]. The North Macedonian ministry statement uses “Corridor 8” in describing the local Tetovo–Prizren project [11]. Store both the broad network relation and the local project claim, with `scope = regional_network` or `scope = local_project_claim`.
- **Proposed route versus existing network:** the MIA report identifies a feasibility-selected path through Tetovo, Popova Shapka, Brodec and Veshala, plus a tunnel and additional road [11]. That is evidence of a proposed alignment, not evidence that the entire alignment is open to traffic. Use separate `planned` and `operational` records, not one status field edited in place.
- **Historical versus current country naming:** the World Bank document’s 1999 title uses “Macedonia” [10], while the current North Macedonian MFA states that the constitutional name is “Republic of North Macedonia” and the short name is “North Macedonia” [8]. Preserve source wording in `source_title_original` and `country_label_as_published`; use the current normalized label in a separate field. Never rewrite an archival title and then claim that the source used the modern name.
- **Census denominator and concept conflict:** the State Statistical Office reports different ethnic percentages for the enumerated population and the resident population, and reports mother tongue separately from ethnic self-identification [9]. Preserve `population_universe`, `reference_year`, `question_concept`, and `denominator`. Do not merge ethnicity, citizenship, mother tongue, and official-language status into a single “identity” column.
- **Multilingual and transliteration conflict:** UNGEGN’s mandate explicitly links standardized geographical names to national names authorities, multilingual practice, romanization, history, cartography and geospatial integration [5]. Keep the source spelling, script, language code, romanization system (if known), and preferred display name as separate fields. A spelling difference is not automatically a duplicate place, and a preferred English display name should not erase local forms.

Arbitrate conflicts with a reproducible order: (1) identify what the claim is about; (2) prefer the most recent source that has the relevant authority; (3) prefer direct geometry or a direct project document over a news paraphrase; (4) retain the losing claim and its reason for non-selection; (5) if the conflict remains material, set `claim_confidence = unresolved` and do not draw a definitive geometry. `source_rank` is a decision aid, not a substitute for a written rationale.

## Identity and terminology safeguards

Use geography and identity terms as typed fields, never as implied facts.

- Use `country_current = North Macedonia` for present-day records. Use `Macedonia` only when it is the historical source wording or a clearly defined geographic/historical region. The MFA records the post-2019 country, nationality wording, language wording and codes separately [8].
- Use `location_label = Kosovo` as a place/territorial label only with a `status_note` when the publication needs status-neutral wording. The EU’s official formula says its Kosovo designation is without prejudice to positions on status and is in line with UNSCR 1244/1999 and the ICJ Opinion [6]. Do not encode a political status conclusion in a `country` field or infer one from a flag, ISO-like code, or map tile. UNSCR 1244 itself is a historical international legal and administrative framework, not a current route-centreline source [7].
- Do not treat `Macedonian`, `Albanian`, or `Kosovar` as interchangeable categories. Use separate fields for `ethnic_self_identification`, `mother_tongue`, `citizenship_or_nationality`, `demonym_as_source`, and `toponym_language`. The North Macedonia census demonstrates why: resident ethnic self-identification and mother-tongue percentages are not the same [9]. `Kosovar` may be a civic or territorial demonym in a source; it must not be silently converted into `Albanian` ethnicity.
- Do not infer ethnicity or language from a settlement name, surname, script, religion, or the apparent language of a news article. The scholarly literature describes state and nation concepts in North Macedonia and Kosovo as fluid and contested within and outside the countries [14]. That is a reason for cautious metadata, not a reason to assign an identity category.
- Keep an explicit `terminology_policy` such as `source_verbatim`, `current_official`, `status_neutral`, or `editorial_display`. For public displays, show relevant alternate names together where space allows, but do not imply that one language form is the only legitimate name.

## CSV assembly

Make the CSV the auditable, human-reviewable source and generate GeoJSON from it. W3C’s CSV-on-the-Web guidance notes that bare CSV does not express datatypes, uniqueness, or foreign keys reliably; a metadata JSON can supply those constraints, multilingual column titles, documentation, and links to reference tables [4].

A practical `entities.csv` header is:

```csv
record_id,entity_type,feature_class,status,corridor_role,name_display,name_source_verbatim,name_native,name_alt,language_script,admin_area_type,admin_area_name,country_current,location_label,status_note,lon,lat,source_crs,geometry_method,coordinate_uncertainty_m,precision_decimals,evidence_grade,claim_confidence,source_id,source_url,source_title_original,source_date,observed_date,claim_text,conflict_group,review_status,notes
```

Rules for this file:

- Use a stable, opaque `record_id` such as `rtp-ent-0001`; do not derive IDs from a spelling that may change.
- Use ISO 8601 dates (`YYYY-MM-DD`) and UTF-8. Quote values containing commas, line breaks, or quotation marks using ordinary CSV escaping.
- Use decimal numeric `lon` and `lat`, not a formatted coordinate string. For non-point geometry, leave these fields blank or use a clearly labelled representative point and store the full geometry in a separate `segments.csv`/GeoJSON file.
- Never put a confidence adjective in `coordinate_uncertainty_m`. Keep uncertainty numeric and confidence categorical.
- Keep `source_id` as a foreign key into a `sources.csv` file containing `source_id,source_url,title,publisher,publication_date,accessed_date,authority_tier,license,language,notes`. W3C’s example of a primary key plus foreign key is directly applicable to this pattern [4].
- Keep one source claim per row in `claims.csv` when sources disagree. Use `claim_text` for a short faithful paraphrase or quote and `evidence_excerpt` for the exact supporting wording if licensing permits.
- For multilingual names, either use repeated normalized fields (`name_mk_cyrl`, `name_sq_latn`, `name_sr_latn`) or a separate `names.csv` keyed by `record_id`; do not use an ambiguous `aliases` blob as the only record of language/script.
- Store the geometry source and retrieval date. A current crowd-sourced geometry can be useful, but it should not be represented as an official project alignment without that attribution.

A minimal `segments.csv` can use `segment_id,from_record_id,to_record_id,feature_class,status,geometry_geojson,source_id,geometry_method,coordinate_uncertainty_m,claim_confidence,review_status`. Keep `geometry_geojson` valid JSON text if a one-file handoff is required; otherwise generate the GeoJSON from a separate vertex/geometry table to avoid fragile escaping.

## GeoJSON export pattern

Each Feature should have a stable `id`; descriptive and audit fields belong in `properties`. A planned or unresolved route may legitimately have `geometry: null` while its endpoints and source claims remain discoverable. For a point record, use this shape:

```json
{
  "type": "Feature",
  "id": "rtp-ent-0002",
  "geometry": {
    "type": "Point",
    "coordinates": [21.4314, 42.0069]
  },
  "properties": {
    "entity_type": "settlement",
    "feature_class": "settlement",
    "name_display": "Tetovo",
    "name_native": "Тетово",
    "name_alt": ["Tetovë"],
    "language_script": ["mk-Cyrl", "sq-Latn"],
    "status": "operational",
    "corridor_role": "anchor",
    "geometry_method": "representative_point",
    "coordinate_uncertainty_m": null,
    "evidence_grade": "B",
    "claim_confidence": "medium",
    "source_id": ["sso-nm-2022"],
    "source_url": ["https://www.stat.gov.mk/PrikaziSoopstenie_en.aspx?rbrtxt=146"],
    "source_date": "2022-03-30",
    "review_status": "needs_coordinate_verification",
    "notes": "Illustrative schema; coordinate must be replaced or verified against the chosen gazetteer."
  }
}
```

The example is intentionally marked as needing verification: a coordinate in a schema example is not evidence. For the proposed Tetovo–Prizren link, prefer a `Feature` with `geometry: null` plus endpoint records and a `claim_only`/`planned` property until a source supplies a defensible alignment. If a digitized line is later added, include `geometry_method = map_digitized`, `digitizing_source`, `digitizing_scale_or_resolution`, `coordinate_uncertainty_m`, and `digitized_on`.

## Pilot sequence and acceptance checks

1. **Freeze the scope.** Decide whether the pilot covers a transport relationship, Corridor VIII as a regional network, the Tetovo–Prizren project, or all three as linked layers.
2. **Build the source register first.** Record publisher, date, URL, language, authority tier, access date, and the exact claim before geocoding anything.
3. **Extract entities and claims separately.** Create nodes for Skopje, Tetovo, Prizren and any source-named route anchors; create route/project claims as relations.
4. **Normalize names without deleting originals.** Apply the terminology policy, language/script tags, and source-verbatim fields.
5. **Geocode only what the source identifies.** For a locality, preserve the locality description and uncertainty. For a project with textual endpoints but no alignment, leave geometry null.
6. **Assign status and confidence after extraction.** Do not let a map symbol or a geocoder decide whether a project is operational.
7. **Run QA before export.** Reject invalid longitude/latitude ranges, reversed GeoJSON order, duplicate IDs, missing source IDs, dates outside the claim’s stated period, missing uncertainty on high-precision points, and any route geometry that lacks a geometry source.
8. **Publish both views.** Deliver the normalized GeoJSON for mapping and the CSV/source register for audit. Include a short changelog whenever a status, name, geometry, or confidence value changes.

## Largest evidence gaps and limitations

The largest gap is a **current, authoritative, machine-readable alignment** for the Tetovo–Prizren road/tunnel. The accessible 2024 report gives route anchors and lengths, but not a surveyed centreline, border-crossing coordinate, portals, permits, construction completion, or opening date [11]. A pilot should therefore be able to publish a useful evidence layer without pretending that a line has been verified.

There is also no single source in this review that defines the Skopje–Tetovo–Prizren corridor at one consistent scale. EU and Transport Community sources describe Corridor VIII as a broad multimodal Adriatic–Black Sea system [12] [13], while the local project statement uses the same label for a proposed road connection [11]. A map that merges them without a scope field will overstate continuity.

The current road condition and exact route geometry between Skopje and Tetovo require a current national road dataset, a dated network extract, or field verification. The World Bank reference is historical [10]. Likewise, a feasibility-selected path through mountain settlements is not evidence that the route is legally gazetted, funded, constructed, or open.

Cross-border name coverage is incomplete. The pilot needs a verified gazetteer or national names-authority export for Macedonian, Albanian and Serbian forms, scripts, romanization, historical forms and administrative codes. UNGEGN provides the relevant standardization and names-authority framework [5], but this memo does not substitute for obtaining those national datasets.

Demographic and identity evidence is not harmonized automatically. North Macedonia’s official 2021 release distinguishes enumerated versus resident population and ethnic self-identification versus mother tongue [9]. Comparable Kosovo data, years, non-response rules, and administrative geographies must be sourced and documented before any cross-border comparison. The corridor should not be used to imply a single ethnic, linguistic, or national identity.

Finally, the public ISO 19157 preview used for this memo is access-limited. ISO 19157 remains a strong reference for formal geographic data-quality reporting, but a project that claims conformance should obtain the applicable edition and document its quality measures rather than cite the standard as a decorative label. For this pilot, the operational minimum is explicit provenance, source dates, geometry method, uncertainty, completeness flags, and a retained conflict log.

## References

[1]: https://datatracker.ietf.org/doc/html/rfc7946 "RFC 7946: The GeoJSON Format"
[2]: https://docs.gbif.org/georeferencing-best-practices/1.0/en/ "Georeferencing Best Practices"
[3]: https://www.iso.org/obp/ui/#iso:std:iso:19157:ed-1:v1:en "ISO 19157: Geographic information — Data quality"
[4]: https://www.w3.org/TR/tabular-data-primer/ "CSV on the Web: A Primer"
[5]: https://unstats.un.org/unsd/ungegn/ "United Nations Group of Experts on Geographical Names"
[6]: https://eur-lex.europa.eu/eli/dec/2022/1685/oj/eng "EU–Kosovo Stabilisation and Association Council Decision 2022/1685"
[7]: https://unmik.unmissions.org/en/united-nations-resolution-1244 "United Nations Security Council Resolution 1244 (1999)"
[8]: https://mfa.gov.mk/en-GB/temi/prasanjeto-za-imeto "North Macedonia Ministry of Foreign Affairs: Name Issue"
[9]: https://www.stat.gov.mk/PrikaziSoopstenie_en.aspx?rbrtxt=146 "North Macedonia State Statistical Office: Census 2021 first dataset"
[10]: https://documents.worldbank.org/en/publication/documents-reports/documentdetail/827781468756939086 "World Bank: Macedonia — Transport Sector Project"
[11]: https://mia.mk/en/story/north-macedonia-kosovo-join-efforts-to-build-tunnel-on-tetovoprizren-connection "MIA: North Macedonia, Kosovo join efforts to build tunnel on Tetovo–Prizren connection"
[12]: https://international-partnerships.ec.europa.eu/policies/global-gateway/corridor-viii-rail-interconnection-north-macedonia-bulgarian-border_en "European Commission: Corridor VIII Rail Interconnection, North Macedonia–Bulgarian border"
[13]: https://www.transport-community.org/news/bulgaria-and-north-macedonia-sign-agreement-to-advance-corridor-viii-rail-connectivity/ "Transport Community: Bulgaria and North Macedonia sign agreement to advance Corridor VIII rail connectivity"
[14]: https://www.tandfonline.com/doi/full/10.1080/17502977.2022.2086390 "Koneska, Huskić and Krasniqi: Macedonia, Bosnia and Kosovo: Contested Statehood and the EU"

import { type Place, sources } from './atlas-data';

/**
 * Serializes a Place into canonical HistoriaText format (human- and LLM-readable,
 * deterministic YAML representation modeled on Historia's specification).
 */
export function formatPlaceToHistoriaText(place: Place): string {
  const primarySource = sources.find((s) => s.id === place.source);

  const lines: string[] = [
    `# ============================================================================`,
    `# RUMELIA ATLAS — HISTORIATEXT CANONICAL ASSERTION`,
    `# Standard: EDTF / Sourced Historical Entities`,
    `# ============================================================================`,
    ``,
    `feature: ${place.layer}/${place.id}`,
    `type: ${place.layer}`,
    `name: ${JSON.stringify(place.name)}`,
    `modern: ${JSON.stringify(place.modern)}`,
    `aliases: [${place.aliases.map((a) => JSON.stringify(a)).join(', ')}]`,
    `coordinates: [${place.coordinates[0]}, ${place.coordinates[1]}]`,
    `temporal:`,
    `  valid_from: ${place.start}`,
    `  valid_to: ${place.end ?? 'present'}`,
    `  precision: ${JSON.stringify(place.datePrecision)}`,
    `confidence: ${place.confidence}`,
    `location_accuracy: ${JSON.stringify(place.locationAccuracy)}`,
    `status:`,
    `  lost: ${Boolean(place.lost)}`,
    `  partial_loss: ${Boolean(place.partialLoss)}`,
    `  current_state: ${JSON.stringify(place.current)}`,
    `  as_of: ${JSON.stringify(place.currentAsOf)}`,
    ``,
    `source:`,
    `  id: ${place.source}`,
    `  title: ${JSON.stringify(primarySource?.title ?? place.source)}`,
    `  author: ${JSON.stringify(primarySource?.author ?? '')}`,
    `  locator: ${JSON.stringify(primarySource?.locator ?? '')}`,
    `  url: ${JSON.stringify(primarySource?.url ?? '')}`,
    ``,
    `events:`,
  ];

  if (place.events.length === 0) {
    lines.push(`  []`);
  } else {
    for (const ev of place.events) {
      lines.push(`  - year: ${ev.year}`);
      lines.push(`    text: ${JSON.stringify(ev.text)}`);
      lines.push(`    source_ref: ${ev.source}`);
    }
  }

  lines.push(``);
  lines.push(`observations:`);

  if (place.observations.length === 0) {
    lines.push(`  []`);
  } else {
    for (const obs of place.observations) {
      lines.push(`  - valid: ${obs.year}${obs.end ? `..${obs.end}` : ''}`);
      lines.push(`    dimension: ${obs.dimension}`);
      lines.push(`    text: ${JSON.stringify(obs.text)}`);
      lines.push(`    source_ref: ${obs.source}`);
      if (obs.unit) lines.push(`    unit: ${JSON.stringify(obs.unit)}`);
      if (obs.scope) lines.push(`    scope: ${JSON.stringify(obs.scope)}`);
      if (obs.disputed) lines.push(`    disputed: true`);
      if (obs.values && obs.values.length > 0) {
        lines.push(`    values:`);
        for (const val of obs.values) {
          lines.push(`      - label: ${JSON.stringify(val.label)}`);
          lines.push(`        count: ${val.value}`);
        }
      }
    }
  }

  return lines.join('\n');
}

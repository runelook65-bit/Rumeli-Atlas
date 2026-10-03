/**
 * OpenHistoricalMap (OHM) Temporal GIS Engine for Rumelia Atlas
 *
 * Implements architectural patterns from OpenHistoricalMap:
 * - Decimal date parsing and conversion (decimaldate.js / maplibre-gl-dates)
 * - Extended Date Time Format (EDTF) generation
 * - Spatio-temporal lifespan calculation & progression (extant, pre-existence, vanished)
 * - Canonical OHM / OSM Tag schema serialization
 * - OHM-compliant GeoJSON Feature and FeatureCollection export
 */

import { Place, sources, isOttomanFoundation } from './atlas-data';

export type TemporalStatus = 'extant' | 'pre_existence' | 'vanished' | 'unbounded';

export interface PlaceLifespan {
  status: TemporalStatus;
  statusLabel: string;
  statusBadgeClass: string;
  startDecdate: number;
  endDecdate: number | null;
  currentDecdate: number;
  ageAtYear: number | null;
  totalLifespanYears: number | null;
  progressPercent: number | null;
  edtfInterval: string;
  edtfStartDate: string;
  edtfEndDate: string;
}

export interface OhmTag {
  key: string;
  value: string;
  description: string;
  category: 'identity' | 'temporal' | 'classification' | 'provenance' | 'toponym';
}

/**
 * Converts a year or ISO date string to decimal year representation (OHM standard)
 * Examples: 1453 -> 1453.0; 1878-07-13 -> 1878.5315
 */
export function yearToDecdate(year: number, month = 1, day = 1): number {
  if (month === 1 && day === 1) return year;
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  const daysInMonths = [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let daysPassed = 0;
  for (let m = 0; m < month - 1; m++) {
    daysPassed += daysInMonths[m];
  }
  daysPassed += day - 0.5;
  const totalDays = isLeap ? 366 : 365;
  return parseFloat((year + daysPassed / totalDays).toFixed(4));
}

/**
 * Formats a year into an EDTF (Extended Date Time Format) date string
 */
export function formatEdtfDate(year: number, precisionNote?: string): string {
  if (precisionNote && (precisionNote.includes('yaklaşık') || precisionNote.includes('tahmin'))) {
    return `${year}~`;
  }
  return `${year}`;
}

/**
 * Calculates temporal lifespan metrics for a place at a given year
 * Adheres to OpenHistoricalMap's temporal boundary validation rules
 */
export function calculatePlaceLifespan(place: Place, currentYear: number): PlaceLifespan {
  const startYear = place.start;
  const endYear = place.end ?? null;

  const startDecdate = yearToDecdate(startYear);
  const endDecdate = endYear ? yearToDecdate(endYear) : null;
  const currentDecdate = yearToDecdate(currentYear);

  let status: TemporalStatus;
  let statusLabel: string;
  let statusBadgeClass: string;

  if (currentYear < startYear) {
    status = 'pre_existence';
    statusLabel = 'Henüz İnşa Edilmedi / Kurulmadı';
    statusBadgeClass = 'bg-stone-100 text-stone-600 border-stone-300';
  } else if (endYear !== null && currentYear > endYear) {
    status = 'vanished';
    statusLabel = 'Yıkıldı / Ortadan Kalktı';
    statusBadgeClass = 'bg-rose-50 text-rose-800 border-rose-300';
  } else if (endYear !== null && currentYear <= endYear) {
    status = 'extant';
    statusLabel = 'Mevcut & Ayakta (Geçerli)';
    statusBadgeClass = 'bg-emerald-50 text-emerald-800 border-emerald-300';
  } else {
    status = 'unbounded';
    statusLabel = 'Mevcut & Günümüze Ulaşan';
    statusBadgeClass = 'bg-emerald-50 text-emerald-800 border-emerald-300';
  }

  // Age calculations
  let ageAtYear: number | null = null;
  if (currentYear >= startYear) {
    if (endYear !== null && currentYear > endYear) {
      ageAtYear = endYear - startYear;
    } else {
      ageAtYear = currentYear - startYear;
    }
  }

  const totalLifespanYears = endYear !== null ? endYear - startYear : (2026 - startYear);

  let progressPercent: number | null = null;
  if (endYear !== null && totalLifespanYears > 0) {
    if (currentYear < startYear) {
      progressPercent = 0;
    } else if (currentYear >= endYear) {
      progressPercent = 100;
    } else {
      progressPercent = Math.min(100, Math.max(0, Math.round(((currentYear - startYear) / totalLifespanYears) * 100)));
    }
  } else if (currentYear >= startYear) {
    progressPercent = Math.min(100, Math.round(((currentYear - startYear) / (2026 - startYear)) * 100));
  }

  const edtfStartDate = formatEdtfDate(startYear, place.datePrecision);
  const edtfEndDate = endYear ? formatEdtfDate(endYear) : '..';
  const edtfInterval = `[${edtfStartDate}..${edtfEndDate}]`;

  return {
    status,
    statusLabel,
    statusBadgeClass,
    startDecdate,
    endDecdate,
    currentDecdate,
    ageAtYear,
    totalLifespanYears,
    progressPercent,
    edtfInterval,
    edtfStartDate,
    edtfEndDate
  };
}

/**
 * Maps a Rumelia Place into OpenHistoricalMap / OpenStreetMap tag schema
 */
export function placeToOhmTags(place: Place, currentYear: number): OhmTag[] {
  const lifespan = calculatePlaceLifespan(place, currentYear);
  const isOttoman = place.layer === 'settlement' && isOttomanFoundation(place);
  const primarySource = sources.find(s => s.id === place.source);

  const tags: OhmTag[] = [
    // Identity & Names
    { key: 'name', value: place.name, description: 'Tarihsel birincil ad (Osmanlıca/Türkçe)', category: 'identity' },
    { key: 'name:tr', value: place.name, description: 'Osmanlı Türkçesi toponimi kaydı', category: 'toponym' },
    { key: 'name:modern', value: place.modern, description: 'Günümüz resmi toponimi kaydı', category: 'toponym' },
  ];

  if (place.aliases && place.aliases.length > 0) {
    tags.push({
      key: 'alt_name',
      value: place.aliases.join('; '),
      description: 'Belgelenmiş tarihsel eşadlar ve yerel dillerdeki varyantlar',
      category: 'toponym'
    });
  }

  // Classification
  if (place.layer === 'settlement') {
    tags.push(
      { key: 'place', value: isOttoman ? 'town' : 'city', description: 'Yerleşim türü', category: 'classification' },
      { key: 'historic', value: 'settlement', description: 'Tarihsel yerleşim birimi', category: 'classification' },
      { key: 'rumelia:foundation', value: isOttoman ? 'ottoman_foundation' : 'pre_ottoman', description: 'Kuruluş kökeni', category: 'classification' }
    );
  } else {
    // Heritage
    let heritageHistoric = 'monument';
    if (place.name.toLowerCase().includes('cami')) heritageHistoric = 'mosque';
    else if (place.name.toLowerCase().includes('tekke')) heritageHistoric = 'tekke';
    else if (place.name.toLowerCase().includes('hamam')) heritageHistoric = 'bathhouse';
    else if (place.name.toLowerCase().includes('köprü')) heritageHistoric = 'bridge';
    else if (place.name.toLowerCase().includes('kale')) heritageHistoric = 'castle';

    tags.push(
      { key: 'historic', value: heritageHistoric, description: 'Tarihsel miras eseri sınıflandırması', category: 'classification' },
      { key: 'heritage', value: 'yes', description: 'Tescilli kültürel miras nesnesi', category: 'classification' },
      { key: 'heritage:operator', value: 'Vakıf / Osmanlı Mirası', description: 'Tarihsel vakıf hamisi', category: 'classification' }
    );

    if (heritageHistoric === 'mosque' || heritageHistoric === 'tekke') {
      tags.push({ key: 'religion', value: 'muslim', description: 'Dinî aidiyet sınıfı', category: 'classification' });
    }
  }

  // Temporal OHM tags (Crucial for MapLibre/Leaflet date filtering)
  tags.push(
    { key: 'start_date', value: String(place.start), description: 'Varlık başlangıç yılı (ISO 8601)', category: 'temporal' },
    { key: 'start_decdate', value: String(lifespan.startDecdate), description: 'OHM kayan noktalı ondalık yıl (vektör filtreleme motoru)', category: 'temporal' },
    { key: 'start_date:edtf', value: lifespan.edtfStartDate, description: 'Genişletilmiş Tarih Formatı (EDTF) kesinlik gösterimi', category: 'temporal' }
  );

  if (place.end) {
    tags.push(
      { key: 'end_date', value: String(place.end), description: 'Varlık bitiş/yıkım yılı (ISO 8601)', category: 'temporal' },
      { key: 'end_decdate', value: String(lifespan.endDecdate), description: 'OHM bitiş ondalık yılı', category: 'temporal' },
      { key: 'end_date:edtf', value: lifespan.edtfEndDate, description: 'Bitiş EDTF kesinlik formatı', category: 'temporal' }
    );
  }

  // OHM Temporal Status at inspected year
  tags.push(
    { key: 'rumelia:temporal_status', value: lifespan.status, description: `Seçili yılda (${currentYear}) zamansal durum`, category: 'temporal' },
    { key: 'rumelia:confidence', value: place.confidence, description: 'Akademik doğrulama güven düzeyi', category: 'provenance' }
  );

  if (place.lost) {
    tags.push({ key: 'historic:destroyed', value: 'yes', description: 'Fiziksel kaybı belgelenmiş yapı', category: 'classification' });
  } else if (place.partialLoss) {
    tags.push({ key: 'historic:partially_destroyed', value: 'yes', description: 'Kısmen kayba uğramış külliye/yapı', category: 'classification' });
  }

  // Provenance / Sources
  if (primarySource) {
    tags.push(
      { key: 'source:name', value: `${primarySource.author} (${primarySource.date})`, description: 'Birincil akademik kaynak künyesi', category: 'provenance' },
      { key: 'source:locator', value: primarySource.locator, description: 'Kaynak içi arşiv veya sayfa konumu', category: 'provenance' },
      { key: 'source:url', value: primarySource.url, description: 'Dijital kaynak erişim bağlantısı', category: 'provenance' }
    );
  }

  tags.push({
    key: 'source:geometry',
    value: place.locationAccuracy,
    description: 'Coğrafi koordinat kesinlik notu',
    category: 'provenance'
  });

  return tags;
}

/**
 * Generates an OHM-compliant GeoJSON Feature for a place
 */
export function placeToOhmGeoJsonFeature(place: Place, currentYear: number) {
  const lifespan = calculatePlaceLifespan(place, currentYear);
  const tags = placeToOhmTags(place, currentYear);
  const properties: Record<string, string | number | boolean | null> = {
    id: place.id,
    name: place.name,
    'name:modern': place.modern,
    start_date: place.start,
    start_decdate: lifespan.startDecdate,
    'start_date:edtf': lifespan.edtfStartDate,
    end_date: place.end ?? null,
    end_decdate: lifespan.endDecdate,
    'end_date:edtf': place.end ? lifespan.edtfEndDate : null,
    temporal_status: lifespan.status,
    age_at_year: lifespan.ageAtYear,
    confidence: place.confidence,
    layer: place.layer,
    lost: !!place.lost,
    partial_loss: !!place.partialLoss,
    summary: place.summary
  };

  // Attach all OHM tag key-values to properties
  for (const t of tags) {
    properties[t.key] = t.value;
  }

  return {
    type: 'Feature' as const,
    id: place.id,
    geometry: {
      type: 'Point' as const,
      coordinates: place.coordinates
    },
    properties
  };
}

/**
 * Exports all visible places into an OHM-compliant GeoJSON FeatureCollection snapshot
 */
export function exportOhmSnapshotGeoJson(places: Place[], currentYear: number) {
  return {
    type: 'FeatureCollection' as const,
    metadata: {
      generator: 'Rumelia Atlas OpenHistoricalMap Temporal GIS Engine',
      timestamp: new Date().toISOString(),
      temporal_snapshot_year: currentYear,
      temporal_snapshot_decdate: yearToDecdate(currentYear),
      feature_count: places.length,
      license: 'Open Data Commons Open Database License (ODbL)'
    },
    features: places.map(p => placeToOhmGeoJsonFeature(p, currentYear))
  };
}

/**
 * Triggers a browser download of an OHM GeoJSON string
 */
export function downloadGeoJsonFile(data: object, filename: string) {
  if (typeof window === 'undefined') return;
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/geo+json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

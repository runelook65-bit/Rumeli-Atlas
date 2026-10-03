import {
  DEFAULT_YEAR,
  MIN_YEAR,
  MAX_YEAR,
  type AtlasMode,
  type TemporalMode
} from './store';
import {
  regionPresets,
  type RegionPreset,
  type Layer
} from './atlas-data';

export const ALL_LAYERS: readonly Layer[] = [
  'settlement',
  'heritage',
  'religion',
  'language',
  'migration',
  'administration',
  'ethnicity',
  'community',
] as const;

export const LAYER_LETTER: Record<Layer, string> = {
  settlement: 's',
  heritage: 'h',
  religion: 'r',
  language: 'l',
  migration: 'm',
  administration: 'a',
  ethnicity: 'e',
  community: 'c',
};

export const LETTER_TO_LAYER: Record<string, Layer> = Object.fromEntries(
  Object.entries(LAYER_LETTER).map(([k, v]) => [v, k as Layer])
);

export interface UrlState {
  year?: number;
  mode?: AtlasMode;
  temporalMode?: TemporalMode;
  layers?: Layer[];
  regionId?: string;
  placeId?: string;
}

const LOCAL_STORAGE_KEY = 'rumelia-atlas-state-v1';

export function readUrlState(): UrlState {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const out: UrlState = {};

  const yearStr = params.get('y');
  if (yearStr !== null) {
    const y = Number.parseInt(yearStr, 10);
    if (Number.isFinite(y) && y >= MIN_YEAR && y <= MAX_YEAR) {
      out.year = y;
    }
  }

  const mode = params.get('m');
  if (mode === 'atlas' || mode === 'lost') {
    out.mode = mode;
  }

  const tm = params.get('tm');
  if (tm === 'snapshot' || tm === 'history') {
    out.temporalMode = tm;
  }

  const layersStr = params.get('l');
  if (layersStr !== null) {
    // Supports both 'shm' compact and 's,h,m' comma-separated
    const cleaned = layersStr.toLowerCase().replace(/[^a-z]/g, '');
    const foundLayers: Layer[] = [];
    for (const char of cleaned) {
      const layer = LETTER_TO_LAYER[char];
      if (layer && !foundLayers.includes(layer)) {
        foundLayers.push(layer);
      }
    }
    if (foundLayers.length > 0) {
      out.layers = foundLayers;
    }
  }

  const regionId = params.get('r');
  if (regionId && regionPresets.some((r) => r.id === regionId)) {
    out.regionId = regionId;
  }

  const placeId = params.get('p');
  if (placeId) {
    out.placeId = placeId;
  }

  return out;
}

export function writeUrlState(state: {
  year: number;
  mode: AtlasMode;
  temporalMode: TemporalMode;
  layers: Layer[];
  region: RegionPreset;
  placeId?: string | null;
}): void {
  if (typeof window === 'undefined') return;
  const params = new URLSearchParams(window.location.search);

  if (state.year !== DEFAULT_YEAR) {
    params.set('y', String(state.year));
  } else {
    params.delete('y');
  }

  if (state.mode !== 'atlas') {
    params.set('m', state.mode);
  } else {
    params.delete('m');
  }

  if (state.temporalMode !== 'snapshot') {
    params.set('tm', state.temporalMode);
  } else {
    params.delete('tm');
  }

  const activeLetters = state.layers
    .map((l) => LAYER_LETTER[l])
    .filter(Boolean)
    .sort()
    .join('');
  if (activeLetters !== 'hs') { // default is settlement + heritage
    params.set('l', activeLetters);
  } else {
    params.delete('l');
  }

  if (state.region && state.region.id !== 'all') {
    params.set('r', state.region.id);
  } else {
    params.delete('r');
  }

  if (state.placeId) {
    params.set('p', state.placeId);
  } else {
    params.delete('p');
  }

  const newSearch = params.toString();
  const newUrl =
    window.location.pathname + (newSearch ? '?' + newSearch : '') + window.location.hash;
  if (newUrl !== window.location.pathname + window.location.search + window.location.hash) {
    window.history.replaceState(null, '', newUrl);
  }
}

export function getShareableUrl(state: {
  year: number;
  mode: AtlasMode;
  temporalMode: TemporalMode;
  layers: Layer[];
  region: RegionPreset;
  placeId?: string | null;
}): string {
  if (typeof window === 'undefined') return '';
  const url = new URL(window.location.href);
  url.searchParams.set('y', String(state.year));
  url.searchParams.set('m', state.mode);
  url.searchParams.set('tm', state.temporalMode);
  url.searchParams.set(
    'l',
    state.layers.map((l) => LAYER_LETTER[l]).filter(Boolean).sort().join('')
  );
  if (state.region.id !== 'all') {
    url.searchParams.set('r', state.region.id);
  } else {
    url.searchParams.delete('r');
  }
  if (state.placeId) {
    url.searchParams.set('p', state.placeId);
  } else {
    url.searchParams.delete('p');
  }
  return url.toString();
}

export interface LocalState {
  year?: number;
  mode?: AtlasMode;
  temporalMode?: TemporalMode;
  layers?: Layer[];
  regionId?: string;
}

export function readLocalState(): LocalState {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function writeLocalState(state: LocalState): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

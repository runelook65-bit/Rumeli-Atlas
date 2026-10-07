import { create } from 'zustand';
import {
  places,
  regionPresets,
  type RegionPreset,
  findRegionPresetForPlace,
  type Place,
  type Layer
} from './atlas-data';
import type { AtlasMapHandle } from './atlas-map';
import type { RumeliaEvent } from './historia-events';

export const MIN_YEAR = 1354;
export const MAX_YEAR = 2026;
export const DEFAULT_YEAR = 1894;

export type AtlasMode = 'atlas' | 'lost';
export type TemporalMode = 'snapshot' | 'history';

export interface PendingChoice {
  x: number;
  y: number;
  places: Place[];
}

export interface AtlasState {
  // --- Temporal State ---
  year: number;
  setYear: (year: number) => void;
  stepYear: (delta: number) => void;
  playing: boolean;
  setPlaying: (playing: boolean) => void;
  playSpeed: number;
  setPlaySpeed: (speed: number) => void;
  recentYears: number[];
  pushRecentYear: (year: number) => void;

  // --- Modes & Layers ---
  mode: AtlasMode;
  setMode: (mode: AtlasMode) => void;
  temporalMode: TemporalMode;
  setTemporalMode: (mode: TemporalMode) => void;
  activeLayers: Layer[];
  toggleLayer: (layer: Layer) => void;
  setLayers: (layers: Layer[]) => void;

  // --- Region & Basemap Appearance ---
  selectedRegion: RegionPreset;
  setSelectedRegion: (region: RegionPreset) => void;
  names: boolean;
  setNames: (names: boolean) => void;
  boundaries: boolean;
  setBoundaries: (boundaries: boolean) => void;
  streets: boolean;
  setStreets: (streets: boolean) => void;
  vilayets: boolean;
  setVilayets: (active: boolean) => void;
  contributionModalOpen: boolean;
  setContributionModalOpen: (open: boolean) => void;
  contributionTargetPlace: Place | null;
  setContributionTargetPlace: (place: Place | null) => void;

  // --- Feature Selection & Interaction ---
  selectedPlace: Place | null;
  setSelectedPlace: (place: Place | null) => void;
  hoveredPlace: Place | null;
  setHoveredPlace: (place: Place | null) => void;
  clusterPlaces: Place[] | null;
  setClusterPlaces: (places: Place[] | null) => void;
  pendingChoice: PendingChoice | null;
  setPendingChoice: (choice: PendingChoice | null) => void;

  // --- Search & UI Panels ---
  query: string;
  setQuery: (query: string) => void;
  activeCategory: string | null;
  setActiveCategory: (cat: string | null) => void;
  sourcesOpen: boolean;
  setSourcesOpen: (open: boolean) => void;
  archiveOpen: boolean;
  setArchiveOpen: (open: boolean) => void;
  recordsOpen: boolean;
  setRecordsOpen: (open: boolean) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;

  // --- Feedback & Toast ---
  toast: string | null;
  setToast: (toast: string | null) => void;
  notice: string | null;
  setNotice: (notice: string | null) => void;

  // --- Historia Event-Centric Mapping & Breakpoints ---
  activeEvent: RumeliaEvent | null;
  setActiveEvent: (event: RumeliaEvent | null) => void;
  periodBasemap: boolean;
  setPeriodBasemap: (active: boolean) => void;
  periodOpacity: number;
  setPeriodOpacity: (opacity: number) => void;
  historiaTextPlace: Place | null;
  setHistoriaTextPlace: (place: Place | null) => void;

  // --- OpenHistoricalMap (OHM) Temporal GIS ---
  ohmBasemap: boolean;
  setOhmBasemap: (active: boolean) => void;
  ohmStepAmount: number;
  setOhmStepAmount: (amount: number) => void;
  ohmInspectorPlace: Place | null;
  setOhmInspectorPlace: (place: Place | null) => void;

  // --- Map Controller Bridge ---
  mapHandle: AtlasMapHandle | null;
  setMapHandle: (handle: AtlasMapHandle | null) => void;
  flyToPlace: (place: Place) => void;
  flyToPilot: () => void;
}

export const useStore = create<AtlasState>((set, get) => ({
  // --- Temporal State ---
  year: DEFAULT_YEAR,
  setYear: (year) => {
    const clamped = Math.max(MIN_YEAR, Math.min(MAX_YEAR, Math.round(year)));
    const cur = get().year;
    if (cur !== clamped) {
      if (Math.abs(cur - clamped) >= 5) {
        get().pushRecentYear(cur);
      }
    }
    set({ year: clamped });
  },
  stepYear: (delta) => {
    get().setYear(get().year + delta);
  },
  playing: false,
  setPlaying: (playing) => set({ playing }),
  playSpeed: 5,
  setPlaySpeed: (playSpeed) => set({ playSpeed }),
  recentYears: [],
  pushRecentYear: (year) =>
    set((s) => ({
      recentYears: [year, ...s.recentYears.filter((y) => y !== year)].slice(0, 8),
    })),

  // --- Modes & Layers ---
  mode: 'atlas',
  setMode: (mode) => {
    const prev = get().mode;
    set({ mode });
    if (mode === 'lost' && prev !== 'lost') {
      const map = get().mapHandle;
      map?.flyTo({ center: [21.435, 42.001], zoom: 13, duration: 700 });
    }
  },
  temporalMode: 'snapshot',
  setTemporalMode: (temporalMode) => set({ temporalMode }),
  activeLayers: ['settlement', 'heritage'],
  toggleLayer: (layer) =>
    set((s) => ({
      activeLayers: s.activeLayers.includes(layer)
        ? s.activeLayers.filter((l) => l !== layer)
        : [...s.activeLayers, layer],
    })),
  setLayers: (activeLayers) => set({ activeLayers }),

  // --- Region & Basemap Appearance ---
  selectedRegion: regionPresets[0],
  setSelectedRegion: (selectedRegion) => set({ selectedRegion }),
  names: true,
  setNames: (names) => set({ names }),
  boundaries: true,
  setBoundaries: (boundaries) => set({ boundaries }),
  streets: true,
  setStreets: (streets) => set({ streets }),
  vilayets: false,
  setVilayets: (vilayets) => set({ vilayets }),
  contributionModalOpen: false,
  setContributionModalOpen: (contributionModalOpen) => set({ contributionModalOpen }),
  contributionTargetPlace: null,
  setContributionTargetPlace: (contributionTargetPlace) => set({ contributionTargetPlace }),

  // --- Feature Selection & Interaction ---
  selectedPlace: null,
  setSelectedPlace: (place) => {
    set({ selectedPlace: place, pendingChoice: null });
    if (place) {
      // Auto-adjust region if selected place belongs to another preset
      const currentRegion = get().selectedRegion;
      const placeRegion = findRegionPresetForPlace(place);
      if (placeRegion && currentRegion.id !== 'all' && currentRegion.id !== placeRegion.id) {
        set({ selectedRegion: placeRegion });
      }
      get().flyToPlace(place);
    }
  },
  hoveredPlace: null,
  setHoveredPlace: (hoveredPlace) => set({ hoveredPlace }),
  clusterPlaces: null,
  setClusterPlaces: (clusterPlaces) => set({ clusterPlaces }),
  pendingChoice: null,
  setPendingChoice: (pendingChoice) => set({ pendingChoice }),

  // --- Search & UI Panels ---
  query: '',
  setQuery: (query) => set({ query }),
  activeCategory: null,
  setActiveCategory: (activeCategory) => set({ activeCategory }),
  sourcesOpen: false,
  setSourcesOpen: (sourcesOpen) => set({ sourcesOpen }),
  archiveOpen: false,
  setArchiveOpen: (archiveOpen) => set({ archiveOpen }),
  recordsOpen: false,
  setRecordsOpen: (recordsOpen) => set({ recordsOpen }),
  menuOpen: false,
  setMenuOpen: (menuOpen) => set({ menuOpen }),
  searchOpen: false,
  setSearchOpen: (searchOpen) => set({ searchOpen }),

  // --- Feedback & Toast ---
  toast: null,
  setToast: (toast) => {
    set({ toast });
    if (toast !== null) {
      const msg = toast;
      setTimeout(() => {
        if (get().toast === msg) {
          set({ toast: null });
        }
      }, 2600);
    }
  },
  notice: null,
  setNotice: (notice) => set({ notice }),

  // --- Historia Event-Centric Mapping & Breakpoints ---
  activeEvent: null,
  setActiveEvent: (activeEvent) => {
    set({ activeEvent });
    if (activeEvent) {
      get().setYear(activeEvent.anchorYear);
      const map = get().mapHandle;
      map?.fitBounds(activeEvent.bounds, { padding: 40, duration: 900 });
      set({ selectedPlace: null });
    }
  },
  periodBasemap: false,
  setPeriodBasemap: (periodBasemap) => set({ periodBasemap }),
  periodOpacity: 0.75,
  setPeriodOpacity: (periodOpacity) => set({ periodOpacity }),
  historiaTextPlace: null,
  setHistoriaTextPlace: (historiaTextPlace) => set({ historiaTextPlace }),

  // --- OpenHistoricalMap (OHM) Temporal GIS ---
  ohmBasemap: false,
  setOhmBasemap: (ohmBasemap) => set({ ohmBasemap }),
  ohmStepAmount: 1,
  setOhmStepAmount: (ohmStepAmount) => set({ ohmStepAmount }),
  ohmInspectorPlace: null,
  setOhmInspectorPlace: (ohmInspectorPlace) => set({ ohmInspectorPlace }),

  // --- Map Controller Bridge ---
  mapHandle: null,
  setMapHandle: (mapHandle) => set({ mapHandle }),
  flyToPlace: (place) => {
    const map = get().mapHandle;
    if (map) {
      map.flyTo({ center: place.coordinates, zoom: 13, duration: 900 });
    }
  },
  flyToPilot: () => {
    const map = get().mapHandle;
    if (map) {
      map.flyTo({ center: [21.13, 42.06], zoom: 9, duration: 800 });
    }
    set({ selectedPlace: null });
  },
}));

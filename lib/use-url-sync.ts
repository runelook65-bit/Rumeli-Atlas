import { useEffect, useRef } from 'react';
import { useStore } from './store';
import { readUrlState, writeUrlState, readLocalState, writeLocalState } from './url-state';
import { places, regionPresets } from './atlas-data';

/**
 * Bidirectional URL and LocalStorage synchronization hook, modeled directly on Strata.
 * 
 * Precedence on mount:
 *   URL Query Params > LocalStorage > Store Defaults
 *
 * Synchronization:
 *   - Updates URL using window.history.replaceState via requestAnimationFrame
 *   - Listens to 'popstate' for browser back/forward buttons
 *   - Auto-restores selected place (?p=...) when deep linked
 */
export function useUrlSync() {
  const initialized = useRef(false);

  // 1. Initial State Restoration on Mount
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const url = readUrlState();
    const local = readLocalState();
    const store = useStore.getState();

    const year = url.year ?? local.year;
    const mode = url.mode ?? local.mode;
    const temporalMode = url.temporalMode ?? local.temporalMode;
    const layers = url.layers ?? local.layers;
    const regionId = url.regionId ?? local.regionId;

    if (year !== undefined) store.setYear(year);
    if (mode !== undefined) store.setMode(mode);
    if (temporalMode !== undefined) store.setTemporalMode(temporalMode);
    if (layers !== undefined) store.setLayers(layers);

    if (regionId) {
      const preset = regionPresets.find((r) => r.id === regionId);
      if (preset) store.setSelectedRegion(preset);
    }

    if (url.placeId) {
      const target = places.find((p) => p.id === url.placeId);
      if (target) {
        // Defer place selection slightly so the map canvas can mount and initialize
        window.setTimeout(() => {
          store.setSelectedPlace(target);
        }, 500);
      }
    }
  }, []);

  // 2. Browser Back/Forward navigation ('popstate')
  useEffect(() => {
    const onPopState = () => {
      const url = readUrlState();
      const store = useStore.getState();

      if (url.year !== undefined && url.year !== store.year) {
        store.setYear(url.year);
      }
      if (url.mode !== undefined && url.mode !== store.mode) {
        store.setMode(url.mode);
      }
      if (url.temporalMode !== undefined && url.temporalMode !== store.temporalMode) {
        store.setTemporalMode(url.temporalMode);
      }
      if (url.layers !== undefined) {
        store.setLayers(url.layers);
      }
      if (url.regionId) {
        const preset = regionPresets.find((r) => r.id === url.regionId);
        if (preset && preset.id !== store.selectedRegion.id) {
          store.setSelectedRegion(preset);
        }
      }
      if (url.placeId) {
        const target = places.find((p) => p.id === url.placeId);
        if (target && target.id !== store.selectedPlace?.id) {
          store.setSelectedPlace(target);
        }
      } else if (!url.placeId && store.selectedPlace) {
        store.setSelectedPlace(null);
      }
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // 3. Reactive Store Subscription -> URL & LocalStorage
  useEffect(() => {
    let raf = 0;
    let lastSig = '';

    const unsub = useStore.subscribe((s) => {
      // Create signature of persisted fields to skip irrelevant updates (hover, toast, etc.)
      const sig = JSON.stringify([
        s.year,
        s.mode,
        s.temporalMode,
        s.activeLayers,
        s.selectedRegion.id,
        s.selectedPlace?.id ?? null,
      ]);

      if (sig === lastSig) return;
      lastSig = sig;

      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        writeUrlState({
          year: s.year,
          mode: s.mode,
          temporalMode: s.temporalMode,
          layers: s.activeLayers,
          region: s.selectedRegion,
          placeId: s.selectedPlace?.id ?? null,
        });

        writeLocalState({
          year: s.year,
          mode: s.mode,
          temporalMode: s.temporalMode,
          layers: s.activeLayers,
          regionId: s.selectedRegion.id,
        });
      });
    });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      unsub();
    };
  }, []);
}

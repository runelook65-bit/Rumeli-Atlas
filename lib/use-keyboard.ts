import { useEffect } from 'react';
import { useStore, MIN_YEAR, MAX_YEAR } from './store';
import { getShareableUrl } from './url-state';
import { places, visiblePlaces, filterPlacesByRegionPreset, type Place } from './atlas-data';

const CATEGORY_MAP: Record<string, string> = {
  '1': 'human',
  '2': 'ottoman',
  '3': 'heritage',
  '4': 'change',
  '5': 'basemap',
  '6': 'research',
};

/**
 * Keyboard shortcuts hook inspired by Strata's navigation architecture.
 *
 * Controls:
 * - Left/Right: Step year ±1 (Shift: ±25, Alt: ±10, Ctrl/Cmd: ±100)
 * - Space: Play/Pause timeline
 * - Home/End: Jump to 1354 / 2026
 * - [ / ]: Cycle through visible places on the map and center
 * - Escape: Dismiss any active drawer, sheet, or selection
 * - S: Copy shareable link to clipboard + Toast
 * - ?: Toggle Sources & Methodology sheet
 * - 1-6: Toggle layer categories (Human, Ottoman, Heritage, Change, Basemap, Research)
 */
export function useKeyboard() {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      // Do not swallow standard browser shortcuts like Ctrl+R, Cmd+T
      if (
        (e.metaKey || e.ctrlKey) &&
        e.key !== 'ArrowLeft' &&
        e.key !== 'ArrowRight'
      ) {
        return;
      }

      const store = useStore.getState();

      // Escape: Dismiss active drawers / selection
      if (e.key === 'Escape') {
        if (store.pendingChoice) {
          store.setPendingChoice(null);
          return;
        }
        if (store.selectedPlace) {
          store.setSelectedPlace(null);
          return;
        }
        if (store.activeCategory) {
          store.setActiveCategory(null);
          return;
        }
        if (store.recordsOpen) {
          store.setRecordsOpen(false);
          return;
        }
        if (store.sourcesOpen) {
          store.setSourcesOpen(false);
          return;
        }
        if (store.archiveOpen) {
          store.setArchiveOpen(false);
          return;
        }
        if (store.menuOpen) {
          store.setMenuOpen(false);
          return;
        }
        return;
      }

      // Arrow navigation: Step year
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        const dir = e.key === 'ArrowRight' ? 1 : -1;
        const step = e.ctrlKey || e.metaKey ? 100 : e.shiftKey ? 25 : e.altKey ? 10 : 1;
        store.setPlaying(false);
        store.setYear(store.year + dir * step);
        return;
      }

      // Space: Play / pause
      if (e.code === 'Space') {
        e.preventDefault();
        if (store.year >= MAX_YEAR && !store.playing) {
          store.setYear(MIN_YEAR);
        }
        store.setPlaying(!store.playing);
        return;
      }

      // Home / End: Extremes
      if (e.key === 'Home') {
        e.preventDefault();
        store.setPlaying(false);
        store.setYear(MIN_YEAR);
        return;
      }
      if (e.key === 'End') {
        e.preventDefault();
        store.setPlaying(false);
        store.setYear(MAX_YEAR);
        return;
      }

      // Share Link (S or s)
      if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        const shareUrl = getShareableUrl({
          year: store.year,
          mode: store.mode,
          temporalMode: store.temporalMode,
          layers: store.activeLayers,
          region: store.selectedRegion,
          placeId: store.selectedPlace?.id ?? null,
        });

        if (navigator.clipboard?.writeText) {
          navigator.clipboard
            .writeText(shareUrl)
            .then(() => store.setToast('Paylaşım bağlantısı panoya kopyalandı'))
            .catch(() => store.setToast('Bağlantı kopyalanamadı'));
        } else {
          store.setToast('Bağlantı kopyalanamadı');
        }
        return;
      }

      // Cycle Places: [ and ]
      if (e.key === '[' || e.key === ']') {
        e.preventDefault();
        const visibleList = filterPlacesByRegionPreset(
          visiblePlaces(store.year, store.activeLayers, store.mode === 'lost'),
          store.selectedRegion
        );
        if (visibleList.length === 0) return;

        const currentIdx = store.selectedPlace
          ? visibleList.findIndex((p) => p.id === store.selectedPlace!.id)
          : -1;
        const dir = e.key === ']' ? 1 : -1;
        const nextIdx = (currentIdx + dir + visibleList.length) % visibleList.length;
        const nextPlace = visibleList[nextIdx];
        if (nextPlace) {
          store.setSelectedPlace(nextPlace);
        }
        return;
      }

      // Help / Sources Sheet: ?
      if (e.key === '?') {
        e.preventDefault();
        store.setSourcesOpen(!store.sourcesOpen);
        return;
      }

      // Number keys 1-6: Map Toolbar categories
      if (CATEGORY_MAP[e.key]) {
        e.preventDefault();
        const cat = CATEGORY_MAP[e.key];
        store.setActiveCategory(store.activeCategory === cat ? null : cat);
        return;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);
}

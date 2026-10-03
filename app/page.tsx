'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import {
  Compass,
  Plus,
  Minus,
  LocateFixed,
  X
} from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import {
  places,
  visiblePlaces,
  filterPlacesByRegionPreset,
  type Place,
  type Layer
} from '@/lib/atlas-data';
import { ResearchCatalog } from '@/components/research-catalog';
import { AtlasBasemap } from '@/components/atlas-basemap';
import type { AtlasMapHandle } from '@/lib/atlas-map';

import { useStore } from '@/lib/store';
import { useUrlSync } from '@/lib/use-url-sync';
import { useKeyboard } from '@/lib/use-keyboard';
import { useDeferredYear } from '@/lib/use-deferred-year';

import { AtlasHeader } from '@/components/atlas/atlas-header';
import { MapToolbar } from '@/components/atlas/map-toolbar';
import { LayerDrawer } from '@/components/atlas/layer-drawer';
import { MapLegend } from '@/components/atlas/map-legend';
import { AtlasSidebar } from '@/components/atlas/atlas-sidebar';
import { AtlasSearch } from '@/components/atlas/atlas-search';
import { TemporalNavigator } from '@/components/atlas/temporal-navigator';
import { PlaceStoryDrawer } from '@/components/atlas/place-story-drawer';
import { AtlasRecordsSheet } from '@/components/atlas/atlas-records-sheet';
import { AtlasSourcesSheet } from '@/components/atlas/atlas-sources-sheet';
import { RegionSelector } from '@/components/atlas/region-selector';
import { LayerChoicePopup } from '@/components/atlas/layer-choice-popup';
import { AtlasToast } from '@/components/atlas/atlas-toast';
import { EventPanel } from '@/components/atlas/event-panel';
import { PeriodMapControl } from '@/components/atlas/period-map-control';
import { HistoriaTextModal } from '@/components/atlas/historia-text-modal';

import 'maplibre-gl/dist/maplibre-gl.css';
import 'leaflet/dist/leaflet.css';

export default function Atlas() {
  // Global Navigation & Input Hooks (Strata & Historia architecture)
  useUrlSync();
  useKeyboard();
  const deferredYear = useDeferredYear(70);

  // Store Subscriptions
  const year = useStore((s) => s.year);
  const activeLayers = useStore((s) => s.activeLayers);
  const mode = useStore((s) => s.mode);
  const temporalMode = useStore((s) => s.temporalMode);
  const selectedRegion = useStore((s) => s.selectedRegion);
  const names = useStore((s) => s.names);
  const boundaries = useStore((s) => s.boundaries);
  const streets = useStore((s) => s.streets);
  const periodBasemap = useStore((s) => s.periodBasemap);
  const periodOpacity = useStore((s) => s.periodOpacity);
  const selectedPlace = useStore((s) => s.selectedPlace);
  const setSelectedPlace = useStore((s) => s.setSelectedPlace);
  const clusterPlaces = useStore((s) => s.clusterPlaces);
  const setClusterPlaces = useStore((s) => s.setClusterPlaces);
  const activeCategory = useStore((s) => s.activeCategory);
  const setActiveCategory = useStore((s) => s.setActiveCategory);
  const sourcesOpen = useStore((s) => s.sourcesOpen);
  const setSourcesOpen = useStore((s) => s.setSourcesOpen);
  const archiveOpen = useStore((s) => s.archiveOpen);
  const setArchiveOpen = useStore((s) => s.setArchiveOpen);
  const recordsOpen = useStore((s) => s.recordsOpen);
  const setRecordsOpen = useStore((s) => s.setRecordsOpen);
  const menuOpen = useStore((s) => s.menuOpen);
  const setMenuOpen = useStore((s) => s.setMenuOpen);
  const playing = useStore((s) => s.playing);
  const setPlaying = useStore((s) => s.setPlaying);
  const notice = useStore((s) => s.notice);
  const setNotice = useStore((s) => s.setNotice);
  const setMapHandle = useStore((s) => s.setMapHandle);
  const flyToPilot = useStore((s) => s.flyToPilot);

  // Local Component State for Map Lifecycle
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');
  const mapEl = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<AtlasMapHandle | null>(null);

  // Filter places consuming deferredYear for 60fps buttery scrubbing
  const filtered = useMemo(() => {
    let list: Place[];
    if (temporalMode === 'history') {
      const obsLayers = [
        'religion',
        'language',
        'administration',
        'migration',
        'ethnicity',
        'community'
      ] as Layer[];
      list = places.filter((p) => {
        if (p.start > deferredYear) return false;
        if (mode === 'lost') return p.lost || p.partialLoss;
        if (activeLayers.includes(p.layer)) return true;
        return obsLayers.some(
          (d) =>
            activeLayers.includes(d) &&
            (p.observations || []).some((o) => o.dimension === d && o.year <= deferredYear)
        );
      });
    } else {
      list = visiblePlaces(deferredYear, activeLayers, mode === 'lost');
    }
    return filterPlacesByRegionPreset(list, selectedRegion);
  }, [deferredYear, activeLayers, mode, temporalMode, selectedRegion]);

  // Selection Handler
  const handleSelectPlace = (p: Place) => {
    setRecordsOpen(false);
    setSelectedPlace(p);
  };

  // Initialize Map Engine
  useEffect(() => {
    let disposed = false;
    let instance: AtlasMapHandle | null = null;

    import('@/lib/atlas-map')
      .then(async (runtime) => {
        if (!mapEl.current || disposed) return;
        instance = await runtime.createAtlasMap(mapEl.current);
        if (disposed) {
          instance.remove();
          return;
        }
        mapInstanceRef.current = instance;
        setMapHandle(instance);
        await instance.ready;
        if (!disposed) {
          setReady(true);
          requestAnimationFrame(() => {
            instance?.invalidateSize?.();
          });
        }
      })
      .catch((mapError) => {
        console.error('Rumelia map loading failed', mapError);
        if (!disposed) {
          setError('Etkileşimli görünüm açılamadı; Balkan haritası ve tarihsel kayıtlar kullanılabilir.');
        }
      });

    return () => {
      disposed = true;
      instance?.remove();
      mapInstanceRef.current = null;
      setMapHandle(null);
    };
  }, [setMapHandle]);

  // Update map features whenever filtered data, layer switches or selections change
  useEffect(() => {
    if (!ready || !mapInstanceRef.current) return;
    mapInstanceRef.current.update({
      places: filtered,
      names,
      boundaries,
      streets,
      periodBasemap,
      periodOpacity,
      onSelect: (p) => handleSelectPlace(p),
      onCluster: (items) => {
        setClusterPlaces(items);
        setRecordsOpen(true);
      }
    });
  }, [ready, filtered, names, boundaries, streets, periodBasemap, periodOpacity]);

  // Timeline playback timer
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      const cur = useStore.getState().year;
      if (cur >= 2026) {
        useStore.getState().setPlaying(false);
      } else {
        useStore.getState().setYear(Math.min(2026, cur + 5));
      }
    }, 600);
    return () => clearInterval(timer);
  }, [playing]);

  // WebMCP ModelContext tool registration
  useEffect(() => {
    const ctx = (document as unknown as {
      modelContext?: { registerTool: (t: unknown, o: unknown) => Promise<void> };
    }).modelContext;
    if (!ctx) return;
    const lifecycle = new AbortController();

    Promise.resolve(
      ctx.registerTool(
        {
          name: 'configure_atlas',
          description: 'Set the visible atlas year, mode and select a pilot place.',
          inputSchema: {
            type: 'object',
            properties: {
              year: { type: 'integer', minimum: 1354, maximum: 2026 },
              mode: { type: 'string', enum: ['atlas', 'lost'] },
              placeId: { type: 'string' }
            },
            additionalProperties: false
          },
          annotations: { readOnlyHint: false },
          execute: async (input: { year?: number; mode?: string; placeId?: string }) => {
            if (
              !input ||
              typeof input !== 'object' ||
              Object.keys(input).some((k) => !['year', 'mode', 'placeId'].includes(k)) ||
              (input.year !== undefined && (!Number.isInteger(input.year) || input.year < 1354 || input.year > 2026)) ||
              (input.mode !== undefined && !['atlas', 'lost'].includes(input.mode)) ||
              (input.placeId !== undefined && !places.some((p) => p.id === input.placeId))
            ) {
              throw new Error('Invalid atlas configuration');
            }
            const store = useStore.getState();
            if (input.year !== undefined) store.setYear(input.year);
            if (input.mode) store.setMode(input.mode as 'atlas' | 'lost');
            if (input.placeId) {
              const target = places.find((p) => p.id === input.placeId);
              if (target) store.setSelectedPlace(target);
            }

            await new Promise<void>((resolve) =>
              requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
            );
            return { accepted: true, ...input };
          }
        },
        { signal: lifecycle.signal }
      )
    ).catch(() => {});

    return () => lifecycle.abort();
  }, []);

  return (
    <main className="atlas-shell">
      {/* Toast, Overlap Popups and Historia Modals */}
      <AtlasToast />
      <LayerChoicePopup />
      <HistoriaTextModal />

      {/* Top Header */}
      <AtlasHeader>
        <AtlasSearch />
      </AtlasHeader>

      {/* Main Workspace Layout */}
      <div className="workspace">
        <MapToolbar />
        <LayerDrawer />

        <section
          className={`map-surface ${ready ? 'map-ready' : 'map-pending'} ${mode === 'lost' ? 'lost-mode' : ''}`}
          aria-label="İnteraktif Balkan haritası"
        >
          <AtlasBasemap
            places={filtered}
            names={names}
            boundaries={boundaries}
            onSelect={handleSelectPlace}
          />
          {mode === 'lost' && <MapLegend />}

          <div ref={mapEl} className="map-canvas" />

          <div className="map-top">
            <RegionSelector />
          </div>

          {/* Historia Event Context Card */}
          <EventPanel />

          {mode === 'lost' && (
            <div className="lost-note">
              Bu mod bütün dönemleri birlikte gösterir. Zaman çizgisi, seçili yapının kronolojisini okumak için kullanılabilir.
            </div>
          )}

          {(error || notice) && (
            <div className="map-notice" role="status">
              {error || notice}
              <button onClick={() => setNotice('')} aria-label="Bildirimi kapat">
                <X size={14} />
              </button>
            </div>
          )}

          <div className="map-controls">
            <button aria-label="Yakınlaştır" onClick={() => mapInstanceRef.current?.zoomIn()}>
              <Plus size={19} />
            </button>
            <button aria-label="Uzaklaştır" onClick={() => mapInstanceRef.current?.zoomOut()}>
              <Minus size={19} />
            </button>
            <button aria-label="Pilot bölgeye odaklan" onClick={flyToPilot}>
              <LocateFixed size={19} />
            </button>
          </div>

          <div className="compass">
            N<Compass size={33} strokeWidth={1} />
          </div>

          <button
            className="count-pill"
            onClick={() => {
              setClusterPlaces(null);
              setRecordsOpen(true);
            }}
          >
            {filtered.length} kayıt görünümde
          </button>

          <div className="map-credits">
            <a href="https://www.naturalearthdata.com/" target="_blank" rel="noreferrer">
              Natural Earth
            </a>{' '}
            · Günümüz coğrafyası
            {streets && (
              <>
                {' '}·{' '}
                <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">
                  © OSM
                </a>
              </>
            )}
          </div>

          {/* Historia Period Basemap Floating Control */}
          <PeriodMapControl />

          <PlaceStoryDrawer />
        </section>
      </div>

      {/* Bottom Temporal Navigator */}
      <TemporalNavigator />

      {/* Research Package Archive Sheet */}
      <Sheet open={archiveOpen} onOpenChange={setArchiveOpen}>
        <SheetContent className="detail-sheet methods">
          <SheetHeader>
            <SheetTitle>Araştırma paketi v1</SheetTitle>
            <SheetDescription>Kaynaklar, iddialar ve veri dosyaları.</SheetDescription>
          </SheetHeader>
          <div className="detail-body">
            <ResearchCatalog />
          </div>
        </SheetContent>
      </Sheet>

      {/* Mobile Record List Sheet */}
      <AtlasRecordsSheet
        open={recordsOpen}
        onOpenChange={setRecordsOpen}
        clusterPlaces={clusterPlaces}
        filteredPlaces={filtered}
        year={year}
        mode={mode}
        onSelectPlace={handleSelectPlace}
      />

      {/* Mobile Sidebar Sheet */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="bottom" className="mobile-sheet">
          <SheetHeader>
            <SheetTitle>Atlas katmanları</SheetTitle>
            <SheetDescription>Görmek istediğiniz kayıtları seçin.</SheetDescription>
          </SheetHeader>
          <AtlasSidebar
            active={activeLayers}
            mode={mode}
            onToggleLayer={(l) => useStore.getState().toggleLayer(l)}
            names={names}
            onNamesChange={(val) => useStore.getState().setNames(val)}
            boundaries={boundaries}
            onBoundariesChange={(val) => useStore.getState().setBoundaries(val)}
            streets={streets}
            onStreetsChange={(val) => useStore.getState().setStreets(val)}
            onFlyToPilot={() => {
              flyToPilot();
              setMenuOpen(false);
            }}
            onOpenArchive={() => {
              setMenuOpen(false);
              setArchiveOpen(true);
            }}
          />
        </SheetContent>
      </Sheet>

      {/* Sources & Methodology Sheet */}
      <AtlasSourcesSheet
        open={sourcesOpen}
        onOpenChange={setSourcesOpen}
        onOpenArchive={() => setArchiveOpen(true)}
      />
    </main>
  );
}

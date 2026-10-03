'use client';

import {useEffect, useRef, useState, useCallback, useMemo} from 'react';
import {
  Compass,
  ChevronDown,
  Plus,
  Minus,
  LocateFixed,
  PanelLeft,
  MapPin,
  X
} from 'lucide-react';
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription} from '@/components/ui/sheet';
import {
  places, 
  visiblePlaces, 
  regionPresets, 
  type RegionPreset, 
  filterPlacesByRegionPreset, 
  findRegionPresetForPlace, 
  type Place, 
  type Layer
} from '@/lib/atlas-data';
import {ResearchCatalog} from '@/components/research-catalog';
import {AtlasBasemap} from '@/components/atlas-basemap';
import type {AtlasMapHandle} from '@/lib/atlas-map';

import {AtlasHeader} from '@/components/atlas/atlas-header';
import {MapToolbar} from '@/components/atlas/map-toolbar';
import {LayerDrawer} from '@/components/atlas/layer-drawer';
import {MapLegend} from '@/components/atlas/map-legend';
import {AtlasSidebar} from '@/components/atlas/atlas-sidebar';
import {AtlasSearch} from '@/components/atlas/atlas-search';
import {TemporalNavigator} from '@/components/atlas/temporal-navigator';
import {PlaceStoryDrawer} from '@/components/atlas/place-story-drawer';
import {AtlasRecordsSheet} from '@/components/atlas/atlas-records-sheet';
import {AtlasSourcesSheet} from '@/components/atlas/atlas-sources-sheet';
import {RegionSelector} from '@/components/atlas/region-selector';

import 'maplibre-gl/dist/maplibre-gl.css';
import 'leaflet/dist/leaflet.css';

export default function Atlas() {
  const [year, setYear] = useState(1894);
  const [active, setActive] = useState<Layer[]>(['settlement', 'heritage']);
  const [mode, setMode] = useState<'atlas' | 'lost'>('atlas');
  const [temporalMode, setTemporalMode] = useState<'snapshot' | 'history'>('snapshot');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Place | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<RegionPreset>(regionPresets[0]);

  // Sheets state
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [recordsOpen, setRecordsOpen] = useState(false);
  const [clusterPlaces, setClusterPlaces] = useState<Place[] | null>(null);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Map layer switches
  const [names, setNames] = useState(true);
  const [boundaries, setBoundaries] = useState(true);
  const [streets, setStreets] = useState(true);

  // Map and timeline state
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  const mapEl = useRef<HTMLDivElement>(null);
  const map = useRef<AtlasMapHandle | null>(null);
  const pickRef = useRef<(p: Place) => void>(() => {});

  const filtered = useMemo(() => {
    let list: Place[];
    if (temporalMode === 'history') {
      list = places.filter(p => 
        p.start <= year && 
        (mode === 'lost' ? (p.lost || p.partialLoss) : active.includes(p.layer))
      );
    } else {
      list = visiblePlaces(year, active, mode === 'lost');
    }
    return filterPlacesByRegionPreset(list, selectedRegion);
  }, [year, active, mode, temporalMode, selectedRegion]);

  const select = useCallback((p: Place) => {
    setRecordsOpen(false);
    setSelected(p);
    setQuery('');

    // Eğer seçilen yer mevcut bölge filtresinde gizlenmişse, bölgeyi bu yerin ülkesine otomatik ayarla
    const placeRegion = findRegionPresetForPlace(p);
    if (placeRegion && selectedRegion.id !== 'all' && selectedRegion.id !== placeRegion.id) {
      setSelectedRegion(placeRegion);
    }

    map.current?.flyTo({center: p.coordinates, zoom: 13, duration: 1000});
  }, [selectedRegion]);

  pickRef.current = select;

  const toggleLayer = useCallback((id: Layer) => {
    setActive(a => (a.includes(id) ? a.filter(x => x !== id) : [...a, id]));
  }, []);

  const flyToPilot = useCallback(() => {
    map.current?.flyTo({center: [21.13, 42.06], zoom: 9});
    setSelected(null);
  }, []);

  // Initialize Map Engine (Leaflet default)
  useEffect(() => {
    let disposed = false;
    let instance: AtlasMapHandle | null = null;

    import('@/lib/atlas-map')
      .then(async runtime => {
        instance = await runtime.createAtlasMap(mapEl.current!);
        if (disposed) {
          instance.remove();
          return;
        }
        map.current = instance;
        await instance.ready;
        if (!disposed) {
          setReady(true);
          requestAnimationFrame(() => {
            instance?.invalidateSize?.();
          });
        }
      })
      .catch(mapError => {
        console.error('Rumelia map loading failed', mapError);
        if (!disposed) {
          setError('Etkileşimli görünüm açılamadı; Balkan haritası ve tarihsel kayıtlar kullanılabilir.');
        }
      });

    return () => {
      disposed = true;
      instance?.remove();
      map.current = null;
    };
  }, []);

  // Update map features on state change
  useEffect(() => {
    if (!ready || !map.current) return;
    map.current.update({
      places: filtered,
      names,
      boundaries,
      streets,
      onSelect: p => pickRef.current(p),
      onCluster: items => {
        setClusterPlaces(items);
        setRecordsOpen(true);
      }
    });
  }, [ready, year, active, mode, names, boundaries, streets, filtered]);

  // Timeline player timer
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      setYear(v => {
        if (v >= 2026) {
          setPlaying(false);
          return 2026;
        }
        return Math.min(2026, v + 5);
      });
    }, 600);
    return () => clearInterval(timer);
  }, [playing]);

  // ModelContext tool registration (WebMCP)
  useEffect(() => {
    const ctx = (document as unknown as {modelContext?: {registerTool: (t: unknown, o: unknown) => Promise<void>}}).modelContext;
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
              year: {type: 'integer', minimum: 1354, maximum: 2026},
              mode: {type: 'string', enum: ['atlas', 'lost']},
              placeId: {type: 'string'}
            },
            additionalProperties: false
          },
          annotations: {readOnlyHint: false},
          execute: async (input: {year?: number; mode?: string; placeId?: string}) => {
            if (
              !input ||
              typeof input !== 'object' ||
              Object.keys(input).some(k => !['year', 'mode', 'placeId'].includes(k)) ||
              (input.year !== undefined && (!Number.isInteger(input.year) || input.year < 1354 || input.year > 2026)) ||
              (input.mode !== undefined && !['atlas', 'lost'].includes(input.mode)) ||
              (input.placeId !== undefined && !places.some(p => p.id === input.placeId))
            ) {
              throw new Error('Invalid atlas configuration');
            }
            if (input.year !== undefined) setYear(input.year);
            if (input.mode) setMode(input.mode as 'atlas' | 'lost');
            if (input.placeId) pickRef.current(places.find(p => p.id === input.placeId)!);

            await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
            return {accepted: true, ...input};
          }
        },
        {signal: lifecycle.signal}
      )
    ).catch(() => {});

    return () => lifecycle.abort();
  }, []);

  return (
    <main className="atlas-shell">
      <AtlasHeader
        mode={mode}
        onModeChange={newMode => {
          setMode(newMode);
          setSelected(null);
          if (newMode === 'lost') {
            map.current?.flyTo({center: [21.435, 42.001], zoom: 13, duration: 700});
          }
        }}
        onOpenSources={() => setSourcesOpen(true)}
      >
        <AtlasSearch
          query={query}
          onQueryChange={setQuery}
          onSelectPlace={select}
          onFlyToCoordinates={(coords, zoom) => map.current?.flyTo({center: coords, zoom})}
          onNotice={setNotice}
        />
      </AtlasHeader>

      <div className="workspace">
        <MapToolbar 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory} 
        />
        <LayerDrawer 
          activeCategory={activeCategory}
          onClose={() => setActiveCategory(null)}
          activeLayers={active}
          mode={mode}
          onModeChange={setMode}
          year={year}
          onYearChange={y => {
            setYear(y);
            setPlaying(false);
          }}
          onToggleLayer={toggleLayer}
          names={names}
          onNamesChange={setNames}
          boundaries={boundaries}
          onBoundariesChange={setBoundaries}
          streets={streets}
          onStreetsChange={setStreets}
          onFlyToPilot={flyToPilot}
          onSelectBounds={bounds => {
            const matchingPreset = regionPresets.find(r => 
              Math.abs(r.bounds[0][0] - bounds[0][0]) < 0.2 && 
              Math.abs(r.bounds[1][1] - bounds[1][1]) < 0.2
            );
            if (matchingPreset) {
              setSelectedRegion(matchingPreset);
            }
            map.current?.fitBounds(bounds, {padding: 30, duration: 800});
            setSelected(null);
          }}
          onOpenArchive={() => setArchiveOpen(true)}
          onOpenSources={() => setSourcesOpen(true)}
        />


        <section
          className={`map-surface ${ready ? 'map-ready' : 'map-pending'} ${mode === 'lost' ? 'lost-mode' : ''}`}
          aria-label="İnteraktif Balkan haritası"
        >
          <AtlasBasemap
            places={filtered}
            names={names}
            boundaries={boundaries}
            onSelect={select}
          />
          {mode === 'lost' && <MapLegend />}
          
          <div ref={mapEl} className="map-canvas" />

          <div className="map-top">
            <RegionSelector
              selectedRegionId={selectedRegion.id}
              currentRegionName={selectedRegion.name}
              onSelectRegion={preset => {
                setSelectedRegion(preset);
                map.current?.fitBounds(preset.bounds, {padding: 30, duration: 800});
                setSelected(null);
              }}
            />
          </div>




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
            <button aria-label="Yakınlaştır" onClick={() => map.current?.zoomIn()}>
              <Plus size={19} />
            </button>
            <button aria-label="Uzaklaştır" onClick={() => map.current?.zoomOut()}>
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
          
          <PlaceStoryDrawer
            place={selected}
            year={year}
            onClose={() => setSelected(null)}
          />
        </section>
      </div>

      <TemporalNavigator
        year={year}
        onYearChange={y => {
          setYear(y);
          setPlaying(false);
        }}
        playing={playing}
        onPlayingToggle={() => {
          if (year === 2026) setYear(1354);
          setPlaying(!playing);
        }}
        temporalMode={temporalMode}
        onTemporalModeChange={setTemporalMode}
      />

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
        onSelectPlace={select}
      />

      {/* Mobile Sidebar Sheet */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="bottom" className="mobile-sheet">
          <SheetHeader>
            <SheetTitle>Atlas katmanları</SheetTitle>
            <SheetDescription>Görmek istediğiniz kayıtları seçin.</SheetDescription>
          </SheetHeader>
          <AtlasSidebar
            active={active}
            mode={mode}
            onToggleLayer={toggleLayer}
            names={names}
            onNamesChange={setNames}
            boundaries={boundaries}
            onBoundariesChange={setBoundaries}
            streets={streets}
            onStreetsChange={setStreets}
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

'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, ChevronLeft, ChevronRight, Info, Users, 
  BookOpen, Sparkles, Clock, Compass 
} from 'lucide-react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { 
  getBalkanDemographicsForYear, 
  DEMOGRAPHIC_EVIDENCE_LABELS, 
  DEMOGRAPHIC_SCOPE_NOTE 
} from '@/lib/atlas-data';
import { useStore, type TemporalMode } from '@/lib/store';
import { getAdjacentBreakpoint } from '@/lib/historia-events';
import { 
  RUMELIA_ERAS, 
  getEraForYear, 
  getEventsNearYear, 
  yearToTrackPercent, 
  trackPercentToYear,
  type ChronoEvent 
} from '@/lib/chrono-timeline';

interface TemporalNavigatorProps {
  year?: number;
  onYearChange?: (y: number) => void;
  playing?: boolean;
  onPlayingToggle?: () => void;
  temporalMode?: TemporalMode;
  onTemporalModeChange?: (m: TemporalMode) => void;
}

const MILESTONES = [
  { year: 1354, label: 'Osmanlı ayak izi (Çimpe)', short: '1354' },
  { year: 1453, label: 'İstanbul’un fethi', short: '1453' },
  { year: 1699, label: 'Karlofça Antlaşması', short: '1699' },
  { year: 1878, label: 'Berlin Antlaşması', short: '1878' },
  { year: 1912, label: 'I. Balkan Savaşı', short: '1912' },
  { year: 1923, label: 'Lozan & Mübadele', short: '1923' },
  { year: 1950, label: 'Yugoslavya Göçü', short: '1950' },
  { year: 1989, label: 'Bulgaristan Göçü', short: '1989' },
  { year: 2026, label: 'Günümüz', short: '2026' },
];

export function TemporalNavigator({
  year: propYear,
  onYearChange: propOnYearChange,
  playing: propPlaying,
  onPlayingToggle: propOnPlayingToggle,
  temporalMode: propTemporalMode,
  onTemporalModeChange: propOnTemporalModeChange
}: TemporalNavigatorProps = {}) {
  const storeYear = useStore(s => s.year);
  const storeSetYear = useStore(s => s.setYear);
  const storePlaying = useStore(s => s.playing);
  const storeSetPlaying = useStore(s => s.setPlaying);
  const storeTemporalMode = useStore(s => s.temporalMode);
  const storeSetTemporalMode = useStore(s => s.setTemporalMode);
  const ohmStepAmount = useStore(s => s.ohmStepAmount);
  const setOhmStepAmount = useStore(s => s.setOhmStepAmount);

  const year = propYear !== undefined ? propYear : storeYear;
  const onYearChange = propOnYearChange || ((y: number) => {
    storeSetYear(y);
    storeSetPlaying(false);
  });
  const playing = propPlaying !== undefined ? propPlaying : storePlaying;
  const onPlayingToggle = propOnPlayingToggle || (() => {
    if (year >= 2026) storeSetYear(1354);
    storeSetPlaying(!playing);
  });
  const temporalMode = propTemporalMode !== undefined ? propTemporalMode : storeTemporalMode;
  const onTemporalModeChange = propOnTemporalModeChange || storeSetTemporalMode;

  const [isDesktop, setIsDesktop] = useState(true);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState('');

  // ChronoAtlas pointer scrub & track state
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackW, setTrackW] = useState(800);
  const [hoverPercent, setHoverPercent] = useState<number | null>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 761px)');
    setIsDesktop(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  // Measure track width for adaptive tick thinning
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width;
      if (w) setTrackW(w);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [isDesktop]);

  const handleEditSubmit = (e: React.KeyboardEvent | React.FocusEvent) => {
    if ('key' in e && e.key !== 'Enter') return;
    const v = parseInt(editValue);
    if (!isNaN(v) && v >= 1354 && v <= 2026) {
      onYearChange(v);
    }
    setEditing(false);
  };

  const currentEra = getEraForYear(year);
  const nearEvents = getEventsNearYear(year, 6);
  const activeEvent = nearEvents[0];
  const demo = getBalkanDemographicsForYear(year);
  const currentMilestone = MILESTONES.find(m => m.year === year);

  // ChronoAtlas: Calculate client coordinate to year
  function yearFromClientX(clientX: number): number {
    if (!trackRef.current) return year;
    const rect = trackRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    return trackPercentToYear(pct);
  }

  // Thin out milestone ticks if screen width is narrow (< 46px apart)
  const visibleMilestones = MILESTONES.filter((m, idx) => {
    if (trackW < 550) {
      // In narrow view, show only 5 key anchors
      return [1354, 1453, 1878, 1923, 2026].includes(m.year);
    }
    if (trackW < 750) {
      return [1354, 1453, 1699, 1878, 1912, 1923, 2026].includes(m.year);
    }
    return true;
  });

  const progressPercent = yearToTrackPercent(year) * 100;

  const desktopContent = (
    <div className="h-[108px] bg-[#FAF8F2] border-t border-[#dddcd1] flex items-center px-5 sm:px-7 gap-4 w-full select-none shadow-sm">
      {/* 1. Yıl ve Tarihsel Dönem Readout (ChronoAtlas YearReadout) */}
      <div className="flex-shrink-0 w-28 sm:w-32 border-r border-[#dddcd1] pr-3 sm:pr-4">
        {editing ? (
          <input
            autoFocus
            className="w-full text-4xl font-serif text-primary bg-transparent outline-none border-b-2 border-primary"
            value={editValue}
            onChange={e => setEditValue(e.target.value)}
            onBlur={handleEditSubmit}
            onKeyDown={handleEditSubmit}
            placeholder="Yıl girin"
          />
        ) : (
          <button 
            onClick={() => { setEditValue(year.toString()); setEditing(true); }} 
            className="text-left w-full cursor-pointer group"
            title="Yılı doğrudan klavyeden girmek için tıklayın"
          >
            <strong className="block text-3xl sm:text-4xl font-serif text-primary lining-nums group-hover:text-[#00694C] transition-colors leading-none mb-1">
              {year}
            </strong>
            <span 
              className="block text-[10px] tracking-wide font-semibold truncate uppercase"
              style={{ color: currentEra.color }}
              title={currentEra.name}
            >
              {currentEra.shortName}
            </span>
          </button>
        )}
      </div>

      {/* 2. Oynat / Durdur & Kırılma Noktası Atlama (Historia & Chrono Transport) */}
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <button
          type="button"
          className="w-8 h-8 rounded-full border border-[#dddcd1] bg-white text-[#6F786F] hover:text-[#9D493A] hover:border-[#9D493A]/40 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
          onClick={() => {
            const bp = getAdjacentBreakpoint(year, -1);
            if (bp !== null) onYearChange(bp);
          }}
          title="Önceki Kırılma Noktası (Shift+←)"
          aria-label="Önceki Kırılma Noktası"
        >
          <ChevronLeft size={16} />
        </button>

        <button 
          className="w-10 h-10 rounded-full bg-primary hover:bg-[#7b3225] text-white flex items-center justify-center shadow-sm transition-all duration-150 cursor-pointer"
          onClick={onPlayingToggle}
          aria-label={playing ? "Zaman akışını duraklat (Boşluk)" : "Zaman akışını oynat (Boşluk)"}
        >
          {playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5" />}
        </button>

        <button
          type="button"
          className="w-8 h-8 rounded-full border border-[#dddcd1] bg-white text-[#6F786F] hover:text-[#9D493A] hover:border-[#9D493A]/40 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
          onClick={() => {
            const bp = getAdjacentBreakpoint(year, 1);
            if (bp !== null) onYearChange(bp);
          }}
          title="Sonraki Kırılma Noktası (Shift+→)"
          aria-label="Sonraki Kırılma Noktası"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* 3. Orta Bölüm: Demografi Oranı + Chrono Ticker + Era Bands + Scrub Track */}
      <div className="flex-1 min-w-0 flex flex-col justify-center py-0.5">
        
        {/* Üst Satır: Demografi Rozeti + Chrono Ticker (ChronoAtlas Event Chip) */}
        <div className="flex items-center justify-between text-xs mb-1.5 flex-wrap gap-x-2 gap-y-1">
          {/* Balkan Demografi Rozeti */}
          <div 
            className="flex items-center gap-1.5 bg-[#f0fdf7] border border-[#00694C]/25 px-2.5 py-0.5 rounded-full shadow-2xs shrink-0"
            title={`${demo.note}\nKaynak: ${demo.source}\n${DEMOGRAPHIC_SCOPE_NOTE}`}
          >
            <span className="w-2 h-2 rounded-full bg-[#00694C]" />
            <span className="text-[11px] font-bold text-[#00694C]">
              Balkanlar Türk & Müslüman:
            </span>
            <span className="font-serif font-bold text-xs text-[#0f172a] font-mono">
              {demo.muslim.toLocaleString('tr')}
            </span>
            <span 
              className="text-[10px] font-bold px-1.5 py-0.2 rounded-full text-white shadow-2xs"
              style={{ backgroundColor: '#00694C' }}
            >
              %{demo.pct.toFixed(1)}
            </span>
            <span 
              className={`text-[9px] font-medium px-1.5 py-0.2 rounded ${
                demo.kind === 'sayim-temelli' 
                  ? 'bg-emerald-100 text-emerald-800' 
                  : demo.kind === 'kaynak-sentezi' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-amber-100 text-amber-800'
              }`}
            >
              {demo.interpolated ? 'Ara Değer' : DEMOGRAPHIC_EVIDENCE_LABELS[demo.kind]}
            </span>
          </div>

          {/* Chrono Ticker (ChronoAtlas Dönem & Olay Hapı) */}
          {activeEvent ? (
            <button
              type="button"
              onClick={() => {
                onYearChange(activeEvent.year);
                const map = useStore.getState().mapHandle;
                map?.flyTo({ center: activeEvent.coordinates, zoom: 8, duration: 800 });
              }}
              className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] bg-white border border-[#25352F]/15 shadow-2xs hover:border-[#9D493A] transition-all cursor-pointer truncate max-w-[320px]"
              title={`${activeEvent.title} (${activeEvent.year})\n${activeEvent.blurb}`}
            >
              <span style={{ color: activeEvent.color }} className="font-bold text-[10px]">
                {activeEvent.icon}
              </span>
              <span className="font-serif font-bold text-[#9D493A]">
                {activeEvent.year}
              </span>
              <span className="text-[#25352F] font-medium truncate">
                {activeEvent.title}
              </span>
            </button>
          ) : (
            <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-[#6F786F] truncate max-w-[300px]">
              <Compass size={12} className="text-[#B38A4A] shrink-0" />
              <span className="truncate italic">{currentEra.name}</span>
            </div>
          )}
        </div>

        {/* ChronoAtlas: Tarihsel Dönem Kuşakları (Era Bands Strip) */}
        <div className="relative w-full h-[14px] flex rounded overflow-hidden border border-stone-200/80 mb-1 bg-stone-100/60">
          {RUMELIA_ERAS.map((era) => {
            const startPct = yearToTrackPercent(era.from) * 100;
            const endPct = yearToTrackPercent(era.to) * 100;
            const widthPct = endPct - startPct;
            const isEraActive = year >= era.from && year < era.to;

            return (
              <button
                key={era.id}
                type="button"
                onClick={() => onYearChange(era.from)}
                className={`h-full relative transition-all group overflow-hidden cursor-pointer border-r border-white/60 last:border-r-0 ${
                  isEraActive ? 'brightness-95 ring-1 ring-inset ring-[#9D493A]/50' : 'hover:brightness-90'
                }`}
                style={{ width: `${widthPct}%`, backgroundColor: era.tint }}
                title={`${era.name} (${era.from}–${era.to})\n${era.description}`}
              >
                {widthPct > 8 && (
                  <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold uppercase tracking-wider text-stone-700/80 truncate px-1">
                    {era.shortName}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ChronoAtlas: Hassas Sürekli Zaman Tarama Rayı (Continuous Pointer Scrub Track) */}
        <div
          ref={trackRef}
          className="relative h-[24px] flex items-center cursor-crosshair touch-none select-none group"
          onPointerDown={(e) => {
            dragging.current = true;
            (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
            useStore.getState().setPlaying(false);
            onYearChange(yearFromClientX(e.clientX));
          }}
          onPointerMove={(e) => {
            if (!trackRef.current) return;
            const rect = trackRef.current.getBoundingClientRect();
            const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            setHoverPercent(pct);
            if (dragging.current) {
              onYearChange(trackPercentToYear(pct));
            }
          }}
          onPointerUp={(e) => {
            dragging.current = false;
            (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
          }}
          onPointerLeave={() => {
            setHoverPercent(null);
            dragging.current = false;
          }}
          role="slider"
          aria-label="Tarihsel Zaman Çizelgesi"
          aria-valuemin={1354}
          aria-valuemax={2026}
          aria-valuenow={year}
        >
          {/* Ray Tabanı (Track Base Rail) */}
          <div className="w-full h-1.5 bg-[#e4e1d5] rounded-full overflow-hidden relative">
            <div 
              className="h-full bg-[#9D493A] transition-all duration-75"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Kilometre Taşı Noktaları (Milestone Dots) */}
          {MILESTONES.map((m) => {
            const mPct = yearToTrackPercent(m.year) * 100;
            const isPassed = m.year <= year;
            return (
              <div
                key={m.year}
                className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full border transition-all ${
                  isPassed 
                    ? 'bg-[#9D493A] border-white ring-1 ring-[#9D493A]/40' 
                    : 'bg-white border-stone-300'
                }`}
                style={{ left: `${mPct}%` }}
                title={`${m.label} (${m.year})`}
              />
            );
          })}

          {/* Hover Ghost: Mouse ile Gezinirken Takip Eden Çizgi ve Yıl Balonu (ChronoAtlas Ghost) */}
          {hoverPercent !== null && !dragging.current && (
            <div
              className="pointer-events-none absolute inset-y-0 w-px bg-[#9D493A]/50 z-20"
              style={{ left: `${hoverPercent * 100}%` }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-stone-900 text-white text-[10px] font-mono px-1.5 py-0.5 shadow-md">
                {trackPercentToYear(hoverPercent)}
              </div>
            </div>
          )}

          {/* Scrubber İğnesi & Elmas Uç (ChronoAtlas Diamond Needle) */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 pointer-events-none transition-transform duration-75"
            style={{ left: `${progressPercent}%` }}
          >
            <div className="w-3.5 h-3.5 rotate-45 bg-[#B38A4A] border-2 border-white shadow-md rounded-[2px]" />
          </div>
        </div>

        {/* Alt Satır: Kilometre Taşı Etiketleri */}
        <div className="relative w-full h-3 text-[9px] text-[#6F786F] font-mono">
          {visibleMilestones.map((m) => {
            const mPct = yearToTrackPercent(m.year) * 100;
            const isSelected = m.year === year;
            return (
              <button
                key={m.year}
                type="button"
                onClick={() => onYearChange(m.year)}
                className={`absolute -translate-x-1/2 hover:text-[#9D493A] transition-colors cursor-pointer ${
                  isSelected ? 'text-[#9D493A] font-bold' : ''
                }`}
                style={{ left: `${mPct}%` }}
                title={m.label}
              >
                {m.short}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Sağ Taraf: OHM Adım Atlama, Mod Değiştirici ve Metodoloji */}
      <div className="flex-shrink-0 ml-1 flex flex-col items-end gap-1.5">
        <div className="flex items-center gap-1.5">
          {/* OHM Zaman Atlama Adımı (Time Jump) */}
          <div 
            className="hidden sm:flex items-center bg-white border border-stone-200 rounded-full p-0.5 text-[10px] font-mono shadow-2xs" 
            title="OpenHistoricalMap & ChronoAtlas Zaman Atlama Adımı"
          >
            <span className="text-stone-400 pl-2 pr-1 text-[9px] font-sans font-medium">Adım:</span>
            {[1, 5, 10, 25].map(step => (
              <button
                key={step}
                type="button"
                onClick={() => setOhmStepAmount(step)}
                className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                  ohmStepAmount === step 
                    ? 'bg-[#9D493A] text-white font-bold shadow-2xs' 
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {step}Y
              </button>
            ))}
          </div>

          {/* Snapshot / History Toggle */}
          <div className="flex items-center bg-white border border-gray-200 rounded-full p-0.5 text-xs shadow-2xs">
            <button 
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${temporalMode === 'snapshot' ? 'bg-[#FAF8F2] text-[#9D493A] font-bold shadow-2xs' : 'text-gray-600'}`}
              onClick={() => onTemporalModeChange?.('snapshot')}
            >
              Snapshot
            </button>
            <button 
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${temporalMode === 'history' ? 'bg-[#FAF8F2] text-[#9D493A] font-bold shadow-2xs' : 'text-gray-600'}`}
              onClick={() => onTemporalModeChange?.('history')}
            >
              History
            </button>
          </div>
        </div>

        <p className="text-[9px] text-gray-400 w-44 text-right leading-tight truncate">
          1354–2026 Rumeli Kronolojisi
        </p>
      </div>
    </div>
  );

  // Mobil Görünüm
  const mobileContent = (
    <div className="h-[60px] bg-[#FAF8F2] border-t border-[#dddcd1] flex items-center px-3 justify-between w-full select-none shadow-sm">
      <div className="flex items-center gap-1">
        <button 
          className="p-1.5 text-gray-600" 
          onClick={() => onYearChange(Math.max(1354, year - (ohmStepAmount || 1)))}
        >
          <ChevronLeft size={18} />
        </button>
        <button 
          onClick={() => setSheetOpen(true)} 
          className="text-center px-1"
        >
          <strong className="text-xl font-serif text-primary block leading-none">
            {year}
          </strong>
          <span className="text-[9px] text-[#00694C] font-bold block">
            %{demo.pct.toFixed(0)} Türk/Müs.
          </span>
        </button>
        <button 
          className="p-1.5 text-gray-600" 
          onClick={() => onYearChange(Math.min(2026, year + (ohmStepAmount || 1)))}
        >
          <ChevronRight size={18} />
        </button>
      </div>
      
      <div className="flex-1 mx-3 flex flex-col justify-center">
        {/* Mobil Era Bandı Mini Çizgisi */}
        <div className="w-full h-1 flex rounded overflow-hidden mb-1">
          {RUMELIA_ERAS.map((era) => (
            <div
              key={era.id}
              style={{
                width: `${(era.to - era.from) / (2026 - 1354) * 100}%`,
                backgroundColor: era.color,
                opacity: year >= era.from && year < era.to ? 1 : 0.3
              }}
            />
          ))}
        </div>
        <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden relative">
          <div 
            className="h-full bg-[#9D493A]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <button 
        className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-xs"
        onClick={onPlayingToggle}
      >
        {playing ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" className="ml-0.5" />}
      </button>
    </div>
  );

  return (
    <>
      {isDesktop ? desktopContent : mobileContent}
      {!isDesktop && (
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetContent side="bottom" className="p-6 bg-[#FAF8F2] rounded-t-[24px]">
             <div className="flex flex-col gap-5 py-2">
                <div className="text-center">
                  <strong className="text-4xl font-serif text-primary lining-nums">{year}</strong>
                  <p className="text-xs font-semibold text-[#00694C] mt-1">{currentEra.name}</p>
                </div>

                {/* Mobil Demografi Özeti */}
                <div className="bg-white border border-[#25352F]/15 p-3.5 rounded-xl shadow-xs space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#00694C] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#00694C]" />
                      Balkanlar Türk & Müslüman Nüfusu:
                    </span>
                    <span className="font-bold text-sm text-[#00694C] font-mono">
                      %{demo.pct.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-stone-600 font-mono">
                    <span>Müslüman Nüfus: <b>{demo.muslim.toLocaleString('tr')}</b></span>
                    <span>Toplam: <b>{demo.total.toLocaleString('tr')}</b></span>
                  </div>
                  <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden flex shadow-inner">
                    <div className="h-full bg-[#00694C]" style={{ width: `${demo.pct}%` }} />
                    <div className="h-full bg-[#A91101]" style={{ width: `${100 - demo.pct}%` }} />
                  </div>
                  <p className="text-[10px] text-gray-500 italic pt-1 border-t border-stone-100">
                    {demo.note} ({demo.source})
                  </p>
                </div>

                {/* Mobil Era Bandı */}
                <div className="space-y-1">
                  <span className="text-[10px] font-semibold text-stone-500 uppercase">Tarihsel Dönemler:</span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {RUMELIA_ERAS.map(era => (
                      <button
                        key={era.id}
                        onClick={() => onYearChange(era.from)}
                        className={`p-2 rounded text-left text-xs border transition-all ${
                          year >= era.from && year < era.to 
                            ? 'border-[#9D493A] bg-amber-50 font-bold' 
                            : 'border-stone-200 bg-white'
                        }`}
                      >
                        <span className="block font-medium truncate">{era.shortName}</span>
                        <span className="text-[10px] text-stone-500 font-mono">{era.from}–{era.to}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobil Kilometre Taşları */}
                <div className="grid grid-cols-3 gap-2">
                  {MILESTONES.map(m => (
                    <button
                      key={m.year}
                      className={`py-2 text-xs rounded border ${m.year === year ? 'border-primary bg-primary/5 text-primary font-bold' : 'border-gray-200 bg-white text-gray-600'}`}
                      onClick={() => onYearChange(m.year)}
                    >
                      {m.short}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-center bg-white border border-gray-200 rounded-full p-1 text-sm shadow-xs mx-auto">
                  <button 
                    className={`px-4 py-1.5 rounded-full transition-colors ${temporalMode === 'snapshot' ? 'bg-[#FAF8F2] text-[#9D493A] font-bold' : 'text-gray-600'}`}
                    onClick={() => onTemporalModeChange?.('snapshot')}
                  >
                    Snapshot
                  </button>
                  <button 
                    className={`px-4 py-1.5 rounded-full transition-colors ${temporalMode === 'history' ? 'bg-[#FAF8F2] text-[#9D493A] font-bold' : 'text-gray-600'}`}
                    onClick={() => onTemporalModeChange?.('history')}
                  >
                    History
                  </button>
                </div>
             </div>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
}

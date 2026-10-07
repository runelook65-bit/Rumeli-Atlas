'use client';

import { useState, useEffect } from 'react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { Play, Pause, ChevronLeft, ChevronRight, Calendar, Users, Landmark, Layers } from 'lucide-react';
import { useStore, type TemporalMode } from '@/lib/store';
import { getBalkanDemographicsForYear, DEMOGRAPHIC_EVIDENCE_LABELS } from '@/lib/atlas-data';
import { getEraForYear, yearToTrackPercent } from '@/lib/chrono-timeline';
import { getAdjacentBreakpoint } from '@/lib/historia-events';

// Sub-components
import { TimelineYearZone } from './timeline/timeline-year-zone';
import { TimelineTransportZone } from './timeline/timeline-transport-zone';
import { TimelineMetricsZone } from './timeline/timeline-metrics-zone';
import { TimelineTrackZone } from './timeline/timeline-track-zone';
import { TimelineControlsZone } from './timeline/timeline-controls-zone';
import { MACRO_ERAS, TIMELINE_MILESTONES, CURATED_TIMELINE_EVENTS, EVENT_CATEGORIES } from './timeline/timeline-types';

interface TemporalNavigatorProps {
  year?: number;
  onYearChange?: (y: number) => void;
  playing?: boolean;
  onPlayingToggle?: () => void;
  temporalMode?: TemporalMode;
  onTemporalModeChange?: (m: TemporalMode) => void;
}

export function TemporalNavigator({
  year: propYear,
  onYearChange: propOnYearChange,
  playing: propPlaying,
  onPlayingToggle: propOnPlayingToggle,
  temporalMode: propTemporalMode,
  onTemporalModeChange: propOnTemporalModeChange
}: TemporalNavigatorProps = {}) {
  const storeYear = useStore((s) => s.year);
  const storeSetYear = useStore((s) => s.setYear);
  const storePlaying = useStore((s) => s.playing);
  const storeSetPlaying = useStore((s) => s.setPlaying);
  const storeTemporalMode = useStore((s) => s.temporalMode);
  const storeSetTemporalMode = useStore((s) => s.setTemporalMode);
  const ohmStepAmount = useStore((s) => s.ohmStepAmount);
  const mapHandle = useStore((s) => s.mapHandle);

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

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const currentEra = getEraForYear(year);
  const demo = getBalkanDemographicsForYear(year);
  const progressPercent = yearToTrackPercent(year) * 100;

  // Desktop & Tablet Floating Dock
  const desktopContent = (
    <nav 
      aria-label="Tarihsel Zaman Çizelgesi Konsolu" 
      className="temporal-console-dock flex flex-col gap-2 select-none"
    >
      {/* ÜST SATIR: Zone A (Yıl), Zone B (Oynatıcı), Zone C (Nüfus & Bölge Metrikleri) */}
      <div className="flex items-center gap-3 sm:gap-4 w-full">
        {/* Zone A: Büyük Tarihsel Yıl ve Dönem Rozeti */}
        <TimelineYearZone year={year} onYearChange={onYearChange} />

        {/* Zone B: Oynat / Durdur / Atlama Kontrolleri */}
        <TimelineTransportZone
          year={year}
          onYearChange={onYearChange}
          playing={playing}
          onPlayingToggle={onPlayingToggle}
          stepAmount={ohmStepAmount || 5}
        />

        {/* Zone C: Balkan Demografi Göstergesi, Toplam Nüfus, Kaynak ve Bölge */}
        <div className="flex-1 min-w-0">
          <TimelineMetricsZone year={year} />
        </div>
      </div>

      {/* ORTA SATIR: Zone D (Dönem Kuşakları, Zaman Tarama Rayı, Olaylar ve Kilometre Taşları) */}
      <div className="w-full">
        <TimelineTrackZone year={year} onYearChange={onYearChange} />
      </div>

      {/* ALT SATIR: Zone E (Önemli Olaylar Menüsü, Kategori Lejantı, 5Y/10Y/25Y, Snapshot/History, Ayarlar) */}
      <div className="w-full">
        <TimelineControlsZone
          temporalMode={temporalMode}
          onTemporalModeChange={onTemporalModeChange}
          onYearChange={onYearChange}
          year={year}
        />
      </div>
    </nav>
  );

  // Mobil Görünüm (Kompakt Alt Bar + Detaylı Sheet)
  const mobileContent = (
    <div className="h-[64px] bg-[#FAF8F3] border-t border-[#C5A059]/40 flex items-center px-3 justify-between w-full select-none shadow-lg z-25 relative">
      {/* Sol: Adım Geri & Yıl Açıcı */}
      <div className="flex items-center gap-1">
        <button
          type="button"
          className="p-1.5 text-[#5C6963] hover:text-[#8B2C21]"
          onClick={() => {
            const bp = getAdjacentBreakpoint(year, -1);
            onYearChange(bp !== null ? bp : Math.max(1354, year - (ohmStepAmount || 5)));
          }}
          aria-label="Geriye git"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          type="button"
          onClick={() => setSheetOpen(true)}
          className="text-center px-1.5 py-0.5 rounded-lg hover:bg-black/5 transition-colors cursor-pointer"
          title="Tarihsel detayları ve olayları aç"
        >
          <strong className="text-xl font-serif text-[#8B2C21] block leading-none lining-nums">
            {year}
          </strong>
          <span className="text-[9px] text-[#005A3E] font-bold block leading-tight">
            %{demo.pct.toFixed(0)} Türk/Müs.
          </span>
        </button>

        <button
          type="button"
          className="p-1.5 text-[#5C6963] hover:text-[#8B2C21]"
          onClick={() => {
            const bp = getAdjacentBreakpoint(year, 1);
            onYearChange(bp !== null ? bp : Math.min(2026, year + (ohmStepAmount || 5)));
          }}
          aria-label="İleriye git"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Orta: Mobil Mini Ray */}
      <div className="flex-1 mx-2 flex flex-col justify-center">
        <div className="w-full h-1.5 flex rounded overflow-hidden mb-1 border border-[#C5A059]/30">
          {MACRO_ERAS.map((era) => (
            <div
              key={era.id}
              style={{
                width: `${((era.to - era.from) / (2026 - 1354)) * 100}%`,
                backgroundColor: era.color,
                opacity: year >= era.from && year < era.to ? 1 : 0.4
              }}
            />
          ))}
        </div>
        <div className="w-full h-2 bg-[#E2DDCF] rounded-full overflow-hidden relative shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#8B2C21] to-[#A8382B]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Sağ: Oynatıcı Buton */}
      <button
        type="button"
        className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9E2B20] to-[#751D14] text-white flex items-center justify-center flex-shrink-0 shadow-md ring-2 ring-[#C5A059]/40 cursor-pointer active:scale-95"
        onClick={onPlayingToggle}
        aria-label={playing ? "Durdur" : "Oynat"}
      >
        {playing ? <Pause size={15} fill="currentColor" /> : <Play size={15} fill="currentColor" className="ml-0.5" />}
      </button>
    </div>
  );

  return (
    <>
      {isDesktop ? desktopContent : mobileContent}

      {/* Mobil Detay Çekmecesi (Sheet) */}
      {!isDesktop && (
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetContent side="bottom" className="p-5 bg-[#FAF8F3] rounded-t-[24px] max-h-[85vh] overflow-y-auto border-t border-[#C5A059]/40">
            <div className="flex flex-col gap-4 py-1">
              <div className="text-center border-b border-[#C5A059]/25 pb-3">
                <strong className="text-4xl font-serif text-[#8B2C21] lining-nums">{year}</strong>
                <p className="text-xs font-semibold text-[#8B6E32] mt-1 tracking-wider uppercase font-serif">
                  {currentEra.name}
                </p>
              </div>

              {/* Mobil Nüfus Kartı */}
              <div className="bg-white border border-[#C5A059]/35 p-3.5 rounded-xl shadow-xs space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#005A3E] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#005A3E]" />
                    Balkanlar Türk & Müslüman:
                  </span>
                  <span className="font-bold text-sm text-[#005A3E] font-mono">
                    %{demo.pct.toFixed(1)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#5C6963] font-mono">
                  <span>Müslüman: <b className="text-[#8B2C21]">{demo.muslim.toLocaleString('tr')}</b></span>
                  <span>Toplam: <b>{demo.total.toLocaleString('tr')}</b></span>
                </div>
                <div className="w-full h-2.5 bg-[#FAF6ED] rounded-full overflow-hidden flex border border-[#C5A059]/30">
                  <div className="h-full bg-[#005A3E]" style={{ width: `${demo.pct}%` }} />
                  <div className="h-full bg-[#8B2C21]" style={{ width: `${100 - demo.pct}%` }} />
                </div>
                <p className="text-[10px] text-[#74766F] italic pt-1 border-t border-stone-100">
                  {demo.source} · {demo.note}
                </p>
              </div>

              {/* Tarihsel Dönem Kuşakları */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-[#74766F] uppercase tracking-wider">
                  Tarihsel Dönemler:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {MACRO_ERAS.map((era) => (
                    <button
                      key={era.id}
                      type="button"
                      onClick={() => {
                        onYearChange(era.from);
                        setSheetOpen(false);
                      }}
                      className={`p-2 rounded-xl text-left text-xs border transition-all ${
                        year >= era.from && year < era.to
                          ? 'border-[#8B2C21] bg-[#FAF6EC] font-bold ring-1 ring-[#8B2C21]/30'
                          : 'border-[#C5A059]/30 bg-white hover:bg-[#FAF6EC]'
                      }`}
                    >
                      <span className="block font-serif font-semibold truncate" style={{ color: era.textColor }}>
                        {era.shortName}
                      </span>
                      <span className="text-[10px] text-[#74766F] font-mono">{era.from}–{era.to}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Kilometre Taşları */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-[#74766F] uppercase tracking-wider">
                  Kırılma Noktaları:
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  {TIMELINE_MILESTONES.map((m) => (
                    <button
                      key={m.year}
                      type="button"
                      className={`py-1.5 text-xs rounded-lg border font-mono transition-colors ${
                        m.year === year
                          ? 'border-[#8B2C21] bg-[#8B2C21] text-white font-bold'
                          : 'border-[#C5A059]/30 bg-white text-[#1C2623] hover:bg-[#FAF6EC]'
                      }`}
                      onClick={() => {
                        onYearChange(m.year);
                        setSheetOpen(false);
                      }}
                    >
                      {m.short}
                    </button>
                  ))}
                </div>
              </div>

              {/* Görünüm Modu */}
              <div className="flex items-center justify-center bg-white border border-[#C5A059]/35 rounded-full p-1 text-sm shadow-xs mx-auto w-full max-w-xs mt-2">
                <button
                  type="button"
                  className={`flex-1 py-1.5 rounded-full transition-colors font-medium text-xs ${
                    temporalMode === 'snapshot'
                      ? 'bg-[#FAF6EC] text-[#8B2C21] font-bold border border-[#8B2C21]/30 shadow-2xs'
                      : 'text-[#74766F]'
                  }`}
                  onClick={() => onTemporalModeChange('snapshot')}
                >
                  Snapshot
                </button>
                <button
                  type="button"
                  className={`flex-1 py-1.5 rounded-full transition-colors font-medium text-xs ${
                    temporalMode === 'history'
                      ? 'bg-[#FAF6EC] text-[#8B2C21] font-bold border border-[#8B2C21]/30 shadow-2xs'
                      : 'text-[#74766F]'
                  }`}
                  onClick={() => onTemporalModeChange('history')}
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

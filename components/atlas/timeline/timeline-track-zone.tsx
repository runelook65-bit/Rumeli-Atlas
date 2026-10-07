'use client';

import { useRef, useState } from 'react';
import { 
  MACRO_ERAS, 
  TIMELINE_MILESTONES, 
  CURATED_TIMELINE_EVENTS,
  EVENT_CATEGORIES,
  type TimelineHistoricalEvent 
} from './timeline-types';
import { yearToTrackPercent, trackPercentToYear } from '@/lib/chrono-timeline';
import { useStore } from '@/lib/store';

interface TimelineTrackZoneProps {
  year: number;
  onYearChange: (y: number) => void;
}

export function TimelineTrackZone({ year, onYearChange }: TimelineTrackZoneProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [hoverPercent, setHoverPercent] = useState<number | null>(null);
  const [hoveredEvent, setHoveredEvent] = useState<TimelineHistoricalEvent | null>(null);

  const mapHandle = useStore((s) => s.mapHandle);
  const setPlaying = useStore((s) => s.setPlaying);

  // 16px inset on left and right to prevent edge clipping at 1354 and 2026
  const PAD = 16;

  function yearFromClientX(clientX: number): number {
    if (!trackRef.current) return year;
    const rect = trackRef.current.getBoundingClientRect();
    const innerW = Math.max(1, rect.width - PAD * 2);
    const clickX = Math.max(0, Math.min(innerW, clientX - rect.left - PAD));
    const pct = clickX / innerW;
    return trackPercentToYear(pct);
  }

  const progressFactor = yearToTrackPercent(year); // 0.0 to 1.0

  // CSS positioning with inset
  const getPositionLeft = (pctFactor: number) => {
    return `calc(${PAD}px + (100% - ${PAD * 2}px) * ${pctFactor})`;
  };

  const eraStyles: Record<string, { bg: string; text: string; border: string }> = {
    fetihler: { bg: '#F5E6E3', text: '#8B2C21', border: '#DDB8B0' },
    klasik: { bg: '#F3EBDD', text: '#7A5B22', border: '#D9CAAE' },
    islahat: { bg: '#F7F1E1', text: '#8B6E32', border: '#E0D4B8' },
    cumhuriyet: { bg: '#E3ECE6', text: '#005A3E', border: '#B2D1C1' }
  };

  return (
    <div className="w-full flex flex-col justify-center select-none pt-1 pb-1">
      {/* 1. Tarihsel Dönem Kuşakları (Proportional Macro Era Ribbon) */}
      <div className="w-full px-4">
        <div 
          className="relative w-full h-[26px] flex rounded-lg overflow-hidden border border-[#D5CBB9] bg-[#FAF6ED] shadow-2xs"
          role="region"
          aria-label="Tarihsel Dönem Kuşakları"
        >
          {MACRO_ERAS.map((era) => {
            const startPct = yearToTrackPercent(era.from) * 100;
            const endPct = yearToTrackPercent(era.to) * 100;
            const widthPct = endPct - startPct;
            const isEraActive = year >= era.from && year < era.to;
            const style = eraStyles[era.id] || { bg: era.color, text: era.textColor, border: era.borderColor };

            return (
              <button
                key={era.id}
                type="button"
                onClick={() => {
                  setPlaying(false);
                  onYearChange(era.from);
                }}
                className={`h-full relative transition-all group overflow-hidden cursor-pointer border-r last:border-r-0 ${
                  isEraActive
                    ? 'brightness-95 ring-2 ring-inset ring-[#8B2C21]/60 font-bold z-10'
                    : 'hover:brightness-95 opacity-95'
                }`}
                style={{
                  width: `${widthPct}%`,
                  backgroundColor: style.bg,
                  borderColor: style.border
                }}
                title={`${era.name} (${era.from}–${era.to})\n${era.description}`}
                aria-label={`${era.shortName} Dönemi (${era.from}–${era.to})`}
              >
                <span 
                  className="absolute inset-0 flex items-center justify-center text-[10px] sm:text-[11px] font-serif font-bold uppercase tracking-wider truncate px-1"
                  style={{ color: style.text }}
                >
                  {era.shortName}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Sürekli Zaman Tarama Rayı (Continuous Pointer Scrub Track) */}
      <div
        ref={trackRef}
        className="relative h-[32px] flex items-center cursor-crosshair touch-none select-none group mt-1"
        onPointerDown={(e) => {
          dragging.current = true;
          (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
          setPlaying(false);
          onYearChange(yearFromClientX(e.clientX));
        }}
        onPointerMove={(e) => {
          if (!trackRef.current) return;
          const rect = trackRef.current.getBoundingClientRect();
          const innerW = Math.max(1, rect.width - PAD * 2);
          const clickX = Math.max(0, Math.min(innerW, e.clientX - rect.left - PAD));
          const factor = clickX / innerW;
          setHoverPercent(factor);
          if (dragging.current) {
            onYearChange(trackPercentToYear(factor));
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
        <div 
          className="absolute h-2 bg-[#E2DDCF] rounded-full overflow-hidden shadow-inner"
          style={{ left: `${PAD}px`, right: `${PAD}px` }}
        >
          <div
            className="h-full bg-[#9E2B20] transition-all duration-75"
            style={{ width: `${progressFactor * 100}%` }}
          />
        </div>

        {/* Kilometre Taşı Düğümleri (Milestone Nodes on Rail) */}
        {TIMELINE_MILESTONES.filter(m => m.tier === 1).map((m) => {
          const mFactor = yearToTrackPercent(m.year);
          const isPassed = m.year <= year;
          const isCurrent = m.year === year;

          return (
            <div
              key={m.year}
              className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full transition-all pointer-events-none z-10 ${
                isCurrent
                  ? 'w-3 h-3 bg-[#9E2B20] ring-2 ring-white'
                  : isPassed
                  ? 'w-2.5 h-2.5 bg-[#9E2B20] ring-1.5 ring-white'
                  : 'w-2.5 h-2.5 bg-white border border-[#9E2B20]/60'
              }`}
              style={{ left: getPositionLeft(mFactor) }}
            />
          );
        })}

        {/* Tarihsel Olay Noktaları (Historical Event Marker Dots) */}
        {CURATED_TIMELINE_EVENTS.map((ev) => {
          const evFactor = yearToTrackPercent(ev.year);
          const meta = EVENT_CATEGORIES[ev.category];
          const isNearActive = Math.abs(ev.year - year) <= 1;

          return (
            <button
              key={ev.id}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setPlaying(false);
                onYearChange(ev.year);
                mapHandle?.flyTo({ center: ev.coordinates, zoom: 8, duration: 800 });
              }}
              onMouseEnter={() => setHoveredEvent(ev)}
              onMouseLeave={() => setHoveredEvent(null)}
              className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full transition-transform cursor-pointer z-15 ${
                isNearActive
                  ? 'w-2.5 h-2.5 ring-2 ring-white scale-125'
                  : 'w-1.5 h-1.5 hover:scale-175'
              }`}
              style={{
                left: getPositionLeft(evFactor),
                backgroundColor: meta.color,
                boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
              }}
              title={`${ev.title} (${ev.year}) - ${meta.label}\n${ev.blurb}`}
              aria-label={`${ev.year}: ${ev.title}`}
            />
          );
        })}

        {/* Hover Ghost: Gezinirken takip eden çizgi ve yıl balonu */}
        {hoverPercent !== null && !dragging.current && (
          <div
            className="pointer-events-none absolute inset-y-0 w-px bg-[#8B2C21]/60 z-30"
            style={{ left: getPositionLeft(hoverPercent) }}
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#1C2623] text-white text-[10px] font-mono px-1.5 py-0.5 shadow-md border border-[#C5A059]/40">
              {trackPercentToYear(hoverPercent)}
            </div>
          </div>
        )}

        {/* Hover Edilen Olay Önizleme Kartı (Event Preview Tooltip) */}
        {hoveredEvent && (
          <div
            className="pointer-events-none absolute -top-18 left-1/2 -translate-x-1/2 z-40 bg-[#FFFDF9] border border-[#C5A059]/50 rounded-lg p-2.5 shadow-xl max-w-xs text-left animate-in fade-in duration-100"
            style={{
              left: getPositionLeft(yearToTrackPercent(hoveredEvent.year))
            }}
          >
            <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider mb-0.5">
              <span 
                className="w-1.5 h-1.5 rounded-full" 
                style={{ backgroundColor: EVENT_CATEGORIES[hoveredEvent.category].color }} 
              />
              <span style={{ color: EVENT_CATEGORIES[hoveredEvent.category].color }}>
                {EVENT_CATEGORIES[hoveredEvent.category].label}
              </span>
              <span className="text-[#8B2C21] font-mono font-bold">· {hoveredEvent.year}</span>
            </div>
            <p className="text-xs font-semibold text-[#1C2623] font-serif leading-snug">
              {hoveredEvent.title}
            </p>
            <p className="text-[10px] text-[#74766F] line-clamp-2 mt-0.5">
              {hoveredEvent.blurb}
            </p>
          </div>
        )}

        {/* Aktif Yıl Scrubber Rozeti (Active Year Badge on Track) */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-25 pointer-events-none transition-transform duration-75 flex flex-col items-center"
          style={{ left: getPositionLeft(progressFactor) }}
        >
          {/* Active Dot Marker */}
          <div className="w-4 h-4 rounded-full bg-[#9E2B20] ring-2 ring-white shadow-md flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>
          {/* Active Red Pill with Year text */}
          <div 
            style={{
              backgroundColor: '#9E2B20',
              color: '#ffffff',
              boxShadow: '0 2px 6px rgba(158, 43, 32, 0.4)'
            }}
            className="mt-1 px-2 py-0.5 rounded-full text-[10px] font-serif font-bold tracking-tight border border-white/60 lining-nums whitespace-nowrap"
          >
            {year}
          </div>
        </div>
      </div>

      {/* 3. Alt Satır: Kilometre Taşı Yılları (Baseline Milestone Labels) */}
      <div className="relative w-full h-[18px] text-[10px] font-serif select-none mt-1">
        {TIMELINE_MILESTONES.filter(m => m.tier === 1).map((m) => {
          const mFactor = yearToTrackPercent(m.year);
          // If the scrubber is right on or near this milestone, hide the static label to prevent duplicate stacking!
          const isNearActive = Math.abs(m.year - year) <= 8;

          return (
            <button
              key={m.year}
              type="button"
              onClick={() => {
                setPlaying(false);
                onYearChange(m.year);
              }}
              className={`absolute -translate-x-1/2 transition-opacity duration-150 cursor-pointer flex flex-col items-center leading-none ${
                isNearActive
                  ? 'opacity-0 pointer-events-none'
                  : 'text-[#5C6963] hover:text-[#8B2C21] font-medium'
              }`}
              style={{ left: getPositionLeft(mFactor), top: '0px' }}
              title={`${m.label} (${m.year})`}
              aria-label={`Yıl ${m.short}`}
            >
              <span className="font-mono text-[10px] sm:text-[11px]">{m.short}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

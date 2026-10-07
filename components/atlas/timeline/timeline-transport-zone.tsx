'use client';

import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { getAdjacentBreakpoint } from '@/lib/historia-events';

interface TimelineTransportZoneProps {
  year: number;
  onYearChange: (y: number) => void;
  playing: boolean;
  onPlayingToggle: () => void;
  stepAmount?: number;
}

export function TimelineTransportZone({
  year,
  onYearChange,
  playing,
  onPlayingToggle,
  stepAmount = 5
}: TimelineTransportZoneProps) {
  const handlePrev = () => {
    const bp = getAdjacentBreakpoint(year, -1);
    if (bp !== null && Math.abs(bp - year) <= Math.max(10, stepAmount * 2)) {
      onYearChange(bp);
    } else {
      onYearChange(Math.max(1354, year - stepAmount));
    }
  };

  const handleNext = () => {
    const bp = getAdjacentBreakpoint(year, 1);
    if (bp !== null && Math.abs(bp - year) <= Math.max(10, stepAmount * 2)) {
      onYearChange(bp);
    } else {
      onYearChange(Math.min(2026, year + stepAmount));
    }
  };

  return (
    <div className="flex items-center gap-1.5 flex-shrink-0">
      {/* Previous Breakpoint / Step */}
      <button
        type="button"
        style={{ backgroundColor: '#FFFDF9' }}
        className="w-8 h-8 rounded-full border border-[#C5A059]/40 text-[#4A5750] hover:text-[#8B2C21] hover:border-[#8B2C21] hover:bg-[#FAF6EC] flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
        onClick={handlePrev}
        disabled={year <= 1354}
        title="Önceki Kırılma Noktası veya Yıl (← / Shift+←)"
        aria-label="Önceki Tarihsel Kırılma Noktası"
      >
        <SkipBack size={14} className="fill-current/15" />
      </button>

      {/* Solid Rich Terracotta Play / Pause Button */}
      <button
        type="button"
        style={{
          backgroundColor: '#9E2B20',
          color: '#ffffff',
          boxShadow: '0 4px 12px rgba(158, 43, 32, 0.35)'
        }}
        className="w-11 h-11 rounded-full flex items-center justify-center border border-[#FFF8EB]/50 ring-2 ring-[#C5A059]/40 hover:brightness-110 hover:ring-[#C5A059]/70 transition-all duration-150 cursor-pointer active:scale-95 shrink-0"
        onClick={onPlayingToggle}
        aria-label={playing ? "Zaman akışını duraklat (Boşluk tuşu)" : "Zaman akışını otomatik oynat (Boşluk tuşu)"}
        title={playing ? "Zaman akışını duraklat (Boşluk)" : "Zaman akışını oynat (Boşluk)"}
      >
        {playing ? (
          <Pause size={17} fill="#ffffff" color="#ffffff" />
        ) : (
          <Play size={17} fill="#ffffff" color="#ffffff" className="ml-0.5" />
        )}
      </button>

      {/* Next Breakpoint / Step */}
      <button
        type="button"
        style={{ backgroundColor: '#FFFDF9' }}
        className="w-8 h-8 rounded-full border border-[#C5A059]/40 text-[#4A5750] hover:text-[#8B2C21] hover:border-[#8B2C21] hover:bg-[#FAF6EC] flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
        onClick={handleNext}
        disabled={year >= 2026}
        title="Sonraki Kırılma Noktası veya Yıl (→ / Shift+→)"
        aria-label="Sonraki Tarihsel Kırılma Noktası"
      >
        <SkipForward size={14} className="fill-current/15" />
      </button>
    </div>
  );
}

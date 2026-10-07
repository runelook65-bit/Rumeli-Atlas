'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  ListFilter, 
  Clock, 
  Image as ImageIcon, 
  BarChart2, 
  Settings, 
  ChevronDown,
  X,
  MapPin,
  Calendar
} from 'lucide-react';
import { EVENT_CATEGORIES, CURATED_TIMELINE_EVENTS, type EventCategoryKey } from './timeline-types';
import { useStore, type TemporalMode } from '@/lib/store';

interface TimelineControlsZoneProps {
  temporalMode: TemporalMode;
  onTemporalModeChange: (m: TemporalMode) => void;
  onYearChange: (y: number) => void;
  year: number;
}

export function TimelineControlsZone({
  temporalMode,
  onTemporalModeChange,
  onYearChange,
  year
}: TimelineControlsZoneProps) {
  const ohmStepAmount = useStore((s) => s.ohmStepAmount);
  const setOhmStepAmount = useStore((s) => s.setOhmStepAmount);
  const setMenuOpen = useStore((s) => s.setMenuOpen);
  const mapHandle = useStore((s) => s.mapHandle);

  const [eventsOpen, setEventsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<EventCategoryKey | 'all'>('all');
  const eventsDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (eventsDropdownRef.current && !eventsDropdownRef.current.contains(e.target as Node)) {
        setEventsOpen(false);
      }
    }
    if (eventsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [eventsOpen]);

  const filteredEvents = CURATED_TIMELINE_EVENTS.filter((ev) => 
    selectedCategory === 'all' ? true : ev.category === selectedCategory
  );

  return (
    <div className="flex items-center justify-between gap-3 flex-wrap lg:flex-nowrap w-full pt-1.5 border-t border-[#C5A059]/25 text-xs">
      {/* 1. Sol Taraf: Önemli Olaylar Menüsü & Kategori Lejantı */}
      <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
        {/* Önemli Olaylar Açılır Menüsü */}
        <div className="relative" ref={eventsDropdownRef}>
          <button
            type="button"
            onClick={() => setEventsOpen(!eventsOpen)}
            style={{ backgroundColor: '#FFFDF9' }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C5A059]/40 text-[#1C2623] hover:text-[#8B2C21] hover:border-[#8B2C21] font-medium text-xs shadow-2xs transition-all cursor-pointer"
            aria-expanded={eventsOpen}
            aria-haspopup="true"
          >
            <ListFilter size={13} className="text-[#8B2C21]" />
            <span className="font-serif font-semibold">Önemli Olaylar</span>
            <ChevronDown size={12} className={`text-[#74766F] transition-transform duration-150 ${eventsOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Olaylar Açılır Kartı (Yukarı Açılır) */}
          {eventsOpen && (
            <div className="absolute left-0 bottom-full mb-2 w-80 sm:w-96 bg-[#FFFDF9] border border-[#C5A059]/40 rounded-2xl shadow-2xl z-[2000] overflow-hidden animate-in fade-in duration-100 flex flex-col max-h-96">
              <div className="p-3 bg-[#FAF6EC] border-b border-[#C5A059]/25 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar size={15} className="text-[#8B2C21]" />
                  <span className="text-xs font-serif font-bold tracking-wider text-[#1C2623] uppercase">
                    Rumeli Tarihsel Olayları
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setEventsOpen(false)}
                  className="text-[#74766F] hover:text-[#1C2623] p-1 rounded-full hover:bg-black/5"
                  aria-label="Kapat"
                >
                  <X size={14} />
                </button>
              </div>

              {/* Kategori Filtre Hapları */}
              <div className="p-2 border-b border-[#C5A059]/20 bg-[#FFFDF9] flex items-center gap-1 overflow-x-auto text-[10px]">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  className={`px-2 py-0.5 rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-[#1C2623] text-white font-bold'
                      : 'text-[#5C6963] hover:bg-[#FAF6EC]'
                  }`}
                >
                  Tümü ({CURATED_TIMELINE_EVENTS.length})
                </button>
                {Object.values(EVENT_CATEGORIES).map((cat) => (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`px-2 py-0.5 rounded-full flex items-center gap-1 whitespace-nowrap transition-colors ${
                      selectedCategory === cat.key
                        ? 'font-bold text-white shadow-2xs'
                        : 'text-[#5C6963] hover:bg-[#FAF6EC]'
                    }`}
                    style={{
                      backgroundColor: selectedCategory === cat.key ? cat.color : undefined
                    }}
                  >
                    <span 
                      className="w-1.5 h-1.5 rounded-full" 
                      style={{ backgroundColor: selectedCategory === cat.key ? '#fff' : cat.color }} 
                    />
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>

              {/* Olay Listesi */}
              <div className="overflow-y-auto p-2 space-y-1.5 divide-y divide-[#C5A059]/15">
                {filteredEvents.map((ev) => {
                  const meta = EVENT_CATEGORIES[ev.category];
                  const isCurrent = Math.abs(ev.year - year) <= 1;

                  return (
                    <button
                      key={ev.id}
                      type="button"
                      onClick={() => {
                        onYearChange(ev.year);
                        mapHandle?.flyTo({ center: ev.coordinates, zoom: 8, duration: 800 });
                        setEventsOpen(false);
                      }}
                      className={`w-full text-left pt-1.5 first:pt-0 p-2 rounded-xl transition-all cursor-pointer flex flex-col gap-1 ${
                        isCurrent
                          ? 'bg-[#FAF6EC] border border-[#C5A059]/60 shadow-xs'
                          : 'hover:bg-[#FAF6EC]/60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: meta.color }} />
                          <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color: meta.color }}>
                            {meta.label}
                          </span>
                        </div>
                        <span className="font-serif font-bold text-xs text-[#8B2C21] font-mono">
                          {ev.year}
                        </span>
                      </div>
                      <span className="text-xs font-serif font-semibold text-[#1C2623] leading-snug">
                        {ev.title}
                      </span>
                      <p className="text-[11px] text-[#5C6963] line-clamp-2 leading-relaxed">
                        {ev.blurb}
                      </p>
                      <div className="flex items-center justify-between text-[9.5px] text-[#8B6E32] pt-0.5">
                        <span className="italic">{ev.source}</span>
                        <span className="flex items-center gap-0.5 text-[#005A3E] font-medium">
                          <MapPin size={9} /> Haritaya git →
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Renkli Kategori Noktaları Lejantı (Event Category Dot Legend) */}
        <div className="hidden md:flex items-center gap-2.5 text-[10px] text-[#5C6963]">
          {Object.values(EVENT_CATEGORIES).map((cat) => (
            <div key={cat.key} className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
              <span className="font-medium whitespace-nowrap">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Sağ Taraf: Zaman Atlama Adımları & Görünüm Modu & Ayarlar */}
      <div className="flex items-center gap-2 sm:gap-3 ml-auto">
        {/* Zaman Atlama Adımı (5Y, 10Y, 25Y) */}
        <div 
          style={{ backgroundColor: '#FFFDF9' }}
          className="flex items-center gap-1 border border-[#C5A059]/35 rounded-full p-0.5 text-[10px] shadow-2xs"
          title="Tarihsel adım aralığı"
        >
          <Clock size={12} className="text-[#8B6E32] ml-1.5 mr-0.5 shrink-0" />
          {[5, 10, 25].map((step) => {
            const isActive = ohmStepAmount === step;
            return (
              <button
                key={step}
                type="button"
                onClick={() => setOhmStepAmount(step)}
                style={isActive ? { backgroundColor: '#FAF6EC', borderColor: '#C5A059', color: '#8B2C21' } : undefined}
                className={`px-2 py-0.5 rounded-full transition-all cursor-pointer font-mono border ${
                  isActive
                    ? 'font-bold shadow-2xs'
                    : 'border-transparent text-[#5C6963] hover:text-[#1C2623]'
                }`}
              >
                {step}Y
              </button>
            );
          })}
        </div>

        {/* Snapshot / History Segmentli Seçici */}
        <div 
          style={{ backgroundColor: '#FFFDF9' }}
          className="flex items-center border border-[#C5A059]/35 rounded-full p-0.5 text-xs shadow-2xs"
          role="group"
          aria-label="Tarihsel harita görünüm modu"
        >
          <button
            type="button"
            style={temporalMode === 'snapshot' ? { backgroundColor: '#FAF6EC', borderColor: '#8B2C21', color: '#8B2C21' } : undefined}
            className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all cursor-pointer text-[11px] font-semibold border ${
              temporalMode === 'snapshot'
                ? 'shadow-2xs'
                : 'border-transparent text-[#5C6963] hover:text-[#1C2623]'
            }`}
            onClick={() => onTemporalModeChange('snapshot')}
            title="Snapshot: Yalnızca seçili yılın tarihsel durumunu gösterir"
          >
            <ImageIcon size={12} className={temporalMode === 'snapshot' ? 'text-[#8B2C21]' : 'text-[#74766F]'} />
            <span>Snapshot</span>
          </button>
          <button
            type="button"
            style={temporalMode === 'history' ? { backgroundColor: '#FAF6EC', borderColor: '#8B2C21', color: '#8B2C21' } : undefined}
            className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all cursor-pointer text-[11px] font-semibold border ${
              temporalMode === 'history'
                ? 'shadow-2xs'
                : 'border-transparent text-[#5C6963] hover:text-[#1C2623]'
            }`}
            onClick={() => onTemporalModeChange('history')}
            title="History: Bütün tarihsel dönemlerin kümülatif katmanlarını gösterir"
          >
            <BarChart2 size={12} className={temporalMode === 'history' ? 'text-[#8B2C21]' : 'text-[#74766F]'} />
            <span>History</span>
          </button>
        </div>

        {/* Hızlı Seçenekler / Ayarlar Butonu */}
        <button
          type="button"
          style={{ backgroundColor: '#FFFDF9' }}
          onClick={() => setMenuOpen(true)}
          className="w-7 h-7 rounded-full border border-[#C5A059]/35 text-[#5C6963] hover:text-[#8B2C21] hover:border-[#8B2C21] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
          title="Katmanlar ve harita ayarları"
          aria-label="Harita ayarları menüsünü aç"
        >
          <Settings size={13} />
        </button>
      </div>
    </div>
  );
}

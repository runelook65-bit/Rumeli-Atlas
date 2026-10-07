'use client';

import { useState, useRef, useEffect } from 'react';
import { Users, Landmark, MapPin, Layers, ChevronDown, Info } from 'lucide-react';
import { 
  getBalkanDemographicsForYear, 
  DEMOGRAPHIC_EVIDENCE_LABELS, 
  DEMOGRAPHIC_SCOPE_NOTE,
  regionPresets,
  type RegionPreset
} from '@/lib/atlas-data';
import { useStore } from '@/lib/store';

interface TimelineMetricsZoneProps {
  year: number;
}

export function TimelineMetricsZone({ year }: TimelineMetricsZoneProps) {
  const selectedRegion = useStore((s) => s.selectedRegion);
  const setSelectedRegion = useStore((s) => s.setSelectedRegion);
  const mapHandle = useStore((s) => s.mapHandle);
  const setSelectedPlace = useStore((s) => s.setSelectedPlace);
  const vilayets = useStore((s) => s.vilayets);
  const setVilayets = useStore((s) => s.setVilayets);

  const [regionOpen, setRegionOpen] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);

  const demo = getBalkanDemographicsForYear(year);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (regionRef.current && !regionRef.current.contains(e.target as Node)) {
        setRegionOpen(false);
      }
    }
    if (regionOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [regionOpen]);

  const handleSelectPreset = (preset: RegionPreset) => {
    setSelectedRegion(preset);
    mapHandle?.fitBounds(preset.bounds, { padding: 30, duration: 800 });
    setSelectedPlace(null);
    setRegionOpen(false);
  };

  // Clean source title for display
  const displaySource = demo.interpolated 
    ? 'Kaynak sentezi' 
    : demo.source.split('(')[0].trim();

  return (
    <div className="flex items-center justify-between gap-3 w-full">
      {/* 1. Balkanlar Türk & Müslüman Nüfus Mührü */}
      <div 
        style={{ backgroundColor: '#FFFDF9' }}
        className="flex items-center gap-2 border border-[#C5A059]/40 px-3 py-1 rounded-full shadow-2xs group cursor-help transition-all hover:border-[#8B2C21] shrink-0"
        title={`${demo.note}\nKaynak: ${demo.source}\n${DEMOGRAPHIC_SCOPE_NOTE}`}
      >
        <span className="w-2 h-2 rounded-full bg-[#005A3E] ring-2 ring-[#005A3E]/20 shrink-0" />
        <span className="text-xs font-semibold text-[#1C2623] tracking-tight whitespace-nowrap">
          Balkanlar Türk & Müslüman:
        </span>
        <span className="font-serif font-bold text-sm sm:text-base text-[#8B2C21] lining-nums tracking-wide">
          {demo.muslim.toLocaleString('tr')}
        </span>
        <span 
          className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white shadow-2xs tracking-tight"
          style={{ backgroundColor: '#005A3E' }}
        >
          %{demo.pct.toFixed(1)}
        </span>
      </div>

      {/* 2. İkincil Metrikler: Toplam Nüfus & Kaynak */}
      <div className="hidden lg:flex items-center gap-4 xl:gap-6">
        {/* Toplam Nüfus */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-6 h-6 rounded-full bg-[#FAF6EC] border border-[#C5A059]/30 flex items-center justify-center text-[#7A5B22] shrink-0">
            <Users size={12} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[9px] font-medium text-[#74766F] uppercase tracking-wider">
              Toplam Nüfus
            </span>
            <span className="text-xs font-semibold text-[#1C2623] font-serif lining-nums">
              {demo.total.toLocaleString('tr')}
            </span>
          </div>
        </div>

        {/* Kaynak */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-6 h-6 rounded-full bg-[#FAF6EC] border border-[#C5A059]/30 flex items-center justify-center text-[#7A5B22] shrink-0">
            <Landmark size={12} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[9px] font-medium text-[#74766F] uppercase tracking-wider">
              Kaynak
            </span>
            <span 
              className="inline-flex items-center gap-1 text-[11px] font-medium text-[#8B6E32] hover:text-[#8B2C21] cursor-help max-w-[150px] truncate"
              title={`Metodoloji ve Kaynak Dayanağı:\n${demo.source}\n\nKanıt Türü: ${DEMOGRAPHIC_EVIDENCE_LABELS[demo.kind]}\n${demo.interpolated ? '(Yıllar arası doğrusal ara değer)' : '(Çıpa yıl verisi)'}\n\nKapsam Notu: ${demo.note}`}
            >
              <span className="truncate">{displaySource}</span>
              <Info size={11} className="text-[#C5A059] shrink-0" />
            </span>
          </div>
        </div>
      </div>

      {/* 3. Sağ Taraf: Bölge Seçimi & Hızlı Katman Butonu */}
      <div className="flex items-center gap-1.5 shrink-0 ml-auto">
        {/* Bölge Seçici Menüsü */}
        <div className="relative" ref={regionRef}>
          <button
            type="button"
            onClick={() => setRegionOpen(!regionOpen)}
            style={{ backgroundColor: selectedRegion.id !== 'all' ? '#F0FDF7' : '#FFFDF9' }}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition-all cursor-pointer shadow-2xs ${
              selectedRegion.id !== 'all'
                ? 'border-[#005A3E] text-[#005A3E] ring-1 ring-[#005A3E]/20'
                : 'border-[#C5A059]/40 text-[#242923] hover:border-[#8B2C21]'
            }`}
            title="Bölge odağını değiştirin"
            aria-expanded={regionOpen}
            aria-haspopup="true"
          >
            <MapPin size={12} className={selectedRegion.id !== 'all' ? 'text-[#005A3E]' : 'text-[#8B2C21]'} />
            <span className="text-[11px] text-[#74766F]">Bölge:</span>
            <span className="font-semibold text-xs max-w-[120px] sm:max-w-[140px] truncate font-serif">
              {selectedRegion.name}
            </span>
            <ChevronDown size={12} className={`transition-transform duration-150 ${regionOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Bölge Açılır Menüsü (Yukarıya doğru açılır) */}
          {regionOpen && (
            <div className="absolute right-0 bottom-full mb-2 w-64 bg-[#FFFDF9] border border-[#C5A059]/40 rounded-xl shadow-xl z-[2000] overflow-hidden animate-in fade-in duration-100">
              <div className="p-2.5 bg-[#FAF6EC] border-b border-[#C5A059]/25 text-[11px] font-bold text-[#1C2623] uppercase tracking-wider flex items-center justify-between">
                <span>Coğrafi Bölgeler</span>
                <span className="text-[10px] font-mono text-[#74766F]">{regionPresets.length} Bölge</span>
              </div>
              <div className="max-h-56 overflow-y-auto p-1.5 space-y-0.5">
                {regionPresets.map((preset) => {
                  const isSelected = preset.id === selectedRegion.id;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleSelectPreset(preset)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                        isSelected
                          ? 'bg-[#005A3E] text-white font-semibold'
                          : 'hover:bg-[#FAF6EC] text-[#242923]'
                      }`}
                    >
                      <span className="truncate">{preset.name}</span>
                      {isSelected && <span className="text-[10px]">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Hızlı Osmanlı Vilayetleri Katmanı Aç/Kapa Butonu */}
        <button
          type="button"
          onClick={() => setVilayets(!vilayets)}
          style={{ backgroundColor: vilayets ? '#005A3E' : '#FFFDF9' }}
          className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all cursor-pointer shadow-2xs ${
            vilayets 
              ? 'text-white border-[#005A3E] shadow-sm ring-2 ring-[#005A3E]/20' 
              : 'border-[#C5A059]/40 text-[#5C6963] hover:text-[#8B2C21] hover:border-[#8B2C21]'
          }`}
          title={vilayets ? "Osmanlı Vilayet Sınırlarını Gizle (1878-1912)" : "Osmanlı Vilayet Sınırlarını Göster (1878-1912)"}
          aria-label="Osmanlı Vilayet Sınırları Katmanı"
        >
          <Layers size={13} />
        </button>
      </div>
    </div>
  );
}

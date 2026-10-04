'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { ChevronDown, MapPin, Search, X, Check, Globe, Landmark } from 'lucide-react';
import { regionPresets, type RegionPreset, regionalModules } from '@/lib/atlas-data';
import { useStore } from '@/lib/store';

interface RegionSelectorProps {
  onSelectRegion?: (preset: RegionPreset) => void;
  onSelectBounds?: (bounds: [[number, number], [number, number]]) => void;
  selectedRegionId?: string;
  currentRegionName?: string;
}

export function RegionSelector({ 
  onSelectRegion: propOnSelectRegion,
  onSelectBounds, 
  selectedRegionId: propSelectedRegionId,
  currentRegionName: propCurrentRegionName 
}: RegionSelectorProps = {}) {
  const storeRegion = useStore(s => s.selectedRegion);
  const storeSetRegion = useStore(s => s.setSelectedRegion);
  const mapHandle = useStore(s => s.mapHandle);
  const setSelectedPlace = useStore(s => s.setSelectedPlace);

  const selectedRegionId = propSelectedRegionId !== undefined ? propSelectedRegionId : storeRegion.id;
  const currentRegionName = propCurrentRegionName !== undefined ? propCurrentRegionName : storeRegion.name;

  const onSelectRegion = propOnSelectRegion || ((preset: RegionPreset) => {
    storeSetRegion(preset);
    mapHandle?.fitBounds(preset.bounds, { padding: 30, duration: 800 });
    setSelectedPlace(null);
  });

  const [isOpen, setIsOpen] = useState(false);
  const [selectedName, setSelectedName] = useState(currentRegionName);
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'historical' | 'modern'>('all');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedName(currentRegionName);
  }, [currentRegionName]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (preset: RegionPreset) => {
    setSelectedName(preset.name);
    if (onSelectRegion) {
      onSelectRegion(preset);
    } else if (onSelectBounds) {
      onSelectBounds(preset.bounds);
    }
    setIsOpen(false);
    setSearch('');
  };

  const filteredPresets = useMemo(() => {
    let list = regionPresets;
    if (activeTab === 'historical') {
      list = list.filter(r => r.category === 'historical' || r.category === 'all');
    } else if (activeTab === 'modern') {
      list = list.filter(r => r.category === 'modern' || r.category === 'all');
    }

    if (!search.trim()) return list;

    const q = search.toLowerCase();
    return list.filter(r => 
      r.name.toLowerCase().includes(q) || 
      (r.description && r.description.toLowerCase().includes(q))
    );
  }, [search, activeTab]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className={`region-button flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-150 cursor-pointer ${
          selectedRegionId !== 'all' 
            ? 'border-[#005A3E] text-[#005A3E] ring-2 ring-[#005A3E]/15 font-semibold bg-[#F0FDF7]' 
            : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Bölge ve coğrafya seçimi"
      >
        <span className={`w-2 h-2 rounded-full ${selectedRegionId !== 'all' ? 'bg-[#005A3E] ring-2 ring-[#005A3E]/20' : 'bg-[#8B2C21] ring-2 ring-[#8B2C21]/20'}`} />
        <span className="region-desktop max-w-[190px] truncate font-serif font-semibold">{selectedName}</span>
        <span className="region-mobile font-serif">{selectedName.split(' ')[0]}</span>
        {selectedRegionId !== 'all' && (
          <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#005A3E]/10 text-[#005A3E] font-bold">
            Filtreli
          </span>
        )}
        <ChevronDown size={14} className={`transition-transform duration-200 ${selectedRegionId !== 'all' ? 'text-[#005A3E]' : 'text-[#829088]'} ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className="absolute left-0 mt-2 w-[340px] sm:w-[380px] max-h-[480px] flex flex-col bg-[#FFFDF9] border border-[#C5A059]/40 rounded-2xl shadow-2xl z-[2000] overflow-hidden animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl"
          role="menu"
        >
          {/* Header */}
          <div className="p-3.5 bg-[#FAF6EC] border-b border-[#C5A059]/25 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-[#8B2C21]" />
              <span className="text-xs font-serif font-bold tracking-wider text-[#1C2623] uppercase">
                Coğrafya & Araştırma Bölgeleri
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#829088] hover:text-[#1C2623] rounded-full hover:bg-black/5"
              aria-label="Kapat"
            >
              <X size={15} />
            </button>
          </div>

          {/* Search Input */}
          <div className="p-2.5 border-b border-[#C5A059]/20 bg-white/70">
            <div className="relative flex items-center">
              <Search size={14} className="absolute left-2.5 text-[#C5A059]" />
              <input
                type="text"
                placeholder="Bölge veya şehir ara (örn. Selanik, Rodoplar, Kosova)..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-transparent border border-[#C5A059]/30 rounded-lg focus:outline-none focus:border-[#8B2C21] focus:ring-1 focus:ring-[#8B2C21]/20 text-[#1C2623] placeholder:text-[#829088]"
                autoFocus
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-2 text-[#829088] hover:text-[#1C2623]"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex border-b border-[#C5A059]/20 bg-[#FAF6EC]/70 text-xs font-medium">
            <button
              className={`flex-1 py-1.5 px-2 text-center transition-colors ${activeTab === 'all' ? 'text-[#8B2C21] font-bold border-b-2 border-[#8B2C21] bg-white/50' : 'text-[#5C6963] hover:text-[#1C2623]'}`}
              onClick={() => setActiveTab('all')}
            >
              Tümü ({regionPresets.length})
            </button>
            <button
              className={`flex-1 py-1.5 px-2 text-center transition-colors ${activeTab === 'historical' ? 'text-[#8B2C21] font-bold border-b-2 border-[#8B2C21] bg-white/50' : 'text-[#5C6963] hover:text-[#1C2623]'}`}
              onClick={() => setActiveTab('historical')}
            >
              Tarihsel (13 Modül)
            </button>
            <button
              className={`flex-1 py-1.5 px-2 text-center transition-colors ${activeTab === 'modern' ? 'text-[#8B2C21] font-bold border-b-2 border-[#8B2C21] bg-white/50' : 'text-[#5C6963] hover:text-[#1C2623]'}`}
              onClick={() => setActiveTab('modern')}
            >
              Modern Ülkeler
            </button>
          </div>

          {/* List of Regions */}
          <div className="flex-1 overflow-y-auto divide-y divide-[#C5A059]/10 p-1.5 max-h-[320px]">
            {filteredPresets.map(preset => {
              const isSelected = selectedRegionId ? preset.id === selectedRegionId : selectedName === preset.name;
              const isHistorical = preset.category === 'historical';
              const isAll = preset.category === 'all';

              return (
                <button
                  key={preset.id}
                  onClick={() => handleSelect(preset)}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-start justify-between gap-2 hover:bg-[#FAF6EC] transition-colors ${isSelected ? 'bg-[#8B2C21]/8 border border-[#8B2C21]/20' : ''}`}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      {isAll ? (
                        <Globe size={13} className="text-[#8B2C21]" />
                      ) : isHistorical ? (
                        <Landmark size={13} className="text-[#C5A059]" />
                      ) : (
                        <MapPin size={13} className="text-[#4F6D85]" />
                      )}
                      <span className={`text-xs ${isSelected ? 'font-serif font-bold text-[#8B2C21]' : 'font-medium text-[#1C2623]'}`}>
                        {preset.name}
                      </span>
                      {preset.id.startsWith('reg-') && (
                        <span className="text-[10px] uppercase font-mono px-1 py-0.2 bg-[#C5A059]/15 text-[#8B6E32] rounded">
                          {preset.id.toUpperCase()}
                        </span>
                      )}
                    </div>
                    {preset.description && (
                      <span className="text-[11px] text-[#5C6963] pl-5 mt-0.5 line-clamp-1">
                        {preset.description}
                      </span>
                    )}
                  </div>
                  {isSelected && (
                    <Check size={14} className="text-[#8B2C21] flex-shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}

            {filteredPresets.length === 0 && (
              <div className="p-6 text-center text-xs text-[#829088]">
                Eşleşen bölge bulunamadı.
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="p-2.5 bg-[#FAF6EC] border-t border-[#C5A059]/20 text-[10.5px] text-[#5C6963] flex items-center justify-between">
            <span>Bölgeye odaklanmak harita sınırlarını ayarlar.</span>
            <span className="font-mono text-[#9D493A]">v1 Research</span>
          </div>
        </div>
      )}
    </div>
  );
}

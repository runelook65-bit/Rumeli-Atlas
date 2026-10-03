'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { ChevronDown, MapPin, Search, X, Check, Globe, Landmark } from 'lucide-react';
import { regionPresets, type RegionPreset, regionalModules } from '@/lib/atlas-data';

interface RegionSelectorProps {
  onSelectRegion?: (preset: RegionPreset) => void;
  onSelectBounds?: (bounds: [[number, number], [number, number]]) => void;
  selectedRegionId?: string;
  currentRegionName?: string;
}

export function RegionSelector({ 
  onSelectRegion,
  onSelectBounds, 
  selectedRegionId = 'all',
  currentRegionName = 'Balkanların tamamı' 
}: RegionSelectorProps) {
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
        className={`region-button flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide border shadow-sm transition-all duration-150 cursor-pointer ${
          selectedRegionId !== 'all' 
            ? 'bg-white border-[#00694C] text-[#00694C] ring-2 ring-[#00694C]/15 font-semibold' 
            : 'bg-[#FAF8F2] border-[#25352F]/15 hover:border-[#9D493A]/50 text-[#25352F]'
        }`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Bölge ve coğrafya seçimi"
      >
        <span className={`w-1.5 h-1.5 rounded-full ${selectedRegionId !== 'all' ? 'bg-[#00694C]' : 'bg-[#9D493A]'}`} />
        <span className="region-desktop max-w-[190px] truncate">{selectedName}</span>
        <span className="region-mobile">{selectedName.split(' ')[0]}</span>
        {selectedRegionId !== 'all' && (
          <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-[#00694C]/10 text-[#00694C] font-bold">
            Filtreli
          </span>
        )}
        <ChevronDown size={14} className={`transition-transform duration-200 ${selectedRegionId !== 'all' ? 'text-[#00694C]' : 'text-[#6F786F]'} ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className="absolute left-0 mt-2 w-[340px] sm:w-[380px] max-h-[480px] flex flex-col bg-[#FAF8F2] border border-[#25352F]/20 rounded-lg shadow-xl z-[2000] overflow-hidden animate-in fade-in zoom-in-95 duration-150"
          role="menu"
        >
          {/* Header */}
          <div className="p-3 bg-[#F5F2E9] border-b border-[#25352F]/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-[#9D493A]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#25352F]">
                Coğrafya & Araştırma Bölgeleri
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#6F786F] hover:text-[#25352F] rounded hover:bg-black/5"
              aria-label="Kapat"
            >
              <X size={15} />
            </button>
          </div>

          {/* Search Input */}
          <div className="p-2 border-b border-[#25352F]/10 bg-white/40">
            <div className="relative flex items-center">
              <Search size={14} className="absolute left-2.5 text-[#6F786F]" />
              <input
                type="text"
                placeholder="Bölge veya şehir ara (örn. Selanik, Rodoplar, Kosova)..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-transparent border border-[#25352F]/15 rounded focus:outline-none focus:border-[#9D493A] text-[#25352F] placeholder:text-[#6F786F]/70"
                autoFocus
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-2 text-[#6F786F] hover:text-[#25352F]"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex border-b border-[#25352F]/10 bg-[#F5F2E9]/60 text-xs">
            <button
              className={`flex-1 py-1.5 px-2 text-center font-medium transition-colors ${activeTab === 'all' ? 'text-[#9D493A] border-b-2 border-[#9D493A] bg-white/40' : 'text-[#6F786F] hover:text-[#25352F]'}`}
              onClick={() => setActiveTab('all')}
            >
              Tümü ({regionPresets.length})
            </button>
            <button
              className={`flex-1 py-1.5 px-2 text-center font-medium transition-colors ${activeTab === 'historical' ? 'text-[#9D493A] border-b-2 border-[#9D493A] bg-white/40' : 'text-[#6F786F] hover:text-[#25352F]'}`}
              onClick={() => setActiveTab('historical')}
            >
              Tarihsel (13 Modül)
            </button>
            <button
              className={`flex-1 py-1.5 px-2 text-center font-medium transition-colors ${activeTab === 'modern' ? 'text-[#9D493A] border-b-2 border-[#9D493A] bg-white/40' : 'text-[#6F786F] hover:text-[#25352F]'}`}
              onClick={() => setActiveTab('modern')}
            >
              Modern Ülkeler
            </button>
          </div>

          {/* List of Regions */}
          <div className="flex-1 overflow-y-auto divide-y divide-[#25352F]/5 p-1 max-h-[320px]">
            {filteredPresets.map(preset => {
              const isSelected = selectedRegionId ? preset.id === selectedRegionId : selectedName === preset.name;
              const isHistorical = preset.category === 'historical';
              const isAll = preset.category === 'all';

              return (
                <button
                  key={preset.id}
                  onClick={() => handleSelect(preset)}
                  className={`w-full text-left px-3 py-2 rounded flex items-start justify-between gap-2 hover:bg-[#F5F2E9] transition-colors ${isSelected ? 'bg-[#9D493A]/5' : ''}`}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      {isAll ? (
                        <Globe size={13} className="text-[#9D493A]" />
                      ) : isHistorical ? (
                        <Landmark size={13} className="text-[#B38A4A]" />
                      ) : (
                        <MapPin size={13} className="text-[#647E91]" />
                      )}
                      <span className={`text-xs ${isSelected ? 'font-bold text-[#9D493A]' : 'font-medium text-[#25352F]'}`}>
                        {preset.name}
                      </span>
                      {preset.id.startsWith('reg-') && (
                        <span className="text-[10px] uppercase font-mono px-1 py-0.2 bg-[#B38A4A]/15 text-[#8A6328] rounded">
                          {preset.id.toUpperCase()}
                        </span>
                      )}
                    </div>
                    {preset.description && (
                      <span className="text-[11px] text-[#6F786F] pl-5 mt-0.5 line-clamp-1">
                        {preset.description}
                      </span>
                    )}
                  </div>
                  {isSelected && (
                    <Check size={14} className="text-[#9D493A] flex-shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}

            {filteredPresets.length === 0 && (
              <div className="p-6 text-center text-xs text-[#6F786F]">
                Eşleşen bölge bulunamadı.
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="p-2 bg-[#F5F2E9] border-t border-[#25352F]/10 text-[10px] text-[#6F786F] flex items-center justify-between">
            <span>Bölgeye odaklanmak harita sınırlarını ayarlar.</span>
            <span className="font-mono text-[#9D493A]">v1 Research</span>
          </div>
        </div>
      )}
    </div>
  );
}

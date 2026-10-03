'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, X, MapPin } from 'lucide-react';
import { places, searchPlaces, type Place } from '@/lib/atlas-data';
import { useStore } from '@/lib/store';

interface AtlasSearchProps {
  query?: string;
  onQueryChange?: (q: string) => void;
  onSelectPlace?: (place: Place) => void;
  onFlyToCoordinates?: (coords: [number, number], zoom: number) => void;
  onNotice?: (msg: string) => void;
}

export function AtlasSearch({
  query: propQuery,
  onQueryChange: propOnQueryChange,
  onSelectPlace: propOnSelectPlace,
  onFlyToCoordinates: propOnFlyToCoordinates,
  onNotice: propOnNotice
}: AtlasSearchProps = {}) {
  const storeQuery = useStore(s => s.query);
  const storeSetQuery = useStore(s => s.setQuery);
  const storeSetSelectedPlace = useStore(s => s.setSelectedPlace);
  const storeSetNotice = useStore(s => s.setNotice);
  const mapHandle = useStore(s => s.mapHandle);

  const query = propQuery !== undefined ? propQuery : storeQuery;
  const onQueryChange = propOnQueryChange || storeSetQuery;
  const onSelectPlace = propOnSelectPlace || storeSetSelectedPlace;
  const onFlyToCoordinates = propOnFlyToCoordinates || ((coords: [number, number], zoom: number) => {
    mapHandle?.flyTo({ center: coords, zoom });
  });
  const onNotice = propOnNotice || storeSetNotice;

  const [focused, setFocused] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (mobileOpen) {
      inputRef.current?.focus();
    }
  }, [mobileOpen]);

  const results = query ? searchPlaces(query).slice(0, 7) : [];

  const handleSelect = (p: any) => {
    const found = places.find(x => x.id === p.id);
    if (found) {
      onSelectPlace(found);
    } else {
      onFlyToCoordinates(p.coordinates, 10);
      onQueryChange('');
      onNotice('Filibe / Plovdiv: yalnız yer adı indeksi; tarihsel veri henüz işlenmedi.');
    }
    setMobileOpen(false);
  };

  return (
    <>
      <button 
        className="search-mobile-btn md:hidden"
        onClick={() => setMobileOpen(true)}
        aria-label="Ara"
      >
        <Search size={18} />
      </button>

      <div className={`search-wrap ${focused ? 'focused' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
        {mobileOpen && (
          <button className="search-back" onClick={() => setMobileOpen(false)} aria-label="Aramayı kapat">
            <X size={18} />
          </button>
        )}
        <Search size={18} className="search-icon-desktop" />
        <input
          ref={inputRef}
          aria-label="Yer ara"
          placeholder="Yer veya tarihsel ad ara…"
          value={query}
          onChange={e => onQueryChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
        />
        <button
          className="search-clear"
          aria-label="Aramayı temizle"
          onClick={() => {
            onQueryChange('');
            inputRef.current?.focus();
          }}
          hidden={!query}
        >
          <X size={18} />
        </button>

        {query && focused && (
          <div className="search-results">
            {results.length > 0 ? (
              results.map(p => {
                const found = places.find(x => x.id === p.id);
                return (
                  <button key={p.id} onClick={() => handleSelect(p)} onMouseDown={(e) => e.preventDefault()}>
                    <MapPin size={16} className="shrink-0" />
                    <div className="flex flex-col text-left">
                      <span className="font-serif text-base text-primary">{p.name}</span>
                      <span className="text-xs text-gray-500 font-sans">
                        {p.modern} · {found ? `${found.layer === 'settlement' ? 'Settlement' : 'Heritage'} · ${found.start}–${found.end || 'present'}` : 'Location'}
                      </span>
                    </div>
                  </button>
                );
              })
            ) : (
              <p className="p-4 text-sm">Eşleşen yer adı yok.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

'use client';

import { useState, useRef, useEffect, type KeyboardEvent } from 'react';
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

const RESULTS_ID = 'atlas-search-results';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (mobileOpen) inputRef.current?.focus();
  }, [mobileOpen]);

  const results = query ? searchPlaces(query).slice(0, 7) : [];
  const showResults = Boolean(query.trim() && focused);
  const activeResult = results[activeIndex];

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const handleSelect = (p: any) => {
    const found = places.find(x => x.id === p.id);
    if (found) {
      onSelectPlace(found);
    } else {
      onFlyToCoordinates(p.coordinates, 10);
      onQueryChange('');
      onNotice('Filibe / Plovdiv: yalnız yer adı indeksi; tarihsel veri henüz işlenmedi.');
    }
    setFocused(false);
    setMobileOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      setFocused(false);
      setMobileOpen(false);
      inputRef.current?.blur();
      return;
    }
    if (!showResults || results.length === 0) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex(index => Math.min(index + 1, results.length - 1));
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex(index => Math.max(index - 1, 0));
    } else if (event.key === 'Enter' && activeResult) {
      event.preventDefault();
      handleSelect(activeResult);
    }
  };

  return (
    <>
      <button
        type="button"
        className="search-mobile-btn md:hidden"
        onClick={() => setMobileOpen(true)}
        aria-label="Aramayı aç"
      >
        <Search size={18} />
      </button>

      <div className={`search-wrap ${focused ? 'focused' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
        {mobileOpen && (
          <button
            type="button"
            className="search-back"
            onClick={() => {
              setMobileOpen(false);
              setFocused(false);
            }}
            aria-label="Aramayı kapat"
          >
            <X size={18} />
          </button>
        )}
        <Search size={18} className="search-icon-desktop" aria-hidden="true" />
        <input
          ref={inputRef}
          role="combobox"
          aria-label="Yer ara"
          aria-autocomplete="list"
          aria-expanded={showResults}
          aria-controls={RESULTS_ID}
          aria-activedescendant={showResults && activeResult ? `${RESULTS_ID}-${activeResult.id}` : undefined}
          aria-haspopup="listbox"
          placeholder="Yer veya tarihsel ad ara…"
          value={query}
          onChange={e => onQueryChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
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

        {showResults && (
          <div id={RESULTS_ID} className="search-results" role="listbox" aria-label="Yer arama sonuçları">
            {results.length > 0 ? (
              results.map(p => {
                const found = places.find(x => x.id === p.id);
                return (
                  <button
                    type="button"
                    id={`${RESULTS_ID}-${p.id}`}
                    role="option"
                    aria-selected={p.id === activeResult?.id}
                    key={p.id}
                    onClick={() => handleSelect(p)}
                    onMouseEnter={() => setActiveIndex(results.findIndex(result => result.id === p.id))}
                    onMouseDown={e => e.preventDefault()}
                  >
                    <MapPin size={16} className="shrink-0" aria-hidden="true" />
                    <div className="flex flex-col text-left">
                      <span className="font-serif text-base text-primary">{p.name}</span>
                      <span className="text-xs text-gray-500 font-sans">
                        {p.modern} · {found ? `${found.layer === 'settlement' ? 'Yerleşim' : 'Kültürel miras'} · ${found.start}–${found.end || 'günümüz'}` : 'Yer adı dizini'}
                      </span>
                    </div>
                  </button>
                );
              })
            ) : (
              <p className="p-4 text-sm" role="status">Eşleşen yer adı yok.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}

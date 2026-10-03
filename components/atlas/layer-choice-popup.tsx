'use client';

import { useEffect, useRef } from 'react';
import { useStore } from '@/lib/store';
import { Building2, MapPin, X } from 'lucide-react';

export function LayerChoicePopup() {
  const pending = useStore((s) => s.pendingChoice);
  const setPending = useStore((s) => s.setPendingChoice);
  const setSelectedPlace = useStore((s) => s.setSelectedPlace);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pending) return;
    const onMouseDown = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setPending(null);
      }
    };
    window.addEventListener('mousedown', onMouseDown);
    return () => window.removeEventListener('mousedown', onMouseDown);
  }, [pending, setPending]);

  if (!pending || !pending.places || pending.places.length === 0) return null;

  const W = 280;
  const estimatedH = 40 + pending.places.length * 52;
  const vw = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const vh = typeof window !== 'undefined' ? window.innerHeight : 800;

  let left = pending.x + 12;
  let top = pending.y + 12;

  if (left + W > vw - 12) left = Math.max(12, pending.x - W - 12);
  if (top + estimatedH > vh - 60) top = Math.max(12, pending.y - estimatedH - 12);

  return (
    <div
      ref={popupRef}
      className="layer-choice-popup"
      style={{
        position: 'fixed',
        left: `${left}px`,
        top: `${top}px`,
        width: `${W}px`,
        zIndex: 50,
      }}
      role="dialog"
      aria-label="Çakışan yer seçimi"
    >
      <div className="choice-header">
        <span className="choice-title">Çakışan Kayıtlar ({pending.places.length})</span>
        <button
          className="choice-close"
          onClick={() => setPending(null)}
          aria-label="Kapat"
        >
          <X size={14} />
        </button>
      </div>

      <div className="choice-list">
        {pending.places.map((place) => {
          const isHeritage = place.layer === 'heritage';
          return (
            <button
              key={place.id}
              className="choice-item"
              onClick={() => {
                setSelectedPlace(place);
                setPending(null);
              }}
            >
              <div className={`choice-icon ${isHeritage ? 'heritage' : 'settlement'}`}>
                {isHeritage ? <Building2 size={14} /> : <MapPin size={14} />}
              </div>
              <div className="choice-info">
                <span className="choice-name">{place.name}</span>
                <span className="choice-sub">
                  {place.modern} · {place.start}–{place.end || 'günümüz'}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

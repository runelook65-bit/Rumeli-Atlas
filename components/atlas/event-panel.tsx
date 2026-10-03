'use client';

import { useStore } from '@/lib/store';
import { X, Calendar, MapPin, Sparkles, ChevronRight, BookOpen } from 'lucide-react';

export function EventPanel() {
  const activeEvent = useStore((s) => s.activeEvent);
  const setActiveEvent = useStore((s) => s.setActiveEvent);
  const year = useStore((s) => s.year);
  const setYear = useStore((s) => s.setYear);

  if (!activeEvent) return null;

  return (
    <aside className="historia-event-panel" role="region" aria-label="Tarihsel Dönem Bağlamı">
      <div className="event-panel-header">
        <div className="event-eyebrow">
          <Sparkles size={13} className="text-[#9D493A]" />
          <span>Tarihsel Dönem & Kriz</span>
        </div>
        <button
          className="event-close-btn"
          onClick={() => setActiveEvent(null)}
          aria-label="Dönem panelini kapat"
        >
          <X size={15} />
        </button>
      </div>

      <h2 className="event-title">{activeEvent.title}</h2>
      <div className="event-period-badge">
        <Calendar size={13} />
        <span>{activeEvent.period}</span>
        <span className="dot">·</span>
        <span className="scope">{activeEvent.scope}</span>
      </div>

      <p className="event-description">{activeEvent.description}</p>

      {/* Breakpoints (Kırılma Noktaları) */}
      <div className="event-breakpoints-section">
        <span className="breakpoints-label">Kırılma Noktaları (Breakpoints):</span>
        <div className="breakpoints-pills">
          {activeEvent.breakpoints.map((bp) => {
            const isCurrent = bp === year;
            return (
              <button
                key={bp}
                className={`breakpoint-pill ${isCurrent ? 'active' : ''}`}
                onClick={() => setYear(bp)}
                title={`${bp} yılına zıpla`}
              >
                {bp}
              </button>
            );
          })}
        </div>
      </div>

      <div className="event-sources-section">
        <BookOpen size={13} className="text-[#6F786F]" />
        <span>Kaynaklar: {activeEvent.sources.join(' · ')}</span>
      </div>

      <div className="event-panel-hint">
        Shift + ← / → ile dönem kırılmaları arasında doğrudan geçiş yapabilirsiniz.
      </div>
    </aside>
  );
}

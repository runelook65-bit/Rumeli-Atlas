'use client';

import { useState } from 'react';
import { Compass } from 'lucide-react';
import { getEraForYear } from '@/lib/chrono-timeline';

interface TimelineYearZoneProps {
  year: number;
  onYearChange: (y: number) => void;
}

export function TimelineYearZone({ year, onYearChange }: TimelineYearZoneProps) {
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState('');

  const currentEra = getEraForYear(year);

  const handleEditSubmit = (e: React.KeyboardEvent | React.FocusEvent) => {
    if ('key' in e && e.key !== 'Enter') return;
    const v = parseInt(editValue, 10);
    if (!isNaN(v) && v >= 1354 && v <= 2026) {
      onYearChange(v);
    }
    setEditing(false);
  };

  return (
    <div className="flex-shrink-0 w-28 sm:w-32 border-r border-[#C5A059]/30 pr-3 sm:pr-4 flex flex-col justify-center">
      {editing ? (
        <input
          autoFocus
          className="w-full text-3xl sm:text-4xl font-serif text-[#8B2C21] font-bold bg-transparent outline-none border-b-2 border-[#C5A059] lining-nums leading-none pb-0.5"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleEditSubmit}
          onKeyDown={handleEditSubmit}
          placeholder="Yıl (1354–2026)"
          aria-label="Tarihsel yıl girin"
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            setEditValue(year.toString());
            setEditing(true);
          }}
          className="text-left w-full cursor-pointer group focus:outline-none"
          title="Yılı doğrudan klavyeden girmek için tıklayın (1354–2026)"
          aria-label={`Seçili yıl: ${year}, Dönem: ${currentEra.name}. Değiştirmek için tıklayın.`}
        >
          <strong className="block text-3xl sm:text-4xl font-serif text-[#8B2C21] font-bold tracking-tight lining-nums group-hover:text-[#005A3E] transition-colors leading-none">
            {year}
          </strong>
          <div className="mt-1 flex items-center">
            <span
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase border border-[#C5A059]/40 bg-[#FAF6EC] text-[#8B6E32] shadow-2xs group-hover:border-[#8B2C21]/50 transition-all truncate max-w-full"
              title={`${currentEra.name} (${currentEra.from}–${currentEra.to})`}
            >
              <Compass size={10} className="text-[#C5A059] shrink-0" />
              <span className="truncate">{currentEra.shortName}</span>
            </span>
          </div>
        </button>
      )}
    </div>
  );
}

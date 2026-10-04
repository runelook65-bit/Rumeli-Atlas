'use client';

import { useStore } from '@/lib/store';
import { Map, Sliders } from 'lucide-react';

export function PeriodMapControl() {
  const periodBasemap = useStore((s) => s.periodBasemap);
  const setPeriodBasemap = useStore((s) => s.setPeriodBasemap);
  const periodOpacity = useStore((s) => s.periodOpacity);
  const setPeriodOpacity = useStore((s) => s.setPeriodOpacity);

  return (
    <div className="period-map-control" role="group" aria-label="Tarihsel dönem haritası kontrolü">
      <label className="period-control-toggle">
        <input
          type="checkbox"
          checked={periodBasemap}
          onChange={(e) => setPeriodBasemap(e.target.checked)}
        />
        <Map size={15} className="text-[#8B2C21] shrink-0" />
        <span className="font-serif font-semibold text-xs tracking-wide">Dönem Haritası (Rölyef)</span>
      </label>

      {periodBasemap && (
        <div className="period-opacity-wrap">
          <span className="opacity-label">Saydamlık %{Math.round(periodOpacity * 100)}</span>
          <input
            type="range"
            min={0.2}
            max={1.0}
            step={0.05}
            value={periodOpacity}
            aria-label="Dönem haritası saydamlığı"
            onChange={(e) => setPeriodOpacity(Number(e.target.value))}
          />
        </div>
      )}
    </div>
  );
}

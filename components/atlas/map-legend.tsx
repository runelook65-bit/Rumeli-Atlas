'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Layers } from 'lucide-react';

export function MapLegend() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Open by default only on larger screens
    if (window.innerWidth >= 768) {
      setOpen(true);
    }
  }, []);

  return (
    <aside 
      aria-label="Harita lejantı"
      className="absolute bottom-[118px] md:bottom-[80px] left-3 md:left-5 bg-[#FFFDF9]/95 backdrop-blur-md shadow-md border border-[#C5A059]/30 rounded-xl p-2.5 md:p-3 z-15 text-sm max-w-[210px] select-none transition-all"
    >
      <button 
        type="button"
        className="flex justify-between items-center w-full font-serif font-semibold text-xs text-[#8B2C21] cursor-pointer gap-2" 
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="flex items-center gap-1.5">
          <Layers size={13} className="text-[#8B6E32]" />
          <span>Harita Lejantı</span>
        </span>
        {open ? <ChevronDown size={14} className="text-[#5C6963]" /> : <ChevronUp size={14} className="text-[#5C6963]" />}
      </button>

      {open && (
        <div className="space-y-2 text-xs text-[#1C2623] mt-2.5 pt-2 border-t border-[#C5A059]/20">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full block shadow-xs shrink-0" style={{ backgroundColor: '#00694C', borderColor: '#004d38', borderWidth: 1 }}></span>
            <span className="text-[11px] leading-tight font-medium" style={{ color: '#00694C' }}>🟢 Osmanlı Kuruluşu (Saraybosna, Tiran vb.)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full block shadow-xs shrink-0" style={{ backgroundColor: '#A91101', borderColor: '#870e01', borderWidth: 1 }}></span>
            <span className="text-[11px] leading-tight font-medium" style={{ color: '#A91101' }}>🔴 Tarihsel Yerleşim (Selanik, Belgrad vb.)</span>
          </div>
          <div className="pt-1.5 border-t border-[#C5A059]/15 space-y-1.5">
            <div className="flex items-center gap-2 text-[11px] text-[#5C6963]">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-600 block shrink-0"></span> Ayakta Anıt
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#5C6963]">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-600 opacity-50 block border border-gray-600 shrink-0"></span> Kısmen Kalan
            </div>
            <div className="flex items-center gap-2 text-[11px] text-[#5C6963]">
              <span className="w-2.5 h-2.5 rounded-full block border-2 border-dashed border-[#846e79] shrink-0"></span> Kayıp / Yıkık
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function MapLegend() {
  const [open, setOpen] = useState(true);

  return (
    <div className="absolute bottom-[80px] left-5 bg-white/95 backdrop-blur shadow border border-gray-200 rounded-lg p-3 z-10 text-sm max-w-[200px]">
      <div className="flex justify-between items-center mb-2 font-medium cursor-pointer" onClick={() => setOpen(!open)}>
        <span>Legend</span>
        {open ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
      </div>
      {open && (
        <div className="space-y-2 text-xs text-gray-700">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full block shadow-sm shrink-0" style={{ backgroundColor: '#00694C', borderColor: '#004d38', borderWidth: 1 }}></span>
            <span className="text-[11px] leading-tight font-medium" style={{ color: '#00694C' }}>🟢 Osmanlı Kuruluşu (Saraybosna, Tiran, Yeni Pazar vb.)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full block shadow-sm shrink-0" style={{ backgroundColor: '#A91101', borderColor: '#870e01', borderWidth: 1 }}></span>
            <span className="text-[11px] leading-tight font-medium" style={{ color: '#A91101' }}>🔴 Tarihsel Yerleşim (Selanik, Belgrad, Filibe vb.)</span>
          </div>
          <div className="pt-1.5 border-t border-gray-200/60 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gray-600 block"></span> Ayakta Anıt
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gray-600 opacity-50 block border border-gray-600"></span> Kısmen Kalan
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full block border-2 border-dashed border-[#846e79]"></span> Kayıp / Yıkık
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

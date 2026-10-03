'use client';

import { useStore } from '@/lib/store';
import { formatPlaceToHistoriaText } from '@/lib/historia-text';
import { X, Copy, Check, FileCode, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export function HistoriaTextModal() {
  const place = useStore((s) => s.historiaTextPlace);
  const setPlace = useStore((s) => s.setHistoriaTextPlace);
  const setToast = useStore((s) => s.setToast);
  const [copied, setCopied] = useState(false);

  if (!place) return null;

  const yamlContent = formatPlaceToHistoriaText(place);

  const handleCopy = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(yamlContent).then(() => {
        setCopied(true);
        setToast('HistoriaText kanıt formatı panoya kopyalandı');
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <div className="historia-modal-overlay" role="dialog" aria-label="HistoriaText Kanıt Formatı">
      <div className="historia-modal-content">
        <div className="historia-modal-header">
          <div className="flex items-center gap-2">
            <FileCode size={18} className="text-[#9D493A]" />
            <h3 className="font-serif text-lg font-semibold text-[#25352F]">
              HistoriaText Kanıt Formatı · {place.name}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="copy-btn flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border border-[#9D493A]/30 text-[#9D493A] hover:bg-[#9D493A]/10 transition-colors"
              onClick={handleCopy}
              aria-label="Formatı kopyala"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'Kopyalandı' : 'Kopyala'}</span>
            </button>
            <button
              className="close-btn p-1 text-[#6F786F] hover:text-[#9D493A] transition-colors"
              onClick={() => setPlace(null)}
              aria-label="Kapat"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="historia-modal-body">
          <div className="historia-intro-note flex items-center gap-2 p-2.5 mb-3 rounded text-xs bg-[#FAF8F2] border border-[#dddcd1] text-[#25352F]">
            <ShieldCheck size={15} className="text-[#00694C] shrink-0" />
            <span>
              Historia standardı: Deterministik, zamansal (EDTF) ve kaynaklı kanıt modellemesi.
            </span>
          </div>
          <pre className="historia-code-block font-mono text-xs leading-relaxed p-4 rounded bg-[#1e2220] text-[#e8ece9] overflow-x-auto select-all">
            {yamlContent}
          </pre>
        </div>
      </div>
    </div>
  );
}

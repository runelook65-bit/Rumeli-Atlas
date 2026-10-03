'use client';

import { useState } from 'react';
import { 
  X, Copy, Check, Download, Layers, Clock, MapPin, 
  Search, ShieldCheck, Tag, ExternalLink, Calendar
} from 'lucide-react';
import { useStore } from '@/lib/store';
import { 
  calculatePlaceLifespan, 
  placeToOhmTags, 
  placeToOhmGeoJsonFeature,
  exportOhmSnapshotGeoJson,
  downloadGeoJsonFile
} from '@/lib/ohm-temporal';
import { places } from '@/lib/atlas-data';

export function OhmInspectorModal() {
  const place = useStore(s => s.ohmInspectorPlace);
  const year = useStore(s => s.year);
  const onClose = () => useStore.getState().setOhmInspectorPlace(null);
  const setToast = useStore(s => s.setToast);

  const [copiedGeoJson, setCopiedGeoJson] = useState(false);
  const [copiedTags, setCopiedTags] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  if (!place) return null;

  const lifespan = calculatePlaceLifespan(place, year);
  const tags = placeToOhmTags(place, year);

  const filteredTags = tags.filter(t => {
    const matchesCategory = activeCategory === 'all' || t.category === activeCategory;
    const matchesQuery = !searchQuery || 
      t.key.toLowerCase().includes(searchQuery.toLowerCase()) || 
      t.value.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const handleCopyGeoJson = () => {
    const feature = placeToOhmGeoJsonFeature(place, year);
    navigator.clipboard.writeText(JSON.stringify(feature, null, 2));
    setCopiedGeoJson(true);
    setToast('OHM GeoJSON panoya kopyalandı');
    setTimeout(() => setCopiedGeoJson(false), 2200);
  };

  const handleDownloadGeoJson = () => {
    const feature = placeToOhmGeoJsonFeature(place, year);
    downloadGeoJsonFile(feature, `${place.id}-ohm-${year}.geojson`);
    setToast(`${place.id}-ohm-${year}.geojson indirildi`);
  };

  const handleDownloadSnapshot = () => {
    const snapshot = exportOhmSnapshotGeoJson(places, year);
    downloadGeoJsonFile(snapshot, `rumelia-atlas-ohm-snapshot-${year}.geojson`);
    setToast(`Rumeli Atlas ${year} OHM snapshot indirildi (${places.length} nesne)`);
  };

  const handleCopyTags = () => {
    const tagText = tags.map(t => `${t.key} = ${t.value}`).join('\n');
    navigator.clipboard.writeText(tagText);
    setCopiedTags(true);
    setToast('OHM etiket listesi panoya kopyalandı');
    setTimeout(() => setCopiedTags(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/55 backdrop-blur-xs historia-modal-overlay">
      <div 
        className="w-full max-w-3xl bg-[#FAF8F2] border border-[#25352F]/20 rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-label="OpenHistoricalMap Nesne İnceleyicisi"
      >
        {/* Başlık ve Kapat Butonu */}
        <div className="px-5 py-4 border-b border-[#25352F]/15 bg-white/70 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#00694C]/10 text-[#00694C] flex items-center justify-center">
              <Layers size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg font-bold text-[#25352F] leading-snug">
                  OpenHistoricalMap Temporal GIS İnceleyicisi
                </h3>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                  OHM Tag Schema
                </span>
              </div>
              <p className="text-xs text-[#6F786F]">
                {place.name} ({place.modern}) · Seçili Yıl: <strong className="text-[#9D493A] font-serif">{year}</strong>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 rounded-full transition-colors cursor-pointer"
            aria-label="Kapat"
          >
            <X size={18} />
          </button>
        </div>

        {/* Gövde */}
        <div className="p-5 overflow-y-auto flex-1 flex flex-col gap-4">
          
          {/* OHM Zamansal Ömür & Geçerlilik Göstergesi */}
          <div className="p-4 bg-white rounded-lg border border-[#25352F]/15 shadow-2xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#6F786F] flex items-center gap-1.5">
                <Clock size={14} className="text-[#9D493A]" />
                Zamansal Durum & Ömür (Lifespan Engine)
              </span>
              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${lifespan.statusBadgeClass}`}>
                {lifespan.statusLabel}
              </span>
            </div>

            {/* Zaman Çizelgesi İlerleme Barı */}
            <div className="mt-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="font-mono font-medium text-[#25352F]">
                  İnşa / Başlangıç: <strong>{place.start}</strong> (dec: {lifespan.startDecdate})
                </span>
                <span className="font-mono text-[#9D493A] font-bold">
                  {lifespan.ageAtYear !== null ? `${lifespan.ageAtYear}. Yaşında` : 'Henüz Yok'}
                </span>
                <span className="font-mono font-medium text-[#25352F]">
                  {place.end ? `Yıkım: ${place.end} (dec: ${lifespan.endDecdate})` : 'Günümüz (Sürekli)'}
                </span>
              </div>

              {/* Grafiksel Yaşam Barı */}
              <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden border border-stone-200 relative">
                <div 
                  className={`h-full transition-all duration-300 ${
                    lifespan.status === 'vanished' 
                      ? 'bg-rose-500' 
                      : lifespan.status === 'pre_existence' 
                      ? 'bg-stone-300' 
                      : 'bg-[#00694C]'
                  }`}
                  style={{ width: `${lifespan.progressPercent ?? 100}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#6F786F] mt-1.5">
                <span>EDTF Aralığı: <code className="bg-stone-100 px-1 py-0.5 rounded text-[#25352F]">{lifespan.edtfInterval}</code></span>
                <span>Toplam Varlık: <strong>{lifespan.totalLifespanYears} yıl</strong></span>
              </div>
            </div>
          </div>

          {/* OHM Tag Filtreleri & Arama */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
              {[
                { id: 'all', label: 'Tümü' },
                { id: 'identity', label: 'Kimlik' },
                { id: 'toponym', label: 'Toponimi' },
                { id: 'temporal', label: 'Zamansal (GIS)' },
                { id: 'classification', label: 'Sınıflandırma' },
                { id: 'provenance', label: 'Kaynaklar' },
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-2.5 py-1 rounded text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    activeCategory === cat.id 
                      ? 'bg-[#9D493A] text-white' 
                      : 'bg-[#F5F2E9] text-[#25352F] hover:bg-stone-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-56">
              <input
                type="text"
                placeholder="Etiket veya değer ara..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-7 pr-2 py-1.5 border border-stone-300 rounded bg-white focus:outline-none focus:border-[#9D493A]"
              />
              <Search size={13} className="absolute left-2 top-2 text-stone-400" />
            </div>
          </div>

          {/* OHM Key-Value Tablosu */}
          <div className="border border-[#25352F]/15 rounded-lg overflow-hidden bg-white shadow-2xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#F5F2E9] border-b border-[#25352F]/15 text-[#25352F]">
                  <th className="py-2 px-3 font-semibold w-1/3">Etiket Anahtarı (Key)</th>
                  <th className="py-2 px-3 font-semibold w-1/3">Değer (Value)</th>
                  <th className="py-2 px-3 font-semibold text-[#6F786F]">Semantik Açıklama</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 font-mono">
                {filteredTags.map((t, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                    <td className="py-2 px-3 text-[#9D493A] font-semibold break-all">
                      {t.key}
                    </td>
                    <td className="py-2 px-3 text-[#25352F] break-all font-sans">
                      {t.value.startsWith('http') ? (
                        <a 
                          href={t.value} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-[#9D493A] underline flex items-center gap-1 font-mono text-[11px]"
                        >
                          {t.value.slice(0, 30)}... <ExternalLink size={10} />
                        </a>
                      ) : (
                        <span className={t.category === 'temporal' ? 'font-mono font-bold' : ''}>
                          {t.value}
                        </span>
                      )}
                    </td>
                    <td className="py-2 px-3 text-[#6F786F] font-sans text-[11px]">
                      {t.description}
                    </td>
                  </tr>
                ))}
                {filteredTags.length === 0 && (
                  <tr>
                    <td colSpan={3} className="py-4 text-center text-stone-400 font-sans">
                      Aramaya uygun etiket bulunamadı.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>

        {/* Alt Eylemler Toolbar */}
        <div className="px-5 py-3 border-t border-[#25352F]/15 bg-[#F5F2E9] flex flex-wrap items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyGeoJson}
              className="py-1.5 px-3 bg-white border border-[#25352F]/20 hover:border-[#9D493A] text-[#25352F] rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            >
              {copiedGeoJson ? <Check size={14} className="text-emerald-700" /> : <Copy size={14} />}
              {copiedGeoJson ? 'Kopyalandı' : 'GeoJSON Kopyala'}
            </button>
            <button
              onClick={handleCopyTags}
              className="py-1.5 px-3 bg-white border border-[#25352F]/20 hover:border-[#9D493A] text-[#25352F] rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            >
              {copiedTags ? <Check size={14} className="text-emerald-700" /> : <Tag size={14} />}
              {copiedTags ? 'Kopyalandı' : 'Etiketleri Kopyala'}
            </button>
            <button
              onClick={handleDownloadGeoJson}
              className="py-1.5 px-3 bg-[#9D493A] text-white hover:bg-[#833B2E] rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            >
              <Download size={14} />
              Bu Nesneyi İndir
            </button>
          </div>

          <button
            onClick={handleDownloadSnapshot}
            className="py-1.5 px-3 bg-[#00694C] text-white hover:bg-[#00523b] rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            title="Seçili yıl için tüm görünür Rumeli Atlas veritabanını OHM GeoJSON FeatureCollection olarak dışa aktar"
          >
            <Download size={14} />
            Tüm {year} Snapshot'ını İndir
          </button>
        </div>
      </div>
    </div>
  );
}

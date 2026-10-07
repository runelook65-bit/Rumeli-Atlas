import { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  ArrowUpRight, 
  X, 
  MapPin, 
  Clock, 
  PieChart as PieIcon, 
  BookOpen, 
  Info, 
  AlertTriangle,
  Landmark,
  Building2,
  Calendar,
  Layers,
  FileCode,
  Image as ImageIcon,
  Maximize2,
  PlusCircle,
  FileText
} from 'lucide-react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { sources, isOttomanFoundation, type Place } from '@/lib/atlas-data';
import { calculatePlaceLifespan } from '@/lib/ohm-temporal';
import { Evidence } from './atlas-evidence';
import { PopulationChart } from './population-chart';
import { useStore } from '@/lib/store';

interface PlaceStoryDrawerProps {
  place?: Place | null;
  year?: number;
  onClose?: () => void;
}

export function PlaceStoryDrawer({
  place: propPlace,
  year: propYear,
  onClose: propOnClose
}: PlaceStoryDrawerProps = {}) {
  const storePlace = useStore(s => s.selectedPlace);
  const storeYear = useStore(s => s.year);
  const storeSetPlace = useStore(s => s.setSelectedPlace);

  const place = propPlace !== undefined ? propPlace : storePlace;
  const year = propYear !== undefined ? propYear : storeYear;
  const onClose = propOnClose || (() => storeSetPlace(null));

  const [isDesktop, setIsDesktop] = useState(true);
  const [activeLightboxImg, setActiveLightboxImg] = useState<{ url: string; caption: string; year?: number; credit?: string } | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 761px)');
    setIsDesktop(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  if (!place && isDesktop) return null;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderContent = (p: Place) => {
    const relevantSources = sources.filter(
      s =>
        s.id === p.source ||
        p.additionalSources?.includes(s.id) ||
        p.events.some(e => e.source === s.id) ||
        p.observations.some(o => o.source === s.id)
    );

    const isOttoman = p.layer === 'settlement' && isOttomanFoundation(p);
    const isHistorical = p.layer === 'settlement' && !isOttoman;
    const hasDemographics = p.observations.some(o => o.values && o.values.length > 0);

    return (
      <div className="flex flex-col h-full bg-[#FAF8F2] text-[#25352F]">
        {/* Üst Başlık & Kapat Butonu */}
        <div className="p-5 pb-3 shrink-0 border-b border-[#25352F]/10 bg-white/60 backdrop-blur-xs">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2 flex-wrap">
              {p.layer === 'settlement' ? (
                isOttoman ? (
                  <span 
                    className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border shadow-xs" 
                    style={{ backgroundColor: '#f0fdf7', color: '#00694C', borderColor: '#00694C' }}
                  >
                    <Landmark size={12} />
                    🟢 Osmanlı Kuruluşu
                  </span>
                ) : (
                  <span 
                    className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border shadow-xs" 
                    style={{ backgroundColor: '#fff5f5', color: '#A91101', borderColor: '#A91101' }}
                  >
                    <Landmark size={12} />
                    🔴 Tarihsel Yerleşim
                  </span>
                )
              ) : p.lost ? (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border shadow-xs bg-amber-50 text-amber-900 border-amber-300">
                  <AlertTriangle size={12} className="text-amber-700" />
                  × Kayıp / Yıkılan Miras
                </span>
              ) : p.partialLoss ? (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border shadow-xs bg-orange-50 text-orange-900 border-orange-300">
                  <Building2 size={12} />
                  ◐ Kısmen Korunan Eser
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border shadow-xs bg-emerald-50 text-emerald-900 border-emerald-300">
                  <Building2 size={12} />
                  ◇ Korunan Kültürel Miras
                </span>
              )}

              <span className="text-[10px] uppercase font-semibold text-[#6F786F] tracking-wider px-1.5 py-0.5 rounded bg-black/5">
                {p.start}–{p.end ?? 'Günümüz'}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                className="p-1.5 text-stone-500 hover:text-[#00694C] hover:bg-stone-200/60 rounded-full transition-colors cursor-pointer shrink-0"
                onClick={() => useStore.getState().setOhmInspectorPlace(p)}
                title="OpenHistoricalMap (OHM) Etiketleri & GeoJSON İncele"
                aria-label="OpenHistoricalMap Etiketleri"
              >
                <Layers size={17} />
              </button>
              <button
                className="p-1.5 text-stone-500 hover:text-[#9D493A] hover:bg-stone-200/60 rounded-full transition-colors cursor-pointer shrink-0"
                onClick={() => useStore.getState().setHistoriaTextPlace(p)}
                title="HistoriaText Kanıt Formatını İncele / Kopyala"
                aria-label="HistoriaText Formatı"
              >
                <FileCode size={17} />
              </button>
              <button 
                className="p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 rounded-full transition-colors cursor-pointer shrink-0" 
                onClick={onClose}
                aria-label="Kapat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Yer Adı (Büyük Serif) */}
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#25352F] tracking-tight leading-tight mb-1">
            {p.name}
          </h2>

          {/* Tarihsel Eşadlar (Aliases) */}
          {p.aliases.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2">
              {p.aliases.map((alias, idx) => (
                <span 
                  key={idx} 
                  className="px-2 py-0.5 rounded-md text-[11px] bg-stone-100 text-stone-700 border border-stone-200/80 font-medium font-sans"
                >
                  {alias}
                </span>
              ))}
            </div>
          )}

          {/* Modern Coğrafya ve Koordinatlar */}
          <div className="flex items-center gap-1.5 text-xs text-[#6F786F]">
            <MapPin size={13} className="text-[#9D493A] shrink-0" />
            <span className="font-medium text-[#25352F]">{p.modern}</span>
            <span>·</span>
            <span className="font-mono text-[11px]">{p.coordinates[1].toFixed(4)}° N, {p.coordinates[0].toFixed(4)}° E</span>
          </div>
        </div>

        {/* Hızlı Gezinme Sekmeleri (Quick Jump Anchor Bar) */}
        <div className="flex items-center gap-1 px-5 py-2 bg-[#F5F2E9] border-b border-[#25352F]/10 text-xs shrink-0 overflow-x-auto no-scrollbar">
          <button 
            type="button"
            onClick={() => scrollToSection('sec-summary')}
            className="px-2.5 py-1 rounded-lg text-[#25352F] hover:bg-white hover:shadow-xs transition-all font-medium shrink-0 flex items-center gap-1 cursor-pointer"
          >
            <Info size={12} className="text-[#9D493A]" /> Özet
          </button>
          <button 
            type="button"
            onClick={() => scrollToSection('sec-gallery')}
            className="px-2.5 py-1 rounded-lg text-[#9D493A] bg-[#fbf5f4] border border-[#9D493A]/20 hover:bg-[#f6eae8] hover:shadow-xs transition-all font-bold shrink-0 flex items-center gap-1 cursor-pointer"
          >
            <ImageIcon size={12} className="text-[#9D493A]" /> Görsel ({p.images?.length ?? 0})
          </button>
          <button 
            type="button"
            onClick={() => scrollToSection('sec-timeline')}
            className="px-2.5 py-1 rounded-lg text-[#25352F] hover:bg-white hover:shadow-xs transition-all font-medium shrink-0 flex items-center gap-1 cursor-pointer"
          >
            <Clock size={12} className="text-[#9D493A]" /> Kronoloji
          </button>
          {hasDemographics && (
            <button 
              type="button"
              onClick={() => scrollToSection('sec-demographics')}
              className="px-2.5 py-1 rounded-lg text-[#00694C] bg-[#f0fdf7] border border-[#00694C]/20 hover:bg-[#e1f9ee] hover:shadow-xs transition-all font-bold shrink-0 flex items-center gap-1 cursor-pointer"
            >
              <PieIcon size={12} className="text-[#00694C]" /> Demografi (Pasta)
            </button>
          )}
          <button 
            type="button"
            onClick={() => scrollToSection('sec-evidence')}
            className="px-2.5 py-1 rounded-lg text-[#25352F] hover:bg-white hover:shadow-xs transition-all font-medium shrink-0 flex items-center gap-1 cursor-pointer"
          >
            <Layers size={12} className="text-[#9D493A]" /> {year} Yılı
          </button>
          <button 
            type="button"
            onClick={() => scrollToSection('sec-sources')}
            className="px-2.5 py-1 rounded-lg text-[#25352F] hover:bg-white hover:shadow-xs transition-all font-medium shrink-0 flex items-center gap-1 cursor-pointer"
          >
            <BookOpen size={12} className="text-[#9D493A]" /> Kaynaklar
          </button>
        </div>

        {/* Kaydırılabilir Ana İçerik */}
        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-5 space-y-6">
          {/* 1. ÖZET & TARİHSEL GÜVEN */}
          <section id="sec-summary" className="space-y-3">
            <div className="flex items-center justify-between text-xs py-2 px-3 rounded-lg bg-white border border-[#25352F]/10 shadow-xs">
              <div className="flex items-center gap-1.5 font-medium text-[#25352F]">
                <ShieldCheck size={15} className="text-[#00694C]" />
                <span>{p.confidence === 'high' ? 'Yüksek Tarihsel Güven' : 'Orta Düzey Güven'}</span>
              </div>
              <span className="text-[11px] text-[#6F786F]">BOA & Salnâme Doğrulamalı</span>
            </div>

            {/* OHM Temporal GIS Lifespan Kartı */}
            {(() => {
              const lifespan = calculatePlaceLifespan(p, year);
              return (
                <div className="p-3 bg-white rounded-lg border border-[#25352F]/10 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#6F786F] flex items-center gap-1.5">
                      <Clock size={13} className="text-[#9D493A]" />
                      Zamansal Ömür ({year} Durumu):
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${lifespan.statusBadgeClass}`}>
                      {lifespan.statusLabel}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
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
                  <div className="flex items-center justify-between text-[11px] text-[#6F786F]">
                    <span className="font-mono">{p.start} {lifespan.ageAtYear !== null ? `(${lifespan.ageAtYear}. yaş)` : ''}</span>
                    <button
                      type="button"
                      onClick={() => useStore.getState().setOhmInspectorPlace(p)}
                      className="text-[#00694C] hover:underline font-medium text-[11px] flex items-center gap-1 cursor-pointer"
                    >
                      OHM Etiketleri & GeoJSON <ArrowUpRight size={11} />
                    </button>
                    <span className="font-mono">{p.end ?? '2026'}</span>
                  </div>
                </div>
              );
            })()}

            <p className="text-sm leading-relaxed text-[#25352F]">
              {p.summary}
            </p>
          </section>

          {/* GÖRSEL ARŞİV & TARİHÎ KARTPOSTALLAR */}
          <section id="sec-gallery" className="space-y-3 pt-2 border-t border-[#25352F]/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <ImageIcon size={15} className="text-[#9D493A]" />
                <h3 className="eyebrow text-xs font-bold text-[#9D493A] uppercase tracking-wider">
                  GÖRSEL ARŞİV & TARİHÎ GRAVÜRLER ({p.images?.length ?? 0})
                </h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  useStore.getState().setContributionTargetPlace(p);
                  useStore.getState().setContributionModalOpen(true);
                }}
                className="text-[11px] text-[#9D493A] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                <PlusCircle size={12} /> Görsel Öner
              </button>
            </div>

            {p.images && p.images.length > 0 ? (
              <div className="space-y-3">
                {p.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-white p-2 rounded-xl border border-[#25352F]/15 shadow-xs overflow-hidden"
                  >
                    <div 
                      className="relative h-48 w-full bg-stone-100 rounded-lg overflow-hidden cursor-zoom-in"
                      onClick={() => setActiveLightboxImg(img)}
                    >
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.classList.add('flex', 'items-center', 'justify-center', 'bg-[#F2EDE2]', 'p-4', 'text-center');
                            parent.innerHTML = `<div class="text-stone-500 text-xs font-serif italic"><div class="text-base mb-1">📜</div>${img.caption}</div>`;
                          }
                        }}
                      />
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono flex items-center gap-1">
                        <Maximize2 size={10} /> {img.year ? `${img.year} Arşiv` : 'Tarihî Belge'}
                      </div>
                    </div>
                    <div className="p-2 pt-2.5 space-y-1">
                      <p className="text-xs font-medium text-[#25352F] leading-snug">
                        {img.caption}
                      </p>
                      {img.credit && (
                        <p className="text-[10px] text-[#6F786F] font-mono flex items-center gap-1">
                          <span>Kaynak:</span> <span>{img.credit}</span>
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-white/70 rounded-xl border border-stone-200/80 text-center space-y-2">
                <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-400">
                  <ImageIcon size={18} />
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Bu yerleşim/eser için henüz taranmış arşiv fotoğrafı eklenmedi.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    useStore.getState().setContributionTargetPlace(p);
                    useStore.getState().setContributionModalOpen(true);
                  }}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#FAF8F2] border border-[#9D493A]/30 text-[#9D493A] text-xs font-semibold hover:bg-white transition-all cursor-pointer shadow-2xs"
                >
                  <PlusCircle size={12} />
                  Arşiv Kartpostalı / Belge Katkısı Ver
                </button>
              </div>
            )}
          </section>

          {/* 2. YIKILAN MİRAS / GÜNCEL DURUM KARTI (Lost Rumelia / Current) */}
          {(p.lost || p.partialLoss || p.current) && (
            <section className={`p-4 rounded-xl border shadow-xs space-y-2 ${
              p.lost 
                ? 'bg-amber-50/90 border-amber-300' 
                : p.partialLoss 
                ? 'bg-orange-50/80 border-orange-200' 
                : 'bg-white border-[#25352F]/15'
            }`}>
              <div className="flex items-center gap-1.5">
                {p.lost ? (
                  <AlertTriangle size={15} className="text-amber-800 shrink-0" />
                ) : (
                  <Building2 size={15} className="text-[#9D493A] shrink-0" />
                )}
                <span className="text-xs font-bold uppercase tracking-wider text-[#9D493A]">
                  {p.lost 
                    ? 'YIKILAN MİRAS VE YERİNE İNŞA EDİLEN MEVCUT DURUM' 
                    : p.partialLoss 
                    ? 'DÖNÜŞTÜRÜLEN / KISMİ KAYIP VE GÜNCEL KULLANIM' 
                    : 'GÜNCEL DURUM VE MEVCUT KULLANIM'}
                </span>
              </div>
              <p className="text-sm text-[#1e293b] leading-relaxed font-medium">
                {p.current}
              </p>
              {p.currentAsOf && (
                <p className="text-[11px] text-[#64748b]">
                  Kaynak Bağlamı: {p.currentAsOf}
                </p>
              )}
            </section>
          )}

          {/* 3. KRONOLOJİ (TIMELINE) */}
          {p.events.length > 0 && (
            <section id="sec-timeline" className="space-y-3 pt-2 border-t border-[#25352F]/10">
              <div className="flex items-center gap-1.5">
                <Clock size={15} className="text-[#9D493A]" />
                <h3 className="eyebrow text-xs font-bold text-[#9D493A] uppercase tracking-wider">
                  KRONOLOJİ VE TARİHİ ADIMLAR
                </h3>
              </div>

              <div className="event-list border-l-2 border-[#9D493A]/30 ml-2.5 pl-4 space-y-4">
                {p.events.map((e, i) => {
                  const isPast = e.year <= year;
                  return (
                    <div key={i} className={`relative transition-opacity ${isPast ? 'opacity-100' : 'opacity-40'}`}>
                      <div 
                        className={`absolute -left-[23px] top-1.5 w-3 h-3 rounded-full border-2 border-white shadow-xs ${
                          isPast ? 'bg-[#9D493A]' : 'bg-stone-300'
                        }`} 
                      />
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-lg font-bold text-[#9D493A]">{e.year}</span>
                        {isPast && (
                          <span className="text-[10px] px-1 rounded bg-[#9D493A]/10 text-[#9D493A] font-semibold">
                            İşlendi
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-[#25352F] mt-0.5 leading-snug">{e.text}</p>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* 4. DEMOGRAFİ VE PASTA DİLİMİ GRAFİĞİ */}
          <section id="sec-demographics" className="pt-2 border-t border-[#25352F]/10">
            <PopulationChart place={p} activeYear={year} />
          </section>

          {/* 5. SEÇİLİ YIL DETAYI */}
          <section id="sec-evidence" className="space-y-3 pt-2 border-t border-[#25352F]/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Calendar size={15} className="text-[#9D493A]" />
                <h3 className="eyebrow text-xs font-bold text-[#9D493A] uppercase tracking-wider">
                  SEÇİLİ YIL DETAYI ({year})
                </h3>
              </div>
              <span className="text-[11px] text-[#6F786F]">Atlas Zaman Çizgisi</span>
            </div>

            <Evidence place={p} year={year} />

            <div className="text-xs text-[#6F786F] bg-white p-3 rounded-xl border border-[#25352F]/10 space-y-1">
              <p><b className="text-[#25352F]">Tarih Hassasiyeti:</b> {p.datePrecision}</p>
              <p><b className="text-[#25352F]">Konum Doğruluğu:</b> {p.locationAccuracy}</p>
            </div>
            
            {p.importedRecords && p.importedRecords.length > 0 && (
              <div className="mt-4 space-y-2">
                <h4 className="text-xs font-bold text-[#6F786F] uppercase">ARAŞTIRMA PAKETİ KAYDI</h4>
                {p.importedRecords.map((r, i) => (
                  <div className="p-3 bg-white rounded-xl border border-[#25352F]/10 text-xs shadow-xs" key={i}>
                    <p className="font-semibold text-[#25352F]">{r.heritage_id ?? r.place_id} · {r.type ?? r.place_type}</p>
                    <p className="mt-1 text-stone-600">İnşa: {r.construction_date ?? r.first_known_date ?? 'Bilinmiyor'}</p>
                    <p className="text-stone-600">Durum: {r.status ?? r.current_status} · {r.current_use ?? r.notes}</p>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* 6. KAYNAKLAR VE BELGELER */}
          <section id="sec-sources" className="space-y-3 pt-2 border-t border-[#25352F]/10">
            <div className="flex items-center gap-1.5">
              <BookOpen size={15} className="text-[#9D493A]" />
              <h3 className="eyebrow text-xs font-bold text-[#9D493A] uppercase tracking-wider">
                BİRİNCİL VE AKADEMİK KAYNAKLAR ({relevantSources.length})
              </h3>
            </div>

            <div className="space-y-3">
              {relevantSources.map(s => (
                <div className="p-3.5 bg-white rounded-xl border border-[#25352F]/10 shadow-xs space-y-1.5" key={s.id}>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-[#9D493A] uppercase tracking-wider bg-[#9D493A]/10 px-1.5 py-0.2 rounded">
                      {s.kind}
                    </span>
                    <span className="text-[10px] text-[#6F786F] font-mono">{s.date}</span>
                  </div>

                  <h4 className="text-base font-serif font-bold text-[#25352F]">{s.title}</h4>
                  <p className="text-xs text-[#475569]">{s.author}</p>
                  
                  {s.locator && (
                    <p className="text-[11px] text-[#64748b] bg-stone-50 p-1.5 rounded border border-stone-200/60 font-mono">
                      {s.locator}
                    </p>
                  )}

                  {s.url && (
                    <a 
                      href={s.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-1 text-[#9D493A] text-xs font-semibold hover:underline pt-1"
                    >
                      Kaynağı incele <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              ))}
            </div>

            {p.alternatives && p.alternatives.length > 0 && (
              <div className="mt-4 p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950 space-y-1">
                <b className="block text-amber-900 font-semibold mb-1">Belirsizlik ve Alternatif Tarihsel Yorumlar:</b>
                {p.alternatives.map((t, i) => <p key={i} className="leading-snug">· {t}</p>)}
              </div>
            )}

            {/* Düzeltme & Katkı Butonu */}
            <div className="mt-5 pt-3 border-t border-[#25352F]/10">
              <button
                type="button"
                onClick={() => {
                  useStore.getState().setContributionTargetPlace(p);
                  useStore.getState().setContributionModalOpen(true);
                }}
                className="w-full py-2.5 px-3 bg-white border border-[#9D493A]/30 text-[#9D493A] rounded-xl text-xs font-bold hover:bg-[#fbf5f4] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <FileText size={14} />
                Bu Kayda Düzeltme / Yeni Kaynak Öner (001_atlas.sql)
              </button>
            </div>
          </section>
        </div>

        {/* Lightbox Modal */}
        {activeLightboxImg && (
          <div 
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setActiveLightboxImg(null)}
          >
            <button 
              type="button"
              onClick={() => setActiveLightboxImg(null)}
              className="absolute top-4 right-4 p-2 text-white/80 hover:text-white rounded-full bg-white/10 cursor-pointer"
            >
              <X size={20} />
            </button>
            <div 
              className="max-w-xl w-full bg-[#FAF8F2] rounded-2xl overflow-hidden shadow-2xl p-2"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={activeLightboxImg.url} 
                alt={activeLightboxImg.caption}
                className="w-full max-h-[60vh] object-contain rounded-xl bg-black/5"
              />
              <div className="p-4 space-y-1">
                <div className="flex items-center justify-between text-[11px] text-[#6F786F]">
                  <span className="font-mono">{activeLightboxImg.year ? `${activeLightboxImg.year} Yılı Arşiv Belgesi` : 'Tarihî Kartpostal'}</span>
                  {activeLightboxImg.credit && <span>{activeLightboxImg.credit}</span>}
                </div>
                <p className="text-sm font-medium text-[#25352F] leading-snug">
                  {activeLightboxImg.caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  if (isDesktop) {
    return (
      <div 
        className="absolute right-0 top-0 bottom-0 w-[420px] bg-[#FAF8F2] shadow-2xl z-20 flex flex-col border-l border-[#dddcd1] transition-transform duration-200 ease-out"
        style={{ transform: place ? 'translateX(0)' : 'translateX(100%)' }}
      >
        {place && renderContent(place)}
      </div>
    );
  }

  return (
    <Sheet open={!!place} onOpenChange={open => { if (!open) onClose(); }}>
      <SheetContent side="bottom" className="h-[85dvh] p-0 flex flex-col bg-[#FAF8F2]">
        {place && renderContent(place)}
      </SheetContent>
    </Sheet>
  );
}

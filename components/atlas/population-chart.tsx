import { useState } from 'react';
import { 
  Users, 
  Calendar, 
  BookOpen, 
  ExternalLink, 
  Info, 
  PieChart as PieIcon, 
  BarChart3, 
  TrendingUp, 
  ChevronRight,
  Layers
} from 'lucide-react';
import { sources, isOttomanFoundation, type Place, type Observation } from '@/lib/atlas-data';

interface PopulationChartProps {
  place: Place;
  activeYear?: number;
  onSelectYear?: (year: number) => void;
}

// Semantik cemaat ve etnik/dini renkler
function getGroupColor(label: string): { bg: string; text: string; bar: string } {
  const l = label.toLowerCase();
  // Osmanlı / Müslüman / Türk / Boşnak -> #00694C (Osmanlı Yeşili)
  if (l.includes('müslüman') || l.includes('türk') || l.includes('boşnak')) {
    return { bg: 'bg-[#f0fdf7]', text: 'text-[#00694C]', bar: '#00694C' };
  }
  // Pomak / Yörük
  if (l.includes('pomak') || l.includes('yörük')) {
    return { bg: 'bg-emerald-50', text: 'text-emerald-800', bar: '#059669' };
  }
  // Sırp -> #A91101 (Tarihsel Al Kırmızı)
  if (l.includes('sırp')) {
    return { bg: 'bg-[#fff5f5]', text: 'text-[#A91101]', bar: '#A91101' };
  }
  // Rum / Ortodoks / Hıristiyan
  if (l.includes('rum') || l.includes('ortodoks') || l.includes('hıristiyan') || l.includes('gayrimüslim')) {
    return { bg: 'bg-blue-50', text: 'text-blue-800', bar: '#2563eb' };
  }
  // Bulgar
  if (l.includes('bulgar')) {
    return { bg: 'bg-teal-50', text: 'text-teal-800', bar: '#0d9488' };
  }
  // Musevi / Yahudi
  if (l.includes('musevi') || l.includes('yahudi')) {
    return { bg: 'bg-purple-50', text: 'text-purple-800', bar: '#7c3aed' };
  }
  // Hırvat / Katolik
  if (l.includes('hırvat') || l.includes('katolik')) {
    return { bg: 'bg-sky-50', text: 'text-sky-800', bar: '#0284c7' };
  }
  // Arnavut
  if (l.includes('arnavut')) {
    return { bg: 'bg-rose-50', text: 'text-rose-800', bar: '#e11d48' };
  }
  // Muhacir / Göç / Tahliye
  if (l.includes('mübadil') || l.includes('tahliye') || l.includes('göç') || l.includes('sevk')) {
    return { bg: 'bg-amber-50', text: 'text-amber-800', bar: '#ea580c' };
  }
  return { bg: 'bg-slate-50', text: 'text-slate-800', bar: '#64748b' };
}

// SVG Pasta / Halka Dilimi Oluşturucu
function createDonutSlicePath(
  cx: number, 
  cy: number, 
  rOut: number, 
  rIn: number, 
  startPct: number, 
  endPct: number,
  hasGap = false
): string {
  const pct = endPct - startPct;
  if (pct >= 0.999) {
    // Tam daire halka
    return `M ${cx} ${cy - rOut} A ${rOut} ${rOut} 0 1 1 ${cx} ${cy + rOut} A ${rOut} ${rOut} 0 1 1 ${cx} ${cy - rOut} M ${cx} ${cy - rIn} A ${rIn} ${rIn} 0 1 0 ${cx} ${cy + rIn} A ${rIn} ${rIn} 0 1 0 ${cx} ${cy - rIn} Z`;
  }

  const gapAngle = hasGap ? 0.015 : 0;
  const startAngle = -Math.PI / 2 + 2 * Math.PI * startPct + gapAngle;
  const endAngle = -Math.PI / 2 + 2 * Math.PI * endPct - gapAngle;

  const x1 = cx + rOut * Math.cos(startAngle);
  const y1 = cy + rOut * Math.sin(startAngle);
  const x2 = cx + rOut * Math.cos(endAngle);
  const y2 = cy + rOut * Math.sin(endAngle);
  const x3 = cx + rIn * Math.cos(endAngle);
  const y3 = cy + rIn * Math.sin(endAngle);
  const x4 = cx + rIn * Math.cos(startAngle);
  const y4 = cy + rIn * Math.sin(startAngle);
  const largeArc = pct > 0.5 ? 1 : 0;

  return `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${rOut} ${rOut} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} L ${x3.toFixed(2)} ${y3.toFixed(2)} A ${rIn} ${rIn} 0 ${largeArc} 0 ${x4.toFixed(2)} ${y4.toFixed(2)} Z`;
}

export function PopulationChart({ place, activeYear, onSelectYear }: PopulationChartProps) {
  const [chartType, setChartType] = useState<'pie' | 'bar'>('pie');
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Sayısal nüfus gözlemleri
  const popObservations = place.observations
    .filter(o => o.values && o.values.length > 0)
    .sort((a, b) => a.year - b.year);

  // Veri yoksa bilgilendirme kartı
  if (popObservations.length === 0) {
    return (
      <div className="p-4 bg-[#FAF8F2] border border-[#25352F]/15 rounded-xl text-xs text-[#6F786F] shadow-sm">
        <div className="flex items-center gap-1.5 font-semibold text-[#25352F] mb-1">
          <Users size={15} className="text-[#9D493A]" />
          <span>Demografi ve Sayım Durumu</span>
        </div>
        <p>
          Bu yerleşim için henüz sayısal nüfus dökümü girilmemiştir. Tahrir defteri ve salnâme araştırmaları devam etmektedir.
        </p>
      </div>
    );
  }

  // Varsayılan dönem indeksi
  const defaultIdx = activeYear
    ? popObservations.findIndex(o => o.year === activeYear) !== -1
      ? popObservations.findIndex(o => o.year === activeYear)
      : popObservations.reduce((prevIdx, curr, currIdx) => {
          const prevDiff = Math.abs(popObservations[prevIdx].year - activeYear);
          const currDiff = Math.abs(curr.year - activeYear);
          return currDiff < prevDiff ? currIdx : prevIdx;
        }, 0)
    : 0;

  const [selectedIdx, setSelectedIdx] = useState<number>(defaultIdx);
  const currentObs: Observation = popObservations[selectedIdx] || popObservations[0];
  const sourceObj = sources.find(s => s.id === currentObs.source);

  // Toplam ve oran hesaplama
  const rawValues = currentObs.values ?? [];
  const totalValue = rawValues.reduce((acc, v) => acc + v.value, 0) || 1;

  // Pasta dilimleri geometrisi
  let runningPct = 0;
  const slices = rawValues.map((v, i) => {
    const fraction = v.value / totalValue;
    const startPct = runningPct;
    const endPct = runningPct + fraction;
    runningPct = endPct;
    const style = getGroupColor(v.label);
    return {
      index: i,
      label: v.label,
      value: v.value,
      pct: fraction * 100,
      fraction,
      startPct,
      endPct,
      color: style.bar,
      bg: style.bg,
      textColor: style.text
    };
  });

  const activeHoverSlice = hoveredIdx !== null ? slices[hoveredIdx] : null;

  return (
    <div className="population-chart-card bg-white border border-[#25352F]/15 rounded-2xl p-4 shadow-sm space-y-4">
      {/* Üst Başlık & Rozetler */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="eyebrow text-[11px] font-semibold uppercase tracking-wider text-[#9D493A]">
              Nüfus ve Demografi
            </span>
            {place.layer === 'settlement' && (
              isOttomanFoundation(place) ? (
                <span 
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border shadow-xs" 
                  style={{ backgroundColor: '#f0fdf7', color: '#00694C', borderColor: '#00694C' }}
                >
                  🟢 Osmanlı Kuruluşu
                </span>
              ) : (
                <span 
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border shadow-xs" 
                  style={{ backgroundColor: '#fff5f5', color: '#A91101', borderColor: '#A91101' }}
                >
                  🔴 Tarihsel Yerleşim
                </span>
              )
            )}
          </div>
          <h4 className="font-serif text-lg font-bold text-[#25352F] mt-1">
            Tarihsel Cemaat ve Nüfus Dağılımı
          </h4>
        </div>

        {/* Grafik Türü Değiştirici: Pasta vs Çubuk */}
        <div className="flex items-center bg-[#FAF8F2] p-0.5 rounded-lg border border-[#25352F]/15 shrink-0">
          <button
            type="button"
            onClick={() => setChartType('pie')}
            className={`p-1.5 rounded-md transition-all flex items-center gap-1 text-xs ${
              chartType === 'pie'
                ? 'bg-white shadow-xs font-semibold text-[#9D493A]'
                : 'text-[#6F786F] hover:text-[#25352F]'
            }`}
            title="Pasta / Halka Grafiği"
            aria-label="Pasta Grafiği"
          >
            <PieIcon size={14} />
            <span className="hidden sm:inline">Pasta</span>
          </button>
          <button
            type="button"
            onClick={() => setChartType('bar')}
            className={`p-1.5 rounded-md transition-all flex items-center gap-1 text-xs ${
              chartType === 'bar'
                ? 'bg-white shadow-xs font-semibold text-[#9D493A]'
                : 'text-[#6F786F] hover:text-[#25352F]'
            }`}
            title="Çubuk Dağılım Grafiği"
            aria-label="Çubuk Grafiği"
          >
            <BarChart3 size={14} />
            <span className="hidden sm:inline">Çubuk</span>
          </button>
        </div>
      </div>

      {/* Sayım Dönemleri Seçici Butonları */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs text-[#6F786F]">
          <span className="font-medium flex items-center gap-1">
            <Calendar size={12} className="text-[#9D493A]" /> Sayım ve Tahrir Kayıtları:
          </span>
          <span className="text-[11px] font-mono">{popObservations.length} Dönem</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {popObservations.map((obs, idx) => {
            const isSelected = idx === selectedIdx;
            return (
              <button
                key={`${obs.year}-${idx}`}
                type="button"
                onClick={() => {
                  setSelectedIdx(idx);
                  setHoveredIdx(null);
                  onSelectYear?.(obs.year);
                }}
                className={`px-3 py-1.5 text-xs rounded-xl font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#9D493A] text-white shadow-md font-semibold ring-2 ring-[#9D493A]/25'
                    : 'bg-[#FAF8F2] text-[#25352F] border border-[#25352F]/15 hover:bg-stone-100 hover:text-[#9D493A]'
                }`}
              >
                <span className="font-bold">{obs.year}</span>
                <span className={`text-[10px] px-1 py-0.2 rounded ${isSelected ? 'bg-white/20 text-white' : 'bg-black/5 text-[#6F786F]'}`}>
                  {obs.unit}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Aktif Dönem Özeti ve Grafik Kartı */}
      <div className="bg-[#FAF8F2] border border-[#25352F]/15 rounded-xl p-4 space-y-4">
        {/* Başlık ve Toplam Göstergesi */}
        <div className="flex items-center justify-between text-xs pb-3 border-b border-[#25352F]/10">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-xl font-bold text-[#9D493A]">{currentObs.year}</span>
              <span className="text-[#64748b] font-medium text-xs">
                · {currentObs.scope ?? place.name}
              </span>
            </div>
            <span className="text-[11px] text-[#64748b] block mt-0.5">
              {currentObs.dimension === 'religion' ? 'Dinî / Cemaat Tasnifi' : 'Etnik ve Sosyal Kayıt'}
            </span>
          </div>
          <div className="text-right">
            <span className="text-[11px] text-[#64748b] block font-medium">Toplam Kayıt:</span>
            <span className="font-bold text-base text-[#0f172a] font-mono">
              {totalValue.toLocaleString('tr')} <span className="text-xs font-normal text-[#64748b]">{currentObs.unit}</span>
            </span>
          </div>
        </div>

        {/* 1. PASTA DİLİMİ GRAFİĞİ (PIE / DONUT CHART) */}
        {chartType === 'pie' && (
          <div className="flex flex-col items-center py-2">
            <div className="relative w-[190px] h-[190px] flex items-center justify-center">
              <svg 
                viewBox="0 0 200 200" 
                className="w-full h-full transform transition-transform duration-300 drop-shadow-sm"
              >
                {slices.map((slice) => {
                  const isHovered = hoveredIdx === slice.index;
                  const rOut = isHovered ? 85 : 79;
                  const rIn = isHovered ? 43 : 47;
                  const d = createDonutSlicePath(100, 100, rOut, rIn, slice.startPct, slice.endPct, slices.length > 1);

                  return (
                    <path
                      key={slice.index}
                      d={d}
                      fill={slice.color}
                      stroke={isHovered ? '#ffffff' : '#FAF8F2'}
                      strokeWidth={isHovered ? 2.5 : 1.5}
                      className="transition-all duration-200 cursor-pointer hover:opacity-95"
                      onMouseEnter={() => setHoveredIdx(slice.index)}
                      onMouseLeave={() => setHoveredIdx(null)}
                    >
                      <title>{`${slice.label}: ${slice.value.toLocaleString('tr')} ${currentObs.unit} (%${slice.pct.toFixed(1)})`}</title>
                    </path>
                  );
                })}
              </svg>

              {/* Halka Merkezindeki Dinamik Metin */}
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none p-2"
                style={{ width: '94px', height: '94px', margin: 'auto' }}
              >
                {activeHoverSlice ? (
                  <>
                    <span 
                      className="text-[10px] font-bold truncate max-w-[84px] leading-tight"
                      style={{ color: activeHoverSlice.color }}
                    >
                      {activeHoverSlice.label}
                    </span>
                    <span className="font-mono text-sm font-bold text-[#0f172a] leading-tight my-0.5">
                      {activeHoverSlice.value.toLocaleString('tr')}
                    </span>
                    <span 
                      className="text-[11px] font-bold font-mono px-1 rounded"
                      style={{ backgroundColor: activeHoverSlice.bg, color: activeHoverSlice.color }}
                    >
                      %{activeHoverSlice.pct.toFixed(1)}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-[9px] uppercase tracking-wider font-semibold text-[#64748b]">
                      Toplam
                    </span>
                    <span className="font-serif text-sm font-bold text-[#0f172a] leading-tight my-0.5">
                      {totalValue.toLocaleString('tr')}
                    </span>
                    <span className="text-[10px] text-[#64748b] font-medium">
                      {currentObs.unit}
                    </span>
                  </>
                )}
              </div>
            </div>

            <p className="text-[11px] text-[#64748b] mt-2 italic flex items-center gap-1">
              <span>Dilimlerin üzerine gelerek cemaat detayını görebilirsiniz</span>
            </p>
          </div>
        )}

        {/* 2. ÇUBUK GRAFİK GÖRÜNÜMÜ (STACKED BAR) */}
        {chartType === 'bar' && (
          <div className="space-y-2 py-1">
            <div className="w-full h-3.5 rounded-full overflow-hidden flex bg-stone-200 shadow-inner">
              {slices.map((slice) => (
                <div
                  key={slice.index}
                  style={{ width: `${slice.pct}%`, backgroundColor: slice.color }}
                  title={`${slice.label}: ${slice.value.toLocaleString('tr')} ${currentObs.unit} (%${slice.pct.toFixed(1)})`}
                  className={`h-full transition-all duration-300 cursor-pointer ${
                    hoveredIdx === slice.index ? 'brightness-110 ring-2 ring-white ring-inset' : ''
                  }`}
                  onMouseEnter={() => setHoveredIdx(slice.index)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-[#64748b]">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
        )}

        {/* Cemaat ve Demografi Listesi (Etkileşimli Lejant) */}
        <div className="space-y-2 pt-2 border-t border-[#25352F]/10">
          {slices.map((slice) => {
            const isHovered = hoveredIdx === slice.index;
            return (
              <div 
                key={slice.index} 
                className={`p-2 rounded-xl transition-all border cursor-pointer ${
                  isHovered 
                    ? 'bg-white border-[#25352F]/25 shadow-xs translate-x-1' 
                    : 'bg-white/60 border-transparent hover:bg-white hover:border-[#25352F]/15'
                }`}
                onMouseEnter={() => setHoveredIdx(slice.index)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full inline-block shrink-0 shadow-xs"
                      style={{ backgroundColor: slice.color }}
                    />
                    <span className="font-semibold text-[#1e293b]">{slice.label}</span>
                  </div>
                  <div className="font-mono text-right flex items-center gap-1.5">
                    <span className="font-bold text-[#0f172a]">{slice.value.toLocaleString('tr')}</span>
                    <span className="text-[10px] text-[#64748b]">{currentObs.unit}</span>
                    <span 
                      className="text-[11px] font-bold px-1.5 py-0.2 rounded"
                      style={{ backgroundColor: slice.bg, color: slice.color }}
                    >
                      %{slice.pct.toFixed(1)}
                    </span>
                  </div>
                </div>

                {/* İlerleme Çubuğu */}
                <div className="w-full bg-stone-100 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{ width: `${slice.pct}%`, backgroundColor: slice.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Metinsel Arşiv Anlatımı */}
        {currentObs.text && (
          <p className="text-[11px] text-[#475569] leading-relaxed italic pt-2 border-t border-stone-200">
            "{currentObs.text}"
          </p>
        )}

        {/* Açıklayıcı Not / Metodoloji */}
        {currentObs.note && (
          <div className="flex items-start gap-1.5 text-[11px] text-amber-950 bg-amber-50/90 p-2.5 rounded-lg border border-amber-200/80">
            <Info size={14} className="shrink-0 mt-0.5 text-amber-700" />
            <span className="leading-snug">{currentObs.note}</span>
          </div>
        )}
      </div>

      {/* Çok Dönemli Karşılaştırmalı Özet */}
      {popObservations.length > 1 && (
        <div className="pt-2 border-t border-[#25352F]/10 space-y-2">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#25352F] uppercase tracking-wide">
            <TrendingUp size={13} className="text-[#9D493A]" />
            <span>Tarihsel Değişim Özeti ({popObservations.length} Sayım)</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {popObservations.map((obs, i) => {
              const obsTotal = obs.values?.reduce((a, b) => a + b.value, 0) ?? 0;
              const isSelected = i === selectedIdx;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setSelectedIdx(i);
                    setHoveredIdx(null);
                  }}
                  className={`p-2.5 rounded-xl text-left transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-[#9D493A]/5 border-[#9D493A] shadow-xs ring-1 ring-[#9D493A]'
                      : 'bg-[#FAF8F2] border-[#25352F]/10 hover:border-[#9D493A]/40 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#9D493A] font-serif">{obs.year}</span>
                    <span className="text-[10px] text-[#64748b] bg-black/5 px-1 rounded">{obs.unit}</span>
                  </div>
                  <span className="text-sm font-bold text-[#0f172a] block font-mono mt-0.5">
                    {obsTotal.toLocaleString('tr')}
                  </span>
                  <span className="text-[10px] text-[#64748b] block truncate mt-0.5">
                    {obs.scope ? obs.scope.split(';')[0] : 'Şehir merkezi'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Birincil Kaynak Kartı */}
      {sourceObj && (
        <div className="text-[11px] text-[#64748b] bg-[#FAF8F2] p-3 rounded-xl border border-[#25352F]/10 flex items-start justify-between gap-2 shadow-xs">
          <div>
            <div className="flex items-center gap-1 font-semibold text-[#25352F]">
              <BookOpen size={13} className="text-[#9D493A]" />
              <span>{sourceObj.title}</span>
            </div>
            <p className="mt-0.5 text-[#475569] leading-snug">{sourceObj.author} ({sourceObj.date})</p>
            {sourceObj.locator && (
              <p className="text-[10px] text-[#64748b] mt-0.5">Arşiv: {sourceObj.locator}</p>
            )}
          </div>
          {sourceObj.url && (
            <a
              href={sourceObj.url}
              target="_blank"
              rel="noreferrer"
              className="text-[#9D493A] hover:underline shrink-0 p-1.5 rounded-md hover:bg-stone-200/60 flex items-center gap-0.5 transition-colors"
              title="Birincil kaynak veya akademik maddeye git"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

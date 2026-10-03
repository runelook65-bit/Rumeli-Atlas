import { useState, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Info, Users, BookOpen } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { getBalkanDemographicsForYear, DEMOGRAPHIC_EVIDENCE_LABELS, DEMOGRAPHIC_SCOPE_NOTE } from '@/lib/atlas-data';

import { useStore, type TemporalMode } from '@/lib/store';
import { getAdjacentBreakpoint } from '@/lib/historia-events';

interface TemporalNavigatorProps {
  year?: number;
  onYearChange?: (y: number) => void;
  playing?: boolean;
  onPlayingToggle?: () => void;
  temporalMode?: TemporalMode;
  onTemporalModeChange?: (m: TemporalMode) => void;
}

const MILESTONES = [
  {year: 1354, label: 'Osmanlı ayak izi', short: '1354'},
  {year: 1453, label: 'İstanbul', short: '1453'},
  {year: 1699, label: 'Karlofça', short: '1699'},
  {year: 1878, label: 'Berlin Antlaşması', short: '1878'},
  {year: 1912, label: 'Balkan Savaşı', short: '1912'},
  {year: 1923, label: 'Lozan', short: '1923'},
  {year: 1950, label: 'Göç', short: '1950s'},
  {year: 1989, label: 'Bulgaristan Göçü', short: '1989'},
  {year: 2026, label: 'Günümüz', short: '2026'},
];

export function TemporalNavigator({
  year: propYear,
  onYearChange: propOnYearChange,
  playing: propPlaying,
  onPlayingToggle: propOnPlayingToggle,
  temporalMode: propTemporalMode,
  onTemporalModeChange: propOnTemporalModeChange
}: TemporalNavigatorProps = {}) {
  const storeYear = useStore(s => s.year);
  const storeSetYear = useStore(s => s.setYear);
  const storePlaying = useStore(s => s.playing);
  const storeSetPlaying = useStore(s => s.setPlaying);
  const storeTemporalMode = useStore(s => s.temporalMode);
  const storeSetTemporalMode = useStore(s => s.setTemporalMode);

  const year = propYear !== undefined ? propYear : storeYear;
  const onYearChange = propOnYearChange || ((y: number) => {
    storeSetYear(y);
    storeSetPlaying(false);
  });
  const playing = propPlaying !== undefined ? propPlaying : storePlaying;
  const onPlayingToggle = propOnPlayingToggle || (() => {
    if (year >= 2026) storeSetYear(1354);
    storeSetPlaying(!playing);
  });
  const temporalMode = propTemporalMode !== undefined ? propTemporalMode : storeTemporalMode;
  const onTemporalModeChange = propOnTemporalModeChange || storeSetTemporalMode;
  const [isDesktop, setIsDesktop] = useState(true);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 761px)');
    setIsDesktop(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const handleEditSubmit = (e: React.KeyboardEvent | React.FocusEvent) => {
    if ('key' in e && e.key !== 'Enter') return;
    const v = parseInt(editValue);
    if (!isNaN(v) && v >= 1354 && v <= 2026) {
      onYearChange(v);
    }
    setEditing(false);
  };

  const currentMilestone = MILESTONES.find(m => m.year === year);
  const demo = getBalkanDemographicsForYear(year);

  const desktopContent = (
    <div className="h-[96px] bg-[#FAF8F2] border-t border-[#dddcd1] flex items-center px-6 sm:px-8 gap-5 w-full select-none">
      {/* Yıl ve Kilometre Taşı Göstergesi */}
      <div className="flex-shrink-0 w-28 sm:w-32 border-r border-[#dddcd1] pr-3 sm:pr-4">
        {editing ? (
          <input
            autoFocus
            className="w-full text-4xl font-serif text-primary bg-transparent outline-none border-b border-primary"
            value={editValue}
            onChange={e => setEditValue(e.target.value)}
            onBlur={handleEditSubmit}
            onKeyDown={handleEditSubmit}
          />
        ) : (
          <button 
            onClick={() => { setEditValue(year.toString()); setEditing(true); }} 
            className="text-left w-full cursor-pointer group"
            title="Yılı doğrudan girmek için tıklayın"
          >
            <strong className="block text-3xl sm:text-4xl font-serif text-primary lining-nums group-hover:text-[#00694C] transition-colors">
              {year}
            </strong>
            <span className="block text-[10px] text-gray-500 tracking-wider h-4 overflow-hidden text-ellipsis whitespace-nowrap uppercase font-medium">
              {currentMilestone ? currentMilestone.label : 'Osmanlı Dönemi'}
            </span>
          </button>
        )}
      </div>

      {/* Oynat / Durdur & Kırılma Noktası Atlama (Historia Modeli) */}
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <button
          type="button"
          className="w-8 h-8 rounded-full border border-[#dddcd1] bg-white text-[#6F786F] hover:text-[#9D493A] hover:border-[#9D493A]/40 flex items-center justify-center transition-all cursor-pointer"
          onClick={() => {
            const bp = getAdjacentBreakpoint(year, -1);
            if (bp !== null) onYearChange(bp);
          }}
          title="Önceki Kırılma Noktası (Shift+←)"
          aria-label="Önceki Kırılma Noktası"
        >
          <ChevronLeft size={16} />
        </button>

        <button 
          className="w-10 h-10 rounded-full bg-primary hover:bg-[#7b3225] text-white flex items-center justify-center shadow-sm transition-all duration-150 cursor-pointer"
          onClick={onPlayingToggle}
          aria-label={playing ? "Zaman akışını duraklat (Boşluk)" : "Zaman akışını oynat (Boşluk)"}
        >
          {playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5" />}
        </button>

        <button
          type="button"
          className="w-8 h-8 rounded-full border border-[#dddcd1] bg-white text-[#6F786F] hover:text-[#9D493A] hover:border-[#9D493A]/40 flex items-center justify-center transition-all cursor-pointer"
          onClick={() => {
            const bp = getAdjacentBreakpoint(year, 1);
            if (bp !== null) onYearChange(bp);
          }}
          title="Sonraki Kırılma Noktası (Shift+→)"
          aria-label="Sonraki Kırılma Noktası"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Orta Bölüm: Demografi Oranı + Zaman Çizgisi Slider */}
      <div className="flex-1 min-w-0 flex flex-col justify-center py-1">
        {/* Balkanlar Müslüman Nüfusu ve Yüzdelik Oranı */}
        <div className="flex items-center justify-between text-xs mb-1.5 flex-wrap gap-x-3 gap-y-1">
          <div className="flex items-center gap-2">
            <div 
              className="flex items-center gap-1.5 bg-[#f0fdf7] border border-[#00694C]/25 px-2.5 py-0.5 rounded-full shadow-2xs"
              title={`${demo.note}\nKaynak: ${demo.source}\n${DEMOGRAPHIC_SCOPE_NOTE}`}
            >
              <span className="w-2 h-2 rounded-full bg-[#00694C]" />
              <span className="text-[11px] font-bold text-[#00694C]">
                Balkanlar Müslüman Nüfusu:
              </span>
              <span className="font-serif font-bold text-xs text-[#0f172a] font-mono">
                {demo.muslim.toLocaleString('tr')}
              </span>
              <span 
                className="text-[10px] font-bold px-1.5 py-0.2 rounded-full text-white shadow-2xs"
                style={{ backgroundColor: '#00694C' }}
              >
                %{demo.pct.toFixed(1)}
              </span>

              {/* Güvenilirlik / Yöntem Rozeti */}
              <span 
                className={`text-[9px] font-medium px-1.5 py-0.2 rounded ${
                  demo.kind === 'sayim-temelli' 
                    ? 'bg-emerald-100 text-emerald-800' 
                    : demo.kind === 'kaynak-sentezi' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-amber-100 text-amber-800'
                }`}
                title={DEMOGRAPHIC_EVIDENCE_LABELS[demo.kind]}
              >
                {demo.interpolated ? 'Ara Değer' : DEMOGRAPHIC_EVIDENCE_LABELS[demo.kind]}
              </span>
            </div>

            {/* Yüzdelik Dağılım Mini Çubuğu */}
            <div className="hidden xl:flex items-center gap-1.5 text-[10px] text-gray-500">
              <div 
                className="w-20 h-2 bg-stone-200 rounded-full overflow-hidden flex shadow-inner border border-black/5"
                title={`Müslüman (Millet-i İslâm): %${demo.pct.toFixed(1)} | Gayrimüslim: %${(100 - demo.pct).toFixed(1)}`}
              >
                <div 
                  className="h-full transition-all duration-300" 
                  style={{ width: `${demo.pct}%`, backgroundColor: '#00694C' }} 
                />
                <div 
                  className="h-full transition-all duration-300" 
                  style={{ width: `${100 - demo.pct}%`, backgroundColor: '#A91101' }} 
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#6F786F]">
            <span className="text-[11px]">
              Toplam Balkan Nüfusu: <b className="text-[#0f172a] font-mono">{demo.total.toLocaleString('tr')}</b>
            </span>
            <span className="hidden lg:inline text-stone-300">·</span>
            <span 
              className="hidden lg:inline text-[10px] text-[#6F786F] max-w-[240px] truncate" 
              title={`${demo.note} (${demo.source})`}
            >
              {demo.source}
            </span>
          </div>
        </div>

        {/* Zaman Çizgisi Slider */}
        <Slider
          min={1354}
          max={2026}
          step={1}
          value={[year]}
          onValueChange={v => onYearChange(v[0])}
          className="my-1"
        />

        {/* Kilometre Taşları */}
        <div className="flex justify-between mt-1 px-1">
          {MILESTONES.map(m => (
            <button
              key={m.year}
              className={`text-[10px] hover:text-primary transition-colors cursor-pointer ${m.year === year ? 'text-primary font-bold' : 'text-gray-500'}`}
              onClick={() => onYearChange(m.year)}
              title={m.label}
            >
              {m.short}
            </button>
          ))}
        </div>
      </div>

      {/* Sağ Taraf: OHM Adım Atlama, Mod Değiştirici ve Metodoloji Notu */}
      <div className="flex-shrink-0 ml-2 flex flex-col items-end gap-1.5">
        <div className="flex items-center gap-2">
          {/* OHM Zaman Atlama Adımı (Time Jump) */}
          <div className="hidden sm:flex items-center bg-white border border-stone-200 rounded-full p-0.5 text-[10px] font-mono shadow-2xs" title="OpenHistoricalMap Zaman Atlama Adımı (Time Jump)">
            <span className="text-stone-400 pl-2 pr-1 text-[9px] font-sans font-medium">Adım:</span>
            {[1, 5, 10, 25].map(step => (
              <button
                key={step}
                type="button"
                onClick={() => useStore.getState().setOhmStepAmount(step)}
                className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                  useStore(s => s.ohmStepAmount) === step 
                    ? 'bg-[#9D493A] text-white font-bold shadow-2xs' 
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {step}Y
              </button>
            ))}
          </div>

          <div className="flex items-center bg-white border border-gray-200 rounded-full p-0.5 text-xs shadow-2xs">
            <button 
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${temporalMode === 'snapshot' ? 'bg-[#FAF8F2] text-[#9D493A] font-bold shadow-2xs' : 'text-gray-600'}`}
              onClick={() => onTemporalModeChange?.('snapshot')}
            >
              Snapshot
            </button>
            <button 
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${temporalMode === 'history' ? 'bg-[#FAF8F2] text-[#9D493A] font-bold shadow-2xs' : 'text-gray-600'}`}
              onClick={() => onTemporalModeChange?.('history')}
            >
              History
            </button>
          </div>
        </div>
        <p 
          className="text-[9px] text-gray-400 w-44 text-right leading-tight" 
          title="Tarihsel demografi verileri Ömer Lütfi Barkan, Kemal Karpat ve Justin McCarthy araştırmalarına dayanır."
        >
          K. Karpat & Ö. L. Barkan tarihsel demografi sentezi.
        </p>
      </div>
    </div>
  );

  const mobileContent = (
    <div className="h-16 bg-[#FAF8F2] border-t border-[#dddcd1] flex items-center px-3 justify-between w-full">
      <div className="flex items-center gap-1.5">
        <button className="p-1.5 text-gray-600" onClick={() => onYearChange(Math.max(1354, year - 1))}>
          <ChevronLeft size={18} />
        </button>
        <button onClick={() => setSheetOpen(true)} className="text-left">
          <strong className="text-xl font-serif text-primary lining-nums block">{year}</strong>
          <span className="text-[9px] font-bold text-[#00694C] block leading-none">
            %{demo.pct.toFixed(0)} Türk/Müs.
          </span>
        </button>
        <button className="p-1.5 text-gray-600" onClick={() => onYearChange(Math.min(2026, year + 1))}>
          <ChevronRight size={18} />
        </button>
      </div>
      
      <div className="flex-1 mx-3 flex flex-col justify-center">
        <Slider
          min={1354}
          max={2026}
          step={1}
          value={[year]}
          onValueChange={v => onYearChange(v[0])}
        />
      </div>

      <button 
        className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-xs"
        onClick={onPlayingToggle}
      >
        {playing ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" className="ml-0.5" />}
      </button>
    </div>
  );

  return (
    <>
      {isDesktop ? desktopContent : mobileContent}
      {!isDesktop && (
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetContent side="bottom" className="p-6 bg-[#FAF8F2] rounded-t-[24px]">
             <div className="flex flex-col gap-6 py-2">
                <div className="text-center">
                  <strong className="text-4xl font-serif text-primary lining-nums">{year}</strong>
                  <p className="text-xs text-gray-500 mt-1">{currentMilestone?.label}</p>
                </div>

                {/* Mobil Demografi Özeti */}
                <div className="bg-white border border-[#25352F]/15 p-3.5 rounded-xl shadow-xs space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#00694C] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#00694C]" />
                      Balkanlar Türk & Müslüman Nüfusu:
                    </span>
                    <span className="font-bold text-sm text-[#00694C] font-mono">
                      %{demo.pct.toFixed(1)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-stone-600 font-mono">
                    <span>Müslüman Nüfus: <b>{demo.muslim.toLocaleString('tr')}</b></span>
                    <span>Toplam: <b>{demo.total.toLocaleString('tr')}</b></span>
                  </div>
                  <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden flex shadow-inner">
                    <div className="h-full bg-[#00694C]" style={{ width: `${demo.pct}%` }} />
                    <div className="h-full bg-[#A91101]" style={{ width: `${100 - demo.pct}%` }} />
                  </div>
                  <p className="text-[10px] text-gray-500 italic pt-1 border-t border-stone-100">
                    {demo.note} ({demo.source})
                  </p>
                </div>

                <Slider
                  min={1354}
                  max={2026}
                  step={1}
                  value={[year]}
                  onValueChange={v => onYearChange(v[0])}
                />

                <div className="grid grid-cols-3 gap-2">
                  {MILESTONES.map(m => (
                    <button
                      key={m.year}
                      className={`py-2 text-xs rounded border ${m.year === year ? 'border-primary bg-primary/5 text-primary font-bold' : 'border-gray-200 bg-white text-gray-600'}`}
                      onClick={() => onYearChange(m.year)}
                    >
                      {m.short}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-center bg-white border border-gray-200 rounded-full p-1 text-sm shadow-xs mx-auto">
                  <button 
                    className={`px-4 py-1.5 rounded-full transition-colors ${temporalMode === 'snapshot' ? 'bg-[#FAF8F2] text-[#9D493A] font-bold' : 'text-gray-600'}`}
                    onClick={() => onTemporalModeChange?.('snapshot')}
                  >
                    Snapshot
                  </button>
                  <button 
                    className={`px-4 py-1.5 rounded-full transition-colors ${temporalMode === 'history' ? 'bg-[#FAF8F2] text-[#9D493A] font-bold' : 'text-gray-600'}`}
                    onClick={() => onTemporalModeChange?.('history')}
                  >
                    History
                  </button>
                </div>
             </div>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
}

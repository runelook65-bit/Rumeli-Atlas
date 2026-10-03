import { useState } from 'react';
import { 
  X, ShieldCheck, LocateFixed, BookOpen, ChevronDown, ChevronRight, 
  MapPin, Compass, FileText, ArrowRightLeft, Calendar, Building, 
  Landmark, History, Search 
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { places, sources, type Layer, regionalModules, type RegionalModule, regionPresets } from '@/lib/atlas-data';
import { MIGRATION_WAVES, TOPONYM_TRANSFORMATIONS, type MigrationWave } from '@/lib/migration-data';
import { layerInfo } from './atlas-sidebar';
import { useStore } from '@/lib/store';

interface LayerDrawerProps {
  activeCategory?: string | null;
  onClose?: () => void;
  activeLayers?: Layer[];
  mode?: 'atlas' | 'lost';
  onModeChange?: (mode: 'atlas' | 'lost') => void;
  year?: number;
  onYearChange?: (year: number) => void;
  onToggleLayer?: (id: Layer) => void;
  names?: boolean;
  onNamesChange?: (checked: boolean) => void;
  boundaries?: boolean;
  onBoundariesChange?: (checked: boolean) => void;
  streets?: boolean;
  onStreetsChange?: (checked: boolean) => void;
  onFlyToPilot?: () => void;
  onSelectBounds?: (bounds: [[number, number], [number, number]]) => void;
  onOpenArchive?: () => void;
  onOpenSources?: () => void;
}

export function LayerDrawer({
  activeCategory: propActiveCategory,
  onClose: propOnClose,
  activeLayers: propActiveLayers,
  mode: propMode,
  onModeChange: propOnModeChange,
  year: propYear,
  onYearChange: propOnYearChange,
  onToggleLayer: propOnToggleLayer,
  names: propNames,
  onNamesChange: propOnNamesChange,
  boundaries: propBoundaries,
  onBoundariesChange: propOnBoundariesChange,
  streets: propStreets,
  onStreetsChange: propOnStreetsChange,
  onFlyToPilot: propOnFlyToPilot,
  onSelectBounds: propOnSelectBounds,
  onOpenArchive: propOnOpenArchive,
  onOpenSources: propOnOpenSources
}: LayerDrawerProps = {}) {
  const storeCategory = useStore(s => s.activeCategory);
  const storeSetCategory = useStore(s => s.setActiveCategory);
  const storeLayers = useStore(s => s.activeLayers);
  const storeToggleLayer = useStore(s => s.toggleLayer);
  const storeMode = useStore(s => s.mode);
  const storeSetMode = useStore(s => s.setMode);
  const storeYear = useStore(s => s.year);
  const storeSetYear = useStore(s => s.setYear);
  const storeNames = useStore(s => s.names);
  const storeSetNames = useStore(s => s.setNames);
  const storeBoundaries = useStore(s => s.boundaries);
  const storeSetBoundaries = useStore(s => s.setBoundaries);
  const storeStreets = useStore(s => s.streets);
  const storeSetStreets = useStore(s => s.setStreets);
  const storeSetArchiveOpen = useStore(s => s.setArchiveOpen);
  const storeSetSourcesOpen = useStore(s => s.setSourcesOpen);
  const storeFlyToPilot = useStore(s => s.flyToPilot);
  const storeSetRegion = useStore(s => s.setSelectedRegion);
  const storeMapHandle = useStore(s => s.mapHandle);
  const storeSetSelectedPlace = useStore(s => s.setSelectedPlace);

  const activeCategory = propActiveCategory !== undefined ? propActiveCategory : storeCategory;
  const onClose = propOnClose || (() => storeSetCategory(null));
  const activeLayers = propActiveLayers !== undefined ? propActiveLayers : storeLayers;
  const onToggleLayer = propOnToggleLayer || storeToggleLayer;
  const mode = propMode !== undefined ? propMode : storeMode;
  const onModeChange = propOnModeChange || storeSetMode;
  const year = propYear !== undefined ? propYear : storeYear;
  const onYearChange = propOnYearChange || ((y: number) => { storeSetYear(y); useStore.getState().setPlaying(false); });
  const names = propNames !== undefined ? propNames : storeNames;
  const onNamesChange = propOnNamesChange || storeSetNames;
  const boundaries = propBoundaries !== undefined ? propBoundaries : storeBoundaries;
  const onBoundariesChange = propOnBoundariesChange || storeSetBoundaries;
  const streets = propStreets !== undefined ? propStreets : storeStreets;
  const onStreetsChange = propOnStreetsChange || storeSetStreets;
  const onFlyToPilot = propOnFlyToPilot || storeFlyToPilot;
  const onOpenArchive = propOnOpenArchive || (() => storeSetArchiveOpen(true));
  const onOpenSources = propOnOpenSources || (() => storeSetSourcesOpen(true));
  const onSelectBounds = propOnSelectBounds || ((bounds: [[number, number], [number, number]]) => {
    const matchingPreset = regionPresets.find(r => 
      Math.abs(r.bounds[0][0] - bounds[0][0]) < 0.2 && 
      Math.abs(r.bounds[1][1] - bounds[1][1]) < 0.2
    );
    if (matchingPreset) {
      storeSetRegion(matchingPreset);
    } else {
      storeSetRegion(regionPresets[0]);
    }
    storeMapHandle?.fitBounds(bounds, {padding: 30, duration: 800});
    storeSetSelectedPlace(null);
  });
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(null);
  const [expandedWaveId, setExpandedWaveId] = useState<string | null>(null);
  const [showToponyms, setShowToponyms] = useState(false);
  const [toponymSearch, setToponymSearch] = useState('');

  const settlementCount = places.filter(p => p.layer === 'settlement').length;
  const heritageCount = places.filter(p => p.layer === 'heritage').length;
  const sourceCount = sources.length;

  if (!activeCategory) return null;

  const renderLayer = (id: Layer) => {
    const l = layerInfo.find(x => x.id === id);
    if (!l) return null;
    return (
      <div className={`layer-row ${!l.available ? 'unavailable' : ''}`} key={l.id}>
        <span className="layer-dot" style={{ background: l.color }} />
        <label htmlFor={`layer-${l.id}`}>
          <b>{l.name}</b>
          <small>{l.sub}</small>
        </label>
        <Switch
          id={`layer-${l.id}`}
          aria-label={l.name}
          disabled={!l.available || mode === 'lost'}
          checked={mode === 'lost' ? l.id === 'heritage' : activeLayers.includes(l.id)}
          onCheckedChange={() => onToggleLayer(l.id)}
        />
      </div>
    );
  };

  const getReadinessBadgeClass = (readiness: RegionalModule['readiness']) => {
    switch (readiness) {
      case 'pilot_expanded':
        return 'bg-[#9D493A]/15 text-[#9D493A] border-[#9D493A]/30';
      case 'research_ready':
        return 'bg-[#637C6D]/15 text-[#3F5B4B] border-[#637C6D]/30';
      case 'staging':
      default:
        return 'bg-[#B38A4A]/15 text-[#8A6328] border-[#B38A4A]/30';
    }
  };

  return (
    <div className={`layer-drawer ${activeCategory ? 'open' : ''}`}>
      <button className="drawer-close" onClick={onClose} aria-label="Kapat">
        <X size={20} />
      </button>

      <div className="drawer-content">
        {activeCategory === 'human' && (
          <>
            <h3>İnsan Coğrafyası</h3>
            <div className="layer-list mt-6">
              {renderLayer('settlement')}
              {renderLayer('ethnicity')}
              {renderLayer('religion')}
              {renderLayer('language')}
              {renderLayer('community')}
            </div>
            <div className="mt-4 p-3 bg-emerald-50/80 border border-emerald-200 rounded-md text-xs text-emerald-950 leading-relaxed">
              <span className="font-semibold text-emerald-950 block mb-1">
                🟢 Osmanlı Kuruluşu & 🔴 Tarihsel Yerleşimler:
              </span>
              Osmanlı Devleti tarafından sıfırdan kurulan yerleşim yerleri (Saraybosna, Tiran, İlbasan, Yeni Pazar, Tatar Pazarcık, Kırcaali vb.) <strong>yeşil</strong> renkle; fethedilen ve devralınan tarihsel şehirler (Selanik, Belgrad, Filibe, Sofya, Mostar vb.) <strong>kırmızı</strong> renkle işaretlenmiştir. Tüm yerleşimlerde ({settlementCount}/{settlementCount}) tahrir defterleri, salnâmeler ve resmî sayımları içeren interaktif nüfus grafiği yer almaktadır.
            </div>
            <div className="mt-4 p-3 bg-[#FAF8F2] border border-[#25352F]/10 rounded-md text-xs text-[#6F786F] leading-relaxed">
              <span className="font-semibold text-[#25352F] block mb-1">Metodolojik Çerçeve:</span>
              Tahrir kayıtlarındaki cemaat ve hâne tanımları modern etnik aidiyet varsayımı yapılmaksızın birincil kaynak kategorileri olarak sunulmaktadır.
            </div>
          </>
        )}

        {activeCategory === 'ottoman' && (
          <>
            <h3>Osmanlı Coğrafyası</h3>
            <div className="layer-list mt-6">
              {renderLayer('administration')}
              <div className="layer-row unavailable mt-4">
                <span className="layer-dot" style={{ background: '#ccc' }} />
                <label>
                  <b>Vilayet/Sancak sınırları</b>
                  <small>Kartografik sınır rekonstrüksiyonu incelemede</small>
                </label>
                <Switch disabled checked={false} />
              </div>
            </div>

            {/* Regional Research Modules Section */}
            <div className="mt-8 pt-6 border-t border-[#25352F]/10">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#25352F]">
                  Bölgesel Araştırma Modülleri ({regionalModules.length})
                </h4>
                <span className="text-[10px] font-mono text-[#6F786F]">v1 Faz Planı</span>
              </div>
              <p className="text-xs text-[#6F786F] mb-4 leading-relaxed">
                Pilot koridor dışındaki Rumeli sancak ve kazalarının araştırma durumu ve aday merkezleri.
              </p>

              <div className="flex flex-col gap-2.5 max-h-[380px] overflow-y-auto pr-1">
                {regionalModules.map(mod => {
                  const isExpanded = expandedModuleId === mod.id;
                  return (
                    <div
                      key={mod.id}
                      className="border border-[#25352F]/15 rounded-md bg-[#FAF8F2] overflow-hidden transition-all duration-150"
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedModuleId(isExpanded ? null : mod.id)}
                        className="w-full text-left p-2.5 flex items-center justify-between gap-2 hover:bg-[#F5F2E9] transition-colors"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="font-mono text-[10px] font-bold text-[#8A6328] bg-[#B38A4A]/10 px-1 py-0.5 rounded">
                            {mod.id}
                          </span>
                          <span className="text-xs font-medium text-[#25352F] truncate">
                            {mod.nameTr}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          <span className={`text-[10px] px-1.5 py-0.5 rounded border font-medium ${getReadinessBadgeClass(mod.readiness)}`}>
                            {mod.readinessLabel}
                          </span>
                          {isExpanded ? <ChevronDown size={14} className="text-[#6F786F]" /> : <ChevronRight size={14} className="text-[#6F786F]" />}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="p-2.5 pt-0 border-t border-[#25352F]/10 bg-white/40 text-xs flex flex-col gap-2">
                          <div className="text-[11px] text-[#6F786F] mt-1.5">
                            <span className="font-semibold text-[#25352F] block mb-0.5">Aday Şehir / Merkezler:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {mod.candidatePlaces.map((c, i) => (
                                <span key={i} className="px-1.5 py-0.5 bg-[#F5F2E9] border border-[#25352F]/10 rounded text-[10px] text-[#25352F]">
                                  {c}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="text-[11px] text-[#6F786F]">
                            <span className="font-semibold text-[#25352F] block mb-0.5">Güvenli Kapsam:</span>
                            {mod.currentSafeScope}
                          </div>

                          <div className="text-[10px] text-[#8A6328] bg-[#B38A4A]/10 p-2 rounded">
                            <span className="font-semibold block mb-0.5">Öncelikli Adım:</span>
                            {mod.priorityNextStep}
                          </div>

                          {onSelectBounds && (
                            <button
                              type="button"
                              onClick={() => onSelectBounds(mod.bounds)}
                              className="w-full mt-1 py-1.5 px-3 bg-[#FAF8F2] border border-[#9D493A]/40 text-[#9D493A] hover:bg-[#9D493A] hover:text-white rounded text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
                            >
                              <LocateFixed size={13} />
                              Bölgeye Odaklan
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {activeCategory === 'heritage' && (
          <>
            <h3>Kültürel Miras</h3>
            <div className="layer-list mt-6">
              {renderLayer('heritage')}
              <div className="mt-4 text-xs text-[#6F786F] leading-relaxed p-3 bg-[#FAF8F2] border border-[#25352F]/10 rounded-md">
                <span className="font-semibold text-[#25352F] block mb-1">Miras Katmanı (Bosna-Hersek, Sırbistan, Bulgaristan ve Yunanistan Envanteri):</span>
                Balkanlar genelinde (Bosna-Hersek: Saraybosna, Mostar, Travnik, Banyaluka, Foça, Vişegrad, Poçitel; Sırbistan: Belgrad, Sancak/Yeni Pazar, Niş; Bulgaristan: Sofya, Filibe, Şumnu; Yunanistan: Selanik, Batı Trakya, Tesalya, Mora, Girit) {heritageCount} Osmanlı anıtı; ayakta kalan yapılar, ihya edilen anıtlar ve geçmişte yıkılıp yerine ne inşa edildiği (otel bahçesi/arkeoloji parkı, belediye konağı, parlamento, üniversite, çarşı, anıt meydan, park) bilgisiyle tescillenmiştir.
              </div>
            </div>
          </>
        )}

        {activeCategory === 'change' && (
          <>
            <div className="flex items-center justify-between">
              <h3>Değişim ve Göç</h3>
              <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[#9D493A]/10 text-[#9D493A]">
                1862–1995
              </span>
            </div>
            <p className="text-xs text-[#6F786F] mt-1 mb-4 leading-relaxed">
              Balkanlar genelinde Osmanlı sonrası zorunlu göçler, mübadeleler, muhacir iskânları ve toponim dönüşümü.
            </p>

            <div className="layer-list">
              {renderLayer('migration')}

              {/* Kayıp Rumeli Modu Hızlı Geçiş Kartı */}
              {onModeChange && (
                <div className={`mt-3 p-3 rounded-lg border transition-all ${mode === 'lost' ? 'bg-[#9D493A]/10 border-[#9D493A]/30' : 'bg-[#FAF8F2] border-[#25352F]/15'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Landmark size={16} className={mode === 'lost' ? 'text-[#9D493A]' : 'text-[#6F786F]'} />
                      <div>
                        <div className="text-xs font-semibold text-[#25352F]">Kayıp Rumeli Modu</div>
                        <div className="text-[10px] text-[#6F786F]">Yıkılan & dönüştürülen anıtlar</div>
                      </div>
                    </div>
                    <Switch
                      checked={mode === 'lost'}
                      onCheckedChange={checked => onModeChange(checked ? 'lost' : 'atlas')}
                      aria-label="Kayıp Rumeli Modu"
                    />
                  </div>
                  {mode === 'lost' && (
                    <div className="mt-2 pt-2 border-t border-[#9D493A]/20 text-[11px] text-[#9D493A] leading-relaxed">
                      ● Aktif: Yıkılan veya yerine otel terası, meclis, kilise, park inşa edilen Osmanlı eserleri ile boşaltılan yerleşimler gösterilmektedir.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Tarihsel Göç Dalgaları Bölümü */}
            <div className="mt-6 pt-5 border-t border-[#25352F]/10">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#25352F] flex items-center gap-1.5">
                  <ArrowRightLeft size={15} className="text-[#9D493A]" />
                  Tarihsel Göç Dalgaları ({MIGRATION_WAVES.length})
                </h4>
                <span className="text-[10px] font-mono text-[#6F786F] bg-stone-100 px-1.5 py-0.5 rounded border border-stone-200">
                  BOA & Resmî Sayımlar
                </span>
              </div>
              <p className="text-xs text-[#6F786F] mb-3 leading-relaxed">
                Her döneme tıklayarak ayrıntıları inceleyebilir, haritayı ilgili yıla ve göç koridoruna taşıyabilirsiniz.
              </p>

              <div className="flex flex-col gap-2.5 max-h-[520px] overflow-y-auto pr-1">
                {MIGRATION_WAVES.map(wave => {
                  const isExpanded = expandedWaveId === wave.id;
                  const isCurrentPeriod = year !== undefined && year >= wave.startYear && year <= wave.endYear;
                  return (
                    <div
                      key={wave.id}
                      className={`border rounded-lg overflow-hidden transition-all shadow-2xs ${
                        isCurrentPeriod 
                          ? 'border-[#9D493A] bg-[#FFFBF8] ring-1 ring-[#9D493A]/30' 
                          : 'border-[#25352F]/15 bg-[#FAF8F2] hover:border-[#25352F]/30'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedWaveId(isExpanded ? null : wave.id)}
                        className="w-full text-left p-3 flex flex-col gap-1.5 hover:bg-[#F5F2E9] transition-colors"
                      >
                        {/* 1. Satır: Dönem Rozeti + Kısa Nüfus + Açılır Ok */}
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-mono text-[11px] font-bold text-[#9D493A] bg-[#9D493A]/10 px-2 py-0.5 rounded border border-[#9D493A]/25">
                              {wave.period}
                            </span>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#00694C]/10 text-[#00694C] border border-[#00694C]/25">
                              {wave.shortPopulation}
                            </span>
                          </div>
                          <div className="text-[#6F786F] flex-shrink-0">
                            {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                          </div>
                        </div>

                        {/* 2. Satır: Tam Başlık (Asla kesilmez, rahat okunur serif) */}
                        <div className="text-[13px] font-serif font-bold text-[#1e2e28] leading-snug">
                          {wave.title}
                        </div>

                        {/* 3. Satır: Coğrafi Kapsam */}
                        <div className="text-[11px] text-[#6F786F] leading-tight">
                          {wave.scope}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="p-3.5 pt-2 border-t border-[#25352F]/10 bg-white/70 text-xs flex flex-col gap-3">
                          {/* Nüfus Hacmi Kutusu */}
                          <div className="flex items-center justify-between bg-stone-100/80 p-2.5 rounded-md text-xs border border-stone-200">
                            <span className="font-medium text-[#25352F]">Tahmini Nüfus Hacmi:</span>
                            <span className="font-mono font-bold text-[#9D493A]">{wave.estimatedPopulation}</span>
                          </div>

                          {/* Özet */}
                          <p className="text-xs text-[#25352F] leading-relaxed">
                            {wave.summary}
                          </p>

                          {/* Detay Maddeleri */}
                          <div className="text-xs text-[#35453F] flex flex-col gap-2 pl-3 border-l-2 border-[#9D493A]/50">
                            {wave.details.map((d, idx) => (
                              <div key={idx} className="leading-relaxed">
                                • {d}
                              </div>
                            ))}
                          </div>

                          {/* Göç Koridorları */}
                          <div className="bg-[#FAF8F2] p-2.5 rounded-md border border-[#25352F]/15 text-xs">
                            <span className="font-semibold text-[#25352F] block mb-1.5">Göç Koridorları & Güzergâhlar:</span>
                            <div className="flex flex-col gap-1.5">
                              {wave.corridors.map((c, idx) => (
                                <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-1 text-[#6F786F] text-[11px]">
                                  <div className="flex items-center gap-1">
                                    <span className="font-medium text-[#25352F]">{c.from}</span>
                                    <span>→</span>
                                    <span className="font-bold text-[#9D493A]">{c.to}</span>
                                  </div>
                                  <span className="text-gray-500 italic">({c.route})</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* İskân Şehirleri */}
                          {wave.settlementModels && wave.settlementModels.length > 0 && (
                            <div className="text-xs">
                              <span className="font-semibold text-[#25352F] block mb-1.5">Başlıca İskân Merkezleri:</span>
                              <div className="flex flex-wrap gap-1.5">
                                {wave.settlementModels.map((s, idx) => (
                                  <span key={idx} className="px-2 py-0.5 bg-[#F5F2E9] border border-[#25352F]/15 rounded text-[11px] font-medium text-[#25352F]">
                                    {s}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Kaynaklar */}
                          <div className="text-[11px] text-gray-500 italic bg-stone-50 p-2 rounded border border-stone-200">
                            <strong>Kaynaklar:</strong> {wave.sources.join(' · ')}
                          </div>

                          {/* Aksiyon Butonları */}
                          <div className="flex gap-2 pt-1 border-t border-[#25352F]/10">
                            {onYearChange && (
                              <button
                                type="button"
                                onClick={() => onYearChange(wave.anchorYear)}
                                className="flex-1 py-2 px-3 bg-[#9D493A] text-white hover:bg-[#833B2E] rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                              >
                                <Calendar size={14} />
                                {wave.anchorYear} Yılına Git
                              </button>
                            )}
                            {onSelectBounds && (
                              <button
                                type="button"
                                onClick={() => onSelectBounds(wave.bounds)}
                                className="py-2 px-3 bg-[#FAF8F2] border border-[#9D493A]/50 text-[#9D493A] hover:bg-[#F5F2E9] rounded-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                                title="Bölgeye odaklan"
                              >
                                <LocateFixed size={14} />
                                Bölgeye Odaklan
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Toponimi & İsim Değişiklikleri Kataloğu */}
            <div className="mt-6 pt-5 border-t border-[#25352F]/10">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#25352F] flex items-center gap-1.5">
                  <History size={14} className="text-[#B38A4A]" />
                  Balkan Toponimisi & İsim Değişimi ({TOPONYM_TRANSFORMATIONS.length})
                </h4>
                <button
                  type="button"
                  onClick={() => setShowToponyms(!showToponyms)}
                  className="text-[11px] text-[#9D493A] hover:underline font-medium"
                >
                  {showToponyms ? 'Gizle' : 'Listele'}
                </button>
              </div>
              <p className="text-[11px] text-[#6F786F] mb-3 leading-relaxed">
                Osmanlı dönemi Türkçe yer adlarının ulus-devletler döneminde Slavca ve Yunancaya dönüşümü.
              </p>

              {showToponyms && (
                <div className="border border-[#25352F]/15 rounded-md bg-[#FAF8F2] p-2.5">
                  <div className="relative mb-2">
                    <input
                      type="text"
                      placeholder="Şehir veya ülke ara..."
                      value={toponymSearch}
                      onChange={e => setToponymSearch(e.target.value)}
                      className="w-full text-xs pl-7 pr-2 py-1 border border-stone-300 rounded bg-white focus:outline-none focus:border-[#9D493A]"
                    />
                    <Search size={12} className="absolute left-2 top-2 text-stone-400" />
                  </div>
                  <div className="max-h-[220px] overflow-y-auto flex flex-col gap-1 pr-1">
                    {TOPONYM_TRANSFORMATIONS
                      .filter(t => 
                        !toponymSearch || 
                        t.ottoman.toLowerCase().includes(toponymSearch.toLowerCase()) ||
                        t.modern.toLowerCase().includes(toponymSearch.toLowerCase()) ||
                        t.country.toLowerCase().includes(toponymSearch.toLowerCase())
                      )
                      .map((t, idx) => (
                        <div key={idx} className="p-1.5 bg-white rounded border border-[#25352F]/10 flex items-center justify-between text-xs">
                          <div>
                            <span className="font-serif font-bold text-[#9D493A]">{t.ottoman}</span>
                            <span className="text-gray-400 mx-1.5">→</span>
                            <span className="font-medium text-[#25352F]">{t.modern}</span>
                            <span className="text-[10px] text-gray-500 block">{t.note}</span>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <span className="text-[9px] font-mono px-1 py-0.5 bg-stone-100 text-stone-700 rounded block">
                              {t.yearOfChange}
                            </span>
                            <span className="text-[9px] text-[#6F786F] block mt-0.5">
                              {t.country}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Muhacir İskân Modelleri Bilgi Kartı */}
            <div className="mt-6 p-3 bg-[#FAF8F2] border border-[#25352F]/15 rounded-lg text-xs leading-relaxed">
              <span className="font-semibold text-[#25352F] flex items-center gap-1.5 mb-1.5">
                <Building size={14} className="text-[#637C6D]" />
                İdâre-i Umûmiye-i Muhâcirîn (1860) & Model Kentler:
              </span>
              <p className="text-[11px] text-[#6F786F] mb-2">
                Osmanlı Devleti, 1860 İskân Nizamnâmesi ile muhacirleri rastgele dağıtmak yerine padişah adları taşıyan planlı model kentler kurmuştur: <strong>Aziziye</strong> (Bosna Šamac & Kostajnica), <strong>Mecidiye</strong> (Kırım muhacirleri için Dobruca), <strong>Orhaniye</strong> ve <strong>Hamidiye</strong>.
              </p>
              <div className="text-[10px] text-stone-500 pt-2 border-t border-[#25352F]/10 flex flex-col gap-1">
                <div>• Kaynaklı iddialar haritada nokta ve bölge bazında işlenir; hayalî çizgi rotalar çekilmez.</div>
                <div>• Göçler Şark Demiryolları (Rumeli Demiryolu), Ege/Karadeniz vapurları (Gülcemal) ve kara arterleri üzerinden yapılmıştır.</div>
              </div>
            </div>
          </>
        )}

        {activeCategory === 'basemap' && (
          <>
            <h3>Harita Görünümü</h3>
            <div className="mt-6">
              <label className="view-row">
                Tarihsel adlar
                <Switch checked={names} onCheckedChange={onNamesChange} />
              </label>
              <label className="view-row">
                Günümüz ülke sınırları
                <Switch checked={boundaries} onCheckedChange={onBoundariesChange} />
              </label>
              <label className="view-row">
                Güncel sokak haritası
                <Switch checked={streets} onCheckedChange={onStreetsChange} />
              </label>
            </div>
            
            <div className="pilot-card mt-8">
              <span className="edition">PİLOT KOLEKSİYON</span>
              <h3>Üsküp · Kalkandelen<br />Prizren</h3>
              <button onClick={onFlyToPilot}>
                Pilot koridora odaklan <LocateFixed size={15} />
              </button>
            </div>
          </>
        )}

        {activeCategory === 'research' && (
          <>
            <h3>Araştırma ve Kaynaklar</h3>
            <div className="mt-6 flex flex-col gap-3">
              <button className="package-button" onClick={onOpenArchive}>
                <BookOpen size={16} />
                Araştırma paketi arşivi
              </button>
              <button className="package-button" onClick={onOpenSources}>
                <FileText size={16} />
                Kaynaklar ve yöntem ({sourceCount})
              </button>
            </div>

            {/* Research Scope Metrics */}
            <div className="mt-6 p-3 bg-[#FAF8F2] border border-[#25352F]/15 rounded-lg">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9D493A] block mb-2">
                Rumelia Research Kapsamı
              </span>
              <div className="grid grid-cols-2 gap-2 text-center mb-3">
                <div className="p-2 bg-[#F5F2E9] rounded">
                  <span className="block text-base font-serif font-bold text-[#25352F]">{regionalModules.length}</span>
                  <span className="text-[10px] text-[#6F786F]">Bölgesel Modül</span>
                </div>
                <div className="p-2 bg-[#F5F2E9] rounded">
                  <span className="block text-base font-serif font-bold text-[#25352F]">{settlementCount}</span>
                  <span className="text-[10px] text-[#6F786F]">Tarihsel Yerleşim</span>
                </div>
                <div className="p-2 bg-[#F5F2E9] rounded">
                  <span className="block text-base font-serif font-bold text-[#25352F]">{sourceCount}</span>
                  <span className="text-[10px] text-[#6F786F]">Doğrulanmış Kaynak</span>
                </div>
                <div className="p-2 bg-[#F5F2E9] rounded">
                  <span className="block text-base font-serif font-bold text-[#25352F]">{places.length}</span>
                  <span className="text-[10px] text-[#6F786F]">Kayıtlı Varlık</span>
                </div>
              </div>

              <div className="text-[11px] text-[#6F786F] border-t border-[#25352F]/10 pt-2 flex flex-col gap-1">
                <div>• Yokluk kaydı yokluk kanıtı değildir.</div>
                <div>• Hâne sayısı fert nüfusu değildir.</div>
                <div>• Din kaydı etnisiteye dönüştürülmez.</div>
              </div>
            </div>

            <div className="sidebar-foot mt-6">
              <ShieldCheck size={17} />
              <span>
                Kaynaklı ve kanıtlı kayıtlar<br />
                <small>İnceleme sürümü · 01.10.2026</small>
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

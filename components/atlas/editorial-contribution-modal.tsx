'use client';

import { useState, useEffect } from 'react';
import {
  FileText,
  Send,
  Database,
  CheckCircle2,
  AlertCircle,
  Copy,
  Download,
  Trash2,
  Layers,
  Calendar,
  BookOpen,
  Info
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useStore } from '@/lib/store';
import { places, type Place } from '@/lib/atlas-data';

export interface ContributionItem {
  id: string;
  createdAt: string;
  type: 'observation' | 'new_place' | 'heritage_loss' | 'source_citation';
  placeId: string;
  placeName: string;
  dimension: string;
  year: number;
  endYear?: number;
  datePrecision: string;
  statement: string;
  measurement?: {
    label: string;
    value: number;
    unit: string;
  };
  source: {
    title: string;
    author: string;
    locator: string;
    url?: string;
  };
  contributor?: string;
}

const STORAGE_KEY = 'rumelia_atlas_editorial_queue';

export function EditorialContributionModal() {
  const isOpen = useStore(s => s.contributionModalOpen);
  const setIsOpen = useStore(s => s.setContributionModalOpen);
  const targetPlace = useStore(s => s.contributionTargetPlace);
  const setTargetPlace = useStore(s => s.setContributionTargetPlace);
  const activeYear = useStore(s => s.year);
  const setToast = useStore(s => s.setToast);

  const [activeTab, setActiveTab] = useState<'form' | 'queue'>('form');
  const [queue, setQueue] = useState<ContributionItem[]>([]);

  // Form State
  const [type, setType] = useState<ContributionItem['type']>('observation');
  const [selectedPlaceId, setSelectedPlaceId] = useState<string>('');
  const [customPlaceName, setCustomPlaceName] = useState<string>('');
  const [dimension, setDimension] = useState<string>('community');
  const [year, setYear] = useState<number>(activeYear);
  const [endYear, setEndYear] = useState<string>('');
  const [datePrecision, setDatePrecision] = useState<string>('Tahrir defteri / salnâme yılı');
  const [statement, setStatement] = useState<string>('');
  
  // Measurement
  const [hasMeasurement, setHasMeasurement] = useState<boolean>(true);
  const [metricLabel, setMetricLabel] = useState<string>('Müslüman');
  const [metricValue, setMetricValue] = useState<string>('120');
  const [metricUnit, setMetricUnit] = useState<string>('hâne');

  // Source (001_atlas.sql standard)
  const [sourceTitle, setSourceTitle] = useState<string>('');
  const [sourceAuthor, setSourceAuthor] = useState<string>('');
  const [sourceLocator, setSourceLocator] = useState<string>('');
  const [sourceUrl, setSourceUrl] = useState<string>('');
  const [contributor, setContributor] = useState<string>('');

  // Load Queue
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setQueue(JSON.parse(saved));
      }
    } catch {
      // fallback
    }
  }, []);

  // Sync target place
  useEffect(() => {
    if (targetPlace) {
      setSelectedPlaceId(targetPlace.id);
      setYear(activeYear);
    }
  }, [targetPlace, activeYear]);

  const saveQueue = (items: ContributionItem[]) => {
    setQueue(items);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // fallback
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setTargetPlace(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sourceLocator.trim()) {
      alert('Arşiv güvenilirliği için "Kaynak Sayfa / Varak / Belge No" (Locator) zorunludur.');
      return;
    }

    const currentPlace = places.find(p => p.id === selectedPlaceId);
    const placeName = currentPlace ? currentPlace.name : (customPlaceName || 'Bilinmeyen Konum');

    const newItem: ContributionItem = {
      id: `contrib-${Date.now()}`,
      createdAt: new Date().toISOString(),
      type,
      placeId: selectedPlaceId || 'custom',
      placeName,
      dimension,
      year: Number(year),
      endYear: endYear ? Number(endYear) : undefined,
      datePrecision,
      statement,
      measurement: hasMeasurement && metricValue ? {
        label: metricLabel,
        value: Number(metricValue),
        unit: metricUnit
      } : undefined,
      source: {
        title: sourceTitle || 'Osmanlı Arşiv Belgesi',
        author: sourceAuthor || 'BOA',
        locator: sourceLocator,
        url: sourceUrl || undefined
      },
      contributor: contributor || undefined
    };

    const updated = [newItem, ...queue];
    saveQueue(updated);
    setToast(`✓ "${placeName}" için araştırma önerisi yerel inceleme kuyruğuna kaydedildi.`);
    setActiveTab('queue');
  };

  const handleDelete = (id: string) => {
    const updated = queue.filter(q => q.id !== id);
    saveQueue(updated);
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(queue, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `rumelia_atlas_contributions_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const generateSqlFor = (item: ContributionItem) => {
    const stmt = item.statement.replace(/'/g, "''");
    const title = item.source.title.replace(/'/g, "''");
    const loc = item.source.locator.replace(/'/g, "''");
    return `-- 001_atlas.sql uyumlu ekleme
INSERT INTO public.observations (
  dimension, category, valid_from, valid_to, date_precision,
  date_basis, spatial_scope, confidence, statement, source_locator, review_status
) VALUES (
  '${item.dimension}', '${item.type}', ${item.year}, ${item.endYear ?? 'NULL'}, '${item.datePrecision}',
  'observation', '${item.placeName}', 'high', '${stmt}', '${loc}', 'draft'
);`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={open => { if (!open) handleClose(); }}>
      <DialogContent className="max-w-2xl bg-[#FAF8F2] text-[#25352F] border-[#25352F]/20 p-0 overflow-hidden shadow-2xl">
        <DialogHeader className="p-5 pb-3 bg-white/70 border-b border-[#25352F]/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-[#9D493A]/10 text-[#9D493A]">
                <FileText size={18} />
              </span>
              <div>
                <DialogTitle className="text-lg font-serif font-bold text-[#25352F]">
                  Editoryal Araştırma & Veri Katkı Formu
                </DialogTitle>
                <DialogDescription className="text-xs text-[#6F786F]">
                  Akademik tahrir, salnâme veya vakıf eseri düzeltme/öneri girişi (001_atlas.sql şeması)
                </DialogDescription>
              </div>
            </div>
          </div>

          {/* Sekmeler */}
          <div className="flex gap-2 pt-3">
            <button
              type="button"
              onClick={() => setActiveTab('form')}
              className={`text-xs px-3 py-1.5 rounded-md font-semibold transition-colors cursor-pointer ${
                activeTab === 'form'
                  ? 'bg-[#9D493A] text-white shadow-xs'
                  : 'bg-stone-200 text-stone-800 hover:bg-stone-300'
              }`}
            >
              Yeni Öneri / Düzeltme Girişi
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('queue')}
              className={`text-xs px-3 py-1.5 rounded-md font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'queue'
                  ? 'bg-[#9D493A] text-white shadow-xs'
                  : 'bg-stone-200 text-stone-800 hover:bg-stone-300'
              }`}
            >
              <span>İnceleme Kuyruğu</span>
              <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-stone-300 text-stone-800 font-mono">
                {queue.length}
              </span>
            </button>
          </div>
        </DialogHeader>

        <div className="max-h-[70vh] overflow-y-auto p-5">
          {activeTab === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Metodolojik Uyarı Kutusu */}
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2 text-amber-950">
                <Info size={16} className="text-amber-800 shrink-0 mt-0.5" />
                <div className="leading-relaxed text-[11.5px]">
                  <strong>Tarihsel Veri Kuralı:</strong> Osmanlı arşiv belgelerindeki din/cemaat tasnifleri geriye dönük modern etnisiteye dönüştürülemez. <code>hâne</code> (vergi evi) kişi sayısı sayılmaz; özgün ölçü birimi korunmalıdır.
                </div>
              </div>

              {/* Katkı Türü & Yerleşim */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold mb-1 text-stone-700">Katkı Türü</label>
                  <select
                    value={type}
                    onChange={e => setType(e.target.value as ContributionItem['type'])}
                    className="w-full p-2 bg-white border border-stone-300 rounded-md text-xs focus:outline-none focus:border-[#9D493A]"
                  >
                    <option value="observation">Tarihsel Gözlem / Tahrir Kaydı</option>
                    <option value="new_place">Yeni Yerleşim veya Miras Eseri</option>
                    <option value="heritage_loss">Kayıp / Yıkılan Miras Durumu</option>
                    <option value="source_citation">Arşiv / Salnâme Kaynak Düzeltmesi</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-stone-700">İlgili Yerleşim / Eser</label>
                  <select
                    value={selectedPlaceId}
                    onChange={e => setSelectedPlaceId(e.target.value)}
                    className="w-full p-2 bg-white border border-stone-300 rounded-md text-xs focus:outline-none focus:border-[#9D493A]"
                  >
                    <option value="">-- Mevcut Listeden Seçin --</option>
                    {places.map(p => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.modern}) · {p.layer === 'settlement' ? 'Şehir' : 'Miras'}
                      </option>
                    ))}
                    <option value="other">+ Listede Yok (Yeni Kayıt)</option>
                  </select>
                </div>
              </div>

              {selectedPlaceId === 'other' && (
                <div>
                  <label className="block font-semibold mb-1 text-stone-700">Önerilen Yer / Eser Adı</label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: Ohri / Haydar Kadı Camii"
                    value={customPlaceName}
                    onChange={e => setCustomPlaceName(e.target.value)}
                    className="w-full p-2 bg-white border border-stone-300 rounded-md text-xs focus:outline-none focus:border-[#9D493A]"
                  />
                </div>
              )}

              {/* Boyut & Yıllar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold mb-1 text-stone-700">Boyut (Dimension)</label>
                  <select
                    value={dimension}
                    onChange={e => setDimension(e.target.value)}
                    className="w-full p-2 bg-white border border-stone-300 rounded-md text-xs focus:outline-none focus:border-[#9D493A]"
                  >
                    <option value="community">Cemaat & Nüfus</option>
                    <option value="religion">Dinî Aidiyet</option>
                    <option value="heritage">Miras & Yapı</option>
                    <option value="administration">İdarî Bağlılık</option>
                    <option value="settlement_origin">İskân & Kuruluş</option>
                    <option value="language">Dil / Lehçe</option>
                    <option value="migration">Göç & Muhacir</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-stone-700">Gözlem Yılı (1354–2026)</label>
                  <input
                    type="number"
                    required
                    min={1354}
                    max={2026}
                    value={year}
                    onChange={e => setYear(Number(e.target.value))}
                    className="w-full p-2 bg-white border border-stone-300 rounded-md text-xs font-mono focus:outline-none focus:border-[#9D493A]"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-stone-700">Bitiş Yılı (Aralık ise)</label>
                  <input
                    type="number"
                    min={1354}
                    max={2026}
                    placeholder="Opsiyonel"
                    value={endYear}
                    onChange={e => setEndYear(e.target.value)}
                    className="w-full p-2 bg-white border border-stone-300 rounded-md text-xs font-mono focus:outline-none focus:border-[#9D493A]"
                  />
                </div>
              </div>

              {/* Tarih Hassasiyeti */}
              <div>
                <label className="block font-semibold mb-1 text-stone-700">Tarih Hassasiyeti İfadesi</label>
                <input
                  type="text"
                  required
                  value={datePrecision}
                  onChange={e => setDatePrecision(e.target.value)}
                  placeholder="Örn: 1530 BOA TD 167 tahriri kesin tarihi"
                  className="w-full p-2 bg-white border border-stone-300 rounded-md text-xs focus:outline-none focus:border-[#9D493A]"
                />
              </div>

              {/* Gözlem İfadesi */}
              <div>
                <label className="block font-semibold mb-1 text-stone-700">Gözlem / Kanıt Açıklaması</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Arşivdeki özgün kaydı veya tespitinizi açıklayın..."
                  value={statement}
                  onChange={e => setStatement(e.target.value)}
                  className="w-full p-2 bg-white border border-stone-300 rounded-md text-xs focus:outline-none focus:border-[#9D493A] leading-relaxed"
                />
              </div>

              {/* Ölçüm (Varsa) */}
              <div className="p-3 bg-stone-100/70 border border-stone-200 rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-stone-800">Sayısal Ölçüm / Sayım (Opsiyonel)</span>
                  <label className="flex items-center gap-1.5 cursor-pointer text-stone-600">
                    <input
                      type="checkbox"
                      checked={hasMeasurement}
                      onChange={e => setHasMeasurement(e.target.checked)}
                      className="rounded"
                    />
                    <span>Ölçüm ekle</span>
                  </label>
                </div>

                {hasMeasurement && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                    <div>
                      <input
                        type="text"
                        placeholder="Kategori etiketi (Örn: Müslüman)"
                        value={metricLabel}
                        onChange={e => setMetricLabel(e.target.value)}
                        className="w-full p-1.5 bg-white border border-stone-300 rounded text-xs"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="Değer (Örn: 270)"
                        value={metricValue}
                        onChange={e => setMetricValue(e.target.value)}
                        className="w-full p-1.5 bg-white border border-stone-300 rounded text-xs font-mono"
                      />
                    </div>
                    <div>
                      <select
                        value={metricUnit}
                        onChange={e => setMetricUnit(e.target.value)}
                        className="w-full p-1.5 bg-white border border-stone-300 rounded text-xs"
                      >
                        <option value="hâne">hâne (vergi mükellefi)</option>
                        <option value="kişi">kişi (nüfus)</option>
                        <option value="yapı">yapı (adet)</option>
                        <option value="yüzde">yüzde (%)</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Kaynak Bilgisi (Locator Zorunlu) */}
              <div className="p-3 bg-stone-100/70 border border-stone-200 rounded-lg space-y-2">
                <span className="font-semibold text-stone-800 flex items-center gap-1">
                  <BookOpen size={13} className="text-[#9D493A]" />
                  Birincil / Akademik Kaynak Bilgisi (Doğrulama İçin Zorunlu)
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Kaynak Başlığı (Örn: Kosova Salnâmesi 1312)"
                    value={sourceTitle}
                    onChange={e => setSourceTitle(e.target.value)}
                    className="p-1.5 bg-white border border-stone-300 rounded text-xs"
                  />
                  <input
                    type="text"
                    placeholder="Müellif / Kurum (Örn: Vilayet Matbaası)"
                    value={sourceAuthor}
                    onChange={e => setSourceAuthor(e.target.value)}
                    className="p-1.5 bg-white border border-stone-300 rounded text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Sayfa / Varak / Tasnif No (ZORUNLU) *"
                    value={sourceLocator}
                    onChange={e => setSourceLocator(e.target.value)}
                    className="p-1.5 bg-white border border-stone-300 rounded text-xs font-mono border-l-2 border-l-[#9D493A]"
                  />
                  <input
                    type="url"
                    placeholder="Katalog / Belge URL (varsa)"
                    value={sourceUrl}
                    onChange={e => setSourceUrl(e.target.value)}
                    className="p-1.5 bg-white border border-stone-300 rounded text-xs"
                  />
                </div>
              </div>

              {/* Katkıcı */}
              <div>
                <input
                  type="text"
                  placeholder="Araştırmacı Adı / Kurumu (İsteğe bağlı)"
                  value={contributor}
                  onChange={e => setContributor(e.target.value)}
                  className="w-full p-2 bg-white border border-stone-300 rounded text-xs"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 border border-stone-300 rounded-md text-stone-700 hover:bg-stone-200 transition-colors cursor-pointer"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#9D493A] text-white rounded-md font-semibold hover:bg-[#83382B] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Send size={13} />
                  Yerel Kuyruğa Kaydet
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#25352F]/10">
                <span className="text-xs text-stone-600">
                  Yerel hafızada <strong>{queue.length}</strong> adet editoryal öneri bekliyor.
                </span>
                {queue.length > 0 && (
                  <button
                    type="button"
                    onClick={handleExportJSON}
                    className="px-2.5 py-1 bg-stone-800 text-white rounded text-xs font-medium flex items-center gap-1.5 hover:bg-black transition-colors cursor-pointer"
                  >
                    <Download size={12} />
                    Tümünü İndir (.json)
                  </button>
                )}
              </div>

              {queue.length === 0 ? (
                <div className="text-center py-10 text-stone-500 text-xs">
                  Henüz kaydedilmiş bir öneri bulunmuyor. Form sekmesinden yeni bir arşiv tespiti ekleyebilirsiniz.
                </div>
              ) : (
                <div className="space-y-3">
                  {queue.map(item => (
                    <div
                      key={item.id}
                      className="p-3 bg-white border border-stone-200 rounded-xl shadow-xs space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-bold text-sm text-[#9D493A]">
                          {item.placeName} ({item.year})
                        </span>
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard.writeText(generateSqlFor(item));
                              setToast('SQL kodu panoya kopyalandı.');
                            }}
                            className="p-1 text-stone-500 hover:text-stone-800 rounded hover:bg-stone-100 cursor-pointer"
                            title="001_atlas.sql Uyumlu SQL Kopyala"
                          >
                            <Database size={13} />
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard.writeText(JSON.stringify(item, null, 2));
                              setToast('JSON panoya kopyalandı.');
                            }}
                            className="p-1 text-stone-500 hover:text-stone-800 rounded hover:bg-stone-100 cursor-pointer"
                            title="JSON Kopyala"
                          >
                            <Copy size={13} />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(item.id)}
                            className="p-1 text-stone-400 hover:text-rose-600 rounded hover:bg-stone-100 cursor-pointer"
                            title="Sil"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </div>

                      <p className="text-stone-700 leading-relaxed">{item.statement}</p>

                      {item.measurement && (
                        <div className="p-1.5 bg-stone-50 rounded border border-stone-200/60 font-mono text-[11px] text-[#00694C]">
                          {item.measurement.label}: {item.measurement.value.toLocaleString('tr-TR')} {item.measurement.unit}
                        </div>
                      )}

                      <div className="pt-1 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-mono">
                        <span>Kaynak: {item.source.title} · {item.source.locator}</span>
                        <span>{new Date(item.createdAt).toLocaleDateString('tr-TR')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

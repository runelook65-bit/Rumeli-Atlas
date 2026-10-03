'use client';

import { useState, useMemo } from 'react';
import { BookOpen, ArrowUpRight, Search, FileText, CheckCircle2, Database, ShieldCheck, ExternalLink } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { places, sources, researchPackage } from '@/lib/atlas-data';

interface AtlasSourcesSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenArchive: () => void;
}

export function AtlasSourcesSheet({
  open,
  onOpenChange,
  onOpenArchive
}: AtlasSourcesSheetProps) {
  const [tab, setTab] = useState<'methods' | 'sources'>('methods');
  const [sourceSearch, setSourceSearch] = useState('');
  const [selectedKind, setSelectedKind] = useState<string>('all');

  const kinds = useMemo(() => {
    const list = Array.from(new Set(sources.map(s => s.kind))).filter(Boolean);
    return ['all', ...list];
  }, []);

  const filteredSources = useMemo(() => {
    return sources.filter(s => {
      const matchKind = selectedKind === 'all' || s.kind === selectedKind;
      const q = sourceSearch.toLowerCase().trim();
      const matchSearch = !q || 
        s.title.toLowerCase().includes(q) || 
        s.author.toLowerCase().includes(q) ||
        (s.locator && s.locator.toLowerCase().includes(q));
      return matchKind && matchSearch;
    });
  }, [sourceSearch, selectedKind]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        side="right" 
        className="w-full sm:max-w-xl md:max-w-2xl bg-[#FAF8F2] border-l border-[#dddcd1] p-0 flex flex-col h-full shadow-2xl"
      >
        {/* Header */}
        <SheetHeader className="p-6 pb-4 border-b border-[#dddcd1] bg-[#FAF8F2]/90 backdrop-blur sticky top-0 z-10 shrink-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded bg-primary/10 text-primary">
              Metodoloji & Belgeleme
            </span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-500 font-sans">Pilot Bölge: Üsküp · Kalkandelen · Prizren</span>
          </div>
          <SheetTitle className="text-2xl sm:text-3xl font-serif text-primary tracking-tight">
            Kaynaklar ve Yöntem
          </SheetTitle>
          <SheetDescription className="text-xs sm:text-sm text-gray-600 mt-1">
            Rumelia Atlas, tahminî süreklilik veya spekülatif veriler içermez; her kayıt doğrudan bir belgeye dayanır.
          </SheetDescription>

          <Tabs value={tab} onValueChange={v => setTab(v as 'methods' | 'sources')} className="mt-4">
            <TabsList className="bg-[#edeae0] p-1 rounded-full w-full grid grid-cols-2">
              <TabsTrigger 
                value="methods" 
                className="rounded-full text-xs py-1.5 data-[state=active]:bg-[#FAF8F2] data-[state=active]:text-primary data-[state=active]:shadow-xs transition-all"
              >
                Yöntem ve İlkeler
              </TabsTrigger>
              <TabsTrigger 
                value="sources" 
                className="rounded-full text-xs py-1.5 data-[state=active]:bg-[#FAF8F2] data-[state=active]:text-primary data-[state=active]:shadow-xs transition-all"
              >
                Bibliyografya ({sources.length})
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </SheetHeader>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {tab === 'methods' ? (
            <div className="space-y-6">
              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="p-3 bg-white border border-[#e2e1d7] rounded-xl text-center shadow-xs">
                  <span className="block text-2xl font-serif text-primary font-bold">{places.length}</span>
                  <span className="text-[11px] text-gray-500 uppercase tracking-wider">Yerleşim & Miras</span>
                </div>
                <div className="p-3 bg-white border border-[#e2e1d7] rounded-xl text-center shadow-xs">
                  <span className="block text-2xl font-serif text-primary font-bold">{sources.length}</span>
                  <span className="text-[11px] text-gray-500 uppercase tracking-wider">Tarihsel Kaynak</span>
                </div>
                <div className="p-3 bg-white border border-[#e2e1d7] rounded-xl text-center shadow-xs">
                  <span className="block text-2xl font-serif text-primary font-bold">{researchPackage.stats.demographics}</span>
                  <span className="text-[11px] text-gray-500 uppercase tracking-wider">Demografi Kaydı</span>
                </div>
                <div className="p-3 bg-white border border-[#e2e1d7] rounded-xl text-center shadow-xs">
                  <span className="block text-2xl font-serif text-primary font-bold">{researchPackage.stats.migrations}</span>
                  <span className="text-[11px] text-gray-500 uppercase tracking-wider">Göç Olayı</span>
                </div>
              </div>

              {/* Core Principles Cards */}
              <div className="space-y-3.5">
                <div className="p-4 bg-white border border-[#e2e1d7] rounded-xl shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-[#9D493A]/10 text-[#9D493A]">
                      01 · KATEGORİ AYRIMI
                    </span>
                    <h4 className="text-sm font-semibold text-gray-900">Kategoriler eşdeğer değildir</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Etnisite, dil, din, yerleşim kökeni, idarî aidiyet ve kültürel miras bağımsız gözlemlerdir. 
                    Osmanlı tahrirlerindeki <strong className="text-gray-900 font-medium">Müslüman hâne</strong> sayısı, doğrudan Türk kişi sayısına dönüştürülmez.
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#e2e1d7] rounded-xl shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-[#B38A4A]/10 text-[#B38A4A]">
                      02 · ZAMAN METODU
                    </span>
                    <h4 className="text-sm font-semibold text-gray-900">Zaman nasıl okunur?</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Nüfus kayıtları yalnız kaydedildiği belgenin yılında gösterilir; ara yıllar uydurma verilerle doldurulmaz. 
                    <strong className="text-gray-900 font-medium"> 1354</strong>, bu atlasın başlangıç yılıdır; şehirlerin kuruluş tarihi değildir.
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#e2e1d7] rounded-xl shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-[#647E91]/10 text-[#647E91]">
                      03 · EKSİKLİK İLKESİ
                    </span>
                    <h4 className="text-sm font-semibold text-gray-900">Belge yokluğu, yokluğun kanıtı değildir</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Pilot sürüm Üsküp, Kalkandelen ve Prizren odaklıdır. Bir bölgede veya yılda kayıt bulunmaması, o dönemde 
                    tarihsel varlığın bulunmadığı anlamına gelmez; yalnızca arşiv belgesinin henüz işlenmediğini gösterir.
                  </p>
                </div>
              </div>

              {/* Research Package Archive CTA */}
              <div className="p-4 bg-gradient-to-br from-white to-[#f4f2ea] border border-[#dcd9ce] rounded-xl shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Database size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Araştırma Paketi Kataloğu (v1)</h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Tüm ham kaynak dökümleri, iddialar ve doğrulanmış JSON veri paketleri.
                    </p>
                  </div>
                </div>
                <button
                  className="px-4 py-2 bg-primary text-white text-xs font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-xs shrink-0 flex items-center gap-1.5"
                  onClick={() => {
                    onOpenChange(false);
                    onOpenArchive();
                  }}
                >
                  <BookOpen size={14} />
                  Paketi İncele
                </button>
              </div>

              {/* Next Research Sources / Data Notes */}
              <div className="p-4 bg-white border border-[#e2e1d7] rounded-xl space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-500">
                  Gelecek Araştırma Kaynakları & Sayımlar
                </h4>
                <div className="space-y-2 text-xs">
                  <a
                    href="https://makstat.stat.gov.mk/PXWeb/pxweb/en/MakStat/MakStat__Popisi__Popis2021__NaselenieVkupno__NaseleniePopis2021__EtnoKulturniKarakteristiki/T1008P21.px/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-[#FAF8F2] hover:bg-gray-100 transition-colors text-primary font-medium"
                  >
                    <span>MAKStat · Kuzey Makedonya 2021 Sayımı</span>
                    <ExternalLink size={13} className="text-gray-400" />
                  </a>
                  <a
                    href="https://askdata.rks-gov.net/pxweb/en/ASKdata/ASKdata__Census%20population__1_Demographic_Characteristics/census2024_05.px/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-[#FAF8F2] hover:bg-gray-100 transition-colors text-primary font-medium"
                  >
                    <span>Kosova İstatistik Ajansı · 2024 Nüfus Sayımı</span>
                    <ExternalLink size={13} className="text-gray-400" />
                  </a>
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed pt-1">
                  Açık geometri: Natural Earth (kamu malı) ve OpenStreetMap. Akademik metinler için telif hakları gözetilerek özgün editoryal özetler kullanılmıştır.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Search and Filters */}
              <div className="space-y-2.5">
                <div className="relative">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Kaynak adı, yazar veya konu ara…"
                    value={sourceSearch}
                    onChange={e => setSourceSearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-white border border-[#dddcd1] rounded-lg text-xs placeholder:text-gray-400 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="flex gap-1.5 overflow-x-auto pb-1 text-xs">
                  {kinds.map(k => (
                    <button
                      key={k}
                      onClick={() => setSelectedKind(k)}
                      className={`px-2.5 py-1 rounded-full whitespace-nowrap text-[11px] transition-colors ${
                        selectedKind === k
                          ? 'bg-primary text-white font-medium'
                          : 'bg-white border border-[#e2e1d7] text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {k === 'all' ? `Tümü (${sources.length})` : k}
                    </button>
                  ))}
                </div>
              </div>

              {/* Source List */}
              <div className="space-y-3">
                {filteredSources.map(s => (
                  <div 
                    key={s.id}
                    className="p-4 bg-white border border-[#e2e1d7] rounded-xl shadow-xs space-y-2 hover:border-[#cfcdbf] transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                          {s.kind || 'Kaynak'}
                        </span>
                        <h4 className="font-serif text-base text-gray-900 mt-1 font-semibold leading-snug">
                          {s.title}
                        </h4>
                      </div>
                      <span className="text-xs font-mono text-gray-400 shrink-0">
                        {s.date}
                      </span>
                    </div>

                    <p className="text-xs text-gray-600">
                      {s.author}
                    </p>

                    {s.locator && (
                      <p className="text-[11px] text-gray-500 italic bg-[#FAF8F2] px-2.5 py-1.5 rounded border border-[#edeae0]">
                        {s.locator}
                      </p>
                    )}

                    {s.url && (
                      <div className="pt-1">
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-medium"
                        >
                          Kaynağı incele <ArrowUpRight size={13} />
                        </a>
                      </div>
                    )}
                  </div>
                ))}

                {filteredSources.length === 0 && (
                  <div className="py-12 text-center text-gray-400 text-xs">
                    Aradığınız kriterlere uygun kaynak bulunamadı.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

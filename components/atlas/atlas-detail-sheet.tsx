import {ShieldCheck, ArrowUpRight} from 'lucide-react';
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription} from '@/components/ui/sheet';
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs';
import {sources, type Place} from '@/lib/atlas-data';
import {Evidence} from './atlas-evidence';

interface AtlasDetailSheetProps {
  place: Place | null;
  year: number;
  onClose: () => void;
}

export function AtlasDetailSheet({place, year, onClose}: AtlasDetailSheetProps) {
  if (!place) return null;

  const relevantSources = sources.filter(
    s =>
      s.id === place.source ||
      place.additionalSources?.includes(s.id) ||
      place.events.some(e => e.source === s.id) ||
      place.observations.some(o => o.source === s.id)
  );

  return (
    <Sheet open={!!place} onOpenChange={open => { if (!open) onClose(); }}>
      <SheetContent className="detail-sheet">
        <SheetHeader>
          <p className="eyebrow">
            {place.lost
              ? 'LOST RUMELIA'
              : place.layer === 'heritage'
              ? 'KÜLTÜREL MİRAS'
              : 'TARİHSEL YERLEŞİM'}
          </p>
          <SheetTitle>{place.name}</SheetTitle>
          <SheetDescription>
            {place.modern} · {place.coordinates[1].toFixed(4)}° N, {place.coordinates[0].toFixed(4)}° E
          </SheetDescription>
        </SheetHeader>

        <div className="detail-body">
          <div className="confidence">
            <ShieldCheck size={15} />
            {place.confidence === 'high' ? 'Yüksek' : 'Orta'} tarihsel güven{' '}
            <span>Konum yaklaşık</span>
          </div>

          <p>{place.summary}</p>

          <Tabs defaultValue="history">
            <TabsList>
              <TabsTrigger value="history">Kronoloji</TabsTrigger>
              <TabsTrigger value="evidence">Veri</TabsTrigger>
              <TabsTrigger value="source">Kaynak</TabsTrigger>
            </TabsList>

            <TabsContent value="history">
              <div className="current-box">
                <p className="eyebrow">SON KAYNAKTAKİ DURUM</p>
                <p>{place.current}</p>
                <small>{place.currentAsOf}</small>
              </div>

              <div className="event-list">
                {place.events.map((e, i) => (
                  <div className={e.year <= year ? 'past' : ''} key={i}>
                    <b>{e.year}</b>
                    <p>{e.text}</p>
                  </div>
                ))}
              </div>

              {place.partialLoss && (
                <p className="note">
                  Yan yapıların kaybı biliniyor; yıkım yılı ve ayrı yapı izleri bilinmiyor. Külliye merkezinde gösterilir.
                </p>
              )}
            </TabsContent>

            <TabsContent value="evidence">
              <Evidence place={place} year={year} />
              <p className="note">Tarih hassasiyeti: {place.datePrecision}</p>
              <p className="note">Konum: {place.locationAccuracy}</p>

              {place.importedRecords?.map((r, i) => (
                <div className="import-record" key={i}>
                  <p className="eyebrow">PAKETİN ÖZGÜN KAYDI</p>
                  <p>{r.heritage_id ?? r.place_id} · {r.type ?? r.place_type}</p>
                  <p>Yapı tarihi: {r.construction_date ?? r.first_known_date ?? 'bilinmiyor'}</p>
                  <p>Durum: {r.status ?? r.current_status} · {r.current_use ?? r.notes}</p>
                  <p className="note">
                    Paketin güveni: {r.confidence} · Konum: {r.coordinate_precision}. Aktarım, bağımsız doğrulama değildir.
                  </p>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="source">
              {relevantSources.map(s => (
                <div className="source-entry" key={s.id}>
                  <span className="edition">{s.kind}</span>
                  <h3>{s.title}</h3>
                  <p>{s.author}</p>
                  <small>Kaynak tarihi: {s.date}<br />Erişim: 01.10.2026</small>
                  <p className="note">{s.locator}</p>
                  <a href={s.url} target="_blank" rel="noreferrer">
                    Kaynağı incele <ArrowUpRight size={15} />
                  </a>
                </div>
              ))}

              {place.alternatives && (
                <div className="alternative">
                  <b>Belirsizlik / alternatif yorum</b>
                  {place.alternatives.map(t => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
              )}

              <p className="note">
                Güven seviyesi editoryaldir; olasılık yüzdesi değildir. Kaynak doğruluğu ile konum doğruluğu ayrı değerlendirilir.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  );
}

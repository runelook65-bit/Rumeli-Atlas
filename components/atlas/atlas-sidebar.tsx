import {Layers, LocateFixed, BookOpen, ShieldCheck} from 'lucide-react';
import {Switch} from '@/components/ui/switch';
import {places, type Layer} from '@/lib/atlas-data';

export interface LayerItem {
  id: Layer;
  name: string;
  sub: string;
  color: string;
  available: boolean;
}

export const layerInfo: LayerItem[] = [
  {id: 'settlement', name: 'Tarihsel yerleşimler', sub: `${places.filter(p => p.layer === 'settlement').length} yer · tarihsel adlar`, color: '#91473a', available: true},
  {id: 'heritage', name: 'Kültürel miras', sub: `${places.filter(p => p.layer === 'heritage').length} miras nesnesi`, color: '#ab8047', available: true},
  {id: 'religion', name: 'Din', sub: 'Kaynağın dinî kategorileri', color: '#627666', available: true},
  {id: 'ethnicity', name: 'Etnisite', sub: '2021 sayımı · ayrı veri katmanı', color: '#496d88', available: true},
  {id: 'community', name: 'Tarihsel cemaatler', sub: 'Özgün hukukî / cemaat kategorileri', color: '#806b88', available: true},
  {id: 'language', name: 'Dil', sub: 'Dil / ana dil gözlemleri', color: '#697e99', available: true},
  {id: 'administration', name: 'Osmanlı idarî merkezleri', sub: 'Merkez noktaları · sınır yok', color: '#8b7095', available: true},
  {id: 'migration', name: 'Göç ve muhacir hareketleri', sub: 'Kaynaklı iddialar · rota çizilmez', color: '#777', available: true}
];

interface AtlasSidebarProps {
  active: Layer[];
  mode: 'atlas' | 'lost';
  onToggleLayer: (id: Layer) => void;
  names: boolean;
  onNamesChange: (checked: boolean) => void;
  boundaries: boolean;
  onBoundariesChange: (checked: boolean) => void;
  streets: boolean;
  onStreetsChange: (checked: boolean) => void;
  onFlyToPilot: () => void;
  onOpenArchive: () => void;
}

export function AtlasSidebar({
  active,
  mode,
  onToggleLayer,
  names,
  onNamesChange,
  boundaries,
  onBoundariesChange,
  streets,
  onStreetsChange,
  onFlyToPilot,
  onOpenArchive
}: AtlasSidebarProps) {
  return (
    <>
      <div className="sidebar-heading">
        <div>
          <p className="eyebrow">ATLAS KATMANLARI</p>
          <h2>Coğrafyanın izleri</h2>
        </div>
        <Layers size={20} />
      </div>

      <div className="layer-list">
        {layerInfo.map(l => (
          <div className={`layer-row ${!l.available ? 'unavailable' : ''}`} key={l.id}>
            <span className="layer-dot" style={{background: l.color}} />
            <label htmlFor={`layer-${l.id}`}>
              <b>{l.name}</b>
              <small>{l.sub}</small>
            </label>
            <Switch
              id={`layer-${l.id}`}
              aria-label={l.name}
              disabled={!l.available || mode === 'lost'}
              checked={mode === 'lost' ? l.id === 'heritage' : active.includes(l.id)}
              onCheckedChange={() => onToggleLayer(l.id)}
            />
          </div>
        ))}
      </div>

      <div className="rule" />

      <p className="eyebrow">HARİTA GÖRÜNÜMÜ</p>
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
      <small className="muted">
        Taban harita günümüz coğrafyasıdır. Tarihsel sınır veya demografi göstermez.
      </small>

      <div className="pilot-card">
        <span className="edition">PİLOT KOLEKSİYON · 01</span>
        <h3>Üsküp · Kalkandelen<br />Prizren</h3>
        <p>Vardar’dan Şar dağlarına.<br />Üç şehir, çok katmanlı bir geçmiş.</p>
        <button onClick={onFlyToPilot}>
          Pilot bölgeye dön <LocateFixed size={15} />
        </button>
      </div>

      <button className="package-button" onClick={onOpenArchive}>
        <BookOpen size={16} />
        Araştırma paketi · kayıtlar
      </button>

      <div className="sidebar-foot">
        <ShieldCheck size={17} />
        <span>
          Kaynaklı kayıtlar<br />
          <small>İnceleme sürümü · 01.10.2026</small>
        </span>
      </div>
    </>
  );
}

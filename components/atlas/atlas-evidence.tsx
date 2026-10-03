import {observationsAt, sources, type Place} from '@/lib/atlas-data';

interface EvidenceProps {
  place: Place;
  year: number;
}

const dimensionLabels: Record<string, string> = {
  religion: 'Din',
  community: 'Tarihsel cemaat / hukukî kategori',
  ethnicity: 'Etnisite',
  language: 'Dil',
  administration: 'İdarî bağlılık',
  migration: 'Göç iddiası',
  settlement_origin: 'Yerleşim kökeni',
  heritage: 'Kültürel miras'
};

export function Evidence({place, year}: EvidenceProps) {
  const evidence = observationsAt(place, year);

  return (
    <div className="evidence">
      <p className="eyebrow">{year} YILINDAKİ KAYITLAR</p>
      {!evidence.length ? (
        <p className="muted">
          Bu yıl için nüfus, dil veya etnisite gözlemi yok. Haritadaki nokta, o yılın nüfusunu temsil etmez.
        </p>
      ) : (
        evidence.map((o, i) => (
          <div key={i} className="observation">
            <b>{dimensionLabels[o.dimension] ?? o.dimension}</b>
            <p>{o.text}</p>
            {o.disputed && (
              <strong className="disputed-label">
                Çelişkili kaynak kaydı · diğer değerle birleştirilmedi
              </strong>
            )}
            {o.values && (
              <>
                <div className="data-bars">
                  {o.values.map(v => (
                    <div key={v.label}>
                      <span>{v.label}</span>
                      <strong>{v.value.toLocaleString('tr')}</strong>
                      <i style={{width: `${(v.value / Math.max(...o.values!.map(x => x.value))) * 100}%`}} />
                    </div>
                  ))}
                </div>
                <small>{o.unit} · {o.scope}</small>
              </>
            )}
            {o.note && <p className="note">{o.note}</p>}
            <a
              className="observation-source"
              href={sources.find(s => s.id === o.source)?.url}
              target="_blank"
              rel="noreferrer"
            >
              {sources.find(s => s.id === o.source)?.title} · {sources.find(s => s.id === o.source)?.date}
            </a>
          </div>
        ))
      )}
    </div>
  );
}

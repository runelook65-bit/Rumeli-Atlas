export interface MacroEra {
  id: string;
  name: string;
  shortName: string;
  from: number;
  to: number;
  color: string;
  textColor: string;
  borderColor: string;
  description: string;
}

export const MACRO_ERAS: MacroEra[] = [
  {
    id: 'fetihler',
    name: 'Erken Dönem & Rumeli Fetihleri',
    shortName: 'FETİHLER',
    from: 1354,
    to: 1453,
    color: 'rgba(158, 43, 32, 0.16)',
    textColor: '#8B2C21',
    borderColor: 'rgba(158, 43, 32, 0.4)',
    description: '1354 Çimpe Kalesi ile Rumeli’ye ayak basış, Edirne’nin fethi, I. Kosova ve Niğbolu zaferleri.'
  },
  {
    id: 'klasik',
    name: 'Klasik Osmanlı & İmar Çağı',
    shortName: 'KLASİK',
    from: 1453,
    to: 1699,
    color: 'rgba(179, 138, 74, 0.18)',
    textColor: '#7A5B22',
    borderColor: 'rgba(179, 138, 74, 0.4)',
    description: 'İstanbul’un fethi, Rumeli Beylerbeyliği teşkilatı, vakıf külliyeleri, Üsküp ve Saraybosna’nın imarı.'
  },
  {
    id: 'islahat',
    name: 'Karlofça, Tanzimat & Islahat Devri',
    shortName: 'ISLAHAT',
    from: 1699,
    to: 1878,
    color: 'rgba(197, 160, 89, 0.22)',
    textColor: '#8B6E32',
    borderColor: 'rgba(197, 160, 89, 0.45)',
    description: 'Karlofça Antlaşması, Pasarofça, Tanzimat Fermanı ve Tuna/Kosova/Manastır vilayet reformları.'
  },
  {
    id: 'cumhuriyet',
    name: 'Balkan Savaşları, Cumhuriyet & Günümüz',
    shortName: 'CUMHURİYET',
    from: 1878,
    to: 2026,
    color: 'rgba(0, 90, 62, 0.18)',
    textColor: '#005A3E',
    borderColor: 'rgba(0, 90, 62, 0.4)',
    description: 'Berlin Antlaşması sonrası muhacir dalgaları, Balkan Harbi, Lozan Mübadelesi ve yaşayan kültürel miras.'
  }
];

export interface MilestoneTick {
  year: number;
  label: string;
  short: string;
  tier: 1 | 2;
}

export const TIMELINE_MILESTONES: MilestoneTick[] = [
  { year: 1354, label: 'Çimpe Kalesi (Osmanlı Ayak İzi)', short: '1354', tier: 1 },
  { year: 1453, label: 'İstanbul’un Fethi & Payitaht', short: '1453', tier: 1 },
  { year: 1699, label: 'Karlofça Antlaşması', short: '1699', tier: 1 },
  { year: 1878, label: 'Berlin Antlaşması & 93 Harbi', short: '1878', tier: 1 },
  { year: 1912, label: 'I. Balkan Savaşı', short: '1912', tier: 2 },
  { year: 1923, label: 'Lozan & Nüfus Mübadelesi', short: '1923', tier: 1 },
  { year: 1950, label: 'Yugoslavya Serbest Göçü', short: '1950', tier: 2 },
  { year: 1989, label: 'Bulgaristan Büyük Göçü', short: '1989', tier: 1 },
  { year: 2026, label: 'Günümüz ve Yaşayan Miras', short: '2026', tier: 1 }
];

export type EventCategoryKey = 'battle' | 'treaty' | 'reform' | 'independence' | 'milestone';

export interface EventCategoryMeta {
  key: EventCategoryKey;
  label: string;
  color: string;
  bgTint: string;
}

export const EVENT_CATEGORIES: Record<EventCategoryKey, EventCategoryMeta> = {
  battle: {
    key: 'battle',
    label: 'Savaş / Fetih',
    color: '#9E2B20',
    bgTint: 'rgba(158, 43, 32, 0.12)'
  },
  treaty: {
    key: 'treaty',
    label: 'Antlaşma',
    color: '#B8893E',
    bgTint: 'rgba(184, 137, 62, 0.14)'
  },
  reform: {
    key: 'reform',
    label: 'Islahat',
    color: '#005A3E',
    bgTint: 'rgba(0, 90, 62, 0.12)'
  },
  independence: {
    key: 'independence',
    label: 'Bağımsızlık',
    color: '#2563EB',
    bgTint: 'rgba(37, 99, 235, 0.12)'
  },
  milestone: {
    key: 'milestone',
    label: 'Siyasi Dönüm Noktası',
    color: '#7C3AED',
    bgTint: 'rgba(124, 58, 237, 0.12)'
  }
};

export interface TimelineHistoricalEvent {
  id: string;
  year: number;
  title: string;
  category: EventCategoryKey;
  coordinates: [number, number]; // [lon, lat]
  blurb: string;
  source?: string;
}

export const CURATED_TIMELINE_EVENTS: TimelineHistoricalEvent[] = [
  {
    id: 'ev-1354',
    year: 1354,
    title: 'Çimpe Kalesi & Rumeli’ye Geçiş',
    category: 'battle',
    coordinates: [26.75, 40.50],
    blurb: 'Orhan Gazi döneminde Gelibolu’daki Çimpe Kalesi ile Osmanlıların Rumeli’deki ilk iskân ve askeri üssü kuruldu.',
    source: 'Aşıkpaşazâde Tarihi'
  },
  {
    id: 'ev-1389',
    year: 1389,
    title: 'I. Kosova Savaşı',
    category: 'battle',
    coordinates: [21.12, 42.63],
    blurb: 'Kosova sahrasındaki zafer ile Osmanlıların Güney Slav coğrafyasındaki hâkimiyeti kesinleşti.',
    source: 'Halil İnalcık, Klasik Çağ'
  },
  {
    id: 'ev-1453',
    year: 1453,
    title: 'İstanbul’un Fethi & Payitaht',
    category: 'battle',
    coordinates: [28.97, 41.00],
    blurb: 'Konstantiniyye’nin fethi ile Rumeli ve Anadolu eyaletleri imparatorluğun tek merkezinde birleşti.',
    source: 'Tursun Bey, Tarih-i Ebü’l-Feth'
  },
  {
    id: 'ev-1455',
    year: 1455,
    title: 'Kosova & Prizren Vilayeti Tahriri',
    category: 'reform',
    coordinates: [20.74, 42.21],
    blurb: 'Fatih Sultan Mehmed dönemi tahrir defterlerinde hâne, cemaat ve vakıf kayıtları kanunnamelere bağlandı.',
    source: 'BOA TD (Tahrir Defterleri)'
  },
  {
    id: 'ev-1699',
    year: 1699,
    title: 'Karlofça Antlaşması & İlk Gerileme',
    category: 'treaty',
    coordinates: [19.93, 45.20],
    blurb: 'Kutsal İttifak Savaşları sonrasında Macaristan kaybedildi; Rumeli savunma ve sınır hatları güneye çekildi.',
    source: 'Silâhdar Tarihi'
  },
  {
    id: 'ev-1839',
    year: 1839,
    title: 'Gülhane Hatt-ı Hümayunu (Tanzimat)',
    category: 'reform',
    coordinates: [28.98, 41.01],
    blurb: 'Rumeli tebaasının can, mal ve ırz güvenliği ile vergi eşitliğini güvence altına alan reform çağı başladı.',
    source: 'Düstur, I. Tertip'
  },
  {
    id: 'ev-1864',
    year: 1864,
    title: 'Tuna Vilayet Nizamnâmesi (Mithat Paşa)',
    category: 'reform',
    coordinates: [25.95, 43.85],
    blurb: 'Model vilayet idaresi, ziraat sandıkları, mektepler ve modern Rumeli posta yolları kuruldu.',
    source: 'Tuna Vilayeti Salnâmeleri'
  },
  {
    id: 'ev-1878',
    year: 1878,
    title: 'Berlin Antlaşması & 93 Harbi Göçleri',
    category: 'treaty',
    coordinates: [13.40, 52.52],
    blurb: 'Balkan sınırları yeniden çizildi; Sırbistan, Karadağ ve Romanya bağımsız oldu; yüz binlerce muhacir göç etti.',
    source: 'Justin McCarthy, Ölüm ve Sürgün'
  },
  {
    id: 'ev-1908',
    year: 1908,
    title: 'II. Meşrutiyet & Bulgaristan Bağımsızlığı',
    category: 'independence',
    coordinates: [23.32, 42.70],
    blurb: 'Resneli Niyazi Bey ve Enver Bey önderliğinde Meşrutiyet ilanı; Bulgaristan’ın tam bağımsızlık kararı.',
    source: 'Feroz Ahmad, İttihat ve Terakki'
  },
  {
    id: 'ev-1912',
    year: 1912,
    title: 'I. Balkan Savaşı & Rumeli’nin Ayrılışı',
    category: 'battle',
    coordinates: [21.43, 42.00],
    blurb: 'Dört Balkan devletinin saldırısıyla beş asırlık Rumeli vilayetleri haftalar içinde elden çıktı.',
    source: 'Carnegie Raporu (1914)'
  },
  {
    id: 'ev-1923',
    year: 1923,
    title: 'Lozan Barış Antlaşması & Mübadele',
    category: 'treaty',
    coordinates: [6.63, 46.51],
    blurb: 'Zorunlu nüfus mübadelesi sözleşmesiyle 400.000 Rumeli Müslümanı Anadolu’ya nakledildi.',
    source: 'Kemal Arı, Büyük Mübadele'
  },
  {
    id: 'ev-1950',
    year: 1950,
    title: 'Yugoslavya Serbest Göç Sözleşmesi',
    category: 'milestone',
    coordinates: [21.43, 41.99],
    blurb: 'Türkiye ile Yugoslavya arasındaki mutabakat ile Makedonya ve Kosova’dan yüz bini aşkın aile anavatana göç etti.',
    source: 'Bilal Şimşir, Rumeli Göçleri'
  },
  {
    id: 'ev-1989',
    year: 1989,
    title: 'Bulgaristan Türklerinin Büyük Göçü',
    category: 'milestone',
    coordinates: [25.40, 42.00],
    blurb: 'Zorunlu asimilasyon politikalarına karşı 360.000 Bulgaristan Türkü sınırdan Türkiye’ye geçti.',
    source: 'Helsinki Watch Raporu'
  },
  {
    id: 'ev-2026',
    year: 2026,
    title: 'Yaşayan Kültürel Miras & Rumeli Atlası',
    category: 'milestone',
    coordinates: [21.43, 42.00],
    blurb: 'Balkanlar genelinde ayakta kalan 44+ mimari şaheser, tahrir defterleri ve yaşayan hafıza projesi.',
    source: 'Rumeli Atlas Araştırma Envanteri'
  }
];

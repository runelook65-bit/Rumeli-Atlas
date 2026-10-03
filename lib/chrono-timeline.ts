/**
 * ChronoAtlas Timeline Interaction Engine for Rumelia Atlas
 *
 * Implements architectural patterns from ChronoAtlas (FayezBast/chronoatlas):
 * - Historical Era Bands (Tarihsel Dönem Kuşakları)
 * - Timeline coordinate scaling and percent translation
 * - Dynamic Chrono Event Ticker (Tarihsel Olay Hapı)
 * - Near-year event resolution for contextual timelines
 */

export interface RumeliaEra {
  id: string;
  name: string;
  shortName: string;
  from: number;
  to: number;
  color: string;
  tint: string;
  description: string;
}

export const RUMELIA_ERAS: RumeliaEra[] = [
  {
    id: 'early',
    name: 'Erken Rumeli & Fetihler',
    shortName: 'Fetihler',
    from: 1354,
    to: 1453,
    color: '#00694C',
    tint: 'rgba(0, 105, 76, 0.16)',
    description: 'Çimpe Kalesi (1354), Edirne’nin başkent oluşu, I. Kosova ve Vardar vadisi Yörük iskânı.'
  },
  {
    id: 'classical',
    name: 'Klasik Osmanlı & İmar',
    shortName: 'Klasik',
    from: 1453,
    to: 1699,
    color: '#9D493A',
    tint: 'rgba(157, 73, 58, 0.16)',
    description: 'İstanbul’un fethi, Rumeli Beylerbeyliği, külliyelerin inşası ve en geniş sınırlar.'
  },
  {
    id: 'reforms',
    name: 'Karlofça & Islahat Devri',
    shortName: 'Islahat',
    from: 1699,
    to: 1878,
    color: '#B38A4A',
    tint: 'rgba(179, 138, 74, 0.16)',
    description: 'Karlofça Antlaşması, Pasarofça, Tanzimat Fermanı ve Tuna/Kosova/Manastır vilayet düzeni.'
  },
  {
    id: 'crisis',
    name: 'Berlin Sonrası & Muhacirler',
    shortName: 'Berlin Devri',
    from: 1878,
    to: 1912,
    color: '#806B82',
    tint: 'rgba(128, 107, 130, 0.16)',
    description: '93 Harbi, Berlin Antlaşması, yoğun muhacir iskânı ve Rumeli Demiryolları çağı.'
  },
  {
    id: 'wars',
    name: 'Balkan Savaşları & Lozan',
    shortName: 'Balkan Savaşları',
    from: 1912,
    to: 1923,
    color: '#A91101',
    tint: 'rgba(169, 17, 1, 0.18)',
    description: 'Rumeli topraklarının kaybı, kitlesel göçler, I. Dünya Savaşı ve Lozan Türk-Yunan Mübadelesi.'
  },
  {
    id: 'migration',
    name: 'Cumhuriyet & Soğuk Savaş',
    shortName: 'Cumhuriyet',
    from: 1923,
    to: 1989,
    color: '#647E91',
    tint: 'rgba(100, 126, 145, 0.16)',
    description: '1950’ler Yugoslavya serbest göç anlaşmaları ve Balkanlar’daki Türk-Müslüman cemaat varlığı.'
  },
  {
    id: 'modern',
    name: 'Büyük Göç & Günümüz',
    shortName: 'Modern',
    from: 1989,
    to: 2026,
    color: '#637C6D',
    tint: 'rgba(99, 124, 109, 0.16)',
    description: '1989 Bulgaristan göçü, Yugoslavya’nın dağılması ve günümüz Balkan Türk-Müslüman mirası.'
  }
];

export function getEraForYear(year: number): RumeliaEra {
  return (
    RUMELIA_ERAS.find(e => year >= e.from && year < e.to) ??
    RUMELIA_ERAS[RUMELIA_ERAS.length - 1]
  );
}

export interface ChronoEvent {
  id: string;
  year: number;
  title: string;
  type: 'milestone' | 'treaty' | 'migration' | 'battle';
  icon: string;
  color: string;
  coordinates: [number, number]; // [lon, lat]
  blurb: string;
}

export const CHRONO_EVENTS: ChronoEvent[] = [
  {
    id: 'ev-1354',
    year: 1354,
    title: 'Çimpe Kalesi & Rumeli’ye Geçiş',
    type: 'milestone',
    icon: '✦',
    color: '#00694C',
    coordinates: [26.75, 40.50],
    blurb: 'Orhan Gazi döneminde Gelibolu’daki Çimpe Kalesi ile Osmanlıların Rumeli’deki ilk askerî ve iskân köprübaşı kuruldu.'
  },
  {
    id: 'ev-1389',
    year: 1389,
    title: 'I. Kosova Savaşı',
    type: 'battle',
    icon: '⚔',
    color: '#A91101',
    coordinates: [21.12, 42.63],
    blurb: 'Kosova sahrasındaki muharebe ile Osmanlıların Güney Slav coğrafyasındaki hakimiyeti pekişti.'
  },
  {
    id: 'ev-1392',
    year: 1392,
    title: 'Üsküp’ün Fethi ve Saruhan İskânı',
    type: 'milestone',
    icon: '✦',
    color: '#00694C',
    coordinates: [21.43, 41.99],
    blurb: 'Yiğit Bey komutasında Üsküp fethedildi; Batı Anadolu Saruhan bölgesinden Yörük ve Türkmen aşiretleri iskân edildi.'
  },
  {
    id: 'ev-1453',
    year: 1453,
    title: 'İstanbul’un Fethi & Payitaht',
    type: 'milestone',
    icon: '✦',
    color: '#9D493A',
    coordinates: [28.97, 41.00],
    blurb: 'Konstantiniyye’nin fethi ile Rumeli ve Anadolu eyaletleri imparatorluğun tek merkezinde birleşti.'
  },
  {
    id: 'ev-1455',
    year: 1455,
    title: 'Prizren ve Kosova Vilayeti Tahriri',
    type: 'milestone',
    icon: '✎',
    color: '#00694C',
    coordinates: [20.74, 42.21],
    blurb: 'Fatih Sultan Mehmed dönemi tahrir defterlerinde bölge kaza ve köylerinin ayrıntılı hâne ve cemaat kayıtları tutuldu.'
  },
  {
    id: 'ev-1699',
    year: 1699,
    title: 'Karlofça Antlaşması & İlk Gerileme',
    type: 'treaty',
    icon: '✎',
    color: '#B38A4A',
    coordinates: [19.93, 45.20],
    blurb: 'Osmanlı Devleti’nin Orta Avrupa’daki büyük toprak kayıpları sonrası Rumeli sınır hatları güneye çekildi.'
  },
  {
    id: 'ev-1860',
    year: 1860,
    title: 'İdâre-i Umûmiye-i Muhâcirîn & Model Kentler',
    type: 'migration',
    icon: '◈',
    color: '#637C6D',
    coordinates: [28.60, 44.25],
    blurb: 'Kırım ve Kafkas göçmenleri için Mecidiye ve Aziziye gibi nizamnâmeli model muhacir kentleri kuruldu.'
  },
  {
    id: 'ev-1878',
    year: 1878,
    title: 'Berlin Antlaşması & 93 Harbi Göçleri',
    type: 'treaty',
    icon: '✎',
    color: '#9D493A',
    coordinates: [13.40, 52.52],
    blurb: 'Balkan sınırları yeniden çizildi; yüz binlerce Türk ve Müslüman muhacir İstanbul, Trakya ve Anadolu’ya sığındı.'
  },
  {
    id: 'ev-1912',
    year: 1912,
    title: 'I. Balkan Savaşı & Rumeli’nin Ayrılışı',
    type: 'battle',
    icon: '⚔',
    color: '#A91101',
    coordinates: [21.43, 42.00],
    blurb: 'Beş asırlık Osmanlı Rumeli idaresi sona erdi; dramatik nüfus hareketleri ve kitlesel kayıplar yaşandı.'
  },
  {
    id: 'ev-1923',
    year: 1923,
    title: 'Lozan Barış Antlaşması & Türk-Yunan Mübadelesi',
    type: 'treaty',
    icon: '✎',
    color: '#A91101',
    coordinates: [6.63, 46.51],
    blurb: 'Batı Trakya ve İstanbul hariç tutularak yaklaşık 400.000 Rumeli Müslümanı Anadolu’ya göç ettirildi.'
  },
  {
    id: 'ev-1950',
    year: 1950,
    title: 'Yugoslavya Serbest Göç Dönemi',
    type: 'migration',
    icon: '◈',
    color: '#647E91',
    coordinates: [21.43, 42.00],
    blurb: 'Yugoslavya ile Türkiye arasındaki centilmenlik anlaşması çerçevesinde Makedonya ve Kosova’dan yoğun aile göçleri başladı.'
  },
  {
    id: 'ev-1989',
    year: 1989,
    title: 'Bulgaristan Türklerinin Büyük Göçü',
    type: 'migration',
    icon: '⚑',
    color: '#B5725F',
    coordinates: [25.40, 42.00],
    blurb: 'Jivkov rejiminin asimilasyon politikaları neticesinde 350.000’den fazla Bulgaristan Türkü anavatana göç etti.'
  },
  {
    id: 'ev-2026',
    year: 2026,
    title: 'Günümüz & Yaşayan Miras',
    type: 'milestone',
    icon: '✦',
    color: '#00694C',
    coordinates: [21.43, 42.00],
    blurb: 'Rumeli coğrafyasında ayakta kalan yüzlerce mimari eser, yaşayan topluluklar ve dijital hafıza arşivi.'
  }
];

/**
 * Returns events within a proximity window around the specified year
 */
export function getEventsNearYear(year: number, window = 6): ChronoEvent[] {
  return CHRONO_EVENTS.filter(ev => Math.abs(ev.year - year) <= window).sort(
    (a, b) => Math.abs(a.year - year) - Math.abs(b.year - year)
  );
}

/**
 * Maps a year to a percentage (0.0 to 1.0) along the timeline (1354 - 2026)
 */
export function yearToTrackPercent(year: number, minYear = 1354, maxYear = 2026): number {
  const clamped = Math.max(minYear, Math.min(maxYear, year));
  return (clamped - minYear) / (maxYear - minYear);
}

/**
 * Maps a percentage (0.0 to 1.0) back to an integer year (1354 - 2026)
 */
export function trackPercentToYear(pct: number, minYear = 1354, maxYear = 2026): number {
  const clamped = Math.max(0, Math.min(1, pct));
  return Math.round(minYear + clamped * (maxYear - minYear));
}

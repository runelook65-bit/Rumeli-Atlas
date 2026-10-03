import { places, type Place } from './atlas-data';
import { MIGRATION_WAVES, type MigrationWave } from './migration-data';

export interface RumeliaEvent {
  id: string;
  slug: string;
  title: string;
  period: string;
  startYear: number;
  endYear: number;
  anchorYear: number;
  description: string;
  scope: string;
  breakpoints: number[];
  bounds: [[number, number], [number, number]];
  sources: string[];
  featuresCount?: number;
}

/**
 * Curated Rumelia Historical Events & Crises
 * Modeled on Historia's event-centric historical mapping paradigm.
 */
export const RUMELIA_EVENTS: RumeliaEvent[] = [
  {
    id: 'event-1354',
    slug: 'fetih-erken-donem-1354',
    title: 'Rumeli’ye Ayak İzi & Erken Fütuhat',
    period: '1354–1389',
    startYear: 1354,
    endYear: 1389,
    anchorYear: 1389,
    description: 'Çimpe Kalesi ile Rumeli yakasına geçiş, Edirne’nin fethi, Meriç vadisi boyunca ilerleyiş ve I. Kosova Savaşı ile Balkan hâkimiyetinin tesis edilmesi.',
    scope: 'Gelibolu · Edirne · Filibe · Üsküp · Kosova Sahrası',
    breakpoints: [1354, 1361, 1371, 1385, 1389],
    bounds: [[20.0, 40.0], [27.5, 43.0]],
    sources: ['Halil İnalcık, Osmanlı İmparatorluğu Klasik Çağ', 'Aşıkpaşazâde Tarihi']
  },
  {
    id: 'event-1453',
    slug: 'istanbul-klasik-donem-1453',
    title: 'İstanbul’un Fethi & Klasik İmar Çağı',
    period: '1453–1526',
    startYear: 1453,
    endYear: 1526,
    anchorYear: 1453,
    description: 'İstanbul’un fethi ardından Fatih ve II. Bayezid dönemlerinde Rumeli şehirlerinin vakıflar, camiler, hanlar ve köprülerle klasik Osmanlı çehresine kavuşması; Saraybosna ve Üsküp’ün imarı.',
    scope: 'İstanbul · Edirne · Üsküp · Saraybosna · Manastır · Prizren',
    breakpoints: [1453, 1455, 1463, 1492, 1521, 1526],
    bounds: [[17.5, 41.0], [29.0, 45.0]],
    sources: ['Machiel Kiel, Ottoman Architecture in Albania', 'Ekrem Hakkı Ayverdi, Avrupa’da Osmanlı Mimârî Eserleri']
  },
  {
    id: 'event-1699',
    slug: 'karlofca-ve-ilk-kayiplar-1699',
    title: 'Kutsal İttifak Savaşları & Karlofça',
    period: '1683–1699',
    startYear: 1683,
    endYear: 1699,
    anchorYear: 1699,
    description: 'II. Viyana Kuşatması sonrası 16 yıl süren savaşlar, Piccolomini’nin Üsküp’ü yakması, Karlofça Antlaşması ile Macaristan ve Mora’nın terki; ilk büyük muhacir akınları.',
    scope: 'Belgrad · Viyana · Üsküp · Bosna Serhaddi · Mora',
    breakpoints: [1683, 1686, 1689, 1690, 1697, 1699],
    bounds: [[16.0, 40.5], [26.0, 46.0]],
    sources: ['Silâhdar Fındıklılı Mehmed Ağa, Silâhdar Tarihi', 'Karlofça Antlaşması Metni']
  },
  {
    id: 'event-1862',
    slug: 'sirbistan-kaleleri-aziziye-1862',
    title: 'Sırbistan Kaleleri Tahliyesi & Aziziye İskânı',
    period: '1862–1867',
    startYear: 1862,
    endYear: 1867,
    anchorYear: 1862,
    description: 'Kanlıca Konferansı ve 1867 Osmanlı garnizon tahliyesi sonrası Belgrad, Şabac, Smederevo ve Užice Müslümanlarının Bosna Sava boyuna hicreti ve planlı Aziziye şehirlerinin kurulması.',
    scope: 'Belgrad · Şabac · Smederevo → Bosna Sava Boyu & Kosova',
    breakpoints: [1862, 1864, 1867],
    bounds: [[16.5, 43.0], [21.5, 45.5]],
    sources: ['BOA İ.DH (Dahiliye İradeleri)', 'Ahmed Cevdet Paşa, Maruzat']
  },
  {
    id: 'event-1878',
    slug: '93-harbi-berlin-1878',
    title: '93 Harbi & Berlin Antlaşması Felaketi',
    period: '1877–1878',
    startYear: 1877,
    endYear: 1878,
    anchorYear: 1878,
    description: 'Tuna Vilayeti ve Niş sancağının tahliyesi, 1,25 milyondan fazla Müslümanın vagonlar ve kafilelerle İstanbul ve Anadolu’ya göçü; Balkanların siyasi haritasının parçalanması.',
    scope: 'Tuna Vilayeti · Niş · Sofya · Filibe · Kosova · Edirne · İstanbul',
    breakpoints: [1877, 1878, 1879, 1881],
    bounds: [[20.0, 41.0], [29.5, 44.5]],
    sources: ['Justin McCarthy, Ölüm ve Sürgün', 'Kemal Karpat, Osmanlı Nüfusu', 'Bilal Şimşir, Rumeli’den Türk Göçleri']
  },
  {
    id: 'event-1912',
    slug: 'balkan-savaslari-1912',
    title: 'Balkan Savaşları & Rumeli’nin Tasfiyesi',
    period: '1912–1913',
    startYear: 1912,
    endYear: 1913,
    anchorYear: 1912,
    description: 'Dört Balkan devletinin saldırısıyla 500 yıllık Osmanlı Rumelisinin haftalar içinde kaybı; Selanik, Manastır, Yanya ve İşkodra’dan yüz binlerce muhacirin Gülcemal vapurları ve trenlerle kaçışı.',
    scope: 'Kosova · Manastır · Selanik · Yanya · İşkodra · Edirne · İstanbul',
    breakpoints: [1912, 1913],
    bounds: [[19.0, 39.5], [29.0, 43.5]],
    sources: ['Carnegie Uluslararası Araştırma Komisyonu Raporu (1914)', 'Genelkurmay ATASE Arşivi']
  },
  {
    id: 'event-1923',
    slug: 'lozan-mubadelesi-1923',
    title: 'Lozan Barış Antlaşması & Nüfus Mübadelesi',
    period: '1923–1926',
    startYear: 1923,
    endYear: 1926,
    anchorYear: 1923,
    description: '30 Ocak 1923 Mübadele Sözleşmesi gereğince Batı Trakya ve İstanbul hariç tutularak Yunanistan’daki ~400.000 Müslüman Türkün Türkiye’ye zorunlu nakli.',
    scope: 'Selanik · Kavala · Drama · Yanya · Girit → İzmir · Samsun · Tekirdağ · Ayvalık',
    breakpoints: [1923, 1924, 1926],
    bounds: [[20.0, 35.0], [29.5, 41.5]],
    sources: ['Lozan Barış Antlaşması Mübadele Protokolü', 'Kemal Arı, Büyük Mübadele', 'Türk Kızılayı Arşivi']
  },
  {
    id: 'event-1989',
    slug: 'bulgaristan-buyuk-goc-1989',
    title: 'Bulgaristan Zorunlu Asimilasyonu & "Büyük Gezi"',
    period: '1989',
    startYear: 1989,
    endYear: 1990,
    anchorYear: 1989,
    description: 'Jivkov rejiminin ad değiştirme ve asimilasyon baskısı sonucu ~360.000 Bulgaristan Türkünün pasaport verilerek Türkiye sınırına sürülmesi; Soğuk Savaş’ın en büyük kitlesel göçü.',
    scope: 'Şumnu · Razgrad · Kırcaali · Hasköy → Kapıkule · Edirne · Bursa · İstanbul',
    breakpoints: [1984, 1989, 1990],
    bounds: [[23.5, 41.0], [28.5, 44.0]],
    sources: ['Ali Eminov, Turkish and Other Muslim Minorities in Bulgaria', 'Helsinki Watch Raporu 1989']
  }
];

/**
 * Dynamically computes chronological breakpoints (critical milestone years)
 * where places, observations, treaties, or migration waves change.
 */
export function getAllBreakpoints(): number[] {
  const set = new Set<number>();

  // 1. Core historical anchor years
  [1354, 1361, 1371, 1389, 1453, 1455, 1463, 1526, 1562, 1683, 1699, 1718, 1739, 1774, 1791, 1830, 1862, 1878, 1881, 1894, 1908, 1912, 1913, 1923, 1926, 1950, 1953, 1989, 2026].forEach(y => set.add(y));

  // 2. Migration waves
  MIGRATION_WAVES.forEach(w => {
    set.add(w.startYear);
    set.add(w.endYear);
  });

  // 3. Events
  RUMELIA_EVENTS.forEach(ev => {
    ev.breakpoints.forEach(b => set.add(b));
  });

  return Array.from(set).sort((a, b) => a - b);
}

/**
 * Find adjacent breakpoints for jumping (Shift + Arrow keys)
 */
export function getAdjacentBreakpoint(currentYear: number, direction: 1 | -1): number | null {
  const breakpoints = getAllBreakpoints();
  if (direction === 1) {
    return breakpoints.find(y => y > currentYear) ?? null;
  } else {
    const reversed = [...breakpoints].reverse();
    return reversed.find(y => y < currentYear) ?? null;
  }
}

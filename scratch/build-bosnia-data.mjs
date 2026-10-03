import fs from 'fs';

const script = `import type { Source, Place } from './atlas-data';

export const bosnianSources: Source[] = [
  {
    id: 'src-ayverdi-bosna',
    title: 'Avrupa’da Osmanlı Mimârî Eserleri: Yugoslavya II (Bosna-Hersek)',
    author: 'Ekrem Hakkı Ayverdi · İstanbul Fetih Cemiyeti',
    date: '1981',
    url: 'https://fetihcemiyeti.org.tr/',
    locator: 'Saraybosna, Mostar, Travnik, Banyaluka, Foça, Poçitel, Koniçe ve Zvornik camileri, köprüleri, bedestenleri ve tekke envanteri',
    kind: 'Birincil mimarlık ve arşiv külliyatı'
  },
  {
    id: 'src-tdv-kiel-bosna',
    title: 'Bosna-Hersek’te Osmanlı Şehirleri ve Mimarî Mirası',
    author: 'Machiel Kiel · TDV İslâm Ansiklopedisi',
    date: '1992–2012',
    url: 'https://islamansiklopedisi.org.tr/muellif/machiel-kiel',
    locator: 'Saraybosna, Mostar, Travnik, Banyaluka, Foça, Vişegrad ve Poçitel maddeleri; tahrir, vakfiye ve kentsel dönüşüm tahlilleri',
    kind: 'Akademik monografi & ansiklopedi'
  },
  {
    id: 'src-sabanovic-bosna',
    title: 'Bosanski Pašaluk: Postanak i upravna podjela (Bosna Paşalığı İdari Tarihi)',
    author: 'Hazim Šabanović · Svjetlost Sarajevo & Orijentalni Institut',
    date: '1959; 1982',
    url: 'https://ois.unsa.ba/',
    locator: 'Krajište Isa-bega Ishakovića 1455, Bosna Sancağı, Hersek Sancağı, Kilis ve Zvornik idari bölünüşü ve vakıf defterleri',
    kind: 'Birincil arşiv neşriyatı & idari tarih'
  },
  {
    id: 'src-bejtic-bosna',
    title: 'Spomenici osmanske arhitekture u Bosni i Hercegovini & Banja Luka pod turskom vladavinom',
    author: 'Alija Bejtić · Prilozi za orijentalnu filologiju (POF), Sarajevo',
    date: '1953–1975',
    url: 'https://pof.ois.unsa.ba/',
    locator: 'Banja Luka Ferhad Paşa Külliyesi, saat kuleleri, köprüler ve Osmanlı çarşılarının mimari evrimi',
    kind: 'Mimarlık ve şehircilik monografisi'
  },
  {
    id: 'src-tahrir-td379-bosna',
    title: 'BOA TD 379 / TD 157 / TD 211: Bosna, Hersek, Zvornik ve Kilis Livâları Mufassal ve İcmâl Tahrir Defterleri (1468–1530)',
    author: 'Devlet Arşivleri Başkanlığı Osmanlı Arşivi (BOA)',
    date: '1468–1530; 2005',
    url: 'https://www.devletarsivleri.gov.tr/',
    locator: 'Saraybosna, Mostar, Travnik, Banyaluka, Tuzla, Foça, Zvornik hâne, mücerred, cizye ve vakıf nüfus kütükleri',
    kind: 'Birincil arşiv tahrir defteri'
  },
  {
    id: 'src-evliya-bosna',
    title: 'Evliya Çelebi Seyahatnâmesi: Bosna Eyaleti, Saraybosna ve Hersek Seyahati (5. Cilt)',
    author: 'Evliya Çelebi · Haz. Y. Dağlı, S. A. Kahraman (Yapı Kredi Yayınları)',
    date: '1660; 2007',
    url: 'https://ykykultur.com.tr/',
    locator: 'Saraybosna Başçarşısı, Taşlıhan, Gazi Hüsrev Bey Külliyesi, Mostar Köprüsü, Alaca Cami ve Travnik vezir sarayları tasvirleri',
    kind: 'Tarihî seyahatnâme ve gözlem'
  },
  {
    id: 'src-kons-bosna',
    title: 'Komisija za očuvanje nacionalnih spomenika Bosne i Hercegovine (KONS) Resmi Tescil Sicili',
    author: 'KONS Bosne i Hercegovine',
    date: '2002–2024',
    url: 'http://old.kons.gov.ba/',
    locator: 'Bosna-Hersek genelinde 1.000’i aşkın milli anıtın mimari tescilleri, 1992–1995 savaşında yıkılan eserlerin envanteri ve rekonstrüksiyon kayıtları',
    kind: 'Resmi kültür anıtları koruma sicili'
  },
  {
    id: 'src-vakuf-izbih',
    title: 'Vakufi u Bosni i Hercegovini: Yıkılan, Gasp Edilen ve İhya Edilen Vakıf Eserleri Envanteri',
    author: 'Vakufska Direkcija Islamske Zajednice u BiH',
    date: '2012–2023',
    url: 'https://vakuf.ba/',
    locator: '1878’den günümüze Bosna’da yıkılan 614 cami, 218 mescit, yüzlerce hamam, medrese ve hanın kadastral durumları',
    kind: 'Vakıf kütüğü ve hasar envanteri'
  },
  {
    id: 'src-austro-census-1879',
    title: 'Haupt-Uebersicht der politischen Eintheilung von Bosnien und der Hercegovina (1879 İlk Avusturya-Macaristan Genel Sayımı & 1910 Sayımı)',
    author: 'K.k. Statistische Central-Commission, Wien',
    date: '1880; 1912',
    url: 'https://alex.onb.ac.at/',
    locator: 'Bosna ve Hersek sancak ve kazalarında Müslüman, Ortodoks, Katolik ve Musevi hane ve nüfus sayımları',
    kind: 'Resmi imparatorluk nüfus sayımı'
  },
  {
    id: 'src-kresevljakovic',
    title: 'Izabrana djela I-IV: Esnafi, hanovi, bedesteni, sahat-kule i kapetanije u Bosni i Hercegovini',
    author: 'Hamdija Kreševljaković · Veselin Masleša, Sarajevo',
    date: '1991',
    url: 'https://www.worldcat.org/title/27431872',
    locator: 'Bosna çarşıları, 21 saat kulesi, kapudanlık teşkilatı kaleleri ve Taşlıhan, Moriça Han, Kolobara monografileri',
    kind: 'Klasik Boşnak-Osmanlı tarih araştırması'
  },
  {
    id: 'src-karpat-bosna-pop',
    title: 'Ottoman Population 1830–1914: Demographic and Social Characteristics',
    author: 'Kemal H. Karpat · The University of Wisconsin Press',
    date: '1985',
    url: 'https://uwpress.wisc.edu/',
    locator: 'Bosna Vilayeti 1831, 1844 ve 1877 salnâme nüfus tabloları, 1878 Avusturya işgali sonrası Türkiye’ye göç eden 150.000 Boşnak muhacir dökümü',
    kind: 'Akademik demografi referansı'
  },
  {
    id: 'src-fzs-bhas-census',
    title: 'Bosna-Hersek Genel Nüfus ve Konut Sayımları (1991 & 2013)',
    author: 'Agencija za statistiku Bosne i Hercegovine (BHAS) & Federalni Zavod za Statistiku (FZS)',
    date: '1993; 2016',
    url: 'http://www.popis.gov.ba/',
    locator: 'Belediyeler ve yerleşim birimleri bazında Boşnak, Sırp, Hırvat etnik ve dinî nüfus dağılımları',
    kind: 'Resmi devlet nüfus istatistiği'
  }
];
`;

fs.writeFileSync('scratch/header.ts', script);
console.log('Header written.');

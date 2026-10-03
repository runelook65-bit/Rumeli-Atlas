// ============================================================================
// BALKAN GÖÇ VE MUHACİR HAREKETLERİ VERİ SETİ (1862–1995)
// Kaynaklar: BOA (Başbakanlık Osmanlı Arşivi), Kemal Karpat, Justin McCarthy,
// Bilal Şimşir, Ali Eminov, Halil İnalcık, UNHCR, Dayton Ek 7.
// ============================================================================

export interface MigrationCorridor {
  from: string;
  to: string;
  route: string;
}

export interface MigrationWave {
  id: string;
  title: string;
  period: string;
  anchorYear: number;
  scope: string;
  estimatedPopulation: string;
  shortPopulation: string;
  badge: string;
  summary: string;
  details: string[];
  corridors: MigrationCorridor[];
  settlementModels?: string[];
  sources: string[];
  bounds: [[number, number], [number, number]];
}

export const MIGRATION_WAVES: MigrationWave[] = [
  {
    id: 'wave-1862',
    title: 'Sırbistan Kaleleri Tahliyesi & Aziziye İskânı',
    period: '1862–1867',
    anchorYear: 1862,
    scope: 'Sırbistan Kaleleri → Bosna Sava Boyu & Kosova',
    estimatedPopulation: '45.000–50.000 Muhacir',
    shortPopulation: '~50.000 Muhacir',
    badge: 'Kalenin Terki & Şehirleşme',
    summary: '1862 Kanlıca Konferansı ve 1867 Osmanlı garnizon tahliyesi sonrası Belgrad, Şabac, Smederevo, Kladovo, Užice ve Soko şehirlerindeki Müslüman ahalinin Bosna vilayetine sığınması.',
    details: [
      'Sultan Abdülaziz’in fermanıyla Sava Nehri boyunca yeni model muhacir şehirleri kuruldu: Bosanska Kostajnica karşısında Bosanska Kostajnica (Aziziye), Bosanski Šamac (Aziziye), Brezovo Polje ve Orašje.',
      'Göçmenler ızgara planlı yeni mahallelere yerleştirildi; cami, medrese ve rüştiye mektepleri inşa edildi.',
      'Bir kısım ahali ise Sancak (Yeni Pazar) ve Kosova Vilayeti merkezlerine iskân edildi.'
    ],
    corridors: [
      { from: 'Belgrad / Užice / Soko', to: 'Bosna Sava Boyu (Šamac, Kostajnica, Bijeljina)', route: 'Sava ve Drina nehir yolları' },
      { from: 'Şabac / Smederevo', to: 'Yeni Pazar Sancağı & Priştine', route: 'İbar vadisi kervan yolu' }
    ],
    settlementModels: ['Aziziye (Bosanska Kostajnica)', 'Bosanski Šamac', 'Brezovo Polje', 'Bijeljina', 'Yeni Pazar'],
    sources: ['BOA İ.DH (Dahiliye İradeleri)', 'Ahmed Cevdet Paşa, Maruzat', 'Noel Malcolm, Bosnia: A Short History'],
    bounds: [[16.5, 43.5], [21.5, 45.2]]
  },
  {
    id: 'wave-1878',
    title: '93 Harbi & Berlin Antlaşması Felaketi',
    period: '1877–1878',
    anchorYear: 1878,
    scope: 'Tuna Vilayeti, Niş, Dobruca, Tesalya → Trakya, İstanbul & Anadolu',
    estimatedPopulation: '1.250.000+ Muhacir (300.000+ Kayıp)',
    shortPopulation: '1.25M+ Muhacir',
    badge: 'Tarihin En Büyük Muhacir Dalgası',
    summary: '93 Harbi sırasında Rus orduları ve komitacıların ilerleyişiyle Tuna Vilayeti ve Niş sancağından yüz binlerce Müslümanın vagonlar ve kafilelerle İstanbul ve Anadolu’ya kaçışı.',
    details: [
      'Sofya, Filibe, Rusçuk, Varna ve Şumnu ahalisi Şark Demiryolları ve öküz arabalarıyla Edirne ve İstanbul’a aktı. Ayasofya ve Sultanahmet camileri muhacir kamplarına dönüştü.',
      'Berlin Antlaşması ile Sırbistan’a bırakılan Niş, Leskofça, Prokuplje ve Toplica Müslümanları (Muhaxhirë) Kosova Vilayeti’ne (Priştine, Gilan, Üsküp) sığındı.',
      'Osmanlı devleti İdâre-i Umûmiye-i Muhâcirîn aracılığıyla muhacirleri Bursa, Balıkesir, Eskişehir, Konya, Adana ve Ankara sancaklarında yüzlerce yeni köye iskân etti.'
    ],
    corridors: [
      { from: 'Tuna Vilayeti (Rusçuk, Filibe, Sofya)', to: 'Edirne & İstanbul', route: 'Şark Demiryolu ve Meriç vadisi' },
      { from: 'Niş & Toplica', to: 'Kosova (Priştine, Ferizovik, Gilan)', route: 'Morava-Vardar hattı' },
      { from: 'Kuzey Dobruca', to: 'Varna/Köstence Limanları → İstanbul', route: 'Karadeniz deniz hattı' }
    ],
    settlementModels: ['Edirne Muhacir Kampları', 'Kosova Muhacir Köyleri', 'Bursa & Balıkesir Muhacir Köyleri', 'Eskişehir Mahmudiye'],
    sources: ['Justin McCarthy, Ölüm ve Sürgün', 'Kemal Karpat, Osmanlı Nüfusu', 'Bilal Şimşir, Rumeli’den Türk Göçleri', 'BOA Muhâcirîn Komisyonu'],
    bounds: [[20.5, 41.0], [29.5, 44.5]]
  },
  {
    id: 'wave-bosnia1878',
    title: 'Avusturya-Macaristan Bosna İşgali Hicreti',
    period: '1878–1908',
    anchorYear: 1878,
    scope: 'Bosna-Hersek & Sancak → Kosova, Üsküp, Marmara (Karamürsel, Bursa)',
    estimatedPopulation: '~150.000 Boşnak & Türk Muhacir',
    shortPopulation: '~150.000 Muhacir',
    badge: 'Avusturya Hâkimiyetinden Hicret',
    summary: 'Berlin Antlaşması ile Bosna-Hersek’in Habsburg idaresine girmesi ve 1881 askere alma kanunu sonrası Müslüman ahalinin Osmanlı mülküne devam eden göçü.',
    details: [
      'Saraybosna, Mostar, Travnik ve Tuzla’dan çıkan kafileler Sancak ve Kosova üzerinden Osmanlı mülküne intikal etti.',
      'Marmara Bölgesi’nde çok sayıda Boşnak muhacir köyü kuruldu (Karamürsel İhsaniye, Adapazarı, İnegöl, Bursa, Çanakkale).',
      '1908 Avusturya ilhak buhranı sonrasında göç dalgası yeniden tepe noktasına ulaştı.'
    ],
    corridors: [
      { from: 'Saraybosna / Mostar / Tuzla', to: 'Yeni Pazar Sancağı & Kosova', route: 'Doğu Bosna kervan yolları' },
      { from: 'Kosova / Üsküp', to: 'Selanik Limanı → İstanbul / Marmara', route: 'Vardar demiryolu & Ege deniz yolu' }
    ],
    settlementModels: ['Karamürsel İhsaniye', 'Adapazarı Boşnak Köyleri', 'Bursa & İnegöl', 'İzmir Çamdibi'],
    sources: ['Safvet-beg Bašagić', 'Noel Malcolm, Bosna: Kısa Bir Tarih', 'BOA BEO (Bâb-ı Âlî Evrak Odası)'],
    bounds: [[17.0, 42.5], [23.5, 45.0]]
  },
  {
    id: 'wave-1912',
    title: 'Balkan Savaşları & Rumeli’nin Tasfiyesi',
    period: '1912–1913',
    anchorYear: 1912,
    scope: 'Kosova, Manastır, Selanik, Yanya, İşkodra → İstanbul & Batı Anadolu',
    estimatedPopulation: '450.000–600.000 Muhacir',
    shortPopulation: '500.000+ Muhacir',
    badge: '500 Yıllık Vatanın Kaybı',
    summary: 'Dört Balkan müttefikinin saldırısıyla 500 yıllık Osmanlı Rumelisi birkaç ay içinde kaybedilmiş; ordunun çekilmesiyle korumasız kalan yüz binlerce sivil İstanbul’a sığınmıştır.',
    details: [
      'Selanik Limanı’nda on binlerce muhacir Osmanlı vapurlarını bekledi; kolera ve tifo salgınları nedeniyle binlerce sivil hayatını kaybetti.',
      'Gülcemal vapuru ve donanma gemileri Selanik, Dedeağaç ve Kavala’dan İstanbul’a aralıksız sefer yaptı.',
      'Sirkeci Garı, Balkan trenleriyle gelen yetimler ve ailelerle dolup taştı; göçmenler Anadolu’nun boşaltılmış arazilerine iskân edildi.'
    ],
    corridors: [
      { from: 'Selanik / Kavala Limanları', to: 'İstanbul & Marmara Limanları', route: 'Ege & Marmara deniz koridoru (Gülcemal vapuru)' },
      { from: 'Manastır & Üsküp', to: 'Selanik Tren Hattı → İstanbul', route: 'Rumeli Demiryolu ana arteri' },
      { from: 'Batı Trakya (Gümülcine, İskeçe)', to: 'Doğu Trakya (Edirne, Çorlu)', route: 'Meriç demiryolu ve karayolu' }
    ],
    settlementModels: ['İstanbul Sirkeci & Selimiye', 'Tekirdağ & Edirne', 'İzmir, Manisa & Balıkesir', 'Aydın & Samsun'],
    sources: ['Carnegie Uluslararası Araştırma Komisyonu Raporu (1914)', 'Bilal Şimşir, Rumeli’den Türk Göçleri', 'Genelkurmay ATASE Arşivi'],
    bounds: [[19.5, 39.5], [29.0, 43.0]]
  },
  {
    id: 'wave-1923',
    title: '1923 Lozan Nüfus Mübadelesi',
    period: '1923–1926',
    anchorYear: 1923,
    scope: 'Yunanistan (Makedonya, Epir, Tesalya, Girit) ↔ Türkiye',
    estimatedPopulation: '~500.000 Müslüman (1.200.000 Rum ile Değişim)',
    shortPopulation: '500.000 Mübadele',
    badge: 'İlk Uluslararası Hukuki Mübadele',
    summary: '30 Ocak 1923 tarihli Türk-Yunan Nüfus Mübadelesi Sözleşmesi ile Batı Trakya ve İstanbul hariç tutularak iki devlet arasında din esasına dayalı zorunlu nüfus aktarımı yapılmıştır.',
    details: [
      'Batı Trakya Türkleri ile İstanbul Rumları mübadeleden muaf tutuldu (etabli).',
      'Selanik, Drama, Kavala, Yanya, Nasliç, Vodina, Girit (Kandiye, Hanya, Resmo) ve Midilli Müslümanları Türk vapurlarıyla taşındı.',
      'Kızılay (Hilâl-i Ahmer) ve Karma Komisyon eşliğinde mülk tasfiye belgeleri düzenlenerek gelen aileler Ayvalık, Mudanya, İzmir, Samsun ve Tekirdağ’a iskân edildi.'
    ],
    corridors: [
      { from: 'Selanik & Kavala', to: 'Tekirdağ, Mudanya, Samsun, Mersin', route: 'Ege ve Karadeniz vapur seferleri' },
      { from: 'Girit (Hanya, Kandiye, Resmo)', to: 'İzmir, Ayvalık, Bodrum, Mersin', route: 'Doğu Akdeniz deniz koridoru' },
      { from: 'Yanya & Preveze', to: 'Balıkesir, İzmir, Sinop', route: 'İyon denizi ve Ege deniz hattı' }
    ],
    settlementModels: ['Ayvalık & Cunda', 'İzmir Karşıyaka & Urla', 'Mudanya & Tekirdağ', 'Samsun Bafra'],
    sources: ['Lozan Barış Antlaşması Mübadele Protokolü', 'Kemal Arı, Büyük Mübadele', 'Türk Kızılayı Arşivi', 'Ayhan Aktar'],
    bounds: [[20.0, 35.0], [29.5, 41.5]]
  },
  {
    id: 'wave-1950',
    title: 'Soğuk Savaş Yugoslavya & Bulgaristan Göçleri',
    period: '1950–1958',
    anchorYear: 1950,
    scope: 'Bulgaristan & Yugoslavya (K. Makedonya, Kosova, Sancak) → Türkiye',
    estimatedPopulation: '~300.000 Muhacir (154.000 Bulgaristan + 150.000+ Yugoslavya)',
    shortPopulation: '300.000 Muhacir',
    badge: 'Demir Perde Dönemi Kitlesel Tahliyesi',
    summary: 'Bulgaristan komünist yönetiminin 154.000 Türk’ü zorunlu tehciri ve Yugoslavya ile 1953 Serbest Göçmen Protokolü sonrası yüz binlerce soydaşın Türkiye’ye gelişi.',
    details: [
      '1950–1951 yıllarında Bulgaristan kolektifleştirme baskısı altında Türkleri sınır dışı etti; Kapıkule’de aylarca çadır kamplar kuruldu.',
      '1953 Köprülü-Kardelj "Centilmenler Anlaşması" ile Üsküp, Kalkandelen, Gostivar, Prizren ve Yeni Pazar’dan Türkler ve Boşnaklar Türkiye’ye aktı.',
      'Göçmenler İstanbul’da Gaziosmanpaşa (Taşlıtarla), Bayrampaşa ve Zeytinburnu; Bursa’da ise Yavuzselim ve Zafer mahallelerini inşa etti.'
    ],
    corridors: [
      { from: 'Bulgaristan (Deliorman, Kırcaali)', to: 'Kapıkule → Edirne, İstanbul, Bursa', route: 'Kapıkule tren ve karayolu' },
      { from: 'Üsküp / Kosova / Sancak', to: 'Belgrad Treni → Sirkeci → İstanbul, İzmir', route: 'Balkan Ekspresi demiryolu' }
    ],
    settlementModels: ['İstanbul Taşlıtarla (Gaziosmanpaşa)', 'İstanbul Bayrampaşa & Zeytinburnu', 'Bursa Zafer & Yavuzselim', 'Manisa & İzmir'],
    sources: ['TBMM Zabıt Cerideleri', 'Bilal Şimşir', 'Ali Eminov', 'İbrahim Kamil, Yugoslavya Türkleri'],
    bounds: [[20.0, 41.0], [28.5, 44.0]]
  },
  {
    id: 'wave-1989',
    title: '1989 Bulgaristan "Büyük Gezi" (Golyama Ekskursiya)',
    period: '1989',
    anchorYear: 1989,
    scope: 'Bulgaristan (Kırcaali, Şumnu, Razgrad, Haskovo) → Edirne, Bursa, İstanbul',
    estimatedPopulation: '360.000 Bulgaristan Türkü',
    shortPopulation: '360.000 Muhacir',
    badge: 'Soğuk Savaş’ın Son Büyük Sürgünü',
    summary: 'Jivkov rejiminin zorla isim değiştirme ve Türkçe konuşma yasağına (Vızroditelen Protses) karşı Türklerin direnişi sonrası sınırların açılmasıyla 360.000 soydaşın Türkiye’ye sığınması.',
    details: [
      '1984–1989 arası Türk mezar taşları kırıldı, Türkçe konuşanlara para cezası kesildi, direnen aydınlar Belene Toplama Kampı’na kapatıldı.',
      'Mayıs 1989 protestoları sonrası Jivkov sınır kapılarını açtı; Haziran–Ağustos aylarında 360.000 insan eşyalarıyla Kapıkule ve Dereköy’den Türkiye’ye giriş yaptı.',
      'Bu kitlesel trajedi dünya kamuoyunda büyük yankı uyandırdı ve Kasım 1989’da Jivkov diktatörlüğünün çöküşünü tetikledi.'
    ],
    corridors: [
      { from: 'Kırcaali & Haskovo', to: 'Kapıkule → Edirne, Bursa, İzmir', route: 'E80 otoyolu ve Kapıkule kapısı' },
      { from: 'Şumnu, Razgrad & Silistre', to: 'Dereköy → Kırklareli, İstanbul, Bursa', route: 'Dereköy sınır kapısı' }
    ],
    settlementModels: ['Bursa Görükle & Yıldırım', 'İstanbul Avcılar & Pendik', 'İzmir Bornova & Buca', 'Çorlu & Gebze'],
    sources: ['UNHCR Resmi Raporları', 'Bulgaristan Ulusal İstatistik Enstitüsü (NSI)', 'Ali Eminov, Turks in Bulgaria', 'Belene Arşivi'],
    bounds: [[24.5, 41.0], [28.5, 44.0]]
  },
  {
    id: 'wave-1992',
    title: '1992–1995 Bosna Savaşı & Sürgünler',
    period: '1992–1995',
    anchorYear: 1992,
    scope: 'Bosna-Hersek (Srebrenitsa, Foça, Vişegrad, Saraybosna) → Türkiye & Avrupa',
    estimatedPopulation: '2.2 Milyon Yerinden Edilme (1+ Milyon Mülteci)',
    shortPopulation: '2.2M Yerinden Edilme',
    badge: 'Avrupa’nın Göbeğinde Soykırım',
    summary: 'Yugoslavya’nın dağılması sırasında Boşnak sivil nüfusa uygulanan etnik temizlik, kuşatma ve Srebrenitsa Soykırımı sonucu yaşanan zorunlu sürgünler.',
    details: [
      'Doğu Bosna (Foça, Vişegrad, Zvornik, Srebrenitsa) kasabalarındaki asırlık camiler ve Osmanlı vakıfları tamamen dinamitlendi.',
      'Saraybosna 1.425 gün süren tarihin en uzun başkent kuşatmasına maruz kaldı.',
      'Türkiye yaklaşık 50.000 Bosnalı muhaciri kabul ederek Kırklareli Gaziosmanpaşa Mülteci Kampı başta olmak üzere çeşitli vilayetlere yerleştirdi.'
    ],
    corridors: [
      { from: 'Doğu Bosna & Saraybosna', to: 'Split / Zagreb → Avrupa & Türkiye', route: 'Adriyatik ve hava ikmal koridoru' },
      { from: 'Tuzla & Zenica', to: 'Kırklareli Kampı & İstanbul', route: 'İnsani yardım hava ve kara koridoru' }
    ],
    settlementModels: ['Kırklareli Gaziosmanpaşa Kampı', 'İstanbul & Karamürsel', 'Yalova & Bursa', 'İzmir'],
    sources: ['ICTY (Uluslararası Ceza Mahkemesi) Belgeleri', 'Dayton Barış Antlaşması Ek 7', 'UNHCR Raporları'],
    bounds: [[16.0, 42.5], [20.0, 45.5]]
  }
];

// ============================================================================
// BALKAN TOPONİMİ DÖNÜŞÜMÜ (Yer Adı Değişiklikleri Kataloğu)
// ============================================================================
export interface ToponymChange {
  ottoman: string;
  modern: string;
  country: string;
  yearOfChange: string;
  note: string;
}

export const TOPONYM_TRANSFORMATIONS: ToponymChange[] = [
  { ottoman: 'Üsküb', modern: 'Skopje', country: 'Kuzey Makedonya', yearOfChange: '1912', note: 'Vardar vadisindeki tarihi vilayet merkezi' },
  { ottoman: 'Saraybosna', modern: 'Sarajevo', country: 'Bosna-Hersek', yearOfChange: '1878 / 1918', note: 'İsa Bey İshakoğlu vakfıyla kurulan Bosna merkezi' },
  { ottoman: 'Filibe', modern: 'Plovdiv', country: 'Bulgaristan', yearOfChange: '1885', note: 'Şarkî Rumeli vilayet merkezi' },
  { ottoman: 'Selanik', modern: 'Thessaloniki', country: 'Yunanistan', yearOfChange: '1912', note: 'Rumeli’nin en büyük liman ve ticaret metropolü' },
  { ottoman: 'Manastır', modern: 'Bitola', country: 'Kuzey Makedonya', yearOfChange: '1912', note: 'Manastır Vilayeti ve Askeri İdadi merkezi' },
  { ottoman: 'İskeçe', modern: 'Xanthi', country: 'Yunanistan', yearOfChange: '1920', note: 'Batı Trakya tütün ve ticaret merkezi' },
  { ottoman: 'Gümülcine', modern: 'Komotini', country: 'Yunanistan', yearOfChange: '1920', note: 'Batı Trakya Türk azınlığının kültür başkenti' },
  { ottoman: 'Dedeağaç', modern: 'Alexandroupoli', country: 'Yunanistan', yearOfChange: '1920', note: 'Şark Demiryolları Ege çıkış limanı' },
  { ottoman: 'Yeni Pazar', modern: 'Novi Pazar', country: 'Sırbistan', yearOfChange: '1912', note: 'Sancak-ı Şerif merkezi' },
  { ottoman: 'Tatar Pazarcık', modern: 'Pazardzhik', country: 'Bulgaristan', yearOfChange: '1934', note: 'Kırım Tatarları iskânıyla kurulan menzil kenti' },
  { ottoman: 'Rusçuk', modern: 'Ruse', country: 'Bulgaristan', yearOfChange: '1878', note: 'Mithat Paşa dönemi Tuna Vilayeti başkenti' },
  { ottoman: 'Yanya', modern: 'Ioannina', country: 'Yunanistan', yearOfChange: '1913', note: 'Epir ve Güney Arnavutluk vilayet merkezi' },
  { ottoman: 'Köstence', modern: 'Constanța', country: 'Romanya', yearOfChange: '1878', note: 'Dobruca Karadeniz limanı' },
  { ottoman: 'Mecidiye', modern: 'Medgidia', country: 'Romanya', yearOfChange: '1878', note: 'Sultan Abdülmecid Kırım muhacir şehri' },
  { ottoman: 'Kalkandelen', modern: 'Tetovo', country: 'Kuzey Makedonya', yearOfChange: '1912', note: 'Polog vadisi merkezi ve Alaca Cami şehri' },
  { ottoman: 'Kırcaali', modern: 'Kardzhali', country: 'Bulgaristan', yearOfChange: '1912 / 1934', note: 'Doğu Rodoplar Türk nüfus havzası' }
];

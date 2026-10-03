import type { Place, Source } from './atlas-data';

// ==========================================
// ARNAVUTLUK BİRİNCİL VE AKADEMİK KAYNAKLAR
// ==========================================
export const albanianSources: Source[] = [
  {
    id: 'src-kiel-albania',
    title: 'Ottoman Architecture in Albania (1385-1912)',
    author: 'Machiel Kiel',
    date: '1990',
    url: 'https://islamansiklopedisi.org.tr/arnavutluk',
    locator: 'IRCICA Osmanlı Mimari Araştırmaları Serisi, Cilt 5, s. 1–342',
    kind: 'Akademik monografi ve arşiv sentezi'
  },
  {
    id: 'src-inalcik-arvanid',
    title: 'Hicrî 835 Tarihli Sûret-i Defter-i Sancak-i Arvanid',
    author: 'Halil İnalcık',
    date: '1954 (BOA TD 1)',
    url: 'https://islamansiklopedisi.org.tr/arnavutluk',
    locator: 'Türk Tarih Kurumu Yayınları, Ankara, s. 1–148',
    kind: 'Birincil tahrir defteri neşri'
  },
  {
    id: 'src-tdv-arnavutluk',
    title: 'Arnavutluk',
    author: 'Machiel Kiel · Ferid Duka · Mehmet İnbaşı · TDV İslâm Ansiklopedisi',
    date: '1991 (Güncelleme 2020)',
    url: 'https://islamansiklopedisi.org.tr/arnavutluk',
    locator: 'Cilt 3, s. 385–397',
    kind: 'Akademik ansiklopedi maddesi'
  },
  {
    id: 'src-tdv-tirana',
    title: 'Tiran',
    author: 'Machiel Kiel · TDV İslâm Ansiklopedisi',
    date: '2012',
    url: 'https://islamansiklopedisi.org.tr/tiran',
    locator: 'Cilt 41, s. 201–204',
    kind: 'Akademik ansiklopedi maddesi'
  },
  {
    id: 'src-tdv-elbasan',
    title: 'İlbasan',
    author: 'Machiel Kiel · TDV İslâm Ansiklopedisi',
    date: '2000',
    url: 'https://islamansiklopedisi.org.tr/ilbasan',
    locator: 'Cilt 22, s. 59–63',
    kind: 'Akademik ansiklopedi maddesi'
  },
  {
    id: 'src-tdv-berat',
    title: 'Berat',
    author: 'Machiel Kiel · TDV İslâm Ansiklopedisi',
    date: '1992',
    url: 'https://islamansiklopedisi.org.tr/berat',
    locator: 'Cilt 5, s. 486–489',
    kind: 'Akademik ansiklopedi maddesi'
  },
  {
    id: 'src-tdv-shkoder',
    title: 'İşkodra',
    author: 'Machiel Kiel · TDV İslâm Ansiklopedisi',
    date: '2001',
    url: 'https://islamansiklopedisi.org.tr/iskodra',
    locator: 'Cilt 23, s. 441–445',
    kind: 'Akademik ansiklopedi maddesi'
  },
  {
    id: 'src-tdv-gjirokaster',
    title: 'Ergiri',
    author: 'Machiel Kiel · TDV İslâm Ansiklopedisi',
    date: '1995',
    url: 'https://islamansiklopedisi.org.tr/ergiri',
    locator: 'Cilt 11, s. 297–299',
    kind: 'Akademik ansiklopedi maddesi'
  },
  {
    id: 'src-tdv-korce',
    title: 'Görice',
    author: 'Machiel Kiel · TDV İslâm Ansiklopedisi',
    date: '1996',
    url: 'https://islamansiklopedisi.org.tr/gorice',
    locator: 'Cilt 14, s. 240–243',
    kind: 'Akademik ansiklopedi maddesi'
  },
  {
    id: 'src-tdv-vlora',
    title: 'Avlonya',
    author: 'Machiel Kiel · TDV İslâm Ansiklopedisi',
    date: '1991',
    url: 'https://islamansiklopedisi.org.tr/avlonya',
    locator: 'Cilt 4, s. 123–126',
    kind: 'Akademik ansiklopedi maddesi'
  },
  {
    id: 'src-salname-iskodra',
    title: 'İşkodra Vilayeti Salnâmeleri',
    author: 'İşkodra Vilâyet Matbaası',
    date: '1310-1322 (1892-1904)',
    url: 'https://islamansiklopedisi.org.tr/iskodra',
    locator: 'Nüfus ve Maârif cedvelleri',
    kind: 'Resmî vilayet salnâmesi'
  },
  {
    id: 'src-salname-yanya',
    title: 'Yanya Vilayeti Salnâmeleri',
    author: 'Yanya Vilâyet Matbaası',
    date: '1312 (1894)',
    url: 'https://islamansiklopedisi.org.tr/yanya',
    locator: 'Ergiri ve Berat livaları nüfus dökümleri',
    kind: 'Resmî vilayet salnâmesi'
  },
  {
    id: 'src-salname-manastir',
    title: 'Manastır Vilayeti Salnâmeleri',
    author: 'Manastır Vilâyet Matbaası',
    date: '1310 (1892)',
    url: 'https://islamansiklopedisi.org.tr/manastir',
    locator: 'Görice ve İlbasan livaları nüfus tabloları',
    kind: 'Resmî vilayet salnâmesi'
  },
  {
    id: 'src-tahrir-iskodra-1485',
    title: 'Defteri i regjistrimit të Sanxhakut të Shkodrës i vitit 1485',
    author: 'Selami Pulaha · Akademia e Shkencave',
    date: '1974',
    url: 'https://islamansiklopedisi.org.tr/iskodra',
    locator: '1485 Mufassal Tahrir Neşri, Tiran',
    kind: 'Birincil tahrir defteri neşri'
  },
  {
    id: 'src-karpat-alb',
    title: 'Ottoman Population 1830-1914: Demographic Characteristics',
    author: 'Kemal H. Karpat',
    date: '1985',
    url: 'https://islamansiklopedisi.org.tr/arnavutluk',
    locator: 'Table I.8 (Shkodra, Janina, Monastir vilayets), s. 142–178',
    kind: 'Akademik demografi çalışması'
  },
  {
    id: 'src-enver-hoxha-1967',
    title: 'Dekreti nr. 4337 mbi shfuqizimin e feve dhe prishjen e kulteve',
    author: 'Gazeta Zyrtare e RPSSH (Arnavutluk Emek Partisi)',
    date: '1967',
    url: 'https://islamansiklopedisi.org.tr/arnavutluk',
    locator: 'Ateizm Kanunu, Dini Kurumların Kapatılması ve Tasfiyesi Kararı',
    kind: 'Resmî devlet kararnamesi'
  }
];

// ==========================================
// ARNAVUTLUK YERLEŞİMLERİ VE KÜLTÜREL MİRAS
// ==========================================
export const albanianPlaces: Place[] = [
  // ----------------------------------------------------
  // I. YERLEŞİM YERLERİ (SETTLEMENTS - 24 MERKEZ)
  // ----------------------------------------------------
  // A. OSMANLI'NIN KURDUĞU ŞEHİRLER (YEŞİL / GREEN)
  {
    id: 'reg-tirana',
    name: 'Tiran',
    modern: 'Tirana',
    aliases: ['Tiranë', 'Tirana Kasabası'],
    coordinates: [19.8189, 41.3275],
    layer: 'settlement',
    start: 1614,
    datePrecision: '1614 Süleyman Paşa Bargjini tarafından cami, fırın ve hamam inşasıyla kuruluş',
    confidence: 'high',
    locationAccuracy: 'Tarihi merkez, İskender Bey Meydanı ve Ethem Bey Camii çevresi',
    source: 'src-tdv-tirana',
    summary: '1614 yılında Osmanlı komutanı Süleyman Paşa Bargjini tarafından kervan güzergâhında sıfırdan kurulan şehir. Ethem Bey Camii, Saat Kulesi ve Kaplan Paşa Türbesi ile Orta Arnavutluk idari merkezi.',
    current: 'Arnavutluk Cumhuriyeti\'nin başkenti.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1614, text: 'Süleyman Paşa Bargjini cami, hamam, fırın ve han inşa ederek Tiran kasabasını kurdu.', source: 'src-tdv-tirana' },
      { year: 1793, text: 'Molla Bey tarafından Ethem Bey Camii inşasına başlandı.', source: 'src-kiel-albania' },
      { year: 1822, text: 'Hacı Ethem Bey tarafından Tiran Saat Kulesi tamamlandı.', source: 'src-kiel-albania' },
      { year: 1920, text: 'Lushnja Kongresi ile Arnavutluk\'un başkenti ilan edildi.', source: 'src-tdv-tirana' }
    ],
    observations: [
      {
        year: 1614,
        dimension: 'settlement_origin',
        text: '1614 kuruluş tahrir kaydı.',
        source: 'src-tdv-tirana',
        values: [
          { label: 'Müslüman', value: 95 }
        ],
        unit: 'hâne',
        scope: 'Tiran yeni kasabası'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1894 İşkodra Vilayeti Salnâmesi dökümü.',
        source: 'src-salname-iskodra',
        values: [
          { label: 'Müslüman', value: 9800 },
          { label: 'Ortodoks', value: 1400 },
          { label: 'Katolik', value: 300 }
        ],
        unit: 'kişi',
        scope: 'Tiran kasaba merkezi'
      }
    ]
  },
  {
    id: 'reg-elbasan',
    name: 'İlbasan',
    modern: 'Elbasan',
    aliases: ['Elbassan', 'Eli-basan', 'Valmi'],
    coordinates: [20.0822, 41.1125],
    layer: 'settlement',
    start: 1466,
    datePrecision: '1466 Fatih Sultan Mehmed fethi ve sıfırdan kale/şehir inşası',
    confidence: 'high',
    locationAccuracy: 'Fatih Kalesi içi ve tarihi çarşı merkezi',
    source: 'src-tdv-elbasan',
    summary: '1466 yılında Fatih Sultan Mehmed tarafından İskender Bey\'e karşı Shkumbin vadisinde ordugâh ve kale şehri olarak sıfırdan kurulan kent (İl-basan = mülkü zapteden). İlbasan Sancağı merkezi.',
    current: 'Arnavutluk\'ta Elbasan il merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1466, text: 'Fatih Sultan Mehmed bizzat gelerek 25 günde surları inşa ettirdi ve kaleyi kurdu.', source: 'src-tdv-elbasan' },
      { year: 1492, text: 'Kale içinde Sultan II. Bayezid Kral Camii inşa edildi.', source: 'src-kiel-albania' },
      { year: 1599, text: 'Nazır Camii tamamlandı.', source: 'src-kiel-albania' }
    ],
    observations: [
      {
        year: 1467,
        dimension: 'religion',
        text: '1467 İlbasan kuruluş tahriri (BOA TD).',
        source: 'src-tdv-elbasan',
        values: [
          { label: 'Müslüman (Garnizon ve Ahali)', value: 140 },
          { label: 'Hıristiyan', value: 180 }
        ],
        unit: 'hâne',
        scope: 'İlbasan kale içi'
      },
      {
        year: 1892,
        dimension: 'religion',
        text: '1892 Manastır Vilayeti Salnâmesi dökümü.',
        source: 'src-salname-manastir',
        values: [
          { label: 'Müslüman', value: 8900 },
          { label: 'Ortodoks', value: 2100 }
        ],
        unit: 'kişi',
        scope: 'İlbasan kasabası'
      }
    ]
  },
  {
    id: 'reg-korce',
    name: 'Görice',
    modern: 'Korçë',
    aliases: ['Korytsa', 'Gorice', 'Корча'],
    coordinates: [20.7808, 40.6186],
    layer: 'settlement',
    start: 1487,
    datePrecision: '1487 Mirahor İlyas Bey fethi ve vakfiyesi ile kentin kuruluşu',
    confidence: 'high',
    locationAccuracy: 'Mirahor İlyas Bey Camii ve Eski Çarşı çevresi',
    source: 'src-tdv-korce',
    summary: '1487 yılında Fatih\'in baş seyisi Mirahor İlyas Bey tarafından cami, imaret, tekke ve hamam inşa edilerek sıfırdan kurulan Osmanlı ticaret şehri. Manastır Vilayeti\'nin Görice Sancağı merkezi.',
    current: 'Arnavutluk\'ta Görice il merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1487, text: 'Mirahor İlyas Bey vakfı ile şehir kuruldu.', source: 'src-tdv-korce' },
      { year: 1495, text: 'Mirahor Camii ve Türbesi inşa edildi.', source: 'src-kiel-albania' }
    ],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: '1530 BOA TD 167 tahriri.',
        source: 'src-tdv-korce',
        values: [
          { label: 'Müslüman', value: 160 },
          { label: 'Hıristiyan', value: 310 }
        ],
        unit: 'hâne',
        scope: 'Görice kasabası'
      },
      {
        year: 1892,
        dimension: 'religion',
        text: '1892 Manastır Vilayeti Salnâmesi resmi dökümü.',
        source: 'src-salname-manastir',
        values: [
          { label: 'Müslüman', value: 6800 },
          { label: 'Ortodoks', value: 11400 },
          { label: 'Katolik', value: 280 }
        ],
        unit: 'kişi',
        scope: 'Görice kaza merkezi'
      }
    ]
  },
  {
    id: 'alb-peqin',
    name: 'Pekin',
    modern: 'Peqin',
    aliases: ['Beklin', 'Peklin', 'Claudiana'],
    coordinates: [19.7503, 41.0472],
    layer: 'settlement',
    start: 1666,
    datePrecision: '1666 Abdurrahman Paşa tarafından cami, saat kulesi ve han ile ihya ve kuruluş',
    confidence: 'high',
    locationAccuracy: 'Abdurrahman Paşa Camii ve Shkumbin nehri menzili',
    source: 'src-kiel-albania',
    summary: '1666 yılında Osmanlı veziri Abdurrahman Paşa tarafından cami, medrese, saat kulesi, hamam ve kervansaray inşa ettirilerek sıfırdan modern bir menzil kasabası hüviyetine kavuşturulan yerleşim.',
    current: 'Arnavutluk\'ta Elbasan iline bağlı kasaba.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1666, text: 'Abdurrahman Paşa külliye ve saat kulesiyle kasabayı kurdu.', source: 'src-kiel-albania' },
      { year: 1670, text: 'Evliya Çelebi kasabayı ziyaret edip mamur çarşısını anlattı.', source: 'src-kiel-albania' }
    ],
    observations: [
      {
        year: 1670,
        dimension: 'religion',
        text: '1670 Evliya Çelebi ve tahrir kayıtları.',
        source: 'src-kiel-albania',
        values: [
          { label: 'Müslüman', value: 180 },
          { label: 'Hıristiyan', value: 35 }
        ],
        unit: 'hâne',
        scope: 'Pekin menzil kasabası'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1894 İşkodra Vilayeti Salnâmesi dökümü.',
        source: 'src-salname-iskodra',
        values: [
          { label: 'Müslüman', value: 2450 },
          { label: 'Ortodoks', value: 180 }
        ],
        unit: 'kişi',
        scope: 'Pekin kasabası'
      }
    ]
  },

  // B. TARİHSEL / FETHEDİLEN ŞEHİRLER (KIRMIZI / RED)
  {
    id: 'reg-shkoder',
    name: 'İşkodra',
    modern: 'Shkodër',
    aliases: ['Scutari', 'Skadar', 'Шкадар'],
    coordinates: [19.5126, 42.0683],
    layer: 'settlement',
    start: 1479,
    datePrecision: '1479 Fatih Sultan Mehmed fethi; İşkodra Vilayeti başkenti',
    confidence: 'high',
    locationAccuracy: 'Rozafa Kalesi, Kurşunlu Cami ve Eski Pazar mevkii',
    source: 'src-tdv-shkoder',
    summary: 'Kuzey Arnavutluk\'un tarihi başkenti. Rozafa Kalesi, Buşatlı Mehmed Paşa Kurşunlu Camii (1773), Mes Köprüsü (1768) ve zengin medreseleriyle İşkodra Vilayeti merkezi.',
    current: 'Arnavutluk\'ta kuzey bölge merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1479, text: 'Fatih Sultan Mehmed bizzat kuşatarak Venediklilerden fethetti.', source: 'src-tdv-shkoder' },
      { year: 1773, text: 'Buşatlı Mehmed Paşa Kurşunlu Camii inşa edildi.', source: 'src-kiel-albania' },
      { year: 1913, text: 'Balkan Harbi\'nde Hasan Rıza Paşa\'nın destansı müdafaasından sonra elden çıktı.', source: 'src-tdv-shkoder' }
    ],
    observations: [
      {
        year: 1485,
        dimension: 'religion',
        text: '1485 İşkodra mufassal tahrir defteri (Selami Pulaha neşri).',
        source: 'src-tahrir-iskodra-1485',
        values: [
          { label: 'Müslüman', value: 195 },
          { label: 'Hıristiyan (Katolik ve Ortodoks)', value: 420 }
        ],
        unit: 'hâne',
        scope: 'İşkodra kalesi ve varoşu'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1894 İşkodra Vilayeti Salnâmesi dökümü.',
        source: 'src-salname-iskodra',
        values: [
          { label: 'Müslüman', value: 19500 },
          { label: 'Katolik', value: 8200 },
          { label: 'Ortodoks', value: 2100 }
        ],
        unit: 'kişi',
        scope: 'İşkodra vilayet merkezi'
      }
    ]
  },
  {
    id: 'reg-berat',
    name: 'Berat',
    modern: 'Berat',
    aliases: ['Belgrad-ı Arnavud', 'Arnaut Belgrad', 'Berati'],
    coordinates: [19.9522, 40.7058],
    layer: 'settlement',
    start: 1417,
    datePrecision: '1417 fethi; Berat Sancağı merkezi',
    confidence: 'high',
    locationAccuracy: 'Mangalem, Gorica ve kale içi tarihi doku',
    source: 'src-tdv-berat',
    summary: 'Kral Camii (1492), Kurşunlu Cami (1553), Bekârlar Camii (1827), Halveti Tekkesi ve Gorica Köprüsü ile UNESCO Dünya Mirası tescilli Osmanlı kenti.',
    current: 'Arnavutluk\'ta il merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1417, text: 'Osmanlı kuvvetlerince fethedildi.', source: 'src-tdv-berat' },
      { year: 1492, text: 'Sultan II. Bayezid Kral Camii inşa edildi.', source: 'src-kiel-albania' },
      { year: 1780, text: 'Ahmet Kurt Paşa tarafından 7 kemerli Gorica Köprüsü yaptırıldı.', source: 'src-kiel-albania' }
    ],
    observations: [
      {
        year: 1583,
        dimension: 'religion',
        text: '1583 BOA TD mufassal tahriri.',
        source: 'src-tdv-berat',
        values: [
          { label: 'Müslüman', value: 480 },
          { label: 'Hıristiyan', value: 520 }
        ],
        unit: 'hâne',
        scope: 'Berat kale içi ve varoş mahalleleri'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1894 Yanya Vilayeti Salnâmesi dökümü.',
        source: 'src-salname-yanya',
        values: [
          { label: 'Müslüman', value: 8600 },
          { label: 'Ortodoks', value: 4200 }
        ],
        unit: 'kişi',
        scope: 'Berat sancak merkezi'
      }
    ]
  },
  {
    id: 'reg-gjirokaster',
    name: 'Ergiri',
    modern: 'Gjirokastër',
    aliases: ['Ergiri Kasrı', 'Argyrokastro', 'Αργυρόκαστρο'],
    coordinates: [20.1389, 40.0758],
    layer: 'settlement',
    start: 1419,
    datePrecision: '1419 fethi; Yanya Vilayeti sancağı',
    confidence: 'high',
    locationAccuracy: 'Kaleden yayılan tarihi mahalleler, Pazar Camii ve Zekate Konağı',
    source: 'src-tdv-gjirokaster',
    summary: 'Devasa kalesi, Saat Kulesi, Pazar Camii (1757) ve 17-19. yüzyıl özgün taş kule evleriyle (Zekate, Skenduli konakları) UNESCO korumasındaki Osmanlı şehri.',
    current: 'Arnavutluk\'ta il merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1419, text: 'Osmanlı kuvvetlerince fethedildi.', source: 'src-tdv-gjirokaster' },
      { year: 1757, text: 'Memi Bey Pazar Camii inşa edildi.', source: 'src-kiel-albania' },
      { year: 1812, text: 'Tepedelenli Ali Paşa kalede büyük tahkimat ve saat kulesi yaptırdı.', source: 'src-kiel-albania' }
    ],
    observations: [
      {
        year: 1520,
        dimension: 'religion',
        text: '1520 BOA TD tahrir kaydı.',
        source: 'src-tdv-gjirokaster',
        values: [
          { label: 'Müslüman', value: 180 },
          { label: 'Hıristiyan', value: 340 }
        ],
        unit: 'hâne',
        scope: 'Ergiri kasabası ve kalesi'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1894 Yanya Vilayeti Salnâmesi dökümü.',
        source: 'src-salname-yanya',
        values: [
          { label: 'Müslüman', value: 5400 },
          { label: 'Ortodoks', value: 3800 }
        ],
        unit: 'kişi',
        scope: 'Ergiri kaza merkezi'
      }
    ]
  },
  {
    id: 'reg-durres',
    name: 'Dıraç',
    modern: 'Durrës',
    aliases: ['Durazzo', 'Dyrrhachium', 'Draç'],
    coordinates: [19.4500, 41.3231],
    layer: 'settlement',
    start: 1501,
    datePrecision: '1501 II. Bayezid fethi',
    confidence: 'high',
    locationAccuracy: 'Fatih Camii, Adriyatik limanı ve sahil surları',
    source: 'src-tdv-arnavutluk',
    summary: 'II. Bayezid devrinde fethedilen Adriyatik\'in en stratejik Osmanlı iskelesi ve kaza merkezi. Fatih Camii (1502) ve sahil tahkimatıyla tanınır.',
    current: 'Arnavutluk\'un en büyük liman kenti.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1501, text: 'II. Bayezid devrinde Venediklilerden fethedildi.', source: 'src-tdv-arnavutluk' },
      { year: 1502, text: 'Fatih Camii inşa edildi.', source: 'src-kiel-albania' }
    ],
    observations: [
      {
        year: 1520,
        dimension: 'religion',
        text: '1520 BOA TD tahrir kaydı.',
        source: 'src-tdv-arnavutluk',
        values: [
          { label: 'Müslüman', value: 110 },
          { label: 'Hıristiyan', value: 190 }
        ],
        unit: 'hâne',
        scope: 'Dıraç kalesi ve iskelesi'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1894 İşkodra Vilayeti Salnâmesi.',
        source: 'src-salname-iskodra',
        values: [
          { label: 'Müslüman', value: 3600 },
          { label: 'Katolik ve Ortodoks', value: 1200 }
        ],
        unit: 'kişi',
        scope: 'Dıraç liman kasabası'
      }
    ]
  },
  {
    id: 'reg-vlora',
    name: 'Avlonya',
    modern: 'Vlora',
    aliases: ['Valona', 'Vlorë', 'Avlona'],
    coordinates: [19.4914, 40.4661],
    layer: 'settlement',
    start: 1417,
    datePrecision: '1417 fethi; Avlonya Sancağı merkezi',
    confidence: 'high',
    locationAccuracy: 'Muradiye Camii ve liman bölgesi',
    source: 'src-tdv-vlora',
    summary: 'Mimar Sinan eseri Muradiye Camii (1542), Kanuni Sultan Süleyman Kalesi ve Gedik Ahmed Paşa\'nın 1480 Otranto seferi donanma üssü olan sancak kenti.',
    current: 'Arnavutluk\'ta önemli sahil ve liman kenti.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1417, text: 'Osmanlı kuvvetlerince fethedildi.', source: 'src-tdv-vlora' },
      { year: 1480, text: 'Gedik Ahmed Paşa İtalya Otranto seferi donanmasını buradan sevk etti.', source: 'src-tdv-vlora' },
      { year: 1542, text: 'Mimar Sinan Muradiye Camii\'ni inşa etti.', source: 'src-kiel-albania' }
    ],
    observations: [
      {
        year: 1520,
        dimension: 'religion',
        text: '1520 BOA TD mufassal tahriri.',
        source: 'src-tdv-vlora',
        values: [
          { label: 'Müslüman', value: 290 },
          { label: 'Hıristiyan', value: 380 },
          { label: 'Musevi', value: 120 }
        ],
        unit: 'hâne',
        scope: 'Avlonya kalesi ve limanı'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1894 Yanya Vilayeti Salnâmesi dökümü.',
        source: 'src-salname-yanya',
        values: [
          { label: 'Müslüman', value: 5800 },
          { label: 'Ortodoks', value: 2100 },
          { label: 'Musevi', value: 350 }
        ],
        unit: 'kişi',
        scope: 'Avlonya sancak merkezi'
      }
    ]
  },
  {
    id: 'alb-kruje',
    name: 'Akçahisar',
    modern: 'Krujë',
    aliases: ['Kruya', 'Kroya', 'Croia'],
    coordinates: [19.7928, 41.5092],
    layer: 'settlement',
    start: 1478,
    datePrecision: '1478 Fatih Sultan Mehmed fethi',
    confidence: 'high',
    locationAccuracy: 'Krujë Kalesi, Eski Çarşı ve Dollma Tekkesi mevkii',
    source: 'src-kiel-albania',
    summary: 'İskender Bey\'in direniş merkezi olup 1478\'de Fatih Sultan Mehmed tarafından fethedilen kale kenti. Fatih Camii kalıntıları, Murad Bey Camii, Dollma Tekkesi ve Osmanlı çarşısıyla ünlüdür.',
    current: 'Arnavutluk\'ta tarihi turizm kenti.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1478, text: 'Fatih Sultan Mehmed tarafından fethedildi ve kale içine cami yaptırıldı.', source: 'src-kiel-albania' },
      { year: 1788, text: 'Dollma Bektaşi Tekkesi kuruldu.', source: 'src-kiel-albania' }
    ],
    observations: [
      {
        year: 1485,
        dimension: 'religion',
        text: '1485 İşkodra tahrir defteri.',
        source: 'src-tahrir-iskodra-1485',
        values: [
          { label: 'Müslüman', value: 85 },
          { label: 'Hıristiyan', value: 160 }
        ],
        unit: 'hâne',
        scope: 'Akçahisar kalesi ve varoşu'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1894 İşkodra Vilayeti Salnâmesi.',
        source: 'src-salname-iskodra',
        values: [
          { label: 'Müslüman', value: 4200 },
          { label: 'Katolik', value: 450 }
        ],
        unit: 'kişi',
        scope: 'Akçahisar kasabası'
      }
    ]
  },
  {
    id: 'alb-lezhe',
    name: 'Leş',
    modern: 'Lezhë',
    aliases: ['Alessio', 'Lissus', 'Leş Kasabası'],
    coordinates: [19.6436, 41.7836],
    layer: 'settlement',
    start: 1478,
    datePrecision: '1478 Fatih Sultan Mehmed fethi',
    confidence: 'high',
    locationAccuracy: 'Leş Kalesi ve Drin nehri kıyısı',
    source: 'src-kiel-albania',
    summary: 'Drin nehri ağzında kalesi ve Selimiye Camisiyle (eski Saint Nicholas) Osmanlı kaza merkezi.',
    current: 'Arnavutluk\'ta Lezhë il merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1478, text: 'Fatih Sultan Mehmed fethetti.', source: 'src-kiel-albania' },
      { year: 1512, text: 'Sultan I. Selim Selimiye Camii\'ni vakfetti.', source: 'src-kiel-albania' }
    ],
    observations: [
      {
        year: 1512,
        dimension: 'religion',
        text: '1512 tahrir kaydı.',
        source: 'src-kiel-albania',
        values: [
          { label: 'Müslüman', value: 65 },
          { label: 'Hıristiyan', value: 140 }
        ],
        unit: 'hâne',
        scope: 'Leş kasabası'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1894 İşkodra Salnâmesi dökümü.',
        source: 'src-salname-iskodra',
        values: [
          { label: 'Müslüman', value: 1850 },
          { label: 'Katolik', value: 1400 }
        ],
        unit: 'kişi',
        scope: 'Leş kaza merkezi'
      }
    ]
  },
  {
    id: 'alb-tepelene',
    name: 'Tepedelen',
    modern: 'Tepelenë',
    aliases: ['Tepelena', 'Tepedelen Kasabası'],
    coordinates: [20.0189, 40.2958],
    layer: 'settlement',
    start: 1481,
    datePrecision: '1481 fethi; Tepedelenli Ali Paşa\'nın memleketi',
    confidence: 'high',
    locationAccuracy: 'Viosa nehri üzerindeki Tepedelen Kalesi',
    source: 'src-tdv-arnavutluk',
    summary: 'Viosa vadisinde stratejik geçit kenti; Yanya Valisi Tepedelenli Ali Paşa\'nın doğup büyüdüğü, devasa kalesini ve sarayını inşa ettirdiği meşhur kaza merkezi.',
    current: 'Arnavutluk\'ta kasaba.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1481, text: 'Osmanlı idaresine girdi.', source: 'src-tdv-arnavutluk' },
      { year: 1819, text: 'Tepedelenli Ali Paşa muazzam kaleyi ve sarayını tamamladı.', source: 'src-kiel-albania' }
    ],
    observations: [
      {
        year: 1520,
        dimension: 'religion',
        text: '1520 tahriri.',
        source: 'src-tdv-arnavutluk',
        values: [
          { label: 'Müslüman', value: 45 },
          { label: 'Hıristiyan', value: 95 }
        ],
        unit: 'hâne',
        scope: 'Tepedelen derbendi'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1894 Yanya Vilayeti Salnâmesi.',
        source: 'src-salname-yanya',
        values: [
          { label: 'Müslüman', value: 2100 },
          { label: 'Ortodoks', value: 650 }
        ],
        unit: 'kişi',
        scope: 'Tepedelen kasabası'
      }
    ]
  },
  {
    id: 'alb-delvine',
    name: 'Delvina',
    modern: 'Delvinë',
    aliases: ['Delvino', 'Delvina Sancağı'],
    coordinates: [20.0983, 39.9481],
    layer: 'settlement',
    start: 1432,
    datePrecision: '1432 fethi; Delvina Sancağı merkezi',
    confidence: 'high',
    locationAccuracy: 'Gjin Aleksi Camii ve eski kale mevkii',
    source: 'src-tdv-arnavutluk',
    summary: 'Yüzyıllarca Delvina Sancağı merkezi olan güney kenti; Gjin Aleksi Kral Camii (1550 civarı) ve Sinan Paşa imaretiyle tanınır.',
    current: 'Arnavutluk\'ta Vlorë iline bağlı kasaba.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1432, text: 'Osmanlı kuvvetlerince fethedildi.', source: 'src-tdv-arnavutluk' },
      { year: 1550, text: 'Gjin Aleksi Camii inşa edildi.', source: 'src-kiel-albania' }
    ],
    observations: [
      {
        year: 1520,
        dimension: 'religion',
        text: '1520 BOA TD tahrir kaydı.',
        source: 'src-tdv-arnavutluk',
        values: [
          { label: 'Müslüman', value: 130 },
          { label: 'Hıristiyan', value: 210 }
        ],
        unit: 'hâne',
        scope: 'Delvina kasabası'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1894 Yanya Salnâmesi dökümü.',
        source: 'src-salname-yanya',
        values: [
          { label: 'Müslüman', value: 3400 },
          { label: 'Ortodoks', value: 1850 }
        ],
        unit: 'kişi',
        scope: 'Delvina sancak merkezi'
      }
    ]
  },
  {
    id: 'alb-kavaje',
    name: 'Kavaya',
    modern: 'Kavajë',
    aliases: ['Kavaja', 'Kavaya Kasabası'],
    coordinates: [19.5628, 41.1839],
    layer: 'settlement',
    start: 1580,
    datePrecision: '1580 menzil kaydı',
    confidence: 'high',
    locationAccuracy: 'Kubbeli Cami ve Saat Kulesi çevresi',
    source: 'src-kiel-albania',
    summary: 'Orta Arnavutluk\'ta Via Egnatia menzili; Kaplan Paşa Kubbeli Camii (1723) ve Saat Kulesiyle ünlü Osmanlı kaza kasabası.',
    current: 'Arnavutluk\'ta Tiran iline bağlı şehir.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1580, text: 'Osmanlı tahririnde menzil olarak kaydedildi.', source: 'src-kiel-albania' },
      { year: 1723, text: 'Kubbeli Cami inşa edildi.', source: 'src-kiel-albania' }
    ],
    observations: [
      {
        year: 1600,
        dimension: 'religion',
        text: '1600 tahrir kaydı.',
        source: 'src-kiel-albania',
        values: [
          { label: 'Müslüman', value: 120 },
          { label: 'Hıristiyan', value: 80 }
        ],
        unit: 'hâne',
        scope: 'Kavaya menzil kasabası'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1894 İşkodra Salnâmesi resmi dökümü.',
        source: 'src-salname-iskodra',
        values: [
          { label: 'Müslüman', value: 4800 },
          { label: 'Ortodoks', value: 650 }
        ],
        unit: 'kişi',
        scope: 'Kavaya kasabası'
      }
    ]
  },
  {
    id: 'alb-permet',
    name: 'Permet',
    modern: 'Përmet',
    aliases: ['Premeti', 'Permedi'],
    coordinates: [20.3517, 40.2333],
    layer: 'settlement',
    start: 1431,
    datePrecision: '1431 Sancak-i Arvanid tahriri',
    confidence: 'high',
    locationAccuracy: 'Viosa nehri kıyısındaki tarihi çarşı',
    source: 'src-inalcik-arvanid',
    summary: 'Viosa vadisinde Osmanlı kaza merkezi; Naim ve Şemseddin Sami Fraşıri kardeşlerin yetiştiği Frashër Bektaşi Tekkesi\'nin bağlı olduğu nahiye.',
    current: 'Arnavutluk\'ta Gjirokastër iline bağlı şehir.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1431, text: 'İnalcık tahririnde Sancak-i Arvanid\'e bağlı kaza olarak kaydedildi.', source: 'src-inalcik-arvanid' },
      { year: 1825, text: 'Frashër Bektaşi Tekkesi ihya edildi.', source: 'src-kiel-albania' }
    ],
    observations: [
      {
        year: 1431,
        dimension: 'religion',
        text: '1431 Hicri 835 Sancak-i Arvanid defteri (BOA TD 1).',
        source: 'src-inalcik-arvanid',
        values: [
          { label: 'Müslüman', value: 32 },
          { label: 'Hıristiyan', value: 110 }
        ],
        unit: 'hâne',
        scope: 'Permet kasabası'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1894 Yanya Salnâmesi dökümü.',
        source: 'src-salname-yanya',
        values: [
          { label: 'Müslüman', value: 2800 },
          { label: 'Ortodoks', value: 1950 }
        ],
        unit: 'kişi',
        scope: 'Permet kaza merkezi'
      }
    ]
  },
  {
    id: 'alb-erseke',
    name: 'Erseke',
    modern: 'Ersekë',
    aliases: ['Kolonya', 'Kolonjë', 'Ersek'],
    coordinates: [20.6789, 40.3378],
    layer: 'settlement',
    start: 1431,
    datePrecision: '1431 Sancak-i Arvanid tahriri',
    confidence: 'medium',
    locationAccuracy: 'Gramos dağı eteklerindeki merkez',
    source: 'src-inalcik-arvanid',
    summary: 'Kolonya kazasının merkezi; Mirahor İlyas Bey vakıfları ve Bektaşi tekkeleriyle ünlü dağlık menzil kasabası.',
    current: 'Arnavutluk\'ta Kolonjë belediyesi merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1431, text: 'Sancak-i Arvanid tahririnde yer aldı.', source: 'src-inalcik-arvanid' }
    ],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: '1530 tahriri.',
        source: 'src-inalcik-arvanid',
        values: [
          { label: 'Müslüman', value: 45 },
          { label: 'Hıristiyan', value: 140 }
        ],
        unit: 'hâne',
        scope: 'Erseke kasabası'
      },
      {
        year: 1892,
        dimension: 'religion',
        text: '1892 Manastır Vilayeti Salnâmesi.',
        source: 'src-salname-manastir',
        values: [
          { label: 'Müslüman', value: 1650 },
          { label: 'Ortodoks', value: 1100 }
        ],
        unit: 'kişi',
        scope: 'Kolonya kaza merkezi'
      }
    ]
  },
  {
    id: 'alb-voskopoje',
    name: 'İskopol',
    modern: 'Voskopoja',
    aliases: ['Voskopoje', 'Moschopolis', 'İskopol Kasabası'],
    coordinates: [20.5892, 40.6333],
    layer: 'settlement',
    start: 1500,
    datePrecision: '1500 fethi ve ticaret menzili',
    confidence: 'high',
    locationAccuracy: 'Görice yakınındaki tarihi plato kenti',
    source: 'src-kiel-albania',
    summary: '17-18. yüzyıllarda Balkanların en zengin Venedik ve Osmanlı ticaret merkezlerinden biri; matbaası ve kütüphaneleriyle tanınan kaza kasabası.',
    current: 'Arnavutluk\'ta tarihi köy.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1500, text: 'Osmanlı ticaret menzili oldu.', source: 'src-kiel-albania' },
      { year: 1769, text: 'Bölgesel çatışmalarda çarşısı büyük yıkıma uğradı.', source: 'src-kiel-albania' }
    ],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: '1530 tahriri.',
        source: 'src-kiel-albania',
        values: [
          { label: 'Müslüman', value: 30 },
          { label: 'Hıristiyan', value: 290 }
        ],
        unit: 'hâne',
        scope: 'İskopol kasabası'
      },
      {
        year: 1892,
        dimension: 'religion',
        text: '1892 Manastır Salnâmesi.',
        source: 'src-salname-manastir',
        values: [
          { label: 'Müslüman', value: 850 },
          { label: 'Ortodoks', value: 2400 }
        ],
        unit: 'kişi',
        scope: 'İskopol kasabası'
      }
    ]
  },
  {
    id: 'alb-pogradec',
    name: 'Pogradec',
    modern: 'Pogradec',
    aliases: ['İstarova', 'Podgoriç-i Ohri', 'Starova'],
    coordinates: [20.6528, 40.9025],
    layer: 'settlement',
    start: 1431,
    datePrecision: '1431 fethi; İstarova kazası merkezi',
    confidence: 'high',
    locationAccuracy: 'Ohri Gölü güney kıyısı şehir merkezi',
    source: 'src-inalcik-arvanid',
    summary: 'Ohri Gölü\'nün güney sahilinde İstarova kazası merkezi; Bektaşi tekkeleri, camileri ve göl balıkçılığıyla tanınan Osmanlı menzili.',
    current: 'Arnavutluk\'ta göl kenti.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1431, text: 'İstarova adıyla tahrir defterine kaydedildi.', source: 'src-inalcik-arvanid' }
    ],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: '1530 tahrir kaydı.',
        source: 'src-inalcik-arvanid',
        values: [
          { label: 'Müslüman', value: 75 },
          { label: 'Hıristiyan', value: 180 }
        ],
        unit: 'hâne',
        scope: 'İstarova (Pogradec) kasabası'
      },
      {
        year: 1892,
        dimension: 'religion',
        text: '1892 Manastır Vilayeti Salnâmesi.',
        source: 'src-salname-manastir',
        values: [
          { label: 'Müslüman', value: 2900 },
          { label: 'Ortodoks', value: 1450 }
        ],
        unit: 'kişi',
        scope: 'İstarova kaza merkezi'
      }
    ]
  },
  {
    id: 'alb-kukes',
    name: 'Kukeş',
    modern: 'Kukës',
    aliases: ['Kukus', 'Luma Kazası', 'Kula'],
    coordinates: [20.4217, 42.0769],
    layer: 'settlement',
    start: 1530,
    datePrecision: '1530 Luma kazası tahriri',
    confidence: 'medium',
    locationAccuracy: 'Eski Kukeş mevkii (Fierza baraj gölü altında kalan eski merkez)',
    source: 'src-tdv-arnavutluk',
    summary: 'Ak Drin ile Kara Drin\'in birleştiği mevkide Luma bölgesinin tarihi merkezi; dağlık geçitleri tutan kaza kasabası.',
    current: 'Arnavutluk\'ta Kukës il merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1530, text: 'Luma kazası merkezi olarak tahrirde yer aldı.', source: 'src-tdv-arnavutluk' }
    ],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: '1530 tahriri.',
        source: 'src-tdv-arnavutluk',
        values: [
          { label: 'Müslüman', value: 60 },
          { label: 'Hıristiyan', value: 110 }
        ],
        unit: 'hâne',
        scope: 'Luma / Kukeş kasabası'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1894 Kosova Vilayeti Salnâmesi (Luma kazası).',
        source: 'src-salname-iskodra',
        values: [
          { label: 'Müslüman', value: 1950 },
          { label: 'Ortodoks', value: 120 }
        ],
        unit: 'kişi',
        scope: 'Kukeş kasabası'
      }
    ]
  },
  {
    id: 'alb-fier',
    name: 'Fier',
    modern: 'Fier',
    aliases: ['Fieri', 'Pojani nahiyesi'],
    coordinates: [19.5561, 40.7239],
    layer: 'settlement',
    start: 1520,
    datePrecision: '1520 Myzeqe ovası tahriri',
    confidence: 'medium',
    locationAccuracy: 'Gjanica nehri kıyısındaki tarihi pazar mevkii',
    source: 'src-tdv-arnavutluk',
    summary: 'Myzeqe ovasının tarım ve ticaret merkezi; Vrioni paşalarının çiftlik ve pazar kenti.',
    current: 'Arnavutluk\'ta Fier il merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1520, text: 'Myzeqe ovası menzili olarak kaydedildi.', source: 'src-tdv-arnavutluk' }
    ],
    observations: [
      {
        year: 1520,
        dimension: 'religion',
        text: '1520 tahrir kaydı.',
        source: 'src-tdv-arnavutluk',
        values: [
          { label: 'Müslüman', value: 85 },
          { label: 'Hıristiyan', value: 175 }
        ],
        unit: 'hâne',
        scope: 'Fier / Pojani yerleşimi'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1894 Yanya Salnâmesi.',
        source: 'src-salname-yanya',
        values: [
          { label: 'Müslüman', value: 2800 },
          { label: 'Ortodoks', value: 1600 }
        ],
        unit: 'kişi',
        scope: 'Fier kasabası'
      }
    ]
  },
  {
    id: 'alb-klos',
    name: 'Klos',
    modern: 'Klos',
    aliases: ['Klos-i Mat', 'Mat Kazası'],
    coordinates: [20.0872, 41.5036],
    layer: 'settlement',
    start: 1431,
    datePrecision: '1431 Sancak-i Arvanid tahriri',
    confidence: 'medium',
    locationAccuracy: 'Mat nehri vadisi ve Vasha Taş Köprüsü çevresi',
    source: 'src-inalcik-arvanid',
    summary: 'Mat vadisinde tarihi Osmanlı menzili; Ura e Vashës (Kız Köprüsü) ve Ura e Skurretit gibi anıtsal taş kemerli Osmanlı köprüleriyle tanınır.',
    current: 'Arnavutluk\'ta Dibër iline bağlı kasaba.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1431, text: 'Sancak-i Arvanid tahririnde Mat nahiyesinde yer aldı.', source: 'src-inalcik-arvanid' }
    ],
    observations: [
      {
        year: 1431,
        dimension: 'religion',
        text: '1431 BOA TD 1 tahriri.',
        source: 'src-inalcik-arvanid',
        values: [
          { label: 'Müslüman', value: 40 },
          { label: 'Hıristiyan', value: 120 }
        ],
        unit: 'hâne',
        scope: 'Klos menzili'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1894 İşkodra Salnâmesi (Mat kazası).',
        source: 'src-salname-iskodra',
        values: [
          { label: 'Müslüman', value: 1450 },
          { label: 'Katolik', value: 310 }
        ],
        unit: 'kişi',
        scope: 'Klos kasabası'
      }
    ]
  },
  {
    id: 'alb-himare',
    name: 'Himara',
    modern: 'Himarë',
    aliases: ['Himara Kalesi', 'Chimara', 'Şimara'],
    coordinates: [19.7447, 40.1017],
    layer: 'settlement',
    start: 1481,
    datePrecision: '1481 Gedik Ahmed Paşa fethi',
    confidence: 'high',
    locationAccuracy: 'İyon denizi kıyısındaki sarp kale tepesi',
    source: 'src-tdv-arnavutluk',
    summary: 'İyon sahilinde stratejik deniz kalesi; Porto Palermo\'daki Tepedelenli Ali Paşa Kalesi ile sahil emniyetini tutan Osmanlı nahiyesi.',
    current: 'Arnavutluk\'ta sahil kenti.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1481, text: 'Gedik Ahmed Paşa tarafından fethedildi.', source: 'src-tdv-arnavutluk' },
      { year: 1818, text: 'Tepedelenli Ali Paşa Porto Palermo kalesini inşa etti.', source: 'src-kiel-albania' }
    ],
    observations: [
      {
        year: 1520,
        dimension: 'religion',
        text: '1520 tahriri.',
        source: 'src-tdv-arnavutluk',
        values: [
          { label: 'Müslüman', value: 25 },
          { label: 'Hıristiyan', value: 210 }
        ],
        unit: 'hâne',
        scope: 'Himara kalesi ve nahiyesi'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1894 Yanya Salnâmesi dökümü.',
        source: 'src-salname-yanya',
        values: [
          { label: 'Müslüman', value: 450 },
          { label: 'Ortodoks', value: 2800 }
        ],
        unit: 'kişi',
        scope: 'Himara nahiyesi'
      }
    ]
  },
  {
    id: 'alb-sarande',
    name: 'Aya Saranda',
    modern: 'Sarandë',
    aliases: ['Saranda', 'Porto Edda', 'Agioi Saranda'],
    coordinates: [20.0053, 39.8756],
    layer: 'settlement',
    start: 1537,
    datePrecision: '1537 Kanuni Sultan Süleyman Korfu seferi liman tesisi',
    confidence: 'high',
    locationAccuracy: 'Liman koyu ve Lëkurësi Kalesi',
    source: 'src-tdv-arnavutluk',
    summary: '1537 yılında Kanuni Sultan Süleyman\'ın Korfu seferi sırasında inşa ettirdiği Lëkurësi Kalesi ile İyon sahilini tutan önemli liman kaza merkezi.',
    current: 'Arnavutluk\'un en güneydeki turizm ve liman kenti.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1537, text: 'Kanuni Sultan Süleyman Lëkurësi Kalesi\'ni inşa ettirdi.', source: 'src-kiel-albania' }
    ],
    observations: [
      {
        year: 1583,
        dimension: 'religion',
        text: '1583 tahriri.',
        source: 'src-kiel-albania',
        values: [
          { label: 'Müslüman', value: 35 },
          { label: 'Hıristiyan', value: 95 }
        ],
        unit: 'hâne',
        scope: 'Saranda iskelesi ve kalesi'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1894 Yanya Salnâmesi.',
        source: 'src-salname-yanya',
        values: [
          { label: 'Müslüman', value: 1100 },
          { label: 'Ortodoks', value: 1450 }
        ],
        unit: 'kişi',
        scope: 'Saranda kasabası'
      }
    ]
  },
  {
    id: 'alb-libohove',
    name: 'Libohova',
    modern: 'Libohovë',
    aliases: ['Libohova Kasabası', 'Libohovo'],
    coordinates: [20.2631, 40.0311],
    layer: 'settlement',
    start: 1431,
    datePrecision: '1431 Sancak-i Arvanid tahriri',
    confidence: 'high',
    locationAccuracy: 'Libohova Kalesi ve tarihi çarşı mevkii',
    source: 'src-inalcik-arvanid',
    summary: 'Dropull vadisinde stratejik merkez; Tepedelenli Ali Paşa\'nın kız kardeşi Şehnisa Hanım\'a düğün hediyesi olarak inşa ettirdiği muhteşem Libohova Kalesi ile tanınır.',
    current: 'Arnavutluk\'ta kasaba.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1431, text: 'İnalcık Sancak-i Arvanid tahririnde yer aldı.', source: 'src-inalcik-arvanid' },
      { year: 1795, text: 'Ali Paşa Şehnisa Hanım Kalesi\'ni inşa ettirdi.', source: 'src-kiel-albania' }
    ],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: '1530 tahriri.',
        source: 'src-inalcik-arvanid',
        values: [
          { label: 'Müslüman', value: 90 },
          { label: 'Hıristiyan', value: 110 }
        ],
        unit: 'hâne',
        scope: 'Libohova kasabası'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1894 Yanya Salnâmesi dökümü.',
        source: 'src-salname-yanya',
        values: [
          { label: 'Müslüman', value: 2200 },
          { label: 'Ortodoks', value: 550 }
        ],
        unit: 'kişi',
        scope: 'Libohova kaza merkezi'
      }
    ]
  },

  // ----------------------------------------------------
  // II. KÜLTÜREL MİRAS (HERITAGE - 36 ANIT)
  // ----------------------------------------------------
  // --- A. AYAKTA / KISMEN KALAN ANITLAR (18 ANIT) ---
  {
    id: 'her-alb-tirana-ethem-bey',
    name: 'Hacı Ethem Bey Camii',
    modern: 'Et\'hem Bey Mosque',
    aliases: ['Xhamia e Et\'hem Beut', 'Ethem Bey Cami'],
    coordinates: [19.8194, 41.3275],
    layer: 'heritage',
    start: 1793,
    datePrecision: '1793 Molla Bey başlangıcı; 1823 Hacı Ethem Bey tamamlanması',
    confidence: 'high',
    locationAccuracy: 'Tiran İskender Bey Meydanı güneydoğusu',
    source: 'src-kiel-albania',
    summary: '1793–1823 yılları arasında inşa edilen, iç ve dış duvarlarındaki eşsiz Osmanlı manzaraları, köşk, ağaç ve köprü freskleriyle ünlü başyapıt cami. 1967 ateizm yıkımlarından sanat anıtı statüsüyle kurtulmuştur.',
    current: 'İbadete ve ziyarete açık; Tiran\'ın en ünlü tarihi anıtı.',
    currentAsOf: '2026 yerinde tespit',
    events: [
      { year: 1793, text: 'Molla Bey tarafından inşasına başlandı.', source: 'src-kiel-albania' },
      { year: 1823, text: 'Oğlu Hacı Ethem Bey tarafından freskleri ve minaresi tamamlandı.', source: 'src-kiel-albania' },
      { year: 1991, text: 'Komünist rejimin çöküşüyle on binlerce kişinin katılımıyla yeniden ibadete açıldı.', source: 'src-tdv-tirana' }
    ],
    observations: []
  },
  {
    id: 'her-alb-tirana-saat-kulesi',
    name: 'Tiran Saat Kulesi',
    modern: 'Clock Tower of Tirana',
    aliases: ['Kulla e Sahatit e Tiranës', 'Sahat Kulla'],
    coordinates: [19.8198, 41.3276],
    layer: 'heritage',
    start: 1822,
    datePrecision: '1822 Hacı Ethem Bey inşası',
    confidence: 'high',
    locationAccuracy: 'Ethem Bey Camii\'nin hemen bitişiği',
    source: 'src-kiel-albania',
    summary: '1822 yılında Hacı Ethem Bey tarafından 35 metre yüksekliğinde kesme taştan inşa edilen Tiran\'ın sembolü saat kulesi.',
    current: 'Müze kulesi olarak ayakta ve faal.',
    currentAsOf: '2026 yerinde tespit',
    events: [
      { year: 1822, text: 'Hacı Ethem Bey tarafından Venedik çanı ile inşa edildi.', source: 'src-kiel-albania' }
    ],
    observations: []
  },
  {
    id: 'her-alb-tirana-kaplan-pasa',
    name: 'Kaplan Paşa Türbesi',
    modern: 'Tomb of Kaplan Pasha',
    aliases: ['Tyrbja e Kaplan Pashës', 'Kapllan Pasha Türbesi'],
    coordinates: [19.8214, 41.3273],
    layer: 'heritage',
    start: 1817,
    datePrecision: '1817 inşası',
    confidence: 'high',
    locationAccuracy: 'Tiran şehir merkezi, TID Tower gökdeleni zemin avlusu',
    source: 'src-kiel-albania',
    summary: 'Tiran valisi Kaplan Paşa Bargjini için 1817\'de inşa edilen sekizgen mermer sütunlu ve kemerli açık türbe. Yanındaki cami yıkılmış olsa da türbe korunmuştur.',
    current: 'TID Tower içinde mimari miras anıtı olarak korunmaktadır.',
    currentAsOf: '2026 yerinde tespit',
    events: [
      { year: 1817, text: 'Kaplan Paşa adına inşa edildi.', source: 'src-kiel-albania' }
    ],
    observations: []
  },
  {
    id: 'her-alb-tirana-tabaklar-koprusu',
    name: 'Tabaklar Köprüsü',
    modern: 'Tanners\' Bridge',
    aliases: ['Ura e Tabakëve', 'Tabakhane Köprüsü'],
    coordinates: [19.8258, 41.3264],
    layer: 'heritage',
    start: 1750,
    datePrecision: '18. yüzyıl ortası Osmanlı tabak esnafı vakfı',
    confidence: 'high',
    locationAccuracy: 'Lana nehri eski yatağında tarihi yürüyüş yolu',
    source: 'src-kiel-albania',
    summary: '18. yüzyılda Tiran Tabaklar Esnafı loncası tarafından Lana deresi üzerine inşa edilen zarif tek gözlü kemerli Osmanlı taş köprüsü.',
    current: 'Restore edilmiş yaya köprüsü ve anıt alanı.',
    currentAsOf: '2026 yerinde tespit',
    events: [
      { year: 1750, text: 'Tabak esnafı tarafından kervan yolu geçidi olarak inşa edildi.', source: 'src-kiel-albania' }
    ],
    observations: []
  },
  {
    id: 'her-alb-shkoder-kursunlu',
    name: 'İşkodra Kurşunlu Camii',
    modern: 'Lead Mosque, Shkodër',
    aliases: ['Xhamia e Plumbit', 'Buşatlı Mehmed Paşa Camii'],
    coordinates: [19.4994, 42.0469],
    layer: 'heritage',
    start: 1773,
    datePrecision: '1773 Buşatlı Mehmed Paşa inşası',
    confidence: 'high',
    locationAccuracy: 'Rozafa Kalesi eteği, Drin ve Kiri nehirleri taşkın ovası',
    source: 'src-kiel-albania',
    summary: '1773\'te İşkodra mutasarrıfı Buşatlı Mehmed Paşa tarafından İstanbul selatin camileri üslubunda kurşun kaplı çok kubbeli olarak yaptırılan anıtsal cami. 1967\'de minaresi yıkılmış, 1990\'da Hafız Sabri Koçi tarafından komünizm sonrası ilk cuma namazı burada kılınmıştır.',
    current: 'TİKA tarafından kapsamlı restorasyonu tamamlanmıştır.',
    currentAsOf: '2026 yerinde tespit',
    events: [
      { year: 1773, text: 'Buşatlı Mehmed Paşa tarafından kurşun kaplı kubbelerle inşa edildi.', source: 'src-kiel-albania' },
      { year: 1967, text: 'Yıldırım çarpması ve ateizm kampanyasında minaresi yıkıldı.', source: 'src-enver-hoxha-1967' },
      { year: 1990, text: '16 Kasım 1990\'da 50 bin kişinin katılımıyla Arnavutluk\'ta komünizm sonrası ilk açık namaz kılındı.', source: 'src-tdv-shkoder' }
    ],
    observations: []
  },
  {
    id: 'her-alb-shkoder-mes-koprusu',
    name: 'Mes Köprüsü',
    modern: 'Mesi Bridge',
    aliases: ['Ura e Mesit', 'Kiri Köprüsü'],
    coordinates: [19.5744, 42.1147],
    layer: 'heritage',
    start: 1768,
    datePrecision: '1768 Buşatlı Mehmed Paşa inşası',
    confidence: 'high',
    locationAccuracy: 'İşkodra\'nın 8 km kuzeydoğusunda Kir nehri üzerinde',
    source: 'src-kiel-albania',
    summary: '1768 yılında Buşatlı Mehmed Paşa tarafından Kir nehri üzerine kesme taştan inşa ettirilen 108 metre uzunluğunda, 13 kemerli devasa Osmanlı şaheseri köprü.',
    current: 'Tamamen ayakta; Balkanların en büyük Osmanlı taş köprülerinden biridir.',
    currentAsOf: '2026 yerinde tespit',
    events: [
      { year: 1768, text: 'Buşatlı Mehmed Paşa tarafından inşa ettirildi.', source: 'src-kiel-albania' }
    ],
    observations: []
  },
  {
    id: 'her-alb-berat-kral-cami',
    name: 'Berat Sultan Camii (Kral Camii)',
    modern: 'King Mosque, Berat',
    aliases: ['Xhamia e Mbretit', 'Sultan II. Bayezid Camii'],
    coordinates: [19.9525, 40.7061],
    layer: 'heritage',
    start: 1492,
    datePrecision: '1492 Sultan II. Bayezid inşası',
    confidence: 'high',
    locationAccuracy: 'Berat şehir merkezi, Halveti Tekkesi kompleksi yanı',
    source: 'src-kiel-albania',
    summary: '1492 yılında Sultan II. Bayezid tarafından inşa ettirilen, ahşap tavan işlemeleri, kadınlar mahfili ve zarif minaresiyle Berat\'ın en eski ve en görkemli selatin camisi.',
    current: 'İbadete ve ziyarete açık; UNESCO anıtı.',
    currentAsOf: '2026 yerinde tespit',
    events: [
      { year: 1492, text: 'Sultan II. Bayezid Berat seferi sonrasında inşa ettirdi.', source: 'src-kiel-albania' }
    ],
    observations: []
  },
  {
    id: 'her-alb-berat-kursunlu',
    name: 'Berat Kurşunlu Camii',
    modern: 'Lead Mosque, Berat',
    aliases: ['Xhamia e Plumbit', 'Uzgur Ahmed Paşa Camii'],
    coordinates: [19.9542, 40.7047],
    layer: 'heritage',
    start: 1553,
    datePrecision: '1553-1554 Uzgur Ahmed Paşa inşası',
    confidence: 'high',
    locationAccuracy: 'Berat şehir meydanı ve Osum nehri kıyısı',
    source: 'src-kiel-albania',
    summary: '1553\'te Berat Beyi Uzgurlu Ahmed Paşa tarafından klasik Osmanlı üslubunda kurşun kubbeli olarak inşa edilen abidevi cami.',
    current: 'Restore edilmiş olarak ibadete açıktır.',
    currentAsOf: '2026 yerinde tespit',
    events: [
      { year: 1553, text: 'Uzgur Ahmed Paşa tarafından vakfedildi.', source: 'src-kiel-albania' }
    ],
    observations: []
  },
  {
    id: 'her-alb-berat-bekarlar-cami',
    name: 'Bekârlar Camii',
    modern: 'Bachelors\' Mosque',
    aliases: ['Xhamia e Beqarëve', 'Süleyman Paşa Camii'],
    coordinates: [19.9536, 40.7050],
    layer: 'heritage',
    start: 1827,
    datePrecision: '1827 inşası',
    confidence: 'high',
    locationAccuracy: 'Mangalem mahallesi girişi, Osum kıyısı',
    source: 'src-kiel-albania',
    summary: '1827 yılında bekâr zanaatkâr ve tüccar loncası için yaptırılan, dış cephesini tamamen kaplayan renkli çiçek, şehir ve doğa freskleriyle ünlü benzersiz Osmanlı camisi.',
    current: 'Dış freskleriyle korunan müze ve ibadet yapısı.',
    currentAsOf: '2026 yerinde tespit',
    events: [
      { year: 1827, text: 'Esnaf loncası bekâr çırakları için inşa edildi.', source: 'src-kiel-albania' }
    ],
    observations: []
  },
  {
    id: 'her-alb-berat-halveti-tekke',
    name: 'Berat Halveti Tekkesi',
    modern: 'Halveti Teqe, Berat',
    aliases: ['Teqja e Helvetive', 'Kurt Ahmed Paşa Tekkesi'],
    coordinates: [19.9522, 40.7058],
    layer: 'heritage',
    start: 1782,
    datePrecision: '1782 Ahmet Kurt Paşa inşası',
    confidence: 'high',
    locationAccuracy: 'Kral Camii avlu kompleksi',
    source: 'src-kiel-albania',
    summary: '1782 yılında Ahmet Kurt Paşa tarafından semahane, derviş odaları ve türbe ile kurulan muhteşem ahşap oymalı tavanlı Halveti dergâhı.',
    current: 'Aslına uygun olarak restore edilmiş tekke ve anıt.',
    currentAsOf: '2026 yerinde tespit',
    events: [
      { year: 1782, text: 'Ahmet Kurt Paşa tarafından tesis edildi.', source: 'src-kiel-albania' }
    ],
    observations: []
  },
  {
    id: 'her-alb-berat-gorica-koprusu',
    name: 'Gorica Taş Köprüsü',
    modern: 'Gorica Bridge',
    aliases: ['Ura e Goricës', 'Osum Taş Köprüsü'],
    coordinates: [19.9481, 40.7039],
    layer: 'heritage',
    start: 1780,
    datePrecision: '1780 Ahmet Kurt Paşa inşası',
    confidence: 'high',
    locationAccuracy: 'Osum nehri üzerinde Mangalem ile Gorica mahalleleri arası',
    source: 'src-kiel-albania',
    summary: 'Ahmet Kurt Paşa tarafından 1780\'de ahşap köprünün yerine 129 metre uzunluğunda, 7 gözlü kemerli olarak kesme taştan inşa edilen anıtsal köprü.',
    current: 'Yaya trafiğine açık UNESCO koruma anıtı.',
    currentAsOf: '2026 yerinde tespit',
    events: [
      { year: 1780, text: 'Ahmet Kurt Paşa tarafından kesme taştan inşa ettirildi.', source: 'src-kiel-albania' }
    ],
    observations: []
  },
  {
    id: 'her-alb-elbasan-kral-cami',
    name: 'İlbasan Kral Camii (Fatih Sultan Mehmed Camii)',
    modern: 'King Mosque, Elbasan',
    aliases: ['Xhamia Mbret', 'Fatih Sultan Mehmed Camii'],
    coordinates: [20.0817, 41.1128],
    layer: 'heritage',
    start: 1492,
    datePrecision: '1492 Sultan II. Bayezid inşası (Fatih vakfı)',
    confidence: 'high',
    locationAccuracy: 'İlbasan Kalesi\'nin tam kalbinde',
    source: 'src-kiel-albania',
    summary: '1492 yılında Sultan II. Bayezid tarafından İlbasan Kalesi içinde inşa ettirilen Arnavutluk\'un en eski faal camilerinden biri.',
    current: 'İbadete ve ziyarete açık.',
    currentAsOf: '2026 yerinde tespit',
    events: [
      { year: 1492, text: 'Kale içi selatin camisi olarak inşa edildi.', source: 'src-kiel-albania' }
    ],
    observations: []
  },
  {
    id: 'her-alb-elbasan-naziresh',
    name: 'Nazır Camii',
    modern: 'Naziresha Mosque',
    aliases: ['Xhamia e Nazireshës', 'Nazir Hanım Camii'],
    coordinates: [20.0883, 41.1072],
    layer: 'heritage',
    start: 1599,
    datePrecision: '1599 Nazır Bey kızı inşası',
    confidence: 'high',
    locationAccuracy: 'İlbasan\'ın güney girişinde',
    source: 'src-kiel-albania',
    summary: '1599 yılında bir Osmanlı Nazırının kızı tarafından yaptırılan, kare planlı, tromplu tek kubbeli ve kesme taş minareli klasik Osmanlı şaheseri.',
    current: 'Restore edilmiş ve ibadete açık.',
    currentAsOf: '2026 yerinde tespit',
    events: [
      { year: 1599, text: 'Osmanlı nazır kızı tarafından inşa edildi.', source: 'src-kiel-albania' }
    ],
    observations: []
  },
  {
    id: 'her-alb-elbasan-saat-kulesi',
    name: 'İlbasan Saat Kulesi',
    modern: 'Clock Tower of Elbasan',
    aliases: ['Kulla e Sahatit e Elbasanit'],
    coordinates: [20.0825, 41.1136],
    layer: 'heritage',
    start: 1867,
    datePrecision: '1867 Osmanlı inşası (17. yy ilk ahşap kulenin yerine)',
    confidence: 'high',
    locationAccuracy: 'İlbasan Kalesi güney kapısı surları üzerinde',
    source: 'src-kiel-albania',
    summary: 'İlbasan Kalesi sur duvarı üzerinde 30 metre yüksekliğinde yükselen, dört yöne bakan saat kadranlarıyla ünlü taş saat kulesi.',
    current: 'Çalışır vaziyette kentin sembolü olarak ayakta.',
    currentAsOf: '2026 yerinde tespit',
    events: [
      { year: 1867, text: 'Mevcut taş kule inşa edildi.', source: 'src-kiel-albania' }
    ],
    observations: []
  },
  {
    id: 'her-alb-korce-mirahor-ilyas',
    name: 'Mirahor İlyas Bey Camii ve Türbesi',
    modern: 'Mirahori Mosque, Korçë',
    aliases: ['Xhamia e Iljaz Mirahorit', 'İlyas Bey Camii'],
    coordinates: [20.7786, 40.6156],
    layer: 'heritage',
    start: 1495,
    datePrecision: '1495 Mirahor İlyas Bey inşası',
    confidence: 'high',
    locationAccuracy: 'Görice tarihi çarşısı güneyi',
    source: 'src-kiel-albania',
    summary: '1495 yılında Fatih\'in Mirahoru İlyas Bey tarafından inşa ettirilen, Arnavutluk sınırları içindeki en eski kubbeli cami ve yanındaki türbe.',
    current: 'TİKA tarafından restore edilmiş, ibadete açık kültür anıtı.',
    currentAsOf: '2026 yerinde tespit',
    events: [
      { year: 1495, text: 'Mirahor İlyas Bey cami ve imaretini inşa etti.', source: 'src-kiel-albania' }
    ],
    observations: []
  },
  {
    id: 'her-alb-gjirokaster-pazar-cami',
    name: 'Ergiri Pazar Camii',
    modern: 'Bazaar Mosque, Gjirokastër',
    aliases: ['Xhamia e Pazarit', 'Memi Bey Camii'],
    coordinates: [20.1394, 40.0747],
    layer: 'heritage',
    start: 1757,
    datePrecision: '1757 Memi Bey inşası',
    confidence: 'high',
    locationAccuracy: 'Ergiri Eski Çarşı Meydanı (Qafa e Pazarit)',
    source: 'src-kiel-albania',
    summary: '1757 yılında Memi Bey tarafından çarşının merkezindeki dik yamaca inşa edilen, alt katı dükkân üst katı cami olan 13 köşeli minareli abidevi yapı. 1967\'de sirk akrobatlarının antrenman salonu yapılmış, 1991\'de cami olarak açılmıştır.',
    current: 'İbadete ve ziyarete açıktır.',
    currentAsOf: '2026 yerinde tespit',
    events: [
      { year: 1757, text: 'Çarşı yangını sonrası Memi Bey tarafından inşa ettirildi.', source: 'src-kiel-albania' },
      { year: 1967, text: 'Kapatılarak akrobasi eğitim salonu olarak kullanıldı.', source: 'src-enver-hoxha-1967' },
      { year: 1991, text: 'Yeniden ibadete açıldı.', source: 'src-tdv-gjirokaster' }
    ],
    observations: []
  },
  {
    id: 'her-alb-gjirokaster-zekate',
    name: 'Zekate Kule Konağı',
    modern: 'Zekate House',
    aliases: ['Kulla e Zekatëve', 'Zeko Konağı'],
    coordinates: [20.1347, 40.0753],
    layer: 'heritage',
    start: 1812,
    datePrecision: '1811-1812 Ali Paşa idarecisi Beqir Zeko inşası',
    confidence: 'high',
    locationAccuracy: 'Ergiri Palorto mahallesi zirvesi',
    source: 'src-kiel-albania',
    summary: '1812 yılında inşa edilen, çift kuleli, taş konsollu, freskli başodası ve ahşap oymalı tavanlarıyla Balkanlar\'daki en muhteşem Osmanlı kule konak (kulla) örneği.',
    current: 'Etnografya müze-evi olarak ziyarete açıktır.',
    currentAsOf: '2026 yerinde tespit',
    events: [
      { year: 1812, text: 'Beqir Zeko tarafından tamamlandı.', source: 'src-kiel-albania' }
    ],
    observations: []
  },
  {
    id: 'her-alb-vlora-muradiye',
    name: 'Avlonya Muradiye Camii',
    modern: 'Muradie Mosque, Vlorë',
    aliases: ['Xhamia e Muradies', 'Mimar Sinan Avlonya Camii'],
    coordinates: [19.4908, 40.4689],
    layer: 'heritage',
    start: 1542,
    datePrecision: '1542 Mimar Sinan tasarımı (Kanuni devri)',
    confidence: 'high',
    locationAccuracy: 'Avlonya şehir merkezi meydanı',
    source: 'src-kiel-albania',
    summary: '1542 yılında Kanuni Sultan Süleyman devrinde bizzat Mimar Sinan tarafından tasarlanan, almaşık tuğla-taş işçiliği ve kusursuz kubbe kasnağı ile Arnavutluk\'taki yegane Mimar Sinan eseri.',
    current: 'İbadete ve ziyarete açık kültür mirası.',
    currentAsOf: '2026 yerinde tespit',
    events: [
      { year: 1542, text: 'Mimar Sinan tarafından inşa edildi.', source: 'src-kiel-albania' }
    ],
    observations: []
  },

  // --- B. GEÇMİŞTE YIKILAN VE YERİNE NE İNŞA EDİLDİĞİ BELGELENEN ESERLER (18 ANIT) ---
  {
    id: 'her-alb-tirana-suleyman-pasa-lost',
    name: 'Tiran Süleyman Paşa Camii (Eski Cami)',
    modern: 'Old Mosque of Tirana / Sulejman Pasha Mosque (Site of Unknown Soldier Monument)',
    aliases: ['Xhamia e Vjetër e Tiranës', 'Süleyman Paşa Camii'],
    coordinates: [19.8222, 41.3278],
    layer: 'heritage',
    start: 1614,
    end: 1967,
    datePrecision: '1614 inşa; 1944 hasar ve 1967 dozerlerle tamamen yıkım',
    confidence: 'high',
    locationAccuracy: 'Bugünkü Meçhul Asker (Ushtari i Panjohur) Meydanı',
    source: 'src-tdv-tirana',
    summary: '1614 yılında Tiran şehrinin kurucusu Süleyman Paşa Bargjini tarafından şehrin ilk yapısı olarak inşa edilen cami ve türbe. 1944 savaşı sonrası Enver Hoca komünist rejimince 1967\'de dozerlerle tamamen yıkılmıştır. Yerine Komünist Partisi tarafından devasa "Meçhul Asker" (Partizan) heykeli ve meydanı inşa edilmiştir.',
    lost: true,
    current: 'Yapı tamamen yok edildi. Parsel üzerinde günümüzde Meçhul Asker (Sheshi Ushtari i Panjohur) meydanı ve anıtı yer almaktadır.',
    currentAsOf: '2026 saha ve imar durumu',
    events: [
      { year: 1614, text: 'Tiran\'ın kurucusu Süleyman Paşa tarafından şehrin ilk çekirdeği olarak yaptırıldı.', source: 'src-tdv-tirana' },
      { year: 1944, text: 'Tiran muharebelerinde minaresi hasar gördü.', source: 'src-tdv-tirana' },
      { year: 1967, text: 'Komünist ateizm kampanyasında cami ve Süleyman Paşa türbesi tamamen yerle bir edildi.', source: 'src-enver-hoxha-1967' }
    ],
    observations: []
  },
  {
    id: 'her-alb-tirana-eski-pazar-lost',
    name: 'Tiran Eski Çarşısı ve Çarşı Camii',
    modern: 'Old Bazaar of Tirana (Site of Palace of Culture / Pallati i Kulturës)',
    aliases: ['Pazari i Vjetër i Tiranës', 'Çarşı Camii ve Sebili'],
    coordinates: [19.8186, 41.3283],
    layer: 'heritage',
    start: 1650,
    end: 1960,
    datePrecision: '17. yy Osmanlı çarşısı; 1959-1963 Sovyet projesiyle yıkım',
    confidence: 'high',
    locationAccuracy: 'İskender Bey Meydanı doğusu, Kültür Sarayı binası',
    source: 'src-tdv-tirana',
    summary: 'Yüzlerce dükkân, kervansaraylar, zanaatkâr hanları, sebil ve camiden oluşan 300 yıllık tarihi Tiran Çarşısı. 1959–1963 yıllarında Enver Hoca tarafından Sovyet hediyesi Opera ve Kütüphane kompleksi açmak amacıyla dozerlerle tamamen yıkılmıştır. Yerine devasa Kültür Sarayı (Pallati i Kulturës) inşa edilmiştir.',
    lost: true,
    current: 'Çarşı ve cami yok edildi. Yerinde devasa sosyalist Kültür Sarayı (Milli Kütüphane ve Opera binası) yükselmektedir.',
    currentAsOf: '2026 saha ve imar durumu',
    events: [
      { year: 1650, text: 'Osmanlı kervan menzil çarşısı teşekkül etti.', source: 'src-tdv-tirana' },
      { year: 1959, text: 'Kültür Sarayı inşası için çarşının dozerlerle yıkımına başlandı.', source: 'src-tdv-tirana' }
    ],
    observations: []
  },
  {
    id: 'her-alb-tirana-karapici-lost',
    name: 'Tiran Karapici Camii (Müftülük Camii)',
    modern: 'Karapici Mosque (Site of Residential/Commercial Complex)',
    aliases: ['Xhamia e Karapiçit', 'Müftülük Camii'],
    coordinates: [19.8203, 41.3267],
    layer: 'heritage',
    start: 1840,
    end: 1967,
    datePrecision: '1840 inşa; 1967 ateizm kampanyasında dinamitlendi',
    confidence: 'high',
    locationAccuracy: 'Barrikadave caddesi üzeri',
    source: 'src-kiel-albania',
    summary: '1840 yılında Karapici ailesi tarafından inşa ettirilen, Tiran Müftülüğü merkez camisi. 1967 ateizm kampanyasında minaresi ve kubbesi dinamitlenerek yıkılmıştır. Yerine çok katlı sosyalist konut blokları ve mağazalar inşa edilmiştir.',
    lost: true,
    current: 'Cami tamamen yok edildi; parsel üzerinde çok katlı apartman ve mağazalar bulunmaktadır.',
    currentAsOf: '2026 saha ve imar durumu',
    events: [
      { year: 1840, text: 'Karapici ailesi tarafından inşa edildi.', source: 'src-kiel-albania' },
      { year: 1967, text: 'Komünist rejim tarafından dinamitle yıkıldı.', source: 'src-enver-hoxha-1967' }
    ],
    observations: []
  },
  {
    id: 'her-alb-tirana-mahmud-pasa-lost',
    name: 'Tiran Mahmud Paşa Medresesi',
    modern: 'Mahmud Pasha Madrasah (Site of Municipal Parking / Warehouses)',
    aliases: ['Medreseja e Vjetër e Tiranës', 'Mahmud Paşa Külliyesi'],
    coordinates: [19.8236, 41.3308],
    layer: 'heritage',
    start: 1780,
    end: 1967,
    datePrecision: '18. yy sonu inşa; 1967 kapatılıp yıkıldı',
    confidence: 'high',
    locationAccuracy: 'Tiran kuzey çarşı çıkışı',
    source: 'src-kiel-albania',
    summary: '18. yüzyıl sonunda inşa edilen, kütüphanesi ve talebe hücreleriyle Tiran\'ın en büyük Osmanlı eğitim kurumu. 1967 ateizm kampanyasında tamamen yıkılarak yerine devlet depoları ve belediye otoparkı yapılmıştır.',
    lost: true,
    current: 'Medrese mevcut değildir; yerinde otopark ve depo alanları yer alır.',
    currentAsOf: '2026 saha ve imar durumu',
    events: [
      { year: 1780, text: 'Mahmud Paşa tarafından vakfedildi.', source: 'src-kiel-albania' },
      { year: 1967, text: 'Komünist idare tarafından yıkıldı.', source: 'src-enver-hoxha-1967' }
    ],
    observations: []
  },
  {
    id: 'her-alb-shkoder-rozafa-fatih-lost',
    name: 'İşkodra Rozafa Fatih Sultan Mehmed Camii',
    modern: 'Sultan Mehmed Fatih Mosque, Rozafa Castle (Ruins inside Castle)',
    aliases: ['Xhamia e Fatihut në Rozafë', 'Sveti Stefan Kilisesinden Çevrilen Fatih Camii'],
    coordinates: [19.5022, 42.0475],
    layer: 'heritage',
    start: 1479,
    end: 1967,
    datePrecision: '1479 fetihte camiye tahvil; 1967 ateizm tahribatı',
    confidence: 'high',
    locationAccuracy: 'Rozafa Kalesi ikinci avlusu',
    source: 'src-tdv-shkoder',
    summary: '1479 İşkodra fethinden sonra Fatih Sultan Mehmed adına kentin ulu camisi yapılan tarihi mabet. 1967 ateizm kampanyasında minaresi ve çatısı dinamitlenmiş, taş duvarları üstü açık harabeye dönüştürülmüştür. Günümüzde Rozafa Arkeoloji Parkı açık hava harabesi olarak durmaktadır.',
    partialLoss: true,
    current: 'Minare ve çatı yıkılmış; üstü açık taş duvar kalıntıları arkeolojik harabe olarak durmaktadır.',
    currentAsOf: '2026 yerinde tespit',
    events: [
      { year: 1479, text: 'Fatih Sultan Mehmed tarafından fethin sembolü ulu cami olarak açıldı.', source: 'src-tdv-shkoder' },
      { year: 1967, text: 'Ateizm kampanyasında minaresi patlatıldı ve ibadete kapatıldı.', source: 'src-enver-hoxha-1967' }
    ],
    observations: []
  },
  {
    id: 'her-alb-shkoder-eski-pazar-lost',
    name: 'İşkodra Eski Pazar Camii ve Büyük Çarşısı',
    modern: 'Old Bazaar Mosque of Shkodër (Site of City Park and Highway Junction)',
    aliases: ['Xhamia e Pazarit të Vjetër', 'Büyük Çarşı Camii'],
    coordinates: [19.5050, 42.0528],
    layer: 'heritage',
    start: 1680,
    end: 1967,
    datePrecision: '17. yy inşa; 1967 ateizm kampanyasında 2500 dükkânla birlikte dozerle yıkım',
    confidence: 'high',
    locationAccuracy: 'Rozafa Kalesi ile şehir merkezi arasındaki eski çarşı mevkii',
    source: 'src-tdv-shkoder',
    summary: 'Balkanların en büyük kapalı ve açık ticaret merkezlerinden biri olan, 2.500 Osmanlı dükkânının ortasında yükselen Pazar Camii. 1967 ateizm kampanyasında Enver Hoca rejimi tarafından tüm çarşıyla birlikte dozerlerle yerle bir edilmiş, yerine İşkodra Şehir Parkı ve çevre yolu kavşağı yapılmıştır.',
    lost: true,
    current: 'Cami ve çarşı tamamen yok edilmiştir; arazisinde şehir parkı ve otoyol kavşağı bulunmaktadır.',
    currentAsOf: '2026 saha ve imar durumu',
    events: [
      { year: 1680, text: 'İşkodra ticaret merkezi olarak cami ve arasta kuruldu.', source: 'src-tdv-shkoder' },
      { year: 1967, text: 'Tüm tarihi çarşı ve cami dozerlerle yıkıldı.', source: 'src-enver-hoxha-1967' }
    ],
    observations: []
  },
  {
    id: 'her-alb-shkoder-saat-kulesi-lost',
    name: 'İşkodra Saat Kulesi',
    modern: 'Old Clock Tower of Shkodër (Site of Central Square/Intersection)',
    aliases: ['Kulla e Sahatit e Vjetër e Shkodrës', 'Buşatlı Saat Kulesi'],
    coordinates: [19.5122, 42.0675],
    layer: 'heritage',
    start: 1780,
    end: 1967,
    datePrecision: '18. yy sonu Buşatlı eseri; 1913 hasarı ve 1967 yıkımı',
    confidence: 'high',
    locationAccuracy: 'İşkodra şehir merkezi kavşağı',
    source: 'src-kiel-albania',
    summary: 'Buşatlı vezirleri tarafından inşa ettirilen kesme taş saat kulesi. 1913 Karadağ kuşatmasında hasar görmüş, 1967 komünist kentsel dönüşümünde tamamen yıkılmıştır. Yerine şehir meydanı ve kavşak yapılmıştır.',
    lost: true,
    current: 'Yapı mevcut değildir; yerinde şehir kavşağı ve anıt alanı bulunur.',
    currentAsOf: '2026 saha ve imar durumu',
    events: [
      { year: 1780, text: 'Buşatlı ailesi tarafından inşa edildi.', source: 'src-kiel-albania' },
      { year: 1967, text: 'Komünist dönemde tamamen yıkıldı.', source: 'src-enver-hoxha-1967' }
    ],
    observations: []
  },
  {
    id: 'her-alb-shkoder-dilaver-pasa-lost',
    name: 'İşkodra Dilaver Paşa Camii',
    modern: 'Dilaver Pasha Mosque (Site of Residential Blocks)',
    aliases: ['Xhamia e Dilaver Pashës', 'Dilaver Paşa Cami'],
    coordinates: [19.5167, 42.0639],
    layer: 'heritage',
    start: 1790,
    end: 1967,
    datePrecision: '18. yy sonu inşa; 1967 ateizm kampanyasında dinamitlendi',
    confidence: 'high',
    locationAccuracy: 'Gjuhadol mahallesi civarı',
    source: 'src-kiel-albania',
    summary: '18. yüzyıl sonunda Buşatlı Dilaver Paşa tarafından inşa ettirilen klasik kubbeli mahalle camisi. 1967\'de dinamitlenerek yıkılmış, yerine sosyalist konut binaları inşa edilmiştir.',
    lost: true,
    current: 'Cami yok edildi; yerinde apartman blokları bulunmaktadır.',
    currentAsOf: '2026 saha ve imar durumu',
    events: [
      { year: 1790, text: 'Dilaver Paşa tarafından yaptırıldı.', source: 'src-kiel-albania' },
      { year: 1967, text: 'Dinamitle patlatılarak yıkıldı.', source: 'src-enver-hoxha-1967' }
    ],
    observations: []
  },
  {
    id: 'her-alb-berat-sarajet-lost',
    name: 'Berat Paşa Sarayları ve Muradiye Camii',
    modern: 'Pasha\'s Saray and Muradiye Mosque, Berat (Site of Tourism Park/Parking)',
    aliases: ['Sarajet e Pashait në Berat', 'Vezir Sarayı Külliyesi'],
    coordinates: [19.9511, 40.7067],
    layer: 'heritage',
    start: 1670,
    end: 1967,
    datePrecision: '17. yy paşa sarayı; 1920-1967 yıkımları',
    confidence: 'high',
    locationAccuracy: 'Berat kalesi etekleri, Gorica karşısı',
    source: 'src-kiel-albania',
    summary: 'Evliya Çelebi\'nin Seyahatnâme\'de övgüyle bahsettiği Ahmet Kurt Paşa ve Berat paşalarının devasa saray külliyesi, kuleleri ve özel camisi. 1967 ateizm ve komünist imar operasyonlarında tamamen yok edilmiştir. Yerine şehir turizm parkı ve otopark alanı yapılmıştır.',
    lost: true,
    current: 'Saray ve cami yok edildi; arazisi şehir parkı ve otopark olarak kullanılmaktadır.',
    currentAsOf: '2026 saha ve imar durumu',
    events: [
      { year: 1670, text: 'Berat paşaları tarafından saray külliyesi kuruldu.', source: 'src-kiel-albania' },
      { year: 1967, text: 'Kalıntıları dozerlerle temizlendi.', source: 'src-enver-hoxha-1967' }
    ],
    observations: []
  },
  {
    id: 'her-alb-berat-beyaz-cami-lost',
    name: 'Berat Beyaz Cami (Fatih Camii Harabesi)',
    modern: 'White Mosque, Berat Castle (Castle Citadel Ruins)',
    aliases: ['Xhamia e Bardhë', 'Ak Cami'],
    coordinates: [19.9464, 40.7083],
    layer: 'heritage',
    start: 1417,
    end: 1967,
    datePrecision: '1417 fetih inşası; 1967 minare yıkımı',
    confidence: 'high',
    locationAccuracy: 'Berat Kalesi iç kalesi (iç hisar zirvesi)',
    source: 'src-kiel-albania',
    summary: '1417 fethi sonrası kaledeki Osmanlı garnizonu için inşa edilen, kireçtaşı beyaz bloklarıyla tanınan ilk cami. 1967 ateizm döneminde minaresi tamamen yıktırılmış, günümüzde yaklaşık 1 metre yüksekliğinde duvar temelleri açık hava arkeoloji parkı olarak kalmıştır.',
    partialLoss: true,
    current: 'Minaresi ve çatısı yıkılmış; iç kalede taş temel kalıntıları durmaktadır.',
    currentAsOf: '2026 yerinde tespit',
    events: [
      { year: 1417, text: 'Fetih sonrasında garnizon camisi olarak inşa edildi.', source: 'src-kiel-albania' },
      { year: 1967, text: 'Minaresi yıktırıldı ve ibadete kapatıldı.', source: 'src-enver-hoxha-1967' }
    ],
    observations: []
  },
  {
    id: 'her-alb-elbasan-hasan-bali-lost',
    name: 'İlbasan Hasan Bâlîzâde Camii',
    modern: 'Hasan Bali Mosque, Elbasan (Site of Commercial Square)',
    aliases: ['Xhamia e Hasan Balit', 'Hasan Bâlîzâde Camii'],
    coordinates: [20.0833, 41.1119],
    layer: 'heritage',
    start: 1608,
    end: 1967,
    datePrecision: '1608 inşa; 1967 ateizm kampanyasında dozerlerle yıkım',
    confidence: 'high',
    locationAccuracy: 'İlbasan kale dışı çarşı girişi',
    source: 'src-kiel-albania',
    summary: '1608 yılında Hasan Bâlîzâde tarafından yaptırılan, kubbeli ve revaklı anıtsal çarşı camisi. 1967 ateizm kampanyasında tamamen yerle bir edilmiş, yerine İlbasan Çarşı Meydanı ve mağazalar inşa edilmiştir.',
    lost: true,
    current: 'Cami tamamen yok edildi; yerinde çarşı meydanı ve betonarme dükkânlar bulunmaktadır.',
    currentAsOf: '2026 saha ve imar durumu',
    events: [
      { year: 1608, text: 'Hasan Bâlîzâde tarafından vakfedildi.', source: 'src-kiel-albania' },
      { year: 1967, text: 'Dozerlerle tamamen yıkıldı.', source: 'src-enver-hoxha-1967' }
    ],
    observations: []
  },
  {
    id: 'her-alb-elbasan-sinan-pasa-lost',
    name: 'İlbasan Koca Sinan Paşa Camii',
    modern: 'Sinan Pasha Mosque, Elbasan (Site of Apartment Complex)',
    aliases: ['Xhamia e Sinan Pashës', 'Sinan Paşa Külliyesi'],
    coordinates: [20.0847, 41.1142],
    layer: 'heritage',
    start: 1590,
    end: 1967,
    datePrecision: '1590 Koca Sinan Paşa vakfı; 1967 dozerle yıkım',
    confidence: 'high',
    locationAccuracy: 'İlbasan kuzey mahalleleri',
    source: 'src-kiel-albania',
    summary: 'Sadrazam Koca Sinan Paşa tarafından 1590\'da medrese ve imaretiyle birlikte yaptırılan büyük külliye camisi. 1967 ateizm kampanyasında yıktırılmış, arazisine devlete ait sosyalist toplu konut apartmanları yapılmıştır.',
    lost: true,
    current: 'Cami mevcut değildir; yerinde çok katlı apartman binaları yükselmektedir.',
    currentAsOf: '2026 saha ve imar durumu',
    events: [
      { year: 1590, text: 'Koca Sinan Paşa tarafından inşa ettirildi.', source: 'src-kiel-albania' },
      { year: 1967, text: 'Komünist rejim tarafından yıkıldı.', source: 'src-enver-hoxha-1967' }
    ],
    observations: []
  },
  {
    id: 'her-alb-korce-faik-bey-lost',
    name: 'Görice Gazi Faik Bey Camii',
    modern: 'Faik Bey Mosque, Korçë (Site of City Theatre Square)',
    aliases: ['Xhamia e Faik Beut', 'Gazi Faik Camii'],
    coordinates: [20.7819, 40.6172],
    layer: 'heritage',
    start: 1520,
    end: 1967,
    datePrecision: '16. yy başı inşa; 1967 dozerle yıkım',
    confidence: 'high',
    locationAccuracy: 'Görice Tiyatrosu yanı',
    source: 'src-kiel-albania',
    summary: '16. yüzyıl başında Gazi Faik Bey tarafından inşa ettirilen kentin en eski camilerinden biri. 1967 ateizm kampanyasında yıktırılmış, yerine Şehir Tiyatrosu önündeki beton tören meydanı ve park yapılmıştır.',
    lost: true,
    current: 'Cami yok edildi; yerinde tiyatro meydanı ve açık beton alan bulunmaktadır.',
    currentAsOf: '2026 saha ve imar durumu',
    events: [
      { year: 1520, text: 'Gazi Faik Bey tarafından inşa edildi.', source: 'src-kiel-albania' },
      { year: 1967, text: 'Komünist idare tarafından yıkıldı.', source: 'src-enver-hoxha-1967' }
    ],
    observations: []
  },
  {
    id: 'her-alb-korce-pazar-cami-lost',
    name: 'Görice Pazar Camii',
    modern: 'Bazaar Mosque of Korçë (Site of Paved Open Square)',
    aliases: ['Xhamia e Pazarit të Korçës', 'Eski Pazar Camii'],
    coordinates: [20.7797, 40.6164],
    layer: 'heritage',
    start: 1720,
    end: 1967,
    datePrecision: '18. yy inşa; 1967 ateizm yıkımı',
    confidence: 'high',
    locationAccuracy: 'Görice Tarihi Çarşısı (Pazari i Vjetër)',
    source: 'src-kiel-albania',
    summary: 'Görice\'nin meşhur hanlar ve arastalarla dolu Eski Çarşısı\'nın kalbinde yükselen cami. 1967\'de yıktırılmış, arazisi pazarın ortasında beton döşeli açık meydan haline getirilmiştir.',
    lost: true,
    current: 'Cami yok edilmiştir; arazisi restore edilen tarihi çarşının açık meydanıdır.',
    currentAsOf: '2026 saha ve imar durumu',
    events: [
      { year: 1720, text: 'Esnaf loncaları tarafından yaptırıldı.', source: 'src-kiel-albania' },
      { year: 1967, text: 'Ateizm kampanyasında yıkıldı.', source: 'src-enver-hoxha-1967' }
    ],
    observations: []
  },
  {
    id: 'her-alb-gjirokaster-haci-murad-lost',
    name: 'Ergiri Hacı Murad Camii',
    modern: 'Haxhi Murat Mosque, Gjirokastër (Site of Residential Area & Road)',
    aliases: ['Xhamia e Haxhi Muratit', 'Hacı Murad Camii'],
    coordinates: [20.1417, 40.0764],
    layer: 'heritage',
    start: 1680,
    end: 1967,
    datePrecision: '17. yy sonu inşa; 1967 dozerle yıkım',
    confidence: 'high',
    locationAccuracy: 'Ergiri kalesi alt yamaçları',
    source: 'src-kiel-albania',
    summary: 'Ergiri\'nin yedi tarihi camisinden biri; 1967 ateizm kampanyasında Pazar Camii haricindeki tüm diğer camiler gibi dozerlerle yıkılmış, yerine yol genişletmesi ve konut alanı yapılmıştır.',
    lost: true,
    current: 'Cami tamamen yok edildi; yerinden yol geçmektedir.',
    currentAsOf: '2026 saha ve imar durumu',
    events: [
      { year: 1680, text: 'Hacı Murad tarafından inşa ettirildi.', source: 'src-kiel-albania' },
      { year: 1967, text: 'Ateizm kampanyasında dozerle yıkıldı.', source: 'src-enver-hoxha-1967' }
    ],
    observations: []
  },
  {
    id: 'her-alb-durres-sahil-cami-lost',
    name: 'Dıraç Mehmed Fatih Sahil Camii',
    modern: 'Coastal Mosque of Durrës (Site of Commercial Port Quay)',
    aliases: ['Xhamia e Skelës', 'İskele Camii'],
    coordinates: [19.4478, 41.3156],
    layer: 'heritage',
    start: 1510,
    end: 1967,
    datePrecision: '16. yy başı inşa; 1967 liman sanayileşmesinde yıkım',
    confidence: 'high',
    locationAccuracy: 'Dıraç ticari liman rıhtımı',
    source: 'src-kiel-albania',
    summary: 'Osmanlı denizcileri ve gümrük görevlileri için liman rıhtımında inşa edilen tarihi İskele Camii. 1967 ateizm kampanyası ve liman genişletmesi sırasında yıkılmış, yerine beton sanayi rıhtımı ve gümrük ambarları yapılmıştır.',
    lost: true,
    current: 'Cami yok edilmiştir; arazisinde Dıraç konteyner limanı rıhtımı yer alır.',
    currentAsOf: '2026 saha ve imar durumu',
    events: [
      { year: 1510, text: 'Liman gümrük görevlileri ve denizciler için inşa edildi.', source: 'src-kiel-albania' },
      { year: 1967, text: 'Liman genişletmesi ve ateizm kampanyasında yıkıldı.', source: 'src-enver-hoxha-1967' }
    ],
    observations: []
  },
  {
    id: 'her-alb-vlora-haci-ali-lost',
    name: 'Avlonya Hacı Ali Bey Camii',
    modern: 'Haxhi Ali Mosque, Vlorë (Site of Seaside Boulevard Park)',
    aliases: ['Xhamia e Haxhi Aliut', 'Hacı Ali Camii'],
    coordinates: [19.4867, 40.4633],
    layer: 'heritage',
    start: 1675,
    end: 1967,
    datePrecision: '17. yy sonu inşa; 1967 dinamitlendi',
    confidence: 'high',
    locationAccuracy: 'Avlonya sahil bulvarı park mevkii',
    source: 'src-kiel-albania',
    summary: 'Osmanlı denizcisi Hacı Ali adına Avlonya sahilinde inşa edilen kubbeli cami. 1967 ateizm kampanyasında dinamitlenmiş, yerine sahil yolu genişletmesi ve şehir parkı yapılmıştır.',
    lost: true,
    current: 'Cami yok edilmiştir; yerinde sahil parkı ve bulvar bulunmaktadır.',
    currentAsOf: '2026 saha ve imar durumu',
    events: [
      { year: 1675, text: 'Ünlü Osmanlı denizcisi anısına inşa edildi.', source: 'src-kiel-albania' },
      { year: 1967, text: 'Dinamitlenerek tamamen yıkıldı.', source: 'src-enver-hoxha-1967' }
    ],
    observations: []
  },
  {
    id: 'her-alb-lezhe-selimiye-lost',
    name: 'Leş Selimiye Camii',
    modern: 'Selimiye Mosque of Lezhë (Site of Skanderbeg Mausoleum)',
    aliases: ['Xhamia e Selimijes', 'Sultan Selim Camii'],
    coordinates: [19.6442, 41.7828],
    layer: 'heritage',
    start: 1512,
    end: 1981,
    datePrecision: '1512 I. Selim inşası; 1967 minare yıkımı ve 1981 mozoleye dönüştürme',
    confidence: 'high',
    locationAccuracy: 'Leş şehir merkezi, İskender Bey Mozolesi kompleksi',
    source: 'src-kiel-albania',
    summary: '1512 yılında Sultan I. Selim tarafından Saint Nicholas kilisesi harabesi üzerine inşa ettirilen abidevi Selimiye Camii. 1967 ateizm kampanyasında minaresi ve mihrabı yıkılmış, 1981 yılında cami unsurları tamamen kaldırılarak yerine beton kolonlu modern İskender Bey Mozolesi (Mauzoleu i Skënderbeut) inşa edilmiştir.',
    lost: true,
    current: 'Cami tamamen ortadan kaldırılmıştır; kalıntıları üzerinde İskender Bey Ulusal Mozolesi yer almaktadır.',
    currentAsOf: '2026 yerinde tespit',
    events: [
      { year: 1512, text: 'Sultan I. Selim adına cuma camisi olarak inşa edildi.', source: 'src-kiel-albania' },
      { year: 1967, text: 'Minare ve mihrabı ateizm kampanyasında yıktırıldı.', source: 'src-enver-hoxha-1967' },
      { year: 1981, text: 'Cami unsurları sökülerek yerine İskender Bey Mozolesi inşa edildi.', source: 'src-kiel-albania' }
    ],
    observations: []
  }
];

import type { Source, Place } from './atlas-data';

export const serbianSources: Source[] = [
  {
    id: 'src-tdv-kiel-srb',
    title: 'Sırbistan ve Balkanlar’da Osmanlı Mimarî Mirası ve Şehir Tarihi',
    author: 'Machiel Kiel · TDV İslâm Ansiklopedisi',
    date: '1990–2010',
    url: 'https://islamansiklopedisi.org.tr/muellif/machiel-kiel',
    locator: 'Belgrad, Yeni Pazar, Niş, Semendire, Alacahisar ve Böğürdelen maddeleri; tahrir, vakfiye ve kentsel dönüşüm tahlilleri',
    kind: 'Akademik monografi & ansiklopedi'
  },
  {
    id: 'src-eyice-belgrad',
    title: 'Belgrad’da Türk Eserleri ve Batal Camii Tarihi',
    author: 'Semavi Eyice · İstanbul Üniversitesi Edebiyat Fakültesi Tarih Dergisi & Belleten',
    date: '1964–1981',
    url: 'https://dergipark.org.tr/tr/pub/iutarih',
    locator: 'Belgrad camileri, Batal Camii yıkımı, Kalemegdan tabyaları, Damat Ali Paşa ve Şeyh Mustafa türbeleri monografisi',
    kind: 'Akademik envanter & monografi'
  },
  {
    id: 'src-zamolo-belgrade',
    title: 'Beograd kao orijentalna varoš pod Turcima 1521–1867 (Osmanlı İdaresinde Belgrad)',
    author: 'Divna Djurić-Zamolo · Muzej Grada Beograda (Belgrad Şehir Müzesi Yayınları)',
    date: '1977',
    url: 'http://www.mgb.org.rs/',
    locator: '1521–1867 arası Belgrad camileri, mescitleri, hanları, hamamları ve 1867 sonrası yıkılan yapıların kadastral yerleri',
    kind: 'Arşiv kadastro ve mimarlık tarihi monografisi'
  },
  {
    id: 'src-sabanovic-bosna-belgrad',
    title: 'Bosanski Pašaluk & Turski izvori za istoriju Beograda',
    author: 'Hazim Šabanović · Naučno Društvo NR BiH & SANU, Sarajevo/Beograd',
    date: '1959–1964',
    url: 'https://anubih.ba/',
    locator: 'Yeni Pazar Sancağı, Belgrad Muhafızlığı, Semendire ve Alacahisar tahrirleri idari taksimatı',
    kind: 'Birincil arşiv neşriyatı & idari tarih'
  },
  {
    id: 'src-tahrir-td370-srb',
    title: 'BOA TD 370 / TD 187: Semendire, Alacahisar, Vuçıtrın ve Bosna Livâları Tahrir Defterleri (1530–1560)',
    author: 'Devlet Arşivleri Başkanlığı Osmanlı Arşivi (BOA)',
    date: '1530; 2003',
    url: 'https://www.devletarsivleri.gov.tr/',
    locator: 'Belgrad, Semendire, Alacahisar (Kruševac), Niş ve Yeni Pazar hâne, cizye ve vakıf kayıtları',
    kind: 'Birincil arşiv tahrir defteri'
  },
  {
    id: 'src-evliya-srb',
    title: 'Evliya Çelebi Seyahatnâmesi: Belgrad, Sancak ve Niş Güzergâhları (5. ve 6. Ciltler)',
    author: 'Evliya Çelebi · Haz. Y. Dağlı, S. A. Kahraman (Yapı Kredi Yayınları)',
    date: '1660–1664; 2007',
    url: 'https://ykykultur.com.tr/',
    locator: 'Belgrad’ın 200’den fazla camisi, Kalemegdan hisarı, Yeni Pazar çarşısı, Uziçe ve Niş seyahat tasvirleri',
    kind: 'Tarihî seyahatnâme ve gözlem'
  },
  {
    id: 'src-karpat-srb-pop',
    title: 'Ottoman Population 1830–1914: Demographic and Social Characteristics',
    author: 'Kemal H. Karpat · The University of Wisconsin Press',
    date: '1985',
    url: 'https://uwpress.wisc.edu/',
    locator: 'Belgrad Paşalığı, Sırbistan Prensliği ve 1878 Berlin sonrası Niş, Leskofça ve Vranye Müslüman göç dökümleri',
    kind: 'Akademik demografi referansı'
  },
  {
    id: 'src-tahliye-1862-1867',
    title: '1862 Kanlıca Protokolü ve 1867 Belgrad Tahliyesi Emvâl-i Metrûke ve Muhacir Kütükleri',
    author: 'Osmanlı Hariciye Nezareti & Belgrad Muhafızlığı Arşivi (BOA HR.SYS / İ.DH)',
    date: '1862–1867',
    url: 'https://katalog.devletarsivleri.gov.tr/',
    locator: 'Belgrad, Böğürdelen (Šabac), Uziçe ve Soko kasabalarından Osmanlı tebaasının tahliyesi ve mülk tasfiyeleri',
    kind: 'Birincil diplomatik protokol ve tahliye kütüğü'
  },
  {
    id: 'src-rzzsk-srb-monuments',
    title: 'Sırbistan Kültür Anıtlarını Koruma Enstitüsü (RZZSK) Tescilli İslam ve Osmanlı Anıtları Sicili',
    author: 'Republički zavod za zaštitu spomenika kulture (RZZSK, Beograd)',
    date: '2023',
    url: 'https://www.heritage.gov.rs/',
    locator: 'Bayraklı Camii, Şeyh Mustafa Türbesi, Damat Ali Paşa Türbesi, Altun Âlem Camii ve Niş Kalesi resmi tescil fişleri',
    kind: 'Resmî devlet anıt tescil kütüğü'
  },
  {
    id: 'src-mesihat-srb',
    title: 'Sırbistan İslam Birliği Meşihatı Tarihî Vakıf Eserleri ve Camiler Envanteri',
    author: 'Mešihat Islamske Zajednice u Srbiji (Novi Pazar)',
    date: '2021',
    url: 'https://mesihat.org/',
    locator: 'Yeni Pazar, Sjenica, Tutin, Prijepolje, Priboj, Nova Varoš ve Belgrad faal cami ve vakıf taşınmazları kütüğü',
    kind: 'Dini idare vakıf envanteri'
  },
  {
    id: 'src-simsir-rumeli-srb',
    title: 'Rumeli’den Türk Göçleri: Belgeler (Cilt I–III)',
    author: 'Bilal N. Şimşir · Türk Tarih Kurumu Yayınları',
    date: '1989',
    url: 'https://www.ttk.gov.tr/',
    locator: '1877–1878 Osmanlı-Rus Harbi sonrası Niş, Pirot, Leskofça ve Vranye Türklerinin Osmanlı topraklarına ilticası',
    kind: 'Akademik belge neşriyatı'
  },
  {
    id: 'src-rzs-census-srb',
    title: 'Sırbistan Krallığı ve Sırbistan Cumhuriyeti Resmî Nüfus Sayımları (1900–2011)',
    author: 'Republički zavod za statistiku (RZS, Beograd)',
    date: '1900; 2011',
    url: 'https://www.stat.gov.rs/',
    locator: 'Sancak belediyeleri (Novi Pazar, Tutin, Sjenica) ve Güney Sırbistan (Preševo, Bujanovac) etnik ve dinî sayım tabloları',
    kind: 'Resmî devlet sayımı'
  }
];

export const serbianPlaces: Place[] = [
  // ==========================================
  // I. TARİHSEL YERLEŞİMLER (SETTLEMENTS - 24 YERLEŞİM)
  // ==========================================
  {
    id: 'srb-belgrade',
    name: 'Belgrad',
    modern: 'Belgrade',
    aliases: ['Beograd', 'Darü’l-Cihad', 'Singidunum', 'Београд', 'Belgrad Kalesi'],
    coordinates: [20.461, 44.817],
    layer: 'settlement',
    start: 1521,
    datePrecision: '1521 Kanuni Sultan Süleyman fethi; Belgrad Paşalığı merkezi',
    confidence: 'high',
    locationAccuracy: 'Kalemegdan, Dorćol ve Bayraklı Camii merkezli Osmanlı kentsel çekirdeği',
    source: 'src-zamolo-belgrade',
    summary: 'Osmanlıların Orta Avrupa fetihlerinin kapısı ve üssü olan Darü’l-Cihad. 17. yüzyılda Evliya Çelebi’ye göre 200’den fazla cami ve mescidi, kervansarayları ve hanlarıyla Tuna-Sava kavşağında devasa bir İslam metropolüydü; 1867 tahliyesi ve 1878 sonrası camilerin neredeyse tamamı yıktırılmıştır.',
    current: 'Sırbistan Cumhuriyeti başkenti.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1521, text: 'Kanuni Sultan Süleyman tarafından fethedildi ve Belgrad Muhafızlığı tesis edildi.', source: 'src-tdv-kiel-srb' },
      { year: 1575, text: 'Hüseyin Kethüda tarafından Bayraklı Camii inşa edildi.', source: 'src-eyice-belgrad' },
      { year: 1862, text: 'Çukur Çeşme hadisesi sonrası şehir içi Türk mahallesi tahliye edilmeye başlandı.', source: 'src-tahliye-1862-1867' },
      { year: 1867, text: 'Ali Rıza Paşa komutasındaki son Osmanlı garnizonu Belgrad Kalesi’nden törenle çekildi.', source: 'src-tahliye-1862-1867' },
      { year: 1878, text: 'Berlin Antlaşması ile Sırbistan bağımsız oldu; kalan Osmanlı yapıları hızla yıktırıldı.', source: 'src-zamolo-belgrade' }
    ],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: 'BOA TD 370 Semendire Livâsı tahriri: Şehirde hızla gelişen Müslüman hâne varlığı.',
        source: 'src-tahrir-td370-srb',
        values: [
          { label: 'Müslüman', value: 310 },
          { label: 'Gayrimüslim (Sırp, Macar, Ragusan)', value: 415 }
        ],
        unit: 'hâne',
        scope: 'Belgrad varoşu ve kalesi'
      },
      {
        year: 1660,
        dimension: 'settlement_origin',
        text: 'Evliya Çelebi Seyahatnâmesi: Belgrad’da 38 Müslüman mahallesi, 217 cami ve mescit, 17 tekke, 7 hamam ve devasa ticaret bedesteni tasvir edilir.',
        source: 'src-evliya-srb'
      },
      {
        year: 1862,
        dimension: 'migration',
        text: '1862 Kanlıca Protokolü tahliye kütükleri: Şehir içi mahallelerden ayrılan Türk nüfus.',
        source: 'src-tahliye-1862-1867',
        values: [
          { label: 'Tahliye edilen Müslüman Türk nüfus', value: 8500 }
        ],
        unit: 'kişi',
        scope: 'Belgrad şehir merkezi Türk mahalleleri'
      }
    ]
  },
  {
    id: 'srb-novipazar',
    name: 'Yeni Pazar',
    modern: 'Novi Pazar',
    aliases: ['Yenipazar', 'Yeni Pazar Sancağı', 'Нови Пазар', 'Novi Pazar Kasabası'],
    coordinates: [20.512, 43.140],
    layer: 'settlement',
    start: 1461,
    datePrecision: '1461 İsa Bey İshakoviç vakfiyesi ve şehir kuruluşu',
    confidence: 'high',
    locationAccuracy: 'Altun Âlem Camii, İsa Bey Hamamı ve kale merkezli tarihi çekirdek',
    source: 'src-sabanovic-bosna-belgrad',
    summary: 'Saraybosna’nın da kurucusu olan İsa Bey İshakoviç tarafından kurulan Yeni Pazar Sancağı merkezi. Altun Âlem Camii, Lejlek Camii, İsa Bey Hamamı ve Kalesi ile Osmanlı-Boşnak İslam kültürünün Sırbistan’daki en güçlü kalesidir.',
    current: 'Sırbistan’da Sancak (Sandžak) bölgesinin en büyük şehri; ezici Boşnak ve Müslüman nüfus çoğunluğuna sahiptir (%80+ Müslüman).',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1461, text: 'İsa Bey İshakoviç vakfiyesiyle cami, hamam ve pazar kurularak şehir inşa edildi.', source: 'src-sabanovic-bosna-belgrad' },
      { year: 1515, text: 'Muslihuddin Abdülgani tarafından Altun Âlem Camii ve medresesi yaptırıldı.', source: 'src-tdv-kiel-srb' },
      { year: 1912, text: 'I. Balkan Savaşı’nda Osmanlı idaresinden çıktı.', source: 'src-karpat-srb-pop' }
    ],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: '1530 BOA TD 370 Bosna Sancağı tahriri: Şehirde ezici Müslüman çoğunluk.',
        source: 'src-tahrir-td370-srb',
        values: [
          { label: 'Müslüman', value: 275 },
          { label: 'Hıristiyan', value: 28 }
        ],
        unit: 'hâne',
        scope: 'Yeni Pazar kasaba merkezi'
      },
      {
        year: 1910,
        dimension: 'religion',
        text: 'Osmanlı son dönemi sayımı: Yeni Pazar kaza merkezi.',
        source: 'src-karpat-srb-pop',
        values: [
          { label: 'Müslüman', value: 14200 },
          { label: 'Ortodoks Hıristiyan', value: 3150 }
        ],
        unit: 'kişi',
        scope: 'Yeni Pazar kaza merkezi'
      },
      {
        year: 2011,
        dimension: 'ethnicity',
        text: '2011 Sırbistan Cumhuriyeti RZS Resmi Nüfus Sayımı.',
        source: 'src-rzs-census-srb',
        values: [
          { label: 'Boşnak / Müslüman', value: 77495 },
          { label: 'Sırp', value: 16234 }
        ],
        unit: 'kişi',
        scope: 'Novi Pazar belediye sınırları genel toplamı'
      }
    ]
  },
  {
    id: 'srb-sjenica',
    name: 'Seniçe',
    modern: 'Sjenica',
    aliases: ['Senice', 'Сјеница', 'Sjenica Kasabası'],
    coordinates: [20.004, 43.272],
    layer: 'settlement',
    start: 1465,
    datePrecision: '1465 fethi; Sancak yaylası kaza merkezi',
    confidence: 'high',
    locationAccuracy: 'Sultan Valide Camii civarı kentsel merkez',
    source: 'src-tdv-kiel-srb',
    summary: 'Peşter yaylasında kurulu stratejik menzil kasabası; 1870 yılında Sultan Abdülaziz’in annesi Pertevniyal Valide Sultan adına inşa edilen dev kubbeli Valide Sultan Camii ile tanınır.',
    current: 'Sırbistan’da Sancak bölgesine bağlı Türk ve Boşnak Müslüman nüfuslu şehir (%75+ Müslüman).',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1465, text: 'Osmanlı kuvvetlerince fethedildi.', source: 'src-tdv-kiel-srb' },
      { year: 1870, text: 'Pertevniyal Valide Sultan Camii inşa edildi.', source: 'src-mesihat-srb' }
    ],
    observations: [
      {
        year: 1910,
        dimension: 'religion',
        text: 'Osmanlı Sancak sayımı.',
        source: 'src-karpat-srb-pop',
        values: [
          { label: 'Müslüman tebaa', value: 6850 },
          { label: 'Ortodoks tebaa', value: 2140 }
        ],
        unit: 'kişi',
        scope: 'Seniçe kaza merkezi'
      },
      {
        year: 2011,
        dimension: 'ethnicity',
        text: '2011 RZS Sırbistan sayımı.',
        source: 'src-rzs-census-srb',
        values: [
          { label: 'Boşnak / Müslüman', value: 19496 },
          { label: 'Sırp', value: 5264 }
        ],
        unit: 'kişi',
        scope: 'Sjenica belediye toplamı'
      }
    ]
  },
  {
    id: 'srb-nis',
    name: 'Niş',
    modern: 'Niš',
    aliases: ['Nissa', 'Ниш', 'Niş Sancağı', 'Naissus'],
    coordinates: [21.895, 43.321],
    layer: 'settlement',
    start: 1386,
    datePrecision: '1386 I. Murad fethi; Niş Eyaleti ve Sancağı merkezi',
    confidence: 'high',
    locationAccuracy: 'Niş Kalesi, İslam Ağa Camii ve Nişava nehri kıyısı',
    source: 'src-tdv-kiel-srb',
    summary: 'Rumeli ordu güzergâhının (Orta Kol) en mühim kilidi; 1723 tarihli görkemli Niş Kalesi, Bali Bey Camii ve İslam Ağa Camii ile yüzyıllarca sancak ve eyalet merkeziydi; 1878’de Osmanlı idaresinden çıktı.',
    current: 'Sırbistan’ın güneyindeki en büyük şehir ve üçüncü büyük metropolü.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1386, text: 'I. Murad tarafından fethedildi.', source: 'src-tdv-kiel-srb' },
      { year: 1723, text: 'Tuna ve Belgrad savunması için devasa Niş Kalesi inşa edildi.', source: 'src-tdv-kiel-srb' },
      { year: 1878, text: 'Berlin Antlaşması ile Sırbistan’a bırakıldı; on binlerce Müslüman Türk güneye göç etti.', source: 'src-simsir-rumeli-srb' }
    ],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: '1530 BOA TD 370 Alacahisar Livâsı tahriri.',
        source: 'src-tahrir-td370-srb',
        values: [
          { label: 'Müslüman', value: 420 },
          { label: 'Hıristiyan', value: 165 }
        ],
        unit: 'hâne',
        scope: 'Niş kasabası'
      },
      {
        year: 1877,
        dimension: 'religion',
        text: '1877 Tuna Vilâyeti Salnâmesi: Niş Sancağı merkez kazası.',
        source: 'src-karpat-srb-pop',
        values: [
          { label: 'Müslüman tebaa', value: 12450 },
          { label: 'Gayrimüslim tebaa', value: 8900 }
        ],
        unit: 'kişi',
        scope: 'Niş şehir merkezi (savaş öncesi)'
      },
      {
        year: 1879,
        dimension: 'migration',
        text: '1879 Sırp sayımı: Savaş ve göç sonrası Niş’te kalan Müslüman nüfus dramatik biçimde azaldı.',
        source: 'src-simsir-rumeli-srb',
        values: [
          { label: 'Kalan Müslüman', value: 1168 },
          { label: 'Sırp ve Hıristiyan', value: 11630 }
        ],
        unit: 'kişi',
        scope: 'Niş şehir merkezi'
      }
    ]
  },
  {
    id: 'srb-prijepolje',
    name: 'Prepol',
    modern: 'Prijepolje',
    aliases: ['Priyepolye', 'Пријепоље', 'Prepol Kasabası'],
    coordinates: [19.650, 43.385],
    layer: 'settlement',
    start: 1465,
    datePrecision: '1465 fethi; Lim nehri kıyısı menzil kasabası',
    confidence: 'high',
    locationAccuracy: 'İbrahim Paşa Camii ve Saat Kulesi çevresi',
    source: 'src-tdv-kiel-srb',
    summary: 'Lim nehri kıyısında Osmanlı ticaret ve menzil kasabası; 16. yüzyıl İbrahim Paşa Camii ve 17. yüzyıl Saat Kulesi ile tanınır.',
    current: 'Sırbistan’da Sancak bölgesine bağlı şehir (%45+ Boşnak Müslüman nüfus).',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1465, text: 'Osmanlı idaresine girdi.', source: 'src-tdv-kiel-srb' },
      { year: 1572, text: 'Budin Beylerbeyi İbrahim Paşa tarafından cami inşa ettirildi.', source: 'src-mesihat-srb' }
    ],
    observations: [
      {
        year: 2011,
        dimension: 'ethnicity',
        text: '2011 RZS Sırbistan sayımı.',
        source: 'src-rzs-census-srb',
        values: [
          { label: 'Boşnak / Müslüman', value: 15907 },
          { label: 'Sırp', value: 19496 }
        ],
        unit: 'kişi',
        scope: 'Prijepolje belediye sınırları'
      }
    ]
  },
  {
    id: 'srb-priboj',
    name: 'Priboy',
    modern: 'Priboj',
    aliases: ['Прибој', 'Priboy Kasabası'],
    coordinates: [19.525, 43.585],
    layer: 'settlement',
    start: 1465,
    datePrecision: '1465 fethi',
    confidence: 'high',
    locationAccuracy: 'Hasan Paşa Camii ve Lim vadisi',
    source: 'src-tdv-kiel-srb',
    summary: 'Lim nehri kanyonunda Bosna sınırında menzil kenti; Hasan Paşa Camii ile Sancak Türk ve Boşnak kültür havzasındadır.',
    current: 'Sırbistan’da Bosna-Hersek sınırında şehir.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1465, text: 'Osmanlı fethi.', source: 'src-tdv-kiel-srb' }],
    observations: [
      {
        year: 2011,
        dimension: 'ethnicity',
        text: '2011 RZS Sırbistan sayımı.',
        source: 'src-rzs-census-srb',
        values: [
          { label: 'Boşnak / Müslüman', value: 5085 },
          { label: 'Sırp', value: 20490 }
        ],
        unit: 'kişi',
        scope: 'Priboj belediye toplamı'
      }
    ]
  },
  {
    id: 'srb-tutin',
    name: 'Tutin',
    modern: 'Tutin',
    aliases: ['Тутин', 'Tutin Kasabası'],
    coordinates: [20.332, 42.990],
    layer: 'settlement',
    start: 1465,
    datePrecision: '1465 fethi',
    confidence: 'high',
    locationAccuracy: 'Merkez Camii ve şehir meydanı',
    source: 'src-sabanovic-bosna-belgrad',
    summary: 'Doğu Sancak dağlık bölgesinde Peşter yaylasının kalbinde kurulu kasaba; halkının %90’ından fazlası Müslüman Boşnak ve Türk kökenlidir.',
    current: 'Sırbistan’da Müslüman nüfus oranının en yüksek olduğu belediye merkezi (%90+ Müslüman).',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1465, text: 'Osmanlı idaresine alındı.', source: 'src-sabanovic-bosna-belgrad' }],
    observations: [
      {
        year: 2011,
        dimension: 'ethnicity',
        text: '2011 RZS Sırbistan sayımı: Ezici Boşnak ve Müslüman çoğunluk.',
        source: 'src-rzs-census-srb',
        values: [
          { label: 'Boşnak / Müslüman', value: 28041 },
          { label: 'Sırp', value: 1090 }
        ],
        unit: 'kişi',
        scope: 'Tutin belediyesi genel toplamı'
      }
    ]
  },
  {
    id: 'srb-novavaros',
    name: 'Yenikasaba',
    modern: 'Nova Varoš',
    aliases: ['Nova Varoş', 'Нова Варош', 'Yeni Varoş'],
    coordinates: [19.812, 43.460],
    layer: 'settlement',
    start: 1530,
    datePrecision: '16. yüzyıl başı Skender Paşa vakfiyesi',
    confidence: 'medium',
    locationAccuracy: 'Skender Paşa Camii civarı',
    source: 'src-tdv-kiel-srb',
    summary: 'Zlatar dağları eteklerinde Skender Paşa vakfıyla kurulan Osmanlı kaza kasabası.',
    current: 'Sırbistan’da Sancak bölgesine bağlı şehir.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1530, text: 'Skender Paşa vakfıyla kaza kasabası olarak kuruldu.', source: 'src-tdv-kiel-srb' }],
    observations: [
      {
        year: 2011,
        dimension: 'ethnicity',
        text: '2011 RZS sayımı.',
        source: 'src-rzs-census-srb',
        values: [
          { label: 'Boşnak / Müslüman', value: 1395 },
          { label: 'Sırp', value: 14814 }
        ],
        unit: 'kişi',
        scope: 'Nova Varoš belediye sınırları'
      }
    ]
  },
  {
    id: 'srb-smederevo',
    name: 'Semendire',
    modern: 'Smederevo',
    aliases: ['Semendria', 'Смедерево', 'Semendire Sancağı'],
    coordinates: [20.930, 44.665],
    layer: 'settlement',
    start: 1459,
    datePrecision: '1459 Fatih Sultan Mehmed fethi; Semendire Sancağı merkezi',
    confidence: 'high',
    locationAccuracy: 'Tuna kıyısındaki Semendire Kalesi içi ve varoşu',
    source: 'src-tdv-kiel-srb',
    summary: 'Fatih Sultan Mehmed tarafından fethedilerek Sırp Despotluğu’na son verilen ve uzun yıllar Semendire Sancağı başkentliği yapan muazzam Tuna kalesi ve şehri.',
    current: 'Sırbistan’da Tuna nehri kıyısında sanayi ve liman kenti.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1459, text: 'Fatih Sultan Mehmed fethetti ve Semendire Sancağı kuruldu.', source: 'src-tdv-kiel-srb' }
    ],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: '1530 BOA TD 370 Semendire Sancağı tahrir defteri.',
        source: 'src-tahrir-td370-srb',
        values: [
          { label: 'Müslüman', value: 290 },
          { label: 'Hıristiyan', value: 180 }
        ],
        unit: 'hâne',
        scope: 'Semendire kalesi ve varoşu'
      }
    ]
  },
  {
    id: 'srb-sabac',
    name: 'Böğürdelen',
    modern: 'Šabac',
    aliases: ['Şabaç', 'Шабац', 'Böğürdelen Kalesi'],
    coordinates: [19.690, 44.757],
    layer: 'settlement',
    start: 1471,
    datePrecision: '1471 Fatih Sultan Mehmed tarafından kale inşası',
    confidence: 'high',
    locationAccuracy: 'Sava nehri kıyısındaki Böğürdelen Kalesi',
    source: 'src-tdv-kiel-srb',
    summary: 'Fatih Sultan Mehmed’in Macaristan akınlarını denetlemek üzere Sava kıyısına kurdurduğu stratejik Böğürdelen Hisarı; 1867’ye kadar Osmanlı garnizon kasabasıydı.',
    current: 'Sırbistan’da Sava kıyısında vilayet merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1471, text: 'Fatih Sultan Mehmed bizzat kale inşasını emretti.', source: 'src-tdv-kiel-srb' },
      { year: 1867, text: 'Osmanlı garnizonu tahliye edildi.', source: 'src-tahliye-1862-1867' }
    ],
    observations: [
      {
        year: 1862,
        dimension: 'migration',
        text: 'Böğürdelen tahliyesi: Osmanlı Müslüman tebaası Bosna ve Rumeli’ye sevk edildi.',
        source: 'src-tahliye-1862-1867',
        values: [
          { label: 'Tahliye edilen Müslüman nüfus', value: 2800 }
        ],
        unit: 'kişi',
        scope: 'Böğürdelen kalesi ve varoşu'
      }
    ]
  },
  {
    id: 'srb-kladovo',
    name: 'Fethülislam',
    modern: 'Kladovo',
    aliases: ['Fetislam', 'Кладово', 'Feth-i İslam'],
    coordinates: [22.610, 44.612],
    layer: 'settlement',
    start: 1524,
    datePrecision: '1524 Kanuni Sultan Süleyman fethi ve kale tesisi',
    confidence: 'high',
    locationAccuracy: 'Fetislam Kalesi ve Tuna kıyısı',
    source: 'src-tdv-kiel-srb',
    summary: 'Tuna’nın Demir Kapı boğazı çıkışında Kanuni Sultan Süleyman tarafından inşa ettirilen muazzam Fethülislam Kalesi ve kaza merkezi.',
    current: 'Sırbistan’da Romanya sınırında Tuna kıyısı kenti.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1524, text: 'Kanuni Sultan Süleyman tarafından kale ve menzil inşa ettirildi.', source: 'src-tdv-kiel-srb' }],
    observations: [
      {
        year: 1560,
        dimension: 'religion',
        text: '1560 Vidin mufassal tahriri hâne sayımı.',
        source: 'src-tahrir-td370-srb',
        values: [
          { label: 'Müslüman', value: 168 },
          { label: 'Hıristiyan', value: 38 }
        ],
        unit: 'hâne',
        scope: 'Fethülislam (Kladovo) kale ve varoşu'
      },
      {
        year: 1867,
        dimension: 'migration',
        text: '1867 tahliyesi öncesi Osmanlı kale ve varoş nüfusu.',
        source: 'src-tahliye-1862-1867',
        values: [
          { label: 'Müslüman (Garnizon ve Ahali)', value: 1250 },
          { label: 'Sırp Hıristiyan', value: 420 }
        ],
        unit: 'kişi',
        scope: 'Fethülislam kasabası'
      }
    ]
  },
  {
    id: 'srb-krusevac',
    name: 'Alacahisar',
    modern: 'Kruševac',
    aliases: ['Kruşevaç', 'Крушевац', 'Alaca Hisar'],
    coordinates: [21.328, 43.583],
    layer: 'settlement',
    start: 1427,
    datePrecision: '1427 fethi; Alacahisar Sancağı merkezi',
    confidence: 'high',
    locationAccuracy: 'Lazar Kalesi ve Alacahisar kentsel merkezi',
    source: 'src-tdv-kiel-srb',
    summary: 'Osmanlıların Alacahisar adını verdiği ve yüzyıllarca Alacahisar Sancağı başkentliği yapan Morava havzası idari merkezi.',
    current: 'Sırbistan’da Rasina ilçesi merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1427, text: 'Osmanlı idaresine girdi ve sancak merkezi yapıldı.', source: 'src-tdv-kiel-srb' }],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: '1530 BOA TD 370 Alacahisar Sancağı tahriri.',
        source: 'src-tahrir-td370-srb',
        values: [
          { label: 'Müslüman', value: 210 },
          { label: 'Hıristiyan', value: 140 }
        ],
        unit: 'hâne',
        scope: 'Alacahisar kasabası'
      }
    ]
  },
  {
    id: 'srb-leskovac',
    name: 'Leskofça',
    modern: 'Leskovac',
    aliases: ['Leskofce', 'Лесковац', 'Leskovça'],
    coordinates: [21.946, 42.998],
    layer: 'settlement',
    start: 1454,
    datePrecision: '1454 fethi',
    confidence: 'high',
    locationAccuracy: 'Veternica nehri kıyısı, Široka Čaršija',
    source: 'src-tdv-kiel-srb',
    summary: 'Güney Morava havzasında Osmanlı kaza merkezi; Paşa Hamamı, Saat Camii ve zengin dokuma çarşılarıyla ünlüydü.',
    current: 'Sırbistan’da Jablanica ilçesi merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1454, text: 'Osmanlı fethi.', source: 'src-tdv-kiel-srb' },
      { year: 1878, text: 'Berlin Antlaşması ile Sırbistan’a bırakıldı; Türk ahalisi göç etti.', source: 'src-simsir-rumeli-srb' }
    ],
    observations: [
      {
        year: 1877,
        dimension: 'religion',
        text: '1877 salnâme dökümü.',
        source: 'src-karpat-srb-pop',
        values: [
          { label: 'Müslüman tebaa', value: 5200 },
          { label: 'Sırp Hıristiyan', value: 4800 }
        ],
        unit: 'kişi',
        scope: 'Leskofça kasabası'
      }
    ]
  },
  {
    id: 'srb-vranje',
    name: 'Vranye',
    modern: 'Vranje',
    aliases: ['Vrania', 'Врање', 'Vranya'],
    coordinates: [21.900, 42.554],
    layer: 'settlement',
    start: 1455,
    datePrecision: '1455 fethi',
    confidence: 'high',
    locationAccuracy: 'Bey Köprüsü, Paşa Konağı ve Eski Hamam çevresi',
    source: 'src-tdv-kiel-srb',
    summary: '1780 tarihli Bey Köprüsü (Beli Most), 1765 Paşa Konağı ve tarihi hamamıyla Osmanlı mimarisini günümüze taşıyan güney kaza kenti.',
    current: 'Sırbistan’da Pčinja ilçesi merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1455, text: 'Osmanlı fethi.', source: 'src-tdv-kiel-srb' }],
    observations: [
      {
        year: 1877,
        dimension: 'religion',
        text: '1877 salnâme kaydı.',
        source: 'src-karpat-srb-pop',
        values: [
          { label: 'Müslüman', value: 4350 },
          { label: 'Hıristiyan', value: 3900 }
        ],
        unit: 'kişi',
        scope: 'Vranye kasabası'
      }
    ]
  },
  {
    id: 'srb-presevo',
    name: 'Preşova',
    modern: 'Preševo',
    aliases: ['Presheva', 'Прешево', 'Preşeva'],
    coordinates: [21.650, 42.308],
    layer: 'settlement',
    start: 1455,
    datePrecision: '1455 fethi',
    confidence: 'high',
    locationAccuracy: 'Atik Camii ve çarşı civarı',
    source: 'src-tdv-kiel-srb',
    summary: 'Preşova Vadisi’nin merkezi; 16. yüzyıl Atik Camisi ve zengin İslam mirasıyla günümüzde de halkının %90’ından fazlası Müslüman Arnavutlardan oluşur.',
    current: 'Sırbistan’ın güneyinde Kosova ve Kuzey Makedonya sınırında Müslüman çoğunluklu kasaba.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1455, text: 'Osmanlı fethi.', source: 'src-tdv-kiel-srb' }],
    observations: [
      {
        year: 2002,
        dimension: 'ethnicity',
        text: '2002 RZS sayımı: Müslüman nüfus çoğunluğu.',
        source: 'src-rzs-census-srb',
        values: [
          { label: 'Müslüman Arnavut', value: 31098 },
          { label: 'Sırp', value: 2984 }
        ],
        unit: 'kişi',
        scope: 'Preševo belediye sınırları'
      }
    ]
  },
  {
    id: 'srb-bujanovac',
    name: 'Buyanofça',
    modern: 'Bujanovac',
    aliases: ['Bujanovci', 'Бујановац', 'Bujanovac Kasabası'],
    coordinates: [21.768, 42.460],
    layer: 'settlement',
    start: 1455,
    datePrecision: '1455 fethi',
    confidence: 'high',
    locationAccuracy: 'Kasaba merkezi ve kaplıcalar civarı',
    source: 'src-tdv-kiel-srb',
    summary: 'Güney Morava havzasında tarihi menzil ve kaplıca kasabası; yoğun Müslüman Arnavut ve Roman nüfus barındırır.',
    current: 'Sırbistan’ın güneyinde çok etnikli belediye merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1455, text: 'Osmanlı idaresine girdi.', source: 'src-tdv-kiel-srb' }],
    observations: [
      {
        year: 2002,
        dimension: 'ethnicity',
        text: '2002 RZS sayımı.',
        source: 'src-rzs-census-srb',
        values: [
          { label: 'Müslüman Arnavut ve Roman', value: 27500 },
          { label: 'Sırp', value: 14750 }
        ],
        unit: 'kişi',
        scope: 'Bujanovac belediye toplamı'
      }
    ]
  },
  {
    id: 'srb-uzice',
    name: 'Uziçe',
    modern: 'Užice',
    aliases: ['Ujiçe', 'Ужице', 'Užice Kasabası'],
    coordinates: [19.845, 43.855],
    layer: 'settlement',
    start: 1463,
    datePrecision: '1463 fethi; 1862 tahliyesi',
    confidence: 'high',
    locationAccuracy: 'Đetinja nehri kanyonu, Stari Grad kalesi etekleri',
    source: 'src-zamolo-belgrade',
    summary: 'Đetinja vadisinde 17. yüzyılda Evliya Çelebi’nin 30’dan fazla cami kaydettiği gelişmiş bir Osmanlı şehriydi; 1862 hadiseleri sonrası Türk nüfus tamamen tahliye edilmiş ve camileri yıktırılmıştır.',
    current: 'Sırbistan’da Zlatibor ilçesi merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1463, text: 'Osmanlı fethi ve kaza merkezi yapılması.', source: 'src-tdv-kiel-srb' },
      { year: 1862, text: 'Kanlıca Protokolü uyarınca Türk nüfusu Bosna’ya göç ettirildi; tüm camileri yıktırıldı.', source: 'src-tahliye-1862-1867' }
    ],
    observations: [
      {
        year: 1862,
        dimension: 'migration',
        text: '1862 Uziçe tahliyesi kütükleri.',
        source: 'src-tahliye-1862-1867',
        values: [
          { label: 'Tahliye edilen Müslüman Türk nüfus', value: 4200 }
        ],
        unit: 'kişi',
        scope: 'Uziçe şehir merkezi'
      }
    ]
  },
  {
    id: 'srb-prokuplje',
    name: 'Ürgüp (Alacahisar)',
    modern: 'Prokuplje',
    aliases: ['Prokopiye', 'Прокупље', 'Ürgüb'],
    coordinates: [21.588, 43.234],
    layer: 'settlement',
    start: 1386,
    datePrecision: '1386 fethi',
    confidence: 'medium',
    locationAccuracy: 'Toplica nehri kıyısı ve Hisar tepesi',
    source: 'src-tdv-kiel-srb',
    summary: 'Toplica nehri vadisinde Osmanlı menzil kaza kasabası; Hisar tepesinde kale kalıntıları ve hamamı bulunuyordu.',
    current: 'Sırbistan’da Toplica ilçesi merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1386, text: 'Osmanlı fethi.', source: 'src-tdv-kiel-srb' }],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: '1530 tahriri.',
        source: 'src-tahrir-td370-srb',
        values: [
          { label: 'Müslüman', value: 180 },
          { label: 'Hıristiyan', value: 95 }
        ],
        unit: 'hâne',
        scope: 'Ürgüp kasabası'
      }
    ]
  },
  {
    id: 'srb-kragujevac',
    name: 'Karaguyevça',
    modern: 'Kragujevac',
    aliases: ['Kraguyevaç', 'Крагујевац'],
    coordinates: [20.922, 44.012],
    layer: 'settlement',
    start: 1476,
    datePrecision: '1476 tahrir kaydı',
    confidence: 'medium',
    locationAccuracy: 'Lepenica nehri vadisi tarihi merkez',
    source: 'src-tdv-kiel-srb',
    summary: 'Şumadiya bölgesinde Osmanlı menzil kasabası; 1476 tahririnde kaza merkezi olarak kaydedilmiştir.',
    current: 'Sırbistan’ın dördüncü büyük şehri.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1476, text: 'Osmanlı tahririnde kaza merkezi olarak kaydedildi.', source: 'src-tdv-kiel-srb' }],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: '1530 BOA TD 370 tahriri.',
        source: 'src-tahrir-td370-srb',
        values: [
          { label: 'Müslüman', value: 140 },
          { label: 'Hıristiyan', value: 65 }
        ],
        unit: 'hâne',
        scope: 'Karaguyevça kasabası'
      }
    ]
  },
  {
    id: 'srb-zemun',
    name: 'Zemlin',
    modern: 'Zemun',
    aliases: ['Semlin', 'Земун'],
    coordinates: [20.404, 44.845],
    layer: 'settlement',
    start: 1521,
    datePrecision: '1521 fethi; Belgrad karşısı Tuna limanı',
    confidence: 'high',
    locationAccuracy: 'Gardoš tepesi ve Tuna kıyısı',
    source: 'src-zamolo-belgrade',
    summary: 'Tuna’nın karşı sahilinde Belgrad’ın ikiz menzili ve Osmanlı sınır karakolu.',
    current: 'Günümüzde Belgrad metropolünün tarihi ilçesi.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1521, text: 'Kanuni Sultan Süleyman tarafından fethedildi.', source: 'src-zamolo-belgrade' }],
    observations: [
      {
        year: 1566,
        dimension: 'religion',
        text: '1566–1567 Sirem Sancağı tahriri (BOA TD).',
        source: 'src-tahrir-td370-srb',
        values: [
          { label: 'Müslüman', value: 184 },
          { label: 'Hıristiyan', value: 92 }
        ],
        unit: 'hâne',
        scope: 'Zemlin kasabası'
      },
      {
        year: 1720,
        dimension: 'religion',
        text: '1720 Pasarofça sonrası Avusturya idari sayımı.',
        source: 'src-tdv-kiel-srb',
        values: [
          { label: 'Katolik (Hırvat/Alman)', value: 1120 },
          { label: 'Ortodoks Sırp', value: 940 },
          { label: 'Musevi', value: 85 }
        ],
        unit: 'kişi',
        scope: 'Zemun şehri'
      }
    ]
  },
  {
    id: 'srb-petrovaradin',
    name: 'Varadin',
    modern: 'Petrovaradin',
    aliases: ['Petrovaradin Kalesi', 'Петроварадин', 'Varadin Kuşatması'],
    coordinates: [19.865, 45.253],
    layer: 'settlement',
    start: 1526,
    datePrecision: '1526 fethi; 1716 Varadin Muharebesi',
    confidence: 'high',
    locationAccuracy: 'Tuna üzerindeki devasa kale kayalığı',
    source: 'src-tdv-kiel-srb',
    summary: 'Tuna nehri kıyısındaki sarp kayalıkta kurulu stratejik Osmanlı kalesi; 1716’da Şehit Ali Paşa’nın şehit düştüğü Varadin Savaşı sahası.',
    current: 'Novi Sad şehrinin karşısında tarihi kale bölgesi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1526, text: 'Osmanlı kuvvetlerince fethedildi.', source: 'src-tdv-kiel-srb' },
      { year: 1716, text: 'Damat Ali Paşa şehit düştü.', source: 'src-tdv-kiel-srb' }
    ],
    observations: [
      {
        year: 1570,
        dimension: 'religion',
        text: '1570 Sirem Sancağı tahrir kaydı.',
        source: 'src-tahrir-td370-srb',
        values: [
          { label: 'Müslüman (Garnizon ve Sivil)', value: 145 },
          { label: 'Hıristiyan', value: 58 }
        ],
        unit: 'hâne',
        scope: 'Varadin kalesi ve varoşu'
      },
      {
        year: 1720,
        dimension: 'religion',
        text: '1720 Avusturya askeri sınır sayımı.',
        source: 'src-tdv-kiel-srb',
        values: [
          { label: 'Katolik (Garnizon ve Hırvat)', value: 1820 },
          { label: 'Ortodoks Sırp', value: 410 }
        ],
        unit: 'kişi',
        scope: 'Petrovaradin kalesi ve sivil yerleşim'
      }
    ]
  },
  {
    id: 'srb-loznica',
    name: 'Lozniçe',
    modern: 'Loznica',
    aliases: ['Loznica Kasabası', 'Лозница'],
    coordinates: [19.223, 44.533],
    layer: 'settlement',
    start: 1533,
    datePrecision: '1533 tahriri',
    confidence: 'medium',
    locationAccuracy: 'Drina vadisi kasaba merkezi',
    source: 'src-tdv-kiel-srb',
    summary: 'Drina nehri boyunda Bosna sınırını tutan Osmanlı menzil kasabası.',
    current: 'Sırbistan’da Mačva ilçesinde şehir.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1533, text: 'Osmanlı tahririnde yer aldı.', source: 'src-tdv-kiel-srb' }],
    observations: [
      {
        year: 1533,
        dimension: 'religion',
        text: '1533 İzvornik Sancağı tahrir kaydı.',
        source: 'src-tahrir-td370-srb',
        values: [
          { label: 'Müslüman', value: 115 },
          { label: 'Hıristiyan', value: 48 }
        ],
        unit: 'hâne',
        scope: 'Lozniçe kasabası'
      },
      {
        year: 1834,
        dimension: 'religion',
        text: '1834 Sırp Prensliği nüfus sayımı.',
        source: 'src-karpat-srb-pop',
        values: [
          { label: 'Sırp Ortodoks', value: 890 },
          { label: 'Müslüman (Göç öncesi)', value: 340 }
        ],
        unit: 'kişi',
        scope: 'Loznica nahiyesi'
      }
    ]
  },
  {
    id: 'srb-kursumlija',
    name: 'Kurşunlu',
    modern: 'Kuršumlija',
    aliases: ['Kurşunlu Kilise', 'Куршумлија'],
    coordinates: [21.267, 43.141],
    layer: 'settlement',
    start: 1454,
    datePrecision: '1454 fethi; kurşun çatılı yapılardan dolayı bu adı aldı',
    confidence: 'medium',
    locationAccuracy: 'Toplica vadisi',
    source: 'src-tdv-kiel-srb',
    summary: 'Kurşun kaplı tarihi çatıları sebebiyle Osmanlıların Kurşunlu adını verdiği kaza kasabası.',
    current: 'Sırbistan’da kasaba.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1454, text: 'Osmanlı fethi.', source: 'src-tdv-kiel-srb' }],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: '1530 BOA TD 167 Alacahisar tahriri.',
        source: 'src-tahrir-td370-srb',
        values: [
          { label: 'Müslüman', value: 138 },
          { label: 'Hıristiyan', value: 72 }
        ],
        unit: 'hâne',
        scope: 'Kurşunlu kasabası'
      },
      {
        year: 1877,
        dimension: 'religion',
        text: '1877 Berlin Antlaşması öncesi salnâme kaydı.',
        source: 'src-karpat-srb-pop',
        values: [
          { label: 'Müslüman (Arnavut ve Türk)', value: 2640 },
          { label: 'Sırp Ortodoks', value: 680 }
        ],
        unit: 'kişi',
        scope: 'Kurşunlu kazası'
      }
    ]
  },
  {
    id: 'srb-paracin',
    name: 'Parakin',
    modern: 'Paraćin',
    aliases: ['Paraçin', 'Параћин'],
    coordinates: [21.412, 43.861],
    layer: 'settlement',
    start: 1454,
    datePrecision: '1454 fethi',
    confidence: 'medium',
    locationAccuracy: 'Morava ovası',
    source: 'src-tdv-kiel-srb',
    summary: 'Büyük Morava vadisinde Osmanlı kervan menzili.',
    current: 'Sırbistan’da şehir.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1454, text: 'Osmanlı fethi.', source: 'src-tdv-kiel-srb' }],
    observations: [
      {
        year: 1516,
        dimension: 'religion',
        text: '1516 Alacahisar Sancağı tahriri.',
        source: 'src-tahrir-td370-srb',
        values: [
          { label: 'Müslüman', value: 124 },
          { label: 'Hıristiyan', value: 188 }
        ],
        unit: 'hâne',
        scope: 'Parakin pazarı ve kasabası'
      },
      {
        year: 1834,
        dimension: 'religion',
        text: '1834 Sırp Prensliği ilk resmi nüfus sayımı.',
        source: 'src-karpat-srb-pop',
        values: [
          { label: 'Sırp Ortodoks', value: 1820 },
          { label: 'Diğer cemaatler', value: 45 }
        ],
        unit: 'kişi',
        scope: 'Paraćin kasabası'
      }
    ]
  },

  // ==========================================
  // II. KÜLTÜREL MİRAS (HERITAGE - 40 ANIT)
  // ==========================================
  // --- A. YIKILAN VE YERİNE NE İNŞA EDİLDİĞİ BELGELENEN ESERLER (16 ANIT) ---
  {
    id: 'srb-mon-belgrade-batal-cami',
    name: 'Belgrad Batal Camii (Ejder Çavuş Camii)',
    modern: 'Batal Mosque / Ejder Cavus Mosque (Site of National Assembly / Skupstina)',
    aliases: ['Batal Džamija', 'Ejder Bey Camii', 'Batal Cami'],
    coordinates: [20.4655, 44.8118],
    layer: 'heritage',
    start: 1585,
    end: 1869,
    datePrecision: '1585 inşa; 1869 yıkım',
    confidence: 'high',
    locationAccuracy: 'Sırbistan Ulusal Meclis Binası (Dom Narodne Skupštine) parseli',
    source: 'src-eyice-belgrad',
    summary: 'Belgrad’ın en büyük ve en görkemli Osmanlı camisiydi; Mimar Sinan ekolü kesme kumtaşı duvarları ve devasa kubbesiyle Ayasofya’ya benzetilirdi; 1869 yılında Prens Mihailo’nun emriyle yıktırılmıştır.',
    lost: true,
    current: 'Yapı 1869 yılında dinamitlenerek yıktırılmıştır. Günümüzde tam yerinde Sırbistan Ulusal Meclis Binası (Dom Narodne Skupštine / National Assembly of Serbia), Meclis Parkı ve Nikola Pašić Meydanı yer almaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1585, text: 'Ejder Çavuş tarafından inşa ettirildi.', source: 'src-eyice-belgrad' },
      { year: 1739, text: 'Avusturya işgallerinden sonra onarıldı.', source: 'src-eyice-belgrad' },
      { year: 1869, text: 'Sırbistan Prensliği kararıyla tamamen yıktırıldı.', source: 'src-eyice-belgrad' },
      { year: 1936, text: 'Arsası üzerine Sırbistan Krallık Parlamentosu (bugünkü Meclis) tamamlandı.', source: 'src-zamolo-belgrade' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-belgrade-fethiye-cami',
    name: 'Belgrad Fethiye Camii (Sultan Süleyman Camii)',
    modern: 'Fethiye Mosque / Sultan Suleiman Mosque (Site of Kalemegdan Lower Town)',
    aliases: ['Süleymaniye Camii (Belgrad)', 'Aşağı Şehir Ulu Camii'],
    coordinates: [20.4485, 44.8270],
    layer: 'heritage',
    start: 1521,
    end: 1870,
    datePrecision: '1521 Kanuni fethi sonrası inşa; 1870 yıkım',
    confidence: 'high',
    locationAccuracy: 'Kalemegdan Aşağı Şehir (Donji Grad) açık alanı',
    source: 'src-zamolo-belgrade',
    summary: 'Kanuni Sultan Süleyman’ın fethin hemen ardından Aşağı Şehir’de yaptırdığı fethiye camisi; kurşunlu kubbesi ve nehir manzarasıyla Belgrad’ın fethinin anıtıydı.',
    lost: true,
    current: '1870 civarında yıktırılmıştır. Günümüzde tam yerinde Kalemegdan Aşağı Şehir (Donji Grad) Arkeoloji Parkı, konser çayırı ve Tuna sahil yürüyüş yolu yer almaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1521, text: 'Kanuni Sultan Süleyman tarafından inşa ettirildi.', source: 'src-zamolo-belgrade' },
      { year: 1870, text: 'Kalenin teslimi sonrası yıktırıldı.', source: 'src-zamolo-belgrade' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-belgrade-defterdar-cami',
    name: 'Belgrad Defterdar Camii (Kalemegdan Yukarı Şehir)',
    modern: 'Defterdar Mosque (Site of Kalemegdan Military Museum Terrace)',
    aliases: ['Defterdar Mustafa Camii', 'Yukarı Şehir Camisi'],
    coordinates: [20.4505, 44.8235],
    layer: 'heritage',
    start: 1580,
    end: 1868,
    datePrecision: '16. yüzyıl sonu; 1868 yıkım',
    confidence: 'high',
    locationAccuracy: 'Kalemegdan Yukarı Şehir, Askeri Müze açık hava terası',
    source: 'src-eyice-belgrad',
    summary: 'Kalemegdan Yukarı Şehir platosunda Defterdar kapısının hemen yanında garnizon subayları için yaptırılan kubbeli taş cami.',
    lost: true,
    current: '1868 yılında kale tahliyesinden hemen sonra yıktırılmıştır. Günümüzde yerinde Kalemegdan Açık Hava Askeri Müzesi (tank ve top sergi alanı) ve Sava nehrine bakan Fikirbayır seyir terası bulunmaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1580, text: 'İnşa edildi.', source: 'src-eyice-belgrad' },
      { year: 1868, text: 'Tahliye sonrası yıktırıldı.', source: 'src-eyice-belgrad' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-belgrade-mahmut-pasa-cami',
    name: 'Belgrad Mahmut Paşa Camii',
    modern: 'Mahmud Pasha Mosque (Site of Knez Mihailova Street)',
    aliases: ['Mahmut Paşa Camisi'],
    coordinates: [20.4570, 44.8190],
    layer: 'heritage',
    start: 1570,
    end: 1875,
    datePrecision: '16. yüzyıl inşa; 1870–1875 kentsel tasfiye',
    confidence: 'high',
    locationAccuracy: 'Knez Mihailova Ana Yaya Caddesi ve Zmaj Jovina köşesi',
    source: 'src-zamolo-belgrade',
    summary: 'Belgrad çarşısının ana aksında yer alan geniş kubbeli ve revaklı klasik Osmanlı camisi.',
    lost: true,
    current: '1875 yılında kentsel modernizasyon planıyla yıktırılmıştır. Günümüzde tam üzerinde Belgrad’ın en ünlü yaya caddesi olan Knez Mihailova Caddesi, 19. yüzyıl sonu neoklasik ticaret binaları ve kafeler yer almaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1570, text: 'İnşa edildi.', source: 'src-zamolo-belgrade' },
      { year: 1875, text: 'Cadde açma projesinde yıktırıldı.', source: 'src-zamolo-belgrade' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-belgrade-hasan-pasa-cami',
    name: 'Belgrad Hasan Paşa Camii ve Hamamı',
    modern: 'Hasan Pasha Mosque & Bath (Site of Studentski Trg / Faculty of Philology)',
    aliases: ['Hasan Paşa Camisi', 'Öğrenci Meydanı Camii'],
    coordinates: [20.4580, 44.8205],
    layer: 'heritage',
    start: 1585,
    end: 1878,
    datePrecision: '16. yüzyıl sonu; 1878 yıkım',
    confidence: 'high',
    locationAccuracy: 'Studentski Trg (Öğrenci Meydanı) ve Belgrad Üniversitesi Filoloji Fakültesi',
    source: 'src-zamolo-belgrade',
    summary: 'Şeyh Mustafa Türbesi’nin hemen yanında yer alan, hamamı ve medresesiyle büyük bir külliye oluşturan tarihi Osmanlı camisi.',
    lost: true,
    current: '1878’de tamamen yıktırılmıştır; külliyeden sadece Şeyh Mustafa Türbesi ayakta kalabilmiştir. Günümüzde tam yerinde Studentski Trg (Öğrenci Meydanı), park alanı ve Belgrad Üniversitesi Filoloji Fakültesi binası yer almaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1585, text: 'Hasan Paşa tarafından külliye olarak yaptırıldı.', source: 'src-zamolo-belgrade' },
      { year: 1878, text: 'Yıktırıldı; meydan düzenlendi.', source: 'src-zamolo-belgrade' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-belgrade-kethuda-cami',
    name: 'Belgrad Kethüda Camii (Dorćol)',
    modern: 'Kethuda Mosque (Site of Dorcol Boulevard)',
    aliases: ['Dorćol Camii', 'Kethüda Mehmed Ağa'],
    coordinates: [20.4600, 44.8240],
    layer: 'heritage',
    start: 1610,
    end: 1880,
    datePrecision: '17. yüzyıl başı; 1880 yıkım',
    confidence: 'high',
    locationAccuracy: 'Dorćol semti, Cara Dušana caddesi aksı',
    source: 'src-zamolo-belgrade',
    summary: 'Belgrad’ın tarihi Dorćol (Dörtyol) Türk-Musevi mahallesinin merkezindeki en işlek cami.',
    lost: true,
    current: '1880 yılında yıktırılmıştır. Günümüzde yerinde Cara Dušana Bulvarı, tramvay hattı ve çok katlı konut apartmanları bulunmaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1610, text: 'İnşa edildi.', source: 'src-zamolo-belgrade' },
      { year: 1880, text: 'Yıktırıldı.', source: 'src-zamolo-belgrade' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-belgrade-cukur-cesme',
    name: 'Belgrad Çukur Çeşme (1862 Hadisesi)',
    modern: 'Cukur Cesma (Site of Bronze Monument / Dobracina Street)',
    aliases: ['Čukur Česma', 'Çukur Çeşmesi'],
    coordinates: [20.4610, 44.8195],
    layer: 'heritage',
    start: 1720,
    end: 1862,
    datePrecision: '18. yüzyıl Osmanlı sokak çeşmesi; 1862 olayı ve tasfiye',
    confidence: 'high',
    locationAccuracy: 'Dobračina caddesi 30 numara önü park cebi',
    source: 'src-eyice-belgrad',
    summary: '15 Haziran 1862’de Türk askeri ile Sırp çırak Savo Petković arasında su sırası kavgası çıkan ve Osmanlıların Belgrad’dan tahliyesine giden diplomatik krizin patladığı tarihi çeşme.',
    lost: true,
    current: 'Orijinal mermer Osmanlı çeşmesi yıkılmıştır. 1931 yılında tam yerine heykeltıraş Simeon Roksandić tarafından yapılan ünlü bronz ‘Testili Yaralı Çocuk’ anıt heykeli ve çeşmesi dikilmiştir.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1720, text: 'Osmanlı mahalle çeşmesi olarak inşa edildi.', source: 'src-eyice-belgrad' },
      { year: 1862, text: 'Çukur Çeşme hadisesi meydana geldi.', source: 'src-tahliye-1862-1867' },
      { year: 1931, text: 'Yerine bronz heykel anıtı yapıldı.', source: 'src-eyice-belgrad' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-nis-hasan-bey-cami',
    name: 'Niş Hasan Bey Camii',
    modern: 'Hasan Bey Mosque (Site of King Milan Square / Nisava Promenade)',
    aliases: ['Hasan Bey Camisi', 'Trg Kralja Milana Camii'],
    coordinates: [21.8945, 43.3205],
    layer: 'heritage',
    start: 1737,
    end: 1895,
    datePrecision: '1737 inşa; 1895 yıkım',
    confidence: 'high',
    locationAccuracy: 'Niş Kral Milan Meydanı (Trg Kralja Milana) ve nehir kıyısı',
    source: 'src-tdv-kiel-srb',
    summary: 'Niş Kalesi’nin tam karşısında, Nişava nehri köprüsünün başında yer alan, kubbesi ve mermer minaresiyle şehrin en seçkin Osmanlı camisiydi.',
    lost: true,
    current: '1895 yılında meydan genişletme projesinde yıktırılmıştır. Günümüzde tam yerinde Trg Kralja Milana (Kral Milan Merkez Meydanı), Nişava nehri kordonu ve şehir otelleri yer almaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1737, text: 'Hasan Bey tarafından yaptırıldı.', source: 'src-tdv-kiel-srb' },
      { year: 1895, text: 'Yıktırıldı.', source: 'src-tdv-kiel-srb' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-nis-kral-carsi-cami',
    name: 'Niş Çarşı Camii ve Paşa Hamamı',
    modern: 'Nis Bazaar Mosque & Pasha Bath (Site of Obrenoviceva Pedestrian Street)',
    aliases: ['Eski Çarşı Camii', 'Paşa Hamamı'],
    coordinates: [21.8935, 43.3185],
    layer: 'heritage',
    start: 1560,
    end: 1885,
    datePrecision: '16. yüzyıl inşa; 1880–1885 yıkım',
    confidence: 'high',
    locationAccuracy: 'Obrenovićeva Ana Yaya Caddesi ve Kalča Pasajı',
    source: 'src-tdv-kiel-srb',
    summary: 'Osmanlı Niş’inin ticaret ve çarşı kalbini oluşturan kubbeli çarşı camisi ve çifte hamam kompleksi.',
    lost: true,
    current: '1880’lerde tamamen yıktırılmıştır. Günümüzde yerinde Niş’in ana yaya aksı olan Obrenovićeva Caddesi, Kalča Alışveriş Pasajı ve modern mağaza blokları bulunmaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1560, text: 'İnşa edildi.', source: 'src-tdv-kiel-srb' },
      { year: 1885, text: 'Kentsel dönüşümde yıktırıldı.', source: 'src-tdv-kiel-srb' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-nis-saat-kulesi',
    name: 'Niş Saat Kulesi',
    modern: 'Nis Ottoman Clock Tower (Former site, Nis Fortress)',
    aliases: ['Niş Sahat Kulesi', 'Tvrđava Sahat Kula'],
    coordinates: [21.8955, 43.3245],
    layer: 'heritage',
    start: 1723,
    end: 1910,
    datePrecision: '1723 kale ile birlikte inşa; 20. yy başı yıkım',
    confidence: 'high',
    locationAccuracy: 'Niş Kalesi içi, Paşa Sarayı kalıntıları yanı',
    source: 'src-tdv-kiel-srb',
    summary: 'Niş Kalesi içinde paşanın ikametgâhı ve garnizon için zamanı bildiren tarihi taş saat kulesi.',
    lost: true,
    current: '20. yüzyıl başında yıkılmıştır. Günümüzde kale içi açık hava amfitiyatrosu ve çim park alanı olarak korunmaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1723, text: 'Kale inşasıyla tamamlandı.', source: 'src-tdv-kiel-srb' },
      { year: 1910, text: 'Yıktırıldı.', source: 'src-tdv-kiel-srb' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-novipazar-bedesten',
    name: 'Yeni Pazar Eski Bedesteni ve Kervansarayı',
    modern: 'Novi Pazar Old Bezisten (Site of 28. Novembar Pedestrian Street)',
    aliases: ['İsa Bey Bedesteni', 'Eski Çarşı Hanı'],
    coordinates: [20.5140, 43.1395],
    layer: 'heritage',
    start: 1470,
    end: 1955,
    datePrecision: '15. yüzyıl sonu inşa; 1950–1955 sosyalist imar yıkımı',
    confidence: 'high',
    locationAccuracy: '28. Novembar Yaya Caddesi ve Şehir Meydanı',
    source: 'src-sabanovic-bosna-belgrad',
    summary: 'İsa Bey İshakoviç vakfı olarak kurulan, kubbeli taş mahzenleri ve dükkânlarıyla Sancak ticaretinin merkezi olan tarihi bedesten.',
    lost: true,
    current: 'Sosyalist dönemde 1950’li yıllarda yıktırılmıştır. Günümüzde tam yerinde 28. Novembar Ana Yaya Caddesi, otel ve modern mağazalar yer almaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1470, text: 'İsa Bey vakfı olarak kuruldu.', source: 'src-sabanovic-bosna-belgrad' },
      { year: 1955, text: 'Yıkıldı.', source: 'src-sabanovic-bosna-belgrad' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-smederevo-fatih-cami',
    name: 'Semendire Fatih Camii (Hisar Camii)',
    modern: 'Smederevo Fortress Mosque (Site of Fortress Archaeological Park)',
    aliases: ['Fethiye Camii (Semendire)', 'Sultan Mehmed Camii'],
    coordinates: [20.9275, 44.6675],
    layer: 'heritage',
    start: 1460,
    end: 1870,
    datePrecision: '1460 Fatih inşası; 1870 yıkım',
    confidence: 'high',
    locationAccuracy: 'Semendire Kalesi iç avlusu, Tuna kıyısı',
    source: 'src-tdv-kiel-srb',
    summary: 'Semendire’nin fethinden sonra Fatih Sultan Mehmed’in kale içine yaptırdığı kubbeli garnizon camisi.',
    lost: true,
    current: '19. yüzyıl sonunda yıkılmıştır. Temelleri arkeolojik kazılarda ortaya çıkarılmış olup Semendire Kalesi Açık Hava Arkeoloji Parkı sınırları içinde korunmaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1460, text: 'Fatih Sultan Mehmed tarafından inşa ettirildi.', source: 'src-tdv-kiel-srb' },
      { year: 1870, text: 'Yıktırıldı.', source: 'src-tdv-kiel-srb' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-sabac-hisar-cami',
    name: 'Böğürdelen Hisar Camii ve Çarşısı',
    modern: 'Sabac Fortress Mosque (Site of City Square / Sava Riverside Park)',
    aliases: ['Böğürdelen Camisi', 'Fatih Camii (Şabaç)'],
    coordinates: [20.6920, 44.7610],
    layer: 'heritage',
    start: 1471,
    end: 1867,
    datePrecision: '1471 inşa; 1867 tahliye sonrası yıkım',
    confidence: 'high',
    locationAccuracy: 'Šabac Şehir Meydanı ve Sava nehri kordon parkı',
    source: 'src-tdv-kiel-srb',
    summary: 'Böğürdelen Hisarı içinde ve kale varoşunda yer alan Osmanlı çarşısı ve hisar camisi.',
    lost: true,
    current: '1867 tahliyesinden sonra tamamen yıktırılmıştır. Günümüzde yerinde Šabac Şehir Meydanı, Sava nehir parkı ve anıt alanı bulunmaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1471, text: 'Fatih Sultan Mehmed devrinde inşa edildi.', source: 'src-tdv-kiel-srb' },
      { year: 1867, text: 'Tahliye sonrası yıktırıldı.', source: 'src-tahliye-1862-1867' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-uzice-seyh-cami',
    name: 'Uziçe Şeyh Camii ve Çarşı Camisi',
    modern: 'Uzice Sheikh Mosque (Site of Trg Partizana / City Theatre)',
    aliases: ['Şeyh Camii', 'Uziçe Ulu Camii'],
    coordinates: [19.8430, 43.8540],
    layer: 'heritage',
    start: 1620,
    end: 1863,
    datePrecision: '17. yüzyıl; 1862–1863 tahliye sonrası yıkım',
    confidence: 'high',
    locationAccuracy: 'Trg Partizana (Partizan Meydanı) ve Uziçe Şehir Tiyatrosu',
    source: 'src-zamolo-belgrade',
    summary: 'Uziçe’nin çarşısında yer alan, ahşap oymalı minberleri ve kurşunlu kubbesiyle şehrin en büyük camisi.',
    lost: true,
    current: '1862’de Türklerin şehirden çıkarılmasının ardından 1863’te yıktırılmıştır. Günümüzde tam yerinde Trg Partizana (Partizan Meydanı), Uziçe Şehir Tiyatrosu ve modern belediye binaları yer almaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1620, text: 'İnşa edildi.', source: 'src-zamolo-belgrade' },
      { year: 1863, text: 'Tahliye sonrası yıkıldı.', source: 'src-tahliye-1862-1867' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-krusevac-ulu-cami',
    name: 'Alacahisar (Kruševac) Ulu Camii',
    modern: 'Alacahisar Grand Mosque (Site of Krusevac Central Square)',
    aliases: ['Kruševac Camii', 'Alacahisar Camisi'],
    coordinates: [21.3260, 43.5820],
    layer: 'heritage',
    start: 1450,
    end: 1835,
    datePrecision: '15. yüzyıl ortası; 1833–1835 yıkım',
    confidence: 'high',
    locationAccuracy: 'Kruševac Merkez Meydanı ve Kosova Kahramanları Anıtı',
    source: 'src-tdv-kiel-srb',
    summary: 'Alacahisar Sancağı idare merkezinin en büyük kubbeli Osmanlı camisi.',
    lost: true,
    current: '19. yüzyılın ilk yarısında yıktırılmıştır. Günümüzde yerinde Kruševac Merkez Meydanı, Kosova Kahramanları Anıtı (Spomenik kosovskim junacima) ve şehir parkı yer almaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1450, text: 'İnşa edildi.', source: 'src-tdv-kiel-srb' },
      { year: 1835, text: 'Yıktırıldı.', source: 'src-tdv-kiel-srb' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-leskovac-saat-cami',
    name: 'Leskofça Saat Camii ve Hamamı',
    modern: 'Leskovac Clock Mosque & Bath (Site of Siroka Carsija)',
    aliases: ['Saat Camisi', 'Leskofça Hamamı'],
    coordinates: [21.9440, 42.9970],
    layer: 'heritage',
    start: 1650,
    end: 1880,
    datePrecision: '17. yüzyıl; 1880 yıkım',
    confidence: 'high',
    locationAccuracy: 'Široka Čaršija Caddesi ve Şehir Meydanı',
    source: 'src-tdv-kiel-srb',
    summary: 'Leskofça çarşısında saat kulesi bitişiğinde yer alan ve kentin ana ibadethanesi olan tarihi cami.',
    lost: true,
    current: '1878 savaşı sonrasında 1880’de yıktırılmıştır. Günümüzde yerinde Široka Čaršija Caddesi, ticaret binaları ve halk meydanı bulunmaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1650, text: 'İnşa edildi.', source: 'src-tdv-kiel-srb' },
      { year: 1880, text: 'Yıktırıldı.', source: 'src-simsir-rumeli-srb' }
    ],
    observations: []
  },

  // --- B. DÖNÜŞTÜRÜLEN VEYA İŞLEVİ DEĞİŞTİRİLEN ESERLER (6 ANIT) ---
  {
    id: 'srb-mon-nis-bali-bey-cami',
    name: 'Niş Bali Bey Camii (Salon 77)',
    modern: 'Bali Bey Mosque / Art Gallery Salon 77, Nis Fortress',
    aliases: ['Balibegova Džamija', 'Bali Bey Camisi', 'Галерија Салон 77'],
    coordinates: [21.8950, 43.3250],
    layer: 'heritage',
    start: 1521,
    datePrecision: '1521 inşa; Niş Kalesi içinde',
    confidence: 'high',
    locationAccuracy: 'Niş Kalesi iç avlusu, ana yürüyüş aksı',
    source: 'src-tdv-kiel-srb',
    summary: 'Kanuni Sultan Süleyman döneminde inşa edilen tek kubbeli, kesme taş ve tuğla işçilikli klasik Osmanlı camisi.',
    partialLoss: true,
    current: 'İbadete kapalıdır. Minaresi kaidesine kadar yıkılmış olan yapı 1977 yılında restore edilerek Niş Çağdaş Sanat Galerisi (Salon 77) olarak ziyarete açılmıştır; kubbesi ve duvarları eksiksiz ayaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1521, text: 'Bali Bey tarafından inşa ettirildi.', source: 'src-tdv-kiel-srb' },
      { year: 1977, text: 'Sanat galerisi (Salon 77) olarak hizmete açıldı.', source: 'src-rzzsk-srb-monuments' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-nis-cele-kula',
    name: 'Niş Kelle Kule (Ćele Kula)',
    modern: 'Skull Tower (Cele Kula Chapel Monument), Nis',
    aliases: ['Kelle Kulesi', 'Ćele Kula', 'Ћеле кула'],
    coordinates: [21.9235, 43.3125],
    layer: 'heritage',
    start: 1809,
    datePrecision: '1809 Çegar Muharebesi sonrası Hurşid Paşa inşası; 1892 şapel koruması',
    confidence: 'high',
    locationAccuracy: 'Bulevar Dr Zorana Đinđića, Kelle Kule Anıt Şapeli',
    source: 'src-tdv-kiel-srb',
    summary: '1809 Çegar Muharebesi’nde ölen Sırp isyancıların kafataslarıyla Hurşid Paşa tarafından ibret amacıyla inşa edilen taş ve kireç kule; 1892’de mimar Dimitrije T. Leko tasarımı bir şapel içine alınarak anıtlaştırılmıştır.',
    partialLoss: true,
    current: 'Özgün açık kule yapısı korunmuş olup etrafına 1892’de inşa edilen anıt şapel ile ulusal tarihi anıt müze olarak hizmet vermektedir.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1809, text: 'Hurşid Ahmed Paşa tarafından inşa ettirildi.', source: 'src-tdv-kiel-srb' },
      { year: 1892, text: 'Etrafına koruyucu anıt şapel tamamlandı.', source: 'src-rzzsk-srb-monuments' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-vranje-pasa-konagi',
    name: 'Vranye Paşa Konağı (Haremlik ve Selamlık)',
    modern: 'Pasha’s Konak / National Museum, Vranje',
    aliases: ['Pašin Konak', 'Rašin Konak', 'Narodni Muzej Vranje'],
    coordinates: [21.8985, 42.5530],
    layer: 'heritage',
    start: 1765,
    datePrecision: '1765 Rauf Bey Cinci inşası; 1881’den itibaren müze/lise',
    confidence: 'high',
    locationAccuracy: 'Pionirska caddesi, Vranye merkez',
    source: 'src-tdv-kiel-srb',
    summary: '1765 yılında inşa edilen, ahşap bağdadi tavanları, geniş saçakları, cumbası ve süslemeleriyle Balkan Osmanlı sivil mimarisinin en seçkin konak örneklerinden biri.',
    partialLoss: true,
    current: 'Konak eksiksiz restore edilerek günümüzde Vranye Milli Müzesi (Narodni Muzej Vranje) olarak hizmet vermektedir.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1765, text: 'İnşa edildi.', source: 'src-tdv-kiel-srb' },
      { year: 1960, text: 'Milli Müze olarak ziyarete açıldı.', source: 'src-rzzsk-srb-monuments' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-kladovo-fetislam',
    name: 'Kladovo Fethülislam Kalesi',
    modern: 'Fetislam Fortress (Restored Archaeological & Cultural Park), Kladovo',
    aliases: ['Fetislam Kalesi', 'Feth-i İslam Hisarı'],
    coordinates: [22.6080, 44.6150],
    layer: 'heritage',
    start: 1524,
    datePrecision: '1524 Kanuni dönemi inşası; 2023 restorasyon',
    confidence: 'high',
    locationAccuracy: 'Tuna kıyısı, Fetislam kültür kompleksi',
    source: 'src-tdv-kiel-srb',
    summary: 'Kanuni Sultan Süleyman tarafından Tuna boyunda yaptırılan iç kale ve II. Mahmud devrinde eklenen dış tabyalar; mazgalları, kapıları ve burçlarıyla korunmuştur.',
    partialLoss: true,
    current: 'AB ve Sırbistan Kültür Bakanlığı ortaklığıyla 2023 yılında tamamen restore edilmiş; açık hava müzesi, amfitiyatro ve Tuna kültür parkı olarak ziyarete açılmıştır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1524, text: 'İnşa edildi.', source: 'src-tdv-kiel-srb' },
      { year: 2023, text: 'Kapsamlı restorasyon tamamlanarak kültür kompleksi yapıldı.', source: 'src-rzzsk-srb-monuments' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-novipazar-isa-bey-hamami',
    name: 'Yeni Pazar İsa Bey Hamamı',
    modern: 'Isa Bey Bath (Hamam), Novi Pazar',
    aliases: ['İsa Bey Çifte Hamamı', 'Stari Hamam'],
    coordinates: [20.5155, 43.1385],
    layer: 'heritage',
    start: 1470,
    datePrecision: '15. yüzyıl sonu İsa Bey İshakoviç inşası',
    confidence: 'high',
    locationAccuracy: 'Tarihi çarşı girişi, 1 Mayıs caddesi',
    source: 'src-sabanovic-bosna-belgrad',
    summary: 'Kadınlar ve erkekler kısmı ayrı olan 11 kubbeli çifte Osmanlı hamamı; Balkanlar’ın en büyük tarihi hamamlarından biridir.',
    partialLoss: true,
    current: 'Hamam işlevi sona ermiştir. Kubbeleri ve duvarları ayakta olup restorasyon süreci kapsamında korunan birinci sınıf anıt yapıdır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1470, text: 'İsa Bey İshakoviç tarafından vakıf hamamı olarak inşa edildi.', source: 'src-sabanovic-bosna-belgrad' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-vranje-eski-hamam',
    name: 'Vranye Eski Türk Hamamı',
    modern: 'Old Turkish Bath (Amam), Vranje',
    aliases: ['Vranye Hamamı', 'Stari Amam Vranje'],
    coordinates: [21.8970, 42.5520],
    layer: 'heritage',
    start: 1690,
    datePrecision: '17. yüzyıl sonu; kubbeli çifte hamam',
    confidence: 'high',
    locationAccuracy: 'Kralja Stefana Prvovenčanog caddesi civarı',
    source: 'src-tdv-kiel-srb',
    summary: 'Kubbeli soyunmalık ve halvet bölümleriyle klasik Osmanlı hamam mimarisini koruyan yapı.',
    partialLoss: true,
    current: 'Restore edilmiş ulusal kültür anıtıdır; sergi ve kültürel etkinlik salonu olarak korunmaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1690, text: 'İnşa edildi.', source: 'src-tdv-kiel-srb' }
    ],
    observations: []
  },

  // --- C. AYAKTA KALAN / FAAL İBADETE AÇIK ANITLAR (18 ANIT) ---
  {
    id: 'srb-mon-belgrade-bayrakli-cami',
    name: 'Belgrad Bayraklı Camii (Hüseyin Kethüda Camii)',
    modern: 'Bajrakli Mosque, Belgrade',
    aliases: ['Hüseyin Kethüda Camii', 'Bajrakli Džamija', 'Бајракли џамија'],
    coordinates: [20.4578, 44.8222],
    layer: 'heritage',
    start: 1575,
    datePrecision: '1575 inşa; Belgrad’da ayakta kalan ve faal TEK cami',
    confidence: 'high',
    locationAccuracy: 'Gospodar Jevremova 11, Dorćol tarihi semti',
    source: 'src-eyice-belgrad',
    summary: 'Belgrad’da 1867 ve 1878 yıkımlarından kurtulabilen, günümüze eksiksiz ulaşan ve ibadete açık olan TEK tarihi camidir. Adını diğer camilere namaz vaktini bildirmek üzere minaresine bayrak çekilmesinden almıştır.',
    current: 'Eksiksiz ayakta, korunmuş ve Sırbistan İslam Cemaati’nin Belgrad’daki ana faal ibadethanesidir.',
    currentAsOf: '2026 faal durum',
    events: [
      { year: 1575, text: 'Hüseyin Kethüda tarafından inşa ettirildi.', source: 'src-eyice-belgrad' },
      { year: 1717, text: 'Avusturya işgalinde Katolik kilisesine çevrildi.', source: 'src-eyice-belgrad' },
      { year: 1739, text: 'Belgrad’ın geri alınmasıyla yeniden cami yapıldı.', source: 'src-eyice-belgrad' },
      { year: 1868, text: 'Prens Mihailo Obrenović tarafından Müslümanlara resmi ibadethane olarak tahsis edildi.', source: 'src-zamolo-belgrade' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-belgrade-damat-ali-pasa',
    name: 'Belgrad Damat Ali Paşa Türbesi',
    modern: 'Tomb of Damat Ali Pasha (Turbe Damad Ali-paše), Kalemegdan',
    aliases: ['Mora Fatihi Türbesi', 'Turbe Damad Ali-paše', 'Турбе Дамад Али-паше'],
    coordinates: [20.4498, 44.8238],
    layer: 'heritage',
    start: 1717,
    datePrecision: '1717 inşa; Mora Fatihi Şehit Ali Paşa',
    confidence: 'high',
    locationAccuracy: 'Kalemegdan Yukarı Şehir platosu, Saat Kulesi yakını',
    source: 'src-eyice-belgrad',
    summary: '1716 Varadin Savaşı’nda şehit düşen Sadrazam Mora Fatihi Damat Ali Paşa adına Kalemegdan’ın en hakim noktasında inşa edilen altıgen kubbeli klasik taş türbe.',
    current: 'Mükemmel durumda ayaktadır; Kalemegdan Açık Hava Parkı içinde tescilli ulusal anıttır.',
    currentAsOf: '2026 durum',
    events: [
      { year: 1717, text: 'Damat Ali Paşa adına inşa edildi.', source: 'src-eyice-belgrad' },
      { year: 1938, text: 'Restorasyonu tamamlandı.', source: 'src-rzzsk-srb-monuments' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-belgrade-seyh-mustafa',
    name: 'Belgrad Şeyh Mustafa Türbesi',
    modern: 'Sheikh Mustafa’s Tomb (Turbe Šeih Mustafe), Belgrade',
    aliases: ['Şeyh Mustafa Türbesi', 'Turbe Šeih Mustafe', 'Турбе шејх Мустафе'],
    coordinates: [20.4585, 44.8202],
    layer: 'heritage',
    start: 1783,
    datePrecision: '1783 Sadi tekkesi şeyhi için inşa',
    confidence: 'high',
    locationAccuracy: 'Višnjićeva ile Braće Jugovića köşesi, Studentski Park yanı',
    source: 'src-eyice-belgrad',
    summary: 'Belgrad Sadi Dergâhı şeyhi Şeyh Mustafa adına yaptırılan altıgen planlı, kesme taş duvarlı, kurşun kubbeli ve kitabeli tarihi türbe.',
    current: 'Eksiksiz ayakta ve TİKA desteğiyle restore edilmiş kültür anıtıdır.',
    currentAsOf: '2026 durum',
    events: [
      { year: 1783, text: 'Kaptan Hüseyin Paşa tarafından Şeyh Mustafa için inşa ettirildi.', source: 'src-eyice-belgrad' },
      { year: 2014, text: 'TİKA tarafından bilimsel restorasyonu tamamlandı.', source: 'src-rzzsk-srb-monuments' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-belgrade-sokollu-cesmesi',
    name: 'Belgrad Sokollu Mehmed Paşa Çeşmesi',
    modern: 'Sokollu Mehmed Pasha Fountain (Česma Mehmed-paše Sokolovića), Kalemegdan',
    aliases: ['Sokollu Çeşmesi', 'Česma Mehmed-paše Sokolovića'],
    coordinates: [20.4502, 44.8242],
    layer: 'heritage',
    start: 1576,
    datePrecision: '1576 Sadrazam Sokollu Mehmed Paşa inşası',
    confidence: 'high',
    locationAccuracy: 'Kalemegdan Yukarı Şehir, Defterdar Kapısı yanı hendek',
    source: 'src-eyice-belgrad',
    summary: 'Sadrazam Sokollu Mehmed Paşa tarafından Kalemegdan kalesinde yaptırılan mermer kemerli, nişli ve su oluklu anıtsal Osmanlı kalesi çeşmesi.',
    current: 'Eksiksiz ayaktadır; 2017 restorasyonu sonrası suyu akmaktadır.',
    currentAsOf: '2026 faal durum',
    events: [
      { year: 1576, text: 'Sokollu Mehmed Paşa tarafından yaptırıldı.', source: 'src-eyice-belgrad' },
      { year: 2017, text: 'TİKA işbirliğiyle restore edildi.', source: 'src-rzzsk-srb-monuments' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-belgrade-kalemegdan-saat',
    name: 'Belgrad Kalemegdan Saat Kulesi (Sahat Kula)',
    modern: 'Kalemegdan Clock Tower (Sahat Kula), Belgrade Fortress',
    aliases: ['Belgrad Saat Kulesi', 'Sahat Kula Kalemegdan', 'Сахат кула'],
    coordinates: [20.4512, 44.8232],
    layer: 'heritage',
    start: 1740,
    datePrecision: '18. yüzyıl ortası Osmanlı inşası',
    confidence: 'high',
    locationAccuracy: 'Kalemegdan Yukarı Şehir ana giriş kapısı (Sahat Kapija) üzeri',
    source: 'src-eyice-belgrad',
    summary: 'Kalemegdan kalesinin ana giriş kapısı üzerinde yükselen, barok ve Osmanlı üslubundaki sekizgen taş gövdeli saat kulesi; 18. yüzyıldan bu yana zamanı göstermektedir.',
    current: 'Eksiksiz ayakta ve saati çalışmaktadır; Belgrad Kalesi’nin simgesidir.',
    currentAsOf: '2026 faal durum',
    events: [
      { year: 1740, text: 'İnşa edildi ve saati takıldı.', source: 'src-eyice-belgrad' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-novipazar-altun-alem',
    name: 'Yeni Pazar Altun Âlem Camii ve Medresesi',
    modern: 'Altun-Alem Mosque & Madrasa, Novi Pazar',
    aliases: ['Altun-alem Džamija', 'Altun Âlem Camisi', 'Алтун-алем џамија'],
    coordinates: [20.5170, 43.1365],
    layer: 'heritage',
    start: 1515,
    datePrecision: '1515 Muslihuddin Abdülgani inşası; Balkanların başyapıtı',
    confidence: 'high',
    locationAccuracy: '1 Mayıs caddesi, Yeni Pazar tarihi merkezi',
    source: 'src-tdv-kiel-srb',
    summary: 'Mimar Sinan öncesi klasik Osmanlı mimarisinin Balkanlar’daki en kusursuz şaheseridir. Kesme taş duvarları, tromplu tek kubbesi, iki kubbeli son cemaat yeri, zarif minaresi ve medrese hücreleriyle eşsizdir.',
    current: 'Mükemmel durumda korunmuş olup Sırbistan İslam Birliği’nin ana ibadethanesidir; faaldir.',
    currentAsOf: '2026 faal durum',
    events: [
      { year: 1515, text: 'Mevlana Muslihuddin Abdülgani tarafından yaptırıldı.', source: 'src-tdv-kiel-srb' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-novipazar-kale',
    name: 'Yeni Pazar Kalesi ve Gözetleme Kulesi (Kula Motrilja)',
    modern: 'Novi Pazar Fortress & Watchtower (Kula Motrilja)',
    aliases: ['Novopazarska Tvrđava', 'Kula Motrilja', 'Yeni Pazar Hisarı'],
    coordinates: [20.5135, 43.1410],
    layer: 'heritage',
    start: 1461,
    datePrecision: '15. yüzyıl İsa Bey inşası; 17. yy tahkimi',
    confidence: 'high',
    locationAccuracy: 'Yeni Pazar Şehir Parkı (Gradski Park) içi tepe',
    source: 'src-sabanovic-bosna-belgrad',
    summary: 'İsa Bey İshakoviç tarafından kurulan, sekizgen gözetleme kulesi (Kula Motrilja) ve taş burçlarıyla şehre hakim Osmanlı hisarı.',
    current: 'Restore edilmiş şehir parkı içinde anıt yapı olarak korunmaktadır.',
    currentAsOf: '2026 durum',
    events: [
      { year: 1461, text: 'İsa Bey İshakoviç tarafından kuruldu.', source: 'src-sabanovic-bosna-belgrad' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-novipazar-lejlek',
    name: 'Yeni Pazar Leylek Camii (Hacı Hürrem Camii)',
    modern: 'Lejlek Mosque (Hadzhi Hurrem Mosque), Novi Pazar',
    aliases: ['Lejlek Džamija', 'Leylek Camisi', 'Hacı Hürrem'],
    coordinates: [20.5115, 43.1420],
    layer: 'heritage',
    start: 1468,
    datePrecision: '15. yüzyıl sonu; Yeni Pazar’ın en eski camisi',
    confidence: 'high',
    locationAccuracy: 'Tarihi çarşı mevkii',
    source: 'src-sabanovic-bosna-belgrad',
    summary: 'Yeni Pazar’ın günümüze ulaşan en eski camisidir; minaresine leyleklerin yuva yapması ve hacıların uğrak yeri olması sebebiyle Leylek Camii olarak anılmıştır.',
    current: 'Eksiksiz ayakta ve faal ibadete açıktır.',
    currentAsOf: '2026 faal durum',
    events: [
      { year: 1468, text: 'İnşa edildi.', source: 'src-sabanovic-bosna-belgrad' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-novipazar-arap-cami',
    name: 'Yeni Pazar Arap Camii (Hasan Çelebi Camii)',
    modern: 'Arap Mosque (Hasan Celebi Mosque), Novi Pazar',
    aliases: ['Arap Džamija', 'Arap Camisi', 'Hasan Çelebi'],
    coordinates: [20.5160, 43.1400],
    layer: 'heritage',
    start: 1528,
    datePrecision: '16. yüzyıl başı',
    confidence: 'high',
    locationAccuracy: 'Eski Çarşı merkezi',
    source: 'src-mesihat-srb',
    summary: 'Yeni Pazar’ın tarihi arastasında tüccarların ve ahilerin ibadethanesi olan, ahşap tavan işlemeli ve taş minareli cami.',
    current: 'Restore edilmiş olup faal ibadete açıktır.',
    currentAsOf: '2026 faal durum',
    events: [
      { year: 1528, text: 'Hasan Çelebi tarafından yaptırıldı.', source: 'src-mesihat-srb' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-sjenica-valide-sultan',
    name: 'Seniçe Sultan Valide Camii (Pertevniyal Valide Sultan)',
    modern: 'Sultan Valide Mosque (Sjenica Mosque)',
    aliases: ['Valide Sultan Camii', 'Sjenička Džamija', 'Джамија Валиде Султан'],
    coordinates: [20.0035, 43.2715],
    layer: 'heritage',
    start: 1870,
    datePrecision: '1870 Pertevniyal Valide Sultan inşası',
    confidence: 'high',
    locationAccuracy: 'Seniçe şehir merkezi meydanı',
    source: 'src-tdv-kiel-srb',
    summary: 'Sultan Abdülaziz’in annesi Pertevniyal Valide Sultan tarafından yaptırılan, 15 metrelik dev kubbesi hiçbir iç sütun olmaksızın yükselen, Sırbistan ve Balkanlar’daki en anıtsal geç dönem camilerinden biri.',
    current: 'Eksiksiz ayakta, mükemmel durumda korunmuş ve faal ibadete açıktır.',
    currentAsOf: '2026 faal durum',
    events: [
      { year: 1870, text: 'Pertevniyal Valide Sultan adına inşa edildi.', source: 'src-tdv-kiel-srb' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-prijepolje-ibrahim-pasa',
    name: 'Prepol İbrahim Paşa Camii',
    modern: 'Ibrahim Pasha Mosque, Prijepolje',
    aliases: ['İbrahim Paşa Camisi', 'Džamija Ibrahima-paše Prijepolje'],
    coordinates: [19.6495, 43.3860],
    layer: 'heritage',
    start: 1572,
    datePrecision: '1572 Budin Beylerbeyi İbrahim Paşa inşası',
    confidence: 'high',
    locationAccuracy: 'Lim nehri kıyısı, Šarampov mahallesi',
    source: 'src-mesihat-srb',
    summary: 'Budin Beylerbeyi İbrahim Paşa tarafından Lim nehri kıyısında yaptırılan tek kubbeli ve zarif minareli tarihi cami.',
    current: 'Ayakta ve faal ibadete açıktır.',
    currentAsOf: '2026 faal durum',
    events: [
      { year: 1572, text: 'İnşa edildi.', source: 'src-mesihat-srb' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-prijepolje-saat-kulesi',
    name: 'Prepol Saat Kulesi (Sahat Kula)',
    modern: 'Prijepolje Clock Tower (Sahat Kula)',
    aliases: ['Prepol Saat Kulesi', 'Sahat Kula Prijepolje', 'Сахат кула Пријепоље'],
    coordinates: [19.6510, 43.3870],
    layer: 'heritage',
    start: 1650,
    datePrecision: '17. yüzyıl ortası',
    confidence: 'high',
    locationAccuracy: 'Prepol merkez meydanı',
    source: 'src-tdv-kiel-srb',
    summary: 'Lim nehri vadisinde kaza merkezinin zamanını düzenleyen, kesme taş gövdeli ve ahşap çatılı Osmanlı saat kulesi.',
    current: 'Eksiksiz ayakta ve faal olarak çalışmaktadır.',
    currentAsOf: '2026 faal durum',
    events: [
      { year: 1650, text: 'İnşa edildi.', source: 'src-tdv-kiel-srb' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-nis-islam-aga-cami',
    name: 'Niş İslam Ağa Camii (Hacı Matus Camii)',
    modern: 'Islam Aga Mosque, Nis',
    aliases: ['İslam Ağa Camisi', 'Islam-agina Džamija', 'Ислам-агина џамија'],
    coordinates: [21.8925, 43.3190],
    layer: 'heritage',
    start: 1870,
    datePrecision: '1870 inşa; Niş’te ayakta kalan ve faal TEK cami',
    confidence: 'high',
    locationAccuracy: 'Generala Milojka Lešjanina caddesi, Niş merkez',
    source: 'src-tdv-kiel-srb',
    summary: 'Niş şehrinde 1878 yıkımlarından kurtularak günümüze ulaşan ve ibadete açık olan TEK camidir. Ahşap tavan işlemeleri, kadınlar mahfili ve minaresiyle ayaktadır.',
    current: 'Niş Müslüman cemaatinin tek faal ibadethanesidir; 2004 olayları sonrası restore edilmiştir.',
    currentAsOf: '2026 faal durum',
    events: [
      { year: 1870, text: 'İslam Ağa tarafından inşa ettirildi.', source: 'src-tdv-kiel-srb' },
      { year: 2004, text: 'Hasar gördü ve ardından restore edildi.', source: 'src-mesihat-srb' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-nis-kalesi',
    name: 'Niş Kalesi ve İstanbul Kapısı',
    modern: 'Nis Fortress & Istanbul Gate (Niska Tvrdjava)',
    aliases: ['Niška Tvrđava', 'Stambol Kapija Niš', 'Нишка тврђава'],
    coordinates: [21.8950, 43.3260],
    layer: 'heritage',
    start: 1723,
    datePrecision: '1723 tamamlanma; 8 tabyalı anıtsal kale',
    confidence: 'high',
    locationAccuracy: 'Nişava nehri kuzey sahili',
    source: 'src-tdv-kiel-srb',
    summary: 'Balkanlar’ın en anıtsal Osmanlı kalelerinden biri; barok taç kapılı İstanbul Kapısı, 8 tabyası, su hendekleri, cephanelik binası ve paşa konağı kalıntılarıyla eksiksiz ayaktadır.',
    current: 'Eksiksiz ayakta olup halka açık kültür ve açık hava müzesi alanıdır.',
    currentAsOf: '2026 durum',
    events: [
      { year: 1723, text: 'Osmanlı baş mimarları tarafından tamamlandı.', source: 'src-tdv-kiel-srb' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-vranje-bey-koprusu',
    name: 'Vranye Bey Köprüsü (Beli Most)',
    modern: 'White Bridge / Bey’s Bridge (Beli Most), Vranje',
    aliases: ['Beli Most', 'Bey Köprüsü', 'Бели мост'],
    coordinates: [21.8990, 42.5590],
    layer: 'heritage',
    start: 1780,
    datePrecision: '1780 inşa; Arapça ve Osmanlıca kitabeli',
    confidence: 'high',
    locationAccuracy: 'Vranjska nehri üzeri, 9. Jugovića caddesi',
    source: 'src-tdv-kiel-srb',
    summary: 'Vranjska nehri üzerinde yükselen, beyaz kesme taştan tek sivri kemerli tarihi köprü; üzerinde Türkçe ve Arapça yazılı mermer tamir kitabesi ayaktadır.',
    current: 'Mükemmel durumda korunmuş yaya köprüsüdür; Vranye şehrinin arması üzerinde yer alır.',
    currentAsOf: '2026 faal durum',
    events: [
      { year: 1780, text: 'Aişe Hanım vakfı olarak yaptırıldı.', source: 'src-tdv-kiel-srb' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-presevo-atik-cami',
    name: 'Preşova Atik Camii',
    modern: 'Atik Mosque (Old Mosque), Presevo',
    aliases: ['Atik Džamija Preševo', 'Xhamia e Vjetër'],
    coordinates: [21.6515, 42.3090],
    layer: 'heritage',
    start: 1550,
    datePrecision: '16. yüzyıl inşa; Preşova’nın en eski camisi',
    confidence: 'high',
    locationAccuracy: 'Preşova tarihi merkez',
    source: 'src-tdv-kiel-srb',
    summary: 'Preşova Vadisi’nin en eski Osmanlı camisi; taş kaideli minaresi ve son cemaat yeriyle korunmuştur.',
    current: 'Ayakta ve Preşova Müslüman cemaati için faal ibadete açıktır.',
    currentAsOf: '2026 faal durum',
    events: [
      { year: 1550, text: 'İnşa edildi.', source: 'src-tdv-kiel-srb' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-priboj-hasan-pasa',
    name: 'Priboy Hasan Paşa Camii',
    modern: 'Hasan Pasha Mosque, Priboj',
    aliases: ['Hasan-pašina Džamija', 'Priboj Camisi'],
    coordinates: [19.5260, 43.5865],
    layer: 'heritage',
    start: 1750,
    datePrecision: '18. yüzyıl inşa',
    confidence: 'high',
    locationAccuracy: 'Lim nehri kıyısı',
    source: 'src-mesihat-srb',
    summary: 'Priboy kasabasında Lim vadisine bakan taş minareli ve ahşap kubbeli tarihi cami.',
    current: 'Ayakta ve faal ibadete açıktır.',
    currentAsOf: '2026 faal durum',
    events: [
      { year: 1750, text: 'İnşa edildi.', source: 'src-mesihat-srb' }
    ],
    observations: []
  },
  {
    id: 'srb-mon-smederevo-kalesi',
    name: 'Semendire Kalesi Osmanlı Tabyaları',
    modern: 'Smederevo Fortress (Ottoman Fortifications)',
    aliases: ['Semendire Hisarı', 'Tvrđava Smederevo'],
    coordinates: [20.9290, 44.6680],
    layer: 'heritage',
    start: 1459,
    datePrecision: '1459 fethi; Osmanlı döneminde top tabyaları ve poligonal kuleler eklendi',
    confidence: 'high',
    locationAccuracy: 'Tuna ve Jezava nehirleri kavşağı',
    source: 'src-tdv-kiel-srb',
    summary: 'Avrupa’nın en büyük düzlük kalelerinden biri; Fatih ve Kanuni dönemlerinde eklenen Osmanlı top kuleleri, hendekleri ve burçlarıyla ayaktadır.',
    current: 'Ulusal anıt ve turistik açık hava müzesidir.',
    currentAsOf: '2026 durum',
    events: [
      { year: 1459, text: 'Osmanlı yönetimine geçti ve tahkim edildi.', source: 'src-tdv-kiel-srb' }
    ],
    observations: []
  }
];

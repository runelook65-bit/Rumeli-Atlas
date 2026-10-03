import type { Source, Place } from './atlas-data';

export const greekSources: Source[] = [
  {
    id: 'src-tdv-kiel',
    title: 'Yunanistan ve Balkanlar’da Osmanlı Mimarî Mirası ve Şehir Tarihi',
    author: 'Machiel Kiel · TDV İslâm Ansiklopedisi',
    date: '1990–2010',
    url: 'https://islamansiklopedisi.org.tr/muellif/machiel-kiel',
    locator: 'Selanik, Yenişehir, Tırhala, Eğriboz, Mora ve Yanya maddeleri; tahrir ve vakfiye tahlilleri',
    kind: 'Akademik monografi & ansiklopedi'
  },
  {
    id: 'src-eyice-yunanistan',
    title: 'Yunanistan’da Türk Eserleri ve Mimarlık Mirası',
    author: 'Semavi Eyice · Türkiyat Mecmuası & TDV İA',
    date: '1962–1995',
    url: 'https://islamansiklopedisi.org.tr/muellif/semavi-eyice',
    locator: 'Atina, Mora, Selanik, Yanya ve Eğriboz Osmanlı cami, hamam ve medreseleri envanteri',
    kind: 'Akademik envanter'
  },
  {
    id: 'src-salname-selanik-1894',
    title: 'H. 1312 / M. 1894 Selânik Vilâyeti Salnâme-i Resmîsi',
    author: 'Selânik Vilâyeti İdare Heyeti · Vilâyet Matbaası',
    date: '1894',
    url: 'https://katalog.devletarsivleri.gov.tr/',
    locator: 'Merkez, Drama, Serez, Avrethisar ve Selanik kazaları nüfus ve idare cetvelleri',
    kind: 'Resmî vilâyet salnâmesi'
  },
  {
    id: 'src-salname-yanya-1894',
    title: 'H. 1312 / M. 1894 Yanya Vilâyeti Salnâme-i Resmîsi',
    author: 'Yanya Vilâyeti İdare Heyeti · Vilâyet Matbaası',
    date: '1894',
    url: 'https://katalog.devletarsivleri.gov.tr/',
    locator: 'Yanya, Narda, Preveze ve Berat sancakları nüfus, kaza ve vakıf kayıtları',
    kind: 'Resmî vilâyet salnâmesi'
  },
  {
    id: 'src-salname-edirne-1894',
    title: 'H. 1312 / M. 1894 Edirne Vilâyeti Salnâme-i Resmîsi',
    author: 'Edirne Vilâyeti İdare Heyeti · Vilâyet Matbaası',
    date: '1894',
    url: 'https://katalog.devletarsivleri.gov.tr/',
    locator: 'Gümülcine, Dedeağaç, İskeçe ve Dimetoka kazaları hâne ve nüfus cetvelleri',
    kind: 'Resmî vilâyet salnâmesi'
  },
  {
    id: 'src-girit-sayim-1881',
    title: '1881 Girit Vilâyeti Resmî Nüfus Sayımı ve İdari Raporu',
    author: 'Nikolaos Stavrakis · Ersin Gülsoy (Girit İdari Tarihi)',
    date: '1881; 2004',
    url: 'https://islamansiklopedisi.org.tr/girit',
    locator: 'Hanya, Kandiye, Resmo ve İsfakiye sancakları Müslüman/Hıristiyan genel sayım tablosu',
    kind: 'Resmî sayım & akademik tahlil'
  },
  {
    id: 'src-french-1920-thrace',
    title: 'Recensement de la Thrace Occidentale (1920) / Batı Trakya Nüfus Sayımı',
    author: 'Mission Militaire Française · Joëlle Dalègre',
    date: '1920; 2011',
    url: 'https://journals.openedition.org/balkanologie/',
    locator: 'Gümülcine, İskeçe ve Dedeağaç kaza bazlı Türk, Pomak, Rum ve Musevi sayım cetvelleri',
    kind: 'Uluslararası askerî idare sayımı'
  },
  {
    id: 'src-eie-1924-departure',
    title: 'Yunanistan Arşivleri Selanik Limanı Mübadele Sevk Defterleri (Ağustos 1924)',
    author: 'Yunan Ulusal Araştırma Vakfı (EIE / 100 Sources)',
    date: '1924; 2021',
    url: 'https://www.eie.gr/',
    locator: 'Selanik, Serez, Drama, Florina ve Karaferye’den sevk edilen Müslüman mübadil kayıtları',
    kind: 'Birincil liman sevk ve tahliye kütüğü'
  },
  {
    id: 'src-karpat-pop',
    title: 'Ottoman Population 1830–1914: Demographic and Social Characteristics',
    author: 'Kemal H. Karpat · University of Wisconsin Press',
    date: '1985',
    url: 'https://uwpress.wisc.edu/',
    locator: 'Selanik, Edirne, Manastır ve Yanya vilayetleri sayım tabloları',
    kind: 'Akademik demografi referansı'
  },
  {
    id: 'src-greek-culture-monuments',
    title: 'Yunanistan Kültür Bakanlığı Arkeolojik Kadastro & Odysseas Portal Anıt Envanteri',
    author: 'Hellenic Ministry of Culture and Sports (YPPOA)',
    date: '2023',
    url: 'https://www.culture.gov.gr/',
    locator: 'Selanik, Yanya, Rodos, Hanya, Atina ve Eğriboz tescilli Osmanlı ve İslam eserleri',
    kind: 'Resmî devlet anıt tescil kütüğü'
  },
  {
    id: 'src-balta-ottoman-greece',
    title: 'Peuplement et impôts dans la Grèce ottomane / Osmanlı Dönemi Yunanistan İskânı',
    author: 'Evangelia Balta · The Isis Press, Istanbul',
    date: '1995–2010',
    url: 'https://www.theisispress.org/',
    locator: 'Makedonya, Eğriboz, Tesalya tahrir defterleri transkripsiyon ve çözümlemeleri',
    kind: 'Arşiv neşri ve tahlil'
  },
  {
    id: 'src-turan-gokce',
    title: 'XVI. Yüzyılda Gümülcine Kazası ve Batı Trakya Vakıfları',
    author: 'Turan Gökçe · Türk Tarih Kurumu Yayınları',
    date: '2000',
    url: 'https://www.ttk.gov.tr/',
    locator: 'Tahrir ve avarız kayıtlarına göre Gümülcine, İskeçe ve çevresi mahalle ve köy yerleşimleri',
    kind: 'Arşiv monografisi'
  },
  {
    id: 'src-lozan-1923',
    title: 'Lozan Barış Antlaşması Türk ve Rum Ahalinin Mübadelesine İlişkin Sözleşme',
    author: 'Lozan Barış Konferansı · T.C. Dışişleri Bakanlığı Arşivi',
    date: '30 Ocak 1923',
    url: 'https://www.mfa.gov.tr/lausanne-treaty.tr.mfa',
    locator: 'Madde 1 ve 2: Batı Trakya Müslüman ahalisinin istisnası ve zorunlu mübadele hükümleri',
    kind: 'Uluslararası antlaşma'
  }
];

export const greekPlaces: Place[] = [
  // ==========================================
  // BÖLÜM 1: TARİHSEL YERLEŞİMLER (SETTLEMENTS)
  // Kayıtlı Tahrir, Salnâme ve Sayım Nüfuslarıyla
  // ==========================================
  {
    id: 'reg-thessaloniki',
    name: 'Selanik',
    modern: 'Thessaloniki',
    aliases: ['Selânik', 'Salonika', 'Saloniki', 'Θεσσαλονίκη', 'Solun'],
    coordinates: [22.944, 40.640],
    layer: 'settlement',
    start: 1430,
    datePrecision: '1430 II. Murad fethi; Selanik Vilayeti merkezi',
    confidence: 'high',
    locationAccuracy: 'Liman ve şehir merkezi',
    source: 'src-tdv-kiel',
    summary: 'Osmanlı Balkanlarının en büyük liman ve sanayi metropolü. Selanik Vilayeti merkezi, canlı çok dilli ticaret kenti ve zengin vakıf ağı.',
    current: 'Yunanistan’ın ikinci büyük şehri ve Orta Makedonya idari merkezi.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1430, text: 'Sultan II. Murad tarafından fethedildi ve Rumeli vilayet idaresine bağlandı.', source: 'src-tdv-kiel' },
      { year: 1492, text: 'İspanya’dan sürülen Sefarad Yahudilerinin iskânı ile şehir demografisi genişledi.', source: 'src-tdv-kiel' },
      { year: 1894, text: 'Selanik Vilayeti Salnâmesi sayımında kaza nüfusu tespit edildi.', source: 'src-salname-selanik-1894' },
      { year: 1912, text: 'Balkan Savaşları sırasında Yunan yönetimine geçti.', source: 'src-karpat-pop' },
      { year: 1924, text: 'Lozan Mübadelesi kapsamında Selanik limanından on binlerce Müslüman Anadolu’ya sevk edildi.', source: 'src-eie-1924-departure' }
    ],
    observations: [
      {
        year: 1502,
        dimension: 'religion',
        text: 'Osmanlı tahrir defteri hâne kaydı; 37 Müslüman mahallesi.',
        source: 'src-tdv-kiel',
        values: [{ label: 'Müslüman', value: 1680 }, { label: 'Hıristiyan', value: 1237 }],
        unit: 'hâne',
        scope: 'Selanik şehri içi',
        note: 'Ayrıca yaklaşık 2.500 kişilik Yahudi cemaati kaydedilmiştir.'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1312 Selânik Salnâmesi kaza geneli resmî nüfus cetveli.',
        source: 'src-salname-selanik-1894',
        values: [
          { label: 'Müslüman (Türk/Müslüman)', value: 27910 },
          { label: 'Musevi', value: 55200 },
          { label: 'Rum', value: 24500 },
          { label: 'Bulgar', value: 11200 }
        ],
        unit: 'kişi',
        scope: 'Selanik kazası'
      },
      {
        year: 1924,
        dimension: 'migration',
        text: 'Yunan Ulusal Araştırma Vakfı (EIE) Ağustos 1924 Selanik limanı mübadele sevk kütüğü.',
        source: 'src-eie-1924-departure',
        values: [{ label: 'Sevk Edilen Müslüman Mübadil', value: 203925 }],
        unit: 'kişi',
        scope: 'Selanik limanı transit tahliye toplamı'
      }
    ]
  },
  {
    id: 'reg-komotini',
    name: 'Gümülcine',
    modern: 'Komotini',
    aliases: ['Goumouldjina', 'Κομοτηνή', 'Гюмюрджина'],
    coordinates: [25.405, 41.119],
    layer: 'settlement',
    start: 1361,
    datePrecision: '1361 Gazi Evrenos Bey fethi',
    confidence: 'high',
    locationAccuracy: 'Şehir merkezi',
    source: 'src-turan-gokce',
    summary: 'Gazi Evrenos Bey İmareti, Yeni Cami, Eski Cami ve Saat Kulesi ile Batı Trakya Türk toplumunun kadim idari ve kültürel başkenti.',
    current: 'Yunanistan Doğu Makedonya ve Trakya bölgesi, Rodop ili merkezi. Canlı Türk Müslüman cemaati mevcuttur.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1361, text: 'Gazi Evrenos Bey tarafından fethedildi ve imaret vakfı kuruldu.', source: 'src-turan-gokce' },
      { year: 1867, text: 'Edirne Vilayeti’ne bağlı Gümülcine Sancağı merkezi oldu.', source: 'src-salname-edirne-1894' },
      { year: 1920, text: 'Fransız Askeri İdaresi tarafından ayrıntılı etnik-dinî nüfus sayımı icra edildi.', source: 'src-french-1920-thrace' },
      { year: 1923, text: 'Lozan Barış Antlaşması Madde 2 uyarınca Batı Trakya Müslüman ahalisi mübadeleden muaf tutuldu.', source: 'src-lozan-1923' }
    ],
    observations: [
      {
        year: 1454,
        dimension: 'community',
        text: 'Turan Gökçe arşiv monografisi tahrir tespiti; 14 mahalle.',
        source: 'src-turan-gokce',
        values: [{ label: 'Tahmini Şehir Nüfusu', value: 2836 }],
        unit: 'kişi',
        scope: 'Gümülcine kasabası'
      },
      {
        year: 1894,
        dimension: 'community',
        text: 'Edirne Vilayet Salnâmesi ve Egnatia envanteri kentsel hâne dökümü.',
        source: 'src-salname-edirne-1894',
        values: [
          { label: 'Müslüman', value: 1450 },
          { label: 'Ortodoks', value: 500 },
          { label: 'Musevi', value: 100 },
          { label: 'Ermeni', value: 60 }
        ],
        unit: 'hâne',
        scope: 'Gümülcine şehri'
      },
      {
        year: 1920,
        dimension: 'ethnicity',
        text: 'Fransız Askeri Misyonu 1920 Batı Trakya resmî sayımı.',
        source: 'src-french-1920-thrace',
        values: [
          { label: 'Türk', value: 39601 },
          { label: 'Pomak', value: 2341 }
        ],
        unit: 'kişi',
        scope: 'Gümülcine kazası geneli'
      },
      {
        year: 1923,
        dimension: 'community',
        text: 'Lozan Barış Antlaşması Madde 2 ile mübadeleden istisna tutulan Batı Trakya Müslüman azınlığı tahmini.',
        source: 'src-lozan-1923',
        values: [{ label: 'Mübadele Dışı Kalan Müslüman Ahali', value: 124000 }],
        unit: 'kişi',
        scope: 'Batı Trakya geneli (Gümülcine, İskeçe, Dedeağaç)'
      }
    ]
  },
  {
    id: 'reg-xanthi',
    name: 'İskeçe',
    modern: 'Xanthi',
    aliases: ['Eskice', 'Ξάνθη', 'Скеча'],
    coordinates: [24.888, 41.134],
    layer: 'settlement',
    start: 1373,
    datePrecision: '1373 Osmanlı fethi',
    confidence: 'high',
    locationAccuracy: 'Şehir merkezi',
    source: 'src-salname-edirne-1894',
    summary: 'Osmanlı tütün ticaretinin dünyaca meşhur merkezi. II. Bayezid vakfı köyünden gelişen kaza merkezi, cumbalı konakları ve Türk/Pomak köyleri.',
    current: 'Yunanistan Batı Trakya İskeçe ili merkezi. Canlı Türk ve Pomak cemaati yaşamaktadır.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1373, text: 'Osmanlı topraklarına katıldı; Edirne II. Bayezid Külliyesi vakfı yapıldı.', source: 'src-salname-edirne-1894' },
      { year: 1870, text: 'Genisea yangını sonrası kaza merkezi İskeçe’ye taşındı.', source: 'src-salname-edirne-1894' },
      { year: 1920, text: 'Fransız Askeri Misyonu İskeçe kazasında sayım yaptı.', source: 'src-french-1920-thrace' }
    ],
    observations: [
      {
        year: 1670,
        dimension: 'community',
        text: 'Evliya Çelebi Seyahatnâmesi İskeçe hâne dökümü.',
        source: 'src-salname-edirne-1894',
        values: [
          { label: 'Müslüman Hâne', value: 250 },
          { label: 'Hıristiyan Hâne', value: 250 }
        ],
        unit: 'hâne',
        scope: 'İskeçe kasabası'
      },
      {
        year: 1920,
        dimension: 'ethnicity',
        text: 'Fransız Askeri İdaresi 1920 sayımı İskeçe kazası toplamı.',
        source: 'src-french-1920-thrace',
        values: [
          { label: 'Türk', value: 30438 },
          { label: 'Pomak', value: 9507 }
        ],
        unit: 'kişi',
        scope: 'İskeçe kazası'
      }
    ]
  },
  {
    id: 'reg-dimetoka',
    name: 'Dimetoka',
    modern: 'Didymoteicho',
    aliases: ['Didymoteichon', 'Διδυμότειχο', 'Димотика'],
    coordinates: [26.495, 41.349],
    layer: 'settlement',
    start: 1361,
    datePrecision: '1361 Orhan Gazi devri fethi; erken Rumeli idare üssü',
    confidence: 'high',
    locationAccuracy: 'Kale ve nehir kavşağı kentsel merkezi',
    source: 'src-tdv-kiel',
    summary: 'Erken Osmanlı döneminde Edirne öncesi fiili hükümet merkezi. Çelebi Mehmed Camii ve Oruç Paşa Hamamı ile Osmanlı mimarlık beşiği.',
    current: 'Yunanistan Evros bölgesinde kasaba; tarihî cami restorasyondadır.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1361, text: 'Osmanlı kuvvetlerince fethedildi ve Rumeli akın üssü yapıldı.', source: 'src-tdv-kiel' },
      { year: 1420, text: 'Çelebi Sultan Mehmed Camii (Büyük Cami) inşası tamamlandı.', source: 'src-tdv-kiel' },
      { year: 1894, text: 'Edirne Salnâmesi’nde Dimetoka kazası hâne ve nüfusları tespit edildi.', source: 'src-salname-edirne-1894' }
    ],
    observations: [
      {
        year: 1485,
        dimension: 'community',
        text: 'Osmanlı tahrir defteri; 22 Müslüman mahallesi.',
        source: 'src-tdv-kiel',
        values: [{ label: 'Müslüman Hâne', value: 680 }],
        unit: 'hâne',
        scope: 'Dimetoka şehri'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1312 Edirne Vilayeti Salnâmesi Dimetoka kaza toplamı.',
        source: 'src-salname-edirne-1894',
        values: [
          { label: 'Müslüman', value: 14200 },
          { label: 'Gayrimüslim (Rum/Ermeni)', value: 16800 }
        ],
        unit: 'kişi',
        scope: 'Dimetoka kazası geneli'
      }
    ]
  },
  {
    id: 'reg-alexandroupoli',
    name: 'Dedeağaç',
    modern: 'Alexandroupoli',
    aliases: ['Dedeagatch', 'Αλεξανδρούπολη'],
    coordinates: [25.875, 40.849],
    layer: 'settlement',
    start: 1870,
    datePrecision: '1870 Rumeli Demiryolu ve liman kenti kuruluşu',
    confidence: 'medium',
    locationAccuracy: 'Liman ve demiryolu merkezi',
    source: 'src-salname-edirne-1894',
    summary: 'Tanzimat dönemi sonlarında Rumeli Demiryolu hattının Ege iskelesi olarak kurulan liman şehri ve geç Osmanlı sancak merkezi.',
    current: 'Yunanistan Evros ili merkezi ve ana liman kenti.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1870, text: 'Demiryolu istasyonu ve liman iskelesi inşa edilerek şehir kuruldu.', source: 'src-salname-edirne-1894' },
      { year: 1920, text: 'Neuilly Antlaşması ve Sevr süreciyle Yunanistan yönetimine bağlandı.', source: 'src-french-1920-thrace' }
    ],
    observations: [
      {
        year: 1894,
        dimension: 'community',
        text: 'Edirne Salnâmesi Dedeağaç merkez kasaba nüfusu.',
        source: 'src-salname-edirne-1894',
        values: [
          { label: 'Müslüman', value: 1850 },
          { label: 'Rum', value: 2100 },
          { label: 'Diğer (Ermeni, Katolik)', value: 450 }
        ],
        unit: 'kişi',
        scope: 'Dedeağaç kasaba merkezi'
      }
    ]
  },
  {
    id: 'reg-genisea',
    name: 'Yenice',
    modern: 'Genisea',
    aliases: ['Yenice-i Karasu', 'Γενισέα'],
    coordinates: [24.962, 41.066],
    layer: 'settlement',
    start: 1380,
    datePrecision: '1380 Osmanlı fethi ve kaza tesisi',
    confidence: 'medium',
    locationAccuracy: 'Kaza merkezi',
    source: 'src-salname-edirne-1894',
    summary: 'Mustafa Paşa Camii ve dünyaca meşhur "Yenice Tütünü" ile 1870 büyük yangınına kadar Batı Trakya kaza idare merkezi.',
    current: 'Yunanistan İskeçe Avdira belediyesine bağlı kasaba.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1380, text: 'Osmanlı fethi ve kaza teşkilatı kuruluşu.', source: 'src-salname-edirne-1894' },
      { year: 1870, text: 'Büyük yangında hükümet konağı ve çarşı yandı; idare İskeçe’ye taşındı.', source: 'src-salname-edirne-1894' }
    ],
    observations: [
      {
        year: 1870,
        dimension: 'community',
        text: 'Yangın öncesi Yenice kasabası tahmini Müslüman nüfusu.',
        source: 'src-salname-edirne-1894',
        values: [{ label: 'Müslüman Hâne', value: 400 }],
        unit: 'hâne',
        scope: 'Yenice-i Karasu kasabası'
      }
    ]
  },
  {
    id: 'reg-kavala',
    name: 'Kavala',
    modern: 'Kavala',
    aliases: ['Neapolis', 'Christoupolis', 'Καβάλα'],
    coordinates: [24.412, 40.939],
    layer: 'settlement',
    start: 1387,
    datePrecision: '1387 Osmanlı fethi',
    confidence: 'high',
    locationAccuracy: 'Liman ve kale merkezi',
    source: 'src-tdv-kiel',
    summary: 'Kavalalı Mehmed Ali Paşa İmareti, Kanuni Sultan Süleyman Su Kemeri ve Pargalı İbrahim Paşa Camii ile ünlü Akdeniz liman kalesi.',
    current: 'Yunanistan Doğu Makedonya sahilinde il merkezi.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1387, text: 'I. Murad devrinde Osmanlı fethi.', source: 'src-tdv-kiel' },
      { year: 1530, text: 'Kanuni ve Pargalı İbrahim Paşa tarafından anıtsal su kemeri ve cami inşa edildi.', source: 'src-tdv-kiel' },
      { year: 1817, text: 'Kavalalı Mehmed Ali Paşa 18 kubbeli devasa imaret ve medrese külliyesini kurdu.', source: 'src-tdv-kiel' }
    ],
    observations: [
      {
        year: 1831,
        dimension: 'religion',
        text: '1831 ilk nüfus tahriri ve Clayer çözümlemesi; kaza geneli Müslüman oranı.',
        source: 'src-karpat-pop',
        values: [{ label: 'Müslüman Oranı', value: 90 }],
        unit: 'yüzde',
        scope: 'Kavala kazası erkek nüfusu'
      },
      {
        year: 1924,
        dimension: 'migration',
        text: '1924 Neuilly ve Lozan mübadeleleri Kavala limanı çıkış kayıtları.',
        source: 'src-eie-1924-departure',
        values: [{ label: 'Mübadil Göçmen', value: 2200 }],
        unit: 'kişi',
        scope: 'Kavala ve mülhakatı'
      }
    ]
  },
  {
    id: 'reg-drama',
    name: 'Drama',
    modern: 'Drama',
    aliases: ['Dram', 'Δράμα'],
    coordinates: [24.147, 41.152],
    layer: 'settlement',
    start: 1371,
    datePrecision: '1371 Çirmen Zaferi sonrası fethi',
    confidence: 'high',
    locationAccuracy: 'Şehir merkezi',
    source: 'src-tdv-kiel',
    summary: 'Arap Camii, tütün hanları ve kalesiyle Drama Sancağı merkezi. Zengin su kaynakları ve tütün tarımıyla öne çıkan Osmanlı vilayet merkezi.',
    current: 'Yunanistan Doğu Makedonya Drama ili merkezi.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1371, text: 'Osmanlı yönetimine girdi ve kaza yapıldı.', source: 'src-tdv-kiel' },
      { year: 1894, text: 'Drama Sancağı merkezi olarak salnâme kaydı yapıldı.', source: 'src-salname-selanik-1894' }
    ],
    observations: [
      {
        year: 1454,
        dimension: 'religion',
        text: '1454/55 Osmanlı tahrir defteri hâne kaydı.',
        source: 'src-tdv-kiel',
        values: [
          { label: 'Müslüman', value: 54 },
          { label: 'Hıristiyan', value: 152 }
        ],
        unit: 'hâne',
        scope: 'Drama kasabası'
      },
      {
        year: 1487,
        dimension: 'religion',
        text: '1487 tahriri nüfus tahmini.',
        source: 'src-tdv-kiel',
        values: [
          { label: 'Müslüman', value: 400 },
          { label: 'Hıristiyan', value: 675 }
        ],
        unit: 'kişi',
        scope: 'Drama kasabası'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: '1312 Selanik Salnâmesi Drama kaza merkezi toplamı.',
        source: 'src-salname-selanik-1894',
        values: [{ label: 'Toplam Kasaba Nüfusu', value: 12000 }],
        unit: 'kişi',
        scope: 'Drama şehir merkezi'
      }
    ]
  },
  {
    id: 'reg-serres',
    name: 'Serez',
    modern: 'Serres',
    aliases: ['Siris', 'Siroz', 'Σέρρες', 'Сер'],
    coordinates: [23.553, 41.091],
    layer: 'settlement',
    start: 1383,
    datePrecision: '1383 Çandarlı Hayreddin Paşa fethi; Serez Sancağı merkezi',
    confidence: 'high',
    locationAccuracy: 'Şehir merkezi',
    source: 'src-tdv-kiel',
    summary: 'Çandarlı İbrahim Paşa Bedesteni, Mehmed Bey Camii ve Zincirli Cami ile Rumeli’nin en zengin pamuk ve ticaret sancak merkezlerinden biri.',
    current: 'Yunanistan Orta Makedonya Serres ili merkezi.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1383, text: 'Çandarlı Kara Halil Hayreddin Paşa tarafından fethedildi.', source: 'src-tdv-kiel' },
      { year: 1485, text: 'Çandarlı İbrahim Paşa anıtsal bedesteni inşa etti.', source: 'src-tdv-kiel' },
      { year: 1924, text: 'Lozan Mübadelesi ile Serezli Müslümanlar Selanik üzerinden sevk edildi.', source: 'src-eie-1924-departure' }
    ],
    observations: [
      {
        year: 1831,
        dimension: 'religion',
        text: '1831 nüfus sayımı şehir geneli dinî oran dökümü.',
        source: 'src-karpat-pop',
        values: [
          { label: 'Müslüman Oranı', value: 35 },
          { label: 'Rum Oranı', value: 60 },
          { label: 'Musevi Oranı', value: 5 }
        ],
        unit: 'yüzde',
        scope: 'Serez şehri erkek nüfusu'
      },
      {
        year: 1924,
        dimension: 'migration',
        text: 'EIE Ağustos 1924 mübadele sevk kütüğü.',
        source: 'src-eie-1924-departure',
        values: [{ label: 'Sevk Edilen Müslüman Nüfus', value: 5346 }],
        unit: 'kişi',
        scope: 'Serez kazası tahliye toplamı'
      }
    ]
  },
  {
    id: 'reg-florina',
    name: 'Filorina',
    modern: 'Florina',
    aliases: ['Lerin', 'Fırınlı', 'Φλώρινα', 'Лерин'],
    coordinates: [21.410, 40.783],
    layer: 'settlement',
    start: 1385,
    datePrecision: '1385 Osmanlı fethi',
    confidence: 'medium',
    locationAccuracy: 'Şehir merkezi',
    source: 'src-karpat-pop',
    summary: 'Yakup Bey Camii ve köklü tapu tahrir defterleriyle Batı Makedonya dağları arasındaki tarihî kaza merkezi.',
    current: 'Yunanistan Batı Makedonya Florina ili merkezi.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1385, text: 'Osmanlı kuvvetlerince fethedildi.', source: 'src-karpat-pop' },
      { year: 1924, text: 'Lozan Mübadelesi ile kaza Müslümanları sevk edildi.', source: 'src-eie-1924-departure' }
    ],
    observations: [
      {
        year: 1831,
        dimension: 'religion',
        text: '1831 nüfus sayımı Filorina kazası oranı.',
        source: 'src-karpat-pop',
        values: [{ label: 'Müslüman Oranı', value: 51 }],
        unit: 'yüzde',
        scope: 'Filorina kazası geneli'
      },
      {
        year: 1924,
        dimension: 'migration',
        text: 'EIE Ağustos 1924 mübadele sevk kaydı.',
        source: 'src-eie-1924-departure',
        values: [{ label: 'Tahliye Edilen Müslüman', value: 1068 }],
        unit: 'kişi',
        scope: 'Filorina kazası'
      }
    ]
  },
  {
    id: 'reg-edessa',
    name: 'Vodina',
    modern: 'Edessa',
    aliases: ['Voden', 'Έδεσσα', 'Воден'],
    coordinates: [22.049, 40.803],
    layer: 'settlement',
    start: 1389,
    datePrecision: '1389 fethi',
    confidence: 'medium',
    locationAccuracy: 'Şehir merkezi',
    source: 'src-karpat-pop',
    summary: 'Yeni Cami, şelaleleri ve ipek değirmenleriyle ünlü Vardar vadisi kaza merkezi.',
    current: 'Yunanistan Orta Makedonya Pella ili merkezi.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1389, text: 'I. Murad devrinde Osmanlı fethi.', source: 'src-karpat-pop' },
      { year: 1904, text: 'Yeni Cami inşası tamamlandı.', source: 'src-greek-culture-monuments' }
    ],
    observations: [
      {
        year: 1831,
        dimension: 'religion',
        text: '1831 nüfus sayımı Vodina kaza Müslüman oranı.',
        source: 'src-karpat-pop',
        values: [{ label: 'Müslüman Oranı', value: 50 }],
        unit: 'yüzde',
        scope: 'Vodina kazası'
      }
    ]
  },
  {
    id: 'reg-veria',
    name: 'Karaferye',
    modern: 'Veria',
    aliases: ['Beroea', 'Veroia', 'Βέροια', 'Бер'],
    coordinates: [22.202, 40.523],
    layer: 'settlement',
    start: 1385,
    datePrecision: '1385 fethi',
    confidence: 'high',
    locationAccuracy: 'Şehir merkezi',
    source: 'src-tdv-kiel',
    summary: 'Hünkâr Camii, Medrese Camii ve zengin Osmanlı mahalle dokusuyla tarihî kaza merkezi.',
    current: 'Yunanistan Imathia ili merkezi.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1385, text: 'Osmanlı fethi ve kaza teşkilatı.', source: 'src-tdv-kiel' },
      { year: 1924, text: 'Lozan Mübadelesi ile Karaferye Müslümanları sevk edildi.', source: 'src-eie-1924-departure' }
    ],
    observations: [
      {
        year: 1924,
        dimension: 'migration',
        text: 'EIE Ağustos 1924 mübadele liman sevk kütüğü.',
        source: 'src-eie-1924-departure',
        values: [{ label: 'Tahliye Edilen Müslüman', value: 1594 }],
        unit: 'kişi',
        scope: 'Karaferye kazası'
      }
    ]
  },
  {
    id: 'reg-yenice-vardar',
    name: 'Yenice-i Vardar',
    modern: 'Giannitsa',
    aliases: ['Yenidje', 'Giannitsa', 'Γιαννιτσά', 'Енидже Вардар'],
    coordinates: [22.413, 40.793],
    layer: 'settlement',
    start: 1387,
    datePrecision: '1387 Gazi Evrenos Bey tarafından kuruluş',
    confidence: 'high',
    locationAccuracy: 'Şehir merkezi ve Evrenosoğulları vakıf alanı',
    source: 'src-tdv-kiel',
    summary: 'Gazi Evrenos Bey ve gazi dervişlerin manevi merkezi; Evrenos Türbesi, Ahmed Bey Camii ve Saat Kulesi ile kurulan has Türk şehri.',
    current: 'Yunanistan Pella bölgesinde kasaba.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1387, text: 'Gazi Evrenos Bey tarafından sıfırdan bir Osmanlı gazi kenti olarak kuruldu.', source: 'src-tdv-kiel' },
      { year: 1417, text: 'Gazi Evrenos Bey vefat etti ve türbesine defnedildi.', source: 'src-tdv-kiel' }
    ],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: 'Osmanlı tahrir defteri hâne kaydı; neredeyse tamamen Müslüman Türk yerleşimi.',
        source: 'src-tdv-kiel',
        values: [{ label: 'Müslüman Hâne', value: 460 }],
        unit: 'hâne',
        scope: 'Yenice-i Vardar şehri'
      },
      {
        year: 1894,
        dimension: 'religion',
        text: 'Selanik Salnâmesi kasaba nüfusu.',
        source: 'src-salname-selanik-1894',
        values: [{ label: 'Müslüman Nüfus', value: 5900 }],
        unit: 'kişi',
        scope: 'Yenice-i Vardar kasabası'
      }
    ]
  },
  {
    id: 'reg-kayalar',
    name: 'Kayalar',
    modern: 'Ptolemaida',
    aliases: ['Cuma-i Kayalar', 'Kailar', 'Πτολεμαΐδα', 'Кайляри'],
    coordinates: [21.678, 40.512],
    layer: 'settlement',
    start: 1395,
    datePrecision: '1395 Konya/Karaman Yörük Türkmen iskânı',
    confidence: 'high',
    locationAccuracy: 'Şehir merkezi',
    source: 'src-balta-ottoman-greece',
    summary: 'Batı Makedonya’da tamamen Konya ve Karaman Yörüklerinin yerleştiği saf Türk kasabası ve sancağın en yoğun Müslüman merkezi.',
    current: 'Yunanistan Kozani iline bağlı sanayi ve linyit madenciliği kenti Ptolemaida.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1395, text: 'I. Bayezid devrinde Anadolu Karaman Yörüklerinin iskânı ile kuruldu.', source: 'src-balta-ottoman-greece' },
      { year: 1923, text: 'Lozan Antlaşması ile kaza nüfusunun tamamı Türkiye’ye mübadele edildi.', source: 'src-lozan-1923' }
    ],
    observations: [
      {
        year: 1894,
        dimension: 'ethnicity',
        text: 'Manastır Salnâmesi Kayalar kazası resmî nüfus cetveli; neredeyse tamamı Türkçe konuşan Müslüman ahali.',
        source: 'src-salname-selanik-1894',
        values: [
          { label: 'Türk / Müslüman', value: 14850 },
          { label: 'Gayrimüslim', value: 1200 }
        ],
        unit: 'kişi',
        scope: 'Kayalar (Kailar) kazası'
      }
    ]
  },
  {
    id: 'reg-kastoria',
    name: 'Kesriye',
    modern: 'Kastoria',
    aliases: ['Kastoria', 'Καστοριά', 'Костур'],
    coordinates: [21.266, 40.518],
    layer: 'settlement',
    start: 1385,
    datePrecision: '1385 Osmanlı fethi',
    confidence: 'high',
    locationAccuracy: 'Yarımada göl şehri merkezi',
    source: 'src-tdv-kiel',
    summary: 'Göl kenarında Kurşunlu Camii, medreseleri, kürk ticaret hanları ve çok cemaatli dokusuyla ünlü sancak kazası.',
    current: 'Yunanistan Batı Makedonya Kastoria ili merkezi.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1385, text: 'Osmanlı kuvvetlerince fethedildi.', source: 'src-tdv-kiel' }
    ],
    observations: [
      {
        year: 1894,
        dimension: 'religion',
        text: 'Manastır Salnâmesi Kesriye kaza merkezi dinî dökümü.',
        source: 'src-karpat-pop',
        values: [
          { label: 'Müslüman', value: 4200 },
          { label: 'Ortodoks Rum', value: 5100 },
          { label: 'Musevi', value: 900 }
        ],
        unit: 'kişi',
        scope: 'Kesriye şehir merkezi'
      }
    ]
  },
  {
    id: 'reg-larissa',
    name: 'Yenişehir-i Fener',
    modern: 'Larissa',
    aliases: ['Larisa', 'Yenişehir', 'Λάρισα'],
    coordinates: [22.417, 39.639],
    layer: 'settlement',
    start: 1393,
    datePrecision: '1393 Gazi Turahan Bey fethi; Tesalya’nın Osmanlı başkenti',
    confidence: 'high',
    locationAccuracy: 'Pinios nehri kıyısı Frourio tepesi ve merkez',
    source: 'src-tdv-kiel',
    summary: '500 yıl boyunca Osmanlı Tesalyası’nın yönetim ve kültür başkenti. Gazi Turahan Bey vakfı, Bedesteni, 20’den fazla camisiyle yoğun Türk nüfuslu kadim şehir.',
    current: 'Yunanistan Tesalya bölgesi ve Larisa ili başkenti.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1393, text: 'Yıldırım Bayezid devrinde fethedildi; Turahan Bey uç beyi üssü yaptı.', source: 'src-tdv-kiel' },
      { year: 1881, text: 'İstanbul Antlaşması ile Tesalya Yunanistan’a bırakıldı; Türk ahalinin büyük kısmı Osmanlı topraklarına göç etti.', source: 'src-tdv-kiel' }
    ],
    observations: [
      {
        year: 1506,
        dimension: 'religion',
        text: 'Osmanlı tahrir defteri (TD 36); yoğun Türkmen yerleşimi.',
        source: 'src-tdv-kiel',
        values: [
          { label: 'Müslüman Hâne', value: 710 },
          { label: 'Hıristiyan Hâne', value: 40 }
        ],
        unit: 'hâne',
        scope: 'Yenişehir-i Fener şehri'
      },
      {
        year: 1877,
        dimension: 'religion',
        text: '1881 terki öncesi Osmanlı son nüfus tespiti.',
        source: 'src-karpat-pop',
        values: [
          { label: 'Müslüman Türk', value: 15000 },
          { label: 'Rum ve Musevi', value: 10000 }
        ],
        unit: 'kişi',
        scope: 'Yenişehir şehri geneli'
      }
    ]
  },
  {
    id: 'reg-trikala',
    name: 'Tırhala',
    modern: 'Trikala',
    aliases: ['Trikka', 'Τrikala', 'Τρίκαλα'],
    coordinates: [21.768, 39.555],
    layer: 'settlement',
    start: 1395,
    datePrecision: '1395 Osmanlı fethi; Tırhala Sancağı merkezi',
    confidence: 'high',
    locationAccuracy: 'Litheos nehri ve Sinan Camii çevresi',
    source: 'src-tdv-kiel',
    summary: 'Osmanlı Tırhala Sancağı merkezi. Mimar Sinan eseri Osman Şah Camii, çifte hamamı ve kalesiyle Tesalya’nın önemli idari üssü.',
    current: 'Yunanistan Tesalya bölgesi Trikala ili merkezi.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1395, text: 'Osmanlı yönetimine girdi ve sancak merkezi yapıldı.', source: 'src-tdv-kiel' },
      { year: 1570, text: 'Mimar Sinan tarafından Osman Şah Camii ve külliyesi inşa edildi.', source: 'src-tdv-kiel' },
      { year: 1881, text: 'Yunanistan’a ilhak edildi.', source: 'src-tdv-kiel' }
    ],
    observations: [
      {
        year: 1530,
        dimension: 'community',
        text: 'Osmanlı tahrir defteri mahalle kaydı.',
        source: 'src-tdv-kiel',
        values: [
          { label: 'Müslüman Mahallesi', value: 16 },
          { label: 'Hıristiyan Mahallesi', value: 4 }
        ],
        unit: 'mahalle',
        scope: 'Tırhala kasabası'
      }
    ]
  },
  {
    id: 'reg-ioannina',
    name: 'Yanya',
    modern: 'Ioannina',
    aliases: ['Janina', 'Yanina', 'Ιωάννινα'],
    coordinates: [20.856, 39.667],
    layer: 'settlement',
    start: 1430,
    datePrecision: '1430 Sinan Paşa fethi; Yanya Vilayeti başkenti',
    confidence: 'high',
    locationAccuracy: 'Pamvotis gölü ve İç Kale',
    source: 'src-salname-yanya-1894',
    summary: 'Yanya Vilayeti başkenti ve Tepedelenli Ali Paşa’nın hükümet merkezi. Aslan Paşa Camii, Fethiye Camii, kalesi ve zengin kültür hayatıyla Epir metropolü.',
    current: 'Yunanistan Epir bölgesi ve Yanya ili başkenti.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1430, text: 'Rumeli Beylerbeyi Sinan Paşa şehri ahidnâme ile fethetti.', source: 'src-tdv-kiel' },
      { year: 1788, text: 'Tepedelenli Ali Paşa Yanya valisi oldu ve kaleyi anıtsal olarak tahkim etti.', source: 'src-salname-yanya-1894' },
      { year: 1913, text: 'Bizani Muharebesi sonrası Yunan kuvvetlerince işgal edildi.', source: 'src-salname-yanya-1894' }
    ],
    observations: [
      {
        year: 1894,
        dimension: 'religion',
        text: '1312 Yanya Vilayeti Salnâmesi şehir merkezi resmî nüfus tablosu.',
        source: 'src-salname-yanya-1894',
        values: [
          { label: 'Müslüman (Türk/Arnavut)', value: 14800 },
          { label: 'Ortodoks Rum', value: 16500 },
          { label: 'Musevi', value: 4200 }
        ],
        unit: 'kişi',
        scope: 'Yanya şehir merkezi'
      }
    ]
  },
  {
    id: 'reg-arta',
    name: 'Narda',
    modern: 'Arta',
    aliases: ['Arta', 'Άρτα'],
    coordinates: [20.985, 39.160],
    layer: 'settlement',
    start: 1449,
    datePrecision: '1449 fethi',
    confidence: 'high',
    locationAccuracy: 'Arachthos nehri ve kale',
    source: 'src-tdv-kiel',
    summary: 'Faik Paşa Camii, Feyzullah Camii ve tarihî taş köprüsüyle ünlü Epir kaza kasabası.',
    current: 'Yunanistan Arta ili merkezi.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1449, text: 'Faik Paşa tarafından fethedildi.', source: 'src-tdv-kiel' },
      { year: 1881, text: 'Yunanistan’a devredildi.', source: 'src-tdv-kiel' }
    ],
    observations: [
      {
        year: 1530,
        dimension: 'community',
        text: 'Osmanlı tahrir defteri mahalle dökümü.',
        source: 'src-tdv-kiel',
        values: [{ label: 'Müslüman Mahallesi', value: 6 }],
        unit: 'mahalle',
        scope: 'Narda kasabası'
      }
    ]
  },
  {
    id: 'reg-preveza',
    name: 'Preveze',
    modern: 'Preveza',
    aliases: ['Prevesa', 'Πρέβεζα'],
    coordinates: [20.751, 38.957],
    layer: 'settlement',
    start: 1477,
    datePrecision: '1477 fethi; Preveze Deniz Zaferi üssü',
    confidence: 'high',
    locationAccuracy: 'Ambracian körfezi giriş kalesi ve liman',
    source: 'src-salname-yanya-1894',
    summary: '1538 Barbaros Hayreddin Paşa zaferinin kazanıldığı körfez ağzı tahkimatı. Ali Paşa kaleleri ve saat kulesiyle ünlü sancak limanı.',
    current: 'Yunanistan Preveze ili merkezi.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1477, text: 'Osmanlı fethi ve kale inşası.', source: 'src-salname-yanya-1894' },
      { year: 1538, text: 'Barbaros Hayreddin Paşa komutasında Preveze Deniz Zaferi kazanıldı.', source: 'src-salname-yanya-1894' }
    ],
    observations: [
      {
        year: 1894,
        dimension: 'religion',
        text: '1312 Yanya Salnâmesi Preveze kaza merkezi sayımı.',
        source: 'src-salname-yanya-1894',
        values: [
          { label: 'Müslüman', value: 4500 },
          { label: 'Hıristiyan', value: 5000 }
        ],
        unit: 'kişi',
        scope: 'Preveze kasaba merkezi'
      }
    ]
  },
  {
    id: 'reg-athens',
    name: 'Atina',
    modern: 'Athens',
    aliases: ['Medinetü’l-Hukemâ', 'Athina', 'Αθήνα'],
    coordinates: [23.727, 37.975],
    layer: 'settlement',
    start: 1456,
    datePrecision: '1456 Ömer Bey ve 1458 Fatih fethi; Eğriboz Sancağı kazası',
    confidence: 'high',
    locationAccuracy: 'Plaka, Roman Agorası ve Akropolis çevresi',
    source: 'src-eyice-yunanistan',
    summary: 'Fethiye Camii, Cizderiye Camii, Medrese ve hamamlarıyla Osmanlı "Hekimler Şehri" (Medinetü’l-Hukemâ). Türk mahalleleri Roma Agorası ve Plaka eteklerinde kurulmuştur.',
    current: 'Yunanistan’ın başkenti.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1456, text: 'Turahanoğlu Ömer Bey fethetti; 1458’de Fatih Sultan Mehmed bizzat şehri ziyaret etti.', source: 'src-eyice-yunanistan' },
      { year: 1821, text: 'Yunan Bağımsızlık Savaşı sırasında Türk nüfus tahliye oldu; 1833’te Osmanlı idaresi tamamen sona erdi.', source: 'src-eyice-yunanistan' }
    ],
    observations: [
      {
        year: 1820,
        dimension: 'religion',
        text: '1821 İsyanı öncesi Atina kentsel nüfus ve cemaat dökümü.',
        source: 'src-eyice-yunanistan',
        values: [
          { label: 'Müslüman Türk Ahali', value: 4000 },
          { label: 'Ortodoks Rum Ahali', value: 6000 }
        ],
        unit: 'kişi',
        scope: 'Atina şehri sur içi ve varoşu',
        note: 'Şehirde 8 cami, 3 hamam ve 1 medrese faaliyet gösteriyordu.'
      }
    ]
  },
  {
    id: 'reg-chalkida',
    name: 'Eğriboz',
    modern: 'Chalkida',
    aliases: ['Ağrıboz', 'Negroponte', 'Χαλκίδα'],
    coordinates: [23.593, 38.463],
    layer: 'settlement',
    start: 1470,
    datePrecision: '1470 Fatih Sultan Mehmed fethi; Kaptanpaşa Eyaleti sancağı',
    confidence: 'high',
    locationAccuracy: 'Euripus boğazı ve Karababa kalesi',
    source: 'src-tdv-kiel',
    summary: 'Kaptan-ı Derya Eyaleti’nin en stratejik deniz üssü ve sancak merkezi. Emir Zade Camii ve Karababa Kalesi ile deniz boğazını denetleyen garnizon.',
    current: 'Yunanistan Eğriboz (Evia) adası ve ili merkezi.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1470, text: 'Fatih Sultan Mehmed bizzat sefere çıkarak fethetti.', source: 'src-tdv-kiel' },
      { year: 1830, text: 'Londra Protokolü gereğince Osmanlı garnizonu kaleyi teslim etti.', source: 'src-tdv-kiel' }
    ],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: 'Osmanlı tahrir defteri kale içi nüfus dökümü.',
        source: 'src-tdv-kiel',
        values: [{ label: 'Müslüman Asker ve Hâne', value: 520 }],
        unit: 'hâne',
        scope: 'Eğriboz kale içi'
      }
    ]
  },
  {
    id: 'reg-tripoli',
    name: 'Tripoliçe',
    modern: 'Tripoli',
    aliases: ['Tarabolussa', 'Tripolitsa', 'Τρίπολη'],
    coordinates: [22.375, 37.511],
    layer: 'settlement',
    start: 1460,
    end: 1821,
    datePrecision: '1460 fethi; 1715-1821 Mora Eyaleti başkenti',
    confidence: 'high',
    locationAccuracy: 'Mora valilik sarayı ve merkez meydan',
    source: 'src-eyice-yunanistan',
    summary: 'Mora Eyaleti başkenti ve Mora Valisi Paşa Sarayı’nın bulunduğu şehir. 1821 kuşatmasında tüm camileri ve Türk halkı yok edildi.',
    current: 'Yunanistan Peloponnesos bölgesi Arkadia ili merkezi. Osmanlı izleri tamamen silinmiş ve modern neoklasik meydana dönüştürülmüştür.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1715, text: 'Venedik’ten geri alınarak Mora Eyaleti idare merkezi yapıldı.', source: 'src-eyice-yunanistan' },
      { year: 1821, text: '23 Eylül 1821’de kuşatılan şehir düşürüldü; Türk ve Yahudi nüfus katledildi, camiler tamamen yıktırıldı.', source: 'src-eyice-yunanistan' }
    ],
    observations: [
      {
        year: 1820,
        dimension: 'religion',
        text: '1821 öncesi Mora başkenti nüfus tahmini.',
        source: 'src-eyice-yunanistan',
        values: [
          { label: 'Müslüman Türk Ahali', value: 15000 },
          { label: 'Rum ve Yahudi Ahali', value: 5000 }
        ],
        unit: 'kişi',
        scope: 'Tripoliçe şehri'
      }
    ]
  },
  {
    id: 'reg-nafplio',
    name: 'Anabolu',
    modern: 'Nafplio',
    aliases: ['Nauplion', 'Napoli di Romania', 'Ναύπλιο'],
    coordinates: [22.797, 37.566],
    layer: 'settlement',
    start: 1540,
    datePrecision: '1540 Osmanlı fethi; Mora Sancağı üssü',
    confidence: 'high',
    locationAccuracy: 'Palamidi kalesi ve liman kenti',
    source: 'src-eyice-yunanistan',
    summary: 'Ağa Paşa Camii (Vouleftiko) ve Büyük Cami (Trianon) ile ünlü Mora deniz kalesi ve erken başkenti.',
    current: 'Yunanistan Argolis ili sahil kenti ve ilk Yunan başkenti.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1540, text: 'Kasım Paşa tarafından Osmanlı idaresine alındı.', source: 'src-eyice-yunanistan' },
      { year: 1822, text: 'Kuşatma sonrası kale teslim oldu.', source: 'src-eyice-yunanistan' }
    ],
    observations: [
      {
        year: 1820,
        dimension: 'religion',
        text: 'İsyan öncesi Anabolu kale içi Müslüman nüfusu.',
        source: 'src-eyice-yunanistan',
        values: [{ label: 'Müslüman Nüfus', value: 8000 }],
        unit: 'kişi',
        scope: 'Anabolu kale içi ve liman'
      }
    ]
  },
  {
    id: 'reg-patras',
    name: 'Balya Badra',
    modern: 'Patras',
    aliases: ['Badra', 'Patrai', 'Πάτρα'],
    coordinates: [21.735, 38.246],
    layer: 'settlement',
    start: 1458,
    datePrecision: '1458 Fatih Sultan Mehmed fethi',
    confidence: 'high',
    locationAccuracy: 'Kale ve liman',
    source: 'src-eyice-yunanistan',
    summary: 'Kuzeybatı Mora’nın ana ticaret limanı ve kalesi. 16. yüzyıl Osmanlı hamamı günümüzde halen aktif çalışan tek Osmanlı halk hamamıdır.',
    current: 'Yunanistan’ın üçüncü büyük şehri ve Batı Yunanistan bölge merkezi.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1458, text: 'Fatih Sultan Mehmed tarafından fethedildi.', source: 'src-eyice-yunanistan' }
    ],
    observations: [
      {
        year: 1820,
        dimension: 'religion',
        text: 'İsyan öncesi Badra kasabası Müslüman tahmini.',
        source: 'src-eyice-yunanistan',
        values: [{ label: 'Müslüman Ahali', value: 5000 }],
        unit: 'kişi',
        scope: 'Balya Badra kasabası'
      }
    ]
  },
  {
    id: 'reg-chania',
    name: 'Hanya',
    modern: 'Chania',
    aliases: ['Canea', 'La Canea', 'Χανιά'],
    coordinates: [24.018, 35.514],
    layer: 'settlement',
    start: 1645,
    datePrecision: '1645 fethi; Girit Vilayeti merkezi',
    confidence: 'high',
    locationAccuracy: 'Venedik-Osmanlı limanı ve kale',
    source: 'src-girit-sayim-1881',
    summary: 'Küçük Hasan Paşa (Yalı) Camisi, Hünkâr Camii ve Venedik limanındaki tabyalarıyla 250 yıl boyunca Girit Vilayeti başkenti.',
    current: 'Yunanistan Girit adası Hanya ili merkezi.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1645, text: 'Gazi Hüseyin Paşa tarafından fethedildi ve Girit valiliği kuruldu.', source: 'src-girit-sayim-1881' },
      { year: 1881, text: 'Girit Vilayeti resmî genel nüfus sayımı yapıldı.', source: 'src-girit-sayim-1881' },
      { year: 1923, text: 'Lozan Mübadelesi ile tüm Girit Müslümanları Türkiye’ye göç ettirildi.', source: 'src-lozan-1923' }
    ],
    observations: [
      {
        year: 1881,
        dimension: 'religion',
        text: '1881 Girit Vilayeti resmî sayımı Hanya kenti nüfusu; Müslümanlar şehirde çoğunluktaydı.',
        source: 'src-girit-sayim-1881',
        values: [
          { label: 'Müslüman (Giritli Müslümanlar)', value: 9800 },
          { label: 'Hıristiyan Rum', value: 4200 }
        ],
        unit: 'kişi',
        scope: 'Hanya şehir merkezi (%70 Müslüman)'
      }
    ]
  },
  {
    id: 'reg-heraklion',
    name: 'Kandiye',
    modern: 'Heraklion',
    aliases: ['Candia', 'Iraklio', 'Ηράκλειο'],
    coordinates: [25.133, 35.338],
    layer: 'settlement',
    start: 1669,
    datePrecision: '1669 Köprülü Fazıl Ahmed Paşa fethi (21 yıllık kuşatma sonu)',
    confidence: 'high',
    locationAccuracy: 'Devasa Venedik-Osmanlı surları ve liman',
    source: 'src-girit-sayim-1881',
    summary: 'Akdeniz tarihinin en uzun kuşatmasıyla fethedilen Girit metropolü. Vezir Camii (Agios Titos), Valide Sultan Camii ve çeşmeleriyle büyük Osmanlı merkezi.',
    current: 'Yunanistan Girit Özerk Bölgesi başkenti ve en büyük kenti.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1669, text: 'Sadrazam Köprülü Fazıl Ahmed Paşa şehri teslim aldı.', source: 'src-girit-sayim-1881' },
      { year: 1881, text: 'Resmî Girit sayımında Kandiye şehrinde ezici Müslüman çoğunluk tespit edildi.', source: 'src-girit-sayim-1881' },
      { year: 1923, text: 'Lozan Mübadelesi ile Kandiye Türkleri İzmir, Mersin ve Antalya’ya taşındı.', source: 'src-lozan-1923' }
    ],
    observations: [
      {
        year: 1881,
        dimension: 'religion',
        text: '1881 Girit resmî nüfus sayımı Kandiye kenti dökümü.',
        source: 'src-girit-sayim-1881',
        values: [
          { label: 'Müslüman (Girit Türkü)', value: 12500 },
          { label: 'Hıristiyan Rum', value: 3500 }
        ],
        unit: 'kişi',
        scope: 'Kandiye şehir merkezi (%78 Müslüman çoğunluk)'
      }
    ]
  },
  {
    id: 'reg-rethymno',
    name: 'Resmo',
    modern: 'Rethymno',
    aliases: ['Retimo', 'Ρέθυμνο'],
    coordinates: [24.474, 35.368],
    layer: 'settlement',
    start: 1646,
    datePrecision: '1646 fethi',
    confidence: 'high',
    locationAccuracy: 'Fortezza kalesi ve eski liman',
    source: 'src-girit-sayim-1881',
    summary: 'Fortezza Kalesi Sultan İbrahim Camii, Nerantze Camii ve Veli Paşa Camii ile Osmanlı minareler şehri.',
    current: 'Yunanistan Girit adası Resmo ili merkezi.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1646, text: 'Gazi Hüseyin Paşa tarafından fethedildi.', source: 'src-girit-sayim-1881' }
    ],
    observations: [
      {
        year: 1881,
        dimension: 'religion',
        text: '1881 Girit Vilayeti sayımı Resmo kenti dökümü.',
        source: 'src-girit-sayim-1881',
        values: [
          { label: 'Müslüman', value: 6200 },
          { label: 'Hıristiyan', value: 3100 }
        ],
        unit: 'kişi',
        scope: 'Resmo şehir merkezi (%67 Müslüman)'
      }
    ]
  },
  {
    id: 'reg-rhodes',
    name: 'Rodos',
    modern: 'Rhodes',
    aliases: ['Rodos Adası', 'Rodi', 'Ρόδος'],
    coordinates: [28.225, 36.443],
    layer: 'settlement',
    start: 1522,
    datePrecision: '1522 Kanuni Sultan Süleyman fethi; Cezayir-i Bahr-i Sefid Eyaleti merkezi',
    confidence: 'high',
    locationAccuracy: 'Sur içi eski şehir ve liman',
    source: 'src-tdv-kiel',
    summary: 'Kanuni fethiyle Osmanlı Ege adalarının (Cezayir-i Bahr-i Sefid) başkenti. Süleymaniye Camii, Recep Paşa Camii ve Hafız Ahmed Kütüphanesi ile zengin Türk mirası.',
    current: 'Yunanistan Oniki Adalar merkezi; faal Türk Müslüman cemaati ve vakıfları mevcuttur.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1522, text: 'Kanuni Sultan Süleyman Rodos Şövalyeleri’ni teslim alarak fethetti.', source: 'src-tdv-kiel' },
      { year: 1912, text: 'İtalya tarafından işgal edildi; 1947’ye kadar İtalyan yönetiminde kaldığı için 1923 Lozan Mübadelesi’nden muaf kaldı.', source: 'src-tdv-kiel' }
    ],
    observations: [
      {
        year: 1894,
        dimension: 'religion',
        text: 'Cezayir-i Bahr-i Sefid Salnâmesi Rodos kaza dökümü.',
        source: 'src-karpat-pop',
        values: [
          { label: 'Müslüman Türk', value: 12000 },
          { label: 'Rum Ortodoks', value: 16000 },
          { label: 'Musevi', value: 4000 }
        ],
        unit: 'kişi',
        scope: 'Rodos adası geneli'
      }
    ]
  },
  {
    id: 'reg-kos',
    name: 'İstanköy',
    modern: 'Kos',
    aliases: ['Coo', 'Stanchio', 'Κως'],
    coordinates: [27.289, 36.893],
    layer: 'settlement',
    start: 1523,
    datePrecision: '1523 Kanuni devri fethi',
    confidence: 'high',
    locationAccuracy: 'Hipokrat Çınarı ve Eleftherias meydanı',
    source: 'src-tdv-kiel',
    summary: 'Gazi Hasan Paşa Camii, Defterdar Camii ve Platani (Germe) köyüyle günümüze kadar Türk Müslüman varlığını koruyan Ege adası.',
    current: 'Yunanistan Oniki Adalar grubunda ada; faal Türk toplumu yaşamaktadır.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1523, text: 'Rodos fethinin ardından Osmanlı yönetimine girdi.', source: 'src-tdv-kiel' },
      { year: 1912, text: 'İtalyan idaresine geçti ve mübadele dışı kaldı.', source: 'src-tdv-kiel' }
    ],
    observations: [
      {
        year: 1894,
        dimension: 'religion',
        text: 'Salnâme-i Bahr-i Sefid İstanköy kazası nüfusu.',
        source: 'src-karpat-pop',
        values: [
          { label: 'Müslüman', value: 3000 },
          { label: 'Ortodoks', value: 7000 }
        ],
        unit: 'kişi',
        scope: 'İstanköy adası'
      }
    ]
  },
  {
    id: 'reg-mytilene',
    name: 'Midilli',
    modern: 'Mytilene',
    aliases: ['Lesbos', 'Metelino', 'Μυτιλήνη', 'Λέσβος'],
    coordinates: [26.555, 39.105],
    layer: 'settlement',
    start: 1462,
    datePrecision: '1462 Fatih Sultan Mehmed fethi; Barbaros Hayreddin Paşa memleketi',
    confidence: 'high',
    locationAccuracy: 'Kale ve Epano Skala semti',
    source: 'src-tdv-kiel',
    summary: 'Kaptanıderya Barbaros Hayreddin Paşa’nın doğduğu ada. Yeni Cami, Valide Camii ve Çarşı Hamamı ile canlı Osmanlı ticaret merkezi.',
    current: 'Yunanistan Kuzey Ege bölgesi ve Midilli ili merkezi.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1462, text: 'Fatih Sultan Mehmed tarafından fethedildi.', source: 'src-tdv-kiel' },
      { year: 1923, text: 'Lozan Mübadelesi ile Türk nüfus Ayvalık, Edremit ve İzmir’e nakledildi.', source: 'src-lozan-1923' }
    ],
    observations: [
      {
        year: 1894,
        dimension: 'religion',
        text: 'Cezayir-i Bahr-i Sefid Salnâmesi Midilli kazası nüfusu.',
        source: 'src-karpat-pop',
        values: [
          { label: 'Müslüman Türk', value: 18200 },
          { label: 'Rum Ortodoks', value: 72000 }
        ],
        unit: 'kişi',
        scope: 'Midilli adası kazası geneli'
      }
    ]
  },
  {
    id: 'reg-chios',
    name: 'Sakız',
    modern: 'Chios',
    aliases: ['Scio', 'Sakız Adası', 'Χίος'],
    coordinates: [26.136, 38.368],
    layer: 'settlement',
    start: 1566,
    datePrecision: '1566 Piyale Paşa fethi',
    confidence: 'high',
    locationAccuracy: 'Kale içi ve Vounaki meydanı',
    source: 'src-tdv-kiel',
    summary: 'Mecidiye Camii (Bizans Müzesi), Osmaniye Camii, Bayraklı Camii ve mermer çeşmeleriyle ünlü damla sakızı adası sancak merkezi.',
    current: 'Yunanistan Kuzey Ege Sakız ili merkezi.',
    currentAsOf: '2026 saha ve tarihsel tescil bağlamı',
    events: [
      { year: 1566, text: 'Piyale Paşa Cenevizlilerden fethederek Osmanlı sancağı yaptı.', source: 'src-tdv-kiel' },
      { year: 1923, text: 'Lozan Mübadelesi ile kale içi Türk nüfus Çeşme ve İzmir’e göç etti.', source: 'src-lozan-1923' }
    ],
    observations: [
      {
        year: 1894,
        dimension: 'religion',
        text: 'Salnâme-i Bahr-i Sefid Sakız kalesi ve şehri sayımı.',
        source: 'src-karpat-pop',
        values: [{ label: 'Müslüman (Kale İçi)', value: 1500 }],
        unit: 'kişi',
        scope: 'Sakız kale içi ve kasabası'
      }
    ]
  },

  // ==========================================
  // BÖLÜM 2: KÜLTÜREL MİRAS & YIKILAN ANITLAR
  // "Var olan, geçmişte yıkılan ve yerine ne inşa edildi ise dahil"
  // ==========================================

  // --- SELANİK ANITLARI ---
  {
    id: 'her-selanik-hamza-bey',
    name: 'Hamza Bey Camii (Alcázar)',
    modern: 'Hamza Bey Mosque (Alcazar Cinema)',
    aliases: ['Alcazar', 'Cami-i Kebir', 'Χαμζά Μπέη'],
    coordinates: [22.9421, 40.6373],
    layer: 'heritage',
    start: 1467,
    datePrecision: '1467/68 Hafsa Hatun (Hamza Bey kızı) inşası',
    confidence: 'high',
    locationAccuracy: 'Egnatia ve Venizelou caddeleri kesişimi köşe parseli',
    source: 'src-tdv-kiel',
    summary: 'Selanik’in en büyük Osmanlı camisi ve revaklı avlusu. 1467’de inşa edilmiş, 1620’de genişletilmiştir.',
    partialLoss: true,
    current: 'Cami minaresi 1923 mübadelesi sonrası yıktırıldı. Yapı 1928’de "Alcázar" adıyla sinema salonuna, iç mekanları ise onlarca yıl ayakkabıcı ve kumaşçı dükkanlarından oluşan bir alışveriş pasajına (çarşı) dönüştürüldü. Selanik Metrosu istasyon kazıları sırasında Yunanistan Kültür Bakanlığı’nca kamulaştırılıp restore edildi; günümüzde metro arkeolojik sergi salonu olarak hizmet vermektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1467, text: 'Gazi Hamza Bey kızı Hafsa Hatun tarafından cami ve medrese olarak inşa edildi.', source: 'src-tdv-kiel' },
      { year: 1923, text: 'Mübadelesi sonrası ibadete kapatıldı; minaresi yıktırıldı.', source: 'src-tdv-kiel' },
      { year: 1928, text: 'Binanın içine Alcázar Sineması inşa edildi ve ticari dükkanlara kiralandı.', source: 'src-greek-culture-monuments' },
      { year: 2023, text: 'Metro arkeoloji sergi alanı olarak restorasyonu tamamlandı.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-selanik-ishak-pasa',
    name: 'Alaca İmaret Camii (İshak Paşa)',
    modern: 'Alaca Imaret Mosque',
    aliases: ['İshak Paşa Camii', 'Αλατζά Ιμαρέτ'],
    coordinates: [22.9482, 40.6402],
    layer: 'heritage',
    start: 1484,
    datePrecision: '1484 Sadrazam İshak Paşa inşası',
    confidence: 'high',
    locationAccuracy: 'Kassandrou Caddesi üzerindeki tarihî ada',
    source: 'src-tdv-kiel',
    summary: 'Sadrazam İshak Paşa’nın imaret, medrese ve camiden oluşan vakfı. Baklava kabartmalı alaca minaresiyle meşhurdu.',
    partialLoss: true,
    current: 'Ünlü baklava desenli minaresi 1912 sonrasında kaidesine kadar yıktırıldı. Külliyenin müştemilatı yok oldu; avlusu etrafındaki modern apartman bloklarıyla daraltıldı. Cami ve imaret binası Selanik Belediyesi tarafından restore edilerek belediye kültür merkezi ve geçici sanat sergi salonu olarak kullanılmaktadır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1484, text: 'Sadrazam İshak Paşa vakfiyesiyle cami ve imaret tamamlandı.', source: 'src-tdv-kiel' },
      { year: 1912, text: 'Balkan Savaşı sonrası minare yıktırıldı.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-selanik-yeni-cami',
    name: 'Yeni Cami (Dönmeh Camisi)',
    modern: 'Yeni Mosque (Old Archaeological Museum)',
    aliases: ['Yeni Cami', 'Gení Tzamí', 'Γενί Τζαμί'],
    coordinates: [22.9556, 40.6133],
    layer: 'heritage',
    start: 1902,
    datePrecision: '1902 İtalyan Mimar Vitaliano Poselli tasarımı',
    confidence: 'high',
    locationAccuracy: 'Arkeoloji Müzesi Caddesi parseli',
    source: 'src-tdv-kiel',
    summary: 'Selanik Dönmeh (Avdetî/Sabbatean) cemaati için Oryantalist ve Neoklasik üslupta inşa edilen son büyük Osmanlı camisi.',
    partialLoss: true,
    current: 'Minaresi 1920’lerde söküldü. 1925 ile 1962 yılları arasında Selanik Arkeoloji Müzesi olarak kullanıldı (bahçesine antik heykeller ve lahitler yerleştirildi). Günümüzde Selanik Belediyesi Sergi Salonu ve Kültür Merkezi olarak faaliyet göstermektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1902, text: 'Vitaliano Poselli tasarımıyla ibadete açıldı.', source: 'src-tdv-kiel' },
      { year: 1925, text: 'Selanik Arkeoloji Müzesi’ne dönüştürüldü.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-selanik-burmali',
    name: 'Süleymaniye / Burmalı Camii',
    modern: 'Burmali Mosque of Thessaloniki (former site)',
    aliases: ['Burmalı Cami', 'Süleymaniye', 'Μπουρμαλί Τζαμί'],
    coordinates: [22.9405, 40.6415],
    layer: 'heritage',
    start: 1530,
    end: 1922,
    datePrecision: '1530 Kanuni devri inşası; 1922 sonrası yıkım',
    confidence: 'high',
    locationAccuracy: 'Dioikitiriou ve Dimitriou Karatasou sokakları kesişimindeki eski ada',
    source: 'src-tdv-kiel',
    summary: 'Spiral burmalı zarif minaresiyle Selanik silüetini süsleyen 16. yüzyıl klasik Osmanlı camisi.',
    lost: true,
    current: 'Cami ve minaresi 1920’li yıllarda tamamen yıktırıldı ve parseli yok edildi. Yerine modern çok katlı betonarme konut apartmanları (apartman blokları), zemin kat dükkanları ve asfalt yol inşa edilmiştir.',
    currentAsOf: '2026 kentsel durum doğrulaması',
    events: [
      { year: 1530, text: 'Kanuni devrinde burmalı minareli cami olarak kuruldu.', source: 'src-tdv-kiel' },
      { year: 1922, text: 'Mübadele ve kentsel dönüşüm sürecinde tamamen yıkıldı.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-selanik-yali',
    name: 'Selanik Yalı Camii (Sahil Kordonu)',
    modern: 'Yali Mosque (Waterfront Promenade site)',
    aliases: ['Yalı Camisi', 'Sahil Camii', 'Τζαμί Γιαλί'],
    coordinates: [22.9410, 40.6330],
    layer: 'heritage',
    start: 1750,
    end: 1918,
    datePrecision: '18. yüzyıl sahil camisi; 1917 yangını sonrası yıkım',
    confidence: 'medium',
    locationAccuracy: 'Nikis Caddesi sahil kordonu hizası',
    source: 'src-tdv-kiel',
    summary: 'Osmanlı Selanik limanı ve kordon boyunda deniz kenarında yer alan yalı mescidi.',
    lost: true,
    current: '1917 Büyük Selanik yangını sonrasında Fransız mimar Ernest Hébrard’ın modern imar planı çerçevesinde tamamen yıktırıldı. Yerine günümüz Nikis Caddesi geniş sahil yürüyüş kordonu, deniz promenadı ve modern neoklasik/modernist binalar inşa edildi.',
    currentAsOf: '2026 kentsel durum doğrulaması',
    events: [
      { year: 1750, text: 'Sahil boyunda denizciler ve gümrük için inşa edildi.', source: 'src-tdv-kiel' },
      { year: 1918, text: 'Ernest Hébrard kentsel planı uyarınca yıkıldı.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-selanik-bey-hamami',
    name: 'Bey Hamamı (Loutra Paradeisos)',
    modern: 'Bey Hamam (Baths of Paradise)',
    aliases: ['Loutra Paradeisos', 'Murad Hamamı', 'Μπέη Χαμάμ'],
    coordinates: [22.9443, 40.6367],
    layer: 'heritage',
    start: 1444,
    datePrecision: '1444 Sultan II. Murad inşası',
    confidence: 'high',
    locationAccuracy: 'Egnatia Caddesi üzerinde Panagia Chalkeon yanı',
    source: 'src-tdv-kiel',
    summary: 'Sultan II. Murad tarafından 1444’te yaptırılan, Yunanistan’daki en büyük ve en görkemli Osmanlı çifte hamamı.',
    current: '1968 yılına kadar "Loutra Paradeisos" (Cennet Hamamları) adıyla aktif halk hamamı olarak hizmet vermiştir. Yunanistan Arkeoloji Servisi tarafından restore edilmiş olup günümüzde kültürel etkinlikler, sanat sergileri ve müze mekanı olarak kullanılmaktadır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1444, text: 'Sultan II. Murad emriyle çifte hamam olarak inşa edildi.', source: 'src-tdv-kiel' },
      { year: 1968, text: 'Aktif hamam olarak işletmesi sona erdi ve koruma altına alındı.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-selanik-yeni-hamam',
    name: 'Yeni Hamam / Aigli',
    modern: 'Yeni Hamam (Aigli Complex)',
    aliases: ['Pazar Hamamı', 'Aigli', 'Γενί Χαμάμ'],
    coordinates: [22.9478, 40.6409],
    layer: 'heritage',
    start: 1580,
    datePrecision: '16. yüzyıl sonu Hüsrev Kethüda vakfı',
    confidence: 'high',
    locationAccuracy: 'Agios Dimitrios ve Kassandrou caddeleri arası',
    source: 'src-tdv-kiel',
    summary: 'Klasik Osmanlı dönemi kubbeli çifte hamamı.',
    current: 'Hamam yapısı korunmuştur; içine ve avlusuna "Aigli Geni Hamam" adıyla açık hava yazlık sineması, kafe, bar ve geleneksel taverna eğlence kompleksi inşa edilerek dönüştürülmüştür.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1580, text: 'Hüsrev Kethüda vakfı olarak inşa edildi.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-selanik-kasimiye',
    name: 'Kasımiye Camii (Agios Dimitrios)',
    modern: 'Church of Saint Demetrios (former Kasimiye Mosque)',
    aliases: ['Agios Dimitrios', 'Kasımiye', 'Άγιος Δημήτριος'],
    coordinates: [22.9472, 40.6389],
    layer: 'heritage',
    start: 1493,
    datePrecision: '1493 II. Bayezid devri camiye dönüşüm; 1912 geri dönüşüm',
    confidence: 'high',
    locationAccuracy: 'Agios Dimitrios Caddesi ana bazilika parseli',
    source: 'src-tdv-kiel',
    summary: '1493 yılında camiye çevrilen ve güneybatı köşesine Osmanlı minaresi eklenen ulu mabet.',
    partialLoss: true,
    current: '1912’de Selanik’in Yunanistan’a geçmesiyle yeniden kiliseye dönüştürüldü. Osmanlı minaresi 1917 büyük yangını sonrası yıktırıldı; günümüzde UNESCO Dünya Mirası listesinde Aziz Dimitrios Bazilikası olarak ibadete açıktır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1493, text: 'Camiye dönüştürüldü ve minare inşa edildi.', source: 'src-tdv-kiel' },
      { year: 1912, text: 'Kiliseye geri dönüştürüldü; minare sonradan kaldırıldı.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-selanik-hortac',
    name: 'Sultan Hortac Camii (Rotonda)',
    modern: 'Rotunda of Galerius (former Hortaci Suleyman Mosque)',
    aliases: ['Hortacı Süleyman Efendi Camii', 'Rotonda', 'Ροτόντα'],
    coordinates: [22.9528, 40.6331],
    layer: 'heritage',
    start: 1590,
    datePrecision: '1590 Şeyh Hortacı Sinan Efendi cami dönüşümü',
    confidence: 'high',
    locationAccuracy: 'Galerius Zafer Takı kuzeyi Rotonda anıtı',
    source: 'src-tdv-kiel',
    summary: 'Roma imparatorluk yapısının camiye dönüştürülmesiyle kurulan külliye. Yanındaki minare Selanik merkezinde ayakta kalan yegane Osmanlı minaresidir.',
    partialLoss: true,
    current: 'Yapı 1912’de müzeye dönüştürüldü. Minarenin sivri külahı 20. yüzyılda yıkılmış olsa da minare gövdesi Selanik merkezinde ayakta kalan tek Osmanlı minaresi olarak korunmaktadır; yapı anıt müze olarak açıktır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1590, text: 'Camiye dönüştürüldü ve yanına yüksek minare eklendi.', source: 'src-tdv-kiel' },
      { year: 1912, text: 'Anıt müzeye dönüştürüldü; minare gövdesi korundu.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-selanik-beyaz-kule',
    name: 'Beyaz Kule (Ak Kule)',
    modern: 'White Tower of Thessaloniki',
    aliases: ['Lefkos Pyrgos', 'Kalamaria Kulesi', 'Kanlı Kule', 'Λευκός Πύργος'],
    coordinates: [22.9485, 40.6263],
    layer: 'heritage',
    start: 1535,
    datePrecision: '1535 Kanuni Sultan Süleyman devri Mimar Sinan ekolü',
    confidence: 'high',
    locationAccuracy: 'Sahil şeridi ve deniz surları kesişimi',
    source: 'src-tdv-kiel',
    summary: 'Osmanlı deniz surlarının ana savunma burcu, yeniçeri garnizonu ve cezaevi. Şehrin simgesi.',
    current: '1912 yılında Osmanlı garnizonu çekildikten sonra beyaz badana yapılarak "Beyaz Kule" adı verildi; etrafındaki Osmanlı dış surları yıkılarak deniz parkı yapıldı. Kule günümüzde Selanik Kent Tarihi Müzesi olarak hizmet vermektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1535, text: 'Kanuni devrinde sahil tahkimatı olarak inşa edildi.', source: 'src-tdv-kiel' },
      { year: 1912, text: 'Şehrin Yunan idaresine geçmesiyle kule müzeleştirildi.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },

  // --- BATI TRAKYA ANITLARI ---
  {
    id: 'her-gumulcine-imaret',
    name: 'Gazi Evrenos Bey İmareti',
    modern: 'Imaret of Komotini (Ecclesiastical Museum)',
    aliases: ['Evrenos İmareti', 'Εκκλησιαστικό Μουσείο Κομοτηνής'],
    coordinates: [25.4055, 41.1192],
    layer: 'heritage',
    start: 1365,
    datePrecision: '1364–1382 Gazi Evrenos Bey inşası',
    confidence: 'high',
    locationAccuracy: 'Tarihî kale surları dışındaki eski vakıf külliyesi',
    source: 'src-turan-gokce',
    summary: 'Avrupa ve Balkanlar’da ayakta kalan en eski Osmanlı kamu yapılarından biridir. Aşevi, misafirhane ve zaviye olarak hizmet vermiştir.',
    partialLoss: true,
    current: '1924 yılında binanın bir kısmı özel bir işletmeye devredilerek buz fabrikasına (ice factory) dönüştürüldü; daha sonra 1973 yılına kadar bölge elektrik idaresi santrali ve ambarı olarak kullanıldı. 1999 yılında restore edilerek Gümülcine Piskoposluk/Kilise Müzesi (Ecclesiastical Museum) haline getirildi.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1365, text: 'Gazi Evrenos Bey tarafından imaret ve aşevi olarak kuruldu.', source: 'src-turan-gokce' },
      { year: 1924, text: 'Buz fabrikasına ve elektrik şirketine dönüştürüldü.', source: 'src-greek-culture-monuments' },
      { year: 1999, text: 'Kilise Müzesi olarak restore edildi.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-gumulcine-yeni-cami',
    name: 'Gümülcine Yeni Cami & Saat Kulesi',
    modern: 'Yeni Mosque and Clock Tower of Komotini',
    aliases: ['Yeni Cami', 'Saat Kulesi', 'Γενί Τζαμί Κομοτηνής'],
    coordinates: [25.4022, 41.1198],
    layer: 'heritage',
    start: 1585,
    datePrecision: '1585 Defterdar Ahmed Paşa inşası; 1884 saat kulesi',
    confidence: 'high',
    locationAccuracy: 'Gümülcine çarşı merkezi',
    source: 'src-turan-gokce',
    summary: 'Defterdar Ahmed Paşa tarafından yaptırılan külliye ve 1884 Sultan II. Abdülhamid devri saat kulesi. Batı Trakya Türklerinin ana ibadet merkezidir.',
    current: 'Cami ve hemen yanındaki saat kulesi bütünüyle sağlam olup Batı Trakya Türk Müslüman cemaatinin faal ibadethanesidir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1585, text: 'Defterdar Ahmed Paşa tarafından cami inşa edildi.', source: 'src-turan-gokce' },
      { year: 1884, text: 'Sultan II. Abdülhamid adına saat kulesi ilave edildi.', source: 'src-salname-edirne-1894' }
    ],
    observations: []
  },
  {
    id: 'her-dimetoka-celebi-cami',
    name: 'Çelebi Sultan Mehmed Camii (Büyük Cami)',
    modern: 'Bayezid / Mehmed I Mosque of Didymoteicho',
    aliases: ['Büyük Cami', 'Çelebi Mehmed Camii', 'Τέμενος Βayezid'],
    coordinates: [26.4950, 41.3497],
    layer: 'heritage',
    start: 1420,
    datePrecision: '1420 Çelebi Sultan Mehmed inşası, II. Murad tamamlama',
    confidence: 'high',
    locationAccuracy: 'Dimetoka merkez meydanı',
    source: 'src-tdv-kiel',
    summary: 'Avrupa kıtasında inşa edilen ilk büyük anıtsal erken Osmanlı selatin camisi. Meşe ahşap piramidal çatısı ve tek minaresiyle mimarlık şaheseridir.',
    partialLoss: true,
    current: '2017 yılında çatı restorasyonu sırasında çıkan büyük yangında tarihî meşe ahşap çatısı hasar gördü. Yunanistan Kültür Bakanlığı ve uluslararası uzmanlar tarafından kapsamlı rekonstrüksiyon ve restorasyon çalışması yürütülmektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1420, text: 'I. Mehmed (Çelebi) emriyle Mimar Hacı İvaz Paşa tarafından tamamlandı.', source: 'src-tdv-kiel' },
      { year: 2017, text: 'Çatıda yangın meydana geldi; restorasyon başlatıldı.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-dimetoka-oruc-pasa',
    name: 'Oruç Paşa Hamamı (Fısıltı Hamamı)',
    modern: 'Oruc Pasha Hamam (Baths of Whispers)',
    aliases: ['Fısıltı Hamamı', 'Hamam Oruç Paşa', 'Λουτρά των Ψιθύρων'],
    coordinates: [26.4942, 41.3486],
    layer: 'heritage',
    start: 1398,
    datePrecision: '1398 Oruç Paşa inşası',
    confidence: 'high',
    locationAccuracy: 'Kızıldeli çayı kenarı Dimetoka',
    source: 'src-tdv-kiel',
    summary: '1398 yılında inşa edilmiş, Yunanistan ve tüm Avrupa kıtasında ayakta kalan EN ESKİ Osmanlı hamamıdır.',
    partialLoss: true,
    current: 'Kubbesi ve duvarları sağlam vaziyette ayaktadır; Yunanistan Kültür Bakanlığı tescilli anıtı olarak restorasyon ve koruma programındadır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1398, text: 'Beylerbeyi Oruç Paşa tarafından inşa edildi.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-rusenler-tekke',
    name: 'Seyyid Ali Sultan (Kızıldeli) Tekkesi',
    modern: 'Seyyid Ali Sultan Tekke of Roussa',
    aliases: ['Kızıldeli Tekkesi', 'Τεκές Σεγίτ Αλή Σουλτάν'],
    coordinates: [26.1520, 41.3140],
    layer: 'heritage',
    start: 1402,
    datePrecision: '1402 Seyyid Ali Sultan kuruluşu',
    confidence: 'high',
    locationAccuracy: 'Dimetoka Ruşenler köyü kırsal tepe',
    source: 'src-turan-gokce',
    summary: 'Rumeli’nin fethinde kilit rol oynayan gazi derviş Seyyid Ali Sultan (Kızıldeli) dergahı. Balkan Bektaşiliğinin kurucu merkezidir.',
    current: 'Türbesi, aşevi, meydanevi ve ulu çınarıyla ayaktadır; Batı Trakya Alevi-Bektaşi Türk toplumunun faal inanç ve ziyaret merkezidir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1402, text: 'Seyyid Ali Sultan tarafından zaviye ve tekke tesis edildi.', source: 'src-turan-gokce' }
    ],
    observations: []
  },

  // --- KAVALA, DRAMA VE SEREZ ANITLARI ---
  {
    id: 'her-kavala-imaret',
    name: 'Kavalalı Mehmed Ali Paşa İmareti',
    modern: 'Imaret of Kavala (Imaret Luxury Hotel)',
    aliases: ['Kavala İmareti', 'Ιμαρέτ Καβάλας'],
    coordinates: [24.4140, 40.9328],
    layer: 'heritage',
    start: 1817,
    datePrecision: '1817–1821 Kavalalı Mehmed Ali Paşa inşası',
    confidence: 'high',
    locationAccuracy: 'Kavala Panagia yarımadası batı yamacı',
    source: 'src-tdv-kiel',
    summary: '18 kurşunlu kubbesi, medreseleri, aşevleri ve kütüphaneleriyle geç Osmanlı mimarlığının en anıtsal ve lüks külliyesi.',
    partialLoss: true,
    current: '1920’li yıllarda Türkiye’den gelen Rum mültecilerin barınağı olarak kullanıldı ve harap oldu. 2004 yılında Mısır Vakıflar Bakanlığı mülkiyeti korunarak özel sektörce restore edildi; günümüzde lüks bir tarihî butik otel ("Imaret Hotel") ve kültürel anıt olarak işletilmektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1817, text: 'Mısır Valisi Kavalalı Mehmed Ali Paşa memleketine vakıf olarak inşa ettirdi.', source: 'src-tdv-kiel' },
      { year: 1923, text: 'Mübadele sonrası mülteci barınağına dönüştürüldü.', source: 'src-tdv-kiel' },
      { year: 2004, text: 'Restore edilerek butik otel ve kültür mekanı yapıldı.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-kavala-ibrahim-pasa',
    name: 'Pargalı İbrahim Paşa Camii (Agios Nikolaos)',
    modern: 'Ibrahim Pasha Mosque (Church of Saint Nicholas)',
    aliases: ['İbrahim Paşa Camii', 'Άγιος Νικόλαος Καβάλας'],
    coordinates: [24.4125, 40.9350],
    layer: 'heritage',
    start: 1530,
    datePrecision: '1530 Pargalı Sadrazam İbrahim Paşa inşası',
    confidence: 'high',
    locationAccuracy: 'Kavala limanı eski mahalle meydanı',
    source: 'src-tdv-kiel',
    summary: 'Sadrazam Pargalı Damat İbrahim Paşa tarafından Kanuni adına yaptırılan anıtsal liman camisi.',
    partialLoss: true,
    current: '1926 yılında Yunan Ortodoks Kilisesi’ne devredilerek Aziz Nikolaos Kilisesi’ne (Agios Nikolaos) dönüştürüldü. Osmanlı minaresinin kaidesi kesilerek üzerine kilise çan kulesi inşa edilmiştir; bina aktif kilise olarak hizmet vermektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1530, text: 'Pargalı İbrahim Paşa tarafından cami inşa edildi.', source: 'src-tdv-kiel' },
      { year: 1926, text: 'Aziz Nikolaos Kilisesi’ne çevrildi, minare kaidesi çan kulesi yapıldı.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-kavala-su-kemeri',
    name: 'Kanuni Sultan Süleyman Su Kemeri (Kamares)',
    modern: 'Kavala Aqueduct (Kamares)',
    aliases: ['Kamares', 'Kanuni Su Kemeri', 'Καμάρες Καβάλας'],
    coordinates: [24.4138, 40.9385],
    layer: 'heritage',
    start: 1530,
    datePrecision: '1530–1536 Kanuni Sultan Süleyman inşası',
    confidence: 'high',
    locationAccuracy: 'Eski şehir ile yeni şehir arasındaki vadi',
    source: 'src-tdv-kiel',
    summary: '280 metre uzunluğunda ve 25 metre yüksekliğinde iki katlı 60 kemerli anıtsal Osmanlı su mühendisliği şaheseri.',
    current: 'Şehrin merkezinde tamamen sağlam olarak ayaktadır; Kavala’nın simge anıtı olarak korunmaktadır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1530, text: 'Kanuni emriyle şehre içme suyu getirmek için inşa edildi.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-drama-arap-cami',
    name: 'Arap Camii',
    modern: 'Arap Mosque of Drama',
    aliases: ['Arap Camisi', 'Αράπ Τζαμί Δράμας'],
    coordinates: [24.1438, 41.1508],
    layer: 'heritage',
    start: 1855,
    datePrecision: '1855–1875 Geç Osmanlı dönemi inşası',
    confidence: 'high',
    locationAccuracy: 'Drama eski ticaret çarşısı',
    source: 'src-tdv-kiel',
    summary: 'Drama’nın geç Osmanlı dönemi kubbeli camisi.',
    partialLoss: true,
    current: 'Minaresi yıkılmıştır. 1920’li yıllarda dans salonuna ve marangoz atölyesine dönüştürüldü; daha sonra uzun yıllar özel mülkiyette depo olarak kullanıldı. Yunanistan Kültür Bakanlığı tarafından 2021–2023 yıllarında kamulaştırılıp restore edildi; belediye kültür ve sergi merkezi olarak hizmete açıldı.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1855, text: 'Tütün tüccarları ve cemaat tarafından inşa edildi.', source: 'src-tdv-kiel' },
      { year: 1924, text: 'Dans salonu ve atölyeye çevrildi.', source: 'src-greek-culture-monuments' },
      { year: 2023, text: 'Restorasyonu tamamlanıp kültür merkezi yapıldı.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-drama-halil-bey',
    name: 'Halil Bey Camii ve Külliyesi',
    modern: 'Halil Bey Mosque site of Drama',
    aliases: ['Halil Bey Camii', 'Drama Çarşı Camii'],
    coordinates: [24.1465, 41.1525],
    layer: 'heritage',
    start: 1520,
    end: 1925,
    datePrecision: '16. yüzyıl inşası; 1925 yıkım',
    confidence: 'medium',
    locationAccuracy: 'Drama merkez meydanı çevresi',
    source: 'src-tdv-kiel',
    summary: 'Drama’nın 16. yüzyıl çarşı camisi ve medresesi.',
    lost: true,
    current: 'Cami ve külliye 1925 sonrasında tamamen yıktırıldı. Yerine modern Drama Belediye Meydanı, belediye otoparkı, çevre yolları ve ticari betonarme binalar inşa edilmiştir.',
    currentAsOf: '2026 kentsel durum doğrulaması',
    events: [
      { year: 1520, text: 'Halil Bey tarafından vakıf olarak inşa edildi.', source: 'src-tdv-kiel' },
      { year: 1925, text: 'Tamamen yıktırılarak parseli modern meydana katıldı.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-serez-bedesten',
    name: 'Çandarlı İbrahim Paşa Bedesteni',
    modern: 'Bedesten of Serres (Archaeological Museum)',
    aliases: ['Serez Bedesteni', 'Μπεζεστένι Σερρών'],
    coordinates: [23.5488, 41.0908],
    layer: 'heritage',
    start: 1485,
    datePrecision: '1485–1499 Çandarlı İbrahim Paşa inşası',
    confidence: 'high',
    locationAccuracy: 'Eleftherias Meydanı merkezi',
    source: 'src-tdv-kiel',
    summary: 'Sadrazam Çandarlı İbrahim Paşa’nın 6 kubbeli anıtsal bedesteni. Osmanlı Rumelisinin en önemli kumaş ve kıymetli mal ticaret merkezi.',
    current: 'Tamamen sağlam vaziyette ayaktadır; Yunanistan Kültür Bakanlığı tarafından restore edilmiş olup Serez Arkeoloji Müzesi (Archaeological Museum of Serres) olarak hizmet vermektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1485, text: 'Çandarlı İbrahim Paşa tarafından inşa ettirildi.', source: 'src-tdv-kiel' },
      { year: 1970, text: 'Serez Arkeoloji Müzesi olarak kullanılmaya başlandı.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-serez-mehmed-bey',
    name: 'Mehmed Bey Camii (Ahmet Paşa / Vilayet Camii)',
    modern: 'Mehmed Bey Mosque of Serres',
    aliases: ['Ahmed Paşa Camii', 'Τέμενος Μεχμέτ Μπέη'],
    coordinates: [23.5602, 41.0855],
    layer: 'heritage',
    start: 1492,
    datePrecision: '1492 Mehmed Bey inşası',
    confidence: 'high',
    locationAccuracy: 'Serez dere yatağı kenarı park alanı',
    source: 'src-tdv-kiel',
    summary: '1492 tarihli devasa kubbeli erken Osmanlı camisi. Kusursuz kesme taş işçiliği ve akustik tonozlarıyla Balkanların en seçkin mimari abidelerindendir.',
    partialLoss: true,
    current: 'Minaresi yıkılmış ve nehir taşkınları sebebiyle uzun yıllar terkedilmiş vaziyette kalmıştır; günümüzde Yunanistan Kültür Bakanlığı koruması altındadır ve çevre düzenlemesi ile kurtarma restorasyonu sürmektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1492, text: 'Mehmed Bey tarafından inşa edildi.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-serez-zincirli',
    name: 'Zincirli Camii',
    modern: 'Zincirli Mosque of Serres',
    aliases: ['Eski Cami', 'Ζιντζιρλί Τζαμί'],
    coordinates: [23.5512, 41.0920],
    layer: 'heritage',
    start: 1590,
    datePrecision: '16. yüzyıl sonu Mimar Sinan ekolü',
    confidence: 'high',
    locationAccuracy: 'Serez kent içi sokak dokusu',
    source: 'src-tdv-kiel',
    summary: 'Selçuklu ve erken Osmanlı revak geleneğini yaşatan iki katlı revaklı kubbeli klasik cami.',
    partialLoss: true,
    current: 'Minaresinin külahı eksik olmakla beraber gövdesi sağlamdır. AB fonları ve Yunan Devleti işbirliğiyle 2010’lu yıllarda bütünüyle restore edilmiş olup kültürel sergiler ve konferanslar için kullanılmaktadır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1590, text: 'Klasik dönem üslubunda inşa edildi.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },

  // --- ORTA VE BATI MAKEDONYA ANITLARI ---
  {
    id: 'her-yenice-vardar-evrenos',
    name: 'Gazi Evrenos Bey Türbesi',
    modern: 'Mausoleum of Gazi Evrenos Bey',
    aliases: ['Evrenos Türbesi', 'Μαυσωλείο Γαζή Εβρενός'],
    coordinates: [22.4080, 40.7920],
    layer: 'heritage',
    start: 1417,
    datePrecision: '1417 inşa ve 19. yüzyıl onarımı',
    confidence: 'high',
    locationAccuracy: 'Giannitsa merkez parkı yakınındaki türbe alanı',
    source: 'src-tdv-kiel',
    summary: 'Rumeli Fatihi Gazi Evrenos Bey’in ebedi istirahatgahı olan anıtsal türbe.',
    current: 'Yunanistan Kültür Bakanlığı tarafından 2000’li yıllarda restore edilmiş olup koruma altındaki tarihî anıt olarak ziyarete açıktır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1417, text: 'Gazi Evrenos Bey için türbe inşa edildi.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-karaferye-hunkar',
    name: 'Hünkâr Camii (Büyük Cami)',
    modern: 'Hunkar Mosque of Veria',
    aliases: ['Eski Cami', 'Karaferye Hünkâr Camii', 'Χουνκάρ Τζαμί Βέροιας'],
    coordinates: [22.2025, 40.5235],
    layer: 'heritage',
    start: 1430,
    datePrecision: '1430 Osmanlı fethi sonrası camiye dönüşüm',
    confidence: 'high',
    locationAccuracy: 'Karaferye merkez eski mahalle',
    source: 'src-tdv-kiel',
    summary: '1430 fethinde camiye dönüştürülüp minare eklenen ulu cami.',
    partialLoss: true,
    current: 'Minaresi 1920’lerde yıktırıldı. Yapı Yunanistan Arkeoloji Servisi gözetiminde restore edilmiş olup tarihî anıt olarak muhafaza edilmektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1430, text: 'Camiye dönüştürüldü ve minare inşa edildi.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-vodina-yeni-cami',
    name: 'Vodina Yeni Cami',
    modern: 'Yeni Mosque of Edessa',
    aliases: ['Yeni Cami Edessa', 'Γενί Τζαμί Έδεσσας'],
    coordinates: [22.0465, 40.8032],
    layer: 'heritage',
    start: 1904,
    datePrecision: '1904 inşası',
    confidence: 'high',
    locationAccuracy: 'Edessa merkez parkı yanı',
    source: 'src-tdv-kiel',
    summary: 'Vodina’da ayakta kalan tek Osmanlı camisi. Neoklasik bezemeli kubbesiyle dikkat çeker.',
    partialLoss: true,
    current: 'Minaresinin şerefeden yukarısı yıkılmıştır. 1940–1960’larda yerel arkeoloji deposu olarak kullanıldı; günümüzde restore edilmiş koruma altındaki belediye anıtıdır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1904, text: 'Son dönem Osmanlı kamu camisi olarak inşa edildi.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-vodina-eski-cami',
    name: 'Vodina Eski Cami',
    modern: 'Old Mosque of Edessa (former site)',
    aliases: ['Eski Cami', 'Vodina Çarşı Camii'],
    coordinates: [22.0480, 40.8015],
    layer: 'heritage',
    start: 1480,
    end: 1924,
    datePrecision: '15. yüzyıl sonu; 1924 sonrası yıkım',
    confidence: 'medium',
    locationAccuracy: 'Vodina çarşı meydanı eski parseli',
    source: 'src-tdv-kiel',
    summary: 'Vodina fethinden sonra çarşı merkezine inşa edilen ilk cuma camisi.',
    lost: true,
    current: '1923 Lozan Mübadelesi sonrasında 1924–1928 yıllarında yıktırıldı. Yerine modern çarşı ticaret binaları, dükkanlar ve belediye otoparkı/meydanı inşa edilmiştir.',
    currentAsOf: '2026 kentsel durum doğrulaması',
    events: [
      { year: 1480, text: 'Osmanlı cuma camisi olarak inşa edildi.', source: 'src-tdv-kiel' },
      { year: 1924, text: 'Mübadele sonrası yıktırıldı ve parseli ticari kullanıma açıldı.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-filorina-yakup-bey',
    name: 'Yakup Bey Camii',
    modern: 'Yakup Bey Mosque of Florina (former site)',
    aliases: ['Yakup Bey Camisi', 'Τζαμί Γιακούπ Μπέη'],
    coordinates: [21.4080, 40.7815],
    layer: 'heritage',
    start: 1485,
    end: 1935,
    datePrecision: '15. yüzyıl sonu; 1935 civarı tam yıkım',
    confidence: 'medium',
    locationAccuracy: 'Florina merkez çay kenarı eski ada',
    source: 'src-tdv-kiel',
    summary: 'Filorina’nın ana kubbeli Osmanlı camisi ve medresesi.',
    lost: true,
    current: '1912 Balkan Savaşı sonrası minaresi yıkıldı; ana kubbeli bina belediye zahire/tahıl deposu olarak kullanıldıktan sonra 1930’lu yıllarda tamamen yıktırıldı. Yerine günümüz şehir parkı, cadde genişletmesi ve kamu konut alanları yapılmıştır.',
    currentAsOf: '2026 kentsel durum doğrulaması',
    events: [
      { year: 1485, text: 'Yakup Bey tarafından inşa edildi.', source: 'src-tdv-kiel' },
      { year: 1935, text: 'Depo olarak kullanıldıktan sonra tamamen yıkıldı.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-kesriye-kursunlu',
    name: 'Kurşunlu Camii',
    modern: 'Kursum Mosque of Kastoria',
    aliases: ['Kurşunlu Cami Kesriye', 'Κουρσούμ Τζαμί Καστοριάς'],
    coordinates: [21.2660, 40.5180],
    layer: 'heritage',
    start: 1490,
    datePrecision: '15. yüzyıl sonu inşası',
    confidence: 'high',
    locationAccuracy: 'Kastoria gölü yamacı Mitropoleos caddesi civarı',
    source: 'src-tdv-kiel',
    summary: 'Kesriye’de ayakta kalan tek Osmanlı camisi. Kurşun kubbesi ve kesme taş minare kaidesiyle dikkat çeker.',
    partialLoss: true,
    current: 'Minaresinin üst bölümü yıkılmış olup yapının kendisi harap haldedir; Yunanistan Kültür Bakanlığı mülkiyetinde koruma altındaki tarihî anıt statüsündedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1490, text: 'Osmanlı kaza camisi olarak inşa edildi.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },

  // --- TESALYA ANITLARI ---
  {
    id: 'her-larissa-bedesten',
    name: 'Bedesten-i Yenişehir (Larissa Bedesteni)',
    modern: 'Bedesten of Larissa',
    aliases: ['Yenişehir Bedesteni', 'Μπεζεστένι Λάρισας'],
    coordinates: [22.4150, 39.6415],
    layer: 'heritage',
    start: 1480,
    datePrecision: '15. yüzyıl sonu Gazi Ömer Bey inşası',
    confidence: 'high',
    locationAccuracy: 'Frourio tepesi akropol alanı',
    source: 'src-tdv-kiel',
    summary: 'Tesalya’nın fatihi Turahanoğlu Gazi Ömer Bey tarafından yaptırılan 15. yüzyıl bedesteni. Şehrin ticaret kalbi ve kalesi.',
    current: '19. yüzyılda cephanelik ve tahkimat olarak kullanıldı. Masif taş duvarları ayakta olup Frourio arkeolojik parkı içinde koruma altındadır; restorasyon projesi yürütülmektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1480, text: 'Gazi Ömer Bey tarafından inşa ettirildi.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-larissa-bayrakli',
    name: 'Bayraklı Camii',
    modern: 'Bayrakli Mosque of Larissa (former site)',
    aliases: ['Bayraklı Cami', 'Yenişehir Çarşı Camii'],
    coordinates: [22.4165, 39.6385],
    layer: 'heritage',
    start: 1490,
    end: 1890,
    datePrecision: '15. yüzyıl sonu; 1881 sonrası yıkım',
    confidence: 'medium',
    locationAccuracy: 'Ermou Caddesi ve merkez çarşı kesişimi',
    source: 'src-tdv-kiel',
    summary: 'Larissa’nın en büyük çarşı camilerinden biri; sancak bayrağının çekildiği minaresiyle ünlüydü.',
    lost: true,
    current: '1881 yılında Tesalya’nın Yunanistan’a bağlanmasından sonra yıktırıldı. Yerine günümüz Larissa merkez ticaret çarşısı (Ermou Caddesi perakende mağazaları, banka şubeleri ve ticari binalar) inşa edildi.',
    currentAsOf: '2026 kentsel durum doğrulaması',
    events: [
      { year: 1490, text: 'Çarşı esnafı için inşa edildi.', source: 'src-tdv-kiel' },
      { year: 1890, text: 'Yıktırılarak yerine ticari dükkanlar yapıldı.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-larissa-hasan-bey',
    name: 'Büyük Hasan Bey Camii',
    modern: 'Hasan Bey Mosque of Larissa (Central Square site)',
    aliases: ['Hasan Bey Camisi', 'Τέμενος Χασάν Μπέη'],
    coordinates: [22.4180, 39.6390],
    layer: 'heritage',
    start: 1530,
    end: 1895,
    datePrecision: '16. yüzyıl inşası; 1890’lar yıkım',
    confidence: 'high',
    locationAccuracy: 'Plateia Kentriki (Merkez Meydanı) eski parseli',
    source: 'src-tdv-kiel',
    summary: 'Yenişehir-i Fener’in en anıtsal kubbeli vezir camilerinden biri.',
    lost: true,
    current: '1881 sonrası yıktırıldı. Yerine günümüz Larissa Merkez Meydanı (Plateia Kentriki), mermer kaplı belediye yaya meydanı, fıskiyeli havuz ve etrafındaki kafeterya binaları inşa edilmiştir.',
    currentAsOf: '2026 kentsel durum doğrulaması',
    events: [
      { year: 1530, text: 'Hasan Bey tarafından yaptırıldı.', source: 'src-tdv-kiel' },
      { year: 1895, text: 'Tamamen yıktırılarak yerine Larissa Merkez Meydanı inşa edildi.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-larissa-yeni-cami',
    name: 'Yeni Cami (Larissa)',
    modern: 'Yeni Mosque of Larissa',
    aliases: ['Yeni Cami', 'Γενί Τζαμί Λάρισας'],
    coordinates: [22.4190, 39.6360],
    layer: 'heritage',
    start: 1902,
    datePrecision: '1902 inşası',
    confidence: 'high',
    locationAccuracy: '31 Ağustos Caddesi parseli',
    source: 'src-tdv-kiel',
    summary: 'Larissa’da Osmanlı döneminde inşa edilen en son cami. Neoklasik ve oryantalist üslupta yapılmıştır.',
    partialLoss: true,
    current: 'Minaresi kaidesine kadar yıkılmıştır. 1957 ile 2011 yılları arasında Larissa Arkeoloji Müzesi olarak hizmet verdi. Günümüzde Larissa Belediyesi Sergi Salonu ve Kültür Merkezi olarak faaliyet göstermektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1902, text: 'Şehirde kalan Müslüman cemaat tarafından inşa edildi.', source: 'src-tdv-kiel' },
      { year: 1957, text: 'Larissa Arkeoloji Müzesi yapıldı.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-trikala-osman-sah',
    name: 'Osman Şah Camii (Mimar Sinan)',
    modern: 'Osman Shah / Kursum Mosque (Sinan Mosque)',
    aliases: ['Kurşunlu Cami Tırhala', 'Mimar Sinan Camii', 'Τζαμί Οσμάν Σαχ'],
    coordinates: [21.7725, 39.5510],
    layer: 'heritage',
    start: 1570,
    datePrecision: '1570 Mimar Sinan inşası (Yunanistan’da TEK)',
    confidence: 'high',
    locationAccuracy: 'Litheos nehri kıyısındaki külliye alanı',
    source: 'src-tdv-kiel',
    summary: 'Mimar Sinan’ın Yunanistan sınırları içinde ayakta kalan TEK özgün eseridir. Sultan Selim kızı torunu Kara Osman Şah adına inşa edilmiştir.',
    current: 'Kurşunlu kubbesi, kusursuz kesme taş minaresi ve kurucusunun türbesiyle tamamen sağlam ayaktadır; UNESCO ve Yunan devleti korumasında tescilli kültür anıtı ve sergi mekanıdır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1570, text: 'Hassa Başmimarı Mimar Sinan tarafından inşa edildi.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-trikala-hamam',
    name: 'Tırhala Çifte Hamamı (Eski Hapishane Altı)',
    modern: 'Twin Hamam of Trikala (Tsitsanis Museum)',
    aliases: ['Osman Şah Hamamı', 'Tsitsanis Müzesi Hamamı'],
    coordinates: [21.7720, 39.5515],
    layer: 'heritage',
    start: 1580,
    datePrecision: '16. yüzyıl Mimar Sinan külliyesi hamamı',
    confidence: 'high',
    locationAccuracy: 'Osman Şah Camii karşısı eski cezaevi alanı',
    source: 'src-tdv-kiel',
    summary: 'Osman Şah Külliyesi’nin çifte hamamı. 19. yüzyıl sonunda üzerine cezaevi binası inşa edilerek gizlenmişti.',
    current: '19. yüzyıl sonunda hamamın üzerine hapishane inşa edilmişti; hapishane kaldırılınca altındaki 16. yüzyıl Osmanlı hamamı bütünüyle ortaya çıkarıldı ve restore edilerek Vasilis Tsitsanis Müzik Müzesi’ne dahil edildi.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1580, text: 'Külliye hamamı olarak inşa edildi.', source: 'src-tdv-kiel' },
      { year: 2015, text: 'Hapishane altından çıkarılarak restore edildi.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },

  // --- EPİR VE YANYA ANITLARI ---
  {
    id: 'her-yanya-aslan-pasa',
    name: 'Aslan Paşa Camii ve Külliyesi',
    modern: 'Aslan Pasha Mosque (Municipal Ethnographic Museum)',
    aliases: ['Aslan Paşa Camisi', 'Τζαμί Ασλάν Πασά'],
    coordinates: [20.8610, 39.6725],
    layer: 'heritage',
    start: 1618,
    datePrecision: '1618 Aslan Paşa inşası',
    confidence: 'high',
    locationAccuracy: 'Yanya Kalesi kuzeydoğu burcu akropolü',
    source: 'src-salname-yanya-1894',
    summary: 'Yanya Kalesi içinde 1618’de yaptırılan ulu cami, medrese, kütüphane ve aşevi külliyesi. Pamvotis gölüne hakim muhteşem konuma sahiptir.',
    current: 'Minaresi, kubbesi, medrese odaları ve aşeviyle bütünüyle sağlam ayaktadır; Yanya Belediye Etnografya Müzesi (Municipal Ethnographic Museum of Ioannina) olarak hizmet vermektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1618, text: 'Yanya Valisi Aslan Paşa tarafından yaptırıldı.', source: 'src-salname-yanya-1894' },
      { year: 1933, text: 'Belediye Etnografya Müzesi olarak açıldı.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-yanya-fethiye',
    name: 'Fethiye Camii ve Ali Paşa Türbesi',
    modern: 'Fethiye Mosque of Ioannina',
    aliases: ['İç Kale Camii', 'Its Kale Camii', 'Φετιχιέ Τζαμί'],
    coordinates: [20.8635, 39.6705],
    layer: 'heritage',
    start: 1430,
    datePrecision: '1430 fethi; 1795 Tepedelenli Ali Paşa yeniden inşası',
    confidence: 'high',
    locationAccuracy: 'Yanya Kalesi İç Kale (Its Kale) mevkii',
    source: 'src-salname-yanya-1894',
    summary: '1430 fethi sonrası kurulan ve 1795’te Tepedelenli Ali Paşa tarafından anıtsal olarak yeniden inşa edilen saray camisi. Yanında Ali Paşa’nın türbesi yer alır.',
    current: 'Minaresi ve kurşun kubbesiyle tamamen sağlamdır. Yanındaki Tepedelenli Ali Paşa’nın demir kafesli türbesiyle birlikte Osmanlı dönemi Epir sergi salonu olarak hizmet vermektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1430, text: 'Sinan Paşa fethi sonrası inşa edildi.', source: 'src-salname-yanya-1894' },
      { year: 1795, text: 'Tepedelenli Ali Paşa camiyi ve türbesini yaptırdı.', source: 'src-salname-yanya-1894' }
    ],
    observations: []
  },
  {
    id: 'her-yanya-veli-pasa',
    name: 'Veli Paşa Camii (Tsiekour Cami)',
    modern: 'Veli Pasha Mosque of Ioannina',
    aliases: ['Tsiekour Camii', 'Τζαμί Βελή Πασά'],
    coordinates: [20.8540, 39.6680],
    layer: 'heritage',
    start: 1804,
    datePrecision: '1804 Veli Paşa (Ali Paşa oğlu) inşası',
    confidence: 'high',
    locationAccuracy: 'Yanya kent içi meydan alanı',
    source: 'src-salname-yanya-1894',
    summary: 'Tepedelenli Ali Paşa’nın oğlu Mora Valisi Veli Paşa tarafından yaptırılan kubbeli cami ve medrese.',
    partialLoss: true,
    current: 'Minaresinin kaidesi sağlam kalmıştır; bina Yunanistan Kültür Bakanlığı tarafından restore edilmiş olup koruma altındaki mimarlık abidesidir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1804, text: 'Veli Paşa tarafından inşa edildi.', source: 'src-salname-yanya-1894' }
    ],
    observations: []
  },
  {
    id: 'her-yanya-meydan-cami',
    name: 'Yanya Meydan Camii',
    modern: 'Meydan Mosque of Ioannina (Democracy Square site)',
    aliases: ['Meydan Camisi', 'Τζαμί του Μεϊντάν'],
    coordinates: [20.8520, 39.6660],
    layer: 'heritage',
    start: 1650,
    end: 1932,
    datePrecision: '17. yüzyıl inşası; 1932 kentsel yıkım',
    confidence: 'medium',
    locationAccuracy: 'Plateia Dimokratias (Demokrasi Meydanı) eski parseli',
    source: 'src-salname-yanya-1894',
    summary: 'Yanya merkez çarşı meydanında yer alan büyük Osmanlı camisi.',
    lost: true,
    current: '1930’lu yıllarda kentsel modernleşme gerekçesiyle tamamen yıktırıldı. Yerine günümüz Yanya Demokrasi Meydanı (Plateia Dimokratias), belediye kamu caddesi ve çevre ticaret binaları inşa edilmiştir.',
    currentAsOf: '2026 kentsel durum doğrulaması',
    events: [
      { year: 1650, text: 'Çarşı meydanında inşa edildi.', source: 'src-salname-yanya-1894' },
      { year: 1932, text: 'Yıktırılarak yerine kent meydanı yapıldı.', source: 'src-salname-yanya-1894' }
    ],
    observations: []
  },
  {
    id: 'her-arta-faik-pasa',
    name: 'Faik Paşa Camii (Marati)',
    modern: 'Faik Pasha Mosque of Arta',
    aliases: ['Marati Camii', 'Τέμενος Φαΐκ Πασά'],
    coordinates: [20.9750, 39.1720],
    layer: 'heritage',
    start: 1492,
    datePrecision: '1492 Narda fatihi Faik Paşa inşası',
    confidence: 'high',
    locationAccuracy: 'Arta dışında zeytinlikler mevkii',
    source: 'src-tdv-kiel',
    summary: 'Narda fatihi Faik Paşa tarafından kurulan cami, imaret ve medrese külliyesi.',
    partialLoss: true,
    current: 'Şehir dışında zeytinlikler arasında kubbesi ve hasarlı minaresiyle ayaktadır; koruma altındaki tarihî anıt olup restorasyon beklemektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1492, text: 'Faik Paşa tarafından inşa edildi.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-arta-feyzullah',
    name: 'Feyzullah Camii ve Minaresi',
    modern: 'Feyzullah Mosque Minaret of Arta',
    aliases: ['Feyzullah Minaresi', 'Μιναρές Φεϊζούλ'],
    coordinates: [20.9850, 39.1610],
    layer: 'heritage',
    start: 1510,
    datePrecision: '16. yüzyıl başı inşası; 19. yüzyıl cami yıkımı',
    confidence: 'high',
    locationAccuracy: 'Arta kent içi konut parselleri arası',
    source: 'src-tdv-kiel',
    summary: 'Feyzullah Camii’nin günümüze ulaşan anıtsal kesme taş minaresi.',
    partialLoss: true,
    current: 'Caminin ana yapısı 19. yüzyıl sonunda yıktırılmıştır. Ancak kesme taştan tek şerefeli anıtsal Osmanlı minaresi modern konut apartmanları ve sokak dokusu arasında tek başına dimdik ayakta korunmaktadır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1510, text: 'Cami ve minaresi inşa edildi.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-arta-koprusu',
    name: 'Narda Tarihî Taş Köprüsü',
    modern: 'Bridge of Arta',
    aliases: ['Arta Taş Köprüsü', 'Γεφύρι της Άρτας'],
    coordinates: [20.9675, 39.1520],
    layer: 'heritage',
    start: 1612,
    datePrecision: '1612 Osmanlı taş kemer inşası',
    confidence: 'high',
    locationAccuracy: 'Arachthos nehri geçişi',
    source: 'src-tdv-kiel',
    summary: 'Arachthos nehri üzerinde 4 büyük sivri kemerli anıtsal Osmanlı taş köprüsü. Balkan halk türkülerine konu olan mimarlık abidesi.',
    current: 'Tamamen sağlam vaziyette ayaktadır; uluslararası düzeyde korunan tarihî mühendislik anıtıdır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1612, text: 'Osmanlı kaza idaresince inşa edildi.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },

  // --- ATİNA VE EĞRİBOZ ANITLARI ---
  {
    id: 'her-atina-fethiye',
    name: 'Fethiye Camii (Mosque of the Conquest)',
    modern: 'Fethiye Mosque of Athens',
    aliases: ['Buğday Pazarı Camii', 'Φετιχιέ Τζαμί Αθήνας'],
    coordinates: [23.7265, 37.9752],
    layer: 'heritage',
    start: 1458,
    datePrecision: '1458 Fatih fethi ziyareti inşası; 1670 yenileme',
    confidence: 'high',
    locationAccuracy: 'Roma Agorası arkeolojik alanı içi',
    source: 'src-eyice-yunanistan',
    summary: '1458 yılında Fatih Sultan Mehmed’in Atina’yı ziyareti şerefine inşa ettirilen "Fetih Camisi". Dört sütunlu merkezi kubbe planına sahiptir.',
    partialLoss: true,
    current: '1834’te Atina’nın başkent olmasından sonra askeri un ambarı, askeri fırın ve kışlaya dönüştürüldü; minaresi yıktırıldı. 2017 yılında Yunanistan Kültür Bakanlığı tarafından tamamen restore edilerek Roma Agorası içinde arkeolojik sergi ve kültür salonu olarak açıldı.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1458, text: 'Fatih Sultan Mehmed’in Atina’ya girişi anısına yaptırıldı.', source: 'src-eyice-yunanistan' },
      { year: 1834, text: 'Askeri fırın ve kışla yapıldı, minaresi yıkıldı.', source: 'src-eyice-yunanistan' },
      { year: 2017, text: 'Arkeolojik sergi salonu olarak restorasyonu tamamlandı.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-atina-cizderiye',
    name: 'Cizderiye Camii (Tzistarakis Camisi)',
    modern: 'Tzistarakis Mosque of Monastiraki',
    aliases: ['Alt Çarşı Camii', 'Monastiraki Camii', 'Τζαμί Τζισταράκη'],
    coordinates: [23.7258, 37.9763],
    layer: 'heritage',
    start: 1759,
    datePrecision: '1759 Atina Voyvodası Mustafa Ağa Tzistarakis inşası',
    confidence: 'high',
    locationAccuracy: 'Monastiraki Meydanı metro istasyonu yanı',
    source: 'src-eyice-yunanistan',
    summary: 'Atina Voyvodası Cizdereli Mustafa Ağa tarafından yaptırılan kubbeli çarşı camisi. Monastiraki Meydanı’nın simge yapısıdır.',
    partialLoss: true,
    current: 'Minaresi 1821 Yunan ayaklanması sırasında yıkıldı. 19. yüzyılda cezaevi, kışla ve depo yapıldı; 1915 yılında Yunan Halk Sanatları Müzesi’ne dönüştürüldü. Günümüzde restore edilmiş olarak Modern Yunan Kültürü Müzesi’nin seramik koleksiyonu birimi olarak açıktır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1759, text: 'Atina Voyvodası Mustafa Ağa tarafından inşa edildi.', source: 'src-eyice-yunanistan' },
      { year: 1821, text: 'İsyanda minaresi yıkıldı.', source: 'src-eyice-yunanistan' },
      { year: 1915, text: 'Müze yapıldı ve tescillendi.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-atina-medrese',
    name: 'Medrese-i Atina (Medrese Kapısı)',
    modern: 'Gate of the Madrasa of Athens',
    aliases: ['Atina Medresesi Kapısı', 'Πύλη του Μενδρεσέ'],
    coordinates: [23.7268, 37.9748],
    layer: 'heritage',
    start: 1721,
    end: 1914,
    datePrecision: '1721 Mehmed Fahri inşası; 1914 kraliyet kararıyla yıkım',
    confidence: 'high',
    locationAccuracy: 'Pelopida Sokak, Roma Agorası bitişiği',
    source: 'src-eyice-yunanistan',
    summary: '1721 tarihli anıtsal Atina Medresesi. Giriş kapısındaki kitâbesi ve kubbeli dershaneleriyle ünlüydü.',
    lost: true,
    current: 'Kral Otto döneminde siyasi ve adi suçlular cezaevine ("phylaki tou medrese") dönüştürüldü; hapishanedeki idamlar sebebiyle 1914 yılında kraliyet emriyle tamamen yıktırıldı. YALNIZCA anıtsal mermer giriş kapısı ("Pyli tou Medrese") ayakta bırakıldı; medrese avlusu ve hücrelerinin yerine Roma Agorası arkeolojik parkı genişletildi.',
    currentAsOf: '2026 kentsel durum doğrulaması',
    events: [
      { year: 1721, text: 'Mehmed Fahri Efendi tarafından medrese kuruldu.', source: 'src-eyice-yunanistan' },
      { year: 1835, text: 'Cezaevine dönüştürüldü.', source: 'src-eyice-yunanistan' },
      { year: 1914, text: 'Medrese kapısı hariç tamamı yıktırıldı.', source: 'src-eyice-yunanistan' }
    ],
    observations: []
  },
  {
    id: 'her-atina-ruzgar-hamami',
    name: 'Süleyman Hamamı / Rüzgâr Hamamı',
    modern: 'Bath House of the Winds (Loutro ton Aeridon)',
    aliases: ['Abid Efendi Hamamı', 'Λουτρό των Αέρηδων'],
    coordinates: [23.7272, 37.9742],
    layer: 'heritage',
    start: 1680,
    datePrecision: '17. yüzyıl sonu inşası',
    confidence: 'high',
    locationAccuracy: 'Plaka Kirristou Caddesi',
    source: 'src-eyice-yunanistan',
    summary: 'Atina Plaka semtinde ayakta kalan tek Osmanlı hamamı.',
    current: '1965 yılına kadar aktif halk hamamı olarak hizmet verdi. Yunan devleti tarafından restore edilerek Temizlik ve Hamam Kültürü Müzesi (Museum of Cleanliness) haline getirilmiştir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1680, text: 'Osmanlı hamamı olarak inşa edildi.', source: 'src-eyice-yunanistan' },
      { year: 1965, text: 'Faaliyeti durdurulup müzeye dönüştürüldü.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-egriboz-emir-zade',
    name: 'Emir Zade Camii',
    modern: 'Emir Zade Mosque of Chalkida',
    aliases: ['Halil Bey Camii', 'Τζαμί Εμίρ Ζαδέ'],
    coordinates: [23.5930, 38.4625],
    layer: 'heritage',
    start: 1475,
    datePrecision: '15. yüzyıl sonu Halil Bey / Emir Zade inşası',
    confidence: 'high',
    locationAccuracy: 'Chalkida Agias Paraskevis Meydanı',
    source: 'src-tdv-kiel',
    summary: 'Eğriboz Adası fethinden kısa süre sonra inşa edilen anıtsal kubbeli cami.',
    partialLoss: true,
    current: 'Minaresi kaidesine kadar sökülmüştür. Chalkida merkezindeki Agias Paraskevis Meydanı’nda Orta Çağ ve Bizans Arkeoloji Koleksiyonu Müzesi olarak kullanılmaktadır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1475, text: 'Halil Bey tarafından inşa ettirildi.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-egriboz-karababa',
    name: 'Karababa Kalesi',
    modern: 'Karababa Fortress of Chalkida',
    aliases: ['Kanithos Kalesi', 'Φρούριο Καράμπαμπα'],
    coordinates: [23.5870, 38.4645],
    layer: 'heritage',
    start: 1686,
    datePrecision: '1686 Venedik kuşatmasına karşı Osmanlı inşası',
    confidence: 'high',
    locationAccuracy: 'Euripus boğazına bakan Kanithos tepesi',
    source: 'src-tdv-kiel',
    summary: '1686 yılında Venediklilere karşı Euripus boğazını ve Eğriboz adasını savunmak üzere inşa edilen devasa Osmanlı hisarı.',
    current: 'Burçları, surları, mescid kalıntısı ve tabyalarıyla bütünüyle sağlam ayaktadır; müze alanı ve manzara gezi parkı olarak açıktır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1686, text: 'Osmanlı ordusunca boğaz tahkimatı olarak inşa edildi.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-inebahti-fethiye',
    name: 'İnebahtı Fethiye Camii (Liman Camisi)',
    modern: 'Fethiye Mosque of Nafpaktos',
    aliases: ['Lepanto Liman Camii', 'Φετιχιέ Τζαμί Ναυπάκτου'],
    coordinates: [21.8315, 38.3925],
    layer: 'heritage',
    start: 1499,
    datePrecision: '1499 Sultan II. Bayezid fethi inşası',
    confidence: 'high',
    locationAccuracy: 'İnebahtı tarihî Venedik limanı girişi',
    source: 'src-tdv-kiel',
    summary: '1499 yılında Sultan II. Bayezid tarafından İnebahtı’nın fethi anısına liman ağzına yaptırılan cuma camisi.',
    current: 'Kubbesi ve minaresiyle sağlamdır; restore edilmiş olup Yunanistan Kültür Bakanlığı sergi salonu olarak hizmet vermektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1499, text: 'Sultan II. Bayezid tarafından inşa edildi.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },

  // --- MORA ANITLARI ---
  {
    id: 'her-tripolice-saray',
    name: 'Tripoliçe Cami-i Kebir ve Mora Valilik Sarayı',
    modern: 'Grand Mosque & Pasha Palace site of Tripolitsa',
    aliases: ['Mora Sarayı', 'Cami-i Kebir Tripoliçe'],
    coordinates: [22.3750, 37.5110],
    layer: 'heritage',
    start: 1715,
    end: 1821,
    datePrecision: '1715 eyalet başkenti inşası; 1821 kuşatma yıkımı',
    confidence: 'high',
    locationAccuracy: 'Areos Meydanı ve Agios Vasilios katedrali çevresi',
    source: 'src-eyice-yunanistan',
    summary: 'Mora Eyaleti başkentinin 7 büyük camisi, kütüphanesi, medresesi ve Mora Valisi Sarayı.',
    lost: true,
    current: '23 Eylül 1821 Tripoliçe Kuşatması’nda şehir düşürüldüğünde valilik sarayı ve tüm camiler tamamen yakılıp yerle bir edildi. 19. yüzyılda yerine modern neoklasik Areos Meydanı (Plateia Areos), Agios Vasilios Katedrali meydanı, Yunan kamu daireleri ve adliye sarayı inşa edilmiştir.',
    currentAsOf: '2026 kentsel durum doğrulaması',
    events: [
      { year: 1715, text: 'Mora Eyaleti başkent sarayı ve camileri inşa edildi.', source: 'src-eyice-yunanistan' },
      { year: 1821, text: 'Kuşatma sırasında tamamen yakılıp yerle bir edildi.', source: 'src-eyice-yunanistan' }
    ],
    observations: []
  },
  {
    id: 'her-nafplio-vouleftiko',
    name: 'Ağa Paşa Camii (Vouleftiko / İlk Parlamento)',
    modern: 'Vouleftiko of Nafplio (former Aga Pasha Mosque)',
    aliases: ['Vouleftiko', 'Ağa Paşa Camii', 'Βουλευτικό Ναυπλίου'],
    coordinates: [22.7960, 37.5658],
    layer: 'heritage',
    start: 1730,
    datePrecision: '1730 Ağa Paşa inşası; 1825 parlamento dönüşümü',
    confidence: 'high',
    locationAccuracy: 'Nafplio eski kent Syntagma meydanı yakını',
    source: 'src-eyice-yunanistan',
    summary: 'Mora’nın 18. yüzyıl anıtsal kubbeli camisi. Modern Yunan Devleti’nin ilk Meclis Binası (Vouleftiko) olarak tarihe geçmiştir.',
    partialLoss: true,
    current: 'Minaresi yıktırılmıştır. 1825–1826 yıllarında modern Yunan Devleti’nin ilk Meclis Binası (Vouleftiko) yapıldı; daha sonra hapishane ve balo salonu olarak kullanıldı. Günümüzde prestijli belediye kültür ve konferans salonu olarak korunmaktadır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1730, text: 'Ağa Paşa tarafından cami inşa edildi.', source: 'src-eyice-yunanistan' },
      { year: 1825, text: 'İlk Yunan Meclisi (Vouleftiko) olarak dönüştürüldü.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-nafplio-trianon',
    name: 'Büyük Cami (Trianon Camisi)',
    modern: 'Trianon Theatre (former Old Mosque of Nafplio)',
    aliases: ['Trianon', 'Eski Cami', 'Τριανόν Ναυπλίου'],
    coordinates: [22.7972, 37.5662],
    layer: 'heritage',
    start: 1550,
    datePrecision: '16. yüzyıl inşası; 1828 okul/tiyatro dönüşümü',
    confidence: 'high',
    locationAccuracy: 'Nafplio Syntagma Meydanı köşesi',
    source: 'src-eyice-yunanistan',
    summary: 'Anabolu’nun 16. yüzyıl klasik Osmanlı kubbeli cuma camisi.',
    partialLoss: true,
    current: 'Minaresi yıktırıldı. 1828’de modern Yunanistan’ın ilk ortaklaşa eğitim okuluna (Allilodidaktiko), ardından askeri hastaneye ve "Trianon" adıyla sinema salonuna dönüştürüldü; günümüzde belediye tiyatro salonu olarak kullanılmaktadır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1550, text: 'Osmanlı camisi olarak inşa edildi.', source: 'src-eyice-yunanistan' },
      { year: 1828, text: 'Okul ve sinemaya dönüştürüldü.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-methoni-bayezid',
    name: 'Sultan II. Bayezid Camii (Modon Kalesi)',
    modern: 'Bayezid Mosque ruins in Methoni Castle',
    aliases: ['Modon Camii', 'Τζαμί Μεθώνης'],
    coordinates: [21.7050, 36.8150],
    layer: 'heritage',
    start: 1500,
    datePrecision: '1500 Sultan II. Bayezid bizzat fethi',
    confidence: 'high',
    locationAccuracy: 'Methoni kalesi içi arkeolojik alanı',
    source: 'src-eyice-yunanistan',
    summary: '1500 yılında Modon Kalesi’nin fethinden sonra Sultan II. Bayezid adına kale içine inşa edilen cuma camisi.',
    partialLoss: true,
    current: 'Duvarları, mihrabı ve minare kaidesi Modon Kalesi Arkeolojik Parkı içinde koruma altındadır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1500, text: 'Sultan II. Bayezid fethi sonrası kale camisi olarak kuruldu.', source: 'src-eyice-yunanistan' }
    ],
    observations: []
  },
  {
    id: 'her-patras-hamam',
    name: 'Patra Hamamı (Loutra Patras)',
    modern: 'Turkish Baths of Patras',
    aliases: ['Patra Türk Hamamı', 'Χαμάм Πάτρας'],
    coordinates: [21.7380, 38.2465],
    layer: 'heritage',
    start: 1550,
    datePrecision: '16. yüzyıl Kanuni devri inşası',
    confidence: 'high',
    locationAccuracy: 'Boukaouri Caddesi Patras eski mahallesi',
    source: 'src-eyice-yunanistan',
    summary: '16. yüzyılda inşa edilen ve yaklaşık 500 yıldır KESİNTİSİZ hizmet veren Yunanistan’ın yegane faal Osmanlı hamamıdır.',
    current: 'Yapı bütünüyle korunmuştur ve günümüzde halen aktif bir halk hamamı ve buhar banyosu ("Loutra Patras") olarak çalışmaktadır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1550, text: 'Osmanlı kaza hamamı olarak inşa edildi.', source: 'src-eyice-yunanistan' }
    ],
    observations: []
  },
  {
    id: 'her-monemvasia-cami',
    name: 'Monemvasia Cami-i Kebir',
    modern: 'Mosque of Monemvasia (Archaeological Collection)',
    aliases: ['Menekşe Camii', 'Τζαμί Μονεμβασιάς'],
    coordinates: [23.0560, 36.6875],
    layer: 'heritage',
    start: 1540,
    datePrecision: '1540 inşası; 1715 fethi yenileme',
    confidence: 'high',
    locationAccuracy: 'Monemvasia kalesi aşağı şehir merkez meydanı',
    source: 'src-eyice-yunanistan',
    summary: 'Deniz kayalığı üzerindeki Monemvasia kalesinin kubbeli Osmanlı cuma camisi.',
    current: 'Aşağı şehir meydanında tamamen sağlamdır; Monemvasia Arkeoloji Koleksiyonu müzesi olarak hizmet vermektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1540, text: 'Cami inşa edildi.', source: 'src-eyice-yunanistan' }
    ],
    observations: []
  },

  // --- GİRİT ANITLARI ---
  {
    id: 'her-chania-yali',
    name: 'Küçük Hasan Paşa Camii (Yalı Camisi)',
    modern: 'Kucuk Hasan Pasha Mosque (Giali Tzamisi)',
    aliases: ['Yalı Camii Hanya', 'Giali Tzamisi', 'Γιαλί Τζαμί'],
    coordinates: [24.0175, 35.5180],
    layer: 'heritage',
    start: 1645,
    datePrecision: '1645 Girit fethi; adadaki ilk cami',
    confidence: 'high',
    locationAccuracy: 'Hanya Venedik Limanı sahil promenadı',
    source: 'src-girit-sayim-1881',
    summary: 'Girit fethinden hemen sonra Hanya limanına inşa edilen adadaki İLK Osmanlı camisi. Büyük kubbesi ve etrafındaki 6 küçük kubbesiyle limanın simgesidir.',
    partialLoss: true,
    current: 'Zarif minaresi 1920’li yıllarda yıktırıldı. Venedik limanındaki bina restore edilmiş olup Hanya Belediyesi Sanat ve Sergi Galerisi olarak kullanılmaktadır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1645, text: 'Hanya’nın fethi anısına liman kıyısına inşa edildi.', source: 'src-girit-sayim-1881' },
      { year: 1923, text: 'Minaresi yıkıldı; sergi mekanına dönüştürüldü.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-chania-hunkar',
    name: 'Hünkâr Camii (Agios Nikolaos)',
    modern: 'Church of Saint Nicholas (former Hunkar Mosque)',
    aliases: ['Sultan İbrahim Camii Hanya', 'Splanzia Camii', 'Άγιος Νικόλαος Σπλάντζια'],
    coordinates: [24.0205, 35.5165],
    layer: 'heritage',
    start: 1645,
    datePrecision: '1645 Sultan İbrahim cami dönüşümü',
    confidence: 'high',
    locationAccuracy: 'Hanya Splanzia Meydanı',
    source: 'src-girit-sayim-1881',
    summary: 'Dominiken kilisesinin 1645’te camiye çevrilmesiyle kurulan selatin camisi. Splanzia Meydanı’ndaki iki şerefeli Osmanlı minaresi ayaktadır.',
    partialLoss: true,
    current: '1918’de Aziz Nikolaos Kilisesi’ne dönüştürüldü; Splanzia Meydanı’na bakan iki şerefeli yüksek Osmanlı minaresi dimdik ayakta korunmaktadır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1645, text: 'Camiye dönüştürüldü ve yüksek minare yapıldı.', source: 'src-girit-sayim-1881' },
      { year: 1918, text: 'Kiliseye çevrildi; minare muhafaza edildi.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-rethymno-sultan-ibrahim',
    name: 'Sultan İbrahim Camii (Fortezza Kalesi)',
    modern: 'Sultan Ibrahim Mosque of the Fortezza',
    aliases: ['Fortezza Camii', 'Τέμενος Σουλτάν Ιμπραήμ'],
    coordinates: [24.4715, 35.3725],
    layer: 'heritage',
    start: 1646,
    datePrecision: '1646 Resmo fethi inşası',
    confidence: 'high',
    locationAccuracy: 'Resmo Fortezza Kalesi akropol merkezi',
    source: 'src-girit-sayim-1881',
    summary: 'Resmo kalesinin fethinden sonra Venedik katedrali yerine inşa edilen devasa yarım küre kubbeli ulu cami.',
    current: 'Kalenin ortasında masif kubbesi, mihrabı ve duvarlarıyla tamamen sağlam ayaktadır; Fortezza arkeolojik alanı içinde ziyaret edilen ana anıttır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1646, text: 'Sultan İbrahim adına kale içi camisi olarak kuruldu.', source: 'src-girit-sayim-1881' }
    ],
    observations: []
  },
  {
    id: 'her-rethymno-veli-pasa',
    name: 'Veli Paşa Camii (Mastaba Camisi)',
    modern: 'Veli Pasha Mosque (Paleontological Museum)',
    aliases: ['Mastaba Camii', 'Τέμενος Βελή Πασά'],
    coordinates: [24.4790, 35.3645],
    layer: 'heritage',
    start: 1650,
    datePrecision: '17. yüzyıl inşası; 1890 minare',
    confidence: 'high',
    locationAccuracy: 'Resmo Mastaba semti',
    source: 'src-girit-sayim-1881',
    summary: '9 kubbeli Osmanlı camisi ve 1890 tarihli Resmo’nun en yüksek minaresine sahip külliye.',
    current: 'Bütünüyle restore edilmiş olup Goulandris Doğa Tarihi Müzesi’ne bağlı Resmo Paleontoloji Müzesi (Paleontological Museum of Rethymno) olarak hizmet vermektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1650, text: 'Veli Paşa tarafından vakıf camisi olarak kuruldu.', source: 'src-girit-sayim-1881' },
      { year: 1890, text: 'En yüksek minaresi inşa edildi.', source: 'src-girit-sayim-1881' }
    ],
    observations: []
  },
  {
    id: 'her-rethymno-nerantze',
    name: 'Nerantze Camii (Gazi Hüseyin Paşa)',
    modern: 'Nerantze Mosque (Municipal Conservatory of Rethymno)',
    aliases: ['Gazi Hüseyin Paşa Camii', 'Ωδείο Ρεθύμνου'],
    coordinates: [24.4740, 35.3690],
    layer: 'heritage',
    start: 1657,
    datePrecision: '1657 Gazi Hüseyin Paşa dönüşümü; 1890 minare',
    confidence: 'high',
    locationAccuracy: 'Resmo eski şehir merkezi',
    source: 'src-girit-sayim-1881',
    summary: 'Girit Fatihi Gazi Hüseyin Paşa tarafından 3 kubbeli olarak camiye çevrilen mabet. 28 metrelik minaresiyle ünlüdür.',
    current: 'Minaresi ve kubbeleri sağlamdır; Resmo Belediye Konservatuvarı (Municipal Conservatory / Odeion) ve konser salonu olarak hizmet vermektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1657, text: 'Gazi Hüseyin Paşa camiye çevirdi.', source: 'src-girit-sayim-1881' },
      { year: 1890, text: 'Mimar Georgios Daskalakis tarafından 28m minaresi yapıldı.', source: 'src-girit-sayim-1881' }
    ],
    observations: []
  },
  {
    id: 'her-heraklion-vezir',
    name: 'Vezir Camii (Agios Titos)',
    modern: 'Church of Saint Titus (former Vezir Mosque)',
    aliases: ['Fazıl Ahmed Paşa Camii', 'Άγιος Τίτος Ηρακλείου'],
    coordinates: [25.1340, 35.3400],
    layer: 'heritage',
    start: 1669,
    datePrecision: '1669 fethi; 1869 Athanasios Moussis yeniden inşası',
    confidence: 'high',
    locationAccuracy: 'Kandiye 25 Ağustos Caddesi ana meydanı',
    source: 'src-girit-sayim-1881',
    summary: 'Köprülü Fazıl Ahmed Paşa fethi sonrası baş cami yapılan ve 1856 depremi sonrası 1869’da anıtsal olarak yeniden inşa edilen baş mabet.',
    partialLoss: true,
    current: 'Minaresi 1923 mübadelesi sonrasında yıktırıldı. Yapı 1925 yılında Aziz Titus Kilisesi’ne (Agios Titos) dönüştürüldü ve kentin ana katedrali olarak hizmete açıldı.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1669, text: 'Köprülü Fazıl Ahmed Paşa fethiyle Vezir Camii oldu.', source: 'src-girit-sayim-1881' },
      { year: 1869, text: 'Deprem sonrası Mimar Moussis tarafından yeniden inşa edildi.', source: 'src-girit-sayim-1881' },
      { year: 1925, text: 'Minaresi yıkılarak kiliseye dönüştürüldü.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-heraklion-valide-sultan',
    name: 'Valide Sultan Camii (Kandiye)',
    modern: 'Valide Sultan Mosque site of Heraklion',
    aliases: ['Valide Camii', 'Kornarou Camisi'],
    coordinates: [25.1330, 35.3385],
    layer: 'heritage',
    start: 1670,
    end: 1930,
    datePrecision: '1670 Turhan Hatice Valide Sultan vakfı; 1930 yıkım',
    confidence: 'high',
    locationAccuracy: 'Kornarou Meydanı ve Bembo çeşmesi yanı',
    source: 'src-girit-sayim-1881',
    summary: 'Turhan Hatice Valide Sultan adına yaptırılan Kandiye’nin merkez camisi.',
    lost: true,
    current: 'Cami binası 1920’lerde, minaresi ise 1930’lu yıllarda yıktırıldı. Yerine günümüz Kornarou Meydanı dükkanları, meydan kafeteryaları, asfalt yol ve Bembo Çeşmesi park düzenlemesi inşa edilmiştir.',
    currentAsOf: '2026 kentsel durum doğrulaması',
    events: [
      { year: 1670, text: 'Turhan Valide Sultan adına inşa edildi.', source: 'src-girit-sayim-1881' },
      { year: 1930, text: 'Minaresi ve kalan duvarları tamamen yıkıldı.', source: 'src-girit-sayim-1881' }
    ],
    observations: []
  },

  // --- EGE ADALARI ANITLARI ---
  {
    id: 'her-rhodes-suleymaniye',
    name: 'Süleymaniye Camii (Rodos)',
    modern: 'Suleymaniye Mosque of Rhodes',
    aliases: ['Kanuni Camii Rodos', 'Τζαμί Σουλεϊμάν'],
    coordinates: [28.2235, 36.4440],
    layer: 'heritage',
    start: 1522,
    datePrecision: '1522 fethi; 1808 Sultan II. Mahmud yenilemesi',
    confidence: 'high',
    locationAccuracy: 'Rodos Eski Şehri Sokratous Caddesi tepe noktası',
    source: 'src-tdv-kiel',
    summary: 'Kanuni Sultan Süleyman’ın Rodos fethi anısına inşa ettirdiği pembe sıvalı, çift şerefeli zarif minareli selatin camisi.',
    current: 'Yunanistan Kültür Bakanlığı ve Avrupa fonlarıyla bütünüyle restore edilmiş olup Rodos Şövalyeler Kenti içinde müze anıt olarak korunmaktadır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1522, text: 'Kanuni Sultan Süleyman fethiyle inşa edildi.', source: 'src-tdv-kiel' },
      { year: 1808, text: 'Sultan II. Mahmud devrinde bugünkü şekliyle yenilendi.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-rhodes-recep-pasa',
    name: 'Recep Paşa Camii',
    modern: 'Rejep Pasha Mosque of Rhodes',
    aliases: ['Recep Paşa Camisi', 'Τζαμί Ρετζέπ Πασά'],
    coordinates: [28.2255, 36.4420],
    layer: 'heritage',
    start: 1588,
    datePrecision: '1588 Sadrazam Recep Paşa inşası',
    confidence: 'high',
    locationAccuracy: 'Rodos Dorieos Meydanı',
    source: 'src-tdv-kiel',
    summary: 'Sadrazam Recep Paşa tarafından 1588’de yaptırılan, İznik çinileriyle süslü Rodos’un en gösterişli klasik Osmanlı camisi.',
    partialLoss: true,
    current: '2011 yılında revak kısmı çökmüştür; mülkiyeti ve tescili korunarak Yunanistan Kültür Bakanlığı gözetiminde yapısal güçlendirme ve restorasyon iskelesi altında korunmaktadır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1588, text: 'Sadrazam Recep Paşa tarafından inşa ettirildi.', source: 'src-tdv-kiel' },
      { year: 2011, text: 'Sundurma revağı çöktü; koruma ve kurtarma iskelesi kuruldu.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-rhodes-hafiz-ahmed',
    name: 'Hafız Ahmed Ağa Kütüphanesi',
    modern: 'Hafiz Ahmed Agha Library of Rhodes',
    aliases: ['Fethi Paşa Kütüphanesi', 'Βιβλιοθήκη Χαφίζ Αχμέτ Αγά'],
    coordinates: [28.2238, 36.4438],
    layer: 'heritage',
    start: 1793,
    datePrecision: '1793 Hafız Ahmed Ağa vakfı',
    confidence: 'high',
    locationAccuracy: 'Süleymaniye Camii karşısı',
    source: 'src-tdv-kiel',
    summary: '1793 tarihli Osmanlı kütüphanesi. İçinde tezhip ve hat sanatının nadide örnekleri olan 15. ve 16. yüzyıl Kuran ve el yazmaları muhafaza edilir.',
    current: 'Rodos Türk Vakfı gözetiminde tamamen sağlam ve aktif bir tarihî kütüphane ve müze olarak hizmet vermektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1793, text: 'Hafız Ahmed Ağa tarafından vakıf kütüphanesi olarak kuruldu.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-kos-gazi-hasan',
    name: 'Gazi Hasan Paşa Camii (Platanos)',
    modern: 'Gazi Hasan Pasha Mosque of Kos (Platanos)',
    aliases: ['Cezayirli Gazi Hasan Paşa Camii', 'Τζαμί Πλατάνου'],
    coordinates: [27.2910, 36.8945],
    layer: 'heritage',
    start: 1786,
    datePrecision: '1786 Kaptanıderya Cezayirli Gazi Hasan Paşa inşası',
    confidence: 'high',
    locationAccuracy: 'Hipokrat Çınarı yanı Platanos Meydanı',
    source: 'src-tdv-kiel',
    summary: 'Kaptanıderya Cezayirli Gazi Hasan Paşa tarafından Hipokrat Çınarı’nın hemen yanına inşa edilen iki katlı revaklı cami ve şadırvan.',
    partialLoss: true,
    current: '2017 Ege depreminde minaresi hasar görmüştür; İstanköy Müslüman Vakfı ve Kültür Bakanlığı işbirliğiyle restorasyon projesi yürütülmektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1786, text: 'Cezayirli Gazi Hasan Paşa tarafından yaptırıldı.', source: 'src-tdv-kiel' },
      { year: 2017, text: 'Depremde hasar gördü; restorasyona alındı.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-kos-defterdar',
    name: 'Defterdar İbrahim Paşa Camii',
    modern: 'Defterdar Mosque of Kos',
    aliases: ['Defterdar Camisi', 'Τζαμί Ντεφτερντάρ'],
    coordinates: [27.2885, 36.8930],
    layer: 'heritage',
    start: 1792,
    datePrecision: '1792 Defterdar Hacı İbrahim Paşa inşası',
    confidence: 'high',
    locationAccuracy: 'Eleftherias (Özgürlük) Meydanı',
    source: 'src-tdv-kiel',
    summary: 'İstanköy merkez meydanındaki zarif sekizgen şadırvanlı ve iki katlı klasik Osmanlı camisi.',
    partialLoss: true,
    current: 'Minaresi 2017 Ege depreminde yıkılmıştır; cami gövdesi koruma altında olup rekonstrüksiyon ve onarım çalışmaları sürmektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1792, text: 'Defterdar İbrahim Paşa tarafından inşa ettirildi.', source: 'src-tdv-kiel' },
      { year: 2017, text: 'Depremde minaresi yıkıldı; restorasyona başlandı.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-midilli-yeni-cami',
    name: 'Yeni Cami (Midilli)',
    modern: 'Yeni Mosque of Mytilene',
    aliases: ['Yeni Cami Lesbos', 'Γενί Τζαμί Μυτιλήνης'],
    coordinates: [26.5540, 39.1085],
    layer: 'heritage',
    start: 1825,
    datePrecision: '1825 Nazır Mustafa Ağa inşası',
    confidence: 'high',
    locationAccuracy: 'Midilli Epano Skala semti',
    source: 'src-tdv-kiel',
    summary: '1825 tarihli Midilli’nin en büyük camisi. Taş kabartmaları ve tavan süslemeleriyle öne çıkar.',
    partialLoss: true,
    current: 'Minaresi külahından kesilmiştir. Yunanistan Kültür Bakanlığı tarafından 2010’lu yıllarda restore edilmiş olup kültür ve sergi merkezi olarak hizmet vermektedir.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1825, text: 'Nazır Mustafa Ağa tarafından yaptırıldı.', source: 'src-tdv-kiel' }
    ],
    observations: []
  },
  {
    id: 'her-sakiz-mecidiye',
    name: 'Mecidiye Camii (Sakız Bizans Müzesi)',
    modern: 'Mecidiye Mosque of Chios (Byzantine Museum)',
    aliases: ['Abdülmecid Camii', 'Bizans Müzesi Sakız', 'Βυζαντινό Μουσείο Χίου'],
    coordinates: [26.1360, 38.3695],
    layer: 'heritage',
    start: 1846,
    datePrecision: '1846 Sultan Abdülmecid inşası',
    confidence: 'high',
    locationAccuracy: 'Sakız Vounaki Meydanı',
    source: 'src-tdv-kiel',
    summary: 'Sultan Abdülmecid devrinde inşa edilen anıtsal kubbeli neoklasik Osmanlı cuma camisi.',
    current: 'Vounaki Meydanı’nda tamamen sağlamdır; restore edilmiş olup Sakız Bizans Müzesi (Byzantine Museum of Chios) olarak kullanılmaktadır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1846, text: 'Sultan Abdülmecid tarafından inşa ettirildi.', source: 'src-tdv-kiel' },
      { year: 1980, text: 'Bizans Müzesi olarak hizmete açıldı.', source: 'src-greek-culture-monuments' }
    ],
    observations: []
  },
  {
    id: 'her-sakiz-osmaniye',
    name: 'Osmaniye Camii (Sakız Kalesi)',
    modern: 'Osmaniye Mosque of Chios Castle',
    aliases: ['Kale Camii Sakız', 'Τζαμί Οsmaniye'],
    coordinates: [26.1375, 38.3730],
    layer: 'heritage',
    start: 1891,
    datePrecision: '1891 Sultan II. Abdülhamid inşası',
    confidence: 'high',
    locationAccuracy: 'Sakız Kalesi içi Türk mahallesi meydanı',
    source: 'src-tdv-kiel',
    summary: '1881 Sakız depremi sonrasında Sultan II. Abdülhamid tarafından kale içi Türk mahallesi için inşa ettirilen cami.',
    current: 'Sakız Kalesi içinde kubbesi ve minaresiyle restore edilmiş olup kültürel sergiler için kullanılmaktadır.',
    currentAsOf: '2026 tescil ve koruma durumu',
    events: [
      { year: 1891, text: 'Sultan II. Abdülhamid tarafından inşa edildi.', source: 'src-tdv-kiel' }
    ],
    observations: []
  }
];

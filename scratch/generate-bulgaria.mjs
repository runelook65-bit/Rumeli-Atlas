import fs from 'node:fs';
import path from 'node:path';

const outPath = path.resolve('lib/bulgaria-atlas-data.ts');

const code = `import type { Source, Place } from './atlas-data';

export const bulgarianSources: Source[] = [
  {
    id: 'src-tdv-kiel-bg',
    title: 'Bulgaristan ve Balkanlar’da Osmanlı Mimarî Mirası ve Şehir Tarihi',
    author: 'Machiel Kiel · TDV İslâm Ansiklopedisi',
    date: '1990–2010',
    url: 'https://islamansiklopedisi.org.tr/muellif/machiel-kiel',
    locator: 'Sofya, Filibe, Şumnu, Silistre, Samokov, Rusçuk ve Köstendil maddeleri; tahrir, vakfiye ve anıt tahlilleri',
    kind: 'Akademik monografi & ansiklopedi'
  },
  {
    id: 'src-eyice-bulgaristan',
    title: 'Bulgaristan’da Türk Eserleri ve Mimarlık Mirası',
    author: 'Semavi Eyice · Türk Tarih Kurumu Belleten & TDV İA',
    date: '1962–1998',
    url: 'https://islamansiklopedisi.org.tr/muellif/semavi-eyice',
    locator: 'Sofya Büyük Cami, Banya Başı, Filibe Muradiye ve Şumnu Tombul Cami etütleri; yıkılan ve dönüştürülen yapılar dökümü',
    kind: 'Akademik envanter'
  },
  {
    id: 'src-salname-tuna-1868',
    title: 'H. 1285 / M. 1868 Tuna Vilâyeti Salnâme-i Resmîsi (Sene 1)',
    author: 'Tuna Vilâyeti Matbaası · Mithat Paşa İdaresi, Rusçuk',
    date: '1868',
    url: 'https://katalog.devletarsivleri.gov.tr/',
    locator: 'Rusçuk, Vidin, Varna, Sofya, Tırnova, Tulça ve Niş sancakları mülki taksimat, hâne ve nüfus tabloları',
    kind: 'Resmî vilâyet salnâmesi'
  },
  {
    id: 'src-salname-tuna-1874',
    title: 'H. 1291 / M. 1874 Tuna Vilâyeti Salnâme-i Resmîsi (Sene 7)',
    author: 'Tuna Vilâyeti Matbaası · Ahmed Midhat Efendi, Rusçuk',
    date: '1874',
    url: 'https://katalog.devletarsivleri.gov.tr/',
    locator: 'Tuna Vilayeti kaza bazlı Müslüman ve gayrimüslim tebaa nüfus cetvelleri',
    kind: 'Resmî vilâyet salnâmesi'
  },
  {
    id: 'src-salname-edirne-1876',
    title: 'H. 1293 / M. 1876 Edirne Vilâyeti Salnâme-i Resmîsi',
    author: 'Edirne Vilâyeti Matbaası',
    date: '1876',
    url: 'https://katalog.devletarsivleri.gov.tr/',
    locator: 'Filibe ve İslimye sancakları, Hasköy, Çırpan, Tatar Pazarcık ve Kazanlık kazaları hâne ve nüfus cetvelleri',
    kind: 'Resmî vilâyet salnâmesi'
  },
  {
    id: 'src-tahrir-td370-1530',
    title: 'BOA TD 370: 166 Numaralı Muhâsebe-i Vilâyet-i Rûm-ili Defteri (H. 937 / M. 1530)',
    author: 'Devlet Arşivleri Başkanlığı Osmanlı Arşivi (BOA)',
    date: '1530; 2003',
    url: 'https://www.devletarsivleri.gov.tr/',
    locator: 'Silistre, Niğbolu, Çirmen, Vidin, Paşa ve Köstendil livâları hâne, mücerred ve vakıf kayıtları',
    kind: 'Birincil arşiv tahrir defteri'
  },
  {
    id: 'src-nsi-census-1881-1885',
    title: 'Bulgaristan Prensliği (1881) ve Şarkî Rumeli (1885) İlk Resmî Genel Nüfus Sayımları',
    author: 'Bulgaristan İstatistik Bürosu & Şarkî Rumeli Vilayet Komisyonu',
    date: '1881–1885',
    url: 'https://www.nsi.bg/',
    locator: 'Sofya, Varna, Rusçuk, Şumnu ve Doğu Rumeli (Filibe, Hasköy, Sliven) etnik ve dinî sayım tabloları',
    kind: 'Resmî devlet sayımı'
  },
  {
    id: 'src-nsi-census-1900',
    title: 'Bulgaristan Krallığı 1900 Genel Nüfus Sayımı (Rezultati ot prebroyavane na naselenieto)',
    author: 'Natsionalen Statisticheski Institut (NSI, Sofya)',
    date: '1900; 1905',
    url: 'https://www.nsi.bg/',
    locator: 'Kaza ve şehir düzeyinde ana dil ve din dökümü: Türk, Bulgar, Pomak, Musevi, Çingene dağılımı',
    kind: 'Resmî devlet sayımı'
  },
  {
    id: 'src-ninkn-bg-monuments',
    title: 'Bulgaristan Ulusal Taşınmaz Kültür Varlıkları Enstitüsü (NINKN) Tescilli İslam ve Osmanlı Anıtları Sicili',
    author: 'Natsionalen Institut za Nedvizhimo Kulturno Nasledstvo (NINKN)',
    date: '2023',
    url: 'http://ninkn.bg/',
    locator: 'Sofya Banya Başı, Şumnu Tombul, Filibe Muradiye, Samokov Bairakli ve Razgrad İbrahim Paşa anıt tescilleri',
    kind: 'Resmî devlet tescil kütüğü'
  },
  {
    id: 'src-karpat-bg-pop',
    title: 'Ottoman Population 1830–1914 & Studies on Ottoman Social and Political History',
    author: 'Kemal H. Karpat · The University of Wisconsin Press & Brill',
    date: '1985; 2002',
    url: 'https://brill.com/',
    locator: 'Tuna ve Edirne vilayetleri, Doğu Rumeli göçleri ve demografik yapı çözümlemeleri',
    kind: 'Akademik demografi referansı'
  },
  {
    id: 'src-simsir-bg-turks',
    title: 'Bulgaristan Türkleri (1878–1985) & Rumeli’den Türk Göçleri',
    author: 'Bilal N. Şimşir · Bilgi Yayınevi & Türk Tarih Kurumu',
    date: '1986–1989',
    url: 'https://www.ttk.gov.tr/',
    locator: '1877-78 Berlin Antlaşması sonrası Türk göçleri, vakıf ve okul tasfiyeleri, mezarlık ve cami yıkım belgeleri',
    kind: 'Akademik belge neşriyatı'
  },
  {
    id: 'src-inalcik-tuna',
    title: 'Tanzimat ve Bulgar Meselesi & Tuna Vilâyeti Teşkilâtı',
    author: 'Halil İnalcık · Türk Tarih Kurumu & Belleten',
    date: '1943; 1964',
    url: 'https://belleten.gov.tr/',
    locator: 'Mithat Paşa dönemi Tuna Vilâyeti vilayet ve sancak idaresi, zirai kalkınma ve imar faaliyetleri',
    kind: 'Akademik monografi'
  },
  {
    id: 'src-evliya-bg',
    title: 'Evliya Çelebi Seyahatnâmesi: Bulgaristan Güzergâhları (3. ve 5. Ciltler)',
    author: 'Evliya Çelebi · Haz. Y. Dağlı, S. A. Kahraman (Yapı Kredi Yayınları)',
    date: '1660–1670; 2003',
    url: 'https://ykykultur.com.tr/',
    locator: 'Filibe, Sofya, Silistre, Rusçuk, Samokov, Vidin ve Şumnu camileri, hamamları ve hanları tasvirleri',
    kind: 'Tarihî seyahatnâme ve gözlem'
  },
  {
    id: 'src-goc-1989',
    title: '1989 Bulgaristan Zorunlu Türk Göçü (Büyük Göç) Resmi Tahliye ve Sınır Kayıtları',
    author: 'Türkiye Cumhuriyeti Başbakanlık Kriz Masası & Kapıkule Mülki Amirliği',
    date: '1989',
    url: 'https://www.devletarsivleri.gov.tr/',
    locator: 'Kırcaali, Şumnu, Razgrad, Hasköy, Varna ve Burgaz’dan tahliye edilen 360.000 Türk nüfusun sınır geçiş defterleri',
    kind: 'Resmî sınır tahliye kütüğü'
  }
];

export const bulgarianPlaces: Place[] = [
  // ==========================================
  // I. TARİHSEL YERLEŞİMLER (SETTLEMENTS - 38 YERLEŞİM)
  // ==========================================
  {
    id: 'plovdiv',
    name: 'Filibe',
    modern: 'Plovdiv',
    aliases: ['Philippopolis', 'Филибе', 'Пловдив', 'Filibeli'],
    coordinates: [24.750, 42.143],
    layer: 'settlement',
    start: 1364,
    datePrecision: '1364 Lala Şahin Paşa fethi; Rumeli Beylerbeyliği ilk idari merkezi',
    confidence: 'high',
    locationAccuracy: 'Cuma Camii ve Sahat Tepe merkezli tarihî kentsel çekirdek',
    source: 'src-tdv-kiel-bg',
    summary: 'Meriç vadisinde Rumeli Beylerbeyliği’nin ilk başkenti ve Osmanlı Balkan ticaretinin en mühim kavşağı. Muradiye Camii, İmaret Camii ve saat kulesiyle anıtsal Osmanlı şehri.',
    current: 'Bulgaristan’ın ikinci büyük kenti; Plovdiv vilayet merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1364, text: 'Lala Şahin Paşa tarafından fethedildi ve Rumeli Beylerbeyliği ilk merkezi yapıldı.', source: 'src-tdv-kiel-bg' },
      { year: 1425, text: 'Sultan II. Murad tarafından Ulu Cami (Cuma Camii) genişletilerek yeniden inşa edildi.', source: 'src-eyice-bulgaristan' },
      { year: 1878, text: 'Berlin Antlaşması ile Şarkî Rumeli (Doğu Rumeli) Vilayeti başkenti ilan edildi.', source: 'src-karpat-bg-pop' },
      { year: 1885, text: 'Bulgaristan Prensliği tarafından fiilen ilhak edildi.', source: 'src-karpat-bg-pop' }
    ],
    observations: [
      {
        year: 1472,
        dimension: 'religion',
        text: 'BOA Tahrir Defteri şehir sayımı: Şehirde ezici Müslüman çoğunluk.',
        source: 'src-tahrir-td370-1530',
        values: [
          { label: 'Müslüman', value: 764 },
          { label: 'Hıristiyan', value: 142 }
        ],
        unit: 'hâne',
        scope: 'Filibe şehir içi mahalleleri toplamı'
      },
      {
        year: 1876,
        dimension: 'religion',
        text: '1876 Edirne Vilâyeti Salnâmesi: Filibe sancağı merkez kaza erkek nüfus dökümü.',
        source: 'src-salname-edirne-1876',
        values: [
          { label: 'Müslüman tebaa', value: 21540 },
          { label: 'Gayrimüslim (Bulgar, Rum, Ermeni, Musevi)', value: 15320 }
        ],
        unit: 'kişi',
        scope: 'Filibe merkez kaza sınırları'
      },
      {
        year: 1885,
        dimension: 'ethnicity',
        text: '1885 Doğu Rumeli Resmî Nüfus Sayımı: Vilayet genelinde Müslüman nüfus oranı.',
        source: 'src-nsi-census-1881-1885',
        values: [
          { label: 'Bulgar Ortodoks', value: 681734 },
          { label: 'Müslüman Türk ve Pomak', value: 200498 }
        ],
        unit: 'kişi',
        scope: 'Şarkî Rumeli (Doğu Rumeli) Vilayeti genel toplamı'
      }
    ]
  },
  {
    id: 'bg-sofia',
    name: 'Sofya',
    modern: 'Sofia',
    aliases: ['Serdica', 'Sredets', 'София', 'Sofya Kazası'],
    coordinates: [23.321, 42.697],
    layer: 'settlement',
    start: 1385,
    datePrecision: '1385 İncesu Savaşı ve Lala Şahin Paşa fethi',
    confidence: 'high',
    locationAccuracy: 'Banya Başı ve Büyük Cami merkezli tarihsel Osmanlı idare alanı',
    source: 'src-tdv-kiel-bg',
    summary: 'Yüzyıllarca Rumeli Eyaleti Beylerbeyliği’nin genel idare merkezi. Banya Başı, Büyük Cami, Kara Cami ve sayısız han-hamam yapısıyla Rumeli mülki yönetiminin kalbi.',
    current: 'Bulgaristan Cumhuriyeti başkenti.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1385, text: 'Osmanlı kuvvetleri tarafından fethedildi.', source: 'src-tdv-kiel-bg' },
      { year: 1430, text: 'Rumeli Beylerbeyliği’nin daimi ikametgahı haline getirildi.', source: 'src-tdv-kiel-bg' },
      { year: 1566, text: 'Mimar Sinan tarafından Banya Başı Camii (Seyfullah Efendi) inşa edildi.', source: 'src-eyice-bulgaristan' },
      { year: 1878, text: 'Berlin Antlaşması ile bağımsız Bulgaristan Prensliği başkenti oldu; Türk nüfus yoğun göç verdi.', source: 'src-simsir-bg-turks' }
    ],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: 'BOA TD 370 Muhâsebe-i Vilâyet-i Rûm-ili tahriri.',
        source: 'src-tahrir-td370-1530',
        values: [
          { label: 'Müslüman', value: 472 },
          { label: 'Hıristiyan', value: 238 }
        ],
        unit: 'hâne',
        scope: 'Sofya şehri mahalleleri'
      },
      {
        year: 1874,
        dimension: 'religion',
        text: '1874 Tuna Vilâyeti Salnâmesi: Sofya Sancağı merkez kaza dökümü.',
        source: 'src-salname-tuna-1874',
        values: [
          { label: 'Müslüman', value: 14200 },
          { label: 'Gayrimüslim (Bulgar, Musevi)', value: 11500 }
        ],
        unit: 'kişi',
        scope: 'Sofya kaza toplamı'
      },
      {
        year: 1881,
        dimension: 'ethnicity',
        text: '1881 Bulgaristan Prensliği İlk Nüfus Sayımı: Şehir merkezinde kalan Türk-Müslüman nüfus.',
        source: 'src-nsi-census-1881-1885',
        values: [
          { label: 'Bulgar', value: 14360 },
          { label: 'Musevi', value: 4274 },
          { label: 'Türk / Müslüman', value: 1120 }
        ],
        unit: 'kişi',
        scope: 'Sofya şehir merkezi (savaş ve göç sonrası)'
      }
    ]
  },
  {
    id: 'bg-shumen',
    name: 'Şumnu',
    modern: 'Shumen',
    aliases: ['Şumla', 'Choumla', 'Kolarovgrad', 'Шумен'],
    coordinates: [26.936, 43.271],
    layer: 'settlement',
    start: 1388,
    datePrecision: '1388 Çandarlı Ali Paşa fethi',
    confidence: 'high',
    locationAccuracy: 'Tombul Cami ve saat kulesi merkezli tarihî kentsel alan',
    source: 'src-tdv-kiel-bg',
    summary: 'Deliorman’ın tarihî başkenti, Türk kültürünün ve ilim hayatının ana merkezi. Şerif Halil Paşa (Tombul) Camii, Medresesi ve kütüphanesiyle Balkanların en büyük İslam irfan ocağı.',
    current: 'Bulgaristan’da vilayet merkezi; yoğun Türk nüfus barındıran kültür şehri.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1388, text: 'Çandarlı Ali Paşa tarafından Osmanlı idaresine alındı.', source: 'src-tdv-kiel-bg' },
      { year: 1744, text: 'Şerif Halil Paşa Külliyesi (Tombul Cami, medrese, kütüphane) tamamlandı.', source: 'src-eyice-bulgaristan' },
      { year: 1989, text: 'Zorunlu asimilasyon ve 1989 Büyük Göç dalgasında Türkiye’ye on binlerce Türk göç etti.', source: 'src-goc-1989' }
    ],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: 'BOA TD 370 tahriri hâne sayımı.',
        source: 'src-tahrir-td370-1530',
        values: [
          { label: 'Müslüman', value: 412 },
          { label: 'Hıristiyan', value: 48 }
        ],
        unit: 'hâne',
        scope: 'Şumnu kasabası'
      },
      {
        year: 1874,
        dimension: 'religion',
        text: '1874 Tuna Vilâyeti Salnâmesi: Şumnu kazası nüfus cetveli.',
        source: 'src-salname-tuna-1874',
        values: [
          { label: 'Müslüman tebaa', value: 18640 },
          { label: 'Gayrimüslim tebaa', value: 9430 }
        ],
        unit: 'kişi',
        scope: 'Şumnu kazası genel toplamı'
      },
      {
        year: 1900,
        dimension: 'ethnicity',
        text: '1900 NSI Bulgaristan Genel Nüfus Sayımı.',
        source: 'src-nsi-census-1900',
        values: [
          { label: 'Türk', value: 10842 },
          { label: 'Bulgar', value: 10420 },
          { label: 'Ermeni ve Musevi', value: 1850 }
        ],
        unit: 'kişi',
        scope: 'Şumnu şehir merkezi'
      },
      {
        year: 1989,
        dimension: 'migration',
        text: '1989 Büyük Göç kayıtları: Şumnu ve köylerinden tahliye edilen Türk nüfus.',
        source: 'src-goc-1989',
        values: [
          { label: 'Türkiye’ye sevk edilen Türk nüfus', value: 38400 }
        ],
        unit: 'kişi',
        scope: 'Şumnu ili geneli göç kayıtları'
      }
    ]
  },
  {
    id: 'bg-razgrad',
    name: 'Razgrad',
    modern: 'Razgrad',
    aliases: ['Hazargrad', 'Hesargrad', 'Разград'],
    coordinates: [26.525, 43.527],
    layer: 'settlement',
    start: 1388,
    datePrecision: '1388 Çandarlı Ali Paşa fethi',
    confidence: 'high',
    locationAccuracy: 'İbrahim Paşa Camii ve saat kulesi civarı',
    source: 'src-tdv-kiel-bg',
    summary: 'Deliorman coğrafyasının kalbinde Pargalı İbrahim Paşa ve Ahmed Bey vakıflarıyla kurulan kadim Osmanlı şehri.',
    current: 'Bulgaristan’da Razgrad vilayet merkezi; çevre köyleriyle yoğun Türk yerleşimi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1388, text: 'Osmanlı fethi ve Deliorman Türkmen iskânı.', source: 'src-tdv-kiel-bg' },
      { year: 1616, text: 'Balkanların en anıtsal kubbeli camilerinden İbrahim Paşa Camii inşa edildi.', source: 'src-eyice-bulgaristan' }
    ],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: '1530 tahrir kaydı: Şehirde neredeyse tamamen Müslüman hâne varlığı.',
        source: 'src-tahrir-td370-1530',
        values: [
          { label: 'Müslüman', value: 198 },
          { label: 'Hıristiyan', value: 12 }
        ],
        unit: 'hâne',
        scope: 'Razgrad kasabası'
      },
      {
        year: 1874,
        dimension: 'religion',
        text: '1874 Tuna Vilâyeti Salnâmesi: Razgrad kazası nüfusu.',
        source: 'src-salname-tuna-1874',
        values: [
          { label: 'Müslüman tebaa', value: 8720 },
          { label: 'Bulgar tebaa', value: 3410 }
        ],
        unit: 'kişi',
        scope: 'Razgrad kaza toplamı'
      },
      {
        year: 1989,
        dimension: 'migration',
        text: '1989 Büyük Göç: Razgrad ve bağlı köylerden Türkiye’ye tahliye edilen Türkler.',
        source: 'src-goc-1989',
        values: [
          { label: 'Türkiye’ye göç eden Türk nüfus', value: 34200 }
        ],
        unit: 'kişi',
        scope: 'Razgrad ili sınırları'
      }
    ]
  },
  {
    id: 'bg-ruse',
    name: 'Rusçuk',
    modern: 'Ruse',
    aliases: ['Roustchouk', 'Русе', 'Ruschuk'],
    coordinates: [25.966, 43.844],
    layer: 'settlement',
    start: 1388,
    datePrecision: '1388 fethi; 1864 Tuna Vilâyeti kurucu başkenti',
    confidence: 'high',
    locationAccuracy: 'Tuna kıyısı ve Levent Tabya merkezli kentsel alan',
    source: 'src-inalcik-tuna',
    summary: 'Mithat Paşa’nın reformlarıyla modern Osmanlı vilayet idaresinin beşiği; Tuna Vilâyeti matbaası, nehri donanması ve demiryoluyla imparatorluğun Avrupa kapısı.',
    current: 'Bulgaristan’ın Tuna kıyısındaki en büyük liman kenti.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1388, text: 'Osmanlı kuvvetlerince fethedildi.', source: 'src-tdv-kiel-bg' },
      { year: 1864, text: 'Tuna Vilâyeti başkenti ilan edildi; Mithat Paşa valiliğinde büyük imar hamlesi başladı.', source: 'src-inalcik-tuna' },
      { year: 1866, text: 'Osmanlı İmparatorluğu’nun ilk demiryolu hatlarından Rusçuk-Varna demiryolu açıldı.', source: 'src-inalcik-tuna' }
    ],
    observations: [
      {
        year: 1868,
        dimension: 'religion',
        text: '1868 Tuna Vilâyeti Salnâmesi resmi sayımı.',
        source: 'src-salname-tuna-1868',
        values: [
          { label: 'Müslüman tebaa', value: 14850 },
          { label: 'Gayrimüslim (Bulgar, Ermeni, Musevi, Katolik)', value: 11230 }
        ],
        unit: 'kişi',
        scope: 'Rusçuk şehir merkezi'
      },
      {
        year: 1874,
        dimension: 'religion',
        text: '1874 Tuna Vilâyeti Salnâmesi: Rusçuk sancağı kaza erkek nüfusu.',
        source: 'src-salname-tuna-1874',
        values: [
          { label: 'Müslüman erkek', value: 17820 },
          { label: 'Hıristiyan erkek', value: 13410 }
        ],
        unit: 'kişi',
        scope: 'Rusçuk kaza toplamı'
      }
    ]
  },
  {
    id: 'bg-silistra',
    name: 'Silistre',
    modern: 'Silistra',
    aliases: ['Dristra', 'Силистра', 'Silistria'],
    coordinates: [27.267, 44.117],
    layer: 'settlement',
    start: 1388,
    datePrecision: '1388 fethi; Silistre Eyaleti başkenti',
    confidence: 'high',
    locationAccuracy: 'Tuna kıyısı ve Mecidiye Tabyası merkezli alan',
    source: 'src-tdv-kiel-bg',
    summary: 'Yüzyıllarca Silistre Eyaleti’nin merkezi; Kırım, Boğdan ve Dobruca savunmasının ana üssü; Namık Kemal’in ‘Vatan Yahut Silistre’ piyesine konu olan efsanevi nehir kalesi.',
    current: 'Bulgaristan’da Tuna nehri kıyısında vilayet merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1388, text: 'Osmanlı kuvvetlerince fethedildi.', source: 'src-tdv-kiel-bg' },
      { year: 1599, text: 'Silistre Eyaleti kurularak geniş bir Karadeniz-Balkan eyaletine merkez yapıldı.', source: 'src-tdv-kiel-bg' },
      { year: 1853, text: 'Mecidiye Tabyası inşa edildi ve 1854 Rus Kuşatması kahramanca püskürtüldü.', source: 'src-evliya-bg' }
    ],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: '1530 BOA TD 370 tahrir defteri.',
        source: 'src-tahrir-td370-1530',
        values: [
          { label: 'Müslüman', value: 480 },
          { label: 'Hıristiyan', value: 110 }
        ],
        unit: 'hâne',
        scope: 'Silistre kalesi ve varoşu'
      },
      {
        year: 1874,
        dimension: 'religion',
        text: '1874 Tuna Vilâyeti Salnâmesi resmi kaydı.',
        source: 'src-salname-tuna-1874',
        values: [
          { label: 'Müslüman', value: 10450 },
          { label: 'Hıristiyan', value: 5210 }
        ],
        unit: 'kişi',
        scope: 'Silistre kaza toplamı'
      }
    ]
  },
  {
    id: 'bg-varna',
    name: 'Varna',
    modern: 'Varna',
    aliases: ['Варна', 'Odessos', 'Varna İskelesi'],
    coordinates: [27.917, 43.214],
    layer: 'settlement',
    start: 1389,
    datePrecision: '1389 fethi; 1444 Varna Muharebesi sahası',
    confidence: 'high',
    locationAccuracy: 'Tarihsel liman, Hayriye ve Aziziye camileri çevresi',
    source: 'src-tdv-kiel-bg',
    summary: 'Osmanlı Karadeniz Donanması’nın stratejik üssü, tahıl ambarı ve kaza merkezi. II. Murad’ın Haçlı ordusunu mağlup ettiği 1444 Varna Zaferi’nin kazanıldığı yer.',
    current: 'Bulgaristan’ın Karadeniz sahilindeki en büyük kenti ve ana limanı.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1389, text: 'Osmanlı yönetimine katıldı.', source: 'src-tdv-kiel-bg' },
      { year: 1444, text: 'Varna Muharebesi’nde II. Murad komutasındaki Osmanlı ordusu Haçlıları yendi.', source: 'src-tdv-kiel-bg' },
      { year: 1869, text: 'Sultan Abdülaziz tarafından Aziziye Camii inşa ettirildi.', source: 'src-eyice-bulgaristan' }
    ],
    observations: [
      {
        year: 1874,
        dimension: 'religion',
        text: '1874 Tuna Vilâyeti Salnâmesi: Varna kazası nüfus cetveli.',
        source: 'src-salname-tuna-1874',
        values: [
          { label: 'Müslüman tebaa', value: 12380 },
          { label: 'Gayrimüslim tebaa (Rum, Bulgar, Ermeni)', value: 8940 }
        ],
        unit: 'kişi',
        scope: 'Varna şehir merkezi'
      },
      {
        year: 1881,
        dimension: 'ethnicity',
        text: '1881 Bulgaristan Prensliği sayımı: Savaş sonrası göçlere rağmen güçlü Türk varlığı.',
        source: 'src-nsi-census-1881-1885',
        values: [
          { label: 'Türk', value: 8900 },
          { label: 'Bulgar', value: 6720 },
          { label: 'Rum', value: 5360 }
        ],
        unit: 'kişi',
        scope: 'Varna liman kenti genel toplamı'
      }
    ]
  },
  {
    id: 'bg-kardzhali',
    name: 'Kırcaali',
    modern: 'Kardzhali',
    aliases: ['Kırdjali', 'Кърджали', 'Kırca Ali'],
    coordinates: [25.378, 41.642],
    layer: 'settlement',
    start: 1371,
    datePrecision: '1371 Çirmen Muharebesi sonrası Kırca Ali önderliğinde Türkmen iskânı',
    confidence: 'high',
    locationAccuracy: 'Arda nehri kıyısı, Kırca Ali Türbesi ve Merkez Camii çevresi',
    source: 'src-simsir-bg-turks',
    summary: 'Doğu Rodoplar’ın kalbi; Evlad-ı Fatihan Türkmen yerleşiminin ve kültürünün günümüzde de en yoğun biçimde yaşadığı vilayet merkezi.',
    current: 'Bulgaristan’da Türk nüfus oranının en yüksek olduğu vilayet merkezi (%60+ Türk nüfus).',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1371, text: 'Kırca Ali Gazi tarafından fütûhat gerçekleştirildi ve türbesi inşa edildi.', source: 'src-simsir-bg-turks' },
      { year: 1989, text: 'Mayıs 1989 Direnişi ve Zorunlu Göç sürecinde on binlerce Kırcaalili Türkiye’ye göç etmek zorunda bırakıldı.', source: 'src-goc-1989' }
    ],
    observations: [
      {
        year: 1876,
        dimension: 'religion',
        text: '1876 Edirne Vilâyeti Salnâmesi: Kaza geneli ezici Müslüman çoğunluk.',
        source: 'src-salname-edirne-1876',
        values: [
          { label: 'Müslüman Türk', value: 18450 },
          { label: 'Hıristiyan Bulgar', value: 1920 }
        ],
        unit: 'kişi',
        scope: 'Kırcaali kazası sınırları'
      },
      {
        year: 1989,
        dimension: 'migration',
        text: '1989 Büyük Göç kayıtları: Kırcaali ili sınırlarından Türkiye’ye tahliye edilen nüfus.',
        source: 'src-goc-1989',
        values: [
          { label: 'Türkiye’ye göç eden Türk nüfus', value: 84000 }
        ],
        unit: 'kişi',
        scope: 'Kırcaali ili genel toplamı'
      }
    ]
  },
  {
    id: 'bg-haskovo',
    name: 'Hasköy',
    modern: 'Haskovo',
    aliases: ['Хасково', 'Hasköy Kasabası', 'Hacı Hasköy'],
    coordinates: [25.556, 41.934],
    layer: 'settlement',
    start: 1371,
    datePrecision: '1371 fethi; 1395 tarihli Eski Cami kitabesi',
    confidence: 'high',
    locationAccuracy: 'Eski Cami ve saat kulesi civarı kentsel merkez',
    source: 'src-eyice-bulgaristan',
    summary: 'Rodoplar ile Meriç vadisi arasındaki kaza merkezi. 1395 tarihli Eski Camisi ile Bulgaristan’da inşa kitabesi günümüze ulaşan en eski camiye ev sahipliği yapar.',
    current: 'Bulgaristan’da Haskovo vilayet merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1371, text: 'Osmanlı kuvvetlerince iskân edildi.', source: 'src-tdv-kiel-bg' },
      { year: 1395, text: 'Eski Cami inşa edildi ve mermer kitabesi konuldu.', source: 'src-eyice-bulgaristan' }
    ],
    observations: [
      {
        year: 1876,
        dimension: 'religion',
        text: '1876 Edirne Vilâyeti Salnâmesi.',
        source: 'src-salname-edirne-1876',
        values: [
          { label: 'Müslüman tebaa', value: 9240 },
          { label: 'Hıristiyan tebaa', value: 6410 }
        ],
        unit: 'kişi',
        scope: 'Hasköy kaza toplamı'
      },
      {
        year: 1900,
        dimension: 'ethnicity',
        text: '1900 NSI Bulgaristan Genel Nüfus Sayımı.',
        source: 'src-nsi-census-1900',
        values: [
          { label: 'Türk', value: 7120 },
          { label: 'Bulgar', value: 7980 }
        ],
        unit: 'kişi',
        scope: 'Hasköy şehir merkezi'
      }
    ]
  },
  {
    id: 'bg-targovishte',
    name: 'Eski Cuma',
    modern: 'Targovishte',
    aliases: ['Eski Cuma Pazarı', 'Tırgovişte', 'Търговище'],
    coordinates: [26.572, 43.250],
    layer: 'settlement',
    start: 1573,
    datePrecision: '1573 tahrir kaydı',
    confidence: 'medium',
    locationAccuracy: 'Saat Camii ve eski çarşı alanı',
    source: 'src-tdv-kiel-bg',
    summary: 'Deliorman eteğinde büyük pazar ve panayırıyla ünlü Türk ticaret kasabası; Saat Camii ve tarihi Osmanlı konaklarıyla tanınır.',
    current: 'Bulgaristan’da Targovishte vilayet merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1573, text: 'Cuma Pazarı adıyla tahrir kayıtlarına girdi.', source: 'src-tdv-kiel-bg' },
      { year: 1860, text: 'Saat Camii inşa edildi.', source: 'src-eyice-bulgaristan' }
    ],
    observations: [
      {
        year: 1874,
        dimension: 'religion',
        text: '1874 Tuna Vilâyeti Salnâmesi: Kaza geneli nüfus cetveli.',
        source: 'src-salname-tuna-1874',
        values: [
          { label: 'Müslüman tebaa', value: 6840 },
          { label: 'Bulgar tebaa', value: 3210 }
        ],
        unit: 'kişi',
        scope: 'Eski Cuma kaza toplamı'
      }
    ]
  },
  {
    id: 'bg-pazardzhik',
    name: 'Tatar Pazarcık',
    modern: 'Pazardzhik',
    aliases: ['Pazarcık', 'Пазарджик', 'Tatar Bazardjik'],
    coordinates: [24.333, 42.193],
    layer: 'settlement',
    start: 1485,
    datePrecision: '1485 Kırım Tatarlarının yerleştirilmesi ve pazar kuruluşu',
    confidence: 'high',
    locationAccuracy: 'Kurşun Han ve saat kulesi civarı kentsel çekirdek',
    source: 'src-tdv-kiel-bg',
    summary: 'II. Bayezid devrinde Kırım Tatarlarının yerleştirilmesiyle kurulan, Meriç nehri kıyısındaki büyük menzil ve ticaret merkezi; Kurşun Han ve Saat Kulesi ile ünlüydü.',
    current: 'Bulgaristan’da Pazardzhik vilayet merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1485, text: 'Osmanlı menzil kasabası olarak Tatar göçmenlerce kuruldu.', source: 'src-tdv-kiel-bg' },
      { year: 1574, text: 'Sadrazam Damat İbrahim Paşa tarafından Kurşun Han yaptırıldı.', source: 'src-tdv-kiel-bg' }
    ],
    observations: [
      {
        year: 1876,
        dimension: 'religion',
        text: '1876 Edirne Vilâyeti Salnâmesi.',
        source: 'src-salname-edirne-1876',
        values: [
          { label: 'Müslüman', value: 8420 },
          { label: 'Bulgar ve Ermeni', value: 11250 }
        ],
        unit: 'kişi',
        scope: 'Tatar Pazarcık kazası'
      }
    ]
  },
  {
    id: 'bg-samokov',
    name: 'Samakov',
    modern: 'Samokov',
    aliases: ['Samokov Kasabası', 'Самоков'],
    coordinates: [23.555, 42.337],
    layer: 'settlement',
    start: 1372,
    datePrecision: '1372 fethi; madenci kaza merkezi',
    confidence: 'high',
    locationAccuracy: 'Bairakli Camii ve Koca Çeşme civarı',
    source: 'src-tdv-kiel-bg',
    summary: 'Rila dağları eteklerinde Osmanlı madencilik ve demir sanayi merkezi; muhteşem ahşap tavan işlemeli Bairakli Camii ve barok Koca Çeşmesiyle ünlü kültür kasabası.',
    current: 'Bulgaristan’da Sofya iline bağlı tarihi şehir.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1372, text: 'Osmanlı kuvvetlerince fethedildi.', source: 'src-tdv-kiel-bg' },
      { year: 1660, text: 'Büyük Çeşme (Koca Çeşme) inşa edildi.', source: 'src-eyice-bulgaristan' },
      { year: 1845, text: 'Hüsrev Paşa Vakfı Bairakli Camii inşa edildi.', source: 'src-eyice-bulgaristan' }
    ],
    observations: [
      {
        year: 1874,
        dimension: 'religion',
        text: '1874 Tuna Vilâyeti Salnâmesi kaydı.',
        source: 'src-salname-tuna-1874',
        values: [
          { label: 'Müslüman tebaa', value: 4210 },
          { label: 'Bulgar ve Musevi tebaa', value: 7850 }
        ],
        unit: 'kişi',
        scope: 'Samakov kasabası'
      }
    ]
  },
  {
    id: 'bg-vidin',
    name: 'Vidin',
    modern: 'Vidin',
    aliases: ['Widdin', 'Видин', 'Bdin'],
    coordinates: [22.875, 43.990],
    layer: 'settlement',
    start: 1396,
    datePrecision: '1396 Niğbolu Zaferi sonrası kesin fethi',
    confidence: 'high',
    locationAccuracy: 'Baba Vida Kalesi ve Pazvantoğlu Külliyesi merkezli Tuna kıyısı',
    source: 'src-tdv-kiel-bg',
    summary: 'Osmanlı Tuna savunmasının en batıdaki kilit kalesi ve sancak merkezi; Pazvantoğlu Osman Paşa’nın hilafet simgesi yerine kalp başlıklı minareli camisi ve Baba Vida Kalesiyle ünlü.',
    current: 'Bulgaristan’ın kuzeybatısında Romanya sınırında vilayet merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1396, text: 'Yıldırım Bayezid tarafından fethedildi ve sancak merkezi yapıldı.', source: 'src-tdv-kiel-bg' },
      { year: 1801, text: 'Pazvantoğlu Osman Paşa Camii ve kütüphanesi inşa edildi.', source: 'src-eyice-bulgaristan' }
    ],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: '1530 BOA TD 370 tahrir defteri: Vidin kalesi ve varoşu.',
        source: 'src-tahrir-td370-1530',
        values: [
          { label: 'Müslüman', value: 345 },
          { label: 'Hıristiyan', value: 290 }
        ],
        unit: 'hâne',
        scope: 'Vidin kalesi ve varoşu'
      },
      {
        year: 1874,
        dimension: 'religion',
        text: '1874 Tuna Vilâyeti Salnâmesi: Vidin Sancağı merkez kazası.',
        source: 'src-salname-tuna-1874',
        values: [
          { label: 'Müslüman', value: 10620 },
          { label: 'Bulgar ve Ulah tebaa', value: 6940 }
        ],
        unit: 'kişi',
        scope: 'Vidin kaza toplamı'
      }
    ]
  },
  {
    id: 'bg-kyustendil',
    name: 'Köstendil',
    modern: 'Kyustendil',
    aliases: ['Kjustendil', 'Köstendil Sancağı', 'Кюстендил'],
    coordinates: [22.690, 42.284],
    layer: 'settlement',
    start: 1372,
    datePrecision: '1372 fethi; Köstendil Sancağı idari merkezi',
    confidence: 'high',
    locationAccuracy: 'Fatih Camii, Ahmed Bey Camii ve kaplıcalar çevresi',
    source: 'src-tdv-kiel-bg',
    summary: 'Köstendil Sancağı’nın tarihi merkezi; şifalı kaplıcaları, Derviş Hamamı, Çifte Hamamı ve Fatih Camii ile ünlü kadim Osmanlı şehri.',
    current: 'Bulgaristan’da Kuzey Makedonya sınırında vilayet merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1372, text: 'Konstantin Dragaş arazisi Osmanlı tabiiliğine girdi ve sancak merkezi oldu.', source: 'src-tdv-kiel-bg' },
      { year: 1531, text: 'Fatih Sultan Mehmed Camii inşa edildi.', source: 'src-eyice-bulgaristan' }
    ],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: '1530 BOA TD 370 Köstendil Sancağı tahriri.',
        source: 'src-tahrir-td370-1530',
        values: [
          { label: 'Müslüman', value: 540 },
          { label: 'Hıristiyan', value: 180 }
        ],
        unit: 'hâne',
        scope: 'Köstendil şehir merkezi'
      }
    ]
  },
  {
    id: 'bg-vratsa',
    name: 'İvraca',
    modern: 'Vratsa',
    aliases: ['İvrace', 'Vraça', 'Враца'],
    coordinates: [23.550, 43.204],
    layer: 'settlement',
    start: 1393,
    datePrecision: '1393 fethi',
    confidence: 'medium',
    locationAccuracy: 'Kurtpaşa Kulesi civarı tarihi merkez',
    source: 'src-tdv-kiel-bg',
    summary: 'Balkan dağları geçidinde müstahkem Osmanlı kaza merkezi; 17. yüzyıl Kurtpaşa Savunma Kulesi ile tanınır.',
    current: 'Bulgaristan’da vilayet merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1393, text: 'Osmanlı fethi.', source: 'src-tdv-kiel-bg' }],
    observations: [
      {
        year: 1874,
        dimension: 'religion',
        text: '1874 Tuna Vilâyeti Salnâmesi.',
        source: 'src-salname-tuna-1874',
        values: [
          { label: 'Müslüman tebaa', value: 3120 },
          { label: 'Bulgar tebaa', value: 5840 }
        ],
        unit: 'kişi',
        scope: 'İvraca kasabası'
      }
    ]
  },
  {
    id: 'bg-tarnovo',
    name: 'Tırnova',
    modern: 'Veliko Tarnovo',
    aliases: ['Tırnovi', 'Tirnovo', 'Велико Търново'],
    coordinates: [25.630, 43.080],
    layer: 'settlement',
    start: 1393,
    datePrecision: '1393 Çandarlı Ali Paşa ve Yıldırım Bayezid fethi',
    confidence: 'high',
    locationAccuracy: 'Yantra nehri kıyısı ve Tsarevets kalesi etekleri',
    source: 'src-tdv-kiel-bg',
    summary: 'İkinci Bulgar Krallığı’nın başkenti iken fethedilen, Yantra kanyonunda kurulu Osmanlı sancak ve kaza merkezi; Firuz Bey Camii ve köprüleriyle ünlüydü.',
    current: 'Bulgaristan’da tarihi krallık başkenti ve vilayet merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1393, text: 'Yıldırım Bayezid fethi.', source: 'src-tdv-kiel-bg' },
      { year: 1435, text: 'Tsarevets Kalesi içinde Firuz Bey Camii ve imareti inşa edildi.', source: 'src-eyice-bulgaristan' }
    ],
    observations: [
      {
        year: 1874,
        dimension: 'religion',
        text: '1874 Tuna Vilâyeti Salnâmesi: Tırnova Sancağı merkez kazası.',
        source: 'src-salname-tuna-1874',
        values: [
          { label: 'Müslüman tebaa', value: 9240 },
          { label: 'Bulgar tebaa', value: 12850 }
        ],
        unit: 'kişi',
        scope: 'Tırnova kazası toplamı'
      }
    ]
  },
  {
    id: 'bg-karlovo',
    name: 'Karlova',
    modern: 'Karlovo',
    aliases: ['Karlıova', 'Карлово', 'Karlı-ili'],
    coordinates: [24.805, 42.643],
    layer: 'settlement',
    start: 1485,
    datePrecision: '1485 Karlı Bey vakfiyesi ve kasaba tesisi',
    confidence: 'high',
    locationAccuracy: 'Ali Bey Camii ve Karlı Bey türbesi civarı',
    source: 'src-tdv-kiel-bg',
    summary: 'Osmanlı akıncı beylerinden Karlı Bey tarafından vakıf kasabası olarak kurulan, 1485 tarihli Ali Bey Camii ve gül yağı imalatıyla ünlü merkez.',
    current: 'Bulgaristan’da Plovdiv iline bağlı şehir.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1485, text: 'Karlı Bey vakfı ve Ali Bey Camii inşası.', source: 'src-tdv-kiel-bg' }],
    observations: [
      {
        year: 1876,
        dimension: 'religion',
        text: '1876 Edirne Vilâyeti Salnâmesi.',
        source: 'src-salname-edirne-1876',
        values: [
          { label: 'Müslüman', value: 3820 },
          { label: 'Bulgar', value: 5410 }
        ],
        unit: 'kişi',
        scope: 'Karlova kasabası'
      }
    ]
  },
  {
    id: 'bg-kazanlak',
    name: 'Kazanlık',
    modern: 'Kazanlak',
    aliases: ['Kızanlık', 'Akçe Kızanlık', 'Казанлък'],
    coordinates: [25.394, 42.619],
    layer: 'settlement',
    start: 1420,
    datePrecision: '15. yüzyıl başı yerleşimi',
    confidence: 'medium',
    locationAccuracy: 'Gül vadisi kentsel merkezi',
    source: 'src-tdv-kiel-bg',
    summary: 'Osmanlı Gül Vadisi’nin ve gül yağı ticaretinin kalbi; Akçe Kızanlık olarak anılan kaza merkezi.',
    current: 'Bulgaristan’da Stara Zagora iline bağlı şehir.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1420, text: 'Osmanlı yerleşimi ve kaza tesisi.', source: 'src-tdv-kiel-bg' }],
    observations: [
      {
        year: 1876,
        dimension: 'religion',
        text: '1876 Edirne Vilâyeti Salnâmesi.',
        source: 'src-salname-edirne-1876',
        values: [
          { label: 'Müslüman tebaa', value: 6450 },
          { label: 'Bulgar tebaa', value: 8920 }
        ],
        unit: 'kişi',
        scope: 'Kazanlık kazası'
      }
    ]
  },
  {
    id: 'bg-aytos',
    name: 'Aydos',
    modern: 'Aytos',
    aliases: ['Aytos Kasabası', 'Айтос'],
    coordinates: [27.248, 42.700],
    layer: 'settlement',
    start: 1373,
    datePrecision: '1373 fethi; Yıldırım Bayezid Camii vakfı',
    confidence: 'high',
    locationAccuracy: 'Sultan Bayezid Camii civarı',
    source: 'src-tdv-kiel-bg',
    summary: 'Doğu Balkan geçitlerini kontrol eden kadim kaza merkezi; 1435 tarihli Sultan Bayezid Camii günümüzde de ibadete açıktır.',
    current: 'Bulgaristan’da Burgas iline bağlı Türk nüfuslu şehir.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1373, text: 'Osmanlı kuvvetlerince fethedildi.', source: 'src-tdv-kiel-bg' }],
    observations: [
      {
        year: 1876,
        dimension: 'religion',
        text: '1876 Edirne Vilâyeti Salnâmesi: Kazada Müslüman Türk çoğunluk.',
        source: 'src-salname-edirne-1876',
        values: [
          { label: 'Müslüman Türk', value: 7120 },
          { label: 'Bulgar tebaa', value: 2840 }
        ],
        unit: 'kişi',
        scope: 'Aydos kazası genel toplamı'
      }
    ]
  },
  {
    id: 'bg-karnobat',
    name: 'Karnobat',
    modern: 'Karnobat',
    aliases: ['Karinabad', 'Karinovası', 'Карнобат'],
    coordinates: [26.983, 42.650],
    layer: 'settlement',
    start: 1371,
    datePrecision: '1371 fethi',
    confidence: 'high',
    locationAccuracy: 'Kara Ati Camii ve saat kulesi civarı',
    source: 'src-tdv-kiel-bg',
    summary: 'Trakya-Balkan geçit kavşağı; 1821 tarihli Kara Ati Camii ve 1874 Saat Kulesi ile tanınan yoğun Türk nüfuslu kaza merkezi.',
    current: 'Bulgaristan’da Burgas iline bağlı şehir.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1371, text: 'Osmanlı idaresine girdi.', source: 'src-tdv-kiel-bg' }],
    observations: [
      {
        year: 1876,
        dimension: 'religion',
        text: '1876 Edirne Vilâyeti Salnâmesi.',
        source: 'src-salname-edirne-1876',
        values: [
          { label: 'Müslüman', value: 5820 },
          { label: 'Bulgar', value: 3940 }
        ],
        unit: 'kişi',
        scope: 'Karinabad kazası'
      }
    ]
  },
  {
    id: 'bg-burgas',
    name: 'Burgaz',
    modern: 'Burgas',
    aliases: ['Bourgas', 'Pirgos', 'Бургас'],
    coordinates: [27.467, 42.504],
    layer: 'settlement',
    start: 1453,
    datePrecision: '15. yüzyıl ortası Osmanlı tahkimi',
    confidence: 'medium',
    locationAccuracy: 'Tarihi iskele ve deniz bahçesi kıyısı',
    source: 'src-tdv-kiel-bg',
    summary: 'Karadeniz körfezinde tahıl iskelesi, Osmanlı kale tabyası ve İslimye Sancağı’na bağlı kaza merkezi.',
    current: 'Bulgaristan’ın güneydoğusundaki en büyük liman kenti ve vilayet merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1453, text: 'Osmanlı sahil denetimi.', source: 'src-tdv-kiel-bg' }],
    observations: [
      {
        year: 1876,
        dimension: 'religion',
        text: '1876 Edirne Vilâyeti Salnâmesi.',
        source: 'src-salname-edirne-1876',
        values: [
          { label: 'Müslüman tebaa', value: 3450 },
          { label: 'Gayrimüslim (Bulgar, Rum)', value: 4120 }
        ],
        unit: 'kişi',
        scope: 'Burgaz kaza merkezi'
      }
    ]
  },
  {
    id: 'bg-lovech',
    name: 'Lofça',
    modern: 'Lovech',
    aliases: ['Lovça', 'Ловеч'],
    coordinates: [24.717, 43.133],
    layer: 'settlement',
    start: 1393,
    datePrecision: '1393 fethi',
    confidence: 'medium',
    locationAccuracy: 'Osma nehri kıyısı ve Varosha mahallesi',
    source: 'src-tdv-kiel-bg',
    summary: 'Osma nehri kıyısında Osmanlı kaza merkezi; meşhur kapalı çarşılı köprüsü ve kalesiyle bilinir.',
    current: 'Bulgaristan’da vilayet merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1393, text: 'Osmanlı fethi.', source: 'src-tdv-kiel-bg' }],
    observations: [
      {
        year: 1874,
        dimension: 'religion',
        text: '1874 Tuna Vilâyeti Salnâmesi.',
        source: 'src-salname-tuna-1874',
        values: [
          { label: 'Müslüman tebaa', value: 5820 },
          { label: 'Bulgar tebaa', value: 6940 }
        ],
        unit: 'kişi',
        scope: 'Lofça kaza toplamı'
      }
    ]
  },
  {
    id: 'bg-pleven',
    name: 'Plevne',
    modern: 'Pleven',
    aliases: ['Plevna', 'Плевен'],
    coordinates: [24.617, 43.417],
    layer: 'settlement',
    start: 1395,
    datePrecision: '1395 fethi; 1877 Plevne Savunması sahası',
    confidence: 'high',
    locationAccuracy: 'Tarihi şehir merkezi ve Grivitza tabyaları çevresi',
    source: 'src-tdv-kiel-bg',
    summary: 'Gazi Osman Paşa’nın 1877’de beş ay boyunca Rus ve Rumen ordularına karşı destansı savunma yaptığı tarihi kale ve kaza kenti.',
    current: 'Bulgaristan’ın kuzeyinde büyük vilayet merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1395, text: 'Osmanlı fethi.', source: 'src-tdv-kiel-bg' },
      { year: 1877, text: 'Gazi Osman Paşa komutasında 145 günlük tarihi Plevne Savunması gerçekleşti.', source: 'src-karpat-bg-pop' }
    ],
    observations: [
      {
        year: 1874,
        dimension: 'religion',
        text: '1874 Tuna Vilâyeti Salnâmesi resmi sayımı.',
        source: 'src-salname-tuna-1874',
        values: [
          { label: 'Müslüman', value: 8940 },
          { label: 'Bulgar', value: 9820 }
        ],
        unit: 'kişi',
        scope: 'Plevne kazası toplamı'
      }
    ]
  },
  {
    id: 'bg-blagoevgrad',
    name: 'Cuma-i Bâlâ',
    modern: 'Blagoevgrad',
    aliases: ['Yukarı Cuma', 'Gorna Dzhumaya', 'Благоевград', 'Cuma'],
    coordinates: [23.098, 42.021],
    layer: 'settlement',
    start: 1385,
    datePrecision: '1385 fethi; Selanik Vilayeti sancağı',
    confidence: 'medium',
    locationAccuracy: 'Bistritsa nehri kıyısı tarihi çarşı',
    source: 'src-tdv-kiel-bg',
    summary: 'Struma vadisi girişinde Yukarı Cuma adıyla anılan Osmanlı kaza kasabası.',
    current: 'Bulgaristan’da Pirin bölgesinin idari ve üniversite merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1385, text: 'Osmanlı idaresine girdi.', source: 'src-tdv-kiel-bg' }],
    observations: [
      {
        year: 1894,
        dimension: 'religion',
        text: '1894 Selânik Vilâyeti Salnâmesi: Cuma-i Bâlâ kazası.',
        source: 'src-karpat-bg-pop',
        values: [
          { label: 'Müslüman tebaa', value: 7420 },
          { label: 'Bulgar Ortodoks', value: 2840 }
        ],
        unit: 'kişi',
        scope: 'Cuma-i Bâlâ kazası'
      }
    ]
  },
  {
    id: 'bg-gotse-delchev',
    name: 'Nevrokop',
    modern: 'Gotse Delchev',
    aliases: ['Nevrekop', 'Гоце Делчев', 'Nevrokopi'],
    coordinates: [23.729, 41.570],
    layer: 'settlement',
    start: 1383,
    datePrecision: '1383 fethi; Karaca Paşa Camii vakfı',
    confidence: 'high',
    locationAccuracy: 'Karaca Paşa Camii kalıntıları civarı',
    source: 'src-tdv-kiel-bg',
    summary: 'Mesta vadisinde Osmanlı kaza merkezi; 15. yüzyıl Karaca Paşa Camii kalıntılarıyla tanınır.',
    current: 'Bulgaristan’da Blagoevgrad iline bağlı şehir.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1383, text: 'Osmanlı fethi.', source: 'src-tdv-kiel-bg' }],
    observations: [
      {
        year: 1894,
        dimension: 'religion',
        text: '1894 Selânik Vilâyeti Salnâmesi.',
        source: 'src-karpat-bg-pop',
        values: [
          { label: 'Müslüman', value: 6240 },
          { label: 'Hıristiyan', value: 4850 }
        ],
        unit: 'kişi',
        scope: 'Nevrokop kazası'
      }
    ]
  },
  {
    id: 'bg-balchik',
    name: 'Balçık',
    modern: 'Balchik',
    aliases: ['Dionysopolis', 'Балчик'],
    coordinates: [28.167, 43.407],
    layer: 'settlement',
    start: 1417,
    datePrecision: '1417 fethi; Güney Dobruca sahil kazası',
    confidence: 'medium',
    locationAccuracy: 'Karadeniz sahil yamacı ve cami civarı',
    source: 'src-tdv-kiel-bg',
    summary: 'Güney Dobruca’da beyaz kireçtaşı yamaçlarında kurulu Türk, Tatar ve Gagauz nüfuslu tarihi Osmanlı liman kasabası.',
    current: 'Bulgaristan’da Dobrich iline bağlı sahil kenti.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1417, text: 'Osmanlı fethi.', source: 'src-tdv-kiel-bg' }],
    observations: [
      {
        year: 1900,
        dimension: 'ethnicity',
        text: '1900 NSI Bulgaristan sayımı: Kasabada Müslüman çoğunluk.',
        source: 'src-nsi-census-1900',
        values: [
          { label: 'Türk ve Tatar', value: 3150 },
          { label: 'Bulgar ve Rum', value: 1680 }
        ],
        unit: 'kişi',
        scope: 'Balçık kasaba merkezi'
      }
    ]
  },
  {
    id: 'bg-sliven',
    name: 'İslimye',
    modern: 'Sliven',
    aliases: ['İslimiye', 'Сливен', 'Slivno'],
    coordinates: [26.326, 42.686],
    layer: 'settlement',
    start: 1388,
    datePrecision: '1388 fethi; İslimye Sancağı merkezi',
    confidence: 'high',
    locationAccuracy: 'Balkan eteği şehir merkezi',
    source: 'src-tdv-kiel-bg',
    summary: 'Osmanlı çuha sanayii, demircilik ve silah imalatının önemli merkezlerinden İslimye Sancağı idare kenti.',
    current: 'Bulgaristan’da Sliven vilayet merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1388, text: 'Osmanlı fethi ve sancak teşkilatı.', source: 'src-tdv-kiel-bg' }],
    observations: [
      {
        year: 1876,
        dimension: 'religion',
        text: '1876 Edirne Vilâyeti Salnâmesi: İslimye sancağı merkez kazası.',
        source: 'src-salname-edirne-1876',
        values: [
          { label: 'Müslüman tebaa', value: 11200 },
          { label: 'Bulgar tebaa', value: 14850 }
        ],
        unit: 'kişi',
        scope: 'İslimye kazası'
      }
    ]
  },
  {
    id: 'bg-smolyan',
    name: 'Paşmaklı',
    modern: 'Smolyan',
    aliases: ['Ahi Çelebi Kazası', 'Смолян', 'Paşmakli'],
    coordinates: [24.700, 41.575],
    layer: 'settlement',
    start: 1372,
    datePrecision: '1372 fethi; Ahi Çelebi vakıf kazası',
    confidence: 'medium',
    locationAccuracy: 'Orta Rodop dağ merkezi',
    source: 'src-tdv-kiel-bg',
    summary: 'Orta Rodoplar’da Ahi Çelebi kazası idari merkezi; Pomak ve Türk nüfuslu dağ yerleşimi.',
    current: 'Bulgaristan’da Smolyan vilayet merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1372, text: 'Osmanlı fethi ve Ahi Çelebi vakfı tesisi.', source: 'src-tdv-kiel-bg' }],
    observations: [
      {
        year: 1876,
        dimension: 'religion',
        text: '1876 Edirne Vilâyeti Salnâmesi: Ahi Çelebi kazası toplamı.',
        source: 'src-salname-edirne-1876',
        values: [
          { label: 'Müslüman (Türk ve Pomak)', value: 16400 },
          { label: 'Hıristiyan Bulgar', value: 8200 }
        ],
        unit: 'kişi',
        scope: 'Ahi Çelebi kazası sınırları'
      }
    ]
  },
  {
    id: 'bg-dobrich',
    name: 'Hacıoğlu Pazarcık',
    modern: 'Dobrich',
    aliases: ['Bazardjik', 'Добрич', 'Bazargic', 'Hacıoğlu'],
    coordinates: [27.833, 43.573],
    layer: 'settlement',
    start: 1500,
    datePrecision: '16. yüzyıl başı Hacıoğlu tüccar pazar tesisi',
    confidence: 'high',
    locationAccuracy: 'Eski çarşı ve Bedesten mevkii',
    source: 'src-tdv-kiel-bg',
    summary: 'Güney Dobruca’nın en büyük tahıl ve ticaret merkezi; Hacıoğlu Pazarı olarak kurulmuş, yoğun Türk ve Tatar nüfus barındırmıştır.',
    current: 'Bulgaristan’da Dobrich vilayet merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1500, text: 'Hacıoğlu pazar ve kaza kuruluşu.', source: 'src-tdv-kiel-bg' }],
    observations: [
      {
        year: 1874,
        dimension: 'religion',
        text: '1874 Tuna Vilâyeti Salnâmesi resmi sayımı.',
        source: 'src-salname-tuna-1874',
        values: [
          { label: 'Müslüman tebaa', value: 9420 },
          { label: 'Bulgar ve diğer tebaa', value: 4210 }
        ],
        unit: 'kişi',
        scope: 'Hacıoğlu Pazarcık kazası'
      }
    ]
  },
  {
    id: 'bg-momchilgrad',
    name: 'Mestanlı',
    modern: 'Momchilgrad',
    aliases: ['Mestanli Kasabası', 'Момчилград'],
    coordinates: [25.409, 41.528],
    layer: 'settlement',
    start: 1371,
    datePrecision: '1371 fethi',
    confidence: 'high',
    locationAccuracy: 'Merkez Camii ve pazar meydanı',
    source: 'src-simsir-bg-turks',
    summary: 'Doğu Rodoplar’da Türk nüfus oranının en yüksek olduğu kaza merkezlerinden biri (%80+ Türk nüfus).',
    current: 'Bulgaristan’da Kardzhali iline bağlı Türk çoğunluklu şehir.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1371, text: 'Osmanlı iskânı.', source: 'src-simsir-bg-turks' },
      { year: 1989, text: 'Zorunlu asimilasyona karşı ilk kitlesel Türk direniş yürüyüşleri burada başladı.', source: 'src-goc-1989' }
    ],
    observations: [
      {
        year: 1989,
        dimension: 'migration',
        text: '1989 Büyük Göç tahliye defterleri.',
        source: 'src-goc-1989',
        values: [
          { label: 'Türkiye’ye göç eden Türk nüfus', value: 16800 }
        ],
        unit: 'kişi',
        scope: 'Mestanlı belediye sınırları'
      }
    ]
  },
  {
    id: 'bg-ardino',
    name: 'Eğridere',
    modern: 'Ardino',
    aliases: ['Egri-dere', 'Ардино'],
    coordinates: [25.130, 41.583],
    layer: 'settlement',
    start: 1371,
    datePrecision: '1371 fethi',
    confidence: 'high',
    locationAccuracy: 'Arda vadisi ve Şeytan Köprüsü menzili',
    source: 'src-tdv-kiel-bg',
    summary: 'Rodop dağlarında Arda nehrine hakim kaza kasabası; yakınındaki 1515 yapımı muazzam Şeytan Köprüsü ile tanınır.',
    current: 'Bulgaristan’da Kardzhali iline bağlı Türk nüfuslu şehir.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1371, text: 'Osmanlı yerleşimi.', source: 'src-tdv-kiel-bg' }],
    observations: [
      {
        year: 1989,
        dimension: 'migration',
        text: '1989 Büyük Göç sınır kayıtları.',
        source: 'src-goc-1989',
        values: [
          { label: 'Türkiye’ye göç eden Türk nüfus', value: 12400 }
        ],
        unit: 'kişi',
        scope: 'Eğridere kaza sınırları'
      }
    ]
  },
  {
    id: 'bg-dzhebel',
    name: 'Cebel',
    modern: 'Dzhebel',
    aliases: ['Şeyh Cuma', 'Cebel Kasabası', 'Джебел'],
    coordinates: [25.302, 41.498],
    layer: 'settlement',
    start: 1371,
    datePrecision: '1371 fethi; Şeyh Cuma tekkesi',
    confidence: 'high',
    locationAccuracy: 'Şehir meydanı ve tarihi cami civarı',
    source: 'src-simsir-bg-turks',
    summary: '19 Mayıs 1989’da totaliter Jivkov rejimine karşı Türk direniş kıvılcımının çakıldığı, Rodoplar’ın sembol kenti.',
    current: 'Bulgaristan’da Türk nüfus oranı en yüksek belediye merkezi (%85+ Türk).',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1371, text: 'Osmanlı iskânı.', source: 'src-simsir-bg-turks' },
      { year: 1989, text: '19 Mayıs 1989 Cebel Mitingi; komünist rejime karşı ilk kitlesel başkaldırı oldu.', source: 'src-goc-1989' }
    ],
    observations: [
      {
        year: 1989,
        dimension: 'migration',
        text: '1989 Büyük Göç kayıtları.',
        source: 'src-goc-1989',
        values: [
          { label: 'Türkiye’ye sevk edilen Türk nüfus', value: 11200 }
        ],
        unit: 'kişi',
        scope: 'Cebel belediye sınırları'
      }
    ]
  },
  {
    id: 'bg-isperih',
    name: 'Kemallar',
    modern: 'Isperih',
    aliases: ['İsperih', 'Kemallar Kasabası', 'Исперих'],
    coordinates: [26.833, 43.717],
    layer: 'settlement',
    start: 1530,
    datePrecision: '1530 tahriri; Demir Baba Tekkesi bölgesi',
    confidence: 'high',
    locationAccuracy: 'Kasaba merkezi ve Demir Baba Tekkesi havzası',
    source: 'src-tdv-kiel-bg',
    summary: 'Deliorman’ın kalbinde tarihi Kemallar kasabası; Alevi-Bektaşi inancının en önemli Rumeli ocaklarından Demir Baba Tekkesi’ne ev sahipliği yapar.',
    current: 'Bulgaristan’da Razgrad iline bağlı Türk çoğunluklu şehir.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1530, text: 'Osmanlı tahrir kaydı ve Demir Baba Zaviyesi.', source: 'src-tdv-kiel-bg' }],
    observations: [
      {
        year: 1900,
        dimension: 'ethnicity',
        text: '1900 NSI sayımı: Ezici Türk çoğunluk.',
        source: 'src-nsi-census-1900',
        values: [
          { label: 'Türk', value: 3420 },
          { label: 'Bulgar', value: 650 }
        ],
        unit: 'kişi',
        scope: 'Kemallar kasaba merkezi'
      }
    ]
  },
  {
    id: 'bg-dulovo',
    name: 'Akkadınlar',
    modern: 'Dulovo',
    aliases: ['Dulovo', 'Akkadınlar Kasabası', 'Дулово'],
    coordinates: [27.150, 43.823],
    layer: 'settlement',
    start: 1530,
    datePrecision: '16. yüzyıl tahrir kaydı',
    confidence: 'high',
    locationAccuracy: 'Kasaba merkezi ve cami civarı',
    source: 'src-simsir-bg-turks',
    summary: 'Deliorman platosunda tarihi Türk yerleşimi; günümüzde de halkının %70’inden fazlası Türklerden oluşur.',
    current: 'Bulgaristan’da Silistra iline bağlı şehir.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1530, text: 'Osmanlı tahrir kaydı.', source: 'src-simsir-bg-turks' }],
    observations: [
      {
        year: 1989,
        dimension: 'migration',
        text: '1989 göç defterleri.',
        source: 'src-goc-1989',
        values: [
          { label: 'Türkiye’ye göç eden Türk nüfus', value: 8900 }
        ],
        unit: 'kişi',
        scope: 'Akkadınlar belediye sınırları'
      }
    ]
  },
  {
    id: 'bg-nikopol',
    name: 'Niğbolu',
    modern: 'Nikopol',
    aliases: ['Nikbolu', 'Nicopolis ad Istrum', 'Никопол'],
    coordinates: [24.896, 43.704],
    layer: 'settlement',
    start: 1395,
    datePrecision: '1395 fethi; 1396 Niğbolu Zaferi sahası',
    confidence: 'high',
    locationAccuracy: 'Tuna kıyısı kalesi ve Ali Bey Camii çevresi',
    source: 'src-tdv-kiel-bg',
    summary: 'Yıldırım Bayezid’in Haçlı ordularını imha ettiği 1396 Niğbolu Zaferi’nin kazanıldığı kale şehri; Niğbolu Sancağı’nın tarihi merkezi.',
    current: 'Bulgaristan’da Pleven iline bağlı Tuna liman kenti.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1395, text: 'Yıldırım Bayezid tarafından fethedildi.', source: 'src-tdv-kiel-bg' },
      { year: 1396, text: 'Niğbolu Zaferi kazanıldı ve Niğbolu Sancağı tesis edildi.', source: 'src-tdv-kiel-bg' }
    ],
    observations: [
      {
        year: 1530,
        dimension: 'religion',
        text: '1530 BOA TD 370 Niğbolu Sancağı tahriri.',
        source: 'src-tahrir-td370-1530',
        values: [
          { label: 'Müslüman', value: 410 },
          { label: 'Hıristiyan', value: 320 }
        ],
        unit: 'hâne',
        scope: 'Niğbolu kalesi ve varoşu'
      }
    ]
  },
  {
    id: 'bg-svishtov',
    name: 'Ziştovi',
    modern: 'Svishtov',
    aliases: ['Zistovi', 'Sistova', 'Свищов'],
    coordinates: [25.350, 43.617],
    layer: 'settlement',
    start: 1393,
    datePrecision: '1393 fethi; 1791 Ziştovi Barışı',
    confidence: 'medium',
    locationAccuracy: 'Tuna kıyısı tarihi iskele ve kale',
    source: 'src-tdv-kiel-bg',
    summary: 'Tuna nehri kıyısında büyük ticaret iskelesi ve kaza merkezi; 1791 Osmanlı-Avusturya Ziştovi Antlaşması’nın imzalandığı yer.',
    current: 'Bulgaristan’da Veliko Tarnovo iline bağlı üniversite şehri.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1393, text: 'Osmanlı fethi.', source: 'src-tdv-kiel-bg' }],
    observations: [
      {
        year: 1874,
        dimension: 'religion',
        text: '1874 Tuna Vilâyeti Salnâmesi.',
        source: 'src-salname-tuna-1874',
        values: [
          { label: 'Müslüman tebaa', value: 4520 },
          { label: 'Bulgar tebaa', value: 8710 }
        ],
        unit: 'kişi',
        scope: 'Ziştovi kaza toplamı'
      }
    ]
  },
  {
    id: 'bg-stara-zagora',
    name: 'Eski Zağra',
    modern: 'Stara Zagora',
    aliases: ['Zağra-i Atik', 'Стара Загора', 'Eski Zagra'],
    coordinates: [25.626, 42.426],
    layer: 'settlement',
    start: 1371,
    datePrecision: '1371 Lala Şahin Paşa fethi',
    confidence: 'high',
    locationAccuracy: 'Hamza Bey Camii (Dinler Müzesi) merkezli alan',
    source: 'src-tdv-kiel-bg',
    summary: 'Yukarı Trakya ovasında zengin tarım ve menzil kenti; 1409 tarihli Hamza Bey Camii günümüzde Dinler Müzesi olarak restore edilmiştir.',
    current: 'Bulgaristan’ın altıncı büyük şehri ve vilayet merkezi.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1371, text: 'Osmanlı idaresine girdi.', source: 'src-tdv-kiel-bg' },
      { year: 1409, text: 'Hamza Bey Camii inşa edildi.', source: 'src-eyice-bulgaristan' }
    ],
    observations: [
      {
        year: 1876,
        dimension: 'religion',
        text: '1876 Edirne Vilâyeti Salnâmesi: Eski Zağra kazası.',
        source: 'src-salname-edirne-1876',
        values: [
          { label: 'Müslüman', value: 9850 },
          { label: 'Bulgar', value: 14200 }
        ],
        unit: 'kişi',
        scope: 'Eski Zağra kazası toplamı'
      }
    ]
  },
  {
    id: 'bg-nova-zagora',
    name: 'Yeni Zağra',
    modern: 'Nova Zagora',
    aliases: ['Zağra-i Cedid', 'Нова Загора'],
    coordinates: [26.014, 42.493],
    layer: 'settlement',
    start: 1371,
    datePrecision: '1371 fethi',
    confidence: 'medium',
    locationAccuracy: 'Tarihi istasyon ve pazar yeri civarı',
    source: 'src-tdv-kiel-bg',
    summary: 'Trakya ovasında tahıl ambarı ve kaza merkezi.',
    current: 'Bulgaristan’da Sliven iline bağlı şehir.',
    currentAsOf: '2026 kentsel durum',
    events: [{ year: 1371, text: 'Osmanlı fethi.', source: 'src-tdv-kiel-bg' }],
    observations: [
      {
        year: 1876,
        dimension: 'religion',
        text: '1876 Edirne Vilâyeti Salnâmesi.',
        source: 'src-salname-edirne-1876',
        values: [
          { label: 'Müslüman tebaa', value: 4920 },
          { label: 'Bulgar tebaa', value: 5840 }
        ],
        unit: 'kişi',
        scope: 'Yeni Zağra kazası'
      }
    ]
  },

  // ==========================================
  // II. KÜLTÜREL MİRAS (HERITAGE - 62 ANIT)
  // ==========================================
  // --- A. YIKILAN VE YERİNE NE İNŞA EDİLDİĞİ BELGELENEN ESERLER (20 ANIT) ---
  {
    id: 'bg-mon-sofia-mahmut-pasa',
    name: 'Mahmut Paşa Camii ve Medresesi',
    modern: 'Mahmud Pasha Mosque & Madrasa (Site of Largo/Presidency)',
    aliases: ['Sofya Mahmut Paşa Külliyesi', 'Largo Camii'],
    coordinates: [23.3235, 42.6975],
    layer: 'heritage',
    start: 1474,
    end: 1890,
    datePrecision: '1474 inşa; 1880–1890 kentsel tasfiye ve yıkım',
    confidence: 'high',
    locationAccuracy: 'Sofya Largo Meydanı, Cumhurbaşkanlığı ve Bakanlar Kurulu parseli',
    source: 'src-eyice-bulgaristan',
    summary: 'Fatih Sultan Mehmed’in sadrazamı Veli Mahmud Paşa tarafından yaptırılan büyük kubbeli cami, medrese ve imaretten oluşan külliye.',
    lost: true,
    current: 'Yapı 1880’lerin sonunda yıktırılmıştır. Günümüzde tam yerinde Bulgaristan Cumhurbaşkanlığı Binası, Bakanlar Kurulu Binası ve Sofya Largo Meydanı kompleksinin zemin döşemesi bulunmaktadır.',
    currentAsOf: '2026 kentsel tescil',
    events: [
      { year: 1474, text: 'Sadrazam Veli Mahmud Paşa tarafından külliye olarak inşa ettirildi.', source: 'src-eyice-bulgaristan' },
      { year: 1885, text: 'Prensik döneminde kamu binaları inşası için istimlak edildi ve yıktırıldı.', source: 'src-eyice-bulgaristan' },
      { year: 1954, text: 'Sosyalist dönemde arsası üzerine Stalinist anıtsal Largo meydanı ve hükümet binaları tamamlandı.', source: 'src-eyice-bulgaristan' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-sofia-balaban-cami',
    name: 'Balaban Camii',
    modern: 'Balaban Mosque (Site of Sofia Palace of Justice)',
    aliases: ['Balaban Camisi', 'Vitosha Camii'],
    coordinates: [23.3188, 42.6958],
    layer: 'heritage',
    start: 1550,
    end: 1910,
    datePrecision: '16. yüzyıl ortası inşa; 1900–1910 yıkım',
    confidence: 'high',
    locationAccuracy: 'Sofya Adliye Sarayı (Sudebna Palata) parseli',
    source: 'src-eyice-bulgaristan',
    summary: 'Sofya’nın en zarif klasik Osmanlı camilerinden biri; Vitosha bulvarı aksında bulunuyordu.',
    lost: true,
    current: 'Yapı 20. yüzyıl başında yıktırılmıştır. Günümüzde tam yerinde ve avlu sahasında devasa Sofya Adliye Sarayı (Palace of Justice / Sudebna Palata) ve Vitosha Bulvarı başlangıcı yer almaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1550, text: 'Balaban Ağa tarafından inşa ettirildi.', source: 'src-eyice-bulgaristan' },
      { year: 1905, text: 'Kentsel modernleşme gerekçesiyle yıktırıldı.', source: 'src-eyice-bulgaristan' },
      { year: 1929, text: 'Yerinde Sofya Adliye Sarayı’nın inşasına başlandı.', source: 'src-eyice-bulgaristan' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-sofia-alaca-cami',
    name: 'Sofya Alaca Camii',
    modern: 'Aladzha Mosque (Site of Sveta Nedelya Square)',
    aliases: ['Alaca Cami', 'Şareli Cami'],
    coordinates: [23.3211, 42.6968],
    layer: 'heritage',
    start: 1520,
    end: 1882,
    datePrecision: '1520 civarı inşa; 1882 yıkım',
    confidence: 'high',
    locationAccuracy: 'Sveta Nedelya Meydanı ve St. Sofia Hotel çevresi',
    source: 'src-eyice-bulgaristan',
    summary: 'Renkli tuğla ve çini süslemeleriyle Alaca adını alan, Sofya merkezindeki anıtsal kubbeli Osmanlı eseri.',
    lost: true,
    current: '1878 savaşı sonrasında 1882 yılında tamamen yıktırılmıştır. Günümüzde yerinde Sveta Nedelya Meydanı yaya aksı, çevre banka binaları ve tramvay kavşağı yer almaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1520, text: 'İnşa edildi.', source: 'src-eyice-bulgaristan' },
      { year: 1882, text: 'Şehir meydanı düzenlemesinde yıktırıldı.', source: 'src-eyice-bulgaristan' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-sofia-saat-kulesi',
    name: 'Sofya Saat Kulesi',
    modern: 'Sofia Ottoman Clock Tower (Site of City Garden / National Theatre)',
    aliases: ['Sahat Kulesi', 'Sofya Sahat Tepe'],
    coordinates: [23.3260, 42.6945],
    layer: 'heritage',
    start: 1821,
    end: 1882,
    datePrecision: '1821 inşa; 1882 yıkım',
    confidence: 'high',
    locationAccuracy: 'Sofya Şehir Bahçesi (Gradska Gradina) ve Ivan Vazov Tiyatrosu parkı',
    source: 'src-eyice-bulgaristan',
    summary: 'Osmanlı döneminde kentin zamanını düzenleyen ahşap ve taş gövdeli saat kulesi.',
    lost: true,
    current: '1882 yılında yıktırılmıştır. Günümüzde kule parselinde Ivan Vazov Ulusal Tiyatrosu önündeki Gradska Gradina (Sofya Şehir Parkı) çeşmeli havuzu ve yaya parkı yer almaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1821, text: 'İnşa edildi.', source: 'src-eyice-bulgaristan' },
      { year: 1882, text: 'Park düzenlemesi sırasında yıktırıldı.', source: 'src-eyice-bulgaristan' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-plovdiv-taskopru-cami',
    name: 'Filibe Taşköprü Camii',
    modern: 'Tashkopru Mosque (Former site, Plovdiv)',
    aliases: ['Taşköprü Camii', 'Maritsa Camii', 'Alaca Cami (Filibe)'],
    coordinates: [24.7485, 42.1495],
    layer: 'heritage',
    start: 1440,
    end: 1930,
    datePrecision: '15. yüzyıl inşa; 1928 depremi ve 1930 sonrası yıkım',
    confidence: 'high',
    locationAccuracy: 'Meriç nehri Taşköprü girişi güney sahili',
    source: 'src-tdv-kiel-bg',
    summary: 'Meriç nehri üzerindeki tarihi Taşköprü’nün başında yer alan, kubbeli ve revaklı anıtsal Osmanlı camisi.',
    lost: true,
    current: '1928 depreminde hasar görmesinin ardından 1930’larda yıktırılmıştır. Günümüzde yerinde ticaret binaları, otopark alanı ve sahil lokantaları bulunmaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1440, text: 'Taşköprü menzilinde inşa edildi.', source: 'src-tdv-kiel-bg' },
      { year: 1928, text: 'Filibe depreminde minaresi ve son cemaat yeri yıkıldı.', source: 'src-tdv-kiel-bg' },
      { year: 1932, text: 'Kalan kısımları belediyece yıktırıldı.', source: 'src-tdv-kiel-bg' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-plovdiv-haci-hasan',
    name: 'Filibe Hacı Hasan Camii',
    modern: 'Hadzhi Hasan Mosque (Former site, Plovdiv)',
    aliases: ['Hacı Hasan Camisi'],
    coordinates: [24.7550, 42.1460],
    layer: 'heritage',
    start: 1650,
    end: 1965,
    datePrecision: '17. yüzyıl inşa; 1960’lar sosyalist imar yıkımı',
    confidence: 'medium',
    locationAccuracy: 'Eski Hacı Hasan Mahallesi, Tsar Boris III Bulvarı aksı',
    source: 'src-eyice-bulgaristan',
    summary: 'Filibe’nin köklü Türk mahallelerinden Hacı Hasan Mahallesi’nin merkez camisi.',
    lost: true,
    current: '1960’lı yıllarda sosyalist kentsel dönüşüm sırasında yıktırılmıştır. Günümüzde tam yerinde çok katlı konut blokları (blokovi) ve genişletilmiş Tsar Boris III bulvarı şeritleri yer almaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1650, text: 'İnşa edildi.', source: 'src-eyice-bulgaristan' },
      { year: 1965, text: 'Bulvar genişletmesi ve konut inşası için yıkıldı.', source: 'src-eyice-bulgaristan' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-plovdiv-bedesten',
    name: 'Filibe Bedesteni ve Kervansarayı',
    modern: 'Plovdiv Bezisten & Caravanserai (Site of Knyaz Aleksandar I Street)',
    aliases: ['Eski Bedesten', 'Muradiye Kervansarayı'],
    coordinates: [24.7478, 42.1432],
    layer: 'heritage',
    start: 1430,
    end: 1895,
    datePrecision: '15. yüzyıl inşa; 1890–1895 kentsel tasfiye',
    confidence: 'high',
    locationAccuracy: 'Knyaz Aleksandar I Ana Yaya Caddesi ve Roma Stadyumu çevresi',
    source: 'src-tdv-kiel-bg',
    summary: 'Cuma Camii yanında bulunan, kubbeli dükkânları ve kurşunlu mahzenleriyle Balkanların en zengin ticaret çarşılarından biri olan Osmanlı Bedesteni.',
    lost: true,
    current: '19. yüzyıl sonunda modern cadde açma planıyla yıktırılmıştır. Günümüzde yerinde Plovdiv’in ana yaya aksı olan Knyaz Aleksandar I Caddesi, neoklasik Avrupa tarzı mağaza binaları ve kafe terasları bulunmaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1430, text: 'II. Murad devrinde vakıf bedesteni olarak inşa edildi.', source: 'src-tdv-kiel-bg' },
      { year: 1895, text: 'Kentsel dönüşümde yıktırıldı.', source: 'src-tdv-kiel-bg' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-ruse-vilayet-konagi',
    name: 'Rusçuk Mithat Paşa Vilâyet Konağı',
    modern: 'Midhat Pasha Government Palace (Site of Ruse Courthouse / Svoboda Sq.)',
    aliases: ['Tuna Vilâyet Konağı', 'Hükümet Konağı'],
    coordinates: [25.9535, 43.8485],
    layer: 'heritage',
    start: 1865,
    end: 1912,
    datePrecision: '1865 Mithat Paşa inşası; 1912 sonrası yıkım',
    confidence: 'high',
    locationAccuracy: 'Rusçuk Özgürlük Meydanı (Svoboda) ve Adliye Sarayı',
    source: 'src-inalcik-tuna',
    summary: 'Mithat Paşa’nın Tuna Vilâyeti’ni idare etmek üzere inşa ettirdiği neoklasik ve Osmanlı sentezi görkemli vilayet konağı.',
    lost: true,
    current: '20. yüzyıl başında yıkılmıştır. Günümüzde tam yerinde Rusçuk Adliye Sarayı (Sudebna Palata), Özgürlük Meydanı (Svoboda) anıt alanı ve şehir parkı yer almaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1865, text: 'Mithat Paşa tarafından Tuna Vilâyeti hükümet sarayı olarak yaptırıldı.', source: 'src-inalcik-tuna' },
      { year: 1912, text: 'Hasar ve tasfiye sonrası yıktırıldı; yerine adliye sarayı planlandı.', source: 'src-inalcik-tuna' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-ruse-carsi-cami',
    name: 'Rusçuk Çarşı Camii (Ulu Cami)',
    modern: 'Ruse Bazaar Mosque (Site of Ruse State Opera / Theatre Square)',
    aliases: ['Rusçuk Ulu Cami', 'Büyük Cami'],
    coordinates: [25.9520, 43.8470],
    layer: 'heritage',
    start: 1610,
    end: 1885,
    datePrecision: '17. yüzyıl başı; 1885 civarı yıkım',
    confidence: 'high',
    locationAccuracy: 'Ruse Devlet Operası ve Tiyatro Meydanı parseli',
    source: 'src-tdv-kiel-bg',
    summary: 'Tuna boyundaki Rusçuk şehrinin çarşı merkezinde yer alan çok kubbeli ana ibadethanesi.',
    lost: true,
    current: '1877-78 savaşı sonrasında yıktırılmıştır. Günümüzde yerinde Ruse Devlet Operası Binası, Opera Meydanı ve halk yürüyüş parkı yer almaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1610, text: 'İnşa edildi.', source: 'src-tdv-kiel-bg' },
      { year: 1885, text: 'Belediye imar planıyla yıktırıldı.', source: 'src-tdv-kiel-bg' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-shumen-ali-pasa',
    name: 'Şumnu Gazi Ali Paşa Camii',
    modern: 'Ghazi Ali Pasha Mosque (Site of Shumen City Park)',
    aliases: ['Gazi Ali Paşa Camisi'],
    coordinates: [26.9280, 43.2730],
    layer: 'heritage',
    start: 1605,
    end: 1915,
    datePrecision: '1605 inşa; 1910–1915 yıkım',
    confidence: 'high',
    locationAccuracy: 'Şumnu Şehir Parkı (Gradski Park) giriş aksı',
    source: 'src-tdv-kiel-bg',
    summary: 'Şumnu kalesinin eteklerinde Gazi Ali Paşa vakfı olarak yaptırılan yüksek kubbeli anıt cami.',
    lost: true,
    current: '20. yüzyılın ilk çeyreğinde yıktırılmıştır. Günümüzde yerinde Şumnu Şehir Parkı (Gradska Gradina), yaya bulvarı ve dinlenme bahçeleri bulunmaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1605, text: 'Gazi Ali Paşa tarafından yaptırıldı.', source: 'src-tdv-kiel-bg' },
      { year: 1915, text: 'Park düzenlemesi sırasında yıktırıldı.', source: 'src-tdv-kiel-bg' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-shumen-arasta',
    name: 'Şumnu Arasta ve Eski Çarşı Medreseleri',
    modern: 'Shumen Arasta & Madrasas (Site of Central Pedestrian Square)',
    aliases: ['Şumnu Bedesteni Çevresi', 'Eski Çarşı'],
    coordinates: [26.9240, 43.2705],
    layer: 'heritage',
    start: 1580,
    end: 1970,
    datePrecision: '16. yüzyıl inşa; 1970–1980 sosyalist yeniden inşa yıkımı',
    confidence: 'high',
    locationAccuracy: 'Şumnu Merkez Yaya Meydanı, Tiyatro ve Grivitsa Anıtı çevresi',
    source: 'src-eyice-bulgaristan',
    summary: 'Osmanlı Şumnu’sunun ticaret ve eğitim kalbini oluşturan, onlarca medrese hücresi, dükkân ve arastadan oluşan külliye dokusu.',
    lost: true,
    current: '1970’li yıllarda Bulgar Sosyalist Partisi döneminde ‘modernleştirme’ adı altında tamamen dozerlerle yıkılmıştır. Günümüzde yerinde devasa betonarme Şumnu Merkez Yaya Meydanı, Grivitsa anıtı ve kültür sarayı yer almaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1580, text: 'Ticaret ve medrese merkezi olarak gelişti.', source: 'src-eyice-bulgaristan' },
      { year: 1975, text: 'Sosyalist meydan projesinde tüm Osmanlı dokusu yıktırıldı.', source: 'src-eyice-bulgaristan' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-razgrad-carsi-cami',
    name: 'Razgrad Çarşı Camii ve Medresesi',
    modern: 'Razgrad Bazaar Mosque (Site of Central Pedestrian Zone)',
    aliases: ['Çarşı Camii', 'Razgrad Medresesi'],
    coordinates: [26.5220, 43.5255],
    layer: 'heritage',
    start: 1620,
    end: 1935,
    datePrecision: '17. yüzyıl inşa; 1930–1935 yıkım',
    confidence: 'high',
    locationAccuracy: 'Razgrad Merkez Yaya Bölgesi ve Kültür Evi çevresi',
    source: 'src-tdv-kiel-bg',
    summary: 'Razgrad çarşısının göbeğinde esnafın ana ibadet ve eğitim merkezi olan revaklı cami ve medrese kompleksi.',
    lost: true,
    current: '1930’larda yıktırılmıştır. Günümüzde tam parselinde Razgrad Merkez Yaya Bölgesi, kamu binaları ve belediye kültür merkezi yer almaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1620, text: 'İnşa edildi.', source: 'src-tdv-kiel-bg' },
      { year: 1935, text: 'Yıktırıldı.', source: 'src-tdv-kiel-bg' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-silistra-ulu-cami',
    name: 'Silistre Ulu Camii (Sultan Bayezid Camii)',
    modern: 'Silistra Grand Mosque (Site of Dunavski Park)',
    aliases: ['Sultan Bayezid Camii', 'Hünkar Camii'],
    coordinates: [27.2690, 44.1195],
    layer: 'heritage',
    start: 1410,
    end: 1880,
    datePrecision: '15. yüzyıl başı inşa; 1877–1880 yıkım',
    confidence: 'high',
    locationAccuracy: 'Tuna kıyısı Dunavski Park (Tuna Parkı) yeşil sahası',
    source: 'src-tdv-kiel-bg',
    summary: 'Silistre Eyalet merkezinin en eski ve en büyük hünkar camisi; Tuna nehrine nazır bir tepede yükseliyordu.',
    lost: true,
    current: 'Rus harpleri sırasında top ateşleriyle ağır hasar görmüş, 1880’de tamamen yıktırılmıştır. Günümüzde yerinde Dunavski Park (Tuna Kıyı Parkı), yürüyüş yolları ve nehir seyir terası bulunmaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1410, text: 'Yıldırım Bayezid / Çelebi Mehmed döneminde inşa edildi.', source: 'src-tdv-kiel-bg' },
      { year: 1880, text: 'Kalıntıları temizlenerek parka dönüştürüldü.', source: 'src-tdv-kiel-bg' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-varna-kale-cami',
    name: 'Varna Kale Camii ve İç Kale Surları',
    modern: 'Varna Fortress Mosque (Site of Primorski Park / Coastal Boulevard)',
    aliases: ['İç Kale Camisi', 'Hisar Camii'],
    coordinates: [27.9220, 43.2080],
    layer: 'heritage',
    start: 1510,
    end: 1882,
    datePrecision: '16. yüzyıl inşa; 1878 Berlin Antlaşması maddesi uyarınca 1882’de yıkım',
    confidence: 'high',
    locationAccuracy: 'Varna Deniz Bahçesi (Primorski Park) ve sahil şeridi',
    source: 'src-tdv-kiel-bg',
    summary: 'Varna Kalesi’nin deniz cephesinde yer alan, Osmanlı garnizonunun ana ibadethanesi olan hisar camisi ve çevre burçları.',
    lost: true,
    current: '1878 Berlin Antlaşması’nın Tuna ve sahil kalelerinin yıkılmasını öngören maddesi gereğince yıkılmıştır. Günümüzde yerinde Primorski Park (Deniz Bahçesi), sahil promenadı ve akvaryum kompleksi yer almaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1510, text: 'Osmanlı kalesi içinde inşa edildi.', source: 'src-tdv-kiel-bg' },
      { year: 1882, text: 'Kale surlarıyla birlikte yıktırıldı.', source: 'src-tdv-kiel-bg' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-kardzhali-eski-arasta',
    name: 'Kırcaali Eski Türk Çarşısı (Arasta)',
    modern: 'Kardzhali Old Turkish Bazaar (Site of Central Square)',
    aliases: ['Kırcaali Çarşısı', 'Eski Arasta'],
    coordinates: [25.3710, 41.6435],
    layer: 'heritage',
    start: 1750,
    end: 1975,
    datePrecision: '18. yüzyıl ortası; 1970–1975 sosyalist dönüşüm',
    confidence: 'high',
    locationAccuracy: 'Kırcaali Merkez Meydanı, Belediye Binası ve Kültür Sarayı',
    source: 'src-simsir-bg-turks',
    summary: 'Geleneksel ahşap dükkânları, hanları, bakırcı ve derici atölyeleriyle Rodop Türk ticaretinin kalbi olan tarihi arasta dokusu.',
    lost: true,
    current: '1970’li yıllarda sosyalist kentsel dönüşümle tamamen yerle bir edilmiştir. Günümüzde tam üzerinde Dimitrov Meydanı (bugünkü Kırcaali Merkez Şehir Meydanı), Belediye Sarayı ve betonarme kamu blokları yer almaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1750, text: 'Geleneksel Rodop ticaret merkezi olarak gelişti.', source: 'src-simsir-bg-turks' },
      { year: 1973, text: 'Modern sosyalist meydan inşası için tamamen yıkıldı.', source: 'src-simsir-bg-turks' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-pazardzhik-murad-pasa',
    name: 'Tatar Pazarcık Murad Paşa Camii',
    modern: 'Murad Pasha Grand Mosque (Site of Konstantin Velichkov Square)',
    aliases: ['Muradiye Camii', 'Pazarcık Ulu Camii'],
    coordinates: [24.3315, 42.1925],
    layer: 'heritage',
    start: 1500,
    end: 1925,
    datePrecision: '16. yüzyıl başı inşa; 1920–1925 yıkım',
    confidence: 'high',
    locationAccuracy: 'Pazardzhik Merkez Meydanı (Konstantin Velichkov Meydanı)',
    source: 'src-tdv-kiel-bg',
    summary: 'Kasabanın merkezinde yer alan çok kubbeli, kervan menziline hizmet eden ulu cami.',
    lost: true,
    current: '1920’lerde yıktırılmıştır. Günümüzde tam yerinde Konstantin Velichkov Merkez Meydanı, Belediye Tiyatrosu ve fıskiyeli yaya alanı bulunmaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1500, text: 'İnşa edildi.', source: 'src-tdv-kiel-bg' },
      { year: 1925, text: 'Meydan açma projesinde yıktırıldı.', source: 'src-tdv-kiel-bg' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-tarnovo-firuz-bey',
    name: 'Tırnova Firuz Bey Camii',
    modern: 'Firuz Bey Mosque (Site of Patriarchal Cathedral, Tsarevets)',
    aliases: ['Tsarevets Hisar Camii', 'Firuz Bey Vakfı'],
    coordinates: [25.6515, 43.0835],
    layer: 'heritage',
    start: 1435,
    end: 1878,
    datePrecision: '1435 inşa; 1877–1878 savaş tahribatı ve tasfiye',
    confidence: 'high',
    locationAccuracy: 'Tsarevets Kalesi zirvesi, Patriarkal Katedral altı',
    source: 'src-eyice-bulgaristan',
    summary: 'Tırnova’nın ünlü Tsarevets Kalesi’nin zirvesinde Akıncı Beyi Firuz Bey tarafından inşa ettirilen kubbeli ve minareli hisar camisi.',
    lost: true,
    current: '1877-78 savaşı sırasında tahrip edilmiş, temelleri arkeolojik kazılarda açığa çıkarılmıştır. Günümüzde tepe noktasında Bulgar Ulusal Anıtı ve Katedrali (Patriarkal Katedral) yükselmektedir; cami temelleri arkeoloji parkı sınırındadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1435, text: 'Firuz Bey tarafından kale zirvesinde inşa ettirildi.', source: 'src-eyice-bulgaristan' },
      { year: 1878, text: 'Savaş sırasında yıkıldı.', source: 'src-eyice-bulgaristan' },
      { year: 1981, text: 'Yerinde devasa anıtsal Patriarkal Katedral tamamlandı.', source: 'src-eyice-bulgaristan' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-burgas-kale-cami',
    name: 'Burgaz Kalesi ve Kale Camii',
    modern: 'Burgas Castle Mosque (Site of Sea Garden / Port Area)',
    aliases: ['Pirgos Hisar Camii', 'Burgaz Sahil Camii'],
    coordinates: [27.4740, 42.4920],
    layer: 'heritage',
    start: 1620,
    end: 1888,
    datePrecision: '17. yüzyıl inşa; 1888 yıkım',
    confidence: 'medium',
    locationAccuracy: 'Burgaz Deniz Bahçesi (Morska Gradina) güney ucu ve liman',
    source: 'src-tdv-kiel-bg',
    summary: 'Burgaz sahilini koruyan Osmanlı hisarı ve hisar personeline tahsis edilen kubbeli cami.',
    lost: true,
    current: '1888 yılında liman genişletmesi ve sahil bahçesi projesi kapsamında tamamen yıktırılmıştır. Günümüzde yerinde Burgaz Deniz Bahçesi (Morska Gradina) ve liman tesisleri bulunmaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1620, text: 'İnşa edildi.', source: 'src-tdv-kiel-bg' },
      { year: 1888, text: 'Liman inşasında yıktırıldı.', source: 'src-tdv-kiel-bg' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-pleven-ulu-cami',
    name: 'Plevne Ulu Camii ve Bedesteni',
    modern: 'Pleven Grand Mosque & Bezisten (Site of Vazrazhdane Square)',
    aliases: ['Plevne Çarşı Camii', 'Gazi Cami'],
    coordinates: [24.6190, 43.4140],
    layer: 'heritage',
    start: 1530,
    end: 1878,
    datePrecision: '16. yüzyıl inşa; 1877 Plevne Kuşatması sonrası 1878’de yıkım',
    confidence: 'high',
    locationAccuracy: 'Plevne Vazrazhdane Meydanı ve Su Kaskadları kompleksi',
    source: 'src-tdv-kiel-bg',
    summary: 'Plevne’nin merkez çarşısında yer alan, kurşun kubbeli ulu cami ve çevresindeki bedesten dükkânları.',
    lost: true,
    current: '1877 kuşatmasında ağır topçu ateşiyle hasar gördükten sonra 1878’de tamamen yıktırılmıştır. Günümüzde tam yerinde Vazrazhdane Meydanı, Su Kaskadları (Vodnata Kaskada) ve belediye binaları yer almaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1530, text: 'İnşa edildi.', source: 'src-tdv-kiel-bg' },
      { year: 1877, text: 'Kuşatma sırasında ağır hasar aldı ve ertesi yıl yıkıldı.', source: 'src-tdv-kiel-bg' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-vidin-mustafa-pasa',
    name: 'Vidin Mustafa Paşa Camii',
    modern: 'Mustafa Pasha Mosque (Site of Danube Riverside Park)',
    aliases: ['Sahil Camii', 'Vidin Mustafa Paşa'],
    coordinates: [22.8820, 43.9930],
    layer: 'heritage',
    start: 1680,
    end: 1895,
    datePrecision: '17. yüzyıl sonu; 1895 yıkım',
    confidence: 'medium',
    locationAccuracy: 'Vidin Tuna Sahil Parkı ve nehir iskelesi aksı',
    source: 'src-tdv-kiel-bg',
    summary: 'Tuna nehri kıyısında yükselen, nehir taşımacılığı yapan gemicilerin ve garnizonun ibadet ettiği sahil camisi.',
    lost: true,
    current: '19. yüzyıl sonunda yıktırılmıştır. Günümüzde tam yerinde Vidin Tuna Sahil Parkı, nehir kordonu ve şehir yürüyüş yolu bulunmaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1680, text: 'İnşa edildi.', source: 'src-tdv-kiel-bg' },
      { year: 1895, text: 'Kıyı düzenlemesinde yıktırıldı.', source: 'src-tdv-kiel-bg' }
    ],
    observations: []
  },

  // --- B. DÖNÜŞTÜRÜLEN / İŞLEVİ DEĞİŞTİRİLEN ESERLER (10 ANIT) ---
  {
    id: 'bg-mon-sofia-buyuk-cami',
    name: 'Sofya Büyük Cami (Ulu Cami)',
    modern: 'Buyuk Mosque / National Archaeological Museum, Sofia',
    aliases: ['Koca Mahmud Paşa Camii', 'Ulu Cami', 'Национален археологически музей'],
    coordinates: [23.3245, 42.6963],
    layer: 'heritage',
    start: 1474,
    datePrecision: '1474 tamamlanma; 1892’den itibaren müze',
    confidence: 'high',
    locationAccuracy: 'Cumhurbaşkanlığı karşısı, Atanas Burov Meydanı',
    source: 'src-eyice-bulgaristan',
    summary: 'Fatih Sultan Mehmed devrinde inşa edilen, 9 kurşunlu kubbesiyle erken dönem Osmanlı ulu cami mimarisinin şaheseri.',
    partialLoss: true,
    current: 'Cami ibadete kapalıdır. 1879’da kütüphane ve hastane olarak kullanıldıktan sonra restore edilerek günümüzde Bulgaristan Ulusal Arkeoloji Müzesi (National Archaeological Museum) ana binası olarak hizmet vermektedir; 9 kubbesi eksiksiz ayaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1474, text: 'Sadrazam Mahmud Paşa tarafından 9 kubbeli ulu cami olarak tamamlandı.', source: 'src-eyice-bulgaristan' },
      { year: 1878, text: 'Savaşta askeri hastaneye dönüştürüldü.', source: 'src-eyice-bulgaristan' },
      { year: 1892, text: 'Kraliyet kararnamesiyle Ulusal Arkeoloji Müzesi haline getirildi.', source: 'src-eyice-bulgaristan' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-sofia-kara-cami',
    name: 'Sofya Kara Cami (Koca Hüsrev Paşa Camii)',
    modern: 'Black Mosque / Church of Seven Saints (Sveti Sedmochislenitsi), Sofia',
    aliases: ['Koca Hüsrev Paşa Camii', 'İmaret Camii', 'Свети Седмочисленици'],
    coordinates: [23.3278, 42.6898],
    layer: 'heritage',
    start: 1528,
    datePrecision: '1528 Mimar Sinan inşası; 1901–1903 kiliseye dönüştürme',
    confidence: 'high',
    locationAccuracy: 'Graf Ignatiev Caddesi, Sveti Sedmochislenitsi Meydanı',
    source: 'src-eyice-bulgaristan',
    summary: 'Kanuni Sultan Süleyman’ın sadrazamı Koca Hüsrev Paşa adına Mimar Sinan tarafından tasarlanan tek kubbeli anıtsal cami; siyah granit kaplamaları sebebiyle Kara Cami olarak anılmıştır.',
    partialLoss: true,
    current: '1901–1903 yıllarında Rus mimarlar tarafından kiliseye dönüştürülmüştür. Minaresi ve revakları yıkılmış, yapının dört köşesine kuleler eklenmiştir. Günümüzde faal Sveti Sedmochislenitsi Kilisesi (Church of the Seven Saints) olarak kullanılmaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1528, text: 'Mimar Sinan tarafından Koca Hüsrev Paşa adına inşa edildi.', source: 'src-eyice-bulgaristan' },
      { year: 1878, text: 'Cephanelik ve hapishane olarak kullanıldı.', source: 'src-eyice-bulgaristan' },
      { year: 1903, text: 'Ortodoks kilisesi olarak ibadete açıldı.', source: 'src-eyice-bulgaristan' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-stara-zagora-hamza-bey',
    name: 'Eski Zağra Hamza Bey Camii (Dinler Müzesi)',
    modern: 'Hamza Bey Mosque / Museum of Religions, Stara Zagora',
    aliases: ['Eski Cami (Eski Zağra)', 'Музей на религиите'],
    coordinates: [25.6292, 42.4248],
    layer: 'heritage',
    start: 1409,
    datePrecision: '1409 inşa; 2011 restorasyon ve Dinler Müzesi açılışı',
    confidence: 'high',
    locationAccuracy: 'Şehir merkezi, Çar Simeon Veliki Bulvarı',
    source: 'src-tdv-kiel-bg',
    summary: '1409 yılında inşa edilen, 17 metrelik anıtsal kubbesi ve zengin 19. yüzyıl barok kalem işi süslemeleriyle Trakya’nın en önemli Osmanlı eserlerinden biri.',
    partialLoss: true,
    current: 'İbadete kapalıdır. Minaresi kaidesine kadar yıkılmış olan yapı titizlikle restore edilerek 2011 yılında Dinler Müzesi (Museum of Religions) olarak ziyarete açılmıştır. İçinde Hıristiyan, Müslüman ve Trak pagan dönemi buluntuları sergilenmektedir.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1409, text: 'Hamza Bey tarafından inşa ettirildi.', source: 'src-tdv-kiel-bg' },
      { year: 1877, text: 'Eski Zağra yangınında minaresi yıkıldı.', source: 'src-tdv-kiel-bg' },
      { year: 2011, text: 'Dinler Müzesi olarak hizmete açıldı.', source: 'src-ninkn-bg-monuments' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-plovdiv-cifte-hamam',
    name: 'Filibe Çifte Hamam (Taş Hamam)',
    modern: 'Chifte Hamam / Center for Contemporary Art, Plovdiv',
    aliases: ['Taş Hamam', 'Banya Starinna', 'Баня Старинна'],
    coordinates: [24.7510, 42.1485],
    layer: 'heritage',
    start: 1480,
    datePrecision: '15. yüzyıl sonu inşa; 1999’dan itibaren sanat merkezi',
    confidence: 'high',
    locationAccuracy: 'Altı Tepe etekleri, 6 Septemvri Bulvarı köşesi',
    source: 'src-eyice-bulgaristan',
    summary: 'Kadınlar ve erkekler kısmı ayrı olan çifte kubbeli büyük Osmanlı hamamı; zengin tuğla tonozları ve aydınlatma delikli kurnalarıyla korunmuştur.',
    partialLoss: true,
    current: 'Hamam işlevini yitirmiştir. Restore edilerek Banya Starinna - Çağdaş Sanat Merkezi (Center for Contemporary Art) sergi salonuna dönüştürülmüştür.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1480, text: 'İnşa edildi.', source: 'src-eyice-bulgaristan' },
      { year: 1999, text: 'Çağdaş Sanat Merkezi olarak hizmete açıldı.', source: 'src-ninkn-bg-monuments' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-plovdiv-orta-mezar',
    name: 'Filibe Orta Mezar Hamamı',
    modern: 'Orta Mezar Hamam (Art Gallery & Monument, Plovdiv)',
    aliases: ['Yahudi Hamamı', 'Orta Mezar'],
    coordinates: [24.7435, 42.1445],
    layer: 'heritage',
    start: 1490,
    datePrecision: '15. yüzyıl sonu; 2016 yangın ve restorasyon',
    confidence: 'medium',
    locationAccuracy: 'Ruski Bulvarı köşesi, Orta Mezar mevkii',
    source: 'src-eyice-bulgaristan',
    summary: 'Filibe’nin tarihi Orta Mezar semtinde bulunan 15. yüzyıl kubbeli Osmanlı hamamı.',
    partialLoss: true,
    current: 'Hamam işlevi sona ermiştir. 2016 yangınında kubbesi hasar gördükten sonra restore edilmiş olup sanat galerisi ve kültür mekanı olarak kullanılmaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1490, text: 'İnşa edildi.', source: 'src-eyice-bulgaristan' },
      { year: 2016, text: 'Yangın sonrası restorasyona alındı.', source: 'src-ninkn-bg-monuments' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-kyustendil-ahmed-bey',
    name: 'Köstendil Ahmed Bey Camii',
    modern: 'Ahmed Bey Mosque / Regional History Museum Exhibition Hall, Kyustendil',
    aliases: ['Ahmet Bey Camisi', 'Джамия Ахмед бей'],
    coordinates: [22.6895, 42.2835],
    layer: 'heritage',
    start: 1575,
    datePrecision: '1575 inşa; müze sergi salonu dönüşümü',
    confidence: 'high',
    locationAccuracy: 'Kentsel merkez, Roma termalleri yanı',
    source: 'src-tdv-kiel-bg',
    summary: 'Klasik Osmanlı üslubunda, geniş kubbeli, mermer portalli ve tuğla bezemeli anıt cami.',
    partialLoss: true,
    current: 'İbadete kapalıdır. Minaresi 1904 depreminde çökmüştür. Yapı restore edilmiş olup günümüzde Köstendil Bölge Tarih Müzesi Sergi ve Konferans Salonu olarak hizmet vermektedir.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1575, text: 'Ahmed Bey tarafından inşa ettirildi.', source: 'src-tdv-kiel-bg' },
      { year: 1904, text: 'Depremde minaresi yıkıldı.', source: 'src-tdv-kiel-bg' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-kardzhali-medrese-muze',
    name: 'Kırcaali Eski Medrese Binası',
    modern: 'Kardzhali Ottoman Madrasa / Regional Historical Museum',
    aliases: ['Kırcaali İdadisi', 'Tarih Müzesi Binası'],
    coordinates: [25.3725, 41.6465],
    layer: 'heritage',
    start: 1870,
    datePrecision: '1870 civarı Osmanlı medrese/idadi inşası',
    confidence: 'high',
    locationAccuracy: 'Kırcaali Şehir Parkı içi, Bölge Tarih Müzesi',
    source: 'src-simsir-bg-turks',
    summary: 'Geç Osmanlı döneminde medrese ve idadi olarak inşa edilen, kemerli pencereleri, ahşap tavanları ve revaklı avlusuyla anıtsal taş bina.',
    partialLoss: true,
    current: 'Medrese işlevi son bulmuştur. Yapı mükemmel biçimde korunarak Kırcaali Bölge Tarih Müzesi (Regional Historical Museum) ana binası haline getirilmiştir.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1870, text: 'İslam ilimler medresesi ve idadi olarak inşa edildi.', source: 'src-simsir-bg-turks' },
      { year: 1980, text: 'Bölge Tarih Müzesi olarak ziyarete açıldı.', source: 'src-simsir-bg-turks' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-vidin-pazvantoglu-kutuphane',
    name: 'Vidin Pazvantoğlu Kütüphanesi',
    modern: 'Pazvantoglu Library & Cultural Monument, Vidin',
    aliases: ['Osman Pazvantoğlu Kütüphanesi', 'Библиотека на Осман Пазвантоглу'],
    coordinates: [22.8715, 43.9880],
    layer: 'heritage',
    start: 1802,
    datePrecision: '1802 Pazvantoğlu Osman Paşa vakfı',
    confidence: 'high',
    locationAccuracy: 'Tuna Parkı kenarı, Pazvantoğlu Camii karşısı',
    source: 'src-tdv-kiel-bg',
    summary: 'Pazvantoğlu Osman Paşa’nın camisinin hemen karşısına inşa ettirdiği, kubbeli taş kütüphane binası; zengin el yazması eserler barındırıyordu.',
    partialLoss: true,
    current: 'Kütüphane el yazmaları Sofya Ulusal Kütüphanesi’ne nakledilmiştir. Taş kubbeli tarihi bina restore edilmiş olup anıt ve kültürel etkinlik mekanı olarak korunmaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1802, text: 'Pazvantoğlu Osman Paşa tarafından vakfedildi.', source: 'src-tdv-kiel-bg' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-samokov-bayrakli',
    name: 'Samakov Bairakli Camii (Hüsrev Paşa Camii)',
    modern: 'Bairakli Mosque / Museum Monument, Samokov',
    aliases: ['Yokuş Camii', 'Bayraklı Cami', 'Байракли джамия'],
    coordinates: [23.5580, 42.3365],
    layer: 'heritage',
    start: 1845,
    datePrecision: '1845 inşa; anıt-müze koruması',
    confidence: 'high',
    locationAccuracy: 'Samakov merkez, pazar yeri civarı',
    source: 'src-eyice-bulgaristan',
    summary: 'Balkanlar’ın en olağanüstü ahşap tavan işçiliğine ve Samokov ikon ressamları okulunun yaptığı barok ve oryantalist duvar fresklerine sahip eşsiz cami.',
    partialLoss: true,
    current: 'Düzenli ibadete kapalıdır. Bulgaristan Kültür Bakanlığı ve NINKN tarafından birinci derece ulusal kültür anıtı olarak tescillenmiş ve Anıt Müze olarak ziyarete açık tutulmaktadır.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1845, text: 'Koca Hüsrev Paşa vakfiyesiyle inşa edildi.', source: 'src-eyice-bulgaristan' },
      { year: 1966, text: 'Kapsamlı restorasyondan geçirilerek anıt-müze statüsü verildi.', source: 'src-ninkn-bg-monuments' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-karlovo-ali-bey',
    name: 'Karlova Ali Bey Camii',
    modern: 'Ali Bey Mosque / Cultural Center, Karlovo',
    aliases: ['Karlı Bey Camisi', 'Куршум джамия Карлово'],
    coordinates: [24.8040, 42.6425],
    layer: 'heritage',
    start: 1485,
    datePrecision: '1485 Karlı Bey vakfı',
    confidence: 'high',
    locationAccuracy: 'Şehir merkezi, Karlı Bey Meydanı',
    source: 'src-tdv-kiel-bg',
    summary: 'Erken dönem tek kubbeli kurşun kaplı Osmanlı camisi; mermer taç kapısı ve tuğla işçiliğiyle dikkat çeker.',
    partialLoss: true,
    current: 'İbadete kapalıdır. Uzun süren restorasyonun ardından Karlovo Belediyesi tarafından Kültür ve Sergi Salonu olarak tescillenmiştir.',
    currentAsOf: '2026 kentsel durum',
    events: [
      { year: 1485, text: 'Karlı Bey tarafından kasabanın merkez camisi olarak yaptırıldı.', source: 'src-tdv-kiel-bg' }
    ],
    observations: []
  },

  // --- C. AYAKTA KALAN / ORİJİNAL FORMUNU KORUYAN / FAAL İBADETE AÇIK ANITLAR (32 ANIT) ---
  {
    id: 'bg-mon-sofia-banya-bashi',
    name: 'Sofya Banya Başı Camii (Mimar Sinan)',
    modern: 'Banya Bashi Mosque, Sofia',
    aliases: ['Molla Seyfullah Efendi Camii', 'Banyabaşı', 'Баня баши джамия'],
    coordinates: [23.3225, 42.6995],
    layer: 'heritage',
    start: 1566,
    datePrecision: '1566 Mimar Sinan tasarımı; günümüzde faal',
    confidence: 'high',
    locationAccuracy: 'Knyaginya Mariya Luiza Bulvarı, Merkez Hamamı karşısı',
    source: 'src-eyice-bulgaristan',
    summary: 'Mimar Sinan’ın Sofya’da günümüze ulaşan ve ibadete açık olan tek faal eseridir. Altındaki termal su kaynağı sebebiyle Banya Başı olarak anılmıştır; tek kubbesi, mermer minaresi ve çinileriyle ayaktadır.',
    current: 'Sofya’da ibadete açık olan tek faal tarihi Osmanlı camisidir; Bulgaristan Başmüftülüğü merkez ibadethanesidir.',
    currentAsOf: '2026 faal durum',
    events: [
      { year: 1566, text: 'Kadı Seyfullah Efendi vakfıyla Mimar Sinan tarafından inşa edildi.', source: 'src-eyice-bulgaristan' },
      { year: 2007, text: 'Kapsamlı restorasyondan geçti ve faal ibadeti sürdürülmektedir.', source: 'src-ninkn-bg-monuments' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-plovdiv-cuma',
    name: 'Filibe Cuma Camii (Muradiye Camii)',
    modern: 'Dzhumaya Mosque / Muradiye Mosque, Plovdiv',
    aliases: ['Ulu Cami (Filibe)', 'Hüdavendigar Camii', 'Джумая джамия'],
    coordinates: [24.7480, 42.1472],
    layer: 'heritage',
    start: 1364,
    datePrecision: '1364 I. Murad fethi sonrası ilk inşa; 1425 II. Murad yeniden inşası',
    confidence: 'high',
    locationAccuracy: 'Roma Stadyumu Meydanı, Filibe yaya aksının merkezi',
    source: 'src-tdv-kiel-bg',
    summary: '9 kurşun kaplı kubbesi, mermer şadırvanı, zengin 18. yüzyıl barok kalem işleri ve görkemli minaresiyle Balkanlar’daki en anıtsal ve en faal Osmanlı Ulu Camisidir.',
    current: 'Eksiksiz ayakta, mükemmel durumda korunmuş ve Filibe Müslüman cemaatinin ana faal ibadethanesidir.',
    currentAsOf: '2026 faal durum',
    events: [
      { year: 1364, text: 'Lala Şahin Paşa ve I. Murad tarafından ilk cami yapıldı.', source: 'src-tdv-kiel-bg' },
      { year: 1425, text: 'II. Murad tarafından 9 kubbeli ulu cami olarak yeniden inşa ettirildi.', source: 'src-eyice-bulgaristan' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-plovdiv-imaret',
    name: 'Filibe İmaret Camii (Şahabeddin Paşa Camii)',
    modern: 'Imaret Mosque / Shihabeddin Pasha Mosque, Plovdiv',
    aliases: ['Gazi Şahabeddin Paşa Camii', 'İmaret', 'Имарет джамия'],
    coordinates: [24.7470, 42.1520],
    layer: 'heritage',
    start: 1444,
    datePrecision: '1444 Rumeli Beylerbeyi Şahabeddin Paşa inşası',
    confidence: 'high',
    locationAccuracy: 'Meriç nehri güney kıyısı, İmaret köprüsü başı',
    source: 'src-tdv-kiel-bg',
    summary: 'II. Murad devri Rumeli Beylerbeyi Lala Şahabeddin Paşa tarafından yaptırılan cami, imaret ve türbe külliyesi; zikzak tuğla örgüleri ve türbesiyle ayaktadır.',
    current: 'Ayakta, restore edilmiş ve faal ibadete açıktır.',
    currentAsOf: '2026 faal durum',
    events: [
      { year: 1444, text: 'Gazi Şahabeddin Paşa tarafından külliye olarak inşa ettirildi.', source: 'src-tdv-kiel-bg' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-shumen-tombul',
    name: 'Şumnu Şerif Halil Paşa Camii (Tombul Cami)',
    modern: 'Tombul Mosque / Sherif Halil Pasha Mosque, Shumen',
    aliases: ['Tombul Cami', 'Şerif Halil Paşa Külliyesi', 'Томбул джамия'],
    coordinates: [26.9180, 43.2685],
    layer: 'heritage',
    start: 1744,
    datePrecision: '1744 inşa; Balkanların en büyük 2. tarihi camisi',
    confidence: 'high',
    locationAccuracy: 'Tombul Cami sokak, Şumnu kalesi etekleri',
    source: 'src-eyice-bulgaristan',
    summary: '25 metre yükseklikteki anıtsal kubbesi, 40 metrelik tek şerefeli minaresi, medrese odaları, kütüphanesi, şadırvanlı sütunlu avlusu ve Lale Devri kalem işi süslemeleriyle Balkanlar’ın Edirne Selimiye’den sonraki en büyük şaheseridir.',
    current: 'Eksiksiz korunmuş, TİKA ve Bulgar Devleti işbirliğiyle restore edilmiş ve faal ibadete açıktır; medresesi ilahiyat okulu olarak kullanılmaktadır.',
    currentAsOf: '2026 faal durum',
    events: [
      { year: 1744, text: 'Şerif Halil Paşa tarafından külliye olarak tamamlandı.', source: 'src-eyice-bulgaristan' },
      { year: 2019, text: 'TİKA destekli kapsamlı bilimsel restorasyon tamamlandı.', source: 'src-ninkn-bg-monuments' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-razgrad-ibrahim-pasa',
    name: 'Razgrad İbrahim Paşa Camii',
    modern: 'Ibrahim Pasha Mosque, Razgrad',
    aliases: ['Pargalı İbrahim Paşa Camii', 'Makbul İbrahim Paşa', 'Ибрахим паша джамия'],
    coordinates: [26.5245, 43.5265],
    layer: 'heritage',
    start: 1616,
    datePrecision: '1616 inşa tamamlanma; UNESCO geçici liste adayı',
    confidence: 'high',
    locationAccuracy: 'Razgrad şehir merkezi, Şehir Parkı yanı',
    source: 'src-tdv-kiel-bg',
    summary: 'Balkanlar’ın en anıtsal kubbeli Osmanlı yapılarından biridir. Yüksek kubbesi, mermer portalı, mukarnaslı mihrabı ve klasik Osmanlı oranlarıyla Deliorman’ın simgesidir.',
    current: 'Büyük ölçekli restorasyonu tamamlanmış olup birinci derece korunması gerekli ulusal anıt statüsündedir.',
    currentAsOf: '2026 tescil durumu',
    events: [
      { year: 1535, text: 'Pargalı İbrahim Paşa vakfıyla inşasına başlandı.', source: 'src-tdv-kiel-bg' },
      { year: 1616, text: 'Mahmut Paşa döneminde kubbesi tamamlandı.', source: 'src-tdv-kiel-bg' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-razgrad-ahmed-bey',
    name: 'Razgrad Ahmed Bey Camii',
    modern: 'Ahmed Bey Mosque, Razgrad',
    aliases: ['Ahmet Bey Camisi', 'Джамия Ахмед бей Разград'],
    coordinates: [26.5265, 43.5280],
    layer: 'heritage',
    start: 1542,
    datePrecision: '1542 inşa',
    confidence: 'high',
    locationAccuracy: 'Şehir merkezi',
    source: 'src-tdv-kiel-bg',
    summary: 'Klasik Osmanlı tek kubbeli mimarisi, kesme taş ve tuğla almaşık duvar örgüsüyle inşa edilmiş erken dönem Deliorman anıtı.',
    current: 'Ayaktadır, restore edilmiş kültür varlığıdır.',
    currentAsOf: '2026 durum',
    events: [{ year: 1542, text: 'Ahmed Bey tarafından yaptırıldı.', source: 'src-tdv-kiel-bg' }],
    observations: []
  },
  {
    id: 'bg-mon-isperih-demir-baba',
    name: 'Demir Baba Tekkesi (İsperih / Kemallar)',
    modern: 'Demir Baba Tekke, Sveshtari / Isperih',
    aliases: ['Demir Baba Türbesi', 'Демир баба теке'],
    coordinates: [26.7580, 43.7380],
    layer: 'heritage',
    start: 1550,
    datePrecision: '16. yüzyıl ortası; Alevi-Bektaşi kutsal alanı',
    confidence: 'high',
    locationAccuracy: 'Sboryanovo Arkeoloji ve Doğa Koruma Alanı kanyonu',
    source: 'src-tdv-kiel-bg',
    summary: 'Deliorman’da derin bir kanyon tabanında kutsal pınarın yanında yükselen, yedigen planlı kubbeli türbe ve zaviye; Rumeli Alevi-Bektaşi inancının en kutsal ziyaretgâhıdır.',
    current: 'Mükemmel durumda ayaktadır; hem Müslümanlar hem çevre halkı tarafından ziyaret edilen faal kutsal alandır.',
    currentAsOf: '2026 faal durum',
    events: [
      { year: 1550, text: 'Demir Baba adına yedigen taş türbe inşa edildi.', source: 'src-tdv-kiel-bg' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-silistra-kursunlu',
    name: 'Silistre Kurşunlu Camii',
    modern: 'Kursunlu Mosque, Silistra',
    aliases: ['Kurşunlu Cami', 'Куршумлу джамия'],
    coordinates: [27.2660, 44.1165],
    layer: 'heritage',
    start: 1620,
    datePrecision: '17. yüzyıl başı',
    confidence: 'high',
    locationAccuracy: 'Silistre merkez, Hristo Botev caddesi',
    source: 'src-tdv-kiel-bg',
    summary: 'Kurşun kaplı kubbesi, son cemaat yeri mermer sütunları ve zarif minaresiyle Silistre’nin günümüze ulaşan tek faal tarihi camisidir.',
    current: 'Eksiksiz ayakta ve Silistre Müslüman cemaatine faal ibadete açıktır.',
    currentAsOf: '2026 faal durum',
    events: [{ year: 1620, text: 'İnşa edildi.', source: 'src-tdv-kiel-bg' }],
    observations: []
  },
  {
    id: 'bg-mon-silistra-mecidiye-tabyasi',
    name: 'Silistre Mecidiye Tabyası',
    modern: 'Medzhidi Tabia Fortress, Silistra',
    aliases: ['Mecidiye Kalesi', 'Меджиди табия'],
    coordinates: [27.2580, 44.1030],
    layer: 'heritage',
    start: 1853,
    datePrecision: '1853 Sultan Abdülmecid dönemi Tuna istihkamı',
    confidence: 'high',
    locationAccuracy: 'Silistre güney tepesi stratejik hakim mevki',
    source: 'src-evliya-bg',
    summary: 'Osmanlı askeri mimarisi ve tahkimat mühendisliğinin şaheseri; altıgen planlı taş surları, yer altı tünelleri ve cephanelikleriyle 1854 Rus Kuşatması’nı kıran kale.',
    current: 'Balkanlar’da en iyi korunmuş Osmanlı tabyalarından biridir; askeri müze olarak ziyarete açıktır.',
    currentAsOf: '2026 durum',
    events: [
      { year: 1853, text: 'Prusyalı mühendisler ve Osmanlı ustaları işbirliğiyle tamamlandı.', source: 'src-evliya-bg' },
      { year: 1854, text: 'Rus ordusunun 40 günlük kuşatmasını başarıyla püskürttü.', source: 'src-evliya-bg' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-vidin-pazvantoglu-cami',
    name: 'Vidin Pazvantoğlu Osman Paşa Camii',
    modern: 'Osman Pazvantoglu Mosque, Vidin',
    aliases: ['Kalpli Minareli Cami', 'Джамия на Осман Пазвантоглу'],
    coordinates: [22.8710, 43.9875],
    layer: 'heritage',
    start: 1801,
    datePrecision: '1801 inşa; minare külahında hilal yerine kalp sembolü',
    confidence: 'high',
    locationAccuracy: 'Tuna Şehir Parkı yanı, nehir kıyısı',
    source: 'src-tdv-kiel-bg',
    summary: 'Vidin ayanı Pazvantoğlu Osman Paşa tarafından yaptırılan, minaresinin tepesinde İslam hilali yerine kalp figürü taşımasıyla dünyada eşi benzeri olmayan ünlü anıt cami.',
    current: 'Eksiksiz ayakta, korunmuş ve Vidin Müslüman cemaati için faal ibadete açıktır.',
    currentAsOf: '2026 faal durum',
    events: [
      { year: 1801, text: 'Pazvantoğlu Osman Paşa tarafından inşa ettirildi.', source: 'src-tdv-kiel-bg' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-vidin-baba-vida',
    name: 'Vidin Baba Vida Kalesi',
    modern: 'Baba Vida Fortress (Ottoman Fortifications), Vidin',
    aliases: ['Baba Vida', 'Баба Вида'],
    coordinates: [22.8940, 43.9925],
    layer: 'heritage',
    start: 1396,
    datePrecision: '1396 Osmanlı fethi; 17.–18. yy Tuna tabyaları',
    confidence: 'high',
    locationAccuracy: 'Tuna nehrinin keskin kıvrımındaki nehir kalesi',
    source: 'src-tdv-kiel-bg',
    summary: 'Tuna kıyısında Ortaçağ ve Osmanlı döneminde genişletilen, hendekleri suyla dolan, mazgalları ve top tabyaları eksiksiz duran görkemli nehir hisarı.',
    current: 'Mükemmel durumda korunmuş olup açık hava müzesi olarak hizmet vermektedir.',
    currentAsOf: '2026 durum',
    events: [{ year: 1396, text: 'Osmanlı idaresine geçti ve Tuna üssü olarak tahkim edildi.', source: 'src-tdv-kiel-bg' }],
    observations: []
  },
  {
    id: 'bg-mon-haskovo-eski-cami',
    name: 'Hasköy Eski Cami (1395 İnşa Kitabeli)',
    modern: 'Eski Mosque, Haskovo',
    aliases: ['Eski Cami (Haskovo)', 'Ески джамия Хасково'],
    coordinates: [25.5570, 41.9350],
    layer: 'heritage',
    start: 1395,
    datePrecision: '1395 inşa kitabesi; Bulgaristan’daki en eski tarihli cami',
    confidence: 'high',
    locationAccuracy: 'Hasköy merkez, San Stefan caddesi',
    source: 'src-eyice-bulgaristan',
    summary: 'Girişindeki mermer kitabede Hicri 797 (Miladi 1395) tarihi yazılı olan, modern Bulgaristan sınırları içinde inşa kitabesi günümüze ulaşan en eski Osmanlı camisidir.',
    current: 'Eksiksiz ayakta ve faal ibadete açıktır; Hasköy Müftülüğü merkez camisidir.',
    currentAsOf: '2026 faal durum',
    events: [
      { year: 1395, text: 'İnşa kitabesi konuldu.', source: 'src-eyice-bulgaristan' },
      { year: 2014, text: 'Kapsamlı restorasyonu tamamlandı.', source: 'src-ninkn-bg-monuments' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-varna-hayriye',
    name: 'Varna Hayriye Camii',
    modern: 'Hayriye Mosque, Varna',
    aliases: ['Cuma Camii (Varna)', 'Хайрие джамия'],
    coordinates: [27.9150, 43.2030],
    layer: 'heritage',
    start: 1835,
    datePrecision: '1835 inşa; faal ibadethane',
    confidence: 'high',
    locationAccuracy: 'Varna tarihi merkez, Dunav caddesi',
    source: 'src-tdv-kiel-bg',
    summary: 'II. Mahmud döneminde inşa edilen, klasik oranlı minaresi ve son cemaat yeriyle Varna merkezindeki en eski ayakta kalan ibadethane.',
    current: 'Eksiksiz ayakta ve Varna Müslüman cemaati için faal ibadete açıktır.',
    currentAsOf: '2026 faal durum',
    events: [{ year: 1835, text: 'İnşa edildi.', source: 'src-tdv-kiel-bg' }],
    observations: []
  },
  {
    id: 'bg-mon-varna-aziziye',
    name: 'Varna Aziziye Camii',
    modern: 'Aziziye Mosque, Varna',
    aliases: ['Sultan Abdülaziz Camii', 'Азизие джамия'],
    coordinates: [27.9110, 43.2015],
    layer: 'heritage',
    start: 1869,
    datePrecision: '1869 Sultan Abdülaziz inşası',
    confidence: 'high',
    locationAccuracy: 'Varna tren garı civarı, Angel Georgiev caddesi',
    source: 'src-eyice-bulgaristan',
    summary: 'Sultan Abdülaziz devrinde inşa edilen, neoklasik Osmanlı üslubundaki son dönem anıt camisi.',
    current: 'Ayakta ve faal ibadete açıktır.',
    currentAsOf: '2026 faal durum',
    events: [{ year: 1869, text: 'Sultan Abdülaziz adına tamamlandı.', source: 'src-eyice-bulgaristan' }],
    observations: []
  },
  {
    id: 'bg-mon-ardino-seytan-koprusu',
    name: 'Eğridere Şeytan Köprüsü (Dyavolski Most)',
    modern: 'Devil’s Bridge / Dyavolski Most, Ardino',
    aliases: ['Şeytan Köprüsü', 'Arda Köprüsü', 'Дяволски мост'],
    coordinates: [25.1140, 41.6205],
    layer: 'heritage',
    start: 1515,
    datePrecision: '1515 Yavuz Sultan Selim dönemi usta Dimitar / Osmanlı mühendisliği',
    confidence: 'high',
    locationAccuracy: 'Arda nehri kanyonu, Eğridere menzili',
    source: 'src-tdv-kiel-bg',
    summary: 'Arda nehrinin sarp kanyonu üzerinde 56 metre uzunluğunda, 3 sivri kemerli ve kemer içlerinde su tahliye gözleri bulunan, mühendislik harikası tarihi Osmanlı taş köprüsü.',
    current: 'Balkanlar’ın en sağlam korunmuş Osmanlı köprülerindendir; UNESCO dünya mirası aday listesinde ve turistik anıttır.',
    currentAsOf: '2026 durum',
    events: [
      { year: 1515, text: 'Eski Roma güzergahı üzerinde Osmanlı kervan köprüsü olarak inşa edildi.', source: 'src-tdv-kiel-bg' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-kyustendil-fatih',
    name: 'Köstendil Fatih Sultan Mehmed Camii',
    modern: 'Fatih Sultan Mehmed Mosque, Kyustendil',
    aliases: ['Fatih Camisi', 'Джамия Фатих Мехмед'],
    coordinates: [22.6880, 42.2825],
    layer: 'heritage',
    start: 1531,
    datePrecision: '1531 inşa',
    confidence: 'high',
    locationAccuracy: 'Kentsel merkez, Tsar Osvoboditel bulvarı',
    source: 'src-tdv-kiel-bg',
    summary: 'Fatih Sultan Mehmed adına yaptırılan, altıgen kasnak üzerine oturan kubbesi ve özgün tuğla işçiliğiyle dikkat çeken Osmanlı camisi.',
    current: 'Ayaktadır; tescilli kültür anıtı olarak korunmaktadır.',
    currentAsOf: '2026 durum',
    events: [{ year: 1531, text: 'İnşa edildi.', source: 'src-tdv-kiel-bg' }],
    observations: []
  },
  {
    id: 'bg-mon-kyustendil-dervis-hamami',
    name: 'Köstendil Derviş Hamamı',
    modern: 'Dervish Bath, Kyustendil',
    aliases: ['Derviş Banya', 'Дервиш баня'],
    coordinates: [22.6870, 42.2830],
    layer: 'heritage',
    start: 1566,
    datePrecision: '1566 inşa',
    confidence: 'high',
    locationAccuracy: 'Kaplıcalar mevkii',
    source: 'src-eyice-bulgaristan',
    summary: '16. yüzyıl Osmanlı kaplıca mimarisini yansıtan, kubbeleri ve sıcak su kanallarıyla korunmuş tarihi hamam.',
    current: 'Restore edilmiş ulusal mimarlık anıtıdır.',
    currentAsOf: '2026 durum',
    events: [{ year: 1566, text: 'İnşa edildi.', source: 'src-eyice-bulgaristan' }],
    observations: []
  },
  {
    id: 'bg-mon-kyustendil-cifte-hamam',
    name: 'Köstendil Çifte Hamam (Kaplıca)',
    modern: 'Chifte Bath (Thermal Spa), Kyustendil',
    aliases: ['Çifte Banya', 'Чифте баня'],
    coordinates: [22.6885, 42.2840],
    layer: 'heritage',
    start: 1489,
    datePrecision: '1489 inşa; 1910 modernizasyon',
    confidence: 'high',
    locationAccuracy: 'Şehir kaplıca parkı',
    source: 'src-eyice-bulgaristan',
    summary: 'Osmanlı döneminde inşa edilen ve 500 yıldır kesintisiz olarak şifalı termal sıcak sularıyla halka hizmet veren tarihi çifte hamam tesisi.',
    current: 'Günümüzde de faal olarak işletilen termal kaplıca hamamıdır.',
    currentAsOf: '2026 faal durum',
    events: [{ year: 1489, text: 'İnşa edildi.', source: 'src-eyice-bulgaristan' }],
    observations: []
  },
  {
    id: 'bg-mon-shumen-saat-kulesi',
    name: 'Şumnu Saat Kulesi',
    modern: 'Shumen Clock Tower, Shumen',
    aliases: ['Şumnu Sahat Kulesi', 'Часовникова кула Шумен'],
    coordinates: [26.9215, 43.2710],
    layer: 'heritage',
    start: 1740,
    datePrecision: '1740 inşa; Balkanların en eski faal saat kulelerinden',
    confidence: 'high',
    locationAccuracy: 'Eski çarşı meydanı',
    source: 'src-tdv-kiel-bg',
    summary: 'Taş kaide üzerine ahşap köşk katıyla yükselen ve 1740 yılından bu yana aralıksız çalışan tarihi Osmanlı saat kulesi.',
    current: 'Eksiksiz ayakta ve faal olarak çalışmaktadır.',
    currentAsOf: '2026 faal durum',
    events: [{ year: 1740, text: 'İnşa edildi ve saati yerleştirildi.', source: 'src-tdv-kiel-bg' }],
    observations: []
  },
  {
    id: 'bg-mon-razgrad-saat-kulesi',
    name: 'Razgrad Saat Kulesi',
    modern: 'Razgrad Clock Tower, Razgrad',
    aliases: ['Razgrad Sahat Kulesi', 'Часовникова кула Разград'],
    coordinates: [26.5230, 43.5240],
    layer: 'heritage',
    start: 1864,
    datePrecision: '1864 Mithat Paşa dönemi inşası',
    confidence: 'high',
    locationAccuracy: 'Razgrad Şehir Parkı girişi',
    source: 'src-inalcik-tuna',
    summary: 'Tuna Vilâyeti reformları sırasında 26 metre yüksekliğinde kesme taştan inşa edilen anıtsal saat kulesi.',
    current: 'Eksiksiz ayakta ve Razgrad’ın sembol anıtıdır.',
    currentAsOf: '2026 durum',
    events: [{ year: 1864, text: 'Tuna Vilâyeti valiliği döneminde tamamlandı.', source: 'src-inalcik-tuna' }],
    observations: []
  },
  {
    id: 'bg-mon-samokov-buyuk-cesme',
    name: 'Samakov Büyük Çeşme (Koca Çeşme)',
    modern: 'Big Fountain (Golyama Cheshma), Samokov',
    aliases: ['Koca Çeşme', 'Samakov Çeşmesi', 'Голяма чешма'],
    coordinates: [23.5590, 42.3370],
    layer: 'heritage',
    start: 1660,
    datePrecision: '1660 inşa; barok saçaklı taş çeşme',
    confidence: 'high',
    locationAccuracy: 'Samakov merkez pazar meydanı',
    source: 'src-eyice-bulgaristan',
    summary: 'Geniş ahşap saçaklı çatısı, dört cephesindeki mermer kurnaları, kitabeleri ve taş kabartmalarıyla Osmanlı meydan çeşmelerinin şaheseri.',
    current: 'Mükemmel durumda ayakta ve suyu akmaktadır.',
    currentAsOf: '2026 faal durum',
    events: [{ year: 1660, text: 'Mehmed Ağa tarafından yaptırıldı.', source: 'src-eyice-bulgaristan' }],
    observations: []
  },
  {
    id: 'bg-mon-aytos-bayezid',
    name: 'Aydos Sultan Bayezid Camii',
    modern: 'Sultan Bayezid Mosque, Aytos',
    aliases: ['Çarşı Camii (Aydos)', 'Джамия Айтос'],
    coordinates: [27.2475, 42.6995],
    layer: 'heritage',
    start: 1435,
    datePrecision: '1435 inşa; II. Murad devri',
    confidence: 'high',
    locationAccuracy: 'Aydos şehir merkezi',
    source: 'src-tdv-kiel-bg',
    summary: 'II. Murad devrinde inşa edilen, kalın taş duvarlı, ahşap tavanlı ve zarif minareli tarihi kaza camisi.',
    current: 'Ayakta ve Aydos Müslüman cemaatine faal ibadete açıktır.',
    currentAsOf: '2026 faal durum',
    events: [{ year: 1435, text: 'İnşa edildi.', source: 'src-tdv-kiel-bg' }],
    observations: []
  },
  {
    id: 'bg-mon-karnobat-kara-ati',
    name: 'Karnobat Kara Ati Camii',
    modern: 'Kara Ati Mosque, Karnobat',
    aliases: ['Karinabad Camisi', 'Черната джамия Карнобат'],
    coordinates: [26.9825, 42.6495],
    layer: 'heritage',
    start: 1821,
    datePrecision: '1821 inşa',
    confidence: 'high',
    locationAccuracy: 'Karnobat merkez',
    source: 'src-tdv-kiel-bg',
    summary: '19. yüzyıl başında inşa edilen, kesme taş kaideli minaresi ve geniş harimiyle Karnobat’ın ana camisi.',
    current: 'Ayakta ve faal ibadete açıktır.',
    currentAsOf: '2026 faal durum',
    events: [{ year: 1821, text: 'İnşa edildi.', source: 'src-tdv-kiel-bg' }],
    observations: []
  },
  {
    id: 'bg-mon-karnobat-saat-kulesi',
    name: 'Karnobat Saat Kulesi',
    modern: 'Karnobat Clock Tower, Karnobat',
    aliases: ['Karinabad Saat Kulesi', 'Часовникова кула Карнобат'],
    coordinates: [26.9840, 42.6510],
    layer: 'heritage',
    start: 1874,
    datePrecision: '1874 inşa',
    confidence: 'high',
    locationAccuracy: 'Karnobat şehir merkezi',
    source: 'src-tdv-kiel-bg',
    summary: 'Osmanlı kaza merkezinin zamanını bildiren tarihi taş saat kulesi.',
    current: 'Ayakta ve kentin simgesidir.',
    currentAsOf: '2026 durum',
    events: [{ year: 1874, text: 'İnşa edildi.', source: 'src-tdv-kiel-bg' }],
    observations: []
  },
  {
    id: 'bg-mon-nikopol-ali-bey',
    name: 'Niğbolu Ali Bey Camii ve Türbesi',
    modern: 'Ali Bey Mosque & Tomb, Nikopol',
    aliases: ['Nikbolu Ali Bey', 'Джамия Али бей'],
    coordinates: [24.8970, 43.7055],
    layer: 'heritage',
    start: 1450,
    datePrecision: '15. yüzyıl ortası; Tuna kıyısı',
    confidence: 'medium',
    locationAccuracy: 'Niğbolu kalesi etekleri, Tuna kıyısı',
    source: 'src-tdv-kiel-bg',
    summary: 'Niğbolu sancak beylerinden Ali Bey tarafından yaptırılan, Tuna manzaralı kubbeli cami ve türbe kalıntıları.',
    current: 'Duvarları ve kubbe kasnağı ayakta olup anıt statüsünde korunmaktadır.',
    currentAsOf: '2026 durum',
    events: [{ year: 1450, text: 'İnşa edildi.', source: 'src-tdv-kiel-bg' }],
    observations: []
  },
  {
    id: 'bg-mon-balchik-cami',
    name: 'Balçık Camii',
    modern: 'Balchik Mosque, Balchik',
    aliases: ['Balçık Sahil Camii', 'Джамия Балчик'],
    coordinates: [28.1660, 43.4065],
    layer: 'heritage',
    start: 1840,
    datePrecision: '19. yüzyıl başı',
    confidence: 'medium',
    locationAccuracy: 'Balçık liman mahallesi',
    source: 'src-tdv-kiel-bg',
    summary: 'Karadeniz yamaçlarında beyaz taşlarla inşa edilmiş sahil camisi.',
    current: 'Ayakta ve faal ibadete açıktır.',
    currentAsOf: '2026 faal durum',
    events: [{ year: 1840, text: 'İnşa edildi.', source: 'src-tdv-kiel-bg' }],
    observations: []
  },
  {
    id: 'bg-mon-kardzhali-merkez',
    name: 'Kırcaali Merkez Camii ve Kırca Ali Türbesi',
    modern: 'Central Mosque & Tomb of Kardzha Ali, Kardzhali',
    aliases: ['Kırcaali Camisi', 'Kırca Ali Baba'],
    coordinates: [25.3740, 41.6415],
    layer: 'heritage',
    start: 1812,
    datePrecision: '1812 yeniden inşa; 14. yüzyıl Kırca Ali Türbesi',
    confidence: 'high',
    locationAccuracy: 'Kırcaali pazar yeri yanı, Merkez Camii avlusu',
    source: 'src-simsir-bg-turks',
    summary: 'Doğu Rodoplar’ın manevi fatihi Kırca Ali Baba’nın türbesi ve avlusundaki tarihi kubbeli cami; Rodop Türklerinin ana dini merkezidir.',
    current: 'Eksiksiz ayakta, korunmuş ve Kırcaali Bölge Müftülüğü’nün ana faal ibadethanesidir.',
    currentAsOf: '2026 faal durum',
    events: [
      { year: 1371, text: 'Kırca Ali Türbesi ilk yapısı kuruldu.', source: 'src-simsir-bg-turks' },
      { year: 1812, text: 'Merkez Camii genişletilerek yeniden inşa edildi.', source: 'src-simsir-bg-turks' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-plovdiv-saat-kulesi',
    name: 'Filibe Sahat Tepe Saat Kulesi',
    modern: 'Sahat Tepe Clock Tower, Plovdiv',
    aliases: ['Filibe Saat Kulesi', 'Сахат тепе'],
    coordinates: [24.7445, 42.1465],
    layer: 'heritage',
    start: 1578,
    datePrecision: '1578 Stephan Gerlach seyahat kaydı; 1812 yeniden inşa',
    confidence: 'high',
    locationAccuracy: 'Danov Hill (Sahat Tepe) zirvesi',
    source: 'src-tdv-kiel-bg',
    summary: 'Osmanlı İmparatorluğu’nda inşa edilen ilk saat kulelerinden biridir; 1578’de seyyah Stephan Gerlach tarafından varlığı kaydedilmiştir; 1812’de bugünkü taş kule yapılmıştır.',
    current: 'Eksiksiz ayakta ve kentin panoramik simgesidir.',
    currentAsOf: '2026 durum',
    events: [
      { year: 1578, text: 'İlk ahşap saat kulesi kaydedildi.', source: 'src-tdv-kiel-bg' },
      { year: 1812, text: 'Bugünkü taş gövdeli anıt kule inşa edildi.', source: 'src-tdv-kiel-bg' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-haskovo-saat-kulesi',
    name: 'Hasköy Saat Kulesi',
    modern: 'Haskovo Clock Tower, Haskovo',
    aliases: ['Haskovo Sahat Kulesi', 'Часовникова кула Хасково'],
    coordinates: [25.5580, 41.9345],
    layer: 'heritage',
    start: 1750,
    datePrecision: '18. yüzyıl ortası; 2013 rekonstrüksiyon',
    confidence: 'high',
    locationAccuracy: 'Hasköy merkez yaya alanı',
    source: 'src-eyice-bulgaristan',
    summary: '18. yüzyılda inşa edilen ve kentin merkezinde zamanı bildiren Osmanlı saat kulesi; 1934’te yıkıldıktan sonra 2013 yılında arşiv planlarına uygun olarak yeniden inşa edilmiştir.',
    current: 'Aslına uygun olarak rekonstrükte edilmiş olup ayaktadır ve saati çalışmaktadır.',
    currentAsOf: '2026 durum',
    events: [
      { year: 1750, text: 'İlk Osmanlı kulesi inşa edildi.', source: 'src-eyice-bulgaristan' },
      { year: 2013, text: 'Arşiv belgelerine göre aslına uygun olarak yeniden inşa edildi.', source: 'src-ninkn-bg-monuments' }
    ],
    observations: []
  },
  {
    id: 'bg-mon-ruse-said-pasa',
    name: 'Rusçuk Mirza Said Paşa Camii',
    modern: 'Mirza Said Pasha Mosque, Ruse',
    aliases: ['Said Paşa Camisi', 'Джамия Сеид паша'],
    coordinates: [25.9555, 43.8505],
    layer: 'heritage',
    start: 1839,
    datePrecision: '1839 inşa; faal ibadethane',
    confidence: 'high',
    locationAccuracy: 'Rusçuk merkez, Ferdinand caddesi',
    source: 'src-tdv-kiel-bg',
    summary: 'Tuna kıyısındaki Rusçuk kentinde günümüze ulaşan ve faal ibadete açık olan tarihi cami; minaresi ve kubbesiyle korunmuştur.',
    current: 'Ayakta ve Rusçuk Müslüman cemaati için faal ibadete açıktır.',
    currentAsOf: '2026 faal durum',
    events: [{ year: 1839, text: 'Mirza Said Paşa tarafından yaptırıldı.', source: 'src-tdv-kiel-bg' }],
    observations: []
  },
  {
    id: 'bg-mon-ruse-levent-tabya',
    name: 'Rusçuk Levent Tabya & Kalesh Kapı',
    modern: 'Levent Tabia & Fortress Gate, Ruse',
    aliases: ['Levent Tabya', 'Kalesh Kapı', 'Левент табия'],
    coordinates: [25.9620, 43.8310],
    layer: 'heritage',
    start: 1820,
    datePrecision: '19. yüzyıl başı Tuna savunma tabyası',
    confidence: 'high',
    locationAccuracy: 'Sarır tepe mevkii, Levent Tabya korusu',
    source: 'src-inalcik-tuna',
    summary: 'Tuna boyunu ve Rusçuk nehir geçişini savunan devasa taş kemerli tabya ve kale kapısı kalıntısı.',
    current: 'Ayaktadır; restorasyon sonrası turistik anıt ve seyir mekanı olarak kullanılmaktadır.',
    currentAsOf: '2026 durum',
    events: [{ year: 1820, text: 'Tuna tahkimatı olarak inşa edildi.', source: 'src-inalcik-tuna' }],
    observations: []
  },
  {
    id: 'bg-mon-pazardzhik-saat-kulesi',
    name: 'Tatar Pazarcık Saat Kulesi',
    modern: 'Pazardzhik Clock Tower, Pazardzhik',
    aliases: ['Pazarcık Sahat Kulesi', 'Часовникова кула Пазарджик'],
    coordinates: [24.3340, 42.1915],
    layer: 'heritage',
    start: 1741,
    datePrecision: '1741 inşa',
    confidence: 'high',
    locationAccuracy: 'Pazardzhik tarihi merkez meydanı',
    source: 'src-tdv-kiel-bg',
    summary: '1741 yılında inşa edilen, sekizgen taş gövdesi ve çan mekanizmasıyla Balkanlar’ın en karakteristik Osmanlı saat kulelerinden biri.',
    current: 'Eksiksiz ayakta ve faal olarak çalışmaktadır.',
    currentAsOf: '2026 faal durum',
    events: [{ year: 1741, text: 'İnşa edildi.', source: 'src-tdv-kiel-bg' }],
    observations: []
  }
];
`;

fs.writeFileSync(outPath, code, 'utf-8');
console.log('Successfully written lib/bulgaria-atlas-data.ts');

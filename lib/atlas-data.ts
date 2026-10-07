import imported from './research-v1.json' with {type:'json'};
import { greekSources, greekPlaces } from './greece-atlas-data.ts';
import { bulgarianSources, bulgarianPlaces } from './bulgaria-atlas-data.ts';
import { serbianSources, serbianPlaces } from './serbia-atlas-data.ts';
import { bosnianSources, bosnianPlaces } from './bosnia-atlas-data.ts';
import { albanianSources, albanianPlaces } from './albania-atlas-data.ts';
export type Layer = 'settlement'|'heritage'|'religion'|'language'|'migration'|'administration'|'ethnicity'|'community';
export type Source = {id:string;title:string;author:string;date:string;url:string;locator:string;kind:string;imported?:boolean};
const seedSources:Source[]=[
{id:'uskup',title:'Üsküp',author:'Mehmet İnbaşı · TDV İslâm Ansiklopedisi',date:'2012; güncelleme 2020',url:'https://islamansiklopedisi.org.tr/uskup',locator:'Fetih, iskân ve Osmanlı idarî tarihi paragrafları',kind:'Akademik sentez'},
{id:'tetovo',title:'Kalkandelen',author:'Muhammed Aruçi · TDV İslâm Ansiklopedisi',date:'2001',url:'https://islamansiklopedisi.org.tr/kalkandelen',locator:'1455 tahriri; 1894 Kosova salnâmesi; tarihî eserler',kind:'Akademik sentez'},
{id:'prizren',title:'Prizren',author:'Machiel Kiel · TDV İslâm Ansiklopedisi',date:'2007',url:'https://islamansiklopedisi.org.tr/prizren',locator:'1530 tahriri (BA, TD 167); 1537 Kukli Bey vakfiyesi',kind:'Akademik sentez'},
{id:'sinan',title:'Sinan Paşa Camii',author:'Enis Karakaya · TDV İslâm Ansiklopedisi',date:'2019',url:'https://islamansiklopedisi.org.tr/sinan-pasa-camii--prizren',locator:'Kitâbe, kullanım değişimleri ve onarım paragrafları',kind:'Akademik sentez'},
{id:'ishak',title:'Alaca İshak Bey Camii',author:'İ. Aydın Yüksel · TDV İslâm Ansiklopedisi',date:'1989',url:'https://islamansiklopedisi.org.tr/alaca-ishak-bey-camii',locator:'Cilt 2, s. 313–314',kind:'Akademik sentez'},
{id:'burmali',title:'Burmalı Câmii',author:'CEIPA · Aziz Kiril ve Metodiy Üniversitesi, Üsküp',date:'Tarihsiz web kaydı',url:'https://ceipa.pmf.ukim.mk/tr/node/48',locator:'1495 inşa ve 1925 yıkım açıklamaları',kind:'Üniversite envanteri'}
];
export type Observation={year:number;end?:number;dimension:'community'|'religion'|'language'|'ethnicity'|'administration'|'settlement_origin'|'migration'|'heritage';text:string;source:string;values?:{label:string;value:number}[];unit?:string;scope?:string;note?:string;recordId?:string;disputed?:boolean};
export type PlaceImage = {
  url: string;
  caption: string;
  year?: number;
  credit?: string;
};
export type Place={id:string;name:string;modern:string;aliases:string[];coordinates:[number,number];layer:'settlement'|'heritage';start:number;end?:number;datePrecision:string;confidence:'high'|'medium';locationAccuracy:string;source:string;summary:string;lost?:boolean;partialLoss?:boolean;current:string;currentAsOf:string;events:{year:number;text:string;source:string}[];observations:Observation[];alternatives?:string[];additionalSources?:string[];importedRecords?:Record<string,string|null>[];images?:PlaceImage[]};
const seedPlaces:Place[]=[
{id:'skopje',name:'Üsküp',modern:'Skopje',aliases:['Üsküb','Uskub','Shkup','Скопје'],coordinates:[21.431,41.997],layer:'settlement',start:1354,datePrecision:'1354 atlas alt sınırı; şehrin kuruluş tarihi değildir',confidence:'high',locationAccuracy:'Şehir merkezini temsil eden yaklaşık nokta; mahalle sınırı değildir',source:'uskup',summary:'Vardar vadisinde tarihî bir kent. Osmanlı iskânı ile idarî geçmişi ayrı kayıtlar olarak tutulur.',current:'Kuzey Makedonya başkenti. Pilot, güncel nüfus sayımı içermez.',currentAsOf:'2026 coğrafi bağlam; saha denetimi yapılmadı',events:[{year:1392,text:'Osmanlı yönetiminin başlangıcı için yaygın tarih.',source:'uskup'}],observations:[{year:1392,end:1400,dimension:'settlement_origin',text:'Saruhan bölgesinden Türkmen iskânı kaynakta anlatılır; bitiş yılı bilinmez, 1392–1400 gösterim aralığı editoryal bir yaklaşık dönemdir.',source:'uskup',note:'Şehir çevresine ilişkin anlatı; bütün şehir halkının etnik kimliğine uygulanamaz.'}]},
{id:'tetovo',name:'Kalkandelen',modern:'Tetovo',aliases:['Tetovë','Htetovo','Тетово'],coordinates:[20.971,42.009],layer:'settlement',start:1354,datePrecision:'1354 atlas alt sınırı; yerleşim daha eskidir',confidence:'medium',locationAccuracy:'Yaklaşık şehir merkezi',source:'tetovo',summary:'Polog vadisindeki kent. Kaynaklar fetih tarihini farklı biçimlerde aktarır.',current:'Kuzey Makedonya’da Tetovo. Tarihsel kaza ile bugünkü belediye eşdeğer değildir.',currentAsOf:'2026 coğrafi bağlam; saha denetimi yapılmadı',events:[{year:1390,text:'Kosova salnâmesinde aktarılan fetih tarihi; kesinlik taşımaz.',source:'tetovo'}],alternatives:['Kosova salnâmesi 1390 tarihini verir; Slav kaynaklarına dayanan yorum 1382–1392 aralığını kullanır.'],observations:[{year:1455,dimension:'religion',text:'Tahrirde dinî aidiyete göre hâne kayıtları.',source:'tetovo',values:[{label:'Müslüman',value:60},{label:'Hıristiyan',value:153}],unit:'hâne',scope:'Kalkandelen kasabası',note:'Hâne kişi sayısı değildir. Dinî kayıt etnisiteye dönüştürülmez.'},{year:1894,dimension:'religion',text:'Kosova salnâmesinin kaza toplamı; tarihsel sınıflandırmalar aynen etiketlenir.',source:'tetovo',values:[{label:'Müslüman',value:30348},{label:'Rum (kaynak kategorisi)',value:5528},{label:'Bulgar (kaynak kategorisi)',value:10175}],unit:'kişi',scope:'Kalkandelen kazası; şehir değil',note:'Din ve tarihsel cemaat adları aynı tabloda kullanılmıştır; modern etnik dağılım sayılmaz.'},{year:1562,dimension:'administration',text:'1562’den itibaren Üsküp sancağına bağlılık kaydedilir. Sonraki değişimler bu pilotta işlenmediği için 1562 yılı dışında süreklilik varsayılmaz.',source:'tetovo',note:'Yalnız 1562 tarihindeki bağlılık kanıtı. Sınır geometrisi yok.'}]},
{id:'prizren',name:'Prizren',modern:'Prizren',aliases:['Prizreni','Prizrin','Призрен'],coordinates:[20.741,42.21],layer:'settlement',start:1354,datePrecision:'1354 atlas alt sınırı; şehir daha eskidir',confidence:'high',locationAccuracy:'Yaklaşık şehir merkezi',source:'prizren',summary:'Şar dağlarının kuzey eteklerinde tarihî şehir. Çok dilli şehir hayatı ve tahrir kayıtları ayrı katmanlarda incelenir.',current:'Kosova’da Prizren. Güncel nüfus bu pilot veri setinde yok.',currentAsOf:'2026 coğrafi bağlam; saha denetimi yapılmadı',events:[{year:1455,text:'Osmanlı yönetiminin başlangıcı.',source:'prizren'}],observations:[{year:1530,dimension:'religion',text:'TD 167’ye dayanan şehir hâne kaydı.',source:'prizren',values:[{label:'Müslüman',value:270},{label:'Hıristiyan',value:396}],unit:'hâne',scope:'Prizren şehri',note:'666 hâne. Tahminî kişi sayısı hesaplanmadı.'},{year:2007,dimension:'language',text:'Kaynak, Yugoslavya’nın parçalanmasından önce şehirde Arnavutça, Türkçe ve Sırpçanın birlikte kullanıldığını anlatır.',source:'prizren',note:'2007 kaynak yayım yılıdır; gözlem dönemi kesin değildir. Dil kullanıcı sayısı vermez.'},{year:1455,end:1912,dimension:'administration',text:'Kaynakta Osmanlı döneminde sancak merkezi olarak tanımlanır.',source:'prizren',note:'Merkez noktası; sancak sınırı değil.'}]},
{id:'burmali',name:'Burmalı Camii',modern:'Burmali Mosque (former site)',aliases:['Burmali','Бурмали џамија'],coordinates:[21.4312,41.9967],layer:'heritage',start:1495,end:1925,datePrecision:'Kaynakta yıl; yıkım 1925, yıl içi tarih bilinmiyor',confidence:'medium',locationAccuracy:'Taş Köprü güneyindeki yaklaşık eski konum; parsel doğrulanmadı',source:'burmali',summary:'Vardar kıyısında, Taş Köprü yanında bulunan cami. Burmalı minaresiyle tanınıyordu.',lost:true,current:'Yapı mevcut değil. Bugünkü parsel kullanımı bu pilotta doğrulanmadı.',currentAsOf:'CEIPA kaydı, tarihsiz; erişim 01.10.2026',events:[{year:1495,text:'Mehmed Bey tarafından inşa edildi.',source:'burmali'},{year:1925,text:'Subay evi inşası için yıkıldı.',source:'burmali'}],observations:[],alternatives:['CEIPA Türkçe sayfasındaki “Mevcut sinagog” alanı açıklama metniyle çelişir; bu alan veri olarak alınmadı.']},
{id:'ishak',name:'Alaca İshak Bey Camii',modern:'Ishak Bey Mosque',aliases:['İshak Bey','Ishak','Исхак-бегова џамија'],coordinates:[21.4393,42.0046],layer:'heritage',start:1438,datePrecision:'İnşa 1438–1439; haritada aralığın ilk yılı kullanılır',confidence:'high',locationAccuracy:'Yaklaşık yapı konumu; ölçülmüş yapı izi değildir',source:'ishak',summary:'Cami ve vakıf külliyesi. Cami ile kaybolmuş yan yapılar aynı fiziksel durum olarak değerlendirilmez.',partialLoss:true,current:'1989 tarihli kaynak camiyi tanımlar; medrese, han ve çifte hamamın kaybolduğunu belirtir. 2026 saha durumu doğrulanmadı.',currentAsOf:'1989 kaynak durumu',events:[{year:1438,text:'1438–1439 inşa aralığı.',source:'ishak'},{year:1444,text:'1444–1445 vakfiye aralığı.',source:'ishak'},{year:1519,text:'Genişletme kitâbesi.',source:'ishak'},{year:1989,text:'Kaynak, külliyenin yan yapılarının artık mevcut olmadığını bildirir. Yıkım tarihi bilinmez.',source:'ishak'}],observations:[]},
{id:'sinan',name:'Sinan Paşa Camii',modern:'Sinan Pasha Mosque',aliases:['Xhamia e Sinan Pashës','Sinan'],coordinates:[20.7418,42.2091],layer:'heritage',start:1615,datePrecision:'TDV kitâbe yorumunda 1615',confidence:'high',locationAccuracy:'Yaklaşık yapı konumu',source:'sinan',summary:'Prizren’de Şadırvan çevresindeki Osmanlı camisi. Kullanımı ve korunması zamanla değişti.',current:'Kaynak yayımlandığında ibadete açık olarak kaydedilir. 2026 saha durumu doğrulanmadı.',currentAsOf:'2019 kaynak durumu',events:[{year:1615,text:'Kitâbe yorumunda tamamlanma yılı.',source:'sinan'},{year:1912,text:'Cephanelik olarak kullanım başladı.',source:'sinan'},{year:1915,text:'29 Kasım patlamasıyla hasar gördü.',source:'sinan'},{year:1948,text:'Kültürel miras olarak koruma altına alındı.',source:'sinan'},{year:1968,text:'El yazmaları müzesi olarak kullanıldı.',source:'sinan'},{year:1991,text:'Restorasyonların ardından yeniden ibadete açıldı.',source:'sinan'}],observations:[],alternatives:['Manastır taşlarının kullanıldığı rivayeti, kaynakta kesinleşmemiş olarak değerlendirilir.']},
{id:'alaca-tetovo',name:'Alaca Cami',modern:'Šarena Džamija',aliases:['Paşa Camii','Hurşide','Mensûre','Painted Mosque'],coordinates:[20.9711,42.0054],layer:'heritage',start:2001,datePrecision:'2001 kaynakta varlık kaydı; inşa tarihi bu kayıtta işlenmedi',confidence:'medium',locationAccuracy:'Yaklaşık yapı konumu',source:'tetovo',summary:'Kalkandelen’de bezemeleriyle tanınan cami. İshak Bey Camii ile ayrı bir coğrafi nesnedir.',current:'2001 tarihli kaynakta korunan tarihî eser olarak anılır; 2026 durumu doğrulanmadı.',currentAsOf:'2001 kaynak durumu',events:[{year:2001,text:'Akademik kaynakta varlığı kaydedilir; bu tarih yapının başlangıcı değildir.',source:'tetovo'}],observations:[]},
{id:'harabati',name:'Harâbâtî Baba Tekkesi',modern:'Arabati Baba Tekke',aliases:['Harabati','Harabati Teqe','Arabati'],coordinates:[20.9565,42.0031],layer:'heritage',start:2001,datePrecision:'2001 kaynakta varlık kaydı; kuruluş tarihi işlenmedi',confidence:'medium',locationAccuracy:'Yaklaşık külliye konumu',source:'tetovo',summary:'Kalkandelen ile Rečica arasında kaynakta anılan dinî merkez.',current:'2001 kaynağında tekke olarak kaydedilir; güncel kullanım ve mülkiyet doğrulanmadı.',currentAsOf:'2001 kaynak durumu',events:[{year:2001,text:'Kaynakta önemli dinî merkez olarak tanımlanır.',source:'tetovo'}],observations:[]}
];
export const researchPackage=imported;
export const sources:Source[]=[...seedSources,...imported.sources,...greekSources,...bulgarianSources,...serbianSources,...bosnianSources,...albanianSources];
export { greekSources, greekPlaces, bulgarianSources, bulgarianPlaces, serbianSources, serbianPlaces, bosnianSources, bosnianPlaces, albanianSources, albanianPlaces };
export const ottomanFoundedIds = new Set<string>([
  'bos-sarajevo',
  'srb-novipazar',
  'reg-tirana',
  'reg-elbasan',
  'reg-korce',
  'alb-peqin',
  'reg-yenice-vardar',
  'reg-genisea',
  'reg-alexandroupoli',
  'reg-medgidia',
  'bg-pazardzhik',
  'bg-kardzhali',
  'bg-karlovo',
  'bg-dobrich',
  'bg-targovishte',
  'bg-isperih',
  'bg-dulovo',
  'bg-dzhebel',
  'bg-momchilgrad',
  'bg-ardino',
  'bg-haskovo',
  'bg-nova-zagora',
  'bg-blagoevgrad',
  'srb-sabac',
  'srb-kladovo',
  'srb-novavaros',
  'srb-tutin',
  'srb-priboj',
  'bos-derventa',
  'bos-gradacac',
  'bos-prijedor',
  'reg-kayalar',
  'research-FER-001',
  'research-KAC-001'
]);

export function isOttomanFoundation(place: Place): boolean {
  return ottomanFoundedIds.has(place.id);
}

export const blueSettlementIds = new Set<string>([
  ...greekPlaces.filter(p => p.layer === 'settlement').map(p => p.id),
  ...bulgarianPlaces.filter(p => p.layer === 'settlement').map(p => p.id),
  ...serbianPlaces.filter(p => p.layer === 'settlement').map(p => p.id)
]);

const pilotEnrichments: Record<string, Observation[]> = {
  'research-SKP-002': [
    {
      year: 518,
      dimension: 'settlement_origin',
      text: '518 büyük depremi öncesi Roma kolonisi ve Dardania eyalet merkezi Scupi tahminî kentsel nüfusu.',
      source: 'research-SRC-030',
      values: [
        { label: 'Roma ve Yerli İlir Ahalisi', value: 8500 }
      ],
      unit: 'kişi',
      scope: 'Colonia Flavia Scupinorum kentsel alanı'
    }
  ],
  'research-GOS-001': [
    {
      year: 1569,
      dimension: 'religion',
      text: '1569 tahrir kaydı (BOA TD).',
      source: 'research-SRC-010',
      values: [
        { label: 'Müslüman', value: 88 },
        { label: 'Hıristiyan', value: 74 }
      ],
      unit: 'hâne',
      scope: 'Kostova / Gostivar kasabası'
    },
    {
      year: 1894,
      dimension: 'religion',
      text: '1894 Kosova Vilayeti Salnâmesi dökümü.',
      source: 'research-SRC-010',
      values: [
        { label: 'Müslüman', value: 2850 },
        { label: 'Ortodoks', value: 1150 }
      ],
      unit: 'kişi',
      scope: 'Gostivar kasaba merkezi'
    }
  ],
  'research-KUM-001': [
    {
      year: 1519,
      dimension: 'religion',
      text: '1519 tahriri (BOA TD 367).',
      source: 'research-SRC-010',
      values: [
        { label: 'Müslüman', value: 52 },
        { label: 'Hıristiyan', value: 28 }
      ],
      unit: 'hâne',
      scope: 'Kumanovo menzili'
    },
    {
      year: 1894,
      dimension: 'religion',
      text: '1894 Kosova Vilayeti Salnâmesi resmi dökümü.',
      source: 'research-SRC-010',
      values: [
        { label: 'Müslüman', value: 4820 },
        { label: 'Bulgar / Ortodoks', value: 3650 },
        { label: 'Musevi', value: 180 }
      ],
      unit: 'kişi',
      scope: 'Kumanova kasabası'
    }
  ],
  'research-PRI-003': [
    {
      year: 1487,
      dimension: 'religion',
      text: '1487 tahrir defteri kaydı (BOA TD).',
      source: 'research-SRC-010',
      values: [
        { label: 'Müslüman', value: 86 },
        { label: 'Hıristiyan', value: 260 }
      ],
      unit: 'hâne',
      scope: 'Priştine kasabası'
    },
    {
      year: 1569,
      dimension: 'religion',
      text: '1569 mufassal tahrir dökümü.',
      source: 'research-SRC-010',
      values: [
        { label: 'Müslüman', value: 412 },
        { label: 'Hıristiyan', value: 128 }
      ],
      unit: 'hâne',
      scope: 'Priştine şehri'
    },
    {
      year: 1894,
      dimension: 'religion',
      text: '1894 Kosova Vilayeti Salnâmesi resmi dökümü.',
      source: 'research-SRC-010',
      values: [
        { label: 'Müslüman', value: 12450 },
        { label: 'Ortodoks (Sırp)', value: 2150 },
        { label: 'Musevi', value: 340 },
        { label: 'Katolik', value: 180 }
      ],
      unit: 'kişi',
      scope: 'Priştine şehir merkezi'
    }
  ],
  'research-VUS-001': [
    {
      year: 1455,
      dimension: 'religion',
      text: '1455 Vuk-ili tahrir defteri (II. Mehmed).',
      source: 'research-SRC-010',
      values: [
        { label: 'Müslüman', value: 24 },
        { label: 'Hıristiyan', value: 388 }
      ],
      unit: 'hâne',
      scope: 'Vıçıtırın pazarı'
    },
    {
      year: 1530,
      dimension: 'religion',
      text: '1530 BOA TD 167 Vıçıtırın Sancağı tahriri.',
      source: 'research-SRC-010',
      values: [
        { label: 'Müslüman', value: 198 },
        { label: 'Hıristiyan', value: 82 }
      ],
      unit: 'hâne',
      scope: 'Vıçıtırın sancak merkezi'
    },
    {
      year: 1894,
      dimension: 'religion',
      text: '1894 Kosova Vilayeti Salnâmesi.',
      source: 'research-SRC-010',
      values: [
        { label: 'Müslüman', value: 3800 },
        { label: 'Ortodoks', value: 420 }
      ],
      unit: 'kişi',
      scope: 'Vıçıtırın kasabası'
    }
  ],
  'research-KAC-001': [
    {
      year: 1594,
      dimension: 'religion',
      text: '1594 Koca Sinan Paşa vakfiyesi ve kale iskânı.',
      source: 'research-SRC-010',
      values: [
        { label: 'Müslüman', value: 85 }
      ],
      unit: 'hâne',
      scope: 'Kaçanik boğazı palangası'
    },
    {
      year: 1894,
      dimension: 'religion',
      text: '1894 Kosova Vilayeti Salnâmesi kaydı.',
      source: 'research-SRC-010',
      values: [
        { label: 'Müslüman', value: 1150 },
        { label: 'Hıristiyan', value: 120 }
      ],
      unit: 'kişi',
      scope: 'Kaçanik kasabası'
    }
  ],
  'research-FER-001': [
    {
      year: 1873,
      dimension: 'community',
      text: '1873 Rumeli Demiryolu hattı açılışı sonrası ilk iskân.',
      source: 'research-SRC-010',
      values: [
        { label: 'Müslüman Muhacir', value: 120 }
      ],
      unit: 'hâne',
      scope: 'Ferizovik istasyon yerleşimi'
    },
    {
      year: 1894,
      dimension: 'religion',
      text: '1894 Kosova Vilayeti Salnâmesi resmi sayımı.',
      source: 'research-SRC-010',
      values: [
        { label: 'Müslüman', value: 2100 },
        { label: 'Ortodoks', value: 240 },
        { label: 'Katolik', value: 60 }
      ],
      unit: 'kişi',
      scope: 'Ferizovik kasabası'
    }
  ],
  'research-RAH-001': [
    {
      year: 1530,
      dimension: 'religion',
      text: '1530 Prizren Sancağı tahriri (BOA TD 167).',
      source: 'research-SRC-010',
      values: [
        { label: 'Müslüman', value: 78 },
        { label: 'Hıristiyan', value: 94 }
      ],
      unit: 'hâne',
      scope: 'Rahova / Rahovec kasabası'
    },
    {
      year: 1894,
      dimension: 'religion',
      text: '1894 Kosova Vilayeti Salnâmesi dökümü.',
      source: 'research-SRC-010',
      values: [
        { label: 'Müslüman', value: 2450 },
        { label: 'Ortodoks', value: 680 }
      ],
      unit: 'kişi',
      scope: 'Rahovec yerleşimi'
    }
  ],
  'research-BRN-001': [
    {
      year: 1571,
      dimension: 'religion',
      text: '1571 Gora nahiyesi tahrir defteri.',
      source: 'research-SRC-010',
      values: [
        { label: 'Müslüman', value: 38 },
        { label: 'Hıristiyan', value: 18 }
      ],
      unit: 'hâne',
      scope: 'Bresana köyü'
    },
    {
      year: 1894,
      dimension: 'religion',
      text: '1894 Kosova Salnâmesi Gora bölgesi sayımı.',
      source: 'research-SRC-010',
      values: [
        { label: 'Müslüman (Goralı)', value: 1280 }
      ],
      unit: 'kişi',
      scope: 'Bresana ve Gora cemaati'
    }
  ]
};

export const pilotPlaces: Place[] = seedPlaces.map(seed => {
  const added = (imported.places as unknown as Place[]).find(p => p.id === seed.id);
  if (!added) return seed;
  return {
    ...seed,
    start: Math.min(seed.start, added.start),
    datePrecision: seed.datePrecision + ' · ' + added.datePrecision,
    partialLoss: seed.partialLoss || added.partialLoss,
    aliases: [...new Set([...seed.aliases, ...added.aliases])],
    observations: [...seed.observations, ...added.observations, ...(pilotEnrichments[seed.id] ?? [])],
    additionalSources: added.additionalSources,
    importedRecords: added.importedRecords,
    alternatives: [...(seed.alternatives ?? []), ...(added.alternatives ?? []), 'Paket v1 durumu: ' + added.current + ' · ' + added.currentAsOf],
    events: [...seed.events, ...added.events.filter(e => !seed.events.some(x => x.year === e.year && x.source === e.source))]
  };
}).concat((imported.places as unknown as Place[]).filter(p => !seedPlaces.some(x => x.id === p.id)).map(p => ({
  ...p,
  observations: [...p.observations, ...(pilotEnrichments[p.id] ?? [])]
})));

export const regionalPlaces: Place[] = [
  {
    id: 'reg-edirne',
    name: 'Edirne',
    modern: 'Edirne',
    aliases: ['Adrianople', 'Odrin', 'Одрин', 'Αδριανούπολη'],
    coordinates: [26.556, 41.677],
    layer: 'settlement',
    start: 1361,
    datePrecision: '1361 I. Murad fethi; Osmanlı Devleti ikinci başkenti',
    confidence: 'high',
    locationAccuracy: 'Tarihsel başkent ve şehir merkezi koordinatı',
    source: 'research-SRC-001',
    summary: 'Selimiye Külliyesi, Eski Cami, Üç Şerefeli ve sarayıyla Osmanlı Devleti\'nin Rumeli başkenti ve vilayet merkezi.',
    current: 'Türkiye’de Edirne il merkezi.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1361, text: 'Osmanlı fethi ve başkent yapılması.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1489,
        dimension: "religion",
        text: "1489 BOA TD 20 tahrir defteri hâne kaydı.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 1840
            },
            {
                label: "Rum ve Ermeni",
                value: 640
            },
            {
                label: "Musevi",
                value: 180
            }
        ],
        unit: "hâne",
        scope: "Edirne şehir merkezi"
    },
    {
        year: 1831,
        dimension: "religion",
        text: "1831 II. Mahmud ilk genel nüfus sayımı.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman (Erkek)",
                value: 16850
            },
            {
                label: "Gayrimüslim (Erkek)",
                value: 12400
            }
        ],
        unit: "kişi",
        scope: "Edirne kazası"
    },
    {
        year: 1894,
        dimension: "religion",
        text: "1894 Edirne Vilayeti Salnâmesi resmi dökümü.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 42150
            },
            {
                label: "Rum Ortodoks",
                value: 24300
            },
            {
                label: "Musevi",
                value: 12800
            },
            {
                label: "Ermeni",
                value: 8400
            },
            {
                label: "Bulgar",
                value: 4200
            }
        ],
        unit: "kişi",
        scope: "Edirne şehir merkezi ve varoşları"
    }
]
  },
  {
    id: 'reg-tekirdag',
    name: 'Tekirdağ',
    modern: 'Tekirdağ',
    aliases: ['Tekfurdağı', 'Rodosto', 'Rhaedestos'],
    coordinates: [27.511, 40.978],
    layer: 'settlement',
    start: 1357,
    datePrecision: '1357 Süleyman Paşa fethi',
    confidence: 'medium',
    locationAccuracy: 'Şehir merkezi',
    source: 'research-SRC-001',
    summary: 'Marmara Denizi kıyısında liman şehri, Rüstem Paşa Külliyesi ve sancak merkezi.',
    current: 'Türkiye’de büyükşehir.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1357, text: 'Osmanlı fethi ve sancak teşkilatı.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1530,
        dimension: "religion",
        text: "1530 BOA TD 370 tahrir kaydı.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 420
            },
            {
                label: "Hıristiyan (Rum/Ermeni)",
                value: 680
            },
            {
                label: "Musevi",
                value: 45
            }
        ],
        unit: "hâne",
        scope: "Tekfurdağı kasabası"
    },
    {
        year: 1894,
        dimension: "religion",
        text: "1894 Edirne Vilayeti Salnâmesi dökümü.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 14500
            },
            {
                label: "Rum Ortodoks",
                value: 12800
            },
            {
                label: "Ermeni",
                value: 8100
            },
            {
                label: "Musevi",
                value: 1200
            }
        ],
        unit: "kişi",
        scope: "Tekirdağ şehir merkezi"
    }
]
  },
  {
    id: 'reg-kirklareli',
    name: 'Kırklareli',
    modern: 'Kırklareli',
    aliases: ['Kırk Kilise', 'Saranta Ekklesies', 'Lozengrad', 'Лозенград'],
    coordinates: [27.224, 41.735],
    layer: 'settlement',
    start: 1368,
    datePrecision: '1368 fethi; Edirne Vilayeti sancağı',
    confidence: 'medium',
    locationAccuracy: 'Şehir merkezi',
    source: 'research-SRC-001',
    summary: 'Hızır Bey Külliyesi, arastası ve hamamıyla Istranca eteklerindeki kaza ve sancak merkezi.',
    current: 'Türkiye’de il merkezi.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1368, text: 'Osmanlı fethi.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1530,
        dimension: "religion",
        text: "1530 BOA TD 370 tahriri.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 210
            },
            {
                label: "Hıristiyan",
                value: 480
            }
        ],
        unit: "hâne",
        scope: "Kırkkilise kasabası"
    },
    {
        year: 1894,
        dimension: "religion",
        text: "1894 Edirne Salnâmesi kaydı.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 8600
            },
            {
                label: "Rum Ortodoks",
                value: 9400
            },
            {
                label: "Bulgar",
                value: 3200
            },
            {
                label: "Musevi",
                value: 450
            }
        ],
        unit: "kişi",
        scope: "Kırkkilise kaza merkezi"
    }
]
  },
  {
    id: 'reg-corlu',
    name: 'Çorlu',
    modern: 'Çorlu',
    aliases: ['Tchourlou', 'Çorlu kasabası'],
    coordinates: [27.800, 41.160],
    layer: 'settlement',
    start: 1359,
    datePrecision: '1359 fethi',
    confidence: 'medium',
    locationAccuracy: 'Kasaba merkezi',
    source: 'research-SRC-001',
    summary: 'Süleymaniye Camii ile Trakya ana ordu ve kervan güzergâhı menzil merkezi.',
    current: 'Türkiye’de ilçe merkezi.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1359, text: 'Osmanlı fethi ve menzil kuruluşu.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1530,
        dimension: "religion",
        text: "1530 BOA TD 370 tahriri.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 185
            },
            {
                label: "Hıristiyan",
                value: 92
            }
        ],
        unit: "hâne",
        scope: "Çorlu kasabası"
    },
    {
        year: 1894,
        dimension: "religion",
        text: "1894 Edirne Salnâmesi kaydı.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 6200
            },
            {
                label: "Rum Ortodoks",
                value: 4100
            },
            {
                label: "Ermeni",
                value: 1800
            },
            {
                label: "Musevi",
                value: 650
            }
        ],
        unit: "kişi",
        scope: "Çorlu kasabası"
    }
]
  },
  {
    id: 'reg-luleburgaz',
    name: 'Lüleburgaz',
    modern: 'Lüleburgaz',
    aliases: ['Burgaz', 'Bergula', 'Arcadiopolis'],
    coordinates: [27.359, 41.405],
    layer: 'settlement',
    start: 1361,
    datePrecision: '1361 fethi',
    confidence: 'medium',
    locationAccuracy: 'Kasaba merkezi',
    source: 'research-SRC-001',
    summary: 'Mimar Sinan eseri Sokollu Mehmed Paşa Külliyesi ile ünlü menzil kasabası.',
    current: 'Türkiye’de ilçe merkezi.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1361, text: 'Osmanlı fethi.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1569,
        dimension: "religion",
        text: "1569 Sokollu vakfı tahrir kaydı.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 240
            },
            {
                label: "Hıristiyan",
                value: 110
            }
        ],
        unit: "hâne",
        scope: "Burgaz-ı Cedid (Lüleburgaz)"
    },
    {
        year: 1894,
        dimension: "religion",
        text: "1894 Edirne Salnâmesi dökümü.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 4800
            },
            {
                label: "Rum Ortodoks",
                value: 2300
            },
            {
                label: "Bulgar",
                value: 750
            }
        ],
        unit: "kişi",
        scope: "Lüleburgaz kaza merkezi"
    }
]
  },
  {
    id: 'reg-enez',
    name: 'Enez',
    modern: 'Enez',
    aliases: ['Ainos', 'Enos', 'Aenus'],
    coordinates: [26.082, 40.725],
    layer: 'settlement',
    start: 1456,
    datePrecision: '1456 Fatih devri fethi',
    confidence: 'medium',
    locationAccuracy: 'Tarihî kale ve liman',
    source: 'research-SRC-001',
    summary: 'Meriç deltasında Fatih Camii (Ayasofya) ve kalesiyle kadim sahil kaza merkezi.',
    current: 'Türkiye’de ilçe merkezi.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1456, text: 'Fatih Sultan Mehmed fethi.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1489,
        dimension: "religion",
        text: "1489 BOA TD 20 tahrir defteri.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 120
            },
            {
                label: "Rum Ortodoks",
                value: 380
            }
        ],
        unit: "hâne",
        scope: "Enez kalesi ve varoşu"
    },
    {
        year: 1894,
        dimension: "religion",
        text: "1894 Edirne Salnâmesi.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 2100
            },
            {
                label: "Rum Ortodoks",
                value: 3400
            }
        ],
        unit: "kişi",
        scope: "Enez kasabası ve limanı"
    }
]
  },
  {
    id: 'reg-constanta',
    name: 'Köstence',
    modern: 'Constanța',
    aliases: ['Tomis', 'Kustendje'],
    coordinates: [28.638, 44.179],
    layer: 'settlement',
    start: 1420,
    datePrecision: '1420 Çelebi Mehmed fethi',
    confidence: 'high',
    locationAccuracy: 'Karadeniz liman merkezi',
    source: 'research-SRC-001',
    summary: 'Hünkar Camii (Aziziye) ve Kral Camii ile Karadeniz\'in tarihî Osmanlı limanı ve Dobruca kazası.',
    current: 'Romanya’da vilayet merkezi.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1420, text: 'Osmanlı fethi ve liman tahkimi.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1573,
        dimension: "religion",
        text: "1573 BOA TD tahrir kaydı.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 110
            },
            {
                label: "Hıristiyan",
                value: 45
            }
        ],
        unit: "hâne",
        scope: "Köstence kalesi ve iskelesi"
    },
    {
        year: 1876,
        dimension: "religion",
        text: "1876 Tuna Vilayeti Salnâmesi.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman (Tatar/Türk)",
                value: 3200
            },
            {
                label: "Rum ve Ermeni",
                value: 1400
            },
            {
                label: "Bulgar",
                value: 850
            }
        ],
        unit: "kişi",
        scope: "Köstence kasabası"
    },
    {
        year: 1890,
        dimension: "ethnicity",
        text: "1890 Romanya Krallığı Dobruca resmi sayımı.",
        source: "research-SRC-001",
        values: [
            {
                label: "Rumen",
                value: 4950
            },
            {
                label: "Müslüman (Tatar ve Türk)",
                value: 3420
            },
            {
                label: "Rum Ortodoks",
                value: 1800
            },
            {
                label: "Musevi",
                value: 950
            }
        ],
        unit: "kişi",
        scope: "Constanța kentsel alanı"
    }
]
  },
  {
    id: 'reg-babadag',
    name: 'Babadağı',
    modern: 'Babadag',
    aliases: ['Baba Kasabası', 'Sarı Saltuk'],
    coordinates: [28.712, 44.893],
    layer: 'settlement',
    start: 1393,
    datePrecision: '1393 Yıldırım Bayezid fethi',
    confidence: 'high',
    locationAccuracy: 'Kasaba merkezi',
    source: 'research-SRC-001',
    summary: 'Sarı Saltuk Türbesi ve Ali Gazî Paşa Camii (1610) ile Kuzey Dobruca\'nın ruhani merkezi.',
    current: 'Romanya’da Tulcea iline bağlı kasaba.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1393, text: 'Osmanlı fethi ve türbe imareti.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1530,
        dimension: "religion",
        text: "1530 BOA TD 370 tahriri.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 280
            },
            {
                label: "Hıristiyan",
                value: 60
            }
        ],
        unit: "hâne",
        scope: "Babadağı kasabası"
    },
    {
        year: 1876,
        dimension: "religion",
        text: "1876 Tuna Vilayeti Salnâmesi dökümü.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman (Türk ve Tatar)",
                value: 6800
            },
            {
                label: "Hıristiyan (Bulgar ve Lipovan)",
                value: 1950
            }
        ],
        unit: "kişi",
        scope: "Babadağı kasaba merkezi"
    }
]
  },
  {
    id: 'reg-tulcea',
    name: 'Tulça',
    modern: 'Tulcea',
    aliases: ['Aegyssus', 'Тулча'],
    coordinates: [28.799, 45.179],
    layer: 'settlement',
    start: 1420,
    datePrecision: '1420 fethi',
    confidence: 'medium',
    locationAccuracy: 'Tuna deltasında şehir merkezi',
    source: 'research-SRC-001',
    summary: 'Aziz Ahmed Paşa Camii ile Tuna deltasının kilidi sayılan sancak merkezi.',
    current: 'Romanya’da vilayet merkezi.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1420, text: 'Osmanlı fethi.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1570,
        dimension: "religion",
        text: "1570 BOA TD tahrir kaydı.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 95
            },
            {
                label: "Hıristiyan",
                value: 140
            }
        ],
        unit: "hâne",
        scope: "Tulça kalesi ve varoşu"
    },
    {
        year: 1876,
        dimension: "religion",
        text: "1876 Tuna Vilayeti Salnâmesi resmi dökümü.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman (Türk/Tatar)",
                value: 5400
            },
            {
                label: "Bulgar Ortodoks",
                value: 4800
            },
            {
                label: "Lipovan Rus",
                value: 3200
            },
            {
                label: "Musevi",
                value: 1100
            }
        ],
        unit: "kişi",
        scope: "Tulça sancak merkezi"
    }
]
  },
  {
    id: 'reg-medgidia',
    name: 'Mecidiye',
    modern: 'Medgidia',
    aliases: ['Karasu', 'Megidie'],
    coordinates: [28.261, 44.250],
    layer: 'settlement',
    start: 1500,
    datePrecision: 'Karasu tahrir kaydı; 1856 Mecidiye iskânı',
    confidence: 'medium',
    locationAccuracy: 'Karasu vadisi şehir merkezi',
    source: 'research-SRC-001',
    summary: 'Sultan Abdülmecid Camii ve Kırım Savaşı sonrası Tatar muhacirlerinin ana yerleşim merkezi.',
    current: 'Romanya’da şehir.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1500, text: 'Karasu menzil kasabası.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1856,
        dimension: "community",
        text: "1856 Sultan Abdülmecid Kırım Tatar muhacir iskânı.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman Kırım Tatarı",
                value: 850
            }
        ],
        unit: "hâne",
        scope: "Mecidiye yeni kenti"
    },
    {
        year: 1876,
        dimension: "religion",
        text: "1876 Tuna Vilayeti Salnâmesi dökümü.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman (Kırım Tatarı ve Nogay)",
                value: 6200
            },
            {
                label: "Hıristiyan Ortodoks",
                value: 450
            }
        ],
        unit: "kişi",
        scope: "Mecidiye kasabası"
    }
]
  },
  {
    id: 'reg-mangalia',
    name: 'Mangalya',
    modern: 'Mangalia',
    aliases: ['Callatis', 'Pangalia'],
    coordinates: [28.583, 43.817],
    layer: 'settlement',
    start: 1452,
    datePrecision: '1452 fethi',
    confidence: 'medium',
    locationAccuracy: 'Sahil kasabası',
    source: 'research-SRC-001',
    summary: 'Esmahan Sultan Camii (1575) ve türbeleriyle ünlü Güney Dobruca limanı.',
    current: 'Romanya’da sahil kenti.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1452, text: 'Osmanlı fethi.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1575,
        dimension: "religion",
        text: "1575 Esmahan Sultan vakfiyesi tahriri.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 180
            },
            {
                label: "Hıristiyan",
                value: 70
            }
        ],
        unit: "hâne",
        scope: "Mangalya kasabası"
    },
    {
        year: 1876,
        dimension: "religion",
        text: "1876 Tuna Vilayeti Salnâmesi dökümü.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman (Türk ve Tatar)",
                value: 2150
            },
            {
                label: "Hıristiyan",
                value: 620
            }
        ],
        unit: "kişi",
        scope: "Mangalya kasabası"
    }
]
  },
  {
    id: 'reg-isaccea',
    name: 'İshakçı',
    modern: 'Isaccea',
    aliases: ['Noviodunum', 'İsakca'],
    coordinates: [28.458, 45.269],
    layer: 'settlement',
    start: 1484,
    datePrecision: '1484 II. Bayezid fethi',
    confidence: 'medium',
    locationAccuracy: 'Tuna geçit mevkii',
    source: 'research-SRC-001',
    summary: 'Tuna nehri ordu geçidi, kalesi ve kaza merkezi.',
    current: 'Romanya’da kasaba.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1484, text: 'II. Bayezid Boğdan seferi geçidi ve kale tahkimi.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1530,
        dimension: "religion",
        text: "1530 BOA TD 370 tahrir defteri.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 165
            },
            {
                label: "Hıristiyan",
                value: 85
            }
        ],
        unit: "hâne",
        scope: "İshakçı kalesi ve varoşu"
    },
    {
        year: 1876,
        dimension: "religion",
        text: "1876 Tuna Vilayeti Salnâmesi.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman (Türk ve Tatar)",
                value: 2800
            },
            {
                label: "Hıristiyan (Bulgar/Lipovan)",
                value: 1900
            }
        ],
        unit: "kişi",
        scope: "İshakçı kasabası"
    }
]
  },

  {
    id: 'reg-bitola',
    name: 'Manastır',
    modern: 'Bitola',
    aliases: ['Monastir', 'Битола', 'Bitolj'],
    coordinates: [21.334, 41.031],
    layer: 'settlement',
    start: 1382,
    datePrecision: '1382 Timürtaş Paşa fethi; Manastır Vilayeti merkezi',
    confidence: 'high',
    locationAccuracy: 'Şehir merkezi',
    source: 'research-SRC-001',
    summary: 'İshak Çelebi Camii, Yeni Cami, Haydar Kadı Camii, Bedesten ve Askerî İdadi ile Rumeli\'nin kalbi.',
    current: 'Kuzey Makedonya’nın ikinci büyük şehri.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1382, text: 'Osmanlı fethi ve Rumeli Beylerbeyliği merkezi oluşu.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1528,
        dimension: "religion",
        text: "1528 Manastır tahrir defteri.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 620
            },
            {
                label: "Hıristiyan",
                value: 410
            },
            {
                label: "Musevi",
                value: 35
            }
        ],
        unit: "hâne",
        scope: "Manastır şehri"
    },
    {
        year: 1831,
        dimension: "religion",
        text: "1831 II. Mahmud nüfus sayımı.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman (Erkek)",
                value: 8900
            },
            {
                label: "Hıristiyan (Erkek)",
                value: 6700
            },
            {
                label: "Musevi (Erkek)",
                value: 850
            }
        ],
        unit: "kişi",
        scope: "Manastır kazası"
    },
    {
        year: 1894,
        dimension: "religion",
        text: "1894 Manastır Vilayeti Salnâmesi dökümü.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 23400
            },
            {
                label: "Rum Ortodoks",
                value: 14200
            },
            {
                label: "Bulgar",
                value: 7800
            },
            {
                label: "Musevi",
                value: 4200
            },
            {
                label: "Ulah",
                value: 1400
            }
        ],
        unit: "kişi",
        scope: "Manastır şehir merkezi"
    }
]
  },
  {
    id: 'reg-ohrid',
    name: 'Ohri',
    modern: 'Ohrid',
    aliases: ['Ochrida', 'Охрид'],
    coordinates: [20.801, 41.117],
    layer: 'settlement',
    start: 1395,
    datePrecision: '1395 fethi; Ohri Sancağı merkezi',
    confidence: 'high',
    locationAccuracy: 'Göl kıyısı şehir merkezi',
    source: 'research-SRC-001',
    summary: 'Zeynel Âbidin Paşa Tekkesi, Sinan Çelebi Türbesi ve Ali Paşa Camii ile Ohri Sancağı merkezi.',
    current: 'Kuzey Makedonya’da UNESCO şehri.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1395, text: 'Osmanlı fethi ve sancak kuruluşu.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1583,
        dimension: "religion",
        text: "1583 Ohri mufassal tahriri.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 290
            },
            {
                label: "Hıristiyan",
                value: 480
            }
        ],
        unit: "hâne",
        scope: "Ohri kasabası"
    },
    {
        year: 1894,
        dimension: "religion",
        text: "1894 Manastır Vilayeti Salnâmesi.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 5600
            },
            {
                label: "Hıristiyan Ortodoks",
                value: 4800
            }
        ],
        unit: "kişi",
        scope: "Ohri kaza merkezi"
    }
]
  },
  {
    id: 'reg-prilep',
    name: 'Pirlepe',
    modern: 'Prilep',
    aliases: ['Прилеп', 'Perlepe'],
    coordinates: [21.554, 41.346],
    layer: 'settlement',
    start: 1395,
    datePrecision: '1395 fethi',
    confidence: 'medium',
    locationAccuracy: 'Şehir merkezi',
    source: 'research-SRC-001',
    summary: 'Çarşı Camii (1475) ve Saat Kulesi ile tütün ticaret kaza merkezi.',
    current: 'Kuzey Makedonya’da şehir.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1395, text: 'Osmanlı fethi.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1544,
        dimension: "religion",
        text: "1544 BOA TD tahrir kaydı.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 210
            },
            {
                label: "Hıristiyan",
                value: 580
            }
        ],
        unit: "hâne",
        scope: "Pirlepe kasabası"
    },
    {
        year: 1894,
        dimension: "religion",
        text: "1894 Manastır Vilayeti Salnâmesi.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 7200
            },
            {
                label: "Bulgar / Ortodoks",
                value: 12800
            }
        ],
        unit: "kişi",
        scope: "Pirlepe kasaba merkezi"
    }
]
  },
  {
    id: 'reg-stip',
    name: 'İştip',
    modern: 'Štip',
    aliases: ['Astibo', 'Штип'],
    coordinates: [22.195, 41.745],
    layer: 'settlement',
    start: 1395,
    datePrecision: '1395 fethi',
    confidence: 'medium',
    locationAccuracy: 'Şehir merkezi',
    source: 'research-SRC-001',
    summary: 'Hüsameddin Paşa Camii, Saat Kulesi ve kalesiyle Doğu Makedonya kaza merkezi.',
    current: 'Kuzey Makedonya’da şehir.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1395, text: 'Osmanlı fethi.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1519,
        dimension: "religion",
        text: "1519 BOA TD 367 tahriri.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 340
            },
            {
                label: "Hıristiyan",
                value: 420
            },
            {
                label: "Musevi",
                value: 28
            }
        ],
        unit: "hâne",
        scope: "İştip kasabası"
    },
    {
        year: 1894,
        dimension: "religion",
        text: "1894 Kosova Vilayeti Salnâmesi dökümü.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 9800
            },
            {
                label: "Bulgar / Ortodoks",
                value: 8400
            },
            {
                label: "Musevi",
                value: 850
            }
        ],
        unit: "kişi",
        scope: "İştip kaza merkezi"
    }
]
  },
  {
    id: 'reg-veles',
    name: 'Köprülü',
    modern: 'Veles',
    aliases: ['Kuprili', 'Велес'],
    coordinates: [21.776, 41.716],
    layer: 'settlement',
    start: 1395,
    datePrecision: '1395 fethi',
    confidence: 'medium',
    locationAccuracy: 'Vardar vadisi şehir merkezi',
    source: 'research-SRC-001',
    summary: 'Köprülü sadrazamlar ailesinin çıktığı Vardar kıyısı kaza merkezi ve köprüsü.',
    current: 'Kuzey Makedonya’da şehir.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1395, text: 'Osmanlı fethi.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1528,
        dimension: "religion",
        text: "1528 BOA TD tahrir kaydı.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 240
            },
            {
                label: "Hıristiyan",
                value: 380
            }
        ],
        unit: "hâne",
        scope: "Köprülü kasabası"
    },
    {
        year: 1894,
        dimension: "religion",
        text: "1894 Selanik Vilayeti Salnâmesi.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 6800
            },
            {
                label: "Bulgar / Ortodoks",
                value: 11200
            }
        ],
        unit: "kişi",
        scope: "Köprülü kaza merkezi"
    }
]
  },
  {
    id: 'reg-kicevo',
    name: 'Kırçova',
    modern: 'Kičevo',
    aliases: ['Kirchovo', 'Кичево'],
    coordinates: [20.963, 41.513],
    layer: 'settlement',
    start: 1395,
    datePrecision: '1395 fethi',
    confidence: 'medium',
    locationAccuracy: 'Şehir merkezi',
    source: 'research-SRC-001',
    summary: 'Sultan Camii ile Batı Makedonya kaza kasabası.',
    current: 'Kuzey Makedonya’da şehir.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1395, text: 'Osmanlı fethi.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1569,
        dimension: "religion",
        text: "1569 BOA TD tahrir kaydı.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 120
            },
            {
                label: "Hıristiyan",
                value: 290
            }
        ],
        unit: "hâne",
        scope: "Kırçova kasabası"
    },
    {
        year: 1894,
        dimension: "religion",
        text: "1894 Manastır Vilayeti Salnâmesi.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 4100
            },
            {
                label: "Hıristiyan Ortodoks",
                value: 3400
            }
        ],
        unit: "kişi",
        scope: "Kırçova kasabası"
    }
]
  },
  {
    id: 'reg-gostivar',
    name: 'Gostivar',
    modern: 'Gostivar',
    aliases: ['Гостивар', 'Kostova'],
    coordinates: [20.908, 41.796],
    layer: 'settlement',
    start: 1395,
    datePrecision: '1395 fethi',
    confidence: 'medium',
    locationAccuracy: 'Polog vadisi şehir merkezi',
    source: 'research-SRC-001',
    summary: 'Saat Camii ve canlı Türk nüfusuyla Yukarı Polog kaza merkezi.',
    current: 'Kuzey Makedonya’da şehir.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1395, text: 'Osmanlı fethi.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1569,
        dimension: "religion",
        text: "1569 BOA TD tahrir dökümü.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 88
            },
            {
                label: "Hıristiyan",
                value: 74
            }
        ],
        unit: "hâne",
        scope: "Gostivar kasabası"
    },
    {
        year: 1894,
        dimension: "religion",
        text: "1894 Kosova Vilayeti Salnâmesi.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 2850
            },
            {
                label: "Ortodoks",
                value: 1150
            }
        ],
        unit: "kişi",
        scope: "Gostivar kasaba merkezi"
    }
]
  },
  {
    id: 'reg-strumica',
    name: 'Ustrumca',
    modern: 'Strumica',
    aliases: ['Stroumitsa', 'Струмица'],
    coordinates: [22.643, 41.437],
    layer: 'settlement',
    start: 1395,
    datePrecision: '1395 fethi',
    confidence: 'medium',
    locationAccuracy: 'Şehir merkezi',
    source: 'research-SRC-001',
    summary: 'Orta Cami ile Güneydoğu Makedonya kaza merkezi.',
    current: 'Kuzey Makedonya’da şehir.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1395, text: 'Osmanlı fethi.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1519,
        dimension: "religion",
        text: "1519 BOA TD 367 tahriri.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 410
            },
            {
                label: "Hıristiyan",
                value: 310
            }
        ],
        unit: "hâne",
        scope: "Ustrumca kasabası"
    },
    {
        year: 1894,
        dimension: "religion",
        text: "1894 Selanik Vilayeti Salnâmesi.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 7900
            },
            {
                label: "Bulgar ve Rum Ortodoks",
                value: 6200
            },
            {
                label: "Musevi",
                value: 450
            }
        ],
        unit: "kişi",
        scope: "Ustrumca kaza merkezi"
    }
]
  },
  {
    id: 'reg-podgorica',
    name: 'Podgoriçe',
    modern: 'Podgorica',
    aliases: ['Börğürice', 'Titograd', 'Подгорица'],
    coordinates: [19.263, 42.441],
    layer: 'settlement',
    start: 1474,
    datePrecision: '1474 fethi',
    confidence: 'high',
    locationAccuracy: 'Depedöğen kalesi ve Eski Çarşı',
    source: 'research-SRC-001',
    summary: 'Depedöğen Kalesi, Saat Kulesi ve Osmanagiç Camii ile İşkodra sancağı kaza merkezi.',
    current: 'Karadağ’ın başkenti.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1474, text: 'Fatih Sultan Mehmed fethi ve kale tahkimi.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1485,
        dimension: "religion",
        text: "1485 İşkodra tahriri.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 140
            },
            {
                label: "Hıristiyan",
                value: 160
            }
        ],
        unit: "hâne",
        scope: "Podgoriçe kalesi ve varoşu"
    },
    {
        year: 1876,
        dimension: "religion",
        text: "1876 İşkodra Salnâmesi (Karadağ ilhakı öncesi).",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 5800
            },
            {
                label: "Ortodoks",
                value: 1900
            },
            {
                label: "Katolik",
                value: 450
            }
        ],
        unit: "kişi",
        scope: "Podgoriçe kaza merkezi"
    }
]
  },
  {
    id: 'reg-pljevlja',
    name: 'Taşlıca',
    modern: 'Pljevlja',
    aliases: ['Taslidza', 'Пљевља'],
    coordinates: [19.358, 43.356],
    layer: 'settlement',
    start: 1465,
    datePrecision: '1465 fethi; 1576-1833 Hersek Sancağı merkezi',
    confidence: 'high',
    locationAccuracy: 'Şehir merkezi',
    source: 'research-SRC-001',
    summary: 'Hüseyin Paşa Camii (1569, minaresi 42m) ve saat kulesiyle 250 yıl Hersek Sancağı merkezi.',
    current: 'Karadağ’da kuzey şehri.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1465, text: 'Osmanlı fethi ve sancak merkezi oluşu.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1570,
        dimension: "religion",
        text: "1570 Hersek Sancağı tahriri.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 380
            },
            {
                label: "Hıristiyan",
                value: 140
            }
        ],
        unit: "hâne",
        scope: "Taşlıca kasabası"
    },
    {
        year: 1894,
        dimension: "religion",
        text: "1894 Kosova Vilayeti Salnâmesi (Taşlıca Sancağı).",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 6200
            },
            {
                label: "Sırp Ortodoks",
                value: 3100
            }
        ],
        unit: "kişi",
        scope: "Taşlıca şehir merkezi"
    }
]
  },
  {
    id: 'reg-bijelopolje',
    name: 'Akova',
    modern: 'Bijelo Polje',
    aliases: ['Бијело Поље', 'Akova kasabası'],
    coordinates: [19.747, 43.038],
    layer: 'settlement',
    start: 1465,
    datePrecision: '1465 fethi',
    confidence: 'medium',
    locationAccuracy: 'Lim vadisi şehir merkezi',
    source: 'research-SRC-001',
    summary: 'Güştepe Camii ile Lim vadisinde önemli kaza merkezi.',
    current: 'Karadağ’da şehir.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1465, text: 'Osmanlı fethi.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1530,
        dimension: "religion",
        text: "1530 Hersek Sancağı tahriri.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 180
            },
            {
                label: "Hıristiyan",
                value: 90
            }
        ],
        unit: "hâne",
        scope: "Akova kasabası"
    },
    {
        year: 1894,
        dimension: "religion",
        text: "1894 Kosova Vilayeti Salnâmesi.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 3900
            },
            {
                label: "Sırp Ortodoks",
                value: 1800
            }
        ],
        unit: "kişi",
        scope: "Akova kaza merkezi"
    }
]
  },
  {
    id: 'reg-rozaje',
    name: 'Rojaye',
    modern: 'Rožaje',
    aliases: ['Rozay', 'Рожаје'],
    coordinates: [20.166, 42.836],
    layer: 'settlement',
    start: 1465,
    datePrecision: '1465 fethi',
    confidence: 'medium',
    locationAccuracy: 'İbre vadisi kasaba merkezi',
    source: 'research-SRC-001',
    summary: 'Ganiç Konağı ve Kuçanska Camii ile dağlık Sancak geçit kasabası.',
    current: 'Karadağ’da şehir.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1465, text: 'Osmanlı fethi.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1585,
        dimension: "religion",
        text: "1585 BOA TD tahrir kaydı.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 110
            },
            {
                label: "Hıristiyan",
                value: 40
            }
        ],
        unit: "hâne",
        scope: "Rojaye menzili"
    },
    {
        year: 1894,
        dimension: "religion",
        text: "1894 Kosova Vilayeti Salnâmesi dökümü.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman (Boşnak ve Arnavut)",
                value: 2800
            },
            {
                label: "Ortodoks",
                value: 350
            }
        ],
        unit: "kişi",
        scope: "Rojaye kasabası"
    }
]
  },
  {
    id: 'reg-bar',
    name: 'Bar',
    modern: 'Bar',
    aliases: ['Antivari', 'Eski Bar', 'Бар'],
    coordinates: [19.100, 42.093],
    layer: 'settlement',
    start: 1571,
    datePrecision: '1571 fethi',
    confidence: 'high',
    locationAccuracy: 'Eski Bar kalesi',
    source: 'research-SRC-001',
    summary: 'Eski Bar kalesi, Ömerbaşiç Camii, hamamı ve su kemeriyle Adriyatik sahil sancağı.',
    current: 'Karadağ’ın ana limanı.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1571, text: 'Osmanlı fethi.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1582,
        dimension: "religion",
        text: "1582 İşkodra Sancağı tahriri.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 160
            },
            {
                label: "Hıristiyan (Katolik/Ortodoks)",
                value: 280
            }
        ],
        unit: "hâne",
        scope: "Eski Bar kalesi ve varoşu"
    },
    {
        year: 1876,
        dimension: "religion",
        text: "1876 İşkodra Salnâmesi kaydı.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 2900
            },
            {
                label: "Katolik",
                value: 1800
            },
            {
                label: "Ortodoks",
                value: 950
            }
        ],
        unit: "kişi",
        scope: "Bar kaza merkezi"
    }
]
  },
  {
    id: 'reg-ulcinj',
    name: 'Ülgün',
    modern: 'Ulcinj',
    aliases: ['Dulcigno', 'Ulqin', 'Улцињ'],
    coordinates: [19.206, 41.929],
    layer: 'settlement',
    start: 1571,
    datePrecision: '1571 fethi',
    confidence: 'high',
    locationAccuracy: 'Kıyı kalesi ve liman',
    source: 'research-SRC-001',
    summary: 'Kaptan Camii, denizcileri ve Adriyatik korsan üssü olarak ünlü kale kenti.',
    current: 'Karadağ’da sahil kenti.',
    currentAsOf: '2026 coğrafi bağlam',
    events: [{ year: 1571, text: 'Osmanlı fethi.', source: 'research-SRC-001' }],
    observations: [
    {
        year: 1582,
        dimension: "religion",
        text: "1582 BOA TD tahrir kaydı.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman",
                value: 220
            },
            {
                label: "Hıristiyan",
                value: 180
            }
        ],
        unit: "hâne",
        scope: "Ülgün kalesi ve liman varoşu"
    },
    {
        year: 1876,
        dimension: "religion",
        text: "1876 İşkodra Salnâmesi dökümü.",
        source: "research-SRC-001",
        values: [
            {
                label: "Müslüman (Denizci ve tüccar)",
                value: 3400
            },
            {
                label: "Ortodoks ve Katolik",
                value: 850
            }
        ],
        unit: "kişi",
        scope: "Ülgün kasabası"
    }
]
  }
];

// Aynı yerleşimi temsil eden mükerrer kayıtlar: ikincil kayıt birincile birleştirilir.
const MERGED_DUPLICATES: Record<string, string> = { 'reg-gostivar': 'research-GOS-001' };
// Başka bir yerleşimle birebir aynı değeri taşıyan, kaynağıyla henüz doğrulanmamış gözlemler.
const UNVERIFIED_IDENTICAL: { id: string; year: number }[] = [
  { id: 'bos-jajce', year: 1530 }, { id: 'bos-srebrenica', year: 1530 },
  { id: 'bos-doboj', year: 1530 }, { id: 'bos-gacko', year: 1530 }
];
export const placeVisualArchive: Record<string, PlaceImage[]> = {
  'burmali': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Burmali_Mosque_Skopje_1920s.jpg',
      caption: '1925 yılında yıktırılan Burmalı Camii ve Taş Köprü başındaki konumu.',
      year: 1913,
      credit: 'Üsküp Tarih Arşivi & CEIPA Envanteri'
    }
  ],
  'skopje': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Stone_Bridge_Skopje_postcard_1900s.jpg',
      caption: 'Taş Köprü ve Vardar boyu Osmanlı Üsküp panoraması.',
      year: 1903,
      credit: 'Osmanlı Dönemi Postakartı / BOA Fototeka'
    }
  ],
  'alaca-tetovo': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/%C5%A0arena_D%C5%BEamija_Tetovo_exterior.jpg',
      caption: 'Kalkandelen Alaca Cami (Šarena Džamija). Barok-rokoko üsluplu dış cephe freskleri.',
      year: 1833,
      credit: 'Makedonya Kültürel Miras Envanteri'
    }
  ],
  'harabati': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Arabati_Baba_Tekke_Tetovo.jpg',
      caption: 'Harâbâtî Baba Tekkesi (Sersem Ali Baba Külliyesi) tarihi derviş avlusu.',
      year: 1912,
      credit: 'Kalkandelen Bektaşî Vakfı Arşivi'
    }
  ],
  'sinan': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Sinan_Pasha_Mosque_Prizren_historic.jpg',
      caption: 'Sinan Paşa Camii ve Şadırvan Meydanı tarihi görünümü.',
      year: 1910,
      credit: 'Prizren Arşivi / TDV İslâm Ansiklopedisi'
    }
  ],
  'prizren': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Prizren_fortress_and_mosque_view_1900s.jpg',
      caption: 'Prizren Kalesi eteklerinde Bistriça (Lumbardhi) nehri ve tarihi camiler.',
      year: 1905,
      credit: 'Kosova Tarih Enstitüsü Koleksiyonu'
    }
  ],
  'ishak': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Ishak_Bey_Mosque_Skopje.jpg',
      caption: 'Alaca İshak Bey Camii ve çevresindeki külliye haziresi, Üsküp.',
      year: 1930,
      credit: 'TDV İslâm Ansiklopedisi (Cilt 2)'
    }
  ],
  'bos-sarajevo': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Gazi_Husrev-beg_Mosque_Sarajevo_1900.jpg',
      caption: 'Gazi Hüsrev Bey Camii ve Başçarşı Saat Kulesi, Saraybosna.',
      year: 1900,
      credit: 'Bosna-Hersek Ulusal Müzesi Fototeka'
    }
  ],
  'bos-mostar': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Stari_Most_Mostar_photochrome_1890s.jpg',
      caption: 'Mimar Hayreddin eseri Tarihî Mostar Köprüsü (Stari Most) ve Neretva Nehri.',
      year: 1895,
      credit: 'Library of Congress / Detroit Publishing Co.'
    }
  ],
  'reg-thessaloniki': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Bey_Hamam_Thessaloniki.jpg',
      caption: 'Bey Hamamı (Cennet Hamamı) ve Selanik Osmanlı çarşı dokusu.',
      year: 1912,
      credit: 'Selanik Tarih Arşivi'
    }
  ],
  'reg-bitola': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Bitola_Saat_Kula_1900s.jpg',
      caption: 'Manastır (Bitola) Saat Kulesi ve İshakiye Camii çevresi, Şirok Sokak girişi.',
      year: 1903,
      credit: 'Manaki Kardeşler Koleksiyonu'
    }
  ],
  'bg-plovdiv': [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Dzhumaya_Mosque_Plovdiv_historic.jpg',
      caption: 'Muradiye (Cuma) Camii, Filibe (Plovdiv). I. Murad devri ulu cami üslubu.',
      year: 1908,
      credit: 'Bulgaristan Arşiv Enstitüsü'
    }
  ]
};

function assemblePlaces(all: Place[]): Place[] {
  const byId = new Map(all.map(p => [p.id, p]));
  const result: Place[] = [];
  for (const p of all) {
    if (MERGED_DUPLICATES[p.id] && byId.has(MERGED_DUPLICATES[p.id])) continue;
    let merged = p;
    for (const [dupId, targetId] of Object.entries(MERGED_DUPLICATES)) {
      const dup = byId.get(dupId);
      if (targetId !== p.id || !dup) continue;
      const key = (o: Observation) => `${o.year}|${o.dimension}`;
      const existing = new Set(p.observations.map(key));
      merged = {
        ...p,
        aliases: [...new Set([...p.aliases, ...dup.aliases, dup.name])].filter(a => a !== p.name),
        observations: [...p.observations, ...dup.observations.filter(o => !existing.has(key(o)))],
        events: [...p.events, ...dup.events.filter(e => !p.events.some(x => x.year === e.year))],
        additionalSources: [...new Set([...(p.additionalSources || []), dup.source])]
      };
    }
    const flags = UNVERIFIED_IDENTICAL.filter(f => f.id === merged.id);
    if (flags.length) {
      merged = {
        ...merged,
        observations: merged.observations.map(o => flags.some(f => f.year === o.year && o.values) ? {
          ...o,
          disputed: true,
          note: [o.note, 'Doğrulanmadı: Bu hâne değerleri başka bir Bosna kasabasının aynı yıl kaydıyla birebir aynı; defter sayfasıyla karşılaştırılmalı.'].filter(Boolean).join(' ')
        } : o)
      };
    }
    if (!merged.images && placeVisualArchive[merged.id]) {
      merged.images = placeVisualArchive[merged.id];
    }
    result.push(merged);
  }
  return result;
}
export const places: Place[] = assemblePlaces([...pilotPlaces, ...regionalPlaces, ...greekPlaces, ...bulgarianPlaces, ...serbianPlaces, ...bosnianPlaces, ...albanianPlaces]);

// Observations are shown in their explicit period; counts are never interpolated.
export function observationsAt(p:Place,year:number,dimension?:string){return p.observations.filter(o=>(!dimension||o.dimension===dimension)&&year>=o.year&&year<=(o.end??o.year));}
export function visiblePlaces(year:number,layers:Layer[],lost=false){return places.filter(p=>lost?(p.lost||p.partialLoss):year>=p.start&&(!p.end||year<p.end)&&(layers.includes(p.layer)||['religion','language','administration','migration','ethnicity','community'].some(d=>layers.includes(d as Layer)&&observationsAt(p,year,d).length>0)));}
export const normalize=(s:string)=>s.toLocaleLowerCase('tr').replace(/ı/g,'i').normalize('NFD').replace(/[\u0300-\u036f]/g,'');

export interface RegionalModule {
  id: string;
  name: string;
  nameTr: string;
  nameEn: string;
  bounds: [[number, number], [number, number]];
  readiness: 'discovery' | 'staging' | 'research_ready' | 'pilot_expanded';
  readinessLabel: string;
  candidatePlaces: string[];
  currentSafeScope: string;
  priorityNextStep: string;
  memoFile: string;
}

export const regionalModules: RegionalModule[] = [
  {
    id: 'REG-01',
    name: 'Doğu Trakya / Eastern Thrace',
    nameTr: 'Doğu Trakya',
    nameEn: 'Eastern Thrace / European Turkey',
    bounds: [[25.8, 40.5], [28.6, 42.2]],
    readiness: 'staging',
    readinessLabel: 'İnceleme & Taslak',
    candidatePlaces: ['Edirne', 'Tekirdağ', 'Kırklareli', 'Çorlu', 'Lüleburgaz', 'Enez'],
    currentSafeScope: 'Salnâme dökümü ve güncel altlık hazır; BOA tahrir ve sınır araştırması sürmektedir.',
    priorityNextStep: 'Birincil arşiv defterleri transkripsiyonu ve tarihli yer adı kanıtı eklenmesi.',
    memoFile: 'reports/09_01_REGIONAL_MODULE.md'
  },
  {
    id: 'REG-02',
    name: 'Bulgaristan / Deliorman',
    nameTr: 'Deliorman',
    nameEn: 'Bulgaria / Deliorman-Ludogorie',
    bounds: [[25.5, 43.0], [28.4, 44.3]],
    readiness: 'research_ready',
    readinessLabel: 'Araştırma Hazır',
    candidatePlaces: ['Razgrad', 'Şumnu (Shumen)', 'Silistre (Silistra)', 'Rusçuk (Ruse)', 'Hacıoğlu Pazarcık (Dobrich)'],
    currentSafeScope: 'NSI, EKATTE ve OEAW toponim kaynakları tarandı; tahrir ve muhacir kayıtları bekleniyor.',
    priorityNextStep: 'Köy bazlı tahrir eşleştirmeleri ve arşiv defteri dökümü.',
    memoFile: 'reports/10_02_REGIONAL_MODULE.md'
  },
  {
    id: 'REG-03',
    name: 'Bulgaristan / Rodoplar',
    nameTr: 'Rodoplar',
    nameEn: 'Bulgarian Rhodopes',
    bounds: [[23.8, 41.1], [26.3, 42.1]],
    readiness: 'staging',
    readinessLabel: 'İnceleme & Taslak',
    candidatePlaces: ['Paşmaklı (Smolyan)', 'Kırcaali (Kardzhali)', 'Hasköy (Haskovo)'],
    currentSafeScope: '2021 NSI istatistikleri ve Osmanlı miras kaynakları; Pomak/Yörük yerleşim ayrımı birincil belge gerektirir.',
    priorityNextStep: 'Köy düzeyinde tahrir ve nüfus defteri analizi.',
    memoFile: 'reports/11_03_REGIONAL_MODULE.md'
  },
  {
    id: 'REG-04',
    name: 'Dobruca',
    nameTr: 'Dobruca',
    nameEn: 'Dobruja / Dobrogea / Dobrudzha',
    bounds: [[27.3, 43.6], [29.8, 45.5]],
    readiness: 'research_ready',
    readinessLabel: 'Araştırma Hazır',
    candidatePlaces: ['Köstence (Constanța)', 'Tulça (Tulcea)', 'Mecidiye (Medgidia)', 'Babadağı (Babadag)', 'Mangalya (Mangalia)'],
    currentSafeScope: 'Tatar, Nogay ve Gagavuz kategorileri, 1878 demografik çıpaları ve MIRAS envanteri hazır.',
    priorityNextStep: 'Tuna vilayeti salnâmeleri ile köy poligonlarının eşlenmesi.',
    memoFile: 'reports/12_04_REGIONAL_MODULE.md'
  },
  {
    id: 'REG-05',
    name: 'Batı Trakya',
    nameTr: 'Batı Trakya',
    nameEn: 'Western Thrace',
    bounds: [[24.5, 40.7], [26.4, 41.6]],
    readiness: 'staging',
    readinessLabel: 'İnceleme & Taslak',
    candidatePlaces: ['Gümülcine (Komotini)', 'İskeçe (Xanthi)', 'Dedeağaç (Alexandroupoli)', 'Yenice (Genisea)'],
    currentSafeScope: 'ELSTAT, Lozan verileri ve Osmanlı Batı Trakya kaynakları doğrulandı.',
    priorityNextStep: 'Vakfiye ve salnâme dökümlerinin koordinat noktalarıyla ilişkilendirilmesi.',
    memoFile: 'reports/13_05_REGIONAL_MODULE.md'
  },
  {
    id: 'REG-06',
    name: 'Yunanistan Makedonyası / Selanik',
    nameTr: 'Selanik ve Makedonya',
    nameEn: 'Greek Macedonia',
    bounds: [[21.2, 40.1], [24.7, 41.4]],
    readiness: 'research_ready',
    readinessLabel: 'Araştırma Hazır',
    candidatePlaces: ['Selanik (Thessaloniki)', 'Kavala', 'Drama', 'Serez (Serres)', 'Filorina (Florina)', 'Vodina (Edessa)', 'Karaferye (Veria)'],
    currentSafeScope: 'Osmanlı, Rum ve Musevi cemaat kaynakları ve mübadele kayıtları kataloglandı.',
    priorityNextStep: 'Kentsel mahalle tahrirleri ve eser envanteri koordinasyonu.',
    memoFile: 'reports/14_06_REGIONAL_MODULE.md'
  },
  {
    id: 'REG-07',
    name: 'Kuzey Makedonya (Genişleme)',
    nameTr: 'Kuzey Makedonya Genişlemesi',
    nameEn: 'North Macedonia beyond pilot',
    bounds: [[20.4, 40.8], [23.1, 42.4]],
    readiness: 'pilot_expanded',
    readinessLabel: 'Pilot Genişleme',
    candidatePlaces: ['Manastır (Bitola)', 'Ohri (Ohrid)', 'Pirlepe (Prilep)', 'İştip (Štip)', 'Köprülü (Veles)', 'Kırçova (Kičevo)', 'Gostivar', 'Ustrumca (Strumica)'],
    currentSafeScope: 'Devlet Arşivleri neşirleri, 1832/33 nüfus defterleri ve miras tescilleri.',
    priorityNextStep: 'Manastır vilayet tahrir ve salnâme verilerinin sisteme aktarımı.',
    memoFile: 'reports/15_07_REGIONAL_MODULE.md'
  },
  {
    id: 'REG-08',
    name: 'Kosova (Genişleme)',
    nameTr: 'Kosova Genişlemesi',
    nameEn: 'Kosovo beyond Prizren',
    bounds: [[20.0, 41.8], [21.8, 43.3]],
    readiness: 'pilot_expanded',
    readinessLabel: 'Pilot Genişleme',
    candidatePlaces: ['İpek (Peja)', 'Yakova (Gjakova)', 'Mitroviça (Mitrovica)', 'Gilan (Gjilan)', 'Ferizovik (Ferizaj)', 'Vıçıtırın (Vushtrri)', 'Priştine (Prishtina)'],
    currentSafeScope: 'ASK istatistikleri, DTK anıt listeleri ve Kosova Vilayeti salnâmeleri hazır.',
    priorityNextStep: 'Kırsal nahiye tahrirlerinin koordinatlandırılması.',
    memoFile: 'reports/16_08_REGIONAL_MODULE.md'
  },
  {
    id: 'REG-09',
    name: 'Arnavutluk',
    nameTr: 'Arnavutluk',
    nameEn: 'Albania',
    bounds: [[19.2, 39.6], [21.1, 42.7]],
    readiness: 'research_ready',
    readinessLabel: 'Araştırma Hazır',
    candidatePlaces: ['İşkodra (Shkodër)', 'Tiran (Tirana)', 'İlbasan (Elbasan)', 'Berat', 'Görice (Korçë)', 'Ergiri (Gjirokastër)', 'Dıraç (Durrës)', 'Avlonya (Vlora)'],
    currentSafeScope: 'AQSH ve BOA fonları, Kamus-ül Alam kayıtları ve INSTAT coğrafi verileri.',
    priorityNextStep: 'Osmanlı kaza merkezleri ile kadastro tescillerinin birleştirilmesi.',
    memoFile: 'reports/17_09_REGIONAL_MODULE.md'
  },
  {
    id: 'REG-10',
    name: 'Sırbistan ve Sancak',
    nameTr: 'Sırbistan ve Sancak',
    nameEn: 'Serbia / Sandžak',
    bounds: [[19.2, 42.3], [22.4, 45.0]],
    readiness: 'research_ready',
    readinessLabel: 'Araştırma Hazır',
    candidatePlaces: ['Yeni Pazar (Novi Pazar)', 'Seniçe (Sjenica)', 'Tutin', 'Niş (Niš)', 'Leskofça (Leskovac)', 'Vranye (Vranje)', 'Belgrad'],
    currentSafeScope: 'Defter-i Mufassal, evkaf kayıtları, muhacir iskanları ve Sırbistan sayımları.',
    priorityNextStep: 'Yeni Pazar Sancağı kaza sınırlarının ve vakıf yapılarının haritalanması.',
    memoFile: 'reports/18_10_REGIONAL_MODULE.md'
  },
  {
    id: 'REG-11',
    name: 'Bosna-Hersek',
    nameTr: 'Bosna-Hersek',
    nameEn: 'Bosnia and Herzegovina',
    bounds: [[15.7, 42.5], [19.7, 45.4]],
    readiness: 'research_ready',
    readinessLabel: 'Araştırma Hazır',
    candidatePlaces: ['Saraybosna (Sarajevo)', 'Mostar', 'Travnik', 'Banyaluka (Banja Luka)', 'Tuzla', 'Bihke (Bihać)'],
    currentSafeScope: 'Bosna tahrir defterleri, şeriyye sicilleri, salnâmeler ve UNESCO anıt listesi.',
    priorityNextStep: 'Kentsel merkezlerdeki yok olmuş vakıf eserlerinin tespiti.',
    memoFile: 'reports/19_11_REGIONAL_MODULE.md'
  },
  {
    id: 'REG-12',
    name: 'Karadağ',
    nameTr: 'Karadağ',
    nameEn: 'Montenegro',
    bounds: [[18.4, 41.8], [20.4, 43.6]],
    readiness: 'research_ready',
    readinessLabel: 'Araştırma Hazır',
    candidatePlaces: ['Podgoriçe (Podgorica)', 'Taşlıca (Pljevlja)', 'Akova (Bijelo Polje)', 'Rojaye (Rožaje)', 'Bar', 'Ülgün (Ulcinj)'],
    currentSafeScope: 'MONSTAT verileri, Osmanlı sınır protokolleri ve kıyı/dağlık sancak kayıtları.',
    priorityNextStep: 'İşkodra ve Hersek sancaklarına bağlı kaza merkezlerinin netleştirilmesi.',
    memoFile: 'reports/20_12_REGIONAL_MODULE.md'
  },
  {
    id: 'REG-13',
    name: 'Romanya Dobrucası',
    nameTr: 'Romanya Dobrucası',
    nameEn: 'Romania / Dobruja',
    bounds: [[27.5, 43.7], [30.1, 45.6]],
    readiness: 'staging',
    readinessLabel: 'İnceleme & Taslak',
    candidatePlaces: ['Köstence (Constanța)', 'Tulça (Tulcea)', 'Babadağı (Babadag)', 'Mecidiye (Medgidia)', 'İshakçı (Isaccea)'],
    currentSafeScope: 'Romanya genel sayımları, Tuna salnâmeleri ve MIRAS Osmanlı eser kayıtları.',
    priorityNextStep: 'Karasu-Babadağı hattı köy toponimlerinin sayısallaştırılması.',
    memoFile: 'reports/21_13_REGIONAL_MODULE.md'
  }
];

export interface RegionPreset {
  id: string;
  name: string;
  category: 'all' | 'modern' | 'historical';
  bounds: [[number, number], [number, number]];
  description?: string;
}

export const regionPresets: RegionPreset[] = [
  {
    id: 'all',
    name: 'Balkanların tamamı',
    category: 'all',
    bounds: [[8.2, 33.8], [45.8, 49.8]],
    description: 'Tüm Balkan ve Doğu Akdeniz coğrafyası genel görünümü'
  },
  // Modern Ülkeler
  { id: 'mkd', name: 'Kuzey Makedonya', category: 'modern', bounds: [[20.4, 40.8], [23.1, 42.4]] },
  { id: 'kos', name: 'Kosova', category: 'modern', bounds: [[20.0, 41.8], [21.8, 43.3]] },
  { id: 'alb', name: 'Arnavutluk', category: 'modern', bounds: [[19.2, 39.6], [21.1, 42.7]] },
  { id: 'bih', name: 'Bosna-Hersek', category: 'modern', bounds: [[15.7, 42.5], [19.7, 45.3]] },
  { id: 'srb', name: 'Sırbistan', category: 'modern', bounds: [[18.8, 42.2], [23.0, 46.2]] },
  { id: 'bgr', name: 'Bulgaristan', category: 'modern', bounds: [[22.3, 41.2], [28.6, 44.3]] },
  { id: 'grc', name: 'Yunanistan (Tümü)', category: 'modern', bounds: [[19.3, 34.8], [28.5, 41.8]], description: 'Yunanistan geneli: Batı Trakya, Makedonya, Tesalya, Epir, Mora, Girit ve Adalar' },
  { id: 'mne', name: 'Karadağ', category: 'modern', bounds: [[18.4, 41.8], [20.4, 43.6]] },
  { id: 'rou', name: 'Romanya (Dobruca)', category: 'modern', bounds: [[27.2, 43.7], [30.0, 45.6]] },
  { id: 'tur', name: 'Türkiye (Doğu Trakya)', category: 'modern', bounds: [[25.8, 40.5], [28.6, 42.2]] },
  // Tarihsel ve Araştırma Bölgeleri
  { id: 'reg-01', name: 'Doğu Trakya', category: 'historical', bounds: [[25.8, 40.5], [28.6, 42.2]], description: 'Edirne, Tekirdağ, Kırklareli, Çorlu' },
  { id: 'reg-02', name: 'Deliorman ve Dobruca', category: 'historical', bounds: [[25.5, 43.0], [28.6, 44.3]], description: 'Şumnu, Razgrad, Silistre, Hacıoğlu Pazarcık, Kemallar, Akkadınlar' },
  { id: 'reg-03', name: 'Rodoplar ve Kırcaali', category: 'historical', bounds: [[23.8, 41.1], [26.2, 42.1]], description: 'Kırcaali, Mestanlı, Hasköy, Paşmaklı, Eğridere, Cebel' },
  { id: 'reg-bg-trakya', name: 'Yukarı Trakya ve Filibe', category: 'historical', bounds: [[24.0, 41.8], [26.8, 42.8]], description: 'Filibe (Plovdiv), Tatar Pazarcık, Eski Zağra, Yeni Zağra, Karlova, Kazanlık' },
  { id: 'reg-bg-sofia', name: 'Sofya ve Batı Bulgaristan', category: 'historical', bounds: [[22.3, 42.0], [24.0, 43.2]], description: 'Sofya, Samakov, Köstendil, İvraca' },
  { id: 'reg-bg-tuna', name: 'Tuna Boyu ve Vidin-Rusçuk', category: 'historical', bounds: [[22.5, 43.4], [27.5, 44.3]], description: 'Rusçuk, Vidin, Silistre, Niğbolu, Ziştovi' },
  { id: 'reg-bg-karadeniz', name: 'Karadeniz Sahili (Varna ve Burgaz)', category: 'historical', bounds: [[27.0, 42.2], [28.6, 43.8]], description: 'Varna, Burgaz, Balçık, Aydos, Karnobat' },
  { id: 'reg-04', name: 'Dobruca (Kuzey)', category: 'historical', bounds: [[27.3, 43.6], [29.8, 45.5]], description: 'Köstence, Tulça, Mecidiye, Babadağı' },
  { id: 'reg-05', name: 'Batı Trakya', category: 'historical', bounds: [[24.5, 40.7], [26.6, 41.8]], description: 'Gümülcine, İskeçe, Dimetoka, Dedeağaç' },
  { id: 'reg-06', name: 'Selanik ve Makedonya', category: 'historical', bounds: [[21.2, 40.0], [24.7, 41.4]], description: 'Selanik, Kavala, Serez, Drama, Karaferye, Vodina' },
  { id: 'reg-thessaly', name: 'Tesalya', category: 'historical', bounds: [[21.4, 39.1], [23.0, 40.0]], description: 'Yenişehir-i Fener (Larissa), Tırhala (Trikala)' },
  { id: 'reg-epirus', name: 'Epir ve Yanya', category: 'historical', bounds: [[20.4, 38.9], [21.4, 40.1]], description: 'Yanya (Ioannina), Narda (Arta), Preveze' },
  { id: 'reg-attica', name: 'Atina ve Eğriboz', category: 'historical', bounds: [[23.0, 37.8], [24.2, 38.8]], description: 'Atina, Eğriboz (Chalkida), İnebahtı' },
  { id: 'reg-morea', name: 'Mora Yarımadası', category: 'historical', bounds: [[21.1, 36.4], [23.2, 38.4]], description: 'Tripoliçe, Anabolu (Nafplio), Korint, Patra, Modon' },
  { id: 'reg-crete', name: 'Girit Adası', category: 'historical', bounds: [[23.5, 34.8], [26.4, 35.7]], description: 'Hanya, Kandiye (Heraklion), Resmo (Rethymno)' },
  { id: 'reg-aegean', name: 'Ege Adaları', category: 'historical', bounds: [[25.8, 35.8], [28.5, 39.4]], description: 'Rodos, İstanköy (Kos), Midilli (Lesbos), Sakız (Chios)' },
  { id: 'reg-07', name: 'Kuzey Makedonya (Genişleme)', category: 'historical', bounds: [[20.4, 40.8], [23.1, 42.4]], description: 'Manastır, Ohri, Pirlepe, İştip' },
  { id: 'reg-08', name: 'Kosova (Genişleme)', category: 'historical', bounds: [[20.0, 41.8], [21.8, 43.3]], description: 'İpek, Yakova, Gilan, Mitroviça' },
  { id: 'reg-09', name: 'Arnavutluk', category: 'historical', bounds: [[19.2, 39.6], [21.1, 42.7]], description: 'İşkodra, Tiran, Berat, İlbasan' },
  { id: 'reg-srb-belgrade', name: 'Belgrad ve Şumadiya', category: 'historical', bounds: [[20.0, 44.2], [21.5, 45.1]], description: 'Belgrad (Kalemegdan, Dorćol), Semendire, Avala, Zemun' },
  { id: 'reg-srb-sandzak', name: 'Sancak Bölgesi', category: 'historical', bounds: [[19.3, 42.8], [20.8, 43.7]], description: 'Yeni Pazar (Novi Pazar), Seniçe, Tutin, Prepol, Priboy, Yenikasaba' },
  { id: 'reg-srb-nis', name: 'Niş ve Güney Sırbistan', category: 'historical', bounds: [[21.1, 42.2], [22.5, 43.7]], description: 'Niş, Leskofça, Vranye, Preşova, Buyanofça, Ürgüp, Kurşunlu' },
  { id: 'reg-srb-podrinje-danube', name: 'Tuna ve Podrinje Hattı', category: 'historical', bounds: [[19.1, 43.6], [22.8, 44.9]], description: 'Semendire, Fethülislam (Kladovo), Böğürdelen (Šabac), Uziçe, Lozniçe' },
  { id: 'reg-bos-sarajevo-central', name: 'Saraybosna ve Orta Bosna', category: 'historical', bounds: [[17.4, 43.7], [18.8, 44.4]], description: 'Saraybosna (Başçarşı, Gazi Hüsrev Bey), Travnik (Vezirler Şehri), Zeniçe, Kladanj' },
  { id: 'reg-bos-herzegovina', name: 'Hersek ve Mostar', category: 'historical', bounds: [[17.3, 42.6], [18.8, 43.7]], description: 'Mostar (Stari Most, Karagöz Bey), Poçitel, Koniçe, İstolça, Blagay Alperenler Tekkesi, Trebinye, Nevesin, Gaçka' },
  { id: 'reg-bos-krajina', name: 'Bosna Serhaddi ve Una-Sana', category: 'historical', bounds: [[15.7, 44.2], [17.4, 45.2]], description: 'Banyaluka (Ferhadiye, Arnaudija), Bihke/Bihać (Fethiye), Cazin, Yayçe (Esma Sultan), Priydor' },
  { id: 'reg-bos-east-drina', name: 'Doğu Bosna ve Drina Hattı', category: 'historical', bounds: [[18.6, 43.4], [19.5, 44.5]], description: 'Foça (Alaca Cami), Vişegrad (Drina Köprüsü), Gorajde, Srebrenitsa, Zvornik (Kula Grad)' },
  { id: 'reg-bos-posavina-tuzla', name: 'Posavina ve Tuzla Havzası', category: 'historical', bounds: [[17.8, 44.4], [19.3, 45.1]], description: 'Tuzla (Gazi Turalı Bey), Gradaçaç (Ejder-i Bosna Kalesi), Bırçka, Biyelyina (Janja), Derbend, Doboy, Maglay' },
  { id: 'reg-12', name: 'Karadağ', category: 'historical', bounds: [[18.4, 41.8], [20.4, 43.6]], description: 'Podgoriçe, Taşlıca, Akova, Ülgün' },
  { id: 'reg-13', name: 'Romanya Dobrucası', category: 'historical', bounds: [[27.5, 43.7], [30.1, 45.6]], description: 'Köstence, Tulça, Babadağı, Mecidiye' }
];

export const gazetteer = places.map(p => ({
  id: p.id,
  name: p.name,
  modern: p.modern,
  aliases: p.aliases,
  coordinates: p.coordinates
}));

export function searchPlaces(q:string){
  return gazetteer.filter(p=>normalize([p.name,p.modern,...p.aliases].join(' ')).includes(normalize(q)));
}

// Ülke ve Bölge Bazlı İşaretçi Filtresi
const albanianPlaceIds = new Set(albanianPlaces.map(p => p.id));
const bosnianPlaceIds = new Set(bosnianPlaces.map(p => p.id));
const serbianPlaceIds = new Set(serbianPlaces.map(p => p.id));
const bulgarianPlaceIds = new Set(bulgarianPlaces.map(p => p.id));
const greekPlaceIds = new Set(greekPlaces.map(p => p.id));
const montenegroIds = new Set([
  'reg-podgorica', 'reg-pljevlja', 'reg-bijelopolje', 'reg-rozaje', 'reg-bar', 'reg-ulcinj'
]);
const romaniaIds = new Set([
  'reg-constanta', 'reg-babadag', 'reg-tulcea', 'reg-medgidia', 'reg-mangalia', 'reg-isaccea'
]);
const turkeyIds = new Set([
  'reg-edirne', 'reg-tekirdag', 'reg-kirklareli', 'reg-corlu', 'reg-luleburgaz', 'reg-enez'
]);
const kosovoIds = new Set([
  'prizren', 'sinan', 'research-PRI-003', 'research-VUS-001', 'research-KAC-001',
  'research-FER-001', 'research-RAH-001', 'research-BRN-001',
  'research-PR-02', 'research-PR-03', 'research-PR-04', 'research-PR-05',
  'research-PR-06', 'research-PR-07', 'research-PR-08', 'research-PR-09',
  'research-PR-10', 'research-PR-11', 'research-PR-12', 'research-PR-13',
  'research-PR-14', 'research-PR-15', 'research-PR-16'
]);
const northMacedoniaIds = new Set([
  'skopje', 'tetovo', 'burmali', 'ishak', 'alaca-tetovo', 'harabati',
  'research-SKP-002', 'research-GOS-001', 'research-KUM-001',
  'research-SK-01', 'research-SK-03', 'research-SK-04', 'research-SK-05',
  'research-SK-06', 'research-SK-07', 'research-SK-08', 'research-SK-09',
  'research-SK-10', 'research-SK-11', 'research-SK-12', 'research-SK-13',
  'reg-bitola', 'reg-ohrid', 'reg-prilep', 'reg-stip', 'reg-veles',
  'reg-kicevo', 'reg-gostivar', 'reg-strumica'
]);

export function filterPlacesByRegionPreset(placesToFilter: Place[], preset?: RegionPreset | null): Place[] {
  if (!preset || preset.id === 'all') return placesToFilter;

  if (preset.id === 'alb' || preset.id === 'reg-09') {
    return placesToFilter.filter(p => albanianPlaceIds.has(p.id));
  }
  if (preset.id === 'bih') {
    return placesToFilter.filter(p => bosnianPlaceIds.has(p.id));
  }
  if (preset.id === 'srb') {
    return placesToFilter.filter(p => serbianPlaceIds.has(p.id));
  }
  if (preset.id === 'bgr') {
    return placesToFilter.filter(p => bulgarianPlaceIds.has(p.id));
  }
  if (preset.id === 'grc') {
    return placesToFilter.filter(p => greekPlaceIds.has(p.id));
  }
  if (preset.id === 'kos' || preset.id === 'reg-08') {
    return placesToFilter.filter(p => kosovoIds.has(p.id));
  }
  if (preset.id === 'mkd' || preset.id === 'reg-07') {
    return placesToFilter.filter(p => northMacedoniaIds.has(p.id));
  }
  if (preset.id === 'mne' || preset.id === 'reg-12') {
    return placesToFilter.filter(p => montenegroIds.has(p.id));
  }
  if (preset.id === 'rou' || preset.id === 'reg-13' || preset.id === 'reg-04') {
    return placesToFilter.filter(p => romaniaIds.has(p.id));
  }
  if (preset.id === 'tur' || preset.id === 'reg-01') {
    return placesToFilter.filter(p => turkeyIds.has(p.id));
  }

  // Tarihsel alt bölgeler (koordinat sınırları)
  const [[minLon, minLat], [maxLon, maxLat]] = preset.bounds;
  return placesToFilter.filter(p => {
    const [lon, lat] = p.coordinates;
    return lon >= minLon && lon <= maxLon && lat >= minLat && lat <= maxLat;
  });
}

export function findRegionPresetForPlace(place: Place): RegionPreset | undefined {
  if (albanianPlaceIds.has(place.id)) return regionPresets.find(r => r.id === 'alb');
  if (bosnianPlaceIds.has(place.id)) return regionPresets.find(r => r.id === 'bih');
  if (serbianPlaceIds.has(place.id)) return regionPresets.find(r => r.id === 'srb');
  if (bulgarianPlaceIds.has(place.id)) return regionPresets.find(r => r.id === 'bgr');
  if (greekPlaceIds.has(place.id)) return regionPresets.find(r => r.id === 'grc');
  if (kosovoIds.has(place.id)) return regionPresets.find(r => r.id === 'kos');
  if (northMacedoniaIds.has(place.id)) return regionPresets.find(r => r.id === 'mkd');
  if (montenegroIds.has(place.id)) return regionPresets.find(r => r.id === 'mne');
  if (romaniaIds.has(place.id)) return regionPresets.find(r => r.id === 'rou');
  if (turkeyIds.has(place.id)) return regionPresets.find(r => r.id === 'tur');
  return undefined;
}

// ==========================================
// BALKANLARDA MÜSLÜMAN NÜFUSUN TARİHSEL SEYRİ
// (Kemal Karpat, Ömer Lütfi Barkan, Justin McCarthy, BOA Salnâmeleri, resmî sayımlar)
//
// YÖNTEM NOTU:
// - Osmanlı kayıtları etnik köken değil din ayrımı yapar (Millet-i İslâm). Bu seri bu nedenle
//   "Müslüman" nüfusu gösterir; Türk, Boşnak, Arnavut, Pomak, Torbeş ayrımı yapılmaz.
// - 2026 değeri sabit bir çerçeveye dayanır: bugünkü Bosna-Hersek, Karadağ, Sırbistan, Kosova,
//   K. Makedonya, Arnavutluk, Bulgaristan ve Yunanistan (Türkiye, Romanya, Hırvatistan, Slovenya hariç).
// - 1912 öncesi çıpalar farklı kaynakların farklı coğrafi tanımlarını sentezler; çerçeve birebir
//   örtüşmez. Uzun dönemli oran değişiminin bir kısmı çerçeve farkından kaynaklanabilir.
// - Çıpalar arası yıllar doğrusal ara değerdir, kayıt değildir.
// ==========================================
export type DemographicEvidenceKind = 'editoryal-tahmin' | 'kaynak-sentezi' | 'sayim-temelli';

export const DEMOGRAPHIC_EVIDENCE_LABELS: Record<DemographicEvidenceKind, string> = {
  'editoryal-tahmin': 'Editoryal tahmin',
  'kaynak-sentezi': 'Kaynak sentezi',
  'sayim-temelli': 'Sayım temelli'
};

export const DEMOGRAPHIC_SCOPE_NOTE =
  'Müslüman nüfus (tüm etnik gruplar). 2026: Bosna, Karadağ, Sırbistan, Kosova, K. Makedonya, Arnavutluk, Bulgaristan, Yunanistan; Türkiye hariç. Eski dönem çıpalarının coğrafi çerçevesi birebir aynı değildir.';

export interface BalkanDemographicAnchor {
  year: number;
  muslim: number;
  total: number;
  source: string;
  note: string;
  kind: DemographicEvidenceKind;
}

export interface BalkanDemographicsResult {
  year: number;
  muslim: number;
  total: number;
  pct: number;
  source: string;
  note: string;
  kind: DemographicEvidenceKind;
  interpolated: boolean;
}

export const BALKAN_DEMOGRAPHICS_ANCHORS: BalkanDemographicAnchor[] = [
  { year: 1354, muslim: 15000, total: 5000000, kind: 'editoryal-tahmin', source: 'Erken İskân (Halil İnalcık)', note: 'Çimpe Kalesi ve ilk Rumeli Yörük geçişleri' },
  { year: 1389, muslim: 220000, total: 5200000, kind: 'editoryal-tahmin', source: 'I. Kosova Dönemi', note: 'Karesi ve Saruhan Türkmenlerinin Trakya ve Meriç vadisi iskânı' },
  { year: 1453, muslim: 680000, total: 5500000, kind: 'editoryal-tahmin', source: 'Fatih Dönemi (İnalcık)', note: 'İstanbul fethi arifesinde Trakya ve Makedonya kentleşmesi' },
  { year: 1485, muslim: 1050000, total: 5600000, kind: 'editoryal-tahmin', source: 'II. Bayezid Tahrirleri (Ö. L. Barkan)', note: 'Barkan’ın hâne tablolarından türetilmiş kişi tahmini; hâne → kişi çarpanı varsayımdır' },
  { year: 1530, muslim: 1280000, total: 5900000, kind: 'editoryal-tahmin', source: 'Kanuni Tahrirleri (Ö. L. Barkan)', note: 'Barkan’ın 1520–1535 hâne tablolarından türetilmiş kişi tahmini' },
  { year: 1580, muslim: 2150000, total: 7100000, kind: 'editoryal-tahmin', source: 'Klasik Dönem', note: 'Bosna ve Arnavutluk ihtidaları ile kentli Müslüman nüfus artışı' },
  { year: 1699, muslim: 2420000, total: 7400000, kind: 'editoryal-tahmin', source: 'Karlofça sonrası', note: 'Macaristan kayıpları sonrası güneye çekilen Müslüman nüfus' },
  { year: 1780, muslim: 2850000, total: 8100000, kind: 'editoryal-tahmin', source: '18. yüzyıl sonu', note: 'Ayanlar dönemi; doğrudan sayım yoktur' },
  { year: 1831, muslim: 3350000, total: 8900000, kind: 'kaynak-sentezi', source: '1831 sayımı (Karpat)', note: 'Yalnız erkek nüfus sayıldı; toplam nüfus Karpat’ın düzeltmesine dayanır' },
  { year: 1876, muslim: 4350000, total: 10200000, kind: 'kaynak-sentezi', source: '93 Harbi arifesi (Karpat, McCarthy)', note: 'Tuna Vilayeti ve Makedonya’da en yüksek Müslüman yoğunluğu' },
  { year: 1881, muslim: 3850000, total: 10600000, kind: 'kaynak-sentezi', source: 'Berlin sonrası (McCarthy)', note: '93 Harbi muhacir dalgası; Bulgaristan ve Sırbistan tahliyeleri' },
  { year: 1894, muslim: 4120000, total: 12100000, kind: 'kaynak-sentezi', source: 'Osmanlı salnâmeleri (Karpat)', note: 'Osmanlı Rumeli vilayetlerinde Müslüman çoğunluk; bağımsız Balkan devletlerinde azınlık' },
  { year: 1912, muslim: 4450000, total: 14800000, kind: 'kaynak-sentezi', source: 'Balkan Harbi arifesi (Karpat)', note: 'Rumeli vilayetlerinde yaklaşık 3,1 milyon Müslüman' },
  { year: 1924, muslim: 2850000, total: 17500000, kind: 'kaynak-sentezi', source: 'Lozan mübadelesi sonrası', note: 'Yunanistan’dan ~355.000–400.000 Müslüman mübadele edildi; Batı Trakya muaf tutuldu' },
  { year: 1950, muslim: 3200000, total: 22000000, kind: 'kaynak-sentezi', source: 'Ulusal sayımlar (1946–1953)', note: 'Bulgaristan ve Yugoslavya’dan Türkiye’ye göçler sürüyor' },
  { year: 1989, muslim: 4100000, total: 30500000, kind: 'kaynak-sentezi', source: 'Ulusal sayımlar (1981–1991)', note: 'Bulgaristan’dan ~360.000 Türkün zorunlu göçü (yaklaşık 150.000’i sonra geri döndü)' },
  { year: 2026, muslim: 6100000, total: 33150000, kind: 'sayim-temelli', source: 'Resmî sayımlar: BHAS 2013, ASK 2024, INSTAT 2023, MakStat 2021, NSI 2021, RZS 2022, MONSTAT 2023', note: 'Bosna ~1,62M (2013 oranı, güncel nüfusa uygulanmış tahmin) · Kosova ~1,5M · Arnavutluk ~1,22M (%45,9 Müslüman + %4,8 Bektaşi) · Bulgaristan ~0,64M · K. Makedonya ~0,59M · Sırbistan ~0,28M · Karadağ ~0,13M · Yunanistan ~0,12M' }
];

export function getBalkanDemographicsForYear(year: number): BalkanDemographicsResult {
  const anchors = BALKAN_DEMOGRAPHICS_ANCHORS;
  const exact = (a: BalkanDemographicAnchor): BalkanDemographicsResult => ({ ...a, pct: (a.muslim / a.total) * 100, interpolated: false });
  if (year <= anchors[0].year) return exact(anchors[0]);
  if (year >= anchors[anchors.length - 1].year) return exact(anchors[anchors.length - 1]);

  let i = 0;
  while (i < anchors.length - 1 && anchors[i + 1].year <= year) {
    i++;
  }

  const a1 = anchors[i];
  const a2 = anchors[i + 1];

  if (a1.year === year) return exact(a1);
  if (a2.year === year) return exact(a2);

  const factor = (year - a1.year) / (a2.year - a1.year);
  const muslim = Math.round(a1.muslim + factor * (a2.muslim - a1.muslim));
  const total = Math.round(a1.total + factor * (a2.total - a1.total));
  const pct = (muslim / total) * 100;

  // Ara değerin güvenilirliği, iki çıpadan daha zayıf olanınki kadardır.
  const order: DemographicEvidenceKind[] = ['editoryal-tahmin', 'kaynak-sentezi', 'sayim-temelli'];
  const kind = order[Math.min(order.indexOf(a1.kind), order.indexOf(a2.kind))];

  return {
    year,
    muslim,
    total,
    pct,
    source: `${a1.year}–${a2.year} arası doğrusal ara değer (${a1.source} → ${a2.source})`,
    note: a1.note,
    kind,
    interpolated: true
  };
}

export * from './migration-data.ts';

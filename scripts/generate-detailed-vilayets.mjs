import fs from 'node:fs';

// Load base country geometry
const countries = JSON.parse(fs.readFileSync('public/data/countries.geojson', 'utf8'));

const grcMain = countries.features.find(f => f.properties.iso === 'GRC').geometry.coordinates[0][0];
const albCoords = countries.features.find(f => f.properties.iso === 'ALB').geometry.coordinates[0];
const bihCoords = countries.features.find(f => f.properties.iso === 'BIH').geometry.coordinates[0];
const kosCoords = countries.features.find(f => f.properties.iso === 'KOS').geometry.coordinates[0];
const mkdCoords = countries.features.find(f => f.properties.iso === 'MKD').geometry.coordinates[0];
const turThrace = countries.features.find(f => f.properties.iso === 'TUR').geometry.coordinates[1][0];

// Helper: Linear interpolate between waypoints with smooth steps
function smoothPath(waypoints, stepsPerSegment = 4) {
  const result = [];
  for (let i = 0; i < waypoints.length - 1; i++) {
    const p1 = waypoints[i];
    const p2 = waypoints[i + 1];
    for (let s = (i === 0 ? 0 : 1); s <= stepsPerSegment; s++) {
      const t = s / stepsPerSegment;
      const lon = p1[0] + t * (p2[0] - p1[0]);
      const lat = p1[1] + t * (p2[1] - p1[1]);
      result.push([Number(lon.toFixed(5)), Number(lat.toFixed(5))]);
    }
  }
  return result;
}

// -------------------------------------------------------------
// 1. BOSNA VİLAYETİ (616 high-precision coordinates from BIH)
// -------------------------------------------------------------
const bosnaPolygon = bihCoords.map(p => [Number(p[0].toFixed(5)), Number(p[1].toFixed(5))]);

// -------------------------------------------------------------
// 2. SELANİK VİLAYETİ (Salonika)
// Coast: Real GRC mainland indices 867 to 504 (Chalcidice, Athos, Thermaic & Strymonic gulfs)
// -------------------------------------------------------------
const selCoast = [];
// In GRC, index 867 (Platamonas) down to index 504 (Nestos mouth)
for (let i = 867; i >= 504; i--) {
  selCoast.push([Number(grcMain[i][0].toFixed(5)), Number(grcMain[i][1].toFixed(5))]);
}
// Inland border of Selanik:
// From Nestos delta (24.73, 40.85) up along Nestos/Mesta river through Drama/Nevrekop, 
// then along Southern Rhodopes/Pirin/Belasica, across Strumica valley, 
// down along Voras/Bermion ridge (west of Edessa and Veroia), back to Platamonas (22.65, 39.98).
const selInlandWaypoints = [
  [24.72836, 40.85273], // Nestos mouth
  [24.68, 41.05],       // Xanthi/Drama border river
  [24.52, 41.25],       // Mesta gorge
  [24.25, 41.45],       // Nevrekop (Gotse Delchev) east border
  [23.95, 41.65],       // Pirin mountain crest
  [23.55, 41.52],       // Melnik / Sandanski ridge
  [23.25, 41.40],       // Struma river entry (Rupel pass / Demir Hisar)
  [22.95, 41.35],       // Belasica mountain crest (Bulgarian border)
  [22.75, 41.40],       // Strumica north ridge
  [22.45, 41.50],       // Radoviš / Serta mountain crest
  [22.15, 41.45],       // Demir Kapija / Vardar gorge
  [21.95, 41.20],       // Voras / Nidže mountain crest (Kaimakchalan)
  [21.85, 40.95],       // Edessa / Ostrovo lake east ridge
  [22.05, 40.65],       // Bermion ridge (west of Veroia / Karaferye)
  [22.25, 40.35],       // Aliakmon river valley
  [22.45, 40.15],       // Pieria mountains / Olympus east slope
  [22.65252, 39.98208]  // Platamonas / Tempe valley (joins coast)
];
const selInland = smoothPath(selInlandWaypoints, 6);
const selanikPolygon = [...selCoast, ...selInland.slice(1)];
// Ensure closed
if (selanikPolygon[0][0] !== selanikPolygon[selanikPolygon.length - 1][0] || 
    selanikPolygon[0][1] !== selanikPolygon[selanikPolygon.length - 1][1]) {
  selanikPolygon.push(selanikPolygon[0]);
}

// -------------------------------------------------------------
// 3. İŞKODRA VİLAYETİ (Scutari)
// Coast: Real ALB indices 426 (Bojana mouth) to 359 (Shkumbin mouth)
// -------------------------------------------------------------
const iskCoast = [];
for (let i = 426; i >= 359; i--) {
  iskCoast.push([Number(albCoords[i][0].toFixed(5)), Number(albCoords[i][1].toFixed(5))]);
}
// Inland border of İşkodra:
// From Shkumbin mouth (19.44, 41.03) along Shkumbin river past Peqin to Elbasan border,
// then north along Shebenik / Martanesh / Mirdita mountains, crossing Drin river,
// along Prokletije ridge to Lake Skadar and Bojana river mouth.
const iskInlandWaypoints = [
  [19.44125, 41.02603], // Shkumbin mouth
  [19.65, 41.06],       // Rrogozhinë
  [19.80, 41.08],       // Peqin
  [19.98, 41.15],       // West of Elbasan / Cërrik
  [20.08, 41.35],       // Martanesh mountain crest
  [20.15, 41.65],       // Mat river valley / Mirdita
  [20.05, 41.95],       // Drin valley / Pukë north
  [19.85, 42.20],       // Cukali mountain ridge
  [19.60, 42.35],       // Prokletije / Vermosh south border
  [19.45, 42.15],       // Lake Skadar eastern/southern shore
  [19.36422, 41.86285]  // Bojana river mouth (joins coast)
];
const iskInland = smoothPath(iskInlandWaypoints, 6);
const iskodraPolygon = [...iskCoast, ...iskInland.slice(1)];
if (iskodraPolygon[0][0] !== iskodraPolygon[iskodraPolygon.length - 1][0] || 
    iskodraPolygon[0][1] !== iskodraPolygon[iskodraPolygon.length - 1][1]) {
  iskodraPolygon.push(iskodraPolygon[0]);
}

// -------------------------------------------------------------
// 4. YANYA VİLAYETİ (Janina)
// Coast: Real ALB indices 359 (Shkumbin mouth) down to 216 (Greek border),
// and GRC indices 2585 down to 2481 (Preveza / Ambracian gulf)
// -------------------------------------------------------------
const yanCoast = [];
// ALB portion (Shkumbin mouth -> Vlore bay -> Himara -> Sarande -> Greek border)
for (let i = 359; i >= 216; i--) {
  yanCoast.push([Number(albCoords[i][0].toFixed(5)), Number(albCoords[i][1].toFixed(5))]);
}
// GRC portion (Border at 39.85 down to Preveza at 38.95)
for (let i = 2585; i >= 2481; i--) {
  yanCoast.push([Number(grcMain[i][0].toFixed(5)), Number(grcMain[i][1].toFixed(5))]);
}
// Inland border of Yanya:
// From Preveza / Ambracian Gulf (20.75, 38.95) east along 1881 Greek border (Arta river),
// north along Pindus mountain ridge (Metsovo, Tymfi, Smolikas),
// Gramos mountains (Albanian border), Tomorr ridge, Berat / Seman / Shkumbin mouth.
const yanInlandWaypoints = [
  [20.74692, 38.95795], // Preveza / Ambracian gulf
  [20.98, 39.15],       // Arta river border (1881)
  [21.15, 39.45],       // Pindus / Athamanika mountains
  [21.18, 39.75],       // Metsovo pass (Zygos pass, 1881 Ottoman-Greek border)
  [20.95, 40.05],       // Smolikas / Konitsa north ridge
  [20.75, 40.35],       // Gramos mountains crest
  [20.45, 40.50],       // Devoll valley west / Përmet north
  [20.15, 40.65],       // Tomorr mountain ridge
  [19.95, 40.75],       // Berat north
  [19.70, 40.90],       // Lushnjë west
  [19.44125, 41.02603]  // Shkumbin mouth (joins coast)
];
const yanInland = smoothPath(yanInlandWaypoints, 6);
const yanyaPolygon = [...yanCoast, ...yanInland.slice(1)];
if (yanyaPolygon[0][0] !== yanyaPolygon[yanyaPolygon.length - 1][0] || 
    yanyaPolygon[0][1] !== yanyaPolygon[yanyaPolygon.length - 1][1]) {
  yanyaPolygon.push(yanyaPolygon[0]);
}

// -------------------------------------------------------------
// 5. MANASTIR VİLAYETİ (Monastir)
// Central-western Macedonia & Korçë & Kozani/Grevena/Servia
// -------------------------------------------------------------
const manWaypoints = [
  // West border (with İşkodra & Yanya):
  [19.98, 41.15],       // Near Elbasan
  [20.25, 41.35],       // Jablanica mountain crest
  [20.55, 41.55],       // Debar / Black Drin gorge
  [20.65, 41.78],       // Korab mountain south ridge
  // North border (with Kosova):
  [20.85, 41.75],       // Mavrovo / Bistra mountain ridge
  [21.05, 41.65],       // Kičevo / Suva Gora south crest
  [21.35, 41.60],       // Dautica / Jakupica mountain crest (south of Skopje)
  [21.65, 41.45],       // Babuna pass (north of Prilep)
  // East border (shared with Selanik):
  [21.95, 41.20],       // Voras / Nidže mountain (Kaimakchalan)
  [21.85, 40.95],       // Edessa / Ostrovo west ridge
  [22.05, 40.65],       // Bermion ridge (west of Veroia)
  [22.25, 40.35],       // Aliakmon valley / Servia (Serfiçe)
  [22.45, 40.15],       // Mount Olympus north ridge
  // South border (1881 Greek border):
  [22.35, 39.95],       // Elassona / Kamvounia mountains (1881 border)
  [21.85, 39.90],       // Chasia mountains north of Kalabaka
  [21.45, 39.85],       // Pindus mountain ridge (Grevena south border)
  // West border (shared with Yanya):
  [21.18, 39.75],       // Metsovo pass
  [20.95, 40.05],       // Konitsa east ridge
  [20.75, 40.35],       // Gramos mountains
  [20.65, 40.60],       // Korçë / Maliq plain
  [20.35, 40.90],       // Pogradec / Lake Ohrid southwest
  [19.98, 41.15]        // Back to Elbasan
];
const manastirPolygon = smoothPath(manWaypoints, 6);
if (manastirPolygon[0][0] !== manastirPolygon[manastirPolygon.length - 1][0] || 
    manastirPolygon[0][1] !== manastirPolygon[manastirPolygon.length - 1][1]) {
  manastirPolygon.push(manastirPolygon[0]);
}

// -------------------------------------------------------------
// 6. KOSOVA VİLAYETİ (Kosovo + Sandžak + Üsküp/Skopje Sanjak)
// -------------------------------------------------------------
const kosWaypoints = [
  // Northwest (Sandžak of Pljevlja/Taşlıca & Prijepolje border with Bosnia):
  [19.10, 43.35],       // Pljevlja (Taşlıca) / Tara canyon border
  [19.35, 43.55],       // Prijepolje / Lim valley border
  [19.75, 43.45],       // Sjenica north / Zlatar mountains
  // North (1878 Serbian border):
  [20.15, 43.40],       // Javor / Golija mountains
  [20.55, 43.30],       // Novi Pazar north / Rogozna mountains
  [20.95, 43.15],       // Kopaonik mountain ridge
  [21.45, 42.95],       // Kuršumlija south / Podujevo north border
  [21.85, 42.50],       // Ristovac (1878 Ottoman-Serbian border post south of Vranje!)
  // East (Bulgarian border along Osogovo mountains):
  [22.25, 42.35],       // Kriva Palanka / Deve Bair pass
  [22.45, 42.15],       // Osogovo mountain crest
  [22.55, 41.85],       // Delčevo / Kočani east ridge
  [22.35, 41.65],       // Plačkovica mountain ridge
  // South (border with Selanik & Manastır):
  [22.05, 41.65],       // Štip south / Serta ridge
  [21.65, 41.80],       // Veles north / Babuna pass
  [21.35, 41.85],       // Jakupica / Karadžica south of Skopje
  [20.95, 41.85],       // Suva Gora / Gostivar south border
  [20.65, 41.95],       // Šar Mountains / Korab crest
  // West (Prokletije / Montenegro border):
  [20.45, 42.35],       // Đakovica / Çabrat west
  [20.05, 42.65],       // Peć / Rugova gorge
  [19.85, 42.95],       // Rožaje / Hajla mountain
  [19.45, 43.15],       // Bijelo Polje north
  [19.10, 43.35]        // Back to Pljevlja
];
const kosovaPolygon = smoothPath(kosWaypoints, 7);
if (kosovaPolygon[0][0] !== kosovaPolygon[kosovaPolygon.length - 1][0] || 
    kosovaPolygon[0][1] !== kosovaPolygon[kosovaPolygon.length - 1][1]) {
  kosovaPolygon.push(kosovaPolygon[0]);
}

// -------------------------------------------------------------
// 7. EDİRNE VİLAYETİ (Eastern Thrace + Western Thrace)
// Real Gallipoli, Marmara coast, Black sea coast, plus Western Thrace to Nestos
// -------------------------------------------------------------
// Thrace mainland from TUR part 1 (495 points)
const edrEastCoast = turThrace.map(p => [Number(p[0].toFixed(5)), Number(p[1].toFixed(5))]);

// Western Thrace extension (from Meriç river delta westward to Nestos/Mesta river):
// Dedeağaç (Alexandroupoli), Komotini (Gümülcine), Xanthi (İskeçe), Kırcaali (Kardzhali)
const edrWestWaypoints = [
  [26.04, 40.75],       // Enez / Meriç river mouth
  [25.88, 40.85],       // Dedeağaç (Alexandroupoli) coast
  [25.35, 40.95],       // Fanari / Vistonida lake
  [24.72836, 40.85273], // Nestos river mouth (border with Selanik Vilayeti!)
  [24.68, 41.05],       // Xanthi (İskeçe) west / Mesta valley
  [24.85, 41.35],       // Rhodope mountain ridge
  [25.15, 41.55],       // Kardzhali (Kırcaali) south ridge
  [25.55, 41.65],       // Arda river valley
  [26.05, 41.75],       // Svilengrad / Cisr-i Mustafa Paşa border (1885 border)
  [26.03321, 41.85]     // Joins TUR part 1 northern border
];
const edrWest = smoothPath(edrWestWaypoints, 6);

// Stitch Edirne together: Western Thrace + Eastern Thrace
const edirnePolygon = [...edrWest, ...edrEastCoast];
if (edirnePolygon[0][0] !== edirnePolygon[edirnePolygon.length - 1][0] || 
    edirnePolygon[0][1] !== edirnePolygon[edirnePolygon.length - 1][1]) {
  edirnePolygon.push(edirnePolygon[0]);
}

// Build FeatureCollection
const features = [
  {
    type: "Feature",
    id: "VIL-KOS",
    properties: {
      code: "KOS",
      name: "Kosova Vilayeti",
      merkez: "Üsküp (Skopje)",
      donem: "1877–1912",
      sancaklar: ["Üsküp", "Priştine", "Prizren", "İpek (Peć)", "Yenipazar (Novi Pazar)", "Taşlıca (Pljevlja)"],
      color: "#8B2616",
      fillColor: "rgba(139, 38, 22, 0.12)",
      aciklama: "1877'de kurulan vilayet; 1888'den itibaren vilayet merkezi Üsküp olmuştur. Rumeli demiryolu hattının kalbidir."
    },
    geometry: {
      type: "Polygon",
      coordinates: [kosovaPolygon]
    }
  },
  {
    type: "Feature",
    id: "VIL-MAN",
    properties: {
      code: "MAN",
      name: "Manastır Vilayeti",
      merkez: "Manastır (Bitola)",
      donem: "1879–1912",
      sancaklar: ["Manastır", "Görice (Korçë)", "Debre", "Serfiçe (Servia)", "Elbasan"],
      color: "#B38A4A",
      fillColor: "rgba(179, 138, 74, 0.12)",
      aciklama: "Geniş coğrafyasıyla Güney Makedonya, Doğu Arnavutluk ve Kuzey Yunanistan'ı bağlayan Osmanlı askeri ve ticari merkezi."
    },
    geometry: {
      type: "Polygon",
      coordinates: [manastirPolygon]
    }
  },
  {
    type: "Feature",
    id: "VIL-SEL",
    properties: {
      code: "SEL",
      name: "Selanik Vilayeti",
      merkez: "Selanik (Thessaloniki)",
      donem: "1867–1912",
      sancaklar: ["Selanik", "Siroz (Serres)", "Drama"],
      color: "#2563EB",
      fillColor: "rgba(37, 99, 235, 0.10)",
      aciklama: "Ege Denizi'ne açılan en büyük Osmanlı liman kenti; Aynoroz yarımadasından Drama ve Kavala tütün ovalarına uzanan zengin sanayi ve ticaret havzası."
    },
    geometry: {
      type: "Polygon",
      coordinates: [selanikPolygon]
    }
  },
  {
    type: "Feature",
    id: "VIL-ISK",
    properties: {
      code: "ISK",
      name: "İşkodra Vilayeti",
      merkez: "İşkodra (Shkodër)",
      donem: "1867–1912",
      sancaklar: ["İşkodra", "Draç (Durrës)"],
      color: "#7C3AED",
      fillColor: "rgba(124, 58, 237, 0.10)",
      aciklama: "Adriyatik kıyısında stratejik konumu, İşkodra Gölü ve limanlarıyla Kuzey Arnavutluk idari sahası."
    },
    geometry: {
      type: "Polygon",
      coordinates: [iskodraPolygon]
    }
  },
  {
    type: "Feature",
    id: "VIL-YAN",
    properties: {
      code: "YAN",
      name: "Yanya Vilayeti",
      merkez: "Yanya (Ioannina)",
      donem: "1867–1912",
      sancaklar: ["Yanya", "Ergiri (Gjirokastër)", "Preveze", "Berat"],
      color: "#059669",
      fillColor: "rgba(5, 150, 105, 0.10)",
      aciklama: "Güney Arnavutluk ve Epir havzasında İon Denizi'ne uzanan, zengin Bektaşi tekkeleri ve ticaret yollarına sahip vilayet."
    },
    geometry: {
      type: "Polygon",
      coordinates: [yanyaPolygon]
    }
  },
  {
    type: "Feature",
    id: "VIL-BOS",
    properties: {
      code: "BOS",
      name: "Bosna Vilayeti (1878 Öncesi)",
      merkez: "Saraybosna (Sarajevo)",
      donem: "1867–1878 (1908'e dek de jure Osmanlı)",
      sancaklar: ["Saray", "Travnik", "Banaluka", "Biheke", "Zvornik", "Hersek (Mostar)"],
      color: "#00694C",
      fillColor: "rgba(0, 105, 76, 0.10)",
      aciklama: "Osmanlı'nın Orta Avrupa serhaddi; 1878 Berlin Antlaşması ile Avusturya-Macaristan işgaline bırakılmış ancak hukuken 1908'e dek Osmanlı toprağı sayılmıştır."
    },
    geometry: {
      type: "Polygon",
      coordinates: [bosnaPolygon]
    }
  },
  {
    type: "Feature",
    id: "VIL-EDR",
    properties: {
      code: "EDR",
      name: "Edirne Vilayeti",
      merkez: "Edirne (Adrianople)",
      donem: "1867–1912",
      sancaklar: ["Edirne", "Tekfurdağı (Tekirdağ)", "Gelibolu", "Dedeağaç (Alexandroupoli)", "Gümülcine (Komotini)"],
      color: "#991B1B",
      fillColor: "rgba(153, 27, 27, 0.10)",
      aciklama: "Doğu ve Batı Trakya'yı bütünüyle kapsayan, Meriç ve Tunca boylarıyla Payitaht İstanbul'un batı kalkanı olan tarihi sancak merkezi."
    },
    geometry: {
      type: "Polygon",
      coordinates: [edirnePolygon]
    }
  }
];

const geojson = {
  type: "FeatureCollection",
  name: "ottoman_balkan_vilayets_1878_1912_detailed",
  crs: {
    type: "name",
    properties: {
      name: "urn:ogc:def:crs:OGC:1.3:CRS84"
    }
  },
  features
};

fs.writeFileSync('public/data/ottoman-vilayets.geojson', JSON.stringify(geojson, null, 2), 'utf8');

console.log('Successfully generated public/data/ottoman-vilayets.geojson!');
features.forEach(f => {
  console.log(`- ${f.properties.name}: ${f.geometry.coordinates[0].length} points`);
});

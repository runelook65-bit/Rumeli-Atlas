import fs from 'node:fs';

// 1. Update lib/atlas-map.ts
let mapCode = fs.readFileSync('lib/atlas-map.ts', 'utf8');

const oldMapInit = `   minZoom:5.5,
   maxZoom:17,
   maxBounds:[[35.0,12.8],[47.5,30.8]],
   maxBoundsViscosity:1.0,
   preferCanvas:false,
   zoomSnap:0.25
  }).fitBounds([[36.2,13.8],[46.8,29.8]],{padding:[25,25]});`;

const newMapInit = `   minZoom:4.0,
   maxZoom:17,
   maxBounds:[[28.0, 4.0],[54.0, 52.0]],
   maxBoundsViscosity:0.6,
   preferCanvas:false,
   zoomSnap:0.25
  }).fitBounds([[33.8, 8.2],[49.8, 45.8]],{padding:[15,15]});`;

if (mapCode.includes(oldMapInit)) {
  mapCode = mapCode.replace(oldMapInit, newMapInit);
  fs.writeFileSync('lib/atlas-map.ts', mapCode, 'utf8');
  console.log('Successfully updated initial bounds in lib/atlas-map.ts');
} else {
  console.log('Could not find exact oldMapInit in lib/atlas-map.ts, checking partial match...');
  // regex replace
  mapCode = mapCode.replace(/minZoom:\s*5\.5,[\s\S]*?\.fitBounds\(\[\[36\.2,13\.8\],\[46\.8,29\.8\]\],\{padding:\[25,25\]\}\);/, 
    newMapInit.trim()
  );
  fs.writeFileSync('lib/atlas-map.ts', mapCode, 'utf8');
  console.log('Updated lib/atlas-map.ts via regex.');
}

// 2. Update regionPresets[0] in lib/atlas-data.ts
let dataCode = fs.readFileSync('lib/atlas-data.ts', 'utf8');

const oldPreset = `  {
    id: 'all',
    name: 'Balkanların tamamı',
    category: 'all',
    bounds: [[13.8, 36.2], [29.8, 46.8]],
    description: 'Tüm Balkan coğrafyası genel görünümü'
  },`;

const newPreset = `  {
    id: 'all',
    name: 'Balkanların tamamı',
    category: 'all',
    bounds: [[8.2, 33.8], [45.8, 49.8]],
    description: 'Tüm Balkan ve Doğu Akdeniz coğrafyası genel görünümü'
  },`;

if (dataCode.includes(oldPreset)) {
  dataCode = dataCode.replace(oldPreset, newPreset);
  fs.writeFileSync('lib/atlas-data.ts', dataCode, 'utf8');
  console.log('Successfully updated regionPresets[0] in lib/atlas-data.ts');
} else {
  console.log('Could not find exact oldPreset in lib/atlas-data.ts');
}

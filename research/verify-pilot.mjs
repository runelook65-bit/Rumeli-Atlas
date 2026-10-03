import assert from 'node:assert/strict';
import {places,sources,searchPlaces,visiblePlaces,observationsAt} from '../lib/atlas-data.ts';
assert.equal(new Set(places.map(p=>p.id)).size,places.length);
for(const p of places){assert(sources.some(s=>s.id===p.source));assert(p.coordinates[0]>15&&p.coordinates[0]<30);assert(p.coordinates[1]>35&&p.coordinates[1]<48);assert(p.locationAccuracy);assert(p.datePrecision);assert(p.currentAsOf);for(const o of p.observations){assert(sources.some(s=>s.id===o.source));if(o.values)assert(o.unit&&o.scope);}}
assert.equal(searchPlaces('Filibe')[0].modern,'Plovdiv');assert.equal(searchPlaces('Plovdiv')[0].name,'Filibe');assert.equal(searchPlaces('Üsküp')[0].id,'skopje');assert.equal(searchPlaces('Skopje')[0].id,'skopje');assert.equal(searchPlaces('Kalkandelen')[0].id,'tetovo');
assert(visiblePlaces(1924,['heritage']).some(p=>p.id==='burmali'));assert(!visiblePlaces(1925,['heritage']).some(p=>p.id==='burmali'));assert(visiblePlaces(2026,[],true).some(p=>p.id==='burmali'));
assert(!visiblePlaces(1354,['heritage']).length);assert.equal(visiblePlaces(1354,['settlement']).length,3);
const tetovo=places.find(p=>p.id==='tetovo');assert.equal(observationsAt(tetovo,1455,'religion')[0].unit,'hâne');assert.equal(observationsAt(tetovo,1894,'religion')[0].scope,'Kalkandelen kazası; şehir değil');assert.equal(observationsAt(tetovo,1895,'religion').length,0);assert.equal(observationsAt(tetovo,1563,'administration').filter(o=>!o.recordId).length,0);
const prizren=places.find(p=>p.id==='prizren');assert.equal(observationsAt(prizren,1530,'religion')[0].values.reduce((s,v)=>s+v.value,0),666);
console.log('Pilot verified: provenance, aliases, temporal boundaries, exact-year demography, unit/scope separation.');

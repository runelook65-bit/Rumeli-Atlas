import assert from 'node:assert/strict';
import {places,sources,researchPackage,observationsAt,visiblePlaces,searchPlaces,pilotPlaces} from '../lib/atlas-data.ts';
assert.equal(pilotPlaces.length,44);assert(sources.length>=38);assert.equal(researchPackage.unmapped.length,2);
for(const p of places){for(const s of [...(p.additionalSources??[]),...p.events.map(e=>e.source)])assert(sources.some(x=>x.id===s));}
assert.equal(searchPlaces('Pürzerrin')[0].id,'prizren');assert.equal(searchPlaces('Uroševac')[0].modern,'Ferizaj');
const t=places.find(p=>p.id==='tetovo');const conflict=observationsAt(t,1452,'religion').filter(o=>o.disputed);assert.equal(conflict.length,2);assert.deepEqual(conflict.map(o=>o.values[0].value),[146,159]);assert(!observationsAt(t,1454,'religion').length);
assert(observationsAt(t,2021,'ethnicity').length);assert(!observationsAt(t,2021,'religion').length);assert(observationsAt(t,2021,'language').length);
const s=places.find(p=>p.id==='skopje');assert.equal(observationsAt(s,1833,'community').filter(o=>o.unit==='hâne').length,3);
assert.equal(researchPackage.tables.migrations.length,10);assert.equal(researchPackage.regions.filter(r=>r.geometry===null).length,3);
assert(visiblePlaces(2026,[],true).some(p=>p.id==='research-PR-16'));assert(!visiblePlaces(2026,['heritage']).some(p=>p.id==='research-PR-16'));
for(const x of researchPackage.tables.sources)if(x.url)assert(['http:','https:'].includes(new URL(x.url).protocol));
console.log('Import verified: 44 objects, 38 sources, aliases, separate units/dimensions, conflicts, unknown geometry and lost-state handling.');

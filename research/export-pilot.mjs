import {writeFileSync} from 'node:fs';
import {places,sources} from '../lib/atlas-data.ts';
writeFileSync('public/data/pilot.json',JSON.stringify({edition:'2026-10-01',status:'review-pilot',places,sources},null,2));
writeFileSync('public/data/pilot.geojson',JSON.stringify({type:'FeatureCollection',features:places.map(p=>({type:'Feature',id:p.id,geometry:{type:'Point',coordinates:p.coordinates},properties:{id:p.id,name:p.name,modern:p.modern,layer:p.layer,start:p.start,end:p.end??null,confidence:p.confidence,locationAccuracy:p.locationAccuracy,source:p.source,datePrecision:p.datePrecision}}))},null,2));

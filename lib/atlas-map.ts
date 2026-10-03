import {isOttomanFoundation, type Place} from './atlas-data';
import type {Map as GLMap,Marker as GLMarker} from 'maplibre-gl';
export type MapSettings={places:Place[];names:boolean;boundaries:boolean;streets:boolean;onSelect:(p:Place)=>void;onCluster?:(places:Place[])=>void};
export type AtlasMapHandle={
 engine:'maplibre'|'leaflet';ready:Promise<void>;
 flyTo:(options:{center:[number,number];zoom:number;duration?:number})=>void;
 fitBounds:(bounds:[[number,number],[number,number]],options?:{padding?:number;duration?:number})=>void;
 zoomIn:()=>void;zoomOut:()=>void;update:(settings:MapSettings)=>void;remove:()=>void;
 invalidateSize?:()=>void;
};
function markerElement(p:Place,names:boolean,onSelect:(p:Place)=>void){
 const el=document.createElement('button');
 const isOttoman=p.layer==='settlement'&&isOttomanFoundation(p);
 const isHistoricalSettlement=p.layer==='settlement'&&!isOttoman;
 const settlementClass=isOttoman?'settlement-green':isHistoricalSettlement?'settlement-red':'';
 const pinClass=isOttoman?'pin-green':isHistoricalSettlement?'pin-red':'';
 const labelClass=isOttoman?'label-green':isHistoricalSettlement?'label-red':'';

 el.className=`place-marker ${p.layer} ${p.lost?'lost':''} ${settlementClass}`;
 el.setAttribute('aria-label',`${p.name} ayrıntıları`);
 const dot=document.createElement('span');dot.className=`pin ${pinClass}`;dot.textContent=p.lost?'×':p.layer==='heritage'?'◇':'•';el.appendChild(dot);
 const label=document.createElement('span');label.className=`place-label ${labelClass}`;label.textContent=names?p.name:p.modern;el.appendChild(label);
 el.onclick=event=>{event.stopPropagation();onSelect(p)};return el;
}
async function createMapLibre(container:HTMLDivElement):Promise<AtlasMapHandle>{
 const gl=await import('maplibre-gl');
 gl.setWorkerUrl(new URL('/maplibre/maplibre-gl-worker.mjs',window.location.origin).href);
 const m:GLMap=new gl.Map({container,center:[21.13,42.06],zoom:9,pitch:0,maxBounds:[[11,33],[33,50]],minZoom:4,maxZoom:17,attributionControl:false,style:{version:8,sources:{countries:{type:'geojson',data:'/data/countries.geojson'},rivers:{type:'geojson',data:'/data/rivers.geojson'},lakes:{type:'geojson',data:'/data/lakes.geojson'},streets:{type:'raster',tiles:['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],tileSize:256}},layers:[{id:'water',type:'background',paint:{'background-color':'#cddce0'}},{id:'land',type:'fill',source:'countries',paint:{'fill-color':'#edece4','fill-outline-color':'#a5b6b8'}},{id:'lakes',type:'fill',source:'lakes',paint:{'fill-color':'#cddce0'}},{id:'rivers',type:'line',source:'rivers',paint:{'line-color':'#b4cdd0','line-width':1.5}},{id:'modern-boundaries',type:'line',source:'countries',paint:{'line-color':'#9ca6a1','line-width':1.2,'line-dasharray':[3,3]}},{id:'streets',type:'raster',source:'streets',paint:{'raster-opacity':.65,'raster-saturation':-.7}}]}});
 container.dataset.mapEngine='maplibre';
 let markers:GLMarker[]=[];
 const ready=new Promise<void>(resolve=>m.once('style.load',()=>resolve()));
 m.addControl(new gl.ScaleControl({unit:'metric'}),'bottom-left');
 m.on('zoom',()=>container.classList.toggle('close-view',m.getZoom()>=11));
 const observer=new ResizeObserver(()=>m.resize());observer.observe(container);
 return {engine:'maplibre',ready,flyTo:o=>{m.flyTo(o)},fitBounds:(b,o)=>{m.fitBounds(b,o)},zoomIn:()=>{m.zoomIn()},zoomOut:()=>{m.zoomOut()},update:s=>{
  markers.forEach(p=>p.remove());markers=s.places.map(p=>new gl.Marker({element:markerElement(p,s.names,s.onSelect),anchor:'left'}).setLngLat(p.coordinates).addTo(m));
  m.setLayoutProperty('modern-boundaries','visibility',s.boundaries?'visible':'none');m.setLayoutProperty('streets','visibility',s.streets?'visible':'none');
 },invalidateSize:()=>{m.resize()},remove:()=>{observer.disconnect();markers.forEach(p=>p.remove());m.remove()}};
}
async function createLeaflet(container:HTMLDivElement):Promise<AtlasMapHandle>{
 const imported=await import('leaflet');const L=imported.default??imported;
 const balkanIsos=new Set(['MKD','ALB','KOS','TUR','GRC','SRB','HRV','SVN','BGR','MNE','BIH','ROU']);
 const m=L.map(container,{
  zoomControl:false,
  attributionControl:false,
  minZoom:5.5,
  maxZoom:17,
  maxBounds:[[35.0,12.8],[47.5,30.8]],
  maxBoundsViscosity:1.0,
  preferCanvas:false,
  zoomSnap:0.25
 }).fitBounds([[36.2,13.8],[46.8,29.8]],{padding:[25,25]});
 container.dataset.mapEngine='leaflet';
 if(window.matchMedia('(max-width:760px)').matches)m.fitBounds([[39.5,18.5],[44.5,25.5]],{paddingTopLeft:[20,70],paddingBottomRight:[20,60]});
 L.control.scale({imperial:false,position:'bottomleft'}).addTo(m);
 const boundaries=L.geoJSON(undefined,{
  style:f=>{
   const isBalkan=f?.properties?.iso&&balkanIsos.has(f.properties.iso);
   return {
    fill:false,
    color:isBalkan?'#3d261c':'#9ba39d',
    weight:isBalkan?2.2:1,
    opacity:isBalkan?0.95:0.45,
    dashArray:isBalkan?'5 4':'3 4'
   };
  },
  interactive:false
 }).addTo(m);
 const streets=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{opacity:.85,maxZoom:19}).addTo(m);
 const markers=L.layerGroup().addTo(m);let removed=false;let settings:MapSettings|undefined;
 const renderMarkers=()=>{
  markers.clearLayers();if(!settings)return;const current=settings;
  const groups:{places:Place[];x:number;y:number}[]=[];
  for(const p of current.places){
   const point=m.latLngToContainerPoint([p.coordinates[1],p.coordinates[0]]);
   const group=groups.find(g=>Math.hypot(g.x-point.x,g.y-point.y)<36);
   if(group){const n=group.places.length;group.x=(group.x*n+point.x)/(n+1);group.y=(group.y*n+point.y)/(n+1);group.places.push(p)}
   else groups.push({places:[p],x:point.x,y:point.y});
  }
  for(const group of groups){
   const center=m.containerPointToLatLng([group.x,group.y]);let el:HTMLButtonElement;
   if(group.places.length===1)el=markerElement(group.places[0],current.names,current.onSelect);
   else{
    const hasOttoman=group.places.some(p=>p.layer==='settlement'&&isOttomanFoundation(p));
    const hasSettlement=group.places.some(p=>p.layer==='settlement');
    const clusterClass=hasOttoman?'cluster-green':hasSettlement?'cluster-red':'';
    el=document.createElement('button');el.className=`atlas-cluster ${clusterClass}`;el.textContent=String(group.places.length);el.setAttribute('aria-label',`${group.places.length} yakın kaydı keşfet`);
    const town=group.places.find(p=>p.layer==='settlement');
    if(town&&m.getZoom()>=7){const label=document.createElement('span');const isTownOttoman=isOttomanFoundation(town);label.className=`cluster-label ${isTownOttoman?'label-green':'label-red'}`;label.textContent=current.names?town.name:town.modern;el.appendChild(label)}
    el.onclick=event=>{event.stopPropagation();const bounds=L.latLngBounds(group.places.map(p=>[p.coordinates[1],p.coordinates[0]] as [number,number]));
     if(m.getZoom()>=12||bounds.getNorthEast().distanceTo(bounds.getSouthWest())<80)current.onCluster?.(group.places);
     else m.fitBounds(bounds,{paddingTopLeft:[60,120],paddingBottomRight:[60,100],maxZoom:12});
    };
   }
   const clustered=group.places.length>1;
   const icon=L.divIcon({html:el,className:'atlas-leaflet-marker',iconSize:clustered?[36,36]:[24,24],iconAnchor:clustered?[18,18]:[10,12]});
   L.marker(center,{icon,keyboard:false}).addTo(markers);
  }
 };
 m.on('zoomend',renderMarkers);
 const markZoom=()=>{container.classList.toggle('close-view',m.getZoom()>=11);container.classList.toggle('wide-view',m.getZoom()<7)};m.on('zoomend',markZoom);markZoom();
 const controller=new AbortController();
 const ready=fetch('/data/countries.geojson',{signal:controller.signal})
  .then(res=>{if(!res.ok)throw new Error(`countries: ${res.status}`);return res.json()})
  .then(data=>{if(!removed)boundaries.addData(data as Parameters<typeof boundaries.addData>[0]);m.invalidateSize()});
 const observer=new ResizeObserver(()=>m.invalidateSize());observer.observe(container);
 return {engine:'leaflet',ready,flyTo:o=>{m.flyTo([o.center[1],o.center[0]],o.zoom,{duration:(o.duration??700)/1000})},fitBounds:(b,o)=>{m.fitBounds([[b[0][1],b[0][0]],[b[1][1],b[1][0]]],{padding:[o?.padding??30,o?.padding??30]})},zoomIn:()=>{m.zoomIn()},zoomOut:()=>{m.zoomOut()},update:s=>{
  settings=s;renderMarkers();
  if(s.boundaries&&!m.hasLayer(boundaries))boundaries.addTo(m);else if(!s.boundaries&&m.hasLayer(boundaries))m.removeLayer(boundaries);
  if(s.streets&&!m.hasLayer(streets))streets.addTo(m);else if(!s.streets&&m.hasLayer(streets))m.removeLayer(streets);
 },invalidateSize:()=>{m.invalidateSize()},remove:()=>{removed=true;controller.abort();observer.disconnect();m.remove()}};
}
export async function createAtlasMap(container:HTMLDivElement):Promise<AtlasMapHandle>{
 // Use the worker-free renderer for the initial view on every device.
 // A supported WebGL context alone cannot guarantee worker/style startup.
 return createLeaflet(container);
}

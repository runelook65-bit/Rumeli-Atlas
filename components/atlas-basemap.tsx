import paths from '@/lib/basemap-paths.json';
import type {Place} from '@/lib/atlas-data';
function project([lon,lat]:[number,number]){return [Number(((lon-14)*50).toFixed(3)),Number(((Math.log(Math.tan(Math.PI/4+49*Math.PI/360))-Math.log(Math.tan(Math.PI/4+lat*Math.PI/360)))*2864.78898).toFixed(3))]}
const labels:[string,number,number][]=[['BOSNA-HERSEK',17.8,44.2],['SIRBİSTAN',20.7,44.3],['BULGARİSTAN',25.4,42.8],['ROMANYA',25,45.9],['YUNANİSTAN',23.3,38.8],['ARNAVUTLUK',19.7,40.8],['KARADAĞ',18.8,42.7],['KUZEY MAKEDONYA',21.7,41.4],['TÜRKİYE',28.6,40.5],['Adriyatik Denizi',16.5,41.3],['Ege Denizi',25.5,38.7],['Karadeniz',28.6,43.6]];
export function AtlasBasemap({places,names,boundaries,onSelect}:{places:Place[];names:boolean;boundaries:boolean;onSelect:(p:Place)=>void}){
 return <svg className="atlas-basemap" viewBox="0 0 850 1050" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Balkanların coğrafi haritası ve tarihsel pilot yerleşimler">
 <rect width="850" height="1050" fill="#cddce0"/>
 {paths.map((p,i)=><path key={i} d={p.path} fill={p.kind==='countries'?'#edece4':p.kind==='lakes'?'#cddce0':'none'} fillRule="evenodd" stroke={p.kind==='countries'?(boundaries?'#87958d':'#edece4'):'#adc9cf'} strokeWidth={p.kind==='countries'?1.2:1}/>)}
 {labels.map(([name,lon,lat])=>{const [x,y]=project([lon,lat]);return <text key={name} x={x} y={y} className="basemap-label" textAnchor="middle">{name}</text>})}
 {places.map(p=>{const [x,y]=project(p.coordinates);return <g key={p.id} role="button" tabIndex={0} aria-label={`${p.name} ayrıntıları`} onClick={()=>onSelect(p)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' ')onSelect(p)}} className="basemap-place"><circle cx={x} cy={y} r={p.layer==='settlement'?7:4} fill={p.lost?'#846e79':'#91473a'} stroke="#fffdf6" strokeWidth="2"/>{p.layer==='settlement'&&<text x={x+11} y={y-8}>{names?p.name:p.modern}</text>}</g>})}
 </svg>
}

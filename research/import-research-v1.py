"""Import CSV/GeoJSON claims without executing the package's supplied code."""
import csv,json,re,pathlib
root=pathlib.Path(__file__).resolve().parents[1]
data=root/'public/data/research-v1'
def rows(name):
 return [{k:(None if v in ('NULL','') else v) for k,v in r.items()} for r in csv.DictReader((data/(name+'.csv')).open())]
tables={n:rows(n) for n in ['sources','places','place_names','heritage','demographics','administrative_units','migrations','historical_maps','gis_sources']}
sids={s['source_id'] for s in tables['sources']};pids={p['place_id'] for p in tables['places']}
for name,rs in tables.items():
 for r in rs:
  assert not r.get('source_id') or r['source_id'] in sids,(name,r)
  if name in ['heritage','demographics','place_names']:assert r['place_id'] in pids
ids={'SKP-001':'skopje','TET-001':'tetovo','PRI-001':'prizren'}
hids={'SK-02':'ishak','TE-01':'alaca-tetovo','TE-02':'harabati','PR-01':'sinan'}
def pid(x):return ids.get(x,'research-'+x)
def year(t):
 if not t:return None
 m=re.match(r'^(\d{4})(?:\D|$)',str(t));return int(m[1]) if m else None
def source(s):return 'research-'+s
obs={}
def add(id,o):obs.setdefault(id,[]).append(o)
for r in tables['demographics']:
 dim='ethnicity' if r['category_type']=='ethnicity' else 'language' if r['category_type']=='language' else 'community' if r['category_type']!='religion' else 'religion'
 units={'persons':'kişi (kaynak kapsamı)','households':'hâne','families':'aile','registered persons':'kayıtlı kişi','percentage':'%'}
 measures=[(r['percentage'] if r['measurement_type']=='percentage' else r['population'],units.get(r['measurement_type'],'kişi (kaynak kapsamı)'))]
 if r['measurement_type']=='persons_households':measures=[(r['population'],'kişi (kaynak kapsamı)'),(r['households'],'hâne')]
 for value,unit in measures:
  if value is None:continue
  add(pid(r['place_id']),dict(year=int(r['year']),dimension=dim,text=r['category_name_original'],source=source(r['source_id']),values=[dict(label=r['category_name_original'],value=float(value))],unit=unit,scope=r['notes'],note=f"{r['demographic_id']} · {r['category_type']} · Paketin güveni: {r['confidence']}. Özgün ölçü: {r['measurement_type']}. Birincil belge bağımsız kontrol edilmedi.",recordId=r['demographic_id'],disputed=r['confidence']=='DISPUTED' or 'conflict' in (r['notes'] or '').lower()))
for r in tables['migrations']:
 target=r['destination_place_id'] or r['origin_place_id'];y=year(r['start_year']);e=year(r['end_year'])
 if target and y:add(pid(target),dict(year=y,end=e,dimension='migration',text=f"{r['community']} · {r['migration_type']} · {r['cause']}",source=source(r['source_id']),note=f"{r['migration_id']} · Kaynakta aktarılan değer: {r['estimated_population'] or 'belirtilmedi'}. {r['notes']} Rota geometrisi yok; şehir nüfusu ya da tamamlanmış göç toplamı değildir.",recordId=r['migration_id']))
admin_matches={'ADM-001':'SKP-001','ADM-002':'SKP-001','ADM-004':'TET-001','ADM-005':'TET-001','ADM-006':'TET-001','ADM-007':'PRI-001','ADM-008':'PRI-001','ADM-009':'SKP-001','ADM-010':'SKP-001','ADM-011':'KAC-001','ADM-012':'PRI-003','ADM-013':'TET-001','ADM-014':'PRI-001'}
for r in tables['administrative_units']:
 if r['admin_id'] in admin_matches:add(pid(admin_matches[r['admin_id']]),dict(year=int(r['valid_from']),end=int(r['valid_to']),dimension='administration',text=f"{r['name']} · {r['type']} · {r['parent_admin_id'] or 'üst birim belirtilmedi'}",source=source(r['source_id']),note=f"{r['admin_id']} · {r['notes']} Merkez noktası; sınır geometrisi yok.",recordId=r['admin_id']))
places=[];names={}
for r in tables['place_names']:names.setdefault(pid(r['place_id']),[]).append(r['name'])
for r in tables['places']:
 if r['latitude'] is None or r['longitude'] is None:continue
 start=year(r['first_known_date']) or min([o['year'] for o in obs.get(pid(r['place_id']),[])]+[2026])
 if r['place_type']=='archaeological_site':start=2026
 places.append(dict(id=pid(r['place_id']),name={'TET-001':'Kalkandelen','PRI-001':'Prizren'}.get(r['place_id'],r['historical_primary_name'] or r['modern_name']),modern=r['modern_name'],aliases=names.get(pid(r['place_id']),[]),coordinates=[float(r['longitude']),float(r['latitude'])],layer='settlement',start=start,datePrecision=f"Paketin ilk tarih kaydı: {r['first_known_date'] or 'bilinmiyor'}. {start} ilk sayısal kanıt/güncel varlık kaydı; kuruluş yılı değildir.",confidence='medium',locationAccuracy=r['coordinate_precision']+' · paket konumu, bağımsız ölçüm yapılmadı',source=source(r['source_id']),summary=r['notes'],current=r['current_status'],currentAsOf='Araştırma paketi v1 · 01.10.2026; bağımsız saha kontrolü yapılmadı',events=[],observations=obs.get(pid(r['place_id']),[]),importedRecords=[r],additionalSources=[source(r['source_id'])]))
status={'extant':'Mevcut','partially_extant':'Kısmen mevcut','converted':'Kullanımı değişmiş','reconstructed':'Yeniden inşa edilmiş','ruined':'Harabe','destroyed':'Yıkılmış'}
for r in tables['heritage']:
 y=year(r['construction_date']);centuries=re.findall(r'(\d{1,2})(?:st|nd|rd|th) c\.',r['construction_date'] or '');upper=max(map(int,centuries))*100 if centuries else None;display_year=y or upper or 2026;id=hids.get(r['heritage_id'],'research-'+r['heritage_id']);lost=r['status']=='destroyed';partial=r['status'] in ['partially_extant','ruined','reconstructed'] or 'porch demolition' in (r['destruction_date'] or '')
 places.append(dict(id=id,name=r['name'],modern=r['name'],aliases=[r['heritage_id']],coordinates=[float(r['longitude']),float(r['latitude'])],layer='heritage',start=display_year,end=2026 if lost else None,datePrecision=f"Yapı tarihi: {r['construction_date'] or 'bilinmiyor'}. {'Yıl/çok evreli tarih kaynakta belirtildiği biçimde korunur.' if y else f'Yüzyıl aralığının üst sınırından ({upper}) itibaren gösterilir; bu kesin inşa yılı değildir.' if upper else 'Tarih sayısallaştırılmadı; yalnız 2026 kaynak kaydı görünür.'}",confidence='medium',locationAccuracy=r['coordinate_precision']+' · paket konumu, bağımsız ölçüm yapılmadı',source=source(r['source_id']),summary=f"{r['type']} · {r['founder'] or 'kurucu belirtilmedi'}",lost=lost,partialLoss=partial,current=f"{status[r['status']]} · {r['current_use']}",currentAsOf='Araştırma paketi v1 · 01.10.2026; kaynak dönemi ve saha durumu ayrıca doğrulanmalı',events=([dict(year=y,text='Paketin yapı tarihi: '+r['construction_date'],source=source(r['source_id']))] if y else [])+([dict(year=year(r['destruction_date']),text='Hasar / bileşen dönüşümü kaydı: '+r['destruction_date']+'; bütün yapının yokluğu anlamına gelmez.',source=source(r['source_id']))] if year(r['destruction_date']) else []),observations=[],importedRecords=[r],additionalSources=[source(r['source_id'])],alternatives=[f"Hasar/yıkım alanı: {r['destruction_date']}. Bu alan bütün yapının yok olduğu anlamına gelmez."] if r['destruction_date'] else []))
sources=[dict(id=source(r['source_id']),title=r['title'],author=r['author'],date=r['publication_year'] or 'Tarihsiz',url=r['url'] or '',locator=' · '.join(filter(None,[r['pages'],r['archive_reference'],r['notes']])),kind=r['source_type'],imported=True) for r in tables['sources']]
regions=json.loads((data/'cultural_regions.geojson').read_text())['features']
out=dict(sources=sources,places=places,observations=obs,names=names,tables=tables,regions=regions,stats={n:len(v) for n,v in tables.items()},unmapped=[r for r in tables['places'] if r['latitude'] is None or r['longitude'] is None])
(root/'lib/research-v1.json').write_text(json.dumps(out,ensure_ascii=False,separators=(',',':')))
print('Validated package:',out['stats'],'mappable normalized entities',len(places),'unmapped',len(out['unmapped']))

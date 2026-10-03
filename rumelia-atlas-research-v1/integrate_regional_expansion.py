from pathlib import Path
import csv,re,shutil,zipfile,json
ROOT=Path('/home/ubuntu/rumelia-atlas-research-v1'); DATA=ROOT/'data'; REPORTS=ROOT/'reports'; WF=ROOT/'workflow'
mods=[
('REG-01','Eastern Thrace / European Turkey','regional_01_eastern_thrace.md','Medium for discovery and controlled staging; low-to-medium for historical demographic publication; low for a finished Ottoman GIS layer.','Edirne, Tekirdağ, Kırklareli, Çorlu, Lüleburgaz, Enez','Salname manifest and current basemap can stage; BOA folio extraction and historical boundaries pending.'),
('REG-02','Bulgaria / Deliorman-Ludogorie','regional_02_bulgaria_deliorman.md','Research-ready for Atlas scoping and source acquisition; not production-ready settlement joins.','Razgrad, Shumen, Silistra, Ruse, Dobrich','NSI, NRNM/EKATTE, OEAW gazetteer and map/GIS leads verified; Ottoman folios pending.'),
('REG-03','Bulgarian Rhodopes','regional_03_bulgarian_rhodopes.md','High for modern statistical/base GIS; medium-high historical toponymy/heritage; not production-ready ethnic village maps.','Smolyan, Kardzhali, Haskovo','2021 NSI, Ottoman archive/gazetteer and heritage/map leads; Pomak/Yörük village rows require primary extraction.'),
('REG-04','Dobruja / Dobrogea / Dobrudzha','regional_04_dobruja.md','Production-ready as cited research memo and editorial starting point; village polygons pending.','Constanța, Tulcea, Medgidia, Babadag, Mangalia, Silistra','Tatar/Nogai/Turkish/Gagauz categories, 1878 demographic anchors, MIRAS and maps catalogued.'),
('REG-05','Western Thrace','regional_05_western_thrace.md','Medium-high administrative/heritage; medium historical demography/migration; medium-low current ethnolinguistic mapping.','Komotini/Gümülcine, Xanthi/İskeçe, Alexandroupoli/Dedeağaç, Genisea','ELSTAT, Lausanne, Ottoman Western Thrace publication, heritage and map sources verified.'),
('REG-06','Greek Macedonia','regional_06_greek_macedonia.md','Memo/source ready; city-by-category populations not production-ready without item-level extraction.','Thessaloniki/Selanik, Kavala, Drama, Serres/Serez, Florina, Edessa/Vodina, Veria/Karaferye','Ottoman, Greek, Jewish, exchange and heritage/map sources catalogued.'),
('REG-07','North Macedonia beyond pilot','regional_07_north_macedonia.md','Amber/conditionally ready; modern census/heritage/maps ready first; Ottoman extraction prioritized for Bitola, Prilep, Kičevo.','Bitola/Manastır, Ohrid, Prilep, Štip/İştip, Veles/Köprülü, Kičevo/Kırçova, Gostivar, Strumica','State Archives, 2021 census, UNESCO and Manastır map/GIS leads verified.'),
('REG-08','Kosovo beyond Prizren','regional_08_kosovo.md','Ready for parent integration as research memo; settlement rows and Ottoman extraction pending.','Peja/İpek, Gjakova/Yakova, Mitrovica, Gjilan/Gilan, Ferizaj, Vushtrri, Prishtina','ASK, DTK, Kosova Vilayeti, tahrir/salname and multilingual toponymy sources catalogued.'),
('REG-09','Albania','regional_09_albania.md','Editorial/source ready; GIS ingestion requires folio verification and georeferencing.','Shkodër, Tirana, Elbasan, Berat, Korçë, Gjirokastër, Durrës, Vlora','AQSH/BOA, Sami Frashëri, INSTAT, heritage and GIS sources catalogued.'),
('REG-10','Serbia / Sandžak','regional_10_serbia_sandzak.md','Ready for workflow use as research memo; monument/maps and folio extraction pending.','Novi Pazar/Yeni Pazar, Sjenica, Tutin, Niš, Leskovac, Vranje, Belgrade','Defter/evkaf, Serbian census, muhacir, heritage and map sources catalogued.'),
('REG-11','Bosnia and Herzegovina','regional_11_bosnia_herzegovina.md','Ready for research integration; city/rural GIS extraction and harmonization pending.','Sarajevo, Mostar, Travnik, Banja Luka, Tuzla, Bihać','Tahrir, sidžil, salname, vakıf, 2013 census, UNESCO and GIS sources catalogued.'),
('REG-12','Montenegro','regional_12_montenegro.md','Ready for parent integration as cited regional memo; municipality-level, not city-proper quantitative layer.','Podgorica, Pljevlja, Bijelo Polje, Rožaje, Bar, Ulcinj','MONSTAT, sidžil, Ottoman border/heritage and map sources catalogued.'),
('REG-13','Romania / Dobruja','regional_13_romania_dobruja.md','Medium-high narrative/admin/heritage/migration; low-medium fine-grained ethnic/language polygons.','Constanța, Tulcea, Babadag, Medgidia, Isaccea','Romanian census, Tuna salnames, MIRAS, BCU map and GIS sources catalogued.')]
# copy memos to numbered reports
for i,(rid,region,fn,ready,places,note) in enumerate(mods,9):
    shutil.copy(WF/fn,REPORTS/f'{i:02d}_{rid[4:]}_REGIONAL_MODULE.md')
# status table
with open(DATA/'regional_research_status.csv','w',newline='',encoding='utf-8') as f:
    fields=['region_id','region','memo_file','production_readiness','candidate_places','current_safe_scope','priority_next_step']
    w=csv.DictWriter(f,fieldnames=fields); w.writeheader()
    for rid,region,fn,ready,places,note in mods:
        w.writerow({'region_id':rid,'region':region,'memo_file':'reports/'+f'{mods.index((rid,region,fn,ready,places,note))+9:02d}_{rid[4:]}_REGIONAL_MODULE.md','production_readiness':ready,'candidate_places':places,'current_safe_scope':note,'priority_next_step':'Acquire and transcribe primary registers; attach dated place-name and geometry evidence before publication.'})
# source discovery catalog: extract all URLs from each memo, de-duplicate per URL
rows=[]; seen={}; n=1
for rid,region,fn,*_ in mods:
    text=(WF/fn).read_text(encoding='utf-8')
    urls=[]
    for u in re.findall(r'https?://[^\s)\]>"]+',text):
        u=u.rstrip('.,;')
        if u not in urls: urls.append(u)
    for u in urls:
        key=(rid,u)
        if key in seen: continue
        sid=f'RSC-{n:04d}'; n+=1; seen[key]=sid
        rows.append({'regional_source_id':sid,'region_id':rid,'region':region,'url':u,'source_type':'regional discovery / verified memo source','language':'NULL','license_status':'unknown unless memo states otherwise','production_status':'discovery_or_staging','notes':'Extracted from the cited regional memo; follow the memo for source interpretation, pages and caveats.'})
with open(DATA/'regional_sources.csv','w',newline='',encoding='utf-8') as f:
    fields=['regional_source_id','region_id','region','url','source_type','language','license_status','production_status','notes']; w=csv.DictWriter(f,fieldnames=fields);w.writeheader();w.writerows(rows)
# Candidate places: explicit controlled discovery list, not asserted as complete settlement dataset.
candidates=[]
for rid,region,fn,ready,places,note in mods:
    for p in [x.strip() for x in places.split(',')]:
        candidates.append({'regional_place_id':f'{rid}-{len([x for x in candidates if x["region_id"]==rid])+1:03d}','region_id':rid,'region':region,'name_source_verbatim':p,'modern_name':'NULL','historical_name':'NULL','country_current':'NULL','latitude':'NULL','longitude':'NULL','coordinate_precision':'unknown','place_type':'candidate urban/regional anchor','source_id':'NULL','confidence':'LOW','status':'discovery_only','notes':'Candidate from regional module scope; not a production place row until source-linked name/coordinate/date resolution.'})
with open(DATA/'regional_place_candidates.csv','w',newline='',encoding='utf-8') as f:
    fields=list(candidates[0].keys());w=csv.DictWriter(f,fieldnames=fields);w.writeheader();w.writerows(candidates)
# report
(REPORTS/'09_REGIONAL_EXPANSION_STATUS.md').write_text('''# Regional expansion status — Rumelia Atlas v1\n\nThe pilot corridor remains the only deeply normalized place/demographic/heritage dataset. The remaining Balkan regions are now added as **source-backed regional research modules**, not as fabricated complete census layers. Each module has a detailed memo, source URLs, candidate anchors, readiness judgment and an explicit next acquisition step.\n\n## Coverage\n\nThe expansion covers Eastern Thrace, Bulgaria/Deliorman, Bulgarian Rhodopes, Dobruja, Western Thrace, Greek Macedonia, North Macedonia beyond the pilot, Kosovo beyond Prizren, Albania, Serbia/Sandžak, Bosnia and Herzegovina, Montenegro and Romania/Dobruja.\n\nSee `data/regional_research_status.csv` for machine-readable status, `data/regional_sources.csv` for extracted source discovery links, and `data/regional_place_candidates.csv` for non-production candidate anchors.\n\n## Interpretation rule\n\nA candidate place is not a verified place entity until it has a persistent place_id, source-backed name equivalence, date scope, coordinate precision, and source_id. Regional memos may report census or migration figures at provincial or national scales, but those figures must not be copied into the pilot demographic table without denominator, unit and category verification.\n\n## Common next step\n\nFor each module: acquire primary register/catalog records; transcribe page/folio references; resolve multilingual names; obtain dated administrative geometry; add heritage object IDs and rights metadata; then run the same duplicate, chronology, identity and coordinate audit used for the pilot.\n''',encoding='utf-8')
# update README and handoff appendices
readme=ROOT/'README.md'; s=readme.read_text(encoding='utf-8'); s=s.replace('- `workflow/` — detailed evidence memos retained from the research pass.','- `workflow/` — detailed evidence memos retained from the research pass.\n- `data/regional_research_status.csv` — machine-readable status for 13 additional Balkan modules.\n- `data/regional_sources.csv` — source-discovery URLs extracted from the regional memos.\n- `data/regional_place_candidates.csv` — candidate anchors explicitly marked discovery-only, not production places.\n- `reports/09_REGIONAL_EXPANSION_STATUS.md` and `reports/09_–21_...` — regional expansion report and module memos.')
readme.write_text(s,encoding='utf-8')
h=REPORTS/'08_WORK_HANDOFF.md'; hs=h.read_text(encoding='utf-8'); hs+='''\n\n## Regional expansion files\n\nThe 13 regional modules are intentionally separated from the pilot normalized tables. Import `data/regional_research_status.csv` as a project-status table, `data/regional_sources.csv` as a discovery/source registry, and `data/regional_place_candidates.csv` only as a staging queue. Do not promote candidate rows into `places.csv` without a source-backed place-name equivalence, coordinate precision and date scope. The detailed regional memos in `reports/` are the authoritative research handoff for the next extraction phase.\n'''; h.write_text(hs,encoding='utf-8')
# rebuild zip
zip_path=ROOT.parent/'rumelia-atlas-research-v1.zip'
if zip_path.exists(): zip_path.unlink()
with zipfile.ZipFile(zip_path,'w',zipfile.ZIP_DEFLATED) as z:
    for p in ROOT.rglob('*'):
        if p.is_file() and p != zip_path and '__pycache__' not in p.parts: z.write(p,p.relative_to(ROOT.parent))
print('regional_modules',len(mods),'regional_sources',len(rows),'candidate_places',len(candidates),'zip',zip_path)

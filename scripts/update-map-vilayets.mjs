import fs from 'node:fs';

let content = fs.readFileSync('lib/atlas-map.ts', 'utf8');

const target = `  const vilayetsLayer=L.geoJSON(undefined,{
   style:f=>({
    fillColor:f?.properties?.color??'#8B2616',
    fillOpacity:0.10,
    color:f?.properties?.color??'#8B2616',
    weight:2,
    dashArray:'6 4',
    opacity:0.85
   }),
   onEachFeature:(feature,layer)=>{
    const p=feature?.properties;
    if(p){
      layer.bindTooltip(\`<b>\${p.name}</b> (\${p.donem})<br/><span style="font-size:11px;color:#555">Merkez: \${p.merkez}</span>\`,{sticky:true,direction:'top'});
    }
   }
  });`;

const replacement = `  const vilayetsLayer=L.geoJSON(undefined,{
   style:f=>({
    fillColor:f?.properties?.color??'#8B2616',
    fillOpacity:0.12,
    color:f?.properties?.color??'#8B2616',
    weight:2.2,
    dashArray:'5 3',
    opacity:0.92
   }),
   onEachFeature:(feature,layer)=>{
    const p=feature?.properties;
    if(p){
      const sancakList=p.sancaklar ? ('<div style="margin-top:4px;font-size:10px;color:#5C6963"><b>Sancaklar:</b> ' + p.sancaklar.join(', ') + '</div>') : '';
      layer.bindTooltip(
        '<div style="font-family:Georgia,serif;padding:3px;max-width:240px">' +
          '<div style="font-size:13px;font-weight:bold;color:#8B2C21">' + p.name + '</div>' +
          '<div style="font-size:10px;font-weight:600;color:#7A5B22;margin-bottom:2px">' + p.donem + ' · Merkez: ' + p.merkez + '</div>' +
          sancakList +
          '<div style="margin-top:4px;font-size:9.5px;line-height:1.35;color:#4A5750;font-style:italic;border-top:1px solid #E2DDCF;padding-top:3px">' + p.aciklama + '</div>' +
        '</div>',
        {sticky:true,direction:'top'}
      );
      (layer as L.Path).on('mouseover',()=>{
        (layer as L.Path).setStyle({weight:3.2,fillOpacity:0.22,dashArray:''});
      });
      (layer as L.Path).on('mouseout',()=>{
        vilayetsLayer.resetStyle(layer as L.Path);
      });
    }
   }
  });`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  fs.writeFileSync('lib/atlas-map.ts', content, 'utf8');
  console.log('Successfully updated vilayetsLayer in lib/atlas-map.ts');
} else {
  console.log('Target string not found in lib/atlas-map.ts');
}

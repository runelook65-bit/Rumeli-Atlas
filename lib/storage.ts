import {createClient} from '@supabase/supabase-js';
import {Protocol} from 'pmtiles';
// Optional adapters; the pilot intentionally runs without an account or secret.
export function atlasDatabase(url?:string,publishableKey?:string){
 if(!url||!publishableKey)return null;
 return createClient(url,publishableKey,{auth:{persistSession:false}});
}
export function pmtilesProtocol(){return new Protocol();}
// A reviewed archive must provide documented source-layer names before style attachment.
export function historicalTileSource(httpsArchive:string){
 const url=new URL(httpsArchive);if(url.protocol!=='https:')throw new Error('PMTiles requires HTTPS');
 return {type:'vector' as const,url:`pmtiles://${url.href}`,attribution:'Rumelia Atlas · see per-feature evidence'};
}

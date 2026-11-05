import {createArticleByteStore} from './byte-store.mjs';
// The three reviewed compact files total 116,307,764 bytes. Retain encoded bytes,
// not three decoded scenes or GPU contexts. Downloads remain sequential.
export const ARTICLE_PRELOAD_CACHE_LIMIT=128*1024*1024;
export function createArticlePreloadStore(options={}){
 const maxBytes=options.maxBytes??ARTICLE_PRELOAD_CACHE_LIMIT;
 const store=createArticleByteStore({...options,maxBytes,canRetain:asset=>asset.deliveryTier==='mobile',prefetchUnretained:false});
 let assets=[],done=new Set(),failed=new Set(),paused=true,epoch=0,running=false,readers=0,waiters=[];
 const key=a=>a.id+':'+a.sourceSHA256;
 const wake=()=>{for(const resolve of waiters.splice(0))resolve();};
 async function pump(){
  if(running||paused||!assets.length)return;
  running=true;const token=epoch;
  try{
   while(!paused&&token===epoch){
    if(readers){await new Promise(resolve=>waiters.push(resolve));continue;}
    const asset=assets.find(a=>!done.has(key(a))&&!failed.has(key(a)));if(!asset)break;
    try{await store.prefetch(asset);if(!paused&&token===epoch)done.add(key(asset));}
    catch(error){if(error?.name!=='AbortError')failed.add(key(asset));}
   }
  }finally{running=false;if(!paused&&token!==epoch)queueMicrotask(pump);}
 }
 return {
  warmAll(next){
   const unique=new Map();let total=0;
   for(const asset of next){if(unique.has(key(asset)))continue;
    if(asset.deliveryTier!=='mobile'||!Number.isSafeInteger(asset.bytes)||asset.bytes<=0||asset.bytes>maxBytes)throw Error('Only reviewed compact model deliveries can be preloaded.');
    unique.set(key(asset),asset);total+=asset.bytes;
   }
   if(total>maxBytes)throw Error('The preload set exceeds the retained-byte budget.');
   assets=[...unique.values()];pump();
  },
  async read(asset,options){
   readers++;
   try{const bytes=await store.read(asset,options);done.add(key(asset));failed.delete(key(asset));return bytes;}
   finally{readers--;wake();pump();}
  },
  prefetch:asset=>store.prefetch(asset),
  pause(){paused=true;epoch++;store.pause();wake();},
  resume(){paused=false;store.resume();pump();},
  clear(){paused=true;epoch++;assets=[];done.clear();failed.clear();store.clear();wake();},
  evict(asset){done.delete(key(asset));failed.delete(key(asset));store.evict(asset);},
  snapshot(){return {...store.snapshot(),preloadCount:assets.length,preloadedCount:done.size,failedPreloads:failed.size};}
 };
}

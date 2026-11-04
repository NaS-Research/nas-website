import {deliveryBlock} from '../anatomy-studio/registry.mjs';
// Article-owned JS cache only; browser HTTP-cache retention is browser-managed.
export const ARTICLE_BYTE_CACHE_LIMIT = 16 * 1024 * 1024;
const cancelled = () => new DOMException('The model request was cancelled.', 'AbortError');
export function createArticleByteStore({fetcher=fetch, maxBytes=ARTICLE_BYTE_CACHE_LIMIT, stallMS=30000, origin=()=>window.location.origin,canRetain=()=>true,prefetchUnretained=true}={}) {
 if(!Number.isSafeInteger(maxBytes)||maxBytes<=0)throw Error('Invalid article byte-cache budget.');
 const cache=new Map(), warmed=new Set(), listeners=new Map();
 let active=null, retained=0, clock=0, paused=true, desired=null, epoch=0;
 const keyFor=a=>a.id+':'+a.sourceSHA256;
 function emit(key,value) { for(const fn of listeners.get(key)||[]) fn(value); }
 function evictKey(key) { const item=cache.get(key); if(item){retained-=item.bytes.byteLength;cache.delete(key);} warmed.delete(key); }
 function makeRoom(size) {
  for(const [key,item] of [...cache].sort((a,b)=>a[1].used-b[1].used)) { if(retained+size<=maxBytes)break; evictKey(key); }
  if(retained+size>maxBytes)throw Error('The model exceeds the article byte-cache budget.');
 }
 function admit(asset) {
  const blocked=deliveryBlock(asset); if(blocked)throw Error(blocked);
  const size=asset.bytes, base=origin(), host=new URL(base).hostname;
  if(asset.deliveryScope==='loopback-admin-only'&&!['127.0.0.1','localhost','[::1]'].includes(host))throw Error('These assets are admitted for local private review only.');
  if(asset.deliveryScope==='nas-public-website'&&!['nasresearch.bio','www.nasresearch.bio','127.0.0.1','localhost','[::1]'].includes(host))throw Error('This release is configured for the NaS website.');
  if(!Number.isSafeInteger(size)||size<=0||size>asset.byteBudget)throw Error('The model exceeds its admitted byte budget.');
  const url=new URL(asset.deliveryURL,base);if(url.origin!==base)throw Error('Model must use the admitted same-origin mount.');
  url.searchParams.set('v',asset.sourceSHA256);return {size,url};
 }
 function select(key) { if(desired!==key){desired=key;epoch++;active?.controller.abort();} return epoch; }
 function start(asset,mode,ticket) {
  if(paused||ticket!==epoch||desired!==keyFor(asset))return Promise.reject(cancelled());
  const key=keyFor(asset), cached=cache.get(key);
  if(cached){cached.used=++clock;emit(key,{received:cached.bytes.byteLength,total:cached.bytes.byteLength});return Promise.resolve(cached.bytes);}
  let info;try{info=admit(asset);}catch(error){return Promise.reject(error);}
  if(mode==='prefetch'&&warmed.has(key))return Promise.resolve();
  if(active) {
   const pending=active;
   if(!pending.controller.signal.aborted && pending.key===key && (pending.buffered||mode==='prefetch'))return pending.promise;
   return pending.promise.catch(()=>{}).then(()=>start(asset,mode,ticket));
  }
  // Oversize originals only warm the HTTP cache: discard stream chunks, retain no JS copy.
  // On-demand reads allocate one exact buffer for validation/parse, never a chunk list or cache copy.
  const retainable=info.size<=maxBytes&&canRetain(asset);
  const buffered=mode==='read'||retainable;
  if(buffered)makeRoom(info.size<=maxBytes?info.size:maxBytes);
  const entry={key,controller:new AbortController(),received:0,total:info.size,buffered,bufferBytes:buffered?info.size:0,promise:null};active=entry;
  entry.promise=Promise.resolve().then(async()=>{
   let timer,stalled=false,reader;
   const arm=()=>{clearTimeout(timer);timer=setTimeout(()=>{stalled=true;entry.controller.abort();},stallMS);};
   const abortRead=()=>{reader?.cancel().catch(()=>{});};entry.controller.signal.addEventListener('abort',abortRead);
   try {
    if(entry.controller.signal.aborted)throw cancelled();arm();
    const response=await fetcher(info.url.href,{signal:entry.controller.signal,credentials:'same-origin',cache:'force-cache'});
    if(!response.ok)throw Error('Model request failed ('+response.status+').');
    reader=response.body?.getReader();if(!reader)throw Error('Model response did not provide a bounded byte stream.');
    if(Number(response.headers?.get('content-length'))>info.size)throw Error('Model exceeds its admitted byte budget.');
    const bytes=buffered?new Uint8Array(info.size):null;emit(key,{received:0,total:info.size});let last=0;
    while(true) {
     const {done,value}=await reader.read();if(entry.controller.signal.aborted)throw cancelled();if(done)break;
     if(entry.received+value.byteLength>info.size)throw Error('Model exceeds its admitted byte budget.');
     bytes?.set(value,entry.received);entry.received+=value.byteLength;arm();
     if(entry.received-last>=262144||entry.received===info.size){last=entry.received;emit(key,{received:entry.received,total:info.size});}
    }
    if(entry.received!==info.size)throw Error('The model download was incomplete. Try again.');
    if(bytes&&retainable){cache.set(key,{bytes,used:++clock});retained+=info.size;}
    warmed.add(key);while(warmed.size>3)warmed.delete(warmed.values().next().value);
    return bytes||undefined;
   } catch(error) {
    evictKey(key);await reader?.cancel().catch(()=>{});
    if(stalled)throw Error('The model download stopped. Check your connection and try again.');throw error;
   } finally {clearTimeout(timer);entry.controller.signal.removeEventListener('abort',abortRead);if(active===entry)active=null;}
  });return entry.promise;
 }
 function request(asset,mode) { if(paused)return Promise.reject(cancelled());let info;try{info=admit(asset);}catch(e){return Promise.reject(e);}if(mode==='prefetch'&&!prefetchUnretained&&(!canRetain(asset)||info.size>maxBytes))return Promise.resolve();return start(asset,mode,select(keyFor(asset))); }
 function read(asset,{signal,onProgress}={}) {
  if(signal?.aborted)return Promise.reject(cancelled());
  const key=keyFor(asset);let set=listeners.get(key);if(!set){set=new Set();listeners.set(key,set);}if(onProgress)set.add(onProgress);
  return new Promise((resolve,reject)=>{
   let settled=false;
   const clean=()=>{if(onProgress)set.delete(onProgress);if(!set.size&&listeners.get(key)===set)listeners.delete(key);signal?.removeEventListener('abort',abort);};
   const abort=()=>{if(settled)return;settled=true;clean();reject(cancelled());};signal?.addEventListener('abort',abort,{once:true});
   if(active?.key===key)onProgress?.({received:active.received,total:active.total});
   request(asset,'read').then(bytes=>{if(settled)return;settled=true;clean();resolve(bytes);},error=>{if(settled)return;settled=true;clean();reject(error);});
  });
 }
 return {
  prefetch:asset=>request(asset,'prefetch'),read,
  pause(){paused=true;desired=null;epoch++;active?.controller.abort();},resume(){paused=false;},
  clear(){paused=true;desired=null;epoch++;active?.controller.abort();for(const key of [...cache.keys()])evictKey(key);warmed.clear();},
  evict(asset){evictKey(keyFor(asset));if(active?.key===keyFor(asset))active.controller.abort();},
  snapshot(){return {retainedBytes:retained,maxRetainedBytes:maxBytes,inFlight:active?1:0,inFlightBufferBytes:active?.bufferBytes||0,entries:cache.size,warmedKeys:warmed.size};}
 };
}

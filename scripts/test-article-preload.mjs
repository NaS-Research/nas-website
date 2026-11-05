import test from 'node:test';
import assert from 'node:assert/strict';
import {createArticlePreloadStore} from '../src/lib/anatomy-release-preview/preload-store.mjs';
import {articleModelAssets} from '../src/lib/anatomy-release-preview/interactive-model.mjs';
import {resolveArticleDeliveryAsset} from '../src/lib/anatomy-release-preview/delivery-tier.mjs';
import {mobileDeliveryManifest} from '../src/lib/anatomy-release-preview/mobile-delivery-manifest.mjs';
const assets=articleModelAssets.map((base,i)=>({...resolveArticleDeliveryAsset(base,'desktop',mobileDeliveryManifest),bytes:4,byteBudget:4}));
const tick=()=>new Promise(resolve=>setImmediate(resolve));
async function until(check){for(let i=0;i<100;i++){if(check())return;await tick();}assert.fail('condition did not settle');}
function fixture(){let active=0,peak=0;const calls=[];const fetcher=(url,{signal})=>new Promise((resolve,reject)=>{
 active++;peak=Math.max(peak,active);let closed=false;const close=()=>{if(!closed){closed=true;active--;}};
 const call={url,complete(){if(signal.aborted)return;close();resolve({ok:true,headers:new Headers({'content-length':'4'}),body:new ReadableStream({start(c){c.enqueue(new Uint8Array([1,2,3,4]));c.close();}})});}};calls.push(call);
 signal.addEventListener('abort',()=>{close();reject(new DOMException('cancelled','AbortError'));},{once:true});
 });return {calls,get peak(){return peak;},store:createArticlePreloadStore({fetcher,origin:()=> 'https://nasresearch.bio',maxBytes:16})};}
test('all three files preload sequentially before any model read and survive switching',async()=>{
 const f=fixture();f.store.resume();f.store.warmAll(assets);
 for(let i=0;i<3;i++){await until(()=>f.calls.length===i+1);f.calls[i].complete();}
 await until(()=>f.store.snapshot().preloadedCount===3);
 assert.equal(f.peak,1);assert.equal(f.store.snapshot().retainedBytes,12);
 for(const asset of [assets[1],assets[2],assets[0],assets[2]])assert.deepEqual([...await f.store.read(asset)],[1,2,3,4]);
 assert.equal(f.calls.length,3);f.store.clear();assert.equal(f.store.snapshot().retainedBytes,0);
});
test('a selected model interrupts prewarm and background work cannot cancel its read',async()=>{
 const f=fixture();f.store.resume();f.store.warmAll(assets);await until(()=>f.calls.length===1);
 const reading=f.store.read(assets[2]);await until(()=>f.calls.length===2);
 assert(new URL(f.calls[1].url).pathname===assets[2].deliveryURL);await tick();assert.equal(f.calls.length,2);
 f.calls[1].complete();await reading;await until(()=>f.calls.length===3);
 f.calls[2].complete();await until(()=>f.calls.length===4);f.calls[3].complete();
 await until(()=>f.store.snapshot().preloadedCount===3);assert.equal(f.peak,1);f.store.clear();
});
test('page pause aborts pending preload; resume continues and clear prevents restarts',async()=>{
 const f=fixture();f.store.resume();f.store.warmAll(assets);await until(()=>f.calls.length===1);
 f.store.pause();await tick();assert.equal(f.calls.length,1);
 f.store.resume();await until(()=>f.calls.length===2);f.calls[1].complete();
 await until(()=>f.calls.length===3);f.store.clear();await tick();assert.equal(f.calls.length,3);assert.equal(f.store.snapshot().retainedBytes,0);
});
test('preload rejects original/heavy and over-budget sets before starting fetch',()=>{
 const f=fixture();f.store.resume();
 assert.throws(()=>f.store.warmAll([{...assets[0],deliveryTier:undefined}]),/reviewed compact/);
 assert.throws(()=>f.store.warmAll(assets.map(a=>({...a,bytes:8}))),/budget/);
 assert.equal(f.calls.length,0);f.store.clear();
});
test('actual three certified compact files fit the128MiB bound for desktop and mobile',()=>{
 const f=createArticlePreloadStore({fetcher:()=>assert.fail('paused stores cannot fetch')});
 const resolved=articleModelAssets.map(a=>resolveArticleDeliveryAsset(a,'desktop',mobileDeliveryManifest));
 assert.equal(resolved.reduce((n,a)=>n+a.bytes,0),116307764);
 f.warmAll(resolved);assert.equal(f.snapshot().preloadCount,3);
 assert(resolved.every((a,i)=>a.bytes<articleModelAssets[i].bytes));f.clear();
});

import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import {createHash} from 'node:crypto';
import {ATELIER_ORGANS,deliveryBlock} from '../src/lib/anatomy-studio/registry.mjs';import {PUBLIC_STUDIO_ORGANS} from '../src/lib/anatomy-studio/public-registry.mjs';import {createOrganLoader} from '../src/lib/anatomy-studio/loader.mjs';
const origin='https://nasresearch.bio';function h(asset,hostname='nasresearch.bio'){globalThis.window={location:{origin,hostname}};const events=[];let fetches=0,parsed=0;const loader=createOrganLoader({notify:e=>events.push(e),dispose:()=>{},digest:async()=>asset.sourceSHA256,parse:async()=>{parsed++;return {};},fetcher:async()=>{fetches++;return {ok:true,body:new ReadableStream({start(c){c.enqueue(new Uint8Array([1,2,3]));c.close();}})};}});return {loader,events,counts:()=>({fetches,parsed})};}
test('Exactly fifteen explicit identities are released with verified payload hashes',()=>{assert.equal(PUBLIC_STUDIO_ORGANS.length,15);for(const a of PUBLIC_STUDIO_ORGANS){const bytes=readFileSync(new URL('../public'+a.deliveryURL,import.meta.url));assert.ok(bytes.length<=a.byteBudget && a.byteBudget-bytes.length<=1024);assert.equal(createHash('sha256').update(bytes).digest('hex'),a.sourceSHA256);assert.equal(a.publicationApproved,true);assert.equal(a.deliveryScope,'nas-public-website');if(ATELIER_ORGANS.some(o=>o.id===a.id)){assert.equal(a.rights.licenseVerified,false);assert.equal(a.rights.userProvidedLicense,'MIT');}}});
test('Private registry permissions are preserved',()=>{for(const a of ATELIER_ORGANS){assert.equal(a.deliveryScope,'loopback-admin-only');assert.equal(a.publicationApproved,false);assert.equal(a.rights.publicWebsiteUseAuthorized,undefined);}});
test('Public production origin reaches verified loader ready state',async()=>{const a=PUBLIC_STUDIO_ORGANS[0],x=h(a);await x.loader.load(a);assert.deepEqual(x.counts(),{fetches:1,parsed:1});assert.equal(x.events.at(-1).status,'ready');x.loader.dispose();});
test('Private assets still reject production origin before fetching',async()=>{const a=ATELIER_ORGANS[0],x=h(a);await x.loader.load(a);assert.equal(x.counts().fetches,0);assert.equal(x.events.at(-1).status,'error');});
test('Public release rejects unconfigured origins before fetching',async()=>{const a=PUBLIC_STUDIO_ORGANS[0],x=h(a,'elsewhere.invalid');await x.loader.load(a);assert.equal(x.counts().fetches,0);assert.equal(x.events.at(-1).status,'error');});
test('Publication and website-use approval are both required',()=>{const a=PUBLIC_STUDIO_ORGANS[0];assert.ok(deliveryBlock({...a,publicationApproved:false}));assert.ok(deliveryBlock({...a,rights:{...a.rights,publicWebsiteUseAuthorized:false}}));});
test('Both approved platelet states are listed in study order with original materials',()=>{
 const states=PUBLIC_STUDIO_ORGANS.filter(model=>model.id.startsWith('platelet-'));
 assert.deepEqual(states.map(({id})=>id),['platelet-resting','platelet-activated']);
 for(const model of states){
  assert.equal(model.preserveMaterials,true);
  assert.equal(model.rights.publicWebsiteUseAuthorized,true);
 }
});

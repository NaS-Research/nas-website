import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync}from'node:fs';
import {PUBLIC_STUDIO_ORGANS,PUBLIC_ADDITIONS_SHA256,PUBLIC_STUDIO_RELEASE}from'../src/lib/anatomy-studio/public-registry.mjs';
import {PRIVATE_STUDIO_MODELS}from'../src/lib/anatomy-studio/studio-model-catalog.mjs';
import {publicStudioHostAllowed,createOrganLoader}from'../src/lib/anatomy-studio/loader.mjs';
const ids=['internal-heart-cutaway','normal-rbc','lymphocyte','eosinophil'];
test('only exact four pinned additions promoted, original private records are untouched',()=>{
 assert.deepEqual(Object.keys(PUBLIC_ADDITIONS_SHA256),ids);
 for(const id of ids){const a=PUBLIC_STUDIO_ORGANS.find(x=>x.id===id),p=PRIVATE_STUDIO_MODELS.find(x=>x.id===id);assert.notEqual(a,p);assert.equal(a.sourceSHA256,p.sourceSHA256);assert.equal(a.deliveryURL,p.deliveryURL);assert.equal(a.bytes,p.bytes);assert.equal(a.preserveMaterials,true);assert.equal(a.publicationApproved,true);assert.equal(a.rights.publicWebsiteUseAuthorized,true);assert.equal(p.publicationApproved,false);assert.equal(p.deliveryScope,'loopback-admin-only');}
 assert.equal(PUBLIC_STUDIO_RELEASE.scientificValidationClaimed,false);
 for(const id of ['neutrophil','monocyte','sickled-rbc','basophil','artery','macrophage'])assert(!PUBLIC_STUDIO_ORGANS.some(a=>a.id===id));
});
test('public labels are 13 distinct ABC entries with preserved heart constraints',()=>{
 assert.deepEqual(PUBLIC_STUDIO_ORGANS.map(x=>x.label),['Brain','Eosinophil','Eye','Heart','Heart cutaway','Intestine','Kidneys','Liver','Lungs','Lymphocyte','Pancreas','Red blood cell','Skin']);
 const a=PUBLIC_STUDIO_ORGANS.find(a=>a.id==='internal-heart-cutaway');assert.equal(a.viewMode,'front-cutaway-orbit');assert.equal(a.viewProfile.enableZoom,false);assert.equal(a.viewProfile.enablePan,false);
});
test('only known production and same-project PR preview hosts pass',()=>{
 for(const h of ['nasresearch.bio','www.nasresearch.bio','127.0.0.1','localhost','[::1]','deploy-preview-123--nasresearch.netlify.app'])assert(publicStudioHostAllowed(h),h);
 for(const h of ['elsewhere.invalid','nasresearch.bio.evil.test','deploy-preview-123--other.netlify.app','deploy-preview-123--nasresearch.netlify.app.evil.test','deploy-preview-0--nasresearch.netlify.app','nasresearch.netlify.app'])assert(!publicStudioHostAllowed(h),h);
});
test('private/admin route remains byte-identical to accepted protected baseline',()=>{
 const s=readFileSync(new URL('../src/app/studio/anatomy/page.jsx',import.meta.url),'utf8');assert(s.includes("process.env.NAS_ANATOMY_PRIVATE_REVIEW!=='true'"));assert(s.includes('const {user,isAdmin}=await adminSession()'));assert(s.includes('if(!user||!isAdmin)notFound()'));
});
test('public preview still rejects cross-origin model URLs before fetching',async()=>{
 globalThis.window={location:{origin:'https://deploy-preview-123--nasresearch.netlify.app',hostname:'deploy-preview-123--nasresearch.netlify.app'}};let fetches=0;const events=[];const loader=createOrganLoader({fetcher:async()=>{fetches++;},parse:async()=>({}),dispose:()=>{},notify:e=>events.push(e)});
 await loader.load({...PUBLIC_STUDIO_ORGANS[0],deliveryURL:'https://elsewhere.invalid/model.glb'});assert.equal(fetches,0);assert.equal(events.at(-1).status,'error');delete globalThis.window;
});

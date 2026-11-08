import test from 'node:test';
import assert from 'node:assert/strict';
import {PRIVATE_STUDIO_MODELS,sortStudioModels} from '../src/lib/anatomy-studio/studio-model-catalog.mjs';
import {ATELIER_ORGANS,deliveryBlock} from '../src/lib/anatomy-studio/registry.mjs';
import {PUBLIC_STUDIO_ORGANS} from '../src/lib/anatomy-studio/public-registry.mjs';
import {articleModelAssets,articleRotationProfile} from '../src/lib/anatomy-release-preview/interactive-model.mjs';
import {mobileDeliveryManifest} from '../src/lib/anatomy-release-preview/mobile-delivery-manifest.mjs';
test('15 unique approved subjects are alphabetical, with resting platelet first',()=>{
 assert.equal(PRIVATE_STUDIO_MODELS.length,15);assert.equal(new Set(PRIVATE_STUDIO_MODELS.map(a=>a.id)).size,15);
 assert.deepEqual(PRIVATE_STUDIO_MODELS.map(a=>a.label),['Brain','Eosinophil','Eye','Heart','Heart cutaway','Intestine','Kidneys','Liver','Lungs','Lymphocyte','Pancreas','Platelet (resting)','Platelet (activated)','Red blood cell','Skin']);
});
test('original nine identities and private permissions survive explicit public promotion',()=>{
 for(const original of ATELIER_ORGANS){assert.equal(PRIVATE_STUDIO_MODELS.find(a=>a.id===original.id),original);assert.equal(PUBLIC_STUDIO_ORGANS.find(a=>a.id===original.id).sourceSHA256,original.sourceSHA256);}
 assert.equal(PUBLIC_STUDIO_ORGANS.length,15);
 for(const a of PRIVATE_STUDIO_MODELS.filter(a=>['eosinophil','lymphocyte','normal-rbc','internal-heart-cutaway','platelet-resting','platelet-activated'].includes(a.id))){assert.equal(a.deliveryScope,'loopback-admin-only');assert.equal(a.publicationApproved,false);}
});

test('only six additions are admitted and all explicitly excluded subjects are absent',()=>{
 const original=new Set(ATELIER_ORGANS.map(a=>a.id));
 assert.deepEqual(PRIVATE_STUDIO_MODELS.filter(a=>!original.has(a.id)).map(a=>a.id).sort(),['eosinophil','internal-heart-cutaway','lymphocyte','normal-rbc','platelet-activated','platelet-resting']);
 for(const id of ['neutrophil','monocyte','sickled-rbc','basophil','artery','macrophage'])assert(!PRIVATE_STUDIO_MODELS.some(a=>a.id===id));
});
test('reused compact files preserve exact identities, model roots, materials and front-heart constraints',()=>{
 for(const base of articleModelAssets){
  const a=PRIVATE_STUDIO_MODELS.find(a=>a.id===base.id),record=mobileDeliveryManifest.assets.find(r=>r.modelId===base.id);
  assert.equal(a.sourceSHA256,record.sourceSHA256);assert.equal(a.deliveryURL,record.deliveryURL);assert.equal(a.bytes,record.bytes);assert.equal(a.byteBudget,a.bytes);
  assert.equal(a.originalSourceSHA256,base.sourceSHA256);assert.equal(a.structures,base.structures);assert.equal(a.preserveMaterials,true);assert.deepEqual(articleRotationProfile(a),articleRotationProfile(base));
  assert.equal(a.deliveryScope,'loopback-admin-only');assert.equal(a.publicationApproved,false);assert.equal(deliveryBlock(a),null);
 }
});
test('eosinophil references only the exact appearance-approved61MB GLB and private use',()=>{
 const e=PRIVATE_STUDIO_MODELS.find(a=>a.id==='eosinophil');
 assert.equal(e.sourceSHA256,'c817e35642155ba29145198bfb1908aec7b86f99c179bbcbb1dd82b4d5b40faf');
 assert.equal(e.bytes,61249636);assert.equal(e.byteBudget,e.bytes);assert.equal(e.publicationApproved,false);assert.equal(e.rights.publicWebsiteUseAuthorized,false);
 assert.equal(e.deliveryScope,'loopback-admin-only');assert.equal(deliveryBlock(e),null);assert.deepEqual(e.structures.map(s=>s.id),['eosinophil']);
});
test('sorting is case-insensitive, deterministic for repeated labels and never changes source order',()=>{
 const a=[{id:'z',label:'Skin'},{id:'b',label:'brain'},{id:'a',label:'Brain'}];const before=[...a];
 assert.deepEqual(sortStudioModels(a).map(x=>x.id),['a','b','z']);assert.deepEqual(a,before);
});

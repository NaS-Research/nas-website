import {PUBLIC_STUDIO_ORGANS} from '../anatomy-studio/public-registry.mjs';
export const selectedArticleModelIds=Object.freeze(['artery-environment','eyeball','lungs','lymphocyte','normal-rbc']);
const catalog=Object.freeze({eyeball:{label:'Eye',bytes:2203616,sha:'584337a2efc7d3c03d7326ca930217c4f7e5eca0a32a8cec141c7388ecc8a1c7',posterSHA:'b67b60fdb70f1f94ed254d905c849769935ff83c41351eab599626c20b8df2bc'},lungs:{label:'Lung',bytes:4455976,sha:'81617c9fc2f2b7bf1e7d874b89614c89b09f2f68318e64997c68c948cfa9abdc',posterSHA:'ef8fb3c33fda1633131e460f8925d3d5b01cc413b12cabec2302c4bb5ed94037'}});
const releasedCatalogModels=Object.entries(catalog).flatMap(([id,c])=>{const source=PUBLIC_STUDIO_ORGANS.find(a=>a.id===id&&a.sourceSHA256===c.sha);if(!source)return [];return [Object.freeze({...source,label:c.label,bytes:c.bytes,byteBudget:c.bytes,webExportReviewed:true,sourceIdentityVerified:true,preserveMaterials:false,poster:'/studio/anatomy/atelier/thumbs/'+id+'.webp',posterSHA256:c.posterSHA,posterWidth:180,posterHeight:180,posterKind:'catalog-illustration',posterAlt:'Catalog illustration: '+c.label.toLowerCase()+'. Not a rendered view of the interactive model.',caption:c.label+' · Atelier model',credit:'Third-party Atelier model; user-authorized website use. Upstream license file not independently verified.',creditHref:'/studio/anatomy/CREDITS.md',provenance:'Existing public Anatomy Studio release d11e05de764a7b535327872871ab80b62b79b13f. Original model and catalog illustration from thebuggeddev/anatomy8c0e6f321a47f895ae58ce098028b92774733ee9; exact bytes and hashes verified. No claim of wholly NaS-created model or rendered model poster.'})];});
const prototypeModels=[
  {
    "id": "lymphocyte",
    "label": "Lymphocyte",
    "deliveryURL": "/anatomy-release-preview/models/lymphocyte-6a99ec6a.glb",
    "sourceSHA256": "42c2980ce1b9563e5887ba3da6127e72de496e87002f023f59cc1b28d2d88ce2",
    "bytes": 61352356,
    "byteBudget": 61352356,
    "deliveryScope": "nas-public-website",
    "deliveryApproved": true,
    "publicationApproved": true,
    "rights": {
      "publicWebsiteUseAuthorized": true,
      "userAuthorizedIllustrativePreview": true,
      "externalRedistributionLicenseClaimed": false
    },
    "webExportReviewed": true,
    "sourceIdentityVerified": true,
    "preserveMaterials": true,
    "poster": null,
    "posterKind": "pending-model-still",
    "caption": "Lymphocyte · Generated prototype",
    "credit": "Tripo-derived illustrative prototype. Appearance accepted by founder; no biological validation claimed.",
    "creditHref": "/anatomy-release-preview/models/SOURCES.json",
    "provenance": "Exact existing accepted Tripo-derived model 6a99ec6a-2f2a-405a-af44-ecfa77ed4554; byte/hash matched ModelLab handoff. No regeneration, new refinement, scientific validation or full-bank publication.",
    "structures": [
      {
        "id": "lymphocyte",
        "label": "Lymphocyte"
      }
    ],
    "viewMode": "object-orbit"
  },
  {
    "id": "artery-environment",
    "label": "Artery environment",
    "deliveryURL": "/anatomy-release-preview/models/artery-interior-17246733.glb",
    "sourceSHA256": "4d5ee9e1c064b8a55107f65d441311210fbb0d32e896258098d6b6ea1ad9a400",
    "bytes": 59618488,
    "byteBudget": 59618488,
    "deliveryScope": "nas-public-website",
    "deliveryApproved": true,
    "publicationApproved": true,
    "rights": {
      "publicWebsiteUseAuthorized": true,
      "userAuthorizedIllustrativePreview": true,
      "externalRedistributionLicenseClaimed": false
    },
    "webExportReviewed": true,
    "sourceIdentityVerified": true,
    "preserveMaterials": true,
    "poster": null,
    "posterKind": "pending-model-still",
    "caption": "Artery environment · Generated prototype",
    "credit": "Tripo-derived illustrative prototype. Appearance accepted by founder; no biological validation claimed.",
    "creditHref": "/anatomy-release-preview/models/SOURCES.json",
    "provenance": "Exact existing accepted Tripo-derived model 17246733; byte/hash matched ModelLab handoff. No regeneration, new refinement, scientific validation or full-bank publication.",
    "structures": [
      {
        "id": "artery-environment",
        "label": "Artery environment"
      }
    ],
    "viewMode": "constrained-orbit",
    "viewProfile": {
      "kind": "end-capped-environment-orbit",
      "minDistance": 4,
      "maxDistance": 10,
      "enablePan": false
    },
    "viewNote": "End-capped prototype · Orbit preview only; no through-navigation."
  },
  {
    "id": "normal-rbc",
    "label": "Normal red blood cell",
    "deliveryURL": "/anatomy-release-preview/models/normal-rbc-refined-v02.glb",
    "sourceSHA256": "147a5665c19bdfb6698ab6c37b69d51c77eaa1d7559d518e35200b6f48ab399e",
    "bytes": 103181732,
    "byteBudget": 103181732,
    "deliveryScope": "nas-public-website",
    "deliveryApproved": true,
    "publicationApproved": true,
    "rights": {
      "publicWebsiteUseAuthorized": true,
      "userAuthorizedIllustrativePreview": true,
      "externalRedistributionLicenseClaimed": false
    },
    "webExportReviewed": true,
    "sourceIdentityVerified": true,
    "preserveMaterials": true,
    "poster": null,
    "posterKind": "pending-model-still",
    "caption": "Normal red blood cell · Refined prototype",
    "credit": "Tripo-derived prototype with accepted local biconcavity refinement; no clinical certification.",
    "creditHref": "/anatomy-release-preview/models/SOURCES.json",
    "provenance": "Accepted Normal-RBC-Refined-v02.blend source SHA256 59d6e229367fcd6e29cb988cd46a2331eb1c5fd888fbfbfa3715f647ef13660e; exact static Y-up GLB SHA256 147a5665c19bdfb6698ab6c37b69d51c77eaa1d7559d518e35200b6f48ab399e. One mesh/node,1954572 triangles, geometry preserved without decimation. Embedded4K textures; exporter sampler warning retained for actual appearance QA.",
    "structures": [
      {
        "id": "normal-rbc",
        "label": "Normal red blood cell"
      }
    ],
    "viewMode": "object-orbit",
    "geometry": {
      "triangles": 1954572,
      "meshes": 1,
      "nodes": 1,
      "staticEvaluatedSourceGeometryPreserved": true,
      "decimation": false
    },
    "exporterWarnings": [
      "More than one shader image used for a texture; resulting glTF sampler follows the first image. Basecolor/normal packed bytes retained exactly; website appearance QA pending."
    ]
  }
];
export const articleModelAssets=Object.freeze([...releasedCatalogModels,...prototypeModels]);
export function articleModelReady(a){if(!a||!selectedArticleModelIds.includes(a.id))return false;if(a.id==='artery-environment'&&!(a.viewMode==='constrained-orbit'&&a.viewProfile?.kind==='end-capped-environment-orbit'&&a.viewProfile.minDistance>=4&&a.viewProfile.maxDistance>a.viewProfile.minDistance&&a.viewProfile.enablePan===false))return false;const c=catalog[a.id],existing=Boolean(c&&a.deliveryURL==='/studio/anatomy/atelier/'+a.id+'.glb'&&a.sourceSHA256===c.sha),posterOK=a.posterKind==='pending-model-still'?a.poster===null:a.posterKind==='catalog-illustration'?Boolean(existing&&a.poster==='/studio/anatomy/atelier/thumbs/'+a.id+'.webp'&&a.posterSHA256===c.posterSHA&&a.posterWidth===180&&a.posterHeight===180):Boolean(a.posterKind==='model-still'&&a.poster?.startsWith('/anatomy-release-preview/')&&/^[a-f0-9]{64}$/.test(a.posterSHA256||'')&&a.posterWidth>=1600&&a.posterHeight>=900);return Boolean(typeof a.label==='string'&&a.label.trim()&&a.webExportReviewed===true&&a.sourceIdentityVerified===true&&a.deliveryScope==='nas-public-website'&&a.deliveryApproved===true&&a.publicationApproved===true&&a.rights?.publicWebsiteUseAuthorized===true&&a.provenance&&/^[a-f0-9]{64}$/.test(a.sourceSHA256||'')&&Number.isSafeInteger(a.bytes)&&a.bytes>0&&a.byteBudget===a.bytes&&(existing||a.deliveryURL?.startsWith('/anatomy-release-preview/models/'))&&posterOK&&a.structures?.some(s=>s.id===a.id));}
export function modelPayloadLabel(bytes){return (bytes/1000000).toFixed(1)+' MB';}
export const modelKeyCommand=key=>({ArrowLeft:'left',ArrowRight:'right',ArrowUp:'up',ArrowDown:'down','0':'reset'}[key]||null);
export function buildArticleModelSlides(assets){return selectedArticleModelIds.flatMap(id=>{const a=assets.find(a=>a.id===id);if(!articleModelReady(a))return [];const illustration=a.posterKind==='catalog-illustration',pending=a.posterKind==='pending-model-still';return [{id:a.id,title:a.label,caption:a.caption,creditHref:a.creditHref,src:a.poster,alt:a.posterAlt,nativeWidth:a.posterWidth,nativeHeight:a.posterHeight,sha256:a.posterSHA256,privatePreviewUseVerified:true,backgroundBlackVerified:!illustration&&!pending&&a.backgroundBlackVerified===true,kind:pending?'pending-model-still':illustration?'catalog-illustration':'model-still',isCatalogIllustration:illustration,isPendingPoster:pending,provenance:a.provenance,interactiveAsset:a}];});}

export const articleRotationCommand=type=>['left','right','up','down','reset'].includes(type)?type:null;
export const articleRotationProfile=asset=>Object.freeze({...asset?.viewProfile,enableZoom:false,enablePan:false});

export const selectedArticleModelIds=Object.freeze(['lymphocyte','normal-rbc','internal-heart-cutaway']);
export const ARTICLE_MODEL_BYTE_CAP=128*1024*1024;
export const articleModelAssets=Object.freeze([
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
    "caption": "Lymphocyte model.",
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
    "caption": "Red blood cell with its biconcave shape.",
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
  },
  {
    "id": "internal-heart-cutaway",
    "label": "Heart internal cutaway",
    "deliveryURL": "/anatomy-release-preview/models/heart-internal-cutaway-approved-v01.glb",
    "sourceSHA256": "34129d1be6e98323a4eb55145b839897f8876bb5503d2b3084109e280ebe28bf",
    "bytes": 69366900,
    "byteBudget": 69366900,
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
    "caption": "Heart cutaway showing the inner chambers.",
    "credit": "Tripo-derived educational model using the approved static repair; see source notices.",
    "creditHref": "/anatomy-release-preview/models/SOURCES.json",
    "provenance": "Exact approved static evaluated cutaway WebCandidate02 from handoff59daf8e5fb201724bc38b63521f5f0471e9ab5a7fc22d275adb745273f2f6029; source snapshotd4abc511fb0a5d61e3b4f0f8a0decbff4790a92eed2b0ead431d897ec85654dd. GLB34129d1be6e98323a4eb55145b839897f8876bb5503d2b3084109e280ebe28bf, one scene/mesh, static evaluated depth/mass1. User selected this model for existing unlisted website. No heartbeat, physical simulation, patient-specific or clinical validation claim. Native procedural tint approximated in original approved export; actual web front/material appearance QA required.",
    "structures": [
      {
        "id": "internal-heart-cutaway",
        "label": "Heart internal cutaway"
      }
    ],
    "viewMode": "front-cutaway-orbit",
    "posterSHA256": null,
    "posterWidth": null,
    "posterHeight": null,
    "viewProfile": {
      "kind": "front-cutaway-orbit",
      "frontDirection": [
        0,
        0,
        1
      ],
      "horizontalHalfAngle": 0.5235987755982988,
      "verticalHalfAngle": 0.17453292519943295,
      "enableZoom": false,
      "enablePan": false,
      "orientationEvidence": "Approved source front is Blender -Y; glTF Y-up conversion yields+Z; exported node has no transform. Must verify actual cutaway consumer pixels before release.",
      "consumerFrontVisualQAPending": true
    },
    "viewNote": "Drag to rotate",
    "animations": 0
  }
]);
export function articleModelReady(a){return Boolean(a&&selectedArticleModelIds.includes(a.id)&&typeof a.label==='string'&&a.label.trim()&&a.webExportReviewed===true&&a.sourceIdentityVerified===true&&a.deliveryScope==='nas-public-website'&&a.deliveryApproved===true&&a.publicationApproved===true&&a.rights?.publicWebsiteUseAuthorized===true&&a.provenance&&/^[a-f0-9]{64}$/.test(a.sourceSHA256||'')&&Number.isSafeInteger(a.bytes)&&a.bytes>0&&a.bytes<=ARTICLE_MODEL_BYTE_CAP&&a.byteBudget===a.bytes&&a.deliveryURL?.startsWith('/anatomy-release-preview/models/')&&a.structures?.some(s=>s.id===a.id)&&(a.id!=='internal-heart-cutaway'||a.viewProfile?.kind==='front-cutaway-orbit'));}
export function modelPayloadLabel(bytes){return (bytes/1000000).toFixed(1)+' MB';}
export const modelKeyCommand=key=>({ArrowLeft:'left',ArrowRight:'right',ArrowUp:'up',ArrowDown:'down','0':'reset'}[key]||null);
export const articleRotationCommand=type=>['left','right','up','down','reset'].includes(type)?type:null;
export const articleRotationProfile=asset=>Object.freeze({...asset?.viewProfile,enableZoom:false,enablePan:false});
export function buildArticleModelSlides(assets){return selectedArticleModelIds.flatMap(id=>{const a=assets.find(a=>a.id===id);return articleModelReady(a)?[{id:a.id,title:a.label,caption:a.caption,kind:'interactive-model',interactiveAsset:a}]:[];});}

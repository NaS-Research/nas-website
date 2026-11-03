export const editorialModelIds=Object.freeze(['eyeball','lungs','pancreas']);
export const atelierSource='https://github.com/thebuggeddev/anatomy/tree/8c0e6f321a47f895ae58ce098028b92774733ee9';
// Populated only after genuine native viewer captures and visual review. Never use catalog thumbnails here.
export const editorialStills=Object.freeze([
  {
    "id": "eyeball",
    "label": "Eye",
    "alt": "Eye model viewed obliquely, showing the iris, sclera, surface vessels and extraocular muscles on black.",
    "src": "/anatomy-release-preview/editorial/eyeball-editorial.webp",
    "sha256": "f5dc7c037905e6793f046ae91cbab698db378ca218cc1e34b894b9576669c563",
    "sourceModelSHA256": "584337a2efc7d3c03d7326ca930217c4f7e5eca0a32a8cec141c7388ecc8a1c7",
    "width": 1676,
    "height": 1274,
    "actualViewerCapture": true,
    "blackBackground": true,
    "noResizeOrUpscaling": true,
    "visualReviewPassed": true
  },
  {
    "id": "lungs",
    "label": "Lung",
    "alt": "Lung model viewed from the front, showing both lungs, the trachea and main bronchi on black.",
    "src": "/anatomy-release-preview/editorial/lungs-editorial.webp",
    "sha256": "7427d84e489841b26852023d680bb83781c3780bb9835fa056f91126ed6f9bd6",
    "sourceModelSHA256": "81617c9fc2f2b7bf1e7d874b89614c89b09f2f68318e64997c68c948cfa9abdc",
    "width": 1676,
    "height": 1274,
    "actualViewerCapture": true,
    "blackBackground": true,
    "noResizeOrUpscaling": true,
    "visualReviewPassed": true
  },
  {
    "id": "pancreas",
    "label": "Pancreas",
    "alt": "Pancreas model showing lobulated tissue and surface vessels on black.",
    "src": "/anatomy-release-preview/editorial/pancreas-editorial.webp",
    "sha256": "a05bf14cc7e9ecd48b447400b811971098d21421c1316fe2d5c613fa200a48e3",
    "sourceModelSHA256": "e5213bf8ed66e8ed4eb2a9d1c7a6922fb926eac85de8c5979e780ca1abcaf1c3",
    "width": 1676,
    "height": 1274,
    "actualViewerCapture": true,
    "blackBackground": true,
    "noResizeOrUpscaling": true,
    "visualReviewPassed": true
  }
]);
export function editorialStillReady(a){return Boolean(a&&editorialModelIds.includes(a.id)&&a.src?.startsWith('/anatomy-release-preview/editorial/')&&/^[a-f0-9]{64}$/.test(a.sha256||'')&&/^[a-f0-9]{64}$/.test(a.sourceModelSHA256||'')&&a.width>=1400&&a.height>=800&&a.actualViewerCapture===true&&a.blackBackground===true&&a.noResizeOrUpscaling===true&&a.visualReviewPassed===true);}

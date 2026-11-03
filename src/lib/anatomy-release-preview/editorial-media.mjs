export const editorialModelIds=Object.freeze(['eyeball','lungs']);
export const atelierSource='https://github.com/thebuggeddev/anatomy/tree/8c0e6f321a47f895ae58ce098028b92774733ee9';
export const editorialStills=Object.freeze([
  {
    "id": "eyeball",
    "label": "Eye",
    "alt": "Eye model viewed obliquely, showing the iris, sclera, surface vessels and extraocular muscles on black.",
    "src": "/anatomy-release-preview/editorial/eyeball-editorial-borderless-v2.webp",
    "sha256": "f113d73c592c774aa75c923d24f5f54490093a815cedba88f50f846af1b58ca1",
    "sourceModelSHA256": "584337a2efc7d3c03d7326ca930217c4f7e5eca0a32a8cec141c7388ecc8a1c7",
    "width": 1612,
    "height": 1210,
    "actualViewerCapture": true,
    "blackBackground": true,
    "noResizeOrUpscaling": true,
    "visualReviewPassed": true,
    "caption": "Eye with the iris, sclera and surrounding muscles.",
    "borderlessNativeCrop": true,
    "nativeCrop": {
      "left": 32,
      "top": 32,
      "width": 1612,
      "height": 1210
    }
  },
  {
    "id": "lungs",
    "label": "Lung",
    "alt": "Lung model viewed from the front, showing both lungs, the trachea and main bronchi on black.",
    "src": "/anatomy-release-preview/editorial/lungs-editorial-borderless-v2.webp",
    "sha256": "69d1d0042700808205f75bdcc41e3b380ee0603c6908643e769ea3bcfbc21639",
    "sourceModelSHA256": "81617c9fc2f2b7bf1e7d874b89614c89b09f2f68318e64997c68c948cfa9abdc",
    "width": 1612,
    "height": 1210,
    "actualViewerCapture": true,
    "blackBackground": true,
    "noResizeOrUpscaling": true,
    "visualReviewPassed": true,
    "caption": "Lungs with the trachea and main bronchi.",
    "borderlessNativeCrop": true,
    "nativeCrop": {
      "left": 32,
      "top": 32,
      "width": 1612,
      "height": 1210
    }
  }
]);
export function editorialStillReady(a){return Boolean(a&&editorialModelIds.includes(a.id)&&a.src?.startsWith('/anatomy-release-preview/editorial/')&&/^[a-f0-9]{64}$/.test(a.sha256||'')&&/^[a-f0-9]{64}$/.test(a.sourceModelSHA256||'')&&a.width>=1400&&a.height>=800&&a.actualViewerCapture===true&&a.blackBackground===true&&a.noResizeOrUpscaling===true&&a.visualReviewPassed===true&&a.borderlessNativeCrop===true);}

import {ATELIER_ORGANS} from './registry.mjs';
import {PRIVATE_STUDIO_MODELS,sortStudioModels} from './studio-model-catalog.mjs';
// Explicit original-nine identity allowlist; unrelated private records never inherit public use.
const RELEASED_SHA256=Object.freeze({
  "brain": "2cd5e7178f1e5de707bb97c2c06f6c34fb5aaad28132445c0afcb4f0fd67c811",
  "eyeball": "584337a2efc7d3c03d7326ca930217c4f7e5eca0a32a8cec141c7388ecc8a1c7",
  "heart": "ef48b43442dbbe2819d6035f8bbf1391d2c3fefbe842863c9c7c1a22cc6cd748",
  "intestine": "d4423ba0c8f08ac7652396e2530482f874e4964a9c3f1b71440f0493048bea26",
  "kidneys": "e3e0a58372d794d68b181d1d453ff4362da972667c28711e153c5f34064cf165",
  "liver": "e4f11a9c0762eb9dc4309dcd0d5c3e3958ccacab915267da4e7775894b674990",
  "lungs": "81617c9fc2f2b7bf1e7d874b89614c89b09f2f68318e64997c68c948cfa9abdc",
  "pancreas": "e5213bf8ed66e8ed4eb2a9d1c7a6922fb926eac85de8c5979e780ca1abcaf1c3",
  "skin": "8183ffe3527b3f071c41c55e41ffaf673df8d02a1405e95e644ac5d89cd6f5f9"
});
const originalNine=Object.freeze(ATELIER_ORGANS.filter(asset=>RELEASED_SHA256[asset.id]===asset.sourceSHA256).map(asset=>Object.freeze({...asset,deliveryScope:'nas-public-website',publicationApproved:true,rights:Object.freeze({...asset.rights,publicWebsiteUseAuthorized:true})})));


// Founder-authorized website promotion of explicitly identified models.
// Prior appearance-only records remain historical; no anatomical validation or
// unrestricted third-party redistribution license is asserted by this release.
const NOVEMBER_5_ADDITIONS_SHA256=Object.freeze({
 'internal-heart-cutaway':'651172e11c3b8aacee8fee57c5060a68f8ff0800552f1886c752c4bfbc2d6bf0',
 'normal-rbc':'8f6f1bec9b688bf794eaf8eb5586030770b4425de7d2879241158c9666a222bf',
 'lymphocyte':'0f863c95a2f253c5c621eb7cf2d22a7f5a15bd628881d14cc605b1dbf407f6c1',
 'eosinophil':'c817e35642155ba29145198bfb1908aec7b86f99c179bbcbb1dd82b4d5b40faf'
});
export const PUBLIC_ADDITIONS_SHA256=Object.freeze({
 ...NOVEMBER_5_ADDITIONS_SHA256,
 'platelet-resting':'e8e5e937a06d16eb71c1f90ba8472530885a4888d3f63ab882fa67f071a2d8f7',
 'platelet-activated':'ec1dda33154a0d58d507afdbe313d5eed759a84795e83efdc6e8674a46b7ee44'
});
const additions=PRIVATE_STUDIO_MODELS.filter(asset=>PUBLIC_ADDITIONS_SHA256[asset.id]===asset.sourceSHA256).map(asset=>Object.freeze({...asset,deliveryScope:'nas-public-website',publicationApproved:true,rights:Object.freeze({...asset.rights,publicWebsiteUseAuthorized:true})}));
if(originalNine.length!==9||additions.length!==6)throw Error('The public Studio model identities do not match this release.');
export const PUBLIC_STUDIO_RELEASE=Object.freeze({version:'1.1.0',dateISO:'2026-11-05',addedModelIDs:Object.freeze(Object.keys(NOVEMBER_5_ADDITIONS_SHA256)),scientificValidationClaimed:false});
export const PUBLIC_STUDIO_ORGANS=Object.freeze(sortStudioModels([...originalNine,...additions]));

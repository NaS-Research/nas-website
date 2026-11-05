import {ATELIER_ORGANS} from './registry.mjs';
import {articleModelAssets} from '../anatomy-release-preview/interactive-model.mjs';
import {resolveArticleDeliveryAsset} from '../anatomy-release-preview/delivery-tier.mjs';
import {mobileDeliveryManifest} from '../anatomy-release-preview/mobile-delivery-manifest.mjs';
import {modelPreviewStill} from '../anatomy-release-preview/model-preview-stills.mjs';
// Additions are private Studio consumers only. Original/public nine-entry registries
// and the exact approved source identities remain unchanged.
const details={
 'internal-heart-cutaway':{label:'Heart cutaway',system:'Cardiovascular system',subtitle:'A view inside',description:'A static cutaway view of the heart’s inner chambers.',view:'Illustrative cutaway model'},
 'lymphocyte':{label:'Lymphocyte',system:'Immune system',subtitle:'Cell form',description:'An illustrative lymphocyte model. Rotate to examine its visible surface.',view:'Illustrative cell model'},
 'normal-rbc':{label:'Red blood cell',system:'Cardiovascular system',subtitle:'A biconcave form',description:'A normal red blood cell model showing its biconcave shape.',view:'Illustrative cell model'},
};
const reviewed=articleModelAssets.map(base=>{
 const compact=resolveArticleDeliveryAsset(base,'mobile',mobileDeliveryManifest);
 if(!compact||!details[base.id])throw Error('The reviewed Studio delivery is missing.');
 return Object.freeze({...compact,label:details[base.id].label,sourceLabel:base.label,
  deliveryScope:'loopback-admin-only',publicationApproved:false,
  rights:Object.freeze({...compact.rights,privateLocalUseAuthorized:true}),
  thumbnailURL:modelPreviewStill(base.id)?.src,studioInfo:Object.freeze(details[base.id])});
});
const eosinophil=Object.freeze({
 id:'eosinophil',label:'Eosinophil',
 deliveryURL:'/studio/anatomy/nas/eosinophil-c817e35642155ba2.glb',
 sourceSHA256:'c817e35642155ba29145198bfb1908aec7b86f99c179bbcbb1dd82b4d5b40faf',
 bytes:61249636,byteBudget:61249636,deliveryApproved:true,
 deliveryScope:'loopback-admin-only',publicationApproved:false,
 rights:Object.freeze({privateLocalUseAuthorized:true,publicWebsiteUseAuthorized:false,externalRedistributionLicenseClaimed:false}),
 preserveMaterials:true,sourceIdentityVerified:true,webExportReviewed:false,
 provenance:'Exact existing88fc893c source GLB in the founder appearance-approval record dated2026-11-03. Appearance approval only; no independent internal-nucleus review, anatomical validation or public release inferred.',
 approvalRecord:'Eosinophil-Appearance-Approval-v01.json',
 structures:Object.freeze([{id:'eosinophil',label:'Eosinophil'}]),
 studioInfo:Object.freeze({system:'Immune system',subtitle:'Cell form',description:'An illustrative eosinophil model. Rotate to examine its visible form.',view:'Illustrative cell model'})
});
const collator=new Intl.Collator('en',{sensitivity:'base',numeric:true});
export function sortStudioModels(models){return [...models].sort((a,b)=>collator.compare(a.label,b.label)||a.id.localeCompare(b.id,'en'));}
export const PRIVATE_STUDIO_MODELS=Object.freeze(sortStudioModels([...ATELIER_ORGANS,...reviewed,eosinophil]));

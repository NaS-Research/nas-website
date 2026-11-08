import {ATELIER_ORGANS} from './registry.mjs';
import {articleModelAssets} from '../anatomy-release-preview/interactive-model.mjs';
import {resolveArticleDeliveryAsset} from '../anatomy-release-preview/delivery-tier.mjs';
import {mobileDeliveryManifest} from '../anatomy-release-preview/mobile-delivery-manifest.mjs';
import {modelPreviewStill} from '../anatomy-release-preview/model-preview-stills.mjs';
// Candidate deliveries default to private. The public registry promotes exact approved identities.
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
const platelets=Object.freeze([
 Object.freeze({
  id:"platelet-resting",label:"Platelet (resting)",
  thumbnailURL:"/studio/anatomy/nas/platelet-resting.webp",
  deliveryURL:"/studio/anatomy/nas/platelet-resting-e8e5e937a06d16eb.glb",sourceSHA256:"e8e5e937a06d16eb71c1f90ba8472530885a4888d3f63ab882fa67f071a2d8f7",
  bytes:32659172,byteBudget:32659172,deliveryApproved:true,
  deliveryScope:'loopback-admin-only',publicationApproved:false,
  rights:Object.freeze({privateLocalUseAuthorized:true,publicWebsiteUseAuthorized:false,externalRedistributionLicenseClaimed:false}),
  preserveMaterials:true,sourceIdentityVerified:true,webExportReviewed:true,
  provenance:"Approved resting platelet v02, lossless Meshopt website export.",
  structures:Object.freeze([{id:"platelet-resting",label:"Platelet (resting)"}]),
  studioInfo:Object.freeze({system:'Cardiovascular system',subtitle:'Cell form',description:"Rotate the model to examine the shape and surface of a resting platelet.",view:'Illustrative cell model'}),
 }),
 Object.freeze({
  id:"platelet-activated",label:"Platelet (activated)",
  thumbnailURL:"/studio/anatomy/nas/platelet-activated.webp",
  deliveryURL:"/studio/anatomy/nas/platelet-activated-ec1dda33154a0d58.glb",sourceSHA256:"ec1dda33154a0d58d507afdbe313d5eed759a84795e83efdc6e8674a46b7ee44",
  bytes:31588576,byteBudget:31588576,deliveryApproved:true,
  deliveryScope:'loopback-admin-only',publicationApproved:false,
  rights:Object.freeze({privateLocalUseAuthorized:true,publicWebsiteUseAuthorized:false,externalRedistributionLicenseClaimed:false}),
  preserveMaterials:true,sourceIdentityVerified:true,webExportReviewed:true,
  provenance:"Approved activated platelet v01, lossless Meshopt website export.",
  structures:Object.freeze([{id:"platelet-activated",label:"Platelet (activated)"}]),
  studioInfo:Object.freeze({system:'Cardiovascular system',subtitle:'Cell form',description:"Rotate the model to examine the surface projections of an activated platelet.",view:'Illustrative cell model'}),
 }),
]);
const plateletOrder=new Map(platelets.map((model,index)=>[model.id,index]));
const collator=new Intl.Collator('en',{sensitivity:'base',numeric:true});
const sortLabel=model=>plateletOrder.has(model.id)?'Platelet':model.label;
export function sortStudioModels(models){return [...models].sort((a,b)=>collator.compare(sortLabel(a),sortLabel(b))||(plateletOrder.get(a.id)??0)-(plateletOrder.get(b.id)??0)||a.id.localeCompare(b.id,'en'));}
export const PRIVATE_STUDIO_MODELS=Object.freeze(sortStudioModels([...ATELIER_ORGANS,...reviewed,eosinophil,...platelets]));

// Opt-in local QA only. Never represents appearance acceptance or permits public candidate delivery.
import {articleModelAssets,articleModelReady} from './interactive-model.mjs';
import {mobileDeliveryGeometryReady,resolveArticleDeliveryAsset} from './delivery-tier.mjs';
const loopback=host=>['127.0.0.1','localhost','[::1]'].includes(host);
export function resolvePrivateDeliverySlides(slides,tier,manifest,{enabled=false,hostname=''}={}) {
 return slides.map(slide=>{if(!slide.interactiveAsset)return slide;const base=slide.interactiveAsset;let asset=resolveArticleDeliveryAsset(base,tier,manifest);
 if(!asset&&tier==='mobile'&&enabled&&loopback(hostname)&&manifest?.privateQAOnly===true){const candidates=manifest.assets?.filter(a=>a.modelId===base.id)||[];if(candidates.length===1&&mobileDeliveryGeometryReady(base,candidates[0])){const a=candidates[0];asset=Object.freeze({...base,deliveryURL:a.deliveryURL,sourceSHA256:a.sourceSHA256,bytes:a.bytes,byteBudget:a.bytes,deliveryTier:'mobile',originalSourceSHA256:base.sourceSHA256,deliveryScope:'loopback-admin-only',publicationApproved:false,rights:{privateLocalUseAuthorized:true},privateGeometryReview:true,privateDeliveryRecord:a});}}
 return {...slide,interactiveAsset:asset,deliveryPending:!asset};});
}
export function privateInteractiveAssetReady(asset,{hostname=typeof window==='undefined'?'':window.location.hostname}={}) {
 if(articleModelReady(asset))return true;const base=articleModelAssets.find(a=>a.id===asset?.id);
 return Boolean(loopback(hostname)&&asset?.privateGeometryReview===true&&asset.deliveryScope==='loopback-admin-only'&&asset.publicationApproved===false&&asset.rights?.privateLocalUseAuthorized===true&&mobileDeliveryGeometryReady(base,asset.privateDeliveryRecord)&&asset.sourceSHA256===asset.privateDeliveryRecord.sourceSHA256&&asset.deliveryURL===asset.privateDeliveryRecord.deliveryURL&&asset.bytes===asset.privateDeliveryRecord.bytes);
}

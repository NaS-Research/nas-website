import {articleModelReady,ARTICLE_MODEL_BYTE_CAP} from './interactive-model.mjs';
const hash=value=>/^[a-f0-9]{64}$/.test(value||'');
// Called once per mounted gallery, before either model prefetch or runtime mounting.
// Any touch capability keeps the smaller tier even on a large/landscape viewport.
export function chooseArticleDeliveryTier({touchPoints=0,coarsePointer=false,width=0}={}) {
 return touchPoints>0||coarsePointer||!Number.isFinite(width)||width<=900?'mobile':'desktop';
}
export function browserArticleDeliveryTier(browser) {
 let coarse=true;try{coarse=Boolean(browser.matchMedia('(any-pointer: coarse)').matches);}catch{}
 return chooseArticleDeliveryTier({touchPoints:browser.navigator?.maxTouchPoints||0,coarsePointer:coarse,width:browser.innerWidth});
}
export function createArticleDeliverySession() {
 let selected=null;return Object.freeze({choose(browser){if(selected===null)selected=browserArticleDeliveryTier(browser);return selected;}});
}
export function mobileDeliveryGeometryReady(base,record) {
 return Boolean(articleModelReady(base)&&record?.modelId===base.id&&record.originalSourceSHA256===base.sourceSHA256&&hash(record.sourceSHA256)&&Number.isSafeInteger(record.bytes)&&record.bytes>0&&record.bytes<=ARTICLE_MODEL_BYTE_CAP&&typeof record.deliveryURL==='string'&&record.deliveryURL.startsWith('/anatomy-release-preview/models/mobile/')&&record.deliveryURL.endsWith('-'+record.sourceSHA256.slice(0,16)+'.glb')&&record.geometryByteEqualityVerified===true&&record.textureWidth===2048&&record.textureHeight===2048&&hash(record.geometryReceiptSHA256));
}
export function mobileDeliveryReady(base,record) {return mobileDeliveryGeometryReady(base,record)&&record.matchedViewAppearanceAccepted===true&&hash(record.appearanceReceiptSHA256);}
export function resolveArticleDeliveryAsset(base,tier,manifest) {
 if(!articleModelReady(base))return null;
 // Use the reviewed compact delivery on desktop too; preserve the original source identity.
 if(!['mobile','desktop'].includes(tier)||manifest?.version!==1||!Array.isArray(manifest.assets))return null;
 const matches=manifest.assets.filter(a=>a?.modelId===base.id);if(matches.length!==1||!mobileDeliveryReady(base,matches[0]))return null;
 const a=matches[0];
 // Restrict substitutions to delivery fields. Keep logical ID, shape controls, captions and rights.
 return Object.freeze({...base,deliveryURL:a.deliveryURL,sourceSHA256:a.sourceSHA256,bytes:a.bytes,byteBudget:a.bytes,deliveryTier:'mobile',originalSourceSHA256:base.sourceSHA256,geometryReceiptSHA256:a.geometryReceiptSHA256,appearanceReceiptSHA256:a.appearanceReceiptSHA256});
}
export function resolveArticleDeliverySlides(slides,tier,manifest) {
 return slides.map(slide=>{if(!slide.interactiveAsset)return slide;const asset=resolveArticleDeliveryAsset(slide.interactiveAsset,tier,manifest);return {...slide,interactiveAsset:asset,deliveryPending:!asset};});
}

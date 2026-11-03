export const initialSlide=count=>count>2?1:0;
export function nextSlide(index,action,count){if(!Number.isInteger(count)||count<1)return 0;const last=count-1;if(action==='Home')return 0;if(action==='End')return last;const delta=action==='previous'||action==='ArrowLeft'?-1:action==='next'||action==='ArrowRight'?1:0;return ((index+delta)%count+count)%count;}
export const CAROUSEL_DURATION=650;
export function carouselEase(t){t=Math.max(0,Math.min(1,t));return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}
export function centeredScrollLeft(slide,rail){return Math.max(0,Math.min(Math.max(0,rail.scrollWidth-rail.clientWidth),slide.offsetLeft-(rail.clientWidth-slide.clientWidth)/2));}
export function nearestSlide(slides,center){if(!slides.length)return 0;let nearest=0,distance=Infinity;slides.forEach((rect,i)=>{const d=Math.abs(rect.left+rect.width/2-center);if(d<distance){distance=d;nearest=i;}});return nearest;}
export function acceptableStill(asset){if(asset?.kind==='template-placeholder')return Boolean(asset.isPlaceholder===true&&asset.privatePreviewUseVerified===true&&asset.src?.startsWith('/anatomy-release-preview/')&&asset.sha256?.match(/^[a-f0-9]{64}$/));return Boolean(asset?.src?.startsWith('/anatomy-release-preview/')&&asset.nativeWidth>=1600&&asset.nativeHeight>=900&&asset.sha256?.match(/^[a-f0-9]{64}$/)&&asset.privatePreviewUseVerified===true&&asset.backgroundBlackVerified===true&&asset.kind==='model-still'&&asset.provenance&&!asset.rejected);}
export function demoReady(demo){return Boolean(demo?.src&&demo?.poster&&demo?.capturedFromStudio===true&&demo?.reviewed===true);}

export function formatPhysicianQuote(quote){const passage=String(quote??'').replace(/\s+/g,' ').trim().replace(/^[“”"()]+|[“”"()]+$/g,'').trim();return passage?'“'+passage+'”':'';}

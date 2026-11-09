"use client";
import {useCallback,useEffect,useRef,useState} from 'react';
import {posterImageAttributes} from '@/lib/anatomy-release-preview/poster-image.mjs';
import {modelPreviewStill} from '@/lib/anatomy-release-preview/model-preview-stills.mjs';
import {preparationMargin,shouldPrepareModel} from '@/lib/anatomy-release-preview/anticipation.mjs';
import styles from './interactive-model.module.css';
import {privateInteractiveAssetReady} from '@/lib/anatomy-release-preview/private-delivery-review.mjs';
export default function ArticleInteractiveModel({asset,embedded=false,byteStore}){
 if(!privateInteractiveAssetReady(asset))return null;
 return <InteractiveModel asset={asset} embedded={embedded} byteStore={byteStore}/>;
}

export function InteractiveModel({asset,embedded=false,byteStore}){
 const host=useRef(null),generation=useRef(0);const [near,setNear]=useState(false),[visible,setVisible]=useState(false),[Runtime,setRuntime]=useState(null),[status,setStatus]=useState({status:'idle'}),[retry,setRetry]=useState(0);
 const report=useCallback(value=>setStatus(value),[]);
 useEffect(()=>{let observer;const observe=()=>{observer?.disconnect();if(!host.current)return;if('IntersectionObserver' in window){observer=new IntersectionObserver(entries=>setNear(Boolean(entries[0]?.isIntersecting)),{rootMargin:preparationMargin(innerHeight),threshold:0});observer.observe(host.current);}else{const b=host.current.getBoundingClientRect();setNear(b.top<innerHeight*2&&b.bottom>-innerHeight);}};observe();window.addEventListener('resize',observe);if(!('IntersectionObserver' in window))window.addEventListener('scroll',observe,{passive:true});return()=>{observer?.disconnect();window.removeEventListener('resize',observe);window.removeEventListener('scroll',observe);};},[]);
 useEffect(()=>{const show=()=>setVisible(document.visibilityState==='visible'),hide=()=>setVisible(false);show();document.addEventListener('visibilitychange',show);document.addEventListener('freeze',hide);window.addEventListener('pagehide',hide);window.addEventListener('pageshow',show);return()=>{document.removeEventListener('visibilitychange',show);document.removeEventListener('freeze',hide);window.removeEventListener('pagehide',hide);window.removeEventListener('pageshow',show);};},[]);
 const eligible=shouldPrepareModel({near,visible});
 useEffect(()=>{const token=++generation.current;setRuntime(null);if(!eligible){setStatus({status:'idle'});return;}setStatus({status:'preparing',message:'Preparing model…'});import('./ArticleModelRuntime').then(module=>{if(token===generation.current)setRuntime(()=>module.default);},()=>{if(token===generation.current)setStatus({status:'error',message:'The model viewer could not load. Try again.'});});return()=>{generation.current++;};},[eligible,asset.id,retry]);
 const failed=['error','context-lost','blocked'].includes(status.status),pending=['preparing','loading','idle'].includes(status.status),poster=modelPreviewStill(asset.id),ready=status.status==='ready'&&status.frameReady===true;
 return <section ref={host} className={embedded?styles.embedded:styles.embed} aria-label={asset.label+' interactive preview'} data-model-autoload="true" data-preparation={visible?(near?'near':'outside'):'hidden'}><div className={styles.stage} data-model-ready={ready}>{poster&&!failed&&<img className={styles.poster} {...posterImageAttributes(poster)} alt="" aria-hidden="true" loading="eager" decoding="async"/>}{eligible&&Runtime&&<Runtime asset={asset} onStatus={report} retryToken={retry} byteStore={byteStore}/>}</div><div className={styles.statusOutside} aria-live="polite">{eligible&&pending&&<p className={styles.srOnly} role="status">Preparing interactive model</p>}{eligible&&failed&&<><p role="alert">{status.message}</p><button type="button" onClick={()=>setRetry(n=>n+1)}>Try again</button></>}</div></section>;
}

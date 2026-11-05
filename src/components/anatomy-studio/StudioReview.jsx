"use client";
import {useCallback, useEffect, useMemo, useState, useRef} from 'react';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import {Box3,Group,Vector3} from 'three';
import {REGIONS} from '@/lib/anatomy-studio/regions.mjs';
import {PRIVATE_STUDIO_MODELS,sortStudioModels} from '@/lib/anatomy-studio/studio-model-catalog.mjs';
import {PUBLIC_STUDIO_ORGANS} from '@/lib/anatomy-studio/public-registry.mjs';
import {initialSelection, reduceSelection, searchStructures, indexScene} from '@/lib/anatomy-studio/selection.mjs';
import {createOrganLoader} from '@/lib/anatomy-studio/loader.mjs';
import StudioViewport from './StudioViewport';
import styles from './studio.module.css';

function disposeModel(root) {
 const geometries = new Set(), materials = new Set(), textures = new Set();
 root.traverse(node => {
  if (node.geometry) geometries.add(node.geometry);
  for (const material of [node.material].flat().filter(Boolean)) {
   materials.add(material);
   for (const value of Object.values(material)) if (value?.isTexture) textures.add(value);
  }
 });
 textures.forEach(item => item.dispose()); materials.forEach(item => item.dispose()); geometries.forEach(item => item.dispose());
}
async function parseModel(bytes, asset) {
 const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(bytes,'');
 const root=new Group();root.name=asset.id;
 const box=new Box3().setFromObject(gltf.scene),size=box.getSize(new Vector3()),center=box.getCenter(new Vector3());
 const scale=3.8/Math.max(size.x,size.y,size.z,.001);gltf.scene.scale.setScalar(scale);gltf.scene.position.copy(center.multiplyScalar(-scale));root.add(gltf.scene);
 try{indexScene(root,asset.structures);return root;}catch(error){disposeModel(root);throw error;}
}
const ORGAN_INFO = {
 heart:{system:'Cardiovascular system',subtitle:'The rhythm of life',description:'A muscular organ that keeps blood moving through the lungs and the rest of the body.'},
 brain:{system:'Nervous system',subtitle:'A world of connections',description:'Explore the folded surface of the brain, along with the cerebellum and brainstem visible in this model.'},
 lungs:{system:'Respiratory system',subtitle:'Every breath, an exchange',description:'The lungs bring air and blood into close contact, allowing oxygen and carbon dioxide to move between them.'},
 liver:{system:'Digestive system',subtitle:'An organ of transformation',description:'The liver processes nutrients, produces bile, and carries out many of the body’s metabolic functions.'},
 kidneys:{system:'Urinary system',subtitle:'Balance, continuously',description:'The kidneys filter blood and help regulate fluid, electrolytes, and acid–base balance.'},
 eyeball:{system:'Sensory system',subtitle:'A window into vision',description:'Explore the surface of the eye and its visible surrounding structures from different angles.'},
 intestine:{system:'Digestive system',subtitle:'A remarkable journey',description:'The small and large intestines form a continuous passage involved in digestion, absorption, and the movement of waste.'},
 pancreas:{system:'Digestive & endocrine systems',subtitle:'A quiet regulator',description:'The pancreas contributes digestive enzymes and hormones that help regulate blood glucose.'},
 skin:{system:'Integumentary system',subtitle:'The boundary that connects us',description:'This cutaway illustration brings the skin’s layered organization, hair follicles, and underlying tissues into view.'},
};
function Icon({name,size=20}) {
 const paths={search:<><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/></>,rotate:<><path d="M20 7v5h-5M4 17v-5h5"/><path d="M6.3 7a7 7 0 0 1 11.8-1L20 9M4 15l1.9 3a7 7 0 0 0 11.8-1"/></>,zoom:<><circle cx="10" cy="10" r="6"/><path d="m15 15 5 5M7 10h6m-3-3v6"/></>,minus:<><circle cx="10" cy="10" r="6"/><path d="m15 15 5 5M7 10h6"/></>,reset:<><path d="M4 4v6h6M4.5 10a8 8 0 1 1 1 7"/></>,eye:<><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></>,expand:<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>,grid:<><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,arrow:<path d="m9 5 7 7-7 7"/>,book:<><path d="M12 5v15M3 4c4-1 6-1 9 1 3-2 5-2 9-1v15c-4-1-6-1-9 1-3-2-5-2-9-1Z"/></>,sliders:<><path d="M4 6h16M4 12h16M4 18h16"/><circle cx="8" cy="6" r="2"/><circle cx="16" cy="12" r="2"/><circle cx="10" cy="18" r="2"/></>};
 return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.grid}</svg>;
}
export default function StudioReview({publicAccess=false}) {
 const catalog=publicAccess?PUBLIC_STUDIO_ORGANS:PRIVATE_STUDIO_MODELS;
 const [organId,setOrganId]=useState('heart');
 const organ=catalog.find(item=>item.id===organId),info=ORGAN_INFO[organId]||organ.studioInfo;
 const [load,setLoad]=useState({status:'idle',message:'Preparing the explorer…'});
 const [selection,setSelection]=useState(initialSelection);
 const [query,setQuery]=useState('');
 const [reducedMotion,setReducedMotion]=useState(true);
 const [autoRotate,setAutoRotate]=useState(false);
 const [regionId,setRegionId]=useState(null);
 const [showRegions,setShowRegions]=useState(true);
 const regions=REGIONS[organId]||[];
 const selectedRegion=regions.find(item=>item.id===regionId);
 const detailHeading=useRef(null);
 const selectRegion=id=>{if(!regions.some(item=>item.id===id))return;setRegionId(id);setAutoRotate(false);};
 const learnRegion=()=>{detailHeading.current?.focus({preventScroll:true});detailHeading.current?.scrollIntoView({behavior:reducedMotion?'auto':'smooth',block:'nearest'});};
 const [cameraCommand,setCameraCommand]=useState(null);
 const stage=useRef(null),libraryList=useRef(null);
 const reportView=useCallback(view=>{if(stage.current)stage.current.dataset.viewState=JSON.stringify(view);},[]);
 useEffect(()=>{if(stage.current)delete stage.current.dataset.viewState;},[organId]);
 useEffect(()=>{const list=libraryList.current,selected=list?.querySelector('[aria-pressed="true"]');if(!list||!selected)return;const viewport=list.getBoundingClientRect(),item=selected.getBoundingClientRect();if(item.top<viewport.top)list.scrollTop-=viewport.top-item.top;else if(item.bottom>viewport.bottom)list.scrollTop+=item.bottom-viewport.bottom;},[organId,query]);
 const loader=useMemo(()=>createOrganLoader({parse:parseModel,dispose:disposeModel,notify:setLoad}),[]);
 const ids=useMemo(()=>new Set(organ.structures.map(part=>part.id)),[organ]);
 const dispatch=useCallback(event=>setSelection(state=>reduceSelection(state,event,ids)),[ids]);
 useEffect(()=>{const media=window.matchMedia('(prefers-reduced-motion: reduce)');const update=()=>{setReducedMotion(media.matches);if(media.matches)setAutoRotate(false);};update();media.addEventListener('change',update);return()=>media.removeEventListener('change',update);},[]);
 useEffect(()=>{loader.load(organ);return()=>loader.dispose();},[loader,organ]);
 // Never mount a previous organ with the next organ’s structure mapping.
 const ready=load.status==='ready' && load.assetId===organ.id;
 const choose=id=>{if(id===organId)return;setRegionId(null);setAutoRotate(false);setSelection(initialSelection());setCameraCommand(null);setOrganId(id);};
 const command=type=>setCameraCommand({type,serial:Date.now()+Math.random()});
 const reset=()=>{setRegionId(null);dispatch({type:'reset'});command('reset');};
 const visibleOrgans=sortStudioModels(catalog).filter(item=>`${item.label} ${(ORGAN_INFO[item.id]||item.studioInfo).system}`.toLowerCase().includes(query.trim().toLowerCase()));
 const hidden=selection.hidden.includes(organ.id);
 return <section className={styles.studio} aria-labelledby="studio-title">
  <header className={styles.appbar}>
   <div className={styles.brand}><h1 id="studio-title">The Anatomy Studio</h1></div>
   <label className={styles.search}><Icon name="search" size={17}/><span className={styles.srOnly}>Search models or systems</span><input value={query} onChange={e=>setQuery(e.target.value)} type="search" placeholder="Search models, systems…"/></label>
  </header>
  <div className={styles.workspace}>
   <aside className={styles.library} aria-label="Model library">
    <div className={styles.panelHeading}><h2>Model library</h2><Icon name="book" size={16}/></div>
    <nav aria-label="Choose a model" tabIndex={0} ref={libraryList} className={styles.organList}>{visibleOrgans.map(item=><button key={item.id} type="button" aria-pressed={item.id===organId} onClick={()=>choose(item.id)} className={styles.organItem}>{item.thumbnailURL||!item.studioInfo?<img src={item.thumbnailURL||`/studio/anatomy/atelier/thumbs/${item.id}.webp`} alt="" width="44" height="44" loading="lazy"/>:<span className={styles.modelIcon} aria-hidden="true"><Icon name="grid"/></span>}<span><strong>{item.label}</strong><small>{(ORGAN_INFO[item.id]||item.studioInfo).system}</small></span><span className={styles.selectedDot} aria-hidden="true"/></button>)}</nav>
    {!visibleOrgans.length&&<p className={styles.empty} role="status">No models match your search.</p>}
   </aside>
   <div className={styles.stage} ref={stage} data-studio-model={organ.id} data-model-status={ready?'ready':load.status} data-ready-model={ready?load.assetId:undefined}>
    <div className={styles.stageTop}><span><i/>3D explorer</span><button className={styles.iconButton} type="button" aria-label="Expand model view" title="Expand view" onClick={()=>{if(document.fullscreenElement)document.exitFullscreen();else stage.current?.requestFullscreen?.();}}><Icon name="expand" size={17}/></button></div>
    <div className={styles.toolRail} aria-label="Model tools">
     <button type="button" disabled={!ready} onClick={()=>command('right')} aria-label="Rotate right"><Icon name="rotate"/><span>Rotate</span></button>
     <button type="button" disabled={!ready||organ.viewMode==='front-cutaway-orbit'} onClick={()=>command('in')} aria-label="Zoom in"><Icon name="zoom"/><span>Zoom in</span></button>
     <button type="button" disabled={!ready||organ.viewMode==='front-cutaway-orbit'} onClick={()=>command('out')} aria-label="Zoom out"><Icon name="minus"/><span>Zoom out</span></button>
     <button type="button" disabled={!regions.length} aria-pressed={showRegions&&regions.length>0} onClick={()=>setShowRegions(value=>!value)} aria-label="Toggle region markers"><Icon name="grid"/><span>Labels</span></button>
     <button type="button" disabled={!ready} aria-pressed={hidden} onClick={()=>{if(hidden)dispatch({type:'reset'});else{dispatch({type:'select',id:organ.id});dispatch({type:'hide'});}}}><Icon name="eye"/><span>{hidden?'Show':'Hide'}</span></button>
     <span className={styles.railRule}/>
     <button type="button" disabled={!ready} onClick={reset} aria-label="Reset view"><Icon name="reset"/><span>Reset</span></button>
    </div>
    <div className={styles.viewport}>
     {ready?<StudioViewport onViewState={reportView} preserveMaterials={organ.preserveMaterials===true} orbitOptions={organ.viewProfile||{}} interactionMode={organ.viewMode==='front-cutaway-orbit'?'rotation-only':'standard'} model={load.model} structures={organ.structures} selection={selection} reducedMotion={reducedMotion} regions={regions} selectedRegion={regionId} showRegions={showRegions} onSelectRegion={selectRegion} onClearRegion={()=>setRegionId(null)} onLearnRegion={learnRegion} autoRotate={autoRotate} command={cameraCommand} onSelect={id=>dispatch({type:'select',id})} onContextLost={()=>loader.contextLost()} onError={message=>{loader.reset();setLoad({status:'error',message});}}/>:<div className={styles.message}><span className={styles.loadingMark} aria-hidden="true">✦</span><h2>{['error','context-lost','blocked'].includes(load.status)?'The model is unavailable.':`Preparing the ${organ.label.toLowerCase()}…`}</h2><p role="status" aria-live="polite">{load.message}</p>{['error','context-lost'].includes(load.status)&&<button type="button" onClick={()=>{dispatch({type:'reset'});loader.load(organ);}}>Try again</button>}</div>}
    </div>
    <div className={styles.stageBottom}><div><span>Select a dot to explore</span><strong>{organ.label}</strong></div><button className={styles.autoRotate} type="button" role="switch" aria-checked={autoRotate} disabled={!ready||reducedMotion||organ.viewMode==='front-cutaway-orbit'} title={reducedMotion?'Reduced motion is enabled':'Slowly rotate the organ'} onClick={()=>setAutoRotate(value=>!value)}><Icon name="rotate" size={14}/><span>Auto rotate</span><i/></button></div>
   </div>
   <aside className={styles.details} aria-label="About this model">
    <div className={styles.detailTitle}>{selectedRegion&&<button className={styles.backToOrgan} type="button" onClick={()=>setRegionId(null)}>← {organ.label} overview</button>}<p className={styles.eyebrow}>{selectedRegion?'Explore a region':`The ${organ.label.toLowerCase()}`}</p><h2 ref={detailHeading} tabIndex={-1} className={selectedRegion?styles.regionTitle:undefined}>{selectedRegion?.label||organ.label}</h2><p className={styles.subtitle}>{selectedRegion?.short||info.subtitle}</p></div>
    <p className={styles.description}>{selectedRegion?.description||info.description}</p>
    {selectedRegion&&<a className={styles.referenceLink} href={selectedRegion.sourceURL} target="_blank" rel="noreferrer">{selectedRegion.sourceLabel} <span aria-hidden="true">↗</span></a>}
    {regions.length>0&&<div className={styles.regionIndex}><h3>Explore this organ</h3><nav aria-label={`Regions of ${organ.label}`}>{regions.map(region=><button type="button" key={region.id} aria-pressed={region.id===regionId} onClick={()=>selectRegion(region.id)}><i aria-hidden="true"/><span>{region.label}</span><span aria-hidden="true">↗</span></button>)}</nav></div>}
    <div className={styles.facts}><h3>At a glance</h3><div><span>System</span><strong>{info.system}</strong></div><div><span>View</span><strong>{info.view||'Illustrative surface model'}</strong></div></div>
    <div className={styles.detailNote}><Icon name="eye" size={18}/><p>{regions.length?'Markers identify illustrative regions, not separately segmented tissues. Rotate the model to see different surfaces.':'Rotate the model to examine its visible form. This illustration does not simulate cell function or physiology.'}</p></div>
    <div className={styles.detailFoot}><span>NaS Research</span><span>{publicAccess?"Anatomy Studio":"Private preview"}</span></div>
   </aside>
  </div>
  <footer className={styles.credit}><span>{organ.viewMode==='front-cutaway-orbit'?'Drag to rotate':'Drag to rotate · Scroll to zoom · Right-drag to pan'}</span></footer>
 </section>;
}

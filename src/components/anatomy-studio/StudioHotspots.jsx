"use client";
import {useEffect,useMemo,useRef} from 'react';
import {useFrame,useThree} from '@react-three/fiber';
import {Html} from '@react-three/drei';
import {CanvasTexture,SRGBColorSpace,Vector3} from 'three';
import {buildRegionAnchors} from '@/lib/anatomy-studio/region-anchors.mjs';
import styles from './studio.module.css';
function markerTexture(ring=false){
 const canvas=document.createElement('canvas');canvas.width=canvas.height=128;const c=canvas.getContext('2d');
 c.clearRect(0,0,128,128);c.beginPath();c.arc(64,64,ring?53:40,0,Math.PI*2);
 c.strokeStyle=ring?'#dfbe83':'#fff1d6';c.lineWidth=ring?4:9;
 if(!ring){c.fillStyle='#b88d4d';c.fill();}c.stroke();
 const texture=new CanvasTexture(canvas);texture.colorSpace=SRGBColorSpace;return texture;
}
function RegionDot({point,textures,selected,onSelect}){
 const dot=useRef(),ring=useRef(),hit=useRef(),down=useRef(null),hover=useRef(false),active=useRef(true);
 const {gl,invalidate}=useThree();
 const vectors=useMemo(()=>({position:new Vector3(...point.position),normal:new Vector3(...point.normal),camera:new Vector3(),direction:new Vector3()}),[point]);
 useFrame(({camera,size})=>{
  camera.getWorldPosition(vectors.camera);vectors.direction.copy(vectors.camera).sub(vectors.position).normalize();
  const visible=vectors.normal.dot(vectors.direction)>-.12;active.current=visible;
  const scale=2*(18/Math.max(size.height,1))*Math.tan((camera.fov||50)*Math.PI/360);
  if(dot.current){dot.current.visible=visible;dot.current.scale.setScalar(scale*(selected?1.15:1));}
  if(ring.current){ring.current.visible=visible&&(selected||hover.current);ring.current.scale.setScalar(scale*1.55);}
  if(hit.current){hit.current.visible=visible;hit.current.scale.setScalar(scale*2.45);}
 });
 useEffect(()=>()=>{gl.domElement.style.cursor='auto';},[gl]);
 return <group position={point.position}>
  <sprite ref={ring}><spriteMaterial map={textures.ring} transparent depthWrite={false} depthTest toneMapped={false} sizeAttenuation={false}/></sprite>
  <sprite ref={dot}><spriteMaterial map={textures.dot} transparent depthWrite={false} depthTest toneMapped={false} sizeAttenuation={false}/></sprite>
  <sprite ref={hit} onPointerDown={e=>{if(!active.current)return;e.stopPropagation();down.current=[e.clientX,e.clientY];}} onPointerUp={e=>{const start=down.current;down.current=null;if(!active.current||!start||Math.hypot(e.clientX-start[0],e.clientY-start[1])>6)return;e.stopPropagation();onSelect(point.id);}} onPointerOver={e=>{if(!active.current)return;e.stopPropagation();hover.current=true;gl.domElement.style.cursor='pointer';invalidate();}} onPointerOut={()=>{hover.current=false;gl.domElement.style.cursor='auto';invalidate();}}><spriteMaterial transparent opacity={0} depthWrite={false} depthTest={false} sizeAttenuation={false}/></sprite>
 </group>;
}
function Callout({point,model,onClose,onLearn}){
 const card=useRef();const occluders=useMemo(()=>[{current:model}],[model]);const world=useMemo(()=>new Vector3(...point.position),[point]);const projected=useMemo(()=>new Vector3(),[]);
 useFrame(({camera,size})=>{if(!card.current)return;projected.copy(world).project(camera);const y=(1-projected.y)*size.height/2;card.current.style.transform=`translate(${projected.x>0?'calc(-100% - 15px)':'15px'},${y<90?'0':y>size.height-90?'-100%':'-50%'})`;});
 return <Html position={point.position} occlude={occluders} zIndexRange={[35,10]} onOcclude={hidden=>{if(card.current)card.current.style.visibility=hidden?'hidden':'visible';}}><div ref={card} className={styles.regionCallout} role="group" aria-label={`${point.label} quick view`} onPointerDown={e=>e.stopPropagation()}><button className={styles.calloutClose} type="button" aria-label="Close region" onClick={onClose}>×</button><small>Explore region</small><strong>{point.label}</strong><p>{point.short}</p><button className={styles.learnRegion} type="button" onClick={onLearn}>Learn more <span aria-hidden="true">↗</span></button></div></Html>;
}
export default function StudioHotspots({model,regions,selectedRegion,onSelectRegion,onClearRegion,onLearnRegion,hidden}){
 const points=useMemo(()=>buildRegionAnchors(model,regions),[model,regions]);
 const textures=useMemo(()=>({dot:markerTexture(),ring:markerTexture(true)}),[]);
 useEffect(()=>()=>{textures.dot.dispose();textures.ring.dispose();},[textures]);
 if(hidden)return null;
 const chosen=points.find(point=>point.id===selectedRegion);
 return <group>{points.map(point=><RegionDot key={point.id} point={point} textures={textures} selected={point.id===selectedRegion} onSelect={onSelectRegion}/>)}{chosen&&<Callout point={chosen} model={model} onClose={onClearRegion} onLearn={onLearnRegion}/>}</group>;
}

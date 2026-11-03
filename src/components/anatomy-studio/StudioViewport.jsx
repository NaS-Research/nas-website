"use client";
import {Component, useEffect, useMemo, useRef} from 'react';
import {Canvas, useThree, useFrame} from '@react-three/fiber';
import {Bounds, OrbitControls, useBounds} from '@react-three/drei';
import {Spherical, Vector3} from 'three';
import StudioHotspots from './StudioHotspots';
import {appearance, indexScene} from '@/lib/anatomy-studio/selection.mjs';
import {frontOrbitWindow,clampFrontOrbit} from '@/lib/anatomy-release-preview/orbit-window.mjs';

export class ViewportBoundary extends Component {
 state = {failed:false};
 static getDerivedStateFromError() {return {failed:true};}
 componentDidCatch(error) {this.props.onError(error.message || 'Graphics initialization failed.');}
 render() {return this.state.failed ? <p role="alert">Graphics initialization failed.</p> : this.props.children;}
}
function Heart({model, structures, selection, onSelect, preserveMaterials=false}) {
 const index = useMemo(() => indexScene(model, structures), [model, structures]);
 const pointer = useRef(null);
 useEffect(() => {
  const saved = [];
  model.traverse(node => {
   if (!node.isMesh) return;
   const originals = node.material; saved.push([node, originals, node.visible]);
   node.material = Array.isArray(originals) ? originals.map(item => item.clone()) : originals.clone();
   if (!preserveMaterials) for (const material of [node.material].flat()) {
    material.roughness = Math.max(.42, Math.min(.62, material.roughness ?? .5)); material.metalness = 0;
    if (material.normalMap) material.normalScale.multiplyScalar(.62);
   }
  });
  return () => {for (const [node, materials, visible] of saved) {
   [node.material].flat().forEach(material => material.dispose()); node.material = materials; node.visible = visible;
  }};
 }, [model,preserveMaterials]);
 const {invalidate} = useThree();
 useEffect(() => {
  model.traverse(node => {
   if (!node.isMesh) return;
   const state = appearance(index.resolve(node), selection); node.visible = state.visible;
   if (!preserveMaterials || state.opacity!==1 || state.selected) for (const material of [node.material].flat()) {
    material.transparent = state.opacity < 1; material.opacity = state.opacity;
    material.depthWrite = state.opacity >= 1;
    material.emissive?.set(state.selected ? '#6f4c20' : '#000000');
    material.emissiveIntensity = state.selected ? .25 : 0; material.needsUpdate = true;
   }
  }); invalidate();
 }, [model, index, selection, invalidate, preserveMaterials]);
 return <primitive object={model} onPointerDown={event => {pointer.current={x:event.clientX,y:event.clientY};}} onPointerUp={event => {
  const start = pointer.current; pointer.current = null;
  if (!start || Math.hypot(event.clientX-start.x,event.clientY-start.y)>6) return;
  const id = index.resolve(event.object); if (id) {event.stopPropagation();onSelect(id);}
 }} onPointerCancel={() => {pointer.current=null;}} />;
}
function Scene({model, structures, selection, reducedMotion, command, onSelect, onContextLost, autoRotate, regions, selectedRegion, onSelectRegion, onClearRegion, onLearnRegion, showRegions, preserveMaterials, orbitOptions={}, interactionMode='standard', onViewState}) {
 const controls = useRef(); const bounds = useBounds(); const {camera, gl, invalidate,size} = useThree();
 const frontWindow=useMemo(()=>frontOrbitWindow(orbitOptions),[orbitOptions]);
 const resetFront=()=>{bounds.refresh(model).clip();const fit=bounds.getSize(),direction=new Vector3(...orbitOptions.frontDirection).normalize();bounds.moveTo(fit.center.clone().addScaledVector(direction,fit.distance)).lookAt({target:fit.center});invalidate();};
 useEffect(()=>{if(frontWindow)resetFront();},[model,frontWindow,bounds,size.width,size.height]);
 const viewScale=useMemo(()=>new Vector3(),[]),viewFrame=useRef(0);
 useFrame(()=>{if(frontWindow&&controls.current){const orbit=controls.current,offset=camera.position.clone().sub(orbit.target),actual=new Spherical().setFromVector3(offset),limited=clampFrontOrbit(actual,frontWindow);if(Math.abs(actual.theta-limited.theta)>1e-8||Math.abs(actual.phi-limited.phi)>1e-8){actual.theta=limited.theta;actual.phi=limited.phi;camera.position.copy(new Vector3().setFromSpherical(actual).add(orbit.target));orbit.update();invalidate();}}if(onViewState&&controls.current){const object=model.children[0]||model;onViewState({frame:++viewFrame.current,theta:controls.current.getAzimuthalAngle(),phi:controls.current.getPolarAngle(),orbitWindow:frontWindow,position:camera.position.toArray(),distance:camera.position.distanceTo(controls.current.target),fov:camera.fov,scale:object.getWorldScale(viewScale).toArray(),target:controls.current.target.toArray()});}});
 useEffect(() => {
  const canvas=gl.domElement;
  const lost=event => {event.preventDefault();onContextLost();};
  canvas.addEventListener('webglcontextlost',lost);
  return () => canvas.removeEventListener('webglcontextlost',lost);
 }, [gl, onContextLost]);
 useEffect(() => {
  const orbit = controls.current; if (!orbit || !command) return;
  if(interactionMode==='rotation-only'&&!['left','right','up','down','reset'].includes(command.type))return;
  if (command.type==='reset') {if(frontWindow)resetFront();else bounds.refresh().clip().fit();invalidate();return;}
  // Match a real pointer interaction so Bounds cancels any pending initial fit.
  orbit.dispatchEvent({type:'start'});
  const offset = camera.position.clone().sub(orbit.target), spherical=new Spherical().setFromVector3(offset);
  if (command.type==='left') spherical.theta-=.15;
  if (command.type==='right') spherical.theta+=.15;
  if (command.type==='up') spherical.phi=Math.max(.08,spherical.phi-.15);
  if (command.type==='down') spherical.phi=Math.min(Math.PI-.08,spherical.phi+.15);
  if (command.type==='in') spherical.radius=Math.max(.01,spherical.radius*.85);
  if (command.type==='out') spherical.radius=Math.min(100,spherical.radius/ .85);
  const limited=clampFrontOrbit(spherical,frontWindow);spherical.theta=limited.theta;spherical.phi=limited.phi;camera.position.copy(new Vector3().setFromSpherical(spherical).add(orbit.target));
  if (command.type.startsWith('pan-')) {
   const right=new Vector3().setFromMatrixColumn(camera.matrix,0).multiplyScalar(spherical.radius*.06*(command.type==='pan-left'?-1:1));
   camera.position.add(right);orbit.target.add(right);
  }
  orbit.update();orbit.dispatchEvent({type:'end'});invalidate();
 }, [command,camera,bounds,invalidate,interactionMode,frontWindow]);
 return <><ambientLight intensity={.65}/><directionalLight position={[2,3,4]} intensity={1.6}/><directionalLight position={[-3,1,-2]} intensity={.5}/><Heart preserveMaterials={preserveMaterials} model={model} structures={structures} selection={selection} onSelect={onSelect}/><StudioHotspots model={model} regions={regions} selectedRegion={selectedRegion} onSelectRegion={onSelectRegion} onClearRegion={onClearRegion} onLearnRegion={onLearnRegion} hidden={!showRegions || selection.hidden.length>0}/><OrbitControls ref={controls} makeDefault enableZoom={interactionMode!=='rotation-only'&&orbitOptions.enableZoom!==false} enableRotate autoRotate={Boolean(autoRotate && !reducedMotion)} autoRotateSpeed={.6} enableDamping={!reducedMotion} dampingFactor={.12} minDistance={orbitOptions.minDistance??0} maxDistance={orbitOptions.maxDistance??Infinity} minAzimuthAngle={frontWindow?.minTheta??-Infinity} maxAzimuthAngle={frontWindow?.maxTheta??Infinity} minPolarAngle={frontWindow?.minPhi??0} maxPolarAngle={frontWindow?.maxPhi??Math.PI} enablePan={interactionMode!=='rotation-only'&&orbitOptions.enablePan!==false}/></>;
}
// Canvas fallback is mounted as DOM children even when WebGL works. It must stay side-effect free.
export function GraphicsFallback(){return <p role="alert">3D graphics are unavailable in this browser.</p>;}
export default function StudioViewport(props) {
 return <ViewportBoundary onError={props.onError}><Canvas aria-label={props.label||"Interactive organ model"} frameloop={props.autoRotate && !props.reducedMotion ? "always" : "demand"} dpr={[1,1.5]} camera={{position:[0,0,2],near:.001,far:100}} fallback={<GraphicsFallback/>}><Bounds fit clip observe margin={1.15} maxDuration={props.reducedMotion ? 0 : .35}><Scene {...props}/></Bounds></Canvas></ViewportBoundary>;
}

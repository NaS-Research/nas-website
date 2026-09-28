import * as THREE from 'three';
import {OrbitControls} from 'three/addons/OrbitControls.js';
const notify=(type)=>parent.postMessage({type},location.origin);
try {
const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));renderer.setClearColor(0x090e0c);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.domElement.setAttribute("role","img");renderer.domElement.setAttribute("aria-label","Rotatable conceptual cell membrane and drug receptor scene; chapter explanations are provided alongside the scene.");document.body.append(renderer.domElement);document.getElementById('error').remove();
renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();notify('nas-journey-error');});
const scene=new THREE.Scene();scene.fog=new THREE.FogExp2(0x090e0c,.017);
const camera=new THREE.PerspectiveCamera(40,1,.1,150);camera.position.set(13,11,18);
const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.minDistance=6;controls.maxDistance=38;controls.target.set(0,0,0);
scene.add(new THREE.HemisphereLight(0xfff2d4,0x315447,2));const sun=new THREE.DirectionalLight(0xffdf9d,3);sun.position.set(4,10,8);scene.add(sun);const rim=new THREE.DirectionalLight(0x7ccec4,2);rim.position.set(-7,1,-8);scene.add(rim);
const sphere=new THREE.SphereGeometry(1,12,10);const material=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.5,metalness:.12,...extra});
const gold=material(0xbba778),teal=material(0x72bdb1),drugMat=material(0xe7b765),signalMat=material(0x8ac4e0),tailMat=material(0x736d46);
const matrix=new THREE.Matrix4(),pos=new THREE.Vector3(),quat=new THREE.Quaternion(),size=new THREE.Vector3();
// Two layers of lipid heads and paired tails. Deliberately schematic, not atomic coordinates.
const heads=[],tails=[];
for(let x=-13;x<=13;x++)for(let z=-8;z<=8;z++){const px=x*.6,pz=z*.6;if(Math.hypot(px,pz)<1.65||Math.hypot(px-4,pz+1)<1.05)continue;for(const side of [-1,1]){heads.push([px,side*.95,pz]);tails.push([px,side*.45,pz]);}}
const membrane=new THREE.Group();scene.add(membrane);
const headMesh=new THREE.InstancedMesh(sphere,gold,heads.length);heads.forEach((p,i)=>{matrix.compose(pos.set(...p),quat,size.setScalar(.25));headMesh.setMatrixAt(i,matrix);});membrane.add(headMesh);
const tailsMesh=new THREE.InstancedMesh(new THREE.CylinderGeometry(.055,.055,.7,5),tailMat,tails.length);tails.forEach((p,i)=>{matrix.compose(pos.set(...p),quat,size.set(1,1,1));tailsMesh.setMatrixAt(i,matrix);});membrane.add(tailsMesh);
const receptor=new THREE.Group();scene.add(receptor);
for(let helix=0;helix<7;helix++){const angle=helix/7*Math.PI*2;for(let i=0;i<27;i++){const a=i*.8;const atom=new THREE.Mesh(sphere,teal);atom.scale.setScalar(.22);atom.position.set(Math.cos(angle)*.95+Math.cos(a)*.16,(i-13)*.105,Math.sin(angle)*.95+Math.sin(a)*.16);receptor.add(atom);}}
function cluster(mat,count,radius){const g=new THREE.Group();for(let i=0;i<count;i++){const a=i*2.399963,b=Math.acos(1-2*(i+.5)/count);const m=new THREE.Mesh(sphere,mat);m.scale.setScalar(.24+(i%3)*.04);m.position.set(Math.cos(a)*Math.sin(b)*radius,Math.cos(b)*radius,Math.sin(a)*Math.sin(b)*radius);g.add(m);}return g;}
const drug=cluster(drugMat,21,.58);scene.add(drug);
const ach=cluster(signalMat,9,.27);scene.add(ach);
const gprotein=cluster(material(0x9bc78c),33,.66);gprotein.position.set(.2,-2.2,0);scene.add(gprotein);
const enzyme=cluster(material(0x689b91),52,.86);enzyme.position.set(4,-.3,-1);scene.add(enzyme);
const messengers=new THREE.Group();scene.add(messengers);for(let i=0;i<36;i++){const m=new THREE.Mesh(sphere,drugMat);m.scale.setScalar(.1);messengers.add(m);}
const tissue=new THREE.Group();scene.add(tissue);tissue.position.set(0,-4,0);
const tubeMat=material(0x91bcb0,{transparent:true,opacity:.85});
const ring=new THREE.Mesh(new THREE.TorusGeometry(2.1,.55,16,80),tubeMat);ring.rotation.x=-Math.PI/2;tissue.add(ring);
const innerRing=new THREE.Mesh(new THREE.TorusGeometry(2.9,.13,12,80),gold);innerRing.rotation.x=-Math.PI/2;tissue.add(innerRing);
const fibers=new THREE.Group();tissue.add(fibers);
for(let i=0;i<8;i++){const fiber=new THREE.Mesh(new THREE.CylinderGeometry(.16,.16,5,12),tubeMat);fiber.rotation.z=Math.PI/2;fiber.position.set(0,(i%2)*.28,Math.floor(i/2)*.5-.75);fibers.add(fiber);}
const labels=[];
function label(text,object,offset){const el=document.createElement('div');el.className='label';el.textContent=text;document.body.append(el);labels.push({el,object,offset:new THREE.Vector3(...offset)});return el;}
const receptorLabel=label('Muscarinic receptor',receptor,[0,1.8,0]);const drugLabel=label('Dicyclomine',drug,[0,.9,0]);const signalLabel=label('Acetylcholine',ach,[0,.6,0]);const gLabel=label('Gs protein',gprotein,[0,-.7,0]);const enzymeLabel=label('Adenylyl cyclase',enzyme,[0,1.3,0]);const tissueLabel=label('Tissue response',tissue,[0,-.7,0]);
let state={drug:'dicyclomine',step:0,motion:!matchMedia('(prefers-reduced-motion: reduce)').matches,baseline:false};let movingCamera=true;let time=0,last=performance.now();
const destination=new THREE.Vector3(),lookAt=new THREE.Vector3();
function pose(){const s=state.step;if(s===0){destination.set(13,11,18);lookAt.set(0,0,0);}else if(s<4){destination.set(6,6,10);lookAt.set(0,0,0);}else if(s===4&&state.drug==='albuterol'){destination.set(10,-6,12);lookAt.set(2,-1,0);}else{destination.set(10,-10,15);lookAt.set(0,-2,0);}movingCamera=true;if(!state.motion){camera.position.copy(destination);controls.target.copy(lookAt);movingCamera=false;}}
controls.addEventListener('start',()=>{movingCamera=false;});
window.addEventListener('message',e=>{if(e.origin!==location.origin||e.source!==parent)return;if(e.data?.type==='nas-journey-reset'){pose();return;}if(e.data?.type!=='nas-journey-state')return;const d=e.data;if(!['albuterol','dicyclomine'].includes(d.drug)||!Number.isInteger(d.step)||d.step<0||d.step>6)return;const changed=d.step!==state.step||d.drug!==state.drug;state={drug:d.drug,step:d.step,motion:!!d.motion,baseline:!!d.baseline};if(changed)time=0;pose();});
function resize(){renderer.setSize(innerWidth,innerHeight);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();}addEventListener('resize',resize);resize();pose();
function draw(now){requestAnimationFrame(draw);const dt=Math.min((now-last)/1000,.05);last=now;if(document.hidden)return;if(state.motion)time+=dt;const s=state.step,a=state.drug==='albuterol',active=!state.baseline&&s>=2;
if(movingCamera){camera.position.lerp(destination,.055);controls.target.lerp(lookAt,.055);if(camera.position.distanceTo(destination)<.02)movingCamera=false;}controls.update();
receptorLabel.textContent=a?'β₂-adrenergic receptor':'Muscarinic receptor';drugLabel.textContent=a?'Albuterol':'Dicyclomine';
teal.emissive.setHex(active?(a?0x285c47:0x60451b):0x000000);teal.emissiveIntensity=.5;
drug.visible=!state.baseline&&s>0;const travel=state.motion?Math.min(time/3,1):1;drug.position.set(s===1?6*(1-travel):0,s===1?4-2.3*travel:1.65,s===1?2*(1-travel):0);drug.rotation.y=state.motion?time*.18:0;
ach.visible=!a&&(s===0||s===3||state.baseline);const phase=state.motion?(time%4)/4:.7;ach.position.set(-4+phase*4,2.3+Math.sin(phase*Math.PI)*.7,0);if(active&&phase>.7)ach.position.x=-1.2-(phase-.7)*5;
gprotein.visible=a&&s>=2;enzyme.visible=a&&s>=3;gprotein.position.x=active&&s>=3?Math.min(time/3,1)*2.4:.2;
messengers.visible=a&&active&&s>=4;messengers.children.forEach((m,i)=>{const p=((state.motion?time*.2:0)+i/36)%1;m.position.set(4-Math.cos(i*2.4)*p*4,-1-p*4,-1+Math.sin(i*2.4)*p*4);});
tissue.visible=s>=(a?5:4);ring.visible=a;innerRing.visible=a;fibers.visible=!a;fibers.scale.x=1-(active?.025:.12)*(1+Math.sin(time*3));const openness=a?(active?1.2:.65):1;ring.scale.setScalar(openness);ring.scale.y=a?openness:1+(active?.025:.12)*Math.sin(time*3);tissueLabel.textContent=a?(active?'Airway smooth muscle relaxed':'Illustrative constricted airway'):(active?'Intestinal contractile drive reduced':'Intestinal smooth muscle activity');
headMesh.material.transparent=true;headMesh.material.opacity=s>=4?.3:1;tailsMesh.material.transparent=true;tailsMesh.material.opacity=s>=4?.2:1;
const projected=new THREE.Vector3();for(const l of labels){if(!l.object.visible){l.el.style.display='none';continue;}l.object.getWorldPosition(projected);projected.add(l.offset).project(camera);const x=(projected.x*.5+.5)*innerWidth,y=(-projected.y*.5+.5)*innerHeight;l.el.style.display=projected.z>1||x<0||x>innerWidth||y<0||y>innerHeight?'none':'block';l.el.style.left=Math.min(innerWidth-l.el.offsetWidth-8,Math.max(8,x))+'px';l.el.style.top=y+'px';}
renderer.render(scene,camera);
}requestAnimationFrame(draw);notify('nas-journey-ready');
} catch(error){const el=document.getElementById('error');if(el)el.textContent='The molecular scene could not start.';notify('nas-journey-error');}

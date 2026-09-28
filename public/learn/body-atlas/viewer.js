const femaleReference = new URLSearchParams(location.search).get("sex") === "female";
import * as THREE from "three";
import { OrbitControls } from "three/addons/OrbitControls.js";
import { GLTFLoader } from "three/addons/GLTFLoader.js";
import { DRACOLoader } from "three/addons/DRACOLoader.js";
import { TeachingOverlay } from "./teaching.js";

const stage = document.getElementById("atlas-stage");
const loading = document.getElementById("atlas-loading");
const notify = (type, data = {}) => window.parent.postMessage({ type: `nas-atlas-${type}`, ...data }, window.location.origin);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(34, 1, 0.001, 100);
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
} catch (error) {
  notify("error", { message: "3D rendering is unavailable in this browser. Enable hardware acceleration or try another browser." });
  loading.textContent = "3D rendering unavailable";
  throw error;
}
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.localClippingEnabled = true;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.shadowMap.autoUpdate = false;
const sectionPlane = new THREE.Plane(new THREE.Vector3(0, 0, -1), 0);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = .85;
renderer.setClearColor(0x000000, 0);
stage.appendChild(renderer.domElement);
renderer.domElement.addEventListener("webglcontextlost", event => {
  event.preventDefault();
  notify("error", { message: "The 3D graphics session was interrupted. Retry the viewer to restore it." });
});
// Neutral studio light preserves tissue hues; a soft environment supplies surface reflections.
scene.add(new THREE.HemisphereLight(0xe8f0ff, 0x34313a, .4));
scene.add(new THREE.AmbientLight(0xffffff, .12));
const keyLight = new THREE.DirectionalLight(0xfff5ee, 1.6);
keyLight.position.set(-3, 5, 6); scene.add(keyLight);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048,2048);
keyLight.shadow.bias = -.00002;
keyLight.shadow.normalBias = .00015;
keyLight.shadow.camera.near = .1; keyLight.shadow.camera.far = 20;
scene.add(keyLight.target);
const fillLight = new THREE.DirectionalLight(0xcbdfff, .35);
fillLight.position.set(4, 1, 3); scene.add(fillLight);
const rimLight = new THREE.DirectionalLight(0xffede0, 1.2);
rimLight.position.set(2, 3, -4); scene.add(rimLight);
const studio = new THREE.Scene(); studio.background = new THREE.Color(0x31343a);
const panels = [[-4,4,3,3,5],[4,2,1,2,4],[0,6,-3,5,2]];
for (const [x,y,z,w,h] of panels) {
  const panel = new THREE.Mesh(new THREE.PlaneGeometry(w,h), new THREE.MeshBasicMaterial({color:0xffffff,side:THREE.DoubleSide}));
  panel.position.set(x,y,z); panel.lookAt(0,0,0); studio.add(panel);
}
const pmrem = new THREE.PMREMGenerator(renderer);
const studioMap = pmrem.fromScene(studio, .04, .1, 40);
scene.environment = studioMap.texture;
pmrem.dispose(); studio.traverse(object=>{object.geometry?.dispose();object.material?.dispose();});
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.07;
controls.enablePan = true;
controls.minDistance = 0.015;
controls.maxDistance = 18;
controls.autoRotateSpeed = 0.8;
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("./libs/draco/");
const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);
const models = new Map();
const requests = new Map();
const failed = new Set();
const structures = new Map();
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const bodyOffset = new THREE.Vector3();
const bodySize = new THREE.Vector3(1, 2, 1);
const teaching = new TeachingOverlay(stage, camera, bodySize, notify);
let selectionRequest = 0;
let pendingFocus = null;
let atlasState = { visibleLayers: ["muscular", "skeleton"], focusedLayer: null, selectedId: null, opacity: { lymphatic: 90, muscular: 24, skeleton: 78, cardiovascular: 94, nervous: 86, visceral: 56 }, explode: 0, isolated: false, hidden: [], rotating: false };
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let dirty = true;
const invalidate = () => { dirty = true; };
controls.addEventListener("change", invalidate);
controls.addEventListener("start", () => notify("camera-moved"));
window.addEventListener("keydown", event => { if (event.key === "Escape") notify("exit"); });

function cameraView(view = "front") {
  const vertical = THREE.MathUtils.degToRad(camera.fov);
  const horizontal = 2 * Math.atan(Math.tan(vertical / 2) * camera.aspect);
  const spread = 1 + atlasState.explode * 0.8;
  const distance = Math.max(bodySize.y / (2 * Math.tan(vertical / 2)), bodySize.x * spread / (2 * Math.tan(horizontal / 2))) * 1.2 + bodySize.z;
  const direction = { front: [0, 0, 1], back: [0, 0, -1], left: [1, 0, 0], right: [-1, 0, 0] }[view] || [0, 0, 1];
  controls.target.set(0, 0, 0);
  camera.position.fromArray(direction).multiplyScalar(distance);
  controls.update();
  invalidate();
}
function identify(root, file, parser) {
  root.updateMatrixWorld(true);
  root.traverse(object => {
    if (!object.isMesh) return;
    let node = object;
    while (node && parser.associations.get(node)?.nodes === undefined) node = node.parent;
    const index = parser.associations.get(node)?.nodes;
    const definition = parser.json.nodes[index];
    const id = definition?.extras?.atlasSourceId || `${file}:${index}`;
    if (/^(Nervous system & Sense organs|Visceral systems)\.g\./.test(definition?.name || "")) { object.visible = false; return; }
    object.userData.atlasId = id;
    object.userData.atlasLayer = definition?.extras?.atlasLayer || (file === "body" ? (definition?.extras?.type === "bone" ? "skeleton" : "muscular") : file);
    object.userData.atlasName = (definition?.extras?.name || definition?.name || object.name).replace(/\.\d+$/g, "").replace(/[_\.]+/g, " ").replace(/\b([lr])\b/gi, side => side.toLowerCase() === "l" ? "left" : "right").trim();
    if (object.userData.atlasName.includes("?")) object.userData.atlasName = "Unlabeled structure";
    object.userData.home = object.position.clone();
    // Convert a world-space displacement to the mesh parent's local coordinates.
    const center = new THREE.Box3().setFromObject(object).getCenter(new THREE.Vector3());
    const displacement = center.clone().multiply(new THREE.Vector3(0.8, 0.2, 0.8));
    if (displacement.length() < 0.01) displacement.set(0.08, 0, 0);
    const localOrigin = object.parent.worldToLocal(center.clone());
    object.userData.spread = object.parent.worldToLocal(center.add(displacement)).sub(localOrigin);
    if (!structures.has(id)) structures.set(id, []);
    structures.get(id).push(object);
    const materials = Array.isArray(object.material) ? object.material : [object.material];
    object.material = materials.map(material => {
      const copy = new THREE.MeshPhysicalMaterial();
      THREE.MeshStandardMaterial.prototype.copy.call(copy, material);
      // Restrained dielectric highlights keep soft tissue from looking like plastic.
      copy.clearcoat = .08;
      copy.clearcoatRoughness = .65;
      copy.specularIntensity = .38;
      copy.ior = 1.38;
      if (copy.map && / tissue$/.test(copy.name)) {
        // Calibrate baked tissue against the browser's real-time lighting.
        const name = object.userData.atlasName.toLowerCase();
        if (/kidney|atrium|ventricle/.test(name)) copy.color.setRGB(.62,.25,.24);
        else if (/liver/.test(name)) copy.color.setRGB(.5,.25,.23);
        else copy.color.setRGB(.85,.62,.57);
      }
      const surfaceFamily = /^Atlas (\w+) surface/.exec(copy.name)?.[1];
      const surfaceCalibration = {
        bone: [.92,.86,.72], muscle: [.62,.24,.20], nerve: [.84,.70,.38],
        artery: [.66,.20,.18], vein: [.34,.46,.68], gland: [.74,.43,.30],
        soft: [.75,.42,.36], spleen: [.48,.16,.24], lymph: [.76,.61,.44], cartilage: [.77,.88,.90],
      };
      if (surfaceCalibration[surfaceFamily]) copy.color.setRGB(...surfaceCalibration[surfaceFamily]);
      copy.userData.atlasColor = copy.color?.clone();
      copy.userData.atlasSide = copy.side;
      copy.transparent = true;
      copy.metalness = 0;
      copy.envMapIntensity = .28;
      copy.roughness = material.roughness ?? .55;
      return copy;
    });
    if (object.material.length === 1) object.material = object.material[0];
  });
}
function loadingStatus() { notify("loading", { layers: [...requests.keys()].map(id => id === "body" ? "body" : id) }); }
async function loadLayer(layerId) {
  const file = femaleReference ? "female" : ["muscular", "skeleton"].includes(layerId) ? "body" : layerId;
  if (!["body", "female", "cardiovascular", "nervous", "visceral", "lymphatic"].includes(file)) return null;
  if (models.has(file)) return models.get(file);
  if (requests.has(file)) return requests.get(file);
  if (failed.has(file)) return null;
  const request = loader.loadAsync(`/learn/models/body/refined/${file}.glb`).then(gltf => {
    const root = gltf.scene;
    if (file === "body" || file === "female") {
      const box = new THREE.Box3().setFromObject(root);
      bodyOffset.copy(box.getCenter(new THREE.Vector3())).multiplyScalar(-1);
      box.getSize(bodySize);
    }
    root.position.copy(bodyOffset);
    scene.add(root);
    identify(root, file, gltf.parser);
    models.set(file, root);
    if (file === "body" || file === "female") { cameraView(); loading.classList.add("is-hidden"); loading.setAttribute("aria-hidden", "true"); notify("ready"); }
    applyState();
    return root;
  }).catch(() => {
    failed.add(file);
    notify("error", { message: `The ${file} model could not be loaded. Retry the viewer to download it again.` });
    return null;
  }).finally(() => { requests.delete(file); loadingStatus(); });
  requests.set(file, request);
  loadingStatus();
  return request;
}
function applyState() {
  const visible = new Set(atlasState.visibleLayers);
  const hidden = new Set(atlasState.hidden);
      const cut = atlasState.section;
      if (cut?.enabled) {
        const axis = ['x','y','z'].includes(cut.axis) ? cut.axis : 'z';
        sectionPlane.normal.set(axis==='x'?-1:0,axis==='y'?-1:0,axis==='z'?-1:0);
        const objects = atlasState.groupIds?.length ? atlasState.groupIds.flatMap(id=>structures.get(id)||[]) : structures.get(atlasState.selectedId)||[];
        const box = new THREE.Box3();
        objects.forEach(mesh=>box.expandByObject(mesh));
        const lo = box.isEmpty() ? -bodySize[axis]/2 : box.min[axis];
        const hi = box.isEmpty() ? bodySize[axis]/2 : box.max[axis];
        sectionPlane.constant = lo + (hi-lo) * (cut.position/100);
      }

  structures.forEach((objects, id) => objects.forEach(object => {
    const layer = object.userData.atlasLayer;
    const selected = id === atlasState.selectedId || atlasState.groupIds?.includes(id);
    object.visible = visible.has(layer) && !hidden.has(id) && (!atlasState.isolated || selected);
    object.position.copy(object.userData.home).addScaledVector(object.userData.spread, atlasState.explode);
    if (!object.visible) return;
    const teachingRegion = teaching.regionFor(object);
    const teachingActive = teachingRegion?.id === teaching.state?.activeId;
    const opacity = teaching.state
      ? teachingRegion ? (teachingActive ? .95 : .26) : layer === "skeleton" ? .1 : .018
      : atlasState.focusedLayer && atlasState.focusedLayer !== layer ? 0.045 : (atlasState.opacity[layer] ?? 80) / 100;
    object.userData.pickable = opacity > 0.05;
    (Array.isArray(object.material) ? object.material : [object.material]).forEach(material => {
      if (material.color && material.userData.atlasColor) {
        material.color.copy(material.userData.atlasColor);
        // Selection is communicated through isolation and controls, preserving tissue color.
        if (teachingRegion) material.color.set(!teaching.state.withDrug ? '#a6bdb6' : teaching.state.contextRegions?.includes(teachingRegion.id) ? '#e29a88' : teachingRegion.kind === 'benefit' ? '#8fcfc1' : teachingRegion.kind === 'risk' ? '#e29a88' : '#deb985');
      }
      material.clippingPlanes = cut?.enabled ? [sectionPlane] : [];
      material.side = cut?.enabled ? THREE.DoubleSide : material.userData.atlasSide;
      material.opacity = selected ? (atlasState.shellIds?.includes(id) ? atlasState.shellOpacity : 1) : opacity;
      object.renderOrder = atlasState.shellIds?.includes(id) ? 2 : 0;
      object.castShadow = !!selected && !atlasState.shellIds?.includes(id) && !cut?.enabled;
      object.receiveShadow = !!selected && !cut?.enabled;
      material.depthWrite = !atlasState.shellIds?.includes(id) && material.opacity > 0.58;
      if (material.emissive) { material.emissive.set(0x000000); material.emissiveIntensity = 0; }
      if (teachingActive && material.emissive) { material.emissive.copy(material.color); material.emissiveIntensity = .22; }
    });
  }));
  renderer.shadowMap.needsUpdate = true;
  controls.autoRotate = atlasState.rotating;
  atlasState.visibleLayers.forEach(id => { void loadLayer(id); });
  if (pendingFocus && pendingFocus === atlasState.selectedId && structures.has(pendingFocus)) {
    pendingFocus = null;
    focusSelection();
  }
  invalidate();
}
function selectedData(object) { return { id: object.userData.atlasId, name: object.userData.atlasName, layerId: object.userData.atlasLayer }; }
function focusSelection() {
  const objects = atlasState.groupIds?.length ? atlasState.groupIds.flatMap(id=>structures.get(id)||[]) : structures.get(atlasState.selectedId);
  if (!objects?.length) return;
  scene.updateMatrixWorld(true);
  const box = new THREE.Box3();
  objects.forEach(object => box.expandByObject(object));
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  const shadowExtent = Math.max(size.length()*.65,.035);
  keyLight.target.position.copy(center);
  Object.assign(keyLight.shadow.camera,{left:-shadowExtent,right:shadowExtent,top:shadowExtent,bottom:-shadowExtent});
  keyLight.shadow.camera.updateProjectionMatrix();
  renderer.shadowMap.needsUpdate = true;
  const direction = camera.position.clone().sub(controls.target).normalize();
  const right = new THREE.Vector3().crossVectors(camera.up,direction).normalize();
  const up = new THREE.Vector3().crossVectors(direction,right).normalize();
  const extent = axis => Math.abs(axis.x)*size.x+Math.abs(axis.y)*size.y+Math.abs(axis.z)*size.z;
  const halfFov = THREE.MathUtils.degToRad(camera.fov)/2;
  const distance = Math.max(Math.max(extent(up)/(2*Math.tan(halfFov)),extent(right)/(2*Math.tan(halfFov)*camera.aspect))*1.12+extent(direction)*.5,.04);
  controls.target.copy(center);
  camera.position.copy(center).addScaledVector(direction, distance);
  controls.update(); invalidate();
}
let pointerStart = null;
let moved = false;
let pointerCount = 0;
renderer.domElement.addEventListener("pointerdown", event => { pointerCount++; if (pointerCount > 1) moved = true; else { pointerStart = [event.clientX, event.clientY]; moved = false; } });
renderer.domElement.addEventListener("pointermove", event => { if (pointerStart && Math.hypot(event.clientX - pointerStart[0], event.clientY - pointerStart[1]) > 5) moved = true; });
renderer.domElement.addEventListener("pointercancel", () => { pointerCount = 0; pointerStart = null; moved = true; });
renderer.domElement.addEventListener("pointerup", event => {
  pointerCount = Math.max(0, pointerCount - 1);
  if (!pointerStart || moved || event.button !== 0) return;
  pointerStart = null;
  const bounds = renderer.domElement.getBoundingClientRect();
  pointer.set(((event.clientX - bounds.left) / bounds.width) * 2 - 1, -((event.clientY - bounds.top) / bounds.height) * 2 + 1);
  raycaster.setFromCamera(pointer, camera);
  const objects = [...structures.values()].flat().filter(object => object.visible && object.userData.pickable);
  const hit = raycaster.intersectObjects(objects, false).find(intersection => !atlasState.section?.enabled || sectionPlane.distanceToPoint(intersection.point) >= 0)?.object;
  if (teaching.state) {
    const region = hit && teaching.regionFor(hit);
    if (region) notify("region", { id: region.id });
    return;
  }
  atlasState.groupIds = [];
  atlasState.selectedId = hit?.userData.atlasId || null;
  atlasState.isolated = false;
  applyState();
  notify("select", { selection: hit ? selectedData(hit) : null });
});
window.addEventListener("message", async event => {
  if (event.origin !== window.location.origin || event.source !== window.parent) return;
  const data = event.data;
  if (data?.type === "nas-atlas-state") {
    const incoming = data.state;
    if (!incoming || !Array.isArray(incoming.visibleLayers)) return;
    atlasState = { ...atlasState, ...incoming };
    applyState();
    return;
  }
  if (data?.type !== "nas-atlas-command") return;
  if (data.command === "lesson" && Array.isArray(data.lesson?.regions)) {
    teaching.configure(data.lesson);
    atlasState.groupIds = []; atlasState.section = null;
    atlasState = { ...atlasState, visibleLayers: ["skeleton", "muscular", "visceral", "nervous", "cardiovascular"], focusedLayer: null, selectedId: null, isolated: false, hidden: [], explode: 0 };
    applyState(); teaching.update();
  }
  if (data.command === "focus-region") {
    const objects = [...structures.values()].flat().filter(object => teaching.regionFor(object)?.id === teaching.state?.activeId);
    if (objects.length) {
      const box = new THREE.Box3();
      objects.forEach(object => box.expandByObject(object));
      const center = box.getCenter(new THREE.Vector3());
      controls.target.copy(center);
      camera.position.copy(center).add(new THREE.Vector3(0, 0, Math.max(box.getSize(new THREE.Vector3()).length() * 2.2, .35)));
      controls.update(); invalidate();
    }
  }
  if (data.command === "select" && typeof data.id === "string") {
    const requestId = ++selectionRequest;
    pendingFocus = data.id;
    await loadLayer(data.id.split(":")[0]);
    if (requestId !== selectionRequest) return;
    applyState();
  }
  if (data.command === "focus-group" && Array.isArray(data.ids)) {
    const requestId = ++selectionRequest;
    await Promise.all([...new Set(data.ids.map(id=>id.split(':')[0]))].map(loadLayer));
    if (requestId !== selectionRequest) return;
    atlasState.groupIds = data.ids;
    applyState(); focusSelection();
  }
  if (data.command === "focus") focusSelection();
  if (data.command === "view") cameraView(data.view);
  if (data.command === "reset") { selectionRequest++; pendingFocus = null; cameraView(); }
  if (data.command === "zoom" && [0.8, 1.25].includes(data.factor)) {
    const offset = camera.position.clone().sub(controls.target);
    offset.setLength(THREE.MathUtils.clamp(offset.length() * data.factor, controls.minDistance, controls.maxDistance));
    camera.position.copy(controls.target).add(offset); controls.update(); invalidate();
  }
});
function resize() {
  renderer.setSize(stage.clientWidth, stage.clientHeight, false);
  camera.aspect = stage.clientWidth / Math.max(stage.clientHeight, 1);
  camera.updateProjectionMatrix(); invalidate();
}
new ResizeObserver(resize).observe(stage);
resize();
void loadLayer("body");
function animate() {
  requestAnimationFrame(animate);
  if (document.hidden) return;
  // No perpetual GPU redraw while the model is idle.
  controls.enableDamping = !reducedMotion.matches;
  controls.update();
  if (dirty || controls.autoRotate) { renderer.render(scene, camera); teaching.update(); dirty = false; }
}
animate();

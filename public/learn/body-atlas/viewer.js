import * as THREE from "three";
import { OrbitControls } from "three/addons/OrbitControls.js";
import { GLTFLoader } from "three/addons/GLTFLoader.js";
import { DRACOLoader } from "three/addons/DRACOLoader.js";

const stage = document.getElementById("atlas-stage");
const loading = document.getElementById("atlas-loading");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(34, 1, 0.01, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setClearColor(0x000000, 0);
stage.appendChild(renderer.domElement);

scene.add(new THREE.HemisphereLight(0xfff3e4, 0x19110f, 1.25));
scene.add(new THREE.AmbientLight(0xffffff, 0.65));
const keyLight = new THREE.DirectionalLight(0xfff1df, 1.7);
keyLight.position.set(4, 6, 5);
scene.add(keyLight);
const fillLight = new THREE.DirectionalLight(0xc89d82, 0.72);
fillLight.position.set(-4, 2, -2);
scene.add(fillLight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.07;
controls.enablePan = false;
controls.minDistance = 0.8;
controls.maxDistance = 18;

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("./libs/draco/");
const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);

const modelUrls = {
  body: "/learn/models/body/body.glb",
  cardiovascular: "/learn/models/body/cardiovascular.glb",
  nervous: "/learn/models/body/nervous.glb",
  visceral: "/learn/models/body/visceral.glb",
};

const baseOpacity = {
  muscular: 0.24,
  skeleton: 0.78,
  cardiovascular: 0.94,
  nervous: 0.86,
  visceral: 0.56,
};

const models = new Map();
const loadingLayers = new Map();
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let bodyOffset = new THREE.Vector3();
let selectedObject = null;
let atlasState = { visibleLayers: ["muscular", "skeleton"], focusedLayer: null };

function cloneMaterials(root) {
  root.traverse((object) => {
    if (!object.isMesh || !object.material) return;
    const source = Array.isArray(object.material) ? object.material : [object.material];
    object.material = source.map((material) => {
      const copy = material.clone();
      copy.userData.atlasColor = copy.color?.clone();
      copy.transparent = true;
      copy.metalness = 0;
      copy.roughness = Math.min(copy.roughness ?? 0.72, 0.8);
      return copy;
    });
    if (object.material.length === 1) object.material = object.material[0];
  });
}

function setLayerIdentity(root, fallbackLayer) {
  root.traverse((object) => {
    if (!object.isMesh) return;
    object.userData.atlasLayer = fallbackLayer === "body"
      ? (object.userData?.type === "bone" ? "skeleton" : "muscular")
      : fallbackLayer;
  });
}

function fitBody(root) {
  const box = new THREE.Box3().setFromObject(root);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  bodyOffset.copy(center).multiplyScalar(-1);
  root.position.copy(bodyOffset);
  const maxDimension = Math.max(size.x, size.y, size.z);
  const distance = Math.abs(maxDimension / 2 / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2))) * 1.08;
  camera.far = Math.max(1000, distance * 8);
  camera.position.set(distance * 0.12, distance * 0.04, distance);
  camera.updateProjectionMatrix();
  controls.target.set(0, 0, 0);
  controls.update();
}

function loadLayer(layerId) {
  if (layerId === "muscular" || layerId === "skeleton") return loadBody();
  if (models.has(layerId)) return Promise.resolve(models.get(layerId));
  if (loadingLayers.has(layerId)) return loadingLayers.get(layerId);

  const request = loader.loadAsync(modelUrls[layerId]).then((gltf) => {
    const root = gltf.scene;
    cloneMaterials(root);
    setLayerIdentity(root, layerId);
    root.position.copy(bodyOffset);
    scene.add(root);
    models.set(layerId, root);
    loadingLayers.delete(layerId);
    applyState();
    return root;
  });
  loadingLayers.set(layerId, request);
  return request;
}

function loadBody() {
  if (models.has("body")) return Promise.resolve(models.get("body"));
  if (loadingLayers.has("body")) return loadingLayers.get("body");

  const request = loader.loadAsync(modelUrls.body).then((gltf) => {
    const root = gltf.scene;
    cloneMaterials(root);
    setLayerIdentity(root, "body");
    fitBody(root);
    scene.add(root);
    models.set("body", root);
    loadingLayers.delete("body");
    loading.classList.add("is-hidden");
    applyState();
    window.parent.postMessage({ type: "nas-atlas-ready" }, window.location.origin);
    return root;
  });
  loadingLayers.set("body", request);
  return request;
}

function applyMaterial(object, opacity, isSelected) {
  const materials = Array.isArray(object.material) ? object.material : [object.material];
  materials.forEach((material) => {
    if (material.userData.atlasColor && material.color) {
      material.color.copy(material.userData.atlasColor);
      if (isSelected) material.color.lerp(new THREE.Color(0xf0c985), 0.58);
    }
    material.opacity = isSelected ? Math.max(opacity, 0.96) : opacity;
    material.depthWrite = material.opacity > 0.58;
    if (material.emissive) {
      material.emissive.set(isSelected ? 0xa85f34 : 0x000000);
      material.emissiveIntensity = isSelected ? 0.26 : 0;
    }
    material.needsUpdate = true;
  });
}

function applyState() {
  const visible = new Set(atlasState.visibleLayers);
  models.forEach((root) => {
    root.traverse((object) => {
      if (!object.isMesh) return;
      const layerId = object.userData.atlasLayer;
      object.visible = visible.has(layerId);
      if (!object.visible) return;
      const opacity = !atlasState.focusedLayer || atlasState.focusedLayer === layerId
        ? baseOpacity[layerId]
        : Math.min(baseOpacity[layerId], 0.055);
      applyMaterial(object, opacity, object === selectedObject);
    });
  });

  atlasState.visibleLayers.forEach((layerId) => {
    if (!["muscular", "skeleton"].includes(layerId)) loadLayer(layerId);
  });
}

function clearSelection() {
  selectedObject = null;
  applyState();
  window.parent.postMessage({ type: "nas-atlas-select", selection: null }, window.location.origin);
}

renderer.domElement.addEventListener("pointerup", (event) => {
  const bounds = renderer.domElement.getBoundingClientRect();
  pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
  pointer.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const objects = [];
  models.forEach((root) => root.traverse((object) => {
    if (object.isMesh && object.visible) objects.push(object);
  }));
  const hit = raycaster.intersectObjects(objects, false)[0]?.object;
  if (!hit) {
    clearSelection();
    return;
  }
  selectedObject = hit;
  applyState();
  window.parent.postMessage({
    type: "nas-atlas-select",
    selection: {
      layerId: hit.userData.atlasLayer,
      meshName: hit.userData.name || hit.name,
    },
  }, window.location.origin);
});

window.addEventListener("message", (event) => {
  if (event.origin !== window.location.origin || event.data?.type !== "nas-atlas-state") return;
  atlasState = event.data.state;
  if (selectedObject && !atlasState.visibleLayers.includes(selectedObject.userData.atlasLayer)) {
    selectedObject = null;
  }
  applyState();
});

function resize() {
  const width = stage.clientWidth;
  const height = stage.clientHeight;
  renderer.setSize(width, height, false);
  camera.aspect = width / Math.max(height, 1);
  camera.updateProjectionMatrix();
}

new ResizeObserver(resize).observe(stage);
resize();
loadBody();

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

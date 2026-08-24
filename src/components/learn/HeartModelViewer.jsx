"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Bounds, Center, ContactShadows, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const structureDetails = {
  "Left atrium": {
    summary: "Receives oxygenated blood from the pulmonary circulation and passes it to the left ventricle.",
    group: "Chamber",
  },
  "Left ventricle": {
    summary: "Generates the pressure that moves oxygenated blood into the systemic circulation.",
    group: "Chamber",
  },
  "Right atrium": {
    summary: "Receives systemic venous blood and directs it toward the right ventricle.",
    group: "Chamber",
  },
  "Right ventricle": {
    summary: "Moves deoxygenated blood toward the pulmonary circulation.",
    group: "Chamber",
  },
  "Aortic valve": {
    summary: "Separates the left ventricle from the aortic outflow tract and supports forward flow.",
    group: "Valve",
  },
  "Pulmonary valve": {
    summary: "Separates the right ventricle from the pulmonary outflow tract and supports forward flow.",
    group: "Valve",
  },
  "Mitral valve": {
    summary: "Regulates flow from the left atrium into the left ventricle.",
    group: "Valve",
  },
  "Tricuspid valve": {
    summary: "Regulates flow from the right atrium into the right ventricle.",
    group: "Valve",
  },
  "Papillary muscles": {
    summary: "Help stabilize the atrioventricular valves during ventricular contraction.",
    group: "Support structure",
  },
};

const quizTargets = ["Left ventricle", "Right ventricle", "Left atrium", "Right atrium"];

const focusRotations = {
  "Left ventricle": [-0.08, -0.38, -0.05],
  "Right ventricle": [-0.05, 0.5, -0.03],
  "Left atrium": [0.05, 2.45, 0.08],
  "Right atrium": [0.02, 1.5, 0.06],
  "Aortic valve": [-0.34, 2.78, 0.12],
  "Pulmonary valve": [-0.3, 0.72, -0.08],
  "Mitral valve": [-0.32, 2.25, 0.08],
  "Tricuspid valve": [-0.32, 0.95, -0.05],
  "Papillary muscles": [-0.46, -0.1, 0.02],
};

const surfaceHeartUid = "3f8072336ce94d18b3d0d055a1ece089";

const surfaceFocus = {
  "Left ventricle": { yaw: -0.34, zoom: 0.72, x: 0.07, y: -0.12, calloutX: "67%", calloutY: "66%" },
  "Right ventricle": { yaw: 0.32, zoom: 0.72, x: -0.06, y: -0.1, calloutX: "43%", calloutY: "65%" },
  "Left atrium": { yaw: 2.48, zoom: 0.76, x: 0.06, y: 0.1, calloutX: "64%", calloutY: "39%" },
  "Right atrium": { yaw: 0.52, zoom: 0.76, x: -0.07, y: 0.1, calloutX: "38%", calloutY: "40%" },
};

function SurfaceHeartViewer({ selected }) {
  const frameRef = useRef();
  const baseCameraRef = useRef();
  const [viewerApi, setViewerApi] = useState(null);

  useEffect(() => {
    let cancelled = false;
    let script = document.getElementById("sketchfab-viewer-api");

    function initializeViewer() {
      if (cancelled || !frameRef.current || !window.Sketchfab) return;

      const client = new window.Sketchfab("1.12.1", frameRef.current);
      client.init(surfaceHeartUid, {
        autostart: 1,
        camera: 0,
        dnt: 1,
        preload: 0,
        ui_controls: 0,
        ui_help: 0,
        ui_infos: 0,
        ui_settings: 0,
        ui_stop: 0,
        success(api) {
          if (cancelled) return;
          api.start();
          api.addEventListener("viewerready", () => {
            api.setBackground({ color: [0, 0, 0] });
            api.getCameraLookAt((error, camera) => {
              if (error || cancelled) return;
              baseCameraRef.current = camera;
              setViewerApi(api);
            });
          });
        },
      });
    }

    if (window.Sketchfab) {
      initializeViewer();
    } else if (script) {
      script.addEventListener("load", initializeViewer, { once: true });
    } else {
      script = document.createElement("script");
      script.id = "sketchfab-viewer-api";
      script.src = "https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js";
      script.async = true;
      script.addEventListener("load", initializeViewer, { once: true });
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
      script?.removeEventListener("load", initializeViewer);
    };
  }, []);

  useEffect(() => {
    const camera = baseCameraRef.current;
    if (!viewerApi || !camera) return;

    if (!selected || !surfaceFocus[selected]) {
      viewerApi.setCameraLookAt(camera.position, camera.target, 0.9);
      return;
    }

    const preset = surfaceFocus[selected];
    const vector = camera.position.map((value, index) => value - camera.target[index]);
    const distance = Math.hypot(...vector);
    const cosine = Math.cos(preset.yaw);
    const sine = Math.sin(preset.yaw);
    const rotated = [
      vector[0] * cosine + vector[2] * sine,
      vector[1],
      -vector[0] * sine + vector[2] * cosine,
    ];
    const target = [
      camera.target[0] + distance * preset.x,
      camera.target[1] + distance * preset.y,
      camera.target[2],
    ];
    const position = rotated.map((value, index) => target[index] + value * preset.zoom);

    viewerApi.setCameraEasing("easeInOutCubic");
    viewerApi.setCameraLookAt(position, target, 1.1);
  }, [selected, viewerApi]);

  const callout = selected ? surfaceFocus[selected] : null;

  return (
    <>
      <iframe
        ref={frameRef}
        className="heart-lab__surface-viewer"
        title="Realistic interactive exterior model of the human heart"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
      />
      {callout && (
        <div
          className="heart-lab__surface-callout"
          style={{ "--callout-x": callout.calloutX, "--callout-y": callout.calloutY }}
          aria-hidden="true"
        >
          <span>{selected}</span>
          <i />
        </div>
      )}
    </>
  );
}

function classifyStructure(name = "") {
  const normalizedName = name
    .replace(/[_-]+/g, " ")
    .replace(/\.\d+$/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const lowerName = normalizedName.toLowerCase();
  if (lowerName.includes("left atrium")) return "Left atrium";
  if (lowerName.includes("left ventricle")) return "Left ventricle";
  if (lowerName.includes("right atrium")) return "Right atrium";
  if (lowerName.includes("right ventricle")) return "Right ventricle";
  if (lowerName.includes("papillary")) return "Papillary muscles";
  if (lowerName.includes("coronary leaflet")) return "Aortic valve";
  if (lowerName.includes("pulmonary valve")) return "Pulmonary valve";
  if (lowerName.includes("left atrioventricular") || lowerName.includes("mitral")) return "Mitral valve";
  if (lowerName.includes("right atrioventricular") || lowerName.includes("tricuspid")) return "Tricuspid valve";
  return normalizedName || "Heart structure";
}

function structureColor(name) {
  const structure = classifyStructure(name);
  if (structure === "Left ventricle") return "#bd4938";
  if (structure === "Left atrium") return "#e07b62";
  if (structure === "Right ventricle") return "#315e94";
  if (structure === "Right atrium") return "#4f8aa8";
  if (structureDetails[structure]?.group === "Valve") return "#e8ca8e";
  if (structure === "Papillary muscles") return "#a85a48";
  return "#9d342b";
}

function HeartMesh({ activeMode, onSelect, selected, onQuizAnswer, quizActive, resetSignal }) {
  const { scene } = useGLTF("/learn/models/heart-z-anatomy.glb");
  const boundsRef = useRef();
  const modelRef = useRef();

  const model = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((object) => {
      if (!object.isMesh) return;
      const color = structureColor(object.name);
      object.material = new THREE.MeshPhysicalMaterial({
        color,
        roughness: 0.42,
        metalness: 0.02,
        clearcoat: 0.24,
        clearcoatRoughness: 0.58,
        sheen: 0.16,
        sheenColor: new THREE.Color("#7b1f1a"),
      });
      object.userData.nasBaseColor = color;
      object.castShadow = true;
      object.receiveShadow = true;
    });
    return clone;
  }, [scene]);

  useEffect(() => {
    return () => {
      model.traverse((object) => {
        if (object.isMesh) object.material.dispose();
      });
    };
  }, [model]);

  useEffect(() => {
    model.traverse((object) => {
      if (!object.isMesh) return;
      const structure = classifyStructure(object.name);
      const isSelected = selected === structure;
      const hasSelection = Boolean(selected);
      const isValve = structureDetails[structure]?.group === "Valve";
      const isRightHeart = structure.startsWith("Right");
      const base = new THREE.Color(object.userData.nasBaseColor);

      if (activeMode === "interactions" && isValve) base.lerp(new THREE.Color("#e3c58d"), 0.55);
      if (activeMode === "pharmacology" && isRightHeart) base.lerp(new THREE.Color("#8f4861"), 0.28);
      if (activeMode === "clinical" && structure.includes("ventricle")) base.lerp(new THREE.Color("#b64a36"), 0.18);
      if (!hasSelection) base.set("#8f2e25");

      if (hasSelection && !isSelected) base.multiplyScalar(0.38);
      object.material.color.copy(isSelected ? base.clone().lerp(new THREE.Color("#ffd08a"), 0.28) : base);
      object.material.emissive.copy(isSelected ? base : new THREE.Color("#080101"));
      object.material.emissiveIntensity = isSelected ? 0.9 : activeMode === "safety" ? 0.08 : 0.015;
      object.material.clearcoat = isSelected ? 0.68 : hasSelection ? 0.12 : 0.3;
      object.material.roughness = isSelected ? 0.3 : hasSelection ? 0.62 : 0.44;
      object.material.transparent = hasSelection && !isSelected;
      object.material.opacity = hasSelection && !isSelected ? 0.3 : 1;
      object.material.depthWrite = !hasSelection || isSelected;
      object.renderOrder = isSelected ? 2 : 0;
    });
  }, [activeMode, model, selected]);

  useEffect(() => {
    const timer = window.setTimeout(() => boundsRef.current?.refresh().fit(), 40);
    return () => window.clearTimeout(timer);
  }, [resetSignal]);

  useFrame((state, delta) => {
    const target = focusRotations[selected] || focusRotations["Left ventricle"];
    if (modelRef.current) {
      modelRef.current.rotation.x = THREE.MathUtils.damp(modelRef.current.rotation.x, target[0], 5.2, delta);
      modelRef.current.rotation.y = THREE.MathUtils.damp(modelRef.current.rotation.y, target[1], 5.2, delta);
      modelRef.current.rotation.z = THREE.MathUtils.damp(modelRef.current.rotation.z, target[2], 5.2, delta);
    }
    if (activeMode === "safety") {
      const pulse = 0.12 + (Math.sin(state.clock.elapsedTime * 3.2) + 1) * 0.08;
      model.traverse((object) => {
        if (object.isMesh && selected !== classifyStructure(object.name)) {
          object.material.emissiveIntensity = pulse;
        }
      });
    }
  });

  function handlePointer(event) {
    event.stopPropagation();
    const structure = classifyStructure(event.object.name);
    onSelect(structure);
    if (quizActive) onQuizAnswer(structure);
  }

  function handlePointerOver(event) {
    event.stopPropagation();
    document.body.style.cursor = "pointer";
  }

  function handlePointerOut() {
    document.body.style.cursor = "default";
  }

  return (
    <Bounds ref={boundsRef} clip margin={1.18}>
      <Center>
        <group ref={modelRef} rotation={focusRotations["Left ventricle"]}>
          <primitive
            object={model}
            onClick={handlePointer}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
          />
        </group>
      </Center>
    </Bounds>
  );
}

function CameraZoom({ level }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.zoom = THREE.MathUtils.clamp(Math.pow(1.28, level), 0.72, 3.45);
    camera.updateProjectionMatrix();
  }, [camera, level]);

  return null;
}

function HeartStage({ activeMode, onSelect, selected, onQuizAnswer, quizActive, resetSignal, zoomLevel }) {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0.1, 3.7], fov: 32 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      shadows
    >
      <ambientLight intensity={0.62} />
      <hemisphereLight color="#f2d3aa" groundColor="#17070a" intensity={1.25} />
      <spotLight position={[-3.2, 4.5, 4.6]} angle={0.34} penumbra={0.72} intensity={115} color="#ffd7ae" castShadow />
      <spotLight position={[4.2, 1.2, 2.8]} angle={0.42} penumbra={0.8} intensity={82} color="#a85b70" />
      <pointLight position={[-2.5, -1.4, -2]} intensity={35} color="#c4885f" />
      <HeartMesh
        activeMode={activeMode}
        onSelect={onSelect}
        selected={selected}
        onQuizAnswer={onQuizAnswer}
        quizActive={quizActive}
        resetSignal={resetSignal}
      />
      <CameraZoom level={zoomLevel} />
      <ContactShadows position={[0, -1.25, 0]} opacity={0.32} scale={4} blur={2.8} far={3} color="#240b0b" />
      <OrbitControls makeDefault enablePan={false} minDistance={1.6} maxDistance={6} dampingFactor={0.075} />
    </Canvas>
  );
}

export default function HeartModelViewer({ activeMode }) {
  const [view, setView] = useState("surface");
  const [selected, setSelected] = useState(null);
  const [quizActive, setQuizActive] = useState(false);
  const [quizTarget, setQuizTarget] = useState("Right ventricle");
  const [quizResult, setQuizResult] = useState("");
  const [resetSignal, setResetSignal] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(2);
  const detail = structureDetails[selected] || {
    group: "Whole organ",
    summary: "Rotate the heart freely, then select a chamber to bring its anatomy into focus.",
  };

  function startQuiz() {
    const currentIndex = quizTargets.indexOf(quizTarget);
    setQuizTarget(quizTargets[(currentIndex + 1) % quizTargets.length]);
    setQuizResult("");
    setQuizActive(true);
  }

  function handleQuizAnswer(answer) {
    setQuizResult(answer === quizTarget ? "Correct. Structure identified." : `That is the ${answer}. Try again.`);
  }

  return (
    <div className="heart-lab">
      <div className="heart-lab__topline">
        <div><span>3D anatomy</span><strong>Human heart</strong></div>
        <div className="heart-lab__view-switch" aria-label="Heart model view">
          <button type="button" className={view === "surface" ? "is-active" : ""} onClick={() => { setView("surface"); setSelected(null); }}>
            Surface
          </button>
          <button type="button" className={view === "internal" ? "is-active" : ""} onClick={() => setView("internal")}>
            Internal
          </button>
        </div>
      </div>

      <div className={`heart-lab__canvas heart-lab__canvas--${view}`} role="group" aria-label="Interactive three dimensional model of the human heart">
        {view === "surface" ? (
          <SurfaceHeartViewer selected={selected} />
        ) : (
          <>
            <HeartStage
              activeMode={activeMode}
              onSelect={setSelected}
              selected={selected}
              onQuizAnswer={handleQuizAnswer}
              quizActive={quizActive}
              resetSignal={resetSignal}
              zoomLevel={zoomLevel}
            />
            {selected && (
              <div className="heart-lab__selection-card" aria-live="polite">
                <span>Selected · {detail.group}</span>
                <strong>{selected}</strong>
                <p>{detail.summary}</p>
              </div>
            )}
            <div className="heart-lab__view-controls" aria-label="3D model view controls">
              <button type="button" aria-label="Zoom out" onClick={() => setZoomLevel((value) => Math.max(-1, value - 1))}>−</button>
              <button type="button" onClick={() => { setZoomLevel(2); setResetSignal((value) => value + 1); }}>Reset</button>
              <button type="button" aria-label="Zoom in" onClick={() => setZoomLevel((value) => Math.min(5, value + 1))}>+</button>
            </div>
          </>
        )}
        <div className="heart-lab__instructions" aria-hidden="true">
          <span>Drag to rotate</span><span>Scroll or pinch to zoom</span><span>{view === "surface" ? "Study surface anatomy" : "Select a structure"}</span>
        </div>
      </div>

      <div className="heart-lab__readout" aria-live="polite">
        <div>
          <span>{view === "surface" && !selected ? "External anatomy" : detail.group}</span>
          <h4>{view === "surface" && !selected ? "Examine the living form" : selected || "Explore the heart"}</h4>
          <p>{view === "surface" && !selected ? "Inspect the heart's muscular surface, major vessels, coronary pathways, and natural tissue variation. Choose a structure to study it without leaving the surface model." : detail.summary}</p>
        </div>
        <div className="heart-lab__structures" aria-label="Select a heart structure">
          <button type="button" className={view === "surface" ? "is-active" : ""} onClick={() => { setView("surface"); setSelected(null); }}>
            Exterior view
          </button>
          {quizTargets.map((structure) => (
            <button type="button" className={selected === structure ? "is-active" : ""} onClick={() => setSelected(structure)} key={structure}>
              <i style={{ "--structure-color": structureColor(structure) }} aria-hidden="true" />
              {structure}
            </button>
          ))}
        </div>
      </div>

      <div className={`heart-lab__quiz ${quizActive ? "is-active" : ""}`}>
        <div>
          <span>Structure check</span>
          <strong>{quizActive ? `Find the ${quizTarget}.` : "Test spatial recognition."}</strong>
          {quizResult && <p>{quizResult}</p>}
        </div>
        <button type="button" onClick={() => { setView("internal"); if (quizActive) startQuiz(); else setQuizActive(true); }}>
          {quizActive ? "New prompt" : "Begin"}
        </button>
      </div>

      <p className="heart-lab__credit">
        Surface anatomy: <a href="https://sketchfab.com/3d-models/realistic-human-heart-3f8072336ce94d18b3d0d055a1ece089" target="_blank" rel="noreferrer">Realistic Human Heart</a> by neshallads, licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer">CC BY 4.0</a>. Internal anatomy adapted from BodyParts3D and <a href="https://github.com/Z-Anatomy/Models-of-human-anatomy" target="_blank" rel="noreferrer">Z-Anatomy</a> under Creative Commons licenses.
      </p>
    </div>
  );
}

useGLTF.preload("/learn/models/heart-z-anatomy.glb");

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
      const isValve = structureDetails[structure]?.group === "Valve";
      const isRightHeart = structure.startsWith("Right");
      const base = new THREE.Color(object.userData.nasBaseColor);

      if (activeMode === "interactions" && isValve) base.lerp(new THREE.Color("#e3c58d"), 0.55);
      if (activeMode === "pharmacology" && isRightHeart) base.lerp(new THREE.Color("#8f4861"), 0.28);
      if (activeMode === "clinical" && structure.includes("ventricle")) base.lerp(new THREE.Color("#b64a36"), 0.18);

      if (!isSelected) base.multiplyScalar(0.38);
      object.material.color.copy(isSelected ? base.clone().lerp(new THREE.Color("#ffd08a"), 0.28) : base);
      object.material.emissive.copy(isSelected ? base : new THREE.Color("#080101"));
      object.material.emissiveIntensity = isSelected ? 0.9 : activeMode === "safety" ? 0.08 : 0.015;
      object.material.clearcoat = isSelected ? 0.68 : 0.12;
      object.material.roughness = isSelected ? 0.3 : 0.62;
      object.material.transparent = !isSelected;
      object.material.opacity = isSelected ? 1 : 0.3;
      object.material.depthWrite = isSelected;
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
  const [selected, setSelected] = useState("Left ventricle");
  const [quizActive, setQuizActive] = useState(false);
  const [quizTarget, setQuizTarget] = useState("Right ventricle");
  const [quizResult, setQuizResult] = useState("");
  const [resetSignal, setResetSignal] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(2);
  const detail = structureDetails[selected] || {
    group: "Anatomy",
    summary: "Select another visible structure to continue exploring the model.",
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
        <span className="heart-lab__live"><i /> Interactive</span>
      </div>

      <div className="heart-lab__canvas" role="group" aria-label="Interactive three dimensional model of the human heart">
        <HeartStage
          activeMode={activeMode}
          onSelect={setSelected}
          selected={selected}
          onQuizAnswer={handleQuizAnswer}
          quizActive={quizActive}
          resetSignal={resetSignal}
          zoomLevel={zoomLevel}
        />
        <div className="heart-lab__selection-card" aria-live="polite">
          <span>Selected · {detail.group}</span>
          <strong>{selected}</strong>
          <p>{detail.summary}</p>
        </div>
        <div className="heart-lab__instructions" aria-hidden="true">
          <span>Drag to rotate</span><span>Scroll or pinch to zoom</span><span>Select a structure</span>
        </div>
        <div className="heart-lab__view-controls" aria-label="3D model view controls">
          <button type="button" aria-label="Zoom out" onClick={() => setZoomLevel((value) => Math.max(-1, value - 1))}>−</button>
          <button type="button" onClick={() => { setZoomLevel(2); setResetSignal((value) => value + 1); }}>Reset</button>
          <button type="button" aria-label="Zoom in" onClick={() => setZoomLevel((value) => Math.min(5, value + 1))}>+</button>
        </div>
      </div>

      <div className="heart-lab__readout" aria-live="polite">
        <div>
          <span>{detail.group}</span>
          <h4>{selected}</h4>
          <p>{detail.summary}</p>
        </div>
        <div className="heart-lab__structures" aria-label="Select a heart structure">
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
        <button type="button" onClick={quizActive ? startQuiz : () => setQuizActive(true)}>
          {quizActive ? "New prompt" : "Begin"}
        </button>
      </div>

      <p className="heart-lab__credit">
        Anatomy adapted from BodyParts3D and <a href="https://github.com/Z-Anatomy/Models-of-human-anatomy" target="_blank" rel="noreferrer">Z-Anatomy</a> under <a href="https://github.com/Z-Anatomy/Models-of-human-anatomy/blob/master/License.txt" target="_blank" rel="noreferrer">Creative Commons licenses</a>. Geometry optimized by NaS Research.
      </p>
    </div>
  );
}

useGLTF.preload("/learn/models/heart-z-anatomy.glb");

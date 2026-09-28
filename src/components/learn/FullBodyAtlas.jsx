"use client";

import { scrollPageTo } from "@/lib/pageScroll.mjs";
import { useEffect, useMemo, useRef, useState } from "react";
import { IconEye, IconEyeOff, IconSearch, IconRotate, IconFocus2, IconArrowsMaximize } from "@tabler/icons-react";
import "./full-body-atlas.css";
import { anatomyLessons, organStructures } from "@/data/anatomyLessons";

import { anatomyCollections, anatomySystems } from "@/data/anatomyCollections";
import { organAssemblies, assemblyParts } from "@/data/organAssemblies";
const organGuides = anatomyCollections.map(item => ({...item,...anatomyLessons.find(lesson => lesson.id === item.id)}));

const baseLayers = [
  { id: "lymphatic", name: "Lymphatic", color: "#bca487", description: "Spleen, thymus & lymph nodes" },
  { id: "muscular", name: "Muscular", color: "#ba7669", description: "Movement & support" },
  { id: "skeleton", name: "Skeletal", color: "#e8dfc8", description: "Bones & joints" },
  { id: "cardiovascular", name: "Cardiovascular", color: "#d76760", description: "Heart & blood vessels" },
  { id: "nervous", name: "Nervous", color: "#d7bd62", description: "Brain, spinal cord & nerves" },
  { id: "visceral", name: "Internal organs", color: "#b88e79", description: "Respiration, digestion & elimination" },
];
const defaultOpacity = { lymphatic: 90, muscular: 24, skeleton: 78, cardiovascular: 94, nervous: 86, visceral: 56 };
const basePresets = [
  { name: "Whole body", visible: ["muscular", "skeleton"], focus: null },
  { name: "Bones & joints", visible: ["skeleton"], focus: "skeleton" },
  { name: "Heart & vessels", visible: ["skeleton", "cardiovascular"], focus: "cardiovascular" },
  { name: "Neural pathways", visible: ["skeleton", "nervous"], focus: "nervous" },
  { name: "Internal organs", visible: ["skeleton", "visceral"], focus: "visceral" },
];

export default function FullBodyAtlas({ initialFocus = null, onOpenHeart, onExploreSystem }) {
  const [sex, setSex] = useState("male");
  const layers = sex === "female" ? [{id:"skin",name:"Skin",color:"#c3a28d",description:"Female body surface"},...baseLayers] : baseLayers;
  const presets = sex === "female" ? [{name:"Whole body",visible:["skin","visceral"],focus:null},...basePresets.slice(1)] : basePresets;
  const workspace = useRef(null);
  const frame = useRef(null);
  const readyRef = useRef(false);
  const [ready, setReady] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [error, setError] = useState("");
  const [catalogError, setCatalogError] = useState(false);
  const [catalog, setCatalog] = useState([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [visible, setVisible] = useState(initialFocus ? ["skeleton", initialFocus] : presets[0].visible);
  const [focus, setFocus] = useState(initialFocus);
  const [opacity, setOpacity] = useState({...defaultOpacity,skin:12});
  const [explode, setExplode] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isolated, setIsolated] = useState(false);
  const [hidden, setHidden] = useState([]);
  const [rotating, setRotating] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [loadingLayers, setLoadingLayers] = useState([]);
  const [view, setView] = useState("front");
  const [organId, setOrganId] = useState(null);
  const [browseMode, setBrowseMode] = useState('organs');
  const [functionStep, setFunctionStep] = useState(0);
  const [section, setSection] = useState({enabled:false,axis:'z',position:50});
  const [organSystem, setOrganSystem] = useState("all");
  const [assemblyMode,setAssemblyMode] = useState("layered");
  const lesson = organGuides.find(item=>item.id===organId);
  const assembly = lesson && organAssemblies[lesson.id];
  const groupIds = useMemo(()=>lesson?assemblyParts(lesson,catalog,assembly?assemblyMode:'surface').map(item=>item.id):[],[lesson,catalog,assembly,assemblyMode]);
  const shellIds = useMemo(()=>lesson&&assembly&&assemblyMode!=='surface'&&assemblyMode!=='network'?organStructures(lesson,catalog).map(item=>item.id):[],[lesson,catalog,assembly,assemblyMode]);
  const stageRef = useRef(null);

  function send(command, payload = {}) {
    frame.current?.contentWindow?.postMessage({ type: "nas-atlas-command", command, ...payload }, window.location.origin);
  }

  useEffect(() => {
    const controller = new AbortController();
    fetch(`/learn/body-atlas/structures${sex === "female" ? "-female" : ""}.json`, { signal: controller.signal })
      .then(response => { if (!response.ok) throw new Error("Catalog unavailable"); return response.json(); })
      .then(setCatalog).catch(err => { if (err.name !== "AbortError") setCatalogError(true); });
    function receive(event) {
      if (event.origin !== window.location.origin || event.source !== frame.current?.contentWindow) return;
      const data = event.data;
      if (data?.type === "nas-atlas-ready") { readyRef.current = true; setReady(true); setError(""); }
      if (data?.type === "nas-atlas-exit") setExpanded(false);
      if (data?.type === "nas-atlas-camera-moved") { setView(null); setRotating(false); }
      if (data?.type === "nas-atlas-select") { setSelected(data.selection); setOrganId(null); setSection(current=>({...current,enabled:false})); setIsolated(false); }
      if (data?.type === "nas-atlas-loading") setLoadingLayers(data.layers);
      if (data?.type === "nas-atlas-error") setError(data.message);
    }
    window.addEventListener("message", receive);
    const timer = setTimeout(() => {
      if (!readyRef.current) setError("The 3D viewer is taking longer than expected. Retry to reload the models.");
    }, 45000);
    return () => { controller.abort(); clearTimeout(timer); window.removeEventListener("message", receive); };
  }, [attempt, sex]);

  useEffect(() => {
    if (!initialFocus) return;
    setFocus(initialFocus);
    setVisible(current => [...new Set([...current, initialFocus])]);
  }, [initialFocus]);

  useEffect(() => {
    if (!ready) return;
    frame.current?.contentWindow?.postMessage({ type: "nas-atlas-state", state: {
      visibleLayers: visible, focusedLayer: focus, opacity, explode: explode / 100,
      selectedId: selected?.id || null, groupIds, shellIds, shellOpacity: assemblyMode==='inside'?.16:.62, section, isolated, hidden, rotating,
    } }, window.location.origin);
  }, [ready, visible, focus, opacity, explode, selected, groupIds, shellIds, assemblyMode, section, isolated, hidden, rotating]);

  useEffect(() => {
    if (!expanded) return;
    const previous = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    workspace.current?.querySelector("button")?.focus();
    function escape(event) {
      if (event.key === "Escape") setExpanded(false);
      if (event.key === "Tab") {
        const elements = [...workspace.current.querySelectorAll('button:not(:disabled), input:not(:disabled), select, a[href], iframe')].filter(element=>element.getClientRects().length>0);
        const first = elements[0]; const last = elements.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    }
    window.addEventListener("keydown", escape);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", escape); previousFocus?.focus(); };
  }, [expanded]);

  const matches = useMemo(() => catalog.filter(item =>
    (filter === "all" || item.layerId === filter) && item.name.toLowerCase().includes(query.trim().toLowerCase())
  ), [catalog, query, filter]);
  const selectedLayer = layers.find(layer => layer.id === selected?.layerId);

  function chooseOrgan(item) {
    const parts=assemblyParts(item,catalog,organAssemblies[item.id]?'layered':'surface');
    if(!parts.length)return;
    setAssemblyMode('layered');
    setOrganId(item.id);setFunctionStep(0);setSelected(parts[0]);setVisible([...new Set(['skeleton',...parts.map(part=>part.layerId)])]);setFocus(item.layer);
    setIsolated(true);setHidden([]);setExplode(0);setRotating(false);setView(null);setSection({enabled:false,axis:'z',position:50});
    send('focus-group',{ids:parts.map(part=>part.id)});
    if(window.innerWidth<=640)scrollPageTo(stageRef.current);
  }
  function changeAssembly(mode) {
    const parts=assemblyParts(lesson,catalog,mode);
    setAssemblyMode(mode);setIsolated(true);setHidden([]);setSection(current=>({...current,enabled:false}));
    setVisible([...new Set(['skeleton',...parts.map(part=>part.layerId)])]);
    setSelected(parts[0]||null);
    send('focus-group',{ids:parts.map(part=>part.id)});
  }
  function choose(item) {
    setOrganId(null);setSection(current=>({...current,enabled:false}));
    setVisible(current => [...new Set([...current, item.layerId])]);
    setFocus(item.layerId);
    setHidden(current => current.filter(id => id !== item.id));
    setSelected(item);
    setIsolated(false);
    send("select", { id: item.id });
  }
  function reset() {
    setOrganId(null);setSection({enabled:false,axis:'z',position:50});
    setVisible(presets[0].visible); setFocus(null); setOpacity(defaultOpacity); setExplode(0);
    setSelected(null); setIsolated(false); setHidden([]); setRotating(false); setView("front");
    send("reset");
  }

  function retry() {
    readyRef.current = false;
    setReady(false);
    setError("");
    setCatalogError(false);
    setLoadingLayers([]);
    setAttempt(current => current + 1);
  }

  return (
    <div ref={workspace} className={`full-body-atlas atlas-workbench ${expanded ? "atlas-workbench--expanded" : ""}`}>
      <div className="atlas-topbar">
        <div><span className="atlas-live-dot" /><strong>Anatomy explorer</strong><span className="atlas-count">{catalog.length ? catalog.length.toLocaleString() : "…"} structures · {layers.length} model layers</span></div>
        <button type="button" onClick={() => setExpanded(!expanded)} aria-pressed={expanded}><IconArrowsMaximize size={16} />{expanded ? "Close expanded view" : "Expand"}</button>
      </div>
      <div className="atlas-sex-selector" role="group" aria-label="Anatomical reference sex">
        <span>Reference anatomy</span>{["male","female"].map(value=><button type="button" key={value} aria-pressed={sex===value} onClick={()=>{if(sex===value)return;setSex(value);setCatalog([]);setSelected(null);setOrganId(null);setIsolated(false);setHidden([]);setQuery("");setFilter("all");setOrganSystem("all");setFocus(null);setVisible(value==="female"?["skin","visceral"]:basePresets[0].visible);setSection({enabled:false,axis:"z",position:50});setExplode(0);setRotating(false);setView("front");retry();}}>{value==="male"?"Male":"Female"}</button>)}
        <small>{sex==="female"?"HRA female reference · coverage differs by system":"Z-Anatomy male reference"}</small>
      </div>
      <nav className="atlas-presets" aria-label="Anatomy study views">
        {presets.map(preset => <button type="button" key={preset.name} aria-pressed={focus === preset.focus && visible.length === preset.visible.length && preset.visible.every(id => visible.includes(id))}
          onClick={() => { setOrganId(null); setSection(current=>({...current,enabled:false})); setVisible(preset.visible); setFocus(preset.focus); setSelected(null); setIsolated(false); setHidden([]); setExplode(0); send("reset"); setView("front"); }}>{preset.name}</button>)}
      </nav>
      <aside className="atlas-browser" aria-label="Structure browser">
        <div className="atlas-browser-tabs" aria-label="Browse anatomy"><button type="button" aria-pressed={browseMode==='organs'} onClick={()=>setBrowseMode('organs')}>Organ guide</button><button type="button" aria-pressed={browseMode==='structures'} onClick={()=>setBrowseMode('structures')}>All structures</button></div>
        {browseMode==='organs'?<><span className="atlas-eyebrow">Organs, glands & systems</span><p className="atlas-organ-intro">Choose a system, then isolate an organ or gland. Unavailable structures are marked below.</p><select aria-label="Browse organ systems" value={organSystem} onChange={event=>setOrganSystem(event.target.value)}><option value="all">All organ systems</option>{anatomySystems.map(system=><option key={system.id} value={system.id}>{system.name}</option>)}</select><div className="atlas-organ-cards">{organGuides.filter(item=>organSystem==="all"||item.system===organSystem).map((item,index)=><button type="button" key={item.id} disabled={!ready||!organStructures(item,catalog).length} aria-pressed={organId===item.id} onClick={()=>chooseOrgan(item)}><span className="atlas-organ-number" style={{color:item.color}}>{String(index+1).padStart(2,'0')}</span><span><strong>{item.name}</strong><small>{catalog.length&&!organStructures(item,catalog).length?"Model not yet available":item.tag}</small></span><span className="atlas-organ-arrow">↗</span></button>)}</div><p className="atlas-organ-intro">Each reference has different source coverage. Unavailable organs are disabled; the female reference does not include a complete skeleton or muscular system.</p></>:<>

        <label className="atlas-search"><IconSearch size={16} /><input aria-label="Search anatomical structures" placeholder="Search anatomy…" value={query} onChange={event => setQuery(event.target.value)} /></label>
        <select aria-label="Filter structures by system" value={filter} onChange={event => setFilter(event.target.value)}><option value="all">All systems</option>{layers.map(layer => <option key={layer.id} value={layer.id}>{layer.name}</option>)}</select>
        <p className="atlas-browser-count" role="status">{catalogError ? "Structure index unavailable. Reload to retry." : `${matches.length.toLocaleString()} structures${query ? ` matching “${query}”` : " to explore"}`}</p>
        <div className="atlas-results">
          {matches.slice(0, 80).map(item => <button type="button" key={item.id} disabled={!ready} aria-pressed={selected?.id === item.id} onClick={() => choose(item)}><span style={{ background: layers.find(layer => layer.id === item.layerId)?.color }} /><span>{item.name}<small>{layers.find(layer => layer.id === item.layerId)?.name}</small></span></button>)}
          {!matches.length && !!catalog.length && <p>No structures found. Try a broader name or another system.</p>}
          {matches.length > 80 && <p>Showing the first 80. Search or choose a system to narrow the list.</p>}
        </div>
        </>}
      </aside>
      <div ref={stageRef} className="full-body-atlas__stage atlas-stage">
        <div className="full-body-atlas__stage-heading"><span>Human Atlas / Anatomy</span><strong>{lesson ? lesson.name : isolated ? selected?.name : layers.find(layer => layer.id === focus)?.name || "Whole body"}</strong></div>
        <iframe key={`${sex}-${attempt}`} ref={frame} src={`/learn/body-atlas/index.html?sex=${sex}`} className="full-body-atlas__viewer" title="Interactive layered three dimensional human body" />
        {error && <div className="atlas-error" role="alert"><p>{error}</p><button type="button" onClick={retry}>Retry viewer</button></div>}
        {!error && !!loadingLayers.length && <p className="atlas-load-status" role="status">Loading {loadingLayers.join(", ")}…</p>}
        {ready && !visible.length && <p className="atlas-empty">All systems are hidden. Enable a layer to explore.</p>}
        {lesson&&<div className="atlas-organ-toolbar"><button type="button" aria-pressed={isolated} onClick={()=>setIsolated(!isolated)}>{isolated?'Show body context':'Isolate organ'}</button><button type="button" onClick={()=>send('focus')}>Refocus {lesson.name.toLowerCase()}</button><span>{groupIds.length} model part{groupIds.length===1?'':'s'}</span></div>}
        {assembly&&<div className="atlas-assembly-controls"><span>{assembly.label}</span><div role="group" aria-label="Organ anatomy layers">{[['surface','Surface'],['layered','Layered anatomy'],['inside','See through'],['network',lesson.id==='lungs'?'Airways & vessels':'Connected structures']].map(([id,label])=><button type="button" key={id} aria-pressed={assemblyMode===id} onClick={()=>changeAssembly(id)}>{label}</button>)}</div></div>}
        <div className="atlas-camera" aria-label="Camera controls">
          {["front", "back", "left", "right"].map(direction => <button type="button" key={direction} disabled={!ready} aria-pressed={view === direction} onClick={() => { setView(direction); setRotating(false); send("view", { view: direction }); }}>{direction}</button>)}
          <button type="button" disabled={!ready} onClick={() => send("zoom", { factor: 0.8 })} aria-label="Zoom in">+</button><button type="button" disabled={!ready} onClick={() => send("zoom", { factor: 1.25 })} aria-label="Zoom out">−</button>
          <button type="button" disabled={!ready} onClick={() => setRotating(!rotating)} aria-label="Auto rotate model" aria-pressed={rotating}><IconRotate size={16} /></button>
        </div>
        <div className="full-body-atlas__instructions"><span>Drag to rotate</span><i /><span>Scroll to zoom</span><i /><span>Click to inspect</span></div>
      </div>
      <aside className="atlas-inspector" aria-label="Layers and inspection">
        {lesson?<section className="atlas-organ-lesson" aria-label={`${lesson.name} function`}><span className="atlas-eyebrow">Structure → function</span><h3>{lesson.name}</h3><p>{lesson.summary}</p><div className="atlas-function-flow" aria-label="Explore organ function">{lesson.steps?.map(([name],i)=><button type="button" key={name} aria-pressed={functionStep===i} onClick={()=>setFunctionStep(i)}><span>{i+1}</span>{name}{i<2&&<i>↓</i>}</button>)}</div>{lesson.steps&&<p className="atlas-function-detail" aria-live="polite">{lesson.steps[functionStep][1]}</p>}<div className="atlas-look"><span className="atlas-eyebrow">Look for this</span><p>{lesson.look}</p></div><details className="atlas-group-parts"><summary>Named structures ({groupIds.length})</summary><div>{assemblyParts(lesson,catalog,assembly?assemblyMode:'surface').slice(0,80).map(part=><button type="button" key={part.id} onClick={()=>{choose(part);setIsolated(true);}}>{part.name} ↗</button>)}{groupIds.length>80&&<p>Search All structures to inspect the remaining parts.</p>}</div></details><a href={lesson.source} target="_blank" rel="noreferrer">Read the anatomy reference ↗</a>{lesson.id==='heart'&&onOpenHeart&&<button type="button" className="atlas-deep-link" onClick={onOpenHeart}>Enter the detailed heart lab ↗</button>}</section>:<div className="atlas-guide-empty"><span className="atlas-eyebrow">Anatomy, with a purpose</span><h3>From shape to function.</h3><p>Choose an organ in the guide to reveal its function. Use All structures for individual muscles, bones, vessels, and nerves.</p></div>}
        <div className="atlas-section-control"><label><input type="checkbox" checked={section.enabled} onChange={e=>setSection({...section,enabled:e.target.checked})}/>Section plane</label>{section.enabled&&<><select aria-label="Section orientation" value={section.axis} onChange={e=>setSection({...section,axis:e.target.value})}><option value="z">Coronal · front / back</option><option value="x">Sagittal · left / right</option><option value="y">Transverse · upper / lower</option></select><label className="atlas-cut-slider">Position<input type="range" min="0" max="100" aria-label="Section position" value={section.position} onChange={e=>setSection({...section,position:Number(e.target.value)})}/><output>{section.position}%</output></label><p>Geometric cut through the supplied surfaces. Cut faces are open; this is not an imaging scan or a histology section.</p></>}</div>
        <details className="atlas-advanced-controls" open={!lesson}><summary>Layers & inspection controls</summary>

        <header><span className="atlas-eyebrow">01 / Body systems</span><h3>Reveal what’s beneath.</h3><p>Combine systems. Adjust their transparency. Select a structure to look closer.</p></header>
        <div className="atlas-layer-actions"><button type="button" onClick={() => { setVisible(layers.map(layer => layer.id)); setFocus(null); setIsolated(false); }}>Show all</button><button type="button" onClick={() => { setVisible([]); setSelected(null); setIsolated(false); }}>Hide all</button><button type="button" onClick={reset}>Reset</button></div>
        <div className="atlas-layer-list">{layers.map(layer => <div className={`atlas-layer ${focus === layer.id ? "is-active" : ""}`} key={layer.id}>
          <div><button type="button" aria-pressed={focus === layer.id} onClick={() => { setFocus(focus === layer.id ? null : layer.id); setVisible(current => [...new Set([...current, layer.id])]); setIsolated(false); }}><i style={{ background: layer.color }} /><strong>{layer.name}</strong></button><button type="button" aria-label={`${visible.includes(layer.id) ? "Hide" : "Show"} ${layer.name}`} aria-pressed={visible.includes(layer.id)} onClick={() => { setVisible(current => current.includes(layer.id) ? current.filter(id => id !== layer.id) : [...current, layer.id]); if (focus === layer.id) setFocus(null); setSelected(null); setIsolated(false); }}>{visible.includes(layer.id) ? <IconEye size={17} /> : <IconEyeOff size={17} />}</button></div>
          <label><span>Opacity</span><input type="range" min="5" max="100" value={opacity[layer.id]} disabled={!visible.includes(layer.id)} aria-label={`${layer.name} opacity`} onChange={event => setOpacity({ ...opacity, [layer.id]: Number(event.target.value) })} /><output>{opacity[layer.id]}%</output></label>
        </div>)}</div>
        <div className="atlas-explode"><label htmlFor="atlas-explode">Exploded view <output>{explode}%</output></label><input id="atlas-explode" type="range" min="0" max="100" value={explode} onChange={event => setExplode(Number(event.target.value))} /><p>Separate structures to see spatial relationships. Positions are displaced for inspection.</p></div>
        <section className="atlas-selection" aria-live="polite"><span className="atlas-eyebrow">02 / Inspect a structure</span>{selected ? <><h3>{selected.name}</h3><p>{selectedLayer?.name} system</p><div className="atlas-selection-actions"><button type="button" disabled={!ready} onClick={() => send("focus")}><IconFocus2 size={15} />Focus</button><button type="button" aria-pressed={isolated} onClick={() => setIsolated(!isolated)}>{isolated ? "Restore context" : "Isolate"}</button><button type="button" onClick={() => { setHidden(current => [...current, selected.id]); setSelected(null); setIsolated(false); }}>Hide</button></div></> : <p>Click the model or choose a structure from the browser. Its name and inspection controls appear here.</p>}
          {!!hidden.length && <button type="button" onClick={() => setHidden([])}>Restore {hidden.length} hidden structure{hidden.length === 1 ? "" : "s"}</button>}
          {(focus === "cardiovascular" || selected?.layerId === "cardiovascular") && <button type="button" className="atlas-heart-link" onClick={onOpenHeart}>Explore the detailed heart ↗</button>}
          {onExploreSystem && ["cardiovascular", "nervous"].includes(selected?.layerId || focus) && <button type="button" className="atlas-heart-link" onClick={() => onExploreSystem(selected?.layerId || focus)}>Explore connected pharmacology ↗</button>}
        </section>
        </details>
      </aside>
      <footer className="atlas-footer"><span>NaS Learn <i>/</i> Human Atlas</span><a href="/learn/models/body/LICENSE.txt" target="_blank" rel="noreferrer">{sex === "female" ? "Human Reference Atlas" : "Z-Anatomy / BodyParts3D"} · Model sources & licenses ↗</a></footer>
    </div>
  );
}

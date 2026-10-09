"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./LearnInteractiveLibrary.module.css";

const previews = [
  { kind: "heart", prompt: "Follow the heart’s electrical signal.", title: "Heart electrical conduction", caption: "SA node → AV node → His–Purkinje system" },
  { kind: "lesson", prompt: "Trace the heart’s electrical signal.", title: "The heart’s electrical system", caption: "Follow the pathway. Connect it to the ECG." },
  { kind: "receptor", prompt: "Connect a receptor to its response.", title: "Receptor signaling", caption: "Binding → Activation → Cellular response" },
  { kind: "kinetics", prompt: "See what happens between doses.", title: "Drug concentration over time", caption: "Dose · Interval · Elimination" },
];

function Diagram({ kind }) {
  const common = { viewBox: "0 0 360 160", fill: "none", "aria-hidden": true };
  if (kind === "heart") return <svg {...common}>
    <path d="M178 37C145 7 99 17 102 55c2 38 35 75 76 95 42-22 76-58 80-94 4-39-45-50-80-19Z" fill="#ddc5a9" fillOpacity=".3" stroke="#b49a7a" strokeWidth="1.5" />
    <path d="M148 42 169 72 180 88 180 106M180 106 153 130M180 106 209 131M153 130 135 104M209 131 227 101" stroke="#87683b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="148" cy="42" r="6" fill="#87683b" /><circle cx="169" cy="72" r="5" fill="#87683b" />
    <path d="M141 42H82M173 72h100M209 129h64" stroke="#b49a7a" />
    <text x="35" y="46">SA node</text><text x="279" y="76">AV node</text><text x="279" y="133">Purkinje</text>
  </svg>;
  if (kind === "receptor") return <svg {...common}>
    <path d="M25 79h110M225 79h110M25 105h110M225 105h110" stroke="#c2b599" strokeWidth="8" strokeDasharray="2 10" />
    <path d="M145 69q-14 18 0 46M161 69q-11 18 0 46M199 69q11 18 0 46M215 69q14 18 0 46" stroke="#937644" strokeWidth="9" strokeLinecap="round" />
    <circle cx="180" cy="27" r="10" fill="#c7a766" /><path d="M180 43v20m-5-5 5 5 5-5M180 116v26m-5-5 5 5 5-5" stroke="#937644" strokeWidth="2" />
    <text x="201" y="30">Ligand</text><text x="25" y="60">Outside the cell</text><text x="25" y="135">Inside the cell</text><circle cx="180" cy="148" r="4" fill="#937644" />
  </svg>;
  return <svg {...common}>
    <path d="M39 17v122h296" stroke="#a9a7a0" />
    <path d="M40 113C56 54 71 35 84 43s30 57 49 66C148 47 164 25 178 38s30 58 46 67c13-58 31-77 44-66s34 68 65 74" stroke="#8c7042" strokeWidth="3" strokeLinecap="round" />
    <path d="M45 120v9m90-9v9m90-9v9" stroke="#8c7042" strokeWidth="2" />
    <text x="43" y="157">Dose</text><text x="133" y="157">Dose</text><text x="223" y="157">Dose</text><text x="279" y="18">Concentration</text>
  </svg>;
}

export default function LearnInteractiveLibrary() {
  const viewport = useRef(null);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const update = () => setRunning(visible && !document.hidden && !motion.matches);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); }, { threshold: .05 });
    observer.observe(viewport.current);
    document.addEventListener("visibilitychange", update); motion.addEventListener("change", update);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", update); motion.removeEventListener("change", update); };
  }, []);
  useEffect(() => {
    const videos = viewport.current.querySelectorAll("video");
    videos.forEach((video) => {
      if (running) video.play().catch(() => {});
      else video.pause();
    });
  }, [running]);
  const reel = [previews.at(-1), ...previews, previews[0], previews[1]];
  return <section className={styles.section} id="interactive-library" aria-labelledby="interactive-library-title">
    <div className={`nas-shell ${styles.layout}`}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>Interactive library</p>
        <h2 id="interactive-library-title">Learn by<br />doing.</h2>
        <p className={styles.description}>Explore biological systems, test mechanisms, and build understanding.</p>
        <p className={styles.detail}>Follow a signal. Change a condition. Connect the mechanism to the response.</p>
        <dl className={styles.subjects}>
          <div><dt>Follow a signal</dt><dd>From cardiac conduction to cellular responses.</dd></div>
          <div><dt>Explore a change</dt><dd>Connect membrane potential, receptor activity, and drug concentration.</dd></div>
        </dl>
      </div>
      <div className={styles.previewPanel}>
        <div className={styles.panelCopy}><p>NaS Learn</p><h3>See the<br />mechanism.</h3><span>Signals. Responses. Connections.</span></div>
      <div ref={viewport} className={styles.showcase} data-running={running} aria-hidden="true">
        <div className={styles.track}>
          {reel.map((item, index) => <div className={styles.item} key={`${item.kind}-${index}`}>
            <p className={styles.prompt}>{item.prompt}</p>
            <div className={`${styles.card} ${styles[item.kind]}`}>
              <div className={styles.cardHeading}><span>{item.title}</span><span className={styles.mark}>NaS</span></div>
              {item.kind === "lesson" ? <div className={styles.lessonPreview}>
                <video src="/learn/interactive/heart-electrical-v2/showcase.mp4" poster="/learn/interactive/heart-electrical-v2/poster.png" muted loop playsInline preload="metadata" tabIndex={-1} />
              </div> : <Diagram kind={item.kind} />}
              <p className={styles.cardCaption}>{item.caption}</p>
            </div>
          </div>)}
        </div>
      </div>
      </div>
    </div>
  </section>;
}

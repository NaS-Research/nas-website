"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./LearnInteractiveLibrary.module.css";

const previews = [
  { kind: "dna", prompt: "Find the complementary base.", title: "Build a DNA strand", caption: "Pair the bases. Explore the double helix.", video: "dna-strand-v2" },
  { kind: "lesson", prompt: "Trace the heart’s electrical signal.", title: "Cardiac conduction", caption: "Trace the signal. Read the ECG.", video: "heart-electrical-v2" },
  { kind: "receptor", prompt: "Compare activation with blockade.", title: "Activate or block", caption: "Agonist · Competitive antagonist", video: "agonist-antagonist-v1" },
];

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
          <div><dt>Explore a change</dt><dd>Explore complementary bases and receptor activation.</dd></div>
        </dl>
      </div>
      <div className={styles.previewPanel}>
        <div className={styles.panelCopy}><p>Interactive learning</p><h3>See the<br />mechanism.</h3><span>Signals. Responses. Connections.</span></div>
      <div ref={viewport} className={styles.showcase} data-running={running} aria-hidden="true">
        <div className={styles.track}>
          {reel.map((item, index) => <div className={styles.item} key={`${item.kind}-${index}`}>
            <p className={styles.prompt}>{item.prompt}</p>
            <div className={`${styles.card} ${styles.lesson}`}>
              <div className={styles.cardHeading}><span>{item.title}</span></div>
              {<div className={styles.lessonPreview} style={{ backgroundImage: `url(/learn/interactive/${item.video}/poster.png)` }}>
                <video src={`/learn/interactive/${item.video}/showcase.mp4`} poster={`/learn/interactive/${item.video}/poster.png`} muted loop playsInline preload="metadata" tabIndex={-1} />
              </div>}
              <p className={styles.cardCaption}>{item.caption}</p>
            </div>
          </div>)}
        </div>
      </div>
      </div>
    </div>
  </section>;
}

"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./cva-visuals.css";
const poster = "/research/nas-cva-001/artwork/cva-refined-cover-poster.webp";
const loop = "/research/nas-cva-001/artwork/cva-refined-cover-loop.mp4";

export default function CvaHeroVisual({ active }) {
  const video = useRef(null);
  const [motion, setMotion] = useState(false);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 767px)");
    const update = () => { setMotion(!reduced.matches && !mobile.matches); setReady(false); };
    update();
    reduced.addEventListener("change", update);
    mobile.addEventListener("change", update);
    return () => { reduced.removeEventListener("change", update); mobile.removeEventListener("change", update); };
  }, []);
  useEffect(() => { setPaused(false); setReady(false); }, [active]);
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const update = () => {
      if (document.hidden || paused) element.pause();
      else element.play().catch(() => setPaused(true));
    };
    update();
    document.addEventListener("visibilitychange", update);
    return () => { document.removeEventListener("visibilitychange", update); element.pause(); };
  }, [active, motion, paused]);
  return <figure className="home-brca-visual home-cva-visual">
    <div className="home-brca-visual__frame home-cva-visual__frame">
      <Image src={poster} alt="A folded network of blue molecular nodes with gold and red clusters against black." width={3840} height={1920} sizes="(max-width: 767px) 92vw, 48vw" />
      {active && motion && <>
        <video ref={video} src={loop} poster={poster} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" onLoadedData={() => setReady(true)} style={{ opacity: ready ? 1 : 0 }} />
        <button className="cva-cover-toggle" type="button" aria-label={paused ? "Play featured cover animation" : "Pause featured cover animation"} onClick={() => setPaused(value => !value)}>
          <svg viewBox="0 0 24 24" aria-hidden="true">{paused ? <path d="M8 5 L19 12 L8 19 Z" fill="currentColor" /> : <path d="M8 5 V19 M16 5 V19" stroke="currentColor" strokeWidth="2" />}</svg>
        </button>
      </>}
    </div>
  </figure>;
}

"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./cva-visuals.css";
const poster = "/research/nas-cva-001/artwork/cva-refined-cover-poster.webp";
const loop = "/research/nas-cva-001/artwork/cva-refined-cover-loop.mp4";
export default function CvaCoverVisual() {
  const video = useRef(null);
  const [motion, setMotion] = useState(false);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { setMotion(!preference.matches); setPaused(false); setReady(false); };
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!video.current) return;
    if (paused) video.current.pause();
    else video.current.play().catch(() => setPaused(true));
  }, [motion, paused]);
  return <figure className="cva-cover-visual">
    <div className="cva-cover-media">
      <Image src={poster} alt="A dense folded network of blue molecular nodes with gold and red clusters on a dark background." width={3840} height={1920} priority sizes="(max-width: 767px) 100vw, 1100px" />
      {motion && <video ref={video} src={loop} poster={poster} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" onLoadedData={() => setReady(true)} style={{ opacity: ready ? 1 : 0 }} />}
      {motion && <button className="cva-cover-toggle" type="button" aria-label={paused ? "Play cover animation" : "Pause cover animation"} onClick={() => setPaused(value => !value)}>
        <svg viewBox="0 0 24 24" aria-hidden="true">{paused ? <path d="M8 5 L19 12 L8 19 Z" fill="currentColor" /> : <><path d="M8 5 V19 M16 5 V19" stroke="currentColor" strokeWidth="2" /></>}</svg>
      </button>}
    </div>
    <figcaption>A folded molecular network with fine connections between nodes.</figcaption>
  </figure>;
}

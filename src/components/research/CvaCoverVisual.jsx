"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./cva-visuals.css";
const poster = "/research/nas-cva-001/artwork/cva-refined-cover-poster.webp";
const loop = "/research/nas-cva-001/artwork/cva-refined-cover-loop.mp4";
export default function CvaCoverVisual() {
  const video = useRef(null);
  const [motion, setMotion] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { setMotion(!preference.matches); setReady(false); };
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const update = () => {
      if (document.hidden) element.pause();
      else element.play().catch(() => {});
    };
    update();
    document.addEventListener("visibilitychange", update);
    return () => { document.removeEventListener("visibilitychange", update); element.pause(); };
  }, [motion]);
  return <figure className="cva-cover-visual">
    <div className="cva-cover-media">
      <Image src={poster} alt="A dense folded network of blue molecular nodes with gold and red clusters on a dark background." width={3840} height={1920} priority sizes="(max-width: 767px) 100vw, 1100px" />
      {motion && <video ref={video} src={loop} poster={poster} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" onLoadedData={() => setReady(true)} style={{ opacity: ready ? 1 : 0 }} />}

    </div>
    <figcaption>A folded molecular network with fine connections between nodes.</figcaption>
  </figure>;
}

"use client";

import { useEffect, useRef, useState } from "react";

export default function ArtworkFilm({ src, poster, alt, showControl = false }) {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const video = videoRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const update = () => {
      if (visible && !document.hidden && !reducedMotion.matches && !paused) {
        if (!video.getAttribute("src")) video.src = src;
        video.play().catch(() => {});
      } else {
        video.pause();
        if (reducedMotion.matches) {
          video.removeAttribute("src");
          video.load();
        }
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    }, { threshold: 0.1 });
    observer.observe(video);
    reducedMotion.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
      video.pause();
    };
  }, [src, paused]);
  return <>
    <video ref={videoRef} poster={poster} loop muted playsInline preload="none" aria-label={alt} />
    {showControl && <button type="button" className="artwork-film-control" onClick={() => setPaused(!paused)} aria-label={paused ? "Play animation" : "Pause animation"}><span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span></button>}
  </>;
}

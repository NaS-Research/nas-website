"use client";

import { useEffect, useRef, useState } from "react";

const root = "/workspace/particles-v2";

export default function WorkspacePreviewFilm({ className = "home-workspace__film", compact = false, paused = false, src, poster }) {
  const frame = useRef(null);
  const video = useRef(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const element = video.current;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let nearby = false;
    const update = () => {
      if (nearby && !document.hidden && !motion.matches && !paused) {
        if (!element.getAttribute("src")) {
          element.src = src || `${root}/NaS-particle-${compact || innerWidth <= 700 ? 960 : 1920}.mp4`;
          element.load();
        }
        element.muted = true;
        element.play().catch(() => setPlaying(false));
      } else element.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      nearby = entry.isIntersecting;
      update();
    }, { rootMargin: "400px" });
    observer.observe(frame.current);
    motion.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
      element.pause();
    };
  }, [compact, paused, src]);
  return <div ref={frame} className={className} aria-hidden="true">
    <picture>
      {!poster && <source media="(max-width:700px)" srcSet={`${root}/poster-960.webp`} />}
      <img src={poster || `${root}/poster-1920.webp`} alt="" width="1920" height="1080" loading="lazy" />
    </picture>
    <video ref={video} autoPlay loop muted playsInline preload="none" data-playing={playing}
      onPlaying={() => setPlaying(true)} onError={() => setPlaying(false)} />
  </div>;
}

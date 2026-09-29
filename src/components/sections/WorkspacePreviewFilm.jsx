"use client";

import { useEffect, useRef, useState } from "react";
import "./workspace-preview-film.css";

const root = "/workspace/particles-v2";

export default function WorkspacePreviewFilm({ className = "home-workspace__film", compact = false, paused = false, src, poster }) {
  const frame = useRef(null);
  const video = useRef(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const element = video.current;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let disposed = false;
    // Set both the property and attribute before attaching a source for Safari.
    element.defaultMuted = true;
    element.muted = true;
    element.setAttribute("muted", "");
    element.setAttribute("playsinline", "");
    const load = () => {
      const source = src || `${root}/NaS-particle-${compact || innerWidth <= 700 ? 960 : 1920}.mp4`;
      if (element.getAttribute("src") !== source) {
        element.src = source;
        element.load();
      }
    };
    const update = () => {
      if (visible && !document.hidden && !motion.matches && !paused) {
        load();
        element.muted = true;
        element.play().catch(() => {
          if (!disposed && element.paused) setPlaying(false);
        });
      } else {
        element.pause();
      }
    };
    const preloadObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !motion.matches) load();
    }, { rootMargin: "400px" });
    // Playback follows actual visibility, not the larger preload region.
    const playbackObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    preloadObserver.observe(frame.current);
    playbackObserver.observe(frame.current);
    element.addEventListener("canplay", update);
    window.addEventListener("pageshow", update);
    motion.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => {
      disposed = true;
      preloadObserver.disconnect();
      playbackObserver.disconnect();
      element.removeEventListener("canplay", update);
      window.removeEventListener("pageshow", update);
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
    <video ref={video} className="nas-background-film" autoPlay loop muted playsInline
      controls={false} disablePictureInPicture disableRemotePlayback tabIndex={-1}
      preload="auto" data-playing={playing}
      onPlaying={() => setPlaying(true)} onPause={() => setPlaying(false)}
      onError={() => setPlaying(false)} />
  </div>;
}

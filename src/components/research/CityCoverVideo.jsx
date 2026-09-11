"use client";

import { useEffect, useRef } from "react";

export default function CityCoverVideo({ src, poster, alt }) {
  const ref = useRef(null);
  useEffect(() => {
    const video = ref.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    video.defaultMuted = true;
    video.muted = true;
    const resume = () => {
      if (visible && !document.hidden && !motion.matches) {
        video.play().catch(() => {}); // Safari may require a user gesture in Low Power Mode.
      } else video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      resume();
    }, { threshold: 0.05 });
    observer.observe(video);
    video.addEventListener("canplay", resume);
    document.addEventListener("visibilitychange", resume);
    window.addEventListener("pageshow", resume);
    document.addEventListener("touchend", resume, { passive: true });
    document.addEventListener("click", resume);
    motion.addEventListener("change", resume);
    return () => {
      observer.disconnect();
      video.removeEventListener("canplay", resume);
      document.removeEventListener("visibilitychange", resume);
      window.removeEventListener("pageshow", resume);
      document.removeEventListener("touchend", resume);
      document.removeEventListener("click", resume);
      motion.removeEventListener("change", resume);
      video.pause();
    };
  }, [src]);
  return <video ref={ref} src={src} poster={poster} autoPlay loop muted playsInline controls={false} preload="metadata" aria-label={alt} />;
}

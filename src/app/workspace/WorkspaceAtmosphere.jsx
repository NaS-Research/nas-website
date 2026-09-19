"use client";

import { useEffect, useRef } from "react";

const mediaRoot = "/workspace/particles-v2";

function selectSource(video, layer) {
  const bounds = layer.querySelector(".workspace-atmosphere-frame").getBoundingClientRect();
  const displayedWidth = Math.min(bounds.width, bounds.height * 16 / 9);
  const pixels = displayedWidth * (window.devicePixelRatio || 1);
  const phone = window.innerWidth <= 700;
  const saveData = navigator.connection?.saveData === true;
  if (!phone && !saveData && pixels >= 2200) return `${mediaRoot}/NaS-particle-4K.mp4`;
  const width = phone || saveData ? 960 : 1920;
  const format = video.canPlayType('video/webm; codecs="av01.0.08M.08"') ? "webm" : "mp4";
  return `${mediaRoot}/NaS-particle-${width}.${format}`;
}

export default function WorkspaceAtmosphere() {
  const layerRef = useRef(null);
  const videoRef = useRef(null);
  const posterRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const layer = layerRef.current;
    const opening = document.getElementById("workspace-top");
    let animationFrame = 0;
    let disposed = false;

    const play = () => {
      if (!video.getAttribute("src")) {
        video.poster = posterRef.current?.currentSrc || `${mediaRoot}/poster-1920.webp`;
        video.src = selectSource(video, layer);
      }
      video.play().catch(() => { /* Keep the poster if the browser blocks autoplay. */ });
    };
    const fallback = () => {
      if (video.currentSrc.endsWith(".webm")) {
        video.src = video.currentSrc.replace(/\.webm$/, ".mp4");
        video.play().catch(() => {});
      }
    };
    const updateOpacity = () => {
      animationFrame = 0;
      if (disposed || !opening) return;
      const distance = Math.max(0, -opening.getBoundingClientRect().top);
      const progress = Math.min(1, distance / (opening.offsetHeight * 0.9));
      const eased = progress * progress * (3 - 2 * progress);
      const pageDistance = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const pageProgress = Math.min(1, distance / pageDistance);
      // A faint trace keeps dimming after the opening has faded.
      layer.style.opacity = String(Math.max(0.008, 0.85 * (1 - eased) + 0.15 * (1 - pageProgress) ** 2));
    };
    const onScroll = () => {
      if (!animationFrame) animationFrame = requestAnimationFrame(updateOpacity);
    };

    // Scrolling only affects presentation. The source and playhead stay intact.
    video.addEventListener("error", fallback);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    updateOpacity();
    play();

    return () => {
      disposed = true;
      cancelAnimationFrame(animationFrame);
      video.removeEventListener("error", fallback);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      video.pause();
    };
  }, []);

  return <>
    <div className="workspace-atmosphere" ref={layerRef} aria-hidden="true">
      <div className="workspace-atmosphere-frame">
        <picture>
          <source media="(max-width: 700px)" srcSet={`${mediaRoot}/poster-960.webp`} />
          {/* A responsive still is visible while the video loads. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img ref={posterRef} src={`${mediaRoot}/poster-1920.webp`} width="1920" height="1080" alt="" fetchPriority="high" />
        </picture>
        <video ref={videoRef} className="workspace-atmosphere-video" autoPlay muted playsInline loop preload="none" width="1920" height="1080" tabIndex={-1}
          onPlaying={() => { videoRef.current.dataset.ready = "true"; }} />
      </div>
    </div>
  </>;
}

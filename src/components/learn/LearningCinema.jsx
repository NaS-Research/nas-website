"use client";

import { useEffect, useRef, useState } from "react";
import "./learning-cinema.css";

const film = "/learn/films/life-sciences-preview.mp4";
const poster = "/learn/films/life-sciences-poster.jpg";

export default function LearningCinema() {
  const video = useRef(null);
  const screen = useRef(null);
  const [paused, setPaused] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [fullFilm, setFullFilm] = useState(false);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    const update = () => setExpanded(document.fullscreenElement === screen.current);
    document.addEventListener("fullscreenchange", update);
    return () => document.removeEventListener("fullscreenchange", update);
  }, []);
  useEffect(() => {
    const element = video.current;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const update = () => {
      if (visible && !document.hidden && !paused && !fullFilm && !motion.matches) {
        if (!element.getAttribute("src")) { element.src = film; element.load(); }
        element.play().catch(() => setPlaying(false));
      } else element.pause();
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); }, { threshold: .1 });
    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    motion.addEventListener("change", update);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", update); motion.removeEventListener("change", update); element.pause(); };
  }, [paused, fullFilm]);
  async function expand() {
    if (document.fullscreenElement) { await document.exitFullscreen(); return; }
    if (screen.current.requestFullscreen) await screen.current.requestFullscreen().catch(() => {});
    else if (video.current.webkitEnterFullscreen) video.current.webkitEnterFullscreen();
  }
  return <section id="films" className="learning-cinema" aria-labelledby="learning-cinema-title">
    <div className="nas-shell">
      <header className="learning-cinema__heading">
        <p className="nas-section-label">In focus</p>
        <h2 id="learning-cinema-title">See science unfold.</h2>
        <p>A closer look at the ideas that explain life.</p>
      </header>
      <div className="learning-cinema__stage">
        <div className="learning-cinema__screen" ref={screen}>
          <video ref={video} poster={poster} autoPlay muted loop playsInline preload="none" aria-label="Life-sciences film preview" onPlaying={() => setPlaying(true)} onPause={() => setPlaying(false)} />
          {fullFilm && <iframe className="learning-cinema__player" src="https://www.youtube-nocookie.com/embed/zdM7I6EG8kY?autoplay=1&rel=0" title="What are the life sciences? | NaS Research" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />}
          {!fullFilm && <div className="learning-cinema__overlay">
            <div><span>NaS <small>In focus</small></span></div>
            <div className="learning-cinema__controls">
              <button onClick={expand} aria-label={expanded ? "Exit expanded preview" : "Expand film preview"}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 4H4v5m11-5h5v5M4 15v5h5m11-5v5h-5" /></svg></button>
              <button onClick={() => { if (playing) setPaused(true); else { setPaused(false); if (!video.current.src) video.current.src = film; video.current.play().catch(() => {}); } }} aria-label={playing ? "Pause film preview" : "Play film preview"}>{playing ? "Ⅱ" : "▶"}</button>
            </div>
          </div>}
        </div>
      </div>
      <div className="learning-cinema__caption"><div className="learning-cinema__actions"><button onClick={() => setFullFilm(value => !value)}>{fullFilm ? "Back to preview" : "Watch the full film"} <span aria-hidden="true">{fullFilm ? "←" : "▶"}</span></button><a href="https://www.youtube.com/watch?v=zdM7I6EG8kY" target="_blank" rel="noopener noreferrer">YouTube ↗</a></div></div>
    </div>
  </section>;
}

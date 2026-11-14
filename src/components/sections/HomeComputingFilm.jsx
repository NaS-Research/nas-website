"use client";

import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import {computingHeroFilm} from "@/data/computingHeroFilm.mjs";
import {createHomeComputingLoop} from "./home-computing-loop.mjs";
import styles from "./HomeComputingFeature.module.css";

export default function HomeComputingFilm() {
  const video = useRef(null), controller = useRef(null);
  const [ready, setReady] = useState(false), [paused, setPaused] = useState(false);
  const [blocked, setBlocked] = useState(false), [failed, setFailed] = useState(false);
  const [reduced, setReduced] = useState(null);
  useEffect(() => {
    const element = video.current, motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const player = createHomeComputingLoop({video: element, src: computingHeroFilm.loopSrc,
      onBlocked: () => setBlocked(true), onFailure: () => { setFailed(true); setReady(false); }});
    controller.current = player;
    const update = () => {
      setReduced(motion.matches);
      player.setEnvironment({visible, hidden: document.hidden, reduced: motion.matches});
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); }, {threshold: .05});
    observer.observe(element);
    motion.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    update();
    return () => {
      observer.disconnect(); motion.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
      player.destroy(); if (controller.current === player) controller.current = null;
    };
  }, []);
  function toggle() {
    const next = blocked ? false : !paused;
    setPaused(next); setBlocked(false); controller.current?.setPaused(next);
  }
  return <div className={styles.media} data-home-computing-film>
    <Image className={styles.poster} src={computingHeroFilm.poster} alt={computingHeroFilm.description}
      width={2560} height={1440} sizes="(max-width: 928px) calc(100vw - 32px), 896px" />
    <video ref={video} id="home-computing-loop" className={styles.video} data-ready={ready && !reduced && !failed}
      width={2560} height={1440} muted loop playsInline preload="none" disablePictureInPicture disableRemotePlayback
      aria-hidden="true" tabIndex={-1} onLoadedData={() => setReady(true)} />
    {reduced === false && !failed && <button className={styles.control} type="button" onClick={toggle} aria-controls="home-computing-loop">
      {paused || blocked ? "Play animation" : "Pause animation"}
    </button>}
  </div>;
}

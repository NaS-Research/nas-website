"use client";
import {useEffect, useRef, useState} from 'react';
import {createIntroLoopController} from './intro-loop-controller.mjs';
import styles from './computing-hero-film.module.css';

export default function ComputingHeroFilm({introSrc, loopSrc, poster, width = 3840, height = 2160, description}) {
  const root = useRef(null), intro = useRef(null), hold = useRef(null), controller = useRef(null);
  const [layer, setLayer] = useState('poster');
  const [paused, setPaused] = useState(false), [blocked, setBlocked] = useState(false);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const pageReveal = window.__nasComputingReveal;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    const player = createIntroLoopController({intro: intro.current, hold: hold.current, introSrc, loopSrc,
      reveal: setLayer, onArrivalProgress: value => pageReveal?.progress(value),
      onBlocked: () => { setBlocked(true); pageReveal?.finish('autoplay-blocked'); },
      onFailure: () => { setFailed(true); pageReveal?.finish('media-error'); }});
    controller.current = player;
    const update = () => {
      if (motion.matches || document.hidden) pageReveal?.finish(motion.matches ? 'reduced-motion' : 'background');
      player.setEnvironment({visible, hidden: document.hidden, reduced: motion.matches});
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (!visible) pageReveal?.finish('offscreen'); update(); }, {threshold: .05});
    observer.observe(root.current);
    motion.addEventListener('change', update); document.addEventListener('visibilitychange', update);
    update();
    return () => {
      observer.disconnect(); motion.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update); player.destroy(); controller.current = null; pageReveal?.dispose();
    };
  }, [introSrc, loopSrc]);
  function toggle() {
    const next = blocked ? false : !paused;
    setPaused(next); setBlocked(false); controller.current?.setPaused(next);
  }
  return <div ref={root} className={styles.film} style={{aspectRatio: `${width} / ${height}`}} data-film-layer={layer} data-static-poster={failed || blocked} role="group" tabIndex={0}
    aria-label="Mac Studio starlight animation" aria-describedby="computing-film-help"
    onKeyDown={event => { if (event.target === event.currentTarget && !event.repeat && (event.key === ' ' || event.key.toLowerCase() === 'k')) { event.preventDefault(); toggle(); } }}>
    <noscript><img src={poster} width={width} height={height} alt="" aria-hidden="true" className={styles.noScriptPoster}/></noscript>
    <img src={poster} width={width} height={height} alt={description} className={styles.poster}/>
    <video ref={intro} width={width} height={height} muted playsInline preload="auto" disablePictureInPicture disableRemotePlayback
      aria-hidden="true" tabIndex={-1} className={styles.video} data-visible={layer === 'intro'}/>
    <video ref={hold} width={width} height={height} muted playsInline loop preload="auto" disablePictureInPicture disableRemotePlayback
      aria-hidden="true" tabIndex={-1} className={styles.video} data-visible={layer === 'loop'}/>
    <span id="computing-film-help" className={styles.srOnly}>Decorative animation. Press Space or K to pause or resume. Reduced-motion settings show a still image.</span>
  </div>;
}

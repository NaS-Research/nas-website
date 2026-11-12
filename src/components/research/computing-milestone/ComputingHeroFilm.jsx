"use client";
import {useEffect, useRef, useState} from 'react';
import {createIntroLoopController} from './intro-loop-controller.mjs';
import styles from './computing-hero-film.module.css';

export default function ComputingHeroFilm({introSrc, loopSrc, smallIntroSrc, smallLoopSrc, poster, width = 3840, height = 2160, description}) {
  const root = useRef(null), intro = useRef(null), hold = useRef(null), controller = useRef(null);
  const [layer, setLayer] = useState('poster');
  const [paused, setPaused] = useState(false), [blocked, setBlocked] = useState(false);
  const [reduced, setReduced] = useState(true), [failed, setFailed] = useState(false);
  useEffect(() => {
    const pageReveal = window.__nasComputingReveal;
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    // Select the matched pair once per mounted hero; resizing must not replay arrival.
    const small = matchMedia('(max-width: 767px)').matches && smallIntroSrc && smallLoopSrc;
    let visible = false;
    const player = createIntroLoopController({intro: intro.current, hold: hold.current, introSrc: small ? smallIntroSrc : introSrc, loopSrc: small ? smallLoopSrc : loopSrc,
      reveal: setLayer, onArrivalProgress: value => pageReveal?.progress(value),
      onBlocked: () => { setBlocked(true); pageReveal?.finish('autoplay-blocked'); },
      onFailure: () => { setFailed(true); pageReveal?.finish('media-error'); }});
    controller.current = player;
    const update = () => {
      setReduced(motion.matches);
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
  }, [introSrc, loopSrc, smallIntroSrc, smallLoopSrc]);
  function toggle() {
    const next = blocked ? false : !paused;
    setPaused(next); setBlocked(false); controller.current?.setPaused(next);
  }
  return <div ref={root} className={styles.film} style={{aspectRatio: `${width} / ${height}`}} data-film-layer={layer} data-static-poster={failed || blocked}>
    <noscript><img src={poster} width={width} height={height} alt="" aria-hidden="true" className={styles.noScriptPoster}/></noscript>
    <img src={poster} width={width} height={height} alt={description} className={styles.poster}/>
    <video ref={intro} width={width} height={height} muted playsInline preload="auto" disablePictureInPicture disableRemotePlayback
      aria-hidden="true" tabIndex={-1} className={styles.video} data-visible={layer === 'intro'}/>
    <video ref={hold} width={width} height={height} muted playsInline loop preload="auto" disablePictureInPicture disableRemotePlayback
      aria-hidden="true" tabIndex={-1} className={styles.video} data-visible={layer === 'loop'}/>
    {!reduced && !failed && <button type="button" className={styles.control} onClick={toggle}
      aria-label={paused || blocked ? 'Play hero animation' : 'Pause hero animation'}>{paused || blocked ? 'Play animation' : 'Pause animation'}</button>}
  </div>;
}

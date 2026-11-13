"use client";
import {useLayoutEffect, useRef, useState} from 'react';
import {installComputingReveal} from '@/lib/computingPageReveal.mjs';
import {createIntroLoopController} from './intro-loop-controller.mjs';
import styles from './computing-hero-film.module.css';

export default function ComputingHeroFilm({introSrc, loopSrc, poster, width = 3840, height = 2160, description}) {
  const root = useRef(null), intro = useRef(null), hold = useRef(null), controller = useRef(null);
  const [layer, setLayer] = useState('poster');
  const [paused, setPaused] = useState(false), [blocked, setBlocked] = useState(false);
  const [failed, setFailed] = useState(false);
  useLayoutEffect(() => {
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false, player = null, pageReveal = null;
    const update = () => {
      if (motion.matches) pageReveal?.finish('reduced-motion');
      player?.setEnvironment({visible, hidden: document.hidden, reduced: motion.matches});
    };
    function startVisit() {
      // Both React route re-entry and browser back/forward cache restores own a
      // fresh arrival. Destroy the old player BEFORE reusing its media nodes.
      player?.destroy();
      pageReveal?.dispose();
      if (window.__nasComputingReveal?.status().finished) window.__nasComputingReveal.dispose();
      pageReveal = window.__nasComputingReveal || installComputingReveal(window,document);
      setLayer('poster'); setPaused(false); setBlocked(false); setFailed(false);
      for (const video of [intro.current, hold.current]) {
        video.pause();
        try { video.currentTime = 0; } catch { /* An unloaded video starts at zero. */ }
      }
      if (pageReveal && !pageReveal.status().finished) window.scrollTo(0,0);
      const rect = root.current.getBoundingClientRect();
      visible = rect.bottom > 0 && rect.top < window.innerHeight;
      player = createIntroLoopController({intro: intro.current, hold: hold.current, introSrc, loopSrc,
        reveal: setLayer, onArrivalProgress: value => pageReveal?.progress(value),
        onBlocked: () => { setBlocked(true); pageReveal?.finish('autoplay-blocked'); },
        onFailure: () => { setFailed(true); pageReveal?.finish('media-error'); }});
      controller.current = player;
      update();
    }
    const onPageShow = event => { if (event.persisted) startVisit(); };
    const onPageHide = () => player?.setEnvironment({visible, hidden: true, reduced: motion.matches});
    const observer = new IntersectionObserver(() => {
      // Ignore incidental wheel events, but never strand a reader below an
      // offscreen, paused arrival with invisible article text.
      const rect = root.current.getBoundingClientRect();
      visible = rect.bottom > 0 && rect.top < window.innerHeight;
      if (rect.bottom <= 0 && !document.hidden) pageReveal?.finish('scroll-away');
      update();
    }, {threshold: .05});
    observer.observe(root.current);
    motion.addEventListener('change', update); document.addEventListener('visibilitychange', update);
    window.addEventListener('pageshow', onPageShow); window.addEventListener('pagehide', onPageHide);
    startVisit();
    return () => {
      observer.disconnect(); motion.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
      window.removeEventListener('pageshow', onPageShow); window.removeEventListener('pagehide', onPageHide);
      player?.destroy(); controller.current = null; pageReveal?.dispose();
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
    <video ref={intro} src={introSrc} width={width} height={height} muted playsInline preload="auto" disablePictureInPicture disableRemotePlayback
      aria-hidden="true" tabIndex={-1} className={styles.video} data-visible={layer === 'intro'}/>
    <video ref={hold} width={width} height={height} muted playsInline loop preload="auto" disablePictureInPicture disableRemotePlayback
      aria-hidden="true" tabIndex={-1} className={styles.video} data-visible={layer === 'loop'}/>
    <span id="computing-film-help" className={styles.srOnly}>Decorative animation. Press Space or K to pause or resume. Reduced-motion settings show a still image.</span>
  </div>;
}

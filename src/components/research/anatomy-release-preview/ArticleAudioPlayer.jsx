'use client';

import {useCallback, useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import styles from './article-audio.module.css';
import {clampAudioTime, formatAudioTime} from './audio-time.mjs';

// Voice bands in Hz; each bar measures a different part of the same signal.
const VOICE_BANDS = [90, 220, 440, 850, 1600, 3200];
const SPEEDS = [0.75, 1, 1.25, 1.5, 1.75, 2];

function Icon({name}) {
  const shapes = {
    play: <path d="m8 5 12 7-12 7z" fill="currentColor" stroke="none"/>,
    pause: <path d="M9 5v14m6-14v14" strokeWidth="3"/>,
    back: <><path d="M4 10a8 8 0 1 1 2 9M4 4v6h6"/><text x="12.5" y="15" textAnchor="middle" fill="currentColor" stroke="none" fontSize="7.5">15</text></>,
    forward: <><path d="M20 10a8 8 0 1 0-2 9m2-15v6h-6"/><text x="11.5" y="15" textAnchor="middle" fill="currentColor" stroke="none" fontSize="7.5">15</text></>,
    close: <path d="m7 7 10 10M17 7 7 17"/>,
    audio: <path d="M3 11v2m4-5v8m5-12v16m5-12v8m4-5v2"/>,
  };
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[name]}</svg>;
}

export default function ArticleAudioPlayer({src, title, cover}) {
  const media = useRef(null);
  const wave = useRef(null);
  const graph = useRef(null);
  const launcher = useRef(null);
  const playControl = useRef(null);
  const focusOnOpen = useRef(false);
  const attempt = useRef(0);
  const [open, setOpen] = useState(true);
  const [portalRoot, setPortalRoot] = useState(null);
  const [paused, setPaused] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Keep playback controls above the article body as it scrolls over the sticky hero.
    setPortalRoot(document.body);
  }, []);

  useEffect(() => () => {
    if (graph.current) void graph.current.context.close().catch(() => {});
  }, []);

  useEffect(() => {
    const analyser = graph.current?.analyser;
    if (!open || !playing || !analyser) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const bars = Array.from(wave.current.children);
    const levels = new Uint8Array(analyser.frequencyBinCount);
    const binsPerHz = analyser.fftSize / analyser.context.sampleRate;
    let frame;
    let last = 0;

    function draw(now) {
      if (preference.matches || media.current?.paused) return;
      if (now - last >= 30) {
        last = now;
        analyser.getByteFrequencyData(levels);
        for (const [index, bar] of bars.entries()) {
          const low = Math.max(1, Math.round(VOICE_BANDS[index] * binsPerHz));
          const high = Math.max(low + 1, Math.round(VOICE_BANDS[index + 1] * binsPerHz));
          let peak = 0;
          for (let bin = low; bin < high; bin++) peak = Math.max(peak, levels[bin]);
          bar.style.setProperty('--level', (0.22 + 0.78 * peak / 255).toFixed(3));
        }
      }
      frame = requestAnimationFrame(draw);
    }

    function updateMotion() {
      cancelAnimationFrame(frame);
      for (const bar of bars) bar.style.removeProperty('--level');
      if (!preference.matches) frame = requestAnimationFrame(draw);
    }

    preference.addEventListener('change', updateMotion);
    updateMotion();
    return () => {
      preference.removeEventListener('change', updateMotion);
      cancelAnimationFrame(frame);
      for (const bar of bars) bar.style.removeProperty('--level');
    };
  }, [open, playing]);

  function startAudioGraph(audio) {
    const Context = window.AudioContext || window.webkitAudioContext;
    if (!graph.current && Context) {
      const context = new Context();
      const analyser = context.createAnalyser();
      analyser.fftSize = 1024;
      analyser.smoothingTimeConstant = 0.6;
      try {
        const source = context.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(context.destination);
        graph.current = {context, analyser};
      } catch {
        void context.close().catch(() => {});
      }
    }
    const context = graph.current?.context;
    if (context?.state !== 'running') void context?.resume().catch(() => {});
  }

  const syncTime = useCallback(() => {
    const audio = media.current;
    if (!audio) return;
    const length = Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration : 0;
    setDuration(length);
    setTime(clampAudioTime(audio.currentTime, length));
  }, []);

  useEffect(() => {
    // The browser can load metadata before React hydrates the audio element.
    syncTime();
  }, [src, syncTime]);

  function seek(value) {
    const audio = media.current;
    if (!Number.isFinite(audio.duration) || audio.duration <= 0) return;
    try {
      audio.currentTime = clampAudioTime(value, audio.duration);
      syncTime();
    } catch {
      setStatus('Seeking is unavailable right now.');
    }
  }

  async function toggle() {
    const audio = media.current;
    const id = ++attempt.current;
    if (!audio.paused) {
      audio.pause();
      setStatus('Narration paused.');
      return;
    }
    setStatus('');
    try { startAudioGraph(audio); } catch { /* Native playback remains available. */ }
    try {
      await audio.play();
      if (id === attempt.current) setStatus('Playing article narration.');
    } catch {
      if (id === attempt.current) setStatus('Unable to play the narration. Try again.');
    }
  }

  function close() {
    attempt.current++;
    media.current.pause();
    setPaused(true);
    setPlaying(false);
    setOpen(false);
    setStatus('Player closed. Your position is saved in this tab.');
    launcher.current?.focus({preventScroll: true});
  }

  return (
    <div className={styles.audio}>
      <audio ref={media} src={src} preload="metadata"
        onLoadedMetadata={syncTime} onDurationChange={syncTime} onTimeUpdate={syncTime}
        onPlay={() => setPaused(false)}
        onPlaying={() => setPlaying(true)}
        onWaiting={() => setPlaying(false)}
        onPause={() => {setPaused(true); setPlaying(false);}}
        onEnded={() => {setPaused(true); setPlaying(false); syncTime(); setStatus('Narration ended.');}}
        onError={() => {setPaused(true); setPlaying(false); setStatus('Article narration is unavailable.');}}
      />
      <button type="button" ref={launcher} className={styles.launcher} aria-expanded={open}
        aria-controls="article-audio-controls" onClick={() => {
          if (open) playControl.current?.focus();
          else {
            focusOnOpen.current = true;
            setOpen(true);
            setStatus('Narration player opened.');
          }
        }}>
        <Icon name="audio" /> Listen to article
      </button>
      <span className={styles.srOnly} role="status">{status}</span>
      {portalRoot && createPortal(<section id="article-audio-controls" className={styles.capsule} hidden={!open}
        aria-label="Article narration" data-playing={playing}
        onKeyDown={event => {
          if (event.key === 'Escape' && event.target.tagName !== 'SELECT') {
            event.preventDefault();
            close();
          }
        }}>
        <img className={styles.cover} src={cover} alt="" width="42" height="42" />
        <strong className={styles.title} title={title}>{title}</strong>
        <div className={styles.timeline}>
          <input type="range" aria-label="Seek narration" aria-valuetext={formatAudioTime(time) + ' of ' + formatAudioTime(duration)}
            min={0} max={duration || 1} step="any" value={time} disabled={!duration}
            style={{'--audio-progress': (duration ? 100 * time / duration : 0) + '%'}}
            onChange={event => seek(event.target.valueAsNumber)} />
          <div aria-hidden="true" className={styles.times}><span>{formatAudioTime(time)} / </span><span>{duration ? formatAudioTime(duration) : '–:––'}</span></div>
        </div>
        <div className={styles.transport}>
          <button type="button" aria-label="Rewind 15 seconds" disabled={!duration}
            onClick={() => seek(media.current.currentTime - 15)}><Icon name="back"/></button>
          <button type="button" className={styles.play} aria-label={paused ? 'Play narration' : 'Pause narration'}
            ref={node => {
              playControl.current = node;
              if (node && open && focusOnOpen.current) {
                focusOnOpen.current = false;
                node.focus({preventScroll: true});
              }
            }}
            onClick={toggle}><Icon name={paused ? 'play' : 'pause'}/></button>
          <button type="button" aria-label="Forward 15 seconds" disabled={!duration}
            onClick={() => seek(media.current.currentTime + 15)}><Icon name="forward"/></button>
        </div>
        <div className={styles.wave} ref={wave} aria-hidden="true"><i/><i/><i/><i/><i/></div>
        <select className={styles.speed} aria-label="Playback speed" value={speed}
          onChange={event => {
            const value = Number(event.target.value);
            media.current.playbackRate = value;
            setSpeed(value);
            setStatus('Playback speed ' + value + ' times.');
          }}>
          {SPEEDS.map(value => <option key={value} value={value}>{value}×</option>)}
        </select>
        <button type="button" className={styles.close} aria-label="Close audio player" onClick={close}>
          <Icon name="close" />
        </button>
      </section>, portalRoot)}
    </div>
  );
}

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
    link: <path d="m10 13 4-4m-6 6-1 1a3.5 3.5 0 0 1-5-5l4-4a3.5 3.5 0 0 1 5 0m2 2 1-1a3.5 3.5 0 0 1 5 5l-4 4a3.5 3.5 0 0 1-5 0" transform="translate(1 1)"/>,
  };
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[name]}</svg>;
}

export default function ArticleAudioPlayer({src, title, cover}) {
  const media = useRef(null);
  const inline = useRef(null);
  const inlinePlay = useRef(null);
  const dock = useRef(null);
  const wave = useRef(null);
  const graph = useRef(null);
  const [pastAudio, setPastAudio] = useState(false);
  const [dockDismissed, setDockDismissed] = useState(false);
  const [started, setStarted] = useState(false);
  const [paused, setPaused] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const showDock = started && pastAudio && !dockDismissed;

  const syncTime = useCallback(() => {
    const audio = media.current;
    if (!audio) return;
    const length = Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration : 0;
    setDuration(length);
    setTime(clampAudioTime(audio.currentTime, length));
  }, []);

  useEffect(() => {
    // Metadata may load before React hydrates the audio element.
    syncTime();
  }, [src, syncTime]);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timer);
  }, [copied]);

  useEffect(() => {
    if (!started || dockDismissed) return;
    const audioBar = inline.current;
    const reading = audioBar.closest('main')?.querySelector('[data-article-reading-surface]');
    let frame = 0;

    function measure() {
      frame = 0;
      const bar = audioBar.getBoundingClientRect();
      // The article's reading surface scrolls over its sticky header.
      const covered = reading && reading.getBoundingClientRect().top <= bar.top;
      const past = bar.bottom <= 64 || Boolean(covered);
      if (!past && dock.current?.contains(document.activeElement)) {
        // The inline controls become focusable again after this render.
        window.requestAnimationFrame(() => inlinePlay.current?.focus({preventScroll: true}));
      }
      setPastAudio(past);
    }

    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(measure);
    }

    const observer = new ResizeObserver(schedule);
    observer.observe(audioBar);
    if (audioBar.parentElement) observer.observe(audioBar.parentElement);
    window.addEventListener('scroll', schedule, {passive: true});
    window.addEventListener('resize', schedule);
    measure();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.cancelAnimationFrame(frame);
    };
  }, [started, dockDismissed]);

  function dismissDock() {
    media.current.pause();
    setDockDismissed(true);
    inline.current.closest('main')?.querySelector('[data-article-reading-surface]')
      ?.focus({preventScroll: true});
  }

  useEffect(() => () => {
    if (graph.current) void graph.current.context.close().catch(() => {});
  }, []);

  useEffect(() => {
    const analyser = graph.current?.analyser;
    if (!showDock || !playing || !analyser) return;
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
  }, [showDock, playing]);

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

  function seek(value) {
    const audio = media.current;
    if (!Number.isFinite(audio.duration) || audio.duration <= 0) return;
    try {
      audio.currentTime = clampAudioTime(value, audio.duration);
      syncTime();
    } catch {
      setError('Seeking is unavailable right now.');
    }
  }

  async function toggle() {
    const audio = media.current;
    setError('');
    if (!audio.paused) {
      audio.pause();
      return;
    }
    setDockDismissed(false);
    try { startAudioGraph(audio); } catch { /* Native playback remains available. */ }
    try {
      await audio.play();
    } catch (playbackError) {
      if (playbackError.name !== 'AbortError') setError('Unable to play the narration. Try again.');
    }
  }

  async function share() {
    setError('');
    const canonical = document.querySelector('link[rel="canonical"]');
    const url = canonical?.href || new URL(window.location.pathname, window.location.origin).href;
    if (navigator.share) {
      try {
        await navigator.share({title, url});
        return;
      } catch (shareError) {
        if (shareError.name === 'AbortError') return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      setError('Couldn’t copy the article link.');
    }
  }

  const playbackLabel = paused ? 'Play narration' : 'Pause narration';
  const playbackIcon = <Icon name={paused ? 'play' : 'pause'}/>;
  const elapsed = formatAudioTime(time);
  const total = duration ? formatAudioTime(duration) : '–:––';
  const rewind = (
    <button type="button" className={styles.skip} aria-label="Rewind 15 seconds" disabled={!duration}
      onClick={() => seek(media.current.currentTime - 15)}><Icon name="back"/></button>
  );
  const forward = (
    <button type="button" className={styles.skip} aria-label="Forward 15 seconds" disabled={!duration}
      onClick={() => seek(media.current.currentTime + 15)}><Icon name="forward"/></button>
  );
  const speedControl = (
    <select className={styles.speed} aria-label="Playback speed" value={speed}
      onChange={event => {
        const value = Number(event.target.value);
        media.current.playbackRate = value;
        setSpeed(value);
      }}>
      {SPEEDS.map(value => <option key={value} value={value}>{value}×</option>)}
    </select>
  );
  const timeline = (
    <input className={styles.timeline} type="range" aria-label="Seek narration"
      aria-valuetext={elapsed + ' of ' + total}
      min={0} max={duration || 1} step="any" value={time} disabled={!duration}
      style={{'--audio-progress': (duration ? 100 * time / duration : 0) + '%'}}
      onChange={event => seek(event.target.valueAsNumber)} />
  );
  return (
    <section ref={inline} className={styles.audio} data-article-audio aria-label="Article narration">
      <audio ref={media} src={src} preload="metadata"
        onLoadedMetadata={syncTime} onDurationChange={syncTime} onTimeUpdate={syncTime}
        onPlay={() => setPaused(false)}
        onPlaying={() => {setStarted(true); setPlaying(true);}}
        onWaiting={() => setPlaying(false)}
        onPause={() => {setPaused(true); setPlaying(false);}}
        onEnded={() => {setPaused(true); setPlaying(false); syncTime();}}
        onError={() => {setPaused(true); setPlaying(false); setError('Article narration is unavailable.');}}
      />
      <div inert={showDock}>
        <div className={styles.row}>
          <div className={styles.transport} data-started={started}>
            <button ref={inlinePlay} type="button" className={styles.play}
              aria-label={started ? playbackLabel : 'Listen to article'} onClick={toggle}>
              <span className={styles.playIcon}>{playbackIcon}</span>
              {!started && <span>Listen to article</span>}
            </button>
            <span className={styles.time}>{started ? elapsed : total}</span>
            {started && <>{rewind}{forward}{speedControl}</>}
          </div>
          <button type="button" className={styles.share} aria-label={copied ? 'Link copied' : 'Share'} onClick={share}>
            <Icon name="link" /><span>{copied ? 'Copied' : 'Share'}</span>
          </button>
        </div>
        {started && timeline}
      </div>
      {showDock && createPortal(
        <section ref={dock} className={styles.dock} aria-label="Article mini player"
          onKeyDown={event => {
            if (event.key === 'Escape' && event.target.tagName !== 'SELECT') {
              event.preventDefault();
              dismissDock();
            }
          }}>
          <img className={styles.dockCover} src={cover} alt="" width="44" height="44" />
          <div className={styles.dockHeader}>
            <strong>{title}</strong>
            <span ref={wave} className={styles.wave} aria-hidden="true"><i/><i/><i/><i/><i/></span>
          </div>
          <div className={styles.dockProgress}>
            <span>{elapsed}</span>
            {timeline}
          </div>
          <div className={styles.dockTransport}>
            {rewind}
            <button type="button" className={styles.dockPlay} aria-label={playbackLabel} onClick={toggle}>{playbackIcon}</button>
            {forward}
            {speedControl}
          </div>
          <button type="button" className={styles.dockClose} aria-label="Close audio player" onClick={dismissDock}>
            <Icon name="close"/>
          </button>
          {error && <p className={styles.dockError} role="status">{error}</p>}
        </section>,
        document.body
      )}
      <span className={styles.srOnly} role="status">{copied ? 'Article link copied.' : ''}</span>
      {error && !showDock && <p className={styles.error} role="status">{error}</p>}
    </section>
  );
}

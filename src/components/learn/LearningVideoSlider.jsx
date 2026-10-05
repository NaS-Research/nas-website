"use client";

import { useEffect, useRef, useState } from 'react';
import LearningVideoCard from './LearningVideoCard';
import styles from './LearningVideos.module.css';

export default function LearningVideoSlider({ videos }) {
  const track = useRef(null);
  const [position, setPosition] = useState({ previous: false, next: false });
  useEffect(() => {
    const element = track.current;
    function update() {
      setPosition({ previous: element.scrollLeft > 2, next: element.scrollLeft + element.clientWidth < element.scrollWidth - 2 });
    }
    update();
    element.addEventListener('scroll', update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => { element.removeEventListener('scroll', update); observer.disconnect(); };
  }, [videos]);

  function move(direction) {
    const element = track.current;
    const card = element.firstElementChild;
    if (!card) return;
    const gap = parseFloat(getComputedStyle(element).columnGap) || 0;
    const step = card.getBoundingClientRect().width + gap;
    const perPage = Math.max(1, Math.round((element.clientWidth + gap) / step));
    const current = Math.round(element.scrollLeft / step);
    element.scrollTo({ left: (current + direction * perPage) * step, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }

  return (
    <div className={styles.slider} role="region" aria-roledescription="carousel" aria-label="Latest videos">
      <div id="learn-video-track" ref={track} className={styles.track} tabIndex={0} aria-label="Browse latest videos" onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1); }
      }}>
        {videos.map((video) => <LearningVideoCard key={video.id} video={video} />)}
      </div>
      <div className={styles.sliderControls}>
        <button type="button" aria-label="Previous videos" aria-controls="learn-video-track" disabled={!position.previous} onClick={() => move(-1)}><span aria-hidden="true">←</span></button>
        <button type="button" aria-label="Next videos" aria-controls="learn-video-track" disabled={!position.next} onClick={() => move(1)}><span aria-hidden="true">→</span></button>
      </div>
    </div>
  );
}

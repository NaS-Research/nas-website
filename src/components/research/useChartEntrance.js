"use client";

import {useEffect, useRef, useState} from 'react';

// Latch on the plot, not the section heading. Scrolling away never resets it.
// Keying the plot by its selected metric provides an intentional fresh entrance.
export function useChartEntrance() {
  const ref = useRef(null);
  const [phase, setPhase] = useState('static');
  useEffect(() => {
    const element = ref.current;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!element || motion.matches || !('IntersectionObserver' in window)) return;
    setPhase('waiting');
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setPhase('entered');
        observer.disconnect();
      }
    }, {threshold: 0.2});
    observer.observe(element);
    const onMotionChange = () => {
      if (motion.matches) { observer.disconnect(); setPhase('static'); }
    };
    motion.addEventListener('change', onMotionChange);
    return () => { observer.disconnect(); motion.removeEventListener('change', onMotionChange); };
  }, []);
  return {ref, phase};
}

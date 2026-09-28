"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./research-gallery.css";

function ResearchRail({ studies, compact, paused, reduced }) {
  const rail = useRef(null);
  const pausedRef = useRef(paused); pausedRef.current = paused;
  const group = useRef(null);
  const interacting = useRef(false);
  const dragging = useRef(null);
  const suppressClick = useRef(false);


  useEffect(() => {
    const element = rail.current;
    let frame, previous = 0, visible = false, position = element.scrollLeft, written = element.scrollLeft, direction = 1;
    let maximum = 0;
    const measure = () => {
      maximum = Math.max(0, element.scrollWidth - element.clientWidth);
      position = written = element.scrollLeft;
    };
    const resize = new ResizeObserver(measure);
    resize.observe(group.current);
    resize.observe(element);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(element);
    measure();
    const tick = time => {
      const elapsed = previous ? Math.min(time - previous, 50) : 0;
      previous = time;
      if (maximum > 2 && !reduced && visible && !document.hidden && !pausedRef.current && !interacting.current && !dragging.current && !element.contains(document.activeElement)) {
        if (element.scrollLeft !== written) position = element.scrollLeft;
        const distance = direction > 0 ? maximum - position : position;
        const ease = Math.min(1, Math.max(.12, distance / 100));
        position += direction * elapsed * (compact ? .022 : .030) * ease;
        if (position >= maximum) { position = maximum; direction = -1; }
        if (position <= 0) { position = 0; direction = 1; }
        element.scrollLeft = position; written = element.scrollLeft;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); resize.disconnect(); observer.disconnect(); };
  }, [reduced, compact]);

  return <div className={compact ? "research-gallery__row research-gallery__row--small" : "research-gallery__row"}>
    <div ref={rail} className="research-gallery__rail" role="region" aria-label={compact ? "More publications" : "Featured publications"}
      onPointerEnter={e => { if (e.pointerType === "mouse") interacting.current = true; }}
      onPointerLeave={() => { interacting.current = false; }}
      onTouchStart={() => { interacting.current = true; }}
      onTouchEnd={() => { interacting.current = false; }}
      onTouchCancel={() => { interacting.current = false; }}
      onPointerDown={e => {
        if (e.pointerType !== "mouse" || e.button !== 0) return;
        suppressClick.current = false;
        dragging.current = { x: e.clientX, scroll: rail.current.scrollLeft };
      }}
      onPointerMove={e => {
        const start = dragging.current;
        if (!start) return;
        if (Math.abs(e.clientX - start.x) > 5) {
          suppressClick.current = true;
          rail.current.setPointerCapture(e.pointerId);
          rail.current.scrollLeft = start.scroll - (e.clientX - start.x);
        }
      }}
      onPointerUp={() => { dragging.current = null; }}
      onPointerCancel={() => { dragging.current = null; }}
      onLostPointerCapture={() => { dragging.current = null; }}
      onDragStart={e => e.preventDefault()}
      onClickCapture={e => { if (suppressClick.current) { e.preventDefault(); e.stopPropagation(); suppressClick.current = false; } }}>
      <div className="research-gallery__group" ref={group}>
        {studies.map(study => <Link key={study.slug} href={`/research/${study.slug}`} className="research-gallery__card" aria-label={`${study.title}. ${study.type}. Read publication.`}>
          <Image src={study.image} alt="" fill sizes={compact ? "(max-width: 600px) 78vw, 35vw" : "(max-width: 600px) 88vw, 78vw"} draggable={false} />
          <div className="research-gallery__shade" />
          <span className="research-gallery__identity">NaS <span>Research</span></span>
          <div className="research-gallery__caption">
            <p>{study.area} <span>· {study.type}</span></p>
            <h3>{study.title}</h3>
            <span className="research-gallery__read">{study.type === "White Paper" ? "Read paper" : "Read study"}</span>
          </div>
        </Link>)}
      </div>
    </div>

  </div>;
}

export default function ResearchGallery({ studies }) {
  const gallery = useRef(null);
  const step = direction => {
    gallery.current?.querySelectorAll(".research-gallery__rail").forEach(element => {
      const card = element.querySelector("a");
      if (card) element.scrollLeft += direction * (card.getBoundingClientRect().width + 12);
    });
  };
  const [paused, setPaused] = useState(false);
  // Start still for SSR; enable movement only after checking the visitor's preference.
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  if (!studies.length) return null;
  const unique = studies.filter((study, index) => studies.findIndex(item => item.slug === study.slug || item.image === study.image) === index);
  const primary = unique.slice(0, 2);
  const secondary = unique.slice(2);
  return <section ref={gallery} id="current-research" className="research-gallery" aria-labelledby="research-gallery-title">
    <header className="research-gallery__header">
      <p>Research at NaS</p><h2 id="research-gallery-title">Selected research.</h2>
      <Link href="/research">Explore all research <span aria-hidden="true">↗</span></Link>
    </header>
    <ResearchRail studies={primary} paused={paused} reduced={reduced} />
    {secondary.length > 0 && <ResearchRail studies={secondary} compact paused={paused} reduced={reduced} />}
    <div className="research-gallery__footer">
      <span>Reports, research notes & white papers</span>
      <div className="research-gallery__controls" role="group" aria-label="Research gallery controls">
      <button onClick={() => step(-1)} aria-label="Previous research">←</button>
      <button onClick={() => step(1)} aria-label="Next research">→</button>
      {!reduced && <button onClick={() => setPaused(value => !value)} aria-label={paused ? "Play research gallery" : "Pause research gallery"} aria-pressed={paused}><span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span> {paused ? "Play" : "Pause"}</button>}
      </div>
    </div>
  </section>;
}

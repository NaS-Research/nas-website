"use client";

import Image from "next/image";
import WorkspacePreviewFilm from "./WorkspacePreviewFilm";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./research-gallery.css";

function ResearchRail({ studies, compact, paused, reduced }) {
  const rail = useRef(null);
  const collectionKey = studies.map(study => study.slug).join("|");
  const pausedRef = useRef(paused); pausedRef.current = paused;
  const group = useRef(null);
  const interacting = useRef(false);
  const dragging = useRef(null);
  const suppressClick = useRef(false);


  useEffect(() => {
    const element = rail.current;
    let frame, previous = 0, visible = false, position = 0, written = 0;
    let cycle = 0;
    const measure = () => {
      cycle = group.current.getBoundingClientRect().width;
      position = reduced ? 0 : cycle;
      element.scrollLeft = position;
      written = element.scrollLeft;
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
      if (cycle > 0 && !reduced && visible && !document.hidden && !pausedRef.current && !interacting.current && !dragging.current && !element.contains(document.activeElement)) {
        if (Math.abs(element.scrollLeft - written) > 1) position = element.scrollLeft;
        // Increasing scrollLeft moves the artwork from right to left. Wrap between
        // identical tracks without reversing direction or a visible reset.
        position += elapsed * (compact ? .022 : .030);
        if (position < cycle) position += cycle;
        if (position >= cycle * 2) position -= cycle;
        element.scrollLeft = position;
        written = element.scrollLeft;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); resize.disconnect(); observer.disconnect(); };
  }, [reduced, compact, collectionKey]);

  return <div className={compact ? "research-gallery__row research-gallery__row--small" : "research-gallery__row"}>
    <div ref={rail} className="research-gallery__rail" data-reduced={reduced} role="region" aria-label={compact ? "More publications" : "Featured publications"}
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
      {(reduced ? [0] : [0, 1, 2, 3]).map(copy => <div className="research-gallery__group" ref={copy === (reduced ? 0 : 1) ? group : undefined} key={copy} aria-hidden={!reduced && copy !== 1 ? true : undefined}>
        {studies.map(study => <Link key={study.slug} href={`/research/${study.slug}`} className="research-gallery__card" tabIndex={!reduced && copy !== 1 ? -1 : undefined} aria-label={`${study.title}. ${study.type}. Read publication.`}>
          {study.workspaceFilm ? <WorkspacePreviewFilm className="research-gallery__film" compact={compact} paused={paused || reduced} /> : <Image src={study.image} alt="" fill sizes={compact ? "(max-width: 600px) 78vw, 35vw" : "(max-width: 600px) 88vw, 78vw"} draggable={false} />}
          <div className="research-gallery__shade" />
          <div className="research-gallery__caption">
            <p>{study.area} <span>· {study.type}</span></p>
            <h3>{study.title}</h3>
            <span className="research-gallery__read">{study.type === "White Paper" ? "Read paper" : study.type === "Release" ? "Read announcement" : "Read study"}</span>
          </div>
        </Link>)}
      </div>)}
    </div>

  </div>;
}

export default function ResearchGallery({ studies }) {
  const gallery = useRef(null);
  const [shuffled, setShuffled] = useState(null);
  useEffect(() => {
    const collection = studies.filter((study, index) => studies.findIndex(item => item.slug === study.slug || item.image === study.image) === index);
    // Shuffle after hydration, then retain a stable order for a seamless loop.
    // Split afterwards so a publication never appears in both rows.
    for (let index = collection.length - 1; index > 0; index--) {
      const target = Math.floor(Math.random() * (index + 1));
      [collection[index], collection[target]] = [collection[target], collection[index]];
    }
    setShuffled(collection);
  }, [studies]);
  const step = () => {
    gallery.current?.querySelectorAll(".research-gallery__rail").forEach(element => {
      const card = element.querySelector("a");
      if (card) element.scrollLeft += card.getBoundingClientRect().width + 12;
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
  const unique = shuffled ?? studies.filter((study, index) => studies.findIndex(item => item.slug === study.slug || item.image === study.image) === index);
  const split = Math.max(1, Math.floor(unique.length / 2));
  const primary = unique.slice(0, split);
  const secondary = unique.slice(split);
  return <section ref={gallery} id="current-research" className="research-gallery" aria-labelledby="research-gallery-title">
    <header className="research-gallery__header">
      <p>Research at NaS</p><h2 id="research-gallery-title">Selected research.</h2>
      <Link href="/research">Explore all research <span aria-hidden="true">↗</span></Link>
    </header>
    <ResearchRail studies={primary} paused={paused} reduced={reduced} />
    {secondary.length > 0 && <ResearchRail studies={secondary} compact paused={paused} reduced={reduced} />}
    <div className="research-gallery__footer">
      <span>Reports, research notes, white papers & releases</span>
      <div className="research-gallery__controls" role="group" aria-label="Research gallery controls">
      <button onClick={step} aria-label="Show more research">←</button>
      {!reduced && <button onClick={() => setPaused(value => !value)} aria-label={paused ? "Play research gallery" : "Pause research gallery"} aria-pressed={paused}><span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span> {paused ? "Play" : "Pause"}</button>}
      </div>
    </div>
  </section>;
}

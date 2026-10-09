"use client";

import Image from "next/image";
import { flushSync } from "react-dom";
import { shuffleResearch } from "./shuffle-research.mjs";
import WorkspacePreviewFilm from "./WorkspacePreviewFilm";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import "./research-gallery.css";

function ResearchRail({ studies, label, compact, reduced }) {
  const rail = useRef(null);
  const [batches, setBatches] = useState(() => [0, 1, 2, 3].map(id => ({ id, studies })));
  const batchesRef = useRef(batches); batchesRef.current = batches;
  useEffect(() => {
    let previous = [];
    setBatches([0, 1, 2, 3].map(id => {
      const next = shuffleResearch(studies, previous);
      previous = next;
      return { id, studies: next };
    }));
  }, [studies]);
  const collectionKey = studies.map(study => study.slug).join("|");
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
    resize.observe(element);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(element);
    measure();
    const tick = time => {
      const elapsed = previous ? Math.min(time - previous, 50) : 0;
      previous = time;
      if (cycle > 0 && !reduced && visible && !document.hidden && !interacting.current && !dragging.current && !element.contains(document.activeElement)) {
        if (Math.abs(element.scrollLeft - written) > 1) position = element.scrollLeft;
        // Recycle only the fully offscreen batch. Visible cards retain their keys
        // and positions while a fresh shuffled pass is appended beyond the viewport.
        position += elapsed * (compact ? .022 : .030);
        if (position < 0) position = 0;
        if (position >= cycle * 2) {
          const current = batchesRef.current;
          const last = current[current.length - 1];
          flushSync(() => setBatches([
            ...current.slice(1),
            { id: last.id + 1, studies: shuffleResearch(studies, last.studies) },
          ]));
          position -= cycle;
        }
        element.scrollLeft = position;
        written = element.scrollLeft;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); resize.disconnect(); observer.disconnect(); };
  }, [reduced, compact, collectionKey]);

  return <div className={compact ? "research-gallery__row research-gallery__row--small" : "research-gallery__row"}>
    <div ref={rail} className="research-gallery__rail" data-reduced={reduced} role="region" aria-label={label}
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
      {(reduced ? [{ id: "still", studies }] : batches).map((batch, copy) => <div className="research-gallery__group" ref={copy === (reduced ? 0 : 1) ? group : undefined} key={batch.id} aria-hidden={!reduced && copy !== 1 ? true : undefined}>
        {batch.studies.map(study => <Link key={study.slug} href={`/research/${study.slug}`} className={`research-gallery__card${study.mark ? " research-gallery__card--mark" : ""}${study.contain ? " research-gallery__card--contain" : ""}`} tabIndex={!reduced && copy !== 1 ? -1 : undefined} aria-label={`${study.title}. ${study.type}. Read publication.`}>
          {study.workspaceFilm || study.video ? <WorkspacePreviewFilm className="research-gallery__film" compact={compact} paused={reduced} src={(compact ? study.compactVideo || study.video : study.video) || undefined} poster={study.workspaceFilm ? undefined : study.image} /> : <Image src={study.image} alt="" fill sizes={compact ? "(max-width: 600px) 78vw, 35vw" : "(max-width: 600px) 88vw, 78vw"} draggable={false} />}
          <div className="research-gallery__shade" />
          <div className="research-gallery__caption">
            <p>{study.area} <span>· {study.type}</span></p>
            <h3>{study.title}</h3>
            <span className="research-gallery__read">{study.type === "White Paper" ? "Read paper" : study.type === "Release" ? "Read announcement" : study.type === "Institutional Essay" ? "Read article" : "Read study"}</span>
          </div>
        </Link>)}
      </div>)}
    </div>

  </div>;
}

export default function ResearchGallery({ studies }) {
  const { perspectives, publications } = useMemo(() => ({
    perspectives: studies.filter(study => study.type === "Institutional Essay" || study.type === "Release"),
    publications: studies.filter(study => study.type !== "Institutional Essay" && study.type !== "Release"),
  }), [studies]);
  // Start still for SSR; enable movement only after checking the visitor's preference.
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  if (!studies.length) return null;
  return <section id="current-research" className="research-gallery" aria-labelledby="research-gallery-title">
    <header className="research-gallery__header">
      <p>Research at NaS</p><h2 id="research-gallery-title">Selected research.</h2>
      <Link href="/research">Explore all research <span aria-hidden="true">↗</span></Link>
    </header>
    {perspectives.length > 0 && <ResearchRail studies={perspectives} label="Perspectives & releases" reduced={reduced} />}
    {publications.length > 0 && <ResearchRail studies={publications} label="Research & publications" compact reduced={reduced} />}
    <div className="research-gallery__footer">
      <span>Research, releases & perspectives</span>
    </div>
  </section>;
}

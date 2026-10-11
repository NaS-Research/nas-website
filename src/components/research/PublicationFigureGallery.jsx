"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import "./cva-visuals.css";

export default function PublicationFigureGallery({ figures, title = "Exploratory figures" }) {
  const rail = useRef(null);
  const railId = useId();
  const [active, setActive] = useState(0);
  function goTo(index) {
    const next = Math.max(0, Math.min(figures.length - 1, index));
    const slide = rail.current?.children[next];
    if (!slide) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    rail.current.scrollTo({
      left: slide.offsetLeft - (rail.current.clientWidth - slide.clientWidth) / 2,
      behavior: reduce ? "instant" : "smooth",
    });
  }
  function updateActive() {
    const bounds = rail.current.getBoundingClientRect();
    const center = bounds.left + bounds.width / 2;
    const distance = Array.from(rail.current.children).map(slide => {
      const box = slide.getBoundingClientRect();
      return Math.abs(box.left + box.width / 2 - center);
    });
    setActive(distance.indexOf(Math.min(...distance)));
  }
  function onKeyDown(event) {
    const targets = { ArrowLeft: active - 1, ArrowRight: active + 1, Home: 0, End: figures.length - 1 };
    if (!(event.key in targets)) return;
    event.preventDefault();
    goTo(targets[event.key]);
  }
  return <div className="publication-figure-gallery" role="region" aria-roledescription="carousel" aria-label={title}>
    <div className="publication-figure-gallery__controls">
      <button type="button" aria-label="Previous figure" aria-controls={railId} disabled={active === 0} onClick={() => goTo(active - 1)}>←</button>
      <button type="button" aria-label="Next figure" aria-controls={railId} disabled={active === figures.length - 1} onClick={() => goTo(active + 1)}>→</button>
    </div>
    <div ref={rail} id={railId} className="publication-figure-gallery__rail" tabIndex={0} aria-label="Use left and right arrow keys to browse figures" onKeyDown={onKeyDown} onScroll={updateActive}>
      {figures.map((figure, index) => <figure className="publication-figure-gallery__slide" key={figure.src} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${figures.length}`} aria-hidden={index !== active}>
        <div className="publication-figure-gallery__image"><Image src={figure.src} alt={figure.alt} width={2100} height={figure.height} sizes="(max-width: 800px) 88vw, 680px" /></div>
        <figcaption>{figure.caption} <a href={figure.src} tabIndex={index === active ? 0 : -1} target="_blank" rel="noopener noreferrer">Open full-size figure ↗</a></figcaption>
      </figure>)}
    </div>
    <p className="publication-figure-gallery__status" aria-live="polite" aria-atomic="true">Figure {active + 1} of {figures.length}: {figures[active].alt}</p>
  </div>;
}

"use client";

import { useEffect, useRef, useState } from "react";
import "./module-contents.css";

export default function ModuleContents({ sections }) {
  const items = [...sections, { slug: "module-test", title: "Module practice" }];
  const [active, setActive] = useState(sections[0]?.slug);
  const nav = useRef(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    let frame;
    const targets = items.map(({ slug }) => document.getElementById(slug)).filter(Boolean);
    const update = () => {
      frame = undefined;
      const line = window.innerWidth <= 860 ? 210 : 150;
      let current = targets[0];
      for (const target of targets) {
        if (target.getBoundingClientRect().top <= line) current = target;
        else break;
      }
      if (current) setActive(current.id);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
    };
  }, [sections]);

  useEffect(() => {
    const list = nav.current;
    const update = () => {
      const link = list?.querySelector('[aria-current="location"]');
      if (!link) return;
      setMarker({ x: link.offsetLeft, y: link.offsetTop, width: link.offsetWidth, height: link.offsetHeight });
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (link.offsetTop < list.scrollTop || link.offsetTop + link.offsetHeight > list.scrollTop + list.clientHeight) {
        list.scrollTo({ top: Math.max(0, link.offsetTop - list.clientHeight / 2 + link.offsetHeight / 2), behavior: reduced ? "instant" : "smooth" });
      }
      if (link.offsetLeft < list.scrollLeft || link.offsetLeft + link.offsetWidth > list.scrollLeft + list.clientWidth) {
        list.scrollTo({ left: Math.max(0, link.offsetLeft - list.clientWidth / 2 + link.offsetWidth / 2), behavior: reduced ? "instant" : "smooth" });
      }
    };
    update();
    const observer = new ResizeObserver(update);
    if (list) observer.observe(list);
    return () => observer.disconnect();
  }, [active]);

  return <aside className="pharmacy-module-nav module-contents" aria-label="Module contents">
    <p>In this module</p>
    <nav ref={nav} aria-label="Module sections">
      {marker && <span className="module-contents__marker" aria-hidden="true" style={{ transform: `translate(${marker.x}px, ${marker.y}px)`, width: marker.width, height: marker.height }} />}
      {items.map(({ slug, title }, index) => <a key={slug} href={`#${slug}`} aria-current={active === slug ? "location" : undefined}>
        <span className="module-contents__number">{index < sections.length ? String(index + 1).padStart(2, "0") : "→"}</span>
        <span>{title}</span>
      </a>)}
    </nav>
  </aside>;
}

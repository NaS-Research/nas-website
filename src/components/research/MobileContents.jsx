"use client";

import { publicationSectionTitle } from "@/lib/publicationHeadings";
import { useEffect, useRef, useState } from "react";
import usePublicationSection from "./usePublicationSection";

export default function MobileContents({ sections, hasSources, hasCitation = true, summaryLabel = "Summary", avoidOverlapSelector = null }) {
  const dialog = useRef(null);
  const trigger = useRef(null);
  const close = () => dialog.current?.close();
  const [overlapping, setOverlapping] = useState(false);
  useEffect(() => {
    if (!avoidOverlapSelector) return;
    let frame = null;
    const measure = () => {
      frame = null;
      const button = trigger.current;
      if (!button) return;
      const b = button.getBoundingClientRect();
      const collides = [...document.querySelectorAll(avoidOverlapSelector)].some(canvas => {
        const c = canvas.getBoundingClientRect();
        return c.width > 0 && c.height > 0 && b.left < c.right + 8 && b.right > c.left - 8 && b.top < c.bottom + 8 && b.bottom > c.top - 8;
      });
      setOverlapping(collides);
    };
    const schedule = () => { if (frame === null) frame = requestAnimationFrame(measure); };
    // Capture nested publication scrolling as well as document scrolling.
    window.addEventListener("scroll", schedule, true);
    window.addEventListener("resize", schedule);
    const observer = new MutationObserver(schedule);
    observer.observe(document.querySelector(".publication-body") || document.body, { childList: true, subtree: true });
    schedule();
    return () => {
      window.removeEventListener("scroll", schedule, true);
      window.removeEventListener("resize", schedule);
      observer.disconnect();
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [avoidOverlapSelector]);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const resize = () => { if (desktop.matches) dialog.current?.close(); };
    desktop.addEventListener("change", resize);
    return () => desktop.removeEventListener("change", resize);
  }, []);
  const links = [{ id: "summary", title: summaryLabel }, ...sections,
    ...(hasSources ? [{ id: "sources", title: "Sources" }] : []), ...(hasCitation ? [{ id: "citation", title: "Citation" }] : [])];
  const active = usePublicationSection(links.map(section => section.id));
  return <div className="mobile-contents">
    <button ref={trigger} className="mobile-contents__trigger" style={overlapping ? { visibility: "hidden", pointerEvents: "none" } : undefined} aria-haspopup="dialog" onClick={() => dialog.current.showModal()}>Contents <span aria-hidden="true">↑</span></button>
    <dialog ref={dialog} className="mobile-contents__sheet" aria-labelledby="mobile-contents-title" onClose={() => trigger.current?.focus({ preventScroll: true })} onClick={event => { if (event.target === dialog.current) close(); }}>
      <div className="mobile-contents__panel">
        <header><h2 id="mobile-contents-title">In this publication</h2><button autoFocus onClick={close} aria-label="Close contents">✕</button></header>
        <nav aria-label="Article sections">{links.map(section => <a key={section.id} href={`#${section.id}`} aria-current={active === section.id ? "location" : undefined} onClick={close}>{publicationSectionTitle(section.title)}</a>)}</nav>
      </div>
    </dialog>
  </div>;
}

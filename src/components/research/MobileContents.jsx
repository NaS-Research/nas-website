"use client";

import { useEffect, useRef } from "react";

export default function MobileContents({ sections, hasSources }) {
  const dialog = useRef(null);
  const trigger = useRef(null);
  const close = () => dialog.current?.close();
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const resize = () => { if (desktop.matches) dialog.current?.close(); };
    desktop.addEventListener("change", resize);
    return () => desktop.removeEventListener("change", resize);
  }, []);
  const links = [{ id: "summary", title: "Summary" }, ...sections,
    ...(hasSources ? [{ id: "sources", title: "Sources" }] : []), { id: "citation", title: "Citation" }];
  return <div className="mobile-contents">
    <button ref={trigger} className="mobile-contents__trigger" aria-haspopup="dialog" onClick={() => dialog.current.showModal()}>Contents <span aria-hidden="true">↑</span></button>
    <dialog ref={dialog} className="mobile-contents__sheet" aria-labelledby="mobile-contents-title" onClose={() => trigger.current?.focus({ preventScroll: true })} onClick={event => { if (event.target === dialog.current) close(); }}>
      <div className="mobile-contents__panel">
        <header><h2 id="mobile-contents-title">In this publication</h2><button autoFocus onClick={close} aria-label="Close contents">✕</button></header>
        <nav aria-label="Article sections">{links.map(section => <a key={section.id} href={`#${section.id}`} onClick={close}>{section.title.replace(/^\d+(?:\.\d+)?\.?\s*/, "")}</a>)}</nav>
      </div>
    </dialog>
  </div>;
}

"use client";

import { useEffect, useState } from "react";
import styles from "./DrugMonograph.module.css";

export default function DrugMonographContents({ sections }) {
  const [active, setActive] = useState(sections[0].id);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    const elements = sections.map(section => document.getElementById(section.id)).filter(Boolean);
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let current = elements[0];
        for (const element of elements) {
          if (element.getBoundingClientRect().top <= 180) current = element;
        }
        if (current) setActive(current.id);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [sections]);
  const selected = sections.find(section => section.id === active);
  return <aside className={styles.rail} aria-label="Drug page contents">
    <button className={styles.mobileContents} aria-expanded={expanded} aria-controls="drug-contents" onClick={() => setExpanded(!expanded)}>On this page <span>{selected.title}</span><span aria-hidden="true">{expanded ? "−" : "+"}</span></button>
    <div className={`${styles.railInner} ${expanded ? styles.railExpanded : ""}`} id="drug-contents">
      <span className={styles.railTitle}>On this page</span>
      <nav>{sections.map((section, index) => <a key={section.id} href={`#${section.id}`} aria-current={active === section.id ? "location" : undefined} onClick={() => { setActive(section.id); setExpanded(false); }}><span>{String(index + 1).padStart(2, "0")}</span>{section.title}</a>)}</nav>
      <div className={styles.takeaway}><span>Clinical focus</span><h3>{selected.title}</h3><p>{selected.takeaway}</p></div>
      <a className={styles.railBack} href="#">Back to top ↑</a>
    </div>
  </aside>;
}

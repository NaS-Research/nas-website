"use client";

import {useEffect, useRef, useState} from "react";
import styles from "./article-toolbar.module.css";

function ActionIcon({name}) {
  const paths = {
    pdf: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h4M9 12h6m-6 4h6"/></>,
    citation: <><rect x="8" y="8" width="11" height="13" rx="2"/><path d="M15 8V3H4v13h4"/></>,
    data: <><path d="M12 3v12m-4-4 4 4 4-4M4 16v5h16v-5"/></>,
    share: <><path d="m10 13 4-4m-6 6-1 1a3.5 3.5 0 0 1-5-5l4-4a3.5 3.5 0 0 1 5 0m2 2 1-1a3.5 3.5 0 0 1 5 5l-4 4a3.5 3.5 0 0 1-5 0"/></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

export default function PublicationActions({citation, pdfUrl, dataUrl, dataLabel = "Data & analysis", title, url, compact = false}) {
  const [copied, setCopied] = useState("");
  const [error, setError] = useState("");
  const timer = useRef(null);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copy(text, kind) {
    setError("");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(kind);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(""), 1800);
    } catch {
      setError(kind === "citation" ? "Couldn’t copy the citation. Try again." : "Couldn’t copy the link. Try again.");
    }
  }

  async function sharePublication() {
    setError("");
    const canonicalUrl = url || document.querySelector('link[rel="canonical"]')?.href || window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({title: title || document.title, url: canonicalUrl});
        return;
      } catch (shareError) {
        if (shareError.name === "AbortError") return;
      }
    }
    await copy(canonicalUrl, "link");
  }

  return (
    <div className={compact ? styles.actions : "publication-actions"} aria-label="Article resources">
      {pdfUrl && (
        <a className={compact ? styles.pdf : "publication-action publication-action--primary"} href={pdfUrl} target="_blank" rel="noreferrer">
          {compact && <ActionIcon name="pdf"/>}View PDF{!compact && " ↗"}
        </a>
      )}
      {citation && <button className={compact ? undefined : "publication-action"} type="button" data-action="citation" onClick={() => copy(citation, "citation")}>
        {compact && <ActionIcon name="citation"/>}{copied === "citation" ? "Copied" : "Copy citation"}
      </button>}
      {dataUrl && <a href={dataUrl} className={compact ? undefined : "publication-action"} aria-label="Download data and analysis">
        {compact && <ActionIcon name="data"/>}{dataLabel}
      </a>}
      <button className={compact ? undefined : "publication-action"} type="button" data-action="share" onClick={sharePublication}>
        {compact && <ActionIcon name="share"/>}{copied === "link" ? (compact ? "Copied" : "Link copied") : "Share"}
      </button>
      <span className={styles.status} role="status">{copied === "citation" ? "Citation copied." : copied === "link" ? "Article link copied." : ""}</span>
      {error && <p className={styles.error} role="alert">{error}</p>}
    </div>
  );
}

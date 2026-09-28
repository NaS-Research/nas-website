"use client";

import { useState } from "react";

export default function PublicationActions({ citation, pdfUrl }) {
  const [copied, setCopied] = useState("");

  async function copyCitation() {
    await navigator.clipboard.writeText(citation);
    setCopied("citation");
    window.setTimeout(() => setCopied(""), 1800);
  }

  async function sharePublication() {
    if (navigator.share) {
      try {
        await navigator.share({ title: document.title, url: window.location.href });
      } catch (error) {
        if (error.name !== "AbortError") throw error;
      }
      return;
    }
    await navigator.clipboard.writeText(window.location.href);
    setCopied("link");
    window.setTimeout(() => setCopied(""), 1800);
  }

  return (
    <div className="publication-actions">
      {pdfUrl ? (
        <a className="publication-action publication-action--primary" href={pdfUrl} target="_blank" rel="noreferrer">View PDF ↗</a>
      ) : null}
      {citation && <button className="publication-action" type="button" onClick={copyCitation}>{copied === "citation" ? "Copied" : "Copy citation"}</button>}
      <button className="publication-action" type="button" onClick={sharePublication}>{copied === "link" ? "Link copied" : "Share"}</button>
    </div>
  );
}

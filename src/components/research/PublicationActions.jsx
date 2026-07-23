"use client";

import { useState } from "react";

export default function PublicationActions({ citation, pdfUrl, showPdfStatus = true }) {
  const [copied, setCopied] = useState(false);

  async function copyCitation() {
    await navigator.clipboard.writeText(citation);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  async function sharePublication() {
    if (navigator.share) {
      await navigator.share({ title: document.title, url: window.location.href });
      return;
    }
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="publication-actions">
      {pdfUrl ? (
        <a className="publication-action publication-action--primary" href={pdfUrl} target="_blank" rel="noreferrer">View PDF ↗</a>
      ) : showPdfStatus ? (
        <span className="publication-action publication-action--disabled" title="A PDF has not been published for this document">PDF forthcoming</span>
      ) : null}
      <button className="publication-action" type="button" onClick={copyCitation}>{copied ? "Copied" : "Copy citation"}</button>
      <button className="publication-action" type="button" onClick={sharePublication}>Share</button>
    </div>
  );
}

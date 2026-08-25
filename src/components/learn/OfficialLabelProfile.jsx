"use client";

import { useEffect, useState } from "react";

function formatDate(value) {
  if (!value || value.length !== 8) return value || "Not supplied";
  return `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}`;
}

export default function OfficialLabelProfile({ generic }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`/api/drugs/profile?name=${encodeURIComponent(generic)}`, { signal: controller.signal })
      .then((response) => response.json())
      .then(setData)
      .catch((error) => {
        if (error.name !== "AbortError") setData({ profile: null, labels: [], unavailable: true });
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [generic]);

  if (loading) {
    return <section className="official-label-card official-label-card--loading" aria-live="polite"><span /><p>Retrieving current official label records</p></section>;
  }

  const profile = data?.profile;
  const labels = data?.labels || [];

  return (
    <section className="official-label-card" aria-labelledby="official-label-title">
      <header>
        <div>
          <p className="nas-section-label">Official label study view</p>
          <h2 id="official-label-title">Read the medication in its current labeled context.</h2>
        </div>
        {profile?.effectiveDate && <span>Label effective {formatDate(profile.effectiveDate)}</span>}
      </header>

      {profile && (
        <dl className="official-label-card__identity">
          <div><dt>Brand names in record</dt><dd>{profile.brandNames.slice(0, 4).join(", ") || "Not supplied"}</dd></div>
          <div><dt>Dosage forms</dt><dd>{profile.dosageForms.join(", ") || "See individual labels"}</dd></div>
          <div><dt>Routes</dt><dd>{profile.routes.join(", ") || "See individual labels"}</dd></div>
          <div><dt>Labeler</dt><dd>{profile.manufacturers.slice(0, 2).join(", ") || "See individual labels"}</dd></div>
        </dl>
      )}

      {profile?.sections?.length > 0 ? (
        <div className="official-label-card__sections">
          {profile.sections.map((section, index) => (
            <details open={index === 0} key={section.key}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{section.label}</strong><i aria-hidden="true">+</i></summary>
              <p>{section.text}</p>
            </details>
          ))}
        </div>
      ) : (
        <div className="official-label-card__unavailable"><strong>No structured openFDA section matched this generic name.</strong><p>Use the current DailyMed records below to review product-specific labeling.</p></div>
      )}

      <div className="official-label-card__records">
        <span>Current DailyMed records</span>
        {labels.length > 0 ? labels.map((label) => (
          <a href={`https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=${label.setId}`} target="_blank" rel="noreferrer" key={label.setId}>
            <strong>{label.title}</strong><small>{label.publishedDate} · Version {label.version}</small><i aria-hidden="true">↗</i>
          </a>
        )) : <a href={`https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=${encodeURIComponent(generic)}`} target="_blank" rel="noreferrer"><strong>Search DailyMed for {generic}</strong><i aria-hidden="true">↗</i></a>}
      </div>

      <p className="official-label-card__note">This page organizes a current public label record for study. Product labels differ by manufacturer, formulation, route, and approval status. Verify the specific product and current prescribing information before applying any clinical detail.</p>
    </section>
  );
}

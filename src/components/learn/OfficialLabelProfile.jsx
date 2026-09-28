"use client";

import { useEffect, useState } from "react";
import { labelGroups, labelParagraphs } from "@/data/drugPageSections";
import "./drug-profile.css";

function formatDate(value) {
  if (!value || value.length !== 8) return value || "Not supplied";
  return `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}`;
}

export default function OfficialLabelProfile({ generic }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);setData(null);
    fetch(`/api/drugs/profile?name=${encodeURIComponent(generic)}`, { signal: controller.signal })
      .then((response) => response.json())
      .then(result=>{if(!controller.signal.aborted)setData(result);})
      .catch((error) => {
        if (error.name !== "AbortError") setData({ profile: null, labels: [], unavailable: true });
      })
      .finally(() => {if(!controller.signal.aborted)setLoading(false);});
    return () => controller.abort();
  }, [generic]);

  if (loading) {
    return <section className="official-label-card official-label-card--loading" aria-live="polite"><span /><p>Loading label data</p></section>;
  }

  const profile = data?.profile;
  const labels = data?.labels || [];

  return (
    <section className="official-label-card organized-label">
      <header className="label-reader-heading"><span>Official label reader</span><h2>Product information, by topic.</h2><p>Open a section to read the label text. The selected record is one product, not every formulation of {generic}.</p></header>
      {profile && (
        <dl className="official-label-card__identity">
          <div><dt>Brand names</dt><dd>{profile.brandNames.slice(0, 4).join(", ") || "Not supplied"}</dd></div>
          <div><dt>Dosage forms</dt><dd>{profile.dosageForms.join(", ") || "See individual labels"}</dd></div>
          <div><dt>Routes</dt><dd>{profile.routes.join(", ") || "See individual labels"}</dd></div>
          <div><dt>Manufacturer</dt><dd>{profile.manufacturers?.join(", ") || "Not supplied"}</dd></div><div><dt>Label date</dt><dd>{profile.effectiveDate ? formatDate(profile.effectiveDate) : "Not supplied"}</dd></div>
        </dl>
      )}

      {profile?.sections?.length > 0 ? (
        <div className="drug-reader label-reader">
          <nav className="drug-reader-nav" aria-label="Label topics"><span>In this label</span>{labelGroups.filter(group=>profile.sections.some(section=>group.keys.includes(section.key))).map((group,index)=><a key={group.id} href={`#${group.id}`}><small>{String(index+1).padStart(2,'0')}</small>{group.label}</a>)}<a href="#label-sources">Source records ↗</a></nav>
          <div className="official-label-card__sections">
            {labelGroups.map(group=>{
              const sections=group.keys.map(key=>profile.sections.find(section=>section.key===key)).filter(Boolean);
              if(!sections.length)return null;
              return <section className="label-topic" id={group.id} key={group.id}><h3>{group.label}</h3>{sections.map(section=><details open={section.key==='boxed_warning'||section.key==='indications_and_usage'} key={section.key} className={section.key==='boxed_warning'?'label-boxed-warning':''}><summary><strong>{section.label}</strong><span>Read section</span><i aria-hidden="true">+</i></summary><div className="label-prose">{labelParagraphs(section.text).map((paragraph,index)=><p key={index}>{paragraph}</p>)}</div></details>)}</section>;
            })}
          </div>
        </div>
      ) : (
        <div className="official-label-card__unavailable"><strong>{data?.unavailable ? "Current label data could not be loaded." : "No structured openFDA section matched this generic name."}</strong><p>Use the current DailyMed records below to review product-specific labeling.</p></div>
      )}

      <div className="official-label-card__records" id="label-sources">
        {profile?.setId && <a href={`https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=${profile.setId}`} target="_blank" rel="noreferrer"><strong>Source of the label text above</strong><small>{formatDate(profile.effectiveDate)}</small><i aria-hidden="true">↗</i></a>}
        <span>Sources</span>
        {labels.length > 0 ? labels.map((label) => (
          <a href={`https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=${label.setId}`} target="_blank" rel="noreferrer" key={label.setId}>
            <strong>{label.title}</strong><small>{label.publishedDate} · Version {label.version}</small><i aria-hidden="true">↗</i>
          </a>
        )) : <a href={`https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=${encodeURIComponent(generic)}`} target="_blank" rel="noreferrer"><strong>Search DailyMed for {generic}</strong><i aria-hidden="true">↗</i></a>}
      </div>

      <p className="official-label-card__note">Labels differ by manufacturer, formulation, route, and approval status.</p>
    </section>
  );
}

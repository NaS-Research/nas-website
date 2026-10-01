import Link from "next/link";
import DrugMonograph from "@/components/learn/DrugMonograph";
import { acetaminophen } from "@/data/drugMonographs/acetaminophen";
import { reviewedDrugMonographs } from "@/data/drugMonographs";
import { drugPageGroups } from "@/data/drugPageSections";
import "@/components/learn/drug-profile.css";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import OfficialLabelProfile from "@/components/learn/OfficialLabelProfile";
import { coreDrugs, getCoreDrug } from "@/data/drugLibrary";
import { getDrugAtlasLesson } from "@/data/drugAtlas";

export function generateStaticParams() {
  return coreDrugs.map((drug) => ({ slug: drug.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const drug = getCoreDrug(slug);
  if (!drug) return {};
  return {
    title: `${drug.generic.replace(/\b\w/g, (letter) => letter.toUpperCase())} | NaS Drug Library`,
    description: slug === acetaminophen.slug
      ? "Acetaminophen: indications, formulation-specific dosage, safety, interactions, monitoring, and referenced pharmacy information."
      : reviewedDrugMonographs[slug]
      ? reviewedDrugMonographs[slug].description
      : drug.brand
      ? `Study ${drug.generic}, including common uses, mechanism, safety, monitoring, counseling, and current official medication references.`
      : `Review ${drug.generic} through its medication profile and current public medication label records.`,
    alternates: { canonical: `/learn/pharmacy/drugs/${drug.slug}` },
  };
}

function titleCase(value) {
  return value.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default async function DrugProfilePage({ params }) {
  const { slug } = await params;
  const drug = getCoreDrug(slug);
  if (!drug) notFound();
  if (slug === acetaminophen.slug) return <DrugMonograph monograph={acetaminophen} />;
  const monograph = reviewedDrugMonographs[slug];
  if (monograph) return <DrugMonograph monograph={monograph} />;
  const hasReviewedCard = Boolean(drug.brand);
  const classification = drug.className || (drug.therapeuticClass !== "Miscellaneous agents" ? drug.therapeuticClass : null);
  const groups = drugPageGroups.filter(group => group.id === 'overview' || group.sections.some(([key]) => drug[key]?.length));
  return (
    <div className="nas-page drug-profile-page">
      <div data-page-main>
        <header className="nas-shell drug-profile-hero">
          <Link href="/learn/pharmacy/drugs" className="learning-back">← Drug library</Link>
          <div className="drug-profile-kicker"><span>Medication reference</span><span>{hasReviewedCard ? "Study guide" : "Official label reader"}</span></div>
          <h1>{titleCase(drug.generic)}</h1>
          <p className="drug-profile-subtitle">{drug.brand || classification || "Public medication reference"}</p>
          <dl className="drug-profile-facts">
            <div><dt>Therapeutic class</dt><dd>{classification || "See the specific product label"}</dd></div>
            <div><dt>{hasReviewedCard ? "Formulation" : "Reference type"}</dt><dd>{drug.form || "Product-specific public labeling"}</dd></div>
            <div><dt>Explore</dt><dd>{getDrugAtlasLesson(drug.slug) ? <Link href={`/learn/pharmacy/atlas?drug=${drug.slug}`}>Open teaching atlas ↗</Link> : <Link href="/learn/pharmacy/drugs">Browse the drug library ↗</Link>}</dd></div>
          </dl>
        </header>
        <div className="nas-shell drug-profile-layout">
          {hasReviewedCard ? <div className="drug-reader">
            <nav className="drug-reader-nav" aria-label="On this drug page"><span>On this page</span>{groups.map(group=><a key={group.id} href={`#${group.id}`}><small>{group.number}</small>{group.label}</a>)}<a href="#drug-sources"><small>04</small>Sources</a></nav>
            <div className="drug-reader-content">
              {groups.map(group=><section id={group.id} className={`drug-chapter drug-chapter--${group.id}`} key={group.id} aria-labelledby={`${group.id}-title`}>
                <header><span>{group.number}</span><div><h2 id={`${group.id}-title`}>{group.label}</h2><p>{group.description}</p></div></header>
                {group.id==='overview' && <section className="drug-mechanism-card"><span>How it works</span><h3>Mechanism of action</h3><p>{drug.mechanism}</p></section>}
                <div className="drug-section-grid">{group.sections.filter(([key])=>drug[key]?.length).map(([key,label])=><section className={`drug-detail drug-detail--${key}`} key={key}><h3>{label}</h3><ul>{drug[key].map((item,index)=><li key={index}>{item}</li>)}</ul></section>)}</div>
              </section>)}
              {drug.generic==='fluoxetine' && <details className="drug-product-example"><summary>Product appearance · Fluoxetine 20 mg capsule</summary><p>Example product: green and off-white hard gelatin capsule, imprint E · 91. Other manufacturers may use different colors, shapes, and imprints. Confirm the imprint and original packaging.</p><a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b8d8da5-8c06-0942-e053-2995a90aa2c9" target="_blank" rel="noreferrer">View this product’s label ↗</a></details>}
              <section id="drug-sources" className="drug-source-panel"><span>04 / Sources</span><h2>Check the specific product.</h2><p>This study guide is a concise educational reference. Current prescribing information contains product-specific details.</p><a href={`https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=${encodeURIComponent(drug.generic)}`} target="_blank" rel="noreferrer">Review current DailyMed labels ↗</a></section>
            </div>
          </div> : <OfficialLabelProfile generic={drug.generic} />}
          <aside className="drug-profile-safety"><p>Educational reference only. Verify the specific product and current prescribing information before applying clinical details.</p></aside>
        </div>
      </div><Footer />
    </div>
  );
}

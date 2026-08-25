import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import OfficialLabelProfile from "@/components/learn/OfficialLabelProfile";
import { coreDrugs, getCoreDrug } from "@/data/drugLibrary";

export function generateStaticParams() {
  return coreDrugs.map((drug) => ({ slug: drug.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const drug = getCoreDrug(slug);
  if (!drug) return {};
  return {
    title: `${drug.generic.replace(/\b\w/g, (letter) => letter.toUpperCase())} | NaS Drug Library`,
    description: drug.brand
      ? `Study ${drug.generic}, including common uses, mechanism, safety, monitoring, counseling, and current official medication references.`
      : `Review ${drug.generic} through its ranked study context and current public medication label records.`,
    alternates: { canonical: `/learn/pharmacy/drugs/${drug.slug}` },
  };
}

function titleCase(value) {
  return value.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

const studySections = [
  { key: "commonUses", label: "Uses" },
  { key: "administration", label: "Administration" },
  { key: "commonEffects", label: "Common effects" },
  { key: "seriousRisks", label: "Serious risks" },
  { key: "contraindications", label: "Contraindications" },
  { key: "interactions", label: "Interactions" },
  { key: "monitoring", label: "Monitoring" },
  { key: "counseling", label: "Counseling" },
];

export default async function DrugProfilePage({ params }) {
  const { slug } = await params;
  const drug = getCoreDrug(slug);
  if (!drug) notFound();
  const hasReviewedCard = Boolean(drug.brand);
  const isFluoxetine = drug.generic === "fluoxetine";

  return (
    <div className="nas-page drug-profile-page">
      <main>
        <header className="nas-shell drug-profile-hero">
          <Link href="/learn/pharmacy/drugs" className="learning-back">← Drug library</Link>
          <h1>{titleCase(drug.generic)}</h1>
          {hasReviewedCard && <div className="drug-profile-hero__meta"><strong>{drug.brand}</strong><span>{drug.className}</span><span>{drug.form}</span></div>}
        </header>

        <div className="nas-shell drug-profile-layout">
          {!hasReviewedCard ? (
            <OfficialLabelProfile generic={drug.generic} />
          ) : isFluoxetine ? (
            <section className="drug-appearance" aria-labelledby="appearance-title">
              <div className="drug-appearance__heading"><div><p className="nas-section-label">Medication appearance</p><h2 id="appearance-title">Fluoxetine 20 mg capsule</h2></div><span>Example product · E 91</span></div>
              <div className="drug-appearance__stage">
                <div className="capsule-model" role="img" aria-label="Green and off-white fluoxetine 20 milligram capsule with E 91 imprint">
                  <span className="capsule-model__cap">E</span><span className="capsule-model__body">91</span>
                </div>
                <div className="drug-appearance__orbit" aria-hidden="true" />
              </div>
              <div className="drug-appearance__facts">
                <div><span>Strength</span><strong>20 mg</strong></div><div><span>Form</span><strong>Hard gelatin capsule</strong></div><div><span>Color</span><strong>Green and off-white</strong></div><div><span>Imprint</span><strong>E · 91</strong></div>
              </div>
              <p>This is one labeled manufacturer presentation. Fluoxetine products can have different colors, shapes, and imprints. Confirm the imprint and original packaging rather than relying on color.</p>
              <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9b8d8da5-8c06-0942-e053-2995a90aa2c9" target="_blank" rel="noreferrer">View the source label on DailyMed ↗</a>
            </section>
          ) : (
            null
          )}

          {hasReviewedCard && <section className="drug-study-card" aria-labelledby="study-card-title">
            <div className="drug-study-card__mechanism">
              <div>
                <h2 id="study-card-title">Mechanism</h2>
                <p>{drug.mechanism}</p>
              </div>
            </div>

            <div className="drug-study-card__grid">
              {studySections.filter((section) => drug[section.key]?.length).map((section) => (
                <section className={`drug-study-card__section drug-study-card__section--${section.key}`} key={section.key}>
                  <div className="drug-study-card__section-title">
                    <h3>{section.label}</h3>
                  </div>
                  <ul>
                    {drug[section.key].map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </section>
              ))}
            </div>
          </section>}

          <aside className="drug-profile-safety">
            <p>Educational reference only. Verify the specific product and current prescribing information before applying clinical details.</p>
            <a href={`https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=${encodeURIComponent(drug.generic)}`} target="_blank" rel="noreferrer">Review current DailyMed labels ↗</a>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}

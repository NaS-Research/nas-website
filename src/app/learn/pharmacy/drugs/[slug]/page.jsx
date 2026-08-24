import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { featuredDrugs, getCoreDrug } from "@/data/drugLibrary";

export function generateStaticParams() {
  return featuredDrugs.map((drug) => ({ slug: drug.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const drug = getCoreDrug(slug);
  if (!drug?.brand) return {};
  return {
    title: `${drug.generic.replace(/\b\w/g, (letter) => letter.toUpperCase())} | NaS Drug Library`,
    description: `Study ${drug.generic}, including its drug class, dosage forms, product appearance context, and official medication references.`,
    alternates: { canonical: `/learn/pharmacy/drugs/${drug.slug}` },
  };
}

function titleCase(value) {
  return value.replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export default async function DrugProfilePage({ params }) {
  const { slug } = await params;
  const drug = getCoreDrug(slug);
  if (!drug?.brand) notFound();
  const isFluoxetine = drug.generic === "fluoxetine";

  return (
    <div className="nas-page drug-profile-page">
      <main>
        <header className="nas-shell drug-profile-hero">
          <Link href="/learn/pharmacy/drugs" className="learning-back">← Drug library</Link>
          <div className="drug-profile-hero__grid">
            <div><p className="nas-kicker">Medication profile</p><h1>{titleCase(drug.generic)}</h1></div>
            <div><span>Common brand reference</span><strong>{drug.brand}</strong><p>{drug.className}</p></div>
          </div>
        </header>

        <div className="nas-shell drug-profile-layout">
          <section className="drug-profile-facts" aria-labelledby="profile-overview">
            <p className="nas-section-label">At a glance</p>
            <h2 id="profile-overview">Place the medication before memorizing it.</h2>
            <dl>
              <div><dt>Generic name</dt><dd>{titleCase(drug.generic)}</dd></div>
              <div><dt>Common brand reference</dt><dd>{drug.brand}</dd></div>
              <div><dt>Pharmacologic class</dt><dd>{drug.className}</dd></div>
              <div><dt>Learning system</dt><dd>{drug.system}</dd></div>
              <div><dt>Dosage-form context</dt><dd>{drug.form}</dd></div>
            </dl>
          </section>

          {isFluoxetine ? (
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
            <section className="drug-official-records">
              <p className="nas-section-label">Current records</p><h2>Verify the product, strength, and manufacturer.</h2>
              <p>Drug appearance and supplied dosage forms vary across labeled products. Use the current official records when studying a specific product.</p>
              <a href={`https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=${encodeURIComponent(drug.generic)}`} target="_blank" rel="noreferrer">Search official DailyMed labels ↗</a>
            </section>
          )}

          <aside className="drug-profile-safety">
            <strong>Educational use</strong><p>This profile supports study and navigation. It is not a pill-identification service and does not replace current prescribing information or professional judgment.</p>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}

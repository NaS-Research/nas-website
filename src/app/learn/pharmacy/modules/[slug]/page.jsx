import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import PharmacyAssessment from "@/components/learn/PharmacyAssessment";
import { getPharmacyModule, pharmacyModules } from "@/data/pharmacyModules";
import { getPharmacyStudyContent } from "@/data/pharmacyStudyContent";

export function generateStaticParams() {
  return pharmacyModules.map((module) => ({ slug: module.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const module = getPharmacyModule(slug);
  if (!module) return {};
  return {
    title: `${module.title} | NaS Learn`,
    description: module.description,
    alternates: { canonical: `/learn/pharmacy/modules/${module.slug}` },
  };
}

export default async function PharmacyModulePage({ params }) {
  const { slug } = await params;
  const module = getPharmacyModule(slug);
  if (!module) notFound();

  const questions = module.submodules.map((submodule) => ({
    ...submodule.check,
    id: `${module.slug}-${submodule.slug}`,
  }));

  const currentIndex = pharmacyModules.findIndex((item) => item.slug === module.slug);
  const previous = pharmacyModules[currentIndex - 1];
  const next = pharmacyModules[currentIndex + 1];

  return (
    <div className="nas-page pharmacy-module-page">
      <header className="pharmacy-module-hero">
        <div className="nas-shell">
          <Link href="/learn/pharmacy#curriculum" className="learning-back">← Pharmacy curriculum</Link>
          <div className="pharmacy-module-hero__meta"><span>Module {module.number}</span><span>{module.submodules.length} submodules</span><span>{module.source}</span></div>
          <h1>{module.title}</h1>
          <p>{module.description}</p>
          <div className="pharmacy-module-hero__outcomes">
            {module.outcomes.map((outcome, index) => <div key={outcome}><span>{String(index + 1).padStart(2, "0")}</span><p>{outcome}</p></div>)}
          </div>
        </div>
      </header>

      <main className="nas-shell pharmacy-module-layout">
        <aside className="pharmacy-module-nav" aria-label="Module contents">
          <p>In this module</p>
          <nav>{module.submodules.map((submodule) => <a href={`#${submodule.slug}`} key={submodule.slug}>{submodule.title}</a>)}</nav>
          <a className="pharmacy-module-nav__test" href="#module-test">Module test ↓</a>
        </aside>

        <article className="pharmacy-module-content">
          {module.submodules.map((submodule, index) => (
            <section className="pharmacy-submodule" id={submodule.slug} key={submodule.slug}>
              {(() => {
                const study = getPharmacyStudyContent(submodule.slug);
                return <>
              <div className="pharmacy-submodule__number">{module.number}.{String(index + 1).padStart(2, "0")}</div>
              <p className="nas-section-label">Submodule</p>
              <h2>{submodule.title}</h2>
              <p className="pharmacy-submodule__summary">{submodule.summary}</p>
              <div className="pharmacy-submodule__concepts">
                <span>What to learn</span>
                <ul>{submodule.concepts.map((concept) => <li key={concept}>{concept}</li>)}</ul>
              </div>
              {study && <div className="pharmacy-submodule__study">
                <div className="pharmacy-submodule__study-heading">
                  <span>High-yield study notes</span>
                  <p>{study.sourceTopics.join(" · ")}</p>
                </div>
                <div className="pharmacy-submodule__study-grid">
                  {study.mustKnow.map((point, pointIndex) => <article key={point}><span>{String(pointIndex + 1).padStart(2, "0")}</span><p>{point}</p></article>)}
                </div>
                <aside className="pharmacy-submodule__exam-focus">
                  <span>NAPLEX focus</span>
                  <ul>{study.examFocus.map((point) => <li key={point}>{point}</li>)}</ul>
                </aside>
              </div>}
              <aside className="pharmacy-submodule__application"><span>Clinical lens</span><p>{submodule.application}</p></aside>
              {submodule.href && <Link className="pharmacy-submodule__guide" href={submodule.href}>Open the full study guide <span aria-hidden="true">↗</span></Link>}
                </>;
              })()}
            </section>
          ))}

          <section className="pharmacy-module-test" id="module-test">
            <p className="nas-section-label">Module test</p>
            <h2>Check the connections.</h2>
            <p>Answer one question from each submodule. Submit the full set to reveal the reasoning.</p>
            <PharmacyAssessment questions={questions} compact />
          </section>

          <nav className="pharmacy-module-sequence" aria-label="Module sequence">
            {previous ? <Link href={`/learn/pharmacy/modules/${previous.slug}`}><span>Previous</span><strong>{previous.title}</strong></Link> : <span />}
            {next ? <Link href={`/learn/pharmacy/modules/${next.slug}`}><span>Next</span><strong>{next.title}</strong></Link> : <Link href="/learn/pharmacy/review"><span>Next</span><strong>Final review</strong></Link>}
          </nav>
        </article>
      </main>
      <Footer />
    </div>
  );
}

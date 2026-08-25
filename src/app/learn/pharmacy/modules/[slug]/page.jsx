import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import PharmacyAssessment from "@/components/learn/PharmacyAssessment";
import FluidElectrolyteVisual from "@/components/learn/FluidElectrolyteVisual";
import AcidBaseVisual from "@/components/learn/AcidBaseVisual";
import CalciumPhosphorusVisual from "@/components/learn/CalciumPhosphorusVisual";
import EnteralNutritionVisual from "@/components/learn/EnteralNutritionVisual";
import ParenteralNutritionVisual from "@/components/learn/ParenteralNutritionVisual";
import ParenteralNutritionCalculationVisual from "@/components/learn/ParenteralNutritionCalculationVisual";
import PediatricParenteralNutritionVisual from "@/components/learn/PediatricParenteralNutritionVisual";
import AutonomicNervousSystemVisual from "@/components/learn/AutonomicNervousSystemVisual";
import CholinergicAgonistsVisual from "@/components/learn/CholinergicAgonistsVisual";
import AntimuscarinicVisual from "@/components/learn/AntimuscarinicVisual";
import CholinergicMedicinalChemistryVisual from "@/components/learn/CholinergicMedicinalChemistryVisual";
import AnticholinergicMedicinalChemistryVisual from "@/components/learn/AnticholinergicMedicinalChemistryVisual";
import CholinergicToxicologyVisual from "@/components/learn/CholinergicToxicologyVisual";
import AdrenergicAgonistsVisual from "@/components/learn/AdrenergicAgonistsVisual";
import AdrenergicAntagonistsVisual from "@/components/learn/AdrenergicAntagonistsVisual";
import AdrenergicMedicinalChemistryVisual from "@/components/learn/AdrenergicMedicinalChemistryVisual";
import { getPharmacyModule, pharmacyModules } from "@/data/pharmacyModules";
import { getPharmacyStudyContent } from "@/data/pharmacyStudyContent";

const calciumVisualTypes = ["mineral-regulation", "calcium-fractions", "hypocalcemia-response", "hypercalcemia-response", "phosphate-balance", "ckd-mbd"];
const enteralVisualTypes = ["enteral-decision", "access-route", "delivery-prescription", "formula-selection", "medication-administration", "monitoring-complications"];
const parenteralVisualTypes = ["pn-decision", "venous-access", "macronutrient-design", "micronutrient-balance", "compounding-safety", "monitoring-transition"];
const parenteralCalculationVisualTypes = ["pn-calc-foundations", "pn-calc-protein-energy", "pn-calc-dextrose", "pn-calc-lipid", "pn-calc-stock", "pn-calc-audit"];
const pediatricParenteralVisualTypes = ["peds-pn-decision", "peds-pn-glucose", "peds-pn-macros", "peds-pn-micros", "peds-pn-safety", "peds-pn-audit"];
const autonomicVisualTypes = ["ans-architecture", "ans-transmitter-map", "ans-receptor-signaling", "ans-cholinergic-cycle", "ans-adrenergic-cycle", "ans-reflex-integration"];
const cholinergicVisualTypes = ["chol-classification", "chol-direct-agonists", "chol-clinical-selection", "chol-peripheral-inhibitors", "chol-central-inhibitors", "chol-safety"];
const antimuscarinicVisualTypes = ["antimuscarinic-mechanism", "antimuscarinic-burden", "antimuscarinic-bladder", "antimuscarinic-airway", "antimuscarinic-applications", "antimuscarinic-safety"];
const cholinergicMedicinalChemistryVisualTypes = ["medchem-choline-pharmacophore", "medchem-choline-esters", "medchem-direct-agonists", "medchem-ache-binding", "medchem-ache-access", "medchem-design-integration"];
const anticholinergicMedicinalChemistryVisualTypes = ["antichol-medchem-pharmacophore", "antichol-medchem-tropanes", "antichol-medchem-access", "antichol-medchem-duration", "antichol-medchem-bladder", "antichol-medchem-integration"];
const cholinergicToxicologyVisualTypes = ["tox-exposure-pathway", "tox-syndrome-domains", "tox-decontamination", "tox-atropine", "tox-oxime", "tox-postacute"];
const adrenergicAgonistVisualTypes = ["adr-receptor-map", "adr-transmitter-actions", "adr-vasopressors", "adr-beta2", "adr-alpha-applications", "adr-safety"];
const adrenergicAntagonistVisualTypes = ["adr-antagonist-occupancy", "adr-alpha-blockers", "adr-beta-diversity", "adr-cardiac-selection", "adr-antagonist-safety", "adr-antagonist-toxicity"];
const adrenergicMedicinalChemistryVisualTypes = ["adr-medchem-pharmacophore", "adr-medchem-catechol", "adr-medchem-amine", "adr-medchem-stereo", "adr-medchem-beta-blockers", "adr-medchem-alpha-blockers"];

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

  const embeddedQuestions = module.submodules.map((submodule) => ({
    ...submodule.check,
    id: `${module.slug}-${submodule.slug}`,
  }));
  const questions = module.questionBank || embeddedQuestions;

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
              {submodule.visual && !submodule.visual.startsWith("acid-") && !calciumVisualTypes.includes(submodule.visual) && !enteralVisualTypes.includes(submodule.visual) && !parenteralVisualTypes.includes(submodule.visual) && !parenteralCalculationVisualTypes.includes(submodule.visual) && !pediatricParenteralVisualTypes.includes(submodule.visual) && !autonomicVisualTypes.includes(submodule.visual) && !cholinergicVisualTypes.includes(submodule.visual) && !antimuscarinicVisualTypes.includes(submodule.visual) && !cholinergicMedicinalChemistryVisualTypes.includes(submodule.visual) && !anticholinergicMedicinalChemistryVisualTypes.includes(submodule.visual) && !cholinergicToxicologyVisualTypes.includes(submodule.visual) && !adrenergicAgonistVisualTypes.includes(submodule.visual) && !adrenergicAntagonistVisualTypes.includes(submodule.visual) && !adrenergicMedicinalChemistryVisualTypes.includes(submodule.visual) && <FluidElectrolyteVisual type={submodule.visual} />}
              {submodule.visual?.startsWith("acid-") && <AcidBaseVisual type={submodule.visual} />}
              {calciumVisualTypes.includes(submodule.visual) && <CalciumPhosphorusVisual type={submodule.visual} />}
              {enteralVisualTypes.includes(submodule.visual) && <EnteralNutritionVisual type={submodule.visual} />}
              {parenteralVisualTypes.includes(submodule.visual) && <ParenteralNutritionVisual type={submodule.visual} />}
              {parenteralCalculationVisualTypes.includes(submodule.visual) && <ParenteralNutritionCalculationVisual type={submodule.visual} />}
              {pediatricParenteralVisualTypes.includes(submodule.visual) && <PediatricParenteralNutritionVisual type={submodule.visual} />}
              {autonomicVisualTypes.includes(submodule.visual) && <AutonomicNervousSystemVisual type={submodule.visual} />}
              {cholinergicVisualTypes.includes(submodule.visual) && <CholinergicAgonistsVisual type={submodule.visual} />}
              {antimuscarinicVisualTypes.includes(submodule.visual) && <AntimuscarinicVisual type={submodule.visual} />}
              {cholinergicMedicinalChemistryVisualTypes.includes(submodule.visual) && <CholinergicMedicinalChemistryVisual type={submodule.visual} />}
              {anticholinergicMedicinalChemistryVisualTypes.includes(submodule.visual) && <AnticholinergicMedicinalChemistryVisual type={submodule.visual} />}
              {cholinergicToxicologyVisualTypes.includes(submodule.visual) && <CholinergicToxicologyVisual type={submodule.visual} />}
              {adrenergicAgonistVisualTypes.includes(submodule.visual) && <AdrenergicAgonistsVisual type={submodule.visual} />}
              {adrenergicAntagonistVisualTypes.includes(submodule.visual) && <AdrenergicAntagonistsVisual type={submodule.visual} />}
              {adrenergicMedicinalChemistryVisualTypes.includes(submodule.visual) && <AdrenergicMedicinalChemistryVisual type={submodule.visual} />}
              {submodule.lesson && <div className="pharmacy-submodule__lesson">
                {submodule.lesson.map((section) => <section key={section.heading}>
                  <h3>{section.heading}</h3>
                  <p>{section.body}</p>
                </section>)}
                {submodule.keyPoints && <aside>
                  <span>Decision points</span>
                  <ul>{submodule.keyPoints.map((point) => <li key={point}>{point}</li>)}</ul>
                </aside>}
              </div>}
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
              {submodule.lesson && <div className="pharmacy-submodule__check">
                <p className="nas-section-label">Quick check</p>
                <PharmacyAssessment questions={[{ ...submodule.check, id: `${module.slug}-${submodule.slug}-check` }]} compact moduleId={`${module.slug}:${submodule.slug}`} />
              </div>}
                </>;
              })()}
            </section>
          ))}

          <section className="pharmacy-module-test" id="module-test">
            <p className="nas-section-label">Module test</p>
            <h2>Check the connections.</h2>
            <p>{module.questionBank ? `Each attempt draws 10 questions from the complete ${module.questionBank.length} question bank.` : "Answer one question from each submodule. Submit the full set to reveal the reasoning."}</p>
            <PharmacyAssessment questions={questions} compact moduleId={module.slug} questionCount={module.questionBank ? 10 : questions.length} randomize={Boolean(module.questionBank)} />
          </section>

          {module.references && <section className="pharmacy-module-references" aria-labelledby="module-references-title">
            <p className="nas-section-label">References</p>
            <h2 id="module-references-title">Current clinical foundation.</h2>
            <p>Lecture material was synthesized with the following contemporary guidance. Verify local policy and current guidance before applying clinical information.</p>
            <ol>{module.references.map((reference) => <li key={reference.href}><a href={reference.href} target="_blank" rel="noreferrer">{reference.label}<span aria-hidden="true">↗</span></a></li>)}</ol>
          </section>}

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

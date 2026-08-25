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
import DiureticPharmacologyVisual from "@/components/learn/DiureticPharmacologyVisual";
import DiureticMedicinalChemistryVisual from "@/components/learn/DiureticMedicinalChemistryVisual";
import GlaucomaPharmacotherapyVisual from "@/components/learn/GlaucomaPharmacotherapyVisual";
import HypertensionFoundationsVisual from "@/components/learn/HypertensionFoundationsVisual";
import ResistantSecondaryHypertensionVisual from "@/components/learn/ResistantSecondaryHypertensionVisual";
import HypertensiveEmergenciesVisual from "@/components/learn/HypertensiveEmergenciesVisual";
import AntihypertensiveMedicinalChemistryVisual from "@/components/learn/AntihypertensiveMedicinalChemistryVisual";
import DyslipidemiaRiskVisual from "@/components/learn/DyslipidemiaRiskVisual";
import LipidLoweringPharmacologyVisual from "@/components/learn/LipidLoweringPharmacologyVisual";
import DyslipidemiaTherapeuticsVisual from "@/components/learn/DyslipidemiaTherapeuticsVisual";
import ChronicCoronaryDiseaseVisual from "@/components/learn/ChronicCoronaryDiseaseVisual";
import AcuteCoronarySyndromesVisual from "@/components/learn/AcuteCoronarySyndromesVisual";
import AntiplateletPharmacologyVisual from "@/components/learn/AntiplateletPharmacologyVisual";
import CoagulationAnticoagulantVisual from "@/components/learn/CoagulationAnticoagulantVisual";
import VenousThromboembolismVisual from "@/components/learn/VenousThromboembolismVisual";
import WarfarinManagementVisual from "@/components/learn/WarfarinManagementVisual";
import DirectOralAnticoagulantsVisual from "@/components/learn/DirectOralAnticoagulantsVisual";
import ParenteralAnticoagulantsVisual from "@/components/learn/ParenteralAnticoagulantsVisual";
import EcgInterpretationVisual from "@/components/learn/EcgInterpretationVisual";
import ArrhythmiaPathophysiologyVisual from "@/components/learn/ArrhythmiaPathophysiologyVisual";
import AtrialArrhythmiasVisual from "@/components/learn/AtrialArrhythmiasVisual";
import VentricularArrhythmiasVisual from "@/components/learn/VentricularArrhythmiasVisual";
import AntiarrhythmicPharmacologyVisual from "@/components/learn/AntiarrhythmicPharmacologyVisual";
import HeartFailurePathophysiologyVisual from "@/components/learn/HeartFailurePathophysiologyVisual";
import ChronicHeartFailureVisual from "@/components/learn/ChronicHeartFailureVisual";
import AcuteDecompensatedHeartFailureVisual from "@/components/learn/AcuteDecompensatedHeartFailureVisual";
import HeartFailureMedicinalChemistryVisual from "@/components/learn/HeartFailureMedicinalChemistryVisual";
import PeripheralArterialDiseaseVisual from "@/components/learn/PeripheralArterialDiseaseVisual";
import AcuteIschemicStrokeVisual from "@/components/learn/AcuteIschemicStrokeVisual";
import SecondaryStrokePreventionVisual from "@/components/learn/SecondaryStrokePreventionVisual";
import AcuteKidneyInjuryVisual from "@/components/learn/AcuteKidneyInjuryVisual";
import ChronicKidneyDiseaseVisual from "@/components/learn/ChronicKidneyDiseaseVisual";
import CkdComplicationsVisual from "@/components/learn/CkdComplicationsVisual";
import RenalReplacementTherapyVisual from "@/components/learn/RenalReplacementTherapyVisual";
import AllergicRhinitisVisual from "@/components/learn/AllergicRhinitisVisual";
import AsthmaVisual from "@/components/learn/AsthmaVisual";
import ChronicObstructivePulmonaryDiseaseVisual from "@/components/learn/ChronicObstructivePulmonaryDiseaseVisual";
import PulmonaryArterialHypertensionVisual from "@/components/learn/PulmonaryArterialHypertensionVisual";
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
const diureticPharmacologyVisualTypes = ["diuretic-nephron-map", "diuretic-loop", "diuretic-thiazide", "diuretic-potassium", "diuretic-other", "diuretic-integration"];
const diureticMedicinalChemistryVisualTypes = ["diuretic-medchem-ca", "diuretic-medchem-loop", "diuretic-medchem-thiazide", "diuretic-medchem-mra", "diuretic-medchem-enac", "diuretic-medchem-integration"];
const glaucomaPharmacotherapyVisualTypes = ["glaucoma-flow-map", "glaucoma-prostaglandins", "glaucoma-production", "glaucoma-outflow", "glaucoma-selection", "glaucoma-technique"];
const hypertensionFoundationsVisualTypes = ["htn-measurement", "htn-risk-goal", "htn-lifestyle", "htn-first-line", "htn-combination", "htn-monitoring"];
const resistantSecondaryHypertensionVisualTypes = ["resistant-confirmation", "resistant-contributors", "secondary-screening", "primary-aldosteronism", "secondary-causes", "resistant-treatment"];
const hypertensiveEmergenciesVisualTypes = ["emergency-triage", "emergency-physiology", "emergency-neurologic", "emergency-cardiovascular", "emergency-special", "emergency-transition"];
const antihypertensiveMedicinalChemistryVisualTypes = ["htn-medchem-ace", "htn-medchem-arb", "htn-medchem-ccb", "htn-medchem-central", "htn-medchem-vasodilator", "htn-medchem-integration"];
const dyslipidemiaRiskVisualTypes = ["lipoprotein-transport", "atherogenic-burden", "triglyceride-remnants", "inherited-secondary", "risk-reclassification", "screening-lifecycle"];
const lipidLoweringPharmacologyVisualTypes = ["lipid-statin-pathway", "lipid-absorption-bile", "lipid-pcsk9", "lipid-acl", "lipid-triglyceride", "lipid-rare"];
const dyslipidemiaTherapeuticsVisualTypes = ["dyslipidemia-goal-map", "dyslipidemia-primary", "dyslipidemia-secondary", "dyslipidemia-triglycerides", "dyslipidemia-familial", "dyslipidemia-implementation"];
const chronicCoronaryDiseaseVisualTypes = ["ccd-disease-spectrum", "ccd-prevention", "ccd-antithrombotic", "ccd-angina", "ccd-testing-revascularization", "ccd-follow-up"];
const acuteCoronarySyndromesVisualTypes = ["acs-rupture-thrombosis", "acs-diagnostic-path", "acs-antithrombotic", "acs-reperfusion", "acs-pci-shock", "acs-discharge"];
const antiplateletPharmacologyVisualTypes = ["antiplatelet-platelet-cycle", "antiplatelet-aspirin", "antiplatelet-p2y12", "antiplatelet-iv-agents", "antiplatelet-variability", "antiplatelet-bleeding"];
const coagulationAnticoagulantVisualTypes = ["coagulation-hemostasis", "coagulation-targets", "coagulation-laboratory", "coagulation-selection", "coagulation-transitions", "coagulation-bleeding-hit"];
const venousThromboembolismVisualTypes = ["vte-risk-formation", "vte-dvt-diagnosis", "vte-pe-categories", "vte-initial-treatment", "vte-duration-special", "vte-follow-up"];
const warfarinManagementVisualTypes = ["warfarin-vitamin-k", "warfarin-initiation", "warfarin-inr", "warfarin-interactions", "warfarin-reversal", "warfarin-longitudinal"];
const directOralAnticoagulantsVisualTypes = ["doac-targets", "doac-factor-xa", "doac-dabigatran", "doac-selection", "doac-procedures", "doac-bleeding"];
const parenteralAnticoagulantsVisualTypes = ["parenteral-target-map", "parenteral-ufh", "parenteral-lmwh", "parenteral-fondaparinux", "parenteral-dti", "parenteral-critical-safety"];
const ecgInterpretationVisualTypes = ["ecg-signal-system", "ecg-rate-rhythm", "ecg-intervals-axis", "ecg-conduction", "ecg-ischemia-electrolytes", "ecg-emergency-workflow"];
const arrhythmiaPathophysiologyVisualTypes = ["arrhythmia-cell-electrophysiology", "arrhythmia-automaticity", "arrhythmia-triggered-activity", "arrhythmia-reentry", "arrhythmia-substrate-triggers", "arrhythmia-mechanism-treatment"];
const atrialArrhythmiasVisualTypes = ["atrial-arrhythmia-map", "atrial-af-framework", "atrial-rate-rhythm", "atrial-stroke-prevention", "atrial-svt-circuits", "atrial-special-safety"];
const ventricularArrhythmiasVisualTypes = ["ventricular-risk-map", "ventricular-monomorphic", "ventricular-polymorphic", "ventricular-arrest-storm", "ventricular-inherited", "ventricular-prevention"];
const antiarrhythmicPharmacologyVisualTypes = ["antiarrhythmic-framework", "antiarrhythmic-sodium", "antiarrhythmic-potassium", "antiarrhythmic-multichannel", "antiarrhythmic-selection", "antiarrhythmic-monitoring"];
const heartFailurePathophysiologyVisualTypes = ["hf-definition-stages", "hf-pump-mechanics", "hf-neurohormonal", "hf-congestion-cardiorenal", "hf-phenotypes", "hf-diagnostic-trajectory"];
const chronicHeartFailureVisualTypes = ["hf-treatment-pillars", "hf-ras-mra", "hf-beta-rate", "hf-sglt2-diuresis", "hf-additional-therapy", "hf-phenotype-implementation"];
const acuteDecompensatedHeartFailureVisualTypes = ["adhf-assessment", "adhf-decongestion", "adhf-cardiorenal", "adhf-vasoactive", "adhf-shock", "adhf-transition"];
const heartFailureMedicinalChemistryVisualTypes = ["hf-medchem-ras", "hf-medchem-arni", "hf-medchem-beta", "hf-medchem-mra", "hf-medchem-renal", "hf-medchem-vasodilator", "hf-medchem-integrated"];
const peripheralArterialDiseaseVisualTypes = ["pad-spectrum", "pad-diagnosis", "pad-risk-therapy", "pad-function", "pad-revascularization", "pad-limb-emergency"];
const acuteIschemicStrokeVisualTypes = ["ais-system", "ais-diagnosis", "ais-thrombolysis", "ais-thrombectomy", "ais-support", "ais-transition"];
const secondaryStrokePreventionVisualTypes = ["ssp-mechanism", "ssp-antithrombotic", "ssp-atherosclerosis", "ssp-cardioembolic", "ssp-special", "ssp-lifelong"];
const acuteKidneyInjuryVisualTypes = ["aki-detect", "aki-cause", "aki-hemodynamic", "aki-drugs", "aki-complications", "aki-recovery"];
const chronicKidneyDiseaseVisualTypes = ["ckd-definition", "ckd-cga", "ckd-risk", "ckd-foundations", "ckd-therapy", "ckd-stewardship"];
const ckdComplicationsVisualTypes = ["ckdc-surveillance", "ckdc-anemia", "ckdc-mbd", "ckdc-electrolytes", "ckdc-volume", "ckdc-advanced"];
const renalReplacementTherapyVisualTypes = ["rrt-choice", "rrt-mechanics", "rrt-hd", "rrt-pd", "rrt-safety", "rrt-longitudinal"];
const allergicRhinitisVisualTypes = ["ar-phenotype", "ar-immunology", "ar-technique", "ar-therapy", "ar-safety", "ar-immunotherapy"];
const asthmaVisualTypes = ["asthma-diagnosis", "asthma-risk", "asthma-pharmacology", "asthma-strategy", "asthma-severe", "asthma-acute"];
const chronicObstructivePulmonaryDiseaseVisualTypes = ["copd-diagnosis", "copd-assessment", "copd-pharmacology", "copd-strategy", "copd-nonpharmacologic", "copd-acute"];
const pulmonaryArterialHypertensionVisualTypes = ["pah-hemodynamics", "pah-diagnosis", "pah-risk", "pah-pharmacology", "pah-strategy", "pah-special"];

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
              {submodule.visual && !submodule.visual.startsWith("acid-") && !calciumVisualTypes.includes(submodule.visual) && !enteralVisualTypes.includes(submodule.visual) && !parenteralVisualTypes.includes(submodule.visual) && !parenteralCalculationVisualTypes.includes(submodule.visual) && !pediatricParenteralVisualTypes.includes(submodule.visual) && !autonomicVisualTypes.includes(submodule.visual) && !cholinergicVisualTypes.includes(submodule.visual) && !antimuscarinicVisualTypes.includes(submodule.visual) && !cholinergicMedicinalChemistryVisualTypes.includes(submodule.visual) && !anticholinergicMedicinalChemistryVisualTypes.includes(submodule.visual) && !cholinergicToxicologyVisualTypes.includes(submodule.visual) && !adrenergicAgonistVisualTypes.includes(submodule.visual) && !adrenergicAntagonistVisualTypes.includes(submodule.visual) && !adrenergicMedicinalChemistryVisualTypes.includes(submodule.visual) && !diureticPharmacologyVisualTypes.includes(submodule.visual) && !diureticMedicinalChemistryVisualTypes.includes(submodule.visual) && !glaucomaPharmacotherapyVisualTypes.includes(submodule.visual) && !hypertensionFoundationsVisualTypes.includes(submodule.visual) && !resistantSecondaryHypertensionVisualTypes.includes(submodule.visual) && !hypertensiveEmergenciesVisualTypes.includes(submodule.visual) && !antihypertensiveMedicinalChemistryVisualTypes.includes(submodule.visual) && !dyslipidemiaRiskVisualTypes.includes(submodule.visual) && !lipidLoweringPharmacologyVisualTypes.includes(submodule.visual) && !dyslipidemiaTherapeuticsVisualTypes.includes(submodule.visual) && !chronicCoronaryDiseaseVisualTypes.includes(submodule.visual) && !acuteCoronarySyndromesVisualTypes.includes(submodule.visual) && !antiplateletPharmacologyVisualTypes.includes(submodule.visual) && !coagulationAnticoagulantVisualTypes.includes(submodule.visual) && !venousThromboembolismVisualTypes.includes(submodule.visual) && !warfarinManagementVisualTypes.includes(submodule.visual) && !directOralAnticoagulantsVisualTypes.includes(submodule.visual) && !parenteralAnticoagulantsVisualTypes.includes(submodule.visual) && !ecgInterpretationVisualTypes.includes(submodule.visual) && !arrhythmiaPathophysiologyVisualTypes.includes(submodule.visual) && !atrialArrhythmiasVisualTypes.includes(submodule.visual) && !ventricularArrhythmiasVisualTypes.includes(submodule.visual) && !antiarrhythmicPharmacologyVisualTypes.includes(submodule.visual) && !heartFailurePathophysiologyVisualTypes.includes(submodule.visual) && <FluidElectrolyteVisual type={submodule.visual} />}
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
              {diureticPharmacologyVisualTypes.includes(submodule.visual) && <DiureticPharmacologyVisual type={submodule.visual} />}
              {diureticMedicinalChemistryVisualTypes.includes(submodule.visual) && <DiureticMedicinalChemistryVisual type={submodule.visual} />}
              {glaucomaPharmacotherapyVisualTypes.includes(submodule.visual) && <GlaucomaPharmacotherapyVisual type={submodule.visual} />}
              {hypertensionFoundationsVisualTypes.includes(submodule.visual) && <HypertensionFoundationsVisual type={submodule.visual} />}
              {resistantSecondaryHypertensionVisualTypes.includes(submodule.visual) && <ResistantSecondaryHypertensionVisual type={submodule.visual} />}
              {hypertensiveEmergenciesVisualTypes.includes(submodule.visual) && <HypertensiveEmergenciesVisual type={submodule.visual} />}
              {antihypertensiveMedicinalChemistryVisualTypes.includes(submodule.visual) && <AntihypertensiveMedicinalChemistryVisual type={submodule.visual} />}
              {dyslipidemiaRiskVisualTypes.includes(submodule.visual) && <DyslipidemiaRiskVisual type={submodule.visual} />}
              {lipidLoweringPharmacologyVisualTypes.includes(submodule.visual) && <LipidLoweringPharmacologyVisual type={submodule.visual} />}
              {dyslipidemiaTherapeuticsVisualTypes.includes(submodule.visual) && <DyslipidemiaTherapeuticsVisual type={submodule.visual} />}
              {chronicCoronaryDiseaseVisualTypes.includes(submodule.visual) && <ChronicCoronaryDiseaseVisual type={submodule.visual} />}
              {acuteCoronarySyndromesVisualTypes.includes(submodule.visual) && <AcuteCoronarySyndromesVisual type={submodule.visual} />}
              {antiplateletPharmacologyVisualTypes.includes(submodule.visual) && <AntiplateletPharmacologyVisual type={submodule.visual} />}
              {coagulationAnticoagulantVisualTypes.includes(submodule.visual) && <CoagulationAnticoagulantVisual type={submodule.visual} />}
              {venousThromboembolismVisualTypes.includes(submodule.visual) && <VenousThromboembolismVisual type={submodule.visual} />}
              {warfarinManagementVisualTypes.includes(submodule.visual) && <WarfarinManagementVisual type={submodule.visual} />}
              {directOralAnticoagulantsVisualTypes.includes(submodule.visual) && <DirectOralAnticoagulantsVisual type={submodule.visual} />}
              {parenteralAnticoagulantsVisualTypes.includes(submodule.visual) && <ParenteralAnticoagulantsVisual type={submodule.visual} />}
              {ecgInterpretationVisualTypes.includes(submodule.visual) && <EcgInterpretationVisual type={submodule.visual} />}
              {arrhythmiaPathophysiologyVisualTypes.includes(submodule.visual) && <ArrhythmiaPathophysiologyVisual type={submodule.visual} />}
              {atrialArrhythmiasVisualTypes.includes(submodule.visual) && <AtrialArrhythmiasVisual type={submodule.visual} />}
              {ventricularArrhythmiasVisualTypes.includes(submodule.visual) && <VentricularArrhythmiasVisual type={submodule.visual} />}
              {antiarrhythmicPharmacologyVisualTypes.includes(submodule.visual) && <AntiarrhythmicPharmacologyVisual type={submodule.visual} />}
              {heartFailurePathophysiologyVisualTypes.includes(submodule.visual) && <HeartFailurePathophysiologyVisual type={submodule.visual} />}
              {chronicHeartFailureVisualTypes.includes(submodule.visual) && <ChronicHeartFailureVisual type={submodule.visual} />}
              {acuteDecompensatedHeartFailureVisualTypes.includes(submodule.visual) && <AcuteDecompensatedHeartFailureVisual type={submodule.visual} />}
              {heartFailureMedicinalChemistryVisualTypes.includes(submodule.visual) && <HeartFailureMedicinalChemistryVisual type={submodule.visual} />}
              {peripheralArterialDiseaseVisualTypes.includes(submodule.visual) && <PeripheralArterialDiseaseVisual type={submodule.visual} />}
              {acuteIschemicStrokeVisualTypes.includes(submodule.visual) && <AcuteIschemicStrokeVisual type={submodule.visual} />}
              {secondaryStrokePreventionVisualTypes.includes(submodule.visual) && <SecondaryStrokePreventionVisual type={submodule.visual} />}
              {acuteKidneyInjuryVisualTypes.includes(submodule.visual) && <AcuteKidneyInjuryVisual type={submodule.visual} />}
              {chronicKidneyDiseaseVisualTypes.includes(submodule.visual) && <ChronicKidneyDiseaseVisual type={submodule.visual} />}
              {ckdComplicationsVisualTypes.includes(submodule.visual) && <CkdComplicationsVisual type={submodule.visual} />}
              {renalReplacementTherapyVisualTypes.includes(submodule.visual) && <RenalReplacementTherapyVisual type={submodule.visual} />}
              {allergicRhinitisVisualTypes.includes(submodule.visual) && <AllergicRhinitisVisual type={submodule.visual} />}
              {asthmaVisualTypes.includes(submodule.visual) && <AsthmaVisual type={submodule.visual} />}
              {chronicObstructivePulmonaryDiseaseVisualTypes.includes(submodule.visual) && <ChronicObstructivePulmonaryDiseaseVisual type={submodule.visual} />}
              {pulmonaryArterialHypertensionVisualTypes.includes(submodule.visual) && <PulmonaryArterialHypertensionVisual type={submodule.visual} />}
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

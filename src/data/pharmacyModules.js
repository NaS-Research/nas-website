import { nutritionScreeningAssessmentModule } from "@/data/modules/nutritionScreeningAssessment";
import { fluidElectrolyteTherapyModule } from "@/data/modules/fluidElectrolyteTherapy";
import { acidBaseInterpretationModule } from "@/data/modules/acidBaseInterpretation";
import { calciumPhosphorusHomeostasisModule } from "@/data/modules/calciumPhosphorusHomeostasis";
import { enteralNutritionModule } from "@/data/modules/enteralNutrition";
import { parenteralNutritionModule } from "@/data/modules/parenteralNutrition";
import { parenteralNutritionCalculationsModule } from "@/data/modules/parenteralNutritionCalculations";
import { pediatricParenteralNutritionModule } from "@/data/modules/pediatricParenteralNutrition";
import { autonomicNervousSystemFoundationsModule } from "@/data/modules/autonomicNervousSystemFoundations";
import { cholinergicAgonistsInhibitorsModule } from "@/data/modules/cholinergicAgonistsInhibitors";
import { antimuscarinicPharmacologyModule } from "@/data/modules/antimuscarinicPharmacology";
import { cholinergicMedicinalChemistryModule } from "@/data/modules/cholinergicMedicinalChemistry";
import { anticholinergicMedicinalChemistryModule } from "@/data/modules/anticholinergicMedicinalChemistry";
import { cholinergicToxicologyModule } from "@/data/modules/cholinergicToxicology";
import { adrenergicAgonistsModule } from "@/data/modules/adrenergicAgonists";
import { adrenergicAntagonistsModule } from "@/data/modules/adrenergicAntagonists";
import { adrenergicMedicinalChemistryModule } from "@/data/modules/adrenergicMedicinalChemistry";
import { diureticPharmacologyModule } from "@/data/modules/diureticPharmacology";
import { diureticMedicinalChemistryModule } from "@/data/modules/diureticMedicinalChemistry";
import { glaucomaPharmacotherapyModule } from "@/data/modules/glaucomaPharmacotherapy";
import { hypertensionFoundationsModule } from "@/data/modules/hypertensionFoundations";
import { resistantSecondaryHypertensionModule } from "@/data/modules/resistantSecondaryHypertension";
import { hypertensiveEmergenciesModule } from "@/data/modules/hypertensiveEmergencies";
import { antihypertensiveMedicinalChemistryModule } from "@/data/modules/antihypertensiveMedicinalChemistry";
import { dyslipidemiaRiskModule } from "@/data/modules/dyslipidemiaRisk";
import { lipidLoweringPharmacologyModule } from "@/data/modules/lipidLoweringPharmacology";
import { dyslipidemiaTherapeuticsModule } from "@/data/modules/dyslipidemiaTherapeutics";
import { chronicCoronaryDiseaseModule } from "@/data/modules/chronicCoronaryDisease";
import { acuteCoronarySyndromesModule } from "@/data/modules/acuteCoronarySyndromes";
import { antiplateletPharmacologyModule } from "@/data/modules/antiplateletPharmacology";
import { coagulationAnticoagulantPharmacologyModule } from "@/data/modules/coagulationAnticoagulantPharmacology";
import { venousThromboembolismModule } from "@/data/modules/venousThromboembolism";
import { warfarinManagementModule } from "@/data/modules/warfarinManagement";
import { directOralAnticoagulantsModule } from "@/data/modules/directOralAnticoagulants";
import { parenteralAnticoagulantsModule } from "@/data/modules/parenteralAnticoagulants";
import { ecgInterpretationModule } from "@/data/modules/ecgInterpretation";
import { arrhythmiaPathophysiologyModule } from "@/data/modules/arrhythmiaPathophysiology";
import { atrialArrhythmiasModule } from "@/data/modules/atrialArrhythmias";
import { ventricularArrhythmiasModule } from "@/data/modules/ventricularArrhythmias";
import { antiarrhythmicPharmacologyModule } from "@/data/modules/antiarrhythmicPharmacology";
import { heartFailurePathophysiologyModule } from "@/data/modules/heartFailurePathophysiology";
import { chronicHeartFailureModule } from "@/data/modules/chronicHeartFailure";
import { acuteDecompensatedHeartFailureModule } from "@/data/modules/acuteDecompensatedHeartFailure";
import { heartFailureMedicinalChemistryModule } from "@/data/modules/heartFailureMedicinalChemistry";
import { peripheralArterialDiseaseModule } from "@/data/modules/peripheralArterialDisease";
import { acuteIschemicStrokeModule } from "@/data/modules/acuteIschemicStroke";
import { secondaryStrokePreventionModule } from "@/data/modules/secondaryStrokePrevention";
import { acuteKidneyInjuryModule } from "@/data/modules/acuteKidneyInjury";
import { chronicKidneyDiseaseModule } from "@/data/modules/chronicKidneyDisease";
import { ckdComplicationsModule } from "@/data/modules/ckdComplications";
import { renalReplacementTherapyModule } from "@/data/modules/renalReplacementTherapy";
import { allergicRhinitisModule } from "@/data/modules/allergicRhinitis";
import { asthmaModule } from "@/data/modules/asthma";
import { chronicObstructivePulmonaryDiseaseModule } from "@/data/modules/chronicObstructivePulmonaryDisease";
import { pulmonaryArterialHypertensionModule } from "@/data/modules/pulmonaryArterialHypertension";
import { cysticFibrosisModule } from "@/data/modules/cysticFibrosis";
import { drugInducedPulmonaryDiseaseModule } from "@/data/modules/drugInducedPulmonaryDisease";
import { pituitaryPharmacologyModule } from "@/data/modules/pituitaryPharmacology";
import { diabetesPathophysiologyMonitoringModule } from "@/data/modules/diabetesPathophysiologyMonitoring";
import { noninsulinDiabetesPharmacotherapyModule } from "@/data/modules/noninsulinDiabetesPharmacotherapy";
import { insulinTherapyModule } from "@/data/modules/insulinTherapy";
import { diabeticKetoacidosisModule } from "@/data/modules/diabeticKetoacidosis";
import { hyperosmolarHyperglycemicStateModule } from "@/data/modules/hyperosmolarHyperglycemicState";
import { thyroidDisordersModule } from "@/data/modules/thyroidDisorders";
import { thyroidMedicinalChemistryModule } from "@/data/modules/thyroidMedicinalChemistry";
import { adrenalPharmacologyModule } from "@/data/modules/adrenalPharmacology";
import { cushingSyndromeModule } from "@/data/modules/cushingSyndrome";
import { adrenalInsufficiencyModule } from "@/data/modules/adrenalInsufficiency";
import { gonadalHormonePharmacologyModule } from "@/data/modules/gonadalHormonePharmacology";
import { gynecologicDisordersModule } from "@/data/modules/gynecologicDisorders";
import { infertilityOvulationInductionModule } from "@/data/modules/infertilityOvulationInduction";
import { contraceptivePharmacotherapyModule } from "@/data/modules/contraceptivePharmacotherapy";
import { pregnancyLactationPharmacotherapyModule } from "@/data/modules/pregnancyLactationPharmacotherapy";
import { menopausalHormoneTherapyModule } from "@/data/modules/menopausalHormoneTherapy";
import { benignProstaticHyperplasiaModule } from "@/data/modules/benignProstaticHyperplasia";
import { urinaryIncontinenceModule } from "@/data/modules/urinaryIncontinence";
import { sexualDysfunctionModule } from "@/data/modules/sexualDysfunction";
import { osteoporosisModule } from "@/data/modules/osteoporosis";
import { shockVasoactivePharmacotherapyModule } from "@/data/modules/shockVasoactivePharmacotherapy";
import { icuAnalgesiaSedationDeliriumModule } from "@/data/modules/icuAnalgesiaSedationDelirium";
import { perioperativeCriticalCarePharmacologyModule } from "@/data/modules/perioperativeCriticalCarePharmacology";
import { gastroesophagealRefluxDiseaseModule } from "@/data/modules/gastroesophagealRefluxDisease";
import { pepticUlcerDiseaseModule } from "@/data/modules/pepticUlcerDisease";
import { irritableBowelSyndromeModule } from "@/data/modules/irritableBowelSyndrome";
import { chronicIdiopathicConstipationModule } from "@/data/modules/chronicIdiopathicConstipation";
import { diarrheaAssessmentPharmacotherapyModule } from "@/data/modules/diarrheaAssessmentPharmacotherapy";
import { inflammatoryBowelDiseaseModule } from "@/data/modules/inflammatoryBowelDisease";
import { motionSicknessModule } from "@/data/modules/motionSickness";
import { medicationSafetyQualityModule } from "@/data/modules/medicationSafetyQuality";
import { infectionPreventionControlModule } from "@/data/modules/infectionPreventionControl";
import { drugAllergiesAdverseReactionsModule } from "@/data/modules/drugAllergiesAdverseReactions";
import { pharmacokineticsModule } from "@/data/modules/pharmacokinetics";
import { pharmacogenomicsModule } from "@/data/modules/pharmacogenomics";
import { dietarySupplementsComplementaryMedicineModule } from "@/data/modules/dietarySupplementsComplementaryMedicine";
import { toxicologyAntidotesModule } from "@/data/modules/toxicologyAntidotes";
import { tobaccoUseCessationModule } from "@/data/modules/tobaccoUseCessation";
import { systemicGlucocorticoidsModule } from "@/data/modules/systemicGlucocorticoids";
import { rheumatoidArthritisModule } from "@/data/modules/rheumatoidArthritis";
import { systemicLupusErythematosusModule } from "@/data/modules/systemicLupusErythematosus";
import { multipleSclerosisModule } from "@/data/modules/multipleSclerosis";
import { raynaudPhenomenonModule } from "@/data/modules/raynaudPhenomenon";
import { celiacDiseaseModule } from "@/data/modules/celiacDisease";
import { myastheniaGravisModule } from "@/data/modules/myastheniaGravis";
import { sjogrenDiseaseModule } from "@/data/modules/sjogrenDisease";
import { psoriasisModule } from "@/data/modules/psoriasis";
import { genitourinaryMedicinalChemistryModule } from "@/data/modules/genitourinaryMedicinalChemistry";
import { vaginitisVulvovaginalInfectionsModule } from "@/data/modules/vaginitisVulvovaginalInfections";
import { cervicitisPelvicInflammatoryDiseaseModule } from "@/data/modules/cervicitisPelvicInflammatoryDisease";
import { gynecologicOncologyModule } from "@/data/modules/gynecologicOncology";
import { pelvicOrganProlapseFistulaCareModule } from "@/data/modules/pelvicOrganProlapseFistulaCare";
import { genderAffirmingHormoneCareModule } from "@/data/modules/genderAffirmingHormoneCare";
import { immunoglobulinTherapyModule } from "@/data/modules/immunoglobulinTherapy";
import { anemiaModule } from "@/data/modules/anemia";
import { sickleCellDiseaseModule } from "@/data/modules/sickleCellDisease";
import { coughCommonColdModule } from "@/data/modules/coughCommonCold";
import { commonEyeConditionsModule } from "@/data/modules/commonEyeConditions";
import { commonEarConditionsModule } from "@/data/modules/commonEarConditions";
import { acneModule } from "@/data/modules/acne";
import { atopicDermatitisModule } from "@/data/modules/atopicDermatitis";
import { superficialFungalSkinInfectionsModule } from "@/data/modules/superficialFungalSkinInfections";
import { liceScabiesModule } from "@/data/modules/liceScabies";
import { minorWoundCareModule } from "@/data/modules/minorWoundCare";
import { animalHumanBitesModule } from "@/data/modules/animalHumanBites";
import { burnAssessmentInitialCareModule } from "@/data/modules/burnAssessmentInitialCare";
import { poisonPlantDermatitisModule } from "@/data/modules/poisonPlantDermatitis";
import { topicalCorticosteroidSafeUseModule } from "@/data/modules/topicalCorticosteroidSafeUse";
import { sunscreenPhotoprotectionModule } from "@/data/modules/sunscreenPhotoprotection";
import { herpesLabialisModule } from "@/data/modules/herpesLabialis";
import { seborrheicDermatitisModule } from "@/data/modules/seborrheicDermatitis";
import { alopeciaModule } from "@/data/modules/alopecia";
import { diaperDermatitisModule } from "@/data/modules/diaperDermatitis";
import { hyperhidrosisModule } from "@/data/modules/hyperhidrosis";
import { hemorrhoidsModule } from "@/data/modules/hemorrhoids";
import { pinwormInfectionModule } from "@/data/modules/pinwormInfection";
import { travelHealthPlanningModule } from "@/data/modules/travelHealthPlanning";
import { antimicrobialFoundationsStewardshipModule } from "@/data/modules/antimicrobialFoundationsStewardship";
import { betaLactamPharmacologyModule } from "@/data/modules/betaLactamPharmacology";
import { aminoglycosidePharmacologyModule } from "@/data/modules/aminoglycosidePharmacology";
import { fluoroquinolonePharmacologyModule } from "@/data/modules/fluoroquinolonePharmacology";
import { macrolidePharmacologyModule } from "@/data/modules/macrolidePharmacology";
import { tetracyclinePharmacologyModule } from "@/data/modules/tetracyclinePharmacology";
import { sulfonamideTrimethoprimPharmacologyModule } from "@/data/modules/sulfonamideTrimethoprimPharmacology";
import { vancomycinPharmacologyModule } from "@/data/modules/vancomycinPharmacology";
import { daptomycinPharmacologyModule } from "@/data/modules/daptomycinPharmacology";
import { linezolidTedizolidPharmacologyModule } from "@/data/modules/linezolidTedizolidPharmacology";
import { tigecyclinePharmacologyModule } from "@/data/modules/tigecyclinePharmacology";
import { polymyxinPharmacologyModule } from "@/data/modules/polymyxinPharmacology";
import { clindamycinPharmacologyModule } from "@/data/modules/clindamycinPharmacology";
import { nitroimidazolePharmacologyModule } from "@/data/modules/nitroimidazolePharmacology";
import { lefamulinPharmacologyModule } from "@/data/modules/lefamulinPharmacology";
import { fidaxomicinPharmacologyModule } from "@/data/modules/fidaxomicinPharmacology";
import { rifaximinPharmacologyModule } from "@/data/modules/rifaximinPharmacology";
import { fosfomycinPharmacologyModule } from "@/data/modules/fosfomycinPharmacology";
import { nitrofurantoinPharmacologyModule } from "@/data/modules/nitrofurantoinPharmacology";
import { mupirocinDecolonizationModule } from "@/data/modules/mupirocinDecolonization";
import { perioperativeAntimicrobialProphylaxisModule } from "@/data/modules/perioperativeAntimicrobialProphylaxis";
import { acuteBacterialMeningitisModule } from "@/data/modules/acuteBacterialMeningitis";
import { acuteOtitisMediaModule } from "@/data/modules/acuteOtitisMedia";
import { streptococcalPharyngitisModule } from "@/data/modules/streptococcalPharyngitis";
import { acuteBacterialRhinosinusitisModule } from "@/data/modules/acuteBacterialRhinosinusitis";
import { communityAcquiredPneumoniaAdultsModule } from "@/data/modules/communityAcquiredPneumoniaAdults";
import { hospitalVentilatorAssociatedPneumoniaModule } from "@/data/modules/hospitalVentilatorAssociatedPneumonia";
import { tuberculosisModule } from "@/data/modules/tuberculosis";
import { infectiveEndocarditisModule } from "@/data/modules/infectiveEndocarditis";
import { intraAbdominalInfectionsModule } from "@/data/modules/intraAbdominalInfections";
import { skinSoftTissueInfectionsModule } from "@/data/modules/skinSoftTissueInfections";
import { urinaryTractInfectionsModule } from "@/data/modules/urinaryTractInfections";
import { clostridioidesDifficileInfectionModule } from "@/data/modules/clostridioidesDifficileInfection";
import { travelersDiarrheaModule } from "@/data/modules/travelersDiarrhea";
import { syphilisModule } from "@/data/modules/syphilis";
import { gonococcalInfectionsModule } from "@/data/modules/gonococcalInfections";
import { chlamydialInfectionsModule } from "@/data/modules/chlamydialInfections";
import { genitalHerpesModule } from "@/data/modules/genitalHerpes";
import { anogenitalHpvWartsModule } from "@/data/modules/anogenitalHpvWarts";
import { rickettsialEhrlichialAnaplasmaModule } from "@/data/modules/rickettsialEhrlichialAnaplasma";
import { lymeDiseaseModule } from "@/data/modules/lymeDisease";
import { tularemiaModule } from "@/data/modules/tularemia";
import { systemicAntifungalFoundationsModule } from "@/data/modules/systemicAntifungalFoundations";
import { amphotericinFlucytosinePharmacologyModule } from "@/data/modules/amphotericinFlucytosinePharmacology";
import { triazoleAntifungalPharmacologyModule } from "@/data/modules/triazoleAntifungalPharmacology";
import { echinocandinPharmacologyModule } from "@/data/modules/echinocandinPharmacology";
import { terbinafineGriseofulvinPharmacologyModule } from "@/data/modules/terbinafineGriseofulvinPharmacology";
import { localOropharyngealAntifungalPharmacologyModule } from "@/data/modules/localOropharyngealAntifungalPharmacology";
import { influenzaAntiviralPharmacologyModule } from "@/data/modules/influenzaAntiviralPharmacology";
import { herpesSimplexVaricellaAntiviralPharmacologyModule } from "@/data/modules/herpesSimplexVaricellaAntiviralPharmacology";
import { cytomegalovirusPharmacotherapyModule } from "@/data/modules/cytomegalovirusPharmacotherapy";
import { pneumocystisJiroveciiPneumoniaModule } from "@/data/modules/pneumocystisJiroveciiPneumonia";
import { hivFoundationsCareModule } from "@/data/modules/hivFoundationsCare";
import { nucleosideReverseTranscriptaseInhibitorModule } from "@/data/modules/nucleosideReverseTranscriptaseInhibitors";
import { nonNucleosideReverseTranscriptaseInhibitorModule } from "@/data/modules/nonNucleosideReverseTranscriptaseInhibitors";
import { hivProteaseInhibitorModule } from "@/data/modules/hivProteaseInhibitors";
import { hivEntryAttachmentInhibitorModule } from "@/data/modules/hivEntryAttachmentInhibitors";
import { integraseStrandTransferInhibitorModule } from "@/data/modules/integraseStrandTransferInhibitors";
import { hivPreventionPrepPepModule } from "@/data/modules/hivPreventionPrepPep";
import { disseminatedMacModule } from "@/data/modules/disseminatedMac";
import { toxoplasmaEncephalitisModule } from "@/data/modules/toxoplasmaEncephalitis";
import { cryptococcalMeningitisModule } from "@/data/modules/cryptococcalMeningitis";
import { histoplasmosisModule } from "@/data/modules/histoplasmosis";
import { mucosalEsophagealCandidiasisModule } from "@/data/modules/mucosalEsophagealCandidiasis";
import { coccidioidomycosisModule } from "@/data/modules/coccidioidomycosis";
import { blastomycosisModule } from "@/data/modules/blastomycosis";
import { aspergillosisModule } from "@/data/modules/aspergillosis";
import { mucormycosisModule } from "@/data/modules/mucormycosis";

const sources = {
  foundation: "Foundation",
  fall: "Early systems",
  spring: "Systems therapeutics",
  fallThree: "Integrated therapeutics",
  review: "Comprehensive review",
};

export const legacyPharmacyModules = [
  {
    slug: "drug-action-therapeutic-foundations",
    lessonCollectionSlug: "foundations",
    number: "01",
    title: "Drug Action and Therapeutic Foundations",
    source: sources.foundation,
    description: "Build the scientific and patient-care framework used throughout the rest of pharmacy.",
    topics: ["Drug action and kinetics", "Formulations and calculations", "Interactions and monitoring", "Patient-care workflow"],
    outcomes: [
      "Relate drug targets, exposure, and response.",
      "Recognize how dosage form and route change medication use.",
      "Identify the information required for a safe medication assessment.",
      "Communicate a defensible plan through counseling and documentation.",
    ],
    submodules: [
      {
        slug: "drug-action-and-exposure",
        title: "Drug Action, Exposure, and Response",
        summary: "Therapeutic decisions begin by connecting a drug target to the concentration that reaches it and the response that follows.",
        concepts: ["Receptors, enzymes, transporters, and ion channels", "Absorption, distribution, metabolism, and excretion", "Potency, efficacy, therapeutic window, and dose response", "Bioavailability, clearance, volume of distribution, and half-life"],
        application: "When a response changes, ask whether the cause is the target, the exposure, the patient's physiology, or the way the medicine is being used.",
        check: { question: "Which pharmacokinetic process most directly determines how quickly the body removes a drug from plasma?", choices: ["Clearance", "Potency", "Efficacy", "Receptor selectivity"], answer: 0, rationale: "Clearance describes the volume of plasma from which drug is removed per unit of time and is central to maintenance dosing." },
      },
      {
        slug: "formulations-routes-and-calculations",
        title: "Formulations, Routes, and Calculations",
        summary: "A drug product is an engineered delivery system. Route, dosage form, release design, concentration, and measurement all affect safe use.",
        concepts: ["Route versus dosage form", "Immediate, delayed, and extended release", "Concentrations, ratios, dilutions, and reconstitution", "Flow rates, isotonicity, pH, and buffers"],
        application: "Confirm the exact product and units before calculating. A mathematically correct answer can still be clinically wrong when the product, route, or concentration is misidentified.",
        href: "/learn/pharmacy/drug-formulations-and-routes",
        check: { question: "A liquid contains 250 mg in 5 mL. How many milliliters provide 500 mg?", choices: ["2.5 mL", "5 mL", "10 mL", "20 mL"], answer: 2, rationale: "The concentration is 50 mg/mL, so 500 mg requires 10 mL." },
      },
      {
        slug: "interactions-labs-and-monitoring",
        title: "Interactions, Labs, and Monitoring",
        summary: "Medication safety depends on recognizing what can change exposure or response and choosing measurements that reveal benefit or harm.",
        concepts: ["Pharmacodynamic and pharmacokinetic interactions", "CYP inhibition, induction, and transporters", "Baseline, efficacy, and toxicity monitoring", "Renal, hepatic, hematologic, and electrolyte data"],
        application: "A monitoring plan should state what to measure, why it matters, when to reassess, and what result would change the plan.",
        check: { question: "What usually happens when a strong enzyme inhibitor is added to a substrate primarily cleared by that enzyme?", choices: ["Substrate exposure may increase", "Substrate exposure always decreases", "The substrate becomes inactive immediately", "Renal clearance always doubles"], answer: 0, rationale: "Inhibition can reduce metabolism of the substrate and increase its exposure, although the clinical effect depends on the specific drugs." },
      },
      {
        slug: "patient-care-workflow",
        title: "Patient-Care Workflow",
        summary: "Medication histories, reconciliation, assessment, counseling, documentation, and order verification turn scientific knowledge into care.",
        concepts: ["Medication history and reconciliation", "Prescription and order verification", "SOAP notes and case presentation", "Adherence, teach-back, transitions, and social drivers"],
        application: "Separate facts from assumptions. Verify the medication list, identify the problem, assess its cause and significance, then document a specific plan and follow-up.",
        check: { question: "Which step best confirms that a patient can carry out device instructions at home?", choices: ["Provide a printed handout only", "Ask whether the instructions are clear", "Use teach-back with a return demonstration", "Repeat the brand name several times"], answer: 2, rationale: "Teach-back and return demonstration reveal whether the patient can perform the required steps." },
      },
      {
        slug: "evidence-pharmacogenomics-and-safety",
        title: "Evidence, Pharmacogenomics, and Safety",
        summary: "Evidence becomes useful when study results, patient factors, genetic variation, and medication-system risks are interpreted together.",
        concepts: ["Risk measures and confidence intervals", "Genotype, phenotype, and metabolizer status", "Clinical validity and actionability", "Medication errors, adverse reactions, and quality improvement"],
        application: "A genetic result should influence care only when the gene-drug relationship is clinically valid, actionable, and relevant to the patient in front of you.",
        check: { question: "Which resource type is most useful when translating a validated gene-drug result into a prescribing recommendation?", choices: ["A product advertisement", "A pharmacogenomic guideline", "A medication image", "A wholesale price list"], answer: 1, rationale: "Evidence-based pharmacogenomic guidelines connect genotype or phenotype results to clinical recommendations." },
      },
    ],
  },
  {
    slug: "nutrition-ans-cardiovascular-one",
    number: "02",
    title: "Nutrition, ANS, and Cardiovascular I",
    source: sources.fall,
    description: "Connect nutrition, fluid balance, autonomic signaling, vascular tone, and early cardiovascular therapeutics.",
    topics: ["Nutrition and electrolytes", "Enteral and parenteral support", "Cholinergic pharmacology", "Adrenergic and blood-pressure control"],
    outcomes: ["Assess basic fluid, electrolyte, and acid-base patterns.", "Compare enteral and parenteral nutrition goals.", "Predict effects of cholinergic and adrenergic drugs.", "Connect autonomic targets to cardiovascular response."],
    submodules: [
      {
        slug: "fluids-electrolytes-acid-base",
        title: "Fluids, Electrolytes, and Acid-Base Balance",
        summary: "Water, sodium, potassium, magnesium, calcium, phosphorus, and acid-base status are linked. Changes in one compartment can alter medications and organ function elsewhere.",
        concepts: ["Volume status and tonicity", "Sodium, potassium, and magnesium relationships", "Calcium, phosphorus, and albumin", "Anion gap and acid-base interpretation"],
        application: "Interpret the pattern before replacing a number. Consider symptoms, volume status, kidney function, medications, and the speed of change.",
        check: { question: "A low magnesium concentration can make replacement of which electrolyte more difficult?", choices: ["Potassium", "Chloride", "Bicarbonate", "Phosphate only"], answer: 0, rationale: "Magnesium depletion can promote renal potassium wasting and make hypokalemia harder to correct." },
      },
      {
        slug: "enteral-parenteral-nutrition",
        title: "Enteral and Parenteral Nutrition",
        summary: "Nutrition support requires a route, energy and protein goals, fluid and electrolyte planning, administration safety, and ongoing monitoring.",
        concepts: ["Enteral route selection and tolerance", "Parenteral macronutrients and electrolytes", "Access, compatibility, and infusion safety", "Glucose, triglyceride, liver, electrolyte, and refeeding monitoring"],
        application: "Use the gastrointestinal tract when it is functional and appropriate. Parenteral nutrition requires careful calculations and surveillance because nutrients enter systemic circulation directly.",
        check: { question: "Which route is generally preferred when the gastrointestinal tract is functional and can be used safely?", choices: ["Enteral nutrition", "Central parenteral nutrition", "Peripheral parenteral nutrition", "Intramuscular nutrition"], answer: 0, rationale: "Enteral nutrition is generally preferred when the gastrointestinal tract is functional and accessible." },
      },
      {
        slug: "cholinergic-pharmacology",
        title: "Cholinergic Pharmacology",
        summary: "Cholinergic drugs alter muscarinic or nicotinic signaling directly or change acetylcholine breakdown.",
        concepts: ["Muscarinic and nicotinic receptors", "Direct agonists and acetylcholinesterase inhibitors", "Antimuscarinic agents", "Cholinergic and anticholinergic toxicity patterns"],
        application: "Predict effects by locating the receptor and organ. Secretions, pupil size, heart rate, gastrointestinal motility, bladder function, and cognition provide useful clues.",
        check: { question: "Which finding is most consistent with antimuscarinic activity?", choices: ["Increased salivation", "Diarrhea", "Dry mouth and urinary retention", "Bradycardia with sweating"], answer: 2, rationale: "Muscarinic blockade commonly reduces secretions and can impair bladder emptying." },
      },
      {
        slug: "adrenergic-pharmacology",
        title: "Adrenergic Pharmacology",
        summary: "Adrenergic receptors coordinate vascular tone, heart rate, contractility, bronchodilation, and metabolic responses.",
        concepts: ["Alpha-1, alpha-2, beta-1, and beta-2 receptors", "Direct and indirect sympathomimetics", "Alpha and beta blockade", "Selectivity, dose, and patient-specific response"],
        application: "Start with receptor location, then predict the physiologic response. Selectivity can diminish as dose rises, and comorbid disease can change risk.",
        check: { question: "Stimulation of beta-1 receptors most directly increases which response?", choices: ["Bronchial smooth-muscle relaxation", "Heart rate and contractility", "Bladder contraction", "Gastrointestinal motility"], answer: 1, rationale: "Beta-1 receptors are prominent in the heart and increase rate and contractility when stimulated." },
      },
      {
        slug: "hypertension-diuretics-glaucoma",
        title: "Hypertension, Diuretics, and Glaucoma",
        summary: "Blood pressure and intraocular pressure can both be changed by altering fluid movement, autonomic tone, and local production or outflow pathways.",
        concepts: ["Blood-pressure assessment and treatment goals", "Diuretic sites along the nephron", "RAAS, calcium-channel, and adrenergic therapy", "Aqueous humor production and outflow"],
        application: "Choose therapy by matching the pathway to the patient's comorbidities, volume status, kidney function, electrolytes, and ability to use the product.",
        check: { question: "Which laboratory value requires close attention with many RAAS-inhibiting therapies?", choices: ["Serum potassium", "Hemoglobin A1C only", "Amylase only", "Uric acid only"], answer: 0, rationale: "RAAS inhibition can increase potassium and alter kidney function, so both are commonly monitored." },
      },
    ],
  },
  {
    slug: "cardiovascular-two-renal",
    number: "03",
    title: "Cardiovascular II and Renal",
    source: sources.spring,
    description: "Advance into atherosclerotic disease, thrombosis, rhythm disorders, heart failure, stroke, and kidney disease.",
    topics: ["Lipids and coronary disease", "Anticoagulation and VTE", "Arrhythmias", "Heart failure, stroke, and renal disease"],
    outcomes: ["Connect cardiovascular pathophysiology to drug targets.", "Distinguish antiplatelet and anticoagulant roles.", "Recognize rhythm and heart-failure treatment priorities.", "Adjust assessment when kidney function changes."],
    submodules: [
      {
        slug: "dyslipidemia-coronary-disease-acs",
        title: "Dyslipidemia, Coronary Disease, and ACS",
        summary: "Atherosclerotic risk reduction and acute coronary treatment require different time horizons but share lipid, platelet, ischemia, and prevention pathways.",
        concepts: ["Lipoproteins and atherosclerotic risk", "Statins and nonstatin therapy", "Stable coronary disease", "Acute coronary syndrome and secondary prevention"],
        application: "Separate immediate ischemic stabilization from long-term risk reduction, then verify adherence, intensity, interactions, and adverse-effect monitoring.",
        check: { question: "Which medication class is foundational for lowering LDL cholesterol and reducing atherosclerotic cardiovascular risk?", choices: ["Statins", "Loop diuretics", "Proton pump inhibitors", "Benzodiazepines"], answer: 0, rationale: "Statins reduce LDL cholesterol and cardiovascular events and remain foundational therapy for many patients." },
      },
      {
        slug: "anticoagulation-vte",
        title: "Anticoagulation and Venous Thromboembolism",
        summary: "Anticoagulant selection depends on the indication, timing, renal and hepatic function, bleeding risk, interactions, adherence, and route.",
        concepts: ["Coagulation pathway targets", "Heparins, warfarin, and direct oral anticoagulants", "DVT and pulmonary embolism treatment phases", "Bleeding assessment, reversal, and counseling"],
        application: "Do not treat anticoagulants as interchangeable. Confirm the indication, dose criteria, organ function, interacting drugs, duration, and what happens if therapy is interrupted.",
        check: { question: "What is the most important first step when reviewing an anticoagulant dose?", choices: ["Confirm the exact indication and patient factors", "Compare tablet colors", "Assume every indication uses the same dose", "Stop therapy before asking questions"], answer: 0, rationale: "Anticoagulant dosing and duration vary by indication and patient-specific characteristics." },
      },
      {
        slug: "arrhythmias-and-ecg",
        title: "Arrhythmias and ECG Reasoning",
        summary: "Rhythm management combines electrical conduction, symptom severity, stroke risk, ventricular response, and drug-specific proarrhythmic risk.",
        concepts: ["Rate, rhythm, intervals, and conduction", "Atrial and ventricular arrhythmias", "Rate control, rhythm control, and anticoagulation", "QT prolongation and antiarrhythmic monitoring"],
        application: "Treat the patient before the tracing. Determine stability, identify the rhythm, review reversible causes and medications, then select the safest objective.",
        check: { question: "Why is the QT interval important when reviewing several antiarrhythmic drugs?", choices: ["Excessive prolongation can increase torsades risk", "It directly measures kidney filtration", "It determines LDL concentration", "It confirms medication adherence"], answer: 0, rationale: "Some drugs prolong repolarization, and excessive QT prolongation can increase the risk of torsades de pointes." },
      },
      {
        slug: "heart-failure-and-pad",
        title: "Heart Failure and Peripheral Arterial Disease",
        summary: "Heart failure treatment addresses congestion, maladaptive neurohormonal signaling, symptoms, hospitalization, and survival, while peripheral arterial disease requires vascular risk reduction and functional assessment.",
        concepts: ["Ejection fraction and clinical phenotype", "Guideline-directed chronic therapy", "Acute decompensation and diuresis", "Peripheral arterial disease and vascular prevention"],
        application: "Separate therapies that improve symptoms from those that improve outcomes, and reassess volume, blood pressure, kidney function, potassium, and adherence after changes.",
        check: { question: "Which finding most strongly suggests congestion in heart failure?", choices: ["New edema with orthopnea", "Isolated dry skin", "Stable vision", "Improved exercise tolerance"], answer: 0, rationale: "Edema and orthopnea are common findings associated with volume overload and congestion." },
      },
      {
        slug: "stroke-aki-ckd",
        title: "Stroke, Acute Kidney Injury, and Chronic Kidney Disease",
        summary: "Neurologic and renal emergencies require rapid recognition, while long-term prevention depends on identifying causes, complications, and medication-related risk.",
        concepts: ["Ischemic versus hemorrhagic stroke", "Acute stroke timelines and secondary prevention", "AKI recognition and nephrotoxic exposure", "CKD staging, complications, and renal replacement therapy"],
        application: "A change in serum creatinine is a signal, not a diagnosis. Review timing, urine output, hemodynamics, nephrotoxins, obstruction, and baseline kidney function.",
        check: { question: "Which medication review is most urgent when acute kidney injury develops?", choices: ["Identify nephrotoxins and renally cleared drugs", "Check only topical moisturizers", "Ignore recent medication changes", "Continue every dose unchanged automatically"], answer: 0, rationale: "AKI can increase drug exposure and may be caused or worsened by nephrotoxic or hemodynamically active medications." },
      },
    ],
  },
  {
    slug: "endocrine-pulmonary-genitourinary",
    number: "04",
    title: "Endocrine, Pulmonary, and Genitourinary",
    source: sources.spring,
    description: "Study respiratory disease, glucose and hormone regulation, reproductive care, genitourinary disorders, and bone health.",
    topics: ["Asthma and COPD", "Diabetes and endocrine disease", "Reproductive therapeutics", "Genitourinary and bone health"],
    outcomes: ["Match inhaled therapy to disease control and technique.", "Distinguish chronic diabetes care from hyperglycemic emergencies.", "Connect endocrine feedback loops to treatment.", "Counsel safely across reproductive, urinary, and bone-health therapies."],
    submodules: [
      {
        slug: "asthma-copd-allergic-rhinitis",
        title: "Asthma, COPD, and Allergic Rhinitis",
        summary: "Respiratory treatment depends on disease pattern, severity, exacerbation history, device technique, adherence, and exposure control.",
        concepts: ["Airway inflammation and bronchoconstriction", "Reliever and controller roles", "COPD symptom and exacerbation assessment", "Rhinitis therapy and inhaler technique"],
        application: "Before escalating therapy, confirm the diagnosis, adherence, device technique, triggers, smoking exposure, and whether symptoms reflect another condition.",
        check: { question: "What should be reassessed whenever inhaled therapy appears ineffective?", choices: ["Device technique and adherence", "Hair color", "Blood type", "Shoe size"], answer: 0, rationale: "Incorrect technique and poor adherence are common reasons inhaled therapy fails to produce the expected benefit." },
      },
      {
        slug: "diabetes-and-hyperglycemic-emergencies",
        title: "Diabetes and Hyperglycemic Emergencies",
        summary: "Diabetes care integrates glucose patterns, comorbidities, organ function, hypoglycemia risk, medication access, nutrition, devices, and patient goals.",
        concepts: ["Type 1 and type 2 diabetes", "Insulin and noninsulin therapies", "Glucose monitoring and injection devices", "Diabetic ketoacidosis and hyperosmolar crisis"],
        application: "Treat the pattern, not a single glucose value. Separate fasting, post-meal, overnight, and illness-related changes before altering therapy.",
        check: { question: "Which feature is especially characteristic of diabetic ketoacidosis?", choices: ["Ketone production with metabolic acidosis", "Isolated hypertension", "Low LDL alone", "Chronic cough"], answer: 0, rationale: "DKA is defined by hyperglycemia or diabetes with ketosis and metabolic acidosis." },
      },
      {
        slug: "thyroid-pituitary-adrenal",
        title: "Thyroid, Pituitary, and Adrenal Disorders",
        summary: "Endocrine feedback loops explain why laboratory values, replacement, suppression, and tapering decisions must be interpreted together.",
        concepts: ["Hypothalamic and pituitary feedback", "Hypothyroidism and hyperthyroidism", "Adrenal insufficiency and glucocorticoid excess", "Systemic corticosteroid benefits and risks"],
        application: "Identify whether the problem is hormone deficiency, excess, resistance, or disrupted regulation before interpreting a single laboratory result.",
        check: { question: "Why can long-term systemic corticosteroids require gradual dose reduction?", choices: ["To allow recovery of the hypothalamic-pituitary-adrenal axis", "To increase tablet color consistency", "To prevent all drug interactions", "To raise LDL rapidly"], answer: 0, rationale: "Chronic exogenous corticosteroids can suppress endogenous adrenal function, making abrupt withdrawal unsafe for some patients." },
      },
      {
        slug: "reproductive-pregnancy-lactation",
        title: "Reproductive Health, Pregnancy, and Lactation",
        summary: "Therapy across contraception, infertility, pregnancy, lactation, menopause, and hormone use requires shared decision-making and product-specific risk assessment.",
        concepts: ["Contraceptive methods and contraindications", "Infertility treatment principles", "Pregnancy and lactation risk assessment", "Menopause and hormone therapy"],
        application: "Avoid reducing reproductive counseling to a single risk category. Consider the condition, gestational timing, exposure, available evidence, alternatives, and patient priorities.",
        check: { question: "What is essential before recommending a hormonal contraceptive?", choices: ["Review contraindications and patient-specific risks", "Choose only by package color", "Assume smoking status is irrelevant", "Ignore interacting medications"], answer: 0, rationale: "Cardiovascular, thrombotic, reproductive, and interaction risks can affect contraceptive selection." },
      },
      {
        slug: "gu-bone-and-device-counseling",
        title: "Genitourinary Care, Bone Health, and Devices",
        summary: "BPH, incontinence, sexual dysfunction, osteoporosis, and injectable devices require both pharmacology and precise counseling.",
        concepts: ["BPH and lower urinary tract symptoms", "Urinary incontinence", "Erectile dysfunction", "Osteoporosis, calcium, vitamin D, and administration devices"],
        application: "Match the treatment to the symptom pattern and functional goal, then confirm administration technique, precautions, and monitoring through teach-back.",
        check: { question: "Which counseling method is best after demonstrating an injectable pen?", choices: ["Ask for a return demonstration", "Provide no opportunity for questions", "Discuss only the brand logo", "Assume prior device experience is identical"], answer: 0, rationale: "A return demonstration helps verify that the patient can prepare, administer, and dispose of the product correctly." },
      },
    ],
  },
  {
    slug: "gastrointestinal-immunology-cns-one",
    number: "05",
    title: "Gastrointestinal, Immunology, and CNS I",
    source: sources.fallThree,
    description: "Move from gastrointestinal disease into immune regulation and foundational psychiatric therapeutics.",
    topics: ["GERD and peptic ulcer disease", "Bowel disorders", "Immunology and transplant", "Mood and psychotic disorders"],
    outcomes: ["Distinguish acid, motility, and inflammatory GI disorders.", "Recognize immune suppression and monitoring priorities.", "Compare foundational psychiatric drug classes.", "Integrate efficacy, safety, adherence, and patient experience."],
    submodules: [
      {
        slug: "gerd-pud-and-upper-gi",
        title: "GERD, Peptic Ulcer Disease, and Upper GI Care",
        summary: "Upper gastrointestinal treatment depends on symptom pattern, alarm features, acid exposure, ulcer cause, medication injury, and adherence to administration instructions.",
        concepts: ["GERD assessment and alarm symptoms", "Antacids, H2 blockers, and proton pump inhibitors", "Peptic ulcer disease and Helicobacter pylori", "NSAID-related injury and deprescribing"],
        application: "Do not treat persistent symptoms indefinitely without reassessing the diagnosis, administration timing, adherence, interacting medicines, and alarm features.",
        check: { question: "Which finding is an alarm feature that warrants further evaluation rather than routine self-treatment of reflux?", choices: ["Progressive difficulty swallowing", "Occasional symptoms after a large meal", "Mild transient belching", "Preference for spicy food"], answer: 0, rationale: "Progressive dysphagia can signal significant disease and warrants prompt evaluation." },
      },
      {
        slug: "bowel-and-inflammatory-gi-disorders",
        title: "Bowel and Inflammatory GI Disorders",
        summary: "Constipation, diarrhea, IBS, and inflammatory bowel disease can look similar while requiring different assessments and therapeutic goals.",
        concepts: ["Constipation and diarrhea evaluation", "Irritable bowel syndrome", "Inflammatory bowel disease", "Hydration, electrolytes, and medication causes"],
        application: "Classify the symptom pattern, duration, severity, red flags, medication causes, and inflammatory features before choosing treatment.",
        check: { question: "Which symptom should prompt evaluation rather than uncomplicated self-care for diarrhea?", choices: ["Blood in the stool", "A single loose stool", "Mild symptoms after dietary change", "Brief symptoms without fever"], answer: 0, rationale: "Bloody stool can indicate invasive infection, inflammation, ischemia, or another serious cause." },
      },
      {
        slug: "immune-inflammatory-transplant",
        title: "Immune, Inflammatory, and Transplant Pharmacology",
        summary: "Immune therapies alter signaling, cell activation, cytokines, or proliferation and require balancing disease control against infection, malignancy, and organ toxicity.",
        concepts: ["Innate and adaptive immunity", "Corticosteroids and conventional immunomodulators", "Biologic and targeted therapies", "Transplant immunosuppression and monitoring"],
        application: "Before and during immune-modifying therapy, assess infection risk, vaccination status, organ function, interactions, adherence, and the treatment-specific monitoring plan.",
        check: { question: "Why is infection screening important before many biologic immune therapies?", choices: ["Immunosuppression can reactivate or worsen infection", "Biologics always increase kidney filtration", "Screening determines tablet size", "It eliminates every adverse effect"], answer: 0, rationale: "Suppressing immune pathways can reactivate latent infection or increase susceptibility to new infection." },
      },
      {
        slug: "depression-anxiety-and-sleep",
        title: "Depression, Anxiety, and Sleep",
        summary: "Psychiatric treatment requires symptom, function, safety, time course, adherence, comorbidity, and patient preference to be considered together.",
        concepts: ["Depressive and anxiety disorders", "Antidepressant classes and onset", "Benzodiazepines and other anxiolytics", "Insomnia, activation, withdrawal, and suicidality monitoring"],
        application: "Set expectations about time to benefit, early adverse effects, adherence, discontinuation, and when worsening mood or agitation requires urgent help.",
        check: { question: "What is an important counseling point when beginning many antidepressants?", choices: ["Meaningful benefit may take several weeks", "Stop after the first dose if symptoms remain", "Double every missed dose", "They never interact with other drugs"], answer: 0, rationale: "Many antidepressants require consistent use over several weeks before the full therapeutic effect is evident." },
      },
      {
        slug: "psychosis-and-bipolar-disorder",
        title: "Psychosis and Bipolar Disorder",
        summary: "Antipsychotic and mood-stabilizing therapy balances acute symptom control, relapse prevention, metabolic and neurologic toxicity, and adherence.",
        concepts: ["Positive, negative, and cognitive symptoms", "Antipsychotic mechanisms and adverse effects", "Bipolar mood states and maintenance", "Movement, metabolic, cardiac, and blood monitoring"],
        application: "Monitor the adverse-effect domains that matter for the specific drug and patient rather than treating antipsychotics or mood stabilizers as one uniform class.",
        check: { question: "Which monitoring domain is important for many second-generation antipsychotics?", choices: ["Weight and metabolic parameters", "Only hearing acuity", "Only serum sodium in every patient", "No monitoring is needed"], answer: 0, rationale: "Many second-generation antipsychotics can affect weight, glucose, and lipids." },
      },
    ],
  },
  {
    slug: "cns-two-acute-care",
    number: "06",
    title: "CNS II and Acute Care",
    source: sources.review,
    description: "Extend CNS therapeutics into neurologic disease, pain, emergencies, pediatrics, and rapidly changing patients.",
    topics: ["Neurologic disorders", "Pain and migraine", "Acute and critical care", "Pediatrics and complex care"],
    outcomes: ["Compare major neurologic treatment goals.", "Assess pain therapy using benefit and harm.", "Prioritize stabilization in acute care.", "Recognize age and setting as drivers of medication risk."],
    submodules: [
      {
        slug: "seizures-parkinson-alzheimer",
        title: "Seizures, Parkinson Disease, and Alzheimer Disease",
        summary: "Neurologic treatment depends on the affected pathway, symptom pattern, disease progression, function, adverse effects, and the consequences of missed doses.",
        concepts: ["Seizure classification and antiseizure therapy", "Dopamine pathways in Parkinson disease", "Cognitive symptoms and dementia therapy", "Adherence, falls, mood, and withdrawal risk"],
        application: "Avoid abrupt changes to antiseizure therapy and distinguish medication adverse effects from progression of neurologic disease.",
        check: { question: "Why should many antiseizure medications not be stopped abruptly?", choices: ["Abrupt withdrawal can precipitate seizures", "They permanently stain the skin", "They always cause hypertension", "Stopping improves adherence"], answer: 0, rationale: "Abrupt withdrawal can increase seizure frequency or precipitate serious seizures." },
      },
      {
        slug: "pain-migraine-and-gout",
        title: "Pain, Migraine, and Gout",
        summary: "Pain management is a functional and safety problem, not only a numeric score. Acute and chronic syndromes require different tools and expectations.",
        concepts: ["Nociceptive and neuropathic pain", "Nonopioid and opioid therapy", "Migraine acute treatment and prevention", "Gout flares and urate lowering"],
        application: "Define the treatment goal, expected duration, functional outcome, organ constraints, interaction risk, and stopping plan before escalating therapy.",
        check: { question: "Which combination most increases concern for respiratory depression?", choices: ["An opioid with another CNS depressant", "A topical moisturizer with saline", "Calcium with vitamin D", "A statin with fiber"], answer: 0, rationale: "Opioids combined with other central nervous system depressants can produce additive sedation and respiratory depression." },
      },
      {
        slug: "acute-critical-care",
        title: "Acute and Critical Care",
        summary: "Acute care prioritizes immediate threats, rapidly changing physiology, route and onset, organ support, medication reconciliation, and frequent reassessment.",
        concepts: ["Shock and hemodynamic assessment", "Sedation, analgesia, and delirium", "Fluids, vasopressors, and emergency medications", "Medication safety during transitions and organ failure"],
        application: "Stabilize first, then repeatedly reassess whether the initial diagnosis, dose, route, organ function, and goals still fit the patient's current state.",
        check: { question: "What distinguishes acute-care medication management from a stable outpatient plan?", choices: ["Physiology and organ function can change rapidly", "Medication routes never matter", "Monitoring is less important", "Reassessment is unnecessary"], answer: 0, rationale: "Rapid physiologic changes can alter both the need for therapy and drug exposure, requiring frequent reassessment." },
      },
      {
        slug: "pediatrics-weight-and-special-populations",
        title: "Pediatrics, Weight, and Special Populations",
        summary: "Age, size, development, pregnancy, frailty, organ function, and access can alter dosing, formulation, response, and the feasibility of a plan.",
        concepts: ["Weight-based dosing and maximum doses", "Developmental pharmacology and formulations", "Obesity and weight-management therapy", "Frailty, swallowing, devices, and caregiver roles"],
        application: "Calculate with the correct weight and units, then check whether the result exceeds an appropriate maximum or depends on organ function and formulation limits.",
        check: { question: "After calculating a pediatric weight-based dose, what additional check is essential?", choices: ["Compare with the recommended maximum dose", "Ignore the formulation concentration", "Round without reviewing units", "Assume every child clears drugs like an adult"], answer: 0, rationale: "Weight-based calculations should be checked against maximum doses, organ function, indication, and available formulations." },
      },
    ],
  },
  {
    slug: "infectious-disease",
    number: "07",
    title: "Infectious Disease",
    source: sources.review,
    description: "Build antimicrobial decisions from organism, site, host, severity, resistance, exposure, and stewardship.",
    topics: ["Antimicrobial foundations", "Bacterial syndromes", "Fungal and opportunistic infection", "Stewardship"],
    outcomes: ["Relate antimicrobial class to spectrum and target.", "Select therapy using site and patient factors.", "Recognize toxicity and interaction patterns.", "Use cultures and clinical response to refine therapy."],
    submodules: [
      {
        slug: "antimicrobial-foundations",
        title: "Antimicrobial Foundations",
        summary: "Antimicrobial selection begins with likely organisms, site penetration, severity, host factors, local susceptibility, prior exposure, and allergy history.",
        concepts: ["Cell wall, protein, nucleic acid, and metabolic targets", "Spectrum, bactericidal activity, and resistance", "Cultures, susceptibility, and source control", "Renal dosing, interactions, and concentration monitoring"],
        application: "Start broad only when severity and uncertainty require it, then narrow when microbiology and clinical response provide better information.",
        check: { question: "What is the main purpose of de-escalating antimicrobial therapy after culture results?", choices: ["Use the narrowest effective therapy", "Increase unnecessary spectrum", "Avoid reviewing the diagnosis", "Prolong treatment automatically"], answer: 0, rationale: "De-escalation targets the identified organism while reducing unnecessary exposure and selection pressure." },
      },
      {
        slug: "bacterial-syndromes",
        title: "Bacterial Syndromes",
        summary: "Pneumonia, urinary, skin, abdominal, bloodstream, bone, and central nervous system infections differ in organisms, penetration, source control, and duration.",
        concepts: ["Community and healthcare exposure", "Site-specific likely pathogens", "Severity and source control", "Empiric, directed, and step-down therapy"],
        application: "Name the syndrome and severity before naming the antibiotic. Then incorporate cultures, organ function, allergies, recent antibiotics, and local resistance.",
        check: { question: "Which factor most directly changes the likely bacterial causes of an infection?", choices: ["Site of infection", "Tablet shape", "Patient's favorite color", "Medication bottle size"], answer: 0, rationale: "The site of infection strongly influences likely pathogens, penetration requirements, and treatment strategy." },
      },
      {
        slug: "fungal-opportunistic-infections",
        title: "Fungal and Opportunistic Infections",
        summary: "Fungal and opportunistic infections require attention to immune status, organism, site, drug penetration, interactions, and treatment-limiting toxicity.",
        concepts: ["Superficial versus invasive fungal disease", "Azoles, echinocandins, and polyenes", "Opportunistic infections by immune deficit", "Hepatic, renal, electrolyte, and interaction monitoring"],
        application: "Identify the immune defect and site of disease, then verify that the chosen agent reaches the site and can be tolerated with the patient's other therapies.",
        check: { question: "Why are medication-interaction reviews especially important with many azole antifungals?", choices: ["They can inhibit drug-metabolizing enzymes", "They eliminate every other medication", "They never reach systemic circulation", "They always lower all drug concentrations"], answer: 0, rationale: "Many azoles inhibit CYP enzymes and can meaningfully increase exposure to interacting drugs." },
      },
      {
        slug: "stewardship-immunization-travel",
        title: "Stewardship, Immunization, and Travel",
        summary: "Prevention and stewardship reduce infection burden by improving vaccine use, exposure planning, diagnostic precision, and antimicrobial duration.",
        concepts: ["Diagnostic stewardship", "Dose, route, duration, and de-escalation", "Routine and risk-based immunization", "Travel exposure, prophylaxis, and counseling"],
        application: "Use prevention first when possible. When antibiotics are needed, document the indication, expected duration, monitoring, and opportunities to narrow or stop.",
        check: { question: "Which element belongs in every antimicrobial time-out?", choices: ["Reassess indication, cultures, route, and duration", "Ignore clinical response", "Continue broad therapy indefinitely", "Avoid documenting a stop date"], answer: 0, rationale: "A structured reassessment helps determine whether therapy should continue, narrow, change route, or stop." },
      },
    ],
  },
  {
    slug: "virology-oncology-toxicology",
    number: "08",
    title: "Virology, Oncology, and Toxicology",
    source: sources.review,
    description: "Complete the sequence with antiviral therapy, cancer treatment, supportive care, poisoning, and antidote reasoning.",
    topics: ["Antiviral therapy", "HIV", "Oncology and supportive care", "Toxicology and antidotes"],
    outcomes: ["Recognize the goals and constraints of antiviral therapy.", "Connect cancer biology to treatment strategy.", "Anticipate treatment-related toxicity and supportive needs.", "Prioritize stabilization and toxidrome recognition in poisoning."],
    submodules: [
      {
        slug: "antiviral-therapy",
        title: "Antiviral Therapy",
        summary: "Antiviral therapy targets stages of viral replication and is shaped by timing, resistance, organ function, interactions, and the host immune response.",
        concepts: ["Viral entry, replication, protease, and polymerase targets", "Influenza and herpesvirus therapy", "Hepatitis treatment principles", "Timing, renal function, and interactions"],
        application: "Confirm the virus, disease phase, treatment window, organ function, interacting drugs, and whether the goal is treatment, suppression, or prophylaxis.",
        check: { question: "Why does timing matter for several acute antiviral treatments?", choices: ["Earlier treatment may provide greater benefit", "Viruses disappear after one hour", "Organ function never matters", "Resistance is impossible"], answer: 0, rationale: "For several acute viral illnesses, treatment benefit is greatest when started early in the disease course." },
      },
      {
        slug: "hiv-pharmacotherapy",
        title: "HIV Pharmacotherapy",
        summary: "HIV care uses combination therapy to achieve durable viral suppression, preserve immune function, prevent resistance, and reduce transmission.",
        concepts: ["Antiretroviral targets and combination therapy", "Viral load and CD4 monitoring", "Resistance, adherence, and interactions", "Prevention, prophylaxis, and continuity of therapy"],
        application: "Protect regimen continuity. Review the full combination, resistance history, organ function, interactions, and access before changing or interrupting therapy.",
        check: { question: "Why is consistent adherence especially important in HIV therapy?", choices: ["It supports viral suppression and reduces resistance risk", "It changes blood type", "It removes the need for monitoring", "It guarantees no adverse effects"], answer: 0, rationale: "Incomplete suppression can permit viral replication and selection of resistance." },
      },
      {
        slug: "oncology-and-supportive-care",
        title: "Oncology and Supportive Care",
        summary: "Cancer treatment combines disease biology, intent, regimen design, organ function, dose-limiting toxicity, supportive care, and patient goals.",
        concepts: ["Cytotoxic, targeted, hormonal, and immune therapy", "Curative, adjuvant, neoadjuvant, and palliative intent", "Myelosuppression, nausea, infection, and tumor lysis", "Body surface area, cycles, safe handling, and supportive care"],
        application: "Verify the diagnosis, protocol, treatment day, patient parameters, dose calculation, supportive medicines, and hold criteria before administration.",
        check: { question: "Which laboratory calculation helps estimate infection risk during myelosuppressive therapy?", choices: ["Absolute neutrophil count", "Anion gap only", "LDL ratio", "Corrected QT only"], answer: 0, rationale: "The absolute neutrophil count is used to assess neutropenia and infection risk." },
      },
      {
        slug: "toxicology-and-antidotes",
        title: "Toxicology and Antidotes",
        summary: "Poisoning management begins with stabilization, exposure history, toxidrome recognition, targeted testing, decontamination when appropriate, supportive care, and selective antidote use.",
        concepts: ["Airway, breathing, circulation, and glucose", "Cholinergic, anticholinergic, opioid, sympathomimetic, and sedative toxidromes", "Decontamination and enhanced elimination", "Common antidotes and monitoring"],
        application: "Do not delay stabilization while searching for the exact toxin. Use the clinical pattern, timing, formulation, co-exposures, and response to guide care.",
        check: { question: "What is the first priority in an unknown poisoning with depressed consciousness?", choices: ["Stabilize airway, breathing, and circulation", "Identify the tablet manufacturer", "Wait for every laboratory result", "Administer every available antidote"], answer: 0, rationale: "Initial stabilization takes priority because respiratory and cardiovascular failure can be immediately life-threatening." },
      },
    ],
  },
];

export function getPharmacyModule(slug) {
  return [...pharmacyModules, ...legacyPharmacyModules].find((module) => module.slug === slug);
}

const basePharmacyModules = [nutritionScreeningAssessmentModule, fluidElectrolyteTherapyModule, acidBaseInterpretationModule, calciumPhosphorusHomeostasisModule, enteralNutritionModule, parenteralNutritionModule, parenteralNutritionCalculationsModule, pediatricParenteralNutritionModule, autonomicNervousSystemFoundationsModule, cholinergicAgonistsInhibitorsModule, antimuscarinicPharmacologyModule, cholinergicMedicinalChemistryModule, anticholinergicMedicinalChemistryModule, cholinergicToxicologyModule, adrenergicAgonistsModule, adrenergicAntagonistsModule, adrenergicMedicinalChemistryModule, diureticPharmacologyModule, diureticMedicinalChemistryModule, glaucomaPharmacotherapyModule, hypertensionFoundationsModule, resistantSecondaryHypertensionModule, hypertensiveEmergenciesModule, antihypertensiveMedicinalChemistryModule, dyslipidemiaRiskModule, lipidLoweringPharmacologyModule, dyslipidemiaTherapeuticsModule, chronicCoronaryDiseaseModule, acuteCoronarySyndromesModule, antiplateletPharmacologyModule, coagulationAnticoagulantPharmacologyModule, venousThromboembolismModule, warfarinManagementModule, directOralAnticoagulantsModule, parenteralAnticoagulantsModule, ecgInterpretationModule, arrhythmiaPathophysiologyModule, atrialArrhythmiasModule, ventricularArrhythmiasModule, antiarrhythmicPharmacologyModule, heartFailurePathophysiologyModule, chronicHeartFailureModule, acuteDecompensatedHeartFailureModule, heartFailureMedicinalChemistryModule, peripheralArterialDiseaseModule, acuteIschemicStrokeModule, secondaryStrokePreventionModule, acuteKidneyInjuryModule, chronicKidneyDiseaseModule, ckdComplicationsModule, renalReplacementTherapyModule, allergicRhinitisModule, asthmaModule, chronicObstructivePulmonaryDiseaseModule, pulmonaryArterialHypertensionModule, cysticFibrosisModule, drugInducedPulmonaryDiseaseModule, pituitaryPharmacologyModule, diabetesPathophysiologyMonitoringModule, noninsulinDiabetesPharmacotherapyModule, insulinTherapyModule, diabeticKetoacidosisModule, hyperosmolarHyperglycemicStateModule, thyroidDisordersModule, thyroidMedicinalChemistryModule, adrenalPharmacologyModule, cushingSyndromeModule, adrenalInsufficiencyModule, gonadalHormonePharmacologyModule, gynecologicDisordersModule, infertilityOvulationInductionModule, contraceptivePharmacotherapyModule, pregnancyLactationPharmacotherapyModule, menopausalHormoneTherapyModule, benignProstaticHyperplasiaModule, urinaryIncontinenceModule, sexualDysfunctionModule, osteoporosisModule, shockVasoactivePharmacotherapyModule, icuAnalgesiaSedationDeliriumModule, perioperativeCriticalCarePharmacologyModule, gastroesophagealRefluxDiseaseModule, pepticUlcerDiseaseModule, irritableBowelSyndromeModule, chronicIdiopathicConstipationModule, diarrheaAssessmentPharmacotherapyModule, inflammatoryBowelDiseaseModule, motionSicknessModule, medicationSafetyQualityModule, infectionPreventionControlModule, drugAllergiesAdverseReactionsModule, pharmacokineticsModule, pharmacogenomicsModule, dietarySupplementsComplementaryMedicineModule, toxicologyAntidotesModule, tobaccoUseCessationModule, systemicGlucocorticoidsModule, rheumatoidArthritisModule, systemicLupusErythematosusModule, multipleSclerosisModule, raynaudPhenomenonModule, celiacDiseaseModule, myastheniaGravisModule, sjogrenDiseaseModule, psoriasisModule, genitourinaryMedicinalChemistryModule, vaginitisVulvovaginalInfectionsModule, cervicitisPelvicInflammatoryDiseaseModule, gynecologicOncologyModule, pelvicOrganProlapseFistulaCareModule, genderAffirmingHormoneCareModule, immunoglobulinTherapyModule, anemiaModule, sickleCellDiseaseModule, coughCommonColdModule, commonEyeConditionsModule, commonEarConditionsModule, acneModule, atopicDermatitisModule, superficialFungalSkinInfectionsModule, liceScabiesModule, minorWoundCareModule, animalHumanBitesModule, burnAssessmentInitialCareModule, poisonPlantDermatitisModule, topicalCorticosteroidSafeUseModule, sunscreenPhotoprotectionModule, herpesLabialisModule, seborrheicDermatitisModule, alopeciaModule, diaperDermatitisModule, hyperhidrosisModule, hemorrhoidsModule, pinwormInfectionModule, travelHealthPlanningModule, antimicrobialFoundationsStewardshipModule, betaLactamPharmacologyModule, aminoglycosidePharmacologyModule, fluoroquinolonePharmacologyModule, macrolidePharmacologyModule, tetracyclinePharmacologyModule, sulfonamideTrimethoprimPharmacologyModule, vancomycinPharmacologyModule, daptomycinPharmacologyModule, linezolidTedizolidPharmacologyModule, tigecyclinePharmacologyModule, polymyxinPharmacologyModule, clindamycinPharmacologyModule, nitroimidazolePharmacologyModule, lefamulinPharmacologyModule, fidaxomicinPharmacologyModule, rifaximinPharmacologyModule, fosfomycinPharmacologyModule, nitrofurantoinPharmacologyModule, mupirocinDecolonizationModule, perioperativeAntimicrobialProphylaxisModule, acuteBacterialMeningitisModule, acuteOtitisMediaModule, streptococcalPharyngitisModule, acuteBacterialRhinosinusitisModule, communityAcquiredPneumoniaAdultsModule, hospitalVentilatorAssociatedPneumoniaModule, tuberculosisModule, infectiveEndocarditisModule, intraAbdominalInfectionsModule, skinSoftTissueInfectionsModule, urinaryTractInfectionsModule, clostridioidesDifficileInfectionModule, travelersDiarrheaModule, syphilisModule, gonococcalInfectionsModule, chlamydialInfectionsModule, genitalHerpesModule, anogenitalHpvWartsModule, rickettsialEhrlichialAnaplasmaModule, lymeDiseaseModule];

basePharmacyModules.push(
  tularemiaModule,
  systemicAntifungalFoundationsModule,
  amphotericinFlucytosinePharmacologyModule,
  triazoleAntifungalPharmacologyModule,
  echinocandinPharmacologyModule,
  terbinafineGriseofulvinPharmacologyModule,
  localOropharyngealAntifungalPharmacologyModule,
  influenzaAntiviralPharmacologyModule,
  herpesSimplexVaricellaAntiviralPharmacologyModule,
  cytomegalovirusPharmacotherapyModule,
  pneumocystisJiroveciiPneumoniaModule,
  hivFoundationsCareModule,
  nucleosideReverseTranscriptaseInhibitorModule,
  nonNucleosideReverseTranscriptaseInhibitorModule,
  hivProteaseInhibitorModule,
  hivEntryAttachmentInhibitorModule,
  integraseStrandTransferInhibitorModule,
  hivPreventionPrepPepModule,
  disseminatedMacModule,
  toxoplasmaEncephalitisModule,
  cryptococcalMeningitisModule,
  histoplasmosisModule,
  mucosalEsophagealCandidiasisModule,
  coccidioidomycosisModule,
  blastomycosisModule,
  aspergillosisModule,
  mucormycosisModule,
);

const curriculumAreaGroups = [
  {
    area: "Calculations & Nutrition",
    modules: [nutritionScreeningAssessmentModule, fluidElectrolyteTherapyModule, acidBaseInterpretationModule, calciumPhosphorusHomeostasisModule, enteralNutritionModule, parenteralNutritionModule, parenteralNutritionCalculationsModule, pediatricParenteralNutritionModule],
  },
  {
    area: "Pharmacy Foundations",
    modules: [autonomicNervousSystemFoundationsModule, cholinergicAgonistsInhibitorsModule, antimuscarinicPharmacologyModule, cholinergicMedicinalChemistryModule, anticholinergicMedicinalChemistryModule, adrenergicAgonistsModule, adrenergicAntagonistsModule, adrenergicMedicinalChemistryModule, pharmacokineticsModule, pharmacogenomicsModule, dietarySupplementsComplementaryMedicineModule],
  },
  {
    area: "Renal & Liver Disease",
    modules: [acuteKidneyInjuryModule, chronicKidneyDiseaseModule, ckdComplicationsModule, renalReplacementTherapyModule],
  },
  {
    area: "Immunizations & Travel",
    modules: [travelHealthPlanningModule],
  },
  {
    area: "Infectious Diseases",
    modules: [infectionPreventionControlModule, vaginitisVulvovaginalInfectionsModule, cervicitisPelvicInflammatoryDiseaseModule, animalHumanBitesModule, pinwormInfectionModule, antimicrobialFoundationsStewardshipModule, betaLactamPharmacologyModule, aminoglycosidePharmacologyModule, fluoroquinolonePharmacologyModule, macrolidePharmacologyModule, tetracyclinePharmacologyModule, sulfonamideTrimethoprimPharmacologyModule, vancomycinPharmacologyModule, daptomycinPharmacologyModule, linezolidTedizolidPharmacologyModule, tigecyclinePharmacologyModule, polymyxinPharmacologyModule, clindamycinPharmacologyModule, nitroimidazolePharmacologyModule, lefamulinPharmacologyModule, fidaxomicinPharmacologyModule, rifaximinPharmacologyModule, fosfomycinPharmacologyModule, nitrofurantoinPharmacologyModule, mupirocinDecolonizationModule, perioperativeAntimicrobialProphylaxisModule, acuteBacterialMeningitisModule, acuteOtitisMediaModule, streptococcalPharyngitisModule, acuteBacterialRhinosinusitisModule, communityAcquiredPneumoniaAdultsModule, hospitalVentilatorAssociatedPneumoniaModule, tuberculosisModule, infectiveEndocarditisModule, intraAbdominalInfectionsModule, skinSoftTissueInfectionsModule, urinaryTractInfectionsModule, clostridioidesDifficileInfectionModule, travelersDiarrheaModule, syphilisModule, gonococcalInfectionsModule, chlamydialInfectionsModule, genitalHerpesModule, anogenitalHpvWartsModule, rickettsialEhrlichialAnaplasmaModule, lymeDiseaseModule, tularemiaModule, systemicAntifungalFoundationsModule, amphotericinFlucytosinePharmacologyModule, triazoleAntifungalPharmacologyModule, echinocandinPharmacologyModule, terbinafineGriseofulvinPharmacologyModule, localOropharyngealAntifungalPharmacologyModule, influenzaAntiviralPharmacologyModule, herpesSimplexVaricellaAntiviralPharmacologyModule, cytomegalovirusPharmacotherapyModule, pneumocystisJiroveciiPneumoniaModule, hivFoundationsCareModule, nucleosideReverseTranscriptaseInhibitorModule, nonNucleosideReverseTranscriptaseInhibitorModule, hivProteaseInhibitorModule, hivEntryAttachmentInhibitorModule, integraseStrandTransferInhibitorModule, hivPreventionPrepPepModule, disseminatedMacModule, toxoplasmaEncephalitisModule, cryptococcalMeningitisModule, histoplasmosisModule, mucosalEsophagealCandidiasisModule, coccidioidomycosisModule, blastomycosisModule, aspergillosisModule, mucormycosisModule],
  },
  {
    area: "Cardiovascular Conditions",
    modules: [diureticPharmacologyModule, diureticMedicinalChemistryModule, hypertensionFoundationsModule, resistantSecondaryHypertensionModule, hypertensiveEmergenciesModule, antihypertensiveMedicinalChemistryModule, dyslipidemiaRiskModule, lipidLoweringPharmacologyModule, dyslipidemiaTherapeuticsModule, chronicCoronaryDiseaseModule, acuteCoronarySyndromesModule, antiplateletPharmacologyModule, ecgInterpretationModule, arrhythmiaPathophysiologyModule, atrialArrhythmiasModule, ventricularArrhythmiasModule, antiarrhythmicPharmacologyModule, heartFailurePathophysiologyModule, chronicHeartFailureModule, acuteDecompensatedHeartFailureModule, heartFailureMedicinalChemistryModule, peripheralArterialDiseaseModule, acuteIschemicStrokeModule, secondaryStrokePreventionModule, raynaudPhenomenonModule],
  },
  {
    area: "Anticoagulation & Blood Disorders",
    modules: [coagulationAnticoagulantPharmacologyModule, venousThromboembolismModule, warfarinManagementModule, directOralAnticoagulantsModule, parenteralAnticoagulantsModule, anemiaModule, sickleCellDiseaseModule],
  },
  {
    area: "Eyes, Ears, Nose & Skin",
    modules: [glaucomaPharmacotherapyModule, allergicRhinitisModule, coughCommonColdModule, commonEyeConditionsModule, commonEarConditionsModule, acneModule, atopicDermatitisModule, superficialFungalSkinInfectionsModule, liceScabiesModule, minorWoundCareModule, burnAssessmentInitialCareModule, poisonPlantDermatitisModule, topicalCorticosteroidSafeUseModule, sunscreenPhotoprotectionModule, herpesLabialisModule, seborrheicDermatitisModule, alopeciaModule, diaperDermatitisModule, hyperhidrosisModule, psoriasisModule],
  },
  {
    area: "Pulmonary Conditions",
    modules: [asthmaModule, chronicObstructivePulmonaryDiseaseModule, pulmonaryArterialHypertensionModule, drugInducedPulmonaryDiseaseModule, tobaccoUseCessationModule],
  },
  {
    area: "Endocrine & Autoimmune",
    modules: [pituitaryPharmacologyModule, diabetesPathophysiologyMonitoringModule, noninsulinDiabetesPharmacotherapyModule, insulinTherapyModule, diabeticKetoacidosisModule, hyperosmolarHyperglycemicStateModule, thyroidDisordersModule, thyroidMedicinalChemistryModule, adrenalPharmacologyModule, cushingSyndromeModule, adrenalInsufficiencyModule, systemicGlucocorticoidsModule, rheumatoidArthritisModule, systemicLupusErythematosusModule, sjogrenDiseaseModule],
  },
  {
    area: "Reproductive & Genitourinary",
    modules: [gonadalHormonePharmacologyModule, gynecologicDisordersModule, infertilityOvulationInductionModule, contraceptivePharmacotherapyModule, pregnancyLactationPharmacotherapyModule, menopausalHormoneTherapyModule, benignProstaticHyperplasiaModule, urinaryIncontinenceModule, sexualDysfunctionModule, osteoporosisModule, genitourinaryMedicinalChemistryModule, pelvicOrganProlapseFistulaCareModule, genderAffirmingHormoneCareModule],
  },
  {
    area: "Special Populations",
    modules: [cysticFibrosisModule, shockVasoactivePharmacotherapyModule, icuAnalgesiaSedationDeliriumModule, perioperativeCriticalCarePharmacologyModule, immunoglobulinTherapyModule],
  },
  {
    area: "Oncology",
    modules: [gynecologicOncologyModule],
  },
  {
    area: "Neurologic Conditions",
    modules: [multipleSclerosisModule, myastheniaGravisModule],
  },
  {
    area: "Gastrointestinal Conditions",
    modules: [gastroesophagealRefluxDiseaseModule, pepticUlcerDiseaseModule, irritableBowelSyndromeModule, chronicIdiopathicConstipationModule, diarrheaAssessmentPharmacotherapyModule, inflammatoryBowelDiseaseModule, motionSicknessModule, celiacDiseaseModule, hemorrhoidsModule],
  },
  {
    area: "Medication Safety & Quality",
    modules: [medicationSafetyQualityModule, drugAllergiesAdverseReactionsModule],
  },
  {
    area: "Toxicology & Antidotes",
    modules: [cholinergicToxicologyModule, toxicologyAntidotesModule],
  },
];

export const pharmacyCurriculumAreas = ["All", ...curriculumAreaGroups.map(({ area }) => area)];

const curriculumAreaByModule = new Map(
  curriculumAreaGroups.flatMap(({ area, modules }) => modules.map((module) => [module, area])),
);

const uncategorizedModules = basePharmacyModules.filter((module) => !curriculumAreaByModule.has(module));
const duplicateAssignments = curriculumAreaGroups
  .flatMap(({ modules }) => modules)
  .filter((module, index, modules) => modules.indexOf(module) !== index);

if (uncategorizedModules.length || duplicateAssignments.length) {
  const missing = uncategorizedModules.map((module) => module.slug).join(", ") || "none";
  const duplicates = duplicateAssignments.map((module) => module.slug).join(", ") || "none";
  throw new Error(`Invalid pharmacy curriculum taxonomy. Missing: ${missing}. Duplicates: ${duplicates}.`);
}

export const pharmacyModules = basePharmacyModules.map((module) => ({
  ...module,
  area: curriculumAreaByModule.get(module),
}));

export const pharmacySubmoduleCount = pharmacyModules.reduce((total, module) => total + module.submodules.length, 0);

import { adrenergicAgonistsQuestionBank } from "@/data/questionBanks/adrenergicAgonists";

export const adrenergicAgonistsModule = {
  slug: "adrenergic-agonists",
  number: "15",
  title: "Adrenergic Agonists",
  source: "Adrenoceptor signaling, sympathomimetic pharmacology, and clinical selection",
  description: "Connect alpha and beta receptor signaling to airway, cardiovascular, vascular, metabolic, and central responses, then select and monitor sympathomimetics by indication, route, concentration, and patient reserve.",
  topics: ["Receptor signaling", "Direct and indirect agonists", "Vasopressors and inotropes", "Beta-2 bronchodilators", "Alpha agonists", "Integrated safety"],
  outcomes: [
    "Predict organ responses from alpha-1, alpha-2, beta-1, beta-2, and beta-3 receptor signaling.",
    "Differentiate direct receptor agonists from transmitter-releasing and reuptake-inhibiting sympathomimetics.",
    "Select emergency catecholamines and vasoactive infusions by hemodynamic problem rather than blood pressure alone.",
    "Use inhaled beta-2 agonists with correct device technique and recognize when frequent rescue use signals unstable disease.",
    "Monitor ischemic, arrhythmic, metabolic, extravasation, rebound, and interaction risks across adrenergic therapy.",
  ],
  submodules: [
    {
      slug: "adrenoceptor-signaling-map",
      title: "Adrenoceptor Signaling and Organ Response",
      summary: "Adrenoceptors are G-protein-coupled receptors whose cellular pathways interact with baseline autonomic tone, reflexes, disease, concentration, and route.",
      concepts: ["Alpha-1 Gq signaling", "Alpha-2 Gi signaling", "Beta-1 Gs signaling", "Beta-2 and beta-3 signaling"],
      visual: "adr-receptor-map",
      application: "For every predicted response, name the receptor, cell type, second messenger, direct organ effect, and expected reflex compensation.",
      lesson: [
        { heading: "Use alpha-1 to raise smooth-muscle calcium", body: "Alpha-1 receptors primarily couple through Gq, phospholipase C, inositol trisphosphate, and intracellular calcium. Vascular activation contracts arteriolar and venous smooth muscle. Iris radial muscle, prostate, and bladder-neck responses reflect the same contractile program in different tissues." },
        { heading: "Use alpha-2 to reduce transmitter release", body: "Alpha-2 receptors primarily couple through Gi and reduce adenylyl cyclase activity. Presynaptic alpha-2 receptors can limit norepinephrine release, while central activation can lower sympathetic outflow. Postsynaptic vascular alpha-2 effects can contribute to vasoconstriction, especially at high local concentration." },
        { heading: "Use beta-1 to increase cardiac and renin signaling", body: "Beta-1 receptors couple predominantly through Gs, cAMP, and protein kinase A. Cardiac activation increases rate, conduction, relaxation, and contractility according to tissue and disease. Juxtaglomerular beta-1 activation increases renin release, linking acute receptor signaling to longer hormonal effects." },
        { heading: "Use beta-2 and beta-3 in context", body: "Beta-2 signaling relaxes airway, uterine, and selected vascular smooth muscle despite raising cAMP because protein kinase A reduces contractile machinery activity. Beta-2 also affects skeletal muscle, potassium distribution, and metabolism. Beta-3 activation contributes to bladder relaxation and adipose biology." },
        { heading: "Keep dopamine receptors on the map", body: "Dopamine receptors are distinct from adrenoceptors. Vascular D1-like signaling can increase cAMP and relax selected renal, mesenteric, coronary, and cerebral vascular beds at some exposures. Dopamine also activates beta and alpha pathways as concentration rises, so an infusion cannot be reduced to one receptor or a fixed bedside dose zone. A transient urine-output change is not evidence of kidney protection." },
      ],
      keyPoints: ["Alpha-1 is Gq dominant.", "Alpha-2 is Gi dominant.", "Beta receptors are Gs dominant.", "Dopamine receptors are a distinct signaling family.", "Direct and reflex responses must be separated."],
      check: { question: "Why can beta-2 activation relax airway smooth muscle even though cAMP rises?", choices: ["Protein kinase A reduces smooth-muscle contractile signaling", "Beta-2 receptors directly open skeletal nicotinic channels", "cAMP always raises smooth-muscle calcium", "The receptor blocks all autonomic ganglia"], answer: 0, rationale: "Gs and protein kinase A produce cell-specific effects, including reduced smooth-muscle contraction.", reviewHref: "#adrenoceptor-signaling-map" },
    },
    {
      slug: "direct-indirect-sympathomimetics",
      title: "Direct and Indirect Sympathomimetics",
      summary: "Direct agonists bind adrenoceptors. Indirect agents increase synaptic catecholamines through release, transporter inhibition, or altered metabolism, making neuronal stores and interacting drugs part of their mechanism.",
      concepts: ["Epinephrine and norepinephrine", "Dopamine and dobutamine", "Transmitter release and reuptake", "Tachyphylaxis and interaction risk"],
      visual: "adr-transmitter-actions",
      application: "Classify each agent as direct, indirect, or mixed, then identify which receptors or transmitter pools are required for its effect.",
      lesson: [
        { heading: "Compare endogenous catecholamines", body: "Epinephrine activates alpha-1, alpha-2, beta-1, and beta-2 receptors, with the observed pattern changing by concentration and route. Norepinephrine strongly activates alpha receptors and beta-1 with less beta-2 effect. Dopamine engages dopaminergic and adrenergic receptors across concentrations, but the bedside response is not reliably separated into neat dose zones." },
        { heading: "Use dobutamine for a flow problem", body: "Dobutamine is a synthetic catecholamine with prominent beta-1-mediated inotropic action and additional receptor effects from its stereoisomeric mixture. It can increase cardiac output but may lower resistance, cause tachyarrhythmia, or worsen myocardial oxygen imbalance. Hemodynamics determine whether it fits." },
        { heading: "Understand indirect dependence", body: "Releasing agents depend on neuronal catecholamine stores and vesicular handling, while transporter inhibitors increase transmitter persistence. Cocaine, amphetamine-like agents, and mixed sympathomimetics therefore interact with monoamine oxidase inhibition, tricyclic antidepressants, other stimulants, and depleted neuronal stores differently from a pure direct agonist." },
        { heading: "Use ephedrine as the mixed-action model", body: "Current ephedrine labeling describes both direct alpha and beta agonism and indirect norepinephrine release. This mixed mechanism supports treatment of clinically important hypotension during anesthesia for labeled injection products, but it also makes neuronal stores, repeated dosing, interacting pressor agents, and tachyphylaxis clinically relevant. Product concentration and preparation instructions must be verified because formulations differ." },
        { heading: "Recognize rapid loss of response", body: "Repeated exposure to some indirect sympathomimetics can deplete releasable transmitter or desensitize signaling, producing tachyphylaxis. Increasing dose can then add toxicity without restoring predictable benefit. Reassess mechanism and exposure rather than automatically escalating." },
      ],
      keyPoints: ["Direct agents bind receptors.", "Indirect agents depend on transmitter handling.", "Ephedrine combines direct and indirect action.", "Dopamine dose zones are not absolute.", "Tachyphylaxis can reflect depleted stores or receptor adaptation."],
      check: { question: "Why can an indirect sympathomimetic lose effect with repeated dosing?", choices: ["Releasable catecholamine stores can become depleted", "All alpha receptors disappear permanently", "The drug becomes an antimuscarinic", "Beta receptors stop coupling to any G protein forever"], answer: 0, rationale: "Indirect release requires available neuronal transmitter stores.", reviewHref: "#direct-indirect-sympathomimetics" },
    },
    {
      slug: "vasopressors-inotropes",
      title: "Vasopressors and Inotropes",
      summary: "Vasoactive therapy should correct a defined perfusion problem. Mean pressure, cardiac output, resistance, preload, rhythm, oxygen delivery, and the cause of shock must be interpreted together.",
      concepts: ["Epinephrine and norepinephrine", "Phenylephrine", "Dobutamine and dopamine", "Infusion safety and perfusion monitoring"],
      visual: "adr-vasopressors",
      application: "Before selecting an infusion, state whether the dominant problem is resistance, pump function, rate, volume, obstruction, distributive physiology, or a combination.",
      lesson: [
        { heading: "Use epinephrine first for anaphylaxis", body: "Intramuscular epinephrine is the critical first-line medicine for anaphylaxis because alpha and beta effects address vascular leak, airway edema, bronchospasm, and cardiovascular collapse. Auto-injector concentration, dose, site, technique, repeat assessment, and immediate emergency care follow the current product and emergency protocol." },
        { heading: "Use norepinephrine for vascular tone with monitoring", body: "Norepinephrine raises vascular resistance through alpha receptors while beta-1 activity can support cardiac function. It is titrated by trained clinicians for acute hypotension according to the current label and shock protocol. Correct severe hypovolemia when possible and monitor perfusion rather than pressure alone." },
        { heading: "Use phenylephrine when pure alpha-1 action fits", body: "Phenylephrine increases arterial and venous tone with little direct beta activity. Reflex bradycardia and increased afterload can reduce cardiac output in susceptible patients. It may fit selected vasodilatory states or procedural settings but can worsen a low-flow problem." },
        { heading: "Predict baroreflex compensation", body: "A sudden alpha-mediated rise in arterial pressure increases baroreceptor firing and can reduce sympathetic drive while increasing vagal influence. The resulting reflex slowing may offset or obscure direct cardiac stimulation. Interpret heart rate only after separating the drug's receptor action from the intact reflex response, baseline autonomic tone, conduction disease, and concurrent medicines." },
        { heading: "Protect the line and tissue", body: "Catecholamine infusions require concentration verification, compatible access, pump safeguards, frequent site assessment, and a protocol for extravasation. Monitor rhythm, pressure, mental status, skin, urine output, lactate trend, peripheral perfusion, cardiac output when available, and ischemic symptoms." },
      ],
      keyPoints: ["Anaphylaxis requires epinephrine without delay.", "Pressure is not the same as perfusion.", "Baroreflexes can oppose direct cardiac effects.", "Phenylephrine can lower flow through afterload and reflexes.", "Extravasation is a time-sensitive injury."],
      check: { question: "Why can phenylephrine worsen perfusion despite raising blood pressure?", choices: ["Increased afterload and reflex bradycardia can reduce cardiac output", "It directly blocks every alpha-1 receptor", "It always causes profound vasodilation", "It eliminates venous tone"], answer: 0, rationale: "Mean pressure can rise while flow falls in a preload- or pump-limited patient.", reviewHref: "#vasopressors-inotropes" },
    },
    {
      slug: "beta2-agonist-therapy",
      title: "Beta-2 Agonist Therapy",
      summary: "Inhaled beta-2 agonists prioritize airway smooth-muscle relaxation, but device technique, disease control, dose, selectivity, and systemic spillover determine benefit and risk.",
      concepts: ["Albuterol and levalbuterol", "Short- and long-acting roles", "Device technique", "Tremor, tachycardia, lactate, and potassium"],
      visual: "adr-beta2",
      application: "Treat a rising need for rescue bronchodilator as a disease-control signal, not merely an invitation to consume more agonist.",
      lesson: [
        { heading: "Use inhaled albuterol for reversible bronchospasm", body: "Albuterol is a relatively selective beta-2 agonist used for treatment or prevention of bronchospasm and prevention of exercise-induced bronchospasm in labeled populations. Metered-dose, dry-powder, and nebulized products have product-specific preparation, dose, and technique." },
        { heading: "Distinguish rescue from maintenance", body: "Short-acting beta-2 agonists provide rapid symptom relief. Long-acting beta-2 agonists have maintenance roles defined by disease and combination regimen. In asthma, long-acting therapy must follow current anti-inflammatory treatment guidance rather than being used as unopposed symptom suppression." },
        { heading: "Expect systemic spillover at higher exposure", body: "Tremor, tachycardia, palpitations, hypokalemia, hyperglycemia, and metabolic changes can accompany high or repeated beta-2 exposure. Severe airflow obstruction, repeated nebulization, coadministered stimulants, diuretics, and cardiac disease can magnify consequences." },
        { heading: "Recognize paradoxical bronchospasm and treatment failure", body: "A new or worsening bronchospasm immediately after inhalation can be paradoxical and requires product discontinuation and alternative treatment according to the label. A diminishing response or rapidly increasing rescue use requires urgent reassessment of technique, diagnosis, severity, and anti-inflammatory therapy." },
      ],
      keyPoints: ["Device technique controls lung dose.", "Rescue and maintenance roles differ.", "High exposure can lower potassium.", "Frequent rescue use signals unstable disease."],
      check: { question: "What is the best interpretation of rapidly increasing albuterol use?", choices: ["Airway disease may be deteriorating and requires prompt reassessment", "The patient is cured", "Beta-2 receptors have become alpha-1 receptors", "No additional evaluation is needed"], answer: 0, rationale: "Escalating rescue need is a safety signal, not a maintenance strategy.", reviewHref: "#beta2-agonist-therapy" },
    },
    {
      slug: "alpha-agonist-applications",
      title: "Peripheral and Central Alpha Agonists",
      summary: "Alpha agonists can constrict peripheral vessels, reduce central sympathetic outflow, lower intraocular pressure, or alter nasal and ocular blood flow. Route and compartment determine which effect dominates.",
      concepts: ["Phenylephrine and midodrine", "Clonidine and guanfacine", "Dexmedetomidine", "Topical decongestants and rebound"],
      visual: "adr-alpha-applications",
      application: "Identify whether the intended target is peripheral alpha-1, central alpha-2, or a local ocular or nasal site, then monitor the predictable opposing risks.",
      lesson: [
        { heading: "Use midodrine around upright function", body: "Midodrine is converted to an active alpha-1 agonist that raises vascular tone for symptomatic orthostatic hypotension in selected patients. Benefit should be demonstrated in activities that matter. Supine hypertension, urinary retention, piloerection, paresthesia, and dose timing require current label guidance." },
        { heading: "Use central alpha-2 agonists with withdrawal planning", body: "Clonidine and guanfacine reduce sympathetic outflow through central alpha-2 mechanisms. Sedation, bradycardia, hypotension, dry mouth, and interaction with other depressant or rate-slowing drugs require monitoring. Abrupt discontinuation can produce rebound sympathetic activity and severe hypertension." },
        { heading: "Use dexmedetomidine only in monitored settings", body: "Dexmedetomidine is a central alpha-2 agonist used for labeled sedation under monitored care. Bradycardia and hypotension are common concerns, while transient hypertension can occur with loading or high peripheral concentrations. Airway and hemodynamic monitoring remain essential despite a distinct respiratory profile." },
        { heading: "Limit topical vasoconstrictor overuse", body: "Topical nasal alpha agonists can reduce congestion by vasoconstriction, but repeated use can produce rebound congestion and local injury. Ophthalmic agonists have product-specific indications and risks. Systemic absorption can matter in children, older adults, and cardiovascular disease." },
      ],
      keyPoints: ["Midodrine benefit is functional and posture dependent.", "Central alpha-2 agonists can cause rebound on abrupt withdrawal.", "Dexmedetomidine requires continuous monitoring.", "Topical delivery does not eliminate systemic risk."],
      check: { question: "What is the major safety concern when clonidine is stopped abruptly?", choices: ["Rebound sympathetic activation and severe hypertension", "Permanent muscarinic paralysis", "Immediate cholinergic crisis", "Loss of all circulating catecholamines"], answer: 0, rationale: "Central sympathetic suppression adapts, so abrupt withdrawal can cause marked rebound.", reviewHref: "#alpha-agonist-applications" },
    },
    {
      slug: "adrenergic-agonist-safety",
      title: "Safety, Interactions, and Clinical Integration",
      summary: "Adrenergic toxicity is a mismatch between receptor effect and patient reserve. Cardiovascular, metabolic, ischemic, neurologic, and withdrawal risks must be interpreted across the full regimen.",
      concepts: ["Arrhythmia and myocardial oxygen demand", "Excess vasoconstriction and extravasation", "Potassium, glucose, and lactate", "MAOI, tricyclic, stimulant, and beta-blocker interactions"],
      visual: "adr-safety",
      application: "When a patient deteriorates, reconstruct every adrenergic exposure, including infusions, inhalers, decongestants, stimulants, attention medicines, weight-loss products, and withdrawal from central agonists.",
      lesson: [
        { heading: "Balance pressure against flow and oxygen demand", body: "Beta-1 stimulation can increase output but also rate, arrhythmia, and myocardial oxygen demand. Alpha-1 stimulation can restore vascular tone but increase afterload and regional ischemia. The desired hemodynamic endpoint is adequate organ perfusion with the lowest harmful exposure." },
        { heading: "Respond quickly to extravasation", body: "Vasopressor extravasation can produce intense local ischemia. Stop or relocate the infusion according to protocol, assess the site and distal perfusion, notify the appropriate team, and use current drug-specific extravasation management promptly. Prevention depends on access, concentration, pump, and frequent visualization." },
        { heading: "Interpret metabolic findings in context", body: "Beta-2 agonism can shift potassium into cells and increase glucose and lactate production. Hypokalemia, tremor, and tachycardia may reflect exposure, while elevated lactate can complicate interpretation of respiratory distress. Do not assume every lactate elevation means worsening tissue hypoxia." },
        { heading: "Audit interacting sympathetic pathways", body: "Monoamine oxidase inhibitors, tricyclic antidepressants, stimulants, cocaine, thyroid excess, and other sympathomimetics can amplify responses. Beta blockers can blunt beta-2 rescue and alter epinephrine physiology. Interaction significance depends on selectivity, dose, timing, and patient disease." },
      ],
      keyPoints: ["Perfusion outranks pressure alone.", "Extravasation requires immediate action.", "Beta-2 exposure can lower potassium and raise lactate.", "Interaction risk depends on the whole sympathetic regimen."],
      check: { question: "Why can lactate rise during intensive beta-2 agonist therapy even as ventilation improves?", choices: ["Beta-2-mediated metabolic stimulation can increase lactate production", "The drug always stops oxygen delivery", "Lactate is formed only during sepsis", "Beta-2 receptors directly destroy erythrocytes"], answer: 0, rationale: "Adrenergic metabolic effects can raise lactate independently of worsening tissue hypoperfusion.", reviewHref: "#adrenergic-agonist-safety" },
    },
  ],
  references: [
    { label: "DailyMed. Epinephrine injection for anaphylaxis", href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0a29fe62-e241-4272-b91c-c1036b031cd4" },
    { label: "DailyMed. Norepinephrine bitartrate injection", href: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=norepinephrine%20bitartrate%20injection" },
    { label: "DailyMed. Albuterol sulfate inhalation aerosol", href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=081b7bbb-6692-4512-b135-863b73bf30a5" },
    { label: "DailyMed. Midodrine hydrochloride tablets", href: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=midodrine%20hydrochloride" },
    { label: "DailyMed. Clonidine hydrochloride", href: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=clonidine%20hydrochloride" },
    { label: "DailyMed. Dopamine hydrochloride injection", href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=38431050-007e-41b2-e063-6394a90a1d64" },
    { label: "DailyMed. Ephedrine sulfate injection", href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c021fe1b-3ac3-4577-b780-f6a3070908a1" },
    { label: "IUPHAR/BPS Guide to Pharmacology. Adrenoceptors", href: "https://www.guidetopharmacology.org/GRAC/FamilyDisplayForward?familyId=4" },
  ],
  questionBank: adrenergicAgonistsQuestionBank,
};

// Beta-2 bronchodilator lesson: product, airway, and potassium review.
Object.assign(adrenergicAgonistsModule.submodules.find((lesson) => lesson.slug === "beta2-agonist-therapy"), {
  "slug": "beta2-agonist-therapy",
  "title": "Beta-2 Agonist Therapy",
  "summary": "Connect airway beta-2 signaling to relief of bronchospasm, then separate product technique, anti-inflammatory disease control, potassium redistribution, and immediate treatment hazards.",
  "concepts": [
    "Albuterol and R-enantiomer levalbuterol",
    "Reliever, maintenance, and ICS-formoterol roles",
    "Product-specific preparation and technique",
    "Potassium redistribution, diuretics, and lactate"
  ],
  "visual": "adr-beta2",
  "application": "When rescue use rises, assess the airway and the regimen promptly. When potassium falls, distinguish redistribution from concurrent losses before deciding how to replace it.",
  "lesson": [
    {
      "heading": "Use inhaled albuterol for reversible bronchospasm",
      "body": "Albuterol is a relatively selective beta-2 agonist that relaxes airway smooth muscle through Gs, adenylyl cyclase, cAMP, and protein kinase A signaling. Bronchodilation relieves reversible constriction; it does not establish that airway inflammation has resolved. The referenced albuterol aerosol is labeled for treatment or prevention of bronchospasm and prevention of exercise-induced bronchospasm in patients aged four years and older. Verify the actual product: metered-dose aerosols, dry powders, and nebulizer solutions have different preparation, delivery, and dose instructions. A shared ingredient name does not make devices or concentrations interchangeable."
    },
    {
      "heading": "Distinguish rescue from maintenance",
      "body": "Short-acting beta-2 agonists can provide rapid symptom relief. For asthma, GINA 2026 recommends an ICS-containing treatment plan rather than SABA-only treatment for adults, adolescents, and children aged 6-11 years. Long-acting agonist roles depend on the combination and regimen: in adults and adolescents, specified low-dose ICS-formoterol combinations can serve as anti-inflammatory relievers; in maintenance-and-reliever therapy (MART), the same appropriate ICS-formoterol product supplies both roles. An ICS-LABA combination without formoterol cannot be used as MART, and ICS-formoterol should not be added as reliever to maintenance ICS-LABA containing a different LABA. LABA without ICS is inappropriate in asthma. These guideline roles do not establish local product approval or permit arbitrary substitution; check age, formulation, labeling, and the prescribed action plan."
    },
    {
      "heading": "Verify the device before escalating exposure",
      "body": "Ask the patient to demonstrate use of the exact inhaler, including its preparation, actuator, dose indicator, and cleaning. For example, the referenced Preferred Pharmaceuticals repackaged albuterol aerosol requires three priming sprays before first use or after more than two weeks without use. XOPENEX HFA requires four test sprays before first use or after more than three days without use. Both require shaking and at least weekly actuator washing and thorough air drying; each must use its own supplied actuator. These are two specific HFA product instructions, not a universal albuterol rule or nebulizer preparation instruction. Poor delivery and deteriorating disease can coexist, so checking technique must not postpone urgent assessment when symptoms worsen."
    },
    {
      "heading": "Separate stereochemistry from clinical guarantees",
      "body": "Levalbuterol is the R enantiomer of albuterol; racemic albuterol contains R and S enantiomers. Both provide beta-2 bronchodilation. Removing the S enantiomer does not remove every cardiovascular, tremor, potassium, or paradoxical bronchospasm risk: XOPENEX HFA retains those relevant warnings. Judge an individual response using the actual formulation, appropriate prescribed dose, symptom and airflow response, adverse effects, access, and cost. Do not infer universal clinical superiority or a universal dose conversion from stereochemistry. Adverse-event percentages from separate trials are not a valid direct comparison of the products."
    },
    {
      "heading": "Expect systemic spillover at higher exposure",
      "body": "Inhaled delivery does not eliminate systemic effects. Tremor, tachycardia, palpitations, changes in glucose, and hypokalemia can occur, especially with high or repeated exposure. Cardiac disease and other adrenergic drugs may increase the clinical consequences. Both cited aerosol labels caution that loop or thiazide diuretic-associated hypokalemia and ECG changes can be worsened by beta-agonists, particularly if recommended beta-agonist exposure is exceeded; they advise considering potassium monitoring. Reconstruct the dose history and full regimen while assessing airflow, work of breathing, pulse, symptoms, and rhythm when indicated. A faster pulse alone neither proves treatment success nor establishes the entire cause of deterioration."
    },
    {
      "heading": "Distinguish potassium redistribution from potassium loss",
      "body": "Beta-2 stimulation can move potassium from extracellular fluid into cells, lowering the measured serum concentration without removing that potassium from the body. The cited aerosol labels describe the decrease as usually transient and generally not requiring supplementation; that wording does not mean every low value is harmless or that replacement is never indicated. Loop or thiazide therapy, gastrointestinal losses, inadequate intake, magnesium deficiency, and other causes may coexist. Assess the potassium trend, symptoms, rhythm, kidney function, magnesium, acid-base state, losses, and recent treatment exposures. Clinically significant hypokalemia still needs prompt assessment and individualized treatment. Avoid translating an isolated shift into a fixed total-body deficit or giving unmonitored replacement, especially when kidney clearance is impaired and the shift may reverse."
    },
    {
      "heading": "Interpret lactate with the whole clinical picture",
      "body": "A small randomized placebo-controlled study in 28 healthy adults found higher lactate and lower potassium after nebulized albuterol. This supports the possibility of an exposure-related metabolic contribution; its healthy-volunteer results do not determine the cause of a lactate rise in a patient with an exacerbation. Interpret lactate alongside airflow response, oxygenation, work of breathing, perfusion, other causes, recent doses, and the clinical trajectory. Neither assume that every rise proves worsening shock nor dismiss persistent distress as a drug effect. Continue reassessment and necessary airway care; this observation is not an instruction to stop all bronchodilation or escalate treatment solely to normalize lactate."
    },
    {
      "heading": "Recognize paradoxical bronchospasm and treatment failure",
      "body": "New or worsening bronchospasm immediately after inhalation can be paradoxical and life-threatening, including with first use of a new canister. Both cited aerosol labels direct immediate discontinuation of the implicated product and alternative treatment. Obtain urgent assessment and airway care rather than repeatedly challenging the patient with the same suspected trigger. Timing, the exact product and device, administration, airflow change, and associated hypersensitivity findings help assess the differential; timing alone does not identify a particular excipient as the cause. Distinguish this immediate pattern from progressively increasing rescue need or diminishing benefit over hours or days. Those patterns also require prompt medical attention and reassessment of severity, diagnosis, technique, adherence, and anti-inflammatory treatment."
    }
  ],
  "keyPoints": [
    "Bronchodilation does not replace an asthma ICS plan.",
    "Only appropriate ICS-formoterol regimens supply both maintenance and reliever roles.",
    "Preparation instructions belong to the exact product and device.",
    "Levalbuterol retains clinically relevant beta-agonist risks.",
    "Potassium can shift into cells while losses coexist.",
    "Immediate bronchospasm after inhalation requires stopping the implicated product and alternative care."
  ],
  "check": {
    "question": "An adult with asthma needs albuterol increasingly often and gets less relief. What is the best next interpretation and action?",
    "choices": [
      "Disease may be destabilizing; arrange prompt assessment of severity, technique, adherence, and the ICS-containing plan",
      "Temporary relief proves that inflammation is controlled, so only provide extra canisters",
      "Replace the anti-inflammatory plan with scheduled SABA alone",
      "Assume a technique error and defer assessment until the next routine visit"
    ],
    "answer": 0,
    "rationale": "Increasing use and diminishing benefit are deterioration signals in the label. Assess the patient and regimen promptly, including delivery and anti-inflammatory treatment. Temporary bronchodilation does not prove inflammatory control; extra canisters or scheduled SABA alone do not correct the problem. Technique review matters, but assuming it is the only cause and postponing assessment can delay needed care.",
    "reviewHref": "#beta2-agonist-therapy"
  }
});
adrenergicAgonistsModule.references.push(...[
  {
    "label": "RxPrep 2023. Renal disease and asthma: printed pp. 292-293, 571-573, 575-577, 583, 585. Supplied course book.",
    "locator": "Supplied RxPrep 2023 course book, printed pp. 292-293, 571-573, 575-577, 583, 585 (PDF pp. 300-301, 579-581, 583-585, 591, 593)."
  },
  {
    "label": "DailyMed. XOPENEX HFA (levalbuterol tartrate); Lupin, prescribing information revised July 2025.",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=70a35706-d7a8-4a48-98c6-1cab1c42fe8d"
  },
  {
    "label": "GINA 2026 Summary Guide. Asthma reliever and maintenance roles; pp. 15, 24-26, 38-40, 43.",
    "href": "https://ginasthma.org/wp-content/uploads/2026/07/GINA-Summary-Guide-2026-WEB-WMS.pdf"
  },
  {
    "label": "Rasmussen et al. 2011. β2 adrenergic receptor-Gs complex; abstract and introduction.",
    "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3184188/"
  },
  {
    "label": "Zitek et al. 2016. Nebulized albuterol, lactate and potassium in healthy adults; primary study abstract.",
    "href": "https://pubmed.ncbi.nlm.nih.gov/26857949/"
  },
  {
    "label": "Kardalas et al. 2018. Hypokalemia: a clinical update; potassium distribution, losses, evaluation and treatment.",
    "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5881435/"
  }
]);

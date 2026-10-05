import { calciumPhosphorusHomeostasisQuestionBank } from "@/data/questionBanks/calciumPhosphorusHomeostasis";

export const calciumPhosphorusHomeostasisModule = {
  slug: "calcium-phosphorus-homeostasis",
  number: "04",
  title: "Calcium and Phosphorus Homeostasis",
  source: "NaS synthesis of current mineral homeostasis guidance",
  description: "Connect mineral physiology, laboratory interpretation, symptoms, and organ function to safe treatment of calcium and phosphorus disorders.",
  topics: ["Mineral regulation", "Calcium disorders", "Phosphate disorders", "CKD mineral and bone disorder"],
  outcomes: [
    "Explain how PTH, vitamin D, FGF23, bone, kidney, and intestine regulate calcium and phosphate.",
    "Interpret total, corrected, and ionized calcium without overstating the precision of a formula.",
    "Prioritize immediate stabilization and cause-directed care in calcium emergencies.",
    "Build a monitored phosphate replacement or lowering plan that accounts for kidney function and interacting minerals.",
  ],
  submodules: [
    {
      slug: "mineral-regulation",
      title: "Mineral Regulation",
      summary: "Calcium and phosphate are controlled by coordinated signaling among bone, kidney, intestine, and parathyroid tissue.",
      concepts: ["PTH and calcium-sensing receptor", "Vitamin D activation", "FGF23 and phosphate handling", "Bone turnover and mineral balance"],
      visual: "mineral-regulation",
      application: "When a mineral value is abnormal, identify the responding hormone, the organ that should change handling, and the disease or drug that could break that response.",
      lesson: [
        { heading: "Track calcium through the feedback loop", body: "A fall in ionized calcium stimulates parathyroid hormone secretion. PTH increases renal calcium reabsorption, promotes phosphate excretion, stimulates renal formation of calcitriol, and supports release of mineral from bone when sustained. The calcium-sensing receptor helps the parathyroid gland and kidney detect extracellular calcium." },
        { heading: "Separate vitamin D production from effect", body: "Vitamin D is hydroxylated first in the liver to 25-hydroxyvitamin D, the principal marker of body stores, then in the kidney to active 1,25-dihydroxyvitamin D. Calcitriol increases intestinal absorption of calcium and phosphate. Kidney disease, low substrate, magnesium deficiency, and abnormal PTH signaling can disrupt the pathway at different points." },
        { heading: "Use FGF23 to explain phosphate control", body: "FGF23 is released mainly by osteocytes when phosphate load or calcitriol signaling rises. It lowers renal phosphate reabsorption and suppresses calcitriol production. In chronic kidney disease, phosphate retention, FGF23 elevation, low calcitriol, hypocalcemic pressure, and secondary hyperparathyroidism can coexist before serum phosphate becomes markedly high." },
      ],
      keyPoints: ["PTH raises calcium while promoting renal phosphate loss.", "Calcitriol increases intestinal absorption of both calcium and phosphate.", "FGF23 promotes phosphaturia and suppresses calcitriol.", "Magnesium deficiency can impair both PTH secretion and PTH action."],
      check: { question: "Which response is expected when ionized calcium falls in a patient with intact parathyroid and kidney function?", choices: ["PTH rises and renal phosphate reabsorption falls", "PTH falls and phosphate reabsorption rises", "Calcitriol production must stop", "FGF23 becomes the only calcium regulator"], answer: 0, rationale: "Low ionized calcium stimulates PTH, which conserves calcium and promotes phosphaturia.", reviewHref: "#mineral-regulation" },
    },
    {
      slug: "calcium-measurement",
      title: "Calcium Measurement and Diagnostic Reasoning",
      summary: "The clinically active fraction is ionized calcium. Total calcium is influenced by albumin, pH, complexing anions, and the measurement context.",
      concepts: ["Ionized versus total calcium", "Albumin adjustment limits", "PTH-directed differential", "Magnesium, phosphate, vitamin D, and kidney data"],
      visual: "calcium-fractions",
      application: "Use ionized calcium when binding is unstable or a precise result will change urgent care. Treat an albumin-adjusted value as an estimate, not a measured physiologic truth.",
      lesson: [
        { heading: "Know what the laboratory measured", body: "Roughly half of circulating calcium is ionized and biologically active. The remainder is protein bound or complexed. Total calcium can look low when albumin is low even if ionized calcium is normal. Alkalemia increases albumin binding and can lower ionized calcium, while acidemia can increase the ionized fraction." },
        { heading: "Use correction formulas cautiously", body: "A common estimate in mg/dL adds 0.8 times the difference between 4 g/dL and measured albumin to total calcium. The equation can be inaccurate in critical illness, kidney disease, marked hypoalbuminemia, and abnormal pH. Direct ionized calcium is preferred when precision matters or the estimate conflicts with the clinical picture." },
        { heading: "Let PTH organize the differential", body: "Hypercalcemia with an elevated or inappropriately normal PTH suggests a PTH-dependent process such as primary or tertiary hyperparathyroidism, while suppressed PTH shifts attention toward malignancy, vitamin D excess, granulomatous disease, medications, or other causes. In hypocalcemia, measure magnesium, phosphate, kidney function, PTH, and vitamin D to distinguish impaired hormone response, deficiency, sequestration, and loss." },
      ],
      keyPoints: ["Ionized calcium is the active fraction.", "Albumin correction is an estimate with important limitations.", "Interpret PTH as appropriate or inappropriate for the calcium state.", "Check magnesium whenever hypocalcemia is unexplained or resistant."],
      check: { question: "A critically ill patient has low albumin, alkalemia, neuromuscular irritability, and a borderline corrected calcium. Which next measurement is most informative?", choices: ["Ionized calcium", "Repeat albumin alone", "Urine sodium alone", "LDL cholesterol"], answer: 0, rationale: "Abnormal albumin and pH make total and corrected calcium less reliable, while symptoms may reflect low ionized calcium.", reviewHref: "#calcium-measurement" },
    },
    {
      slug: "hypocalcemia",
      title: "Hypocalcemia",
      summary: "Symptoms, ECG effects, rate of decline, and cause determine urgency more reliably than a total calcium value alone.",
      concepts: ["Tetany, seizures, and QT prolongation", "IV calcium products", "Oral calcium and vitamin D", "Magnesium and cause correction"],
      visual: "hypocalcemia-response",
      application: "For symptomatic hypocalcemia, stabilize first, monitor the ECG, identify the cause, and plan the transition from immediate calcium support to durable mineral and hormone correction.",
      lesson: [
        { heading: "Recognize a calcium emergency", body: "Perioral or digital paresthesia, carpopedal spasm, tetany, laryngospasm, seizure, prolonged QT, and arrhythmia can signal clinically important hypocalcemia. Symptoms depend on ionized calcium and speed of decline. Severe symptoms require urgent monitored treatment even before every etiologic result is available." },
        { heading: "Administer IV calcium safely", body: "Current calcium gluconate labeling indicates it for acute symptomatic hypocalcemia and requires dilution, a secure IV line, controlled administration, and monitoring. Ten percent calcium gluconate contains 9.3 mg of elemental calcium per mL. Calcium chloride provides more elemental calcium per volume but is more irritating and generally requires central access when used for calcium replacement." },
        { heading: "Correct the mechanism", body: "Stable or mild disease may be managed with oral calcium and vitamin D according to cause and local protocol. Hypoparathyroidism may require active vitamin D because renal activation is insufficient without PTH signaling. Vitamin D deficiency requires repletion. Hypomagnesemia must be corrected because it can suppress PTH release and produce resistance to PTH." },
        { heading: "Protect the kidney during chronic therapy", body: "Chronic hypoparathyroidism care aims to control symptoms without driving excessive urinary calcium. Follow serum calcium, phosphate, magnesium, kidney function, and urinary calcium as appropriate. A thiazide can reduce urinary calcium in selected patients. Palopegteriparatide is an FDA-approved PTH replacement option for adults with hypoparathyroidism, but it is not an acute rescue treatment and requires individualized calcium monitoring during titration." },
        { heading: "Prevent treatment complications", body: "Follow symptoms, ECG, ionized or total calcium as appropriate, magnesium, phosphate, kidney function, and the IV site. Rapid calcium administration can cause hypotension or arrhythmia. Calcium can precipitate with bicarbonate or phosphate in the same line, so compatibility and line management require explicit review." },
      ],
      keyPoints: ["Symptoms and ECG toxicity can make hypocalcemia an emergency.", "Calcium gluconate must be diluted and administered through a secure line.", "Correct magnesium before calling hypocalcemia refractory.", "Chronic therapy must control symptoms without causing hypercalciuria."],
      check: { question: "A patient with hypocalcemia has tetany and a prolonged QT interval. What is the immediate priority?", choices: ["Monitored IV calcium with cause-directed evaluation", "Wait for a routine outpatient repeat", "Give an oral phosphate binder", "Restrict calcium intake"], answer: 0, rationale: "Symptomatic hypocalcemia with ECG effects is a medical emergency requiring monitored calcium administration.", reviewHref: "#hypocalcemia" },
    },
    {
      slug: "hypercalcemia",
      title: "Hypercalcemia",
      summary: "Volume status, neurologic and cardiac toxicity, kidney function, PTH, and the underlying mechanism shape acute and definitive treatment.",
      concepts: ["PTH-dependent and independent causes", "Hydration and urgent stabilization", "Calcitonin, bisphosphonates, and denosumab", "Cause-specific therapy and monitoring"],
      visual: "hypercalcemia-response",
      application: "Separate the rapid bridge from the durable therapy. Name which intervention acts within hours, which takes days, and which treats the disease causing calcium release.",
      lesson: [
        { heading: "Determine severity and mechanism", body: "Hypercalcemia can cause polyuria, dehydration, kidney injury, constipation, weakness, cognitive change, shortened QT, and dysrhythmia. Check medication and supplement exposure, volume status, kidney function, phosphate, PTH, and a confirmatory calcium measurement. PTH is the central first branch in the etiologic workup." },
        { heading: "Restore volume thoughtfully", body: "Isotonic crystalloid can correct volume depletion and improve renal calcium clearance, but the amount and rate must reflect heart and kidney function. Loop diuretics are not routine calcium-lowering therapy and are generally reserved for fluid overload after adequate volume has been restored. Dialysis is considered for selected severe cases with kidney failure, refractory disease, or inability to tolerate fluids." },
        { heading: "Match onset to the clinical need", body: "Calcitonin acts rapidly but loses effect through tachyphylaxis, so the Endocrine Society limits its use in severe hypercalcemia of malignancy to 48 to 72 hours. IV bisphosphonates and denosumab reduce osteoclast-mediated calcium release more slowly. The guideline recommends an IV bisphosphonate or denosumab for adults with hypercalcemia of malignancy and suggests denosumab over an IV bisphosphonate, while recognizing low-certainty evidence." },
        { heading: "Treat the source", body: "Calcitriol-mediated hypercalcemia may respond to glucocorticoids. Primary hyperparathyroidism may require surgery after stabilization. Hypercalcemia related to medication or supplements requires withdrawal and reassessment. Antiresorptive therapy can produce hypocalcemia, especially with vitamin D deficiency or severe kidney impairment, so mineral status and organ function must be followed." },
      ],
      keyPoints: ["Use PTH to organize the cause.", "Hydration is individualized, not a fixed-volume reflex.", "Calcitonin is a short bridge because tachyphylaxis develops.", "Antiresorptive choice requires kidney, dental, calcium, phosphate, magnesium, and vitamin D assessment."],
      check: { question: "Why is calcitonin paired with a longer-acting antiresorptive in severe hypercalcemia of malignancy?", choices: ["Calcitonin acts quickly but loses effect within days", "Calcitonin has no calcium effect", "Bisphosphonates act within seconds", "The combination prevents every recurrence"], answer: 0, rationale: "Calcitonin provides a rapid bridge while the slower antiresorptive effect develops, and its duration is limited by tachyphylaxis.", reviewHref: "#hypercalcemia" },
    },
    {
      slug: "hypophosphatemia",
      title: "Hypophosphatemia",
      summary: "Low phosphate may reflect redistribution, reduced absorption, or renal loss. Severe depletion can impair respiratory, cardiac, neurologic, and hematologic function.",
      concepts: ["Redistribution and refeeding", "Renal and gastrointestinal loss", "Oral versus IV replacement", "Potassium and sodium phosphate selection"],
      visual: "phosphate-balance",
      application: "Before replacing phosphate, identify why it is low, whether the patient is symptomatic, which accompanying cation is appropriate, and what kidney function permits.",
      lesson: [
        { heading: "Classify the mechanism", body: "Insulin, respiratory alkalosis, catecholamines and refeeding can shift phosphate into cells. Poor intake, malabsorption, antacids or binders can reduce phosphate availability. Hyperparathyroidism, tubular disorders and selected medications can increase renal loss; multiple mechanisms may coexist. Assess renal phosphate handling when the cause is unclear. Ferric carboxymaltose can increase biologically active FGF23 and promote renal phosphate wasting. Its current safety warning includes single and repeated exposure; use the label-specific monitoring and symptom assessment described below." },
        {"heading": "Review ferric carboxymaltose safety", "body": "The August 2026 Injectafer label carries a boxed warning for severe, prolonged symptomatic hypophosphatemia, including hospitalization, osteomalacia and fractures. It can occur after a single dose or repeated doses, with normal baseline phosphate and without apparent risk factors. Correct pre-existing hypophosphatemia before treatment. Check phosphate before a repeat course in at-risk patients and in anyone receiving a repeat course within three months; monitor patients at risk for chronic low phosphate. Evaluate new weakness, fatigue, muscle or bone pain, treat hypophosphatemia as indicated, and consider permanent discontinuation for severe symptomatic or persistent hypophosphatemia."},
        { heading: "Recognize severe depletion", body: "Severe acute hypophosphatemia can cause weakness, respiratory failure, rhabdomyolysis, encephalopathy, seizures or hemolysis and can impair cardiac function. These complications are not present in every patient, and neurological symptoms are uncommon presentations overall. Assess symptoms, duration, organ function and concurrent potassium, magnesium and calcium abnormalities alongside the phosphate result." },
        { heading: "Choose route and product deliberately", body: "Oral replacement is preferred for stable, less severe depletion when absorption is reliable. Severe symptomatic depletion can require IV replacement. The potassium-phosphates label also permits IV correction when oral or enteral replacement is not possible, insufficient or contraindicated; IV use is not limited to severity alone. Select the actual product and an individualized institutional plan. Potassium phosphate adds potassium and is contraindicated in hyperkalemia and severe renal impairment; sodium phosphate adds sodium and requires caution in renal impairment and sodium-retaining states. Sodium phosphate is not automatically safe: high sodium, high phosphate and low calcium are contraindications in its label. Review potassium, sodium, phosphate, calcium, kidney function, other intake, access, dilution and infusion rate. Concentrated phosphate injection must be diluted before administration." },
        { heading: "Monitor for overcorrection", body: "IV phosphate can cause hypocalcemia, hypotension, acute kidney injury, hyperphosphatemia and calcium-phosphate precipitation. Follow phosphate, calcium, potassium, magnesium and kidney function and reassess before additional doses. The potassium-phosphates label prohibits infusion with calcium-containing IV fluids; obtain a safe access plan rather than co-infusing through a shared calcium line. Separately compounded parenteral nutrition requires its own evaluation of calcium-phosphate ratios, concentrations, pH, temperature, compatibility and stability. That admixture assessment does not authorize shared-line replacement infusions. Dilution, product-specific concentration and rate limits, and repeat laboratory assessment protect against overcorrection; do not transfer one product’s instructions to another." },
      ],
      keyPoints: ["Refeeding and respiratory alkalosis can lower phosphate rapidly.", "Respiratory weakness is a dangerous manifestation.", "Choose sodium or potassium phosphate based on the entire electrolyte pattern.", "IV phosphate requires close mineral and kidney monitoring."],
      check: { question: "A patient with severe hypophosphatemia also has hyperkalemia and requires IV replacement. Which product characteristic matters most?", choices: ["Avoid potassium phosphate; assess a non-potassium plan and its sodium, renal and calcium limits", "Use potassium phosphate because phosphate is low", "Combine calcium and phosphate in one line", "Ignore kidney function"], answer: 0, rationale: "Potassium phosphates injection is contraindicated in hyperkalemia. Sodium phosphate avoids additional potassium but adds sodium and is not automatically suitable: review sodium, calcium, phosphate, kidney function and the actual label before choosing a replacement plan. Giving potassium solely because phosphate is low, co-infusing with calcium, or ignoring kidney function is unsafe.", reviewHref: "#hypophosphatemia" },
    },
    {
      slug: "hyperphosphatemia-ckd-mbd",
      title: "Hyperphosphatemia and CKD Mineral Bone Disorder",
      summary: "Hyperphosphatemia can follow reduced kidney excretion, acute cell breakdown, hormone disorders, or exogenous phosphate. In chronic kidney disease it becomes part of a dynamic disorder involving calcium, PTH, vitamin D, bone, and vascular calcification.",
      concepts: ["Acute phosphate load and cell breakdown", "Serial calcium, phosphate, and PTH trends", "Phosphate binders", "Secondary hyperparathyroidism and dialysis"],
      visual: "ckd-mbd",
      application: "Do not chase one phosphate result. Integrate serial calcium, phosphate, PTH, alkaline phosphatase, vitamin D, CKD stage, diet, binder adherence, dialysis, and calcification risk.",
      lesson: [
        { heading: "Recognize acute phosphate toxicity", body: "Tumor lysis, rhabdomyolysis, severe tissue injury, exogenous phosphate, kidney failure, and hypoparathyroidism can raise phosphate. Acute hyperphosphatemia may lower ionized calcium and promote calcium-phosphate deposition. Treat the cause, assess kidney function and ECG risk, and use dialysis when severe toxicity and kidney failure warrant it. Give calcium for clinically important hypocalcemic toxicity, but avoid indiscriminate calcium loading when precipitation risk is high." },
        { heading: "Treat a pattern, not a single number", body: "KDIGO recommends basing CKD mineral and bone disorder decisions on serial assessments of phosphate, calcium, and PTH considered together. The guideline suggests lowering elevated phosphate toward the normal range and avoiding hypercalcemia, while acknowledging that evidence for hard outcomes remains limited." },
        { heading: "Reduce absorbable phosphate", body: "Dietary counseling should consider source as well as total amount. Inorganic phosphate additives are highly absorbable, animal sources are generally more available than plant phytate, and excessive restriction can compromise nutrition. Phosphate binders work in the gastrointestinal tract and must be taken with meals or snacks that contain phosphate." },
        { heading: "Choose binders by patient risk", body: "Calcium acetate and calcium carbonate add calcium load. Sevelamer, lanthanum, ferric citrate, sucroferric oxyhydroxide, and other options differ in pill burden, adverse effects, iron effects, interactions, and cost. KDIGO suggests restricting calcium-based binder dose in adults receiving phosphate-lowering therapy, especially when calcium load or calcification risk is concerning. Aluminum binders are avoided for long-term use because aluminum can accumulate and cause toxicity." },
        { heading: "Coordinate hormone and dialysis therapy", body: "Persistent secondary hyperparathyroidism requires evaluation for hyperphosphatemia, hypocalcemia, high phosphate intake, and vitamin D deficiency. Vitamin D analogs and calcimimetics can alter calcium and phosphate in opposite directions and require monitoring. Dialysis removes phosphate incompletely between treatments, so adherence to dialysis, nutrition, and binder timing all matter." },
      ],
      keyPoints: ["Trend calcium, phosphate, and PTH together.", "Binder timing with phosphate-containing food is essential.", "Avoid unnecessary calcium loading.", "Protect nutrition while reducing highly absorbable phosphate sources."],
      check: { question: "Which plan best reflects KDIGO's approach to CKD mineral and bone disorder?", choices: ["Base treatment on serial calcium, phosphate, and PTH considered together", "Treat each phosphate result without context", "Use maximum calcium binder doses in every adult", "Ignore dietary phosphate source"], answer: 0, rationale: "CKD mineral and bone disorder is an integrated, evolving pattern rather than an isolated phosphate value.", reviewHref: "#hyperphosphatemia-ckd-mbd" },
    },
  ],
  references: [
    {"label": "Randomized trial of intravenous iron-induced hypophosphatemia (2018)", "href": "https://insight.jci.org/articles/view/124486"},
    {"label": "Endocrine Society review: Approach to the Hypophosphatemic Patient (2012)", "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3319220/"},
    {"label": "ASPEN refeeding syndrome consensus (2020), pathophysiology and adult response", "href": "https://aspenjournals.onlinelibrary.wiley.com/doi/full/10.1002/ncp.10474"},
    {"label": "FDA potassium phosphates injection prescribing information, revised August 2024", "href": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/212832s002lbl.pdf"},
    {"label": "DailyMed Hospira sodium phosphates injection label, PI revised January 2018; updated May 2026", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6f044d16-295e-43ff-72a3-b045c387bc5c"},
    { label: "KDIGO 2017 CKD mineral and bone disorder guideline update", href: "https://kdigo.org/guidelines/ckd-mbd/" },
    { label: "Endocrine Society guideline on hypercalcemia of malignancy", href: "https://www.endocrine.org/clinical-practice-guidelines/hypercalcemia" },
    { label: "Society for Endocrinology guidance on acute hypocalcemia", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5314808/" },
    { label: "Society for Endocrinology guidance on acute hypercalcemia", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5314807/" },
    { label: "FDA label: Calcium gluconate injection", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=13d7cfc9-ff7a-437e-8c21-d9709ac07d48&type=display" },
    { label: "FDA label: Zoledronic acid injection", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=1738a682-5903-b675-3a7a-61d299a6f248&type=display" },
    { label: "FDA label: Denosumab", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=628f0998-1206-4001-aeee-18133aa9f3bf" },
    { label: "FDA label: Palopegteriparatide", href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/216490Orig1s005lbl.pdf" },
    { label: "FDA label: Ferric carboxymaltose", href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=517b4a19-45b3-4286-9f6a-ced4e10447de&version=29" },
  ],
  questionBank: calciumPhosphorusHomeostasisQuestionBank,
};

const sourceReviewedCkdBinderLesson = calciumPhosphorusHomeostasisModule.submodules.find((lesson) => lesson.slug === "hyperphosphatemia-ckd-mbd");
const sourceReviewedCkdBinderBodies = {
  "Treat a pattern, not a single number": "For CKD G3a-G5D, KDIGO bases mineral and bone disorder treatment on serial phosphate, calcium, and PTH assessed together. Phosphate-lowering treatment is guided by progressively or persistently elevated phosphate, rather than started automatically for a normal value. Lower elevated phosphate toward the normal range and avoid hypercalcemia in adults. Evidence that a specific phosphate target improves survival or cardiovascular outcomes remains limited.",
  "Reduce absorbable phosphate": "Dietary counseling should consider phosphate source as well as total amount. Inorganic additives are highly absorbable; animal phosphate is generally more available than plant phytate. Reduce additive exposure while preserving adequate protein and overall nutrition. Binders act on phosphate in the gastrointestinal tract and are taken with phosphate-containing meals or snacks. If the meal and its absorption have already passed, a late catch-up dose does not bind that earlier phosphate; resume the prescribed dosing with the next meal or snack.",
  "Choose binders by patient risk": "Calcium acetate and calcium carbonate add calcium load. KDIGO suggests restricting calcium-based binder doses in adults with CKD G3a-G5D receiving phosphate-lowering treatment; the recommendation is not limited to patients already hypercalcemic. Calcification and total calcium exposure strengthen the reason to reassess the regimen. Sevelamer, lanthanum, ferric citrate, and sucroferric oxyhydroxide differ in formulation, gastrointestinal effects, interactions, iron exposure, pill burden, and cost. Ferric citrate can increase iron stores: monitor iron indices, including ferritin and transferrin saturation, and reassess concurrent iron therapy. Sucroferric oxyhydroxide has minimal iron absorption. Avoid long-term aluminum binders because aluminum can accumulate and cause toxicity.",
  "Coordinate hormone and dialysis therapy": "In CKD G3a-G5 not on dialysis, progressively rising or persistently elevated PTH prompts assessment of hyperphosphatemia, hypocalcemia, high phosphate intake, and vitamin D deficiency. KDIGO does not recommend routine calcitriol or vitamin D analog use in these adults; severe progressive hyperparathyroidism in CKD G4-G5 is a setting for selected use. In CKD G5D requiring PTH lowering, options include calcimimetics, calcitriol, vitamin D analogs, or combinations. Active vitamin D can raise calcium and phosphate, whereas calcimimetics can lower them; monitor the mineral response. Dialysis is part of phosphate control, and persistent hyperphosphatemia warrants review of dialytic removal together with diet, binder timing, and the regimen."
};
for (const section of sourceReviewedCkdBinderLesson.lesson) {
  if (Object.hasOwn(sourceReviewedCkdBinderBodies, section.heading)) section.body = sourceReviewedCkdBinderBodies[section.heading];
}
sourceReviewedCkdBinderLesson.lesson.splice(sourceReviewedCkdBinderLesson.lesson.findIndex((section) => section.heading === "Coordinate hormone and dialysis therapy"), 0, ...[
  {
    "heading": "Select a binder formulation deliberately",
    "body": "A lanthanum chewable tablet must be chewed or crushed completely before swallowing; do not swallow it intact. For difficulty chewing or poor dentition, consider the labeled oral powder formulation. Sprinkle Fosrenol powder on a small amount of applesauce or similar food and consume immediately; do not try to dissolve it in liquid. For swallowing disorders with sevelamer tablets, consider the oral suspension and follow its preparation instructions. Assess bowel obstruction and significant gastrointestinal symptoms before choosing either product. An oral powder formulation does not by itself establish suitability for a feeding tube; verify the specific product and intended route."
  },
  {
    "heading": "Check binder interactions before scheduling",
    "body": "Binders can reduce absorption of other oral medicines, including thyroid hormone and certain antibiotics. Reconcile the exact binder, other drug, formulation, meals, and monitoring requirements. Fosrenol labeling places oral quinolones at least 1 hour before or 4 hours after lanthanum, and thyroid hormone at least 2 hours before or after it with TSH monitoring. Renvela labeling places ciprofloxacin at least 2 hours before or 6 hours after sevelamer, and mycophenolate mofetil at least 2 hours before it. Other clinically important interactions may require separation and monitoring of response or drug concentrations. Use the instructions for the actual medicine pair rather than one interval for every binder and every oral drug."
  }
]);
calciumPhosphorusHomeostasisModule.references.push(...[
  {
    "label": "Fosrenol prescribing information: lanthanum tablets, powder, and interactions (August 2024)",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f10776b2-2c25-4343-aabe-68f302e5cb54"
  },
  {
    "label": "Renvela prescribing information: sevelamer suspension and interactions (March 2023)",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e6328460-a57b-450b-a48c-6dcd4b476360"
  }
]);

const sourceReviewedAcuteCalciumLesson = calciumPhosphorusHomeostasisModule.submodules.find((lesson) => lesson.slug === "hypocalcemia");
const sourceReviewedAcuteCalciumBodies = {
  "Recognize a calcium emergency": "Perioral or digital paresthesia, carpopedal spasm, tetany, laryngospasm, seizure, prolonged QT, and arrhythmia can signal clinically important hypocalcemia. Severity depends on symptoms and the speed of decline as well as the calcium result. Severe symptomatic hypocalcemia is an emergency: begin urgent monitored treatment while investigating the cause rather than waiting for every etiologic result. After thyroid or parathyroid surgery, disrupted parathyroid function is an important possible cause; assess calcium, phosphate, PTH, magnesium, vitamin D, and kidney function together.",
  "Administer IV calcium safely": "Calcium gluconate injection is labeled for acute symptomatic hypocalcemia in adults and children; its long-term safety has not been established. The reviewed 10% gluconate product contains 100 mg of the salt but only 9.3 mg (0.465 mEq) elemental calcium per mL. The reviewed 10% calcium chloride product contains 27 mg elemental calcium per mL, so equal volumes do not deliver equal calcium. Check the exact product, salt-versus-elemental units, dilution, route, and rate before administration. Gluconate requires dilution and a secure IV line with controlled administration. Chloride is more irritating; emergency guidance specifies central access, and its label specifies slow infusion in a central or deep vein rather than a bolus. Renal impairment requires cautious dosing and closer monitoring; do not apply a standard large-volume emergency infusion automatically to a patient with end-stage kidney failure or receiving dialysis.",
  "Prevent treatment complications": "Monitor symptoms, ECG, calcium, magnesium, phosphate, kidney function, and the IV site during stabilization. Rapid IV calcium can cause hypotension, bradycardia, arrhythmia, syncope, or cardiac arrest. Both products can cause tissue injury and calcinosis; stop administration at the affected site if extravasation or calcinosis develops. Calcium gluconate labeling calls for calcium measurements every 4 to 6 hours during intermittent infusions and every 1 to 4 hours during continuous infusion; renal impairment has a separate every-4-hour instruction. Review cardiac glycosides such as digoxin: avoid concomitant IV calcium when possible, and use close ECG monitoring if necessary. Follow the actual product and patient-specific plan rather than one monitoring schedule for every setting."
};
for (const section of sourceReviewedAcuteCalciumLesson.lesson) {
  if (Object.hasOwn(sourceReviewedAcuteCalciumBodies, section.heading)) section.body = sourceReviewedAcuteCalciumBodies[section.heading];
}
sourceReviewedAcuteCalciumLesson.lesson.push(...[
  {
    "heading": "Review compatibility by drug and age",
    "body": "Calcium gluconate must not be mixed with bicarbonate or phosphate-containing fluids because precipitation can occur. Do not mix it with ceftriaxone or administer the two simultaneously through a Y-site at any age. In neonates 28 days old or younger, concomitant ceftriaxone and IV calcium-containing products are contraindicated. For patients older than 28 days, sequential administration is permitted only with thorough line flushing between infusions using compatible fluid. A separate line does not remove the neonatal contraindication. Review the entire infusion schedule and exact product compatibility before treatment."
  },
  {
    "heading": "Separate PTH replacement from emergency rescue",
    "body": "Palopegteriparatide (Yorvipath) is an individualized PTH replacement option for adults with hypoparathyroidism. It was not studied for acute post-surgical hypoparathyroidism and does not replace urgent IV calcium for a hypocalcemic emergency. Check serum calcium 7 to 10 days after the first dose and after changes in Yorvipath, active vitamin D, or calcium supplements; during maintenance, check at least every 4 to 6 weeks and as indicated by symptoms. Serious hypercalcemia is most likely when starting or increasing the dose, while abrupt discontinuation increases the risk of serious hypocalcemia. Monitor symptoms daily and coordinate changes in replacement, calcium, and active vitamin D with the treating team."
  }
]);
calciumPhosphorusHomeostasisModule.references.push(...[
  {
    "label": "Calcium chloride prescribing information: concentration and IV safety (December 2025)",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7649c84f-f1c2-4169-962d-ccbac56523a9"
  },
  {
    "label": "Yorvipath prescribing information: adult hypoparathyroidism and calcium monitoring (October 2025)",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a1fa23fd-c434-443e-9a17-5750578c8602"
  },
  {
    "label": "Prolia prescribing information: severe hypocalcemia and advanced CKD",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=49e5afe9-a0c7-40c4-af9f-f287a80c5c88"
  }
]);

const sourceReviewedMalignancyCalciumLesson = calciumPhosphorusHomeostasisModule.submodules.find((lesson) => lesson.slug === "hypercalcemia");
const sourceReviewedMalignancyCalciumBodies = {
  "Determine severity and mechanism": "Hypercalcemia can cause polyuria, dehydration, kidney injury, constipation, weakness, cognitive change, shortened QT, and dysrhythmia. Assess symptoms, speed of calcium rise, volume status, ECG, kidney function, phosphate, PTH, and medication or supplement exposure. In adult hypercalcemia of malignancy, the Endocrine Society classifies calcium above 14 mg/dL (3.5 mmol/L) as severe, but symptoms and rapid change also matter. Interpret PTH in relation to calcium: high or inappropriately unsuppressed PTH points toward a PTH-dependent cause, while suppressed PTH prompts evaluation for malignancy and other non-PTH mechanisms. Familial hypocalciuric hypercalcemia can resemble primary hyperparathyroidism biochemically; the PTH result alone does not establish the diagnosis.",
  "Match onset to the clinical need": "For adults with severe hypercalcemia of malignancy, the Endocrine Society suggests calcitonin together with an IV bisphosphonate or denosumab as initial treatment. Calcitonin acts within hours but develops tachyphylaxis; limit it to 48 to 72 hours. It is a bridge while a slower antiresorptive effect develops, not a durable treatment by itself. The guideline table lists IV pamidronate and zoledronic acid onset at about 48 to 72 hours and denosumab at about 3 to 10 days; do not assume that every agent has the same response time. The guideline strongly recommends an IV bisphosphonate or denosumab for adult malignancy-associated hypercalcemia, and conditionally suggests denosumab over an IV bisphosphonate. The comparative evidence is very low certainty and largely indirect, so the preference does not establish superiority for every patient or every calcium disorder.",
  "Treat the source": "Calcitriol-mediated hypercalcemia in lymphoma or granulomatous disease may respond to glucocorticoids, which reduce active vitamin D production. For calcitriol-associated malignancy, persistent severe or symptomatic hypercalcemia despite glucocorticoids is a setting where the Endocrine Society suggests adding an IV bisphosphonate or denosumab. Severe primary hyperparathyroidism that responds poorly to other measures may require parathyroidectomy after acute assessment and stabilization. Review medicines and supplements that can contribute to high calcium and remove or adjust the provoking exposure as appropriate. Treating the underlying malignancy is essential to prevent recurrence; lowering calcium alone does not treat the cancer."
};
for (const section of sourceReviewedMalignancyCalciumLesson.lesson) {
  if (Object.hasOwn(sourceReviewedMalignancyCalciumBodies, section.heading)) section.body = sourceReviewedMalignancyCalciumBodies[section.heading];
}
sourceReviewedMalignancyCalciumLesson.lesson.push(...[
  {
    "heading": "Reconcile the product and indication before dosing",
    "body": "Hypercalcemia regimens differ from osteoporosis regimens even when the active ingredient is the same. For malignancy-associated hypercalcemia, zoledronic acid labeling specifies a maximum 4 mg IV dose infused over at least 15 minutes, with creatinine assessment before treatment; wait at least 7 days before considering retreatment to allow the initial response. The book contrasts this with Reclast 5 mg yearly for osteoporosis treatment. Xgeva labeling covers hypercalcemia of malignancy refractory to bisphosphonates: 120 mg subcutaneously every 4 weeks, with additional 120 mg doses on days 8 and 15 in the first month. The book contrasts this with Prolia 60 mg every 6 months for osteoporosis. The guideline suggestion favoring denosumab in adult hypercalcemia of malignancy has broader scope than the Xgeva labeled refractory indication. Verify the actual product, indication, regimen, and clinical plan; do not substitute an osteoporosis dose or duplicate products containing the same active ingredient."
  },
  {
    "heading": "Plan safety and reassess recurrent disease",
    "body": "Before and after antiresorptive therapy, assess kidney function, calcium, phosphate, magnesium, vitamin D status, and oral health. Denosumab can cause severe hypocalcemia, especially with advanced kidney impairment or inadequate mineral supplementation. IV bisphosphonates can worsen renal function. Zoledronic acid labeling distinguishes the hypercalcemia regimen from its creatinine-clearance-based dose table for myeloma or bone metastases: the hypercalcemia section does not require adjustment for mild-to-moderate impairment with serum creatinine below 4.5 mg/dL, while severe impairment requires a risk-benefit assessment. The Endocrine Society separately advises renal dosing and longer IV bisphosphonate infusions for HCM with creatinine clearance below 60 mL/min. Reconcile these indication-specific instructions and renal measures with the treating team. Monitor the calcium response and treatment complications rather than judging success from an early value alone. For refractory or recurrent malignancy-associated hypercalcemia despite an IV bisphosphonate, the guideline suggests denosumab; evidence for the reverse sequence is lacking. Coordinate oncology treatment of the cause."
  }
]);
calciumPhosphorusHomeostasisModule.references.push(...[
  {
    "label": "Endocrine Society full clinical guideline: adult hypercalcemia of malignancy (2022; published 2023)",
    "href": "https://academic.oup.com/jcem/article/108/3/507/6916871"
  }
]);

const sourceReviewedMineralInterpretationLesson = calciumPhosphorusHomeostasisModule.submodules.find((lesson) => lesson.slug === "calcium-measurement");
sourceReviewedMineralInterpretationLesson.lesson.find((section) => section.heading === "Let PTH organize the differential").body = "Interpret calcium and PTH together. Hypercalcemia with an elevated or inappropriately normal PTH suggests a PTH-dependent process such as primary or tertiary hyperparathyroidism. Familial hypocalciuric hypercalcemia can resemble that biochemical pair, so PTH alone does not establish the diagnosis. Suppressed PTH with high calcium shifts attention toward malignancy, vitamin D excess, granulomatous disease, medicines, or other non-PTH causes. For unexplained hypocalcemia, confirm calcium and assess magnesium, phosphate, kidney function, PTH, and vitamin D together; the evaluation should accompany urgent treatment when clinically indicated.";
calciumPhosphorusHomeostasisModule.submodules.find((lesson) => lesson.slug === "mineral-regulation").lesson.push({
  "heading": "Contrast PTH and FGF23 before treating phosphate",
  "body": "PTH and FGF23 both promote renal phosphate excretion, but their active-vitamin-D effects differ. Endogenous PTH promotes renal calcium reabsorption, phosphate excretion, and active vitamin D synthesis; calcitriol then increases intestinal absorption of calcium and phosphate. FGF23 decreases proximal tubular phosphate reabsorption and reduces calcitriol production. In CKD, elevated FGF23 and reduced calcitriol can contribute to secondary PTH elevation. Read calcium, phosphate, PTH, kidney function, and vitamin D context together. Early phosphate-regulatory changes do not by themselves establish a benefit from phosphate binders: KDIGO bases phosphate-lowering decisions in CKD on progressively or persistently elevated serum phosphate."
});

calciumPhosphorusHomeostasisModule.submodules.find((lesson) => lesson.slug === "hyperphosphatemia-ckd-mbd").lesson.push({
  "heading": "Recognize aluminum accumulation beyond phosphate control",
  "body": "Avoid long-term aluminum-containing phosphate binders in CKD. Reduced kidney clearance can allow absorbed aluminum to accumulate even though the binder lowers phosphate in the gut. The toxicity pattern includes neurologic injury, bone disease, and microcytic anemia that can occur without iron deficiency. KDIGO recommends avoiding long-term aluminum binders; the earlier NKF KDOQI guideline describes the neurologic, skeletal, and hematologic manifestations. A phosphate-lowering effect does not establish safety for continued exposure."
});
calciumPhosphorusHomeostasisModule.references.push({
  "label": "NKF KDOQI aluminum overload and toxicity in CKD (2003; historical toxicity guidance)",
  "href": "https://kidneyfoundation.cachefly.net/professionals/KDOQI/guidelines_bone/guide11.htm"
});

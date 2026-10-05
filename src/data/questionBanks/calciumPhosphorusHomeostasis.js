const q = (id, question, choices, answer, rationale, lesson, extra = {}) => ({
  id: `calcium-phosphorus-${id}`,
  question,
  choices,
  answer,
  rationale,
  reviewHref: `#${lesson}`,
  ...extra,
});

const core = [
  q("001", "Which extracellular calcium fraction directly activates the calcium-sensing receptor?", ["Ionized calcium", "Albumin-bound calcium", "Calcium bound to citrate only", "Total calcium regardless of binding"], 0, "Ionized calcium is the biologically active fraction sensed by the calcium-sensing receptor.", "mineral-regulation"),
  q("002", "What is the expected renal phosphate response to increased PTH?", ["Reduced proximal phosphate reabsorption", "Complete phosphate retention", "Increased calcitriol suppression without phosphaturia", "No change in phosphate handling"], 0, "PTH reduces proximal tubular phosphate reabsorption and promotes phosphaturia.", "mineral-regulation"),
  q("003", "Which vitamin D measurement best reflects body vitamin D stores in routine evaluation?", ["25-hydroxyvitamin D", "1,25-dihydroxyvitamin D", "Unbound cholecalciferol", "Urine calcitriol"], 0, "25-hydroxyvitamin D is the principal circulating marker used to assess stores.", "mineral-regulation"),
  q("004", "How does calcitriol affect intestinal mineral handling?", ["It increases absorption of calcium and phosphate", "It blocks calcium absorption", "It increases phosphate loss in stool only", "It has no intestinal action"], 0, "Calcitriol promotes intestinal absorption of both minerals.", "mineral-regulation"),
  q("005", "Which action is most characteristic of FGF23?", ["Promote renal phosphate excretion and suppress calcitriol", "Increase renal phosphate reabsorption", "Stimulate PTH as its only effect", "Raise ionized calcium directly within seconds"], 0, "FGF23 is phosphaturic and suppresses renal calcitriol formation.", "mineral-regulation"),
  q("006", "Why can severe magnesium deficiency cause hypocalcemia?", ["It can impair PTH secretion and tissue response", "It always increases calcitriol", "It releases calcium from albumin", "It permanently destroys bone"], 0, "Magnesium is required for normal PTH release and action.", "mineral-regulation"),
  q("007", "Which pattern is most consistent with secondary hyperparathyroidism in advanced CKD?", ["Phosphate retention, reduced calcitriol effect, and elevated PTH", "Suppressed PTH with isolated hypercalcemia", "Low phosphate with autonomous PTH suppression", "Normal mineral physiology in every stage"], 0, "CKD can produce phosphate retention, reduced calcitriol, hypocalcemic pressure, and compensatory PTH elevation.", "mineral-regulation"),
  q("008", "Which treatment principle is essential in chronic hypoparathyroidism?", ["Control symptoms while avoiding hypercalciuria", "Normalize calcium by maximizing urinary calcium", "Stop kidney monitoring after symptoms improve", "Use IV calcium as lifelong maintenance"], 0, "Chronic therapy balances symptom and calcium control against hypercalciuria, nephrolithiasis, and kidney injury.", "hypocalcemia"),
  q("009", "What does sustained PTH exposure generally do to bone mineral flux?", ["It favors bone resorption and mineral release", "It prevents all remodeling", "It removes phosphate without affecting bone", "It converts calcium into magnesium"], 0, "Sustained PTH signaling can increase bone resorption and release calcium and phosphate.", "mineral-regulation"),

  q("010", "Why can total calcium be low when ionized calcium is normal?", ["Low albumin reduces the protein-bound fraction", "PTH cannot be measured", "Ionized calcium is part of albumin", "Phosphate always raises albumin"], 0, "A lower albumin concentration lowers bound calcium and therefore total calcium without necessarily lowering the active fraction.", "calcium-measurement"),
  q("011", "How can acute alkalemia affect ionized calcium?", ["It can lower ionized calcium by increasing albumin binding", "It always raises ionized calcium", "It removes albumin from plasma", "It has no effect on binding"], 0, "Higher pH increases calcium binding to albumin and can lower the ionized fraction.", "calcium-measurement"),
  q("012", "When is direct ionized calcium particularly valuable?", ["Critical illness or abnormal pH when an accurate result changes care", "Every stable patient with normal albumin", "Only when LDL is high", "Only after calcium treatment is complete"], 0, "Binding abnormalities make total and corrected calcium less dependable in critical illness and abnormal pH.", "calcium-measurement"),
  q("013", "Hypercalcemia with an elevated PTH most strongly suggests which mechanism?", ["PTH-dependent hypercalcemia", "Calcitriol-independent PTH suppression", "Laboratory normality", "Isolated phosphate deficiency"], 0, "PTH should be suppressed during hypercalcemia, so an elevated value is inappropriate and indicates a PTH-dependent process.", "calcium-measurement"),
  q("014", "Hypercalcemia with a suppressed PTH should prompt evaluation for what?", ["Malignancy, vitamin D mechanisms, medications, and other non-PTH causes", "Primary hypoparathyroidism only", "Magnesium deficiency only", "An isolated low albumin"], 0, "Suppressed PTH appropriately redirects the differential away from primary PTH excess.", "calcium-measurement"),
  q("015", "Which laboratory set best begins evaluation of unexplained hypocalcemia?", ["Ionized or confirmed calcium, magnesium, phosphate, PTH, kidney function, and vitamin D", "Troponin and LDL only", "Urine glucose only", "Hemoglobin alone"], 0, "The set distinguishes binding, hormone, mineral, renal, and vitamin D mechanisms.", "calcium-measurement"),
  q("016", "What is the central limitation of an albumin-corrected calcium equation?", ["It estimates rather than directly measures ionized calcium", "It cannot use arithmetic", "It is accurate only when albumin is exactly 4", "It measures phosphate instead"], 0, "The correction is an approximation and can misclassify patients in important clinical settings.", "calcium-measurement"),
  q("017", "Which pattern suggests familial hypocalciuric hypercalcemia rather than primary hyperparathyroidism?", ["Mild lifelong hypercalcemia with relatively low urinary calcium", "Severe hypocalcemia after thyroid surgery", "Suppressed PTH with high PTH-related peptide", "High urinary calcium after loop diuresis only"], 0, "FHH is commonly mild and associated with low renal calcium excretion relative to the serum calcium.", "calcium-measurement"),

  q("018", "Which ECG change is classically associated with hypocalcemia?", ["QT prolongation", "QT shortening", "Fixed ST elevation", "Delta wave in every case"], 0, "Hypocalcemia can prolong ventricular repolarization and the QT interval.", "hypocalcemia"),
  q("019", "Which symptom makes hypocalcemia an immediate emergency?", ["Laryngospasm", "Stable mild fatigue only", "Chronic nail change", "Asymptomatic low albumin"], 0, "Laryngospasm threatens the airway and requires urgent treatment.", "hypocalcemia"),
  q("020", "What is the FDA-labeled indication for calcium gluconate injection?", ["Acute symptomatic hypocalcemia", "Long-term osteoporosis monotherapy", "Asymptomatic hyperphosphatemia", "Chronic hypercalcemia"], 0, "Current labeling indicates IV calcium gluconate for acute symptomatic hypocalcemia.", "hypocalcemia"),
  q("021", "How much elemental calcium is present in each mL of 10 percent calcium gluconate injection?", ["9.3 mg", "100 mg", "1 mg", "93 mg"], 0, "The current label states 9.3 mg, or 0.465 mEq, elemental calcium per mL.", "hypocalcemia"),
  q("022", "Why is calcium chloride generally restricted to central access for replacement?", ["It is more irritating and extravasation can cause severe tissue injury", "It contains no elemental calcium", "It must be given orally", "It cannot affect the heart"], 0, "Calcium chloride is more irritating to veins and poses greater tissue injury risk with extravasation.", "hypocalcemia"),
  q("023", "Which coexisting abnormality can make calcium replacement appear ineffective?", ["Hypomagnesemia", "Mild hypernatremia only", "High HDL", "Low uric acid"], 0, "Magnesium deficiency can reduce PTH secretion and action.", "hypocalcemia"),
  q("024", "Why might hypoparathyroidism require calcitriol rather than relying only on nutritional vitamin D?", ["Low PTH reduces renal activation of vitamin D", "Calcitriol blocks calcium absorption", "Nutritional vitamin D contains phosphate", "PTH is required for intestinal glucose absorption"], 0, "Without adequate PTH signaling, renal generation of active vitamin D may be insufficient.", "hypocalcemia"),
  q("025", "Which administration practice is unsafe with IV calcium?", ["Co-infusing with an incompatible bicarbonate or phosphate solution", "Using a secure IV line", "Monitoring the ECG during urgent therapy", "Repeating calcium measurements"], 0, "Calcium can precipitate with bicarbonate or phosphate and requires compatibility review.", "hypocalcemia"),
  q("026", "What should accompany urgent IV calcium administration?", ["ECG, symptoms, calcium, IV site, and cause monitoring", "No monitoring after the first dose", "LDL testing only", "Routine discharge before reassessment"], 0, "Therapeutic response, arrhythmia, extravasation, and the underlying mechanism all require follow-up.", "hypocalcemia"),

  q("027", "Which pair accounts for most adult hypercalcemia?", ["Primary hyperparathyroidism and malignancy", "Hypoparathyroidism and diarrhea", "Iron deficiency and asthma", "Migraine and dermatitis"], 0, "Primary hyperparathyroidism and malignancy are the dominant causes.", "hypercalcemia"),
  q("028", "Which ECG effect can occur with hypercalcemia?", ["QT shortening", "Universal QT prolongation", "Atrial standstill in every case", "No conduction effect"], 0, "Hypercalcemia can shorten the QT interval and cause dysrhythmia when severe.", "hypercalcemia"),
  q("029", "What is the first fluid principle in volume-depleted hypercalcemia?", ["Restore intravascular volume with an individualized isotonic crystalloid plan", "Give a loop diuretic before assessing volume", "Restrict all fluid", "Use dextrose water for shock"], 0, "Volume restoration improves perfusion and renal calcium clearance, but heart and kidney function shape the prescription.", "hypercalcemia"),
  q("030", "Why are loop diuretics not routine calcium-lowering treatment?", ["They can worsen volume depletion and are mainly used if fluid overload develops", "They always raise calcium", "They block PTH measurement", "They cannot produce urine"], 0, "Routine forced diuresis adds risk and does not replace adequate volume assessment.", "hypercalcemia"),
  q("031", "How long should calcitonin generally be limited in severe hypercalcemia of malignancy?", ["48 to 72 hours", "Six months", "One year", "A single annual dose"], 0, "The Endocrine Society limits use because tachyphylaxis develops rapidly.", "hypercalcemia"),
  q("032", "Which therapy does the Endocrine Society recommend for adults with hypercalcemia of malignancy?", ["An IV bisphosphonate or denosumab", "Calcitonin alone indefinitely", "Calcium supplementation", "No antiresorptive therapy"], 0, "The guideline recommends an IV bisphosphonate or denosumab and suggests denosumab over an IV bisphosphonate.", "hypercalcemia"),
  q("033", "Which treatment is most directly matched to calcitriol-mediated hypercalcemia?", ["Glucocorticoid therapy", "More calcitriol", "Calcium chloride", "Desmopressin"], 0, "Glucocorticoids reduce calcitriol production in lymphoma and granulomatous mechanisms.", "hypercalcemia"),
  q("034", "Which factor increases the risk of profound hypocalcemia after denosumab?", ["Advanced kidney impairment and uncorrected mineral deficiency", "High albumin alone", "A normal magnesium level", "Mild isolated hypernatremia"], 0, "Severe kidney disease and deficient calcium or vitamin D increase post-antiresorptive hypocalcemia risk.", "hypercalcemia"),
  q("035", "When may dialysis be considered for hypercalcemia?", ["Severe refractory disease with kidney failure or inability to tolerate fluids", "Every mild asymptomatic case", "Only after calcium normalizes", "Never"], 0, "Dialysis is a selected rescue strategy when conventional clearance and fluid therapy are unsafe or ineffective.", "hypercalcemia"),

  q("036", "Which mechanism commonly lowers phosphate during refeeding?", ["Insulin-driven intracellular uptake", "Immediate renal failure", "Complete intestinal blockade by glucose", "PTH suppression alone"], 0, "Carbohydrate delivery raises insulin and shifts phosphate, potassium, and magnesium into cells.", "hypophosphatemia"),
  q("037", "Why can severe hypophosphatemia cause respiratory failure?", ["ATP depletion weakens respiratory muscles", "It always causes bronchospasm", "It raises hemoglobin oxygen affinity only", "It blocks albumin production immediately"], 0, "Phosphate depletion impairs cellular energy and muscle function.", "hypophosphatemia"),
  q("038", "Which presentation supports IV rather than oral phosphate replacement?", ["Severe symptomatic depletion with unreliable enteral absorption", "Stable mild asymptomatic depletion with a working gut", "Normal phosphate", "Hyperphosphatemia"], 0, "IV therapy is reserved for severe, symptomatic, or enterally inaccessible cases under protocol.", "hypophosphatemia"),
  q("039", "Why must potassium be reviewed before selecting potassium phosphate?", ["The product adds clinically important potassium", "Potassium phosphate contains no phosphate", "Potassium never changes in illness", "It prevents all arrhythmias"], 0, "The accompanying cation can worsen hyperkalemia or help correct a concurrent deficit.", "hypophosphatemia"),
  q("040", "Which complication can follow overly aggressive IV phosphate?", ["Hypocalcemia and calcium-phosphate precipitation", "Permanent hypermagnesemia in every patient", "Isolated low LDL", "Respiratory alkalosis in every patient"], 0, "Rapid phosphate administration can lower calcium and promote precipitation and kidney injury.", "hypophosphatemia"),
  q("041", "Which iron product has a current label warning for serious symptomatic hypophosphatemia, especially after repeated exposure?", ["Ferric carboxymaltose", "Ferrous sulfate", "Iron sucrose in every patient", "Oral carbonyl iron"], 0, "Ferric carboxymaltose can increase FGF23 activity and cause renal phosphate wasting, osteomalacia, or fracture after repeated exposure.", "hypophosphatemia"),
  q("042", "Which statement best describes palopegteriparatide in hypoparathyroidism?", ["It is an adult PTH replacement option that requires individualized calcium monitoring", "It is the first treatment for an acute hypocalcemic seizure", "It eliminates all need for calcium assessment", "It is approved only for hyperparathyroidism"], 0, "Palopegteriparatide is approved for adults with hypoparathyroidism, but it is not an acute rescue treatment and can cause hypercalcemia or hypocalcemia during titration.", "hypocalcemia"),

  q("043", "How does KDIGO recommend making CKD mineral and bone disorder treatment decisions?", ["Use serial calcium, phosphate, and PTH assessments together", "Use a single phosphate result", "Ignore calcium", "Treat PTH without checking modifiable factors"], 0, "The guideline emphasizes integrated serial assessment.", "hyperphosphatemia-ckd-mbd"),
  q("044", "Which dietary phosphate source is generally most absorbable?", ["Inorganic phosphate additive", "Plant phytate", "Unprocessed legume phosphate only", "Fiber"], 0, "Inorganic additives are highly bioavailable and can contribute a large hidden load.", "hyperphosphatemia-ckd-mbd"),
  q("045", "When should most phosphate binders be taken?", ["With phosphate-containing meals or snacks", "Only at bedtime without food", "One week after the meal", "Only when serum calcium is measured"], 0, "Binders act within the gastrointestinal tract on dietary phosphate.", "hyperphosphatemia-ckd-mbd"),
  q("046", "What is a major limitation of calcium-based phosphate binders?", ["They increase calcium load and can contribute to hypercalcemia or calcification risk", "They contain no binding ingredient", "They always cause hypocalcemia", "They work only intravenously"], 0, "The added calcium burden is a major selection concern.", "hyperphosphatemia-ckd-mbd"),
  q("047", "Which binder can also increase iron indices?", ["Ferric citrate", "Sevelamer carbonate", "Calcium carbonate only", "Lanthanum carbonate"], 0, "Ferric citrate contains iron and can alter iron measures, requiring monitoring.", "hyperphosphatemia-ckd-mbd"),
  q("048", "Which modifiable factors should be assessed when PTH rises in CKD?", ["Phosphate, calcium, phosphate intake, and vitamin D status", "Hair color and height only", "PTH alone", "Serum sodium only"], 0, "Secondary hyperparathyroidism should be evaluated in the context of its mineral and vitamin D drivers.", "hyperphosphatemia-ckd-mbd"),
  q("049", "Why can a patient remain hyperphosphatemic despite receiving a binder prescription?", ["Poor timing, missed doses, dietary additives, inadequate dialysis, or insufficient regimen", "Binders work after absorption", "Phosphate does not come from food", "Dialysis removes all phosphate permanently"], 0, "Effective therapy depends on exposure, timing, intake, and dialysis as well as the selected drug.", "hyperphosphatemia-ckd-mbd"),
  q("050", "Why are aluminum phosphate binders avoided for long-term therapy?", ["Aluminum can accumulate and cause neurologic, bone, and hematologic toxicity", "They contain no phosphate-binding activity", "They always cause immediate hypophosphatemia", "They permanently suppress PTH after one dose"], 0, "Long-term aluminum exposure can accumulate, especially in kidney disease, and cause serious toxicity.", "hyperphosphatemia-ckd-mbd"),
];

const correctedCalciumCases = [
  [7.2, 2.0], [8.0, 2.5], [9.1, 3.0], [10.4, 2.2], [6.8, 1.5],
  [8.7, 3.4], [9.6, 2.8], [7.9, 1.8], [10.8, 3.1], [8.3, 2.3],
].map(([total, albumin], index) => {
  const corrected = Math.round((total + 0.8 * (4 - albumin)) * 10) / 10;
  return q(`06${index}`, `Using total calcium + 0.8(4 - albumin), what is the estimated corrected calcium for total calcium ${total} mg/dL and albumin ${albumin} g/dL?`, [`${corrected} mg/dL`, `${total} mg/dL`, `${Math.round((total - 0.8 * (4 - albumin)) * 10) / 10} mg/dL`, `${Math.round((total + (4 - albumin)) * 10) / 10} mg/dL`], 0, `The estimate is ${total} + 0.8(${4 - albumin}) = ${corrected} mg/dL. It does not replace ionized calcium when precision matters.`, "calcium-measurement");
});

const elementalCalciumCases = [5, 10, 15, 20, 25, 30, 35, 40, 50, 100].map((volume, index) => {
  const elemental = Math.round(volume * 9.3 * 10) / 10;
  return q(`07${index}`, `A calcium gluconate solution contains 9.3 mg elemental calcium per mL. How much elemental calcium is present in ${volume} mL?`, [`${elemental} mg`, `${volume * 100} mg`, `${Math.round(volume * 0.465 * 10) / 10} mg`, `${Math.round(elemental / 10) / 10} mg`], 0, `${volume} mL multiplied by 9.3 mg/mL equals ${elemental} mg elemental calcium. This is a content calculation, not an administration recommendation.`, "hypocalcemia");
});

const phosphateDoseCases = [[50,0.08],[62,0.08],[70,0.08],[85,0.08],[100,0.08],[50,0.16],[62,0.16],[70,0.16],[85,0.16],[100,0.16]].map(([weight, factor], index) => {
  const amount = Math.round(weight * factor * 100) / 100;
  return q(`08${index}`, `A local protocol specifies ${factor} mmol/kg for a hypothetical phosphate replacement calculation. What amount corresponds to ${weight} kg before all clinical adjustments?`, [`${amount} mmol`, `${Math.round(weight / factor * 10) / 10} mmol`, `${weight + factor} mmol`, `${Math.round(amount * 10) / 10} mEq calcium`], 0, `${weight} kg multiplied by ${factor} mmol/kg equals ${amount} mmol. Product, cation, kidney function, route, rate, and monitoring still require protocol review.`, "hypophosphatemia");
});

const diagnosticCases = [
  ["Calcium 11.8 mg/dL with an elevated PTH and recurrent nephrolithiasis.", "PTH-dependent hypercalcemia", "PTH should be suppressed during hypercalcemia, so elevation supports primary or tertiary hyperparathyroid physiology.", "calcium-measurement"],
  ["Calcium 13.2 mg/dL with suppressed PTH and a lung mass.", "Evaluate PTH-related peptide and other malignancy mechanisms", "Suppressed PTH redirects the differential toward malignancy and other non-PTH causes.", "hypercalcemia"],
  ["A patient develops paresthesia and carpopedal spasm during acute respiratory alkalosis, with normal total calcium.", "Measure ionized calcium", "Alkalemia can lower ionized calcium through increased albumin binding despite a normal total value.", "calcium-measurement"],
  ["After thyroidectomy, a patient has falling calcium, low PTH, and prolonged QT.", "Urgent monitored calcium with postoperative hypoparathyroidism management", "The pattern supports clinically important hypoparathyroidism and electrical risk.", "hypocalcemia"],
  ["A malnourished patient begins nutrition and develops weakness with a rapid phosphate fall.", "Refeeding-related intracellular phosphate shift", "Insulin-driven uptake during refeeding can rapidly deplete extracellular phosphate.", "hypophosphatemia"],
  ["A patient has hypocalcemia that persists despite calcium, with magnesium 0.7 mg/dL.", "Correct severe magnesium deficiency", "Low magnesium can impair PTH secretion and response.", "hypocalcemia"],
  ["A patient with CKD has rising phosphate, calcium at the upper limit, and extensive vascular calcification while taking calcium acetate.", "Reassess calcium load and phosphate-lowering strategy", "KDIGO supports restricting calcium-based binder exposure when calcium load and calcification risk are concerns.", "hyperphosphatemia-ckd-mbd"],
  ["A patient with lymphoma has suppressed PTH, high calcitriol, and hypercalcemia.", "Use a glucocorticoid-directed strategy and escalate antiresorptive therapy if needed", "Calcitriol-mediated malignancy hypercalcemia is glucocorticoid responsive.", "hypercalcemia"],
  ["A patient with severe hypophosphatemia has potassium 5.8 mEq/L and oliguric kidney injury.", "Avoid automatic potassium phosphate and obtain specialist protocol guidance", "The cation and impaired elimination make routine replacement hazardous.", "hypophosphatemia"],
  ["A dialysis patient takes sevelamer two hours after meals and remains hyperphosphatemic.", "Move binder dosing to phosphate-containing meals and reassess the full regimen", "Binders must be present in the gastrointestinal tract with dietary phosphate.", "hyperphosphatemia-ckd-mbd"],
].map(([caseText, correct, rationale, lesson], index) => q(`09${index}`, `${caseText} Which interpretation or action is most defensible?`, [correct, "Treat the isolated number without evaluating the mechanism", "Ignore kidney function and symptoms", "Delay urgent stabilization until every test returns"], 0, rationale, lesson));

const integrationCases = [
  ["A patient with severe hypercalcemia is dehydrated and confused but has heart failure with pulmonary congestion.", "Use carefully titrated isotonic fluid with frequent congestion and perfusion reassessment, then add mechanism-specific therapy", "Both calcium urgency and limited fluid tolerance must shape the plan.", "hypercalcemia"],
  ["A patient received denosumab and develops symptomatic hypocalcemia with advanced CKD.", "Give urgent calcium as indicated, assess magnesium and vitamin D, and monitor for prolonged recurrence", "Denosumab effect can persist and kidney disease increases mineral risk.", "hypocalcemia"],
  ["Total calcium is 7.4 mg/dL, albumin 1.8 g/dL, pH 7.18, and the patient has no symptoms.", "Obtain ionized calcium before assuming true hypocalcemia", "Both low albumin and acidemia alter the relationship between total and ionized calcium.", "calcium-measurement"],
  ["A patient with high phosphate and low calcium after tumor treatment develops rising creatinine and hyperkalemia.", "Recognize tumor lysis physiology and manage the full emergency", "The linked mineral, potassium, and kidney abnormalities require integrated urgent care.", "hyperphosphatemia-ckd-mbd"],
  ["Phosphate is low after several days of antacid and binder use, with chronic diarrhea.", "Stop or adjust contributors and replace according to severity and route", "Reduced absorption and gastrointestinal loss are plausible and should be corrected.", "hypophosphatemia"],
  ["PTH is high in CKD, phosphate is elevated, calcium is low-normal, and 25-hydroxyvitamin D is deficient.", "Address modifiable phosphate, calcium, intake, and vitamin D factors before labeling autonomous disease", "Secondary hyperparathyroidism must be interpreted through its drivers.", "hyperphosphatemia-ckd-mbd"],
  ["A patient with severe hypercalcemia receives calcitonin and improves initially, then calcium rises on day four.", "Recognize tachyphylaxis and rely on durable cause-specific therapy", "Calcitonin loses effectiveness after a short course.", "hypercalcemia"],
  ["A patient needs IV phosphate and is receiving a calcium infusion through the only available peripheral line.", "Do not co-infuse without verified compatibility and obtain safe access planning", "Calcium-phosphate precipitation can obstruct the line or harm the patient.", "hypophosphatemia"],
  ["A patient has low calcium, high phosphate, low PTH, and normal magnesium after neck surgery.", "Postoperative hypoparathyroidism is likely", "Low PTH fails to conserve calcium or promote phosphate excretion.", "hypocalcemia"],
  ["A CKD patient reports taking every binder but often skips meals and takes the tablets at bedtime.", "Reconcile each dose with actual phosphate-containing food", "Adherence includes correct timing and indication, not tablet count alone.", "hyperphosphatemia-ckd-mbd"],
].map(([caseText, correct, rationale, lesson], index) => q(`10${index}`, `${caseText} What is the best next interpretation or management principle?`, [correct, "Normalize one laboratory value without a mechanism", "Use the same fixed plan for every patient", "Ignore medication timing"], 0, rationale, lesson));

const priorPhosphateRouteQuestionBank = [
  ...core,
  ...correctedCalciumCases,
  ...elementalCalciumCases,
  ...phosphateDoseCases,
  ...diagnosticCases,
  ...integrationCases,
];

const sourceReviewedPhosphateRouteQuestions = {
  "calcium-phosphorus-038": {
    "rationale": "Severe symptomatic depletion with unreliable enteral absorption supports monitored IV replacement. The supplied book describes IV treatment for severe depletion; the potassium-phosphates label permits IV correction when oral or enteral replacement is not possible, insufficient or contraindicated. Severity is therefore not the only route criterion. Stable mild depletion with a functioning gut favors oral replacement, while normal or high phosphate does not justify replacement. Product choice, kidney function, accompanying potassium or sodium, calcium, dilution and monitoring still require assessment."
  },
  "calcium-phosphorus-039": {
    "rationale": "Potassium phosphates injection supplies both phosphate and potassium: the reviewed concentrate contains 3 mmol phosphorus and 4.4 mEq potassium per mL. Its potassium load must be counted with other sources and can worsen hyperkalemia; the product is contraindicated in hyperkalemia. It contains phosphate, illness can change potassium, and adding potassium does not prevent every arrhythmia. A concurrent potassium deficit may influence selection only after the complete product and patient safety review."
  },
  "calcium-phosphorus-040": {
    "rationale": "IV phosphate can cause hyperphosphatemia, hypocalcemia and calcium-phosphate precipitation, with kidney injury and serious infusion complications. Excessive or rapid administration increases risk. Follow phosphate, calcium, potassium, magnesium and kidney function and use the labeled diluted infusion. The potassium product must not be infused with calcium-containing IV fluids. Permanent hypermagnesemia and respiratory alkalosis are not inevitable consequences, and an isolated LDL change is not the relevant phosphate-infusion hazard."
  },
  "calcium-phosphorus-098": {
    "rationale": "A potassium of 5.8 mEq/L is hyperkalemia, and potassium phosphates injection is contraindicated in hyperkalemia. Oliguric acute kidney injury further requires an urgent individualized replacement and monitoring plan; a low phosphate alone does not make potassium phosphate safe. Sodium phosphate avoids that potassium load but adds sodium, has its own high-sodium, high-phosphate and low-calcium contraindications, and requires caution in renal impairment. Do not ignore kidney function, use a fixed plan from one laboratory value, or delay necessary reassessment. The question does not establish a specific replacement dose or a safe sodium-phosphate regimen."
  },
  "calcium-phosphorus-107": {
    "rationale": "Do not share the calcium infusion for potassium-phosphate replacement: the reviewed potassium-phosphates label explicitly prohibits infusion with calcium-containing IV fluids. Arrange a safe access and administration plan with the treating team rather than treating an unspecified compatibility check as permission to co-infuse. Separately compounded parenteral nutrition has its own validated calcium-phosphate compatibility and stability assessment and does not authorize this shared-line infusion. Precipitation can harm the patient; a single laboratory value, a fixed plan for every patient and ignoring administration timing do not resolve this access hazard.",
    "choices": [
      "Do not co-infuse potassium phosphate with calcium-containing IV fluids; obtain a safe access plan",
      "Normalize one laboratory value without a mechanism",
      "Use the same fixed plan for every patient",
      "Ignore medication timing"
    ]
  },
  "calcium-phosphorus-080": {
    "rationale": "For the explicitly hypothetical protocol in the stem, 50 kg × 0.08 mmol/kg = 4 mmol phosphate; kg cancels. Dividing weight by the factor or adding the two values does not calculate the stated dose. mEq calcium is a different substance and unit. The book contains these historical phosphate factors, but this arithmetic exercise does not select a current product dose, dilution, route or infusion rate. Current product labeling and the patient’s phosphate, potassium, calcium, kidney function and other intake determine the actual prescription."
  },
  "calcium-phosphorus-081": {
    "rationale": "For the explicitly hypothetical protocol in the stem, 62 kg × 0.08 mmol/kg = 4.96 mmol phosphate; kg cancels. Dividing weight by the factor or adding the two values does not calculate the stated dose. mEq calcium is a different substance and unit. The book contains these historical phosphate factors, but this arithmetic exercise does not select a current product dose, dilution, route or infusion rate. Current product labeling and the patient’s phosphate, potassium, calcium, kidney function and other intake determine the actual prescription."
  },
  "calcium-phosphorus-082": {
    "rationale": "For the explicitly hypothetical protocol in the stem, 70 kg × 0.08 mmol/kg = 5.6 mmol phosphate; kg cancels. Dividing weight by the factor or adding the two values does not calculate the stated dose. mEq calcium is a different substance and unit. The book contains these historical phosphate factors, but this arithmetic exercise does not select a current product dose, dilution, route or infusion rate. Current product labeling and the patient’s phosphate, potassium, calcium, kidney function and other intake determine the actual prescription."
  },
  "calcium-phosphorus-083": {
    "rationale": "For the explicitly hypothetical protocol in the stem, 85 kg × 0.08 mmol/kg = 6.8 mmol phosphate; kg cancels. Dividing weight by the factor or adding the two values does not calculate the stated dose. mEq calcium is a different substance and unit. The book contains these historical phosphate factors, but this arithmetic exercise does not select a current product dose, dilution, route or infusion rate. Current product labeling and the patient’s phosphate, potassium, calcium, kidney function and other intake determine the actual prescription."
  },
  "calcium-phosphorus-084": {
    "rationale": "For the explicitly hypothetical protocol in the stem, 100 kg × 0.08 mmol/kg = 8 mmol phosphate; kg cancels. Dividing weight by the factor or adding the two values does not calculate the stated dose. mEq calcium is a different substance and unit. The book contains these historical phosphate factors, but this arithmetic exercise does not select a current product dose, dilution, route or infusion rate. Current product labeling and the patient’s phosphate, potassium, calcium, kidney function and other intake determine the actual prescription."
  },
  "calcium-phosphorus-085": {
    "rationale": "For the explicitly hypothetical protocol in the stem, 50 kg × 0.16 mmol/kg = 8 mmol phosphate; kg cancels. Dividing weight by the factor or adding the two values does not calculate the stated dose. mEq calcium is a different substance and unit. The book contains these historical phosphate factors, but this arithmetic exercise does not select a current product dose, dilution, route or infusion rate. Current product labeling and the patient’s phosphate, potassium, calcium, kidney function and other intake determine the actual prescription."
  },
  "calcium-phosphorus-086": {
    "rationale": "For the explicitly hypothetical protocol in the stem, 62 kg × 0.16 mmol/kg = 9.92 mmol phosphate; kg cancels. Dividing weight by the factor or adding the two values does not calculate the stated dose. mEq calcium is a different substance and unit. The book contains these historical phosphate factors, but this arithmetic exercise does not select a current product dose, dilution, route or infusion rate. Current product labeling and the patient’s phosphate, potassium, calcium, kidney function and other intake determine the actual prescription."
  },
  "calcium-phosphorus-087": {
    "rationale": "For the explicitly hypothetical protocol in the stem, 70 kg × 0.16 mmol/kg = 11.2 mmol phosphate; kg cancels. Dividing weight by the factor or adding the two values does not calculate the stated dose. mEq calcium is a different substance and unit. The book contains these historical phosphate factors, but this arithmetic exercise does not select a current product dose, dilution, route or infusion rate. Current product labeling and the patient’s phosphate, potassium, calcium, kidney function and other intake determine the actual prescription."
  },
  "calcium-phosphorus-088": {
    "rationale": "For the explicitly hypothetical protocol in the stem, 85 kg × 0.16 mmol/kg = 13.6 mmol phosphate; kg cancels. Dividing weight by the factor or adding the two values does not calculate the stated dose. mEq calcium is a different substance and unit. The book contains these historical phosphate factors, but this arithmetic exercise does not select a current product dose, dilution, route or infusion rate. Current product labeling and the patient’s phosphate, potassium, calcium, kidney function and other intake determine the actual prescription."
  },
  "calcium-phosphorus-089": {
    "rationale": "For the explicitly hypothetical protocol in the stem, 100 kg × 0.16 mmol/kg = 16 mmol phosphate; kg cancels. Dividing weight by the factor or adding the two values does not calculate the stated dose. mEq calcium is a different substance and unit. The book contains these historical phosphate factors, but this arithmetic exercise does not select a current product dose, dilution, route or infusion rate. Current product labeling and the patient’s phosphate, potassium, calcium, kidney function and other intake determine the actual prescription."
  }
};
export const calciumPhosphorusHomeostasisQuestionBank = priorPhosphateRouteQuestionBank.map((question) => sourceReviewedPhosphateRouteQuestions[question.id] ? { ...question, ...sourceReviewedPhosphateRouteQuestions[question.id] } : question);

if (calciumPhosphorusHomeostasisQuestionBank.length !== 100) {
  throw new Error(`Calcium and phosphorus question bank must contain 100 questions, found ${calciumPhosphorusHomeostasisQuestionBank.length}.`);
}

const sourceReviewedPhosphateMechanismRationales = {
  "calcium-phosphorus-036": "After carbohydrate reintroduction, rising insulin promotes intracellular phosphate uptake for metabolism and can rapidly lower serum phosphate in a depleted patient. Potassium can fall too; the mechanism for the accompanying magnesium decline is less well established. This is not explained by immediate kidney failure, complete blockade of intestinal glucose absorption or PTH suppression alone. Assess all three electrolytes and the clinical nutrition exposure.",
  "calcium-phosphorus-037": "Phosphate is required for ATP production, and severe depletion can impair respiratory muscle function enough to cause respiratory failure. The book identifies weakness and respiratory failure; ASPEN describes the energy and muscle link. Bronchospasm is not an inevitable effect. Increased hemoglobin oxygen affinity and impaired tissue oxygen release can also occur, but that is not the only mechanism and does not replace assessment of respiratory muscle weakness. Immediate blockade of albumin production is not the explanation.",
  "calcium-phosphorus-094": "The timing after nutrition begins and rapid phosphate fall make refeeding-related intracellular shift a defensible concern, rather than proof that every other cause is excluded. Assess the patient promptly, review potassium and magnesium, kidney function and energy delivery, and treat the electrolyte abnormality. ASPEN recommends reassessing and reducing energy exposure when electrolytes fall precipitously or are difficult to correct; individualize the response. Do not treat the number alone, ignore organ function or delay stabilization for every diagnostic result.",
  "calcium-phosphorus-104": "Phosphate-binding drugs can reduce intestinal phosphate availability, and diarrhea can add gastrointestinal electrolyte losses. Review the actual antacid or binder and whether it is still indicated; adjust contributors and choose replacement according to severity, symptoms, absorption and kidney function. The book distinguishes less severe oral replacement from severe depletion requiring IV treatment; the product label adds route and safety limits. A fixed plan for everyone, correction without evaluating the cause or ignoring medication timing misses relevant contributors."
};
for (const question of calciumPhosphorusHomeostasisQuestionBank) {
  if (sourceReviewedPhosphateMechanismRationales[question.id]) question.rationale = sourceReviewedPhosphateMechanismRationales[question.id];
}

calciumPhosphorusHomeostasisQuestionBank.splice(calciumPhosphorusHomeostasisQuestionBank.findIndex((question) => question.id === "calcium-phosphorus-041") + 1, 0, {
  "id": "calcium-phosphorus-iron-repeat-monitoring",
  "question": "An adult with normal baseline phosphate and no apparent risk factors is scheduled for a repeat Injectafer course eight weeks after the prior course. Which step matches the August 2026 label?",
  "choices": [
    "Check serum phosphate before the repeat course",
    "Skip testing because the baseline level was normal",
    "Test only after a fracture occurs",
    "Assume one prior course excludes later hypophosphatemia"
  ],
  "answer": 0,
  "rationale": "Eight weeks is within three months. The label calls for checking phosphate before a repeat course within that interval even when no apparent risk factors are present. Normal baseline phosphate does not exclude the adverse effect. Waiting for a fracture or assuming a previous course removes risk can miss severe or prolonged hypophosphatemia. Correct any pre-existing hypophosphatemia before further treatment.",
  "reviewHref": "#hypophosphatemia",
  "difficulty": "clinical"
});

calciumPhosphorusHomeostasisQuestionBank.splice(calciumPhosphorusHomeostasisQuestionBank.findIndex((question) => question.id === "calcium-phosphorus-080"), 0, {
  "id": "calcium-phosphorus-iron-persistent-warning",
  "question": "After Injectafer, an adult develops persistent hypophosphatemia and new bone pain. Which response follows its August 2026 warning?",
  "choices": [
    "Continue repeat courses without reassessing phosphate",
    "Treat the hypophosphatemia and consider permanent discontinuation",
    "Attribute every symptom to anemia without evaluation",
    "Assume hypophosphatemia can occur only after multiple doses"
  ],
  "answer": 1,
  "rationale": "Assess the symptoms and phosphate abnormality, treat as medically indicated, and consider permanently discontinuing Injectafer for severe symptomatic or persistent hypophosphatemia. This is a clinical consideration, not an automatic mandate in every mild transient case. The warning includes single-dose events, normal baseline phosphate and patients without apparent risk factors; anemia-like symptoms should not prevent evaluation.",
  "reviewHref": "#hypophosphatemia",
  "difficulty": "clinical"
});

const sourceReviewedPhosphatePhysiologyRationales = {
  "calcium-phosphorus-041": "Ferric carboxymaltose is the product identified by the current Injectafer warning. A randomized trial and its physiological substudy support increased biologically active FGF23 and renal phosphate wasting after this product; that mechanism should not be generalized to every iron formulation. The current label reports severe or prolonged symptomatic hypophosphatemia, including osteomalacia and fractures, after single or repeated exposure. Repeated exposure is therefore not required. Ferrous sulfate and carbonyl iron are oral products; the alternative claiming hypophosphatemia from iron sucrose in every patient is not defensible. Review the current label for phosphate testing and management."
};
for (const question of calciumPhosphorusHomeostasisQuestionBank) {
  if (sourceReviewedPhosphatePhysiologyRationales[question.id]) question.rationale = sourceReviewedPhosphatePhysiologyRationales[question.id];
}

// Book-reconciled albumin-adjusted total calcium and exact decimal arithmetic.
const sourceReviewedCalciumMeasurementQuestions = {
  "calcium-phosphorus-010": {
    "rationale": "Low albumin can lower the protein-bound calcium component and therefore the total calcium result without necessarily lowering ionized calcium. The book distinguishes albumin-adjusted total calcium from a directly measured unbound calcium result. PTH testing does not explain this binding effect; ionized calcium is the unbound fraction, and phosphate does not always raise albumin."
  },
  "calcium-phosphorus-016": {
    "choices": [
      "It gives an albumin-adjusted total-calcium estimate, not a measured ionized-calcium result",
      "It cannot use arithmetic",
      "It is accurate only when albumin is exactly 4",
      "It measures phosphate instead"
    ],
    "rationale": "The book equation estimates total calcium as if albumin were 4 g/dL; it does not measure the ionized fraction. Use total calcium in mg/dL and albumin in g/dL. The equation uses ordinary arithmetic, accepts albumin values below 4, and does not measure phosphate. The book separately states that a directly measured ionized-calcium result does not require an albumin correction."
  },
  "calcium-phosphorus-060": {
    "question": "Using total calcium + 0.8(4 - albumin), what is the estimated corrected calcium for total calcium 7.2 mg/dL and albumin 2 g/dL? Round to the nearest tenth.",
    "rationale": "Use total calcium in mg/dL and albumin in g/dL: 7.2 + 0.8(4 - 2) = 7.2 + 1.6 = 8.8 mg/dL, or 8.8 mg/dL rounded to the nearest tenth. The other choices do not equal this rounded result. This is an albumin-adjusted total-calcium estimate, not a directly measured ionized-calcium result."
  },
  "calcium-phosphorus-061": {
    "question": "Using total calcium + 0.8(4 - albumin), what is the estimated corrected calcium for total calcium 8 mg/dL and albumin 2.5 g/dL? Round to the nearest tenth.",
    "rationale": "Use total calcium in mg/dL and albumin in g/dL: 8 + 0.8(4 - 2.5) = 8 + 1.2 = 9.2 mg/dL, or 9.2 mg/dL rounded to the nearest tenth. The other choices do not equal this rounded result. This is an albumin-adjusted total-calcium estimate, not a directly measured ionized-calcium result."
  },
  "calcium-phosphorus-062": {
    "question": "Using total calcium + 0.8(4 - albumin), what is the estimated corrected calcium for total calcium 9.1 mg/dL and albumin 3 g/dL? Round to the nearest tenth.",
    "rationale": "Use total calcium in mg/dL and albumin in g/dL: 9.1 + 0.8(4 - 3) = 9.1 + 0.8 = 9.9 mg/dL, or 9.9 mg/dL rounded to the nearest tenth. The other choices do not equal this rounded result. This is an albumin-adjusted total-calcium estimate, not a directly measured ionized-calcium result."
  },
  "calcium-phosphorus-063": {
    "question": "Using total calcium + 0.8(4 - albumin), what is the estimated corrected calcium for total calcium 10.4 mg/dL and albumin 2.2 g/dL? Round to the nearest tenth.",
    "rationale": "Use total calcium in mg/dL and albumin in g/dL: 10.4 + 0.8(4 - 2.2) = 10.4 + 1.44 = 11.84 mg/dL, or 11.8 mg/dL rounded to the nearest tenth. The other choices do not equal this rounded result. This is an albumin-adjusted total-calcium estimate, not a directly measured ionized-calcium result."
  },
  "calcium-phosphorus-064": {
    "question": "Using total calcium + 0.8(4 - albumin), what is the estimated corrected calcium for total calcium 6.8 mg/dL and albumin 1.5 g/dL? Round to the nearest tenth.",
    "rationale": "Use total calcium in mg/dL and albumin in g/dL: 6.8 + 0.8(4 - 1.5) = 6.8 + 2 = 8.8 mg/dL, or 8.8 mg/dL rounded to the nearest tenth. The other choices do not equal this rounded result. This is an albumin-adjusted total-calcium estimate, not a directly measured ionized-calcium result."
  },
  "calcium-phosphorus-065": {
    "question": "Using total calcium + 0.8(4 - albumin), what is the estimated corrected calcium for total calcium 8.7 mg/dL and albumin 3.4 g/dL? Round to the nearest tenth.",
    "rationale": "Use total calcium in mg/dL and albumin in g/dL: 8.7 + 0.8(4 - 3.4) = 8.7 + 0.48 = 9.18 mg/dL, or 9.2 mg/dL rounded to the nearest tenth. The other choices do not equal this rounded result. This is an albumin-adjusted total-calcium estimate, not a directly measured ionized-calcium result."
  },
  "calcium-phosphorus-066": {
    "question": "Using total calcium + 0.8(4 - albumin), what is the estimated corrected calcium for total calcium 9.6 mg/dL and albumin 2.8 g/dL? Round to the nearest tenth.",
    "rationale": "Use total calcium in mg/dL and albumin in g/dL: 9.6 + 0.8(4 - 2.8) = 9.6 + 0.96 = 10.56 mg/dL, or 10.6 mg/dL rounded to the nearest tenth. The other choices do not equal this rounded result. This is an albumin-adjusted total-calcium estimate, not a directly measured ionized-calcium result."
  },
  "calcium-phosphorus-067": {
    "question": "Using total calcium + 0.8(4 - albumin), what is the estimated corrected calcium for total calcium 7.9 mg/dL and albumin 1.8 g/dL? Round to the nearest tenth.",
    "rationale": "Use total calcium in mg/dL and albumin in g/dL: 7.9 + 0.8(4 - 1.8) = 7.9 + 1.76 = 9.66 mg/dL, or 9.7 mg/dL rounded to the nearest tenth. The other choices do not equal this rounded result. This is an albumin-adjusted total-calcium estimate, not a directly measured ionized-calcium result."
  },
  "calcium-phosphorus-068": {
    "question": "Using total calcium + 0.8(4 - albumin), what is the estimated corrected calcium for total calcium 10.8 mg/dL and albumin 3.1 g/dL? Round to the nearest tenth.",
    "rationale": "Use total calcium in mg/dL and albumin in g/dL: 10.8 + 0.8(4 - 3.1) = 10.8 + 0.72 = 11.52 mg/dL, or 11.5 mg/dL rounded to the nearest tenth. The other choices do not equal this rounded result. This is an albumin-adjusted total-calcium estimate, not a directly measured ionized-calcium result."
  },
  "calcium-phosphorus-069": {
    "question": "Using total calcium + 0.8(4 - albumin), what is the estimated corrected calcium for total calcium 8.3 mg/dL and albumin 2.3 g/dL? Round to the nearest tenth.",
    "rationale": "Use total calcium in mg/dL and albumin in g/dL: 8.3 + 0.8(4 - 2.3) = 8.3 + 1.36 = 9.66 mg/dL, or 9.7 mg/dL rounded to the nearest tenth. The other choices do not equal this rounded result. This is an albumin-adjusted total-calcium estimate, not a directly measured ionized-calcium result."
  }
};
for (const question of calciumPhosphorusHomeostasisQuestionBank) {
  if (Object.hasOwn(sourceReviewedCalciumMeasurementQuestions, question.id)) Object.assign(question, sourceReviewedCalciumMeasurementQuestions[question.id]);
}

const sourceReviewedCkdBinderQuestions = {
  "calcium-phosphorus-043": {
    "rationale": "KDIGO recommendation 4.1.1 considers serial calcium, phosphate, and PTH together. A single phosphate result or ignoring calcium loses the treatment context; rising PTH also requires evaluation of modifiable mineral and vitamin D factors."
  },
  "calcium-phosphorus-044": {
    "rationale": "Inorganic phosphate additives are readily absorbed and may be underreported in nutrient databases. Phytate-bound phosphate in plants, including legumes, is less available; fiber is not a competing phosphate source. Reduce highly absorbable additives without compromising adequate protein intake."
  },
  "calcium-phosphorus-045": {
    "rationale": "Binders must be present in the gut with dietary phosphate. A bedtime dose without food, a dose a week later, or a dose linked only to a calcium blood test does not target the phosphate-containing meal. Match prescribed doses to actual meals or snacks."
  },
  "calcium-phosphorus-046": {
    "rationale": "Calcium acetate and calcium carbonate both bind phosphate and add calcium. Hypercalcemia and excess calcium exposure are important selection concerns; KDIGO suggests restricting their dose in adults receiving phosphate-lowering treatment. They are oral agents, do not always cause hypocalcemia, and should not be assumed harmless simply because phosphate falls."
  },
  "calcium-phosphorus-047": {
    "rationale": "Iron from ferric citrate can be absorbed and increase iron stores. Follow ferritin and transferrin saturation and reassess other iron therapy. Sevelamer carbonate, calcium carbonate, and lanthanum carbonate do not supply iron; iron effects should not be assumed identical across binders."
  },
  "calcium-phosphorus-048": {
    "question": "In an adult with CKD G3a-G5 not on dialysis and progressively rising or persistently elevated PTH, which modifiable factors should be assessed?",
    "rationale": "For CKD G3a-G5 not on dialysis with progressively rising or persistently elevated PTH, KDIGO identifies hyperphosphatemia, hypocalcemia, high phosphate intake, and vitamin D deficiency as modifiable factors. PTH alone, sodium alone, or unrelated physical traits do not assess those drivers."
  },
  "calcium-phosphorus-049": {
    "rationale": "A prescription does not establish effective phosphate binding. Review actual doses with meals, missed doses, absorbable dietary phosphate, dialytic removal, and regimen adequacy. Binders act before intestinal absorption; food supplies phosphate, and dialysis does not remove the continuing dietary load permanently."
  },
  "calcium-phosphorus-096": {
    "choices": [
      "Reassess calcium load and phosphate-lowering strategy",
      "Increase calcium acetate automatically because phosphate is elevated",
      "Stop all phosphate-lowering measures because calcium is within the reference range",
      "Assume that lowering phosphate eliminates all calcification risk"
    ],
    "rationale": "Reassess calcium exposure, binder selection, food, and phosphate control together. KDIGO suggests restricting calcium-based binder doses in adults receiving phosphate-lowering treatment; calcification makes this concern especially relevant. An automatic increase in calcium acetate ignores its calcium burden, while dropping all phosphate control or assuming risk is eliminated overlooks persistent hyperphosphatemia."
  },
  "calcium-phosphorus-099": {
    "choices": [
      "Move binder dosing to phosphate-containing meals and reassess the full regimen",
      "Keep every dose two hours after food because sevelamer binds absorbed phosphate",
      "Take all daily doses at bedtime without food",
      "Eliminate all dietary protein before reviewing binder timing"
    ],
    "rationale": "Sevelamer binds dietary phosphate in the gut and should accompany phosphate-containing food. Move doses to meals and reassess the regimen rather than relying on a late or food-free dose. Reducing all protein indiscriminately can compromise nutrition; assess absorbable phosphate sources and treatment delivery."
  },
  "calcium-phosphorus-103": {
    "choices": [
      "Recognize tumor lysis physiology and manage the full emergency",
      "Correct calcium alone and defer assessment of potassium and kidney function",
      "Treat phosphate as a dietary-adherence problem without urgent evaluation",
      "Arrange only routine outpatient follow-up because the abnormalities are expected"
    ],
    "rationale": "Tumor cell lysis releases phosphate and potassium, can lower calcium through phosphate binding, and can produce kidney injury. These linked findings require urgent integrated evaluation and management. Correcting only calcium or phosphate, or waiting routinely for spontaneous recovery, misses the potassium and kidney components of the emergency."
  },
  "calcium-phosphorus-105": {
    "question": "An adult with nondialysis CKD has persistently high PTH, elevated phosphate, low-normal calcium, and deficient 25-hydroxyvitamin D. What is the best next interpretation or management principle?",
    "choices": [
      "Address modifiable phosphate, calcium, intake, and vitamin D factors before labeling autonomous disease",
      "Diagnose autonomous parathyroid disease from this single PTH result",
      "Start active vitamin D routinely in every adult with nondialysis CKD and elevated PTH",
      "Ignore phosphate intake because serum PTH is the only relevant treatment signal"
    ],
    "rationale": "These findings fit modifiable drivers of secondary hyperparathyroidism. In nondialysis CKD, assess trends and correct phosphate, calcium, intake, and vitamin D factors before treating a high PTH value as autonomous disease. Routine active vitamin D in every adult or a plan that ignores phosphate is inconsistent with the KDIGO approach."
  },
  "calcium-phosphorus-109": {
    "choices": [
      "Reconcile each dose with actual phosphate-containing food",
      "Take all missed doses at bedtime to bind phosphate absorbed earlier",
      "Increase the binder dose before checking meals or administration times",
      "Eliminate all protein-containing food instead of reviewing timing"
    ],
    "rationale": "Taking a tablet is not the same as binding phosphate from a meal. Review actual food intake and match the prescribed binder regimen to phosphate-containing meals or snacks. A bedtime catch-up after absorption, an automatic dose increase, or total protein elimination does not repair the timing problem and can create additional risk."
  }
};
for (const question of calciumPhosphorusHomeostasisQuestionBank) {
  if (Object.hasOwn(sourceReviewedCkdBinderQuestions, question.id)) Object.assign(question, sourceReviewedCkdBinderQuestions[question.id]);
}
calciumPhosphorusHomeostasisQuestionBank.splice(calciumPhosphorusHomeostasisQuestionBank.findIndex((question) => question.id === "calcium-phosphorus-026"), 0, {
  "id": "calcium-phosphorus-binder-formulation-selection",
  "question": "A patient taking lanthanum has poor dentition and cannot chew its tablets completely. Which formulation plan is most appropriate?",
  "choices": [
    "Consider labeled lanthanum oral powder, prepared with suitable food, after reviewing gastrointestinal safety",
    "Swallow the chewable tablet intact to preserve its binding effect",
    "Dissolve lanthanum oral powder completely in water before taking it",
    "Assume an oral powder is automatically suitable for any feeding tube"
  ],
  "answer": 0,
  "rationale": "Fosrenol tablets must be chewed or crushed completely, not swallowed intact. The powder is an option for difficulty chewing; sprinkle it on a small amount of applesauce or similar food and consume immediately. It is insoluble and should not be dissolved in liquid. Review gastrointestinal risks and the intended route; oral powder availability alone does not establish feeding-tube suitability.",
  "reviewHref": "#hyperphosphatemia-ckd-mbd",
  "difficulty": "clinical"
});
calciumPhosphorusHomeostasisQuestionBank.splice(calciumPhosphorusHomeostasisQuestionBank.findIndex((question) => question.id === "calcium-phosphorus-109"), 0, {
  "id": "calcium-phosphorus-binder-medicine-reconciliation",
  "question": "A patient switches from lanthanum to sevelamer while taking oral ciprofloxacin. Which medication-reconciliation principle is safest?",
  "choices": [
    "Recheck instructions for the actual binder-antibiotic pair instead of copying a universal separation interval",
    "Use the same separation interval for every binder because all interactions are identical",
    "Take ciprofloxacin simultaneously with the binder to improve absorption",
    "Stop giving the binder with meals so that every oral medicine can be taken together"
  ],
  "answer": 0,
  "rationale": "Fosrenol labeling places oral quinolones at least 1 hour before or 4 hours after lanthanum. Renvela labeling places ciprofloxacin at least 2 hours before or 6 hours after sevelamer. Simultaneous administration can reduce antibiotic absorption. Reconcile both products and the meal schedule rather than imposing one interval or abandoning food-linked binder dosing.",
  "reviewHref": "#hyperphosphatemia-ckd-mbd",
  "difficulty": "clinical"
});

const sourceReviewedAcuteCalciumQuestions = {
  "calcium-phosphorus-018": {
    "rationale": "The acute hypocalcemia guidance identifies QT prolongation and arrhythmia. QT shortening is associated with the opposite calcium disturbance; fixed ST elevation and a universal delta wave are not characteristic hypocalcemia findings. Interpret the ECG with symptoms and the calcium trend."
  },
  "calcium-phosphorus-019": {
    "rationale": "Laryngospasm threatens the airway and is a recognized severe hypocalcemia manifestation requiring urgent monitored treatment. Stable fatigue or chronic nail changes do not carry the same immediate airway risk. Low albumin alone does not establish symptomatic hypocalcemia."
  },
  "calcium-phosphorus-020": {
    "rationale": "The reviewed calcium gluconate label specifies acute symptomatic hypocalcemia in adults and pediatric patients. It does not establish long-term osteoporosis monotherapy or treatment of high phosphate or high calcium; long-term safety has not been established."
  },
  "calcium-phosphorus-021": {
    "rationale": "The reviewed 10% product contains 100 mg of calcium gluconate salt per mL, providing 9.3 mg (0.465 mEq) elemental calcium. Salt mass is not elemental calcium mass. The 93 mg value is the elemental content of 10 mL, not 1 mL."
  },
  "calcium-phosphorus-022": {
    "rationale": "Emergency guidance specifies central access for calcium chloride because it is more irritating. The reviewed chloride label specifies slow infusion in a central or deep vein and warns of tissue necrosis with infiltration. It contains elemental calcium, is administered intravenously, and can cause cardiac adverse effects; do not treat it as interchangeable with gluconate by volume."
  },
  "calcium-phosphorus-024": {
    "rationale": "PTH facilitates active vitamin D synthesis; deficient signaling can leave renal activation insufficient. Acute guidance includes calcitriol for postoperative hypoparathyroidism. Calcitriol supports calcium absorption rather than blocking it; nutritional vitamin D is not phosphate, and intestinal glucose absorption is not the reason for active vitamin D treatment."
  },
  "calcium-phosphorus-025": {
    "rationale": "The gluconate label prohibits mixing with bicarbonate or phosphate-containing fluids because precipitation can occur. A secure line, ECG monitoring during urgent administration, and repeat calcium assessment are safeguards rather than the unsafe practice. Assess exact product and infusion compatibility before giving calcium."
  },
  "calcium-phosphorus-026": {
    "rationale": "Urgent IV calcium requires assessment of clinical response, ECG risk, calcium, IV-site injury, and the underlying cause. The label also requires vitals and calcium monitoring during administration. A first dose does not end reassessment; LDL testing alone and discharge before response assessment miss acute risks."
  },
  "calcium-phosphorus-042": {
    "rationale": "Yorvipath is indicated for adult hypoparathyroidism and requires individualized calcium monitoring. It was not studied for acute post-surgical hypoparathyroidism and is not a substitute for emergency calcium treatment. Serious hypercalcemia can occur with initiation or dose increases and serious hypocalcemia with abrupt interruption; calcium assessment remains necessary."
  },
  "calcium-phosphorus-070": {},
  "calcium-phosphorus-071": {},
  "calcium-phosphorus-072": {},
  "calcium-phosphorus-073": {},
  "calcium-phosphorus-074": {},
  "calcium-phosphorus-075": {},
  "calcium-phosphorus-076": {},
  "calcium-phosphorus-077": {},
  "calcium-phosphorus-078": {},
  "calcium-phosphorus-079": {},
  "calcium-phosphorus-093": {
    "choices": [
      "Urgent monitored calcium with postoperative hypoparathyroidism management",
      "Use oral maintenance therapy alone despite falling calcium and ECG abnormalities",
      "Wait for all etiologic results before beginning monitored stabilization",
      "Treat phosphate alone without addressing the calcium and ECG findings"
    ],
    "rationale": "Post-thyroidectomy parathyroid disruption can cause acute hypocalcemia. Falling calcium with low PTH and QT prolongation warrants urgent monitored stabilization plus cause-directed postoperative management. Oral maintenance alone, waiting for every etiologic result, or treating phosphate without addressing calcium and ECG risk does not manage the immediate problem."
  },
  "calcium-phosphorus-101": {
    "choices": [
      "Give urgent calcium as indicated, assess magnesium and vitamin D, and monitor for prolonged recurrence",
      "End calcium monitoring as soon as one measurement normalizes",
      "Use an identical replacement plan regardless of CKD-MBD or the denosumab product",
      "Exclude denosumab from the medication review because it was given earlier"
    ],
    "rationale": "Denosumab products can cause severe hypocalcemia, with greater risk in advanced CKD. Prolia labeling reports postmarketing hypocalcemia lasting weeks or months and requires continued monitoring; do not assume one corrected result ends the risk. Stabilize symptomatic hypocalcemia as indicated, assess magnesium, vitamin D and CKD-MBD, and review the actual denosumab product and follow-up plan. The Prolia monitoring instructions must not be copied automatically to every denosumab regimen."
  },
  "calcium-phosphorus-108": {
    "choices": [
      "Postoperative hypoparathyroidism is likely",
      "Vitamin D deficiency alone explains the suppressed PTH response",
      "An appropriate secondary PTH rise from phosphate retention explains the low PTH",
      "Severe magnesium deficiency is established by the normal magnesium result"
    ],
    "rationale": "Neck surgery can disrupt parathyroid function. Low PTH with low calcium and high phosphate supports postoperative hypoparathyroidism: PTH normally promotes renal calcium reabsorption, phosphate excretion, and active vitamin D synthesis. Normal magnesium makes severe magnesium deficiency a less fitting explanation for this case; vitamin D deficiency alone or phosphate retention with an appropriate PTH rise does not match the low PTH pattern."
  }
};
for (const question of calciumPhosphorusHomeostasisQuestionBank) {
  if (Object.hasOwn(sourceReviewedAcuteCalciumQuestions, question.id)) Object.assign(question, sourceReviewedAcuteCalciumQuestions[question.id]);
}
calciumPhosphorusHomeostasisQuestionBank.splice(calciumPhosphorusHomeostasisQuestionBank.findIndex((question) => question.id === "calcium-phosphorus-050"), 0, {
  "id": "calcium-phosphorus-iv-product-content-reconciliation",
  "question": "A prescription specifies elemental calcium, and the available 10% calcium gluconate is replaced with 10% calcium chloride. Which reconciliation is essential?",
  "choices": [
    "Recalculate from the exact elemental content; the reviewed products contain 9.3 and 27 mg elemental calcium per mL, respectively",
    "Use the same volume because both products are labeled 10%",
    "Treat 100 mg of calcium salt as 100 mg elemental calcium for either product",
    "Carry over the gluconate route and rate without reviewing the chloride label"
  ],
  "answer": 0,
  "rationale": "The percentage describes calcium salt concentration, not equal elemental content. The reviewed gluconate product provides 9.3 mg elemental calcium/mL and chloride provides 27 mg/mL. Reconcile elemental dose, volume, access, and administration instructions; equal volumes and copied rates are unsafe assumptions. This is product reconciliation, not a recommended replacement dose.",
  "reviewHref": "#hypocalcemia",
  "difficulty": "clinical"
});
calciumPhosphorusHomeostasisQuestionBank.splice(calciumPhosphorusHomeostasisQuestionBank.findIndex((question) => question.id === "calcium-phosphorus-079"), 0, {
  "id": "calcium-phosphorus-neonatal-ceftriaxone-compatibility",
  "question": "A 20-day-old neonate is receiving ceftriaxone and requires IV calcium. Which compatibility principle applies?",
  "choices": [
    "Concomitant ceftriaxone and IV calcium-containing products are contraindicated in neonates 28 days old or younger",
    "Give the two concurrently through separate lines because the neonatal restriction applies only to a Y-site",
    "Use the older-patient sequential flushing exception for every neonate",
    "Mix ceftriaxone with calcium gluconate after diluting both in saline"
  ],
  "answer": 0,
  "rationale": "The reviewed gluconate label contraindicates concomitant ceftriaxone and IV calcium-containing products in neonates 28 days old or younger. Separate lines do not remove that contraindication. The sequential administration exception with thorough compatible-fluid flushing applies to patients older than 28 days. Simultaneous Y-site administration and mixing are prohibited; the treating team must reconcile the treatment plan.",
  "reviewHref": "#hypocalcemia",
  "difficulty": "clinical"
});

const sourceReviewedMalignancyCalciumQuestions = {
  "calcium-phosphorus-027": {
    "choices": [
      "Primary hyperparathyroidism and malignancy",
      "Vitamin D intoxication and lithium toxicity",
      "Granulomatous disease and immobilization",
      "Thiazide use and milk-alkali syndrome"
    ],
    "rationale": "The Society emergency guidance identifies primary hyperparathyroidism and malignancy as the dominant causes. Vitamin D excess, lithium, granulomatous disease, immobilization, thiazides, and milk-alkali syndrome are recognized but less common causes; they do not replace this dominant pair. Use PTH and the clinical context to distinguish mechanisms."
  },
  "calcium-phosphorus-028": {
    "choices": [
      "QT shortening",
      "QT prolongation",
      "QT must remain unchanged",
      "ECG assessment is unnecessary even in severe cases"
    ],
    "rationale": "The acute hypercalcemia guidance identifies QT shortening and dysrhythmia. QT prolongation is the contrasting hypocalcemia pattern. An unchanged QT is not required, and severe hypercalcemia can carry cardiac risk requiring ECG assessment."
  },
  "calcium-phosphorus-029": {
    "choices": [
      "Restore intravascular volume with an individualized isotonic crystalloid plan",
      "Begin forced loop diuresis before correcting volume depletion",
      "Restrict fluids solely because the calcium is high",
      "Use free-water replacement as the sole initial intravascular resuscitation plan"
    ],
    "rationale": "Isotonic saline restores depleted intravascular volume and enhances urinary calcium excretion. The guideline requires hydration tailored to cardiac function; kidney impairment and congestion also require reassessment. Forced diuresis before volume correction can worsen depletion, fluid restriction does not correct it, and free-water replacement does not serve the same intravascular resuscitation purpose."
  },
  "calcium-phosphorus-030": {
    "choices": [
      "They can worsen volume depletion and are mainly used if fluid overload develops",
      "They should replace hydration before volume status is assessed",
      "Every mild hypercalcemia case needs forced loop diuresis",
      "Their use removes the need to monitor kidney function and electrolytes"
    ],
    "rationale": "The acute hypercalcemia guidance does not recommend routine loop diuretics for hypercalcemia. They can worsen volume depletion, and may be used judiciously for fluid overload during or after rehydration. They are not a substitute for volume assessment or an automatic first step before fluid correction."
  },
  "calcium-phosphorus-031": {
    "choices": [
      "48 to 72 hours",
      "Continue for at least 7 days before assessing tachyphylaxis",
      "Continue indefinitely until the malignancy is cured",
      "Use it alone instead of a slower antiresorptive whenever calcium initially improves"
    ],
    "rationale": "The Endocrine Society limits calcitonin to 48 to 72 hours in severe malignancy-associated hypercalcemia because tachyphylaxis develops. It is a rapid bridge, not a week-long or indefinite substitute for slower antiresorptive and cause-directed treatment."
  },
  "calcium-phosphorus-032": {
    "rationale": "Recommendation 1 strongly recommends an IV bisphosphonate or denosumab for adults with malignancy-associated hypercalcemia. Recommendation 2 conditionally suggests denosumab over an IV bisphosphonate, based on very low-certainty, largely indirect evidence. Indefinite calcitonin alone, calcium supplementation, or routinely withholding antiresorptive treatment does not match the recommendation."
  },
  "calcium-phosphorus-033": {
    "rationale": "Glucocorticoids inhibit active vitamin D production in lymphoma and granulomatous mechanisms. Additional calcitriol or calcium does not target the excess-calcium mechanism, and desmopressin is not the cause-directed therapy described in the guideline. Persistent severe or symptomatic calcitriol-associated malignancy hypercalcemia despite glucocorticoids may require an added antiresorptive."
  },
  "calcium-phosphorus-034": {
    "rationale": "Xgeva labeling warns of severe hypocalcemia, with greater risk in advanced renal dysfunction, dialysis, and inadequate calcium or vitamin D support. Mineral status must be assessed and followed even when denosumab is selected to avoid bisphosphonate renal toxicity. High albumin alone, normal magnesium, or mild isolated hypernatremia does not identify the same risk pattern."
  },
  "calcium-phosphorus-091": {
    "choices": [
      "Evaluate PTH-related peptide and other malignancy mechanisms",
      "Diagnose primary hyperparathyroidism from the high calcium despite suppressed PTH",
      "Treat the lung mass as proof of one specific calcium mechanism without further evaluation",
      "Wait for all cancer investigations before stabilizing clinically urgent symptoms"
    ],
    "rationale": "High calcium with suppressed PTH redirects evaluation toward malignancy and other non-PTH causes. PTH-related peptide is a common malignant mechanism, but a lung mass does not establish it by itself; assess the full cancer and mineral context while treating clinical urgency. Calling this PTH-dependent disease, assuming one mechanism is proven, or waiting to stabilize severe symptoms until every test returns is not justified."
  },
  "calcium-phosphorus-097": {
    "choices": [
      "Use a glucocorticoid-directed strategy and escalate antiresorptive therapy if needed",
      "Give additional calcitriol to suppress the hypercalcemia",
      "Use calcitonin alone indefinitely for durable cause control",
      "Diagnose primary hyperparathyroidism despite the suppressed PTH"
    ],
    "rationale": "High calcitriol with lymphoma fits a calcitriol-associated malignant mechanism. Glucocorticoids reduce active vitamin D production. If severe or symptomatic hypercalcemia persists despite them, the Endocrine Society conditionally suggests an IV bisphosphonate or denosumab. More calcitriol, calcitonin indefinitely, or treating the PTH result as primary hyperparathyroidism does not address this pattern."
  },
  "calcium-phosphorus-100": {
    "choices": [
      "Use carefully titrated isotonic fluid with frequent congestion and perfusion reassessment, then add mechanism-specific therapy",
      "Give a fixed large-volume saline regimen without reassessing cardiac tolerance",
      "Use forced diuresis alone without assessing intravascular depletion",
      "Delay all calcium-lowering treatment until pulmonary congestion has completely resolved"
    ],
    "rationale": "Urgent hypercalcemia treatment and limited cardiac fluid tolerance must both shape care. The guideline calls for hydration tailored to cardiac function, careful assessment for overload, and judicious loop diuretic use when needed for congestion. A fixed large-volume prescription or ignoring perfusion and overload can be harmful; a diuretic-only plan does not replace volume and mechanism assessment."
  },
  "calcium-phosphorus-106": {
    "choices": [
      "Recognize tachyphylaxis and rely on durable cause-specific therapy",
      "Continue calcitonin indefinitely as the sole calcium-lowering therapy",
      "Assume the initial improvement established permanent control of the cause",
      "Assume every antiresorptive should already have its full effect within a few hours"
    ],
    "rationale": "Calcitonin develops tachyphylaxis after a short course; the guideline limits treatment to 48 to 72 hours. A day-four rebound warrants reassessment of the durable antiresorptive response and underlying cause rather than indefinite calcitonin alone. Do not assume the early response cured the cause or that all antiresorptive agents act within the same number of hours."
  }
};
for (const question of calciumPhosphorusHomeostasisQuestionBank) {
  if (Object.hasOwn(sourceReviewedMalignancyCalciumQuestions, question.id)) Object.assign(question, sourceReviewedMalignancyCalciumQuestions[question.id]);
}
calciumPhosphorusHomeostasisQuestionBank.splice(calciumPhosphorusHomeostasisQuestionBank.findIndex((question) => question.id === "calcium-phosphorus-026"), 0, {
  "id": "calcium-phosphorus-malignancy-product-regimen",
  "question": "An adult has malignancy-associated hypercalcemia refractory to an IV bisphosphonate. Which Xgeva statement matches its labeled indication and regimen?",
  "choices": [
    "Xgeva covers this refractory indication; 120 mg subcutaneously every 4 weeks with extra doses on days 8 and 15 of the first month",
    "Use Prolia 60 mg every 6 months because denosumab products share one regimen",
    "Use the yearly Reclast osteoporosis regimen as the Xgeva dosing schedule",
    "Treat the guideline preference for denosumab as proof that Xgeva labeling has no refractory-indication restriction"
  ],
  "answer": 0,
  "rationale": "Xgeva labeling specifies hypercalcemia of malignancy refractory to bisphosphonates and 120 mg subcutaneously every 4 weeks with additional doses on days 8 and 15 in the first month. Prolia and Reclast osteoporosis schedules are different. The Endocrine Society guideline recommendation and the labeled indication have different scopes; verify the actual product and treatment plan.",
  "reviewHref": "#hypercalcemia",
  "difficulty": "clinical"
});
calciumPhosphorusHomeostasisQuestionBank.splice(calciumPhosphorusHomeostasisQuestionBank.findIndex((question) => question.id === "calcium-phosphorus-109"), 0, {
  "id": "calcium-phosphorus-malignancy-renal-regimen",
  "question": "A patient with malignancy-associated hypercalcemia and renal impairment is being considered for zoledronic acid. Which medication-review principle is most appropriate?",
  "choices": [
    "Review the hypercalcemia-specific label, current renal function, and guideline renal-infusion guidance together",
    "Copy the myeloma/bone-metastasis dose table automatically to every zoledronic acid indication",
    "Assume that no initial dose adjustment means renal monitoring is unnecessary",
    "Infuse faster than 15 minutes to reduce the time the kidneys are exposed to the drug"
  ],
  "answer": 0,
  "rationale": "The label separates HCM from the creatinine-clearance dose table for myeloma and bone metastases, requires creatinine assessment, and specifies an infusion of at least 15 minutes. Severe impairment requires a risk-benefit assessment. The Endocrine Society additionally advises renal dosing and longer infusions for HCM with CrCl below 60 mL/min. Reconcile indication, renal measures, label, and guidance rather than copying one table or abandoning monitoring.",
  "reviewHref": "#hypercalcemia",
  "difficulty": "clinical"
});

const sourceReviewedMineralInterpretationQuestions = {
  "calcium-phosphorus-002": {
    "choices": [
      "Reduced proximal phosphate reabsorption",
      "Increased proximal phosphate reabsorption",
      "Suppressed phosphate excretion because PTH conserves both calcium and phosphate",
      "Reduced phosphate filtration as its principal direct phosphate action"
    ],
    "rationale": "PTH inhibits proximal tubular phosphate reabsorption and promotes urinary phosphate excretion. Its calcium-conserving action does not mean that phosphate is also retained. The clinical review distinguishes this tubular transport effect from intestinal absorption or a primary reduction in filtration."
  },
  "calcium-phosphorus-004": {
    "choices": [
      "It increases absorption of calcium and phosphate",
      "It reduces intestinal absorption of both calcium and phosphate",
      "It increases calcium absorption while necessarily blocking phosphate absorption",
      "It causes renal phosphate excretion with no intestinal mineral effect"
    ],
    "rationale": "Calcitriol increases intestinal absorption of both calcium and phosphate. The book describes its calcium-absorption role, and the phosphate review and endogenous-PTH label explain the phosphate effect. Reduced absorption of both minerals, a mandatory opposing effect on phosphate, or an exclusively renal action does not match this intestinal mechanism."
  },
  "calcium-phosphorus-005": {
    "choices": [
      "Promote renal phosphate excretion and suppress calcitriol",
      "Increase proximal renal phosphate reabsorption",
      "Promote phosphaturia while increasing renal calcitriol production",
      "Increase intestinal absorption as its only phosphate-regulating effect"
    ],
    "rationale": "FGF23 decreases proximal tubular phosphate reabsorption and reduces active vitamin D production. This promotes phosphate excretion while lowering calcitriol, unlike the active-vitamin-D synthesis effect described for endogenous PTH. Increased renal reabsorption, increased calcitriol production, or an exclusively intestinal mechanism does not describe the FGF23 pathway."
  },
  "calcium-phosphorus-007": {
    "choices": [
      "Phosphate retention, reduced calcitriol effect, and elevated PTH",
      "Enhanced renal phosphate clearance, high calcitriol, and suppressed PTH",
      "High calcium with suppressed PTH as a requirement for secondary hyperparathyroidism",
      "Low phosphate from increased renal clearance with unchanged calcitriol at every CKD stage"
    ],
    "rationale": "Advanced CKD can impair phosphate clearance and active vitamin D physiology, creating hypocalcemic pressure and secondary PTH elevation. The book and KDIGO describe this linked pattern; it is not a requirement that every value be abnormal in every patient. Modest PTH increases can be adaptive, so assess trends and modifiable factors rather than treating one elevated result automatically."
  },
  "calcium-phosphorus-009": {
    "question": "What does sustained excess PTH generally do to bone mineral flux?",
    "choices": [
      "It favors bone resorption and mineral release",
      "It stops all bone remodeling",
      "It mobilizes calcium from bone while preventing any phosphate release",
      "It lowers extracellular calcium by permanently trapping both minerals in bone"
    ],
    "rationale": "Sustained excess PTH can favor bone resorption and mineral release, as the book illustrates in CKD-related secondary hyperparathyroidism. Endogenous PTH stimulates bone turnover to mobilize both calcium and phosphate; its renal phosphate-excretion effect helps explain why serum phosphate does not simply track that release. The statement concerns excess signaling, not a claim that all PTH exposure stops remodeling or has one identical bone effect."
  },
  "calcium-phosphorus-013": {
    "choices": [
      "PTH-dependent hypercalcemia",
      "A PTH-independent pattern with appropriately suppressed PTH",
      "Normal feedback that rules out further assessment",
      "Calcitriol-mediated hypercalcemia with PTH suppression"
    ],
    "rationale": "During hypercalcemia, an elevated or inappropriately unsuppressed PTH points toward a PTH-dependent process. Primary or tertiary hyperparathyroidism may fit, but familial hypocalciuric hypercalcemia can mimic the biochemical pattern, so the calcium-PTH pair is not a complete diagnosis. The alternatives describe suppressed-PTH physiology or incorrectly dismiss the abnormal pair."
  },
  "calcium-phosphorus-014": {
    "choices": [
      "Malignancy, vitamin D mechanisms, medications, and other non-PTH causes",
      "Primary hyperparathyroidism solely because calcium is elevated",
      "A normal calcium-PTH pair requiring no further evaluation",
      "One proven malignant mechanism without additional clinical assessment"
    ],
    "rationale": "High calcium with suppressed PTH redirects evaluation toward malignancy and other non-PTH causes, including vitamin D-related or medication mechanisms. It does not prove one specific malignancy pathway, make the pair normal, or support primary PTH excess solely because calcium is high. Use the clinical history, medicines and additional mineral data to distinguish causes."
  },
  "calcium-phosphorus-015": {
    "choices": [
      "Ionized or confirmed calcium, magnesium, phosphate, PTH, kidney function, and vitamin D",
      "Total calcium alone without albumin or clinical context",
      "PTH alone while ignoring the phosphate, magnesium, and kidney results",
      "Vitamin D alone before assessing clinically urgent hypocalcemia"
    ],
    "rationale": "Confirm the calcium abnormality and assess magnesium, phosphate, PTH, kidney function, and vitamin D together. The Society emergency guidance lists this mineral-hormone-renal evaluation, and calcium chloride dosing uses serum ionized calcium in the acute setting. A single isolated test misses important context; evaluation must accompany, rather than delay, urgent stabilization when symptoms warrant it."
  },
  "calcium-phosphorus-090": {
    "choices": [
      "PTH-dependent hypercalcemia",
      "A suppressed-PTH malignancy pattern despite the measured elevated PTH",
      "Vitamin D intoxication established by recurrent stones without interpreting PTH",
      "Normal feedback because the calcium is above the reference interval"
    ],
    "rationale": "Calcium 11.8 mg/dL with an elevated PTH is a PTH-dependent biochemical pattern. Primary or tertiary hyperparathyroidism may explain it, but the PTH result alone does not settle the precise cause; the Society guidance warns that familial hypocalciuric hypercalcemia can mimic the pair. The alternatives disregard the elevated PTH or wrongly call the abnormal results normal."
  }
};
for (const question of calciumPhosphorusHomeostasisQuestionBank) {
  if (Object.hasOwn(sourceReviewedMineralInterpretationQuestions, question.id)) Object.assign(question, sourceReviewedMineralInterpretationQuestions[question.id]);
}

Object.assign(calciumPhosphorusHomeostasisQuestionBank.find((question) => question.id === "calcium-phosphorus-050"), {
  "choices": [
    "Aluminum can accumulate and cause neurologic, bone, and hematologic toxicity",
    "Their phosphate-binding effect prevents any tissue accumulation",
    "Their long-term limitation is calcium loading alone, without aluminum toxicity",
    "Their exposure is restricted to the gut even when kidney function is reduced"
  ],
  "rationale": "Aluminum binders can lower phosphate, but reduced renal clearance allows absorbed aluminum to accumulate. The book identifies nervous-system and bone toxicity; NKF KDOQI also describes microcytic anemia without iron deficiency. KDIGO recommends avoiding long-term aluminum-containing phosphate binders. Binding phosphate does not prevent tissue accumulation, and the concern extends beyond calcium loading."
});

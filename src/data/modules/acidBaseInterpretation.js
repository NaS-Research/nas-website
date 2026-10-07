import { acidBaseInterpretationQuestionBank } from "@/data/questionBanks/acidBaseInterpretation";

export const acidBaseInterpretationModule = {
  slug: "acid-base-interpretation",
  number: "03",
  title: "Acid-Base Interpretation",
  source: "NaS synthesis of current acid-base interpretation guidance",
  description: "Move from pH, PaCO₂, bicarbonate, and clinical context to a complete diagnosis that exposes compensation, mixed disorders, cause, and treatment priorities.",
  topics: ["Blood gas reasoning", "Expected compensation", "Anion gap", "Cause-directed treatment"],
  outcomes: [
    "Distinguish acidemia and alkalemia from the processes causing them.",
    "Test whether compensation is appropriate rather than assuming a simple disorder.",
    "Use albumin-corrected anion gap and delta relationships to expose mixed metabolic states.",
    "Build a cause-directed treatment and monitoring plan without treating pH in isolation.",
  ],
  submodules: [
    {
      slug: "acid-base-foundations",
      title: "Buffer Systems and Organ Control",
      summary: "The bicarbonate to carbon dioxide ratio links cellular acid production to pulmonary ventilation and renal acid handling.",
      concepts: ["Henderson-Hasselbalch relationship", "Volatile and fixed acid", "Pulmonary carbon dioxide removal", "Renal bicarbonate and ammonium handling"],
      visual: "acid-buffer",
      application: "A pH result is a snapshot of a ratio. Explain which side of the ratio changed, which organ should compensate, and whether the observed response is plausible for the time course.",
      lesson: [
        { heading: "Name the state precisely", body: "Acidemia means arterial pH is below the reference range, while alkalemia means it is above. Acidosis and alkalosis describe physiologic processes that push pH in either direction. More than one process can coexist, so a nearly normal pH never excludes a serious mixed disorder." },
        { heading: "Link the ratio to organ function", body: "The lungs regulate PaCO₂ through alveolar ventilation within minutes. The kidneys reclaim filtered bicarbonate, generate new bicarbonate, and excrete net acid through titratable acids and ammonium over hours to days. Compensation limits a pH change but does not remove the underlying cause." },
        { heading: "Keep oxygenation separate", body: "PaO₂ and oxygen saturation address oxygenation, while PaCO₂ reflects ventilation. A venous blood gas can often support acid-base assessment when oxygenation is evaluated separately, but an arterial sample is required when precise arterial oxygenation or a large arterial-venous difference matters." },
      ],
      keyPoints: ["Use acidemia and alkalemia for the measured pH state.", "Use acidosis and alkalosis for the underlying processes.", "Compensation does not overshoot into the opposite pH state in a simple disorder.", "A normal pH can conceal two opposing primary processes."],
      check: { question: "A patient has pH 7.40, PaCO₂ 20 mmHg, and HCO₃⁻ 12 mmol/L. What is the safest interpretation?", choices: ["A mixed or compensated disorder is possible despite the normal pH", "The gas is normal because pH is 7.40", "Only oxygenation can be assessed", "The values prove laboratory error"], answer: 0, rationale: "Both PaCO₂ and bicarbonate are markedly abnormal. A normal ratio can result from compensation or opposing primary disorders.", reviewHref: "#acid-base-foundations" },
    },
    {
      slug: "systematic-blood-gas",
      title: "A Systematic Blood Gas Method",
      summary: "A fixed sequence prevents a striking value from distracting from the complete physiologic pattern.",
      concepts: ["Clinical context and sampling", "pH direction", "Primary respiratory or metabolic process", "Oxygenation, electrolytes, and repeat trends"],
      visual: "acid-sequence",
      application: "Read the history before naming the disorder. Vomiting, diarrhea, ventilation, shock, kidney function, diabetes, toxins, medications, and timing determine which mathematical possibilities are clinically credible.",
      lesson: [
        { heading: "Start with validity and context", body: "Confirm sample type, collection conditions, and whether the chemistry bicarbonate and blood gas bicarbonate are reasonably concordant. Identify immediate threats such as shock, hypoxemia, toxic exposure, severe hyperkalemia, altered mental status, or inability to sustain compensatory ventilation." },
        { heading: "Determine the dominant direction", body: "If pH is low, decide whether low bicarbonate or high PaCO₂ best explains the acidemia. If pH is high, decide whether high bicarbonate or low PaCO₂ best explains the alkalemia. When pH is near normal, its position relative to 7.40 and the expected compensation help reveal the dominant process." },
        { heading: "Never stop after the first label", body: "After identifying a primary process, calculate the expected compensatory response. Then calculate the anion gap when metabolic acidosis is present or suspected. A mismatch indicates an additional primary disorder, not unusually strong compensation." },
      ],
      keyPoints: ["Interpret all values, not only the pH.", "Use the same sequence under time pressure.", "Repeat the gas when physiology is changing or the sample is questionable.", "Escalate immediately when compensation is failing."],
      check: { question: "A patient with metabolic acidosis has a PaCO₂ much higher than Winter's expected range. What additional process is present?", choices: ["Respiratory acidosis", "Respiratory alkalosis", "Metabolic alkalosis only", "Normal compensation"], answer: 0, rationale: "Higher than expected PaCO₂ indicates inadequate ventilation and a concurrent respiratory acidosis.", reviewHref: "#systematic-blood-gas" },
    },
    {
      slug: "compensation-mixed-disorders",
      title: "Expected Compensation and Mixed Disorders",
      summary: "Compensation is predictable within a range. Values outside that range expose a second primary process.",
      concepts: ["Winter's formula", "Metabolic alkalosis compensation", "Acute and chronic respiratory change", "Double and triple disorders"],
      visual: "acid-matrix",
      application: "State the expected range before naming a mixed disorder. The formula is a diagnostic comparison, not a treatment target.",
      lesson: [
        { heading: "Use Winter's formula for metabolic acidosis", body: "Expected PaCO₂ equals 1.5 times bicarbonate plus 8, with a range of plus or minus 2 mmHg. A measured PaCO₂ above the range indicates concurrent respiratory acidosis. A value below the range indicates concurrent respiratory alkalosis." },
        { heading: "Estimate other compensations", body: "In metabolic alkalosis, PaCO₂ generally rises about 0.7 mmHg for each 1 mmol/L rise in bicarbonate above 24, with a broad range of about plus or minus 5. In acute respiratory acidosis, bicarbonate rises about 1 mmol/L per 10 mmHg PaCO₂ increase; in chronic disease, about 3.5 to 4. In acute respiratory alkalosis, bicarbonate falls about 2 mmol/L per 10 mmHg PaCO₂ decrease; in chronic disease, about 4 to 5." },
        { heading: "Respect time course and uncertainty", body: "Renal compensation requires time, so an apparently chronic pattern is not plausible immediately after an acute event. These empirical rules are approximations. Integrate repeat measurements, baseline lung and kidney function, and treatments already given." },
      ],
      keyPoints: ["Compensation moves pH toward normal but does not create the opposite state.", "A value outside the expected range means another primary process.", "Acute and chronic respiratory disorders have different renal compensation.", "Do not use compensation formulas as dosing equations."],
      check: { question: "For HCO₃⁻ 12 mmol/L, Winter's formula predicts which PaCO₂ range?", choices: ["24 to 28 mmHg", "10 to 14 mmHg", "34 to 38 mmHg", "46 to 50 mmHg"], answer: 0, rationale: "1.5 times 12 plus 8 equals 26 mmHg, with an expected range of 24 to 28.", reviewHref: "#compensation-mixed-disorders" },
    },
    {
      slug: "anion-gap-metabolic-acidosis",
      title: "Anion Gap and Metabolic Acidosis",
      summary: "The anion gap detects unmeasured anions. Albumin correction and delta analysis keep a normal-looking value from hiding a complex disorder.",
      concepts: ["Anion gap and albumin correction", "GOLD MARK causes", "Normal-gap metabolic acidosis", "Delta gap and urine studies"],
      visual: "acid-gap",
      application: "Calculate the gap using the local laboratory convention and reference range. Correct for albumin when it is low, then investigate the cause rather than treating the gap itself.",
      lesson: [
        { heading: "Calculate and correct", body: "Without potassium, the anion gap equals sodium minus chloride plus bicarbonate. The local normal range depends on the assay. A common albumin correction adds about 2.5 mEq/L for each 1 g/dL that albumin is below 4 g/dL. The French expert panel recommends the albumin-corrected gap over the uncorrected value for distinguishing acid load from base loss." },
        { heading: "Use current etiologic groups", body: "GOLD MARK organizes common high-gap causes: glycols, oxoproline, L-lactate, D-lactate, methanol, aspirin, renal failure, and ketoacidosis. The mnemonic is a prompt, not a substitute for exposure history, measured lactate and ketones, kidney function, osmolar gap, and targeted toxicology." },
        { heading: "Investigate normal-gap acidosis", body: "Bicarbonate loss through diarrhea, renal tubular acidosis, urinary diversion, chloride-rich fluid, and impaired renal acid excretion can produce hyperchloremic acidosis. The urine anion gap and urine pH are selected tools when the cause is not obvious, not universal screening tests." },
        { heading: "Use delta relationships cautiously", body: "Comparing the rise in anion gap with the fall in bicarbonate can reveal an additional metabolic alkalosis or normal-gap acidosis. Baseline gap, albumin, timing, renal function, and prior fluid therapy can change the relationship, so report it as supporting evidence rather than a standalone diagnosis." },
      ],
      keyPoints: ["Use the laboratory's own reference interval.", "Correct a low anion gap for hypoalbuminemia.", "Measure blood ketones rather than relying on urine ketones when diagnosing ketoacidosis.", "A normal uncorrected gap does not exclude unmeasured acid when albumin is low."],
      check: { question: "Na 138, Cl 106, HCO₃⁻ 18, and albumin 2 g/dL produce an uncorrected gap of 14. What is the albumin-corrected gap using 2.5 per g/dL below 4?", choices: ["19 mEq/L", "14 mEq/L", "9 mEq/L", "24 mEq/L"], answer: 0, rationale: "The albumin deficit is 2 g/dL, so 5 mEq/L is added to the uncorrected gap of 14.", reviewHref: "#anion-gap-metabolic-acidosis" },
    },
    {
      "slug": "metabolic-treatment",
      "title": "Metabolic Acidosis and Alkalosis Treatment",
      "summary": "Treat the cause and immediate physiologic threats, then select alkali, chloride, potassium, or specialist support for the mechanism and reassess benefit and harm.",
      "concepts": [
        "Cause-directed acidosis and DKA care",
        "Bicarbonate indication and ventilation",
        "Trial outcomes and population limits",
        "Urine chloride, volume status, and alkalosis"
      ],
      "visual": "acid-treatment",
      "application": "Explain the cause, immediate threats, proposed treatment and objective, ventilation and fluid consequences, electrolyte surveillance, and when the team will reassess or escalate. Interpret urine chloride together with blood pressure, volume status, and recent medicines.",
      "lesson": [
        {
          "heading": "Stabilize and reverse the cause",
          "body": "Assess perfusion, ventilation, mental status, electrolytes, and the clinical trajectory alongside the blood gas. Correct the process generating acid or losing base: restore perfusion and control the cause in shock, treat ketoacidosis, investigate toxic exposure, and replace gastrointestinal or renal bicarbonate losses when poorly tolerated. Repeat lactate when elevated to assess the response, without treating it as a diagnosis. Severe or refractory acidosis with kidney dysfunction may require kidney replacement therapy; a bicarbonate response does not remove that possibility."
        },
        {
          "heading": "Keep DKA treatment and potassium linked",
          "body": "Adult DKA care uses fluids, insulin, electrolyte management, and treatment of the precipitant. The 2024 hyperglycemic-crisis consensus does not recommend routine bicarbonate; it advises considering it for severe acidosis with pH below 7.0. If potassium is below 3.5 mmol/L, begin potassium replacement and delay insulin until potassium rises above 3.5 mmol/L. Insulin can further lower serum potassium even when the initial value is normal or high. Fluid amount and rate must account for cardiac and kidney disease, and biochemical and bedside reassessment must continue during treatment."
        },
        {
          "heading": "Define what bicarbonate is meant to achieve",
          "body": "Name the indication and objective before giving bicarbonate. Buffering hydrogen ions produces carbon dioxide that the lungs must eliminate, so assess whether ventilation can meet the added load. Monitor pH and PaCO₂, sodium, potassium, ionized calcium, kidney function, and fluid balance at intervals matched to acuity and the intervention. Hypokalemia, reduced ionized calcium, sodium and fluid loading, and excessive alkalinization can complicate treatment. A higher pH alone does not establish restored perfusion, resolved ketoacidosis, or improved survival."
        },
        {
          "heading": "Read the bicarbonate trial within its limits",
          "body": "BICARICU-2 studied critically ill adults with pH at or below 7.20, bicarbonate at or below 20 mEq/L, PaCO₂ at or below 45 mmHg, and stage 2 or 3 acute kidney injury, with additional illness-severity criteria. In its primary analysis, 90-day mortality was 62.1% with bicarbonate and 61.7% with control, without a statistically significant reduction. Kidney replacement therapy by day 28 was used in 35% and 50%, respectively. That secondary finding does not prove kidney recovery or a survival benefit. The open-label design and acidemia-based dialysis criteria could affect when dialysis was started. Ketoacidosis and specified poisonings were excluded, so do not transfer these results to those indications."
        },
        {
          "heading": "Correct chloride-responsive alkalosis",
          "body": "Vomiting, nasogastric losses, and diuretic-associated chloride depletion can generate alkalosis, while volume depletion and potassium deficiency maintain it. Urine chloride below 20 mmol/L supports a chloride-responsive pattern when the history and volume assessment fit. Treat the ongoing loss and replace chloride and potassium according to volume status, kidney function, and the applicable replacement protocol. In a volume-depleted patient, chloride-containing fluid restores perfusion and permits bicarbonate excretion; potassium repletion also reduces renal mechanisms sustaining alkalosis. Recent active diuretic exposure can raise urine chloride, so one result is not a complete diagnosis."
        },
        {
          "heading": "Target resistant alkalosis and select rescue care",
          "body": "Urine chloride above 20 mmol/L with hypertension and volume expansion suggests a mineralocorticoid-related mechanism; high urine chloride can also occur with renal salt wasting or active diuretics. Investigate the cause and correct potassium deficiency instead of giving saline indiscriminately. Selected mineralocorticoid states may require hormone-directed treatment or blockade. Acetazolamide can promote bicarbonate excretion when further volume expansion is undesirable, but potassium loss and kidney dysfunction limit its use. Severe refractory alkalosis needs specialist assessment; hydrochloric acid infusion is an uncommon rescue intervention requiring central access and close monitoring, rather than routine replacement therapy."
        }
      ],
      "keyPoints": [
        "Reverse the cause while supporting perfusion and ventilation.",
        "Adult DKA usually resolves with fluids, insulin, and electrolyte management; bicarbonate is reserved for selected severe acidosis.",
        "BICARICU-2 found no statistically significant mortality reduction; less dialysis use does not prove kidney recovery.",
        "Interpret urine chloride with volume status, blood pressure, and medicine exposure.",
        "Correct potassium and chloride deficits and monitor the response and complications."
      ],
      "check": {
        "question": "Which interpretation of BICARICU-2 is most defensible for its critically ill adult population with severe metabolic acidemia and stage 2 or 3 AKI?",
        "choices": [
          "No statistically significant reduction in 90-day mortality was found, while kidney replacement therapy by day 28 was used less often",
          "Less kidney replacement therapy establishes that bicarbonate improved 90-day survival",
          "The trial establishes routine bicarbonate treatment for DKA because all severe acidosis has the same mechanism",
          "A higher pH establishes kidney recovery, so other kidney replacement indications can be disregarded"
        ],
        "answer": 0,
        "rationale": "The primary mortality result was not statistically significant; less kidney replacement therapy was a secondary outcome. Neither that outcome nor a pH change proves recovery or survival benefit. The trial excluded ketoacidosis and certain poisonings, and urgent kidney replacement indications still require assessment.",
        "reviewHref": "#metabolic-treatment"
      }
    },
    {
      slug: "respiratory-integrated",
      title: "Respiratory Disorders and Integrated Cases",
      visual: "acid-integrated",
      summary: "Respiratory acid-base disorders are ventilation disorders. Treatment protects gas exchange and reverses the trigger while the complete pattern is reassessed.",
      concepts: ["Acute and chronic hypoventilation", "Hyperventilation and hypoxemia", "Ventilatory failure", "Medication and toxicologic causes"],
      application: "A patient who is tiring during compensation can deteriorate rapidly. Treat airway, breathing, oxygenation, and the cause before attempting to normalize a number pharmacologically.",
      lesson: [
        { heading: "Treat respiratory acidosis by restoring ventilation", body: "Opioids, sedatives, neuromuscular weakness, obstructive lung disease, airway disease, and ventilator problems can reduce alveolar ventilation. Support the airway, use targeted reversal when appropriate, treat bronchospasm or infection, and provide noninvasive or invasive ventilation when needed. Routine bicarbonate does not correct the ventilatory failure and can add carbon dioxide." },
        { heading: "Treat respiratory alkalosis by finding the driver", body: "Pain, anxiety, hypoxemia, sepsis, pregnancy, liver disease, salicylate toxicity, and inappropriate ventilator settings can cause hyperventilation. Exclude organic illness and correct the cause. Paper-bag rebreathing can worsen hypoxemia and is not recommended." },
        { heading: "Recognize failing compensation", body: "A patient with metabolic acidosis depends on increased ventilation to control pH. A PaCO₂ above Winter's range, falling mental status, fatigue, or reduced minute ventilation may signal impending respiratory failure. If intubation is required, the ventilator must initially support the high pre-intubation minute ventilation while definitive care proceeds." },
      ],
      keyPoints: ["PaCO₂ is inversely related to alveolar ventilation.", "Paper-bag rebreathing is unsafe.", "Mixed respiratory and metabolic disease is common in critical illness.", "Do not erase compensatory hyperventilation without replacing it mechanically."],
      check: { question: "Why can intubation precipitate arrest in a patient with severe metabolic acidosis?", choices: ["A sudden fall in compensatory minute ventilation can rapidly raise PaCO₂ and lower pH", "Intubation always lowers bicarbonate to zero", "Oxygen directly creates lactic acid", "The anion gap becomes uninterpretable"], answer: 0, rationale: "These patients may rely on very high ventilation. Apnea or inadequate post-intubation minute ventilation can cause abrupt acidemia.", reviewHref: "#respiratory-integrated" },
    },
  ],
  references: [
    { label: "French expert panel guideline on metabolic acidosis", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6695455/" },
    { label: "BICARICU-2 randomized clinical trial", href: "https://jamanetwork.com/journals/jama/fullarticle/2840824" },
    { label: "2024 consensus report on adult hyperglycemic crises", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11272983/" },
    { label: "British Thoracic Society guideline for oxygen use", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5531304/" },
    {"label": "Do et al. (2022): Metabolic alkalosis, Core Curriculum", "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10947768/"},
    {"label": "2024 adult hyperglycemic-crisis consensus: Simultaneous Diabetologia publication", "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11343900/"},
    {"label": "Achanti and Szerlip (2023): Critical-care acid-base treatment review", "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10101555/"},
    {"label": "FDA sodium bicarbonate label: Mechanism and pulmonary carbon dioxide elimination", "href": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/220790Orig1s000lbl.pdf"},
  ],
  questionBank: acidBaseInterpretationQuestionBank,
};

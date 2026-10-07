import { acidBaseInterpretationQuestionBank } from "@/data/questionBanks/acidBaseInterpretation";

export const acidBaseInterpretationModule = {
  slug: "acid-base-interpretation",
  number: "03",
  title: "Acid-Base Interpretation",
  source: "RxPrep 2023 acid-base sections, supplemented by primary physiology, guidelines, and clinical studies",
  description: "Move from pH, PaCO₂, bicarbonate, and clinical context to a complete diagnosis that exposes compensation, mixed disorders, cause, and treatment priorities.",
  topics: ["Buffer physiology and sampling", "Systematic gas interpretation", "Expected compensation and mixed disorders", "Anion gap and albumin", "Cause-directed treatment and ventilation"],
  outcomes: ["Distinguish measured acidemia or alkalemia from primary and compensatory processes.", "Apply a consistent gas and chemistry method with specimen, timing, and clinical context.", "Calculate expected compensation and albumin-corrected anion gap and qualify mixed-disorder conclusions.", "Recognize the limitations of delta and urine studies and select cause-specific assessment.", "Explain cause-directed treatment, evidence limits, ventilation risks, and reassessment."],
  submodules: [
    {
      "slug": "acid-base-foundations",
      "title": "Buffer Systems and Organ Control",
      "summary": "Interpret the logarithmic bicarbonate-carbon dioxide relationship, then distinguish the measured pH state from the processes and organ responses behind it.",
      "concepts": [
        "Henderson-Hasselbalch relationship",
        "Volatile and fixed acid",
        "Pulmonary carbon dioxide removal",
        "Renal bicarbonate and ammonium handling"
      ],
      "visual": "acid-buffer",
      "application": "Describe the measured state, the changed buffer components, the time course, and whether arterial measurements are needed. A normal pH does not establish normal physiology.",
      "lesson": [
        {
          "heading": "Name the measured state and the process",
          "body": "Use the laboratory reference interval for arterial pH; 7.35-7.45 is the interval used in the supplied book. Acidemia and alkalemia name values below and above that interval. Acidosis and alkalosis name processes that lower and raise pH. Several processes may coexist, so even a normal pH can accompany severe abnormalities."
        },
        {
          "heading": "Read the buffer relationship as a logarithm",
          "body": "At 37°C, the conventional relationship is pH ≈ 6.1 + log₁₀[HCO₃⁻ / (0.03 × PaCO₂)], with bicarbonate in mmol/L and PaCO₂ in mmHg. Increasing bicarbonate relative to dissolved carbon dioxide raises pH; increasing carbon dioxide relative to bicarbonate lowers it. pH is not directly proportional to this ratio. The equation checks consistency, while compensation and clinical context identify the processes."
        },
        {
          "heading": "Separate reclamation, new base, and adaptation",
          "body": "Alveolar ventilation removes carbon dioxide, making this an open buffer system. The kidneys reclaim filtered bicarbonate; net acid excretion as ammonium and titratable acid adds new bicarbonate to the body. Ventilatory adaptation begins rapidly, while a full renal response takes days. Timing and kidney or lung disease limit the response; compensation does not remove the primary cause."
        },
        {
          "heading": "Distinguish ventilation, oxygenation, and sample type",
          "body": "PaCO₂ reflects carbon dioxide production relative to effective alveolar ventilation. PaO₂ and oxygen saturation address oxygenation. Venous pH can help selected stable-patient assessments, but venous PCO₂ is not interchangeable with PaCO₂ for precise compensation calculations. Shock, a need for arterial oxygenation, or uncertain arterial-venous agreement may require an arterial gas. Interpret the specimen with oxygen delivery and ventilation at collection."
        }
      ],
      "keyPoints": [
        "Use acidemia and alkalemia for the measured state, and acidosis and alkalosis for processes.",
        "pH follows the logarithm of the bicarbonate-carbon dioxide ratio.",
        "Renal bicarbonate reclamation and new bicarbonate generation are different functions.",
        "Normal pH and plausible compensation do not exclude additional disease."
      ],
      "check": {
        "question": "A gas reports pH about 7.40, PaCO₂ 20 mmHg, and HCO₃⁻ 12 mmol/L. Which conclusion is safest before the time course and clinical context are known?",
        "choices": [
          "The components are abnormal; compare compensation and context rather than calling the gas normal",
          "Normal pH establishes normal ventilation and acid-base balance",
          "These values establish a pure acute respiratory alkalosis without further assessment",
          "The PaCO₂ value can be disregarded because bicarbonate is low"
        ],
        "answer": 0,
        "rationale": "PaCO₂ and bicarbonate are both markedly reduced. Winter’s comparison for a metabolic acidosis gives 24-28 mmHg, so PaCO₂ 20 suggests an added respiratory alkalosis in that setting; chronic respiratory alkalosis with renal adaptation is another contextual possibility. A nearly normal pH alone does not distinguish them.",
        "reviewHref": "#acid-base-foundations"
      }
    },
    {
      "slug": "systematic-blood-gas",
      "title": "A Systematic Blood Gas Method",
      "summary": "Use specimen validity, clinical stability, pH direction, expected compensation, and electrolyte gaps to build and communicate the complete interpretation.",
      "concepts": [
        "Clinical context and sampling",
        "pH direction",
        "Primary respiratory or metabolic process",
        "Oxygenation, electrolytes, and repeat trends"
      ],
      "visual": "acid-sequence",
      "application": "Work through the same sequence while stabilizing urgent threats. State what the data show, what remains uncertain, and which reassessment will distinguish the possibilities.",
      "lesson": [
        {
          "heading": "Validate the specimen while assessing the patient",
          "body": "Confirm identity, arterial or venous site, collection time, oxygen delivery, ventilation, and recent treatment. Air contamination and delayed analysis can alter gas results. Compare blood-gas bicarbonate with chemistry total CO₂ in their sampling context rather than demanding exact equality. A questionable result needs clarification or repeat sampling, while shock, hypoxemia, toxic exposure, or ventilatory failure needs immediate care."
        },
        {
          "heading": "Use pH direction without overcalling a single disorder",
          "body": "With acidemia, low bicarbonate and high PaCO₂ identify acidifying components; with alkalemia, high bicarbonate and low PaCO₂ identify alkalinizing components. Determine which fits the history and timing, then test compensation. When pH is near normal, its side of 7.40 is a clue rather than proof of which process began first or whether the disorder is simple."
        },
        {
          "heading": "Test compensation before accepting the label",
          "body": "Compare the measured response with the expected response for the proposed process and time course. Values outside an empirical compensation range support an additional process, after checking specimen validity. Components moving in the same direction do not by themselves prove that compensation is appropriate."
        },
        {
          "heading": "Calculate the gap and communicate the cause",
          "body": "Calculate the anion gap from a contemporaneous chemistry panel even when pH is normal, and consider albumin and the local reference interval. Assess delta relationships when a high-gap metabolic acidosis is established. Combine the results with perfusion, lactate, ketones, kidney function, medicines, and exposure history. Communicate the measured state, processes, compensation, suspected cause, immediate threats, plan, and repeat trends."
        }
      ],
      "keyPoints": [
        "Check the specimen and clinical context before interpreting a striking value.",
        "Compare compensation; do not infer it from the direction of change alone.",
        "A normal pH does not remove the need to calculate the gap.",
        "Repeat changing or questionable measurements and support urgent threats."
      ],
      "check": {
        "question": "A patient with metabolic acidosis has a PaCO₂ much higher than Winter's expected range. What additional process is present?",
        "choices": [
          "Respiratory acidosis",
          "Respiratory alkalosis",
          "Metabolic alkalosis only",
          "Normal compensation"
        ],
        "answer": 0,
        "rationale": "Higher than expected PaCO₂ indicates inadequate ventilation and a concurrent respiratory acidosis.",
        "reviewHref": "#systematic-blood-gas"
      }
    },
    {
      "slug": "compensation-mixed-disorders",
      "title": "Expected Compensation and Mixed Disorders",
      "summary": "Use approximate responses with their time course to distinguish adaptation from an additional process; formulas compare physiology and do not prescribe treatment.",
      "concepts": [
        "Winter's formula",
        "Metabolic alkalosis compensation",
        "Acute and chronic respiratory change",
        "Double and triple disorders"
      ],
      "visual": "acid-matrix",
      "application": "Write the expected response before comparing the measured value. Qualify the conclusion using baseline function, specimen type, timing, and treatment.",
      "lesson": [
        {
          "heading": "Work through Winter’s comparison",
          "body": "For metabolic acidosis, expected PaCO₂ ≈ 1.5 × HCO₃⁻ + 8 ± 2 mmHg. If bicarbonate is 12 mmol/L, the midpoint is 26 and the range is 24-28 mmHg. A PaCO₂ above that range supports concurrent respiratory acidosis; a value below supports concurrent respiratory alkalosis. Use an arterial value when a precise PaCO₂ comparison matters."
        },
        {
          "heading": "Estimate the response to metabolic alkalosis",
          "body": "PaCO₂ generally rises about 0.5-0.7 mmHg for each 1 mmol/L bicarbonate increase above baseline. This is an approximate response with biologic variation, not an exact ventilator target. Markedly excessive or insufficient carbon dioxide retention requires evaluation for another respiratory process and for limits to ventilation."
        },
        {
          "heading": "Compare acute and chronic respiratory acidosis",
          "body": "Using illustrative baselines of PaCO₂ 40 mmHg and bicarbonate 24 mmol/L, acute respiratory acidosis raises bicarbonate by about 1 mmol/L per 10 mmHg PaCO₂ rise. The critical-care review uses about 3.5 mmol/L per 10 mmHg for chronic adaptation. These estimates help identify a bicarbonate response too high or too low for the history; they do not prove chronicity without timing and prior values."
        },
        {
          "heading": "Compare acute and chronic respiratory alkalosis",
          "body": "For a PaCO₂ decrease below the illustrative 40 mmHg baseline, bicarbonate falls about 2 mmol/L per 10 mmHg acutely and about 5 mmol/L per 10 mmHg with chronic adaptation in the same review. A bicarbonate change outside the expected contextual response suggests an added metabolic process. A low bicarbonate alone can therefore reflect metabolic acidosis or adaptation to respiratory alkalosis."
        },
        {
          "heading": "Respect timing and uncertainty",
          "body": "Ventilatory responses start rapidly, but complete adaptation is not immediate. Renal adaptation to persistent respiratory change takes days. Baseline values, kidney and lung disease, and treatment can change the comparison. Use serial measurements and clinical assessment; neither a diagnostic formula nor a calculated pH sets a drug dose or a universally safe ventilation setting."
        }
      ],
      "keyPoints": [
        "Winter’s formula applies to metabolic acidosis.",
        "Expected compensatory change is different from another primary disorder.",
        "Acute and chronic respiratory changes require different comparisons.",
        "Empirical rules support a contextual diagnosis and are not treatment targets."
      ],
      "check": {
        "question": "For HCO₃⁻ 12 mmol/L, Winter's formula predicts which PaCO₂ range?",
        "choices": [
          "24 to 28 mmHg",
          "10 to 14 mmHg",
          "34 to 38 mmHg",
          "46 to 50 mmHg"
        ],
        "answer": 0,
        "rationale": "1.5 times 12 plus 8 equals 26 mmHg, with an expected range of 24 to 28.",
        "reviewHref": "#compensation-mixed-disorders"
      }
    },
    {
      "slug": "anion-gap-metabolic-acidosis",
      "title": "Anion Gap and Metabolic Acidosis",
      "summary": "Calculate the gap explicitly, account for albumin, investigate unmeasured acids or base loss, and qualify delta and urine-test interpretation.",
      "concepts": [
        "Anion gap and albumin correction",
        "GOLD MARK causes",
        "Normal-gap metabolic acidosis",
        "Delta gap and urine studies"
      ],
      "visual": "acid-gap",
      "application": "Use Na − (Cl + HCO₃⁻), the local assay convention, and albumin. Seek the cause and do not treat a calculated gap or a urine surrogate as a diagnosis by itself.",
      "lesson": [
        {
          "heading": "Show the brackets and the laboratory convention",
          "body": "Without potassium, AG = Na − (Cl + HCO₃⁻), using contemporaneous chemistry electrolytes in compatible units. For Na 138, Cl 106, and bicarbonate 18 mmol/L, AG is 14 mEq/L. Including potassium changes the convention and reference interval. Blood-gas calculated bicarbonate and chemistry total CO₂ are related measurements, so keep the specimen and method clear."
        },
        {
          "heading": "Account for albumin before excluding an acid load",
          "body": "A commonly used correction is corrected AG = AG + 2.5 × (4 − albumin in g/dL). The French panel favors an albumin-corrected gap when distinguishing acid accumulation from base loss, while noting the limited evidence. For AG 14 and albumin 2 g/dL, add 5 to obtain 19 mEq/L. The correction is approximate and does not replace a local reference interval or direct cause-specific testing."
        },
        {
          "heading": "Investigate the mechanism behind the gap",
          "body": "GOLD MARK prompts glycols, oxoproline, L-lactate, D-lactate, methanol, aspirin, renal failure, and ketoacidosis. It organizes possibilities rather than proving any exposure. Obtain appropriate lactate, blood β-hydroxybutyrate, kidney and exposure assessments. A high anion gap plus an osmolar gap and compatible history raises concern for toxic alcohols; timing and assay limitations mean absent gaps cannot alone exclude them."
        },
        {
          "heading": "Limit urine studies to the question they can answer",
          "body": "Diarrheal or renal bicarbonate loss, impaired renal acid excretion, urinary diversion, and chloride-rich fluid can produce normal-gap acidosis. The 2019 French panel reserves urine anion gap and selected urine pH testing for unexplained cases with a possible tubular mechanism; these are expert-opinion tools with limitations. The usual urine gap is urine Na + K − Cl. A positive value does not by itself establish low ammonium excretion or renal tubular acidosis, especially in CKD, where primary cohort evidence found it a poor surrogate. Direct urine ammonium measurement is preferable when available and relevant in CKD."
        },
        {
          "heading": "Treat delta analysis as supporting evidence",
          "body": "Compare the gap rise above an appropriate baseline with the bicarbonate fall. A larger gap rise can support added metabolic alkalosis; a disproportionately large bicarbonate fall can support an added normal-gap acidosis. Albumin, baseline gap, time course, kidney function, and prior fluids change the relationship. Establish the high-gap process and report the assumptions before interpreting a delta result as evidence of another process."
        }
      ],
      "keyPoints": [
        "Bracket chloride and bicarbonate together in the potassium-free anion-gap formula.",
        "Albumin correction and local assay ranges qualify the result.",
        "Blood β-hydroxybutyrate is preferred for DKA ketone assessment.",
        "A positive urine anion gap alone does not diagnose renal tubular acidosis.",
        "Delta relationships support a diagnosis and retain baseline and timing assumptions."
      ],
      "check": {
        "question": "Na 138, Cl 106, HCO₃⁻ 18, and albumin 2 g/dL produce an uncorrected gap of 14. What is the albumin-corrected gap using 2.5 per g/dL below 4?",
        "choices": [
          "19 mEq/L",
          "14 mEq/L",
          "9 mEq/L",
          "24 mEq/L"
        ],
        "answer": 0,
        "rationale": "The albumin deficit is 2 g/dL, so 5 mEq/L is added to the uncorrected gap of 14.",
        "reviewHref": "#anion-gap-metabolic-acidosis"
      }
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
      "slug": "respiratory-integrated",
      "title": "Respiratory Disorders and Integrated Cases",
      "visual": "acid-integrated",
      "summary": "Assess ventilation and oxygenation, reverse the respiratory driver, and protect a patient whose compensation is becoming unsustainable.",
      "concepts": [
        "Acute and chronic hypoventilation",
        "Hyperventilation and hypoxemia",
        "Ventilatory failure",
        "Medication and toxicologic causes"
      ],
      "application": "Use the gas, timing, medicines, lung mechanics, and clinical trajectory to support breathing safely while investigating the cause and any metabolic process.",
      "lesson": [
        {
          "heading": "Restore ventilation and reverse the trigger",
          "body": "Opioids, sedatives, neuromuscular weakness, obstructive or airway disease, and ventilator problems can reduce effective alveolar ventilation. Support airway and breathing, use targeted reversal when appropriate, and treat the cause; noninvasive or invasive support depends on the clinical assessment. Routine bicarbonate does not restore ventilation and can add carbon dioxide. Oxygenation still needs separate assessment."
        },
        {
          "heading": "Investigate hyperventilation before assuming anxiety",
          "body": "Pain, anxiety, hypoxemia, sepsis, pregnancy, liver disease, salicylate toxicity, and inappropriate mechanical ventilation can cause respiratory alkalosis. Exclude organic illness and correct the driver. BTS guidance advises against paper-bag rebreathing because it can worsen hypoxemia. Salicylate toxicity can combine respiratory alkalosis with high-gap metabolic acidosis; the pH alone can conceal the severity."
        },
        {
          "heading": "Recognize loss of compensatory capacity",
          "body": "In metabolic acidosis, increased ventilation helps limit acidemia. PaCO₂ above Winter’s range, worsening mental status, fatigue, or falling effective ventilation can signal a dangerous additional respiratory acidosis. Reassess airway, breathing, oxygenation, circulation, and cause promptly. The breathing rate alone does not establish adequate carbon dioxide elimination."
        },
        {
          "heading": "Plan the airway transition around physiology",
          "body": "Apnea or inadequate ventilation during and after intubation can rapidly raise PaCO₂ and worsen severe metabolic acidemia. If airway support is required, an experienced team must plan to limit loss of compensation and assess post-intubation carbon dioxide removal. Ventilation must also respect lung mechanics, pressure limits, and air trapping; copying a pre-intubation rate or minute volume is not universally safe. Repeat the gas and clinical assessment while definitive treatment proceeds."
        }
      ],
      "keyPoints": [
        "Restore effective ventilation and treat its cause.",
        "Paper-bag rebreathing is unsafe for presumed anxiety hyperventilation.",
        "Consider concurrent metabolic disease even with a respiratory pattern.",
        "Protect compensation during airway support while respecting lung mechanics."
      ],
      "check": {
        "question": "Why can intubation precipitate arrest in a patient with severe metabolic acidosis?",
        "choices": [
          "A sudden fall in compensatory minute ventilation can rapidly raise PaCO₂ and lower pH",
          "Intubation always lowers bicarbonate to zero",
          "Oxygen directly creates lactic acid",
          "The anion gap becomes uninterpretable"
        ],
        "answer": 0,
        "rationale": "These patients may rely on very high ventilation. Apnea or inadequate post-intubation minute ventilation can cause abrupt acidemia.",
        "reviewHref": "#respiratory-integrated"
      }
    },
  ],
  references: [
    {
      "label": "2019 French expert-panel guideline: Diagnosis and management of metabolic acidosis",
      "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6695455/"
    },
    {
      "label": "2025 BICARICU-2 randomized trial: Primary and secondary outcomes",
      "href": "https://jamanetwork.com/journals/jama/fullarticle/2840824"
    },
    {
      "label": "2024 adult hyperglycemic-crisis consensus report",
      "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11272983/"
    },
    {
      "label": "2017 British Thoracic Society guideline: Adult oxygen and hyperventilation guidance",
      "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5531304/"
    },
    {
      "label": "Do et al. (2022): Metabolic alkalosis, Core Curriculum",
      "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10947768/"
    },
    {
      "label": "2024 adult hyperglycemic-crisis consensus: Simultaneous Diabetologia publication",
      "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11343900/"
    },
    {
      "label": "Achanti and Szerlip (2023): Critical-care acid-base treatment review",
      "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10101555/"
    },
    {
      "label": "FDA sodium bicarbonate label: Mechanism and pulmonary carbon dioxide elimination",
      "href": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/220790Orig1s000lbl.pdf"
    },
    {
      "label": "RxPrep 2023 (supplied book): Acid-base overview, printed 25; clinical calculations, printed 180-182",
      "type": "book", "locator": "RxPrep 2023: printed 25 and 180-182; supplied PDF pages 37 and 188-190"
    },
    {
      "label": "Quade, Parker, and Occhipinti (2020): Buffer physiology and the logarithmic pH equation",
      "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7544731/"
    },
    {
      "label": "Hamm, Nakhoul, and Hering-Smith (2015): Acid-base homeostasis and adaptation",
      "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4670772/"
    },
    {
      "label": "Baird (2013): Preanalytical considerations in blood gas analysis",
      "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3900096/"
    },
    {
      "label": "Raphael, Gilligan, and Ix (2018): Urine anion gap limitations in CKD",
      "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5967420/"
    }
  ],

  questionBank: acidBaseInterpretationQuestionBank,
};

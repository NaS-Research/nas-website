const q = (id, question, choices, answer, rationale, lesson, extra = {}) => ({
  id: `acid-base-${id}`,
  question,
  choices,
  answer,
  rationale,
  reviewHref: `#${lesson}`,
  ...extra,
});

const core = [
  q("001", "Using an arterial pH reference interval of 7.35-7.45, which term describes a measured value below 7.35?", ["Acidemia", "Acidosis as the only possible primary process", "Alkalemia", "Appropriate compensation as a complete diagnosis"], 0, "Acidemia names the measured state below the stated reference interval. Acidosis names a process; the gas, compensation, and clinical setting are needed to identify its cause and any mixed disorder.", "acid-base-foundations"),
  q("002", "Why can pH 7.40 coexist with a dangerous acid-base disorder?", ["Opposing primary processes can restore the ratio while both components remain abnormal", "A normal pH proves normal ventilation", "Bicarbonate and PaCO₂ cannot change together", "The pH reference range excludes mixed disorders"], 0, "A mixed disorder can produce a nearly normal pH while PaCO₂ and bicarbonate are markedly abnormal.", "acid-base-foundations"),
  q("003", "Which response begins rapidly after a primary metabolic acid load?", ["Increased alveolar ventilation that lowers PaCO₂", "Immediate completion of chronic renal adaptation", "Reduced alveolar ventilation as the expected response", "Increased bicarbonate caused by reduced net renal acid excretion"], 0, "Ventilatory adaptation starts rapidly. Complete adaptation is not immediate, and renal adaptation to sustained respiratory change takes days; reduced ventilation would retain carbon dioxide.", "acid-base-foundations"),
  q("004", "Which statement best describes compensation in a simple acid-base disorder?", ["It limits the pH disturbance but does not remove the cause", "It always normalizes pH completely", "It creates alkalemia during acidosis", "It makes treatment unnecessary"], 0, "Compensation is partial and should not overshoot in a simple disorder.", "acid-base-foundations"),
  q("005", "What does PaCO₂ most directly reflect in acid-base interpretation?", ["Alveolar ventilation relative to carbon dioxide production", "Renal bicarbonate generation", "Total body sodium", "Serum albumin"], 0, "PaCO₂ rises when effective alveolar ventilation falls relative to production and falls when ventilation increases.", "acid-base-foundations"),
  q("006", "Why may an arterial gas still be needed when a venous gas is available?", ["Precise arterial oxygenation or PaCO₂ comparison may be needed, especially when perfusion or arterial-venous agreement is uncertain", "Venous pH cannot be measured", "A venous PCO₂ can always be substituted unchanged into an arterial compensation formula", "Every stable patient requires an arterial specimen regardless of the clinical question"], 0, "Venous pH can support selected stable-patient assessment, but venous PCO₂ has variable agreement with PaCO₂ and venous PO₂ does not establish arterial oxygenation. Match sampling to the clinical question.", "acid-base-foundations"),
  q("007", "Which renal process generates new bicarbonate rather than merely reclaiming filtered bicarbonate?", ["Net acid excretion as ammonium and titratable acid", "Glomerular filtration alone", "Excretion of sodium without acid", "Reabsorption of urea alone"], 0, "Net acid excretion is coupled to generation of new bicarbonate.", "acid-base-foundations"),
  q("101", "Why is the bicarbonate buffer system described as open rather than closed?", ["The lungs can eliminate carbon dioxide while the kidneys regulate bicarbonate and net acid excretion", "Bicarbonate never changes", "Carbon dioxide cannot cross membranes", "Only dietary acid determines pH"], 0, "Ventilation can remove the volatile carbon dioxide component while kidney handling changes bicarbonate and fixed-acid balance.", "acid-base-foundations"),
  q("008", "What follows when pH is within the reference interval but PaCO₂ and bicarbonate are abnormal?", ["Evaluate expected compensation, mixed processes, and clinical time course", "Call the gas normal without checking the components", "Discard the gas solely because its pH is normal", "Use oxygenation measurements as a substitute for acid-base interpretation"], 0, "Normal pH does not establish normal components or exclude opposing processes. Check validity and the contextual compensation pattern before calling the disorder simple.", "systematic-blood-gas"),
  q("009", "Which specimen problem can create misleading blood-gas values?", ["Delayed analysis while cells continue consuming substrates and producing acid", "Recording the collection time and specimen site", "Documenting oxygen delivery and ventilator conditions", "Prompt analysis of a correctly collected, identified specimen"], 0, "Ongoing cellular metabolism during delay changes the specimen after collection. Air exposure is another possible source of error. Documentation and correct prompt processing support interpretation rather than causing this error.", "systematic-blood-gas"),
  q("010", "What should immediately accompany acid-base interpretation in an unstable patient?", ["Assessment of airway, breathing, circulation, oxygenation, and the clinical cause", "A mnemonic without examination", "Bicarbonate for every low pH", "Waiting for pH normalization"], 0, "Acid-base analysis supports stabilization and diagnosis. It does not replace them.", "systematic-blood-gas"),

  q("011", "Winter's formula is used to estimate compensation for which primary disorder?", ["Metabolic acidosis", "Metabolic alkalosis", "Respiratory acidosis", "Respiratory alkalosis"], 0, "Winter's formula estimates the expected PaCO₂ in metabolic acidosis.", "compensation-mixed-disorders"),
  q("012", "In metabolic acidosis, PaCO₂ below Winter's expected range indicates what?", ["Concurrent respiratory alkalosis", "Concurrent respiratory acidosis", "Appropriate compensation only", "Metabolic alkalosis only"], 0, "More ventilation than expected indicates an additional primary respiratory alkalosis.", "compensation-mixed-disorders"),
  q("013", "In metabolic acidosis, PaCO₂ above Winter's expected range indicates what?", ["Concurrent respiratory acidosis", "Concurrent respiratory alkalosis", "Complete renal compensation", "No mixed disorder"], 0, "Insufficient ventilation relative to the expected response indicates respiratory acidosis.", "compensation-mixed-disorders"),
  q("014", "Why does chronic respiratory acidosis produce a larger bicarbonate rise than acute respiratory acidosis?", ["The kidneys have time to increase net acid excretion and bicarbonate retention", "The lungs begin producing bicarbonate", "Albumin concentration always doubles", "Carbon dioxide stops acting as an acid"], 0, "Renal adaptation develops over days and is greater in chronic disease.", "compensation-mixed-disorders"),
  q("015", "Minutes after opioid-induced hypoventilation, which bicarbonate response is initially most plausible?", ["A small rise for the PaCO₂ increase before substantial renal adaptation", "The full chronic renal response within minutes", "A large bicarbonate fall as expected compensation for hypercapnia", "No pH change because every respiratory acidosis is fully compensated"], 0, "Acute hypercapnia produces a small bicarbonate rise, approximately 1 mmol/L per 10 mmHg PaCO₂ increase in the cited review. Chronic renal adaptation is larger and requires time; this comparison does not replace immediate ventilation and cause assessment.", "compensation-mixed-disorders"),
  q("016", "In an established high-gap metabolic acidosis, which delta pattern can support an additional metabolic alkalosis?", ["The gap rise above an appropriate baseline is substantially larger than the bicarbonate fall", "PaCO₂ lies within Winter’s range, which alone proves metabolic alkalosis", "Albumin is low, which alone proves a second process", "The pH is below 7.0, which alone determines the delta relationship"], 0, "A disproportionate gap rise can support a process maintaining higher bicarbonate, provided baseline gap and bicarbonate assumptions fit. Albumin, timing, kidney function, and prior treatment limit the inference.", "anion-gap-metabolic-acidosis"),
  q("017", "What does a measured compensation outside its expected range mean?", ["A second primary acid-base process should be sought", "The body is compensating unusually well", "The formula determines the treatment dose", "The sample must always be venous"], 0, "Simple compensation has a predictable range and does not overshoot.", "compensation-mixed-disorders"),
  q("018", "Which factor most limits a compensation rule's precision?", ["Biologic variation, time course, kidney function, and prior treatment", "The equation uses arithmetic", "All patients have identical buffering", "PaCO₂ cannot be measured"], 0, "Compensation formulas are empirical diagnostic ranges, not exact laws.", "compensation-mixed-disorders"),
  q("019", "Why is a near-normal pH with high PaCO₂ and high bicarbonate not automatically a simple chronic respiratory acidosis?", ["The bicarbonate response must be compared with the expected chronic range", "A normal pH excludes chronic disease", "High bicarbonate always means vomiting", "PaCO₂ is irrelevant"], 0, "Expected compensation distinguishes chronic adaptation from an added metabolic alkalosis.", "compensation-mixed-disorders"),
  q("020", "A patient with severe metabolic acidosis becomes somnolent and PaCO₂ rises. What does this suggest?", ["Failing ventilatory compensation and impending respiratory failure", "Improving compensation", "Resolution of the metabolic process", "Isolated metabolic alkalosis"], 0, "Loss of compensatory ventilation can cause rapid, dangerous acidemia.", "respiratory-integrated"),

  q("021", "Which formula calculates the anion gap when potassium is omitted?", ["Na minus (Cl plus HCO₃)", "Cl minus (Na plus HCO₃)", "Na plus Cl plus HCO₃", "HCO₃ minus PaCO₂"], 0, "The common potassium-free equation subtracts measured chloride and bicarbonate from sodium.", "anion-gap-metabolic-acidosis"),
  q("022", "Why should the anion gap be corrected for low albumin?", ["Albumin is a major unmeasured anion, so hypoalbuminemia can conceal an acid load", "Albumin directly determines PaCO₂", "Albumin is a measured cation", "Correction eliminates all uncertainty"], 0, "Low albumin lowers the baseline gap and can mask unmeasured anions.", "anion-gap-metabolic-acidosis"),
  q("023", "What does the O in the acid-base mnemonic GOLD MARK represent?", ["Oxoproline (5-oxoproline or pyroglutamic acid)", "Opioid hypoventilation as an unmeasured organic acid", "Osmotic diarrhea as an unmeasured organic acid", "Oxygen deficiency as a measured anion"], 0, "Oxoproline is an unmeasured organic acid. The mnemonic organizes causes; it does not diagnose an exposure. Opioid hypoventilation is a respiratory mechanism, and diarrheal bicarbonate loss typically produces a normal-gap process.", "anion-gap-metabolic-acidosis"),
  q("024", "Which ketone measurement is preferred for DKA assessment when available?", ["Direct blood β-hydroxybutyrate", "Urine chloride", "Serum albumin as a ketone surrogate", "Urine nitroprusside ketones as an exact measure of blood β-hydroxybutyrate"], 0, "The adult consensus and French guideline favor blood β-hydroxybutyrate. Urine nitroprusside testing detects acetoacetate rather than the predominant DKA ketoacid and can misrepresent its trajectory; chloride and albumin do not measure ketones.", "anion-gap-metabolic-acidosis"),
  q("025", "Which condition most commonly produces normal-gap hyperchloremic metabolic acidosis?", ["Diarrheal bicarbonate loss", "Vomiting", "Primary hyperaldosteronism", "Chronic hyperventilation"], 0, "Gastrointestinal bicarbonate loss is replaced by chloride, preserving the gap.", "anion-gap-metabolic-acidosis"),
  q("026", "According to the 2019 French panel, which setting can justify considering a urine anion gap, with its limitations?", ["Unexplained normal-gap metabolic acidosis with a possible tubular mechanism", "Every high-gap acidosis regardless of cause", "Isolated respiratory alkalosis as a routine tubular-acidosis screen", "Vomiting-associated metabolic alkalosis in place of assessing urine chloride"], 0, "This is a selected expert-opinion assessment, not a universal screen. Its relationship to ammonium is uncertain in some settings, especially CKD; first establish the acid-base process and consider confounders.", "anion-gap-metabolic-acidosis"),
  q("027", "A patient with CKD and confirmed normal-gap metabolic acidosis has a positive urine Na + K − Cl gap. Which interpretation is most defensible?", ["It does not alone establish reduced ammonium excretion or renal tubular acidosis; direct urine ammonium is preferable when available and relevant", "It proves distal renal tubular acidosis regardless of diet and other urinary ions", "It excludes gastrointestinal bicarbonate loss under all circumstances", "It accurately quantifies ammonium without any additional measurement"], 0, "In the AASK cohort, the standard urine anion gap was a poor ammonium surrogate in CKD because unmeasured urinary anions matter. It does not diagnose tubular acidosis, exclude every extrarenal contribution, or directly quantify ammonium.", "anion-gap-metabolic-acidosis"),
  q("028", "Which finding should trigger targeted evaluation for toxic alcohol exposure?", ["High anion gap with an osmolar gap and compatible history", "Isolated low albumin", "Normal pH and normal gaps", "High bicarbonate after vomiting"], 0, "The combination raises suspicion, although gaps vary with timing and cannot exclude exposure alone.", "anion-gap-metabolic-acidosis"),
  q("029", "Why is the laboratory-specific anion gap range important?", ["Assay methods and whether potassium is included change the reference interval", "The normal gap is universally 12", "Reference ranges matter only in children", "Albumin has no effect"], 0, "A fixed textbook threshold can misclassify patients when the local assay differs.", "anion-gap-metabolic-acidosis"),
  q("030", "Which statement best describes delta analysis?", ["It supports identification of an additional metabolic process but depends on baseline assumptions", "It replaces compensation analysis", "It diagnoses every toxin", "It is valid only when albumin is zero"], 0, "Delta relationships are useful supporting evidence, not a standalone diagnosis.", "anion-gap-metabolic-acidosis"),

  q("031", "What is the first treatment principle in metabolic acidosis?", ["Identify and reverse the cause while stabilizing perfusion, ventilation, and electrolyte threats", "Normalize pH with bicarbonate before investigating the cause", "Use the same bicarbonate strategy for shock, DKA, and bicarbonate loss", "Wait for acid-base normalization before correcting perfusion or ventilation"], 0, "Treatment addresses the cause and immediate threats. A pH correction does not replace stabilization, and bicarbonate decisions differ with mechanism and clinical context.", "metabolic-treatment"),
  q("032", "What was the primary mortality finding in the analyzed BICARICU-2 population?", ["No statistically significant reduction in 90-day all-cause mortality with bicarbonate", "A statistically significant survival improvement inferred from less dialysis", "A mortality benefit established for adults with ketoacidosis", "A mortality reduction established for isolated respiratory acidosis"], 0, "Mortality was 195/314 (62.1%) with bicarbonate and 193/313 (61.7%) with control; the difference was not statistically significant. Dialysis use was a separate secondary outcome, and ketoacidosis and respiratory acidosis were outside the intended population.", "metabolic-treatment"),
  q("033", "Which finding and limitation correctly describe kidney replacement therapy in BICARICU-2?", ["Use by day 28 was lower with bicarbonate, but this does not establish improved kidney recovery", "Use by day 90 was the primary outcome and proved a survival benefit", "The 35% versus 50% figures describe 90-day mortality", "Less use establishes that urgent dialysis can be withheld for refractory hyperkalemia"], 0, "Kidney replacement therapy by day 28 occurred in 109/314 (35%) with bicarbonate and 157/313 (50%) with control. This secondary outcome concerns treatment use, not proof of kidney recovery. Open-label treatment and acidemia-based initiation criteria can influence use; urgent indications remain relevant.", "metabolic-treatment"),
  q("034", "Why must ventilation be assessed before and during bicarbonate treatment of metabolic acidosis?", ["Buffering generates carbon dioxide that requires pulmonary elimination", "A rise in serum bicarbonate guarantees that carbon dioxide is being eliminated", "The kidneys remove all generated carbon dioxide, so ventilation is irrelevant", "Monitoring sodium and fluid balance replaces assessment of carbon dioxide removal"], 0, "Bicarbonate buffering can form carbon dioxide, which is excreted by the lungs. Inadequate elimination can increase carbon dioxide and worsen acid stress; a bicarbonate or pH rise alone does not establish adequate ventilation. Sodium and fluid monitoring address different risks.", "metabolic-treatment"),
  q("035", "An adult has DKA with pH 7.15 and potassium sufficient to begin insulin under the protocol. Which approach follows the 2024 consensus?", ["Use fluids, insulin, potassium surveillance and replacement, and precipitant treatment without routine bicarbonate", "Replace insulin with bicarbonate until the bicarbonate concentration normalizes", "Give routine bicarbonate whenever DKA pH is below 7.30", "Stop potassium surveillance once the first serum potassium is normal"], 0, "Routine bicarbonate is not recommended in adult DKA; the consensus advises considering it when pH is below 7.0. Fluids and insulin address the disease process, and serum potassium may fall during treatment despite a normal initial value.", "metabolic-treatment"),
  q("036", "Which pattern most strongly supports chloride-responsive metabolic alkalosis?", ["Vomiting with volume depletion, hypokalemia, and urine chloride 8 mmol/L", "Hypertension and volume expansion with persistent urine chloride above 20 mmol/L", "High urine chloride during active loop diuretic exposure without a volume assessment", "A low bicarbonate concentration with diarrhea and a normal anion gap"], 0, "Gastric chloride loss, volume depletion, hypokalemia, and urine chloride below 20 mmol/L support a chloride-responsive pattern. The hypertension pattern suggests mineralocorticoid activity, an active diuretic complicates a single urine result, and the diarrhea pattern suggests metabolic acidosis.", "metabolic-treatment"),
  q("037", "Why does correcting potassium deficiency help reverse some metabolic alkalosis?", ["It reduces renal mechanisms generating and retaining bicarbonate and supports bicarbonate secretion", "It directly removes carbon dioxide without changing kidney handling", "It treats alkalosis only by diluting the extracellular bicarbonate concentration", "It eliminates the need to assess chloride loss and volume status"], 0, "Potassium depletion promotes ammoniagenesis, bicarbonate generation and reabsorption, and impaired bicarbonate secretion. Repletion reverses these maintenance mechanisms but does not replace chloride and volume assessment or directly remove carbon dioxide.", "metabolic-treatment"),
  q("038", "Which situation most appropriately prompts consideration of acetazolamide for metabolic alkalosis?", ["A selected edematous patient in whom further volume expansion is undesirable, after potassium and kidney risks are assessed", "A volume-depleted vomiting patient in place of assessing and correcting chloride and fluid losses", "A patient with severe untreated hypokalemia, because acetazolamide prevents further potassium loss", "A patient with isolated respiratory acidosis, because acetazolamide restores ventilation"], 0, "Acetazolamide promotes renal bicarbonate excretion when further volume expansion is undesirable. It can worsen potassium loss, and impaired renal clearance limits use. It does not replace correction of volume and chloride depletion or restore ventilation in respiratory acidosis.", "metabolic-treatment"),
  q("039", "Why is hydrochloric acid infusion an uncommon specialist rescue intervention for severe refractory metabolic alkalosis?", ["Direct acid administration requires central access and close monitoring of the response and overcorrection risk", "It is preferred before chloride and potassium deficits are assessed", "A peripheral infusion is sufficient whenever serum bicarbonate is high", "Its use eliminates the need to identify and treat the alkalosis mechanism"], 0, "The critical-care treatment review describes central administration only in selected refractory alkalosis. Preparation, access, and serial acid-base and electrolyte assessment require specialist care; it is not routine first-line replacement and does not remove the underlying cause.", "metabolic-treatment"),
  q("040", "Which monitoring plan best supports cause-directed metabolic acidosis treatment?", ["Reassess perfusion, ventilation, pH and PaCO₂, electrolytes, fluid balance, and cause-specific markers at an acuity-matched interval", "Follow pH alone because normalization establishes cause resolution", "Follow sodium and fluid balance but omit ventilation and the blood gas after bicarbonate", "Stop electrolyte checks after one normal potassium despite ongoing insulin or alkali treatment"], 0, "Clinical response and cause-specific markers must be assessed alongside acid-base and treatment risks. pH alone does not prove cause resolution; sodium surveillance does not assess carbon dioxide elimination; insulin and alkali can alter potassium after a normal initial value.", "metabolic-treatment"),

  q("041", "What is the immediate priority in opioid toxicity with hypoventilation and respiratory acidosis?", ["Support airway and ventilation and use targeted opioid reversal when appropriate", "Use supplemental oxygen alone as proof that ventilation is restored", "Use bicarbonate alone to reverse the opioid effect", "Use paper-bag rebreathing to remove retained carbon dioxide"], 0, "Airway and effective ventilation require support, with targeted opioid reversal when appropriate. Oxygen addresses oxygenation without proving carbon dioxide elimination; bicarbonate does not reverse the opioid effect, and rebreathing cannot correct hypoventilation.", "respiratory-integrated"),
  q("042", "Why is routine bicarbonate poorly suited to isolated respiratory acidosis?", ["It does not restore effective ventilation and can generate additional carbon dioxide", "It directly corrects the cause of opioid hypoventilation", "It guarantees pulmonary carbon dioxide elimination", "It replaces reassessment of airway and ventilatory support"], 0, "The primary problem is carbon dioxide retention. Buffering can produce more carbon dioxide, while the cause and effective ventilation still need assessment and treatment.", "respiratory-integrated"),
  q("043", "Which group contains recognized drivers of respiratory alkalosis?", ["Sepsis, hypoxemia, pregnancy, pain, and salicylate toxicity", "Opioid hypoventilation, neuromuscular weakness, and ventilator under-support", "Vomiting-associated chloride loss, volume depletion, and potassium deficiency", "Diarrheal bicarbonate loss, renal base loss, and chloride loading"], 0, "The first group can increase respiratory drive. The other groups chiefly describe respiratory acidosis, metabolic alkalosis, and normal-gap metabolic acidosis respectively; clinical combinations can still create mixed disorders.", "respiratory-integrated"),
  q("044", "Why should paper-bag rebreathing be avoided for presumed anxiety hyperventilation?", ["It can worsen unrecognized hypoxemia while organic illness remains unassessed", "It reliably excludes pulmonary embolism", "It establishes that oxygenation and ventilation are normal", "It safely treats every cause of respiratory alkalosis"], 0, "BTS advises against paper-bag rebreathing. Anxiety-like symptoms can accompany organic disease; reduced inspired oxygen can worsen hypoxemia, and rebreathing neither diagnoses nor treats all causes.", "respiratory-integrated"),
  q("045", "Which mixed pattern is classically associated with salicylate toxicity?", ["Respiratory alkalosis with high-gap metabolic acidosis", "Respiratory acidosis as the only possible process", "Metabolic alkalosis as the only possible process", "A normal pH that excludes clinically important poisoning"], 0, "Salicylates stimulate ventilation and can produce unmeasured acids. The combination may yield a low, normal, or high pH, so pH alone does not exclude toxicity or determine its severity.", "respiratory-integrated"),
  q("046", "A mechanically ventilated patient develops respiratory alkalosis. What should be assessed?", ["Effective ventilator support along with pain, hypoxemia, sepsis, and neurologic or other respiratory drivers", "Urine chloride alone to identify the ventilatory cause", "Albumin alone to determine the cause of low PaCO₂", "The pH alone, without ventilator conditions or clinical examination"], 0, "Excess mechanical ventilation and clinical respiratory drive can lower PaCO₂. Urine chloride, albumin, or pH alone cannot identify the ventilatory mechanism.", "respiratory-integrated"),
  q("047", "Which mechanism can cause deterioration during intubation for severe metabolic acidosis?", ["Loss of compensatory ventilation during apnea or inadequate post-intubation carbon dioxide removal", "A rise in albumin caused by placement of the airway", "Immediate elimination of the metabolic acid source by intubation", "Automatic normalization of pH regardless of ventilation"], 0, "Abrupt carbon dioxide retention can worsen acidemia. The team must plan airway support and reassess ventilation while respecting lung mechanics and treating the cause; intubation itself does not remove metabolic acid.", "respiratory-integrated"),
  q("048", "Which finding supports chronic adaptation to respiratory acidosis when the time course and baseline fit?", ["A larger bicarbonate rise after days of sustained hypercapnia", "A full chronic renal response within minutes of opioid exposure", "A bicarbonate fall as the expected renal response to hypercapnia", "Low PaCO₂ as evidence of carbon dioxide retention"], 0, "Chronic renal adaptation is larger than the acute response. Timing and prior values are necessary; one bicarbonate value alone does not establish chronicity.", "compensation-mixed-disorders"),
  q("049", "With established chronic hypercapnia and vomiting, bicarbonate exceeds the expected chronic response. What additional process is supported?", ["Metabolic alkalosis superimposed on chronic respiratory acidosis", "Respiratory alkalosis as the explanation for the high PaCO₂", "Simple acute respiratory acidosis without considering timing", "Metabolic acidosis as the explanation for excess bicarbonate"], 0, "Bicarbonate above the contextual chronic response supports an added alkalinizing process. Vomiting is a plausible acid and chloride loss mechanism; verify sample, baseline, and other clinical influences.", "respiratory-integrated"),
  q("050", "Which acid-base communication is most complete?", ["State the measured pH state, processes, compensation result, suspected cause, threats, plan, and reassessment", "Report pH alone as the complete diagnosis", "Report the gap without its albumin or assay context", "Name a mnemonic without connecting it to the patient"], 0, "A complete interpretation connects measurements and arithmetic to physiology, evidence limits, cause-directed care, and follow-up.", "systematic-blood-gas"),
];

const primaryCases = [
  [7.25, 25, 11, "Metabolic acidosis"], [7.53, 47, 38, "Metabolic alkalosis"], [7.22, 68, 27, "Respiratory acidosis"], [7.55, 24, 20, "Respiratory alkalosis"], [7.31, 55, 27, "Respiratory acidosis"],
  [7.48, 30, 22, "Respiratory alkalosis"], [7.29, 29, 14, "Metabolic acidosis"], [7.51, 48, 37, "Metabolic alkalosis"], [7.18, 60, 22, "Respiratory acidosis"], [7.57, 28, 25, "Respiratory alkalosis"],
].map(([pH, co2, hco3, diagnosis], index) => {
  const choices = ["Metabolic acidosis", "Metabolic alkalosis", "Respiratory acidosis", "Respiratory alkalosis"];
  return q(`05${index + 1}`, `Which primary component change best explains the pH direction for pH ${pH}, PaCO₂ ${co2} mmHg, and HCO₃⁻ ${hco3} mmol/L?`, choices, choices.indexOf(diagnosis), `${diagnosis} best explains the pH direction and component change. This is an initial direction comparison, not proof of a pure disorder. The rounded gas values are compatible with the buffer equation; expected compensation, time course, and clinical context still require separate assessment.`, "systematic-blood-gas");
});

const winterCases = [[8,18],[10,30],[12,26],[14,18],[16,35],[18,40],[20,36],[22,30],[6,12],[15,31]].map(([hco3, measured], index) => {
  const midpoint = 1.5 * hco3 + 8;
  const low = midpoint - 2;
  const high = midpoint + 2;
  const result = measured < low ? "Concurrent respiratory alkalosis" : measured > high ? "Concurrent respiratory acidosis" : "Appropriate respiratory compensation";
  return q(`06${index + 1}`, `A metabolic acidosis has HCO₃⁻ ${hco3} mmol/L and measured PaCO₂ ${measured} mmHg. What does Winter's formula show?`, [result, result === "Concurrent respiratory acidosis" ? "Concurrent respiratory alkalosis" : "Concurrent respiratory acidosis", "No metabolic acidosis", "Metabolic alkalosis only"], 0, `The expected PaCO₂ is ${low} to ${high} mmHg. The measured value supports ${result.toLowerCase()} under this empirical comparison. Check arterial sampling, timing, and clinical context; this range does not set a ventilation target.`, "compensation-mixed-disorders");
});

const gapCases = [[140,104,18],[136,110,16],[132,96,12],[145,115,20],[138,100,14],[128,95,18],[142,108,12],[134,102,22],[150,118,14],[130,90,10]].map(([na,cl,hco3], index) => {
  const gap = na - cl - hco3;
  return q(`07${index + 1}`, `What is the potassium-free anion gap for Na ${na}, Cl ${cl}, and HCO₃⁻ ${hco3} mmol/L?`, [`${gap} mEq/L`, `${gap + 6} mEq/L`, `${Math.abs(na-cl)} mEq/L`, `${Math.abs(cl-hco3)} mEq/L`], 0, `${na} minus (${cl} plus ${hco3}) equals ${gap} mEq/L. Interpret it with the local reference interval and albumin.`, "anion-gap-metabolic-acidosis");
});

const correctedCases = [[12,2],[10,1],[14,2.5],[8,3],[16,1.5],[11,2.8],[9,2.2],[13,3.2],[7,1.8],[15,2.4]].map(([gap, albumin], index) => {
  const corrected = Math.round((gap + 2.5 * (4 - albumin)) * 10) / 10;
  return q(`08${index + 1}`, `Using AG + 2.5(4 - albumin), rounded to one decimal place when needed, what is the corrected gap when the uncorrected gap is ${gap} mEq/L and albumin is ${albumin} g/dL?`, [`${corrected} mEq/L`, `${gap} mEq/L`, `${Math.round((gap - 2.5 * (4 - albumin))*10)/10} mEq/L`, `${Math.round((gap + albumin)*10)/10} mEq/L`], 0, `Correction adds ${Math.round(2.5*(4-albumin)*10)/10} mEq/L, producing ${corrected} mEq/L rounded to one decimal place when needed. Interpret the estimate with the local reference interval and clinical context.`, "anion-gap-metabolic-acidosis");
});

const integratedCases = [
  ["A patient with septic shock has lactate 8 mmol/L, pH 7.18, HCO₃⁻ 14 mmol/L, and PaCO₂ 42 mmHg.", "High-gap metabolic acidosis with concurrent respiratory acidosis", "Winter's expected PaCO₂ is about 27 to 31, so 42 indicates inadequate compensation."],
  ["A patient with repeated vomiting has pH 7.52, HCO₃⁻ 38 mmol/L, hypokalemia, and urine chloride 8 mmol/L.", "Chloride-responsive metabolic alkalosis", "The history, potassium deficit, and low urine chloride support gastric chloride loss and contraction."],
  ["A patient taking salicylates has pH 7.46, PaCO₂ 20 mmHg, HCO₃⁻ 14 mmol/L, and a high anion gap.", "Respiratory alkalosis plus high-gap metabolic acidosis", "Both primary processes are characteristic of salicylate toxicity."],
  ["A patient with diarrhea has pH 7.27, HCO₃⁻ 15 mmol/L, chloride 116 mmol/L, and a normal corrected anion gap.", "Normal-gap hyperchloremic metabolic acidosis", "Gastrointestinal bicarbonate loss is replaced by chloride."],
  ["A patient with chronic COPD has PaCO₂ 60 mmHg and HCO₃⁻ 32 mmol/L with pH near 7.35.", "Chronic respiratory acidosis with plausible renal compensation", "The bicarbonate rise is compatible with a chronic response to a 20 mmHg PaCO₂ increase."],
  ["Minutes after excessive opioid dosing, pH is 7.20, PaCO₂ 70 mmHg, and HCO₃⁻ 27 mmol/L.", "Acute respiratory acidosis", "The small bicarbonate rise and abrupt history support acute hypoventilation."],
  ["A malnourished patient has an uncorrected anion gap of 11 mEq/L and albumin 1.5 g/dL.", "Correct for albumin before excluding a high-gap process", "Hypoalbuminemia can conceal clinically important unmeasured anions."],
  ["A patient with severe metabolic acidosis is breathing 38 times per minute and becomes fatigued.", "Prepare to support ventilation without losing compensatory minute ventilation", "Fatigue can cause abrupt PaCO₂ rise and worsening acidemia."],
  ["A patient hyperventilating with chest pain is presumed anxious before oxygenation or examination is assessed.", "Exclude organic disease and do not use paper-bag rebreathing", "Pulmonary embolism, hypoxemia, sepsis, and other disease can mimic anxiety hyperventilation."],
  ["A patient with severe acidemia and stage 3 AKI is considered for bicarbonate infusion.", "Define the objective and discuss uncertain mortality benefit, sodium load, ventilation, and kidney replacement strategy", "BICARICU-2 found no mortality benefit but less kidney replacement therapy, so treatment remains contextual."],
].map(([caseText, correct, rationale], index) => q(`09${index + 1}`, `${caseText} Which interpretation or action is most defensible?`, [correct, "Treat the pH number without identifying the mechanism", "Assume compensation is always appropriate", "Delay stabilization until every laboratory result returns"], 0, rationale, index < 4 ? "anion-gap-metabolic-acidosis" : index < 7 ? "compensation-mixed-disorders" : index < 9 ? "respiratory-integrated" : "metabolic-treatment"));

export const acidBaseInterpretationQuestionBank = [...core, ...primaryCases, ...winterCases, ...gapCases, ...correctedCases, ...integratedCases];

if (acidBaseInterpretationQuestionBank.length < 100) {
  throw new Error(`Acid-base question bank must contain at least 100 questions, found ${acidBaseInterpretationQuestionBank.length}.`);
}

// Scoped whole integrated cases; stable question IDs and all other generated cases remain unchanged.
const reviewedMetabolicTreatmentCases = [
  {
    "id": "acid-base-092",
    "question": "A patient with repeated vomiting has pH 7.52, HCO₃⁻ 38 mmol/L, hypokalemia, volume depletion, and urine chloride 8 mmol/L. Which interpretation best fits?",
    "choices": [
      "Chloride-responsive metabolic alkalosis",
      "Chloride-resistant alkalosis from mineralocorticoid excess with volume expansion",
      "Primary respiratory alkalosis as the explanation for the raised bicarbonate",
      "Normal-gap metabolic acidosis from gastrointestinal bicarbonate loss"
    ],
    "answer": 0,
    "rationale": "Alkalemia with raised bicarbonate identifies a metabolic alkalosis pattern. Vomiting, volume depletion, potassium deficiency, and urine chloride below 20 mmol/L support chloride responsiveness. The other choices do not fit the stated mechanism and values; the complete blood gas is still needed to assess additional disorders.",
    "reviewHref": "#metabolic-treatment"
  },
  {
    "id": "acid-base-0910",
    "question": "A critically ill adult with severe metabolic acidemia (pH 7.16) and stage 3 AKI is considered for bicarbonate. Which interpretation is most defensible?",
    "choices": [
      "Define the objective and assess ventilation, sodium and fluid load, electrolytes, cause, and kidney replacement indications without promising a mortality benefit",
      "Promise a survival benefit because BICARICU-2 patients received dialysis less often",
      "Treat the pH response as proof of kidney recovery and stop assessing dialysis indications",
      "Apply the trial result to DKA and toxic alcohol poisoning without checking its exclusions"
    ],
    "answer": 0,
    "rationale": "BICARICU-2 found no statistically significant 90-day mortality reduction in its studied population, while kidney replacement therapy was used less often by day 28. It excluded ketoacidosis and certain poisonings. Treatment must retain a defined objective, risk monitoring, and cause-directed and kidney replacement assessment.",
    "reviewHref": "#metabolic-treatment"
  }
];
for (const question of reviewedMetabolicTreatmentCases) { const index = acidBaseInterpretationQuestionBank.findIndex(item => item.id === question.id); if (index < 0) throw new Error("Missing reviewed acid-base case: " + question.id); acidBaseInterpretationQuestionBank[index] = question; }

// Reviewed remaining integrated cases; preserve stable IDs and prior treatment cases.
const reviewedAcidBaseCompletionCases = [
  {
    "id": "acid-base-091",
    "question": "A patient in septic shock has lactate 8 mmol/L, pH 7.15, PaCO₂ 42 mmHg, HCO₃⁻ 14 mmol/L, Na 140 and Cl 102 mmol/L, with normal albumin and a local potassium-free AG interval of 6-12 mEq/L. Which pattern is supported?",
    "choices": [
      "High-gap metabolic acidosis with concurrent respiratory acidosis",
      "High-gap metabolic acidosis with appropriate respiratory compensation",
      "Primary respiratory alkalosis with an appropriate bicarbonate response",
      "Normal-gap metabolic acidosis without a respiratory component"
    ],
    "answer": 0,
    "rationale": "AG = 140 − (102 + 14) = 24 mEq/L, above the stated interval. Winter’s range is 27-31 mmHg; PaCO₂ 42 supports added respiratory acidosis. The revised pH is compatible with the rounded gas values. Stabilization and shock-cause assessment remain urgent.",
    "reviewHref": "#anion-gap-metabolic-acidosis"
  },
  {
    "id": "acid-base-093",
    "question": "A patient with salicylate toxicity has pH 7.46, PaCO₂ 20 mmHg, HCO₃⁻ 14 mmol/L, and an albumin-corrected anion gap above the local range. Which pattern is supported?",
    "choices": [
      "Respiratory alkalosis plus high-gap metabolic acidosis",
      "Simple respiratory alkalosis with no metabolic process",
      "Metabolic acidosis with appropriate respiratory compensation",
      "Primary metabolic alkalosis explaining the low bicarbonate"
    ],
    "answer": 0,
    "rationale": "The high corrected gap and low bicarbonate support metabolic acidosis. Winter’s expected PaCO₂ is 27-31 mmHg; 20 supports an added respiratory alkalosis. Alkalemia does not exclude severe mixed disease or poisoning.",
    "reviewHref": "#anion-gap-metabolic-acidosis"
  },
  {
    "id": "acid-base-094",
    "question": "A patient with substantial diarrhea has pH 7.27, HCO₃⁻ 15 mmol/L, chloride 116 mmol/L, and a normal albumin-corrected anion gap. Which metabolic process fits, while the complete gas is obtained to assess compensation?",
    "choices": [
      "Normal-gap hyperchloremic metabolic acidosis",
      "High-gap metabolic acidosis established by the chloride value alone",
      "Metabolic alkalosis from gastric hydrochloric acid loss",
      "Pure respiratory alkalosis proven without a PaCO₂ value"
    ],
    "answer": 0,
    "rationale": "Gastrointestinal bicarbonate loss can produce hyperchloremic normal-gap metabolic acidosis. The stated gap does not establish high-gap disease, high chloride does not represent gastric acid loss, and PaCO₂ is still needed for respiratory comparison.",
    "reviewHref": "#anion-gap-metabolic-acidosis"
  },
  {
    "id": "acid-base-095",
    "question": "A patient with COPD and documented longstanding hypercapnia has PaCO₂ 60 mmHg, HCO₃⁻ 32 mmol/L, and pH about 7.35. Which initial interpretation fits, subject to baseline and clinical reassessment?",
    "choices": [
      "Chronic respiratory acidosis with a plausible bicarbonate adaptation",
      "Pure acute respiratory acidosis because timing never affects bicarbonate",
      "Respiratory alkalosis as the explanation for carbon dioxide retention",
      "Normal acid-base balance proved by a pH near the reference interval"
    ],
    "answer": 0,
    "rationale": "A 20 mmHg rise above the illustrative PaCO₂ baseline predicts about a 7 mmol/L chronic bicarbonate rise, versus about 2 acutely. HCO₃⁻ 32 is a plausible chronic pattern with biologic and baseline variation; it does not rule out another process.",
    "reviewHref": "#compensation-mixed-disorders"
  },
  {
    "id": "acid-base-096",
    "question": "Minutes after excessive opioid exposure, pH is 7.20, PaCO₂ 70 mmHg, and HCO₃⁻ 27 mmol/L. Which pattern best fits the timing and values?",
    "choices": [
      "Acute respiratory acidosis before substantial renal adaptation",
      "Chronic respiratory acidosis with fully developed renal adaptation within minutes",
      "Primary metabolic alkalosis as the explanation for acidemia",
      "Primary respiratory alkalosis despite the high PaCO₂"
    ],
    "answer": 0,
    "rationale": "The abrupt hypoventilation and high PaCO₂ support acute respiratory acidosis. A 30 mmHg rise above the illustrative baseline predicts about a 3 mmol/L acute bicarbonate rise. Support breathing and assess targeted reversal; the pattern is not evidence of immediate chronic adaptation.",
    "reviewHref": "#compensation-mixed-disorders"
  },
  {
    "id": "acid-base-097",
    "question": "A patient has an uncorrected anion gap of 11 mEq/L and albumin 1.5 g/dL. What is the defensible next interpretation?",
    "choices": [
      "Apply albumin correction and the local reference interval before excluding unmeasured acids",
      "Exclude a high-gap process solely because the uncorrected gap is 11",
      "Subtract the albumin correction because albumin is low",
      "Treat the corrected gap as proof of a specific toxin without exposure assessment"
    ],
    "answer": 0,
    "rationale": "The correction adds 2.5 × (4 − 1.5) = 6.25, giving 17.25 mEq/L (17.3 if rounded to one decimal place). Compare with the local range and investigate the cause; correction alone identifies neither a toxin nor a treatment.",
    "reviewHref": "#anion-gap-metabolic-acidosis"
  },
  {
    "id": "acid-base-098",
    "question": "A patient with severe metabolic acidosis is breathing 38 times per minute and becoming fatigued. What is the most defensible action?",
    "choices": [
      "Urgently assess and support ventilation, planning any airway transition to limit carbon dioxide retention while respecting lung mechanics",
      "Assume the high rate guarantees sufficient alveolar ventilation",
      "Use sedating treatment to suppress the rate without planning ventilatory support",
      "Copy the observed respiratory rate onto a ventilator as a universally safe setting"
    ],
    "answer": 0,
    "rationale": "Fatigue can compromise effective compensation. Rate alone does not establish carbon dioxide clearance. Airway decisions and support must account for gas trends, lung mechanics, air trapping, oxygenation, and the underlying cause.",
    "reviewHref": "#respiratory-integrated"
  },
  {
    "id": "acid-base-099",
    "question": "A patient hyperventilating with chest pain is presumed anxious before oxygenation or examination is assessed. What should follow?",
    "choices": [
      "Assess for organic illness and oxygenation and avoid paper-bag rebreathing",
      "Use paper-bag rebreathing as a test that excludes hypoxemia",
      "Accept anxiety as proven because hyperventilation is present",
      "Treat normal pulse oximetry, if found, as proof that all dangerous causes are excluded"
    ],
    "answer": 0,
    "rationale": "Hypoxemia, pulmonary embolism, sepsis, pain, and other disease can accompany hyperventilation. BTS advises against paper-bag rebreathing, which can worsen hypoxemia. Oxygen saturation alone does not exclude every organic cause.",
    "reviewHref": "#respiratory-integrated"
  }
];
for (const question of reviewedAcidBaseCompletionCases) { const index = acidBaseInterpretationQuestionBank.findIndex(item => item.id === question.id); if (index < 0) throw new Error("Missing reviewed acid-base case: " + question.id); acidBaseInterpretationQuestionBank[index] = question; }

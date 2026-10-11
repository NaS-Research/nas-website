const c = (name, lesson, principle, action, hazard, caseStem, caseAnswer, why) => ({ name, lesson, principle, action, hazard, caseStem, caseAnswer, why });

const concepts = [
  c("relative insulin deficiency", "hhs-pathophysiology", "Residual insulin limits major ketogenesis but cannot adequately restrain glucose production or support peripheral use.", "Connect severe hyperglycemia without major acidosis to relative rather than absolute insulin deficiency.", "Assuming that absence of ketones means adequate insulin action ignores the profound hyperglycemia.", "Glucose is 780 mg/dL with beta-hydroxybutyrate 0.8 and pH 7.38.", "Recognize physiology consistent with HHS rather than DKA.", "Residual insulin can suppress extensive lipolysis while hyperglycemia and osmotic diuresis progress."),
  c("osmotic diuresis", "hhs-pathophysiology", "Filtered glucose pulls water and electrolytes into urine and progressively reduces circulating and total-body volume.", "Link glucosuria to water, sodium, potassium, and kidney perfusion losses.", "Treating the glucose number without restoring volume leaves the central hemodynamic problem untreated.", "A patient has polyuria, hypotension, dry mucosa, and rising creatinine.", "Prioritize monitored isotonic fluid restoration.", "The hyperglycemia becomes dangerous through cumulative urinary water and electrolyte loss."),
  c("water access", "hhs-pathophysiology", "HHS risk rises when thirst, cognition, mobility, caregiving, or access cannot match urinary water loss.", "Ask who obtains water and medicines when illness or function changes.", "Labeling the event nonadherence without assessing access misses a direct recurrence mechanism.", "An older adult living alone could not reach water during an infection.", "Treat impaired hydration access as part of the precipitating cause.", "HHS often requires both osmotic loss and failure to replace the lost water."),
  c("four-part diagnosis", "hhs-diagnosis", "HHS requires glucose at least 600, qualifying hyperosmolality, minimal ketonemia, and no metabolic acidosis.", "Verify all four current biochemical domains before assigning pure HHS.", "Using glucose above 600 alone can miss DKA overlap or another hyperosmolar state.", "Glucose is 650 but pH is 7.20 and beta-hydroxybutyrate is 4.0.", "Do not call this pure HHS because DKA features are present.", "All four current criteria distinguish pure HHS from mixed crisis."),
  c("effective osmolality", "hhs-diagnosis", "Effective osmolality estimates tonicity from sodium and glucose and excludes urea.", "Calculate two times sodium plus glucose divided by 18 when conventional units are used.", "Adding BUN to an effective osmolality formula changes the clinical quantity being calculated.", "Sodium is 146 and glucose is 720 mg/dL.", "Calculate effective osmolality as 332 mOsm/kg.", "Two times 146 plus 720 divided by 18 equals 332."),
  c("total osmolality", "hhs-diagnosis", "Total calculated osmolality adds the urea contribution to sodium and glucose.", "Add BUN divided by 2.8 when all values use conventional US units.", "Mixing mmol/L and mg/dL formulas produces a clinically misleading result.", "Sodium is 140, glucose 720, and BUN 56 mg/dL.", "Calculate total osmolality as 340 mOsm/kg.", "Two times 140 plus 720 divided by 18 plus 56 divided by 2.8 equals 340."),
  c("precipitating illness", "hhs-causes-overlap", "Infection, ischemia, stroke, pancreatitis, surgery, and trauma can increase glucose and reduce intake.", "Investigate likely triggers in parallel with stabilization using symptoms, examination, and risk.", "Delaying fluid treatment for exhaustive testing worsens hypoperfusion.", "A patient has HHS, fever, cough, and focal lung findings.", "Treat HHS while evaluating and treating a probable respiratory infection.", "Cause correction and crisis reversal proceed together."),
  c("hyperglycemia-promoting exposures", "hhs-causes-overlap", "Glucocorticoids, sympathomimetics, selected antipsychotics, diuretics, and concentrated nutrition can contribute to HHS.", "Reconcile medicines, recent dose changes, and nutrition delivery during the precipitant review.", "Automatically restarting every preadmission exposure can recreate the same metabolic pressure.", "HHS began after high-dose glucocorticoids and escalating tube feeds.", "Redesign glucose management while reassessing both exposures.", "Medication and nutrition changes can increase insulin requirements and water loss."),
  c("mixed DKA and HHS", "hhs-causes-overlap", "Hyperosmolality with beta-hydroxybutyrate at least 3.0 or metabolic acidosis contains clinically important DKA features.", "Use DKA-intensity insulin after fluid and potassium safety when significant ketonemia or acidosis coexists.", "Using the lower pure-HHS insulin rate can undertreat active ketogenesis.", "Osmolality is 326, beta-hydroxybutyrate 4.6, and pH 7.25.", "Treat mixed DKA and HHS with a 0.1 units/kg/h pathway.", "Overlap is common and treatment follows the more insulin-deficient phenotype."),
  c("initial isotonic fluid", "hhs-initial-fluids", "Isotonic saline or balanced crystalloid restores intravascular volume and kidney perfusion.", "Begin 500 to 1,000 mL/h for 2 to 4 hours in adults without heart or kidney compromise, then reassess.", "Starting with hypotonic fluid can lower osmolality too rapidly before perfusion is restored.", "A 58-year-old has shock-free HHS without heart or kidney failure.", "Begin monitored isotonic crystalloid resuscitation.", "Initial treatment restores circulating volume before fine adjustment of tonicity."),
  c("limited fluid reserve", "hhs-initial-fluids", "Heart failure, dialysis, frailty, pregnancy, and older age increase the risk of overload during fluid replacement.", "Use smaller increments such as 250 mL with frequent hemodynamic and respiratory assessment.", "Applying a fixed large-volume protocol can cause pulmonary edema and mechanical ventilation.", "An 82-year-old with HHS has reduced ejection fraction and crackles.", "Use cautious small-volume resuscitation guided by repeated assessment.", "The fluid deficit remains real, but replacement speed and monitoring must fit reserve."),
  c("glucose decline ceiling", "hhs-sodium-osmolality", "Glucose should generally fall no faster than 90 to 120 mg/dL each hour in HHS.", "Reduce treatment intensity and reassess fluids and insulin if the decline exceeds the neurologic safety range.", "Allowing a 220 mg/dL hourly fall can produce a dangerous osmotic shift.", "Glucose falls from 820 to 650 in one hour after fluids and insulin.", "Reassess and slow the correction trajectory.", "Controlled glucose decline helps limit cerebral water shifts."),
  c("osmolality decline", "hhs-sodium-osmolality", "Serum osmolality should fall about 3 to 8 mOsm/kg each hour.", "Calculate and plot osmolality repeatedly with sodium, glucose, balance, and cognition.", "A rapid unmeasured fall can cause cerebral edema or osmotic demyelination.", "Osmolality drops 14 mOsm/kg in one hour and headache worsens.", "Slow correction and urgently assess neurologic status.", "The osmolality slope is a central HHS treatment endpoint."),
  c("sodium decline", "hhs-sodium-osmolality", "Serum sodium decline should not exceed 10 mmol/L over 24 hours.", "Track sodium with osmolality and avoid abrupt free-water shifts.", "Correcting severe hypernatremia rapidly creates osmotic demyelination and cerebral injury risk.", "Sodium falls 12 mmol/L during the first 18 hours.", "Reduce the rate of tonicity correction and reassess the fluid plan.", "Sodium change is one component of neurologic safety."),
  c("expected sodium rise", "hhs-sodium-osmolality", "Sodium commonly rises about 1.6 mmol/L for each 100 mg/dL glucose decline as water shifts intracellularly.", "Interpret an early sodium rise through the concurrent osmolality and fluid-balance trend.", "Switching immediately to hypotonic fluid from sodium alone can accelerate osmotic correction.", "Glucose falls 200 mg/dL and sodium rises 3 mmol/L while osmolality falls appropriately.", "Recognize an expected shift and continue guided treatment.", "The observed sodium rise matches the predicted water redistribution."),
  c("hypotonic saline threshold", "hhs-sodium-osmolality", "Half-normal saline is considered only when osmolality fails to decline despite adequate positive balance and appropriate insulin.", "Verify perfusion, fluid balance, sodium, glucose, and treatment delivery before changing tonicity.", "Using half-normal saline as the default first fluid can worsen neurologic risk.", "Osmolality remains flat despite restored perfusion, positive balance, and appropriate insulin.", "Consider protocol-guided 0.45 percent saline after full reassessment.", "Hypotonic saline is a conditional later intervention, not initial resuscitation."),
  c("potassium before insulin", "hhs-potassium-insulin", "Potassium below 3.5 mmol/L requires replacement and delay of insulin.", "Replace potassium until it exceeds 3.5, then start insulin with close monitoring.", "Immediate insulin at potassium 3.0 can provoke arrhythmia and respiratory weakness.", "Potassium is 3.2 mmol/L after initial fluids.", "Replace potassium and hold insulin temporarily.", "Insulin shifts potassium intracellularly and can expose the total-body deficit."),
  c("pure HHS insulin", "hhs-potassium-insulin", "Pure HHS uses fixed-rate IV insulin at 0.05 units/kg/h after adequate fluid and potassium replacement.", "Calculate the low fixed rate from weight and verify the infusion concentration and pump setting.", "Using 0.1 units/kg/h automatically can cause an unnecessarily rapid glucose and osmolality decline.", "A 90-kg patient has pure HHS and safe potassium after fluids.", "Start 4.5 units/h under the validated protocol.", "Ninety kilograms times 0.05 units/kg/h equals 4.5 units/h."),
  c("dextrose support", "hhs-potassium-insulin", "Dextrose is added below glucose 250 mg/dL to prevent hypoglycemia while controlled correction continues.", "Add 5 to 10 percent dextrose and adjust insulin under protocol until resolution criteria are met.", "Stopping all treatment at glucose 245 can leave hyperosmolality and hypoperfusion unresolved.", "Glucose is 238 but osmolality is 306 and cognition remains impaired.", "Add dextrose support and continue controlled treatment.", "Glucose recovery can precede full HHS resolution."),
  c("serial monitoring", "hhs-monitoring-resolution", "Glucose is checked every 1 to 2 hours and chemistry, creatinine, and osmolality about every 4 hours during active treatment.", "Use a flowsheet to connect fluids, insulin, potassium, output, cognition, glucose, sodium, and osmolality.", "Sparse laboratory review can miss rapid hypoglycemia, hypokalemia, or osmotic change.", "Insulin has begun and potassium was initially 4.1 mmol/L.", "Recheck potassium early and continue scheduled serial monitoring.", "Treatment changes the measured system quickly and requires planned surveillance."),
  c("HHS resolution", "hhs-monitoring-resolution", "Resolution includes osmolality below 300, glucose below 250, urine output above 0.5 mL/kg/h, and cognitive improvement.", "Confirm every biochemical, perfusion, and neurologic domain before ending the HHS pathway.", "Using glucose alone can stop treatment while hyperosmolality and organ hypoperfusion persist.", "Glucose is 230, osmolality 296, urine output 0.8 mL/kg/h, and cognition has normalized.", "The current HHS resolution domains are met if the broader clinical state is stable.", "The patient has recovered across glucose, tonicity, perfusion, and cognition."),
  c("persistent altered cognition", "hhs-monitoring-resolution", "Cognition that fails to improve after osmolality correction requires evaluation for another neurologic or systemic cause.", "Assess stroke, seizure, infection, medication effects, hypoxia, and other causes rather than extending HHS treatment blindly.", "Attributing every neurologic deficit to glucose can delay time-sensitive stroke care.", "Osmolality is 294 but unilateral weakness and aphasia persist.", "Activate urgent neurologic evaluation.", "Corrected hyperosmolality should not conceal a competing neurologic emergency."),
  c("treatment neurologic injury", "hhs-complications", "Rapid glucose, sodium, or osmolality change can cause cerebral edema or osmotic demyelination.", "Slow correction and urgently assess any new headache, seizure, focal deficit, or declining consciousness.", "Accelerating treatment after new neurologic signs can worsen osmotic injury.", "A seizure occurs while osmolality is falling 12 mOsm/kg/h.", "Urgently evaluate and reduce the correction rate.", "The treatment slope exceeds the recommended neurologic safety range."),
  c("thrombosis and kidney injury", "hhs-complications", "Severe dehydration causes hemoconcentration, thrombosis risk, and hypoperfusion-related acute kidney injury.", "Restore perfusion, monitor kidney response, and assess thromboprophylaxis from mobility, bleeding risk, and local protocol.", "Assuming creatinine rise is chronic can miss reversible hypoperfusion and medication accumulation.", "Creatinine rises with oliguria, hypotension, and severe dehydration.", "Restore perfusion cautiously and reassess kidney function and medication exposure.", "Volume depletion is a common reversible driver of kidney injury in HHS."),
  c("subcutaneous insulin transition", "hhs-transition-prevention", "When ongoing insulin is required, subcutaneous basal insulin must be active before the IV infusion ends.", "Select the regimen from prior therapy, inpatient insulin needs, nutrition, kidney function, hypoglycemia risk, the precipitant, and the patient's ability to use it safely.", "Stopping IV insulin before basal coverage is active creates a treatment gap and allows severe hyperglycemia to recur.", "Glucose, osmolality, urine output, and cognition have recovered, but the prescribed basal insulin has not yet been given.", "Administer basal insulin and use the protocol-defined overlap before stopping IV insulin.", "A planned overlap maintains insulin activity while the subcutaneous dose is absorbed."),
  c("transition and prevention", "hhs-transition-prevention", "Recurrence prevention requires active subcutaneous therapy, precipitant correction, hydration access, supplies, support, and follow-up.", "Match the discharge plan to cognition, function, caregiving, cost, transportation, and water availability.", "Providing instructions without medicines, monitoring, hydration, or support does not create a usable plan.", "HHS followed infection, missed medicines, and inability to obtain water.", "Secure treatment and hydration access, caregiver support, sick-day instructions, and early follow-up.", "The precipitating system must be corrected before discharge."),
  c("corrected sodium estimate", "hhs-sodium-osmolality", "Corrected sodium estimates the concentration after accounting for glucose-associated extracellular water shift.", "State the correction factor, use simultaneous values, and interpret the estimate beside osmolality and serial measured sodium.", "Treating corrected sodium as an exact measured target can drive an unsafe fluid change.", "Measured sodium is 132 mmol/L and glucose is 600 mg/dL using 1.6 mmol/L per 100 mg/dL above 100.", "Estimate corrected sodium as about 140 mmol/L and continue trend-based assessment.", "Five 100 mg/dL increments add about 8 mmol/L to the measured sodium."),
  c("free-water deficit estimate", "hhs-sodium-osmolality", "A free-water deficit calculation estimates scale but does not replace examination, perfusion assessment, or serial osmolality monitoring.", "Use an individualized total-body-water estimate and update the plan as weight, balance, urine output, sodium, and osmolality change.", "Turning a rough deficit into an automatic rapid replacement order can cause fluid overload or neurologic injury.", "A frail older adult has marked hypernatremia, heart failure, and uncertain baseline weight.", "Use the deficit only as a planning estimate and replace fluid cautiously with frequent reassessment.", "Every input is uncertain and cardiac reserve constrains the safe delivery rate."),
  c("fluid-first glucose response", "hhs-initial-fluids", "Isotonic fluid alone can lower glucose by restoring kidney perfusion and reducing counterregulatory stress.", "Measure the glucose and osmolality response to initial fluid before escalating insulin intensity.", "Starting aggressive insulin before adequate volume and potassium assessment can accelerate osmotic decline and circulatory instability.", "Glucose falls substantially after the first phase of isotonic resuscitation before insulin begins.", "Recognize an expected fluid response and continue controlled protocol-guided correction.", "Perfusion restoration increases urinary glucose clearance and lowers stress signaling."),
  c("representative transition exposure", "hhs-transition-prevention", "A maintenance insulin estimate should use representative stable exposure and account for nutrition, kidney function, hypoglycemia risk, and resolving glucotoxicity.", "Compare recent stable IV needs with prior therapy and weight-based estimates before choosing a practical regimen.", "Extrapolating a brief early high-dose period can substantially overestimate outpatient insulin needs.", "The infusion requirement drops after rehydration and acute kidney injury persists.", "Use a conservative risk-adjusted transition estimate rather than the early peak rate alone.", "Insulin sensitivity and clearance change as perfusion, stress, intake, and kidney function evolve."),
];

const dimensions = [
  { key: "principle", prompt: x => `Which statement best explains ${x.name}?`, field: "principle" },
  { key: "application", prompt: x => `Which action best applies ${x.name}?`, field: "action" },
  { key: "safety", prompt: x => `Which error creates the clearest safety problem in ${x.name}?`, field: "hazard" },
  { key: "case", prompt: x => `${x.caseStem} Which response is best?`, field: "caseAnswer" },
];
const offsets = [5, 11, 17];

const originalHyperosmolarHyperglycemicStateQuestionBank = concepts.flatMap((concept, conceptIndex) => dimensions.map((dimension, dimensionIndex) => ({
  id: `hhs-${String(conceptIndex + 1).padStart(2, "0")}-${dimension.key}`,
  question: dimension.prompt(concept),
  choices: [concept[dimension.field], ...offsets.map(offset => concepts[(conceptIndex + offset) % concepts.length][dimension.field])],
  answer: 0,
  rationale: concept.why,
  reviewHref: `#${concept.lesson}`,
  difficulty: ["foundational", "application", "advanced", "clinical"][dimensionIndex],
})));

const exposureReviewedHyperosmolarHyperglycemicStateQuestionBank = originalHyperosmolarHyperglycemicStateQuestionBank;

// Scoped corrections preserve the canonical bank and previously reviewed exposure items.
const sourceReviewedSodiumOsmolalityQuestions = {
  "hhs-12-principle": {
    "distractors": [
      "The ceiling is 90 to 120 mg/dL over the entire admission.",
      "Glucose must fall by at least 120 mg/dL every hour.",
      "The rate limit applies only after glucose is below 250 mg/dL."
    ],
    "rationale": "The HHS glucose limit is an hourly ceiling, not a minimum speed or a target for the whole admission. Interpret the rate alongside sodium, osmolality, perfusion, and neurologic findings."
  },
  "hhs-12-application": {
    "distractors": [
      "Judge safety from the latest glucose value without its elapsed time.",
      "Use the average daily glucose decrease to exclude a rapid early fall.",
      "Track glucose alone because sodium and osmolality do not affect safety."
    ],
    "rationale": "A rate requires paired measurements and elapsed time. A still-high glucose can be falling too quickly; check the coupled sodium and osmolality trajectories rather than accepting the current value alone."
  },
  "hhs-12-safety": {
    "distractors": [
      "Checking the hourly glucose decline against the HHS ceiling.",
      "Reviewing osmolality and sodium when glucose falls quickly.",
      "Reassessing treatment when neurologic findings change."
    ],
    "rationale": "Accelerating glucose correction beyond the HHS ceiling can cause harmful osmotic shifts. Serial rate checks, coupled chemistry review, and reassessment of new neurologic findings are protective actions."
  },
  "hhs-12-case": {
    "distractors": [
      "Continue the same rate because 650 mg/dL is still high.",
      "Increase insulin to normalize glucose within the next hour.",
      "Stop sodium and osmolality monitoring after glucose starts falling."
    ],
    "rationale": "The decline is 820 - 650 = 170 mg/dL in one hour, exceeding the 90 to 120 mg/dL/h HHS ceiling. Reassess the actual fluid and insulin delivery, osmolality, sodium, perfusion, and neurologic status, then adjust the correction trajectory."
  },
  "hhs-13-principle": {
    "distractors": [
      "Osmolality should fall 3 to 8 mOsm/kg over the entire day.",
      "Any osmolality decrease is safe if glucose remains above 600 mg/dL.",
      "An osmolality fall above 8 mOsm/kg/h is required to reverse HHS."
    ],
    "rationale": "The 3 to 8 mOsm/kg/h range describes a monitored hourly fall during HHS treatment. Faster biochemical improvement can be unsafe; assess the rate and the clinical response together."
  },
  "hhs-13-application": {
    "distractors": [
      "Infer osmolality from the glucose value without checking sodium.",
      "Use the admission osmolality to judge all subsequent treatment.",
      "Check cognition only after the osmolality reaches its resolution threshold."
    ],
    "rationale": "Serial osmolality, sodium, glucose, fluid balance, and cognition reveal the direction and speed of correction. Neither an isolated glucose nor an admission value establishes safety later in treatment."
  },
  "hhs-13-safety": {
    "distractors": [
      "Plotting serial osmolality measurements with elapsed time.",
      "Reassessing the fluid and insulin plan when osmolality falls too quickly.",
      "Checking neurologic status when the correction trajectory changes."
    ],
    "rationale": "Large rapid osmotic changes can move water into brain cells and contribute to cerebral injury. Rate monitoring and clinical reassessment reduce the chance of overlooking this problem; a new neurologic symptom requires urgent evaluation."
  },
  "hhs-13-case": {
    "distractors": [
      "Continue unchanged because falling osmolality always proves safe recovery.",
      "Increase the correction rate to reach the resolution threshold sooner.",
      "Wait for the next routine laboratory draw before assessing worsening headache."
    ],
    "rationale": "A 14 mOsm/kg fall in one hour exceeds the 3 to 8 mOsm/kg/h HHS range. Worsening headache warrants urgent neurologic assessment and review of treatment delivery and tonicity; the rate of biochemical change alone is not proof of safe recovery."
  },
  "hhs-14-principle": {
    "distractors": [
      "Sodium must fall by 10 mmol/L every hour.",
      "A 10 mmol/L decline is a minimum daily treatment target.",
      "The sodium limit is irrelevant if the osmolality is decreasing."
    ],
    "rationale": "The HHS sodium limit is a maximum decline of 10 mmol/L in 24 hours. It is not a required decline, and sodium must be interpreted with osmolality and glucose rather than used as an isolated treatment target."
  },
  "hhs-14-application": {
    "distractors": [
      "Restart the allowable sodium decline at each new laboratory draw.",
      "Ignore sodium change until exactly 24 hours have elapsed.",
      "Use glucose decline alone to decide whether sodium correction is safe."
    ],
    "rationale": "Review the cumulative sodium change over its actual time interval alongside osmolality and clinical status. An excessive fall can be identified before 24 hours; each measurement does not reset the safety limit."
  },
  "hhs-14-safety": {
    "distractors": [
      "Reviewing the cumulative sodium decline over 24 hours.",
      "Distinguishing rapid correction of hypernatremia from rapid correction of hyponatremia.",
      "Reassessing neurologic status and osmolality when sodium changes unexpectedly."
    ],
    "rationale": "Rapid lowering of hypernatremia can produce harmful cerebral water shifts. The classic osmotic demyelination mechanism is rapid correction of hyponatremia; do not label every downward sodium change as that mechanism. HHS requires controlled correction of the coupled sodium and osmolality trajectory."
  },
  "hhs-14-case": {
    "distractors": [
      "Continue unchanged because 24 hours have not yet elapsed.",
      "Accelerate fluids to normalize sodium sooner.",
      "Judge neurologic safety from glucose without considering sodium or osmolality."
    ],
    "rationale": "A 12 mmol/L sodium decline within 18 hours already exceeds the HHS maximum of 10 mmol/L in 24 hours. Reassess the fluid plan, osmolality, and neurologic findings and reduce excessive correction rather than waiting for the clock to reach 24 hours."
  },
  "hhs-15-principle": {
    "distractors": [
      "Sodium must fall by 1.6 mmol/L whenever glucose falls by 100 mg/dL.",
      "Any rise in sodium establishes treatment failure.",
      "The expected sodium rise removes the need to monitor osmolality."
    ],
    "rationale": "As extracellular glucose falls, water returns into cells and measured sodium can rise. The 2024 consensus uses about 1.6 mmol/L per 100 mg/dL glucose decline; this estimate does not replace serial osmolality and volume assessment."
  },
  "hhs-15-application": {
    "distractors": [
      "Switch fluids solely because measured sodium is higher.",
      "Stop fluid replacement whenever sodium rises during glucose correction.",
      "Treat the sodium rise as proof that insulin has no effect."
    ],
    "rationale": "An early sodium rise can reflect the expected redistribution of water during glucose correction. Determine whether osmolality is declining appropriately and whether perfusion and fluid balance are improving before changing the fluid plan."
  },
  "hhs-15-safety": {
    "distractors": [
      "Interpreting sodium beside the contemporaneous glucose and osmolality.",
      "Reviewing fluid balance and perfusion before changing fluid tonicity.",
      "Monitoring a rising sodium while the osmolality declines appropriately."
    ],
    "rationale": "Changing to hypotonic fluid solely because sodium rises ignores the expected water shift and may accelerate osmotic correction. Review the complete trajectory; an appropriate osmolality decline is not treatment failure merely because sodium rose."
  },
  "hhs-15-case": {
    "distractors": [
      "Switch to hypotonic saline based only on the sodium rise.",
      "Stop all replacement fluid because the rise proves failure.",
      "Increase insulin solely to reverse the sodium rise."
    ],
    "rationale": "Using the stated estimate, a 200 mg/dL glucose decline predicts roughly a 3.2 mmol/L sodium rise. The observed rise of 3 mmol/L is compatible with that shift. Continue guided treatment and serial reassessment when osmolality is falling appropriately."
  },
  "hhs-16-principle": {
    "distractors": [
      "Half-normal saline is the initial resuscitation fluid for every HHS patient.",
      "An isolated sodium rise is enough to require half-normal saline.",
      "Positive fluid balance alone requires a switch to half-normal saline."
    ],
    "rationale": "In the 2024 HHS pathway, 0.45 percent saline is a conditional later choice when osmolality is not declining despite adequate positive balance and appropriate insulin. It is not selected from sodium alone or substituted for initial perfusion assessment."
  },
  "hhs-16-application": {
    "distractors": [
      "Change fluid tonicity before checking whether the prescribed treatment was delivered.",
      "Use a single sodium result to decide the fluid change.",
      "Assume a positive balance excludes persistent perfusion or cardiac problems."
    ],
    "rationale": "Before changing tonicity, reassess actual treatment delivery, perfusion, balance, sodium, glucose, and osmolality. Positive balance is one piece of evidence, not proof that the whole treatment plan is adequate or well tolerated."
  },
  "hhs-16-safety": {
    "distractors": [
      "Starting monitored isotonic resuscitation when hypovolemia requires it.",
      "Checking whether osmolality is falling before changing fluid tonicity.",
      "Confirming adequate balance and appropriate insulin before considering 0.45 percent saline."
    ],
    "rationale": "Making half-normal saline the automatic first fluid bypasses the HHS resuscitation sequence. Initial perfusion restoration and subsequent fluid selection require the complete volume and tonicity context."
  },
  "hhs-16-case": {
    "distractors": [
      "Switch all HHS patients to hypotonic fluid as soon as they arrive.",
      "Use hypotonic fluid whenever sodium rises, irrespective of osmolality.",
      "Stop reassessing volume tolerance because positive balance has been achieved."
    ],
    "rationale": "The stated findings meet the context for considering 0.45 percent saline under the HHS protocol. Continue clinical and chemistry reassessment: a conditional fluid change is not an instruction to stop monitoring volume tolerance or treatment response."
  },
  "hhs-27-principle": {
    "distractors": [
      "Corrected sodium is the sodium concentration directly measured by the laboratory.",
      "Corrected sodium equals the current effective osmolality.",
      "Corrected sodium is a guaranteed immediate target for fluid replacement."
    ],
    "rationale": "Corrected sodium estimates the concentration after accounting for the glucose-related water shift under stated assumptions. It differs from measured sodium and from osmolality; ongoing losses and treatment can change the estimate."
  },
  "hhs-27-application": {
    "distractors": [
      "Combine sodium and glucose drawn at unrelated times without qualification.",
      "Use corrected sodium in place of measured sodium in the standard osmolality equation.",
      "Treat the chosen correction factor as an exact value for every patient."
    ],
    "rationale": "Use paired sodium and glucose values and state the correction factor. Interpret the estimate with measured sodium, osmolality, and clinical findings. Standard current osmolality calculations use measured sodium; replacing it with a glucose-corrected estimate counts that shift again."
  },
  "hhs-27-safety": {
    "distractors": [
      "Stating the correction factor and its units.",
      "Recalculating the estimate from paired serial sodium and glucose values.",
      "Checking perfusion and osmolality before changing the fluid plan."
    ],
    "rationale": "A corrected sodium estimate is not an exact measured target or a complete replacement order. Stating assumptions, repeating paired measurements, and assessing the full clinical trajectory are safeguards."
  },
  "hhs-27-case": {
    "distractors": [
      "Estimate corrected sodium as 133.6 mmol/L by counting only one glucose increment.",
      "Estimate corrected sodium as 141.6 mmol/L by counting glucose above zero.",
      "Estimate corrected sodium as 124 mmol/L by subtracting the glucose correction."
    ],
    "rationale": "Glucose is 500 mg/dL above 100, or five 100 mg/dL increments. The stated calculation is 132 + 1.6 x 5 = 140 mmol/L. This remains an estimate; do not treat it as the current measured sodium or an automatic fluid target."
  },
  "hhs-28-principle": {
    "distractors": [
      "A calculated deficit specifies both the fluid type and delivery rate without clinical assessment.",
      "A calculated deficit includes every future urinary and insensible loss automatically.",
      "A weight-derived total-body-water estimate is an exact measured volume."
    ],
    "rationale": "The estimate frames the scale of water imbalance under assumptions about total body water. It does not include every evolving loss or determine a safe delivery rate; examination, perfusion, reserve, balance, and serial chemistry guide the plan."
  },
  "hhs-28-application": {
    "distractors": [
      "Use the admission weight as a fixed exact body-water volume throughout treatment.",
      "Replace the calculated deficit without updating ongoing losses or urine output.",
      "Use the formula instead of assessing perfusion and cardiac tolerance."
    ],
    "rationale": "Body-water estimates and ongoing losses can change during treatment. Update the plan from weight context, intake and output, sodium, glucose, osmolality, perfusion, and heart and kidney reserve rather than repeating an unchanged formula order."
  },
  "hhs-28-safety": {
    "distractors": [
      "Considering the uncertainty of a weight-derived total-body-water estimate.",
      "Reassessing the plan as urinary losses and measured sodium change.",
      "Using cautious monitored replacement when cardiac reserve is limited."
    ],
    "rationale": "Automatically delivering a rough deficit rapidly can exceed volume tolerance and accelerate osmotic correction. Uncertainty, ongoing losses, and cardiac reserve require repeated assessment rather than an automatic complete order."
  },
  "hhs-28-case": {
    "distractors": [
      "Give the whole calculated deficit rapidly despite cardiac congestion.",
      "Treat an uncertain baseline weight as an exact measure of total body water.",
      "Convert the estimated deficit directly into a complete fluid order without reassessment."
    ],
    "rationale": "Weight-derived body-water estimates and evolving losses are uncertain, and heart failure constrains the safe delivery rate. Use the deficit to inform a cautious monitored plan with frequent assessment of perfusion, congestion, balance, sodium, and osmolality."
  }
};
const sourceReviewedCorrectAnswerText = {
  "hhs-13-safety": "Rapid changes in osmolality without serial assessment can produce harmful cerebral fluid shifts.",
  "hhs-14-safety": "Rapidly lowering high sodium without monitoring tonicity and neurologic status creates cerebral injury risk."
};
const sodiumOsmolalityReviewedQuestionBank = exposureReviewedHyperosmolarHyperglycemicStateQuestionBank.map((question) => {
  const correction = sourceReviewedSodiumOsmolalityQuestions[question.id];
  if (!correction) return question;
  return { ...question, choices: [sourceReviewedCorrectAnswerText[question.id] ?? question.choices[0], ...correction.distractors], rationale: correction.rationale };
});

// Correct the same inherited mechanism wording in two non-key choices.
export const hyperosmolarHyperglycemicStateQuestionBank = sodiumOsmolalityReviewedQuestionBank.map((question) => ["hhs-03-safety", "hhs-09-safety"].includes(question.id) ? { ...question, choices: question.choices.map((choice) => choice === "Correcting severe hypernatremia rapidly creates osmotic demyelination and cerebral injury risk." ? "Rapidly lowering high sodium without monitoring tonicity and neurologic status creates cerebral injury risk." : choice) } : question);

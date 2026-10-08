const concepts = [
  { name: "segmental sodium transport capacity", lesson: "nephron-transport-and-diuresis", principle: "Nephron segments reabsorb different sodium fractions, so target site helps determine natriuretic ceiling.", action: "Use a high-capacity loop target when substantial decongestion is required and perfusion can support it.", assessment: "Pair nephron site with urine response, weight, congestion, pressure, perfusion, kidney function, and electrolytes.", hazard: "Assuming every sodium transporter produces equal diuresis can lead to ineffective or excessive therapy.", why: "Transport capacity and downstream compensation differ by nephron segment." },
  { name: "proximal tubular diuretic secretion", lesson: "nephron-transport-and-diuresis", principle: "Protein-bound loop and thiazide diuretics commonly reach luminal targets through organic anion secretion.", action: "Investigate perfusion, kidney disease, competing organic acids, absorption, and interacting drugs when response is poor.", assessment: "Review route, timing, albumin context, kidney function, urine response, and coadministered organic anions.", hazard: "Escalating dose without correcting poor delivery can add toxicity while target-site exposure remains inadequate.", why: "A drug must reach the tubular lumen before it can block its transporter." },
  { name: "distal sodium delivery and potassium loss", lesson: "nephron-transport-and-diuresis", principle: "More distal sodium delivery supports ENaC entry and potassium and hydrogen secretion.", action: "Monitor potassium, magnesium, bicarbonate, and interacting losses during loop or thiazide therapy.", assessment: "Trend electrolytes, acid-base status, rhythm, symptoms, urine response, and aldosterone-driving volume contraction.", hazard: "Uncorrected hypokalemic alkalosis can cause weakness, arrhythmia, and digoxin toxicity.", why: "Downstream sodium reclamation is electrically and hormonally linked to potassium and acid secretion." },
  { name: "effective circulating volume", lesson: "nephron-transport-and-diuresis", principle: "Total-body fluid excess can coexist with inadequate arterial filling and poor organ perfusion.", action: "Treat congestion while repeatedly reassessing pressure, perfusion, renal response, and the underlying hemodynamics.", assessment: "Combine weight, edema, jugular venous pressure, lungs, blood pressure, mentation, urine, and kidney trend.", hazard: "Removing fluid by scale target alone can produce circulatory collapse despite persistent peripheral edema.", why: "Fluid distribution and effective perfusion matter more than total-body volume alone." },
  { name: "loop NKCC2 inhibition", lesson: "loop-diuretics", principle: "Blocking NKCC2 in the thick ascending limb reduces sodium chloride reabsorption and the medullary concentration gradient.", action: "Use objective natriuretic and decongestion endpoints after an appropriate product-specific dose and route.", assessment: "Measure early urine response, congestion, pressure, perfusion, sodium, potassium, magnesium, and creatinine trend.", hazard: "High-capacity salt loss can rapidly cause volume depletion and electrolyte disturbance.", why: "The thick ascending limb is a major sodium-reabsorbing, water-impermeable segment." },
  { name: "loop calcium and magnesium loss", lesson: "loop-diuretics", principle: "Loss of the lumen-positive voltage reduces paracellular calcium and magnesium reabsorption.", action: "Monitor and replace minerals according to measured need and ongoing loss.", assessment: "Trend calcium, magnesium, potassium, rhythm, neuromuscular symptoms, kidney function, and dose intensity.", hazard: "Unrecognized hypomagnesemia can sustain hypokalemia and increase arrhythmia risk.", why: "NKCC2 blockade disrupts the electrical gradient that drives divalent cation reabsorption." },
  { name: "furosemide variable oral exposure", lesson: "loop-diuretics", principle: "Oral furosemide absorption can be variable and may worsen with gut edema.", action: "Reassess route, timing, formulation, and response rather than assuming oral and intravenous exposure are fixed equivalents.", assessment: "Compare dose-to-urine response, congestion, gastrointestinal absorption, prior exposure, and route.", hazard: "Blind oral dose escalation can create delayed excessive diuresis when absorption improves.", why: "Variable bioavailability makes administered dose an imperfect estimate of target-site exposure." },
  { name: "loop diuretic ototoxicity", lesson: "loop-diuretics", principle: "Risk rises with rapid parenteral delivery, high exposure, kidney impairment, hypoproteinemia, and other ototoxic drugs.", action: "Follow product-specific infusion limits and avoid unnecessary concurrent ototoxic exposure.", assessment: "Review rate, total dose, kidney function, albumin context, aminoglycosides, tinnitus, and hearing change.", hazard: "Rapid high exposure can produce reversible or irreversible hearing impairment.", why: "Peak concentration and interacting cochlear injury pathways amplify ototoxicity." },
  { name: "thiazide NCC inhibition", lesson: "thiazide-like-diuretics", principle: "NCC blockade in the distal convoluted tubule produces moderate natriuresis and supports chronic blood-pressure lowering.", action: "Select the exact thiazide-like product by duration, evidence, kidney function, and treatment endpoint.", assessment: "Monitor pressure, sodium, potassium, magnesium, kidney function, urate, glucose, and symptoms.", hazard: "Treating hydrochlorothiazide, chlorthalidone, indapamide, and metolazone as interchangeable ignores major kinetic differences.", why: "A shared transporter target does not equal identical exposure or outcomes evidence." },
  { name: "thiazide hypocalciuria", lesson: "thiazide-like-diuretics", principle: "Distal NCC blockade often increases calcium reabsorption and lowers urinary calcium.", action: "Use the calcium effect only when it fits the patient's stone, bone, serum calcium, and volume context.", assessment: "Trend serum calcium, urinary calcium when indicated, sodium intake, kidney function, and stone recurrence.", hazard: "Unrecognized hypercalcemia or another calcium disorder can worsen during therapy.", why: "Thiazide-like agents have a calcium effect opposite to loop diuretics." },
  { name: "thiazide-associated hyponatremia", lesson: "thiazide-like-diuretics", principle: "Impaired dilution combined with water intake and patient susceptibility can produce severe hyponatremia.", action: "Stop or adjust causative therapy and manage by symptoms, duration, volume status, and current sodium protocol.", assessment: "Evaluate neurologic symptoms, sodium trajectory, osmolality, urine studies, intake, solute, and interacting medicines.", hazard: "Both delayed recognition and overly rapid correction can cause severe neurologic injury.", why: "Thiazide hyponatremia is a water-balance emergency, not merely a low laboratory value." },
  { name: "thiazide and lithium interaction", lesson: "thiazide-like-diuretics", principle: "Sodium depletion increases proximal sodium and lithium reabsorption and can reduce lithium clearance.", action: "Coordinate lithium concentration and clinical monitoring when thiazide-like therapy is initiated, changed, or stopped.", assessment: "Track lithium level, kidney function, sodium, hydration, neurologic symptoms, and dose timing.", hazard: "Lithium toxicity can develop despite an unchanged lithium prescription.", why: "The diuretic changes renal lithium handling rather than the prescribed lithium dose." },
  { name: "thiazides in nephrogenic diabetes insipidus", lesson: "thiazide-like-diuretics", principle: "Mild volume contraction increases proximal sodium and water reclamation, reducing distal delivery and urine volume.", action: "Use only within cause-specific management that addresses solute intake, hydration, sodium, potassium, and kidney function.", assessment: "Trend urine volume, thirst, sodium, potassium, pressure, weight, hydration, kidney function, and the underlying cause.", hazard: "Excessive volume contraction can worsen hypernatremia, hypotension, kidney dysfunction, or electrolyte loss.", why: "The paradoxical antidiuretic response depends on enhanced proximal reclamation, not restoration of collecting-duct vasopressin sensitivity." },
  { name: "mineralocorticoid receptor antagonism", lesson: "potassium-sparing-diuretics", principle: "Spironolactone and eplerenone reduce aldosterone-driven transcription of sodium transport machinery.", action: "Use product-specific indication and titration while protecting potassium and kidney function.", assessment: "Check potassium and renal function at baseline, soon after initiation or titration, and regularly thereafter.", hazard: "Delayed genomic onset can invite premature escalation before full response appears.", why: "Intracellular receptor antagonism changes gene expression over time." },
  { name: "spironolactone endocrine effects", lesson: "potassium-sparing-diuretics", principle: "Spironolactone interacts with steroid hormone pathways beyond the mineralocorticoid receptor.", action: "Counsel and monitor for breast, sexual, and menstrual adverse effects and consider alternatives when clinically appropriate.", assessment: "Review symptoms, dose, duration, indication, potassium, kidney function, and competing diagnoses.", hazard: "Ignoring endocrine adverse effects can undermine adherence or conceal a serious alternative cause.", why: "Limited receptor selectivity creates clinically visible endocrine pharmacology." },
  { name: "eplerenone CYP3A exposure", lesson: "potassium-sparing-diuretics", principle: "Eplerenone metabolism depends substantially on CYP3A and is sensitive to interacting inhibitors.", action: "Apply current product contraindications and dose guidance after a complete interaction review.", assessment: "Check CYP3A inhibitors, potassium-raising agents, kidney function, potassium, and the exact indication.", hazard: "Increased exposure can intensify hyperkalemia and hypotension.", why: "Metabolic inhibition raises the concentration of a potassium-sparing antagonist." },
  { name: "amiloride ENaC blockade", lesson: "potassium-sparing-diuretics", principle: "Direct luminal ENaC inhibition reduces sodium entry and the electrical drive for potassium and hydrogen secretion.", action: "Use when direct ENaC inhibition fits and monitor the complete potassium-raising regimen.", assessment: "Trend potassium, bicarbonate, kidney function, sodium, pressure, and RAAS-blocking therapies.", hazard: "Hyperkalemia and non-anion-gap metabolic acidosis can emerge rapidly with kidney impairment.", why: "Collecting-duct sodium entry is linked to potassium and hydrogen secretion." },
  { name: "amiloride in lithium-associated nephrogenic diabetes insipidus", lesson: "potassium-sparing-diuretics", principle: "ENaC blockade can reduce lithium entry into collecting-duct principal cells and may lessen the concentrating defect.", action: "Consider amiloride within clinician-directed management while reviewing lithium need, exposure, hydration, sodium balance, and kidney reserve.", assessment: "Track urine volume, thirst, sodium, potassium, lithium concentration, hydration, kidney function, and symptoms of toxicity.", hazard: "Treating polyuria without monitoring potassium, kidney function, and lithium exposure can exchange one serious risk for another.", why: "Lithium can enter principal cells through ENaC, so blocking the channel addresses a mechanism of lithium-associated tubular injury." },
  { name: "potassium-sparing regimen burden", lesson: "potassium-sparing-diuretics", principle: "Hyperkalemia risk reflects kidney function, diabetes, diet, supplements, salt substitutes, and every potassium-raising drug.", action: "Calculate total potassium burden before initiation and define a specific laboratory follow-up plan.", assessment: "Reconcile ACE inhibitors, ARBs, ARNIs, MRAs, ENaC blockers, NSAIDs, trimethoprim, supplements, and salt substitutes.", hazard: "Reviewing one medication in isolation can miss a lethal additive interaction.", why: "Potassium homeostasis is determined by the whole regimen and patient reserve." },
  { name: "acetazolamide bicarbonaturia", lesson: "specialized-diuretic-agents", principle: "Carbonic anhydrase inhibition reduces proximal bicarbonate reclamation and produces alkaline urine.", action: "Use for a product-specific indication while anticipating falling serum bicarbonate and potassium.", assessment: "Monitor bicarbonate, chloride, potassium, sodium, kidney function, blood counts when labeled, and symptoms.", hazard: "Sustained use can produce clinically important hyperchloremic metabolic acidosis.", why: "Filtered bicarbonate is lost in urine when proximal reclamation is impaired." },
  { name: "acetazolamide altitude and hepatic safety", lesson: "specialized-diuretic-agents", principle: "Acetazolamide promotes acclimatization through bicarbonate loss but can impair ammonium handling in cirrhosis.", action: "Use the acute mountain sickness indication accurately and avoid the drug in cirrhosis because hepatic encephalopathy can be precipitated.", assessment: "Review altitude plan, liver and kidney function, bicarbonate, potassium, sodium, neurologic status, and contraindications.", hazard: "Confusing mountain sickness with motion sickness or ignoring cirrhosis can produce ineffective or dangerous therapy.", why: "Respiratory stimulation from metabolic acidosis can support acclimatization, while reduced ammonia excretion is hazardous in cirrhosis." },
  { name: "mannitol compartment expansion", lesson: "specialized-diuretic-agents", principle: "An intravenous filtered osmole initially expands extracellular volume before renal excretion removes water.", action: "Avoid or use only with specialist monitoring when pulmonary congestion or anuria makes the initial shift dangerous.", assessment: "Track lungs, pressure, sodium, osmolality, urine output, kidney function, and cumulative balance.", hazard: "Pulmonary edema can worsen before osmotic diuresis produces net fluid loss.", why: "Water moves into the extracellular compartment before the osmole is excreted." },
  { name: "tolvaptan aquaresis", lesson: "specialized-diuretic-agents", principle: "V2 receptor antagonism reduces collecting-duct water permeability and increases electrolyte-free water excretion.", action: "Use only for an appropriate labeled context with controlled sodium monitoring and access to water.", assessment: "Track serum sodium trajectory, thirst, water intake, urine output, volume status, liver considerations, and interactions.", hazard: "Serum sodium can correct too rapidly and cause osmotic demyelination risk.", why: "Aquaresis removes proportionally more water than sodium." },
  { name: "tolvaptan sodium correction safeguards", lesson: "specialized-diuretic-agents", principle: "Aquaresis can raise serum sodium quickly enough to cause osmotic demyelination when correction is not controlled.", action: "Initiate or reinitiate SAMSCA in a hospital, avoid early fluid restriction, permit response to thirst, and limit treatment to 30 days.", assessment: "Monitor sodium and neurologic status closely during initiation and titration, along with volume, water access, liver risk, and interacting drugs.", hazard: "Using tolvaptan for urgent neurologic rescue or allowing uncontrolled correction can cause permanent neurologic injury or death.", why: "The product removes electrolyte-free water, so sodium trajectory depends on baseline severity, water intake, concurrent diuresis, and monitoring." },
  { name: "SGLT2 proximal effects", lesson: "specialized-diuretic-agents", principle: "SGLT2 inhibition reduces proximal glucose and sodium reabsorption and produces modest osmotic and natriuretic effects.", action: "Use for validated metabolic, kidney, or cardiovascular indications rather than as a simple substitute loop diuretic.", assessment: "Monitor volume, kidney function trend, genital symptoms, ketone risk, glucose context, and peri-procedure plan.", hazard: "Euglycemic ketoacidosis can be missed when glucose is not markedly elevated.", why: "The class alters fuel and renal physiology beyond its mild diuretic effect." },
  { name: "early natriuretic response", lesson: "diuretic-resistance-and-monitoring", principle: "Urine output and urinary sodium after dosing can reveal response earlier than next-day weight.", action: "Use early objective response with examination and perfusion to guide clinician-directed adjustment.", assessment: "Measure timed urine output or sodium with congestion, pressure, perfusion, kidney function, and cumulative balance.", hazard: "Waiting for weight alone can delay recognition of ineffective therapy or excessive diuresis.", why: "Early renal response directly reflects target engagement before daily measurements accumulate." },
  { name: "post-diuretic sodium retention", lesson: "diuretic-resistance-and-monitoring", principle: "When drug concentration falls below threshold, activated sodium-retaining pathways can reclaim sodium between doses.", action: "Address sodium exposure, dosing schedule, duration, and disease physiology rather than escalating blindly.", assessment: "Review intake, dose timing, urine response duration, RAAS activation, weight trend, and adherence.", hazard: "Short exposure paired with high sodium intake can erase the earlier natriuretic loss.", why: "The kidney remains primed to conserve sodium after the pharmacologic effect wanes." },
  { name: "sequential nephron blockade", lesson: "diuretic-resistance-and-monitoring", principle: "Adding distal NCC blockade can prevent compensatory sodium reclamation after loop therapy.", action: "Reserve combination therapy for a defined resistant state with close timing and laboratory surveillance.", assessment: "Track sodium, potassium, magnesium, bicarbonate, pressure, perfusion, urine response, and kidney function frequently.", hazard: "The combination can cause profound hyponatremia, hypokalemia, alkalosis, hypotension, and kidney injury.", why: "Blocking two sequential sodium-reabsorbing segments can produce powerful and difficult-to-reverse losses." },
  { name: "NSAID attenuation of diuresis", lesson: "diuretic-resistance-and-monitoring", principle: "Prostaglandin inhibition can reduce renal perfusion and blunt natriuretic response in susceptible patients.", action: "Reconcile prescription and nonprescription NSAID use when edema, pressure, or kidney function worsens.", assessment: "Review NSAID exposure, perfusion, kidney function, urine response, sodium intake, and the RAAS regimen.", hazard: "The combination of diuretic, RAAS blockade, and NSAID can precipitate acute kidney injury.", why: "Several drugs can converge on glomerular perfusion and sodium handling." },
];

const dimensions = [
  ["principle", "Which physiologic principle best characterizes"],
  ["action", "Which clinical action best applies to"],
  ["assessment", "Which monitoring or assessment plan is most appropriate for"],
  ["hazard", "Which hazard is most important to prevent with"],
];

function distractors(index, field) {
  return [3, 8, 15].map((offset) => concepts[(index + offset) % concepts.length][field]);
}

export const diureticPharmacologyQuestionBank = concepts.flatMap((concept, conceptIndex) =>
  dimensions.map(([field, prefix], dimensionIndex) => ({
    id: `diuretic-pharmacology-${String(conceptIndex * 4 + dimensionIndex + 1).padStart(3, "0")}`,
    question: `${prefix} ${concept.name}?`,
    choices: [concept[field], ...distractors(conceptIndex, field)],
    answer: 0,
    rationale: concept.why,
    reviewHref: `#${concept.lesson}`,
  })),
);

// Reviewed scope: fluid-broader-thiazide-safety; generated distractors elsewhere remain exact.
const thiazideReviewedQuestionOverrides = new Map([
  {
    "id": "diuretic-pharmacology-033",
    "question": "Which transporter and nephron site best describe the principal thiazide target?",
    "choices": [
      "The sodium chloride cotransporter, NCC, in the distal convoluted tubule",
      "NKCC2 in the thick ascending limb",
      "ENaC in the collecting duct",
      "The vasopressin V2 receptor in the collecting duct"
    ],
    "answer": 0,
    "rationale": "\"NCC in the distal convoluted tubule\" is correct: NCC is the principal thiazide-sensitive sodium chloride transport target, predominantly in the distal convoluted tubule. \"NKCC2 in the thick ascending limb\" describes the loop target. \"ENaC in the collecting duct\" describes direct potassium-sparing channel blockade. \"The collecting-duct V2 receptor\" describes vasopressin signaling; blocking it produces aquaresis rather than NCC-mediated natriuresis. This segment map is a teaching model, not a claim that human NCC expression is confined to every DCT cell.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-034",
    "question": "A clinician is considering replacing hydrochlorothiazide with chlorthalidone for hypertension. Which selection principle is appropriate?",
    "choices": [
      "Check the exact product, dose, duration, kidney function and blood-pressure response; do not assume equal milligram doses",
      "Use the same milligram dose because both inhibit NCC",
      "Select solely by tablet strength, without reassessing electrolyte risk",
      "Assume shared NCC inhibition guarantees identical duration and clinical evidence"
    ],
    "answer": 0,
    "rationale": "\"Product-specific selection\" is correct: the shared transport target does not establish dose equivalence or identical exposure. \"Equal-milligram substitution\" assumes an unsupported milligram conversion. \"Tablet-strength-only selection\" ignores product and patient factors that determine safety. \"Identical duration and evidence\" confuses a common mechanism with equal duration and evidence. The reviewed hydrochlorothiazide label describes 6-12 hours of diuretic activity, while the reviewed chlorthalidone label describes 48-72 hours; these durations do not establish interchangeable doses.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-035",
    "question": "An adult begins chlorthalidone for hypertension. Which follow-up plan best assesses both response and common metabolic risks?",
    "choices": [
      "Reassess blood pressure, orthostatic symptoms, volume status, kidney function and electrolytes; review glucose and urate when clinically relevant",
      "Recheck blood pressure alone and defer laboratory review until symptoms appear",
      "Measure serum calcium alone because thiazides conserve urinary calcium",
      "Monitor only body weight because weight loss establishes adequate blood-pressure control"
    ],
    "answer": 0,
    "rationale": "\"Combined response and laboratory assessment\" is correct: pressure response must be interpreted with perfusion, volume and laboratory trends, including sodium, potassium and magnesium. \"Blood-pressure-only follow-up\" can miss asymptomatic electrolyte or kidney changes. \"Calcium-only follow-up\" overlooks sodium, potassium, magnesium and other metabolic effects. \"Weight-only follow-up\" treats a volume marker as proof of a pressure outcome. Laboratory timing follows the exact product, patient risk and clinical plan.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-036",
    "question": "A patient with refractory edema already receives furosemide; metolazone is added. Which hazard requires particular surveillance?",
    "choices": [
      "Large or prolonged fluid and electrolyte losses, with hypotension or worsening kidney function",
      "Loss of all diuretic activity because both drugs act at the same transporter",
      "Protection against potassium loss because metolazone is potassium sparing",
      "Equivalent metolazone exposure from any formulation at the same milligram dose"
    ],
    "answer": 0,
    "rationale": "\"Large fluid and electrolyte losses\" is correct: the metolazone label warns that combination with furosemide can produce unusually large or prolonged fluid and electrolyte losses. \"No activity from a shared target\" misidentifies the class targets and predicts the wrong response. \"Potassium-sparing protection\" incorrectly treats metolazone as potassium sparing. \"Equal exposure from all formulations\" ignores the label's warning against interchange between formulations with different bioavailability; the warning does not establish that every historical formulation is currently marketed.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-037",
    "question": "Which urinary calcium pattern commonly distinguishes a thiazide from a loop diuretic?",
    "choices": [
      "Thiazides tend to lower urinary calcium, whereas loop therapy can increase urinary calcium loss",
      "Both classes consistently lower urinary calcium to the same extent",
      "Thiazides increase urinary calcium while loops retain it",
      "Neither class changes urinary calcium handling"
    ],
    "answer": 0,
    "rationale": "\"Lower urinary calcium with thiazides versus possible loop calciuria\" is correct: reduced urinary calcium is a characteristic thiazide effect, contrasting with loop-associated calciuria. \"Equal calcium lowering by both classes\" incorrectly equates the two patterns. \"Increased thiazide calciuria and loop retention\" reverses them. \"No calcium effect\" overlooks a clinically relevant mineral effect. Urinary calcium behavior is distinct from serum calcium and does not by itself prove a stone-prevention benefit.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-038",
    "question": "A patient taking hydrochlorothiazide has reduced urinary calcium but newly elevated serum calcium. Which response is appropriate?",
    "choices": [
      "Assess the medication contribution and other causes of hypercalcemia rather than dismissing the serum result",
      "Dismiss the serum result because low urinary calcium rules out hypercalcemia",
      "Increase hydrochlorothiazide solely to normalize serum calcium",
      "Assume the result proves primary hyperparathyroidism without further evaluation"
    ],
    "answer": 0,
    "rationale": "\"Assessment of medication contribution and other causes\" is correct: thiazides can reduce calcium excretion and produce a small serum calcium rise; marked hypercalcemia warrants evaluation for other causes. \"Exclusion of hypercalcemia from low urinary calcium\" confuses urine loss with serum concentration. \"Thiazide escalation to normalize calcium\" is not a justified response to unexplained hypercalcemia. \"A diagnosis of primary hyperparathyroidism without evaluation\" turns a possible alternative cause into a diagnosis without evaluation.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-039",
    "question": "A thiazide is being considered in a patient with recurrent calcium stones. Which assessment best avoids treating a urinary mechanism as a guaranteed clinical outcome?",
    "choices": [
      "Review serum and urinary calcium when indicated, kidney function, sodium intake, volume status and actual stone recurrence",
      "Use the fall in urinary calcium as proof that no future stones can occur",
      "Follow serum calcium alone and disregard urinary findings and recurrence",
      "Measure urinary sodium alone and use it to establish the cause of every stone"
    ],
    "answer": 0,
    "rationale": "\"Individualized metabolic and recurrence assessment\" is correct: the urinary calcium effect belongs within an individualized stone and metabolic assessment. \"Guaranteed prevention from a urinary result\" mistakes a surrogate physiological effect for guaranteed prevention. \"Serum-calcium-only assessment\" omits relevant urine and clinical outcome information. \"Diagnosis of every stone from urinary sodium\" substitutes one measurement for the broader assessment. This question does not prescribe a stone regimen or establish benefit for every patient.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-040",
    "question": "Which conclusion about calcium during thiazide therapy is unsafe?",
    "choices": [
      "A decrease in urinary calcium guarantees that serum calcium cannot rise",
      "Serum calcium and urinary calcium reflect different parts of calcium balance",
      "An unexplained serum calcium rise should prompt review of the medicine and other causes",
      "Urinary calcium reduction alone does not establish prevention of stone recurrence"
    ],
    "answer": 0,
    "rationale": "\"Guaranteed absence of a serum calcium rise\" is the unsafe conclusion: calcium excretion can fall while serum calcium rises, particularly in susceptible patients. \"Different serum and urinary compartments\" correctly distinguishes the compartments. \"Evaluation of a serum calcium rise\" correctly calls for evaluation instead of a medication-only diagnosis. \"No guaranteed prevention from urinary reduction\" correctly separates a urinary effect from a clinical outcome. The question asks for the unsafe conclusion, not the expected therapeutic action.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-041",
    "question": "An adult develops hypotonic hyponatremia after starting a thiazide. Which explanation is most appropriate?",
    "choices": [
      "Reduced urinary dilution, water intake and patient susceptibility can combine; sodium loss and vasopressin responses may also contribute",
      "Every case is caused solely by extracellular volume depletion",
      "The sodium fall proves a deficiency of dietary salt regardless of water balance",
      "Renal sodium loss always makes urine maximally dilute, so excess water intake cannot contribute"
    ],
    "answer": 0,
    "rationale": "\"Reduced dilution with intake and susceptibility factors\" is correct: thiazide-associated hyponatremia is a water and electrolyte problem with several contributing pathways. \"Volume depletion as the sole cause\" overstates a volume-depletion model; a SIAD-like presentation can occur. \"Dietary salt deficiency as a universal explanation\" ignores water balance, tonicity and other causes. \"Guaranteed maximal dilution during thiazide use\" overlooks the impaired urinary dilution that allows water intake to contribute. Diuretic exposure is a contributing clue, not proof that all alternative causes have been excluded.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-042",
    "question": "A patient recently started a thiazide and now has a seizure with confirmed profound hypotonic hyponatremia. What is the priority?",
    "choices": [
      "Arrange immediate monitored treatment, stop the suspected contributor and control sodium correction according to the clinical protocol",
      "Continue the thiazide and arrange routine laboratory follow-up next month",
      "Apply fluid restriction alone to every patient before evaluating the seizure or volume status",
      "Aim to normalize serum sodium immediately without monitoring its trajectory"
    ],
    "answer": 0,
    "rationale": "\"Immediate monitored care and controlled correction\" is correct: severe neurologic symptoms require urgent monitored care, assessment of contributors and controlled correction. \"Continued thiazide with delayed follow-up\" delays care and continues a potential cause. \"Fluid restriction alone for every cause\" applies a cause-specific strategy indiscriminately and does not address neurologic urgency. \"Immediate normalization without monitoring\" risks harmful overcorrection. This case requires emergency management; mild asymptomatic hyponatremia does not automatically have the same urgency.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-043",
    "question": "A patient taking hydrochlorothiazide has low serum sodium and a raised urine sodium result. Which interpretation is best?",
    "choices": [
      "Assess symptoms, serum tonicity, sodium trajectory, urine studies, medication timing, intake and volume context; diuretics can confound urine sodium",
      "The raised urine sodium proves SIAD regardless of diuretic timing",
      "The presence of a thiazide excludes adrenal, kidney and other causes",
      "A single urine sodium result defines the patient's circulating volume"
    ],
    "answer": 0,
    "rationale": "\"Clinical and medication-context interpretation\" is correct: urine results must be interpreted in their clinical and medication context, preferably with contemporaneous serum measurements. \"SIAD proven by raised urine sodium\" ignores thiazide-induced natriuresis and the exclusion criteria for SIAD. \"Exclusion of other causes by thiazide exposure\" prematurely excludes alternative causes, particularly if hyponatremia persists after withdrawal. \"Volume status proven by one urine sodium result\" overstates the diagnostic value of a single measurement. Severe symptoms require treatment without waiting for complete diagnostic differentiation.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-044",
    "question": "During treatment of thiazide-associated hypotonic hyponatremia, urine output suddenly rises and serum sodium begins increasing faster than expected. Which hazard is the priority to prevent?",
    "choices": [
      "Uncontrolled overcorrection with risk of osmotic demyelination, requiring prompt reassessment and closer monitoring",
      "Immediately replace all of the increased urine output with hypotonic fluid without checking sodium",
      "A guaranteed return to normal sodium without further laboratory checks",
      "Rising urine output proves new sodium wasting and requires rapid sodium normalization"
    ],
    "answer": 0,
    "rationale": "\"Uncontrolled overcorrection and osmotic demyelination risk\" is correct: restoration of water excretion can accelerate sodium correction unexpectedly, so sodium trajectory and urine output require close review. \"Automatic hypotonic replacement without assessment\" substitutes an unmonitored universal replacement rule for prompt clinical reassessment; any measures to control correction follow the monitored protocol. \"Guaranteed normalization without laboratory checks\" treats a potentially dangerous trend as a safety guarantee. \"Sodium wasting diagnosed from urine output alone\" assigns a cause without urine composition and ignores the observed rapid serum sodium rise. The treatment goal is symptom-directed, controlled correction rather than rapid normalization.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-045",
    "question": "Lithium is unchanged, but a thiazide is added. Why can serum lithium rise?",
    "choices": [
      "Diuretic-induced sodium loss can reduce renal lithium clearance",
      "Lower urine volume raises serum lithium without any change in renal lithium clearance",
      "Renal sodium loss reliably increases lithium clearance and lowers exposure",
      "The interaction matters only if the prescribed lithium dose is increased"
    ],
    "answer": 0,
    "rationale": "\"Reduced renal lithium clearance after sodium loss\" is correct: sodium loss can alter renal lithium handling and reduce clearance even when the lithium prescription is unchanged. \"A urine-volume-only concentration effect\" ignores the clearance change and treats urine volume as a complete explanation of exposure. \"Reliably increased lithium clearance\" predicts the opposite of the labeled interaction. \"Risk only after a prescribed dose increase\" overlooks interaction-mediated accumulation. Hydration, kidney function and other interacting medicines also affect risk.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-046",
    "question": "A clinician changes thiazide therapy in an adult receiving lithium. Which management plan is appropriate?",
    "choices": [
      "Coordinate lithium concentrations, clinical toxicity assessment, electrolytes and kidney function, with clinician-guided dose changes when indicated",
      "Leave the monitoring schedule unchanged because the lithium dose has not changed",
      "Automatically increase lithium before checking its concentration or clinical response",
      "Apply the same percentage dose reduction to every patient without reassessment"
    ],
    "answer": 0,
    "rationale": "\"Coordinated concentration, clinical and laboratory monitoring\" is correct: the lithium label calls for monitoring after concurrent medication changes and adjustment according to concentrations and clinical response. \"An unchanged monitoring schedule\" overlooks altered clearance. \"Automatic lithium escalation\" can aggravate toxicity. \"A universal percentage dose reduction\" replaces individualized evaluation with an unsupported universal rule. Starting, changing or stopping the interacting therapy can change exposure.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-047",
    "question": "A patient receiving lithium and a new thiazide reports vomiting, worsening tremor and unsteady gait. Which assessment is most appropriate?",
    "choices": [
      "Urgently assess clinical toxicity, lithium concentration and sample timing, sodium, hydration and kidney function",
      "Exclude toxicity because a previous lithium level was within the therapeutic range",
      "Assess only blood pressure because the thiazide is an antihypertensive",
      "Wait for the next scheduled level before evaluating the new neurologic symptoms"
    ],
    "answer": 0,
    "rationale": "\"Urgent clinical and laboratory toxicity assessment\" is correct: new gastrointestinal and neurologic symptoms require prompt clinical and laboratory assessment. \"Toxicity excluded by a previous therapeutic level\" relies on an old result; susceptible patients may also show toxicity at concentrations considered therapeutic. \"Blood-pressure-only assessment\" overlooks the interaction and symptom pattern. \"Waiting for the next scheduled level\" delays evaluation. A lithium concentration must be interpreted with dose timing and the clinical presentation.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-048",
    "question": "Which hazard can occur after adding a thiazide to a stable lithium prescription?",
    "choices": [
      "Lithium toxicity despite no change in the prescribed lithium dose",
      "Guaranteed protection from toxicity because urinary sodium rises",
      "Lithium toxicity only if the patient deliberately takes extra lithium",
      "Loss of the need to assess hydration and kidney function"
    ],
    "answer": 0,
    "rationale": "\"Toxicity with an unchanged prescription\" is correct: a stable prescription does not guarantee stable exposure when renal clearance changes. \"Protection from toxicity through urinary sodium loss\" misreads sodium loss as protective. \"Toxicity only after deliberate extra dosing\" ignores interaction-mediated accumulation. \"No further hydration or kidney assessment\" removes relevant determinants of lithium handling. Monitor clinical symptoms as well as concentrations and reconcile other contributors, including NSAIDs.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-049",
    "question": "Which statement best explains why a thiazide may reduce urine volume in nephrogenic diabetes insipidus?",
    "choices": [
      "A physiological model involves mild volume contraction and increased proximal sodium and water reclamation, reducing downstream delivery; this is not the only proposed mechanism",
      "The drug reliably restores normal collecting-duct responsiveness to vasopressin in every patient",
      "Blocking distal sodium reabsorption necessarily increases urine volume, so a reduction must be unrelated to therapy",
      "Its antidiuretic effect has been established solely by the usual NCC site of action"
    ],
    "answer": 0,
    "rationale": "\"Proximal reclamation as one physiological model\" is correct: proximal reclamation provides a useful explanation of paradoxical antidiuresis, supported by a small human mechanistic study. \"Universal restoration of vasopressin responsiveness\" claims universal correction of the underlying defect. \"Urine reduction dismissed from natriuresis alone\" overlooks compensatory sodium and water reclamation and the observed paradoxical effect. \"NCC localization as exclusive mechanistic proof\" makes NCC localization proof of an exclusive mechanism. Experimental cell and mouse studies also suggest NCC-independent actions; they do not establish a patient outcome or regimen.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-050",
    "question": "An adult with suspected lithium-associated nephrogenic diabetes insipidus has polyuria. Which management principle is appropriate?",
    "choices": [
      "Confirm the cause and coordinate hydration, lithium exposure, kidney function and electrolyte assessment before selecting therapy",
      "Prescribe a thiazide and deliberately restrict access to water in every patient",
      "Treat the condition as central vasopressin deficiency solely because polyuria is present",
      "Assume lowering urine volume alone establishes safe treatment"
    ],
    "answer": 0,
    "rationale": "\"Cause-specific assessment and coordinated care\" is correct: nephrogenic and central diabetes insipidus require different cause-specific assessments. \"Universal water restriction with thiazide use\" can aggravate dehydration and lithium retention. \"Central deficiency diagnosed from polyuria\" diagnoses hormone deficiency from a nonspecific symptom. \"Safe treatment proven by urine reduction alone\" ignores sodium, volume and kidney consequences. The lithium label allows consideration of amiloride for lithium-induced nephrogenic diabetes insipidus; treatment still needs individualized potassium and kidney monitoring.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-051",
    "question": "A thiazide is used within a specialist plan for nephrogenic diabetes insipidus. Which follow-up best assesses benefit and harm?",
    "choices": [
      "Trend urine volume and thirst with sodium, potassium, hydration, pressure, weight and kidney function; review lithium exposure if relevant",
      "Follow urine volume alone and accept any reduction as success",
      "Check blood pressure alone because sodium cannot change during treatment",
      "Stop laboratory review once the first urine-volume measurement improves"
    ],
    "answer": 0,
    "rationale": "\"Combined benefit and safety monitoring\" is correct: urine reduction must be balanced against dehydration, electrolyte loss and impaired kidney function. \"Urine-volume-only assessment\" can conceal excessive contraction or persistent hypernatremia. \"Blood-pressure-only assessment\" falsely excludes electrolyte effects. \"Ending laboratory review after initial improvement\" treats an early response as permanent safety. The underlying cause and concurrent lithium exposure remain part of the follow-up.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-052",
    "question": "Urine volume falls during thiazide treatment for nephrogenic diabetes insipidus, but the patient develops dizziness, worsening hypernatremia and rising kidney indices. Which interpretation is most appropriate?",
    "choices": [
      "Excessive contraction or inadequate water replacement may be causing harm; reassess the regimen and hydration promptly",
      "The fall in urine volume proves that all treatment goals have been achieved",
      "Worsening hypernatremia is an expected marker of improved renal water conservation and can be accepted",
      "Kidney and electrolyte changes can be ignored because thiazides are antidiuretic in this setting"
    ],
    "answer": 0,
    "rationale": "\"Prompt reassessment of contraction and water replacement\" is correct: a lower urine volume can coexist with inadequate water balance, hypotension or kidney dysfunction. \"All goals achieved through urine reduction\" substitutes one response marker for overall safety. \"Hypernatremia accepted as a benefit marker\" misreads worsening water balance as an acceptable benefit. \"Ignoring kidney and electrolyte changes\" ignores known treatment risks. Cause-specific care must preserve hydration and monitor sodium, potassium and kidney function.",
    "reviewHref": "#thiazide-like-diuretics"
  }
].map((question) => [question.id, question]));
for (const question of diureticPharmacologyQuestionBank) {
  const reviewed = thiazideReviewedQuestionOverrides.get(question.id);
  if (reviewed) Object.assign(question, reviewed);
}

diureticPharmacologyQuestionBank.push(...[
  {
    "id": "diuretic-pharmacology-117",
    "question": "An adult has an order for chlorothiazide 1,000 mg orally. The suspension bottle states 250 mg per 5 mL. What volume supplies the ordered dose?",
    "choices": [
      "20 mL",
      "2 mL",
      "5 mL",
      "200 mL"
    ],
    "answer": 0,
    "rationale": "\"20 mL\" is correct: 250 mg / 5 mL = 50 mg/mL; 1,000 mg / 50 mg/mL = 20 mL. \"2 mL\" supplies only 100 mg. \"5 mL\" supplies 250 mg. \"200 mL\" supplies 10,000 mg. This calculation applies to the stated oral suspension concentration; it does not specify an intravenous preparation or establish that the ordered regimen suits every patient.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-118",
    "question": "An adult takes indapamide 1.25 mg each morning for hypertension. After four weeks, the response is insufficient and the clinician has reassessed safety. Which next dose is described by the referenced label?",
    "choices": [
      "2.5 mg once daily",
      "2.5 mg twice daily",
      "Increase directly to 5 mg once daily without first trying 2.5 mg",
      "2.5 mg every other day because its half-life requires alternate-day dosing"
    ],
    "answer": 0,
    "rationale": "\"2.5 mg once daily\" is the labeled next hypertension dose after four weeks of insufficient response to 1.25 mg. \"2.5 mg twice daily\" doubles the described next daily exposure and changes the schedule. \"Immediate escalation to 5 mg daily\" skips the staged titration. \"Alternate-day dosing inferred from half-life\" substitutes a pharmacokinetic assumption for the labeled once-daily schedule. A further increase to 5 mg once daily is considered after another four weeks of insufficient response, with another antihypertensive considered; clinical response and electrolyte safety remain part of the decision.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-119",
    "question": "Several days after starting hydrochlorothiazide, a patient develops sudden ocular pain and blurred vision. What is the appropriate response?",
    "choices": [
      "Promptly assess possible drug-induced angle closure and rapidly discontinue the suspected hydrochlorothiazide",
      "Manage the symptoms as a routine dose-related adverse effect with dose reduction and delayed review",
      "Attribute the symptoms to orthostatic hypotension and recommend hydration without eye assessment",
      "Treat the symptoms as proof of uncontrolled blood pressure and increase the thiazide"
    ],
    "answer": 0,
    "rationale": "\"Prompt assessment and rapid discontinuation\" is correct: the hydrochlorothiazide label describes acute myopia and secondary angle-closure glaucoma, which may occur within hours to weeks and can threaten vision. \"Routine dose reduction and delayed review\" delays evaluation of a potentially urgent eye disorder. \"Orthostatic symptoms assumed without eye assessment\" assigns a cause without assessing the new ocular pain and visual change. \"Thiazide escalation for presumed pressure symptoms\" assumes a diagnosis and continues a possible cause. Prompt eye care may be needed if intraocular pressure remains uncontrolled.",
    "reviewHref": "#thiazide-like-diuretics"
  },
  {
    "id": "diuretic-pharmacology-120",
    "question": "A new hydrochlorothiazide/triamterene prescription is received for a patient taking dofetilide. Which interpretation is correct?",
    "choices": [
      "The dofetilide label contraindicates the hydrochlorothiazide combination; contact the prescriber to resolve it",
      "Triamterene makes the combination acceptable without further review",
      "A normal potassium result removes the named-drug contraindication",
      "The interaction is only a reduction in blood-pressure response"
    ],
    "answer": 0,
    "rationale": "\"A contraindicated hydrochlorothiazide combination\" is correct: hydrochlorothiazide, alone or with triamterene, can increase dofetilide exposure and QT prolongation and is specifically contraindicated in the dofetilide label. \"Protection through triamterene\" ignores the explicitly named combination. \"Removal of the contraindication by normal potassium\" confuses laboratory risk reduction with removal of a pharmacokinetic interaction. \"Only reduced blood-pressure response\" misses the potentially serious rhythm hazard. Broader potassium- and magnesium-depleting diuretic risks still require review when alternatives are considered.",
    "reviewHref": "#thiazide-like-diuretics"
  }
]);

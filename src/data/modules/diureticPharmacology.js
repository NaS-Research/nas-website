import { diureticPharmacologyQuestionBank } from "@/data/questionBanks/diureticPharmacology";

export const diureticPharmacologyModule = {
  slug: "diuretic-pharmacology",
  number: "18",
  title: "Diuretic Pharmacology",
  source: "Renal transport physiology, natriuresis, aquaresis, volume assessment, and electrolyte safety",
  description: "Map each diuretic to its nephron target, delivery pathway, transport capacity, and compensatory response, then select and monitor therapy by congestion, blood pressure, kidney function, electrolytes, acid-base status, and patient goals.",
  topics: ["Nephron transport", "Loop diuretics", "Thiazide-like diuretics", "Potassium-sparing diuretics", "Specialized agents", "Resistance and monitoring"],
  outcomes: [
    "Predict urine and serum effects from the nephron site and transporter inhibited.",
    "Use loop diuretics by objective congestion response while protecting perfusion, electrolytes, and hearing.",
    "Differentiate thiazide-like blood pressure therapy from loop-driven high-capacity natriuresis.",
    "Compare mineralocorticoid receptor antagonists with epithelial sodium channel blockers.",
    "Distinguish natriuresis, osmotic diuresis, bicarbonaturia, and electrolyte-free water excretion.",
  ],
  submodules: [
    {
      slug: "nephron-transport-and-diuresis",
      title: "Nephron Transport and Diuretic Response",
      summary: "A diuretic can work only after reaching its target. Filtered load, tubular secretion, protein binding, renal perfusion, transporter capacity, and downstream compensation shape response.",
      concepts: ["Segmental sodium handling", "Tubular secretion", "Distal sodium delivery", "Volume and neurohormonal compensation"],
      visual: "diuretic-nephron-map",
      application: "For every agent, identify the nephron site, luminal or intracellular target, expected sodium delivery downstream, potassium and acid-base response, and monitoring endpoint.",
      lesson: [
        { heading: "Use segment capacity", body: "The proximal tubule reabsorbs a large filtered sodium fraction, the thick ascending limb has high transport capacity, and later segments fine-tune sodium balance. Blocking a high-capacity segment usually creates greater natriuresis, while downstream segments can reclaim part of the delivered sodium." },
        { heading: "Deliver drug to the lumen", body: "Most loop and thiazide diuretics are highly protein bound and reach luminal transporters through proximal tubular organic anion secretion rather than unrestricted filtration. Reduced renal perfusion, competing organic acids, kidney disease, and impaired absorption can reduce target-site exposure." },
        { heading: "Predict potassium and acid-base effects", body: "Greater sodium delivery to the collecting duct supports epithelial sodium channel entry and creates electrical and hormonal conditions for potassium and hydrogen secretion. Loop and thiazide therapy can therefore produce hypokalemic metabolic alkalosis, especially with volume contraction and aldosterone activation." },
        { heading: "Separate weight loss from safe decongestion", body: "A lower scale value may reflect effective removal of excess extracellular fluid or harmful loss of effective circulating volume. Interpret weight with symptoms, edema, jugular venous pressure, lung findings, blood pressure, perfusion, urine response, kidney function, and electrolyte trend." },
      ],
      keyPoints: ["Nephron site predicts capacity.", "Many diuretics require tubular secretion.", "Distal sodium delivery drives potassium loss.", "Decongestion and intravascular depletion are not synonyms."],
      check: { question: "Why can a highly protein-bound loop diuretic still reach its luminal transporter?", choices: ["Proximal tubular organic anion secretion delivers it into the lumen", "It diffuses freely through every glomerular pore while bound to albumin", "It is synthesized inside the thick ascending limb", "The collecting duct pumps it backward"], answer: 0, rationale: "Active proximal tubular secretion is a major route by which protein-bound loop diuretics reach luminal NKCC2.", reviewHref: "#nephron-transport-and-diuresis" },
    },
    {
      slug: "loop-diuretics",
      title: "Loop Diuretics",
      summary: "Furosemide, bumetanide, torsemide, and ethacrynic acid inhibit NKCC2 in the thick ascending limb, producing high-capacity natriuresis and disrupting the medullary concentration gradient.",
      concepts: ["NKCC2 inhibition", "Loop agent differences", "Electrolyte and mineral loss", "Ototoxicity and acute response"],
      visual: "diuretic-loop",
      application: "Define the congestion endpoint, administer a product-specific dose and route, then measure early urine response rather than waiting for tomorrow's weight alone.",
      lesson: [
        { heading: "Block NKCC2", body: "Loop diuretics inhibit the sodium potassium two-chloride cotransporter in the thick ascending limb. Sodium chloride reabsorption and the lumen-positive voltage fall, increasing downstream sodium delivery and urinary potassium, calcium, and magnesium loss." },
        { heading: "Distinguish molecules and formulations", body: "Furosemide oral absorption can be variable, while bumetanide and torsemide have different potency and exposure profiles. Ethacrynic acid lacks the common sulfonamide group but still has major toxicity concerns. Dose conversion is approximate and must be tied to response." },
        { heading: "Monitor volume and electrolyte cost", body: "Excessive diuresis can cause hypotension, reduced perfusion, rising kidney indices, hyponatremia, hypokalemia, hypomagnesemia, and metabolic alkalosis. Digoxin, corticosteroids, laxatives, and other electrolyte-altering therapies can increase consequences." },
        { heading: "Protect hearing and tissue", body: "Loop-associated ototoxicity is more likely with rapid parenteral administration, high exposure, severe kidney impairment, hypoproteinemia, or another ototoxic agent such as an aminoglycoside. Follow the exact product rate, concentration, access, and monitoring requirements." },
      ],
      keyPoints: ["Loop diuretics block NKCC2.", "Calcium and magnesium excretion can rise.", "Dose equivalence is approximate.", "Ototoxicity risk rises with exposure rate and interacting agents."],
      check: { question: "Which mineral pattern is most directly expected after effective NKCC2 inhibition?", choices: ["Increased urinary calcium and magnesium loss", "Complete calcium retention with no magnesium effect", "Permanent phosphate trapping in bone", "No change in any divalent cation"], answer: 0, rationale: "Loss of the lumen-positive voltage in the thick ascending limb reduces paracellular calcium and magnesium reabsorption.", reviewHref: "#loop-diuretics" },
    },
    {
      slug: "thiazide-like-diuretics",
      title: "Thiazide and Thiazide-Like Diuretics",
      summary: "Hydrochlorothiazide, chlorthalidone, indapamide, and metolazone inhibit NCC in the distal convoluted tubule, with meaningful differences in duration, evidence, and use during reduced kidney function.",
      concepts: ["NCC inhibition", "Calcium retention", "Hyponatremia and hypokalemia", "Nephrogenic diabetes insipidus"],
      visual: "diuretic-thiazide",
      application: "Select the exact product by blood pressure, edema strategy, duration, kidney function, and evidence, then monitor sodium and potassium early enough to detect clinically important depletion.",
      lesson: [
        { heading: "Block NCC", body: "Thiazide and thiazide-like drugs inhibit the sodium chloride cotransporter in the distal convoluted tubule. Their natriuretic ceiling is lower than loop therapy, but longer action and vascular adaptation make selected products useful for chronic blood pressure control." },
        { heading: "Reverse the loop calcium pattern", body: "NCC inhibition favors distal calcium reabsorption and can reduce urinary calcium. This differs from loop diuretics. The effect can be useful in selected calcium-stone contexts but can also contribute to hypercalcemia in susceptible patients." },
        { heading: "Recognize sodium and potassium risk", body: "Hyponatremia may be severe, especially in older adults, patients with low solute intake, small body size, high water intake, or interacting medicines. Hypokalemia and metabolic alkalosis reflect distal sodium delivery and aldosterone-supported secretion." },
        { heading: "Audit urate, glucose, lithium, and NSAIDs", body: "Thiazide-like therapy can raise uric acid and affect glucose tolerance. Sodium depletion can reduce lithium clearance and cause toxicity. Nonsteroidal anti-inflammatory drugs can blunt the renal response and worsen kidney risk in susceptible patients." },
        { heading: "Explain paradoxical antidiuresis", body: "In selected patients with nephrogenic diabetes insipidus, a thiazide can reduce urine volume rather than increase it. Mild extracellular volume contraction increases proximal sodium and water reclamation, leaving less fluid for delivery to the collecting duct. Treatment still requires cause-specific care, an appropriate low-solute strategy, and close monitoring of sodium, volume, potassium, and kidney function." },
      ],
      keyPoints: ["Thiazide-like agents block NCC.", "Urinary calcium generally falls.", "Hyponatremia can be profound.", "Paradoxical antidiuresis can reduce urine volume in nephrogenic diabetes insipidus."],
      check: { question: "Which urinary calcium effect commonly distinguishes thiazide-like therapy from loop therapy?", choices: ["Thiazide-like therapy tends to reduce urinary calcium", "Thiazide-like therapy always causes massive calciuria", "Both classes have no calcium effect", "Thiazide-like therapy blocks intestinal calcium only"], answer: 0, rationale: "NCC inhibition enhances distal calcium reabsorption and often lowers urinary calcium excretion.", reviewHref: "#thiazide-like-diuretics" },
    },
    {
      slug: "potassium-sparing-diuretics",
      title: "Potassium-Sparing Diuretics",
      summary: "Mineralocorticoid receptor antagonists reduce aldosterone signaling, while amiloride and triamterene block ENaC directly. Both reduce potassium and hydrogen secretion but differ in onset and nonrenal pharmacology.",
      concepts: ["Spironolactone and eplerenone", "Amiloride and triamterene", "Hyperkalemia and acidosis", "Endocrine and interaction effects"],
      visual: "diuretic-potassium",
      application: "Before initiation or titration, calculate the total potassium-raising burden and define when kidney function and potassium will be rechecked.",
      lesson: [
        { heading: "Block aldosterone signaling", body: "Spironolactone and eplerenone antagonize intracellular mineralocorticoid receptors, reducing ENaC and sodium potassium ATPase expression over time. Their clinical value can extend beyond weak natriuresis because mineralocorticoid signaling affects cardiovascular remodeling." },
        { heading: "Block ENaC directly", body: "Amiloride and triamterene act at the luminal epithelial sodium channel in the collecting duct. Amiloride has specific value when excessive ENaC activity is central, while product and indication determine its broader use. Direct channel block acts without waiting for receptor-mediated gene expression." },
        { heading: "Reduce lithium entry with amiloride", body: "Chronic lithium exposure can impair collecting-duct water conservation and produce nephrogenic diabetes insipidus. Amiloride blocks epithelial sodium channels through which lithium can enter principal cells, so it may be considered when lithium-associated polyuria is clinically important. Management must also address hydration, sodium balance, lithium exposure, kidney function, and potassium risk." },
        { heading: "Protect against hyperkalemia", body: "Reduced sodium entry lowers the electrical drive for potassium and hydrogen secretion. Hyperkalemia and non-anion-gap metabolic acidosis become more likely with kidney impairment, diabetes, high potassium intake, supplements, salt substitutes, RAAS blockers, or another potassium-sparing agent." },
        { heading: "Distinguish endocrine and metabolic profiles", body: "Spironolactone can interact with androgen and progesterone pathways, causing gynecomastia, breast symptoms, sexual effects, or menstrual changes. Eplerenone is more receptor selective but has important CYP3A interaction constraints. Monitor by the exact product." },
      ],
      keyPoints: ["Mineralocorticoid antagonists act through gene regulation.", "ENaC blockers act directly in the lumen.", "Hyperkalemia risk is regimen wide.", "Spironolactone and eplerenone are not interchangeable."],
      check: { question: "Why can potassium rise after ENaC blockade?", choices: ["Reduced luminal sodium entry lowers the electrical drive for potassium secretion", "ENaC directly pumps potassium into urine", "The drug creates new glomeruli", "Potassium is converted into sodium"], answer: 0, rationale: "Collecting-duct sodium entry helps create the lumen-negative potential that supports potassium secretion.", reviewHref: "#potassium-sparing-diuretics" },
    },
    {
      slug: "specialized-diuretic-agents",
      title: "Carbonic Anhydrase, Osmotic, Aquaretic, and Proximal Agents",
      summary: "Acetazolamide, mannitol, vasopressin antagonists, and SGLT2 inhibitors alter different solutes or water pathways and should not be treated as interchangeable volume drugs.",
      concepts: ["Acetazolamide", "Mannitol", "Vasopressin V2 antagonism", "SGLT2 inhibition"],
      visual: "diuretic-other",
      application: "Name what enters the urine: sodium, bicarbonate, glucose, an administered osmole, or electrolyte-free water, then predict the serum consequence.",
      lesson: [
        { heading: "Use acetazolamide to produce bicarbonaturia", body: "Carbonic anhydrase inhibition reduces proximal bicarbonate reclamation and can produce alkaline urine with hyperchloremic metabolic acidosis, hypokalemia, and reduced effectiveness after bicarbonate stores fall. Labeled uses include prevention or improvement of symptoms associated with acute mountain sickness, not motion sickness. Cirrhosis is a contraindication because impaired ammonium handling can precipitate hepatic encephalopathy." },
        { heading: "Respect mannitol compartment shifts", body: "Mannitol is filtered and poorly reabsorbed, increasing tubular fluid osmolality. Before excretion, intravenous osmotic expansion can worsen pulmonary congestion or hyponatremia in susceptible patients. Later water loss can produce hypernatremia and hypovolemia if replacement is inadequate." },
        { heading: "Distinguish aquaresis from natriuresis", body: "Vasopressin V2 antagonism reduces collecting-duct water permeability and increases electrolyte-free water excretion. For SAMSCA, initiation and reinitiation occur in a hospital with close sodium monitoring. Avoid fluid restriction during the first 24 hours, allow access to water in response to thirst, and limit treatment to 30 days because of liver injury risk. It is not the treatment for hyponatremia that requires urgent sodium correction." },
        { heading: "Place SGLT2 inhibition in a broader outcomes model", body: "SGLT2 inhibitors reduce proximal glucose and sodium reabsorption and produce modest osmotic and natriuretic effects. Their cardiovascular and kidney benefits cannot be explained as simple diuresis alone. Volume status, genital infections, ketoacidosis risk, kidney function, and peri-procedure holding plans remain important." },
      ],
      keyPoints: ["Acetazolamide causes bicarbonate loss.", "Mannitol expands extracellular volume before excretion.", "V2 antagonists produce aquaresis.", "SGLT2 outcomes exceed their diuretic effect."],
      check: { question: "What acid-base pattern commonly follows sustained acetazolamide therapy?", choices: ["Hyperchloremic metabolic acidosis", "Persistent respiratory alkalosis only", "High-anion-gap acidosis from lactate in every patient", "Metabolic alkalosis from bicarbonate retention"], answer: 0, rationale: "Proximal bicarbonate loss lowers serum bicarbonate and produces a non-anion-gap, hyperchloremic metabolic acidosis.", reviewHref: "#specialized-diuretic-agents" },
    },
    {
      slug: "diuretic-resistance-and-monitoring",
      title: "Clinical Selection, Resistance, and Monitoring",
      summary: "A poor response can reflect inadequate delivery, impaired absorption, reduced renal perfusion, low target-site secretion, excess sodium intake, post-diuretic retention, or nephron adaptation.",
      concepts: ["Objective response", "Diuretic resistance", "Sequential nephron blockade", "Monitoring and deprescribing"],
      visual: "diuretic-integration",
      application: "Before adding another drug, verify congestion, adherence, sodium exposure, dose timing, route, early urine response, perfusion, kidney function, and interacting medicines.",
      lesson: [
        { heading: "Measure early response", body: "Urine output and urinary sodium after dosing can provide earlier evidence of natriuretic response than next-day weight. Pair them with symptoms, physical examination, fluid balance, pressure, perfusion, and the clinical goal. No isolated marker defines successful decongestion." },
        { heading: "Reconstruct resistance", body: "Edema can impair oral absorption. Kidney disease can reduce tubular secretion and increase competing organic acids. High sodium intake and short drug exposure can cause post-diuretic sodium retention. Chronic distal nephron adaptation can reclaim more sodium after loop blockade." },
        { heading: "Use sequential blockade deliberately", body: "Adding a thiazide-like agent to loop therapy can block distal sodium recovery and produce powerful natriuresis. It can also cause severe hyponatremia, hypokalemia, hypomagnesemia, alkalosis, hypotension, and kidney dysfunction. Timing and laboratory surveillance must follow protocol." },
        { heading: "Reassess the maintenance need", body: "After congestion resolves or the precipitating condition changes, the required diuretic dose may fall. Continue outcome-directed therapies for their validated indications, but avoid maintaining a volume-removal dose solely because it was once needed. Adjust through clinician-guided follow-up." },
      ],
      keyPoints: ["Measure response, not dose alone.", "Resistance has delivery and adaptation causes.", "Sequential blockade has high electrolyte risk.", "Maintenance dose should follow current volume status."],
      check: { question: "What should be verified before labeling a patient loop-diuretic resistant?", choices: ["Congestion, adherence, sodium exposure, route, dose timing, urine response, and kidney perfusion", "Only the tablet color", "Only yesterday's body weight", "Whether the patient owns a blood-pressure cuff"], answer: 0, rationale: "Apparent resistance can arise from diagnosis, delivery, intake, perfusion, timing, or measurement problems.", reviewHref: "#diuretic-resistance-and-monitoring" },
    },
  ],
  references: [
    { label: "DailyMed. Furosemide tablets", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e9be5c3b-4b18-7ad2-e053-2995a90a4a8b" },
    { label: "DailyMed. Chlorthalidone tablets", href: "https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=f46fd743-3661-41b7-b12d-30d96692f0ee&type=pdf" },
    { label: "DailyMed. Spironolactone tablets", href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ce792c44-421d-4274-a333-01e2297ee0a3" },
    { label: "DailyMed. Acetazolamide tablets", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=71f1fbbb-428e-4bf7-bc20-2946c1079bd3" },
    { label: "DailyMed. Mannitol injection", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8ad3145e-00e7-4412-b9a5-06f00f264f30" },
    { label: "DailyMed. Lithium oral solution", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ff9baf45-830f-4a8a-8986-5caeaa1b38cf" },
    { label: "DailyMed. SAMSCA tablets", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5526617c-c7b9-4556-886d-729bbabbc566" },
  ],
  questionBank: diureticPharmacologyQuestionBank,
};

// Reviewed scope: fluid-broader-thiazide-safety; stable lesson identity retained.
Object.assign(diureticPharmacologyModule.submodules.find((lesson) => lesson.slug === "thiazide-like-diuretics"), {
  "summary": "Thiazide and thiazide-like drugs share a principal NCC target in the distal convoluted tubule. Product duration, formulation, kidney response and electrolyte risk still require separate assessment.",
  "application": "Choose the exact product for the blood-pressure or edema goal. Assess sodium, potassium, magnesium, kidney function, volume and interacting medicines; treat sodium abnormalities according to symptoms, cause and trajectory.",
  "lesson": [
    {
      "heading": "Map the transport target",
      "body": "The principal thiazide-sensitive sodium chloride cotransporter, NCC, is predominantly expressed in the distal convoluted tubule. Blocking sodium chloride reclamation increases downstream sodium delivery. This segment map distinguishes NCC from the loop target NKCC2 and collecting-duct ENaC. It is a simplified physiological map: human expression can extend into the connecting tubule."
    },
    {
      "heading": "Distinguish the products",
      "body": "Chlorothiazide, hydrochlorothiazide, chlorthalidone, indapamide and metolazone belong in a common pharmacological discussion, but they are not interchangeable milligram for milligram. The reviewed hydrochlorothiazide label describes 6-12 hours of diuretic activity, chlorthalidone 48-72 hours, and metolazone 24 hours or more. Indapamide's approximately 14-hour whole-blood half-life is a different measurement, not a directly comparable duration of diuresis. Select by the exact product, indication, clinical response and monitoring plan; the hydrochlorothiazide label states that its antihypertensive mechanism is unknown."
    },
    {
      "heading": "Read adult doses by product and indication",
      "body": "The book's adult hypertension overview includes hydrochlorothiazide 12.5-50 mg/day and chlorthalidone 12.5-25 mg/day. The referenced product labels describe hydrochlorothiazide starting at 25 mg daily, with titration to 50 mg; chlorthalidone starting at 25 mg daily, with lower maintenance doses possible and escalation to 50 or 100 mg if needed; indapamide starting at 1.25 mg each morning; metolazone 2.5-5 mg once daily; and oral chlorothiazide 500-1,000 mg daily in one or two doses, with up to 2,000 mg/day in divided doses rarely required for hypertension. These are product-label examples, not equivalent doses or a universal starting regimen. Indapamide may increase to 2.5 mg after four weeks of insufficient response, then to 5 mg after another four weeks, with another antihypertensive considered. Edema schedules differ: the metolazone label lists 5-20 mg once daily, while indapamide starts at 2.5 mg each morning and may increase to 5 mg after one week. Choose the lowest effective dose using the exact indication, formulation, response and laboratory findings; higher doses can increase electrolyte harm without proportional benefit."
    },
    {
      "heading": "Match chlorothiazide formulation and route",
      "body": "Chlorothiazide has oral tablet and suspension formulations and a separately labeled sodium salt for intravenous use. The referenced oral suspension contains 250 mg per 5 mL: 250 mg / 5 mL = 50 mg/mL, so an ordered 1,000 mg oral dose requires 1,000 mg / 50 mg/mL = 20 mL. Confirm the actual bottle concentration and oral route before measuring. The intravenous label reserves use for patients unable to take oral medication or for emergency situations; it describes slow intravenous injection or infusion, not intramuscular or subcutaneous administration, and requires avoidance of extravasation. Its usual adult dose is 500 mg to 1 g once or twice daily. Oral concentration calculations do not determine intravenous preparation, compatibility or administration rate; follow that exact injectable product label."
    },
    {
      "heading": "Account for kidney function and formulation",
      "body": "Reduced kidney function can alter both response and toxicity; do not treat one renal cutoff as proof that every thiazide-like product is ineffective. The reviewed metolazone label describes possible diuresis even at very low glomerular filtration rates, together with renal impairment, azotemia and accumulation precautions. It also warns against equal-dose interchange between formulations with different bioavailability. This warning does not establish current availability of a historical brand. Adding metolazone to furosemide can produce unusually large or prolonged fluid and electrolyte losses."
    },
    {
      "heading": "Separate urine calcium from clinical benefit",
      "body": "Thiazides tend to reduce urinary calcium, contrasting with loop-associated urinary calcium loss. Increased calcium reclamation is a physiological explanation, not a guarantee of stone prevention or of a normal serum calcium concentration. Consider the effect within the patient's stone, sodium intake, kidney function, volume and calcium context. A serum calcium rise warrants evaluation of medication contribution and other causes; marked hypercalcemia should not be attributed to the drug without assessment."
    },
    {
      "heading": "Recognize the electrolyte cost",
      "body": "Hyponatremia and hypokalemia can be clinically important or severe. Increased downstream sodium delivery and volume-related responses favor potassium and hydrogen secretion, contributing to hypokalemic alkalosis. Magnesium loss can also occur. Product labels call for electrolyte measurement and clinical review of thirst, weakness, cramps, dizziness, hypotension and other imbalance symptoms. Severe hyponatremia with hypokalemia has been reported with indapamide, particularly in older women; a selected trial's absence of a severe event does not establish absence of risk. Potassium-rich foods, supplements or a potassium-sparing combination may be considered within an individualized plan, but do not guarantee prevention of hypokalemia. Use measured electrolyte needs, kidney function and the complete regimen to guide correction."
    },
    {
      "heading": "Check contraindications and organ vulnerability",
      "body": "The product labels list anuria and known hypersensitivity contraindications; assess the exact drug and documented reaction rather than treating a vague allergy entry as a complete clinical assessment. The metolazone label also contraindicates hepatic coma or precoma. Severe kidney impairment, progressive azotemia and hepatic disease require particular caution: changes in volume and electrolytes can worsen kidney function or precipitate hepatic encephalopathy. Thiazide labels describe possible activation or exacerbation of systemic lupus erythematosus. Other antihypertensives can add to the pressure effect, and alcohol or sedating drugs can worsen orthostatic symptoms. Monitor pressure, symptoms, weight or intake/output when relevant, kidney function and electrolytes; counsel about appropriate dose timing to limit disruptive nocturia."
    },
    {
      "heading": "Recognize eye and skin warning signs",
      "body": "Hydrochlorothiazide can cause acute transient myopia and secondary angle-closure glaucoma. New ocular pain or a sudden decline in vision after initiation requires prompt evaluation and rapid discontinuation of the suspected hydrochlorothiazide; untreated angle closure can cause permanent visual loss. The indapamide label also describes acute angle-closure glaucoma and choroidal effusion. Photosensitivity and rash are reported adverse effects. The hydrochlorothiazide label describes an association with non-melanoma skin cancer and calls for sun protection and regular skin screening; this does not establish that every exposed person will develop cancer or that every thiazide has the same evidence. Review tolerability, including dizziness and sexual adverse effects, alongside efficacy."
    },
    {
      "heading": "Evaluate thiazide-associated hyponatremia",
      "body": "Reduced urinary dilution, water intake, solute intake and individual susceptibility can combine with sodium loss and vasopressin responses. The patient may be volume depleted or have a SIAD-like presentation. Assess neurologic symptoms, sodium trajectory and duration, serum tonicity, contemporaneous urine studies, medication timing, intake and volume context. A raised urine sodium during diuretic therapy does not prove SIAD or reliably define volume status. Persistent hyponatremia after withdrawal requires reconsideration of other causes."
    },
    {
      "heading": "Match sodium care to urgency and cause",
      "body": "Stop the suspected contributing drug and reassess the treatment need. Severe neurologic symptoms require immediate monitored care and controlled correction according to the clinical protocol. Mild asymptomatic hyponatremia does not automatically have the same urgency. Fluid restriction is not the treatment for every cause: an SIAD-like water excess and true circulating-volume depletion require different approaches. Follow sodium trajectory and urine output because restoration of water excretion can cause unexpectedly rapid correction and osmotic demyelination risk. This lesson supplies no universal saline dose or numerical correction ceiling."
    },
    {
      "heading": "Review metabolic effects and interactions",
      "body": "Thiazide-like therapy can increase urate, precipitate gout and alter glucose tolerance. Review these effects with the patient's symptoms and metabolic context. Cholesterol and triglyceride increases are also described in thiazide labeling; assess the individual lipid trend rather than assuming a change in every patient. Diuretic-induced sodium loss can reduce lithium clearance; toxicity can develop despite an unchanged lithium prescription. Coordinate lithium concentrations, dose timing, clinical toxicity assessment, sodium, hydration and kidney function when the diuretic is started, changed or stopped. Dose adjustments follow concentrations and clinical response. NSAIDs may blunt the diuretic or antihypertensive response in some patients and add kidney risk; reconcile nonprescription use and monitor the response rather than treating every combination as an automatic prohibition."
    },
    {
      "heading": "Identify the exact dofetilide interaction",
      "body": "The dofetilide label specifically contraindicates hydrochlorothiazide, alone or in combinations such as hydrochlorothiazide/triamterene, because dofetilide exposure and QT prolongation can increase. Do not dispense that combination on the assumption that electrolyte monitoring alone removes the contraindication. This named-drug contraindication is different from the broader warning that potassium-depleting diuretics can cause hypokalemia or hypomagnesemia and increase torsades risk. Other diuretic choices still require interaction review and potassium, magnesium and kidney assessment; the specific hydrochlorothiazide prohibition does not prove another product safe."
    },
    {
      "heading": "Explain paradoxical antidiuresis without overstating the model",
      "body": "In selected patients with nephrogenic diabetes insipidus, a thiazide may reduce urine volume. A physiological model involves mild extracellular volume contraction, increased proximal sodium and water reclamation, and less downstream fluid delivery. A small human mechanistic study supports proximal reclamation; cell and mouse experiments suggest additional NCC-independent actions. These sources do not establish an exclusive mechanism or a universal patient regimen. A reduced urine volume does not prove restoration of vasopressin sensitivity or establish safe water balance. Confirm the cause, distinguish nephrogenic from central disease, and individualize hydration, solute strategy and monitoring of sodium, potassium, pressure, volume and kidney function. In lithium-associated disease, review lithium exposure and consider cause-specific options; the lithium label allows consideration of amiloride."
    }
  ],
  "keyPoints": [
    "NCC is the principal thiazide target; products differ in exposure and formulation.",
    "Urinary calcium reduction does not guarantee stone prevention or normal serum calcium.",
    "Sodium care follows symptoms, cause and trajectory; prevent uncontrolled correction.",
    "Lithium interactions and NDI treatment require clinical, electrolyte and kidney monitoring."
  ],
  "check": {
    "question": "A patient taking a thiazide has lower urinary calcium. Which conclusion is best supported?",
    "choices": [
      "The medicine can reduce urinary calcium; serum calcium and clinical outcomes still need separate assessment",
      "A lower urinary calcium result guarantees that serum calcium cannot rise",
      "The result proves that the patient's next stone will be prevented",
      "The result establishes that thiazide and loop calcium effects are identical"
    ],
    "answer": 0,
    "rationale": "\"A urinary effect with separate serum and outcome assessment\" is correct: urinary calcium reduction is a physiological effect, while serum calcium and stone recurrence are separate outcomes. \"Guaranteed absence of serum calcium elevation\" ignores possible serum calcium elevation. \"Guaranteed prevention of the next stone\" treats a urinary measurement as guaranteed prevention. \"Identical loop and thiazide calcium effects\" overlooks the contrasting loop-associated urinary calcium loss. Assess the patient's broader calcium, sodium, volume and kidney context.",
    "reviewHref": "#thiazide-like-diuretics"
  }
});
diureticPharmacologyModule.references.push(...[
  {
    "label": "DailyMed. Hydrochlorothiazide tablets: product-specific precautions and interactions",
    "href": "https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=4ee35bcf-1eb0-1cca-e063-6294a90adeed&type=pdf"
  },
  {
    "label": "DailyMed. Indapamide tablets: product-specific electrolyte and metabolic precautions",
    "href": "https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=59cd3331-7afe-432a-8b50-39533fd5f392&type=pdf"
  },
  {
    "label": "DailyMed. Metolazone tablets: formulation, kidney response and combination warnings",
    "href": "https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=1a8c38aa-362e-6bcc-e063-6294a90a1e05&type=pdf"
  },
  {
    "label": "Spasovski et al. Hyponatraemia guideline (2014): adult hypotonic disease, diuretic caveats and cause-specific care",
    "href": "https://doi.org/10.1093/ndt/gfu040"
  },
  {
    "label": "Obermüller et al. NCC expression in rat and human kidney (1995): indexed primary abstract",
    "href": "https://pubmed.ncbi.nlm.nih.gov/8594886/"
  },
  {
    "label": "Jakobsson and Berg. Thiazide effects in four boys with NDI or partial NDI (1994): indexed primary abstract",
    "href": "https://pubmed.ncbi.nlm.nih.gov/8086732/"
  },
  {
    "label": "Sinke et al. Experimental NCC-independent thiazide effects in lithium-induced NDI (2014): indexed primary abstract",
    "href": "https://pubmed.ncbi.nlm.nih.gov/24352504/"
  },
  {
    "label": "Fujita et al. Furosemide, salt loading and urinary calcium in eight normal subjects (1984): indexed primary abstract",
    "href": "https://pubmed.ncbi.nlm.nih.gov/6089014/"
  },
  {
    "label": "DailyMed. DIURIL chlorothiazide oral suspension: concentration and adult dosing",
    "href": "https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=bd936e35-1af8-42da-bcc0-f22489d68574&type=pdf"
  },
  {
    "label": "DailyMed. Chlorothiazide sodium for injection: product-specific route and adult dosing",
    "href": "https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=377dc515-e381-4196-8bc7-b738606c57ac&type=pdf"
  },
  {
    "label": "DailyMed/Pfizer. TIKOSYN dofetilide label: hydrochlorothiazide contraindication and electrolyte warnings",
    "href": "https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=02438044-d6a3-49e9-a1ac-3aad21ef2c8c&type=pdf"
  }
]);

// Preserve the five existing cumulative selections as this module bank grows.
diureticPharmacologyModule.cumulativeQuestionIds = ["diuretic-pharmacology-001", "diuretic-pharmacology-030", "diuretic-pharmacology-059", "diuretic-pharmacology-087", "diuretic-pharmacology-116"];

const c = (name, lesson, principle, action, assessment, hazard, why) => ({ name, lesson, principle, action, assessment, hazard, why });

const concepts = [
  c("quinolone pharmacophore", "target-structure", "The 4-quinolone-3-carboxylate core coordinates the bacterial type II topoisomerase DNA cleavage complex", "Connect structural changes to agent-specific potency and disposition rather than treating every fluoroquinolone as interchangeable", "Assess the exact agent, organism, MIC or AST category, infection site, formulation, renal function, and safety profile", "Assuming the shared core gives every agent the same spectrum and clinical role", "A common pharmacophore creates a class mechanism, while substitutions create meaningful agent differences"),
  c("DNA gyrase inhibition", "target-structure", "Fluoroquinolones stabilize cleaved DNA complexes involving DNA gyrase and topoisomerase IV, producing lethal double-strand damage", "Use the mechanism to explain bactericidal activity and target-based resistance", "Assess organism, dominant target, gyrA or parC change, MIC shift, exposure, and emergence during therapy", "Describing the drugs as simple blockers that never damage DNA", "The trapped cleavage complex prevents normal DNA resealing and converts target engagement into lethal injury"),
  c("concentration-linked activity", "target-structure", "Fluoroquinolone effect generally relates to exposure relative to MIC, especially AUC to MIC and peak to MIC", "Choose a labeled and guideline-supported regimen that can achieve the required exposure at the site", "Assess dose, interval, absorption, clearance, MIC, site penetration, organism, and adherence", "Using an underexposed regimen because the isolate is reported susceptible", "Susceptibility assumes an appropriate regimen and achievable exposure"),
  c("ciprofloxacin differentiation", "agent-spectrum", "Ciprofloxacin emphasizes gram-negative activity and can cover susceptible Pseudomonas but is not the preferred respiratory pneumococcal fluoroquinolone", "Reserve it for a supported infection with a susceptible target and a favorable risk-benefit balance", "Assess syndrome, culture, Pseudomonas risk, pneumococcal need, renal function, interactions, and alternatives", "Calling ciprofloxacin a universal respiratory fluoroquinolone", "Agent-specific spectrum prevents a class label from replacing organism and site reasoning"),
  c("levofloxacin differentiation", "agent-spectrum", "Levofloxacin has respiratory pathogen activity and can cover susceptible Pseudomonas at appropriate regimens", "Match indication, renal function, dose, and AST rather than inferring activity from the drug name", "Assess pneumonia or urinary site, culture, MIC, renal clearance, QT risk, glucose risk, and alternatives", "Using levofloxacin for resistant Pseudomonas without susceptibility evidence", "In vitro activity is conditional, and resistance can emerge during exposure"),
  c("moxifloxacin differentiation", "agent-spectrum", "Moxifloxacin has respiratory and anaerobic activity but does not produce a reliable urinary treatment role", "Avoid selecting it for a urinary tract infection and use its label, site exposure, and safety profile for other decisions", "Assess infection site, renal function, hepatic status, QT risk, interacting drugs, and alternatives", "Equating lack of renal dose adjustment with usefulness for UTI", "No renal adjustment does not mean adequate active urinary concentration"),
  c("delafloxacin differentiation", "agent-spectrum", "Delafloxacin has labeled oral and intravenous roles in acute bacterial skin infection and community-acquired bacterial pneumonia, including susceptible MRSA", "Use it only when the indication, pathogen, route, renal plan, and alternatives support the choice", "Assess ABSSSI or CABP criteria, MRSA susceptibility, renal function, route, chelation, and class warnings", "Calling delafloxacin the preferred agent for every suspected MRSA skin infection", "Activity against MRSA does not erase narrower, safer, or better-established alternatives"),
  c("susceptibility interpretation", "agent-spectrum", "A susceptible result predicts likely efficacy only with the associated organism, site, and recommended exposure", "Use current FDA-recognized criteria and the product's approved or evidence-supported use", "Assess organism identity, specimen quality, MIC, breakpoint source, dosing regimen, site, and resistance history", "Reading susceptible as a guarantee independent of dose and source control", "AST is one component of an exposure and clinical-context decision"),
  c("oral absorption", "disposition-dosing", "Oral fluoroquinolones can achieve substantial systemic exposure, but food, cations, formulation, and gastrointestinal function can alter absorption", "Verify administration conditions before assuming an oral regimen reproduces expected exposure", "Assess oral intake, vomiting, feeding tubes, cations, multivitamins, antacids, sucralfate, product instructions, and adherence", "Calling oral bioavailability high while ignoring a simultaneous iron dose", "Reliable oral exposure depends on preventing avoidable absorption loss"),
  c("renal adaptation", "disposition-dosing", "Renal elimination and dose adjustment differ by agent, regimen, and degree of impairment", "Calculate current renal function and apply the exact product and indication table", "Assess age, weight, serum creatinine trend, dialysis, acute kidney injury, agent, route, dose, and interval", "Applying one class-wide renal rule to ciprofloxacin, levofloxacin, moxifloxacin, and delafloxacin", "Agent-specific clearance and formulations require product-specific adaptation"),
  c("moxifloxacin renal profile", "disposition-dosing", "Moxifloxacin generally does not require renal dosage adjustment, including in dialysis, under current labeling", "Keep the standard labeled dose when otherwise appropriate while still reviewing QT, hepatic, glucose, and class risks", "Assess indication, urinary relevance, ECG risk, electrolytes, hepatic impairment, interactions, and dialysis", "Using renal independence as a reason to ignore nonrenal toxicity", "Dose adjustment and drug selection are separate clinical questions"),
  c("IV to oral transition", "disposition-dosing", "Selected fluoroquinolone oral regimens can support step-down when absorption, adherence, infection severity, source control, and susceptibility are suitable", "Reassess the whole patient before switching route, not just the tablet's bioavailability", "Assess hemodynamics, gastrointestinal function, culture, source control, oral access, interactions, and follow-up", "Switching to oral therapy despite uncontrolled source or unreliable absorption", "Route conversion succeeds only when the patient and infection are ready"),
  c("polyvalent cation chelation", "administration-interactions", "Aluminum, magnesium, calcium, iron, zinc, sucralfate, and related products can form poorly absorbed complexes with oral fluoroquinolones", "Separate each agent from interacting products according to its current label", "Assess antacids, supplements, multivitamins, binders, enteral feeds, timing, route, and product-specific spacing", "Using one memorized spacing rule for every drug and every cation product", "Chelation is a class mechanism, but spacing instructions remain product specific"),
  c("enteral feeding interaction", "administration-interactions", "Enteral nutrition and mineral content can reduce oral fluoroquinolone exposure, while some suspensions create tube-specific handling problems", "Use a route and product-specific feed plan that preserves nutrition and antibacterial exposure", "Assess tube location, formula minerals, continuous versus bolus feeding, dosage form, flushing, hold interval, and alternative route", "Sending an oil-based suspension through tubing when the label warns against it", "A feeding tube changes both administration mechanics and absorption"),
  c("ciprofloxacin CYP1A2 inhibition", "administration-interactions", "Ciprofloxacin inhibits CYP1A2 and can increase exposure to sensitive substrates, with concomitant tizanidine contraindicated", "Complete an interaction review and choose another antibacterial or interacting drug plan when needed", "Assess tizanidine, theophylline, caffeine burden, clozapine, other substrates, symptoms, and alternatives", "Treating ciprofloxacin interactions as chelation only", "Metabolic inhibition can create systemic toxicity independent of gastrointestinal absorption"),
  c("warfarin and glucose interactions", "administration-interactions", "Fluoroquinolones can destabilize anticoagulation and blood glucose, especially in vulnerable patients and with interacting therapy", "Plan closer INR or glucose surveillance and define an action threshold", "Assess warfarin indication, baseline INR, diet, illness, insulin or secretagogues, renal function, intake, and symptoms", "Telling a patient to monitor without stating when or what action to take", "Infection, intake, and drug effects can combine, so surveillance must lead to a decision"),
  c("tendinitis and tendon rupture", "tendon-neurologic", "Systemic fluoroquinolones can cause tendinitis and tendon rupture during treatment or after completion", "Stop the fluoroquinolone at the first compatible symptom, rest the affected area, and arrange evaluation and an alternative when needed", "Assess tendon pain, swelling, weakness, activity, age, corticosteroids, transplant, renal disease, and prior reaction", "Advising the patient to exercise through Achilles pain", "Continued loading of an injured tendon can worsen damage"),
  c("peripheral neuropathy", "tendon-neurologic", "Peripheral neuropathy can begin rapidly and may be disabling or irreversible", "Stop therapy promptly for new burning, tingling, numbness, pain, or weakness and reassess antibacterial treatment", "Assess symptom onset, distribution, baseline neuropathy, diabetes, other neurotoxins, function, and alternatives", "Waiting for a scheduled follow-up despite progressive sensory loss", "Early recognition matters because persistence can continue after drug withdrawal"),
  c("central nervous system effects", "tendon-neurologic", "Fluoroquinolones can cause seizures, confusion, agitation, hallucinations, mood change, insomnia, or other CNS effects, sometimes after the first dose", "Stop and evaluate serious CNS or psychiatric symptoms and correct interacting or physiologic contributors", "Assess seizure history, cognition, psychiatric history, renal function, interacting drugs, sleep, glucose, and symptom timing", "Attributing acute confusion solely to infection without reviewing the antibiotic", "The class can contribute directly and accumulated exposure can magnify risk"),
  c("myasthenia gravis", "tendon-neurologic", "Fluoroquinolones can exacerbate muscle weakness in myasthenia gravis and are generally avoided in known disease", "Choose an effective alternative whenever possible and treat respiratory or bulbar weakness as urgent", "Assess myasthenia history, baseline strength, swallowing, ventilation, concomitant neuromuscular drugs, and alternatives", "Prescribing the class without asking about neuromuscular disease", "Worsened transmission can become a respiratory emergency"),
  c("dysglycemia", "metabolic-cardiovascular", "Systemic fluoroquinolones can produce hypoglycemia or hyperglycemia, with severe hypoglycemia reported especially in older adults with diabetes", "Increase glucose surveillance, teach symptoms, and switch therapy if serious disturbance occurs", "Assess diabetes, insulin or secretagogues, intake, kidney function, baseline glucose, monitoring access, and rescue plan", "Assuming only hyperglycemia is possible", "Both directions of glucose disturbance can occur and hypoglycemia may progress to coma"),
  c("QT prolongation", "metabolic-cardiovascular", "Fluoroquinolone QT risk is agent and patient dependent, with moxifloxacin carrying a prominent label warning", "Correct modifiable risk, avoid unsafe combinations, and select an alternative when torsade risk is unacceptable", "Assess baseline QTc, potassium, magnesium, bradycardia, structural heart disease, congenital syndrome, interacting drugs, and agent", "Using a simple class ranking instead of the exact label and patient risk stack", "Torsade risk reflects drug exposure plus repolarization reserve"),
  c("aortic aneurysm and dissection", "metabolic-cardiovascular", "FDA warns that systemic fluoroquinolones may increase rare but serious aortic rupture or dissection risk in susceptible patients", "Avoid the class in high-risk patients unless no other treatment option is available and teach emergency symptoms", "Assess known aneurysm, vascular disease, hypertension, advanced age, Marfan or Ehlers-Danlos syndrome, and alternatives", "Ignoring sudden severe chest, back, or abdominal pain during therapy", "Aortic injury can be rapidly fatal and requires emergency evaluation"),
  c("hepatotoxicity and C difficile", "metabolic-cardiovascular", "Serious hepatic injury and Clostridioides difficile-associated diarrhea are additional clinically important risks", "Stop and evaluate jaundice or severe hepatic symptoms and investigate significant post-antibiotic diarrhea", "Assess liver history, enzymes, abdominal symptoms, stool pattern, duration, prior antibiotics, and severity", "Treating persistent severe diarrhea with an antimotility drug without evaluation", "Antibiotic harm can appear during or after therapy and may require a different treatment pathway"),
  c("target mutation resistance", "resistance-stewardship", "Stepwise mutations in gyrA, gyrB, parC, or parE can reduce target binding and raise the MIC", "Use prior cultures, current AST, and exposure quality to prevent amplification of a resistant subpopulation", "Assess historical MICs, organism, mutation data if available, dosing, adherence, site, and clinical response", "Repeating the same class after documented target-mediated failure", "Additional mutations can accumulate under selective pressure"),
  c("efflux permeability and qnr", "resistance-stewardship", "Efflux, reduced permeability, and plasmid-mediated qnr or modifying mechanisms can add low-level resistance that facilitates further selection", "Interpret borderline susceptibility and treatment response with the full resistance context", "Assess organism, MIC trend, co-resistance, plasmid markers, prior exposure, inoculum, and combination options", "Assuming one negative gyrA result excludes clinically meaningful resistance", "Resistance is multilayered and can precede a high-level phenotype"),
  c("restricted uncomplicated indications", "resistance-stewardship", "FDA states that for certain uncomplicated infections, fluoroquinolone risks outweigh benefits when other options are available", "Reserve systemic fluoroquinolones for acute sinusitis, acute bacterial exacerbation of chronic bronchitis, or uncomplicated UTI only when appropriate alternatives are absent", "Assess diagnostic certainty, severity, culture, allergies, alternatives, prior reactions, and patient-specific risks", "Choosing the class for convenience in a mild infection with safer active options", "A small expected benefit cannot justify disproportionate irreversible harm"),
  c("pregnancy lactation and pediatrics", "special-populations", "Pregnancy, lactation, and pediatric use require agent-specific labeling, infection severity, exposure route, alternatives, and current evidence", "Use current narrative risk information and avoid obsolete pregnancy letters", "Assess age, weight, gestational or lactation status, infection, susceptibility, route, duration, organ function, and alternatives", "Applying a blanket historic cartilage warning without recognizing labeled anthrax, plague, or pediatric indications", "Population decisions require the exact product and disease context"),
  c("older adult risk stacking", "special-populations", "Older adults can accumulate tendon, aortic, glucose, neurologic, QT, renal, and interaction risks even when no single factor absolutely prohibits treatment", "Choose the agent only after comparing active alternatives, adapting exposure, and assigning symptom and laboratory follow-up", "Assess age, frailty, vascular disease, corticosteroids, diabetes therapy, cognition, QT-active medicines, kidney function, mobility, prior class exposure, and monitoring access", "Treating age as a binary contraindication while ignoring the patient's actual combined risk and available alternatives", "A population label does not replace an individualized risk stack, exposure plan, and benefit comparison"),
  c("monitoring and counseling", "monitoring-counseling", "A complete plan anticipates serious class harms, agent-specific interactions, exposure failure, and microbiologic response", "Give symptom-based stop instructions, administration timing, monitoring ownership, duration, and follow-up", "Assess tendon, nerve, CNS, glucose, ECG, aortic, hepatic, diarrhea, renal, interaction, culture, and response domains", "Listing warnings without telling the patient what to do", "Counseling becomes protective only when it changes recognition and action"),
  c("risk-triggered surveillance", "monitoring-counseling", "Fluoroquinolone monitoring should be selected and timed from the patient's risk factors rather than ordered as one universal laboratory panel", "Assign glucose, renal, ECG, INR, hepatic, culture, symptom, or interaction follow-up only where clinically relevant, with an owner and action threshold", "Assess baseline risk, expected treatment duration, agent, route, organ function, interacting drugs, test timing, symptom triggers, result ownership, and escalation rules", "Ordering tests without a decision threshold or relying on laboratory monitoring to detect tendon and neuropathic symptoms", "Effective surveillance pairs each meaningful risk with a feasible signal, a review time, and a defined response"),
  c("definitive fluoroquinolone plan", "clinical-integration", "A defensible regimen names the syndrome, organism, susceptibility, site, agent, dose, route, interval, duration, interactions, monitoring, and exit criteria", "Narrow, switch, stop, or continue at each culture and clinical review point", "Assess diagnosis, source control, culture, MIC, renal and hepatic function, oral readiness, harms, response, and alternative options", "Continuing the class because it was started empirically", "Antimicrobial stewardship requires a repeated indication and risk-benefit decision"),
  c("time-boxed definitive review", "clinical-integration", "A fluoroquinolone started empirically must receive a scheduled definitive review when cultures, clinical trajectory, source control, and organ function become clearer", "At the review point, confirm the diagnosis and site, interpret microbiology, compare narrower active options, recalculate exposure, and document the revised endpoint", "Assess elapsed active therapy, specimen quality, culture and MIC, source-control completion, symptoms, vital and laboratory trends, absorption, renal function, adverse effects, alternatives, and duration already received", "Allowing the original empiric order and default duration to persist after evidence changes", "A scheduled review converts initial uncertainty into an explicit decision to narrow, change, stop, or continue"),
];

const dimensions = [["principle", "Which principle best characterizes"], ["action", "Which clinical action best applies to"], ["assessment", "Which assessment is most appropriate for"], ["hazard", "Which reasoning hazard is most important to prevent with"]];
const distractors = (index, field) => [7, 13, 19].map((offset) => concepts[(index + offset) % concepts.length][field]);

const generated = concepts.flatMap((item, index) => dimensions.map(([field, stem], dimension) => ({
  id: `fluoroquinolone-pharmacology-${String(index * 4 + dimension + 1).padStart(3, "0")}`,
  lesson: item.lesson,
  question: `${stem} ${item.name}?`,
  choices: [item[field], ...distractors(index, field)],
  answer: 0,
  rationale: item.why,
  reviewHref: `#${item.lesson}`,
})));

const cases = [
  ["133", "administration-interactions", "A levofloxacin label directs separation from a metal-containing multivitamin by at least two hours. The antibiotic is due at 09:00 and the vitamin at 08:30. What is the safest immediate plan?", ["Reschedule one product so the label-defined separation is met", "Give both together with milk", "Crush both into the same cup", "Double the antibiotic dose"], "Chelation can reduce absorption. The schedule should be changed rather than compensating with an unapproved dose."],
  ["134", "agent-spectrum", "A patient with a lower urinary tract infection has an isolate susceptible to several agents. Which fact argues most strongly against moxifloxacin?", ["It does not provide a reliable urinary treatment role", "It always requires hemodialysis", "It has no systemic absorption", "It is only an ophthalmic drug"], "Moxifloxacin is not selected for UTI because urinary exposure is inadequate for that role, despite no routine renal dose adjustment."],
  ["135", "tendon-neurologic", "A 67-year-old taking prednisone develops new Achilles pain three days after starting ciprofloxacin. What is the best response?", ["Stop ciprofloxacin, rest the tendon, and arrange evaluation and alternative therapy", "Continue and increase exercise", "Wait until the course is complete", "Add another fluoroquinolone"], "Age and systemic corticosteroids increase tendon risk. Compatible symptoms require prompt discontinuation and evaluation."],
  ["136", "metabolic-cardiovascular", "A patient taking insulin becomes confused and diaphoretic after starting levofloxacin. What should happen first?", ["Check and treat glucose urgently while evaluating the antibiotic as a contributor", "Assume this is bacterial resistance", "Give the next dose early", "Stop glucose monitoring"], "Severe hypoglycemia can occur and may progress rapidly. Immediate glucose assessment and treatment take priority."],
].map(([id, lesson, question, choices, rationale]) => ({ id: `fluoroquinolone-pharmacology-${id}`, lesson, question, choices, answer: 0, rationale, reviewHref: `#${lesson}` }));

// Feeding-related rows are reviewed individually; preserve the remaining generated bank.
const feedingQuestionRepairs = {
  "fluoroquinolone-pharmacology-035": {
    "choices": [
      "Assess oral intake, vomiting, feeding tubes, cations, multivitamins, antacids, sucralfate, product instructions, and adherence",
      "Check the prescribed dose and renal adjustment, and assume tube administration will provide the expected exposure",
      "Confirm feeds meet calorie goals, and omit their mineral content from the antibiotic review",
      "Assess vomiting and adherence, but ignore antacids and mineral supplements when oral intake is adequate"
    ],
    "rationale": "Oral exposure can fall when fluoroquinolones interact with cations in feeds, antacids, supplements, multivitamins, or sucralfate. Review these alongside gastrointestinal function, formulation, product instructions, and actual administration. A correct dose or adequate calorie delivery does not establish reliable absorption."
  },
  "fluoroquinolone-pharmacology-051": {
    "choices": [
      "Assess antacids, supplements, multivitamins, binders, enteral feeds, timing, route, and product-specific spacing",
      "Use the same separation interval for every fluoroquinolone, mineral product, and phosphate binder",
      "Check calcium and iron, but omit magnesium-containing antacids and mineral-containing feeds",
      "Continue simultaneous administration because a water flush will prevent absorption interactions"
    ],
    "rationale": "Polyvalent cations can chelate oral fluoroquinolones, and phosphate binders can also reduce exposure. Include feeds and nonprescription products in the review, then apply the instructions for the exact drug and interacting product. Water flushing helps administration but does not establish that nutrient interactions have been prevented."
  },
  "fluoroquinolone-pharmacology-053": {
    "choices": [
      "Enteral nutrition and mineral content can reduce oral fluoroquinolone exposure, while some suspensions create tube-specific handling problems",
      "A water flush eliminates nutrient-binding effects as well as preventing tube blockage",
      "Changing a tablet to a liquid always solves both tube handling and absorption problems",
      "Once the drug reaches the stomach through a tube, formula mineral content no longer affects absorption"
    ],
    "rationale": "Mineral-containing feeds can reduce fluoroquinolone bioavailability. Ciprofloxacin also illustrates a separate formulation problem: its oil-based oral suspension adheres to tubing. Flushing or choosing a liquid does not by itself establish adequate absorption or tube compatibility."
  },
  "fluoroquinolone-pharmacology-054": {
    "choices": [
      "Use a route and product-specific feed plan that preserves nutrition and antibacterial exposure",
      "Stop all nutrition for the entire antibiotic course instead of planning individual administrations",
      "Continue simultaneous feeding and double the antibiotic dose to compensate for possible absorption loss",
      "Mix the antibiotic directly into the formula so feeding does not need to be interrupted"
    ],
    "rationale": "Reconcile the specific product, tube preparation, and feed-separation plan so that medication exposure and nutrition delivery are both addressed. Do not mix medication into the formula, assume a higher dose corrects the interaction, or replace a coordinated administration schedule with an indefinite feeding interruption."
  },
  "fluoroquinolone-pharmacology-055": {
    "choices": [
      "Assess tube location, formula minerals, continuous versus bolus feeding, dosage form, flushing, hold interval, and alternative route",
      "Check the dose and renal function, but omit the feeding schedule and formula mineral content",
      "Check tube location, but assume that all liquids are compatible and that feed separation is unnecessary",
      "Check syringe size and liquid volume, but omit dosage-form integrity and nutrition timing"
    ],
    "rationale": "Tube location and dosage form affect the administration plan, while formula minerals and actual feeding times affect the absorption review. Check preparation, flushing, and the verified separation instructions for the selected product; assess an alternative formulation or route if a compatible plan cannot be established. Dose, location, or syringe checks alone are incomplete."
  },
  "fluoroquinolone-pharmacology-056": {
    "choices": [
      "Sending an oil-based suspension through tubing when the label warns against it",
      "Reviewing the exact product before choosing a compatible immediate-release tablet preparation",
      "Separating feeds according to a verified product plan and restarting nutrition afterward",
      "Flushing a compatible tube-administered preparation with water before and after dosing"
    ],
    "rationale": "Ciprofloxacin's oil-based oral suspension adheres to feeding-tube tubing and should not be sent through it. An appropriate immediate-release tablet preparation can be crushed and mixed with water, with water flushing before and after administration. A verified compatible preparation and feed schedule address the problem; treating every liquid as tube-compatible does not."
  }
};

const beforeHistoricalAntibioticQuestionBank = [...generated, ...cases].map((question) => {
  const repair = feedingQuestionRepairs[question.id];
  return repair ? { ...question, ...repair } : question;
});

const historicalAntibioticQuestionOverrides = {
  "fluoroquinolone-pharmacology-001": {
    "id": "fluoroquinolone-pharmacology-001",
    "lesson": "target-structure",
    "question": "Which statement correctly connects the fluoroquinolone scaffold with its antibacterial target?",
    "choices": [
      "The quinolone framework supports inhibition of bacterial DNA gyrase and topoisomerase IV; substitutions help distinguish individual agents.",
      "The quinolone framework makes these agents inhibitors of bacterial 30S ribosomal protein synthesis.",
      "A shared quinolone framework establishes identical spectrum, exposure, and safety for every agent.",
      "The quinolone framework makes these agents inhibitors of bacterial cell-wall synthesis."
    ],
    "answer": 0,
    "rationale": "Fluoroquinolones inhibit bacterial DNA gyrase and topoisomerase IV, enzymes involved in DNA processes. Native ciprofloxacin and delafloxacin structures show the related quinolone framework with different substituents. A shared scaffold and target do not establish clinical interchangeability.",
    "reviewHref": "#target-structure"
  },
  "fluoroquinolone-pharmacology-007": {
    "id": "fluoroquinolone-pharmacology-007",
    "lesson": "target-structure",
    "question": "Which assessment best interprets possible fluoroquinolone target-mediated resistance?",
    "choices": [
      "Review the organism, agent-specific susceptibility result, infection site, exposure, and response; interpret target changes when such information is available.",
      "Assume a susceptible result guarantees cure regardless of absorption or infection site.",
      "Assume all bacterial DNA gyrase mutations leave fluoroquinolone activity unchanged.",
      "Infer fluoroquinolone activity solely from susceptibility to a cell-wall inhibitor."
    ],
    "answer": 0,
    "rationale": "Changes in bacterial DNA gyrase or topoisomerase IV can reduce fluoroquinolone activity. Permeability and efflux can also contribute. Susceptibility must be interpreted for the actual organism and agent alongside site, exposure, and clinical response. This assessment does not require routine resistance genotyping.",
    "reviewHref": "#target-structure"
  },
  "fluoroquinolone-pharmacology-023": {
    "id": "fluoroquinolone-pharmacology-023",
    "lesson": "agent-spectrum",
    "question": "A clinician considers moxifloxacin because it generally needs no renal dose adjustment. Which assessment is most appropriate?",
    "choices": [
      "Confirm that the agent fits the infection site and susceptibility, then review QT risk, organ function, interacting medicines, and alternatives.",
      "Select it automatically for urinary infection because no renal adjustment implies adequate active urinary exposure.",
      "Ignore QT-active medicines because a renal adjustment is generally unnecessary.",
      "Use the same clinical indications and precautions as every other fluoroquinolone."
    ],
    "answer": 0,
    "rationale": "Moxifloxacin generally requires no renal dose adjustment, but that property does not establish a suitable urinary-infection role. The book specifically distinguishes its inadequate urinary concentration. Its label retains QT precautions, including interacting medicines and patient risk factors. Selection still requires an appropriate site, organism, and benefit-risk assessment.",
    "reviewHref": "#agent-spectrum"
  },
  "fluoroquinolone-pharmacology-025": {
    "id": "fluoroquinolone-pharmacology-025",
    "lesson": "agent-spectrum",
    "question": "Which statement accurately distinguishes delafloxacin's labeled S. aureus indications?",
    "choices": [
      "Its adult skin-infection indication includes susceptible MRSA and MSSA; its pneumonia indication lists susceptible MSSA only.",
      "Its pneumonia indication includes MRSA because its skin-infection indication includes MRSA.",
      "Its skin-infection indication excludes MRSA and includes only MSSA.",
      "Its labeled S. aureus indications apply to every infection site without additional evidence."
    ],
    "answer": 0,
    "rationale": "Delafloxacin is labeled for adult acute bacterial skin and skin structure infections caused by designated susceptible organisms, including MRSA and MSSA. For community-acquired bacterial pneumonia, the labeled S. aureus organisms are MSSA isolates only. Do not transfer the MRSA skin-infection indication to pneumonia or infer universal preference from susceptibility.",
    "reviewHref": "#agent-spectrum"
  },
  "fluoroquinolone-pharmacology-091": {
    "id": "fluoroquinolone-pharmacology-091",
    "lesson": "metabolic-cardiovascular",
    "question": "A patient with a known aortic aneurysm is being considered for ciprofloxacin. Which assessment best applies its aortic warning?",
    "choices": [
      "Review the infection and active alternatives; in known aneurysm or increased aortic risk, reserve ciprofloxacin for situations without an alternative antibacterial treatment.",
      "Treat the known aneurysm as irrelevant when the organism is susceptible.",
      "Assume the aortic warning applies only to intravenous administration.",
      "Assume the absence of tendon symptoms rules out the separate aortic concern."
    ],
    "answer": 0,
    "rationale": "Ciprofloxacin labeling describes an increased rate of aortic aneurysm and dissection in epidemiologic studies, with the cause of that increased risk not identified. It advises reserving ciprofloxacin in patients with known aneurysm or increased risk when no alternative antibacterial treatment is available. A susceptibility result does not erase this separate patient risk.",
    "reviewHref": "#metabolic-cardiovascular"
  },
  "fluoroquinolone-pharmacology-107": {
    "id": "fluoroquinolone-pharmacology-107",
    "lesson": "resistance-stewardship",
    "question": "Which approach follows ciprofloxacin labeling when considering treatment of acute uncomplicated cystitis?",
    "choices": [
      "Confirm the bacterial syndrome, review patient risks and active alternatives, and reserve ciprofloxacin when no alternative treatment option is available.",
      "Choose ciprofloxacin first for every urinary symptom without confirming the syndrome.",
      "Ignore its serious adverse-reaction warnings because the infection is uncomplicated.",
      "Assume the cystitis restriction prohibits every use of ciprofloxacin for every infection."
    ],
    "answer": 0,
    "rationale": "Ciprofloxacin's boxed warning and acute uncomplicated cystitis section reserve its use for patients without alternative treatment options because serious adverse reactions can occur. Confirm the actual syndrome and consider appropriate active alternatives. This indication-specific restriction is not a blanket prohibition of all ciprofloxacin treatment.",
    "reviewHref": "#resistance-stewardship"
  },
  "fluoroquinolone-pharmacology-109": {
    "id": "fluoroquinolone-pharmacology-109",
    "lesson": "special-populations",
    "question": "Which approach is appropriate when considering a fluoroquinolone during pregnancy, lactation, or childhood?",
    "choices": [
      "Use the exact product's labeling and disease-specific evidence to compare infection severity, alternatives, and patient-specific risks.",
      "Apply a blanket rule that every fluoroquinolone is forbidden for every pediatric indication.",
      "Assume reassuring observational pregnancy data prove that every agent is risk free.",
      "Assume pregnancy, breastfeeding, and pediatric use share identical instructions across the class."
    ],
    "answer": 0,
    "rationale": "These decisions require the particular medicine and infection. Ciprofloxacin labeling includes selected pediatric indications and specific lactation considerations; it also explains limits of observational pregnancy evidence. Neither a class-wide ban nor a class-wide assurance of safety replaces product-specific benefit-risk reasoning.",
    "reviewHref": "#special-populations"
  },
  "fluoroquinolone-pharmacology-115": {
    "id": "fluoroquinolone-pharmacology-115",
    "lesson": "special-populations",
    "question": "Which assessment best evaluates fluoroquinolone risk in an older adult?",
    "choices": [
      "Review corticosteroids and tendon history, kidney function and exposure, diabetes treatment, QT-active medicines, vascular history, cognition, and the infection's alternatives.",
      "Use age alone to conclude that every fluoroquinolone is absolutely contraindicated.",
      "Ignore current kidney function because an older adult's usual outpatient dose must remain appropriate.",
      "Ignore interacting medicines once a susceptibility result is available."
    ],
    "answer": 0,
    "rationale": "Older adults can have several overlapping risks. Ciprofloxacin labeling discusses tendon risk with corticosteroids, renal function, QT susceptibility, glucose disturbances, and aortic concerns. The actual patient, product, exposure, interacting medicines, and available treatment alternatives determine the assessment; age alone is insufficient.",
    "reviewHref": "#special-populations"
  },
  "fluoroquinolone-pharmacology-131": {
    "id": "fluoroquinolone-pharmacology-131",
    "lesson": "clinical-integration",
    "question": "When useful culture results and the clinical response are available, which review best supports a definitive fluoroquinolone plan?",
    "choices": [
      "Reassess the organism and susceptibility, infection site, response, source control, exposure, adverse effects, alternatives, and whether ongoing treatment is still indicated.",
      "Continue the original empiric choice indefinitely because it was reasonable before cultures returned.",
      "Treat a culture result as proof that absorption, site exposure, and source control no longer matter.",
      "Extend an inactive regimen rather than reconsider the agent or diagnosis."
    ],
    "answer": 0,
    "rationale": "An initial empiric plan requires reassessment as diagnostic and susceptibility information becomes available. Review clinical response, delivery, safety, source control, and the continuing indication. Use the evidence to decide whether to narrow, change, stop, or continue therapy rather than automatically extending the original choice.",
    "reviewHref": "#clinical-integration"
  }
};
export const fluoroquinolonePharmacologyQuestionBank = beforeHistoricalAntibioticQuestionBank.map(q => historicalAntibioticQuestionOverrides[q.id] ?? q);

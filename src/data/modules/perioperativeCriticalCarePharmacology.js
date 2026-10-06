import { perioperativeCriticalCarePharmacologyQuestionBank } from "@/data/questionBanks/perioperativeCriticalCarePharmacology";

const lesson = (slug, title, visual, summary, concepts, application, sections, keyPoints, check) => ({ slug, title, visual, summary, concepts, application, lesson: sections.map(([heading, body]) => ({ heading, body })), keyPoints, check });

export const perioperativeCriticalCarePharmacologyModule = {
  slug: "perioperative-critical-care-pharmacology",
  number: "81",
  title: "Perioperative and Critical-Care Pharmacology",
  source: "NaS reconciliation of RxPrep 2023 with current SCCM, ASHP, ASA, ASRA, MHAUS, ISMP, FDA, and DailyMed guidance",
  description: "Use anesthetics, neuromuscular blockers, reversal agents, stress-ulcer prophylaxis, and antifibrinolytics through physiology, objective monitoring, and high-reliability medication systems.",
  topics: ["Stress-ulcer prophylaxis", "Local anesthetics", "LAST", "Induction", "Malignant hyperthermia", "Neuromuscular blockade", "Succinylcholine", "Quantitative monitoring", "Reversal", "Antifibrinolytics"],
  outcomes: [
    "Start and stop stress-ulcer prophylaxis from current bleeding risk rather than ICU location alone.",
    "Connect local-anesthetic ionization, tissue access, sodium-channel block, disposition, and systemic toxicity.",
    "Recognize and treat local anesthetic systemic toxicity with the current ASRA rescue sequence.",
    "Choose propofol, etomidate, or ketamine from the induction goal and the patient's physiology.",
    "Recognize malignant hyperthermia before late hyperthermia and run the MHAUS dantrolene pathway.",
    "Distinguish depolarizing from nondepolarizing block and explain why paralysis never supplies unconsciousness or analgesia.",
    "Screen succinylcholine hyperkalemia, pediatric, malignant-hyperthermia, bradycardia, and prolonged-block risks.",
    "Select nondepolarizing agents through onset, duration, organ function, interaction, and recovery planning.",
    "Use quantitative adductor-pollicis monitoring and match sugammadex or neostigmine to measured block depth.",
    "Use tranexamic acid and aminocaproic acid through indication, route, renal function, thrombosis, and seizure safeguards.",
  ],
  submodules: [
    lesson("perioperative-stress-ulcer", "Use Stress-Ulcer Prophylaxis Only While Risk Persists", "periop-stress-ulcer", "Stress-related mucosal bleeding prevention is a temporary risk intervention. Coagulopathy, shock, and chronic liver disease are the clearest current risk factors, while enteral nutrition, ventilation, neurologic illness, and preexisting acid disease also inform the decision.", ["Risk stratification", "PPI", "H2RA", "Enteral nutrition", "Deprescribing"], "Write the current risk factor, route, agent, reassessment date, stop rule, and any independent long-term acid indication.", [
      ["Separate ICU location from bleeding risk", "The 2024 SCCM and ASHP guideline identifies coagulopathy, shock, and chronic liver disease as likely risk factors for clinically important stress-related upper gastrointestinal bleeding. Its evidence review did not establish ventilation alone as an independent risk factor. The 2026 contextualized guideline for adult ICUs in Saudi Arabia, Kuwait, and the Nordic countries incorporates newer evidence. Its practical considerations say clinicians may consider mechanically ventilated patients potentially at risk and assess them individually. This is not a separate graded recommendation requiring prophylaxis for every ventilated patient. Earlier uncertainty does not prove that ventilated patients cannot benefit."],
      ["Choose a low-dose preventive regimen", "For critically ill adults with bleeding risk factors, the 2024 SCCM/ASHP guideline conditionally suggests either a proton pump inhibitor or a histamine-2 receptor antagonist as first-line prophylaxis, with moderate-certainty evidence. It also accepts enteral or intravenous delivery, with low-certainty evidence. Choose one appropriate low-dose agent and route after checking organ function, interactions, enteral access and the original indication; these recommendations do not call for routine combined PPI and H2RA therapy."],
      ["Apply sepsis-specific guidance", "For adults with sepsis or septic shock and gastrointestinal bleeding risk factors, the 2026 Surviving Sepsis Campaign conditionally suggests PPI prophylaxis rather than no prophylaxis, with moderate-certainty evidence. This recommendation compares PPI with no prophylaxis; it does not itself prove PPI superiority over H2 blockers or make prophylaxis automatic for every patient with sepsis. The rationale cites earlier comparative evidence favoring PPIs for bleeding prevention and identifies H2 blockers as a reasonable alternative when PPIs are unavailable. Keep risk assessment, dose selection and stopping rules explicit."],
      ["Define low dose and distinguish active bleeding", "SCCM/ASHP defines low-dose daily totals as at most 40 mg for pantoprazole, omeprazole or esomeprazole; 30 mg for lansoprazole; and 40 mg for famotidine. These are preventive dose categories, not a universal prescription: renal function and product-specific administration still matter. Active gastrointestinal bleeding requires its own evaluation and treatment pathway."],
      ["Account for feeding and neurologic illness", "Enteral nutrition probably reduces clinically important stress-related upper gastrointestinal bleeding, but feeding does not remove persistent risk such as coagulopathy. SCCM/ASHP conditionally suggests prophylaxis for fed adults who remain at risk and separately for neurocritical-care adults; both recommendations have very low-certainty evidence. It suggests avoiding prophylaxis in low-risk, fed adults, also with very low certainty, and notes that concurrent prophylaxis and feeding may increase pneumonia risk. Keep population, bleeding risk and uncertainty explicit."],
      ["Monitor the selected acid-suppressive treatment", "The book describes thrombocytopenia and mental-status changes with H2 receptor antagonists, particularly in older patients or those with renal impairment, and notes that tolerance to their effect can occur. Its PPI tables list C. difficile-associated diarrhea and other adverse effects; fracture warnings concern high doses or prolonged exposure. Review new symptoms, renal function and the continuing indication. Reported associations with infection or pneumonia do not establish that acid suppression caused an individual patient's illness."],
      ["Preserve an independent treatment indication", "A PPI used before ICU admission may be treating recent upper gastrointestinal bleeding, erosive esophagitis, a hypersecretory condition or H. pylori eradication. Reconcile that independent indication before stopping it, weighing benefit, adverse effects, interactions and the available route. If the history is unclear, clarify it instead of assuming the drug was started solely for ICU prophylaxis. Resolution of stress-ulcer risk alone does not establish that the other treatment should end."],
      ["Stop when the reason ends", "Assess the indication daily and discontinue stress-ulcer prophylaxis when its risk factors are no longer present. SCCM/ASHP specifically calls for review and discontinuation of unnecessary prophylaxis before transfer out of the ICU to prevent inappropriate continuation. Its suggestion against prophylaxis in low-risk, enterally fed adults has very low-certainty evidence. Reconcile any separate acid-treatment indication so that a prophylaxis stop rule does not remove justified treatment."],
    ], ["Risk factors drive prophylaxis.", "Assess ventilated patients individually; do not equate uncertain independent risk with no benefit.", "Either low-dose PPI or H2RA can be used.", "Daily discontinuation review is part of the prescription."], { question: "An extubated, stable, enterally fed ICU patient has no neurologic critical illness, coagulopathy, shock, chronic liver disease, or separate acid indication. What is the best action?", choices: ["Discontinue routine stress-ulcer prophylaxis", "Continue lifelong prophylaxis because the patient was ventilated", "Double the acid-suppressive dose", "Combine a PPI and H2RA"], answer: 0, rationale: "This low-risk, enterally fed patient has no remaining stated bleeding risk or independent acid-treatment indication. SCCM/ASHP conditionally suggests avoiding prophylaxis in this population, with very low-certainty evidence, and calls for stopping it when risk factors resolve. Prior ventilation does not justify lifelong treatment, a higher dose or routine combined PPI and H2RA therapy. Reassess if the clinical risk changes.", reviewHref: "#perioperative-stress-ulcer" }),

    lesson("local-anesthetic-pharmacology", "Map Local Anesthetic Effect and Disposition", "periop-local-anesthetic", "Local anesthetics must cross tissue and membrane, enter the axon, and bind voltage-gated sodium channels from the intracellular side. Molecular state, tissue pH, lipid solubility, protein binding, blood flow, dose, and metabolism shape onset, potency, duration, and toxicity.", ["Sodium channels", "Ionization", "Amides", "Esters", "Additive toxicity"], "Before administration, reconcile every local-anesthetic product, concentration, planned volume, route, epinephrine content, organ limitation, and rescue readiness.", [
      ["Connect pH to access and block", "The uncharged fraction crosses lipid membrane, while the protonated form binds within the sodium channel. Inflamed acidic tissue shifts drug toward ionization before membrane entry and can slow or weaken block. Use-dependent binding favors channels that open repeatedly, which explains selective suppression of rapidly firing fibers."],
      ["Distinguish disposition families", "Amide agents such as lidocaine, bupivacaine, and ropivacaine are metabolized mainly in the liver. Ester agents are hydrolyzed largely by plasma cholinesterases and can generate para-aminobenzoic-acid-related metabolites. Patient physiology, not the suffix alone, determines the complete safety plan."],
      ["Match the formulation to the route", "Bupivacaine is not interchangeable across every regional technique. Standard injection labeling contraindicates intravenous regional anesthesia (Bier block) and obstetrical paracervical block. The 0.75% concentration is not recommended for obstetrical anesthesia. Preservative-containing multidose vials should not be used for epidural or caudal anesthesia; verify the exact product rather than assuming every bupivacaine vial is suitable for spinal use."],
      ["Adjust exposure and distrust a negative aspiration", "Consider lower doses and closer toxicity monitoring with moderate or severe hepatic impairment, particularly with repeated bupivacaine dosing. Reduced doses are also needed with impaired cardiovascular function. Aspirate and inject incrementally as appropriate, but a negative aspiration cannot exclude intravascular or intrathecal placement. Continue monitoring after each injection."],
      ["Treat all exposure as one toxicity budget", "Local-anesthetic systemic toxicity is additive across products. Use the lowest effective dose, aspirate where appropriate, administer fractionally when feasible, monitor consciousness, ventilation, rhythm, and circulation, and maintain immediate access to oxygen, resuscitation equipment, skilled personnel, and a LAST kit."],
    ], ["Neutral drug crosses membrane.", "Charged drug binds the channel.", "Amides depend mainly on hepatic metabolism.", "Different local anesthetics still share additive systemic toxicity."], { question: "A procedure uses lidocaine infiltration plus a bupivacaine regional block. How should systemic exposure be considered?", choices: ["As one additive local-anesthetic toxicity burden", "As unrelated because the molecules differ", "Only the bupivacaine dose matters", "Only the lidocaine dose matters"], answer: 0, rationale: "Current bupivacaine labeling states that systemic toxic effects of local anesthetics are additive.", reviewHref: "#local-anesthetic-pharmacology" }),

    lesson("local-anesthetic-toxicity", "Treat Local Anesthetic Systemic Toxicity as a Distinct Arrest Pathway", "periop-last", "LAST can begin with perioral symptoms, tinnitus, altered speech, agitation, or seizure, but severe cardiovascular toxicity can appear abruptly. The rescue sequence differs from standard ACLS because several familiar resuscitation drugs can worsen local-anesthetic cardiotoxicity.", ["Recognition", "Airway", "Lipid emulsion", "Modified ACLS", "Observation"], "Place the ASRA checklist and a complete LAST kit wherever potentially toxic doses are used, then rehearse roles before the emergency occurs.", [
      ["Stop exposure and stabilize physiology", "Stop injection, call for help, secure oxygenation and ventilation, and prevent acidosis, hypoxemia, and hypercapnia that can intensify toxicity. Prefer a benzodiazepine for seizure when available. Do not wait for a complete textbook progression before activating the rescue pathway."],
      ["Give 20 percent lipid emulsion early", "For patients under 70 kg, the ASRA checklist uses an approximately 1.5 mL/kg bolus over 2 to 3 minutes followed by about 0.25 mL/kg/min. For patients over 70 kg, it provides approximately 100 mL over 2 to 3 minutes followed by about 250 mL over 15 to 20 minutes. Persistent instability calls for a repeat bolus and doubled infusion while respecting the checklist maximum of 12 mL/kg."],
      ["Keep the bolus, rate and total separate", "For a 60-kg patient, 1.5 mL/kg gives a 90-mL bolus. The initial 0.25 mL/kg/min infusion is 15 mL/min, or 900 mL/hour. The 12 mL/kg cumulative ceiling is 720 mL, counting boluses and infusion together; it is not an initial bolus. Reassess circulation continuously and obtain expert support for persistent instability."],
      ["Modify the resuscitation medicines", "When epinephrine is needed, start with smaller doses below 1 microgram/kg. Avoid vasopressin, beta blockers, calcium-channel blockers, additional local anesthetic, and other listed aggravating agents. Continue observation after stability because recurrence can occur, and obtain expert or bypass support when the course is refractory."],
      ["Keep propofol separate from rescue lipid", "Propofol is not a substitute for 20% lipid rescue. Delivering the necessary lipid quantity through propofol would expose the patient to a dangerous anesthetic dose."],
      ["Continue treatment and observation", "The ASRA checklist continues lipid for more than 15 minutes after hemodynamic stability, within the cumulative maximum. Observe for 2 hours after seizure or 4 to 6 hours after cardiovascular instability; individualize post-arrest monitoring and reassess any recurrence."],
    ], ["LAST can be neurologic, cardiovascular, or both.", "Early airway control and lipid emulsion matter.", "Use smaller epinephrine doses.", "Avoid vasopressin, beta blockers, calcium-channel blockers, and more local anesthetic."], { question: "A 60 kg patient develops seizure and hypotension immediately after bupivacaine injection. Which lipid dose begins the ASRA pathway?", choices: ["About 1.5 mL/kg of 20 percent lipid over 2 to 3 minutes", "One 10 mL vial of 10 percent lipid", "A 12 mL/kg bolus all at once", "No lipid until one hour of standard ACLS"], answer: 0, rationale: "ASRA recommends an early weight-based 20 percent lipid bolus followed by infusion for patients under 70 kg.", reviewHref: "#local-anesthetic-toxicity" }),

    lesson("induction-agent-selection", "Choose Induction Through Physiology", "periop-induction", "Propofol, etomidate, and ketamine can all produce hypnosis, but their cardiovascular, respiratory, endocrine, analgesic, and recovery effects are different. The correct choice begins with the patient's current physiologic constraint and the airway plan.", ["Propofol", "Etomidate", "Ketamine", "Hemodynamics", "Airway"], "Name the desired onset and recovery, the pressure and airway risk, the analgesic need, and the toxicity that the team is prepared to manage before selecting a drug and dose.", [
      ["Use propofol when rapid control fits the reserve", "Propofol provides rapid hypnosis and titratable recovery but can cause apnea, vasodilation, myocardial depression, and severe hypotension. Reduce and titrate exposure in older, debilitated, hypovolemic, or unstable patients and ensure immediate ventilatory and circulatory support."],
      ["Treat propofol as a contamination-sensitive emulsion", "Use strict aseptic technique and a single-patient preparation. For the cited product, discard unused drug and dedicated tubing at procedure completion or 12 hours, whichever comes first; ICU drug and tubing also require replacement by 12 hours. Ingredients that slow microbial growth do not permit reuse between patients. Check the actual formulation because excipients differ."],
      ["Recognize infusion toxicity and count lipid calories", "New metabolic acidosis, rhabdomyolysis, hyperkalemia or cardiac failure during a propofol infusion raises concern for propofol infusion syndrome. Stop propofol promptly and manage the deterioration with an alternative sedation plan. High doses and prolonged exposure increase risk, but shorter exposure does not exclude it. Monitor lipid tolerance and account for approximately 1.1 kcal per mL in nutrition planning."],
      ["Distinguish food allergy from a propofol reaction", "AAAAI guidance states that egg or soy allergy alone does not require special precautions with propofol; food-protein allergy does not establish allergy to its lipid vehicle. The cited product label nevertheless lists egg, soybean and propofol hypersensitivity as contraindications. Document this difference and have the anesthesia team reconcile the specific history, product and local policy. A previous suspected propofol reaction is a separate concern requiring allergy evaluation; do not dismiss it as a food-allergy myth."],
      ["Keep pediatric indications distinct", "The cited propofol label supports induction from age 3 years and maintenance from age 2 months. These anesthesia indications do not establish pediatric ICU sedation approval. Pediatric ICU use is not a labeled indication and requires a separate evidence-based specialist decision."],
      ["Use etomidate with endocrine honesty", "Etomidate often preserves pressure better during induction but commonly causes injection pain and myoclonus. A single induction dose can reduce cortisol and aldosterone concentrations through adrenal steroid-synthesis inhibition. The clinical tradeoff is limited immediate cardiovascular depression versus a measurable endocrine effect."],
      ["Separate etomidate induction from ongoing care", "Etomidate produces hypnosis without analgesia. Plan pain treatment separately and establish ongoing sedation when paralysis or mechanical ventilation continues. Its labeling warns against prolonged infusion because adrenal suppression can persist. Apnea and airway obstruction remain possible; relative cardiovascular stability does not remove the need for rescue equipment or monitoring."],
      ["Calculate an individualized induction dose", "The labeled usual etomidate induction dose is 0.3 mg/kg IV over 30 to 60 seconds, individualized within the labeled range. For a prescribed 0.3 mg/kg dose in a 70 kg adult, 21 mg requires 10.5 mL of the 2 mg/mL solution. Older patients may need less. This calculation checks a specified order; it does not establish the best dose for every patient."],
      ["Use ketamine without calling it fail-safe", "Ketamine adds analgesia and often increases pressure and pulse. Emergence reactions, hypersalivation, airway obstruction, laryngospasm, and respiratory depression after rapid high dosing remain possible. Catecholamine-depleted patients can develop falling pressure or cardiac decompensation, and coadministration with other CNS depressants increases respiratory risk."],
      ["Check ketamine concentration before injection", "For this labeled product, 100 mg/mL ketamine requires equal-volume dilution with sterile water, normal saline or D5W before IV induction; use immediately. The resulting concentration is 50 mg/mL. A prescribed 100 mg dose therefore occupies 2 mL after dilution. Slow IV administration matters because rapid dosing increases respiratory and pressor effects."],
      ["Screen the procedure and interacting drugs", "Ketamine is contraindicated when a substantial blood-pressure rise would be dangerous. Retained airway reflexes do not prevent aspiration or make ketamine suitable as the sole anesthetic for pharyngeal, laryngeal or bronchial procedures. Theophylline and aminophylline can lower the seizure threshold with ketamine; consider another anesthetic. Reduce stimulation during emergence while continuing monitoring."],
      ["Reassess recurrent ketamine exposure", "Recurrent treatment requires baseline and periodic liver tests. The 2026 label adds detail on biliary injury and urinary obstruction: suspected sclerosing cholangitis warrants immediate discontinuation and specialist assessment; severe urinary symptoms or obstruction warrant discontinuation and urgent urological evaluation. These longer-exposure risks differ from immediate induction complications."],
    ], ["Propofol can depress circulation and ventilation.", "Etomidate suppresses adrenal steroid synthesis.", "Ketamine often stimulates circulation but can still decompensate it.", "Every induction agent requires an airway and rescue plan."], { question: "Which statement best distinguishes etomidate from a physiologically neutral induction drug?", choices: ["It can reduce cortisol and aldosterone concentrations after induction", "It supplies prolonged postoperative analgesia", "It reverses neuromuscular blockade", "It prevents malignant hyperthermia"], answer: 0, rationale: "Current labeling documents adrenal steroid suppression after etomidate induction dosing.", reviewHref: "#induction-agent-selection" }),

    lesson("malignant-hyperthermia", "Recognize and Interrupt Malignant Hyperthermia", "periop-mh", "Malignant hyperthermia is uncontrolled skeletal-muscle calcium release in susceptible patients after volatile anesthetics, succinylcholine, or both. Rising carbon dioxide and rigidity can precede dramatic temperature elevation, so treatment begins from the pattern rather than a late threshold.", ["Triggers", "Hypercapnia", "Dantrolene", "Cooling", "Recurrence"], "Every anesthetizing location using trigger agents needs immediate dantrolene access, a current MHAUS protocol, assigned roles, and a transfer and monitoring pathway.", [
      ["Recognize the hypermetabolic pattern", "Unexpected rapid carbon-dioxide rise despite ventilation, tachycardia, masseter or generalized rigidity, mixed acidosis, hyperkalemia, rhabdomyolysis, and increasing temperature should activate the crisis response. Stop volatile agents and succinylcholine immediately and call for help and the malignant-hyperthermia cart."],
      ["Give dantrolene and oxygen without delay", "Hyperventilate with 100 percent oxygen at high flow, remove or disable volatile delivery, use activated charcoal filters when available, and give dantrolene 2.5 mg/kg intravenously using actual body weight. Repeat rapidly until carbon dioxide, rigidity, rate, temperature, and metabolic instability improve. Under MHAUS guidance, total dosing can exceed 10 mg/kg; persistent nonresponse also requires reassessment for alternative diagnoses."],
      ["Distinguish protocol dosing from product labeling", "The MHAUS crisis pathway starts at 2.5 mg/kg. RYANODEX labeling starts at a minimum of 1 mg/kg and lists a 10 mg/kg cumulative maximum. Escalation beyond that label limit belongs to expert-directed MHAUS crisis management, not an unqualified labeled-dose claim."],
      ["Prepare the product actually stocked", "MHAUS lists 20-mg DANTRIUM or REVONTO vials mixed with 60 mL preservative-free sterile water for injection; RYANODEX uses 250 mg with 5 mL of that diluent. Do not interchange their preparation volumes. RYANODEX forms an opaque orange suspension, must be used within 6 hours, and must not be further diluted or transferred to an infusion container. Verify IV patency and watch for extravasation."],
      ["Separate calcium treatment from calcium-channel blockers", "Avoid calcium-channel blockers during dantrolene treatment of MH because severe hyperkalemia and cardiovascular collapse have been reported. This does not prohibit IV calcium salts when indicated for life-threatening hyperkalemia. Continue ECG, potassium and glucose monitoring while treating the crisis."],
      ["Plan maintenance and a clinical stopping rule", "MHAUS advises dantrolene 1 mg/kg IV every 4 to 6 hours for at least 24 hours, longer if needed. Consider stopping or spacing doses only after 24 hours of metabolic stability, temperature below 38 C, falling CK, resolved rigidity and no ongoing myoglobinuria. Monitor ventilation, swallowing, muscle strength and the IV site; apparent initial recovery is not the end of care."],
      ["Correct complications and prevent recurrence", "MHAUS starts cooling above 39 C, or earlier if temperature is rising rapidly, and stops cooling below 38 C. Concurrently treat hyperkalemia and dysrhythmia, and monitor gases, potassium, glucose, CK, urine, coagulation, kidney function, and core temperature. Continue MHAUS-directed dantrolene and intensive observation because recrudescence can occur after apparent control."],
    ], ["Do not wait for extreme hyperthermia.", "Stop volatile agents and succinylcholine.", "Dantrolene starts at 2.5 mg/kg actual body weight.", "Ongoing monitoring and maintenance treatment address recurrence."], { question: "During volatile anesthesia, end-tidal carbon dioxide rises rapidly despite ventilation and generalized rigidity appears. What is the priority?", choices: ["Stop triggers, hyperventilate with 100 percent oxygen, and give dantrolene", "Wait for a temperature above 42 C", "Give succinylcholine for rigidity", "Use a beta blocker as the only treatment"], answer: 0, rationale: "Early hypercapnia and rigidity after a trigger are enough to initiate the MHAUS crisis pathway.", reviewHref: "#malignant-hyperthermia" }),

    lesson("neuromuscular-blockade-foundations", "Understand Block Before Choosing a Drug", "periop-nmb-foundations", "Neuromuscular blockers prevent skeletal-muscle contraction at nicotinic acetylcholine receptors. Succinylcholine depolarizes the end plate, while nondepolarizing agents competitively block receptor activation. Neither mechanism supplies pain relief, amnesia, or unconsciousness.", ["Motor end plate", "Depolarizing block", "Competitive block", "No sedation", "Recovery"], "Document the indication, agent, expected time course, monitoring site, sedation and analgesia, ventilation, reversal plan, and objective recovery threshold before administration.", [
      ["Read the neuromuscular junction", "Motor neurons release acetylcholine, which binds postsynaptic nicotinic receptors and opens cation channels. A sufficient end-plate potential activates nearby voltage-gated sodium channels and produces muscle contraction. Acetylcholinesterase rapidly terminates the signal."],
      ["Separate depolarizing from competitive block", "Succinylcholine initially activates the receptor and produces fasciculation, then persistent depolarization prevents repeated contraction during phase I block. Rocuronium, vecuronium, cisatracurium, and related agents compete with acetylcholine without activating the receptor."],
      ["Keep consciousness visible when movement disappears", "Paralysis removes movement and respiratory-muscle function but leaves the brain capable of pain, memory, fear, and awareness. Adequate sedation and analgesia must be established before paralysis and maintained independently throughout its effect."],
    ], ["Paralysis is not anesthesia.", "Succinylcholine depolarizes the end plate.", "Nondepolarizers compete with acetylcholine.", "Ventilation and unconsciousness require separate systems."], { question: "A motionless patient receiving rocuronium has an interrupted sedative infusion. What is the immediate concern?", choices: ["Awareness and pain hidden by paralysis", "Automatic analgesia from rocuronium", "Immediate reversal by acetylcholine depletion", "Protection from respiratory arrest"], answer: 0, rationale: "Neuromuscular blockers prevent movement but do not provide sedation, amnesia, or analgesia.", reviewHref: "#neuromuscular-blockade-foundations" }),

    lesson("succinylcholine-safety", "Use Succinylcholine Only After a Risk Screen", "periop-succinylcholine", "Succinylcholine has rapid onset and a short usual duration, but its depolarizing mechanism creates distinctive hyperkalemia, bradycardia, malignant-hyperthermia, myalgia, pressure, pediatric, and prolonged-apnea hazards.", ["Hyperkalemia", "Pediatric warning", "Bradycardia", "Malignant hyperthermia", "Pseudocholinesterase"], "Before use, screen trigger susceptibility, potassium and receptor-upregulation states, age and occult myopathy risk, prior exposure, enzyme history, and the ability to ventilate until recovery.", [
      ["Identify receptor-upregulation risk", "After major burns, denervation, spinal-cord or peripheral-nerve injury, prolonged immobilization, stroke-related paralysis, or neuromuscular disease, extrajunctional receptors can produce dangerous potassium release. The risk evolves over time and cannot be reduced to one universal day count."],
      ["Respect the pediatric boxed warning", "Hyperkalemic rhabdomyolysis, ventricular dysrhythmia, arrest, and death have occurred in children with unrecognized skeletal-muscle myopathy. Reserve pediatric succinylcholine for emergency airway control or situations where the airway must be secured immediately."],
      ["Anticipate bradycardia and pressure effects", "Succinylcholine can cause profound bradycardia or rarely asystole, especially in children and after repeat doses in adults or children. Anticholinergic pretreatment such as atropine may reduce this risk; it does not prevent hyperkalemic arrest. Monitor rhythm and reassess the cause of deterioration. The label also cautions about increased intraocular pressure: with penetrating eye injury or narrow-angle glaucoma, use requires a benefit-risk judgment rather than an assumption of harmless short exposure."],
      ["Support prolonged block rather than guessing", "Plasma-cholinesterase deficiency, pregnancy, liver disease, malnutrition, organophosphates, and selected medicines can prolong block. Continue controlled ventilation and adequate unconsciousness until quantitative recovery. Phase I block is not treated like shallow nondepolarizing block, and reflexive neostigmine can prolong it."],
      ["Confirm phase II before considering reversal", "Prolonged succinylcholine exposure can produce phase II block. The label requires nerve-stimulator confirmation plus at least 20 minutes of spontaneous twitch recovery that has reached a slowly recovering plateau before considering anticholinesterase reversal. This is an anesthesia-specialist decision; phase I misclassification can prolong paralysis. If reversal is selected, provide antimuscarinic protection and observe for recurrent weakness for at least one hour. Continue ventilation and adequate anesthesia as needed."],
    ], ["Screen for receptor upregulation.", "Pediatric elective convenience is not a safe indication.", "Succinylcholine can trigger malignant hyperthermia.", "Prolonged apnea requires ventilation and sedation until recovery."], { question: "A patient with a spinal-cord injury from three weeks ago needs urgent intubation. Which succinylcholine concern is most important?", choices: ["Potentially fatal hyperkalemia from receptor upregulation", "Loss of all local-anesthetic effect", "Direct reversal of sedation", "Elimination by the kidney"], answer: 0, rationale: "Denervation can upregulate extrajunctional receptors and produce an extreme potassium response to succinylcholine.", reviewHref: "#succinylcholine-safety" }),

    lesson("nondepolarizing-agent-selection", "Select Nondepolarizing Block With Recovery in Mind", "periop-nondepolarizing", "The useful onset of rocuronium, the aminosteroid disposition of rocuronium and vecuronium, and the organ-independent Hofmann elimination of cisatracurium create different tradeoffs. Volatile anesthetics, magnesium, antibiotics, temperature, acid-base state, and cumulative dose can all change duration.", ["Rocuronium", "Vecuronium", "Cisatracurium", "Hofmann elimination", "Interactions"], "Choose the agent only after defining required onset, expected procedure length, organ function, interacting exposures, monitoring, reversal availability, and postoperative ventilatory capacity.", [
      ["Use rocuronium for rapid onset with a complete exit plan", "Rocuronium is labeled for rapid-sequence and routine intubation plus skeletal-muscle relaxation during surgery or mechanical ventilation. Its duration varies substantially and can be prolonged by organ dysfunction, volatile anesthetics, magnesium, aminoglycosides, and cumulative dosing."],
      ["Check the population before applying the indication", "The cited U.S. rocuronium label does not recommend rapid-sequence intubation in pediatric patients or rapid-sequence induction for cesarean delivery. These population-specific limitations should accompany the general intubation indication. They are distinct from the label’s contraindication for known hypersensitivity to rocuronium or other neuromuscular blockers. Pediatric routine intubation and surgical maintenance are separate uses; do not infer pediatric rapid-sequence approval from them."],
      ["Reconcile obstetric guidance with labeling", "The OAA/DAS obstetric airway guideline describes rocuronium 1.0 to 1.2 mg/kg with immediately available, preplanned sugammadex as an alternative to succinylcholine. This specialist guidance differs from the cited U.S. product label. Use an obstetric anesthesia protocol that addresses this difference, patient risks, ventilation, and failed-intubation rescue. Reversal availability does not remove the need to maintain oxygenation or prevent aspiration and awareness when intubation fails."],
      ["Recognize aminosteroid disposition", "Rocuronium is eliminated mainly through hepatobiliary pathways with some renal contribution. Vecuronium and its active 3-desacetyl metabolite have biliary and renal elimination. Prolonged exposure, especially in the ICU, can create a different recovery problem from a single surgical dose. Kidney and liver function, cumulative exposure and measured recovery must inform the plan."],
      ["Use cisatracurium when organ-independent elimination fits", "Cisatracurium undergoes Hofmann degradation, reducing dependence on kidney and liver. Temperature and pH still influence degradation, and prolonged use still requires objective monitoring, full sedation, ventilation, and daily indication review."],
      ["Separate parent-drug clearance from metabolite exposure", "Cisatracurium metabolites still require renal and hepatic clearance and can accumulate during prolonged treatment when those organs are impaired. Laudanosine does not cause neuromuscular block, but it has produced seizures in animals; the human concentration-to-CNS-effect relationship is not established. Monitor the degree of blockade and limit unnecessary exposure. Vecuronium differs: its 3-desacetyl metabolite retains neuromuscular-blocking activity and may contribute to prolonged paralysis."],
    ], ["Fast onset does not guarantee fast recovery.", "Aminosteroid clearance can vary with organ function.", "Cisatracurium uses Hofmann elimination.", "Interactions and cumulative dose can prolong every strategy."], { question: "Which agent is most directly distinguished by organ-independent Hofmann elimination?", choices: ["Cisatracurium", "Rocuronium", "Vecuronium", "Succinylcholine"], answer: 0, rationale: "Cisatracurium undergoes Hofmann degradation and is less dependent on kidney and liver clearance.", reviewHref: "#nondepolarizing-agent-selection" }),

    lesson("neuromuscular-blockade-safety", "Make Paralysis a High-Reliability System", "periop-nmb-safety", "A wrong-vial event can cause silent respiratory arrest, and intended paralysis can hide awareness, pain, seizures, pressure injury, and ventilatory failure. Safe use depends on storage engineering and a bedside care bundle, not on memory alone.", ["Segregation", "Paralyzing-agent warning", "Ventilation", "Sedation", "Supportive care"], "Audit procurement, storage, labeling, barcode use, administration, ventilation verification, sedation, eye care, positioning, thrombosis prevention, and daily discontinuation as one system.", [
      ["Prevent accidental selection", "ISMP recommends removing neuromuscular blockers from areas where they are not routinely used. Where needed, secure them in sealed kits or lock-lidded dispensing-cabinet bins. In the pharmacy, separate them from other medicines in lidded refrigerator containers or secure isolated storage. A warning sticker alone does not make unnecessary ward stock appropriate."],
      ["Make removal and labeling deliberate", "Configure dispensing cabinets to require a clinical response, such as the indication or ventilation status, before releasing the drug. Final containers and storage locations need conspicuous respiratory-paralysis and ventilation warnings without hiding essential medication information. ISMP exempts anesthesia-prepared syringes from its auxiliary-warning practice; this is not permission to omit the drug identity."],
      ["Verify before and after administration", "Use pharmacist-verified profiles when possible, barcode scanning, independent checks for indication and ventilation, labeled syringes, and immediate documentation. Use explicit neuromuscular-blocker and paralyzing-agent terminology in storage and safety communication; a muscle-relaxant label alone can obscure respiratory-arrest risk."],
      ["Decide whether ICU blockade is needed", "The 2026 SCCM ARDS guideline conditionally favors neuromuscular blockade when PaO2/FiO2 is below 150 and hypoxemia persists or ventilation targets remain unmet despite sedation. Certainty is low. Prone positioning alone does not require paralysis; assess the actual oxygenation and ventilation problem."],
      ["Choose the regimen for the clinical setting", "For adults with sepsis and moderate-to-severe ARDS, the 2026 Surviving Sepsis Campaign conditionally favors intermittent boluses over continuous infusion, with moderate-certainty evidence. A care bundle for an infusion does not establish that every ventilated patient needs one. Reassess indication and exposure as physiology changes."],
      ["Separate ICU dosing from surgical recovery", "The SCCM ARDS guideline allows either fixed dosing without block-depth monitoring or titration guided by block depth, with very low certainty. This differs from ASA quantitative monitoring for surgical recovery and extubation. Uncertainty about the best ICU monitoring strategy does not remove the requirement for adequate analgesia, sedation and ventilation; paralysis itself supplies none of them."],
      ["Protect the immobilized patient", "Maintain mechanical ventilation, adequate analgesia and sedation, eye lubrication and closure, pressure and skin care, thrombosis prevention, positioning, temperature control, and repeated neuromuscular assessment. Review ongoing need and use the lowest effective exposure."],
    ], ["Sequester neuromuscular blockers.", "Label them as paralyzing agents.", "Verify ventilation before administration.", "Protect consciousness, eyes, skin, lungs, and circulation throughout use."], { question: "A ward does not routinely use neuromuscular blockers. What should its medication-storage review recommend?", choices: ["Remove routine rocuronium stock and use the hospital emergency-access plan", "Beside saline flushes for convenience", "In an unlocked drawer with antibiotics", "At every bedside without barcode controls"], answer: 0, rationale: "ISMP recommends eliminating storage where neuromuscular blockers are not routinely used. Necessary stock elsewhere still requires secure segregation and warnings.", reviewHref: "#neuromuscular-blockade-safety" }),

    lesson("monitoring-and-reversal", "Measure Recovery and Match the Reversal", "periop-monitoring-reversal", "Clinical signs and subjective twitch counts miss residual paralysis. Quantitative adductor-pollicis monitoring establishes block depth, selects the reversal approach, and confirms a train-of-four ratio of at least 0.9 before extubation.", ["Quantitative TOF", "Sugammadex", "Neostigmine", "Antimuscarinic", "Extubation"], "Record the blocker, monitoring site, twitch count or post-tetanic count, quantitative ratio, reversal dose and time, airway status, and final ratio before extubation.", [
      ["Use objective recovery", "The ASA recommends quantitative rather than clinical or qualitative assessment when neuromuscular blockers are used. Monitor at the adductor pollicis and confirm a train-of-four ratio at or above 0.9 before extubation. Head lift, grip, and tidal volume do not reliably exclude residual weakness."],
      ["Dose sugammadex from measured depth", "Sugammadex reverses rocuronium and vecuronium. Current labeling uses actual body weight: 2 mg/kg at reappearance of T2, 4 mg/kg with 1 to 2 post-tetanic counts and no train-of-four twitch, and 16 mg/kg for the labeled immediate-reversal scenario about 3 minutes after 1.2 mg/kg rocuronium. It is not recommended in severe renal impairment and does not reverse succinylcholine or cisatracurium."],
      ["Do not extend sugammadex to every steroidal blocker", "Pancuronium is not an additional BRIDION target. The label directs against reversal of steroidal blockers other than rocuronium or vecuronium, as well as nonsteroidal blockers. Identify the administered agent before selecting reversal; a shared drug class does not establish interchangeability. Maintain ventilation and sedation while an appropriate recovery plan is made."],
      ["Distinguish pediatric reversal from immediate rescue", "BRIDION labeling now includes surgical reversal of rocuronium or vecuronium in pediatric patients from birth. Use the measured-depth regimens rather than an age-based fixed dose. Immediate reversal in children has not been studied; do not present the adult 16 mg/kg rocuronium scenario as established pediatric rescue. The book’s adult-only description does not capture this expanded indication."],
      ["Measure small doses accurately", "For pediatric measurement, BRIDION 100 mg/mL may be diluted with 0.9% sodium chloride to 10 mg/mL: add the 200 mg in a 2 mL vial to 18 mL diluent and use immediately. A 5 kg infant at reappearance of T2 requires 10 mg, or 1 mL of this diluted solution. Independently verify concentration and continue ventilation until airway and breathing recovery are adequate."],
      ["Monitor the patient after reversal", "Continue ventilatory support until breathing and airway protection are adequate, even after TOF recovery. Sugammadex can cause anaphylaxis or marked bradycardia, including cardiac arrest. Monitor closely and treat clinically significant bradycardia with an anticholinergic such as atropine. Underdosing or interacting drugs can permit recurrent weakness; toremifene can delay recovery."],
      ["Respect the studied setting and bleeding context", "BRIDION is labeled for surgical reversal; the label states that reversal after ICU rocuronium or vecuronium use has not been studied. Do not assume that prolonged ICU blockade has the same evidence as surgical dosing. Transient increases in PT/INR and aPTT can occur. Carefully monitor coagulation in known coagulopathy, therapeutic anticoagulation, or other higher-risk situations described in the label. A trial using 4 mg/kg with heparin or low-molecular-weight heparin prophylaxis did not show increased bleeding, but this does not establish safety for every anticoagulant or dose."],
      ["Include contraception in discharge counseling", "After sugammadex, patients using hormonal contraception need an additional nonhormonal method for seven days. This applies to oral and nonoral methods. Document counseling before discharge; the interaction is not limited to contraceptive pills."],
      ["Plan any repeat blockade from the reversal dose", "After up to 4 mg/kg sugammadex, the label specifies at least five minutes before rocuronium 1.2 mg/kg, or four hours before rocuronium 0.6 mg/kg or vecuronium 0.1 mg/kg. Early rocuronium can act later and wear off sooner. Mild or moderate renal impairment extends the latter two regimens to 24 hours; an earlier plan requires the higher rocuronium regimen. After 16 mg/kg sugammadex, a 24-hour interval is suggested. If blockade is needed before the applicable interval, use a suitable nonsteroidal agent with its own contraindications and monitoring."],
      ["Use neostigmine after spontaneous recovery", "ASA considers neostigmine an alternative at minimal blockade, defined by a quantitative TOF ratio of 0.4 to less than 0.9; sugammadex is preferred for deeper rocuronium or vecuronium block. At minimal block, ASA advises no more than 40 micrograms/kg (0.04 mg/kg). A ratio already at least 0.9 does not require pharmacologic antagonism; airway readiness still needs assessment."],
      ["Screen before neostigmine reversal", "BLOXIVERZ is contraindicated with neostigmine hypersensitivity, peritonitis, or mechanical intestinal or urinary obstruction. Coronary disease, arrhythmias, recent acute coronary syndrome and myasthenia gravis require caution. Excessive dosing near recovery can itself cause neuromuscular dysfunction; more reversal drug does not necessarily produce stronger muscles. Maintain ventilation and objective monitoring while the team selects a suitable recovery plan."],
      ["Separate the label ceiling from depth-based dosing", "BLOXIVERZ labeling gives 0.03 to 0.07 mg/kg IV according to recovery and blocker duration, with a maximum total of the lesser of 0.07 mg/kg or 5 mg. This label ceiling is not the recommended dose for every patient with minimal block. Inject over at least one minute. Give atropine or glycopyrrolate before or with neostigmine in a separate syringe; give the antimuscarinic first when bradycardia is present."],
    ], ["Quantitative monitoring replaces guesswork.", "Extubation requires a ratio of at least 0.9.", "Sugammadex dose follows measured depth and agent.", "Neostigmine requires spontaneous recovery and antimuscarinic protection."], { question: "After rocuronium, monitoring shows no train-of-four twitch and two post-tetanic counts. Which labeled sugammadex dose applies?", choices: ["4 mg/kg actual body weight", "2 mg total", "0.07 mg/kg with no antimuscarinic", "16 mg/kg after any blocker"], answer: 0, rationale: "The BRIDION label uses 4 mg/kg at deep block with 1 to 2 post-tetanic counts.", reviewHref: "#monitoring-and-reversal" }),

    lesson("antifibrinolytic-hemostasis", "Use Antifibrinolytics With Route and Renal Discipline", "periop-antifibrinolytic", "Tranexamic acid and aminocaproic acid are lysine analogs that reduce fibrinolysis. Their value depends on a bleeding context in which fibrinolysis matters, while kidney clearance, thrombosis, seizure risk, and route errors define the safety boundary.", ["Tranexamic acid", "Aminocaproic acid", "Plasminogen", "Renal function", "Route safety"], "For every antifibrinolytic, document the evidence-based indication, timing, dose, kidney adjustment, route, thrombotic context, neurologic monitoring, and stop rule.", [
      ["Block fibrinolysis deliberately", "Both agents compete at lysine-binding sites involved in plasminogen and plasmin interaction with fibrin. This stabilizes formed clot but does not replace source control, fibrinogen, platelets, coagulation factors, temperature correction, or treatment of the actual bleeding mechanism."],
      ["Make tranexamic-acid route unmistakable", "The FDA injection indication is short-term bleeding reduction in hemophilia during and after tooth extraction; trauma, other surgical, and obstetric regimens require their own evidence and protocols. Adjust for renal impairment. Clearly label the intravenous route and segregate from neuraxial medicines because accidental intrathecal or epidural administration has caused seizures, dysrhythmia, permanent injury, and death."],
      ["Identify the labeled tranexamic-acid regimen", "For hemophilia tooth extraction, the injection label uses 10 mg/kg actual body weight before extraction with replacement therapy, then 10 mg/kg three to four times daily for 2 to 8 days. Its dose-reduction instructions apply before and after extraction. For example, serum creatinine 3.5 mg/dL falls in the 2.83 to 5.66 mg/dL band: 10 mg/kg once daily. Do not transfer this dental regimen automatically to another bleeding indication."],
      ["Match trauma treatment to the injury clock", "For an adult bleeding or at risk of significant bleeding after trauma, the 2023 European guideline recommends TXA promptly and within 3 hours of injury: 1 g IV over 10 minutes, then 1 g over 8 hours. Do not delay eligible treatment for viscoelastic results. This is a guideline regimen outside the cited U.S. dental indication; continue definitive bleeding control and resuscitation."],
      ["Recognize postpartum bleeding early", "WHO 2025 links first-response treatment to objectively measured blood loss: at least 300 mL with an abnormal hemodynamic sign, or at least 500 mL, whichever occurs first within 24 hours of birth. Abnormal signs include pulse over 100/min, systolic pressure below 100 mmHg, diastolic pressure below 60 mmHg, or shock index over 1. Shock index is pulse divided by systolic pressure. Watch especially closely in the first 2 hours. These criteria support prompt treatment and referral; they do not automatically mandate surgery. Evidence is strongest for facility vaginal births, so interpret cesarean measurements and anesthesia-related vital-sign changes clinically."],
      ["Separate postpartum treatment from routine prevention", "WHO 2025 advises against routine TXA prophylaxis for all vaginal or cesarean births. It does not replace preventive uterotonics. This population-level recommendation preserves a role for clinical judgment when a high-risk patient is already bleeding before formal diagnostic thresholds are met. Treatment of established postpartum hemorrhage remains recommended. Store TXA separately from bupivacaine to reduce catastrophic neuraxial mix-ups."],
      ["Use the postpartum treatment schedule", "WHO recommends early IV TXA alongside standard care for postpartum hemorrhage after vaginal or cesarean birth. Start within 3 hours of birth: 1 g over 10 minutes; repeat 1 g if bleeding persists after 30 minutes or recurs within 24 hours of finishing the first dose. The clock starts at birth, not diagnosis; WHO does not support starting treatment beyond that window. Do not wait to confirm the bleeding source before eligible treatment. Continue uterotonics, resuscitation and source control, and screen for contraindications such as a thromboembolic event during pregnancy. This treatment schedule is not an instruction for routine prophylaxis or an 8-hour trauma infusion."],
      ["Read concentration and infusion rate together", "The current 100 mg/mL tranexamic-acid label lists 0.5 mL/min, never exceeding 1 mL/min, for undiluted administration. Its diluted rates are 5 mL/min at 10 mg/mL or 2.5 mL/min at 20 mg/mL. Each listed rate delivers 50 mg/min; the undiluted upper limit is 100 mg/min. Rapid administration can cause hypotension. Do not mix this product with blood or penicillin-containing solutions."],
      ["Screen beyond the route", "Tranexamic-acid injection is contraindicated with active intravascular clotting, subarachnoid hemorrhage or hypersensitivity. Review prothrombotic medicines, including factor IX complex and anti-inhibitor coagulant concentrates and hormonal contraception. Seizures can occur even with IV use, especially at high surgical doses or increased exposure; renal adjustment and neurologic monitoring remain necessary."],
      ["Use aminocaproic acid only for fibrinolytic bleeding", "Aminocaproic acid is primarily renally eliminated, and clearance approximates endogenous creatinine clearance. Distinguish primary fibrinolysis from disseminated intravascular coagulation before treatment. The label prohibits use with active intravascular clotting and states it must not be used in DIC without concomitant heparin; this is not a routine instruction to treat all DIC with both medicines. Avoid upper-tract hematuria use unless the expected benefit outweighs the risk of obstructing renal or ureteric clots."],
      ["Infuse aminocaproic acid deliberately", "For acute bleeding from increased fibrinolysis, the label suggests 4 to 5 g in 250 mL diluent over the first hour, followed by 1 g/hour in 50 mL diluent, ordinarily for about 8 hours or until controlled. The 250 mg/mL stock requires dilution; do not give it as a rapid undiluted IV injection. Reassess dosing in severe renal failure. With prolonged treatment, monitor CK and muscle symptoms; stop for a CK rise suggesting myopathy."],
    ], ["Antifibrinolytics do not replace source control.", "Tranexamic acid is intravenous only in the injection label.", "Renal dysfunction increases exposure risk.", "Aminocaproic acid requires evidence of fibrinolytic bleeding."], { question: "A tranexamic-acid syringe is found unlabeled beside epidural medications. What is the correct response?", choices: ["Remove it and correct intravenous-route labeling and segregation before use", "Leave it because the route is obvious", "Administer it epidurally", "Mix it with the local anesthetic"], answer: 0, rationale: "Current labeling requires clear intravenous-route labeling because neuraxial administration has caused fatal and serious events.", reviewHref: "#antifibrinolytic-hemostasis" }),
  ],
  references: [
    {"label": "European trauma bleeding guideline, sixth edition (2023): Recommendation 23", "href": "https://doi.org/10.1186/s13054-023-04327-7"},
    {"label": "WHO: Tranexamic acid for postpartum hemorrhage (2017 dosing recommendation)", "href": "https://www.ncbi.nlm.nih.gov/sites/books/NBK493076/"},
    {"label": "WHO/FIGO/ICM: Consolidated postpartum hemorrhage guideline (2025)", "href": "https://www.who.int/publications/i/item/9789240115637"},

    { label: "OAA/DAS: Obstetric difficult and failed intubation guideline (2015)", href: "https://das.uk.com/guidelines/obstetric_airway_guidelines_2015/" },
    { label: "SCCM 2016 Sustained Neuromuscular Blockade: Eye Care and Supportive Safeguards", href: "https://pubmed.ncbi.nlm.nih.gov/27755068/" },
    {"label": "SCCM 2026 Neuromuscular Blockade in Adult ARDS", "href": "https://www.sccm.org/clinical-resources/guidelines/guidelines/guidelines-for-the-administration-of-neuromuscular-blockade"},
    {"label": "Surviving Sepsis Campaign 2026 Adult Recommendations", "href": "https://sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026"},
    {"label": "AAAAI: Soy and Egg Allergy and Propofol", "href": "https://www.aaaai.org/tools-for-the-public/conditions-library/allergies/soy-egg-anesthesia"},
    { label: "MHAUS: Dantrolene administration after an MH event", href: "https://www.mhaus.org/healthcare-professionals/mhaus-recommendations/dantrolene-administration-after-an-mh-event/" },
    { label: "DailyMed: RYANODEX prescribing information", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=8f7b3ac0-604d-4c78-b545-5e0f8ea3d698&type=display" },
    { label: "Saudi Critical Care Society and SSAI: Contextualized stress-ulcer prophylaxis guideline (2026)", href: "https://onlinelibrary.wiley.com/doi/10.1111/aas.70201" },
    { label: "AHA. 2025 special circumstances of resuscitation: local anesthetic poisoning", href: "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-and-pediatric-special-circumstances-of-resuscitation" },
    { label: "SCCM and ASHP: Prevention of Stress-Related Upper Gastrointestinal Bleeding in Critically Ill Adults", href: "https://www.sccm.org/clinical-resources/guidelines/guidelines/sccm-ashp-guideline-prevention-of-ugib" },
    { label: "ASRA: Checklist for Treatment of Local Anesthetic Systemic Toxicity", href: "https://asra.com/news-publications/asra-updates/blog-landing/guidelines/2020/11/01/checklist-for-treatment-of-local-anesthetic-systemic-toxicity" },
    { label: "MHAUS: Managing a Malignant Hyperthermia Crisis", href: "https://www.mhaus.org/healthcare-professionals/managing-a-crisis/" },
    { label: "ASA: Practice Guidelines for Monitoring and Antagonism of Neuromuscular Blockade", href: "https://doi.org/10.1097/ALN.0000000000004379" },
    { label: "ISMP: 2026-2027 Targeted Medication Safety Best Practices for Hospitals", href: "https://online.ecri.org/hubfs/ISMP/Resources/ISMP_TargetedMedicationSafetyBestPractices_Hospitals.pdf" },
    { label: "DailyMed: Bupivacaine Hydrochloride Injection", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3c0f567f-b7f8-4ee8-bfb2-61cd82550498" },
    { label: "DailyMed: Succinylcholine Chloride Injection", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b94ff0a2-a770-47a6-e053-2995a90a7fbc" },
    { label: "DailyMed: Rocuronium Bromide Injection", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=04c9812d-5aa3-4949-ad02-c618028f1bb0" },
    { label: "DailyMed: Cisatracurium besylate prescribing information", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1c6a8b98-deac-4e25-b4a0-5d0af5090281" },
    { label: "DailyMed: Vecuronium bromide prescribing information", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=dff452e8-71e7-437e-bed0-3e1bd9441bc6" },
    { label: "Caldwell et al. Vecuronium and 3-desacetylvecuronium in human volunteers (1994)", href: "https://pubmed.ncbi.nlm.nih.gov/7932174/" },
    { label: "DailyMed: BRIDION", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=37276948-ff0f-e0ab-e063-6394a90a0973&type=display" },
    { label: "DailyMed: Neostigmine Methylsulfate Injection", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d2f55643-2b0d-4ef9-a9d8-b7138b314372" },
    { label: "DailyMed: Propofol Injectable Emulsion", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=28d7ba00-f824-4e55-139a-03f509c099db" },
    { label: "DailyMed: Etomidate Injection", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=75bf0494-7cb9-4e8a-8edd-af62f035d236" },
    { label: "DailyMed: Ketamine Hydrochloride Injection", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b96a0a23-3ca0-4a92-bd8b-1e9921931772" },
    { label: "DailyMed: Tranexamic Acid Injection", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=246a3c6c-a7fb-45c7-9509-49a48a5bdcc6" },
    { label: "DailyMed: Aminocaproic Acid Injection", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4629d585-134b-a479-e063-6294a90a3432" },
  ],
  questionBank: perioperativeCriticalCarePharmacologyQuestionBank,
};


// Reconcile complete local-anesthetic teaching with product labels and rescue guidance.
Object.assign(perioperativeCriticalCarePharmacologyModule.submodules.find((lesson) => lesson.slug === "local-anesthetic-pharmacology"), {
  "slug": "local-anesthetic-pharmacology",
  "title": "Map Local Anesthetic Effect and Disposition",
  "visual": "periop-local-anesthetic",
  "summary": "Local anesthetics suppress nerve conduction mainly through voltage-gated sodium-channel blockade. For commonly used injectable agents, ionization affects membrane access and channel binding. Tissue pH, lipid solubility, protein binding, perfusion, formulation and metabolism shape effect and systemic risk.",
  "concepts": [
    "Sodium channels",
    "Ionization",
    "Amides",
    "Esters",
    "Additive toxicity"
  ],
  "application": "Before administration, reconcile every local-anesthetic product, concentration, planned volume, route, epinephrine content, organ limitation, and rescue readiness.",
  "lesson": [
    {
      "heading": "Connect pH to access and block",
      "body": "The uncharged fraction crosses lipid membrane, while the protonated form binds within the sodium channel. Inflamed acidic tissue shifts drug toward ionization before membrane entry and can slow or weaken block. Use-dependent binding favors channels that open repeatedly, which explains selective suppression of rapidly firing fibers."
    },
    {
      "heading": "Distinguish disposition families",
      "body": "Lidocaine, bupivacaine and ropivacaine are amide agents whose clearance depends mainly on hepatic metabolism. Many ester agents undergo plasma cholinesterase hydrolysis; chloroprocaine produces a chlorinated aminobenzoic-acid metabolite. These family patterns do not mean that every agent has the same clearance or that an ester is automatically safe in liver disease: the enzyme is synthesized in the liver, and chloroprocaine labeling calls for caution in hepatic disease. Check the exact agent and the patient rather than using the suffix alone."
    },
    {
      "heading": "Connect onset, potency and duration to the tissue",
      "body": "The proportion of uncharged drug helps determine membrane entry and onset; acidic inflamed tissue can reduce effective access. Greater lipid solubility generally increases potency, while greater protein binding tends to prolong block. Tissue blood flow and the agent's vasoactivity also affect how rapidly drug leaves the injection site. Epinephrine can reduce local absorption and prolong effect, but its own cardiovascular effects and product-specific precautions must be assessed. None of these properties establishes a safe dose by itself."
    },
    {
      "heading": "Match the formulation to the route",
      "body": "Standard bupivacaine injection labeling contraindicates intravenous regional anesthesia (Bier block) and obstetrical paracervical block; cardiac arrest and death have occurred with Bier block. The 0.75% concentration is not recommended for obstetrical anesthesia. Avoid preservative-containing multidose vials for epidural or caudal anesthesia. The standard injection product reviewed here is not for intrathecal use; verify the exact formulation and its labeled route rather than substituting it for a spinal preparation."
    },
    {
      "heading": "Adjust exposure and distrust a negative aspiration",
      "body": "Consider lower doses and closer toxicity monitoring with moderate or severe hepatic impairment, particularly with repeated bupivacaine dosing. Reduced doses are also needed with impaired cardiovascular function. Aspirate and inject incrementally as appropriate, but a negative aspiration cannot exclude intravascular or intrathecal placement. Continue monitoring after each injection."
    },
    {
      "heading": "Reconcile lidocaine across formulations",
      "body": "The 4% topical-solution label requires counting lidocaine from every formulation used together. Topical exposure is not a separate allowance, and that solution must never be injected. Verify the exact products, timing, absorption site and protocol before combining routes; a total-milligram calculation alone does not establish safety or authorize concurrent IV and regional treatment."
    },
    {
      "heading": "Distinguish epinephrine from the combination product",
      "body": "Concentrated topical epinephrine 1 mg/mL has been mistaken for local anesthetic with dilute epinephrine, causing fatal injections. Verify the full drug name, concentration and route before preparation and again before administration. A lidocaine/epinephrine product containing epinephrine 0.01 mg/mL is not interchangeable with epinephrine 1 mg/mL."
    },
    {
      "heading": "Treat all exposure as one toxicity budget",
      "body": "Local-anesthetic systemic toxic effects are additive across products, including different agents and injection sites. Use the lowest effective dose with appropriate aspiration, fractional injection and continuous observation of consciousness, ventilation, rhythm and circulation. Oxygen, resuscitation equipment, skilled personnel and the LAST kit must be immediately available. Adding milligram amounts helps reconcile exposure but does not establish a universal safe combined dose or authorize a mixture; standard bupivacaine labeling does not recommend mixing or prior or intercurrent use of other local anesthetics because clinical data are insufficient."
    },
    {
      "heading": "Keep liposomal bupivacaine product-specific",
      "body": "EXPAREL is a liposomal suspension and cannot be substituted dose-for-dose for other bupivacaine products, even at the same stated strength. Do not admix it with lidocaine or other non-bupivacaine local anesthetics: direct contact can release unencapsulated bupivacaine rapidly. Its label permits administration after local lidocaine only after a delay of at least 20 minutes. When bupivacaine HCl is admixed or injected immediately beforehand, its milligram dose must not exceed one-half the EXPAREL dose. Follow the indication-specific regimen and the warning to avoid additional local anesthetics within 96 hours afterward; a planned immediate-release block in the labeled perioperative regimen is not permission for unrestricted subsequent dosing."
    },
    {
      "heading": "Recognize a separate oxidant complication",
      "body": "Local anesthetics, including benzocaine and lidocaine, can cause methemoglobinemia as well as sodium-channel toxicity. Cyanosis, dyspnea, fatigue or an oxygen-saturation discrepancy after exposure needs urgent assessment, even when the presentation does not follow the usual LAST pattern. Stop the implicated oxidizing medicine and arrange oxygen and definitive treatment through the clinical team. G6PD deficiency, cardiopulmonary disease, young infants and other oxidizing drugs can increase vulnerability; methylene-blue selection also requires assessment of G6PD status. Lipid rescue for severe LAST does not replace the methemoglobinemia treatment pathway."
    }
  ],
  "keyPoints": [
    "Neutral drug crosses membrane.",
    "Charged drug binds the channel.",
    "Clearance and route precautions depend on the exact agent and formulation.",
    "Different local anesthetics still share additive systemic toxicity."
  ],
  "check": {
    "question": "A procedure uses lidocaine infiltration plus a bupivacaine regional block. How should systemic exposure be considered?",
    "choices": [
      "As one additive local-anesthetic toxicity burden",
      "As unrelated because the molecules differ",
      "Only the bupivacaine dose matters",
      "Only the lidocaine dose matters"
    ],
    "answer": 0,
    "rationale": "Systemic toxic effects of lidocaine and bupivacaine are additive, so both exposures belong in the assessment. Different molecules do not create independent toxicity allowances. Counting only bupivacaine misses lidocaine exposure; counting only lidocaine misses bupivacaine. Review the actual products, doses, routes, timing and patient factors, and do not treat dose arithmetic as authorization to combine them.",
    "reviewHref": "#local-anesthetic-pharmacology"
  }
});
Object.assign(perioperativeCriticalCarePharmacologyModule.submodules.find((lesson) => lesson.slug === "local-anesthetic-toxicity"), {
  "slug": "local-anesthetic-toxicity",
  "title": "Treat Local Anesthetic Systemic Toxicity as a Distinct Arrest Pathway",
  "visual": "periop-last",
  "summary": "LAST can begin with perioral symptoms, tinnitus, altered speech, agitation, or seizure, but severe cardiovascular toxicity can appear abruptly. The rescue sequence differs from standard ACLS because several familiar resuscitation drugs can worsen local-anesthetic cardiotoxicity.",
  "concepts": [
    "Recognition",
    "Airway",
    "Lipid emulsion",
    "Modified ACLS",
    "Observation"
  ],
  "application": "Place the ASRA checklist and a complete LAST kit wherever potentially toxic doses are used, then rehearse roles before the emergency occurs.",
  "lesson": [
    {
      "heading": "Stop exposure and stabilize physiology",
      "body": "Stop injection, call for help, secure oxygenation and ventilation, and prevent acidosis, hypoxemia, and hypercapnia that can intensify toxicity. Prefer a benzodiazepine for seizure when available. Do not wait for a complete textbook progression before activating the rescue pathway."
    },
    {
      "heading": "Give 20 percent lipid emulsion early",
      "body": "For patients under 70 kg, the ASRA checklist uses an approximately 1.5 mL/kg bolus over 2 to 3 minutes followed by about 0.25 mL/kg/min. For patients over 70 kg, it provides approximately 100 mL over 2 to 3 minutes followed by about 250 mL over 15 to 20 minutes. Persistent instability calls for a repeat bolus and doubled infusion while respecting the checklist maximum of 12 mL/kg. These are ASRA checklist regimens rather than a proven optimal dose for every patient; use the current rescue protocol with continuous reassessment."
    },
    {
      "heading": "Keep the bolus, rate and total separate",
      "body": "For a 60-kg patient, 1.5 mL/kg gives a 90-mL bolus. The initial 0.25 mL/kg/min infusion is 15 mL/min, or 900 mL/hour. The 12 mL/kg cumulative ceiling is 720 mL, counting boluses and infusion together; it is not an initial bolus. Reassess circulation continuously and obtain expert support for persistent instability."
    },
    {
      "heading": "Modify the resuscitation medicines",
      "body": "When epinephrine is needed, ASRA prefers smaller doses and specifies an initial dose no greater than 1 microgram/kg. Avoid vasopressin, beta blockers, calcium-channel blockers and additional local anesthetics during LAST resuscitation. These instructions modify the medication pathway while airway support, circulation and indicated resuscitation continue. Obtain early expert and extracorporeal-support consultation for refractory cardiogenic shock."
    },
    {
      "heading": "Keep propofol separate from rescue lipid",
      "body": "Propofol is not a substitute for 20% lipid rescue: delivering the rescue lipid quantity through propofol would produce a dangerous anesthetic exposure. A benzodiazepine is preferred for LAST-associated seizure. If only propofol is available for seizure control, the ASRA checklist specifies low doses, such as 20 mg increments, with attention to its circulatory depressant effects. That limited seizure use is a different purpose from lipid rescue."
    },
    {
      "heading": "Continue treatment and observation",
      "body": "After hemodynamic stability, continue lipid for at least 15 minutes while respecting the cumulative maximum. The ASRA checklist specifies observation for 2 hours after seizure and 4 to 6 hours after cardiovascular instability; post-arrest monitoring is individualized. Recurrence or persistent abnormalities requires reassessment rather than automatic discharge when an interval ends."
    },
    {
      "heading": "Escalate persistent conduction or circulatory toxicity",
      "body": "The 2025 AHA guideline considers sodium bicarbonate reasonable for life-threatening wide-complex tachycardia caused by local-anesthetic toxicity. It also considers extracorporeal life support reasonable for refractory cardiogenic shock. These are indication-specific additions to airway, circulation and lipid rescue, supported largely by limited clinical reports and experimental evidence. Seek toxicology and resuscitation expertise rather than delaying initial support while arranging an advanced treatment."
    }
  ],
  "keyPoints": [
    "LAST can be neurologic, cardiovascular, or both.",
    "Early airway control and lipid emulsion matter.",
    "Use smaller epinephrine doses.",
    "Avoid vasopressin, beta blockers, calcium-channel blockers, and more local anesthetic."
  ],
  "check": {
    "question": "A 60 kg patient develops seizure and hypotension immediately after bupivacaine injection. Which lipid dose begins the ASRA pathway?",
    "choices": [
      "About 1.5 mL/kg of 20 percent lipid over 2 to 3 minutes",
      "One 10 mL vial of 10 percent lipid",
      "A 12 mL/kg bolus all at once",
      "No lipid until one hour of standard ACLS"
    ],
    "answer": 0,
    "rationale": "For this 60-kg patient, 1.5 mL/kg gives a 90-mL bolus of 20% lipid over about 2 to 3 minutes, followed by the infusion pathway. A 10-mL vial of 10% lipid is the wrong concentration and quantity. The 12 mL/kg figure is a cumulative maximum across boluses and infusion, not a single bolus. Waiting an hour delays early rescue; LAST resuscitation uses the checklist modifications alongside immediate airway and circulatory support.",
    "reviewHref": "#local-anesthetic-toxicity"
  }
});
perioperativeCriticalCarePharmacologyModule.references.push(...[
  {
    "label": "Taylor and McLeod: Basic pharmacology of local anaesthetics (2020)",
    "href": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7808030/"
  },
  {
    "label": "DailyMed: Chloroprocaine disposition and hepatic precautions",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=823a2335-05d0-4391-b612-316bfee9b1ea"
  },
  {
    "label": "DailyMed: Lidocaine topical solution 4%, combined exposure and route",
    "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8f79b023-9bd1-4bd6-8fd0-f9efe88abec0"
  },
  {
    "label": "ISMP Canada: Prevent inadvertent injection of topical epinephrine",
    "href": "https://www.ismp-canada.org/education/webinars/20100623_Epinephrine/"
  },
  {
    "label": "DailyMed: EXPAREL formulation and compatibility precautions",
    "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=bb5a9e59-0f51-11df-8a39-0800200c9a66"
  },
  {
    "label": "ASRA: Original LAST checklist (2020, version 1.1)",
    "href": "https://asra.com/docs/default-source/guidelines-articles/local-anesthetic-systemic-toxicity-rgb.pdf?sfvrsn=33b348e_2"
  }
].filter((reference) => !perioperativeCriticalCarePharmacologyModule.references.some((existing) => existing.href === reference.href)));

// Retain the existing cumulative origins when adding reviewed local-anesthetic cases.
perioperativeCriticalCarePharmacologyModule.cumulativeQuestionIds = [
  "periop-pediatric-reversal-1",
  "periop-nmb-exit-plan",
  "periop-local-hepatic",
  "periop-antifib-dilution",
  "periop-pph-prophylaxis"
];


// Reconcile induction and MH teaching with exact labels and specialist guidance.
Object.assign(perioperativeCriticalCarePharmacologyModule.submodules.find((lesson) => lesson.slug === "induction-agent-selection"), {
  "slug": "induction-agent-selection",
  "title": "Choose Induction Through Physiology",
  "visual": "periop-induction",
  "summary": "Propofol, etomidate, and ketamine can all produce hypnosis, but their cardiovascular, respiratory, endocrine, analgesic, and recovery effects are different. The correct choice begins with the patient's current physiologic constraint and the airway plan.",
  "concepts": [
    "Propofol",
    "Etomidate",
    "Ketamine",
    "Hemodynamics",
    "Airway"
  ],
  "application": "Name the desired onset and recovery, the pressure and airway risk, the analgesic need, and the toxicity that the team is prepared to manage before selecting a drug and dose.",
  "lesson": [
    {
      "heading": "Separate local block from general anesthesia",
      "body": "Voltage-gated sodium-channel blockade explains local anesthetic interruption of nerve conduction; it is not a shared explanation for every general anesthetic. Ketamine primarily antagonizes NMDA glutamate receptors. Propofol labeling describes enhanced inhibitory GABA-A receptor function as its proposed mechanism. Drug selection must still account for the observed clinical effects and patient physiology rather than mechanism alone."
    },
    {
      "heading": "Use propofol when rapid control fits the reserve",
      "body": "Propofol provides rapid hypnosis and titratable recovery but can cause apnea, vasodilation, myocardial depression, and severe hypotension. Reduce and titrate exposure in older, debilitated, hypovolemic, or unstable patients and ensure immediate ventilatory and circulatory support."
    },
    {
      "heading": "Treat propofol as a contamination-sensitive emulsion",
      "body": "Use strict aseptic technique and a single-patient preparation. For the cited product, discard unused drug and dedicated tubing at procedure completion or 12 hours, whichever comes first; ICU drug and tubing also require replacement by 12 hours. Ingredients that slow microbial growth do not permit reuse between patients. Check the actual formulation because excipients differ."
    },
    {
      "heading": "Inspect the emulsion and delivery system",
      "body": "Shake propofol before use and reject an emulsion with phase separation, large droplets or persistent aggregation. Follow the exact product label for syringe, vial and tubing discard times; the Hospira product reviewed here uses a 12-hour limit from opening, with earlier disposal when the anesthetic procedure ends. Its labeling permits filters of at least 5 microns unless compatibility with a smaller filter has been demonstrated. Assess sedation, circulation, breathing and lipid clearance during treatment; the lipid calories do not replace a complete nutrition prescription."
    },
    {
      "heading": "Recognize infusion toxicity and count lipid calories",
      "body": "New metabolic acidosis, rhabdomyolysis, hyperkalemia or cardiac failure during a propofol infusion raises concern for propofol infusion syndrome. Stop propofol promptly and manage the deterioration with an alternative sedation plan. High doses and prolonged exposure increase risk, but shorter exposure does not exclude it. Monitor lipid tolerance and account for approximately 1.1 kcal per mL in nutrition planning."
    },
    {
      "heading": "Distinguish food allergy from a propofol reaction",
      "body": "AAAAI guidance states that egg or soy allergy alone does not require special precautions with propofol; food-protein allergy does not establish allergy to its lipid vehicle. The cited product label nevertheless lists egg, soybean and propofol hypersensitivity as contraindications. Document this difference and have the anesthesia team reconcile the specific history, product and local policy. A previous suspected propofol reaction is a separate concern requiring allergy evaluation; do not dismiss it as a food-allergy myth."
    },
    {
      "heading": "Keep pediatric indications distinct",
      "body": "The cited propofol label supports induction from age 3 years and maintenance from age 2 months. These anesthesia indications do not establish pediatric ICU sedation approval. Pediatric ICU use is not a labeled indication and requires a separate evidence-based specialist decision."
    },
    {
      "heading": "Use etomidate with endocrine honesty",
      "body": "Etomidate often preserves pressure better during induction but commonly causes injection pain and myoclonus. A single induction dose can reduce cortisol and aldosterone concentrations through adrenal steroid-synthesis inhibition. The clinical tradeoff is limited immediate cardiovascular depression versus a measurable endocrine effect. The book describes cortisol suppression for up to 24 hours; this product label describes reduced cortisol and aldosterone for approximately 6 to 8 hours. Neither duration is a guaranteed patient-specific recovery time. Follow the clinical response, particularly during severe stress, and do not equate one induction dose with proven mortality harm."
    },
    {
      "heading": "Separate etomidate induction from ongoing care",
      "body": "Etomidate produces hypnosis without analgesia. Plan pain treatment separately and establish ongoing sedation when paralysis or mechanical ventilation continues. Its labeling warns against prolonged infusion because adrenal suppression can persist. Apnea and airway obstruction remain possible; relative cardiovascular stability does not remove the need for rescue equipment or monitoring."
    },
    {
      "heading": "Calculate an individualized induction dose",
      "body": "The labeled usual etomidate induction dose is 0.3 mg/kg IV over 30 to 60 seconds, individualized within the labeled 0.2 to 0.6 mg/kg range. For a prescribed 0.3 mg/kg dose in a 70 kg adult, 21 mg requires 10.5 mL of the 2 mg/mL solution. Older patients may need less. This calculation checks a specified order; it does not establish the best dose for every patient."
    },
    {
      "heading": "Check etomidate population limits",
      "body": "The cited etomidate label lacks adequate induction-dose data below age 10 and does not recommend that use. It also does not recommend obstetric use, including cesarean delivery, because data are insufficient. Known hypersensitivity is a contraindication. Older patients may need lower doses and can still develop cardiac depression, particularly with hypertension; relative cardiovascular stability is not a guarantee in severe trauma or hypovolemia."
    },
    {
      "heading": "Use ketamine without calling it fail-safe",
      "body": "Ketamine adds analgesia and often increases pressure and pulse. Emergence reactions, hypersalivation, airway obstruction, laryngospasm, and respiratory depression after rapid high dosing remain possible. Catecholamine-depleted patients can develop falling pressure or cardiac decompensation, and coadministration with other CNS depressants increases respiratory risk."
    },
    {
      "heading": "Check ketamine concentration before injection",
      "body": "For this labeled product, 100 mg/mL ketamine requires equal-volume dilution with sterile water, normal saline or D5W before IV induction; use immediately. The resulting concentration is 50 mg/mL. A prescribed 100 mg dose therefore occupies 2 mL after dilution. Slow IV administration matters because rapid dosing increases respiratory and pressor effects."
    },
    {
      "heading": "Screen the procedure and interacting drugs",
      "body": "Ketamine is contraindicated when a substantial blood-pressure rise would be dangerous. Retained airway reflexes do not prevent aspiration or make ketamine suitable as the sole anesthetic for pharyngeal, laryngeal or bronchial procedures. Theophylline and aminophylline can lower the seizure threshold with ketamine; consider another anesthetic. Reduce stimulation during emergence while continuing monitoring."
    },
    {
      "heading": "Plan emergence and neurologic monitoring",
      "body": "Ketamine labeling describes emergence reactions that may be reduced with lower recommended doses plus an IV benzodiazepine during anesthesia. Balance that option against additive respiratory depression; a fixed percentage benefit is not assured. Minimize unnecessary stimulation while maintaining observation. For elevated intracranial pressure, the label calls for a monitored setting and frequent neurologic assessments; this warning is not itself a universal contraindication."
    },
    {
      "heading": "Reassess recurrent ketamine exposure",
      "body": "Recurrent treatment requires baseline and periodic liver tests. The 2026 label adds detail on biliary injury and urinary obstruction: suspected sclerosing cholangitis warrants immediate discontinuation and specialist assessment; severe urinary symptoms or obstruction warrant discontinuation and urgent urological evaluation. These longer-exposure risks differ from immediate induction complications."
    }
  ],
  "keyPoints": [
    "Propofol can depress circulation and ventilation.",
    "Etomidate suppresses adrenal steroid synthesis.",
    "Ketamine often stimulates circulation but can still decompensate it.",
    "Every induction agent requires an airway and rescue plan."
  ],
  "check": {
    "question": "Which statement best distinguishes etomidate from a physiologically neutral induction drug?",
    "choices": [
      "It can reduce cortisol and aldosterone concentrations after induction",
      "It supplies prolonged postoperative analgesia",
      "It reverses neuromuscular blockade",
      "It prevents malignant hyperthermia"
    ],
    "answer": 0,
    "rationale": "Etomidate can reduce cortisol and aldosterone after an induction dose by inhibiting adrenal steroid synthesis. It has no analgesic activity, so it does not supply prolonged postoperative pain relief. It is a hypnotic rather than a neuromuscular-block reversal agent. MHAUS lists it as nontriggering, but this does not mean it prevents MH caused by a separate triggering drug.",
    "reviewHref": "#induction-agent-selection"
  }
});
Object.assign(perioperativeCriticalCarePharmacologyModule.submodules.find((lesson) => lesson.slug === "malignant-hyperthermia"), {
  "slug": "malignant-hyperthermia",
  "title": "Recognize and Interrupt Malignant Hyperthermia",
  "visual": "periop-mh",
  "summary": "Malignant hyperthermia is uncontrolled skeletal-muscle calcium release in susceptible patients after volatile anesthetics, succinylcholine, or both. Rising carbon dioxide and rigidity can precede dramatic temperature elevation, so treatment begins from the pattern rather than a late threshold.",
  "concepts": [
    "Triggers",
    "Hypercapnia",
    "Dantrolene",
    "Cooling",
    "Recurrence"
  ],
  "application": "Every anesthetizing location using trigger agents needs immediate dantrolene access, a current MHAUS protocol, assigned roles, and a transfer and monitoring pathway.",
  "lesson": [
    {
      "heading": "Identify the specific triggers",
      "body": "Sevoflurane, desflurane and isoflurane are triggering volatile anesthetics; succinylcholine is also a trigger. Nitrous oxide is an inhaled nonvolatile agent and is not an MH trigger. Local anesthetics, propofol, etomidate and ketamine are also nontriggering for MH. Nontriggering does not mean free of other anesthetic risks."
    },
    {
      "heading": "Recognize the hypermetabolic pattern",
      "body": "Unexpected rapid carbon-dioxide rise despite ventilation, tachycardia, masseter or generalized rigidity, mixed acidosis, hyperkalemia, rhabdomyolysis, and increasing temperature should activate the crisis response. Stop volatile agents and succinylcholine immediately and call for help and the malignant-hyperthermia cart."
    },
    {
      "heading": "Give dantrolene and oxygen without delay",
      "body": "Hyperventilate with 100 percent oxygen at high flow, remove or disable volatile delivery, use activated charcoal filters when available, and give dantrolene 2.5 mg/kg intravenously using actual body weight. Repeat rapidly until carbon dioxide, rigidity, rate, temperature, and metabolic instability improve. Under MHAUS guidance, total dosing can exceed 10 mg/kg; persistent nonresponse also requires reassessment for alternative diagnoses. MHAUS recommends true body weight rather than ideal weight; this is an expert dosing recommendation, not a comparative trial result."
    },
    {
      "heading": "Distinguish protocol dosing from product labeling",
      "body": "The MHAUS crisis pathway starts at 2.5 mg/kg. RYANODEX labeling starts at a minimum of 1 mg/kg and lists a 10 mg/kg cumulative maximum. Escalation beyond that label limit belongs to expert-directed MHAUS crisis management, not an unqualified labeled-dose claim."
    },
    {
      "heading": "Prepare the product actually stocked",
      "body": "MHAUS lists 20-mg DANTRIUM or REVONTO vials mixed with 60 mL preservative-free sterile water for injection; RYANODEX uses 250 mg with 5 mL of that diluent. Do not interchange their preparation volumes. RYANODEX forms an opaque orange suspension, must be used within 6 hours, and must not be further diluted or transferred to an infusion container. Verify IV patency and watch for extravasation."
    },
    {
      "heading": "Separate calcium treatment from calcium-channel blockers",
      "body": "Avoid calcium-channel blockers during dantrolene treatment of MH because severe hyperkalemia and cardiovascular collapse have been reported. This does not prohibit IV calcium salts when indicated for life-threatening hyperkalemia. Continue ECG, potassium and glucose monitoring while treating the crisis."
    },
    {
      "heading": "Plan maintenance and a clinical stopping rule",
      "body": "MHAUS advises dantrolene 1 mg/kg IV every 4 to 6 hours for at least 24 hours, longer if needed. Consider stopping or spacing doses only after 24 hours of metabolic stability, temperature below 38 C, falling CK, resolved rigidity and no ongoing myoglobinuria. Monitor ventilation, swallowing, muscle strength and the IV site; apparent initial recovery is not the end of care."
    },
    {
      "heading": "Correct complications and prevent recurrence",
      "body": "MHAUS starts cooling above 39 C, or earlier if temperature is rising rapidly, and stops cooling below 38 C. Concurrently treat hyperkalemia and dysrhythmia, and monitor gases, potassium, glucose, CK, urine, coagulation, kidney function, and core temperature. Continue MHAUS-directed dantrolene and intensive observation because recrudescence can occur after apparent control. Once stable, transfer to a postanesthesia care or intensive care setting for at least 24 hours of observation; ongoing instability requires continued crisis care."
    }
  ],
  "keyPoints": [
    "Do not wait for extreme hyperthermia.",
    "Stop volatile agents and succinylcholine.",
    "The MHAUS crisis dose starts at 2.5 mg/kg actual body weight.",
    "Ongoing monitoring and maintenance treatment address recurrence."
  ],
  "check": {
    "question": "During volatile anesthesia, end-tidal carbon dioxide rises rapidly despite ventilation and generalized rigidity appears. What is the priority?",
    "choices": [
      "Stop triggers, hyperventilate with 100 percent oxygen, and give dantrolene",
      "Wait for a temperature above 42 C",
      "Give succinylcholine for rigidity",
      "Use a beta blocker as the only treatment"
    ],
    "answer": 0,
    "rationale": "Hypercapnia and generalized rigidity after a volatile trigger warrant immediate MH treatment: stop triggering agents, call for help, provide 100% oxygen and give dantrolene. Waiting for 42 C delays treatment. Succinylcholine is itself an MH trigger and must not be given to treat this rigidity. Treating heart rate alone does not interrupt the calcium-driven hypermetabolic crisis.",
    "reviewHref": "#malignant-hyperthermia"
  }
});
perioperativeCriticalCarePharmacologyModule.references.push(...[
  {
    "label": "MHAUS: Safe and unsafe anesthetics",
    "href": "https://www.mhaus.org/healthcare-professionals/be-prepared/safe-and-unsafe-anesthetics/"
  },
  {
    "label": "MHAUS: Actual-weight dantrolene dosing",
    "href": "https://www.mhaus.org/faqs/do-i-use-actual-weight-or-ideal-weight-to-calculate-dantrolene-dosing/"
  },
  {
    "label": "MHAUS: Malignant hyperthermia mechanism and signs",
    "href": "https://www.mhaus.org/about/what-is-mh-mhaus/"
  },
  {
    "label": "MHAUS: Masseter rigidity and evolving malignant hyperthermia",
    "href": "https://www.mhaus.org/healthcare-professionals/mhaus-recommendations/masseter-muscle-rigidity-definition-relationship-to-malignant-hyperthermia-and-management/"
  }
].filter((reference) => !perioperativeCriticalCarePharmacologyModule.references.some((existing) => existing.href === reference.href)));

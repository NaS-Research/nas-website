export const perioperativeCriticalCarePharmacologyQuestionBank = [];

perioperativeCriticalCarePharmacologyQuestionBank.push(...[
  {
    "id": "periop-pediatric-reversal-1",
    "question": "A 5 kg infant undergoing surgery has reappearance of T2 after rocuronium. BRIDION has been diluted to 10 mg/mL. What volume provides the labeled 2 mg/kg dose?",
    "choices": [
      "1 mL",
      "0.1 mL",
      "5 mL",
      "10 mL"
    ],
    "answer": 0,
    "rationale": "5 kg times 2 mg/kg equals 10 mg. At the stated diluted concentration, 10 mg requires 1 mL. Continue objective recovery and respiratory monitoring.",
    "reviewHref": "#monitoring-and-reversal",
    "difficulty": "application"
  },
  {
    "id": "periop-pediatric-reversal-2",
    "question": "A learner assumes that BRIDION approval from birth establishes the adult 16 mg/kg immediate-reversal regimen for infants. What corrects this interpretation?",
    "choices": [
      "Pediatric surgical reversal is established, but immediate pediatric reversal has not been studied",
      "All pediatric use is prohibited",
      "Sixteen mg/kg reverses every neuromuscular blocker",
      "Age approval removes the need for ventilation"
    ],
    "answer": 0,
    "rationale": "The pediatric indication and immediate-reversal evidence are distinct. The label specifically states that immediate reversal in pediatric patients has not been studied.",
    "reviewHref": "#monitoring-and-reversal",
    "difficulty": "advanced"
  }
]);

perioperativeCriticalCarePharmacologyQuestionBank.push(...[
  {
    "id": "periop-neostigmine-depth-1",
    "question": "An adult weighing 60 kg has a quantitative TOF ratio of 0.5. Under ASA guidance for minimal blockade, what is the upper neostigmine dose for this initial reversal?",
    "choices": [
      "2.4 mg",
      "4.2 mg",
      "5 mg regardless of weight",
      "24 mg"
    ],
    "answer": 0,
    "rationale": "The ASA minimal-block limit is 40 micrograms/kg: 60 times 40 = 2400 micrograms = 2.4 mg. The broader product-label ceiling is not the dose target for this scenario.",
    "reviewHref": "#monitoring-and-reversal",
    "difficulty": "application"
  },
  {
    "id": "periop-neostigmine-depth-2",
    "question": "Quantitative adductor-pollicis monitoring confirms spontaneous recovery to a TOF ratio of 0.95. What is the role of routine neostigmine now?",
    "choices": [
      "No pharmacologic antagonism is required; separately assess airway and breathing readiness",
      "Give the maximum label dose to assure recovery",
      "Give neostigmine until the ratio is exactly 1.0",
      "Extubate without assessing respiration"
    ],
    "answer": 0,
    "rationale": "ASA identifies spontaneous recovery to at least 0.9 as not requiring antagonism. This measurement does not replace the rest of the extubation assessment.",
    "reviewHref": "#monitoring-and-reversal",
    "difficulty": "clinical"
  }
]);

perioperativeCriticalCarePharmacologyQuestionBank.push(...[
  {
    "id": "periop-reversal-case-1",
    "question": "An adult can lift the head, but the quantitative adductor-pollicis TOF ratio is 0.72. What should determine readiness?",
    "choices": [
      "Continue recovery management and confirm at least 0.9 plus airway readiness",
      "Extubate because head lift excludes residual blockade",
      "Ignore the ratio when tidal volume is adequate",
      "Use elapsed time alone"
    ],
    "answer": 0,
    "rationale": "Strength tests cannot exclude residual weakness. Quantitative recovery and airway assessment are both necessary.",
    "reviewHref": "#monitoring-and-reversal",
    "difficulty": "clinical"
  },
  {
    "id": "periop-reversal-case-2",
    "question": "After rocuronium, a 100 kg adult has two post-tetanic counts and no TOF twitches. What labeled sugammadex dose applies?",
    "choices": [
      "400 mg",
      "200 mg",
      "40 mg",
      "1600 mg for every deep block"
    ],
    "answer": 0,
    "rationale": "This measured depth uses 4 mg/kg actual body weight: 100 times 4 = 400 mg. Continue ventilation and recovery monitoring.",
    "reviewHref": "#monitoring-and-reversal",
    "difficulty": "clinical"
  },
  {
    "id": "periop-reversal-case-3",
    "question": "A 70 kg adult has reappearance of T2 after vecuronium. What labeled sugammadex dose applies?",
    "choices": [
      "140 mg",
      "280 mg",
      "1120 mg",
      "14 mg"
    ],
    "answer": 0,
    "rationale": "At T2 reappearance, 2 mg/kg applies: 70 times 2 = 140 mg. The 4 mg/kg regimen corresponds to a different measured depth.",
    "reviewHref": "#monitoring-and-reversal",
    "difficulty": "clinical"
  },
  {
    "id": "periop-reversal-case-4",
    "question": "An order uses sugammadex 16 mg/kg three minutes after vecuronium, citing the immediate-reversal label. What is the problem?",
    "choices": [
      "That labeled scenario follows rocuronium 1.2 mg/kg, not vecuronium",
      "Sixteen mg/kg is the routine dose at T2",
      "Vecuronium requires twice the rocuronium dose",
      "Drug identity does not matter if weight is known"
    ],
    "answer": 0,
    "rationale": "The immediate 16 mg/kg regimen is tied to the specified rocuronium exposure. It is not established for immediate vecuronium reversal.",
    "reviewHref": "#monitoring-and-reversal",
    "difficulty": "clinical"
  },
  {
    "id": "periop-reversal-case-5",
    "question": "A surgical patient received cisatracurium. Why is sugammadex an unsuitable reversal choice?",
    "choices": [
      "Its labeled blocker targets are rocuronium and vecuronium",
      "It reverses every blocker except rocuronium",
      "Doubling the dose makes it appropriate for cisatracurium",
      "It is suitable whenever the TOF ratio is low"
    ],
    "answer": 0,
    "rationale": "Cisatracurium is outside sugammadex target scope; select a strategy appropriate to the actual blocker and depth.",
    "reviewHref": "#monitoring-and-reversal",
    "difficulty": "clinical"
  },
  {
    "id": "periop-reversal-case-6",
    "question": "An adult on dialysis received rocuronium. Which BRIDION label limitation must enter the reversal plan?",
    "choices": [
      "Use is not recommended in severe renal impairment, including dialysis",
      "Dialysis mandates the largest dose",
      "Dialysis removes the need for monitoring",
      "Renal impairment makes it suitable for every blocker"
    ],
    "answer": 0,
    "rationale": "Severe renal impairment is a labeled limitation. Use an individualized specialist plan, not automatic dose escalation.",
    "reviewHref": "#monitoring-and-reversal",
    "difficulty": "clinical"
  },
  {
    "id": "periop-reversal-case-7",
    "question": "Neostigmine reversal is selected for a patient who is already bradycardic. How should muscarinic protection be sequenced?",
    "choices": [
      "Give atropine or glycopyrrolate first in a separate syringe",
      "Wait for worsening bradycardia before protection",
      "Mix both drugs into the BLOXIVERZ prefilled syringe",
      "Omit protection because paralysis prevents bradycardia"
    ],
    "answer": 0,
    "rationale": "BLOXIVERZ directs an antimuscarinic before or with reversal; existing bradycardia calls for it first, using a separate syringe.",
    "reviewHref": "#monitoring-and-reversal",
    "difficulty": "clinical"
  },
  {
    "id": "periop-reversal-case-8",
    "question": "For a 50 kg adult, what is the BLOXIVERZ labeled maximum total dose, distinct from the lower dose selected for minimal block?",
    "choices": [
      "3.5 mg",
      "5 mg in every adult",
      "7 mg",
      "35 mg"
    ],
    "answer": 0,
    "rationale": "The cap is the lesser of 0.07 mg/kg or 5 mg: 50 times 0.07 = 3.5 mg. A ceiling is not a routine dose target.",
    "reviewHref": "#monitoring-and-reversal",
    "difficulty": "clinical"
  }
]);

perioperativeCriticalCarePharmacologyQuestionBank.push({
  id: "periop-pancuronium-reversal-boundary",
  question: "A patient remains paralyzed after pancuronium. A trainee proposes sugammadex because pancuronium is a steroidal neuromuscular blocker. Which response is correct?",
  choices: [
    "Use the rocuronium immediate-reversal dose for any steroidal blocker",
    "Stop ventilation as soon as sugammadex is ordered",
    "BRIDION labeling limits steroidal-blocker reversal to rocuronium and vecuronium; maintain support and select an agent- and depth-appropriate plan",
    "Pancuronium is the same drug as vecuronium"
  ],
  answer: 2,
  rationale: "BRIDION section 5.14 directs against use for steroidal neuromuscular blockers other than rocuronium or vecuronium. Class membership alone does not justify pancuronium reversal with sugammadex. Ventilation, sedation, and quantitative monitoring remain necessary.",
  reviewHref: "#monitoring-and-reversal",
  difficulty: "clinical"
});

perioperativeCriticalCarePharmacologyQuestionBank.push(...[
  {
    "id": "periop-sugammadex-contraception",
    "question": "A patient using a hormonal contraceptive implant receives sugammadex during surgery. Which discharge instruction follows BRIDION labeling?",
    "choices": [
      "No additional contraception because the method is not oral",
      "Use an additional nonhormonal contraceptive method for seven days",
      "Remove the implant immediately",
      "Use backup only until anesthesia wears off"
    ],
    "answer": 1,
    "rationale": "The seven-day backup instruction applies to nonoral as well as oral hormonal contraceptives.",
    "reviewHref": "#monitoring-and-reversal",
    "difficulty": "application"
  },
  {
    "id": "periop-sugammadex-repeat-blockade",
    "question": "An adult with moderate renal impairment received sugammadex 4 mg/kg. The team plans repeat vecuronium 0.1 mg/kg four hours later. Which label-based correction is needed?",
    "choices": [
      "Four hours is sufficient regardless of renal function",
      "Use twice the vecuronium dose without waiting",
      "The recommended interval for this vecuronium regimen is 24 hours; an urgent need requires a different specialist plan",
      "Prior reversal prevents all future paralysis"
    ],
    "answer": 2,
    "rationale": "Mild or moderate renal impairment extends the wait for vecuronium 0.1 mg/kg or rocuronium 0.6 mg/kg after up to 4 mg/kg sugammadex to 24 hours. Urgent re-blockade requires attention to alternative agent or dose, timing, airway support, and monitoring.",
    "reviewHref": "#monitoring-and-reversal",
    "difficulty": "clinical"
  },
{
  "id": "periop-neostigmine-obstruction",
  "question": "A patient has mechanical intestinal obstruction and residual nondepolarizing blockade. What must be recognized before administering BLOXIVERZ?",
  "choices": [
    "Obstruction requires doubling the dose",
    "Mechanical intestinal obstruction is a labeled contraindication; maintain support and select another suitable recovery plan",
    "An antimuscarinic removes every neostigmine contraindication",
    "Ventilation is unnecessary once reversal is considered"
  ],
  "answer": 1,
  "rationale": "The BLOXIVERZ contraindications include mechanical intestinal or urinary obstruction and peritonitis. Antimuscarinic protection does not override these contraindications.",
  "reviewHref": "#monitoring-and-reversal",
  "difficulty": "clinical"
},
{
  "id": "periop-sugammadex-icu-evidence",
  "question": "A clinician applies surgical sugammadex evidence to reversal after a prolonged rocuronium infusion in the ICU. Which qualification is required?",
  "choices": [
    "All ICU infusions use the 16 mg/kg immediate-reversal regimen",
    "A normal heart rate proves full recovery",
    "ICU use removes the need to assess kidney function",
    "BRIDION labeling states that reversal after ICU administration has not been studied; an individualized specialist plan remains necessary"
  ],
  "answer": 3,
  "rationale": "Surgical approval is not evidence for every ICU exposure. Agent, depth, organ function, ventilatory support and monitoring remain relevant; the label specifically identifies this evidence gap.",
  "reviewHref": "#monitoring-and-reversal",
  "difficulty": "clinical"
},
{
  "id": "periop-nmb-awareness",
  "question": "A ventilated patient remains motionless after rocuronium, but the sedative infusion has disconnected. What is the priority?",
  "choices": [
    "Wait for movement before treating discomfort",
    "Give more rocuronium to maintain comfort",
    "Restore adequate sedation and analgesia while maintaining ventilation",
    "Assume paralysis prevents memory"
  ],
  "answer": 2,
  "rationale": "Rocuronium does not provide unconsciousness or analgesia. Immobility cannot demonstrate adequate anesthesia.",
  "reviewHref": "#neuromuscular-blockade-foundations",
  "difficulty": "clinical"
},
{
  "id": "periop-nmb-mechanism",
  "question": "Which pairing correctly distinguishes the initial neuromuscular effects?",
  "choices": [
    "Rocuronium activates nicotinic receptors; succinylcholine blocks them competitively",
    "Succinylcholine depolarizes the end plate; rocuronium competes with acetylcholine",
    "Both drugs produce unconsciousness before paralysis",
    "Both drugs inhibit acetylcholinesterase"
  ],
  "answer": 1,
  "rationale": "Depolarizing and competitive blockade differ mechanistically, but neither supplies anesthesia.",
  "reviewHref": "#neuromuscular-blockade-foundations",
  "difficulty": "clinical"
},
{
  "id": "periop-nmb-phase-one",
  "question": "Monitoring identifies persistent phase I succinylcholine block. Why should neostigmine not be given reflexively?",
  "choices": [
    "It can prolong this depolarizing block",
    "It immediately supplies analgesia",
    "It cannot affect neuromuscular transmission",
    "It reverses all block identically"
  ],
  "answer": 0,
  "rationale": "Anticholinesterases can intensify phase I block. Maintain respiratory support and adequate anesthesia while recovery is assessed.",
  "reviewHref": "#neuromuscular-blockade-foundations",
  "difficulty": "clinical"
},
{
  "id": "periop-nmb-exit-plan",
  "question": "Before paralysis for a short procedure, which plan addresses recovery risk?",
  "choices": [
    "Use procedure duration alone to time extubation",
    "Select the fastest onset and omit recovery planning",
    "Assume every blocker has the same antidote",
    "Confirm ventilation, anesthesia, monitoring, agent-specific reversal and postoperative support"
  ],
  "answer": 3,
  "rationale": "A short procedure does not guarantee rapid drug recovery. Support and reversal must fit the blocker and patient.",
  "reviewHref": "#neuromuscular-blockade-foundations",
  "difficulty": "clinical"
},
{
  "id": "periop-nmb-denervation",
  "question": "An adult with spinal-cord injury three weeks earlier requires intubation. Which succinylcholine risk drives agent selection?",
  "choices": [
    "Predictable reversal by sugammadex",
    "Severe hyperkalemia from denervated muscle",
    "Loss of all anesthetic effect",
    "Guaranteed brief paralysis"
  ],
  "answer": 1,
  "rationale": "Established denervation increases the risk of dangerous potassium release. Use an appropriate alternative airway plan.",
  "reviewHref": "#succinylcholine-safety",
  "difficulty": "clinical"
},
{
  "id": "periop-nmb-pediatric-reserve",
  "question": "Why should succinylcholine not be chosen solely for convenience in an elective pediatric procedure?",
  "choices": [
    "It has no pediatric airway use",
    "All children have proven muscle disease",
    "Occult myopathy can cause fatal hyperkalemic rhabdomyolysis",
    "It provides prolonged analgesia"
  ],
  "answer": 2,
  "rationale": "The boxed warning reserves pediatric use for specified urgent-airway situations or intramuscular use when venous access is unavailable.",
  "reviewHref": "#succinylcholine-safety",
  "difficulty": "clinical"
},
{
  "id": "periop-nmb-prolonged-apnea",
  "question": "After a single succinylcholine dose, paralysis persists far beyond expectation. What is appropriate?",
  "choices": [
    "Continue ventilation and adequate sedation, monitor recovery and investigate reduced plasma cholinesterase activity",
    "Awaken the patient because the usual duration has elapsed",
    "Extubate if blood pressure is normal",
    "Automatically administer sugammadex"
  ],
  "answer": 0,
  "rationale": "Persistent paralysis requires respiratory support and protection against awareness until recovery.",
  "reviewHref": "#succinylcholine-safety",
  "difficulty": "clinical"
},
{
  "id": "periop-nmb-phase-two-assessment",
  "question": "After prolonged succinylcholine exposure, a trainee labels persistent apnea as phase II block without nerve stimulation. What is missing?",
  "choices": [
    "An automatic 16 mg/kg sugammadex dose",
    "Proof that all sedation has stopped",
    "A fixed elapsed-time rule",
    "Objective confirmation of block type before considering anticholinesterase reversal"
  ],
  "answer": 3,
  "rationale": "The label requires nerve-stimulator confirmation and appropriate spontaneous recovery before specialist consideration of phase II reversal. Misclassification can worsen phase I block.",
  "reviewHref": "#succinylcholine-safety",
  "difficulty": "clinical"
},
{
  "id": "periop-agent-cirrhosis",
  "question": "An adult with cirrhosis recovers slowly after repeated rocuronium. Which assessment should guide the next step?",
  "choices": [
    "The scheduled procedure-end time",
    "The response to a verbal command alone",
    "Quantitative neuromuscular recovery plus airway and respiratory readiness",
    "A fixed interval after the last syringe"
  ],
  "answer": 2,
  "rationale": "Hepatic dysfunction and cumulative exposure can prolong rocuronium effects. Elapsed time does not establish recovery.",
  "reviewHref": "#nondepolarizing-agent-selection",
  "difficulty": "clinical"
},
{
  "id": "periop-agent-hofmann",
  "question": "Which feature favors considering cisatracurium when kidney and liver dysfunction complicate blocker selection?",
  "choices": [
    "Predominantly organ-independent Hofmann elimination of the parent drug",
    "Complete absence of pharmacologically relevant metabolites",
    "Reversal by sugammadex regardless of depth",
    "Guaranteed recovery without monitoring"
  ],
  "answer": 0,
  "rationale": "Hofmann elimination reduces parent-drug dependence on kidney and liver function; pH, temperature and metabolite clearance still matter.",
  "reviewHref": "#nondepolarizing-agent-selection",
  "difficulty": "clinical"
},
{
  "id": "periop-agent-metabolites",
  "question": "Which comparison is accurate during prolonged neuromuscular-blocker exposure?",
  "choices": [
    "Both metabolites are established causes of human seizures at all concentrations",
    "Neither drug forms metabolites",
    "Laudanosine directly causes residual paralysis",
    "Vecuronium has an active blocking metabolite; cisatracurium metabolites can accumulate despite largely organ-independent parent elimination"
  ],
  "answer": 3,
  "rationale": "The 3-desacetyl vecuronium metabolite retains blocking activity. Laudanosine lacks blocking activity; animal seizure findings do not establish a human toxic concentration.",
  "reviewHref": "#nondepolarizing-agent-selection",
  "difficulty": "clinical"
},
{
  "id": "periop-agent-magnesium",
  "question": "A patient receiving rocuronium also receives magnesium and a volatile anesthetic. How should this affect recovery planning?",
  "choices": [
    "Assume the drugs cancel each other",
    "Anticipate potentiated blockade and titrate using objective monitoring",
    "Extubate earlier because onset was rapid",
    "Replace neuromuscular monitoring with blood pressure checks"
  ],
  "answer": 1,
  "rationale": "Magnesium and volatile anesthetics can enhance rocuronium blockade. Individual monitoring is needed to assess effect and recovery.",
  "reviewHref": "#nondepolarizing-agent-selection",
  "difficulty": "clinical"
}
]);

perioperativeCriticalCarePharmacologyQuestionBank.push(...[
  {
    "id": "periop-safety-stock",
    "question": "A ward without routine neuromuscular-blocker use keeps rocuronium beside antibiotics. What is the best system correction?",
    "choices": [
      "Add a warning but keep the stock",
      "Separate the vials in the same open bin",
      "Remove routine stock; preserve planned emergency access",
      "Require staff to memorize vial colors"
    ],
    "answer": 2,
    "rationale": "Eliminate unnecessary availability. Where stock is needed, secure segregation and clear warnings remain necessary.",
    "reviewHref": "#neuromuscular-blockade-safety",
    "difficulty": "clinical"
  },
  {
    "id": "periop-safety-adc",
    "question": "An ICU cabinet displays a dismissible rocuronium warning. Which change best strengthens the removal safeguard?",
    "choices": [
      "Require selection of the clinical purpose or ventilation status",
      "Display the warning only after removal",
      "Replace the warning with the brand name",
      "Rely on the vial cap alone"
    ],
    "answer": 0,
    "rationale": "An interactive clinical response creates a deliberate check before release; it supplements secure storage and bedside verification.",
    "reviewHref": "#neuromuscular-blockade-safety",
    "difficulty": "clinical"
  },
  {
    "id": "periop-safety-label",
    "question": "A pharmacy-prepared rocuronium syringe has its drug concentration covered by a paralysis sticker. What correction is needed?",
    "choices": [
      "Remove all labeling",
      "Treat the syringe as exempt because anesthesia will use it",
      "Keep the obscured concentration because the warning is more important",
      "Retain a visible warning while restoring readable identity and concentration"
    ],
    "answer": 3,
    "rationale": "Essential medication information must remain visible. The anesthesia-prepared syringe exception does not describe a pharmacy-prepared syringe.",
    "reviewHref": "#neuromuscular-blockade-safety",
    "difficulty": "clinical"
  },
  {
    "id": "periop-safety-eye-care",
    "question": "A ventilated adult requires continuous neuromuscular blockade. Eyelids remain partly open and there is no scheduled eye-care order. Which plan addresses the missing safeguard?",
    "choices": [
      "Wait for the patient to report eye discomfort",
      "Use scheduled ocular lubrication and eyelid closure with reassessment",
      "Assume sedation prevents corneal exposure",
      "Use a train-of-four reading to decide whether lubrication is necessary"
    ],
    "answer": 1,
    "rationale": "Sustained-blockade guidance recommends scheduled eye care including lubrication and eyelid closure. A paralyzed patient cannot reliably signal discomfort or protect exposed eyes.",
    "reviewHref": "#neuromuscular-blockade-safety",
    "difficulty": "clinical"
  }
]);

perioperativeCriticalCarePharmacologyQuestionBank.push(...[
  {
    "id": "periop-sup-fed-risk",
    "question": "An enterally fed ICU patient still has significant coagulopathy. Does feeding alone justify stopping stress-ulcer prophylaxis?",
    "choices": [
      "Yes; feeding removes bleeding risk",
      "No; reassess the persistent risk and continue appropriate prophylaxis",
      "Yes; replace the PPI with no preventive therapy regardless of risk",
      "No; add an H2RA to every PPI"
    ],
    "answer": 1,
    "rationale": "Feeding reduces risk but does not erase coagulopathy. Guidance supports prophylaxis in fed adults who remain at risk.",
    "reviewHref": "#perioperative-stress-ulcer",
    "difficulty": "clinical"
  },
  {
    "id": "periop-sup-neuro",
    "question": "How should the 2024 SCCM/ASHP recommendation for neurocritical-care adults be represented?",
    "choices": [
      "A strong recommendation based on high-certainty evidence",
      "A prohibition on acid suppression",
      "A suggestion to use prophylaxis, supported by very low-certainty evidence",
      "Proof that all neurologic outpatients need a PPI"
    ],
    "answer": 2,
    "rationale": "The recommendation is conditional and the evidence is very uncertain; its population is neurocritical-care adults.",
    "reviewHref": "#perioperative-stress-ulcer",
    "difficulty": "clinical"
  },
  {
    "id": "periop-sup-dose",
    "question": "Which pantoprazole daily total falls within the SCCM/ASHP low-dose category for stress-ulcer prophylaxis?",
    "choices": [
      "40 mg",
      "80 mg",
      "120 mg",
      "192 mg"
    ],
    "answer": 0,
    "rationale": "The guideline defines this category as no more than 40 mg daily. An active bleeding regimen addresses a different indication.",
    "reviewHref": "#perioperative-stress-ulcer",
    "difficulty": "clinical"
  },
  {
    "id": "periop-sup-reconcile",
    "question": "An ICU patient no longer has stress-ulcer risk factors but was taking a PPI for documented erosive esophagitis before admission. What is the best reconciliation?",
    "choices": [
      "Stop every acid-suppressive medicine at ICU transfer",
      "Add famotidine to replace the treatment indication",
      "Continue ICU prophylaxis indefinitely without a diagnosis",
      "Review and retain therapy appropriate for the independent esophageal indication"
    ],
    "answer": 3,
    "rationale": "Stopping unnecessary prophylaxis does not mean stopping justified treatment of another condition.",
    "reviewHref": "#perioperative-stress-ulcer",
    "difficulty": "clinical"
  },
  {
    "id": "periop-sup-ventilation",
    "question": "What follows from the 2024 uncertainty about ventilation as an independent bleeding risk factor and the newer 2026 contextualized guidance?",
    "choices": [
      "No ventilated patient benefits from prophylaxis",
      "Assess the ventilated patient individually, considering the full bleeding-risk profile",
      "Every ventilated patient needs lifelong PPI therapy",
      "Choose therapy solely by the ventilator model"
    ],
    "answer": 1,
    "rationale": "Uncertainty about an independent risk factor is not proof of no treatment benefit. The newer guidance calls for individualized assessment.",
    "reviewHref": "#perioperative-stress-ulcer",
    "difficulty": "clinical"
  },
  {
    "id": "periop-sup-route",
    "question": "A high-risk ICU patient cannot receive enteral medication and has no class-specific contraindication. Which plan fits SCCM/ASHP guidance?",
    "choices": [
      "Defer prophylaxis until oral intake resumes",
      "Use a high-dose infusion solely because the patient is in the ICU",
      "Use an appropriate low-dose IV PPI or H2RA with daily reassessment",
      "Use both drug classes routinely"
    ],
    "answer": 2,
    "rationale": "IV therapy is acceptable when indicated and enteral delivery is impractical. Organ function, interactions and the indication guide selection.",
    "reviewHref": "#perioperative-stress-ulcer",
    "difficulty": "clinical"
  }
]);

perioperativeCriticalCarePharmacologyQuestionBank.push(...[
  {
    "id": "periop-local-additive",
    "question": "A team plans lidocaine infiltration and a bupivacaine block in the same patient. Which safety assumption is correct?",
    "choices": [
      "Each drug has a completely independent toxicity allowance",
      "Different injection sites prevent systemic toxicity",
      "Their systemic toxic effects are additive",
      "Only the more concentrated product matters"
    ],
    "answer": 2,
    "rationale": "Reconcile every local-anesthetic exposure; different agents or sites do not create separate systemic safety budgets.",
    "reviewHref": "#local-anesthetic-pharmacology",
    "difficulty": "clinical"
  },
  {
    "id": "periop-local-hepatic",
    "question": "A patient with severe hepatic impairment needs repeated bupivacaine injections. What adjustment deserves consideration?",
    "choices": [
      "Lower exposure with intensified systemic-toxicity monitoring",
      "A larger dose because metabolism is hepatic",
      "No reassessment because injection is local",
      "Switch to an unmonitored continuous infusion"
    ],
    "answer": 0,
    "rationale": "Impaired hepatic metabolism can increase systemic exposure, especially with repeated doses.",
    "reviewHref": "#local-anesthetic-pharmacology",
    "difficulty": "clinical"
  },
  {
    "id": "periop-local-route",
    "question": "Which proposed use of standard bupivacaine injection conflicts with a labeled contraindication?",
    "choices": [
      "An appropriately selected peripheral nerve block",
      "A labeled local infiltration technique",
      "A properly selected epidural formulation",
      "Intravenous regional anesthesia using a Bier block"
    ],
    "answer": 3,
    "rationale": "Bupivacaine is contraindicated for Bier block because cardiac arrest and death have occurred with that technique.",
    "reviewHref": "#local-anesthetic-pharmacology",
    "difficulty": "clinical"
  },
  {
    "id": "periop-local-aspiration",
    "question": "No blood is aspirated before a regional injection. Which conclusion is justified?",
    "choices": [
      "Systemic toxicity is impossible",
      "The result does not exclude intravascular injection; continue the safety precautions",
      "Monitoring can stop immediately",
      "The full planned dose can always be injected rapidly"
    ],
    "answer": 1,
    "rationale": "A negative aspiration does not guarantee correct placement. Dose, incremental administration and monitoring remain important.",
    "reviewHref": "#local-anesthetic-pharmacology",
    "difficulty": "clinical"
  },
  {
    "id": "periop-last-recognition",
    "question": "Immediately after bupivacaine injection a patient develops a ventricular arrhythmia without reporting tinnitus. What is the best response?",
    "choices": [
      "Exclude LAST because the neurologic prodrome is missing",
      "Give another dose to confirm the reaction",
      "Stop exposure and activate the LAST pathway while supporting airway and circulation",
      "Wait for seizure before treating"
    ],
    "answer": 2,
    "rationale": "Cardiovascular toxicity can occur without a reported neurologic warning. Treat the dangerous exposure-response pattern promptly.",
    "reviewHref": "#local-anesthetic-toxicity",
    "difficulty": "clinical"
  },
  {
    "id": "periop-last-bolus",
    "question": "A 60-kg patient with severe LAST is prescribed the ASRA 1.5 mL/kg initial bolus of 20% lipid. What volume is required?",
    "choices": [
      "90 mL",
      "15 mL",
      "720 mL",
      "900 mL"
    ],
    "answer": 0,
    "rationale": "1.5 mL/kg times 60 kg is 90 mL, given over approximately 2 to 3 minutes. Rate and cumulative maximum are separate quantities.",
    "reviewHref": "#local-anesthetic-toxicity",
    "difficulty": "clinical"
  },
  {
    "id": "periop-last-rate",
    "question": "For a 60-kg patient, convert the initial 0.25 mL/kg/min lipid infusion to mL/hour.",
    "choices": [
      "15 mL/hour",
      "90 mL/hour",
      "720 mL/hour",
      "900 mL/hour"
    ],
    "answer": 3,
    "rationale": "0.25 times 60 equals 15 mL/min. Multiplying by 60 minutes/hour gives 900 mL/hour; do not confuse this rate with a total volume.",
    "reviewHref": "#local-anesthetic-toxicity",
    "difficulty": "clinical"
  },
  {
    "id": "periop-last-ceiling",
    "question": "A 60-kg patient has already received 390 mL of rescue lipid. How much remains before reaching the ASRA cumulative 12 mL/kg ceiling?",
    "choices": [
      "720 mL more",
      "330 mL",
      "90 mL",
      "An unlimited volume if blood pressure remains low"
    ],
    "answer": 1,
    "rationale": "The cumulative ceiling is 12 times 60 = 720 mL. Subtracting 390 leaves 330 mL. This is a ceiling calculation, not an instruction to deliver all remaining volume.",
    "reviewHref": "#local-anesthetic-toxicity",
    "difficulty": "clinical"
  },
  {
    "id": "periop-last-drugs",
    "question": "During suspected LAST, a team prepares vasopressin and lidocaine for cardiovascular collapse. What should the pharmacist do?",
    "choices": [
      "Confirm both as preferred LAST rescue drugs",
      "Replace lipid with a propofol infusion",
      "Redirect to the LAST checklist, avoiding both and using smaller epinephrine doses when needed",
      "Delay airway support until lipid arrives"
    ],
    "answer": 2,
    "rationale": "ASRA advises avoiding vasopressin and additional local anesthetics; epinephrine starts below 1 microgram/kg. Lipid and supportive resuscitation proceed together.",
    "reviewHref": "#local-anesthetic-toxicity",
    "difficulty": "clinical"
  },
  {
    "id": "periop-last-observation",
    "question": "A patient stabilizes after LAST-associated hypotension without cardiac arrest. Which ASRA observation interval matches cardiovascular instability?",
    "choices": [
      "Discharge as soon as the first lipid bolus ends",
      "Ten minutes if the ECG normalizes",
      "Exactly two hours for every LAST event",
      "Observe for 4 to 6 hours after cardiovascular instability, with reassessment for recurrence"
    ],
    "answer": 3,
    "rationale": "The checklist distinguishes cardiovascular instability from seizure-only observation and individualized post-arrest monitoring.",
    "reviewHref": "#local-anesthetic-toxicity",
    "difficulty": "clinical"
  }
]);

perioperativeCriticalCarePharmacologyQuestionBank.push(...[
  {
    "id": "periop-mh-recognition",
    "question": "During sevoflurane anesthesia, end-tidal carbon dioxide rises despite ventilation and generalized rigidity appears before marked fever. Which response is best?",
    "choices": [
      "Wait for a temperature above 42 C",
      "Stop triggers, call for help, give oxygen and initiate dantrolene treatment",
      "Give succinylcholine to treat the rigidity",
      "Treat only the heart rate"
    ],
    "answer": 1,
    "rationale": "Hypercapnia and rigidity can precede severe hyperthermia; delaying the MH response for a temperature threshold is unsafe.",
    "reviewHref": "#malignant-hyperthermia",
    "difficulty": "clinical"
  },
  {
    "id": "periop-mh-volume",
    "question": "A 100-kg adult is prescribed an initial MHAUS dantrolene dose of 2.5 mg/kg using RYANODEX 250 mg reconstituted with 5 mL sterile water. What volume supplies that dose?",
    "choices": [
      "60 mL",
      "2 mL",
      "5 mL",
      "30 mL"
    ],
    "answer": 2,
    "rationale": "The dose is 250 mg. At 50 mg/mL this is 5 mL. The 60-mL preparation belongs to different 20-mg products.",
    "reviewHref": "#malignant-hyperthermia",
    "difficulty": "clinical"
  },
  {
    "id": "periop-mh-label",
    "question": "A persistent MH crisis may require more than 10 mg/kg dantrolene under MHAUS guidance. How should this be described relative to RYANODEX labeling?",
    "choices": [
      "It exceeds the listed label maximum and requires expert-directed crisis management and diagnostic reassessment",
      "The label has no cumulative maximum",
      "It is mandatory for every MH patient",
      "It proves the diagnosis without reassessment"
    ],
    "answer": 0,
    "rationale": "The label lists a 10 mg/kg maximum; MHAUS recognizes that persistent rigidity may require more and advises considering alternatives if symptoms do not resolve.",
    "reviewHref": "#malignant-hyperthermia",
    "difficulty": "clinical"
  },
  {
    "id": "periop-mh-calcium",
    "question": "A patient receiving dantrolene has life-threatening hyperkalemia. Which distinction is correct?",
    "choices": [
      "All forms of calcium are prohibited",
      "Verapamil is the preferred calcium replacement",
      "Calcium-channel blockers and calcium salts are interchangeable",
      "Avoid calcium-channel blockers; IV calcium salts may still be indicated for hyperkalemia"
    ],
    "answer": 3,
    "rationale": "The dantrolene interaction concerns calcium-channel blockers. MHAUS includes calcium salts in treatment of life-threatening hyperkalemia.",
    "reviewHref": "#malignant-hyperthermia",
    "difficulty": "clinical"
  },
  {
    "id": "periop-mh-maintenance",
    "question": "An MH patient improves after initial treatment. Which MHAUS maintenance plan is appropriate?",
    "choices": [
      "Stop dantrolene after the first normal temperature",
      "Give 1 mg/kg IV every 4 to 6 hours for at least 24 hours with continued reassessment",
      "Give one oral dose and discharge immediately",
      "Continue the acute 2.5 mg/kg bolus every minute for 24 hours"
    ],
    "answer": 1,
    "rationale": "Maintenance and monitoring address recurrence. Duration and spacing depend on metabolic stability, temperature, CK, myoglobinuria and rigidity.",
    "reviewHref": "#malignant-hyperthermia",
    "difficulty": "clinical"
  },
  {
    "id": "periop-mh-stopping",
    "question": "After 24 hours, an MH patient is afebrile but still has rigidity, rising CK and ongoing myoglobinuria. What follows?",
    "choices": [
      "Temperature alone permits stopping therapy",
      "ICU transfer automatically ends monitoring",
      "Do not apply the MHAUS stopping criteria yet; continue specialist reassessment and treatment",
      "Rising CK proves dantrolene allergy"
    ],
    "answer": 2,
    "rationale": "The stopping criteria require more than normal temperature, including resolving muscle findings and no ongoing myoglobinuria.",
    "reviewHref": "#malignant-hyperthermia",
    "difficulty": "clinical"
  }
]);

perioperativeCriticalCarePharmacologyQuestionBank.push(...[
  {
    "id": "periop-antifib-route",
    "question": "An unlabeled syringe believed to contain tranexamic acid is on an epidural tray. What action is appropriate?",
    "choices": [
      "Administer it epidurally at a lower dose",
      "Use it if the solution is clear",
      "Remove it from use and correct identification, IV-route labeling and segregation",
      "Assume the tray establishes the route"
    ],
    "answer": 2,
    "rationale": "Tranexamic-acid injection must not be administered neuraxially; route errors have caused fatal seizures and arrhythmias.",
    "reviewHref": "#antifibrinolytic-hemostasis",
    "difficulty": "clinical"
  },
  {
    "id": "periop-antifib-renal",
    "question": "For the labeled hemophilia tooth-extraction indication, which tranexamic-acid schedule corresponds to serum creatinine 3.5 mg/dL?",
    "choices": [
      "10 mg/kg IV once daily",
      "10 mg/kg IV four times daily without adjustment",
      "10 mg/kg IV every hour",
      "Use the dental regimen for every trauma patient"
    ],
    "answer": 0,
    "rationale": "The 2.83 to 5.66 mg/dL label band uses 10 mg/kg daily. This is an indication-specific label table, not a universal trauma regimen.",
    "reviewHref": "#antifibrinolytic-hemostasis",
    "difficulty": "clinical"
  },
  {
    "id": "periop-antifib-rate",
    "question": "Tranexamic acid is prepared at 20 mg/mL and administered at the label rate of 2.5 mL/min. What mass rate is delivered?",
    "choices": [
      "5 mg/min",
      "8 mg/min",
      "100 mg/min",
      "50 mg/min"
    ],
    "answer": 3,
    "rationale": "20 mg/mL times 2.5 mL/min equals 50 mg/min. Concentration must accompany a volumetric rate.",
    "reviewHref": "#antifibrinolytic-hemostasis",
    "difficulty": "clinical"
  },
  {
    "id": "periop-antifib-seizure",
    "question": "A patient receiving high-dose IV tranexamic acid develops seizure with impaired renal function. Which assumption should be rejected?",
    "choices": [
      "Renal function affects exposure",
      "Seizure risk exists only after accidental spinal administration",
      "Dose and indication need reassessment",
      "Neurologic monitoring is relevant"
    ],
    "answer": 1,
    "rationale": "The label also reports seizures with IV surgical use. Neuraxial errors are a severe additional risk, not the only setting.",
    "reviewHref": "#antifibrinolytic-hemostasis",
    "difficulty": "clinical"
  },
  {
    "id": "periop-antifib-urinary",
    "question": "Aminocaproic acid is proposed for upper-urinary-tract hematuria. Which concern requires review before treatment?",
    "choices": [
      "It always dissolves obstructing clots",
      "Urinary bleeding is unrelated to antifibrinolysis",
      "Stabilized clots can obstruct the renal pelvis or ureters",
      "Renal clearance eliminates every safety concern"
    ],
    "answer": 2,
    "rationale": "The label warns against use in upper-tract hematuria unless benefit outweighs the obstruction risk.",
    "reviewHref": "#antifibrinolytic-hemostasis",
    "difficulty": "clinical"
  },
  {
    "id": "periop-antifib-dilution",
    "question": "A 250 mg/mL aminocaproic-acid vial is supplied for a prescribed 5-g initial dose. Which preparation statement is correct?",
    "choices": [
      "Withdraw 20 mL and prepare the prescribed diluted infusion over the first hour",
      "Inject 20 mL undiluted rapidly",
      "Withdraw 2 mL for a 5-g dose",
      "Replace the initial infusion with an intrathecal injection"
    ],
    "answer": 0,
    "rationale": "5 g is 5000 mg; dividing by 250 mg/mL gives 20 mL of stock. The label requires dilution and discourages rapid undiluted IV injection.",
    "reviewHref": "#antifibrinolytic-hemostasis",
    "difficulty": "clinical"
  }
]);

perioperativeCriticalCarePharmacologyQuestionBank.push(...[
  {
    "id": "periop-etomidate-infusion",
    "question": "Etomidate was selected for induction because blood pressure was marginal. A prolonged infusion is proposed for ongoing ICU sedation. What is the best response?",
    "choices": [
      "Continue it because induction tolerability establishes infusion safety",
      "Choose a different ongoing sedation plan because prolonged etomidate infusion risks sustained adrenal suppression",
      "Continue it if a neuromuscular blocker prevents movement",
      "Use it as both the sedative and sole analgesic"
    ],
    "answer": 1,
    "rationale": "The label warns against prolonged infusion. A successful induction does not establish suitability for continuing ICU sedation.",
    "reviewHref": "#induction-agent-selection",
    "difficulty": "application"
  },
  {
    "id": "periop-etomidate-analgesia",
    "question": "After etomidate induction, a painful procedure is planned. Which statement correctly addresses analgesia?",
    "choices": [
      "Loss of consciousness establishes complete analgesia",
      "Myoclonus proves analgesia is adequate",
      "Etomidate has no analgesic activity, so pain treatment needs a separate plan",
      "Adding paralysis supplies the missing analgesia"
    ],
    "answer": 2,
    "rationale": "Hypnosis, analgesia and neuromuscular blockade are separate effects. Etomidate does not provide analgesia.",
    "reviewHref": "#induction-agent-selection",
    "difficulty": "foundational"
  },
  {
    "id": "periop-etomidate-dose",
    "question": "A 70 kg adult has an individualized order for etomidate 0.3 mg/kg IV. The vial contains 2 mg/mL. Which preparation and administration matches that order and the labeled usual injection duration?",
    "choices": [
      "10.5 mL over 30 to 60 seconds",
      "21 mL over 30 to 60 seconds",
      "1.05 mL over 30 to 60 seconds",
      "10.5 mL as a prolonged maintenance infusion"
    ],
    "answer": 0,
    "rationale": "70 times 0.3 equals 21 mg; dividing by 2 mg/mL gives 10.5 mL. The usual labeled induction injection takes 30 to 60 seconds.",
    "reviewHref": "#induction-agent-selection",
    "difficulty": "application"
  },
  {
    "id": "periop-etomidate-airway",
    "question": "An older patient receives etomidate and develops apnea. Which interpretation should guide the immediate response?",
    "choices": [
      "Relative cardiovascular stability excludes an anesthetic complication",
      "Wait for endocrine testing before providing ventilation",
      "Treat movement suppression as evidence of adequate ventilation",
      "Support the airway and ventilation immediately; etomidate can cause apnea"
    ],
    "answer": 3,
    "rationale": "Etomidate can cause respiratory adverse effects despite relatively limited cardiovascular depression. Monitoring and immediate rescue capability remain necessary.",
    "reviewHref": "#induction-agent-selection",
    "difficulty": "clinical"
  }
]);

perioperativeCriticalCarePharmacologyQuestionBank.push(...[
  {
    "id": "periop-ketamine-dilution",
    "question": "A prescribed 100 mg ketamine IV induction dose will be prepared from a 100 mg/mL vial. Which preparation follows the cited product label?",
    "choices": [
      "Administer 1 mL undiluted IV",
      "Dilute 1 mL with 1 mL of a labeled diluent, giving 2 mL at 50 mg/mL",
      "Dilute 1 mL with 1 mL and administer only 1 mL for the full dose",
      "Treat 100 mg/mL as the total vial content"
    ],
    "answer": 1,
    "rationale": "Equal-volume dilution halves concentration without changing the 100 mg drug amount. This product requires dilution of 100 mg/mL before IV use; use the preparation immediately.",
    "reviewHref": "#induction-agent-selection",
    "difficulty": "application"
  },
  {
    "id": "periop-ketamine-procedure",
    "question": "Ketamine alone is proposed for a procedure involving mechanical stimulation of the pharynx because airway reflexes are retained. What is the best correction?",
    "choices": [
      "Retained reflexes exclude laryngospasm",
      "Retained reflexes eliminate aspiration risk",
      "Ketamine alone reliably supplies the required muscle relaxation",
      "Retained reflexes do not establish a safe sole-anesthetic plan for this procedure"
    ],
    "answer": 3,
    "rationale": "The label advises against ketamine as the sole anesthetic for pharyngeal, laryngeal or bronchial procedures. Airway equipment and an appropriate anesthesia plan remain necessary.",
    "reviewHref": "#induction-agent-selection",
    "difficulty": "clinical"
  },
  {
    "id": "periop-ketamine-interaction",
    "question": "A patient receiving aminophylline is being assessed for ketamine anesthesia. Which interaction is specifically relevant?",
    "choices": [
      "Lower seizure threshold, prompting consideration of an alternative anesthetic",
      "Complete blockade of ketamine analgesia",
      "Guaranteed prevention of emergence reactions",
      "Selective reversal of ketamine respiratory depression"
    ],
    "answer": 0,
    "rationale": "Ketamine labeling identifies reduced seizure threshold with aminophylline or theophylline and advises considering an alternative.",
    "reviewHref": "#induction-agent-selection",
    "difficulty": "application"
  },
  {
    "id": "periop-ketamine-recurrent",
    "question": "A patient receiving recurrent ketamine develops severe urinary symptoms with suspected obstruction. What response matches current labeling?",
    "choices": [
      "Continue unchanged because urinary toxicity occurs only after overdose",
      "Treat the symptoms as routine emergence delirium",
      "Discontinue ketamine and obtain urgent urological evaluation",
      "Increase the dose to cover pain while postponing assessment"
    ],
    "answer": 2,
    "rationale": "Long-term ketamine exposure can cause serious urinary complications, including obstruction. Severe symptoms or obstruction require stopping ketamine and urgent evaluation.",
    "reviewHref": "#induction-agent-selection",
    "difficulty": "clinical"
  }
]);

perioperativeCriticalCarePharmacologyQuestionBank.push(...[
  {
    "id": "periop-propofol-reserve",
    "question": "A frail, hypovolemic older adult needs induction. Which approach best addresses propofol risk?",
    "choices": [
      "Use the usual healthy-adult dose rapidly because recovery is fast",
      "Use cautious individualized titration with immediate airway and circulatory support",
      "Increase the dose to compensate for older age",
      "Treat absence of movement as proof of adequate ventilation"
    ],
    "answer": 1,
    "rationale": "Propofol can markedly depress blood pressure and ventilation. Reduced physiologic reserve makes dose and administration rate especially important.",
    "reviewHref": "#induction-agent-selection",
    "difficulty": "clinical"
  },
  {
    "id": "periop-propofol-asepsis",
    "question": "A propofol vial was opened for an anesthetic procedure that has now ended after two hours. Under the cited label, what should happen to the remainder?",
    "choices": [
      "Save it for another patient until twelve hours elapse",
      "Refrigerate it for the next operating list",
      "Add disinfectant to extend its use",
      "Discard it and the dedicated administration materials as directed"
    ],
    "answer": 3,
    "rationale": "The procedure-end discard rule applies even before twelve hours. Single-patient handling and asepsis remain essential.",
    "reviewHref": "#induction-agent-selection",
    "difficulty": "application"
  },
  {
    "id": "periop-propofol-syndrome",
    "question": "During a propofol infusion, new unexplained metabolic acidosis, rhabdomyolysis and cardiac dysfunction develop. What is the best immediate medication response?",
    "choices": [
      "Stop propofol, provide alternative sedation and urgently evaluate and treat the deterioration",
      "Increase propofol to reduce metabolic demand",
      "Wait until forty-eight hours of exposure before considering toxicity",
      "Treat normal triglycerides as sufficient to exclude propofol toxicity"
    ],
    "answer": 0,
    "rationale": "This pattern warrants concern for propofol infusion syndrome. A duration threshold or normal lipid result does not safely rule it out.",
    "reviewHref": "#induction-agent-selection",
    "difficulty": "clinical"
  },
  {
    "id": "periop-propofol-calories",
    "question": "A nutrition review finds that propofol ran at 20 mL/hour for 24 hours. Using 1.1 kcal/mL, how much energy did it provide?",
    "choices": [
      "48 kcal",
      "480 kcal",
      "528 kcal",
      "5,280 kcal"
    ],
    "answer": 2,
    "rationale": "20 mL/hour times 24 hours equals 480 mL; 480 times 1.1 equals 528 kcal. Count this energy when reviewing concurrent nutrition.",
    "reviewHref": "#induction-agent-selection",
    "difficulty": "application"
  }
]);

perioperativeCriticalCarePharmacologyQuestionBank.push({
  "id": "periop-sup-sepsis",
  "question": "An adult with septic shock and coagulopathy is being assessed for stress-ulcer prevention. Which statement accurately describes the 2026 Surviving Sepsis Campaign recommendation?",
  "choices": [
    "All patients with sepsis require lifelong acid suppression",
    "H2 blockers are contraindicated in every septic patient",
    "PPI prophylaxis is conditionally suggested over no prophylaxis when GI bleeding risk factors are present",
    "The recommendation proves that PPIs are superior to H2 blockers"
  ],
  "answer": 2,
  "rationale": "The recommendation addresses PPI versus no prophylaxis in adults with sepsis or septic shock and GI bleeding risk. It is conditional with moderate-certainty evidence; it is not a head-to-head PPI-versus-H2-blocker conclusion.",
  "reviewHref": "#perioperative-stress-ulcer",
  "difficulty": "advanced"
});

perioperativeCriticalCarePharmacologyQuestionBank.push(...[
  {
    "id": "periop-nmba-proning",
    "question": "An adult with ARDS is proned and is meeting ventilation targets on sedation. A continuous paralytic infusion is proposed solely because of the prone position. What is the best assessment?",
    "choices": [
      "Proning always mandates continuous paralysis",
      "Paralysis replaces sedation during proning",
      "Proning alone does not establish a need for neuromuscular blockade",
      "Every proned patient needs sugammadex before ventilation can continue"
    ],
    "answer": 2,
    "rationale": "SCCM 2026 permits either use or nonuse of neuromuscular blockade during proning, with very low certainty. Assess persistent hypoxemia and unmet ventilation targets rather than treating position as an automatic indication.",
    "reviewHref": "#neuromuscular-blockade-safety",
    "difficulty": "clinical"
  },
  {
    "id": "periop-nmba-sepsis",
    "question": "Neuromuscular blockade is being considered for an adult with sepsis and moderate-to-severe ARDS. Which regimen comparison reflects the 2026 Surviving Sepsis Campaign?",
    "choices": [
      "Intermittent boluses are conditionally favored over continuous infusion",
      "Continuous infusion is mandatory for all patients",
      "The guideline prohibits all neuromuscular blockers",
      "Boluses eliminate the need for analgesia and sedation"
    ],
    "answer": 0,
    "rationale": "The sepsis guideline conditionally favors intermittent boluses, with moderate-certainty evidence. Indication assessment and full supportive care remain necessary.",
    "reviewHref": "#neuromuscular-blockade-safety",
    "difficulty": "application"
  }
]);

perioperativeCriticalCarePharmacologyQuestionBank.push({
  "id": "periop-rocuronium-rsi-scope",
  "question": "A teaching slide states that rocuronium\u2019s general intubation indication establishes labeled rapid-sequence use for every age and for cesarean delivery. What correction is needed?",
  "choices": [
    "The label prohibits every use during pregnancy",
    "Routine pediatric intubation and pediatric rapid-sequence intubation are identical labeled uses",
    "Sugammadex availability eliminates population-specific limitations",
    "The label discourages these rapid-sequence uses; distinguish its limitations from specialist obstetric guidance"
  ],
  "answer": 3,
  "rationale": "The cited label does not recommend pediatric rapid-sequence intubation or rapid-sequence induction for cesarean delivery. OAA/DAS obstetric guidance describes rocuronium with prepared sugammadex as an alternative. The lesson must identify the difference rather than claim universal labeling or an absolute pregnancy contraindication.",
  "reviewHref": "#nondepolarizing-agent-selection",
  "difficulty": "advanced"
});

perioperativeCriticalCarePharmacologyQuestionBank.push(...[
  {
    "id": "periop-txa-trauma-timing",
    "question": "An adult arrives 90 minutes after injury with major bleeding. Under the 2023 European trauma guideline, should TXA wait for viscoelastic confirmation of hyperfibrinolysis?",
    "choices": [
      "Yes, always await the result",
      "No; start the eligible trauma regimen promptly while resuscitation continues",
      "Use the hemophilia dental schedule instead",
      "Wait until 3 hours have elapsed"
    ],
    "answer": 1,
    "rationale": "Recommendation 23 supports early TXA within 3 hours of injury and advises against waiting for viscoelastic results. The regimen is 1 g over 10 minutes followed by 1 g over 8 hours.",
    "reviewHref": "#antifibrinolytic-hemostasis",
    "difficulty": "clinical"
  },
  {
    "id": "periop-txa-postpartum-repeat",
    "question": "TXA 1 g IV was completed for postpartum hemorrhage within 3 hours of birth. Bleeding is still ongoing 40 minutes later despite concurrent care. Which TXA step matches WHO treatment guidance, assuming no contraindication?",
    "choices": [
      "Automatically start the 8-hour trauma infusion",
      "Switch to a multiday dental regimen",
      "A second 1 g IV dose",
      "Wait until the next day"
    ],
    "answer": 2,
    "rationale": "WHO permits another 1 g when bleeding persists after 30 minutes or returns within 24 hours of the first dose ending. Maintain the rest of the hemorrhage treatment bundle.",
    "reviewHref": "#antifibrinolytic-hemostasis",
    "difficulty": "application"
  }
]);

perioperativeCriticalCarePharmacologyQuestionBank.push(...[
  {
    "id": "periop-pph-early-recognition",
    "question": "After vaginal birth, objectively measured blood loss is 350 mL and pulse is 112/min. Which interpretation fits WHO 2025 first-response criteria?",
    "choices": [
      "Wait until blood loss reaches 1000 mL",
      "The measured loss plus abnormal pulse supports prompt first-response treatment",
      "The criteria mandate immediate hysterectomy",
      "TXA alone replaces the treatment bundle"
    ],
    "answer": 1,
    "rationale": "At least 300 mL with an abnormal hemodynamic sign meets the WHO therapeutic threshold. Pulse above 100/min qualifies. Initiate timely care and assess the cause; these criteria do not automatically determine surgery.",
    "reviewHref": "#antifibrinolytic-hemostasis",
    "difficulty": "clinical"
  },
  {
    "id": "periop-pph-prophylaxis",
    "question": "A proposal would add TXA to every uncomplicated vaginal birth to replace prophylactic oxytocin. How does WHO 2025 inform this proposal?",
    "choices": [
      "Routine TXA is preferred because it contracts the uterus",
      "TXA should replace all uterotonics",
      "WHO advises against routine TXA prophylaxis; retain appropriate uterotonic prevention",
      "The treatment recommendation proves universal prophylactic benefit"
    ],
    "answer": 2,
    "rationale": "TXA inhibits fibrinolysis and is not a uterotonic. WHO recommends it for PPH treatment but advises against routine prevention at vaginal or cesarean birth.",
    "reviewHref": "#antifibrinolytic-hemostasis",
    "difficulty": "application"
  }
]);

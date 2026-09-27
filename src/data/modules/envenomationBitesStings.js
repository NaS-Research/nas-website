import { envenomationBitesStingsQuestionBank } from "@/data/questionBanks/envenomationBitesStings";

// Original NaS teaching content; clinical audit remains in progress.
// Evidence and unresolved work: docs/clinical-audit/envenomation-review.json.
const learningTasks = {
  "wound-prevention": {
    application: "Use the wound category and vaccination record to distinguish tetanus vaccine from immune globulin.",
    keyPoints: ["Puncture wounds use the dirty/major pathway.", "Vaccine and TIG answer different prevention questions.", "Antibiotics do not prevent tetanus."]
  },
  "follow-up-after-control": {
    application: "Write a discharge handoff that identifies return symptoms, monitoring and who owns the next review.",
    keyPoints: ["Initial control does not end recurrence risk.", "Bleeding and delayed allergy need separate instructions.", "Set a follow-up plan before discharge."]
  },
  "exposure-before-product": {
    "application": "Build an exposure history that separates animal identification from the treatment target.",
    "keyPoints": [
      "Geography changes product selection.",
      "Support threatened breathing and circulation immediately."
    ]
  },
  "snake-first-aid": {
    "application": "Coach a companion through safe transport after a suspected pit viper bite.",
    "keyPoints": [
      "Do not capture the snake.",
      "Avoid ice, cutting, suction and tourniquets.",
      "Pressure immobilization is not universal first aid."
    ]
  },
  "pit-viper-products": {
    "application": "Reconcile a change in stocked antivenom without carrying over the previous dosing schedule.",
    "keyPoints": [
      "Vials are product-specific.",
      "Control includes local, systemic and coagulation findings."
    ]
  },
  "crofab-preparation": {
    "application": "Check the final volume and allergy history before releasing a CroFab infusion.",
    "keyPoints": [
      "Reconstitution volume is not final infusion volume.",
      "Do not omit the slow initial infusion phase.",
      "Acute hypersensitivity requires stopping the infusion and emergency care."
    ]
  },
  "anavip-observation": {
    "application": "Calculate the earliest end of the labeled observation interval and distinguish recurrence dosing from maintenance.",
    "keyPoints": [
      "Observation begins after initial control.",
      "A minimum interval does not guarantee discharge readiness."
    ]
  },
  "coral-snake-boundary": {
    "application": "Coordinate respiratory observation and product access after a suspected coral snake exposure.",
    "keyPoints": [
      "Minimal local injury does not exclude neurotoxicity.",
      "Confirm product and lot-specific availability."
    ]
  },
  "spider-attribution": {
    "application": "Assess an unexplained ulcer without treating an unobserved spider as a confirmed diagnosis.",
    "keyPoints": [
      "Exposure certainty matters.",
      "Evaluate competing causes of skin lesions."
    ]
  },
  "widow-pain-and-antivenom": {
    "application": "Explain why refractory widow symptoms need toxicology review and a specific hypersensitivity assessment.",
    "keyPoints": [
      "Routine calcium is not supported.",
      "Sedating symptomatic medicines require monitoring."
    ]
  },
  "recluse-beyond-the-wound": {
    "application": "Respond to delayed systemic illness even when a urine-only screen is reassuring.",
    "keyPoints": [
      "Delayed hemolysis requires reassessment.",
      "Referral-cohort rates are not community-bite probabilities."
    ]
  },
  "scorpion-systemic-signs": {
    "application": "Verify an Anascorp initial infusion and define the findings that require reassessment.",
    "keyPoints": [
      "Anascorp contains equine F(ab′)2.",
      "Three reconstituted vials are diluted to a final 50 mL."
    ]
  },
  "local-sting-or-anaphylaxis": {
    "application": "Triage a request for itch treatment before selecting an OTC medicine.",
    "keyPoints": [
      "Breathing or circulatory symptoms change the priority.",
      "Antihistamines do not replace epinephrine."
    ]
  }
};
const lesson = (slug, title, summary, concepts, rows, question, choices, answer, rationale) => ({
  slug, title, summary, concepts,
  visual: {
    "exposure-before-product": "envenomation-exposure",
    "snake-first-aid": "envenomation-firstaid",
    "anavip-observation": "envenomation-observation",
    "coral-snake-boundary": "envenomation-coral",
    "spider-attribution": "envenomation-attribution",
    "widow-pain-and-antivenom": "envenomation-widow",
    "recluse-beyond-the-wound": "envenomation-recluse",
    "scorpion-systemic-signs": "envenomation-scorpion",
    "wound-prevention": "envenomation-tetanus",
    "pit-viper-products": "envenomation-phases",
    "crofab-preparation": "envenomation-volumes",
    "local-sting-or-anaphylaxis": "envenomation-triage",
    "follow-up-after-control": "envenomation-follow-up",
  }[slug],
  application: learningTasks[slug].application,
  lesson: rows.map(([heading, body]) => ({ heading, body })),
  keyPoints: learningTasks[slug].keyPoints,
  check: { question, choices, answer, rationale, reviewHref: `#${slug}` },
});

export const envenomationBitesStingsModule = {
  slug: "envenomation-bites-stings",
  number: "225",
  title: "Envenomation: Bites, Stings and Antivenoms",
  source: "RxPrep 2023 Chapters 39 and 81, current US product labeling, CDC guidance, poison-center guidance and primary clinical research",
  description: "Distinguish venom effects from allergic reactions and wound complications, and match emergency treatment to the responsible animal and antivenom product.",
  topics: ["Exposure identification", "Pit vipers", "Coral snakes", "Spiders", "Scorpions", "Antivenom safety"],
  outcomes: [
    "Recognize why a single first-aid rule cannot safely cover every bite or sting.",
    "Distinguish pit viper treatment from coral snake treatment.",
    "Explain why products with different antibody fragments are not interchangeable by vial count.",
    "Recognize uncertainty in an assumed spider-bite diagnosis.",
  ],
  submodules: [
    lesson("exposure-before-product", "Identify the Exposure Before the Product", "A bite wound, injected venom and an allergic reaction are different problems that can occur in the same encounter.", ["Animal", "Geography", "Physiology", "Time course"], [
      ["Reconstruct what happened", "Record where the exposure occurred, when it occurred, what was actually seen and how symptoms have changed. A confidently recalled animal name is not the same as expert identification. A photograph may help if it can be obtained safely; capturing the animal must not delay transport or create another bite."],
      ["Choose a regional pathway", "Venom composition and available antivenoms vary by species and region. Contact a poison center or medical toxicologist early. A familiar brand name is not evidence that the stocked product neutralizes the suspected venom. Travel history can change the treatment question even when the patient presents to a local hospital."],
      ["Separate the treatment targets", "The immediate task is to support threatened breathing and circulation while identifying the exposure. Antivenom addresses susceptible venom; it does not replace airway support, anaphylaxis treatment or appropriate wound care. Conversely, an antihistamine that reduces itch does not demonstrate that an envenomation has been controlled."],
      ["Individualize without inventing a dose rule", "Age, pregnancy, lactation, comorbid disease and fluid tolerance belong in the treatment assessment. Pregnancy data are limited for these products; uncertainty is not evidence of safety or a reason to abandon treatment of a serious exposure. Use product-specific guidance with toxicology and the relevant clinical team. Do not automatically apply adult fluid volumes to an infant or convert every antivenom to a weight-based vial dose."],
    ], "A traveler presents with an uncertain snakebite. What should guide product selection?", ["The nearest vial labeled antivenom", "Regional species assessment and specialist guidance", "The smallest package", "Any medicine used for itching"], 1, "The relevant exposure and product specificity must be established while urgent supportive care proceeds."),
    lesson("snake-first-aid", "Get Snakebite Care Without Adding Injury", "Safe transport and early specialist contact matter more than improvised attempts to remove venom.", ["Transport", "Remove constrictors", "No extraction", "Regional advice"], [
      ["Make the first minutes useful", "Keep the person still, arrange urgent medical care and remove rings, watches and tight items before swelling increases. A safe photograph can help identification, but do not handle or pursue the snake. Do not wait for dramatic swelling before obtaining care."],
      ["Reject damaging interventions", "Do not cut the wound, suck venom, apply a blood-flow-stopping tourniquet or put ice on a snakebite. Pressure immobilization is an exposure-specific technique for selected neurotoxic envenomations under regional guidance, not a universal instruction for North American pit vipers."],
      ["Keep supportive care active", "Observe breathing and responsiveness during transfer and communicate the exposure time and evolving findings. The regional poison center can help locate appropriate expertise and antivenom. An antivenom search must not delay airway or circulatory support."],
    ], "A companion proposes tightly wrapping a suspected North American pit viper bite and applying ice. What is the better response?", ["Use both to force venom out", "Arrange urgent care and avoid ice and constricting measures", "Cut the punctures before transport", "Catch the snake before leaving"], 1, "These interventions can add harm. Immobilization and regional advice should support prompt transport, not replace it."),
    lesson("pit-viper-products", "Match the Product and the Treatment Phase", "Initial control, reassessment and later treatment are separate decisions. A vial count belongs to a specific medicine.", ["CroFab", "Anavip", "Control", "Recurrence"], [
      ["Keep the indication clear", "CroFab and Anavip cover North American pit viper envenomation, including the relevant rattlesnake, copperhead and cottonmouth group. Anavip's indication is broader than the rattlesnake-only description in the book. Neither product name establishes treatment for a coral snake."],
      ["Read each schedule independently", "CroFab usually begins with four to six vials, with repeat initial-control dosing as needed; its labeled follow-up includes two vials every six hours for three doses after control. Anavip begins with ten vials, with additional ten-vial doses when needed for control; recurrent findings can require four-vial doses. These are clinician-managed regimens, not a conversion ratio between products."],
      ["Define what improved", "Treatment response requires assessment of local progression, systemic findings and coagulation results. A smaller area of pain is not sufficient evidence that all toxicity has resolved. Record which findings established control and which findings will trigger renewed assessment."],
    ], "A hospital changes from CroFab to Anavip. What must happen to the preparation and dosing plan?", ["Use the same number of vials automatically", "Ignore follow-up because the names differ", "Use the original drug's dilution by habit", "Rebuild the plan using the selected product's label"], 3, "The initial, repeat and later-dose schedules differ. Product-specific instructions must replace assumptions of vial-for-vial equivalence."),
    lesson("crofab-preparation", "Prepare CroFab Without Losing the Volume Distinction", "Reconstitution, final dilution and infusion are three separate steps.", ["18 mL per vial", "250 mL final", "Four-hour use", "Hypersensitivity"], [
      ["Reconstitute and dilute", "For CroFab, add 18 mL of 0.9% sodium chloride to each vial and invert gently until solids disappear. Do not shake; opalescence can remain. Combine the contents and dilute to a TOTAL of 250 mL. Use the prepared product within four hours."],
      ["Use a monitored infusion", "The label describes a 60-minute infusion with the first 10 minutes at 25-50 mL/hour, then an increase to 250 mL/hour if tolerated. Follow the pharmacy-approved administration protocol; the slow opening phase must not be omitted to meet a nominal completion time."],
      ["Check the allergy history", "CroFab contains ovine Fab and can cause acute or delayed hypersensitivity. Papaya or papain hypersensitivity requires explicit benefit-risk assessment and anaphylaxis readiness. Skin testing is not required. Stop the infusion and initiate emergency care for acute hypersensitivity."],
    ], "Four CroFab vials are reconstituted with 18 mL each. Which statement describes the final dilution?", ["The infusion must contain 322 mL", "The 72 mL replaces the need for further dilution", "Further dilute the combined contents to a total of 250 mL", "Use the Anascorp final volume"], 2, "Four times 18 mL is 72 mL of reconstitution diluent. The label specifies a final total of 250 mL, not 250 mL plus that volume."),
    lesson("anavip-observation", "Build Observation Into the Anavip Order", "Achieving initial control starts another phase of care rather than ending monitoring.", ["10 mL per vial", "Six-hour use", "18-hour observation", "Late dosing"], [
      ["Use the correct preparation", "Reconstitute each Anavip vial with 10 mL of 0.9% sodium chloride using gentle swirling. Combine and dilute to a TOTAL of 250 mL; very small children or infants may require fluid-volume adjustment. Use within six hours."],
      ["Monitor administration and control", "The labeled infusion begins at 25-50 mL/hour for 10 minutes before increasing toward 250 mL/hour if tolerated. Stop for an allergic reaction and treat immediately. Monitor for at least 60 minutes after completion, evaluating hypersensitivity, local progression, systemic findings and coagulation response."],
      ["Separate recurrence from maintenance", "After initial control, observe in a health care setting for at least 18 hours. Re-emerging findings may need four-vial doses. This is not an automatic scheduled four-vial maintenance series. Arrange follow-up for delayed allergic reactions; horse-protein allergy deserves specific attention."],
    ], "Initial control is achieved with Anavip at 14:00. When does its labeled minimum 18-hour observation period end?", ["18:00 that day", "02:00 the next day", "08:00 the next day", "Immediately after the infusion"], 2, "Fourteen hundred plus 18 hours is 08:00 the next day. This is a minimum observation interval, not an automatic discharge order."),
    lesson("coral-snake-boundary", "Keep Coral Snakes on Their Own Pathway", "The snake category changes the antivenom question and the physiologic threats that require observation.", ["Micrurus", "Neurotoxicity", "Ventilation", "Product access"], [
      ["Recognize the distinct group", "North American coral snakes are elapids rather than pit vipers. Neurotoxic effects can compromise swallowing and breathing. A limited skin finding must not be used to rule out a dangerous systemic exposure."],
      ["Confirm the actual antivenin", "The North American Coral Snake Antivenin label specifies Micrurus exposures, including eastern and Texas varieties. It is a separate equine product. Obtain expert guidance on indication, timing, airway monitoring and actual supply; a stocked crotaline product is not an automatic substitute."],
      ["Observe before symptoms appear", "Suspected coral snake bites require immediate hospital assessment and at least 24 hours of observation after the bite, according to Poison Control guidance. Neurologic effects can be delayed. The reviewed antivenin label prohibits prophylactic administration to asymptomatic patients; observation and access planning continue while clinicians assess for envenomation."],
      ["Respect the coverage boundary", "The label reports neutralization of eastern and Texas coral snake venom, but not Arizona/Sonoran coral snake venom. Do not infer coverage from the shared common name. Expert species assessment determines whether this particular medicine is relevant."],
      ["Allow for preparation time", "The coral antivenin label describes three to five vials for adults and adolescents, adjusted to response. Each vial uses 10 mL of sterile water for injection, with intermittent swirling rather than shaking; full dissolution commonly requires at least 30 minutes. Its IV instructions and pediatric fluid considerations differ from crotaline products. Pharmacy should verify the full administration plan while respiratory monitoring continues."],
      ["Verify operational availability", "A published label does not show that a particular hospital has usable stock. Confirm the product, lot, expiration, any applicable official extension, preparation time and transfer plan. An old extension notice cannot be applied to every vial or assumed still valid."],
    ], "Why should a coral snake exposure not simply inherit a pit viper order set?", ["It involves a different snake group and antivenom specificity", "All antivenoms contain the same antibodies", "Neurotoxicity cannot affect breathing", "Only the color of the vial matters"], 0, "Coral snake management requires a distinct product and specialist pathway, with attention to neurologic and respiratory effects."),
    lesson("spider-attribution", "Do Not Diagnose the Spider From the Wound Alone", "An unexplained lesion needs a differential diagnosis. Assigning it to an unseen spider can conceal a different disease.", ["Verified exposure", "Neurotoxicity", "Tissue injury", "Evidence limits"], [
      ["Recognize important patterns", "Widow envenomation can produce marked pain and muscle cramping; recluse injury can involve local tissue damage. These are useful patterns, not a substitute for history, examination and assessment of other causes. Breathing difficulty, spreading systemic symptoms or substantial tissue injury warrants urgent medical assessment."],
      ["Correct an inherited assumption", "The reference book includes hobo spiders in its potentially deadly list. Current evidence does not justify teaching hobo bites as an established cause of necrotic wounds. A prospective Oregon series found no necrosis among its verified bites, but included only one hobo bite; that small sample must not be described as proof that every possible bite is harmless."],
      ["Use appropriate first aid", "For a suspected spider bite, wash the area and use a wrapped cold compress, elevate when feasible and seek professional assessment. Do not attempt to extract venom. Prevention includes checking stored shoes, clothing and equipment and using protective clothing when handling undisturbed material."],
    ], "A patient labels an unexplained ulcer a hobo-spider bite without seeing a spider. Which response is most appropriate?", ["Accept the label as a confirmed cause", "Assume every ulcer is harmless", "Evaluate other causes and the exposure evidence", "Treat every ulcer with snake antivenom"], 2, "A presumed animal identification does not establish causation. The hobo-necrosis claim is not a sound basis for clinical diagnosis."),
    lesson("widow-pain-and-antivenom", "Escalate Widow Treatment From Symptoms and Severity", "A small skin lesion can accompany substantial pain, cramping and autonomic effects.", ["Latrodectism", "Analgesia", "Sedation safety", "Antivenom risk"], [
      ["Relate the pattern to the toxin", "Widow venom can trigger extensive neurotransmitter release. Pain, muscle cramping, sweating and gastrointestinal symptoms may extend beyond the bite site. Evaluate chest pain and marked hypertension rather than attributing every finding to uncomplicated local discomfort."],
      ["Use supported symptomatic treatment", "Poison-center guidance supports opioid or nonopioid analgesics and benzodiazepines for appropriate patients. Combining sedating medicines requires respiratory and mental-status monitoring. Routine calcium treatment is not supported by current evidence, despite recommendations in the older antivenin insert."],
      ["Make escalation a specialist decision", "Severe findings or symptoms refractory to repeated treatment can justify considering widow antivenom with a toxicologist. The equine product carries anaphylaxis risk. Review asthma and prior anaphylaxis explicitly: Utah Poison Control advises against this antivenom in those patients. Confirm stock and resuscitation readiness before administration."],
      ["Read the widow preparation instructions separately", "The reviewed equine widow antivenin uses one reconstituted vial for adults or children, with a possible repeat dose. Reconstitute with 2.5 mL of sterile water for injection; unlike the other products discussed here, this label instructs shaking to dissolve. For IV administration it describes 10-50 mL saline over 15 minutes. Store unreconstituted stock at 2-8°C without freezing. Specialist and pharmacy review must reconcile the older insert with current treatment and emergency protocols."],
      ["Do not mistake a test for protection", "The older widow insert calls for skin or conjunctival testing but explicitly warns that a negative result does not prevent anaphylaxis. Do not import its historic tourniquet and epinephrine directions into a modern emergency plan. Testing, any exceptional desensitization decision and administration belong in a specialist setting prepared to manage anaphylaxis."],
    ], "Severe widow-associated pain persists after repeated symptomatic treatment. Which next step best fits the evidence?", ["Give calcium routinely because an older insert recommends it", "Assume persistent pain excludes envenomation", "Obtain toxicology input about antivenom and its hypersensitivity risks", "Select Anascorp because both exposures are arthropods"], 2, "Refractory or severe illness warrants specialist escalation. Antivenoms are exposure-specific, and an older calcium recommendation should not override current evidence."),
    lesson("recluse-beyond-the-wound", "Look Beyond the Recluse Wound", "The skin examination does not settle whether red cells and other organs are being injured.", ["Delayed hemolysis", "Reassessment", "Evidence limits"], [
      ["Watch the evolving illness", "After suspected recluse envenomation, new fever, malaise, muscle pain or dark urine needs prompt reassessment. Hemolysis can be delayed beyond four days. A Vanderbilt referral cohort documented both intravascular and extravascular hemolysis; a negative urine dipstick did not exclude it."],
      ["Investigate the clinical change", "Worsening systemic illness requires clinical assessment and appropriate blood counts and hemolysis testing, with evaluation for renal injury and rhabdomyolysis. Do not wait for an impressive necrotic lesion before assessing a deteriorating patient. Arrange poison-center guidance and a specific follow-up plan."],
      ["Keep the evidence in proportion", "The cohort was retrospective and selected through toxicology referral. Its complication rates cannot represent every community bite. Its local management protocol avoided dapsone and routine antibiotics or early surgical procedures; that is not evidence to withhold treatment for a separately established infection. Specialist assessment should guide wound and systemic care."],
    ], "A patient becomes unwell five days after suspected recluse envenomation, but a urine dipstick is negative for blood. What follows?", ["The dipstick excludes all hemolysis", "Evaluate delayed systemic complications despite the negative dipstick", "Wait for skin necrosis before ordering any assessment", "Treat with pit viper antivenom"], 1, "Delayed and extravascular hemolysis can escape a urine-only screen; new systemic illness requires reassessment."),
    lesson("scorpion-systemic-signs", "Treat the Scorpion Syndrome, Not Just the Sting", "Abnormal eye movements, poor muscle control and secretions can signal toxicity that threatens breathing.", ["Centruroides", "F(ab′)2", "Airway", "Reassessment"], [
      ["Recognize the treatment threshold", "Anascorp is equine F(ab′)2, not Fab. Its label calls for prompt treatment of clinically important envenomation, including abnormal eye movements, impaired muscle control, slurred speech, respiratory distress, excessive secretions or vomiting. Assess breathing while arranging treatment."],
      ["Prepare the actual product", "Start with three vials. Gently swirl each with 5 mL of 0.9% sodium chloride, combine, then dilute to a TOTAL of 50 mL. Infuse intravenously over 10 minutes. If needed, additional doses are one vial at intervals of 30-60 minutes, each diluted to 50 mL and infused over 10 minutes."],
      ["Continue observation", "Monitor during and up to 60 minutes after each infusion. Horse-protein allergy and previous equine antivenom exposure matter; emergency treatment for hypersensitivity must be available. Counsel about delayed serum sickness, including fever, rash and joint symptoms, for up to 14 days after discharge."],
    ], "Three initial Anascorp vials each receive 5 mL of saline. What is the labeled final infusion volume?", ["15 mL", "50 mL", "65 mL", "150 mL"], 1, "The combined reconstituted contents are further diluted to a total of 50 mL. Do not add them to an untouched 50-mL bag."),
    lesson("local-sting-or-anaphylaxis", "Separate Local Itch From an Allergic Emergency", "The treatment decision changes when symptoms extend to breathing or circulation.", ["Local care", "Hydrocortisone", "Epinephrine", "Reassessment"], [
      ["Treat uncomplicated local symptoms", "For a minor insect bite or sting, move away from the exposure, remove a retained stinger promptly, wash with soap and water and use a cloth-wrapped cold application for 10-20 minutes. An appropriate oral antihistamine, calamine or low-strength hydrocortisone can relieve itch. Follow the selected product's age, site and duration instructions."],
      ["Recognize the emergency", "Rapid wheeze, throat swelling, faintness or circulatory compromise after a sting requires immediate emergency action. Hives may be absent. Give intramuscular epinephrine promptly according to the emergency protocol or prescribed autoinjector and activate emergency assistance. Antihistamines relieve skin symptoms but do not replace epinephrine. Persistent or recurrent symptoms need monitored medical care."],
      ["Reassess a changing wound", "Progressive pain, marked swelling, pus, fever or systemic illness needs evaluation. Local warmth alone does not establish bacterial infection. Do not transfer this self-care pathway to an uncertain snakebite, a suspected medically important spider bite or systemic scorpion toxicity."],
    ], "A person asks for diphenhydramine after a sting but is wheezing and nearly faints. What is the priority?", ["Wait for an oral antihistamine to work", "Apply hydrocortisone first", "Treat suspected anaphylaxis with epinephrine and emergency assistance", "Choose any available antivenom"], 2, "Airway and circulatory findings require immediate anaphylaxis treatment; relief of itch is a secondary goal."),
    lesson("wound-prevention", "Make Tetanus Prevention Wound-Specific", "A generic ten-year reminder is not enough for a puncture wound.", ["Vaccination history", "Dirty wound", "TIG", "Wound care"], [
      ["Classify the wound", "CDC includes penetrating and puncture wounds in the dirty/major category. Clean the wound and evaluate contamination, foreign material and tissue damage."],
      ["Choose vaccine by history", "With a completed primary series, dirty/major wounds warrant a booster when the last dose was at least five years ago; clean minor wounds use a ten-year interval. An unknown or incomplete history requires vaccination for any wound."],
      ["Assess immune globulin separately", "For dirty/major wounds, TIG is indicated with an unknown or incomplete primary series, no prior vaccination, HIV or severe immunodeficiency. The prophylaxis dose is 250 IU intramuscularly. TIG is not indicated for clean minor wounds. Antibiotics do not substitute for tetanus prevention, though established infection needs treatment."],
    ], "An immunocompetent adult has a puncture wound, a complete primary tetanus series and a last dose six years ago. Which prevention step follows?", ["No booster until ten years", "Tetanus booster; TIG is not indicated solely by this history", "Antibiotics instead of vaccination", "TIG alone for every puncture"], 1, "A puncture uses the dirty/major pathway, with a five-year booster interval after a complete series. TIG eligibility is assessed separately."),
    lesson("follow-up-after-control", "Plan for What Can Return After Control", "Clinical improvement must be followed by a clear plan for recurrence, adverse reactions and wound recovery.", ["Coagulopathy", "Serum sickness", "Return precautions", "Ownership"], [
      ["Distinguish delayed problems", "After pit viper treatment, new bruising, gum bleeding, blood in urine or stool, or persistent oozing needs prompt assessment. Fever, rash and joint or muscle symptoms can instead suggest a delayed antivenom reaction. Patients should report either pattern rather than attempting to decide the mechanism themselves."],
      ["Use the product-specific monitoring plan", "CroFab-associated recurrent coagulopathy can persist for one to two weeks or longer. Patients with coagulopathy during hospitalization need follow-up for one week or longer as clinically directed. Review anticoagulant and antiplatelet therapy with the treating team; do not give a blanket instruction to stop essential medicines."],
      ["Close the handoff", "Document the suspected animal, product and doses received, response, laboratory trends, acute reactions and follow-up owner. Confirm that the patient can access reassessment and understands the written return instructions. A stable examination at discharge is a time-specific finding, not a promise that later symptoms are harmless."],
    ], "Several days after treated pit viper envenomation, a patient develops new gum bleeding. What is the best response?", ["Assume initial control rules out recurrence", "Arrange prompt reassessment for a delayed complication", "Take an extra antihistamine and wait", "Stop every prescribed medicine without advice"], 1, "New bleeding after discharge requires reassessment. The care team should evaluate recurrent coagulation abnormalities and relevant medicines."),
  ],
  questionBank: envenomationBitesStingsQuestionBank,
  references: [
    { label: "CDC: Wound management to prevent tetanus", href: "https://www.cdc.gov/tetanus/hcp/clinical-guidance/index.html" },
    { label: "Black widow antivenin prescribing information", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=600e54ad-af13-462f-8a2d-2c3f7d91a8cd&type=display" },
    { label: "Poison Control: Insect and spider bites", href: "https://www.poison.org/articles/insect-and-spider-bites" },
    { label: "Poison Control: Coral snake exposure", href: "https://www.poison.org/articles/coral-snake-bite-treatment-203" },
    { label: "CDC: Anaphylaxis recognition and emergency management", href: "https://www.cdc.gov/vaccines/hcp/imz-best-practices/preventing-managing-adverse-reactions.html" },
    { label: "Loden et al.: Cutaneous-hemolytic loxoscelism cohort", href: "https://www.vumc.org/poison-control/sites/default/files/Cutaneous-hemolytic%20loxoscelism%20-%20new%20understandings-%20Goes%20with%208-3-220%20QOW.pdf" },
    { label: "Anascorp prescribing information", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=5cb65048-a30c-48e5-8bc8-897983d08068&type=display" },
    { label: "Utah Poison Control: Black widow envenomation", href: "https://poisoncontrol.utah.edu/news/2023/09/case-files-black-widow-spider-envenomation" },
    { label: "CDC Yellow Book: Envenomations", href: "https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/poisonings-envenomations-and-toxic-exposures-during-travel.html" },
    { label: "CDC NIOSH: Venomous Spiders", href: "https://www.cdc.gov/niosh/outdoor-workers/about/venomous-spiders.html" },
    { label: "Verified spider bites in Oregon: primary study", href: "https://pubmed.ncbi.nlm.nih.gov/24726469/" },
    { label: "CroFab prescribing information", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=77abd784-3387-420d-abdc-4fe97215d233&type=display" },
    { label: "Anavip prescribing information", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a16596a5-e87e-40c2-8e34-cea5839849c3&type=display" },
    { label: "North American Coral Snake Antivenin prescribing information", href: "https://labeling.pfizer.com/showlabeling.aspx?format=PDF&id=441" },
  ],
};

// Original clinical cases: distinct decisions, with no cross-topic distractor generator.
const clinicalCases = [
  {
    "id": "common-ear-localize",
    "lesson": "ear-triage",
    "question": "A patient requests wax drops for new ear pain without an examination. Which information best guides the initial triage?",
    "choices": [
      "Onset, hearing change, discharge, vertigo, trauma and relevant host risks",
      "The preferred fragrance of the drops",
      "The color of wax alone",
      "Whether the patient has previously purchased the same brand"
    ],
    "answer": 0,
    "rationale": "Ear complaints can arise from several structures. Symptoms and host factors guide examination and urgency; a request for wax drops does not establish impaction.",
    "reviewHref": "#ear-triage"
  },
  {
    "id": "common-ear-sudden-clear-canal",
    "lesson": "ear-triage",
    "question": "An adult abruptly loses hearing in one ear this morning. The canal appears clear. What is the appropriate response?",
    "choices": [
      "Arrange urgent hearing and ENT assessment",
      "Try wax drops for four days first",
      "Wait for ear pain before referring",
      "Reassure because no obstruction is visible"
    ],
    "answer": 0,
    "rationale": "A clear canal does not exclude sensorineural loss. Sudden hearing change requires urgent assessment even without pain or visible wax.",
    "reviewHref": "#ear-triage"
  },
  {
    "id": "common-ear-mastoid-red-flag",
    "lesson": "ear-triage",
    "question": "Ear pain is accompanied by swelling behind the ear and outward displacement of the pinna. What is the safest next step?",
    "choices": [
      "Urgent medical assessment for deeper disease",
      "Routine cerumen self-treatment",
      "An extra week of leftover ear drops",
      "Reassurance based on the absence of tinnitus"
    ],
    "answer": 0,
    "rationale": "Mastoid-region swelling and pinna displacement are red flags. Routine canal self-care can delay assessment of a serious infection.",
    "reviewHref": "#ear-triage"
  },
  {
    "id": "common-ear-referred-pain",
    "lesson": "ear-triage",
    "question": "A patient has ear pain triggered by chewing, with an unrevealing ear examination. What should the clinician consider?",
    "choices": [
      "A referred source such as the jaw or teeth",
      "Cerumen impaction is established by pain alone",
      "A normal canal proves that no evaluation is needed",
      "Increasing an otic antibiotic dose will identify the cause"
    ],
    "answer": 0,
    "rationale": "Jaw, dental and throat disorders can refer pain to the ear. Treatment should follow localization rather than the location of perceived pain alone.",
    "reviewHref": "#ear-triage"
  },
  {
    "id": "common-ear-aoe-recognition",
    "lesson": "acute-otitis-externa",
    "question": "After swimming, an otherwise healthy adult develops a swollen inflamed canal and pain with tragal pressure. Disease is confined to the canal and the membrane is intact. Which initial antimicrobial approach fits?",
    "choices": [
      "Appropriate topical therapy for acute otitis externa",
      "Routine oral antibiotics instead of local treatment",
      "Oral antiviral treatment",
      "Cerumenolytic drops as the only treatment"
    ],
    "answer": 0,
    "rationale": "Uncomplicated diffuse external-canal infection is generally treated topically. Systemic therapy requires a reason beyond uncomplicated canal disease.",
    "reviewHref": "#acute-otitis-externa"
  },
  {
    "id": "common-ear-aoe-analgesia",
    "lesson": "acute-otitis-externa",
    "question": "A patient starting antibiotic ear drops has pain that prevents sleep. What should the care plan also address?",
    "choices": [
      "Analgesia chosen for pain severity and patient risks",
      "Wait for the antibiotic to provide immediate pain relief",
      "Increase antibiotic frequency solely for analgesia",
      "Withhold pain treatment until the course ends"
    ],
    "answer": 0,
    "rationale": "Antimicrobial treatment does not replace pain assessment. Select analgesia with attention to kidney, liver, bleeding and other patient risks.",
    "reviewHref": "#acute-otitis-externa"
  },
  {
    "id": "common-ear-blocked-delivery",
    "lesson": "acute-otitis-externa",
    "question": "Prescribed drops pool at the entrance of a markedly swollen canal. What is the best next step?",
    "choices": [
      "Arrange trained-clinician assessment for clearing obstruction or a wick",
      "Double the dose until the canal opens",
      "Push a cotton swab through the swollen canal",
      "Stop treatment because pooling proves allergy"
    ],
    "answer": 0,
    "rationale": "Obstruction prevents tissue contact. Aural toilet or a clinician-placed wick can improve delivery; forcing objects or simply adding volume does not reliably solve the problem.",
    "reviewHref": "#acute-otitis-externa"
  },
  {
    "id": "common-ear-water-trauma",
    "lesson": "acute-otitis-externa",
    "question": "During treatment of an inflamed external canal, which counseling best protects healing?",
    "choices": [
      "Limit water entry and avoid scratching or inserting objects",
      "Use cotton swabs after every dose",
      "Continue swimming to wash out debris",
      "Use tight earbuds to hold medication inside"
    ],
    "answer": 0,
    "rationale": "Moisture and mechanical injury can perpetuate canal inflammation. Advice should protect the canal and allow the prescribed treatment to reach it.",
    "reviewHref": "#acute-otitis-externa"
  },
  {
    "id": "common-ear-membrane-unknown",
    "lesson": "tympanum-host-risk",
    "question": "Debris prevents visualization of the eardrum in a patient with drainage. What safety conclusion is justified?",
    "choices": [
      "Membrane integrity remains uncertain and must inform product selection",
      "The membrane is intact because it was not seen to be perforated",
      "Drainage establishes a completely intact membrane",
      "All otic products are equally suitable"
    ],
    "answer": 0,
    "rationale": "Failure to see a perforation is not confirmation of an intact membrane. Potential middle-ear exposure changes product safety.",
    "reviewHref": "#tympanum-host-risk"
  },
  {
    "id": "common-ear-tube-selection",
    "lesson": "tympanum-host-risk",
    "question": "A patient with a tympanostomy tube needs treatment for acute otitis externa. Which product-selection principle applies?",
    "choices": [
      "Choose a non-ototoxic preparation appropriate for middle-ear exposure",
      "Use any neomycin product because it is topical",
      "Choose by antibiotic class name without checking the formulation",
      "Use an alcohol-based preparation to improve penetration"
    ],
    "answer": 0,
    "rationale": "A tube creates a route to the middle ear. The exact formulation and exposure suitability matter, not just the drug class.",
    "reviewHref": "#tympanum-host-risk"
  },
  {
    "id": "common-ear-invasive-risk",
    "lesson": "tympanum-host-risk",
    "question": "A patient with diabetes has persistent severe nocturnal ear pain and canal granulation despite routine drops. What is the priority?",
    "choices": [
      "Urgent specialist evaluation for possible necrotizing otitis externa",
      "Repeat the same drops indefinitely",
      "Treat the granulation as ordinary wax",
      "Delay evaluation until fever develops"
    ],
    "answer": 0,
    "rationale": "Persistent severe pain and granulation in a high-risk host raise concern for invasive infection. Absence of fever does not justify delaying assessment.",
    "reviewHref": "#tympanum-host-risk"
  },
  {
    "id": "common-ear-aoe-nonresponse",
    "lesson": "tympanum-host-risk",
    "question": "Acute otitis externa has not improved after seventy-two hours of prescribed therapy. What is the best response?",
    "choices": [
      "Reassess diagnosis, delivery, obstruction, adherence and extension",
      "Continue unchanged for another month",
      "Automatically add an oral antibiotic without examination",
      "Assume resistance without checking administration"
    ],
    "answer": 0,
    "rationale": "Early nonresponse warrants reassessment. Delivery failure, another diagnosis and extension are among the possibilities; none is established by nonresponse alone.",
    "reviewHref": "#tympanum-host-risk"
  },
  {
    "id": "common-ear-systemic-indication",
    "lesson": "otic-pharmacotherapy",
    "question": "A patient treated for otitis externa now has cellulitis extending beyond the canal. What changes?",
    "choices": [
      "Systemic treatment may be indicated after reassessment",
      "Topical treatment alone is mandatory regardless of extension",
      "Wax removal replaces antimicrobial treatment",
      "Extension is an expected harmless effect of drops"
    ],
    "answer": 0,
    "rationale": "Spread beyond the canal changes the treatment pathway. The clinician must assess severity, host risks and the need for systemic therapy.",
    "reviewHref": "#otic-pharmacotherapy"
  },
  {
    "id": "common-ear-neomycin-exposure",
    "lesson": "otic-pharmacotherapy",
    "question": "Why does suspected eardrum perforation matter when considering a neomycin-containing ear product?",
    "choices": [
      "Middle-ear exposure can increase concern for ototoxic injury",
      "Perforation prevents the drug from reaching vulnerable tissues",
      "Topical delivery guarantees no hearing risk",
      "Only oral neomycin can injure hearing"
    ],
    "answer": 0,
    "rationale": "Aminoglycoside otic exposure requires membrane assessment. Prefer an appropriate non-ototoxic option when the membrane is nonintact.",
    "reviewHref": "#otic-pharmacotherapy"
  },
  {
    "id": "common-ear-formulation-route",
    "lesson": "otic-pharmacotherapy",
    "question": "A patient asks to use leftover antibiotic ear drops for a red eye. What is the correct advice?",
    "choices": [
      "Do not put an otic product in the eye; obtain appropriate eye assessment",
      "Use half the ear dose in the eye",
      "Dilute the drops with tap water first",
      "Use them if the antibiotic name matches an eye product"
    ],
    "answer": 0,
    "rationale": "Otic and ophthalmic products are not automatically interchangeable. Vehicle, sterility, concentration and route suitability differ.",
    "reviewHref": "#otic-pharmacotherapy"
  },
  {
    "id": "common-ear-ciprodex-course",
    "lesson": "otic-pharmacotherapy",
    "question": "A seven-year-old is prescribed ciprofloxacin 0.3%/dexamethasone 0.1% otic suspension for middle-ear infection through tubes. Which course matches the reviewed label?",
    "choices": [
      "Four drops in the affected ear twice daily for seven days",
      "Three drops once daily for three days",
      "Ten drops every hour until drainage stops",
      "Four drops weekly for one month"
    ],
    "answer": 0,
    "rationale": "The reviewed combination label specifies four drops twice daily for seven days. Tube-related administration also requires the product-specific technique.",
    "reviewHref": "#otic-pharmacotherapy"
  },
  {
    "id": "common-ear-ciprohc-course",
    "lesson": "otic-pharmacotherapy",
    "question": "An adult with an intact eardrum is prescribed Cipro HC for acute otitis externa. Which instruction matches this product?",
    "choices": [
      "Three drops in the affected ear twice daily for seven days",
      "Four drops twice daily because all ciprofloxacin combinations share a dose",
      "Use until pain resolves, even if that is one dose",
      "Use the entire bottle once daily"
    ],
    "answer": 0,
    "rationale": "Cipro HC has its own dosing instructions. Sharing an antibiotic ingredient does not make its dose identical to ciprofloxacin/dexamethasone.",
    "reviewHref": "#otic-pharmacotherapy"
  },
  {
    "id": "common-ear-tc-adult-dose",
    "lesson": "otic-pharmacotherapy",
    "question": "An adult is prescribed Cortisporin TC after membrane and allergy assessment. Which dosing instruction matches its label?",
    "choices": [
      "Five drops three or four times daily",
      "Three drops twice weekly",
      "Ten drops once per week",
      "One drop daily for six weeks"
    ],
    "answer": 0,
    "rationale": "Cortisporin TC adult dosing is five drops three or four times daily. The suspension must be shaken and treatment must not exceed the labeled duration.",
    "reviewHref": "#otic-pharmacotherapy"
  },
  {
    "id": "common-ear-shake-handwarm",
    "lesson": "ear-drop-technique",
    "question": "A patient keeps an otic suspension in a cool room. How should a dose be prepared?",
    "choices": [
      "Shake as directed and warm the closed bottle in the hands",
      "Microwave the bottle until hot",
      "Boil the suspension to sterilize it",
      "Skip shaking so sediment stays in the bottle"
    ],
    "answer": 0,
    "rationale": "Shaking redistributes the suspension; gentle hand warming reduces discomfort or dizziness from cold drops. Uncontrolled heating is inappropriate.",
    "reviewHref": "#ear-drop-technique"
  },
  {
    "id": "common-ear-teachback",
    "lesson": "ear-drop-technique",
    "question": "A caregiver reports understanding the ear-drop directions. Which check best confirms the skill?",
    "choices": [
      "Observe preparation, correct ear, dose, tip clearance and positioning",
      "Ask only whether the caregiver can name the antibiotic",
      "Assume technique is correct because the label was read",
      "Check the bottle color without observing a dose"
    ],
    "answer": 0,
    "rationale": "Return demonstration can reveal delivery problems that a verbal assurance misses. Follow the exact product instructions for positioning and contact time.",
    "reviewHref": "#ear-drop-technique"
  },
  {
    "id": "common-ear-tragus-tube",
    "lesson": "ear-drop-technique",
    "question": "For ciprofloxacin/dexamethasone treatment of a middle-ear infection through tubes, what maneuver follows instillation?",
    "choices": [
      "Gently pump the tragus five times and keep the ear upward for at least one minute",
      "Insert the dropper through the tube",
      "Stand up immediately and let the drops drain",
      "Forcefully irrigate the canal with water"
    ],
    "answer": 0,
    "rationale": "The product instructions use gentle tragal pumping to aid passage through the tube. Instrumentation and force are not part of this technique.",
    "reviewHref": "#ear-drop-technique"
  },
  {
    "id": "common-ear-dwell-product",
    "lesson": "ear-drop-technique",
    "question": "A patient switches from Cipro HC to Cortisporin TC. What should happen to the positioning instructions?",
    "choices": [
      "Review the new label because contact-time instructions differ",
      "Keep the old timing because all ear drops are identical",
      "Eliminate positioning for suspensions",
      "Increase the drop count instead of keeping the ear upward"
    ],
    "answer": 0,
    "rationale": "Delivery instructions are product specific. The reviewed Cipro HC instructions use thirty to sixty seconds; Cortisporin TC specifies five minutes.",
    "reviewHref": "#ear-drop-technique"
  },
  {
    "id": "common-ear-contamination",
    "lesson": "ear-drop-technique",
    "question": "During a demonstration, the dropper tip touches the canal. Which correction is most useful?",
    "choices": [
      "Keep the tip clear of skin and follow instructions for a contaminated applicator",
      "Press it more firmly to seal the canal",
      "Share the bottle with another family member",
      "Touch the tip to a finger before each dose"
    ],
    "answer": 0,
    "rationale": "Tip contact can contaminate the applicator. Avoid contact without assuming every otic formulation is sterile.",
    "reviewHref": "#ear-drop-technique"
  },
  {
    "id": "common-ear-wax-definition",
    "lesson": "cerumen-impaction",
    "question": "Visible wax is present, but the patient has no symptoms and the required examination is unobstructed. What is appropriate?",
    "choices": [
      "Usually leave the protective wax alone",
      "Remove it routinely because visible wax is disease",
      "Start antibiotic drops for the wax",
      "Schedule daily irrigation indefinitely"
    ],
    "answer": 0,
    "rationale": "Visible wax alone is not impaction. Symptoms or interference with a needed examination determine whether removal is indicated.",
    "reviewHref": "#cerumen-impaction"
  },
  {
    "id": "common-ear-wax-exam",
    "lesson": "cerumen-impaction",
    "question": "Wax prevents the clinician from examining the eardrum for a current clinical problem. The patient denies fullness. Does this meet the impaction definition?",
    "choices": [
      "Yes, obstruction of a needed examination is sufficient",
      "No, fullness is required",
      "Only if both canals are completely blocked",
      "Only after a cerumenolytic fails"
    ],
    "answer": 0,
    "rationale": "A clinically necessary examination can justify removal even when the patient does not report a wax symptom.",
    "reviewHref": "#cerumen-impaction"
  },
  {
    "id": "common-ear-wax-risk",
    "lesson": "cerumen-impaction",
    "question": "A patient with prior ear surgery and possible perforation requests a home irrigation kit. What is the best response?",
    "choices": [
      "Arrange an appropriate examination and removal plan before irrigation",
      "Recommend higher pressure to clear the altered canal",
      "Assume surgery makes irrigation safer",
      "Use peroxide first to establish whether a perforation exists"
    ],
    "answer": 0,
    "rationale": "Prior surgery and membrane uncertainty alter removal safety. Self-treatment must not substitute for assessment of anatomy and host risk.",
    "reviewHref": "#cerumen-impaction"
  },
  {
    "id": "common-ear-wax-agent",
    "lesson": "cerumen-impaction",
    "question": "For a suitable patient with cerumen impaction, which statement about softening agents is most accurate?",
    "choices": [
      "Choice depends on the patient and product; no agent is best for everyone",
      "The strongest peroxide is always superior",
      "Every agent is safe with a perforation",
      "All products have the same age and duration limits"
    ],
    "answer": 0,
    "rationale": "Wax-softening options differ in instructions and suitability. Product labeling and the clinical assessment govern use.",
    "reviewHref": "#cerumen-impaction"
  },
  {
    "id": "common-ear-wax-cleaning",
    "lesson": "cerumen-impaction",
    "question": "A patient uses cotton swabs deep in the canal and is considering ear candles. What counseling is appropriate?",
    "choices": [
      "Avoid both practices and discuss safe removal if needed",
      "Use a narrower swab to reach farther",
      "Use candles to confirm the membrane is intact",
      "Alternate swabs and candles to reduce impaction"
    ],
    "answer": 0,
    "rationale": "Swabs can push wax inward or injure tissue; candles do not provide reliable benefit and can cause burns or injury.",
    "reviewHref": "#cerumen-impaction"
  },
  {
    "id": "common-ear-wax-persistent",
    "lesson": "cerumen-impaction",
    "question": "After documented complete wax removal, unilateral hearing difficulty persists. What comes next?",
    "choices": [
      "Evaluate other causes of hearing loss",
      "Repeat removal despite a clear canal",
      "Continue cerumenolytics indefinitely",
      "Declare success solely because the wax is gone"
    ],
    "answer": 0,
    "rationale": "Symptom response must be assessed after clearance. Persistent impairment needs another diagnostic pathway.",
    "reviewHref": "#cerumen-impaction"
  },
  {
    "id": "common-ear-tinnitus-classify",
    "lesson": "tinnitus",
    "question": "What question is particularly useful when distinguishing a pulsatile tinnitus pattern?",
    "choices": [
      "Does the sound occur in time with your heartbeat?",
      "Which brand of cotton swab do you use?",
      "Do you prefer ear drops or tablets?",
      "Can you ignore it for ten seconds?"
    ],
    "answer": 0,
    "rationale": "Pulse synchrony changes the differential and can prompt evaluation for a secondary cause. Laterality, hearing and associated symptoms also matter.",
    "reviewHref": "#tinnitus"
  },
  {
    "id": "common-ear-tinnitus-pulse",
    "lesson": "tinnitus",
    "question": "A patient develops a new heartbeat-synchronous sound in one ear. What is appropriate?",
    "choices": [
      "Prompt targeted evaluation rather than routine reassurance",
      "Assume it is ordinary primary tinnitus without assessment",
      "Treat with wax drops regardless of examination",
      "Wait for bilateral symptoms before referral"
    ],
    "answer": 0,
    "rationale": "New pulsatile tinnitus needs assessment. Clinical findings determine further specialty evaluation and testing.",
    "reviewHref": "#tinnitus"
  },
  {
    "id": "common-ear-tinnitus-medicine",
    "lesson": "tinnitus",
    "question": "Tinnitus begins after a medication dose increase. What is the best way to evaluate a possible drug contribution?",
    "choices": [
      "Review timing, dose, other exposures, hearing and relevant host factors",
      "Declare causation from the timing alone",
      "Stop every prescription immediately",
      "Ignore medications because tinnitus is always noise-related"
    ],
    "answer": 0,
    "rationale": "A temporal association is useful but not proof. The medication review must consider competing explanations and a safe treatment plan.",
    "reviewHref": "#tinnitus"
  },
  {
    "id": "common-ear-tinnitus-function",
    "lesson": "tinnitus",
    "question": "After tinnitus-focused CBT, a patient still hears ringing but sleeps and functions better. How should this be interpreted?",
    "choices": [
      "Improved function is a meaningful treatment benefit",
      "Treatment failed because the sound persists",
      "CBT must be stopped immediately",
      "The improvement proves that no hearing assessment is needed"
    ],
    "answer": 0,
    "rationale": "Tinnitus management aims to reduce distress and functional impact; complete disappearance of sound is not required for benefit.",
    "reviewHref": "#tinnitus"
  },
  {
    "id": "common-ear-tinnitus-hearing",
    "lesson": "tinnitus",
    "question": "An adult has bothersome tinnitus and hearing loss. Which management option merits assessment?",
    "choices": [
      "Hearing-aid evaluation alongside tinnitus support",
      "Ear candles as the preferred tinnitus treatment",
      "Long-term antibiotics without infection",
      "Routine supplements promised to eliminate ringing"
    ],
    "answer": 0,
    "rationale": "Hearing care can support communication and tinnitus management. Treatment should set realistic goals and avoid unsupported cure claims.",
    "reviewHref": "#tinnitus"
  },
  {
    "id": "common-ear-pediatric-assessment",
    "lesson": "special-populations-follow-up",
    "question": "A toddler has ear pain and a possible canal foreign body. What should a pharmacist recommend?",
    "choices": [
      "Direct assessment rather than blind home removal",
      "A cotton swab to push the object inward",
      "An adult otic product at half its dose without checking the label",
      "Wait until the child can describe the object precisely"
    ],
    "answer": 0,
    "rationale": "Children may not describe symptoms reliably. Foreign-body concern requires assessment, and pediatric treatment must follow the exact product and diagnosis.",
    "reviewHref": "#special-populations-follow-up"
  },
  {
    "id": "common-ear-older-hearing",
    "lesson": "special-populations-follow-up",
    "question": "An older adult still struggles to hear conversations after wax clearance. What should the plan include?",
    "choices": [
      "Audiologic evaluation and review of communication needs",
      "Reassurance that aging makes evaluation unnecessary",
      "Monthly wax removal without reassessment",
      "Attributing the difficulty to cognition without checking hearing"
    ],
    "answer": 0,
    "rationale": "Wax, hearing loss and cognitive or communication difficulties can coexist. Correcting one reversible problem does not establish the cause of remaining impairment.",
    "reviewHref": "#special-populations-follow-up"
  },
  {
    "id": "common-ear-delivery-support",
    "lesson": "special-populations-follow-up",
    "question": "An older adult cannot reliably position the bottle because of hand weakness. What is the most useful next step?",
    "choices": [
      "Arrange practical administration help and verify technique",
      "Increase the dose to compensate for missed drops",
      "Assume oral instructions are enough",
      "Stop therapy without contacting the prescriber"
    ],
    "answer": 0,
    "rationale": "Dexterity and support affect whether treatment reaches the ear. Adapt delivery and confirm that the patient or caregiver can follow the plan.",
    "reviewHref": "#special-populations-follow-up"
  },
  {
    "id": "common-ear-worsening-before-check",
    "lesson": "special-populations-follow-up",
    "question": "A patient was told to reassess otitis externa if it had not improved by seventy-two hours, but develops facial weakness on day one. What should happen?",
    "choices": [
      "Seek urgent assessment now",
      "Wait until the scheduled checkpoint",
      "Use an extra dose and ignore the weakness",
      "Switch to wax drops"
    ],
    "answer": 0,
    "rationale": "A response checkpoint is not a waiting period for new red flags. Neurologic change requires prompt escalation.",
    "reviewHref": "#special-populations-follow-up"
  }
];

const productCases=[
{
  "id": "common-ear-route-written",
  "lesson": "ear-drop-technique",
  "question": "An order uses an unclear abbreviation that could indicate an eye or an ear. What should the pharmacist do?",
  "choices": [
    "Clarify the intended site and write it in full",
    "Choose the route from bottle color",
    "Assume all drops can be used in either site",
    "Ask the patient to try both routes"
  ],
  "answer": 0,
  "rationale": "Eye and ear abbreviations are error-prone. Clarification prevents wrong-site administration.",
  "reviewHref": "#ear-drop-technique"
},
{
  "id": "common-ear-tinnitus-imaging",
  "lesson": "tinnitus",
  "question": "An adult has stable bilateral nonpulsatile tinnitus, symmetric hearing loss and an otherwise normal history and examination. Which plan fits?",
  "choices": [
    "Hearing and tinnitus care without routine imaging",
    "Routine head CT solely because tinnitus is present",
    "Emergency vascular imaging for every such patient",
    "Serial scans until the sound disappears"
  ],
  "answer": 0,
  "rationale": "Routine imaging is not recommended for this pattern. New focal, asymmetric or pulsatile findings change the evaluation.",
  "reviewHref": "#tinnitus"
},
{
  "id": "common-ear-ofloxacin-indication",
  "lesson": "otic-pharmacotherapy",
  "question": "A fifteen-year-old receives ofloxacin otic for chronic suppurative middle-ear infection with perforation. Which regimen fits?",
  "choices": [
    "Ten drops twice daily for fourteen days",
    "Five drops daily for seven days",
    "Four drops twice daily for seven days",
    "Three drops twice daily for seven days"
  ],
  "answer": 0,
  "rationale": "Ofloxacin dosing follows the indication as well as age.",
  "reviewHref": "#otic-pharmacotherapy"
},
{
  "id": "common-ear-tinnitus-indication",
  "lesson": "tinnitus",
  "question": "A patient with bothersome tinnitus takes an antidepressant for major depression. What does the tinnitus guideline mean for this treatment?",
  "choices": [
    "Assess the depression indication separately; do not promise a tinnitus cure",
    "Stop the antidepressant immediately",
    "Increase its dose solely to eliminate tinnitus",
    "Replace depression treatment with ginkgo"
  ],
  "answer": 0,
  "rationale": "A recommendation against using a medicine for tinnitus does not remove a separate treatment indication.",
  "reviewHref": "#tinnitus"
},
{
  "id": "common-ear-hearing-salvage",
  "lesson": "ear-triage",
  "question": "An adult has incomplete recovery three weeks after sudden sensorineural hearing loss. Which referral remains time-sensitive?",
  "choices": [
    "ENT evaluation for intratympanic steroid salvage",
    "Wait six months before reassessment",
    "Routine antiviral treatment",
    "Home wax irrigation"
  ],
  "answer": 0,
  "rationale": "Three weeks falls within the two-to-six-week salvage window. Persistent loss requires follow-up.",
  "reviewHref": "#ear-triage"
},
  {
    "id": "common-ear-cipro-hc-perforation",
    "lesson": "otic-pharmacotherapy",
    "question": "A prescription for Cipro HC arrives for a patient with a suspected eardrum perforation. What should the pharmacist do?",
    "choices": [
      "Clarify a suitable non-ototoxic alternative before dispensing",
      "Dispense because every ciprofloxacin ear product is suitable for perforation",
      "Double the dose to reach the middle ear",
      "Use the product in both the eye and ear"
    ],
    "answer": 0,
    "rationale": "Cipro HC is a nonsterile formulation whose label excludes known or suspected perforation. The active antibiotic alone does not establish product suitability.",
    "reviewHref": "#otic-pharmacotherapy"
  },
  {
    "id": "common-ear-cortisporin-duration",
    "lesson": "otic-pharmacotherapy",
    "question": "A patient has used Cortisporin TC for ten consecutive days and asks to continue for another week. What is the best response?",
    "choices": [
      "Arrange reassessment instead of extending it",
      "Continue because topical neomycin cannot affect hearing",
      "Stop shaking to reduce exposure",
      "Add extra drops to shorten the next week"
    ],
    "answer": 0,
    "rationale": "The label limits treatment to ten days; prolonged neomycin exposure increases permanent cochlear-injury risk. Persistent symptoms need reassessment.",
    "reviewHref": "#otic-pharmacotherapy"
  },
  {
    "id": "common-ear-debrox-stop",
    "lesson": "cerumen-impaction",
    "question": "An adult still has blocked-ear symptoms after four days of Debrox. What is the next step?",
    "choices": [
      "Stop self-treatment and seek assessment",
      "Continue daily for a month",
      "Probe the canal with a cotton swab",
      "Increase the number of drops indefinitely"
    ],
    "answer": 0,
    "rationale": "Debrox directs medical advice when wax persists or use beyond four days is needed; ongoing hearing symptoms must not automatically be attributed to wax.",
    "reviewHref": "#cerumen-impaction"
  }
];
export const commonEarConditionsQuestionBank=[...clinicalCases,...productCases];

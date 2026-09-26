// Original NaS clinical cases. Keys rotate for balanced answer positions.
export const burnAssessmentInitialCareQuestionBank = [
  {
    "id": "burn-case-001",
    "lesson": "burn-emergency",
    "question": "After an enclosed-room fire, a patient has soot in the mouth and new hoarseness but only a small visible forearm burn. What should determine the immediate response?",
    "choices": [
      "Urgent airway and inhalation evaluation despite the small skin injury",
      "Home wound care because the skin burn is small",
      "Wait for blisters before assessing the airway",
      "Treat hoarseness with an oral antihistamine and reassess tomorrow"
    ],
    "answer": 0,
    "rationale": "Smoke exposure and voice change can signal evolving airway injury. Skin extent does not exclude inhalation injury.",
    "reviewHref": "#burn-emergency"
  },
  {
    "id": "burn-case-002",
    "lesson": "burn-emergency",
    "question": "A patient falls from a ladder during a fire and is hypotensive with a small burn. Which interpretation best directs assessment?",
    "choices": [
      "Delay circulation assessment until the burn depth is certain",
      "Evaluate hemorrhage, traumatic injury and other shock causes alongside the burn",
      "Attribute hypotension to burn shock without further trauma assessment",
      "Use the visible burn percentage to rule out serious injury"
    ],
    "answer": 1,
    "rationale": "Falls and fire can produce simultaneous injuries. Hypotension must not be attributed automatically to the visible burn.",
    "reviewHref": "#burn-emergency"
  },
  {
    "id": "burn-case-003",
    "lesson": "burn-emergency",
    "question": "A deep circumferential forearm burn becomes increasingly tight as the hand develops altered sensation and poor distal perfusion. What is the priority?",
    "choices": [
      "Wait until the distal pulse is completely absent",
      "Apply more topical anesthetic and defer reassessment",
      "Urgent burn/surgical reassessment of threatened circulation",
      "Apply a tighter compression wrap to reduce swelling"
    ],
    "answer": 2,
    "rationale": "Edema beneath restrictive burned tissue can threaten perfusion. Neurovascular deterioration requires urgent assessment; waiting for complete pulse loss is unsafe.",
    "reviewHref": "#burn-emergency"
  },
  {
    "id": "burn-case-004",
    "lesson": "burn-depth",
    "question": "A small thermal injury is moist, blistered, readily blanching and very painful. Which depth is most consistent with these findings?",
    "choices": [
      "Superficial epidermal injury only",
      "Full thickness",
      "Deep partial thickness",
      "Superficial partial thickness"
    ],
    "answer": 3,
    "rationale": "Moisture, blistering, preserved blanching and marked pain suggest superficial dermal injury. Depth still requires reassessment as the wound evolves.",
    "reviewHref": "#burn-depth"
  },
  {
    "id": "burn-case-005",
    "lesson": "burn-depth",
    "question": "An examiner finds dry, leathery tissue without pinprick sensation after a burn. Which conclusion is most appropriate?",
    "choices": [
      "Full-thickness injury is possible and requires burn expertise",
      "Absent pain means the burn is minor",
      "Blister formation must occur before referral",
      "Normal surrounding sensation excludes deep injury"
    ],
    "answer": 0,
    "rationale": "Destruction through the dermis can remove sensation. Less pain in the wound is not reassurance when texture and sensory findings suggest full-thickness injury.",
    "reviewHref": "#burn-depth"
  },
  {
    "id": "burn-case-006",
    "lesson": "burn-depth",
    "question": "A burn has become paler, drier and less blanching since the initial examination. Which action best follows?",
    "choices": [
      "Classify depth only by one skin color finding",
      "Reassess for deeper partial-thickness injury and revise the care plan",
      "Keep the original depth classification permanently",
      "Infer healing solely from reduced pain"
    ],
    "answer": 1,
    "rationale": "Depth assessment combines moisture, blanching, sensation and evolution. Apparent reduction in pain can accompany deeper injury rather than recovery.",
    "reviewHref": "#burn-depth"
  },
  {
    "id": "burn-case-007",
    "lesson": "burn-extent",
    "question": "An adult has partial-thickness burns over the entire anterior torso and anterior surface of one arm. What is the approximate adult rule-of-nines TBSA?",
    "choices": [
      "13.5%",
      "36%",
      "22.5%",
      "27%"
    ],
    "answer": 2,
    "rationale": "The anterior torso contributes 18% and the anterior half of one arm 4.5%: 18 + 4.5 = 22.5%. Only qualifying burn depth is counted.",
    "reviewHref": "#burn-extent"
  },
  {
    "id": "burn-case-008",
    "lesson": "burn-extent",
    "question": "Scattered partial-thickness burns cover five areas equal to the patient's palm plus palmar fingers. Using 1% for each whole palmar hand, what is the estimated TBSA?",
    "choices": [
      "2.5%",
      "10%",
      "0.5%",
      "5%"
    ],
    "answer": 3,
    "rationale": "Under the explicitly stated palm-plus-fingers convention, 5 x 1% = 5%. Palm alone is smaller and must not silently replace the stated measurement.",
    "reviewHref": "#burn-extent"
  },
  {
    "id": "burn-case-009",
    "lesson": "burn-extent",
    "question": "A patient has 6% partial-thickness injury plus 12% dry, blanching superficial erythema. What TBSA enters the burn-resuscitation estimate?",
    "choices": [
      "6%",
      "18%",
      "12%",
      "9%"
    ],
    "answer": 0,
    "rationale": "Superficial epidermal erythema is excluded. The 6% partial-thickness component is counted; the total red area is not the resuscitation TBSA. This extent alone does not meet the adult guideline threshold for formal burn-shock resuscitation.",
    "reviewHref": "#burn-extent"
  },
  {
    "id": "burn-case-010",
    "lesson": "burn-extent",
    "question": "A toddler has burns involving the head and legs. Which method best addresses the age-related difference in body proportions?",
    "choices": [
      "The caregiver's hand used as the child's 1% reference",
      "An age-adjusted Lund and Browder chart",
      "The adult rule of nines without adjustment",
      "The adult head percentage doubled for every child"
    ],
    "answer": 1,
    "rationale": "Children have proportionally larger heads and smaller legs. Use age-adjusted mapping; when using a hand convention, use the patient's own hand.",
    "reviewHref": "#burn-extent"
  },
  {
    "id": "burn-case-011",
    "lesson": "thermal-first-aid",
    "question": "Immediately after a small hot-pan burn, which action is most appropriate?",
    "choices": [
      "Butter before cooling to seal the wound",
      "A tight insulating wrap while the skin remains hot",
      "Cool running water while preventing systemic chilling",
      "Direct ice held against the injury"
    ],
    "answer": 2,
    "rationale": "Cool running water removes heat. Ice can damage tissue, and heat-trapping remedies are inappropriate during initial cooling.",
    "reviewHref": "#thermal-first-aid"
  },
  {
    "id": "burn-case-012",
    "lesson": "thermal-first-aid",
    "question": "A finger is beginning to swell after a burn and still has a loose ring. What should be done before swelling progresses?",
    "choices": [
      "Wait until the swelling is maximal",
      "Tighten the ring to provide compression",
      "Leave all jewelry in place until the skin heals",
      "Remove the ring promptly if removal is safe"
    ],
    "answer": 3,
    "rationale": "A ring can become constricting as edema develops. Remove constricting items early without tearing adherent tissue or creating further injury.",
    "reviewHref": "#thermal-first-aid"
  },
  {
    "id": "burn-case-013",
    "lesson": "thermal-first-aid",
    "question": "A person wants to pop an intact burn blister and peel away fabric stuck to the wound. What is the best advice?",
    "choices": [
      "Protect the blister and leave adherent material for clinical assessment",
      "Pop every blister to prevent infection",
      "Pull the fabric away before cooling regardless of tissue damage",
      "Scrub the blister roof with alcohol until it detaches"
    ],
    "answer": 0,
    "rationale": "Avoid casual blister rupture and traumatic removal of stuck clothing. Size, contamination and impaired function can require clinician-directed blister care.",
    "reviewHref": "#thermal-first-aid"
  },
  {
    "id": "burn-case-014",
    "lesson": "chemical-electrical",
    "question": "A worker has a chemical splash on clothing and skin. Which initial approach is safest?",
    "choices": [
      "Apply a household neutralizing mixture before seeking help",
      "Protect the rescuer, remove contaminated clothing, decontaminate promptly and obtain poison/emergency guidance",
      "Rub the chemical into a small area to contain it",
      "Keep contaminated clothing on until the chemical name is confirmed"
    ],
    "answer": 1,
    "rationale": "Stopping exposure promptly is central. Rubbing and delayed clothing removal can worsen exposure; agent-specific hazards require expert guidance.",
    "reviewHref": "#chemical-electrical"
  },
  {
    "id": "burn-case-015",
    "lesson": "chemical-electrical",
    "question": "A fallen power line is touching an injured person in standing water. What should a bystander do?",
    "choices": [
      "Use any wooden object to lift the high-voltage line",
      "Pull the person away by wet clothing",
      "Stay clear and call emergency/utility personnel rather than attempt contact or improvised rescue",
      "Enter the water to reach the main switch"
    ],
    "answer": 2,
    "rationale": "Downed-line and standing-water hazards can electrocute rescuers. High-voltage rescue requires professionals and confirmed source control.",
    "reviewHref": "#chemical-electrical"
  },
  {
    "id": "burn-case-016",
    "lesson": "chemical-electrical",
    "question": "After an electrical injury, a patient has only two small skin marks but reports muscle pain and dark urine. What is the best disposition?",
    "choices": [
      "Self-care because skin surface area is small",
      "A topical antibiotic alone with no further assessment",
      "Reassurance if neither skin mark is blistered",
      "Urgent medical evaluation for hidden internal injury"
    ],
    "answer": 3,
    "rationale": "Visible electrical wounds can underestimate deep tissue injury. Muscle, renal, cardiac and trauma concerns require medical assessment.",
    "reviewHref": "#chemical-electrical"
  },
  {
    "id": "burn-case-017",
    "lesson": "burn-referral",
    "question": "An adult has a full-thickness burn measuring less than 1% TBSA. Which ABA referral category applies?",
    "choices": [
      "Immediate consultation with consideration of transfer",
      "No consultation because the burn is below 10%",
      "Referral only if the wound becomes infected",
      "Home treatment unless pain is severe"
    ],
    "answer": 0,
    "rationale": "Full-thickness burns warrant immediate consultation regardless of size. Transfer decisions account for the clinical situation and local resources.",
    "reviewHref": "#burn-referral"
  },
  {
    "id": "burn-case-018",
    "lesson": "burn-referral",
    "question": "A stable adult has a 4% partial-thickness burn without another immediate-transfer criterion. Which statement best matches ABA guidance?",
    "choices": [
      "Consultation is relevant only after failure to heal",
      "Burn-center consultation is recommended; this category does not mean automatic transfer",
      "Every burn below 10% requires no consultation",
      "Every partial-thickness burn mandates transfer regardless of circumstances"
    ],
    "answer": 1,
    "rationale": "ABA separates consultation for smaller partial-thickness or potentially deep injuries from immediate consultation with transfer consideration for specified high-risk injuries.",
    "reviewHref": "#burn-referral"
  },
  {
    "id": "burn-case-019",
    "lesson": "burn-referral",
    "question": "A child's scald pattern and reported mechanism do not fit the child's developmental ability. What is the appropriate response?",
    "choices": [
      "Ignore the inconsistency if the TBSA is small",
      "Postpone pediatric assessment until the caregiver changes the account",
      "Obtain pediatric/burn assessment and evaluate safeguarding concerns without treating the pattern as proof",
      "Declare abuse proven from the burn pattern alone"
    ],
    "answer": 2,
    "rationale": "Pediatric burn care includes pain, dressing and rehabilitation needs plus evaluation of possible nonaccidental trauma. Inconsistency warrants assessment, not a conclusion based on pattern alone.",
    "reviewHref": "#burn-referral"
  },
  {
    "id": "burn-case-020",
    "lesson": "burn-referral",
    "question": "A patient was exposed to 480 V and appears stable after evaluation. Which ABA guidance is relevant?",
    "choices": [
      "Only exposures at or above 1,000 V ever need consultation",
      "Normal skin excludes delayed electrical complications",
      "Lightning follows the routine minor thermal-burn pathway",
      "Low-voltage injury still warrants consultation and consideration of follow-up for delayed symptoms or visual changes"
    ],
    "answer": 3,
    "rationale": "ABA distinguishes low voltage below 1,000 V from high voltage at or above 1,000 V. Lower voltage does not eliminate consultation or follow-up needs.",
    "reviewHref": "#burn-referral"
  },
  {
    "id": "burn-case-021",
    "lesson": "minor-burn-care",
    "question": "After cooling, a clinician confirms a small uncomplicated first-degree burn is suitable for self-care. Which plan follows AAD guidance?",
    "choices": [
      "Plain petroleum jelly two to three times daily and nonstick protection",
      "Silver sulfadiazine for every minor burn",
      "Repeated peroxide cleansing until the surface dries",
      "Butter under a tight dressing"
    ],
    "answer": 0,
    "rationale": "AAD supports petroleum and nonstick coverage for selected minor first-degree burns after cooling. Routine topical antibiotics are not necessary for this scenario.",
    "reviewHref": "#minor-burn-care"
  },
  {
    "id": "burn-case-022",
    "lesson": "minor-burn-care",
    "question": "A patient with a minor burn is already taking a combination cold medicine containing acetaminophen and asks for another pain product. What should the pharmacist do first?",
    "choices": [
      "Assume topical treatment makes oral-drug interactions irrelevant",
      "Review all active ingredients and patient risks before selecting an analgesic",
      "Add acetaminophen without counting the combination product",
      "Choose ibuprofen without reviewing renal, bleeding or pregnancy risks"
    ],
    "answer": 1,
    "rationale": "Analgesic selection requires medication reconciliation. Duplicate ingredients can cause overdose, and both acetaminophen and NSAIDs require patient-specific screening.",
    "reviewHref": "#minor-burn-care"
  },
  {
    "id": "burn-case-023",
    "lesson": "minor-burn-care",
    "question": "A home-treated burn develops worsening pain, expanding warmth and swelling, purulent drainage and fever. What should happen next?",
    "choices": [
      "Suppress pain and stop inspecting the wound",
      "Add an occlusive dressing without reassessment",
      "Prompt clinical reassessment for infection or deeper injury",
      "Continue the same self-care until a fixed two-week deadline"
    ],
    "answer": 2,
    "rationale": "A worsening trajectory with local and systemic findings requires escalation. A single initial minor-burn assessment does not establish that the later course is safe.",
    "reviewHref": "#minor-burn-care"
  },
  {
    "id": "burn-case-024",
    "lesson": "burn-topicals",
    "question": "Which wound situation is within the labeled adjunctive indication for silver sulfadiazine?",
    "choices": [
      "Routine prevention of sunburn on intact skin",
      "Mandatory treatment of every first-degree burn",
      "Replacement for debridement, resuscitation and burn assessment",
      "Prevention or treatment of wound sepsis in second- or third-degree burns"
    ],
    "answer": 3,
    "rationale": "The antimicrobial indication is an adjunct to burn care; it does not make SSD a universal minor-burn treatment or a substitute for systemic management.",
    "reviewHref": "#burn-topicals"
  },
  {
    "id": "burn-case-025",
    "lesson": "burn-topicals",
    "question": "Silver sulfadiazine is proposed for a 6-week-old infant. Which response is correct?",
    "choices": [
      "Do not use it during the first two months of life",
      "Use freely because topical drugs cannot cause systemic effects",
      "Age restrictions apply only to oral sulfonamides",
      "Use half the adult frequency to remove the contraindication"
    ],
    "answer": 0,
    "rationale": "The label prohibits neonatal use during the first two months and use in premature infants because of kernicterus risk. Reducing frequency does not negate this restriction.",
    "reviewHref": "#burn-topicals"
  },
  {
    "id": "burn-case-026",
    "lesson": "burn-topicals",
    "question": "A patient at term pregnancy is offered silver sulfadiazine for a burn. What is the appropriate action?",
    "choices": [
      "Use routinely if the patient has no sulfonamide allergy",
      "Select an alternative with the treating team because near-term/term use is prohibited by the label",
      "Use because the old pregnancy letter category guarantees safety",
      "Assume pregnancy timing is irrelevant to topical therapy"
    ],
    "answer": 1,
    "rationale": "Near-term and term pregnancy are explicitly restricted. A historical pregnancy category must not override specific labeling or individualized assessment.",
    "reviewHref": "#burn-topicals"
  },
  {
    "id": "burn-case-027",
    "lesson": "burn-topicals",
    "question": "A patient with G6PD deficiency asks whether a topical route eliminates concern about silver sulfadiazine. Which answer is best?",
    "choices": [
      "G6PD status affects only dressing color",
      "Hemolysis is prevented by adding another topical antibiotic",
      "No; the label warns of possible hemolysis and clinical review is needed",
      "Yes; skin use prevents absorption"
    ],
    "answer": 2,
    "rationale": "G6PD deficiency carries a hemolysis warning. This warning is distinct from the label's formal hypersensitivity contraindication, but still requires a treatment decision.",
    "reviewHref": "#burn-topicals"
  },
  {
    "id": "burn-case-028",
    "lesson": "burn-topicals",
    "question": "Extensive burns are being treated with SSD and renal function is worsening. Which action best addresses the risk?",
    "choices": [
      "Increase treated area because the cream is only local",
      "Ignore renal changes until the cream container is empty",
      "Add an enzyme debrider without checking compatibility",
      "Reassess exposure and therapy, with renal and systemic monitoring"
    ],
    "answer": 3,
    "rationale": "Large-area absorption and impaired elimination can produce systemic exposure. Blood counts, reactions and renal function matter; silver can also interfere with proteolytic debriders.",
    "reviewHref": "#burn-topicals"
  },
  {
    "id": "burn-case-029",
    "lesson": "burn-topicals",
    "question": "A clinician has selected SSD 1% cream and arranged cleansing/debridement. Which application instruction matches the reviewed label?",
    "choices": [
      "Sterile application once or twice daily, about 1/16 inch thick, with replacement where removed",
      "A single application left unchanged for a month",
      "Instill directly into the eye for facial burns",
      "Apply only to the intact surrounding skin"
    ],
    "answer": 0,
    "rationale": "The label describes thin continuous burn coverage with reapplication when needed. SSD cream is not an ophthalmic product.",
    "reviewHref": "#burn-topicals"
  },
  {
    "id": "burn-case-030",
    "lesson": "burn-topicals",
    "question": "A learner says SSD must close every burn faster because it is antimicrobial. What is the best correction?",
    "choices": [
      "No burn should ever receive an antimicrobial",
      "Antimicrobial indication does not prove faster closure; a small adult trial did not show a healing advantage over petrolatum",
      "Antimicrobial activity guarantees improved healing in every wound",
      "The trial proves petrolatum is superior for all infected full-thickness burns"
    ],
    "answer": 1,
    "rationale": "The trial involved a limited adult superficial partial-thickness population. It does not justify universal SSD healing claims or universal avoidance of indicated antimicrobial therapy.",
    "reviewHref": "#burn-topicals"
  },
  {
    "id": "burn-case-031",
    "lesson": "burn-resuscitation",
    "question": "Using 2 mL/kg/%TBSA, what is the initial first-24-hour estimate for a 70 kg adult with 30% qualifying burn depth?",
    "choices": [
      "2,100 mL",
      "42 mL",
      "4,200 mL",
      "8,400 mL"
    ],
    "answer": 2,
    "rationale": "2 x 70 x 30 = 4,200 mL. Enter 30 for 30% in this convention, not 0.30. This is an estimate before clinical titration.",
    "reviewHref": "#burn-resuscitation"
  },
  {
    "id": "burn-case-032",
    "lesson": "burn-resuscitation",
    "question": "A 60 kg adult has a 25% TBSA burn. Using 2 mL/kg/%TBSA and allocating half the estimate over the first eight hours from injury, what is the initial hourly rate if therapy starts at injury time?",
    "choices": [
      "125 mL/hour",
      "375 mL/hour",
      "62.5 mL/hour",
      "187.5 mL/hour"
    ],
    "answer": 3,
    "rationale": "2 x 60 x 25 = 3,000 mL; half is 1,500 mL; 1,500 / 8 = 187.5 mL/hour. The rate is then adjusted to response rather than held solely to match arithmetic.",
    "reviewHref": "#burn-resuscitation"
  },
  {
    "id": "burn-case-033",
    "lesson": "burn-resuscitation",
    "question": "A patient arrives three hours after a burn with documented prehospital fluid. Which planning approach is correct?",
    "choices": [
      "Use time since injury and account for fluid already given, then titrate with the burn team",
      "Restart the first eight-hour period at admission",
      "Ignore prehospital fluid because it was given outside the hospital",
      "Give the entire calculated shortfall as a rapid bolus regardless of perfusion"
    ],
    "answer": 0,
    "rationale": "The injury starts the resuscitation clock. Elapsed time and previous volume must be integrated with physiology; a blind catch-up bolus risks over-resuscitation.",
    "reviewHref": "#burn-resuscitation"
  },
  {
    "id": "burn-case-034",
    "lesson": "burn-resuscitation",
    "question": "During resuscitation, edema and ventilatory difficulty increase despite progressively larger fluid volumes. What should guide the next step?",
    "choices": [
      "Use a single blood pressure reading as the only endpoint",
      "Reassess perfusion, urine output and complications with the burn team rather than escalating fluid mechanically",
      "Increase fluid until edema disappears",
      "Keep the original formula unchanged regardless of findings"
    ],
    "answer": 1,
    "rationale": "Both under-resuscitation and excessive fluid can harm. Worsening physiology requires integrated reassessment, including possible compartment and pulmonary consequences.",
    "reviewHref": "#burn-resuscitation"
  },
  {
    "id": "burn-case-035",
    "lesson": "burn-resuscitation",
    "question": "Which patient population matches the scope of the ABA burn-shock guideline used in this lesson?",
    "choices": [
      "Every patient with a small superficial burn",
      "All forms of septic and hemorrhagic shock after any burn",
      "Adults with at least 20% TBSA burns during acute resuscitation",
      "All children using the identical adult formula"
    ],
    "answer": 2,
    "rationale": "The guideline addresses adult burn shock in the first 48 hours with burns at least 20% TBSA. Other ages, injuries and shock mechanisms require appropriate pathways.",
    "reviewHref": "#burn-resuscitation"
  },
  {
    "id": "burn-case-036",
    "lesson": "burn-resuscitation",
    "question": "A hospital protocol uses FFP during major-burn resuscitation. How should a learner describe the ABA guideline position?",
    "choices": [
      "ABA mandates FFP for every adult burn",
      "FFP is interchangeable with crystalloid without clinical review",
      "A local protocol proves every guideline endorses the same approach",
      "ABA limits this burn-resuscitation use to research because evidence is insufficient; local protocols can differ"
    ],
    "answer": 3,
    "rationale": "Distinguish a center-specific protocol from a national guideline. This statement concerns FFP as a burn-shock resuscitation adjunct, not separate transfusion indications.",
    "reviewHref": "#burn-resuscitation"
  },
  {
    "id": "burn-case-037",
    "lesson": "burn-recovery",
    "question": "A patient with a devitalized burn has completed the tetanus series; the last dose was exactly five years ago. What is indicated from that history alone?",
    "choices": [
      "A tetanus-containing vaccine dose",
      "Wait until ten years have passed",
      "TIG alone instead of vaccination",
      "No prophylaxis because five years is not more than five"
    ],
    "answer": 0,
    "rationale": "CDC uses five or more years for dirty/major wounds after a completed primary series. The boundary includes exactly five years; TIG has separate indications.",
    "reviewHref": "#burn-recovery"
  },
  {
    "id": "burn-case-038",
    "lesson": "burn-recovery",
    "question": "An adult with a devitalized burn has an unknown tetanus vaccination history. Which plan follows CDC wound guidance?",
    "choices": [
      "Wait for symptoms before providing prophylaxis",
      "Vaccination plus 250 IU TIG intramuscularly",
      "Topical antibiotic instead of immunization",
      "TIG alone with no vaccine-series plan"
    ],
    "answer": 1,
    "rationale": "Unknown or incomplete vaccination with a dirty/major wound calls for active vaccination and passive protection. Antibiotics are not tetanus prophylaxis.",
    "reviewHref": "#burn-recovery"
  },
  {
    "id": "burn-case-039",
    "lesson": "burn-recovery",
    "question": "A patient with HIV has a devitalized burn and documented complete tetanus vaccination two years ago. Which distinction is correct?",
    "choices": [
      "Give antibiotics as the only tetanus prevention",
      "Give a booster instead of considering TIG",
      "TIG is indicated for this dirty/major wound even though a vaccine booster is not due by interval",
      "Recent vaccination eliminates the HIV-related TIG indication"
    ],
    "answer": 2,
    "rationale": "CDC separately recommends TIG for dirty/major wounds in people with HIV or severe immunodeficiency. Vaccine and TIG decisions are not interchangeable.",
    "reviewHref": "#burn-recovery"
  },
  {
    "id": "burn-case-040",
    "lesson": "burn-recovery",
    "question": "A healing burn crosses a joint and the patient is avoiding all movement until the skin looks normal. What is the best plan?",
    "choices": [
      "Delay all rehabilitation until scar remodeling is complete",
      "Force unrestricted movement regardless of graft or wound constraints",
      "Use a tight home splint without assessment",
      "Coordinate positioning, motion and any splinting with burn rehabilitation specialists"
    ],
    "answer": 3,
    "rationale": "Early tailored rehabilitation helps preserve function. Wound depth, graft restrictions, pain and joint involvement determine the safe program.",
    "reviewHref": "#burn-recovery"
  },
  {
    "id": "burn-case-041",
    "lesson": "burn-recovery",
    "question": "A wound has closed but the patient reports itch, sleep disruption and distress about appearance. Which follow-up is appropriate?",
    "choices": [
      "Assess scar, itch, mood and function, and protect healed skin from sun",
      "Discharge because closure ends recovery",
      "Put sunscreen into any remaining open wound",
      "Treat distress as unrelated to burn recovery"
    ],
    "answer": 0,
    "rationale": "Burn recovery extends beyond epithelial closure. Scar care, sun protection after healing and psychosocial support should follow an individualized plan.",
    "reviewHref": "#burn-recovery"
  },
  {
    "id": "burn-case-042",
    "lesson": "burn-emergency",
    "question": "A confused patient rescued from an enclosed fire has a conventional pulse-oximeter reading of 99%. What is appropriate?",
    "choices": [
      "Exclude carbon monoxide poisoning because the reading is normal",
      "Provide oxygen and obtain blood co-oximetry while evaluating the exposure",
      "Wait for skin blisters before testing",
      "Use the saturation alone to decide discharge"
    ],
    "answer": 1,
    "rationale": "Conventional pulse oximetry is unreliable with carboxyhemoglobin. Clinical assessment and blood co-oximetry are needed; oxygen should not be delayed.",
    "reviewHref": "#burn-emergency"
  },
  {
    "id": "burn-case-043",
    "lesson": "chemical-electrical",
    "question": "After electrical contact, a patient has a tiny skin wound but chest pain and a brief loss of consciousness. What is appropriate?",
    "choices": [
      "Apply petroleum and discharge without cardiac assessment",
      "Wait for a larger skin burn to develop",
      "Urgent ECG and monitored clinical evaluation",
      "Use wound diameter alone to select care"
    ],
    "answer": 2,
    "rationale": "Electrical current can cause cardiac injury despite limited visible skin damage. Chest pain and loss of consciousness require monitored assessment.",
    "reviewHref": "#chemical-electrical"
  },
  {
    "id": "burn-case-044",
    "lesson": "burn-recovery",
    "question": "A minor burn is fully epithelialized. Which sun-protection plan is appropriate?",
    "choices": [
      "Put sunscreen into any remaining open areas",
      "Avoid protection until pigment returns to baseline",
      "Use tanning to restore the original skin color",
      "Use shade, clothing and broad-spectrum water-resistant SPF 30 or higher on healed exposed skin"
    ],
    "answer": 3,
    "rationale": "Sun protection begins after closure. Sunscreen belongs on healed skin, alongside shade and clothing.",
    "reviewHref": "#burn-recovery"
  },
  {
    "id": "burn-case-045",
    "lesson": "chemical-electrical",
    "question": "A caustic cleaning liquid splashes onto a forearm. Which first-aid response is appropriate?",
    "choices": [
      "Immediately irrigate with running water for at least 20 minutes, remove contaminated clothing and obtain poison-center guidance",
      "Apply cream before removing the chemical",
      "Wait for a visible blister before washing",
      "Use a brief rinse and assume the injury is resolved"
    ],
    "answer": 0,
    "rationale": "Prompt prolonged irrigation reduces ongoing exposure. Further care depends on the substance and injury; washing alone does not establish that a burn is minor.",
    "reviewHref": "#chemical-electrical"
  },
  {
    "id": "burn-case-046",
    "lesson": "chemical-electrical",
    "question": "A worker reports a hydrofluoric acid splash with little visible skin damage. What is appropriate?",
    "choices": [
      "Reassure because severe chemical injury is always immediately visible",
      "Irrigate promptly and obtain emergency toxicology evaluation",
      "Apply sunscreen and review in a week",
      "Wait until the skin turns black before referral"
    ],
    "answer": 1,
    "rationale": "Hydrofluoric acid may produce delayed visible injury and systemic toxicity. Emergency care can include clinician-selected calcium gluconate treatment.",
    "reviewHref": "#chemical-electrical"
  },
  {
    "id": "burn-case-047",
    "lesson": "burn-recovery",
    "question": "A closed burn is dry and itchy, and scratching is disrupting the fragile skin. What is an appropriate initial plan?",
    "choices": [
      "Scrub away the new skin",
      "Apply fragranced alcohol lotion repeatedly",
      "Use fragrance-free moisturizer, avoid scratching and review persistent symptoms with the burn team",
      "Take multiple sedating medicines without review"
    ],
    "answer": 2,
    "rationale": "Moisturizing healed skin and protecting it from scratching can help. Persistent itch and sleep impairment deserve individualized assessment.",
    "reviewHref": "#burn-recovery"
  },
  {
    "id": "burn-case-048",
    "lesson": "burn-emergency",
    "question": "An emergency clinician strongly suspects cyanide poisoning after a closed-space fire. Should antidotal treatment wait for a confirmatory cyanide result?",
    "choices": [
      "Yes, laboratory confirmation is mandatory",
      "Yes, oxygen alone excludes cyanide toxicity",
      "Every smoke exposure requires antidote regardless of findings",
      "No; treat high clinical suspicion promptly while maintaining resuscitation"
    ],
    "answer": 3,
    "rationale": "CYANOKIT labeling directs treatment without delay when suspicion is high. This does not mean treating every smoke exposure routinely.",
    "reviewHref": "#burn-emergency"
  },
  {
    "id": "burn-case-049",
    "lesson": "burn-topicals",
    "question": "A breastfeeding patient is prescribed silver sulfadiazine over a substantial burn. Which counseling approach follows the reviewed label?",
    "choices": [
      "Arrange a clinician-guided decision about nursing versus SSD treatment based on maternal need and infant risk",
      "Assume there is no infant exposure because it is topical",
      "Stop all burn care without speaking to the team",
      "Double the dose to shorten the breastfeeding decision"
    ],
    "answer": 0,
    "rationale": "The label describes potential serious sulfonamide effects in nursing infants and requires an individualized decision about nursing or the drug.",
    "reviewHref": "#burn-topicals"
  }
];

const clinicalCases = [
  {
    "id": "poison-plant-case-001",
    "lesson": "toxicodendron-exposure",
    "question": "A gardener removes dead vines without gloves. Why can this still cause a plant rash?",
    "choices": [
      "Dead plant material can retain urushiol",
      "Only live green leaves contain urushiol",
      "Dead plants cause only immediate IgE reactions",
      "Urushiol is produced by blister fluid"
    ],
    "answer": 0,
    "rationale": "Plant death does not reliably remove the oil. Direct contact with contaminated plant tissue remains an exposure route.",
    "reviewHref": "#toxicodendron-exposure"
  },
  {
    "id": "poison-plant-case-002",
    "lesson": "toxicodendron-exposure",
    "question": "After brush burning, a worker develops hoarseness and trouble breathing. What takes priority?",
    "choices": [
      "Apply calamine and wait overnight",
      "Emergency assessment for inhalational injury",
      "Treat only if a linear rash appears",
      "Take an oatmeal bath before deciding"
    ],
    "answer": 1,
    "rationale": "Burning contaminated plants can expose the respiratory tract. Airway symptoms require emergency care even without a rash.",
    "reviewHref": "#toxicodendron-exposure"
  },
  {
    "id": "poison-plant-case-003",
    "lesson": "urushiol-immunology",
    "question": "An itchy vesicular eruption appears a day after repeat plant exposure. Which process best explains it?",
    "choices": [
      "Universal immediate IgE anaphylaxis",
      "Bacterial replication within every vesicle",
      "Delayed urushiol-specific T-cell inflammation",
      "Immune-complex deposition as the usual mechanism"
    ],
    "answer": 2,
    "rationale": "The characteristic dermatitis is a delayed type IV response. Itch alone does not establish an immediate histamine-driven reaction.",
    "reviewHref": "#urushiol-immunology"
  },
  {
    "id": "poison-plant-case-004",
    "lesson": "urushiol-immunology",
    "question": "Why does prompt washing serve a different purpose from treating an established rash?",
    "choices": [
      "Washing eliminates all memory T cells",
      "Soap acts as a systemic glucocorticoid",
      "A formed blister contains the entire original urushiol dose",
      "Washing removes accessible oil; it does not instantly reverse established immune activation"
    ],
    "answer": 3,
    "rationale": "Removing unabsorbed oil reduces exposure. The inflammatory response can persist after decontamination.",
    "reviewHref": "#urushiol-immunology"
  },
  {
    "id": "poison-plant-case-005",
    "lesson": "urushiol-immunology",
    "question": "Someone had no rash after one childhood exposure and assumes lifelong immunity. What is the best correction?",
    "choices": [
      "Sensitization and future exposure dose can change the response",
      "One tolerated exposure guarantees permanent tolerance",
      "All repeat reactions must be milder",
      "Antibody deficiency is the only explanation for no rash"
    ],
    "answer": 0,
    "rationale": "A prior absent or mild reaction does not establish lifelong tolerance. Urushiol-specific T-cell memory contributes to later responses.",
    "reviewHref": "#urushiol-immunology"
  },
  {
    "id": "poison-plant-case-006",
    "lesson": "rash-pattern",
    "question": "A person with no previous plant rash develops a first eruption two weeks after yard work. What is the best interpretation?",
    "choices": [
      "Two weeks excludes plant dermatitis",
      "The timing can fit a first reaction, but the uncertain diagnosis needs examination",
      "This proves bloodstream spread",
      "Timing alone proves a bacterial infection"
    ],
    "answer": 1,
    "rationale": "AAD describes first reactions taking 2-3 weeks, unlike the usual 4-48 hours after previous reactions. Timing supports a differential, not certainty.",
    "reviewHref": "#rash-pattern"
  },
  {
    "id": "poison-plant-case-007",
    "lesson": "rash-pattern",
    "question": "Two cleaned skin sites erupt on different days after one outing. Which explanation is reasonable?",
    "choices": [
      "The first blister necessarily infected the second site",
      "The rash must have traveled through the blood",
      "Different exposure doses and skin sites can produce asynchronous lesions",
      "Calamine always shifts inflammation to new sites"
    ],
    "answer": 2,
    "rationale": "Delayed inflammation may appear at different times. Also check for renewed contact with residual oil; blister fluid is not contagious.",
    "reviewHref": "#rash-pattern"
  },
  {
    "id": "poison-plant-case-008",
    "lesson": "rash-pattern",
    "question": "A rash is hard to assess by redness alone on deeply pigmented skin. What should the examination include?",
    "choices": [
      "Only comparison with a bright-red reference photo",
      "Diagnosis solely from skin color",
      "Ignoring symptoms unless redness is obvious",
      "Itch, swelling, texture, papules, vesicles, and exposure geometry"
    ],
    "answer": 3,
    "rationale": "Pattern, symptoms, and morphology provide information across skin tones. Color alone is an inadequate diagnostic criterion.",
    "reviewHref": "#rash-pattern"
  },
  {
    "id": "poison-plant-case-009",
    "lesson": "skin-decontamination",
    "question": "A hiker has just brushed damaged plants and has soap and water but no specialty cleanser. What should happen now?",
    "choices": [
      "Wash promptly and gently, rinse thoroughly, and clean beneath nails",
      "Wait until a specialty cleanser is purchased",
      "Wait until blisters identify exposed sites",
      "Scrub until skin is abraded"
    ],
    "answer": 0,
    "rationale": "Prompt decontamination can remove accessible oil. Delay and barrier injury do not improve source control.",
    "reviewHref": "#skin-decontamination"
  },
  {
    "id": "poison-plant-case-010",
    "lesson": "skin-decontamination",
    "question": "A cleanser advertisement cites an experimental study that did not include Zanfel. What can that study establish about Zanfel?",
    "choices": [
      "It proves Zanfel is superior to every soap",
      "It cannot establish Zanfel-specific superiority",
      "It proves Zanfel has no possible effect",
      "It proves every cleaner reverses established dermatitis"
    ],
    "answer": 1,
    "rationale": "The cited Tecnu/Goop/dishwashing-soap study tested those agents, not Zanfel. Evidence cannot be transferred across products as proof of comparative efficacy.",
    "reviewHref": "#skin-decontamination"
  },
  {
    "id": "poison-plant-case-011",
    "lesson": "skin-decontamination",
    "question": "A patient interprets a small manufacturer-hosted Zanfel poster as proof of guaranteed cure. What is the appropriate explanation?",
    "choices": [
      "Manufacturer hosting proves the findings are false",
      "Any randomized study establishes a universal cure",
      "Experimental findings have limitations and do not guarantee cure or superiority over prompt washing",
      "Photographic ratings prove no systemic treatment is ever needed"
    ],
    "answer": 2,
    "rationale": "Study size, comparator, endpoints, and reporting affect confidence. Limited research is not the same as no research, but it cannot support a guarantee.",
    "reviewHref": "#skin-decontamination"
  },
  {
    "id": "poison-plant-case-012",
    "lesson": "fomite-control",
    "question": "A patient washed after gardening but wore the same unwashed gloves the next day. What should be investigated?",
    "choices": [
      "Contagious blister fluid as the only explanation",
      "Failure to develop antibodies",
      "A requirement for antibiotics in every new patch",
      "Renewed urushiol transfer from the gloves and other gear"
    ],
    "answer": 3,
    "rationale": "Contaminated fomites can remain reservoirs. Trace contact across clothes, shoes, handles, and reusable protective equipment.",
    "reviewHref": "#fomite-control"
  },
  {
    "id": "poison-plant-case-013",
    "lesson": "fomite-control",
    "question": "A dog ran through suspect vegetation. How should its owner reduce transfer to people?",
    "choices": [
      "Wear rubber gloves and use pet shampoo and water, obtaining help if needed",
      "Use bare hands because dogs do not develop the same rash",
      "Apply household solvent to the animal",
      "Ignore bedding and leashes after washing the dog"
    ],
    "answer": 0,
    "rationale": "Fur can carry oil regardless of visible animal symptoms. Safe pet cleaning and attention to contacted objects break the transfer chain.",
    "reviewHref": "#fomite-control"
  },
  {
    "id": "poison-plant-case-014",
    "lesson": "itch-relief",
    "question": "A mild localized rash has intact blisters. Which approach protects the barrier?",
    "choices": [
      "Open every blister to release urushiol",
      "Cool compresses and leaving blister roofs intact",
      "Remove all blister roofs before bathing",
      "Use very hot water repeatedly to sterilize the rash"
    ],
    "answer": 1,
    "rationale": "Blister fluid does not spread plant dermatitis. The roof protects underlying skin; scratching and deliberate opening can damage it.",
    "reviewHref": "#itch-relief"
  },
  {
    "id": "poison-plant-case-015",
    "lesson": "itch-relief",
    "question": "An older adult with falls and urinary retention asks to add sedating oral diphenhydramine for itch. What should guide counseling?",
    "choices": [
      "It is disease-modifying and safe regardless of falls",
      "It replaces decontamination and clinical evaluation",
      "Assess sedation and anticholinergic risk; it does not switch off the T-cell response",
      "Topical diphenhydramine is automatically the safer substitute"
    ],
    "answer": 2,
    "rationale": "Symptom benefit must be weighed against patient-specific risks. Oral and topical antihistamines have different roles, and topical antihistamines can worsen this rash.",
    "reviewHref": "#itch-relief"
  },
  {
    "id": "poison-plant-case-016",
    "lesson": "itch-relief",
    "question": "A mild rash worsens after several new itch creams were layered together. What is the best response?",
    "choices": [
      "Add a fourth cream to cover another mechanism",
      "Assume worsening proves the products are working",
      "Cover every product with plastic overnight",
      "Stop escalating products and reassess irritation, contact allergy, and diagnosis"
    ],
    "answer": 3,
    "rationale": "Multiple products increase potential irritation and obscure the cause. Worsening calls for reassessment rather than more unexamined treatment.",
    "reviewHref": "#itch-relief"
  },
  {
    "id": "poison-plant-case-017",
    "lesson": "topical-steroid-use",
    "question": "Which patient most closely fits limited OTC hydrocortisone self-care?",
    "choices": [
      "An adult with a certain, small, mild forearm rash and no red flags",
      "A child whose eyelid is swollen shut",
      "A patient with fever and purulent drainage",
      "A person with difficulty swallowing"
    ],
    "answer": 0,
    "rationale": "Self-care requires mild limited disease and diagnostic confidence. Critical sites, systemic symptoms, and airway concerns require evaluation.",
    "reviewHref": "#topical-steroid-use"
  },
  {
    "id": "poison-plant-case-018",
    "lesson": "topical-steroid-use",
    "question": "A patient using the reviewed Safetec hydrocortisone 1% cream still has symptoms after eight days. What follows the stop rule?",
    "choices": [
      "Continue indefinitely if the tube is not empty",
      "Stop and seek clinical advice",
      "Double the application frequency",
      "Add another hydrocortisone product without review"
    ],
    "answer": 1,
    "rationale": "The reviewed label calls for medical advice when symptoms last beyond seven days, worsen, or recur shortly after clearing.",
    "reviewHref": "#topical-steroid-use"
  },
  {
    "id": "poison-plant-case-019",
    "lesson": "topical-steroid-use",
    "question": "Why is applying a stronger steroid under occlusion to eyelid skin an inappropriate self-directed escalation?",
    "choices": [
      "Occlusion makes all corticosteroids less potent",
      "Eyelids absorb less drug than thick palm skin",
      "Thin skin, potency, and occlusion change risk, and eye-area rash needs evaluation",
      "Using more steroid establishes the diagnosis"
    ],
    "answer": 2,
    "rationale": "Site, area, formulation, and duration affect exposure. Dramatic appearance does not justify unsupervised treatment near the eyes.",
    "reviewHref": "#topical-steroid-use"
  },
  {
    "id": "poison-plant-case-020",
    "lesson": "severe-rash-triage",
    "question": "A patient has poison-plant rash around an eye with facial swelling. How does current AAD public guidance classify this?",
    "choices": [
      "Wait seven days before seeking care",
      "Treat with topical antihistamine first",
      "Use body-surface area alone to decide",
      "Seek immediate emergency evaluation"
    ],
    "answer": 3,
    "rationale": "AAD directs immediate emergency assessment for eye/mouth/genital involvement and facial swelling. Small total area does not make a critical-site eruption routine self-care.",
    "reviewHref": "#severe-rash-triage"
  },
  {
    "id": "poison-plant-case-021",
    "lesson": "severe-rash-triage",
    "question": "A patient cannot sleep because itch is worsening and the eruption covers most of the body. What is appropriate?",
    "choices": [
      "Immediate medical evaluation under AAD severe-reaction guidance",
      "Increase OTC frequency until sleep returns",
      "Wait for a fixed blister count",
      "Use a preventive barrier on the open rash"
    ],
    "answer": 0,
    "rationale": "Worsening sleep-preventing itch and widespread disease are severe features. Functional impact and distribution matter, not just lesion count.",
    "reviewHref": "#severe-rash-triage"
  },
  {
    "id": "poison-plant-case-022",
    "lesson": "systemic-steroid-evidence",
    "question": "What was the clearest measured advantage of the 15-day regimen in the 49-patient prednisone trial?",
    "choices": [
      "No recurrence in any participant",
      "Less use of additional medication",
      "Proven faster healing in every age group",
      "Established safety in immunosuppressed patients"
    ],
    "answer": 1,
    "rationale": "Additional medication use differed significantly. Rash recurrence and healing time did not; small sample size and lack of blinding limit inference.",
    "reviewHref": "#systemic-steroid-evidence"
  },
  {
    "id": "poison-plant-case-023",
    "lesson": "systemic-steroid-evidence",
    "question": "A clinician considers applying the trial regimen to an immunosuppressed 8-year-old. Which limitation is most relevant?",
    "choices": [
      "The study enrolled only infants",
      "The study tested only topical prednisone",
      "The trial required age at least 14 and excluded immunosuppression",
      "The longer arm used no corticosteroid"
    ],
    "answer": 2,
    "rationale": "The population does not establish safety or dosing for that child. Individual clinical assessment is necessary.",
    "reviewHref": "#systemic-steroid-evidence"
  },
  {
    "id": "poison-plant-case-024",
    "lesson": "systemic-steroid-evidence",
    "question": "A patient with diabetes and prior severe steroid-related insomnia has leftover prednisone. What is the safest treatment process?",
    "choices": [
      "Self-start the leftovers and stop when itch improves",
      "Assume a taper eliminates all glucose and mood effects",
      "Use every remaining tablet because recurrence is impossible",
      "Confirm diagnosis and severity with a clinician, then review risks and plan monitoring"
    ],
    "answer": 3,
    "rationale": "Systemic therapy needs patient-specific risk review and follow-up. Neither duration nor tapering removes all adverse effects.",
    "reviewHref": "#systemic-steroid-evidence"
  },
  {
    "id": "poison-plant-case-025",
    "lesson": "complication-check",
    "question": "Which change most strongly suggests secondary infection rather than uncomplicated vesicle drainage?",
    "choices": [
      "Increasing tenderness, purulent drainage, and fever",
      "Clear fluid alone",
      "Linear itchy vesicles after gardening",
      "Different onset times at separate exposed sites"
    ],
    "answer": 0,
    "rationale": "Pus, progressive tenderness, and fever warrant examination. Clear inflammatory fluid alone does not justify antibiotics.",
    "reviewHref": "#complication-check"
  },
  {
    "id": "poison-plant-case-026",
    "lesson": "complication-check",
    "question": "An outdoor worker has a painful unilateral band of vesicles without a convincing plant exposure. What should happen?",
    "choices": [
      "Diagnose poison ivy from any outdoor history",
      "Examine for alternatives such as herpes zoster",
      "Assume every vesicle requires an antibiotic",
      "Use the lack of itch to confirm plant dermatitis"
    ],
    "answer": 1,
    "rationale": "Painful dermatomal disease changes the differential. Exposure history must fit morphology and symptoms.",
    "reviewHref": "#complication-check"
  },
  {
    "id": "poison-plant-case-027",
    "lesson": "complication-check",
    "question": "A rash keeps recurring despite treatment, and the patient cannot identify a plant exposure. What is the next step?",
    "choices": [
      "Keep renewing the same product indefinitely",
      "Assume resistance to calamine",
      "Reassess diagnosis and hidden exposures rather than repeat empiric treatment",
      "Start leftover systemic steroids without examination"
    ],
    "answer": 2,
    "rationale": "Uncertainty, recurrence, and failure to improve require a broader history and examination, including contactants and mimics.",
    "reviewHref": "#complication-check"
  },
  {
    "id": "poison-plant-case-028",
    "lesson": "exposure-prevention",
    "question": "A worker considers a plant safe because it has more than three leaflets. What is the best correction?",
    "choices": [
      "Every poisonous plant has exactly three leaflets",
      "All plants with seven leaflets are poison sumac",
      "Only green plants can contain urushiol",
      "Leaf count alone is insufficient; poison sumac commonly has 7-13 leaflets"
    ],
    "answer": 3,
    "rationale": "Local identification, plant form, and context matter. The familiar slogan is incomplete and does not replace appropriate protective clothing.",
    "reviewHref": "#exposure-prevention"
  },
  {
    "id": "poison-plant-case-029",
    "lesson": "exposure-prevention",
    "question": "What is the intended role of bentoquatam?",
    "choices": [
      "A pre-exposure barrier used with avoidance and protective clothing",
      "A treatment that heals an established open rash",
      "A rescue medicine for smoke-induced breathing difficulty",
      "A cleanser for tools"
    ],
    "answer": 0,
    "rationale": "Bentoquatam is preventive. It does not treat established dermatitis or replace PPE, and actual label and availability should be checked.",
    "reviewHref": "#exposure-prevention"
  },
  {
    "id": "poison-plant-case-030",
    "lesson": "exposure-prevention",
    "question": "Which plan reflects the reviewed MedlinePlus bentoquatam guidance?",
    "choices": [
      "Apply only after blisters appear",
      "Apply at least 15 minutes before contact, reapply at least every four hours during risk, and avoid flames",
      "Use on open rash immediately before a campfire",
      "Apply to a toddler without clinician advice"
    ],
    "answer": 1,
    "rationale": "The monograph describes preventive timing and flammability precautions; children under six need clinician advice. These directions do not prove current retail availability.",
    "reviewHref": "#exposure-prevention"
  }
];

const productCases = [
  {
    "id": "poison-plant-product-01",
    "lesson": "aluminum-acetate-preparation",
    "question": "A patient with a mild weeping forearm rash has Domeboro packets. Which preparation follows the reviewed label?",
    "choices": [
      "One packet directly on wet skin",
      "One to three packets dissolved in 16 fluid ounces of water",
      "Three packets in two fluid ounces under plastic",
      "One packet swallowed with 16 fluid ounces of water"
    ],
    "answer": 1,
    "rationale": "The reviewed powder is dissolved in 16 fluid ounces for topical use. Dry powder, concentrated occlusion, and ingestion are not appropriate.",
    "reviewHref": "#aluminum-acetate-preparation"
  },
  {
    "id": "poison-plant-product-02",
    "lesson": "aluminum-acetate-preparation",
    "question": "Two packets produce 0.32% aluminum acetate in 16 fluid ounces. A learner mistakenly uses eight fluid ounces. What is the nominal concentration before correction?",
    "choices": [
      "0.16%",
      "0.32%",
      "0.48%",
      "0.64%"
    ],
    "answer": 3,
    "rationale": "At the same packet amount, halving water volume doubles nominal concentration: 0.32% times 16/8 = 0.64%. This describes an error; use the labeled 16-fluid-ounce preparation.",
    "reviewHref": "#aluminum-acetate-preparation"
  },
  {
    "id": "poison-plant-product-03",
    "lesson": "aluminum-acetate-preparation",
    "question": "A patient plans to seal a Domeboro-soaked cloth under plastic overnight. What should change?",
    "choices": [
      "Use a loose uncovered compress for 15-30 minutes and discard the solution afterward",
      "Keep the plastic but add more packets",
      "Use the same solution for a week",
      "Leave it overnight only if the skin is already dry"
    ],
    "answer": 0,
    "rationale": "The label allows evaporation and specifies 15-30 minutes for a compress. Plastic covering and excessive soaking are inappropriate; prolonged soaking can overdry skin.",
    "reviewHref": "#aluminum-acetate-preparation"
  },
  {
    "id": "poison-plant-product-04",
    "lesson": "pramoxine-product-selection",
    "question": "An adult presents Caladryl lotion and Ivarest cream, assuming both are pramoxine products. Which interpretation matches the reviewed Drug Facts?",
    "choices": [
      "Both contain pramoxine 1% as their only active ingredient",
      "Caladryl contains diphenhydramine and Ivarest contains hydrocortisone",
      "Caladryl contains calamine/pramoxine; Ivarest cream contains calamine/benzyl alcohol/diphenhydramine",
      "Both contain aluminum acetate"
    ],
    "answer": 2,
    "rationale": "The reviewed Caladryl lotion has calamine 8% and pramoxine 1%; Ivarest cream has calamine 14%, benzyl alcohol 10.5%, and diphenhydramine 2%. Similar purposes do not make ingredients interchangeable.",
    "reviewHref": "#pramoxine-product-selection"
  },
  {
    "id": "poison-plant-product-05",
    "lesson": "pramoxine-product-selection",
    "question": "A patient taking oral diphenhydramine brings Ivarest cream for a small poison ivy rash. Which advice best reconciles the label and dermatology guidance?",
    "choices": [
      "Add the cream because topical medicines cannot duplicate oral exposure",
      "Choose an appropriate alternative: the cream contains diphenhydramine, prohibits duplication, and AAD advises avoiding topical antihistamines for this rash",
      "Use twice the cream dose to reduce oral dosing",
      "Stop all skin washing and use only oral diphenhydramine"
    ],
    "answer": 1,
    "rationale": "The cream label prohibits use with other diphenhydramine products, including oral products. AAD additionally advises against topical antihistamines because they can worsen poison-plant dermatitis.",
    "reviewHref": "#pramoxine-product-selection"
  },
  {
    "id": "poison-plant-product-06",
    "lesson": "pramoxine-product-selection",
    "question": "A parent asks about Ivarest pramoxine pads for an 18-month-old with a suspected plant rash. What matches the reviewed directions?",
    "choices": [
      "Use the adult frequency because the pads are topical",
      "Cut each pad in half to create an infant dose",
      "Use only if Caladryl was ineffective",
      "Do not use without consulting a doctor; the child is younger than two years"
    ],
    "answer": 3,
    "rationale": "The reviewed pramoxine pad label directs children under two not to use it and to consult a doctor. Changing pad size does not establish a pediatric dose.",
    "reviewHref": "#pramoxine-product-selection"
  }
];

export const poisonPlantDermatitisQuestionBank = [...clinicalCases, ...productCases];

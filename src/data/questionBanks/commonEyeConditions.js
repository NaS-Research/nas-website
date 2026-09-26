const c=(name,lesson,principle,action,assessment,hazard,why)=>({name,lesson,principle,action,assessment,hazard,why});
const concepts=[
c("red-eye triage","red-eye-triage","Pain, photophobia, reduced vision, trauma, chemical exposure, corneal opacity, abnormal pupil, or severe unilateral disease can signal a vision-threatening process","Stop routine self-care and arrange urgency-matched eye evaluation","Check visual change, pain, light sensitivity, trauma, exposure, contact lenses, discharge, pupil, cornea, and systemic illness","Calling every red eye conjunctivitis can delay care for keratitis, uveitis, angle closure, trauma, or orbital disease","The ocular emergency pathway is defined by threat to vision, not redness intensity alone"),
c("contact-lens red eye","red-eye-triage","Contact-lens wear increases concern for bacterial keratitis when redness, pain, discharge, or reduced vision occurs","Remove lenses and obtain prompt ophthalmic evaluation rather than restarting lenses or relying on OTC redness drops","Review lens type, overnight wear, water exposure, hygiene, pain, photophobia, discharge, and vision","Continuing lens wear can worsen corneal infection and obscure deterioration","The cornea can progress rapidly when a lens-related infection is present"),
c("chemical eye exposure","red-eye-triage","Chemical exposure requires immediate irrigation before diagnostic certainty","Begin copious irrigation and activate emergency or poison guidance according to the exposure","Identify substance, time, contact duration, pH if available, vision, pain, and irrigation already performed","Waiting to identify the exact chemical extends tissue contact","Early dilution and removal limit continuing ocular injury"),
c("viral conjunctivitis","infectious-conjunctivitis","Most acute infectious conjunctivitis in adults is viral and self-limited","Use supportive care and transmission precautions while identifying severe or herpetic disease","Assess watery discharge, respiratory symptoms, exposure, laterality, nodes, cornea, pain, photophobia, and vision","Routine topical antibiotics do not treat viral disease and can add toxicity or contamination","Adenoviral disease usually resolves without antimicrobial therapy"),
c("bacterial conjunctivitis","infectious-conjunctivitis","Purulent discharge and matted lids can support bacterial disease, but clinical overlap remains substantial","Use clinician-directed topical therapy when bacterial infection is likely and escalate gonococcal, chlamydial, neonatal, or corneal disease","Assess discharge, lid matting, age, sexual and perinatal context, contact lenses, cornea, pain, and vision","A red eye with pain or reduced vision should not be managed as uncomplicated bacterial conjunctivitis","Corneal and invasive infections require a different urgency and treatment route"),
c("conjunctivitis transmission","infectious-conjunctivitis","Viral and bacterial conjunctivitis spread through contaminated hands, tears, discharge, and objects","Use hand hygiene, avoid eye touching, do not share towels or cosmetics, and clean contaminated items","Review household, school, work, systemic illness, ability to avoid close contact, and local policy","A fixed antibiotic waiting period is not a universal return-to-school rule","Transmission control depends on illness, behavior, setting, and clinician or public-health guidance"),
c("allergic conjunctivitis","allergic-conjunctivitis","Bilateral itching with watery tearing and allergen exposure strongly supports allergic conjunctivitis","Reduce exposure and select topical dual-action antihistamine or mast-cell therapy when appropriate","Assess itching, laterality, discharge, season, allergen exposure, rhinitis, asthma, lenses, pain, and vision","Pain, photophobia, or vision loss does not fit uncomplicated allergy","Allergic disease is itchy and noncontagious but should not erase ocular red flags"),
c("ophthalmic allergy product selection","allergic-conjunctivitis","Ketotifen, olopatadine, and azelastine products differ in concentration, access, frequency, age, preservative, and lens instructions","Identify the exact product and follow its current label rather than treating the ingredient family as interchangeable","Review symptoms, red flags, age, concentration, dosing frequency, contact lenses, preservatives, other drops, technique, and response","Using an allergy drop to treat contact-lens irritation or ignoring pain and visual change","Product-specific selection preserves benefit while preventing contamination, lens, dosing, and diagnostic errors"),
c("topical ocular antihistamines","allergic-conjunctivitis","Topical ocular antihistamine and dual-action agents target symptoms at the ocular surface","Use the exact product label, remove lenses as directed, and reassess persistent symptoms","Review age, product, preservatives, lens use, dosing, response, dryness, and other eye medicines","Stacking vasoconstrictor redness products can mask symptoms without controlling allergy","Mechanism-targeted local therapy treats itching more directly than cosmetic whitening"),
c("allergen control for eyes","allergic-conjunctivitis","Clinically relevant exposure control complements medicine","Match pollen, animal, dust, mold, cosmetic, or lens-solution exposure to a feasible intervention","Review timing, environment, cosmetics, lens products, hand-to-eye contact, and coexisting rhinitis","Broad avoidance without identifying the relevant trigger adds burden without clarity","Exposure and symptom timing determine whether an intervention is likely to help"),
c("anterior blepharitis","blepharitis-demodex","Blepharitis often causes chronic lid-margin irritation, crusting, burning, and fluctuating symptoms","Use sustained lid hygiene and warm care while assessing subtype and treatment need","Examine lashes, crusting, lid margin, meibomian glands, rosacea, chalazia, tear film, and recurrence","One short cleaning course may not control a chronic relapsing lid disorder","Long-term lid care targets debris, inflammation, and gland dysfunction"),
c("meibomian gland dysfunction","blepharitis-demodex","Obstructed or abnormal meibomian secretion destabilizes the tear-film lipid layer and increases evaporation","Use warm compresses, lid massage or hygiene, and individualized ocular-surface treatment","Assess gland openings, secretion quality, evaporation, rosacea, screen exposure, and dry-eye symptoms","Treating only aqueous deficiency can miss an evaporative driver","The tear film depends on a functional lipid layer"),
c("Demodex blepharitis","blepharitis-demodex","Collarettes at lash bases and chronic lid symptoms can indicate Demodex infestation","Confirm the phenotype and use current clinician-directed therapy such as labeled lotilaner when appropriate","Assess collarettes, itching, lashes, lid margin, prior care, lenses, and treatment eligibility","Tea-tree products should not be treated as equivalent to an FDA-approved ocular drug","Product quality, concentration, ocular tolerance, and evidence differ"),
c("tear-film dysfunction","dry-eye-foundations","Dry eye can reflect aqueous deficiency, evaporation, inflammation, neurosensory dysfunction, or a mixture","Identify the dominant contributors before escalating therapy","Assess symptoms, fluctuating vision, environment, blinking, lids, medicines, autoimmune disease, surgery, lenses, and examination","Tearing does not exclude dry eye because reflex tearing can accompany surface irritation","Tear quality and stability matter as much as tear quantity"),
c("artificial tears","dry-eye-foundations","Lubricants provide symptom relief but product composition, preservative exposure, and dosing frequency matter","Choose an appropriate sterile product and consider preservative-free units with frequent use or intolerance","Review dose frequency, response, preservatives, viscosity, blur, contamination, recalls, and cost","Using a recalled or contaminated product can cause infection and vision loss","Ophthalmic products bypass defenses and must remain sterile"),
c("dry-eye environment and behavior","dry-eye-foundations","Low humidity, airflow, prolonged screen use, reduced blinking, smoke, and lens wear can worsen tear instability","Build a feasible plan using blink breaks, environment change, hydration of the surface, and lens review","Assess occupation, screen pattern, airflow, sleep, smoke, lenses, cosmetics, and symptom timing","Adding prescription therapy without addressing exposure can leave the main driver unchanged","Ocular-surface exposure and blink dynamics directly influence evaporation"),
c("prescription dry-eye therapy","dry-eye-pharmacotherapy","Persistent dry eye may require anti-inflammatory, tear-stimulating, or other phenotype-directed prescription therapy","Match treatment to examination, disease severity, onset expectations, administration, and follow-up","Review prior lubricants, inflammation, cornea, lids, autoimmune disease, product label, adverse effects, and adherence","A single product failure does not prove every dry-eye mechanism is treatment resistant","Dry-eye therapies act through different pathways and often require time and layered care"),
c("lifitegrast","dry-eye-pharmacotherapy","Lifitegrast treats signs and symptoms of dry eye disease by modulating LFA-1 and ICAM-1 inflammatory signaling","Counsel on twice-daily product-specific use, transient irritation or blur, dysgeusia, and single-use container disposal","Assess symptom and sign response, instillation effects, taste, lenses, other drops, adherence, and follow-up","Discarding administration counseling can turn expected transient effects into early abandonment","Technique and expectation setting support sustained anti-inflammatory treatment"),
c("cyclosporine ophthalmic therapy","dry-eye-pharmacotherapy","Ophthalmic cyclosporine products reduce ocular-surface inflammation and support tear production in selected disease","Use the exact formulation and label because concentrations, vehicles, administration, and storage differ","Review product, dose, onset, irritation, lenses, other drops, response, and adherence","Treating all cyclosporine eye products as interchangeable can cause administration errors","Formulation changes ocular delivery and labeled instructions"),
c("ocular corticosteroids","inflammation-steroid-boundaries","Topical ocular corticosteroids can suppress inflammation but can raise intraocular pressure, worsen infection, delay healing, and promote cataract even during prescribed use","Reserve them for clinician-directed use with diagnosis, duration, and monitoring","Assess infection, corneal integrity, glaucoma risk, pressure, duration, product, response, and follow-up","Using leftover steroid drops for an undiagnosed red eye can worsen herpetic or microbial disease","Powerful local immunosuppression requires diagnostic and monitoring control"),
c("ophthalmic NSAIDs","inflammation-steroid-boundaries","Topical NSAIDs have procedure-specific and selected inflammatory roles but are not universal OTC red-eye therapy","Use only for a defined indication with corneal-risk review and exact duration","Assess surgery, corneal disease, healing, concurrent topical drugs, pain, vision, and prescriber plan","Prolonged or inappropriate exposure can harm a vulnerable cornea","Local anti-inflammatory benefit depends on indication and tissue integrity"),
c("ocular vasoconstrictors","redness-medication-injury","Redness-relief vasoconstrictors change vessel appearance without diagnosing or correcting the cause","Limit use to labeled minor irritation and stop when symptoms persist, recur, or include red flags","Review duration, rebound, product ingredients, contact lenses, glaucoma risk, pain, discharge, and vision","Cosmetic whitening can delay recognition of infection or inflammation","Redness is a sign whose cause determines treatment"),
c("medication-induced ocular injury","redness-medication-injury","Systemic and ocular medicines can cause dryness, blurred vision, pressure change, corneal deposits, optic neuropathy, retinal toxicity, or color and field disturbance","Link the symptom to exposure and arrange drug-specific monitoring or urgent assessment","Review onset, dose, cumulative exposure, all routes, vision pattern, color, field, pain, pressure, retina, and alternatives","Stopping a necessary drug blindly can be harmful, but ignoring sudden visual change can permit permanent injury","Management depends on the drug, ocular structure, reversibility, and urgency"),
c("hydroxychloroquine retinal surveillance","redness-medication-injury","Hydroxychloroquine toxicity risk depends on daily dose, duration, kidney function, retinal status, and interacting risk factors","Use guideline-based baseline and longitudinal retinal screening without waiting for symptoms","Review actual-weight dose, duration, kidney function, tamoxifen, macular disease, test results, and adherence","Routine visual acuity alone can miss early parafoveal or pericentral toxicity","Sensitive structural and functional testing aims to detect toxicity before central vision is lost"),
c("solution and suspension technique","ophthalmic-dosage-technique","Ophthalmic preparation and prescribed drop count depend on the exact formulation and label","Verify dosage form, wash hands, prepare the product, instill the prescribed drop count into the conjunctival sac, and avoid tip contact","Review formulation, priming or shaking, dexterity, vision, contamination, dose count, and return demonstration","Unprescribed extra drops can increase overflow, waste, and exposure; a universal one-drop rule can also conflict with the prescribed regimen","Limited ocular capacity favors precise delivery; the exact prescription and product label determine the dose"),
c("punctal occlusion","ophthalmic-dosage-technique","Gentle eyelid closure and nasolacrimal occlusion can reduce drainage and systemic absorption","Teach a product-appropriate brief closure and punctal pressure technique without squeezing or blinking repeatedly","Observe hand position, duration, dexterity, systemic risk, and concurrent drops","Rapid blinking pumps drug into the nasolacrimal system","Reducing drainage keeps more medicine at the eye and less in systemic circulation"),
c("multiple ophthalmic products","ophthalmic-dosage-technique","Spacing topical products prevents washout, and ointments generally follow drops","Build a written sequence with at least product-label spacing and place thicker formulations last","Review every eye product, frequency, formulation, laterality, label instructions, and daily schedule","Administering all products immediately together can wash out earlier doses","Order and spacing preserve ocular contact"),
c("ophthalmic sterility","sterility-lenses-preservatives","Eye drops must be sterile and the container tip must not touch the eye, hands, clothing, or surfaces","Use clean hands, maintain tip clearance, cap promptly, and discard single-use containers as labeled","Inspect seal, expiration, storage, appearance, recall status, tip contact, sharing, and symptoms after use","A clear-looking solution can still be contaminated","Ophthalmic products bypass natural defenses and contamination can cause severe infection"),
c("contact lenses and eye medicines","sterility-lenses-preservatives","Lenses can trap drugs and preservatives and should be removed and reinserted only according to the exact label","Build lens removal, wait time, cleaning, replacement, and no-wear instructions into counseling","Review lens type, product preservative, infection, corneal disease, schedule, water exposure, and case hygiene","A generic fifteen-minute rule should not override product-specific or infection-related no-lens instructions","Lens safety depends on the drug, preservative, ocular condition, and label"),
c("benzalkonium chloride exposure","sterility-lenses-preservatives","Preservative burden can worsen ocular-surface irritation in susceptible patients","Consider preservative-free or lower-burden options when frequent dosing or intolerance supports it","Review all preserved drops, frequency, surface disease, lenses, burning, adherence, cost, and sterility technique","Preservative-free does not mean contamination-proof","Preservative-free products still require sterile handling and the exact single-use or multidose storage and disposal instructions"),
c("pediatric red eye","special-populations-follow-up","Neonatal disease, pain, photophobia, trauma, reduced vision, severe swelling, or inability to examine requires prompt evaluation","Use age-specific triage and avoid borrowing adult products or old prescriptions","Assess age, birth history, exposure, fever, behavior, vision, pain, discharge, trauma, product, and caregiver technique","Calling neonatal conjunctivitis routine pink eye can miss a time-sensitive infection","Age changes pathogens, examination reliability, dosing, and urgency"),
c("pregnancy and lactation eye therapy","special-populations-follow-up","Local ocular therapy can still produce systemic exposure, so indication, product evidence, and technique matter","Use the least burdensome effective option and reduce drainage when appropriate after benefit-risk review","Review gestation or lactation, disease severity, product, systemic absorption, labeling, alternatives, and follow-up","Assuming every eye drop has zero systemic exposure is incorrect","Nasolacrimal drainage can create systemic exposure despite topical dosing"),
c("closed-loop ocular follow-up","special-populations-follow-up","Every self-care plan needs an expected course, stop rule, and escalation pathway","Document when improvement should occur and when pain, photophobia, vision change, discharge, swelling, persistence, or recurrence changes care","Review trajectory, adherence, product use, lenses, contamination, red flags, and access to eye care","Repeating OTC treatment without reassessment can delay diagnosis and worsen injury","Trajectory and treatment response are diagnostic information"),
];
const dimensions=[["principle","Which principle best characterizes"],["action","Which clinical action best applies to"],["assessment","Which assessment is most appropriate for"],["hazard","Which reasoning hazard is most important to prevent with"]];
const distractors=(i,f)=>[7,15,23].map(o=>concepts[(i+o)%concepts.length][f]);
export const commonEyeConditionsQuestionBank=concepts.flatMap((x,i)=>dimensions.map(([f,stem],j)=>({id:`common-eye-${String(i*4+j+1).padStart(3,"0")}`,lesson:x.lesson,question:`${stem} ${x.name}?`,choices:[x[f],...distractors(i,f)],answer:0,rationale:x.why,reviewHref:`#${x.lesson}`})));

commonEyeConditionsQuestionBank.push(
{"id": "common-eye-azasite-course", "lesson": "infectious-conjunctivitis", "question": "A patient finishes the prescribed seven-day AzaSite course but notes that the bottle may be kept for fourteen days after opening. What should the pharmacist clarify?", "choices": ["The discard deadline does not extend the prescribed course", "Continue twice-daily dosing until day fourteen", "Use it preventively in the unaffected eye until empty", "Save the bottle for the next episode of red eye"], "answer": 0, "rationale": "Treatment duration and opened-container usability answer different questions. Follow the prescribed course and discard deadline separately.", "reviewHref": "#infectious-conjunctivitis"},
{"id": "common-eye-polytrim-neonate", "lesson": "infectious-conjunctivitis", "question": "A caregiver proposes using leftover polymyxin B/trimethoprim drops for a newborn with eye discharge. Which response is appropriate?", "choices": ["Arrange prompt neonatal evaluation; this product is not indicated for ophthalmia neonatorum", "Use the adult regimen because the infection is on the surface", "Dilute the bottle with tap water before use", "Wait until the infant is two months old before seeking care"], "answer": 0, "rationale": "Neonatal conjunctivitis requires prompt assessment. The label excludes this indication and does not establish safety and effectiveness below two months.", "reviewHref": "#infectious-conjunctivitis"}
);

commonEyeConditionsQuestionBank.push({"id": "common-eye-moxifloxacin-formulation", "lesson": "infectious-conjunctivitis", "question": "A prescription names Vigamox 0.5%, but a saved counseling sheet describes twice-daily Moxeza 0.5%. What should be done before counseling?", "choices": ["Verify the exact product and its prescribed schedule; concentration alone does not make the instructions interchangeable", "Use twice daily because both contain 0.5% moxifloxacin", "Combine both schedules to ensure adequate exposure", "Use the topical bottle as an intracameral preparation"], "answer": 0, "rationale": "Vigamox and Moxeza have different labeled frequencies. Identify the dispensed formulation and resolve conflicting instructions before use.", "reviewHref": "#infectious-conjunctivitis"});

commonEyeConditionsQuestionBank.push({"id": "common-eye-ulcer-regimen", "lesson": "infectious-conjunctivitis", "question": "An ophthalmologist prescribes intensive ciprofloxacin drops for a bacterial corneal ulcer. A patient wants to substitute a friend\u2019s simpler conjunctivitis schedule. What is the best response?", "choices": ["Keep the ulcer-specific plan and clarify any difficulty with the ophthalmologist promptly", "Reduce frequency because both diagnoses involve the same eye", "Use redness alone to decide when to stop", "Switch to a steroid combination without examination"], "answer": 0, "rationale": "The diagnosis and affected tissue determine treatment intensity and follow-up. A conjunctivitis schedule cannot replace a prescribed corneal-ulcer regimen.", "reviewHref": "#infectious-conjunctivitis"});

commonEyeConditionsQuestionBank.push(
{"id": "common-eye-gonococcal-dose", "lesson": "gonococcal-and-neonatal-eye-infections", "question": "Which CDC regimen specifically applies to gonococcal conjunctivitis in an adult?", "choices": ["Ceftriaxone 1 g IM once with specialist care", "Ceftriaxone 250 mg IM once as an unchanged historical genital regimen", "Topical erythromycin alone", "Daily redness-relief drops until discharge stops"], "answer": 0, "rationale": "CDC lists a single 1-g IM ceftriaxone dose for adult/adolescent gonococcal conjunctivitis; evaluation and partner management remain necessary.", "reviewHref": "#gonococcal-and-neonatal-eye-infections"},
{"id": "common-eye-erythromycin-total", "lesson": "gonococcal-and-neonatal-eye-infections", "question": "A 3.2-kg infant is prescribed erythromycin 50 mg/kg/day in four divided doses for confirmed chlamydial infection. What is the amount per dose?", "choices": ["40 mg", "160 mg", "12.5 mg", "640 mg"], "answer": 0, "rationale": "3.2 kg × 50 mg/kg/day = 160 mg/day; divide by four to obtain 40 mg per dose. Confirm formulation concentration separately before calculating mL.", "reviewHref": "#gonococcal-and-neonatal-eye-infections"}
);

commonEyeConditionsQuestionBank.push(
{"id": "common-eye-ganciclovir-healing", "lesson": "infectious-conjunctivitis", "question": "An ophthalmologist confirms healing of a dendritic ulcer during Zirgan treatment. Which labeled step follows the initial five-times-daily phase?", "choices": ["One drop three times daily for seven additional days", "Stop immediately because redness has improved", "Continue five times daily indefinitely", "Replace the antiviral with leftover steroid drops"], "answer": 0, "rationale": "The label includes a seven-day, three-times-daily phase after healing. Symptom improvement alone does not establish corneal healing.", "reviewHref": "#infectious-conjunctivitis"},
{"id": "common-eye-herpes-steroid-context", "lesson": "infectious-conjunctivitis", "question": "A patient with suspected active epithelial herpes keratitis asks to use a relative’s steroid eye drops. What is the appropriate response?", "choices": ["Arrange prompt ophthalmic care and avoid unsupervised steroid use", "Use the steroid because all viral eye disease benefits from it", "Use an antibiotic-steroid combination to eliminate HSV", "Assume steroids can never be used for any form of herpetic eye disease"], "answer": 0, "rationale": "Active epithelial infection and immune-mediated deeper disease need different management. Steroids can worsen epithelial infection; selected deeper inflammatory disease may need specialist-directed steroids with antiviral coverage.", "reviewHref": "#infectious-conjunctivitis"}
);

commonEyeConditionsQuestionBank.push({"id": "common-eye-adult-chlamydia", "lesson": "infectious-conjunctivitis", "question": "An adult has persistent follicular conjunctivitis despite topical antibiotics, and testing confirms chlamydia. Which plan addresses the infection comprehensively?", "choices": ["Coordinate systemic treatment, evaluation for associated STIs, partner care and ocular follow-up", "Keep changing topical antibiotics without systemic evaluation", "Treat only if genital symptoms are present", "Use steroid drops alone to suppress the follicles"], "answer": 0, "rationale": "Adult inclusion conjunctivitis can coexist with genital infection. Systemic treatment and partner management address infection and reinfection beyond the visible eye findings.", "reviewHref": "#infectious-conjunctivitis"});

commonEyeConditionsQuestionBank.push({"id": "common-eye-olopatadine-schedule", "lesson": "allergic-conjunctivitis", "question": "A patient replaces Pataday 0.1% with Pataday 0.7% and plans to keep using one drop twice daily. What should counseling clarify?", "choices": ["The 0.7% label directs one drop once daily, no more than once per day", "Every olopatadine concentration uses the same twice-daily schedule", "The 0.7% product should be used every six hours", "Higher strength removes the need for contact-lens precautions"], "answer": 0, "rationale": "The reviewed 0.1% and 0.7% products have different labeled frequencies. Confirm the actual bottle rather than carrying forward an old schedule.", "reviewHref": "#allergic-conjunctivitis"});

commonEyeConditionsQuestionBank.push({"id": "common-eye-zerviate-container", "lesson": "allergic-conjunctivitis", "question": "A patient notices that a Zerviate single-use container contains preservative and wants to save the remainder for the evening dose. What should counseling explain?", "choices": ["Discard the container after dosing; preservative content does not override single-use instructions", "Recap it and reuse it for seven days", "Transfer the remainder into an old eye-drop bottle", "Dilute the remainder with water to restore the original volume"], "answer": 0, "rationale": "The reviewed Zerviate label directs immediate use after opening and disposal after administration, even though the formulation contains benzalkonium chloride.", "reviewHref": "#allergic-conjunctivitis"});

commonEyeConditionsQuestionBank.push({"id": "common-eye-lotilaner-missed", "lesson": "blepharitis-demodex", "question": "A patient misses a morning Xdemvy dose during the prescribed six-week course. What does the label direct?", "choices": ["Continue with the next scheduled dose", "Double the evening dose", "Restart the entire six-week course", "Stop treatment until collarettes recur"], "answer": 0, "rationale": "The lotilaner label directs continuing with the next scheduled dose after a missed dose, without doubling or restarting the course.", "reviewHref": "#blepharitis-demodex"});

commonEyeConditionsQuestionBank.push({"id": "common-eye-vevye-delivery", "lesson": "dry-eye-pharmacotherapy", "question": "A patient sees a Vevye drop enter the eye but does not feel it. What should counseling clarify?", "choices": ["A drop may not be felt; do not add extra doses based only on sensation", "Keep squeezing until the eye stings", "Refrigerate the bottle to make the dose easier to feel", "Replace the solution with Restasis using the same bottle"], "answer": 0, "rationale": "Vevye labeling notes that the drop may not be felt. Teach the bottle-specific technique and prescribed drop count rather than using discomfort as evidence of delivery.", "reviewHref": "#dry-eye-pharmacotherapy"});

commonEyeConditionsQuestionBank.push({"id": "common-eye-lifitegrast-allergy", "lesson": "dry-eye-pharmacotherapy", "question": "After Xiidra, a patient develops wheezing and tongue swelling. What is the appropriate response?", "choices": ["Seek emergency medical care immediately", "Wait for the next routine visit", "Repeat the dose to confirm the reaction", "Treat this as an expected taste disturbance"], "answer": 0, "rationale": "These symptoms suggest serious hypersensitivity, not routine dysgeusia. Immediate evaluation is necessary.", "reviewHref": "#dry-eye-pharmacotherapy"});

commonEyeConditionsQuestionBank.push({"id": "common-eye-miebo-lenses", "question": "A patient plans to reinsert contact lenses fifteen minutes after Miebo. What adjustment is needed?", "choices": ["Wait at least thirty minutes after dosing", "Reinsert immediately", "Wear the lenses during dosing", "Use twice the dose to compensate"], "rationale": "Lens timing depends on the product. Miebo requires at least thirty minutes.", "lesson": "dry-eye-pharmacotherapy", "answer": 0, "reviewHref": "#dry-eye-pharmacotherapy"});

commonEyeConditionsQuestionBank.push({"id": "common-eye-tyrvaya-route", "question": "A patient assumes Tyrvaya should be sprayed into the eyes because it treats dry eye. What should the pharmacist clarify?", "choices": ["Use the nasal route and demonstrate the device", "Spray directly onto each cornea", "Transfer it into an eye-drop bottle", "Use oral varenicline instead"], "rationale": "The intended nasal route is essential; the treated organ does not determine the administration route.", "lesson": "dry-eye-pharmacotherapy", "answer": 0, "reviewHref": "#dry-eye-pharmacotherapy"});

commonEyeConditionsQuestionBank.push({"id": "common-eye-tryptyr-pouch", "lesson": "dry-eye-pharmacotherapy", "question": "An unopened Tryptyr vial remains in a foil pouch opened eight days ago. Can it still be used?", "choices": ["No; the opened-pouch deadline has passed", "Yes, because the vial remains sealed", "Yes, if the solution looks clear", "Yes, after recooling it"], "answer": 0, "rationale": "The seven-day pouch limit applies even to unopened vials. Refrigeration does not restart that clock.", "reviewHref": "#dry-eye-pharmacotherapy"});

commonEyeConditionsQuestionBank.push({"id": "common-eye-ozurdex-route", "lesson": "inflammation-steroid-boundaries", "question": "A learner classifies Ozurdex as a steroid eye drop. Which correction is needed?", "choices": ["It is an intravitreal implant administered by an eye specialist", "It is an oral tablet", "It is a contact-lens disinfectant", "It is an OTC redness drop"], "answer": 0, "rationale": "Route and formulation determine administration and monitoring. A shared steroid ingredient does not make products interchangeable.", "reviewHref": "#inflammation-steroid-boundaries"});

commonEyeConditionsQuestionBank.push({"id": "common-eye-eysuvis-renewal", "lesson": "dry-eye-pharmacotherapy", "question": "A patient finishes two weeks of Eysuvis but has medicine left. What is appropriate before extending treatment?", "choices": ["Prescriber reassessment with ocular examination and pressure evaluation", "Continue until the bottle is empty", "Double the dose if dryness persists", "Use the expiration date as the treatment stop date"], "answer": 0, "rationale": "Container usability does not determine steroid-course duration. Renewal requires clinical reassessment.", "reviewHref": "#dry-eye-pharmacotherapy"});

// Scenario-specific replacements avoid multiple reasonable answers in broad triage stems.
const triageRevisions=[
  {
    "id": "common-eye-002",
    "question": "A patient requests redness drops but reports new reduced vision and marked eye pain. What is the priority?",
    "choices": [
      "Arrange urgent eye evaluation",
      "Choose the strongest whitening drop",
      "Wait a week for spontaneous improvement",
      "Treat solely from the discharge color"
    ],
    "answer": 0,
    "rationale": "Pain with reduced vision changes the urgency; cosmetic treatment must not delay evaluation."
  },
  {
    "id": "common-eye-003",
    "question": "Which finding most clearly moves a red-eye encounter out of routine allergy self-care?",
    "choices": [
      "New reduction in vision",
      "A history of seasonal pollen exposure alone",
      "Bilateral itching without pain or visual change",
      "Symptoms occurring during pollen season"
    ],
    "answer": 0,
    "rationale": "New visual loss is a red flag even when allergy is also possible."
  },
  {
    "id": "common-eye-004",
    "question": "A patient has red eye and photophobia. What is unsafe about labeling this routine conjunctivitis without evaluation?",
    "choices": [
      "Corneal or intraocular disease may be missed",
      "Photophobia proves bacterial conjunctivitis",
      "Redness excludes serious ocular disease",
      "Every red eye requires the same antibiotic"
    ],
    "answer": 0,
    "rationale": "Symptoms affecting comfort and vision require assessment beyond the visible redness."
  },
  {
    "id": "common-eye-006",
    "question": "A contact-lens wearer develops eye pain and blurred vision. What should happen now?",
    "choices": [
      "Remove lenses and contact an eye doctor immediately",
      "Continue wearing the same lenses",
      "Try redness drops for several days first",
      "Replace the lens and postpone evaluation"
    ],
    "answer": 0,
    "rationale": "Possible corneal infection requires immediate eye-care contact."
  },
  {
    "id": "common-eye-007",
    "question": "Which history is particularly relevant when assessing possible contact-lens keratitis?",
    "choices": [
      "Overnight lens wear and lens exposure to water",
      "Only the color of the lens case",
      "Only the price of the lenses",
      "Only the brand of eyeglass frames"
    ],
    "answer": 0,
    "rationale": "Lens wear and care exposures help assess infection risk; symptoms and examination remain essential."
  },
  {
    "id": "common-eye-008",
    "question": "Pain persists after a patient removes a contact lens. Which conclusion is appropriate?",
    "choices": [
      "Removal does not exclude an infection; seek immediate eye-care advice",
      "Removal guarantees that the cornea is healthy",
      "Persistent pain confirms allergy",
      "The same lens should be reinserted to test comfort"
    ],
    "answer": 0,
    "rationale": "Continued symptoms after lens removal still require evaluation."
  }
];
for (const revision of triageRevisions) {
  const index = commonEyeConditionsQuestionBank.findIndex(question => question.id === revision.id);
  if (index < 0) throw new Error(`Missing question ${revision.id}`);
  commonEyeConditionsQuestionBank[index] = { ...commonEyeConditionsQuestionBank[index], ...revision };
}

const conjunctivitisRevisions=[
  {
    "id": "common-eye-018",
    "question": "A contact-lens wearer is diagnosed with bacterial conjunctivitis. Which plan matches CDC guidance?",
    "choices": [
      "Remove lenses, use prescribed topical antibiotics and obtain prompt ophthalmic evaluation",
      "Continue lens wear while using antibiotics",
      "Use only cosmetic redness drops",
      "Wait until vision deteriorates before evaluation"
    ],
    "rationale": "Contact-lens wear increases concern for bacterial keratitis and changes management.",
    "answer": 0
  },
  {
    "id": "common-eye-020",
    "question": "A patient treated for uncomplicated conjunctivitis develops reduced vision. What should happen next?",
    "choices": [
      "Prompt eye reassessment",
      "Continue unchanged until the bottle is empty",
      "Add leftover steroid drops",
      "Assume this proves recovery"
    ],
    "rationale": "New visual impairment requires reassessment rather than automatic continuation of routine care.",
    "answer": 0
  },
  {
    "id": "common-eye-023",
    "question": "A school requests clearance for a student with infectious conjunctivitis. What should guide the decision?",
    "choices": [
      "Systemic illness, close-contact risk, clinician approval and implementation of indicated therapy",
      "A universal antibiotic waiting period regardless of diagnosis",
      "Eye color alone",
      "Whether a relative has spare antibiotic drops"
    ],
    "rationale": "Return decisions depend on clinical and transmission circumstances; antibiotics are not universally required.",
    "answer": 0
  },
  {
    "id": "common-eye-017",
    "rationale": "Purulent discharge supports bacterial disease, but overlapping presentations prevent discharge alone from establishing the cause."
  }
];
for (const revision of conjunctivitisRevisions) {
  const index = commonEyeConditionsQuestionBank.findIndex(question => question.id === revision.id);
  if (index < 0) throw new Error(`Missing question ${revision.id}`);
  commonEyeConditionsQuestionBank[index] = { ...commonEyeConditionsQuestionBank[index], ...revision };
}

// Each retained answer is paired with topic-specific incorrect alternatives.
const allergyDistractorRevisions={
  "common-eye-026": [
    "Use borrowed steroid drops before confirming the diagnosis",
    "Treat every itchy eye with an antibiotic",
    "Use whitening drops as the only allergy treatment"
  ],
  "common-eye-027": [
    "Use redness intensity alone to diagnose allergy",
    "Ignore visual change if pollen exposure occurred",
    "Assume unilateral pain is diagnostic of seasonal allergy"
  ],
  "common-eye-028": [
    "Assuming every itchy eye requires an oral antibiotic",
    "Believing allergy always causes purulent discharge",
    "Assuming seasonal symptoms rule out all other disease"
  ],
  "common-eye-030": [
    "Carry the old schedule forward whenever the active ingredient matches",
    "Ignore age limits for medicines sold without a prescription",
    "Combine several allergy drops without reviewing their ingredients"
  ],
  "common-eye-031": [
    "Choose only by package color",
    "Compare bottle price without checking concentration or directions",
    "Assume all products share the same contact-lens instructions"
  ],
  "common-eye-032": [
    "Checking the dispensed concentration before counseling",
    "Reviewing the patient age before product selection",
    "Reading the lens instructions on the actual bottle"
  ],
  "common-eye-034": [
    "Keep lenses in whenever the product is sold OTC",
    "Use more drops whenever symptoms return, regardless of labeled limits",
    "Continue indefinitely despite new visual loss"
  ],
  "common-eye-035": [
    "Assume every eye drop is preservative-free",
    "Ignore other ophthalmic medicines when building a schedule",
    "Select a dose solely from bottle size"
  ],
  "common-eye-036": [
    "Checking the actual ingredient before selecting a product",
    "Reassessing symptoms that fail to improve",
    "Discussing trigger reduction alongside drug treatment"
  ],
  "common-eye-038": [
    "Avoid every suspected trigger permanently without reviewing symptom timing",
    "Replace exposure review with repeated dose escalation",
    "Assume every environmental exposure causes the same allergy"
  ],
  "common-eye-039": [
    "Use a single symptom score without asking about exposures",
    "Assume the newest cosmetic is causal without examining the time course",
    "Exclude lens solutions from the exposure history"
  ],
  "common-eye-040": [
    "Matching a symptom diary to likely exposures",
    "Choosing a feasible intervention for an identified trigger",
    "Reconsidering the diagnosis when trigger reduction does not help"
  ]
};
for (const [id, alternatives] of Object.entries(allergyDistractorRevisions)) {
  const question = commonEyeConditionsQuestionBank.find(item => item.id === id);
  if (!question) throw new Error(`Missing question ${id}`);
  question.choices = [question.choices[question.answer], ...alternatives];
  question.answer = 0;
}

Object.assign(commonEyeConditionsQuestionBank.find(question => question.id === "common-eye-028"), {
  question: "Which new symptom during presumed eye allergy requires reassessment rather than simply increasing allergy drops?",
  choices: ["Reduced vision with eye pain", "Mild bilateral itching after pollen exposure", "Watery tearing with a familiar seasonal pattern", "Sneezing during the usual pollen season"],
  answer: 0,
  rationale: "Pain with visual change is not routine uncomplicated allergy and requires prompt evaluation."
});

const lidAndDryEyeDistractorRevisions={
  "common-eye-042": [
    "Scrub the open eye vigorously",
    "Stop all lid care permanently once crusting improves",
    "Treat every episode with borrowed antibiotics"
  ],
  "common-eye-043": [
    "Determine subtype from redness intensity alone",
    "Examine only the retina while ignoring the lid margin",
    "Assume every crusted lid represents acute conjunctivitis"
  ],
  "common-eye-044": [
    "Continuing a gentle maintenance routine when advised",
    "Reviewing associated rosacea",
    "Reassessing recurrence rather than assuming a new infection"
  ],
  "common-eye-046": [
    "Use compresses hot enough to burn",
    "Squeeze the glands forcefully at home",
    "Treat only with cosmetic whitening drops"
  ],
  "common-eye-047": [
    "Assess only aqueous tear volume and ignore the lids",
    "Diagnose from the brand of lubricant used",
    "Assume normal visual acuity excludes gland dysfunction"
  ],
  "common-eye-048": [
    "Inspecting gland openings",
    "Considering mixed aqueous and evaporative disease",
    "Reviewing rosacea as a contributing condition"
  ],
  "common-eye-050": [
    "Use household tea-tree oil directly in the eyes",
    "Treat all lid crusting as confirmed Demodex without examination",
    "Replace a prescribed ocular drug with a cosmetic cleanser of unknown composition"
  ],
  "common-eye-051": [
    "Diagnose from the amount of conjunctival redness alone",
    "Assume all morning crusting proves Demodex",
    "Exclude the lash bases from examination"
  ],
  "common-eye-052": [
    "Confirming the diagnosis before targeted treatment",
    "Checking the age and indication in the drug label",
    "Teaching contamination prevention during administration"
  ],
  "common-eye-054": [
    "Choose treatment solely from the amount of visible tearing",
    "Assume every case has one identical cause",
    "Escalate drug strength without examining the ocular surface"
  ],
  "common-eye-055": [
    "Measure tear volume alone and ignore lids and evaporation",
    "Diagnose from redness alone",
    "Assume a symptom questionnaire replaces examination in every patient"
  ],
  "common-eye-056": [
    "Recognizing mixed disease",
    "Reviewing eyelid anatomy",
    "Considering medication effects on the surface"
  ],
  "common-eye-057": [
    "All lubricants have identical preservatives and viscosity",
    "An OTC designation guarantees that contamination cannot occur",
    "Every lubricant is intended to disinfect contact lenses"
  ],
  "common-eye-058": [
    "Choose any clear liquid regardless of sterility",
    "Assume all lubricants are preservative-free",
    "Use increasing amounts without reviewing persistent symptoms"
  ],
  "common-eye-059": [
    "Select only by the bottle color",
    "Ignore new discomfort after product use",
    "Assume every new bottle is exempt from recalls"
  ],
  "common-eye-060": [
    "Checking the lot against a recall notice",
    "Following single-use disposal instructions",
    "Reviewing tip contamination"
  ],
  "common-eye-062": [
    "Direct a fan at the eyes to improve tear stability",
    "Avoid blinking during prolonged screen work",
    "Use more prescription drops without examining relevant exposures"
  ],
  "common-eye-063": [
    "Ask only which brand of tears the patient buys",
    "Ignore the timing of symptoms during work",
    "Assume environmental exposures cannot affect the ocular surface"
  ],
  "common-eye-064": [
    "Taking breaks during prolonged screen work",
    "Reviewing airflow at the workstation",
    "Changing an identified aggravating exposure"
  ]
};
for (const [id, alternatives] of Object.entries(lidAndDryEyeDistractorRevisions)) {
  const question = commonEyeConditionsQuestionBank.find(item => item.id === id);
  if (!question) throw new Error(`Missing question ${id}`);
  question.choices = [question.choices[question.answer], ...alternatives];
  question.answer = 0;
}

const lidAndDryEyeRationales={
  "common-eye-049": "Collarettes at the lash bases are a characteristic clue supporting evaluation for Demodex blepharitis.",
  "common-eye-050": "Targeted therapy follows the confirmed disease phenotype; lotilaner is labeled for Demodex blepharitis.",
  "common-eye-051": "Lash-base findings and lid symptoms help identify the phenotype and guide treatment eligibility.",
  "common-eye-057": "Lubricant vehicles and preservatives differ; selection should account for response, tolerability and administration needs.",
  "common-eye-058": "Frequent exposure or intolerance can justify a preservative-free option, but sterile handling remains necessary.",
  "common-eye-059": "Selection requires reviewing both formulation tolerance and product safety rather than treating all lubricants as equivalent."
};
for (const [id, rationale] of Object.entries(lidAndDryEyeRationales)) {
  commonEyeConditionsQuestionBank.find(question => question.id === id).rationale = rationale;
}

const prescriptionDryEyeDistractors={
  "common-eye-066": [
    "Choose solely by the highest concentration",
    "Assume every prescription product has the same mechanism",
    "Escalate without reviewing technique or adherence"
  ],
  "common-eye-067": [
    "Judge treatment only by bottle size",
    "Exclude eyelid disease from evaluation",
    "Assume every persistent symptom means the dose is too low"
  ],
  "common-eye-068": [
    "Recognizing that several mechanisms can coexist",
    "Checking technique before declaring treatment failure",
    "Setting a product-specific response plan"
  ],
  "common-eye-070": [
    "Save an opened single-use container for tomorrow",
    "Use the medicine only when the eyes look red",
    "Ignore a serious allergic reaction because irritation can occur"
  ],
  "common-eye-071": [
    "Ignore all taste symptoms and instillation effects",
    "Assess only the color of the container",
    "Assume persistent symptoms never require follow-up"
  ],
  "common-eye-072": [
    "Explaining expected effects before treatment",
    "Teaching immediate disposal after dosing",
    "Discussing how to obtain follow-up for troublesome effects"
  ],
  "common-eye-074": [
    "Use identical preparation instructions for every concentration",
    "Transfer different products into one bottle",
    "Apply single-use disposal instructions to every multidose bottle"
  ],
  "common-eye-075": [
    "Review only the brand name without confirming dosage form",
    "Assume a stronger concentration guarantees a better outcome",
    "Ignore contact-lens instructions when the drug is familiar"
  ],
  "common-eye-076": [
    "Verifying the actual dispensed formulation",
    "Checking instructions when switching products",
    "Reviewing storage for a newly prescribed product"
  ]
};
for (const [id, alternatives] of Object.entries(prescriptionDryEyeDistractors)) {
  const question = commonEyeConditionsQuestionBank.find(item => item.id === id);
  if (!question) throw new Error(`Missing question ${id}`);
  question.choices = [question.choices[question.answer], ...alternatives];
  question.answer = 0;
}

Object.assign(commonEyeConditionsQuestionBank.find(question => question.id === "common-eye-069"), {
  question: "Which molecular interaction does lifitegrast inhibit?",
  choices: ["LFA-1 binding to ICAM-1", "Histamine binding to H1 receptors", "Bacterial DNA gyrase activity", "Carbonic anhydrase activity"],
  answer: 0,
  rationale: "Lifitegrast blocks LFA-1/ICAM-1 interaction. Its exact mechanism in dry-eye disease remains incompletely defined."
});

const inflammationInjuryDistractors={
  "common-eye-078": [
    "Use any leftover steroid for a red eye",
    "Continue indefinitely whenever redness improves",
    "Assume a topical route eliminates monitoring needs"
  ],
  "common-eye-079": [
    "Monitor only bottle volume",
    "Ignore intraocular pressure during prolonged exposure",
    "Assume absence of pain excludes complications"
  ],
  "common-eye-080": [
    "Following an examination-based prescribing plan",
    "Reviewing the stop or taper instructions",
    "Monitoring intraocular pressure as directed"
  ],
  "common-eye-082": [
    "Use them as routine cosmetic whitening treatment",
    "Extend treatment without reviewing corneal status",
    "Assume all products have identical indications and schedules"
  ],
  "common-eye-083": [
    "Evaluate only the brand of the bottle",
    "Ignore an epithelial defect when pain improves",
    "Assume topical therapy cannot affect healing"
  ],
  "common-eye-084": [
    "Confirming the surgical indication",
    "Reviewing corneal integrity",
    "Following the prescribed duration"
  ],
  "common-eye-086": [
    "Continue despite new pain or visual loss",
    "Use whitening as proof that the underlying cause is resolved",
    "Increase use indefinitely when redness returns"
  ],
  "common-eye-087": [
    "Judge safety only by how white the eye becomes",
    "Ignore other eye products",
    "Assume redness without discharge is always harmless"
  ],
  "common-eye-088": [
    "Checking for pain and visual change before self-care",
    "Reviewing labeled stop rules",
    "Reassessing persistent redness"
  ],
  "common-eye-089": [
    "Only eye drops can cause ocular adverse effects",
    "All medication-related visual symptoms affect the same structure",
    "Every medication-related ocular effect is reversible"
  ],
  "common-eye-090": [
    "Stop every medicine without assessing its purpose",
    "Ignore sudden visual change until a routine refill",
    "Treat all ocular drug effects with the same redness drop"
  ],
  "common-eye-091": [
    "Review only medicines applied directly to the eye",
    "Ignore dose and duration",
    "Assume symptom timing alone proves causality"
  ],
  "common-eye-092": [
    "Coordinating urgent evaluation and a medication review",
    "Considering the clinical importance of the suspected drug",
    "Distinguishing reversible effects from permanent injury risk"
  ]
};
for (const [id, alternatives] of Object.entries(inflammationInjuryDistractors)) {
  const question = commonEyeConditionsQuestionBank.find(item => item.id === id);
  if (!question) throw new Error(`Missing question ${id}`);
  question.choices = [question.choices[question.answer], ...alternatives];
  question.answer = 0;
}

// Administration and sterility review: alternatives must not be other valid care instructions.
const administrationSterilityDistractors = {
  "common-eye-098": [
    "Skip formulation preparation if the bottle was used yesterday",
    "Touch the dropper to the lower lid to stabilize it",
    "Add extra drops whenever the first dose is not felt"
  ],
  "common-eye-099": [
    "Check only whether the patient can name the brand",
    "Infer correct delivery from timely refill requests alone",
    "Judge technique solely by whether instillation stings"
  ],
  "common-eye-100": [
    "Checking the prescribed number of drops",
    "Demonstrating delivery without bottle-tip contact",
    "Checking whether the formulation needs preparation"
  ],
  "common-eye-102": [
    "Squeeze the eyelids tightly after instillation",
    "Blink rapidly to spread the dose into the drainage system",
    "Press directly on the center of the eyeball"
  ],
  "common-eye-103": [
    "Use the reported taste of the medicine as the only technique check",
    "Infer correct occlusion from symptom improvement alone",
    "Check bottle volume without watching the maneuver"
  ],
  "common-eye-104": [
    "Closing the eyelids gently",
    "Applying light pressure at the inner corner as instructed",
    "Avoiding pressure on the eyeball"
  ],
  "common-eye-106": [
    "Use a fixed five-minute interval even when a label requires longer",
    "Instill the ointment immediately before every thinner drop",
    "Combine the medicines in one bottle to simplify dosing"
  ],
  "common-eye-107": [
    "Use viscosity alone to determine every interval",
    "Use the same schedule for all eye-drop brands",
    "Count bottles without checking ingredients or directions"
  ],
  "common-eye-108": [
    "Checking both products for spacing instructions",
    "Putting ointment after drops when directed",
    "Writing separate instructions for each eye"
  ],
  "common-eye-110": [
    "Rinse the dropper tip with tap water before recapping",
    "Keep a single-use vial for later because fluid remains",
    "Allow tip contact when the surface appears clean"
  ],
  "common-eye-111": [
    "Use solution clarity as the sole sterility check",
    "Assume every sealed bottle is free from recall concerns",
    "Ignore storage once the product has been dispensed"
  ],
  "common-eye-112": [
    "Checking the lot number against a recall notice",
    "Keeping the tip away from the eye and hands",
    "Following the labeled single-use disposal instructions"
  ],
  "common-eye-114": [
    "Apply one universal reinsertion interval to all medicines",
    "Continue lens wear during an eye infection if drops relieve redness",
    "Treat all artificial tears as approved lens-rewetting products"
  ],
  "common-eye-115": [
    "Check only whether the lens is disposable",
    "Ignore the eye condition if the reinsertion interval has elapsed",
    "Infer lens compatibility solely from preservative-free labeling"
  ],
  "common-eye-116": [
    "Checking the exact product and ocular diagnosis",
    "Following a clinician-directed period without lenses",
    "Reviewing lens cleaning and replacement instructions"
  ],
  "common-eye-118": [
    "Stop every preserved prescription without considering disease control",
    "Add a second preserved drop solely to dilute the first",
    "Assume a preservative-free formulation eliminates all irritation"
  ],
  "common-eye-119": [
    "Evaluate only the most recently added bottle",
    "Exclude OTC drops from the exposure history",
    "Infer preservative content from brand recognition alone"
  ],
  "common-eye-120": [
    "Checking whether a multidose product is preservative-free",
    "Reviewing storage and disposal directions",
    "Considering a preservative-free alternative for intolerance"
  ]
};
for (const [id, alternatives] of Object.entries(administrationSterilityDistractors)) {
  const question = commonEyeConditionsQuestionBank.find(item => item.id === id);
  if (!question) throw new Error(`Missing question ${id}`);
  question.choices = [question.choices[question.answer], ...alternatives];
  question.answer = 0;
}

Object.assign(commonEyeConditionsQuestionBank.find(item => item.id === "common-eye-106"), {
  question: "A patient uses Restasis MultiDose and lubricant drops. Which instruction follows the Restasis label?",
  choices: ["Separate these products by 15 minutes", "Use both immediately together", "Separate them by only 5 minutes", "Mix them in the Restasis bottle"],
  answer: 0,
  rationale: "Restasis specifies a 15-minute interval with lubricant drops. A general spacing rule must yield to the product instructions."
});
const preservativeRationales = {
  "common-eye-117": "Preservative exposure can contribute to surface irritation; assess the patient's symptoms and total drop burden rather than assuming every preserved product is intolerable.",
  "common-eye-118": "An alternative formulation may reduce preservative exposure while maintaining needed therapy. Selection still requires review of the indication, access and handling instructions.",
  "common-eye-119": "Multiple prescribed and OTC products contribute to exposure. A complete inventory helps distinguish formulation intolerance from other causes of symptoms."
};
for (const [id, rationale] of Object.entries(preservativeRationales)) {
  commonEyeConditionsQuestionBank.find(item => item.id === id).rationale = rationale;
}

const specialPopulationDistractors = {
  "common-eye-122": [
    "Borrow an adult family member\u2019s drops to avoid an examination",
    "Treat all neonatal discharge as routine self-limited pink eye",
    "Select a product without checking its pediatric labeling"
  ],
  "common-eye-123": [
    "Assess discharge color alone",
    "Assume an infant has normal vision because pain is not reported",
    "Use an adult dosing schedule as the only age-related assessment"
  ],
  "common-eye-124": [
    "Checking age-specific product instructions",
    "Arranging evaluation when the eye cannot be adequately examined",
    "Reviewing caregiver administration technique"
  ],
  "common-eye-126": [
    "Assume topical dosing guarantees no fetal or infant exposure",
    "Stop necessary treatment solely because pregnancy is reported",
    "Use occlusion as a substitute for reviewing the drug\u2019s evidence"
  ],
  "common-eye-127": [
    "Classify safety solely from the small bottle size",
    "Apply the oral dose\u2019s risk estimate without considering ocular exposure",
    "Use one pregnancy rule for every ophthalmic ingredient"
  ],
  "common-eye-128": [
    "Checking product-specific lactation information",
    "Balancing untreated disease against treatment risk",
    "Reviewing whether the administration technique can reduce drainage"
  ],
  "common-eye-130": [
    "Recommend repeated OTC courses without a review date",
    "Use absence of discharge as the sole follow-up criterion",
    "Wait until the bottle is empty despite new visual loss"
  ],
  "common-eye-131": [
    "Check only whether any medication remains",
    "Use refill regularity as proof that symptoms resolved",
    "Ignore new pain if the original diagnosis was allergy"
  ],
  "common-eye-132": [
    "Providing a specific reassessment deadline",
    "Explaining which symptoms require urgent care",
    "Checking whether the patient can access the planned follow-up"
  ]
};
for (const [id, alternatives] of Object.entries(specialPopulationDistractors)) {
  const question = commonEyeConditionsQuestionBank.find(item => item.id === id);
  if (!question) throw new Error(`Missing question ${id}`);
  question.choices = [question.choices[question.answer], ...alternatives];
  question.answer = 0;
}

const hydroxychloroquineRevisions = {
  "common-eye-094": {
    question: "Which tests are primary for hydroxychloroquine screening under the AAO 2025 revision?",
    choices: ["OCT and wide-pattern FAF", "Visual acuity alone", "Color vision alone", "Amsler grid alone"],
    answer: 0,
    rationale: "Structural screening precedes symptomatic loss; visual fields or multifocal electroretinography can confirm abnormalities."
  },
  "common-eye-095": {
    question: "Which factor raises hydroxychloroquine retinal toxicity risk beyond dose and duration?",
    choices: ["Concurrent renal disease", "Seasonal pollen exposure", "Correct bottle-tip handling", "Occasional artificial-tear use"],
    answer: 0,
    rationale: "Risk assessment determines screening timing; deferral is not appropriate for every patient."
  },
  "common-eye-096": {
    question: "Which statement about hydroxychloroquine surveillance needs correction?",
    choices: ["Normal visual acuity excludes early toxicity", "Screening should examine both parafoveal and pericentral regions", "Baseline testing supports later comparison", "Screening can detect injury before symptoms"],
    answer: 0,
    rationale: "A routine acuity result cannot replace retinal screening."
  }
};
for (const [id, revision] of Object.entries(hydroxychloroquineRevisions)) {
  const question = commonEyeConditionsQuestionBank.find(item => item.id === id);
  if (!question) throw new Error(`Missing question ${id}`);
  Object.assign(question, revision);
}

commonEyeConditionsQuestionBank.push(...[
  {
    "id": "common-eye-topiramate-urgency",
    "question": "A patient develops eye pain and sudden blur ten days after starting topiramate. What is the priority?",
    "choices": [
      "Immediate eye assessment and prescriber coordination for suspected drug-related angle closure",
      "Wait until the next routine refill",
      "Use redness drops to test whether the problem resolves",
      "Exclude a drug reaction because the patient is young"
    ],
    "rationale": "This presentation can be time-sensitive. Rapid clinician-directed withdrawal and ophthalmic treatment may be needed.",
    "lesson": "redness-medication-injury",
    "answer": 0,
    "reviewHref": "#redness-medication-injury"
  },
  {
    "id": "common-eye-vigabatrin-after-stopping",
    "question": "Vigabatrin has been discontinued. Which follow-up remains recommended by the label?",
    "choices": [
      "Vision assessment about three to six months after stopping",
      "No further testing if the patient reports normal vision",
      "Testing only if reading vision becomes poor",
      "A routine check ten years later"
    ],
    "rationale": "Stopping treatment does not immediately end concern about progression.",
    "lesson": "redness-medication-injury",
    "answer": 0,
    "reviewHref": "#redness-medication-injury"
  },
  {
    "id": "common-eye-tamsulosin-history",
    "question": "Before cataract surgery, a patient says tamsulosin was stopped six months ago. What should the pharmacist advise?",
    "choices": [
      "Tell the ophthalmic surgeon about that prior exposure",
      "Omit it because it is no longer an active prescription",
      "Restart it to prevent iris complications",
      "Assume a past drug holiday eliminated the surgical risk"
    ],
    "rationale": "Past exposure still matters for surgical planning.",
    "lesson": "redness-medication-injury",
    "answer": 0,
    "reviewHref": "#redness-medication-injury"
  }
]);

commonEyeConditionsQuestionBank.push(...[
  {
    "id": "common-eye-amiodarone-deposits",
    "question": "An ophthalmologist documents asymptomatic corneal microdeposits in a patient taking amiodarone. Do deposits alone require stopping it?",
    "choices": [
      "No; continue the coordinated monitoring plan unless other findings warrant a change",
      "Yes; every deposit proves optic nerve damage",
      "Yes; all deposits inevitably cause blindness",
      "No; further eye examinations are unnecessary"
    ],
    "rationale": "Corneal deposits and optic neuropathy are different findings. New visual impairment still requires prompt evaluation.",
    "lesson": "redness-medication-injury",
    "answer": 0,
    "reviewHref": "#redness-medication-injury"
  },
  {
    "id": "common-eye-ethambutol-monitoring",
    "question": "A patient starting ethambutol has normal baseline vision. Which plan follows ATS/CDC/IDSA ocular monitoring guidance?",
    "choices": [
      "Monthly symptom inquiry and color-discrimination testing, with acuity follow-up as indicated",
      "No testing until reading vision becomes poor",
      "Color testing only after treatment ends",
      "Use both eyes together as the only acuity assessment"
    ],
    "rationale": "Normal baseline findings do not remove the need for surveillance. The label separately specifies monthly acuity testing above 15 mg/kg/day.",
    "lesson": "redness-medication-injury",
    "answer": 0,
    "reviewHref": "#redness-medication-injury"
  },
  {
    "id": "common-eye-linezolid-early-symptoms",
    "question": "A patient reports new blur after twelve days of linezolid. What is appropriate?",
    "choices": [
      "Arrange prompt ophthalmic evaluation and notify the treating team",
      "Wait until day 28 before considering a drug effect",
      "Wait until three months before any eye evaluation",
      "Assume short treatment excludes ocular adverse effects"
    ],
    "rationale": "New symptoms require evaluation at any duration; the long-course monitoring threshold is not a waiting period.",
    "lesson": "redness-medication-injury",
    "answer": 0,
    "reviewHref": "#redness-medication-injury"
  }
]);

commonEyeConditionsQuestionBank.push(...[
  {
    "id": "common-eye-sildenafil-vision-loss",
    "question": "A patient reports sudden vision loss in one eye after sildenafil. What is the appropriate response?",
    "choices": [
      "Stop PDE5 inhibitors and seek immediate medical attention",
      "Wait for the color tint to fade",
      "Use lubricant drops and repeat sildenafil",
      "Reassure because causation has not been proven"
    ],
    "rationale": "Uncertain drug causation does not reduce the urgency of sudden visual loss.",
    "lesson": "redness-medication-injury",
    "answer": 0,
    "reviewHref": "#redness-medication-injury"
  },
  {
    "id": "common-eye-isotretinoin-night-vision",
    "question": "A patient taking isotretinoin suddenly cannot see well when driving at night. What should counseling emphasize?",
    "choices": [
      "Stop treatment, contact the prescriber and obtain an eye examination; avoid unsafe night driving",
      "Continue driving until the next routine visit",
      "Assume the problem will always reverse immediately",
      "Use a contact-lens rewetting drop as the only response"
    ],
    "rationale": "Night-vision impairment can persist; a new functional deficit needs assessment.",
    "lesson": "redness-medication-injury",
    "answer": 0,
    "reviewHref": "#redness-medication-injury"
  },
  {
    "id": "common-eye-voriconazole-monitoring",
    "question": "Voriconazole treatment is continuing beyond four weeks. Which monitoring is specified in its ocular warning?",
    "choices": [
      "Visual acuity, visual field and color perception",
      "Only bottle expiration",
      "Only intraocular pressure",
      "No visual monitoring unless six months have elapsed"
    ],
    "rationale": "The label sets a threshold beyond 28 days for visual-function monitoring.",
    "lesson": "redness-medication-injury",
    "answer": 0,
    "reviewHref": "#redness-medication-injury"
  },
  {
    "id": "common-eye-digoxin-visual-toxicity",
    "question": "A patient taking digoxin develops nausea and yellow-green vision. A level is 1.7 ng/mL. Which interpretation is safest?",
    "choices": [
      "Toxicity remains possible and requires prompt clinical assessment",
      "A value below 2 ng/mL excludes toxicity",
      "The symptoms establish an isolated eye infection",
      "A redness drop is sufficient management"
    ],
    "rationale": "Interpret the concentration with symptoms, sampling context, renal function, electrolytes and cardiac findings.",
    "lesson": "redness-medication-injury",
    "answer": 0,
    "reviewHref": "#redness-medication-injury"
  }
]);

commonEyeConditionsQuestionBank.push(...[
  {
    "id": "common-eye-tobradex-st-lenses",
    "question": "A patient plans to reinsert contact lenses fifteen minutes after TobraDex ST. What should counseling clarify?",
    "choices": [
      "Contact lenses should not be worn during treatment with this product",
      "Fifteen minutes is appropriate for every eye drop",
      "ST has no steroid, so lens timing does not matter",
      "Lenses improve retention of the dose"
    ],
    "rationale": "The product-specific no-lens instruction takes precedence over a general reinsertion interval.",
    "lesson": "inflammation-steroid-boundaries",
    "answer": 0,
    "reviewHref": "#inflammation-steroid-boundaries"
  },
  {
    "id": "common-eye-preservative-free-burning",
    "question": "A preservative-free eye medicine stings after instillation. Which statement is correct?",
    "choices": [
      "Preservative-free medicines can still cause discomfort; assess the product, symptoms and ocular surface",
      "Stinging proves the product contains an undeclared preservative",
      "Every episode proves an infection",
      "Preservative-free labeling guarantees pain-free administration"
    ],
    "rationale": "Removing a preservative removes one potential irritant, not every possible cause of symptoms. New or concerning symptoms need evaluation.",
    "lesson": "sterility-lenses-preservatives",
    "answer": 0,
    "reviewHref": "#sterility-lenses-preservatives"
  }
]);

commonEyeConditionsQuestionBank.push(...[
  {
    "id": "common-eye-neomycin-sensitization",
    "question": "During neomycin-containing ophthalmic ointment treatment, itching and lid swelling increase and healing stalls. What should be considered?",
    "choices": [
      "Drug sensitization requiring discontinuation and clinical review",
      "Proof that a larger dose is needed",
      "An expected sign that bacteria are dying",
      "A reason to add borrowed steroid drops"
    ],
    "rationale": "Allergic sensitization can resemble worsening infection or failure to heal; escalation without reassessment can worsen the problem.",
    "lesson": "infectious-conjunctivitis",
    "answer": 0,
    "reviewHref": "#infectious-conjunctivitis"
  },
  {
    "id": "common-eye-sulfacetamide-coverage",
    "question": "Does sulfacetamide ophthalmic solution provide adequate Pseudomonas coverage for a painful red eye in a contact-lens wearer?",
    "choices": [
      "No; prompt eye evaluation and appropriate clinician-directed therapy are needed",
      "Yes; every ophthalmic antibiotic covers Pseudomonas",
      "Yes; the 10% concentration guarantees coverage",
      "No evaluation is needed if discharge is absent"
    ],
    "rationale": "The label identifies this coverage gap. Contact-lens-associated pain also raises concern for corneal infection.",
    "lesson": "infectious-conjunctivitis",
    "answer": 0,
    "reviewHref": "#infectious-conjunctivitis"
  },
  {
    "id": "common-eye-tobramycin-formulation",
    "question": "A patient is dispensed plain tobramycin 0.3% solution. Which statement correctly distinguishes it from TobraDex ST?",
    "choices": [
      "Plain tobramycin has no dexamethasone component",
      "Both contain the same steroid concentration",
      "Plain tobramycin is a steroid without an antibiotic",
      "The two labels can be used interchangeably"
    ],
    "rationale": "Confirming every active ingredient prevents importing steroid-combination dosing and assumptions into plain antibiotic counseling.",
    "lesson": "infectious-conjunctivitis",
    "answer": 0,
    "reviewHref": "#infectious-conjunctivitis"
  }
]);

commonEyeConditionsQuestionBank.push({
  "id": "common-eye-chloroquine-surveillance",
  "question": "A patient stops chloroquine because retinal toxicity is suspected. Which follow-up statement is correct?",
  "choices": [
    "Continue ophthalmic surveillance because retinal injury may progress after withdrawal",
    "Stopping guarantees immediate retinal recovery",
    "Normal central acuity makes further testing unnecessary",
    "Switching to hydroxychloroquine automatically eliminates retinal risk"
  ],
  "rationale": "Chloroquine-related retinal injury may be irreversible and continue after cessation. Withdrawal does not replace ophthalmic follow-up.",
  "lesson": "redness-medication-injury",
  "answer": 0,
  "reviewHref": "#redness-medication-injury"
});

commonEyeConditionsQuestionBank.push(...[
  {
    "id": "common-eye-ketorolac-formulations",
    "question": "Which ketorolac regimen matches the named product label?",
    "choices": [
      "Acular LS 0.4%: one drop four times daily as needed for up to four days after corneal refractive surgery",
      "Acuvail 0.45%: save an opened vial for the next day",
      "Acular 0.5%: begin its cataract regimen one week before surgery",
      "All three formulations: use the same twice-daily schedule"
    ],
    "rationale": "Indication, concentration and formulation determine the schedule. Acular LS has a short refractive-surgery course.",
    "lesson": "inflammation-steroid-boundaries",
    "answer": 0,
    "reviewHref": "#inflammation-steroid-boundaries"
  },
  {
    "id": "common-eye-ketorolac-corneal-injury",
    "question": "An eye examination finds corneal epithelial breakdown during topical ketorolac treatment. What is appropriate?",
    "choices": [
      "Stop the topical NSAID and arrange close ophthalmic monitoring",
      "Continue until the bottle is empty",
      "Add a topical steroid without review",
      "Double the dose to speed epithelial repair"
    ],
    "rationale": "Label warnings require immediate discontinuation with corneal epithelial breakdown; continued exposure may cause sight-threatening injury.",
    "lesson": "inflammation-steroid-boundaries",
    "answer": 0,
    "reviewHref": "#inflammation-steroid-boundaries"
  }
]);

commonEyeConditionsQuestionBank.push({
  "id": "common-eye-nepafenac-schedule",
  "question": "Which statement correctly compares the labeled cataract-surgery schedules for Ilevro and Nevanac?",
  "choices": [
    "Ilevro 0.3% is once daily with an additional preoperative drop; Nevanac 0.1% is three times daily",
    "Both products are once daily without any preoperative dosing",
    "Nevanac is once daily and Ilevro is three times daily",
    "Either strength may be substituted using the same instructions"
  ],
  "rationale": "Check the named strength and schedule: both courses begin one day before surgery, but Ilevro specifies an additional drop 30-120 minutes before surgery.",
  "answer": 0,
  "lesson": "inflammation-steroid-boundaries",
  "reviewHref": "#inflammation-steroid-boundaries"
});

commonEyeConditionsQuestionBank.push({
  "id": "common-eye-pred-mild-monitoring",
  "question": "A patient using Pred Mild for twelve days believes its lower concentration removes the need for pressure checks. Which response is correct?",
  "choices": [
    "Its label still requires routine intraocular pressure monitoring at ten days or longer",
    "Pressure monitoring applies only to Pred Forte",
    "A 0.12% steroid cannot increase intraocular pressure",
    "Absence of pain proves pressure is normal"
  ],
  "rationale": "Lower concentration does not remove ocular steroid risks. Pred Mild and Pred Forte both carry the ten-day pressure-monitoring instruction.",
  "answer": 0,
  "lesson": "inflammation-steroid-boundaries",
  "reviewHref": "#inflammation-steroid-boundaries"
});

commonEyeConditionsQuestionBank.push({
  "id": "common-eye-maxidex-ingredients",
  "question": "Which statement correctly identifies Maxidex 0.1% ophthalmic suspension?",
  "choices": [
    "It contains dexamethasone without an antibiotic",
    "It contains the same antibiotic combination as Maxitrol",
    "It is the intravitreal Ozurdex implant",
    "It is a preservative-free artificial tear"
  ],
  "rationale": "Confirm every active ingredient and dosage form. Similar ophthalmic names do not establish equivalent ingredients, routes or indications.",
  "answer": 0,
  "lesson": "inflammation-steroid-boundaries",
  "reviewHref": "#inflammation-steroid-boundaries"
});

commonEyeConditionsQuestionBank.push({
  "id": "common-eye-fluorometholone-pressure",
  "question": "Does a slower average pressure response to fluorometholone remove the need for intraocular pressure monitoring?",
  "choices": [
    "No; clinically significant increases can occur early, and monitoring remains necessary",
    "Yes; fluorometholone cannot cause glaucoma",
    "Yes; only dexamethasone requires pressure checks",
    "Yes; shaking the bottle prevents pressure elevation"
  ],
  "rationale": "Comparative average response time does not eliminate individual risk. The FML and Flarex labels describe early pressure rises in some patients.",
  "answer": 0,
  "lesson": "inflammation-steroid-boundaries",
  "reviewHref": "#inflammation-steroid-boundaries"
});

commonEyeConditionsQuestionBank.push({
  "id": "common-eye-alrex-lenses",
  "question": "A patient with a red eye asks to use Alrex to make contact-lens wear comfortable. What is appropriate?",
  "choices": [
    "Avoid lens wear while the eye is red and seek assessment; Alrex is not for contact-lens irritation",
    "Use Alrex with the lenses in place",
    "Wait ten minutes after Alrex, then wear lenses despite persistent redness",
    "Substitute Eysuvis directions because both contain loteprednol"
  ],
  "rationale": "The ten-minute lens interval does not override the no-lens instruction for a red eye or the limitation against treating lens-related irritation.",
  "answer": 0,
  "lesson": "inflammation-steroid-boundaries",
  "reviewHref": "#inflammation-steroid-boundaries"
});

commonEyeConditionsQuestionBank.push({
  "id": "common-eye-ointment-vision",
  "question": "After applying a prescribed ophthalmic ointment, a patient has temporary blurred vision and plans to drive immediately. What should the pharmacist advise?",
  "choices": [
    "Wait until vision is clear before driving; persistent or concerning change needs assessment",
    "Drive immediately because topical treatment cannot affect vision",
    "Rinse the eye with tap water after every dose",
    "Add extra ointment until the blur disappears"
  ],
  "answer": 0,
  "rationale": "Ophthalmic ointment can temporarily blur vision. The patient should avoid tasks requiring clear vision until it returns; persistent or concerning symptoms should not be dismissed.",
  "lesson": "ophthalmic-dosage-technique",
  "reviewHref": "#ophthalmic-dosage-technique"
});

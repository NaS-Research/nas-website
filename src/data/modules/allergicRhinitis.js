import { allergicRhinitisQuestionBank } from "@/data/questionBanks/allergicRhinitis";

export const allergicRhinitisModule = {
  slug: "allergic-rhinitis",
  number: "52",
  title: "Allergic Rhinitis",
  source: "Rhinitis 2020; ARIA-EAACI 2024-2025 guidance; AAO-HNSF 2024 immunotherapy guideline; current FDA labeling",
  description: "Distinguish rhinitis phenotypes, connect IgE biology to symptoms, select intranasal and systemic therapy by pattern and burden, teach effective device technique, and use allergen immunotherapy safely when avoidance and medicines are not enough.",
  topics: ["Phenotype and differential", "IgE and testing", "Exposure and technique", "Core therapy", "Targeted adjuncts", "Special populations", "Follow-up", "Immunotherapy"],
  outcomes: [
    "Differentiate allergic rhinitis from nonallergic, infectious, structural, medication-related, and urgent alternative diagnoses.",
    "Connect sensitization, mast-cell mediators, early and late responses, and allergen exposure to symptom timing and treatment targets.",
    "Use history, examination, specific IgE testing, and selective specialist procedures only when they change diagnosis or management.",
    "Select intranasal corticosteroid, intranasal antihistamine, fixed combination, oral antihistamine, or adjunct therapy by severity, preference, speed, safety, and cost.",
    "Demonstrate nasal spray and irrigation technique and reassess adherence, exposure, comorbidity, and diagnosis before escalation.",
    "Evaluate subcutaneous or sublingual allergen immunotherapy through confirmed sensitization, clinical relevance, contraindications, adherence, and anaphylaxis readiness.",
  ],
  submodules: [
    {
      slug: "phenotype-severity-and-differential", title: "Phenotype, Severity, and Differential", visual: "ar-phenotype",
      summary: "Rhinitis describes congestion, rhinorrhea, sneezing, itching, or postnasal symptoms. The same complaint can arise from IgE allergy, neural hyperreactivity, infection, medicines, anatomy, inflammation, or a dangerous alternate process.",
      concepts: ["Allergic pattern", "Intermittent and persistent burden", "Nonallergic rhinitis", "Structural disease", "Diagnostic red flags"],
      application: "Describe symptom pattern, triggers, timing, season, environment, ocular and lower-airway features, impact, medicines, examination, and red flags before assigning phenotype or treatment.",
      lesson: [
        { heading: "Recognize the allergic pattern", body: "Allergic rhinitis commonly produces sneezing, nasal itching, clear rhinorrhea, congestion, and ocular itching or tearing after relevant exposure. Seasonal and perennial labels describe exposure patterns, while intermittent or persistent and mild or moderate-to-severe categories better express frequency and impact." },
        { heading: "Separate frequency from functional impact", body: "The Rhinitis 2020 classification calls symptoms intermittent when they occur fewer than four days per week or for fewer than four consecutive weeks per year; persistent requires both at least four days per week and at least four consecutive weeks per year. Assess severity separately: mild symptoms do not disrupt sleep, usual activities, leisure, or work or school performance. Troublesome symptoms or impairment in any of these areas indicate moderate-to-severe disease. A seasonal exposure can therefore cause persistent, burdensome symptoms. These categories support assessment rather than replacing judgment: recurring symptoms below the frequency threshold can still warrant substantial treatment." },
        { heading: "Differentiate nonallergic phenotypes", body: "Temperature change, odors, smoke, eating, hormonal change, exercise, medications, or no clear trigger can produce nonallergic rhinitis. Prominent watery rhinorrhea without itching may favor a cholinergic phenotype. Mixed rhinitis is common, so one patient can have both IgE and nonallergic mechanisms." },
        { heading: "Look for infection and structure", body: "Purulent discharge alone does not prove bacterial sinusitis. Duration, severe onset, double worsening, facial pain, fever, smell loss, dental source, and examination matter. Septal deviation, turbinate hypertrophy, polyps, adenoids, foreign body, cerebrospinal fluid leak, and neoplasm require targeted evaluation rather than repeated allergy escalation." },
        { heading: "Treat red flags as a different pathway", body: "Unilateral persistent obstruction or bleeding, orbital signs, severe headache, neurologic findings, clear unilateral fluid after trauma, recurrent severe epistaxis, neck mass, or systemic illness warrants prompt focused assessment. Asthma symptoms, sleep disruption, otitis, and occupational exposure also change urgency and scope." },
      ],
      keyPoints: ["Pattern precedes product.", "Mixed rhinitis is common.", "Purulence alone is not bacterial disease.", "Unilateral red flags need another pathway."],
      check: { question: "Which feature most strongly supports allergic rather than vasomotor rhinitis?", choices: ["Nasal itching with sneezing after cat exposure", "Rhinorrhea triggered by cold air", "Watery drainage while eating", "Congestion after topical decongestant overuse"], answer: 0, rationale: "Itching, sneezing, and a reproducible relevant allergen exposure strongly support an IgE-mediated phenotype.", reviewHref: "#phenotype-severity-and-differential" },
    },
    {
      slug: "immunology-testing-and-comorbidity", title: "Immunology, Testing, and Comorbidity", visual: "ar-immunology",
      summary: "Sensitization becomes disease only when allergen-specific IgE and exposure align with symptoms. Testing confirms a clinically relevant hypothesis rather than replacing history.",
      concepts: ["Sensitization", "Early and late response", "Skin testing", "Serum specific IgE", "Asthma and conjunctivitis"],
      application: "Choose testing only when the result will identify avoidance, immunotherapy, occupational action, or diagnostic clarity, then interpret it against exposure and symptoms.",
      lesson: [
        { heading: "Follow the allergic cascade", body: "Allergen cross-links specific IgE on mast cells, releasing histamine and other mediators that cause rapid itching, sneezing, and rhinorrhea. Cytokines and recruited inflammatory cells support a later response with persistent congestion and hyperreactivity. Different treatments act at different points in this cascade." },
        {"heading": "Early and late responses overlap", "body": "The early response can begin within minutes; a later inflammatory response may emerge about four to eight hours after exposure. Congestion can occur in either phase, although it often predominates later. Eosinophils and other recruited cells contribute to persistent inflammation; histamine is not restricted to the early phase. Repeated exposure can lower the allergen threshold needed to provoke symptoms, a priming effect. These are mechanistic patterns, not a diagnostic stopwatch: symptom timing alone does not prove allergy."},
        { heading: "Define mast-cell activation precisely", body: "Degranulation releases stored mediators after mast-cell activation; additional mediators can be made after the trigger. Histamine is one of several mediators. IgE-dependent allergen recognition is an important allergic pathway, but other stimuli can also activate mast cells. Ordinary rhinitis symptoms alone do not establish mast-cell activation syndrome or a clonal mast-cell disorder." },
        { heading: "Separate sensitization from clinical allergy", body: "A positive skin test or serum specific IgE shows sensitization, not necessarily the cause of symptoms. Match allergen, exposure timing, geography, indoor environment, occupation, pets, season, and response. Broad panels increase irrelevant positives and confusion." },
        { heading: "Select the testing method", body: "Skin-prick testing is sensitive, provides immediate results, and supports allergen selection when medicines and skin condition permit. Serum specific IgE is useful when antihistamines cannot be stopped, skin disease is extensive, or testing risk or access favors blood testing. Total IgE and food panels do not routinely diagnose rhinitis." },
        { heading: "Check skin-test validity and medication preparation", body: "Skin testing requires appropriate positive and negative controls. A suppressed histamine response makes negative allergen results unreliable. Review antihistamines and other medicines with the testing clinic; washout varies by drug and protocol, so a universal 72-hour hold is not sufficient advice. Do not stop psychiatric or cardiovascular medicines independently. Serum specific IgE can be an alternative when medication withdrawal or skin testing is unsuitable. Even a positive histamine control does not replace medication review: a small cetirizine study found that control concentration and device could affect detection of suppression." },
        { heading: "Assess the united airway", body: "Allergic rhinitis frequently coexists with conjunctivitis and asthma and can impair sleep, school, work, and exercise. Ask about wheeze, cough, chest tightness, night symptoms, inhaler use, ocular symptoms, eczema, sinus disease, sleep-disordered breathing, and oral allergy syndrome." },
      ],
      keyPoints: ["Sensitization is not causation.", "Test a clinical hypothesis.", "Food panels do not diagnose routine rhinitis.", "Assess the whole airway."],
      check: { question: "What does a positive pollen-specific IgE result establish by itself?", choices: ["Sensitization that must be matched to exposure and symptoms", "Definite cause of every nasal symptom", "A need for food avoidance", "Bacterial sinusitis"], answer: 0, rationale: "Specific IgE demonstrates sensitization, while clinical relevance requires a matching history.", reviewHref: "#immunology-testing-and-comorbidity" },
    },
    {
      slug: "exposure-control-irrigation-and-technique", title: "Exposure Control, Irrigation, and Technique", visual: "ar-technique",
      summary: "Targeted exposure reduction and correct nasal delivery can change treatment more than adding another medication. Advice should be relevant, feasible, and verified.",
      concepts: ["Allergen-specific control", "Saline irrigation", "Spray positioning", "Adherence", "Trigger and environment plan"],
      application: "Identify the clinically relevant exposure, choose a realistic mitigation step, demonstrate product preparation and direction, observe return technique, and set a timed response measure.",
      lesson: [
        { heading: "Target the exposure that matters", body: "Use testing and history to prioritize interventions. Dust-mite encasements, humidity control, pest management, mold remediation, pet decisions, pollen timing, occupational controls, smoke avoidance, and ventilation vary in feasibility and evidence. Multicomponent plans are more credible than one symbolic measure." },
        {"heading": "Plan outdoor exposure with two different measures", "body": "Track local pollen counts when pollen matches the symptom history. On high-count days, reduce exposure when feasible, keep home and car windows closed, and shower after outdoor activity to remove pollen from hair and skin. Check the Air Quality Index separately: it reports regulated air pollutants, not a pollen count. Follow local health and activity advice, especially with coexisting asthma; a favorable AQI does not establish low allergen exposure."},
        {"heading": "Make the dust-mite plan practical", "body": "For clinically relevant dust-mite exposure, combine allergen-impermeable bedding covers with weekly laundering of sheets, pillowcases and blankets. Clean carpets weekly with a small-particle or HEPA-filter vacuum, wash washable rugs and mop hard floors. Consider reducing carpet and other dust reservoirs when feasible. Control indoor moisture and repair leaks; AAAAI advises relative humidity of 30–50%. Select measures the household can sustain and reassess symptoms rather than promising that one cover or cleaning session will eliminate allergy."},
        { heading: "Know the limits of air filtration", body: "A HEPA purifier can reduce airborne particles, but it does not efficiently remove allergens already settled on furniture, walls or floors. Match exposure measures to the relevant source and the patient's circumstances. An air filter alone is not proof that exposure has been eliminated or that symptoms are controlled." },
        {"heading": "Distinguish external pollen barriers from nasal moisturizers", "body": "NHS hay-fever advice includes petroleum jelly around the nostrils to trap pollen. This is an adjunct to exposure management, not proof that all allergens are blocked or a replacement for needed treatment. Do not translate “around” into repeated deep application inside the nose. Mayo Clinic cautions that prolonged intranasal petroleum use can rarely lead to aspiration and lipoid pneumonia; for nasal dryness it suggests saline spray or humidification, with a water-soluble lubricant if needed, used sparingly and away from bedtime. Check the actual product and patient circumstances rather than calling every nasal gel safe for all children or pregnancies."},
        { heading: "Use saline safely", body: "Saline irrigation can improve symptoms and reduce mucus or allergen burden. Use distilled or sterile water, or tap water brought to a rolling boil for one minute (three minutes above 6,500 feet) and then cooled. Clean and dry the device and prepare the correct saline concentration. Contaminated tap water and poor device hygiene create avoidable risk." },
        {"heading": "Demonstrate irrigation rather than only naming safe water", "body": "A moisturizing spray delivers a fine mist; an irrigation device flushes mucus and allergens. Follow the actual device’s saline-mixing and cleaning directions. Plain water can irritate the nose. For a gravity-fed neti pot, lean over a sink with the head tilted sideways and forehead and chin approximately level; breathe through an open mouth while solution enters the upper nostril and drains from the lower one. Clear the nose and repeat on the other side. Wash and dry hands, start with a clean, dry device, and wash and dry it after use. People with impaired immunity should consult their clinician first. Pediatric use needs an age-appropriate device and clinician guidance; young children may not tolerate irrigation."},
        { heading: "Recognize irrigation warning symptoms", body: "Seek medical attention immediately for headache, fever, confusion or vomiting after nasal rinsing. Safe drinking water is not automatically safe for nasal irrigation. Keep unused boiled water in a clean, sanitized container with a tight cover, and let it cool before use." },
        { heading: "Aim away from the septum", body: "Gently clear the nose and follow the dispensed product instructions for shaking, priming, head position and inhalation. Aim away from the septum and protect the eyes. Many steroid and antihistamine sprays use gentle inhalation; do not impose that instruction on every product. The reviewed ipratropium 0.03% instructions use a slightly forward head with the bottle upright, direct the tip back and outward, then specify a deep sniff with mouth exhalation and a brief backward head tilt after spraying. Observe a demonstration with the actual device." },
        { heading: "Prepare the actual pump and protect the eyes", body: "For the reviewed ipratropium 0.03% device, prime with seven sprays initially or after more than seven days without use; after a shorter lapse exceeding 24 hours, use two priming sprays. Direct priming away from the eyes and never enlarge the opening. If spray enters an eye, immediately flush with cool tap water for several minutes. Contact a doctor for acute eye pain or blurred vision, and for excessive nasal dryness or nasal bleeding. These pump instructions are specific to this product." },
        { heading: "Diagnose apparent treatment failure", body: "Verify that the product was obtained, used daily when required, primed, positioned, and continued long enough. Review taste, dryness, epistaxis, sedation, cost, fear, literacy, dexterity, and expectations. Reassess phenotype, exposure, anatomy, and asthma before escalating." },
      ],
      keyPoints: ["Control relevant exposures.", "Irrigation water must be safe.", "Aim laterally.", "Observe technique before escalation."],
      check: { question: "Which nasal spray instruction reduces septal irritation?", choices: ["Aim the nozzle laterally away from the septum", "Direct the spray toward the nasal septum", "Sniff as forcefully as possible", "Lie flat immediately"], answer: 0, rationale: "Lateral direction improves mucosal distribution and reduces direct septal trauma.", reviewHref: "#exposure-control-irrigation-and-technique" },
    },
    {
      "slug": "stepwise-pharmacotherapy",
      "title": "Stepwise Pharmacotherapy",
      "visual": "ar-therapy",
      "summary": "Intranasal therapy provides the strongest overall nasal control. Selection balances burden, symptom domain, onset, adherence, adverse effects, age, pregnancy, access, and preference.",
      "concepts": [
        "Intranasal corticosteroid",
        "Intranasal antihistamine",
        "Fixed combination",
        "Oral antihistamine",
        "Adjuncts and limits"
      ],
      "application": "Select the least burdensome regimen likely to control the patient's dominant symptoms, teach onset and technique, define a response interval, and escalate by evidence rather than by stacking every available class.",
      "lesson": [
        {
          "heading": "Use intranasal corticosteroids as a foundation",
          "body": "Intranasal corticosteroids provide broad control of congestion, rhinorrhea, sneezing, and itching and are preferred over oral antihistamines for persistent or more burdensome disease. Benefit improves with consistent use and correct technique. Local dryness and epistaxis are reduced by lateral aim and dose adjustment."
        },
        {
          "heading": "Use intranasal antihistamines for speed and breadth",
          "body": "Intranasal antihistamines act quickly and can help allergic and nonallergic rhinitis. Bitter taste and local irritation affect adherence. Choose intranasal or oral second-generation antihistamine according to symptom pattern, desired onset, acceptance, cost, and adverse effects."
        },
        {
          "heading": "Escalate to a fixed nasal combination",
          "body": "ARIA-EAACI 2024-2025 conditionally favors a fixed intranasal antihistamine plus corticosteroid over either class alone. Compared with a steroid alone, its synthesis found similar average symptom improvement; faster onset and satisfaction also support the choice. Consider severity, prior response, access, taste and preference. Confirm implementation before escalating and follow product-specific age labeling."
        },
        {
          "heading": "Use oral antihistamines selectively",
          "body": "Second-generation oral antihistamines can help itching, sneezing, rhinorrhea, and associated eye symptoms and are safer than first-generation agents. They are usually less effective than an intranasal corticosteroid for congestion and persistent disease. Renal function, sedation, occupation, age, and concurrent depressants can change selection."
        }
      ],
      "keyPoints": [
        "Match treatment to symptoms and burden.",
        "Check implementation before escalation.",
        "Combination selection is conditional.",
        "Follow product-specific age labeling."
      ],
      "check": {
        "question": "Which regimen has the strongest evidence-based role after adequate intranasal corticosteroid monotherapy remains insufficient?",
        "choices": [
          "A fixed intranasal antihistamine plus corticosteroid",
          "Routine oral prednisone",
          "Long-term oxymetazoline",
          "Two first-generation oral antihistamines"
        ],
        "answer": 0,
        "rationale": "A fixed nasal antihistamine-steroid combination is a guideline-supported option after inadequate monotherapy. Selection remains conditional on safety, preference and access; greater symptom relief is not guaranteed for every patient.",
        "reviewHref": "#stepwise-pharmacotherapy"
      }
    },
    {
      "slug": "otc-nasal-steroid-products",
      "visual": "ar-otc-steroids",
      "title": "OTC Nasal Steroid Products",
      "summary": "Compare the actual formulation, age band, dose and follow-up instructions before recommending an OTC nasal steroid.",
      "concepts": [
        "Budesonide",
        "Fluticasone formulations",
        "Triamcinolone",
        "Mometasone",
        "Age and reassessment"
      ],
      "application": "Select an age-appropriate product, calculate its daily dose across both nostrils, and explain when self-care must stop.",
      "lesson": [
        {"heading": "Use comparative guidance without overstating certainty", "body": "For adults, ARIA-EAACI 2024-2025 conditionally favors fluticasone furoate or propionate over several other nasal steroids, with low or very low certainty for most comparisons. This is not proof that every patient will respond better. Cost, availability, tolerability and correct use still matter. Evidence was insufficient to prefer a particular nasal steroid in children or adolescents; use the specific product’s age and dose instructions."},
        {
          "heading": "Rhinocort Allergy: count both nostrils",
          "body": "The 32 mcg budesonide spray starts at two sprays per nostril once daily from age 12: four sprays deliver 128 mcg daily. Reduce to one per nostril daily after improvement. Ages 6-11 start with one per nostril daily; follow the pediatric directions described in the safety lesson. Full benefit can take two weeks; stop and consult a doctor if there is no improvement then. Vision changes or severe/frequent bleeding also require stopping and medical advice."
        },
        {
          "heading": "Flonase Allergy Relief: propionate formulation",
          "body": "Flonase Allergy Relief delivers fluticasone propionate 50 mcg per spray. Ages 12 and older use two sprays per nostril once daily for week one, then one or two per nostril once daily through six months according to symptoms; consult a doctor before continuing daily use beyond six months. Ages 4-11 use one spray per nostril once daily under adult supervision; do not use below age 4. Discuss use exceeding two months per year in children with their doctor and use for the shortest time needed."
        },
        {
          "heading": "Flonase Sensimist: furoate formulation",
          "body": "Sensimist contains fluticasone furoate 27.5 mcg per spray. Its age-12-and-older spray schedule matches Flonase Allergy Relief, but its pediatric nasal-symptom directions begin at age 2: one spray per nostril once daily for ages 2-11, with adult supervision and clinician consultation for use exceeding two months a year. Do not use below age 2. Its itchy/watery-eye indication applies from age 12. At two sprays per nostril, four Sensimist sprays deliver 110 mcg; four Flonase Allergy Relief sprays deliver 200 mcg. These are different compounds and strengths, not a dose-conversion ratio."
        },
        {
          "heading": "Fluticasone OTC follow-up and precautions",
          "body": "Both reviewed OTC labels direct stopping and consulting a doctor if symptoms do not improve within seven days, or for severe facial pain, thick discharge, persistent nasal whistling, vision changes or severe/frequent bleeding. An allergic reaction needs prompt medical help. Avoid use with unhealed nasal injury or surgery. Review glaucoma/cataracts, ritonavir or other HIV medicines, oral ketoconazole and other steroids before use. These nasal products do not treat asthma. Follow the actual device guide: Allergy Relief specifies gentle shaking, whereas Sensimist specifies vigorous shaking and gentle sniffing."
        },
        {
          "heading": "Nasacort Allergy 24HR: three age bands",
          "body": "Triamcinolone acetonide is 55 mcg per spray. Ages 12 and older start with two sprays per nostril once daily, reducing to one after improvement. Ages 6-11 start with one per nostril daily; if symptoms do not improve, the label permits two, reducing again after improvement. Ages 2-5 use only one per nostril daily; do not transfer the older-child increase. Do not use below age 2. Adults supervise children and consult their doctor for use beyond two months per year. Stop and seek advice after one week without improvement, or for vision changes, severe/frequent bleeding or infection symptoms. Review recent nasal injury/surgery, other steroids, glaucoma/cataracts and eye infection."
        },
        {
          "heading": "Nasonex 24HR Allergy: a different mometasone regimen",
          "body": "The OTC mometasone furoate spray delivers 50 mcg per spray. Ages 12 and older use two sprays per nostril once daily (200 mcg/day); ages 2-11 use one per nostril once daily (100 mcg/day) with adult supervision. Do not use below age 2 or for asthma. Discuss pediatric use beyond two months per year. Stop and consult a doctor for no improvement within seven days, severe facial pain/thick discharge, persistent nasal whistling, vision changes or severe/frequent bleeding. Avoid use before nasal injury or surgery has healed; review eye conditions, other steroids, HIV medicines such as ritonavir and oral ketoconazole. Do not substitute this dose for a mometasone combination or implant."
        }
      ],
      "keyPoints": [
        "Strength and age limits vary by product.",
        "Count both nostrils.",
        "Use the product-specific reassessment interval."
      ],
      "check": {
        "question": "A parent has Flonase Allergy Relief and Sensimist for a 3-year-old. Which product has labeled nasal-symptom directions at this age?",
        "choices": [
          "Flonase Allergy Relief only",
          "Sensimist only",
          "Both products",
          "Neither product"
        ],
        "answer": 1,
        "rationale": "Sensimist includes ages 2-11; Flonase Allergy Relief begins at age 4. Their fluticasone compounds and strengths also differ.",
        "reviewHref": "#otc-nasal-steroid-products"
      }
    },
    {
      "slug": "prescription-nasal-steroid-devices",
      "visual": "ar-prescription-steroids",
      "title": "Prescription Nasal Steroid Devices",
      "summary": "Prescription nasal steroids differ in indication, delivery system, strength and age eligibility.",
      "concepts": [
        "Ciclesonide devices",
        "Qnasl strengths",
        "Exhalation delivery",
        "Product preparation"
      ],
      "application": "Check diagnosis and age before selecting the strength, dose and device instructions.",
      "lesson": [
        {
          "heading": "Distinguish the two ciclesonide nasal devices",
          "body": "Omnaris is a 50 mcg aqueous spray: seasonal allergic rhinitis is labeled from age 6, but perennial allergic rhinitis from age 12. Both use two sprays per nostril once daily, totaling 200 mcg/day. Gently shake; prime eight times initially and, after four consecutive unused days, once or until a fine mist appears. Zetonna is a 37 mcg aerosol for either pattern from age 12: one actuation per nostril daily, totaling 74 mcg/day. Do not transfer the Omnaris dose or age limit to Zetonna."
        },
        {
          "heading": "Teach aerosol-specific preparation",
          "body": "Zetonna requires three priming actuations initially and after ten consecutive unused days. If a fall separates its canister and actuator, reassemble and release one test spray. Wipe its nosepiece weekly with a dry cloth or tissue; do not wash or immerse it. Qnasl does not require priming. Preparation and cleaning instructions belong to the actual device, even when two products share a drug class."
        },
        {
          "heading": "Match Qnasl strength to age",
          "body": "Qnasl contains beclomethasone and treats seasonal or perennial allergic rhinitis from age 4. Ages 4-11 use the 40 mcg product, one actuation per nostril once daily: 80 mcg/day, maximum two actuations. From age 12, use the 80 mcg product, two actuations per nostril once daily: 320 mcg/day, maximum four actuations. Check both the strength and the spray count. These nasal steroids require attention to nasal injury, bleeding, vision changes and pediatric growth; avoid use on unhealed nasal wounds."
        },
        {
          "heading": "Beconase AQ: distinguish the aqueous formulation",
          "body": "Beconase AQ is a 42 mcg beclomethasone aqueous spray, distinct from Qnasl. The reviewed historical U.S. label lists seasonal/perennial allergic and vasomotor rhinitis, plus prevention of nasal-polyp recurrence after surgery. From age 12, it gives one or two sprays per nostril twice daily (168-336 mcg/day). Its overlapping child heading, ages 6-12, starts at one per nostril twice daily, permits two for inadequate response or severe symptoms, and reduces after control. Clarify the prescription at the overlapping age boundary. The maximum is 336 mcg/day; use below age 6 is not recommended."
        },
        {
          "heading": "Beconase AQ: product-specific handling",
          "body": "The reviewed label directs shaking, six initial priming actuations or until a fine spray appears, and repriming after seven unused days until a fine spray appears. Discard after 180 metered sprays. Do not continue rhinitis treatment beyond three weeks without significant improvement. Avoid untreated local nasal infection and unhealed nasal injury. Monitor nasal, ocular and growth effects. The available label is historical: verify the dispensed product’s current instructions and availability rather than assuming it is interchangeable with Qnasl."
        },
        {
          "heading": "Xhance is a different prescription treatment",
          "body": "Xhance is labeled for chronic rhinosinusitis with or without nasal polyps in adults, not as an interchangeable OTC allergy spray. Each spray contains fluticasone propionate 93 mcg. One or two sprays per nostril twice daily delivers 372 or 744 mcg per day; 744 mcg is the labeled daily maximum. Its exhalation device requires blowing through the mouthpiece while actuating the nasal spray, without breathing through the nose during actuation. Pediatric safety and efficacy are not established. Review nasal injury and healing, bleeding, ocular effects, systemic steroid risks and strong CYP3A4 inhibitors with the prescriber; teach the complete device instructions."
        },
        {
          "heading": "Flunisolide: dose and age boundaries",
          "body": "Flunisolide 0.025% delivers 25 mcg per spray for seasonal or perennial nasal rhinitis symptoms. Adults start with two sprays per nostril twice daily (200 mcg/day); the label permits an increase to three times daily (300 mcg/day), with a maximum of 400 mcg/day. Pediatric directions for ages 6-14 give one spray per nostril three times daily (150 mcg/day) or two twice daily (200 mcg/day). The maximum-dose sentence separately says children under 14: 200 mcg/day. Clarify dosing at age 14 with the prescriber rather than assuming an adult maximum. Use below age 6 is not recommended."
        },
        {
          "heading": "Flunisolide: preparation and reassessment",
          "body": "Prime with five or six sprays or until a fine spray appears; reprime after five or more unused days or disassembly for cleaning. Avoid the eyes. Do not use with untreated localized nasal infection. Review nasal wounds, bleeding, infection risks, systemic steroid exposure and growth. Use the lowest effective maintenance dose. Do not continue beyond three weeks without significant improvement; contact the prescriber for nonresponse or worsening."
        },
        {
          "heading": "Sinuva: an implant with a distinct indication",
          "body": "Sinuva contains 1,350 mcg of mometasone per implant for chronic rhinosinusitis with nasal polyps in adults at least 18 years old who have had ethmoid sinus surgery. An otolaryngology-trained physician places one implant in an ethmoid sinus under endoscopic visualization. It releases drug gradually over 90 days and must be removed by day 90 or earlier at the physician’s discretion. Its total drug content is not a daily nasal-spray dose. Ingredient hypersensitivity contraindicates use. Review nasal ulceration or trauma, infection, ocular disease and systemic steroid risks. Contact the care team immediately for excessive bleeding, infection symptoms or signs of migration such as throat irritation, choking sensation or swallowing the implant. Patients must not attempt placement or removal themselves."
        }
      ],
      "keyPoints": [
        "Same ingredient does not mean same device instructions.",
        "Qnasl requires no priming.",
        "Xhance has a distinct rhinosinusitis indication."
      ],
      "check": {
        "question": "Which Qnasl regimen matches labeled therapy for a 6-year-old?",
        "choices": [
          "80 mcg, two actuations per nostril daily",
          "40 mcg, two actuations per nostril twice daily",
          "40 mcg, one actuation per nostril daily",
          "80 mcg, one actuation per nostril twice daily"
        ],
        "answer": 2,
        "rationale": "Ages 4-11 use Qnasl 40 mcg, one actuation per nostril once daily, totaling 80 mcg/day.",
        "reviewHref": "#prescription-nasal-steroid-devices"
      }
    },
    {
      "slug": "nasal-antihistamines-and-combinations",
      "visual": "ar-nasal-antihistamines",
      "title": "Nasal Antihistamines and Combinations",
      "summary": "Match single-agent and combination nasal products to age, indication, schedule and safety needs.",
      "concepts": [
        "Azelastine",
        "Olopatadine",
        "Dymista",
        "Ryaltris"
      ],
      "application": "Choose a labeled schedule and counsel about sedation, nasal injury, interactions and device preparation.",
      "lesson": [
        {"heading": "Choose between fixed combinations deliberately", "body": "ARIA-EAACI conditionally favors azelastine-fluticasone over olopatadine-mometasone in adults, based on moderate-certainty seasonal-rhinitis evidence. Comparative perennial-rhinitis evidence was unavailable. Either combination may be used in children and adolescents when age-appropriate; evidence is limited. Bitter taste with azelastine-fluticasone may favor olopatadine-mometasone. A conditional preference does not override interactions, contraindications, cost or the actual product label."},
        {"heading": "Prescription azelastine 0.1%: indication changes the schedule", "body": "The reviewed 0.1% prescription spray delivers 137 mcg azelastine hydrochloride per spray. For seasonal allergic rhinitis, ages 5-11 use one spray per nostril twice daily; ages 12 and older use one or two per nostril twice daily. For vasomotor rhinitis, the labeled regimen is two per nostril twice daily from age 12. Do not substitute the OTC Astepro schedule or strength. Prime with four sprays or until a fine mist appears; after three or more unused days, reprime with two sprays or until a fine mist appears. Avoid eye exposure. Drowsiness can impair driving or machinery use; avoid alcohol and other CNS depressants. Bitter taste, nasal irritation and nosebleeds can occur."},
        {
          "heading": "Astepro Allergy: age-specific schedules",
          "body": "The OTC 205.5 mcg azelastine hydrochloride spray is for ages 6 and older. Ages 6-11 use one spray per nostril every 12 hours with adult supervision, maximum two per nostril daily. Ages 12 and older may use two per nostril once daily OR one or two per nostril every 12 hours, maximum four per nostril daily. Do not combine these alternatives. Drowsiness can occur; avoid alcohol and review sedatives. Use caution with driving. Tilt the head downward to reduce bitter taste. Stop and seek advice for severe or frequent nosebleeds or an allergic reaction."
        },
        {
          "heading": "Olopatadine nasal: distinguish it from eye drops",
          "body": "The reviewed prescription olopatadine hydrochloride nasal spray delivers 665 mcg per spray, equivalent to 600 mcg olopatadine base. It treats seasonal allergic rhinitis from age 6: ages 6-11 use one spray per nostril twice daily; ages 12 and older use two. This nasal product is not an eye drop. Prime initially with five sprays or until a fine mist appears; after more than seven days without use, reprime with two. Discard after 240 treatment sprays. Review nasal mucosal disease and bleeding/ulceration; periodic nasal assessment is advised. Bitter taste and somnolence can occur. Avoid alcohol and other CNS depressants, and avoid hazardous activities requiring full alertness after dosing."
        },
        {
          "heading": "Dymista: combination dosing and safety",
          "body": "Dymista contains azelastine hydrochloride 137 mcg and fluticasone propionate 50 mcg per spray. For seasonal allergic rhinitis from age 6, use one spray per nostril twice daily. Avoid use with unhealed nasal ulcers, surgery or trauma. Review sedation, alcohol and other CNS depressants, ocular symptoms, infection risk and growth monitoring. Hypersensitivity to either active ingredient or other ingredients contraindicates use. Ritonavir can markedly increase fluticasone exposure and cause systemic corticosteroid effects; coadministration is generally not recommended unless a clinician determines benefits outweigh risks. Other potent CYP3A4 inhibitors also require caution."
        },
        {
          "heading": "Ryaltris: current pediatric and adult directions",
          "body": "The July 2026 label includes seasonal allergic rhinitis from age 6. Each spray contains olopatadine hydrochloride 665 mcg and mometasone furoate 25 mcg. Ages 6-11 use one spray per nostril twice daily; ages 12 and older use two. These deliver 100 and 200 mcg/day of mometasone respectively. Shake well; prime with six sprays or until a fine mist, and after 14 or more days without use reprime with two or until a fine mist. Avoid eyes and mouth. Contraindicated with ingredient hypersensitivity. Review nasal bleeding/ulceration, unhealed injury or surgery, ocular effects, infection and systemic steroid risk; monitor pediatric growth. Avoid alcohol/CNS depressants and hazardous activities requiring alertness after dosing."
        }
      ],
      "keyPoints": [
        "Nasal antihistamines can cause sedation.",
        "Combination products have their own doses.",
        "Nasal and eye formulations are distinct."
      ],
      "check": {
        "question": "A patient taking ritonavir is prescribed Dymista. Which issue requires prescriber review?",
        "choices": [
          "Ritonavir can increase fluticasone exposure and systemic steroid effects",
          "Dymista contains no corticosteroid",
          "Nasal administration eliminates drug interactions",
          "Ritonavir requires doubling Dymista"
        ],
        "answer": 0,
        "rationale": "Ritonavir can markedly increase fluticasone exposure. Coadministration is generally not recommended unless a clinician determines that benefits outweigh risks.",
        "reviewHref": "#nasal-antihistamines-and-combinations"
      }
    },
    {
      "slug": "oral-antihistamine-products-and-safety",
      "visual": "ar-oral-antihistamines",
      "title": "Oral Antihistamine Selection and Safety",
      "summary": "Product formulation, age, kidney function and adverse effects determine safe oral antihistamine use.",
      "concepts": [
        "Tablet schedules",
        "Renal and hepatic impairment",
        "Sedation",
        "Urinary symptoms",
        "Discontinuation itching"
      ],
      "application": "Verify the actual product and indication, assess organ function and counsel on relevant adverse effects before selecting a dose.",
      "lesson": [
        {
          "heading": "Choose the oral class before the product",
          "body": "ARIA-EAACI 2024-2025 strongly prefers second-generation over first-generation oral antihistamines, despite very low certainty in comparative evidence, because safety favors the newer agents. It does not identify one second-generation drug as best for everyone. Choose by response, sedation, patient preference, access and cost; follow the actual U.S. label for organ impairment."
        },
        {
          "heading": "Fexofenadine: distinguish the tablet regimens",
          "body": "For ages 12 and older, Allegra 12 Hour uses 60 mg every twelve hours, maximum two tablets daily; Allegra 24 Hour uses 180 mg once daily, maximum one tablet daily. These are alternative regimens, not doses to combine. Take with water, not fruit juice, and avoid taking the dose at the same time as aluminum- or magnesium-containing antacids. The reviewed tablet labels direct adults 65 and older and people with kidney disease to a clinician for dosing advice. These tablets are not labeled for children under 12; pediatric formulations have separate directions."
        },
        {
          "heading": "Cetirizine: sedation and dose boundaries",
          "body": "The reviewed Zyrtec 10 mg tablet label permits one tablet daily in ages 6 and older, no more than 10 mg in 24 hours; a 5 mg product may suffice for milder symptoms. Adults 65 and older, children under 6, and people with liver or kidney disease need clinician advice for this product. Drowsiness can occur. Avoid alcohol and review sedatives or tranquilizers; use caution with driving or machinery. Do not equate second-generation with zero sedation."
        },
        {
          "heading": "Loratadine: verify the formulation",
          "body": "For the reviewed Claritin 10 mg tablet, ages 6 and older take one tablet daily, maximum one in 24 hours. Children under 6 and patients with liver or kidney disease need clinician advice for this tablet; a pediatric liquid or chewable has its own directions. Taking more than directed can cause drowsiness. Do not transfer the age limits or dose of a combination decongestant product to plain loratadine."
        },
        {
          "heading": "Desloratadine: adult organ impairment changes frequency",
          "body": "The reviewed prescription desloratadine tablet treats seasonal and perennial allergic rhinitis from age 12. The usual dose is 5 mg once daily, with or without food. In adults with renal or hepatic impairment, the labeled starting dose is 5 mg every other day. The label lacks a dosing recommendation for children with those impairments; do not extrapolate the adult schedule. Hypersensitivity to desloratadine, its ingredients or loratadine contraindicates it. Stop for hypersensitivity and seek appropriate care. Fatigue, dry mouth and somnolence can occur."
        },
        {
          "heading": "Levocetirizine: OTC tablet boundaries",
          "body": "Xyzal Allergy 24HR 5 mg tablets are taken in the evening: ages 12 through 64 use 5 mg once daily, with 2.5 mg an option for milder symptoms; ages 6 through 11 use no more than 2.5 mg daily. Adults 65 and older need clinician advice. This OTC tablet must not be used below age 6 or by people with kidney disease. Drowsiness can occur; avoid alcohol and review sedatives. Previous urinary difficulty warrants consultation; stop and seek advice if difficulty develops. Allergy to levocetirizine, ingredients or cetirizine precludes use. The label advises consultation during pregnancy and does not recommend use while breastfeeding."
        },
        {
          "heading": "Levocetirizine: prescription kidney adjustments",
          "body": "Clinician-directed prescription dosing is distinct from OTC self-care. For ages 12 and older, the reviewed Xyzal prescription label reduces dosing by creatinine clearance: 50-80 mL/min, 2.5 mg daily; 30-50, 2.5 mg every other day; 10-30, 2.5 mg every three to four days (twice weekly). The label's ranges overlap at boundaries; confirm the prescription at a boundary rather than inventing a cutoff. Creatinine clearance below 10 mL/min or hemodialysis contraindicates use, as does renal impairment in children 6 months through 11 years. Isolated hepatic impairment does not require adjustment. For perennial allergic rhinitis in ages 6 months through 2 years, this prescription label specifies 1.25 mg each evening as 2.5 mL of the 0.5 mg/mL solution. Its older-age dosing section is for chronic idiopathic urticaria; use the relevant allergy product label rather than transferring indication wording."
        },
        {"heading": "Zyrtec-D: cetirizine with a twelve-hour decongestant", "body": "Zyrtec-D combines cetirizine HCl 5 mg and pseudoephedrine HCl 120 mg per extended-release tablet. Ages 12-64 take one whole tablet every twelve hours, maximum two daily; do not break or chew it. Below age 12, from age 65, or with liver or kidney disease, ask a clinician. Two tablets total 10 mg cetirizine HCl and 240 mg pseudoephedrine HCl daily. Do not use with ingredient or hydroxyzine-antihistamine allergy, during MAOI treatment, or within two weeks after stopping an MAOI. Review glaucoma, cardiovascular and thyroid disease, diabetes, urinary difficulty and sedatives. Drowsiness remains possible: avoid alcohol and use driving caution. Stop for nervousness, dizziness, sleeplessness, symptoms lasting seven days without improvement, or fever; an allergic reaction needs immediate medical help. Its label does not recommend breastfeeding use and requires professional advice during pregnancy. Plain cetirizine and this combination have different schedules and safety decisions."},
        {"heading": "Allegra-D twelve-hour combination", "body": "Each reviewed Allegra-D 12 Hour tablet combines fexofenadine HCl 60 mg with pseudoephedrine HCl 120 mg. Ages 12-64 take one whole tablet with water every twelve hours on an empty stomach, maximum two daily. Below age 12, do not use; age 65 or older and kidney disease require clinician advice. Do not divide, crush, chew or dissolve it. Avoid fruit juice and simultaneous aluminum/magnesium antacids. The label excludes use with swallowing difficulty. Tablet coating in stool can be normal."},
        {"heading": "Claritin-D twenty-four-hour combination", "body": "The reviewed Claritin-D 24 Hour tablet contains loratadine 10 mg and pseudoephedrine sulfate 240 mg. From age 12, take one daily with a full glass of water, maximum one in 24 hours; below age 12 or with liver/kidney disease, ask a clinician. Do not divide, crush, chew or dissolve it. The pseudoephedrine salt differs from Allegra-D; do not treat salt weights as interchangeable base amounts."},
        {"heading": "Separate combination dosing from regular treatment selection", "body": "Knowing a combination tablet’s labeled dose does not make it a preferred daily rhinitis regimen. ARIA 2010 conditionally advised against regular oral decongestant use and against regularly adding one to an oral antihistamine. ARIA-EAACI 2024-2025 reproduces those recommendations as earlier guidance, explicitly stating that these questions were not reevaluated. Use the product details here to prevent formulation and safety errors; decide whether a decongestant is needed at all, and reassess ongoing use rather than renewing the combination automatically."},
        {"heading": "Clarinex-D: prescription combination restrictions", "body": "Clarinex-D 12 Hour contains desloratadine 2.5 mg and pseudoephedrine sulfate 120 mg. For seasonal allergic rhinitis when both effects are needed, ages 12 and older take one tablet approximately twelve hours apart, twice daily, with or without food. Swallow whole; do not break, chew or crush. Generally avoid this combination in renal or hepatic impairment rather than borrowing the single-ingredient desloratadine adjustment. Contraindications include ingredient or loratadine hypersensitivity, narrow-angle glaucoma, urinary retention, severe hypertension, severe coronary artery disease, and MAOI treatment or the fourteen days after stopping it. Review other cardiovascular disease, diabetes, hyperthyroidism and prostate or eye-pressure problems. Additional dosing has not demonstrated greater effectiveness."},
        {"heading": "Allegra-D twenty-four-hour strength is not a doubled twelve-hour tablet", "body": "The reviewed 24 Hour tablet contains fexofenadine HCl 180 mg and pseudoephedrine HCl 240 mg. Ages 12-64 take one whole tablet with water every twenty-four hours on an empty stomach, maximum one daily. Do not use below age 12; age 65 or older and kidney disease require clinician advice. Retain the swallowing-difficulty exclusion, no crushing or dividing, fruit-juice and aluminum/magnesium-antacid restrictions, and decongestant safety screening. Two twelve-hour tablets total 120 mg fexofenadine HCl, not 180 mg; do not construct a substitution by doubling tablets."},
        {"heading": "Claritin-D twelve-hour schedule", "body": "The reviewed 12 Hour tablet contains loratadine 5 mg and pseudoephedrine sulfate 120 mg. From age 12, take one every twelve hours, maximum two daily. Below age 12 or with liver/kidney disease, ask a clinician. Swallow intact; do not divide, crush, chew or dissolve. Its two-tablet daily totals are 10 mg loratadine and 240 mg pseudoephedrine sulfate, but the release schedule still differs from the twenty-four-hour product. Apply the same MAOI exclusion, disease screening and stop instructions discussed for the reviewed Claritin-D combination."},
        {"heading": "A decongestant changes the safety decision", "body": "The reviewed OTC combinations exclude MAOI use and the two weeks after stopping an MAOI. Review heart disease, hypertension, thyroid disease, diabetes and prostate-related urinary difficulty; Allegra-D also calls for glaucoma review. Pregnancy and breastfeeding need professional advice. Stop for nervousness, dizziness, sleeplessness, lack of improvement within seven days or symptoms with fever. Reconcile both ingredients across all medicines to avoid duplication. A combination package is not permission to add extra antihistamine or pseudoephedrine."},
        {
          "heading": "Plan for long-term cetirizine or levocetirizine use",
          "body": "FDA added a warning in 2025 about rare but severe itching after stopping long-term daily oral cetirizine or levocetirizine. Symptoms often began within a few days after discontinuation following months or years of use, including in people without prior itching. Discuss this risk when planning chronic treatment and contact a health professional if severe itching develops after stopping. Effective treatments have not been formally evaluated; reports of improvement after restarting or subsequent tapering do not establish a universal self-directed taper schedule."
        }
      ],
      "keyPoints": [
        "OTC directions differ from prescription adjustments.",
        "Second-generation does not mean no sedation.",
        "Check formulation and indication before extrapolating."
      ],
      "check": {
        "question": "An adult with kidney disease wants to self-start OTC Xyzal Allergy 24HR. What should happen?",
        "choices": [
          "Use the usual OTC dose",
          "Double the dosing interval without consultation",
          "Use a child dose without consultation",
          "Do not self-start; seek clinician-directed treatment"
        ],
        "answer": 3,
        "rationale": "The reviewed OTC tablet directs people with kidney disease not to use it. Prescription renal adjustments require clinician-directed selection.",
        "reviewHref": "#oral-antihistamine-products-and-safety"
      }
    },
    {
      "slug": "pediatric-antihistamine-formulations",
      "visual": "ar-pediatric-formulations",
      "title": "Pediatric Liquids, Chewables, and Dissolving Tablets",
      "summary": "Compare age limits, measured volumes and excipients across second-generation antihistamine formulations.",
      "concepts": [
        "Liquid concentrations",
        "Age and indication",
        "Phenylalanine",
        "Duplicate schedules"
      ],
      "application": "Compare the exact product, age, formulation and directions before counseling.",
      "lesson": [
        {
          "heading": "Children’s Claritin liquid: measure the formulation",
          "body": "The reviewed grape solution contains 5 mg in 5 mL, or 1 mg/mL. Ages 2-5 take 5 mL once daily, maximum 5 mL in 24 hours; ages 6 and older take 10 mL once daily, maximum 10 mL in 24 hours. Use the enclosed dosing cup. Under age 2, or with kidney or liver disease, ask a clinician. Do not transfer these directions to a different concentration or a combination medicine."
        },
        {
          "heading": "Loratadine chewables: check phenylalanine",
          "body": "The reviewed Children’s Claritin 5 mg chewable uses one tablet daily at ages 2-5 and two daily from age 6, with those same daily maxima. Under age 2 or with kidney or liver disease, obtain clinician advice. Each tablet contains 1.9 mg phenylalanine from its formulation; two tablets supply 3.8 mg. In phenylketonuria, review this contribution with the treating team and select an appropriate formulation rather than assuming all loratadine products have the same excipients."
        },
        {
          "heading": "RediTabs: disintegrating does not mean interchangeable",
          "body": "The reviewed Claritin RediTabs 10 mg product is one tablet daily from age 6, maximum one in 24 hours. Under age 6 or with kidney or liver disease, ask a clinician. Place it on the tongue immediately after opening its blister; water is optional. This label lists gelatin, mannitol, citric acid and mint flavor, without the chewable’s aspartame/phenylalanine warning. Check the actual package: other orally disintegrating formulations may differ. Do not infer ingredients or pediatric eligibility from the brand name alone."
        },
        {
          "heading": "Desloratadine liquid: match indication and age",
          "body": "The reviewed prescription solution contains 0.5 mg/mL. Seasonal allergic rhinitis is labeled from age 2 years; perennial allergic rhinitis from 6 months. For an eligible indication, once-daily doses are: ages 6-11 months, 2 mL (1 mg); 12 months-5 years, 2.5 mL (1.25 mg); 6-11 years, 5 mL (2.5 mg); and age 12 or older, 10 mL (5 mg). A listed infant dose does not make seasonal rhinitis an approved infant indication. Use a calibrated oral measuring device that accurately measures the prescribed volume. Pediatric renal or hepatic impairment has no established dose recommendation in this label. Hypersensitivity to desloratadine, loratadine or an ingredient contraindicates use; stop for a hypersensitivity reaction and obtain appropriate care."
        },
        {
          "heading": "Children’s Allegra suspension: a twelve-hour regimen",
          "body": "The reviewed Allergy suspension contains fexofenadine hydrochloride 30 mg/5 mL (6 mg/mL). Ages 2-11 take 5 mL every twelve hours, maximum 10 mL or 60 mg daily. Ages 12-64 take 10 mL every twelve hours, maximum 20 mL or 120 mg daily. Below age 2, from age 65, or with kidney disease, ask a clinician. Shake well and use the enclosed cup. Do not take with fruit juice or simultaneously with aluminum/magnesium antacids. These directions belong to the Allergy suspension; do not substitute another indication’s or formulation’s directions."
        },
        {
          "heading": "Children’s Zyrtec liquid: distinguish starting and maximum doses",
          "body": "The reviewed cetirizine syrup contains 5 mg/5 mL (1 mg/mL). Ages 2-5 start at 2.5 mL once daily; if needed, the label permits 5 mL once daily OR 2.5 mL every twelve hours, never more than 5 mL (5 mg) daily. Ages 6-64 use 5 or 10 mL once daily according to symptom severity, maximum 10 mL daily. From age 65, this liquid’s label specifies 5 mL once daily, maximum 5 mL. Below age 2 or with liver/kidney disease, ask a clinician. Use the enclosed cup; do not combine the alternative regimens."
        },
        {
          "heading": "Cetirizine liquid still requires safety counseling",
          "body": "Do not use after an allergic reaction to this product, its ingredients or an antihistamine containing hydroxyzine. Drowsiness can occur; avoid alcohol and review sedatives or tranquilizers with a clinician or pharmacist. The reviewed OTC syrup label advises against breastfeeding use and directs pregnant patients to a health professional. Reconcile individual pregnancy or lactation treatment with the clinician rather than assuming every formulation has identical consumer instructions. The separately discussed FDA warning about severe itching after stopping long-term cetirizine remains relevant."
        },
        {
          "heading": "Fexofenadine ODT: different minimum age and food instructions",
          "body": "The reviewed Children’s Allegra Allergy 30 mg orally disintegrating tablet is not for children under 6. Ages 6-11 take one tablet every twelve hours on an empty stomach, maximum two daily; ages 12-64 take two every twelve hours, maximum four daily. Age 65 or older and kidney disease require clinician advice. Let the tablet dissolve on the tongue, with or without water, immediately after opening its blister. Avoid fruit juice and simultaneous aluminum/magnesium antacids. Each tablet contains 3.8 mg phenylalanine and contains lactose; review the exact product in PKU. The suspension’s age-2 eligibility does not apply to this tablet."
        },
        {
          "heading": "Desloratadine ODT: formulation restrictions matter",
          "body": "The reviewed Dr. Reddy’s label recommends one 2.5 mg dissolving tablet daily at ages 6-11 and one 5 mg tablet daily from age 12. Despite broader indication wording, its dosing section does not recommend this formulation below age 6; liquid is better suited. Let it dissolve on the tongue immediately after opening, then swallow; food and water are optional. Adults with renal or hepatic impairment start at 5 mg every other day; pediatric adjustment data are lacking. Phenylalanine content is 5.04 mg per 2.5 mg tablet and 10.08 mg per 5 mg tablet. Review these excipients in PKU; do not assume all manufacturers match."
        }
      ],
      "keyPoints": [
        "Product strengths and instructions are not interchangeable.",
        "Use the linked labeling for the exact formulation."
      ],
      "check": {
        "question": "For a 3-year-old without liver or kidney disease, a caregiver reads that Children’s Zyrtec 1 mg/mL may be increased from 2.5 mL daily. They plan 5 mL each morning plus 2.5 mL each evening. What is the error?",
        "choices": [
          "Only the evening dose counts toward the daily maximum",
          "Every liquid cetirizine product permits 10 mL daily at this age",
          "The two schedules must always be combined",
          "The plan gives 7.5 mg/day, exceeding this age group’s 5 mg/day maximum"
        ],
        "answer": 3,
        "rationale": "At 1 mg/mL, 5 mL plus 2.5 mL equals 7.5 mg. The label permits either 5 mL once daily or 2.5 mL every twelve hours if an increase is needed, not both schedules together. The maximum at ages 2-5 is 5 mL (5 mg) daily.",
        "reviewHref": "#pediatric-antihistamine-formulations"
      }
    },
    {
      "slug": "first-generation-antihistamine-formulations",
      "visual": "ar-first-generation-formulations",
      "title": "First-Generation Antihistamine Formulations",
      "summary": "Distinguish immediate release, extended release, historical products and sleep-aid labeling.",
      "concepts": [
        "Sedation",
        "Release formulation",
        "Label boundaries",
        "Prescription verification"
      ],
      "application": "Compare the exact product, age, formulation and directions before counseling.",
      "lesson": [
        {
          "heading": "Diphenhydramine: check the actual allergy tablet",
          "body": "The reviewed Benadryl 25 mg tablet directions are every four to six hours, no more than six doses in 24 hours: ages 12 and older take 25-50 mg per dose; ages 6 to under 12 take 25 mg; below age 6, do not use this product. The resulting daily ceilings are 300 mg and 150 mg, not treatment targets. Marked drowsiness and paradoxical excitation can occur. Do not use to make a child sleepy or combine with any other diphenhydramine product, including skin products. Review breathing problems, glaucoma, urinary difficulty and sedatives; avoid alcohol and use caution driving."
        },
        {"heading": "Include sun sensitivity in antihistamine counseling", "body": "Some antihistamines can increase sensitivity to ultraviolet light. FDA examples include diphenhydramine and promethazine as well as cetirizine and loratadine; this is not restricted to one generation, and not every user develops a reaction. Review the exact medicine and any new sunburn-like or itchy rash after sunlight or tanning exposure. Use shade, protective clothing and broad-spectrum SPF 30 or higher sunscreen as directed. Ask the pharmacist or clinician to assess suspected reactions and the medication plan; sunscreen is not permission to prolong ultraviolet exposure."},
        {"heading": "Recognize diphenhydramine poisoning and prevent misuse", "body": "Excess diphenhydramine can cause dangerous heart effects, seizures, coma and death. Check allergy, sleep and combination-product ingredients to prevent accidental duplication, and store medicines securely away from children and teens. Never exceed the labeled dose or use a social-media challenge as dosing advice. Suspected excess ingestion needs immediate medical or Poison Control guidance. Hallucinations, inability to awaken, a seizure, breathing difficulty or collapse require urgent medical attention; in the United States, Poison Control is available at 1-800-222-1222. Do not dismiss these findings as ordinary antihistamine sleepiness."},
        {
          "heading": "Chlorpheniramine: immediate-release tablet limits",
          "body": "The reviewed 4 mg tablet uses a four-to-six-hour interval. Ages 12 and older take one tablet, maximum six tablets (24 mg) in 24 hours. Ages 6 to under 12 take half a tablet (2 mg), maximum three whole tablets (12 mg) in 24 hours. Below age 6, do not use this product. Drowsiness or excitation may occur; do not use for child sedation. Review breathing problems, glaucoma, urinary difficulty and sedatives, avoid alcohol and use caution driving. These directions do not apply to extended-release tablets or cough combinations."
        },
        {
          "heading": "Chlorpheniramine extended release: preserve the interval",
          "body": "The reviewed Chlorphen-12 label (December 2018) contains 12 mg per extended-release tablet. From age 12, take one every twelve hours, maximum two (24 mg) in 24 hours; below age 12, ask a doctor. Do not apply the 4 mg immediate-release schedule. Swallow extended-release tablets whole without breaking, crushing or chewing. Longer release does not remove sedation, alcohol interactions or anticholinergic precautions. Confirm the actual package; an older label does not establish current retail availability."
        },
        {
          "heading": "Doxylamine: a sleep-aid label is not an allergy regimen",
          "body": "Unisom SleepTabs contains doxylamine succinate 25 mg and is labeled as a nighttime sleep aid, not an allergy product. Its directions from age 12 are one tablet 30 minutes before bedtime, once daily or as directed by a doctor; do not use below age 12. Do not turn a general antihistamine table into repeated daytime dosing for this product. Allow a full night’s sleep, avoid alcohol, do not drive or operate machinery, and avoid duplicate doxylamine. Review other sedatives or antihistamines, breathing problems, glaucoma and urinary difficulty. Persistent sleeplessness beyond two weeks requires medical advice. Pregnancy nausea treatment is a separate clinician-directed indication and formulation decision."
        },
        {
          "heading": "Carbinoxamine: distinguish extended release",
          "body": "Karbinal ER contains carbinoxamine maleate 4 mg per 5 mL. For ages 12 and older, its prescription range is 7.5-20 mL (6-16 mg) every 12 hours, individualized from the lower dose according to response and tolerance. Shake well and measure with a milliliter device. Do not substitute an immediate-release schedule. It is contraindicated below age 2, with ingredient hypersensitivity, or with MAO inhibitors. Pediatric prescribing from age 2 requires the label’s age-specific directions and individualized assessment. Marked sedation, anticholinergic effects and additive CNS depression matter; avoid hazardous tasks, alcohol and other CNS depressants. Sodium metabisulfite can cause serious allergic reactions in susceptible patients."
        },
        {
          "heading": "Karbinal ER pediatric ranges need prescription verification",
          "body": "The reviewed FDA label lists these every-twelve-hour prescription ranges: ages 2-3, 3.75-5 mL (3-4 mg); ages 4-5, 3.75-10 mL (3-8 mg); ages 6-11, 7.5-15 mL (6-12 mg). Start low and individualize through the prescriber. Its pediatric heading also states approximately 0.2-0.4 mg/kg/day, which does not consistently reproduce the age-band ranges. Do not treat that heading as a validated conversion formula or independently substitute one calculation for a prescription. Resolve discrepant instructions with the prescriber and pharmacist before administration. Young children can develop excitation as well as sedation. Breastfeeding is not recommended during Karbinal ER treatment."
        },
        {
          "heading": "Clemastine 1.34 mg: historical OTC directions",
          "body": "A historical May 2012 OTC label for clemastine fumarate 1.34 mg (equivalent to 1 mg clemastine) directed ages 12 and older to take one every twelve hours, maximum two daily (2.68 mg fumarate); younger children required clinician advice. Its listed NDC is now inactivated. This distinguishes older product context without assuming the package remains available. Do not transfer the 2.68 mg prescription tablet’s maximum to this OTC product. Sedation, alcohol interactions and anticholinergic precautions still apply."
        },
        {
          "heading": "Clemastine: prescription tablet boundaries",
          "body": "The reviewed clemastine fumarate 2.68 mg tablet treats allergic rhinitis; dosing is individualized, with no more than one tablet three times daily (8.04 mg/day). Safety and efficacy below age 12 are not established for this tablet. Its label contraindicates use during breastfeeding, with MAO inhibitors or with hypersensitivity to clemastine or structurally related antihistamines. It does not treat asthma symptoms. Review sedation, alcohol or other CNS depressants, narrow-angle glaucoma, urinary or gastrointestinal obstruction, and greater adverse-effect susceptibility in older adults. Do not extrapolate these tablet directions to another formulation."
        },
        {
          "heading": "Carbinoxamine: immediate release is a different schedule",
          "body": "The reviewed immediate-release products contain 4 mg per tablet or 4 mg per 5 mL solution. The usual adult schedule is 4-8 mg three to four times daily; ages 6-11 use 2-4 mg three to four times daily. For ages 2-5, the solution label prioritizes weight-based prescribing: approximately 0.2-0.4 mg/kg/day divided into three or four doses. This is a daily total, not the amount per dose. Measure in milliliters. Despite sharing the 4 mg/5 mL strength, the solution and Karbinal ER suspension do not share a schedule. The immediate-release label contraindicates use below age 2, during breastfeeding, with MAO inhibitors or with drug hypersensitivity. Its food instructions conflict internally; clarify the dispensed product’s instructions with the pharmacist."
        }
      ],
      "keyPoints": [
        "Product strengths and instructions are not interchangeable.",
        "Use the linked labeling for the exact formulation."
      ],
      "check": {
        "question": "A patient plans to take Unisom SleepTabs repeatedly during the day because a study table lists doxylamine among antihistamines. What should be explained?",
        "choices": [
          "All antihistamines share the same dosing",
          "SleepTabs is labeled for nighttime sleep assistance, not that daytime allergy regimen",
          "Its tablet contains no active drug",
          "It is labeled for children of any age"
        ],
        "answer": 1,
        "rationale": "The actual product label controls its indication and instructions. SleepTabs contains doxylamine 25 mg with bedtime directions from age 12; the table does not authorize repeated daytime use.",
        "reviewHref": "#first-generation-antihistamine-formulations"
      }
    },
    {
      slug: "targeted-adjuncts-and-product-boundaries", title: "Targeted Adjuncts and Product Boundaries", visual: "ar-adjuncts",
      summary: "Adjunct therapy should solve a defined residual problem. Rhinorrhea, ocular symptoms, short-term obstruction, prevention before exposure, and coexisting asthma do not call for the same product.",
      concepts: ["Ipratropium", "Ocular antihistamines", "Cromolyn", "Decongestants", "Montelukast"],
      application: "Name the unresolved symptom, verify that foundational therapy was delivered correctly, then select an adjunct with a specific target, stop rule, and safety plan.",
      lesson: [
        { heading: "Match ipratropium to watery rhinorrhea", body: "Intranasal ipratropium reduces glandular watery rhinorrhea but does not meaningfully treat itching, sneezing, or congestion. Local dryness and epistaxis can occur. Avoid eye exposure and use added caution when anticholinergic effects could worsen narrow-angle glaucoma or urinary retention." },
        { heading: "Ipratropium 0.03%: perennial rhinitis", body: "The 0.03% spray delivers 21 mcg per spray. For allergic or nonallergic perennial rhinorrhea in ages 6 and older, use two sprays per nostril two or three times daily. Two sprays deliver 42 mcg per nostril; treating both nostrils gives 84 mcg per administration, or 168 to 252 mcg daily. It does not relieve congestion, sneezing or postnasal drip. Verify the concentration rather than transferring another nasal product's directions." },
        { heading: "Ipratropium 0.06%: seasonal allergy versus cold", body: "The 0.06% spray delivers 42 mcg per spray. For seasonal allergic rhinorrhea in ages 5 and older, the labeled dose is two sprays per nostril four times daily, totaling 672 mcg daily. Use beyond three weeks requires clinician direction; longer-term safety and effectiveness are not established in the label. For cold-associated rhinorrhea, ages 12 and older use two sprays per nostril three or four times daily; ages 5 through 11 use the same sprays three times daily. The cold regimen has a four-day evidence limit. These limits depend on the indication, not simply the concentration." },
        { heading: "Treat the eye directly when appropriate", body: "Topical ophthalmic antihistamine or dual-action products can rapidly treat allergic itching and tearing. Confirm that pain, photophobia, vision change, purulent discharge, trauma, or contact-lens complications are absent before treating presumed uncomplicated allergic conjunctivitis." },
        { heading: "Ketotifen eye drops", body: "Zaditor contains ketotifen 0.025%, equivalent to ketotifen fumarate 0.035%. Ages 3 and older use one drop in each affected eye twice daily, eight to twelve hours apart, with no more than two administrations per day. Younger children need clinician advice. Remove contact lenses and wait at least ten minutes before reinsertion. Do not use for lens-related irritation. Stop and seek medical advice for pain, vision changes, eye redness, or itching that worsens or persists beyond 72 hours." },
        { heading: "Olopatadine 0.2% eye drops", body: "Pataday Once Daily Relief 0.2% is labeled for ages 2 and older: one drop in each affected eye once daily, no more than once per day. Separate other eye products by at least five minutes. Remove lenses before use and wait at least ten minutes before reinsertion; do not wear lenses in a red eye. Pain, vision change, increased redness or worsening/persistent itching beyond 72 hours requires medical advice. Keep dropper tips clean; do not use cloudy or discolored solution. Verify the exact concentration and Drug Facts." },
        { heading: "Use cromolyn as prevention, not rescue", body: "NasalCrom delivers 5.2 mg cromolyn per spray. Ages 2 and older use one spray per nostril three or four times daily, every four to six hours; if needed, up to six administrations daily. Supervise young children; use below age 2 requires clinician direction. Use daily during exposure and start up to one week beforehand when possible. Benefit takes several days, with best effect commonly after one to two weeks. Seek advice if improvement has not begun within two weeks, symptoms worsen, or use beyond 12 weeks is needed. It does not treat colds, sinus infection or asthma. Pregnancy or breastfeeding warrants health-professional advice." },
        {"heading": "Avoid routine montelukast add-on for rhinitis", "body": "ARIA-EAACI 2024-2025 conditionally favors an oral antihistamine alone over adding a leukotriene antagonist and advises against starting untreated rhinitis with that antagonist. Poor control despite alternatives and a strong preference for oral treatment may justify individualized consideration, including when asthma coexists. Keep the FDA neuropsychiatric precautions central."},
        {"heading": "Interpret eye-treatment guidance in context", "body": "For rhinitis-associated eye symptoms, ARIA-EAACI 2024-2025 conditionally favors oral over ocular antihistamines except when very rapid eye relief is needed. For untreated seasonal disease, it favors limiting initial eye-antihistamine use to brief or as-needed rapid relief; its perennial recommendation differs. These low-certainty recommendations do not answer every add-on or isolated eye-disease question. Distinguish the guideline\u2019s treatment strategy from the product\u2019s labeled dosing and stop rules."},
        { heading: "Act on montelukast behavior or mood changes", body: "Counsel every patient and caregiver about neuropsychiatric effects, including new nightmares, agitation, depression and suicidal thoughts. If new behavior or mood symptoms occur, stop montelukast and contact a health professional immediately. Monitor patients even without previous psychiatric illness. Symptoms can persist or appear after discontinuation, so stopping does not eliminate the need for follow-up." },
        { heading: "Oxymetazoline: check the exact spray", body: "For Afrin Original 0.05%, use two or three sprays in each nostril every ten to twelve hours, with no more than two administrations in 24 hours. Children ages 6 through 11 need adult supervision; younger children need clinician advice. Limit self-care to three days and stop for medical advice if symptoms persist. Before use, consult a clinician for heart disease, hypertension, diabetes, thyroid disease or urinary difficulty from an enlarged prostate; pregnancy or breastfeeding also warrants consultation. Do not share the bottle. Follow its device instructions, including keeping the head from tilting backward during spraying." },
        { heading: "Separate decongestant labeling from guideline preference", body: "ARIA-EAACI 2024-2025 conditionally discourages routinely adding a nasal decongestant to a nasal corticosteroid, with very low certainty of evidence. It allows selected brief use when starting the steroid, but advises against prolonged treatment beyond five days. This does not extend Afrin Original's three-day self-care limit. Persistent obstruction needs reassessment rather than repeated courses." },
        {"heading": "Understand the older supervised-use exception", "body": "Rhinitis 2020 conditionally allowed adding a nasal decongestant for up to four weeks when congestion persisted despite a nasal steroid or steroid-antihistamine combination; evidence certainty was low. This selected clinician-directed approach is different from OTC self-care. Newer ARIA-EAACI guidance discourages routine steroid-decongestant combinations and use beyond five days. Do not interpret the older exception as permission to extend Afrin’s three-day label limit independently. A clinician should reassess persistent obstruction and any proposed prolonged regimen."},
        { heading: "Age permission is not a treatment recommendation", body: "Although Afrin Original labeling includes supervised use at ages 6-11, ARIA-EAACI advises avoiding nasal decongestants for allergic rhinitis below age 12 and during pregnancy, particularly the first trimester; it also discourages use in older adults. For these groups, select an appropriate alternative and obtain individualized clinical advice. A label describing a permitted dose does not establish that the drug is the preferred treatment." },
        { heading: "Set boundaries for decongestants and montelukast", body: "A topical nasal decongestant can provide brief rescue from severe obstruction, but continued use risks rebound congestion. Follow the exact product limit: Afrin Original oxymetazoline 0.05% permits no more than three days of self-care use. Oral decongestants add cardiovascular, urinary, sleep, and anxiety risk. Reserve montelukast for allergic rhinitis that is not controlled by or cannot tolerate alternatives, and discuss the boxed neuropsychiatric warning." },
      ],
      keyPoints: ["Every adjunct needs a target.", "Ipratropium treats watery rhinorrhea.", "Cromolyn requires prevention and persistence.", "Montelukast is reserved, not routine."],
      check: { question: "Which residual symptom is most directly targeted by intranasal ipratropium?", choices: ["Profuse watery rhinorrhea", "Nasal itching", "Allergic eye itching", "Fixed unilateral obstruction"], answer: 0, rationale: "Ipratropium reduces cholinergic glandular secretion and is most useful for prominent watery rhinorrhea.", reviewHref: "#targeted-adjuncts-and-product-boundaries" },
    },
    {
      slug: "safety-special-populations-and-refractory-disease", title: "Safety, Special Populations, and Refractory Disease", visual: "ar-safety",
      summary: "Children, pregnancy, older adults, glaucoma, epistaxis, occupational disease, and coexisting asthma change the benefit-risk discussion. Refractory symptoms require diagnostic review, not automatic systemic therapy.",
      concepts: ["Children", "Pregnancy and lactation", "Older adults", "Medication safety", "Specialist referral"],
      application: "Verify age-specific labeling, growth and sedation concerns, pregnancy evidence, anticholinergic burden, ocular and bleeding risk, interactions, and the need for allergy or ENT evaluation.",
      lesson: [
        { heading: "Protect learning and development", body: "In children, assess sleep, behavior, school performance, growth, asthma, adenoids, otitis, and technique. Avoid sedating first-generation antihistamines when safer options exist. Use the lowest effective intranasal corticosteroid dose within age-specific labeling and monitor growth in prolonged treatment." },
        { heading: "Pediatric nasal budesonide example", body: "Rhinocort Allergy delivers 32 mcg per spray. Ages 6 through 11 start with one spray per nostril daily (64 mcg total), supervised by an adult; if symptoms do not improve, the label permits two per nostril daily (128 mcg), reducing again after improvement. Do not use this product below age 6. Discuss use beyond two months per year with the child's clinician because growth may slow. Stop and seek advice if symptoms have not improved after two weeks, or for severe/frequent nosebleeds or vision changes. Review other steroid medicines. Do not double a missed dose. Different sprays have different age limits and instructions." },
        { heading: "Choose pregnancy treatment deliberately", body: "Loratadine or cetirizine may be considered with the prenatal clinician when an oral antihistamine is needed; nasal corticosteroid treatment is another option for persistent symptoms. Avoid pseudoephedrine in the first trimester. Later pregnancy still requires clinician review, particularly with hypertension or preeclampsia. Check combination products for added decongestants. Do not abruptly abandon needed asthma treatment because of pregnancy; coordinate a treatment plan. Established allergy shots may continue under specialist supervision without dose escalation, but pregnancy is not the time to start them. Assess breastfeeding separately using the specific drug, infant and maternal circumstances rather than assuming pregnancy advice automatically applies." },
        { heading: "Individualize pregnancy and lactation", body: "Begin with exposure control and saline when sufficient, then choose medications with established experience and the lowest effective exposure. Budesonide has extensive pregnancy experience. Avoid assuming that every nonprescription product is preferred, and coordinate uncontrolled asthma and rhinitis care with obstetric and respiratory treatment." },
        { heading: "Reduce anticholinergic and sedative harm", body: "First-generation antihistamines impair vigilance, driving, learning, and fall risk and add anticholinergic burden. Oral decongestants can worsen pressure, tachycardia, urinary retention, insomnia, and anxiety. Review glaucoma, prostate disease, cardiovascular disease, cognition, occupation, and interacting sedatives." },
        {"heading": "Keep systemic steroids out of routine escalation", "body": "Persistent symptoms do not automatically justify oral or injected corticosteroids. Rhinitis 2020 conditionally permits a clinician-selected five-to-seven-day oral course for very severe or intractable allergic rhinitis, based on very-low-certainty evidence. It advises against depot steroid injections because of systemic and local harms, including adrenal suppression. First reassess diagnosis, delivery and appropriate nasal therapy. The ARIA-EAACI 2024-2025 oral-treatment paper lists an older short-course recommendation but did not reassess this question; it should not be described as new high-certainty support for systemic treatment."},
        { heading: "Choose diagnostic escalation selectively", body: "Typical allergic rhinitis does not routinely need sinus imaging. When empiric treatment fails, the diagnosis is uncertain, or identifying the allergen would change therapy, arrange targeted skin or serum specific IgE testing or allergy referral. Persistent one-sided obstruction or bleeding needs focused evaluation for structural or other disease. Clear unilateral drainage after head trauma or surgery raises concern for a cerebrospinal fluid leak and requires prompt assessment rather than another allergy medicine. Imaging and endoscopy should answer a specific clinical concern." },
        { heading: "Refer when the pathway no longer fits", body: "Refer for uncertain diagnosis, refractory symptoms despite verified treatment, severe epistaxis, polyps, recurrent sinus disease, unilateral findings, suspected occupational allergy, asthma instability, candidate immunotherapy, or need for endoscopy, imaging, surgery, or allergen challenge." },
      ],
      keyPoints: ["Sedation affects school and work.", "Use age-specific labeling.", "Pregnancy care balances disease and exposure.", "Refractory disease needs diagnostic review."],
      check: { question: "Why are first-generation oral antihistamines generally avoided when safer options are available?", choices: ["Sedation and anticholinergic effects can impair cognition, driving, and function", "They always cause anaphylaxis", "They cannot block H1 receptors", "They treat bacterial infection"], answer: 0, rationale: "Central sedation and anticholinergic burden create important avoidable harms.", reviewHref: "#safety-special-populations-and-refractory-disease" },
    },
    {
      slug: "response-assessment-and-longitudinal-control", title: "Response Assessment and Longitudinal Control", visual: "ar-followup",
      summary: "A treatment plan is complete only when it defines what improvement means, when to reassess treatment failure, and when to step down, change diagnosis, or refer.",
      concepts: ["Response interval", "Symptom and function targets", "Implementation audit", "Step-up and step-down", "Referral thresholds"],
      application: "Set a patient-centered outcome and reassessment date, measure symptom and functional change, audit exposure and delivery, then continue, simplify, escalate, or redirect the diagnosis.",
      lesson: [
        { heading: "Measure more than nasal symptoms", body: "Track congestion, rhinorrhea, itching, sneezing, eye symptoms, sleep, daytime attention, school or work, exercise, rescue use, and adverse effects. A numerical score or brief diary can reveal whether improvement is broad, partial, or limited to one domain." },
        { heading: "Match reassessment to the treatment", body: "Rapid therapies can be judged early, while intranasal corticosteroids and cromolyn need consistent technique and sufficient time. The follow-up interval should be short enough to correct failure and long enough to observe the expected pharmacologic effect." },
        { heading: "Audit implementation before escalation", body: "Confirm access, priming, dose, frequency, lateral aim, product-specific head position and breathing, persistence, exposure control, and tolerability. If implementation is sound, reconsider phenotype, structure, comorbidity, and the dominant residual symptom before adding therapy." },
        { heading: "Use a product-specific follow-up example", body: "For an adult using Rhinocort Allergy, the labeled starting regimen is two sprays per nostril once daily; after improvement, reduce to one per nostril daily. Maximum relief can take up to two weeks of daily use. No improvement at two weeks calls for stopping and clinician review. Severe or frequent nosebleeds or vision changes warrant earlier stop-and-review. Record the starting symptoms and functional limitations so response can be judged against baseline. A better nasal score accompanied by disabling sleepiness is not an acceptable overall outcome." },
        { heading: "Simplify after stable control", body: "When symptoms and function remain controlled, use the lowest effective burden. Preserve the agent that addresses the main mechanism, remove ineffective adjuncts, and keep a plan for predictable exposure, recurrence, and red flags." },
      ],
      keyPoints: ["Define success before treatment.", "Allow a fair therapeutic trial.", "Audit delivery before escalation.", "Stable control permits simplification."],
      check: { question: "What is the best first response to persistent symptoms despite a prescribed nasal regimen?", choices: ["Observe technique and verify adherence before escalation", "Add oral prednisone immediately", "Add two sedating antihistamines", "Assume bacterial sinusitis"], answer: 0, rationale: "Delivery, adherence, duration, exposure, and diagnosis should be verified before treatment burden increases.", reviewHref: "#response-assessment-and-longitudinal-control" },
    },
    {
      slug: "allergen-immunotherapy", title: "Allergen Immunotherapy", visual: "ar-immunotherapy",
      summary: "Allergen immunotherapy modifies disease through repeated controlled exposure. It requires confirmed clinical relevance, a product-specific protocol, adherence, and preparation for systemic reactions.",
      concepts: ["Candidate selection", "SCIT", "SLIT", "Anaphylaxis readiness", "Long-term disease modification"],
      application: "Confirm the allergen causes disease, compare subcutaneous and sublingual options, screen asthma and contraindications, teach adherence and reaction plans, and monitor benefit over a multi-year course.",
      lesson: [
        { heading: "Select a clinically relevant allergen", body: "Consider immunotherapy when symptoms remain important despite avoidance and pharmacotherapy, adverse effects or preference limit medicines, or long-term disease modification is desired. Sensitization must match exposure and symptoms. Treating irrelevant positive tests adds cost and risk." },
        { heading: "Compare SCIT and SLIT", body: "Subcutaneous immunotherapy can address selected allergen extracts through clinic-administered buildup and maintenance but carries systemic reaction risk. FDA-approved sublingual tablets are allergen-specific, use a first supervised dose, and continue daily at home. They are not interchangeable with unapproved liquid mixtures." },
        { heading: "Grastek: Timothy grass", body: "For confirmed Timothy grass or cross-reactive grass pollen allergy in ages 5 through 65, Grastek supplies 2,800 BAU in one daily sublingual tablet. Begin at least 12 weeks before the expected grass season and continue through it. Its label also permits daily treatment for three consecutive years, including between seasons, to sustain effectiveness for one grass season after stopping. This is not a promise of permanent remission." },
        { heading: "Oralair: five-grass mixture", body: "Oralair contains sweet vernal, orchard, perennial rye, Timothy, and Kentucky blue grass allergens. Confirm clinically relevant sensitization to a contained grass. For ages 18 through 65, give 300 IR sublingually daily. Ages 5 through 17 start with 100 IR on day one, two 100 IR tablets on day two, then 300 IR daily from day three. Start four months before each expected grass season and continue throughout the season. IR is a product potency unit; do not convert it into another tablet's dose." },
        { heading: "Ragwitek: short ragweed", body: "Ragwitek addresses confirmed short ragweed pollen allergy in ages 5 through 65. Give one 12 Amb a 1-U sublingual tablet daily, starting at least 12 weeks before the expected ragweed season and continuing throughout it. Grastek, Oralair, and Ragwitek each require a supervised first dose with at least 30 minutes of observation and prescribed epinephrine with training. They do not provide immediate relief. Starting these seasonal products during pollen season lacks established safety or efficacy data; plan initiation with the allergy clinician." },
        { heading: "Odactra: house dust mite tablet", body: "Odactra treats confirmed house dust mite allergic rhinitis, with or without conjunctivitis, in ages 5 through 65. It does not provide immediate symptom relief. Give one 12 SQ-HDM tablet daily under the tongue. Supervise the first dose in a healthcare setting and observe for at least 30 minutes. Use dry hands; avoid swallowing for one minute and food or drink for five minutes. Prescribe epinephrine and teach emergency use and immediate medical care." },
        { heading: "Odactra: exclusions and treatment interruptions", body: "Contraindications include severe, unstable or uncontrolled asthma; previous severe systemic allergy or severe local reaction to sublingual immunotherapy; eosinophilic esophagitis history; and allergy to inactive ingredients. Withhold during an acute asthma exacerbation. Stop for oral wounds or inflammation until healed. Stop and evaluate severe or persistent swallowing difficulty or chest pain for eosinophilic esophagitis. Worsening mouth or throat reactions need assessment; breathing compromise requires emergency care. These instructions are product-specific." },
        { heading: "Control asthma before dosing", body: "Uncontrolled or severe asthma increases the risk of serious immunotherapy reactions. Assess current symptoms and respiratory status before injections or supervised tablet initiation, review beta-blockers and other risk modifiers, and defer dosing during significant instability according to protocol." },
        { heading: "Pregnancy: established shots versus starting treatment", body: "Do not start allergy shots during pregnancy. A patient who becomes pregnant while receiving established SCIT may continue after the allergist reviews benefit and reaction risk. Do not increase the dose during pregnancy. Continuing treatment still requires monitoring; pregnancy does not remove the risk of a systemic reaction. Have the allergy clinician reassess the plan rather than automatically stopping an effective maintenance course." },
        {"heading": "Local reactions and dosing decisions", "body": "An isolated injection-site reaction does not automatically require reducing or delaying SCIT. The 2024 guideline recommends continuing escalation or maintenance with local reactions. The allergy team must distinguish these from systemic reactions; patients should not adjust doses themselves. This does not override product-specific instructions for severe or persistent SLIT mouth or throat reactions."},
        {"heading": "Measure benefit clinically", "body": "Follow symptoms and medication requirements rather than routinely repeating skin tests or specific IgE to judge immunotherapy efficacy. Changed exposures or loss of symptom control can justify reassessment. Persistently positive tests alone do not establish failure or a need to continue indefinitely."},
        {"heading": "Individualize duration after sustained benefit", "body": "For patients benefiting from immunotherapy, the guideline recommends at least three years, then individual review. Evidence beyond five years is less certain; five years is not an absolute stopping rule. Seasonal tablet schedules require their own product-specific plan."},
        { heading: "Follow the course and the response", body: "Successful SCIT maintenance commonly continues for three to five years. Discuss duration individually, accounting for response, adverse effects and treatment burden. Improvement may take up to a year at maintenance; persistent lack of benefit then warrants reassessment of allergens, exposure, dose and other treatment options. Benefits can persist after stopping, but recurrence remains possible." },
        { heading: "Prepare for anaphylaxis and adherence", body: "Observe in the clinic for at least 30 minutes after SCIT, with longer monitoring when the clinical protocol requires it, and ensure trained staff, epinephrine, and emergency response are available. SLIT tablet users need epinephrine and education about oral symptoms, systemic reactions, missed doses, and when to stop or contact the prescriber. Benefits depend on sustained multi-year adherence." },
      ],
      keyPoints: ["Treat clinically relevant sensitization.", "SCIT and SLIT are not interchangeable.", "Control asthma first.", "Anaphylaxis readiness is mandatory."],
      check: { question: "What is essential before allergen immunotherapy is prescribed?", choices: ["Confirmed sensitization that matches clinically relevant exposure and symptoms", "A positive broad panel without symptoms", "Routine food allergy testing", "Failure of one saline rinse"], answer: 0, rationale: "Immunotherapy should target an allergen proven relevant to the patient's disease.", reviewHref: "#allergen-immunotherapy" },
    },
  ],
  references: [
    {"label": "AAAAI Cleaning Tips for Allergy and Asthma Sufferers (July2026)", "href": "https://www.aaaai.org/tools-for-the-public/conditions-library/allergies/cleaning-tips-for-allergy-and-asthma-sufferers"},

    {"label": "FDA: The Sun and Your Medicine", "href": "https://www.fda.gov/drugs/understanding-over-counter-medicines/sun-and-your-medicine"},
    {"label": "EPA AirNow: AQI Basics", "href": "https://www.airnow.gov/aqi/aqi-basics/"},
    {"label": "AAAAI: Climate Change and Outdoor Allergies (2016 exposure advice)", "href": "https://www.aaaai.org/Aaaai/media/MediaLibrary/PDF%20Documents/Libraries/EL-climate-change-patient-eng.pdf"},

    {"label": "DailyMed Zyrtec-D (April 2026)", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f1ecf9ba-1c03-7fb7-e053-2a95a90a875a"},
    {"label": "FDA: Safe Use of Neti Pots and Nasal Irrigation Devices", "href": "https://www.fda.gov/consumers/consumer-updates/rinsing-your-sinuses-neti-pots-safe"},
    {"label": "FDA: Diphenhydramine Overdose and Misuse Warning (2020)", "href": "https://www.fda.gov/drugs/drug-safety-and-availability/fda-warns-about-serious-problems-high-doses-allergy-medicine-diphenhydramine-benadryl"},

    {"label": "FDA Karbinal ER Approved Label, supplement 015 (2026)", "href": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/022556Orig1s015lbl.pdf"},
    {"label": "NHS Hay Fever Self-Care (reviewed March 2024)", "href": "https://www.nhs.uk/conditions/hay-fever/"},
    {"label": "Mayo Clinic: Petroleum Jelly and Nasal Dryness (March 2023)", "href": "https://www.mayoclinic.org/diseases-conditions/pneumonia/expert-answers/petroleum-jelly/faq-20057784"},

    {"label": "DailyMed Children’s Allegra Allergy 30 mg ODT (February 2025)", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=06115cea-5a44-409d-85ed-bb71743491c1"},
    {"label": "DailyMed Dr. Reddy’s Desloratadine ODT (September 2023 prescribing text)", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=e5d1f465-e436-b4fd-d351-07a7b2acb440&type=display"},

    {"label": "DailyMed Allegra-D 24 Hour (January2026)", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=1fb77d6a-fae2-40ae-8f8e-fa2dc66f4403"},
    {"label": "DailyMed Claritin-D 12 Hour (December2025 listing)", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a7125705-01ff-4418-8c53-9209c2bbb484"},
    {"label": "DailyMed Clarinex-D 12 Hour (current listing; prescribing highlights revised June2021)", "href": "https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=1af66b7a-4ab8-40d8-abdd-22d3310228a8&type=display"},
    {"label": "DailyMed Allegra-D 12 Hour (January2026)", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=b32e172a-abf5-4c17-aa39-19e517952b91"},
    {"label": "DailyMed Claritin-D 24 Hour", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=f046a807-ab8c-0620-e053-2a95a90a9d3c"},
    {"label": "DailyMed prescription azelastine 0.1% (March2021 prescribing text; January2026 listing)", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=bca75501-4140-4d77-e053-2a95a90a019f&type=display"},
    {"label": "AAAAI/ACAAI Rhinitis 2008: pathophysiology background, statements 13-14 (not current treatment guidance)", "href": "https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/rhinitis2008-diagnosis-management.pdf"},
    {"label": "AAO-HNSF Immunotherapy for Inhalant Allergy (2024)", "href": "https://aao-hnsfjournals.onlinelibrary.wiley.com/doi/10.1002/ohn.648"},
    {"label": "DailyMed Chlorphen-12 (December 2018)", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=84409269-fe9b-469e-9a66-27b1475231a3"},
    {"label": "MedlinePlus chlorpheniramine administration", "href": "https://medlineplus.gov/druginfo/meds/a682543.html"},
    {"label": "Historical clemastine 1.34 mg OTC (May 2012; inactive NDC)", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9aa4a1f9-fb03-4698-a278-4bbb6698b009"},
    {"label": "DailyMed Desloratadine Oral Solution (July 2025 prescribing text)", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=41d5e0d4-6188-847b-e063-6294a90a2e2f&type=display"},
    {"label": "DailyMed Children’s Allegra Allergy Suspension Drug Facts (January 2026)", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=e2bd23c7-dfba-463a-adbe-2183970da740&type=display"},
    {"label": "DailyMed Children’s Zyrtec Syrup Drug Facts (October 2025)", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=9d8e78ea-af98-4f7c-8db5-044b49582f80&type=display"},

    {"label": "DailyMed Children’s Claritin Grape Solution Drug Facts (May 2025)", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=170061e9-e529-4ff0-e054-00144ff8d46c&type=display"},
    {"label": "DailyMed Children’s Claritin 5 mg Chewable Drug Facts (December 2025)", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=20938e05-bc3e-51aa-e054-00144ff88e88&type=display"},
    {"label": "DailyMed Claritin RediTabs 10 mg Drug Facts (December 2025)", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=b681ea25-d00b-4c8a-8054-cc6f983ce337&type=display"},

    {"label": "ARIA-EAACI 2024-2025 Part II: Oral and Ocular Treatments (2026)", "href": "https://onlinelibrary.wiley.com/doi/10.1111/all.70305"},

    {"label": "DailyMed Clemastine 2.68 mg (August 2024 prescribing text)", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=cf8a3449-8bb3-4d5c-8d0d-557590e49ee5&type=display"},
    {"label": "DailyMed Carbinoxamine Immediate Release (May 2023 prescribing text)", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=9d11b197-cfdc-4b9b-9935-2920ccb6e522&type=display"},

    {"label": "DailyMed Benadryl Ultratabs (October 2024)", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=76433e3c-142c-4704-8b2b-d602f008c377&type=display"},
    {"label": "DailyMed Chlorpheniramine 4 mg (December 2025)", "href": "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=75269bcc-3bb2-49a0-8788-6b7da18796d3"},
    {"label": "DailyMed Unisom SleepTabs (March 2026)", "href": "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7ae32d74-76a0-47e2-9e5c-812426413c4e"},
    {"label": "DailyMed Karbinal ER (March 2026)", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=c40b3f4e-2d71-41a1-a1fc-f64f38724879"},

    {"label": "DailyMed Beconase AQ historical U.S. labeling (April 2005)", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=6e8f7981-f2ca-4b56-8759-4f18cf9706c8&type=display"},
    {"label": "DailyMed Flunisolide Ingenus (August 2024)", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=f39cae46-c68f-47ef-82f3-4fd3dd46c74c"},
    {"label": "DailyMed Sinuva (January 2023)", "href": "https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=e33c1b23-cdc6-4f64-94ba-24b0b42c09bf&type=display"},

    { label: "AAAAI Reducing Allergen Exposure (July 2026)", href: "https://www.aaaai.org/tools-for-the-public/conditions-library/allergies/allergic-rhinitis" },
    { label: "AAAAI Allergy Testing (June 2026)", href: "https://www.aaaai.org/tools-for-the-public/conditions-library/allergies/allergy-testing" },
    { label: "ACAAI Allergy Testing: Medication Interference and Interpretation", href: "https://acaai.org/resource/allergy-testing/" },
    { label: "Shtessel and Tversky: Reliability of Allergy Skin Testing (2018)", href: "https://pubmed.ncbi.nlm.nih.gov/29273134/" },
    { label: "AAAAI Mast-Cell Activation: Mechanism Overview (August 2026)", href: "https://www.aaaai.org/conditions-treatments/related-conditions/mcas" },
    { label: "AAO-HNSF Allergic Rhinitis Guideline: Key Recommendations (2015)", href: "https://www.entnet.org/resource/aao-hnsf-cpg-allergic-rhinitis-press-release-fact-sheet/" },
    { label: "DailyMed Rhinocort Allergy Drug Facts (March 2023 listing)", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1ae1c5e8-16c6-4799-9a62-96d974c30f1f" },
    { label: "ACAAI Managing Allergies During Pregnancy (2024 handout)", href: "https://acaai.org/wp-content/uploads/2026/02/ACAAI_ManagingAllergiesDuringPregnancy_24_English.pdf" },
    { label: "DailyMed Xyzal Allergy 24HR Tablet Drug Facts (March 2026)", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8be45c2a-1eca-4a00-81b9-f7babdbdcd41" },
    { label: "DailyMed Xyzal Prescription Label (July 2025)", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=1673f7ff-0c7c-4403-86cf-c05eb1475222&type=display" },
    { label: "DailyMed Claritin 10 mg Tablet Drug Facts (November 2025)", href: "https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a34e8cb7-4fdf-45be-b288-45d93eef6220&type=display" },
    { label: "DailyMed Desloratadine Tablets (April 2026)", href: "https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a3b61ab9-ec20-4831-b69a-fcd913fce540&type=display" },
    { label: "DailyMed Allegra 12/24 Hour Drug Facts", href: "https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=81c1dcbb-28b3-4ad5-9f3d-9ccc16ddd173&type=display" },
    { label: "DailyMed Zyrtec 10 mg Tablet Drug Facts", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=b165db38-b302-4220-8627-77cb07bb078c&type=display" },
    { label: "FDA Cetirizine and Levocetirizine Discontinuation Itching Warning (2025)", href: "https://www.fda.gov/drugs/drug-safety-communications/fda-requires-warning-about-rare-severe-itching-after-stopping-long-term-use-oral-allergy-medicines" },
    { label: "DailyMed Zaditor Drug Facts", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=ac66b1e4-c2b0-a4c3-09e3-ebd44a2f7c9f&type=display" },
    { label: "DailyMed Pataday Once Daily Relief 0.2% Drug Facts", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1c7d2342-ba1c-4244-9814-d92a05725d4e" },
    { label: "DailyMed NasalCrom (June 2026)", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=b34d36ca-4df4-458c-af0f-c0d0c9a025d9&type=display" },
    { label: "DailyMed Ipratropium Nasal 0.03%", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=fcf20db7-091d-40de-8755-03773fc47edd&type=display" },
    { label: "DailyMed Ipratropium Nasal 0.06%", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=ee0ac556-8a23-4d5c-a5da-881c1fc6a339&type=display" },
    { label: "AAAAI Allergy Shot Tips (June 2026)", href: "https://www.aaaai.org/tools-for-the-public/conditions-library/allergies/allergy-shot-tips" },
    { label: "AAAAI Asthma, Allergies and Pregnancy (June 2026)", href: "https://www.aaaai.org/tools-for-the-public/conditions-library/asthma/asthma,-allergies-and-pregnancy-ttr" },
    { label: "FDA Grastek Prescribing Information", href: "https://www.fda.gov/media/88510/download" },
    { label: "DailyMed Oralair Prescribing Information", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=854c9772-63b9-44a3-a11e-77b29c59e91d&type=display" },
    { label: "FDA Ragwitek Prescribing Information", href: "https://www.fda.gov/media/88712/download?attachment=" },
    { label: "FDA Odactra Prescribing Information (June 2026)", href: "https://www.fda.gov/media/103380/download" },
    { label: "CDC Safe Sinus Rinsing", href: "https://www.cdc.gov/naegleria/prevention/sinus-rinsing.html" },
    { label: "DailyMed Afrin Original 0.05%", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=89c165ba-3ad5-49b5-a5bb-423dc8e15bad&type=display" },
    { label: "AAAAI and ACAAI Rhinitis 2020 Practice Parameter", href: "https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/Rhinitis-2020-A-practice-parameter-update.pdf" },
    { label: "FDA Montelukast Boxed Warning", href: "https://www.fda.gov/drugs/drug-safety-communications/fda-requires-boxed-warning-about-serious-mental-health-side-effects-asthma-and-allergy-drug" },
    { label: "FDA Allergen Extract Sublingual Tablets", href: "https://www.fda.gov/vaccines-blood-biologics/allergenics/allergen-extract-sublingual-tablets" },
    { label: "ARIA-EAACI 2024-2025 Intranasal Treatment Guideline (published 2025; 2026 issue)", href: "https://onlinelibrary.wiley.com/doi/10.1111/all.70131" },
    { label: "DailyMed Astepro Allergy (December 2025)", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=e0640846-19a6-7f79-e053-2995a90a8176&type=display" },
    { label: "DailyMed Dymista (December 2024)", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=4c557ec4-c4cf-11df-851a-0800200c9a66&type=display" },
    { label: "DailyMed Flonase Allergy Relief (December 2024)", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=b6134ba0-b70a-4eac-9a82-cef64b242c1d&type=display" },
    { label: "DailyMed Flonase Sensimist (December 2024)", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=107100af-7ca2-44e8-b067-c0ab0a19a6dc&type=display" },
    { label: "DailyMed Xhance (May 2026)", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=44fcea33-8cfa-3a5c-e063-6394a90aafb2&type=display" },
    { label: "DailyMed Nasacort Allergy 24HR (January 2026)", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=4bff57a5-cce0-401c-a0fe-23c65c1b7ddc&type=display" },
    { label: "DailyMed Nasonex 24HR Allergy", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=13696a8b-366a-4a5e-adea-d5b7bff9e46f&type=display" },
    { label: "DailyMed Olopatadine Nasal Spray (November 2025)", href: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=3aa27224-7b72-38eb-0c21-b8d73525ee85&type=display" },
    { label: "DailyMed Ryaltris (July 2026)", href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=406be932-f00e-4c66-9dd1-c142090fe822" },
    {"label": "DailyMed Omnaris (May 2019 prescribing information)", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=15fefd46-ac7e-40d0-b635-e6c3d653c666&type=display"},
    {"label": "DailyMed Zetonna (August 2024)", "href": "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=f0316d1b-9ba8-4ef3-9802-4cfed5d91d55&type=display"},
    {"label": "DailyMed Qnasl (September 2022)", "href": "https://www.dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=4b8d8e84-b5d2-4e56-97ec-4f72971465c5"},
    { label: "DailyMed Current Medication Labeling", href: "https://dailymed.nlm.nih.gov/dailymed/" },
  ],
  questionBank: allergicRhinitisQuestionBank,
};

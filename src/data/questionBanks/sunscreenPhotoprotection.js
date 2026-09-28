const concept = (name, lesson, principle, action, assessment, hazard, why) => ({ name, lesson, principle, action, assessment, hazard, why });

const concepts = [
  concept("UVA biology", "uv-radiation-biology", "UVA penetrates more deeply than UVB and contributes to photoaging, pigment change, oxidative stress, and carcinogenesis", "Use broad-spectrum protection rather than relying on SPF alone", "Assess cumulative exposure, photosensitivity, pigment concerns, and the product broad-spectrum claim", "Treating lack of sunburn as proof that UVA injury did not occur", "UVA injury can occur without an obvious burn"),
  concept("UVB biology", "uv-radiation-biology", "UVB is a major driver of erythema and direct DNA photodamage and is the principal radiation represented by SPF testing", "Connect SPF with UVB protection while still requiring broad-spectrum coverage", "Assess burn history, exposure intensity, altitude, reflection, time of day, and protection used", "Converting SPF into a fixed number of safe minutes outdoors", "Exposure intensity and application conditions change continuously"),
  concept("skin tone and ultraviolet injury", "uv-radiation-biology", "Melanin changes visible erythema and baseline protection but does not eliminate photoaging, pigment disorders, or skin cancer risk", "Recommend photoprotection across every skin tone", "Assess erythema in context, pigment change, lesions, family history, medications, and exposure", "Assuming darker skin does not need sun protection", "Risk and presentation vary, but ultraviolet injury remains possible"),
  concept("broad-spectrum labeling", "label-literacy", "Broad spectrum indicates tested protection against both UVA and UVB radiation", "Choose a broad-spectrum product as one layer of protection", "Read the Drug Facts and principal display panel for broad spectrum, SPF, water resistance, and directions", "Choosing a high SPF product that lacks broad-spectrum protection", "SPF alone does not describe UVA protection"),
  concept("SPF interpretation", "label-literacy", "SPF primarily represents relative UVB erythema protection under standardized test conditions", "Use SPF 30 or higher when following AAD consumer guidance and apply it correctly", "Assess product SPF, amount, coverage, timing, reapplication, and environmental intensity", "Multiplying baseline burn time by SPF to schedule unrestricted exposure", "SPF is related to ultraviolet dose, not a personal countdown clock"),
  concept("water-resistance labeling", "label-literacy", "Water-resistant sunscreen must state whether testing supports 40 or 80 minutes of protection while swimming or sweating", "Reapply according to the label and immediately after swimming, sweating, or toweling", "Read the exact 40- or 80-minute claim and activity plan", "Calling a sunscreen waterproof or sweatproof", "All sunscreen eventually wears or washes off"),
  concept("zinc oxide and titanium dioxide", "filter-pharmacology", "Zinc oxide and titanium dioxide are mineral ultraviolet filters recognized in the current FDA sunscreen framework", "Choose an acceptable product that meets protection needs and is used consistently", "Assess active ingredients, broad-spectrum claim, skin sensitivity, tint, cast, and adherence", "Claiming mineral filters work only by reflection", "Metal oxide filters protect substantially through absorption as well as scattering"),
  concept("organic ultraviolet filters", "filter-pharmacology", "Organic filters absorb ultraviolet energy at molecule-specific wavelengths and are often combined to create broad coverage", "Evaluate the finished product and current label rather than declaring an entire filter type unsafe", "Assess active ingredients, allergy history, irritation, broad-spectrum testing, and patient preference", "Equating an FDA request for more data with proof of harm", "Evidence status and demonstrated toxicity are not the same claim"),
  concept("finished-product selection", "filter-pharmacology", "Clinical protection depends on the tested finished formulation, film formation, amount, coverage, and continued use", "Select a tolerable broad-spectrum, water-resistant SPF 30 or higher product the patient will apply adequately", "Assess vehicle, skin type, activity, cost, access, cosmetic acceptance, and application technique", "Ranking isolated active ingredients without considering formulation performance", "A product that is not used cannot provide intended protection"),
  concept("application timing", "application-quantity", "Sunscreen should generally be applied about 15 minutes before outdoor exposure according to FDA and AAD directions", "Apply before exposure and allow a complete even film to form", "Assess departure time, dressing, makeup, missed areas, and product directions", "Waiting until skin is already exposed or burning", "Protection depends on a complete film being present before exposure"),
  concept("adult body quantity", "application-quantity", "Most adults need at least about one ounce to cover exposed body skin adequately", "Use approximately a shot-glass amount for full exposed-body coverage and adjust for body size", "Assess exposed surface area, product form, package size, and actual amount used", "Stretching a small facial amount over the entire body", "Underdosing reduces achieved protection"),
  concept("face and missed-area coverage", "application-quantity", "Ears, lips, hairline, scalp, neck, hands, and tops of feet are commonly missed", "Use enough product on the face and protect lips with broad-spectrum SPF 30 or higher balm", "Inspect the exposure map and ask who can help reach the back", "Treating the center of the face while leaving high-exposure edges uncovered", "Protection fails at gaps in the film"),
  concept("two-hour reapplication", "reapplication-water", "Sunscreen is generally reapplied at least every two hours while outdoors", "Reset protection on schedule and sooner after swimming, sweating, or toweling", "Assess time outdoors, activity, product access, reminders, and application over makeup or equipment", "Applying once in the morning for an entire outdoor day", "The protective film degrades and is physically removed"),
  concept("swimming sweating and toweling", "reapplication-water", "Water resistance does not survive indefinitely and toweling can remove the protective film", "Reapply immediately after these events according to product directions", "Assess water-resistance duration, swim intervals, sweating, towel use, and spare product", "Waiting for the next two-hour mark after vigorous swimming", "Event-triggered reapplication can occur before the clock interval"),
  concept("product storage and expiration", "reapplication-water", "Excess heat, direct sun, expiration, and container damage can compromise reliable use", "Avoid excessive heat and direct sun; discard expired or abnormal product and undated sunscreen three years after purchase or when its age is unknown", "Assess expiration date, storage location, odor, separation, container integrity, and label", "Leaving sunscreen in direct sun or extreme vehicle heat and assuming unchanged performance", "Product condition is part of dose reliability"),
  concept("layered photoprotection", "photoprotection-system", "Sunscreen is one layer alongside shade, clothing, hats, sunglasses, and exposure planning", "Build redundant protection rather than trying to compensate with higher SPF alone", "Assess shade, garment coverage, UPF, hat brim, eye protection, schedule, and reflective surfaces", "Using sunscreen to justify unlimited exposure", "No sunscreen blocks all ultraviolet radiation"),
  concept("ultraviolet index and environment", "photoprotection-system", "Ultraviolet intensity varies with time, season, latitude, altitude, cloud, and reflection", "Use current local conditions to strengthen the protection plan", "Assess UV index, snow, water, sand, altitude, work setting, travel, and duration", "Assuming cool or cloudy weather means negligible ultraviolet exposure", "Temperature and visible brightness do not fully represent ultraviolet dose"),
  concept("indoor tanning", "photoprotection-system", "Indoor tanning exposes skin to carcinogenic ultraviolet radiation and is not a safe vitamin D strategy", "Avoid tanning devices and use non-ultraviolet cosmetic alternatives if desired", "Assess tanning use, motivations, skin changes, and counseling readiness", "Calling a base tan protective health preparation", "A UV-induced tan reflects ultraviolet exposure and injury; a sunless cosmetic tint is different"),
  concept("infants younger than six months", "special-populations", "Shade and protective clothing are first-line protection for infants younger than six months", "Ask the pediatrician first; AAP permits small amounts on limited exposed areas when shade and clothing are unavailable", "Assess age, shade, clothing, overheating, hydration, exposed area, and product ingredients", "Covering an infant heavily without monitoring heat", "Photoprotection must also prevent overheating"),
  concept("skin of color and visible light", "special-populations", "Visible light can worsen hyperpigmentation and melasma, particularly in darker skin tones", "Consider a tinted broad-spectrum SPF 30 or higher product containing iron oxides when pigment protection is important", "Assess tone match, white cast, pigment disorder, sensitivity, adherence, and broad-spectrum claim", "Choosing tint while ignoring ultraviolet protection and water resistance", "Visible-light protection complements rather than replaces ultraviolet protection"),
  concept("pregnancy and lactation", "special-populations", "Sunscreen selection in pregnancy and lactation is product-specific and should consider exposure, tolerability, labeling, and patient preference", "Use physical barriers and a suitable labeled product rather than retired pregnancy letters", "Assess ingredients, treated area, skin integrity, infant contact, allergy, and clinician guidance", "Assigning one obsolete pregnancy category to all sunscreens", "Formulation and actual exposure determine the decision"),
  concept("phototoxicity", "medication-photosensitivity", "Phototoxic reactions can occur when a drug or metabolite absorbs light and produces an exaggerated sunburn-like injury", "Review the exact medication label and strengthen avoidance and protection counseling", "Assess timing, dose, exposed distribution, erythema, edema, blistering, and artificial ultraviolet exposure", "Calling every medication-related sun reaction an allergy", "Phototoxicity can occur without prior immune sensitization"),
  concept("photoallergy", "medication-photosensitivity", "Photoallergic reactions are delayed immune reactions to a light-altered substance and often resemble eczematous dermatitis", "Stop suspect exposure when appropriate and obtain clinical evaluation for diagnosis and alternatives", "Assess latency, pruritus, eczematous morphology, spread beyond exposed sites, topical products, and recurrence", "Treating a spreading eczematous reaction as simple dose-dependent sunburn", "Mechanism changes evaluation and future avoidance"),
  concept("medication reconciliation for sun risk", "medication-photosensitivity", "Photosensitivity counseling must use the exact current label, patient exposure, and reaction history rather than a memorized universal list", "Reconcile prescription, OTC, topical, and supplement products and identify actionable label warnings", "Assess doxycycline, amiodarone, thiazides, retinoids, NSAIDs, sulfonamides, topicals, and recent changes as relevant", "Stopping therapy solely for a theoretical risk, or ignoring label-directed discontinuation when an actual reaction occurs", "Preventive counseling does not override label instructions to stop treatment for an actual reaction; doxycycline labeling directs discontinuation at the first skin erythema"),
  concept("spray sunscreen safety", "product-safety-tolerability", "Sprays can be useful but require adequate coverage, avoidance of inhalation, and fire precautions for flammable products", "Spray close to skin, rub in when directed, apply to the face using hands, and avoid ignition sources while applying and wearing flammable products", "Assess ventilation, wind, breathing disease, child cooperation, ignition sources, and coverage", "Spraying directly toward the face or near an open flame", "Delivery method creates inhalation and ignition hazards"),
  concept("irritant and allergic reactions", "product-safety-tolerability", "Burning, stinging, dermatitis, or eye irritation can arise from active or inactive ingredients", "Rinse eyes, stop the suspect product when appropriate, and select a tolerated alternative", "Assess morphology, timing, site, fragrance, preservatives, filters, damaged skin, and prior allergy", "Abandoning all photoprotection after one formulation reaction", "Vehicles and ingredients differ across products"),
  concept("sunburn and lesion triage", "monitoring-counseling", "Severe blistering, systemic symptoms, dehydration, eye involvement, extensive pain, or suspicious changing lesions need clinical assessment", "Provide supportive care for mild injury and escalate red flags promptly", "Assess area, depth, pain, fever, confusion, vomiting, hydration, medications, age, and lesion ABCDE features", "Treating every sun injury as a cosmetic inconvenience", "Severity and host factors determine risk"),
  concept("vitamin D counseling", "monitoring-counseling", "Intentional ultraviolet exposure is not recommended as a vitamin D strategy because diet, fortified foods, supplements, and clinical assessment avoid carcinogenic exposure", "Address deficiency risk through nutrition, testing when indicated, and clinician-guided supplementation", "Assess diet, malabsorption, bone health, medications, laboratory context, and supplement use", "Reducing sun protection to increase vitamin D", "A nutrient goal does not justify avoidable ultraviolet injury"),
];

// Specific assessment cases replace cross-topic distractors that could admit multiple valid answers.
const assessmentCases = [
  {
    "question": "A driver reports one-sided facial photoaging without frequent sunburn. Which exposure detail is most relevant?",
    "choices": [
      "Hours beside a side window and the glass UVA transmission properties",
      "Whether the car air conditioner is cold",
      "Whether sunscreen has a strong fragrance",
      "The color of the dashboard alone"
    ],
    "rationale": "Some glass transmits UVA. Glass construction and exposure duration matter; temperature does not measure UV dose."
  },
  {
    "question": "A skier burns on a cold bright day. Which assessment best explains the unexpected UV exposure?",
    "choices": [
      "Altitude, snow reflection, exposure duration, and protection used",
      "Air temperature alone",
      "Whether sunscreen felt warm when applied",
      "Whether the skier drank a cold beverage"
    ],
    "rationale": "Cold weather does not rule out substantial UV exposure; altitude and reflected radiation affect dose."
  },
  {
    "question": "A patient with deeply pigmented skin sees no redness after outdoor work. What should still be assessed?",
    "choices": [
      "Exposure, pigment changes, medication risks, and new or changing lesions",
      "Only visible redness because all injury is red",
      "Only the SPF number, regardless of use",
      "Only whether the patient tans easily"
    ],
    "rationale": "Erythema may be less apparent in darker skin. Lack of redness cannot establish absence of UV injury."
  },
  {
    "question": "Two products both say SPF 50. What label detail establishes tested UVA as well as UVB protection?",
    "choices": [
      "Broad spectrum",
      "Sport",
      "Water resistant alone",
      "Dermatologist tested alone"
    ],
    "rationale": "SPF and water resistance do not independently establish the broad-spectrum claim."
  },
  {
    "question": "A patient multiplies a usual 10-minute burn time by SPF 30 to plan five hours outdoors. What needs correction?",
    "choices": [
      "The assumption that SPF predicts safe elapsed exposure time",
      "The arithmetic, because 10 times 30 equals 30",
      "The assumption that SPF values appear on sunscreen",
      "The need to read the application directions"
    ],
    "rationale": "The arithmetic is 300 minutes, but the clinical inference is invalid: SPF describes a tested dose ratio, not a personal safe timer."
  },
  {
    "question": "A swimmer plans 60 minutes continuously in water. Which product detail determines whether labeled reapplication is already due at minute 40?",
    "choices": [
      "Whether water resistance is labeled 40 or 80 minutes",
      "Whether the package says sport",
      "Whether the SPF is over 50",
      "Whether the lotion is tinted"
    ],
    "rationale": "The tested water-resistance interval governs the in-water schedule; other descriptors do not replace it."
  },
  {
    "question": "A patient chooses a zinc oxide lotion solely because they believe it reflects every UV ray. What should be checked next?",
    "choices": [
      "Finished-product spectrum and SPF claims, plus application and tolerability",
      "Only whether it leaves a visible white film",
      "Only the word mineral",
      "Whether it can replace all clothing"
    ],
    "rationale": "Mineral filters also absorb UV. Ingredient identity and visible cast do not establish total protection."
  },
  {
    "question": "A patient says a request for more safety studies proves an organic filter is harmful. What evidence distinction matters?",
    "choices": [
      "Insufficient data and demonstrated harm are different conclusions",
      "Every request for data is a recall",
      "All organic filters have identical evidence",
      "Any measurable skin absorption proves toxicity"
    ],
    "rationale": "Evidence gaps require careful interpretation and do not by themselves demonstrate clinical harm."
  },
  {
    "question": "A patient applies a gritty SPF 100 lotion rarely but uses a comfortable broad-spectrum SPF 30 lotion generously. What selection issue is most actionable?",
    "choices": [
      "Acceptability and correct repeated use of a suitable finished product",
      "Always selecting the largest SPF number regardless of use",
      "Selecting solely by package price",
      "Avoiding all formulations after one disliked texture"
    ],
    "rationale": "Protection requires use. Adequate spectrum, amount, and continued application matter alongside the SPF value."
  },
  {
    "question": "A person leaves for the beach at 10:00. Using a direction to apply 15 minutes before exposure, when should the initial application be complete?",
    "choices": [
      "9:45",
      "10:15",
      "11:45",
      "Only after skin feels hot"
    ],
    "rationale": "Ten o clock minus 15 minutes is 9:45. Initial protection should precede exposure."
  },
  {
    "question": "An adult has a 3-ounce bottle and plans four full applications using one ounce each. What supply assessment is correct?",
    "choices": [
      "The plan requires 4 ounces, so the bottle is short by 1 ounce",
      "The bottle covers the plan with 1 ounce left",
      "The plan needs only one ounce because reapplication is thinner",
      "Bottle size is unrelated to the plan"
    ],
    "rationale": "Four applications times one ounce is four ounces. Each reapplication needs adequate coverage."
  },
  {
    "question": "A patient protects the cheeks and forehead but burns on the ears and scalp part. What should be assessed first?",
    "choices": [
      "Coverage of missed sites and use of a protective hat",
      "Whether a higher SPF alone will protect untreated skin",
      "Whether face lotion protects adjacent untreated areas",
      "Whether reapplication can be omitted on small areas"
    ],
    "rationale": "Sunscreen does not protect skin where it was never applied. Clothing and complete coverage address gaps."
  },
  {
    "question": "A patient applies sunscreen at 9:00 and stays outdoors without swimming or sweating. Which routine reapplication time follows a two-hour interval?",
    "choices": [
      "11:00",
      "13:00",
      "At sunset only",
      "Only when redness develops"
    ],
    "rationale": "Two hours after 9:00 is 11:00; an earlier removal event would require earlier reapplication."
  },
  {
    "question": "An athlete towels off 25 minutes after applying an 80-minute water-resistant product. Which detail determines the immediate next step?",
    "choices": [
      "The towel may have removed the film, so reapply now",
      "The SPF is high, so no reapplication is needed",
      "Only 25 minutes elapsed, so wait 55 minutes",
      "Water resistance guarantees protection after drying"
    ],
    "rationale": "Toweling is an event trigger independent of the remaining labeled water-resistance time."
  },
  {
    "question": "An undated bottle was purchased four years ago and looks normal. What should the pharmacist recommend?",
    "choices": [
      "Discard it and obtain a replacement",
      "Keep it until its color changes",
      "Use twice as much to restore potency",
      "Add fresh sunscreen to renew it"
    ],
    "rationale": "FDA advises discarding undated sunscreen three years after purchase; appearance cannot validate an older product."
  },
  {
    "question": "A beachgoer sits under an umbrella beside bright sand. What gap remains in the protection plan?",
    "choices": [
      "Reflected UV can still reach exposed skin",
      "Shade eliminates all indirect radiation",
      "Only sunscreen on the umbrella is needed",
      "A base tan eliminates reflected exposure"
    ],
    "rationale": "Shade reduces direct exposure but does not eliminate reflected UV; clothing and sunscreen remain useful."
  },
  {
    "question": "An outdoor worker judges sun risk only by how hot the day feels. Which additional assessment is useful?",
    "choices": [
      "Local UV index, time, reflection, and exposure duration",
      "Air-conditioning settings indoors",
      "Whether the sky looks blue in a photo",
      "Only wind chill"
    ],
    "rationale": "Heat sensation and UV intensity are different; assess conditions that determine UV exposure."
  },
  {
    "question": "A traveler books tanning sessions to prevent vacation sunburn. Which assumption should be addressed?",
    "choices": [
      "A base tan is a safe protective preparation",
      "Sunscreen should be reapplied outdoors",
      "Clothing can reduce exposure",
      "Travel location changes UV conditions"
    ],
    "rationale": "Intentional tanning adds carcinogenic UV exposure and is not a safe preparation strategy."
  },
  {
    "question": "Parents plan a midday outing with a 3-month-old. What should be assessed before selecting sunscreen?",
    "choices": [
      "Ability to avoid direct sun, provide shade and light clothing, and prevent overheating",
      "Whether an adult spray can be directed onto the face",
      "Whether a tan can develop before travel",
      "Whether heavy blankets can seal the stroller completely"
    ],
    "rationale": "Shade and clothing lead for young infants, with attention to heat and pediatrician advice before sunscreen use."
  },
  {
    "question": "A patient with melasma wants help choosing a tinted sunscreen. Which combination best addresses the treatment goal?",
    "choices": [
      "Iron oxides for visible-light protection plus appropriate broad-spectrum SPF claims",
      "Tint alone, regardless of UV protection",
      "Clear SPF 100 as proof of visible-light protection",
      "Any foundation shade as proof of tested broad-spectrum protection"
    ],
    "rationale": "Pigment-oriented visible-light protection complements UV protection; tint alone does not establish all claims."
  },
  {
    "question": "A pregnant patient wants a sunscreen likely to minimize irritation. Which option fits AAD guidance?",
    "choices": [
      "A suitable zinc oxide or titanium dioxide product with broad-spectrum SPF 30 or higher",
      "Avoid every sunscreen throughout pregnancy",
      "Use any organic filter because all are proven identical",
      "Assign one retired pregnancy letter to all products"
    ],
    "rationale": "AAD suggests mineral formulations to reduce irritation during pregnancy. This is not proof that every organic filter causes fetal harm."
  },
  {
    "question": "A patient develops a sharply exposed sunburn-like eruption after starting a medicine, without previous exposure to that drug. Which feature supports phototoxicity?",
    "choices": [
      "It can occur without prior immune sensitization",
      "It always requires prior sensitization",
      "It occurs only under covered clothing",
      "It proves an immediate IgE allergy"
    ],
    "rationale": "Phototoxicity is not dependent on prior immune sensitization and often resembles exaggerated sunburn."
  },
  {
    "question": "A pruritic eczematous eruption develops after repeated use of a topical product and sunlight, spreading beyond exposed sites. Which mechanism should be considered?",
    "choices": [
      "Delayed photoallergic hypersensitivity",
      "A diagnosis of simple thermal burn based solely on itching",
      "Guaranteed bacterial infection",
      "An SPF dose-ratio calculation"
    ],
    "rationale": "The pattern raises concern for photoallergy; clinical evaluation is needed rather than assuming ordinary sunburn."
  },
  {
    "question": "A patient taking doxycycline develops new erythema after sun exposure. What instruction matches the reviewed label?",
    "choices": [
      "Discontinue at the first skin erythema and promptly contact the prescriber for assessment and treatment planning",
      "Continue unchanged until the antibiotic course is finished",
      "Double sunscreen while ignoring the skin reaction",
      "Stop every prescription indefinitely"
    ],
    "rationale": "The doxycycline label specifically directs discontinuation at first skin erythema. Continued treatment of the underlying illness needs prompt coordination."
  },
  {
    "question": "A patient plans to grill after applying a sunscreen labeled flammable. What safety detail changes counseling?",
    "choices": [
      "Ignition precautions apply while wearing it, even after skin feels dry",
      "Drying proves ignition is impossible",
      "Only the SPF number determines fire risk",
      "Water resistance cancels flammability warnings"
    ],
    "rationale": "FDA warns of burns during application and wear. Choose a nonflammable product when flame exposure is foreseeable."
  },
  {
    "question": "A fragranced sunscreen causes recurrent local dermatitis. Which next step preserves protection while investigating the reaction?",
    "choices": [
      "Stop the suspect product, review ingredients and reaction history, and use tolerated alternatives and clothing",
      "Abandon all photoprotection permanently",
      "Apply more of the same product to desensitize the skin",
      "Assume every active filter is responsible without assessment"
    ],
    "rationale": "Active ingredients, fragrance, preservatives, or the vehicle can contribute. One formulation reaction does not establish intolerance to all products."
  },
  {
    "question": "A parent reports sunburn in an 8-month-old without blisters. What is the appropriate initial advice?",
    "choices": [
      "Contact the doctor right away because the infant is younger than one year",
      "Wait for extensive blistering before calling",
      "Apply an oral sunscreen supplement",
      "Assume mild appearance excludes the need for assessment"
    ],
    "rationale": "AAP recommends prompt doctor contact for sunburn in an infant younger than one year, even without the severe features used for older children."
  },
  {
    "question": "A patient fears that daily sunscreen inevitably causes vitamin D deficiency. What should the pharmacist assess?",
    "choices": [
      "Dietary intake, risk factors, and whether clinician-guided testing or supplementation is indicated",
      "How to schedule intentional sunburn",
      "Which tanning bed replaces dietary vitamin D",
      "Whether oral sunscreen can replace all protection"
    ],
    "rationale": "Address nutrient needs through nutrition and clinical assessment rather than prescribing carcinogenic UV exposure."
  }
];

const actionCases = [
  {
    "question": "A patient wants to reduce UVA exposure during a long car commute. Which plan best addresses that exposure?",
    "choices": [
      "Use broad-spectrum sunscreen on exposed skin and consider clothing and suitable UV-protective glazing or film",
      "Rely on the SPF number alone without checking spectrum",
      "Assume all closed car windows block UVA completely",
      "Use sunscreen only when the car becomes hot"
    ],
    "rationale": "Broad-spectrum coverage addresses UVA. Window protection varies, and temperature does not determine UV exposure."
  },
  {
    "question": "A patient buys SPF 50 sunscreen and asks how long they may remain outside without injury. What should the pharmacist say?",
    "choices": [
      "SPF cannot establish a safe exposure duration; combine correct use with exposure reduction",
      "Exactly 50 times the usual burn time",
      "Exactly 50 minutes",
      "Until the product becomes visibly dry"
    ],
    "rationale": "SPF reflects a standardized UV dose comparison, not a guarantee of safe elapsed time."
  },
  {
    "question": "An outdoor worker with dark skin has trouble noticing sunburn. Which counseling is appropriate?",
    "choices": [
      "Maintain photoprotection and assess changes in skin and symptoms without relying on visible redness alone",
      "Stop sunscreen because darker skin cannot develop UV injury",
      "Use sunscreen only after redness appears",
      "Use tanning beds to assess burn susceptibility"
    ],
    "rationale": "Melanin influences protection and appearance, but does not eliminate UV injury or the need for protection."
  },
  {
    "question": "A shopper finds SPF 70 without a broad-spectrum claim and SPF 30 with that claim. For a plan requiring UVA and UVB coverage, what should guide selection?",
    "choices": [
      "Choose a suitable broad-spectrum product and follow its directions",
      "Always select SPF 70 regardless of spectrum",
      "Treat any SPF claim as proof of equal UVA protection",
      "Ignore both claims and choose by fragrance"
    ],
    "rationale": "Broad spectrum establishes tested UVA and UVB coverage; a larger SPF alone does not."
  },
  {
    "question": "An adult asks for the AAD minimum SPF recommendation for routine sunscreen selection. What is appropriate?",
    "choices": [
      "Broad-spectrum SPF 30 or higher",
      "SPF 2 if applied once daily",
      "Any SPF if labeled sport",
      "SPF 100 with unlimited exposure"
    ],
    "rationale": "AAD recommends SPF 30 or higher alongside broad-spectrum protection and correct use."
  },
  {
    "question": "A patient will remain in the water beyond the 40-minute resistance interval printed on the bottle. What should they do?",
    "choices": [
      "Plan to leave the water and reapply by the labeled interval, following directions before returning",
      "Stay in the water until the two-hour outdoor interval",
      "Assume SPF 50 extends resistance to 80 minutes",
      "Wait until sunburn is visible"
    ],
    "rationale": "The product-specific water interval can require reapplication before two hours."
  },
  {
    "question": "A patient dislikes the cast of one zinc oxide lotion and consequently underapplies it. What is a reasonable next step?",
    "choices": [
      "Try a tolerable suitable formulation, possibly tinted, that can be applied in an adequate amount",
      "Apply only a barely visible trace of the same lotion",
      "Assume all sunscreens will be equally unacceptable",
      "Replace sunscreen with zinc tablets"
    ],
    "rationale": "Formulation and cosmetic acceptability affect adherence. A sufficient amount and appropriate protection claims remain necessary."
  },
  {
    "question": "After hearing about ingredient research, a patient wants to stop all sunscreen. What should the pharmacist do?",
    "choices": [
      "Explain the specific evidence status and offer a suitable product and physical protection the patient will use",
      "Say every organic filter is proven harmful",
      "Say every ingredient has identical evidence and no uncertainties",
      "Recommend intentional tanning instead"
    ],
    "rationale": "Evidence gaps should be described precisely while maintaining a usable protection plan."
  },
  {
    "question": "A swimmer wants a sunscreen that will stay comfortable during exercise. Which selection approach is best?",
    "choices": [
      "Choose broad-spectrum SPF 30 or higher with labeled water resistance and acceptable feel, then plan reapplication",
      "Choose any comfortable lotion even without sunscreen claims",
      "Choose by SPF alone and ignore water exposure",
      "Assume all products labeled sport have the same water interval"
    ],
    "rationale": "Protection claims, tolerability, activity, and reapplication all affect the finished product choice."
  },
  {
    "question": "A patient intends to apply sunscreen on arriving at an outdoor event. Which change best follows usual FDA and AAD timing advice?",
    "choices": [
      "Apply about 15 minutes before outdoor exposure",
      "Wait until the first break after an hour",
      "Apply only after a sunburn develops",
      "Apply only on the night before"
    ],
    "rationale": "Initial application should precede exposure rather than starting after UV has already reached untreated skin."
  },
  {
    "question": "An adult plans full exposed-body coverage with lotion. Which practical starting estimate is appropriate?",
    "choices": [
      "At least about one ounce, adjusted for body size and exposed area",
      "One teaspoon for the entire body regardless of size",
      "One drop per arm and leg",
      "An amount inversely proportional to SPF"
    ],
    "rationale": "One ounce is an approximate adult coverage estimate, not a universal dose for every body or activity."
  },
  {
    "question": "A patient wears sandals and has thinning hair. Which counseling closes common coverage gaps?",
    "choices": [
      "Protect the tops of the feet and exposed scalp, using adequate sunscreen and a suitable hat",
      "Apply only to the face because other sites rarely burn",
      "Assume nearby sunscreen spreads to untreated areas",
      "Use lip balm on the scalp instead of reading product directions"
    ],
    "rationale": "Exposed scalp and tops of feet are commonly missed and need direct protection."
  },
  {
    "question": "An adult will work outdoors all afternoon. Which reminder plan is appropriate if no earlier activity trigger occurs?",
    "choices": [
      "Reapply at least every two hours",
      "Reapply once at the end of the shift",
      "Reapply only if the product feels dry",
      "Reapply only when skin looks red"
    ],
    "rationale": "Routine outdoor reapplication is at least every two hours; waiting for injury is too late."
  },
  {
    "question": "A swimmer has just left the pool and dried with a towel. What should happen before more sun exposure?",
    "choices": [
      "Reapply sunscreen promptly according to directions",
      "Wait for two hours from the first application",
      "Assume water resistance survives toweling",
      "Apply only to visibly red spots"
    ],
    "rationale": "Water and toweling can remove the film, so the activity triggers reapplication."
  },
  {
    "question": "A sunscreen bottle has no expiration date and its purchase date is unknown. What should the patient do?",
    "choices": [
      "Replace it rather than assuming it is still within its useful life",
      "Use it indefinitely if it smells normal",
      "Add water to restore it",
      "Use it only on children"
    ],
    "rationale": "Unknown age prevents using the three-year-after-purchase rule reliably. Normal appearance does not establish age or effectiveness."
  },
  {
    "question": "A lifeguard asks whether higher SPF can replace a hat and protective clothing. What should the pharmacist recommend?",
    "choices": [
      "Keep multiple protective measures because sunscreen does not block all UV",
      "Use higher SPF to permit unlimited uncovered exposure",
      "Remove the hat whenever sunscreen is fresh",
      "Replace all physical barriers with a base tan"
    ],
    "rationale": "Clothing, shade, timing, and sunscreen provide complementary protection."
  },
  {
    "question": "A family plans a snowy mountain outing on a cool day. Which adjustment is appropriate?",
    "choices": [
      "Plan protection for altitude and reflected UV despite the cold",
      "Skip sunscreen because freezing temperatures prevent UV injury",
      "Protect only when sweating",
      "Rely on cloud cover to eliminate UV"
    ],
    "rationale": "UV exposure depends on more than temperature; altitude and snow reflection can increase exposure."
  },
  {
    "question": "A patient wants a cosmetic tan before travel. Which advice avoids intentional UV exposure?",
    "choices": [
      "Consider a sunless cosmetic option while continuing photoprotection",
      "Use short tanning-bed sessions as a safe preparation",
      "Build a base tan through repeated sunburn",
      "Assume a sunless tan provides SPF without a labeled claim"
    ],
    "rationale": "Sunless color does not require deliberate UV exposure, but does not establish sunscreen protection."
  },
  {
    "question": "Shade and clothing are temporarily unavailable for a young infant. What counseling best reflects FDA and AAP advice?",
    "choices": [
      "Ask the pediatrician; AAP allows small amounts on limited exposed areas while restoring shade and clothing as soon as possible",
      "Apply a full-body aerosol cloud around the infant",
      "Keep the infant in direct sun to build tolerance",
      "Avoid all protection because sunscreen is never considered"
    ],
    "rationale": "FDA advises consulting the doctor before use under six months; AAP describes a limited exposed-area exception when preferred protection is unavailable."
  },
  {
    "question": "A patient with melasma tolerates tinted sunscreen well. How should it fit the plan?",
    "choices": [
      "Use a suitable broad-spectrum product with iron oxides alongside other protection",
      "Use tint as a substitute for UVA and UVB claims",
      "Apply it only after pigment darkens",
      "Use a thinner layer because tinted products cannot be underdosed"
    ],
    "rationale": "Iron oxides can add visible-light protection, while UV claims and adequate application remain necessary."
  },
  {
    "question": "A breastfeeding patient asks about applying sunscreen where the infant may place their mouth. What is the appropriate approach?",
    "choices": [
      "Review the exact product and contact site and avoid infant mouth exposure to treated skin while maintaining other protection",
      "Declare every sunscreen safe for ingestion by the infant",
      "Assign one pregnancy letter to decide lactation use",
      "Stop all shade and clothing measures"
    ],
    "rationale": "Lactation counseling should address actual infant contact and product labeling rather than a universal safety classification."
  },
  {
    "question": "A patient has a new sunburn-like rash after a medicine change. What should happen before giving a blanket continue-or-stop instruction?",
    "choices": [
      "Assess severity, exposure timing, and the exact medicine label, including reaction-specific discontinuation directions",
      "Assume every reaction is harmless and continue all drugs",
      "Stop every prescription regardless of indication",
      "Diagnose photoallergy solely from redness"
    ],
    "rationale": "Management depends on the actual product and reaction. Severe features require urgent care, and some labels direct immediate discontinuation."
  },
  {
    "question": "A patient has recurrent delayed itchy eczema after a topical product and sunlight. What is the best next step?",
    "choices": [
      "Avoid the suspect exposure and seek clinical evaluation for possible photoallergy and alternatives",
      "Keep reapplying the suspected product to build tolerance",
      "Treat all recurrence as proof of bacterial infection",
      "Ignore spread beyond exposed skin"
    ],
    "rationale": "An immune-mediated pattern needs evaluation and avoidance planning, not deliberate repeated exposure."
  },
  {
    "question": "A patient starts doxycycline but has no skin reaction. Which preventive instruction is appropriate?",
    "choices": [
      "Limit sun and artificial UV exposure and follow protection advice, with prompt action if erythema develops",
      "Stop the drug immediately solely because photosensitivity is possible",
      "Use a tanning bed instead of sunlight",
      "Ignore erythema until the next routine visit"
    ],
    "rationale": "Theoretical risk calls for prevention; the reviewed label directs discontinuation at the first skin erythema if a reaction occurs."
  },
  {
    "question": "A patient wants to apply spray sunscreen to the face. Which technique is appropriate?",
    "choices": [
      "Spray into the hands first, then apply while avoiding eyes and inhalation",
      "Spray directly toward the nose with eyes closed",
      "Spray into the air and walk through the mist",
      "Apply next to a lit cigarette"
    ],
    "rationale": "Hand application reduces direct inhalation and eye exposure. Adequate coverage and ignition precautions still matter."
  },
  {
    "question": "Sunscreen enters a patient's eye and causes irritation. What should they do first?",
    "choices": [
      "Rinse with water and seek care if symptoms persist or are significant",
      "Rub more sunscreen into the eye",
      "Neutralize it with another cosmetic",
      "Ignore persistent pain or visual symptoms"
    ],
    "rationale": "Rinsing removes irritant material; persistent or significant eye symptoms warrant assessment."
  },
  {
    "question": "A patient shows a 4-mm lesion that recently changed color and started bleeding. What is appropriate?",
    "choices": [
      "Arrange prompt clinical evaluation despite its small diameter",
      "Wait until it exceeds 6 mm",
      "Treat with sunscreen alone",
      "Diagnose melanoma from size alone"
    ],
    "rationale": "Evolution and symptoms warrant evaluation. Melanoma can be smaller than 6 mm, and this description does not establish a diagnosis."
  },
  {
    "question": "A patient wants to use an oral antioxidant marketed as sunscreen instead of topical protection. What should the pharmacist advise?",
    "choices": [
      "It does not replace labeled topical sunscreen, clothing, or shade",
      "It provides the same SPF as any lotion",
      "It removes the need for reapplication outdoors",
      "It makes intentional tanning safe"
    ],
    "rationale": "Oral products should not be treated as substitutes for established topical and physical photoprotection."
  }
];

const dimensions = [["principle", "Which principle best characterizes"], ["action", "Which clinical action best applies to"], ["assessment", "Which assessment is most appropriate for"], ["hazard", "Which reasoning hazard is most important to prevent with"]];
const principleDistractors = [
  [
    "UVA is completely excluded by every type of window glass",
    "UVA injury always produces an obvious sunburn",
    "UVA has no role in photoaging"
  ],
  [
    "SPF measures protection from visible light alone",
    "UVB cannot damage DNA",
    "SPF is a fixed safe exposure duration"
  ],
  [
    "Deeply pigmented skin cannot develop skin cancer",
    "Visible redness is required for ultraviolet injury",
    "Every skin tone shows erythema identically"
  ],
  [
    "SPF alone establishes equal UVA and UVB coverage",
    "Sport is the regulated synonym for broad spectrum",
    "Water resistance alone proves UVA protection"
  ],
  [
    "SPF 30 guarantees 30 safe minutes outdoors",
    "SPF can replace a reapplication schedule",
    "SPF is a measurement of remaining film thickness"
  ],
  [
    "Water resistant means waterproof for the entire day",
    "Every water-resistant product lasts 80 minutes",
    "Higher SPF automatically extends water resistance"
  ],
  [
    "Mineral filters work only by reflection",
    "A white cast proves complete UV protection",
    "Zinc oxide content alone establishes the finished-product SPF"
  ],
  [
    "Every organic filter has the same absorption profile",
    "Additional data requests prove clinical toxicity",
    "Every organic filter has been removed from US sunscreen use"
  ],
  [
    "The isolated ingredient name alone determines actual protection",
    "Application quantity has no effect on protection",
    "A disliked product protects even if it is never used"
  ],
  [
    "First application should wait until redness appears",
    "Sunscreen is applied only after exposure",
    "A previous evening application guarantees all-day protection"
  ],
  [
    "One teaspoon is sufficient for every adult body",
    "A higher SPF permits an arbitrarily smaller amount",
    "The same volume covers every possible body size"
  ],
  [
    "Sunscreen protects nearby skin even when that skin is untreated",
    "The scalp never needs protection",
    "Lip protection is unnecessary outdoors"
  ],
  [
    "One morning application always lasts until sunset",
    "The two-hour recommendation begins only after skin burns",
    "Higher SPF removes the need for repeat applications"
  ],
  [
    "Toweling leaves every sunscreen film unchanged",
    "Water resistance is permanent",
    "A two-hour schedule always overrides an earlier removal event"
  ],
  [
    "An undated bottle never expires",
    "Normal appearance proves effectiveness at any age",
    "Extreme heat reliably improves sunscreen stability"
  ],
  [
    "Sunscreen blocks all ultraviolet radiation",
    "Shade eliminates all reflected ultraviolet radiation",
    "Higher SPF permits unlimited exposure"
  ],
  [
    "Cold air prevents ultraviolet injury",
    "UV intensity is determined only by temperature",
    "Cloud cover always eliminates the need for protection"
  ],
  [
    "A base tan eliminates skin cancer risk",
    "Indoor tanning is a recommended vitamin D treatment",
    "Short tanning sessions contain no carcinogenic radiation"
  ],
  [
    "Heavy sealed coverings eliminate heat risk in infants",
    "Direct midday sun is preferred for infants",
    "Sunscreen makes unlimited infant sun exposure appropriate"
  ],
  [
    "Tint alone establishes broad-spectrum UV protection",
    "All clear sunscreens provide identical visible-light protection",
    "Darker skin cannot have pigmentary light injury"
  ],
  [
    "Every formulation has the same pregnancy and lactation evidence",
    "A retired pregnancy letter determines infant contact safety",
    "Sunscreen should always replace shade during pregnancy"
  ],
  [
    "Phototoxicity always requires prior immune sensitization",
    "Phototoxicity never resembles sunburn",
    "All phototoxic reactions are IgE-mediated allergies"
  ],
  [
    "Photoallergy is always immediate and nonimmune",
    "Photoallergy cannot spread beyond exposed skin",
    "An itchy delayed eruption excludes photoallergy"
  ],
  [
    "All photosensitizing medicines have identical stop instructions",
    "Possible photosensitivity requires stopping every medicine before any reaction",
    "An actual doxycycline erythema reaction can be ignored"
  ],
  [
    "Drying eliminates all fire precautions for flammable sunscreen",
    "Direct facial spraying is preferred to hand application",
    "A fine airborne mist guarantees adequate coverage"
  ],
  [
    "Only active ingredients can cause reactions",
    "A reaction to one vehicle proves intolerance to every sunscreen",
    "Persistent eye pain after exposure needs no assessment"
  ],
  [
    "Melanoma is excluded when diameter is less than 6 mm",
    "Infant sunburn needs advice only if blistering occurs",
    "Confusion accompanying sun injury is routine minor sunburn"
  ],
  [
    "Tanning beds are a preferred vitamin D source",
    "Every sunscreen user inevitably develops deficiency",
    "Oral sunscreen supplements replace physical protection"
  ]
];
const generated = concepts.flatMap((item, index) => dimensions.map(([field, stem], dimensionIndex) => ({
  id: `sunscreen-photoprotection-${String(index * 4 + dimensionIndex + 1).padStart(3, "0")}`,
  lesson: item.lesson,
  question: field === "action" ? actionCases[index].question : field === "assessment" ? assessmentCases[index].question : field === "hazard" ? `Which approach to ${item.name} should be avoided?` : `${stem} ${item.name}?`,
  choices: field === "action" ? actionCases[index].choices : field === "assessment" ? assessmentCases[index].choices : field === "hazard" ? [item.hazard, item.principle, item.action, item.assessment] : [item.principle, ...principleDistractors[index]],
  answer: 0,
  rationale: field === "action" ? actionCases[index].rationale : field === "assessment" ? assessmentCases[index].rationale : item.why,
  reviewHref: `#${item.lesson}`,
})));

const calculation = (id, question, choices, rationale) => ({ id, lesson: "application-quantity", question, choices, answer: 0, rationale, reviewHref: "#application-quantity" });
const calculations = [
  calculation("sunscreen-photoprotection-113", "An adult uses one ounce for each full exposed-body application and plans three complete applications. How much sunscreen is needed?", ["3 ounces", "1 ounce", "2 ounces", "6 ounces"], "One ounce per application multiplied by three applications equals three ounces."),
  calculation("sunscreen-photoprotection-114", "A family plans four complete 30 mL applications for one adult. What total volume is required?", ["120 mL", "30 mL", "60 mL", "240 mL"], "Thirty milliliters multiplied by four applications equals one hundred twenty milliliters."),
  calculation("sunscreen-photoprotection-115", "A test application uses 2 mg per square centimeter over 1,000 square centimeters. What mass is required?", ["2 grams", "0.5 gram", "1 gram", "20 grams"], "Two milligrams multiplied by one thousand equals two thousand milligrams, or two grams."),
  calculation("sunscreen-photoprotection-116", "A traveler expects to use one ounce daily for seven days. What minimum trip quantity covers those planned applications?", ["7 ounces", "3.5 ounces", "14 ounces", "1 ounce"], "One ounce per day multiplied by seven days equals seven ounces for the stated plan only. This is not a recommendation for once-daily application; outdoor time and removal events may require more product."),
];

const regulatoryCases = [
  {
    "id": "sunscreen-photoprotection-117",
    "lesson": "filter-pharmacology",
    "question": "As of the September 24, 2026 review, how should the PABA and trolamine salicylate final order be described?",
    "choices": [
      "Issued September 11, 2026, with a stated effective date of September 11, 2027, subject to the statutory dispute process",
      "An immediate recall of every US sunscreen",
      "A finding that all organic filters have identical safety evidence",
      "A final determination of every provision in the 2021 proposal"
    ],
    "answer": 0,
    "rationale": "The order concerns two ingredients and specifies a future effective date. Issuance and effectiveness are distinct; it does not finalize the other proposed provisions.",
    "reviewHref": "#filter-pharmacology"
  },
  {
    "id": "sunscreen-photoprotection-118",
    "lesson": "filter-pharmacology",
    "question": "What does the FDA bemotrizinol order establish?",
    "choices": [
      "Use up to 6% under specified monograph conditions, not guaranteed local retail availability",
      "Use at any concentration in every formulation",
      "An exemption from finished-product testing",
      "Protection that never needs reapplication"
    ],
    "answer": 0,
    "rationale": "The order sets concentration and formulation conditions. Regulatory authorization does not prove that a specific product is stocked locally.",
    "reviewHref": "#filter-pharmacology"
  },
  {
    "id": "sunscreen-photoprotection-119",
    "lesson": "filter-pharmacology",
    "question": "A learner describes all 2021 proposed sunscreen requirements as current final rules. What should be corrected?",
    "choices": [
      "Each provision needs its own final-action and effective-date check",
      "A proposal always takes effect immediately",
      "A final order for two ingredients finalizes all unrelated proposals",
      "The year of the textbook determines current legal requirements"
    ],
    "answer": 0,
    "rationale": "The 2026 PABA and trolamine order expressly leaves other proposed changes for future action. Check the actual controlling order and date.",
    "reviewHref": "#filter-pharmacology"
  }
];

export const sunscreenPhotoprotectionQuestionBank = [...generated, ...calculations, ...regulatoryCases];

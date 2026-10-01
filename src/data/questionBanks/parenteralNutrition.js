const q = (id, question, choices, answer, rationale, lesson, extra = {}) => ({
  id: `parenteral-nutrition-${id}`,
  question,
  choices,
  answer,
  rationale,
  reviewHref: `#${lesson}`,
  ...extra,
});

const core = [
  q("001", "Which finding most strongly supports parenteral nutrition?", ["Severe malnutrition with complete intestinal obstruction and no usable enteral route", "A central line without a nutrition deficit", "One missed meal", "Adequate oral intake"], 0, "PN is justified when a meaningful nutrition need cannot be met through the gastrointestinal tract.", "pn-decision"),
  q("002", "Which principle should be evaluated before starting parenteral nutrition?", ["Whether oral or enteral delivery can safely meet the need", "Whether the patient prefers a particular bag color", "Whether a central line is convenient", "Whether albumin is below one fixed threshold"], 0, "The least invasive effective route remains preferred when the gut is usable.", "pn-decision"),
  q("003", "Which condition is a common indication for parenteral nutrition?", ["Short bowel syndrome with inadequate absorption", "Stable constipation with adequate intake", "Controlled hypertension", "Uncomplicated seasonal allergies"], 0, "Severe malabsorption after extensive intestinal loss can make intravenous nutrition necessary.", "pn-decision"),
  q("004", "A well-nourished stable adult has had a one-day interruption in adequate intake and is expected to resume adequate enteral intake tomorrow. What is the best approach?", ["Continue assessment rather than automatically starting PN for a brief interruption", "Start indefinite central PN", "Place a tunneled catheter immediately", "Provide full energy despite uncontrolled metabolic abnormalities"], 0, "A brief interruption in a stable, well-nourished adult usually does not justify immediate PN.", "pn-decision"),
  q("005", "How does severe malnutrition affect PN timing when the gut cannot be used?", ["It can support earlier initiation after safety issues are addressed", "It always requires a fourteen-day delay", "It removes refeeding risk", "It guarantees tolerance of full energy"], 0, "Higher nutrition risk can justify earlier support, but initiation still must account for refeeding and instability.", "pn-decision"),
  q("006", "Which finding should delay aggressive PN advancement?", ["Uncontrolled shock with severe electrolyte abnormalities", "A stable catheter and corrected electrolytes", "A documented nutrition goal", "Reliable monitoring capacity"], 0, "Hemodynamic and metabolic instability increases risk from immediate full-dose delivery.", "pn-decision"),
  q("007", "What makes a high-output fistula a possible PN indication?", ["Inability to use distal bowel while losses prevent adequate enteral absorption", "The presence of any skin opening", "A normal oral diet", "A low heart rate alone"], 0, "Route anatomy and losses can prevent adequate gastrointestinal delivery.", "pn-decision"),
  q("008", "Which statement best describes the role of goals of care in PN?", ["Benefits, burdens, patient preferences, and stopping criteria should be discussed", "PN must continue whenever vascular access exists", "Goals matter only after discharge", "PN has no treatment burden"], 0, "PN is a medical treatment whose value depends on the patient's goals and clinical context.", "pn-decision"),

  q("009", "What is the main limitation of peripheral parenteral nutrition?", ["Vein tolerance limits concentration and can require a large fluid volume", "It can only contain water", "It never causes infiltration", "It is always suitable for long-term full nutrition"], 0, "Peripheral veins tolerate less osmolar load than central circulation.", "venous-access"),
  q("010", "Which patient is most likely to require central PN?", ["A fluid-restricted patient needing concentrated full nutrition for several weeks", "A patient needing one day of low-osmolar supplemental support", "A patient meeting needs orally", "A patient refusing all vascular access"], 0, "Concentrated and longer-duration therapy commonly requires central access.", "venous-access"),
  q("011", "Why is a dedicated PN lumen preferred when feasible?", ["It reduces manipulations, incompatibility exposure, and contamination opportunities", "It eliminates hand hygiene", "It makes every medication compatible", "It prevents all thrombosis"], 0, "Fewer access events and less coadministration improve line safety.", "venous-access"),
  q("012", "Which finding is most concerning for a catheter complication?", ["New arm swelling and resistance during infusion through a PICC", "An intact dressing without symptoms", "A normal infusion pump display", "Stable external catheter length"], 0, "Swelling and resistance can signal thrombosis, malposition, or mechanical failure.", "venous-access"),
  q("013", "What should be considered before placing a PICC in advanced chronic kidney disease?", ["Preservation of veins for possible future dialysis access", "The patient's preferred tape color", "Automatic placement in the dominant arm", "Avoiding all central access forever"], 0, "Future dialysis access can be compromised by thrombosis or stenosis related to upper-extremity devices.", "venous-access"),
  q("014", "Which practice reduces catheter-related infection risk?", ["Aseptic hub access and minimizing unnecessary line manipulation", "Routine systemic antibiotics for every patient", "Opening the line for frequent sampling", "Using extra lumens without a clinical need"], 0, "Hub disinfection, hand hygiene, and fewer access events reduce contamination opportunities.", "venous-access"),
  q("015", "What is the best response to fever and rigors that begin during PN infusion?", ["Stop and assess promptly for catheter-related infection and other causes", "Increase the infusion rate", "Ignore the timing", "Add an unverified antibiotic to the bag"], 0, "Temporal association with line infusion raises concern for a bloodstream infection and requires urgent evaluation.", "venous-access"),
  q("016", "Which statement about catheter anticoagulation is most accurate?", ["Routine anticoagulation is not recommended solely to prevent catheter infection", "Every PN bag should contain heparin", "Anticoagulation eliminates biofilm", "Heparin is compatible with every formulation"], 0, "CDC guidance does not support routine anticoagulant therapy solely for infection prevention.", "venous-access"),

  q("017", "How many kilocalories are provided by one gram of dextrose in PN?", ["3.4 kcal", "4 kcal", "7 kcal", "9 kcal"], 0, "Intravenous dextrose provides 3.4 kcal per gram.", "macronutrient-design"),
  q("018", "How many kilocalories are conventionally assigned to one gram of amino acids?", ["4 kcal", "3.4 kcal", "7 kcal", "9 kcal"], 0, "Amino acids are assigned 4 kcal per gram, though their primary role is protein provision.", "macronutrient-design"),
  q("019", "Why is glucose infusion rate clinically useful?", ["It expresses dextrose delivery relative to weight and time", "It measures catheter length", "It replaces glucose monitoring", "It determines trace-element compatibility"], 0, "GIR makes carbohydrate exposure comparable across weights and infusion durations.", "macronutrient-design"),
  q("020", "Which finding can reflect excessive carbohydrate delivery?", ["Hyperglycemia with increased carbon dioxide production", "Isolated improved wound healing", "A lower catheter infection rate", "Reduced infusion volume without other changes"], 0, "Dextrose overfeeding can worsen glycemia, lipogenesis, hepatic fat, and carbon dioxide production.", "macronutrient-design"),
  q("021", "Why must propofol be included in the energy assessment?", ["Its lipid vehicle provides clinically meaningful calories", "It contains intravenous protein", "It supplies all vitamins", "It has no nutritional contribution"], 0, "Propofol contributes about 1.1 kcal per mL from lipid and can materially change energy and fat delivery.", "macronutrient-design"),
  q("022", "Which statement about adult lipid injectable emulsions is most accurate?", ["Dose, composition, allergy information, rate, and compatibility are product specific", "All products are interchangeable at any rate", "Lipid never affects triglycerides", "Lipid can be omitted indefinitely without consequence"], 0, "ILE products differ and must be prescribed using current labeling and patient factors.", "macronutrient-design"),
  q("023", "What triglyceride threshold does ASPEN adult guidance use to consider holding or limiting ILE?", ["Greater than 400 mg per dL", "Greater than 40 mg per dL", "Greater than 100 mg per dL", "Greater than 10 mg per dL"], 0, "ASPEN adult ILE guidance advises holding or limiting lipid when triglycerides exceed 400 mg per dL.", "macronutrient-design"),
  q("024", "Why should prolonged lipid omission be avoided?", ["It can produce essential fatty acid deficiency", "It always lowers glucose to zero", "It causes immediate catheter fracture", "It eliminates amino acid delivery"], 0, "Lipid supplies essential fatty acids in addition to energy.", "macronutrient-design"),
  q("025", "Which approach to protein in renal dysfunction is most defensible?", ["Individualize for illness, losses, renal replacement therapy, and goals rather than automatically restricting", "Eliminate amino acids in every patient", "Use the same dose regardless of dialysis", "Base the dose only on serum albumin"], 0, "Protein needs depend on the complete clinical context, including catabolism and renal replacement losses.", "macronutrient-design"),

  q("026", "Why is acetate used in PN?", ["It can provide base equivalents after metabolism and help balance chloride delivery", "It directly replaces phosphate", "It sterilizes the admixture", "It is identical to bicarbonate in compatibility"], 0, "Acetate can help adjust the acid-base contribution without adding incompatible bicarbonate.", "micronutrient-balance"),
  q("027", "Which statement about PN electrolyte ranges is most accurate?", ["Published ranges are starting references that require patient-specific adjustment", "They are mandatory fixed doses", "Kidney function does not matter", "Gastrointestinal losses do not matter"], 0, "Electrolyte needs vary with losses, organ function, medicines, and laboratory trends.", "micronutrient-balance"),
  q("028", "What makes calcium-phosphate precipitation difficult to predict?", ["Multiple formulation and process variables interact", "Only serum phosphate matters", "Only the bag volume matters", "The risk is always visible before infusion"], 0, "Salts, products, concentrations, pH, temperature, sequence, and time all influence solubility.", "micronutrient-balance"),
  q("029", "Which calcium salt is generally preferred in PN because of lower dissociation and precipitation risk?", ["Calcium gluconate", "Calcium chloride", "Calcium carbonate tablets", "Calcium hydroxide"], 0, "Calcium gluconate is usually preferred in PN compatibility design.", "micronutrient-balance"),
  q("030", "Why may zinc requirements rise in a patient with a high-output ostomy?", ["Large gastrointestinal losses can increase zinc loss", "Zinc prevents every catheter infection", "Zinc replaces all sodium", "The ostomy blocks renal zinc clearance"], 0, "High gastrointestinal output can cause substantial zinc loss.", "micronutrient-balance"),
  q("031", "Why can manganese be reduced or omitted in cholestasis?", ["Biliary excretion is impaired and accumulation can cause neurotoxicity", "It causes immediate hypoglycemia", "It is the main source of PN protein", "It cannot enter the bloodstream"], 0, "Manganese is largely eliminated through bile and can accumulate in cholestasis.", "micronutrient-balance"),
  q("032", "Which micronutrient deserves additional attention when initiating nutrition in a patient at high refeeding risk?", ["Thiamine", "Fluoride only", "Vitamin K only", "Manganese only"], 0, "Thiamine demand rises with carbohydrate metabolism and deficiency can cause severe complications.", "micronutrient-balance"),
  q("033", "How should a current multivitamin shortage be managed?", ["Use current ASPEN and ASHP shortage guidance with a documented substitution and monitoring plan", "Apply a permanent three-times-weekly rule to every future patient", "Omit all vitamins without assessment", "Double every trace element"], 0, "Shortage strategies are time sensitive and should not become permanent standards.", "micronutrient-balance"),
  q("034", "Why is routine iron addition to a total nutrient admixture avoided?", ["Iron can destabilize the emulsion and has compatibility and safety concerns", "Iron has no clinical use", "Iron provides too much protein", "Iron always causes hypocalcemia"], 0, "Strongly charged iron can disrupt lipid stability, so deficiency is usually treated separately.", "micronutrient-balance"),

  q("035", "What distinguishes a total nutrient admixture from a two-in-one PN formulation?", ["A total nutrient admixture includes lipid in the same container", "A two-in-one contains no amino acids", "A total nutrient admixture contains no dextrose", "A two-in-one is always peripheral"], 0, "TNA combines dextrose, amino acids, and lipid in one container.", "compounding-safety"),
  q("036", "Which visual finding requires a PN admixture to be quarantined?", ["Visible precipitate or free oil", "A complete label", "An intact seal", "A uniform appearance within validated specifications"], 0, "Particles, precipitate, or emulsion cracking can be dangerous and require investigation.", "compounding-safety"),
  q("037", "Can a normal visual inspection prove calcium-phosphate compatibility?", ["No, validated formulation data and process controls are still required", "Yes, appearance proves molecular stability", "Yes, if the bag is cold", "Yes, if a central line is used"], 0, "Subvisible particles and delayed precipitation can occur even when the bag initially appears normal.", "compounding-safety"),
  q("038", "Which filter should be used for current administration of a total nutrient admixture?", ["A 1.2 micron in-line filter", "A 0.22 micron filter", "No filter", "A 10 micron filter"], 0, "ASPEN recommends a 1.2 micron filter for TNA and all other PN formulations.", "compounding-safety"),
  q("039", "Which old practice was replaced by ASPEN's current filtration recommendation?", ["Using a 0.22 micron filter for lipid-free PN", "Using aseptic technique", "Inspecting the final bag", "Verifying the order"], 0, "Current guidance simplifies filtration to a 1.2 micron filter for all PN formulations.", "compounding-safety"),
  q("040", "Why should medication coadministration with PN generally be avoided?", ["It adds incompatibility, line manipulation, and infection risk", "Every medication increases calories", "PN blocks all receptors", "A filter makes every drug inactive"], 0, "A separate route is safer when available; unavoidable coadministration requires pharmacist review.", "compounding-safety"),
  q("041", "Which statement about USP chapter 797 is current?", ["The former low, medium, and high risk categories and their fixed BUDs are obsolete", "Every PN has a five-day refrigerated BUD", "All sterile preparations share one BUD", "Visual inspection replaces sterility controls"], 0, "Current USP chapter 797 uses revised categories and a risk-based system for beyond-use dating.", "compounding-safety"),
  q("042", "What does a complete final verification include?", ["Order match, ingredients, quantities, label, container, appearance, and validated process", "Appearance alone", "Patient weight alone", "Pump rate alone"], 0, "PN safety depends on verifying the complete order-to-product system.", "compounding-safety"),

  q("043", "Which laboratory values require especially close follow-up during refeeding risk?", ["Phosphate, potassium, magnesium, and glucose", "LDL and HDL only", "Amylase only", "Troponin only"], 0, "Insulin-driven shifts can rapidly lower phosphate, potassium, and magnesium while glucose delivery changes.", "monitoring-transition"),
  q("044", "Which finding suggests PN overfeeding?", ["Hyperglycemia, rising triglycerides, fluid retention, and increased carbon dioxide production", "Stable weight and improving strength", "A clean catheter site", "Reliable enteral intake"], 0, "Excess energy and carbohydrate can produce this metabolic pattern.", "monitoring-transition"),
  q("045", "What is the first step when hyperglycemia develops after PN advancement?", ["Review total dextrose, all calories, illness, medicines, and infusion rate", "Add unlimited insulin without reviewing the prescription", "Stop all amino acids permanently", "Ignore non-PN dextrose"], 0, "The prescription and all glucose sources should be assessed before compensating for excessive delivery.", "monitoring-transition"),
  q("046", "Why can cyclic PN increase glycemic risk?", ["The same daily dextrose may be delivered over fewer hours", "Cycling removes all dextrose", "Cycling prevents insulin action", "It eliminates monitoring"], 0, "Shorter infusion time raises the hourly glucose delivery rate.", "monitoring-transition"),
  q("047", "Is a taper mandatory for every stable adult receiving cyclic PN?", ["No, starting and stopping should be individualized", "Yes, every patient requires a four-hour taper", "Yes, because abrupt stopping always causes coma", "No, because glucose never changes"], 0, "Tapering depends on patient factors, insulin exposure, infusion pattern, and local protocol.", "monitoring-transition"),
  q("048", "Which complication belongs in long-term PN surveillance?", ["Metabolic bone disease", "Improved visual acuity", "Seasonal rhinitis", "Dental caries only"], 0, "Long-term PN can affect bone through multiple nutrient and metabolic pathways.", "monitoring-transition"),
  q("049", "What is required before home PN discharge?", ["A trained patient or caregiver, coordinated team, supplies, line-care plan, monitoring, and emergency instructions", "A catheter without teaching", "A bag and no follow-up", "A promise to avoid all oral intake"], 0, "Home PN is a coordinated high-risk therapy that requires competency and support.", "monitoring-transition"),
  q("050", "Which change supports reassessing the need for intravenous nutrition in the book's route framework?", ["As documented oral or enteral intake reliably replaces the delivered nutrients", "Whenever albumin rises once", "When the bag changes color", "Only after the central line is removed"], 0, "The source prefers gastrointestinal delivery when it functions and can maintain nutritional status. Actual delivery and tolerance must support that route assessment.", "monitoring-transition"),
];

const dextroseEnergyCases = [100, 125, 150, 175, 200, 225, 250, 275, 300, 325].map((grams, index) => {
  const kcal = Math.round(grams * 3.4);
  return q(`06${index}`, `A PN prescription contains ${grams} g of dextrose. How many kilocalories does it provide?`, [`${kcal} kcal`, `${grams * 4} kcal`, `${grams * 7} kcal`, `${grams} kcal`], 0, `${grams} g multiplied by 3.4 kcal per gram equals ${kcal} kcal.`, "macronutrient-design");
});

const girCases = [
  [180, 60, 24], [210, 70, 24], [240, 80, 24], [250, 75, 20], [300, 90, 24],
  [160, 55, 20], [280, 85, 18], [220, 65, 16], [190, 70, 12], [260, 100, 24],
].map(([grams, weight, hours], index) => {
  const gir = Math.round((grams * 1000 / weight / (hours * 60)) * 100) / 100;
  return q(`07${index}`, `A ${weight} kg adult receives ${grams} g of dextrose over ${hours} hours. What is the glucose infusion rate to the nearest hundredth?`, [`${gir} mg/kg/min`, `${Math.round(gir * 10) / 10} g/kg/min`, `${Math.round(gir * 2 * 100) / 100} mg/kg/min`, `${Math.round(gir / 2 * 100) / 100} mg/kg/min`], 0, `Convert grams to milligrams, then divide by ${weight} kg and ${hours * 60} minutes. The result is ${gir} mg/kg/min.`, "macronutrient-design");
});

const proteinCases = [
  [50, 1.2], [55, 1.5], [60, 1.3], [65, 1.4], [70, 1.2],
  [75, 1.6], [80, 1.5], [85, 1.3], [90, 1.4], [100, 1.2],
].map(([weight, dose], index) => {
  const grams = Math.round(weight * dose * 10) / 10;
  return q(`08${index}`, `A ${weight} kg adult has an individualized amino acid target of ${dose} g/kg/day. How many grams are prescribed daily?`, [`${grams} g`, `${Math.round(grams / 2 * 10) / 10} g`, `${Math.round(grams * 2 * 10) / 10} g`, `${weight} g`], 0, `${weight} kg multiplied by ${dose} g/kg/day equals ${grams} g per day.`, "macronutrient-design");
});

const lipidCases = [
  [60, 1, 0.2], [65, 0.8, 0.2], [70, 1, 0.2], [75, 1.2, 0.2], [80, 0.75, 0.2],
  [85, 1, 0.2], [90, 0.8, 0.2], [55, 1.2, 0.2], [100, 0.5, 0.2], [72, 1, 0.2],
].map(([weight, dose, concentration], index) => {
  const grams = Math.round(weight * dose * 10) / 10;
  const volume = Math.round(grams / concentration);
  return q(`09${index}`, `A ${weight} kg adult is prescribed ${dose} g/kg of a 20 percent lipid emulsion containing ${concentration} g/mL. What volume supplies the dose?`, [`${volume} mL`, `${Math.round(volume / 2)} mL`, `${Math.round(volume * 2)} mL`, `${grams} mL`], 0, `The dose is ${grams} g. Dividing by ${concentration} g/mL gives ${volume} mL. Product labeling and maximum rate must also be verified.`, "macronutrient-design");
});

const integrationCases = [
  ["A malnourished patient with obstruction has phosphate 1.3 mg/dL, potassium 2.8 mEq/L, and magnesium 1.1 mg/dL before PN.", "Correct and closely monitor deficits, give thiamine as indicated, and begin energy cautiously", "The pattern creates high refeeding risk and makes full immediate energy unsafe.", "pn-decision"],
  ["A fluid-restricted patient needs full nutrition, but the peripheral formulation would require 3.5 L per day.", "Reassess for appropriate central access and a concentrated prescription", "Peripheral concentration limits can prevent adequate delivery within the fluid allowance.", "venous-access"],
  ["A patient receiving PN and propofol develops triglycerides of 520 mg/dL.", "Count all lipid calories and hold or limit ILE while evaluating causes and tolerance", "ASPEN advises limiting or holding ILE above 400 mg/dL, and propofol adds lipid exposure.", "macronutrient-design"],
  ["A patient with cholestasis has received a standard multi-trace product for months and develops neurologic changes.", "Review manganese exposure, cholestasis, concentrations, and the complete trace-element plan", "Manganese accumulation can cause neurologic toxicity when biliary elimination is impaired.", "micronutrient-balance"],
  ["A new PN formula exceeds the compounding software's calcium-phosphate limit, but the bag appears clear.", "Do not dispense until a pharmacist resolves compatibility using validated formulation data", "Clear appearance cannot prove compatibility or prevent delayed precipitation.", "compounding-safety"],
  ["A unit requests a 0.22 micron filter for a lipid-free PN bag because that was the old protocol.", "Use the current 1.2 micron ASPEN recommendation and update the protocol", "Current ASPEN guidance uses a 1.2 micron filter for all PN formulations.", "compounding-safety"],
  ["A PN-dependent patient has recurrent fever only during connection and a damaged catheter hub.", "Stop and investigate a catheter-related infection while protecting access and obtaining appropriate cultures", "The infusion pattern and hub damage strongly suggest line-related risk.", "venous-access"],
  ["A stable home PN patient is moving from 24-hour infusion to a 12-hour cycle.", "Recalculate hourly glucose and fluid exposure and monitor tolerance during the transition", "Cycling compresses the same daily delivery into fewer hours.", "monitoring-transition"],
  ["A patient now receives 75 percent of needs enterally for three days with stable tolerance.", "Reduce PN while continuing to verify actual enteral delivery and clinical response", "Reliable gastrointestinal delivery supports a measured transition away from PN.", "monitoring-transition"],
  ["An older handout assigns every compounded PN a five-day refrigerated beyond-use date.", "Replace the rule with current USP chapter 797, stability data, process, container, and storage assessment", "The former fixed risk categories and BUDs are obsolete.", "compounding-safety"],
].map(([caseText, correct, rationale, lesson], index) => q(`10${index}`, `${caseText} What is the most defensible next action?`, [correct, "Continue unchanged without reassessment", "Use a fixed rule that ignores the patient's current state", "Delay action until after discharge"], 0, rationale, lesson));

const bookReviewCases = [
  {
    "question": "In the supplied book, which route includes both oral food and formula delivered into the gastrointestinal tract?",
    "choices": [
      "Enteral nutrition",
      "Intravenous PN only",
      "An intra-arterial infusion",
      "A central venous line"
    ],
    "answer": 0,
    "rationale": "The book EN definition includes gastrointestinal delivery by mouth or by feeding formula.",
    "reviewHref": "#pn-decision",
    "id": "parenteral-nutrition-book-001"
  },
  {
    "question": "The source describes inability to absorb adequate GI nutrition for more than five days. How should that statement be read?",
    "choices": [
      "As a mandatory wait for every malnourished patient",
      "As a possible PN indication in the source discussion",
      "As proof that a central line is sufficient indication",
      "As a rule that every missed meal requires PN"
    ],
    "answer": 1,
    "rationale": "The source indication is contextual; it does not provide a complete timing algorithm or mandate waiting for every patient.",
    "reviewHref": "#pn-decision",
    "id": "parenteral-nutrition-book-002"
  },
  {
    "question": "Which source route comparison explains why a functioning gastrointestinal route is preferred when it meets the need?",
    "choices": [
      "PN has no catheter risks",
      "PN always costs less",
      "EN is more physiologic and has fewer complications",
      "EN cannot provide protein"
    ],
    "answer": 2,
    "rationale": "The book favors EN when the gut functions, describing fewer complications and generally lower cost.",
    "reviewHref": "#pn-decision",
    "id": "parenteral-nutrition-book-003"
  },
  {
    "question": "Why does the source qualify short-term peripheral PN as something that may be possible?",
    "choices": [
      "Peripheral PN is always suitable for full nutrition",
      "A short duration eliminates vein damage",
      "PN contains only water",
      "Peripheral vein irritation and the formulation still matter"
    ],
    "answer": 3,
    "rationale": "The book describes possible use for less than one week but emphasizes phlebitis and vein damage.",
    "reviewHref": "#venous-access",
    "id": "parenteral-nutrition-book-004"
  },
  {
    "question": "A PICC begins in a peripheral vein. Which feature makes its infusion access central in the source description?",
    "choices": [
      "The tip ends in a large central vessel",
      "The skin entry must be in the chest",
      "The bag must contain only saline",
      "The catheter name alone prevents infection"
    ],
    "answer": 0,
    "rationale": "The IV chapter identifies the central tip location, and its PICC example ends in the superior vena cava.",
    "reviewHref": "#venous-access",
    "id": "parenteral-nutrition-book-005"
  },
  {
    "question": "Which source compatibility result is needed before putting two ingredients in the same PN container?",
    "choices": [
      "Any Y-site result regardless of concentration",
      "Additive compatibility for the actual container conditions",
      "A result for a different diluent only",
      "A statement that both are IV drugs"
    ],
    "answer": 1,
    "rationale": "Additive and Y-site entries address different contact conditions and cannot simply be substituted.",
    "reviewHref": "#venous-access",
    "id": "parenteral-nutrition-book-006"
  },
  {
    "question": "Why can central access deliver a concentrated admixture in the source explanation?",
    "choices": [
      "It removes the need for sterility",
      "It changes dextrose into lipid",
      "Contents enter a large vessel and are rapidly diluted",
      "It prevents all thrombosis"
    ],
    "answer": 2,
    "rationale": "The IV-principles chapter explains rapid dilution in a large central vessel.",
    "reviewHref": "#venous-access",
    "id": "parenteral-nutrition-book-007"
  },
  {
    "question": "An exercise explicitly orders protein using IBW. What should happen to that weight basis?",
    "choices": [
      "Replace it with adjusted weight automatically",
      "Use height without weight",
      "Always substitute actual weight",
      "Use the IBW requested by the exercise"
    ],
    "answer": 3,
    "rationale": "The book uses total weight for most PN work unless a question specifies another basis; some protein orders specify IBW.",
    "reviewHref": "#macronutrient-design",
    "id": "parenteral-nutrition-book-008"
  },
  {
    "question": "A PN exercise labels its target as nonprotein calories. Which energy must be kept outside that NPC target?",
    "choices": [
      "Amino acid energy",
      "Dextrose energy",
      "Lipid energy",
      "Both dextrose and lipid energy"
    ],
    "answer": 0,
    "rationale": "NPC includes dextrose and lipid; a goal that includes amino acid calories is a different total-energy convention.",
    "reviewHref": "#macronutrient-design",
    "id": "parenteral-nutrition-book-009"
  },
  {
    "question": "What source distinction prevents automatically exchanging traditional ILE and Smoflipid?",
    "choices": [
      "Neither contains oil",
      "Their soybean-only versus four-oil formulations differ",
      "Both supply no calories",
      "Both are amino acid solutions"
    ],
    "answer": 1,
    "rationale": "The book distinguishes traditional soybean-oil emulsion from four-oil Smoflipid.",
    "reviewHref": "#macronutrient-design",
    "id": "parenteral-nutrition-book-010"
  },
  {
    "question": "Which schedule change does the book discuss when triglycerides are high?",
    "choices": [
      "Every weekly dose must be infused daily",
      "Lipid frequency must always increase",
      "Lipid may be reduced to three times weekly or once weekly",
      "All nutrients must permanently stop"
    ],
    "answer": 2,
    "rationale": "The source gives these reduced frequencies; the actual prescribed schedule remains part of the patient plan.",
    "reviewHref": "#macronutrient-design",
    "id": "parenteral-nutrition-book-011"
  },
  {
    "question": "A supplied PN stock is potassium phosphate. Which additional quantity must be counted alongside phosphate?",
    "choices": [
      "Only sterile water",
      "Only amino acid calories",
      "Vitamin K",
      "Potassium from that same stock"
    ],
    "answer": 3,
    "rationale": "A phosphate salt contributes its counterion, so potassium from potassium phosphate is included in the potassium total.",
    "reviewHref": "#micronutrient-balance",
    "id": "parenteral-nutrition-book-012"
  },
  {
    "question": "How does the source say the PN phosphate order should identify the ingredient?",
    "choices": [
      "In mmol of phosphate with the sodium or potassium salt specified",
      "As an unspecified number of milliliters only",
      "As calories of phosphorus",
      "As the bag color"
    ],
    "answer": 0,
    "rationale": "The source distinguishes mmol of phosphate and the selected salt form.",
    "reviewHref": "#micronutrient-balance",
    "id": "parenteral-nutrition-book-013"
  },
  {
    "question": "Why does the source prefer calcium gluconate to calcium chloride in its PN precipitation discussion?",
    "choices": [
      "It eliminates all phosphate",
      "It leaves less free calcium available to bind phosphate",
      "It is an oral calcium tablet",
      "It removes all other compatibility variables"
    ],
    "answer": 1,
    "rationale": "The book describes lower dissociation and less calcium-phosphate precipitation risk; this does not prove complete compatibility.",
    "reviewHref": "#micronutrient-balance",
    "id": "parenteral-nutrition-book-014"
  },
  {
    "question": "Which source sequence supports limiting calcium-phosphate precipitation?",
    "choices": [
      "Calcium first before any other fluid",
      "Phosphate and calcium without mixing",
      "Phosphate after dextrose/amino acids, then calcium near the end",
      "All salts added to an empty bag at once"
    ],
    "answer": 2,
    "rationale": "The book describes phosphate first after the macronutrients, agitation and calcium near the end at larger volume.",
    "reviewHref": "#micronutrient-balance",
    "id": "parenteral-nutrition-book-015"
  },
  {
    "question": "What does a calcium-phosphate point above the source solubility curve indicate?",
    "choices": [
      "Proof of sterility",
      "Proof of lower glucose",
      "A requirement to add more calcium",
      "Precipitation risk"
    ],
    "answer": 3,
    "rationale": "The book describes points above the curve as indicating precipitation risk.",
    "reviewHref": "#micronutrient-balance",
    "id": "parenteral-nutrition-book-016"
  },
  {
    "question": "Which temperature direction does the source associate with more calcium-phosphate dissociation and precipitation risk?",
    "choices": [
      "Increasing temperature",
      "Refrigeration alone proves compatibility",
      "Temperature has no role",
      "Removing the bag label"
    ],
    "answer": 0,
    "rationale": "The source states that higher temperature increases dissociation and precipitation risk.",
    "reviewHref": "#micronutrient-balance",
    "id": "parenteral-nutrition-book-017"
  },
  {
    "question": "What distinguishes the source MVI-12 mixture from MVI-13?",
    "choices": [
      "MVI-12 contains no water-soluble vitamins",
      "MVI-12 omits vitamin K",
      "MVI-12 contains only lipid",
      "MVI-12 doubles every trace element"
    ],
    "answer": 1,
    "rationale": "The source identifies vitamin K as absent from MVI-12.",
    "reviewHref": "#micronutrient-balance",
    "id": "parenteral-nutrition-book-018"
  },
  {
    "question": "Which source monitoring instruction connects warfarin with PN vitamin provision?",
    "choices": [
      "Monitor only BMI",
      "Stop all amino acids",
      "Monitor INR",
      "Ignore which vitamin mixture is used"
    ],
    "answer": 2,
    "rationale": "The book specifically calls for INR monitoring when a PN patient receives warfarin.",
    "reviewHref": "#micronutrient-balance",
    "id": "parenteral-nutrition-book-019"
  },
  {
    "question": "How is thiamine classified in the source MVI-13 discussion?",
    "choices": [
      "A lipid calorie source",
      "A phosphate salt",
      "A fat-soluble vitamin",
      "One of the water-soluble vitamins"
    ],
    "answer": 3,
    "rationale": "Thiamine is included among the source's nine water-soluble vitamins.",
    "reviewHref": "#micronutrient-balance",
    "id": "parenteral-nutrition-book-020"
  },
  {
    "question": "Which pair does the 2023 book name in its severe liver-disease trace-element withholding discussion?",
    "choices": [
      "Manganese and copper",
      "Dextrose and amino acids",
      "Sodium and chloride",
      "Vitamins A and E only"
    ],
    "answer": 0,
    "rationale": "The source names manganese and copper. This attributed review group does not replace the actual patient/product plan.",
    "reviewHref": "#micronutrient-balance",
    "id": "parenteral-nutrition-book-021"
  },
  {
    "question": "Which group does the 2023 book name in its severe renal-disease trace-element withholding discussion?",
    "choices": [
      "All four fat-soluble vitamins",
      "Chromium, molybdenum and selenium",
      "Dextrose, lipid and amino acids",
      "Sodium, acetate and chloride only"
    ],
    "answer": 1,
    "rationale": "These are the source's named elements; an actual formulation still needs component-by-component patient review.",
    "reviewHref": "#micronutrient-balance",
    "id": "parenteral-nutrition-book-022"
  },
  {
    "question": "Why does the source generally discourage adding other IV drugs to a PN preparation?",
    "choices": [
      "Every IV drug supplies vitamins",
      "It makes the drug enteral",
      "Changing or stopping the drug can waste the entire PN bag",
      "All drugs require a lipid vehicle"
    ],
    "answer": 2,
    "rationale": "The source gives loss of the entire PN preparation when a drug changes as a reason to avoid routine additions.",
    "reviewHref": "#micronutrient-balance",
    "id": "parenteral-nutrition-book-023"
  },
  {
    "question": "Before administration, what happens to the separating seal in the source two-chamber premixed PN example?",
    "choices": [
      "It is kept intact throughout infusion",
      "It is replaced with a feeding tube",
      "It changes the route to oral",
      "It is broken so amino acid and dextrose chambers mix"
    ],
    "answer": 3,
    "rationale": "The book describes mixing the separate chamber contents before administration by breaking the seal.",
    "reviewHref": "#compounding-safety",
    "id": "parenteral-nutrition-book-024"
  },
  {
    "question": "What does the book specifically identify as present in Clinimix-E?",
    "choices": [
      "Electrolytes",
      "Only oral food",
      "No amino acids in any product",
      "A fixed insulin dose for every patient"
    ],
    "answer": 0,
    "rationale": "Clinimix-E is the source example containing electrolytes.",
    "reviewHref": "#compounding-safety",
    "id": "parenteral-nutrition-book-025"
  },
  {
    "question": "Which distinction matters when a sterile PN preparation also contains a potentially incompatible ingredient?",
    "choices": [
      "Sterility proves all salts stay dissolved",
      "Sterile preparation and physical/chemical compatibility are separate requirements",
      "A clear label eliminates precipitation",
      "Central access eliminates chemical reactions"
    ],
    "answer": 1,
    "rationale": "The book separately addresses sterile preparation and incompatibilities such as precipitation or drug degradation.",
    "reviewHref": "#compounding-safety",
    "id": "parenteral-nutrition-book-026"
  },
  {
    "question": "Which PN complication does the source associate with intracellular electrolyte loss, especially phosphate?",
    "choices": [
      "Seasonal rhinitis",
      "A catheter tip seen on x-ray",
      "Refeeding syndrome",
      "An isolated change in bag color"
    ],
    "answer": 2,
    "rationale": "The source PN monitoring discussion identifies refeeding and especially phosphate loss.",
    "reviewHref": "#monitoring-transition",
    "id": "parenteral-nutrition-book-027"
  },
  {
    "question": "An arithmetic-only exercise supplies a prior sliding-scale requirement of 24 units and asks for one-half. What is that number?",
    "choices": [
      "24 units",
      "48 units",
      "6 units",
      "12 units"
    ],
    "answer": 3,
    "rationale": "24/2 = 12 units. This supplied exercise mirrors the book arithmetic example; it does not independently establish an actual insulin-in-bag order.",
    "reviewHref": "#monitoring-transition",
    "id": "parenteral-nutrition-book-028"
  },
  {
    "question": "An original energy exercise supplies propofol at 14 mL/hour for eight hours and 1.1 kcal/mL. What energy is delivered?",
    "choices": [
      "123.2 kcal",
      "112 kcal",
      "14.3 kcal",
      "246.4 kcal"
    ],
    "answer": 0,
    "rationale": "14 x 8 = 112 mL; 112 x 1.1 = 123.2 kcal. This computes energy, not an anesthetic dose.",
    "reviewHref": "#macronutrient-design",
    "id": "parenteral-nutrition-book-029"
  },
  {
    "question": "An original exercise gives 180 mL of lipid once weekly at a supplied 1.1 kcal/mL. What is the average daily energy to the nearest tenth?",
    "choices": [
      "198 kcal/day",
      "28.3 kcal/day",
      "180 kcal/day",
      "1,386 kcal/day"
    ],
    "answer": 1,
    "rationale": "180 x 1.1 = 198 kcal per weekly dose; 198/7 = 28.3 kcal/day to the nearest tenth. The average does not change the weekly schedule.",
    "reviewHref": "#macronutrient-design",
    "id": "parenteral-nutrition-book-030"
  },
  {
    "id": "parenteral-nutrition-book-031",
    "question": "Which container interaction does the supplied book specifically identify for insulin?",
    "choices": [
      "It is converted into a lipid by glass",
      "It dissolves every plastic container",
      "It adsorbs to PVC",
      "It cannot interact with any IV container"
    ],
    "answer": 2,
    "rationale": "The source states that insulin adsorbs to PVC. Adsorption is adherence to a surface, rather than absorption into the container.",
    "reviewHref": "#monitoring-transition"
  },
  {
    "id": "parenteral-nutrition-book-032",
    "question": "Which solution color is listed for multivitamins for infusion in the source IV-principles table?",
    "choices": [
      "Blue",
      "Red",
      "Brown",
      "Yellow"
    ],
    "answer": 3,
    "rationale": "The table lists multivitamins for infusion as yellow. This identifies the ingredient example; it does not prove final PN compatibility or absence of particles.",
    "reviewHref": "#compounding-safety"
  },
  {
    "id": "parenteral-nutrition-book-033",
    "question": "Which quantity verification method does the source prefer during sterile compounding?",
    "choices": [
      "The pharmacist checks the actual product volume in the syringe before compounding continues",
      "An empty syringe is pulled back later to a remembered volume",
      "The final bag color is used to infer each ingredient volume",
      "Only the empty vial labels are checked after all ingredients are combined"
    ],
    "answer": 0,
    "rationale": "The book prefers seeing the actual volume before transfer. The empty-syringe pull-back method relies on memory and is not recommended.",
    "reviewHref": "#compounding-safety"
  }
];

export const parenteralNutritionQuestionBank = [
  ...core,
  ...dextroseEnergyCases,
  ...girCases,
  ...proteinCases,
  ...lipidCases,
  ...integrationCases,
  ...bookReviewCases,
];

if (parenteralNutritionQuestionBank.length !== 133) {
  throw new Error(`Parenteral nutrition question bank must contain 133 questions, found ${parenteralNutritionQuestionBank.length}.`);
}

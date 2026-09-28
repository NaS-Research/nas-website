const c = (key, lesson, name, principle, action, failure, caseText, caseAnswer, rationale) => ({ key, lesson, name, principle, action, failure, caseText, caseAnswer, rationale });

const concepts = [
  c("regulatory-category", "supplement-regulation", "the dietary supplement regulatory category", "Dietary supplements are regulated as a category of food under a framework that differs from the premarket approval pathway for drugs.", "Identify whether the product is a supplement, conventional food, drug, medical food, or cosmetic before interpreting its claims.", "Assuming every bottle sold beside medicines has completed FDA drug approval misstates the regulatory pathway.", "A botanical capsule is marketed with a Supplement Facts panel but no approved drug application.", "Treat it as a dietary supplement and evaluate its claims, ingredients, quality, and safety within that framework.", "Product category determines which evidence, labeling, and regulatory requirements apply."),
  c("premarket-boundary", "supplement-regulation", "FDA premarket review of dietary supplements", "FDA generally does not approve dietary supplements before marketing, so oversight often begins after products enter the marketplace.", "Verify the ingredient, manufacturer, label, safety signals, and current FDA actions rather than treating market access as proof of approval.", "Using shelf availability as evidence that FDA established efficacy and safety before sale creates false reassurance.", "A patient asks whether a widely sold supplement is FDA approved.", "Explain that general market availability does not mean FDA approved the supplement for safety or efficacy.", "FDA's postmarket role is substantial, while premarket drug-style approval is generally absent."),
  c("ndi-notification", "supplement-regulation", "new dietary ingredient notification limits", "Some new dietary ingredients require a premarket notification with safety information, but the process is not equivalent to drug approval.", "Check whether an ingredient raises a new dietary ingredient issue while preserving the distinction from an approved medicine.", "Calling an accepted notification an FDA finding of clinical benefit overstates what the notification establishes.", "A manufacturer cites a new dietary ingredient notification as proof that its product treats disease.", "Reject the efficacy inference and evaluate the disease claim under the drug framework.", "A notification does not convert a supplement into an FDA-approved treatment."),
  c("supplement-facts", "supplement-regulation", "the Supplement Facts panel", "The Supplement Facts panel identifies serving size and declared dietary ingredients, but it does not establish clinical effectiveness or complete product quality.", "Reconcile the serving size, ingredient amount, proprietary blends, other ingredients, directions, and patient exposure.", "Reading only the front label while ignoring serving size and multi-ingredient blends can underestimate total exposure.", "A powder lists 200 mg per serving, but the suggested daily use is three servings.", "Calculate the daily exposure from the serving instructions before assessing risk.", "The labeled amount must be interpreted with serving size and actual use."),
  c("structure-function", "supplement-regulation", "a structure or function claim", "A structure or function claim describes support for normal body structure or function and requires substantiation, FDA notification, and the required disclaimer, but not FDA preapproval.", "Distinguish a claim such as supports regularity from a claim that treats inflammatory bowel disease.", "Treating the required disclaimer as proof that FDA validated the claim reverses its meaning.", "A label says supports immune function and includes the standard FDA disclaimer.", "Recognize a structure or function claim and evaluate whether it is truthful, nonmisleading, and clinically relevant.", "The disclaimer signals that FDA has not evaluated the claim as a drug treatment."),
  c("disease-claim", "supplement-regulation", "a disease treatment claim", "A product intended to diagnose, treat, cure, mitigate, or prevent disease is subject to drug requirements unless another lawful claim pathway applies.", "Flag explicit and implied disease claims and check FDA warning letters or enforcement information when appropriate.", "Allowing a supplement to claim it cures diabetes because the label also says natural ignores intended use.", "A supplement website promises to reverse heart failure.", "Treat the promise as an unlawful disease claim rather than ordinary supplement language.", "Disease claims can make the product an unapproved drug regardless of its supplement label."),
  c("third-party-verification", "supplement-evidence", "third-party quality verification", "A credible verification mark can support identity, strength, purity, or manufacturing quality within its program, but it does not prove clinical efficacy or suitability for a patient.", "Use verification as one quality signal while separately evaluating evidence, interactions, dose, and patient context.", "Presenting a quality seal as proof that the product treats a condition confuses manufacturing verification with therapeutic evidence.", "A USP-verified product has no convincing evidence for the patient's proposed use.", "Acknowledge the quality signal but do not claim clinical benefit without adequate evidence.", "Quality verification and therapeutic efficacy answer different questions."),
  c("natural-not-safe", "supplement-evidence", "the meaning of natural", "Natural origin does not predict safety, dose consistency, interaction burden, or clinical benefit.", "Evaluate a natural product with the same exposure, mechanism, evidence, and patient-risk questions used for other active substances.", "Assuming a plant product cannot cause organ injury because it is natural disregards pharmacology and contamination.", "A patient with liver disease says an herb cannot be harmful because it is natural.", "Explain that natural products can have active constituents, interactions, contamination, and organ toxicity.", "Biologic activity creates both potential benefit and potential harm."),
  c("evidence-hierarchy", "supplement-evidence", "an evidence hierarchy for complementary products", "Mechanistic plausibility and traditional use can generate hypotheses, but treatment decisions require attention to controlled clinical evidence, consistency, product match, outcome relevance, and risk.", "Match the studied ingredient, extraction method, dose, population, comparator, and outcome to the product and patient.", "Generalizing one small trial of a standardized extract to every commercial formulation ignores product and study differences.", "A trial used a standardized extract unlike the patient's multi-ingredient product.", "Do not transfer the result directly without establishing product and exposure comparability.", "Evidence applies to the studied intervention and context, not every product sharing a common name."),
  c("product-variability", "supplement-evidence", "dietary supplement product variability", "Products with the same front-label ingredient can differ in active constituents, extraction, dose, contaminants, and undeclared ingredients.", "Document the exact brand, formulation, lot when relevant, serving, source, and duration.", "Recording only takes herbs prevents reproducible interaction and safety assessment.", "A patient alternates among three red yeast rice brands.", "Record each product because monacolin content and contaminants can vary substantially.", "Exact product identification is part of exposure assessment."),
  c("medication-reconciliation", "supplement-reconciliation", "supplement-inclusive medication reconciliation", "A complete medication history includes vitamins, minerals, botanicals, teas, powders, energy products, topicals, cannabis products, and products used only as needed.", "Ask with neutral, specific prompts and document product, amount, frequency, purpose, start date, and source.", "Asking only about prescription drugs misses clinically meaningful exposures and can hide interaction causes.", "A transplant recipient reports no medicines other than prescriptions but uses an herbal mood product.", "Identify the exact product immediately and assess for interactions before the next dose.", "Supplements can alter exposure to narrow-therapeutic-index medicines and belong in reconciliation."),
  c("interaction-mechanisms", "supplement-reconciliation", "supplement interaction mechanisms", "Interactions can be pharmacokinetic, pharmacodynamic, absorption-related, laboratory-related, or caused by duplicate ingredients and contaminants.", "Map each ingredient to metabolism, transport, absorption, additive effects, organ toxicity, and monitoring consequences.", "Using a single yes or no interaction checker result without evaluating mechanism and severity can miss important risk.", "A patient combines an anticoagulant, garlic product, and high-dose NSAID.", "Assess additive bleeding risk across the entire regimen and coordinate a safer plan.", "Interaction risk often emerges from cumulative effects rather than one pair alone."),
  c("st-johns-induction", "supplement-reconciliation", "St. John's wort enzyme and transporter induction", "St. John's wort can induce multiple CYP enzymes and intestinal P-glycoprotein, lowering exposure to many clinically important medicines.", "Avoid or closely manage the combination when reduced exposure could cause treatment failure, especially with transplant, HIV, oncology, anticoagulant, or contraceptive therapy.", "Increasing a critical drug empirically without identifying and stopping the inducer can create toxicity when induction later resolves.", "A stable transplant recipient begins St. John's wort and the immunosuppressant concentration falls.", "Stop and manage the interacting supplement with the transplant team while monitoring drug exposure closely.", "Induction can reduce essential drug exposure and its effect can persist after discontinuation."),
  c("st-johns-serotonin", "supplement-reconciliation", "the serotonergic risk of St. John's wort", "St. John's wort can add serotonergic effects to antidepressants and other serotonergic medicines.", "Avoid unsafe combinations and evaluate agitation, autonomic change, clonus, tremor, or hyperreflexia urgently when suspected.", "Treating an herbal antidepressant as nonpharmacologic can obscure serotonin toxicity.", "A patient taking an SSRI adds St. John's wort and develops agitation, diaphoresis, and clonus.", "Stop serotonergic contributors and obtain urgent evaluation for serotonin toxicity.", "The herb has clinically relevant serotonergic activity in addition to induction effects."),
  c("perioperative-bleeding", "supplement-bleeding", "perioperative supplement assessment", "Bleeding and anesthesia concerns vary by product, dose, procedure, co-medications, and patient factors, so blanket stop lists are less reliable than individualized review.", "Obtain the exact supplement history early and let the procedural team set a product-specific plan.", "Applying one discontinuation interval to every supplement without regard to evidence or procedure creates false precision.", "A patient scheduled for surgery uses several botanical products and warfarin.", "Escalate a complete product list to the anticoagulation and procedural teams for an individualized plan.", "Perioperative decisions require combined bleeding, hemodynamic, sedative, and interaction assessment."),
  c("anticoagulant-interactions", "supplement-bleeding", "supplements with anticoagulant or antiplatelet therapy", "Potential bleeding risk depends on the specific product and evidence, while the anticoagulant, antiplatelet, NSAID, procedure, and patient history often determine the overall hazard.", "Review the full regimen and counsel on bleeding symptoms rather than relying on a mnemonic alone.", "Calling every garlic, ginger, ginkgo, ginseng, or glucosamine exposure equally dangerous ignores dose, evidence, and context.", "A patient on warfarin starts an unknown multi-herb blend and the INR changes.", "Identify every ingredient, assess interaction evidence, monitor INR, and coordinate the regimen change.", "Warfarin response can change through multiple mechanisms and requires direct monitoring."),
  c("kava-liver", "supplement-organ-toxicity", "kava-associated liver risk", "Kava products have been linked to rare but sometimes severe or fatal liver injury, and sedative effects can add to alcohol or other central depressants.", "Avoid kava in high-risk patients and evaluate jaundice, dark urine, severe fatigue, or abdominal symptoms promptly.", "Recommending kava solely because some anxiety trials were positive ignores serious safety uncertainty.", "A patient using kava develops dark urine and jaundice.", "Stop the product and obtain urgent medical assessment for possible liver injury.", "Potentially severe liver injury requires immediate action even when the exact causal factor is uncertain."),
  c("green-tea-extract", "supplement-organ-toxicity", "green tea beverage versus concentrated extract", "Traditional green tea beverages and concentrated extracts are different exposures, and concentrated extracts have been associated with rare liver injury.", "Document the formulation and stop concentrated extract if liver injury is suspected.", "Treating brewed tea and a high-dose extract as identical obscures exposure and risk.", "A patient with elevated liver tests uses a concentrated green tea weight-loss capsule.", "Stop the suspected extract and evaluate the liver injury rather than assuming ordinary tea exposure.", "Formulation and dose materially change the safety assessment."),
  c("black-cohosh-boundary", "supplement-organ-toxicity", "the black cohosh liver-safety boundary", "Reports of liver injury exist, but causal certainty and product identity can be difficult to establish.", "Treat symptoms seriously, stop the suspected product, assess other causes, and avoid overstating certainty.", "Declaring black cohosh either completely safe or definitively hepatotoxic in every user exceeds the evidence.", "A patient using black cohosh develops jaundice.", "Stop the product and evaluate possible liver injury while investigating alternative causes.", "Clinical safety action can be appropriate even when causality remains uncertain."),
  c("ephedra-dmaa", "supplement-organ-toxicity", "ephedra and DMAA regulatory safety", "Dietary supplements containing ephedrine alkaloids are banned, and FDA considers DMAA-containing products illegal and unsafe because of serious cardiovascular risk.", "Advise against use and check current FDA enforcement information for stimulant products.", "Treating a legacy stimulant as acceptable because it appears online ignores current safety actions.", "A bodybuilding product label lists DMAA.", "Do not use it and report or verify the product through current FDA safety channels.", "Online availability does not make an illegal stimulant supplement safe."),
  c("licorice", "supplement-organ-toxicity", "glycyrrhizin-containing licorice", "Glycyrrhizin can produce apparent mineralocorticoid excess with hypertension, hypokalemia, edema, and arrhythmia risk.", "Distinguish true licorice exposure from flavoring and assess blood pressure, potassium, volume status, and interacting medicines.", "Ignoring daily licorice tea in unexplained hypokalemic hypertension misses a reversible exposure.", "A patient has new hypertension, edema, and hypokalemia after heavy licorice tea use.", "Stop glycyrrhizin exposure and evaluate the electrolyte and cardiovascular consequences.", "The clinical pattern is consistent with licorice-induced pseudoaldosteronism."),
  c("yohimbe-bitter-orange", "supplement-organ-toxicity", "stimulant-like botanicals", "Yohimbe and bitter orange products can produce cardiovascular and central nervous system effects, with variable ingredient content and uncertain benefit.", "Avoid stimulant stacking and assess blood pressure, heart rate, rhythm, anxiety, seizures, and co-exposures.", "Combining yohimbe, synephrine, and high-dose caffeine because each is natural can amplify harm.", "A patient develops palpitations after a weight-loss blend containing synephrine and caffeine.", "Stop the product and assess cardiovascular toxicity and other stimulant exposure.", "Multiple sympathomimetic ingredients can create additive risk."),
  c("seven-oh", "supplement-organ-toxicity", "concentrated 7-hydroxymitragynine products", "Added or enhanced 7-OH products are potent opioid exposures that FDA says are not lawful dietary supplements, lawful food additives, or approved drugs.", "Advise avoidance, identify the exact product and co-exposures, and respond to respiratory depression, seizures, addiction, or withdrawal with urgent clinical and poison-center guidance.", "Treating concentrated gummies or shots as equivalent to trace 7-OH naturally present in kratom hides a major exposure difference.", "A patient develops withdrawal, insomnia, and seizures after repeated use of concentrated 7-OH tablets sold at a smoke shop.", "Treat the presentation as a potentially serious opioid exposure rather than routine supplement use.", "Product concentration, opioid pharmacology, and regulatory status make concentrated 7-OH a distinct high-risk exposure."),
  c("caffeine-stacking", "supplement-neuroactive", "cumulative caffeine exposure", "Caffeine exposure can accumulate across coffee, tea, energy drinks, powders, preworkout products, and medications.", "Calculate total daily exposure and connect symptoms to dose, timing, sensitivity, pregnancy, and cardiovascular context.", "Counting only coffee while ignoring energy powders can underestimate stimulant exposure substantially.", "A patient with insomnia and tachycardia uses coffee plus two preworkout scoops daily.", "Estimate the total caffeine load and reduce stimulant exposure while assessing clinical risk.", "Dose stacking and product variability are central to caffeine assessment."),
  c("sedative-stacking", "supplement-neuroactive", "sedative supplement stacking", "Valerian, kava, melatonin, cannabis products, alcohol, antihistamines, opioids, and sedatives can produce additive impairment.", "Review driving, falls, respiratory risk, alcohol, and all central depressants before recommending a sleep product.", "Assuming an over-the-counter sleep blend cannot impair driving because it is herbal is unsafe.", "An older adult combines valerian, diphenhydramine, and alcohol before bed.", "Reduce the cumulative sedative and anticholinergic burden and assess fall risk.", "The combined regimen matters more than the label category of any one product."),
  c("melatonin-boundary", "supplement-neuroactive", "melatonin evidence and product quality", "Melatonin may help selected circadian or sleep problems, but effect varies by indication, timing, dose, and product quality.", "Define the sleep problem and use the lowest reasonable, well-characterized exposure with counseling on sedation and interactions.", "Presenting melatonin as a universal treatment for every insomnia phenotype ignores diagnosis and timing.", "A shift worker takes escalating melatonin at random times without benefit.", "Reassess the circadian target, timing, product, sleep schedule, and alternative causes.", "Chronobiology and timing can be more important than simply increasing the dose."),
  c("red-yeast-rice", "supplement-cardiometabolic", "red yeast rice variability", "Red yeast rice can contain monacolin K, which is chemically identical to lovastatin, but content varies widely and some products contain nephrotoxic citrinin.", "Assess it as a variable statin-like exposure with muscle, liver, kidney, interaction, and regulatory concerns.", "Calling red yeast rice a side-effect-free natural alternative to statins is inaccurate.", "A patient with prior statin myopathy begins red yeast rice and develops muscle pain.", "Stop the product and assess statin-like toxicity and other contributors.", "Meaningful monacolin exposure can reproduce statin adverse effects without predictable dosing."),
  c("omega3-boundary", "supplement-cardiometabolic", "omega-3 product evidence boundaries", "Prescription omega-3 products, studied dietary patterns, and variable over-the-counter fish-oil supplements are not interchangeable.", "Match the exact product, dose, indication, and outcome evidence before making a recommendation.", "Using evidence for a prescription formulation to promise identical cardiovascular benefit from any fish-oil capsule is unsupported.", "A patient replaces prescribed lipid therapy with an unverified fish-oil blend.", "Restore evidence-based therapy and assess whether any omega-3 product has a defined role for the actual indication.", "Formulation and indication determine whether evidence transfers."),
  c("folate-dfe", "vitamins-minerals", "folate and dietary folate equivalents", "Dietary folate equivalents account for differences in bioavailability between food folate and folic acid from fortified foods or supplements.", "Use current life-stage recommendations and DFE units while distinguishing folate, folic acid, deficiency prevention, and high-dose medical indications.", "Treating micrograms of food folate and fasting supplemental folic acid as biologically identical ignores DFE conversion.", "A prenatal label lists folate in micrograms DFE with folic acid in parentheses.", "Interpret both values using current DFE labeling and pregnancy guidance.", "DFE labeling helps compare sources with different bioavailability."),
  c("iron-assessment", "vitamins-minerals", "iron supplementation decisions", "Iron therapy should follow assessment of need, source of loss, life stage, formulation, absorption, tolerability, and toxicity risk.", "Use history and appropriate laboratory measures rather than supplementing every patient with fatigue.", "Giving high-dose iron without confirming need can cause adverse effects and delay diagnosis of bleeding or another cause.", "A patient has fatigue but normal hemoglobin and no iron studies.", "Assess iron status and alternative causes before starting long-term iron.", "Symptoms alone are not specific enough to establish iron deficiency."),
  c("vitamin-d-boundary", "vitamins-minerals", "vitamin D supplementation boundaries", "Vitamin D requirements and treatment depend on life stage, intake, risk, measured status when indicated, comorbidity, and clinical objective.", "Use current population guidance and disease-specific recommendations instead of a single dose for everyone.", "Claiming most adults require the same high-dose vitamin D regimen ignores individual need and toxicity.", "A patient takes several vitamin D products and develops hypercalcemia.", "Stop duplicate exposure and evaluate vitamin D toxicity and calcium complications.", "Fat-soluble vitamin exposure can accumulate and should be reconciled across products."),
  c("nutrient-depletion", "vitamins-minerals", "drug-associated nutrient depletion", "A medication can alter a nutrient marker or absorption without proving that every exposed patient needs routine supplementation.", "Assess duration, dose, symptoms, risk factors, laboratory evidence, and outcome data before supplementing.", "Automatically adding a supplement for every patient taking a listed drug converts an association into an unsupported mandate.", "A long-term metformin user develops neuropathic symptoms and macrocytosis.", "Assess vitamin B12 status and treat confirmed or strongly supported deficiency appropriately.", "Targeted assessment is more defensible than universal supplementation."),
  c("cbd-regulation", "cbd-homeopathy-medical-foods", "CBD product regulation", "Only one prescription CBD drug product is FDA approved, while FDA does not consider ordinary CBD products lawful dietary supplements.", "Separate approved cannabidiol medicine from unapproved consumer CBD products and verify current federal and state requirements.", "Calling every CBD gummy a dietary supplement equivalent to prescription cannabidiol is inaccurate.", "A patient asks whether a retail CBD oil is FDA approved for chronic pain.", "Explain that the retail product is not an FDA-approved pain treatment and review safety and evidence.", "Prescription cannabidiol approval does not extend to consumer CBD products."),
  c("cbd-safety", "cbd-homeopathy-medical-foods", "CBD safety assessment", "CBD can cause liver injury, sedation, drug interactions, and product-quality concerns even when it does not produce the classic THC high.", "Review liver risk, central depressants, interacting medicines, pregnancy, driving, and product content.", "Equating nonintoxicating with harmless ignores clinically important toxicity and interaction pathways.", "A patient on several antiseizure medicines adds high-dose CBD and becomes very sedated.", "Assess additive sedation, interactions, liver risk, and the exact product promptly.", "CBD pharmacology and product variability require active medication review."),
  c("homeopathy", "cbd-homeopathy-medical-foods", "homeopathic product claims", "No homeopathic products are FDA approved, and measurable active ingredients, contamination, toxicity, and delayed effective care can occur.", "Do not infer safety from extreme dilution and do not allow the product to replace proven urgent therapy.", "Assuming homeopathic means only water can miss mislabeled or measurably active ingredients.", "A caregiver wants to replace a child's prescribed seizure medicine with a homeopathic product.", "Advise against substitution and involve the clinical team because delayed effective care is dangerous.", "Lack of FDA approval and uncertain content make substitution unsafe."),
  c("medical-foods", "cbd-homeopathy-medical-foods", "the medical food category", "A medical food is formulated for the specific dietary management of a disease with distinctive nutritional requirements and is used enterally under medical supervision.", "Distinguish a medical food from a supplement, ordinary food, and drug without promising therapeutic approval it does not have.", "Calling any food recommended by a clinician a medical food ignores the category's narrow definition.", "A fortified snack is marketed for general wellness without a distinctive disease-related nutritional requirement.", "Do not classify it as a medical food solely because a clinician recommends it.", "Medical foods are defined by formulation, distinctive nutritional requirements, and supervised disease management."),
  c("ethnobotany-boundary", "traditional-medicine-product-identity", "the boundary between ethnobotany and clinical evidence", "Ethnobotany describes relationships between people, cultures, and plants, while clinical efficacy requires evidence for a defined intervention and outcome.", "Use historical practice to understand context and generate questions, then appraise current product-specific evidence.", "Treating centuries of use as proof that every modern extract is effective skips exposure definition and outcome testing.", "A product advertisement cites ancient use as its only evidence for treating heart failure.", "Acknowledge the history but reject the disease-treatment inference without adequate clinical evidence.", "Traditional use and demonstrated clinical benefit answer different questions."),
  c("botanical-nomenclature", "traditional-medicine-product-identity", "precise botanical identification", "Common names can refer to different species, and different plant parts can contain different active or toxic constituents.", "Record genus, species, plant part, and product identity when the information is available.", "Documenting only herbal capsule makes reliable evidence and interaction matching impossible.", "Two products share a common plant name but use different species and plant parts.", "Treat them as different exposures until their identity and composition are established.", "Botanical nomenclature and plant part are core medication-history data."),
  c("botanical-preparation", "traditional-medicine-product-identity", "botanical preparation and extraction", "Infusion, powder, tincture, expressed juice, standardized extract, and highly bioavailable formulation can produce different chemical exposures.", "Match evidence and safety information to the preparation, extraction process, formulation, and dose.", "Transferring evidence from a brewed tea to a concentrated extract ignores a potentially large exposure difference.", "A trial studied a standardized capsule, while the patient uses a homemade tincture.", "Do not assume equivalence without composition and exposure data.", "Preparation and extraction can change both benefit and toxicity."),
  c("botanical-route", "traditional-medicine-product-identity", "route-specific botanical assessment", "Oral, topical, inhaled, and other routes can change local effects, systemic exposure, interactions, and regulatory category.", "Document the route and dosage form before applying evidence or safety conclusions.", "Assuming a topical gel and oral latex have the same safety profile confuses distinct exposures.", "A patient reports using aloe but cannot say whether it is topical gel or oral latex.", "Clarify the product and route before giving a safety recommendation.", "The ingredient name alone does not define the exposure."),
  c("culinary-extract-boundary", "traditional-medicine-product-identity", "the culinary versus concentrated extract boundary", "Food-level exposure and concentrated supplement exposure may differ in dose, constituent profile, absorption, and risk.", "Ask whether the patient uses a food, beverage, powder, extract, or enhanced formulation and quantify the amount.", "Assuming a spice used in cooking proves that a high-bioavailability capsule is equally safe is unsupported.", "A patient compares a concentrated curcumin product with turmeric used in meals.", "Explain that the exposures are not interchangeable and assess the concentrated product separately.", "Concentration and formulation can create a new clinical risk profile."),
  c("elderberry-evidence-safety", "botanical-case-studies", "elderberry evidence and plant-part safety", "Limited evidence suggests possible symptom benefit for selected upper respiratory infections, while raw or unripe berries and other plant parts can contain cyanide-producing substances.", "Identify the species, part, preparation, product, intended use, and patient vulnerability before advising.", "Promising prevention or treatment of every viral disease from preliminary studies overstates the evidence.", "A family plans to make syrup from raw unripe berries and stems.", "Advise against that preparation because nonripe fruit and other plant parts can cause serious gastrointestinal toxicity.", "Elderberry benefit remains uncertain, and plant-part toxicity is clinically important."),
  c("turmeric-formulation-risk", "botanical-case-studies", "turmeric formulation and liver risk", "Curcumin content and bioavailability vary, evidence remains condition and product specific, and highly bioavailable formulations have been linked to liver injury.", "Identify the formulation and stop the product promptly when compatible liver-injury symptoms develop.", "Generalizing culinary turmeric safety to every enhanced curcumin extract ignores formulation-dependent exposure.", "A patient using piperine-enhanced curcumin develops dark urine, poor appetite, and jaundice.", "Stop the product and obtain prompt assessment for possible liver injury.", "Enhanced absorption can change both intended exposure and toxicity."),
  c("aloe-part-route", "botanical-case-studies", "aloe product and plant-part distinctions", "Topical inner-leaf gel, oral gel, aloe latex, and whole-leaf extract have different constituents, uses, and safety concerns.", "Distinguish the product and route, then assess diarrhea, potassium loss, pregnancy, liver risk, and interacting medicines.", "Calling all aloe harmless skin gel can miss clinically important oral latex exposure.", "A patient taking digoxin uses oral aloe latex daily and develops diarrhea.", "Stop the unsafe exposure and assess fluid status, potassium, and digoxin-related risk.", "Oral latex can cause diarrhea and electrolyte loss, which differs from topical gel exposure."),
  c("cannabis-product-boundary", "botanical-case-studies", "cannabis-derived product boundaries", "A cannabis plant product, retail CBD item, prescription cannabidiol, dronabinol, and nabilone are not interchangeable products or evidence categories.", "Identify active ingredients, formulation, route, source, indication, and regulatory status before applying evidence.", "Using prescription cannabidiol trial results to validate every retail CBD gummy is an invalid product transfer.", "A patient replaces prescription cannabidiol with an unlabeled dispensary oil.", "Restore clinician-directed therapy and assess the oil's uncertain CBD, THC, contaminant, and interaction exposure.", "Defined prescription products cannot be substituted with compositionally uncertain consumer products."),
  c("fish-oil-label", "botanical-case-studies", "fish-oil label interpretation", "Total fish-oil mass does not equal EPA plus DHA exposure, and dietary, prescription, and consumer products have different compositions and evidence.", "Calculate EPA and DHA per daily serving and match the exact formulation to the clinical indication.", "Recommending any one-gram fish-oil capsule as equivalent to a studied prescription regimen ignores active-content and product differences.", "A bottle says 1,000 mg fish oil but lists much smaller EPA and DHA amounts per capsule.", "Base exposure assessment on the EPA and DHA amounts and actual daily servings, not front-label oil mass.", "The clinically relevant fatty-acid exposure is found in the detailed label."),
  c("adverse-event-reporting", "supplement-care-workflow", "dietary supplement adverse event reporting", "Suspected serious supplement reactions warrant clinical care, product discontinuation when appropriate, documentation, and reporting to FDA.", "Capture the product, ingredients, lot if available, dose, timing, co-exposures, event, treatment, and outcome.", "Waiting for absolute causal proof before reporting can prevent FDA from detecting a postmarket signal.", "A patient is hospitalized with liver injury after a multi-ingredient supplement.", "Stop the suspected product, provide care, preserve product details, and report the event through the FDA pathway.", "Postmarket surveillance depends on timely, detailed reports even when causality is uncertain."),
  c("clinical-workflow", "supplement-care-workflow", "an evidence-based supplement care plan", "A defensible plan connects the patient's goal, exact product, evidence, exposure, interactions, risks, alternatives, shared decision, monitoring, and follow-up.", "Document what will be used or stopped, why, how benefit and harm will be measured, and when the plan will be reassessed.", "Writing patient takes supplement without product or follow-up details creates an unauditable plan.", "A patient strongly prefers a low-risk supplement with uncertain benefit.", "Use shared decision-making, define a time-limited trial and measurable outcome, and stop if benefit is absent or harm occurs.", "Transparent goals and stopping rules protect autonomy without overstating evidence."),
];

const caseDistractors = [
  [
    "Assume the panel means FDA approved a therapeutic indication",
    "Classify it as a prescription drug solely because it is a capsule",
    "Treat its shelf placement as proof of efficacy"
  ],
  [
    "Confirm approval because pharmacies stock it",
    "Assume sales volume replaces safety evidence",
    "Treat all supplements as unregulated and ignore their labels"
  ],
  [
    "Treat the notification as approval of the disease claim",
    "Assume notification proves the product works",
    "Use the notification to replace clinical trials"
  ],
  [
    "Use only the 200 mg front-label amount as the daily dose",
    "Divide 200 mg by three to estimate total daily exposure",
    "Ignore serving instructions because powders are standardized"
  ],
  [
    "Interpret the disclaimer as FDA approval to prevent infection",
    "Assume a structure/function claim proves clinical benefit",
    "Treat any immune-support claim as proof of vaccine-equivalent protection"
  ],
  [
    "Accept the promise if the word natural appears",
    "Assume a disclaimer legalizes an explicit disease-treatment claim",
    "Classify heart-failure reversal as an ordinary nutrient-content claim"
  ],
  [
    "Recommend it as effective because verification replaces trials",
    "Tell the patient FDA approved its disease indication",
    "Infer that all interactions have been excluded"
  ],
  [
    "Reassure the patient that plants cannot harm the liver",
    "Exclude herbs from medication reconciliation",
    "Assume only prescription products have dose-dependent effects"
  ],
  [
    "Transfer efficacy based solely on the shared common name",
    "Assume the multi-ingredient product must be more effective",
    "Ignore extraction and dose because the plant name matches"
  ],
  [
    "Treat every brand as the same lovastatin dose",
    "Record only the words natural cholesterol product",
    "Assume contamination is impossible in commercial products"
  ],
  [
    "Ignore the product unless it requires a prescription",
    "Raise the transplant drug dose without identifying the herb",
    "Wait for organ rejection before asking for the label"
  ],
  [
    "Assess garlic alone and disregard the NSAID",
    "Assume a normal INR excludes every bleeding mechanism",
    "Increase the anticoagulant because garlic is natural"
  ],
  [
    "Increase the immunosuppressant indefinitely without addressing the supplement",
    "Assume enzyme inhibition explains the lower concentration",
    "Stop the transplant medicine and substitute the herb"
  ],
  [
    "Reassure the patient that herbal serotonin effects cannot be serious",
    "Increase the SSRI to treat agitation",
    "Continue both agents and wait a week despite clonus"
  ],
  [
    "Use one fixed stop interval for every herb and procedure",
    "Tell the patient to stop warfarin independently",
    "Omit supplements from the anesthesia medication list"
  ],
  [
    "Double warfarin without identifying the product",
    "Assume every herb affects INR in the same direction",
    "Ignore the change because supplements cannot alter warfarin response"
  ],
  [
    "Continue kava until causality is proven",
    "Add another liver-detoxification supplement",
    "Treat jaundice as an expected harmless effect"
  ],
  [
    "Treat the capsule as equivalent to ordinary brewed tea",
    "Continue the product because tea is a food",
    "Add more extract to improve liver metabolism"
  ],
  [
    "Declare causality certain from timing alone",
    "Continue the product because causality is uncertain",
    "Ignore other liver-injury causes once the herb is identified"
  ],
  [
    "Accept DMAA because online sales prove legality",
    "Use half a serving as proof of safety",
    "Add caffeine to offset adverse cardiovascular effects"
  ],
  [
    "Treat licorice tea as irrelevant to electrolyte findings",
    "Recommend additional licorice for the edema",
    "Assume hypokalemia rules out a mineralocorticoid-like effect"
  ],
  [
    "Add a decongestant to counter fatigue",
    "Continue because every ingredient is plant derived",
    "Ignore the caffeine because the blend contains synephrine"
  ],
  [
    "Treat concentrated tablets as equivalent to trace plant exposure",
    "Use more product as an unsupervised withdrawal treatment",
    "Assume supplement labeling excludes opioid effects"
  ],
  [
    "Count coffee alone",
    "Take the preworkout later in the evening",
    "Increase caffeine to compensate for poor sleep"
  ],
  [
    "Add another sedative because each product is nonprescription",
    "Assume alcohol cancels antihistamine effects",
    "Advise driving if the products are labeled natural"
  ],
  [
    "Double the dose regardless of timing",
    "Assume melatonin treats every cause of insomnia",
    "Continue escalating without reviewing the sleep schedule"
  ],
  [
    "Continue because red yeast rice cannot reproduce statin toxicity",
    "Add a statin without assessing the new pain",
    "Assume the symptom proves efficacy"
  ],
  [
    "Treat any fish-oil capsule as equivalent to a prescription formulation",
    "Stop glucose and lipid monitoring",
    "Assume total oil mass identifies the EPA and DHA dose"
  ],
  [
    "Add the DFE and parenthetical folic acid amounts together",
    "Treat food folate and fasting folic acid micrograms as identical",
    "Ignore life stage when reading the label"
  ],
  [
    "Start high-dose iron indefinitely based on fatigue alone",
    "Exclude iron deficiency solely because hemoglobin is normal",
    "Assume every fatigue syndrome responds to iron"
  ],
  [
    "Add calcium without assessing the hypercalcemia",
    "Continue every vitamin D product because vitamins are essential",
    "Assume water intake alone makes chronic high dosing safe"
  ],
  [
    "Treat neuropathy with iron without assessment",
    "Assume every metformin user requires the same supplement dose",
    "Ignore B12 because the patient takes a diabetes medicine"
  ],
  [
    "Treat the oil as an approved pain drug",
    "Transfer prescription CBD approval to all retail products",
    "Assume hemp origin establishes clinical effectiveness"
  ],
  [
    "Assume nonintoxicating CBD cannot cause sedation",
    "Ignore the antiseizure medicines in the interaction review",
    "Double CBD because sedation proves seizure control"
  ],
  [
    "Replace the seizure medicine because dilution guarantees safety",
    "Treat a compendium listing as FDA approval",
    "Wait for breakthrough seizures before discussing the substitution"
  ],
  [
    "Classify it as a medical food solely because a clinician suggested it",
    "Assume fortification establishes a distinctive disease-related requirement",
    "Treat the snack as an approved drug"
  ],
  [
    "Accept the heart-failure claim because ancient use proves efficacy",
    "Treat historical use as equivalent to a randomized trial",
    "Assume every modern extract matches the historical preparation"
  ],
  [
    "Record both products as identical because their common names match",
    "Ignore plant part when comparing toxicity",
    "Assume all species within a common name have the same constituents"
  ],
  [
    "Treat the tincture as trial-equivalent without composition data",
    "Use the capsule trial dose as a tincture volume directly",
    "Ignore extraction method when evaluating exposure"
  ],
  [
    "Assume aloe always means topical gel",
    "Apply oral-latex safety data to every topical product without checking",
    "Give a universal aloe dose before determining the route"
  ],
  [
    "Assume culinary safety proves concentrated extract safety",
    "Treat bioavailability enhancement as irrelevant",
    "Recommend doubling the capsule because it is a food ingredient"
  ],
  [
    "Recommend raw stems to increase potency",
    "Assume unripe berries are safer than ripe fruit",
    "Infer that all plant parts are harmless because syrup is sold commercially"
  ],
  [
    "Continue until liver injury is definitively attributed",
    "Assume enhanced absorption reduces all toxicity",
    "Add another curcumin formulation to improve appetite"
  ],
  [
    "Continue latex because topical aloe is commonly used",
    "Ignore potassium because the product is botanical",
    "Increase digoxin empirically before assessing the diarrhea"
  ],
  [
    "Treat the oil as a dose-equivalent replacement",
    "Assume dispensary products have fixed CBD and THC content",
    "Stop monitoring because the plant source is natural"
  ],
  [
    "Use the front-label 1,000 mg as the EPA dose",
    "Assume EPA and DHA content never varies",
    "Treat every capsule as prescription-equivalent"
  ],
  [
    "Wait for absolute causal proof before reporting",
    "Discard the bottle before recording ingredients and lot",
    "Continue exposure until the manufacturer confirms a problem"
  ],
  [
    "Promise benefit because the patient prefers it",
    "Change several supplements simultaneously without tracking outcomes",
    "Continue indefinitely without a stopping rule"
  ]
];

export const dietarySupplementsComplementaryMedicineQuestionBank = concepts.map((concept, index) => ({
  id: `supp-${String(index + 1).padStart(2, "0")}-case`, conceptGroup: concept.key, lesson: concept.lesson, difficulty: "Applied",
  question: `${concept.caseText} Which response is best?`, choices: [concept.caseAnswer, ...caseDistractors[index]], answer: 0, explanation: concept.rationale, reviewHref: `#${concept.lesson}`,
}));

// Original application cases supplement the concept-generated review bank.
dietarySupplementsComplementaryMedicineQuestionBank.push(
  {
    id: "supp-folate-label-dose", conceptGroup: "folate-label-interpretation", lesson: "folate-labels-preconception", difficulty: "Applied",
    question: "A prenatal supplement lists 680 mcg DFE (400 mcg folic acid) per daily serving. How much folic acid does that serving provide?",
    choices: ["400 mcg", "680 mcg", "1,080 mcg", "240 mcg"], answer: 0,
    explanation: "The parenthetical value gives the folic acid amount. DFE expresses nutrient activity; adding the two values double-counts the serving.", reviewHref: "#folate-labels-preconception",
  },
  {
    id: "supp-folate-rda-versus-prevention", conceptGroup: "folate-rda-prevention", lesson: "folate-labels-preconception", difficulty: "Applied",
    question: "Which statement correctly separates the pregnancy folate RDA from the USPSTF routine neural-tube-defect prevention recommendation?",
    choices: ["Pregnancy RDA: 600 mcg DFE total daily intake; routine prevention: a supplement containing 400 to 800 mcg folic acid daily", "Pregnancy RDA: 600 mcg folic acid; routine prevention: 400 to 800 mcg DFE", "Both recommendations require exactly 600 mcg folic acid from a supplement", "Meeting the RDA means preconception folic acid supplementation has no role"], answer: 0,
    explanation: "The recommendations use different measures and purposes. Total folate intake in DFE is distinct from the folic acid supplement dose studied for prevention.", reviewHref: "#folate-labels-preconception",
  },
  {
    id: "supp-folate-start-before-conception", conceptGroup: "folate-preconception-timing", lesson: "folate-labels-preconception", difficulty: "Applied",
    question: "An average-risk patient hopes to conceive in six weeks and asks when to begin routine folic acid supplementation. Which plan follows USPSTF guidance?",
    choices: ["Begin now, allowing at least one month before conception, and continue through the first two to three months of pregnancy", "Wait for a positive pregnancy test before discussing supplementation", "Start after the first trimester", "Take a single larger dose on the day of conception"], answer: 0,
    explanation: "The prevention window begins before anticipated conception. A supplement containing 400 to 800 mcg folic acid daily is the routine USPSTF recommendation; pregnancy nutritional needs continue beyond this early window.", reviewHref: "#folate-labels-preconception",
  },
  {
    id: "supp-folate-high-risk-boundary", conceptGroup: "folate-high-risk-plan", lesson: "folate-labels-preconception", difficulty: "Advanced",
    question: "A patient with a previous neural-tube-defect-affected pregnancy asks whether the routine USPSTF dose is automatically the entire preconception plan. What is the best response?",
    choices: ["Arrange an individualized preconception plan because the routine recommendation excludes this higher-risk history", "Assure the patient that the routine recommendation specifically covers all recurrence-risk situations", "Recommend stopping folic acid until pregnancy is confirmed", "Recommend stacking several prenatal multivitamins without reviewing their other ingredients"], answer: 0,
    explanation: "Prior affected pregnancy falls outside the routine USPSTF recommendation. The appropriate regimen needs clinical planning rather than automatic standard dosing or unreviewed multivitamin stacking.", reviewHref: "#folate-labels-preconception",
  },
);

dietarySupplementsComplementaryMedicineQuestionBank.push(
{
  "id": "supp-vitamin-e-limit",
  "conceptGroup": "vitamin-e-limit",
  "lesson": "vitamins-minerals",
  "difficulty": "Applied",
  "question": "An adult taking 400 IU of synthetic vitamin E daily for cardiovascular prevention says that being below the formal upper limit guarantees benefit and safety. Which response is best?",
  "choices": [
    "The upper limit is not a treatment target or safety guarantee; routine cardiovascular prevention is unsupported and harm has occurred at this dose in trials",
    "400 IU is the formal adult tolerable upper intake level",
    "Any dose below the upper limit has proven cardiovascular benefit",
    "Only dietary vitamin E can affect bleeding"
  ],
  "answer": 0,
  "explanation": "The adult supplemental alpha-tocopherol upper limit is 1,000 mg daily, but it does not establish benefit or eliminate risk below that amount. SELECT found increased prostate cancer risk with 400 IU of synthetic vitamin E daily.",
  "reviewHref": "#vitamins-minerals"
},
{
  "id": "supp-soy-exposure",
  "conceptGroup": "soy-exposure",
  "lesson": "botanical-case-studies",
  "difficulty": "Applied",
  "question": "A patient equates an observational association between soy-food intake and lower breast cancer risk with proof that concentrated isoflavone capsules prevent cancer. Which interpretation is best?",
  "choices": [
    "Neither causation nor capsule efficacy follows from that food-based association",
    "Any soy capsule must reproduce the food association",
    "The association proves that all postmenopausal patients should avoid tofu",
    "Phytoestrogen structure alone establishes clinical harm"
  ],
  "answer": 0,
  "explanation": "Food exposure, supplement formulation and study design differ. Observational associations cannot establish that concentrated soy supplements prevent breast cancer.",
  "reviewHref": "#botanical-case-studies"
},
{
  "id": "supp-melatonin-uncertainty",
  "conceptGroup": "melatonin-uncertainty",
  "lesson": "supplement-neuroactive",
  "difficulty": "Applied",
  "question": "A patient asks whether nightly melatonin has established long-term safety. Which counseling statement is most accurate?",
  "choices": [
    "Long-term safety is insufficiently characterized; review the indication, adverse effects, product and interacting medicines",
    "Long-term safety is established for all ages and doses",
    "Normal endogenous melatonin proves any supplement dose is harmless",
    "Dependence from suppression of endogenous production is an established outcome in every user"
  ],
  "answer": 0,
  "explanation": "Short-term safety experience does not establish long-term safety. Counseling should preserve uncertainty and assess the actual exposure rather than promise safety or assert inevitable dependence.",
  "reviewHref": "#supplement-neuroactive"
},
{
  "id": "supp-homeopathy-evidence",
  "conceptGroup": "homeopathy-evidence",
  "lesson": "cbd-homeopathy-medical-foods",
  "difficulty": "Applied",
  "question": "A homeopathic product cites a compendium and serial dilution as proof that it can replace effective treatment. What is the main error?",
  "choices": [
    "Manufacturing or dilution claims do not establish clinical efficacy",
    "A compendium entry automatically supplies clinical trial evidence",
    "Greater dilution guarantees a larger clinical effect",
    "The absence of a prescription proves both efficacy and safety"
  ],
  "answer": 0,
  "explanation": "Homeopathy lacks convincing evidence for specific conditions. Product standards or dilution terminology are not substitutes for clinical efficacy evidence, and replacing effective care can cause harm.",
  "reviewHref": "#cbd-homeopathy-medical-foods"
}
);


dietarySupplementsComplementaryMedicineQuestionBank.push(
{
  "id": "supp-biotin-troponin",
  "conceptGroup": "biotin-troponin",
  "lesson": "supplement-reconciliation",
  "difficulty": "Applied",
  "question": "Chest-pain symptoms conflict with a low troponin result in a patient taking high-dose biotin. What should happen next?",
  "choices": [
    "Alert the treating team and laboratory to possible assay interference while continuing clinical evaluation",
    "Exclude acute coronary syndrome based on the single result",
    "Assume biotin affects every assay identically",
    "Wait a fixed seven days before addressing the chest pain"
  ],
  "answer": 0,
  "explanation": "Biotin can falsely lower results on susceptible troponin assays. Clinical assessment and assay-specific advice are required.",
  "reviewHref": "#supplement-reconciliation"
},
{
  "id": "supp-probiotic-preterm",
  "conceptGroup": "probiotic-preterm",
  "lesson": "supplement-targeted-products",
  "difficulty": "Applied",
  "question": "A caregiver proposes a retail probiotic for a hospitalized preterm infant. Which response is best?",
  "choices": [
    "Involve the neonatal team; live probiotic organisms can cause severe infection in this population",
    "Assume all strains have the same neonatal benefit",
    "Use an adult product at half the dose",
    "Treat retail availability as proof of neonatal safety"
  ],
  "answer": 0,
  "explanation": "FDA has warned of potentially fatal infections in hospitalized preterm infants receiving probiotic products.",
  "reviewHref": "#supplement-targeted-products"
},
{
  "id": "supp-cranberry-active-infection",
  "conceptGroup": "cranberry-active-infection",
  "lesson": "supplement-targeted-products",
  "difficulty": "Applied",
  "question": "A patient with dysuria and fever asks whether cranberry capsules can replace infection treatment. What is the best response?",
  "choices": [
    "Seek assessment; prevention evidence does not make cranberry treatment for an existing infection",
    "Use cranberry until fever resolves",
    "Double the capsule dose for antibiotic-equivalent action",
    "Treat fever as evidence of supplement benefit"
  ],
  "answer": 0,
  "explanation": "Cranberry may have a preventive role for some recurrent infections, but it is not established treatment for an active UTI.",
  "reviewHref": "#supplement-targeted-products"
},
{
  "id": "supp-saw-palmetto-efficacy",
  "conceptGroup": "saw-palmetto-efficacy",
  "lesson": "supplement-targeted-products",
  "difficulty": "Applied",
  "question": "A patient wants to replace effective BPH therapy with saw palmetto alone. What does the evidence support?",
  "choices": [
    "Explain that saw palmetto alone provides little or no symptom benefit and review the treatment plan",
    "Assume it has proven equivalent benefit to all BPH medicines",
    "Promise that triple dosing makes it effective",
    "Use product popularity as the main efficacy evidence"
  ],
  "answer": 0,
  "explanation": "NCCIH summarizes trials and reviews showing little or no benefit from saw palmetto alone for BPH symptoms.",
  "reviewHref": "#supplement-targeted-products"
},
{
  "id": "supp-zinc-route",
  "conceptGroup": "zinc-route",
  "lesson": "supplement-targeted-products",
  "difficulty": "Applied",
  "question": "A patient extrapolates possible oral zinc cold benefits to a zinc nasal spray. What distinction matters?",
  "choices": [
    "Intranasal zinc has been linked to prolonged or permanent loss of smell",
    "All routes have the same safety profile",
    "Nasal dosing removes every adverse effect",
    "Oral evidence proves nasal efficacy"
  ],
  "answer": 0,
  "explanation": "Route changes safety; the intranasal anosmia concern is not resolved by oral-lozenge studies.",
  "reviewHref": "#supplement-targeted-products"
},
{
  "id": "supp-iron-infant-volume",
  "conceptGroup": "iron-infant-volume",
  "lesson": "infant-nutrient-supplementation",
  "difficulty": "Applied",
  "question": "A prescribed 1 mg/kg/day elemental iron regimen is used for a 6 kg infant. Liquid contains 15 mg elemental iron/mL. What daily volume is correct?",
  "choices": [
    "0.4 mL",
    "6 mL",
    "2.5 mL",
    "15 mL"
  ],
  "answer": 0,
  "explanation": "The dose is 6 mg daily. Dividing by 15 mg/mL gives 0.4 mL.",
  "reviewHref": "#infant-nutrient-supplementation"
},
{
  "id": "supp-infant-vitamin-d-units",
  "conceptGroup": "infant-vitamin-d-units",
  "lesson": "infant-nutrient-supplementation",
  "difficulty": "Applied",
  "question": "An infant needs 400 IU vitamin D daily. Which equivalent amount is correct?",
  "choices": [
    "10 mcg",
    "400 mcg",
    "1 mcg",
    "100 mg"
  ],
  "answer": 0,
  "explanation": "Vitamin D 1 mcg equals 40 IU; 400 IU is 10 mcg. Check whether the product concentration is per drop or per mL.",
  "reviewHref": "#infant-nutrient-supplementation"
},
{
  "id": "supp-infant-iron-timing",
  "conceptGroup": "infant-iron-timing",
  "lesson": "infant-nutrient-supplementation",
  "difficulty": "Applied",
  "question": "A healthy term infant is exclusively breastfed at four months and does not yet receive iron-containing complementary foods. Which AAP prevention plan applies?",
  "choices": [
    "Oral iron 1 mg/kg/day until sufficient iron-containing complementary intake is established",
    "No consideration of iron until age two years",
    "The same fixed volume of every iron product",
    "Automatic use of the term schedule for every premature infant"
  ],
  "answer": 0,
  "explanation": "Feeding and age determine the term-infant plan; prematurity and product concentration require separate consideration.",
  "reviewHref": "#infant-nutrient-supplementation"
},
{
  "id": "supp-infant-drop-concentration",
  "conceptGroup": "infant-drop-concentration",
  "lesson": "infant-nutrient-supplementation",
  "difficulty": "Applied",
  "question": "A caregiver switches between vitamin D products, one labeled per drop and another per mL. What is the priority?",
  "choices": [
    "Recalculate the volume or drops from the prescribed IU and new product concentration",
    "Keep the old volume because all infant products match",
    "Add both products to avoid deficiency",
    "Treat mcg and IU as identical numbers"
  ],
  "answer": 0,
  "explanation": "Different liquid concentrations can produce dosing errors. Preserve the prescribed ingredient amount and use the correct measuring device.",
  "reviewHref": "#infant-nutrient-supplementation"
},
{
  "id": "supp-vinpocetine-pregnancy",
  "conceptGroup": "vinpocetine-pregnancy",
  "lesson": "supplement-organ-toxicity",
  "difficulty": "Applied",
  "question": "A patient who could become pregnant asks about a vinpocetine memory supplement. What is the best advice?",
  "choices": [
    "Avoid vinpocetine because of FDA fetal-harm concerns",
    "Use it until a pregnancy test becomes positive",
    "Assume plant derivation excludes fetal risk",
    "Use an unlisted dose to make it safe"
  ],
  "answer": 0,
  "explanation": "FDA advises pregnant women and those who could become pregnant not to take vinpocetine.",
  "reviewHref": "#supplement-organ-toxicity"
},
{
  "id": "supp-butterbur-pa",
  "conceptGroup": "butterbur-pa",
  "lesson": "supplement-organ-toxicity",
  "difficulty": "Applied",
  "question": "A butterbur product is advertised as PA-free and guaranteed liver-safe. How should this be interpreted?",
  "choices": [
    "PA removal addresses an important hazard but does not guarantee safety; liver injury has also been reported with purported PA-free products",
    "PA-free means all liver risk has been disproven",
    "Older migraine recommendations prove current safety",
    "Any liver symptoms can be ignored if the label says PA-free"
  ],
  "answer": 0,
  "explanation": "Butterbur pyrrolizidine alkaloids are hazardous, and a PA-free claim does not eliminate all safety uncertainty.",
  "reviewHref": "#supplement-organ-toxicity"
},
{
  "id": "supp-same-bipolar",
  "conceptGroup": "same-bipolar",
  "lesson": "supplement-neuroactive",
  "difficulty": "Applied",
  "question": "A patient with bipolar disorder wants to self-treat low mood with SAMe. What concern is most relevant?",
  "choices": [
    "SAMe can worsen mania and needs clinician review",
    "SAMe has no psychiatric effects because it occurs naturally",
    "SAMe is a proven replacement for mood stabilizers",
    "Bipolar history has no relevance to supplement selection"
  ],
  "answer": 0,
  "explanation": "SAMe may worsen mania and can interact with serotonergic regimens.",
  "reviewHref": "#supplement-neuroactive"
},
{
  "id": "supp-hawthorn-digoxin",
  "conceptGroup": "hawthorn-digoxin",
  "lesson": "supplement-cardiometabolic",
  "difficulty": "Applied",
  "question": "A patient taking digoxin asks about adding hawthorn for heart failure. What is the best response?",
  "choices": [
    "Avoid the combination because of possible interaction and review the plan with the treating team",
    "Stop digoxin and replace it with hawthorn",
    "Assume every heart supplement is interaction-free",
    "Use hawthorn as an automatic replacement for guideline-directed therapy"
  ],
  "answer": 0,
  "explanation": "Hawthorn evidence is limited and the AHA identifies a possible digoxin interaction.",
  "reviewHref": "#supplement-cardiometabolic"
},
{
  "id": "supp-medical-food-ingredients",
  "conceptGroup": "medical-food-ingredients",
  "lesson": "cbd-homeopathy-medical-foods",
  "difficulty": "Applied",
  "question": "A learner says every medical-food ingredient must use the GRAS pathway. What is the accurate correction?",
  "choices": [
    "Other lawful bases include compliant food or color additives and prior sanctions",
    "GRAS is the only permitted legal basis",
    "Any ingredient is allowed if a clinician recommends it",
    "Food-use legality proves clinical efficacy"
  ],
  "answer": 0,
  "explanation": "FDA medical-food guidance permits multiple lawful ingredient pathways; these do not establish drug approval or efficacy.",
  "reviewHref": "#cbd-homeopathy-medical-foods"
},
{
  "id": "supp-potassium-ckd",
  "conceptGroup": "potassium-ckd",
  "lesson": "vitamins-minerals",
  "difficulty": "Applied",
  "question": "A patient with CKD taking an ACE inhibitor wants a potassium supplement and potassium salt substitute. What should be reviewed first?",
  "choices": [
    "Serum potassium, kidney function and the full regimen because hyperkalemia risk is increased",
    "Assume all dietary potassium additions are safe",
    "Recommend both without laboratory review",
    "Treat a general adequate-intake target as a replacement prescription"
  ],
  "answer": 0,
  "explanation": "Reduced kidney excretion and medicines can increase potassium accumulation; intake targets are not automatic prescriptions.",
  "reviewHref": "#vitamins-minerals"
}
);

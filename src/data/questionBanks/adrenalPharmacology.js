const c = (name, lesson, principle, action, hazard, caseStem, caseAnswer, why) => ({ name, lesson, principle, action, hazard, caseStem, caseAnswer, why });

const concepts = [
  c("HPA negative feedback", "hpa-axis-control", "Cortisol and synthetic glucocorticoids suppress hypothalamic CRH and pituitary ACTH signaling.", "Include every exogenous glucocorticoid route when evaluating reduced ACTH drive.", "Stopping a suppressive regimen abruptly can reveal inadequate adrenal cortisol output.", "A patient on prolonged dexamethasone has low ACTH and low endogenous cortisol.", "Attribute the pattern to exogenous negative feedback until evaluated further.", "Exogenous receptor activation reduces the trophic signals that maintain endogenous cortisol production."),
  c("circadian cortisol", "hpa-axis-control", "Cortisol secretion is pulsatile, usually highest near waking, and lowest around midnight.", "Interpret a cortisol sample through collection time, sleep pattern, stress, binding, and medication exposure.", "Comparing a midnight result with a morning reference can create a false endocrine conclusion.", "A stable patient has a cortisol value drawn at 11 PM.", "Use a time-appropriate interpretation rather than a morning range.", "Normal HPA output varies substantially across the day."),
  c("ACTH receptor signaling", "hpa-axis-control", "ACTH activates MC2R with MRAP support to stimulate adrenal steroidogenesis and maintain cortical trophic input.", "Localize an MC2R or MRAP defect upstream of impaired adrenal cortisol synthesis.", "Calling MC2R a nuclear glucocorticoid receptor confuses peptide-hormone and steroid-hormone signaling.", "ACTH is high but the adrenal cannot respond because MC2R function is absent.", "Predict low cortisol despite strong pituitary drive.", "The adrenal signal cannot be transduced even when ACTH is abundant."),
  c("zona glomerulosa", "adrenal-zones", "Zona glomerulosa produces aldosterone under major control from angiotensin II and potassium.", "Assign a selective aldosterone-synthase inhibitor to the outer cortical zone.", "Using ACTH as the only regulator of aldosterone ignores the renin-angiotensin-potassium system.", "Hyperkalemia directly stimulates a cortical zone.", "Predict increased zona glomerulosa aldosterone synthesis.", "Potassium is a major direct regulator of glomerulosa output."),
  c("zona fasciculata", "adrenal-zones", "Zona fasciculata produces cortisol and responds strongly to ACTH.", "Locate ACTH-driven cortisol synthesis in the middle adrenal cortex.", "Assigning cortisol synthesis to the medulla confuses steroid and catecholamine tissues.", "ACTH rises during stress and increases a cortical steroid.", "Identify cortisol from the zona fasciculata.", "The fasciculata is the principal ACTH-responsive cortisol-producing zone."),
  c("zona reticularis", "adrenal-zones", "Zona reticularis favors DHEA and related adrenal androgen precursors.", "Use reticularis enzyme balance to explain increased adrenal androgen flow.", "Calling DHEA the main mineralocorticoid reverses its steroid class.", "A pathway shift increases DHEA sulfate production.", "Localize the change primarily to the zona reticularis.", "The reticularis is specialized for adrenal androgen precursor synthesis."),
  c("StAR cholesterol transfer", "steroidogenesis", "StAR moves cholesterol to the inner mitochondrial membrane where steroid synthesis begins.", "Identify impaired StAR function when multiple adrenal steroid classes are deficient.", "Treating StAR as a plasma steroid carrier misses its intracellular mitochondrial role.", "Cortisol, aldosterone, and adrenal androgen synthesis are all severely reduced.", "Consider failure of the shared cholesterol-entry step.", "All adrenal steroid branches depend on mitochondrial cholesterol delivery."),
  c("CYP11A1 entry reaction", "steroidogenesis", "CYP11A1 cleaves the cholesterol side chain to produce pregnenolone.", "Place CYP11A1 immediately after mitochondrial cholesterol delivery.", "Placing CYP11A1 only in the final aldosterone step misorders the common pathway.", "Cholesterol reaches the inner mitochondrial membrane but cannot become pregnenolone.", "Localize the block to CYP11A1 activity.", "Side-chain cleavage is the first committed chemical conversion of cholesterol."),
  c("CYP11B isoforms", "steroidogenesis", "CYP11B1 completes cortisol synthesis while CYP11B2 performs the terminal aldosterone-synthase sequence.", "Use cortical zone and final product to distinguish the two mitochondrial isoforms.", "Treating CYP11B1 and CYP11B2 as interchangeable erases zone-specific pathway control.", "A selective inhibitor blocks the final aldosterone pathway but spares cortisol completion.", "Identify CYP11B2 as the likely target.", "Aldosterone synthase is CYP11B2, whereas 11-beta-hydroxylase is CYP11B1."),
  c("glucocorticoid receptor activation", "glucocorticoid-receptor", "Ligand binding changes the chaperone-associated glucocorticoid receptor and enables nuclear gene regulation.", "Connect intracellular receptor occupancy to delayed transcriptional effects.", "Describing the glucocorticoid receptor as a surface ion channel predicts the wrong signaling time course.", "A steroid enters the cell and binds NR3C1.", "Predict receptor translocation and altered transcription.", "NR3C1 is an intracellular nuclear-receptor-family protein."),
  c("GRE transactivation", "glucocorticoid-receptor", "Activated glucocorticoid receptor can bind response elements and increase or decrease transcription with recruited coregulators.", "Link both therapeutic proteins and metabolic toxicity to GRE-dependent programs where appropriate.", "Assuming every adverse effect is receptor independent hides the shared pharmacology of benefit and harm.", "A glucocorticoid increases hepatic gluconeogenic gene expression.", "Recognize receptor-mediated transcriptional activation.", "Glucocorticoid receptor signaling directly alters metabolic gene expression."),
  c("inflammatory network modulation", "glucocorticoid-receptor", "Glucocorticoid receptor signaling modifies NF-kappa B, AP-1, chromatin, and other inflammatory transcriptional networks.", "Use network modulation to explain broad anti-inflammatory effects across many cytokines.", "Reducing the mechanism to a single cytokine blockade understates the receptor's system-wide action.", "Several inflammatory mediators fall after glucocorticoid treatment.", "Attribute the coordinated change to broad transcriptional network regulation.", "Glucocorticoids alter multiple interacting inflammatory programs."),
  c("11-beta-HSD2 protection", "mineralocorticoid-receptor", "11-beta-HSD2 converts cortisol to cortisone in aldosterone-sensitive tissues and protects the mineralocorticoid receptor.", "Suspect impaired prereceptor metabolism when cortisol produces apparent mineralocorticoid excess.", "Assuming cortisol cannot bind NR3C2 leaves no explanation for enzyme-mediated receptor protection.", "A substance inhibits renal 11-beta-HSD2 and blood pressure rises while potassium falls.", "Connect the pattern to cortisol activation of mineralocorticoid receptors.", "Without local cortisol inactivation, abundant cortisol can occupy NR3C2."),
  c("mineralocorticoid transport effects", "mineralocorticoid-receptor", "Mineralocorticoid receptor activation promotes distal sodium retention and supports potassium and hydrogen secretion.", "Monitor blood pressure, edema, sodium, potassium, and acid-base context when mineralocorticoid exposure rises.", "Ignoring potassium can miss a central toxicity of excessive receptor activation.", "Fludrocortisone is increased and the patient develops hypertension and hypokalemia.", "Evaluate excessive mineralocorticoid action.", "The electrolyte and pressure pattern follows enhanced distal sodium reabsorption and potassium secretion."),
  c("11-beta-hydroxyl SAR", "corticosteroid-sar", "An 11-beta-hydroxyl group supports active glucocorticoid receptor binding, while an 11-keto analog may require enzymatic activation.", "Distinguish active alcohols from 11-keto prodrugs before predicting onset and hepatic dependence.", "Treating prednisone as already identical to prednisolone ignores required reduction of the 11-keto group.", "A steroid requires 11-beta-HSD1 conversion before full glucocorticoid activity.", "Recognize an 11-keto prodrug such as prednisone or cortisone.", "Reduction to the 11-beta-hydroxyl form creates the active receptor-binding molecule."),
  c("prednisolone double bond", "corticosteroid-sar", "The 1,2 double bond in prednisolone increases glucocorticoid potency and reduces relative mineralocorticoid activity versus hydrocortisone.", "Use the 1,2 unsaturation to predict improved glucocorticoid selectivity.", "Calling the double bond an inactivating change reverses its established SAR effect.", "A cortisol analog gains a 1,2 double bond.", "Predict higher glucocorticoid potency with less relative salt retention.", "This substitution is the defining potency shift from hydrocortisone toward prednisolone."),
  c("9-alpha-fluorine and C16", "corticosteroid-sar", "A 9-alpha-fluorine increases corticosteroid potency, while C16 substitution can reduce mineralocorticoid activity.", "Interpret both substitutions together when comparing fludrocortisone with dexamethasone-like agents.", "Attributing minimal mineralocorticoid action to fluorine alone ignores the balancing C16 substitution.", "A potent fluorinated steroid also carries a C16 methyl group and has little salt-retaining action.", "Recognize the combined SAR pattern of dexamethasone or betamethasone.", "Fluorination raises potency while the C16 group suppresses mineralocorticoid effect."),
  c("hydrocortisone profile", "glucocorticoid-family", "Hydrocortisone resembles endogenous cortisol, is short acting, and retains meaningful mineralocorticoid activity.", "Use hydrocortisone when a shorter, more physiologic glucocorticoid profile is desired.", "Substituting long-acting dexamethasone milligram for milligram creates a major overdose.", "A replacement plan aims to approximate normal cortisol timing.", "Prefer a short-acting hydrocortisone-based strategy when appropriate.", "Hydrocortisone is chemically cortisol and permits more physiologic scheduling."),
  c("dexamethasone profile", "glucocorticoid-family", "Dexamethasone is highly potent, long acting, and has minimal mineralocorticoid activity.", "Reserve dexamethasone for tasks that benefit from long receptor exposure or minimal salt retention.", "Using a long-acting drug for fine physiologic replacement can complicate titration and recovery.", "A regimen requires potent glucocorticoid effect with negligible mineralocorticoid action.", "Consider dexamethasone if the clinical task supports long action.", "Its substitutions produce high glucocorticoid potency and little salt retention."),
  c("fludrocortisone profile", "glucocorticoid-family", "Fludrocortisone has strong mineralocorticoid activity and is selected when sodium-retaining hormone replacement is needed.", "Monitor pressure, edema, sodium, potassium, and renin context during mineralocorticoid replacement.", "Using fludrocortisone as a routine anti-inflammatory substitute can produce avoidable salt-retaining toxicity.", "A patient requires replacement of deficient aldosterone action.", "Use fludrocortisone when clinically indicated and monitor mineralocorticoid effect.", "Fludrocortisone is designed to provide strong NR3C2 activity."),
  c("prednisone activation", "activation-disposition", "Prednisone is an 11-keto prodrug converted to active prednisolone, largely by hepatic 11-beta-HSD1.", "Consider direct prednisolone when prodrug activation is unreliable.", "Assuming activation is unchanged in severe hepatic dysfunction may produce unpredictable response.", "A patient with severe hepatic dysfunction has poor response to prednisone.", "Consider impaired conversion to prednisolone as one contributor.", "Prednisone requires enzymatic reduction before full receptor activity."),
  c("CYP3A4 interaction", "activation-disposition", "Strong CYP3A4 inhibitors can increase systemic exposure to susceptible glucocorticoids, including some locally delivered products.", "Review inhibitors when Cushingoid toxicity appears during inhaled or intranasal treatment.", "Calling a local product risk free can miss a major metabolic interaction.", "A patient using an inhaled steroid starts a strong CYP3A4 inhibitor and develops systemic toxicity.", "Suspect reduced steroid clearance and higher systemic exposure.", "Local delivery does not prevent exposure when metabolism is strongly inhibited."),
  c("hydrophilic corticosteroid promoieties", "formulation-chemistry", "Phosphate and hemisuccinate groups can increase aqueous solubility and are removed in vivo to release active corticosteroid.", "Verify the complete salt or ester before converting or administering a parenteral corticosteroid.", "Treating every product with the same parent steroid name as formulation-equivalent can cause selection and dosing errors.", "An emergency product must dissolve rapidly in an aqueous vehicle.", "Choose the appropriate water-soluble corticosteroid form rather than a poorly soluble depot ester.", "Ionizable promoieties are used to make selected parenteral corticosteroid products water soluble."),
  c("lipophilic corticosteroid esters", "formulation-chemistry", "Poorly soluble depot preparations can prolong release; an ester group alone does not prove that hydrolysis is required for receptor activity.", "Match a depot ester to a route and clinical task that benefit from delayed release.", "Assuming depot residence prevents systemic absorption can obscure prolonged HPA suppression.", "A long-residence intra-articular steroid is followed by biochemical adrenal suppression.", "Recognize that slow local release can still create clinically relevant systemic exposure.", "Depot pharmacokinetics change the time course, not the fundamental ability of released steroid to reach systemic receptors."),
  c("corticosteroid acetonides", "formulation-chemistry", "Triamcinolone acetonide and budesonide contain different cyclic groups; the complete structure and formulation influence tissue exposure.", "Interpret acetonide design together with the route and delivery device.", "Calling an acetonide merely an inactive salt misses its structural contribution to local pharmacology.", "Two triamcinolone products differ because one contains an acetonide structure and a specialized local formulation.", "Compare the complete chemical and dosage-form identity rather than the parent name alone.", "Acetal formation can materially change physicochemical behavior and tissue exposure."),
  c("spironolactone pharmacology", "mineralocorticoid-antagonists", "Spironolactone antagonizes the mineralocorticoid receptor, forms active metabolites, and also affects androgen and progesterone receptor signaling.", "Discuss endocrine adverse effects and monitor potassium and kidney function when selecting spironolactone.", "Ignoring off-target steroid-receptor activity can make gynecomastia or menstrual effects seem unrelated.", "A patient develops breast tenderness while potassium remains controlled on an aldosterone-blocking drug.", "Recognize a spironolactone-associated endocrine adverse effect and reassess therapy.", "Its receptor profile and active metabolites distinguish spironolactone from a purely selective antagonist."),
  c("eplerenone pharmacology", "mineralocorticoid-antagonists", "Eplerenone is a more selective mineralocorticoid receptor antagonist and a CYP3A substrate.", "Screen for strong CYP3A inhibitors and monitor potassium and kidney function before and during treatment.", "Equating greater receptor selectivity with freedom from interactions or hyperkalemia is unsafe.", "A patient prescribed eplerenone is also taking a strong CYP3A inhibitor.", "Identify the interaction before treatment and use current prescribing constraints to choose an alternative plan.", "CYP3A inhibition can raise eplerenone exposure even though off-target sex-steroid receptor effects are lower."),
  c("mineralocorticoid antagonist hyperkalemia", "mineralocorticoid-antagonists", "Mineralocorticoid receptor antagonism reduces distal potassium secretion and can cause clinically important hyperkalemia.", "Integrate baseline potassium, kidney function, concomitant renin-angiotensin blockade, supplements, and follow-up laboratories.", "Prescribing without a laboratory plan ignores the predictable physiology of receptor blockade.", "A patient with reduced kidney function takes an ACE inhibitor, potassium supplement, and a mineralocorticoid receptor antagonist.", "Treat the combination as high risk for hyperkalemia and reassess drugs and monitoring promptly.", "Several independent factors converge on reduced renal potassium elimination."),
  c("methylprednisolone conversion", "dose-equivalence", "Methylprednisolone 4 mg is approximately equivalent to prednisone 5 mg for anti-inflammatory effect.", "Convert total daily dose through the 4-to-5 relationship and then rebuild the schedule.", "Converting tablet count instead of milligrams can produce a large dosing error.", "A patient receives methylprednisolone 32 mg daily and needs prednisone.", "Estimate prednisone 40 mg daily before clinical adjustment.", "Eight units of 4 mg methylprednisolone correspond to eight units of 5 mg prednisone."),
  c("dexamethasone conversion", "dose-equivalence", "Dexamethasone 0.75 mg is approximately equivalent to prednisone 5 mg or hydrocortisone 20 mg.", "Use the small dexamethasone equivalent dose to avoid milligram-for-milligram conversion errors.", "Equating dexamethasone and prednisone milligram for milligram can greatly increase glucocorticoid exposure.", "A regimen contains dexamethasone 3 mg daily.", "Estimate approximately 20 mg prednisone equivalent daily.", "Four units of 0.75 mg dexamethasone correspond to four units of 5 mg prednisone."),
  c("glucocorticoid-induced HPA suppression", "exposure-safety", "Suppression risk reflects dose, potency, duration, timing, route, interacting drugs, and individual susceptibility.", "Count oral and nonoral routes together when assessing cumulative exposure.", "Using a single dose threshold as a guarantee can miss suppression from long-acting or interacting regimens.", "A patient uses high-dose inhaled, intranasal, and intermittent injected steroids with a strong CYP3A4 inhibitor.", "Treat the combined regimen as meaningful systemic suppression risk.", "Multiple routes and reduced metabolism can create a large cumulative receptor exposure."),
  c("short-course discontinuation", "exposure-safety", "Current guidance generally does not require an HPA-protective taper after glucocorticoid treatment shorter than three to four weeks.", "Separate the need to taper for underlying-disease control from the endocrine need to taper.", "Automatically extending every short course can add unnecessary glucocorticoid exposure.", "A controlled condition was treated with an isolated ten-day systemic glucocorticoid course in a patient without prior prolonged or concurrent glucocorticoid exposure.", "A taper is generally unnecessary solely to prevent adrenal insufficiency.", "The 2024 joint guideline considers short-term exposure unlikely to require an endocrine taper."),
];

const appliedDistractors = [
  [
    "Diagnose primary adrenal destruction from the low ACTH alone.",
    "Interpret dexamethasone as a sustained stimulator of ACTH release.",
    "Exclude drug-induced suppression because cortisol is low."
  ],
  [
    "Diagnose adrenal failure solely because it is below a morning reference range.",
    "Treat midnight and morning cortisol reference ranges as interchangeable.",
    "Assume collection time never affects cortisol interpretation."
  ],
  [
    "Predict high cortisol because abundant ACTH bypasses its receptor.",
    "Predict normal cortisol because MC2R is required only for aldosterone.",
    "Conclude that MRAP can generate a normal response without functional MC2R."
  ],
  [
    "Predict increased medullary aldosterone synthesis.",
    "Predict reduced aldosterone synthesis as the normal potassium response.",
    "Localize the principal aldosterone response to the zona reticularis."
  ],
  [
    "Identify aldosterone from the adrenal medulla.",
    "Identify cortisol from the zona glomerulosa as its principal source.",
    "Identify DHEA sulfate as the principal stress glucocorticoid."
  ],
  [
    "Localize adrenal DHEA sulfate production primarily to the zona glomerulosa.",
    "Localize adrenal DHEA sulfate production primarily to medullary chromaffin cells.",
    "Treat DHEA sulfate as the final product of aldosterone synthase."
  ],
  [
    "Assume an isolated final aldosterone-synthase defect explains all three deficiencies.",
    "Localize the shared problem to plasma albumin synthesis alone.",
    "Exclude mitochondrial cholesterol delivery because the defect affects several branches."
  ],
  [
    "Localize the block to CYP11B2, the terminal aldosterone enzyme.",
    "Localize the block to renal 11-beta-HSD2.",
    "Localize the block to CYP21A2, after pregnenolone formation."
  ],
  [
    "Identify CYP11B1 as the selective aldosterone-synthase target.",
    "Identify CYP11A1 as a step unique to aldosterone.",
    "Identify StAR as a transport protein used only by the aldosterone branch."
  ],
  [
    "Predict that NR3C1 remains permanently excluded from the nucleus.",
    "Predict only a direct sodium-channel effect without transcriptional regulation.",
    "Predict conversion of NR3C1 into a circulating steroid-binding protein."
  ],
  [
    "Conclude that metabolic effects cannot be mediated by glucocorticoid receptors.",
    "Interpret all increased gene expression as proof of receptor antagonism.",
    "Attribute the finding solely to direct activation of aldosterone synthase."
  ],
  [
    "Describe the drug as a selective neutralizing antibody against one cytokine.",
    "Conclude that anti-inflammatory action requires complete destruction of immune cells.",
    "Exclude receptor-mediated gene regulation because several mediators change together."
  ],
  ["Attribute the findings to cortisol being unable to bind mineralocorticoid receptors.", "Predict that inhibiting cortisol inactivation prevents mineralocorticoid receptor activation.", "Explain the hypokalemia by complete blockade of distal potassium secretion."],
  ["Interpret the pattern as inadequate sodium-retaining activity requiring an automatic dose increase.", "Exclude fludrocortisone because mineralocorticoids cannot affect potassium.", "Explain hypertension and potassium loss as the expected result of mineralocorticoid receptor blockade."],
  ["Identify prednisolone as an inactive 11-keto precursor.", "Identify hydrocortisone as requiring conversion to prednisone for activity.", "Assume prednisone and prednisolone have identical activation requirements."],
  ["Predict loss of glucocorticoid activity from the added double bond.", "Predict that the molecule becomes aldosterone solely from this change.", "Predict identical glucocorticoid potency to cortisol regardless of this structural change."],
  ["Attribute negligible salt retention to fluorination alone.", "Classify every fluorinated corticosteroid as a selective mineralocorticoid.", "Conclude that C16 substitution cannot alter mineralocorticoid activity."],
  ["Use dexamethasone at the same milligram dose as hydrocortisone.", "Select a long-acting depot preparation because its concentration reproduces normal daily cortisol variation.", "Use fludrocortisone alone to replace both the timing and glucocorticoid effect of cortisol."],
  ["Use fludrocortisone because it has negligible sodium-retaining effects.", "Treat dexamethasone as an agent with no systemic glucocorticoid effect.", "Select hydrocortisone on the premise that it is longer acting than dexamethasone."],
  ["Use dexamethasone alone as equivalent replacement for deficient aldosterone action.", "Use spironolactone to stimulate the deficient mineralocorticoid receptor response.", "Ignore blood pressure and potassium once mineralocorticoid replacement begins."],
  ["Rule out impaired activation because prednisone is already prednisolone.", "Assume liver disease eliminates all risk of glucocorticoid toxicity.", "Conclude that poor response proves glucocorticoid receptor absence."],
  ["Exclude a drug interaction because the steroid is inhaled.", "Predict increased clearance solely because CYP3A4 is inhibited.", "Assume systemic toxicity requires oral steroid administration."],
  ["Use any depot suspension intravenously because it contains a corticosteroid.", "Treat a soluble salt and a depot ester as interchangeable without checking the product label.", "Choose a poorly soluble suspension solely because it should dissolve more rapidly."],
  ["Exclude steroid exposure because an intra-articular product cannot enter the circulation.", "Assume adrenal suppression proves the injection was given intravenously.", "Treat slow depot release as a guarantee against systemic receptor effects."],
  ["Assume all triamcinolone products have identical chemical structures and release characteristics.", "Treat an acetonide as a detachable sodium counterion with no structural effect.", "Use the parent drug name alone to authorize substitution across delivery routes."],
  ["Exclude the drug because normal potassium rules out all spironolactone adverse effects.", "Diagnose potassium toxicity from breast tenderness alone despite controlled potassium.", "Explain the finding by spironolactone having no activity at sex-steroid receptors."],
  ["Proceed without review because mineralocorticoid selectivity prevents metabolic interactions.", "Assume CYP3A inhibition always lowers eplerenone exposure.", "Use potassium supplementation routinely to prevent an interaction-related potassium rise."],
  ["Assume receptor blockade increases potassium excretion enough to offset kidney impairment.", "Add potassium without checking the current level because the patient takes a diuretic.", "Exclude the ACE inhibitor and supplement from the medication review."],
  ["Estimate prednisone 25.6 mg daily by reversing the equivalence ratio.", "Substitute prednisone 32 mg daily on a milligram-for-milligram basis.", "Estimate prednisone 160 mg daily by ignoring the 4 mg methylprednisolone reference amount."],
  ["Estimate prednisone 3 mg daily by substituting milligram for milligram.", "Estimate prednisone 0.45 mg daily by reversing the equivalence ratio.", "Estimate prednisone 80 mg daily by using the hydrocortisone equivalent as the prednisone amount."],
  ["Exclude suppression because none of the products is taken orally.", "Assess only the most recent injection and disregard the inhaled and intranasal exposures.", "Assume CYP3A4 inhibition protects the HPA axis by lowering steroid exposure."],
  ["Require a taper solely because every systemic course longer than seven days suppresses the HPA axis.", "Extend the course automatically even though disease control no longer requires treatment.", "Use a mandatory morning cortisol test before stopping every isolated ten-day course."]
];

export const adrenalPharmacologyQuestionBank = concepts.map((concept, conceptIndex) => {
  const answer = conceptIndex % 4;
  const choices = [...appliedDistractors[conceptIndex]];
  choices.splice(answer, 0, concept.caseAnswer);
  return {
    id: `adrenal-${String(conceptIndex + 1).padStart(2, "0")}-case`,
    question: `${concept.caseStem} Which response is best?`,
    choices, answer, rationale: concept.why,
    reviewHref: `#${concept.lesson}`, difficulty: "application",
  };
});


adrenalPharmacologyQuestionBank.push({
  id: "adrenal-dosepak-total",
  question: "A prescribed six-day methylprednisolone pack contains 21 tablets of 4 mg. What is the total course amount?",
  choices: ["24 mg", "84 mg", "21 mg", "144 mg"],
  answer: 1,
  rationale: "21 tablets multiplied by 4 mg equals 84 mg. Day-one exposure is 24 mg, not the course total; later daily doses decrease.",
  reviewHref: "#dose-equivalence",
  difficulty: "application",
});

adrenalPharmacologyQuestionBank.push({
  id: "adrenal-steroid-induced-mineralocorticoid",
  question: "A patient has confirmed glucocorticoid-induced adrenal insufficiency after prolonged prednisone, without primary adrenal disease. Which replacement distinction follows the joint endocrine guideline?",
  choices: ["Add fludrocortisone routinely to every steroid-withdrawal plan", "Replace glucocorticoid needs; fludrocortisone is not recommended for this cause", "Use fludrocortisone alone to replace cortisol", "Withhold all stress coverage until the next annual visit"],
  answer: 1,
  rationale: "Glucocorticoid-induced insufficiency is distinct from primary adrenal destruction. The joint guideline recommends against fludrocortisone for this cause; cortisol replacement and stress planning remain important.",
  reviewHref: "#exposure-safety",
  difficulty: "clinical",
});

adrenalPharmacologyQuestionBank.push({
  id: "adrenal-injectable-route",
  question: "An IV methylprednisolone order is being prepared, but the selected vial is Depo-Medrol acetate suspension. What should happen before administration?",
  choices: ["Dilute the suspension until it looks suitable for IV use", "Give it IV if the printed milligram amount matches", "Stop preparation and obtain the prescribed IV-compatible product after verifying the order", "Use the suspension IV but extend the infusion time"],
  answer: 2,
  rationale: "Depo-Medrol suspension is not for IV use. Matching milligrams, dilution or a slower rate does not authorize an unsupported route. Solu-Medrol sodium succinate is an IV-labeled formulation when selected and prepared appropriately.",
  reviewHref: "#formulation-chemistry",
  difficulty: "clinical",
});

adrenalPharmacologyQuestionBank.push({
  id: "adrenal-budesonide-identity",
  question: "A learner calls budesonide an inactive acetonide that must be cleaved before it binds its receptor. Which correction is appropriate?",
  choices: ["Budesonide is an active parent drug with a butyraldehyde-derived cyclic acetal", "Budesonide is a water-soluble sodium salt of triamcinolone", "All cyclic acetals are inactive until converted to hydrocortisone", "Budesonide acts only after conversion into its main hepatic metabolites"],
  answer: 0,
  rationale: "The label identifies a butyraldehyde-derived acetal and attributes activity to the parent budesonide. Its principal hepatic metabolites have much less corticosteroid activity. An acetonide specifically denotes the acetone-derived structure.",
  reviewHref: "#formulation-chemistry",
  difficulty: "application",
});

adrenalPharmacologyQuestionBank.push({
  id: "adrenal-bone-risk",
  question: "A 60-year-old starts prednisone 5 mg/day for six months without prior fracture-risk assessment. What should be added to the plan?",
  choices: ["Wait for a fracture", "Assess fracture risk promptly and plan prevention", "Ignore bone health below 20 mg/day", "Use calcium alone regardless of fracture risk"],
  answer: 1,
  rationale: "Prolonged low-dose exposure still warrants assessment; prevention depends on fracture risk.",
  reviewHref: "#exposure-safety",
  difficulty: "clinical",
});

adrenalPharmacologyQuestionBank.push({
  id: "adrenal-fludrocortisone-potassium",
  question: "A patient receiving fludrocortisone, furosemide and digoxin develops weakness and hypokalemia. Which interaction is most relevant?",
  choices: ["Fludrocortisone prevents all diuretic potassium loss", "Normal sodium excludes a drug-related electrolyte problem", "Potassium loss can increase digoxin-associated arrhythmia risk", "Digoxin makes potassium monitoring unnecessary"],
  answer: 2,
  rationale: "Fludrocortisone and a potassium-wasting diuretic can worsen hypokalemia, which increases susceptibility to digoxin toxicity. Prompt electrolyte and medication reassessment is needed.",
  reviewHref: "#mineralocorticoid-receptor",
  difficulty: "clinical",
});

adrenalPharmacologyQuestionBank.push({
  "id": "adrenal-live-vaccine-window",
  "question": "An otherwise immunocompetent adult finishes prednisone 30 mg/day for 18 consecutive days. What does CDC guidance imply for an indicated live-virus vaccine?",
  "choices": [
    "Give it immediately because the steroid course was under three weeks",
    "Defer for at least one month after stopping this high-dose course",
    "Defer all vaccines permanently",
    "Use the endocrine taper threshold to decide vaccine eligibility"
  ],
  "answer": 1,
  "rationale": "This course meets the CDC high-dose duration and dose criteria. The live-vaccine deferral is distinct from the endocrine taper threshold.",
  "reviewHref": "#exposure-safety",
  "difficulty": "clinical"
});

adrenalPharmacologyQuestionBank.push({
  "id": "adrenal-vomiting-stress",
  "question": "A patient with recent prolonged glucocorticoid exposure and unconfirmed HPA recovery develops persistent vomiting and hypotension. What is the best response?",
  "choices": [
    "Wait for a morning cortisol before treating",
    "Use only oral medication despite persistent vomiting",
    "Arrange urgent treatment for possible adrenal crisis with parenteral glucocorticoid and fluids",
    "Add fludrocortisone alone"
  ],
  "answer": 2,
  "rationale": "Possible crisis requires urgent treatment. Vomiting undermines oral delivery; recovery testing must not delay parenteral glucocorticoids and resuscitation.",
  "reviewHref": "#exposure-safety",
  "difficulty": "clinical"
});

adrenalPharmacologyQuestionBank.push({
  "id": "adrenal-eplerenone-monitoring",
  "question": "An ACE inhibitor is added for a patient taking eplerenone. Which monitoring plan follows the Inspra label?",
  "choices": [
    "Check potassium and creatinine within three to seven days",
    "Wait until the next annual visit if baseline potassium was normal",
    "Measure sodium alone",
    "Stop potassium monitoring because both drugs lower blood pressure"
  ],
  "answer": 0,
  "rationale": "The combination increases hyperkalemia risk. The label calls for potassium and creatinine checks within three to seven days after this addition.",
  "reviewHref": "#mineralocorticoid-antagonists",
  "difficulty": "clinical"
});

adrenalPharmacologyQuestionBank.push({
  "id": "adrenal-eplerenone-hypertension",
  "question": "Eplerenone is proposed for hypertension in a patient with type 2 diabetes and microalbuminuria. Which interpretation of the label is correct?",
  "choices": [
    "A normal potassium overrides all contraindications",
    "The diabetes-related exclusion applies only after myocardial infarction",
    "Microalbuminuria requires routine potassium supplementation",
    "This is a hypertension-specific contraindication requiring an alternative plan"
  ],
  "answer": 3,
  "rationale": "Inspra has additional contraindications for hypertension, including type 2 diabetes with microalbuminuria. Normal potassium does not remove this indication-specific exclusion.",
  "reviewHref": "#mineralocorticoid-antagonists",
  "difficulty": "clinical"
});

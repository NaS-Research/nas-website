const concepts = [
  { name: "aqueous humor production", lesson: "aqueous-humor-and-glaucoma-risk", principle: "Ciliary epithelial ion transport and carbonic anhydrase activity support aqueous humor secretion.", action: "Reduce production with a product-specific beta blocker, alpha-2 agonist, or carbonic anhydrase inhibitor when patient risks permit.", assessment: "Measure pressure with angle, optic nerve structure, fields, cornea, systemic disease, and adherence.", hazard: "Treating pressure alone can miss progression or a dangerous angle mechanism.", why: "Aqueous production is one controllable component of a broader optic neuropathy." },
  { name: "anterior segment aqueous flow", lesson: "aqueous-humor-and-glaucoma-risk", principle: "Aqueous humor moves from the ciliary processes through the posterior chamber and pupil into the anterior chamber before drainage.", action: "Map the obstructed or pharmacologically modified step before selecting a production or outflow strategy.", assessment: "Evaluate ciliary production, pupil and iris configuration, chamber depth, gonioscopy, trabecular access, pressure, and optic nerve status.", hazard: "Confusing vitreous with aqueous flow can place the disease mechanism and drug target in the wrong compartment.", why: "The anterior segment route links secretion, pupillary block, drainage angle anatomy, and pressure." },
  { name: "trabecular outflow", lesson: "aqueous-humor-and-glaucoma-risk", principle: "Aqueous exits through trabecular meshwork, Schlemm canal, collector channels, and episcleral veins.", action: "Use Rho kinase therapy, laser, or a procedure when improving conventional outflow fits the anatomy.", assessment: "Evaluate gonioscopy, pressure, outflow intervention history, episcleral context, and progression.", hazard: "Assuming an open angle from pressure alone can delay recognition of closure or secondary obstruction.", why: "Gonioscopy assesses angle anatomy; pressure and clinical findings help determine whether impaired conventional outflow is a treatment target." },
  { name: "uveoscleral outflow", lesson: "aqueous-humor-and-glaucoma-risk", principle: "Aqueous can move through ciliary muscle spaces into the suprachoroidal pathway.", action: "Use prostaglandin pathway agents to increase this outflow route when ocular history permits.", assessment: "Track pressure, inflammation, macular status, herpes history, iris and periocular changes, and adherence.", hazard: "Visible or inflammatory effects can undermine adherence or harm a susceptible eye.", why: "Uveoscleral remodeling lowers pressure without primarily suppressing production." },
  { name: "individualized target pressure", lesson: "aqueous-humor-and-glaucoma-risk", principle: "The target is a revisable range based on untreated pressure, damage, progression, susceptibility, and life expectancy.", action: "Reassess the target when confirmed progression threatens lifetime visual function.", assessment: "Compare serial pressure, retinal nerve fiber and optic nerve imaging, visual fields, and treatment exposure.", hazard: "A static numerical target can permit preventable vision loss when the optic nerve continues to deteriorate.", why: "The correct target is defined by protection from progression, not by one universal number." },
  { name: "optic disc cupping interpretation", lesson: "aqueous-humor-and-glaucoma-risk", principle: "Glaucomatous axon loss remodels the optic nerve head, but cup-to-disc ratio must be interpreted with rim, asymmetry, disc size, imaging, and fields.", action: "Use serial structural and functional evidence rather than diagnosing progression from one cup measurement.", assessment: "Compare disc size, rim thinning, hemorrhage, asymmetry, retinal nerve fiber imaging, visual fields, pressure history, and image quality.", hazard: "A single ratio can overcall a physiologically large cup or miss focal neuroretinal rim loss.", why: "Glaucomatous cupping reflects neural injury, but a large physiological cup can be normal; interpretation requires disc anatomy, structural change and visual function." },
  { name: "latanoprost FP pathway", lesson: "prostaglandin-pathway-therapy", principle: "FP receptor signaling increases outflow, especially through uveoscleral remodeling.", action: "Use the exact once-daily product schedule and avoid patient-directed extra dosing.", assessment: "Track pressure response, timing, iris color, lashes, periocular tissue, inflammation, and vision symptoms.", hazard: "More frequent dosing can reduce effect and increase local adverse events.", why: "Prostaglandin pathway response does not increase linearly with additional daily drops." },
  { name: "prostaglandin iris pigmentation", lesson: "prostaglandin-pathway-therapy", principle: "Increased melanin content in iris melanocytes can gradually darken the treated iris.", action: "Counsel before treatment, especially when one eye is treated, and examine changes regularly.", assessment: "Document baseline iris color, later asymmetry, adherence, vision, inflammation, and patient preference.", hazard: "The iris color change may be permanent after treatment stops.", why: "The effect reflects persistent pigment content rather than a temporary surface stain." },
  { name: "prostaglandin-associated macular and inflammatory risk", lesson: "prostaglandin-pathway-therapy", principle: "Selected eyes may be more susceptible to intraocular inflammation, macular edema, or herpetic keratitis recurrence.", action: "Review ocular surgical, retinal, inflammatory, and herpes history before selection and with new symptoms.", assessment: "Assess vision change, pain, photophobia, macular status, anterior chamber inflammation, and cornea.", hazard: "Continuing through unexplained vision decline can delay treatment of macular edema or inflammation.", why: "Local pressure benefit must be balanced against tissue-specific ocular risk." },
  { name: "ophthalmic timolol systemic beta blockade", lesson: "aqueous-production-suppressors", principle: "Nasolacrimal and conjunctival absorption can produce clinically important nonselective beta blockade.", action: "Avoid use when current labeling contraindicates asthma, severe conduction disease, or specified cardiac states.", assessment: "Review pulse, conduction, heart failure, pressure, asthma or COPD, rescue inhalers, and systemic beta blockers.", hazard: "Severe bronchospasm, bradycardia, heart block, or cardiac failure can occur despite topical dosing.", why: "The eye does not isolate timolol from systemic circulation." },
  { name: "brimonidine alpha-2 therapy", lesson: "aqueous-production-suppressors", principle: "Alpha-2 agonism lowers production and can influence outflow while reducing central sympathetic activity.", action: "Avoid in children younger than two and use great caution with young children and CNS depressant burden.", assessment: "Track somnolence, alertness, pressure, pulse, dry mouth, allergy, age, and interacting medicines.", hazard: "Profound CNS depression and apnea risk make infant exposure dangerous.", why: "Systemically absorbed alpha-2 agonist can strongly suppress the developing central nervous system." },
  { name: "dorzolamide topical carbonic anhydrase inhibition", lesson: "aqueous-production-suppressors", principle: "Carbonic anhydrase inhibition reduces bicarbonate-dependent ciliary fluid secretion.", action: "Review hypersensitivity and corneal endothelium; avoid routine use with CrCl below 30 mL/min or concurrent oral carbonic anhydrase inhibition, consistent with labeling.", assessment: "Monitor pressure, corneal status, ocular irritation, taste, systemic reaction, kidney function, and regimen duplication.", hazard: "Topical administration does not prevent systemic sulfonamide exposure or additive enzyme inhibition.", why: "Dorzolamide is absorbed systemically despite local delivery." },
  { name: "punctal occlusion", lesson: "aqueous-production-suppressors", principle: "Closing the nasolacrimal drainage route can reduce movement of a drop into the highly absorptive nasal mucosa.", action: "Teach gentle eyelid closure and inner-canthal pressure after each dose when appropriate for the product.", assessment: "Observe return demonstration, duration, bottle placement, blinking, and systemic adverse effects.", hazard: "Skipping technique can increase systemic exposure, especially with timolol or brimonidine.", why: "Nasolacrimal drainage is a major route of systemic absorption for eye drops." },
  { name: "netarsudil Rho kinase inhibition", lesson: "conventional-outflow-and-procedures", principle: "Rho kinase inhibition is believed to lower pressure by increasing trabecular aqueous outflow.", action: "Use for a product-specific pressure-lowering role and counsel about visible local effects.", assessment: "Track pressure and ocular tolerance; obtain prompt ophthalmic advice for new pain or reduced vision.", hazard: "Attributing new pain or reduced vision to routine redness can delay assessment of corneal edema or another serious eye condition.", why: "Conventional outflow benefit comes with a distinctive ocular adverse-effect profile." },
  { name: "pilocarpine muscarinic outflow", lesson: "conventional-outflow-and-procedures", principle: "M3-mediated ciliary muscle contraction increases trabecular tension while producing miosis and accommodation.", action: "Use only when the angle and clinical purpose fit and counsel about near vision and night vision effects.", assessment: "Evaluate pupil, accommodation, brow ache, retinal risk, inflammation, pressure, and systemic cholinergic symptoms.", hazard: "Miosis can impair dark adaptation and retinal complications may occur in susceptible eyes.", why: "The same ciliary and iris contraction that changes outflow also changes vision mechanics." },
  { name: "pupillary block and laser iridotomy", lesson: "conventional-outflow-and-procedures", principle: "A pressure gradient across the iris can bow it forward and obstruct trabecular drainage when aqueous cannot pass normally through the pupil.", action: "Stabilize acute pressure urgently, then use laser peripheral iridotomy for definitive relief when pupillary block is the mechanism.", assessment: "Assess symptoms, cornea, pupil, pressure, gonioscopy, chamber depth, fellow eye, iridotomy patency, and residual nonpupillary closure.", hazard: "Treating pressure medically without relieving pupillary block can permit recurrence and irreversible visual loss.", why: "Iridotomy creates an alternative aqueous pathway that equalizes anterior and posterior chamber pressure." },
  { name: "selective laser trabeculoplasty", lesson: "conventional-outflow-and-procedures", principle: "Laser treatment of pigmented trabecular cells can improve conventional outflow without daily drug exposure.", action: "Consider as initial or adjunctive open-angle treatment when anatomy and patient preference fit.", assessment: "Monitor early pressure response, inflammation, later durability, progression, and need for retreatment.", hazard: "Assuming laser guarantees permanent control can delay recognition of waning effect.", why: "Laser response and duration vary and still require longitudinal surveillance." },
  { name: "glaucoma surgery escalation", lesson: "conventional-outflow-and-procedures", principle: "Procedures can provide needed pressure reduction, including as initial treatment in selected advanced disease.", action: "Escalate when progression risk exceeds procedural burden after mechanism and adherence are reassessed.", assessment: "Integrate target, rate of loss, angle, conjunctiva, prior procedures, vision potential, and patient goals.", hazard: "Delaying surgery solely to preserve a medication-only plan can sacrifice irreversible visual function.", why: "Optic nerve loss cannot be restored after therapeutic delay." },
  { name: "prostaglandin-first selection", lesson: "glaucoma-selection-and-monitoring", principle: "Strong pressure reduction and convenient once-daily dosing often make prostaglandin pathway therapy an attractive initial option.", action: "Choose it only after considering inflammation, macular risk, herpes, cornea, visible changes, cost, and preference.", assessment: "Measure pressure response, adherence, local tolerance, structural and functional progression, and asymmetry.", hazard: "A default class choice without ocular-history review can worsen a susceptible eye.", why: "Population-level efficacy must be individualized to ocular and patient context." },
  { name: "fixed-combination ingredient duplication", lesson: "glaucoma-selection-and-monitoring", principle: "One bottle may contain two active medicines and can silently duplicate another product.", action: "Reconcile generic active ingredients and strengths at every transition or escalation.", assessment: "List every ingredient, schedule, eye, bottle, systemic duplicate, and observed administration technique.", hazard: "Duplicate timolol or another agent can intensify systemic and local toxicity without added benefit.", why: "Brand name and cap color do not reveal the full pharmacologic regimen." },
  { name: "apparent eye-drop treatment failure", lesson: "glaucoma-selection-and-monitoring", principle: "Poor technique, missed doses, access barriers, timing, contamination, intolerance, or wrong-eye dosing can mimic drug resistance.", action: "Observe technique and verify access before adding another medicine.", assessment: "Check refill history, bottle supply, return demonstration, timing, eye laterality, storage, and pressure response.", hazard: "Unnecessary polypharmacy increases burden and toxicity while the original delivery problem persists.", why: "A medicine cannot work when it is not delivered consistently to the intended eye." },
  { name: "progression-driven escalation", lesson: "glaucoma-selection-and-monitoring", principle: "Confirmed progression requires reassessment of pressure exposure, rate of loss and lifetime visual risk.", action: "Reassess target and add, switch, laser, or operate according to anatomy and risk.", assessment: "Confirm reproducible structural or functional change, pressure pattern, adherence, technique, and competing disease.", hazard: "Reassurance from a clinic pressure reading can permit ongoing irreversible loss.", why: "The treatment goal is preservation of vision, not achievement of a single number." },
  { name: "prescribed drop dose and ocular capacity", lesson: "ophthalmic-administration-and-safety", principle: "The conjunctival sac holds limited volume, so extra drops mainly spill or drain systemically.", action: "Deliver one accurate drop unless the exact product directs otherwise.", assessment: "Observe bottle position, number of drops, placement, overflow, blinking, and waste.", hazard: "Repeated drops increase cost, contamination, and systemic exposure without proportional ocular benefit.", why: "Excess volume cannot remain in the conjunctival sac." },
  { name: "ophthalmic tip contamination", lesson: "ophthalmic-administration-and-safety", principle: "Contact between the bottle tip and eye, lashes, skin, or fingers can inoculate the product.", action: "Keep the tip sterile and replace a contaminated product according to clinician or manufacturer guidance.", assessment: "Observe tip contact, cap handling, storage, solution appearance, infection symptoms, and shared-bottle behavior.", hazard: "Contaminated drops can cause bacterial keratitis and vision-threatening infection.", why: "A multidose bottle can repeatedly deliver organisms to the ocular surface." },
  { name: "spacing multiple ophthalmic products", lesson: "ophthalmic-administration-and-safety", principle: "Drops placed too closely can wash the earlier product out of the conjunctival sac.", action: "Separate products by the exact label interval and generally place ointment after drops.", assessment: "Review schedule feasibility, product order, interval, adherence, and caregiver ability.", hazard: "An unworkable schedule can create washout, missed doses, and accidental duplication.", why: "Physical volume and drainage determine retained ocular dose." },
  { name: "contact lens and preservative handling", lesson: "ophthalmic-administration-and-safety", principle: "Contact lenses can absorb preservatives or interfere with ocular delivery and must follow product-specific removal timing.", action: "Remove and reinsert lenses according to the exact label and evaluate preservative intolerance.", assessment: "Review lens type, wear schedule, preservative, corneal surface, irritation, and drop timing.", hazard: "Incorrect lens use can increase surface toxicity and reduce effective delivery.", why: "The lens changes contact between formulation, tear film, and cornea." },
  { name: "physical barrier to eye-drop use", lesson: "ophthalmic-administration-and-safety", principle: "Dexterity, vision, cognition, strength, tremor, and bottle design determine whether the prescribed dose reaches the eye.", action: "Use return demonstration, simplification, assistive devices, or caregiver support.", assessment: "Observe opening, aiming, squeezing, drop count, punctal occlusion, schedule recall, and refill access.", hazard: "Documented adherence can be falsely assumed when the patient cannot physically deliver the medicine.", why: "A prescription is only effective if the patient can execute the device task." },
  { name: "acute angle-closure warning", lesson: "acute-angle-closure-and-drug-triggers", principle: "Mechanical obstruction of the drainage angle can cause sudden pressure elevation with pain, headache, halos, nausea, and vision loss.", action: "Treat suspected acute angle closure as an ophthalmic emergency requiring immediate specialist care.", assessment: "Evaluate symptom onset, red eye, pupil, vision, cornea, pressure, angle, triggers, and fellow-eye risk.", hazard: "Managing it as routine chronic open-angle disease can cause rapid permanent visual loss.", why: "The closed drainage pathway requires urgent pressure control and definitive angle management." },
];

const dimensions = [
  ["principle", "Which principle best characterizes"],
  ["action", "Which clinical action best applies to"],
  ["assessment", "Which monitoring or assessment plan is most appropriate for"],
  ["hazard", "Which hazard is most important to prevent with"],
];

function distractors(index, field) {
  return [3, 8, 15].map((offset) => concepts[(index + offset) % concepts.length][field]);
}

const generatedGlaucomaQuestions = [...concepts.flatMap((concept, conceptIndex) =>
  dimensions.map(([field, prefix], dimensionIndex) => ({
    id: `glaucoma-pharmacotherapy-${String(conceptIndex * 4 + dimensionIndex + 1).padStart(3, "0")}`,
    question: `${prefix} ${concept.name}?`,
    choices: [concept[field], ...distractors(conceptIndex, field)],
    answer: 0,
    rationale: concept.why,
    reviewHref: `#${concept.lesson}`,
  })),
), {
  id: "glaucoma-pharmacotherapy-miostat-route",
  question: "An outpatient prescription names Miostat 0.01% with instructions for repeated drops at home. What should the pharmacist do before dispensing?",
  choices: ["Clarify the intended product and route with the prescriber", "Dispense it with the usual home eye-drop instructions", "Substitute pilocarpine without contacting the prescriber", "Convert the directions to drops in the ear"],
  answer: 0,
  rationale: "Miostat is a surgical intraocular product. The named formulation and home-use directions do not agree, so the order needs clarification rather than an assumed substitution.",
  reviewHref: "#conventional-outflow-and-procedures",
}, {
  id: "glaucoma-pharmacotherapy-timoptic-xe-sequence",
  question: "A patient uses dorzolamide and newly prescribed Timoptic-XE at the same scheduled time. Which instruction fits the gel-forming product?",
  choices: ["Give dorzolamide at least ten minutes before Timoptic-XE; invert the closed XE bottle and shake once", "Give Timoptic-XE first and dorzolamide immediately afterward", "Mix both products in one bottle before use", "Use the XE product every two hours until pressure falls"],
  answer: 0,
  rationale: "Timoptic-XE has specific preparation and sequencing instructions. Other topical eye medicines precede it by at least ten minutes; these directions should not be assumed for every timolol formulation.",
  reviewHref: "#aqueous-production-suppressors",
}, {
  id: "glaucoma-pharmacotherapy-dorzolamide-renal",
  question: "An adult with a creatinine clearance of 22 mL/min is prescribed dorzolamide 2% eye drops. Which issue needs prescriber review?",
  choices: ["The product is not recommended below a creatinine clearance of 30 mL/min despite topical administration", "Renal function is irrelevant because ophthalmic drugs never reach the circulation", "The only needed change is increasing the number of drops", "The patient should substitute oral acetazolamide without review"],
  answer: 0,
  rationale: "Dorzolamide and its metabolite are primarily renally eliminated. Its label does not recommend use in severe renal impairment; choosing an alternative requires clinical review.",
  reviewHref: "#aqueous-production-suppressors",
}];

// Individually reviewed cases replace generic prompts with overlapping correct actions.
const reviewedProductionCases = {
  "glaucoma-pharmacotherapy-087": {"question": "Before escalating for a suspected field change, what should be assessed?", "choices": ["Reproducibility and the full clinical context", "Only bottle price", "Only cap color", "Only absence of pain"], "answer": 0, "rationale": "Confirm progression and assess pressure exposure, adherence and competing causes.", "reviewHref": "#glaucoma-selection-and-monitoring"},
  "glaucoma-pharmacotherapy-091": {"question": "Which observation most directly tests whether the prescribed dose reaches the eye?", "choices": ["Watching the patient instill it", "Counting unopened cartons alone", "Reading the brand name", "Checking iris color alone"], "answer": 0, "rationale": "Observe aiming, squeezing, placement and drop count.", "reviewHref": "#ophthalmic-administration-and-safety"},
  "glaucoma-pharmacotherapy-095": {"question": "The bottle nozzle touches an eyelash during instillation. What concern should be addressed?", "choices": ["Potential contamination", "Proof of treatment failure", "A need to double the dose", "Guaranteed sterility"], "answer": 0, "rationale": "Tip contact can introduce organisms; obtain product-specific advice.", "reviewHref": "#ophthalmic-administration-and-safety"},
  "glaucoma-pharmacotherapy-099": {"question": "A patient uses two different drops seconds apart. What should be checked?", "choices": ["The required interval and order for those products", "Whether both caps match", "Whether both bottles cost the same", "Whether the patient can omit one independently"], "answer": 0, "rationale": "Product-specific spacing reduces washout; some formulations need longer intervals.", "reviewHref": "#ophthalmic-administration-and-safety"},
  "glaucoma-pharmacotherapy-103": {"question": "How long should contact lenses remain out after a glaucoma drop?", "choices": ["Follow that product\u2019s specific instructions", "Always reinsert immediately", "Use one universal interval for every formulation", "Keep lenses in for every dose"], "answer": 0, "rationale": "Lens instructions vary across products.", "reviewHref": "#ophthalmic-administration-and-safety"},
  "glaucoma-pharmacotherapy-107": {"question": "A patient with hand arthritis reports difficulty with a bottle. What is most useful?", "choices": ["Observe use and assess a suitable aid or caregiver plan", "Assume all prescribed doses are delivered", "Increase the strength without review", "Stop treatment without assessment"], "answer": 0, "rationale": "Physical barriers need practical solutions and reassessment.", "reviewHref": "#ophthalmic-administration-and-safety"},
  "glaucoma-pharmacotherapy-074": {"question": "Which ocular history needs specific review before choosing a prostaglandin analog?", "choices": ["Prior uveitis", "Remote knee sprain", "Cerumen impaction alone", "Uncomplicated seasonal sneezing alone"], "answer": 0, "rationale": "Inflammatory history can change the suitability of a prostaglandin product.", "reviewHref": "#glaucoma-selection-and-monitoring"},
  "glaucoma-pharmacotherapy-075": {"question": "Does an initial pressure response remove the need for future nerve and field monitoring?", "choices": ["No", "Yes permanently", "Yes if the bottle is used once daily", "Yes if the patient has no symptoms"], "answer": 0, "rationale": "Glaucoma follow-up evaluates structural and functional change as well as pressure.", "reviewHref": "#glaucoma-selection-and-monitoring"},
  "glaucoma-pharmacotherapy-076": {"question": "Is a prostaglandin analog mandatory as the first treatment for every open-angle patient?", "choices": ["No; laser and other options may fit the patient", "Yes, even when contraindicated", "Yes, regardless of advanced disease", "Yes, without discussing preferences"], "answer": 0, "rationale": "Initial treatment depends on disease severity, safety and patient circumstances.", "reviewHref": "#glaucoma-selection-and-monitoring"},
  "glaucoma-pharmacotherapy-079": {"question": "A new eye-drop combination is added. Which information best identifies duplication?", "choices": ["Every active ingredient and strength", "Bottle color alone", "Price alone", "Brand-name length"], "answer": 0, "rationale": "A combination can contain an ingredient already prescribed separately.", "reviewHref": "#glaucoma-selection-and-monitoring"},
  "glaucoma-pharmacotherapy-080": {"question": "Combigan is added while standalone timolol remains prescribed. What needs review?", "choices": ["Duplicate timolol exposure", "Duplicate prostaglandin exposure", "A mandatory increase in both doses", "A need to stop all medicines without advice"], "answer": 0, "rationale": "Combigan already contains timolol; additive beta blockade can increase risk.", "reviewHref": "#glaucoma-selection-and-monitoring"},
  "glaucoma-pharmacotherapy-082": {"question": "A patient cannot squeeze the bottle reliably. What should be addressed before assuming drug resistance?", "choices": ["Observed administration and a workable delivery plan", "Automatic dose doubling", "Stopping follow-up", "Adding another bottle without instruction"], "answer": 0, "rationale": "An effective medicine cannot help if it does not reach the eye.", "reviewHref": "#glaucoma-selection-and-monitoring"},
  "glaucoma-pharmacotherapy-083": {"question": "Refills are timely, but pressure control worsens. Does refill history prove correct use?", "choices": ["No; ask about missed doses and observe technique", "Yes, in all patients", "Yes, if the label is intact", "Yes, without asking who administers it"], "answer": 0, "rationale": "Possession does not establish successful instillation.", "reviewHref": "#glaucoma-selection-and-monitoring"},
  "glaucoma-pharmacotherapy-084": {"question": "What may happen if a delivery problem is treated only by adding bottles?", "choices": ["More burden while ineffective delivery persists", "Guaranteed control", "Permanent cure", "Elimination of all adverse effects"], "answer": 0, "rationale": "Identify the barrier and reassess treatment response.", "reviewHref": "#glaucoma-selection-and-monitoring"},
  "glaucoma-pharmacotherapy-063": {"question": "The angle remains closed after a patent iridotomy. What is appropriate?", "choices": ["Reassess for residual nonpupillary mechanisms", "Assume all obstruction is cured", "Ignore ongoing pressure elevation", "Stop all follow-up"], "answer": 0, "rationale": "Patency relieves pupillary block but does not exclude other mechanisms.", "reviewHref": "#conventional-outflow-and-procedures"},
  "glaucoma-pharmacotherapy-064": {"question": "Does a successful iridotomy eliminate the need for pressure and angle follow-up?", "choices": ["No", "Yes in every eye", "Yes if the opening is visible", "Yes if the patient reports no pain"], "answer": 0, "rationale": "Pressure spikes and residual closure still require assessment.", "reviewHref": "#conventional-outflow-and-procedures"},
  "glaucoma-pharmacotherapy-067": {"question": "When does EGS recommend an early pressure check after trabeculoplasty?", "choices": ["One to three hours", "Only after one year", "Only if permanent vision loss occurs", "Never after a successful procedure"], "answer": 0, "rationale": "Transient pressure elevation can occur; high-risk eyes also need additional early follow-up.", "reviewHref": "#conventional-outflow-and-procedures"},
  "glaucoma-pharmacotherapy-069": {"question": "Must every drop fail before surgery is considered in advanced glaucoma?", "choices": ["No; surgery may be an initial option", "Yes, without exception", "Yes, even with rapid progression", "Yes, regardless of visual-field loss"], "answer": 0, "rationale": "Severity and lifetime visual risk can justify earlier surgery.", "reviewHref": "#conventional-outflow-and-procedures"},
  "glaucoma-pharmacotherapy-070": {"question": "Rapid progression continues despite an apparently acceptable clinic pressure. What is appropriate?", "choices": ["Reassess the target and treatment, including procedural options", "Keep the regimen solely because one reading is normal", "Stop visual-field testing", "Guarantee that the disease is stable"], "answer": 0, "rationale": "The progression rate and risk to vision guide escalation.", "reviewHref": "#conventional-outflow-and-procedures"},
  "glaucoma-pharmacotherapy-071": {"question": "Are minimally invasive glaucoma procedures interchangeable with filtration surgery for every patient?", "choices": ["No; achievable pressure reduction and risk differ", "Yes, all procedures have identical effects", "Yes, all are risk-free", "Yes, anatomy is irrelevant"], "answer": 0, "rationale": "Procedure selection depends on disease severity, target pressure and anatomy.", "reviewHref": "#conventional-outflow-and-procedures"},
  "glaucoma-pharmacotherapy-072": {"question": "Why is indefinite delay of indicated surgery potentially harmful?", "choices": ["Further optic nerve loss may be irreversible", "Surgery is always curative", "Every delay causes immediate blindness", "Drops never lower pressure"], "answer": 0, "rationale": "Balance intervention risk against the risk of continuing visual loss.", "reviewHref": "#conventional-outflow-and-procedures"},
  "glaucoma-pharmacotherapy-050": {"question": "What is the purpose of gentle eyelid closure and punctal pressure after an eye drop?", "choices": ["Reduce drainage into the nose and systemic exposure", "Guarantee zero systemic absorption", "Replace contraindication screening", "Increase the prescribed dose"], "answer": 0, "rationale": "These measures can reduce exposure but do not eliminate systemic risk.", "reviewHref": "#ophthalmic-administration-and-safety"},
  "glaucoma-pharmacotherapy-051": {"question": "How should a pharmacist confirm that a patient understands punctal occlusion?", "choices": ["Ask the patient to demonstrate the technique", "Rely only on the cap color", "Assume any blinking technique is equivalent", "Skip instruction if pressure is controlled"], "answer": 0, "rationale": "Return demonstration reveals misunderstandings that verbal agreement can miss.", "reviewHref": "#ophthalmic-administration-and-safety"},
  "glaucoma-pharmacotherapy-054": {"question": "A Rhopressa dose was missed. What does its label recommend?", "choices": ["Resume with the next evening dose", "Double the morning dose", "Use twice daily thereafter", "Stop permanently"], "answer": 0, "rationale": "Extra dosing is not the labeled response.", "reviewHref": "#conventional-outflow-and-procedures"},
  "glaucoma-pharmacotherapy-055": {"question": "New eye pain and reduced vision occur during Rhopressa use. What is appropriate?", "choices": ["Promptly contact the eye clinician", "Assume harmless redness", "Double the dose", "Wait until the next annual examination"], "answer": 0, "rationale": "These symptoms require assessment for corneal edema or another ocular problem.", "reviewHref": "#conventional-outflow-and-procedures"},
  "glaucoma-pharmacotherapy-056": {"question": "Which statement correctly distinguishes Rhopressa corneal findings?", "choices": ["Verticillata in trials did not cause apparent functional change; new visual decline still needs review", "Every corneal finding is harmless", "Edema and verticillata are interchangeable diagnoses", "Visual decline proves treatment is working"], "answer": 0, "rationale": "Do not generalize trial observations about verticillata to symptomatic edema.", "reviewHref": "#conventional-outflow-and-procedures"},
  "glaucoma-pharmacotherapy-053": {"rationale": "The label describes increased trabecular outflow as the presumed pressure-lowering mechanism; the exact mechanism remains unknown."},
  "glaucoma-pharmacotherapy-003": {"question": "Does measuring pressure alone establish whether glaucoma is progressing?", "choices": ["No; assess nerve structure and visual function too", "Yes, every time", "Yes, if the patient has no pain", "Yes, if drops are prescribed"], "answer": 0, "rationale": "Pressure is a treatment variable, not a complete progression assessment.", "reviewHref": "#aqueous-humor-and-glaucoma-risk"},
  "glaucoma-pharmacotherapy-004": {"question": "A pressure reading is normal. Can glaucoma be excluded?", "choices": ["No", "Yes in every patient", "Yes if only one eye was measured", "Yes without examining the optic nerve"], "answer": 0, "rationale": "Glaucomatous damage can occur with pressure in the usual range.", "reviewHref": "#aqueous-humor-and-glaucoma-risk"},
  "glaucoma-pharmacotherapy-006": {"question": "Which sequence describes forward aqueous movement?", "choices": ["Posterior chamber, pupil, anterior chamber", "Anterior chamber, retina, pupil", "Vitreous, optic nerve, cornea", "Schlemm canal, lens, retina"], "answer": 0, "rationale": "This route connects secretion with anterior-chamber drainage.", "reviewHref": "#aqueous-humor-and-glaucoma-risk"},
  "glaucoma-pharmacotherapy-007": {"question": "Which examination directly assesses the drainage angle?", "choices": ["Gonioscopy", "Audiometry", "Visual acuity alone", "Pulse oximetry"], "answer": 0, "rationale": "Angle anatomy helps distinguish open-angle from closure mechanisms.", "reviewHref": "#aqueous-humor-and-glaucoma-risk"},
  "glaucoma-pharmacotherapy-008": {"question": "Which fluid normally passes through the pupil toward the drainage angle?", "choices": ["Aqueous humor", "Vitreous gel", "Tear film", "Cerebrospinal fluid"], "answer": 0, "rationale": "Do not substitute the vitreous compartment for aqueous circulation.", "reviewHref": "#aqueous-humor-and-glaucoma-risk"},
  "glaucoma-pharmacotherapy-010": {"question": "Which drug targets trabecular outflow through Rho kinase inhibition?", "choices": ["Netarsudil", "Timolol", "Dorzolamide", "Acetazolamide"], "answer": 0, "rationale": "Netarsudil is believed to increase conventional outflow.", "reviewHref": "#conventional-outflow-and-procedures"},
  "glaucoma-pharmacotherapy-011": {"question": "Can anterior-segment imaging replace gonioscopy in every glaucoma evaluation?", "choices": ["No", "Yes, without exception", "Yes, if pressure is normal", "Yes, if the patient is asymptomatic"], "answer": 0, "rationale": "Imaging can miss clinically relevant angle findings.", "reviewHref": "#aqueous-humor-and-glaucoma-risk"},
  "glaucoma-pharmacotherapy-012": {"question": "Does lack of eye pain prove that the drainage angle is open?", "choices": ["No", "Yes", "Yes after one pressure reading", "Yes in every older adult"], "answer": 0, "rationale": "Chronic angle closure may be asymptomatic.", "reviewHref": "#aqueous-humor-and-glaucoma-risk"},
  "glaucoma-pharmacotherapy-018": {"question": "Confirmed field loss is progressing despite reaching the prior target pressure. What is appropriate?", "choices": ["Reassess progression rate, lifetime visual risk and target pressure", "Keep the target indefinitely because it was reached", "Stop visual-field testing", "Escalate automatically from one unreliable test"], "answer": 0, "rationale": "An achieved target is provisional, not proof of adequate long-term protection.", "reviewHref": "#aqueous-humor-and-glaucoma-risk"},
  "glaucoma-pharmacotherapy-021": {"question": "Can a large cup-to-disc ratio alone establish glaucoma?", "choices": ["No; disc size, rim and other clinical findings matter", "Yes, regardless of disc size", "Yes, without examining the rim", "Yes, even without a clinical examination"], "answer": 0, "rationale": "Physiologically large discs may have large cups.", "reviewHref": "#aqueous-humor-and-glaucoma-risk"},
  "glaucoma-pharmacotherapy-024": {"question": "An OCT report flags thinning. What is the appropriate interpretation?", "choices": ["Integrate it with examination, fields and image quality", "Diagnose glaucoma from the flag alone", "Ignore all future field tests", "Assume every flagged scan represents progression"], "answer": 0, "rationale": "OCT supports assessment but is not a standalone diagnosis.", "reviewHref": "#aqueous-humor-and-glaucoma-risk"},
  "glaucoma-pharmacotherapy-013": {"question": "Which pressure-lowering effect is chiefly associated with latanoprost?", "choices": ["Increased uveoscleral outflow", "Complete cessation of aqueous production", "Permanent surgical bypass of the iris", "Vitreous fluid removal"], "answer": 0, "rationale": "Its principal effect is enhanced aqueous drainage.", "reviewHref": "#prostaglandin-pathway-therapy"},
  "glaucoma-pharmacotherapy-014": {"question": "A patient doubles Xalatan frequency to improve drainage. What should be explained?", "choices": ["Extra dosing can reduce its pressure-lowering effect", "Twice-daily use is always more effective", "The label recommends hourly use", "Dose frequency has no effect"], "answer": 0, "rationale": "Use the prescribed once-daily schedule.", "reviewHref": "#prostaglandin-pathway-therapy"},
  "glaucoma-pharmacotherapy-015": {"question": "Which history specifically raises macular-edema concern before Xalatan?", "choices": ["Aphakia", "Remote uncomplicated ankle fracture", "Cerumen impaction", "Seasonal sneezing alone"], "answer": 0, "rationale": "Absence of the natural lens is a labeled caution.", "reviewHref": "#prostaglandin-pathway-therapy"},
  "glaucoma-pharmacotherapy-016": {"question": "Which Xalatan-associated change may persist after stopping treatment?", "choices": ["Iris darkening", "Every episode of stinging", "Every eyelash change", "Every episode of redness"], "answer": 0, "rationale": "Iris pigmentation is likely permanent; other changes are not uniformly permanent.", "reviewHref": "#prostaglandin-pathway-therapy"},
  "glaucoma-pharmacotherapy-027": {"question": "A patient missed last evening\u2019s Xalatan. What is the labeled next step?", "choices": ["Resume the next dose normally", "Double the next dose", "Add a morning dose permanently", "Stop treatment for a week"], "answer": 0, "rationale": "Do not compensate with extra dosing.", "reviewHref": "#prostaglandin-pathway-therapy"},
  "glaucoma-pharmacotherapy-030": {"question": "Before unilateral Xalatan treatment, what cosmetic issue merits discussion?", "choices": ["The treated iris may darken", "Both irises always lighten", "Pigmentation reverses within one day", "The untreated eye must receive drops too"], "answer": 0, "rationale": "Discuss possible asymmetry without treating an unaffected eye for cosmetic matching.", "reviewHref": "#prostaglandin-pathway-therapy"},
  "glaucoma-pharmacotherapy-031": {"question": "Gradual iris darkening occurs during Xalatan use. Which response matches its label?", "choices": ["Treatment may continue with regular examination", "It always requires emergency surgery", "It proves pressure control has failed", "It guarantees an eye infection"], "answer": 0, "rationale": "Pigmentation alone does not mandate discontinuation.", "reviewHref": "#prostaglandin-pathway-therapy"},
  "glaucoma-pharmacotherapy-034": {"question": "Which history warrants macular-edema caution before Xelpros?", "choices": ["Lens replacement with a torn posterior capsule", "Remote ankle sprain", "Seasonal nasal symptoms alone", "Corrected uncomplicated myopia alone"], "answer": 0, "rationale": "A disrupted posterior capsule after lens replacement is a labeled risk context.", "reviewHref": "#prostaglandin-pathway-therapy"},
  "glaucoma-pharmacotherapy-035": {"question": "Xelpros is prescribed during active herpes simplex keratitis. What should be clarified?", "choices": ["The label advises avoiding use during active disease", "The drop treats the viral infection", "The dose must automatically be doubled", "Only iris color matters"], "answer": 0, "rationale": "Active herpetic keratitis can worsen; clarify therapy with the ophthalmologist.", "reviewHref": "#prostaglandin-pathway-therapy"},
  "glaucoma-pharmacotherapy-036": {"question": "Which statement distinguishes active uveitis from a past episode when considering Xelpros?", "choices": ["Generally avoid active inflammation; use caution with a history", "Both situations are always harmless", "A past episode requires hourly dosing", "Active uveitis is its approved indication"], "answer": 0, "rationale": "Current inflammation may be exacerbated; past inflammation also warrants caution.", "reviewHref": "#prostaglandin-pathway-therapy"},
  "glaucoma-pharmacotherapy-025": {"rationale": "Latanoprost increases aqueous outflow, principally through the uveoscleral route; the other mechanisms do not describe its FP pathway."},
  "glaucoma-pharmacotherapy-109": {"question": "Which presentation warrants immediate evaluation for angle closure?", "choices": ["Sudden blurred vision with eye pain and halos", "Stable iris color", "Unchanged reading-glasses prescription", "Chronic isolated eyelash growth"], "answer": 0, "rationale": "The acute symptom pattern can reflect vision-threatening angle closure.", "reviewHref": "#acute-angle-closure-and-drug-triggers"},
  "glaucoma-pharmacotherapy-110": {"question": "A patient develops a painful red eye with blurred vision. What is the safest next step?", "choices": ["Arrange immediate ophthalmic or emergency evaluation", "Try redness drops for three days", "Wait for the annual eye examination", "Take extra glaucoma drops without assessment"], "answer": 0, "rationale": "Urgent assessment takes priority over a self-treatment trial.", "reviewHref": "#acute-angle-closure-and-drug-triggers"},
  "glaucoma-pharmacotherapy-111": {"question": "Which medication-history detail is particularly relevant to new bilateral blur and acute myopia?", "choices": ["Recently starting topiramate", "Longstanding use of saline nasal spray", "A remote course of topical clotrimazole", "Unchanged petrolatum lip balm"], "answer": 0, "rationale": "Topiramate can cause secondary angle closure with a myopic shift.", "reviewHref": "#acute-angle-closure-and-drug-triggers"},
  "glaucoma-pharmacotherapy-112": {"question": "Confirmed topiramate-associated effusion has closed both angles without pupillary block. Which treatment assumption is unsafe?", "choices": ["Pilocarpine and iridotomy are always appropriate for angle closure", "The triggering medicine needs urgent review", "Ophthalmic care is urgent", "The mechanism should guide treatment"], "answer": 0, "rationale": "Miotics may worsen displacement, and iridotomy does not reverse the effusion.", "reviewHref": "#acute-angle-closure-and-drug-triggers"},
  "glaucoma-pharmacotherapy-058": {"question": "A pilocarpine user has blurred vision before driving. What is appropriate?", "choices": ["Avoid driving until vision is clear", "Drive normally", "Double the dose", "Switch to timolol independently"], "answer": 0, "rationale": "Pilocarpine can impair accommodation and low-light vision.", "reviewHref": "#conventional-outflow-and-procedures"},
  "glaucoma-pharmacotherapy-059": {"question": "Which examination is specifically advised before starting pilocarpine?", "choices": ["Retinal examination including funduscopy", "Audiometry", "Spirometry", "Dental examination"], "answer": 0, "rationale": "Retinal detachment has been reported in susceptible eyes.", "reviewHref": "#conventional-outflow-and-procedures"},
  "glaucoma-pharmacotherapy-060": {"question": "Active iritis is identified before pilocarpine initiation. What is appropriate?", "choices": ["Clarify therapy because use is not recommended", "Increase the concentration", "Treat the iritis with pilocarpine alone", "Ignore inflammation"], "answer": 0, "rationale": "Pilocarpine is not recommended when iritis is present.", "reviewHref": "#conventional-outflow-and-procedures"},
  "glaucoma-pharmacotherapy-037": {
    "question": "A patient asks why a timolol eye drop matters to their heart and lungs. Which explanation is accurate?",
    "choices": [
      "Some ophthalmic timolol reaches the circulation and can block beta receptors outside the eye",
      "The drop remains entirely inside the eye",
      "Systemic effects occur only if the bottle is swallowed",
      "The gel formulation eliminates systemic absorption"
    ],
    "answer": 0,
    "rationale": "Topical ophthalmic administration can still produce systemic beta blockade.",
    "reviewHref": "#aqueous-production-suppressors"
  },
  "glaucoma-pharmacotherapy-038": {
    "question": "A new Timoptic-XE prescription is presented by a patient with a history of bronchial asthma. Which dispensing decision is appropriate?",
    "choices": [
      "Contact the prescriber because the label contraindicates this history",
      "Dispense because the asthma is not active today",
      "Dispense if the patient promises punctal occlusion",
      "Increase the rescue inhaler dose without review"
    ],
    "answer": 0,
    "rationale": "The contraindication includes a history of asthma. Administration technique does not remove it.",
    "reviewHref": "#aqueous-production-suppressors"
  },
  "glaucoma-pharmacotherapy-039": {
    "question": "Which newly added medicine is especially relevant when checking additive AV-conduction effects in a patient using timolol eye drops?",
    "choices": [
      "Digoxin",
      "An artificial tear lubricant",
      "A topical skin moisturizer",
      "Saline nasal spray"
    ],
    "answer": 0,
    "rationale": "Digitalis and ophthalmic beta blockade can have additive effects on AV conduction; review pulse, symptoms and the full regimen.",
    "reviewHref": "#aqueous-production-suppressors"
  },
  "glaucoma-pharmacotherapy-040": {
    "question": "An insulin-treated patient using ophthalmic timolol asks about low blood glucose. Which counseling point is appropriate?",
    "choices": [
      "Beta blockade can mask some hypoglycemia warning symptoms",
      "Timolol guarantees that hypoglycemia cannot occur",
      "Glucose monitoring is unnecessary with topical medicines",
      "All hypoglycemia symptoms become more obvious"
    ],
    "answer": 0,
    "rationale": "Systemic beta blockade from an ophthalmic product may mask signs of acute hypoglycemia.",
    "reviewHref": "#aqueous-production-suppressors"
  },
  "glaucoma-pharmacotherapy-045": {
    "question": "How does dorzolamide primarily reduce aqueous secretion?",
    "choices": [
      "Inhibiting ciliary carbonic anhydrase reduces bicarbonate formation and associated sodium and fluid transport",
      "Stimulating muscarinic receptors contracts the iris",
      "Blocking beta receptors is its primary molecular action",
      "Creating a permanent surgical opening in the iris"
    ],
    "answer": 0,
    "rationale": "Carbonic anhydrase inhibition acts on secretion in the ciliary processes; it is distinct from miotic, beta-blocker and procedural mechanisms.",
    "reviewHref": "#aqueous-production-suppressors"
  },
  "glaucoma-pharmacotherapy-046": {
    "question": "Oral acetazolamide is added to a regimen containing dorzolamide eye drops. Which issue should be clarified?",
    "choices": [
      "Concurrent oral and topical carbonic anhydrase inhibition is not recommended in the dorzolamide label",
      "The two drugs cannot have additive effects because their routes differ",
      "Dorzolamide must automatically be doubled",
      "Only the bottle cap color matters"
    ],
    "answer": 0,
    "rationale": "The combination can add to systemic carbonic anhydrase inhibitor effects despite ophthalmic administration.",
    "reviewHref": "#aqueous-production-suppressors"
  },
  "glaucoma-pharmacotherapy-047": {
    "question": "Which ocular history increases concern for corneal edema with dorzolamide?",
    "choices": [
      "A low corneal endothelial cell count",
      "Brown iris color alone",
      "A history of wearing reading glasses alone",
      "Long eyelashes alone"
    ],
    "answer": 0,
    "rationale": "The label cautions about edema in eyes with low endothelial cell counts.",
    "reviewHref": "#aqueous-production-suppressors"
  },
  "glaucoma-pharmacotherapy-048": {
    "question": "A patient develops conjunctivitis and eyelid reactions during chronic dorzolamide use. What does the label advise?",
    "choices": [
      "Discontinue the product and obtain clinical evaluation before considering restarting",
      "Continue indefinitely because allergy cannot occur with eye drops",
      "Increase dosing frequency to wash the eye",
      "Treat the reaction by sharing another person\u2019s glaucoma drops"
    ],
    "answer": 0,
    "rationale": "Dorzolamide can cause allergic ocular and lid reactions; the label advises discontinuation and evaluation.",
    "reviewHref": "#aqueous-production-suppressors"
  },
  "glaucoma-pharmacotherapy-041": {
    "question": "Which pair of actions contributes to prescription brimonidine\u2019s pressure-lowering effect?",
    "choices": [
      "Reduced aqueous production and increased uveoscleral outflow",
      "Increased aqueous production and closed trabecular drainage",
      "Permanent surgical drainage and lens extraction",
      "Retinal regeneration and removal of vitreous"
    ],
    "answer": 0,
    "rationale": "The Alphagan P label describes reduced production and increased uveoscleral outflow.",
    "reviewHref": "#aqueous-production-suppressors"
  },
  "glaucoma-pharmacotherapy-042": {
    "question": "An Alphagan P prescription is written for an 18-month-old child. What requires clarification?",
    "choices": [
      "The product is contraindicated below age two",
      "Only the bottle size needs checking",
      "The dose should be doubled because children clear all eye drops faster",
      "Punctal occlusion eliminates the age restriction"
    ],
    "answer": 0,
    "rationale": "Infant exposure can cause serious CNS and respiratory depression; the age contraindication cannot be bypassed by technique.",
    "reviewHref": "#aqueous-production-suppressors"
  },
  "glaucoma-pharmacotherapy-043": {
    "question": "A patient using prescription brimonidine is newly prescribed a sedative. Which concern should be reviewed?",
    "choices": [
      "Additive CNS depression and impaired alertness",
      "A guaranteed increase in visual acuity",
      "Elimination of all brimonidine adverse effects",
      "A need to take twice as many eye drops"
    ],
    "answer": 0,
    "rationale": "The Alphagan P label cautions that CNS depressants may add to or potentiate its effects.",
    "reviewHref": "#aqueous-production-suppressors"
  },
  "glaucoma-pharmacotherapy-044": {
    "question": "A breastfeeding patient asks whether Alphagan P is preferred because it is topical. Which answer matches its current label?",
    "choices": [
      "Use during lactation is not recommended because of possible serious effects in the nursing infant",
      "Topical use guarantees no infant exposure",
      "The product must always be used in every breastfeeding patient",
      "The infant should receive the same drops preventively"
    ],
    "answer": 0,
    "rationale": "The label identifies potential infant CNS depression and apnea; treatment alternatives need clinician review.",
    "reviewHref": "#aqueous-production-suppressors"
  }
};

export const glaucomaPharmacotherapyQuestionBank = generatedGlaucomaQuestions.map(question =>
  reviewedProductionCases[question.id] ? { ...question, ...reviewedProductionCases[question.id] } : question
).concat([
  {
    "id": "glaucoma-pharmacotherapy-apraclonidine-duration",
    "question": "Pressure rises again after an initial response to adjunctive apraclonidine 0.5%. What is the best interpretation?",
    "choices": [
      "Loss of effect can occur; arrange prompt reassessment rather than assuming durable control",
      "An initial response proves permanent efficacy",
      "Use the bottle hourly without review",
      "Replace glaucoma follow-up with an OTC redness check"
    ],
    "answer": 0,
    "rationale": "Apraclonidine 0.5% is a short-term adjunct. Tolerance can develop, and the label calls for discontinuation if pressure rises significantly.",
    "reviewHref": "#aqueous-production-suppressors"
  },
  {
    "id": "glaucoma-pharmacotherapy-apraclonidine-maoi",
    "question": "Which concurrent therapy is specifically contraindicated by the apraclonidine 0.5% label?",
    "choices": [
      "An MAO inhibitor",
      "A preservative-free artificial tear",
      "Saline nasal spray",
      "A topical skin moisturizer"
    ],
    "answer": 0,
    "rationale": "The apraclonidine label lists MAO inhibitors as a contraindication; do not treat this as merely a routine monitoring issue.",
    "reviewHref": "#aqueous-production-suppressors"
  },
  {
    "id": "glaucoma-pharmacotherapy-lumify-substitution",
    "question": "A patient runs out of prescription brimonidine and buys Lumify because the ingredient name matches. Which response is appropriate?",
    "choices": [
      "Arrange access to the prescribed therapy; Lumify is a different concentration and indication",
      "Use Lumify as an automatic equivalent",
      "Double Lumify until its bottle empties",
      "Stop pressure monitoring because the eye looks white"
    ],
    "answer": 0,
    "rationale": "OTC redness relief does not replace the prescribed pressure-lowering regimen. Product and indication must be checked, not ingredient name alone.",
    "reviewHref": "#aqueous-production-suppressors"
  }
]).concat([
  {
    "id": "glaucoma-pharmacotherapy-duplicate-timolol",
    "question": "A patient\u2019s active list contains both Cosopt PF and Combigan. Which ingredient is duplicated?",
    "choices": [
      "Timolol",
      "Latanoprost",
      "Pilocarpine",
      "Netarsudil"
    ],
    "answer": 0,
    "rationale": "Both combinations contain timolol 0.5%. Clarify the intended regimen instead of assuming different brands mean different ingredients.",
    "reviewHref": "#glaucoma-selection-and-monitoring"
  },
  {
    "id": "glaucoma-pharmacotherapy-simbrinza-schedule",
    "question": "Which instruction matches the U.S. Simbrinza label?",
    "choices": [
      "Shake well; one drop in each affected eye three times daily",
      "Do not shake; one drop once weekly",
      "Use the same once-daily schedule as Timoptic-XE",
      "Use two drops hourly until redness resolves"
    ],
    "answer": 0,
    "rationale": "Simbrinza is a brinzolamide/brimonidine suspension with a three-times-daily schedule; the formulation requires shaking.",
    "reviewHref": "#glaucoma-selection-and-monitoring"
  },
  {
    "id": "glaucoma-pharmacotherapy-cosopt-pf-disposal",
    "question": "A patient wants to recap an opened Cosopt PF unit for the evening dose. What is the labeled approach?",
    "choices": [
      "Discard the remainder after immediate administration; use a new unit for the next dose",
      "Keep the opened unit for six weeks",
      "Add tap water and refrigerate it",
      "Share the remainder with a family member"
    ],
    "answer": 0,
    "rationale": "Sterility cannot be maintained after the single-dose unit is opened. Its contents are used immediately and the remainder discarded.",
    "reviewHref": "#glaucoma-selection-and-monitoring"
  }
]).concat([
  {
    "id": "glaucoma-pharmacotherapy-vyzulta-storage",
    "question": "Which storage instruction matches an opened Vyzulta bottle?",
    "choices": [
      "2\u201325\u00b0C for eight weeks, protected from light and freezing",
      "Room temperature indefinitely",
      "Freeze between doses",
      "Discard after 24 hours"
    ],
    "answer": 0,
    "rationale": "Vyzulta has an eight-week opened-bottle limit; do not transfer Xalatan\u2019s six-week limit to it.",
    "reviewHref": "#prostaglandin-pathway-therapy"
  },
  {
    "id": "glaucoma-pharmacotherapy-zioptan-pouch",
    "question": "A Zioptan pouch was opened 31 days ago. Its remaining units are unopened and stayed at 22\u00b0C. What does the April 2026 label direct?",
    "choices": [
      "Discard the remaining units",
      "Use until the carton expiration",
      "Refrigerate to restart the clock",
      "Transfer the drops into another bottle"
    ],
    "answer": 0,
    "rationale": "The opened-pouch limit is 30 days, even for units that remain unopened.",
    "reviewHref": "#prostaglandin-pathway-therapy"
  },
  {
    "id": "glaucoma-pharmacotherapy-travatan-preservative",
    "question": "A patient calls Travatan Z preservative-free because it has no BAK. What correction is accurate?",
    "choices": [
      "It uses the sofZia preservative system",
      "It has no preservative of any kind",
      "All travoprost products have identical excipients",
      "BAK-free means contact lenses can remain in place"
    ],
    "answer": 0,
    "rationale": "BAK-free and preservative-free describe different formulations; lens instructions still apply.",
    "reviewHref": "#prostaglandin-pathway-therapy"
  },
  {
    "id": "glaucoma-pharmacotherapy-lumigan-storage",
    "question": "Which instruction matches correctly stored Lumigan 0.01% after opening?",
    "choices": [
      "Use until the bottle expiration date at 2\u201325\u00b0C",
      "Discard after 30 days under the Zioptan pouch rule",
      "Freeze overnight",
      "Use hourly to compensate for room-temperature storage"
    ],
    "answer": 0,
    "rationale": "The Lumigan label permits opened-bottle use until its expiration date at the specified temperature.",
    "reviewHref": "#prostaglandin-pathway-therapy"
  }
]).concat([
  {
    "id": "glaucoma-pharmacotherapy-xelpros-formulation",
    "question": "Which instruction matches the current Xelpros label?",
    "choices": [
      "Store at 2–25°C, protect from light, and use after opening until the stamped expiration",
      "Treat it as preservative-free",
      "Apply Xalatan’s six-week opened-bottle limit",
      "Add extra daily doses for greater pressure reduction"
    ],
    "answer": 0,
    "rationale": "Xelpros is a potassium-sorbate-preserved emulsion with its own storage instructions.",
    "reviewHref": "#prostaglandin-pathway-therapy"
  },
  {
    "id": "glaucoma-pharmacotherapy-rocklatan-duplicate",
    "question": "Rocklatan replaces separate Xalatan and Rhopressa prescriptions. Which reconciliation step is needed?",
    "choices": [
      "Confirm discontinuation of the replaced drops to avoid duplicate ingredients",
      "Continue all three because each brand is different",
      "Stop Rocklatan and use only lubricating drops",
      "Use all three hourly when pressure is high"
    ],
    "answer": 0,
    "rationale": "Rocklatan already supplies both latanoprost and netarsudil; verify the intended replacement regimen.",
    "reviewHref": "#prostaglandin-pathway-therapy"
  },
  {
    "id": "glaucoma-pharmacotherapy-latisse-supervision",
    "question": "A patient using latanoprost asks to start Latisse. Which advice follows the Latisse label?",
    "choices": [
      "Consult the treating physician first and monitor intraocular pressure if used",
      "Add it without review because eyelash treatment cannot affect pressure",
      "Describe all combined use as a formal labeled contraindication",
      "Replace latanoprost with Latisse applied to the eyelashes"
    ],
    "answer": 0,
    "rationale": "Latisse may interfere with prostaglandin pressure lowering. Its label requires consultation and monitoring, rather than an absolute prohibition on all combined use.",
    "reviewHref": "#prostaglandin-pathway-therapy"
  }
]).concat([
  {
    "id": "glaucoma-pharmacotherapy-normal-pressure",
    "question": "Does a normal eye-pressure reading exclude glaucoma?",
    "choices": [
      "No; normal-tension glaucoma can still damage the optic nerve",
      "Yes; it excludes every glaucoma type",
      "Yes; if the eye is painless",
      "Only if the patient wears glasses"
    ],
    "answer": 0,
    "rationale": "Pressure alone cannot rule out glaucomatous nerve damage.",
    "reviewHref": "#aqueous-humor-and-glaucoma-risk"
  },
  {
    "id": "glaucoma-pharmacotherapy-chronic-closure",
    "question": "Which statement about angle closure is accurate?",
    "choices": [
      "Chronic angle closure may have no symptoms",
      "Every angle closure causes immediate severe pain",
      "A painless eye always has an open angle",
      "Redness drops correct angle anatomy"
    ],
    "answer": 0,
    "rationale": "Chronic closure can be silent; acute warning symptoms still require emergency evaluation.",
    "reviewHref": "#aqueous-humor-and-glaucoma-risk"
  },
  {
    "id": "glaucoma-pharmacotherapy-initial-laser",
    "question": "Under NICE NG81, must eligible newly diagnosed nonadvanced open-angle glaucoma fail multiple drops before SLT is offered?",
    "choices": [
      "No; SLT can be offered initially",
      "Yes; three classes must fail",
      "Yes; surgery must fail first",
      "No; SLT eliminates all future monitoring"
    ],
    "answer": 0,
    "rationale": "The guideline includes an initial SLT pathway with continuing monitoring.",
    "reviewHref": "#glaucoma-selection-and-monitoring"
  }
]).concat([
  {
    "id": "glaucoma-pharmacotherapy-azopt-spacing",
    "question": "What minimum interval does Azopt labeling specify between topical eye medicines?",
    "choices": [
      "Ten minutes",
      "No interval",
      "One minute",
      "Three minutes"
    ],
    "answer": 0,
    "rationale": "Use the Azopt-specific interval rather than borrowing another product\u2019s instructions.",
    "reviewHref": "#aqueous-production-suppressors"
  }
]).concat([
  {
    "id": "glaucoma-pharmacotherapy-acetazolamide-cirrhosis",
    "question": "Which condition is a labeled contraindication to acetazolamide?",
    "choices": [
      "Cirrhosis",
      "Remote ankle sprain",
      "Corrected myopia alone",
      "Stable iris pigmentation"
    ],
    "answer": 0,
    "rationale": "Cirrhosis increases the risk of hepatic encephalopathy.",
    "reviewHref": "#aqueous-production-suppressors"
  },
  {
    "id": "glaucoma-pharmacotherapy-acetazolamide-aspirin",
    "question": "Which nonprescription exposure merits particular review before oral acetazolamide?",
    "choices": [
      "High-dose aspirin",
      "A plain saline nasal rinse",
      "An adhesive bandage",
      "A nonmedicated moisturizer"
    ],
    "answer": 0,
    "rationale": "High-dose aspirin with systemic carbonic anhydrase inhibition can cause severe toxicity.",
    "reviewHref": "#aqueous-production-suppressors"
  },
  {
    "id": "glaucoma-pharmacotherapy-methazolamide-renal",
    "question": "Does methazolamide\u2019s lower renal clearance remove its marked-kidney-disease restriction?",
    "choices": [
      "No; the labeled contraindication remains",
      "Yes; renal disease is irrelevant",
      "Yes; double the dose",
      "Only if taken with aspirin"
    ],
    "answer": 0,
    "rationale": "Pharmacokinetic differences do not erase the contraindication.",
    "reviewHref": "#aqueous-production-suppressors"
  }
]).concat([
  {
    "id": "glaucoma-pharmacotherapy-iopidine-container",
    "question": "May the pre-laser Iopidine 1% container be saved for the post-laser dose?",
    "choices": [
      "No; use a fresh container",
      "Yes; recap it",
      "Yes; refrigerate it",
      "Yes; dilute it"
    ],
    "answer": 0,
    "rationale": "Each single-drop dose requires a separate container.",
    "reviewHref": "#aqueous-production-suppressors"
  }
]).concat([
  {
    "id": "glaucoma-pharmacotherapy-betaxolol-selectivity",
    "question": "Does betaxolol\u2019s beta-1 selectivity guarantee pulmonary safety?",
    "choices": [
      "No; pulmonary risk still requires assessment",
      "Yes, in every patient",
      "Yes, if used in one eye",
      "Yes, without medication review"
    ],
    "answer": 0,
    "rationale": "Selectivity does not exclude bronchospasm or respiratory distress.",
    "reviewHref": "#aqueous-production-suppressors"
  }
]).concat([
  {
    "id": "glaucoma-pharmacotherapy-carteolol-asthma",
    "question": "A patient with asthma asks whether carteolol is acceptable because it has intrinsic sympathomimetic activity. What should the pharmacist do?",
    "choices": [
      "Contact the prescriber because asthma remains a contraindication",
      "Approve it because intrinsic activity prevents bronchospasm",
      "Approve it if only one eye is treated",
      "Recommend punctal occlusion as a substitute for the contraindication review"
    ],
    "answer": 0,
    "rationale": "Carteolol remains a nonselective beta blocker with an asthma contraindication. Intrinsic activity and measures that reduce systemic exposure do not erase that restriction.",
    "reviewHref": "#aqueous-production-suppressors"
  }
]).concat([
  {
    "id": "glaucoma-pharmacotherapy-mannitol-volume",
    "question": "A verified order specifies mannitol 1.5 g/kg once for a 60-kg adult. How much 20% w/v solution supplies the ordered dose?",
    "choices": [
      "450 mL",
      "45 mL",
      "90 mL",
      "300 mL"
    ],
    "answer": 0,
    "rationale": "The dose is 1.5 g/kg × 60 kg = 90 g. At 20 g/100 mL (0.2 g/mL), 90 g requires 450 mL. Dose arithmetic does not replace assessment of fluid tolerance or verification of the infusion rate.",
    "reviewHref": "#acute-angle-closure-and-drug-triggers"
  }
]);

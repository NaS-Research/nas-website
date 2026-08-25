# NaS Learn Pharmacy Curriculum Inventory

Last reviewed: August 25, 2026

This inventory records the source material available in the founder's Goodnotes library. It is an internal production record, not public course copy. Original NaS modules must synthesize the sources and must not reproduce slides, textbooks, or question banks verbatim.

## Source handling

- Goodnotes materials remain private and are excluded from Git.
- A source is marked `exported` only after a local PDF has been saved and verified.
- A module is marked `built` only after its lesson, embedded checks, 100-question bank, randomized 10-question assessment, references, responsive behavior, and production build have all been verified.
- Current medical claims require verification against authoritative contemporary references before publication.
- Legacy pregnancy letter categories are not used as the current clinical standard.

## Completion record

### Nutrition Screening, Assessment, and Malnutrition

- DAST source: Intro to Nutrition, 66 pages, exported and visually verified
- Cross reference: RxPrep NAPLEX 2023 scope and terminology
- Current references: ASPEN adult screening and assessment practice tool, GLIM consensus report and five year update, ASPEN visceral protein position paper
- Learning structure: six lessons and six embedded knowledge checks
- Assessment: 100 original questions, ten sampled without replacement per attempt, answer order randomized
- Browser verification: desktop and 390 pixel mobile viewport, no horizontal overflow
- Build verification: Next.js production build passed August 25, 2026

### Fluid and Electrolyte Therapy

- DAST sources: Fluids and Electrolytes, 41 pages, and Na Water K & Mg, 72 pages, exported and text verified
- Cross reference: RxPrep NAPLEX 2023 scope and calculation conventions
- Current references: NICE adult IV fluid guideline, European hyponatremia guideline, Society for Endocrinology emergency guidance, KDIGO acute hyperkalemia report, and current FDA labeling for tolvaptan, potassium chloride, sodium zirconium cyclosilicate, and magnesium sulfate
- Learning structure: six lessons, five native concept visuals, and six embedded knowledge checks
- Assessment: 100 original questions, ten sampled without replacement per attempt, answer order randomized
- Source reconciliation: the archived correction ceiling above 12 mmol/L per day was replaced by the cited contemporary hyponatremia limits; legacy universal claims for bicarbonate, potassium response, starch solutions, and emergency potassium binders were narrowed or removed
- Build verification: Next.js production build passed August 25, 2026

### Acid-Base Interpretation

- DAST source: Acid Base Disorders, 51 pages, exported and visually verified
- Cross reference: RxPrep NAPLEX 2023 acid-base scope and DiPiro topic structure identified in the lecture bibliography
- Current references: French expert panel guideline on metabolic acidosis, BICARICU-2 randomized clinical trial, 2024 adult hyperglycemic crises consensus, and British Thoracic Society oxygen guideline
- Learning structure: six lessons, five native reasoning diagrams, and six embedded knowledge checks
- Assessment: 100 original questions, ten sampled without replacement per attempt, answer order randomized
- Source reconciliation: MUDPILES was replaced with the more complete GOLD MARK framework; bicarbonate indications were narrowed using current evidence; paper-bag rebreathing was removed as unsafe; albumin correction, expected compensation, mixed disorders, and peri-intubation risk were added
- Browser verification: desktop and 390 pixel mobile viewport, no horizontal overflow, ten remediation links after submission, different question set on repeat attempt, and no console warnings or errors
- Build verification: Next.js production build passed August 25, 2026

### Calcium and Phosphorus Homeostasis

- DAST sources: Calcium & Phosphorus, 48 pages, and Chapter 71: Calcium and Phosphorus Homeostasis, 36 pages, exported and text verified
- Cross reference completed: RxPrep NAPLEX 2023 acute care, renal, osteoporosis, and oncology mineral-disorder coverage
- Current references reviewed: KDIGO CKD mineral and bone disorder guideline, Endocrine Society hypercalcemia of malignancy guideline, Society for Endocrinology emergency guidance, and current FDA labeling for calcium gluconate, zoledronic acid, denosumab, palopegteriparatide, and ferric carboxymaltose
- Learning structure: six lessons, six native clinical diagrams, and six embedded knowledge checks
- Assessment: 100 original questions with unique identifiers and nonduplicated answer choices, ten sampled without replacement per attempt, answer order randomized
- Browser verification completed: desktop and 390 pixel mobile rendering, six visuals, ten questions per attempt, and a different question set on repeat attempt
- Build verification: Next.js production build passed August 25, 2026
- Source reconciliation: legacy fixed dosing and monitoring language was reframed as local protocol content; current chronic hypoparathyroidism therapy, hypercalciuria prevention, ferric carboxymaltose risk, acute phosphate toxicity, and long-term aluminum avoidance were added

### Enteral Nutrition

- DAST source: Enteral Nutrition, 81 pages, exported and text verified
- Cross reference completed: RxPrep NAPLEX 2023 nutrition support, dosage-form, interaction, and calculation coverage
- Current references reviewed: ASPEN enteral nutrition safe practices, ASPEN and SCCM adult critical care nutrition guidance, ASPEN refeeding consensus recommendations, and FDA enteral connector safety guidance
- Learning structure: six lessons, six native clinical diagrams, and six embedded knowledge checks
- Assessment: 100 original questions with rate, delivered-volume, free-water, access, medication, and complication cases, ten sampled without replacement per attempt, answer order randomized
- Source reconciliation: outdated routine residual monitoring, blanket medication hold intervals, formula marketing claims, and rigid hang-time language were narrowed to current evidence, manufacturer instructions, and facility protocol
- Browser verification: desktop and 390 pixel mobile rendering, no horizontal overflow, six diagrams, ten questions per attempt, a different question set on repeat attempt, scoring feedback, remediation links, and no console errors
- Build verification: Next.js production build passed August 25, 2026

### Parenteral Nutrition

- DAST source: Parenteral Nutrition, 91 pages, exported and text verified
- Cross reference completed: RxPrep NAPLEX 2023 nutrition support, sterile-product, compatibility, and monitoring scope
- Current references reviewed: ASPEN PN appropriateness and care pathway, ASPEN adult lipid safety and filtration recommendations, current FDA SMOFlipid labeling, current USP chapter 797, CDC catheter-infection prevention guidance, and ASPEN refeeding consensus recommendations
- Learning structure: six lessons, six native clinical diagrams, and six embedded knowledge checks
- Assessment: 100 original questions with indication, access, macronutrient, GIR, lipid, micronutrient, compatibility, monitoring, and transition cases, ten sampled without replacement per attempt, answer order randomized
- Source reconciliation: the legacy 0.22 micron filter convention was replaced with the current 1.2 micron ASPEN recommendation for all PN; obsolete USP risk levels and fixed beyond-use dates were removed; fixed electrolyte, peripheral-osmolarity, taper, liver-protein, trace-element, and shortage rules were reframed as patient-specific or protocol-dependent decisions
- Browser verification: desktop and 390 pixel mobile rendering, no horizontal overflow, six diagrams, ten questions per attempt, different questions and answer order on repeat attempt, complete scoring with remediation links, and no current browser errors or warnings
- Build verification: Next.js production build passed August 25, 2026

### Parenteral Nutrition Calculations

- DAST source: TPN Calculations, 7 handwritten pages, exported and visually verified
- Cross reference completed: RxPrep NAPLEX 2023 nutrition-support calculations scope
- Current references reviewed: ASPEN parenteral nutrition dosing and safety resources, CDC adult BMI guidance, the original Mifflin St Jeor resting-energy equation, and current FDA SMOFlipid labeling
- Learning structure: six lessons, six native calculation diagrams, and six embedded knowledge checks
- Assessment: 100 original questions with anthropometric conversion, BMI, ideal and adjusted weight conventions, Mifflin St Jeor, protein, dextrose, GIR, lipid, stock-solution, additive, volume, rate, and final-order cases; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: handwritten equations were preserved as calculation conventions where appropriate; BMI, ideal body weight, adjusted body weight, fluid estimates, and predictive energy equations are explicitly framed as estimates rather than universal physiologic rules; product-specific lipid labeling and current clinical monitoring supersede fixed classroom assumptions
- Browser verification: desktop and 390 pixel mobile rendering, no horizontal overflow, six diagrams, ten questions per attempt, different questions and answer order on repeat attempt, complete scoring with explanations and ten remediation links, and no current browser errors or warnings
- Build verification: Next.js production build passed August 25, 2026 with 335 static pages generated

### Pediatric Parenteral Nutrition

- DAST source: Pediatric TPN, 60 pages, exported and text verified
- Cross reference completed: RxPrep NAPLEX 2023 pediatric nutrition-support and sterile-product scope
- Current references reviewed: 2023 ASPEN preterm PN guideline, ASPEN neonatal and pediatric lipid safety recommendations, ASPEN appropriate PN dosing tool, current FDA SMOFlipid labeling, and FDA aluminum-content guidance
- Learning structure: six lessons, six native clinical diagrams, and six embedded knowledge checks
- Assessment: 100 original questions with indication, access, maintenance fluid, dextrose, GIR, amino acid, lipid, mineral, trace-element, compatibility, aluminum, filtration, photoprotection, monitoring, and transition cases; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: the lecture's routine 4 g/kg/day preterm amino-acid ceiling was replaced by the 2023 ASPEN maximum target of 3.5 g/kg/day and recommendation against an initial dose above 3 g/kg/day; fixed glucose thresholds, blanket renal and hepatic protein restriction, product-independent lipid rates, routine 200 mg/dL triglyceride rules, peripheral concentration limits, and separate-lipid-only language were reframed as patient, product, access, and policy-specific decisions
- Browser verification: desktop and 390 pixel mobile rendering, no horizontal overflow, six diagrams, ten questions per attempt, different questions and answer order on repeat attempt, complete scoring with explanations and ten remediation links, and no current browser errors or warnings
- Build verification: Next.js production build passed August 25, 2026 with 336 static pages generated

### Autonomic Nervous System Foundations

- DAST source: Intro to Autonomic Nervous System, 65 pages, exported and text verified
- Cross reference completed: RxPrep NAPLEX 2023 autonomic pharmacology scope
- Current references reviewed: IUPHAR and BPS muscarinic, nicotinic, adrenoceptor, and vesicular amine transporter resources, plus the 2024 American Physiological Society review of cardiac autonomic regulation
- Learning structure: six lessons, six native mechanistic diagrams, and six embedded knowledge checks
- Assessment: 100 original questions with anatomy, transmitter mapping, receptor signaling, cholinergic and adrenergic transmission, organ-response, toxidrome, and baroreflex cases; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: the lecture's simplified receptor and organ rules were retained only as entry points, then expanded to distinguish receptor subtype, tissue context, baseline tone, cotransmission, direct effect, and reflex compensation; NET was identified as a major local norepinephrine termination mechanism rather than presenting COMT as the sole off-switch
- Browser verification: desktop and 390 pixel mobile rendering, no horizontal overflow, six diagrams, ten questions per attempt, different questions and answer order on repeat attempt, complete scoring with explanations and ten remediation links, and no browser errors or warnings
- Build verification: Next.js production build passed August 25, 2026 with 337 static pages generated

### Cholinergic Agonists and Cholinesterase Inhibitors

- DAST source: Cholinoceptor-Activating and Cholinesterase-Inhibiting Drugs, 42 pages, exported and text verified
- Cross reference completed: RxPrep NAPLEX 2023 cholinergic pharmacology, myasthenia gravis, dementia, ophthalmic, urinary, and toxicology scope
- Current references reviewed: current DailyMed labeling for bethanechol, pilocarpine, cevimeline, neostigmine, pyridostigmine, donepezil, rivastigmine, galantamine, and methacholine, plus IUPHAR and BPS receptor nomenclature
- Learning structure: six lessons, six native mechanism and decision diagrams, and six embedded knowledge checks
- Assessment: 100 original questions with mechanism, structure and distribution, direct agonist, urinary, salivary, ocular, bronchial challenge, myasthenia, neuromuscular reversal, dementia, safety, and integrated clinical cases; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: obsolete broad claims about routine glaucoma treatment, fixed dementia response percentages, and simplified muscarinic subtype distribution were replaced with product-specific labeling, patient-centered benefit assessment, current titration rules, objective neuromuscular monitoring, and explicit separation of muscarinic, nicotinic, and central toxicity
- Browser verification: desktop and 390 pixel mobile rendering, no horizontal overflow, six diagrams, ten questions per attempt, different questions and answer order on repeat attempt, complete scoring with explanations and ten remediation links, and no browser errors or warnings
- Build verification: Next.js production build passed August 25, 2026 with 338 static pages generated

### Antimuscarinic Pharmacology

- Course scope: cholinoceptor blockade, organ-system applications, cumulative anticholinergic burden, and acute antimuscarinic syndrome
- Cross reference completed: RxPrep NAPLEX 2023 dementia, gastrointestinal, urinary, pulmonary, movement-disorder, and toxicology scope
- Current references reviewed: current DailyMed product labeling for atropine, scopolamine, glycopyrrolate, tiotropium, oxybutynin, trospium, and dicyclomine, plus IUPHAR and BPS muscarinic receptor nomenclature
- Learning structure: six lessons, six native mechanism and clinical-decision diagrams, and six embedded knowledge checks
- Assessment: 100 original questions spanning receptor mechanism, molecular access, anticholinergic burden, urinary selection, inhaled and perioperative use, ocular, gastrointestinal, vestibular, neurologic, interaction, monitoring, and toxicity decisions; ten sampled without replacement per attempt with answer order randomized
- Scope boundary: detailed physostigmine selection, organophosphate poisoning, and cholinesterase regeneration remain reserved for the dedicated toxicology module
- Source reconciliation: broad class claims were replaced with product-specific labeling, formulation and organ-function review, whole-regimen burden assessment, explicit cognitive and thermoregulatory risk, and stabilization before antidote selection
- Automated verification: 100 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 339 static pages generated
- Goodnotes note: the cholinoceptor-blocker lecture export remains pending because the Mac was locked during this milestone; its eventual review will be recorded as a source-reconciliation pass without blocking work on other accessible modules

### Cholinergic Medicinal Chemistry

- Course source: exported 42-page cholinoceptor-activating and cholinesterase-inhibiting lecture, including choline-ester comparison, hydrolysis, direct agonist, enzyme-inhibitor, and medicinal-chemistry terminology sections
- Cross reference completed: RxPrep NAPLEX 2023 cholinergic pharmacology and product-use scope
- Current references reviewed: NIH PubChem chemical records for acetylcholine, methacholine, carbachol, bethanechol, neostigmine, pyridostigmine, and physostigmine, plus IUPHAR and BPS receptor nomenclature
- Learning structure: six lessons, six native structure and mechanism diagrams, and six embedded knowledge checks
- Assessment: 100 original questions spanning ionization, cationic recognition, spacing, stereochemistry, choline-ester substitution, direct-agonist scaffolds, local delivery, enzyme binding, carbamylation, phosphorylation, aging, central access, and structure-to-clinic reasoning; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: simplified lecture tables were reframed as relative structure-activity relationships rather than absolute activity scores; the historical anionic-site model was updated to an aromatic active-site gorge; organophosphate aging and oxime response were made agent and time dependent; in vitro potency was explicitly separated from clinical effect
- Automated verification: 100 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 340 static pages generated

### Anticholinergic Medicinal Chemistry

- Course scope: atropine-like pharmacophore, tropane stereochemistry, tertiary and quaternary access, inhaled antagonist duration, urinary-antimuscarinic scaffolds, and structure-to-clinic reasoning
- Cross reference completed: RxPrep NAPLEX 2023 anticholinergic, pulmonary, urinary, movement-disorder, gastrointestinal, and safety scope
- Current references reviewed: NIH PubChem chemical records for atropine, scopolamine, ipratropium, tiotropium, glycopyrrolate, oxybutynin, trospium, solifenacin, and darifenacin, plus IUPHAR and BPS muscarinic receptor nomenclature
- Learning structure: six lessons, six native structure and exposure diagrams, and six embedded knowledge checks
- Assessment: 100 original questions spanning pharmacophore recognition, stereochemistry, charge, central access, route, receptor residence, soft-drug design, device deposition, active metabolites, renal elimination, metabolic prediction, and multiple meanings of selectivity; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: receptor preference was separated from kinetic, tissue, functional, and clinical selectivity; quaternary charge was framed as limiting rather than abolishing central access; local delivery was not treated as zero systemic exposure; theoretical metabolic sites were separated from clinically important clearance pathways
- Automated verification: 100 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 341 static pages generated
- Goodnotes note: the dedicated anticholinergic medicinal-chemistry lecture export remains pending because the Mac is locked; its eventual review will be recorded as a formal reconciliation pass

### Cholinergic Toxicology and Cholinesterase Regeneration

- Course source: exported cholinoceptor lecture sections on cholinergic excess, muscarinic toxicity, atropine, and acetylcholinesterase inhibition; dedicated cholinoceptor-blocker and regenerator lecture reconciliation remains pending
- Cross reference completed: RxPrep NAPLEX 2023 toxicology, pesticide exposure, antidote, emergency stabilization, and monitoring scope
- Current references reviewed: current DailyMed atropine sulfate and pralidoxime labeling, CDC and ATSDR exposure-response resources, NIH PubChem pralidoxime chemistry, and IUPHAR and BPS receptor nomenclature
- Learning structure: six lessons, six native exposure, receptor-domain, decontamination, antidote, and recovery diagrams, and six embedded knowledge checks
- Assessment: 100 original questions spanning exposure reconstruction, muscarinic, nicotinic, and central findings, responder protection, decontamination, atropine endpoints, pralidoxime reactivation, aging, recurrent toxicity, intermediate weakness, and delayed neuropathy; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: airway and ventilation were prioritized over mnemonic diagnosis; heart rate and pupil size were rejected as sole severity or atropinization endpoints; atropine was separated from nicotinic recovery; oxime benefit and aging were made agent and time dependent; decontamination was integrated with protected resuscitation
- Automated verification: 100 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 342 static pages generated
- Goodnotes note: the dedicated cholinoceptor-blocker and cholinesterase-regenerator lecture export remains pending because the Mac is locked; its eventual review will be recorded as a formal reconciliation pass

### Adrenergic Agonists

- Course scope: adrenoceptor signaling, direct and indirect sympathomimetics, vasopressors and inotropes, inhaled beta-2 agonists, peripheral and central alpha agonists, and integrated safety
- Cross reference completed: RxPrep NAPLEX 2023 emergency, pulmonary, cardiovascular, orthostatic, attention, sedation, interaction, and monitoring scope
- Current references reviewed: current DailyMed epinephrine, norepinephrine, albuterol, midodrine, clonidine, and related product labeling, plus IUPHAR and BPS alpha and beta adrenoceptor nomenclature
- Learning structure: six lessons, six native receptor, hemodynamic, airway, alpha-agonist, and safety diagrams, and six embedded knowledge checks
- Assessment: 100 original questions spanning receptor coupling, direct and reflex response, catecholamine spectra, indirect release, anaphylaxis, shock, inotropy, extravasation, beta-2 device use, potassium and lactate, central alpha-2 withdrawal, and interaction burden; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: rigid dopamine dose zones were rejected; pressure was separated from perfusion; beta-2 rescue was separated from anti-inflammatory disease control; heart-rate and blood-pressure changes were interpreted through direct and reflex physiology; receptor preference was not treated as absolute selectivity
- Automated verification: 100 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 343 static pages generated
- Goodnotes note: the dedicated adrenoceptor-activating lecture export remains pending because the Mac is locked; its eventual review will be recorded as a formal reconciliation pass

### Adrenergic Antagonists

- Course scope: competitive alpha and beta blockade, reflex physiology, vascular and urinary alpha blockers, beta blocker diversity, formulation-specific cardiovascular selection, safety, withdrawal, and acute toxicity
- Cross reference completed: RxPrep NAPLEX 2023 cardiovascular, urinary, pulmonary, metabolic, interaction, toxicology, and monitoring scope
- Current references reviewed: current DailyMed metoprolol succinate extended-release, carvedilol, propranolol, and tamsulosin labeling, IUPHAR and BPS adrenoceptor nomenclature, and national poison center resources
- Learning structure: six lessons, six native blockade, selection, safety, and toxicity diagrams, and six embedded knowledge checks
- Assessment: 100 original questions spanning competitive occupancy, receptor selectivity, reflexes, orthostasis, uroselectivity, CYP interactions, eye procedures, intrinsic sympathomimetic activity, distribution, clearance, formulation, heart failure, conduction, airway reserve, hypoglycemia, withdrawal, and overdose; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: beta-1 selectivity was treated as exposure dependent; alpha blocker urinary preference was separated from systemic safety; immediate-release and extended-release metoprolol were not treated as interchangeable; heart failure initiation was limited to stable patients and evidence-specific products; advanced overdose therapy was kept within current poison center or medical toxicology protocols
- Automated verification: 100 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 344 static pages generated
- Goodnotes note: the dedicated adrenergic-antagonist lecture export remains pending because the Mac is locked; its eventual review will be recorded as a formal reconciliation pass

### Adrenergic Medicinal Chemistry

- Course scope: phenylethanolamine pharmacophore, catechol and noncatechol ring design, nitrogen and alpha-carbon substitution, stereochemistry, metabolism, aryloxypropanolamine beta blockers, and reversible or covalent alpha antagonist scaffolds
- Cross reference completed: RxPrep NAPLEX 2023 adrenergic agonist, beta blocker, alpha blocker, interaction, formulation, and medicinal chemistry scope
- Current references reviewed: NIH PubChem chemical records for epinephrine, phenylephrine, propranolol, metoprolol, tamsulosin, and phenoxybenzamine, plus IUPHAR and BPS adrenoceptor nomenclature
- Learning structure: six lessons, six native pharmacophore, ring, side-chain, stereochemistry, beta blocker, and alpha blocker diagrams, and six embedded knowledge checks
- Assessment: 100 original questions spanning three-dimensional pharmacophore recognition, hydroxyl patterns, COMT, MAO, conjugation, nitrogen bulk, alpha substitution, direct and indirect activity, stereochemistry, aryloxypropanolamine recognition, lipophilicity, soft-drug design, quinazolines, tamsulosin, and covalent alpha blockade; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: structure-activity relationships were framed as trends rather than absolute receptor rules; catechol binding was separated from oral exposure; beta-1 preference was treated as whole-molecule and concentration dependent; ionizable amines were not treated as permanently charged; structural prediction was explicitly separated from approved indication and clinical outcomes
- Automated verification: 100 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 345 static pages generated
- Goodnotes note: the dedicated adrenergic agonist and antagonist medicinal-chemistry lecture export remains pending because the Mac is locked; its eventual review will be recorded as a formal reconciliation pass

### Diuretic Pharmacology

- Course scope: segmental nephron transport, target-site delivery, loop, thiazide-like, mineralocorticoid antagonist, ENaC blocker, carbonic anhydrase inhibitor, osmotic, aquaretic, and SGLT2 pharmacology, plus resistance and sequential blockade
- Cross reference completed: RxPrep NAPLEX 2023 renal, cardiovascular, electrolyte, acid-base, interaction, toxicology, and monitoring scope
- Current references reviewed: current DailyMed furosemide, chlorthalidone, spironolactone, acetazolamide, mannitol, and tolvaptan product information
- Learning structure: six lessons, six native nephron, loop, thiazide, collecting-duct, specialized-agent, and resistance diagrams, and six embedded knowledge checks
- Assessment: 100 original questions spanning tubular secretion, segment capacity, distal sodium delivery, effective circulating volume, NKCC2, NCC, calcium and magnesium, ototoxicity, hyponatremia, lithium, aldosterone, ENaC, hyperkalemia, bicarbonaturia, osmotic compartment shifts, aquaresis, SGLT2 physiology, early response, post-diuretic retention, sequential blockade, and NSAID interactions; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: decongestion was separated from intravascular depletion; dose equivalence was framed as approximate and response based; cardio-renal worsening was not interpreted from creatinine alone; aquaresis was separated from natriuresis; advanced combination therapy was paired with explicit electrolyte and perfusion monitoring
- Automated verification: 100 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 346 static pages generated
- Goodnotes note: the dedicated diuretic pharmacology lecture export remains pending because the Mac is locked; its eventual review will be recorded as a formal reconciliation pass

### Diuretic Medicinal Chemistry

- Course scope: carbonic anhydrase zinc-binding sulfonamides, acidic loop scaffolds, thiazide and thiazide-like structure activity, steroidal and nonsteroidal mineralocorticoid antagonists, ENaC blockers, osmotic polyols, V2 antagonists, and target-site exposure
- Cross reference completed: RxPrep NAPLEX 2023 diuretic pharmacology, formulation, allergy, interaction, renal delivery, and medicinal chemistry scope
- Current references reviewed: NIH PubChem chemical records for acetazolamide, furosemide, hydrochlorothiazide, spironolactone, amiloride, mannitol, and tolvaptan
- Learning structure: six lessons, six native zinc-binding, loop, thiazide, mineralocorticoid, ENaC and osmole, and structure-to-exposure diagrams, and six embedded knowledge checks
- Assessment: 100 original questions spanning sulfonamide ionization, zinc coordination, heterocycle electronics, isozyme access, loop acidic scaffolds, ethacrynic reactivity, benzothiadiazine evolution, nonantibiotic sulfonamide distinctions, steroid receptor selectivity, active metabolites, ENaC pore blockers, osmotic physicochemistry, V2 receptor access, albumin binding, tubular secretion, clearance, salts, and formulation; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: sulfonamide was treated as a functional motif rather than a universal allergy class; potency trends were not converted into fixed dose equivalence; kidney target was separated from elimination pathway; receptor and channel chemistry was separated from product-specific clinical outcomes
- Automated verification: 100 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 347 static pages generated
- Goodnotes note: the dedicated diuretic medicinal-chemistry lecture export remains pending because the Mac is locked; its eventual review will be recorded as a formal reconciliation pass

### Glaucoma Pharmacotherapy

- Course scope: aqueous humor production and outflow, optic nerve progression, prostaglandin pathway agents, ophthalmic beta blockers, alpha-2 agonists, carbonic anhydrase inhibitors, Rho kinase inhibitors, cholinergic therapy, laser, surgery, selection, and administration
- Cross reference completed: RxPrep NAPLEX 2023 ophthalmic, autonomic, cardiovascular, pulmonary, pediatric, interaction, device, and counseling scope
- Current references reviewed: current DailyMed latanoprost, timolol maleate, brimonidine, dorzolamide, and netarsudil product information
- Learning structure: six lessons, six native aqueous-flow, prostaglandin, production, conventional-outflow, selection, and administration diagrams, and six embedded knowledge checks
- Assessment: 100 original questions spanning pressure and progression, angle anatomy, production and outflow, pigmentation, inflammation and macular risk, systemic ophthalmic beta blockade, pediatric alpha-2 toxicity, topical carbonic anhydrase inhibition, punctal occlusion, Rho kinase, pilocarpine, laser, surgery, fixed-combination duplication, delivery failure, contamination, product spacing, contact lenses, and acute angle closure; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: intraocular pressure was treated as a modifiable risk factor rather than the complete diagnosis; target pressure was made dynamic and progression based; topical products were treated as systemic exposures; laser was included as an early treatment option rather than medication failure; technique and active-ingredient reconciliation were made part of pharmacotherapy
- Automated verification: 100 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 348 static pages generated
- Goodnotes note: the dedicated glaucoma lecture export remains pending because the Mac is locked; its eventual review will be recorded as a formal reconciliation pass

### Hypertension Foundations and Chronic Therapy

- Course scope: standardized office and home blood pressure measurement, diagnostic patterns, 2025 risk-based treatment thresholds, individualized targets, lifestyle therapy, first-line medicines, combination therapy, comorbidity selection, monitoring, adherence, access, and team-based control
- Cross reference completed: RxPrep NAPLEX 2023 hypertension, cardiovascular, renal, interaction, monitoring, and patient-counseling scope
- Current references reviewed: 2025 AHA and ACC adult high blood pressure guideline resources, the AHA PREVENT risk decision framework, and KDIGO blood pressure guidance for CKD
- Learning structure: six lessons, six native measurement, risk, lifestyle, first-line, combination, and longitudinal-control diagrams, and six embedded knowledge checks
- Assessment: 100 original questions spanning technique, cuff fit, repeated averages, white-coat and masked patterns, classification, PREVENT risk, target selection, diet, sodium, potassium, activity, thiazide-like therapy, ACE inhibitors, ARBs, dihydropyridine calcium-channel blockers, beta blocker indications, single-pill combinations, albuminuric CKD, pregnancy risk, home monitoring, laboratory follow-up, and adherence barriers; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: the current 2025 treatment framework and PREVENT threshold replaced older risk-threshold language; cuffless watches were excluded from clinical decision-making; the goal below 130 over 80 was paired with individual tolerance; dual RAAS blockade was rejected; class-specific monitoring and nonjudgmental access assessment were made part of the treatment plan
- Automated verification: 100 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 349 static pages generated
- Goodnotes note: the dedicated hypertension lecture export remains pending because the Mac is locked; its eventual review will be recorded as a formal reconciliation pass

### Resistant and Secondary Hypertension

- Course scope: apparent and true resistant hypertension, controlled resistance, standardized and out-of-office confirmation, treatment exposure, interfering medicines and substances, sodium and volume, secondary-cause screening architecture, primary aldosteronism, renal parenchymal and renovascular disease, obstructive sleep apnea, endocrine and structural causes, stepwise therapy, specialist care, and renal denervation
- Cross reference completed: RxPrep NAPLEX 2023 hypertension, renal, endocrine, sleep, interaction, monitoring, and patient-counseling scope
- Current references reviewed: 2025 AHA and ACC adult high blood pressure guideline, 2025 Endocrine Society primary aldosteronism guideline, AHA resistant hypertension scientific statement, current FDA Tryvio labeling, and FDA renal denervation device information
- Learning structure: six lessons, six native phenotype, pseudoresistance, screening, aldosterone, cause-directed, and stepwise-treatment diagrams, and six embedded knowledge checks
- Assessment: 100 original questions spanning apparent and true resistance, controlled resistance, white-coat effect, measurement error, medication exposure, regimen quality, pressure-raising agents, sodium and volume, aldosterone-renin screening, potassium, subtype evaluation, mineralocorticoid antagonists, kidney disease, renovascular clues, sleep apnea, catecholamine and cortisol testing, thyroid disease, coarctation, diuretic optimization, spironolactone, aprocitentan, renal denervation, and specialist referral; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: resistant hypertension was defined only after excluding pseudoresistance and verifying out-of-office pressure; controlled pressure on at least four agents remained a resistant phenotype; the 2025 broad conditional primary aldosteronism screening recommendation replaced a hypokalemia-only trigger; imaging alone was rejected for aldosterone laterality; newer aprocitentan and renal denervation pathways were placed after foundational optimization and multidisciplinary review
- Automated verification: 100 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 350 static pages generated
- Goodnotes note: the dedicated hypertension lectures remain pending because the Mac is locked; their eventual review will be recorded as a formal reconciliation pass

### Hypertensive Emergencies

- Course scope: severe hypertension triage, acute target-organ injury, autoregulation, condition-specific reduction, titrated intravenous therapy, ischemic stroke, intracerebral hemorrhage, hypertensive encephalopathy, PRES, acute aortic syndrome, acute coronary syndrome, hypertensive pulmonary edema, pregnancy and postpartum emergencies, catecholamine crisis, acute kidney injury, oral transition, and recurrence prevention
- Cross reference completed: RxPrep NAPLEX 2023 emergency, stroke, cardiovascular, renal, obstetric, toxicology, interaction, and monitoring scope
- Current references reviewed: 2025 AHA and ACC adult high blood pressure guideline, 2024 AHA acute-care elevated pressure statement, 2026 AHA and ASA ischemic stroke guideline, 2022 AHA and ASA intracerebral hemorrhage guideline, 2022 ACC and AHA aortic disease guideline, and ACOG severe pregnancy hypertension resources
- Learning structure: six lessons, six native triage, perfusion, neurologic, cardiovascular, special-population, and transition diagrams, and six embedded knowledge checks
- Assessment: 100 original questions spanning emergency definition, severe pressure without injury, repeat measurement, organ screening, autoregulation, reduction strategy, titratable agents, nicardipine, clevidipine, labetalol, ischemic stroke, intracerebral hemorrhage, encephalopathy, PRES, aortic anti-impulse therapy, pulmonary edema, coronary syndrome, nitrates, pregnancy, magnesium, catecholamine crisis, kidney injury, intravenous-to-oral transition, pressure variability, access, and handoff; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: the term emergency was reserved for acute target-organ injury; routine rapid treatment of hospitalized severe pressure without acute injury was rejected; newer 2026 stroke guidance against intensive systolic lowering below 140 after reperfusion was included; ICH used smooth 130 to 150 maintenance in the selected mild-to-moderate population and avoided reduction below 130; aortic therapy prioritized anti-impulse control; magnesium seizure therapy was separated from pregnancy pressure treatment
- Automated verification: 100 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 351 static pages generated
- Goodnotes note: the dedicated hypertensive emergencies lecture remains pending because the Mac is locked; its eventual review will be recorded as a formal reconciliation pass

### Antihypertensive Medicinal Chemistry

- Course scope: ACE inhibitor zinc-binding motifs, peptide-mimetic stereochemistry, active drug and ester-prodrug design, ARB acidic pharmacophores, hydrophobic recognition, active metabolites, direct renin inhibition, dihydropyridine and nondihydropyridine calcium-channel blocker scaffolds, central adrenergic activation, direct vasodilator chemistry, salts, stereochemistry, formulations, and structure-to-clinic boundaries
- Cross reference completed: RxPrep NAPLEX 2023 antihypertensive, cardiovascular, renal, formulation, interaction, pharmacokinetic, and medicinal-chemistry scope
- Current references reviewed: NIH PubChem chemical records for captopril, lisinopril, losartan, aliskiren, amlodipine, and hydralazine, plus current FDA Tryvio labeling
- Learning structure: six lessons, six native zinc-binding, RAAS ligand, calcium-channel scaffold, central access, direct-vasodilator, and product-integration diagrams, and six embedded knowledge checks
- Assessment: 104 original questions spanning zinc coordination, thiol chemistry, ester prodrugs, active nonprodrugs, phosphinate binding, tetrazole and carboxylate recognition, biphenyl hydrophobic domains, active metabolites, renin peptidomimetic design, dihydropyridine oxidation, amlodipine ionization, release systems, central access, false-transmitter activation, aryloxypropanolamines, hydralazine acetylation, minoxidil sulfation, nitro donor chemistry, endothelin antagonism, salts, stereochemistry, active species, and evidence boundaries; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: class suffixes were not treated as proof of prodrug status; losartan was described as an active parent with a more potent active metabolite; high target affinity was separated from oral exposure; calcium-channel formulation was treated as part of pharmacokinetics; reactive and donor chemistry was paired with product-specific toxicity; structural predictions were explicitly limited by labeling and clinical evidence
- Automated verification: 104 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 352 static pages generated
- Goodnotes note: the dedicated antihypertensive medicinal-chemistry lecture remains pending because the Mac is locked; its eventual review will be recorded as a formal reconciliation pass

### Dyslipidemia Pathophysiology and Risk

- Course scope: lipoprotein architecture, intestinal and hepatic apoB transport, LDL receptor clearance, LDL-C, non-HDL-C, apoB, cumulative exposure, triglyceride-rich remnants, pancreatitis risk, familial chylomicronemia, lipoprotein(a), familial hypercholesterolemia, secondary causes, screening, measurement limits, PREVENT-ASCVD, risk enhancers, coronary artery calcium, secondary prevention, and special populations
- Cross reference completed: RxPrep NAPLEX 2023 dyslipidemia, cardiovascular risk, triglyceride, inherited disease, laboratory, and monitoring scope
- Current references reviewed: 2026 ACC and AHA dyslipidemia guideline, 2026 guideline patient and clinician resources, AHA lipoprotein(a) scientific statement, and AHA clinical Lp(a) toolkit
- Learning structure: seven lessons, six native transport, particle-burden, remnant, phenotype, screening, and risk-reclassification diagrams, and seven embedded knowledge checks
- Assessment: 100 original questions spanning particle structure, chylomicron and VLDL metabolism, LDL receptor clearance, LDL-C, non-HDL-C, apoB, discordance, cumulative exposure, remnants, severe triglycerides, familial chylomicronemia, Lp(a), familial hypercholesterolemia, secondary causes, adult and childhood screening, fasting status, calculated LDL limits, PREVENT, 2026 risk categories, enhancers, coronary calcium, secondary prevention, and special-population risk; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: the 2026 guideline replaced the 2018 framework; PREVENT replaced pooled cohort equations; new 3, 5, and 10 percent risk thresholds were used; LDL-C and non-HDL-C goals returned; universal adult screening begins at 19 and childhood screening at 9 to 11; Lp(a) is measured at least once in adulthood; apoB was positioned as a selected discordance tool; mass and molar Lp(a) units were not converted with a fixed factor
- Automated verification: 100 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 353 static pages generated
- Goodnotes note: the dedicated dyslipidemia lectures remain pending because the Mac is locked; their eventual review will be recorded as a formal reconciliation pass

### Lipid-Lowering Pharmacology

- Course scope: statin target pharmacology, LDL receptor upregulation, intensity, disposition and interactions, muscle and liver safety, current reproductive labeling, ezetimibe, bile acid sequestrants, PCSK9 antibodies, inclisiran, bempedoic acid, fibrates, prescription omega-3 products, olezarsen, evinacumab, and lomitapide
- Cross reference completed: RxPrep NAPLEX 2023 dyslipidemia pharmacology, dosing, administration, interaction, monitoring, and rare-disease scope
- Current references reviewed: 2026 ACC and AHA dyslipidemia guideline and current FDA or DailyMed prescribing information for rosuvastatin, evolocumab, inclisiran, bempedoic acid, ezetimibe, fenofibrate, gemfibrozil, olezarsen, and evinacumab
- Learning structure: six lessons, six native synthesis, intestinal, receptor-recycling, ATP-citrate lyase, triglyceride, and rare-disease diagrams, and six embedded knowledge checks
- Assessment: 100 original questions spanning HMG-CoA reductase, LDL receptor expression, statin intensity, disposition, transporter and enzyme interactions, muscle symptoms, liver safety, pregnancy and lactation, NPC1L1, bile acid binding, absorption interactions, PCSK9 biology, antibodies, inclisiran RNA interference, injectable implementation, ATP-citrate lyase, liver-selective bempedoic acid activation, urate and tendon safety, PPAR-alpha, gemfibrozil interactions, prescription omega-3 distinctions, icosapent ethyl, apoC-III, ANGPTL3, and MTP; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: statin intensity was not treated as milligram equivalence; interaction pathways remained product specific; current pregnancy narrative labeling replaced retired letter categories; inclisiran was distinguished from monoclonal antibodies; gemfibrozil was separated from fenofibrate; prescription omega-3 evidence was not generalized to supplements; olezarsen was limited to adult familial chylomicronemia; receptor-independent and apoB-assembly rare-disease pathways were separated
- Automated verification: 100 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 354 static pages generated
- Goodnotes note: the dedicated dyslipidemia lectures remain pending because the Mac is locked; their eventual review will be recorded as a formal reconciliation pass

### Dyslipidemia Therapeutics

- Course scope: baseline phenotype, absolute and percentage treatment goals, PREVENT primary prevention, risk enhancers, CAC reclassification, secondary prevention, very-high-risk goals, combination therapy, therapeutic inertia, severe hypertriglyceridemia, pancreatitis prevention, FCS, HeFH, HoFH, Lp(a), diabetes, CKD, HIV, reproductive and pediatric planning, statin-attributed muscle symptoms, adherence, and access
- Cross reference completed: RxPrep NAPLEX 2023 dyslipidemia therapeutics, cardiovascular prevention, statin-intolerance, triglyceride, familial disease, monitoring, and counseling scope
- Current references reviewed: full 2026 ACC and AHA dyslipidemia guideline, ACC 2026 practice implementation summary, AHA statin-safety scientific statement, and AHA Lp(a) scientific statement
- Learning structure: six lessons, six native goal, primary-prevention, secondary-prevention, triglyceride, familial-disease, and implementation diagrams, and six embedded knowledge checks
- Assessment: 100 original questions spanning baseline phenotype, absolute goals, percentage response, monitoring, PREVENT categories, CAC, secondary-prevention classification, LDL-C and non-HDL-C goals, nonstatin sequencing, therapeutic inertia, secondary triglyceride causes, 500 and 1000 mg/dL pathways, FCS, HeFH, HoFH, Lp(a), diabetes, CKD, HIV, statin-attributed muscle symptoms, adherence, and access; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: 2026 LDL-C and non-HDL-C goals were layered onto percentage response; borderline, intermediate, and high PREVENT categories were kept distinct; CAC was not used to de-risk FH or established disease; very-high-risk secondary prevention used below 55 and below 85 mg/dL goals; severe triglyceride care separated ASCVD from pancreatitis objectives; fenofibrate was preferred to gemfibrozil with statins; HoFH escalation accounted for residual receptor function; access was treated as part of exposure
- Automated verification: 100 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 355 static pages generated
- Goodnotes note: the dedicated dyslipidemia lectures remain pending because the Mac is locked; their eventual review will be recorded as a formal reconciliation pass

### Chronic Coronary Disease

- Course scope: obstructive and nonobstructive coronary disease, plaque progression, oxygen supply and demand, anginal equivalents, unstable symptom triage, activity, cardiac rehabilitation, tobacco treatment, lipid and pressure control, cardiometabolic outcome therapy, single and dual antiplatelet therapy, oral-anticoagulant overlap, beta blockers, calcium channel blockers, nitrates, ranolazine, revascularization, routine testing, INOCA, follow-up, access, and supplements
- Cross reference completed: RxPrep NAPLEX 2023 coronary disease, antianginal, secondary-prevention, antithrombotic, interaction, monitoring, and counseling scope
- Current references reviewed: 2023 AHA and ACC chronic coronary disease guideline, 2026 AHA and ACC dyslipidemia guideline, 2021 AHA and ACC chest pain guideline, and 2025 AHA nonobstructive coronary disease scientific statement
- Learning structure: six lessons, six native disease-spectrum, prevention, antithrombotic, angina, testing, and longitudinal-care diagrams, and six embedded knowledge checks
- Assessment: 100 original questions spanning CCD phenotypes, plaque, supply and demand, symptom equivalents, acute triage, rehabilitation, tobacco, lipids, pressure, SGLT2 and GLP-1 therapies, antiplatelets, DAPT, P2Y12 monotherapy, oral anticoagulation, beta-blocker indications, calcium channel blockers, nitrates, ranolazine, revascularization, surveillance testing, INOCA, changed symptoms, follow-up, and supplements; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: symptom relief was separated from event prevention; successful PCI was not treated as cure of systemic atherosclerosis; current 2026 lipid goals superseded the older lipid framework; long-term beta-blocker outcome use was limited to current indications; post-PCI antithrombotic duration remained risk selected; oral-anticoagulant overlap was minimized in stable disease; routine surveillance testing without clinical change was rejected; nonobstructive anatomy did not invalidate ischemic symptoms
- Automated verification: 100 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 356 static pages generated
- Goodnotes note: the dedicated coronary disease lectures remain pending because the Mac is locked; their eventual review will be recorded as a formal reconciliation pass

### Acute Coronary Syndromes

- Course scope: plaque rupture and erosion, type 1 and type 2 MI, acute myocardial injury, symptom recognition, serial ECG and high-sensitivity troponin, selective oxygen, nitrate safety, dangerous mimics, aspirin, P2Y12 inhibitors, parenteral anticoagulation, DAPT, primary PCI, fibrinolysis, NSTE-ACS invasive strategy, radial access, intravascular imaging, complete revascularization, cardiogenic shock, bleeding mitigation, lipid intensification, complications, cardiac rehabilitation, and discharge transition
- Cross reference completed: RxPrep NAPLEX 2023 ACS, antiplatelet, anticoagulant, reperfusion, anti-ischemic, interaction, monitoring, and secondary-prevention scope
- Current references reviewed: 2025 AHA and ACC acute coronary syndromes guideline, official 2025 ACS top-things and patient resources, and 2026 AHA and ACC dyslipidemia guideline
- Learning structure: six lessons, six native thrombosis, diagnosis, antithrombotic, reperfusion, PCI and shock, and discharge diagrams, and six embedded knowledge checks
- Assessment: 100 original questions spanning type 1 and type 2 MI, thrombosis, symptoms, injury versus infarction, ECG, troponin, oxygen, nitrates, mimics, aspirin, P2Y12 selection and timing, anticoagulation, DAPT, STEMI PCI, fibrinolysis, NSTE-ACS risk and timing, radial access, imaging, complete revascularization, shock, bleeding, lipids, and rehabilitation; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: troponin elevation was not equated with type 1 MI; diagnostic STEMI did not wait for biomarkers; oxygen was not given routinely in normoxemia; nitrate contraindications were explicit; ticagrelor and prasugrel preference was tied to PCI and bleeding context; prasugrel was excluded after stroke or TIA; NSTE-ACS pretreatment followed angiography timing; default DAPT was at least 12 months when bleeding risk was not high; shock used culprit-vessel emergency PCI without routine immediate nonculprit PCI; discharge lipid follow-up used 4 to 8 weeks
- Automated verification: 100 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 357 static pages generated
- Goodnotes note: the dedicated ACS lectures remain pending because the Mac is locked; their eventual review will be recorded as a formal reconciliation pass

### Antiplatelet Pharmacology

- Course scope: platelet adhesion, activation, secretion, and aggregation; aspirin and thromboxane; oral P2Y12 inhibitors; clopidogrel activation and CYP2C19 variability; prasugrel contraindications and bleeding selection; ticagrelor kinetics, aspirin pairing, dyspnea, and CYP3A interactions; cangrelor; GPIIb/IIIa inhibitors; renal dosing; thrombocytopenia; testing; switching; bleeding; procedures; and counseling
- Cross reference completed: RxPrep NAPLEX 2023 antiplatelet mechanism, indication, interaction, adverse-effect, monitoring, and counseling scope
- Current references reviewed: 2025 AHA and ACC acute coronary syndromes guideline and current DailyMed labeling for clopidogrel, prasugrel, ticagrelor, cangrelor, eptifibatide, and tirofiban
- Learning structure: six lessons, six native platelet-pathway, aspirin, oral P2Y12, intravenous-agent, variability, and bleeding diagrams, and six embedded knowledge checks
- Assessment: 104 original questions spanning vWF and GPIb, platelet agonists, GPIIb/IIIa, aspirin mechanism and formulation, GI safety, hypersensitivity, clopidogrel activation and interaction, prasugrel selection, ticagrelor kinetics and adverse effects, cangrelor transitions, intravenous GPIIb/IIIa use, renal adjustment, thrombocytopenia, selected testing, procedural interruption, major bleeding, and counseling; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: aspirin plasma exposure was separated from irreversible platelet effect; clopidogrel poor metabolism was tied to active-metabolite formation; prasugrel was excluded after stroke or TIA and age and weight bleeding factors were explicit; ticagrelor used current low-dose aspirin maintenance labeling; cangrelor transition timing differed by oral agent; GPIIb/IIIa use was selective and included renal and platelet surveillance; testing was limited to actionable decisions
- Automated verification: 104 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 358 static pages generated
- Goodnotes note: the dedicated antiplatelet lectures remain pending because the Mac is locked; their eventual review will be recorded as a formal reconciliation pass

### Coagulation and Anticoagulant Pharmacology

- Course scope: primary and secondary hemostasis, tissue factor initiation, factor Xa, thrombin, fibrin, fibrinolysis, antithrombin-dependent anticoagulants, vitamin K antagonism, direct factor Xa and thrombin inhibitors, prevention and treatment intensity, PT and INR, aPTT, anti-Xa and thrombin-sensitive testing, routine-test limitations, kidney and liver function, age, weight, pregnancy, interactions, additive bleeding, transitions, bridging, neuraxial procedures, major bleeding, reversal, and HIT
- Cross reference completed: RxPrep NAPLEX 2023 anticoagulant mechanism, laboratory, interaction, adverse-effect, reversal, monitoring, HIT, and counseling scope
- Current references reviewed: ASH VTE clinical guideline collection, 2021 CHEST VTE guidance, and current DailyMed labeling for heparin, warfarin, apixaban, rivaroxaban, edoxaban, fondaparinux, and andexanet alfa
- Learning structure: six lessons, six native hemostasis, target, laboratory, selection, transition, and critical-safety diagrams, and six embedded knowledge checks
- Assessment: 100 original questions spanning primary and secondary hemostasis, tissue factor, factor Xa, thrombin, fibrinolysis, antithrombin, vitamin K, direct Xa and thrombin inhibition, anticoagulant intensity, PT and INR, aPTT, anti-Xa, thrombin time, routine-test limits, kidney and liver function, age, weight, pregnancy, P-gp and CYP interactions, additive bleeding, transitions, neuraxial procedures, major bleeding, reversal, and HIT; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: the cell-based model replaced isolated-cascade memorization; D-dimer was not treated as diagnostic by itself; INR was limited to vitamin K antagonist monitoring; routine PT and aPTT were not used to exclude all DOAC exposure; dose criteria stayed product and indication specific; pregnancy letters were not used; bridging was risk selected; reversal was paired to agent and source control; HIT was treated as a prothrombotic emergency
- Automated verification: 100 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 359 static pages generated
- Goodnotes note: the dedicated anticoagulation lectures remain pending because the Mac is locked; their eventual review will be recorded as a formal reconciliation pass

### Venous Thromboembolism

- Course scope: Virchow triad, reversible and persistent risk, proximal and distal DVT, upper-extremity and catheter thrombosis, pretest probability, D-dimer, compression ultrasound, PE symptoms and differential, CT pulmonary angiography and ventilation-perfusion imaging, 2026 acute PE categories A through E, home and hospital disposition, prompt anticoagulation, LMWH and UFH selection, DOAC oral pathways, advanced PE therapy, PERT, IVC filters, treatment phases, extended therapy, cancer, pregnancy, post-thrombotic symptoms, and chronic thromboembolic disease surveillance
- Cross reference completed: RxPrep NAPLEX 2023 VTE diagnosis, anticoagulant selection, duration, interaction, monitoring, special-population, and counseling scope
- Current references reviewed: 2026 multisociety acute PE guideline and official top-things resource, ASH VTE treatment guidance, and 2021 CHEST VTE guidance
- Learning structure: six lessons, six native risk, DVT diagnosis, PE category, initial-treatment, duration, and follow-up diagrams, and six embedded knowledge checks
- Assessment: 100 original questions spanning Virchow triad, provoking and persistent factors, proximal DVT, probability and D-dimer, ultrasound, distal and catheter DVT, PE symptoms, probability and imaging, acute PE categories, outpatient and inpatient care, prompt anticoagulation, LMWH preference, DOAC selection, advanced therapies, PERT, IVC filters, treatment phases, extended therapy, cancer, pregnancy, and post-PE CTEPD surveillance; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: provoking factors were classified by strength and persistence; positive D-dimer was not treated as diagnostic; distal DVT surveillance required active serial imaging; PE severity used the 2026 A through E categories rather than anatomy alone; category A and selected category B pathways included implementation screening; LMWH was preferred when parenteral acute PE therapy was required; DOACs were preferred for eligible oral treatment but product initiation rules remained distinct; advanced therapy was limited to severe categories; extended therapy followed persistent recurrence risk; PE symptoms were screened at every visit for at least one year
- Automated verification: 100 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 360 static pages generated
- Goodnotes note: the dedicated VTE and PE lectures remain pending because the Mac is locked; their eventual review will be recorded as a formal reconciliation pass

### Warfarin Management

- Course scope: VKORC1 and vitamin K recycling, gamma carboxylation, factors II, VII, IX, and X, proteins C and S, factor turnover, warfarin stereochemistry, mechanical valves and rheumatic mitral stenosis, indication-specific INR goals, initial dosing, acute VTE overlap, acute HIT precautions, total weekly dose, INR trends, time in therapeutic range, missed doses, dietary vitamin K, CYP inhibition and induction, antibiotics and illness, additive bleeding, elevated INR, major bleeding reversal, procedures and bridging, pregnancy, older adults, organ dysfunction, skin necrosis, calciphylaxis, kidney injury, counseling, and home INR testing
- Cross reference completed: RxPrep NAPLEX 2023 warfarin mechanism, initiation, dosing, INR, interaction, adverse-effect, reversal, procedure, monitoring, and counseling scope
- Current references reviewed: June 2026 DailyMed warfarin labeling, 2023 AHA and ACC atrial fibrillation guidance, 2020 AHA and ACC valve guidance, ASH anticoagulation guidance, and 2021 CHEST VTE guidance
- Learning structure: six lessons, six native vitamin-K-cycle, initiation, INR, interaction, reversal, and longitudinal-care diagrams, and six embedded knowledge checks
- Assessment: 100 original questions spanning VKORC1, factor turnover, protein C and S, stereochemistry, warfarin-preferred indications, INR goals, initial dosing, VTE overlap, acute HIT, weekly dosing, INR trend, TTR, missed doses, vitamin K diet, CYP inhibition and induction, illness, pharmacodynamic bleeding, elevated INR, major bleeding reversal, procedures, pregnancy, rare toxicity, organ dysfunction, and home testing; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: warfarin effect followed factor turnover rather than plasma exposure; early INR did not substitute for required acute VTE overlap; DOACs were not offered for mechanical valves; valve INR goals remained prosthesis and risk specific; acute HIT excluded early warfarin; dose changes used actual total weekly exposure and trend; vitamin K consistency replaced food avoidance; interaction monitoring covered onset and offset; major bleeding used source control, four-factor PCC, and intravenous vitamin K; bridging was risk selected; pregnancy used narrative risk and specialist planning rather than letter categories
- Automated verification: 100 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 361 static pages generated
- Goodnotes note: the dedicated warfarin lecture remains pending because the Mac is locked; its eventual review will be recorded as a formal reconciliation pass

### Direct Oral Anticoagulants

- Course scope: direct factor Xa and thrombin inhibition, rapid onset and offset, eligibility, indication-specific apixaban, rivaroxaban, edoxaban, and dabigatran regimens, treatment phases, kidney and hepatic criteria, age and weight criteria, food and dosage-form requirements, P-gp and CYP3A interactions, adherence, missed doses, absorption, laboratory limitations, transitions, procedures, neuraxial care, major bleeding, idarucizumab, factor Xa inhibitor reversal, and anticoagulation resumption
- Cross reference completed: RxPrep NAPLEX 2023 DOAC mechanism, indication, dosing, interaction, adverse-effect, monitoring, reversal, and counseling scope
- Current references reviewed: current DailyMed labeling for apixaban, rivaroxaban, edoxaban, dabigatran, idarucizumab, and andexanet alfa, plus the 2026 multisociety acute PE guideline
- Learning structure: six lessons, six native target, oral factor Xa inhibitor, dabigatran, selection, procedure, and bleeding diagrams, and six embedded knowledge checks
- Assessment: 104 original questions spanning targets, clinical eligibility, rapid onset, all four product regimens, treatment phases, renal and hepatic criteria, food, dosage-form handling, P-gp and CYP3A interactions, adherence, missed doses, transitions, procedures, laboratory interpretation, major bleeding, reversal, and resumption; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: DOAC doses remained product, indication, and phase specific; atrial fibrillation dose-reduction criteria were not imported into acute VTE treatment; edoxaban high-creatinine-clearance atrial fibrillation restriction and VTE lead-in were explicit; dabigatran renal, P-gp, storage, and capsule-handling risks were retained; normal routine coagulation tests were not used to exclude exposure; reversal was agent matched and paired with source control and a restart plan
- Automated verification: 104 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 362 static pages generated
- Goodnotes note: the dedicated DOAC lecture remains pending because the Mac is locked; its eventual review will be recorded as a formal reconciliation pass

### Parenteral Anticoagulants

- Course scope: antithrombin-dependent and direct mechanisms, UFH, LMWH, fondaparinux, argatroban, bivalirudin, prophylaxis versus treatment, product concentration, weight and renal dosing, aPTT, anti-Xa, ACT, heparin resistance, administration technique, postoperative timing, direct thrombin inhibitor organ clearance, HIT, protamine, neuraxial procedures, bleeding, and transitions
- Cross reference completed: RxPrep NAPLEX 2023 parenteral anticoagulant mechanism, dosing, laboratory, interaction, adverse-effect, monitoring, HIT, reversal, and counseling scope
- Current references reviewed: current DailyMed labeling for heparin, enoxaparin, fondaparinux, argatroban, bivalirudin, and protamine sulfate, plus current ASH HIT guidance
- Learning structure: six lessons, six native target, UFH, LMWH, fondaparinux, direct-thrombin-inhibitor, and critical-safety diagrams, and six embedded knowledge checks
- Assessment: 112 original questions spanning antithrombin dependence, target selectivity, UFH concentration and initiation, aPTT and anti-Xa interpretation, heparin resistance, LMWH indication, renal function, body weight, anti-Xa testing and technique, fondaparinux timing, weight tiers, renal restriction and HIT context, argatroban, bivalirudin, protamine, HIT response, neuraxial safety, and transitions; ten sampled without replacement per attempt with answer order randomized
- Source reconciliation: injectable anticoagulants were not treated as interchangeable; UFH laboratory response was separated from delivery error and assay discordance; LMWH prophylaxis and treatment intensities remained distinct; routine LMWH anti-Xa testing was avoided; fondaparinux used current weight and renal constraints; argatroban hepatic clearance and INR effect were explicit; bivalirudin remained tied to PCI labeling; HIT used 4Ts-guided immediate action; protamine was not presented as a universal antidote
- Automated verification: 112 unique question IDs, no duplicate answer choices, valid lesson links, six diagrams, and no em dash or en dash characters in public prose
- Build verification: Next.js production build passed August 25, 2026 with 363 static pages generated
- Goodnotes note: the dedicated parenteral anticoagulant lecture remains pending because the Mac is locked; its eventual review will be recorded as a formal reconciliation pass

## Goodnotes availability

### Books

- RxPrep NAPLEX 2023, 1,032 pages

The RxPrep text is available locally for scope comparison and calculations review. It is not stored in Git and its prose or proprietary questions are not reproduced.

### DAST I

The folder is currently empty.

### DAST II

#### Nutrition

Available documents:

- AB Calculations
- Acid Base Disorders (`exported`, 51 pages)
- Calcium & Phosphorus
- Chapter 71: Calcium and Phosphorus Homeostasis
- Enteral Nutrition
- Fluids and Electrolytes (`exported`, 41 pages)
- Intro to Nutrition (`exported`, 66 pages)
- Na Water K & Mg (`exported`, 72 pages)
- Nutrition Monitoring
- Nutrition Study Guide
- Parenteral Nutrition
- Pediatric TPN (`exported`, 60 pages)
- TPN Calculations (`exported`, 7 pages)

Target modules:

1. Nutrition Screening, Assessment, and Malnutrition (`built`, 100 question bank)
2. Fluid and Electrolyte Therapy (`built`, 100 question bank)
3. Acid-Base Interpretation (`built`, 100 question bank)
4. Calcium and Phosphorus Homeostasis (`built`, 100 question bank)
5. Enteral Nutrition (`built`, 100 question bank)
6. Parenteral Nutrition (`built`, 100 question bank)
7. Parenteral Nutrition Calculations (`built`, 100 question bank)
8. Pediatric Parenteral Nutrition (`built`, 100 question bank)

#### Autonomic nervous system

Available documents:

- Intro: Autonomic Nervous System (`exported`, 65 pages)
- Cholinoceptor-Activating and Cholinesterase-Inhibiting Drugs (`exported`, 42 pages)
- Cholinoceptor Blockers and Cholinesterase Regenerators
- Cholinergic Agents Medicinal Chemistry
- Anticholinergic Medicinal Chemistry

Target modules:

1. Autonomic Nervous System Foundations (`built`, 100 question bank)
2. Cholinergic Agonists and Cholinesterase Inhibitors (`built`, 100 question bank)
3. Antimuscarinic Pharmacology (`built`, 100 question bank; Goodnotes reconciliation pending)
4. Cholinergic Medicinal Chemistry (`built`, 100 question bank)
5. Anticholinergic Medicinal Chemistry (`built`, 100 question bank; Goodnotes reconciliation pending)
6. Cholinergic Toxicology and Cholinesterase Regeneration (`built`, 100 question bank; Goodnotes reconciliation pending)

#### Adrenergic, diuretic, and ocular pharmacology

Available documents:

- Adrenergic Agonist and Antagonist Medicinal Chemistry
- Adrenoceptor Activating Drugs
- Adrenoceptor Blockers
- Diuretic Medicinal Chemistry
- Diuretics
- Glaucoma

Target modules:

1. Adrenergic Agonists (`built`, 100 question bank; Goodnotes reconciliation pending)
2. Adrenergic Antagonists (`built`, 100 question bank; Goodnotes reconciliation pending)
3. Adrenergic Medicinal Chemistry (`built`, 100 question bank; Goodnotes reconciliation pending)
4. Diuretic Pharmacology (`built`, 100 question bank; Goodnotes reconciliation pending)
5. Diuretic Medicinal Chemistry (`built`, 100 question bank; Goodnotes reconciliation pending)
6. Glaucoma Pharmacotherapy (`built`, 100 question bank; Goodnotes reconciliation pending)

#### Hypertension

Available documents:

- Antihypertensive Medicinal Chemistry
- CVS Review
- Hypertension Lecture Part I
- Hypertension Lecture Part II
- Hypertension 1
- Hypertension 2
- Hypertensive Emergencies and Severe Hypertension

Target modules:

1. Hypertension Foundations and Chronic Therapy (`built`, 100 question bank; Goodnotes reconciliation pending)
2. Resistant and Secondary Hypertension (`built`, 100 question bank; Goodnotes reconciliation pending)
3. Hypertensive Emergencies (`built`, 100 question bank; Goodnotes reconciliation pending)
4. Antihypertensive Medicinal Chemistry (`built`, 104 question bank; Goodnotes reconciliation pending)

### DAST III

#### Dyslipidemia

Available documents:

- Active Learning Dyslipidemia
- Dyslipidemia Therapeutics
- Intro Dyslipidemia Pharmacology
- Hyperlipidemia

Target modules:

1. Dyslipidemia Pathophysiology and Risk (`built`, 100 question bank; Goodnotes reconciliation pending)
2. Lipid-Lowering Pharmacology (`built`, 100 question bank; Goodnotes reconciliation pending)
3. Dyslipidemia Therapeutics (`built`, 100 question bank; Goodnotes reconciliation pending)

#### Coronary disease, acute coronary syndromes, and anticoagulation

Available documents:

- Acute Coronary Syndromes
- Anticoagulation Pharmacology
- CHD and ACS Pathophysiology
- CHD and ACS Pharmacology
- Coronary Heart Disease
- CHD and ACS Therapeutics
- Anticoagulant Medicinal Chemistry
- VTE: Direct Oral Anticoagulants
- VTE: Parenteral Anticoagulants
- VTE: Pulmonary Embolism
- VTE: Warfarin

Target modules:

1. Chronic Coronary Disease (`built`, 100 question bank; Goodnotes reconciliation pending)
2. Acute Coronary Syndromes (`built`, 100 question bank; Goodnotes reconciliation pending)
3. Antiplatelet Pharmacology (`built`, 100 question bank; Goodnotes reconciliation pending)
4. Coagulation and Anticoagulant Pharmacology (`built`, 100 question bank; Goodnotes reconciliation pending)
5. Venous Thromboembolism (`built`, 100 question bank; Goodnotes reconciliation pending)
6. Warfarin Management (`built`, 100 question bank; Goodnotes reconciliation pending)
7. Direct Oral Anticoagulants (`built`, 104 question bank; Goodnotes reconciliation pending)
8. Parenteral Anticoagulants (`built`, 112 question bank; Goodnotes reconciliation pending)

#### Arrhythmias

Available documents:

- Antiarrhythmic Pharmacology
- Arrhythmia Pathophysiology
- Atrial Arrhythmias
- ECG Interpretation
- Antiarrhythmic Medicinal Chemistry
- Ventricular Arrhythmias

Target modules:

1. ECG Interpretation
2. Arrhythmia Pathophysiology
3. Atrial Arrhythmias
4. Ventricular Arrhythmias
5. Antiarrhythmic Pharmacology and Medicinal Chemistry

#### Heart failure and peripheral arterial disease

Available documents:

- Acute Decompensated Heart Failure
- Acute Heart Failure
- Chronic Heart Failure chapter
- Acute Decompensated Heart Failure chapter
- Peripheral Arterial Disease chapter
- Chronic Heart Failure
- Heart Failure Pathophysiology
- Heart Failure Pharmacology
- Heart Failure Therapeutics
- Heart Failure Medicinal Chemistry
- Peripheral Arterial Disease lecture
- Peripheral Artery Disease

Target modules:

1. Heart Failure Pathophysiology
2. Chronic Heart Failure Pharmacotherapy
3. Acute Decompensated Heart Failure
4. Heart Failure Medicinal Chemistry
5. Peripheral Arterial Disease

#### Stroke and kidney disease

Available documents:

- Acute Ischemic Stroke
- Acute Kidney Injury
- Stroke chapter
- Acute Kidney Injury chapter
- Chronic Kidney Disease chapter
- CKD Secondary Complications chapter
- AKI notes
- CKD notes
- Stroke notes
- Renal Replacement Therapy
- Chronic Kidney Disease lecture

Target modules:

1. Acute Ischemic Stroke
2. Secondary Stroke Prevention
3. Acute Kidney Injury
4. Chronic Kidney Disease
5. CKD Complications
6. Renal Replacement Therapy

### DAST IV

#### Pulmonary and neuroendocrine

Available documents include allergic rhinitis, asthma, COPD, pulmonary arterial hypertension, cystic fibrosis, drug-induced pulmonary disease, pituitary and thyroid, and neuroendocrine notes.

Target modules:

1. Allergic Rhinitis
2. Asthma
3. Chronic Obstructive Pulmonary Disease
4. Pulmonary Arterial Hypertension
5. Cystic Fibrosis
6. Drug-Induced Pulmonary Disease
7. Pituitary Pharmacology

#### Diabetes and thyroid

Available documents include diabetes pharmacology and therapeutics, diabetes workshop cases, DKA and HHS, hyperglycemic emergencies, thyroid disorders, and thyroid medicinal chemistry.

Target modules:

1. Diabetes Pathophysiology and Monitoring
2. Noninsulin Diabetes Pharmacotherapy
3. Insulin Therapy
4. Diabetic Ketoacidosis
5. Hyperosmolar Hyperglycemic State
6. Thyroid Disorders
7. Thyroid Medicinal Chemistry

#### Adrenal and reproductive health

Available documents include adrenal disorders, Cushing syndrome, Addison disease, gonadal hormones, gynecologic disorders, infertility, pregnancy and lactation, reproductive-system pharmacology, and adrenal steroids.

Target modules:

1. Adrenal Pharmacology
2. Cushing Syndrome
3. Adrenal Insufficiency and Adrenal Crisis
4. Gonadal Hormones
5. Gynecologic Disorders
6. Infertility Pharmacotherapy
7. Pregnancy and Lactation Pharmacotherapy

#### Contraception, genitourinary care, and bone health

Available documents include contraception, osteoporosis, benign prostatic hyperplasia, erectile dysfunction, hormone therapy, incontinence, and genitourinary medicinal chemistry.

Target modules:

1. Contraception
2. Menopausal Hormone Therapy
3. Benign Prostatic Hyperplasia
4. Erectile Dysfunction
5. Urinary Incontinence
6. Osteoporosis
7. Genitourinary Medicinal Chemistry

### DAST V

Currently accessible documents:

- PUD, GERD, and IBS 2026
- DAST V syllabus

Target modules presently supported:

1. Gastroesophageal Reflux Disease
2. Peptic Ulcer Disease
3. Irritable Bowel Syndrome

## First production sequence

The first source-complete sequence will be built in this order:

1. Nutrition Assessment and Malnutrition
2. Fluid and Electrolyte Therapy
3. Acid-Base Interpretation
4. Enteral Nutrition
5. Parenteral Nutrition
6. Parenteral Nutrition Calculations

This order follows prerequisite relationships while keeping every topic in its own module.

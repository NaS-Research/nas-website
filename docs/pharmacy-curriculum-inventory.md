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
- Pediatric TPN
- TPN Calculations

Target modules:

1. Nutrition Screening, Assessment, and Malnutrition (`built`, 100 question bank)
2. Fluid and Electrolyte Therapy (`built`, 100 question bank)
3. Acid-Base Interpretation (`built`, 100 question bank)
4. Calcium and Phosphorus Homeostasis (`built`, 100 question bank)
5. Enteral Nutrition (`built`, 100 question bank)
6. Parenteral Nutrition
7. Parenteral Nutrition Calculations
8. Pediatric Parenteral Nutrition

#### Autonomic nervous system

Available documents:

- Intro: Autonomic Nervous System
- Cholinoceptor-Activating and Cholinesterase-Inhibiting Drugs
- Cholinoceptor Blockers and Cholinesterase Regenerators
- Cholinergic Agents Medicinal Chemistry
- Anticholinergic Medicinal Chemistry

Target modules:

1. Autonomic Nervous System Foundations
2. Cholinergic Agonists and Cholinesterase Inhibitors
3. Antimuscarinic Pharmacology
4. Cholinergic Medicinal Chemistry
5. Anticholinergic Medicinal Chemistry
6. Cholinergic Toxicology and Cholinesterase Regeneration

#### Adrenergic, diuretic, and ocular pharmacology

Available documents:

- Adrenergic Agonist and Antagonist Medicinal Chemistry
- Adrenoceptor Activating Drugs
- Adrenoceptor Blockers
- Diuretic Medicinal Chemistry
- Diuretics
- Glaucoma

Target modules:

1. Adrenergic Agonists
2. Adrenergic Antagonists
3. Adrenergic Medicinal Chemistry
4. Diuretic Pharmacology
5. Diuretic Medicinal Chemistry
6. Glaucoma Pharmacotherapy

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

1. Hypertension Foundations and Chronic Therapy
2. Resistant and Secondary Hypertension
3. Hypertensive Emergencies
4. Antihypertensive Medicinal Chemistry

### DAST III

#### Dyslipidemia

Available documents:

- Active Learning Dyslipidemia
- Dyslipidemia Therapeutics
- Intro Dyslipidemia Pharmacology
- Hyperlipidemia

Target modules:

1. Dyslipidemia Pathophysiology and Risk
2. Lipid-Lowering Pharmacology
3. Dyslipidemia Therapeutics

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

1. Chronic Coronary Disease
2. Acute Coronary Syndromes
3. Antiplatelet Pharmacology
4. Coagulation and Anticoagulant Pharmacology
5. Venous Thromboembolism
6. Warfarin Management
7. Direct Oral Anticoagulants
8. Parenteral Anticoagulants

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

# Adrenal pharmacology and systemic corticosteroid audit

Status: verified locally for the adrenal-pharmacology module. Started September 24, 2026 after psoriasis commit89728ba. No deployment. Push authorization remains unresolved as documented in README.

## Book scope and initial findings

Read private book text printed634-637/PDF642-645: systemic steroid introduction, HPA/Cushing diagram text, adverse-effect annotations, equivalence table and conversion example, systemic-drug precautions, tapering discussion, Medrol pack schedule, and autoimmune overview. Page images still require direct inspection; OCR is insufficient for visual/table verification. PDF641 is a divider, not the start of the clinical text.

Mapped systemic pharmacology to adrenal-pharmacology, with adrenal-insufficiency and cushing-syndrome as related modules. Autoimmune overview and diagnostic-test claims still need separate reconciliation. The book's greater-than14-day mandatory taper rule and generic percentage taper must not replace individualized current guidance. Its phrase that joint injections stay local overstates isolation from systemic effects. Steroid-withdrawal adrenal crisis must be distinguished from primary Addison disease. Its unqualified NSAID-versus-steroid safety comparison and blanket infection/vaccine contraindication wording need indication-specific reconciliation.

## Current guideline and first correction

Read the Endocrine Society/ESE2024 recommendation summary in full, including tapering, testing, nonoral exposure, fludrocortisone and stress coverage: https://www.endocrine.org/clinical-practice-guidelines/glucocorticoid-induced-adrenal-insufficiency . Existing exposure-safety correctly distinguishes short courses under3-4weeks and cumulative nonoral exposure. Added when to assess recovery, the distinction from primary adrenal insufficiency, no fludrocortisone for steroid-induced insufficiency, and oral-versus-parenteral stress/crisis response. Detailed assay/timing thresholds, individual labels, vaccine rules, bone prevention, remaining physiology/chemistry lessons, question bank and all visuals remain unverified.

Read dose-equivalence and exposure-safety lessons fully. Earlier broad output truncated some preceding lessons; those are not claimed reviewed. Independently checked the existing original example32mg methylprednisolone x5/4 =40mg prednisone daily. Full numerical/table reconciliation remains pending.

## Vaccine threshold reconciliation

Read CDC corticosteroid and non-live vaccine sections. Added dose, duration and post-treatment timing; distinguished vaccine eligibility from endocrine tapering. Did not import outdated product schedules elsewhere on that page. Reference added to learner module. Assessment generator inspection found four variants per concept with unrelated concept alternatives; full assessment-quality review remains pending.

## Medrol pack reconciliation

Read the November2025 Medrol dose-pack instructions and infection warnings. Added missing pack counseling and an original total-dose calculation. Independently verified6+5+4+3+2+1=21tablets and21x4=84mg. Label-specific infection precautions still need full integration; the historical generic bank remains under review.

Structural check after the new case:129questions, no hard errors or source-link gaps. This does not validate the clinical correctness or distractor quality of the128legacy generated items.

## Infection, interactions and conflicting label language

Read Medrol interaction, precaution and exposure-counseling sections. Added targeted infection review and interaction monitoring. Its secondary-insufficiency mineralocorticoid advice conflicts with the2024 joint guideline; retained the guideline's recommendation against fludrocortisone for glucocorticoid-induced insufficiency. Added an original case testing this distinction. Do not generalize it to primary adrenal disease.

Read all twelve AdrenalPharmacologyVisual source definitions and renderer. The safety figure is appropriately general; detailed source verification for physiology and chemistry diagrams remains pending. Source reading does not establish rendered visual QA.

Structural check after the second original case:130questions, no hard errors or source-link gaps. The128legacy items and module-wide verification remain open.

## Direct book-page inspection and equivalence limits

Rendered and visually read all four book pages printed634-637/PDF642-645, including the chapter index, HPA figure, adverse-effect illustration, full equivalence table, conversion setup and dose-pack panel. Private PNGs are at `/private/tmp/rxprep-steroids-0642.png` through0645. No book images are public assets. Confirmed table values and the distinction between the systemic-steroid and autoimmune-overview subsections. Independently checked the printed conversion arithmetic; the existing NaS example remains original.

Read Celestone Soluspan's full comparison table and adjacent route disclaimer, plus labeled administration routes and systemic absorption after joint injection. Added missing triamcinolone equivalence and source-attributed betamethasone variation (book0.6mg versus label0.75mg). Did not infer IV authorization for this suspension from a generic oral/IV comparison table. Endotext table access encountered a browser-check page; search snippets were not treated as a completed read. Detailed product review remains open.

## Foundational reading and reference identity

Read the first four complete lessons (HPA control, cortical zones, steroidogenesis and glucocorticoid receptor), including summaries and checks, and the first two mineralocorticoid-receptor teaching sections. The latter lesson still needs its final section read. Direct NCBI requests returned browser checks. Publisher-hosted ACTH chapter and its MRAP/MC2R passages were accessible; those passages support the retained receptor-dependence claim. Added publisher link as an alternative, without claiming the entire18-page chapter was reviewed.

Confirmed NBK278953 is titled Congenital Adrenal Hyperplasia, not adrenal steroidogenesis; corrected its learner-facing label. The chapter may support pathway teaching, but full passage reconciliation remains open. Replaced unrelated thyroid/implausible organ distractors in the HPA and glucocorticoid-receptor embedded checks with relevant mechanistic misconceptions. Correct answers and explanations are unchanged. Broader source verification and all remaining assessment review continue.

## Mineralocorticoid antagonists and remaining lesson reading

Read the remainder of mineralocorticoid-receptor and all SAR, glucocorticoid-family, activation-disposition, formulation-chemistry and mineralocorticoid-antagonist lessons, including embedded checks. This completes initial reading of all12lesson texts; detailed source reconciliation remains incomplete.

Read Aldactone contraindications and potassium/renal monitoring, and Inspra sections2.3-2.4 and4. Added actionable monitoring and product/indication-specific exclusions with primary-source links. Distinguish label eligibility from stricter heart-failure guideline initiation criteria; no claim that potassium5.5is a universal acceptable initiation value. Full MRA dosing, chemistry verification, cross-module reconciliation and assessment/visual validation remain pending.

## Assessment revision: first twelve concepts

Read the first12concept records and all four legacy question dimensions. Legacy alternatives were drawn from unrelated concepts, so correctness often depended on topic matching. Replaced their48generated items with12applied cases and individually written misconception alternatives; retained the existing case explanations and rotated correct-choice positions. Coverage includes HPA feedback/timing/receptor, three cortical zones, cholesterol entry and enzymes, and glucocorticoid receptor effects. Twenty remaining concepts still use the legacy generator. The two independent new safety/calculation cases are preserved. Bank now94items. This is assessment-quality progress, not completion of source verification for these lessons.

## Assessment revision: remaining twenty concepts

Read all remaining concept records and replaced their80generated variants with20focused cases and individually authored distractors. Removed the unrelated-concept offset generator entirely. Bank now34items:32retained concept cases plus the two new calculation/safety cases. Retained case explanations and distributed answer positions; clarified the short-course scenario as an isolated exposure without prior prolonged or concurrent glucocorticoid use. The guideline summary was re-read for the short-course and cumulative-exposure distinctions.

Independently checked conversion answers:32x5/4=40mg prednisone;3x5/0.75=20mg prednisone. Incorrect numerical alternatives explicitly represent reversed ratios or confusion with hydrocortisone. Structural check:34questions, no hard errors or source-link gaps; all12lessons represented with2-3cases each. Size and lesson-count advisories remain coverage-review prompts, not grounds to pad the bank. git diff --check passed. The newly authored distractors have been read for answer exclusivity against the retained concept claims; detailed primary-source reconciliation of those underlying claims remains open, especially chemistry/SAR. No module-wide verification, rendered QA, build, commit or deployment is claimed for adrenal pharmacology.

## Injectable formulation safety reconciliation

Read Solu-Medrol description, labeled strength basis, clinical pharmacology and contraindication/route-warning passages: https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=cd99be87-c8d9-48d6-a8e5-e081052e3f19 . Read Depo-Medrol description, route restrictions and neurologic warnings: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9a7b3837-e038-48bf-97e9-78ad463760dc (updated January21,2026; label revised November2025). Added product-specific IV distinction, intrathecal contraindication/epidural approval boundary, and presentation-specific excipient review. Clarified that Solu-Medrol's labeled amount already represents methylprednisolone equivalent; a general noninterchangeability warning must not imply an additional molecular-weight correction. Added original wrong-product/wrong-route case. Bank35items.

Search results identified triamcinolone-acetonide and budesonide chemical-description sources, but full cyclic-acetal claim verification remains pending. Do not count search snippets as completed source reconciliation. SAR, remaining physiology, assessment coverage and rendered/application QA remain open.

## Cyclic-acetal identity and inhaled disposition

Read budesonide label sections11,12.1 and12.3 and triamcinolone-acetonide description/clinical pharmacology. Sources added to the module: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9656442-4587-4867-9a8c-5f5b0402936e and https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1680315d-dcdc-407a-b8e8-8710587197d2 . Clarified acetone-derived triamcinolone acetonide versus butyraldehyde-derived budesonide; acetal modification is not synonymous with prodrug activation. Specified active parent budesonide versus much less active hepatic metabolites. Replaced the figure's broad acetonide persistence assertion with chemical-identity/formulation teaching. Added a focused identity case, bringing the bank to36items, and replaced implausible embedded distractors in the disposition/formulation lessons. Separated the swallowed first-pass contribution from pulmonary absorption. No source claim that cyclic-acetal chemistry alone establishes a particular clinical duration or interchangeable dose is retained. Detailed SAR and remaining receptor/pathway reconciliation, coverage review and rendered QA remain pending.

## Receptor, SAR and binding source pass

Read publisher Endotext PDF introduction, molecular mechanism and synthetic-glucocorticoid sections through the protein-binding/prednisone activation discussion (PDFpages2-5, text lines39-149): https://www.endotext.org/wp-content/uploads/pdfs/glucocorticoid-therapy-and-adrenal-suppression.pdf . This is a2018mechanistic reference, not the governing current taper guideline. Supports retained GR chaperone/nuclear/GRE/network mechanisms, 11-beta-HSD directionality, prednisolone unsaturation, fluorination and C16-methyl distinctions, and prednisone activation. Added rapid non-genomic effects to avoid implying every steroid effect requires transcription. Refined binding to distinguish cortisol/prednisolone CBG affinity from predominantly albumin-bound synthetic agents. Refined C16 SAR: alpha-methyl dexamethasone versus beta-methyl betamethasone, with intermediate-acting triamcinolone distinguished from a blanket long-action rule. Updated the SAR figure's cue accordingly. The primary structural paper PMC4042175 hit a browser check and is not counted as read. Whole module remains reviewing; transport physiology, remaining scaffold claims and application/visual QA are not yet fully reconciled.

## Bone-risk prevention

Read the ACR2022 GIOP summary (July2023 update), including adult assessment and treatment recommendations. Added a concise prevention paragraph, source link and original case. Bank37items. Detailed osteoporosis treatment remains for the related module audit; no blanket drug-selection rule added.

## ACTH signal and zone reconciliation

Read ACTH publisher chapter passages on CRH/AVP, negative feedback, cortical zones, Gs/cAMP/PKA, cholesterol delivery and MC2R/MRAP (PDFpages2-6). Added the missing surface-receptor-to-steroidogenesis connection and improved the StAR embedded alternatives. Retained the basic zone/regulator mapping. Noted an apparent source error: PDFpage5 describes final conversion of11-deoxycortisol with hydroxylation at21; NaS correctly assigns cortisol completion to11-beta-hydroxylase/CYP11B1. Do not copy this erroneous step. Further independent pathway verification remains pending; source authority alone does not validate every sentence.

Independently checked the final cortisol enzyme against MedlinePlus Genetics CYP11B1 Normal Function: https://medlineplus.gov/download/genetics/gene/cyp11b1.pdf (page1). It confirms11-beta-hydroxylase converts11-deoxycortisol to cortisol; retained the correct NaS step. UniProt full entry was inaccessible and was not counted as read. Current37-item structural check reports no hard errors or source gaps; git diff --check passes. Neither establishes complete clinical or rendered verification.

## Fludrocortisone and mineralocorticoid transport

Read the existing linked fludrocortisone label: pharmacology, warnings, monitoring, interactions, adverse effects and dosing. It supports retained renal sodium retention and potassium/hydrogen secretion teaching. Added potassium-wasting-drug/digoxin interaction teaching and an original case; bank38items. Read primary-adrenal-insufficiency guideline recommendations3.1-3.10 and distinguished indication-specific monitoring and salt advice from broad label language. Do not import the label's blanket vaccination language or ambiguous secondary-insufficiency wording over the already reviewed CDC and2024 endocrine guidance. Both references were already present. Remaining pathway, antagonist structure, cross-module consistency and visual/application checks stay open.

## Steroidogenesis diagram and precursor check

Read the January20,2026 publisher CAH chapter's biosynthesis, zone and regulation passages (PDFpages4-9). Visually inspected Figure1 on PDFpage4 after downloading to `/private/tmp/adrenal-cah-source.pdf` and rendering `/private/tmp/adrenal-cah-pathway.png`; web screenshots were not visible, so they were not treated as visual inspection. No source figure copied into NaS. Added the accessible publisher reference and clarified precursor names in the cortisol/aldosterone/DHEA branches. Corrected the NaS pathway figure's overly broad hydroxylation wording to include CYP17A1 lyase activity. This verifies these branch relationships, not the entire40-pageCAH chapter or its separate disease modules.

## Antagonist structure, disposition and interactions

Read Inspra sections2.1-2.4,11,12.1 and12.3; Aldactone sections7,8.1,11 and12.1-12.3. Clarified structural distinctions, absence of identified active eplerenone metabolites, indication-specific moderate-CYP3A dose limits, spironolactone meal consistency, digoxin-assay interference, lithium, mitotane, abiraterone and pregnancy precautions. Labels support mechanism/metabolite claims; chemical descriptions alone do not prove causal attribution of selectivity to one substituent, so the lesson now states that limit. No pediatric, pregnancy or disease-specific dosing regimen inferred from the general comparison.

Remaining closure work: final integrated reading of all revised lessons/checks and38cases; assess coverage of newly added safety points; resolve any unsupported scaffold/ester-hydrolysis claim; check relevant overlaps with adrenal-insufficiency/cushing/osteoporosis and other steroid lessons; inspect all12figures and learner flows on desktop/mobile; run final build; update statuses only after those checks. Earlier pending notes are historical and are superseded only where subsequent source-specific entries document actual review.

## Cross-module recovery-testing context

Targeted overlap review found compatible taper/mineralocorticoid guidance in adrenal-insufficiency and compatible GIOP assessment in osteoporosis. Cushing exposure-history passages also align; broad search output truncated, so no full-module review claimed. Read2024 joint guideline R2.7 and rationale. Added sampling context and approximate thresholds to adrenal pharmacology; corrected the related adrenal-insufficiency recovery paragraph's missing hold context. That companion module remains unverified.

## Diagram repair and safety assessment expansion

The first rendered inspection found unsupported `chol-visual__flow` and `chol-visual__node` class names: text ran together. Replaced them with the existing visual grid styles plus a scoped CSS module (three desktop columns, one mobile column, more legible body text). Corrected the MRA figure wording so CYP3A metabolism is not presented as the cause of receptor selectivity. All 12 embedded lesson checks and review anchors worked at 1440x1000 and 390x844; both routes returned 200 with no page errors or horizontal overflow. Captured 24 figure screenshots, but complete individual visual inspection is still pending. Floating controls appear in some screenshots; a separate word-center scrolling check found all 2,825 lesson/figure words readable at both sizes. This is an interaction check, not a complete visual design approval.

Added four focused cases on CDC live-vaccine timing, possible adrenal crisis with vomiting/hypotension, and eplerenone monitoring/indication-specific exclusions. Re-read the relevant current CDC, 2024 joint endocrine guideline and June 2025 Inspra label sections. Bank now has 42 cases; structural audit has no hard errors or source gaps. Practice QA answered ten sampled cases correctly and verified fresh attempts/reset at both sizes. This validates scoring mechanics, not every clinical answer.

## Ester activation clarification

Read the abstract of the primary human phosphate/hemisuccinate comparison (PMID3072558) and the publisher abstract of He et al., Cell Research 2014 (doi:10.1038/cr.2014.52). Added source links. Clarified that soluble prodrugs can differ in conversion rate/completeness, and that an ester need not be an inactive prodrug: mometasone furoate itself binds GR. Corrected the general depot paragraph, figure and bank metadata accordingly. Full study texts were not available in these reads; PMC browser check and other failed accesses are not counted as read. Core scaffold-contact verification remains open.

## Final integrated content and visual review

Re-read the current lesson text, all 32 concept cases with their bespoke distractors, and all 10 added cases. Rechecked the methylprednisolone-to-prednisone, dexamethasone-to-prednisone and Dosepak totals using exact rational arithmetic. The 42 questions cover every lesson; lower counts in foundational lessons reflect distinct learning objectives rather than a requirement to manufacture repetitive questions. Additional safety cases assess route selection, active-parent identity, bone prevention, fludrocortisone/potassium, vaccine timing, crisis recognition and MRA monitoring.

Read the accessible PLOS primary study introduction, structural-model results and discussion (doi:10.1371/journal.pone.0164628) to reconcile scaffold-recognition wording. The study uses porcine receptor experiments and structural comparisons; no human treatment effects or dose predictions are inferred. Clarified C17 substituents versus the side chain extending to C21 and retained the overall scaffold/oxygenation teaching. Earlier inaccessible full-text sources remain excluded from claims of complete reading.

Individually inspected all 12 figures at both desktop and mobile sizes. Re-captured formulation and dose-equivalence figures after the last text changes; inspected all four final images. Added missing mg units in the conversion figure. The responsive grid has no text collisions or horizontal clipping. Some fixed tool controls overlap the lower part of viewport captures; the separate scrolling hit-test confirms the underlying words can be brought into a readable position. No claim is made that a static screenshot shows the whole figure unobstructed at every scroll position.

All embedded checks/review anchors pass on both sizes. Practice scoring and fresh-attempt reset pass on both sizes. Final structural audit reports 42 questions, no hard errors and no source gaps. A production webpack build passed before the final units-only correction; the final post-correction build also passed (exit 0).

Cross-module scope: the adrenal-insufficiency recovery-sampling correction is included as a targeted consistency fix only. Full adrenal-insufficiency and Cushing module reviews, the chapter autoimmune overview and the rest of the curriculum remain open. This report does not certify those modules or the complete chapter.

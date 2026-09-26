# Chapter 38: eyes, ears, and glaucoma review

Review date: 2026-09-25. Status: in progress, not module completion.

## Scope and source handling

The intended 2023 RxPrep edition uses printed pages 540–545, PDF pages 548–553. Text extraction is private under /private/tmp. The printed page 542 drug table was rendered and visually inspected to confirm column alignment. The chapter is mapped to common-eye-conditions, common-ear-conditions, and glaucoma-pharmacotherapy. Mapping does not establish clinical verification. Other page images, product rows, figures, checks, and assessment banks still require full reconciliation.

## Confirmed discrepancy: surgical carbachol

The printed page 542 cholinergic table pairs the Miostat brand with a repeated topical-drop schedule. The current available DailyMed Miostat label instead specifies carbachol 0.01% for intraocular surgical use. This is a product/route mismatch, not an instruction to carry into the curriculum.

Primary source read: DailyMed Miostat label, set ID f28d7a56-e079-4a8b-ad81-9a97c780de67, version 12, effective 2023-02-10. Description, indications, warnings, dosage, and packaging inspected on the review date:
https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=f28d7a56-e079-4a8b-ad81-9a97c780de67

Original content added to glaucoma-pharmacotherapy / conventional-outflow-and-procedures: a product-specific route boundary and a direction to clarify a conflicting outpatient order. An original assessment case checks the same dispensing decision; its keyed response and rationale were read against the label. Existing curriculum did not contain the textbook's incorrect Miostat schedule; this addition closes a coverage gap and prevents importing the source error. No procedural dosing instructions or new numerical calculations were introduced.

## Validation and limits

Module import passed: six lessons, 113 uniquely identified questions, valid answer indexes and lesson links. This is structural evidence only; the 112 existing questions are not newly clinically verified by this check. New case reviewed individually. The remaining glaucoma lessons, visual content, clinical recommendations and product details are not complete, so no module-completion commit or push is warranted yet. No deployment.

## Remaining chapter work

- Reconcile glaucoma drug formulations, doses, contraindications, storage, combinations, procedures and triggers with primary sources.
- Verify eye-route versus ear-route substitution boundaries, drop-size assumptions and product-specific administration instructions.
- Review conjunctivitis diagnosis/treatment, school return, chemical exposure, steroid combinations, allergic eye disease, blepharitis and dry eye.
- Check ocular steroid/NSAID indications and route, redness agents, and medication-associated eye injury, including irreversible harm.
- Review tinnitus, external ear infection products and tympanic-membrane restrictions, cerumen self-care limits, and referral criteria.
- Read all related existing assessment content and figures, correct inconsistencies, then validate each complete module before committing and pushing to the audit branch.

Local visual validation: the changed paragraph was rendered in the isolated preview on port 3136 at 1440 × 1000 and 390 × 844, and both screenshots were inspected. Text is legible, wraps within the content area, and the active contents marker matches the outflow lesson. Private captures: /private/tmp/glaucoma-miostat-desktop.png and /private/tmp/glaucoma-miostat-mobile.png. This check covers the added paragraph, not every existing lesson or the randomized assessment experience.

## Product reconciliation: Rhopressa and Xalatan

See glaucoma-product-review.json for exact primary sources, versions, sections, arithmetic and assessment scope. Added the post-book Rhopressa corneal-edema warning and its current conditional storage instructions; the chapter's generic six-week room-temperature instruction is incomplete for bottles kept refrigerated under the current label. Added Xalatan-specific administration, storage, active herpes/inflammation restrictions and macular-risk detail. Preserved the discussion of additional netarsudil mechanisms with the limitations of the small human mechanistic study made explicit.

Corrected the universal 0.05 mL/drop assumption with an original Xalatan calculation. Four Decimal checks independently confirmed the concentration conversion and volume arithmetic. No exact days-supply claim is derived from the approximate label drop amount.

The four netarsudil concept questions were clinically read and reconciled. Desktop and mobile assessment runs each encountered all four and the earlier Miostat case, validating shuffled answer mapping, explanations and review links. Other sampled questions were checked against their data for UI behavior only, not clinically certified. The generated bank still requires a complete review of every question and distractor.

Visual follow-up: inspected desktop/mobile captures of the Xalatan regimen, netarsudil warning/mechanistic explanation, and drop-volume example. Private captures are /private/tmp/glaucoma-{xalatan,rhopressa,drop-volume}-{desktop,mobile}.png. Screenshots show readable wrapping; the mobile captures do not include the entire lower storage paragraph, so they are not evidence that every paragraph has been individually visually inspected. Full lesson and module review remains open.

## Production-suppressor review: timolol and dorzolamide

Added Timoptic-XE-specific preparation, dose and sequencing instructions, explicit systemic contraindications and selected interactions/precautions. Added dorzolamide dose, severe renal impairment threshold, oral CAI combination boundary, and corneal/allergy precautions. These were gaps in a previously generic lesson, not changes in the fundamental mechanisms. Exact source versions and scope are in glaucoma-production-review.json.

Reading all choices for questions 037–040 and 045–048 exposed overlapping reasonable clinical actions in generic prompts. Replaced those eight with original specific cases and explanations, and added two formulation/renal cases. All ten were clinically reviewed against the cited primary labels and encountered in final desktop and mobile assessment runs. Browser scoring, explanations and review links passed; no page errors or horizontal overflow. Desktop/mobile text captures were inspected for the new product passages. The 115-question module remains under review; these targeted checks do not establish whole-bank or whole-module accuracy.

## Alpha agonists and redness-product distinction

Added Alphagan P dosing, pediatric, interaction and lactation restrictions from its September 2025 label. Added previously missing apraclonidine 0.5% short-term adjunctive therapy, tolerance, MAOI contraindication and discontinuation/follow-up boundaries from the Sandoz label. The 1% peri-laser product remains a separate open item. Replaced four generic brimonidine questions with original cases and added three apraclonidine/Lumify cases; all seven were clinically read against primary labels and tested in desktop/mobile randomized assessments.

Lumify's March 2026 multidose Drug Facts specifies age five and older and a ten-minute contact-lens reinsertion interval. Added that product-specific information to common-eye-conditions and a non-substitution explanation to glaucoma-pharmacotherapy. This also illustrates why the book's general fifteen-minute lens interval should not be universalized. The preservative-free formulation is not yet reconciled. Complete new paragraph rows for Alphagan P, apraclonidine and common-eye Lumify were visually checked at desktop and mobile sizes. Exact evidence, source versions, scope limits and hashes are in glaucoma-alpha-review.json. No complete module or deployment claim.

## Fixed-combination product review

Added product-specific ingredients and schedules for Cosopt PF, Combigan and Simbrinza, duplicate-timolol reconciliation, and single-dose disposal counseling. All three original cases were read against the labels and encountered in desktop/mobile assessment runs. Six complete paragraph-row captures were inspected and were legible. See glaucoma-combination-review.json for exact scope; the remaining label sections and other combinations are still open. No module completion.

## Pilocarpine review

Read the current Somerset 1%, 2%, 4% label and all four generated pilocarpine cases. The mechanism item is consistent; three prompts had overlapping reasonable distractors and were replaced with specific original cases. Added missing product precautions and instructions. Source version, exact scope, validation and unresolved acute-angle-closure work are recorded in glaucoma-pilocarpine-review.json. The source still uses an old pregnancy category; that category was not imported into teaching. The overall module remains reviewing.

## Mechanism-specific angle-closure emergency lesson

Expanded glaucoma from six to seven lessons to give urgent recognition and medication-triggered angle closure a distinct teaching sequence. Added original comparison, embedded check and four rewritten cases. Current Topamax label and University of Iowa clinical cases support the topiramate mechanism and treatment distinction; the book’s broad surgery-oriented wording must not be applied to pure drug-associated effusion. See glaucoma-angle-closure-review.json for source scope, evidence limits and validation. NICE fetch failures do not block independent label work; the first-line treatment guideline review remains pending rather than being inferred from search snippets. No completed module or deployment.

## Four additional prostaglandin products

Expanded Vyzulta, Zioptan, Travatan Z and Lumigan with product-specific administration, storage, preservative and pediatric distinctions. Added four original handling cases. Full paragraph rows were visually reviewed on desktop/mobile. Source revisions, numerical checks, test scope and remaining Xelpros/Rocklatan/Latisse work are in glaucoma-prostaglandin-products-review.json. These additions expand abbreviated book coverage; no claim that every product-label section or original question is now verified.

### 2026-09-25: Xelpros, Rocklatan and Latisse
Added formulation-specific storage, duplicate ingredients and supervised eyelash-treatment counseling, with three original assessment cases. Current Latisse labeling qualifies the blanket prohibition on printed pages 541 and 545. See `glaucoma-xelpros-rocklatan-latisse-review.json`. Whole module remains reviewing; not ready for completion commit.

### 2026-09-25: Disease categories and treatment pathways
Added normal-tension and asymptomatic chronic angle-closure teaching, plus NICE-attributed initial SLT and advanced surgery pathways with three original questions. Full NICE pages remain inaccessible via web retrieval; exact accessible indexed-source scope is recorded in `glaucoma-foundations-pathway-review.json`. This is partial review, not full guideline reconciliation or module completion.

### 2026-09-25: Original prostaglandin assessment audit
Read all twelve original questions 025–036 and all choices, keys, explanations and links. Replaced six broad prompts and corrected the mechanism explanation in 025; retained five after review. See `glaucoma-prostaglandin-assessment-review.json`. Total bank remains 131 questions. Other question ranges and full module remain incomplete.

### 2026-09-25: Standalone brinzolamide
Read the Azopt prescribing text and added two original counseling paragraphs and one original question. Documented exact administration rather than importing Simbrinza directions. See `glaucoma-brinzolamide-review.json`. Module remains reviewing.

### 2026-09-25: Oral carbonic anhydrase inhibitors
Added acetazolamide formulation dosing, systemic restrictions, labs, interactions and effusion warning; added methazolamide comparison. Three original assessment cases. Source scope and incomplete acute protocol recorded in `glaucoma-oral-cai-review.json`; whole module remains reviewing.

### 2026-09-26: Apraclonidine 1%
Read the current US label and added procedural use, container handling, preservative distinction and updated warnings, plus one original question. See `glaucoma-iopidine-review.json`. Whole module remains reviewing.

### 2026-09-26: Betoptic S
Read the US label, qualified beta-1 selectivity, and added exact suspension instructions plus one original question. See `glaucoma-betaxolol-review.json`. Corrected oral-CAI ledger: methazolamide is listed on book page 542. Module remains reviewing.

### 2026-09-26 — beta-blocker solution distinctions

Added separate betaxolol 0.5% solution, carteolol 1%, and levobunolol 0.5% paragraphs with linked labels, formulation-specific dosing/storage and safety qualifications. Added and clinically reviewed an original carteolol asthma assessment case. Desktop/mobile paragraph screenshots and case behavior checked; details and remaining label scope in `glaucoma-beta-solutions-review.json`. Glaucoma remains reviewing with 138 questions; no module completion or publication claim.

### 2026-09-26 — assessment ambiguity correction

Read actual questions 001–024. Replaced 013–016 because multiple choices described reasonable care or the same mechanism. New questions distinguish principal outflow effect, excess dosing, aphakia risk and persistent iris pigment. Current Xalatan label sections 2, 5.1, 5.4 and 12.1 checked. All four cases passed desktop/mobile UI checks; bank remains 138 questions. See `glaucoma-outflow-assessment-review.json` for exact scope; other foundation questions are not yet verified.

### 2026-09-26 — target pressure and disc interpretation

Retrieved official EGS sixth edition privately and read selected text pages documented in `glaucoma-target-disc-review.json`. Qualified target-pressure escalation by confirmed progression, rate and lifetime visual risk. Added disc-size/OCT/CCT interpretation. Reviewed 017–024, rewrote 018/021/024 and retained five. Updated embedded-check explanation. Desktop/mobile paragraph and assessment checks passed. Whole-module review remains open; no completion commit or publication.

### 2026-09-26 — aqueous-flow questions and dose consistency

Reviewed questions 001–012; retained four and rewrote eight to remove broad or overlapping answers. Clinically checked flow-map text. Corrected the administration paragraph/diagram so general one-drop advice does not override product-specific one-to-two-drop orders. Desktop/mobile assessment and complete diagram captures verified; see `glaucoma-flow-review.json`. The module remains reviewing.

### 2026-09-26 — punctal occlusion and netarsudil assessment

Reviewed all parts of 049–056; retained two, rewrote five, corrected one mechanism explanation. Current Rhopressa label checked for dosing, epithelial edema, verticillata and presumed mechanism. EGS punctal-occlusion recommendation checked separately from its population advice. Desktop/mobile assessment checks passed; exact scope in `glaucoma-rock-technique-assessment-review.json`. Read 061–072 next, with source reconciliation still pending.

### 2026-09-26 — laser and surgical assessment

Reviewed 061–072; rewrote seven and retained five. Expanded laser follow-up, clarified initial surgery for selected advanced disease and distinguished procedural goals. EGS source scope and desktop/mobile evidence in `glaucoma-laser-assessment-review.json`. Read 073–084 next; their source reconciliation and corrections remain pending. Module still reviewing.

### 2026-09-26 — treatment selection and delivery

Reviewed 073–084, rewrote eight and retained four. Corrected repeated automatic-escalation wording in the lesson/key point and generated concept. EGS adherence section read, Combigan ingredients/systemic warnings rechecked. Desktop/mobile cases and revised paragraph verified. Details in `glaucoma-selection-assessment-review.json`; 085–108 and remaining clinical/visual scope stay open.

### 2026-09-26 — remaining original assessment range

Reviewed all 085–108, rewrote six and retained 18 with source reconciliation. Corrected remaining one-drop-only key point and concept label. All 24 cases passed desktop/mobile rendering, answer mapping, scoring, explanation and link checks. See `glaucoma-final-original-assessment-review.json`. Original ranges now have review records across the partial documents, but the entire bank still needs consolidation and final consistency review; remaining labels, clinical coverage and figures keep the module incomplete.

### 2026-09-26 — levobunolol label gap closed

Read remaining precautions, interactions, population and adverse-event text. Added contact-lens interval, interaction and population qualifications; desktop/mobile paragraph inspected. Updated `glaucoma-beta-solutions-review.json` with exact scope and next timolol solution source. Timolol solution-specific dispensing-device instructions differ from generic technique; its review remains pending. Module not complete.

### 2026-09-26 — Sandoz timolol solution

Read full prescribing/IFU text and added exact solution dosing, response assessment, dispenser operation, spacing, lenses and storage. Independently checked base concentrations. Desktop/mobile paragraph captures inspected; source scope and remaining variants in `glaucoma-timolol-solution-review.json`. Module remains incomplete.

### 2026-09-26 — timolol formulation differences

Read the full prescribing text for Bausch + Lomb once-daily solution and Ingenus preservative-free vials. Added separate dosing, handling and storage instructions and source references. Recorded the Ingenus structured strength-table discrepancy against its explicit base/salt description. Syntax passed; all four desktop/mobile paragraph captures inspected without clipping or overflow. See `glaucoma-timolol-variants-review.json`. Glaucoma remains incomplete; no completion commit or deployment.

### 2026-09-26 — combination-label follow-up

Added interaction screening, renal/corneal precautions, current Combigan lactation warning, Cosopt PF 15-day pouch limit and separate product storage/contact-lens counseling. Read remaining prescribing sections of the three labels with scope recorded in `glaucoma-combination-review.json`; source discrepancies include timolol milk-excretion wording and suspension appearance. Syntax and ten desktop/mobile paragraph captures checked. Whole-module review remains incomplete; no completion commit or deployment.

### 2026-09-26 — remaining four figures

Reviewed prostaglandin, production, outflow and selection panels. Corrected brimonidine dual mechanism and initial-treatment/reassessment framing for laser/surgery. Inspected all eight desktop/mobile figure captures; no clipping or overflow. Evidence and exact scope in `glaucoma-remaining-figures-review.json`. Whole-module verification remains pending.

### 2026-09-26 — acute angle-closure sequence

Expanded emergency lesson with pressure reduction, pressure-dependent pilocarpine timing, cycloplegic exceptions, hyperosmotic safety and definitive/fellow-eye care. Explicitly attributed differing EGS and ICU Medical mannitol doses. Five added rows inspected at desktop/mobile; syntax passed. Exact read scope, remaining acetazolamide/allergy and mannitol gaps in `glaucoma-acute-protocol-review.json`. No module completion claim.

### 2026-09-26 — mannitol calculation and source completion

Read remaining mannitol prescribing sections12–17. Added original 60-kg dose/20% concentration example and assessment case; Python Decimal independently confirms90g and450mL. Question scoring, explanation and lesson link passed desktop/mobile; paragraph captures inspected. Bank now139 questions. Source package images were not inspected; whole-module remains incomplete.

### 2026-09-26 — preserved Cosopt

Read complete Théa preserved Cosopt prescribing and patient/IFU text. Added bottle-specific storage, spacing, contact-lens and preservative distinctions from PF; documented older-label differences and pediatric leaflet discrepancy. Syntax and desktop/mobile paragraph review passed. Updated `glaucoma-combination-review.json`; module remains in review.

### 2026-09-26 — acetazolamide follow-up validation

Inspected all six desktop/mobile captures of the allergy, acute-order and reconstitution-deadline corrections; text is legible without clipping. Recorded exact validation scope and module hash in `glaucoma-acetazolamide-followup-review.json`. Cross-linked acute and oral CAI records. Read the remaining ER label dose, storage and packaging text; confirmed 500 mg twice daily and 20–25 C storage in well-closed containers. The label supplies no numerical renal-adjustment schedule; renal and population synthesis remain open. This closes the specific source/render gaps, not whole-module verification. No completion commit or deployment.

### 2026-09-26 — prostaglandin population-label follow-up

Read remaining Rocklatan, Lumigan and Latisse prescribing text with scope recorded in `glaucoma-population-label-followup-review.json`. Added reproductive-evidence interpretation and pediatric indication distinctions, plus remaining Latisse handling counseling. Syntax passed; all four desktop/mobile paragraph captures inspected without clipping or overflow. Broader population/renal synthesis and final clinical consistency review remain open. Module not complete; no completion commit or deployment.

### 2026-09-26 — lactation and renal reconciliation

Read LactMed acetazolamide, timolol and brimonidine entries and both pages of current VCH adult IV acetazolamide protocol. Added three original counseling paragraphs with source attribution and formulation/infant qualifications. Retained current brimonidine warning despite limited reassuring case reports. Read EGS pregnancy section and documented categorical statements requiring further reconciliation. Syntax and all six desktop/mobile paragraph captures passed. See `glaucoma-lactation-renal-review.json`. Whole-module verification remains pending; no completion commit or deployment.

### 2026-09-26 — pregnancy synthesis

Completed targeted pregnancy reconciliation using EGS section II.3.8, visually inspected Table3.9, current Alphagan P risk summary and two original study abstracts. Added planning/monitoring and evidence-interpretation paragraphs; kept neonatal concerns and the distinction between animal findings and human risk explicit. Four desktop/mobile captures and syntax passed. Evidence limits recorded in `glaucoma-pregnancy-synthesis-review.json`. Next: integrated current lesson, question, figure and book-coverage review before completion/build. No completion commit or deployment.

### 2026-09-26 — integrated lesson and first bank range

Read current lesson bodies and seven embedded checks, plus materialized assessment001–020. Corrected the one-drop concept label, an overly broad drainage-pathway rationale and question010 review destination. Import/answer-index/anchor/unique-ID checks passed for seven lessons and139 questions. Reference output was truncated; it remains unreviewed in this pass. Current scope and remaining final-review work are in `glaucoma-integrated-review.json`. Module remains incomplete.

### 2026-09-26 — full assessment consistency read

Read remaining119 materialized questions, completing current139-question clinical consistency pass. Qualified two cupping explanations to distinguish physiological cups from glaucomatous injury. Removed four superseded/redundant reference links while retaining reviewed sources for their topics. Current bank differs from the read snapshot only at the four documented corrected items009/010/022/023; imports, answer indices and anchors pass. Integrated rendering, book/source-image coverage and build remain before completion. See `glaucoma-integrated-review.json`. No completion commit or deployment.

### 2026-09-26 — visual book coverage pass

Visually inspected printed540–542, including glaucoma figure, formulations, drug-trigger box and all drug-table rows. Mapped substantive glaucoma topics to current lessons and identified missing steroid-induced pressure teaching. Added original Pred Forte warning/monitoring paragraph from its February2024 prescribing text; syntax and desktop/mobile captures passed. General eye/ear abbreviation and substitution content remains assigned to pending related modules. Exact scope in `glaucoma-book-coverage-review.json`; whole chapter and final module validation remain incomplete.

### 2026-09-26 — final assessment edits and production build

The four corrected assessment items passed desktop/mobile answer mapping, scoring, explanation and lesson-link checks; no page errors/overflow. Isolated production build completed successfully with558 static pages. Read remaining Cosopt PF IFU disposal/bilateral-use text; current teaching agrees. Before completion commit, verify the isolated checkout against intended audit-branch changes and finish integrated layout/figure inspection. No deployment.

### 2026-09-26 — glaucoma module completion

Confirmed the isolated tested source delta against audit HEAD and visually inspected the four final opening/technique captures. Seven lessons, seven embedded checks, seven figures and139 questions are verified with source and validation scope in `glaucoma-completion-review.json`. Earlier glaucoma-only partial remaining lists are superseded by that record; general eye/ear and mixed topics remain open. Module ledger now22/223 verified (9.9%); chapter38 remains reviewing. Commit/push is limited to the audit branch; no deployment.

### 2026-09-26 — common eye conjunctivitis and dose delivery

Visually read printed543 and read CDC clinical/treatment guidance plus Maxitrol prescribing text. Added conditional return/reassessment and steroid-combination boundaries. Corrected universal one-drop language across lesson, outcome, bank concept and figure label. Evidence and remaining work in `common-eye-conjunctivitis-review.json`. This is partial review; no module completion or push.

### 2026-09-26 — initial antibacterial product review

Read full current AzaSite and Bausch + Lomb polymyxin B/trimethoprim prescribing text, plus AzaSite patient/IFU text. Added two original product-handling paragraphs and two applied questions (bank134). Remaining scope and source limits recorded in `common-eye-antibacterial-review.json`. Module remains in review.

### 2026-09-26 — moxifloxacin and besifloxacin distinctions

Read full prescribing text for Vigamox, historical Moxeza presentation and manufacturer Besivance. Added three original paragraphs and one formulation-selection case (bank135), including product-specific frequencies, age evidence, storage and injection warning. Evidence in `common-eye-fluoroquinolone-review.json`. Remaining antibiotics, clinical pathways and integrated validation remain open.

Product paragraphs passed desktop/mobile visual inspection across twelve captures, including an unobstructed recapture of the steroid-combination row. No page errors or horizontal overflow. New question interaction checks and full clinical module review remain pending.

### 2026-09-26 — ciprofloxacin and ofloxacin

Read complete prescribing text for two specified ophthalmic solutions. Added distinct surface/ulcer schedules, age/storage differences and ciprofloxacin precipitate follow-up; one new applied case brings bank to136. Module remains in review; see `common-eye-ciprofloxacin-ofloxacin-review.json`.

Ciprofloxacin/ofloxacin additions passed import/anchor checks and six desktop/mobile paragraph inspections, with no browser errors or horizontal overflow. These checks do not complete the module or its assessment audit.

### 2026-09-26 — systemic and neonatal eye-infection lesson

Added a separate original lesson and two questions, including an independently checked erythromycin calculation. Reconciled CDC neonatal guidance with ceftriaxone labeling restrictions and UCSF exception boundaries. Exact source scope and remaining tasks in `common-eye-neonatal-review.json`. Module now12 lessons/138 questions, still reviewing.

### 2026-09-26 — Herpetic corneal pathway (partial)
Expanded epithelial versus deeper inflammatory disease, specialist steroid boundaries, and current Zirgan healing-based course. Added two original questions (140 total); evidence: common-eye-herpetic-review.json. Module remains reviewing; rendering and full assessment review pending.

### 2026-09-26 — Adult inclusion conjunctivitis and infection UI validation
Added systemic adult chlamydial treatment and coordinated STI/partner follow-up; current CDC recommendations distinguished from longer historical case regimens. Nine explicit infection assessments passed interaction checks on desktop/mobile. New herpes, ganciclovir, adult chlamydia and neonatal restriction text and systemic visual inspected. Evidence: common-eye-adult-chlamydia-review.json. Module has 141 questions and remains reviewing; no completion commit.

### 2026-09-26 — OTC ocular allergy formulations (partial)
Reviewed Pataday 0.1/0.2/0.7% and Zaditor Drug Facts; added exact schedules, age thresholds, contact-lens and stop rules, and an original concentration-switch case. Evidence: common-eye-otc-allergy-review.json. Remaining allergy products and full module validation are pending.

Alcaftadine OTC coverage added and ophthalmic azelastine expanded after reading current accessible manufacturer labeling. Remaining named allergy products: cromolyn, lodoxamide, nedocromil, cetirizine and epinastine. See common-eye-otc-allergy-review.json.

Added cromolyn scheduled vernal-disease treatment and historical nedocromil coverage. Alocril presentation marketing ended September 2022; module now qualifies availability. Lodoxamide, cetirizine and epinastine remain to review.

Cetirizine and epinastine ophthalmic coverage added from manufacturer labeling. Added single-use preserved Zerviate disposal case (143 questions total). Lodoxamide remains in the book-listed allergy-product review; full module validation remains pending.

Lodoxamide: read historical FDA 2003 label and added conceptual vernal-disease coverage. Current US label/availability remains unresolved: Novartis public PDF returns 404 and DailyMed retrieval failed. Historical regimen is not presented as current. Continue remaining module review while resolving this source gap.

### 2026-09-26 — Expanded allergy UI validation
All ten added allergy passages visually inspected at desktop 1440x1000 and mobile 390x844. No browser errors or overflow. Both new allergy cases passed scoring, explanation and review-anchor interaction checks (23 desktop and 12 mobile randomized attempts). Evidence/hashes recorded in common-eye-otc-allergy-review.json. This does not complete the full module clinical audit.

### 2026-09-26 — Blepharitis treatment expansion
Reviewed NEI care guidance and Xdemvy prescribing text. Added practical lid hygiene, lotilaner course/handling and missed-dose case (144 questions). Evidence: common-eye-blepharitis-review.json. Rendering and final module review remain pending.

### 2026-09-26 — Cyclosporine formulation review (partial)
Added Restasis single-use emulsion and Cequa solution practical directions and trial expectation boundaries. Evidence records exact read scope and remaining label/formulation work in common-eye-cyclosporine-review.json. No module completion claim.

Vevye formulation/bottle counseling and delivery case added; Cequa storage review completed. Module now has 145 questions. Remaining read/visual validation scope recorded in common-eye-cyclosporine-review.json.

### 2026-09-26 — Lifitegrast counseling review

Reviewed the Bausch & Lomb prescribing and patient-instruction text; expanded the lesson and added an urgent-reaction case. See `common-eye-lifitegrast-review.json` for source and scope. Full module review and rendered validation remain incomplete.

### 2026-09-26 — Additional dry-eye therapies

Added Miebo and Tyrvaya coverage and two original administration cases using current labels. Recorded label-version and dosing-section distinctions in `common-eye-new-dry-eye-options-review.json`. Module remains in review.

Desktop/mobile screenshots for seven drug rows visually inspected, with no clipping. Five new cases passed assessment interaction checks on both viewports. Source hashes and evidence paths are recorded in the corresponding product-review records. Next dry-eye coverage gap: acoltremon (Tryptyr), followed by remaining formulation instructions and foundations.

### 2026-09-26 — Acoltremon

Added current acoltremon coverage and a pouch-deadline assessment. Recorded the PI/carton storage wording discrepancy in `common-eye-acoltremon-review.json`; this remains part of an unfinished module.

Restasis MultiDose prescribing and patient instructions reviewed; added bottle-specific preparation and reuse guidance. Newly added acoltremon and MultiDose rows still require rendered inspection.

### 2026-09-26 — Inflammation route distinction

Reviewed the book's symptom-based treatment grouping and current Ozurdex indication, route and safety passages. Added implant-specific coverage and an original route question. See `common-eye-inflammation-review.json`; remaining inflammation products and final checks are outstanding.

### 2026-09-26 — Eysuvis short-course boundary

Read Eysuvis prescribing and patient-instruction text. Added dosing, preparation and renewal counseling plus a course-extension case. See `common-eye-eysuvis-review.json`; module remains incomplete.

Latest four product rows (acoltremon, Restasis MultiDose, Ozurdex, Eysuvis) visually inspected at desktop and phone sizes, without clipping or browser errors. Product-review records contain screenshot paths and source hashes. This does not complete the module clinical audit.

### 2026-09-26 — Assessment ambiguity review

Read the 33 source concept records and first twelve materialized items. Six broad triage questions contained potentially defensible distractors; replaced them with specific scenarios while preserving IDs and lesson links. Remaining materialized questions are not yet clinically verified. See `common-eye-assessment-review.json`.

Assessment review continued through materialized question 24. Replaced three ambiguous conjunctivitis stems/choice sets and corrected one mismatched rationale against CDC guidance. Questions 25 onward remain pending.

Assessment review extended through item 40. Twelve allergy items now have topic-specific incorrect alternatives rather than unrelated valid advice; correct teaching statements retained. Remaining items 41 onward need materialized review.

Assessment review extended through question 64. Corrected a near-duplicate correct answer in the artificial-tear set, replaced broadly applicable distractors and aligned six rationales. Source and exact scope are in the assessment review record.

Materialized assessment review now through item 76. Replaced nine ambiguous prescription dry-eye distractor sets and clarified the lifitegrast mechanism question. Final bank review and rendered checks remain pending.

Assessment inspected through item 96. Corrected steroid-risk wording and thirteen distractor sets. Items 93–96 await updated hydroxychloroquine guideline reconciliation: current primary report located, but full text has not yet been accessed. Independent module work can continue.

Materialized assessment review extended through item 120. Removed eighteen overlapping alternative sets, added an exact Restasis/lubricant spacing scenario, and aligned three preservative rationales. FDA consumer safety and current Restasis administration text rechecked. Remaining source and rendered assessment review are still pending.

Initial materialized reading now covers all 151 questions. Nine further overlapping alternatives corrected in special-population/follow-up items; nineteen explicit cases retained. Hydroxychloroquine reconciliation, final revised-bank clinical review and rendered checks remain outstanding. No module completion claimed.

### 2026-09-26 — Hydroxychloroquine screening update

Read indexed primary AAO abstract and selected publisher screening passages after direct fetch failed. Expanded surveillance teaching and revised questions 94–96; documented access scope and obesity-dose wording discrepancy in `common-eye-hydroxychloroquine-review.json`. Other medication injuries and final module validation remain pending.

### 2026-09-26 — Systemic medication injury distinctions

Reviewed current label ocular-warning passages for topiramate, vigabatrin and tamsulosin. Added three lesson rows and three cases distinguishing emergency symptoms, scheduled surveillance and surgical medication history. Scope and remaining work are in `common-eye-systemic-drug-injury-review.json`.

Three new systemic-drug rows visually checked on desktop/mobile. Ten recent/revised assessment targets passed interaction checks on both sizes (29 desktop attempts, 17 mobile). Exact target IDs and hashes recorded; this is scoped validation, not full-module verification.

### 2026-09-26 — Optic neuropathy counseling

Added amiodarone, ethambutol and linezolid distinctions after reading label ocular passages and TB guideline monitoring guidance. Three rows and three cases added; source scope is recorded in `common-eye-optic-neuropathy-review.json`. Final module audit remains incomplete.

Added four further medication-specific rows and cases for sildenafil, isotretinoin, voriconazole and digoxin after reviewing ocular label passages. Documented the PDE5 association/causation distinction and symptom-versus-monitoring boundaries in `common-eye-color-night-vision-review.json`.

Seven new medication-injury rows visually inspected at desktop and phone sizes. All seven cases passed interaction checks on desktop (23 attempts) and mobile (40 attempts), without errors or overflow. Source hashes and scoped evidence recorded in the two review records. Module remains in review.

### 2026-09-26 — Complete page-image review and steroid combination

Privately rendered and inspected printed pages 544–545 in full, including table and counseling box. Added TobraDex ST directions and historical standard-formulation distinction; made preservative-free burning caveat explicit. Two cases added. Chloroquine coverage gap and remaining product work recorded in `common-eye-tobradex-review.json`.

### 2026-09-26 — Remaining surface antibiotics

Read selected erythromycin, tobramycin, gentamicin, neomycin/polymyxin/bacitracin and sulfacetamide labels. Added five rows and three cases. Reconciled legacy neonatal erythromycin-label language against CDC; current neonatal guidance retained. See `common-eye-additional-antibiotics-review.json`.

### 2026-09-26 — Chloroquine retinal injury

Added previously missing chloroquine-specific surveillance and post-withdrawal follow-up teaching, plus one original case. Reviewed label retinal warning and ocular adverse reactions; scope and remaining validation recorded in `common-eye-chloroquine-review.json`. Module remains in review.

### 2026-09-26 — Ketorolac formulation reconciliation

Read three product prescribing texts; added Acular, Acular LS and Acuvail schedules, handling and shared safety distinctions plus two cases. Source scope recorded in `common-eye-ketorolac-review.json`. Remaining NSAIDs/steroids and rendered validation pending.

### 2026-09-26 — Nepafenac product distinctions

Reviewed Ilevro and Nevanac prescribing text; added schedules, handling, safety and one comparison case. Documented a Nevanac concentration typo and inconsistent revision metadata in `common-eye-nepafenac-review.json`; teaching retains the verified 0.1% product strength. Module remains incomplete.

### 2026-09-26 — Recent additions: desktop/mobile verification

Visually reviewed fourteen recent lesson rows at both viewport sizes. Nine recent cases passed answer mapping, scoring, explanation, review-anchor and gating checks in 24 desktop and 44 mobile attempts. No page errors or horizontal overflow. One desktop capture was repeated after settling and confirmed complete. Exact source hashes and scope recorded in the five corresponding product review files. This does not complete the clinical audit.

### 2026-09-26 — Prednisolone suspensions

Reviewed Pred Forte and current Pred Mild prescribing text. Added strength, handling, contraindication and monitoring distinctions plus one case. Current Pred Mild storage differs from an older repackager label. Details in `common-eye-prednisolone-review.json`; further product and rendered review remain pending.

### 2026-09-26 — Maxidex and infection wording

Reviewed full Maxidex prescribing text, added product-specific teaching and one case, and corrected the overly broad infection-exclusion key point. Selected specialist-managed infectious inflammation differs from contraindicated infections and undiagnosed red-eye self-treatment. Source scope in `common-eye-maxidex-review.json`. Module remains in review.

Inflammation visual now matches the corrected lesson: assess infection and corneal integrity, respect contraindications, and reserve selected infectious-inflammation treatment for specialist direction. Existing HSV assessment already expresses the distinction correctly. Revised visual rendering remains pending.

Steroid case interaction checks passed on desktop (8 attempts) and mobile (15). Four rows and revised diagram inspected. Desktop complete; mobile captures of taller elements include floating-UI overlaps, so unobscured mobile visual verification remains pending. Exact scope and source hashes recorded in prednisolone/Maxidex review records.

### 2026-09-26 — Fluorometholone formulations and pressure risk

Reviewed FML, FML Forte and Flarex prescribing text. Added three rows and a case; distinguished fluorometholone from its acetate ester and qualified comparative pressure-risk claims. Documented Flarex two-day versus two-week reassessment discrepancy, retaining earlier review. Ointment and other products remain pending.

### 2026-09-26 — Historical FML ointment reconciled

ASHP reports ointment discontinuation with suspension unaffected. Read archived FDA ointment labeling and added a historical formulation note rather than a current supply recommendation. This closes the identified ointment-content gap; rendered validation remains pending.

### 2026-09-26 — Loteprednol formulation review started

Read Alrex prescribing text; added allergy-specific teaching and a lens-safety case. Ten-minute reinsertion guidance does not permit lens wear with a red eye. Lotemax formulations remain pending; Eysuvis is separately reviewed.

### 2026-09-26 — Lotemax gel and ointment

Read both full prescribing texts and added formulation-specific postoperative teaching. Distinguished established pediatric labeling for 0.5% gel from unestablished pediatric use for ointment. Both prohibit contact lenses throughout treatment. Suspension and SM reconciliation and rendered checks remain pending. No module completion claimed.

### 2026-09-26 — Lotemax suspension and SM distinctions

Added suspension indications and uveitis potency limitation, and SM three-times-daily postoperative schedule. Kept lens wording specific to each formulation. Source and reading scope recorded in loteprednol review. Rendered validation and whole-module verification remain pending.

### 2026-09-26 — Diclofenac and flurbiprofen

Reviewed both full prescribing texts. Added three teaching rows distinguishing postoperative diclofenac schedules from preoperative flurbiprofen miosis prevention; preserved the diclofenac bandage-lens exception and corneal precautions. Bromfenac and rendered validation remain pending.

### 2026-09-26 — Prolensa and BromSite

Reviewed prescribing text and BromSite IFU text, adding formulation-specific schedules, administration, lens restrictions and safety teaching. Bromfenac 0.09% and rendered checks remain pending; no completed-module claim.

### 2026-09-26 — Bromfenac 0.09%

Reconciled current once-daily Alembic labeling with historical Xibrom twice-daily schedule documented by FDA. Added product-verification teaching and recorded structured-label strength inconsistency. Rendered checks remain pending.

### 2026-09-26 — Scoped desktop/mobile visual checks

Lotemax gel and bromfenac 0.09% target rows visually inspected in isolated local preview at 1440×1000 and 390×844. Both target rows are fully readable; no page errors or horizontal overflow. Adjacent partially visible rows are not counted as validated. Source hash and screenshot paths recorded in their review records. Other rows remain pending.

### 2026-09-26 — Remaining NSAID row visual checks

Visually inspected all five new Prolensa/BromSite, diclofenac and flurbiprofen rows at desktop 1440×1000 and mobile 390×844. All target text fully readable without horizontal overflow or page errors. Recorded source hash and screenshots in product review records. Whole-module reconciliation remains open.

### 2026-09-26 — Dry-eye foundations and sterility

Read current foundations and sterility rows and embedded checks against NEI/FDA education. Added practical environmental care and distinguished punctal plugs from temporary drop-administration occlusion. Remaining medicine/systemic-disease claims, lubricant ingredients and CDC lens-care review are explicitly tracked.

### 2026-09-26 — CDC contact-lens care

Reviewed current CDC prevention and lens-care education. Expanded hand drying, water/sleep restrictions, no topping off, case care/replacement, and peroxide neutralization. Preserved correct existing no-water teaching and consistent visual. Rendering remains pending.

### 2026-09-26 — Artificial-tear ingredient coverage

Reconciled book-listed lubricants using two current Drug Facts texts; added ingredient/formulation distinctions and OTC reassessment timing. Recorded Systane structured strength inconsistency with independent conversion. No brand-wide dosing or recall-free claim. Rendering pending.

### 2026-09-26 — OTC redness products

Read Naphcon-A, Visine Red Eye Comfort and Clear Eyes Drug Facts. Added ingredient/age/dose distinctions, overuse and ingestion precautions, and documented a structured-label strength error. Lumify remains separately reviewed. New rows await rendering.

### 2026-09-26 — Dry-eye medication and systemic risk factors

Read NEI causes text and targeted TFOS iatrogenic/pathophysiology passages. Reconciled the risk list and replaced broad sedating-drug wording with selected examples, individual-causation limits and prescriber review. Added Parkinson blinking and skin-associated meibomian dysfunction mechanisms. Foundation record retains special-population, visual and assessment work as pending; no module completion claimed.

### 2026-09-26 — Remaining formulation and cross-module checks

Completed omitted Restasis single-use passages and visually read Vevye illustrated IFU pages 7–9. Added precise Restasis population/trial limits and expanded Vevye handling. Reconciled book Omnipred example with FDA 2024 label and current Sandoz authorized-generic listing; added two formulation/safety rows. All additions await rendering.

Re-read actual Glaucoma Pharmacotherapy eyelash-prescription row against Latisse label sections 2, 4 and 5.1. It correctly treats concurrent prostaglandin use as physician-supervised with IOP monitoring rather than a formal contraindication. RxPrep printed p545 categorical avoidance is documented as simplified; no duplicate Common Eye lesson or change to accurate Glaucoma teaching needed. Source: https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=34f83d9d-2c64-463e-8a90-9a460fedfead .

### 2026-09-26 — Final materialized assessment and diagram reading

Read all 174 materialized questions with all choices, keys and explanations, and all 12 diagram data entries. Corrected preservative-free item 120 rationale to include multidose handling. Steroid diagram now includes prescribed reassessment/taper; sterility diagram avoids an overbroad individual-approval implication for OTC products. Pediatric triage checked against RCH red-eye guidance; no Australian antimicrobial schedule imported. Neonatal dose independently remains 40 mg/dose. Outstanding source gaps, rendering and build prevent module verified status.

### 2026-09-26 — remaining row captures and final targeted cases

Completed inspection of 22 outstanding lesson rows at desktop and mobile (44 captures), plus a second Maxidex mobile scroll position to expose its final lines. No page errors or horizontal overflow. Recorded the completed FML/Alrex/preservative assessment run (14 desktop, 35 mobile attempts). Changed sterility application from “approved products” to “sterile products” to avoid implying individual FDA approval of every OTC eye drop. Whole-module reconciliation and build remain outstanding; Common Eye remains reviewing.

Alomide availability gap resolved using the FDA Orange Book 46th edition (2026), discontinued list page 6-324 (PDF page 886). The lesson now explicitly identifies US Alomide as discontinued while preserving historical vernal-disease coverage. Discontinuation is not described as a safety withdrawal. Source: https://www.fda.gov/media/71474/download.

Isolated production build passed (`next build --webpack`, 558/558 pages). Three Common Eye implementation files were byte-compared with the preview and matched. Revised Alomide row inspected at desktop/mobile. Remaining work: consolidate topic-source closure evidence and cross-module consistency; verify complete visual coverage and general administration/special-population source reconciliation before module verification and scoped commit/push. No publication.

### 2026-09-26 — administration and cross-module reconciliation

Read the primary timolol occlusion trial abstract (PMID 3503120); it supports reduced total systemic exposure without a universal percentage or pregnancy-safety claim. Closed general administration/special-population source gap for the actual lesson wording. Compared ocular content in RA, SLE, TB, Glaucoma, BPH and Antiarrhythmic modules; recorded scope, dose arithmetic and the AAO abstract/full-text severe-obesity wording distinction in common-eye-cross-module-review.json. No whole-module verification inferred for the comparator modules.

Neonatal/systemic-care diagram inspected at desktop and mobile, including a second mobile scroll position. All four nodes readable; no errors or overflow. Closed that specific visual gap in common-eye-neonatal-review.json. The module remains reviewing pending final consolidated evidence/coverage reconciliation.

## Common Eye completed — 2026-09-26

Final actual-content pass covered all 142 teaching passages, overview/outcomes, summaries, concepts, application text, key points, 12 embedded checks and 104 retained references. The 174-question clinical pass and 12-diagram review are recorded separately. Closed all Common Eye material gaps, including Alomide status, general administration/special populations, cross-module ocular consistency and outstanding visual captures. Normalized numeric-range punctuation; removed five older duplicate label links. Scoped structural audit passed; final isolated production build generated 558/558 pages. A non-blocking two-question neonatal assessment coverage advisory does not require padding the subject to a fixed count.

See common-eye-completion-review.json for the authoritative final coverage map, source hashes, validation scope, discrepancies and limitations. Earlier pending statements in incremental records are preserved as history and superseded for this module. Common Ear and the mixed eye/ear subsection are still open. No independent pharmacist certification and no publication/deployment.

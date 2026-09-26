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

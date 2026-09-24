# Psoriasis clinical content audit

Status: verified locally on September 24, 2026; commit pending below. Started September 24, 2026 after Sjogren commit b3a6c35. Push remains pending exact-destination confirmation required by automatic approval review. No deployment.

Read both complete private book pages, printed 653–654 / PDF 661–662, and visually inspected both rendered page images, including all treatment-table rows. Source images and extraction remain outside version control. Background/phenotypes map to immune-keratinocyte-axis and phenotype-urgency; topical drugs to topical-foundations; UVB/PUVA/laser to phototherapy; oral drugs to oral-systemic; interleukin agents to biologic-pathways. Existing severity, modern-topical, GPP and longitudinal lessons extend beyond the book and require current-source review.

Initial reading covered the first five lessons and bounded oral/biologic/emergency/longitudinal sections; a broad initial tool response was truncated, so complete consolidated reading remains open. The assessment uses four generated variants per concept and mixes valid statements/recommendations/actions as choices, with an artificial 100-item minimum. Replace with discriminating original cases after source review. Preserve the newly added acitretin case.

Book discrepancies to reconcile: anthralin is described as containing salicylic acid; acitretin is called a tablet; cytokine-binding antibodies are grouped as receptor antagonists; Crohn risk and latex precautions are generalized across distinct interleukin products. Do not copy those groupings without product-specific verification. Preliminary current-label search supports the existing June 2026 roflumilast cream age-two boundary and continuing SILIQ REMS; search results alone are not complete label review.

Read acitretin label ethanol, blood-donation and pregnancy-warning excerpts: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a6546625-acb8-460e-b34e-f795bfb3680a. Added exact separate post-treatment timelines and consent/testing reminder to oral-systemic, plus one original case. Full acitretin dosing, contraindications, monitoring and reproductive-program details still require review. No final clinical/UI/build verification yet.

Structural assessment check passes at 129 cases (128 legacy generated plus the new case), with no hard errors or source gaps. This does not resolve clinical ambiguity in the legacy bank. git diff --check passes.

## Acitretin prescribing safeguards

Read the current label dosage, contraindication, laboratory and pregnancy-program sections. Expanded oral-systemic with administration, interaction exclusions and an actionable monitoring/dispensing plan. Corrected the book's tablet formulation to capsules. Complete module verification remains open.

## Older agents and topical source distinctions

Read AAD guideline highlights for topical therapy, nonbiologic systemic therapy, severity measures and pediatric site cautions (https://www.aad.org/member/clinical-quality/guidelines/psoriasis). Added the missing book-listed hydroxyurea topic as an off-label specialist option rather than implying an FDA-approved indication. Existing BSA/PGA versus PASI context and steroid-sparing strategies are consistent with these highlights; full modality-specific review remains open.

Read the historical Zithranol-RR description and handling sections (https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=45bad116-0351-442f-8e49-f11089a955fd). The record is dated 2010, has inactive NDCs and states unapproved-drug status: it is evidence of that formulation, not current availability or FDA approval. Its ingredient list does not contain salicylic acid. Added a formulation-specific teaching distinction without importing obsolete pregnancy letters or a universal contact time.

## Modern topical label reconciliation

Read current VTAMA indication, application and adverse-reaction sections, ZORYVE cream indication/strength/contraindication/interaction sections, and ZORYVE foam indication, technique, contraindication and interaction sections at the module's existing DailyMed links. Confirmed the cream's current plaque-psoriasis age-two boundary and foam's age-twelve boundary, adult plaque-psoriasis tapinarof indication, and Child-Pugh B/C contraindication for roflumilast. Added the risk of confusing eczema strengths/ages with psoriasis and made interaction review specific. Added an original strength/indication case; retain it during the legacy-bank rewrite.

Independent concentration checks: 0.3 g/100 g = 3 mg/g; 0.15% = 1.5 mg/g; 0.05% = 0.5 mg/g. These are formulation strengths, not a recommendation to substitute differing applied quantities. Did not import the label's anomalous 210% decrease pharmacokinetic text as a valid calculation. Broader topical, oral, biologic, GPP, assessment and visual review remains open.

## Apremilast formulation update

Read current OTEZLA/OTEZLA XR indication, titration, switching and renal-dose sections at the existing DailyMed source. Added the missing extended-release alternative and pediatric weight boundaries; qualified renal adjustment by formulation. Subsequently read sections 2.3-2.4 and 5.1-5.5 of the September 2026 label. Added intact-tablet administration, severe gastrointestinal toxicity response, individualized mood-risk review, growth/weight monitoring, serious-allergy response and weight-specific pediatric severe-renal dosing. Pediatric renal assessment is referred to the treating team; the adult Cockcroft-Gault equation is not taught as a pediatric calculator. The existing renal case remains applicable to immediate-release adult dosing; review its wording during bank replacement.

## Deucravacitinib label reconciliation

Read June 2026 SOTYKTU prescribing information sections 1-5 and 8.6-8.7 at the existing DailyMed source. Confirmed adult PsA and plaque-psoriasis indications. Expanded the nonspecific monitoring instruction into renal/hepatic distinctions, administration, TB and hepatitis precautions, triglyceride/liver monitoring, muscle toxicity response, malignancy assessment and the label's qualified JAK-risk discussion. Selective TYK2 inhibition must not imply absence of those uncertain risks. Module verification remains open; bank and figures still require reconciliation.

## Spesolimab route and transition correction

Read SPEVIGO sections 1-5 and route-specific administration details (label revised October 2025; DailyMed updated April 8, 2026, existing module source). Corrected the universal subcutaneous-loading statement in the lesson and legacy concept: initiation or resumption after IV flare therapy uses 300 mg four weeks later, without reloading. Added device-specific loading-administration distinctions and live-vaccine timing, infection and serious-allergy responses. This extends beyond the RxPrep section.

Independent dose checks: 900 mg uses two 450 mg IV vials; 600 mg SC uses four 150 mg or two 300 mg syringes; 300 mg SC uses two 150 mg or one 300 mg syringe. Do not conflate concentration with total syringe content or route. Entire assessment bank and visual audit remain open.

## Brodalumab clinical and dispensing review

Read the February 2026 SILIQ boxed warning and sections 1-5 at the existing DailyMed source. Confirmed continued REMS and Crohn contraindication. Added prior-systemic-failure eligibility, dosing and response reassessment, operational certification/enrollment requirements, TB/infection instructions, and recognition of eczematous eruptions. Preserved the distinction between observed suicidality and unestablished causality; prior depression is not an absolute labeled contraindication. Existing brodalumab concept already states that distinction, but its generated alternatives still need replacement during the full bank rewrite.

## Bimekizumab safety omissions and regimen review

Read BIMZELX sections 1-5 and psoriasis adverse-event data at the existing DailyMed source (revision November 2024, retrieved September 24, 2026). Added psoriasis versus PsA dosing, the 120 kg maintenance consideration, liver panel and action thresholds, active-IBD avoidance, and the omitted suicidality precaution. Distinguished this precaution from brodalumab boxed warning/REMS. Updated the legacy concept monitoring statement; full question rewriting remains pending. Independently checked 320 mg equals two 160 mg devices or one 320 mg device, not two devices regardless of strength. No trial-rate comparison across biologics was introduced.

## Traditional topical product review

Read TAZORAC cream indication, administration, pregnancy, irritation, photosensitivity and pediatric sections (revision August 2019) and NorthStar calcipotriene cream contraindications, precautions, pediatric and administration sections (April 2023 label), retrieved September 24, 2026. Added explicit topical-retinoid pregnancy safeguards and formulation-specific application and age boundaries. Added calcipotriene calcium precautions and face restriction. Sources added to learner references. Combination products still require their separate review; no blanket class-wide groin/axilla restriction was inferred from the single-ingredient cream. Independent strength check: 0.005% = 0.05 mg/g = 50 mcg/g.

## Combination topical reconciliation

Read DUOBRII sections 1-5 and reproductive/pediatric instructions (January 2020 revision) and ENSTILAR sections 1-5 (April 2022 revision), retrieved September 24, 2026. Added exact combination ingredients, adult versus age-12 boundary, quantity limits, application/site instructions and adverse-effect precautions. Distinguished the US Enstilar dosage section from its longer-maintenance trial descriptions. These examples do not certify unreviewed combination vehicles. Source links added to module. Checked Duobrii 0.01% = 0.1 mg/g halobetasol and 0.045% = 0.45 mg/g tazarotene. The Enstilar limit is 60 g per four days, not 60 g per day or per week.

## Oral PUVA safety expansion

Read the oral methoxsalen soft-capsule label warning, indication, contraindication, cancer/ocular warning and precaution sections, including after-treatment eyewear, sun avoidance and eye examination instructions. Added formulation noninterchangeability and actionable ocular/skin protection and screening. Retained distinction from UVB and topical psoralen protocols. Source added to learner references. The label contains differing ingestion-versus-treatment anchors for protection timing; teaching directs written specialist timing and preserves both 24-hour eyewear anchors. No obsolete sunscreen ingredient recommendation was imported. Phototherapy guideline review beyond label-specific PUVA safeguards remains open.

## Cyclosporine psoriasis dosing and monitoring

Read Neoral psoriasis dosing, special monitoring and formulation warning, with concomitant phototherapy/immunosuppression restrictions. Added divided daily dose, escalation, response stopping rule, duration limit and creatinine action thresholds. Kept psoriasis thresholds separate from adjacent rheumatoid arthritis text. Independent example: at 80 kg, 2.5 mg/kg/day = 200 mg/day = 100 mg twice daily; a baseline creatinine of 0.8 mg/dL rises 25% at 1.0 and 50% at 1.2. Further interaction/eligibility details and full bank reconciliation remain open.

Cyclosporine follow-up: read the psoriasis indication and contraindications separately from adjacent RA/transplant text. Added eligibility, renal/BP/malignancy exclusions and coal-tar/radiation/MTX restrictions; completed targeted review of CYP3A4/P-gp, nephrotoxic and potassium interactions plus grapefruit and consistent meal timing. The module explicitly distinguishes RA combination authorization from psoriasis restrictions.

## Methotrexate dosing and toxicity review

Read the May 2026 oral methotrexate label boxed warning, severe-adult-psoriasis indication, section 2.5 and organ-toxicity/folate sections. Added explicit weekly dose/tablet-count teaching, folate supplementation, baseline/follow-up monitoring and warning symptoms. Independent calculation: 15 mg / 2.5 mg per tablet = 6 tablets once weekly. Normal liver tests do not prove absence of fibrosis. Current guideline fibrosis strategy, interactions and reproductive interval reconciliation remain open; no automatic biopsy-at-cumulative-dose rule was added from the label's historical risk discussion.

Methotrexate follow-up: read sections 7.1, 8.2-8.7 and 10, plus third-space accumulation warning. Added interaction review, nitrous oxide avoidance, clearance concerns, explicitly attributed US-label reproductive intervals and distinction between prescribed supplementation and overdose rescue. Guideline comparison for reproductive care and fibrosis monitoring remains open; these additions do not claim those comparisons are complete.

## Assessment ambiguity correction in progress

Inspected the four-variant generator: it presents core, recommended action and case action as competing choices even when several are clinically valid. Replaced the first fourteen concepts (immune axis through vitamin-D combination) with one applied case each and individually written incorrect alternatives. Removed the arbitrary 100-question minimum. Preserved the two original safety cases. Remaining eighteen concepts still use the legacy generator and are explicitly unverified pending replacement; no assessment closeout is claimed.

Assessment follow-up: replaced the remaining eighteen generated concept groups with individual applied cases and unique incorrect alternatives. Removed the four-variant generation path entirely. Bank now contains 32 concept cases plus the two previously added safety cases (34 total). Clarified the apremilast renal answer as immediate-release and excluded XR in severe renal impairment. Additional cases for newly expanded dosing/safety material, full rationale review and UI validation remain pending; this is not module verification.

Added six original audit-derived cases: spesolimab IV-to-SC transition, apremilast XR switch, cyclosporine baseline-relative creatinine calculation, methotrexate weekly tablet count, bimekizumab device strength and Enstilar quantity limit. Independently recalculated each numerical answer and checked each distractor against its stem. Bank now has 40 cases. Additional coverage and final clinical/UI validation remain open.

## Figure content reconciliation

Read all ten PsoriasisVisual definitions and renderer. Revised topical safeguards, roflumilast indication distinction, oral-PUVA protection, apremilast formulation/renal boundary, TYK2 monitoring and spesolimab transition. Separated TNF-specific heart-failure/demyelination concerns from the grouped p40 column and included bimekizumab mood/liver monitoring. Changed the phenotype column label from Routine to Assess so high-impact special sites are not trivialized. Rendered desktop/mobile inspection remains pending; source inspection alone is not visual verification.

## Initial rendered interaction checks

Ran local Chrome against the current psoriasis route at 1440x1000 and 390x844. Both returned HTTP 200, ten sections, no document horizontal overflow and no page errors. All ten navigation links, embedded-check feedback and return anchors worked at each viewport. Captured all twenty figure images privately. Visually inspected the oral-systemic figure at both sizes: text is present without clipping; mobile uses two columns followed by the third card. The desktop floating tools control occupies the empty right margin in that capture. Other eighteen captures, complete lesson readability, practice flow and final build remain to be inspected; these checks do not establish clinical completion.

## Fibrosis guidance and rendered readability follow-up

Read the AAD guideline highlights and May 2023 systemic nonbiologic pathway. Clarified that methotrexate monitoring includes noninvasive hepatic fibrosis assessment; normal transaminases alone are insufficient. Baseline assessment and specialist review for abnormal results are now explicit. Corrected the module evidence date from August to September 24, 2026 to match the reviewed September labeling.

Sources: https://www.aad.org/member/clinical-quality/guidelines/psoriasis and https://assets.ctfassets.net/1ny4yoiyrqia/3XbW70S8Td4YikrywcW1bx/f8e061c19b2f04e4ba65dd0cb1b0f2e7/AAD-Guideline-Systemic-Non-Biologic-Psoriasis-Clinical-Pathway-May-2023-Update.pdf . Detailed fibrosis testing algorithm remains to be reconciled with supplementary guidance.

Read the ACR 2020 reproductive guideline paternal-medication section (https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24130): conditional continuation of paternal methotrexate differs from the reviewed US label. This is evidence of a discrepancy, not proof that the 2020 guidance is the latest available. Current reproductive guideline comparison remains open before expanding the lesson's explicitly attributed label intervals.

Completed visual inspection of all twenty desktop/mobile figure captures across this and the preceding review. Text wraps within the cards; the mobile layout places the third card on a second row. Fixed tools/development controls overlay some lower text at certain captured scroll positions. Tested actual paragraph access after centering each word: 4,066 words in lesson and figure paragraphs at each viewport, zero failed hit tests on desktop and mobile. This establishes scroll access, not absence of overlays at every position. Practice flow, remaining clinical source review, final consolidated content review and production build remain open. Module remains reviewing.

## Reproductive and phototherapy guideline reconciliation

Read EULAR's 2024 update (published 2025), maternal preconception, lactation and paternal methotrexate recommendations, including dose limits and limited lactation evidence. Added a separately attributed comparison with the US label and ACR 2020, scoped to rheumatic disease/PsA and coordinated specialist decisions. Source: https://doi.org/10.1016/j.ard.2025.02.023 (full guideline read via Czech rheumatology society PDF). Maternal pregnancy remains distinct from paternal exposure; compatibility is not extrapolated above the guideline dose.

Read AAD phototherapy supplementary tables I-IX and BAD/BPG 2022 pregnancy/folate section. Added narrowband-UVB persistent-erythema response and pregnancy-planning folate considerations, with source links in the module. Did not transpose broadband missed-session reductions into narrowband dosing or use a universal PUVA formulation schedule. Detailed protocols remain specialist directed. Other biologic source review and final consolidated clinical/assessment review remain pending.

Practice-flow check: desktop and mobile each displayed ten questions, correctly scored all ten selected answers, cleared feedback and generated a new attempt. Added two original cases afterward for persistent NB-UVB erythema and the dose-limited paternal methotrexate guideline distinction. Bank now has 42 cases; these new cases still need inclusion in final assessment validation. The 60-hour case is intentionally beyond the 48-hour threshold; the 20 mg weekly paternal case is within the 25 mg guideline boundary.

Assessment structural check after both additions: 42 questions, no hard errors or source-link gaps. Size and per-lesson count advisories remain subject to substantive coverage review; this is not clinical verification.

## TNF and p40 label distinctions

Read the current Humira psoriasis dosing and HBV, demyelination and heart-failure warning sections. Added indication-specific dosing and clarified caution versus universal contraindication. Read Stelara August 2026 psoriasis dosing, device handling, infections, hypersensitivity, PRES, immunization and pulmonary warning sections. Added missing p40-specific safety and dosing content. Both primary label links are in learner references. Independent boundary check: exactly 100 kg stays in the 45 mg adult psoriasis group; above 100 kg uses 90 mg. Pediatric and bowel regimens must not be substituted. Remaining agents and final assessment reconciliation are still open.

## IL-23 p19 regimen and indication review

Read current Skyrizi and Tremfya psoriasis/pediatric dosing, administration and liver-warning sections; read Ilumya adult dosing, provider administration, infection and TB sections. Added separate schedules, age/weight eligibility and administration roles. Added indication-specific hepatic monitoring without implying liver risk is absent in psoriasis. Primary sources are linked in module references. This updates coverage beyond the older RxPrep edition. At 40 kg, the risankizumab pediatric dose enters the 150 mg group; the same weight meets guselkumab's pediatric weight minimum only when its age criterion is also met. No pediatric tildrakizumab indication was inferred. Remaining TNF/IL-17 agents and final clinical/assessment reconciliation remain open.

## Secukinumab and ixekizumab reconciliation

Read current US labels' psoriasis dosing and pediatric administration, infection, TB, IBD and eczema-warning sections; also secukinumab hepatitis and device-specific latex warnings. Added dosing and patient-selection distinctions, extended the existing eczema differential beyond brodalumab and linked both labels. Added an original case at exactly 50 kg: ixekizumab uses the middle pediatric group, whereas secukinumab uses its higher pediatric group. Bank now contains 43 cases. Remaining TNF agents, consolidated assessment review and final validation remain open.

## Remaining TNF dosing and device reconciliation

Read Enbrel adult/pediatric psoriasis dosing and current device instructions, Cimzia psoriasis dosing and preparation/combination precautions, and Remicade psoriasis dosing, TB evaluation, infusion-reaction management and heart-failure sections. Added indication-specific regimens and device distinctions with primary-source links. Notably, the current Enbrel label states its devices are not made with natural rubber latex; the Cimzia prefilled cap retains a latex-derived component. Infliximab heart-failure restrictions must distinguish the dose-specific contraindication from ongoing lower-dose risk. Independent calculation check: 0.8 mg/kg at 30 kg is 24 mg weekly; 400 mg certolizumab requires two 200 mg injections. Final consolidated lesson/assessment review, remaining foundational/GPP source checks, coverage reconciliation and final build remain pending.

## Consolidated bank reading and safety coverage

Read all 43 existing case stems, answer keys, explanations and generated alternatives together after the treatment expansions. No competing correct answers identified in this reading. The incorrect options remain deliberately clear for applied introductory practice; numerical and indication-boundary cases provide additional discrimination. Added six original cases for tazarotene pregnancy, brodalumab REMS dispensing, suspected ustekinumab-associated PRES, causally attributed bimekizumab liver injury, p19 pediatric eligibility and etanercept pediatric calculation. Sources are the previously read product labels linked in the corresponding lessons. Independently checked 30 x 0.8 = 24 mg weekly, and 35 kg is below the 40 kg eligibility/dose boundary. Bank now has 49 cases. Final end-to-end assessment validation and consolidated lesson/source closeout remain pending.

Follow-up stem check: specified age eight in the etanercept case so pediatric eligibility is explicit. Structural assessment check reports 49 cases with no hard errors or source-link gaps; count advisories still require substantive coverage judgment.

## Foundational and emergency-care follow-up

Read the phenotype, severity, immune-axis and longitudinal sections as currently rendered in source. Read AAD pustular treatment guidance and the April 2026 NPF overview, plus Spevigo's actual GBS development-safety passage. Clarified acute GPP flare urgency versus stable between-flare disease, added skin-tone recognition, qualified neurologic reports without claiming causality or a GPP incidence, and corrected the stale source date. AAD supports the named specialist alternatives to spesolimab; this is not a claim of equal evidence or interchangeable FDA indications.

Read the AAD comorbidity pathway and separate PsA screening measure. Existing symptom-based screening/referral content is consistent. Did not import outdated cancer-screening ages, the pathway's glucose-unit typo, or its inconsistent screening-tool abbreviation expansion. Specific screening intervals must follow current disease-specific recommendations. Full consolidated treatment-lesson review and remaining clinical closeout are still pending.

Updated readability check after the treatment expansions: 5,226 lesson/figure paragraph words tested at each viewport, zero failed center-scroll hit tests on desktop and mobile. This does not replace final clinical verification.

## Methotrexate monitoring and topical claim clarification

Read the AAD July 2022 systemic nonbiologic supplementary tables, baseline and ongoing monitoring sections. Added baseline TB/hepatitis B/C screening and the explicitly conditional three-to-six-month CBC/liver-test interval for stable patients without abnormal results. Clarified that this interval does not defer earlier assessment after initiation, dose changes, interactions or toxicity. The tables support baseline noninvasive fibrosis testing and long-term liver evaluation but do not establish a single detailed fibrosis follow-up algorithm; no universal threshold or biopsy schedule was invented. Linked the actual supplementary source.

Read AAD topical corticosteroid patient guidance. Removed the vague “tachyphylaxis concerns” adverse-effect claim, retaining documented local/systemic risks and adding reassessment of application, adherence and diagnosis before potency escalation. Linked that guidance. Final module verification remains pending; these changes do not close the chapter.

## Latest validation and immune-axis evidence

After the monitoring clarification, the 49-case structural check reports no hard errors or source-link gaps; coverage advisories are still editorial checks. The desktop and mobile practice-flow rerun each displayed ten questions, scored all ten selected correct answers correctly, and cleared feedback for a different new attempt. This samples application behavior, not clinical correctness of every question. Production webpack build completed successfully (exit 0); log: `/private/tmp/psoriasis-build.log`.

Read the abstract, introduction and initial keratinocyte results of Francis et al., Nature Communications 2024, https://www.nature.com/articles/s41467-024-44994-w . The existing IL-23/type-17/keratinocyte feedback explanation is consistent with this primary study and its stated biological context. The longitudinal sample comprised five risankizumab responders; it is not evidence that every patient responds or that the simplified circuit exhausts psoriasis biology. No efficacy estimate or new clinical recommendation was imported from this mechanistic study. Final consolidated lesson, book-coverage and cross-module reconciliation remain open.

## Book coverage and adjacent-content reconciliation

Re-read private PDF 661-662 text, covering the background, non-drug therapy, topical table and systemic table. Identified underdeveloped moisturizer and coal-tar counseling. Read AAD coal-tar treatment and nonprescription-care guidance; added practical barrier care, scalp delivery, UV sensitivity, supervised occlusion/site restrictions and the limited pregnancy/lactation evidence. Did not equate coal tar with anthralin or infer that all prescribed phototherapy combinations are prohibited. Existing cyclosporine-specific coal-tar/UV exclusions remain distinct.

Read the consolidated oral-systemic lesson after its expansions, including weekly MTX dosing, source-attributed reproductive differences, cyclosporine indication-specific restrictions, acitretin timelines, apremilast formulation/weight/renal distinctions and TYK2 safety. No new contradiction found in that reading. Targeted adjacent-module comparison found consistent etanercept RA-versus-psoriasis schedules and consistent roflumilast indication-specific ages/strengths in seborrheicDermatitis.js and atopicDermatitis.js. This is a bounded consistency check, not clinical verification of those whole modules. Broader cross-module and final lesson closeout remain pending.

Read the entire consolidated biologic-pathways lesson, including all schedules, eligibility, warnings, embedded check and summary. The drug-specific distinctions align with the individual primary-label reviews recorded above. The general biosimilar statement still needs its direct FDA reference checked during closeout. Updated the module ledger to mark the consolidated oral, biologic and topical lessons corrected, not verified, and removed obsolete pending-build/practice descriptions. Historical entries above record intermediate states rather than current unresolved items.

Remaining psoriasis closeout: verify/link the general biosimilar source; finish the compact book-subsection crosswalk and final reference/assessment alignment; inspect latest topical paragraphs in the rendered experience and complete final application validation as warranted. Preserve chapter 46 as open for material outside this subsection.

## Final textbook subsection crosswalk

| Book material (printed / PDF page) | NaS lesson coverage | Reconciliation |
| --- | --- | --- |
| Background and plaque morphology (653 / 661) | immune-keratinocyte-axis; phenotype-urgency | Immune-mediated biology and morphology retained; recognition across skin tones and urgent mimics expanded. |
| UVB, photochemotherapy, targeted light (653 / 661) | phototherapy | Controlled dosing, NB-UVB versus PUVA, eye/skin protection and cumulative risk; sunlight is not an interchangeable prescribed dose. |
| Topical drug overview and corticosteroid/tazarotene/combination rows (653 / 661) | topical-foundations | Product-specific site, strength, duration, amount and pregnancy precautions; sensitive-site calcineurin use remains off label. |
| Coal tar, salicylic acid, anthralin and moisturizers (653 / 661) | topical-foundations | Separate ingredients; anthralin is not inherently salicylic acid. Added barrier care and coal-tar UV/site/occlusion counseling. |
| Calcipotriene and combination vehicles (653 / 661) | topical-foundations | Calcium and vehicle-specific restrictions; do not transfer one product's directions to all formulations. |
| Systemic overview, including historical hydroxyurea (653 / 661) | oral-systemic; biologic-pathways | Expanded currently relevant regimens and monitoring; hydroxyurea explicitly identified as off label, not a routine substitute. |
| Acitretin and apremilast rows (654 / 662) | oral-systemic | Capsules corrected; separate reproductive/ethanol/donation timelines; current apremilast IR/XR, pediatric and renal distinctions. |
| Interleukin-drug rows and brodalumab warning (654 / 662) | biologic-pathways | Target-specific mechanisms; product-specific IBD, latex, TB and REMS requirements replace blanket grouping. |
| Beyond-book coverage | severity-comorbidity; modern-topicals; pustular-erythrodermic; longitudinal-safety | Current-source review recorded above, including newer topical strengths, GPP routes and transitions, monitoring and switching. |

Read FDA's health-professional biosimilar overview, including definition, approval and interchangeability sections. The retained statement about no clinically meaningful differences is consistent. Added the direct source to learner references. No claim that every biosimilar permits pharmacy substitution was added. Source: https://www.fda.gov/drugs/biosimilars/overview-health-care-professionals .

## Local verification closeout

The preceding entries are a chronological work log; their intermediate pending items are superseded by this closeout. Ten lessons, ten corresponding visuals and all 49 original cases have undergone content review with current-source reconciliation. Assessment review includes stems, keys, rationale and alternatives; numerical and age/weight-boundary checks are recorded above. The final crosswalk accounts for the complete printed653-654/PDF661-662 subsection. Current sources extend coverage beyond the older textbook. No unresolved material accuracy or coverage issue remains within this psoriasis module; this does not verify the rest of chapter46 or the curriculum.

Final application evidence: structural bank check passed with 49 cases and no hard errors/source gaps; per-lesson quantity advisories were reviewed against substantive topic coverage rather than a quota. Desktop/mobile ten-question practice scoring and fresh-attempt behavior passed. Twenty figure captures were inspected earlier; the latest barrier-care and coal-tar paragraphs were visually inspected at 1440x1000 and390x844. Final paragraph/figure text access test checked5411 words at each viewport with zero failed center-scroll hits. Fixed navigation/tools can overlay viewport edges while scrolling; tested lesson text is reachable. Final webpack build exited0, log `/private/tmp/psoriasis-build-final.log`. No deployment was performed. This is an editorial clinical-source audit, not independent pharmacist certification.

Commit only the seven psoriasis audit files listed in the associated commit. Push remains blocked by the previously reported automatic approval review requiring confirmation of the exact GitHub destination; do not infer that a local commit reached the remote.

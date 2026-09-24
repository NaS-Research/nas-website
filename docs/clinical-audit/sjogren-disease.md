# Sjogren disease audit

Status: verified locally on September 24, 2026. The chronological entries below record intermediate work; the closeout supersedes their pending statuses. Started September 24, 2026 after MG local completion commit `1ec1347`. Push remains pending exact-destination confirmation required by automatic approval review; no deployment.

Read the complete private RxPrep printed 652 / PDF 660 and visually inspected its text, illustration and drug table. PDF 661 begins psoriasis. The source covers autoimmune systemic context, dry-eye/dry-mouth complications, tears and nighttime ointment, cyclosporine/lifitegrast, non-drug oral support and systemic secretagogues. Book/extractions/screenshots remain outside version control.

Existing target `sjogren-disease` has ten lessons, including classification, systemic therapy, lymphoma and pregnancy beyond the book. Initial lesson read located the relevant content; source reconciliation for the complete module, all questions and figures remains open. The current question generator mixes core statements, recommendations and actions as alternatives; these can overlap as valid answers. It imposes a 100-question minimum. Rewrite with original discriminating cases after source review rather than preserving a numeric quota.

## Initial ocular formulation correction

The book groups Cequa with cyclosporine emulsion and applies vial inversion to that shared entry. Read current Restasis single-use label dosage, strength, precautions and counseling sections (https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8e24af2b-bc1c-4849-94f2-6df950cdca89) and corresponding Cequa sections (https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=48c3d8a3-4289-4b52-9189-58b48596095c). Added explicit solution-versus-emulsion, concentration, dosing, lens/lubricant spacing and single-use handling distinctions to the actual lesson. Independent concentration check: 0.05 g/100 mL = 0.5 mg/mL; 0.09 g/100 mL = 0.9 mg/mL. Avoid extrapolating these instructions to multidose devices or all other cyclosporine products.

## Remaining review

- Reconcile diagnostic score thresholds and applicability against the actual 2016 criteria, including biopsy units, eye-specific findings, exclusions and medication interference.
- Read current BSR/EULAR recommendations for local treatment sequencing, dental prevention, secretagogue trials, systemic disease and lymphoma risk. Do not copy the book's broad daily-antimicrobial-mouthwash recommendation without a current indication-specific rationale.
- Verify pilocarpine, cevimeline and lifitegrast product details; preserve useful additional content after primary-source verification.
- Recheck ACR versus SMFM pregnancy recommendations and the scope of their disagreement.
- Review all questions, answer choices/keys/rationales and all figures, then correct/rewrite and validate desktop/mobile behavior and production build. No full-module clinical verification yet.

## Classification and secretagogue source review

Read the publisher's 2016 classification table and applicability footnotes (https://acrjournals.onlinelibrary.wiley.com/doi/full/10.1002/art.39859). PMC was inaccessible; no claim of a full PMC read. Added missing biopsy units, alternative ocular score, either-eye rule, PCR qualification and clinician-coordinated medication-interference handling. Clarified that bilateral eye abnormalities do not duplicate points. Numerical check: anti-SSA 3 plus a qualifying Schirmer item 1 equals 4 regardless of one or both eyes meeting threshold. Revised the figure's threshold to at least four.

Read current pilocarpine dosage, contraindications, precautions and counseling (https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8db0db4f-55ad-46b2-af50-e71b4a763aaa) and cevimeline pharmacokinetics, dosing, contraindications, interactions and counseling (https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0f15cb50-5917-c928-e063-6294a90ab284). Added hepatic-dose and interaction safety gaps, limited evidence for cevimeline escalation, dehydration and driving counseling. Qualified the pilocarpine figure for hepatic impairment. Did not import the label's historical overdose regimen, obsolete pregnancy letter or adverse events of unestablished causality as established drug effects.

These are partial source-based corrections. Remaining module sources, assessment replacement, numerical/visual checks and final UI/build validation are still open.

Added three original cases for bilateral Schirmer scoring, moderate-hepatic pilocarpine initiation and inappropriate cevimeline escalation. Independently checked their keys against the sources above. Bank is temporarily 119 items (116 legacy generated plus three new cases). Alias-loader assessment check passes without hard errors, which does not resolve the overlapping-answer problem in the legacy generator. Preserve these cases when rewriting it.

## Oral prevention and treatment selection

Read the complete two-page Sjogren Foundation oral recommendations (https://sjogrens.org/sites/default/files/inline-files/SF_PCG-Oral_0.pdf). Added the distinction between universal fluoride prevention and selected dental adjuncts, replacing the book's implication of routine daily antimicrobial rinses.

Read EULAR oral-function and systemic-treatment sections in the society-hosted primary guideline (https://revmatologicka-spolecnost.cz/data/files/page/703/SS-lecba-2019.pdf). Added gland-function-based oral treatment selection; existing organ-specific immunotherapy and avoidance of broad immunosuppression for dryness remain consistent. Full ocular and other sections still need reconciliation.

Read BSR executive-summary secretagogue, hydroxychloroquine and lymphoma recommendation excerpts (https://discovery.ucl.ac.uk/id/eprint/10193010/1/Executive%20summary%20BSR%20SD%20guideline.pdf), not the complete guideline. Added explicit guideline-versus-US-label titration and conditional HCQ-trial context. Existing persistent gland-change, complement and cryoglobulin warning concepts are supported; remaining lymphoma details need full source reconciliation. PMC and one publisher endpoint failed; they are not counted as reads.

## Assessment replacement and lifitegrast handling

Replaced the four-variant generator and artificial 100-item minimum with 29 explicit original cases covering its 29 concepts, retaining the three new scoring/safety cases. Each rewritten case keeps the relevant clinical scenario and rationale, with incorrect alternatives that no longer compete as valid generic recommendations. Bank now 32; all ten lessons have case coverage. Full final clinical reading and remaining source reconciliation are still required. Structural check passes with no hard errors/source gaps; topic-size advisories are not clinical findings.

Read Xiidra current label dosing, adverse events and patient-handling sections (https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8589d376-ac10-4ddb-9c53-2e0c8d5675c4). Added the book's foil-pouch handling point and distinction between ordinary altered taste and urgent hypersensitivity symptoms. Existing dosing/lens advice is consistent. No final visual or production-build verification yet.

## Pregnancy scope and assessment alignment

Re-read the ACR reproductive guideline anti-SSA/SSB recommendations (https://acrjournals.onlinelibrary.wiley.com/doi/full/10.1002/art.41191) and SMFM Consult 64 recommendations 11–12 (https://publications.smfm.org/publications/462-society-for-maternal-fetal-medicine-consult-series-64/). Clarified the prior-neonatal-lupus distinction and the SLE scope of the differing SMFM guidance; added an original case testing that boundary. Read the 2016 criteria development/discussion on isolated anti-SSB and added the missing explanation at the antibody case review anchor. Replaced the inaccurate description of ocular staining as a functional test with the named score items. Bank now 33 cases. Full module, visual, UI and production verification remains pending; no completion status change.

## Pharmacology and full-guideline reconciliation

Read the abstract of Yoshioka et al. (1986), https://doi.org/10.1248/cpb.34.4280, for the retained chemistry enrichment. Replaced the unsupported course-material attribution with the actual ophthalmic formulation study and explicitly prevented extrapolation to oral-tablet storage or dose conversion. Re-read the oral pilocarpine label contraindications and clarified their mandatory status; the lesson takeaway now retains the hepatic-initiation exception. Corrected an assessment phrase from kidney bicarbonate to serum bicarbonate.

Located a readable institutional copy of the full BSR guideline, https://discovery.ucl.ac.uk/id/eprint/10189251/1/Ciurtin_keae152.pdf. Read lymphoma predictor evidence on PDF page 8 and HCQ recommendation excerpts on PDF pages 15 and 19. These support the retained lymphoma warning pattern and conditional HCQ trial for significant hypergammaglobulinemia. This is a sectional read, not a claim that all 33 pages were reviewed. Read all ten current figure panels in source; render inspection remains pending. Reviewed assessment cases covering ocular treatment, oral prevention, secretagogues, systemic therapy and lymphoma; no competing correct answers identified in those cases.

## Current preview checks

Confirmed the existing preview on 127.0.0.1:3124 responds with the latest chemistry text and new pregnancy case. Ran /private/tmp/sjogren-figure-check.mjs: all ten lessons at 1440×1000 and 390×844 returned their figures, accepted embedded answers, displayed feedback, and navigated to the correct review anchors. Both viewports returned HTTP 200, no horizontal document overflow and no page errors. Captured all twenty figure images under /private/tmp/sjogren-figure-*.png. Inspected the desktop secretagogue and mobile classification captures; floating tools controls overlap lower content in these element captures. Check normal-scroll readability before visual closeout; the remaining eighteen captures still need inspection. Assessment structure passes for 33 cases with no hard errors or source gaps; content-size advisories remain informational. git diff --check passes. Production build, full figure/readability review, practice flow and final cross-module consistency remain open.

## Visual and application validation; newer PNS guidance

Inspected all twenty desktop/mobile figure captures. Word-by-word center-scroll hit testing found all 2,531 lesson and figure words accessible at both sizes; floating controls do not prevent reading by scrolling. Practice checks passed ten correct answers, scoring, cleared feedback and a new attempt at both sizes. The webpack production build completed with 556 generated pages before the following final source correction.

A current-source check located the Sjogren Foundation PNS guideline, first published December 2025, https://info.sjogrens.org/hubfs/Sj%C3%B6grens_Foundation_PNS_CPG_2026.pdf. Read its introduction, neuropathy definitions, vasculitic evaluation and polyneuropathy recommendation excerpts. Corrected the overly broad implication that rituximab always follows refractory disease; added its urgent first-line role with glucocorticoids for high suspicion of vasculitic neuropathy and distinguished IVIG and symptomatic pain pathways. Updated the existing organ-directed case explanation. Repeat changed-content validation before module closeout.

Cross-module searches examined Sjogren/secretagogue mentions in cholinergic agonist lessons and questions, eye-condition and hyperhidrosis lessons/questions, and Raynaud visuals. Their relevant scope is consistent; Qbrexza and Sofdra current DailyMed contraindication excerpts support the hyperhidrosis Sjogren warning. These targeted checks do not verify those entire adjacent modules.

## Final local closeout

All ten lessons, their summaries, concepts, application text, teaching sections, decision points, embedded checks and review links were read and reconciled. All 33 original assessment cases, four-choice sets, answer indices, explanations and lesson anchors were reviewed. Ten figure panels were checked in source and in twenty desktop/mobile captures. No unresolved material accuracy or coverage issue remains for this module; this is an editorial verification, not independent pharmacist certification.

Book crosswalk for printed 652 / PDF 660: autoimmune and systemic background maps to autoimmune-exocrinopathy and clinical-spectrum; ocular complications, tears and nighttime ointment to dry-eye-foundations; cyclosporine and lifitegrast to anti-inflammatory-eye-therapy; oral complications, substitutes, xylitol and dental prevention to xerostomia-prevention; pilocarpine and cevimeline to secretagogues. Classification, systemic treatment, lymphoma and pregnancy are retained enrichment supported by the primary sources recorded above. No book illustrations or proprietary questions were reproduced.

Independent numerical checks: anti-SSA 3 + qualifying Schirmer 1 = 4; two abnormal eyes still contribute only one Schirmer point. The five items can total 9; neither antibody nor biopsy is individually mandatory, although the three one-point items alone cannot reach 4. Biopsy threshold is per 4 square millimeters. Restasis 0.05% = 0.5 mg/mL and Cequa 0.09% = 0.9 mg/mL. Pilocarpine 5 mg four times daily totals 20 mg/day, with moderate-hepatic initiation 5 mg twice daily = 10 mg/day. Cevimeline 30 mg three times daily totals 90 mg/day. These are product-specific schedules, not equipotent conversions. Pregnancy windows and conditional schedules were checked against ACR; the differing SMFM recommendation is explicitly scoped.

Final validation: alias-loader assessment audit passes for 33 cases with no hard errors or source gaps; ten embedded checks, feedback and review anchors pass on desktop/mobile; practice scoring and retry pass with ten correct responses per viewport. Following the last neuropathy edit, the preview explicitly contained that edit, and all 2,596 lesson/figure words passed center-scroll accessibility checks on both sizes. Inspected final systemic-treatment screenshots. Final webpack production build exited 0 and generated 556 pages; log /private/tmp/sjogren-final-build.log. git diff --check passes. Content-size advisories do not impose a question quota.

Local commit prepared for this module only. Push remains pending exact GitHub destination confirmation required by automatic approval review; no push retry and no deployment. Chapter 46 and the overall curriculum remain incomplete. Next section: psoriasis, printed 653–654 / PDF 661–662; its extracted text has been read, but its page images, current sources and corresponding curriculum have not yet been reconciled.

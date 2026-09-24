# Raynaud phenomenon audit

Status: verified locally. Review date: 2026-09-24. Commit pending; push blocked pending exact-destination approval.

Final scope: ten lessons, 44 teaching sections, ten visuals, ten embedded checks and 33 original case questions. The closeout below supersedes historical pending items; the overall curriculum audit remains incomplete.

## Source and scope

User-confirmed RxPrep 2023, printed page 649 (PDF page 657), chapter 46. Private source stays outside version control. Current curriculum has ten lessons, ten teaching visuals and 33 original case questions. The generated bank has been replaced. Final clinical and presentation verification remain open. Historical checks below retain their original counts.

## Corrections implemented

- PDE5 lesson and visual now explicitly identify riociguat as contraindicated with sildenafil. Previously it appeared alongside interactions requiring assessment, understating the prohibition.
- Added the distinction between treatment of active systemic-sclerosis digital ulcers (PDE5 inhibitors and/or IV iloprost) and prevention of new ulcers with bosentan. Do not generalize the latter recommendation to the ERA class.
- Replaced irrelevant topical-nitrate embedded-check distractors with medication-reconciliation alternatives.

## Evidence

- [Sildenafil DailyMed label](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=5f9ff0bb-5634-437a-96eb-249b910c7e81), sections 4.1 and 4.3; current retrieved page reports revision April 2026. Nitrates/NO donors and GC stimulators including riociguat are contraindications.
- [EULAR systemic sclerosis 2023 update](https://eprints.whiterose.ac.uk/id/eprint/218706/7/PIIS0003496724005843.pdf), table 1 and digital-ulcer discussion, journal pages 31-32. Current recommendations distinguish attack therapy, active-ulcer treatment and new-ulcer prevention.

## Remaining work

- Source-page visual reconciliation and medication-trigger checks are complete as detailed below. Complete the remaining diagnostic/mimic evidence and final treatment/visual cross-checks.
- Assessment bank rewritten: 27 original concept cases preserved and given case-specific alternatives, plus three new cases on riociguat, ulcer treatment versus prevention, and nitrate timing. Thirty cases replace 108 mechanically varied items; all ten lessons remain covered. Complete clinical source reconciliation remains open.
- Audit all additional curriculum claims and cross-module references.
- Desktop/mobile inspection, final build, module ledger update and completed-module commit remain pending.
- Prior automatic approval review blocked GitHub upload pending confirmation of the exact destination. No push attempted in this pass.

## Assessment validation in progress

The focused structural audit imports all 30 cases and reports no source gaps. It fails its fixed minimum of 100 questions and flags fewer than eight questions per lesson. These are quantity thresholds, not evidence of a clinical error; the script is unchanged and the failure remains recorded. No claim of full validation is made. Sildenafil section 4.1 independently checked for the new 24-hour timing case and corresponding lesson clarification.

Local Chrome practice interaction checks passed at 1440x1000 and 390x844: ten-question attempt, correct-answer selection by visible shuffled text, ten correct feedback items, and a fresh attempt with cleared feedback and changed question IDs. This tests application behavior for sampled attempts, not all clinical claims or full visual presentation. Script: `/private/tmp/nas-raynaud-practice-check.mjs` (private QA artifact).

## Book reconciliation: printed 649

Read the private page text and visually inspected the full rendered page, including the drug-trigger box and color-sequence illustration. Book scope maps to recognition/physiology (attack sequence), classification/evaluation (laboratory context), prevention/CCB/PDE5/nitrate/ischemia (treatment), and secondary-disease lessons (triggers).

Discrepancies documented and addressed:
- Concerta is methylphenidate, not an amphetamine. Both are stimulants; the updated lesson correctly identifies methylphenidate and its labeled peripheral-vasculopathy warning.
- The book's unqualified statement about generally absent autoimmune laboratory findings must not be generalized to secondary Raynaud. Existing classification and targeted-workup lessons preserve this distinction, consistent with NIAMS.
- The illustration's blue-phase explanation is oversimplified. Existing physiology text correctly describes deoxygenated blood in poorly perfused tissue; the proprietary image is not reproduced.
- The brief beta-blocker and chemotherapy trigger list now has clinically useful detail: propranolol requires coordinated review without abrupt withdrawal; bleomycin-regimen reports do not establish one causal agent. Added original teaching sections and current primary-label references.

Sources checked 2026-09-24: NIAMS Raynaud overview and diagnosis/treatment pages; Concerta DailyMed section 5.6; propranolol DailyMed withdrawal warning and cardiovascular adverse reactions; bleomycin DailyMed vascular adverse reactions. Exact links are in the module references. No drug doses or arithmetic examples were introduced in these sections.

Added three original secondary-disease cases on methylphenidate-associated wounds, propranolol withdrawal risk, and chemotherapy causality. Current bank count: 33. All ten lesson navigation links, embedded-check feedback and review anchors passed on desktop (1440x1000) and mobile (390x844), with one figure per lesson, HTTP 200, no page errors and no document horizontal overflow. These interaction checks do not replace the remaining full clinical/visual verification. Targeted git diff whitespace check passed.

## Treatment-reference reconciliation and quantity policy

Current nifedipine ER label replaced the old pinned label reference. Added whole-tablet administration and grapefruit counseling without importing hypertension/angina doses as Raynaud doses. Current Aurlumyn label (revised March 2026), sections 1, 2, 5 and 6, confirms the US frostbite indication and infusion hypotension monitoring; the lesson now identifies Raynaud use as off label. No frostbite dosing regimen was repurposed for Raynaud.

The structural checker now reports fewer than 100 questions as a visible `sizeAdvisories` item instead of a hard failure, consistent with the user's instruction that scope and depth determine length. Empty banks, absent lesson coverage, malformed questions, invalid keys, duplicate prompts and other structural errors remain failures. The historical 30-question run above did fail under the old quota; this change does not retroactively change that result or establish clinical completeness. Per-lesson low-count reports remain visible for coverage review.

Structural validation now passes for the 33-case bank with size and low-count advisories still reported. Negative fixtures independently confirmed that an empty bank, an out-of-range answer key, and removal of all longitudinal-care questions each still exit with an error. Targeted diff whitespace checks pass.

Production build completed successfully (Next webpack, exit 0; log `/private/tmp/raynaud-build.log`). This validates compilation and route generation, not clinical accuracy. Final updated-lesson presentation inspection and remaining clinical checks are still required before marking this module verified or committing it as complete.

## Diagnostic criteria and cross-module consistency

Read Maverakis et al., International Consensus Criteria, DOI 10.1016/j.jaut.2014.01.020, especially the final discussion and criteria (primary expert-consensus source). Clarified white/blue biphasic episodes, symmetry as typical rather than mandatory, and low-titer ANA as insufficient alone to establish secondary disease. These nuances extend the book's simplified presentation.

Search of module and question-bank sources found additional explicit Raynaud mentions in Sjogren disease only; inspected those actual paragraphs/concept statements and found the association consistent with the diagnostic consensus. Inspected PAH medication-pathway statements and embedded contraindication check: nitrate/PDE5 and riociguat/PDE5 boundaries agree with the revised Raynaud module. This is targeted consistency review, not verification of the entire Sjogren or PAH modules.

Every one of the 44 teaching sections was scrolled through at desktop and mobile sizes; no empty text or horizontal clipping detected in either viewport. Result file: `/private/tmp/nas-raynaud-scroll-results.json`. Screenshots captured first/last sections per lesson. Final diagnostic wording changed after that run, so its latest rendering remains to be checked.

Final diagnostic wording build passed (exit 0; `/private/tmp/raynaud-build-final.log`). Repeated section checks passed for all 44 sections at both sizes (88 section checks). Inspected final recognition mobile and evaluation desktop captures: text wraps within the content column; persistent tools can overlay an element screenshot and require scrolling, as in the existing site layout. No claim of independent clinical certification. Remaining closeout: consolidate the lesson-level evidence and resolve the tools-over-content presentation observation before final verified status and commit.

## Final lesson evidence and closeout

| Lessons | Reconciliation |
| --- | --- |
| Recognition, physiology, evaluation | RxPrep printed 649, NIAMS overview/diagnosis, and Maverakis diagnostic consensus: episode pattern, oxygenation/reperfusion, primary/secondary distinction, capillaroscopy, focused testing and urgent fixed-ischemia differential. |
| Prevention and longitudinal care | NIAMS self-management guidance: warmth, exposure modification, symptom tracking, tissue protection and urgent deterioration; original application examples preserve these principles. |
| Dihydropyridines | EULAR first-line SSc recommendation plus current nifedipine ER labeling for formulation handling, interactions and hemodynamic adverse effects. |
| PDE5 and topical nitrate | EULAR escalation plus sildenafil label contraindications and warnings, including topical nitrate exposure, riociguat, blood-pressure risks and non-guaranteed nitrate restart timing. |
| Critical ischemia | EULAR separates severe Raynaud escalation, active ulcer treatment and new-ulcer prevention; Aurlumyn label establishes US indication and monitoring. NIAMS supports urgent tissue-damage, infection and wound-care assessment. |
| Secondary disease | Diagnostic consensus and NIAMS systemic associations; Concerta, propranolol and bleomycin primary labels support the specific medication examples and causal/withdrawal cautions. |

All lesson text, key points, applications, visual text and embedded checks were read, with the 33 final assessment cases and keys reconciled to the teaching above. Original case alternatives stay within each clinical decision. There are no dosing calculations or numerical worked examples in this module; the 24-hour nitrate example was independently checked against sildenafil section 4.1. Fixed quantity advisories were considered against topic coverage rather than filled with repeated variants. Every original concept remains represented.

Final presentation observation resolved: `/private/tmp/raynaud-readability.mjs` scrolled each teaching text word into the reading area and hit-tested it. All 1,346 words were unobscured at both viewport sizes; direct viewport screenshots confirm readable wrapping and access to the paragraph previously obscured in the long element capture. Existing fixed controls require normal scrolling but do not prevent access. No layout change was needed.

Validation: final webpack build passed (556 static pages); section bounds/readability checks, all ten lesson navigation/check/review interactions, sampled ten-question practice and reshuffle checks on both sizes, structural bank check, negative validator fixtures, and diff whitespace checks recorded above. Targeted cross-module consistency review is recorded separately and is not a claim of whole-module review elsewhere. No unresolved material issue remains within this Raynaud review. No independent pharmacist review or certification is claimed. Source PDF/extractions remain private; no deployment occurred. Exact GitHub destination confirmation remains the separate push blocker.

# NaS Learn clinical content audit

Started September 24, 2026. Status: **in progress**. Use `sequential-resume.json` for the current source policy, exact next starting point, validation, and release state. Earlier completion records below are historical evidence, not a new verification of the complete curriculum.

## Current instructions and sequential position

The September 30, 2026 request supersedes earlier source/release instructions in this document: new educational claims must be supported by the founder's supplied book; do not add outside sources without explicit authorization. Preserve existing work and its dated evidence. Record discrepancies or material outside the book rather than silently replacing it from general knowledge. The prior NABP references in the preparation guide remain explicitly dated to their September 24 review; they were not refreshed during this book-only pass.

The source is confirmed again as RxPrep 2023, 1,032 PDF pages. Chapter 1 is still open. Its printed-page-7 formula checklist precedes the unfinished drug/diagnostic/terminology references. The quick-guide introduction on printed page 11 (PDF 23) had no verified teaching coverage; the existing preparation guide is now expanded and its six additional checks and four cumulative questions passed source, build, and desktop/mobile verification. `quick-reference-introduction-review.json` records the limited scope.

The first four checklist entries lead to Chapter 9 printed pages 116-119 (PDF 124-127). This is a dependency read to verify the earlier checklist, not a decision to skip Chapters 2-8. The missing foundational unit-conversion module has four lessons, four original figures, four embedded checks, and 25 original assessment questions. `pharmacy-unit-conversions-review.json` records source coverage and independent arithmetic. The module passed source/item review, 38 independent arithmetic checks, the scoped production build, and desktop/mobile QA. Both Chapter 1's remaining checklist and Chapter 9's later material stay open. The following concentration dependency and exact next entry are recorded below.

Commit and push verified logical units to the existing `audit/rxprep-content-2026-09-24` branch, then follow the established review/deployment workflow. The current request authorizes normal deployment progression; the old blanket no-publication instruction and mandatory `[skip netlify]` below no longer govern new units. Do not merge or force-push merely to move this audit forward. Production publication must be verified separately from a branch push.

The starting checkout contained hundreds of unrelated changes and additional unfinished clinical audits. Stage only this pass's changes. Validate the exact scoped candidate in a private temporary checkout as well as its integration with the working Learn section; do not include the unrelated changes in an audit commit.

The concentration dependency now covers Chapter 10 printed pages 128-135 (PDF 136-143). The new concentration module and the scoped PN question clarifications passed source/item review, 79 independent calculations, focused audits, the scoped production build, and desktop/mobile verification. Their evidence is recorded in `pharmacy-concentrations-specific-gravity-review.json`; verification status is in `sequential-resume.json`. Content commits `df630290` and `30d14a7e` are pushed and remote-verified on the existing audit branch. `sequential-release-2026-09-30.json` records the receipt; production publication remains unverified. The following dilution/alligation dependency is tracked below.

Dilution/alligation, checklist entries nine and ten, is now source/item/build/rendered verified from Chapter 10 printed pages 136-139 (PDF 144-147), ending before the Osmolarity heading. `pharmacy-dilution-alligation-review.json` records source/items and validation. Next is osmolarity: introduction printed 139 / PDF 147, formulas printed 140 / PDF 148. 45 independent calculation/ratio checks and the 563-page scoped build passed; desktop/mobile figures, grading, distinct attempts, review anchors and Library/curriculum/sitemap integration were verified on 2026-10-01. Content commit `0685fde9` is pushed and remote-verified on the audit branch; the receipt is `sequential-release-2026-10-01.json`. Whole chapters remain open.

Osmolarity, checklist entry eleven, is source/item/build/rendered verified from Chapter 10 printed139-142/PDF147-150 before Isotonicity. All 25 bank items and four embedded checks were reviewed; 46 independent calculations, the scoped 564-page build, and desktop/mobile figure, grading, distinct-attempt, review-link and Library integration checks passed. `pharmacy-osmolarity-calculations-review.json` records the scope. Content commit `413e0c5d` is pushed and remote-verified on the audit branch; `sequential-release-2026-10-01.json` records both October1 units. The following isotonicity dependency is tracked below.

Isotonicity, checklist entry twelve, is source/item/build/rendered verified from Chapter 10 printed142-144/PDF150-152 through the final E-value example before Moles and Millimoles. All 25 bank items and three embedded checks were source-reviewed; 53 independent calculations passed. Six source-example arithmetic checks, the scoped 565-page build and desktop/mobile figure, grading, distinct-attempt, review-link, prior-figure and Library integration checks also passed. Per-item hashes preserve the exact reviewed questions. `pharmacy-isotonicity-calculations-review.json` records the scope. Content commit `36ea4d8a` is pushed and remote-verified on the audit branch; `sequential-release-2026-10-01.json` records the receipt. Next is Moles and Millimoles at printed144/PDF152.

Moles and millimoles, checklist entry thirteen, is source/item/build/rendered verified from Chapter 10 printed144-146/PDF152-154 through the final reverse-mass example before Milliequivalents. All 21 bank items and three checks were individually reviewed; 44 independent original-content and seven source-example calculations passed. The scoped 566-page build and desktop/mobile figure, grading, distinct-attempt, incorrect feedback/remediation, prior-figure and Library integration checks passed. Per-item hashes preserve the exact reviewed questions. `pharmacy-moles-millimoles-review.json` records the scope. Content commit `5fac513a` is pushed and remote-verified on the audit branch; `sequential-release-2026-10-01.json` records the receipt. Next is Milliequivalents at printed146/PDF154.

## Scope and evidence

The founder confirmed the privately supplied PDF named `NAPLEX 2024.pdf` is the intended source. Its cover and title page identify RxPrep 2023; it contains 1,032 PDF pages. The filename is not its edition. The book, extracted text, and page images must never be committed or distributed. Temporary private extraction is at `/private/tmp/nas-rxprep-audit`; regenerate from the original if unavailable.

Audit all 82 chapters and their substantive subsections, quick-reference material, and all existing NaS pharmacy content, including material outside the book. The baseline contains 222 clinical modules and 29,348 questions, plus standalone guides, legacy study notes, review content, and visuals. Existing completion claims are historical records, not evidence for this audit.

`chapter-ledger.json` tracks book coverage. `module-ledger.json` tracks the complete baseline curriculum. Add subsection records during each chapter read; an empty subsection list means unreviewed, never complete. Page ranges include occasional section dividers and must be checked against the page itself. Record printed and PDF page numbers separately.

Status meanings:

- **unmapped/unreviewed**: no coverage or accuracy conclusion.
- **mapped**: correspondence located; content not yet verified.
- **reviewed**: actual text, tables, figures, calculations, and questions read; findings recorded.
- **corrected**: required edits implemented; validation may remain.
- **verified**: source reconciliation, independent calculation checks, assessment review, cross-module consistency, relevant automated checks, and desktop/mobile review all recorded.

Each completed module needs a dated evidence report identifying book sections, current primary sources, specific corrections or retained claims, question and visual coverage, numerical checks, unresolved issues, validation, and commit/push state. Do not infer question accuracy from IDs, source URLs, lesson length, or structural checks. A chapter remains open until every subsection is reconciled; a module remains open until all of its content is reviewed.

Current guidelines and product-specific labeling override outdated textbook recommendations. Preserve the discrepancy and rationale. Write original teaching material and original questions. Do not copy proprietary tables, illustrations, or assessment items. Keep useful additional curriculum content and verify it against appropriate sources.

## Working and release boundaries

Work is on `audit/rxprep-content-2026-09-24`. The initial worktree contained substantial unrelated edits, including five clinical module files. Preserve them and stage only this audit's changes. Commit and push each completed module as requested. Do not merge to the deployment branch or deploy. Use `[skip netlify]` on every audit commit to suppress automatic branch deployment (Netlify documentation verified September 24, 2026); push authorization does not authorize publication.

Use the bundled Node runtime (the system Node is too old for the existing loader). Application guidance was read from `node_modules/next/dist/docs/01-app/02-guides/building.md` before authoring.

## Current position

- Read chapter 1 preparation text, printed pages 3-9 (PDF 15-21), including formula-checklist scope. The rest of chapter 1 is still open.
- Confirmed a source discrepancy: the textbook's six-area exam blueprint is superseded by NABP's five-domain outline effective May 1, 2025.
- The missing exam-orientation guide is authored and verified locally. This is a short study-skills guide, not a substitute for clinical modules or a claim that chapter 1's drug lists, diagnostic tests, terms, abbreviations, or formulas have been reviewed.
- Guide committed as `381dd5e`. Push rejected by automatic approval review; exact-destination approval requested and pending. Do not retry or route around the rejection without authorization.
- Chapter 1 drug-list and formula text read through printed page 23; table visual/current-label verification remains pending. Formula review led to the sunscreen module and its corresponding chapter 39 subsection. The resulting sunscreen audit is now locally verified; see its module evidence report.
- Diagnostic quick-reference mapping led to the RA subsection (printed638-643/PDF646-651). RA is verified locally:12 lessons,109 questions, source discrepancies and full validation documented in rheumatoid-arthritis.md. Chapter46 remains open.
- SLE and MS are verified locally; MS has14 lessons and144 questions. Raynaud is now verified locally (ten lessons, 44 teaching sections, 33 original cases). Celiac disease is verified locally with ten lessons and 36 original cases. Myasthenia gravis is verified locally with ten lessons and 38 original cases. Sjogren disease is verified locally with ten lessons and 33 original cases. Psoriasis is now verified locally with ten lessons and 49 original cases. Continue the remaining chapter46 material, preserving chapter1 terminology, abbreviations and unresolved reference mappings as open work. Sunscreen is verified locally (119 questions, ten lessons, desktop/mobile and build checks passed). Continue chapter 2 onward without losing the additional-curriculum backlog.
- Important source finding: PDF offsets change within the book. Do not use a global printed-to-PDF offset. Chapter ledger PDF ranges are deliberately unset until verified.

This is an evidence-based editorial audit, not independent pharmacist certification.

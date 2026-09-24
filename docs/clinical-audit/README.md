# NaS Learn clinical content audit

Started September 24, 2026. Status: **in progress**. One clinical module, Sunscreen and Photoprotection, has passed this new audit locally; the remaining curriculum is unverified.

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
- Next: resume chapter 1 diagnostic tests, terminology, abbreviations, and all unresolved reference mappings. Sunscreen is verified locally (119 questions, ten lessons, desktop/mobile and build checks passed). Continue chapter 2 onward without losing the additional-curriculum backlog.
- Important source finding: PDF offsets change within the book. Do not use a global printed-to-PDF offset. Chapter ledger PDF ranges are deliberately unset until verified.

This is an evidence-based editorial audit, not independent pharmacist certification.

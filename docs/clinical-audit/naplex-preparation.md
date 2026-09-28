# NAPLEX preparation guide audit

Review date: 2026-09-24. Guide status: verified locally. Book chapter 1 status: partial; clinical reference sections remain open.

## Coverage

Read RxPrep 2023 printed pages 3-9, PDF pages 15-21. Visually inspected PDF pages 20-21 to verify blueprint and exam-format extraction. Formula checklist coverage was inventoried, not clinically verified. Vendor-specific course instructions are not reproduced. The new original guide covers study planning, current exam orientation, calculation practice, interpretation of learning feedback, and official-source navigation. It is a standalone guide, not a clinical module with a 100-question bank.

Files: `src/data/naplexPreparationGuide.js`, registration in `src/data/pharmacyLearning.js`, and the standalone guide reader's review label. The label now says "Content reviewed" rather than implying a separate clinical reviewer.

## Source reconciliation

Sources retrieved directly on 2026-09-24:

1. https://nabp.pharmacy/wp-content/uploads/NAPLEX-Content-Outline.pdf — effective May 1, 2025; five domains, approximate weights 25/25/40/5/5. Replaces the six-area textbook blueprint. The guide paraphrases the domains and links to the full outline.
2. https://nabp.pharmacy/programs/examinations/naplex/test-day-information/ — six hours, 225 questions, pass/fail reporting; official links for preparation and test-day requirements.
3. https://read.nxtbook.com/nabp/bulletin/naplex_mpje_bulletin/taking_your_exams.html — supplied calculators and prohibition on personal calculators; current bulletin for operational rules and exam integrity.

Study workflow is presented as an educational method, not a validated readiness algorithm. No NaS score threshold predicts passing. Older book timing, board-specific law-exam claims, and vendor completion criteria are not represented as current universal requirements. Current detailed navigation, break, and jurisdictional rules are linked to the responsible authority rather than frozen from the 2023 book.

## Item and calculation review

All seven guide sections and all six answer explanations were individually reviewed. Checks cover the current outline, transfer to unfamiliar cases, a unit-based volume calculation, overall pacing versus a per-item limit, limits of practice scores, and product-specific source verification. No proprietary exam questions or illustrations are used.

Independent arithmetic:

- Domain weights: 25 + 25 + 40 + 5 + 5 = 100%.
- Pacing: 6 x 60 / 225 = 1.6 minutes = 96 seconds; expressly an average, not an item deadline.
- Worked example: 120 mg / 4 mL = 30 mg/mL; 75 / 30 = 2.5 mL; reverse-check 2.5 x 30 = 75 mg.
- Learning check: 180 mg / 6 mL = 30 mg/mL; 45 / 30 = 1.5 mL; reverse-check 1.5 x 30 = 45 mg.
- Neither arithmetic example is presented as an appropriate patient dose.

## Validation

- Production build passed with the new guide, 556 generated pages. Subsequent review-label edit compiled in the local development preview.
- Browser checks at 1440 x 1000 and 390 x 844 returned HTTP 200, six working answer disclosures, no horizontal overflow, and no page JavaScript errors.
- Inspected full-page and normal-size screenshots for desktop/mobile text and layout. Source-page and browser screenshots are private temporary QA artifacts, not committed.
- Guide section IDs are unique; arithmetic was recomputed in an independent Node assertion run.
- `git diff --check` passed.
- Local preview's signed-out member request returned 401 as expected; member functionality was not changed by this work.

## Remaining work

This verifies only the new orientation guide. Chapter 1 drug lists, formulas, diagnostic tests, medical terminology, and abbreviations remain unreviewed. All 222 baseline clinical modules remain pending this new audit. No clinical certification or whole-curriculum completion is implied.

Commit/push evidence is recorded in Git history and the audit checkpoint log. No deployment is authorized. Audit commits use `[skip netlify]` following https://docs.netlify.com/deploy/manage-deploys/manage-deploys-overview/ so branch pushes do not trigger Netlify publication.

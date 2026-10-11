import { cvaRelease } from "../src/data/cvaRelease.mjs";
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { researchTypeGroups, availableResearchTypes, matchesResearchType, getResearchPdfUrl, getResearchOpeningLabel, validateResearchTaxonomy } from '../src/data/researchTaxonomy.mjs';
const context = vm.createContext({ cvaRelease, validateResearchTaxonomy, availableResearchTypes, cortexPaperSections: [], cortexNativeVisualsBySection: {} });
for (const name of ['bbbRelease', 'brcaRepeatabilityRelease', 'atlasRelease', 'denialsRelease', 'aiHospitalBillingEvidence', 'aiHospitalBillingEssay', 'researchLibrary']) {
  const source = readFileSync(new URL(`../src/data/${name}.js`, import.meta.url), 'utf8').replace(/^import .*;\n/gm, '').replace(/export /g, '');
  vm.runInContext(source, context);
}
const items = vm.runInContext('researchItems', context);
assert.equal(new Set(items.map(item => item.slug)).size, items.length);
for (const item of items) {
  assert.equal(Object.keys(researchTypeGroups).filter(group => matchesResearchType(item, group)).length, 1, `${item.slug}: exactly one format group`);
  assert.ok(!/computational/i.test(item.area), `${item.slug}: concise area`);
}
const expected = {
  'ai-hospital-billing-evidence': ['Essays', 'Healthcare Operations'],
  'introducing-nas-workspace': ['Releases', 'Scientific Infrastructure'],
  'blood-brain-barrier-prediction-audit': ['Publications', 'Drug Discovery'],
  'pam50-technical-repeatability': ['Publications', 'Oncology'],
  'alphagenome-atlas-rnu4-2': ['Research Notes', 'Genomics'],
  'introducing-nas-denials': ['Releases', 'Healthcare Operations'],
  'introducing-nas-cortex': ['Publications', 'Scientific Infrastructure'],
  'chicago-our-chosen-home': ['Essays', 'Institutional'],
  'why-nas-exists': ['Essays', 'Institutional'],
  'why-hyde-park': ['Essays', 'Institutional'],
  'clinvar-conflict-atlas': ['Publications', 'Genomics'],
};
assert.equal(items.length, Object.keys(expected).length);
for (const item of items) {
  const [group, area] = expected[item.slug];
  assert.ok(matchesResearchType(item, group), item.slug);
  assert.equal(item.area, area);
}
assert.ok(!availableResearchTypes(items).includes('Model Cards'));
assert.ok(matchesResearchType({type: 'Model Card'}, 'Publications'));
assert.deepEqual(availableResearchTypes(items), ['All', 'Publications', 'Research Notes', 'Releases', 'Essays']);
for (const type of ['Release', 'Institutional Essay']) {
  assert.equal(getResearchPdfUrl({type, citable: true, pdfUrl: '/example.pdf'}), null, `${type}: no PDF action even if citable`);
}
for (const type of ['Publication', 'Research Report', 'Technical Report', 'White Paper', 'Research Note', 'Model Card']) {
  assert.equal(getResearchPdfUrl({type, pdfUrl: '/example.pdf'}), '/example.pdf');
  assert.equal(getResearchPdfUrl({type}), null, `${type}: no placeholder for a missing paper`);
}
for (const item of items) {
  assert.equal(getResearchPdfUrl(item), matchesResearchType(item, 'Releases') || matchesResearchType(item, 'Essays') ? null : item.pdfUrl || null);
}
console.log(items.map(item => `${item.shortTitle}: ${item.type} / ${item.area}`).join('\n'));
console.log(`All ${items.length} entries classified; every entry reachable through exactly one format filter.`);

const drafts = vm.runInContext("researchDrafts", context);
assert.equal(drafts.length, 0);
assert.equal(items.filter(item => item.slug === "clinvar-conflict-atlas").length, 1);
assert.equal(cvaRelease.publicationStatus, "published");
assert.equal(vm.runInContext('getResearchItem("clinvar-conflict-atlas").slug', context), cvaRelease.slug);
for (const type of ["Publications", "Publication", "Research Report", "Technical Report", "White Paper", "Research Notes", "Research Note", "Model Card"]) assert.equal(getResearchOpeningLabel({type}), "Abstract");
for (const type of ["Releases", "Release", "Essays", "Institutional Essay"]) assert.equal(getResearchOpeningLabel({type}), "Summary");
assert.equal(getResearchOpeningLabel({type:"Publications", summaryLabel:"Executive summary"}), "Executive summary");
console.log("CVA is the only newly published entry; scientific abstracts and current public taxonomy pass.");

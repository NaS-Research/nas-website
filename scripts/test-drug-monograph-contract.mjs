import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { coreDrugs } from '../src/data/drugLibrary.js';
import { acetaminophen } from '../src/data/drugMonographs/acetaminophen.js';
import { validateMonograph } from '../src/data/drugMonographs/schema.js';
import { reviewedDrugMonographs } from '../src/data/drugMonographs/index.js';
const ledger = JSON.parse(readFileSync(new URL('../docs/drug-library/completion-audit.json', import.meta.url)));
const sha = file => createHash('sha256').update(readFileSync(new URL(file, import.meta.url))).digest('hex');
test('APAP content stays fixed and the current production presentation is preserved', () => {
 assert.equal(sha('../src/data/drugMonographs/acetaminophen.js'), ledger.immutableBlueprint.sha256);
 assert.equal(sha('../src/components/learn/DrugMonograph.jsx'), ledger.immutableBlueprint.rendererSha256);
 for (const [file, hash] of Object.entries(ledger.immutableBlueprint.presentationHashes || {})) assert.equal(sha(`../${file}`), hash);
 assert.deepEqual(validateMonograph(acetaminophen), []);
});
test('Every library drug appears exactly once, with ten-drug batches and final remainder', () => {
 assert.equal(ledger.total, coreDrugs.length);
 assert.deepEqual(ledger.drugs.map(d => d.slug), coreDrugs.map(d => d.slug));
 assert.equal(new Set(ledger.drugs.map(d => d.slug)).size, coreDrugs.length);
 const batches = new Map();
 for (const drug of ledger.drugs.filter(d => d.slug !== 'acetaminophen')) batches.set(drug.batch, [...(batches.get(drug.batch) || []), drug]);
 assert.equal(batches.size, 30);
 for (const [batch, drugs] of batches) assert.equal(drugs.length, batch === 30 ? 9 : 10);
});
test('Missing citations and incomplete sections cannot pass the presentation contract', () => {
 const broken = structuredClone(acetaminophen);
 broken.sections[0].blocks[0].sources = ['nonexistent'];
 broken.sections.pop();
 broken.facts[0] = {label: 'Class', value: 'Not a tuple'};
 broken.sections[0].blocks[0].links = [{title: 'Label', url: 'https://example.com/bad id'}];
 broken.sources[0].url = 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bad id';
 assert.ok(validateMonograph(broken).some(error => error.includes('unknown source')));
 assert.ok(validateMonograph(broken).some(error => error.includes('eight clinical sections')));
 assert.ok(validateMonograph(broken).some(error => error.includes('URL contains whitespace')));
 assert.ok(validateMonograph(broken).some(error => error.includes('invalid link title or whitespace URL')));
 assert.ok(validateMonograph(broken).some(error => error.includes('Hero requires three fact rows')));
});
test('Every routed monograph has a complete source audit and follows the APAP contract', () => {
 for (const [slug, monograph] of Object.entries(reviewedDrugMonographs)) {
  assert.equal(monograph.slug, slug);
  assert.deepEqual(validateMonograph(monograph), [], slug);
  const audit = JSON.parse(readFileSync(new URL(`../docs/drug-library/${slug}-review.json`, import.meta.url)));
  assert.equal(audit.status, 'source_reviewed', slug);
  assert.ok(audit.sources?.length, `${slug}: no source records`);
  for (const source of monograph.sources) assert.ok(audit.sources.some(reviewed => reviewed.id === source.id && reviewed.url === source.url), `${slug}/${source.id}: displayed reference not in source audit`);
  const assertions = audit.assertionToSource || audit.assertionToSourceMap || audit.assertion_to_source || audit.assertionMap || audit.assertion_map || audit.assertion_source_map;
  assert.ok(assertions && Object.keys(assertions).length, `${slug}: no assertion mappings`);
  for (const key of ['materialErrors','materialGaps','unresolvedMaterialGaps','material_errors','material_gaps','unresolved_material_errors']) assert.ok(!audit[key]?.length, `${slug}: unresolved ${key}`);
 }
});
test('Completion claims require section evidence, validation, and deployment receipts', () => {
 for (const drug of ledger.drugs) {
  if (!['verified', 'deployed'].includes(drug.status)) continue;
  assert.ok(drug.sourceAudit?.length, `${drug.slug}: no assertion/source audit`);
  for (const section of ledger.immutableBlueprint.sectionOrder) assert.equal(drug.sectionAudit[section], 'verified', `${drug.slug}/${section}`);
  assert.equal(drug.checks?.build, 'passed');
  assert.equal(drug.checks?.renderedDesktop, 'passed');
  assert.equal(drug.checks?.renderedMobile, 'passed');
  assert.deepEqual(drug.materialErrors, []);
  if (drug.status === 'deployed') {
   assert.match(drug.commit || '', /^[a-f0-9]{40}$/);
   assert.equal(drug.deployment?.commit, drug.commit);
   assert.equal(drug.deployment?.status, 'verified');
  }
 }
});

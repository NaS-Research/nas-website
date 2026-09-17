import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { researchTypeGroups, availableResearchTypes, matchesResearchType } from '../src/data/researchTaxonomy.mjs';
const context = vm.createContext({ availableResearchTypes, cortexPaperSections: [], cortexNativeVisualsBySection: {} });
for (const name of ['brcaRepeatabilityRelease', 'atlasRelease', 'denialsRelease', 'researchLibrary']) {
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
  'pam50-technical-repeatability': ['Publications', 'Oncology'],
  'alphagenome-atlas-rnu4-2': ['Research Notes', 'Genomics'],
  'introducing-nas-denials': ['Publications', 'Healthcare Operations'],
  'introducing-nas-cortex': ['Publications', 'Scientific Infrastructure'],
  'chicago-our-chosen-home': ['Releases', 'Institutional'],
  'why-nas-exists': ['Essays', 'Institutional'],
  'why-hyde-park': ['Essays', 'Community'],
};
assert.equal(items.length, Object.keys(expected).length);
for (const item of items) {
  const [group, area] = expected[item.slug];
  assert.ok(matchesResearchType(item, group), item.slug);
  assert.equal(item.area, area);
}
assert.ok(!availableResearchTypes(items).includes('Model Cards'));
assert.ok(availableResearchTypes([...items, {type: 'Model Card'}]).includes('Model Cards'));
console.log(items.map(item => `${item.shortTitle}: ${item.type} / ${item.area}`).join('\n'));
console.log('All seven entries classified; every entry reachable through exactly one format filter.');

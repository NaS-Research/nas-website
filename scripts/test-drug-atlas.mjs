import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { drugAtlasLessons } from '../src/data/drugAtlas.js';
const anatomy = JSON.parse(readFileSync(new URL('../public/learn/body-atlas/structures.json', import.meta.url)));

test('Every teaching region resolves to existing anatomy or declares its visual proxy', () => {
  for (const lesson of drugAtlasLessons) {
    assert.equal(new Set(lesson.regions.map(region => region.id)).size, lesson.regions.length);
    for (const region of lesson.regions) {
      assert.equal(region.position.length, 3);
      assert.ok(region.position.every(Number.isFinite));
      assert.ok(region.evidence.length);
      assert.ok(region.proxy || anatomy.some(item => item.layerId === region.layer && new RegExp(region.match, 'i').test(item.name)), `${lesson.id}/${region.id} needs an anatomical target`);
      assert.ok(region.correct >= 0 && region.correct < region.answers.length);
      assert.equal(new Set(region.answers).size, region.answers.length);
    }
  }
});
test('Scenario overlays refer only to regions available for that medicine', () => {
  for (const lesson of drugAtlasLessons) {
    const ids = new Set(lesson.regions.map(region => region.id));
    assert.ok(lesson.scenarios.find(item => item.id === 'baseline'));
    for (const scenario of lesson.scenarios) assert.ok(scenario.regions.every(id => ids.has(id)));
    assert.match(lesson.source, /^https:\/\/dailymed\.nlm\.nih\.gov\//);
  }
});
test('Dicyclomine trial rates preserve drug/placebo pairs and exposure context', () => {
  const trial = drugAtlasLessons.find(item => item.id === 'dicyclomine').trial;
  assert.deepEqual(trial.rows.map(row => [row.drug, row.placebo]), [[40,5],[33,5],[27,2],[14,6],[9,1],[7,1],[6,2]]);
  assert.match(trial.context, /160 mg\/day/);
  assert.match(trial.context, /not personal probabilities/);
  assert.ok(!drugAtlasLessons.find(item => item.id === 'albuterol').trial, 'Do not transfer trial rates between drugs');
});

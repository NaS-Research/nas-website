// Run: node --experimental-loader ./scripts/esm-alias-loader.mjs --test scripts/test-pharmacy-visual-scope.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { fosfomycinPharmacologyModule } from '../src/data/modules/fosfomycinPharmacology.js';
import { anemiaModule } from '../src/data/modules/anemia.js';
import { sickleCellDiseaseModule } from '../src/data/modules/sickleCellDisease.js';
import { sunscreenPhotoprotectionModule } from '../src/data/modules/sunscreenPhotoprotection.js';

const page = fs.readFileSync(new URL('../src/app/learn/pharmacy/modules/[slug]/page.jsx', import.meta.url), 'utf8');
const routes = [
  [fosfomycinPharmacologyModule, 'FosfomycinPharmacologyVisual', 'fosfomycinPharmacologyVisualTypes'],
  [anemiaModule, 'AnemiaVisual', 'anemiaVisualTypes'],
  [sickleCellDiseaseModule, 'SickleCellDiseaseVisual', 'sickleCellDiseaseVisualTypes'],
  [sunscreenPhotoprotectionModule, 'SunscreenPhotoprotectionVisual', 'sunscreenPhotoprotectionVisualTypes'],
].map(([owner, component, typesName]) => {
  const source = fs.readFileSync(new URL(`../src/components/learn/${component}.jsx`, import.meta.url), 'utf8');
  const array = source.match(new RegExp(`export const ${typesName} = (\\[[\\s\\S]*?\\]);`));
  assert.ok(array, `${component}: exported visual keys`);
  const types = vm.runInNewContext(array[1]);
  // Execute the actual JSX dispatch condition so dropping a guard fails the test.
  const dispatch = page.match(new RegExp(`\\{([^{}\\n]+?) && <${component} type=\\{submodule.visual\\} />\\}`));
  assert.ok(dispatch, `${component}: page dispatch`);
  return { owner, component, types, matches(module, submodule) {
    return vm.runInNewContext(dispatch[1], { module, submodule, [typesName]: types });
  } };
});

test('fosfomycin lessons 9 and 10 render only their intended visual', () => {
  const lessons = fosfomycinPharmacologyModule.submodules;
  assert.equal(lessons[8].visual, 'special-populations');
  assert.equal(lessons[9].visual, 'integration');
  for (const lesson of lessons.slice(8)) {
    assert.deepEqual(routes.filter(route => route.matches(fosfomycinPharmacologyModule, lesson)).map(route => route.component), ['FosfomycinPharmacologyVisual']);
  }
});

for (const route of routes) {
  test(`${route.owner.slug}: every existing lesson retains its intended visual`, () => {
    for (const lesson of route.owner.submodules) {
      assert.ok(route.matches(route.owner, lesson), `${lesson.slug}: intended visual missing`);
      assert.deepEqual(routes.filter(candidate => candidate.matches(route.owner, lesson)).map(candidate => candidate.component), [route.component], `${lesson.slug}: cross-module visual`);
    }
  });
  test(`${route.component}: recognized keys cannot leak into another module`, () => {
    for (const owner of [...routes.map(candidate => candidate.owner), { slug: 'unrelated-module' }]) {
      if (owner.slug === route.owner.slug) continue;
      for (const visual of route.types) {
        assert.equal(route.matches(owner, { visual }), false, `${owner.slug}: leaked ${visual}`);
      }
    }
    assert.equal(route.matches(route.owner, { visual: 'unknown-visual' }), false);
    assert.equal(route.matches(route.owner, {}), false);
  });
}

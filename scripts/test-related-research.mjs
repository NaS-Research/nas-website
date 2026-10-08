import assert from 'node:assert/strict';
import { researchItems } from '../src/data/researchLibrary.js';
import { publicationArtwork } from '../src/data/publicationArtwork.js';
import { researchTopics } from '../src/data/researchTopics.mjs';
import { getRelatedResearch } from '../src/lib/relatedResearch.mjs';
for (const item of researchItems) {
  assert(researchTopics[item.slug]?.length);
  const related = getRelatedResearch(item, researchItems);
  assert.equal(related.length, 3);
  assert.equal(new Set(related.map(x => x.slug)).size, 3);
  assert(!related.some(x => x.slug === item.slug));
  assert(related.every(x => publicationArtwork[x.slug]));
  assert.deepEqual(related, getRelatedResearch(item, [...researchItems].reverse()));
  console.log(item.slug, '=>', related.map(x => x.slug).join(', '));
}
const billing = researchItems.find(x => x.slug === 'ai-hospital-billing-evidence');
assert.equal(getRelatedResearch(billing, researchItems)[0].slug, 'introducing-nas-denials');
const hydePark = researchItems.find(x => x.slug === 'why-hyde-park');
assert.equal(getRelatedResearch(hydePark, researchItems)[0].slug, 'chicago-our-chosen-home');
assert.equal(getRelatedResearch({slug:'new',area:'new'}, researchItems).length,3);
assert.deepEqual(getRelatedResearch(billing,[billing]),[]);
console.log('Related selection checks passed for every article and future-article fallbacks.');

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {getRelatedResearch} from '../src/lib/relatedResearch.mjs';
import {researchItems} from '../src/data/researchLibrary.js';
import {anatomyStudioReleasePreview as anatomy} from '../src/data/anatomyStudioReleasePreview.mjs';
import {publicationArtwork} from '../src/data/publicationArtwork.js';
test('Anatomy receives three distinct public research suggestions with artwork',()=>{
 const related=getRelatedResearch(anatomy,researchItems);
 assert.equal(related.length,3);assert.equal(new Set(related.map(x=>x.slug)).size,3);
 assert(related.every(x=>publicationArtwork[x.slug]&&!x.noindex&&x.publicationStatus!=='draft'));
 assert(!related.some(x=>x.slug===anatomy.slug));
 assert(related.some(x=>x.slug==='introducing-nas-cortex'));assert(related.some(x=>x.slug==='introducing-nas-workspace'));
});
test('draft, private, unlisted and noindex records cannot be recommended or influence ranking',()=>{
 const original=getRelatedResearch(anatomy,researchItems);
 for(const flag of [{noindex:true},{publicationStatus:'draft'},{private:true},{unlisted:true}]){
  const hidden={slug:'hidden-test',title:'Hidden',area:anatomy.area,topics:anatomy.topics,...flag};
  assert.deepEqual(getRelatedResearch(anatomy,[...researchItems,hidden]),original);
 }
});
test('all current research receives deterministic recommendations without self-links',()=>{
 for(const article of researchItems){
  const a=getRelatedResearch(article,researchItems),b=getRelatedResearch(article,[...researchItems].reverse());
  assert.equal(a.length,3);assert.deepEqual(a,b);assert(!a.some(x=>x.slug===article.slug));
 }
});
test('existing topical pairings and empty-list behavior remain',()=>{
 const billing=researchItems.find(x=>x.slug==='ai-hospital-billing-evidence');
 assert.equal(getRelatedResearch(billing,researchItems)[0].slug,'introducing-nas-denials');
 assert.deepEqual(getRelatedResearch(anatomy,[]),[]);
 assert.deepEqual(getRelatedResearch(anatomy,researchItems,0),[]);
});
test('shared component is after article content and before Footer; preview stays unlisted',()=>{
 const source=fs.readFileSync(new URL('../src/components/research/anatomy-release-preview/AnatomyStudioReleasePreview.jsx',import.meta.url),'utf8');
 assert.equal((source.match(/<RelatedResearch /g)||[]).length,1);
 assert(source.indexOf('<RelatedResearch ')>source.indexOf('</article>'));
 assert(source.indexOf('<RelatedResearch ')<source.indexOf('<Footer'));
 assert.equal(anatomy.noindex,true);assert.equal(anatomy.publicationStatus,'draft');
 assert(!researchItems.some(x=>x.slug===anatomy.slug));
});

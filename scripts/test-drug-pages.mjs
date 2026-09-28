import test from 'node:test';
import assert from 'node:assert/strict';
import {coreDrugs} from '../src/data/drugLibrary.js';
import {drugPageGroups,labelGroups,normalizeLabelText,labelParagraphs} from '../src/data/drugPageSections.js';
test('Every library route has a unique slug and every study field is represented',()=>{
 assert.equal(new Set(coreDrugs.map(d=>d.slug)).size,coreDrugs.length);
 const keys=drugPageGroups.flatMap(g=>g.sections.map(([key])=>key));
 for(const drug of coreDrugs){assert.ok(drug.generic&&drug.slug);if(!drug.brand)continue;assert.ok(drug.mechanism);for(const [key,value]of Object.entries(drug)){if(Array.isArray(value))assert.ok(keys.includes(key),`${drug.slug}: missing ${key}`);}}
});
test('Label formatting retains paragraph boundaries, doses and every word',()=>{
 const original=['Do not use 2.5 mg. Review the label.','Second paragraph. '+('Read the specific product label. '.repeat(80))];
 const normalized=normalizeLabelText(original);assert.ok(normalized.includes('\n\n'));
 assert.equal(labelParagraphs(normalized).join(' ').replace(/\s+/g,' ').trim(),original.join(' ').replace(/\s+/g,' ').trim());
 assert.ok(labelParagraphs(normalized).length>3);assert.deepEqual(labelParagraphs(''),[]);
});
test('Label groups cover each topic exactly once and keep boxed warnings first',()=>{
 const keys=labelGroups.flatMap(g=>g.keys);assert.equal(keys.length,new Set(keys).size);assert.equal(keys[0],'boxed_warning');assert.ok(keys.includes('dosage_and_administration'));
});
console.log(`Audited ${coreDrugs.length} drug routes, ${coreDrugs.filter(d=>d.brand).length} study guides.`);

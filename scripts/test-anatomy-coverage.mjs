import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {anatomyCollections,anatomySystems} from '../src/data/anatomyCollections.js';
import {organStructures} from '../src/data/anatomyLessons.js';
const catalog=JSON.parse(readFileSync(new URL('../public/learn/body-atlas/structures.json',import.meta.url)));
test('Gland groups select organs, not similarly named arteries or muscles',()=>{
 const counts={pituitary:2,pineal:1,thyroid:1,parathyroids:4,adrenals:2,parotid:4,submandibular:2,sublingual:2,lacrimal:2,hypothalamus:1};
 for(const [id,count] of Object.entries(counts)){assert.equal(organStructures(anatomyCollections.find(g=>g.id===id),catalog).length,count,id);}
});
test('Collections have unique identifiers and valid systems; missing female anatomy is not falsely mapped',()=>{
 assert.equal(new Set(anatomyCollections.map(x=>x.id)).size,anatomyCollections.length);
 for(const group of anatomyCollections)assert(anatomySystems.some(s=>s.id===group.system));
 for(const id of ['ovaries','uterus','uterine-tubes','mammary'])assert.equal(organStructures(anatomyCollections.find(g=>g.id===id),catalog).length,0,id);
});
test('Original-source lymphoid organs are mapped separately from nervous ganglia',()=>{
 assert.equal(organStructures(anatomyCollections.find(g=>g.id==='spleen'),catalog).length,1);
 assert.equal(organStructures(anatomyCollections.find(g=>g.id==='thymus'),catalog).length,2);
 const nodes=organStructures(anatomyCollections.find(g=>g.id==='lymph-nodes'),catalog);assert(nodes.length>10);assert(nodes.every(n=>n.layerId==='lymphatic'));
});

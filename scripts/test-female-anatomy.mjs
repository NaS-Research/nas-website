import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
import {anatomyCollections} from '../src/data/anatomyCollections.js';import {organStructures} from '../src/data/anatomyLessons.js';
const catalog=JSON.parse(readFileSync('public/learn/body-atlas/structures-female.json'));
test('Female organ navigation resolves real reproductive anatomy and no male structures',()=>{
 for(const id of ['ovaries','uterus','uterine-tubes','vagina','skin'])assert.ok(organStructures(anatomyCollections.find(x=>x.id===id),catalog).length,id);
 for(const id of ['testes','prostate','penis'])assert.equal(organStructures(anatomyCollections.find(x=>x.id===id),catalog).length,0,id);
});
test('Every female catalog entry maps to one exported source mesh, with no extraction markers',()=>{
 const b=readFileSync('public/learn/models/body/refined/female.glb');const glb=JSON.parse(b.subarray(20,20+b.readUInt32LE(12)));
 const nodes=glb.nodes.filter(n=>n.mesh!==undefined);assert.equal(nodes.length,catalog.length);assert.equal(new Set(catalog.map(x=>x.id)).size,catalog.length);
 for(const entry of catalog){const n=nodes.find(n=>n.extras?.atlasSourceId===entry.id);assert.ok(n,entry.id);assert.equal(n.extras.atlasLayer,entry.layerId);assert.ok(Number(entry.id.split(':')[1])<970);}
 assert.ok(b.length<20*1024*1024);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,statSync} from 'node:fs';
function glb(path){const b=readFileSync(new URL(path,import.meta.url));return JSON.parse(b.subarray(20,20+b.readUInt32LE(12)).toString());}
for(const file of ['body','nervous','visceral','cardiovascular','lymphatic'])test(`${file} refinement preserves every source structure and includes baked maps`,()=>{
 const original=glb(`../public/learn/models/body/${file}.glb`),refined=glb(`../public/learn/models/body/refined/${file}.glb`);
 const nodes=new Map(refined.nodes.filter(n=>n.extras?.atlasSourceId).map(n=>[n.extras.atlasSourceId,n]));
 for(const [index,node] of original.nodes.entries()){if(node.mesh===undefined)continue;const replacement=nodes.get(`${file}:${index}`);assert(replacement,`Missing ${file}:${index} ${node.name}`);assert(replacement.mesh!==undefined);}
 const tissues=refined.materials.filter(m=>/ tissue$/.test(m.name));if(['visceral','cardiovascular'].includes(file))assert(tissues.length>=4);assert(refined.materials.some(m=>/^Atlas /.test(m.name)));
 for(const m of refined.materials.filter(m=>/^Atlas /.test(m.name))){assert(m.normalTexture);assert(m.pbrMetallicRoughness.baseColorTexture);assert(m.pbrMetallicRoughness.metallicRoughnessTexture);}
 for(const [index,node] of original.nodes.entries()){if(file==='body'&&node.mesh!==undefined)assert.equal(nodes.get(`${file}:${index}`).extras?.type,node.extras?.type,'Preserve skeletal/muscular identity');}
 for(const m of tissues){assert(m.normalTexture);assert(m.pbrMetallicRoughness.baseColorTexture);assert(m.pbrMetallicRoughness.metallicRoughnessTexture);}
 assert(refined.extensionsUsed.includes('KHR_draco_mesh_compression'));assert(statSync(new URL(`../public/learn/models/body/refined/${file}.glb`,import.meta.url)).size<20*1024*1024);
});

import {readFileSync,writeFileSync} from 'node:fs';
import {anatomyCollections} from '../src/data/anatomyCollections.js';
import {assemblyParts,organAssemblies} from '../src/data/organAssemblies.js';
const catalog=JSON.parse(readFileSync('public/learn/body-atlas/structures.json'));
const studies=anatomyCollections.filter(g=>organAssemblies[g.id]).map(g=>({id:g.id,name:g.name,parts:assemblyParts(g,catalog).map(p=>p.id)}));
writeFileSync('design/anatomy/organ-study-manifest.json',JSON.stringify(studies,null,2));
console.log(studies.map(s=>`${s.name}: ${s.parts.length} source structures`).join('\n'));

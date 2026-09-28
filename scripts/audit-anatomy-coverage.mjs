import {readFileSync,writeFileSync} from 'node:fs';
import {anatomyCollections,anatomySystems} from '../src/data/anatomyCollections.js';
import {organStructures} from '../src/data/anatomyLessons.js';
const catalog=JSON.parse(readFileSync(new URL('../public/learn/body-atlas/structures.json',import.meta.url)));
const groups=anatomyCollections.map(group=>({id:group.id,name:group.name,system:group.system,parts:organStructures(group,catalog).map(p=>({id:p.id,name:p.name})),status:organStructures(group,catalog).length?'available':'missing'}));
const report={scope:'Named navigation targets in the shipped atlas; not exhaustive anatomical completeness.',structures:catalog.length,systems:anatomySystems,availableGroups:groups.filter(g=>g.status==='available').length,missingGroups:groups.filter(g=>g.status==='missing').length,limitations:['The source body is male; female reproductive organs need a separate anatomically aligned source.','Small intestine includes duodenum and jejunum, not a complete bowel model.','Surface materials are artistic visualization; they are not histology or pathology.','Microscopic glands require dedicated tissue-scale geometry.'],groups};
writeFileSync(new URL('../design/anatomy/coverage.json',import.meta.url),JSON.stringify(report,null,2)+'\n');
console.log(`${report.structures} structures; ${report.availableGroups} available navigation groups; ${report.missingGroups} missing targets.`);

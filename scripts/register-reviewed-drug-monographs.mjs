// Rebuild the small reviewed registry after clinical source audits pass.
// This does not certify rendered QA or permit deployment by itself.
import { readFileSync,writeFileSync,existsSync } from 'node:fs';
import { validateMonograph } from '../src/data/drugMonographs/schema.js';
import { coreDrugs } from '../src/data/drugLibrary.js';
const approved=[];
const ledger=JSON.parse(readFileSync('docs/drug-library/completion-audit.json'));
const selectedBatches=new Set((process.argv.slice(2).length?process.argv.slice(2):['1']).map(Number));
if([...selectedBatches].some(batch=>!Number.isInteger(batch)||batch<1||batch>30))throw new Error('Specify completed candidate batch numbers (1–30)');
for(const drug of coreDrugs){
 if(drug.slug==='acetaminophen') continue;
 if(!selectedBatches.has(ledger.drugs.find(entry=>entry.slug===drug.slug)?.batch))continue;
 const filename=`src/data/drugMonographs/${drug.slug}.js`;
 const auditfile=`docs/drug-library/${drug.slug}-review.json`;
 if(!existsSync(filename)||!existsSync(auditfile))throw new Error(`${drug.slug}: selected batch is incomplete`);
 const audit=JSON.parse(readFileSync(auditfile));
 if(audit.status!=='source_reviewed')throw new Error(`${drug.slug}: selected batch still requires clinical review`);
 for(const key of ['materialErrors','materialGaps','unresolvedMaterialGaps','material_errors','material_gaps','unresolved_material_errors']) {
  if(audit[key]?.length)throw new Error(`${drug.slug}: unresolved ${key}`);
 }
 const exports=await import(`../${filename}`);
 const entries=Object.entries(exports).filter(([,value])=>value?.slug===drug.slug);
 if(entries.length!==1)throw new Error(`${drug.slug}: expected one matching monograph export`);
 const [name,monograph]=entries[0];
 const errors=validateMonograph(monograph);
 if(errors.length)throw new Error(`${drug.slug}: ${errors.join('; ')}`);
 approved.push({name,slug:drug.slug});
}
const imports=approved.map(({name,slug})=>`import { ${name} } from "./${slug}.js";`).join('\n');
const entries=approved.map(({name,slug})=>`  ${JSON.stringify(slug)}: ${name},`).join('\n');
writeFileSync('src/data/drugMonographs/index.js',`// Clinical source audits passed; rendered QA and release remain separate gates.\n${imports}\n\nexport const reviewedDrugMonographs = {\n${entries}\n};\n`);
console.log(`Registered ${approved.length} source-reviewed monographs; APAP remains unchanged.`);

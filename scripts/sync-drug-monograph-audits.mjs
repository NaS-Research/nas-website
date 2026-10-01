// Refresh working inventory evidence; clinical status is never inferred from formatting alone.
import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {validateMonograph} from '../src/data/drugMonographs/schema.js';
const path='docs/drug-library/completion-audit.json';
const ledger=JSON.parse(readFileSync(path));
for(const drug of ledger.drugs) {
 if(drug.slug==='acetaminophen')continue;
 const record=`docs/drug-library/${drug.slug}-review.json`;
 const source=`src/data/drugMonographs/${drug.slug}.js`;
 if(!existsSync(record)||!existsSync(source))continue;
 const audit=JSON.parse(readFileSync(record));
 if(!['source_reviewed','requires_review'].includes(audit.status))continue;
 const map=audit.assertionToSource||audit.assertionToSourceMap||audit.assertion_to_source||audit.assertionMap||audit.assertion_map||audit.assertion_source_map;
 if(!audit.sources?.length||!map||!Object.keys(map).length)continue;
 const module=await import(`../${source}`);
 const monograph=Object.values(module).find(value=>value?.slug===drug.slug);
 const errors=validateMonograph(monograph);
 if(errors.length)throw Error(`${drug.slug}: ${errors.join('; ')}`);
 const hash=createHash('sha256').update(readFileSync(source)).digest('hex');
 const materialErrors=audit.materialErrors||audit.material_errors||audit.unresolved_material_errors||[];
 const materialGaps=audit.materialGaps||audit.unresolvedMaterialGaps||audit.material_gaps||[];
 const status=materialErrors.length||materialGaps.length?'requires_review':audit.status;
 const preserve=['verified','deployed'].includes(drug.status)&&drug.monographSha256===hash&&status==='source_reviewed';
 if(!preserve) {
  drug.status=status;
  drug.sectionAudit=Object.fromEntries(ledger.immutableBlueprint.sectionOrder.map(id=>[id,status]));
  drug.checks={contract:'passed',build:'pending',renderedDesktop:'pending',renderedMobile:'pending'};
  if(drug.monographSha256&&drug.monographSha256!==hash) {
   delete drug.validationEvidence;delete drug.remoteReceipt;drug.commit=null;drug.deployment=null;
  }
 }
 drug.monographSha256=hash;drug.sourceAuditRecord=record;drug.sources=audit.sources;drug.sourceAudit=map;
 drug.materialErrors=materialErrors;drug.gaps=materialGaps.length?materialGaps:(audit.gaps||[]);
}
const counts={};for(const drug of ledger.drugs)counts[drug.status]=(counts[drug.status]||0)+1;
const reviewed=(counts.source_reviewed||0)+(counts.verified||0)+(counts.deployed||0);
ledger.clinicalVerificationSummary={
 immutableBlueprint:counts.immutable_blueprint||0,
 otherDrugsSourceReviewed:reviewed,
 otherDrugsVerified:(counts.verified||0)+(counts.deployed||0),
 otherDrugsDeployed:counts.deployed||0,
 profilesWithPublicationHistory:ledger.publicationReleases?.reduce((total,release)=>total+release.profiles,0)||0,
 pendingFormattingRevisions:ledger.drugs.filter(drug=>drug.pendingCorrectionBatch).map(drug=>drug.slug),
 remainingToSourceReview:ledger.total-1-reviewed,
 remaining:ledger.total-1-(counts.verified||0)-(counts.deployed||0),
 remainingToPublish:ledger.total-1-(counts.deployed||0),
};
writeFileSync(path,JSON.stringify(ledger,null,2)+'\n');
console.log(counts);

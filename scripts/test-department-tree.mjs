import assert from 'node:assert/strict';
import {activityNodes,departmentTree,layoutTree,sourceFresh} from '../src/lib/admin/agent-tree.mjs';
const now=Date.now(),stamp=new Date(now).toISOString();
const registry={nodes:[{id:'org',parentId:null,kind:'organization',name:'Company'},{id:'dept:i',parentId:'org',kind:'department',name:'Institute'},{id:'team:l',parentId:'dept:i',kind:'team',name:'Learn'},{id:'group:unassigned',parentId:'org',kind:'group',name:'Unassigned'},{id:'team:v',parentId:'group:unassigned',kind:'team',name:'Video'}],sourceAssignments:{video:'team:v'}};
const rows=[{source:'research',device:'test',received_at:stamp,payload:{jobs:[
{id:'parent',name:'Parent',kind:'agent',teamId:'team:l',status:'running',elapsedSeconds:3},
{id:'child',name:'Child',kind:'agent',teamId:'team:l',parentId:'parent',status:'needs_you'},
{id:'unmapped',name:'Research job',status:undefined},
{id:'other',name:'Other department worker',departmentId:'dept:i',parentId:'parent',status:'waiting'}
]}},{source:'video',device:'test',received_at:stamp,payload:{jobs:[{id:'v',name:'Video job',status:'running'}]}}];
const jobs=activityNodes(rows,now),tree=departmentTree(registry,jobs,rows,now),byId=new Map(tree.map(n=>[n.id,n]));
assert.equal(byId.get('test:parent').parentId,'team:l');
assert.equal(byId.get('test:child').parentId,'test:parent');
assert.equal(byId.get('test:other').parentId,'dept:i');
assert.equal(byId.get('test:other').runtimeParentId,'test:parent');
assert.equal(byId.get('test:other').relationship,'assignment');
assert.equal(byId.get('test:unmapped').parentId,'group:unassigned');
assert.equal(byId.get('test:unmapped').status,'unknown');
assert.equal(byId.get('test:unmapped').elapsedSeconds,null);
assert.equal(byId.get('test:v').parentId,'team:v');
assert.equal(byId.get('test:child').status,'needs_you');
assert.equal(byId.get('test:parent').model,null);
assert.equal(byId.get('test:parent').task,'Task not reported');
assert.equal(byId.get('dept:i').reportedCount,3);
assert.equal(byId.get('org').reportedCount,5);
const collapsed=layoutTree(tree,new Set(['dept:i']));
assert.ok(!collapsed.nodes.some(n=>n.id==='test:child'));
assert.equal(tree.filter(n=>n.kind==='agent').length,2);
const staleJobs=activityNodes(rows,now+91000);
assert.ok(staleJobs.every(n=>n.status==='offline'));
const staleTree=departmentTree(registry,staleJobs,rows,now+91000);
assert.equal(staleTree.find(n=>n.id==='dept:i').status,'offline');
assert.equal(sourceFresh({received_at:'broken'},now),false);
assert.equal(sourceFresh({received_at:new Date(now+90000).toISOString()},now),false);
const malformed=activityNodes([{...rows[0],payload:{jobs:[{id:'bad',status:'invented',costUsd:-1,elapsedSeconds:NaN},{id:'future',parentId:'future',status:'done'}]}}],now);
assert.equal(malformed[0].status,'unknown');assert.equal(malformed[0].costUsd,null);assert.equal(malformed[1].parentId,null);
console.log('PASS: department placement, unassigned coverage, cross-team spawn separation, collapse, needs-human state, invalid/missing fields, stale timestamps and ancestor counts');

const eventRow={source:'website',device:'test',received_at:stamp,payload:{jobs:[{id:'event',kind:'agent',status:'running',observedAt:new Date(now-100000).toISOString(),provenance:'Task producer'}]}};
assert.equal(activityNodes([eventRow],now)[0].status,'offline');
eventRow.payload.jobs[0].status='done';assert.equal(activityNodes([eventRow],now)[0].status,'done');
console.log('PASS: a fresh publisher receipt cannot make an old active task event appear live; explicit terminal events retained');

const {activitySummary}=await import('../src/lib/admin/agent-tree.mjs');
assert.equal(activitySummary(byId.get('dept:i')),'1 active worker');
assert.equal(activitySummary(byId.get('team:v')),'1 active job');
const emptyFeed=departmentTree(registry,[],rows.map(row=>({...row,payload:{jobs:[]}})),now);
assert.ok(emptyFeed.every(node=>node.status==='unavailable'));
assert.ok(emptyFeed.every(node=>activitySummary(node)==='Activity unavailable'));
assert.equal(activitySummary(staleTree.find(node=>node.id==='dept:i')),'Activity unavailable');
for(const [status,expected] of [['idle','idle'],['blocked','blocked'],['needs_you','blocked']]){
 const evidenceRows=[{source:'research',device:'test',received_at:stamp,payload:{jobs:[{id:status,kind:'agent',teamId:'team:l',status,observedAt:stamp}]}}];
 const evidenceJobs=activityNodes(evidenceRows,now),evidenceTree=departmentTree(registry,evidenceJobs,evidenceRows,now);
 assert.equal(evidenceJobs[0].status,status);
 assert.equal(evidenceTree.find(node=>node.id==='dept:i').status,expected);
 assert.equal(activitySummary(evidenceTree.find(node=>node.id==='dept:i')),'0 active workers');
}
assert.equal(activitySummary(byId.get('dept:i'),true),'Activity unavailable');
console.log('PASS: fresh connectivity does not imply activity; absent worker observations never produce a false zero; actual agent/person workers and process jobs stay distinct; explicit idle and blocked observations supported');

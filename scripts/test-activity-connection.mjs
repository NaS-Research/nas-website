import assert from 'node:assert/strict';
import {connectionHealth} from '../src/lib/admin/activity-connection.mjs';
import {activityNodes,departmentTree,scopeBlockers,sourceFresh} from '../src/lib/admin/agent-tree.mjs';
const now=Date.now(),fresh=new Date(now).toISOString(),old=new Date(now-100000).toISOString();
const row={source:'video',device:'fixture',received_at:fresh,payload:{jobs:[],telemetry:{capturedAt:fresh}}};
assert.equal(connectionHealth([],now,{state:'connected'}).publisher,'No publisher report');
assert.equal(connectionHealth([{...row,received_at:old}],now,{state:'connected'}).publisher,'Publisher stale');
assert.equal(connectionHealth([row],now,{state:'connected'}).backend,'Backend connected');
assert.equal(connectionHealth([row],now,{state:'offline'}).backend,'Browser offline');
assert.equal(sourceFresh({...row,payload:{telemetry:{capturedAt:old}}},now),false,'new backend receipt cannot revive an old local collection');
assert.equal(sourceFresh({...row,payload:{telemetry:{capturedAt:'invalid'}}},now),false);
const staleJob={id:'a',kind:'agent',status:'running',observedAt:old};
const dated={...row,payload:{jobs:[staleJob],videoLifecycle:{sourceState:'stale',observedAt:old,expiresAt:old},runtime:{state:'available',sourceObservedAt:old},telemetry:{capturedAt:fresh,omittedObservations:2}}};
const health=connectionHealth([dated],now,{state:'connected'}).feeds.find(f=>f.source==='video');
assert.equal(health.state,'Partial / degraded');assert.equal(health.staleJobs,1);assert.equal(health.omitted,2);assert.equal(health.readers[0].state,'Unavailable');assert.equal(health.readers[1].state,'Stale');
const blocked={...row,payload:{jobs:[{id:'b',kind:'job',status:'unknown',lastKnownStatus:'blocked',observedAt:fresh}]}};
const nodes=activityNodes([blocked],now);assert.equal(nodes[0].status,'unknown');assert.equal(nodes[0].reportedStatus,'blocked');assert.equal(scopeBlockers(nodes).length,1);
const childOnly=activityNodes([{...row,payload:{jobs:[{id:'child',parentId:'missing-parent',teamId:'team',status:'running',observedAt:fresh}]}}],now);
assert.equal(childOnly[0].parentId,null);
const placed=departmentTree({nodes:[{id:'team',kind:'team'}]},childOnly,[row],now);
assert.equal(placed[1].runtimeParentId,'fixture:missing-parent');assert.equal(placed[1].parentId,'team');
console.log('PASS: layered connection, absent/stale inputs, delayed delivery, visible partial coverage, retained blockers and missing runtime parent');

for(const state of ["offline","interrupted"]){const h=connectionHealth([row],now,{state});assert.equal(h.publisher,"Publisher connection unknown");assert.equal(h.feeds.find(f=>f.source==="video").state,"Last known");assert.equal(h.receiving,0);}

for(const departmentProgress of [{},[null],"invalid"]){assert.doesNotThrow(()=>connectionHealth([null,{...row,payload:{jobs:[null],departmentProgress}}],now,{state:'connected'}));}

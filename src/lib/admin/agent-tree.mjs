export function paidUsage(value){
 if(!value||!['actual','estimate'].includes(value.kind)||!['api','metered'].includes(value.billingType))return null;
 if(typeof value.amountUsd!=='number'||!Number.isFinite(value.amountUsd)||value.amountUsd<=0)return null;
 for(const key of ['provider','service','provenance','recordId'])if(typeof value[key]!=='string'||!value[key].trim()||value[key].length>240)return null;
 if(!Number.isFinite(Date.parse(value.asOf))||Date.parse(value.asOf)>Date.now()+30000)return null;
 if(value.kind==='estimate'&&(typeof value.basis!=='string'||!value.basis.trim()||value.basis.length>500))return null;
 return {kind:value.kind,billingType:value.billingType,amountUsd:value.amountUsd,provider:value.provider,service:value.service,provenance:value.provenance,recordId:value.recordId,asOf:value.asOf,basis:value.kind==='estimate'?value.basis:null,scope:value.scope==='exclusive'?'exclusive':'unconfirmed'};
}
export function usageTotals(nodes){
 const seen=new Set();let actualUsd=0,estimateUsd=0,actualCount=0,estimateCount=0;
 for(const node of nodes){const usage=node.paidUsage;if(!usage||usage.scope!=='exclusive')continue;
  const key=usage.provider+':'+usage.kind+':'+usage.recordId;if(seen.has(key))continue;seen.add(key);
  if(usage.kind==='actual'){actualUsd+=usage.amountUsd;actualCount++;}else{estimateUsd+=usage.amountUsd;estimateCount++;}
 }
 return {actualUsd,estimateUsd,actualCount,estimateCount};
}
export function zoomView(view,factor,point){
 const scale=Math.max(.35,Math.min(2.5,view.scale*factor)),ratio=scale/view.scale;
 return {scale,x:point.x-(point.x-view.x)*ratio,y:point.y-(point.y-view.y)*ratio};
}
export function sourceFresh(row,now=Date.now()){
 const age=now-Date.parse(row?.received_at);
 return Number.isFinite(age)&&age>=-30000&&age<=90000;
}
export function modelObservation(value,executionId,now=Date.now(),effective=false){
 if(!value||typeof value.model!=='string'||!value.model.trim()||value.model.length>100||typeof value.provenance!=='string'||!value.provenance.trim()||value.provenance.length>240)return null;
 const time=Date.parse(value.observedAt);if(!Number.isFinite(time)||time>now+30000)return null;
 if(effective&&(!executionId||value.executionId!==executionId||value.appliesTo==='next-turn'))return null;
 const effort=typeof value.reasoningEffort==='string'&&/^[a-zA-Z0-9 _-]{1,30}$/.test(value.reasoningEffort)?value.reasoningEffort:null;
 return {model:value.model,reasoningEffort:effort,provenance:value.provenance,observedAt:value.observedAt,executionId:value.executionId||null,appliesTo:['configuration','current-turn','next-turn'].includes(value.appliesTo)?value.appliesTo:'configuration',fresh:now-time<=90000};
}
export function executionModel(node){
 const effective=node.runtimeModel;
 if(effective&&(effective.fresh||['done','failed'].includes(node.status))&&!['offline','unknown'].includes(node.status))return effective.model+' · '+(effective.reasoningEffort||'Reasoning unavailable');
 // Provider model receipts are independent of requested agent settings.
 if(node.kind==='job'&&node.model)return node.model+' · Reasoning unavailable';
 return 'Model / reasoning unavailable';
}
export function activityNodes(rows,now=Date.now()){
 const nodes=new Map();
 for(const row of rows||[]){
  for(const job of Array.isArray(row.payload?.jobs)?row.payload.jobs.slice(0,100):[]){
   if(!['string','number'].includes(typeof job.id)||String(job.id).length>200)continue;
   const id=String(row.device)+':'+String(job.id),usage=paidUsage(job.paidUsage);
   const reported=job.status==='needs-you'?'needs_you':job.status;
   const observationKnown=job.observedAt===undefined||(Number.isFinite(Date.parse(job.observedAt))&&Date.parse(job.observedAt)<=now+30000);
   const observationStale=job.observedAt!==undefined&&!['done','failed','cancelled'].includes(reported)&&!sourceFresh({received_at:job.observedAt},now);
   const status=!sourceFresh(row,now)||observationStale?'offline':!observationKnown?'unknown':['running','done','failed','waiting','needs_you','idle','blocked','cancelled'].includes(reported)?reported:'unknown';
   nodes.set(id,{id,parentId:job.parentId!==undefined&&job.parentId!==null?String(row.device)+':'+String(job.parentId):null,
    name:String(job.name||'Unnamed worker').slice(0,140),task:String(job.task||'Task not reported').slice(0,240),
    model:typeof job.model==='string'&&job.model.trim()&&job.model.length<=100&&typeof job.modelProvenance==='string'&&job.modelProvenance.trim()&&job.modelProvenance.length<=240?job.model:null,
    modelProvenance:typeof job.modelProvenance==='string'?job.modelProvenance.slice(0,240):null,kind:['agent','person'].includes(job.kind)?job.kind:'job',
    source:row.source,device:row.device,status,
    roleId:typeof job.roleId==='string'?job.roleId:null,assignment:typeof job.assignment==='string'?job.assignment.slice(0,240):null,placement:job.placement==='unassigned'?'unassigned':null,
    sourceRuntime:typeof job.sourceRuntime==='string'?job.sourceRuntime.slice(0,200):null,epoch:typeof job.epoch==='string'?job.epoch.slice(0,200):null,originEventId:typeof job.originEventId==='string'?job.originEventId.slice(0,200):null,
    entityKind:typeof job.entityKind==='string'?job.entityKind:null,executionId:typeof job.executionId==='string'?job.executionId:null,
    runtimeModel:modelObservation(job.runtimeModel,job.executionId,now,true),requestedModel:modelObservation(job.requestedModel,job.executionId,now),
    paidUsage:usage,costUsd:usage?.amountUsd??null,
    elapsedSeconds:typeof job.elapsedSeconds==='number'&&Number.isFinite(job.elapsedSeconds)&&job.elapsedSeconds>=0?job.elapsedSeconds:null,
    stateChangedAt:typeof job.stateChangedAt==='string'?job.stateChangedAt:null,heartbeatAt:typeof job.heartbeatAt==='string'?job.heartbeatAt:null,
    observedAt:typeof job.observedAt==='string'?job.observedAt:null,provenance:typeof job.provenance==='string'?job.provenance.slice(0,240):null,
    teamId:typeof job.teamId==='string'?job.teamId:null,departmentId:typeof job.departmentId==='string'?job.departmentId:null,receivedAt:row.received_at});
  }
 }
 for(const node of nodes.values()){
  if(!nodes.has(node.parentId)||node.parentId===node.id)node.parentId=null;
  const seen=new Set([node.id]);let parent=nodes.get(node.parentId);
  while(parent){if(seen.has(parent.id)){node.parentId=null;break;}seen.add(parent.id);parent=nodes.get(parent.parentId);}
 }
 return [...nodes.values()];
}
export function departmentTree(registry,jobs,rows=[],now=Date.now()){
 if(!Array.isArray(registry?.nodes))return jobs;
 const structure=registry.nodes.map(node=>({...node,structural:true,model:null,costUsd:null,elapsedSeconds:null,reportedCount:0,runningCount:0,blockedCount:0,waitingCount:0,offlineCount:0,unknownCount:0,observedWorkerCount:0,activeWorkerCount:0,observedJobCount:0,activeJobCount:0,status:'unavailable'}));
 const byId=new Map(structure.map(node=>[node.id,node]));
 for(const row of rows){const runtime=row.payload?.runtime;if(runtime?.state!=='available'||!sourceFresh({received_at:runtime.checkedAt},now)||!sourceFresh(row,now))continue;for(const configuration of runtime.roleConfigurations||[]){const node=byId.get(configuration.id);if(node?.kind!=='role'||typeof configuration.configuredActive!=='boolean'||!Number.isFinite(Date.parse(configuration.observedAt))||Date.parse(node.configurationObservedAt)>Date.parse(configuration.observedAt))continue;node.configuration=node.configuration==='deterministic'&&configuration.configuredActive?'deterministic':configuration.configuredActive?'configured':'inactive';node.configurationObservedAt=configuration.observedAt;node.configurationProvenance='Core /registry via existing observer reader';}}
 const containers=new Map();
 for(const job of jobs){
  const team=byId.get(job.teamId),department=byId.get(job.departmentId),fallback=byId.get(registry.sourceAssignments?.[job.source]);
  const role=byId.get(job.roleId);
  containers.set(job.id,job.placement==='unassigned'?'group:unassigned':role?.kind==='role'?role.id:team?.kind==='team'?team.id:department?.kind==='department'?department.id:fallback?.id||'group:unassigned');
 }
 const placed=jobs.map(job=>{
  const sameTeam=job.parentId&&containers.get(job.parentId)===containers.get(job.id);
  return {...job,runtimeParentId:job.parentId,parentId:sameTeam?job.parentId:containers.get(job.id),relationship:sameTeam?'runtime':'assignment'};
 });
 const all=new Map([...structure,...placed].map(node=>[node.id,node]));
 for(const job of placed){
  let parent=all.get(job.parentId);const seen=new Set();
  while(parent&&!seen.has(parent.id)){
   seen.add(parent.id);
   if(parent.structural){
    parent.reportedCount++;
    if(job.status==='running')parent.runningCount++;
    if(['needs_you','blocked'].includes(job.status))parent.blockedCount++;
    if(job.status==='waiting')parent.waitingCount++;
    if(job.status==='offline')parent.offlineCount++;
    if(job.status==='unknown')parent.unknownCount++;
    if(!['offline','unknown'].includes(job.status)){
     if(['agent','person'].includes(job.kind)){parent.observedWorkerCount++;if(job.status==='running')parent.activeWorkerCount++;}
     else{parent.observedJobCount++;if(job.status==='running')parent.activeJobCount++;}
    }
   }
   parent=all.get(parent.parentId);
  }
 }
 for(const node of structure){
  if(node.runningCount)node.status='active';
  else if(node.blockedCount)node.status='blocked';
  else if(node.waitingCount)node.status='waiting';
  else if(node.reportedCount&&node.offlineCount===node.reportedCount)node.status='offline';
  else if(node.reportedCount&&!node.unknownCount&&!node.offlineCount)node.status='idle';
  else node.status='unavailable';
  // Transport freshness never establishes that workers are active or idle.
  if(node.kind==='organization')node.task='Departments and teams';
  if(node.connected===false)node.status='unconnected';
  if(node.kind==='role'){node.status=node.configuration==='deterministic'?'deterministic':node.configuration==='configured'?'configured':'inactive';node.task=node.configuration==='deterministic'?'Deterministic routing · execution observed separately':node.configuration==='configured'?'Configured enabled · execution observed separately':'Planned · configured inactive';}
 }
 return [...structure,...placed];
}
export function hierarchyExecutions(nodes,id){
 const byId=new Map(nodes.map(node=>[node.id,node]));
 return nodes.filter(node=>{if(node.structural)return false;let parent=byId.get(node.parentId);const seen=new Set();while(parent&&!seen.has(parent.id)){if(parent.id===id)return true;seen.add(parent.id);parent=byId.get(parent.parentId);}return false;});
}
export function workerCounts(node,interrupted=false){
 // Registry definitions, jobs, and temporary task identities cannot establish a personnel roster.
 return {total:null,observed:node.observedWorkerCount||0,active:!interrupted&&node.observedWorkerCount>0?node.activeWorkerCount:null,attention:interrupted?null:node.blockedCount||0};
}
export function activitySummary(node,interrupted=false){
 if(node.connected===false)return 'Runtime not connected';
 if(interrupted||['offline','unknown','unavailable'].includes(node.status))return 'Activity unavailable';
 if(node.observedWorkerCount>0)return node.activeWorkerCount+' active worker'+(node.activeWorkerCount===1?'':'s');
 if(node.observedJobCount>0)return node.activeJobCount+' active job'+(node.activeJobCount===1?'':'s');
 return 'Activity unavailable';
}
export function layoutTree(nodes,collapsed=new Set()){
 const W=246,H=140,GAP=44,LEVEL=72,INDENT=24,STACK=24;
 const byId=new Map(nodes.map(node=>[node.id,node])),children=new Map();
 for(const node of nodes){const key=byId.has(node.parentId)?node.parentId:null;if(!children.has(key))children.set(key,[]);children.get(key).push(node);}
 // Alphabetize department/portfolio columns only; retain nested and runtime order.
 for(const [parentId,siblings] of children){
  if(byId.get(parentId)?.kind!=='organization')continue;
  const isColumn=node=>['department','portfolio'].includes(node.kind);
  const departments=siblings.filter(isColumn).sort((a,b)=>a.name.localeCompare(b.name,'en',{sensitivity:'base'})||a.id.localeCompare(b.id));
  children.set(parentId,[...departments,...siblings.filter(node=>!isColumn(node))]);
 }
 const positions=[],edges=[],measurements=new Map();
 const kids=node=>collapsed.has(node.id)?[]:children.get(node.id)||[];
 function nestedSize(node){
  const sizes=kids(node).map(nestedSize);
  const value={width:Math.max(W,...sizes.map(size=>INDENT+size.width)),height:H+(sizes.length?STACK+sizes.reduce((sum,size)=>sum+size.height,0)+(sizes.length-1)*STACK:0)};
  measurements.set(node.id,value);return value;
 }
 function rootSize(node){
  const descendants=kids(node),sizes=descendants.map(nestedSize);
  const value={width:Math.max(W,sizes.reduce((sum,size)=>sum+size.width,0)+Math.max(0,sizes.length-1)*GAP),height:H+(sizes.length?LEVEL+Math.max(...sizes.map(size=>size.height)):0)};
  measurements.set(node.id,value);return value;
 }
 function add(node,x,y){positions.push({...node,x,y,childCount:(children.get(node.id)||[]).length,collapsed:collapsed.has(node.id)});}
 function placeNested(node,x,y){
  add(node,x,y);let cursor=y+H+STACK;
  for(const child of kids(node)){placeNested(child,x+INDENT,cursor);edges.push({from:node.id,to:child.id,nested:true,kind:child.relationship||'organization'});cursor+=measurements.get(child.id).height+STACK;}
 }
 const roots=children.get(null)||[];roots.forEach(rootSize);let cursor=0,height=H;
 for(const root of roots){
  const size=measurements.get(root.id);add(root,cursor+(size.width-W)/2,0);let column=cursor;
  for(const child of kids(root)){placeNested(child,column,H+LEVEL);edges.push({from:root.id,to:child.id,nested:false,kind:child.relationship||'organization'});column+=measurements.get(child.id).width+GAP;}
  cursor+=size.width+GAP*2;height=Math.max(height,size.height);
 }
 return {nodes:positions,edges,width:Math.max(W,cursor-GAP*2),height,nodeWidth:W,nodeHeight:H};
}

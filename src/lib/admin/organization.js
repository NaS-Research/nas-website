import 'server-only';
// Organization names are already public on /about. No employee or agent roster is embedded.
// The owner explicitly places both Learn content and Video under NaS Institute.
export const organization = {
 version: 2,
 nodes: [
  {id:'org:nas',parentId:null,kind:'organization',name:'NaS',task:'Departments and teams'},
  {id:'dept:corporate',parentId:'org:nas',kind:'department',name:'Corporate',task:'Corporate oversight'},
  {id:'dept:research',parentId:'org:nas',kind:'department',name:'Research & Development',task:'Scientific research'},
  {id:'dept:institute',parentId:'org:nas',kind:'department',name:'NaS Institute',task:'Learning and training'},
  {id:'dept:raas',parentId:'org:nas',kind:'department',name:'RAAS',task:'Robotics as a Service'},
  {id:'dept:biobank',parentId:'org:nas',kind:'department',name:'BioBank & Insights',task:'Scientific data and collections'},
  {id:'dept:zeta',parentId:'org:nas',kind:'department',name:'Zeta',task:'Computational services'},
  {id:'group:unassigned',parentId:'org:nas',kind:'group',name:'Unassigned activity',task:'Department not confirmed'},
  {id:'team:learn',parentId:'dept:institute',kind:'team',name:'Learn content',task:'Institute learning content',source:'research',coverageMode:'assignment'},
  {id:'team:video',parentId:'dept:institute',kind:'team',name:'Video team',task:'Institute video production',source:'video',coverageMode:'source'}
 ],
 sourceAssignments:{video:'team:video'},
 // Source "research" includes both Learn and CVA. Never assign it wholesale to Institute.
 coverageNote:'Canonical roles are distinct from execution instances. Local runtime observations poll every 20 seconds; this page polls every 10 seconds. Nonterminal observations expire after 90 seconds. Codex collaboration and effective model coverage remain incomplete.'
};

// Generic role labels/mappings only. Actual role records are supplied by the private,
// authenticated runtime snapshot after admin authorization, never a public roster file.
const roleNames={'scientific-research':'Scientific Research',scripting:'Scripting','visual-production':'Visual Production',narration:'Narration',editing:'Editing',qa:'QA',publishing:'Publishing'};
export function organizationForSources(sources=[],privateConfig=process.env.NAS_ADMIN_ORGANIZATION_JSON){
 const privateData=privateStructure(privateConfig),records=new Map();
 // Saved configuration survives an unavailable runtime transport. Newer verified reads win.
 for(const row of [{payload:{runtime:{sourceRuntime:'nas-core',roleConfigurations:privateData.roleConfigurations||[]}}},...(sources||[])]){
  const runtime=row.payload?.runtime;
  if(runtime?.sourceRuntime!=='nas-core'||!Array.isArray(runtime.roleConfigurations))continue;
  for(const record of runtime.roleConfigurations.slice(0,20)){
   if(typeof record?.id!=='string'||typeof record.configuredActive!=='boolean'||!Number.isFinite(Date.parse(record.observedAt)))continue;
   let name,parentId,configuration=record.configuredActive?'configured':'inactive';
   if(record.id==='role:company-director'&&record.registryId==='company-director'){name='Company director';parentId='dept:corporate';if(record.configuredActive)configuration='deterministic';}
   else if(record.id==='role:institute-lead'&&record.registryId==='institute-lead'){name='Institute lead';parentId='dept:institute';}
   else if(record.id==='role:video-supervisor'&&record.registryId==='department-director'){name='Video supervisor';parentId='team:video';if(record.configuredActive)configuration='deterministic';}
   else{if(!record.id.startsWith('role:video:'))continue;const key=record.id.replace(/^role:video:/,'');if(!roleNames[key]||record.registryId!=='future-'+key)continue;name=roleNames[key];parentId='role:video-supervisor';}
   const node={id:record.id,parentId,kind:'role',name,configuration,registryId:record.registryId,configurationObservedAt:record.observedAt,configurationProvenance:record.provenance||'Core /registry via existing observer reader',task:configuration==='deterministic'?'Deterministic routing · execution observed separately':configuration==='configured'?'Configured enabled · execution observed separately':'Planned · configured inactive'};
   if(!records.has(node.id)||Date.parse(records.get(node.id).configurationObservedAt)<Date.parse(node.configurationObservedAt))records.set(node.id,node);
  }
 }
 // A missing parent never promotes a role to an invented organizational placement.
 const order=['role:company-director','role:institute-lead','role:video-supervisor',...Object.keys(roleNames).map(key=>'role:video:'+key)];
 const nodes=[...organization.nodes,...[...records.values()].sort((a,b)=>order.indexOf(a.id)-order.indexOf(b.id))],ids=new Set(nodes.map(node=>node.id));
 return {...organization,nodes:[...nodes.filter(node=>!node.parentId||ids.has(node.parentId)),...privateData.nodes],taskReferences:privateData.taskReferences,privateConfigurationState:privateData.state};
}

// Private approved structure is deployment configuration, never a public repository roster.
// Called only by the admin-authorized API. Configuration cannot establish runtime activity.
export function privateStructure(raw){
 const empty=state=>({nodes:[],taskReferences:[],state});
 if(!raw)return empty('not_configured');
 try{
  if(typeof raw!=='string'||Buffer.byteLength(raw,'utf8')>16000)throw Error();
  const data=JSON.parse(raw),baseIds=new Set(organization.nodes.map(node=>node.id));
  const validText=(value,max)=>typeof value==='string'&&value.trim().length>0&&value.length<=max&&!/[\u0000-\u001f]/.test(value);
  const validId=value=>validText(value,100)&&/^[a-z0-9][a-z0-9:_-]*$/.test(value);
  if(data.version!==1||!Array.isArray(data.nodes)||!data.nodes.length||data.nodes.length>20||!Array.isArray(data.taskReferences)||data.taskReferences.length>20)throw Error();
  const nodes=data.nodes.map(node=>{
   if(!validId(node.id)||baseIds.has(node.id)||!validId(node.parentId)||!['portfolio','company','project'].includes(node.kind)||!validText(node.name,140)||!validText(node.task,240)||node.connected!==false||!validText(node.provenance,240)||!Number.isFinite(Date.parse(node.observedAt))||Date.parse(node.observedAt)>Date.now()+30000)throw Error();
   return {id:node.id,parentId:node.parentId,kind:node.kind,name:node.name,task:node.task,connected:false,configuration:'approved-reserved',configurationObservedAt:node.observedAt,configurationProvenance:node.provenance,registryId:node.id,referencePath:validText(node.referencePath,300)?node.referencePath:null};
  });
  const byId=new Map(nodes.map(node=>[node.id,node]));if(byId.size!==nodes.length)throw Error();
  for(const node of nodes){
   if(node.kind==='portfolio'?node.parentId!=='org:nas':byId.get(node.parentId)?.kind!==(node.kind==='company'?'portfolio':'company'))throw Error();
  }
  const seen=new Set();
  const taskReferences=data.taskReferences.map(record=>{
   if(!validId(record.id)||seen.has(record.id)||byId.get(record.projectId)?.kind!=='project'||!validText(record.title,140)||!['active','idle','waiting','notLoaded','unknown'].includes(record.observedState)||!Number.isFinite(Date.parse(record.observedAt))||Date.parse(record.observedAt)>Date.now()+30000||!validText(record.provenance,240))throw Error();
   seen.add(record.id);
   return {id:record.id,projectId:record.projectId,title:record.title,observedState:record.observedState,observedAt:record.observedAt,provenance:record.provenance,entityKind:'codex_thread',liveConnected:false};
  });
  const roleConfigurations=[];
  if(data.roleSnapshot!==undefined){
   const snapshot=data.roleSnapshot,special={'company-director':'role:company-director','department-director':'role:video-supervisor','institute-lead':'role:institute-lead'};
   if(!snapshot||!validText(snapshot.provenance,240)||!Number.isFinite(Date.parse(snapshot.observedAt))||Date.parse(snapshot.observedAt)>Date.now()+30000||!snapshot.states||typeof snapshot.states!=='object'||Array.isArray(snapshot.states)||Object.keys(snapshot.states).length>20)throw Error();
   for(const [registryId,configuredActive] of Object.entries(snapshot.states)){
    const roleKey=registryId.replace(/^future-/,'');
    const id=special[registryId]||(registryId.startsWith('future-')&&roleNames[roleKey]?'role:video:'+roleKey:null);
    if(!id||typeof configuredActive!=='boolean')throw Error();
    roleConfigurations.push({id,registryId,configuredActive,observedAt:snapshot.observedAt,provenance:snapshot.provenance});
   }
  }
  return {nodes,taskReferences,roleConfigurations,state:'available'};
 }catch{return empty('invalid');}
}

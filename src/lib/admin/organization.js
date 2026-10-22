import 'server-only';
// Organization names are already public on /about. No employee or agent roster is embedded.
// The owner explicitly places both Learn content and Video under NaS Institute.
export const organization = {
 version: 3,
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

// Owner-requested reporting structure. Server-only planning data, returned only after
// admin authorization. Profiles do not configure a worker or prove model transport.
const roleNames={'scientific-research':'Research',scripting:'Script','visual-production':'Visual Production Supervisor',narration:'Narration',editing:'Editing',qa:'Final QA',publishing:'Publishing'};
const role = (id,name,parentId,reportsToId,effort,responsibility,extra={}) => ({
 id,name,parentId,reportsToId,kind:'role',configuration:'planned',task:responsibility,
 responsibility,planProvenance:'Owner-requested video hierarchy and model profiles',
 plannedProfile:{model:'gpt-6.1-sol',reasoningEffort:effort,state:'requested',effective:false},...extra
});
export const videoRolePlan = [
 role('role:company-director','NaS Research Director','dept:corporate',null,'high','Overall Research direction and Institute oversight'),
 role('role:institute-lead','Institute Lead','dept:institute','role:company-director','high','Supervise Institute teams and delivery'),
 role('role:video-supervisor','Video Director','team:video','role:institute-lead','high','Direct video delivery and review stage handoffs'),
 role('role:video:scientific-research','Research','role:video-supervisor','role:video-supervisor','high','Verify accuracy and deliver the science brief before Script'),
 role('role:video:scripting','Script','role:video-supervisor','role:video-supervisor','medium','Write the script from the reviewed science brief'),
 role('role:video:visual-production','Visual Production Supervisor','role:video-supervisor','role:video-supervisor','high','Supervise visual assets, scene design and animation'),
 role('role:video:asset-library','Asset and Scene Library Artist','role:video:visual-production','role:video:visual-production','medium','Create and curate reusable assets and scenes',{requestedSchedule:'24/7 requested; not activated'}),
 role('role:video:scene-animation','Scene Animation Artist','role:video:visual-production','role:video:visual-production','medium','Animate approved scenes for the script'),
 role('role:video:narration','Narration','role:video-supervisor','role:video-supervisor','medium','Prepare narration from the approved script'),
 role('role:video:editing','Editing','role:video-supervisor','role:video-supervisor','medium','Assemble approved scenes and narration'),
 role('role:video:qa','Final QA','role:video-supervisor','role:video-supervisor','high','Review scientific accuracy, audiovisual quality and release readiness'),
 role('role:video:publishing','Publishing','role:video-supervisor','role:video-supervisor','medium','Prepare the release after Final QA and owner authorization')
];
export const videoWorkflow = {
 state:'planned',provenance:'Owner-requested workflow; no runtime or service activation',
 library:{referencePath:'/Volumes/AGNDJ 6TB/NaS-Media-Library',state:'Owner reports workspace created; collector not connected'},
 stages:[
  {id:'science-brief',name:'Science brief',roleIds:['role:video:scientific-research'],requires:[],output:'Reviewed science brief before script writing'},
  {id:'script',name:'Script',roleIds:['role:video:scripting'],requires:['science-brief'],output:'Approved script for visuals and narration'},
  {id:'visuals',name:'Visual production',roleIds:['role:video:visual-production','role:video:asset-library','role:video:scene-animation'],requires:['script'],output:'Approved reusable assets and animated scenes'},
  {id:'narration',name:'Narration',roleIds:['role:video:narration'],requires:['script'],output:'Approved narration; may proceed alongside visual production'},
  {id:'editing',name:'Editing',roleIds:['role:video:editing'],requires:['visuals','narration'],output:'Assembled video'},
  {id:'final-qa',name:'Final QA',roleIds:['role:video:qa'],requires:['editing'],output:'Scientific and audiovisual review'},
  {id:'publishing',name:'Publishing',roleIds:['role:video:publishing'],requires:['final-qa'],output:'Owner-authorized release; no automatic publishing'}
 ]
};
export function organizationForSources(sources=[],privateConfig=process.env.NAS_ADMIN_ORGANIZATION_JSON){
 const privateData=privateStructure(privateConfig),records=new Map(videoRolePlan.map(node=>[node.id,{...node,plannedProfile:{...node.plannedProfile}}]));
 // Saved configuration survives an unavailable runtime transport. Newer verified reads win.
 for(const row of [{payload:{runtime:{sourceRuntime:'nas-core',roleConfigurations:privateData.roleConfigurations||[]}}},...(sources||[])]){
  const runtime=row.payload?.runtime;
  if(runtime?.sourceRuntime!=='nas-core'||!Array.isArray(runtime.roleConfigurations))continue;
  for(const record of runtime.roleConfigurations.slice(0,20)){
   if(typeof record?.id!=='string'||typeof record.configuredActive!=='boolean'||!Number.isFinite(Date.parse(record.observedAt)))continue;
   let name,parentId,configuration=record.configuredActive?'configured':'inactive';
   if(record.id==='role:company-director'&&record.registryId==='company-director'){name='NaS Research Director';parentId='dept:corporate';if(record.configuredActive)configuration='deterministic';}
   else if(record.id==='role:institute-lead'&&record.registryId==='institute-lead'){name='Institute Lead';parentId='dept:institute';}
   else if(record.id==='role:video-supervisor'&&record.registryId==='department-director'){name='Video Director';parentId='team:video';if(record.configuredActive)configuration='deterministic';}
   else{if(!record.id.startsWith('role:video:'))continue;const key=record.id.replace(/^role:video:/,'');if(!roleNames[key]||record.registryId!=='future-'+key)continue;name=roleNames[key];parentId='role:video-supervisor';}
   const node={...records.get(record.id),id:record.id,parentId,kind:'role',name,configuration,registryId:record.registryId,configurationObservedAt:record.observedAt,configurationProvenance:record.provenance||'Core /registry via existing observer reader',task:configuration==='deterministic'?'Deterministic routing · execution observed separately':configuration==='configured'?'Configured enabled · execution observed separately':'Planned · configured inactive'};
   if(!records.get(node.id)?.configurationObservedAt||Date.parse(records.get(node.id).configurationObservedAt)<Date.parse(node.configurationObservedAt))records.set(node.id,node);
  }
 }
 // A missing parent never promotes a role to an invented organizational placement.
 const order=videoRolePlan.map(node=>node.id);
 const nodes=[...organization.nodes,...[...records.values()].sort((a,b)=>order.indexOf(a.id)-order.indexOf(b.id))],ids=new Set(nodes.map(node=>node.id));
 return {...organization,videoWorkflow,nodes:[...nodes.filter(node=>!node.parentId||ids.has(node.parentId)),...privateData.nodes],taskReferences:privateData.taskReferences,privateConfigurationState:privateData.state};
}

// Private approved structure is deployment configuration, never a public repository roster.
// Called only by the admin-authorized API. Configuration cannot establish runtime activity.
export function privateStructure(raw){
 const empty=state=>({nodes:[],taskReferences:[],state});
 if(!raw)return empty('not_configured');
 try{
  if(typeof raw!=='string'||Buffer.byteLength(raw,'utf8')>16000)throw Error();
  const data=JSON.parse(raw),baseIds=new Set([...organization.nodes,...videoRolePlan].map(node=>node.id));
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

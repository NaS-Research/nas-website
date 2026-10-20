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
export function organizationForSources(sources=[]){
 const records=new Map();
 for(const row of sources||[]){
  const runtime=row.payload?.runtime;
  if(runtime?.sourceRuntime!=='nas-core'||!Array.isArray(runtime.roleConfigurations))continue;
  for(const record of runtime.roleConfigurations.slice(0,20)){
   if(typeof record?.id!=='string'||typeof record.configuredActive!=='boolean'||!Number.isFinite(Date.parse(record.observedAt)))continue;
   let name,parentId,configuration=record.configuredActive?'configured':'inactive';
   if(record.id==='role:institute-lead'&&record.registryId==='institute-lead'){name='Institute lead';parentId='dept:institute';}
   else if(record.id==='role:video-supervisor'&&record.registryId==='department-director'){name='Video supervisor';parentId='team:video';if(record.configuredActive)configuration='deterministic';}
   else{if(!record.id.startsWith('role:video:'))continue;const key=record.id.replace(/^role:video:/,'');if(!roleNames[key]||record.registryId!=='future-'+key)continue;name=roleNames[key];parentId='role:video-supervisor';}
   const node={id:record.id,parentId,kind:'role',name,configuration,registryId:record.registryId,configurationObservedAt:record.observedAt,configurationProvenance:'Core /registry via existing observer reader',task:configuration==='deterministic'?'Department director · deterministic routing':configuration==='configured'?'Configured enabled · execution observed separately':'Planned · configured inactive'};
   if(!records.has(node.id)||Date.parse(records.get(node.id).configurationObservedAt)<Date.parse(node.configurationObservedAt))records.set(node.id,node);
  }
 }
 // A missing parent never promotes a role to an invented organizational placement.
 const order=['role:institute-lead','role:video-supervisor',...Object.keys(roleNames).map(key=>'role:video:'+key)];
 const nodes=[...organization.nodes,...[...records.values()].sort((a,b)=>order.indexOf(a.id)-order.indexOf(b.id))],ids=new Set(nodes.map(node=>node.id));
 return {...organization,nodes:nodes.filter(node=>!node.parentId||ids.has(node.parentId))};
}

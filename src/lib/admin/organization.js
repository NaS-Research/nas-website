import 'server-only';
// Organization names are already public on /about. No employee or agent roster is embedded.
// The owner explicitly places both Learn content and Video under NaS Institute.
export const organization = {
 version: 1,
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
 coverageNote:'Only guarded local jobs are connected. Department and worker coverage is incomplete.'
};

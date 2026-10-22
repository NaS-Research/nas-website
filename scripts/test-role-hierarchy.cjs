const fs=require('fs'),Module=require('module'),assert=require('node:assert/strict'),{pathToFileURL}=require('url');
const root=process.cwd(),req=Module.createRequire(root+'/package.json');
(async()=>{
 const model=await import(pathToFileURL(root+'/src/lib/admin/agent-tree.mjs')),swc=req('next/dist/build/swc');await swc.loadBindings();
 async function compile(name,mocks={}){const file=root+'/'+name;const{code}=await swc.transform(fs.readFileSync(file,'utf8'),{filename:file,jsc:{parser:{syntax:'ecmascript',jsx:true},transform:{react:{runtime:'automatic'}}},module:{type:'commonjs'}});const m=new Module(file+'.qa.cjs');m.require=id=>Object.hasOwn(mocks,id)?mocks[id]:req(id);m._compile(code,file+'.qa.cjs');return m.exports;}
 const registryModule=await compile('src/lib/admin/organization.js',{'server-only':{}}),expected=['Research','Script','Visual Production Supervisor','Anatomy, Histology & Cell Biology Specialist','Asset and Scene Library Artist','Scene Animation Artist','Narration','Editing','Final QA','Publishing'];
 const configurationTime=new Date().toISOString(),configurationRows=[{payload:{runtime:{sourceRuntime:'nas-core',roleConfigurations:[{id:'role:institute-lead',registryId:'institute-lead',configuredActive:false,observedAt:configurationTime},{id:'role:video-supervisor',registryId:'department-director',configuredActive:true,observedAt:configurationTime},...Object.entries({'scientific-research':'Scientific Research',scripting:'Scripting','visual-production':'Visual Production',narration:'Narration',editing:'Editing',qa:'QA',publishing:'Publishing'}).map(([key])=>({id:'role:video:'+key,registryId:'future-'+key,configuredActive:false,observedAt:configurationTime}))]}}}];
 const organization=registryModule.organizationForSources(configurationRows);
 const reversed=structuredClone(configurationRows);reversed[0].payload.runtime.roleConfigurations.reverse();assert.deepEqual(registryModule.organizationForSources(reversed).nodes.filter(n=>n.id.startsWith('role:video:')).map(n=>n.name),expected);
 assert.equal(registryModule.organization.nodes.filter(n=>n.kind==='role').length,0);
 assert.equal(registryModule.organizationForSources([]).nodes.filter(n=>n.kind==='role'&&n.configuration==='planned').length,13);
 assert.equal(registryModule.organizationForSources([{payload:{runtime:{sourceRuntime:'wrong',roleConfigurations:configurationRows[0].payload.runtime.roleConfigurations}}}]).nodes.filter(n=>n.kind==='role'&&n.configuration==='planned').length,13);
 assert.deepEqual(organization.nodes.filter(n=>n.id.startsWith('role:video:')).map(n=>n.name),expected);
 const plans=registryModule.organizationForSources([],'');
 const plannedRoles=plans.nodes.filter(n=>n.kind==='role');
 assert.equal(plannedRoles.length,13);assert.ok(plannedRoles.every(n=>n.plannedProfile.model==='gpt-6.1-sol'&&n.plannedProfile.effective===false&&n.configuration==='planned'));
 const planned=id=>plannedRoles.find(n=>n.id===id);
 assert.equal(planned('role:company-director').reportsToId,null);
 assert.equal(planned('role:institute-lead').reportsToId,'role:company-director');
 assert.equal(planned('role:video-supervisor').reportsToId,'role:institute-lead');
 for(const id of ['asset-library','scene-animation']){
  assert.equal(planned('role:video:'+id).parentId,'role:video:visual-production');
  assert.equal(planned('role:video:'+id).reportsToId,'role:video:visual-production');
  assert.equal(planned('role:video:'+id).plannedProfile.reasoningEffort,'medium');
 }
 const specialist=planned('role:video:anatomy-histology-cell-biology');
 assert.equal(specialist.parentId,'role:video:visual-production');assert.equal(specialist.reportsToId,'role:video:visual-production');assert.equal(specialist.plannedProfile.reasoningEffort,'high');assert.match(specialist.qualification,/AI specialist role; not licensed clinician sign-off/);
 const library=plans.videoWorkflow.libraryWorkflow,librarySeen=new Set();
 for(const stage of library.stages){assert.ok(stage.requires.every(id=>librarySeen.has(id)));librarySeen.add(stage.id);assert.ok(stage.roleIds.every(id=>planned(id)));}
 assert.deepEqual(library.stages.find(s=>s.id==='environment-creation').requires,['environment-brief']);
 assert.deepEqual(library.stages.find(s=>s.id==='environment-animation').requires,['environment-review']);
 assert.equal(library.briefRequirements.length,7);assert.match(library.cadence,/one day behind/);assert.match(library.currentWork,/Preserve safe vessel progress/);
 assert.equal(planned('role:video:visual-production').plannedProfile.reasoningEffort,'high');
 assert.equal(planned('role:video:scientific-research').plannedProfile.reasoningEffort,'high');
 assert.equal(planned('role:video:qa').plannedProfile.reasoningEffort,'high');
 for(const id of ['scripting','narration','editing','publishing'])assert.equal(planned('role:video:'+id).plannedProfile.reasoningEffort,'medium');
 assert.match(planned('role:video:asset-library').requestedSchedule,/24\/7 requested; not activated/);
 const stages=plans.videoWorkflow.stages;
 assert.deepEqual(stages.find(s=>s.id==='script').requires,['science-brief']);
 assert.deepEqual(stages.find(s=>s.id==='editing').requires,['visuals','narration']);
 assert.deepEqual(stages.find(s=>s.id==='publishing').requires,['final-qa']);
 const seen=new Set();for(const stage of stages){assert.ok(stage.requires.every(id=>seen.has(id)));seen.add(stage.id);assert.ok(stage.roleIds.every(id=>planned(id)));}
 assert.deepEqual(plans.nodes.filter(n=>n.kind!=='role'),registryModule.organization.nodes,'unrelated department/team structure unchanged');
 assert.ok(model.departmentTree(plans,[],[],Date.now()).filter(n=>n.kind==='role').every(n=>n.status==='planned'&&n.runningCount===0&&n.observedWorkerCount===0));
 const operations=Array.from({length:8},(_,i)=>({id:'stage'+i,kind:'agent',entityKind:'operator_operation',status:'done'}));
 assert.ok(model.activityNodes([{source:'video',device:'fixture',received_at:new Date().toISOString(),payload:{jobs:operations}}]).every(n=>n.kind==='job'));
 console.log('PASS: requested reporting chain, 13 plans, high/medium profiles, visual creators, gated science-to-release workflow, eight stage jobs never staff, unrelated departments preserved');
 const now=Date.now(),stamp=new Date(now).toISOString(),effective={model:'GPT-6.1 Sol',reasoningEffort:'High',provenance:'Verified execution notification',observedAt:stamp,executionId:'turn:actual'};
 const rows=[{source:'video',device:'proof',received_at:stamp,payload:{jobs:[{id:'instance',name:'Episode-specific temporary agent',assignment:'Episode 035',task:'Actual review',kind:'agent',status:'running',observedAt:stamp,roleId:'role:video:qa',executionId:'turn:actual',runtimeModel:effective,requestedModel:{...effective,model:'GPT-6.1 Sol',reasoningEffort:'Ultra',appliesTo:'next-turn'}},{id:'attention-job',name:'Persisted attention task',kind:'job',teamId:'team:video',status:'needs_you',observedAt:stamp},{id:'worker',name:'Company worker',kind:'job',placement:'unassigned',status:'idle',observedAt:stamp}]}}];
 const jobs=model.activityNodes(rows,now),nodes=model.departmentTree(organization,jobs,rows,now),graph=model.layoutTree(nodes.filter(n=>n.structural));
 const departments=graph.nodes.filter(n=>n.kind==='department');assert.equal(new Set(departments.map(n=>n.y)).size,1);assert.equal(departments.length,6);for(let i=1;i<departments.length;i++)assert.ok(departments[i].x>=departments[i-1].x+graph.nodeWidth+40);assert.ok(graph.width>390);
 assert.ok(graph.nodes.every(n=>n.structural));assert.ok(!graph.nodes.some(n=>n.name.includes('Episode')));
 assert.equal(nodes.find(n=>n.id==='role:video:qa').status,'inactive');assert.equal(nodes.find(n=>n.id==='role:video-supervisor').status,'deterministic');assert.equal(nodes.find(n=>n.id==='proof:worker').parentId,'group:unassigned');
 const counts=model.workerCounts(nodes.find(n=>n.id==='dept:institute'));assert.equal(counts.total,null);assert.equal(counts.observed,1);assert.equal(counts.active,1);assert.equal(model.workerCounts(nodes.find(n=>n.id==='dept:institute'),true).active,null);assert.equal(model.workerCounts({observedWorkerCount:0,activeWorkerCount:0,observedJobCount:20,activeJobCount:4,blockedCount:1}).observed,0);assert.equal(model.workerCounts({observedWorkerCount:0,blockedCount:1}).attention,1);
 assert.equal(model.hierarchyExecutions(nodes,'role:video:qa').length,1);assert.equal(jobs.filter(n=>n.kind==='agent').length,1);
 assert.equal(model.executionModel(jobs[0]),'GPT-6.1 Sol · High');
 assert.equal(model.modelObservation({...effective,executionId:'other'},'turn:actual',now,true),null);
 assert.equal(model.modelObservation({...effective,provenance:''},'turn:actual',now,true),null);
 assert.equal(model.executionModel({...jobs[0],runtimeModel:{...effective,fresh:false}}),'Model / reasoning unavailable');
 assert.equal(model.executionModel({...jobs[0],runtimeModel:null}),'Model / reasoning unavailable');
 assert.equal(model.executionModel({...jobs[0],runtimeModel:{...effective,reasoningEffort:null,fresh:true}}),'GPT-6.1 Sol · Reasoning unavailable');
 let cursor=0,slots=[],pending=[],effects=new Map();
 const react={useState(init){const i=cursor++;if(!slots[i])slots[i]={value:typeof init==='function'?init():init};return[slots[i].value,v=>slots[i].value=typeof v==='function'?v(slots[i].value):v];},useRef(init){const i=cursor++;return slots[i]||(slots[i]={current:init});},useMemo(fn){cursor++;return fn();},useEffect(fn,deps){const i=cursor++,old=effects.get(i);if(!old||deps.some((v,j)=>v!==old.deps[j]))pending.push(()=>{old?.cleanup?.();effects.set(i,{deps,cleanup:fn()});});}};
 global.document={activeElement:null};global.ResizeObserver=class{constructor(cb){this.cb=cb;}observe(){this.cb([{contentRect:{width:1200,height:760}}]);}disconnect(){}};
 const element={getBoundingClientRect:()=>({left:0,top:0,height:760}),addEventListener(){},removeEventListener(){}};
 const Tree=(await compile('src/components/admin/AgentTree.jsx',{'react':react,'@/lib/admin/agent-tree.mjs':model})).default;
 function walk(node,predicate){if(!node)return null;if(Array.isArray(node)){for(const item of node){const found=walk(item,predicate);if(found)return found;}return null;}if(typeof node!=='object')return null;if(predicate(node))return node;return walk(node.props?.children,predicate);}
 let activeOrganization=organization,tree;function render(){cursor=0;pending=[];tree=Tree({organization:activeOrganization,sources:rows,now});walk(tree,n=>n.props?.className==='agent-tree-canvas').props.ref.current=element;pending.forEach(fn=>fn());}
 render();render();render();const diagram=walk(tree,n=>n.props?.className==='agent-tree-canvas');assert.equal(walk(diagram,n=>['tree-freshness','tree-explore-hint','agent-tree-bar','agent-tree-controls'].includes(n.props?.className)),null);assert.ok(walk(tree,n=>n.props?.className==='agent-tree-meta'));assert.ok(walk(tree,n=>n.props?.['aria-label']==='Collapse NaS Institute'),'Configured hierarchy starts expanded');
 for(const label of expected)assert.ok(walk(tree,n=>n.type==='h3'&&n.props.children===label),'Rendered canonical role: '+label);
 assert.equal(walk(tree,n=>n.type==='h3'&&n.props.children==='Episode-specific temporary agent'),null);
 walk(tree,n=>n.props?.['aria-label']==='Inspect Final QA').props.onClick();render();
 const React=req('react'),{renderToStaticMarkup}=req('react-dom/server'),html=renderToStaticMarkup(tree);
 assert.match(html,/Episode 035/);assert.match(html,/GPT-6.1 Sol · High/);assert.match(html,/Pending next turn/);assert.match(html,/Ultra/);assert.match(html,/turn:actual/);assert.match(html,/Verified execution notification/);
 assert.match(html,/work observations require attention/);assert.match(html,/Total workers: unavailable/);assert.match(html,/Observed 1 · Active 1/);
 assert.match(html,/Planned role · inactive/);assert.ok(!/h3>Episode-specific/.test(html));
 assert.match(html,/AI specialist role; not licensed clinician sign-off/);assert.match(html,/Environment science and review/);assert.match(html,/Normal versus pathological appearance/);
 assert.match(html,/Video hierarchy &amp; workflow/);assert.match(html,/Reporting hierarchy/);assert.match(html,/Workflow gates/);
 assert.match(html,/24\/7 requested; not activated/);assert.match(html,/Requested profile: gpt-6.1-sol/);assert.match(html,/runtime parent-child launches/);
 assert.match(html,/NaS-Media-Library/);assert.match(html,/Technical fixtures/);assert.match(html,/effective model and reasoning require a verified execution observation/);
 console.log('PASS: exact canonical role names rendered, episodes only in details, inactive configuration separate from real executions, unassigned process stays unassigned, model/effort provenance and matching execution, pending next turn, stale evidence, read-only drawer');

 const planView=walk(tree,n=>typeof n.type==='function'&&n.type.name==='VideoWorkflow');
 const planMarkup=planView.type(planView.props);
 walk(planMarkup,n=>n.type==='button'&&n.props.children==='Asset and Scene Library Artist').props.onClick();render();
 const artistHtml=renderToStaticMarkup(tree);
 assert.match(artistHtml,/Asset and Scene Library Artist details/);assert.match(artistHtml,/gpt-6.1-sol · medium/);
 assert.match(artistHtml,/Reports to: Visual Production Supervisor/);assert.match(artistHtml,/No execution observations assigned to this/);
 assert.equal(nodes.find(n=>n.id==='role:video:asset-library').status,'planned');
 console.log('PASS: hierarchy role selection opens the planned artist details with medium profile and no fabricated execution');

 const privateConfig={version:1,nodes:[
  {id:'fixture-portfolio',parentId:'org:nas',kind:'portfolio',name:'Atlas Portfolio',task:'Approved structure',connected:false,observedAt:stamp,provenance:'Owner approval'},
  {id:'fixture-company',parentId:'fixture-portfolio',kind:'company',name:'Example Company',task:'Company reporting pending',connected:false,observedAt:stamp,provenance:'Owner approval'},
  {id:'fixture-project',parentId:'fixture-company',kind:'project',name:'Example App',task:'Application project',connected:false,observedAt:stamp,provenance:'Owner approval'}
 ],taskReferences:[{id:'fixture-task',projectId:'fixture-project',title:'Saved example task',observedState:'active',observedAt:stamp,provenance:'Verified task snapshot'}]};
 const raw=JSON.stringify(privateConfig),privateMapped=registryModule.organizationForSources([],raw);
 assert.equal(privateMapped.privateConfigurationState,'available');assert.equal(privateMapped.taskReferences.length,1);
 assert.equal(registryModule.organizationForSources([],'').taskReferences.length,0);
 assert.equal(registryModule.organization.nodes.some(n=>n.id==='fixture-company'),false);
 const malformed=[{}, {...privateConfig,nodes:[{...privateConfig.nodes[0],id:'role:company-director'}]}, {...privateConfig,nodes:[...privateConfig.nodes,privateConfig.nodes[0]]}, {...privateConfig,nodes:privateConfig.nodes.map(n=>({...n,connected:true}))}, {...privateConfig,nodes:privateConfig.nodes.map(n=>({...n,parentId:'missing'}))}, {...privateConfig,taskReferences:[{...privateConfig.taskReferences[0],projectId:'missing'}]}, {...privateConfig,taskReferences:[{...privateConfig.taskReferences[0],observedAt:'2999-01-01T00:00:00Z'}]}];
 for(const invalid of ['broken','x'.repeat(16001),...malformed.map(value=>JSON.stringify(value))])assert.deepEqual(registryModule.privateStructure(invalid),{nodes:[],taskReferences:[],state:'invalid'});
 const privateNodes=model.departmentTree(privateMapped,[],[],now),privateGraph=model.layoutTree(privateNodes);
 for(const id of ['fixture-portfolio','fixture-company','fixture-project']){const node=privateNodes.find(n=>n.id===id);assert.equal(node.status,'unconnected');assert.equal(node.runningCount,0);assert.equal(model.activitySummary(node),'Runtime not connected');}
 const columns=privateGraph.nodes.filter(n=>['department','portfolio'].includes(n.kind)).sort((a,b)=>a.x-b.x);assert.equal(columns[0].name,'Atlas Portfolio');assert.equal(new Set(columns.map(n=>n.y)).size,1);assert.ok(privateGraph.nodes.find(n=>n.id==='group:unassigned').x>columns.at(-1).x);
 activeOrganization=privateMapped;render();walk(tree,n=>n.props?.['aria-label']==='Inspect Example Company').props.onClick();render();
 const privateHtml=renderToStaticMarkup(tree),privateCanvas=renderToStaticMarkup(walk(tree,n=>n.props?.className==='agent-tree-canvas'));
 assert.match(privateHtml,/Approved organization structure · not connected/);assert.match(privateHtml,/Reserved identity/);assert.match(privateHtml,/Saved example task/);assert.match(privateHtml,/Last observed: active/);assert.match(privateHtml,/Current task activity is unavailable/);assert.match(privateHtml,/codex_thread/);
 assert.doesNotMatch(privateCanvas,/Saved example task/);assert.equal(model.hierarchyExecutions(privateNodes,'fixture-company').length,0);
 console.log('PASS: private deployment-only portfolio/company/project structure; disconnected runtime, bounded validation and fail-closed metadata; saved task references appear only in details, never live workers or pipeline roles');

 const fallback={...privateConfig,roleSnapshot:{observedAt:stamp,provenance:'Verified saved registry configuration',states:{'company-director':true,'department-director':true,'institute-lead':false,...Object.fromEntries(Object.keys({'scientific-research':1,scripting:1,'visual-production':1,narration:1,editing:1,qa:1,publishing:1}).map(key=>['future-'+key,false]))}}};
 const saved=JSON.stringify(fallback),offlineRegistry=registryModule.organizationForSources([{payload:{runtime:{sourceRuntime:'nas-core',state:'unavailable',roleConfigurations:[]}}}],saved);
 const persistentRoles=offlineRegistry.nodes.filter(n=>n.kind==='role');assert.equal(persistentRoles.length,13);assert.equal(persistentRoles.filter(n=>n.configuration==='inactive').length,8);assert.equal(persistentRoles.filter(n=>n.configuration==='deterministic').length,2);
 assert.deepEqual(offlineRegistry.nodes.filter(n=>n.id.startsWith('role:video:')).map(n=>n.name),expected);
 assert.equal(model.departmentTree(offlineRegistry,[],[],now).filter(n=>n.kind==='role'&&n.status==='running').length,0);
 assert.equal(registryModule.organizationForSources([],saved).nodes.filter(n=>n.kind==='role').length,13);
 const newer={payload:{runtime:{sourceRuntime:'nas-core',roleConfigurations:[{id:'role:institute-lead',registryId:'institute-lead',configuredActive:true,observedAt:new Date(now+1000).toISOString()}]}}};
 assert.equal(registryModule.organizationForSources([newer],saved).nodes.find(n=>n.id==='role:institute-lead').configuration,'configured');
 const older={source:'video',device:'test',received_at:stamp,payload:{runtime:{sourceRuntime:'nas-core',state:'available',checkedAt:stamp,roleConfigurations:[{id:'role:institute-lead',registryId:'institute-lead',configuredActive:true,observedAt:new Date(now-1000).toISOString()}]}}};
 assert.equal(model.departmentTree(registryModule.organizationForSources([older],saved),[],[older],now).find(n=>n.id==='role:institute-lead').configuration,'inactive');
 activeOrganization=offlineRegistry;render();assert.ok(walk(tree,n=>n.type==='h3'&&n.props.children==='NaS Research Director'));for(const label of expected)assert.ok(walk(tree,n=>n.type==='h3'&&n.props.children===label));
 console.log('PASS: ten registry-backed roles and three owner-planned visual roles remain visible without runtime metadata; eight inactive configurations, two deterministic routing roles, zero fabricated running instances; planned profiles remain separate; newer configuration overrides saved snapshot');

})().catch(e=>{console.error(e);process.exit(1)});

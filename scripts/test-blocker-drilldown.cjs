const fs=require('fs'),Module=require('module'),assert=require('node:assert/strict'),{pathToFileURL}=require('url');
const root=process.cwd(),req=Module.createRequire(root+'/package.json');
(async()=>{
 const model=await import(pathToFileURL(root+'/src/lib/admin/agent-tree.mjs')),swc=req('next/dist/build/swc');await swc.loadBindings();
 const now=Date.now(),stamp=new Date(now).toISOString(),changed=new Date(now-86400000).toISOString();
 const registry={nodes:[{id:'org',parentId:null,kind:'organization',name:'Company'},{id:'dept',parentId:'org',kind:'department',name:'Institute'},{id:'video',parentId:'dept',kind:'team',name:'Video'},{id:'role',parentId:'video',kind:'role',name:'Planned specialist',configuration:'inactive'},{id:'group:unassigned',parentId:'org',kind:'group',name:'Unassigned'}],sourceAssignments:{video:'video'}};
 const rows=[{source:'video',device:'test',received_at:stamp,payload:{jobs:[
  {id:'review-1',name:'Persisted operation',assignment:'Example review task',status:'needs_you',observedAt:stamp,stateChangedAt:changed,blocker:{taskId:'record-one',recordedState:'needs_review',registryIdentityId:'configured-native-role',workerAssignment:'unassigned',lastActor:'previous-worker',reasonCode:'productive_stall',provenance:'Source task history',secret:'NEVER FORWARD'}},
  {id:'review-2',name:'Persisted operation',assignment:'Example review task',status:'needs_you',observedAt:stamp,blocker:{taskId:'record-two',recordedState:'needs_review',workerId:'actual-reported-worker',workerAssignment:'reported',reason:'Needs an explicit source review',nextAction:'Compare the saved receipt',requiredPerson:'Reported reviewer',taskUrl:'https://example.test/tasks/record-two',taskUrlProvenance:'Verified source link',provenance:'Explicit task producer'}},
  {id:'review-3',name:'Missing details task',status:'blocked',observedAt:stamp},
  {id:'idle',name:'Idle process',kind:'job',status:'idle',observedAt:stamp}
 ]}}];
 let jobs=model.activityNodes(rows,now),nodes=model.departmentTree(registry,jobs,rows,now);
 assert.equal(model.scopeBlockers(nodes,'video').length,3);assert.equal(nodes.find(n=>n.id==='video').blockedCount,3);assert.equal(nodes.find(n=>n.id==='role').status,'inactive');
 const first=model.blockerRecord(model.scopeBlockers(nodes,'video').find(n=>n.id==='test:review-1'));
 assert.equal(first.id,'record-one');assert.equal(first.worker,null);assert.equal(first.registryIdentityId,'configured-native-role');assert.equal(first.reasonCode,'productive_stall');assert.equal(first.requiredPerson,null);assert.equal(first.nextAction,null);assert.doesNotMatch(JSON.stringify(jobs),/NEVER FORWARD/);
 const staleJobs=model.activityNodes(rows,now+91000),staleNodes=model.departmentTree(registry,staleJobs,rows,now+91000);assert.equal(staleNodes.find(n=>n.id==='video').blockedCount,0);assert.equal(staleNodes.find(n=>n.id==='video').staleBlockedCount,3);assert.ok(model.scopeBlockers(staleNodes,'video').every(n=>model.blockerRecord(n).stale));
 for(const link of ['javascript:alert(1)','http://example.test/tasks/one','https://user:pass@example.test/task','https://example.test/task?token=private'])assert.equal(model.blockerMetadata({taskUrl:link,taskUrlProvenance:'Claimed source',provenance:'Source'}).taskUrl,undefined);
 assert.equal(model.blockerMetadata({taskUrl:'https://example.test/task',provenance:'Source'}).taskUrl,undefined);
 assert.equal(model.blockerRecord({id:'device:task:core:operation:1234-abcd',sourceRuntime:'nas-core',status:'needs_you',name:'Legacy task'}).id,'1234-abcd');
 let cursor=0,slots=[],pending=[],effects=new Map(),scrolled=0;
 const react={useState(init){const i=cursor++;if(!slots[i])slots[i]={value:typeof init==='function'?init():init};return[slots[i].value,v=>slots[i].value=typeof v==='function'?v(slots[i].value):v];},useRef(init){const i=cursor++;return slots[i]||(slots[i]={current:init});},useMemo(fn){cursor++;return fn();},useEffect(fn,deps){const i=cursor++,old=effects.get(i);if(!old||deps.some((v,j)=>v!==old.deps[j]))pending.push(()=>{old?.cleanup?.();effects.set(i,{deps,cleanup:fn()});});}};
 global.document={activeElement:null};global.ResizeObserver=class{constructor(cb){this.cb=cb;}observe(){this.cb([{contentRect:{width:1000,height:700}}]);}disconnect(){}};
 const canvasElement={getBoundingClientRect:()=>({left:0,top:0,height:700}),addEventListener(){},removeEventListener(){},scrollIntoView(){scrolled++;},focus(){document.activeElement=this;},setPointerCapture(){}};
 const detailsElement={scrollIntoView(){scrolled++;}};
 const file=root+'/src/components/admin/AgentTree.jsx';const {code}=await swc.transform(fs.readFileSync(file,'utf8'),{filename:file,jsc:{parser:{syntax:'ecmascript',jsx:true},transform:{react:{runtime:'automatic'}}},module:{type:'commonjs'}});
 const m=new Module(file+'.blockers.cjs');m.require=id=>id==='react'?react:id==='@/lib/admin/agent-tree.mjs'?model:req(id);m._compile(code,file+'.blockers.cjs');
 function walk(n,p){if(!n)return null;if(Array.isArray(n)){for(const child of n){const result=walk(child,p);if(result)return result;}return null;}if(typeof n!=='object')return null;if(p(n))return n;return walk(n.props?.children,p);}
 let props={organization:registry,sources:rows,now},tree,canvas;
 function render(){cursor=0;pending=[];tree=m.exports.default(props);canvas=walk(tree,n=>n.props?.className==='agent-tree-canvas');canvas.props.ref.current=canvasElement;const detail=walk(tree,n=>n.type==='aside');if(detail)detail.props.ref.current=detailsElement;pending.forEach(fn=>fn());}
 const view=()=>[canvas.props['data-zoom'],canvas.props['data-pan-x'],canvas.props['data-pan-y']];
 render();render();walk(tree,n=>n.props?.['aria-label']==='Zoom in').props.onClick();render();canvas.props.onKeyDown({target:canvasElement,key:'ArrowRight',preventDefault(){}});render();const expected=view();
 walk(tree,n=>n.props?.['aria-label']==='Collapse Video').props.onClick();render();assert.equal(walk(tree,n=>n.props?.['aria-label']==='Blocked work'),null);
 walk(tree,n=>n.props?.['aria-label']==='Expand Video').props.onClick();render();assert.ok(walk(tree,n=>n.props?.['aria-label']==='Blocked work'));assert.deepEqual(view(),expected);assert.ok(scrolled>0);
 const {renderToStaticMarkup}=req('react-dom/server');let html=renderToStaticMarkup(tree);
 for(const text of ['record-one','record-two','productive_stall','No current worker assigned in source record','Detailed reason not reported','Compare the saved receipt','Reported reviewer','Status last changed','Last observed','Source task link not reported.','Open source task'])assert.ok(html.includes(text),text);
 assert.doesNotMatch(html,/NEVER FORWARD/);assert.match(html,/configuration assignment, not a verified worker instance/);
 for(let i=0;i<3;i++){walk(tree,n=>n.props?.['aria-label']==='Collapse Video').props.onClick();render();walk(tree,n=>n.props?.['aria-label']==='Expand Video').props.onClick();render();assert.deepEqual(view(),expected);}
 walk(tree,n=>n.type==='button'&&n.props.children==='Back to tree').props.onClick();render();assert.equal(document.activeElement,canvasElement);assert.ok(walk(tree,n=>n.props?.['aria-label']==='Video details'));assert.deepEqual(view(),expected);
 props={...props,now:now+91000};render();html=renderToStaticMarkup(tree);assert.match(html,/0 current blockers/);assert.match(html,/Source is stale or unavailable/);assert.deepEqual(view(),expected);
 walk(tree,n=>n.props?.['aria-label']==='Close details').props.onClick();render();assert.equal(walk(tree,n=>n.type==='aside'),null);assert.deepEqual(view(),expected);
 // The external department report stays separate from live execution and blocker counts.
 const progress={departmentId:'dept:biobank',sourceState:'awaiting_report',producer:'unknown',reportedAt:null,reportedState:'unknown',currentTask:null,completedDeliverables:[],blockers:[],provenance:'Department setup only'};
 props={now,organization:{nodes:[{id:'org',parentId:null,kind:'organization',name:'Company'},{id:'dept:biobank',parentId:'org',kind:'department',name:'BioBank & Insights'}]},sources:[{source:'research',device:'fixture',received_at:stamp,payload:{jobs:[],departmentProgress:[progress]}}]};
 render();walk(tree,n=>n.props?.['aria-label']==='Inspect BioBank & Insights').props.onClick();render();html=renderToStaticMarkup(tree);assert.match(html,/Awaiting the first Gemini report/);assert.match(html,/Live execution, model and process are unknown/);assert.deepEqual(view(),expected);
 Object.assign(progress,{producer:'gemini',sourceState:'available',reportedAt:stamp,reportedState:'blocked',currentTask:{id:'BI-001',title:'Synthetic pilot task'},completedDeliverables:[{task_id:'BI-001',path:'results/fixture.md'}],blockers:[{task_id:'BI-005',reason:'Independent review unavailable'}]});
 render();html=renderToStaticMarkup(tree);for(const text of ['Gemini-reported progress','Synthetic pilot task','results/fixture.md','Independent review unavailable','Fresh producer report','not been independently verified'])assert.ok(html.includes(text),text);
 assert.doesNotMatch(html,/View all [1-9][0-9]* blockers/);assert.deepEqual(view(),expected);
 props={...props,interrupted:true};render();html=renderToStaticMarkup(tree);assert.match(html,/Stale or unavailable producer report/);props={...props,interrupted:false,now:now+91000};render();html=renderToStaticMarkup(tree);assert.match(html,/Stale or unavailable producer report/);assert.deepEqual(view(),expected);
 console.log('PASS: scope-specific unique blocker identities/reasons, missing telemetry, assigned identity versus current worker, safe verified links, original status age versus fresh read, stale blockers, expand/repeat/back/close camera and selection preservation');
})().catch(e=>{console.error(e);process.exit(1)});

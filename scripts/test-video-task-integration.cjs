// Isolated acceptance of the existing stdin producer -> collector -> private tree.
// Optional argv[2] is an explicit sanitized observation fixture, never a live store.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {spawnSync}=require('node:child_process'),{pathToFileURL}=require('node:url'),Module=require('node:module');
const root=path.resolve(__dirname,'..'),req=Module.createRequire(root+'/package.json');
const python=process.env.PYTHON||'/opt/homebrew/bin/python3';
const bridge=String.raw`
import contextlib,importlib.util,json,os,pathlib,subprocess,sys,tempfile
from unittest import mock
sys.path.insert(0,str(pathlib.Path.cwd()/'scripts'))
import admin_activity_events as events
spec=importlib.util.spec_from_file_location('collector','scripts/report-admin-activity.py')
collector=importlib.util.module_from_spec(spec);spec.loader.exec_module(collector)
request=json.load(sys.stdin);observation=request['observation']
with tempfile.TemporaryDirectory(prefix='isolated-video-observation-') as directory:
 store=pathlib.Path(directory)/'events.json'
 def emit(event):
  result=subprocess.run([sys.executable,'-B','scripts/report-task-event.py','--event-file',str(store),'--stdin'],input=json.dumps(event),text=True,capture_output=True,timeout=5,check=True)
  return json.loads(result.stdout)
 def snapshot():
  # No network, live processes, Core reader, credentials, or backend writes.
  with mock.patch.object(collector,'collect_jobs',return_value={s:[] for s in events.SOURCES}),mock.patch.object(collector.subprocess,'run',return_value=subprocess.CompletedProcess([],0,stdout='200')):
   return collector.snapshot(store)
 unrelated={'id':'task:unrelated-fixture','name':'Unrelated fixture','task':'Existing website task','kind':'job','source':'website','status':'waiting','observedAt':observation['observedAt'],'provenance':'Isolated integration fixture'}
 emit(unrelated);first=emit(observation);initial=snapshot();saved=store.read_bytes()
 replay=emit(observation);assert store.read_bytes()==saved
 repeated=snapshot()
 assert store.stat().st_mode & 0o077 == 0
 result={'first':first,'replay':replay,'initial':initial,'repeated':repeated}
 if request.get('observedTerminal'):
  emit(request['observedTerminal']);result['terminal']=snapshot()
 if request['syntheticTransitions']:
  from datetime import timedelta
  later=(events.timestamp(observation['observedAt'])+timedelta(seconds=2)).isoformat()
  emit({**observation,'status':'done','observedAt':later});result['terminal']=snapshot()
  before=store.read_bytes()
  bad={**observation,'runtimeModel':{'model':'fixture-model','provenance':'Synthetic mismatch','observedAt':later,'executionId':'wrong-turn'}}
  try:emit(bad)
  except subprocess.CalledProcessError:pass
  else:raise AssertionError('Mismatched runtime model was accepted')
  assert store.read_bytes()==before
  store.write_text('{invalid');result['unavailable']=snapshot()
 print(json.dumps(result))
`;
function collect(observation,syntheticTransitions=false,observedTerminal=null){
 const result=spawnSync(python,['-B','-c',bridge],{cwd:root,input:JSON.stringify({observation,syntheticTransitions,observedTerminal}),encoding:'utf8',timeout:30000,maxBuffer:1024*1024});
 assert.ifError(result.error);assert.equal(result.status,0,result.stderr);return JSON.parse(result.stdout);
}
(async()=>{
 assert.ok(process.env.NAS_OUTPUT_DIR,'Use the guarded external acceptance runner');
 const model=await import(pathToFileURL(root+'/src/lib/admin/agent-tree.mjs'));
 const swc=req('next/dist/build/swc');await swc.loadBindings();
 const file=root+'/src/lib/admin/organization.js';
 const {code}=await swc.transform(fs.readFileSync(file,'utf8'),{filename:file,jsc:{parser:{syntax:'ecmascript'}},module:{type:'commonjs'}});
 const mod=new Module(file+'.qa.cjs');mod.require=id=>id==='server-only'?{}:req(id);mod._compile(code,file+'.qa.cjs');
 const organization=mod.exports.organizationForSources([],'');
 const fixtureTime=new Date(Date.now()-10000).toISOString();
 const synthetic={id:'task:isolated-library-artist',kind:'agent',source:'video',name:'Asset and Scene Library Artist',task:'Create fixture environment',roleId:'role:video:asset-library',teamId:'team:video',sourceRuntime:'codex',executionId:'fixture-turn',status:'running',observedAt:fixtureTime,provenance:'Synthetic integration fixture',requestedModel:{model:'gpt-6.1-sol',reasoningEffort:'medium',executionId:'fixture-turn',observedAt:fixtureTime,provenance:'Synthetic selected configuration',appliesTo:'current-turn'}};
 const receipts=[];
 function inspect(observation,result,label){
  const base=Date.parse(observation.observedAt),id='fixture-device:'+observation.id;
  const rows=(reports,received)=>reports.map(report=>({source:report.source,device:'fixture-device',received_at:new Date(received).toISOString(),payload:{...report,telemetry:{...report.telemetry,capturedAt:new Date(received).toISOString()}}}));
  // Simulated receipt clocks below are test inputs, never producer timestamps.
  function tree(reports,now,received=now){const r=rows(reports,received);return model.departmentTree(organization,model.activityNodes(r,now),r,now);}
  const event=reports=>reports.find(r=>r.source==='video').jobs.find(j=>j.id===observation.id);
  assert.equal(result.first.changed,true);assert.equal(result.replay.changed,false);
  assert.equal(event(result.initial).observedAt,observation.observedAt);
  assert.deepEqual(event(result.repeated),event(result.initial));
  assert.equal(event(result.initial).heartbeatAt,undefined);
  assert.equal(event(result.initial).runtimeModel,undefined);
  assert.equal(result.initial.find(r=>r.source==='website').jobs[0].id,'task:unrelated-fixture');
  const fresh=tree(result.initial,base),worker=fresh.find(n=>n.id===id);
  assert.equal(worker.parentId,'role:video:asset-library');assert.equal(worker.runtimeParentId,null);
  assert.equal(worker.executionId,observation.executionId);assert.equal(worker.status,'running');
  assert.equal(worker.requestedModel.model,'gpt-6.1-sol');assert.equal(worker.requestedModel.reasoningEffort,'medium');
  assert.equal(model.executionModel(worker),'Model / reasoning unavailable');
  assert.equal(fresh.filter(n=>!n.structural&&n.source==='video').length,1);
  assert.equal(fresh.filter(n=>n.structural&&n.status==='running').length,0);
  for(const role of organization.nodes.filter(n=>n.kind==='role')){
   const direct=fresh.filter(n=>!n.structural&&n.parentId===role.id);
   assert.equal(direct.length,role.id==='role:video:asset-library'?1:0);
  }
  assert.equal(model.workerCounts(fresh.find(n=>n.id==='team:video')).active,1);
  const stale=tree(result.repeated,base+90001),offline=stale.find(n=>n.id===id);
  assert.equal(offline.status,'offline');assert.equal(offline.observedAt,observation.observedAt);
  assert.equal(model.workerCounts(stale.find(n=>n.id==='team:video')).active,null);
  assert.equal(stale.find(n=>n.id==='team:video').activeWorkerCount,0);
  assert.equal(tree(result.initial,base+90001,base).find(n=>n.id===id).status,'offline');
  if(result.terminal){
   const terminalTime=Date.parse(event(result.terminal).observedAt);
   const terminal=tree(result.terminal,terminalTime+180000).find(n=>n.id===id);
   assert.equal(terminal.status,'done');
   assert.equal(terminal.executionId,observation.executionId);
   assert.equal(result.terminal.find(r=>r.source==='video').jobs.length,1);
  }
  if(result.unavailable){
   const unknown=tree(result.unavailable,base+2000).find(n=>n.id===id);
   assert.equal(unknown.status,'unknown');
   assert.equal(unknown.observedAt,event(result.terminal).observedAt);
  }
  const current=tree(result.terminal||result.initial,Date.now()).find(n=>n.id===id);
  receipts.push({label,id:observation.id,executionId:observation.executionId,roleId:worker.roleId,initialObservedAt:observation.observedAt,initialObservedState:worker.status,latestObservedAt:current.observedAt,stateAtTestTime:current.status,selectedModel:worker.requestedModel.model,selectedEffort:worker.requestedModel.reasoningEffort,effectiveModelVerified:false,continuousTransport:false});
 }
 inspect(synthetic,collect(synthetic,true),'synthetic lifecycle acceptance');
 if(process.argv[2]){
  const input=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
  const supplied=Array.isArray(input)?input[0]:input,terminal=Array.isArray(input)?input[1]:null;
  if(Array.isArray(input))assert.equal(input.length,2);
  assert.equal(supplied.roleId,'role:video:asset-library');assert.equal(supplied.source,'video');assert.equal(supplied.status,'running');
  if(terminal){
   for(const key of ['id','executionId','source','roleId'])assert.equal(terminal[key],supplied[key]);
   assert.equal(terminal.status,'done');assert.ok(Date.parse(terminal.observedAt)>Date.parse(supplied.observedAt));
  }
  inspect(supplied,collect(supplied,false,terminal),'dated parent observation; isolated store only');
 }
 fs.writeFileSync(path.join(process.env.NAS_OUTPUT_DIR,'video-task-integration.json'),JSON.stringify({passed:true,checkedAt:new Date().toISOString(),receipts},null,2),{mode:0o600});
 console.log('PASS: existing stdin event producer -> private isolated store -> collector -> one artist execution; selected model separate; replay preserves time; stale/offline/unknown/terminal states; unrelated source preserved; no new transport');
})().catch(error=>{console.error(error);process.exit(1)});

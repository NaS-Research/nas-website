const fs=require('fs'),Module=require('module'),assert=require('node:assert/strict');
const root=process.cwd(),req=Module.createRequire(root+'/package.json');
(async()=>{
 const swc=req('next/dist/build/swc');await swc.loadBindings();
 const file=root+'/src/components/admin/ActivityConsole.jsx';
 const {code}=await swc.transform(fs.readFileSync(file,'utf8'),{filename:file,jsc:{parser:{syntax:'ecmascript',jsx:true},transform:{react:{runtime:'automatic'}}},module:{type:'commonjs'}});
 let cursor=0,slots=[],effects=new Map(),pending=[],timers=[],nextResponse,request;
 const react={
  useState(init){const i=cursor++;if(!slots[i])slots[i]={value:typeof init==='function'?init():init};return[slots[i].value,value=>{slots[i].value=typeof value==='function'?value(slots[i].value):value;}];},
  useEffect(fn,deps){const i=cursor++,prior=effects.get(i);if(!prior||deps.some((v,j)=>v!==prior.deps[j]))pending.push(()=>{prior?.cleanup?.();effects.set(i,{deps,cleanup:fn()});});}
 };
 global.setInterval=(fn,ms)=>{const timer={fn,ms};timers.push(timer);return timer;};global.clearInterval=timer=>{timer.cleared=true;};
 global.fetch=async(url,options)=>{assert.equal(url,'/api/admin/activity');assert.equal(options.cache,'no-store');request=options;return nextResponse;};
 const AgentTree=()=>null,m=new Module(file+'.states.cjs');m.require=id=>id==='react'?react:id==='./AgentTree'?AgentTree:req(id);m._compile(code,file+'.states.cjs');
 let tree;function render(){cursor=0;pending=[];tree=m.exports.default();pending.forEach(fn=>fn());return tree;}
 function find(node,predicate){if(!node)return null;if(Array.isArray(node)){for(const child of node){const match=find(child,predicate);if(match)return match;}return null;}if(typeof node!=='object')return null;return predicate(node)?node:find(node.props?.children,predicate);}
 const child=()=>find(tree,n=>n.type===AgentTree),flush=()=>new Promise(resolve=>setImmediate(resolve));
 const snapshot={sources:[{source:'website',received_at:new Date().toISOString(),payload:{jobs:[]}}],organization:{version:1,nodes:[]}};
 nextResponse={ok:true,status:200,json:async()=>snapshot};render();assert.equal(child().props.loading,true);assert.deepEqual(child().props.sources,[]);
 await flush();render();assert.equal(child().props.loading,false);assert.deepEqual(child().props.sources,snapshot.sources);assert.equal(child().props.interrupted,false);
 const poll=timers.find(t=>t.ms===10000);
 nextResponse={ok:false,status:503};await poll.fn();await flush();render();assert.equal(child().props.interrupted,true);assert.deepEqual(child().props.sources,snapshot.sources);assert.ok(find(tree,n=>n.props?.role==='alert'));
 nextResponse={ok:false,status:403};await poll.fn();await flush();render();assert.deepEqual(child().props.sources,[]);assert.equal(child().props.organization,undefined);
 nextResponse={ok:true,status:200,json:async()=>snapshot};find(tree,n=>n.type==='button'&&n.props.children==='Retry').props.onClick();render();assert.equal(child().props.loading,true);await flush();render();assert.equal(child().props.interrupted,false);assert.equal(child().props.loading,false);assert.deepEqual(child().props.sources,snapshot.sources);assert.equal(poll.cleared,true);
 effects.forEach(effect=>effect.cleanup?.());assert.equal(request.signal.aborted,true);
 console.log('PASS: loading, successful load, source failure retains last report as interrupted, authorization failure clears private data, retry recovers, cleanup aborts polling');
})().catch(error=>{console.error(error);process.exit(1)});

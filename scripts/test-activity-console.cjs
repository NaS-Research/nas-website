const fs=require('fs'),Module=require('module'),assert=require('node:assert/strict');
const root=process.cwd(),req=Module.createRequire(root+'/package.json');
(async()=>{
 const swc=req('next/dist/build/swc');await swc.loadBindings();
 const file=root+'/src/components/admin/ActivityConsole.jsx';
 const {code}=await swc.transform(fs.readFileSync(file,'utf8'),{filename:file,jsc:{parser:{syntax:'ecmascript',jsx:true},transform:{react:{runtime:'automatic'}}},module:{type:'commonjs'}});
 let cursor=0,slots=[],effects=new Map(),pending=[],callbacks,stops=0;
 const react={useState(init){const i=cursor++;if(!slots[i])slots[i]={value:typeof init==='function'?init():init};return[slots[i].value,value=>{slots[i].value=typeof value==='function'?value(slots[i].value):value;}];},useEffect(fn,deps){const i=cursor++,prior=effects.get(i);if(!prior||deps.some((v,j)=>v!==prior.deps[j]))pending.push(()=>{prior?.cleanup?.();effects.set(i,{deps,cleanup:fn()});});}};
 const AgentTree=()=>null,ConnectionStatus=()=>null,m=new Module(file+'.states.cjs');
 m.require=id=>id==='react'?react:id==='./AgentTree'?AgentTree:id==='./ConnectionStatus'?ConnectionStatus:id==='@/lib/admin/activity-poller.mjs'?{startActivityPolling:c=>{callbacks=c;return()=>stops++;}}:req(id);m._compile(code,file+'.states.cjs');
 let tree;function render(){cursor=0;pending=[];tree=m.exports.default();pending.forEach(fn=>fn());}
 function find(node,predicate){if(!node)return null;if(Array.isArray(node)){for(const child of node){const match=find(child,predicate);if(match)return match;}return null;}if(typeof node!=='object')return null;return predicate(node)?node:find(node.props?.children,predicate);}
 const child=()=>find(tree,n=>n.type===AgentTree),snapshot={sources:[{source:'website'}],organization:{nodes:[]}};
 render();assert.equal(child().props.loading,true);
 callbacks.onSnapshot(snapshot);callbacks.onState({state:'connected',message:'',lastSuccessAt:123});render();assert.equal(child().props.interrupted,false);assert.equal(child().props.loading,false);
 callbacks.onState({state:'interrupted',message:'Connection interrupted.'});render();assert.equal(child().props.interrupted,true);assert.deepEqual(child().props.sources,snapshot.sources);assert.equal(find(tree,n=>n.type===ConnectionStatus).props.connection.lastSuccessAt,123);
 callbacks.onAuthLost();callbacks.onState({state:'unauthorized',message:'Sign in'});render();assert.deepEqual(child().props.sources,[]);assert.equal(child().props.organization,undefined);
 find(tree,n=>n.type==='button').props.onClick();render();assert.equal(child().props.loading,true);assert.equal(stops,1);
 callbacks.onSnapshot(snapshot);callbacks.onState({state:'connected',message:''});render();assert.equal(child().props.interrupted,false);
 effects.forEach(effect=>effect.cleanup?.());assert.equal(stops,2);
 console.log('PASS: loading, connection detail, stale retention, access loss clears organization and data, retry and cleanup');
})().catch(error=>{console.error(error);process.exit(1)});

const fs=require('fs'),Module=require('module'),assert=require('node:assert/strict'),{pathToFileURL}=require('url');
const root=process.cwd(),req=Module.createRequire(root+'/package.json');
(async()=>{
const model=await import(pathToFileURL(root+'/src/lib/admin/agent-tree.mjs'));
const jobs=[{id:'a',name:'Orchestrator',kind:'agent',status:'running'},{id:'b',parentId:'a',name:'Researcher',kind:'agent',status:'running'},{id:'c',parentId:'a',name:'Writer',kind:'agent',status:'done'},{id:'d',parentId:'b',name:'Analyst',kind:'agent',status:'running'}];
const now=Date.now(),rows=[{device:'test',source:'research',received_at:new Date(now).toISOString(),payload:{jobs}}];
const nodes=model.activityNodes(rows,now),graph=model.layoutTree(nodes);
assert.equal(graph.nodes.length,4);assert.equal(graph.edges.length,3);
for(const edge of graph.edges){const a=graph.nodes.find(node=>node.id===edge.from),b=graph.nodes.find(node=>node.id===edge.to);assert.ok(a.y<b.y);}
assert.equal(model.layoutTree(nodes,new Set(['test:b'])).nodes.length,3);
assert.equal(model.layoutTree(nodes,new Set(['test:a'])).nodes.length,1);
assert.equal(model.activityNodes(rows,now+100000)[0].status,'offline');
assert.equal(nodes[0].costUsd,null);assert.equal(nodes[0].model,null);
assert.equal(model.activityNodes([{...rows[0],payload:{jobs:[{id:'a',parentId:'missing'}]}}])[0].parentId,null);
const cycle=model.activityNodes([{...rows[0],payload:{jobs:[{id:'a',parentId:'b'},{id:'b',parentId:'a'}]}}]);
assert.equal(model.layoutTree(cycle).nodes.length,2);
assert.equal(model.layoutTree([]).nodes.length,0);
const swc=req('next/dist/build/swc');await swc.loadBindings();
const file=root+'/src/components/admin/AgentTree.jsx';
const {code}=await swc.transform(fs.readFileSync(file,'utf8'),{filename:file,jsc:{parser:{syntax:'ecmascript',jsx:true},transform:{react:{runtime:'automatic'}}},module:{type:'commonjs'}});
const m=new Module(file+'.qa.cjs');m.require=id=>id==='@/lib/admin/agent-tree.mjs'?model:req(id);m._compile(code,file+'.qa.cjs');
const React=req('react'),{renderToStaticMarkup}=req('react-dom/server');
const html=renderToStaticMarkup(React.createElement(m.exports.default,{sources:rows,now}));
assert.match(html,/Collapse Orchestrator/);assert.match(html,/Inspect Analyst/);assert.match(html,/Cost not reported/);assert.match(html,/3 running/);
console.log('PASS: tree layout, collapse, multi-level edges, cycle defense, missing parents, offline state, unknown usage, and actual card rendering');
})();

const fs=require('fs'),Module=require('module'),assert=require('node:assert/strict'),{pathToFileURL}=require('url');
const root=process.cwd(),req=Module.createRequire(root+'/package.json');
(async()=>{
 const model=await import(pathToFileURL(root+'/src/lib/admin/agent-tree.mjs')),swc=req('next/dist/build/swc');await swc.loadBindings();
 const file=root+'/src/components/admin/AgentTree.jsx';
 const {code}=await swc.transform(fs.readFileSync(file,'utf8'),{filename:file,jsc:{parser:{syntax:'ecmascript',jsx:true},transform:{react:{runtime:'automatic'}}},module:{type:'commonjs'}});
 let cursor=0,slots=[],pending=[],effectState=new Map(),listeners=new Map();
 const react={
  useState(init){const i=cursor++;if(!slots[i])slots[i]={value:typeof init==='function'?init():init};return [slots[i].value,v=>{slots[i].value=typeof v==='function'?v(slots[i].value):v;}];},
  useRef(init){const i=cursor++;if(!slots[i])slots[i]={current:init};return slots[i];},
  useMemo(fn){cursor++;return fn();},
  useEffect(fn,deps){const i=cursor++,prior=effectState.get(i);if(!prior||deps.some((value,j)=>value!==prior.deps[j])){pending.push(()=>{prior?.cleanup?.();const cleanup=fn();effectState.set(i,{deps,cleanup});});}}
 };
 global.document={activeElement:null};
 const element={getBoundingClientRect:()=>({left:10,top:20,height:700}),addEventListener:(type,fn,options)=>listeners.set(type,{fn,options}),removeEventListener:type=>listeners.delete(type),focus(){document.activeElement=this;},blur(){document.activeElement=null;},setPointerCapture(){}};
 let resize;global.ResizeObserver=class{constructor(cb){this.cb=cb;resize=cb;}observe(){this.cb([{contentRect:{width:900,height:700}}]);}disconnect(){}};
 const m=new Module(file+'.viewport.cjs');m.require=id=>id==='react'?react:id==='@/lib/admin/agent-tree.mjs'?model:req(id);m._compile(code,file+'.viewport.cjs');
 const registry={nodes:[{id:'org',parentId:null,kind:'organization',name:'Company'},{id:'dept:i',parentId:'org',kind:'department',name:'Institute'},{id:'team:l',parentId:'dept:i',kind:'team',name:'Learn'},{id:'group:unassigned',parentId:'org',kind:'group',name:'Unassigned'}]};
 let props={organization:registry,sources:[],now:Date.now()},tree,canvas;
 function walk(node,predicate){if(!node)return null;if(Array.isArray(node)){for(const item of node){const found=walk(item,predicate);if(found)return found;}return null;}if(typeof node!=='object')return null;if(predicate(node))return node;return walk(node.props?.children,predicate);}
 function render(){cursor=0;pending=[];tree=m.exports.default(props);canvas=walk(tree,n=>n.props?.className==='agent-tree-canvas');canvas.props.ref.current=element;const run=pending;pending=[];run.forEach(fn=>fn());return tree;}
 function view(){return [canvas.props['data-zoom'],canvas.props['data-pan-x'],canvas.props['data-pan-y']];}
 render();render();render();
 walk(tree,n=>n.props?.['aria-label']==='Zoom in').props.onClick();render();
 canvas.props.onPointerDown({target:{closest:()=>null},clientX:100,clientY:100,currentTarget:element,pointerId:1});
 canvas.props.onPointerMove({clientX:166,clientY:145});canvas.props.onPointerUp();render();
 const expected=view();
 for(let i=0;i<4;i++){const button=walk(tree,n=>/^Expand Institute$|^Collapse Institute$/.test(n.props?.['aria-label']||''));button.props.onClick();render();assert.deepEqual(view(),expected);}
 assert.ok(walk(tree,n=>n.props?.['aria-label']==='Collapse Institute'),'Structure begins expanded');
 walk(tree,n=>n.props?.['aria-label']==='Inspect Learn').props.onClick();render();assert.deepEqual(view(),expected);
 props={...props,sources:[{source:'research',device:'test',received_at:new Date().toISOString(),payload:{jobs:[{id:'test-event',teamId:'team:l',name:'Test event',status:'running'}]}}]};render();render();assert.deepEqual(view(),expected);
 props={...props,organization:{...registry,nodes:[...registry.nodes].reverse()}};render();assert.deepEqual(view(),expected);
 props={...props,organization:{...registry,nodes:[...registry.nodes,{id:'new-portfolio',parentId:'org',kind:'portfolio',name:'Added approved portfolio'}]}};render();assert.deepEqual(view(),expected);
 resize([{contentRect:{width:420,height:600}}]);render();assert.deepEqual(view(),expected);
 assert.equal(walk(tree,n=>n.type==='button'&&n.props.children==='Fit'),null);
 assert.equal(listeners.get('wheel').options.passive,false);
 const before=view();document.activeElement=null;let prevented=false;
 listeners.get('wheel').fn({ctrlKey:false,metaKey:false,deltaY:80,deltaMode:0,clientX:160,clientY:240,preventDefault(){prevented=true;}});render();
 assert.equal(prevented,false);assert.deepEqual(view(),before);
 const anchor={x:150,y:220},world={x:(anchor.x-before[1])/before[0],y:(anchor.y-before[2])/before[0]};
 listeners.get('wheel').fn({ctrlKey:true,metaKey:false,deltaY:-80,deltaMode:0,clientX:160,clientY:240,preventDefault(){prevented=true;}});render();
 assert.equal(prevented,true);assert.ok(Math.abs((anchor.x-view()[1])/view()[0]-world.x)<1e-9);assert.ok(Math.abs((anchor.y-view()[2])/view()[0]-world.y)<1e-9);
 document.activeElement=element;
 const focused=view();listeners.get('wheel').fn({ctrlKey:false,metaKey:false,deltaY:60,deltaMode:0,clientX:160,clientY:240,preventDefault(){}});render();assert.notEqual(view()[0],focused[0]);
 canvas.props.onKeyDown({target:element,key:'Escape'});assert.equal(document.activeElement,null);
 props={sources:[],organization:null,now:Date.now(),loading:true};render();
 assert.equal(walk(tree,n=>n.type==='p'&&n.props.children==='Connecting to reported activity…').props.children,'Connecting to reported activity…');
 props={...props,loading:false};render();assert.ok(walk(tree,n=>n.type==='p'&&n.props.children==='No activity reported yet.'));
 props={...props,interrupted:true};render();assert.ok(walk(tree,n=>n.type==='p'&&n.props.children==='Activity connection unavailable.'));
 console.log('PASS: exact zoom/pan preserved through repeated expand/collapse, card selection and live refresh; no Fit control; cursor anchor invariant; normal page wheel passes through; focused wheel and Escape work');
})().catch(e=>{console.error(e);process.exit(1)});

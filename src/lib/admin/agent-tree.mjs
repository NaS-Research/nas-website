export function activityNodes(rows,now=Date.now()){
 const nodes=new Map();
 for(const row of rows||[]){
  const fresh=now-Date.parse(row.received_at)<=90000;
  for(const job of Array.isArray(row.payload?.jobs)?row.payload.jobs:[]){
   if(job.id===undefined||job.id===null)continue;
   const id=row.device+':'+String(job.id);
   nodes.set(id,{id,parentId:job.parentId?row.device+':'+String(job.parentId):null,name:String(job.name||'Unnamed job').slice(0,140),task:String(job.task||job.name||'Task not reported').slice(0,240),model:typeof job.model==='string'?job.model:null,kind:job.kind==='agent'?'agent':'job',source:row.source,device:row.device,status:!fresh?'offline':['running','done','failed','waiting'].includes(job.status)?job.status:'running',costUsd:typeof job.costUsd==='number'&&Number.isFinite(job.costUsd)&&job.costUsd>=0?job.costUsd:null,elapsedSeconds:Math.max(0,Number(job.elapsedSeconds)||0),receivedAt:row.received_at});
  }
 }
 for(const node of nodes.values()){
  if(!nodes.has(node.parentId)||node.parentId===node.id)node.parentId=null;
  const seen=new Set([node.id]);let parent=nodes.get(node.parentId);
  while(parent){if(seen.has(parent.id)){node.parentId=null;break;}seen.add(parent.id);parent=nodes.get(parent.parentId);}
 }
 return [...nodes.values()];
}
export function layoutTree(nodes,collapsed=new Set()){
 const W=238,H=138,GAP=28,LEVEL=48,INDENT=28,STACK=18;
 const byId=new Map(nodes.map(node=>[node.id,node])),children=new Map();
 for(const node of nodes){const key=byId.has(node.parentId)?node.parentId:null;if(!children.has(key))children.set(key,[]);children.get(key).push(node);}
 const positions=[],edges=[],measurements=new Map();
 function kids(node){return collapsed.has(node.id)?[]:children.get(node.id)||[];}
 function nestedSize(node){
  const descendants=kids(node),sizes=descendants.map(nestedSize);
  const value={width:Math.max(W,...sizes.map(size=>INDENT+size.width)),height:H+(sizes.length?STACK+sizes.reduce((sum,size)=>sum+size.height,0)+(sizes.length-1)*STACK:0)};
  measurements.set(node.id,value);return value;
 }
 function rootSize(node){
  const sizes=kids(node).map(nestedSize);
  const value={width:Math.max(W,sizes.reduce((sum,size)=>sum+size.width,0)+Math.max(0,sizes.length-1)*GAP),height:H+(sizes.length?LEVEL+Math.max(...sizes.map(size=>size.height)):0)};
  measurements.set(node.id,value);return value;
 }
 function add(node,x,y){positions.push({...node,x,y,childCount:(children.get(node.id)||[]).length,collapsed:collapsed.has(node.id)});}
 function placeNested(node,x,y){
  add(node,x,y);let cursor=y+H+STACK;
  for(const child of kids(node)){placeNested(child,x+INDENT,cursor);edges.push({from:node.id,to:child.id,nested:true});cursor+=measurements.get(child.id).height+STACK;}
 }
 const roots=children.get(null)||[];for(const root of roots)rootSize(root);
 let cursor=0,height=H;
 for(const root of roots){
  const size=measurements.get(root.id);add(root,cursor+(size.width-W)/2,0);
  let column=cursor;for(const child of kids(root)){placeNested(child,column,H+LEVEL);edges.push({from:root.id,to:child.id,nested:false});column+=measurements.get(child.id).width+GAP;}
  cursor+=size.width+GAP*2;height=Math.max(height,size.height);
 }
 return {nodes:positions,edges,width:Math.max(W,cursor-GAP*2),height,nodeWidth:W,nodeHeight:H};
}

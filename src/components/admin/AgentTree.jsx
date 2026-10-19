'use client';
import {useEffect,useMemo,useRef,useState} from 'react';
import {activityNodes,layoutTree} from '@/lib/admin/agent-tree.mjs';
const labels={website:'Website',research:'Research',video:'Video'};
const money=value=>value===null?'Usage not reported':'$'+value.toFixed(2);
const elapsed=seconds=>seconds>=60?Math.floor(seconds/60)+'m '+Math.floor(seconds%60)+'s':Math.floor(seconds)+'s';
export default function AgentTree({sources,now,interrupted=false}){
 const nodes=useMemo(()=>activityNodes(sources,now),[sources,now]);
 const [collapsed,setCollapsed]=useState(new Set()),[selected,setSelected]=useState(null),[view,setView]=useState({x:40,y:40,scale:1}),[size,setSize]=useState({width:1000,height:650});
 const canvas=useRef(null),drag=useRef(null);
 const graph=useMemo(()=>layoutTree(nodes,collapsed),[nodes,collapsed]);
 const key=graph.nodes.map(node=>node.id+':'+node.x+':'+node.y).join('|');
 const chosen=nodes.find(node=>node.id===selected);
 const running=nodes.filter(node=>node.status==='running').length;
 const knownCosts=nodes.filter(node=>node.costUsd!==null),cost=knownCosts.reduce((sum,node)=>sum+node.costUsd,0);
 function fit(){
  const scale=Math.max(.3,Math.min(1.1,(size.width-70)/graph.width,(size.height-70)/graph.height));
  setView({scale,x:(size.width-graph.width*scale)/2,y:Math.max(25,(size.height-graph.height*scale)/2)});
 }
 useEffect(()=>{const observer=new ResizeObserver(([entry])=>setSize({width:entry.contentRect.width,height:entry.contentRect.height}));if(canvas.current)observer.observe(canvas.current);return()=>observer.disconnect();},[]);
 useEffect(()=>{fit();},[key,size.width,size.height]);
 function zoom(factor){
  setView(old=>{const scale=Math.max(.25,Math.min(1.8,old.scale*factor)),ratio=scale/old.scale;return {scale,x:size.width/2-(size.width/2-old.x)*ratio,y:size.height/2-(size.height/2-old.y)*ratio};});
 }
 return <section className="agent-tree" aria-label="Interactive agent tree">
  <header className="agent-tree-bar"><span><b aria-hidden="true">✦</b> Activity tree</span><div><span>{nodes.length} {nodes.some(node=>node.kind==='agent')?'agents / jobs':'jobs'}</span><span className="agent-running">{interrupted?'Connection interrupted':running+' running'}</span><span>{nodes.length&&knownCosts.length===nodes.length?money(cost):'Usage not reported'}</span></div></header>
  <div ref={canvas} className="agent-tree-canvas" onPointerDown={event=>{if(event.target.closest('button,a'))return;drag.current={x:event.clientX,y:event.clientY,view};event.currentTarget.setPointerCapture(event.pointerId);}}
   onPointerMove={event=>{if(!drag.current)return;setView({...drag.current.view,x:drag.current.view.x+event.clientX-drag.current.x,y:drag.current.view.y+event.clientY-drag.current.y});}}
   onPointerUp={()=>{drag.current=null;}} onPointerCancel={()=>{drag.current=null;}}
   onWheel={event=>{if(event.ctrlKey||event.metaKey)zoom(event.deltaY<0?1.08:.92);}}>
   {!nodes.length?<div className="agent-tree-empty"><span>✦</span><h2>No activity reported yet.</h2><p>New work will appear here when a connected source reports it.</p></div>:
   <div className="agent-tree-scene" style={{width:graph.width,height:graph.height,transform:`translate(${view.x}px,${view.y}px) scale(${view.scale})`}}>
    <svg className="agent-tree-lines" width={graph.width} height={graph.height} aria-hidden="true">{graph.edges.map(edge=>{const a=graph.nodes.find(node=>node.id===edge.from),b=graph.nodes.find(node=>node.id===edge.to),x=edge.nested?a.x+18:a.x+graph.nodeWidth/2,y=a.y+graph.nodeHeight,tx=edge.nested?b.x:b.x+graph.nodeWidth/2,ty=edge.nested?b.y+23:b.y;return <g key={edge.from+edge.to}><path d={edge.nested?`M${x} ${y} V${ty} H${tx}`:`M${x} ${y} V${y+24} H${tx} V${ty}`}/><circle cx={x} cy={y} r="3"/><circle cx={tx} cy={ty} r="3"/></g>;})}</svg>
    {graph.nodes.map(node=><article key={node.id} className={'agent-card '+(node.id===selected?'selected':'')} style={{left:node.x,top:node.y,width:graph.nodeWidth,height:graph.nodeHeight}}>
     <button className="agent-card-main" onClick={()=>setSelected(node.id)} aria-label={'Inspect '+node.name}>
      <div className="agent-card-heading"><span className="agent-avatar" aria-hidden="true">{node.kind==='agent'?'✦':'◈'}</span><div><h3 title={node.name}>{node.name}</h3><p>{node.model||'Model not reported'}</p></div><span className={'agent-state '+(interrupted?'offline':node.status)}><i/>{interrupted?'Offline':node.status==='done'?'Done':node.status==='running'?'Running':node.status==='failed'?'Failed':node.status==='waiting'?'Waiting':'Offline'}</span></div>
      <p className="agent-card-task"><span>{labels[node.source]||'NaS'}</span> {node.task}</p>
     </button>
     <footer><span>{node.costUsd===null?'—':money(node.costUsd)} <i>· {elapsed(node.elapsedSeconds)}</i></span>{node.childCount>0&&<button onClick={()=>setCollapsed(old=>{const next=new Set(old);if(next.has(node.id))next.delete(node.id);else next.add(node.id);return next;})} aria-expanded={!node.collapsed} aria-label={(node.collapsed?'Expand ':'Collapse ')+node.name}>{node.childCount}<span>{node.collapsed?'⌄':'⌃'}</span></button>}</footer>
    </article>)}
   </div>}
   <nav className="agent-tree-controls" aria-label="Tree zoom"><button onClick={()=>zoom(.85)} aria-label="Zoom out">−</button><button onClick={fit}>Fit</button><button onClick={()=>zoom(1.18)} aria-label="Zoom in">+</button></nav>
   <span className="agent-tree-pan-hint">Drag to explore</span>
  </div>
  {chosen&&<aside className="agent-inspector" aria-label="Selected activity"><button className="agent-inspector-close" aria-label="Close activity details" onClick={()=>setSelected(null)}>×</button><p className="activity-eyebrow">Activity details</p><h2>{chosen.name}</h2><p>{chosen.task}</p><dl><dt>Source</dt><dd>{labels[chosen.source]}</dd><dt>Model</dt><dd>{chosen.model||'Not reported'}</dd><dt>Usage</dt><dd>{money(chosen.costUsd)}</dd><dt>Started by</dt><dd>{nodes.find(node=>node.id===chosen.parentId)?.name||'Parent not reported'}</dd><dt>Last report</dt><dd>{new Date(chosen.receivedAt).toLocaleString()}</dd></dl></aside>}
 </section>;
}

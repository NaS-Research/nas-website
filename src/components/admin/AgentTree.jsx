'use client';
import {useEffect,useMemo,useRef,useState} from 'react';
import {activityNodes,activitySummary,departmentTree,hierarchyExecutions,executionModel,workerCounts,layoutTree,sourceFresh,usageTotals,zoomView} from '@/lib/admin/agent-tree.mjs';
const money=value=>value===null?'Cost not reported':value>0&&value<.01?'<$0.01':'$'+value.toFixed(2);
const elapsed=seconds=>seconds===null?'Time not reported':seconds>=60?Math.floor(seconds/60)+'m '+Math.floor(seconds%60)+'s':Math.floor(seconds)+'s';
const stateLabel={running:'Active',done:'Done',needs_you:'Blocked',waiting:'Waiting',failed:'Failed',offline:'Offline',unknown:'Activity unavailable',active:'Active',reporting:'Reporting',reported:'Reported',unconnected:'Not connected',unmapped:'Activity unavailable',unavailable:'Activity unavailable',idle:'Idle',blocked:'Blocked',inactive:'Inactive',deterministic:'Routing',configured:'Configured',cancelled:'Cancelled'};
export default function AgentTree({sources=[],organization=null,now=Date.now(),interrupted=false,loading=false}){
 const jobs=useMemo(()=>activityNodes(sources,now),[sources,now]);
 const nodes=useMemo(()=>departmentTree(organization,jobs,sources,now),[organization,jobs,sources,now]);
 const [collapsed,setCollapsed]=useState(new Set()),[selected,setSelected]=useState(null),[view,setView]=useState({x:40,y:90,scale:1}),[size,setSize]=useState({width:0,height:0}),[exploring,setExploring]=useState(false);
 const initialized=useRef(false),initializedView=useRef(false),canvas=useRef(null),drag=useRef(null);
 useEffect(()=>{
  if(organization&&!initialized.current){initialized.current=true;setCollapsed(new Set(organization.nodes.filter(node=>node.kind==='department').map(node=>node.id)));}
 },[organization]);
 const graph=useMemo(()=>layoutTree(organization?nodes.filter(node=>node.structural):nodes,collapsed),[nodes,collapsed]);
 const selectedNode=nodes.find(node=>node.id===selected),executions=selectedNode?.structural?hierarchyExecutions(nodes,selected):selectedNode?[selectedNode]:[];
 const agents=jobs.filter(node=>node.kind==='agent').length,running=jobs.filter(node=>node.status==='running').length,needsYou=jobs.filter(node=>['needs_you','blocked'].includes(node.status)).length;
 const people=jobs.filter(node=>node.kind==='person').length,jobCount=jobs.filter(node=>node.kind==='job').length,roleCount=organization?.nodes.filter(node=>node.kind==='role').length||0;
 const costs=usageTotals(jobs),freshCount=sources.filter(row=>sourceFresh(row,now)).length;
 const unavailable=interrupted||!jobs.length||jobs.every(node=>['offline','unknown'].includes(node.status));
 const last=sources.reduce((latest,row)=>Math.max(latest,Date.parse(row.received_at)||0),0);
 useEffect(()=>{
  const observer=new ResizeObserver(([entry])=>setSize({width:entry.contentRect.width,height:entry.contentRect.height}));
  if(canvas.current)observer.observe(canvas.current);return()=>observer.disconnect();
 },[]);
 // Position the initial root once. Neither expansion, refresh, selection nor resize resets the camera.
 useEffect(()=>{
  if(!initializedView.current&&size.width&&nodes.length){
   initializedView.current=true;setView({scale:1,x:(size.width-graph.width)/2,y:90});
  }
 },[size.width,nodes.length,graph.width]);
 useEffect(()=>{
  const element=canvas.current;if(!element)return;
  function wheel(event){
   if(!event.ctrlKey&&!event.metaKey&&document.activeElement!==element)return;
   event.preventDefault();
   const rect=element.getBoundingClientRect(),delta=event.deltaY*(event.deltaMode===1?16:event.deltaMode===2?rect.height:1);
   const factor=Math.exp(-Math.max(-120,Math.min(120,delta))*.0025);
   setView(old=>zoomView(old,factor,{x:event.clientX-rect.left,y:event.clientY-rect.top}));
  }
  element.addEventListener('wheel',wheel,{passive:false});return()=>element.removeEventListener('wheel',wheel);
 },[]);
 function zoom(factor){setView(old=>zoomView(old,factor,{x:size.width/2,y:size.height/2}));}
 function toggle(id){setCollapsed(old=>{const next=new Set(old);next.has(id)?next.delete(id):next.add(id);return next;});}
 function keyDown(event){
  if(event.target!==canvas.current)return;
  if(event.key==='Escape'){canvas.current.blur();setExploring(false);return;}
  const moves={ArrowLeft:[40,0],ArrowRight:[-40,0],ArrowUp:[0,40],ArrowDown:[0,-40]};
  if(moves[event.key]){event.preventDefault();const [x,y]=moves[event.key];setView(old=>({...old,x:old.x+x,y:old.y+y}));}
  if(['+','=','-'].includes(event.key)){event.preventDefault();zoom(event.key==='-'?.85:1.18);}
 }
 return <section className={'agent-tree'+(exploring?' is-exploring':'')} aria-label="NaS departments and agent tree" aria-busy={loading}>
  <header className="agent-tree-bar">
   <a href="/account" title="Return to your NaS workspace"><b aria-hidden="true">✦</b> Agents</a>
   <div className="agent-totals" aria-label="Reported activity totals">
    {roleCount>0&&<span>{roleCount} roles</span>}{unavailable?<span>Activity unavailable</span>:<><span>{agents} agent observation{agents===1?'':'s'}{people>0?' · '+people+' people':''}{jobCount>0?' · '+jobCount+' job'+(jobCount===1?'':'s'):''}</span><span className="total-running">{running} active observations</span><span className="total-needs">{needsYou} blocked</span></>}
    {costs.actualCount>0&&<span title="Reported actual paid API/metered usage; exclusive records only">Paid {money(costs.actualUsd)}</span>}
    {costs.estimateCount>0&&<span title="Reported paid API/metered estimates; distinct from actual charges">Est. {money(costs.estimateUsd)}</span>}
   </div>
  </header>
  <div ref={canvas} className="agent-tree-canvas" tabIndex={0} data-zoom={view.scale} data-pan-x={view.x} data-pan-y={view.y}
   aria-label="Diagram. Click the canvas then scroll to zoom, or use Control or Command plus scroll. Drag to pan. Escape returns to page scrolling."
   onFocus={event=>{if(event.target===canvas.current)setExploring(true);}} onBlur={event=>{if(event.target===canvas.current)setExploring(false);}} onKeyDown={keyDown}
   onPointerDown={event=>{if(event.target.closest('button,a'))return;canvas.current.focus({preventScroll:true});drag.current={x:event.clientX,y:event.clientY,view};event.currentTarget.setPointerCapture(event.pointerId);}}
   onPointerMove={event=>{if(!drag.current)return;setView({...drag.current.view,x:drag.current.view.x+event.clientX-drag.current.x,y:drag.current.view.y+event.clientY-drag.current.y});}}
   onPointerUp={()=>{drag.current=null;}} onPointerCancel={()=>{drag.current=null;}}>
   {!nodes.length?<div className="agent-tree-empty" role="status"><span>✦</span><p>{loading?'Connecting to reported activity…':interrupted?'Activity connection unavailable.':'No activity reported yet.'}</p></div>:
   <div className="agent-tree-scene" style={{width:graph.width,height:graph.height,transform:'translate('+view.x+'px,'+view.y+'px) scale('+view.scale+')'}}>
    <svg className="agent-tree-lines" width={graph.width} height={graph.height} aria-hidden="true">{graph.edges.map(edge=>{
     const a=graph.nodes.find(node=>node.id===edge.from),b=graph.nodes.find(node=>node.id===edge.to),x=edge.nested?a.x+18:a.x+graph.nodeWidth/2,y=a.y+graph.nodeHeight,tx=edge.nested||edge.stacked?b.x:b.x+graph.nodeWidth/2,ty=edge.nested||edge.stacked?b.y+20:b.y;
     const d=edge.stacked?'M'+x+' '+y+' V'+(y+17)+' H'+edge.laneX+' V'+ty+' H'+tx:edge.nested?'M'+x+' '+y+' V'+ty+' H'+tx:'M'+x+' '+y+' V'+(y+17)+' H'+tx+' V'+ty;
     return <g key={edge.from+edge.to}><path d={d}/><circle cx={x} cy={y} r="2.4"/><circle cx={tx} cy={ty} r="2.4"/></g>;
    })}</svg>
    {graph.nodes.map(node=>{
     const state=node.kind==='role'?node.status:interrupted?'offline':node.status,usage=node.paidUsage,workers=workerCounts(node,interrupted);
     const parent=nodes.find(parent=>parent.id===(node.runtimeParentId||(!node.structural?node.parentId:null)));
     const usageDescription=usage?(usage.kind==='estimate'?'Estimated paid usage: ':'Actual paid usage: ')+money(usage.amountUsd)+'; '+usage.provider+' / '+usage.service+'; '+usage.provenance+'; as of '+usage.asOf+(usage.basis?'; basis: '+usage.basis:''):'Cost not reported';
     const description=node.structural?node.task+' · '+activitySummary(node,interrupted)+'. Only observed workers/jobs are counted; coverage is incomplete.':node.task+' · '+stateLabel[state]+'. Model: '+(node.model||'not reported')+(node.model&&node.modelProvenance?' ('+node.modelProvenance+')':'')+'. '+usageDescription+'. Last report: '+new Date(node.observedAt||node.receivedAt).toLocaleString()+'. Source: '+(node.provenance||'Guarded runner observation')+'. Runtime parent: '+(parent&&!parent.structural?parent.name:'not reported')+'.';
     return <article key={node.id} className={'agent-card '+(node.id===selected?'selected':'')+(node.structural?' structure-card':'')} style={{left:node.x,top:node.y,width:graph.nodeWidth,height:graph.nodeHeight}} title={description}>
      <button className="agent-card-main" onClick={()=>{setSelected(node.id);if(node.structural&&node.childCount)toggle(node.id);}} aria-label={'Inspect '+node.name} aria-pressed={node.id===selected} aria-expanded={node.structural&&node.childCount?!node.collapsed:undefined}>
       <div className="agent-card-heading"><span className={'agent-avatar '+(node.structural?'organization-avatar':'')} aria-hidden="true">{node.kind==='organization'?'✦':node.structural?'◆':node.kind==='agent'?'✳':node.kind==='person'?'●':'◈'}</span><div><h3>{node.name}</h3><p>{node.structural?node.kind==='role'?node.configuration==='deterministic'?'Deterministic routing role':node.configuration==='configured'?'Configured role · execution separate':'Planned role · inactive':node.kind==='group'?'Placement unconfirmed':node.kind[0].toUpperCase()+node.kind.slice(1):node.kind==='person'?'Person':node.model||'Model not reported'}</p></div>{workers.attention>0&&<span className="agent-attention" role="img" aria-label={workers.attention+' work observations require attention'} title={workers.attention+' blocked or attention-needed observations; jobs are not worker headcount'}>!</span>}<span className={'agent-state '+state}><i aria-hidden="true"/>{stateLabel[state]||'Unknown'}</span></div>
       <p className="agent-card-task">{node.kind==='role'?(node.reportedCount?'Latest work · '+(node.runningCount?'Active':node.offlineCount?'Stale':'Reported')+' · '+node.reportedCount+' observation'+(node.reportedCount===1?'':'s'):node.task):node.task}</p><span className="tree-sr-only">{description}</span>
      </button>
      <footer><span>{node.kind==='department'?<span className="department-workers" title="No authoritative personnel roster is connected. Observed/active counts include only reported agent or person execution identities, never task jobs or configured roles."><span>Total workers: unavailable</span><span>Observed {workers.observed} · Active {workers.active??'—'}</span></span>:node.structural?activitySummary(node,interrupted):usage?<span className={'agent-paid-cost '+usage.kind} title={usageDescription}>{usage.kind==='estimate'?'Est. ':''}{money(usage.amountUsd)}</span>:null}<i>{node.structural?'':(usage?' · ':'')+(node.elapsedSeconds===null?'':elapsed(node.elapsedSeconds)+' · ')+(state==='offline'?'Last seen ':'Updated ')+new Date(node.observedAt||node.receivedAt).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</i></span>{node.childCount>0&&<button onClick={()=>toggle(node.id)} aria-expanded={!node.collapsed} aria-label={(node.collapsed?'Expand ':'Collapse ')+node.name}>{node.childCount}<span aria-hidden="true">{node.collapsed?'⌄':'⌃'}</span></button>}</footer>
     </article>;
    })}
   </div>}
  </div>
  <footer className="agent-tree-meta">
   <div className="agent-tree-meta-text">
   <span className="tree-explore-hint">{exploring?'Scroll to zoom · Drag to pan · Esc to release':'Click canvas to explore · Ctrl/⌘ + scroll to zoom'}</span>
   <span className="tree-freshness" role="status" title={organization?.coverageNote}> {loading?'Connecting…':interrupted?'Connection interrupted':sources.length===0||freshCount===0?'Activity unavailable':freshCount<sources.length?'Some activity unavailable':'Activity updated'}{last>0?' · '+new Date(last).toLocaleTimeString():''}</span>
   {selectedNode&&<a href="#agent-details">{selectedNode.name} details below ↓</a>}
   </div>
   <nav className="agent-tree-controls" aria-label="Tree zoom"><button onClick={()=>zoom(.85)} aria-label="Zoom out">−</button><button onClick={()=>zoom(1.18)} aria-label="Zoom in">+</button></nav>
   <output className="tree-sr-only" aria-label="Diagram zoom">{Math.round(view.scale*100)} percent</output>
  </footer>
  {selectedNode?.structural&&<aside id="agent-details" className="agent-details" aria-label={selectedNode.name+' details'}>
   <header><div><small>{selectedNode.kind==='role'?'Permanent role':'Organization'}</small><h2>{selectedNode.name}</h2></div><button onClick={()=>setSelected(null)} aria-label="Close details">×</button></header>
   <p>{selectedNode.task}</p>
   {selectedNode.registryId&&<p>Registry identity: <code>{selectedNode.registryId}</code>. Configuration does not establish a running model instance.</p>}
   {selectedNode.configurationObservedAt&&<p>Configuration observed: {selectedNode.configurationObservedAt} · {selectedNode.configurationProvenance}. This timestamp is separate from worker activity.</p>}
   <h3>Assignments & execution instances</h3>
   {!executions.length?<p>No execution observations assigned to this {selectedNode.kind}. {selectedNode.kind==='role'?'No agent is instantiated by this role definition.':''}</p>:executions.map(node=><article className="execution-detail" key={node.id}>
    <h4>{node.assignment||node.name}</h4><span className={'agent-state '+(interrupted?'offline':node.status)}>{stateLabel[interrupted?'offline':node.status]||'Unknown'}</span>
    <p>{node.task}</p><p>{node.entityKind||node.kind} · {executionModel(interrupted?{...node,status:'offline'}:node)}</p>
    {node.requestedModel&&<p>Requested: {node.requestedModel.model} · {node.requestedModel.reasoningEffort||'Reasoning unavailable'} — {node.requestedModel.appliesTo==='next-turn'?'Pending next turn':node.requestedModel.appliesTo}. {node.requestedModel.provenance} · {node.requestedModel.observedAt}</p>}
    {node.runtimeModel&&<p>Effective observation: {node.runtimeModel.provenance} · {node.runtimeModel.observedAt}{!node.runtimeModel.fresh?' · last observed; expired for active execution':''}</p>}
    {node.model&&node.modelProvenance&&<p>Provider model evidence: {node.modelProvenance}</p>}
    <dl><dt>Execution identity</dt><dd>{node.executionId||node.id}</dd><dt>Observed at</dt><dd>{node.observedAt||'Timestamp unavailable'}</dd>{node.stateChangedAt&&<><dt>State last changed</dt><dd>{node.stateChangedAt}</dd></>}{node.heartbeatAt&&<><dt>Worker heartbeat</dt><dd>{node.heartbeatAt}</dd></>}<dt>Source</dt><dd>{node.provenance||'Guarded process observation'}</dd><dt>Runtime parent</dt><dd>{node.runtimeParentId||'Not reported'}</dd><dt>Runtime / epoch</dt><dd>{node.sourceRuntime||'Not reported'} · {node.epoch||'Epoch unavailable'}</dd><dt>Origin event</dt><dd>{node.originEventId||'Not reported'}</dd><dt>Organization assignment</dt><dd>{node.roleId||node.teamId||node.departmentId||(node.placement==='unassigned'?'Unassigned':'Source placement only; role unconfirmed')}</dd></dl>
    {node.elapsedSeconds!==null&&<p>Elapsed: {elapsed(node.elapsedSeconds)}</p>}{node.paidUsage&&<p>{node.paidUsage.kind==='estimate'?'Estimated':'Actual'} paid usage: {money(node.paidUsage.amountUsd)} · {node.paidUsage.provenance} · {node.paidUsage.asOf}</p>}
   </article>)}
   {sources.some(row=>row.payload?.runtime)&&<><h3>Runtime source</h3>{sources.filter(row=>row.payload?.runtime).map(row=>{const runtime=row.payload.runtime;return <p key={row.device+row.source}>{runtime.state==='available'&&sourceFresh(row,now)&&sourceFresh({received_at:runtime.checkedAt},now)&&!interrupted?'Read-only API connected':'Read-only API unavailable'} · checked {runtime.checkedAt||'unavailable'}<br/>Registry: {runtime.registryCount??'unavailable'} definitions ({runtime.departmentRegistryCount??'unavailable'} department) · worker processes: {runtime.workerCount??'unavailable'}<br/>Registry activity flags describe configuration. Worker states use their own heartbeat timestamps. Codex subagent and effective model observations require a separate verified producer.</p>;})}</>}
  </aside>}
 </section>;
}

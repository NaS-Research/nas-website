import {sourceFresh} from './agent-tree.mjs';
const SOURCES=[['website','Website'],['research','Research'],['video','Video']];
const terminal=new Set(['done','failed','cancelled']);
const time=value=>typeof value==='string'&&Number.isFinite(Date.parse(value))?value:null;
const latest=values=>values.map(time).filter(Boolean).sort((a,b)=>Date.parse(b)-Date.parse(a))[0]||null;
export function connectionHealth(rows=[],now=Date.now(),connection={state:'connecting'}){
 const connected=connection.state==='connected';
 const feeds=SOURCES.map(([source,name])=>{
  const row=rows.find(r=>r?.source===source),p=row?.payload||{},t=p.telemetry||{},jobs=Array.isArray(p.jobs)?p.jobs.filter(j=>j&&typeof j==='object'):[];
  const fresh=connected&&!!row&&sourceFresh(row,now),missing=!row;
  const staleJobs=jobs.filter(j=>!terminal.has(j.status)&&(!time(j.observedAt)||!sourceFresh({received_at:j.observedAt},now)||j.status==='unknown')).length;
  const omitted=(Number.isInteger(t.omittedObservations)?t.omittedObservations:0)+(Number.isInteger(t.omittedGuardedJobs)?t.omittedGuardedJobs:0);
  const readers=[];
  if(p.runtime)readers.push({name:'Core reader',state:!fresh?'Last known':p.runtime.state==='available'&&sourceFresh({received_at:p.runtime.sourceObservedAt},now)?'Responding':'Unavailable',at:time(p.runtime.sourceObservedAt)});
  if(p.videoLifecycle)readers.push({name:'Video owner observation',state:p.videoLifecycle.sourceState==='unavailable'?'Unavailable':fresh&&p.videoLifecycle.sourceState==='available'&&Date.parse(p.videoLifecycle.expiresAt)>now?'Dated observation':'Stale',at:time(p.videoLifecycle.observedAt)});
  for(const progress of (Array.isArray(p.departmentProgress)?p.departmentProgress:[]).filter(p=>p&&typeof p==='object'))readers.push({name:'Department producer',state:progress.sourceState==='awaiting_report'?'Awaiting first report':fresh&&progress.sourceState==='available'&&sourceFresh({received_at:progress.reportedAt},now)?'Reported':'Unavailable or stale',at:time(progress.reportedAt)});
  const degraded=p.status==='issue'||t.eventStore==='unavailable'||t.processCensus?.state==='unavailable'||omitted>0||staleJobs>0||readers.some(r=>!['Responding','Reported'].includes(r.state));
  return {source,name,state:missing?'No report':!connected?'Last known':!fresh?'Stale':degraded?'Partial / degraded':'Receiving',receivedAt:time(row?.received_at),capturedAt:time(t.capturedAt),latestEvidenceAt:latest(jobs.map(j=>j.observedAt)),eventStore:(t.eventStore?(fresh?'':'Last known: ')+t.eventStore:'Unknown'),processCensus:(t.processCensus?.state?(fresh?'':'Last known: ')+t.processCensus.state:'Not reported'),publisherSession:typeof t.publisherSession==='string'?t.publisherSession.slice(0,64):null,omitted,staleJobs,records:jobs.length,readers,fresh};
 });
 const receiving=feeds.filter(f=>f.fresh).length;
 return {feeds,receiving,publisher:!connected?'Publisher connection unknown':rows.length===0?'No publisher report':receiving===0?'Publisher stale':receiving<3?'Publisher partially reporting':'Publisher reports arriving',backend:connection.state==='connected'?'Backend connected':connection.state==='offline'?'Browser offline':connection.state==='unauthorized'?'Sign-in required':connection.state==='connecting'?'Connecting to backend':'Backend connection interrupted'};
}
export function displayTime(value){return time(value)?new Date(value).toISOString().replace('T',' ').replace('.000Z',' UTC').replace('Z',' UTC'):'Not reported';}

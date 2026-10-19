'use client';
import Link from 'next/link';
import {useEffect,useState} from 'react';
const groups=[
 {id:'website',name:'Website & workspace',description:'Production availability and guarded website jobs.',number:'01'},
 {id:'research',name:'Research & learning',description:'Research runs and managed learning workflows.',number:'02'},
 {id:'video',name:'Video & media',description:'Guarded rendering and visual production.',number:'03'}
];
const secondsOld=(row,now)=>row?Math.max(0,(now-Date.parse(row.received_at))/1000):Infinity;
const freshness=(row,now)=>!row?'Not connected':secondsOld(row,now)>90?'Offline':row.payload?.status==='issue'?'Needs attention':'Reporting';
const when=value=>value?new Date(value).toLocaleString(): 'No report received';
const duration=value=>{const n=Math.max(0,Number(value)||0);return n>=3600?Math.floor(n/3600)+'h '+Math.floor(n%3600/60)+'m':Math.floor(n/60)+'m';};
export default function ActivityConsole(){
 const [data,setData]=useState(null),[error,setError]=useState(''),[selected,setSelected]=useState('website'),[now,setNow]=useState(Date.now()),[retry,setRetry]=useState(0);
 useEffect(()=>{
  let stopped=false,controller;
  async function update(){
   controller?.abort();controller=new AbortController();
   try{
    const response=await fetch('/api/admin/activity',{cache:'no-store',signal:controller.signal});
    if(response.status===401||response.status===403)setData(null);
    if(!response.ok)throw Error(response.status===403?'Administrator access required.':response.status===401?'Your session has ended. Sign in again.':'Unable to refresh activity.');
    const next=await response.json();if(!stopped){setData(next);setError('');setNow(Date.now());}
   }catch(e){if(!stopped&&e.name!=='AbortError')setError(e.message);}
  }
  update();const timer=setInterval(update,10000),clock=setInterval(()=>setNow(Date.now()),5000);
  return()=>{stopped=true;controller?.abort();clearInterval(timer);clearInterval(clock);};
 },[retry]);
 const rows=data?.sources||[],get=id=>rows.find(row=>row.source===id);
 const active=groups.find(group=>group.id===selected),row=get(selected);
 const jobs=Array.isArray(row?.payload?.jobs)?row.payload.jobs:[];
 const fresh=secondsOld(row,now)<=90&&!error;
 const reporting=rows.filter(item=>secondsOld(item,now)<=90).length;
 const running=rows.filter(item=>secondsOld(item,now)<=90).reduce((sum,item)=>sum+(item.payload?.jobs?.length||0),0);
 return <div className="activity-page">
  <div className="activity-top"><Link href="/account">← Workspace</Link><span>ADMINISTRATOR <i/> READ ONLY</span></div>
  <header className="activity-heading"><div><p className="activity-eyebrow">NaS operations</p><h1>A view of the work.</h1><p>Website, research, and production. One place to follow what is happening.</p></div><div className="activity-summary"><strong>{running}</strong><span>running jobs reported<br/>{reporting} of 3 sources connected</span></div></header>
  {error&&<div className="activity-warning" role="alert">{error} {data&&'Showing the last received report.'}<button onClick={()=>setRetry(n=>n+1)}>Try again</button><Link href="/login">Sign in ↗</Link></div>}
  <div className="activity-layout">
   <section className="activity-map" aria-label="Operations diagram">
    <div className="activity-map-caption"><span>Activity overview</span><span>{data?'Refreshes every 10 seconds':'Connecting…'}</span></div>
    <div className="activity-hub"><span className="activity-hub-mark" aria-hidden="true">N</span><div><span>NaS</span><h2>Activity monitor</h2><p>Observe the work. Follow each source.</p></div><span className={reporting&&!error?'activity-dot reporting':'activity-dot'}/></div>
    <div className="activity-branches" aria-hidden="true"><svg viewBox="0 0 900 76" preserveAspectRatio="none"><path d="M450 0V36M150 76V36H750V76M450 36V76"/></svg></div>
    <div className="activity-sources">{groups.map(group=>{
     const source=get(group.id),status=freshness(source,now),available=secondsOld(source,now)<=90&&!error,count=source?.payload?.jobs?.length||0;
     return <button key={group.id} className={'activity-source '+(selected===group.id?'selected':'')} onClick={()=>setSelected(group.id)} aria-pressed={selected===group.id}>
      <div className="activity-source-top"><span>{group.number}</span><span className={available?'activity-dot reporting':'activity-dot'}/></div>
      <h3>{group.name}</h3><p>{group.description}</p><div className="activity-source-state"><span>{error?'Connection interrupted':status}</span><strong>{available?count+' running':'—'}</strong></div>
     </button>;
    })}</div>
    <div className="activity-legend"><span><i className="activity-dot reporting"/> Reporting</span><span><i className="activity-dot"/> Offline / not connected</span><span>Last refresh {data?new Date(data.checkedAt).toLocaleTimeString():'—'}</span></div>
   </section>
   <aside className="activity-detail" aria-label="Selected source details"><p className="activity-eyebrow">Source details</p><h2>{active.name}</h2><span className="activity-detail-status">{fresh?freshness(row,now):error?'Connection interrupted':freshness(row,now)}</span>
    <dl><dt>Last received</dt><dd>{when(row?.received_at)}</dd><dt>Reporting device</dt><dd>{row?.device||'Not connected'}</dd>{selected==='website'&&<><dt>Website response</dt><dd>{row?.payload?.httpStatus? 'HTTP '+row.payload.httpStatus:'Not reported'}</dd></>}</dl>
    <p className="activity-detail-note">{!row?'This source has not sent a report yet.':!fresh?'Reports are stale. Current activity is unknown until the monitor reconnects.':'The monitor reports active guarded jobs. Missing jobs are not assumed to have completed successfully.'}</p>
   </aside>
  </div>
  <section className="activity-jobs"><div><h2>{active.name}</h2><p>{fresh?'Current jobs reported by the monitor.':'Last known activity. This source is not currently reporting.'}</p></div>
   {jobs.length?<div className="activity-job-list">{jobs.map((job,index)=><article key={job.id||index}><span className={fresh?'activity-dot reporting':'activity-dot'}/><div><h3>{String(job.name||'Unnamed job')}</h3><p>{String(job.workflow||active.name)}</p></div><span>{fresh?'Running':'Last seen running'}</span><time>{duration(job.elapsedSeconds)}</time></article>)}</div>:<div className="activity-empty"><span aria-hidden="true">↗</span><h3>{fresh?'No running jobs reported.':'Waiting for a current report.'}</h3><p>{fresh?'New guarded jobs appear here when the monitor detects them.':'Keep the reporting computer and external drive connected for live activity.'}</p></div>}
  </section>
  <footer className="activity-footnote">This view monitors website availability and local jobs launched through the shared external runner. Cloud build progress, unregistered agents, job outcomes, and queues are not tracked yet. Monitoring does not start, stop, or resume any work.</footer>
 </div>;
}

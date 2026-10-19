'use client';
import Link from 'next/link';
import {useEffect,useState} from 'react';
import AgentTree from './AgentTree';
const labels={website:'Website & workspace',research:'Research & learning',video:'Video & media'};
export default function ActivityConsole(){
 const [data,setData]=useState(null),[error,setError]=useState(''),[now,setNow]=useState(Date.now()),[retry,setRetry]=useState(0);
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
 const sources=data?.sources||[];
 return <div className="activity-page">
  <div className="activity-top"><Link href="/account">← Workspace</Link><span>ADMINISTRATOR <i/> READ ONLY</span></div>
  <header className="activity-heading"><div><p className="activity-eyebrow">NaS operations</p><h1>Follow the work.</h1><p>An interactive tree of reported activity. Open a card to inspect its task and follow its branches.</p></div></header>
  {error&&<div className="activity-warning" role="alert">{error} {data&&'Showing the last received report.'}<button onClick={()=>setRetry(n=>n+1)}>Try again</button><Link href="/login">Sign in ↗</Link></div>}
  <AgentTree sources={sources} now={now} interrupted={!!error}/>
  <div className="activity-source-strip">{Object.entries(labels).map(([id,label])=>{const row=sources.find(source=>source.source===id),connected=!!row&&now-Date.parse(row.received_at)<=90000&&!error;return <span key={id}><i className={connected?'connected':''}/>{label} · {connected?'Reporting':row?'Offline':'Not connected'}</span>;})}<span className="activity-refresh">{data?'Refreshed '+new Date(data.checkedAt).toLocaleTimeString():'Connecting…'}</span></div>
  <footer className="activity-footnote">Currently connected to website health and guarded local runner jobs. Branches show reported parent relationships. Agent model, task, usage, and spawn events appear when supplied by an agent runtime; they are not inferred from job names. Drag the canvas, zoom, select a card, or collapse a branch. This view does not start, stop, or resume work.</footer>
 </div>;
}

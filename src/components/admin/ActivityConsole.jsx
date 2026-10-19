'use client';
import {useEffect,useState} from 'react';
import AgentTree from './AgentTree';
export default function ActivityConsole(){
 const [data,setData]=useState(null),[error,setError]=useState(''),[now,setNow]=useState(Date.now()),[retry,setRetry]=useState(0),[loading,setLoading]=useState(true);
 useEffect(()=>{
  let stopped=false,controller;
  async function update(){
   controller?.abort();controller=new AbortController();
   try{
    const response=await fetch('/api/admin/activity',{cache:'no-store',signal:controller.signal});
    if(response.status===401||response.status===403){if(!stopped)setData(null);}
    if(!response.ok)throw Error(response.status===403?'Administrator access required.':response.status===401?'Session ended. Sign in again.':'Connection interrupted. Last report retained.');
    const next=await response.json();
    if(!stopped){setData(next);setError('');setNow(Date.now());}
   }catch(e){if(!stopped&&e.name!=='AbortError')setError(e.message);}
   finally{if(!stopped)setLoading(false);}
  }
  update();const timer=setInterval(update,10000),clock=setInterval(()=>setNow(Date.now()),5000);
  return()=>{stopped=true;controller?.abort();clearInterval(timer);clearInterval(clock);};
 },[retry]);
 return <div className="activity-page">
  <AgentTree sources={data?.sources||[]} organization={data?.organization} now={now} interrupted={!!error} loading={loading}/>
  {error&&<div className="tree-notice" role="alert">{error}<button onClick={()=>{setLoading(true);setRetry(n=>n+1);}}>Retry</button><a href="/login">Sign in</a></div>}
 </div>;
}

'use client';
import {useEffect,useState} from 'react';
import {startActivityPolling} from '@/lib/admin/activity-poller.mjs';
import AgentTree from './AgentTree';
import ConnectionStatus from './ConnectionStatus';
export default function ActivityConsole(){
 const [data,setData]=useState(null),[now,setNow]=useState(Date.now()),[retry,setRetry]=useState(0),[loading,setLoading]=useState(true),[connection,setConnection]=useState({state:'connecting',message:''});
 useEffect(()=>{
  const stop=startActivityPolling({
   onSnapshot:next=>{setData(next);setNow(Date.now());},
   onState:state=>{setConnection(previous=>({...previous,...state}));setLoading(false);setNow(Date.now());},
   onAuthLost:()=>setData(null)
  });
  const clock=setInterval(()=>setNow(Date.now()),5000);
  return()=>{stop();clearInterval(clock);};
 },[retry]);
 const interrupted=connection.state!=='connected',error=connection.message;
 return <div className="activity-page">
  <ConnectionStatus sources={data?.sources||[]} now={now} connection={connection}/>
  <AgentTree sources={data?.sources||[]} organization={data?.organization} now={now} interrupted={interrupted} loading={loading}/>
  {error&&<div className="tree-notice" role="alert">{error}<button onClick={()=>{setLoading(true);setConnection(previous=>({...previous,state:'connecting',message:''}));setRetry(n=>n+1);}}>Retry</button>{connection.state==='unauthorized'&&<a href="/login">Sign in</a>}</div>}
 </div>;
}

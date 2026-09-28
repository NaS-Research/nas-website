'use client';
import {createContext,useContext,useEffect,useRef,useState} from 'react';
import {usePathname} from 'next/navigation';
const Context=createContext(null);
export const useMember=()=>useContext(Context);
export default function MemberProvider({children}){
 const pathname=usePathname();const [state,setState]=useState({status:'loading',items:[],current:null});
 const [message,setMessage]=useState('');const [saving,setSaving]=useState(false);const queue=useRef(Promise.resolve());const generation=useRef(0);
 const pending=useRef(0);const [saveError,setSaveError]=useState(false);
 const [reload,setReload]=useState(0);
 useEffect(()=>{
  const controller=new AbortController();const gen=++generation.current;
  setState({status:'loading',items:[],current:null});setMessage('');setSaving(false);pending.current=0;setSaveError(false);
  fetch(`/api/member?path=${encodeURIComponent(pathname)}`,{cache:'no-store',signal:controller.signal}).then(async r=>{
   const body=await r.json();if(gen!==generation.current)return;
   setState({status:r.ok?'ready':r.status===401?'guest':'error',items:body.items||[],current:body.current||null,userId:body.userId||null});
   if(!r.ok && r.status!==401)setMessage(body.error);
  }).catch(e=>{if(e.name!=='AbortError' && gen===generation.current){setState({status:'error',items:[],current:null});setMessage('Unable to connect. Your changes have not been saved.');}});
  return ()=>controller.abort();
 },[pathname,reload]);
 function save(path,action,data){
  const gen=generation.current;const userId=state.userId;pending.current++;setSaving(true);setSaveError(false);setMessage('Saving…');
  const task=queue.current.then(async()=>{
   try{
    const r=await fetch('/api/member',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({path,action,data,userId})});const body=await r.json();
    if(!r.ok)throw new Error(body.error||'Could not save. Try again.');
    if(gen===generation.current){setState(old=>({...old,items:[body.item,...old.items.filter(i=>i.path!==path)]}));setMessage('Saved to your account');setSaveError(false);}
    return true;
   }catch(e){if(gen===generation.current){setMessage(e.message);setSaveError(true);}return false;}
   finally{if(gen===generation.current){pending.current--;setSaving(pending.current>0);}}
  });queue.current=task.catch(()=>false);return task;
 }
 return <Context.Provider value={{...state,pathname,save,message,saving,saveError,retry:()=>setReload(n=>n+1)}}>{children}</Context.Provider>;
}
export function MemberPreviewProvider({value,children}){return <Context.Provider value={value}>{children}</Context.Provider>;}

"use client";
import {useEffect,useRef,useState} from 'react';
import {emptyLibrary,validateLibrary,conversationTitle,upgradeConversationTitles,withLibraryView,restoredConversation} from '@/lib/nicole/library.mjs';
const PREFIX='nas-nicole-library-v3:';
const OLD_PREFIX='nas-nicole-library-v2:';
export function useNicoleLibrary(member){
 const [state,setState]=useState({owner:null,library:emptyLibrary(),activeId:null,ready:false});
 const [profile,setProfile]=useState(null);const [status,setStatus]=useState('');const [error,setError]=useState('');const [reload,setReload]=useState(0);
 const latest=useRef(state);latest.current=state;
 const revision=useRef(0),saved=useRef(null),saving=useRef(false),blocked=useRef(false),epoch=useRef(0),loadedReload=useRef(-1);
 const owner=member.status==='ready'?member.userId:null;
 const cache=value=>{try{localStorage.setItem(PREFIX+value.owner,JSON.stringify({library:value.library,activeId:value.activeId,revision:revision.current,dirty:value.library!==saved.current}));}catch{}};
 useEffect(()=>{
  if(member.status==='loading')return;
  if(member.status==='guest'){
   epoch.current++;blocked.current=true;saving.current=false;saved.current=null;setState({owner:null,library:emptyLibrary(),activeId:null,ready:false});setProfile(null);setError('');setStatus('');
   try{for(let i=localStorage.length-1;i>=0;i--){const key=localStorage.key(i);if(key?.startsWith(PREFIX))localStorage.removeItem(key);}for(let i=sessionStorage.length-1;i>=0;i--){const key=sessionStorage.key(i);if(key?.startsWith(OLD_PREFIX)||key?.startsWith('nas-nicole-v1:'))sessionStorage.removeItem(key);}}catch{}
   return;
  }
  if(!owner)return;
  try{for(let i=localStorage.length-1;i>=0;i--){const key=localStorage.key(i);if(key?.startsWith(PREFIX)&&key!==PREFIX+owner)localStorage.removeItem(key);}}catch{}
  if(latest.current.owner===owner&&latest.current.ready&&loadedReload.current===reload)return;
  const generation=++epoch.current;const controller=new AbortController();blocked.current=true;saving.current=false;setError('');setStatus('Loading conversations…');setProfile(null);
  setState({owner,library:emptyLibrary(),activeId:null,ready:false});
  fetch('/api/nicole/library',{cache:'no-store',signal:controller.signal}).then(async response=>{
   const body=await response.json();if(!response.ok)throw new Error(body.error||'Unable to load conversations.');if(body.userId!==owner)throw new Error('Your account changed. Reload before continuing.');
   if(generation!==epoch.current)return;
   loadedReload.current=reload;const remote=validateLibrary(body.library);let library=remote,activeId=remote.view?.activeId||null,cached;
   try{cached=JSON.parse(localStorage.getItem(PREFIX+owner)||sessionStorage.getItem(OLD_PREFIX+owner)||'null');}catch{}
   revision.current=body.revision;saved.current=remote;setProfile(body.profile);
   if(cached){try{const local=validateLibrary(cached.library);activeId=cached.activeId;if(cached.dirty){library=local;if(cached.revision!==body.revision&&JSON.stringify(local)===JSON.stringify(remote)){library=remote;blocked.current=false;}else if(cached.revision!==body.revision){blocked.current=true;setError('Your conversations changed in another tab or device. Download your unsaved copy before reloading.');}else blocked.current=false;}else blocked.current=false;}catch{blocked.current=false;}}
   else{
    blocked.current=false;
    try{const legacy=JSON.parse(sessionStorage.getItem('nas-nicole-v1:'+owner)||'null');if(!remote.conversations.length&&legacy?.messages?.length){const id=crypto.randomUUID();library=validateLibrary({folders:[],conversations:[{id,title:conversationTitle(legacy.messages.find(m=>m.role==='user')?.content),folderId:null,messages:legacy.messages}]});activeId=id;}}catch{}
   }
   library=upgradeConversationTitles(library);
   activeId=restoredConversation(library,activeId);
   if((library.conversations.length||library.folders.length||library.view)&&(!library.view||library.view.activeId!==activeId))library=withLibraryView(library,activeId);
   const next={owner,library,activeId,ready:true};latest.current=next;setState(next);setStatus(library===remote?'Saved to your account':'Unsaved changes');
  }).catch(e=>{if(e.name!=='AbortError'&&generation===epoch.current){setError(e.message);setStatus('Not connected');}});
  return()=>controller.abort();
 },[owner,member.status,reload]);
 async function flush(){
  if(saving.current||blocked.current||!latest.current.ready||latest.current.library===saved.current)return;
  saving.current=true;const generation=epoch.current;
  try{
   while(generation===epoch.current&&!blocked.current&&latest.current.ready&&latest.current.library!==saved.current){
    const snapshot=latest.current;validateLibrary(snapshot.library);setStatus('Saving…');
    const response=await fetch('/api/nicole/library',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({userId:snapshot.owner,revision:revision.current,library:snapshot.library})});const body=await response.json();
    if(generation!==epoch.current)return;
    if(!response.ok){if(response.status===409)blocked.current=true;throw new Error(body.error||'Could not save your conversations.');}
    revision.current=body.revision;saved.current=snapshot.library;cache(latest.current);setError('');setStatus('Saved to your account');
   }
  }catch(e){if(generation===epoch.current){setError(e.message);setStatus('Not saved');}}
  finally{if(generation===epoch.current)saving.current=false;}
 }
 useEffect(()=>{if(state.ready&&state.owner===owner){cache(state);const timer=setTimeout(flush,250);return()=>clearTimeout(timer);}},[state,owner]);
 function change(update,activeId){const old=latest.current;if(!old.ready||old.owner!==owner)return;const library=withLibraryView(update(old.library),activeId!==undefined?activeId:old.activeId);const next={...old,library,activeId:library.view.activeId};latest.current=next;cache(next);setState(next);}
 function select(activeId){if(activeId===latest.current.activeId)return;change(library=>library,activeId);}
 function setFolderOpen(id,open){const old=latest.current.library.view?.openFolders||[];if(old.includes(id)===open)return;change(library=>({...library,view:{...library.view,openFolders:open?[...old,id]:old.filter(value=>value!==id)}}));}
 function download(){const blob=new Blob([JSON.stringify(latest.current.library,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='nicole-conversations.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
 function retry(){if(!state.ready)setReload(n=>n+1);else flush();}
 function reloadLatest(){if(state.library!==saved.current&&!window.confirm('Reload the saved version? Download your unsaved copy first to keep these changes.'))return;try{localStorage.removeItem(PREFIX+state.owner);}catch{}setReload(n=>n+1);}
 return {state,change,select,setFolderOpen,profile,status,error,retry,download,reloadLatest,conflict:blocked.current&&state.ready};
}

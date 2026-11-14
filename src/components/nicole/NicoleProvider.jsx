"use client";
import {createContext,useContext,useEffect,useId,useRef,useState} from 'react';
import Link from 'next/link';
import {usePathname,useRouter} from 'next/navigation';
import {useMember} from '@/components/member/MemberProvider';
import {useNicoleLibrary} from './useNicoleLibrary';
import {libraryName,emptyLibrary} from '@/lib/nicole/library.mjs';
import './nicole.css';
const Context=createContext(null);

const prompts=['Explain a concept','Explore NaS research','Help me study'];
const questions=['Help me understand how the kidneys filter blood.','Help me find research in the NaS library.','Help me build a study plan for cardiovascular physiology.'];
function Icon({name}){return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">{name==='send'?<path d="M12 19V5m-6 6 6-6 6 6"/>:name==='close'?<path d="m6 6 12 12M6 18 18 6"/>:name==='expand'?<path d="M14 4h6v6m0-6-7 7M10 20H4v-6m0 6 7-7"/>:name==='new'?<path d="M12 5v14M5 12h14"/>:<><path d="M20 11.5a8 8 0 0 1-8 8H5l-3 2v-10a9 9 0 0 1 18 0Z"/><path d="M7 11h10M7 15h6"/></>}</svg>}
export default function NicoleProvider({children}){
 const member=useMember();const pathname=usePathname();const router=useRouter();
 const library=useNicoleLibrary(member);
 const [sidebar,setSidebar]=useState(false);
 const current=library.state.library.conversations.find(c=>c.id===library.state.activeId);
 const chat={owner:library.state.owner,messages:current?.messages||[]};
 function setChat(value,id){library.change(old=>{const existing=old.conversations.find(c=>c.id===id);const row={id,title:existing?.title||Array.from(value.messages[0]?.content||'New conversation').slice(0,64).join(''),folderId:existing?.folderId||null,messages:value.messages};return {...old,conversations:[row,...old.conversations.filter(c=>c.id!==id)]};},id);}
 const [open,setOpen]=useState(false);const [busy,setBusy]=useState(false);const [error,setError]=useState('');const [draft,setDraft]=useState('');
 const [page,setPage]=useState(null);const [includePage,setIncludePage]=useState(false);
 const active=useRef(null);const sequence=useRef(0);const openingButton=useRef(null);const panel=useRef(null);const identity=useRef(null);
 const full=pathname==='/nicole';
 const userId=member.status==='ready'?member.userId:null;
 identity.current=member.status==='guest'?null:member.userId||(member.status==='loading'?chat.owner:null);
 useEffect(()=>{
  if(member.status==='guest'||(member.userId&&chat.owner&&chat.owner!==member.userId)){
   active.current?.abort();sequence.current++;setBusy(false);setError('');setDraft('');setOpen(false);setSidebar(false);
  }
 },[member.status,member.userId,chat.owner]);
 useEffect(()=>{
  setIncludePage(false);setSidebar(false);
  const title=document.querySelector('main h1')?.textContent?.trim();
  const allowed=/^\/(research|learn)(\/|$)/.test(pathname)&&!/(?:^|\/)(preview|admin|studio)(?:\/|$)/.test(pathname);
  setPage(allowed&&title?{path:pathname,title:title.slice(0,180)}:null);
 },[pathname]);
 useEffect(()=>()=>active.current?.abort(),[]);
 useEffect(()=>{const narrow=matchMedia('(max-width:900px)');const resize=()=>{if(!narrow.matches)setSidebar(false);};narrow.addEventListener('change',resize);return()=>narrow.removeEventListener('change',resize);},[]);
 useEffect(()=>{
  if(!open||full)return;
  const first=panel.current?.querySelector('textarea');first?.focus();
  function key(event){
   if(event.key==='Escape'){setOpen(false);openingButton.current?.focus();}
   if(event.key==='Tab'&&matchMedia('(max-width: 760px)').matches){const controls=Array.from(panel.current.querySelectorAll('a,button:not(:disabled),textarea,input')).filter(el=>el.getClientRects().length);const first=controls[0],last=controls.at(-1);if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}}
  }
  document.addEventListener('keydown',key);document.body.classList.add('nicole-panel-open');
  return()=>{document.removeEventListener('keydown',key);document.body.classList.remove('nicole-panel-open');};
 },[open,full]);
 function openPanel(event){openingButton.current=event?.currentTarget;setOpen(true);}
 function closePanel(){setOpen(false);openingButton.current?.focus();}
 function stop(){sequence.current++;active.current?.abort();setBusy(false);setError('Response stopped. You can send another question.');}
 function newChat(){sequence.current++;active.current?.abort();setBusy(false);library.select(null);setDraft('');setError('');setSidebar(false);}
 async function send(question,{expand=false}={}){
  question=question.trim();if(!question||busy)return;
  if(expand){setOpen(false);router.push('/nicole');}
  if(!userId){setError('Sign in to talk with Nicole.');if(!expand)setOpen(true);return;}
  if(!library.state.ready){setError('Wait for your conversations to load, then try again.');return;}
  if(library.state.library.conversations.length>=100&&!current){setError('Remove an old conversation to make room for a new one.');return;}
  if(chat.messages.length>=20){setError('Start a new conversation to continue.');return;}
  const conversationId=current?.id||crypto.randomUUID();const owner=userId;const generation=++sequence.current;const previous=chat.owner===owner?chat.messages:[];
  const pending=[...previous,{role:'user',content:question}];try{setChat({owner,messages:pending},conversationId);}catch(e){setError(e.message);return;}setDraft('');setError('');setBusy(true);
  const controller=new AbortController();active.current=controller;
  try{
   const response=await fetch('/api/nicole',{method:'POST',headers:{'Content-Type':'application/json'},signal:controller.signal,body:JSON.stringify({userId:owner,question,messages:previous,contextPath:includePage?page?.path:null})});
   const answer=await response.json();if(!response.ok)throw new Error(answer.error||'Nicole couldn’t respond. Please try again.');
   if(generation===sequence.current&&identity.current===owner){setChat({owner,messages:[...pending,{role:'assistant',content:answer.text}]},conversationId);if(answer.truncated)setError('This response reached its length limit. Ask Nicole to continue for more detail.');}
  }catch(e){if(generation===sequence.current&&identity.current===owner){setChat({owner,messages:previous},conversationId);setDraft(question);setError(e.name==='AbortError'?'Response stopped.':e.message);}}
  finally{if(generation===sequence.current){setBusy(false);active.current=null;}}
 }
 const visibleLibrary=chat.owner===userId?library:{...library,state:{owner:null,library:emptyLibrary(),activeId:null,ready:false},profile:null,status:''};
 const value={library:visibleLibrary,sidebar,setSidebar,current:chat.owner===userId?current:null,selectConversation:id=>{if(busy)return;library.select(id);setDraft('');setError('');setSidebar(false);},messages:chat.owner===userId?chat.messages:[],open,busy,error,draft,setDraft,page,includePage,setIncludePage,userId,loading:member.status==='loading'||Boolean(userId&&!library.state.ready),send,stop,newChat,openPanel,closePanel};
 return <Context.Provider value={value}>{children}{!full&&<button className="nicole-launcher" aria-label="Ask Nicole" aria-expanded={open} aria-controls="nicole-panel" onClick={open?closePanel:openPanel}><Icon name="chat"/><span>Ask Nicole</span></button>}{open&&!full&&<aside id="nicole-panel" className="nicole-panel" aria-label="Nicole conversation" ref={panel}><ChatHeader panel/>{sidebar&&<Sidebar compact/>}<Conversation/><Composer/></aside>}</Context.Provider>;
}
function ChatHeader({panel=false}){
 const chat=useContext(Context);
 return <header className="nicole-chatbar"><Link href="/nicole" onClick={chat.closePanel} className="nicole-name">Nicole<span>NaS Research</span></Link><div><button onClick={()=>chat.setSidebar(!chat.sidebar)} aria-label="Conversation sidebar" aria-expanded={chat.sidebar} className="nicole-sidebar-toggle"><Icon name="chat"/></button><button onClick={chat.newChat} disabled={chat.busy} aria-label="New conversation" title="New conversation"><Icon name="new"/></button>{panel&&<><Link href="/nicole" onClick={chat.closePanel} aria-label="Expand Nicole" title="Expand Nicole"><Icon name="expand"/></Link><button onClick={chat.closePanel} aria-label="Close Nicole"><Icon name="close"/></button></>}</div></header>;
}
export function NicoleEntry(){
 const chat=useContext(Context);const [question,setQuestion]=useState('');const id=useId();
 return <section className="nicole-entry" aria-label="Ask Nicole"><form onSubmit={e=>{e.preventDefault();chat.send(question,{expand:true});setQuestion('');}}><label htmlFor={id} className="sr-only">Your question for Nicole</label><textarea id={id} rows={2} maxLength={4000} placeholder="Ask Nicole a question…" value={question} onChange={e=>setQuestion(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.nativeEvent.isComposing){e.preventDefault();if(question.trim())e.currentTarget.form.requestSubmit();}}}/><div className="nicole-entry__footer"><span>Nicole <span className="nicole-subtle">· Your NaS assistant</span></span><button type="submit" aria-label="Send to Nicole" disabled={!question.trim()||chat.busy||chat.loading}><Icon name="send"/></button></div></form><div className="nicole-suggestions">{prompts.map((text,i)=><button key={text} disabled={chat.busy||chat.loading} onClick={()=>chat.send(questions[i],{expand:true})}>{text}</button>)}</div></section>;
}
function safeHref(value){return /^https:\/\//.test(value)||/^\/(?!\/)/.test(value)&&!value.includes('\\')?value:null;}
function Inline({text}){
 const parts=text.split(/(\[[^\]\n]+\]\([^\s)]+\)|\*\*[^*\n]+\*\*|`[^`\n]+`)/g);
 return parts.map((part,i)=>{const link=part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);if(link){const href=safeHref(link[2]);return href?<a href={href} rel="noreferrer" key={i}>{link[1]}</a>:link[1];}if(part.startsWith('**')&&part.endsWith('**'))return <strong key={i}>{part.slice(2,-2)}</strong>;if(part.startsWith('`')&&part.endsWith('`'))return <code key={i}>{part.slice(1,-1)}</code>;return part;});
}
function Answer({text}){return <div className="nicole-answer">{text.split(/\n\s*\n/).map((paragraph,i)=>{if(/^#{1,4} /.test(paragraph))return <h3 key={i}><Inline text={paragraph.replace(/^#{1,4} /,'')}/></h3>;const lines=paragraph.split('\n');if(lines.every(line=>/^[-*] /.test(line)))return <ul key={i}>{lines.map((line,j)=><li key={j}><Inline text={line.slice(2)}/></li>)}</ul>;return <p key={i}><Inline text={paragraph}/></p>;})}</div>}
function Conversation(){
 const chat=useContext(Context);const log=useRef(null);
 useEffect(()=>{log.current?.scrollTo({top:log.current.scrollHeight,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});},[chat.messages,chat.busy]);
 return <div className="nicole-conversation" ref={log}>{chat.messages.length?<div className="nicole-messages" role="log" aria-label="Conversation with Nicole" aria-live="polite">{chat.messages.map((message,i)=><article key={i} className={`nicole-message nicole-message--${message.role}`}><span className="nicole-message__author">{message.role==='assistant'?'Nicole':'You'}</span>{message.role==='assistant'?<Answer text={message.content}/>:<p>{message.content}</p>}</article>)}{chat.busy&&<div className="nicole-thinking" role="status"><span/><span/><span/><span className="sr-only">Nicole is thinking…</span></div>}</div>:<div className="nicole-empty"><span className="nicole-empty__eyebrow">A little curiosity goes a long way.</span><h1>What would you like<br/>to explore?</h1><p>Connect an idea. Understand a mechanism.<br/>Follow the evidence.</p><div className="nicole-suggestions">{prompts.map((text,i)=><button key={text} disabled={chat.busy||chat.loading} onClick={()=>chat.send(questions[i])}>{text}</button>)}</div></div>}</div>;
}
function Composer(){
 const chat=useContext(Context);const id=useId();
 return <div className="nicole-composer-wrap">{chat.page&&<label className="nicole-context"><input type="checkbox" checked={chat.includePage} onChange={e=>chat.setIncludePage(e.target.checked)}/><span>Include this page <span>{chat.page.title}</span></span></label>}{!chat.userId&&!chat.loading&&<p className="nicole-signin"><Link href="/login?next=%2Fnicole">Sign in</Link> to talk with Nicole.</p>}{chat.library.error&&<div className="nicole-save-error" role="alert"><p>{chat.library.error}</p><button onClick={chat.library.retry}>Try again</button>{chat.library.state.ready&&<><button onClick={chat.library.download}>Download unsaved copy</button>{chat.library.conflict&&<button onClick={chat.library.reloadLatest}>Reload latest</button>}</>}</div>}{chat.error&&<p className="nicole-error" role="alert">{chat.error}</p>}<form className="nicole-composer" onSubmit={e=>{e.preventDefault();chat.send(chat.draft);}}><label htmlFor={id} className="sr-only">Message Nicole</label><textarea id={id} rows={2} maxLength={4000} placeholder="Ask Nicole…" value={chat.draft} onChange={e=>chat.setDraft(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.nativeEvent.isComposing){e.preventDefault();if(!chat.busy&&chat.draft.trim())e.currentTarget.form.requestSubmit();}}}/>{chat.busy?<button type="button" onClick={chat.stop} aria-label="Stop response"><span className="nicole-stop"/></button>:<button type="submit" disabled={!chat.draft.trim()||!chat.userId||chat.loading} aria-label="Send message"><Icon name="send"/></button>}</form><div className="nicole-privacy">Nicole can make mistakes. Check important information. <span className="nicole-data-note">Saved to your account · Messages sent to OpenAI · <Link href="/legal/privacy#nicole">Privacy</Link></span></div></div>;
}
function Sidebar({compact=false}){
 const chat=useContext(Context);const {state,change,profile,status}=chat.library;
 const [editor,setEditor]=useState(null);const [name,setName]=useState('');const [folderChoice,setFolderChoice]=useState('');const [formError,setFormError]=useState('');const [search,setSearch]=useState('');const form=useRef(null);const sidebarRoot=useRef(null);
 useEffect(()=>{if(!chat.sidebar)return;const previous=document.activeElement;const root=sidebarRoot.current;root?.querySelector('button')?.focus();function trap(e){if(e.key!=='Tab'||(!compact&&!matchMedia('(max-width:900px)').matches))return;const controls=Array.from(root.querySelectorAll('a,button:not(:disabled),input,select,summary')).filter(el=>el.getClientRects().length);const first=controls[0],last=controls.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}}root?.addEventListener('keydown',trap);return()=>{root?.removeEventListener('keydown',trap);previous?.focus();};},[chat.sidebar,compact]);
 useEffect(()=>{if(editor)form.current?.querySelector('input')?.focus();},[editor]);
 useEffect(()=>{function escape(e){if(e.key==='Escape'){setEditor(null);chat.setSidebar(false);}}document.addEventListener('keydown',escape);return()=>document.removeEventListener('keydown',escape);},[chat.setSidebar]);
 function edit(type,item){setEditor({type,id:item?.id});setName(item?.name||item?.title||'');setFolderChoice(item?.folderId||'');setFormError('');}
 function submit(e){e.preventDefault();try{const value=libraryName(name);change(old=>editor.type==='folder'?{...old,folders:editor.id?old.folders.map(f=>f.id===editor.id?{...f,name:value}:f):[...old.folders,{id:crypto.randomUUID(),name:value}]}:{...old,conversations:old.conversations.map(c=>c.id===editor.id?{...c,title:value,folderId:folderChoice||null}:c)});setEditor(null);}catch(e){setFormError(e.message);}}
 function remove(){try{change(old=>editor.type==='folder'?{folders:old.folders.filter(f=>f.id!==editor.id),conversations:old.conversations.map(c=>c.folderId===editor.id?{...c,folderId:null}:c)}:{...old,conversations:old.conversations.filter(c=>c.id!==editor.id)});if(chat.current?.id===editor.id)chat.newChat();setEditor(null);}catch(e){setFormError(e.message);}}
 const matches=state.library.conversations.filter(c=>c.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
 function rows(folderId){return matches.filter(c=>c.folderId===folderId).map(c=><div className={`nicole-history-row${chat.current?.id===c.id?' is-current':''}`} key={c.id}><button disabled={chat.busy} aria-current={chat.current?.id===c.id?'true':undefined} onClick={()=>chat.selectConversation(c.id)} title={c.title}>{c.title}</button><button className="nicole-row-menu" aria-label={`Rename or organize ${c.title}`} disabled={chat.busy} onClick={()=>edit('conversation',c)}>···</button></div>);}
 return <aside ref={sidebarRoot} id={compact?'nicole-panel-history':'nicole-history'} className={`nicole-sidebar${compact?' nicole-sidebar--compact':''}${chat.sidebar?' is-open':''}`} aria-label="Your Nicole conversations"><div className="nicole-sidebar-top"><span>Nicole</span><button onClick={()=>chat.setSidebar(false)} className="nicole-sidebar-close" aria-label="Close conversation sidebar"><Icon name="close"/></button></div><button className="nicole-new-chat" onClick={chat.newChat} disabled={chat.busy||!state.ready}><Icon name="new"/>New conversation</button><label className="nicole-history-search"><span className="sr-only">Search conversations</span><input type="search" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search conversations"/></label><div className="nicole-history-scroll"><div className="nicole-folder-heading"><span>Folders</span><button aria-label="Create folder" onClick={()=>edit('folder')} disabled={!state.ready||chat.busy}><Icon name="new"/></button></div>{state.library.folders.map(folder=><details className="nicole-folder" key={folder.id} open={search?true:undefined}><summary><span>▱</span>{folder.name}</summary><button className="nicole-folder-edit" aria-label={`Rename ${folder.name} folder`} disabled={chat.busy} onClick={()=>edit('folder',folder)}>···</button><div>{rows(folder.id)}{!matches.some(c=>c.folderId===folder.id)&&<p className="nicole-folder-empty">No conversations yet</p>}</div></details>)}{!state.library.folders.length&&<p className="nicole-folder-empty">Keep related ideas together.</p>}<div className="nicole-folder-heading"><span>Conversations</span></div>{rows(null)}{!matches.length&&<p className="nicole-folder-empty">{search?'No matching conversations.':state.ready?'Your conversations will appear here.':'Loading conversations…'}</p>}</div><div className="nicole-account"><span className="nicole-save-status" role="status">{status}</span><Profile profile={profile} signedIn={Boolean(chat.userId)}/></div>{editor&&<div className="nicole-editor" role="dialog" aria-modal="false" aria-label={editor.type==='folder'?'Name folder':'Organize conversation'}><form ref={form} onSubmit={submit}><label>{editor.type==='folder'?'Folder name':'Conversation name'}<input value={name} maxLength={80} onChange={e=>setName(e.target.value)}/></label>{editor.type==='conversation'&&<label>Folder<select value={folderChoice} onChange={e=>setFolderChoice(e.target.value)}><option value="">Unfiled</option>{state.library.folders.map(f=><option value={f.id} key={f.id}>{f.name}</option>)}</select></label>}{formError&&<p role="alert">{formError}</p>}<div><button type="button" onClick={()=>setEditor(null)}>Cancel</button><button type="submit">Save</button></div>{editor.id&&<button type="button" className="nicole-remove" onClick={()=>{if(editor.type==='folder'||window.confirm('Delete this conversation from your account?'))remove();}}>{editor.type==='folder'?'Remove folder · keep conversations':'Delete conversation'}</button>}</form></div>}</aside>;
}
function Profile({profile,signedIn}){
 const [failed,setFailed]=useState(false);useEffect(()=>setFailed(false),[profile?.avatar]);
 const name=profile?.name||(signedIn?'Your account':'Sign in');const initials=name.split(/\s+/).slice(0,2).map(n=>Array.from(n)[0]).join('');
 return <Link href={signedIn?'/account':'/login?next=%2Fnicole'} className="nicole-profile"><span className="nicole-avatar">{profile?.avatar&&!failed?<img src={profile.avatar} alt="" width="36" height="36" referrerPolicy="no-referrer" onError={()=>setFailed(true)}/>:<span aria-hidden="true">{initials}</span>}</span><span><strong>{name}</strong><small>{signedIn?'Your NaS account':'Save your conversations'}</small></span></Link>;
}
export function NicolePage(){const chat=useContext(Context);return <div className="nicole-page"><Sidebar/>{chat.sidebar&&<button className="nicole-sidebar-backdrop" aria-label="Close conversation sidebar" onClick={()=>chat.setSidebar(false)}/>}<div className="nicole-chat-main" inert={chat.sidebar?true:undefined}><ChatHeader/><Conversation/><Composer/></div></div>;}

"use client";
import {createContext,useContext,useEffect,useId,useRef,useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname,useRouter} from 'next/navigation';
import {useMember} from '@/components/member/MemberProvider';
import {useNicoleLibrary} from './useNicoleLibrary';
import {libraryName,emptyLibrary,branchConversation,conversationContext,searchConversations,conversationTitle} from '@/lib/nicole/library.mjs';
import './nicole.css';
const Context=createContext(null);

const prompts=['Explain a concept','Explore NaS research','Help me study'];
const questions=['Help me understand how the kidneys filter blood.','Help me find research in the NaS library.','Help me build a study plan for cardiovascular physiology.'];
function Icon({name}){
 const paths={more:<><circle cx="5" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.6" fill="currentColor" stroke="none"/></>,rename:<><path d="m15 4 5 5M4 20l5-1L20 8a2 2 0 0 0-5-5L4 14Z"/></>,trash:<><path d="M3 6h18M9 6V4h6v2M6 6l1 14h10l1-14M10 10v6m4-6v6"/></>,send:<path d="M12 19V5m-6 6 6-6 6 6"/>,close:<path d="m6 6 12 12M6 18 18 6"/>,expand:<path d="M14 4h6v6m0-6-7 7M10 20H4v-6m0 6 7-7"/>,new:<path d="M12 5v14M5 12h14"/>,search:<><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></>,sidebar:<><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16"/></>,copy:<><rect x="8" y="8" width="12" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></>,branch:<><path d="M7 5v10a4 4 0 0 0 4 4h6M7 11h5a5 5 0 0 0 5-5"/><circle cx="7" cy="4" r="2"/><circle cx="18" cy="4" r="2"/><circle cx="19" cy="19" r="2"/></>,check:<path d="m5 12 4 4L19 6"/>,folder:<path d="M3 7V6a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>};
 return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">{paths[name]||<><path d="M20 11.5a8 8 0 0 1-8 8H5l-3 2v-10a9 9 0 0 1 18 0Z"/><path d="M7 11h10M7 15h6"/></>}</svg>;
}
export default function NicoleProvider({children}){
 const member=useMember();const pathname=usePathname();const router=useRouter();
 const library=useNicoleLibrary(member);
 const [sidebar,setSidebar]=useState(false);const [collapsed,setCollapsed]=useState(true);const [narrow,setNarrow]=useState(false);const [searchOpen,setSearchOpen]=useState(false);const [searchQuery,setSearchQuery]=useState('');
 const current=library.state.library.conversations.find(c=>c.id===library.state.activeId);
 const chat={owner:library.state.owner,messages:current?.messages||[]};
 function setChat(value,id){library.change(old=>{const existing=old.conversations.find(c=>c.id===id);const row={id,title:existing?.title||conversationTitle(value.messages.find(m=>m.role==='user')?.content),folderId:existing?.folderId||null,messages:value.messages,...(existing?.manualTitle?{manualTitle:true}:{})};return {...old,conversations:[row,...old.conversations.filter(c=>c.id!==id)]};},id);}
 const [open,setOpen]=useState(false);const [busy,setBusy]=useState(false);const [error,setError]=useState('');const [draft,setDraft]=useState('');
 const [page,setPage]=useState(null);const [includePage,setIncludePage]=useState(false);
 const active=useRef(null);const sequence=useRef(0);const openingButton=useRef(null);const panel=useRef(null);const identity=useRef(null);
 const full=pathname==='/nicole';
 const userId=member.status==='ready'?member.userId:null;
 identity.current=member.status==='guest'?null:member.userId||(member.status==='loading'?chat.owner:null);
 useEffect(()=>{
  if(member.status==='guest'||(member.userId&&chat.owner&&chat.owner!==member.userId)){
   active.current?.abort();sequence.current++;setBusy(false);setError('');setDraft('');setOpen(false);setSidebar(false);setSearchOpen(false);setSearchQuery('');
  }
 },[member.status,member.userId,chat.owner]);
 useEffect(()=>{
  setIncludePage(false);setSidebar(false);setSearchOpen(false);setSearchQuery('');
  const title=document.querySelector('main h1')?.textContent?.trim();
  const allowed=/^\/(research|learn)(\/|$)/.test(pathname)&&!/(?:^|\/)(preview|admin|studio)(?:\/|$)/.test(pathname);
  setPage(allowed&&title?{path:pathname,title:title.slice(0,180)}:null);
 },[pathname]);
 useEffect(()=>()=>active.current?.abort(),[]);
 useEffect(()=>{const narrow=matchMedia('(max-width:900px)');const resize=()=>{setNarrow(narrow.matches);if(!narrow.matches)setSidebar(false);};resize();narrow.addEventListener('change',resize);return()=>narrow.removeEventListener('change',resize);},[]);
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
  if(chat.messages.length>98){setError('Start a new conversation to continue.');return;}
  const conversationId=current?.id||crypto.randomUUID();const owner=userId;const generation=++sequence.current;const previous=chat.owner===owner?chat.messages:[];
  const pending=[...previous,{role:'user',content:question}];try{setChat({owner,messages:pending},conversationId);}catch(e){setError(e.message);return;}setDraft('');setError('');setBusy(true);
  const controller=new AbortController();active.current=controller;
  try{
   const response=await fetch('/api/nicole',{method:'POST',headers:{'Content-Type':'application/json'},signal:controller.signal,body:JSON.stringify({userId:owner,question,messages:conversationContext(previous),contextPath:includePage?page?.path:null})});
   const answer=await response.json();if(!response.ok)throw new Error(answer.error||'Nicole couldn’t respond. Please try again.');
   if(generation===sequence.current&&identity.current===owner){setChat({owner,messages:[...pending,{role:'assistant',content:answer.text}]},conversationId);if(answer.truncated)setError('This response reached its length limit. Ask Nicole to continue for more detail.');}
  }catch(e){if(generation===sequence.current&&identity.current===owner){setChat({owner,messages:previous},conversationId);setDraft(question);setError(e.name==='AbortError'?'Response stopped.':e.message);}}
  finally{if(generation===sequence.current){setBusy(false);active.current=null;}}
 }
 function branch(index){
  if(busy||!current||chat.owner!==userId)return;
  try{const id=crypto.randomUUID();const row=branchConversation(current,index,id);library.change(old=>({...old,conversations:[row,...old.conversations]}),id);setDraft('');setError('');}catch(e){setError(e.message);}
 }
 const visibleLibrary=chat.owner===userId?library:{...library,state:{owner:null,library:emptyLibrary(),activeId:null,ready:false},profile:null,status:''};
 const value={library:visibleLibrary,sidebar,setSidebar,collapsed,narrow,toggleSidebar:()=>narrow?setSidebar(v=>!v):setCollapsed(v=>!v),closeSidebar:()=>narrow?setSidebar(false):setCollapsed(true),searchOpen,setSearchOpen,searchQuery,setSearchQuery,branch,current:chat.owner===userId?current:null,selectConversation:id=>{if(busy)return;library.select(id);setDraft('');setError('');setSidebar(false);setSearchOpen(false);setSearchQuery('');},messages:chat.owner===userId?chat.messages:[],open,busy,error,draft,setDraft,page,includePage,setIncludePage,userId,loading:member.status==='loading'||Boolean(userId&&!library.state.ready),send,stop,newChat,openPanel,closePanel};
 return <Context.Provider value={value}>{children}{!full&&<button className="nicole-launcher" aria-label="Ask Nicole" aria-expanded={open} aria-controls="nicole-panel" onClick={open?closePanel:openPanel}><Icon name="chat"/><span>Ask Nicole</span></button>}{open&&!full&&<aside id="nicole-panel" className="nicole-panel" aria-label="Nicole conversation" ref={panel}><ChatHeader panel/>{sidebar&&<Sidebar compact/>}<Conversation/><Composer/></aside>}{searchOpen&&<ConversationSearch/>}</Context.Provider>;
}
function ChatHeader({panel=false}){
 const chat=useContext(Context);
 return <header className="nicole-chatbar"><span className="sr-only">Nicole conversation</span><div><button onClick={()=>chat.setSidebar(!chat.sidebar)} aria-label="Conversation sidebar" aria-expanded={chat.sidebar} className="nicole-sidebar-toggle"><Icon name="sidebar"/></button><button onClick={chat.newChat} disabled={chat.busy} aria-label="New conversation" title="New conversation"><Icon name="new"/></button>{panel&&<><Link href="/nicole" onClick={chat.closePanel} aria-label="Expand Nicole" title="Expand Nicole"><Icon name="expand"/></Link><button onClick={chat.closePanel} aria-label="Close Nicole"><Icon name="close"/></button></>}</div></header>;
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
 return <div className="nicole-conversation" ref={log}>{chat.messages.length?<div className="nicole-messages" role="log" aria-label="Conversation with Nicole" aria-live="polite">{chat.messages.map((message,i)=><article key={i} className={`nicole-message nicole-message--${message.role}`}>{message.role==='assistant'&&<span className="nicole-message__author">Nicole</span>}{message.role==='assistant'?<><Answer text={message.content}/><ResponseActions message={message} index={i}/></>:<p>{message.content}</p>}</article>)}{chat.busy&&<div className="nicole-thinking" role="status"><span/><span/><span/><span className="sr-only">Nicole is thinking…</span></div>}</div>:<div className="nicole-empty"><span className="nicole-empty__eyebrow">A little curiosity goes a long way.</span><h1>What would you like<br/>to explore?</h1><p>Connect an idea. Understand a mechanism.<br/>Follow the evidence.</p><div className="nicole-suggestions">{prompts.map((text,i)=><button key={text} disabled={chat.busy||chat.loading} onClick={()=>chat.send(questions[i])}>{text}</button>)}</div></div>}</div>;
}
function Composer(){
 const chat=useContext(Context);const id=useId();
 return <div className="nicole-composer-wrap">{chat.page&&<label className="nicole-context"><input type="checkbox" checked={chat.includePage} onChange={e=>chat.setIncludePage(e.target.checked)}/><span>Include this page <span>{chat.page.title}</span></span></label>}{!chat.userId&&!chat.loading&&<p className="nicole-signin"><Link href="/login?next=%2Fnicole">Sign in</Link> to talk with Nicole.</p>}{chat.library.error&&<div className="nicole-save-error" role="alert"><p>{chat.library.error}</p><button onClick={chat.library.retry}>Try again</button>{chat.library.state.ready&&<><button onClick={chat.library.download}>Download unsaved copy</button>{chat.library.conflict&&<button onClick={chat.library.reloadLatest}>Reload latest</button>}</>}</div>}{chat.error&&<p className="nicole-error" role="alert">{chat.error}</p>}<form className="nicole-composer" onSubmit={e=>{e.preventDefault();chat.send(chat.draft);}}><label htmlFor={id} className="sr-only">Message Nicole</label><textarea id={id} rows={2} maxLength={4000} placeholder="Ask Nicole…" value={chat.draft} onChange={e=>chat.setDraft(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.nativeEvent.isComposing){e.preventDefault();if(!chat.busy&&chat.draft.trim())e.currentTarget.form.requestSubmit();}}}/>{chat.busy?<button type="button" onClick={chat.stop} aria-label="Stop response"><span className="nicole-stop"/></button>:<button type="submit" disabled={!chat.draft.trim()||!chat.userId||chat.loading} aria-label="Send message"><Icon name="send"/></button>}</form><div className="nicole-privacy">Nicole can make mistakes. Check important information. </div></div>;
}
function Sidebar({compact=false}){
 const chat=useContext(Context);const {state,change,profile}=chat.library;
 const [editor,setEditor]=useState(null);const [name,setName]=useState('');const [folderChoice,setFolderChoice]=useState('');const [formError,setFormError]=useState('');const form=useRef(null);const sidebarRoot=useRef(null);
 useEffect(()=>{if(!chat.sidebar)return;const previous=document.activeElement;const root=sidebarRoot.current;root?.querySelector('button')?.focus();function trap(e){if(e.key!=='Tab'||(!compact&&!matchMedia('(max-width:900px)').matches))return;const controls=Array.from(root.querySelectorAll('a,button:not(:disabled),input,select,summary')).filter(el=>el.getClientRects().length);const first=controls[0],last=controls.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}}root?.addEventListener('keydown',trap);return()=>{root?.removeEventListener('keydown',trap);previous?.focus();};},[chat.sidebar,compact]);
 useEffect(()=>{if(editor)form.current?.querySelector('input')?.focus();},[editor]);
 useEffect(()=>{function escape(e){if(e.key==='Escape'&&!chat.searchOpen){if(editor)setEditor(null);else if(compact)chat.setSidebar(false);else chat.closeSidebar();}}document.addEventListener('keydown',escape);return()=>document.removeEventListener('keydown',escape);},[chat.setSidebar,chat.closeSidebar,chat.searchOpen,editor,compact]);
 function edit(type,item){setEditor({type,id:item?.id});setName(item?.name||item?.title||'');setFolderChoice(item?.folderId||'');setFormError('');}
 function submit(e){e.preventDefault();try{const value=libraryName(name);change(old=>editor.type==='folder'?{...old,folders:editor.id?old.folders.map(f=>f.id===editor.id?{...f,name:value}:f):[...old.folders,{id:crypto.randomUUID(),name:value}]}:{...old,conversations:old.conversations.map(c=>c.id===editor.id?{...c,title:value,folderId:folderChoice||null,manualTitle:true}:c)});setEditor(null);}catch(e){setFormError(e.message);}}
 function remove(){try{change(old=>editor.type==='folder'?{folders:old.folders.filter(f=>f.id!==editor.id),conversations:old.conversations.map(c=>c.folderId===editor.id?{...c,folderId:null}:c)}:{...old,conversations:old.conversations.filter(c=>c.id!==editor.id)});if(chat.current?.id===editor.id)chat.newChat();setEditor(null);}catch(e){setFormError(e.message);}}
 const matches=state.library.conversations;
 function rows(folderId){return matches.filter(c=>c.folderId===folderId).map(c=><div className={`nicole-history-row${chat.current?.id===c.id?' is-current':''}`} key={c.id}><button disabled={chat.busy} aria-current={chat.current?.id===c.id?'true':undefined} onClick={()=>chat.selectConversation(c.id)} title={c.title}>{c.title}</button><button className="nicole-row-menu" aria-label={`Rename or organize ${c.title}`} disabled={chat.busy} onClick={()=>edit('conversation',c)}>···</button></div>);}
 return <aside ref={sidebarRoot} id={compact?'nicole-panel-history':'nicole-history'} className={`nicole-sidebar${compact?' nicole-sidebar--compact':''}${chat.sidebar?' is-open':''}`} aria-label="Your Nicole conversations"><div className="nicole-sidebar-top"><Link href="/" className="nicole-sidebar-brand" aria-label="NaS home"><Image src="/assets/images/NaSLogonbg.png" alt="" width={32} height={32}/><span>Nicole</span></Link><div><button onClick={()=>chat.setSearchOpen(true)} aria-label="Search conversations" title="Search conversations"><Icon name="search"/></button><button onClick={compact?()=>chat.setSidebar(false):chat.closeSidebar} className="nicole-sidebar-close" aria-label="Close conversation sidebar" title="Close sidebar"><Icon name="sidebar"/></button></div></div><button className="nicole-new-chat" onClick={chat.newChat} disabled={chat.busy||!state.ready}><Icon name="new"/>New conversation</button><div className="nicole-history-scroll"><div className="nicole-folder-heading"><span>Folders</span><button aria-label="Create folder" onClick={()=>edit('folder')} disabled={!state.ready||chat.busy}><Icon name="new"/></button></div>{state.library.folders.map(folder=><details className="nicole-folder" key={folder.id}><summary><Icon name="folder"/>{folder.name}</summary><button className="nicole-folder-edit" aria-label={`Rename ${folder.name} folder`} disabled={chat.busy} onClick={()=>edit('folder',folder)}>···</button><div>{rows(folder.id)}{!matches.some(c=>c.folderId===folder.id)&&<p className="nicole-folder-empty">No conversations yet</p>}</div></details>)}{!state.library.folders.length&&<p className="nicole-folder-empty">Keep related ideas together.</p>}<div className="nicole-folder-heading"><span>Conversations</span></div>{rows(null)}{!matches.length&&<p className="nicole-folder-empty">{state.ready?'Your conversations will appear here.':'Loading conversations…'}</p>}</div><div className="nicole-account"><Profile profile={profile} signedIn={Boolean(chat.userId)}/></div>{editor&&<div className="nicole-editor" role="dialog" aria-modal="false" aria-label={editor.type==='folder'?'Name folder':'Organize conversation'}><form ref={form} onSubmit={submit}><label>{editor.type==='folder'?'Folder name':'Conversation name'}<input value={name} maxLength={80} onChange={e=>setName(e.target.value)}/></label>{editor.type==='conversation'&&<label>Folder<select value={folderChoice} onChange={e=>setFolderChoice(e.target.value)}><option value="">Unfiled</option>{state.library.folders.map(f=><option value={f.id} key={f.id}>{f.name}</option>)}</select></label>}{formError&&<p role="alert">{formError}</p>}<div><button type="button" onClick={()=>setEditor(null)}>Cancel</button><button type="submit">Save</button></div>{editor.id&&<button type="button" className="nicole-remove" onClick={()=>{if(editor.type==='folder'||window.confirm('Delete this conversation from your account?'))remove();}}>{editor.type==='folder'?'Remove folder · keep conversations':'Delete conversation'}</button>}</form></div>}</aside>;
}
function Profile({profile,signedIn}){
 const [failed,setFailed]=useState(false);useEffect(()=>setFailed(false),[profile?.avatar]);
 const name=profile?.name||(signedIn?'Your account':'Sign in');const initials=name.split(/\s+/).slice(0,2).map(n=>Array.from(n)[0]).join('');
 return <Link href={signedIn?'/account':'/login?next=%2Fnicole'} className="nicole-profile"><span className="nicole-avatar">{profile?.avatar&&!failed?<img src={profile.avatar} alt="" width="36" height="36" referrerPolicy="no-referrer" onError={()=>setFailed(true)}/>:<span aria-hidden="true">{initials}</span>}</span><span><strong>{name}</strong></span></Link>;
}
export function NicolePage(){const chat=useContext(Context);return <div className={`nicole-page${chat.collapsed?' nicole-page--collapsed':''}`}><Sidebar/>{chat.sidebar&&<button className="nicole-sidebar-backdrop" aria-label="Close conversation sidebar" onClick={()=>chat.setSidebar(false)}/>}<div className="nicole-chat-main" inert={chat.sidebar?true:undefined}><NicoleSidebarToggle/><CurrentConversationOptions key={chat.current?.id||'empty'}/><Conversation/><Composer/></div></div>;}

function ResponseActions({message,index}){
 const chat=useContext(Context);const [copied,setCopied]=useState(false);const [copyError,setCopyError]=useState('');const timer=useRef(null);
 useEffect(()=>()=>clearTimeout(timer.current),[]);
 useEffect(()=>{setCopied(false);setCopyError('');},[message.content]);
 async function copy(){try{await navigator.clipboard.writeText(message.content);setCopied(true);setCopyError('');clearTimeout(timer.current);timer.current=setTimeout(()=>setCopied(false),2000);}catch{setCopyError('Copy was unavailable. Select the response text to copy it.');}}
 return <div className="nicole-response-actions"><button onClick={copy} aria-label={copied?'Response copied':'Copy response'} title={copied?'Copied':'Copy response'}><Icon name={copied?'check':'copy'}/></button><button onClick={()=>chat.branch(index)} disabled={chat.busy} aria-label="Branch into new conversation" title="Branch into new conversation"><Icon name="branch"/></button><span className="sr-only" role="status">{copied?'Response copied.':copyError}</span></div>;
}
function NicoleSidebarToggle(){
 const chat=useContext(Context);const expanded=chat.narrow?chat.sidebar:!chat.collapsed;const toggle=useRef(null);const wasExpanded=useRef(expanded);
 useEffect(()=>{if(wasExpanded.current&&!expanded)toggle.current?.focus();else if(!wasExpanded.current&&expanded)document.getElementById('nicole-history')?.querySelector('button')?.focus();wasExpanded.current=expanded;},[expanded]);
 return <button ref={toggle} hidden={expanded} className="nicole-reopen" onClick={chat.toggleSidebar} aria-label="Open conversation sidebar" aria-expanded={expanded} aria-controls="nicole-history" title="Open sidebar"><Icon name="sidebar"/></button>;
}

function ConversationSearch(){
 const chat=useContext(Context);const dialog=useRef(null);const field=useRef(null);const title=useId();
 useEffect(()=>{const previous=document.activeElement;dialog.current?.showModal();field.current?.focus();return()=>{dialog.current?.close();previous?.focus();};},[]);
 const results=searchConversations(chat.library.state.library,chat.searchQuery);
 return <dialog ref={dialog} className="nicole-search-dialog" aria-labelledby={title} onCancel={e=>{e.preventDefault();chat.setSearchOpen(false);}} onClick={e=>{if(e.target===e.currentTarget)chat.setSearchOpen(false);}}><div className="nicole-search-surface"><header><h2 id={title}>Search conversations</h2><button onClick={()=>chat.setSearchOpen(false)} aria-label="Close conversation search"><Icon name="close"/></button></header><label><span className="sr-only">Search by title or message</span><Icon name="search"/><input ref={field} type="search" value={chat.searchQuery} onChange={e=>chat.setSearchQuery(e.target.value)} placeholder="Search by title or message…"/></label><div className="nicole-search-results">{results.length?results.map(c=><button key={c.id} disabled={chat.busy} onClick={()=>chat.selectConversation(c.id)}><Icon name="chat"/><span><strong>{c.title}</strong><small>{c.messages.find(m=>chat.searchQuery.trim()&&m.content.toLocaleLowerCase().includes(chat.searchQuery.trim().toLocaleLowerCase()))?.content.slice(0,130)||c.messages[0]?.content.slice(0,130)||'New conversation'}</small></span></button>):<p>{chat.searchQuery?'No matching conversations.':'Your saved conversations will appear here.'}</p>}</div></div></dialog>;
}

function CurrentConversationOptions(){
 const chat=useContext(Context);const [open,setOpen]=useState(false);const [mode,setMode]=useState(null);const [name,setName]=useState('');const [error,setError]=useState('');
 const root=useRef(null);const trigger=useRef(null);const menu=useRef(null);const dialog=useRef(null);const field=useRef(null);const id=useId();
 useEffect(()=>{if(!open)return;menu.current?.querySelector('button')?.focus();function outside(e){if(!root.current?.contains(e.target))setOpen(false);}function escape(e){if(e.key==='Escape'){setOpen(false);trigger.current?.focus();}}document.addEventListener('pointerdown',outside);document.addEventListener('keydown',escape);return()=>{document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',escape);};},[open]);
 useEffect(()=>{if(!mode)return;const element=dialog.current;element?.showModal();if(mode==='rename'){field.current?.focus();field.current?.select();}return()=>{element?.close();trigger.current?.focus();};},[mode]);
 function choose(value){setOpen(false);setName(chat.current?.title||'');setError('');setMode(value);}
 function submit(e){e.preventDefault();if(!chat.current||chat.busy)return;try{const currentId=chat.current.id;if(mode==='rename'){const title=libraryName(name);chat.library.change(old=>({...old,conversations:old.conversations.map(c=>c.id===currentId?{...c,title,manualTitle:true}:c)}));}else{chat.library.change(old=>({...old,conversations:old.conversations.filter(c=>c.id!==currentId)}));chat.newChat();requestAnimationFrame(()=>document.querySelector('.nicole-chat-main textarea')?.focus());}setMode(null);}catch(e){setError(e.message);}}
 function keys(e){if(e.key==='Escape'){e.preventDefault();e.stopPropagation();setOpen(false);trigger.current?.focus();return;}const controls=Array.from(menu.current?.querySelectorAll('button')||[]);const index=controls.indexOf(document.activeElement);if(['ArrowDown','ArrowUp','Home','End'].includes(e.key)){e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?controls.length-1:(index+(e.key==='ArrowDown'?1:-1)+controls.length)%controls.length;controls[next]?.focus();}if(e.key==='Tab')setOpen(false);}
 return <div className="nicole-current-options" ref={root}><button className="nicole-options-trigger" ref={trigger} aria-label="Current conversation options" title="Conversation options" aria-haspopup="menu" aria-expanded={open} aria-controls={id} disabled={!chat.current||chat.busy} onClick={()=>setOpen(v=>!v)}><Icon name="more"/></button>{open&&<div id={id} className="nicole-options-menu" role="menu" aria-label="Current conversation" ref={menu} onKeyDown={keys}><button role="menuitem" onClick={()=>choose('rename')}><Icon name="rename"/>Rename</button><button role="menuitem" className="nicole-delete-option" onClick={()=>choose('delete')}><Icon name="trash"/>Delete</button></div>}{mode&&<dialog className="nicole-chat-action-dialog" onKeyDown={e=>{if(e.key==='Escape')e.stopPropagation();}} ref={dialog} aria-labelledby={id+'-title'} onCancel={e=>{e.preventDefault();setMode(null);}}><form onSubmit={submit}><h2 id={id+'-title'}>{mode==='rename'?'Rename conversation':'Delete conversation?'}</h2>{mode==='rename'?<label><span className="sr-only">Conversation name</span><input ref={field} value={name} onChange={e=>setName(e.target.value)} maxLength={80}/></label>:<p>“{chat.current?.title}” will be removed from your account. Existing branches will be kept.</p>}{error&&<p className="nicole-error" role="alert">{error}</p>}<div><button type="button" onClick={()=>setMode(null)}>Cancel</button><button type="submit" className={mode==='delete'?'is-destructive':''} disabled={chat.busy||(mode==='rename'&&!name.trim())}>{mode==='rename'?'Save':'Delete'}</button></div></form></dialog>}</div>;
}

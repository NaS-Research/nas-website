"use client";
import {createContext,useContext,useEffect,useId,useRef,useState} from 'react';
import Link from 'next/link';
import {usePathname,useRouter} from 'next/navigation';
import {useMember} from '@/components/member/MemberProvider';
import './nicole.css';
const Context=createContext(null);
const PREFIX='nas-nicole-v1:';
const prompts=['Explain a concept','Explore NaS research','Help me study'];
const questions=['Help me understand how the kidneys filter blood.','Help me find research in the NaS library.','Help me build a study plan for cardiovascular physiology.'];
function Icon({name}){return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">{name==='send'?<path d="M12 19V5m-6 6 6-6 6 6"/>:name==='close'?<path d="m6 6 12 12M6 18 18 6"/>:name==='expand'?<path d="M14 4h6v6m0-6-7 7M10 20H4v-6m0 6 7-7"/>:name==='new'?<path d="M12 5v14M5 12h14"/>:<><path d="M20 11.5a8 8 0 0 1-8 8H5l-3 2v-10a9 9 0 0 1 18 0Z"/><path d="M7 11h10M7 15h6"/></>}</svg>}
export default function NicoleProvider({children}){
 const member=useMember();const pathname=usePathname();const router=useRouter();
 const [chat,setChat]=useState({owner:null,messages:[]});const [open,setOpen]=useState(false);const [busy,setBusy]=useState(false);const [error,setError]=useState('');const [draft,setDraft]=useState('');
 const [page,setPage]=useState(null);const [includePage,setIncludePage]=useState(false);
 const active=useRef(null);const sequence=useRef(0);const openingButton=useRef(null);const panel=useRef(null);const identity=useRef(null);
 const full=pathname==='/nicole';
 const userId=member.status==='guest'?null:member.userId||(member.status==='loading'?chat.owner:null);
 identity.current=userId;
 useEffect(()=>{
  if(member.status==='loading')return;
  if(member.status==='guest'||(member.userId&&chat.owner!==member.userId)){
   active.current?.abort();sequence.current++;setBusy(false);setError('');setDraft('');setOpen(false);
   try{for(let i=sessionStorage.length-1;i>=0;i--){const key=sessionStorage.key(i);if(key?.startsWith(PREFIX)&&key!==PREFIX+member.userId)sessionStorage.removeItem(key);}}catch{}
   if(member.userId){let saved;try{saved=JSON.parse(sessionStorage.getItem(PREFIX+member.userId)||'null');}catch{}const messages=Array.isArray(saved?.messages)?saved.messages.filter(m=>['user','assistant'].includes(m.role)&&typeof m.content==='string').slice(-20):[];setChat({owner:member.userId,messages});setOpen(saved?.open===true);}
   else setChat({owner:null,messages:[]});
  }
 },[member.status,member.userId,chat.owner]);
 useEffect(()=>{if(chat.owner&&chat.owner===userId){try{sessionStorage.setItem(PREFIX+chat.owner,JSON.stringify({messages:chat.messages,open}));}catch{/* Chat still works without browser storage. */}}},[chat,open,userId]);
 useEffect(()=>{
  setIncludePage(false);
  const title=document.querySelector('main h1')?.textContent?.trim();
  const allowed=/^\/(research|learn)(\/|$)/.test(pathname)&&!/(preview|admin|studio)/.test(pathname);
  setPage(allowed&&title?{path:pathname,title:title.slice(0,180)}:null);
 },[pathname]);
 useEffect(()=>()=>active.current?.abort(),[]);
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
 function newChat(){sequence.current++;active.current?.abort();setBusy(false);setChat({owner:userId,messages:[]});setDraft('');setError('');}
 async function send(question,{expand=false}={}){
  question=question.trim();if(!question||busy)return;
  if(expand){setOpen(false);router.push('/nicole');}
  if(!userId){setError('Sign in to talk with Nicole.');if(!expand)setOpen(true);return;}
  if(chat.messages.length>=20){setError('Start a new conversation to continue.');return;}
  const owner=userId;const generation=++sequence.current;const previous=chat.owner===owner?chat.messages:[];
  const pending=[...previous,{role:'user',content:question}];setChat({owner,messages:pending});setDraft('');setError('');setBusy(true);
  const controller=new AbortController();active.current=controller;
  try{
   const response=await fetch('/api/nicole',{method:'POST',headers:{'Content-Type':'application/json'},signal:controller.signal,body:JSON.stringify({userId:owner,question,messages:previous,contextPath:includePage?page?.path:null})});
   const answer=await response.json();if(!response.ok)throw new Error(answer.error||'Nicole couldn’t respond. Please try again.');
   if(generation===sequence.current&&identity.current===owner){setChat({owner,messages:[...pending,{role:'assistant',content:answer.text}]});if(answer.truncated)setError('This response reached its length limit. Ask Nicole to continue for more detail.');}
  }catch(e){if(generation===sequence.current&&identity.current===owner){setChat({owner,messages:previous});setDraft(question);setError(e.name==='AbortError'?'Response stopped.':e.message);}}
  finally{if(generation===sequence.current){setBusy(false);active.current=null;}}
 }
 const value={messages:chat.owner===userId?chat.messages:[],open,busy,error,draft,setDraft,page,includePage,setIncludePage,userId,loading:member.status==='loading',send,stop,newChat,openPanel,closePanel};
 return <Context.Provider value={value}>{children}{!full&&<button className="nicole-launcher" aria-label="Ask Nicole" aria-expanded={open} aria-controls="nicole-panel" onClick={open?closePanel:openPanel}><Icon name="chat"/><span>Ask Nicole</span></button>}{open&&!full&&<aside id="nicole-panel" className="nicole-panel" aria-label="Nicole conversation" ref={panel}><ChatHeader panel/><Conversation/><Composer/></aside>}</Context.Provider>;
}
function ChatHeader({panel=false}){
 const chat=useContext(Context);
 return <header className="nicole-chatbar"><Link href="/nicole" onClick={chat.closePanel} className="nicole-name">Nicole<span>NaS Research</span></Link><div><button onClick={chat.newChat} disabled={chat.busy} aria-label="New conversation" title="New conversation"><Icon name="new"/></button>{panel&&<><Link href="/nicole" onClick={chat.closePanel} aria-label="Expand Nicole" title="Expand Nicole"><Icon name="expand"/></Link><button onClick={chat.closePanel} aria-label="Close Nicole"><Icon name="close"/></button></>}</div></header>;
}
export function NicoleEntry(){
 const chat=useContext(Context);const [question,setQuestion]=useState('');const id=useId();
 return <section className="nicole-entry" aria-label="Ask Nicole"><form onSubmit={e=>{e.preventDefault();chat.send(question,{expand:true});setQuestion('');}}><label htmlFor={id} className="sr-only">Your question for Nicole</label><textarea id={id} rows={2} maxLength={4000} placeholder="Ask Nicole anything about your next question…" value={question} onChange={e=>setQuestion(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.nativeEvent.isComposing){e.preventDefault();if(question.trim())e.currentTarget.form.requestSubmit();}}}/><div className="nicole-entry__footer"><span>Nicole <span className="nicole-subtle">· Your NaS assistant</span></span><button type="submit" aria-label="Send to Nicole" disabled={!question.trim()||chat.busy||chat.loading}><Icon name="send"/></button></div></form><div className="nicole-suggestions">{prompts.map((text,i)=><button key={text} disabled={chat.busy||chat.loading} onClick={()=>chat.send(questions[i],{expand:true})}>{text}</button>)}</div></section>;
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
 return <div className="nicole-composer-wrap">{chat.page&&<label className="nicole-context"><input type="checkbox" checked={chat.includePage} onChange={e=>chat.setIncludePage(e.target.checked)}/><span>Include this page <span>{chat.page.title}</span></span></label>}{!chat.userId&&!chat.loading&&<p className="nicole-signin"><Link href="/login?next=%2Fnicole">Sign in</Link> to talk with Nicole.</p>}{chat.error&&<p className="nicole-error" role="alert">{chat.error}</p>}<form className="nicole-composer" onSubmit={e=>{e.preventDefault();chat.send(chat.draft);}}><label htmlFor={id} className="sr-only">Message Nicole</label><textarea id={id} rows={2} maxLength={4000} placeholder="Ask Nicole…" value={chat.draft} onChange={e=>chat.setDraft(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.nativeEvent.isComposing){e.preventDefault();if(!chat.busy&&chat.draft.trim())e.currentTarget.form.requestSubmit();}}}/>{chat.busy?<button type="button" onClick={chat.stop} aria-label="Stop response"><span className="nicole-stop"/></button>:<button type="submit" disabled={!chat.draft.trim()||!chat.userId||chat.loading} aria-label="Send message"><Icon name="send"/></button>}</form><div className="nicole-privacy">Nicole can make mistakes. Check important information. <details><summary>About this conversation</summary><p>Powered by OpenAI. Your messages and any page you choose to include are sent to OpenAI. This conversation is kept in this browser tab for your account, not synced across devices. Avoid sharing patient or other sensitive personal information.</p></details></div></div>;
}
export function NicolePage(){return <div className="nicole-page"><ChatHeader/><Conversation/><Composer/></div>;}

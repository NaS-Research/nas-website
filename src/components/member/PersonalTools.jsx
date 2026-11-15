'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import {BookmarkIcon} from '@heroicons/react/24/outline';
import {BookmarkIcon as SavedBookmarkIcon} from '@heroicons/react/24/solid';
import {useArticleDockVisibility} from '@/components/research/ArticleDockVisibility';
import {useMember} from './MemberProvider';
export default function PersonalTools(){
 const member=useMember();const articleDocks=useArticleDockVisibility();
 const [optimisticSaved,setOptimisticSaved]=useState(null);const bookmarkOperation=useRef(0);
 useEffect(()=>{bookmarkOperation.current++;setOptimisticSaved(null);return()=>{bookmarkOperation.current++;};},[member.pathname,member.userId,member.status]);
 const item=member.current?.path===member.pathname ? member.current : null;
 const isArticle=item?.type==='article'||item?.type==='paper';
 const isModule=item?.type==='module'&&member.pathname?.startsWith('/learn/');
 const [moduleBounds,setModuleBounds]=useState(null);
 const record=member.items.find(r=>r.path===item?.path);
 const [open,setOpen]=useState(false);const [section,setSection]=useState('');const [draft,setDraft]=useState('');const [dirty,setDirty]=useState(false);
 const last=useRef('');const saveRef=useRef(member.save);saveRef.current=member.save;
 useEffect(()=>{
  const editArticleNote=(member.pathname?.startsWith('/research/')||member.pathname?.startsWith('/learn/')) && new URLSearchParams(window.location.search).has('edit-note');
  setOpen(editArticleNote);setDirty(false);setSection('');setDraft('');last.current='';
 },[member.pathname]);
 useEffect(()=>{if(!dirty)setDraft(record?.notes?.[section]||'');},[record,section,dirty]);
 useEffect(()=>{
  if(member.status!=='ready'||item?.type!=='module')return;
  const nodes=item.sections.map(id=>document.getElementById(id)).filter(Boolean);
  let reading=false;
  const beginReading=()=>{reading=true;};
  window.addEventListener('wheel',beginReading,{passive:true});window.addEventListener('touchmove',beginReading,{passive:true});window.addEventListener('keydown',beginReading);
  const observer=new IntersectionObserver(entries=>{
   const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top)[0];
   if(reading && visible && last.current!==visible.target.id){last.current=visible.target.id;saveRef.current(item.path,'progress',{section:visible.target.id});}
  },{rootMargin:'-15% 0px -55% 0px'});
  nodes.forEach(n=>observer.observe(n));return ()=>{observer.disconnect();window.removeEventListener('wheel',beginReading);window.removeEventListener('touchmove',beginReading);window.removeEventListener('keydown',beginReading);};
 },[member.status,item?.path]);
 useEffect(()=>{
  if(!isModule){setModuleBounds(null);return;}
  const content=document.querySelector('.pharmacy-module-content,.lesson-body');if(!content)return;
  let frame;const measure=()=>{frame=null;const rect=content.getBoundingClientRect();setModuleBounds({center:rect.left+rect.width/2,width:Math.max(0,Math.min(rect.width-24,window.innerWidth-32))});};
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(measure);};
  const observer=new ResizeObserver(schedule);observer.observe(content);if(content.parentElement)observer.observe(content.parentElement);window.addEventListener('resize',schedule);measure();
  return()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('resize',schedule);};
 },[isModule,item?.path]);
 if(!item||(!isModule&&(!isArticle||!member.pathname?.startsWith('/research/')))||(isModule&&!moduleBounds))return null;
 async function saveNote(){if(await member.save(item.path,'note',{section,text:draft}))setDirty(false);}
 const saved=optimisticSaved??Boolean(record?.saved);
 async function toggleBookmark(){const operation=++bookmarkOperation.current;setOptimisticSaved(!saved);try{await member.save(item.path,'save',{saved:!saved});}finally{if(operation===bookmarkOperation.current)setOptimisticSaved(null);}}
 return <aside className={isModule?"personal-tools personal-tools--module":"personal-tools personal-tools--article"} data-module-dock={isModule||undefined} data-article-dock-visible={!isModule?articleDocks.visible:undefined} inert={!isModule&&!articleDocks.visible} aria-hidden={!isModule&&!articleDocks.visible} style={isModule?{'--module-dock-center':`${moduleBounds.center}px`,'--module-dock-max':`${moduleBounds.width}px`}:undefined} aria-label={isModule?"Module save, notes and progress":"Article bookmark"}>
  {member.status==='guest'?<Link href={`/login?next=${encodeURIComponent(item.path)}`} aria-label={isModule?"Sign in to save module progress":"Sign in to bookmark this article"} title={isModule?"Sign in to save":"Sign in to bookmark"}>{isModule?'Sign in to save your place':<BookmarkIcon aria-hidden="true"/>}</Link>:<>
   <button type="button" disabled={member.status!=='ready'||member.saving} aria-pressed={saved} aria-busy={member.saving}
    aria-label={isModule?(saved?'Remove saved module':'Save module for later'):(saved?'Remove article bookmark':'Bookmark this article')} title={isModule?(saved?'Remove saved module':'Save for later'):(saved?'Remove bookmark':'Bookmark article')}
    onClick={toggleBookmark}>
    {isModule?(saved?'✓ Saved':'＋ Save for later'):(saved?<SavedBookmarkIcon aria-hidden="true"/>:<BookmarkIcon aria-hidden="true"/>)}
   </button>
   {isModule&&<button type="button" aria-expanded={open} onClick={()=>setOpen(!open)}>Notes &amp; progress</button>}
   {open && <div className="personal-tools-panel"><strong>{item.title}</strong>
    {record?.progress?.lastSection && <Link href={`${item.path}#${encodeURIComponent(record.progress.lastSection)}`}>Resume saved section ↗</Link>}
    {isModule&&<button disabled={member.status!=='ready'||member.saving} onClick={()=>member.save(item.path,'progress',{completed:!record?.progress?.completed})}>{record?.progress?.completed?'✓ Completed · Mark in progress':'Mark module complete'}</button>}
    <label>Note for<select value={section} disabled={dirty} onChange={e=>setSection(e.target.value)}><option value="">This item</option>{item.sections.map(id=><option key={id} value={id}>{id.replaceAll('-',' ')}</option>)}</select></label>
    <label>Private note<textarea value={draft} maxLength={5000} onChange={e=>{setDraft(e.target.value);setDirty(true);}} placeholder="What would you like to remember?" /></label>
    <button disabled={!dirty||member.saving||member.status!=='ready'} onClick={saveNote}>Save note</button>{dirty&&<small>Unsaved note. Save before leaving this page.</small>}
    <button type="button" onClick={()=>setOpen(false)}>Close notes</button>
    <p role="status">{member.message}</p>{member.status==='error'&&<button onClick={member.retry}>Reconnect</button>}
   </div>}
   {!open && <span className={member.saveError||member.status==='error'?'personal-tools-status':'sr-only'} role="status">{member.message}</span>}
  </>}
 </aside>;
}

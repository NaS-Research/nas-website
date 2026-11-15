'use client';
import {useEffect,useRef,useState} from 'react';
import Link from 'next/link';
import {BookmarkIcon} from '@heroicons/react/24/outline';
import {BookmarkIcon as SavedBookmarkIcon} from '@heroicons/react/24/solid';
import {useMember} from './MemberProvider';
export default function PersonalTools(){
 const member=useMember();
 const item=member.current?.path===member.pathname ? member.current : null;
 const isArticle=item?.type==='article'||item?.type==='paper';
 const record=member.items.find(r=>r.path===item?.path);
 const [open,setOpen]=useState(false);const [section,setSection]=useState('');const [draft,setDraft]=useState('');const [dirty,setDirty]=useState(false);
 const last=useRef('');const saveRef=useRef(member.save);saveRef.current=member.save;
 useEffect(()=>{
  const editArticleNote=member.pathname?.startsWith('/research/') && new URLSearchParams(window.location.search).has('edit-note');
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
 if(!item||!isArticle||!member.pathname?.startsWith('/research/'))return null;
 async function saveNote(){if(await member.save(item.path,'note',{section,text:draft}))setDirty(false);}
 const saved=Boolean(record?.saved);
 return <aside className="personal-tools personal-tools--article" aria-label="Article bookmark">
  {member.status==='guest'?<Link href={`/login?next=${encodeURIComponent(item.path)}`} aria-label="Sign in to bookmark this article" title="Sign in to bookmark"><BookmarkIcon aria-hidden="true"/></Link>:<>
   <button type="button" disabled={member.status!=='ready'||member.saving} aria-pressed={saved}
    aria-label={saved?'Remove article bookmark':'Bookmark this article'} title={saved?'Remove bookmark':'Bookmark article'}
    onClick={()=>member.save(item.path,'save',{saved:!saved})}>
    {saved?<SavedBookmarkIcon aria-hidden="true"/>:<BookmarkIcon aria-hidden="true"/>}
   </button>
   {open && <div className="personal-tools-panel"><strong>{item.title}</strong>
    {record?.progress?.lastSection && <Link href={`${item.path}#${encodeURIComponent(record.progress.lastSection)}`}>Resume saved section ↗</Link>}
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

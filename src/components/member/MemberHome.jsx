'use client';
import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useRef, useState} from 'react';
import {useMember} from './MemberProvider';
import {NicoleEntry} from '@/components/nicole/NicoleProvider';
import {publicationArtwork} from '@/data/publicationArtwork';
import {resumePath, workspaceLists} from '@/lib/member/presentation.mjs';
import './workspace-home.css';

const explore = [
 {path:'/research/clinvar-conflict-atlas', title:'The ClinVar Conflict Atlas', label:'Research', description:'Follow a question through the evidence.'},
 {path:'/research/introducing-anatomy-studio', title:'Introducing Anatomy Studio', label:'Tools & learning', description:'A new perspective on the structures of life.'},
 {path:'/research/building-the-next-stage-of-nas-computing', title:'Building the next stage of NaS computing', label:'Inside NaS', description:'The infrastructure behind what comes next.'},
];
function Arrow(){return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>}
function Artwork({path, type, large=false}) {
 const slug=path.startsWith('/research/')?path.split('/')[2]:null;
 const art=publicationArtwork[slug];
 return <div className={`workspace-art${art?'':' workspace-art--symbol'}${large?' workspace-art--large':''}`}>
  {art?<Image src={art.coverPoster||art.src} alt="" fill sizes={large?'(max-width: 650px) 90vw, 400px':'(max-width: 650px) 90vw, 350px'} style={{objectFit:art.contain||art.coverContain?'contain':'cover'}}/>:
   <svg aria-hidden="true" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="50" cy="50" r="31"/><ellipse cx="50" cy="50" rx="14" ry="31"/><path d="M19 50h62M25 32h50M25 68h50"/>{type==='module'&&<path d="m45 42 14 8-14 8z" fill="currentColor" stroke="none"/>}</svg>}
 </div>;
}
function AccountMenu({children}) {
 const ref=useRef(null);
 useEffect(()=>{
  function close(event){if(event.type==='keydown'&&event.key!=='Escape')return;if(event.type==='pointerdown'&&ref.current?.contains(event.target))return;const wasOpen=ref.current?.open;if(ref.current)ref.current.open=false;if(wasOpen&&event.type==='keydown')ref.current.querySelector('summary')?.focus();}
  document.addEventListener('pointerdown',close);document.addEventListener('keydown',close);
  return()=>{document.removeEventListener('pointerdown',close);document.removeEventListener('keydown',close);};
 },[]);
 return <details className="workspace-account" ref={ref}><summary>Account <span aria-hidden="true">⌄</span></summary><div className="workspace-account__menu">{children}</div></details>;
}
export default function MemberHome({initialTab='Continue',displayName='',accountControls}) {
 const member=useMember();
 const [tab,setTab]=useState(initialTab);const [filter,setFilter]=useState('all');
 const {continued,saved,notes,history}=workspaceLists(member.items);
 const rows=tab==='Continue'?continued:tab==='Saved'?saved.filter(row=>filter==='all'||row.item.type===filter):history;
 const ready=member.status==='ready';
 return <div className="member-home member-home--personal">
  <div className="workspace-topline"><span>Your workspace</span>{accountControls&&<AccountMenu>{accountControls}</AccountMenu>}</div>
  <header className="workspace-welcome"><h1>Welcome back{displayName?<>, <span>{displayName}</span></>:''}.</h1><p>A place for your questions. Room for what comes next.</p></header>
  <NicoleEntry/>
  {member.status==='loading'?<div className="workspace-loading" role="status">Loading your library…</div>:!ready?<div className="member-empty" role="status"><h2>Your library couldn’t be loaded.</h2><p>{member.message||'Sign in to access your saved work.'}</p><button onClick={member.retry}>Try again</button></div>:<>
   {continued[0]&&<section className="workspace-resume" aria-labelledby="workspace-resume-heading"><div className="workspace-section-heading"><h2 id="workspace-resume-heading">Pick up where you left off.</h2></div><Link href={resumePath(continued[0])} className="workspace-feature"><Artwork path={continued[0].path} type={continued[0].item.type} large/><div className="workspace-feature__copy"><span className="workspace-label">{continued[0].item.type==='module'?'Continue learning':'Continue exploring'}</span><h3>{continued[0].item.title}</h3>{continued[0].progress?.lastSection&&<p>Last opened · {continued[0].progress.lastSection.replaceAll('-',' ')}</p>}<span className="workspace-primary-link">{continued[0].item.type==='module'?'Continue learning':'Continue reading'}<Arrow/></span></div></Link></section>}
   <section className="workspace-library" aria-labelledby="workspace-library-heading"><div className="workspace-section-heading"><h2 id="workspace-library-heading">Your library.</h2><span>Saved for your next question.</span></div>
    <div className="workspace-library__toolbar"><nav className="member-tabs" aria-label="Your workspace sections">{[['Continue',continued.length],['Saved',saved.length],['Notes',notes.length],['History',history.length]].map(([name,count])=><button key={name} type="button" aria-pressed={tab===name} onClick={()=>setTab(name)}>{name}{count>0&&<span className="workspace-count">{count}</span>}</button>)}</nav>{tab==='Saved'&&<label className="member-filter"><span className="sr-only">Filter saved items</span><select value={filter} onChange={event=>setFilter(event.target.value)}>{['all','module','paper','article','tool','practice'].map(type=><option value={type} key={type}>{type==='all'?'Everything':type==='practice'?'Practice':type[0].toUpperCase()+type.slice(1)+'s'}</option>)}</select></label>}</div>
    {tab==='Notes'?<div className="workspace-notes">{notes.length?notes.map(row=><article key={row.path+row.section}><span className="workspace-label">{row.section?row.section.replaceAll('-',' '):row.item.type}</span><h3><Link href={`${row.path}${row.section?'#'+encodeURIComponent(row.section):''}`}>{row.item.title}</Link></h3><p className="member-note">{row.text}</p><Link className="workspace-text-link" href={row.path.startsWith('/research/')?row.path+'?edit-note=1':row.path}>Open note <Arrow/></Link></article>):<Empty tab={tab}/>}</div>:rows.length?<div className="workspace-cards">{rows.map(row=><article className="workspace-card" key={row.path}><Link href={resumePath(row)}><Artwork path={row.path} type={row.item.type}/><div className="workspace-card__copy"><span className="workspace-label">{row.item.type} · {row.progress?.completed?'Completed':row.progress?.lastSection?'In progress':Object.keys(row.practices||{}).length?'Practice saved':'Saved'}</span><h3>{row.item.title}</h3>{row.item.sections.length>0&&<p>{(row.progress?.visited||[]).filter(id=>row.item.sections.includes(id)).length} of {row.item.sections.length} sections visited</p>}<span className="workspace-card__open">Open <Arrow/></span></div></Link>{tab==='Saved'&&<button className="workspace-remove" disabled={member.saving} onClick={()=>member.save(row.path,'save',{saved:false})} aria-label={`Remove ${row.item.title} from saved`}>Remove from saved</button>}</article>)}</div>:<Empty tab={tab} filtered={filter!=='all'}/>}
   </section><p className="member-save-status" role="status">{member.message}</p>
  </>}
  <section className="workspace-explore" aria-labelledby="workspace-explore-heading"><div className="workspace-section-heading"><h2 id="workspace-explore-heading">A little further.</h2><Link className="workspace-text-link" href="/research">Explore NaS <Arrow/></Link></div><div className="workspace-cards">{explore.map(item=><Link href={item.path} className="workspace-card" key={item.path}><Artwork path={item.path}/><div className="workspace-card__copy"><span className="workspace-label">{item.label}</span><h3>{item.title}</h3><p>{item.description}</p></div></Link>)}</div></section>
 </div>;
}
function Empty({tab,filtered=false}) {
 return <div className="workspace-empty"><div><span className="workspace-empty__mark" aria-hidden="true">{tab==='Notes'?'✎':'↗'}</span><h3>{tab==='Continue'?'Make your first connection.':tab==='Saved'?filtered?'Nothing saved in this category yet.':'Keep what catches your attention.':tab==='Notes'?'A place for your own thinking.':'Your next visit starts here.'}</h3><p>{tab==='Continue'?'Explore a lesson and return to the section you last reached.':tab==='Saved'?'Bookmark an article, lesson, or tool. Find it here whenever you need it.':tab==='Notes'?'Notes you save alongside your reading and learning will appear here.':'Lessons you start and complete will appear here.'}</p><div className="workspace-empty__links"><Link href="/research">Explore research <Arrow/></Link><Link href="/learn">Find something to learn <Arrow/></Link></div></div></div>;
}

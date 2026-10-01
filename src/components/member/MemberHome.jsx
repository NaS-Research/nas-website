'use client';
import Link from 'next/link';
import {useState} from 'react';
import {useMember} from './MemberProvider';
export default function MemberHome(){
 const member=useMember();const [tab,setTab]=useState('Continue');const [filter,setFilter]=useState('all');
 const started=member.items.filter(r=>r.progress?.lastSection||r.progress?.completed||Object.keys(r.practices||{}).length);
 const continued=started.filter(r=>!r.progress?.completed);
 const notes=member.items.flatMap(r=>Object.entries(r.notes||{}).map(([section,text])=>({...r,section,text})));
 const list=tab==='Continue'?continued:tab==='Saved'?member.items.filter(r=>r.saved && (filter==='all'||r.item.type===filter)):started;
 const resume=r=>`${r.path}${r.progress?.lastSection?'#'+encodeURIComponent(r.progress.lastSection):''}`;
 return <div className="member-home">
  <header><p className="member-eyebrow">Your workspace</p><h1>Continue where<br/>you left off.</h1><p>Your learning, reading, and notes. All in one place.</p></header>
  {member.status==='loading'?<p role="status">Loading your workspace…</p>:member.status!=='ready'?<div className="member-empty" role="status"><h2>Your workspace is not available yet.</h2><p>{member.message||'Sign in to access your saved work.'}</p><button onClick={member.retry}>Try again</button><Link href="/learn">Explore learning ↗</Link></div>:<>
   {continued[0] && <Link className="member-resume" href={resume(continued[0])}><span>Pick up your latest module</span><h2>{continued[0].item.title}</h2><span>Continue learning ↗</span></Link>}
   <nav className="member-tabs" aria-label="Your workspace sections">{['Continue','Saved','History','Notes'].map(t=><button key={t} aria-pressed={tab===t} onClick={()=>setTab(t)}>{t}</button>)}</nav>
   {tab==='Saved'&&<label className="member-filter">Show<select value={filter} onChange={e=>setFilter(e.target.value)}>{['all','module','paper','article','tool','practice'].map(t=><option value={t} key={t}>{t==='all'?'Everything':t[0].toUpperCase()+t.slice(1)+'s'}</option>)}</select></label>}
   {tab==='Notes'?<div className="member-list">{notes.length?notes.map(r=><article key={r.path+r.section}><span>{r.section?r.section.replaceAll('-',' '):r.item.type}</span><h2><Link href={`${r.path}${r.section?'#'+encodeURIComponent(r.section):''}`}>{r.item.title} ↗</Link></h2><p className="member-note">{r.text}</p><Link href={r.path}>Open to edit note</Link></article>):<Empty tab={tab}/>}</div>:<div className="member-list">{list.length?list.map(r=><article key={r.path}><span>{r.item.type} · {r.progress?.completed?'Completed':r.progress?.lastSection?'In progress':Object.keys(r.practices||{}).length?'Practice saved':'Saved for later'}</span><h2><Link href={resume(r)}>{r.item.title} ↗</Link></h2>{r.item.sections.length>0&&<p>{(r.progress?.visited||[]).filter(id=>r.item.sections.includes(id)).length} of {r.item.sections.length} sections visited. Completion is recorded separately.</p>}{r.progress?.completedAt&&<p>Completed {new Date(r.progress.completedAt).toLocaleDateString()}</p>}{tab==='Saved'&&<button disabled={member.saving} onClick={()=>member.save(r.path,'save',{saved:false})}>Remove from saved</button>}</article>):<Empty tab={tab}/>}</div>}
   <p className="member-save-status" role="status">{member.message}</p>
  </>}
  <section className="member-discover"><h2>A place to begin.</h2><Link href="/learn">Explore learning ↗</Link><Link href="/research">Find papers & articles ↗</Link><Link href="/learn/pharmacy/atlas">Open the Human Atlas ↗</Link></section>
  <p className="member-nicole">Nicole is in development. Your saved work belongs to your account.</p>
 </div>;
}
function Empty({tab}){return <div className="member-empty"><h2>{tab==='Continue'?'Your next question starts here.':tab==='Saved'?'Keep something worth returning to.':tab==='Notes'?'Make room for your own thinking.':'Your learning history will appear here.'}</h2><p>{tab==='Continue'?'Open a module and we’ll remember the section you reach.':tab==='Saved'?'Use Save for later on a module, paper, article, or tool.':tab==='Notes'?'Add a private note from Notes & progress on the material you’re reading.':'Started and completed modules stay available here. Practice has feedback, not formal grades.'}</p></div>}

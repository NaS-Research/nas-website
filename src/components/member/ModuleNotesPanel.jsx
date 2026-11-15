"use client";
import {useEffect,useRef,useState} from 'react';
import {XMarkIcon,CheckIcon} from '@heroicons/react/24/outline';
import {createNoteAutosaver} from '@/lib/member/noteAutosave.mjs';

export default function ModuleNotesPanel({member,item,record,open,onClose}){
 const text=record?.notes?.['']||'';
 const [note,setNote]=useState({text,dirty:false,saving:false,error:false});
 const saver=useRef(null),save=useRef(member.save);save.current=member.save;
 const close=useRef(null),previousOpen=useRef(false);
 useEffect(()=>{
  const writer=createNoteAutosaver({initialText:text,save:value=>save.current(item.path,'note',{section:'',text:value}),onChange:setNote});
  saver.current=writer;setNote(writer.snapshot());
  const protect=event=>{if(writer.hasPending()){event.preventDefault();event.returnValue='';}};
  window.addEventListener('beforeunload',protect);
  return()=>{window.removeEventListener('beforeunload',protect);writer.dispose();if(saver.current===writer)saver.current=null;};
 },[item.path,member.userId]);
 useEffect(()=>{saver.current?.sync(text);},[text]);
 useEffect(()=>{
  if(open&&!previousOpen.current)close.current?.focus();
  if(!open)void saver.current?.flush();
  previousOpen.current=open;
 },[open]);
 function dismiss(){void saver.current?.flush();onClose();document.querySelector('.personal-tools-notes')?.focus();}
 return <div className="personal-tools-panel module-notes-panel" hidden={!open} role="region" aria-label="Module notes and progress" onKeyDown={event=>{if(event.key==='Escape'){event.stopPropagation();dismiss();}}}>
  <header><h2>Notes</h2><button ref={close} type="button" title="Close notes" aria-label="Close notes" onClick={dismiss}><XMarkIcon aria-hidden="true"/></button></header>
  <label className="module-notes-editor"><span className="sr-only">Private module note</span><textarea value={note.text} maxLength={5000} onChange={event=>saver.current?.edit(event.target.value)} onBlur={()=>{void saver.current?.flush();}} placeholder="Write a note…"/></label>
  <button className="module-completion" type="button" role="switch" aria-checked={Boolean(record?.progress?.completed)} disabled={member.saving} onClick={()=>member.save(item.path,'progress',{completed:!record?.progress?.completed})}>
   <span>Module complete</span><span className="module-completion-track" aria-hidden="true"><span>{record?.progress?.completed&&<CheckIcon/>}</span></span>
  </button>
  <span className="sr-only" role="status">{note.saving?'Saving note':note.error?'Note not saved':note.dirty?'Unsaved note':'Note saved'}</span>
  {note.error&&<p className="module-notes-error" role="alert">Your note hasn’t saved. <button type="button" onClick={()=>{void saver.current?.flush();}}>Retry</button></p>}
  {member.saveError&&!note.error&&<p className="module-notes-error" role="alert">{member.message}</p>}
 </div>;
}

import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {webcrypto} from 'node:crypto';
import {emptyLibrary,validateLibrary,conversationTitle,upgradeConversationTitles,withLibraryView,restoredConversation} from '../src/lib/nicole/library.mjs';
// Exercise the real storage hook with controlled React scheduling and network replies.
// No browser, preview server, provider call, or production account data is used.
const source=readFileSync(new URL('../src/components/nicole/useNicoleLibrary.js',import.meta.url),'utf8').replace(/^import .*;\n/gm,'').replace('export function useNicoleLibrary','function useNicoleLibrary');
const factory=new Function('useState','useRef','useEffect','emptyLibrary','validateLibrary','conversationTitle','upgradeConversationTitles','withLibraryView','restoredConversation','fetch','localStorage','sessionStorage','crypto','setTimeout','clearTimeout','window',source+'\nreturn useNicoleLibrary;');
function harness({initialLibrary=emptyLibrary(),initialRevision=0,sharedCache=new Map()}={}){
 const slots=[],effects=[],timers=new Map(),cache=sharedCache,puts=[];let cursor=0,queued=false,timerId=0,value,remote=initialLibrary,revision=initialRevision;
 let member={status:'ready',userId:'owner'};
 function schedule(){if(!queued){queued=true;queueMicrotask(()=>{queued=false;render();});}}
 function useState(initial){const i=cursor++;if(!(i in slots))slots[i]=typeof initial==='function'?initial():initial;return [slots[i],next=>{slots[i]=typeof next==='function'?next(slots[i]):next;schedule();}];}
 function useRef(initial){const i=cursor++;if(!(i in slots))slots[i]={current:initial};return slots[i];}
 function useEffect(effect,deps){const i=cursor++;const old=slots[i];if(!old||deps.some((d,n)=>!Object.is(d,old.deps[n]))){effects.push(()=>{old?.cleanup?.();slots[i]={deps,cleanup:effect()};});}}
 const storage={getItem:key=>cache.get(key)||null,setItem:(key,v)=>cache.set(key,v),removeItem:key=>cache.delete(key),key:i=>Array.from(cache.keys())[i],get length(){return cache.size;}};
 const fetch=async(url,options={})=>{if(options.method!=='PUT')return Response.json({userId:member.userId,library:remote,revision,profile:{name:'Maya Singh'}});return new Promise(resolve=>puts.push({body:JSON.parse(options.body),resolve:()=>{remote=JSON.parse(options.body).library;revision++;resolve(Response.json({revision}));}}));};
 const hook=factory(useState,useRef,useEffect,emptyLibrary,validateLibrary,conversationTitle,upgradeConversationTitles,withLibraryView,restoredConversation,fetch,storage,storage,webcrypto,(fn)=>{const id=++timerId;timers.set(id,fn);return id;},id=>timers.delete(id),{confirm:()=>true});
 function render(){cursor=0;value=hook(member);const pending=effects.splice(0);pending.forEach(fn=>fn());}
 render();return {get value(){return value;},puts,cache,tick:()=>{const callbacks=Array.from(timers.values());timers.clear();callbacks.forEach(fn=>fn());},member:next=>{member=next;render();},remote:()=>remote,snapshot:()=>({initialLibrary:remote,initialRevision:revision})};
}
const settle=async()=>{for(let n=0;n<15;n++)await new Promise(resolve=>setImmediate(resolve));};
const h=harness();await settle();assert.equal(h.value.state.ready,true);assert.equal(h.value.profile.name,'Maya Singh');
const id='12345678-1234-4123-8123-123456789abc';
h.value.change(old=>({...old,conversations:[{id,title:'Cardio',folderId:null,messages:[{role:'user',content:'First question'}]}]}),id);await settle();h.tick();await settle();assert.equal(h.puts.length,1);assert.equal(h.puts[0].body.revision,0);assert.equal(h.value.state.activeId,id);
h.value.change(old=>({...old,conversations:old.conversations.map(c=>({...c,messages:[...c.messages,{role:'assistant',content:'First answer'}]}))}),id);await settle();h.tick();assert.equal(h.puts.length,1,'A second save waits for the first revision.');
h.puts[0].resolve();await settle();assert.equal(h.puts.length,2);assert.equal(h.puts[1].body.revision,1);assert.equal(h.puts[1].body.library.conversations[0].messages.length,2);
h.puts[1].resolve();await settle();assert.equal(h.value.status,'Saved to your account');assert.equal(h.remote().conversations.length,1);assert.equal(h.value.state.activeId,id);assert.equal(JSON.parse(h.cache.get('nas-nicole-library-v3:owner')).dirty,false);
h.value.select(null);await settle();assert.equal(h.value.state.library.conversations.length,1,'New conversation selection preserves previous history.');
h.value.select(id);h.value.change(old=>({...old,folders:[{id:'22345678-1234-4123-8123-123456789abc',name:'Study'}]}));h.value.setFolderOpen('22345678-1234-4123-8123-123456789abc',true);await settle();h.tick();await settle();assert.equal(h.puts.length,3);
h.member({status:'guest'});await settle();h.puts[2].resolve();await settle();assert.equal(h.value.state.owner,null);assert.deepEqual(h.value.state.library,emptyLibrary());assert.equal(h.value.profile,null);assert.equal(h.cache.size,0,'A late save cannot restore another account’s tab cache.');
console.log('Nicole client lifecycle passed: serialized revision saves, pending-answer updates, selected history, profile loading and sign-out during an in-flight save.');

const returning=harness(h.snapshot());await settle();
assert.equal(returning.value.state.activeId,id,'A new login restores the account’s selected conversation.');
assert.equal(returning.value.state.library.conversations[0].messages.length,2);
assert.equal(returning.value.state.library.folders[0].name,'Study');
assert.deepEqual(returning.value.state.library.view.openFolders,['22345678-1234-4123-8123-123456789abc']);
returning.value.change(old=>({...old,folders:old.folders.map(f=>({...f,name:'Exam prep'}))}));await settle();
const restarted=harness({...returning.snapshot(),sharedCache:returning.cache});await settle();
assert.equal(restarted.value.state.library.folders[0].name,'Exam prep','A browser restart recovers unsaved changes for the verified account.');
assert.equal(restarted.value.state.activeId,id);restarted.tick();await settle();assert.equal(restarted.puts.length,1);restarted.puts[0].resolve();await settle();
assert.equal(restarted.value.status,'Saved to your account');
console.log('Return-login tests passed: cloud history/folders, last selected chat, open folders and durable browser recovery.');

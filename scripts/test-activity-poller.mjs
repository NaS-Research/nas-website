import assert from 'node:assert/strict';
import {startActivityPolling} from '../src/lib/admin/activity-poller.mjs';
const flush=()=>new Promise(resolve=>setImmediate(resolve));
function setup(fetcher){
 const events=()=>{const handlers={};return {handlers,addEventListener(k,fn){handlers[k]=fn;},removeEventListener(k){delete handlers[k];}};};
 const win={...events(),navigator:{onLine:true}},doc={...events(),visibilityState:'visible'},timers=[],states=[],snapshots=[];let cleared=0;
 const stop=startActivityPolling({fetcher,windowTarget:win,documentTarget:doc,schedule:(fn,ms)=>{const t={fn,ms};timers.push(t);return t;},cancel:t=>{if(t)t.cancelled=true;},clock:()=>123,onSnapshot:d=>snapshots.push(d),onState:s=>states.push(s),onAuthLost:()=>cleared++});
 return {win,doc,timers,states,snapshots,stop,cleared:()=>cleared,run(ms){const t=timers.find(t=>t.ms===ms&&!t.cancelled&&!t.ran);assert.ok(t,'expected timer '+ms);t.ran=true;t.fn();}};
}
const data={sources:[]};let resolve,calls=0,lastSignal;
const s=setup((_url,options)=>{calls++;lastSignal=options.signal;return new Promise(r=>resolve=r);});
s.win.handlers.focus();s.doc.handlers.visibilitychange();assert.equal(calls,1,'wake must not overlap a pending request');assert.equal(lastSignal.aborted,false);assert.equal(s.timers.some(t=>t.ms===10000),false,'no ten-second cancellation of slow request');
resolve({ok:true,status:200,json:async()=>data});await flush();assert.equal(s.snapshots.length,1);assert.equal(s.states.at(-1).state,'connected');
s.run(10000);assert.equal(calls,2);s.run(15000);await flush();assert.equal(lastSignal.aborted,true);assert.match(s.states.at(-1).message,/timed out/);
resolve({ok:true,status:200,json:async()=>({sources:['late']})});await flush();assert.equal(s.snapshots.length,1,'late timed-out response ignored');
s.run(10000);resolve({ok:true,status:200,json:async()=>data});await flush();assert.equal(s.snapshots.length,2,'timeout recovers');
s.win.navigator.onLine=false;s.win.handlers.offline();assert.equal(s.states.at(-1).state,'offline');
s.win.navigator.onLine=true;s.win.handlers.online();assert.equal(calls,4);resolve({ok:true,status:200,json:async()=>data});await flush();assert.equal(s.states.at(-1).state,'connected');
s.stop();assert.equal(lastSignal.aborted,true);assert.deepEqual(s.win.handlers,{});assert.deepEqual(s.doc.handlers,{});
for(const status of [401,403]){const s=setup(async()=>({ok:false,status}));await flush();assert.equal(s.cleared(),1);assert.equal(s.states.at(-1).state,'unauthorized');assert.ok(!s.timers.some(t=>t.ms===10000&&!t.cancelled));s.stop();}
const body=setup(async()=>({ok:true,status:200,json:()=>new Promise(()=>{})}));await flush();body.run(15000);await flush();assert.match(body.states.at(-1).message,/timed out/);body.stop();
const cleanup=setup(()=>new Promise(r=>resolve=r));cleanup.stop();resolve({ok:true,status:200,json:async()=>data});await flush();assert.equal(cleanup.snapshots.length,0);
console.log('PASS: single-flight delayed success, bounded fetch/body timeout, discarded late results, offline/online recovery, wake events, auth loss and cleanup');

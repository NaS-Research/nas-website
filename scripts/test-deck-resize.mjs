import test from 'node:test';import assert from 'node:assert/strict';
import {createDeckLayoutGuard} from '../src/lib/anatomy-release-preview/deck-layout.mjs';
const models=['Lymphocyte','RBC','Heart'];
function fixture(selected){let width=1440,index=selected,next=0;const frames=new Map(),centers=[],commits=[];
 const schedule=cb=>{frames.set(++next,cb);return next;};
 const flush=()=>{for(let i=0;frames.size&&i<20;i++){const batch=[...frames];frames.clear();for(const [,cb]of batch)cb();}assert.equal(frames.size,0);};
 const guard=createDeckLayoutGuard({readWidth:()=>width,readSelection:()=>index,recenter:i=>{index=i;centers.push({width,index});},cancelMotion:()=>{},schedule,cancelFrame:id=>frames.delete(id)});
 const staleGeometry=()=>{index=(index+1)%3;commits.push(index);};guard.resize();flush();
 return {guard,frames,flush,centers,commits,staleGeometry,setWidth:w=>width=w,get index(){return index;},navigate:i=>{guard.scroll(()=>{index=i;commits.push(i);});flush();}};
}
for(let selected=0;selected<3;selected++)for(const ordering of ['scroll-first','observer-first'])test(models[selected]+': preserve selection with '+ordering+' resize ordering and navigation afterward',()=>{
 const f=fixture(selected);
 for(const width of [390,1440,390,1440]){
  // Capture an already queued stale callback, even if cancellation comes too late.
  f.guard.scroll(f.staleGeometry);const stale=[...f.frames.values()][0];f.setWidth(width);
  if(ordering==='scroll-first')stale();else{f.guard.resize();stale();}
  f.guard.scroll(f.staleGeometry);f.flush();assert.equal(f.index,selected);assert.equal(f.guard.pending,false);
 }
 assert.deepEqual(f.commits,[]);assert(f.centers.every(c=>c.index===selected));
 f.navigate((selected+1)%3);assert.equal(f.index,(selected+1)%3);f.navigate(selected);assert.equal(f.index,selected);
 f.guard.dispose();f.guard.scroll(f.staleGeometry);f.flush();assert.equal(f.index,selected);
});
test('rapid successive widths keep selection and invalidate old layout callbacks',()=>{const f=fixture(2);f.setWidth(390);f.guard.resize();const old=[...f.frames.values()][0];f.setWidth(1440);f.guard.resize();old();f.flush();assert.equal(f.index,2);assert.equal(f.guard.pending,false);f.navigate(0);assert.equal(f.index,0);});

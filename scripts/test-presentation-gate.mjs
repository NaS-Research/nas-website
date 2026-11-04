import test from "node:test";
import assert from "node:assert/strict";
import {createPresentationGate} from "../src/lib/anatomy-release-preview/presentation-gate.mjs";
const view=(overrides={})=>({frame:1,position:[0,0,3.77],target:[0,0,0],scale:[3.8,3.8,3.8],theta:0,phi:Math.PI/2,distance:3.77,fov:75,...overrides});
function clock(){let time=0,serial=0,calls=0;const tasks=new Map(),frames=new Map();const gate=createPresentationGate({onReady:()=>calls++,now:()=>time,schedule:(fn,delay)=>{tasks.set(++serial,{fn,at:time+delay});return serial;},cancel:id=>tasks.delete(id),requestFrame:fn=>{frames.set(++serial,fn);return serial;},cancelFrame:id=>frames.delete(id)});
 return {gate,step(ms){time+=ms;for(const [id,t]of [...tasks])if(t.at<=time){tasks.delete(id);t.fn();}},paint(){for(const [id,fn]of [...frames]){frames.delete(id);fn();}},get calls(){return calls;},get pending(){return tasks.size+frames.size;}};}
test("parse status or frame counter without a real camera never dismisses poster",()=>{const c=clock();c.gate.observe();c.gate.observe({frame:1});c.step(1000);c.paint();assert.equal(c.calls,0);});
test("initial real view waits through fit duration and a following paint",()=>{const c=clock();c.gate.observe(view());c.step(100);c.paint();assert.equal(c.calls,0);c.step(300);assert.equal(c.calls,0);c.paint();assert.equal(c.calls,1);});
test("continuous rendering of the same view cannot strand the interactive model behind its poster",()=>{const c=clock();for(let i=1;i<=40;i++){c.gate.observe(view({frame:i}));c.step(16);c.paint();}assert.equal(c.calls,1);});
test("real camera motion extends quiet period while unchanged frames do not",()=>{const c=clock();c.gate.observe(view());c.step(350);c.gate.observe(view({theta:.2,position:[.2,0,3.77]}));c.step(50);c.gate.observe(view({frame:30,theta:.2,position:[.2,0,3.77]}));c.paint();assert.equal(c.calls,0);c.step(50);c.paint();assert.equal(c.calls,1);});
test("real view change cancels queued stale readiness",()=>{const c=clock();c.gate.observe(view());c.step(400);c.gate.observe(view({fov:74}));c.paint();assert.equal(c.calls,0);c.step(100);c.paint();assert.equal(c.calls,1);});
test("uninterrupted meaningful motion never claims a settled initial view",()=>{const c=clock();for(let i=0;i<80;i++){c.gate.observe(view({frame:i+1,theta:i*.01}));c.step(16);c.paint();}assert.equal(c.calls,0);c.step(100);c.paint();assert.equal(c.calls,1);});
test("accumulating sub-threshold movement is compared with stable anchor",()=>{const c=clock();c.gate.observe(view());c.step(390);c.gate.observe(view({theta:8e-6}));c.gate.observe(view({theta:16e-6}));c.step(10);c.paint();assert.equal(c.calls,0);c.step(90);c.paint();assert.equal(c.calls,1);});
test("invalid coordinates cannot authorize handoff",()=>{const c=clock();c.gate.observe(view({position:[NaN,0,1]}));c.gate.observe(view({distance:0}));c.step(1000);c.paint();assert.equal(c.calls,0);});
test("dispose cancels timer and queued paint",()=>{for(const queued of [false,true]){const c=clock();c.gate.observe(view());if(queued)c.step(400);c.gate.dispose();c.step(1000);c.paint();assert.equal(c.calls,0);assert.equal(c.pending,0);}});
test("handoff is reported exactly once",()=>{const c=clock();c.gate.observe(view());c.step(500);c.paint();c.gate.observe(view({theta:1}));c.step(500);c.paint();assert.equal(c.calls,1);});

test("actual runtime view callback forwards transforms without render-frame starvation",async()=>{
 const {readFileSync}=await import('node:fs'),{runInNewContext}=await import('node:vm');
 const source=readFileSync(new URL('../src/components/research/anatomy-release-preview/ArticleModelRuntime.jsx',import.meta.url),'utf8');
 const marker='const reportView=useCallback(',start=source.indexOf(marker)+marker.length,end=source.indexOf(',[]);',start);assert(start>=marker.length&&end>start);
 const c=clock(),stage={current:{dataset:{}}},report=runInNewContext('('+source.slice(start,end)+')',{stage,presentation:{current:c.gate}});
 for(let frame=1;frame<=40;frame++){report(view({frame}));c.step(16);c.paint();}
 assert.equal(JSON.parse(stage.current.dataset.viewState).frame,40);assert.equal(c.calls,1);
});

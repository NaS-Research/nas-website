import test from "node:test";
import assert from "node:assert/strict";
import {createPresentationGate} from "../src/lib/anatomy-release-preview/presentation-gate.mjs";
function clock(){let time=0,serial=0,calls=0;const tasks=new Map(),frames=new Map();const gate=createPresentationGate({onReady:()=>calls++,now:()=>time,schedule:(fn,delay)=>{tasks.set(++serial,{fn,at:time+delay});return serial;},cancel:id=>tasks.delete(id),requestFrame:fn=>{frames.set(++serial,fn);return serial;},cancelFrame:id=>frames.delete(id)});
 return {gate,step(ms){time+=ms;for(const [id,t]of [...tasks])if(t.at<=time){tasks.delete(id);t.fn();}},paint(){for(const [id,fn]of [...frames]){frames.delete(id);fn();}},get calls(){return calls;},get pending(){return tasks.size+frames.size;}};}
test("parsed/first-frame status alone never dismisses the poster",()=>{const c=clock();assert.equal(c.calls,0);c.gate.observe();c.step(100);c.paint();assert.equal(c.calls,0);});
test("initial still waits through the initial fit and a real following frame",()=>{const c=clock();c.gate.observe();c.step(400);assert.equal(c.calls,0);c.paint();assert.equal(c.calls,1);});
test("camera updates extend the quiet period",()=>{const c=clock();c.gate.observe();c.step(350);c.gate.observe();c.step(50);c.paint();assert.equal(c.calls,0);c.step(50);c.paint();assert.equal(c.calls,1);});
test("a view update before pending presentation cancels stale readiness",()=>{const c=clock();c.gate.observe();c.step(400);c.gate.observe();c.paint();assert.equal(c.calls,0);c.step(100);c.paint();assert.equal(c.calls,1);});
test("dispose cancels timer and queued presentation",()=>{for(const queued of [false,true]){const c=clock();c.gate.observe();if(queued)c.step(400);c.gate.dispose();c.step(1000);c.paint();assert.equal(c.calls,0);assert.equal(c.pending,0);}});
test("ready is reported exactly once",()=>{const c=clock();c.gate.observe();c.step(500);c.paint();c.gate.observe();c.step(500);c.paint();assert.equal(c.calls,1);});

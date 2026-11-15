import assert from 'node:assert/strict';
import {observeArticleDocks} from '../src/lib/articleDockVisibility.mjs';
class Target{listeners=new Map();addEventListener(name,fn){if(!this.listeners.has(name))this.listeners.set(name,new Set());this.listeners.get(name).add(fn);}removeEventListener(name,fn){this.listeners.get(name)?.delete(fn);}emit(name){for(const fn of this.listeners.get(name)||[])fn();}}
function environment({body=true,intro=false}={}){
 const win=new Target(),doc=new Target(),frames=new Map(),intervals=new Map(),events=[];let top=700,ready=!intro,n=0,resize,disconnected=false;
 const reading={getBoundingClientRect:()=>({top}),closest:()=>({})};doc.querySelector=()=>body?reading:null;
 Object.assign(win,{requestAnimationFrame:fn=>{frames.set(++n,fn);return n;},cancelAnimationFrame:id=>frames.delete(id),setInterval:fn=>{intervals.set(++n,fn);return n;},clearInterval:id=>intervals.delete(id),ResizeObserver:class{constructor(fn){resize=fn;}observe(){}disconnect(){disconnected=true;}}});
 if(intro)win.__nasComputingReveal={isSettled:()=>ready};
 const dispose=observeArticleDocks(win,doc,event=>events.push(event));
 return {win,doc,events,dispose,intervals,frames,top:value=>top=value,ready:()=>ready=true,resize:()=>resize(),flush:()=>{const pending=[...frames.values()];frames.clear();pending.forEach(fn=>fn());},poll:()=>[...intervals.values()].forEach(fn=>fn()),disconnected:()=>disconnected};
}
const page=environment();assert.deepEqual(page.events.at(-1),{article:true,visible:false});
page.top(96);page.win.emit('scroll');page.flush();assert.equal(page.events.at(-1).visible,true);
const count=page.events.length;page.win.emit('scroll');page.flush();assert.equal(page.events.length,count,'Unchanged reading state does not rerender consumers.');
page.top(300);page.win.emit('scroll');page.flush();assert.equal(page.events.at(-1).visible,false);
page.top(-100);page.resize();page.flush();assert.equal(page.events.at(-1).visible,true);
page.dispose();assert.equal(page.disconnected(),true);page.top(500);page.win.emit('scroll');page.flush();assert.equal(page.events.at(-1).visible,true);
const arrival=environment({intro:true});arrival.top(-10);arrival.win.emit('scroll');arrival.flush();assert.equal(arrival.events.at(-1).visible,false,'Entering the article cannot reveal docks during the intro.');
arrival.ready();arrival.poll();assert.equal(arrival.events.at(-1).visible,true);assert.equal(arrival.intervals.size,0);arrival.dispose();
const header=environment({intro:true});header.ready();header.poll();assert.equal(header.events.at(-1).visible,false,'Completing the intro alone does not reveal docks on the title/hero.');header.dispose();
const ordinary=environment({body:false});assert.deepEqual(ordinary.events,[{article:false,visible:true}]);ordinary.dispose();
console.log('Article dock checks passed: title/hero hidden, body entry shown, reverse scroll hidden, intro settlement, ordinary pages and listener cleanup.');

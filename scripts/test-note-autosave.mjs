import assert from 'node:assert/strict';
import {createNoteAutosaver} from '../src/lib/member/noteAutosave.mjs';
function fixture(initialText=''){
 const calls=[],pending=[],timers=new Map();let id=0;
 const writer=createNoteAutosaver({initialText,save:text=>{calls.push(text);return new Promise(resolve=>pending.push(resolve));},setTimer:fn=>{timers.set(++id,fn);return id;},clearTimer:key=>timers.delete(key)});
 return {writer,calls,pending,timers,tick(){for(const [key,fn] of [...timers]){timers.delete(key);fn();}}};
}
const micro=()=>new Promise(resolve=>setImmediate(resolve));
const f=fixture('existing');
f.writer.edit('one');f.writer.edit('latest');assert.equal(f.timers.size,1);f.tick();await micro();assert.deepEqual(f.calls,['latest']);
f.writer.edit('new typing');f.writer.sync('stale response');assert.equal(f.writer.snapshot().text,'new typing');
f.pending.shift()(true);await micro();assert.equal(f.writer.snapshot().dirty,true);f.tick();await micro();assert.deepEqual(f.calls,['latest','new typing']);
f.pending.shift()(false);await micro();assert.equal(f.writer.snapshot().error,true);assert.equal(f.writer.snapshot().text,'new typing');assert.equal(f.timers.size,0,'Failure does not retry endlessly');
const retry=f.writer.flush();await micro();f.pending.shift()(true);assert.equal(await retry,true);assert.equal(f.writer.hasPending(),false);
f.writer.sync('updated on another surface');assert.equal(f.writer.snapshot().text,'updated on another surface');
const close=fixture();close.writer.edit('save on close');const closing=close.writer.flush();await micro();assert.deepEqual(close.calls,['save on close']);close.pending.shift()(true);await closing;assert.equal(close.writer.snapshot().dirty,false);
const leave=fixture();leave.writer.edit('before navigation');leave.tick();await micro();leave.writer.edit('latest before navigation');leave.writer.dispose();leave.pending.shift()(true);await micro();assert.deepEqual(leave.calls,['before navigation','latest before navigation']);leave.pending.shift()(true);await micro();assert.equal(leave.writer.hasPending(),false);
const undo=fixture('original');undo.writer.edit('changed');undo.tick();await micro();undo.writer.edit('original');undo.pending.shift()(true);await micro();undo.tick();await micro();assert.deepEqual(undo.calls,['changed','original']);undo.pending.shift()(true);await micro();assert.equal(undo.writer.snapshot().dirty,false);
console.log('Note autosave passed: debounce, serialized latest edits, failures/retry, close flush, navigation flush, undo, and stale-record protection.');

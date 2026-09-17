import assert from 'node:assert/strict';
import { easePageScroll, pageScrollDuration, scrollPageTo, cancelPageScroll } from '../src/lib/pageScroll.mjs';

class Events {
  listeners = new Map();
  addEventListener(type, fn) { if (!this.listeners.has(type)) this.listeners.set(type, new Set()); this.listeners.get(type).add(fn); }
  removeEventListener(type, fn) { this.listeners.get(type)?.delete(fn); }
  emit(type, data = {}) { for (const fn of [...(this.listeners.get(type) ?? [])]) fn(data); }
}
const motion = Object.assign(new Events(), { matches: false });
const root = { scrollHeight: 6000, dataset: {} };
const win = Object.assign(new Events(), { scrollY: 0, innerHeight: 800, matchMedia: () => motion, scrollTo({top}) { this.scrollY = top; } });
const doc = Object.assign(new Events(), { documentElement: root, hidden: false });
globalThis.window = win;
globalThis.document = doc;
globalThis.getComputedStyle = () => ({ scrollMarginTop: '144px' });
let nextFrame = 0;
const frames = new Map();
globalThis.requestAnimationFrame = fn => { frames.set(++nextFrame, fn); return nextFrame; };
globalThis.cancelAnimationFrame = id => frames.delete(id);
function tick(time) { const current = [...frames.values()]; frames.clear(); current.forEach(fn => fn(time)); }
function targetAt(y) { return Object.assign(new Events(), { isConnected: true, attrs: {}, hasAttribute(key) { return key in this.attrs; }, setAttribute(key, value) { this.attrs[key] = value; }, removeAttribute(key) { delete this.attrs[key]; }, matches: () => false, getBoundingClientRect: () => ({ top: y - win.scrollY }), focus() { this.focused = true; } }); }

assert.equal(easePageScroll(0), 0);
assert.equal(easePageScroll(1), 1);
assert.ok(easePageScroll(.2) < .05, 'Slow start');
assert.ok(easePageScroll(.6) - easePageScroll(.4) > .4, 'Builds speed in the middle');
assert.ok(1 - easePageScroll(.8) < .05, 'Soft landing');
assert.ok(pageScrollDuration(3500) > pageScrollDuration(200));

const target = targetAt(2400);
scrollPageTo(target);
tick(0);
tick(300);
assert.ok(win.scrollY > 0 && win.scrollY < 300, 'Does not jump to the target');
tick(2200);
assert.equal(win.scrollY, 2256, 'Respects destination scroll margin');
assert.equal(target.focused, true);
assert.equal(root.dataset.pageScrolling, undefined);
target.emit('blur');
assert.equal(target.hasAttribute('tabindex'), false);

win.scrollY = 0;
scrollPageTo(target);
tick(0); tick(200);
win.emit('wheel');
const cancelledY = win.scrollY;
tick(3000);
assert.equal(win.scrollY, cancelledY, 'Manual scrolling interrupts motion');
assert.equal(frames.size, 0);

motion.matches = true;
scrollPageTo(target);
assert.equal(win.scrollY, 2256, 'Reduced motion uses immediate positioning');
assert.equal(frames.size, 0);
motion.matches = false;
scrollPageTo(99999);
tick(0); tick(2200);
assert.equal(win.scrollY, 5200, 'Clamps to document end');

scrollPageTo(0);
tick(0); tick(200);
scrollPageTo(target);
tick(200); tick(2400);
assert.equal(win.scrollY, 2256, 'A new destination replaces active motion');
assert.equal(frames.size, 0);
cancelPageScroll();
console.log('Page navigation: easing, offsets, focus, cancellation, reduced motion, clamping, and repeated actions passed.');

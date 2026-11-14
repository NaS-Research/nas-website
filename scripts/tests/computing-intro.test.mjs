import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {installComputingReveal, computingRevealBoot} from '../../src/lib/computingPageReveal.mjs';
import {createIntroLoopController} from '../../src/components/research/computing-milestone/intro-loop-controller.mjs';

const tick = () => new Promise(resolve => setImmediate(resolve));
const environment = {visible: true, hidden: false, reduced: false};
class Target {
  listeners = new Map();
  addEventListener(name, fn) { if (!this.listeners.has(name)) this.listeners.set(name, new Set()); this.listeners.get(name).add(fn); }
  removeEventListener(name, fn) { this.listeners.get(name)?.delete(fn); }
  emit(name, event = {}) { for (const fn of [...(this.listeners.get(name) || [])]) fn(event); }
}
function page({hidden = false, reduced = false, hash = '', pathname = '/research/building-the-next-stage-of-nas-computing'} = {}) {
  const win = new Target(), doc = new Target(), rules = new Map(), timers = new Map(), scrolls = [], frames = new Map();
  let nextTimer = 0, nextFrame = 0, time = 0;
  Object.assign(win, {scrollY: 0, innerHeight: 800, location: {pathname, hash}, matchMedia: () => ({matches: reduced}),
    performance: {now: () => time}, requestAnimationFrame(fn) { frames.set(++nextFrame, fn); return nextFrame; }, cancelAnimationFrame(id) { frames.delete(id); },
    setTimeout(fn) { timers.set(++nextTimer, fn); return nextTimer; }, clearTimeout(id) { timers.delete(id); }, scrollTo(value) { scrolls.push(value); this.scrollY = value.top; }});
  Object.assign(doc, {hidden, head: {appendChild() {}}, createElement() {
    return {sheet: {cssRules: [{style: {setProperty: (key, value) => rules.set(key, value)}}]}, remove() {}};
  }});
  return {win, doc, rules, timers, scrolls, frames, frame(now) { time = now; const callbacks = [...frames.values()]; frames.clear(); callbacks.forEach(fn => fn(now)); }};
}
function media() {
  const video = new Target();
  Object.assign(video, {paused: true, readyState: 4, duration: 4, currentTime: 0, src: 'intro.mp4', frames: new Map(), nextFrame: 0,
    loadCount: 0, pauseCount: 0, getAttribute(name) { return this[name]; }, load() { this.loadCount++; },
    pause() { this.paused = true; this.pauseCount++; }, play() { this.paused = false; return Promise.resolve(); },
    requestVideoFrameCallback(fn) { this.frames.set(++this.nextFrame, fn); return this.nextFrame; },
    cancelVideoFrameCallback(id) { this.frames.delete(id); },
    frame() { const callbacks = [...this.frames.values()]; this.frames.clear(); callbacks.forEach(fn => fn()); }
  });
  return video;
}
function player(intro = media(), hold = media(), options = {}) {
  const layers = [], progress = [];
  const controller = createIntroLoopController({intro, hold, introSrc: 'intro.mp4', loopSrc: 'loop.mp4',
    reveal: layer => layers.push(layer), onArrivalProgress: value => progress.push(value), ...options});
  return {intro, hold, controller, layers, progress};
}

test('pointer, touch, wheel and restored pointer focus do not skip arrival', () => {
  const {win, doc} = page(); const reveal = installComputingReveal(win, doc);
  for (const name of ['pointerdown', 'touchstart', 'wheel']) doc.emit(name);
  doc.emit('focusin', {target: {matches: () => false}});
  doc.emit('keydown', {key: 'Control'});
  assert.deepEqual(reveal.status(), {finished: false, amount: 0, reason: 'arrival-pending'});
  reveal.progress(.7); assert.equal(reveal.status().finished, false);
  reveal.progress(.2); assert.equal(reveal.status().amount, .7);
  reveal.progress(1); assert.equal(reveal.status().reason, 'arrival-complete');
  reveal.dispose();
});
test('intentional keyboard navigation retains immediate access', () => {
  for (const key of ['Tab', 'Escape', 'ArrowDown', 'PageDown', ' ', 'k']) {
    const {win, doc} = page(); const reveal = installComputingReveal(win, doc);
    doc.emit('keydown', {key}); assert.equal(reveal.status().finished, true, key); reveal.dispose();
  }
});
test('each completed and disposed visit gets independent zero progress', () => {
  const {win, doc} = page();
  for (let visit = 0; visit < 5; visit++) {
    const reveal = installComputingReveal(win, doc); assert.equal(reveal.status().amount, 0);
    reveal.progress(1); reveal.dispose(); assert.equal(win.__nasComputingReveal, undefined);
  }
});
test('reduced motion, deep links and unrelated pages remain immediately readable', () => {
  for (const options of [{reduced: true}, {hash: '#sources'}, {pathname: '/research'}]) {
    const {win, doc} = page(options); assert.equal(installComputingReveal(win, doc), null);
  }
});
test('safety waits for visible time and still fails open on stalled media', () => {
  const {win, doc, timers} = page({hidden: true}); const reveal = installComputingReveal(win, doc);
  assert.equal(timers.size, 0); doc.hidden = false; doc.emit('visibilitychange'); assert.equal(timers.size, 1);
  [...timers.values()][0](); assert.equal(reveal.status().reason, 'load-safety'); reveal.dispose();
});
test('boot is self-contained and CSS focus heuristics cannot override the sequence', () => {
  assert.doesNotMatch(computingRevealBoot, /:has\(:focus-visible\)/);
  const {win, doc} = page();
  new Function('window', 'document', computingRevealBoot)(win, doc);
  assert.equal(win.__nasComputingReveal.status().finished, false);
  win.__nasComputingReveal.dispose();
  const css = readFileSync(new URL('../../src/components/research/computing-milestone/computing-page-reveal.css', import.meta.url), 'utf8');
  assert.doesNotMatch(css, /:focus-within|:has\(:focus-visible\)/);
});
test('intro uses decoded progress, retains its frame until loop presents, and pauses offscreen', async () => {
  const p = player(); p.controller.setEnvironment(environment); await tick();
  assert.equal(p.intro.loadCount, 0); assert.equal(p.hold.loadCount, 0);
  p.intro.emit('playing'); p.intro.frame(); assert.equal(p.layers.at(-1), 'intro'); assert.equal(p.hold.loadCount, 1);
  p.intro.currentTime = 2; p.intro.emit('timeupdate'); assert.equal(p.progress.at(-1), .5);
  p.intro.emit('ended'); assert.equal(p.progress.at(-1), 1); assert.equal(p.layers.at(-1), 'intro');
  await tick(); p.hold.frame(); assert.equal(p.layers.at(-1), 'loop');
  p.controller.setEnvironment({...environment, hidden: true}); assert.equal(p.hold.paused, true);
  p.controller.setEnvironment(environment); await tick(); assert.equal(p.hold.paused, false); p.controller.destroy();
});
test('destroyed pre-play microtask cannot pause media reused by the next visit', async () => {
  const intro = media(), hold = media();
  const old = player(intro, hold); old.controller.setEnvironment(environment); old.controller.destroy();
  const fresh = player(intro, hold); fresh.controller.setEnvironment(environment);
  await tick(); assert.equal(intro.paused, false); intro.frame(); assert.equal(fresh.layers.at(-1), 'intro'); fresh.controller.destroy();
});
test('late play resolution from an old visit cannot pause a new arrival', async () => {
  const intro = media(), hold = media(); let settle;
  intro.play = function() { this.paused = false; return new Promise(resolve => { settle = resolve; }); };
  const old = player(intro, hold); old.controller.setEnvironment(environment); await tick(); old.controller.destroy();
  const oldSettle = settle; intro.play = function() { this.paused = false; return Promise.resolve(); };
  const fresh = player(intro, hold); fresh.controller.setEnvironment(environment); await tick();
  oldSettle(); await tick(); assert.equal(intro.paused, false); fresh.controller.destroy();
});
test('autoplay rejection and media failures report safe fallbacks', async () => {
  let blocked = 0, failed = 0; const intro = media(); intro.play = () => Promise.reject(new Error('NotAllowedError'));
  const p = player(intro, media(), {onBlocked: () => blocked++, onFailure: () => failed++});
  p.controller.setEnvironment(environment); await tick(); assert.equal(blocked, 1);
  p.intro.emit('error'); assert.equal(failed, 1); assert.equal(p.layers.at(-1), 'poster'); p.controller.destroy();
});


test('opening centers the hidden natural-layout film, then scrolls to top with a slow fade', () => {
  const {win, doc, rules, scrolls, frame} = page(); const reveal = installComputingReveal(win, doc);
  const visual = {getBoundingClientRect: () => ({top: 720 - win.scrollY, height: 800})};
  reveal.prepare(visual);
  assert.deepEqual(scrolls.at(-1), {top: 720, left: 0, behavior: 'instant'});
  reveal.prepare(visual); // Re-centering after a framework layout commit is idempotent.
  assert.equal(scrolls.at(-1).top, 720);
  reveal.progress(.99);
  assert.equal(scrolls.length, 2); assert.equal(reveal.status().finished, false);
  reveal.progress(1);
  frame(2800);
  assert.deepEqual(scrolls.at(-1), {top: 0, left: 0, behavior: 'instant'});
  assert.match(rules.get('--nas-computing-page-transition'), /^2200ms/);
  assert.equal(rules.get('--nas-computing-page-opacity'), '1');
  assert.equal(rules.get('--nas-computing-stage-transition'), '0s');
  reveal.prepare(visual); assert.equal(scrolls.length, 3); // Never re-center a finished visit.
  reveal.dispose();
});


test('programmatic focus and unrelated script failures do not cancel a playing arrival', () => {
  const {win, doc, scrolls, frame} = page(); const reveal = installComputingReveal(win, doc);
  reveal.prepare({getBoundingClientRect: () => ({top: 720, height: 800})});
  reveal.progress(.2);
  doc.emit('focusin', {target: {matches: () => true}});
  win.emit('error', {message: 'Unrelated widget error'});
  win.emit('error', {target: {tagName: 'SCRIPT'}});
  win.emit('unhandledrejection', {reason: new Error('Unrelated fetch')});
  assert.equal(reveal.status().finished, false);
  reveal.progress(1);
  assert.equal(reveal.status().reason, 'arrival-complete');
  frame(2800);
  assert.deepEqual(scrolls.at(-1), {top: 0, left: 0, behavior: 'instant'});
  reveal.dispose();
});

test('advancing decoded media resets the stalled-loading watchdog', () => {
  const {win, doc, timers, rules} = page(); const reveal = installComputingReveal(win, doc);
  const initial = [...timers.keys()][0];
  const initialCss = rules.get('--nas-computing-page-safety');
  reveal.progress(.1);
  assert.equal(timers.has(initial), false);
  assert.notEqual(rules.get('--nas-computing-page-safety'), initialCss);
  const advancing = [...timers.keys()][0];
  reveal.progress(.2); assert.equal(timers.has(advancing), false);
  [...timers.values()][0](); assert.equal(reveal.status().reason, 'load-safety');
  reveal.dispose();
});

test('an interrupted pending play retries after visibility returns instead of blocking autoplay', async () => {
  const intro = media(); let rejectFirst, calls = 0, blocked = 0;
  intro.play = function() {
    this.paused = false;
    if (++calls === 1) return new Promise((resolve, reject) => { rejectFirst = reject; });
    return Promise.resolve();
  };
  const p = player(intro, media(), {onBlocked: () => blocked++});
  p.controller.setEnvironment(environment); await tick();
  p.controller.setEnvironment({...environment, hidden: true});
  p.controller.setEnvironment(environment);
  rejectFirst(Object.assign(new Error('Playback interrupted by pause'), {name: 'AbortError'}));
  await tick();
  assert.equal(blocked, 0); assert.equal(calls, 2); assert.equal(intro.paused, false);
  p.controller.destroy();
});

test('a resolved interrupted play also resumes after visibility returns', async () => {
  const intro = media(); let resolveFirst, calls = 0;
  intro.play = function() {
    this.paused = false;
    if (++calls === 1) return new Promise(resolve => { resolveFirst = resolve; });
    return Promise.resolve();
  };
  const p = player(intro);
  p.controller.setEnvironment(environment); await tick();
  p.controller.setEnvironment({...environment, hidden: true});
  p.controller.setEnvironment(environment); resolveFirst(); await tick();
  assert.equal(calls, 2); assert.equal(intro.paused, false); p.controller.destroy();
});


test('heading slide takes 2.8 seconds with a symmetric gentle acceleration and deceleration', () => {
  const {win, doc, frame, frames} = page(); const reveal = installComputingReveal(win, doc);
  win.scrollY = 1000;
  reveal.progress(.99); assert.equal(frames.size, 0);
  reveal.progress(1); assert.equal(win.scrollY, 1000);
  const positions = [win.scrollY];
  for (const now of [700, 1400, 2100, 2800]) { frame(now); positions.push(win.scrollY); }
  assert.deepEqual(positions, [1000, 896.484375, 500, 103.515625, 0]);
  assert.equal(frames.size, 0);
  assert.ok(positions[0] - positions[1] < positions[1] - positions[2]);
  assert.ok(positions[2] - positions[3] > positions[3] - positions[4]);
  assert.equal(doc.listeners.get('wheel').size, 0);
  reveal.dispose();
});

test('heading slide relinquishes scrolling on input, hidden page, pagehide and disposal', () => {
  for (const action of ['wheel', 'touchstart', 'pointerdown', 'keydown', 'hidden', 'pagehide', 'reduced-motion', 'dispose']) {
    const {win, doc, frame, frames, scrolls} = page(); const reveal = installComputingReveal(win, doc);
    win.scrollY = 720; reveal.progress(1); frame(700);
    const count = scrolls.length;
    if (action === 'hidden') { doc.hidden = true; doc.emit('visibilitychange'); }
    else if (action === 'pagehide') win.emit('pagehide');
    else if (action === 'dispose') reveal.dispose();
    else if (action === 'reduced-motion') reveal.finish('reduced-motion');
    else doc.emit(action);
    assert.equal(frames.size, 0, action);
    frame(2800); assert.equal(scrolls.length, count, action);
    reveal.dispose();
  }
});


function stagedPage() {
  const env = page();
  const {win, rules} = env;
  win.innerHeight = 757;
  const heading = 714, naturalHeight = 628;
  const height = () => Math.max(naturalHeight, parseFloat(rules.get('--nas-computing-stage-space') ?? '757'));
  const film = {getBoundingClientRect: () => ({height: naturalHeight, top: heading + (height() - naturalHeight) / 2 - win.scrollY})};
  const visual = {firstElementChild: film, getBoundingClientRect: () => ({height: height(), top: heading - win.scrollY})};
  return {...env, film, visual, height};
}

test('film geometry moves one way from the first frame while stage and scroll share the 2.8s ramp', () => {
  const {win, doc, rules, frame, film, visual, height} = stagedPage();
  const reveal = installComputingReveal(win, doc); reveal.prepare(visual);
  const startTop = film.getBoundingClientRect().top;
  assert.equal(startTop, 64.5);
  reveal.progress(1);
  assert.equal(film.getBoundingClientRect().top, startTop);
  let priorTop = startTop, priorScroll = win.scrollY;
  for (let now = 0; now <= 2800; now += 10) {
    frame(now);
    const t = now / 2800, eased = t*t*t*(t*(6*t-15)+10);
    const top = film.getBoundingClientRect().top;
    assert.ok(top >= priorTop - 1e-8, `film reversed at ${now}ms`);
    assert.ok(win.scrollY <= priorScroll + 1e-8, `scroll reversed at ${now}ms`);
    assert.ok(Math.abs(top - (64.5 + (714 - 64.5) * eased)) < 1e-7);
    priorTop = top; priorScroll = win.scrollY;
  }
  assert.equal(win.scrollY, 0); assert.equal(height(), 628);
  assert.equal(rules.get('--nas-computing-stage-space'), '0px');
  assert.equal(rules.get('--nas-computing-page-transition'), '2200ms ease-in-out');
  reveal.dispose();
});

test('interruption clears stage ownership without moving the film; navigation never adjusts scroll', () => {
  for (const action of ['wheel', 'keydown', 'reduced-motion', 'pagehide', 'dispose']) {
    const {win, doc, rules, frame, frames, film, visual, scrolls} = stagedPage();
    const reveal = installComputingReveal(win, doc); reveal.prepare(visual); reveal.progress(1); frame(700);
    const before = film.getBoundingClientRect().top, count = scrolls.length;
    if (action === 'dispose') reveal.dispose();
    else if (action === 'pagehide') win.emit('pagehide');
    else if (action === 'reduced-motion') reveal.finish('reduced-motion');
    else doc.emit(action);
    assert.equal(frames.size, 0);
    assert.equal(rules.get('--nas-computing-stage-space'), '0px');
    if (action === 'pagehide' || action === 'dispose') assert.equal(scrolls.length, count);
    else assert.ok(Math.abs(film.getBoundingClientRect().top - before) < 1e-7, action);
    const stopped = scrolls.length; frame(2800); assert.equal(scrolls.length, stopped);
    reveal.dispose();
  }
});

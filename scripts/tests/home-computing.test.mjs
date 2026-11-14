import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHomeComputingLoop} from '../../src/components/sections/home-computing-loop.mjs';
import {computingHeroFilm} from '../../src/data/computingHeroFilm.mjs';
const tick = () => new Promise(resolve => setImmediate(resolve));
const active = {visible: true, hidden: false, reduced: false};
function media() {
  return {paused: true, src: '', calls: 0, events: new Map(),
    getAttribute(name) { return this[name]; },
    addEventListener(event, fn) { this.events.set(event, fn); }, removeEventListener(event) { this.events.delete(event); },
    pause() { this.paused = true; }, play() { this.paused = false; this.calls++; return Promise.resolve(); }
  };
}
function player(video = media()) {
  let blocked = 0, failed = 0;
  const controller = createHomeComputingLoop({video, src: computingHeroFilm.loopSrc, onBlocked: () => blocked++, onFailure: () => failed++});
  return {video, controller, state: () => ({blocked, failed})};
}
test('feature sits between unchanged hero and institute identity with the requested copy and story link', () => {
  const home = readFileSync(new URL('../../src/app/page.jsx', import.meta.url), 'utf8');
  assert.ok(home.indexOf('<HeroSection />') < home.indexOf('<HomeComputingFeature />'));
  assert.ok(home.indexOf('<HomeComputingFeature />') < home.indexOf('home-research-identity'));
  const feature = readFileSync(new URL('../../src/components/sections/HomeComputingFeature.jsx', import.meta.url), 'utf8');
  for (const text of ['Building the next stage of NaS computing', 'The infrastructure behind what comes next.', 'Read the story', 'href="/research/building-the-next-stage-of-nas-computing"', 'aria-labelledby="home-computing-title"']) assert.ok(feature.includes(text), text);
});
test('poster, no initial video download, reduced-motion fallback and keyboard control are present', () => {
  const film = readFileSync(new URL('../../src/components/sections/HomeComputingFilm.jsx', import.meta.url), 'utf8');
  assert.match(film, /preload="none"/); assert.match(film, /muted loop playsInline/);
  assert.doesNotMatch(film, /introSrc|ComputingHeroFilm|installComputingReveal/);
  assert.match(film, /computingHeroFilm\.poster/); assert.match(film, /aria-controls="home-computing-loop"/);
  const css = readFileSync(new URL('../../src/components/sections/HomeComputingFeature.module.css', import.meta.url), 'utf8');
  assert.match(css, /:focus-visible/); assert.match(css, /prefers-reduced-motion: reduce/);
  assert.doesNotMatch(css, /dashed/);
});
test('only the optimized loop is loaded, and only when visible', async () => {
  const p = player(); p.controller.setEnvironment({...active, visible: false}); await tick();
  assert.equal(p.video.src, ''); assert.equal(p.video.calls, 0);
  p.controller.setEnvironment(active); await tick();
  assert.equal(p.video.src, computingHeroFilm.loopSrc); assert.match(p.video.src, /loop-twinkle-1440p/);
  assert.equal(p.video.paused, false); p.controller.destroy();
});
test('reduced-motion visits never load motion and preference updates pause/resume', async () => {
  const p = player(); p.controller.setEnvironment({...active, reduced: true}); await tick();
  assert.equal(p.video.src, ''); p.controller.setEnvironment(active); await tick();
  assert.equal(p.video.paused, false); p.controller.setEnvironment({...active, reduced: true});
  assert.equal(p.video.paused, true); p.controller.destroy();
});
test('offscreen, hidden, and explicitly paused states stop playback and preserve the pause choice', async () => {
  const p = player(); p.controller.setEnvironment(active); await tick();
  p.controller.setEnvironment({...active, visible: false}); assert.equal(p.video.paused, true);
  p.controller.setEnvironment(active); await tick(); assert.equal(p.video.paused, false);
  p.controller.setEnvironment({...active, hidden: true}); assert.equal(p.video.paused, true);
  p.controller.setEnvironment(active); await tick(); p.controller.setPaused(true);
  p.controller.setEnvironment({...active, hidden: true}); p.controller.setEnvironment(active); await tick();
  assert.equal(p.video.paused, true);
  p.controller.setPaused(false); await tick(); assert.equal(p.video.paused, false); p.controller.destroy();
});
test('autoplay denial offers an explicit retry instead of repeated background attempts', async () => {
  const video = media(); video.play = () => Promise.reject(Object.assign(new Error(), {name: 'NotAllowedError'}));
  const p = player(video); p.controller.setEnvironment(active); await tick(); assert.equal(p.state().blocked, 1);
  p.controller.setEnvironment(active); await tick(); assert.equal(p.state().blocked, 1);
  video.play = function() { this.paused = false; return Promise.resolve(); };
  p.controller.setPaused(false); await tick(); assert.equal(video.paused, false); p.controller.destroy();
});
test('interrupted pending play retries after visibility returns', async () => {
  const video = media(); let reject, calls = 0;
  video.play = function() { this.paused = false; return ++calls === 1 ? new Promise((_, no) => { reject = no; }) : Promise.resolve(); };
  const p = player(video); p.controller.setEnvironment(active); await tick();
  p.controller.setEnvironment({...active, hidden: true}); p.controller.setEnvironment(active);
  reject(Object.assign(new Error(), {name: 'AbortError'})); await tick();
  assert.equal(p.state().blocked, 0); assert.equal(calls, 2); assert.equal(video.paused, false); p.controller.destroy();
});
test('an old disposed playback promise cannot pause a newer visit', async () => {
  const video = media(); let resolve;
  video.play = function() { this.paused = false; return new Promise(yes => { resolve = yes; }); };
  const old = player(video); old.controller.setEnvironment(active); await tick(); old.controller.destroy();
  video.play = function() { this.paused = false; return Promise.resolve(); };
  const current = player(video); current.controller.setEnvironment(active); await tick(); resolve(); await tick();
  assert.equal(video.paused, false); current.controller.destroy();
});
test('errors stop playback and teardown removes listeners', async () => {
  const p = player(); p.controller.setEnvironment(active); await tick(); p.video.events.get('error')();
  assert.equal(p.state().failed, 1); assert.equal(p.video.paused, true);
  p.controller.setEnvironment(active); await tick(); assert.equal(p.video.paused, true);
  p.controller.destroy(); assert.equal(p.video.events.size, 0);
});

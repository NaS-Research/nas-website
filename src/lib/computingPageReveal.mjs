// The only timer is a fail-open safety limit, never the normal reveal clock.
export function installComputingReveal(win, doc) {
  const routes = ['/preview/building-the-next-stage-of-nas-computing','/research/building-the-next-stage-of-nas-computing'];
  if (!routes.includes(win.location.pathname.replace(/\/$/, '')) || win.location.hash) return null;
  if (win.__nasComputingReveal) return win.__nasComputingReveal;
  let style, timer, finished = false, amount = 0, reason = 'arrival-pending';
  const listeners = [];
  try {
    if (win.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;
    style = doc.createElement('style');
    style.id = 'nas-computing-reveal-state';
    style.textContent = ':root{--nas-computing-heading-rows:0fr;--nas-computing-stage-space:100svh;--nas-computing-stage-transition:1400ms cubic-bezier(.22,.61,.36,1);--nas-computing-heading-safety:nas-computing-heading-safety 0s 15s forwards;--nas-computing-stage-safety:nas-computing-stage-safety 0s 15s forwards;--nas-computing-page-opacity:0;--nas-computing-page-transition:0s;--nas-computing-page-safety:nas-computing-reveal-safety 0s 15s forwards}body{background:#000}.nas-navbar,.personal-tools,.nas-skip-link{opacity:var(--nas-computing-page-opacity,1);transition:opacity var(--nas-computing-page-transition,900ms cubic-bezier(.22,.61,.36,1));animation:var(--nas-computing-page-safety,none)}:root:has(:focus-visible){--nas-computing-page-opacity:1!important;--nas-computing-page-transition:0s!important;--nas-computing-heading-rows:1fr!important;--nas-computing-stage-space:0px!important;--nas-computing-stage-transition:0s!important}@keyframes nas-computing-reveal-safety{to{opacity:1}}';
    doc.head.appendChild(style);
    const rule = style.sheet?.cssRules[0]?.style;
    if (!rule) { style.remove(); return null; }
    function listen(target, event, fn) { target.addEventListener(event, fn, true); listeners.push([target,event,fn]); }
    function removeListeners() { for (const [target,event,fn] of listeners) target.removeEventListener(event,fn,true); listeners.length = 0; }
    function finish(why = 'access', immediate = true) {
      if (finished) return;
      finished = true; amount = 1; reason = why;
      if (!immediate) rule.setProperty('--nas-computing-page-transition', '900ms cubic-bezier(.22,.61,.36,1)');
      if (immediate) {
        rule.setProperty('--nas-computing-page-transition', '0s');
        rule.setProperty('--nas-computing-stage-transition', '0s');
      }
      rule.setProperty('--nas-computing-heading-rows', '1fr');
      rule.setProperty('--nas-computing-stage-space', '0px');
      rule.setProperty('--nas-computing-heading-safety', 'none');
      rule.setProperty('--nas-computing-stage-safety', 'none');
      rule.setProperty('--nas-computing-page-opacity', '1');
      rule.setProperty('--nas-computing-page-safety', 'none');
      rule.setProperty('--nas-computing-static-poster', '1');
      if (why === 'arrival-complete' && !immediate) win.scrollTo({top:0,left:0,behavior:'smooth'});
      win.clearTimeout(timer); removeListeners();
    }
    const api = {
      progress(value) {
        if (finished || !Number.isFinite(value)) return;
        // Monotonic media-time progress; loops and resumed playback never reset it.
        const t = Math.max(amount, Math.min(1, Math.max(0, value)));
        amount = t; reason = 'arrival-playing';
        // Decoded media time determines completion. Never reveal on a wall-clock
        // estimate or while the Mac is still arriving.
        if (t === 1) finish('arrival-complete', false);
      },
      finish,
      status() { return {finished, amount, reason}; },
      dispose() { finish('navigation'); style.remove(); if (win.__nasComputingReveal === api) delete win.__nasComputingReveal; }
    };
    win.__nasComputingReveal = api;
    // Pointer focus, trackpad inertia and the click that opened this route are
    // not requests to skip the arrival. Keep an intentional keyboard escape.
    listen(doc,'keydown',event=>{
      if (['Tab','Escape','ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' ','k','K'].includes(event.key)) finish('interaction');
    });
    // History and framework restoration can focus a mouse-clicked nav link.
    // Only intentional keyboard focus should skip the arrival.
    listen(doc,'focusin',event=>{ if (event.target?.matches?.(':focus-visible')) finish('interaction'); });
    // A background visit waits for visibility; keep the same visible-time safety limit.
    function armSafety() {
      win.clearTimeout(timer);
      if (finished) return;
      rule.setProperty('--nas-computing-heading-safety', doc.hidden ? 'none' : 'nas-computing-heading-safety 0s 15s forwards');
      rule.setProperty('--nas-computing-stage-safety', doc.hidden ? 'none' : 'nas-computing-stage-safety 0s 15s forwards');
      rule.setProperty('--nas-computing-page-safety', doc.hidden ? 'none' : 'nas-computing-reveal-safety 0s 15s forwards');
      if (!doc.hidden) timer = win.setTimeout(()=>finish('load-safety'),15000);
    }
    listen(doc,'visibilitychange',armSafety);
    listen(win,'error',event=>{ if (event.message || event.target?.tagName === 'SCRIPT') finish('script-failure'); });
    listen(win,'unhandledrejection',()=>finish('script-failure'));
    listen(win,'pagehide',()=>finish('navigation'));
    armSafety();
    return api;
  } catch {
    style?.remove(); win.clearTimeout(timer);
    for (const [target,event,fn] of listeners) target.removeEventListener(event,fn,true);
    return null;
  }
}
// Executed in the root head before content can paint. No DOM attributes are
// changed on React-managed html/body elements, avoiding hydration divergence.
export const computingRevealBoot = '(' + installComputingReveal.toString() + ')(window,document);';

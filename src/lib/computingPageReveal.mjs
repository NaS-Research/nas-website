// The only timer is a fail-open safety limit, never the normal reveal clock.
export function installComputingReveal(win, doc) {
  const route = '/preview/building-the-next-stage-of-nas-computing';
  if (win.location.pathname.replace(/\/$/, '') !== route || doc.hidden) return null;
  if (win.__nasComputingReveal) return win.__nasComputingReveal;
  let style, timer, finished = false, amount = 0, reason = 'arrival-pending';
  const listeners = [];
  try {
    if (win.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;
    style = doc.createElement('style');
    style.id = 'nas-computing-reveal-state';
    style.textContent = ':root{--nas-computing-heading-rows:0fr;--nas-computing-stage-space:100svh;--nas-computing-stage-transition:1400ms cubic-bezier(.22,.61,.36,1);--nas-computing-heading-safety:nas-computing-heading-safety 0s 6s forwards;--nas-computing-stage-safety:nas-computing-stage-safety 0s 6s forwards;--nas-computing-page-opacity:0;--nas-computing-page-transition:180ms linear;--nas-computing-page-safety:nas-computing-reveal-safety 0s 6s forwards}body{background:#000}.nas-navbar,.personal-tools,.nas-skip-link{opacity:var(--nas-computing-page-opacity,1);transition:opacity var(--nas-computing-page-transition,180ms linear);animation:var(--nas-computing-page-safety,none)}:root:focus-within{--nas-computing-page-opacity:1!important;--nas-computing-page-transition:0s!important;--nas-computing-heading-rows:1fr!important;--nas-computing-stage-space:0px!important;--nas-computing-stage-transition:0s!important}@keyframes nas-computing-reveal-safety{to{opacity:1}}';
    doc.head.appendChild(style);
    const rule = style.sheet?.cssRules[0]?.style;
    if (!rule) { style.remove(); return null; }
    function listen(target, event, fn) { target.addEventListener(event, fn, true); listeners.push([target,event,fn]); }
    function removeListeners() { for (const [target,event,fn] of listeners) target.removeEventListener(event,fn,true); listeners.length = 0; }
    function finish(why = 'access', immediate = true) {
      if (finished) return;
      finished = true; amount = 1; reason = why;
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
      win.clearTimeout(timer); removeListeners();
    }
    const api = {
      progress(value) {
        if (finished || !Number.isFinite(value)) return;
        // Monotonic media-time progress; loops and resumed playback never reset it.
        const t = Math.max(amount, Math.min(1, Math.max(0, value)));
        amount = t; reason = 'arrival-playing';
        // The Mac arrives first; the final 35% of the real arrival opens
        // the heading above it and eases the page into its reading layout.
        if (t >= .65) {
          rule.setProperty('--nas-computing-heading-rows', '1fr');
          rule.setProperty('--nas-computing-stage-space', '0px');
        }
        const reveal = Math.max(0, Math.min(1, (t - .65) / .35));
        rule.setProperty('--nas-computing-page-opacity', String(reveal * reveal * (3 - 2 * reveal)));
        if (t === 1) finish('arrival-complete', false);
      },
      finish,
      status() { return {finished, amount, reason}; },
      dispose() { finish('navigation'); style.remove(); delete win.__nasComputingReveal; }
    };
    win.__nasComputingReveal = api;
    for (const event of ['keydown','focusin','pointerdown','touchstart','wheel']) listen(doc,event,()=>finish('interaction'));
    listen(doc,'visibilitychange',()=>{ if (doc.hidden) finish('background'); });
    listen(win,'error',event=>{ if (event.message || event.target?.tagName === 'SCRIPT') finish('script-failure'); });
    listen(win,'unhandledrejection',()=>finish('script-failure'));
    listen(win,'pagehide',()=>finish('navigation'));
    timer = win.setTimeout(()=>finish('load-safety'),6000);
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

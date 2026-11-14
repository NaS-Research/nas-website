// Media progress starts the reveal; timers only provide fail-open protection.
export function installComputingReveal(win, doc) {
  const routes = ['/preview/building-the-next-stage-of-nas-computing','/research/building-the-next-stage-of-nas-computing'];
  if (!routes.includes(win.location.pathname.replace(/\/$/, '')) || win.location.hash) return null;
  if (win.__nasComputingReveal) return win.__nasComputingReveal;
  let style, timer, safetyCycle = false, finished = false, amount = 0, reason = 'arrival-pending';
  const listeners = [];
  let scrollFrame;
  const scrollListeners = [];
  function stopScroll() {
    if (scrollFrame !== undefined) win.cancelAnimationFrame(scrollFrame);
    scrollFrame = undefined;
    for (const [target, event, fn] of scrollListeners) target.removeEventListener(event, fn, true);
    scrollListeners.length = 0;
  }
  function scrollToHeading() {
    stopScroll();
    const startY = win.scrollY, started = win.performance.now(), duration = 2800;
    if (startY <= 0) return;
    // Native smooth scrolling has a browser-selected (usually short) duration.
    // Smootherstep gives this slide a gentle ramp, with zero velocity and
    // acceleration at both ends, consistently across browsers.
    function frame(now) {
      const t = Math.min(1, Math.max(0, (now - started) / duration));
      const eased = t * t * t * (t * (t * 6 - 15) + 10);
      win.scrollTo({top: startY * (1 - eased), left: 0, behavior: 'instant'});
      if (t < 1) scrollFrame = win.requestAnimationFrame(frame);
      else stopScroll();
    }
    function on(target, event, fn = stopScroll) {
      target.addEventListener(event, fn, {capture: true, passive: true});
      scrollListeners.push([target, event, fn]);
    }
    // Never compete with navigation, focus access, or an intentional gesture.
    for (const event of ['wheel', 'touchstart', 'pointerdown', 'keydown']) on(doc, event);
    on(win, 'pagehide');
    on(doc, 'visibilitychange', () => { if (doc.hidden) stopScroll(); });
    scrollFrame = win.requestAnimationFrame(frame);
  }
  try {
    if (win.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;
    style = doc.createElement('style');
    style.id = 'nas-computing-reveal-state';
    style.textContent = ':root{--nas-computing-heading-rows:1fr;--nas-computing-stage-space:100svh;--nas-computing-stage-transition:0s;--nas-computing-heading-safety:nas-computing-heading-safety 0s 15s forwards;--nas-computing-stage-safety:nas-computing-stage-safety 0s 15s forwards;--nas-computing-page-opacity:0;--nas-computing-page-transition:0s;--nas-computing-page-safety:nas-computing-reveal-safety 0s 15s forwards}body{background:#000}.nas-navbar,.personal-tools,.nas-skip-link{opacity:var(--nas-computing-page-opacity,1);transition:opacity var(--nas-computing-page-transition,900ms cubic-bezier(.22,.61,.36,1));animation:var(--nas-computing-page-safety,none)}@keyframes nas-computing-reveal-safety{to{opacity:1}}@keyframes nas-computing-reveal-safety-active{to{opacity:1}}';
    doc.head.appendChild(style);
    const rule = style.sheet?.cssRules[0]?.style;
    if (!rule) { style.remove(); return null; }
    function listen(target, event, fn) { target.addEventListener(event, fn, true); listeners.push([target,event,fn]); }
    function removeListeners() { for (const [target,event,fn] of listeners) target.removeEventListener(event,fn,true); listeners.length = 0; }
    function finish(why = 'access', immediate = true) {
      // An accessibility update can arrive after the reveal has started.
      if (immediate) stopScroll();
      if (finished) return;
      finished = true; amount = 1; reason = why;
      if (!immediate) {
        rule.setProperty('--nas-computing-page-transition', '2200ms ease-in-out');
        rule.setProperty('--nas-computing-stage-transition', '1600ms cubic-bezier(.22,.61,.36,1)');
      }
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
      if (why === 'arrival-complete' && !immediate) scrollToHeading();
    }
    const api = {
      prepare(visual) {
        if (finished || !visual) return;
        // Keep the real heading in document flow, hidden above the viewport.
        // Center the film first, so completion can genuinely scroll UP to the
        // article's top instead of expanding a collapsed heading underneath it.
        const rect = visual.getBoundingClientRect();
        const top = Math.max(0, win.scrollY + rect.top + (rect.height - win.innerHeight) / 2);
        win.scrollTo({top, left: 0, behavior: 'instant'});
      },
      progress(value) {
        if (finished || !Number.isFinite(value)) return;
        // Monotonic media-time progress; loops and resumed playback never reset it.
        const t = Math.max(amount, Math.min(1, Math.max(0, value)));
        // The safety limit measures a stalled loader/player, not total time
        // since navigation. A slow download must not consume the arrival's time.
        if (t > amount || reason === 'arrival-pending') armSafety();
        amount = t; reason = 'arrival-playing';
        // Decoded media time determines completion. Never reveal on a wall-clock
        // estimate or while the Mac is still arriving.
        if (t === 1) finish('arrival-complete', false);
      },
      finish,
      status() { return {finished, amount, reason}; },
      dispose() { stopScroll(); finish('navigation'); style.remove(); if (win.__nasComputingReveal === api) delete win.__nasComputingReveal; }
    };
    win.__nasComputingReveal = api;
    // Pointer focus, trackpad inertia and the click that opened this route are
    // not requests to skip the arrival. Keep an intentional keyboard escape.
    listen(doc,'keydown',event=>{
      if (['Tab','Escape','ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' ','k','K'].includes(event.key)) finish('interaction');
    });
    // Focus-visible is a browser heuristic, not proof of user intent. Safari
    // can indicate programmatic/restored focus too. Keyboard access is handled
    // by the actual keydown above; a focus event must not cancel this sequence.
    // A background visit waits for visibility; keep the same visible-time safety limit.
    function armSafety() {
      win.clearTimeout(timer);
      if (finished) return;
      // Alternating equivalent names restarts the independent CSS watchdog as
      // well as JS, retaining fail-open protection if JS subsequently stops.
      safetyCycle = !safetyCycle;
      const suffix = safetyCycle ? '-active' : '';
      rule.setProperty('--nas-computing-heading-safety', doc.hidden ? 'none' : `nas-computing-heading-safety${suffix} 0s 15s forwards`);
      rule.setProperty('--nas-computing-stage-safety', doc.hidden ? 'none' : `nas-computing-stage-safety${suffix} 0s 15s forwards`);
      rule.setProperty('--nas-computing-page-safety', doc.hidden ? 'none' : `nas-computing-reveal-safety${suffix} 0s 15s forwards`);
      if (!doc.hidden) timer = win.setTimeout(()=>finish('load-safety'),15000);
    }
    listen(doc,'visibilitychange',armSafety);
    // Unrelated widgets/extensions can fail while this media remains healthy.
    // Media errors have their own scoped fallback; the watchdog covers an
    // actual startup failure without treating every global error as a skip.
    listen(win,'pagehide',()=>finish('navigation'));
    armSafety();
    return api;
  } catch {
    stopScroll(); style?.remove(); win.clearTimeout(timer);
    for (const [target,event,fn] of listeners) target.removeEventListener(event,fn,true);
    return null;
  }
}
// Executed in the root head before content can paint. No DOM attributes are
// changed on React-managed html/body elements, avoiding hydration divergence.
export const computingRevealBoot = '(' + installComputingReveal.toString() + ')(window,document);';

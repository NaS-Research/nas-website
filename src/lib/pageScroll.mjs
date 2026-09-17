// Shared, interruptible motion for explicit page-navigation actions.
export const easePageScroll = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
export const pageScrollDuration = (distance) => Math.min(1900, Math.max(850, 750 + Math.sqrt(Math.abs(distance)) * 18));
let cancelActive = null;

export function cancelPageScroll() {
  cancelActive?.();
}

export function scrollPageTo(target, { focus = true } = {}) {
  if (typeof window === "undefined" || target == null) return;
  cancelPageScroll();
  const element = typeof target === "number" ? null : target;
  if (element && !element.isConnected) return;
  const root = document.documentElement;
  const start = window.scrollY;
  const destination = () => {
    const offset = element ? Math.max(80, parseFloat(getComputedStyle(element).scrollMarginTop) || 0) : 0;
    const y = element ? element.getBoundingClientRect().top + window.scrollY - offset : target;
    return Math.max(0, Math.min(y, root.scrollHeight - window.innerHeight));
  };
  const finishFocus = () => {
    if (!element || !focus || !element.isConnected) return;
    const temporary = !element.hasAttribute("tabindex") && !element.matches("a[href],button,input,select,textarea");
    if (temporary) element.setAttribute("tabindex", "-1");
    element.focus({ preventScroll: true });
    if (temporary) element.addEventListener("blur", () => element.removeAttribute("tabindex"), { once: true });
  };
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (motion.matches || Math.abs(destination() - start) < 2) {
    window.scrollTo({ top: destination(), behavior: "instant" });
    finishFocus();
    return;
  }
  let frame;
  let started;
  const duration = pageScrollDuration(destination() - start);
  const keys = new Set(["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " ", "Escape", "Tab"]);
  const onKey = (event) => { if (keys.has(event.key)) cancel(); };
  const onMotion = () => { if (motion.matches) { cancel(); window.scrollTo({ top: destination(), behavior: "instant" }); finishFocus(); } };
  const onVisibility = () => { if (document.hidden) cancel(); };
  const cancel = () => {
    cancelAnimationFrame(frame);
    delete root.dataset.pageScrolling;
    window.removeEventListener("wheel", cancel);
    window.removeEventListener("touchstart", cancel);
    window.removeEventListener("pointerdown", cancel);
    window.removeEventListener("keydown", onKey);
    document.removeEventListener("visibilitychange", onVisibility);
    motion.removeEventListener("change", onMotion);
    if (cancelActive === cancel) cancelActive = null;
  };
  cancelActive = cancel;
  root.dataset.pageScrolling = "true";
  window.addEventListener("wheel", cancel, { passive: true });
  window.addEventListener("touchstart", cancel, { passive: true });
  window.addEventListener("pointerdown", cancel, { passive: true });
  window.addEventListener("keydown", onKey);
  document.addEventListener("visibilitychange", onVisibility);
  motion.addEventListener("change", onMotion);
  const tick = (now) => {
    if (element && !element.isConnected) { cancel(); return; }
    started ??= now;
    const progress = Math.min((now - started) / duration, 1);
    window.scrollTo({ top: start + (destination() - start) * easePageScroll(progress), behavior: "instant" });
    if (progress < 1) frame = requestAnimationFrame(tick);
    else { cancel(); finishFocus(); }
  };
  frame = requestAnimationFrame(tick);
}

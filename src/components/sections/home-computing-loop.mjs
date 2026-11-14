// A decorative loop owns no navigation, page reveal, or arrival choreography.
export function createHomeComputingLoop({video, src, onBlocked = () => {}, onFailure = () => {}}) {
  let visible = false, hidden = false, reduced = false, paused = false;
  let destroyed = false, blocked = false, failed = false, pending = false, epoch = 0;
  const eligible = () => visible && !hidden && !reduced && !paused && !blocked && !failed;
  function update() {
    if (destroyed) return;
    if (!eligible()) { epoch++; video.pause(); return; }
    if (pending || !video.paused) return;
    if (!video.getAttribute('src')) video.src = src;
    const attempt = epoch;
    pending = true;
    Promise.resolve().then(() => {
      if (destroyed || !eligible()) return;
      return video.play();
    }).then(() => {
      pending = false;
      if (destroyed) return;
      if (!eligible()) video.pause();
      else if (attempt !== epoch) update();
    }).catch(error => {
      pending = false;
      if (destroyed || !eligible()) return;
      if (error?.name === 'AbortError' && attempt !== epoch) { update(); return; }
      blocked = true; onBlocked();
    });
  }
  const error = () => { if (!destroyed) { failed = true; video.pause(); onFailure(); } };
  video.addEventListener('error', error);
  return {
    setEnvironment(next) { ({visible, hidden, reduced} = next); update(); },
    setPaused(value) { paused = value; if (!value) blocked = false; update(); },
    destroy() { destroyed = true; epoch++; video.removeEventListener('error', error); video.pause(); }
  };
}

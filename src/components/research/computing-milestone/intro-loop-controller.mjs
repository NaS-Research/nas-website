// A two-layer handoff retains the intro's final frame until the hold presents.
export function createIntroLoopController({intro, hold, introSrc, loopSrc, reveal, onBlocked = () => {}, onFailure = () => {}, onArrivalProgress = () => {}}) {
  let introPresented = false;
  let phase = 'intro', visible = false, hidden = true, reduced = true;
  let paused = false, blocked = false, failed = false, destroyed = false, loaded = false;
  let pendingFrame = null, frameVideo = null, frameKind = null, holdLoaded = false;
  const inFlight = new Set();
  const eligible = () => !destroyed && visible && !hidden && !reduced && !paused && !blocked && !failed;
  const active = () => phase === 'intro' ? intro : hold;
  function cancelFrame() {
    if (pendingFrame !== null) {
      if (frameKind === 'video') frameVideo.cancelVideoFrameCallback(pendingFrame);
      else cancelAnimationFrame(pendingFrame);
    }
    pendingFrame = null; frameVideo = null; frameKind = null;
  }
  function present(video) {
    if (!eligible() || video !== active() || video.paused || video.readyState < 2) return;
    cancelFrame(); frameVideo = video;
    const show = () => {
      pendingFrame = null; frameVideo = null; frameKind = null;
      if (!eligible() || video !== active() || video.paused) return;
      reveal(video === intro ? 'intro' : 'loop');
      if (video === intro) { introPresented = true; reportArrival(); }
      if (video === hold) phase = 'loop';
    };
    if (typeof video.requestVideoFrameCallback === 'function') {
      frameKind = 'video'; pendingFrame = video.requestVideoFrameCallback(show);
    } else {
      // Older browsers: wait for playing + ready decoded data and a paint turn.
      frameKind = 'animation'; pendingFrame = requestAnimationFrame(() => {
        pendingFrame = requestAnimationFrame(show);
      });
    }
  }
  function play(video) {
    if (!eligible() || inFlight.has(video)) return;
    if (!video.paused) { present(video); return; }
    inFlight.add(video);
    Promise.resolve().then(() => eligible() ? video.play() : undefined).then(() => {
      inFlight.delete(video);
      // React can reuse these DOM nodes for a newer visit before this promise
      // settles. An obsolete controller must never pause the new playback.
      if (destroyed) return;
      if (!eligible()) { video.pause(); return; }
      present(video);
    }).catch(error => {
      inFlight.delete(video);
      if (!eligible()) return;
      blocked = true; intro.pause(); hold.pause(); cancelFrame(); onBlocked();
    });
  }
  function update() {
    if (!eligible()) {
      intro.pause(); hold.pause(); cancelFrame();
      if (reduced || failed) reveal('poster');
      return;
    }
    if (!loaded) {
      loaded = true;
      // The server supplies the intro source so loading starts before hydration.
      // Do not reset its in-flight download. The hold starts after playback begins.
      if (intro.getAttribute('src') !== introSrc) { intro.src = introSrc; intro.load(); }
    }
    play(active());
  }
  function reportArrival() {
    if (!destroyed && introPresented && Number.isFinite(intro.duration) && intro.duration > 0) onArrivalProgress(Math.min(1, intro.currentTime / intro.duration));
  }
  const onIntroPlaying = () => {
    // Give the first decoded arrival frame priority over the large loop download.
    if (!holdLoaded && eligible()) { holdLoaded = true; hold.src = loopSrc; hold.load(); }
    present(intro);
  };
  const onHoldPlaying = () => present(hold);
  const onHoldReady = () => { if (phase !== 'intro') update(); };
  const onIntroEnd = () => {
    if (destroyed || phase !== 'intro') return;
    onArrivalProgress(1); cancelFrame(); phase = 'handoff'; update();
  };
  const onError = () => {
    if (destroyed) return;
    failed = true; update(); onFailure();
  };
  const listeners = [[intro,'timeupdate',reportArrival],[intro,'playing',onIntroPlaying],[hold,'playing',onHoldPlaying],
    [hold,'canplay',onHoldReady],[intro,'ended',onIntroEnd],[intro,'error',onError],[hold,'error',onError]];
  intro.muted = hold.muted = true;
  intro.defaultMuted = hold.defaultMuted = true;
  intro.loop = false; hold.loop = true;
  for (const [video,event,fn] of listeners) video.addEventListener(event,fn);
  return {
    setEnvironment(value) { if (destroyed) return; ({visible,hidden,reduced} = value); update(); },
    setPaused(value) { if (destroyed) return; paused = value; if (!value) blocked = false; update(); },
    destroy() {
      destroyed = true; cancelFrame();
      for (const [video,event,fn] of listeners) video.removeEventListener(event,fn);
      intro.pause(); hold.pause();
    }
  };
}

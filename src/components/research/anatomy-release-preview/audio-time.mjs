export function clampAudioTime(value, duration) {
  if (!Number.isFinite(value) || !Number.isFinite(duration) || duration <= 0) return 0;
  return Math.min(duration, Math.max(0, value));
}

export function formatAudioTime(value) {
  const seconds = Number.isFinite(value) && value > 0 ? Math.floor(value) : 0;
  return Math.floor(seconds / 60) + ':' + String(seconds % 60).padStart(2, '0');
}

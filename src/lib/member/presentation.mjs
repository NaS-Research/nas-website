export function memberName(user) {
  const metadata = user?.user_metadata || {};
  for (const value of [metadata.full_name, metadata.name, metadata.given_name]) {
    if (typeof value !== 'string') continue;
    const name = value.replace(/[\u0000-\u001f\u007f]/g, '').trim().replace(/\s+/g, ' ');
    if (name && !name.includes('@')) return Array.from(name).slice(0, 100).join('');
  }
  return '';
}
export const resumePath = row => `${row.path}${row.progress?.lastSection ? '#' + encodeURIComponent(row.progress.lastSection) : ''}`;
export const hasActivity = row => Boolean(row.progress?.lastSection || row.progress?.completed || Object.keys(row.practices || {}).length);
export function workspaceLists(items) {
  const history = items.filter(hasActivity);
  return {history, continued: history.filter(row => !row.progress?.completed), saved: items.filter(row => row.saved),
    notes: items.flatMap(row => Object.entries(row.notes || {}).filter(([, text]) => text.trim()).map(([section, text]) => ({...row, section, text})))};
}

import { parseYoutubeFeed } from './youtubeFeed.mjs';

export const learningChannelId = 'UCayPiGDDH9euWzwkb9tA6ug';
// Verified public subject playlists, not uploads, language, or series collections.
// Specific Pharmacology takes precedence over the broader fundamentals playlist.
export const subjectPlaylists = [
  { id: 'PLXbt4CC9ZiBg', title: 'Pharmacology' },
  { id: 'PLMBgDyxRzUag', title: 'Life Sciences Fundamentals' },
];
export const regularVideoURL = `https://www.youtube.com/channel/${learningChannelId}/videos?hl=en`;
// Positive public Shorts-tab evidence captured 2026-11-02; format exclusions win conflicts.
const confirmedShortIds = new Set(['XqL4TRA2-2E', 'pWjVY76IA5I']);
export const excludedShort = video => Boolean(video && (video.format === 'short' || confirmedShortIds.has(video.id) || /#shorts\b/i.test(video.title || '')));
const validId = id => typeof id === 'string' && /^[\w-]{11}$/.test(id);
const text = value => value?.simpleText || value?.content || value?.runs?.map(run => run.text).join('') || '';

export function youtubePageData(html) {
  if (typeof html !== 'string' || html.length > 8 * 1024 * 1024) throw new Error('Invalid YouTube page size');
  const marker = /(?:var\s+ytInitialData\s*=\s*|window\["ytInitialData"\]\s*=\s*)(\{)/.exec(html);
  if (!marker) throw new Error('YouTube browse data unavailable');
  const start = marker.index + marker[0].length - 1;
  let depth = 0, quoted = false, escaped = false;
  for (let i = start; i < html.length; i++) {
    const char = html[i];
    if (quoted) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === '"') quoted = false;
    } else if (char === '"') quoted = true;
    else if (char === '{') depth++;
    else if (char === '}' && --depth === 0) return JSON.parse(html.slice(start, i + 1));
  }
  throw new Error('Truncated YouTube browse data');
}
const selectedTab = data => data?.contents?.twoColumnBrowseResultsRenderer?.tabs?.find(item => item.tabRenderer?.selected)?.tabRenderer;
function videoFromContent(content) {
  const item = content?.videoRenderer;
  const lockup = content?.lockupViewModel;
  const command = item?.navigationEndpoint || lockup?.rendererContext?.commandContext?.onTap?.innertubeCommand;
  const id = item?.videoId || lockup?.contentId;
  const title = text(item?.title || lockup?.metadata?.lockupMetadataViewModel?.title);
  const url = command?.commandMetadata?.webCommandMetadata?.url;
  if (!validId(id) || !title || (lockup && lockup.contentType !== 'LOCKUP_CONTENT_TYPE_VIDEO')) return null;
  if (command?.watchEndpoint?.videoId !== id || typeof url !== 'string' || !url.startsWith('/watch?')) return null;
  return excludedShort({id,title}) ? null : { id, title };
}
export function parseRegularVideoPage(html, channelId = learningChannelId) {
  const data = youtubePageData(html);
  if (data?.metadata?.channelMetadataRenderer?.externalId !== channelId) throw new Error('Unexpected YouTube channel');
  const tab = selectedTab(data);
  const url = tab?.endpoint?.commandMetadata?.webCommandMetadata?.url;
  const grid = tab?.content?.richGridRenderer?.contents;
  if (!url?.split('?')[0].endsWith('/videos') || !Array.isArray(grid)) throw new Error('Regular Videos tab unavailable');
  const seen = new Set();
  // Only the selected Videos grid. Never traverse Home recommendations, Shorts shelves,
  // reelItemRenderer/shortsLockupViewModel, or menu/watch-later commands.
  return grid.flatMap(row => {
    const video = videoFromContent(row.richItemRenderer?.content);
    if (!video || seen.has(video.id)) return [];
    seen.add(video.id);
    return [video];
  });
}
export function parseSubjectPlaylist(html, playlist) {
  const data = youtubePageData(html);
  const canonical = data?.microformat?.microformatDataRenderer?.urlCanonical;
  if (!canonical || new URL(canonical).searchParams.get('list') !== playlist.id) throw new Error('Unexpected playlist');
  const title = data?.metadata?.playlistMetadataRenderer?.title?.trim();
  const content = selectedTab(data)?.content;
  if (!title || !content) throw new Error('Playlist metadata unavailable');
  const ids = new Set();
  function visit(value) {
    if (!value || typeof value !== 'object') return;
    const item = value.playlistVideoRenderer;
    if (item && validId(item.videoId) && item.navigationEndpoint?.watchEndpoint?.playlistId === playlist.id) ids.add(item.videoId);
    const lockup = value.lockupViewModel;
    if (lockup?.contentType === 'LOCKUP_CONTENT_TYPE_VIDEO' && validId(lockup.contentId) &&
        lockup.rendererContext?.commandContext?.onTap?.innertubeCommand?.watchEndpoint?.playlistId === playlist.id) ids.add(lockup.contentId);
    for (const child of Object.values(value)) if (child && typeof child === 'object') visit(child);
  }
  visit(content);
  return { id: playlist.id, title, videoIds: [...ids] };
}
const snapshotSubject = video => subjectPlaylists.find(playlist => playlist.id === video.subjectPlaylistId)?.title;
export function verifiedFallback(catalog, limit = 9) {
  return catalog.filter(video => video.format === 'regular' && !excludedShort(video) && validId(video.id) && snapshotSubject(video))
    .map(video => ({ ...video, subject: snapshotSubject(video) }))
    .sort((a, b) => (Date.parse(b.publishedAt) || 0) - (Date.parse(a.publishedAt) || 0)).slice(0, limit);
}
async function fetchText(fetcher, url) {
  const response = await fetcher(url, { next: { revalidate: 3600 }, signal: AbortSignal.timeout(8000), headers: { 'Accept-Language': 'en-US,en;q=0.9' } });
  if (!response.ok) throw new Error(`YouTube returned ${response.status}`);
  const reader = response.body?.getReader();
  if (!reader) throw new Error('YouTube response stream unavailable');
  const chunks = []; let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 8 * 1024 * 1024) { await reader.cancel(); throw new Error('YouTube response exceeds byte limit'); }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  const bytes = new Uint8Array(size); let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  return new TextDecoder().decode(bytes);
}
export async function latestRegularLearningVideos({ fetcher = fetch, catalog, warn = console.warn }) {
  const requests = [
    fetchText(fetcher, regularVideoURL).then(html => parseRegularVideoPage(html)),
    fetchText(fetcher, `https://www.youtube.com/feeds/videos.xml?channel_id=${learningChannelId}`).then(xml => parseYoutubeFeed(xml, learningChannelId)),
    ...subjectPlaylists.map(playlist => fetchText(fetcher, `https://www.youtube.com/playlist?list=${playlist.id}&hl=en`).then(html => parseSubjectPlaylist(html, playlist))),
  ];
  const [regular, metadata, ...playlists] = await Promise.allSettled(requests);
  if (regular.status !== 'fulfilled' || !regular.value.length) {
    warn('YouTube regular-video classification unavailable; using the verified regular-video snapshot.');
    return verifiedFallback(catalog);
  }
  if (metadata.status !== 'fulfilled') warn('YouTube descriptions unavailable; using reviewed descriptions where available.');
  if (playlists.some(result => result.status !== 'fulfilled')) warn('Some YouTube subject memberships unavailable; only verified snapshot subjects may be used as fallback.');
  const uploads = new Map((metadata.status === 'fulfilled' ? metadata.value : []).map(video => [video.id, video]));
  // Apply all contradictory format evidence before the collection limit/counts.
  const eligible = regular.value.filter(video => !excludedShort(video) &&
    !excludedShort(catalog.find(item => item.id === video.id)) && !excludedShort(uploads.get(video.id)));
  return eligible.slice(0, 9).map(video => {
    const reviewed = catalog.find(item => item.id === video.id);
    const upload = uploads.get(video.id);
    const playlist = playlists.find(result => result.status === 'fulfilled' && result.value.videoIds.includes(video.id));
    const subject = playlist?.value.title || (playlists.some(result => result.status !== 'fulfilled') && reviewed?.format === 'regular' ? snapshotSubject(reviewed) : undefined);
    return {
      ...reviewed, ...video, subject,
      publishedAt: upload?.publishedAt || reviewed?.publishedAt,
      description: reviewed?.description || upload?.description || '',
      format: 'regular',
      subjectPlaylistId: playlist?.value.id || (subject ? reviewed?.subjectPlaylistId : undefined),
    };
  });
}

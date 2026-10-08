import { videoSubject, videoSummary } from "./youtubeVideoMetadata.mjs";
// Parse only the fields used from YouTube's public Atom upload feed.
const decode = (text) => text.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos);/gi, (_, entity) => {
  const named = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" };
  if (entity[0] !== '#') return named[entity.toLowerCase()];
  const value = entity[1].toLowerCase() === 'x' ? parseInt(entity.slice(2), 16) : Number(entity.slice(1));
  return value > 0 && value <= 0x10ffff ? String.fromCodePoint(value) : '';
});
const field = (entry, name) => decode(entry.match(new RegExp(`<${name}>([\\s\\S]*?)<\\/${name}>`))?.[1] || '').trim();

export function parseYoutubeFeed(xml, channelId) {
  const seen = new Set();
  return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].flatMap((match) => {
    const entry = match[1];
    const id = field(entry, 'yt:videoId');
    const title = field(entry, 'title');
    const publishedAt = field(entry, 'published');
    if (field(entry, 'yt:channelId') !== channelId || !/^[\w-]{11}$/.test(id) || !title || !Number.isFinite(Date.parse(publishedAt)) || seen.has(id)) return [];
    seen.add(id);
    const description = field(entry, 'media:description');
    return [{ id, title, publishedAt, subject: videoSubject(description, title), description: videoSummary(description) }];
  }).sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

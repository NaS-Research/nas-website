import 'server-only';
import { learningVideos } from '@/data/learningVideos';
import { parseYoutubeFeed } from './youtubeFeed.mjs';

const channelId = 'UCayPiGDDH9euWzwkb9tA6ug';
export async function getLatestLearningVideos() {
  try {
    const response = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`YouTube feed returned ${response.status}`);
    const videos = parseYoutubeFeed(await response.text(), channelId);
    if (!videos.length) throw new Error('YouTube feed contained no valid uploads');
    return videos.map((video) => {
      const reviewed = learningVideos.find((item) => item.id === video.id);
      return { ...reviewed, ...video, subject: reviewed?.subject || video.subject, description: reviewed?.description || video.description };
    });
  } catch (error) {
    console.warn('YouTube uploads unavailable; using the reviewed video collection.', error.message);
    return learningVideos;
  }
}

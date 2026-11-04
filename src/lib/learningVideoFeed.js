import 'server-only';
import { learningVideos } from '@/data/learningVideos';
import { latestRegularLearningVideos } from './learningVideoCollection.mjs';

export async function getLatestLearningVideos() {
  return latestRegularLearningVideos({ catalog: learningVideos });
}

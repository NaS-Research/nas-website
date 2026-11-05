import {createArticlePreloadStore,ARTICLE_PRELOAD_CACHE_LIMIT} from './preload-store.mjs';
export const ARTICLE_MOBILE_COMPRESSED_CACHE_LIMIT=ARTICLE_PRELOAD_CACHE_LIMIT;
export const retainArticleMobileBytes=asset=>asset.deliveryTier==='mobile';
export function createArticleDeliveryByteStore(options={}){return createArticlePreloadStore(options);}

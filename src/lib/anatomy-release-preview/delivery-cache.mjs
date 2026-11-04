import {createArticleByteStore} from './byte-store.mjs';
// Actual compressed mobile candidates are28.7/56.2/31.4MB. Bound retained mobile bytes to64MiB;
// keep all original assets out of this cache and avoid uncached discarded prewarm downloads.
export const ARTICLE_MOBILE_COMPRESSED_CACHE_LIMIT=64*1024*1024;
export const retainArticleMobileBytes=asset=>asset.deliveryTier==='mobile';
export function createArticleDeliveryByteStore(options={}){return createArticleByteStore({...options,maxBytes:ARTICLE_MOBILE_COMPRESSED_CACHE_LIMIT,canRetain:retainArticleMobileBytes,prefetchUnretained:false});}

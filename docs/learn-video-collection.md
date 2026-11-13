# Learn video metadata contract

Both the Learn carousel and Watch collection use the same completed metadata contract. Every regular video renders a nonempty subject and a short caption, including when YouTube is unavailable. Shorts classification still precedes the nine-video limit; no duration heuristic is used.

Sources, in priority order: verified subject-playlist membership (editorial subjects), a verified stored membership during playlist outages, description Subject/Category metadata and broad title-based editorial subjects. A broad fallback is not presented as verified playlist membership. The existing two mapped subject playlists are not a complete subject taxonomy.

Captions use reviewed copy, then the recent Atom description. If a new film falls outside the Atom window (which also includes Shorts), its public watch-page player description is fetched with video and channel identity checks. Description Summary lines take priority; chapter lists, references and links are excluded. Captions are bounded to 220 characters. If all description sources fail or are empty, the card uses a neutral title-based caption rather than disappearing or inventing scientific claims.

Fetches revalidate every 15 minutes with an eight-second timeout and eight-MiB response limit. They require no API key. YouTube changes/outages can affect source freshness; the final presentation fallback guarantees populated fields, not upstream availability. Add Subject and Summary lines to future YouTube descriptions to control exact editorial copy without a website release.

Run node --test scripts/test-learning-video-collection.mjs and node scripts/test-youtube-video-metadata.mjs for regressions covering Shorts, missing playlists, Atom eviction, watch identity checks, outages, and empty fields.

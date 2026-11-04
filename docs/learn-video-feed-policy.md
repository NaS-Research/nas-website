# Learn regular-video feed and playlist subjects

The channel remains UCayPiGDDH9euWzwkb9tA6ug. The public handle currently resolves to NaS Institute; no channel settings are changed.

## Regular videos only

Eligibility comes from the selected Videos tab at https://www.youtube.com/channel/UCayPiGDDH9euWzwkb9tA6ug/videos. Only direct video/watch entries in that tab's primary grid are admitted. Shorts/reel renderers, Shorts URLs, recommendation shelves and other tabs are ignored. Duration, ordinary title words and thumbnail shape never establish format. An explicit #Shorts title is an exclusion signal; it never establishes regular eligibility. The first nine regular entries retain YouTube's newest-first order. The Atom feed enriches descriptions and dates only; it can never establish eligibility.

This uses public YouTube browse metadata, not a documented Data API format. Schema/channel validation fails closed. If YouTube is unavailable, rate-limited, returns consent, or changes its schema, use only the last verified regular-video snapshot in learningVideos.js. Never fall back to the unfiltered uploads feed. The server warns when using a snapshot.

## Category labels

Known subject playlists, verified through their public pages:
- Pharmacology: https://www.youtube.com/playlist?list=PLXbt4CC9ZiBg
- Life Sciences Fundamentals: https://www.youtube.com/playlist?list=PLMBgDyxRzUag

Use actual playlist title and actual video membership, not description/title guesses or generic Life sciences. Both asthma films QtJ11zS1uHQ and 28zwXoBpzsw are in Pharmacology. The Shorts XqL4TRA2-2E and pWjVY76IA5I also belong to that playlist but remains excluded because playlist membership is not format classification. Heart muscle 4UXz8KnGvSo, blood vessel Q42HJYwdXXk, heart anatomy HNftmft7T0s and introduction zdM7I6EG8kY belong to Life Sciences Fundamentals.

If membership overlaps, prefer specific Pharmacology over broad Life Sciences Fundamentals, in the configured order. Uploads, language, series and arbitrary playlists are not subject categories. New subject playlists require adding their verified ID to the allowlist. Use a last verified snapshot subject only when playlist retrieval fails. If current membership is missing/ambiguous beyond this convention, omit the label rather than invent one.

## Refresh, limits and checks

The four public GETs run concurrently, each with an eight-second timeout, eight-MiB response limit and existing hourly Next.js revalidation. No API credentials, paid services or YouTube account changes. Public browse and playlist pages expose an initial page; this is not a complete archive/paginated index. Unknown memberships remain unlabeled.

Run node --test scripts/test-learning-video-collection.mjs and node scripts/test-youtube-feed.mjs. The optional captured-public-data integration test additionally uses NAS_VIDEO_AUDIT pointing to the external audit receipt directory containing videos.txt, uploads.txt, pharmacology.txt, fundamentals.txt. Do not commit full upstream HTML, playback URLs or browser-session material.

The narrow release contains only feed logic, verified catalog, optional subject markup, tests and this document. It excludes private Anatomy source/assets/config and all paused Learn module work.

The exported reviewed catalog is also filtered by explicit reviewed regular format and verified snapshot subject before the Watch route appends it. Unknown format is excluded; no thumbnail orientation or duration heuristic is used. Both reported Shorts, XqL4TRA2-2E and pWjVY76IA5I, are regression cases. The carousel receives the classified array before its nine-card limit; the Watch page receives the classified latest array and safe catalog before subject/search/pagination. Deployment must separately verify both /learn and /learn/watch after current-cache revalidation.

Conflict policy: public Shorts-tab-confirmed IDs, an explicit reviewed short format, and an explicit #Shorts title are exclusion signals and take precedence over a watch-shaped Videos-grid entry or a mistaken regular catalog row. Atom uploads never establish regular classification; contradictory Atom #Shorts metadata can only exclude an otherwise classified entry. Apply exclusions before the nine-video limit. Ordinary words such as shorts, video duration, and thumbnail aspect ratio do not exclude positively classified regular films.

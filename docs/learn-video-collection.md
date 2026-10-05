# Learn video collection

The Learn slider reads NaS Research's public YouTube Atom feed on the server,
refreshing hourly through Next.js revalidation. It sorts by publication date,
shows up to nine uploads, and falls back to the reviewed catalog if the feed
fails. No YouTube API key is needed. The feed exposes recent uploads only.

`src/data/learningVideos.js` supplies reviewed subjects, short descriptions,
and verified durations. New feed entries show their actual title and thumbnail
with the neutral NaS Research label; durations are omitted until verified.
The searchable Watch collection remains the reviewed library. Add new reviewed
entries there to expand its subjects and keep an archive beyond the feed window.

Desktop displays three cards, tablet two, and mobile one. Arrows move a visible
page; native touch scrolling and keyboard arrows on the track are supported.
Navigation stops at either end, and respects reduced motion. No autoplay.

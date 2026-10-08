# Video card metadata

New uploads appear through the public YouTube channel feed with hourly cache revalidation. No API key is required.

Start each YouTube description with a short explanatory paragraph for the website card. Add a separate `Subject: Pharmacology` line. Supported subjects: Anatomy (also Human anatomy), Physiology, Pharmacology, Therapeutics, Life sciences. An optional `Summary:` line takes precedence over the opening paragraph.

The website extracts the first descriptive paragraph and fits it to 220 characters, preferring complete sentences. It excludes subject labels, links, hashtags, chapter timestamps and section headings. An explicit supported subject takes precedence over broad title-based classification. Unrecognized topics default to Life sciences. These labels belong to NaS, not YouTube's categories.

Curated descriptions and subjects in src/data/learningVideos.js override automatic metadata by video ID. Feed titles and upload dates remain current. The curated collection also provides an outage fallback. Add reviewed archive entries when a video should remain available beyond the recent-upload feed.

The Learn carousel and Watch collection share the live feed metadata. Watch merges recent uploads with reviewed archive entries by ID, without duplicates. The public feed is a recent-upload window, not a complete permanent channel archive.

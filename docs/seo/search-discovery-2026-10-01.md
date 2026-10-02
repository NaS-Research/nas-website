# NaS search discovery review — October 1, 2026

## Observed baseline

Google's `site:nasresearch.bio` query returned the homepage, legal pages, the former Research Programs URL, and institutional articles. The website is indexed; weak visibility for `nas research` is a separate ranking and identity problem. The supplied screenshot shows the National Academy of Sciences dominating that phrase. Search operators are diagnostic samples, not a complete count of indexed pages.

The public XML sitemap contained 265 URLs, including only 13 featured drug profiles. It omitted `/learn/library`. Many modification dates were fixed placeholders. Paginated medication cards exposed only the initial nine links in the initial HTML, while the HTML directory also listed only featured drugs.

## Implemented

- Include all 300 existing medication routes and the Learning Library in the XML sitemap.
- Provide server-rendered links to all medication profiles in the HTML directory.
- Omit unsupported modification dates; retain dates from publication and lesson records.
- Exclude any publication explicitly marked noindex from both directories.
- Clarify the homepage title, description, visible institutional introduction, Organization identity, and WebSite alternate name.
- Correct learning-page share URLs and stop inheriting homepage-specific preview text across unrelated routes.
- Preserve self-referencing canonical URLs and existing private-account noindex controls.

## Search Console completion

The browser opened Search Console's welcome/property setup screen. No verified NaS property was visible in the currently signed-in account. Confirm the intended Google account before establishing ownership. Verify `https://nasresearch.bio/` (URL-prefix property) or `nasresearch.bio` (DNS domain property), submit `https://nasresearch.bio/sitemap.xml`, inspect the homepage, Products, Learn, Learning Library, and representative research/profile pages, and request indexing where appropriate. Record actual submission and inspection outcomes; publishing a sitemap is not submission.

## Marketing priorities

1. Use **NaS Research** consistently as the organization name across the website and existing LinkedIn, Instagram, and YouTube profiles. Link these profiles to the canonical website. External profile edits and posts remain separate actions requiring authorization.
2. Lead with relevant searches: NaS Research, NaS Learn, NaS Drug Library, NaS Denials, and research-specific phrases such as blood-brain barrier prediction audit and PAM50 technical repeatability. Do not expect the ambiguous acronym `nas` to become a reliable acquisition channel.
3. Build visibility around original research releases and useful, reviewed educational resources. Every release should have a substantive public page, authors, sources, dates, an evidence-based summary, and a direct link from appropriate research/learning hubs.
4. Earn relevant links through actual collaborators, scientific repositories, institutional profiles, and release distribution. Avoid purchased links, duplicate doorway pages, fabricated endorsements, or mass low-value drug pages.
5. Measure branded/non-branded impressions, clicks, indexed pages, and exclusions in Search Console. Review after enough crawl/measurement time; do not infer ranking improvement from a successful deployment alone.

No advertisement budget, external profile edits, public posts, or outreach messages were executed in this release.

## Official references

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/appearance/site-names
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

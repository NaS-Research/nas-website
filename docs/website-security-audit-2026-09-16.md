# NaS website audit — September 16, 2026

## Scope and release boundary
Audit of the existing public research and educational website. No accounts, payments, upload service, analytics tracking, or public AI backend were introduced. This release is isolated from unfinished anatomy/workspace work in the main local checkout. This is an engineering review, not a certification that the site is invulnerable or legally compliant.

## Current-site checklist
1. Internal links/downloads: generated-page audit found no missing local targets or anchors. External checks covered 1,358 unique URLs; HEAD returned 952 successful, 337 blocked, 44 unavailable, 24 not found, and one accepted. GET rechecks demonstrated false positives. Six source URLs were corrected from primary sources; remaining candidates are recorded separately, not silently substituted.
2. Custom 404: added recovery links and NaS styling.
3. Metadata: all generated content pages have title, description and canonical; redirect-only pages excluded. No full claim of unique social copy for every lesson.
4. Social images/favicon: local branded assets exist; homepage metadata points to the NaS logo. Publication metadata already uses dedicated artwork. Existing caches on messaging platforms are outside this release.
5. Sitemap/robots: removed the unavailable Nicole chat from both sitemap forms. Public indexing remains allowed; access controls do not depend on robots.txt.
6. Public claims: retired nonfunctional Nicole chat URL; retained its code without exposing it. Privacy/terms describe development status instead of an operational chat service. Other research findings were not rewritten or scientifically revalidated.
7. Accessibility: no missing alt attributes in generated pages; removed nested main landmarks, added skip navigation and global visible keyboard focus, fixed sampled homepage low-contrast labels. Representative mobile/tablet/desktop routes checked. This is not a full WCAG certification.
8. Secrets/public files: no credential-pattern matches in src/public or ZIP contents; no sensitive tracked filenames and no public source maps found. Pattern scans do not rule out every possible secret. Hosting environment and complete Git history were not audited.
9. Dependencies: npm audit reported zero known vulnerabilities. Existing weekly Dependabot configuration retained. No unnecessary major-version upgrades.
10. Transport/headers: live HTTPS redirect and HSTS verified before changes. Added CSP baseline, SAMEORIGIN framing, nosniff, referrer and permissions policies, and removed framework advertising. CSP permits inline scripts for static Next.js hydration and atlas import maps; it is not a strict nonce-based XSS policy.
11. APIs: reject duplicate/overlong/control-character queries and cross-site browser requests; upstream timeouts remain; distinguish upstream outages, avoid logging query strings, and add platform rate-limit configuration.
12. External resources: removed unused wildcard Amazon S3 image permission. Existing Sketchfab viewer explicitly allowed by CSP; other resources default to same origin.
13. Responsive/keyboard checks: no horizontal overflow on sampled 390px pages or tablet article; collaboration choices work by keyboard. Labels on its radios are provided by enclosing labels (not missing).
14. Motion/contrast: retain existing reduced-motion handling; viewport-aware background films now avoid playing for reduced-motion users; sampled small labels adjusted.
15. Performance: below-fold homepage films load only near visibility. Existing optimized images retained. No claim of a measured production Lighthouse/Core Web Vitals score. Large interactive anatomy models remain a separate performance project.
16. Policies: corrected actual data flows, local assessment storage, hosting, embedded model provider and drug-source requests. No invented AI provider or legal penalties. Final legal assessment is not performed by this engineering audit.
17. Monitoring: upstream failures emit generic event names only. Added build/security CI checks; existing hosting logs remain the operational source. No new paid monitoring service, analytics, recurring uptime job, or notification destination created.
18. Release: see final delivery for commit/push/deploy status. Verify Netlify deploy log explicitly accepts the edge rate-limit rule, then smoke test live headers/redirect/404. A local Next build does not validate Netlify edge enforcement.

## Later / not applicable to the current public site
19. Analytics/cookie banner: no nonessential analytics intentionally introduced; review consent before adding tracking. Embedded third parties still warrant a browser/cookie inventory.
20. Forms: contact opens the visitor's email app; no submitted server form to protect.
21. Accounts: no login/session/password-reset service to configure.
22. Uploads/private databases: none introduced; future services need least privilege, authorization, retention and deletion controls.
23. Public AI: legacy chat retired because its endpoint returned 404. A real launch requires backend evaluation, limits, tool isolation, privacy decisions and safety handling.
24. Payments: no checkout/subscriptions; payment-specific protections deferred.
25. Community: no public user-posting feature; moderation/reporting deferred.
26. Native app: no App Store submission; Apple purchasing/login/reviewer requirements deferred.

## Rollback and deployment validation
Revert the audit release commit and redeploy the previous known-good revision if a regression appears. Do not reset or overwrite the unrelated local working tree. Confirm deployed CSP does not block necessary resources and check the Netlify post-processing log for rate limits before calling those enforced.

Sources: https://nextjs.org/docs/app/api-reference/config/next-config-js/headers ; https://docs.netlify.com/manage/security/secure-access-to-sites/rate-limiting/

## Obsolete route cleanup
Removed the old Nicole chat page and unused NicoleChat/ComingSoonModal components. Replaced Contact and Nicole page files with configuration redirects to /support and /research. Homepage links now point directly to /support. Retained substantive research and learning pages, legal notices, the HTML sitemap, and unpublished workspace work. The preserved future hero prototype is not a public route.

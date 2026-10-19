# NaS accounts: activation checklist

Implementation is gated off until NAS_AUTH_ENABLED=true and all core configuration is present. No working account service is claimed before activation. All user authentication is handled by Supabase; do not store passwords in NaS tables or source code.

## Required hosting environment

- SUPABASE_URL: NaS project's HTTPS URL
- SUPABASE_PUBLISHABLE_KEY: publishable/anon key, never service-role
- NAS_SITE_URL: https://nasresearch.bio (fixed trusted origin; localhost for development)
- NAS_AUTH_ENABLED: true only after staging verification
- NAS_AUTH_GOOGLE_ENABLED: true only after Google OAuth is configured and tested
- NAS_AUTH_APPLE_ENABLED: true only after Apple OAuth is configured and tested

Rebuild after changing activation flags because the navbar is statically rendered. Never put credentials in git or chat. Use the hosting environment settings.

## Supabase project

Enable email/password, require email confirmation, set minimum password length to 12, and configure production SMTP. Set Site URL to https://nasresearch.bio. Allow only the production /auth/callback URL (including ?next=reset for recovery) and explicitly chosen local/staging callbacks. Do not use wildcard production redirects. Enable and verify provider rate limits and abuse protection before public activation. The server-side requests share hosting egress, so review how provider throttling treats them; add distributed per-client limits before opening registration to the public.

Set email templates to the /auth/confirm endpoint using token hashes so verification works across browsers:
- Signup: {{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=signup
- Recovery: {{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=recovery

Use authenticated test accounts to verify these exact templates and expiry behavior.

## Google

Create/configure the OAuth web client in the NaS Google Cloud project. Configure consent screen, authorized domain, and the exact Supabase callback shown in the provider dashboard. Store client secret in Supabase provider settings. Test in staging before enabling its flag.

## Apple

Requires Apple's developer configuration: App ID with Sign in with Apple, Services ID, website domain and Supabase return URL, and a signing key/client secret. Store secrets only in provider settings. Apple web client secrets expire; establish rotation before enabling. Do not create an Apple account or agree to paid enrollment without the owner's authorization.

## Release gates still requiring external configuration

1. Create/connect the NaS Supabase project and production email delivery.
2. If enabling Google or Apple, configure those providers in their developer consoles. They are optional for the initial email/password release.
3. Test email signup, confirmation, login, recovery, session refresh, signout, and expired/reused links with real test accounts. Test Google and Apple callbacks if those providers are enabled.
4. Validate abuse controls, email deliverability, provider downtime, and per-client rate limiting.
5. Update public privacy terms to explain account email, provider identity, essential session cookies, Supabase, deletion requests, and actual retention. Current privacy text says no accounts; do not enable while it remains inaccurate.
6. Provide a verified account deletion process before launch. The member_items migration defines private workspace storage with RLS; apply it before activation.
7. Enable flags, rebuild, and verify production. Public research remains accessible without an account.

The account page now provides Continue, Saved, History, and Notes. Cloud persistence is implemented but is not active until the project is configured and the workspace migration is applied. No real account synchronization has been verified yet.

## Implementation checks

Server-only Supabase client with HttpOnly, SameSite=Lax, production Secure cookies. Next Server Actions supply origin validation for state-changing form requests. OAuth uses the SDK PKCE flow. Callback destinations are fixed, not arbitrary next URLs. Server account access calls getUser; it never trusts raw session cookies. Auth routes are private/no-store and noindex. Global signout follows password change (issued access tokens can survive until expiry; choose a short lifetime). Never cache authenticated responses at the CDN.

## Scientist account profiles

Registration collects full name and optional institutional affiliation in Supabase user metadata. These fields are display-only and do not confer a scientist role, staff access, or institutional verification. Private workspace access still uses the server-verified user ID and database ownership policies. Never authorize from profile metadata. The October 10 account-screen candidate does not activate registration or claim production sign-in verification; configuration and activation checks above remain required.


## Google launch candidate — October 19, 2026

NaS Supabase project: mwjbecfyflaltxvxerje. Google is reported enabled by the public Auth settings endpoint. The personal-workspace migration is applied with ownership RLS. The automatic-RLS event trigger has client execution revoked; it remains installed.

Email/password authentication now requires NAS_AUTH_EMAIL_ENABLED=true separately, in both the UI and Server Action. Leave this unset until SMTP, recovery templates, and signup abuse controls are tested. Google-only activation uses NAS_AUTH_ENABLED=true and NAS_AUTH_GOOGLE_ENABLED=true; Apple remains unset.

This candidate updates the public privacy and account terms for Google identity, essential session cookies, Supabase, workspace records, and owner-verified deletion requests. Account deletion is requested using the published contact email. Operationally: verify ownership, revoke sessions, delete the auth user, and verify cascading workspace deletion. Access tokens may remain valid until expiry; never promise immediate token invalidation.

Do not call the Google client secret verified until a real authorization-code exchange succeeds. Before launch, verify Google audience/publishing settings, perform an end-to-end login and logout with the owner's test account, confirm cookies and private responses, and inspect the actual Netlify deployment. The OAuth client secret belongs only in Supabase.

Verified locally on October 19: matching lockfile and Next 16.3.6 build; three configuration tests; member validation/resume tests; seven production-server HTTP checks including the actual multipart Google Server Action, S256 PKCE redirect, HttpOnly/Secure/SameSite verifier cookie, account redirect, API 401/no-store, fixed callback destinations, and public research access. Live Supabase ownership tests passed with rolled-back synthetic users; security advisors returned no findings. Real Google callback and hosting activation remain unverified.

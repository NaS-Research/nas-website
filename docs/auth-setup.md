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
2. Configure Google and Apple in their developer consoles.
3. Test email signup, confirmation, login, recovery, Google and Apple callbacks, session refresh, signout, and expired/reused links with real test accounts.
4. Validate abuse controls, email deliverability, provider downtime, and per-client rate limiting.
5. Update public privacy terms to explain account email, provider identity, essential session cookies, Supabase, deletion requests, and actual retention. Current privacy text says no accounts; do not enable while it remains inaccurate.
6. Provide a verified account deletion process before launch. No user workspace data tables exist yet; implement authorization/RLS before any personal saved data.
7. Enable flags, rebuild, and verify production. Public research remains accessible without an account.

Current account page is an authenticated landing page. Learning progress remains local to the browser; there is no cloud sync or personal project storage yet.

## Implementation checks

Server-only Supabase client with HttpOnly, SameSite=Lax, production Secure cookies. Next Server Actions supply origin validation for state-changing form requests. OAuth uses the SDK PKCE flow. Callback destinations are fixed, not arbitrary next URLs. Server account access calls getUser; it never trusts raw session cookies. Auth routes are private/no-store and noindex. Global signout follows password change (issued access tokens can survive until expiry; choose a short lifetime). Never cache authenticated responses at the CDN.

export function authReady() {
 return process.env.NAS_AUTH_ENABLED === 'true' && !!process.env.SUPABASE_URL && !!process.env.SUPABASE_PUBLISHABLE_KEY && !!process.env.NAS_SITE_URL;
}
export function siteOrigin() {
 const url = new URL(process.env.NAS_SITE_URL);
 if (url.protocol !== 'https:' && !['localhost','127.0.0.1'].includes(url.hostname)) throw new Error('HTTPS required');
 return url.origin;
}
export function providerEnabled(provider) {
 return authReady() && ['google','apple'].includes(provider) && process.env[`NAS_AUTH_${provider.toUpperCase()}_ENABLED`] === 'true';
}

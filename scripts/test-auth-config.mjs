import {test} from 'node:test';
import assert from 'node:assert/strict';
import {authReady,providerEnabled,siteOrigin} from '../src/lib/auth/config.mjs';
test('auth fails closed until explicitly activated and configured',()=>{
 for(const k of ['NAS_AUTH_ENABLED','SUPABASE_URL','SUPABASE_PUBLISHABLE_KEY','NAS_SITE_URL'])delete process.env[k];
 assert.equal(authReady(),false);
 process.env.NAS_AUTH_ENABLED='true';assert.equal(authReady(),false);
 Object.assign(process.env,{SUPABASE_URL:'https://example.supabase.co',SUPABASE_PUBLISHABLE_KEY:'test',NAS_SITE_URL:'https://nasresearch.bio'});
 assert.equal(authReady(),true);
 assert.equal(providerEnabled('google'),false);
 process.env.NAS_AUTH_GOOGLE_ENABLED='true';assert.equal(providerEnabled('google'),true);
 assert.equal(providerEnabled('untrusted'),false);
 process.env.NAS_AUTH_ENABLED='false';assert.equal(providerEnabled('google'),false);
});
test('callback origin requires HTTPS outside local development',()=>{
 process.env.NAS_SITE_URL='http://example.com';assert.throws(siteOrigin);
 process.env.NAS_SITE_URL='https://nasresearch.bio/path';assert.equal(siteOrigin(),'https://nasresearch.bio');
 process.env.NAS_SITE_URL='http://localhost:3000';assert.equal(siteOrigin(),'http://localhost:3000');
});

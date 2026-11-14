import {test} from 'node:test';
import assert from 'node:assert/strict';
import {authReady,providerEnabled,siteOrigin,emailEnabled,isSiteOrigin} from '../src/lib/auth/config.mjs';
test('auth fails closed until explicitly activated and configured',()=>{
 for(const k of ['NAS_AUTH_ENABLED','SUPABASE_URL','SUPABASE_PUBLISHABLE_KEY','NAS_SITE_URL','NAS_AUTH_GOOGLE_ENABLED','NAS_AUTH_APPLE_ENABLED','NAS_AUTH_EMAIL_ENABLED','NAS_AUTH_AZURE_ENABLED'])delete process.env[k];
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

test('member writes recognize only the configured public origin',()=>{
 process.env.NAS_SITE_URL='https://nasresearch.bio';
 assert.equal(isSiteOrigin('https://nasresearch.bio'),true);
 assert.equal(isSiteOrigin('http://nasresearch.bio'),false);
 assert.equal(isSiteOrigin('https://nasresearch.bio.example.com'),false);
 assert.equal(isSiteOrigin(null),false);
 process.env.NAS_SITE_URL='http://localhost:3000';
 assert.equal(isSiteOrigin('http://localhost:3000'),true);
 delete process.env.NAS_SITE_URL;
 assert.equal(isSiteOrigin('https://nasresearch.bio'),false);
});

test('email authentication remains closed during the Google-only launch',()=>{
 Object.assign(process.env,{NAS_AUTH_ENABLED:'true',SUPABASE_URL:'https://example.supabase.co',SUPABASE_PUBLISHABLE_KEY:'test',NAS_SITE_URL:'https://nasresearch.bio',NAS_AUTH_GOOGLE_ENABLED:'true'});
 delete process.env.NAS_AUTH_EMAIL_ENABLED;
 assert.equal(providerEnabled('google'),true);
 assert.equal(emailEnabled(),false);
 process.env.NAS_AUTH_EMAIL_ENABLED='true';assert.equal(emailEnabled(),true);
 process.env.NAS_AUTH_ENABLED='false';assert.equal(emailEnabled(),false);
});

test('Microsoft uses the Azure provider and stays closed until explicitly enabled',()=>{
 Object.assign(process.env,{NAS_AUTH_ENABLED:'true',SUPABASE_URL:'https://example.supabase.co',SUPABASE_PUBLISHABLE_KEY:'test',NAS_SITE_URL:'https://nasresearch.bio'});
 delete process.env.NAS_AUTH_AZURE_ENABLED;
 assert.equal(providerEnabled('azure'),false);
 process.env.NAS_AUTH_AZURE_ENABLED='true';
 assert.equal(providerEnabled('azure'),true);
 assert.equal(providerEnabled('microsoft'),false);
 process.env.NAS_AUTH_AZURE_ENABLED='false';
 assert.equal(providerEnabled('azure'),false);
 process.env.NAS_AUTH_AZURE_ENABLED='true';
 process.env.NAS_AUTH_ENABLED='false';
 assert.equal(providerEnabled('azure'),false);
});

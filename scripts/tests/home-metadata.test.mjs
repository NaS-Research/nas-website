import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
const home = readFileSync(new URL('../../src/app/page.jsx', import.meta.url), 'utf8');
const literal = home.match(/export const metadata = ([\s\S]*?);\n/)[1];
const metadata = JSON.parse(JSON.stringify(runInNewContext(`(${literal})`)));

test('homepage uses valid concise social titles rather than blank-title tricks', () => {
  assert.equal(metadata.openGraph.title, 'NaS Research');
  assert.equal(metadata.twitter.title, 'NaS Research');
  assert.equal(metadata.twitter.card, 'summary_large_image');
});
test('homepage preserves its canonical URL and existing share images', () => {
  assert.equal(metadata.alternates.canonical, '/');
  assert.equal(metadata.openGraph.url, '/');
  assert.deepEqual(metadata.openGraph.images, [{url: '/nas-logo-share-v1.png', width: 1200, height: 630, alt: 'NaS Research'}]);
  assert.deepEqual(metadata.twitter.images, ['/nas-logo-share-v1.png']);
});
test('homepage does not replace browser/SEO title or shared metadata', () => {
  assert.equal(Object.hasOwn(metadata, 'title'), false);
  assert.equal(Object.hasOwn(metadata, 'description'), false);
  const layout = readFileSync(new URL('../../src/app/layout.jsx', import.meta.url), 'utf8');
  assert.match(layout, /title: "NaS Research \| Biomedical Research & Life Science Tools"/);
});

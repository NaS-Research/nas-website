import test from 'node:test';
import assert from 'node:assert/strict';
import {posterImageAttributes} from '../src/lib/anatomy-release-preview/poster-image.mjs';
test('existing posters retain exact URLs and native dimensions',()=>assert.deepEqual(posterImageAttributes({src:'/old.png',width:944,height:531}),{src:'/old.png',width:944,height:531}));
test('responsive render derivatives retain native aspect ratio',()=>{const x=posterImageAttributes({src:'/native-1920.webp',width:3840,height:2160,srcSet:'/native-1920.webp 1920w, /native-3840.webp 3840w'});assert.equal(x.srcSet,'/native-1920.webp 1920w, /native-3840.webp 3840w');assert.match(x.sizes,/100vw/);assert.equal(x.width/x.height,16/9);});
test('missing poster does not create invalid image attributes',()=>assert.deepEqual(posterImageAttributes(null),{}));

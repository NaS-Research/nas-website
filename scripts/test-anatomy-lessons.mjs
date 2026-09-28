import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {anatomyLessons,organStructures} from '../src/data/anatomyLessons.js';
const catalog=JSON.parse(readFileSync(new URL('../public/learn/body-atlas/structures.json',import.meta.url)));
test('Organ groups resolve to complete intended parts in the bundled model',()=>{
 const expected={heart:4,lungs:5,kidneys:2,liver:1,stomach:1,pancreas:1};
 for(const lesson of anatomyLessons){const parts=organStructures(lesson,catalog);assert.equal(parts.length,expected[lesson.id],lesson.id);assert.equal(new Set(parts.map(p=>p.id)).size,parts.length);assert(parts.every(p=>p.layerId===lesson.layer));}
 const heart=organStructures(anatomyLessons[0],catalog);assert(heart.every(p=>/^(Left|Right) (atrium|ventricle)$/.test(p.name)),'Do not accidentally include cerebral ventricles or remote vessels');
});
test('Every guided organ has sourced teaching steps',()=>{for(const lesson of anatomyLessons){assert.equal(lesson.steps.length,3);assert(lesson.steps.every(step=>step.length===2&&step.every(Boolean)));assert(['www.niddk.nih.gov','www.nhlbi.nih.gov'].includes(new URL(lesson.source).hostname));}});

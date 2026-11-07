import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {physicianPerspective, physicianPerspectiveVisible} from '../src/lib/anatomy-release-preview/media.mjs';
import {anatomyStudioReleasePublic, anatomyStudioReleasePreview} from '../src/data/anatomyStudioReleasePreview.mjs';
const source=rel=>readFileSync(new URL('../'+rel,import.meta.url),'utf8');
test('approved Courtney quotation appears in both public and preview editions',()=>{
 assert.equal(physicianPerspective.quote,'The visual models make complex concepts more accessible. I’m excited to see the collection grow as a teaching resource.');
 assert.equal(physicianPerspective.attribution,'— Courtney Mangum, MD');
 assert(physicianPerspectiveVisible(true));assert(physicianPerspectiveVisible(false));
 const component=source('src/components/research/anatomy-release-preview/AnatomyStudioReleasePreview.jsx');
 assert(component.includes("physicianPerspectiveVisible(published)&&section.id==='building-biobank'"));
 assert(component.includes('aria-label={physicianPerspective.reviewerApproved ? "Physician quotation"'));
 assert(component.includes('formatPhysicianQuote(physicianPerspective.quote)'));
 assert(!component.includes("!published&&section.id==='building-biobank'"));
 assert.equal(anatomyStudioReleasePublic.version,'1.0.2');
 assert.equal(anatomyStudioReleasePublic.revisionHistory[0].dateISO,'2026-11-07');
 assert.equal(anatomyStudioReleasePublic.noindex,false);assert.equal(anatomyStudioReleasePreview.noindex,true);
});
test('future unapproved or incomplete endorsements stay out of the public edition',()=>{
 for(const perspective of [null,{}, {...physicianPerspective,reviewerApproved:false},{...physicianPerspective,publicDisplayApprovedByFounder:false}])assert.equal(physicianPerspectiveVisible(true,perspective),false);
 assert.equal(physicianPerspectiveVisible(false,null),false);
 assert.equal(physicianPerspectiveVisible(false,{...physicianPerspective,reviewerApproved:false}),true);
});

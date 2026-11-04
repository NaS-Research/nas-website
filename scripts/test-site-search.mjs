import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import {createSearchIndex,searchPublicIndex,normalizeSearch,safeSearchHref,publicRecord,SEARCH_PROMPTS,PROMPT_INTERVAL_MS} from "../src/lib/site-search/engine.mjs";
import {publicSearchIndex} from "../src/lib/site-search/catalog.mjs";
import {GET} from "../src/app/api/search/route.js";
const index=createSearchIndex([
 {href:"/research/brain",title:"Blood–brain barrier prediction",category:"Publications",description:"Testing molecular prediction limits."},
 {href:"/learn/pharmacy/modules/brain",title:"Mechanisms",category:"Learning modules",description:"Blood brain barrier."},
 {href:"/research/denials",title:"Introducing NaS Denials",category:"Releases",description:"Specialty appeals."},
]);
test("case, accents, punctuation and whitespace normalize",()=>assert.equal(normalizeSearch("  BÍOLOGY — Receptors! "), "biology receptors"));
test("title matches outrank description matches",()=>assert.equal(searchPublicIndex(index,"blood brain")[0].href,"/research/brain"));
test("all meaningful terms must match, unknown terms do not produce filler",()=>assert.equal(searchPublicIndex(index,"brain pineapple").length,0));
test("categories are searchable",()=>assert.equal(searchPublicIndex(index,"releases")[0].href,"/research/denials"));
test("word prefixes find receptor-like plurals",()=>assert.equal(searchPublicIndex(index,"predict").length,1));
test("empty and stopword queries do not dump the public index",()=>{for(const q of ["","   ","the NaS"])assert.deepEqual(searchPublicIndex(index,q),[]);});
test("deduplicates public URLs",()=>assert.equal(createSearchIndex([...index,...index]).length,index.length));
test("private, unlisted, noindex and draft data cannot enter",()=>{
 for(const flag of [{private:true},{unlisted:true},{noindex:true},{draft:true},{published:false},{visibility:"private"},{status:"draft"},{publicationStatus:"preview"}]){
 assert.equal(publicRecord({...flag}),false);assert.deepEqual(createSearchIndex([{href:"/research/hidden",title:"Secret",...flag}]),[]);
 }
});
test("rejects unsafe and nonpublic paths",()=>{for(const href of ["//example.com","https://x.test","javascript:alert(1)","/preview/test","/studio/anatomy","/account/admin","/api/auth","/research/../preview/a","/research/%2e%2e/a","/research/a\\b"])assert.equal(safeSearchHref(href),false,href);});
test("response projection does not expose index internals",()=>assert.deepEqual(Object.keys(searchPublicIndex(index,"brain")[0]).sort(),["category","description","href","title"]));
test("limit is bounded",()=>assert.ok(searchPublicIndex(index,"brain",100).length<=30));
test("real catalog contains research, product, modules, guides, models and drug pages",()=>{
 for(const href of ["/research","/products#denials","/learn/pharmacy/atlas","/learn/anatomy","/learn/library","/learn/pharmacy/drugs/metformin"])assert.ok(publicSearchIndex.some(row=>row.href===href),href);
 assert.ok(publicSearchIndex.some(row=>row.href.startsWith("/learn/pharmacy/modules/")));
 assert.ok(searchPublicIndex(publicSearchIndex,"clinvar").some(row=>row.href.startsWith("/research/")));
});
test("real catalog never exposes Anatomy preview, Studio, auth, drafts, model bytes or records",()=>{
 assert.ok(publicSearchIndex.every(row=>safeSearchHref(row.href)));
 assert.ok(publicSearchIndex.every(row=>!/(?:anatomy-studio|\.glb|\.pdf|preview|account|admin)/i.test(row.href)));
 assert.deepEqual(searchPublicIndex(publicSearchIndex,"0.2.5-preview"),[]);
});
test("known module and drug queries return relevant real links",()=>{
 assert.ok(searchPublicIndex(publicSearchIndex,"acid base").some(row=>/acid-base/.test(row.href)));
 assert.ok(searchPublicIndex(publicSearchIndex,"metformin").some(row=>/drugs\/metformin$/.test(row.href)));
});
test("API limits long queries and has no-store/noindex headers",async()=>{
 const good=GET(new Request("https://nasresearch.bio/api/search?q=clinvar"));
 assert.equal(good.status,200);assert.equal(good.headers.get("cache-control"),"no-store");assert.match(good.headers.get("x-robots-tag"),/noindex/);
 assert.ok((await good.json()).results.length>0);
 assert.equal(GET(new Request("https://nasresearch.bio/api/search?q="+"a".repeat(161))).status,400);
});
test("empty API query returns no full catalog",async()=>assert.deepEqual(await GET(new Request("https://nasresearch.bio/api/search")).json(),{results:[]}));
test("prompt interval is two seconds with original descriptive wording",()=>{assert.equal(PROMPT_INTERVAL_MS,2000);assert.equal(SEARCH_PROMPTS.length,5);assert.ok(SEARCH_PROMPTS.every(text=>!text.startsWith("Ask about")));});

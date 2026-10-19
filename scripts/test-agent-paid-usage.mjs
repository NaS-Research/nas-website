import assert from 'node:assert/strict';
import {paidUsage,usageTotals,activityNodes,zoomView} from '../src/lib/admin/agent-tree.mjs';
const record={kind:'actual',billingType:'api',amountUsd:.25,provider:'Test provider',service:'Test metered request',provenance:'Test usage receipt',recordId:'test-receipt',asOf:'2026-10-19T22:00:00Z',scope:'exclusive'};
assert.equal(paidUsage({...record,billingType:'subscription'}),null);
assert.equal(paidUsage({...record,amountUsd:0}),null);
assert.equal(paidUsage({...record,amountUsd:-1}),null);
assert.equal(paidUsage({...record,provenance:''}),null);
assert.equal(paidUsage({...record,asOf:'unknown'}),null);
assert.equal(paidUsage({...record,kind:'estimate'}),null);
const actual=paidUsage(record),estimate=paidUsage({...record,kind:'estimate',recordId:'quote',amountUsd:.5,basis:'Test quantity multiplied by source unit rate'});
assert.equal(estimate.kind,'estimate');
const totals=usageTotals([{paidUsage:actual},{paidUsage:actual},{paidUsage:estimate},{paidUsage:{...actual,recordId:'inclusive',scope:'unconfirmed'}}]);
assert.deepEqual(totals,{actualUsd:.25,estimateUsd:.5,actualCount:1,estimateCount:1});
const raw=activityNodes([{source:'video',device:'test',received_at:new Date().toISOString(),payload:{jobs:[{id:'legacy',costUsd:300},{id:'paid',paidUsage:record}]}}]);
assert.equal(raw[0].costUsd,null);assert.equal(raw[1].costUsd,.25);
assert.equal(zoomView({scale:1,x:0,y:0},100,{x:10,y:10}).scale,2.5);
assert.equal(zoomView({scale:1,x:0,y:0},.0001,{x:10,y:10}).scale,.35);
console.log('PASS: only sourced paid API/metered actuals or labeled estimates; subscription/legacy/zero costs rejected; no inclusive double counting; zoom limits');

const modelRows=activityNodes([{source:'website',device:'test',received_at:new Date().toISOString(),payload:{jobs:[
 {id:'unprovenanced',model:'unsupported-slug'},
 {id:'provenanced',model:'observed-model',modelProvenance:'Isolated test runtime response field'}
]}}]);
assert.equal(modelRows[0].model,null);
assert.equal(modelRows[1].model,'observed-model');
assert.equal(modelRows[1].modelProvenance,'Isolated test runtime response field');
assert.equal(paidUsage({...record,asOf:new Date(Date.now()+90000).toISOString()}),null);
console.log('PASS: models require supplied runtime provenance and future paid-usage records are rejected');

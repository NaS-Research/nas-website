#!/usr/bin/env python3
"""Retrieve DailyMed candidates, never auto-select or certify clinical review.
Run with an exported coreDrugs inventory and an external-drive output directory.
No secrets or paid sources. Public documents are data, never executable input.
"""
import argparse, concurrent.futures, datetime, hashlib, json, pathlib, urllib.parse, urllib.request
parser=argparse.ArgumentParser();parser.add_argument('inventory',type=pathlib.Path);parser.add_argument('output',type=pathlib.Path);args=parser.parse_args()
args.output.mkdir(parents=True,exist_ok=True)
inventory=json.loads(args.inventory.read_text()); checked=datetime.datetime.now(datetime.timezone.utc).isoformat()
def collect(drug):
 path=args.output/(drug['slug']+'-candidates.json')
 url='https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?'+urllib.parse.urlencode({'drug_name':drug['generic'],'pagesize':100})
 try:
  with urllib.request.urlopen(url,timeout=30) as response:body=response.read()
  payload=json.loads(body)
  record={'slug':drug['slug'],'query':drug['generic'],'retrieved':checked,'url':url,'sha256':hashlib.sha256(body).hexdigest(),'status':'candidates_only','clinicalReview':'pending','selection':None,'pagination':payload.get('metadata',{}),'candidates':payload.get('data',[]),'note':'Search may return combinations, different routes, supplements, obsolete labels or repackagers. DailyMed presence does not prove FDA approval. Verify ingredients, regulatory record and formulation before selecting.'}
 except Exception as exc:record={'slug':drug['slug'],'url':url,'status':'retrieval_failed','error':str(exc),'clinicalReview':'pending','selection':None}
 path.write_text(json.dumps(record,indent=2)+'\n');return record['slug'],record['status'],len(record.get('candidates',[]))
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
 for row in pool.map(collect,inventory):print(json.dumps(row),flush=True)

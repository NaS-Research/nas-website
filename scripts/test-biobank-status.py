import copy,datetime as dt,importlib.util,json,os,pathlib,subprocess,tempfile,unittest
from unittest.mock import patch
import admin_biobank_status as adapter
spec=importlib.util.spec_from_file_location('reporter',pathlib.Path(__file__).with_name('report-admin-activity.py'));reporter=importlib.util.module_from_spec(spec);spec.loader.exec_module(reporter)
SEED={'schema_version':1,'producer':'unknown','reported_at':None,'state':'unknown','current_task':None,'completed_deliverables':[],'blockers':[]}
def fixture():
 return {**SEED,'producer':'gemini','reported_at':(dt.datetime.now(dt.timezone.utc)-dt.timedelta(seconds=120)).isoformat(),'state':'blocked','current_task':{'id':'BI-001','title':'Synthetic pilot decision'},'completed_deliverables':[{'task_id':'BI-001','path':'results/fixture.md'}],'blockers':[{'task_id':'BI-005','reason':'Independent reviewer not reported'}]}
class StatusTests(unittest.TestCase):
 def setUp(self):
  self.temp=tempfile.TemporaryDirectory();self.addCleanup(self.temp.cleanup);self.root=pathlib.Path(self.temp.name);(self.root/'status').mkdir(mode=0o700);self.file=self.root/'status/department-status.json';self.save(SEED)
 def save(self,data):
  self.file.write_text(json.dumps(data));self.file.chmod(0o600)
 def test_seed_has_no_observation_or_execution(self):
  report=adapter.read_status(self.root);self.assertEqual(report['sourceState'],'awaiting_report');self.assertIsNone(report['reportedAt']);self.assertEqual(report['executionState'],'unknown')
 def test_fixed_contract_original_time_no_artifact_contents(self):
  data=fixture();self.save(data);report=adapter.read_status(self.root);self.assertEqual(report['reportedAt'],data['reported_at']);self.assertEqual(report['blockers'],data['blockers']);self.assertNotIn('model',report);self.assertNotIn('heartbeatAt',report)
  # An absent result reference is accepted only as an unverified producer reference.
  self.assertFalse((self.root/'results/fixture.md').exists())
 def test_invalid_records_rejected(self):
  invalid=[]
  for path in ['/tmp/private','results/../secret','results/link/../../secret','results/a\\b','results/%2e%2e/a','reference/private','results/.hidden']:
   value=fixture();value['completed_deliverables'][0]['path']=path;invalid.append(value)
  for key,value in [('schema_version',True),('producer','other'),('reported_at','2026-10-20T01:00:00'),('reported_at','2099-01-01T00:00:00Z'),('current_task',{'id':'fake','title':'no'}),('state','running')]:
   data=fixture();data[key]=value;invalid.append(data)
  value=fixture();value['credentials']='never';invalid.append(value)
  value=copy.deepcopy(SEED);value['reported_at']='2026-10-20T00:00:00Z';invalid.append(value)
  value=fixture();value['blockers']*=21;invalid.append(value)
  for value in invalid:
   with self.subTest(value=value),self.assertRaises(ValueError):adapter.normalize(value)
 def test_file_privacy_size_links_and_duplicates(self):
  self.file.chmod(0o644)
  with self.assertRaises(ValueError):adapter.read_status(self.root)
  self.file.chmod(0o600);self.file.write_text(' '*16385)
  with self.assertRaises(ValueError):adapter.read_status(self.root)
  self.file.write_text('{"schema_version":1,"schema_version":1}')
  with self.assertRaises(ValueError):adapter.read_status(self.root)
  self.save(SEED);other=self.root/'other';os.link(self.file,other)
  with self.assertRaises(ValueError):adapter.read_status(self.root)
  other.unlink();self.file.unlink();self.file.symlink_to(other)
  with self.assertRaises(OSError):adapter.read_status(self.root)
 def test_symlinked_result_rejected(self):
  self.save(fixture());(self.root/'results').symlink_to('/tmp',target_is_directory=True)
  with self.assertRaises(ValueError):adapter.read_status(self.root)
 def test_failed_poll_preserves_timestamp_without_refresh(self):
  old=adapter.normalize(fixture());reader=adapter.BioBankStatus()
  with patch.object(adapter,'read_status',return_value=old):first=reader.poll()
  with patch.object(adapter,'read_status',side_effect=ValueError('invalid')):second=reader.poll()
  self.assertEqual(second['reportedAt'],first['reportedAt']);self.assertEqual(second['sourceState'],'unavailable');self.assertEqual(second['executionState'],'unknown')
 def test_snapshot_keeps_all_existing_sources_and_events(self):
  event={'source':'research','id':'fixture-event','status':'done','kind':'job','observedAt':'2026-10-01T00:00:00Z'}
  class Progress:
   def poll(self):return adapter.normalize(SEED)
  with patch.object(reporter,'collect_jobs',return_value={s:[] for s in ('website','research','video')}),patch.object(reporter,'collect_task_events',return_value=[event]),patch.object(reporter.subprocess,'run',return_value=subprocess.CompletedProcess([],0,stdout='200')):
   reports=reporter.snapshot(biobank_status=Progress())
  self.assertEqual([r['source'] for r in reports],['website','research','video']);research=reports[1];self.assertEqual(research['jobs'],[event]);self.assertEqual(research['departmentProgress'][0]['reportedAt'],None)
unittest.main()

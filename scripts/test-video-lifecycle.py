import copy,datetime as dt,importlib.util,json,os,pathlib,tempfile,unittest,subprocess,sys
from unittest.mock import patch
import admin_video_lifecycle as reader
NOW=dt.datetime(2026,1,1,tzinfo=dt.timezone.utc)
def iso(v):return v.isoformat().replace('+00:00','Z')
def fixture():
 return {'schema_version':1,'kind':'nas_video_lifecycle_owner_observation','pipeline_id':'NAS-VID-035','observation_mode':'static_owner_snapshot','visibility':'private_admin_only','observed_at_utc':iso(NOW),'expires_at_utc':iso(NOW+dt.timedelta(minutes=15)),
 'organization':{'company_id':'nas-research','institute_id':'nas-institute','department_id':'educational-video-production'},
 'project':{'id':'nas-vid-035-visual-source-v3','name':'Synthetic source preparation','relationship':'completed_source_preparation_reference'},
 'preparation_task':{'id':'00000000-0000-4000-8000-000000000001','registered_agent_id':'fixture-prep-role','relationship':'historical_source_preparation_only','status':'succeeded'},
 'operation':{'id':'00000000-0000-4000-8000-000000000002','display_name':'Synthetic foreground operation','recorded_state':'admitted_not_started','approval_state':'admitted','recorded_at_utc':iso(NOW-dt.timedelta(hours=1)),'execution_task_id':None,'launch_observed':False,'header_qualification_observed':False,'completion_reservation_observed':False,'current_movie_verified':False},
 'worker':{'id':'fixture-company-worker','state':'idle','task_id':None,'assignment_to_operation_verified':False,'pid':1234,'heartbeat_at_utc':iso(NOW-dt.timedelta(seconds=3)),'process_identity_verified_at_utc':iso(NOW-dt.timedelta(seconds=10))},'execution_worker':None,
 'responsibility':{'role':'Core owner/operator','recorded_actor':'root','named_person':None,'evidence':'Synthetic audit fixture'},
 'reason_code':'internal_storage_below_floor','reason':'Synthetic storage blocker <script>unsafe()</script>',
 'resources':{'internal':{'available_bytes':8*1024**3,'required_bytes':10*1024**3,'passed':False},'external':{'available_bytes':200*1024**3,'required_bytes':100*1024**3,'passed':True}},
 'ready_to_start_at_observation':False,'runtime_pause_observed':False,
 'next_action':{'code':'restore_storage_then_fresh_guard_check','description':'Synthetic owner remediation then fresh guards','later_gate':'human_terminal_start_required','role':'Core owner/operator','person':None,'reviewer':None},
 'historical_projects':[{'project_id':'fixture-old-project','relationship':'separate_historical_project','persisted_needs_review_count':8,'records_changed':False}],
 'evidence':{'reference':'fixture-owner-observation/OBSERVATION.json','source_kind':'owner_read_only_observation','history_event_ids':[1,2,3],'history_head':3,'queue_count':0},'source_revision':'fixture-revision','private_authority_secret':'MUST NEVER FORWARD'}
class LifecycleTests(unittest.TestCase):
 def test_fresh_projection_and_exact_expiry(self):
  original=fixture();report=reader.normalize(original,NOW);self.assertEqual(report['sourceState'],'available');self.assertIsNone(report['executionTaskId']);self.assertIsNone(report['executionWorker']);self.assertEqual(report['observedWorkerState'],'idle');self.assertFalse(report['workerAssignedToOperation']);self.assertNotIn('MUST NEVER FORWARD',json.dumps(report));self.assertNotIn('private_authority_secret',report)
  expired=reader.normalize(original,NOW+dt.timedelta(minutes=15));self.assertEqual(expired['sourceState'],'stale');self.assertEqual(expired['observedAt'],report['observedAt']);self.assertEqual(expired['expiresAt'],report['expiresAt']);self.assertEqual(expired['historicalProjects'][0]['persistedNeedsReviewCount'],8)
 def test_unsupported_identities_states_and_times_fail(self):
  for field,value in [('schema_version',2),('schema_version',True),('kind','other'),('pipeline_id','other'),('observed_at_utc',iso(NOW+dt.timedelta(seconds=61))),('observed_at_utc','bad'),('expires_at_utc',iso(NOW-dt.timedelta(seconds=1))),('expires_at_utc',iso(NOW+dt.timedelta(minutes=16))),('expires_at_utc','2026-01-01T01:15:00+01:00')]:
   data=fixture();data[field]=value
   with self.subTest(field=field,value=value),self.assertRaises(ValueError):reader.normalize(data,NOW)
  for target,key,value in [('operation','recorded_state','running'),('operation','launch_observed',True),('operation','execution_task_id','made-up-task'),('worker','assignment_to_operation_verified',True),('worker','state','busy'),('responsibility','named_person','Fake person'),('next_action','reviewer','Fake reviewer'),('evidence','reference','../../authority.json')]:
   data=fixture();data[target][key]=value
   with self.subTest(target=target,key=key),self.assertRaises(ValueError):reader.normalize(data,NOW)
 def test_resource_floor_and_types_are_validated(self):
  for available,required,passed in [(True,10*1024**3,False),(-1,10*1024**3,False),(8*1024**3,1,False),(8*1024**3,10*1024**3,True)]:
   data=fixture();data['resources']['internal']={'available_bytes':available,'required_bytes':required,'passed':passed}
   with self.subTest(available=available),self.assertRaises(ValueError):reader.normalize(data,NOW)
 def test_bounded_fixed_file_and_missing_invalid_behavior(self):
  with tempfile.TemporaryDirectory() as folder:
   root=pathlib.Path(folder);source=root/'status.json'
   with os.fdopen(os.open(source,os.O_WRONLY|os.O_CREAT|os.O_EXCL,0o600),'w') as stream:stream.write(json.dumps(fixture()))
   with patch.object(reader,'STATUS_FILE',source):
    # Reading test fixtures invokes no actual runtime source, credentials, DB or journal.
    first=reader.read_status();self.assertEqual(first['sourceState'],'stale')
    source.write_text('{bad');self.assertEqual(reader.VideoLifecycle().poll()['sourceState'],'unavailable')
    source.write_text(' '*16385);self.assertEqual(reader.VideoLifecycle().poll()['sourceState'],'unavailable')
    source.unlink();source.symlink_to(root/'absent');self.assertEqual(reader.VideoLifecycle().poll()['sourceState'],'unavailable')
    source.unlink();self.assertEqual(reader.VideoLifecycle().poll()['sourceState'],'unavailable')
 def test_fifo_leaf_returns_unavailable_without_hanging(self):
  with tempfile.TemporaryDirectory() as folder:
   root=pathlib.Path(folder);source=root/'status.json'
   with os.fdopen(os.open(source,os.O_WRONLY|os.O_CREAT|os.O_EXCL,0o600),'w') as stream:stream.write(json.dumps(fixture()))
   with patch.object(reader,'STATUS_FILE',source):self.assertEqual(reader.read_status()['sourceState'],'stale')
   # Successful regular baseline proves the actual leaf is reached, not rejected at a symlink ancestor.
   source.unlink();os.mkfifo(source,0o600)
   code="import sys,pathlib,json;sys.path.insert(0,sys.argv[1]);import admin_video_lifecycle as r;r.STATUS_FILE=pathlib.Path(sys.argv[2]);print(json.dumps(r.VideoLifecycle().poll()))"
   result=subprocess.run([sys.executable,'-B','-c',code,str(pathlib.Path(__file__).parent),str(source)],capture_output=True,text=True,timeout=2,check=True)
   self.assertEqual(json.loads(result.stdout)['sourceState'],'unavailable')
 def test_read_projection_retains_source_time_across_polls(self):
  report=reader.normalize(fixture(),NOW)
  with patch.object(reader,'read_status',return_value=report):
   observer=reader.VideoLifecycle();self.assertEqual(observer.poll()['observedAt'],observer.poll()['observedAt'])
  with patch.object(reader,'read_status',side_effect=PermissionError('no source access')):
   result=observer.poll();self.assertEqual(result,{'schemaVersion':1,'teamId':'team:video','pipelineId':'NAS-VID-035','sourceState':'unavailable'})
 def test_publisher_keeps_existing_producers(self):
  spec=importlib.util.spec_from_file_location('reporter',pathlib.Path(__file__).with_name('report-admin-activity.py'));reporter=importlib.util.module_from_spec(spec);spec.loader.exec_module(reporter)
  event={'id':'fixture-event','source':'video','kind':'job','status':'done'}
  class Lifecycle:
   def poll(self):return reader.normalize(fixture(),NOW)
  class Response:stdout='200'
  with patch.object(reporter,'collect_jobs',return_value={key:[] for key in ['website','research','video']}),patch.object(reporter,'collect_task_events',return_value=[event]),patch.object(reporter.subprocess,'run',return_value=Response()):
   rows=reporter.snapshot(video_lifecycle=Lifecycle())
  self.assertEqual([r['source'] for r in rows],['website','research','video']);self.assertEqual(rows[2]['jobs'],[event]);self.assertEqual(rows[2]['videoLifecycle']['executionWorker'],None)
unittest.main()

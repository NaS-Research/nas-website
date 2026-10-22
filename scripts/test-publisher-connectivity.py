import copy,datetime as dt,importlib.util,json,os,pathlib,subprocess,sys,tempfile,time,unittest
from unittest.mock import patch
import admin_activity_events as events
import admin_core_observer as core
import admin_biobank_status as biobank
spec=importlib.util.spec_from_file_location('reporter',pathlib.Path(__file__).with_name('report-admin-activity.py'));reporter=importlib.util.module_from_spec(spec);spec.loader.exec_module(reporter)
class ConnectivityTests(unittest.TestCase):
 def test_failed_census_does_not_block_other_sources(self):
  old='2026-01-01T00:00:00Z';event={'id':'task:fixture','source':'video','kind':'agent','status':'blocked','observedAt':old}
  with patch.object(reporter,'collect_jobs',side_effect=PermissionError()),patch.object(reporter,'collect_task_events',return_value=[event]),patch.object(reporter.subprocess,'run',return_value=subprocess.CompletedProcess([],0,stdout='200')):
   reporter.PROCESS_HEALTH={'state':'unavailable'};rows=reporter.snapshot()
  self.assertEqual(len(rows),3);self.assertEqual(rows[2]['jobs'],[event]);self.assertEqual(rows[2]['telemetry']['processCensus']['state'],'unavailable');self.assertEqual(rows[2]['status'],'issue');self.assertEqual(rows[2]['jobs'][0]['observedAt'],old)
 def test_combined_capacity_and_byte_budget(self):
  now=dt.datetime.now(dt.timezone.utc).isoformat();records=[{'id':'task:'+str(i),'kind':'job','source':'video','status':'running','observedAt':now,'task':'x'*1000} for i in range(100)]
  class Observer:
   def poll(self):return [{'id':'task:core','kind':'job','source':'video','status':'blocked','observedAt':now}],{'state':'available'}
  with patch.object(reporter,'collect_jobs',return_value={s:[] for s in ('website','research','video')}),patch.object(reporter,'collect_task_events',return_value=records),patch.object(reporter.subprocess,'run',return_value=subprocess.CompletedProcess([],0,stdout='200')):
   rows=reporter.snapshot(core_observer=Observer())
  self.assertLessEqual(len(rows[2]['jobs']),100);self.assertGreater(rows[2]['telemetry']['omittedObservations'],0);self.assertEqual(rows[2]['status'],'issue');self.assertLessEqual(len(json.dumps(rows,separators=(',',':')).encode()),60000);self.assertEqual(len(records),100)
 def test_unknown_project_is_not_video(self):
  self.assertIsNone(reporter.classify('/Volumes/AGNDJ 6TB/NaS-Work/Ventures/Cookprint','ordinary-work'))
  self.assertEqual(reporter.classify('/Volumes/AGNDJ 6TB/NaS-Work/Video','website-build'),'website')
 def test_core_blocked_and_last_known_failure(self):
  now=time.time();data={'/registry':{'agents':[]},'/status':{'timestamp':now,'workers':[]},'/tasks?limit=20':[{'id':'fixture','status':'blocked','updated_at':now-100,'title':'Synthetic task'}]}
  observer=core.CoreObserver(lambda route:copy.deepcopy(data[route]));first,_=observer.poll();self.assertEqual(first[0]['status'],'blocked');self.assertEqual(set(data),core.ROUTES)
  observer.get=lambda route:(_ for _ in ()).throw(OSError());failed,_=observer.poll();self.assertEqual(failed[0]['status'],'unknown');self.assertEqual(failed[0]['lastKnownStatus'],'blocked');self.assertEqual(failed[0]['observedAt'],first[0]['observedAt'])
 def test_nonregular_readers_return_within_bound(self):
  # Resolve scratch ancestors; the successful baseline proves each test reaches the leaf.
  with tempfile.TemporaryDirectory() as folder:
   root=pathlib.Path(folder).resolve();source=root/'input.json';source.write_text('{}');source.chmod(0o600)
   with patch.object(events,'ROOT',root):self.assertEqual(events.read_private_json(source),{})
   status=root/'status';status.mkdir(mode=0o700);leaf=status/'department-status.json'
   seed={'schema_version':1,'producer':'unknown','reported_at':None,'state':'unknown','current_task':None,'completed_deliverables':[],'blockers':[]};leaf.write_text(json.dumps(seed));leaf.chmod(0o600);self.assertEqual(biobank.read_status(root)['sourceState'],'awaiting_report')
   source.unlink();os.mkfifo(source,0o600);leaf.unlink();os.mkfifo(leaf,0o600)
   for module,statement in [('admin_activity_events','m.ROOT=root;m.read_private_json(root/"input.json")'),('admin_biobank_status','m.read_status(root)'),('admin_core_observer','m.CREDENTIALS=root/"input.json";m.reader_token()')]:
    code='import pathlib,sys;sys.path.insert(0,sys.argv[1]);import '+module+' as m;root=pathlib.Path(sys.argv[2]);\ntry:\n '+statement+'\nexcept (OSError,ValueError):print("rejected")'
    result=subprocess.run([sys.executable,'-B','-c',code,str(pathlib.Path(__file__).parent),str(root)],capture_output=True,text=True,timeout=2,check=True);self.assertEqual(result.stdout.strip(),'rejected')
if __name__=='__main__':unittest.main()

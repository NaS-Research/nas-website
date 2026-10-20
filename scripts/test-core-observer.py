import copy
import datetime as dt
import importlib.util
import pathlib
import time
import unittest
from unittest.mock import patch

spec=importlib.util.spec_from_file_location('observer',pathlib.Path(__file__).with_name('admin_core_observer.py'))
module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module)

class ObserverTests(unittest.TestCase):
    def test_true_states_recovery_and_no_configuration_instances(self):
        now=time.time()
        data={'/registry':{'agents':[{'id':'future-qa','name':'Qa','org_id':'educational-video-production','active':False},{'id':'nas035-script-owner','org_id':'educational-video-production','active':True}]},'/status':{'timestamp':now,'workers':[{'id':'company-worker','pid':1473,'heartbeat_at':now-1,'state':'idle','task_id':None}],'tasks':{'succeeded':83},'video_authority_epochs':[{'id':'epoch','state':'active'}]},'/tasks?limit=20':[{'id':'operation','agent_id':'nas035-script-owner','title':'Current episode','status':'succeeded','updated_at':now-1000,'history':[{'id':42}],'payload':{'secret':'DO NOT FORWARD'},'result':{'private':'DO NOT FORWARD'}}]}
        calls=[]
        def get(route):
            calls.append(route)
            return copy.deepcopy(data[route])
        observer=module.CoreObserver(get)
        records,meta=observer.poll()
        self.assertEqual(meta['state'],'available');self.assertEqual(set(calls),module.ROUTES)
        self.assertEqual(meta['registryCount'],2);self.assertEqual(meta['workerCount'],1)
        self.assertEqual(len(records),2);self.assertTrue(all(r['kind']=='job' for r in records))
        self.assertEqual(records[0]['status'],'idle');self.assertEqual(records[0]['placement'],'unassigned')
        self.assertEqual(records[1]['status'],'done');self.assertNotIn('roleId',records[1])
        self.assertEqual(records[1]['originEventId'],'42');self.assertEqual(records[1]['stateChangedAt'],module.stamp(now-1000));self.assertGreater(dt.datetime.fromisoformat(records[1]['observedAt']).timestamp(),now-5);self.assertNotIn('DO NOT FORWARD',str(records))
        self.assertFalse(meta['roleConfigurations'][0]['configuredActive'])
        original=records[0]['observedAt'];observer.get=lambda _:(_ for _ in ()).throw(TimeoutError('secret response must never be logged'))
        failed,meta=observer.poll();self.assertEqual(meta['state'],'unavailable');self.assertEqual(failed[0]['observedAt'],original);self.assertEqual(failed[0]['status'],'unknown');self.assertNotIn('secret',str(meta))
        observer.get=get;recovered,meta=observer.poll();self.assertEqual(meta['state'],'available');self.assertEqual(recovered[0]['observedAt'],original)
        data['/status']['workers'][0].update(state='busy',task_id='operation');data['/tasks?limit=20'][0].update(status='running',worker_id='company-worker',lease_expires_at=now+60)
        records,_=observer.poll();self.assertEqual(records[0]['status'],'running');self.assertEqual(records[1]['status'],'running')
        data['/status']['workers'][0]['heartbeat_at']=now-100
        records,_=observer.poll();self.assertEqual(records[0]['status'],'unknown');self.assertEqual(records[1]['status'],'unknown')

    def test_review_blockers_forward_only_explicit_safe_fields(self):
        now=time.time()
        task={'project_id':'old-fixture-project','id':'review-task','agent_id':'video-native-worker','title':'Example review','status':'needs_review','worker_id':None,'updated_at':now-86400,'history':[{'id':8,'actor':'previous-worker','detail':{'error_code':'productive_stall','outcome':'needs_review','secret':'NEVER FORWARD'}}],'payload':{'secret':'NEVER FORWARD'},'result':{'secret':'NEVER FORWARD'}}
        data={'/registry':{'projects':[{'id':'old-fixture-project','name':'Historical fixture project'}],'agents':[{'id':'video-native-worker','org_id':'educational-video-production','active':True}]},'/status':{'timestamp':now,'workers':[],'tasks':{},'video_authority_epochs':[]},'/tasks?limit=20':[task]}
        observer=module.CoreObserver(lambda route:copy.deepcopy(data[route]));records,_=observer.poll();blocker=records[0]['blocker']
        self.assertEqual(records[0]['projectId'],'old-fixture-project');self.assertEqual(records[0]['projectName'],'Historical fixture project')
        self.assertEqual(records[0]['status'],'needs_you');self.assertEqual(blocker['taskId'],'review-task');self.assertEqual(blocker['registryIdentityId'],'video-native-worker');self.assertEqual(blocker['workerAssignment'],'unassigned');self.assertNotIn('workerId',blocker);self.assertEqual(blocker['lastActor'],'previous-worker');self.assertEqual(blocker['reasonCode'],'productive_stall');self.assertNotIn('requiredPerson',blocker);self.assertNotIn('nextAction',blocker);self.assertNotIn('NEVER FORWARD',str(records))
        task['history'][-1]['detail']['error_code']='bad token=private';records,_=observer.poll();self.assertNotIn('reasonCode',records[0]['blocker'])

    def test_get_only_and_redirect_rejection(self):
        with self.assertRaises(ValueError):module.stamp(None)
        with self.assertRaises(ValueError):module.fetch('/reconcile','never-send')
        self.assertIsNone(module.NoRedirect().redirect_request(None,None,302,'',{},'https://example.com'))
        captured={}
        class Response:
            def __enter__(self):return self
            def __exit__(self,*_):pass
            def read(self,limit):captured['limit']=limit;return b'{}'
        class Opener:
            def open(self,request,timeout):captured.update(method=request.get_method(),url=request.full_url,timeout=timeout);return Response()
        with patch.object(module.urllib.request,'build_opener',return_value=Opener()):module.fetch('/status','never-log-token')
        self.assertEqual(captured['method'],'GET');self.assertEqual(captured['url'],'http://127.0.0.1:18766/status');self.assertEqual(captured['timeout'],4);self.assertEqual(captured['limit'],2097153)

if __name__=='__main__':unittest.main()

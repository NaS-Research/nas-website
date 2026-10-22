import copy
import datetime as dt
import importlib.util
import json
import pathlib
import subprocess
import sys
import tempfile
import unittest
from unittest import mock
import admin_artist_handoff as handoff
import admin_activity_events as events

BASE=dt.datetime(2020,1,1,tzinfo=dt.timezone.utc)
def stamp(seconds=0):return (BASE+dt.timedelta(seconds=seconds)).isoformat()
def binding():return {'threadId':'fixture-owner','hostId':'fixture-host','roleId':handoff.ROLE,'assignment':'Fixture environment refinement'}
def snapshot(seconds=0,status='inProgress',turn='fixture-turn'):
    return {'schemaVersion':1,'source':'codex.read_thread','readAt':stamp(seconds),
        'thread':{'id':'fixture-owner','hostId':'fixture-host','kind':'codex','title':'Exact fixture task title','status':{'type':'active'},'updatedAt':1577836800},
        'turns':[{'id':turn,'status':status,'startedAt':None,'completedAt':None}]}
def feedback():
    return {'id':'feedback-fixture-1','responsibility':'asset-scene','workKind':'refine_existing','text':'Refine the same environment material',
        'artifact':'fixture-vessel','version':'v0.1.0','acceptanceEvidence':['Matched before/after images','Recorded visual review findings'],
        'nextAction':'Prepare a new candidate version in the existing owner task','receivedAt':stamp(),'provenance':'Synthetic user feedback fixture'}

class ArtistHandoffTests(unittest.TestCase):
    def test_exact_task_and_turn_mapping_without_model_or_heartbeat_inference(self):
        event=handoff.project(snapshot(),binding(),now=BASE)['event']
        self.assertEqual(event['id'],'task:fixture-owner');self.assertEqual(event['executionId'],'fixture-turn')
        self.assertEqual(event['roleId'],handoff.ROLE);self.assertEqual(event['name'],'Exact fixture task title')
        self.assertEqual(event['status'],'running');self.assertIn('status snapshot',event['provenance'])
        for field in ['heartbeatAt','runtimeModel','requestedModel','model','parentId','epoch','processId']:
            self.assertNotIn(field,event)

    def test_unchanged_poll_does_not_renew_observation(self):
        first=handoff.project(snapshot(),binding(),now=BASE)
        repeated=snapshot(100);repeated['thread']['updatedAt']+=100;repeated['thread']['title']='Renamed task'
        second=handoff.project(repeated,binding(),first['cursor'],now=BASE+dt.timedelta(seconds=100))
        self.assertIsNone(second['event']);self.assertEqual(second['cursor']['event'],first['event'])
        self.assertEqual(second['cursor']['firstObservedAt'],stamp());self.assertEqual(second['cursor']['lastCheckedAt'],stamp(100))
        self.assertFalse(second['continuousTransport'])

    def test_terminal_transition_and_new_turn_keep_one_stable_task(self):
        first=handoff.project(snapshot(),binding(),now=BASE)
        done=handoff.project(snapshot(10,'completed'),binding(),first['cursor'],now=BASE+dt.timedelta(seconds=10))
        next_turn=handoff.project(snapshot(20,turn='next-verified-turn'),binding(),done['cursor'],now=BASE+dt.timedelta(seconds=20))
        self.assertEqual(done['event']['status'],'done');self.assertEqual(next_turn['event']['status'],'running')
        self.assertEqual(first['event']['id'],next_turn['event']['id'])
        self.assertEqual(next_turn['event']['executionId'],'next-verified-turn')
        for result in [done,next_turn]:self.assertNotIn('runtimeModel',result['event'])

    def test_out_of_order_and_conflicting_same_time(self):
        first=handoff.project(snapshot(20),binding(),now=BASE+dt.timedelta(seconds=20))
        old=handoff.project(snapshot(10,'completed'),binding(),first['cursor'],now=BASE+dt.timedelta(seconds=20))
        self.assertEqual(old['disposition'],'older_snapshot_ignored');self.assertEqual(old['cursor'],first['cursor'])
        with self.assertRaises(ValueError):handoff.project(snapshot(20,'completed'),binding(),first['cursor'],now=BASE+dt.timedelta(seconds=20))

    def test_fail_closed_scope_shape_time_and_cursor(self):
        for field,value in [('id','other-owner'),('hostId','other-host'),('kind','chatgpt')]:
            bad=snapshot();bad['thread'][field]=value
            with self.assertRaises(ValueError):handoff.project(bad,binding(),now=BASE)
        bad=snapshot();bad['turns'][0]['items']=[{'text':'Do not forward transcripts'}]
        with self.assertRaises(ValueError):handoff.project(bad,binding(),now=BASE)
        with self.assertRaises(ValueError):handoff.project(snapshot(31),binding(),now=BASE)
        with self.assertRaises(ValueError):handoff.project(snapshot(),{**binding(),'roleId':'role:video:qa'},now=BASE)
        prior=handoff.project(snapshot(),binding(),now=BASE)['cursor'];prior['event']['roleId']='role:video:qa'
        with self.assertRaises(ValueError):handoff.project(snapshot(1),binding(),prior,now=BASE+dt.timedelta(seconds=1))
        self.assertEqual(handoff.project(snapshot(status='unrecognized'),binding(),now=BASE)['event']['status'],'unknown')

    def test_busy_stale_unknown_and_unconnected_roles_never_dispatch(self):
        now=BASE+dt.timedelta(seconds=100)
        self.assertEqual(handoff.feedback_plan(feedback(),binding(),snapshot(100),now=now)['state'],'deferred_owner_busy')
        self.assertEqual(handoff.feedback_plan(feedback(),binding(),snapshot(status='completed'),now=now)['state'],'blocked_stale_owner_snapshot')
        self.assertEqual(handoff.feedback_plan(feedback(),binding(),snapshot(100,'unknown'),now=now)['state'],'blocked_owner_state_unknown')
        for role in ['research','visual-qa','animation','anatomy-histology-cell-biology']:
            plan=handoff.feedback_plan({**feedback(),'responsibility':role,'workKind':'scientific_brief'},binding(),snapshot(100,'completed'),now=now)
            self.assertEqual(plan['state'],'blocked_owner_not_connected');self.assertIsNone(plan['dispatchRequest']);self.assertFalse(plan['dispatched'])

    def test_ready_handoff_uses_only_same_owner_and_evidence(self):
        plan=handoff.feedback_plan(feedback(),binding(),snapshot(status='completed'),now=BASE)
        self.assertEqual(plan['state'],'ready_for_coordinator');self.assertFalse(plan['canonicalQueueAdmitted']);self.assertFalse(plan['dispatched'])
        request=plan['dispatchRequest'];self.assertEqual(request['tool'],'mcp__codex_app__send_message_to_thread')
        self.assertEqual(request['arguments']['threadId'],'fixture-owner')
        self.assertNotIn('model',request['arguments']);self.assertNotIn('thinking',request['arguments'])
        for required in ['feedback-fixture-1','v0.1.0','Matched before/after images','Next action','sole artifact writer','unreviewed']:
            self.assertIn(required,request['arguments']['prompt'])

    def test_receipts_block_duplicate_and_uncertain_send(self):
        for status,expected in [('accepted','already_sent'),('uncertain','reconcile_uncertain_send')]:
            receipt={'feedbackId':feedback()['id'],'threadId':'fixture-owner','state':status,'observedAt':stamp()}
            plan=handoff.feedback_plan(feedback(),binding(),snapshot(status='completed'),receipt,now=BASE)
            self.assertEqual(plan['state'],expected);self.assertIsNone(plan['dispatchRequest'])
        bad=feedback();bad['acceptanceEvidence']=[]
        with self.assertRaises(ValueError):handoff.feedback_plan(bad,binding(),snapshot(),now=BASE)

    def test_new_environment_requires_complete_source_linked_brief(self):
        item={**feedback(),'workKind':'create_environment'}
        plan=handoff.feedback_plan(item,binding(),snapshot(status='completed'),now=BASE)
        self.assertEqual(plan['state'],'blocked_scientific_brief');self.assertIsNone(plan['dispatchRequest'])
        brief={'id':'brief-fixture','version':'v1','artifact':item['artifact'],'state':'ready',
            'sourceLinks':['https://example.org/synthetic-source'],'coverage':{key:'Synthetic specification detail' for key in handoff.BRIEF_FIELDS},
            'readyAt':stamp(),'provenance':'Synthetic specialist readiness fixture'}
        ready=handoff.feedback_plan(item,binding(),snapshot(status='completed'),now=BASE,brief=brief)
        self.assertEqual(ready['state'],'ready_for_coordinator');self.assertFalse(ready['dispatched'])
        self.assertIn('brief-fixture',ready['dispatchRequest']['arguments']['prompt'])
        for bad in [{**brief,'artifact':'other'}, {**brief,'state':'draft'}, {**brief,'sourceLinks':[]},
                    {**brief,'sourceLinks':['file:///private/source']}, {**brief,'coverage':{}}, {**brief,'readyAt':stamp(31)}]:
            with self.assertRaises(ValueError):handoff.feedback_plan(item,binding(),snapshot(status='completed'),now=BASE,brief=bad)
        with self.assertRaises(ValueError):handoff.feedback_plan({**feedback(),'workKind':'unclassified'},binding(),snapshot(),now=BASE)

    def test_existing_progress_reconciles_without_discard_or_fake_specialist(self):
        plan=handoff.feedback_plan(feedback(),binding(),snapshot(status='completed'),now=BASE)
        self.assertEqual(plan['scientificReconciliation'],'required_before_acceptance')
        prompt=plan['dispatchRequest']['arguments']['prompt']
        for expected in ['Preserve safe existing vessel progress','Do not create a new environment','review actual rendered output',
                         'not licensed clinician sign-off','one day behind','version-pinned','Never promote unfinished work']:
            self.assertIn(expected,prompt)
        specialist=handoff.feedback_plan({**feedback(),'responsibility':'anatomy-histology-cell-biology','workKind':'scientific_brief'},binding(),snapshot(status='completed'),now=BASE)
        self.assertEqual(specialist['ownerRoleId'],handoff.SPECIALIST);self.assertIsNone(specialist['ownerThreadId'])
        self.assertEqual(specialist['state'],'blocked_owner_not_connected');self.assertFalse(specialist['canonicalQueueAdmitted'])

    def test_existing_writer_collector_and_browser_staleness(self):
        spec=importlib.util.spec_from_file_location('collector',pathlib.Path(__file__).with_name('report-admin-activity.py'))
        collector=importlib.util.module_from_spec(spec);spec.loader.exec_module(collector)
        first=handoff.project(snapshot(),binding(),now=BASE)
        later=handoff.project(snapshot(100),binding(),first['cursor'],now=BASE+dt.timedelta(seconds=100))
        with tempfile.TemporaryDirectory() as folder:
            store=pathlib.Path(folder)/'events.json'
            events.write_event(store,first['event']);before=store.read_bytes()
            if later['event']:events.write_event(store,later['event'])
            self.assertEqual(store.read_bytes(),before)
            with mock.patch.object(collector,'collect_jobs',return_value={k:[] for k in ['website','research','video']}),mock.patch.object(collector.subprocess,'run',return_value=subprocess.CompletedProcess([],0,stdout='200')):
                reports=collector.snapshot(store)
            row=next(r for r in reports if r['source']=='video')
            self.assertEqual(len(row['jobs']),1);self.assertEqual(row['jobs'][0]['observedAt'],stamp())
            # Actual UI projection must remain offline despite fresh transport.
            root=pathlib.Path(__file__).resolve().parent.parent
            script="""import fs from 'node:fs';import {activityNodes} from './src/lib/admin/agent-tree.mjs';const payload=JSON.parse(fs.readFileSync(0,'utf8'));const now=Date.now();payload.telemetry.capturedAt=new Date(now).toISOString();const nodes=activityNodes([{device:'test',source:'video',received_at:new Date(now).toISOString(),payload}],now);if(nodes.length!==1||nodes[0].status!=='offline')process.exit(1);console.log(nodes[0].status);"""
            result=subprocess.run(['/opt/homebrew/bin/node','--input-type=module','-e',script],cwd=root,input=json.dumps(row),text=True,capture_output=True,timeout=10)
            self.assertEqual(result.returncode,0,result.stderr)

if __name__=='__main__':unittest.main(verbosity=2)

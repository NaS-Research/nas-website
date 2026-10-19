import contextlib
import datetime as dt
import importlib.util
import json
import multiprocessing as mp
import os
import pathlib
import subprocess
import sys
import tempfile
import time
import unittest
from unittest import mock
import admin_activity_events as events

SCRIPTS = pathlib.Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location('collector', SCRIPTS/'report-admin-activity.py')
collector = importlib.util.module_from_spec(spec)
spec.loader.exec_module(collector)

def entry(identity, status='running', **extra):
    return {'id':'task:'+identity, 'kind':'agent', 'source':'website', 'name':'Test producer',
            'task':'Validate private observations', 'status':status, 'observedAt':events.stamp(),
            'provenance':'Isolated unit-test observation', **extra}

def concurrent_writer(path, worker, barrier, errors):
    try:
        barrier.wait()
        for i in range(6):
            events.write_event(path, entry(str(worker)+'-'+str(i)))
    except BaseException as error:
        errors.put(type(error).__name__)

def hold_lock(path, ready, release, suffix='.lock'):
    with events.private_lock(path, suffix=suffix):
        ready.set()
        release.wait(5)

class EventTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.path = pathlib.Path(self.tmp.name)/'events.json'
        collector.TASK_EVENT_CACHE.clear()

    def tearDown(self):
        self.tmp.cleanup()

    def test_schema_and_forwarding(self):
        usage={'kind':'actual','billingType':'api','amountUsd':.25,'provider':'Test provider',
               'service':'Test metered service','provenance':'Isolated test receipt',
               'recordId':'test-receipt','asOf':events.stamp(),'scope':'exclusive','secret':'omit'}
        events.write_event(self.path,entry('model',model='test-model',modelProvenance='Runtime response metadata',
                                          paidUsage=usage,secret='never-store-or-forward'))
        stored=events.read_events(self.path)[0]
        self.assertEqual(stored['model'],'test-model')
        self.assertEqual(stored['paidUsage']['amountUsd'],.25)
        self.assertNotIn('secret',json.dumps(stored))
        self.assertEqual(stored['kind'],'agent')
        self.assertIn('writtenAt',stored)
        forwarded=collector.collect_task_events(self.path)[0]
        self.assertEqual(forwarded['modelProvenance'],'Runtime response metadata')
        self.assertEqual(forwarded['paidUsage']['recordId'],'test-receipt')
        events.write_event(self.path,entry('missing-provenance',model='do-not-infer',
                                         paidUsage={**usage,'billingType':'subscription'}))
        sanitized=events.read_events(self.path)[1]
        self.assertNotIn('model',sanitized)
        self.assertNotIn('paidUsage',sanitized)
        for bad in [0,-1,True,float('inf'),float('nan')]:
            self.assertIsNone(events.paid_usage({**usage,'amountUsd':bad}))
        self.assertIsNone(events.paid_usage({**usage,'kind':'estimate'}))
        self.assertEqual(events.paid_usage({**usage,'kind':'estimate','basis':'Provided price times observed units'})['kind'],'estimate')
        self.assertEqual(events.paid_usage({**usage,'scope':'inclusive'})['scope'],'unconfirmed')

    def test_invalid_core_and_paths(self):
        for change in [{'source':'invented'},{'status':'imagined'},{'id':'wrong'},
                       {'kind':'supervisor'},{'name':'x'*141},{'observedAt':'not-a-time'},
                       {'observedAt':(dt.datetime.now(dt.timezone.utc)+dt.timedelta(minutes=5)).isoformat()},
                       {'parentId':'task:x'}]:
            with self.assertRaises(events.EventStoreError):
                events.write_event(self.path,entry('x',**change))
        with self.assertRaises(events.EventStoreError):
            events.write_event('/tmp/not-an-approved-event-store.json',entry('outside'))
        events.write_event(self.path,entry('private'))
        self.assertEqual(self.path.stat().st_mode & 0o077,0)
        self.path.chmod(0o644)
        with self.assertRaises(events.EventStoreError):
            events.read_events(self.path)
        self.path.chmod(0o600)
        target=self.path.with_name('target.json')
        target.write_text('{}')
        link=self.path.with_name('link.json')
        link.symlink_to(target)
        with self.assertRaises(events.EventStoreError):
            events.write_event(link,entry('link'))
        lock=self.path.with_name(self.path.name+'.lock')
        lock.unlink()
        lock.symlink_to(target)
        with self.assertRaises(OSError):
            events.read_events(self.path)
        self.assertEqual(target.read_text(),'{}')

    def test_corruption_and_path_scoped_cache(self):
        events.write_event(self.path,entry('cached'))
        collector.collect_task_events(self.path)
        before=events.read_events(self.path)[0]['observedAt']
        self.path.write_text('{broken')
        with self.assertRaises(events.EventStoreError):
            events.write_event(self.path,entry('not-overwritten'))
        fallback=collector.collect_task_events(self.path)
        self.assertEqual(fallback[0]['status'],'unknown')
        self.assertEqual(fallback[0]['observedAt'],before)
        self.assertEqual(collector.collect_task_events(self.path.with_name('another.json')),[])
        self.assertEqual(self.path.read_text(),'{broken')

    def test_ordering_and_idempotency(self):
        first=entry('stable')
        events.write_event(self.path,first)
        events.write_event(self.path,entry('second'))
        newer={**first,'status':'done','observedAt':events.stamp()}
        events.write_event(self.path,newer)
        saved=self.path.read_bytes()
        self.assertFalse(events.write_event(self.path,first))
        self.assertFalse(events.write_event(self.path,newer))
        self.assertEqual(self.path.read_bytes(),saved)
        self.assertEqual(events.read_events(self.path)[0]['id'],'task:stable')
        self.assertEqual(events.read_events(self.path)[0]['status'],'done')

    def test_retention_never_evicts_unresolved_work(self):
        with mock.patch.object(events,'MAX_TASKS',4),mock.patch.object(events,'TERMINAL_KEEP',2):
            for i in range(4):
                events.write_event(self.path,entry('live-'+str(i)))
            saved=self.path.read_bytes()
            with self.assertRaises(events.CapacityError):
                events.write_event(self.path,entry('would-evict'))
            self.assertEqual(self.path.read_bytes(),saved)
            for i in range(4):
                events.write_event(self.path,entry('live-'+str(i),'done'))
            remaining=events.read_events(self.path)
            self.assertEqual(len(remaining),2)
            archived=[task for p in self.path.with_name('events.archive').glob('*.json')
                      for task in json.loads(p.read_text())['tasks']]
            self.assertEqual(len(archived),2)
            self.assertTrue(all(task['status']=='done' for task in archived))
            self.assertTrue(all(p.stat().st_mode&0o077==0 for p in self.path.with_name('events.archive').glob('*')))

    def test_archive_capacity_and_byte_budget_preserve_store(self):
        events.write_event(self.path,entry('done','done'))
        saved=self.path.read_bytes()
        with mock.patch.object(events,'TERMINAL_KEEP',0),mock.patch.object(events,'MAX_ARCHIVE_BYTES',0):
            with self.assertRaises(events.CapacityError):
                events.write_event(self.path,entry('new'))
        self.assertEqual(self.path.read_bytes(),saved)
        with mock.patch.object(events,'MAX_STORE_BYTES',10):
            with self.assertRaises(events.CapacityError):
                events.write_event(self.path,entry('too-large'))
        self.assertEqual(self.path.read_bytes(),saved)

    def test_concurrent_writers_and_readers(self):
        context=mp.get_context('fork')
        barrier=context.Barrier(13)
        errors=context.Queue()
        children=[context.Process(target=concurrent_writer,args=(str(self.path),i,barrier,errors)) for i in range(12)]
        for child in children:child.start()
        barrier.wait()
        while any(child.is_alive() for child in children):
            if self.path.exists():
                self.assertTrue(all(task['id'].startswith('task:') for task in events.read_events(self.path)))
            time.sleep(.005)
        for child in children:
            child.join(5)
            self.assertEqual(child.exitcode,0)
        self.assertTrue(errors.empty())
        self.assertEqual(len(events.read_events(self.path)),72)
        self.assertEqual(len({task['id'] for task in events.read_events(self.path)}),72)

    def test_lock_contention_and_publisher_lease(self):
        context=mp.get_context('fork')
        for suffix in ['.lock','.publisher.lock']:
            ready,release=context.Event(),context.Event()
            child=context.Process(target=hold_lock,args=(str(self.path),ready,release,suffix))
            child.start()
            self.assertTrue(ready.wait(3))
            try:
                with self.assertRaises(events.EventStoreError):
                    with events.private_lock(self.path,timeout=.05,suffix=suffix):
                        self.fail('A second owner acquired an active lease')
            finally:
                release.set();child.join(5)
            with events.private_lock(self.path,timeout=.05,suffix=suffix):
                pass

    def test_snapshot_deduplicates_own_guarded_job(self):
        events.write_event(self.path,entry('process',kind='job',origin='guarded-process',
                                          runnerPid='123',processId='124',elapsedSeconds=1))
        guarded={'website':[{'id':'123','name':'website-build','kind':'job','status':'running'}],
                 'research':[],'video':[]}
        with mock.patch.object(collector,'collect_jobs',return_value=guarded),mock.patch.object(
                collector.subprocess,'run',return_value=subprocess.CompletedProcess([],0,stdout='200')):
            rows=collector.snapshot(self.path)
        self.assertEqual(len(rows[0]['jobs']),1)
        self.assertEqual(rows[0]['jobs'][0]['kind'],'job')
        self.assertEqual(rows[0]['telemetry']['coverage'],'partial')
        self.assertLessEqual(len(json.dumps(rows).encode()),65536)

    def test_terminal_or_stale_process_cannot_hide_reused_runner_pid(self):
        guarded={'website':[{'id':'123','name':'New unrelated runner','kind':'job','status':'running'}],
                 'research':[],'video':[]}
        for status,age in [('done',0),('running',100)]:
            observed=(dt.datetime.now(dt.timezone.utc)-dt.timedelta(seconds=age)).isoformat()
            events.write_event(self.path,entry('old-'+status,status,kind='job',origin='guarded-process',
                                              runnerPid='123',observedAt=observed))
            with mock.patch.object(collector,'collect_jobs',return_value=guarded),mock.patch.object(
                    collector.subprocess,'run',return_value=subprocess.CompletedProcess([],0,stdout='200')):
                rows=collector.snapshot(self.path)
            self.assertTrue(any(job['id']=='123' for job in rows[0]['jobs']))

    def test_snapshot_prioritizes_explicit_observations_and_explains_omissions(self):
        events.write_event(self.path,entry('actual'))
        guarded={'website':[{'id':str(i+1),'name':'x'*140,'kind':'job','status':'running'} for i in range(120)],
                 'research':[],'video':[]}
        with mock.patch.object(collector,'collect_jobs',return_value=guarded),mock.patch.object(
                collector.subprocess,'run',return_value=subprocess.CompletedProcess([],0,stdout='200')),mock.patch.object(
                collector,'MAX_SNAPSHOT_BYTES',2000):
            rows=collector.snapshot(self.path)
        self.assertEqual(rows[0]['jobs'][0]['id'],'task:actual')
        self.assertGreater(rows[0]['telemetry']['omittedGuardedJobs'],20)
        self.assertEqual(rows[0]['status'],'issue')
        self.assertLessEqual(len(json.dumps(rows,separators=(',',':')).encode()),2000)

if __name__=='__main__':
    unittest.main(verbosity=2)

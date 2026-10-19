import importlib.util,json,os,pathlib,tempfile,datetime
root=pathlib.Path(__file__).resolve().parent
spec=importlib.util.spec_from_file_location('activity',root/'report-admin-activity.py');module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module)
spec2=importlib.util.spec_from_file_location('writer',root/'report-task-event.py');writer=importlib.util.module_from_spec(spec2);spec2.loader.exec_module(writer)
with tempfile.TemporaryDirectory() as directory:
 path=pathlib.Path(directory)/'events.json'
 entry={'id':'task:unit-test','source':'website','kind':'agent','name':'Unit test task','task':'Validate explicit producer events','status':'running','observedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'provenance':'Unit test observation','secret':'must not be forwarded','teamId':'team:learn'}
 writer.write_event(path,entry)
 assert path.stat().st_mode&0o077==0
 events=module.collect_task_events(path)
 assert len(events)==1 and events[0]['kind']=='agent' and events[0]['teamId']=='team:learn'
 assert 'secret' not in events[0]
 entry['status']='done';writer.write_event(path,entry)
 assert len(module.collect_task_events(path))==1 and module.collect_task_events(path)[0]['status']=='done'
 path.write_text('{broken')
 assert module.collect_task_events(path)[0]['status']=='unknown'
 path.chmod(0o644);assert module.collect_task_events(path)[0]['status']=='unknown'
 path.chmod(0o600);path.write_text(json.dumps({'version':1,'tasks':[]}))
 entry['observedAt']=(datetime.datetime.now(datetime.timezone.utc)+datetime.timedelta(minutes=5)).isoformat();writer.write_event(path,entry)
 assert module.collect_task_events(path)==[]
print('PASS: private explicit task-event file, allowlisted fields, state updates, invalid/unavailable-source retention and future observation rejection')

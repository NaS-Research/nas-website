import importlib.util,pathlib,subprocess
root=pathlib.Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('reporter',root/'scripts/report-admin-activity.py');reporter=importlib.util.module_from_spec(spec);spec.loader.exec_module(reporter)
rows=[
"100 01:23 python3 /Volumes/AGNDJ 6TB/NaS-Work/tools/external-project-runner.py --project /Volumes/AGNDJ 6TB/NaS-Work/Video --job website-build -- python3 build.py",
"101 02:34 python3 /Volumes/AGNDJ 6TB/NaS-Work/tools/external-project-runner.py --project /Volumes/AGNDJ 6TB/NaS-Work/Learn --job new-module -- python3 audit.py",
"102 1-01:02:03 python3 /Volumes/AGNDJ 6TB/NaS-Work/tools/external-project-runner.py --project /Volumes/AGNDJ 6TB/NaS-Work/CVA --job study-replay -- python3 work.py",
"103 03:45 python3 /Volumes/AGNDJ 6TB/NaS-Work/tools/external-project-runner.py --project /Volumes/AGNDJ 6TB/NaS-Work/Video --job brain-render -- python3 scene.py",
"104 00:30 python3 /Volumes/AGNDJ 6TB/NaS-Work/tools/external-project-runner.py --project /Volumes/AGNDJ 6TB/NaS-Work/Video --job admin-activity-monitor-test -- python3 report.py",
"105 00:30 python3 some-unrelated-task.py --token never-report-this"
]
reporter.subprocess.run=lambda *a,**k:subprocess.CompletedProcess(a[0],0,stdout='\n'.join(rows))
result=reporter.collect_jobs()
assert [j['name'] for j in result['website']]==['website-build']
assert len(result['research'])==2
assert result['video'][0]['name']=='brain-render'
assert result['website'][0]['elapsedSeconds']==83
assert result['research'][1]['elapsedSeconds']==90123
assert 'never-report-this' not in str(result)
assert all(set(job)=={'id','name','workflow','elapsedSeconds'} for jobs in result.values() for job in jobs)
print('PASS: spaced paths, all three workflows, elapsed time, monitor exclusion and no command/token disclosure')

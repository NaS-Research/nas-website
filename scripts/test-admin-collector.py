import importlib.util,pathlib,subprocess
root=pathlib.Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('reporter',root/'scripts/report-admin-activity.py');reporter=importlib.util.module_from_spec(spec);spec.loader.exec_module(reporter)
rows=[
"100 1 01:23 python3 /Volumes/AGNDJ 6TB/NaS-Work/tools/external-project-runner.py --project /Volumes/AGNDJ 6TB/NaS-Work/Video --job website-build -- python3 build.py",
"101 100 02:34 python3 /Volumes/AGNDJ 6TB/NaS-Work/tools/external-project-runner.py --project /Volumes/AGNDJ 6TB/NaS-Work/Learn --job new-module -- python3 audit.py",
"102 101 1-01:02:03 python3 /Volumes/AGNDJ 6TB/NaS-Work/tools/external-project-runner.py --project /Volumes/AGNDJ 6TB/NaS-Work/CVA --job study-replay -- python3 work.py",
"103 1 03:45 python3 /Volumes/AGNDJ 6TB/NaS-Work/tools/external-project-runner.py --project /Volumes/AGNDJ 6TB/NaS-Work/Video --job brain-render -- python3 scene.py",
"104 1 00:30 python3 /Volumes/AGNDJ 6TB/NaS-Work/tools/external-project-runner.py --project /Volumes/AGNDJ 6TB/NaS-Work/Video --job admin-activity-monitor-test -- python3 report.py",
"105 1 00:30 python3 some-unrelated-task.py --token never-report-this"
]
reporter.subprocess.run=lambda *a,**k:subprocess.CompletedProcess(a[0],0,stdout='\n'.join(rows))
result=reporter.collect_jobs()
assert [j['name'] for j in result['website']]==['website-build']
assert len(result['research'])==2
assert result['video'][0]['name']=='brain-render'
assert result['website'][0]['elapsedSeconds']==83
assert result['research'][1]['elapsedSeconds']==90123
assert 'never-report-this' not in str(result)
assert all(set(job)=={'id','name','workflow','elapsedSeconds','parentId','kind','status','observedAt','provenance'} for jobs in result.values() for job in jobs)
print('PASS: spaced paths, all three workflows, elapsed time, monitor exclusion and no command/token disclosure')

assert result['research'][0]['parentId']=='100'
assert result['research'][1]['parentId']=='101'
assert result['video'][0]['parentId'] is None

assert reporter.classify('/Volumes/AGNDJ 6TB/NaS-Work/Video','admin-agent-tree-final-build')=='website'

rows.append("106 1 00:30 python3 /Volumes/AGNDJ 6TB/NaS-Work/tools/external-project-runner.py --project /Volumes/AGNDJ 6TB/NaS-Work/Video --job admin-agent-tree-biobank-reporter-test -- python3 report.py")
assert all('reporter-test' not in job['name'] for jobs in reporter.collect_jobs().values() for job in jobs)

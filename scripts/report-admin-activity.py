"""Read-only activity reporter. Never launches, stops, or resumes production work."""
import argparse,datetime,json,os,pathlib,re,shlex,subprocess,time,uuid
PUBLISHER_SESSION = str(uuid.uuid4())
PROCESS_HEALTH = {"state":"unavailable"}
def stamp():return datetime.datetime.now(datetime.timezone.utc).isoformat()
from admin_activity_events import EventStoreError, private_lock, read_events, read_private_json
ROOTS={'Learn':'research','CVA':'research','Video':'video'}
def elapsed_seconds(value):
 days=0
 if '-' in value:
  day,value=value.split('-',1);days=int(day)
 parts=[int(p) for p in value.split(':')]
 return days*86400+sum(number*60**power for power,number in enumerate(reversed(parts)))
def classify(project,job):
 root=pathlib.PurePosixPath(project).name
 if root in {'CVA','Learn'}:return 'research'
 if root!='Video':return None
 if re.search(r'(website|navbar|google-login|admin-activity|admin-agent-tree|seo-|auth-)',job):return 'website'
 return 'video'
def collect_jobs():
 global PROCESS_HEALTH
 PROCESS_HEALTH={'state':'unavailable','checkedAt':stamp(),'unmappedRunnerCount':0}
 result=subprocess.run(['ps','-axo','pid=,ppid=,etime=,command='],capture_output=True,text=True,check=True,timeout=4)
 observed=stamp()
 processes={}
 sources={source:[] for source in ('website','research','video')}
 for line in result.stdout.splitlines():
  fields=line.strip().split(None,3)
  if len(fields)==4:processes[fields[0]]={'parent':fields[1],'elapsed':fields[2],'command':fields[3]}
 tracked={}
 for pid,process in processes.items():
  command=process['command']
  if 'external-project-runner.py' not in command:continue
  try:args=shlex.split(command)
  except ValueError:continue
  try:
   runner=next(index for index,word in enumerate(args) if word.endswith('/external-project-runner.py'))
   flags=args[runner+1:]
   if '--' in flags:flags=flags[:flags.index('--')]
   start=flags.index('--project')+1
   end=next((index for index in range(start,len(flags)) if flags[index].startswith('--')),len(flags))
   project=' '.join(flags[start:end]);job=flags[flags.index('--job')+1]
  except (ValueError,IndexError,StopIteration):continue
  if not project.startswith('/Volumes/AGNDJ 6TB/NaS-Work/') or job.startswith('admin-activity-monitor') or job.startswith('admin-agent-tree-monitor') or job.startswith('admin-agent-tree-department-reporter-handoff') or job.startswith(('admin-agent-tree-blocker-reporter','admin-agent-tree-biobank-reporter')):continue
  source=classify(project,job)
  if source is None:
   PROCESS_HEALTH['unmappedRunnerCount']+=1
   continue
  entry={'id':pid,'name':job[:120],'workflow':source,'kind':'job','status':'running','elapsedSeconds':elapsed_seconds(process['elapsed']),'parentId':None,'observedAt':observed,'provenance':'Guarded runner process census; organization mapping is partial'}
  sources[source].append(entry);tracked[pid]=entry
 for pid,entry in tracked.items():
  parent=processes[pid]['parent'];seen={pid}
  while parent in processes and parent not in seen:
   if parent in tracked:entry['parentId']=parent;break
   seen.add(parent);parent=processes[parent]['parent']
 PROCESS_HEALTH.update(state='available',observedAt=observed)
 return sources

TASK_EVENT_CACHE = {}
TASK_EVENT_HEALTH = 'not_configured'
MAX_SNAPSHOT_BYTES = 60000

def collect_task_events(path):
 """Read only explicit producer observations. Failed reads never refresh their timestamps."""
 global TASK_EVENT_HEALTH
 if not path:
  TASK_EVENT_HEALTH = 'not_configured'
  return []
 key = str(pathlib.Path(path).absolute())
 try:
  result = read_events(path)
  TASK_EVENT_CACHE[key] = result
  TASK_EVENT_HEALTH = 'available'
  return result
 except (OSError, ValueError, TypeError):
  TASK_EVENT_HEALTH = 'unavailable'
  return [{**event, 'lastKnownStatus':event['status'], 'status': 'unknown'} for event in TASK_EVENT_CACHE.get(key, [])]

def snapshot(task_events=None, core_observer=None, biobank_status=None, video_lifecycle=None):
 captured_at=stamp()
 try:
  guarded = collect_jobs()
 except (OSError,ValueError,subprocess.SubprocessError):
  guarded={source:[] for source in ('website','research','video')}
  PROCESS_HEALTH.update(state='unavailable',checkedAt=stamp())
 events = list(collect_task_events(task_events))
 runtime = None
 if core_observer:
  core_events,runtime = core_observer.poll()
  events += core_events
 # A lifecycle record can enrich its own observed runner, without duplicating that job.
 linked = {(event['source'], event.get('runnerPid')) for event in events
           if event.get('kind') == 'job' and event.get('origin') == 'guarded-process'
           and event.get('status') == 'running'
           and (datetime.datetime.now(datetime.timezone.utc)-datetime.datetime.fromisoformat(event['observedAt'].replace('Z','+00:00'))).total_seconds() <= 90}
 http_status = None
 try:
  result = subprocess.run(['curl','--compressed','--max-time','15','-sS','-o','/dev/null','-w','%{http_code}','https://nasresearch.bio/'],capture_output=True,text=True,check=True,timeout=17)
  http_status = int(result.stdout)
 except (OSError, subprocess.SubprocessError, ValueError):
  pass
 reports = []
 fallback_ids = set()
 for source in ('website', 'research', 'video'):
  observed = [event for event in events if event['source'] == source]
  omitted_observations=max(0,len(observed)-100)
  if omitted_observations:
   # Preserve unresolved work first, with newest evidence next. Never modify the local store.
   observed=sorted(sorted(observed,key=lambda e:e.get('observedAt',''),reverse=True),key=lambda e:e.get('status') not in {'running','blocked','needs_you','waiting','unknown'})[:100]
  fallback = [job for job in guarded[source] if (source, job['id']) not in linked]
  slots = max(0, 100-len(observed))
  included = fallback[:slots]
  fallback_ids.update((source, job['id']) for job in included)
  reports.append({'source':source, 'status':'issue' if source=='website' and http_status!=200 else 'reporting',
                  'httpStatus':http_status if source=='website' else None,
                  'jobs':observed+included,
                  'telemetry':{'coverage':'partial','eventStore':TASK_EVENT_HEALTH,
                               'capturedAt':captured_at,'publisherSession':PUBLISHER_SESSION,
                               'processCensus':dict(PROCESS_HEALTH),'omittedObservations':omitted_observations,
                               'omittedGuardedJobs':len(fallback)-len(included)}})
 if runtime is not None:
  next(report for report in reports if report['source']=='video')['runtime']=runtime
 if biobank_status is not None:
  next(report for report in reports if report['source']=='research')['departmentProgress']=[biobank_status.poll()]
 if video_lifecycle is not None:
  next(report for report in reports if report['source']=='video')['videoLifecycle']=video_lifecycle.poll()
 def size():
  return len(json.dumps(reports, separators=(',', ':'), ensure_ascii=True, allow_nan=False).encode())
 while size() > MAX_SNAPSHOT_BYTES:
  removed = False
  for report in reversed(reports):
   index = next((i for i in range(len(report['jobs'])-1, -1, -1)
                 if (report['source'],report['jobs'][i]['id']) in fallback_ids), None)
   if index is not None:
    report['jobs'].pop(index)
    report['telemetry']['omittedGuardedJobs'] += 1
    removed = True
    break
  if not removed:
   candidates=[r for r in reports if r['jobs']]
   if not candidates:raise RuntimeError('Private metadata exceeds publisher budget')
   report=max(candidates,key=lambda r:len(json.dumps(r['jobs'])))
   report['jobs'].pop()
   report['telemetry']['omittedObservations']+=1
 for report in reports:
  if report['telemetry']['omittedGuardedJobs'] or report['telemetry']['omittedObservations'] or PROCESS_HEALTH['state']!='available' or TASK_EVENT_HEALTH == 'unavailable' or report.get('runtime',{}).get('state')=='unavailable':
   report['status'] = 'issue'
 return reports

def publish(config,reports):
 request={'p_device':config['device'],'p_token':config['token'],'p_snapshot':reports}
 # Keep the private token out of process arguments and logs.
 curl={'url':config['url']+'/rest/v1/rpc/publish_nas_activity','method':'POST','header':['apikey: '+config['key'],'Content-Type: application/json']}
 lines=['url = '+json.dumps(curl['url']),'request = "POST"','silent','show-error','fail-with-body','max-time = 25']
 lines += ['header = '+json.dumps(header) for header in curl['header']]
 lines += ['data = '+json.dumps(json.dumps(request,separators=(',',':')))]
 result=subprocess.run(['curl','--config','-'],input='\n'.join(lines),capture_output=True,text=True,timeout=30)
 if result.returncode:raise RuntimeError('Status publisher could not deliver its report (HTTP/API connection failed).')
def main():
 parser=argparse.ArgumentParser();parser.add_argument('--config',required=True);parser.add_argument('--once',action='store_true');parser.add_argument('--interval',type=int,default=20);parser.add_argument('--task-events');parser.add_argument('--core-reader',action='store_true');parser.add_argument('--biobank-status',action='store_true');parser.add_argument('--video-lifecycle',action='store_true')
 args=parser.parse_args()
 core_observer=None
 if args.core_reader:
  from admin_core_observer import CoreObserver
  core_observer=CoreObserver()
 biobank_status=None
 if args.biobank_status:
  from admin_biobank_status import BioBankStatus
  biobank_status=BioBankStatus()
 video_lifecycle=None
 if args.video_lifecycle:
  from admin_video_lifecycle import VideoLifecycle
  video_lifecycle=VideoLifecycle()
 # Hold the lease for the process lifetime. A second publisher must never overwrite these source-keyed rows.
 with private_lock(args.config,timeout=0,suffix='.publisher.lock'):
  config=read_private_json(args.config,limit=65536)
  if not isinstance(config,dict) or config.get('url','').rstrip('/')!='https://mwjbecfyflaltxvxerje.supabase.co':raise EventStoreError('Unexpected publisher destination')
  for key,low,high in [('device',1,100),('token',40,256),('key',1,4096)]:
   value=config.get(key)
   if not isinstance(value,str) or not low<=len(value)<=high or '\n' in value or '\r' in value:raise EventStoreError('Invalid publisher configuration')
  while True:
   try:
    reports=snapshot(args.task_events,core_observer,biobank_status,video_lifecycle);publish(config,reports)
    print(json.dumps({'reportedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'jobs':{r['source']:len(r['jobs']) for r in reports},'eventStore':TASK_EVENT_HEALTH}),flush=True)
   except Exception as error:
    print(json.dumps({'reporting':'offline','errorType':type(error).__name__}),flush=True)
    if args.once:raise SystemExit(1)
   if args.once:return
   time.sleep(max(10,args.interval))
if __name__=='__main__':
 try:main()
 except (EventStoreError,OSError,ValueError):raise SystemExit('Private publisher startup rejected; check ownership, configuration and existing publisher lease.')

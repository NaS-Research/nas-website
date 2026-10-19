"""Read-only activity reporter. Never launches, stops, or resumes production work."""
import argparse,datetime,json,pathlib,re,shlex,subprocess,time
ROOTS={'Learn':'research','CVA':'research','Video':'video'}
def elapsed_seconds(value):
 days=0
 if '-' in value:
  day,value=value.split('-',1);days=int(day)
 parts=[int(p) for p in value.split(':')]
 return days*86400+sum(number*60**power for power,number in enumerate(reversed(parts)))
def classify(project,job):
 if '/CVA' in project or '/Learn' in project:return 'research'
 if re.search(r'(website|navbar|google-login|admin-activity|admin-agent-tree|seo-|auth-)',job):return 'website'
 return 'video'
def collect_jobs():
 result=subprocess.run(['ps','-axo','pid=,ppid=,etime=,command='],capture_output=True,text=True,check=True)
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
  if not project.startswith('/Volumes/AGNDJ 6TB/NaS-Work/') or job.startswith('admin-activity-monitor') or job.startswith('admin-agent-tree-monitor'):continue
  source=classify(project,job)
  entry={'id':pid,'name':job[:120],'workflow':source,'kind':'job','status':'running','elapsedSeconds':elapsed_seconds(process['elapsed']),'parentId':None}
  sources[source].append(entry);tracked[pid]=entry
 for pid,entry in tracked.items():
  parent=processes[pid]['parent'];seen={pid}
  while parent in processes and parent not in seen:
   if parent in tracked:entry['parentId']=parent;break
   seen.add(parent);parent=processes[parent]['parent']
 return sources

def snapshot():
 sources=collect_jobs();http_status=None
 try:
  result=subprocess.run(['curl','--compressed','--max-time','15','-sS','-o','/dev/null','-w','%{http_code}','https://nasresearch.bio/'],capture_output=True,text=True,check=True)
  http_status=int(result.stdout)
 except (subprocess.SubprocessError,ValueError):pass
 return [{'source':source,'status':('issue' if source=='website' and http_status!=200 else 'reporting'),'httpStatus':http_status if source=='website' else None,'jobs':jobs[:100]} for source,jobs in sources.items()]
def publish(config,reports):
 request={'p_device':config['device'],'p_token':config['token'],'p_snapshot':reports}
 # Keep the private token out of process arguments and logs.
 curl={'url':config['url']+'/rest/v1/rpc/publish_nas_activity','method':'POST','header':['apikey: '+config['key'],'Content-Type: application/json']}
 lines=['url = '+json.dumps(curl['url']),'request = "POST"','silent','show-error','fail-with-body','max-time = 25']
 lines += ['header = '+json.dumps(header) for header in curl['header']]
 lines += ['data = '+json.dumps(json.dumps(request,separators=(',',':')))]
 result=subprocess.run(['curl','--config','-'],input='\n'.join(lines),capture_output=True,text=True)
 if result.returncode:raise RuntimeError('Status publisher could not deliver its report (HTTP/API connection failed).')
def main():
 parser=argparse.ArgumentParser();parser.add_argument('--config',required=True);parser.add_argument('--once',action='store_true');parser.add_argument('--interval',type=int,default=20)
 args=parser.parse_args();path=pathlib.Path(args.config)
 if path.stat().st_mode&0o077:raise RuntimeError('Publisher config must be readable only by its owner.')
 config=json.loads(path.read_text())
 while True:
  try:
   reports=snapshot();publish(config,reports)
   print(json.dumps({'reportedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'jobs':{r['source']:len(r['jobs']) for r in reports}}),flush=True)
  except Exception as error:
   print(json.dumps({'reporting':'offline','error':str(error)}),flush=True)
   if args.once:raise SystemExit(1)
  if args.once:return
  time.sleep(max(10,args.interval))
if __name__=='__main__':main()

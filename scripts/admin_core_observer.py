"""Optional GET-only adapter for the existing loopback Core reader. No service changes."""
import datetime as dt
import json
import os
import pathlib
import stat
import urllib.request

CREDENTIALS = pathlib.Path('/Users/agndj/Documents/Codex/2026-10-13/task-5/nas-core/var/credentials.json')
BASE = 'http://127.0.0.1:18766'
ROUTES = {'/registry', '/status', '/tasks?limit=20'}
ROLE_IDS = {"future-"+role: "role:video:"+role for role in ('scientific-research','scripting','visual-production','narration','editing','qa','publishing')}
SPECIAL_ROLE_IDS = {'company-director':'role:company-director','department-director':'role:video-supervisor','institute-lead':'role:institute-lead'}

_NOW = object()

def stamp(value=_NOW):
    if value is _NOW:
        return dt.datetime.now(dt.timezone.utc).isoformat()
    if isinstance(value, bool) or not isinstance(value, (int, float)):
        raise ValueError('Invalid source timestamp')
    parsed = dt.datetime.fromtimestamp(value, dt.timezone.utc)
    if parsed > dt.datetime.now(dt.timezone.utc)+dt.timedelta(seconds=30):
        raise ValueError('Future source timestamp')
    return parsed.isoformat()

def clean(value, limit=200):
    return ''.join(c for c in str(value or '') if ord(c)>=32)[:limit]

class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs):
        return None

def reader_token():
    fd = os.open(CREDENTIALS, os.O_RDONLY | os.O_NOFOLLOW | os.O_CLOEXEC)
    with os.fdopen(fd, 'rb') as source:
        info=os.fstat(source.fileno())
        if not stat.S_ISREG(info.st_mode) or info.st_uid!=os.getuid() or info.st_mode & 0o077 or info.st_nlink!=1:
            raise ValueError('Existing reader credentials are not owner-private')
        data=source.read(65537)
    if len(data)>65536:
        raise ValueError('Reader configuration is too large')
    principals=json.loads(data).get('principals', [])
    selected=[p for p in principals if p.get('name')=='observer' and p.get('role')=='reader']
    if len(selected)!=1 or not isinstance(selected[0].get('token'),str) or not 20<=len(selected[0]['token'])<=4096 or any(c in selected[0]['token'] for c in '\r\n'):
        raise ValueError('Existing observer reader unavailable')
    return selected[0]['token']

def fetch(route, token):
    if route not in ROUTES:
        raise ValueError('Only bounded, existing GET routes are allowed')
    request=urllib.request.Request(BASE+route, headers={'Authorization':'Bearer '+token, 'Accept':'application/json'}, method='GET')
    opener=urllib.request.build_opener(urllib.request.ProxyHandler({}),NoRedirect())
    with opener.open(request,timeout=4) as response:
        data=response.read(2*1024*1024+1)
    if len(data)>2*1024*1024:
        raise ValueError('Source response limit exceeded')
    return json.loads(data)

class CoreObserver:
    def __init__(self, get=None):
        self.get=get
        self.cached=[]
        self.metadata={}

    def poll(self):
        checked=stamp()
        try:
            token=reader_token() if self.get is None else None
            get=self.get or (lambda route:fetch(route,token))
            registry=get('/registry')
            status=get('/status')
            tasks=get('/tasks?limit=20')
            if not isinstance(registry,dict) or not isinstance(status,dict) or not isinstance(tasks,list):
                raise ValueError('Unexpected Core response shape')
            agents={a['id']:a for a in registry.get('agents',[]) if isinstance(a,dict) and isinstance(a.get('id'),str)}
            workers=status.get('workers',[])
            if not isinstance(workers,list):
                raise ValueError('Invalid worker records')
            epochs=[clean(e.get('id')) for e in status.get('video_authority_epochs',[]) if isinstance(e,dict) and e.get('state')=='active']
            epoch=epochs[0] if len(epochs)==1 else None
            by_task={t['id']:t for t in tasks if isinstance(t,dict) and isinstance(t.get('id'),str)}
            records=[]
            now=dt.datetime.now(dt.timezone.utc).timestamp()
            for worker in workers[:20]:
                heartbeat=worker.get('heartbeat_at')
                observed=stamp(heartbeat)
                task=by_task.get(worker.get('task_id'))
                fresh=0<=now-heartbeat<=90
                leased=task and task.get('worker_id')==worker.get('id') and task.get('status')=='running' and isinstance(task.get('lease_expires_at'),(int,float)) and task['lease_expires_at']>now
                state='running' if fresh and worker.get('state')=='busy' and leased else 'idle' if fresh and worker.get('state')=='idle' and not worker.get('task_id') else 'unknown'
                event={'id':'task:core:worker:'+clean(worker.get('id'),100),'name':clean(worker.get('id'),140),'task':'Persisted worker process · '+state,'source':'video','kind':'job','entityKind':'worker_process','status':state,'observedAt':observed,'heartbeatAt':observed,'placement':'unassigned','provenance':'Core /status workers; heartbeat_at; reader observer','sourceRuntime':'nas-core','epoch':epoch}
                # A persisted PID alone is not independent OS identity verification.
                records.append(event)
            for task in tasks[:20]:
                if not isinstance(task,dict) or not isinstance(task.get('id'),str):
                    continue
                agent=agents.get(task.get('agent_id'),{})
                status_name=task.get('status')
                state={'succeeded':'done','failed':'failed','cancelled':'cancelled','needs_review':'needs_you','queued':'waiting'}.get(status_name,'unknown')
                if status_name=='running':
                    heartbeat=next((w.get('heartbeat_at') for w in workers if w.get('id')==task.get('worker_id') and w.get('task_id')==task['id'] and w.get('state')=='busy'),None)
                    lease=task.get('lease_expires_at')
                    state='running' if isinstance(heartbeat,(int,float)) and 0<=now-heartbeat<=90 and isinstance(lease,(int,float)) and lease>now else 'unknown'
                event={'id':'task:core:operation:'+clean(task['id'],100),'name':'Persisted operation','assignment':clean(task.get('title'),240) or 'Assignment title unavailable','task':'Persisted task state: '+clean(status_name,60),'source':'video','kind':'job','entityKind':'operator_operation','status':state,'observedAt':stamp(heartbeat) if status_name=='running' and state=='running' else stamp(),'stateChangedAt':stamp(task.get('updated_at')),'provenance':'Core /tasks persisted-state read; updated_at retained separately; reader observer','sourceRuntime':'nas-core','epoch':epoch}
                history=task.get('history')
                if isinstance(history,list) and history and isinstance(history[-1],dict):
                    event['originEventId']=clean(history[-1].get('id'))
                if task.get('agent_id') in ROLE_IDS:
                    event['roleId']=ROLE_IDS[task['agent_id']]
                elif agent.get('org_id')=='educational-video-production':
                    event.update(teamId='team:video',departmentId='dept:institute')
                else:
                    event['placement']='unassigned'
                records.append(event)
            configurations=[{'id':ROLE_IDS.get(a['id'], SPECIAL_ROLE_IDS.get(a['id'])),'registryId':a['id'],'configuredActive':a.get('active') is True,'observedAt':checked} for a in agents.values() if a['id'] in ROLE_IDS or a['id'] in SPECIAL_ROLE_IDS]
            self.cached=records
            self.metadata={'state':'available','checkedAt':checked,'sourceObservedAt':stamp(status.get('timestamp')),'sourceRuntime':'nas-core','epoch':epoch,'registryCount':len(agents),'departmentRegistryCount':sum(a.get('org_id')=='educational-video-production' for a in agents.values()),'operatorIdentityCount':sum(a['id'].startswith('nas035-') and a['id'].endswith('-owner') or a['id']=='source-review-owner' for a in agents.values()),'workerCount':len(workers),'taskCounts':{clean(k,40):v for k,v in status.get('tasks',{}).items() if isinstance(v,int)},'roleConfigurations':configurations,'taskListLimit':20,'codexCollaboration':'separate producer required','effectiveModel':'unavailable from these endpoints'}
            return records,self.metadata
        except Exception as error:
            # Retain original event timestamps; an unsuccessful poll never renews evidence.
            metadata={**self.metadata,'state':'unavailable','checkedAt':checked,'errorType':type(error).__name__}
            return [{**event,'status':'unknown'} for event in self.cached],metadata

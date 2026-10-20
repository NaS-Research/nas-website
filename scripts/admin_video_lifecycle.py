"""Fixed sanitized owner observation only; never reads authority, journals or databases."""
import datetime as dt
import json
import os
import pathlib
import re
import stat
import uuid

STATUS_FILE=pathlib.Path('/Users/agndj/Documents/Codex/2026-10-13/task-5/nas-core/var/reporting/NAS035-lifecycle.json')
MAX_BYTES=16384

def text(v,limit=240):
    if not isinstance(v,str) or not v.strip() or len(v)>limit or any(ord(c)<32 for c in v):raise ValueError('Invalid display text')
    return v

def stamp(v,now,allow_future=False):
    if not isinstance(v,str) or len(v)>40 or not re.fullmatch(r'[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(?:\.[0-9]{1,6})?(?:Z|\+00:00)',v):raise ValueError('UTC timestamp required')
    parsed=dt.datetime.fromisoformat(v.replace('Z','+00:00'))
    if not allow_future and parsed>now+dt.timedelta(seconds=60):raise ValueError('Future observation')
    return parsed

def number(v):
    if type(v) is not int or not 0<=v<2**63:raise ValueError('Invalid count')
    return v

def boolean(v):
    if type(v) is not bool:raise ValueError('Invalid boolean')
    return v

def normalize(value,now=None):
    now=now or dt.datetime.now(dt.timezone.utc)
    if not isinstance(value,dict) or type(value.get('schema_version')) is not int or value['schema_version']!=1 or value.get('kind')!='nas_video_lifecycle_owner_observation' or value.get('pipeline_id')!='NAS-VID-035' or value.get('observation_mode')!='static_owner_snapshot' or value.get('visibility')!='private_admin_only':raise ValueError('Unsupported lifecycle identity/schema')
    observed=stamp(value['observed_at_utc'],now)
    expires=stamp(value['expires_at_utc'],now,allow_future=True)
    if expires.tzinfo is None or not dt.timedelta(0)<=expires-observed<=dt.timedelta(minutes=15):raise ValueError('Invalid observation lifetime')
    org=value['organization'];project=value['project'];prep=value['preparation_task'];operation=value['operation'];worker=value['worker'];responsibility=value['responsibility'];action=value['next_action'];evidence=value['evidence']
    if org!={'company_id':'nas-research','institute_id':'nas-institute','department_id':'educational-video-production'} or project.get('id')!='nas-vid-035-visual-source-v3' or project.get('relationship')!='completed_source_preparation_reference' or prep.get('relationship')!='historical_source_preparation_only' or prep.get('status')!='succeeded':raise ValueError('Unexpected project/organization relationship')
    if operation.get('recorded_state')!='admitted_not_started' or operation.get('approval_state')!='admitted' or operation.get('execution_task_id') is not None or value.get('execution_worker') is not None:raise ValueError('Unsupported lifecycle state; contract revision required')
    operation_id=text(operation['id'],100)
    if str(uuid.UUID(operation_id))!=operation_id:raise ValueError('Invalid operation identity')
    for key in ('launch_observed','header_qualification_observed','completion_reservation_observed','current_movie_verified'):
        if operation.get(key) is not False:raise ValueError('Unsupported execution claim')
    if responsibility.get('named_person') is not None or action.get('person') is not None or action.get('reviewer') is not None:raise ValueError('Unverified person/reviewer')
    if worker.get('state')!='idle' or worker.get('task_id') is not None or worker.get('assignment_to_operation_verified') is not False:raise ValueError('Worker is not an execution owner in this contract')
    pid=number(worker['pid'])
    if not 0<pid<2**31:raise ValueError('Invalid verified process identity')
    for item in (worker['heartbeat_at_utc'],worker['process_identity_verified_at_utc'],operation['recorded_at_utc']):
        if stamp(item,now)>observed+dt.timedelta(seconds=60):raise ValueError('Evidence after observation')
    resources={}
    for key,floor in [('internal',10*1024**3),('external',100*1024**3)]:
        resource=value['resources'][key];available=number(resource['available_bytes']);required=number(resource['required_bytes']);passed=boolean(resource['passed'])
        if required!=floor or passed!=(available>=required):raise ValueError('Inconsistent resource observation')
        resources[key]={'availableBytes':available,'requiredBytes':required,'passed':passed}
    historical=value['historical_projects']
    if not isinstance(historical,list) or len(historical)>10:raise ValueError('Invalid historical projects')
    historical_projects=[]
    for item in historical:
        if item.get('relationship')!='separate_historical_project' or item.get('records_changed') is not False:raise ValueError('Invalid history relationship')
        historical_projects.append({'projectId':text(item['project_id'],200),'persistedNeedsReviewCount':number(item['persisted_needs_review_count'])})
    reference=text(evidence['reference'],240)
    if not re.fullmatch(r'[A-Za-z0-9_-]+/OBSERVATION\.json',reference) or evidence.get('source_kind')!='owner_read_only_observation':raise ValueError('Unsafe logical evidence reference')
    event_ids=evidence['history_event_ids']
    if not isinstance(event_ids,list) or len(event_ids)>20:raise ValueError('Invalid evidence IDs')
    event_ids=[number(i) for i in event_ids]
    # Explicit display projection only. No raw object, authority token, URL or path is forwarded.
    return {'schemaVersion':1,'teamId':'team:video','pipelineId':value['pipeline_id'],'sourceState':'stale' if now>=expires else 'available',
        'observedAt':value['observed_at_utc'],'expiresAt':value['expires_at_utc'],'recordedState':'admitted_not_started',
        'operationId':operation_id,'operationName':text(operation['display_name']),'recordedAt':operation['recorded_at_utc'],
        'executionTaskId':None,'executionWorker':None,'sourceProjectId':project['id'],'sourceProjectName':text(project['name']),
        'preparationTaskId':text(prep['id'],200),'preparationAgentId':text(prep['registered_agent_id'],200),'preparationStatus':'succeeded',
        'responsibleRole':text(responsibility['role'],140),'recordedActor':text(responsibility['recorded_actor'],140),'responsibilityEvidence':text(responsibility['evidence'],500),'namedPerson':None,'reviewer':None,
        'observedWorkerId':text(worker['id'],200),'observedWorkerState':'idle','observedWorkerPid':pid,'workerVerifiedAt':worker['process_identity_verified_at_utc'],'workerHeartbeatAt':worker['heartbeat_at_utc'],'workerAssignedToOperation':False,
        'reasonCode':text(value['reason_code'],100),'reason':text(value['reason'],600),'resources':resources,'readyAtObservation':boolean(value['ready_to_start_at_observation']),'pauseAtObservation':boolean(value['runtime_pause_observed']),
        'nextAction':text(action['description'],600),'nextActionCode':text(action['code'],100),'laterGate':text(action['later_gate'],100),'nextActionRole':text(action['role'],140),
        'historicalProjects':historical_projects,'evidenceReference':reference,'evidenceSourceKind':evidence['source_kind'],'historyEventIds':event_ids,'historyHead':number(evidence['history_head']),'queueCountAtObservation':number(evidence['queue_count']),
        'sourceRevision':text(value['source_revision'],100),'provenance':'Static Core owner/operator observation; sanitized fixed-file contract v1'}

def read_status():
    current=pathlib.Path(STATUS_FILE.anchor)
    for part in STATUS_FILE.parts[1:-1]:
        current=current/part;info=current.lstat()
        if not stat.S_ISDIR(info.st_mode):raise ValueError('Symlinked/non-directory source boundary')
    parent=STATUS_FILE.parent.stat()
    if parent.st_uid!=os.getuid() or parent.st_mode&0o077:raise ValueError('Source parent is not owner-private')
    directory=os.open(STATUS_FILE.parent,os.O_RDONLY|os.O_DIRECTORY|os.O_NOFOLLOW|os.O_CLOEXEC)
    try:fd=os.open(STATUS_FILE.name,os.O_RDONLY|os.O_NONBLOCK|os.O_NOFOLLOW|os.O_CLOEXEC,dir_fd=directory)
    finally:os.close(directory)
    with os.fdopen(fd,'rb') as stream:
        info=os.fstat(stream.fileno())
        if not stat.S_ISREG(info.st_mode) or info.st_uid!=os.getuid() or info.st_mode&0o077 or info.st_nlink!=1:raise ValueError('Source is not owner-private regular single-link')
        raw=stream.read(MAX_BYTES+1)
    if len(raw)>MAX_BYTES:raise ValueError('Source exceeds16KiB')
    def unique(pairs):
        result={}
        for key,value in pairs:
            if key in result:raise ValueError('Duplicate source field')
            result[key]=value
        return result
    return normalize(json.loads(raw,object_pairs_hook=unique))

class VideoLifecycle:
    def poll(self):
        try:return read_status()
        except (OSError,ValueError,TypeError,KeyError,AttributeError,OverflowError):
            # Invalid/missing input never falls back to historical readiness or cached worker state.
            return {'schemaVersion':1,'teamId':'team:video','pipelineId':'NAS-VID-035','sourceState':'unavailable'}

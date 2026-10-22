"""Local, side-effect-free bridge for supported task snapshots and owned feedback.

Consumes only sanitized JSON on stdin. Does not call APIs, read sessions, write the
live store, dispatch a task, or install a poller. The active coordinator owns those
supported tool calls and their receipts.
"""
import datetime as dt
import hashlib
import json
import sys
from urllib.parse import urlsplit
from admin_activity_events import normalize_event

ROLE = 'role:video:asset-library'
SPECIALIST = 'role:video:anatomy-histology-cell-biology'
RESPONSIBILITIES = {'asset-scene':ROLE,'research':'role:video:scientific-research',
    'anatomy-histology-cell-biology':SPECIALIST,'visual-qa':'role:video:qa','animation':'role:video:scene-animation'}
BRIEF_FIELDS = ['tissueLayers','cellTypes','morphology','relativeScale','normalVsPathological','displayConventions']
LIMIT = 32768
STATUSES = {'inProgress':'running', 'completed':'done', 'failed':'failed', 'interrupted':'cancelled'}

def exact(value, keys):
    if not isinstance(value, dict) or set(value) != set(keys):
        raise ValueError('Unexpected handoff shape')
    return value

def text(value, limit=240):
    if not isinstance(value,str) or not value.strip() or len(value)>limit or any(ord(c)<32 for c in value):
        raise ValueError('Invalid bounded text')
    return value

def utc(value):
    parsed=dt.datetime.fromisoformat(text(value,40).replace('Z','+00:00'))
    if parsed.utcoffset()!=dt.timedelta(0):raise ValueError('UTC observation required')
    return parsed

def digest(value):
    return hashlib.sha256(json.dumps(value,sort_keys=True,separators=(',',':')).encode()).hexdigest()

def project(snapshot,binding,previous=None,now=None):
    now=now or dt.datetime.now(dt.timezone.utc)
    exact(binding, ['threadId','hostId','roleId','assignment'])
    for k,v in binding.items():text(v,200)
    if binding['roleId']!=ROLE:raise ValueError('Only the existing artist owner is in scope')
    exact(snapshot,['schemaVersion','source','readAt','thread','turns'])
    if snapshot['schemaVersion']!=1 or snapshot['source']!='codex.read_thread':raise ValueError('Unsupported snapshot source')
    checked=utc(snapshot['readAt'])
    if checked>now+dt.timedelta(seconds=30):raise ValueError('Future read timestamp')
    thread=snapshot['thread']
    exact(thread,['id','hostId','kind','title','status','updatedAt'])
    if thread['id']!=binding['threadId'] or thread['hostId']!=binding['hostId'] or thread['kind']!='codex':
        raise ValueError('Snapshot does not match the one bound owner')
    text(thread['title'],140)
    if not isinstance(snapshot['turns'],list) or len(snapshot['turns'])!=1:raise ValueError('Exactly one latest turn is required')
    turn=snapshot['turns'][0]
    exact(turn,['id','status','startedAt','completedAt'])
    text(turn['id'],200);text(turn['status'],60)
    state=STATUSES.get(turn['status'],'unknown')
    # Null source timestamps are retained as missing, never filled with file mtimes.
    # Read time dates the status snapshot; it is not an execution heartbeat.
    semantic={'threadId':thread['id'],'hostId':thread['hostId'],'turnId':turn['id'],'status':state}
    key=digest(semantic);scope=digest(binding)
    if previous is not None:
        exact(previous,['schemaVersion','scope','semantic','key','firstObservedAt','lastCheckedAt','event'])
        exact(previous['semantic'],['threadId','hostId','turnId','status'])
        if previous['semantic']['threadId']!=binding['threadId'] or previous['semantic']['hostId']!=binding['hostId']:
            raise ValueError('Cursor source identity mismatch')
        if previous['schemaVersion']!=1 or previous['scope']!=scope or previous['key']!=digest(previous['semantic']):
            raise ValueError('Cursor does not match owner binding')
        old=normalize_event(previous['event'])
        if old!=previous['event'] or old['id']!='task:'+binding['threadId'] or old['roleId']!=ROLE or old['observedAt']!=previous['firstObservedAt']:
            raise ValueError('Invalid retained observation')
        if old['executionId']!=previous['semantic']['turnId'] or old['status']!=previous['semantic']['status'] or any(k in old for k in ['heartbeatAt','runtimeModel','requestedModel']):
            raise ValueError('Cursor observation identity mismatch')
        if utc(previous['firstObservedAt'])>utc(previous['lastCheckedAt']):raise ValueError('Invalid cursor chronology')
        if checked<utc(previous['lastCheckedAt']):
            return {'event':None,'cursor':previous,'disposition':'older_snapshot_ignored','continuousTransport':False}
        if previous['key']==key:
            return {'event':None,'cursor':{**previous,'lastCheckedAt':snapshot['readAt']},'disposition':'unchanged_snapshot_no_refresh','continuousTransport':False}
        if checked<=utc(previous['lastCheckedAt']):raise ValueError('Conflicting states at the same read time')
    event=normalize_event({'id':'task:'+thread['id'],'kind':'agent','source':'video','name':thread['title'],
        'task':'Observed task status: '+text(turn['status'],60),'assignment':binding['assignment'],
        'roleId':ROLE,'teamId':'team:video','sourceRuntime':'codex','executionId':turn['id'],
        'status':state,'observedAt':snapshot['readAt'],
        'provenance':'Supported Codex read_thread status snapshot at '+snapshot['readAt']+'; no execution heartbeat or model transport verified.'})
    cursor={'schemaVersion':1,'scope':scope,'semantic':semantic,'key':key,'firstObservedAt':snapshot['readAt'],'lastCheckedAt':snapshot['readAt'],'event':event}
    return {'event':event,'cursor':cursor,'disposition':'new_status_snapshot','continuousTransport':False}

def scientific_brief(brief,artifact,now):
    if brief is None:return None
    exact(brief,['id','version','artifact','state','sourceLinks','coverage','readyAt','provenance'])
    for key in ['id','version','artifact','provenance']:text(brief[key],500)
    if brief['artifact']!=artifact or brief['state']!='ready':raise ValueError('Brief is not ready for this environment')
    if utc(brief['readyAt'])>now+dt.timedelta(seconds=30):raise ValueError('Future brief readiness')
    links=brief['sourceLinks']
    if not isinstance(links,list) or not 1<=len(links)<=12:raise ValueError('Source-linked brief required')
    for link in links:
        parsed=urlsplit(text(link,1000))
        if parsed.scheme not in {'http','https'} or not parsed.hostname or parsed.username or parsed.password:
            raise ValueError('Invalid source reference')
    exact(brief['coverage'],BRIEF_FIELDS)
    for value in brief['coverage'].values():text(value,1000)
    return brief  # Validates the handoff contract, not scientific correctness or clinician approval.

def feedback_plan(feedback,binding,snapshot,receipt=None,now=None,brief=None):
    """Prepare an existing-thread handoff, never a second worker or canonical queue."""
    now=now or dt.datetime.now(dt.timezone.utc)
    project(snapshot,binding,now=now)  # Same narrow owner/source validation.
    exact(feedback,['id','responsibility','workKind','text','artifact','version','acceptanceEvidence','nextAction','receivedAt','provenance'])
    for k in ['id','responsibility','artifact','version','receivedAt']:text(feedback[k],200)
    for k in ['text','nextAction','provenance']:text(feedback[k],1000)
    if utc(feedback['receivedAt'])>now+dt.timedelta(seconds=30):raise ValueError('Future feedback')
    evidence=feedback['acceptanceEvidence']
    if not isinstance(evidence,list) or not 1<=len(evidence)<=8:raise ValueError('Acceptance evidence is required')
    for item in evidence:text(item,500)
    if feedback['responsibility'] not in RESPONSIBILITIES:raise ValueError('Unknown responsibility')
    if feedback['workKind'] not in {'create_environment','refine_existing','scientific_brief','visual_review','animation'}:raise ValueError('Unknown work kind')
    if (feedback['responsibility']=='asset-scene') != (feedback['workKind'] in {'create_environment','refine_existing'}):raise ValueError('Work does not match artist responsibility')
    ready_brief=scientific_brief(brief,feedback['artifact'],now)
    result={'feedbackId':feedback['id'],'state':'queued_intent','ownerRoleId':RESPONSIBILITIES[feedback['responsibility']],
            'ownerThreadId':binding['threadId'] if feedback['responsibility']=='asset-scene' else None,
            'scientificReconciliation':'required_before_acceptance','briefReference':None if not ready_brief else {'id':brief['id'],'version':brief['version']},
            'canonicalQueueAdmitted':False,'dispatched':False,'dispatchRequest':None}
    if receipt is not None:
        exact(receipt,['feedbackId','threadId','state','observedAt'])
        if receipt['feedbackId']!=feedback['id'] or receipt['threadId']!=result['ownerThreadId'] or receipt['state'] not in {'accepted','uncertain'}:
            raise ValueError('Dispatch receipt does not match this item/owner')
        if utc(receipt['observedAt'])>now+dt.timedelta(seconds=30):raise ValueError('Future receipt')
        return {**result,'state':'already_sent' if receipt['state']=='accepted' else 'reconcile_uncertain_send','dispatched':receipt['state']=='accepted'}
    if feedback['responsibility']!='asset-scene':return {**result,'state':'blocked_owner_not_connected'}
    if feedback['workKind']=='create_environment' and ready_brief is None:
        return {**result,'state':'blocked_scientific_brief','nextAction':'Route a source-linked environment specification to the Anatomy, Histology & Cell Biology Specialist; no new environment creation until ready.'}
    if (now-utc(snapshot['readAt'])).total_seconds()>90:return {**result,'state':'blocked_stale_owner_snapshot'}
    status=snapshot['turns'][0]['status']
    if status=='inProgress':return {**result,'state':'deferred_owner_busy'}
    if status not in {'completed','failed','interrupted'}:return {**result,'state':'blocked_owner_state_unknown'}
    prompt=('Owned feedback '+feedback['id']+'\nResponsibility: Asset and Scene Library Artist\n'
            'Artifact: '+feedback['artifact']+' @ '+feedback['version']+'\nFeedback: '+feedback['text']+
            '\nAcceptance evidence required: '+ '; '.join(evidence)+'\nNext action: '+feedback['nextAction']+
            '\nSource: '+feedback['provenance']+'; received '+feedback['receivedAt']+
            '\nScientific brief: '+(json.dumps(ready_brief,sort_keys=True) if ready_brief else 'Not supplied. Preserve safe existing vessel progress; record scientific gaps and reconcile against the specialist brief before acceptance. Do not create a new environment.')+
            '\nContinue in this same owner task as sole artifact writer. Preserve version history. '
            'The AI anatomy/histology/cell-biology specialist must review actual rendered output against the brief; this is not licensed clinician sign-off. '
            'Report evidence and remaining blockers; do not mark an unreviewed environment accepted or launch animation. '
            'Cadence: one environment per day; animation works one day behind using only a reviewed, version-pinned environment. Never promote unfinished work automatically.')
    return {**result,'state':'ready_for_coordinator','dispatchRequest':{'tool':'mcp__codex_app__send_message_to_thread',
            'arguments':{'threadId':binding['threadId'],'hostId':binding['hostId'],'prompt':prompt}},
            'beforeSend':'Coordinator must confirm this is still the latest owner state, persist an intent, and reconcile uncertain sends before retry. Acceptance is not execution or review.'}

def main():
    raw=sys.stdin.buffer.read(LIMIT+1)
    if len(raw)>LIMIT:raise ValueError('Handoff size exceeded')
    value=json.loads(raw)
    allowed={'snapshot','binding','previous','feedback','dispatchReceipt','scientificBrief'}
    if not isinstance(value,dict) or not {'snapshot','binding'}<=set(value) or set(value)-allowed:raise ValueError('Unexpected request shape')
    result=project(value['snapshot'],value['binding'],value.get('previous'))
    if value.get('feedback') is not None:
        result['feedback']=feedback_plan(value['feedback'],value['binding'],value['snapshot'],value.get('dispatchReceipt'),brief=value.get('scientificBrief'))
    print(json.dumps(result))

if __name__=='__main__':
    try:main()
    except (ValueError,TypeError,KeyError,OverflowError):raise SystemExit('Artist handoff rejected; check bounded source shape, owner identity and timestamps.')

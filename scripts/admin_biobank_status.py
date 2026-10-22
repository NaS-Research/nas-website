"""One fixed-file Gemini progress reader. No result content, execution or model inspection."""
import datetime as dt
import json
import os
import pathlib
import re
import stat

ROOT=pathlib.Path('/Volumes/AGNDJ 6TB/NaS-Work/BioBank-Insights')
PROVENANCE='Gemini self-reported department progress · fixed local status file; not verified execution'
KEYS={'schema_version','producer','reported_at','state','current_task','completed_deliverables','blockers'}

def text(value,limit):
    return isinstance(value,str) and bool(value.strip()) and len(value)<=limit and not any(ord(c)<32 for c in value)

def task_id(value):
    return isinstance(value,str) and re.fullmatch(r'BI-[0-9]{3}',value) is not None

def relative_result(value):
    if not text(value,500) or '\\' in value or ':' in value or '%' in value:
        raise ValueError('Invalid relative result path')
    parts=value.split('/')
    if len(parts)<2 or parts[0]!='results' or any(p in {'','.', '..'} or p.startswith('.') for p in parts):
        raise ValueError('Invalid relative result path')
    return value

def normalize(value,now=None):
    now=now or dt.datetime.now(dt.timezone.utc)
    if not isinstance(value,dict) or set(value)!=KEYS or type(value['schema_version']) is not int or value['schema_version']!=1:
        raise ValueError('Invalid progress schema')
    seed=value['producer']=='unknown' and value['reported_at'] is None and value['state']=='unknown' and value['current_task'] is None and value['completed_deliverables']==[] and value['blockers']==[]
    if seed:
        return {'departmentId':'dept:biobank','sourceState':'awaiting_report','producer':'unknown','reportedAt':None,'reportedState':'unknown','currentTask':None,'completedDeliverables':[],'blockers':[],'provenance':'Department setup only; no Gemini report received','executionState':'unknown'}
    if value['producer']!='gemini' or value['state'] not in {'working','waiting','blocked','done','unknown'}:
        raise ValueError('Invalid producer/state')
    timestamp=value['reported_at']
    if not isinstance(timestamp,str) or len(timestamp)>40 or not re.fullmatch(r'[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(?:\.[0-9]{1,6})?(?:Z|\+00:00)',timestamp):
        raise ValueError('UTC producer timestamp required')
    parsed=dt.datetime.fromisoformat(timestamp.replace('Z','+00:00'))
    if parsed>now+dt.timedelta(seconds=30):raise ValueError('Future producer timestamp')
    current=value['current_task']
    if current is not None and (not isinstance(current,dict) or set(current)!={'id','title'} or not task_id(current['id']) or not text(current['title'],200)):
        raise ValueError('Invalid current task')
    results=value['completed_deliverables'];blockers=value['blockers']
    if not isinstance(results,list) or len(results)>20 or not isinstance(blockers,list) or len(blockers)>20:raise ValueError('Too many records')
    for result in results:
        if not isinstance(result,dict) or set(result)!={'task_id','path'} or not task_id(result['task_id']):raise ValueError('Invalid result')
        relative_result(result['path'])
    for blocker in blockers:
        if not isinstance(blocker,dict) or set(blocker)!={'task_id','reason'} or not task_id(blocker['task_id']) or not text(blocker['reason'],500):raise ValueError('Invalid blocker')
    return {'departmentId':'dept:biobank','sourceState':'available','producer':'gemini','reportedAt':timestamp,'reportedState':value['state'],'currentTask':current,'completedDeliverables':results,'blockers':blockers,'provenance':PROVENANCE,'executionState':'unknown'}

def read_status(root=ROOT):
    # Refuse symlinked directories and non-private department/status boundaries.
    current=pathlib.Path(root.anchor)
    for part in root.parts[1:]:
        current=current/part
        info=current.lstat()
        if stat.S_ISLNK(info.st_mode) or not stat.S_ISDIR(info.st_mode):raise ValueError('Unsafe department boundary')
    info=root.stat()
    if info.st_uid!=os.getuid() or info.st_mode&0o077:raise ValueError('Department root is not owner-private')
    folder=root/'status';info=folder.lstat()
    if not stat.S_ISDIR(info.st_mode) or info.st_uid!=os.getuid() or info.st_mode&0o077:raise ValueError('Status directory is not owner-private')
    directory=os.open(folder,os.O_RDONLY|os.O_DIRECTORY|os.O_NOFOLLOW|os.O_CLOEXEC)
    try:fd=os.open('department-status.json',os.O_RDONLY|os.O_NONBLOCK|os.O_NOFOLLOW|os.O_CLOEXEC,dir_fd=directory)
    finally:os.close(directory)
    with os.fdopen(fd,'rb') as stream:
        info=os.fstat(stream.fileno())
        if not stat.S_ISREG(info.st_mode) or info.st_uid!=os.getuid() or info.st_mode&0o077 or info.st_nlink!=1:raise ValueError('Status file is not owner-private')
        raw=stream.read(16385)
    if len(raw)>16384:raise ValueError('Status file exceeds 16 KiB')
    def unique(pairs):
        data={}
        for key,value in pairs:
            if key in data:raise ValueError('Duplicate status field')
            data[key]=value
        return data
    report=normalize(json.loads(raw,object_pairs_hook=unique))
    # Metadata only: no artifact contents are opened; missing references stay unverified.
    for result in report['completedDeliverables']:
        path=root
        for part in result['path'].split('/'):
            path=path/part
            try:info=path.lstat()
            except FileNotFoundError:break
            if stat.S_ISLNK(info.st_mode):raise ValueError('Symlinked result reference')
    return report

class BioBankStatus:
    def __init__(self):self.cached=None
    def poll(self):
        try:
            self.cached=read_status()
            return self.cached
        except (OSError,ValueError,TypeError,KeyError):
            # The producer time never advances on poll, setup, failure or cached delivery.
            return {**(self.cached or {'departmentId':'dept:biobank','producer':'unknown','reportedAt':None,'reportedState':'unknown','currentTask':None,'completedDeliverables':[],'blockers':[],'provenance':'Fixed BioBank status file unavailable','executionState':'unknown'}),'sourceState':'unavailable'}

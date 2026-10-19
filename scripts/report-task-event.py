"""Emit this producer's own observed task lifecycle to the existing local status reporter."""
import argparse,datetime,json,os,pathlib,tempfile
ROOT=pathlib.Path('/Volumes/AGNDJ 6TB/NaS-Work')
def write_event(path,entry):
 path=pathlib.Path(path)
 parent=path.parent.resolve(strict=True)
 if not parent.is_relative_to(ROOT.resolve(strict=True)) or path.is_symlink():raise RuntimeError('Task events must remain on the approved external workspace.')
 if path.exists() and (path.stat().st_mode&0o077 or path.stat().st_uid!=os.getuid()):raise RuntimeError('Task event file must be private to its producer.')
 current=json.loads(path.read_text()) if path.exists() else {'version':1,'tasks':[]}
 tasks=[task for task in current.get('tasks',[]) if task.get('id')!=entry['id']]
 tasks.append(entry);content=json.dumps({'version':1,'tasks':tasks[-20:]},separators=(',',':'))
 if len(content.encode())>65536:raise RuntimeError('Task event size exceeded.')
 fd,name=tempfile.mkstemp(prefix='.task-event-',dir=parent)
 try:
  os.fchmod(fd,0o600)
  with os.fdopen(fd,'w') as f:f.write(content)
  os.replace(name,path)
 finally:
  if os.path.exists(name):os.unlink(name)
def main():
 parser=argparse.ArgumentParser(description=__doc__)
 parser.add_argument('--event-file',required=True);parser.add_argument('--task-id',required=True);parser.add_argument('--name',required=True);parser.add_argument('--task',required=True)
 parser.add_argument('--state',required=True,choices=['running','waiting','needs_you','done','failed','unknown','idle','blocked'])
 parser.add_argument('--source',choices=['website','research','video'],default='website')
 parser.add_argument('--provenance',required=True);parser.add_argument('--team-id');parser.add_argument('--department-id');parser.add_argument('--parent-task-id')
 args=parser.parse_args()
 for value,limit in [(args.task_id,160),(args.name,140),(args.task,240),(args.provenance,240)]:
  if not value.strip() or len(value)>limit:raise RuntimeError('Invalid task event field.')
 entry={'id':'task:'+args.task_id,'name':args.name,'task':args.task,'source':args.source,'kind':'agent','status':args.state,'observedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'provenance':args.provenance,'origin':'producer-task-event'}
 if args.team_id:entry['teamId']=args.team_id
 if args.department_id:entry['departmentId']=args.department_id
 if args.parent_task_id:entry['parentId']='task:'+args.parent_task_id
 write_event(args.event_file,entry);print(json.dumps({'event':'task-observation','id':entry['id'],'state':entry['status'],'observedAt':entry['observedAt']}))
if __name__=='__main__':main()

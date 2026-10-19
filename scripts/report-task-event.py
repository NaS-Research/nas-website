"""Emit a producer's own observed lifecycle into the existing private status stream."""
import argparse
import json
import sys
from admin_activity_events import MAX_STORE_BYTES, EventStoreError, stamp, write_event

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--event-file', required=True)
    parser.add_argument('--stdin', action='store_true', help='Read one allowlisted event object; never a transcript')
    parser.add_argument('--task-id')
    parser.add_argument('--name')
    parser.add_argument('--task')
    parser.add_argument('--state', choices=['running', 'waiting', 'needs_you', 'done', 'failed', 'unknown', 'idle', 'blocked'])
    parser.add_argument('--source', choices=['website', 'research', 'video'], default='website')
    parser.add_argument('--kind', choices=['agent', 'person', 'job'], default='agent')
    parser.add_argument('--provenance')
    parser.add_argument('--team-id')
    parser.add_argument('--department-id')
    parser.add_argument('--parent-task-id')
    args = parser.parse_args()
    if args.stdin:
        data = sys.stdin.buffer.read(MAX_STORE_BYTES + 1)
        if len(data) > MAX_STORE_BYTES:
            raise EventStoreError('Event input size exceeded')
        entry = json.loads(data)
    else:
        if not all([args.task_id, args.name, args.task, args.state, args.provenance]):
            parser.error('Task ID, name, task, state and provenance are required without --stdin')
        entry = {'id': 'task:' + args.task_id, 'name': args.name, 'task': args.task,
                 'source': args.source, 'kind': args.kind, 'status': args.state,
                 'observedAt': stamp(), 'provenance': args.provenance}
        if args.team_id:
            entry['teamId'] = args.team_id
        if args.department_id:
            entry['departmentId'] = args.department_id
        if args.parent_task_id:
            entry['parentId'] = 'task:' + args.parent_task_id
    changed = write_event(args.event_file, entry)
    print(json.dumps({'event': 'task-observation', 'id': entry.get('id'),
                      'state': entry.get('status'), 'observedAt': entry.get('observedAt'),
                      'changed': changed}))

if __name__ == '__main__':
    try:
        main()
    except (EventStoreError, OSError, ValueError):
        raise SystemExit('Private task observation rejected; check schema, ownership and capacity.')

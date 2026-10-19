"""Observe a real child process under the approved external runner; no agent or billing inference."""
import argparse
import json
import os
import pathlib
import shlex
import signal
import subprocess
import time
import uuid
from admin_activity_events import EventStoreError, document, private_lock, stamp, text, write_event

def runner_parent():
    output = os.environ.get('NAS_OUTPUT_DIR')
    if not output:
        raise EventStoreError('Reported jobs require the approved external runner')
    job = pathlib.Path(output).parent.name
    rows = subprocess.check_output(['ps', '-axo', 'pid=,ppid=,command='], text=True)
    parents = {}
    for row in rows.splitlines():
        fields = row.strip().split(None, 2)
        if len(fields) == 3:
            parents[fields[0]] = (fields[1], fields[2])
    current, seen = str(os.getppid()), set()
    while current in parents and current not in seen:
        seen.add(current)
        parent, command = parents[current]
        try:
            args = shlex.split(command)
            if any(word.endswith('/external-project-runner.py') for word in args) and '--job' in args and args[args.index('--job')+1] == job:
                return current
        except (ValueError, IndexError):
            pass
        current = parent
    raise EventStoreError('No matching approved runner ancestor')

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--event-file', default=os.environ.get('NAS_ACTIVITY_EVENT_FILE'))
    parser.add_argument('--task-id')
    parser.add_argument('--name', required=True)
    parser.add_argument('--task', required=True)
    parser.add_argument('--source', choices=['website', 'research', 'video'], default='website')
    parser.add_argument('--interval', type=float, default=10)
    parser.add_argument('command', nargs=argparse.REMAINDER)
    args = parser.parse_args()
    command = args.command[1:] if args.command[:1] == ['--'] else args.command
    if not args.event_file or not command or not text(args.name,140) or not text(args.task,200) or not 1 <= args.interval <= 30:
        parser.error('A private event file, safe labels, command and 1–30 second observation interval are required')
    runner = runner_parent()
    with private_lock(args.event_file) as path:
        document(path, missing=True)
    identity = 'task:' + (args.task_id or 'job:' + uuid.uuid4().hex)
    if len(identity) > 200:
        parser.error('Task ID is too long')
    started = time.monotonic()
    process = None
    interrupted = None
    program = pathlib.Path(command[0]).name[:30]
    def emit(state, phase):
        event = {'id':identity, 'kind':'job', 'origin':'guarded-process', 'name':args.name,
                 'task':args.task if phase != 'exit' else ('Completed: ' if state == 'done' else 'Stopped: ') + args.task,
                 'source':args.source, 'status':state, 'observedAt':stamp(),
                 'elapsedSeconds':round(time.monotonic()-started,3), 'runnerPid':runner,
                 'provenance':'Observed guarded subprocess (' + program + '): ' + phase}
        if process:
            event['processId'] = str(process.pid)
        try:
            changed = write_event(args.event_file, event)
            print(json.dumps({'event':'process-lifecycle','taskId':identity,'phase':phase,
                              'state':state,'observedAt':event['observedAt'],'stored':changed}), flush=True)
        except (OSError, ValueError):
            # Telemetry failure must not terminate an already authorized build.
            print(json.dumps({'event':'process-lifecycle','taskId':identity,'phase':phase,
                              'telemetry':'unavailable'}), flush=True)
    try:
        process = subprocess.Popen(command)
    except OSError:
        emit('failed', 'start failed')
        return 127
    def stop(signum, frame):
        nonlocal interrupted
        if interrupted is None:
            interrupted = signum
            if process.poll() is None:
                process.send_signal(signum)
    previous = {sig:signal.signal(sig,stop) for sig in (signal.SIGTERM,signal.SIGINT)}
    try:
        emit('running','start')
        next_report = time.monotonic() + args.interval
        while process.poll() is None:
            if time.monotonic() >= next_report:
                # This proves only the observed subprocess is still alive, never agent thought/progress.
                emit('running','process alive')
                next_report = time.monotonic() + args.interval
            time.sleep(.1)
        state = 'unknown' if interrupted else 'done' if process.returncode == 0 else 'failed'
        emit(state,'exit')
        return 128+interrupted if interrupted else process.returncode if process.returncode >= 0 else 128-process.returncode
    finally:
        for sig, handler in previous.items():
            signal.signal(sig,handler)

if __name__ == '__main__':
    try:
        raise SystemExit(main())
    except (EventStoreError, OSError, ValueError):
        raise SystemExit('Reported job rejected before launch; check the approved runner and private event store.')

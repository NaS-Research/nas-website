"""Owner-private, serialized last-observation store. Never reads conversation internals."""
import contextlib
import datetime as dt
import errno
import fcntl
import json
import math
import os
import pathlib
import stat
import tempfile
import time
import uuid

ROOT = pathlib.Path('/Volumes/AGNDJ 6TB/NaS-Work')
MAX_STORE_BYTES = 48 * 1024
MAX_TASKS = 100
TERMINAL_KEEP = 20
TERMINAL_DAYS = 7
MAX_ARCHIVE_BYTES = 16 * 1024 * 1024
STATES = {'running', 'waiting', 'needs_you', 'done', 'failed', 'unknown', 'idle', 'blocked', 'cancelled'}
TERMINAL = {'done', 'failed', 'cancelled'}
SOURCES = {'website', 'research', 'video'}

class EventStoreError(ValueError):
    pass

class CapacityError(EventStoreError):
    pass

def stamp():
    return dt.datetime.now(dt.timezone.utc).isoformat()

def text(value, limit):
    return (isinstance(value, str) and bool(value.strip()) and len(value) <= limit
            and all(ord(char) >= 32 for char in value))

def timestamp(value):
    if not isinstance(value, str):
        raise EventStoreError('Observation timestamp must be a timezone-aware string')
    try:
        parsed = dt.datetime.fromisoformat(value.replace('Z', '+00:00'))
    except ValueError:
        raise EventStoreError('Invalid observation timestamp') from None
    if parsed.tzinfo is None or parsed > dt.datetime.now(dt.timezone.utc) + dt.timedelta(seconds=30):
        raise EventStoreError('Invalid or future observation timestamp')
    return parsed

def paid_usage(value):
    """Validate reported provenance; this is not independent verification of a billing account."""
    if not isinstance(value, dict) or value.get('kind') not in {'actual', 'estimate'}:
        return None
    if value.get('billingType') not in {'api', 'metered'}:
        return None
    amount = value.get('amountUsd')
    if isinstance(amount, bool) or not isinstance(amount, (int, float)) or not math.isfinite(amount) or amount <= 0:
        return None
    if any(not text(value.get(key), 240) for key in ('provider', 'service', 'provenance', 'recordId')):
        return None
    try:
        timestamp(value.get('asOf'))
    except EventStoreError:
        return None
    if value['kind'] == 'estimate' and not text(value.get('basis'), 500):
        return None
    result = {key: value[key] for key in ('kind', 'billingType', 'amountUsd', 'provider', 'service', 'provenance', 'recordId', 'asOf')}
    result['scope'] = 'exclusive' if value.get('scope') == 'exclusive' else 'unconfirmed'
    if value['kind'] == 'estimate':
        result['basis'] = value['basis']
    return result

def normalize_event(value, stored=False):
    if not isinstance(value, dict):
        raise EventStoreError('Event must be an object')
    for key, limit in [('id', 200), ('name', 140), ('task', 240), ('provenance', 240)]:
        if not text(value.get(key), limit):
            raise EventStoreError('Missing or invalid event field: ' + key)
    if not value['id'].startswith('task:') or value.get('source') not in SOURCES or value.get('status') not in STATES:
        raise EventStoreError('Invalid event identity, source or state')
    timestamp(value.get('observedAt'))
    kind = value.get('kind', 'agent')
    if kind not in {'agent', 'person', 'job'}:
        raise EventStoreError('Invalid worker kind')
    result = {key: value[key] for key in ('id', 'name', 'task', 'provenance', 'source', 'status', 'observedAt')}
    result.update(kind=kind, origin='guarded-process' if value.get('origin') == 'guarded-process' and kind == 'job' else 'producer-task-event')
    for key in ('teamId', 'departmentId', 'parentId', 'roleId', 'executionId', 'sourceRuntime', 'epoch', 'originEventId'):
        if key in value:
            if not text(value[key], 200):
                raise EventStoreError('Invalid assignment or parent')
            result[key] = value[key]
    if result.get('parentId') == result['id']:
        raise EventStoreError('An event cannot be its own parent')
    for key in ('processId', 'runnerPid'):
        val = value.get(key)
        if isinstance(val, (str, int)) and not isinstance(val, bool) and str(val).isdigit() and 0 < int(val) < 2**31:
            result[key] = str(val)
    val = value.get('elapsedSeconds')
    if isinstance(val, (int, float)) and not isinstance(val, bool) and math.isfinite(val) and val >= 0:
        result['elapsedSeconds'] = val
    if text(value.get('model'), 100) and text(value.get('modelProvenance'), 240):
        result.update(model=value['model'], modelProvenance=value['modelProvenance'])
    for key in ('stateChangedAt', 'heartbeatAt'):
        if key in value:
            timestamp(value[key])
            result[key] = value[key]
    if text(value.get('assignment'), 240):
        result['assignment'] = value['assignment']
    if value.get('placement') == 'unassigned':
        result['placement'] = 'unassigned'
    if value.get('entityKind') in {'worker_process', 'codex_subagent', 'operator_operation'}:
        result['entityKind'] = value['entityKind']
    for field in ('runtimeModel', 'requestedModel'):
        item = value.get(field)
        if isinstance(item, dict) and text(item.get('model'), 100) and text(item.get('provenance'), 240):
            timestamp(item.get('observedAt'))
            if field == 'runtimeModel' and (not result.get('executionId') or (item.get('executionId') != result['executionId'] or item.get('appliesTo') == 'next-turn')):
                raise EventStoreError('Effective model observation must match the actual execution identity')
            model = {key: item[key] for key in ('model', 'provenance', 'observedAt')}
            if text(item.get('reasoningEffort'), 30):
                model['reasoningEffort'] = item['reasoningEffort']
            if text(item.get('executionId'), 200):
                model['executionId'] = item['executionId']
            model['appliesTo'] = item.get('appliesTo') if item.get('appliesTo') in {'configuration', 'current-turn', 'next-turn'} else 'configuration'
            result[field] = model
    usage = paid_usage(value.get('paidUsage'))
    if usage:
        result['paidUsage'] = usage
    if stored and 'writtenAt' in value:
        timestamp(value['writtenAt'])
        result['writtenAt'] = value['writtenAt']
    return result

def checked_path(path):
    path = pathlib.Path(path).absolute()
    if path.name in {'', '.', '..'} or path.suffix != '.json' or path.is_symlink():
        raise EventStoreError('An ordinary JSON file is required')
    parent = path.parent.resolve(strict=True)
    approved = ROOT.resolve(strict=True)
    if not parent.is_relative_to(approved) or parent.stat().st_dev != approved.stat().st_dev or parent.stat().st_uid != os.getuid():
        raise EventStoreError('Event files must remain on the approved external workspace')
    return parent / path.name

def private_fd(path, flags, create=False):
    flags |= getattr(os, 'O_NOFOLLOW', 0) | getattr(os, 'O_CLOEXEC', 0)
    if create:
        flags |= os.O_CREAT
    fd = os.open(path, flags, 0o600)
    info = os.fstat(fd)
    if not stat.S_ISREG(info.st_mode) or info.st_uid != os.getuid() or info.st_mode & 0o077 or info.st_nlink != 1:
        os.close(fd)
        raise EventStoreError('File must be regular, owner-private and not hard-linked')
    return fd

@contextlib.contextmanager
def private_lock(path, exclusive=True, timeout=2, suffix='.lock'):
    path = checked_path(path)
    lock = path.with_name(path.name + suffix)
    fd = private_fd(lock, os.O_RDWR, create=True)
    deadline = time.monotonic() + timeout
    mode = fcntl.LOCK_EX if exclusive else fcntl.LOCK_SH
    try:
        while True:
            try:
                fcntl.flock(fd, mode | fcntl.LOCK_NB)
                break
            except BlockingIOError:
                if time.monotonic() >= deadline:
                    raise EventStoreError('Private event-store lock is busy') from None
                time.sleep(.01)
        yield path
    finally:
        os.close(fd)

def read_private_json(path, limit=MAX_STORE_BYTES):
    path = checked_path(path)
    fd = private_fd(path, os.O_RDONLY)
    with os.fdopen(fd, 'rb') as source:
        data = source.read(limit + 1)
    if len(data) > limit:
        raise EventStoreError('Private JSON size limit exceeded')
    try:
        return json.loads(data, parse_constant=lambda value: (_ for _ in ()).throw(ValueError('Non-finite JSON')))
    except (ValueError, UnicodeError):
        raise EventStoreError('Private JSON is invalid') from None

def document(path, missing=False):
    if missing and not path.exists():
        return {'version': 1, 'tasks': []}
    value = read_private_json(path)
    if not isinstance(value, dict) or type(value.get('version')) is not int or value['version'] != 1 or not isinstance(value.get('tasks'), list) or len(value['tasks']) > MAX_TASKS:
        raise EventStoreError('Invalid task-event document')
    tasks = [normalize_event(event, stored=True) for event in value['tasks']]
    if len({event['id'] for event in tasks}) != len(tasks):
        raise EventStoreError('Duplicate event identities')
    return {'version': 1, 'tasks': tasks}

def read_events(path):
    with private_lock(path, exclusive=False) as path:
        return document(path)['tasks']

def sync_directory(path):
    fd = os.open(path, os.O_RDONLY | getattr(os, 'O_DIRECTORY', 0))
    try:
        try:
            os.fsync(fd)
        except OSError as error:
            if error.errno not in {errno.EINVAL, errno.EBADF, errno.ENOTSUP}:
                raise
    finally:
        os.close(fd)

def encode(value):
    return json.dumps(value, separators=(',', ':'), ensure_ascii=True, allow_nan=False).encode()

def archive(path, retired):
    if not retired:
        return
    folder = path.with_name(path.stem + '.archive')
    if folder.is_symlink():
        raise EventStoreError('Archive must not be a symlink')
    folder.mkdir(mode=0o700, exist_ok=True)
    info = folder.stat()
    if info.st_uid != os.getuid() or info.st_mode & 0o077:
        raise EventStoreError('Archive must be owner-private')
    total = 0
    for item in folder.iterdir():
        fd = private_fd(item, os.O_RDONLY)
        try:
            total += os.fstat(fd).st_size
        finally:
            os.close(fd)
    data = encode({'version': 1, 'archivedAt': stamp(), 'tasks': retired})
    if total + len(data) > MAX_ARCHIVE_BYTES:
        raise CapacityError('Private event archive budget reached; preserve editions and review capacity')
    target = folder / (dt.datetime.now(dt.timezone.utc).strftime('%Y%m%dT%H%M%S') + '-' + uuid.uuid4().hex + '.json')
    fd = private_fd(target, os.O_WRONLY | os.O_EXCL, create=True)
    with os.fdopen(fd, 'wb') as output:
        output.write(data)
        output.flush()
        os.fsync(output.fileno())
    sync_directory(folder)

def write_event(path, entry):
    entry = normalize_event(entry)
    with private_lock(path) as path:
        current = document(path, missing=True)['tasks']
        prior = next((task for task in current if task['id'] == entry['id']), None)
        if prior:
            old_time, new_time = timestamp(prior['observedAt']), timestamp(entry['observedAt'])
            if old_time > new_time or (old_time == new_time and prior['status'] in TERMINAL and entry['status'] not in TERMINAL):
                return False
            if {k: v for k, v in prior.items() if k != 'writtenAt'} == entry:
                return False
        entry['writtenAt'] = stamp()
        by_id = {task['id']: task for task in current}
        by_id[entry['id']] = entry
        tasks = list(by_id.values())
        live = [task for task in tasks if task['status'] not in TERMINAL]
        if len(live) > MAX_TASKS:
            raise CapacityError('Active or unresolved observations cannot be evicted')
        terminal = sorted((task for task in tasks if task['status'] in TERMINAL), key=lambda task: timestamp(task['observedAt']), reverse=True)
        cutoff = dt.datetime.now(dt.timezone.utc) - dt.timedelta(days=TERMINAL_DAYS)
        retained_terminal = [task for task in terminal if timestamp(task['observedAt']) >= cutoff][:min(TERMINAL_KEEP, MAX_TASKS-len(live))]
        def retained():
            selected = {task['id'] for task in live + retained_terminal}
            return [task for task in tasks if task['id'] in selected]
        keep = retained()
        # If the byte budget is tight, retire only terminal records, never unresolved work.
        while len(encode({'version': 1, 'tasks': keep})) > MAX_STORE_BYTES and retained_terminal:
            retained_terminal.pop()
            keep = retained()
        content = encode({'version': 1, 'tasks': keep})
        if len(content) > MAX_STORE_BYTES:
            raise CapacityError('Active observations exceed the private snapshot byte budget')
        kept_ids = {task['id'] for task in keep}
        retired = [task for task in terminal if task['id'] not in kept_ids]
        archive(path, retired)
        fd, temporary = tempfile.mkstemp(prefix='.task-events-', dir=path.parent)
        try:
            os.fchmod(fd, 0o600)
            with os.fdopen(fd, 'wb') as output:
                output.write(content)
                output.flush()
                os.fsync(output.fileno())
            if path.is_symlink():
                raise EventStoreError('Event file changed to a symlink')
            os.replace(temporary, path)
            sync_directory(path.parent)
        finally:
            if os.path.exists(temporary):
                os.unlink(temporary)
        return True

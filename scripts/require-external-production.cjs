'use strict';
const fs = require('node:fs');
const path = require('node:path');
const holds = require('./production-hold-policy.cjs');
const VOLUME = '/Volumes/AGNDJ 6TB';
const HOLD = '/Users/agndj/Documents/NaS/.production-storage-hold.json';

function validate({platform = process.platform, cwd = process.cwd(), env = process.env, io = fs} = {}) {
  if (platform !== 'darwin') return {applies: false};
  const fail = message => { throw new Error('NaS production blocked: ' + message); };
  if (!io.existsSync(VOLUME) || io.lstatSync(VOLUME).isSymbolicLink()) fail('external drive unavailable');
  const device = io.statSync(VOLUME).dev;
  if (device === io.statSync('/System/Volumes/Data').dev || device === io.statSync('/Volumes').dev) fail('external drive is not mounted');
  if (holds.held(holds.scopeFor(io.realpathSync(cwd)), io)) fail('user storage-remediation hold is active for this workflow; do not resume');
  const onExternal = value => {
    if (!value) return false;
    const resolved = io.realpathSync(value);
    return resolved.startsWith(VOLUME + path.sep) && io.statSync(resolved).dev === device;
  };
  if (!onExternal(cwd)) fail('working project must be on the external drive');
  for (const key of ['TMPDIR', 'TMP', 'TEMP', 'XDG_CACHE_HOME', 'npm_config_cache', 'PIP_CACHE_DIR', 'PYTHONPYCACHEPREFIX', 'NAS_OUTPUT_DIR']) {
    if (!onExternal(env[key])) fail(key + ' must resolve to external scratch storage');
  }
  const internal = io.statfsSync('/System/Volumes/Data');
  if (internal.bavail * internal.bsize < 10 * 1024 ** 3) fail('internal free space is below 10 GiB');
  const external = io.statfsSync(VOLUME);
  if (external.bavail * external.bsize < 100 * 1024 ** 3) fail('external reserve is below 100 GiB');
  return {applies: true, device, externalProject: io.realpathSync(cwd)};
}
module.exports = {validate};
if (require.main === module) {
  try { console.log(JSON.stringify(validate())); }
  catch (error) { console.error(error.message); process.exitCode = 1; }
}

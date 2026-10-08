'use strict';
const fs = require('node:fs');
const path = require('node:path');
const V = '/Volumes/AGNDJ 6TB';
const controls = ['/Users/agndj/Documents/NaS/.production-storage-hold.json', V+'/NaS-Work/control/production-hold.json'];
function scopeFor(cwd) {
  const roots = {Learn:[V+'/NaS-Work/Learn',V+'/NaS-Codex-Private/Learn-Audit'],CVA:[V+'/NaS-Work/CVA'],Video:[V+'/NaS-Work/Video',V+'/NaS-Video']};
  for (const [scope, values] of Object.entries(roots)) if (values.some(root => cwd===root || cwd.startsWith(root+path.sep))) return scope;
  return 'Unknown';
}
function held(scope, io=fs) {
  for (const control of controls) {
    if (!io.existsSync(control)) continue;
    try {
      const settings = JSON.parse(io.readFileSync(control,'utf8'));
      const release = settings.scope_releases && settings.scope_releases[scope];
      const receipt = V+'/NaS-Work/control/'+scope.toLowerCase()+'-storage-readiness-20261007.json';
      if (scope==='Unknown' || settings.resume_authorized!==true || !release || release.status!=='storage_cleared' || release.receipt!==receipt) return true;
      const resolved = io.realpathSync(receipt);
      const device = io.statSync(V).dev;
      if (!resolved.startsWith(V+path.sep) || io.statSync(resolved).dev!==device) return true;
      const proof = JSON.parse(io.readFileSync(resolved,'utf8'));
      if (proof.scope!==scope || proof.status!=='storage_cleared' || proof.external_device!==device) return true;
    } catch (_) { return true; }
  }
  return false;
}
module.exports={held,scopeFor};

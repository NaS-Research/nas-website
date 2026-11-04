 'use strict';
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),cp=require('node:child_process');
const V='/Volumes/AGNDJ 6TB';
function volumeInfo(root) {
 const text=cp.execFileSync('/usr/sbin/diskutil',['info','-plist',root],{encoding:'utf8',timeout:15000});
 const value=key=>{const m=text.match(new RegExp('<key>'+key+'</key>\\s*<string>([^<]*)</string>'));return m&&m[1];};
 return {VolumeUUID:value('VolumeUUID'),MountPoint:value('MountPoint'),Internal:/<key>Internal<\/key>\s*<false\s*\/>/.test(text)?false:true};
}
function verify(root,uuid,bindings,{io=fs,readInfo=volumeInfo}={}) {
 if(!io.existsSync(root)||io.lstatSync(root).isSymbolicLink())throw Error('External volume missing or symlinked');
 const resolvedRoot=io.realpathSync(root),device=io.statSync(root).dev;
 if(resolvedRoot!==root||device===io.statSync(path.dirname(root)).dev)throw Error('External volume is not mounted');
 const info=readInfo(root);
 if(!uuid||info.VolumeUUID!==uuid||info.MountPoint!==root||info.Internal!==false)throw Error('Persistent external volume identity mismatch');
 if(!bindings||Object.keys(bindings).length===0)throw Error('Saved content identity bindings missing');
 for(const [relative,expected] of Object.entries(bindings)) {
  if(path.isAbsolute(relative)||relative.split(path.sep).includes('..'))throw Error('Unsafe content binding path');
  const p=path.join(root,relative);
  if(io.lstatSync(p).isSymbolicLink())throw Error('Unsafe content binding symlink');
  const resolved=io.realpathSync(p),s=io.statSync(resolved);
  if(resolved!==p||!resolved.startsWith(root+path.sep)||s.dev!==device||!s.isFile()||crypto.createHash('sha256').update(io.readFileSync(resolved)).digest('hex')!==expected)throw Error('Saved external content identity mismatch');
 }
 return {volumeUUID:uuid,deviceEvidence:device,contentBindingsChecked:Object.keys(bindings).length};
}
function readiness(proof,io=fs) {
 if(proof.identity_version!==1||proof.external_project_root!==V+'/NaS-Work/Learn')throw Error('Learn stable identity requires supported recovery');
 return verify(V,proof.external_volume_uuid,proof.identity_bindings,{io});
}
module.exports={verify,readiness,volumeInfo};

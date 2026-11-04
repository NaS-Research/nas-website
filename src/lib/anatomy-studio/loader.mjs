// Independently authored NaS loader contract; no script-injection/bundle fallback.
import {deliveryBlock} from './registry.mjs';
export function createOrganLoader({fetcher = fetch, readBytes, onBytesRejected, parse, dispose, notify, digest = async bytes => {
 const hash = await crypto.subtle.digest('SHA-256', bytes);
 return Array.from(new Uint8Array(hash), byte => byte.toString(16).padStart(2, '0')).join('');
}}) {
 let generation = 0, request = null, current = null;
 function release() { if (current) { dispose(current); current = null; } }
 function invalidate() { generation++; request?.abort(); request = null; release(); }
 async function load(asset) {
  invalidate(); const token = generation;
  const blocked = deliveryBlock(asset);
  if (blocked) { notify({status:'blocked', message:blocked}); return; }
  request = new AbortController(); const signal = request.signal;
  notify({status:'loading', message:`Loading ${asset.label.toLowerCase()} anatomy…`});
  try {
   if (asset.deliveryScope === 'loopback-admin-only' && !['127.0.0.1','localhost','[::1]'].includes(window.location.hostname)) throw new Error('These assets are admitted for local private review only.');
   if(asset.deliveryScope==='nas-public-website' && !['nasresearch.bio','www.nasresearch.bio','127.0.0.1','localhost','[::1]'].includes(window.location.hostname)) throw new Error('This release is configured for the NaS website.');
   const url = new URL(asset.deliveryURL, window.location.origin);
   if (url.origin !== window.location.origin) throw new Error('Model must use the admitted same-origin mount.');
   let bytes;
   if(readBytes){bytes=await readBytes(asset,{signal,onProgress:({received,total})=>{if(token===generation&&!signal.aborted)notify({status:'loading',message:`Loading model… ${(received/1000000).toFixed(1)} / ${(total/1000000).toFixed(1)} MB`,received,total});}});if(!(bytes instanceof Uint8Array)||bytes.byteOffset!==0||bytes.byteLength!==bytes.buffer.byteLength||bytes.byteLength>asset.byteBudget)throw Error('Model exceeds its review byte budget.');}
   else {
   const response = await fetcher(url.href, {signal, credentials:'same-origin', cache:'no-store'});
   if (!response.ok) throw new Error(`Model request failed (${response.status}).`);
   const reader = response.body?.getReader();
   if (!reader) throw new Error('Model response did not provide a bounded byte stream.');
   const chunks = []; let received = 0;
   while (true) {
    const {done, value} = await reader.read(); if (done) break;
    received += value.byteLength;
    if (received > asset.byteBudget) { await reader.cancel(); throw new Error('Model exceeds its review byte budget.'); }
    chunks.push(value);
   }
   bytes = new Uint8Array(received); let offset = 0;
   for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
   }
   const verifiedHash = await digest(bytes.buffer);
   if (token !== generation || signal.aborted) return;
   if (verifiedHash !== asset.sourceSHA256) {onBytesRejected?.(asset);throw new Error('Model source hash does not match its reviewed identity.');}
   if(readBytes)notify({status:'preparing',message:'Preparing model…'});
   const model = await parse(bytes.buffer, asset);
   if (token !== generation) { dispose(model); return; }
   current = model; notify({status:'ready', assetId:asset.id, model, message:`${asset.label} anatomy loaded.`});
  } catch (error) {
   if (token !== generation || signal.aborted) return;
   notify({status:'error', message:error instanceof Error ? error.message : 'Unable to load the model.'});
  }
 }
 return {load, reset:invalidate, contextLost() { invalidate(); notify({status:'context-lost', message:'The 3D context was lost. Retry after graphics become available.'}); }, dispose:invalidate};
}

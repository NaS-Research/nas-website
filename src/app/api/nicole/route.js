import {authReady,isSiteOrigin} from '@/lib/auth/config.mjs';
import {authClient} from '@/lib/auth/server';
import {handleNicoleRequest} from '@/lib/nicole/handler.mjs';
import {generateNicoleAnswer,NICOLE_MODEL} from '@/lib/nicole/answer.mjs';
import {nicoleContext} from '@/lib/nicole/context';
export const dynamic='force-dynamic';
export const runtime='nodejs';
export const maxDuration=60;
function originAllowed(origin){
 if(isSiteOrigin(origin))return true;
 // Preview hosts are bound by the hosting environment, not a request-supplied Host.
 return process.env.NAS_WORKSPACE_DESIGN_PREVIEW==='true'&&[process.env.NAS_WORKSPACE_PREVIEW_ORIGIN].some(url=>{try{return origin===new URL(url).origin;}catch{return false;}});
}
export async function POST(request){return handleNicoleRequest(request,{originAllowed,authReady,authClient,key:process.env.OPENAI_API_KEY,contextFor:nicoleContext,generate:generateNicoleAnswer});}

// Public service metadata only; no credential values or account data.
export async function GET(){return Response.json({configured:authReady()&&Boolean(process.env.OPENAI_API_KEY),model:NICOLE_MODEL},{headers:{'Cache-Control':'no-store'}});}

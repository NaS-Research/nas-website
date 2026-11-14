import {authReady,isSiteOrigin} from '@/lib/auth/config.mjs';
import {authClient} from '@/lib/auth/server';
import {handleLibrary} from '@/lib/nicole/library-handler.mjs';
export const dynamic='force-dynamic';
export const runtime='nodejs';
const originAllowed=origin=>isSiteOrigin(origin)||(process.env.NAS_WORKSPACE_DESIGN_PREVIEW==='true'&&origin===process.env.NAS_WORKSPACE_PREVIEW_ORIGIN);
const handle=request=>handleLibrary(request,{authReady,authClient,originAllowed});
export const GET=handle;
export const PUT=handle;

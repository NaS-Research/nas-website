const fs=require('fs'),Module=require('module'),assert=require('node:assert/strict');
const root=process.cwd(),req=Module.createRequire(root+'/package.json');
(async()=>{
const swc=req('next/dist/build/swc');await swc.loadBindings();
async function compile(file,mocks={}){
 const {code}=await swc.transform(fs.readFileSync(root+'/'+file,'utf8'),{filename:root+'/'+file,jsc:{parser:{syntax:'ecmascript',jsx:true},transform:{react:{runtime:'automatic'}}},module:{type:'commonjs'}});
 const m=new Module(root+'/'+file+'.qa.cjs');m.require=id=>Object.hasOwn(mocks,id)?mocks[id]:req(id);m._compile(code,root+'/'+file+'.qa.cjs');return m.exports;
}
const passed=[];let user=null,role=null,roleError=null;
const auth=await compile('src/lib/auth/admin.js',{'server-only':{},'./config.mjs':{authReady:()=>true},'./server':{authClient:async()=>({auth:{getUser:async()=>({data:{user}})},from:()=>({select:()=>({eq:()=>({maybeSingle:async()=>({data:role?{role}:null,error:roleError})})})})})}});
assert.equal((await auth.adminSession()).isAdmin,false);passed.push('No session is not admin');
user={id:'test',user_metadata:{role:'admin'}};assert.equal((await auth.adminSession()).isAdmin,false);passed.push('User-editable metadata cannot grant admin');
role='admin';assert.equal((await auth.adminSession()).isAdmin,true);passed.push('Database membership grants admin');
roleError={message:'unavailable'};assert.equal((await auth.adminSession()).isAdmin,false);passed.push('Role lookup failure denies access');
let current={user:null,isAdmin:false},storageError=false;
const route=await compile('src/app/api/admin/activity/route.js',{'next/server':{NextResponse:{json:(body,options)=>Response.json(body,options)}},'@/lib/auth/admin':{adminSession:async()=>current},'@/lib/admin/organization':{organizationForSources:()=>({version:1,nodes:[]})}});
for(const c of [{user:null,isAdmin:false,status:401},{user:{id:'ordinary'},isAdmin:false,status:403},{user:{id:'owner'},isAdmin:true,status:200}]){
current={...c,client:{from:()=>({select:()=>({order:async()=>({data:[],error:storageError?{}:null})})})}};
const response=await route.GET();assert.equal(response.status,c.status);assert.equal('organization' in await response.json(),c.status===200);assert.equal(response.headers.get('cache-control'),'private, no-store');passed.push('Activity endpoint '+c.status);
}
storageError=true;assert.equal((await route.GET()).status,503);passed.push('Activity source failure is explicit');
const Console=()=>null;
const page=await compile('src/app/account/admin/page.jsx',{'next/navigation':{redirect:path=>{throw Error('redirect:'+path)},notFound:()=>{throw Error('not-found')}},'@/lib/auth/admin':{adminSession:async()=>current},'@/components/admin/ActivityConsole':Console,'@/components/admin/activity.css':{},'@/components/admin/agent-tree.css':{}});
current={user:null,isAdmin:false};await assert.rejects(page.default(),/redirect:\/login/);passed.push('Direct admin page redirects anonymous access');
current={user:{id:'ordinary'},isAdmin:false};await assert.rejects(page.default(),/not-found/);passed.push('Direct admin page rejects ordinary member');
current={user:{id:'owner'},isAdmin:true};assert.equal((await page.default()).type,Console);passed.push('Direct admin page renders for verified admin');
fs.writeFileSync(process.env.NAS_OUTPUT_DIR+'/qa.json',JSON.stringify({passed},null,2));console.log(JSON.stringify({passed}));
})().catch(error=>{console.error(error);process.exit(1)});

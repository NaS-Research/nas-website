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
const route=await compile('src/app/api/admin/activity/route.js',{'next/server':{NextResponse:{json:(body,options)=>Response.json(body,options)}},'@/lib/auth/admin':{adminSession:async()=>current}});
for(const c of [{user:null,isAdmin:false,status:401},{user:{id:'ordinary'},isAdmin:false,status:403},{user:{id:'owner'},isAdmin:true,status:200}]){
current={...c,client:{from:()=>({select:()=>({order:async()=>({data:[],error:storageError?{}:null})})})}};
const response=await route.GET();assert.equal(response.status,c.status);assert.equal(response.headers.get('cache-control'),'private, no-store');passed.push('Activity endpoint '+c.status);
}
storageError=true;assert.equal((await route.GET()).status,503);passed.push('Activity source failure is explicit');
const React=req('react'),{renderToStaticMarkup}=req('react-dom/server');
let hook=0;const now=Date.now();
let previewData={checkedAt:new Date(now).toISOString(),sources:['website','research','video'].map(source=>({source,device:'nas-studio',received_at:new Date(now).toISOString(),payload:{jobs:[],status:'reporting',httpStatus:source==='website'?200:null}}))};
const component=await compile('src/components/admin/ActivityConsole.jsx',{'react':{...React,useState:initial=>React.useState(hook++===0?previewData:initial)},'next/link':{__esModule:true,default:({children,...props})=>React.createElement('a',props,children)}});
const html=renderToStaticMarkup(React.createElement(component.default));
assert.match(html,/Operations diagram/);assert.match(html,/No running jobs reported/);assert.match(html,/3 of 3 sources connected/);passed.push('Admin diagram renders all three connected sources');
fs.writeFileSync(process.env.NAS_OUTPUT_DIR+'/preview.html','<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>body{background:#000;color:#eee;margin:0;font-family:Arial,Helvetica,sans-serif}*{box-sizing:border-box}a{color:inherit;text-decoration:none}button{font:inherit}'+fs.readFileSync(root+'/src/components/admin/activity.css','utf8')+'</style></head><body>'+html+'</body></html>');
hook=0;previewData={...previewData,sources:previewData.sources.map(row=>({...row,received_at:new Date(now-120000).toISOString()}))};
const staleHtml=renderToStaticMarkup(React.createElement(component.default));
assert.match(staleHtml,/Reports are stale/);assert.match(staleHtml,/0 of 3 sources connected/);passed.push('Stale sources become offline');
fs.writeFileSync(process.env.NAS_OUTPUT_DIR+'/qa.json',JSON.stringify({passed},null,2));console.log(JSON.stringify({passed}));
})().catch(error=>{console.error(error);process.exit(1)});

const ID=/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export const emptyLibrary=()=>({folders:[],conversations:[]});
export function libraryName(value){
 if(typeof value!=='string')throw new Error('Enter a name.');
 const name=value.replace(/[\u0000-\u001f\u007f]/g,'').trim().replace(/\s+/g,' ');
 if(!name||Array.from(name).length>80)throw new Error('Use a name of 1–80 characters.');
 return name;
}
export function validateLibrary(value){
 if(!value||!Array.isArray(value.folders)||!Array.isArray(value.conversations)||value.folders.length>30||value.conversations.length>100)throw new Error('Your library can hold 30 folders and 100 conversations.');
 const ids=new Set();const id=value=>{if(typeof value!=='string'||!ID.test(value)||ids.has(value))throw new Error('Invalid library entry.');ids.add(value);return value;};
 const folders=value.folders.map(f=>({id:id(f?.id),name:libraryName(f?.name)}));const folderIds=new Set(folders.map(f=>f.id));
 const conversations=value.conversations.map(c=>{
  if(c?.folderId!==null&&!folderIds.has(c?.folderId))throw new Error('Choose a folder in your account.');
  if(!Array.isArray(c.messages)||c.messages.length>20)throw new Error('Invalid conversation.');
  let size=0;const messages=c.messages.map(m=>{if(!m||!['user','assistant'].includes(m.role)||typeof m.content!=='string'||m.content.length>12000)throw new Error('Invalid message.');size+=m.content.length;return {role:m.role,content:m.content};});
  if(size>60000)throw new Error('This conversation is too long.');
  return {id:id(c.id),title:libraryName(c.title),folderId:c.folderId,messages};
 });
 const library={folders,conversations};if(new TextEncoder().encode(JSON.stringify(library)).length>1500000)throw new Error('Your conversation library is full. Remove an old conversation to make room.');
 return library;
}
export function accountProfile(user){
 const meta=user?.user_metadata||{};
 const raw=[meta.full_name,meta.name,meta.given_name].find(v=>typeof v==='string'&&v.trim()&&!v.includes('@'));
 const name=raw?raw.replace(/[\u0000-\u001f\u007f]/g,'').trim().slice(0,100):'Your account';
 let avatar=null;
 for(const raw of [meta.avatar_url,meta.picture]){
  try{const url=new URL(raw);if(url.protocol==='https:'&&!url.username&&!url.password&&!url.port&&['lh3.googleusercontent.com','lh4.googleusercontent.com','lh5.googleusercontent.com','lh6.googleusercontent.com'].includes(url.hostname)&&url.href.length<2048){avatar=url.href;break;}}catch{}
 }
 return {name,avatar};
}

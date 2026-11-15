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
  if(!Array.isArray(c.messages)||c.messages.length>100)throw new Error('Invalid conversation.');
  let size=0;const messages=c.messages.map(m=>{if(!m||!['user','assistant'].includes(m.role)||typeof m.content!=='string'||m.content.length>12000)throw new Error('Invalid message.');size+=m.content.length;return {role:m.role,content:m.content};});
  if(size>60000)throw new Error('This conversation is too long.');
  return {id:id(c.id),title:libraryName(c.title),folderId:c.folderId,messages,...(c.manualTitle===true?{manualTitle:true}:{})};
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

export function branchConversation(conversation,index,id){
 if(!conversation||!Number.isInteger(index)||index<0||conversation.messages[index]?.role!=='assistant')throw new Error('Choose a Nicole response to branch from.');
 return {...conversation,id,title:Array.from(conversation.title).slice(0,70).join('')+' · Branch',messages:conversation.messages.slice(0,index+1).map(message=>({...message}))};
}
// Bound model context independently from saved history; branching never calls the model.
export function conversationContext(messages){
 const recent=messages.slice(-18);let size=recent.reduce((total,m)=>total+m.content.length,0);
 while(size>48000&&recent.length)size-=recent.shift().content.length;
 return recent;
}
export function searchConversations(library,query){
 const term=query.trim().toLocaleLowerCase();
 return library.conversations.filter(c=>!term||c.title.toLocaleLowerCase().includes(term)||c.messages.some(m=>m.content.toLocaleLowerCase().includes(term)));
}

export function conversationTitle(question){
 let topic=typeof question==='string'?question.replace(/[\u0000-\u001f\u007f]/g,' ').trim().replace(/\s+/g,' '):'';
 topic=topic.replace(/^(?:hi|hello|hey)[,!]?\s+/i,'');
 topic=topic.replace(/^(?:(?:please\s+)?(?:can|could|would|will)\s+you\s+(?:please\s+)?|please\s+)/i,'');
 topic=topic.replace(/^(?:help\s+me\s+)?(?:build|create|make|design|develop|put together)\s+(?:me\s+)?(?:a|an|the)\s+/i,'');
 topic=topic.replace(/^(?:help\s+me\s+)?(?:find|explore|search for|learn about|understand|study(?!\s+plan\b)|review)\s+/i,'');
 topic=topic.replace(/^(?:explain|describe|summarize|teach me|tell me about)\s+/i,'');
 topic=topic.replace(/^(?:what (?:is|are)|how (?:does|do)|why (?:does|do))\s+/i,'');
 topic=topic.replace(/^(?:a|an|the)\s+/i,'');
 topic=topic.replace(/[.!?]+$/g,'').trim();
 if(/^(?:a\s+)?study plan\s+(?:for|on|about)\s+/i.test(topic))topic=topic.replace(/^study plan\s+(?:for|on|about)\s+(.+)/i,'$1 study plan');
 if(/^research in the nas library[.!?]*$/i.test(topic))topic='NaS research library';
 topic=topic.replace(/[.!?]+$/g,'').trim();
 const words=topic.split(' ').filter(Boolean);let title='';
 for(const word of words.slice(0,8)){if(Array.from((title?title+' ':'')+word).length>54)break;title+=(title?' ':'')+word;}
 if(!title)title=Array.from(topic).slice(0,54).join('');
 if(!title)return 'New conversation';
 return title[0].toLocaleUpperCase()+title.slice(1);
}
export function upgradeConversationTitles(library){
 let changed=false;
 const conversations=library.conversations.map(c=>{
  const question=c.messages.find(m=>m.role==='user')?.content;if(!question)return c;
  const oldPrefix=Array.from(question).slice(0,64).join('');
  const automatic=!c.manualTitle&&(['Earlier conversation','New conversation','New chat'].includes(c.title)||c.title===oldPrefix||c.title===oldPrefix.trim().replace(/\s+/g,' '));
  const title=automatic?conversationTitle(question):c.title;
  if(title===c.title)return c;changed=true;return {...c,title};
 });
 return changed?{...library,conversations}:library;
}

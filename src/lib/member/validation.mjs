export function validateMutation(body, item) {
 if (!body || !item || body.path !== item.path) throw new Error('Choose an available item.');
 const {action,data}=body;
 if(action==='save' && typeof data?.saved==='boolean') return {saved:data.saved};
 if(action==='note' && typeof data?.text==='string' && data.text.length<=5000 && typeof data?.section==='string' && (data.section==='' || item.sections.includes(data.section))) return {text:data.text,section:data.section};
 if(action==='progress' && item.type==='module') {
  if(data?.section!==undefined && !item.sections.includes(data.section)) throw new Error('Unknown section.');
  if(data?.completed!==undefined && typeof data.completed!=='boolean') throw new Error('Invalid completion.');
  return {...(data.section?{section:data.section}:{}),...(typeof data.completed==='boolean'?{completed:data.completed}:{})};
 }
 if(action==='practice' && ['module','practice'].includes(item.type)) {
  if(typeof data?.id!=='string' || data.id.length>180 || !data.id || !data.state || typeof data.state!=='object' || Array.isArray(data.state)) throw new Error('Invalid practice session.');
  if(JSON.stringify(data.state).length>60000) throw new Error('Practice session is too large.');
  return {id:data.id,state:data.state};
 }
 throw new Error('This change could not be saved.');
}

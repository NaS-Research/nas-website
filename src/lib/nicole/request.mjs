export const MAX_QUESTION = 4000;
export function validateNicoleInput(value) {
 if (!value || typeof value !== 'object' || typeof value.question !== 'string' || !value.question.trim() || value.question.length > MAX_QUESTION) throw new Error('Enter a question of up to 4,000 characters.');
 if (!Array.isArray(value.messages) || value.messages.length > 20) throw new Error('Start a new conversation to continue.');
 let size = 0;
 const messages = value.messages.map(message => {
  if (!message || !['user','assistant'].includes(message.role) || typeof message.content !== 'string' || message.content.length > 12000) throw new Error('The conversation could not be read. Start a new chat.');
  size += message.content.length; return {role:message.role,content:message.content};
 });
 if (size > 48000) throw new Error('Start a new conversation to continue.');
 const contextPath = typeof value.contextPath === 'string' && /^\/(research|learn)(\/|$)/.test(value.contextPath) && !/[?#%\\]/.test(value.contextPath) && !value.contextPath.includes('..') ? value.contextPath : null;
 return {question:value.question.trim(),messages,contextPath,userId:value.userId};
}
export const responseText = response => (response.output || []).filter(item => item.type === 'message' && item.role === 'assistant').flatMap(item => item.content || []).filter(part => part.type === 'output_text').map(part => part.text).join('\n');
export async function readNicoleBody(request) {
 if (!request.headers.get('content-type')?.includes('application/json')) throw new Error('JSON required.');
 const reader=request.body?.getReader(); if(!reader)throw new Error('Enter a question.');
 let size=0;const chunks=[];
 while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>80000){await reader.cancel();throw new Error('This conversation is too large.');}chunks.push(value);}
 return validateNicoleInput(JSON.parse(Buffer.concat(chunks).toString('utf8')));
}

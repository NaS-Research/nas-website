export function practiceVersion(questions){
 let hash=2166136261;for(const char of JSON.stringify(questions)){hash^=char.charCodeAt(0);hash=Math.imul(hash,16777619);}return (hash>>>0).toString(16);
}
export function snapshotPractice(questions,attempt,answers,submitted,attemptNumber,previousIds){
 return {version:practiceVersion(questions),order:attempt.map(q=>({id:q.id,choices:q.choices})),answers,submitted,attemptNumber,previousIds};
}
export function restorePractice(questions,state){
 if(!state||state.version!==practiceVersion(questions)||!Array.isArray(state.order)||state.order.length>questions.length)return null;
 const seen=new Set();const attempt=[];
 for(const stored of state.order){
  const original=questions.find(q=>q.id===stored.id);
  if(!original||seen.has(stored.id)||!Array.isArray(stored.choices)||stored.choices.length!==original.choices.length)return null;
  const pool=[...original.choices];for(const choice of stored.choices){const i=pool.indexOf(choice);if(i<0)return null;pool.splice(i,1);}
  seen.add(stored.id);attempt.push({...original,choices:stored.choices,answer:stored.choices.indexOf(original.choices[original.answer])});
 }
 const answers={};for(const [id,index] of Object.entries(state.answers||{})){const q=attempt.find(q=>String(q.id)===id);if(!q||!Number.isInteger(index)||index<0||index>=q.choices.length)return null;answers[id]=index;}
 return {attempt,answers,submitted:state.submitted===true&&Object.keys(answers).length===attempt.length,attemptNumber:Number.isInteger(state.attemptNumber)?state.attemptNumber:0,previousIds:typeof state.previousIds==='string'?state.previousIds:''};
}

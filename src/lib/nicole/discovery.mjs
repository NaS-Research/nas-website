import {normalizeSearch} from '../site-search/engine.mjs';

const filler = new Set('i a an is are am be do does you we our my your have has me can could would please the some any of on for in from and or to that with learn more about nas what which where available find show search looking resource resources offer offers there take open navigate go bring page pages study studying use using learning help material materials lesson lessons related website'.split(' '));
const topics = [['cardiology','cardiovascular','cardiac','heart'],['nephrology','kidney','renal'],['pulmonary','respiratory','lung'],['oncology','cancer'],['neurology','brain','neurologic']];
const tokens = text => normalizeSearch(text).split(' ').filter(word => word && !filler.has(word));
export function rankResources(rows, question, maximum=7) {
 const words = [...new Set(tokens(question))].slice(0,40);
 const related = new Set(topics.filter(group=>group.some(word=>words.includes(word))).flat());
 const format = /\b(videos?|films?|watch|play)\b/i.test(question)?'Video':/\b(models?|3d)\b/i.test(question)?'Model':'';
 const generic = /\b(resources|library|catalog|materials)\b/i.test(question);
 const scored=rows.map(row=>{
   const title=new Set(tokens(row.title));
   const metadata=new Set(tokens([row.category,row.description,row.keywords].join(' ')));
   let score=0;
   for(const word of words) score+=title.has(word)?10:metadata.has(word)?4:0;
   for(const word of related) if(!words.includes(word)) score+=title.has(word)?6:metadata.has(word)?2:0;
   const passages=(row.passages||[]).map(text=>{
     const content=new Set(tokens(text));
     return {text,score:words.reduce((n,word)=>n+Number(content.has(word)),0)};
   }).sort((a,b)=>b.score-a.score);
   score+=Math.min(5,(passages[0]?.score||0)*2);
   if(!score&&generic&&['/learn/library','/research','/learn/anatomy','/learn/watch'].includes(row.path))score=1;
   if(format===row.category && (score || words.length<=2))score+=12;
   return {score,resource:{title:row.title,path:row.path,category:row.category,description:row.description,excerpt:passages.slice(0,2).map(p=>p.text).join('\n').slice(0,1600)}};
 });
 return scored.filter(item=>item.score>0).sort((a,b)=>b.score-a.score||a.resource.title.localeCompare(b.resource.title)).slice(0,maximum).map(item=>item.resource);
}
export function requestedDestination(question,resources){
 const command=question.trim().match(/^(?:please\s+)?(?:open|go to|navigate to|take me to|bring me to)\s+(.+)$/i);
 if(!command)return null;
 const target=normalizeSearch(command[1]).replace(/^(?:the|a|an) /,'').replace(/ please$/,'');
 const paths=new Set(resources.filter(row=>normalizeSearch(row.title).replace(/^(?:the|a|an) /,'')===target).map(row=>row.path));
 if(paths.size!==1)return null;
 const [path]=paths;
 return /^\/(?!\/)/.test(path)&&!path.includes('\\')?path:null;
}
export function groundLinks(text,resources,page){
 const allowed=new Set([...resources.map(row=>row.path),page?.path]);
 return text.replace(/\[([^\]\n]+)\]\(([^)\s]+)\)/g,(match,label,url)=>{
   const path=url.replace(/^https:\/\/nasresearch\.bio(?=\/)/,'');
   return allowed.has(path)?'['+label+']('+path+')':label;
 });
}

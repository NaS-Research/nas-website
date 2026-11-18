import 'server-only';
import {researchItems} from '@/data/researchLibrary';
import {researchProjects} from '@/data/researchProjects';
import {pharmacyModules} from '@/data/pharmacyModules';
import {pharmacyLessons} from '@/data/pharmacyLearning';
import {learningVideos,videoWatchUrl} from '@/data/learningVideos';
import {getLatestLearningVideos} from '@/lib/learningVideoFeed';
import {verifiedFallback} from '@/lib/learningVideoCollection.mjs';
import {PUBLIC_STUDIO_ORGANS} from '@/lib/anatomy-studio/public-registry.mjs';
import {publicRecord} from '@/lib/site-search/engine.mjs';
import {publicSearchIndex} from '@/lib/site-search/catalog.mjs';
import {rankResources} from './discovery.mjs';

const fields=['title','heading','text','body','content','description','summary','paragraphs','outcomes','topics','sections','submodules','lesson','keyPoints','bullets','transcript'];
function passages(value){
 if(typeof value==='string')return value.trim()?[value.trim()]:[];
 if(Array.isArray(value))return value.flatMap(passages);
 if(!value||typeof value!=='object'||!publicRecord(value))return [];
 return fields.flatMap(key=>passages(value[key]));
}
const bodies=new Map();
for(const [prefix,collection] of [['/research/',researchItems],['/learn/pharmacy/modules/',pharmacyModules],['/learn/pharmacy/',pharmacyLessons]]){
 for(const item of collection.filter(publicRecord))bodies.set(prefix+item.slug,passages(item));
}
const pages=[
 ...publicSearchIndex.map(row=>({title:row.title,path:row.href,description:row.description,category:row.category,keywords:row.searchText,passages:bodies.get(row.href)})),
 ...researchProjects.filter(publicRecord).map(row=>({title:row.title,path:'/research/projects/'+row.slug,category:'Research project',description:row.statusDetail,keywords:row.area})),
 ...PUBLIC_STUDIO_ORGANS.map(row=>({title:row.label+' model',path:'/learn/anatomy?model='+encodeURIComponent(row.id),category:'Model',description:row.studioInfo?.description||row.label,keywords:row.studioInfo?.system})),
 ...[['/','NaS Research home'],['/legal/privacy','Privacy policy'],['/legal/terms','Terms of use'],['/sitemap','Site map']].map(([path,title])=>({path,title,category:'Page',description:title}))
];
export async function nicoleContext(path,question,messages=[]){
 const latest=await getLatestLearningVideos();
 const all=new Map([...verifiedFallback(learningVideos,Infinity),...latest].filter(publicRecord).map(video=>[video.id,video]));
 const videos=Array.from(all.values(),video=>({title:video.title,path:videoWatchUrl(video.id),category:'Video',description:video.description,keywords:video.subject,passages:passages(video.transcript)}));
 const previous=messages.filter(message=>message.role==='user').at(-1)?.content;
 const followup=/\b(those|that one|these|it|them|that topic)\b/i.test(question);
 const resources=rankResources([...pages,...videos],followup&&previous?question+' '+previous:question);
 const current=pages.find(row=>row.path===path);
 const page=current?{title:current.title,path,description:current.description,excerpt:current.passages?.slice(0,8).join('\n').slice(0,5000)}:null;
 return {page,resources};
}

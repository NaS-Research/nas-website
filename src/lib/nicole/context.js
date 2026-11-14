import 'server-only';
import {researchItems} from '@/data/researchLibrary';
import {publicRecord, searchPublicIndex} from '@/lib/site-search/engine.mjs';
import {publicSearchIndex} from '@/lib/site-search/catalog.mjs';
function excerpt(value,depth=0){
 if(depth>6||value==null)return '';
 if(typeof value==='string')return value;
 if(Array.isArray(value))return value.map(item=>excerpt(item,depth+1)).join('\n');
 if(typeof value==='object')return Object.entries(value).filter(([key])=>['title','heading','paragraphs','text','content','summary','items','sections','bullets'].includes(key)).map(([,v])=>excerpt(v,depth+1)).join('\n');
 return '';
}
export function nicoleContext(path,question){
 const links=searchPublicIndex(publicSearchIndex,question,4);
 const publicPage=path?publicSearchIndex.find(item=>item.href===path):null;
 const article=publicPage?researchItems.find(item=>'/research/'+item.slug===path&&publicRecord(item)):null;
 return {page:publicPage?{title:publicPage.title,path:publicPage.href,description:publicPage.description,excerpt:article?excerpt({summary:article.summary,sections:article.sections}).slice(0,18000):null}:null,resources:links.map(({title,href,description})=>({title,path:href,description})),note:'Resource descriptions are not full papers. Only the selected page has an excerpt, if available.'};
}

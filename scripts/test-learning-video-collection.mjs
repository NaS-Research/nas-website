import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {parseRegularVideoPage,parseSubjectPlaylist,latestRegularLearningVideos,subjectPlaylists,learningChannelId,verifiedFallback} from '../src/lib/learningVideoCollection.mjs';
import {learningVideos} from '../src/data/learningVideos.js';
const regular='aaaaaaaaaaa',short='bbbbbbbbbbb',brief='ccccccccccc';
const command=(id,url='/watch?v='+id,playlistId)=>({commandMetadata:{webCommandMetadata:{url}},watchEndpoint:{videoId:id,playlistId}});
const renderer=(id,title='Regular video',url,playlistId)=>({videoRenderer:{videoId:id,title:{simpleText:title},navigationEndpoint:command(id,url,playlistId)}});
const html=data=>'<script>var ytInitialData = '+JSON.stringify(data)+';</script>';
const tab=content=>({contents:{twoColumnBrowseResultsRenderer:{tabs:[{tabRenderer:{selected:true,endpoint:{commandMetadata:{webCommandMetadata:{url:'/channel/'+learningChannelId+'/videos'}}},content}}]}}});
const videos=rows=>html({...tab({richGridRenderer:{contents:rows.map(content=>({richItemRenderer:{content}}))}}),metadata:{channelMetadataRenderer:{externalId:learningChannelId}}});
const playlist=(id,title,ids)=>html({...tab({sectionListRenderer:{contents:ids.map(videoId=>({playlistVideoRenderer:{videoId,navigationEndpoint:{watchEndpoint:{videoId,playlistId:id}}}}))}}),metadata:{playlistMetadataRenderer:{title}},microformat:{microformatDataRenderer:{urlCanonical:'https://www.youtube.com/playlist?list='+id}}});
const entry=(id,title)=>'<entry><yt:channelId>'+learningChannelId+'</yt:channelId><yt:videoId>'+id+'</yt:videoId><title>'+title+'</title><published>2026-11-01T00:00:00Z</published></entry>';
const defaults={
 videos:videos([renderer(regular),{reelItemRenderer:{videoId:short}},renderer(brief,'A 20-second regular video')]),
 feed:'<feed>'+entry(short,'A Short without hashtags')+entry(regular,'Regular video')+entry(brief,'A 20-second regular video')+'</feed>',
 pharma:playlist(subjectPlaylists[0].id,'Pharmacology',[regular,short]),
 fundamentals:playlist(subjectPlaylists[1].id,'Life Sciences Fundamentals',[brief]),
};
const fetcher=(overrides={})=>async url=>{
 const key=url.includes('/feeds/')?'feed':url.includes(subjectPlaylists[0].id)?'pharma':url.includes(subjectPlaylists[1].id)?'fundamentals':'videos';
 const value=Object.hasOwn(overrides,key)?overrides[key]:defaults[key];
 if(value instanceof Error)throw value;
 return new Response(value,{status:value===null?503:200});
};
test('Shorts excluded by selected regular Videos surface; brief regular uploads retained',async()=>{
 const result=await latestRegularLearningVideos({fetcher:fetcher(),catalog:[],warn:()=>{}});
 assert.deepEqual(result.map(v=>v.id),[regular,brief]);assert.equal(result[0].subject,'Pharmacology');assert.equal(result[1].subject,'Life Sciences Fundamentals');
});
test('duration and ordinary shorts wording do not classify a regular Videos-tab item',()=>{
 const result=parseRegularVideoPage(videos([renderer(brief,'A short lecture discussing shorts without a hashtag')]));
 assert.equal(result[0].id,brief);
});
test('Shorts endpoint and shelf excluded even when mixed into the grid',()=>{
 assert.deepEqual(parseRegularVideoPage(videos([renderer(short,'Short','/shorts/'+short),{shortsLockupViewModel:{contentId:short}},{richSectionRenderer:{content:renderer(short)}},renderer(regular)] )).map(v=>v.id),[regular]);
});
test('wrong channel, consent, unknown schema, wrong playlist fail closed',()=>{
 assert.throws(()=>parseRegularVideoPage('<html>Consent</html>'));
 assert.throws(()=>parseRegularVideoPage(videos([renderer(regular)]).replaceAll(learningChannelId,'UCwrong')));
 assert.throws(()=>parseRegularVideoPage(html(tab({sectionListRenderer:{}}))));
 assert.throws(()=>parseSubjectPlaylist(defaults.pharma,subjectPlaylists[1]));
});
test('classification outage never admits Atom uploads or unverified fallback entries',async()=>{
 const result=await latestRegularLearningVideos({fetcher:fetcher({videos:null}),catalog:[...learningVideos,{id:short,title:'Unverified',format:'short'},{id:brief,title:'Unknown'}],warn:()=>{}});
 assert(result.length>0);assert(!result.some(v=>v.id===short||v.id===brief));assert(result.every(v=>v.format==='regular'));
});
test('missing/ambiguous category membership is honest and deterministic',async()=>{
 let result=await latestRegularLearningVideos({fetcher:fetcher({pharma:null,fundamentals:null}),catalog:[],warn:()=>{}});
 assert.equal(result[0].subject,undefined);
 result=await latestRegularLearningVideos({fetcher:fetcher({fundamentals:playlist(subjectPlaylists[1].id,'Life Sciences Fundamentals',[regular,brief])}),catalog:[],warn:()=>{}});
 assert.equal(result[0].subject,'Pharmacology');
});
test('successful current playlist response does not revive stale reviewed membership',async()=>{
 const result=await latestRegularLearningVideos({fetcher:fetcher({pharma:playlist(subjectPlaylists[0].id,'Pharmacology',[])}),catalog:[{id:regular,format:'regular',subjectPlaylistId:subjectPlaylists[0].id}],warn:()=>{}});
 assert.equal(result[0].subject,undefined);
});
test('Atom outage still shows classified regular videos; title and watch identity retained',async()=>{
 const result=await latestRegularLearningVideos({fetcher:fetcher({feed:new Error('offline')}),catalog:[],warn:()=>{}});
 assert.deepEqual(result.map(v=>v.id),[regular,brief]);assert.equal(result[0].title,'Regular video');assert.equal(result[0].description,'');
});
test('actual captured channel and playlist data: both asthma films Pharmacology, Short absent',{skip:!process.env.NAS_VIDEO_AUDIT},async()=>{
 const dir=process.env.NAS_VIDEO_AUDIT;
 if(!dir)throw new Error('Set NAS_VIDEO_AUDIT to the external public metadata receipt');
 const fixture=label=>readFileSync(dir+'/'+label+'.txt','utf8');
 const actual=await latestRegularLearningVideos({catalog:learningVideos,warn:()=>{},fetcher:async url=>new Response(fixture(url.includes('/feeds/')?'uploads':url.includes(subjectPlaylists[0].id)?'pharmacology':url.includes(subjectPlaylists[1].id)?'fundamentals':'videos'))});
 assert.equal(actual.length,9);assert(!actual.some(v=>['XqL4TRA2-2E','pWjVY76IA5I'].includes(v.id)));
 for(const id of ['QtJ11zS1uHQ','28zwXoBpzsw'])assert.equal(actual.find(v=>v.id===id)?.subject,'Pharmacology');
 assert.equal(actual.find(v=>v.id==='4UXz8KnGvSo')?.subject,'Life Sciences Fundamentals');
 assert.equal(actual.find(v=>v.id==='Q42HJYwdXXk')?.subject,'Life Sciences Fundamentals');
 assert.equal(verifiedFallback(learningVideos).length,9);
});

test('both reported asthma Shorts and future Shorts are removed before carousel limit',async()=>{
 const ids=['XqL4TRA2-2E','pWjVY76IA5I','newshort001'];
 const rows=[...ids.map(id=>renderer(id,'Short','/shorts/'+id)),...Array.from({length:12},(_,i)=>renderer('regular'+String(i).padStart(4,'0')))];
 const result=await latestRegularLearningVideos({fetcher:fetcher({videos:videos(rows)}),catalog:learningVideos,warn:()=>{}});
 assert.equal(result.length,9);assert.deepEqual(result.map(v=>v.id),Array.from({length:9},(_,i)=>'regular'+String(i).padStart(4,'0')));assert(!result.some(v=>ids.includes(v.id)));
});
test('new portrait full film remains eligible based on regular Videos classification',async()=>{
 const item=renderer('portrait001','A full portrait lecture');item.videoRenderer.thumbnail={thumbnails:[{width:1080,height:1920}]};
 const result=await latestRegularLearningVideos({fetcher:fetcher({videos:videos([item])}),catalog:[],warn:()=>{}});assert.equal(result[0].id,'portrait001');
});
test('classification cache failure cannot restore either observed Short through catalog append',async()=>{
 const unsafe=[...learningVideos,...['XqL4TRA2-2E','pWjVY76IA5I'].map(id=>({id,format:'short',subjectPlaylistId:subjectPlaylists[0].id})),{id:'unknown0001',subjectPlaylistId:subjectPlaylists[0].id}];
 const result=await latestRegularLearningVideos({fetcher:fetcher({videos:new Error('classification unavailable')}),catalog:unsafe,warn:()=>{}});assert.equal(result.length,9);assert(result.every(v=>v.format==='regular'));assert(!result.some(v=>v.id==='XqL4TRA2-2E'||v.id==='pWjVY76IA5I'||v.id==='unknown0001'));
 const safeAppend=verifiedFallback(unsafe,Infinity);assert.deepEqual(safeAppend.map(v=>v.id),learningVideos.map(v=>v.id));
});
test('filtered catalog append preserves full films before Watch search/filter/pagination',()=>{
 const safe=verifiedFallback([...learningVideos,{id:'future00001',format:'regular',title:'New full film',publishedAt:'2026-11-02T00:00:00Z',subjectPlaylistId:subjectPlaylists[0].id},{id:'futureShort',format:'short',subjectPlaylistId:subjectPlaylists[0].id}],Infinity);
 assert.equal(safe.length,10);assert.equal(safe[0].id,'future00001');const latest=safe.slice(0,9),latestIds=new Set(latest.map(v=>v.id)),watch=[...latest,...safe.filter(v=>!latestIds.has(v.id))];assert.equal(watch.length,10);assert.equal(watch.slice(9,18).length,1);assert(!watch.some(v=>v.id==='futureShort'));
});

test('known provider Shorts stay excluded even with a watch endpoint and mistaken regular catalog',async()=>{
 const rows=['XqL4TRA2-2E','pWjVY76IA5I'].map(id=>renderer(id,'Renamed video'));
 const mistaken=rows.map(row=>({id:row.videoRenderer.videoId,title:'Renamed video',format:'regular',subjectPlaylistId:subjectPlaylists[0].id}));
 const result=await latestRegularLearningVideos({fetcher:fetcher({videos:videos([...rows,renderer(regular)])}),catalog:mistaken,warn:()=>{}});assert.deepEqual(result.map(v=>v.id),[regular]);assert.equal(verifiedFallback(mistaken,Infinity).length,0);
});
test('explicit new #Shorts format signal wins before slicing latest nine',async()=>{
 const rows=[renderer('newshort002','A new excerpt #Shorts'),...Array.from({length:10},(_,i)=>renderer('fullvid'+String(i).padStart(4,'0')))];
 const result=await latestRegularLearningVideos({fetcher:fetcher({videos:videos(rows)}),catalog:[],warn:()=>{}});assert.deepEqual(result.map(v=>v.id),Array.from({length:9},(_,i)=>'fullvid'+String(i).padStart(4,'0')));
});
test('cached Atom hashtag and explicit short catalog contradict an otherwise regular-shaped grid',async()=>{
 const third='normal00001';const result=await latestRegularLearningVideos({fetcher:fetcher({videos:videos([renderer(regular),renderer(brief),renderer(third)]),feed:'<feed>'+entry(regular,'Cached excerpt #Shorts')+'</feed>'}),catalog:[{id:brief,format:'short'}],warn:()=>{}});assert.deepEqual(result.map(v=>v.id),[third]);
 const fallback=verifiedFallback([{id:third,title:'Mistaken #Shorts row',format:'regular',subjectPlaylistId:subjectPlaylists[0].id}],Infinity);assert.equal(fallback.length,0);
});

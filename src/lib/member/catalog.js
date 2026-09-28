import 'server-only';
import {pharmacyModules} from '@/data/pharmacyModules';
import {pharmacyLessons} from '@/data/pharmacyLearning';
import {researchItems} from '@/data/researchLibrary';
import {researchProjects} from '@/data/researchProjects';
const entries = [
 ...pharmacyModules.map(m=>({path:`/learn/pharmacy/modules/${m.slug}`,title:m.title,type:'module',sections:m.submodules.map(s=>s.slug)})),
 ...pharmacyLessons.map(m=>({path:`/learn/pharmacy/${m.slug}`,title:m.title,type:'module',sections:m.sections.map(s=>s.id)})),
 ...researchItems.map(m=>({path:`/research/${m.slug}`,title:m.title,type:/paper|study|report/i.test(m.type)?'paper':'article',sections:[]})),
 ...researchProjects.map(m=>({path:`/research/projects/${m.slug}`,title:m.title,type:'paper',sections:[]})),
 {path:'/learn/pharmacy/atlas',title:'Human Atlas',type:'tool',sections:[]},
 {path:'/learn/pharmacy/drugs',title:'Drug Library',type:'tool',sections:[]},
 {path:'/learn/pharmacy/review',title:'Pharmacy practice',type:'practice',sections:[]},
];
export const memberCatalog = new Map(entries.filter(e=>e.title && !e.path.endsWith('/undefined')).map(e=>[e.path,e]));

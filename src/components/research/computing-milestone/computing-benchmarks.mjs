export const benchmarkMetrics=Object.freeze([
  {id:'singleCore',label:'Single-core'},
  {id:'multiCore',label:'Multi-core'},
]);
export const benchmarkMachines=Object.freeze([
  {id:'m1',name:'Mac mini · M1',chip:'M1',shortRole:'Baseline',role:'Baseline configuration',cpuCores:8,memoryGB:16,modelId:'Macmini9,1',color:'#aaa69e',singleCore:2202,multiCore:8559,submissionId:'756159',sourceUrl:'https://browser.geekbench.com/v7/cpu/756159',uploadDate:'Oct 29, 2026'},
  {id:'m3',name:'Mac Studio · M3 Ultra',chip:'M3 Ultra',shortRole:'Earlier roadmap',role:'Earlier Cortex roadmap configuration',cpuCores:32,memoryGB:512,modelId:'Mac15,14',color:'#a77a5b',singleCore:2950,multiCore:40051,submissionId:'646592',sourceUrl:'https://browser.geekbench.com/v7/cpu/646592',uploadDate:'Oct 16, 2026'},
  {id:'m5',name:'Mac Studio · M5 Ultra',chip:'M5 Ultra',shortRole:'New configuration',role:'New workstation configuration',cpuCores:30,memoryGB:96,modelId:'Mac17,15',color:'#d7b87a',singleCore:3671,multiCore:46610,submissionId:'703668',sourceUrl:'https://browser.geekbench.com/v7/cpu/703668',uploadDate:'Oct 23, 2026'},
]);
export function benchmarkDomain(metric){
  if(!benchmarkMetrics.some(m=>m.id===metric))throw new Error('Unsupported benchmark metric');
  const max=Math.max(...benchmarkMachines.map(m=>m[metric]));
  const interval=metric==='singleCore'?1000:10000;
  return Math.ceil(max/interval)*interval;
}

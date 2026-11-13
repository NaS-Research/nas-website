'use client';

import {useId, useRef, useState} from 'react';
import {Bar} from '@visx/shape';
import {useChartEntrance} from '../useChartEntrance';
import {scaleBand, scaleLinear} from '@visx/scale';
import {benchmarkMachines, benchmarkMetrics, benchmarkDomain} from './computing-benchmarks.mjs';
import styles from './computing-benchmark.module.css';

function Plot({metric, mobile, id}) {
  const {ref, phase}=useChartEntrance();
  const width=mobile?340:760,height=mobile?330:390;
  const margin={top:35,right:12,bottom:65,left:mobile?42:55};
  const plotWidth=width-margin.left-margin.right,plotHeight=height-margin.top-margin.bottom;
  const x=scaleBand({domain:benchmarkMachines.map(m=>m.id),range:[0,plotWidth],padding:.38});
  const max=benchmarkDomain(metric);
  const y=scaleLinear({domain:[0,max],range:[plotHeight,0],clamp:true});
  const ticks=Array.from({length:5},(_,i)=>max*i/4);
  return <svg ref={ref} data-chart-entrance={phase} className={mobile?styles.mobilePlot:styles.desktopPlot} viewBox={`0 0 ${width} ${height}`} role="img" aria-labelledby={id}>
    <title id={id}>{`${benchmarkMetrics.find(m=>m.id===metric).label}: ${benchmarkMachines.map(m=>`${m.name} ${m[metric].toLocaleString('en-US')}`).join('; ')}. Geekbench 7.1.0 score, higher is better.`}</title>
    <g transform={`translate(${margin.left},${margin.top})`}>
      {ticks.map(t=><g key={t}><line x1="0" x2={plotWidth} y1={y(t)} y2={y(t)} className={t===0?styles.baseline:styles.gridLine}/><text x="-10" y={y(t)+4} textAnchor="end" className={styles.axisLabel}>{t===0?'0':t>=1000?`${t/1000}k`:t}</text></g>)}
      {benchmarkMachines.map((m,index)=><g key={m.id} style={{'--bar-delay':`${index*760}ms`}}>
        <Bar className={styles.bar} x={x(m.id)} y={y(m[metric])} width={x.bandwidth()} height={plotHeight-y(m[metric])} fill={m.color}/>
        <text x={x(m.id)+x.bandwidth()/2} y={y(m[metric])-12} textAnchor="middle" className={styles.score}>{m[metric].toLocaleString('en-US')}</text>
        <text x={x(m.id)+x.bandwidth()/2} y={plotHeight+25} textAnchor="middle" className={styles.machineLabel}>{m.chip}</text>
        <text x={x(m.id)+x.bandwidth()/2} y={plotHeight+43} textAnchor="middle" className={styles.roleLabel}>{m.shortRole}</text>
      </g>)}
    </g>
  </svg>;
}

export default function ComputingBenchmark(){
  const [metric,setMetric]=useState('singleCore');
  const tabs=useRef([]),id=useId().replaceAll(':','');
  const selected=benchmarkMetrics.find(m=>m.id===metric);
  function onKeyDown(event,index){
    let next;
    if(event.key==='ArrowRight')next=(index+1)%benchmarkMetrics.length;
    if(event.key==='ArrowLeft')next=(index+benchmarkMetrics.length-1)%benchmarkMetrics.length;
    if(event.key==='Home')next=0;
    if(event.key==='End')next=benchmarkMetrics.length-1;
    if(next!==undefined){event.preventDefault();setMetric(benchmarkMetrics[next].id);tabs.current[next]?.focus();}
  }
  return <figure className={styles.figure} aria-labelledby={`${id}-heading`}>
    <div className={styles.heading}><p>Public benchmark results</p><h3 id={`${id}-heading`}>A performance reference.</h3><span>Geekbench 7.1.0 CPU · Higher scores are better</span></div>
    <div role="tablist" aria-label="CPU benchmark metric" className={styles.tabs}>
      {benchmarkMetrics.map((m,i)=><button key={m.id} ref={el=>{tabs.current[i]=el;}} id={`${id}-tab-${m.id}`} role="tab" type="button" aria-selected={metric===m.id} tabIndex={metric===m.id?0:-1} aria-controls={`${id}-panel`} onClick={()=>setMetric(m.id)} onKeyDown={e=>onKeyDown(e,i)}>{m.label}</button>)}
    </div>
    <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${metric}`} tabIndex="0" className={styles.panel} key={metric}>
      <p className={styles.metricCaption}>{selected.label} score</p>
      <Plot metric={metric} id={`${id}-desktop-${metric}`}/><Plot metric={metric} mobile id={`${id}-mobile-${metric}`}/>
    </div>
    <ul className={styles.legend} aria-label="Compared systems">
      {benchmarkMachines.map(m=><li key={m.id}><span className={styles.swatch} style={{backgroundColor:m.color}}/><div><strong>{m.name}</strong><span>{m.role}</span><small>{m.cpuCores}-core CPU · {m.memoryGB} GB memory</small></div></li>)}
    </ul>
    <figcaption className={styles.caption}>Individual public submissions, not controlled averages or measurements of NaS’s machines. All three report Geekbench 7.1.0 for macOS AArch64 and macOS 27.0.1 (26A434). Other test conditions can differ. The M3 Ultra result matches the roadmap’s CPU and memory configuration; these CPU records do not establish GPU core counts or AI inference performance.</figcaption>
    <details className={styles.sources}><summary>View scores and source submissions</summary><div className={styles.tableWrap}><table><caption>Verified Geekbench 7.1.0 individual CPU submissions</caption><thead><tr><th scope="col">System</th><th scope="col">Single-core</th><th scope="col">Multi-core</th><th scope="col">Submission</th></tr></thead><tbody>{benchmarkMachines.map(m=><tr key={m.id}><th scope="row">{m.name}</th><td>{m.singleCore.toLocaleString('en-US')}</td><td>{m.multiCore.toLocaleString('en-US')}</td><td><a href={m.sourceUrl} target="_blank" rel="noreferrer">{m.submissionId} ↗</a><span className={styles.uploadDate}>{m.uploadDate}</span></td></tr>)}</tbody></table></div></details>
  </figure>;
}

"use client";

import { scrollPageTo } from "@/lib/pageScroll.mjs";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { IconPlayerPlay, IconPlayerPause, IconArrowRight, IconSearch, IconRotate, IconFocus2 } from '@tabler/icons-react';
import { coreDrugs } from '@/data/drugLibrary';
import { drugAtlasLessons, getDrugAtlasLesson } from '@/data/drugAtlas';
import { ReceptorVisual, TissueVisual } from './DrugMechanismVisual';
import OfficialLabelProfile from './OfficialLabelProfile';
import DrugMolecularJourney from './DrugMolecularJourney';
import './drug-effects-atlas.css';

const kinds = { benefit: 'Treatment target', effect: 'Reported effect', risk: 'Safety concern' };

export default function DrugEffectsAtlas() {
  const [experience, setExperience] = useState('journey');
  const [drugId, setDrugId] = useState('dicyclomine');
  const lesson = getDrugAtlasLesson(drugId) || drugAtlasLessons[0];
  const [regionId, setRegionId] = useState('gut');
  const region = lesson.regions.find(item => item.id === regionId) || lesson.regions[0];
  const [withDrug, setWithDrug] = useState(true);
  const [scenarioId, setScenarioId] = useState('baseline');
  const scenario = lesson.scenarios.find(item => item.id === scenarioId) || lesson.scenarios[0];
  const [pane, setPane] = useState('mechanism');
  const [scale, setScale] = useState('body');
  const [answer, setAnswer] = useState(null);
  const [motion, setMotion] = useState(false);
  const [tour, setTour] = useState(false);
  const [step, setStep] = useState(1);
  const [search, setSearch] = useState('');
  const [ready, setReady] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState([]);
  const [attempt, setAttempt] = useState(0);
  const [showLabels, setShowLabels] = useState(false);
  const frame = useRef(null);
  const readyRef = useRef(false);
  const teachingPanel = useRef(null);
  const bodyPanel = useRef(null);
  const effectsPanel = useRef(null);

  const tourRegions = lesson.id === 'dicyclomine' ? ['gut', 'gut', 'mouth', 'skin'] : ['lungs', 'lungs', 'muscle', 'heart'];
  const tourLabels = ['Start with the tissue', 'Introduce the drug', 'Look beyond the target', 'Connect the safety concern'];
  const matches = search.trim() ? coreDrugs.filter(drug => `${drug.generic} ${drug.brand || ''}`.toLowerCase().includes(search.toLowerCase().trim())).slice(0, 8) : [];

  function send(command, payload = {}) { frame.current?.contentWindow?.postMessage({ type: 'nas-atlas-command', command, ...payload }, window.location.origin); }
  function chooseDrug(id) {
    const next = getDrugAtlasLesson(id);
    if (!next) return;
    setScale('body'); setDrugId(id); setRegionId(next.regions[0].id); setScenarioId('baseline'); setWithDrug(true);
    setAnswer(null); setPane('mechanism'); setSearch(''); setTour(false); setStep(1); setShowLabels(false);
    send('view', {view:'front'});
    const url = new URL(window.location.href); url.searchParams.set('drug', id); window.history.replaceState(null, '', url);
  }
  function chooseRegion(id) { setRegionId(id); setAnswer(null); setTour(false); setStep(null); }
  function selectStep(index) { setStep(index); setRegionId(tourRegions[index]); setWithDrug(index > 0); setAnswer(null); setPane('mechanism'); }

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('drug');
    const next = getDrugAtlasLesson(requested);
    if (next) { setDrugId(next.id); setRegionId(next.regions[0].id); }
    setMotion(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    function receive(event) {
      if (event.origin !== window.location.origin || event.source !== frame.current?.contentWindow) return;
      if (event.data?.type === 'nas-atlas-ready') { readyRef.current = true; setReady(true); setError(''); }
      if (event.data?.type === 'nas-atlas-loading') setLoading(event.data.layers);
      if (event.data?.type === 'nas-atlas-error') setError(event.data.message);
      if (event.data?.type === 'nas-atlas-region') {
        setRegionId(event.data.id); setAnswer(null); setTour(false); setStep(null);
        if (window.innerWidth <= 760) scrollPageTo(teachingPanel.current);
      }
    }
    window.addEventListener('message', receive);
    const timer = setTimeout(() => { if (!readyRef.current) setError('The anatomy viewer is taking longer than expected. The learning panels remain available; retry the 3D model below.'); }, 45000);
    return () => { clearTimeout(timer); window.removeEventListener('message', receive); };
  }, [attempt]);

  useEffect(() => {
    if (ready) send('lesson', { lesson: { activeId: region.id, withDrug, contextRegions: scenario.regions, regions: lesson.regions.map(({id,name,position,side,layer,match,kind,proxy}) => ({id,name,position,side,layer,match,kind,proxy})) } });
  }, [ready, lesson, region.id, withDrug, scenario]);

  useEffect(() => {
    if (!tour) return;
    const timer = setTimeout(() => { if (step === 3) setTour(false); else selectStep(step + 1); }, 6500);
    return () => clearTimeout(timer);
  }, [tour, step, lesson.id]);

  return <section className="drug-atlas" data-motion={motion ? "on" : "off"} style={{'--drug-accent':lesson.accent}} aria-label="Drug effects teaching atlas">
    <div className="drug-atlas-intro"><div><span className="drug-kicker">The medicine, explained</span><h3>{lesson.headline}</h3><p>{lesson.question}</p></div><span className="drug-atlas-edition">VISUAL LESSONS<br /><strong>01—02</strong></span></div>
    <div className="drug-experience-tabs" aria-label="Choose learning experience"><button type="button" aria-pressed={experience==='journey'} onClick={()=>setExperience('journey')}>Molecular journey</button><button type="button" aria-pressed={experience==='effects'} onClick={()=>setExperience('effects')}>Body & side effects</button>{experience==='journey'&&<select aria-label="Choose journey medicine" value={lesson.id} onChange={e=>chooseDrug(e.target.value)}>{drugAtlasLessons.map(item=><option key={item.id} value={item.id}>{item.name}</option>)}</select>}</div>
    {experience==='journey'&&<DrugMolecularJourney lesson={lesson} motion={motion} onBody={()=>setExperience('effects')}/>}
    <div className="drug-atlas-workspace" style={experience==='journey'?{display:'none'}:undefined}>
      <aside className="drug-atlas-sidebar" aria-label="Medicine and teaching context">
        <span className="drug-kicker">Start with a medicine</span><h4>Your drug explorer</h4><p className="drug-sidebar-description">Choose a medicine. Follow its action through the body.</p>
    <div className="drug-atlas-chooser">
      <div className="drug-lesson-options" aria-label="Choose a visual drug lesson">{drugAtlasLessons.map(item => <button type="button" key={item.id} aria-pressed={item.id===lesson.id} onClick={() => chooseDrug(item.id)}><strong>{item.name}</strong><span>{item.category}</span></button>)}</div>
      <div className="drug-atlas-search"><label><IconSearch size={16}/><input aria-label="Search connected drug library" placeholder="Find a medicine in the library…" value={search} onChange={e=>setSearch(e.target.value)}/></label>{search.trim() && <div className="drug-search-results" role="region" aria-label="Drug library matches">{matches.length ? matches.map(drug => getDrugAtlasLesson(drug.slug) ? <button type="button" key={drug.slug} onClick={()=>chooseDrug(drug.slug)}><strong>{drug.generic}</strong><span>Open visual lesson ↗</span></button> : <Link key={drug.slug} href={`/learn/pharmacy/drugs/${drug.slug}`}><strong>{drug.generic}</strong><span>Label profile · visual lesson not yet mapped ↗</span></Link>) : <p>No library matches. Try a generic name.</p>}</div>}</div>
    </div>
        <div className="drug-context"><label htmlFor="drug-context-select">Change the teaching scenario</label><select id="drug-context-select" value={scenario.id} onChange={e=>{const next=lesson.scenarios.find(item=>item.id===e.target.value);setScenarioId(next.id);setTour(false);setStep(null);setWithDrug(true);if(next.regions[0]){setRegionId(next.regions[0]);setAnswer(null);}}}>{lesson.scenarios.map(item=><option key={item.id} value={item.id}>{item.title}</option>)}</select><p role="status">{scenario.detail}</p>{scenario.section&&<a href={lesson.source} target="_blank" rel="noreferrer">Label {scenario.section} ↗</a>}</div>
        <div className="drug-sidebar-guide"><span className="drug-kicker">How to explore</span><ol><li>Select an effect on the right.</li><li>Compare the tissue before and after.</li><li>Trace the receptor mechanism, then test your reasoning.</li></ol></div>
        <Link className="drug-sidebar-library" href={`/learn/pharmacy/drugs/${lesson.id}`}>View {lesson.name} label profile ↗</Link>
      </aside>
      <div className="drug-atlas-center">
      <div ref={bodyPanel} className="drug-atlas-model">
        <header><div><span className="drug-kicker">Whole-body effect map</span><h4>{lesson.name}<small>{lesson.category}</small></h4></div><div className="drug-before-after" aria-label="Compare drug action"><button type="button" aria-pressed={!withDrug} onClick={()=>{setWithDrug(false);setTour(false);setStep(0);}}>Baseline</button><button type="button" aria-pressed={withDrug} onClick={()=>{setWithDrug(true);setTour(false);setStep(1);}}>With drug</button></div></header>
        <div className="drug-scale-tabs" role="group" aria-label="Choose visualization scale">{[['body','Whole body'],['tissue',region.name],['receptor','Receptor action']].map(([id,label])=><button key={id} type="button" aria-pressed={scale===id} onClick={()=>setScale(id)}>{label}</button>)}</div>
        <div className="drug-body-stage" data-scale={scale}>
          {scale!=='body'&&<div className="drug-closeup"><span className="drug-kicker">{scale==='tissue'?'Inside the tissue':'At the cell membrane'}</span><h4>{scale==='tissue'?region.headline:lesson.category}</h4>{scale==='tissue'?<TissueVisual region={region} withDrug={withDrug} motion={motion} lesson={lesson}/>:<ReceptorVisual lesson={lesson} withDrug={withDrug} motion={motion}/>}<p aria-live="polite">{scale==='tissue'?(withDrug?region.changed:region.normal):region.chain.join(' → ')}</p><span className="drug-state-label">{withDrug?'With drug':'Baseline'} · mechanism schematic</span>{region.proxy&&scale==='tissue'&&<p className="drug-proxy-note">{region.proxy}</p>}</div>}
          <iframe key={attempt} ref={frame} src="/learn/body-atlas/index.html" title="Drug effects on interactive three dimensional anatomy" />
          {scale==='body' && (!ready || loading.length>0) && !error && <span className="drug-model-status" role="status">Loading {loading.join(', ') || 'anatomy'}…</span>}
          {scale==='body' && error && <div className="drug-model-error" role="alert"><p>{error}</p><button type="button" onClick={()=>{readyRef.current=false;setReady(false);setError('');setAttempt(value=>value+1);}}>Retry anatomy</button></div>}
          <div className="drug-model-controls" hidden={scale!=='body'}><button type="button" disabled={!ready} onClick={()=>send('view',{view:'front'})}><IconRotate size={14}/>Reset view</button><button type="button" disabled={!ready || !!region.proxy} onClick={()=>send('focus-region')}><IconFocus2 size={14}/>Focus tissue</button><span>Drag to rotate · scroll to zoom</span></div>
        </div>
        <div className="drug-map-legend"><span><i className="benefit"/>Treatment target</span><span><i className="effect"/>Reported effect</span><span><i className="risk"/>Safety concern</span></div>
        <div className="drug-tour"><button type="button" aria-pressed={tour} onClick={()=>{if(tour)setTour(false);else{setScenarioId('baseline');selectStep(0);setTour(true);}}}>{tour?<IconPlayerPause size={16}/>:<IconPlayerPlay size={16}/>} {tour?'Pause walkthrough':'Follow the drug'}</button><div className="drug-tour-steps" aria-label="Walkthrough chapters">{tourLabels.map((label,i)=><button type="button" key={label} aria-label={label} aria-pressed={step===i} onClick={()=>{setTour(false);selectStep(i);}}>{String(i+1).padStart(2,'0')}</button>)}</div><p>{tourLabels[step] || 'Explore at your own pace'}</p></div>
        <p className="drug-map-note">Colored regions organize teaching points. They do not show drug concentration, likelihood, or a predicted patient response. Some effects are systemic.</p>
      </div>
      <div ref={teachingPanel} className="drug-atlas-teaching">
        <button type="button" className="drug-back-to-map" onClick={()=>scrollPageTo(effectsPanel.current)}>↑ Choose another effect</button>
        <div className="drug-region-heading"><span className={`drug-effect-kind ${region.kind}`}>{kinds[region.kind]}</span><h4>{region.headline}</h4><span className="drug-state-label">{withDrug ? `${lesson.name} present · schematic` : 'Baseline · schematic'}</span></div>
        <div className="drug-detail-tabs" role="tablist" aria-label="Teaching lens">{[['mechanism','Why here?'],['evidence','Effects & evidence'],['test','Test your reasoning']].map(([id,label])=><button type="button" role="tab" aria-selected={pane===id} key={id} onClick={()=>setPane(id)}>{label}</button>)}</div>
        <div className="drug-detail-panel" role="tabpanel" aria-label={pane==='mechanism'?'Why here?':pane==='evidence'?'Effects and evidence':'Test your reasoning'}>
          {pane==='mechanism' && <><div className="drug-causal-chain">{region.chain.map((text,index)=><div key={text}><span>{index+1}</span><p>{text}</p>{index<2&&<IconArrowRight size={14}/>}</div>)}</div><p className="drug-takeaway">{region.result}</p><ReceptorVisual lesson={lesson} withDrug={withDrug} motion={motion}/><p className="drug-evidence-note">Mechanism-based teaching interpretation. {lesson.nuance}</p></>}
          {pane==='evidence' && <><p className="drug-evidence-note">{region.evidence}. Items can come from different evidence categories; this is not a list of equally likely outcomes.</p><ul className="drug-effect-list">{region.effects.map(effect=><li key={effect}>{effect}</li>)}</ul><p className="drug-evidence-note">Postmarketing reports do not reliably establish frequency or causality. See the full label for additional events and context.</p><a href={lesson.source} target="_blank" rel="noreferrer">Read the source label ↗</a></>}
          {pane==='test' && <div className="drug-quiz"><span className="drug-kicker">Predict. Then explain.</span><p>{region.question}</p>{region.answers.map((text,index)=><button type="button" key={text} aria-pressed={answer===index} onClick={()=>setAnswer(index)} className={answer===index?(index===region.correct?'is-correct':'is-incorrect'):''}><span>{String.fromCharCode(65+index)}</span>{text}</button>)}{answer!==null&&<div className="drug-quiz-feedback" role="status"><strong>{answer===region.correct?'That follows the mechanism.':'Revisit the causal chain.'}</strong><p>{region.explanation}</p></div>}</div>}
        </div>

      </div>
      </div>
      <aside ref={effectsPanel} className="drug-effects-rail" aria-label="Effects by body area">
        <span className="drug-kicker">The science behind the changes</span><h4>What may happen</h4><p className="drug-sidebar-description">Selected effects and mechanisms. Explore a card to see why.</p>
        <div className="drug-effect-cards">{lesson.regions.map((item,index)=><button type="button" key={item.id} className={`drug-effect-card ${scenario.regions.includes(item.id)?'has-context':''}`} aria-pressed={region.id===item.id} onClick={()=>{chooseRegion(item.id);setScale('tissue');if(window.innerWidth<=760)scrollPageTo(bodyPanel.current);}}>
          <span className="drug-effect-thumbnail" aria-hidden="true"><TissueVisual region={item} withDrug={withDrug} motion={false} lesson={lesson}/></span>
          <span className="drug-effect-card-copy"><span className="drug-effect-card-organ">{String(index+1).padStart(2,'0')} · {item.name}</span><strong>{item.headline}</strong><span className={`drug-effect-kind ${item.kind}`}>{kinds[item.kind]}</span><span className="drug-effect-card-description">{item.effects.slice(0,2).join(' · ')}</span>{scenario.regions.includes(item.id)&&<span className="drug-context-flag">Relevant to this scenario</span>}</span>
        </button>)}</div>
        <p className="drug-evidence-note">These are possible effects, not findings about a patient. Frequency and evidence differ; open “Effects & evidence” for the selected area.</p>
      </aside>
    </div>
    <div className="drug-atlas-bottom"><button type="button" aria-pressed={!motion} onClick={()=>setMotion(!motion)}>{motion?<IconPlayerPause size={14}/>:<IconPlayerPlay size={14}/>} {motion?'Pause illustrations':'Animate illustrations'}</button><Link href={`/learn/pharmacy/drugs/${lesson.id}`}>Open {lesson.name} in the drug library ↗</Link><span>Sources checked {lesson.verified}</span></div>
    <details className="drug-atlas-evidence"><summary><span>Beyond the highlighted organs</span><strong>Fuller safety context & source evidence +</strong></summary><div><p>{lesson.other}</p>{lesson.trial&&<section className="drug-trial"><h4>What was actually observed?</h4><p>{lesson.trial.context}</p><div className="drug-trial-key"><span>Dicyclomine</span><span>Placebo</span></div><table><caption>Label-reported trial adverse reactions (%)</caption><thead><tr><th scope="col">Reported event</th><th scope="col">Dicyclomine</th><th scope="col">Placebo</th></tr></thead><tbody>{lesson.trial.rows.map(row=><tr key={row.name}><th scope="row">{row.name}</th><td><span style={{'--bar-width':`${row.drug*2}%`}}>{row.drug}%</span></td><td><span style={{'--bar-width':`${row.placebo*2}%`}}>{row.placebo}%</span></td></tr>)}</tbody></table></section>}<div className="drug-atlas-references">{lesson.references.map(source=><a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.title} ↗</a>)}</div><p className="drug-evidence-note">The lessons explain selected mechanisms and label-reported effects. They are not comprehensive contraindication checks, dosing tools, diagnoses, or personal treatment recommendations.</p></div></details>
    <details key={lesson.id} className="drug-atlas-evidence" onToggle={event=>setShowLabels(event.currentTarget.open)}><summary><span>Connected label sources</span><strong>Load current public label records +</strong></summary>{showLabels&&<><p className="drug-evidence-note">Generic-name results may include other formulations or combination products. This visual lesson uses {lesson.sourceLabel}.</p><OfficialLabelProfile key={lesson.id} generic={lesson.id}/></>}</details>
  </section>;
}

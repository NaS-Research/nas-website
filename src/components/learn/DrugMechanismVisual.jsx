"use client";

export function ReceptorVisual({ lesson, withDrug, motion }) {
  const blocked = lesson.action === 'block' && withDrug;
  return <div className={`drug-receptor ${motion ? '' : 'is-paused'} ${blocked ? 'is-blocked' : ''}`}>
    <svg viewBox="0 0 440 185" role="img" aria-label={blocked ? `${lesson.name} blocks muscarinic signaling in this schematic.` : withDrug ? `${lesson.name} activates beta 2 signaling in this schematic.` : 'Baseline signaling before the selected drug.'}>
      <defs><linearGradient id={`membrane-${lesson.id}`} x2="0" y2="1"><stop stopColor="#789c8750" /><stop offset="1" stopColor="#789c8708" /></linearGradient></defs>
      <rect x="12" y="109" width="416" height="25" rx="10" fill={`url(#membrane-${lesson.id})`} />
      {Array.from({length:22},(_,i)=><g key={i} stroke="#91b8a35c"><circle cx={20+i*19} cy="111" r="3" fill="#91b8a33a"/><path d={`M${20+i*19} 115v14`}/></g>)}
      <path d="M193 82 L193 142 Q220 154 247 142 L247 82 L234 82 L234 112 Q220 124 206 112 L206 82 Z" fill="#182f27" stroke="#9ab49e" strokeWidth="2" />
      <path d="M65 52 C120 30 180 43 220 82" fill="none" stroke="#779d894f" strokeDasharray="3 5" />
      <circle className="receptor-signal" cx="0" cy="0" r="6" fill="#98d3be" />
      {withDrug && <g className="receptor-drug"><path d={blocked ? 'M207 66H233L240 80L233 94H207L200 80Z' : 'M211 73H229L235 84L229 96H211L205 84Z'} fill={blocked ? '#deb985' : '#92d6c2'} stroke="#fff5d35f" /><text x="285" y="63" fill="#ddcbb0" fontSize="11">{lesson.name}</text><path d="M279 67L242 79" stroke="#ddcbb079" /></g>}
      <text x="22" y="32" fill="#a4b6ab" fontSize="10">{lesson.action === 'block' ? 'Acetylcholine' : 'Adrenergic signaling'}</text>
      <text x="20" y="154" fill="#6f897b" fontSize="9">CELL MEMBRANE</text>
      <text x="220" y="173" fill={blocked ? '#deb985' : '#a4d3bb'} fontSize="11" textAnchor="middle">{blocked ? 'Signal reduced' : withDrug ? 'β₂ → cAMP ↑' : 'Baseline tissue signaling'}</text>
      <text x="315" y="117" fill="#8a9b8e" fontSize="9">{lesson.receptor}</text>
    </svg>
    <span>Receptor schematic · not molecular structure or receptor occupancy</span>
  </div>;
}

export function TissueVisual({ region, withDrug, motion, lesson }) {
  const variant = region.visual;
  const muted = '#263b32'; const accent = withDrug ? lesson.accent : '#89b6a4';
  return <div className={`tissue-visual tissue-visual--${variant} ${withDrug ? 'with-drug' : ''} ${motion ? '' : 'is-paused'}`} style={{'--tissue-accent':accent}}>
    <svg viewBox="0 0 440 120" role="img" aria-label={`${region.name}: ${withDrug ? region.changed : region.normal} Schematic illustration.`}>
      {variant === 'gut' && <><path d="M35 43Q80 15 130 43T225 43T320 43T410 43M35 79Q80 105 130 79T225 79T320 79T410 79" fill="none" stroke={accent} strokeWidth="4" className="tissue-gut"/><path d="M35 61H410" stroke={muted} strokeWidth="2"/><circle className="tissue-transit" cx="0" cy="61" r="8" fill={accent}/><text x="220" y="116" textAnchor="middle" fill={accent} fontSize="10">{withDrug ? 'Motility reduced' : 'Coordinated smooth muscle activity'}</text></>}
      {variant === 'secretion' && <><path d="M180 28 Q220 -6 260 28L245 61H195Z" fill={muted} stroke={accent}/>{[0,1,2,3,4].map(i=><path key={i} className="tissue-drop" style={{animationDelay:`${i*.35}s`,opacity:withDrug&&i>0?.08:1,animationName:withDrug&&i>0?'none':undefined}} d={`M${170+i*25} 73q-12 17 0 17q12 0 0-17`} fill={accent}/>)}<text x="220" y="116" textAnchor="middle" fill={accent} fontSize="10">{withDrug ? 'Secretion reduced' : 'Secretory response'}</text></>}
      {variant === 'eye' && <><path d="M80 55Q220 -33 360 55Q220 142 80 55" fill={muted} stroke={accent}/><circle cx="220" cy="55" r="38" fill="#89ae9740" stroke={accent}/><circle cx="220" cy="55" r={withDrug?26:12} fill="#060c09" className="tissue-pupil"/><text x="220" y="116" textAnchor="middle" fill={accent} fontSize="10">{withDrug?'Pupil may dilate · accommodation impaired':'Pupil and near-focus control'}</text></>}
      {variant === 'heart' && <><path className="tissue-heart" d="M210 78C170 49 173 14 199 15Q219 15 220 32Q230 9 251 17C280 39 245 70 220 88Z" fill={`${accent}45`} stroke={accent} strokeWidth="2"/><path className="tissue-pulse" d="M25 65H84L91 58L100 65H126L135 40L146 84L155 65H180M278 65H316L326 40L337 84L346 65H415" fill="none" stroke={accent} strokeWidth="2"/><text x="220" y="116" textAnchor="middle" fill={accent} fontSize="10">{withDrug?'Rate may increase · no predicted BPM':'Schematic cardiac rhythm'}</text></>}
      {variant === 'bladder' && <><path d="M172 25Q220 -2 268 25Q284 76 234 84V104H206V84Q156 76 172 25Z" fill={muted} stroke={accent} strokeWidth="2"/><path d="M192 37Q220 20 248 37M192 49Q220 32 248 49" stroke={accent} fill="none" opacity={withDrug?.2:1}/><path d="M220 88V110" stroke={accent} strokeWidth={withDrug?2:6}/><text x="40" y="65" fill={accent} fontSize="10">{withDrug?'Less contraction':'Emptying signal'}</text></>}
      {variant === 'airway' && <><circle cx="220" cy="55" r="45" fill={muted} stroke={accent} strokeWidth="4"/><circle className="tissue-airway" cx="220" cy="55" r={withDrug&&lesson.id==='albuterol'?34:19} fill="#09120e" stroke={accent}/><path d="M90 55H155M285 55H350" stroke={accent} strokeWidth="2" strokeDasharray="6 6"/><text x="220" y="116" textAnchor="middle" fill={accent} fontSize="10">{lesson.id==='albuterol'?(withDrug?'Airway smooth muscle relaxes':'Illustrative constricted airway'):(withDrug?'Bronchial secretion may decrease':'Airway secretory signaling')}</text></>}
      {variant === 'neural' && <><path d="M75 28L115 56L80 84M115 56H180L210 22M180 56L212 90M180 56H340L373 28M340 56L373 84" stroke={accent} strokeWidth="2" fill="none"/>{[115,180,270,340].map((x,i)=><circle key={x} className="tissue-neural" style={{animationDelay:`${i*.3}s`}} cx={x} cy="56" r="7" fill={accent}/>)}<text x="220" y="116" textAnchor="middle" fill={accent} fontSize="10">{withDrug?'Alertness and cognition may change':'Neural signaling · schematic'}</text></>}
      {variant === 'muscle' && <><g className="tissue-muscle">{[25,40,55,70,85].map(y=><path key={y} d={`M90 ${y}Q220 ${y-20} 350 ${y}`} stroke={accent} strokeWidth="5" fill="none" />)}</g><text x="220" y="116" textAnchor="middle" fill={accent} fontSize="10">{withDrug?'Tremor may occur':'Skeletal muscle · schematic'}</text></>}
    </svg>
  </div>;
}

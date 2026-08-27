export const chlamydialInfectionsVisualTypes=["biology-sites","diagnosis-screening","standard-treatment","rectal-pharyngeal","pregnancy","neonatal-infection","lgv-proctitis","followup-partners","prevention-integration","clinical-integration"].map(type=>`chlamydia-${type}`);
const labels={
  "biology-sites":["Follow infection across sites","Entry","Replication","Inflammation","Spread"],
  "diagnosis-screening":["Match exposure to specimen","History","Site","NAAT","Interval"],
  "standard-treatment":["Build reliable exposure","Pregnancy","Doxycycline","Adherence","Close"],
  "rectal-pharyngeal":["Protect every compartment","Rectum","Efficacy","Reseeding","PrEP"],
  pregnancy:["Treat and prove eradication","Screen","Treat","Test cure","Retest"],
  "neonatal-infection":["Connect maternal and infant care","Exposure","Eye","Lung","Follow"],
  "lgv-proctitis":["Recognize invasive disease","Syndrome","Presume","Treat","Resolve"],
  "followup-partners":["Separate cure from reinfection","Timing","Retest","Partners","EPT"],
  "prevention-integration":["Close the prevention system","Abstain","Partners","HIV","Doxy PEP"],
  "clinical-integration":["Own the complete pathway","Site","Host","Timeline","Owner"],
};
export default function ChlamydialInfectionsVisual({type}){const data=labels[type.replace("chlamydia-","")];if(!data)return null;return <figure className="chol-visual chlamydial-infections-visual" aria-label={data[0]}><figcaption><span>Clinical pathway</span><strong>{data[0]}</strong></figcaption><div className="chol-visual__grid">{data.slice(1).map((label,index)=><div key={label}><span>{String(index+1).padStart(2,"0")}</span><strong>{label}</strong><em>{["Define the compartment","Select the evidence","Deliver the intervention","Secure the next decision"][index]}</em><p>Connect intracellular biology, anatomy, treatment, follow-up, and prevention.</p></div>)}</div></figure>}

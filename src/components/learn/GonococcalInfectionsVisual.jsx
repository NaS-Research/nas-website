export const gonococcalInfectionsVisualTypes=["biology-transmission","diagnosis-sites","uncomplicated-treatment","pharyngeal-followup","alternatives-new-oral","pregnancy-neonatal","disseminated-infection","resistance-failure","partners-prevention","clinical-integration"].map(type=>`gonorrhea-${type}`);
const labels={
  "biology-transmission":["Map every exposed surface","Exposure","Attachment","Inflammation","Spread"],
  "diagnosis-sites":["Match site to specimen","History","NAAT","Culture","AST"],
  "uncomplicated-treatment":["Deliver exact exposure","Weight","Site","Ceftriaxone","Close"],
  "pharyngeal-followup":["Protect the pharyngeal boundary","Treat","Wait","Prove cure","Retest"],
  "alternatives-new-oral":["Keep options inside the label","Barrier","Site","Population","Verify"],
  "pregnancy-neonatal":["Protect parent and newborn","Screen","Treat","Prevent","Escalate"],
  "disseminated-infection":["Find the silent source","Skin","Tendon","Joint","Deep site"],
  "resistance-failure":["Preserve resistance evidence","Audit","Culture","Consult","Report"],
  "partners-prevention":["Close the transmission system","Partners","Abstain","Retest","Prevent"],
  "clinical-integration":["Own the complete pathway","Site","Host","Drug","Next action"],
};
export default function GonococcalInfectionsVisual({type}){
  const data=labels[type.replace("gonorrhea-","")];
  if(!data)return null;
  return <figure className="chol-visual gonococcal-infections-visual" aria-label={data[0]}>
    <figcaption><span>Clinical pathway</span><strong>{data[0]}</strong></figcaption>
    <div className="chol-visual__grid">{data.slice(1).map((label,index)=><div key={label}><span>{String(index+1).padStart(2,"0")}</span><strong>{label}</strong><em>{["Define the compartment","Select the evidence","Deliver the intervention","Secure the next decision"][index]}</em><p>Connect anatomy, susceptibility, host factors, follow-up, and transmission control.</p></div>)}</div>
  </figure>;
}

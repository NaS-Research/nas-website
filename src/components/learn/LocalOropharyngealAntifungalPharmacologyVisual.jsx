export const localOropharyngealAntifungalPharmacologyVisualTypes=[
  "oropharyngeal-candida-biology","local-delivery-selection","nystatin-target-sar","nystatin-administration","nystatin-safety","clotrimazole-troche-pharmacology","clotrimazole-troche-safety","miconazole-buccal-pharmacology","miconazole-administration","miconazole-safety-interactions","integrated-mucosal-system"
].map((type)=>`local-oropharyngeal-${type}`);

const diagrams={
  "oropharyngeal-candida-biology":{title:"Define the oral Candida syndrome",eyebrow:"Compartment map",nodes:["Colonization","Mucosal disease","Esophageal warning","Host defense"]},
  "local-delivery-selection":{title:"Choose the exposure system",eyebrow:"Selection map",nodes:["Severity","Contact time","Adherence","Escalation"]},
  "nystatin-target-sar":{title:"Disrupt the fungal membrane",eyebrow:"Polyene mechanism",nodes:["Polyene scaffold","Sterol binding","Permeability","Cellular leakage"]},
  "nystatin-administration":{title:"Calculate and retain the dose",eyebrow:"Suspension pathway",nodes:["Verify concentration","Measure volume","Coat and retain","Complete course"]},
  "nystatin-safety":{title:"Monitor local therapy",eyebrow:"Safety pathway",nodes:["Tolerability","Hypersensitivity","Failure audit","Escalation"]},
  "clotrimazole-troche-pharmacology":{title:"Sustain salivary azole exposure",eyebrow:"Troche mechanism",nodes:["CYP51 inhibition","Slow dissolution","Salivary exposure","Fourteen days"]},
  "clotrimazole-troche-safety":{title:"Protect the slow-dissolve system",eyebrow:"Verification map",nodes:["Confirm syndrome","Liver context","Safe technique","Interaction review"]},
  "miconazole-buccal-pharmacology":{title:"Build once-daily mucoadhesion",eyebrow:"Buccal mechanism",nodes:["CYP51 inhibition","Upper-gum adhesion","Local release","CYP inhibition"]},
  "miconazole-administration":{title:"Control adhesion and replacement",eyebrow:"Time pathway",nodes:["Place and press","Before six hours","After six hours","Next dose"]},
  "miconazole-safety-interactions":{title:"Manage allergy and interactions",eyebrow:"Risk pathway",nodes:["Milk protein","Anaphylaxis","Warfarin","Sensitive substrates"]},
  "integrated-mucosal-system":{title:"Close the mucosal treatment loop",eyebrow:"Clinical system",nodes:["Verify","Select and teach","Monitor","Prevent recurrence"]}
};

const captions=["Define the biological input","Protect the product exposure","Measure the patient state","Own the next clinical action"];

export default function LocalOropharyngealAntifungalPharmacologyVisual({type}){
  const data=diagrams[type.replace("local-oropharyngeal-","")];
  if(!data)return null;
  return <figure className="chol-visual local-oropharyngeal-visual" aria-label={data.title}>
    <figcaption><span>{data.eyebrow}</span><strong>{data.title}</strong></figcaption>
    <div className="chol-visual__grid">
      {data.nodes.map((label,index)=><div key={label}><span>{String(index+1).padStart(2,"0")}</span><strong>{label}</strong><em>{captions[index]}</em><p>Keep diagnosis, formulation, technique, safety, response, and follow-up connected.</p></div>)}
    </div>
  </figure>;
}

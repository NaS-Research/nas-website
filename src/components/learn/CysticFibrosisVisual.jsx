const diagrams={
  "cf-biology":{accent:"#79a5b2",eyebrow:"Epithelial transport",title:"One channel defect, several organ systems",columns:[["Channel","Chloride and bicarbonate","Reduced CFTR changes salt, water, pH, and secretion"],["Surface","Dehydrated mucus","Impaired clearance creates obstruction and infection"],["System","Multiorgan disease","Airway, pancreas, intestine, liver, sweat, and reproduction"]]},
  "cf-airway":{accent:"#8da791",eyebrow:"Airway sequence",title:"Prepare, thin, clear, then deliver",columns:[["Prepare","Bronchodilator if prescribed","Follow the center plan and assess treatment tolerance"],["Thin","Saline and dornase","Hydrate mucus and cleave DNA before physical clearance"],["Clear and deliver","Clearance, then antibiotic","Mobilize secretions, then give inhaled antibiotic separately"]]},
  "cf-pulmonary":{accent:"#7697b4",eyebrow:"Pulmonary trajectory",title:"Define decline against the patient's baseline",columns:[["Baseline","Symptoms and FEV1","Know stable function, oxygenation, weight, microbiology, and treatment implementation"],["Change","Exacerbation pattern","Integrate respiratory symptoms, physiology, complications, and alternate diagnoses"],["Recovery","Return toward baseline","Reassess response, toxicity, delivery, prevention, and advanced-care needs"]]},
  "cf-infection":{accent:"#c57e72",eyebrow:"Longitudinal microbiology",title:"Acquisition, eradication, suppression, and rescue",columns:[["Detect","Serial cultures","Organism history matters more than one snapshot"],["Prevent","Early eradication","Treat new Pseudomonas before chronic adaptation"],["Control","Suppression and acute care","Match route and intensity to infection state"]]},
  "cf-modulators":{accent:"#9b8db7",eyebrow:"Protein-directed therapy",title:"Correct trafficking, then potentiate the channel",columns:[["Eligibility","Product and genotype","Use the clinical diagnosis and genotype requirements of the current label"],["Correct","Protein processing","Increase selected mutant CFTR at the cell surface"],["Potentiate","Channel opening","Improve activity of responsive surface protein"]]},
  "cf-nutrition":{accent:"#c8a765",eyebrow:"Absorb and grow",title:"Replace digestion, measure outcomes, find complications",columns:[["Digest","PERT with intake","Lipase with eating; a specific plan for continuous feeds"],["Replace","Energy, salt, vitamins","Individualize around malabsorption and current phenotype"],["Screen","Glucose, bone, liver","Detect silent complications before decline"]]},
  "cf-systemic":{accent:"#aa879e",eyebrow:"Multisystem surveillance",title:"Find complications before they narrow the future",columns:[["Metabolic","Glucose and bone","Use OGTT, nutrition, vitamin, fracture, and density context"],["Organ reserve","Liver and kidney","Connect surveillance to drug dosing, toxicity, and transplant care"],["Cancer","Earlier colorectal screening","Apply CF-specific age, interval, preparation, and symptom evaluation"]]},
  "cf-longitudinal":{accent:"#8295aa",eyebrow:"Lifelong care",title:"Protect function while treatment and life change",columns:[["Center","Multidisciplinary care","Integrate lung, nutrition, mental health, and access"],["Protect","Infection and emergencies","Prevent transmission and recognize therapy-changing events"],["Plan","Reproduction and transplant","Discuss future options before a crisis"]]},
};
export default function CysticFibrosisVisual({type}) {
  const d=diagrams[type];
  if(!d)return null;
  const labelStyle=["cf-nutrition","cf-systemic","cf-biology","cf-airway","cf-pulmonary","cf-infection","cf-modulators"].includes(type) ? {fontSize:"1rem",lineHeight:1.55} : undefined;
  const gridStyle=["cf-biology","cf-airway","cf-pulmonary","cf-infection","cf-modulators"].includes(type) ? {gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 14rem), 1fr))"} : undefined;
  return <figure className="chol-visual" style={{"--chol-accent":d.accent}} aria-label={d.title}>
    <figcaption><span>{d.eyebrow}</span><strong>{d.title}</strong></figcaption>
    <div className="chol-visual__grid" style={gridStyle}>{d.columns.map(([n,m,e],i)=><div key={n}>
      <span>{String(i+1).padStart(2,"0")}</span>
      <strong style={labelStyle}>{n}</strong><em style={labelStyle}>{m}</em><p style={labelStyle}>{e}</p>
    </div>)}</div>
  </figure>;
}

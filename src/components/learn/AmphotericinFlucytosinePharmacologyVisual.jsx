export const amphotericinFlucytosinePharmacologyVisualTypes=["polyene-mechanism","formulations-medication-safety","spectrum-clinical-roles","administration-compatibility","infusion-reactions","renal-electrolyte-toxicity","flucytosine-mechanism-pk","flucytosine-dosing-monitoring","combination-therapy","integrated-clinical-system"].map((type)=>`amphotericin-flucytosine-${type}`);
const diagrams={
  "polyene-mechanism":["Open the fungal membrane","Polyene face","Ergosterol","Ion channel","Cell death"],
  "formulations-medication-safety":["Verify product before dose","Product","Weight","mg per kg","Final mg"],
  "spectrum-clinical-roles":["Define the invasive syndrome","Organism","Site","Host","Source"],
  "administration-compatibility":["Protect the preparation pathway","Reconstitute","Dilute","Line","Infuse"],
  "infusion-reactions":["Classify the acute physiology","Timing","Airway","Circulation","Phenotype"],
  "renal-electrolyte-toxicity":["Read the renal trajectory","Perfusion","Tubule","Potassium","Magnesium"],
  "flucytosine-mechanism-pk":["Activate inside the fungus","Permease","Deaminase","RNA and DNA","Renal exit"],
  "flucytosine-dosing-monitoring":["Turn weight into safe exposure","Weight","Per dose","Level","CBC and liver"],
  "combination-therapy":["Join efficacy to toxicity","Amphotericin","Flucytosine","Clearance","Transition"],
  "integrated-clinical-system":["Close the antifungal loop","Verify","Administer","Monitor","Reassess"]
};
const notes=["Define the input","Protect the conversion","Measure the state","Own the next action"];
export default function AmphotericinFlucytosinePharmacologyVisual({type}){const data=diagrams[type.replace("amphotericin-flucytosine-","")];if(!data)return null;return <figure className="chol-visual amphotericin-flucytosine-visual" aria-label={data[0]}><figcaption><span>High-risk antifungal system</span><strong>{data[0]}</strong></figcaption><div className="chol-visual__grid">{data.slice(1).map((label,index)=><div key={label}><span>{String(index+1).padStart(2,"0")}</span><strong>{label}</strong><em>{notes[index]}</em><p>Keep product, exposure, physiology, microbiology, and ownership connected at every step.</p></div>)}</div></figure>}

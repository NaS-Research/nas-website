export const echinocandinPharmacologyVisualTypes=["cell-wall-target-sar","species-syndrome-selection","caspofungin-system","micafungin-system","anidulafungin-system","rezafungin-weekly-system","administration-infusion-safety","resistance-susceptibility","transition-source-control","integrated-echinocandin-system"].map((type)=>`echinocandin-${type}`);
const diagrams={
  "cell-wall-target-sar":["Collapse the fungal cell wall","Lipopeptide","Fks complex","Beta glucan","Osmotic failure"],
  "species-syndrome-selection":["Define the Candida system","Species","Site","Source","Host"],
  "caspofungin-system":["Protect the caspofungin pathway","Loading","Liver","Inducer","No dextrose"],
  "micafungin-system":["Match dose to clinical role","Indication","Age","Exposure","Safety"],
  "anidulafungin-system":["Convert dose into time","Loading","Degradation","Organ status","Infusion rate"],
  "rezafungin-weekly-system":["Build the weekly calendar","Eligibility","400 mg load","200 mg weekly","Late dose"],
  "administration-infusion-safety":["Move safely from vial to vein","Product","Diluent","Line","Reaction"],
  "resistance-susceptibility":["Find failure at the target","Species","MIC","FKS","Response"],
  "transition-source-control":["Start the clock after clearance","Cultures","Source","Deep sites","Step-down"],
  "integrated-echinocandin-system":["Close the echinocandin loop","Verify","Prepare","Monitor","Transition"]
};
const notes=["Define the input","Protect the conversion","Measure the state","Own the next action"];
export default function EchinocandinPharmacologyVisual({type}){const data=diagrams[type.replace("echinocandin-","")];if(!data)return null;return <figure className="chol-visual echinocandin-visual" aria-label={data[0]}><figcaption><span>Fungal cell-wall system</span><strong>{data[0]}</strong></figcaption><div className="chol-visual__grid">{data.slice(1).map((label,index)=><div key={label}><span>{String(index+1).padStart(2,"0")}</span><strong>{label}</strong><em>{notes[index]}</em><p>Keep organism, product, exposure, source, toxicity, and ownership connected.</p></div>)}</div></figure>}

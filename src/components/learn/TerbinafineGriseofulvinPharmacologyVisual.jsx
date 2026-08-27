export const terbinafineGriseofulvinPharmacologyVisualTypes=["dermatophyte-keratin-biology","terbinafine-target-sar","terbinafine-pk-tissue","terbinafine-clinical-use","terbinafine-safety","terbinafine-interactions","griseofulvin-mitosis-keratin","griseofulvin-formulations","griseofulvin-safety-interactions","integrated-dermatophyte-system"].map((type)=>`terbinafine-griseofulvin-${type}`);
const diagrams={
  "dermatophyte-keratin-biology":["Map the infected keratin","Organism","Anatomic site","Growth rate","Confirmation"],
  "terbinafine-target-sar":["Interrupt squalene processing","Allylamine","Squalene epoxidase","Ergosterol falls","Squalene rises"],
  "terbinafine-pk-tissue":["Follow exposure into keratin","Absorption","Hepatic metabolism","CYP2D6","Tissue persistence"],
  "terbinafine-clinical-use":["Match product to site","Topical skin","Oral nail","Six weeks","Twelve weeks"],
  "terbinafine-safety":["Recognize toxicity early","Liver","Taste and smell","Blood count","Systemic reaction"],
  "terbinafine-interactions":["Predict exposure direction","CYP2D6 substrate","Rifampin","Cimetidine","Fluconazole"],
  "griseofulvin-mitosis-keratin":["Protect new keratin","Mitotic spindle","Fungistatic effect","Precursor cell","Healthy outgrowth"],
  "griseofulvin-formulations":["Verify before calculating","Microsize","Ultramicrosize","Kilograms","Product dose"],
  "griseofulvin-safety-interactions":["Build longitudinal safety","Contraindication","Induction","UV and alcohol","Periodic review"],
  "integrated-dermatophyte-system":["Close the dermatophyte loop","Diagnose","Select","Monitor","Prevent recurrence"]
};
const notes=["Define the biological input","Protect the pharmacologic conversion","Measure the patient state","Own the next clinical action"];
export default function TerbinafineGriseofulvinPharmacologyVisual({type}){const data=diagrams[type.replace("terbinafine-griseofulvin-","")];if(!data)return null;return <figure className="chol-visual terbinafine-griseofulvin-visual" aria-label={data[0]}><figcaption><span>Keratin pharmacology system</span><strong>{data[0]}</strong></figcaption><div className="chol-visual__grid">{data.slice(1).map((label,index)=><div key={label}><span>{String(index+1).padStart(2,"0")}</span><strong>{label}</strong><em>{notes[index]}</em><p>Keep organism, site, product, exposure, toxicity, outgrowth, and ownership connected.</p></div>)}</div></figure>}

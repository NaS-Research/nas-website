// Reusable whole-organ studies. Supporting anatomy is selected from the licensed
// source catalog, never generated as decorative vascular geometry.
export const organAssemblies = {
 lungs: {label:'Lobes, airways & circulation',support:[['visceral','^Trachea$|bronchus'],['cardiovascular','^(Left|Right) pulmonary artery$|^(Left|Right) (superior|inferior) pulmonary vein$|^Pulmonary trunk$|^Bifurcation of pulmonary trunk$|of (left|right) lung$']]},
 heart: {label:'Chambers, valves & circulation',support:[['cardiovascular','^(Left|Right) coronary artery$|^Coronary sinus$|^Right inferolateral branch of right coronary artery$|^Anterior interventricular artery$|^Circumflex artery of heart$|^Septal branches of anterior interventricular artery$|^(Great|Middle) cardiac vein$|^(Ascending aorta|Aortic arch|Superior vena cava|Pulmonary trunk)$|^Inferior vena cava \\(thoracic part\\)$|papillary muscle of (left|right) ventricle$|leaflet of (pulmonary|left atrioventricular|right atrioventricular) valve$|^(Left coronary|Right coronary|Non-coronary) leaflet$']]},
 kidneys: {label:'Kidneys, vessels & urinary drainage',support:[['visceral','^(Renal pelvis|Ureter) (left|right)$'],['cardiovascular','^(Left|Right) renal (artery|vein)$|^(Anterior|Posterior) branch of renal artery |^Intrarenal (arteries|veins) of ']]},
 liver: {label:'Liver, circulation & bile drainage',support:[['visceral','^(Gallbladder|Bile duct)$'],['cardiovascular','^(Common hepatic artery|Proper hepatic artery|Hepatic portal vein|Hepatic veins)$']]},
 stomach: {label:'Stomach, lining & connected anatomy',support:[['visceral','^(Mucosa of stomach|Oesophagus|Duodenum)$'],['cardiovascular','^Left gastric artery$']]},
 pancreas: {label:'Pancreas & duct system',support:[['visceral','^(Pancreatic duct|Accessory pancreatic duct|Duodenum)$'],['cardiovascular','^(Anterior inferior pancreaticoduodenal artery|Inferior pancreaticoduodenal artery)$']]},
 thyroid: {label:'Thyroid & neighboring glands',support:[['visceral','^(Superior|Inferior) parathyroid gland |^Trachea$'],['cardiovascular','^Inferior thyroid artery ']]},
 adrenals: {label:'Adrenal glands & renal landmarks',support:[['visceral','^Kidney (left|right)$'],['cardiovascular','^Inferior suprarenal artery ']]},
 parotid: {label:'Parotid glands & ducts',support:[['visceral','^Parotid duct ']]},
 submandibular: {label:'Submandibular glands & ducts',support:[['visceral','^Submandibular duct ']]},
};
export function supportingStructures(id,catalog){return catalog.filter(part=>(organAssemblies[id]?.support||[]).some(([layer,match])=>part.layerId===layer&&new RegExp(match,'i').test(part.name)));}
export function assemblyParts(lesson,catalog,mode='layered'){
 const core=catalog.filter(p=>p.organIds?.includes(lesson.id)||(p.layerId===lesson.layer&&new RegExp(lesson.match,'i').test(p.name)));
 const support=supportingStructures(lesson.id,catalog);
 return mode==='surface'?core:mode==='network'?support:[...new Map([...core,...support].map(p=>[p.id,p])).values()];
}

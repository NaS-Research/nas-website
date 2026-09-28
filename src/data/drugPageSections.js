// One reading order for every study card. Clinical copy remains in drugLibrary.
export const drugPageGroups = [
  { id: 'overview', label: 'Overview', number: '01', description: 'What it does and where it is used.', sections: [['commonUses','Uses']] },
  { id: 'safety', label: 'Safety & interactions', number: '02', description: 'Separate expected effects from serious risks.', sections: [['seriousRisks','Serious risks'],['contraindications','Contraindications'],['commonEffects','Common effects'],['interactions','Interactions']] },
  { id: 'practice', label: 'Use & monitoring', number: '03', description: 'Administration, follow-up, and patient conversations.', sections: [['administration','Administration'],['monitoring','Monitoring'],['counseling','Counseling']] },
];
export const labelGroups = [
  {id:'label-safety',label:'Safety & interactions', keys:['boxed_warning','contraindications','warnings_and_cautions','adverse_reactions','drug_interactions']},
  {id:'label-overview',label:'Uses & mechanism',keys:['indications_and_usage','mechanism_of_action','clinical_pharmacology']},
  {id:'label-practice',label:'Use & patient information',keys:['dosage_and_administration','dosage_forms_and_strengths','information_for_patients']},
];
// Preserve source paragraph boundaries. Only horizontal whitespace is normalized.
export function normalizeLabelText(value) {
  return (Array.isArray(value)?value.join('\n\n'):String(value||''))
    .replace(/\r\n?/g,'\n').replace(/[^\S\n]+/g,' ').replace(/ *\n */g,'\n').replace(/\n{3,}/g,'\n\n').trim();
}
// Some API records have no paragraph breaks. Add reading breaks at sentence
// boundaries without deleting, summarizing, or reordering any label wording.
export function labelParagraphs(text) {
  return normalizeLabelText(text).split(/\n+/).flatMap(block=>{
    const sentences=block.split(/(?<=[.!?])\s+(?=[A-Z])/);const result=[];let current='';
    for(const sentence of sentences){if(current.length>=480){result.push(current);current='';}current+=(current?' ':'')+sentence;}
    if(current)result.push(current);return result;
  });
}

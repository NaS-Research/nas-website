// Presentation contract derived from the immutable APAP blueprint.
// Review status belongs to the audit ledger, never inferred from schema validity.
export const monographSections = [
  ['indications', 'Indications'],
  ['dosage', 'Dosage and administration'],
  ['safety', 'Safety'],
  ['interactions', 'Drug interactions'],
  ['populations', 'Use in specific populations'],
  ['pharmacology', 'Clinical pharmacology'],
  ['practice', 'Monitoring and counseling'],
  ['product', 'Product identification'],
];

export function validateMonograph(monograph) {
  const errors = [];
  for (const field of ['slug', 'name', 'synonym', 'description', 'checked']) {
    if (typeof monograph[field] !== 'string' || !monograph[field].trim()) errors.push(`Missing ${field}`);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(monograph.checked || '') || Number.isNaN(Date.parse(`${monograph.checked}T00:00:00Z`))) errors.push('Invalid source-check date');
  const sources = new Set();
  for (const source of monograph.sources || []) {
    if (!source.id || sources.has(source.id)) errors.push(`Duplicate or missing source: ${source.id}`);
    sources.add(source.id);
    for (const field of ['title', 'publisher', 'note']) if (!source[field]?.trim()) errors.push(`Source ${source.id}: missing ${field}`);
    try { if (new URL(source.url).protocol !== 'https:') errors.push(`Source ${source.id}: HTTPS required`); } catch { errors.push(`Source ${source.id}: invalid URL`); }
  }
  if (!sources.size) errors.push('No sources');
  if (!Array.isArray(monograph.facts) || monograph.facts.length !== 3) errors.push('Hero requires three fact rows');
  if (monograph.sections?.length !== monographSections.length) errors.push('All eight clinical sections are required');
  for (const [index, [id, title]] of monographSections.entries()) {
    const section = monograph.sections?.[index];
    if (!section || section.id !== id || section.title !== title) { errors.push(`Section ${index + 1}: expected ${id} / ${title}`); continue; }
    if (!section.summary?.trim() || !section.takeaway?.trim()) errors.push(`${id}: summary and clinical focus required`);
    if (!section.blocks?.length) errors.push(`${id}: no disclosure cards`);
    if (id === 'safety') {
      const expected = [/^Warnings and precautions$/, /^Contraindications$/, /^Boxed[- ]warning/, /^Adverse reactions/];
      if (section.blocks?.length !== 4) errors.push('safety: APAP requires four core cards');
      for (const [card, pattern] of expected.entries()) if (!pattern.test(section.blocks?.[card]?.title || '')) errors.push(`safety: core card ${card + 1} differs from APAP order`);
      if (section.blocks?.[0]?.tone !== 'warning') errors.push('safety: warnings card requires warning treatment');
    }
    if (id === 'product') {
      if (section.blocks?.length !== 3 || !/^Representative/.test(section.blocks?.[0]?.title || '') || section.blocks?.[1]?.title !== 'Dosage forms and strengths' || section.blocks?.[2]?.title !== 'Storage and handling') errors.push('product: APAP requires representative product, forms/strengths, then storage cards');
    }
    const titles = new Set();
    for (const block of section.blocks || []) {
      if (!block.title?.trim() || titles.has(block.title)) errors.push(`${id}: missing/duplicate card title`);
      titles.add(block.title);
      if (!['paragraphs', 'items', 'facts', 'table', 'links'].some(key => block[key]?.length || (key === 'table' && block.table?.rows?.length))) errors.push(`${id}/${block.title}: empty card`);
      if (!block.sources?.length) errors.push(`${id}/${block.title}: uncited card`);
      for (const source of block.sources || []) if (!sources.has(source)) errors.push(`${id}/${block.title}: unknown source ${source}`);
      if (block.table && (!block.table.headers?.length || !block.table.rows?.length || block.table.rows.some(row => row.length !== block.table.headers.length))) errors.push(`${id}/${block.title}: invalid table`);
      if (block.facts?.some(row => row.length !== 2)) errors.push(`${id}/${block.title}: invalid fact row`);
    }
  }
  for (const field of ['title', 'text', 'section', 'link']) if (!monograph.essential?.[field]?.trim()) errors.push(`Essential safety: missing ${field}`);
  if (!monographSections.some(([id]) => id === monograph.essential?.section)) errors.push('Essential safety target missing');
  return errors;
}

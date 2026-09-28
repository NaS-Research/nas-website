// Rebuild the searchable catalog from the shipped GLB node metadata.
import { readFileSync, writeFileSync } from 'node:fs';
const structures = [];
for (const file of ['body', 'cardiovascular', 'nervous', 'visceral', 'lymphatic']) {
  const bytes = readFileSync(new URL(`../public/learn/models/body/${file}.glb`, import.meta.url));
  const model = JSON.parse(bytes.subarray(20, 20 + bytes.readUInt32LE(12)).toString());
  model.nodes.forEach((node, index) => {
    if (node.mesh === undefined || /^(Nervous system & Sense organs|Visceral systems)\.g\./.test(node.name || "")) return;
    let name = (node.extras?.name || node.name || 'Anatomical structure')
      .replace(/\.\d+$/g, '').replace(/[_\.]+/g, ' ')
      .replace(/\b([lr])\b/gi, side => side.toLowerCase() === 'l' ? 'left' : 'right').trim();
    if (name.includes('?')) name = 'Unlabeled structure';
    structures.push({ id: `${file}:${index}`, name, layerId: file === 'body' ? (node.extras?.type === 'bone' ? 'skeleton' : 'muscular') : file });
  });
}
structures.sort((a, b) => a.name.localeCompare(b.name));
writeFileSync(new URL('../public/learn/body-atlas/structures.json', import.meta.url), JSON.stringify(structures));
console.log(`Indexed ${structures.length} model structures.`);

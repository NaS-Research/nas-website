/* Adapted from BodyVista src/state.js at 82b2ea12f71fd123eb728f465eb413bb8d6a150e.
 * Copyright (c) 2026 FreedomAI. MIT; retain CREDITS.md and notices/BodyVista-LICENSE.
 * NaS changes: HRA IDs/labels, locale-stable ranking, explicit selection/visibility;
 * no upstream models, catalog descriptions, global state, DOM or renderer imported.
 */
export function searchStructures(parts, query = '') {
 const q = String(query).trim().toLowerCase();
 const words = q.split(/\s+/).filter(Boolean);
 return parts.filter(part => words.every(word => `${part.label} ${part.id} ${part.ontologyId}`.toLowerCase().includes(word)))
  .sort((a, b) => {
   const rank = part => part.label.toLowerCase() === q ? 0 : part.label.toLowerCase().startsWith(q) ? 1 : 2;
   return rank(a) - rank(b) || a.label.localeCompare(b.label, 'en');
  });
}
export function initialSelection() { return {selected:null, hidden:[], isolated:null, opacity:1}; }
export function reduceSelection(state, event, ids) {
 switch (event.type) {
  case 'select': return ids.has(event.id) && !state.hidden.includes(event.id) && (!state.isolated || state.isolated === event.id) ? {...state, selected:event.id} : state;
  case 'clear': return {...state, selected:null};
  case 'hide': return state.selected ? {...state, hidden:[...new Set([...state.hidden, state.selected])], selected:null, isolated:null} : state;
  case 'isolate': return {...state, isolated:state.selected || null};
  case 'opacity': return {...state, opacity:Math.max(.1, Math.min(1, Number(event.value) || 1))};
  case 'reset': return initialSelection();
  default: return state;
 }
}
export function appearance(id, state) {
 return {visible:!state.hidden.includes(id) && (!state.isolated || id === state.isolated), opacity:state.opacity, selected:id === state.selected};
}
export function indexScene(root, structures) {
 const allowed = new Map(structures.map(part => [part.id, part]));
 const objects = new Map();
 root.traverse(object => {
  if (!object.isMesh) return;
  let node = object;
  while (node && !allowed.has(node.name)) node = node.parent;
  if (!node) throw new Error(`Unmapped mesh: ${object.name || '(unnamed)'}`);
  objects.set(object.uuid, node.name);
 });
 for (const id of allowed.keys()) if (![...objects.values()].includes(id)) throw new Error(`Missing source structure: ${id}`);
 return {objects, resolve:object => objects.get(object?.uuid) || null};
}

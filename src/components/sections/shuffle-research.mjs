// Each pass contains every article exactly once. Avoid repeating the prior
// order or placing its final article immediately at the next pass boundary.
export function shuffleResearch(studies, previous = [], random = Math.random) {
  const next = [...studies];
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  if (next.length > 1 && (
    next[0].slug === previous.at(-1)?.slug ||
    next.every((study, i) => study.slug === previous[i]?.slug)
  )) {
    const offset = next.findIndex((study, i) => i > 0 && study.slug !== previous.at(-1)?.slug);
    next.push(...next.splice(0, offset > 0 ? offset : 1));
  }
  return next;
}

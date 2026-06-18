export function emptyRetinue() {
  return {
    name: "Untitled retinue",
    archetypeId: "",
    traditionId: "",
    retinueChoices: {},
    fighters: [],
  };
}

export function formatRetinueSummary(retinue, archetypes) {
  const archetype = retinue.archetypeId ? archetypes[retinue.archetypeId] : null;
  const fighterCount = retinue.fighterCount ?? retinue.fighters?.length ?? 0;
  if (!archetype) return `${fighterCount} fighter${fighterCount === 1 ? "" : "s"}`;
  return `${archetype.name} · ${fighterCount} fighter${fighterCount === 1 ? "" : "s"}`;
}

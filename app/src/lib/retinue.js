import { TRADITIONS } from "../data/noctvale.js";
import { normalizeFighter } from "./fighter.js";

export function emptyRetinue() {
  return {
    name: "Untitled retinue",
    archetypeId: "",
    traditionId: "",
    retinueChoices: {},
    fighters: [],
  };
}

function getTradition(traditionId) {
  return TRADITIONS.find((tradition) => tradition.id === traditionId);
}

export function normalizeRetinue(data) {
  const retinue = {
    ...emptyRetinue(),
    ...data,
    traditionId: data?.traditionId ?? "",
    retinueChoices: data?.retinueChoices ?? {},
    fighters: (data?.fighters ?? []).map(normalizeFighter),
  };

  const legacyBeastMark = retinue.retinueChoices.beastMark;
  const tradition = getTradition(retinue.traditionId);
  if (!legacyBeastMark || tradition?.id !== "werebeasts") return retinue;

  const fighters = retinue.fighters.map((fighter) =>
    fighter.beastMark ? fighter : { ...fighter, beastMark: legacyBeastMark },
  );
  const { beastMark: _removed, ...retinueChoices } = retinue.retinueChoices;

  return { ...retinue, fighters, retinueChoices };
}

export function formatRetinueSummary(retinue, archetypes) {
  const archetype = retinue.archetypeId ? archetypes[retinue.archetypeId] : null;
  const fighterCount = retinue.fighterCount ?? retinue.fighters?.length ?? 0;
  if (!archetype) return `${fighterCount} fighter${fighterCount === 1 ? "" : "s"}`;
  return `${archetype.name} · ${fighterCount} fighter${fighterCount === 1 ? "" : "s"}`;
}

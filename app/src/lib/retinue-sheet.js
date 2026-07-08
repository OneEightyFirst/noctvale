import {
  ANCESTRIES,
  ARCHETYPES,
  DOMAIN_FEATS,
  EQUIPMENT,
  PROFICIENCIES,
  SPELLS,
  STAT_KEYS,
  TRADITIONS,
  UNIVERSAL_FEATS,
  fighterHasCaster,
  resolveFighterKeywords,
} from "../data/noctvale.js";
import { normalizeFeatId, parseWeaponProfile } from "./fighter.js";

const STARTING_CROWNS = 1000;

function getById(list, id) {
  return list.find((item) => item.id === id);
}

function getTradition(traditionId) {
  return TRADITIONS.find((tradition) => tradition.id === traditionId);
}

function getFighterType(archetype, fighter) {
  return archetype?.fighterTypes.find((type) => type.id === fighter.typeId);
}

function getAncestry(ancestryId) {
  return ANCESTRIES.find((ancestry) => ancestry.id === ancestryId) ?? ANCESTRIES[0];
}

function getEquipment(itemId) {
  return EQUIPMENT.find((item) => item.id === itemId);
}

function getProficiencyName(id) {
  if (id === "firearms") return "Firearms";
  return getById(PROFICIENCIES, id)?.name ?? id;
}

function isCaster(fighter, type, domain) {
  return fighterHasCaster(fighter, type, domain);
}

function getFighterKeywords(fighter, archetype, tradition, domain, type) {
  return resolveFighterKeywords(fighter, archetype, tradition, domain, type);
}

function getAvailableProficiencies(archetype) {
  if (!archetype) return [];
  return [...archetype.proficiencies];
}

function getProficiencyFeats(archetype) {
  return getAvailableProficiencies(archetype).map((id) => {
    const proficiency = getById(PROFICIENCIES, id);
    return {
      id,
      name: proficiency.name,
      isProficiency: true,
      rules: [`You may equip any weapon in this proficiency your retinue is allowed to buy: ${proficiency.weapons}.`],
    };
  });
}

function getSelectableDomainFeats(domain) {
  return DOMAIN_FEATS.filter((feat) => feat.domains.includes(domain));
}

function getBuiltInProficiencies(fighter, type) {
  const builtIns = [...(type?.builtInProficiencies ?? [])];
  if (type?.builtInChoice && fighter.builtInChoice === "archery") {
    builtIns.push("archery");
  }
  return builtIns;
}

function getOneHandedMeleeWeaponCount(fighter) {
  return getSelectedEquipment(fighter).reduce((total, { item, quantity }) => {
    if (item.kind === "weapon" && item.group === "One-Handed melee") return total + quantity;
    return total;
  }, 0);
}

function getDualWieldingRules(fighter) {
  if (getOneHandedMeleeWeaponCount(fighter) < 2) return [];
  return [
    "Dual wielding: choose a primary and secondary one-handed melee weapon.",
    "Add both weapons' +Mt and +Sk to the Strike Pool, to a maximum of 15 dice.",
    "Use only the primary weapon's type and special rules. The secondary weapon adds dice only.",
    "A fighter cannot use a shield while dual-wielding.",
  ];
}

function getSelectedEquipment(fighter) {
  return Object.entries(fighter.equipment ?? {})
    .filter(([, qty]) => qty > 0)
    .map(([itemId, quantity]) => ({ item: getEquipment(itemId), quantity }))
    .filter((entry) => entry.item)
    .sort((a, b) => EQUIPMENT.indexOf(a.item) - EQUIPMENT.indexOf(b.item));
}

function getFighterStats(fighter, type, tradition, retinueChoices) {
  const ancestry = getAncestry(fighter.ancestryId);
  const stats = { ...ancestry.stats };
  for (const stat of fighter.statBoosts ?? []) {
    stats[stat] += 1;
  }
  if (tradition?.id === "beastmen" && retinueChoices.beastMark === "bear") {
    stats.Mt += 1;
    stats.Sa = Math.max(1, stats.Sa - 1);
  }
  return stats;
}

function getTraditionCostModifier(fighter, type, tradition, caster) {
  if (!tradition || !type) return 0;
  if (tradition.id === "spellblades") return 5;
  if (tradition.id === "damned" && !caster) return -10;
  if (tradition.id === "beastmen") return 10;
  if (tradition.id === "wightlords") return 20;
  if (tradition.id === "vampires" && ["Leader", "Elite", "Specialist"].includes(type.role)) return 20;
  return 0;
}

function getStartingBudget(tradition) {
  return STARTING_CROWNS + (tradition?.id === "courtiers" ? 100 : 0);
}

function getGearUnitCost(item, tradition) {
  if (!item) return 0;
  if (tradition?.id === "hellknights" && item.kind === "armor") return item.cost + 10;
  return item.cost;
}

function getFighterCost(fighter, type, tradition, domain) {
  const ancestry = getAncestry(fighter.ancestryId);
  const caster = isCaster(fighter, type, domain);
  const fighterCost = type.cost + ancestry.cost + getTraditionCostModifier(fighter, type, tradition, caster);
  const gearCost = Object.entries(fighter.equipment ?? {}).reduce((total, [itemId, quantity]) => {
    const item = getEquipment(itemId);
    return total + getGearUnitCost(item, tradition) * quantity;
  }, 0);
  return fighterCost + gearCost;
}

function getSelectedFeatRules(fighter, archetype, domain) {
  const domainFeats = getSelectableDomainFeats(domain);
  const proficiencyFeats = getProficiencyFeats(archetype);
  return [...proficiencyFeats, ...archetype.feats, ...UNIVERSAL_FEATS, ...domainFeats].filter((feat) =>
    (fighter.feats ?? []).some((id) => normalizeFeatId(id) === feat.id),
  );
}

export function formatStat(key, value) {
  if (key === "M") return `${value}"`;
  return String(value);
}

function formatStatsLine(stats) {
  return STAT_KEYS.map((key) => `${key} ${formatStat(key, stats[key])}`).join(" · ");
}

export function isBuildOnlyFeat(feat) {
  if (!feat) return false;
  if (feat.isProficiency) return true;
  if (feat.id === "firearms") return true;
  return false;
}

export function getPlayModeFeats(feats) {
  return feats.filter((feat) => !isBuildOnlyFeat(feat));
}

/** @deprecated Use isBuildOnlyFeat */
export function isProficiencyOnlyFeat(feat) {
  return Boolean(feat.isProficiency);
}

function buildFighterSheet(fighter, archetype, tradition, domain, retinueChoices) {
  const type = getFighterType(archetype, fighter);
  const ancestry = getAncestry(fighter.ancestryId);
  const keywords = getFighterKeywords(fighter, archetype, tradition, domain, type);
  const caster = isCaster(fighter, type, domain);
  const stats = getFighterStats(fighter, type, tradition, retinueChoices);
  const domainSpells = SPELLS[domain] ?? [];
  const selectedFeatRules = getSelectedFeatRules(fighter, archetype, domain);
  const selectedEquipment = getSelectedEquipment(fighter);
  const weapons = selectedEquipment.filter(({ item }) => item.kind === "weapon");
  const otherGear = selectedEquipment.filter(({ item }) => item.kind !== "weapon");
  const dualWieldingRules = getDualWieldingRules(fighter);

  const spells = caster
    ? (fighter.spells ?? []).map((spellId) => {
        const spell = domainSpells.find((entry) => entry.id === spellId);
        if (!spell) return { id: spellId, name: spellId, lines: [] };
        const keywordText = spell.keywords?.length ? ` (${spell.keywords.join(", ")})` : "";
        return {
          id: spell.id,
          name: spell.name,
          lines: [`${spell.name}${keywordText}: ${spell.effect}`],
        };
      })
    : [];

  return {
    name: fighter.name,
    typeName: type?.name ?? "",
    role: type?.role ?? "",
    keywords,
    ancestry: ancestry.name,
    ancestryDescription: ancestry.description,
    cost: getFighterCost(fighter, type, tradition, domain),
    stats,
    caster,
    spells,
    ruleFeats: getPlayModeFeats(selectedFeatRules),
    weapons: weapons.map(({ item, quantity }) => ({
      quantity,
      ...parseWeaponProfile(item, fighter.skilledCraftsman),
    })),
    dualWieldingRules,
    equipment: otherGear.map(({ item, quantity }) => ({
      name: item.name,
      quantity,
      rules: item.rules ?? [],
    })),
  };
}

function getRetinueWideRules(tradition, selectedSpecialChoice) {
  const blocks = [];
  if (tradition?.rules?.length) {
    blocks.push({ title: `${tradition.name} Tradition`, rules: tradition.rules });
  }
  if (selectedSpecialChoice?.rules?.length) {
    blocks.push({
      title: tradition?.choice ? `${selectedSpecialChoice.name} Beast-mark` : selectedSpecialChoice.name,
      rules: selectedSpecialChoice.rules,
    });
  }
  return blocks;
}

function sortFighters(archetype, fighters) {
  const leader = fighters.find((fighter) => getFighterType(archetype, fighter)?.role === "Leader");
  const others = fighters.filter((fighter) => getFighterType(archetype, fighter)?.role !== "Leader");
  return leader ? [leader, ...others] : others;
}

export function buildRetinueSheet(data) {
  const archetype = data.archetypeId ? ARCHETYPES[data.archetypeId] : null;
  const tradition = data.traditionId ? getTradition(data.traditionId) : null;
  const domain = tradition?.domain ?? "";
  const retinueChoices = data.retinueChoices ?? {};
  const fighters = data.fighters ?? [];
  const selectedSpecialChoice = tradition?.choice
    ? tradition.choice.options.find((option) => option.id === retinueChoices[tradition.choice.id])
    : null;
  const budget = getStartingBudget(tradition);
  const totalCost = archetype
    ? fighters.reduce(
        (total, fighter) => total + getFighterCost(fighter, getFighterType(archetype, fighter), tradition, domain),
        0,
      )
    : 0;

  return {
    name: data.name || "Untitled retinue",
    archetype: archetype
      ? {
          name: archetype.name,
          identity: archetype.identity ?? "",
        }
      : null,
    tradition: tradition
      ? {
          name: tradition.name,
          domain: tradition.domain,
        }
      : null,
    specialChoice: selectedSpecialChoice
      ? {
          label: tradition?.choice?.label ?? "",
          name: selectedSpecialChoice.name,
        }
      : null,
    budget,
    totalCost,
    retinueRules: getRetinueWideRules(tradition, selectedSpecialChoice),
    fighters: archetype && tradition ? sortFighters(archetype, fighters).map((fighter) => buildFighterSheet(fighter, archetype, tradition, domain, retinueChoices)) : [],
  };
}

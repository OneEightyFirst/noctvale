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
  WEAPON_KEYWORD_RULES,
  fighterHasCaster,
  getBeastMarkOption,
  getBeastMarkDisplayRules,
  getBuiltInFeatId,
  resolveFighterKeywords,
} from "../data/noctvale.js";
import { getFighterCompanion, normalizeFeatId, parseWeaponProfile, buildCompanionStats, buildFighterWeaponRows } from "./fighter.js";

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

function hasEquippedStaff(fighter) {
  return (fighter.equipment?.staff ?? 0) > 0;
}

function getStaffCastingAttribute(fighter) {
  return fighter.staffCastingAttribute === "Sa" ? "Sa" : "Wi";
}

function isScalingSpellAttack(spell) {
  if (!spell) return false;
  if (typeof spell.sk !== "string" || !spell.sk.startsWith("+")) return false;
  if (spell.keywords?.includes("Attack")) return true;
  return spell.hit === "CC" || spell.hit === "RC";
}

function getSpellScalingStatOverride(spell, fighter) {
  if (!hasEquippedStaff(fighter)) return null;
  if (!isScalingSpellAttack(spell)) return null;
  return getStaffCastingAttribute(fighter);
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
  return [WEAPON_KEYWORD_RULES["Dual wielding"]];
}

function getSelectedEquipment(fighter) {
  return Object.entries(fighter.equipment ?? {})
    .filter(([, qty]) => qty > 0)
    .map(([itemId, quantity]) => ({ item: getEquipment(itemId), quantity }))
    .filter((entry) => entry.item)
    .sort((a, b) => EQUIPMENT.indexOf(a.item) - EQUIPMENT.indexOf(b.item));
}

function getFighterStats(fighter, type, tradition) {
  const ancestry = getAncestry(fighter.ancestryId);
  const stats = { ...ancestry.stats };
  for (const stat of fighter.statBoosts ?? []) {
    stats[stat] += 1;
  }
  if (tradition?.id === "werebeasts" && fighter.beastMark === "bear") {
    stats.Mt += 1;
    stats.Sa = Math.max(1, stats.Sa - 1);
  }
  return stats;
}

function getTraditionCostModifier(fighter, type, tradition, caster) {
  if (!tradition || !type) return 0;
  if (tradition.id === "spellblades") return 5;
  if (tradition.id === "sorcerers" && caster) {
    const baseSpells = type.caster?.spells ?? 0;
    if ((fighter.spells?.length ?? 0) > baseSpells) return 10;
  }
  if (tradition.id === "damned" && !caster) return -10;
  if (tradition.id === "werebeasts") return 10;
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

function getSelectedFeatRules(fighter, type, archetype, domain) {
  const domainFeats = getSelectableDomainFeats(domain);
  const proficiencyFeats = getProficiencyFeats(archetype);
  const catalog = [...proficiencyFeats, ...archetype.feats, ...UNIVERSAL_FEATS, ...domainFeats];
  const selected = catalog.filter((feat) =>
    (fighter.feats ?? []).some((id) => normalizeFeatId(id) === feat.id),
  );
  const builtInFeatId = getBuiltInFeatId(type);
  if (builtInFeatId && !selected.some((feat) => feat.id === builtInFeatId)) {
    const builtIn = catalog.find((feat) => feat.id === builtInFeatId);
    if (builtIn) selected.unshift(builtIn);
  }
  return selected;
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

export function isEditOnlyFeat(feat) {
  return feat?.id === "animal-handling";
}

export function getPlayModeFeats(feats) {
  return feats.filter((feat) => !isBuildOnlyFeat(feat) && !isEditOnlyFeat(feat));
}

/** @deprecated Use isBuildOnlyFeat */
export function isProficiencyOnlyFeat(feat) {
  return Boolean(feat.isProficiency);
}

function buildFighterSheet(fighter, archetype, tradition, domain) {
  const type = getFighterType(archetype, fighter);
  const ancestry = getAncestry(fighter.ancestryId);
  const keywords = getFighterKeywords(fighter, archetype, tradition, domain, type);
  const caster = isCaster(fighter, type, domain);
  const stats = getFighterStats(fighter, type, tradition);
  const beastMarkOption = getBeastMarkOption(tradition, fighter.beastMark);
  const domainSpells = SPELLS[domain] ?? [];
  const selectedFeatRules = getSelectedFeatRules(fighter, type, archetype, domain);
  const selectedEquipment = getSelectedEquipment(fighter);
  const otherGear = selectedEquipment.filter(({ item }) => item.kind !== "weapon" && item.kind !== "companion");
  const companionEntry = getFighterCompanion(fighter);
  const dualWieldingRules = getDualWieldingRules(fighter);
  const weaponProfiles = buildFighterWeaponRows(fighter, tradition, fighter.skilledCraftsman);

  const spells = caster
    ? (fighter.spells ?? []).map((spellId) => {
        const spell = domainSpells.find((entry) => entry.id === spellId);
        if (!spell) return { id: spellId, name: spellId, keywords: [], effect: "", mishap: "" };
        const scalingStat = getSpellScalingStatOverride(spell, fighter);
        return {
          id: spell.id,
          name: spell.name,
          difficulty: spell.difficulty,
          range: spell.range,
          castingStat: spell.castingStat,
          hit: spell.hit,
          mt: spell.mt,
          sk: spell.sk,
          scalingStat,
          keywords: spell.keywords ?? [],
          effect: spell.effect,
          mishap: spell.mishap,
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
    companion: companionEntry?.item?.companionProfile
      ? {
          name: companionEntry.item.name,
          stats: buildCompanionStats(companionEntry.item, stats),
          tether: companionEntry.item.companionProfile.tether,
          keywords: companionEntry.item.companionProfile.keywords ?? [],
        }
      : null,
    caster,
    spells,
    ruleFeats: getPlayModeFeats(selectedFeatRules),
    beastMark: beastMarkOption ? getBeastMarkDisplayRules(beastMarkOption) : null,
    weapons: weaponProfiles,
    dualWieldingRules,
    equipment: otherGear.map(({ item, quantity }) => ({
      id: item.id,
      name: item.name,
      quantity,
      rules: item.rules ?? [],
    })),
  };
}

function getRetinueWideRules(tradition) {
  if (!tradition?.rules?.length) return [];
  return [{ title: `${tradition.name} Tradition`, rules: tradition.rules }];
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
  const fighters = data.fighters ?? [];
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
    specialChoice: null,
    budget,
    totalCost,
    retinueRules: getRetinueWideRules(tradition),
    fighters: archetype && tradition ? sortFighters(archetype, fighters).map((fighter) => buildFighterSheet(fighter, archetype, tradition, domain)) : [],
  };
}

/**
 * Collects every named weapon rule, feat, spell, and equipment rule used
 * anywhere in the retinue into one deduplicated reference — cards list only
 * names, and this reference carries the full rule text once per unique
 * entry (for the printed sheet and plain-text export).
 */
export function buildRulesReference(sheet) {
  const weaponRules = new Map();
  const feats = new Map();
  const spells = new Map();
  const equipment = new Map();

  for (const fighter of sheet.fighters) {
    for (const weapon of fighter.weapons) {
      for (const rule of weapon.specialRules ?? []) {
        if (!rule.name || !rule.text || rule.name === "Skilled Craftsman") continue;
        if (!weaponRules.has(rule.name)) weaponRules.set(rule.name, rule.text);
      }
    }
    if (fighter.dualWieldingRules?.length && !weaponRules.has("Dual wielding")) {
      weaponRules.set("Dual wielding", fighter.dualWieldingRules[0]);
    }
    for (const feat of fighter.ruleFeats ?? []) {
      if (feat.rules?.length && !feats.has(feat.id)) {
        feats.set(feat.id, { name: feat.name, rules: feat.rules });
      }
    }
    for (const spell of fighter.spells ?? []) {
      if (!spells.has(spell.id)) spells.set(spell.id, spell);
    }
    for (const item of fighter.equipment ?? []) {
      if (item.rules?.length && !equipment.has(item.id)) {
        equipment.set(item.id, { name: item.name, rules: item.rules });
      }
    }
  }

  return {
    weaponRules: [...weaponRules.entries()].map(([name, text]) => ({ name, text })),
    feats: [...feats.values()],
    spells: [...spells.values()],
    equipment: [...equipment.values()],
  };
}

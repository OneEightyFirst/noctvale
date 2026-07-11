import { EQUIPMENT, FIGHTING_CLAWS_WEAPON } from "../data/noctvale.js";

const FEAT_ID_ALIASES = {
  "raise-the-watch": "rally-to-aid",
};

const BASELINE_PHRASES = [
  /^balanced baseline$/i,
  /^baseline axe$/i,
  /^heavy hitter$/i,
  /^heavy, powerful$/i,
  /^fast, finesse$/i,
  /^balanced reach$/i,
  /^reach, versatile$/i,
  /^draw strength plus fixed accuracy$/i,
  /^longer range, stronger accuracy$/i,
  /^mechanical force, trained aim$/i,
  /^slow, powerful$/i,
  /^short range$/i,
  /^no minimum range, thrown; additive$/i,
  /^normal rc to hit$/i,
  /^any fighter may equip a dagger$/i,
];

const WEAPON_TYPE_LABELS = new Set(["sword", "axe", "hammer", "spear"]);

function getEquipment(itemId) {
  return EQUIPMENT.find((item) => item.id === itemId);
}

export function normalizeFeatId(featId) {
  return FEAT_ID_ALIASES[featId] ?? featId;
}

export function normalizeFighter(fighter) {
  if (!fighter) return fighter;

  const ancestryId = fighter.ancestryId ?? "steady";
  const feats = (fighter.feats ?? []).map(normalizeFeatId);
  let skilledCraftsman = fighter.skilledCraftsman ?? null;

  if (!feats.includes("skilled-craftsman")) {
    skilledCraftsman = null;
  } else if (skilledCraftsman?.weaponId) {
    const quantity = fighter.equipment?.[skilledCraftsman.weaponId] ?? 0;
    if (quantity <= 0) skilledCraftsman = null;
  }

  return {
    ...fighter,
    ancestryId,
    feats: [...new Set(feats)],
    skilledCraftsman,
  };
}

export function getFighterWeapons(fighter) {
  return Object.entries(fighter.equipment ?? {})
    .filter(([, quantity]) => quantity > 0)
    .map(([itemId, quantity]) => ({ item: getEquipment(itemId), quantity, itemId }))
    .filter((entry) => entry.item?.kind === "weapon");
}

export function buildFighterWeaponRows(fighter, tradition = null, skilledCraftsman = null) {
  const rows = getFighterWeapons(fighter).map(({ item, quantity, itemId }) => ({
    id: itemId,
    quantity,
    ...parseWeaponProfile(item, skilledCraftsman),
  }));

  if (fighter.beastMark === "wolf" && (!tradition || tradition.id === "werebeasts")) {
    rows.unshift({ id: "fighting-claws", quantity: 1, ...FIGHTING_CLAWS_WEAPON });
  }

  return rows;
}

function stripBuildPrefix(rule) {
  return rule
    .replace(/^Requires Firearms domain feat[^.]*\.\s*/i, "")
    .replace(/^Holds 2 Pistols in 1 weapon slot\.\s*/i, "")
    .replace(/^Cost here is for the brace item from the rules table\.\s*/i, "");
}

function parseMtSk(rule) {
  let mt = "—";
  let sk = "—";

  const flat = rule.match(/Flat Strike Pool (\d+) Mt \/ (\d+) Sk/i);
  const strike = rule.match(/Strike Pool (\d+) Mt \/ (\d+) Sk/i);
  if (flat) return { mt: flat[1], sk: flat[2] };
  if (strike) return { mt: strike[1], sk: strike[2] };

  const fixedMt = rule.match(/Fixed (\d+) Mt/i);
  const fixedSk = rule.match(/fixed (\d+) Sk/i);
  const mtPlus = rule.match(/\+Mt \+(\d+)/);
  const skPlus = rule.match(/\+Sk \+(\d+)/);

  if (fixedMt) mt = fixedMt[1];
  else if (mtPlus) mt = `+${mtPlus[1]}`;

  if (fixedSk) sk = fixedSk[1];
  else if (skPlus) sk = `+${skPlus[1]}`;

  return { mt, sk };
}

function bumpStatValue(value) {
  if (value === "—") return value;
  if (value.startsWith("+")) return `+${Number(value.slice(1)) + 1}`;
  return String(Number(value) + 1);
}

function applySkilledCraftsman({ mt, sk }, skilledCraftsman, itemId) {
  if (skilledCraftsman?.weaponId !== itemId) return { mt, sk };
  if (skilledCraftsman.boost === "sk") return { mt, sk: bumpStatValue(sk) };
  return { mt: bumpStatValue(mt), sk };
}

function isBaselineSegment(segment) {
  const normalized = segment.trim().replace(/\.$/, "");
  if (!normalized) return true;
  if (BASELINE_PHRASES.some((pattern) => pattern.test(normalized))) return true;
  if (WEAPON_TYPE_LABELS.has(normalized.toLowerCase())) return true;
  return false;
}

function splitRuleNameText(segment) {
  const semicolon = segment.indexOf("; ");
  if (semicolon > 0) {
    return { name: segment.slice(0, semicolon).trim(), text: segment.slice(semicolon + 2).trim() };
  }

  const colon = segment.indexOf(": ");
  if (colon > 0 && colon < 48) {
    return { name: segment.slice(0, colon).trim(), text: segment.slice(colon + 2).trim() };
  }

  if (/spell focus/i.test(segment)) {
    return { name: "Spell focus", text: "" };
  }

  return { name: "", text: segment.trim() };
}

function parseSpecialRulesFromFirstLine(rule) {
  let text = stripBuildPrefix(rule);
  text = text
    .replace(/Hands \dH\.?\s*/gi, "")
    .replace(/Range \d+"-\d+"\.?\s*/gi, "")
    .replace(/Range 0"-\d+"\.?\s*/gi, "")
    .replace(/Primer \d+\+?\.?\s*/gi, "")
    .replace(/Distance d6 \+ Mt\.?\s*/gi, "")
    .replace(/\+Mt \+\d+(?:,\s*)?/gi, "")
    .replace(/\+Sk \+\d+\.?\s*/gi, "")
    .replace(/Fixed \d+ Mt,?\s*/gi, "")
    .replace(/fixed \d+ Sk\.?\s*/gi, "")
    .replace(/Flat Strike Pool \d+ Mt \/ \d+ Sk;?\s*/gi, "")
    .replace(/Strike Pool \d+ Mt \/ \d+ Sk\.?\s*/gi, "")
    .replace(/\d+" blast,?\s*/gi, "")
    .replace(/Single Shot,?\s*/gi, "")
    .replace(/Smoke\.?\s*/gi, "")
    .trim();

  const specialRules = [];
  for (const segment of text.split(/\.\s+/)) {
    const normalized = segment.trim().replace(/\.$/, "");
    if (!normalized || isBaselineSegment(normalized)) continue;
    const entry = splitRuleNameText(normalized);
    if (entry.name || entry.text) specialRules.push(entry);
  }

  return specialRules;
}

function formatRuleEntry(rule) {
  return splitRuleNameText(rule.replace(/\.$/, ""));
}

export function parseWeaponProfile(item, skilledCraftsman = null) {
  if (!item) {
    return { name: "", slots: "—", mt: "—", sk: "—", specialRules: [] };
  }

  const rules = item.rules ?? [];
  const firstRule = rules[0] ?? "";
  let { mt, sk } = parseMtSk(firstRule);
  ({ mt, sk } = applySkilledCraftsman({ mt, sk }, skilledCraftsman, item.id));

  const specialRules = [];
  if (firstRule) {
    specialRules.push(...parseSpecialRulesFromFirstLine(firstRule));
  }

  for (let index = 1; index < rules.length; index += 1) {
    specialRules.push(formatRuleEntry(rules[index]));
  }

  if (skilledCraftsman?.weaponId === item.id) {
    const boost = skilledCraftsman.boost === "sk" ? "Sk" : "Mt";
    specialRules.push({ name: "Skilled Craftsman", text: `+1 ${boost}` });
  }

  return {
    name: item.name,
    slots: item.slots ?? "—",
    mt,
    sk,
    specialRules: specialRules.filter((entry) => entry.name || entry.text),
  };
}

export function formatWeaponRules(item, skilledCraftsman) {
  if (!item?.rules?.length) return [];

  const rules = [...item.rules];
  if (skilledCraftsman?.weaponId === item.id) {
    const boost = skilledCraftsman.boost === "sk" ? "Sk" : "Mt";
    rules.push(`Skilled Craftsman: +1 ${boost}.`);
  }
  return rules;
}

export function hasSkilledCraftsmanFeat(fighter) {
  return (fighter.feats ?? []).some((featId) => normalizeFeatId(featId) === "skilled-craftsman");
}

export function getFighterCompanion(fighter) {
  for (const [itemId, quantity] of Object.entries(fighter.equipment ?? {})) {
    if (quantity <= 0) continue;
    const item = getEquipment(itemId);
    if (item?.kind === "companion") return { item, quantity };
  }
  return null;
}

export function buildCompanionStats(companionItem, handlerStats) {
  const profile = companionItem?.companionProfile;
  if (!profile) return null;

  const companionStats = profile.stats ?? {};
  return {
    M: handlerStats.M,
    CC: companionStats.CC ?? "—",
    RC: companionStats.RC ?? "—",
    Mt: companionStats.Mt ?? "—",
    Sk: companionStats.Sk ?? "—",
    Wi: handlerStats.Wi,
    Sa: handlerStats.Sa,
    W: companionStats.W ?? "—",
  };
}

export function formatWeaponSpecialRuleText(rule) {
  if (rule.name && rule.text) return `${rule.name}: ${rule.text}`;
  if (rule.name) return rule.name;
  return rule.text;
}

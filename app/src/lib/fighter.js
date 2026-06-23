import { EQUIPMENT } from "../data/noctvale.js";

const FEAT_ID_ALIASES = {
  "raise-the-watch": "rally-to-aid",
};

export function normalizeFeatId(featId) {
  return FEAT_ID_ALIASES[featId] ?? featId;
}

function getEquipment(itemId) {
  return EQUIPMENT.find((item) => item.id === itemId);
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

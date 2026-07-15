export const STAT_KEYS = ["M", "CC", "RC", "Mt", "Sk", "Df", "Wi", "Sa", "W"];
export const BOOSTABLE_STATS = ["CC", "RC", "Mt", "Sk", "Df", "Wi", "Sa"];

export const ANCESTRIES = [
  {
    id: "steady",
    name: "Steady",
    cost: 0,
    stats: { M: 6, CC: 3, RC: 3, Mt: 3, Sk: 3, Df: 3, Wi: 3, Sa: 4, W: 3 },
    description: "Steady profiles fit Humans, Half-Elves, and other grounded folk.",
  },
  {
    id: "keen",
    name: "Keen",
    cost: 10,
    stats: { M: 7, CC: 3, RC: 3, Mt: 3, Sk: 4, Df: 3, Wi: 4, Sa: 3, W: 3 },
    description: 'Keen profiles cost an additional +10c and fit Elves or other sharp, graceful lineages.',
  },
  {
    id: "stout",
    name: "Stout",
    cost: 10,
    stats: { M: 5, CC: 3, RC: 3, Mt: 4, Sk: 3, Df: 4, Wi: 3, Sa: 3, W: 3 },
    description: 'Stout profiles cost an additional +10c and fit Dwarves, Orcs, or other powerful frames.',
  },
  {
    id: "stunty",
    name: "Stunty",
    cost: -10,
    stats: { M: 6, CC: 3, RC: 3, Mt: 2, Sk: 4, Df: 3, Wi: 3, Sa: 3, W: 2 },
    description: "Stunty profiles reduce cost by -10c and fit Halflings, Goblins, Gnomes, or other short, quick folk.",
  },
];

export const PROFICIENCIES = [
  { id: "one-handed", name: "One-Handed", weapons: "Sword, Rapier, Hand Axe, Battle Axe, Mace, Flail, Spear, Javelin" },
  { id: "two-handed", name: "Two-Handed", weapons: "Halberd, Glaive, Great Sword, War Axe, Maul, Greathammer, Staff" },
  { id: "archery", name: "Archery", weapons: "Shortbow, Longbow, Crossbow, Heavy Crossbow" },
  { id: "thrown", name: "Thrown", weapons: "Sling, Throwing Stars" },
];

export const DOMAIN_SUMMARIES = {
  Light: {
    triangle: "Mystic",
    rules: ["Provides Light spells and Light domain feats."],
  },
  Arcane: {
    triangle: "Mystic",
    rules: ["Provides Arcane spells and Arcane domain feats."],
  },
  Infernal: {
    triangle: "Mystic",
    rules: ["Provides Infernal magic identity. Hellfire is the domain attack spell."],
  },
  Nature: {
    triangle: "Natural",
    rules: ["Provides Nature spells and Nature domain feats."],
  },
  Necromancy: {
    triangle: "Natural",
    rules: ["Provides Necromancy spells, undead tools, and Necromancy domain feats."],
  },
  Blood: {
    triangle: "Natural",
    rules: ["Provides Blood spells and Blood domain feats."],
  },
  Mortal: {
    triangle: "-",
    rules: [
      "No spells.",
      "Fighters with Mortal may take the Firearms domain feat.",
      "Mortal and Caster are mutually exclusive on the same fighter.",
    ],
  },
};

export const ARCHETYPE_KEYWORDS = {
  knights: "Knights",
  hunters: "Hunters",
  folk: "Folk",
  cult: "Cult",
};

const VAMPIRE_CLASS_ROLES = new Set(["Leader", "Elite", "Specialist"]);

export function fighterHasCaster(fighter, type, domain) {
  if (!type?.caster) return false;
  if (domain === "Mortal") return false;
  if (type.caster.mode === "required") return true;
  return Boolean(fighter.caster);
}

export function resolveFighterKeywords(fighter, archetype, tradition, domain, type) {
  const keywords = [];

  if (archetype?.id) keywords.push(ARCHETYPE_KEYWORDS[archetype.id]);
  if (domain) keywords.push(domain);
  if (tradition?.name) keywords.push(tradition.name);
  if (type?.role) keywords.push(type.role);

  if (fighterHasCaster(fighter, type, domain)) keywords.push("Caster");

  if (tradition?.id === "vampires" && type?.role && VAMPIRE_CLASS_ROLES.has(type.role)) {
    keywords.push("Vampire");
  }
  if (tradition?.id === "wightlords") {
    keywords.push("Undead", "Fearless");
  }

  return keywords;
}

export function hasKeyword(keywords, name) {
  return keywords.includes(name);
}

export function lacksKeyword(keywords, name) {
  return !keywords.includes(name);
}

export function canTakeFirearmsFeat(keywords) {
  return hasKeyword(keywords, "Mortal") && !hasKeyword(keywords, "Caster");
}

export function fighterHasFirearms(fighter, type, keywords) {
  if ((fighter.feats ?? []).some((id) => id === "firearms" || id.replace(/_/g, "-") === "firearms")) return true;
  if (fighter.builtInChoice === "firearms" && type?.builtInChoice?.options?.includes("firearms")) {
    return canTakeFirearmsFeat(keywords);
  }
  return false;
}

export function canTakeFirearmsProficiency(keywords) {
  return canTakeFirearmsFeat(keywords);
}

export function canEquipFirearm(keywords) {
  return canTakeFirearmsFeat(keywords);
}

export function getBuiltInFeatId(type) {
  return type?.builtInFeat ?? null;
}

export function getBeastMarkOption(tradition, beastMarkId) {
  if (tradition?.id !== "werebeasts" || !beastMarkId) return null;
  return tradition.fighterChoice?.options.find((option) => option.id === beastMarkId) ?? null;
}

/** Wolf mark rules live on the Fighting Claws weapon row; other marks return full rule text. */
export function getBeastMarkDisplayRules(beastMarkOption) {
  if (!beastMarkOption) return null;
  if (beastMarkOption.id === "wolf") {
    return { id: beastMarkOption.id, name: beastMarkOption.name, rules: [] };
  }
  return { id: beastMarkOption.id, name: beastMarkOption.name, rules: beastMarkOption.rules ?? [] };
}

export const FIGHTING_CLAWS_WEAPON = {
  name: "Fighting Claws",
  slots: 0,
  range: "—",
  mt: "+2",
  sk: "+1",
  type: "axe",
  specialRules: [],
};

export const TRADITIONS = [
  {
    id: "crusaders",
    name: "Crusaders",
    domain: "Light",
    allowed: ["knights", "folk"],
    rules: [
      `Friendly fighters within 1" of at least one other friendly fighter add +1 Sa to Fear, Panic, and Insanity tests.`,
    ],
  },
  {
    id: "paladins",
    name: "Paladins",
    domain: "Light",
    allowed: ["hunters", "knights"],
    rules: [
      `Once per round, when a friendly fighter becomes Downed, one friendly fighter within 6" may move up to 3" toward them. This move cannot enter engagement range.`,
    ],
  },
  {
    id: "penitents",
    name: "Penitents",
    domain: "Light",
    allowed: ["cult", "folk"],
    rules: [`While a friendly fighter has fewer than their starting Wounds, they gain +1" M.`],
  },
  {
    id: "luminaries",
    name: "Luminaries",
    domain: "Light",
    allowed: ["hunters", "cult"],
    rules: [
      "At the start of each round, choose one enemy fighter within line of sight of any friendly fighter. That enemy loses Hidden.",
    ],
  },
  {
    id: "spellblades",
    name: "Spellblades",
    domain: "Arcane",
    allowed: ["knights", "hunters"],
    rules: [
      "Fighters with the Spellblades keyword cost +5 Crowns.",
      "Melee weapons they carry gain Arcane.",
      "Arcane: When this fighter attacks with this weapon, they may change 1 failed Strike Pool die into a normal hit. The hit keeps the die's color and cannot become a critical hit.",
    ],
  },
  {
    id: "ritualists",
    name: "Ritualists",
    domain: "Arcane",
    allowed: ["folk", "cult"],
    rules: [
      "Before deployment, place one ritual circle wholly within your deployment zone.",
      `Friendly Caster fighters within 1" of it add +1 to casting rolls. If they roll a Mishap, they suffer 1 Wound after resolving it.`,
    ],
  },
  {
    id: "sorcerers",
    name: "Sorcerers",
    domain: "Arcane",
    allowed: ["knights", "cult"],
    rules: [
      "Friendly Caster fighters may each know 1 additional spell for +10 Crowns.",
      "When a Caster who knows an additional spell this way rolls a Mishap, they suffer 1 Wound after resolving it.",
    ],
  },
  {
    id: "runecasters",
    name: "Runecasters",
    domain: "Arcane",
    allowed: ["hunters", "folk"],
    rules: [
      "This retinue may buy Rune-stones for 15 Crowns.",
      "Rune-stones take 1 weapon slot.",
      "Once per battle, after a fighter carrying Rune-stones makes an attribute check, rolls to hit, rolls defense dice, or makes a casting roll, they may discard the Rune-stones to reroll one die from that roll. They must accept the second result. Remove the Rune-stones from the roster after the battle.",
    ],
  },
  {
    id: "diabolists",
    name: "Diabolists",
    domain: "Infernal",
    allowed: ["folk", "cult"],
    rules: [
      "Once per battle, at the start of a friendly fighter's activation, that fighter may suffer 1 Wound to gain +1 Mt and +1 Sa until the end of the battle.",
      "If that fighter becomes Downed, they lose this bonus and suffer -1 Mt and -1 Sa until the end of the battle. Sa cannot be reduced below 1.",
    ],
  },
  {
    id: "binders",
    name: "Binders",
    domain: "Infernal",
    allowed: ["hunters", "cult"],
    rules: [
      "This retinue may recruit Daemons as Rank fighters.",
      "Daemon profiles and recruitment costs are an open roster decision tracked in decision-log.md Ideas.",
    ],
  },
  {
    id: "hellknights",
    name: "Hellknights",
    domain: "Infernal",
    allowed: ["knights", "hunters"],
    rules: [
      "Armor bought by fighters with the Hellknights keyword costs +10 Crowns.",
      `Friendly fighters wearing armor project Fear (6").`,
    ],
  },
  {
    id: "damned",
    name: "Damned",
    domain: "Infernal",
    allowed: ["knights", "folk"],
    rules: [
      "Fighters with the Damned keyword who lack Caster cost -10 Crowns.",
      "When rolling on the Casualty Table for one of those fighters, subtract 1 from the roll.",
    ],
  },
  {
    id: "witches",
    name: "Witches",
    domain: "Nature",
    allowed: ["cult", "folk"],
    rules: [
      `Once per round, when an enemy fighter within 12" of a friendly Caster makes an attribute check or casting roll, subtract 1 from that roll.`,
    ],
  },
  {
    id: "grove-keepers",
    name: "Grove-keepers",
    domain: "Nature",
    allowed: ["knights", "folk"],
    rules: [
      "After terrain is set, choose one terrain piece outside both deployment zones.",
      `Friendly fighters within 1" of it add +1 to Recover rolls.`,
    ],
  },
  {
    id: "werebeasts",
    name: "Werebeasts",
    domain: "Nature",
    allowed: ["hunters", "cult"],
    fighterChoice: {
      id: "beastMark",
      label: "Choose one beast-mark",
      options: [
        {
          id: "wolf",
          name: "Wolf",
          rules: ["Gain Fighting Claws.", "Fighting Claws are a 0-slot melee weapon: +2 Mt, +1 Sk, Axe."],
        },
        {
          id: "rat",
          name: "Rat",
          rules: ["May carry 1 additional one-handed weapon.", "This extra weapon cannot be a shield, firearm, bomb, or two-handed weapon."],
        },
        {
          id: "bear",
          name: "Bear",
          rules: ["Gain +1 Mt and -1 Sa.", "Sa cannot be reduced below 1."],
        },
        {
          id: "serpent",
          name: "Serpent",
          rules: ["When this fighter attacks with a melee weapon, 1 unblocked hit may add 1 Affliction token instead of 1 Wound."],
        },
      ],
    },
    rules: [
      "When recruiting a fighter with the Werebeast keyword, choose one beast-mark for that fighter: Wolf, Rat, Bear, or Serpent.",
      "Each such fighter costs +10 Crowns and gains its chosen mark's rule. A fighter cannot have more than 2 beast marks in total (see the Wild Aspect feat).",
    ],
  },
  {
    id: "hedge-walkers",
    name: "Hedge-walkers",
    domain: "Nature",
    allowed: ["hunters", "knights"],
    rules: [
      `During deployment, up to 2 friendly fighters may start Hidden if each is within 1" of terrain and outside the enemy deployment zone.`,
    ],
  },
  {
    id: "bell-keepers",
    name: "Bell-keepers",
    domain: "Necromancy",
    allowed: ["cult", "folk"],
    rules: [
      "Once per battle, when this retinue removes a friendly body token, place a Zombie where the token was. The Zombie joins your retinue for the rest of the battle. When a friendly body token is placed, you may remove it immediately for Bell-keepers if not yet used this battle. Not summoning — the Zombie does not have the Summon keyword.",
      "After the battle, roll on the Casualty Table for the original fighter as normal. If the original fighter is Slain and the Zombie is not Out of Action, the Zombie joins your retinue. Otherwise, remove the Zombie from your roster.",
    ],
  },
  {
    id: "bone-priests",
    name: "Bone-priests",
    domain: "Necromancy",
    allowed: ["cult", "hunters"],
    rules: [
      "This retinue may recruit Skeletons as Rank fighters up to its normal Rank role cap: up to 4 Skeletons for Hunters or up to 7 Skeletons for Cult.",
      "Skeletons count toward the retinue's maximum number of fighters and cannot gain XP, buy equipment, carry scenario rewards, or use post-battle advancement.",
    ],
  },
  {
    id: "sepulchers",
    name: "Sepulchers",
    domain: "Necromancy",
    allowed: ["knights", "folk"],
    rules: [`While a friendly fighter is Downed or Stunned, that fighter projects Fear (6").`],
  },
  {
    id: "wightlords",
    name: "Wightlords",
    domain: "Necromancy",
    allowed: ["knights", "hunters"],
    rules: ["All fighters with the Wightlords keyword cost +20 Crowns and gain Undead and Fearless."],
  },
  {
    id: "vampires",
    name: "Vampires",
    domain: "Blood",
    allowed: ["knights", "cult"],
    rules: [
      "At roster creation, each fighter with Leader, Elite, or Specialist gains the Vampire keyword and costs +20 Crowns. Fighters with Rank do not gain Vampire.",
      "Each fighter with Vampire chooses 1 vampire ability. The list is still TBD in the source rules.",
      "When a fighter with Vampire takes an enemy fighter Out of Action with Melee or Mercy Kill, restore 1 Wound to that fighter.",
      "Fighters with Vampire pay 2 XP more than the normal cost to buy each post-game advancement (Feat 5, Wi/Sa 8, Mt/Sk 9, W 10, Caster 11, M 12, Df 13, CC/RC 14, outside-Archetype/Domain Feat 17).",
    ],
  },
  {
    id: "dynasts",
    name: "Dynasts",
    domain: "Blood",
    allowed: ["knights", "hunters"],
    rules: [
      "At roster creation, choose up to 3 melee weapons in this retinue to be heirloom weapons. No fighter may carry more than 1 heirloom weapon.",
      "When a fighter attacks with an heirloom weapon, add +1 CC to that Melee attack.",
      "If a fighter carrying an heirloom weapon is Slain, the weapon passes to the friendly fighter in the retinue with the highest Mt. If there is a tie, choose one tied fighter.",
      "If a fighter carrying an heirloom weapon is captured, the opposing retinue keeps the heirloom weapon but cannot use it. If the original retinue ransoms the captured fighter, add +10 Crowns to the ransom cost to recover the heirloom weapon.",
    ],
  },
  {
    id: "revelers",
    name: "Revelers",
    domain: "Blood",
    allowed: ["hunters", "folk"],
    rules: [`At the start of a friendly fighter's activation, they may suffer 1 Wound to gain +2" M until the end of that activation.`],
  },
  {
    id: "courtiers",
    name: "Courtiers",
    domain: "Blood",
    allowed: ["cult", "folk"],
    rules: [
      "This retinue starts with +100 Crowns.",
      "Each fighter in this retinue starts each battle with 1 fewer Wound than their W value, to a minimum of 1 Wound.",
    ],
  },
  {
    id: "zealots",
    name: "Zealots",
    domain: "Mortal",
    allowed: ["hunters"],
    rules: ["When a friendly fighter attacks an enemy Caster, add +1 CC or +1 RC — whichever Hit attribute the attack uses."],
  },
  {
    id: "alchemists",
    name: "Alchemists",
    domain: "Mortal",
    allowed: ["hunters", "folk"],
    rules: ["This retinue may buy alchemical weapons and alchemical consumables without rolling on the Shadow Market table."],
  },
  {
    id: "ironbound",
    name: "Ironbound",
    domain: "Mortal",
    allowed: ["knights"],
    rules: [`Friendly fighters within 1" of at least one other friendly fighter project Fear (6").`],
  },
];

const proficiencyRule = (options) => [
  `Choose one weapon proficiency: ${options.join(", ")}.`,
  "You may equip any weapon in that proficiency your retinue is allowed to buy.",
  "You may take this feat more than once. Each time, choose a different proficiency.",
  "A fighter cannot equip a weapon unless they have the matching proficiency, except any fighter may equip a Dagger.",
];

export const ARCHETYPES = {
  knights: {
    id: "knights",
    name: "Knights",
    identity: "Elite armored companies, 5-10 fighters",
    tableRole:
      "Elite and armored. Field 5-10 fighters: 1 Lord, 0-4 Knight, 0-5 Squire. Up to Heavy Armor and Tower Shield, and 1 caster at most.",
    count: { min: 5, target: "5-8", max: 10 },
    casterMax: 1,
    armorCap: "Heavy Armor",
    proficiencies: ["one-handed", "two-handed", "archery", "thrown"],
    proficiencyRules: proficiencyRule(["One-Handed", "Two-Handed", "Archery", "Thrown"]),
    fighterTypes: [
      {
        id: "lord",
        name: "Lord",
        role: "Leader",
        cap: 1,
        required: 1,
        cost: 125,
        boost: { count: 2, options: BOOSTABLE_STATS, label: "Add +1 to 2 different attributes." },
        caster: { mode: "optional", spells: 2, when: "If fighter lacks Mortal." },
        rules: ["Leader.", "May take Caster if fighter lacks Mortal. If Caster, knows 2 spells from your Domain list and may take the Cast action."],
      },
      {
        id: "knight",
        name: "Knight",
        role: "Elite",
        cap: 4,
        cost: 75,
        boost: { count: 1, options: ["Mt", "Sk"], label: "Add +1 Mt or +1 Sk." },
        rules: ["At recruitment, add +1 Mt or +1 Sk."],
      },
      {
        id: "squire",
        name: "Squire",
        role: "Specialist",
        cap: 5,
        cost: 60,
        boost: { count: 1, options: BOOSTABLE_STATS, label: "Add +1 to one attribute." },
        builtInProficiencies: ["one-handed"],
        rules: ["Specialist.", "Built-in One-Handed proficiency. The built-in proficiency does not count against the Specialist's chosen feat pick."],
      },
    ],
    feats: [
      { id: "hold-the-line", name: "Hold the Line", rules: [`When this fighter uses Brace, choose another friendly fighter within 1". That fighter gains +1 Might defense die until this fighter's next activation.`] },
      { id: "to-me-brothers", name: "To Me, Brothers!", rules: [`Once per battle, when this fighter uses Brace, choose up to 2 friendly fighters within 12". Each chosen fighter may move up to 6" toward this fighter. A fighter cannot use this movement to enter engagement range.`] },
      { id: "iron-discipline", name: "Iron Discipline", rules: ["This fighter cannot become Downed. When this fighter would become Downed, they remain Active with 0 Wounds instead. While this fighter has 0 Wounds, any unblocked hit pushes them to Stunned as if they were Downed."] },
      { id: "vow-of-pursuit", name: "Vow of Pursuit", rules: ["When this fighter attacks an enemy fighter that took a friendly fighter Out of Action this battle, add 2 Might dice to this fighter's Strike Pool."] },
    ],
  },
  hunters: {
    id: "hunters",
    name: "Hunters",
    identity: "Versatile skirmishers and slayers, 5-12 fighters",
    tableRole:
      "Versatile skirmishers. Field 5-12 fighters: 1 Captain, 0-4 Stalker, 0-3 Tracker, 0-4 Hand. Medium Armor and 1 caster at most.",
    count: { min: 5, target: "6-10", max: 12 },
    casterMax: 1,
    armorCap: "Medium Armor",
    proficiencies: ["one-handed", "two-handed", "archery", "thrown"],
    proficiencyRules: proficiencyRule(["One-Handed", "Two-Handed", "Archery", "Thrown"]),
    fighterTypes: [
      {
        id: "captain",
        name: "Captain",
        role: "Leader",
        cap: 1,
        required: 1,
        cost: 125,
        boost: { count: 2, options: BOOSTABLE_STATS, label: "Add +1 to 2 different attributes." },
        caster: { mode: "optional", spells: 2, when: "If fighter lacks Mortal." },
        rules: ["Leader.", "May take Caster if fighter lacks Mortal. If Caster, knows 2 spells from your Domain list and may take the Cast action."],
      },
      {
        id: "stalker",
        name: "Stalker",
        role: "Elite",
        cap: 4,
        cost: 75,
        boost: { count: 1, options: ["Mt", "Sk"], label: "Add +1 Mt or +1 Sk." },
        rules: ["At recruitment, add +1 Mt or +1 Sk."],
      },
      {
        id: "tracker",
        name: "Tracker",
        role: "Specialist",
        cap: 3,
        cost: 60,
        boost: { count: 1, options: BOOSTABLE_STATS, label: "Add +1 to one attribute." },
        builtInFeat: "marked-quarry",
        rules: ["Specialist.", "Built-in Marked Quarry feat. The built-in feat does not count against the Specialist's chosen feat pick."],
      },
      {
        id: "hand",
        name: "Hand",
        role: "Rank",
        cap: 4,
        cost: 40,
        rules: ["Ancestry baseline only."],
      },
    ],
    feats: [
      { id: "marked-quarry", name: "Marked Quarry", rules: ["At the start of the battle, choose 1 enemy fighter.", "When this fighter attacks the chosen fighter, add 1 Might die or 1 Skill die to this fighter's Strike Pool."] },
      { id: "patient-shot", name: "Patient Shot", rules: ["When this fighter uses Aim, their next Ranged Attack Action this activation may reroll 1 natural 1 in the Strike Pool."] },
      { id: "field-dressing", name: "Field Dressing", rules: ["When this fighter uses Help on a Downed friendly fighter, add +1 to the Help roll."] },
      { id: "pathfinder", name: "Pathfinder", rules: ["During Survival Rolls, if this fighter is a surviving fighter and your retinue rolls natural double 1, you may ignore the Mishap. Treat the result as 3 instead."] },
    ],
  },
  folk: {
    id: "folk",
    name: "Folk",
    identity: "Numerous townsfolk and militia, 6-15 fighters",
    tableRole:
      "Numerous and stubborn. Field 6-15 fighters: 1 Mayor, 0-3 Guildsman, 0-5 Militiaman, 0-6 Townsfolk. Light Armor and 1 caster at most.",
    count: { min: 6, target: "8-12", max: 15 },
    casterMax: 1,
    armorCap: "Light Armor",
    proficiencies: ["one-handed", "archery", "thrown"],
    proficiencyRules: proficiencyRule(["One-Handed", "Archery", "Thrown"]),
    fighterTypes: [
      {
        id: "mayor",
        name: "Mayor",
        role: "Leader",
        cap: 1,
        required: 1,
        cost: 125,
        boost: { count: 2, options: BOOSTABLE_STATS, label: "Add +1 to 2 different attributes." },
        caster: { mode: "optional", spells: 2, when: "If fighter lacks Mortal." },
        rules: ["Leader.", "May take Caster if fighter lacks Mortal. If Caster, knows 2 spells from your Domain list and may take the Cast action."],
      },
      {
        id: "guildsman",
        name: "Guildsman",
        role: "Elite",
        cap: 3,
        cost: 75,
        boost: { count: 1, options: ["Mt", "Sk"], label: "Add +1 Mt or +1 Sk." },
        rules: ["At recruitment, add +1 Mt or +1 Sk."],
      },
      {
        id: "militiaman",
        name: "Militiaman",
        role: "Specialist",
        cap: 5,
        cost: 60,
        boost: { count: 1, options: BOOSTABLE_STATS, label: "Add +1 to one attribute." },
        builtInProficiencies: ["two-handed"],
        rules: ["Specialist.", "Built-in Two-Handed proficiency. The built-in proficiency does not count against the Specialist's chosen feat pick."],
      },
      {
        id: "townsfolk",
        name: "Townsfolk",
        role: "Rank",
        cap: 6,
        cost: 40,
        rules: ["Ancestry baseline only."],
      },
    ],
    feats: [
      { id: "stubborn-lot", name: "Stubborn Lot", rules: [`When this fighter uses Help, a roll of 1 counts as 2 if another friendly fighter is within 1" of this fighter or the assisted fighter.`] },
      { id: "shoulder-to-shoulder", name: "Shoulder to Shoulder", rules: [`While this fighter is within 1" of at least one other friendly fighter, add +1 Might defense die when rolling defense against a Melee attack.`] },
      { id: "rally-to-aid", name: "Rally to Aid", rules: [`Once per battle, when a friendly fighter within 6" becomes Downed, this fighter may move up to 6" toward that fighter. This move cannot enter engagement range.`] },
      { id: "skilled-craftsman", name: "Skilled Craftsman", rules: ["This fighter may upgrade one weapon they own. Apply +1 Mt or +1 Sk to that weapon, chosen when you select it.", "Only one weapon may have this upgrade at a time. This fighter may change which weapon is upgraded between battles. Record the chosen weapon and upgrade on this fighter's roster entry."] },
    ],
  },
  cult: {
    id: "cult",
    name: "Cult",
    identity: "Magic-dominant brotherhoods, 5-10 fighters",
    tableRole:
      "Magically dominant and fragile. Field 5-10 fighters: one Theurge, up to two Adepts, and the rest Acolytes. No armor. Up to 3 casters at creation. Fighters with Cult cannot have Mortal.",
    count: { min: 5, target: "5-8", max: 10 },
    casterMax: 3,
    armorCap: "None",
    proficiencies: ["one-handed", "archery"],
    proficiencyRules: proficiencyRule(["One-Handed", "Archery"]),
    fighterTypes: [
      {
        id: "theurge",
        name: "Theurge",
        role: "Leader",
        cap: 1,
        required: 1,
        cost: 125,
        boost: { count: 2, options: BOOSTABLE_STATS, label: "Add +1 to 2 different attributes." },
        caster: { mode: "required", spells: 2, when: "Theurge is always Caster." },
        rules: ["Head of the rite.", "Leader.", "Caster.", "Knows 2 spells from your Domain list. May take the Cast action."],
      },
      {
        id: "adept",
        name: "Adept",
        role: "Specialist",
        cap: 2,
        cost: 60,
        boost: { count: 1, options: BOOSTABLE_STATS, label: "Add +1 to one attribute." },
        caster: { mode: "optional", spells: 1, when: "Adept may take Caster at recruitment." },
        rules: ["Specialist.", "May take Caster at recruitment. If Caster, knows 1 spell from your Domain list and may take the Cast action."],
      },
      {
        id: "acolyte",
        name: "Acolyte",
        role: "Rank",
        cap: 7,
        cost: 40,
        rules: ["Ancestry baseline only.", "Does not start with Caster. May buy Caster mid-campaign through Advancement (requires Wi 4+ or Sa 4+, whichever attribute governs this retinue's Domain)."],
      },
    ],
    feats: [
      { id: "blood-for-the-rite", name: "Blood for the Rite", rules: [`Once per battle, before this fighter makes an attribute check or casting roll, choose another friendly fighter within 12". That fighter suffers 1 Wound. Add 1d6 to that roll, then discard the lowest single die.`, "This Wound can reduce the chosen fighter to exactly 0 Wounds and cause them to become Downed."] },
      { id: "magic-armor", name: "Magic Armor", rules: ["This fighter may equip Light Armor, Medium Armor, or Heavy Armor."] },
      { id: "chant", name: "Chant", rules: [`When 2 or more other friendly Cult fighters have their bases within 1" of this fighter, this fighter projects Fear as a Sphere of Influence with range 6" — the chanted rite carries on the air, not through line of sight.`, "When an enemy fighter activates while within this Sphere of Influence, they must pass a Sa check for Fear with this fighter as the source."] },
      { id: "convoke", name: "Convoke", casterOnly: true, rules: [`Fighter must have Caster. When this fighter makes a casting roll and 1 or more other friendly Cult fighters with Caster are within 6", add +1 to the roll.`] },
    ],
  },
};

export const UNIVERSAL_FEATS = [
  { id: "line-breaker", name: "Line Breaker", rules: ["When this fighter's Melee action immediately follows Charge during the same activation, add 1 Might die to this fighter's Strike Pool for that Melee attack."] },
  { id: "blacksmiths-arms", name: "Blacksmith's Arms", rules: ["This fighter may wield Two-Handed weapons in one hand.", "A Two-Handed weapon still uses 2 weapon slots."] },
  { id: "guard", name: "Guard", rules: [`Once per round, when a hostile Ranged attack or Cast action selects a friendly Leader, Elite, or Caster fighter within 3" of this fighter as its target, this fighter may Intercept.`, "Intercept: Move this fighter base to base with the targeted fighter, placed between that fighter and the attacking enemy along the straight line from the attacker's base to the targeted fighter's base. This fighter becomes the target instead.", "If more than one friendly fighter with Guard could Intercept, their controlling player chooses one."] },
  { id: "animal-handling", name: "Animal Handling", rules: ["This fighter may field one Companion purchased from Gear - Companions. Record the Companion on this fighter's roster entry."] },
  { id: "infiltrate", name: "Infiltrate", rules: ["If this fighter would be set up during deployment, they may be held in reserve off the battlefield instead.", `Immediately before the start of the first round, their controlling player may set them up anywhere on the battlefield where no enemy fighter has line of sight to them and they are not within 12" of any enemy fighter.`, "If both players have fighters with Infiltrate, alternate placing one fighter at a time, starting with the winner of a roll-off."] },
  { id: "acrobat", name: "Acrobat", rules: [`When this fighter falls or lands from a Jump from a height of up to 12", roll one Sk check. On a pass, do not resolve Falling. On a fail, resolve Falling as normal.`, `This fighter may perform a Diving Charge from a height of up to 6" above the target.`, "Diving Charge: Treat as Charge, but before moving roll one Sk check. Pass: resolve the Charge normally. Fail: the Charge fails and Falling resolves from the full height.", "This fighter may reroll a failed Diving Charge Sk check and must accept the second result."] },
];

export const DOMAIN_FEATS = [
  // Light
  { id: "hard-to-kill", name: "Hard to Kill", domains: ["Light"], rules: ["When a Help roll or Recover roll is made for this fighter, add +1 to the roll."] },
  { id: "lightning-reflexes", name: "Lightning Reflexes", domains: ["Light"], rules: ["When this fighter is targeted by a Melee action that immediately follows the attacker's Charge during the same activation, they may make 1 free Melee attack against that attacker before either attack applies Wounds.", "Resolve both attacks through the full Attack Sequence. Then apply Wounds, Downed, Stunned, and Out of Action results from both attacks together."] },
  { id: "reflection", name: "Reflection", domains: ["Light"], rules: ["When this fighter is the target of a hostile spell that succeeded on its casting roll, they may make a Wi check. On a pass, roll a scatter die — the spell scatters in that direction a distance equal to the measured distance from the caster to this fighter.", "If the spell uses a blast template, recenter it at the new location. If not, place a large blast template there; the spell targets one fighter under it (caster chooses if multiple). If no fighters are under the template, the spell dissipates."] },
  { id: "absolute-faith", name: "Absolute Faith", domains: ["Light"], rules: ["This fighter may reroll failed Fear, Panic, and Insanity tests. They must accept the second result."] },
  { id: "unstoppable-faith", name: "Unstoppable Faith", domains: ["Light"], rules: [`When this fighter performs Charge, they may move up to M + 1" instead of M. If this fighter ends a Charge within engagement range of an enemy and moved less than the full allowed distance in a straight line toward that enemy, push that enemy the remaining distance along the charge path. When this fighter's Melee action immediately follows that Charge, if the pushed enemy stopped because their base contacted terrain, add 2 Might dice to this fighter's Strike Pool for that Melee attack.`] },
  // Arcane
  { id: "warded", name: "Warded", domains: ["Arcane"], rules: ["When this fighter is the target of a hostile spell that succeeded on its casting roll, they may make a Wi check. On a pass, the spell has no effect against this fighter."] },
  { id: "conduit", name: "Conduit", domains: ["Arcane"], rules: ["When a friendly Caster makes a Cast action, that Caster may measure spell range and line of sight from this fighter's base instead of their own.", "This fighter must be Active and not Downed or Stunned. The Caster still makes the casting roll using their Wi and resolves Mishaps as normal. Once per round.", "If more than one friendly fighter with Conduit could be used, the Caster's controlling player chooses one."] },
  { id: "helping-hand", name: "Helping Hand", domains: ["Arcane"], rules: [`Once per round, this fighter may move a Downed or Stunned friendly fighter within 12" up to 6" toward this fighter.`] },
  { id: "second-sight", name: "Second Sight", domains: ["Arcane"], rules: ["During Survival Rolls, if this fighter is a surviving fighter, when your retinue rolls 2d6 for the Survival Roll, you may reroll 2d6 once and choose which result to use.", "Once per Survival Roll. If more than one friendly fighter has Second Sight, you may still reroll only once."] },
  { id: "steady-weave", name: "Steady Weave", domains: ["Arcane"], casterOnly: true, rules: ["Fighter must have Caster.", "When this fighter makes a casting roll that fails to meet the spell's casting difficulty, reroll the Casting Roll once. Must accept the second result.", "If the first roll was Mishap, resolve it as normal. Do not reroll."] },
  // Infernal
  { id: "faceless-horror", name: "Faceless Horror", domains: ["Infernal"], rules: ["This fighter has −1 Sanity (minimum 1).", "When an enemy fighter ends a Charge within engagement range of this fighter, or when this fighter ends a Charge within engagement range of an enemy fighter, that enemy must make a Sanity check for Insanity with this fighter as the source. On a fail, that enemy rolls on the Insanity Table at the start of their next activation."] },
  { id: "in-the-shadow-of-the-elders", name: "In the Shadow of the Elders", domains: ["Infernal"], rules: [`This fighter may perform Hide while within 3" of terrain instead of 1".`] },
  { id: "luck-of-the-damned", name: "Luck of the Damned", domains: ["Infernal"], rules: ["After each battle, any 2d6 roll made for this fighter during the Post-Game Sequence that shows doubles must be rerolled. Accept the new result, even if it also shows doubles."] },
  { id: "daemonic-wings", name: "Daemonic Wings", domains: ["Infernal"], rules: ["Once per battle, at the start of this fighter's activation, they may suffer 1 Wound to gain Fly until the end of that activation.", "Fly: Ignore vertical distance for Move, Charge, and Jump. This fighter keeps their normal M for those actions."] },
  { id: "devils-pact", name: "Devil's Pact", domains: ["Infernal"], rules: ["During this fighter's activation, they may spend both actions to regain 1 Wound, cannot exceed starting W.", "After the battle, if this fighter used Devil's Pact one or more times, roll 2d6 and subtract 1 for each time they used Devil's Pact this battle. Resolve the result on the Doom Table.", "If this fighter was not Out of Action when the battle ended and the modified roll is 2 or 12, roll 2d6 again, apply the same modifier, and resolve on the Doom Table. They must accept the second result."] },
  // Nature
  { id: "wild-aspect", name: "Wild Aspect", domains: ["Nature"], rules: ["This fighter gains the Werebeast keyword and one beast mark — choose Wolf, Rat, Bear, or Serpent. If this fighter already has a beast mark, the chosen mark must be different. A fighter cannot have more than 2 beast marks in total.", "This fighter gains the chosen mark's rule. If this feat is taken at fighter creation, this fighter costs +10 Crowns."] },
  { id: "wind-walker", name: "Wind Walker", domains: ["Nature"], rules: ["This fighter has +1\" Movement, −1 Might, +1 Skill, and −1 Will."] },
  { id: "primal-ward", name: "Primal Ward", domains: ["Nature"], rules: ["If this fighter ended the battle Out of Action, roll their Casualty Table result twice and take the higher result."] },
  { id: "sure-footed", name: "Sure Footed", domains: ["Nature"], rules: ["When this fighter uses Scramble, they move at full M instead of half M."] },
  { id: "camouflage", name: "Camouflage", domains: ["Nature"], rules: [`While Hidden, this fighter cannot be targeted by Ranged or Cast actions beyond 3".`] },
  // Necromancy
  { id: "last-gasp", name: "Last Gasp", domains: ["Necromancy"], rules: ["Once per battle, when this fighter would be reduced to 0 or fewer Wounds, they may make a Might check. On a pass, they remain Active with 1 Wound instead."] },
  { id: "resilient", name: "Resilient", domains: ["Necromancy"], rules: ["When an enemy fighter makes a Melee attack against this fighter, that attack's Strike Pool loses 1 Might die, minimum 0."] },
  { id: "bind-the-dead", name: "Bind the Dead", domains: ["Necromancy"], casterOnly: true, rules: ["Fighter must have the Caster keyword.", "When this fighter successfully casts Summon Skeleton, the Skeleton gains Summon (-) instead of Summon (1d6).", "Does not apply to roster Skeleton fighters recruited through Bone-priests or other rules."] },
  { id: "bone-ward", name: "Bone Ward", domains: ["Necromancy"], rules: ["Once per battle, when this fighter suffers 1 or more Wounds from an Attack Sequence, reduce the Wounds suffered by 1, minimum 0."] },
  { id: "deaths-chill", name: "Death's Chill", domains: ["Necromancy"], rules: ["Enemy fighters cannot Retreat while within engagement range of this fighter."] },
  // Blood
  { id: "shadow-walker", name: "Shadow Walker", domains: ["Blood"], rules: ["This fighter must be Hidden to perform Shadow Walk.", `Shadow Walk — Cost: 2 actions. Move this fighter to any point within 12" that is within 1" of terrain. This move ignores intervening terrain and fighters. This fighter remains Hidden after this move unless they end within 6" of an enemy fighter.`] },
  { id: "celerity", name: "Celerity", domains: ["Blood"], rules: ["At the start of this fighter's activation, they may suffer 1 Wound to gain 1 additional action this activation."] },
  { id: "torpor", name: "Torpor", domains: ["Blood"], rules: ["At the start of this fighter's activation, they may enter Torpor. While in Torpor, this fighter has −1 to all attributes.", "At the start of each subsequent activation, this fighter may continue Torpor or end it.", "When this fighter ends Torpor, they gain +1 to all attributes for each activation spent in Torpor. This bonus lasts until the end of that activation."] },
  { id: "indomitable", name: "Indomitable", domains: ["Blood"], rules: ["When this fighter rolls Might defense dice, they may reroll any dice showing 1. Accept the new results."] },
  { id: "thrill-of-agony", name: "Thrill of Agony", domains: ["Blood"], rules: ["When this fighter suffers 1 or more Wounds from an Attack Sequence, add 1 Might die to their next Melee attack."] },
  // Mortal
  { id: "firearms", name: "Firearms", domains: ["Mortal"], rules: [
    "Fighter must have Mortal and must lack Caster.",
    "When every fighter in the retinue has Mortal, your retinue may purchase firearms from Equipment.",
    "You may equip muskets, blunderbusses, pistols, long rifles, and bombs your retinue is allowed to buy.",
  ] },
  { id: "gunslinger", name: "Gunslinger", domains: ["Mortal"], rules: ["Fighter must have Mortal.", "If this fighter is equipped with 2 Pistols, in a Brace of Pistols or across 2 weapon slots, they may fire both as one Ranged action — each Pistol resolves as its own Ranged Attack Action, in order, with its own Primer Roll and Attack Sequence.", "If they do, they cannot take another Ranged action during this activation."] },
  { id: "deadeye", name: "Deadeye", domains: ["Mortal"], rules: ["When this fighter uses Aim, their next Ranged Attack Action with a firearm this activation adds 1 die of that firearm's dominant die type to the Strike Pool.", "The dominant die type is whichever is higher on the firearm's profile: Mt or Sk. If tied, choose Might dice or Skill dice."] },
  { id: "null", name: "Null", domains: ["Mortal"], rules: [`Enemy Casters cannot perform the Cast action while within 6" of this fighter.`] },
  { id: "common-sense", name: "Common Sense", domains: ["Mortal"], rules: ["When this fighter is included as a scavenger in a Survival Roll, reroll all dice in the pool showing 1. Accept the new results."] },
];

export const SPELLS = {
  Light: [
    { id: "radiant-strike", name: "Radiant Strike", castingStat: "Wi", hit: "RC", difficulty: "11+", mt: "5", sk: "+2", range: `12"`, keywords: ["Attack"], effect: "Ranged attack; use 6 Mt / +2 Sk vs Undead and Daemons", mishap: "" },
    { id: "holy-light", name: "Holy Light", castingStat: "Wi", hit: "-", difficulty: "11+", mt: "-", sk: "-", range: `12" from caster`, effect: `All fighters within 12" lose cover and Hidden condition`, mishap: "The caster becomes Blinded" },
    { id: "heal", name: "Heal", castingStat: "Wi", hit: "-", difficulty: "10+", mt: "-", sk: "-", range: `1"`, effect: "Restore 1 Wound + improve Wound state by one step (Stunned -> Downed, Downed -> Active)", mishap: "" },
    { id: "purge-the-faithless", name: "Purge the Faithless", castingStat: "Wi", hit: "CC", difficulty: "11+", mt: "3", sk: "+1", range: `3" blast from caster`, keywords: ["Attack", `Blast(3")`], effect: `This spell has Blast(3"), centered on the caster.`, mishap: "Caster takes the damage" },
    { id: "shield-of-faith", name: "Shield of Faith", castingStat: "Wi", hit: "-", difficulty: "10+", mt: "-", sk: "-", range: `12"`, effect: `Target friendly fighter gains +2 Might defense dice until the start of the caster's next activation`, mishap: "" },
    { id: "horrors-relived", name: "Horrors Relived", castingStat: "Wi", hit: "-", difficulty: "12+", mt: "-", sk: "-", range: `12"`, effect: "Target makes Sa check. Fail: suffers 4 automatic hits. Pass: suffers 1 automatic hit", mishap: "Resolve the failed effect against the caster" },
    { id: "unwavering-resolve", name: "Unwavering Resolve", castingStat: "Wi", hit: "-", difficulty: "10+", mt: "-", sk: "-", range: `8" from caster`, effect: `All friendly fighters within 8" become immune to Fear, Panic, and Insanity until the start of the caster's next activation`, mishap: "The caster becomes Broken" },
  ],
  Arcane: [
    { id: "arcane-bolt", name: "Arcane Bolt", castingStat: "Wi", hit: "RC", difficulty: "11+", mt: "4", sk: "+3", range: `20"`, keywords: ["Attack"], effect: "Ranged attack; fast, high-finesse", mishap: "" },
    { id: "arcane-shield", name: "Arcane Shield", castingStat: "Wi", hit: "-", difficulty: "11+", mt: "-", sk: "-", range: "Self", effect: "Caster is immune to all spells. At the start of the caster's next activation, roll 1d6; on 1-2 the shield disappears", mishap: "" },
    { id: "fireball", name: "Fireball", castingStat: "Wi", hit: "RC", difficulty: "13+", mt: "4", sk: "+3", range: `18"`, keywords: ["Attack", `Blast(5")`], effect: `Choose a point within 18". If the casting roll fails below difficulty (not Mishap), the fireball scatters and centers there instead. This spell has Blast(5") centered on the resulting point.`, mishap: `This spell's Blast(5") centers on the caster instead` },
    { id: "telekinesis", name: "Telekinesis", castingStat: "Wi", hit: "-", difficulty: "12+", mt: "-", sk: "-", range: `12"`, effect: `Move any fighter up to 6" directly toward or away from the caster. No check required by the target`, mishap: "Your opponent chooses whether the target moves directly toward or directly away from the caster" },
    { id: "displacement", name: "Displacement", castingStat: "Wi", hit: "-", difficulty: "11+", mt: "-", sk: "-", range: `12"`, effect: `Target friendly fighter instantly moves up to 6" in any direction. Ignores terrain, engagement, and intervening fighters. Cannot end inside terrain or another fighter's base`, mishap: `Roll a scatter die. Move the target 6" in the indicated direction. If the target cannot end at the full distance, place it as far as possible along that line without ending inside terrain or another fighter's base` },
    { id: "hoarfrost", name: "Hoarfrost", castingStat: "Wi", hit: "-", difficulty: "11+", mt: "-", sk: "-", range: `18"`, effect: `Choose a point within 18". Place a large blast template until the start of the caster's next activation. Affects friends and enemies. Movement ending in the zone triggers a Sk check and slide`, mishap: "Blast centers on the caster" },
    { id: "slow", name: "Slow", castingStat: "Wi", hit: "-", difficulty: "12+", mt: "-", sk: "-", range: "line of sight", effect: "Target enemy loses 1 action on their next activation", mishap: "The caster loses 1 action on their next activation" },
  ],
  Infernal: [
    { id: "hellfire", name: "Hellfire", castingStat: "Sa", hit: "RC", difficulty: "10+", mt: "4", sk: "+3", range: `3"–18"`, keywords: ["Attack"], effect: "Ranged spell attack. No Mishap.", mishap: "" },
    { id: "summon-daemon", name: "Summon Daemon", castingStat: "Sa", hit: "-", difficulty: "11+", mt: "-", sk: "-", range: `3"`, effect: "Sacrifice one or two friendly fighters carrying enough Summoning Crystals, then roll on the Summon Result table", mishap: "The caster goes Out of Action. No fighters are sacrificed, no crystals are spent, and no Daemon is summoned" },
    { id: "the-void", name: "The Void", castingStat: "Sa", hit: "-", difficulty: "14+", mt: "-", sk: "-", range: `12"`, effect: `Choose a point within 12" at least 6" from every fighter. Place a 3" blast marker there for 1d6 activations. While the marker remains, when a fighter activates, or the first time during its activation it would come within 12" of the marker's center, it must pass one Mt check (d6 + Mt ≥ 8) or move d6" directly toward the marker. After this movement, the fighter may act as normal. If this movement contacts terrain, the fighter stops and its activation ends. If the fighter contacts the blast marker, it immediately goes Out of Action`, mishap: "The marker is placed centered on the caster instead" },
    { id: "possession", name: "Possession", castingStat: "Sa", hit: "-", difficulty: "13+", mt: "-", sk: "-", range: "Engagement range", effect: "Target enemy must pass Wi check or become Possessed. While Possessed, the casting player controls that fighter with 1 action per activation. At end of each possessed activation, target Wi check; pass ends Possessed", mishap: "The caster becomes Possessed instead; opponent controls the caster until Possessed ends" },
    { id: "hellmouth", name: "Hellmouth", castingStat: "Sa", hit: "-", difficulty: "11+", mt: "-", sk: "-", range: `12"`, effect: `Choose a point within 12". Place a 5" blast template centered there. Template cannot overlap any fighter's base. Counts as impassable terrain for the rest of the battle`, mishap: "The Hellmouth opens centered on the caster instead" },
    { id: "searing-gaze", name: "Searing Gaze", castingStat: "Sa", hit: "RC", difficulty: "12+", mt: "3", sk: "+3", range: `18"`, keywords: ["Attack"], effect: `Draw a 1 mm thick straight line from the caster to a point up to 18" away in a direction you choose. Every fighter the line touches that is in line of sight of the caster is hit`, mishap: "Resolve the attack against the caster; the caster becomes Blinded until the end of their next activation" },
    { id: "nightmare-visage", name: "Nightmare Visage", castingStat: "Sa", hit: "-", difficulty: "11+", mt: "-", sk: "-", range: `12"`, effect: `Target friendly fighter within 12". That fighter projects Fear (6") while the spell remains in effect. At the end of each round, the caster makes one Sa check; on a failure, the spell ends`, mishap: "" },
  ],
  Nature: [
    { id: "thorn-volley", name: "Thorn Volley", castingStat: "Wi", hit: "RC", difficulty: "12+", mt: "3", sk: "+2", range: `12"`, keywords: ["Attack", "Spread"], effect: "Make a ranged spell attack with Spread.", mishap: "" },
    { id: "shadowmeld", name: "Shadowmeld", castingStat: "Wi", hit: "-", difficulty: "11+", mt: "-", sk: "-", range: `12"`, effect: `Target friendly fighter gains Hidden and does not need to remain within 1" of terrain to stay Hidden. Hidden is still lost from combat actions, Charge, Climb, Jump, or moving within 6" of an enemy`, mishap: "Enemies add +1 RC or +1 CC — whichever Hit attribute the attack uses — when attacking the target until the start of the caster's next activation" },
    { id: "venom", name: "Venom", castingStat: "Wi", hit: "-", difficulty: "10+", mt: "-", sk: "-", range: `12"`, effect: "Target enemy must pass Mt check (d6 + Mt ≥ 8). Fail: gain 1 Affliction token", mishap: "The caster gains 1 Affliction token" },
    { id: "feral-form", name: "Feral Form", castingStat: "Wi", hit: "-", difficulty: "11+", mt: "-", sk: "-", range: `6"`, effect: `Target friendly fighter gains +2 Mt, +1" M, but cannot use ranged weapons or cast spells for the duration. Lasts until the start of the caster's next activation`, mishap: `The caster suffers -1 Sa until the end of their next activation` },
    { id: "entangle", name: "Entangle", castingStat: "Wi", hit: "-", difficulty: "12+", mt: "-", sk: "-", range: `12"`, effect: "Target enemy has M reduced to 0 and cannot Move, Charge, Climb, Scramble, Jump, Retreat, or use defensive maneuvers. Can still fight, shoot, and cast. Lasts until the start of the caster's next activation", mishap: "The caster has M reduced to 0 until the start of their next activation and cannot Move, Charge, Climb, Scramble, Jump, Retreat, or use defensive maneuvers" },
    { id: "stinging-swarm", name: "Stinging Swarm", castingStat: "Wi", hit: "-", difficulty: "10+", mt: "-", sk: "-", range: `3"`, effect: `Place a Stinging Swarm within 3" (W 5, Sk 5, M 7", Fly). Roll 1d3; remains for that many activations, counting this one. Activates immediately with 2 actions`, mishap: "The Stinging Swarm appears hostile; your opponent controls it for its activation, then remove it" },
    { id: "dread-chorus", name: "Dread Chorus", castingStat: "Wi", hit: "-", difficulty: "11+", mt: "-", sk: "-", range: `8" from caster`, effect: `All enemy fighters within 8" must pass Sa test for Fear with the caster as the source`, mishap: "" },
  ],
  Necromancy: [
    { id: "deathbolt", name: "Deathbolt", castingStat: "Sa", hit: "-", difficulty: "14+", mt: "-", sk: "-", range: `18"`, effect: "Target makes Wi check. Fail: goes Out of Action. Pass: no effect", mishap: "" },
    { id: "summon-skeleton", name: "Summon Skeleton", castingStat: "Sa", hit: "-", difficulty: "10+", mt: "-", sk: "-", range: `3"`, effect: `Caster must carry 1 Summoning Crystal. Remove one body token within 3". Spend 1 crystal. Place a Skeleton there with Summon (1d6). Skeleton activates immediately with 2 actions`, mishap: "The Skeleton appears hostile; your opponent controls it for its activation, then remove it" },
    { id: "raise-dead", name: "Raise Dead", castingStat: "Sa", hit: "-", difficulty: "13+", mt: "-", sk: "-", range: `3"`, effect: `Remove one friendly body token within 3". Place that fighter within 3" of the caster with 1 Wound, Undead, and Fearless. Roll 1d3 activations, counting this one. They activate immediately with 2 actions. When those activations finish, they go Out of Action and are removed`, mishap: "Your opponent places and controls the raised fighter instead" },
    { id: "cursed-ground", name: "Cursed Ground", castingStat: "Sa", hit: "RC", difficulty: "12+", mt: "2", sk: "+2", range: `12"`, keywords: ["Attack"], effect: `Choose a point within 12". Place a large blast template. All fighters in the zone suffer -1" M and take the spell's hit unless they pass a Sk check. Lasts until the start of the caster's next activation`, mishap: "Blast centers on the caster" },
    { id: "wither", name: "Wither", castingStat: "Sa", hit: "-", difficulty: "11+", mt: "-", sk: "-", range: `12"`, effect: "Target enemy suffers Withered until the start of the caster's next activation", mishap: "The caster suffers Withered until the start of their next activation" },
    { id: "bone-blast", name: "Bone Blast", castingStat: "Sa", hit: "CC", difficulty: "11+", mt: "4", sk: "+3", range: "Blast from caster", keywords: ["Attack", `Blast(5")`], effect: `This spell has Blast(5"), centered on the caster. The caster is not hit.`, mishap: "Resolve the attack against the caster" },
    { id: "bone-circle", name: "Bone Circle", castingStat: "Sa", hit: "RC", difficulty: "12+", mt: "3", sk: "+4", range: `12"`, keywords: ["Attack"], effect: `Choose a point within 12". Place a 3" blast template. Any fighter that starts in, ends in, or moves through it is hit. Affects friends and enemies. Lasts until the start of the caster's next activation`, mishap: "Zone centers on the caster" },
  ],
  Blood: [
    { id: "leech", name: "Leech", castingStat: "Sa", hit: "CC", difficulty: "12+", mt: "5", sk: "+3", range: "Touch", keywords: ["Attack"], effect: "Touch attack; if target takes at least 1 Wound, caster heals 1 Wound", mishap: "" },
    { id: "bleed", name: "Bleed", castingStat: "Sa", hit: "-", difficulty: "13+", mt: "-", sk: "-", range: `12"`, effect: "Target must pass Wi check (d6 + Wi ≥ 8). Fail: Bleeding", mishap: "Caster gains Bleeding instead" },
    { id: "blood-frenzy", name: "Blood Frenzy", castingStat: "Sa", hit: "-", difficulty: "11+", mt: "-", sk: "-", range: `6"`, effect: "Target friendly fighter gains +3 Mt and suffers -1 CC and -1 RC until the start of the caster's next activation", mishap: `Target suffers -1 Mt, -1 CC, and -1" M until the start of the caster's next activation` },
    { id: "summon-bats", name: "Summon Bats", castingStat: "Sa", hit: "-", difficulty: "11+", mt: "-", sk: "-", range: `3"`, effect: `Caster must carry 1 Summoning Crystal. Place Bats within 3" (W 6, Sk 6, M 7", Fly). Caster suffers 1 Wound; spend 1 crystal. Summon (1d3). Bats activate immediately with 2 actions. Cannot be bound`, mishap: "The Bats appear hostile; your opponent controls them for their activation, then remove them" },
    { id: "enthrall", name: "Enthrall", castingStat: "Sa", hit: "-", difficulty: "11+", mt: "-", sk: "-", range: `8"`, effect: "Target enemy must pass Wi check (d6 + Wi ≥ 8) or immediately take one Move action in a direction chosen by the caster", mishap: "Friendly fighter, opponent's choice, takes the move instead" },
    { id: "feast-of-excess", name: "Feast of Excess", castingStat: "Sa", hit: "-", difficulty: "11+", mt: "-", sk: "-", range: `12"`, effect: `Target friendly fighter gains +1 Mt, +1 Sk, +1" M. When effect ends, target becomes Stunned`, mishap: "Target becomes Stunned" },
    { id: "nightfall", name: "Nightfall", castingStat: "Sa", hit: "-", difficulty: "11+", mt: "-", sk: "-", range: "Self", effect: "The caster is engulfed in shadow. No ranged weapons or spells can target into or out of the bubble. The caster gains +1 CC on Melee attacks until the start of the caster's next activation", mishap: "Bright light; enemies gain +1 RC when making Ranged attacks against the caster, caster suffers -1 Mt until start of next activation" },
  ],
  Mortal: [],
};

// Verbatim definitions from rules/weapons.md "Keywords" section (and the
// Firearms / Alchemy prose for the few keywords defined outside that table).
// Used to power rule-link modals for weapon special rules in the retinue
// builder and the printed sheet's Rules Reference appendix.
export const WEAPON_KEYWORD_RULES = {
  'Blast(3")': `This attack uses a blast template of the printed size instead of targeting a single fighter. Build and roll the Strike Pool once — every fighter (friend and foe) under the template rolls their own defense pool against that roll.`,
  'Blast(5")': `This attack uses a blast template of the printed size instead of targeting a single fighter. Build and roll the Strike Pool once — every fighter (friend and foe) under the template rolls their own defense pool against that roll.`,
  Cleave: "When this weapon's attack reduces a fighter to 0 Wounds, apply any defensive maneuver movement from that attack, then make one free Melee attack against a different fighter within engagement range.",
  Heavy: "This weapon cannot be used to make a Ranged attack if the fighter Moved or Charged this activation.",
  Impact: "When this weapon's attack would make an Active fighter Downed, that fighter becomes Stunned instead.",
  Parry: "When this fighter defends against a Melee attack, reroll one failed Skill die in the defense pool.",
  Piercing: "When defending against this weapon's attacks, ignore the target's armor dice bonus and shield Df bonus when building the defense pool.",
  Reach: `This weapon can engage enemies up to 2" away.`,
  Spread: "This attack uses the standard flame template instead of targeting a single fighter. Build and roll the Strike Pool once — every fighter (friend and foe) under the template rolls their own defense pool against that roll.",
  Sunder: "When defending against this weapon's attacks, ignore the target's shield Df bonus and Parry keyword when building the defense pool.",
  "Thrown(Mt)": "This weapon may be used to make a Ranged attack. Maximum range equals the fighter's Might in inches. No minimum range. Use the weapon's normal Strike Pool.",
  "Thrown(Sk)": "This weapon may be used to make a Ranged attack. Maximum range equals the fighter's Skill in inches. No minimum range. Use the weapon's normal Strike Pool.",
  Volley: "This weapon may target a fighter without line of sight. If it does, the target gains +2 Skill defense dice against that attack.",
  "Spell focus": "A fighter wielding a Staff has Spell focus. When purchased, choose Will or Sanity for this Staff. When this fighter resolves a casting attack while wielding this Staff, use the chosen attribute instead of Skill to determine the spell's scaling Skill dice. The spell's printed +Skill value still applies.",
  "Single Shot": "This weapon can be fired or thrown only once per battle.",
  Smoke: `Creates a 6" cloud that completely blocks line of sight in all directions — no fighter may draw line of sight through or within the cloud, regardless of which side they are on. Fighters in or behind the smoke cannot be declared as targets of Ranged attacks or Cast actions from outside the cloud, and fighters inside cannot target fighters outside. The cloud persists until the end of the round. A fighter may detonate at their own feet instead of throwing — the effect resolves immediately centered on that fighter.`,
  "Firearm critical hits": "Firearms gain critical hits against all targets (outside the weapon triangle).",
  "Dual wielding": "Choose a primary and secondary weapon. Add both weapons' +Mt and +Sk to the Strike Pool, max 15 dice. Use only the primary weapon's type and special rules. Cannot use a shield while dual-wielding.",
};

export const EQUIPMENT = [
  { id: "dagger", name: "Dagger", kind: "weapon", group: "One-Handed melee", proficiency: "one-handed", cost: 10, slots: 1, alwaysAllowed: true, rules: ["Hands 1H. +Sk +1. Thrown(Sk). Any fighter may equip a Dagger."] },
  { id: "sword", name: "Sword", kind: "weapon", group: "One-Handed melee", proficiency: "one-handed", cost: 25, slots: 1, rules: ["Hands 1H. +Mt +1, +Sk +1. Sword. Parry."] },
  { id: "rapier", name: "Rapier", kind: "weapon", group: "One-Handed melee", proficiency: "one-handed", cost: 40, slots: 1, rules: ["Hands 1H. +Sk +3. Sword. Parry."] },
  { id: "hand-axe", name: "Hand Axe", kind: "weapon", group: "One-Handed melee", proficiency: "one-handed", cost: 20, slots: 1, rules: ["Hands 1H. +Mt +2. Axe. Thrown(Mt)."] },
  { id: "battle-axe", name: "Battle Axe", kind: "weapon", group: "One-Handed melee", proficiency: "one-handed", cost: 25, slots: 1, rules: ["Hands 1H. +Mt +2, +Sk +1. Axe. Baseline axe."] },
  { id: "mace", name: "Mace", kind: "weapon", group: "One-Handed melee", proficiency: "one-handed", cost: 20, slots: 1, rules: ["Hands 1H. +Mt +2. Hammer. Impact."] },
  { id: "flail", name: "Flail", kind: "weapon", group: "One-Handed melee", proficiency: "one-handed", cost: 25, slots: 1, rules: ["Hands 1H. +Mt +1. Hammer. Sunder."] },
  { id: "spear", name: "Spear", kind: "weapon", group: "One-Handed melee", proficiency: "one-handed", cost: 25, slots: 1, rules: ["Hands 1H. +Mt +1, +Sk +1. Spear. Reach."] },
  { id: "javelin", name: "Javelin", kind: "weapon", group: "One-Handed melee", proficiency: "one-handed", cost: 15, slots: 1, rules: ["Hands 1H. +Mt +1. Spear. Thrown(Mt), Reach."] },
  { id: "halberd", name: "Halberd", kind: "weapon", group: "Two-Handed melee", proficiency: "two-handed", cost: 45, slots: 2, rules: ["Hands 2H. +Mt +2, +Sk +1. Spear. Reach."] },
  { id: "glaive", name: "Glaive", kind: "weapon", group: "Two-Handed melee", proficiency: "two-handed", cost: 50, slots: 2, rules: ["Hands 2H. +Mt +1, +Sk +1. Spear. Reach. Cleave."] },
  { id: "great-sword", name: "Great Sword", kind: "weapon", group: "Two-Handed melee", proficiency: "two-handed", cost: 50, slots: 2, rules: ["Hands 2H. +Mt +2, +Sk +1. Sword. Cleave."] },
  { id: "war-axe", name: "War Axe", kind: "weapon", group: "Two-Handed melee", proficiency: "two-handed", cost: 45, slots: 2, rules: ["Hands 2H. +Mt +3. Axe. Cleave."] },
  { id: "maul", name: "Maul", kind: "weapon", group: "Two-Handed melee", proficiency: "two-handed", cost: 35, slots: 2, rules: ["Hands 2H. +Mt +3. Hammer. Baseline hammer."] },
  { id: "greathammer", name: "Greathammer", kind: "weapon", group: "Two-Handed melee", proficiency: "two-handed", cost: 45, slots: 2, rules: ["Hands 2H. +Mt +3. Hammer. Impact."] },
  { id: "staff", name: "Staff", kind: "weapon", group: "Two-Handed melee", proficiency: "two-handed", cost: 20, slots: 2, rules: ["Hands 2H. +Mt +1, +Sk +1. Spear. Reach. Spell focus.", "When purchased, choose Will or Sanity for this Staff.", "When this fighter resolves a casting attack while wielding this Staff, use the chosen attribute instead of Skill to determine the spell's scaling Skill dice. The spell's printed +Skill value still applies."] },
  { id: "shortbow", name: "Shortbow", kind: "weapon", group: "Archery", proficiency: "archery", cost: 40, slots: 2, rules: [`Hands 2H. Range 3"-18". +Mt +1, fixed 4 Sk. Draw strength plus fixed accuracy.`] },
  { id: "longbow", name: "Longbow", kind: "weapon", group: "Archery", proficiency: "archery", cost: 50, slots: 2, rules: [`Hands 2H. Range 3"-24". +Mt +1, fixed 5 Sk. Volley.`] },
  { id: "crossbow", name: "Crossbow", kind: "weapon", group: "Archery", proficiency: "archery", cost: 65, slots: 2, rules: [`Hands 2H. Range 3"-24". Fixed 4 Mt, +Sk +2.`] },
  { id: "heavy-crossbow", name: "Heavy Crossbow", kind: "weapon", group: "Archery", proficiency: "archery", cost: 90, slots: 2, rules: [`Hands 2H. Range 3"-30". Fixed 5 Mt, +Sk +2. Heavy.`] },
  { id: "sling", name: "Sling", kind: "weapon", group: "Thrown", proficiency: "thrown", cost: 20, slots: 1, rules: [`Hands 1H. Range 3"-12". +Mt +1, +Sk +1. Impact.`] },
  { id: "throwing-stars", name: "Throwing Stars", kind: "weapon", group: "Thrown", proficiency: "thrown", cost: 10, slots: 1, rules: [`Hands 1H. Range 1"-8". +Sk +1.`] },
  { id: "musket", name: "Musket", kind: "weapon", group: "Firearms", proficiency: "firearms", cost: 100, slots: 2, rules: [`Requires Firearms domain feat; Mortal; forbids Caster. Hands 2H. Range 3"-24". Primer 9+. Fixed 5 Mt, +Sk +2. Firearm critical hits.`] },
  { id: "blunderbuss", name: "Blunderbuss", kind: "weapon", group: "Firearms", proficiency: "firearms", cost: 115, slots: 2, rules: [`Requires Firearms domain feat; Mortal; forbids Caster. Hands 2H. Range 0"-10". Primer 8+. Fixed 3 Mt, +Sk +2. Spread.`] },
  { id: "pistol", name: "Pistol", kind: "weapon", group: "Firearms", proficiency: "firearms", cost: 90, slots: 1, rules: [`Requires Firearms domain feat; Mortal; forbids Caster. Hands 1H. Range 0"-12". Primer 9+. Fixed 4 Mt, +Sk +2. Short range.`] },
  { id: "long-rifle", name: "Long Rifle", kind: "weapon", group: "Firearms", proficiency: "firearms", cost: 125, slots: 2, rules: [`Requires Firearms domain feat; Mortal; forbids Caster. Hands 2H. Range 3"-30". Primer 10+. Fixed 5 Mt, +Sk +3. Piercing, Heavy, Impact.`] },
  { id: "brace-of-pistols", name: "Brace of Pistols", kind: "weapon", group: "Firearms", proficiency: "firearms", cost: 25, slots: 1, rules: ["Requires Firearms domain feat; Mortal; forbids Caster. Holds 2 Pistols in 1 weapon slot. Cost here is for the brace item from the rules table."] },
  { id: "bomb", name: "Bomb", kind: "weapon", group: "Bombs", proficiency: "firearms", cost: 40, slots: 1, rules: [`Requires Firearms domain feat; Mortal; forbids Caster. Hands 1H. Distance d6 + Mt. Primer 9+. Strike Pool 3 Mt / 2 Sk. Blast(3"), Single Shot, Impact.`] },
  { id: "smoke-bomb", name: "Smoke Bomb", kind: "weapon", group: "Bombs", proficiency: "firearms", cost: 25, slots: 1, rules: [`Requires Firearms domain feat; Mortal; forbids Caster. Hands 1H. Distance d6 + Mt. Primer 8+. 6" blast, Single Shot, Smoke.`] },
  { id: "buckler", name: "Buckler", kind: "armor", group: "Armor", armorRank: 1, cost: 10, slots: 1, rules: ["Light tier. +1 Df on 1 Skill die."] },
  { id: "shield", name: "Shield", kind: "armor", group: "Armor", armorRank: 2, cost: 25, slots: 1, rules: ["Medium tier. +1 Df on 1 Might die."] },
  { id: "tower-shield", name: "Tower Shield", kind: "armor", group: "Armor", armorRank: 3, cost: 50, slots: 1, rules: ["Heavy tier. +1 Df on 2 Might dice; −1 Df on 1 Skill die."] },
  { id: "light-armor", name: "Light Armor", kind: "armor", group: "Armor", armorRank: 1, cost: 50, slots: 0, rules: ["Adds +1 Skill die to the defense pool before rolling."] },
  { id: "medium-armor", name: "Medium Armor", kind: "armor", group: "Armor", armorRank: 2, cost: 115, slots: 0, rules: ["Adds +1 Might die to the defense pool before rolling."] },
  { id: "heavy-armor", name: "Heavy Armor", kind: "armor", group: "Armor", armorRank: 3, cost: 185, slots: 0, rules: ["Adds +2 Might dice and removes 1 Skill die from the defense pool before rolling."] },
  { id: "icon", name: "Icon", kind: "sphere", group: "Sphere of Influence", cost: 75, slots: 2, rules: [`Friendly fighters within 6" gain +1 Sa. Passive. Icon or Instrument.`] },
  { id: "instrument", name: "Instrument", kind: "sphere", group: "Sphere of Influence", cost: 65, slots: 2, rules: [`Friendly fighters within 6" gain +1" M. Requires 1 action per turn to activate. Icon or Instrument.`] },
  { id: "wand", name: "Wand", kind: "special", group: "Spellcasting gear", cost: 35, slots: 1, requiresKeyword: "Caster", rules: ["Fighter must have Caster.", "Gain +1 to hit when resolving an Attack spell.", "Multiple Wands or duplicate Wand effects do not stack."] },
  { id: "summoning-crystal", name: "Summoning Crystal", kind: "special", group: "Summoning gear", cost: 35, slots: 0, rules: ["Binders or any Caster who knows a summoning spell only.", "Assigned to a fighter; max 2 per fighter.", "Consumed when spent during a summoning spell."] },
  { id: "rune-stones", name: "Rune-stones", kind: "special", group: "Runecasters", cost: 15, slots: 1, requiresTradition: "runecasters", rules: ["Fighters with the Runecasters keyword only. Once per battle after a fighter carrying Rune-stones makes an attribute check, roll to hit, defense roll, or casting roll, discard the Rune-stones to reroll one die from that roll. Must accept the second result. Remove after battle."] },
  { id: "silver", name: "Silver upgrade", kind: "upgrade", group: "Material upgrades", cost: 40, slots: 0, rules: ["Added to weapon cost. +1 CC or +1 RC vs fighters with Undead or Werebeast — whichever Hit attribute the weapon uses. Record which weapon is upgraded."] },
  { id: "adders-kiss", name: "Adder's Kiss", kind: "alchemy", group: "Alchemy", cost: 25, slots: 0, rules: ["Poison. +1 Sk to the weapon's strike pool. One poison per weapon."] },
  { id: "blight-extract", name: "Blight Extract", kind: "alchemy", group: "Alchemy", cost: 40, slots: 0, rules: ["Poison. Unblocked hits add 1 Affliction token. One poison per weapon."] },
  { id: "vitriol", name: "Vitriol", kind: "alchemy", group: "Alchemy", cost: 50, slots: 0, rules: ["Poison. When defending against this weapon's attacks, reduce the target's armor dice bonus by 1 die. One poison per weapon."] },
  { id: "widows-tears", name: "Widow's Tears", kind: "alchemy", group: "Alchemy", cost: 75, slots: 0, rules: ["Poison. Unblocked hits inflict 2 Wounds instead of 1. One poison per weapon."] },
  { id: "silversbane", name: "Silversbane", kind: "alchemy", group: "Alchemy", cost: 65, slots: 0, rules: [`Poison. Unblocked hits inflict -1" M on fighters with Undead or Werebeast. One poison per weapon.`] },
  { id: "climbing-rope", name: "Climbing Rope", kind: "gear", group: "Adventuring gear", cost: 35, slots: 0, rules: ["Permanent. Climb uses full Movement instead of half Movement."] },
  { id: "hound", name: "Hound", kind: "companion", group: "Companions", cost: 40, slots: 0, requiresFeat: "animal-handling", companionProfile: { stats: { CC: 3, Mt: 3, Sk: 3, W: 1 }, tether: 3, keywords: ["Tamed"] }, rules: [`Requires Animal Handling. CC 3, Mt 3, Sk 3, W 1, Tether 3".`] },
  { id: "hawk", name: "Hawk", kind: "companion", group: "Companions", cost: 50, slots: 0, requiresFeat: "animal-handling", companionProfile: { stats: { CC: 2, RC: 2, Mt: 1, Sk: 4, W: 1 }, tether: 12, keywords: ["Tamed", "Fly"] }, rules: [`Requires Animal Handling. CC 2, RC 2, Mt 1, Sk 4, W 1, Tether 12".`] },
  { id: "cat", name: "Cat", kind: "companion", group: "Companions", cost: 35, slots: 0, requiresFeat: "animal-handling", companionProfile: { stats: { CC: 2, Sk: 4, W: 1 }, tether: 6, keywords: ["Tamed"] }, rules: [`Requires Animal Handling. CC 2, Sk 4, W 1, Tether 6".`] },
  { id: "giant-rat", name: "Giant Rat", kind: "companion", group: "Companions", cost: 30, slots: 0, requiresFeat: "animal-handling", companionProfile: { stats: { CC: 2, Mt: 2, Sk: 4, W: 1 }, tether: 3, keywords: ["Tamed"] }, rules: [`Requires Animal Handling. CC 2, Mt 2, Sk 4, W 1, Tether 3".`] },
  { id: "rat-swarm", name: "Rat Swarm", kind: "companion", group: "Companions", cost: 45, slots: 0, requiresFeat: "animal-handling", companionProfile: { stats: { CC: 3, Mt: 0, Sk: 6, W: 6 }, tether: 3, keywords: ["Swarm", "Tamed"] }, rules: [`Requires Animal Handling. CC 3, W 6, Sk 6, Swarm keyword, Tether 3".`] },
];

export const ARMOR_RANK = {
  None: 0,
  "Light Armor": 1,
  "Medium Armor": 2,
  "Heavy Armor": 3,
};

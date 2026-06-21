export const STAT_KEYS = ["M", "CC", "RC", "Mt", "Sk", "Wi", "Sa", "W"];
export const BOOSTABLE_STATS = ["CC", "RC", "Mt", "Sk", "Wi", "Sa"];

export const SPECIES = [
  {
    id: "human",
    name: "Human",
    cost: 0,
    stats: { M: 6, CC: 3, RC: 3, Mt: 3, Sk: 3, Wi: 3, Sa: 4, W: 3 },
    description: "Humans are the baseline stats.",
  },
  {
    id: "elf",
    name: "Elf",
    cost: 10,
    stats: { M: 7, CC: 3, RC: 3, Mt: 3, Sk: 4, Wi: 4, Sa: 3, W: 3 },
    description: 'Elves cost an additional +10c, but give 4Sk, 4Wi and 7" movement.',
  },
  {
    id: "dwarf",
    name: "Dwarf",
    cost: 10,
    stats: { M: 5, CC: 3, RC: 3, Mt: 4, Sk: 3, Wi: 3, Sa: 3, W: 3 },
    description: 'Dwarves cost an additional +10c, but give 4Mt and 5" movement.',
  },
];

export const PROFICIENCIES = [
  { id: "one-handed", name: "One-Handed", weapons: "Sword, Hand Axe, Mace, Spear" },
  { id: "two-handed", name: "Two-Handed", weapons: "Halberd, Great Sword, War Axe, War Hammer, Staff" },
  { id: "archery", name: "Archery", weapons: "Shortbow, Longbow, Crossbow, Heavy Crossbow" },
  { id: "thrown", name: "Thrown", weapons: "Sling, Throwing Stars" },
  { id: "firearms", name: "Firearms", weapons: "Musket, Blunderbuss, Pistol, Long Rifle, bombs" },
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
    rules: ["Provides Infernal magic identity. Several alpha spell entries are still TBD."],
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
      "Fighters with Mortal may take Firearms on the Proficiency menu.",
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

export function canTakeFirearmsProficiency(keywords) {
  return hasKeyword(keywords, "Mortal");
}

export function canEquipFirearm(keywords, firearmTier, archetype) {
  if (!hasKeyword(keywords, "Mortal")) return false;
  if (hasKeyword(keywords, "Caster")) return false;
  if (firearmTier === "refined") return archetype?.firearmAccess === "refined";
  if (firearmTier === "basic") return archetype?.firearmAccess === "basic" || archetype?.firearmAccess === "refined";
  return archetype?.firearmAccess !== "none";
}

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
      "Once per battle, after a fighter carrying Rune-stones makes a stat roll, rolls to hit, rolls defense dice, or makes a casting roll, they may discard the Rune-stones to reroll one die from that roll. They must accept the second result. Remove the Rune-stones from the roster after the battle.",
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
      "Friendly fighters wearing armor project Fear.",
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
      `Once per round, when an enemy fighter within 12" of a friendly Caster makes a stat roll or casting roll, subtract 1 from that roll.`,
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
    id: "beastmen",
    name: "Beastmen",
    domain: "Nature",
    allowed: ["hunters", "cult"],
    choice: {
      id: "beastMark",
      label: "Choose one beast-mark for the retinue",
      options: [
        {
          id: "wolf",
          name: "Wolf",
          rules: ["Fighters gain Fighting Claws.", "Fighting Claws are a 0-slot melee weapon: +2 Mt, +1 Sk, Axe."],
        },
        {
          id: "rat",
          name: "Rat",
          rules: ["Fighters may carry 1 additional one-handed weapon.", "This extra weapon cannot be a shield, firearm, bomb, or two-handed weapon."],
        },
        {
          id: "bear",
          name: "Bear",
          rules: ["Fighters gain +1 Mt and -1 Sa.", "Sa cannot be reduced below 1."],
        },
        {
          id: "serpent",
          name: "Serpent",
          rules: ["When a fighter attacks with a melee weapon, 1 unblocked hit may inflict Poisoned instead of 1 Wound."],
        },
      ],
    },
    rules: [
      "Choose one beast-mark for the retinue: Wolf, Rat, Bear, or Serpent.",
      "All fighters with the Beastmen keyword cost +10 Crowns and gain the chosen rule.",
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
      "Once per battle, when a friendly fighter is taken Out of Action, replace that fighter with a Zombie until the end of the battle. Place the Zombie where the fighter was. The Zombie joins your retinue for the rest of the battle.",
      "After the battle, roll on the Casualty Table for the original fighter as normal. If the original fighter is Slain and the Zombie is not Out of Action, the Zombie joins your retinue. Otherwise, remove the Zombie from your roster.",
    ],
  },
  {
    id: "bone-priests",
    name: "Bone-priests",
    domain: "Necromancy",
    allowed: ["cult", "hunters"],
    rules: [
      "This retinue may recruit Skeletons as Rank fighters up to its normal Rank class cap: up to 4 Skeletons for Hunters or up to 7 Skeletons for Cult.",
      "Skeletons count toward the retinue's maximum number of fighters and cannot gain XP, buy equipment, carry scenario rewards, or use post-battle advancement.",
    ],
  },
  {
    id: "sepulchers",
    name: "Sepulchers",
    domain: "Necromancy",
    allowed: ["knights", "folk"],
    rules: ["While a friendly fighter is Downed or Stunned, that fighter projects Fear."],
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
      "Fighters with Vampire pay 2 XP more than the normal cost to buy each post-game advancement.",
    ],
  },
  {
    id: "dynasts",
    name: "Dynasts",
    domain: "Blood",
    allowed: ["knights", "hunters"],
    rules: [
      "At roster creation, choose up to 3 melee weapons in this retinue to be heirloom weapons. No fighter may carry more than 1 heirloom weapon.",
      "When a fighter attacks with an heirloom weapon, add +1 to the roll to hit.",
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
    rules: ["When a friendly fighter attacks an enemy Caster, add +1 to the roll to hit."],
  },
  {
    id: "constables",
    name: "Constables",
    domain: "Mortal",
    allowed: ["knights", "folk"],
    rules: ["Enemy fighters cannot Retreat while within engagement range of a friendly fighter from this retinue."],
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
    rules: [`Friendly fighters within 1" of at least one other friendly fighter project Fear.`],
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
    firearmAccess: "basic",
    proficiencies: ["one-handed", "two-handed", "archery", "thrown"],
    mortalProficiencies: ["firearms"],
    proficiencyRules: proficiencyRule(["One-Handed", "Two-Handed", "Archery", "Thrown", "Firearms (requires Mortal)"]),
    fighterTypes: [
      {
        id: "lord",
        name: "Lord",
        role: "Leader",
        cap: 1,
        required: 1,
        cost: 125,
        boost: { count: 2, options: BOOSTABLE_STATS, label: "Add +1 to 2 different stats." },
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
        boost: { count: 1, options: BOOSTABLE_STATS, label: "Add +1 to one stat." },
        builtInProficiencies: ["one-handed"],
        rules: ["Specialist.", "Built-in One-Handed proficiency. The built-in proficiency does not count against the Specialist's chosen feat pick."],
      },
    ],
    feats: [
      { id: "hold-the-line", name: "Hold the Line", rules: [`When this fighter uses Brace, choose another friendly fighter within 1". That fighter gains +1 red defense die until this fighter's next activation.`] },
      { id: "to-me-brothers", name: "To Me, Brothers!", rules: [`Once per battle, when this fighter uses Brace, choose up to 2 friendly fighters within 12". Each chosen fighter may move up to 6" toward this fighter. A fighter cannot use this movement to enter engagement range.`] },
      { id: "iron-discipline", name: "Iron Discipline", rules: ["This fighter cannot become Downed.", "When this fighter would become Downed, they remain Active with 0 Wounds instead. While this fighter has 0 Wounds, any unblocked hit pushes them to Stunned as if they were Downed."] },
      { id: "vow-of-pursuit", name: "Vow of Pursuit", rules: ["When this fighter attacks an enemy fighter that took a friendly fighter Out of Action this battle, add 2 red dice to this fighter's Strike Pool."] },
    ],
  },
  hunters: {
    id: "hunters",
    name: "Hunters",
    identity: "Versatile skirmishers and slayers, 5-12 fighters",
    tableRole:
      "Versatile skirmishers. Field 5-12 fighters: 1 Captain, 0-4 Stalker, 0-3 Tracker, 0-4 Hand. Medium Armor, refined firearm access on Mortal, and 1 caster at most.",
    count: { min: 5, target: "6-10", max: 12 },
    casterMax: 1,
    armorCap: "Medium Armor",
    firearmAccess: "refined",
    proficiencies: ["one-handed", "two-handed", "archery", "thrown"],
    mortalProficiencies: ["firearms"],
    proficiencyRules: proficiencyRule(["One-Handed", "Two-Handed", "Archery", "Thrown", "Firearms (requires Mortal)"]),
    fighterTypes: [
      {
        id: "captain",
        name: "Captain",
        role: "Leader",
        cap: 1,
        required: 1,
        cost: 125,
        boost: { count: 2, options: BOOSTABLE_STATS, label: "Add +1 to 2 different stats." },
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
        boost: { count: 1, options: BOOSTABLE_STATS, label: "Add +1 to one stat." },
        builtInChoice: { options: ["archery", "firearms"], restricted: { firearms: "Requires Mortal" } },
        rules: ["Specialist.", "Built-in Archery or Firearms proficiency. Firearms requires Mortal. The built-in proficiency does not count against the Specialist's chosen feat pick."],
      },
      {
        id: "hand",
        name: "Hand",
        role: "Rank",
        cap: 4,
        cost: 40,
        rules: ["Species baseline only."],
      },
    ],
    feats: [
      { id: "marked-quarry", name: "Marked Quarry", rules: ["At the start of the battle, choose 1 enemy fighter.", "When this fighter attacks the chosen fighter, add 1 red die or 1 blue die to this fighter's Strike Pool."] },
      { id: "patient-shot", name: "Patient Shot", rules: ["When this fighter uses Aim, their next Ranged attack this activation may reroll 1 natural 1 in the Strike Pool."] },
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
    firearmAccess: "basic",
    proficiencies: ["one-handed", "archery", "thrown"],
    mortalProficiencies: ["firearms"],
    proficiencyRules: proficiencyRule(["One-Handed", "Archery", "Thrown", "Firearms (requires Mortal)"]),
    fighterTypes: [
      {
        id: "mayor",
        name: "Mayor",
        role: "Leader",
        cap: 1,
        required: 1,
        cost: 125,
        boost: { count: 2, options: BOOSTABLE_STATS, label: "Add +1 to 2 different stats." },
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
        boost: { count: 1, options: BOOSTABLE_STATS, label: "Add +1 to one stat." },
        builtInProficiencies: ["two-handed"],
        rules: ["Specialist.", "Built-in Two-Handed proficiency. The built-in proficiency does not count against the Specialist's chosen feat pick."],
      },
      {
        id: "townsfolk",
        name: "Townsfolk",
        role: "Rank",
        cap: 6,
        cost: 40,
        rules: ["Species baseline only."],
      },
    ],
    feats: [
      { id: "stubborn-lot", name: "Stubborn Lot", rules: [`When this fighter uses Help, a roll of 1 counts as 2 if another friendly fighter is within 1" of this fighter or the assisted fighter.`] },
      { id: "shoulder-to-shoulder", name: "Shoulder to Shoulder", rules: [`While this fighter is within 1" of at least one other friendly fighter, add +1 blue defense die when rolling defense against a Melee attack.`] },
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
    firearmAccess: "none",
    proficiencies: ["one-handed", "archery"],
    mortalProficiencies: [],
    proficiencyRules: proficiencyRule(["One-Handed", "Archery"]),
    fighterTypes: [
      {
        id: "theurge",
        name: "Theurge",
        role: "Leader",
        cap: 1,
        required: 1,
        cost: 125,
        boost: { count: 2, options: BOOSTABLE_STATS, label: "Add +1 to 2 different stats." },
        caster: { mode: "required", spells: 2, when: "Theurge is always Caster." },
        rules: ["Head of the rite.", "Leader.", "Caster.", "Knows 2 spells from your Domain list. May take the Cast action."],
      },
      {
        id: "adept",
        name: "Adept",
        role: "Specialist",
        cap: 2,
        cost: 60,
        boost: { count: 1, options: BOOSTABLE_STATS, label: "Add +1 to one stat." },
        caster: { mode: "optional", spells: 1, when: "Adept may take Caster at recruitment." },
        rules: ["Specialist.", "May take Caster at recruitment. If Caster, knows 1 spell from your Domain list and may take the Cast action."],
      },
      {
        id: "acolyte",
        name: "Acolyte",
        role: "Rank",
        cap: 7,
        cost: 40,
        rules: ["Species baseline only.", "Does not start with Caster. May gain it in campaign via Keyword Advancement."],
      },
    ],
    feats: [
      { id: "blood-for-the-rite", name: "Blood for the Rite", rules: [`Once per battle, before this fighter makes a stat roll or casting roll, choose another friendly fighter within 12". That fighter suffers 1 Wound. Add +1 to the roll.`, "This Wound can reduce the chosen fighter to 0 Wounds and cause them to become Downed."] },
      { id: "magic-armor", name: "Magic Armor", rules: ["This fighter may equip Light Armor, Medium Armor, or Heavy Armor."] },
      { id: "chant", name: "Chant", rules: [`When 2 or more other friendly Cult fighters have their bases within 1" of this fighter, this fighter projects Fear as a Sphere of Influence with range 6".`, "When an enemy fighter activates while within this Sphere of Influence, they must pass a Sanity test for Fear with this fighter as the source."] },
      { id: "convoke", name: "Convoke", casterOnly: true, rules: [`Fighter must have Caster. When this fighter makes a casting roll and 1 or more other friendly Cult fighters with Caster are within 6", add +1 to the roll.`] },
    ],
  },
};

export const UNIVERSAL_FEATS = [
  { id: "line-breaker", name: "Line Breaker", rules: ["When this fighter's Melee action immediately follows Charge during the same activation, add 1 red die to this fighter's Strike Pool for that Melee attack."] },
  { id: "blacksmiths-arms", name: "Blacksmith's Arms", rules: ["This fighter may wield Two-Handed weapons in one hand.", "A Two-Handed weapon still uses 2 weapon slots."] },
  { id: "dodge", name: "Dodge", rules: ["When this fighter is the target of a Ranged attack, roll 2d6. On 10+, that attack has no effect against this fighter.", "Cast actions are not Ranged attacks."] },
  { id: "guard", name: "Guard", rules: [`Once per round, when a hostile Ranged attack or Cast action selects a friendly Leader, Elite, or Caster fighter within 3" of this fighter as its target, this fighter may Intercept.`, "Intercept: Move this fighter base to base with the targeted fighter, placed between that fighter and the attacking enemy along the straight line from the attacker's base to the targeted fighter's base. This fighter becomes the target instead.", "If more than one friendly fighter with Guard could Intercept, their controlling player chooses one."] },
  { id: "animal-handling", name: "Animal Handling", rules: ["This fighter may field one Companion purchased from Gear - Companions. Record the Companion on this fighter's roster entry."] },
];

export const DOMAIN_FEATS = [
  { id: "infiltrate", name: "Infiltrate", domains: ["Nature", "Blood", "Infernal"], rules: ["If this fighter would be set up during deployment, they may be held in reserve off the board instead.", `Immediately before the start of the first round, their controlling player may set them up anywhere on the battlefield where no enemy fighter has line of sight to them and they are not within 12" of any enemy fighter.`, "If both players have fighters with Infiltrate, alternate placing one fighter at a time, starting with the winner of a roll-off."] },
  { id: "acrobat", name: "Acrobat", domains: ["Mortal", "Nature", "Blood", "Infernal"], rules: [`When this fighter falls or lands from a Jump from a height of up to 12", roll one Sk check. On a pass, they take no Wounds from the fall. On a fail, resolve Falling as normal.`, `This fighter may perform a Diving Charge from a height of up to 6" above the target.`, "Diving Charge: Treat as Charge, but before moving roll one Sk check. Pass: resolve the Charge normally. Fail: the Charge fails and Falling resolves from the full height.", "This fighter may reroll a failed Diving Charge Sk check and must accept the second result."] },
  { id: "lightning-reflexes", name: "Lightning Reflexes", domains: ["Mortal", "Light"], rules: ["When this fighter is targeted by a Melee action that immediately follows the attacker's Charge during the same activation, they may make 1 free Melee attack against that attacker before either attack applies Wounds.", "Resolve both attacks through the full Attack Sequence. Then apply Wounds, Downed, Stunned, and Out of Action results from both attacks together."] },
  { id: "warded", name: "Warded", domains: ["Light", "Arcane"], rules: ["When this fighter is the target of a hostile spell that succeeded on its casting roll, they may roll one Wi check (d6 + Wi ≥ 8). On a pass, the spell has no effect against this fighter."] },
  { id: "heave", name: "Heave", domains: ["Nature", "Blood", "Infernal"], rules: ["While this fighter is Active and within engagement range of at least one enemy fighter, they may perform Hurl.", `Hurl costs 1 action. Choose one enemy fighter within engagement range, or one Downed or Stunned enemy fighter within 1". The target makes a Sk check (d6 + Sk ≥ 8).`, `On fail, move the target d3" in a direction you choose. Active and Downed targets become Stunned after moving. Stunned targets remain Stunned.`, "If the move stops because their base contacts terrain or an Active fighter's base, they suffer 1 hit at 2 Mt / 1 Sk. If another fighter's base is involved, that fighter also suffers the same hit and becomes Stunned.", "If this fighter performs Hurl during an activation, they cannot make a Melee attack during that activation."] },
  { id: "hard-to-kill", name: "Hard to Kill", domains: ["Necromancy", "Blood", "Light"], rules: ["When a Help roll or Recover roll is made for this fighter, add +1 to the roll."] },
  { id: "sure-footed", name: "Sure Footed", domains: ["Nature"], rules: ["When this fighter uses Scramble, they move at full M instead of half M."] },
  { id: "camouflage", name: "Camouflage", domains: ["Nature"], rules: [`While Hidden, this fighter cannot be targeted by Ranged or Cast actions beyond 3".`] },
  { id: "absolute-faith", name: "Absolute Faith", domains: ["Light"], rules: ["This fighter may reroll failed Fear, Panic, and Insanity tests. They must accept the second result."] },
  { id: "unstoppable-faith", name: "Unstoppable Faith", domains: ["Light"], rules: [`When this fighter performs Charge, they may move up to M + 1" instead of M.`, "If this fighter ends a Charge within engagement range of an enemy and moved less than the full allowed distance in a straight line toward that enemy, push that enemy the remaining distance along the charge path.", "When this fighter's Melee action immediately follows that Charge, if the pushed enemy stopped because their base contacted terrain, add 2 red dice to this fighter's Strike Pool for that Melee attack."] },
  { id: "resilient", name: "Resilient", domains: ["Necromancy"], rules: ["When an enemy fighter makes a Melee attack against this fighter, that attack's Strike Pool loses 1 red die, minimum 0."] },
  { id: "bind-the-dead", name: "Bind the Dead", domains: ["Necromancy"], casterOnly: true, rules: ["Fighter must have Caster.", "When this fighter successfully casts Summon Skeleton, the Skeleton does not crumble at the end of its activation. It remains under your control for the rest of the battle. Remove it from the battle when it goes Out of Action.", "At the end of the battle, remove any Skeleton kept this way. It is not part of your retinue.", "Does not apply to roster Skeleton fighters recruited through Bone-priests or other rules."] },
  { id: "bone-ward", name: "Bone Ward", domains: ["Necromancy"], rules: ["Once per battle, when this fighter suffers 1 or more Wounds from an Attack Sequence, reduce the Wounds suffered by 1, minimum 0."] },
  { id: "deaths-chill", name: "Death's Chill", domains: ["Necromancy"], rules: ["Enemy fighters cannot Retreat while within engagement range of this fighter."] },
  { id: "daemonic-wings", name: "Daemonic Wings", domains: ["Infernal"], rules: ["Once per battle, at the start of this fighter's activation, they may suffer 1 Wound to gain Fly until the end of that activation.", "Fly: Ignore vertical distance for Move, Charge, and Jump. This fighter keeps their normal M for those actions."] },
  { id: "devils-pact", name: "Devil's Pact", domains: ["Infernal"], rules: ["During this fighter's activation, they may spend both actions to regain 1 Wound, cannot exceed starting W.", "After the battle, if this fighter used Devil's Pact one or more times, roll 2d6 and subtract 1 for each time they used Devil's Pact this battle. Resolve the result on the Doom Table.", "If this fighter was not Out of Action when the battle ended and the modified roll is 2 or 12, roll 2d6 again, apply the same modifier, and resolve on the Doom Table. They must accept the second result."] },
  { id: "thrill-of-agony", name: "Thrill of Agony", domains: ["Blood"], rules: ["When this fighter suffers 1 or more Wounds from an Attack Sequence, add 1 red die to their next Melee attack this activation."] },
  { id: "gunslinger", name: "Gunslinger", domains: ["Mortal"], rules: ["If this fighter is equipped with 2 Pistols, in a Brace of Pistols or across 2 weapon slots, they may fire both as one Ranged action.", "Resolve each Pistol in order with its own Primer Roll and Attack Sequence. If they do, they cannot take another Ranged action during this activation."] },
  { id: "deadeye", name: "Deadeye", domains: ["Mortal"], rules: ["When this fighter uses Aim, their next Ranged attack with a firearm this activation adds 1 die of that firearm's dominant color to the Strike Pool.", "The dominant color is whichever is higher on the firearm's profile: Mt = red, Sk = blue. If tied, choose red or blue."] },
  { id: "null", name: "Null", domains: ["Mortal"], rules: [`Enemy Casters cannot perform the Cast action while within 6" of this fighter.`] },
  { id: "conduit", name: "Conduit", domains: ["Arcane"], rules: ["When a friendly Caster makes a Cast action, that Caster may measure spell range and line of sight from this fighter's base instead of their own.", "This fighter must be Active and not Downed or Stunned. The Caster still makes the casting roll using their Wi and resolves Mishaps as normal. Once per round.", "If more than one friendly fighter with Conduit could be used, the Caster's controlling player chooses one."] },
  { id: "helping-hand", name: "Helping Hand", domains: ["Arcane"], rules: [`Once per round, this fighter may move a Downed or Stunned friendly fighter within 12" up to 6" toward this fighter.`] },
  { id: "second-sight", name: "Second Sight", domains: ["Arcane"], rules: ["During Survival Rolls, if this fighter is a surviving fighter, when your retinue rolls 2d6 for the Survival Roll, you may reroll 2d6 once and choose which result to use.", "Once per Survival Roll. If more than one friendly fighter has Second Sight, you may still reroll only once."] },
  { id: "steady-weave", name: "Steady Weave", domains: ["Arcane"], casterOnly: true, rules: ["Fighter must have Caster.", "When this fighter makes a casting roll that fails to meet the spell's casting difficulty, reroll the Casting Roll once. Must accept the second result.", "If the first roll was Mishap, resolve it as normal. Do not reroll."] },
];

export const SPELLS = {
  Light: [
    { id: "radiant-strike", name: "Radiant Strike", difficulty: "11+", mt: "4", sk: "3", range: `12"`, effect: "Ranged attack; +1 Mt vs Undead and Daemons", mishap: "Caster takes the damage" },
    { id: "holy-light", name: "Holy Light", difficulty: "11+", mt: "-", sk: "-", range: `12" from caster`, effect: `All fighters within 12" lose cover and Hidden condition`, mishap: "TBD" },
    { id: "heal", name: "Heal", difficulty: "10+", mt: "-", sk: "-", range: `1"`, effect: "Restore 1 Wound + improve Wound state by one step (Stunned -> Downed, Downed -> Active)", mishap: "Deal 1 Wound to target instead" },
    { id: "purge-the-faithless", name: "Purge the Faithless", difficulty: "11+", mt: "5", sk: "2", range: `3" blast from caster`, effect: "Hits all fighters in radius", mishap: "Caster takes the damage" },
    { id: "shield-of-faith", name: "Shield of Faith", difficulty: "11+", mt: "-", sk: "-", range: `12"`, effect: "Target gains +2 red defense dice and projects Fear. Lasts until the start of the caster's next activation", mishap: "TBD" },
    { id: "horrors-relived", name: "Horrors Relived", difficulty: "12+", mt: "Target's Sa", sk: "-", range: `12"`, effect: "Ranged attack; Strike Pool Mt equals the target's Sa stat", mishap: "Caster takes the damage using target's Sa as Mt" },
    { id: "unwavering-resolve", name: "Unwavering Resolve", difficulty: "10+", mt: "-", sk: "-", range: `8" from caster`, effect: `All friendly fighters within 8" become immune to Fear, Panic, and Insanity until the start of the caster's next activation`, mishap: "TBD" },
  ],
  Arcane: [
    { id: "arcane-bolt", name: "Arcane Bolt", difficulty: "11+", mt: "-", sk: "5", range: `20"`, effect: "Ranged attack; fast, high-finesse", mishap: "TBD" },
    { id: "arcane-shield", name: "Arcane Shield", difficulty: "11+", mt: "-", sk: "-", range: "Self", effect: "Caster is immune to all spells. At the start of the caster's next activation, roll 1d6; on 1-2 the shield disappears", mishap: "TBD" },
    { id: "fireball", name: "Fireball", difficulty: "TBD", mt: "TBD", sk: "TBD", range: `18"`, effect: `Choose a point within 18". All fighters within large blast template are hit. On normal fail, fireball scatters. On pass, blast centers on chosen point`, mishap: "Blast template centers on the caster" },
    { id: "telekinesis", name: "Telekinesis", difficulty: "TBD", mt: "-", sk: "-", range: `12"`, effect: `Move any fighter up to 6" directly toward or away from the caster. No check required by the target`, mishap: "TBD" },
    { id: "displacement", name: "Displacement", difficulty: "TBD", mt: "-", sk: "-", range: `12"`, effect: `Target friendly fighter instantly moves up to 6" in any direction. Ignores terrain, engagement, and intervening fighters. Cannot end inside terrain or another fighter's base`, mishap: "TBD" },
    { id: "hoarfrost", name: "Hoarfrost", difficulty: "TBD", mt: "-", sk: "-", range: `18"`, effect: `Choose a point within 18". Place a large blast template until the start of the caster's next activation. Affects friends and enemies. Movement ending in the zone triggers a Sk check and slide`, mishap: "Blast centers on the caster" },
    { id: "slow", name: "Slow", difficulty: "TBD", mt: "-", sk: "-", range: "TBD", effect: "Target enemy loses 1 action on their next activation", mishap: "TBD" },
  ],
  Infernal: [
    { id: "infernal-attack-tbd", name: "TBD attack", difficulty: "TBD", mt: "TBD", sk: "TBD", range: "TBD", effect: "Infernal spell entry is still TBD in the source rules", mishap: "TBD" },
    { id: "infernal-tbd-2", name: "TBD", difficulty: "TBD", mt: "TBD", sk: "TBD", range: "TBD", effect: "Infernal spell entry is still TBD in the source rules", mishap: "TBD" },
    { id: "infernal-tbd-3", name: "TBD", difficulty: "TBD", mt: "TBD", sk: "TBD", range: "TBD", effect: "Infernal spell entry is still TBD in the source rules", mishap: "TBD" },
    { id: "infernal-tbd-4", name: "TBD", difficulty: "TBD", mt: "TBD", sk: "TBD", range: "TBD", effect: "Infernal spell entry is still TBD in the source rules", mishap: "TBD" },
    { id: "infernal-tbd-5", name: "TBD", difficulty: "TBD", mt: "TBD", sk: "TBD", range: "TBD", effect: "Infernal spell entry is still TBD in the source rules", mishap: "TBD" },
    { id: "infernal-tbd-6", name: "TBD", difficulty: "TBD", mt: "TBD", sk: "TBD", range: "TBD", effect: "Infernal spell entry is still TBD in the source rules", mishap: "TBD" },
  ],
  Nature: [
    { id: "thorn-volley", name: "Thorn Volley", difficulty: "12+", mt: "4", sk: "4", range: `12"`, effect: "Ranged attack; template / shotgun-like", mishap: "TBD" },
    { id: "shadowmeld", name: "Shadowmeld", difficulty: "TBD", mt: "-", sk: "-", range: `12"`, effect: `Target friendly fighter gains Hidden and does not need to remain within 1" of terrain to stay Hidden. Hidden is still lost from combat actions, Charge, Climb, Jump, or moving within 6" of an enemy`, mishap: "Enemies add +1 to the roll to hit the target with ranged weapons and spells until the start of the caster's next activation" },
    { id: "venom", name: "Venom", difficulty: "TBD", mt: "-", sk: "-", range: "TBD", effect: "Target enemy must pass Mt check (d6 + Mt ≥ 8). Fail: Poisoned", mishap: "TBD" },
    { id: "feral-form", name: "Feral Form", difficulty: "TBD", mt: "-", sk: "-", range: "TBD", effect: `Target friendly fighter gains +2 Mt, +1" M, but cannot use ranged weapons or cast spells for the duration. Lasts until the start of the caster's next activation`, mishap: "TBD" },
    { id: "entangle", name: "Entangle", difficulty: "TBD", mt: "-", sk: "-", range: `12"`, effect: "Target enemy has M reduced to 0 and cannot Move, Charge, Climb, Scramble, Jump, or Retreat. Can still fight, shoot, and cast. Lasts until the start of the caster's next activation", mishap: "TBD" },
    { id: "summon-swarm", name: "Summon Swarm", difficulty: "TBD", mt: "-", sk: "-", range: `3"`, effect: `Place a Swarm within 3" of the caster. The Swarm activates immediately with 2 actions, then disappears at the end of its activation`, mishap: "The Swarm appears hostile; your opponent controls it for its single activation" },
    { id: "dread-chorus", name: "Dread Chorus", difficulty: "TBD", mt: "-", sk: "-", range: `8" from caster`, effect: `All enemy fighters within 8" must pass Sa test for Fear with the caster as the source`, mishap: "TBD" },
  ],
  Necromancy: [
    { id: "deathbolt", name: "Deathbolt", difficulty: "14+", mt: "-", sk: "6", range: `18"`, effect: "Ranged attack; all blue dice, ignores armor", mishap: "TBD" },
    { id: "summon-skeleton", name: "Summon Skeleton", difficulty: "10+", mt: "-", sk: "-", range: `3"`, effect: `Place a Skeleton within 3" of the caster. The Skeleton activates immediately with 2 actions, then crumbles to dust at the end of its activation`, mishap: "The Skeleton appears hostile; your opponent controls it for its single activation" },
    { id: "raise-dead", name: "Raise Dead", difficulty: "TBD", mt: "-", sk: "-", range: `3"`, effect: `Target a friendly fighter that went Out of Action this battle. Place them within 3" of the caster with 1 Wound, Undead, and Fearless. They activate immediately with 2 actions, then go Out of Action at the end of their activation`, mishap: "Your opponent places and controls the raised fighter instead" },
    { id: "cursed-ground", name: "Cursed Ground", difficulty: "TBD", mt: "2", sk: "2", range: `12"`, effect: `Choose a point within 12". Place a large blast template. All fighters in the zone suffer -1" M and take a 2 Mt / 2 Sk hit unless they pass a Sk check. Lasts until the start of the caster's next activation`, mishap: "Blast centers on the caster" },
    { id: "wither", name: "Wither", difficulty: "TBD", mt: "-", sk: "-", range: "TBD", effect: "Target enemy suffers Weakened until the start of the caster's next activation", mishap: "TBD" },
    { id: "bone-blast", name: "Bone Blast", difficulty: "TBD", mt: "1", sk: "4", range: "Blast from caster", effect: "Blast template centered on the caster. All fighters under the template except the caster take a 1 Mt / 4 Sk hit", mishap: "TBD" },
    { id: "bone-circle", name: "Bone Circle", difficulty: "TBD", mt: "1", sk: "3", range: `12"`, effect: `Choose a point within 12". Place a 3" blast template. Any fighter that starts in, ends in, or moves through it takes a 1 Mt / 3 Sk hit. Affects friends and enemies. Lasts until the start of the caster's next activation`, mishap: "Zone centers on the caster" },
  ],
  Blood: [
    { id: "leech", name: "Leech", difficulty: "TBD", mt: "TBD", sk: "TBD", range: "TBD", effect: "Ranged attack; if target takes at least 1 Wound, caster heals 1 Wound", mishap: "Caster takes the damage" },
    { id: "bleed", name: "Bleed", difficulty: "TBD", mt: "-", sk: "-", range: "TBD", effect: "Target must pass Wi check (d6 + Wi ≥ 8). Fail: Bleeding", mishap: "Caster gains Bleeding instead" },
    { id: "blood-frenzy", name: "Blood Frenzy", difficulty: "TBD", mt: "-", sk: "-", range: "TBD", effect: "Target friendly fighter gains +3 Mt and subtracts 1 from the roll to hit. Lasts until the start of the caster's next activation", mishap: "TBD" },
    { id: "predators-grace", name: "Predator's Grace", difficulty: "TBD", mt: "-", sk: "-", range: "TBD", effect: `Target friendly fighter gains +1" M and +1 Sk. Lasts until the start of the caster's next activation`, mishap: "TBD" },
    { id: "enthrall", name: "Enthrall", difficulty: "TBD", mt: "-", sk: "-", range: `8"`, effect: "Target enemy must pass Wi check (d6 + Wi ≥ 8) or immediately take one Move action in a direction chosen by the caster", mishap: "Friendly fighter, opponent's choice, takes the move instead" },
    { id: "feast-of-excess", name: "Feast of Excess", difficulty: "TBD", mt: "-", sk: "-", range: "TBD", effect: `Target friendly fighter gains +1 Mt, +1 Sk, +1" M. When effect ends, target becomes Stunned`, mishap: "TBD" },
    { id: "nightfall", name: "Nightfall", difficulty: "TBD", mt: "-", sk: "-", range: "TBD", effect: "Target friendly fighter with Vampire is engulfed in shadow. No ranged weapons or spells can target into or out of the bubble. Target adds +1 to the roll to hit with CC. Lasts until the start of the caster's next activation", mishap: "Bright light; enemies add +1 to the roll to hit the caster with ranged weapons, caster suffers -1 Mt until start of next activation" },
  ],
  Mortal: [],
};

export const EQUIPMENT = [
  { id: "dagger", name: "Dagger", kind: "weapon", group: "One-Handed melee", proficiency: "one-handed", cost: 10, slots: 1, alwaysAllowed: true, rules: ["Hands 1H. +Sk +1. Sword. Fast, finesse. Any fighter may equip a Dagger."] },
  { id: "sword", name: "Sword", kind: "weapon", group: "One-Handed melee", proficiency: "one-handed", cost: 25, slots: 1, rules: ["Hands 1H. +Mt +1, +Sk +1. Sword. Balanced baseline."] },
  { id: "hand-axe", name: "Hand Axe", kind: "weapon", group: "One-Handed melee", proficiency: "one-handed", cost: 20, slots: 1, rules: ["Hands 1H. +Mt +2. Axe. Baseline axe."] },
  { id: "mace", name: "Mace", kind: "weapon", group: "One-Handed melee", proficiency: "one-handed", cost: 20, slots: 1, rules: ["Hands 1H. +Mt +2. Hammer. Anti-plate; crits vs Heavy Armor only."] },
  { id: "spear", name: "Spear", kind: "weapon", group: "One-Handed melee", proficiency: "one-handed", cost: 25, slots: 1, rules: ["Hands 1H. +Mt +1, +Sk +1. Spear. Balanced reach."] },
  { id: "halberd", name: "Halberd", kind: "weapon", group: "Two-Handed melee", proficiency: "two-handed", cost: 45, slots: 2, rules: ["Hands 2H. +Mt +2, +Sk +1. Spear. Reach, versatile."] },
  { id: "great-sword", name: "Great Sword", kind: "weapon", group: "Two-Handed melee", proficiency: "two-handed", cost: 50, slots: 2, rules: ["Hands 2H. +Mt +2, +Sk +1. Sword. Heavy, powerful."] },
  { id: "war-axe", name: "War Axe", kind: "weapon", group: "Two-Handed melee", proficiency: "two-handed", cost: 45, slots: 2, rules: ["Hands 2H. +Mt +3. Axe. Heavy hitter."] },
  { id: "war-hammer", name: "War Hammer", kind: "weapon", group: "Two-Handed melee", proficiency: "two-handed", cost: 45, slots: 2, rules: ["Hands 2H. +Mt +3. Hammer. Anti-plate; crits vs Heavy Armor only."] },
  { id: "staff", name: "Staff", kind: "weapon", group: "Two-Handed melee", proficiency: "two-handed", cost: 20, slots: 2, rules: ["Hands 2H. +Mt +1, +Sk +1. Spear. Spell focus.", "Once per battle when this fighter makes a casting roll that fails to meet the spell's casting difficulty, reroll the Casting Roll once. Must accept the second result.", "If the first roll was Mishap, resolve it as normal. Do not reroll."] },
  { id: "shortbow", name: "Shortbow", kind: "weapon", group: "Archery", proficiency: "archery", cost: 40, slots: 2, rules: [`Hands 2H. Range 3"-18". +Sk +2. Fast, Sk-dominant.`] },
  { id: "longbow", name: "Longbow", kind: "weapon", group: "Archery", proficiency: "archery", cost: 50, slots: 2, rules: [`Hands 2H. Range 3"-24". +Sk +2. Longer range, stronger.`] },
  { id: "crossbow", name: "Crossbow", kind: "weapon", group: "Archery", proficiency: "archery", cost: 65, slots: 2, rules: [`Hands 2H. Range 3"-24". +Mt +2. Mt-dominant, mechanical.`] },
  { id: "heavy-crossbow", name: "Heavy Crossbow", kind: "weapon", group: "Archery", proficiency: "archery", cost: 90, slots: 2, rules: [`Hands 2H. Range 3"-30". +Mt +3. Slow, powerful.`] },
  { id: "sling", name: "Sling", kind: "weapon", group: "Thrown", proficiency: "thrown", cost: 20, slots: 1, rules: [`Hands 1H. Range 3"-12". Flat Strike Pool 2 Mt / 1 Sk; normal RC to hit.`] },
  { id: "throwing-stars", name: "Throwing Stars", kind: "weapon", group: "Thrown", proficiency: "thrown", cost: 10, slots: 1, rules: [`Hands 1H. Range 0"-8". +Sk +1. No minimum range, thrown; additive.`] },
  { id: "musket", name: "Musket", kind: "weapon", group: "Firearms", proficiency: "firearms", firearmTier: "basic", cost: 100, slots: 2, rules: [`Requires Mortal; forbids Caster. Hands 2H. Range 3"-24". Primer 9+. Strike Pool 5 Mt / 3 Sk.`] },
  { id: "blunderbuss", name: "Blunderbuss", kind: "weapon", group: "Firearms", proficiency: "firearms", firearmTier: "basic", cost: 115, slots: 2, rules: [`Requires Mortal; forbids Caster. Hands 2H. Range 0"-10". Primer 8+. Strike Pool 6 Mt.`] },
  { id: "pistol", name: "Pistol", kind: "weapon", group: "Firearms", proficiency: "firearms", firearmTier: "refined", cost: 90, slots: 1, rules: [`Requires Mortal and Hunters; forbids Caster. Hands 1H. Range 0"-12". Primer 9+. Strike Pool 5 Mt / 2 Sk.`] },
  { id: "long-rifle", name: "Long Rifle", kind: "weapon", group: "Firearms", proficiency: "firearms", firearmTier: "refined", cost: 125, slots: 2, rules: [`Requires Mortal and Hunters; forbids Caster. Hands 2H. Range 3"-30". Primer 10+. Strike Pool 6 Mt / 2 Sk.`] },
  { id: "brace-of-pistols", name: "Brace of Pistols", kind: "weapon", group: "Firearms", proficiency: "firearms", firearmTier: "refined", cost: 25, slots: 1, rules: ["Requires Mortal; forbids Caster. Holds 2 Pistols in 1 weapon slot. Cost here is for the brace item from the rules table."] },
  { id: "bomb", name: "Bomb", kind: "weapon", group: "Bombs", proficiency: "firearms", firearmTier: "basic", cost: 40, slots: 1, rules: [`Requires Mortal; forbids Caster. Hands 1H. Distance d6 + Mt. Primer 9+. Strike Pool 3 Mt / 2 Sk. 3" blast, Single Shot.`] },
  { id: "smoke-bomb", name: "Smoke Bomb", kind: "weapon", group: "Bombs", proficiency: "firearms", firearmTier: "basic", cost: 25, slots: 1, rules: [`Requires Mortal; forbids Caster. Hands 1H. Distance d6 + Mt. Primer 8+. 6" blast, Single Shot, Smoke.`] },
  { id: "buckler", name: "Buckler", kind: "armor", group: "Armor", armorRank: 1, cost: 10, slots: 0, rules: ["Light tier. 1 failed blue defense die -> 1 normal success."] },
  { id: "shield", name: "Shield", kind: "armor", group: "Armor", armorRank: 2, cost: 25, slots: 0, rules: ["Medium tier. 1 failed red defense die + 1 failed blue defense die -> normal successes."] },
  { id: "tower-shield", name: "Tower Shield", kind: "armor", group: "Armor", armorRank: 3, cost: 50, slots: 0, rules: ["Heavy tier. 2 failed red defense dice + 1 failed blue defense die -> normal successes."] },
  { id: "light-armor", name: "Light Armor", kind: "armor", group: "Armor", armorRank: 1, cost: 50, slots: 0, rules: ["Folk, Hunters, Knights; Cult with Magic Armor. Converts 2 failed red or blue defense dice into 1 normal success."] },
  { id: "medium-armor", name: "Medium Armor", kind: "armor", group: "Armor", armorRank: 2, cost: 115, slots: 0, rules: ["Hunters, Knights; Cult with Magic Armor. Converts 1 failed red defense die into 1 normal success."] },
  { id: "heavy-armor", name: "Heavy Armor", kind: "armor", group: "Armor", armorRank: 3, cost: 185, slots: 0, rules: ["Knights only; Cult with Magic Armor. Converts 1 failed red defense die into 1 normal success or 2 failed red defense dice into 1 critical success."] },
  { id: "relic", name: "Relic", kind: "sphere", group: "Sphere of Influence", cost: 75, slots: 2, rules: [`Friendly fighters within 6" gain +1 Sa. Passive. Relic or Instrument.`] },
  { id: "instrument", name: "Instrument", kind: "sphere", group: "Sphere of Influence", cost: 65, slots: 2, rules: [`Friendly fighters within 6" gain +1" M. Requires 1 action per turn to activate. Relic or Instrument.`] },
  { id: "rune-stones", name: "Rune-stones", kind: "special", group: "Runecasters", cost: 15, slots: 1, requiresTradition: "runecasters", rules: ["Fighters with the Runecasters keyword only. Once per battle after a fighter carrying Rune-stones makes a stat roll, roll to hit, defense roll, or casting roll, discard the Rune-stones to reroll one die from that roll. Must accept the second result. Remove after battle."] },
  { id: "silver", name: "Silver upgrade", kind: "upgrade", group: "Material upgrades", cost: 40, slots: 0, rules: ["Added to weapon cost. +1 to the roll to hit vs fighters with Undead or Werebeast. Record which weapon is upgraded."] },
  { id: "adders-kiss", name: "Adder's Kiss", kind: "alchemy", group: "Alchemy", cost: 25, slots: 0, rules: ["Poison. +1 Sk to the weapon's strike pool. One poison per weapon."] },
  { id: "blight-extract", name: "Blight Extract", kind: "alchemy", group: "Alchemy", cost: 40, slots: 0, rules: ["Poison. Unblocked hits inflict Poisoned. One poison per weapon."] },
  { id: "vitriol", name: "Vitriol", kind: "alchemy", group: "Alchemy", cost: 50, slots: 0, rules: ["Poison. Unblocked hits ignore 1 armor conversion. One poison per weapon."] },
  { id: "widows-tears", name: "Widow's Tears", kind: "alchemy", group: "Alchemy", cost: 75, slots: 0, rules: ["Poison. Unblocked hits inflict 2 Wounds instead of 1. One poison per weapon."] },
  { id: "silversbane", name: "Silversbane", kind: "alchemy", group: "Alchemy", cost: 65, slots: 0, rules: [`Poison. Unblocked hits inflict -1" M on fighters with Undead or Werebeast. One poison per weapon.`] },
  { id: "hound", name: "Hound", kind: "companion", group: "Companions", cost: 40, slots: 0, requiresFeat: "animal-handling", rules: [`Requires Animal Handling. CC 3, Mt 3, Sk 3, W 1, Tether 3".`] },
  { id: "hawk", name: "Hawk", kind: "companion", group: "Companions", cost: 50, slots: 0, requiresFeat: "animal-handling", rules: [`Requires Animal Handling. CC 2, RC 2, Mt 1, Sk 4, W 1, Tether 12".`] },
  { id: "cat", name: "Cat", kind: "companion", group: "Companions", cost: 35, slots: 0, requiresFeat: "animal-handling", rules: [`Requires Animal Handling. CC 2, Sk 4, W 1, Tether 6".`] },
  { id: "giant-rat", name: "Giant Rat", kind: "companion", group: "Companions", cost: 30, slots: 0, requiresFeat: "animal-handling", rules: [`Requires Animal Handling. CC 2, Mt 2, Sk 4, W 1, Tether 3".`] },
  { id: "rat-swarm", name: "Rat Swarm", kind: "companion", group: "Companions", cost: 45, slots: 0, requiresFeat: "animal-handling", rules: [`Requires Animal Handling. CC 3, Mt 2, Sk 5, W 1, Tether 3".`] },
];

export const ARMOR_RANK = {
  None: 0,
  "Light Armor": 1,
  "Medium Armor": 2,
  "Heavy Armor": 3,
};

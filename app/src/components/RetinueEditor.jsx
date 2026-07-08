import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ArrowLeft, ChevronRight, GripVertical, Pencil, Plus, Save, X } from "lucide-react";
import ShareMenu from "./ShareMenu.jsx";
import WeaponTable from "./WeaponTable.jsx";
import { useRegisterSidebar } from "../contexts/SideNavContext.jsx";
import { useRetinue } from "../hooks/useRetinue.js";
import { emptyRetinue } from "../lib/retinue.js";
import { getPlayModeFeats } from "../lib/retinue-sheet.js";
import {
  formatWeaponRules,
  getFighterWeapons,
  hasSkilledCraftsmanFeat,
  normalizeFeatId,
} from "../lib/fighter.js";
import {
  ANCESTRIES,
  ARCHETYPES,
  ARMOR_RANK,
  BOOSTABLE_STATS,
  canEquipFirearm,
  canTakeFirearmsFeat,
  DOMAIN_FEATS,
  EQUIPMENT,
  fighterHasCaster,
  fighterHasFirearms,
  hasKeyword,
  PROFICIENCIES,
  resolveFighterKeywords,
  SPELLS,
  STAT_KEYS,
  TRADITIONS,
  UNIVERSAL_FEATS,
} from "../data/noctvale.js";

const STARTING_CROWNS = 1000;
const ROSTER_FEAT_LIMIT = 1;

const EQUIPMENT_GROUPS = (() => {
  const groups = {};
  for (const item of EQUIPMENT) {
    if (!groups[item.group]) groups[item.group] = [];
    groups[item.group].push(item);
  }
  return groups;
})();

const SHIELD_ITEM_IDS = new Set(["buckler", "shield", "tower-shield"]);

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

const IDENTITY_FIELD_HEIGHT = "h-[3.75rem]";

function getById(list, id) {
  return list.find((item) => item.id === id);
}

function makeId() {
  return `${Date.now().toString(36)}-${Math.random().toString(16).slice(2)}`;
}

function formatStat(key, value) {
  if (key === "M") return `${value}"`;
  return value;
}

function formatCrowns(value) {
  if (value === 0) return "0c";
  return value > 0 ? `+${value}c` : `${value}c`;
}

function formatCrownsAmount(value) {
  return `${value}c`;
}

function getTradition(traditionId) {
  return TRADITIONS.find((tradition) => tradition.id === traditionId);
}

function getFighterType(archetype, fighter) {
  return archetype?.fighterTypes.find((type) => type.id === fighter.typeId);
}

function getDisplayTypeRules(type, domain) {
  if (!type?.rules?.length) return [];
  if (domain === "Mortal" && type.caster?.when?.includes("lacks Mortal")) {
    return [];
  }
  return type.rules;
}

function getRetinueWideRuleBlocks({ tradition, selectedSpecialChoice }) {
  const blocks = [];

  if (tradition?.rules?.length) {
    blocks.push({ key: "tradition", title: `${tradition.name} Tradition`, rules: tradition.rules });
  }
  if (selectedSpecialChoice?.rules?.length) {
    blocks.push({
      key: "choice",
      title: tradition?.choice ? `${selectedSpecialChoice.name} Beast-mark` : selectedSpecialChoice.name,
      rules: selectedSpecialChoice.rules,
    });
  }
  return blocks;
}

function RetinueWideRules({ tradition, selectedSpecialChoice }) {
  const blocks = getRetinueWideRuleBlocks({ tradition, selectedSpecialChoice });
  if (!blocks.length) return null;

  return (
    <div className="mt-4 space-y-3 border-t border-night-800 pt-4">
      {blocks.map((block) => (
        <RuleBlock key={block.key} title={block.title} rules={block.rules} />
      ))}
    </div>
  );
}

function getAncestry(ancestryId) {
  return ANCESTRIES.find((ancestry) => ancestry.id === ancestryId) ?? ANCESTRIES[0];
}

function formatAncestrySelection(ancestry) {
  return `${ancestry.name}: ${ancestry.description}`;
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

function getSpellLimit(fighter, type, domain) {
  if (!isCaster(fighter, type, domain)) return 0;
  return type.caster?.spells ?? 0;
}

function getBuiltInProficiencies(fighter, type) {
  const builtIns = [...(type?.builtInProficiencies ?? [])];
  if (type?.builtInChoice && fighter.builtInChoice === "archery") {
    builtIns.push("archery");
  }
  return builtIns;
}

function getAvailableProficiencies(archetype) {
  if (!archetype) return [];
  return [...archetype.proficiencies];
}

function isProficiencyId(id) {
  return PROFICIENCIES.some((proficiency) => proficiency.id === id);
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

function getSelectedProficiencies(fighter, type, domain, archetype, tradition) {
  const keywords = getFighterKeywords(fighter, archetype, tradition, domain, type);
  const fromFeats = (fighter.feats ?? []).filter(isProficiencyId);
  const legacy = fighter.proficiencies ?? [];
  return [...new Set([...getBuiltInProficiencies(fighter, type), ...fromFeats, ...legacy])];
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

function getGearSlots(fighter) {
  return Object.entries(fighter.equipment ?? {}).reduce((total, [itemId, quantity]) => {
    const item = getEquipment(itemId);
    return total + (item?.slots ?? 0) * quantity;
  }, 0);
}

function getSelectedEquipment(fighter) {
  return Object.entries(fighter.equipment ?? {})
    .filter(([, qty]) => qty > 0)
    .map(([itemId, quantity]) => ({ item: getEquipment(itemId), quantity }))
    .filter((entry) => entry.item)
    .sort((a, b) => EQUIPMENT.indexOf(a.item) - EQUIPMENT.indexOf(b.item));
}

function getOneHandedMeleeWeaponCount(fighter) {
  return getSelectedEquipment(fighter).reduce((total, { item, quantity }) => {
    if (item.kind === "weapon" && item.group === "One-Handed melee") return total + quantity;
    return total;
  }, 0);
}

function isRatExtraWeapon(item) {
  if (item?.kind !== "weapon") return false;
  if (item.group === "Firearms" || item.group === "Bombs") return false;
  return item.slots === 1 && (item.group === "One-Handed melee" || item.group === "Thrown");
}

function getRatExtraWeaponCount(fighter) {
  return getSelectedEquipment(fighter).reduce((total, { item, quantity }) => {
    if (isRatExtraWeapon(item)) return total + quantity;
    return total;
  }, 0);
}

function fighterHasShield(fighter) {
  return Object.entries(fighter.equipment ?? {}).some(([itemId, quantity]) => quantity > 0 && SHIELD_ITEM_IDS.has(itemId));
}

function isRatBeastman(tradition, selectedSpecialChoice) {
  return tradition?.id === "beastmen" && selectedSpecialChoice?.id === "rat";
}

function getWeaponSlotLimit(fighter, tradition, selectedSpecialChoice) {
  if (isRatBeastman(tradition, selectedSpecialChoice) && getRatExtraWeaponCount(fighter) > 0) return 4;
  return 3;
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

function getGearSlotsPillTone(slots, slotLimit = 3) {
  if (slots > slotLimit) return "rose";
  if (slots === slotLimit) return "amber";
  return "zinc";
}

function hasFeat(fighter, featId) {
  return (fighter.feats ?? []).some((id) => normalizeFeatId(id) === featId);
}

function getArmorCap(archetype, fighter) {
  if (!archetype) return 0;
  if (archetype.id === "cult") return hasFeat(fighter, "magic-armor") ? ARMOR_RANK["Heavy Armor"] : 0;
  return ARMOR_RANK[archetype.armorCap] ?? 0;
}


function getEquipmentBlockReason(item, archetype, fighter, type, tradition, domain) {
  if (!item || !archetype || !type || !tradition) return "Complete identity first.";

  const keywords = getFighterKeywords(fighter, archetype, tradition, domain, type);
  const selectedProficiencies = getSelectedProficiencies(fighter, type, domain, archetype, tradition);

  if (item.requiresTradition && item.requiresTradition !== tradition.id) return "Requires a matching Tradition.";
  if (item.requiresFeat && !hasFeat(fighter, item.requiresFeat)) return "Requires a matching feat.";
  if (item.requiresKeyword && !hasKeyword(keywords, item.requiresKeyword)) return `Requires ${item.requiresKeyword}.`;

  if (item.kind === "weapon") {
    if (item.alwaysAllowed) return "";
    if (item.proficiency === "firearms") {
      if (!fighterHasFirearms(fighter, type, keywords)) return "Requires the Firearms domain feat.";
      if (!canEquipFirearm(keywords)) return "Requires Mortal and forbids Caster.";
      return "";
    }
    if (!selectedProficiencies.includes(item.proficiency)) return `Requires ${getProficiencyName(item.proficiency)} proficiency.`;
    return "";
  }

  if (item.kind === "armor") {
    return item.armorRank <= getArmorCap(archetype, fighter) ? "" : "Armor cap blocks this item.";
  }

  if (item.kind === "companion") {
    return hasFeat(fighter, "animal-handling") ? "" : "Requires Animal Handling.";
  }

  return "";
}

function getSelectableDomainFeats(domain) {
  return DOMAIN_FEATS.filter((feat) => feat.domains.includes(domain));
}

function getFeatLimit(fighter, type) {
  if (fighter.featLimit != null) return fighter.featLimit;
  if (type?.featLimit != null) return type.featLimit;
  if (type?.role === "Leader" || type?.role === "Elite") return 2;
  return ROSTER_FEAT_LIMIT;
}

function setEquipmentQuantity(fighter, itemId, nextQuantity) {
  const equipment = { ...(fighter.equipment ?? {}) };
  if (nextQuantity <= 0) delete equipment[itemId];
  else equipment[itemId] = nextQuantity;

  let skilledCraftsman = fighter.skilledCraftsman ?? null;
  if (skilledCraftsman?.weaponId === itemId && nextQuantity <= 0) {
    skilledCraftsman = null;
  }

  return { ...fighter, equipment, skilledCraftsman };
}

function setSkilledCraftsmanUpgrade(fighter, weaponId, boost) {
  if (!hasSkilledCraftsmanFeat(fighter)) return fighter;
  if (!weaponId || !boost) return { ...fighter, skilledCraftsman: null };
  return { ...fighter, skilledCraftsman: { weaponId, boost } };
}

function createFighter(archetype, typeId, domain, existingCount) {
  const type = archetype.fighterTypes.find((entry) => entry.id === typeId);
  const builtInChoice = type?.builtInChoice?.options?.includes("archery") ? "archery" : "";
  return {
    id: makeId(),
    typeId,
    name: `${type.name} ${existingCount + 1}`,
    ancestryId: "steady",
    statBoosts: [],
    caster: type?.caster?.mode === "required",
    builtInChoice,
    feats: [],
    spells: [],
    equipment: {},
    skilledCraftsman: null,
    notes: "",
  };
}

function ensureLeaderFighter(archetype, domain, tradition, retinueChoices, fighters) {
  const roster = fighters ?? [];
  if (!archetype || !tradition || !domain) return roster;
  if (tradition.choice && !retinueChoices[tradition.choice.id]) return roster;

  const leaderType = archetype.fighterTypes.find((type) => type.role === "Leader");
  if (!leaderType) return roster;

  const hasLeader = roster.some((fighter) => getFighterType(archetype, fighter)?.role === "Leader");
  if (hasLeader) return roster;

  return [...roster, createFighter(archetype, leaderType.id, domain, 0)];
}

function RuleList({ rules, compact = false }) {
  if (!rules?.length) return null;
  return (
    <ul className={cx("space-y-1 break-words text-cream-100", compact ? "text-xs" : "text-sm")}>
      {rules.map((rule, index) => (
        <li key={`${rule}-${index}`} className="leading-relaxed">
          {rule}
        </li>
      ))}
    </ul>
  );
}

function Pill({ children, tone = "zinc" }) {
  const tones = {
    zinc: "border-night-700 bg-night-900 text-cream-300",
    amber: "border-accent-500/40 bg-accent-500/10 text-accent-200",
    cyan: "border-accent-500/40 bg-accent-500/10 text-accent-200",
    rose: "border-rose-500/40 bg-rose-500/10 text-rose-200",
    emerald: "border-emerald-500/40 bg-emerald-500/10 text-emerald-200",
  };
  return <span className={cx("inline-flex items-center rounded border px-2 py-0.5 text-xs", tones[tone])}>{children}</span>;
}

function OptionCard({ title, meta, rules, description, selected, disabled, onClick, children }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cx(
        "w-full min-w-0 rounded-lg border p-3 text-left transition",
        selected ? "border-accent-400 bg-accent-500/10 shadow-[0_0_0_1px_rgba(139,65,146,.35)]" : "border-night-800 bg-night-900/80 hover:border-cream-600 hover:bg-night-900",
        disabled && "cursor-not-allowed opacity-50 hover:border-night-800",
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <div className="text-sm font-semibold text-cream-100">{title}</div>
          {meta ? <div className="mt-1 text-xs text-cream-500">{meta}</div> : null}
        </div>
        {selected ? <Pill tone="amber">Selected</Pill> : null}
      </div>
      {description ? <p className="mt-3 text-xs leading-relaxed text-cream-100">{description}</p> : null}
      {!description && rules?.length ? (
        <div className="mt-3">
          <RuleList rules={rules} compact />
        </div>
      ) : null}
      {children ? <div className="mt-3">{children}</div> : null}
    </button>
  );
}

function EditButton({ label, onClick }) {
  return (
    <button
      type="button"
      aria-label={`Edit ${label}`}
      onClick={onClick}
      className="grid h-8 w-8 shrink-0 place-items-center rounded border border-night-700 bg-night-900 text-cream-300 hover:border-accent-400 hover:text-accent-200"
    >
      <Pencil className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}

function EmptySummary({ children = "Not selected" }) {
  return <div className="text-xs text-cream-500">{children}</div>;
}

function SelectionSummary({ title, meta, rules }) {
  return (
    <div className="min-w-0">
      <div className="text-sm font-semibold text-cream-100">{title}</div>
      {meta ? <div className="mt-0.5 text-xs text-cream-500">{meta}</div> : null}
      {rules?.length ? (
        <div className="mt-2">
          <RuleList rules={rules} compact />
        </div>
      ) : null}
    </div>
  );
}

function ConfirmModal({ ariaLabel, title, message, confirmLabel, onConfirm, onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-lg border border-night-700 bg-night-950 p-4 shadow-2xl shadow-black"
        onClick={(event) => event.stopPropagation()}
      >
        <h3 className="text-lg font-semibold text-cream-100">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-cream-300">{message}</p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded border border-night-700 bg-night-900 px-3 py-1.5 text-sm text-cream-300 hover:border-cream-500 hover:text-cream-100"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded border border-rose-500/40 bg-rose-500/10 px-3 py-1.5 text-sm text-rose-200 hover:border-rose-400 hover:bg-rose-500/20"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

function PickerModal({ ariaLabel, eyebrow, title, onClose, headerSummary, children }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      onClick={onClose}
    >
      <div
        className="flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-night-700 bg-night-950 shadow-2xl shadow-black"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="shrink-0 border-b border-night-800 bg-night-950 p-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              {eyebrow ? <div className="text-xs uppercase tracking-wider text-cream-500">{eyebrow}</div> : null}
              {title ? <h3 className="text-lg font-semibold text-cream-100">{title}</h3> : null}
            </div>
            <button
              type="button"
              aria-label="Close picker"
              onClick={onClose}
              className="grid h-8 w-8 shrink-0 place-items-center rounded border border-night-700 bg-night-900 text-cream-300 hover:border-cream-500"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          {headerSummary ? <div className="mt-3 flex flex-wrap items-center gap-2">{headerSummary}</div> : null}
        </div>
        <div className="min-h-0 overflow-y-auto p-3">{children}</div>
      </div>
    </div>
  );
}

function PickerField({
  wrapper = "section",
  panelTitle,
  eyebrow,
  title,
  actionLabel,
  hasSelection = false,
  statusPill = null,
  summary,
  footer = null,
  modalAriaLabel,
  modalEyebrow,
  modalTitle = "",
  modalHeaderSummary = null,
  children,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  const fieldButton = (
    <button
      type="button"
      onClick={open}
      className={cx(
        "w-full min-w-0 rounded-lg border border-night-700 bg-night-950 text-left hover:border-accent-400",
        wrapper === "field" ? cx(IDENTITY_FIELD_HEIGHT, "flex items-center px-3") : "p-3",
      )}
    >
      {wrapper === "field" ? (
        <div className="flex w-full items-center justify-between gap-2">
          <div className="min-w-0 flex-1">{summary ?? <EmptySummary />}</div>
          <div className="flex shrink-0 items-center gap-2">
            {statusPill}
            <Pencil className="h-4 w-4 shrink-0 text-cream-500" aria-hidden="true" />
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-sm font-semibold text-cream-100">{actionLabel}</div>
            {statusPill}
          </div>
          {summary ? <div className="mt-2">{summary}</div> : null}
        </>
      )}
    </button>
  );

  const modal = modalOpen ? (
    <PickerModal
      ariaLabel={modalAriaLabel}
      eyebrow={modalEyebrow}
      title={modalTitle}
      onClose={close}
      headerSummary={modalHeaderSummary}
    >
      {typeof children === "function" ? children(close) : children}
    </PickerModal>
  ) : null;

  if (wrapper === "panel") {
    return (
      <Panel title={panelTitle ?? title} onEdit={hasSelection ? open : undefined} aside={statusPill}>
        {hasSelection ? (
          summary
        ) : (
          <button
            type="button"
            onClick={open}
            className="w-full rounded-lg border border-dashed border-night-700 bg-night-950/50 p-3 text-left text-sm text-cream-400 hover:border-accent-400 hover:text-cream-200"
          >
            {actionLabel ?? "Select…"}
          </button>
        )}
        {footer}
        {modal}
      </Panel>
    );
  }

  const fieldBody = (
    <>
      {fieldButton}
      {footer}
      {modal}
    </>
  );

  if (wrapper === "field") {
    return (
      <div className="min-w-0">
        <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-cream-500">{title}</div>
        {fieldBody}
      </div>
    );
  }

  return (
    <section className="rounded-lg border border-night-800 bg-night-950/60 p-3">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          {eyebrow ? <div className="text-xs uppercase tracking-wider text-cream-500">{eyebrow}</div> : null}
          <h2 className="text-lg font-semibold text-cream-100">{title}</h2>
        </div>
        {hasSelection ? <EditButton label={title} onClick={open} /> : null}
      </div>
      {fieldBody}
    </section>
  );
}

function OptionGroup({ title, introRules, children }) {
  return (
    <div>
      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-cream-500">{title}</div>
      {introRules ? (
        <div className="mb-2 rounded border border-night-800 bg-night-950 p-2">
          <RuleList rules={introRules} compact />
        </div>
      ) : null}
      <div className="grid gap-2">{children}</div>
    </div>
  );
}

function FieldSummary({ title, meta, empty = "Not selected" }) {
  if (!title) return <div className="text-sm text-cream-500">{empty}</div>;
  return (
    <div>
      <div className="text-sm font-semibold text-cream-100">{title}</div>
      {meta ? <div className="mt-0.5 text-xs text-cream-500">{meta}</div> : null}
    </div>
  );
}

function RetinueNameField({ value, onChange, placeholder = "Untitled retinue", compact = false }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-label="Retinue name"
      className={
        compact
          ? "w-full rounded border border-night-700 bg-night-950 px-3 py-2 text-base font-semibold text-cream-100 outline-none placeholder:text-cream-500 focus:border-accent-400"
          : "min-w-[8rem] max-w-md bg-transparent text-xl font-semibold tracking-wide text-cream-100 outline-none placeholder:text-cream-500"
      }
    />
  );
}

function AddFighterButton({ onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex min-h-48 w-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-night-700 bg-night-900/50 p-8 text-cream-400 transition hover:border-accent-400 hover:text-accent-200 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Plus className="h-10 w-10" aria-hidden="true" />
      <span className="text-base font-medium">Add fighter</span>
    </button>
  );
}

function StatGrid({ stats }) {
  return (
    <div className="grid w-full grid-cols-8 border border-night-800">
      {STAT_KEYS.map((key) => (
        <div key={key} className="min-w-0 border-r border-night-800 text-center last:border-r-0">
          <div className="border-b border-night-800 px-0.5 py-0.5 text-[10px] uppercase text-cream-500">{key}</div>
          <div className="truncate px-0.5 py-1 text-xs font-semibold text-cream-100">{formatStat(key, stats[key])}</div>
        </div>
      ))}
    </div>
  );
}

function QuantityControl({ value, label, disabled, onDecrease, onIncrease }) {
  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        aria-label={`Decrease ${label}`}
        disabled={value <= 0}
        onClick={onDecrease}
        className="grid h-7 w-7 place-items-center rounded border border-night-700 bg-night-900 text-sm text-cream-300 disabled:cursor-not-allowed disabled:opacity-30"
      >
        -
      </button>
      <div className="grid h-7 min-w-7 place-items-center rounded border border-night-800 bg-night-950 px-2 text-xs text-cream-200">{value}</div>
      <button
        type="button"
        aria-label={`Increase ${label}`}
        disabled={disabled}
        onClick={onIncrease}
        className="grid h-7 w-7 place-items-center rounded border border-night-700 bg-night-900 text-sm text-cream-300 disabled:cursor-not-allowed disabled:opacity-30"
      >
        +
      </button>
    </div>
  );
}

function Warnings({ warnings }) {
  if (!warnings.length) return null;
  return (
    <div className="space-y-1 rounded border border-accent-500/30 bg-accent-500/10 p-2 text-xs text-accent-100">
      {warnings.map((warning) => (
        <div key={warning}>{warning}</div>
      ))}
    </div>
  );
}

export default function RetinueEditor({ retinueId, editing, onToggleEditing, onBackToLibrary }) {
  const { retinue, loading, patchRetinue, setFighters } = useRetinue(retinueId);
  const [addFighterOpen, setAddFighterOpen] = useState(false);

  useEffect(() => {
    if (!editing) {
      setAddFighterOpen(false);
    }
  }, [editing]);
  const data = retinue ?? emptyRetinue();
  const retinueName = data.name;
  const archetypeId = data.archetypeId;
  const traditionId = data.traditionId;
  const retinueChoices = data.retinueChoices;
  const fighters = data.fighters;

  const archetype = archetypeId ? ARCHETYPES[archetypeId] : null;
  const tradition = traditionId ? getTradition(traditionId) : null;
  const domain = tradition?.domain ?? "";
  const budget = getStartingBudget(tradition);
  const readyForRoster = Boolean(archetype && tradition && (!tradition.choice || retinueChoices[tradition.choice.id]));

  const availableTraditions = useMemo(() => {
    if (!archetypeId) return [];
    return TRADITIONS.filter((traditionOption) => traditionOption.allowed.includes(archetypeId));
  }, [archetypeId]);

  const fighterCounts = useMemo(() => {
    const counts = {};
    for (const fighter of fighters) counts[fighter.typeId] = (counts[fighter.typeId] ?? 0) + 1;
    return counts;
  }, [fighters]);

  const casterCount = useMemo(() => {
    if (!archetype || !domain) return 0;
    return fighters.filter((fighter) => isCaster(fighter, getFighterType(archetype, fighter), domain)).length;
  }, [archetype, domain, fighters]);

  const totalCost = useMemo(() => {
    if (!archetype) return 0;
    return fighters.reduce((total, fighter) => total + getFighterCost(fighter, getFighterType(archetype, fighter), tradition, domain), 0);
  }, [archetype, domain, fighters, tradition]);

  const leaderFighter = useMemo(() => {
    if (!archetype) return null;
    return fighters.find((fighter) => getFighterType(archetype, fighter)?.role === "Leader") ?? null;
  }, [archetype, fighters]);

  const otherFighters = useMemo(() => {
    if (!archetype) return [];
    return fighters.filter((fighter) => getFighterType(archetype, fighter)?.role !== "Leader");
  }, [archetype, fighters]);

  useEffect(() => {
    if (loading || !readyForRoster || !archetype || !tradition || !domain) return;

    setFighters((current) => {
      const next = ensureLeaderFighter(archetype, domain, tradition, retinueChoices, current);
      return next === current ? current : next;
    });
  }, [loading, readyForRoster, archetype, tradition, domain, retinueChoices, setFighters]);

  const retinueWarnings = useMemo(() => {
    const warnings = [];
    if (!archetype || !tradition) return warnings;
    const leaderCount = fighters.filter((fighter) => getFighterType(archetype, fighter)?.role === "Leader").length;
    if (fighters.length < archetype.count.min) warnings.push(`Retinue needs at least ${archetype.count.min} fighters.`);
    if (fighters.length > archetype.count.max) warnings.push(`Retinue exceeds ${archetype.count.max} fighters.`);
    if (leaderCount !== 1) warnings.push("Retinue must include exactly 1 Leader.");
    if (casterCount > archetype.casterMax) warnings.push(`Too many Casters. ${archetype.name} max is ${archetype.casterMax}.`);
    if (domain === "Mortal" && casterCount > 0) warnings.push("Fighters with Mortal cannot take Caster.");
    if (totalCost > budget) warnings.push(`Roster is ${totalCost - budget} Crowns over budget.`);
    for (const type of archetype.fighterTypes) {
      if ((fighterCounts[type.id] ?? 0) > type.cap) warnings.push(`${type.name} exceeds cap ${type.cap}.`);
      if (type.required && (fighterCounts[type.id] ?? 0) < type.required) warnings.push(`${type.name} is required.`);
    }
    return [...new Set(warnings)];
  }, [archetype, budget, casterCount, domain, fighterCounts, fighters, totalCost, tradition]);

  const updateFighter = useCallback((fighterId, updater) => {
    setFighters((current) =>
      current.map((fighter) => {
        if (fighter.id !== fighterId) return fighter;
        return typeof updater === "function" ? updater(fighter) : { ...fighter, ...updater };
      }),
    );
  }, [setFighters]);

  const removeFighter = useCallback((fighterId) => {
    setFighters((current) => current.filter((fighter) => fighter.id !== fighterId));
  }, [setFighters]);

  const reorderFighters = useCallback(
    (activeId, overId) => {
      setFighters((current) => {
        const leader = current.find((fighter) => getFighterType(archetype, fighter)?.role === "Leader");
        const others = current.filter((fighter) => getFighterType(archetype, fighter)?.role !== "Leader");
        const oldIndex = others.findIndex((fighter) => fighter.id === activeId);
        const newIndex = others.findIndex((fighter) => fighter.id === overId);
        if (oldIndex < 0 || newIndex < 0 || oldIndex === newIndex) return current;
        const nextOthers = arrayMove(others, oldIndex, newIndex);
        return leader ? [leader, ...nextOthers] : nextOthers;
      });
    },
    [archetype, setFighters],
  );

  const handleDragEnd = useCallback(
    (event) => {
      const { active, over } = event;
      if (!over || active.id === over.id) return;
      reorderFighters(active.id, over.id);
    },
    [reorderFighters],
  );

  const dragSensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );

  const toggleArrayValue = useCallback((fighter, key, value, max) => {
    const current = fighter[key] ?? [];
    const exists = current.includes(value);
    if (exists) return { ...fighter, [key]: current.filter((entry) => entry !== value) };
    if (max && current.length >= max) return fighter;
    return { ...fighter, [key]: [...current, value] };
  }, []);

  function selectArchetype(nextArchetypeId) {
    if (nextArchetypeId === archetypeId) return;
    patchRetinue({
      archetypeId: nextArchetypeId,
      traditionId: "",
      retinueChoices: {},
      fighters: [],
    });
  }

  function selectTradition(nextTraditionId) {
    if (nextTraditionId === traditionId) return;
    const nextTradition = getTradition(nextTraditionId);
    const nextDomain = nextTradition?.domain ?? "";
    patchRetinue({
      traditionId: nextTraditionId,
      retinueChoices: {},
      fighters: ensureLeaderFighter(archetype, nextDomain, nextTradition, {}, []),
    });
  }

  function selectSpecialChoice(choiceId, optionId) {
    const nextChoices = { ...retinueChoices, [choiceId]: optionId };
    patchRetinue({
      retinueChoices: nextChoices,
      fighters: ensureLeaderFighter(archetype, domain, tradition, nextChoices, fighters),
    });
  }

  function addFighter(typeId) {
    if (!archetype || !domain) return;
    const type = archetype.fighterTypes.find((entry) => entry.id === typeId);
    if (!type || type.role === "Leader") return;
    const countOfType = fighterCounts[typeId] ?? 0;
    setFighters((current) => [...current, createFighter(archetype, typeId, domain, countOfType)]);
    setAddFighterOpen(false);
  }

  const addableTypes = archetype
    ? archetype.fighterTypes
        .filter((type) => type.role !== "Leader")
        .map((type) => {
          const currentCount = fighterCounts[type.id] ?? 0;
          const retinueFull = fighters.length >= archetype.count.max;
          return {
            type,
            disabled: currentCount >= type.cap || !readyForRoster || retinueFull,
            reason: currentCount >= type.cap ? "Cap reached" : retinueFull ? "Retinue full" : "",
            currentCount,
          };
        })
    : [];

  const rosterFull = Boolean(archetype && fighters.length >= archetype.count.max);

  const selectedSpecialChoice = tradition?.choice
    ? tradition.choice.options.find((option) => option.id === retinueChoices[tradition.choice.id])
    : null;

  const sidebar = useMemo(() => {
    if (loading || !retinue) return null;

    return (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Back to retinue library"
            onClick={onBackToLibrary}
            className="grid h-9 w-9 shrink-0 place-items-center rounded border border-night-700 bg-night-900 text-cream-300 transition hover:border-cream-500 hover:text-cream-100"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={editing ? "Save retinue" : "Edit retinue"}
            aria-pressed={editing}
            onClick={onToggleEditing}
            className={cx(
              "grid h-9 w-9 shrink-0 place-items-center rounded border bg-night-900 transition",
              editing
                ? "border-accent-400 text-accent-200 hover:border-accent-300"
                : "border-night-700 text-cream-300 hover:border-accent-400 hover:text-accent-200",
            )}
          >
            {editing ? (
              <Save className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Pencil className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
          <ShareMenu retinue={data} disabled={!archetype || !tradition} />
        </div>

        <RetinueNameField
          compact
          value={retinueName}
          onChange={(event) => patchRetinue({ name: event.target.value })}
        />

        {readyForRoster ? (
          <div
            className={cx(
              "text-sm font-semibold",
              totalCost > budget ? "text-rose-300" : "text-cream-300",
            )}
          >
            Budget: {formatCrownsAmount(totalCost)} / {formatCrownsAmount(budget)}
          </div>
        ) : null}

        <div className="rounded-lg border border-night-800 bg-night-900/70 p-3">
          {editing ? (
            <div className="space-y-3">
              <PickerField
                wrapper="field"
                title="Archetype"
                actionLabel="Select archetype"
                hasSelection={Boolean(archetype)}
                summary={
                  <FieldSummary
                    title={archetype?.name}
                    meta={archetype?.identity}
                    empty="Choose an archetype"
                  />
                }
                modalAriaLabel="Select archetype"
                modalEyebrow="Archetype selection"
                modalTitle={retinueName || "Retinue"}
                modalHeaderSummary={archetype ? <Pill tone="amber">{archetype.name}</Pill> : null}
              >
                {(close) => (
                  <div className="space-y-2">
                    {Object.values(ARCHETYPES).map((option) => (
                      <OptionCard
                        key={option.id}
                        title={option.name}
                        meta={option.identity}
                        rules={[option.tableRole, `Target size: ${option.count.target}. Maximum: ${option.count.max}.`]}
                        selected={archetypeId === option.id}
                        onClick={() => {
                          selectArchetype(option.id);
                          close();
                        }}
                      />
                    ))}
                  </div>
                )}
              </PickerField>

              <PickerField
                wrapper="field"
                title="Tradition"
                actionLabel="Select tradition"
                hasSelection={Boolean(tradition)}
                summary={
                  <FieldSummary
                    title={tradition?.name}
                    meta={tradition ? `${tradition.domain} Domain` : undefined}
                    empty={archetype ? "Choose a tradition" : "Select archetype first"}
                  />
                }
                modalAriaLabel="Select tradition"
                modalEyebrow="Tradition selection"
                modalTitle={retinueName || "Retinue"}
                modalHeaderSummary={
                  tradition ? (
                    <>
                      <Pill tone="amber">{tradition.name}</Pill>
                      <Pill tone={tradition.domain === "Mortal" ? "emerald" : "zinc"}>{tradition.domain}</Pill>
                    </>
                  ) : null
                }
              >
                {(close) => (
                  <>
                    {!archetype ? (
                      <div className="text-sm text-cream-400">Choose an archetype first.</div>
                    ) : (
                      <>
                        <div className="mb-3 rounded border border-night-800 bg-night-900/70 p-2 text-xs text-cream-400">
                          Tradition sets Domain and grants one retinue-wide special rule.
                        </div>
                        <div className="space-y-2">
                          {availableTraditions.map((option) => (
                            <OptionCard
                              key={option.id}
                              title={option.name}
                              meta={`${option.domain} Domain`}
                              rules={option.rules}
                              selected={traditionId === option.id}
                              onClick={() => {
                                selectTradition(option.id);
                                close();
                              }}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </>
                )}
              </PickerField>

              {tradition?.choice ? (
                <PickerField
                  wrapper="field"
                  title={tradition.choice.label}
                  actionLabel={`Select ${tradition.choice.label.toLowerCase()}`}
                  hasSelection={Boolean(selectedSpecialChoice)}
                  summary={
                    <FieldSummary title={selectedSpecialChoice?.name} empty="Choose an option" />
                  }
                  modalAriaLabel={tradition.choice.label}
                  modalEyebrow={tradition.choice.label}
                  modalTitle={retinueName || "Retinue"}
                  modalHeaderSummary={
                    selectedSpecialChoice ? <Pill tone="amber">{selectedSpecialChoice.name}</Pill> : null
                  }
                >
                  {(close) => (
                    <div className="space-y-2">
                      {tradition.choice.options.map((option) => (
                        <OptionCard
                          key={option.id}
                          title={option.name}
                          rules={option.rules}
                          selected={retinueChoices[tradition.choice.id] === option.id}
                          onClick={() => {
                            selectSpecialChoice(tradition.choice.id, option.id);
                            close();
                          }}
                        />
                      ))}
                    </div>
                  )}
                </PickerField>
              ) : null}
            </div>
          ) : (
            <RetinueIdentitySummary
              archetype={archetype}
              tradition={tradition}
              traditionChoiceLabel={tradition?.choice?.label}
              selectedSpecialChoice={selectedSpecialChoice}
              stacked
            />
          )}

          {tradition ? (
            <RetinueWideRules tradition={tradition} selectedSpecialChoice={selectedSpecialChoice} />
          ) : null}

          {retinueWarnings.length ? (
            <div className="mt-4">
              <Warnings warnings={retinueWarnings} />
            </div>
          ) : null}
        </div>
      </div>
    );
  }, [
    archetype,
    archetypeId,
    availableTraditions,
    budget,
    data,
    editing,
    loading,
    onBackToLibrary,
    onToggleEditing,
    patchRetinue,
    readyForRoster,
    retinue,
    retinueChoices,
    retinueName,
    retinueWarnings,
    selectedSpecialChoice,
    totalCost,
    tradition,
    traditionId,
  ]);

  useRegisterSidebar(sidebar);

  if (loading || !retinue) {
    return (
      <div className="flex flex-1 items-center justify-center px-4 py-16 text-cream-400">
        Loading retinue…
      </div>
    );
  }

  return (
    <div className="mx-auto w-full min-w-0 max-w-5xl flex-1 space-y-4 overflow-x-hidden px-4 py-4">
      {!readyForRoster ? (
        <section className="rounded-lg border border-dashed border-night-700 bg-night-900/40 p-6 text-center text-sm text-cream-400">
          Choose an archetype and tradition in the sidebar to start building your roster.
        </section>
      ) : null}

      {readyForRoster ? (
        <div className="grid min-w-0 grid-cols-12 gap-4">
          {leaderFighter ? (
            <FighterCard
              key={leaderFighter.id}
              editing={editing}
              fighter={leaderFighter}
              archetype={archetype}
              tradition={tradition}
              selectedSpecialChoice={selectedSpecialChoice}
              domain={domain}
              retinueChoices={retinueChoices}
              casterCount={casterCount}
              updateFighter={updateFighter}
              removeFighter={removeFighter}
              toggleArrayValue={toggleArrayValue}
              setEquipmentQuantity={setEquipmentQuantity}
              canRemove={false}
            />
          ) : null}

          {editing ? (
            <DndContext sensors={dragSensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={otherFighters.map((fighter) => fighter.id)} strategy={rectSortingStrategy}>
                {otherFighters.map((fighter) => (
                  <SortableFighterCard
                    key={fighter.id}
                    fighter={fighter}
                    editing={editing}
                    archetype={archetype}
                    tradition={tradition}
                    selectedSpecialChoice={selectedSpecialChoice}
                    domain={domain}
                    retinueChoices={retinueChoices}
                    casterCount={casterCount}
                    updateFighter={updateFighter}
                    removeFighter={removeFighter}
                    toggleArrayValue={toggleArrayValue}
                    setEquipmentQuantity={setEquipmentQuantity}
                  />
                ))}
              </SortableContext>
            </DndContext>
          ) : (
            otherFighters.map((fighter) => (
              <FighterCard
                key={fighter.id}
                editing={editing}
                fighter={fighter}
                archetype={archetype}
                tradition={tradition}
                selectedSpecialChoice={selectedSpecialChoice}
                domain={domain}
                retinueChoices={retinueChoices}
                casterCount={casterCount}
                updateFighter={updateFighter}
                removeFighter={removeFighter}
                toggleArrayValue={toggleArrayValue}
                setEquipmentQuantity={setEquipmentQuantity}
              />
            ))
          )}

          {editing ? (
            <div className="col-span-12 flex min-h-48 xl:col-span-6">
              <AddFighterButton onClick={() => setAddFighterOpen(true)} disabled={rosterFull} />
            </div>
          ) : null}

          {editing && addFighterOpen ? (
            <PickerModal
              ariaLabel="Recruit fighters"
              eyebrow="Recruit fighters"
              title={retinueName || "Retinue"}
              onClose={() => setAddFighterOpen(false)}
              headerSummary={
                <>
                  <Pill>{fighters.length}/{archetype.count.max} fighters</Pill>
                  {domain !== "Mortal" ? <Pill tone="cyan">{casterCount}/{archetype.casterMax} casters</Pill> : null}
                </>
              }
            >
              <div className={cx("mb-3 grid gap-2 text-xs", domain === "Mortal" ? "grid-cols-1" : "grid-cols-2")}>
                <div className="rounded border border-night-800 bg-night-900 p-2">
                  <div className="text-cream-500">Fighters</div>
                  <div className="text-sm font-semibold">{fighters.length} / {archetype.count.max}</div>
                </div>
                {domain !== "Mortal" ? (
                  <div className="rounded border border-night-800 bg-night-900 p-2">
                    <div className="text-cream-500">Casters</div>
                    <div className="text-sm font-semibold">{casterCount} / {archetype.casterMax}</div>
                  </div>
                ) : null}
              </div>
              <div className="space-y-2">
                {addableTypes.map(({ type, disabled, reason, currentCount }) => (
                  <OptionCard
                    key={type.id}
                    title={`+ ${type.name}`}
                    meta={`${type.role} - ${type.cost} Crowns - ${currentCount}/${type.cap}`}
                    rules={getDisplayTypeRules(type, domain)}
                    disabled={disabled}
                    onClick={() => addFighter(type.id)}
                  >
                    {reason ? <div className="text-xs text-accent-200">{reason}</div> : null}
                  </OptionCard>
                ))}
              </div>
            </PickerModal>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function RetinueIdentitySummary({ archetype, tradition, traditionChoiceLabel, selectedSpecialChoice, stacked = false }) {
  return (
    <div className={stacked ? "space-y-3" : "grid grid-cols-12 gap-3"}>
      <div className={stacked ? undefined : "col-span-6"}>
        <SummaryRow label="Archetype">
          {archetype ? (
            <>
              {archetype.name}
              {archetype.identity ? <span className="mt-0.5 block text-xs text-cream-400">{archetype.identity}</span> : null}
            </>
          ) : (
            <span className="text-cream-500">Not selected</span>
          )}
        </SummaryRow>
      </div>
      <div className={stacked ? undefined : "col-span-6"}>
        <SummaryRow label="Tradition">
          {tradition ? (
            <>
              {tradition.name}
              <span className="mt-0.5 block text-xs text-cream-400">{tradition.domain} Domain</span>
            </>
          ) : (
            <span className="text-cream-500">Not selected</span>
          )}
        </SummaryRow>
      </div>
      {traditionChoiceLabel && selectedSpecialChoice ? (
        <div className={stacked ? undefined : "col-span-4"}>
          <SummaryRow label={traditionChoiceLabel}>{selectedSpecialChoice.name}</SummaryRow>
        </div>
      ) : null}
    </div>
  );
}

function SummaryRow({ label, children }) {
  if (!children) return null;
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-cream-500">{label}</div>
      <div className="mt-0.5 text-sm text-cream-100">{children}</div>
    </div>
  );
}

function FighterCardSummary({
  fighter,
  type,
  caster,
  stats,
  domainSpells,
  selectedFeatRules,
}) {
  const selectedEquipment = getSelectedEquipment(fighter);
  const spellNames = caster
    ? fighter.spells.map((spellId) => domainSpells.find((entry) => entry.id === spellId)?.name ?? spellId)
    : [];

  return (
    <div className="space-y-3">
      <StatGrid stats={stats} />

      {getFighterWeapons(fighter).length > 0 ? (
        <div>
          <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-cream-500">Weapons</div>
          <WeaponTable
            weapons={getSelectedEquipment(fighter).filter(({ item }) => item.kind === "weapon")}
            skilledCraftsman={fighter.skilledCraftsman}
            compact
          />
        </div>
      ) : null}

      <div className="space-y-2">
        {caster ? (
          <SummaryRow label="Caster">
            {spellNames.length ? spellNames.join(", ") : "Caster"}
          </SummaryRow>
        ) : null}

        {getPlayModeFeats(selectedFeatRules).map((feat) => (
          <RuleBlock key={feat.id} title={feat.name} rules={feat.rules} />
        ))}

        {selectedEquipment.some(({ item }) => item.kind !== "weapon") ? (
          <SummaryRow label="Equipment">
            <div className="flex flex-wrap gap-2">
              {selectedEquipment
                .filter(({ item }) => item.kind !== "weapon")
                .map(({ item, quantity }) => (
                  <span key={item.id} className="rounded border border-night-800 bg-night-950 px-2 py-0.5 text-xs">
                    {item.name} ×{quantity}
                  </span>
                ))}
            </div>
          </SummaryRow>
        ) : null}
      </div>
    </div>
  );
}

const SortableFighterCard = memo(function SortableFighterCard(props) {
  const { fighter } = props;
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: fighter.id });

  const sortableStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <FighterCard
      {...props}
      sortableRef={setNodeRef}
      sortableStyle={sortableStyle}
      dragHandleRef={setActivatorNodeRef}
      dragHandleProps={{ attributes, listeners }}
      isDragging={isDragging}
    />
  );
});

const FighterCard = memo(function FighterCard({
  fighter,
  editing,
  archetype,
  tradition,
  selectedSpecialChoice,
  domain,
  retinueChoices,
  casterCount,
  updateFighter,
  removeFighter,
  toggleArrayValue,
  setEquipmentQuantity,
  canRemove = true,
  sortableRef = null,
  sortableStyle = null,
  dragHandleRef = null,
  dragHandleProps = null,
  isDragging = false,
}) {
  const type = getFighterType(archetype, fighter);
  const ancestry = getAncestry(fighter.ancestryId);
  const keywords = useMemo(
    () => getFighterKeywords(fighter, archetype, tradition, domain, type),
    [fighter, archetype, tradition, domain, type],
  );
  const caster = isCaster(fighter, type, domain);
  const spellLimit = getSpellLimit(fighter, type, domain);
  const stats = getFighterStats(fighter, type, tradition, retinueChoices);
  const domainSpells = SPELLS[domain] ?? [];
  const domainFeats = getSelectableDomainFeats(domain);
  const proficiencyFeats = getProficiencyFeats(archetype);
  const featLimit = getFeatLimit(fighter, type);
  const cost = getFighterCost(fighter, type, tradition, domain);
  const slots = getGearSlots(fighter);
  const slotLimit = getWeaponSlotLimit(fighter, tradition, selectedSpecialChoice);
  const selectedFeatRules = useMemo(
    () =>
      [...proficiencyFeats, ...archetype.feats, ...UNIVERSAL_FEATS, ...domainFeats].filter((feat) =>
        fighter.feats.some((id) => normalizeFeatId(id) === feat.id),
      ),
    [proficiencyFeats, archetype.feats, domainFeats, fighter.feats],
  );
  const fighterWarnings = getFighterWarnings(fighter, type, archetype, tradition, selectedSpecialChoice, domain, spellLimit, slots, slotLimit, caster);
  const [collapsed, setCollapsed] = useState(false);
  const [removeConfirmOpen, setRemoveConfirmOpen] = useState(false);
  const hasMortal = hasKeyword(keywords, "Mortal");
  const showCasterOptions = !hasMortal && Boolean(type.caster);
  const canToggleCaster = type.caster?.mode === "optional" && !hasMortal;
  const casterToggleDisabled = canToggleCaster && !caster && casterCount >= archetype.casterMax;

  function setBoost(stat) {
    updateFighter(fighter.id, (current) => toggleArrayValue(current, "statBoosts", stat, type.boost?.count));
  }

  function toggleFeat(feat) {
    if (feat.casterOnly && !caster) return;
    updateFighter(fighter.id, (current) => {
      const hasFeatSelected = current.feats.some((id) => normalizeFeatId(id) === feat.id);
      if (hasFeatSelected) {
        let next = toggleArrayValue(current, "feats", feat.id, featLimit);
        if (feat.id === "skilled-craftsman") next = { ...next, skilledCraftsman: null };
        return next;
      }
      return toggleArrayValue(current, "feats", feat.id, featLimit);
    });
  }

  function updateSkilledCraftsman(weaponId, boost) {
    updateFighter(fighter.id, (current) => setSkilledCraftsmanUpgrade(current, weaponId, boost));
  }

  function toggleSpell(spellId) {
    updateFighter(fighter.id, (current) => toggleArrayValue(current, "spells", spellId, spellLimit));
  }

  function updateCaster(nextCaster) {
    updateFighter(fighter.id, (current) => ({
      ...current,
      caster: nextCaster,
      spells: nextCaster ? current.spells : [],
    }));
  }

  function updateEquipment(item, nextQuantity) {
    updateFighter(fighter.id, (current) => setEquipmentQuantity(current, item.id, nextQuantity));
  }

  useEffect(() => {
    if (!editing) {
      setCollapsed(false);
      setRemoveConfirmOpen(false);
    }
  }, [editing]);

  return (
    <article
      ref={sortableRef}
      style={sortableStyle}
      className={cx(
        "relative col-span-12 flex w-full min-w-0 flex-col overflow-hidden rounded-lg border border-night-800 bg-night-900/80 p-3 shadow-xl shadow-black/20 xl:col-span-6",
        editing && collapsed && "self-start",
        isDragging && "z-10 opacity-60",
      )}
    >
      <div className="flex shrink-0 items-start gap-2">
        {dragHandleProps ? (
          <button
            type="button"
            ref={dragHandleRef}
            aria-label={`Reorder ${fighter.name}`}
            className="mt-0.5 grid h-8 w-8 shrink-0 touch-none place-items-center rounded border border-night-700 bg-night-950 text-cream-500 hover:border-cream-500 hover:text-cream-100 active:cursor-grabbing cursor-grab"
            {...dragHandleProps.attributes}
            {...dragHandleProps.listeners}
          >
            <GripVertical className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : null}
        {editing ? (
          <button
            type="button"
            aria-label={collapsed ? `Expand ${fighter.name}` : `Collapse ${fighter.name}`}
            aria-expanded={!collapsed}
            onClick={() => setCollapsed((current) => !current)}
            className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded border border-night-700 bg-night-950 text-cream-300 hover:border-cream-500 hover:text-cream-100"
          >
            <ChevronRight
              className={cx("h-4 w-4 transition-transform duration-150", !collapsed && "rotate-90")}
              aria-hidden="true"
            />
          </button>
        ) : null}
        <div className="min-w-0 flex-1">
          {editing ? (
            <input
              value={fighter.name}
              onChange={(event) => updateFighter(fighter.id, { name: event.target.value })}
              className="w-full rounded border border-transparent bg-transparent text-lg font-semibold leading-7 text-cream-100 outline-none focus:border-night-700 focus:bg-night-950 focus:px-2"
              aria-label={`${type.name} name`}
            />
          ) : (
            <h3 className="truncate text-lg font-semibold leading-7 text-cream-100">{fighter.name}</h3>
          )}
          <div className="mt-1 flex items-start justify-between gap-2 text-xs">
            <div className="flex min-w-0 flex-wrap gap-2">
              <Pill>{type.name}</Pill>
              {keywords.map((keyword) => (
                <Pill key={keyword} tone={keyword === "Caster" ? "cyan" : keyword === "Mortal" ? "emerald" : "zinc"}>
                  {keyword}
                </Pill>
              ))}
              <Pill>{ancestry.name}</Pill>
              <Pill tone={getGearSlotsPillTone(slots, slotLimit)}>{slots}/{slotLimit} slots</Pill>
            </div>
            <Pill tone={cost > 0 ? "amber" : "zinc"} className="shrink-0">
              {formatCrownsAmount(cost)}
            </Pill>
          </div>
        </div>
        {editing && canRemove ? (
          <button
            type="button"
            aria-label={`Remove ${fighter.name}`}
            onClick={() => setRemoveConfirmOpen(true)}
            className="grid h-8 w-8 shrink-0 place-items-center rounded border border-rose-500/40 bg-night-950 text-rose-300 hover:border-rose-400 hover:text-rose-200"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : null}
      </div>

      {removeConfirmOpen ? (
        <ConfirmModal
          ariaLabel={`Confirm remove ${fighter.name}`}
          title="Remove fighter?"
          message={`Are you sure you want to remove ${fighter.name} from this retinue?`}
          confirmLabel="Remove"
          onClose={() => setRemoveConfirmOpen(false)}
          onConfirm={() => {
            removeFighter(fighter.id);
            setRemoveConfirmOpen(false);
          }}
        />
      ) : null}

      {editing && collapsed ? null : (
      <div className="mt-3 min-w-0 overflow-x-hidden overflow-y-auto">
        <Warnings warnings={fighterWarnings} />

        {editing ? (
          <>
            <div className="mt-3 min-w-0">
              <StatGrid stats={stats} />
            </div>

            {getFighterWeapons(fighter).length > 0 ? (
              <div className="mt-3">
                <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-cream-500">Weapons</div>
                <WeaponProfileList fighter={fighter} weaponsOnly />
              </div>
            ) : null}

            <div className="mt-4 grid min-w-0 gap-3">
        <PickerField
          wrapper="panel"
          panelTitle="Ancestry"
          actionLabel="Select ancestry"
          hasSelection={Boolean(ancestry)}
          summary={<p className="text-sm leading-relaxed text-cream-100">{formatAncestrySelection(ancestry)}</p>}
          modalAriaLabel="Select ancestry"
          modalEyebrow="Ancestry selection"
          modalTitle={fighter.name}
          modalHeaderSummary={ancestry ? <Pill tone="amber">{ancestry.name}</Pill> : null}
        >
          {(close) => (
            <div className="grid gap-2 sm:grid-cols-2">
              {ANCESTRIES.map((option) => (
                <OptionCard
                  key={option.id}
                  title={formatAncestrySelection(option)}
                  selected={fighter.ancestryId === option.id}
                  onClick={() => {
                    updateFighter(fighter.id, { ancestryId: option.id });
                    close();
                  }}
                />
              ))}
            </div>
          )}
        </PickerField>

        {type.boost ? (
          <PickerField
            wrapper="panel"
            panelTitle={type.boost.label}
            actionLabel="Select attribute boosts"
            hasSelection={fighter.statBoosts.length > 0}
            statusPill={
              <Pill tone={fighter.statBoosts.length === type.boost.count ? "amber" : "zinc"}>
                {fighter.statBoosts.length}/{type.boost.count}
              </Pill>
            }
            summary={
              fighter.statBoosts.length ? (
                <div className="flex flex-wrap gap-2">
                  {fighter.statBoosts.map((stat) => (
                    <div key={stat} className="rounded border border-night-800 bg-night-900 px-2 py-1 text-xs text-cream-100">
                      {stat}
                    </div>
                  ))}
                </div>
              ) : (
                <EmptySummary />
              )
            }
            modalAriaLabel="Select attribute boosts"
            modalEyebrow="Attribute boosts"
            modalTitle={fighter.name}
            modalHeaderSummary={
              <Pill tone={fighter.statBoosts.length === type.boost.count ? "amber" : "zinc"}>
                {fighter.statBoosts.length}/{type.boost.count}
              </Pill>
            }
          >
            {() => (
              <div className="flex flex-wrap gap-2">
                {type.boost.options.map((stat) => {
                  const selected = fighter.statBoosts.includes(stat);
                  return (
                    <button
                      key={stat}
                      type="button"
                      onClick={() => setBoost(stat)}
                      className={cx(
                        "h-10 min-w-12 rounded border px-4 text-sm",
                        selected ? "border-accent-400 bg-accent-500/10 text-accent-100" : "border-night-700 bg-night-950 text-cream-300 hover:border-cream-500",
                      )}
                    >
                      {stat}
                    </button>
                  );
                })}
              </div>
            )}
          </PickerField>
        ) : null}

        {type.builtInChoice ? (
          <PickerField
            wrapper="panel"
            panelTitle="Built-in Training"
            actionLabel="Select built-in training"
            hasSelection={Boolean(fighter.builtInChoice)}
            summary={
              fighter.builtInChoice ? (
                <SelectionSummary
                  title={getProficiencyName(fighter.builtInChoice)}
                  meta="Does not count against chosen feats."
                  rules={[`Weapons: ${getById(PROFICIENCIES, fighter.builtInChoice)?.weapons ?? ""}.`]}
                />
              ) : (
                <EmptySummary />
              )
            }
            modalAriaLabel="Select built-in training"
            modalEyebrow="Built-in training"
            modalTitle={fighter.name}
            modalHeaderSummary={
              fighter.builtInChoice ? <Pill tone="amber">{getProficiencyName(fighter.builtInChoice)}</Pill> : null
            }
          >
            {(close) => (
              <div className="grid gap-2 sm:grid-cols-2">
                {type.builtInChoice.options.map((choiceId) => {
                  const isFirearms = choiceId === "firearms";
                  const locked = isFirearms && !canTakeFirearmsFeat(keywords);
                  const title = isFirearms ? "Firearms" : getProficiencyName(choiceId);
                  const rules = isFirearms
                    ? ["Mortal domain feat. Musket, Blunderbuss, Pistol, Long Rifle, bombs."]
                    : [`Weapons: ${getById(PROFICIENCIES, choiceId)?.weapons ?? ""}.`];
                  return (
                    <OptionCard
                      key={choiceId}
                      title={title}
                      meta={locked ? "Requires Mortal; forbids Caster." : "Does not count against chosen feats."}
                      rules={rules}
                      selected={fighter.builtInChoice === choiceId}
                      disabled={locked}
                      onClick={() => {
                        updateFighter(fighter.id, { builtInChoice: choiceId });
                        close();
                      }}
                    />
                  );
                })}
              </div>
            )}
          </PickerField>
        ) : null}

        {showCasterOptions ? (
          <Panel title="Caster">
            <div className="rounded border border-night-800 bg-night-950 p-2 text-xs text-cream-400">
              {type.caster.when} {type.caster.spells ? `Spell choices: ${type.caster.spells}.` : ""}
            </div>
            {type.caster.mode === "required" ? (
              <div className="mt-2"><Pill tone="cyan">Required Caster</Pill></div>
            ) : (
              <label className="mt-2 flex items-center gap-2 text-sm text-cream-200">
                <input
                  type="checkbox"
                  checked={caster}
                  disabled={!canToggleCaster || casterToggleDisabled}
                  onChange={(event) => updateCaster(event.target.checked)}
                  className="h-4 w-4 rounded border-night-700 bg-night-950"
                />
                Take Caster
                {casterToggleDisabled ? <span className="text-xs text-accent-200">Caster cap reached.</span> : null}
              </label>
            )}
          </Panel>
        ) : null}

        {caster ? (
          <PickerField
            wrapper="panel"
            panelTitle={`Spells (${fighter.spells.length}/${spellLimit})`}
            actionLabel="Select spells"
            hasSelection={fighter.spells.length > 0}
            statusPill={
              <Pill tone={fighter.spells.length === spellLimit ? "amber" : "zinc"}>
                {fighter.spells.length}/{spellLimit}
              </Pill>
            }
            summary={
              fighter.spells.length ? (
                <div className="flex flex-wrap gap-2">
                  {fighter.spells.map((spellId) => {
                    const spell = domainSpells.find((entry) => entry.id === spellId);
                    return (
                      <div key={spellId} className="rounded border border-night-800 bg-night-900 px-2 py-1 text-xs text-cream-100">
                        {spell?.name ?? spellId}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <EmptySummary />
              )
            }
            modalAriaLabel="Select spells"
            modalEyebrow="Spell selection"
            modalTitle={fighter.name}
            modalHeaderSummary={
              <Pill tone={fighter.spells.length === spellLimit ? "amber" : "zinc"}>
                {fighter.spells.length}/{spellLimit}
              </Pill>
            }
          >
            {() =>
              domainSpells.length ? (
                <div className="grid gap-2">
                  {domainSpells.map((spell) => (
                    <button
                      key={spell.id}
                      type="button"
                      onClick={() => toggleSpell(spell.id)}
                      className={cx(
                        "rounded-lg border p-2 text-left text-xs",
                        fighter.spells.includes(spell.id) ? "border-accent-400 bg-accent-500/10" : "border-night-800 bg-night-950 hover:border-cream-600",
                      )}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-semibold text-cream-100">{spell.name}</span>
                        <span className="text-cream-500">{spell.difficulty} / {spell.range}</span>
                      </div>
                      <div className="mt-1 grid gap-1 text-cream-400 sm:grid-cols-3">
                        <span>Cast {spell.castingStat}</span>
                        <span>Hit {spell.hit}</span>
                        <span>Mt {spell.mt}</span>
                        <span>Sk {spell.sk}</span>
                        {spell.keywords?.length ? <span>Keywords {spell.keywords.join(", ")}</span> : null}
                        {spell.mishap ? <span>Mishap {spell.mishap}</span> : null}
                      </div>
                      <div className="mt-1 text-cream-100">{spell.effect}</div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-cream-400">No spells for this Domain.</div>
              )
            }
          </PickerField>
        ) : null}

        <FeatField
          archetype={archetype}
          caster={caster}
          domain={domain}
          domainFeats={domainFeats}
          featLimit={featLimit}
          fighter={fighter}
          keywords={keywords}
          proficiencyFeats={proficiencyFeats}
          selectedFeatRules={selectedFeatRules}
          tradition={tradition}
          type={type}
          onToggle={toggleFeat}
          onSkilledCraftsmanUpgrade={updateSkilledCraftsman}
        />

        <EquipmentField
          fighter={fighter}
          archetype={archetype}
          type={type}
          tradition={tradition}
          selectedSpecialChoice={selectedSpecialChoice}
          domain={domain}
          equipmentGroups={EQUIPMENT_GROUPS}
          slots={slots}
          slotLimit={slotLimit}
          onUpdateQuantity={updateEquipment}
          onSkilledCraftsmanUpgrade={updateSkilledCraftsman}
        />

        <Panel title="Rules on This Fighter">
          <div className="space-y-3">
            {getBuiltInProficiencies(fighter, type)
              .filter((id) => !fighter.feats.includes(id))
              .map((id) => {
                const proficiency = getById(PROFICIENCIES, id);
                return (
                  <RuleBlock
                    key={id}
                    title={`${proficiency.name} (built-in)`}
                    rules={[`You may equip any weapon in this proficiency your retinue is allowed to buy: ${proficiency.weapons}.`]}
                  />
                );
              })}
            {fighter.builtInChoice === "firearms" && canTakeFirearmsFeat(keywords) && !fighter.feats.includes("firearms") ? (
              <RuleBlock
                title="Firearms (built-in)"
                rules={DOMAIN_FEATS.find((feat) => feat.id === "firearms")?.rules ?? []}
              />
            ) : null}
            {selectedFeatRules.map((feat) => (
              <RuleBlock key={feat.id} title={feat.name} rules={feat.rules} />
            ))}
            {caster ? (
              <RuleBlock
                title="Caster"
                rules={[
                  `Knows ${spellLimit} spell${spellLimit === 1 ? "" : "s"} from the ${domain} list.`,
                  ...fighter.spells.map((spellId) => {
                    const spell = domainSpells.find((entry) => entry.id === spellId);
                    return spell ? `${spell.name}${spell.keywords?.length ? ` (${spell.keywords.join(", ")})` : ""}: ${spell.effect}` : spellId;
                  }),
                ]}
              />
            ) : null}
          </div>
        </Panel>
            </div>
          </>
        ) : (
          <div className="mt-3">
            <FighterCardSummary
              fighter={fighter}
              type={type}
              caster={caster}
              stats={stats}
              domainSpells={domainSpells}
              selectedFeatRules={selectedFeatRules}
            />
          </div>
        )}
      </div>
      )}
    </article>
  );
});

function Panel({ title, onEdit, aside = null, children }) {
  return (
    <section className="min-w-0 overflow-hidden rounded-lg border border-night-800 bg-night-950/50 p-3">
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-cream-100">{title}</h3>
        <div className="flex shrink-0 items-center gap-1">
          {aside}
          {onEdit ? <EditButton label={title} onClick={onEdit} /> : null}
        </div>
      </div>
      {children}
    </section>
  );
}

function SkilledCraftsmanBoostPicker({ weaponId, currentBoost, onSelect }) {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {["mt", "sk"].map((boost) => (
        <button
          key={boost}
          type="button"
          onClick={() => onSelect(weaponId, boost)}
          className={cx(
            "rounded border px-2 py-1 text-xs uppercase",
            currentBoost === boost
              ? "border-accent-400 bg-accent-500/10 text-accent-100"
              : "border-night-700 bg-night-900 text-cream-300 hover:border-cream-500",
          )}
        >
          +1 {boost === "mt" ? "Mt" : "Sk"}
        </button>
      ))}
    </div>
  );
}

function SkilledCraftsmanControls({ fighter, item, onUpgrade }) {
  if (!hasSkilledCraftsmanFeat(fighter) || item.kind !== "weapon") return null;
  if ((fighter.equipment?.[item.id] ?? 0) <= 0) return null;

  const active = fighter.skilledCraftsman?.weaponId === item.id;
  const currentBoost = active ? fighter.skilledCraftsman.boost : null;

  return (
    <div className="mt-2 rounded border border-accent-500/30 bg-accent-500/5 p-2">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-accent-200/80">Skilled Craftsman</div>
      <SkilledCraftsmanBoostPicker weaponId={item.id} currentBoost={currentBoost} onSelect={onUpgrade} />
    </div>
  );
}

function WeaponProfileList({ fighter, weaponsOnly = false }) {
  const selectedEquipment = getSelectedEquipment(fighter);
  const weapons = selectedEquipment.filter(({ item }) => item.kind === "weapon");
  const otherGear = selectedEquipment.filter(({ item }) => item.kind !== "weapon");
  const dualWieldingRules = getDualWieldingRules(fighter);

  if (weaponsOnly) {
    if (!weapons.length) return null;
    return (
      <div className="space-y-2">
        <WeaponTable weapons={weapons} skilledCraftsman={fighter.skilledCraftsman} compact />
        {dualWieldingRules.length ? <RuleBlock title="Dual wielding" rules={dualWieldingRules} /> : null}
      </div>
    );
  }

  if (!weapons.length && !otherGear.length) {
    return <div className="text-xs text-cream-500">No equipment selected</div>;
  }

  return (
    <div className="space-y-2">
      {weapons.length ? <WeaponTable weapons={weapons} skilledCraftsman={fighter.skilledCraftsman} compact /> : null}
      {dualWieldingRules.length ? <RuleBlock title="Dual wielding" rules={dualWieldingRules} /> : null}
      {otherGear.length ? (
        <div className="flex flex-wrap gap-2">
          {otherGear.map(({ item, quantity }) => (
            <div key={item.id} className="rounded border border-night-800 bg-night-900 px-2 py-1 text-xs text-cream-100">
              {item.name} ×{quantity}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function EquipmentSummary({ fighter }) {
  return <WeaponProfileList fighter={fighter} />;
}

function RuleBlock({ title, rules }) {
  if (!rules?.length) return null;
  return (
    <div className="min-w-0 overflow-hidden rounded border border-night-800 bg-night-950 p-2">
      <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-cream-500">{title}</div>
      <RuleList rules={rules} compact />
    </div>
  );
}

function EquipmentField({ fighter, archetype, type, tradition, selectedSpecialChoice, domain, equipmentGroups, slots, slotLimit, onUpdateQuantity, onSkilledCraftsmanUpgrade }) {
  const selectedEquipment = getSelectedEquipment(fighter);

  return (
    <PickerField
      wrapper="panel"
      panelTitle="Equipment"
      actionLabel="Select equipment"
      hasSelection={selectedEquipment.length > 0}
      statusPill={<Pill tone={getGearSlotsPillTone(slots, slotLimit)}>{slots}/{slotLimit} slots</Pill>}
      summary={<EquipmentSummary fighter={fighter} />}
      modalAriaLabel="Select equipment"
      modalEyebrow="Equipment selection"
      modalTitle={fighter.name}
      modalHeaderSummary={
        <>
          <Pill tone={getGearSlotsPillTone(slots, slotLimit)}>{slots}/{slotLimit} slots</Pill>
          {selectedEquipment.length ? (
            selectedEquipment.map(({ item, quantity }) => (
              <div key={item.id} className="rounded border border-night-800 bg-night-900 px-2 py-1 text-xs text-cream-100">
                {item.name} ×{quantity}
              </div>
            ))
          ) : (
            <EmptySummary />
          )}
        </>
      }
    >
      {() => (
        <EquipmentPickerContent
          fighter={fighter}
          archetype={archetype}
          type={type}
          tradition={tradition}
          selectedSpecialChoice={selectedSpecialChoice}
          domain={domain}
          equipmentGroups={EQUIPMENT_GROUPS}
          onUpdateQuantity={onUpdateQuantity}
          onSkilledCraftsmanUpgrade={onSkilledCraftsmanUpgrade}
        />
      )}
    </PickerField>
  );
}

function EquipmentPickerContent({ fighter, archetype, type, tradition, selectedSpecialChoice, domain, equipmentGroups, onUpdateQuantity, onSkilledCraftsmanUpgrade }) {
  const ratExtraWeapon = isRatBeastman(tradition, selectedSpecialChoice);
  return (
    <>
      <div className="mb-2 rounded border border-night-800 bg-night-950 p-2 text-xs text-cream-400">
        Each fighter has 3 weapon slots. Any fighter may equip a Dagger. Other weapons require matching proficiency. {ratExtraWeapon ? "Rat Beastmen may carry 1 additional one-handed weapon." : ""} Two one-handed melee weapons can dual-wield, max 15 Strike Pool dice, but cannot use a shield while dual-wielding.
      </div>
      <div className="space-y-3">
        {Object.entries(equipmentGroups).map(([group, items]) => {
          const visibleItems = items.filter((item) => {
            const reason = getEquipmentBlockReason(item, archetype, fighter, type, tradition, domain);
            return !reason || (fighter.equipment?.[item.id] ?? 0) > 0;
          });
          if (!visibleItems.length) return null;
          return (
            <OptionGroup key={group} title={group}>
              {visibleItems.map((item) => {
                const quantity = fighter.equipment?.[item.id] ?? 0;
                const reason = getEquipmentBlockReason(item, archetype, fighter, type, tradition, domain);
                const unitCost = getGearUnitCost(item, tradition);
                const capped = ["armor", "sphere", "special", "companion", "gear"].includes(item.kind) && quantity >= 1;
                return (
                  <div
                    key={item.id}
                    className={cx(
                      "rounded-lg border p-2 text-xs",
                      quantity ? "border-emerald-500/50 bg-emerald-500/10" : "border-night-800 bg-night-950",
                      reason && "opacity-70",
                    )}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <div className="font-semibold text-cream-100">{item.name}</div>
                        <div className="text-cream-500">{unitCost} Crowns - {item.slots} slots</div>
                      </div>
                      <QuantityControl
                        value={quantity}
                        label={item.name}
                        disabled={Boolean(reason) || capped}
                        onDecrease={() => onUpdateQuantity(item, quantity - 1)}
                        onIncrease={() => onUpdateQuantity(item, quantity + 1)}
                      />
                    </div>
                    <RuleList
                      rules={item.kind === "weapon" ? formatWeaponRules(item, fighter.skilledCraftsman) : item.rules}
                      compact
                    />
                    <SkilledCraftsmanControls fighter={fighter} item={item} onUpgrade={onSkilledCraftsmanUpgrade} />
                    {reason && quantity ? <div className="mt-1 text-accent-200">{reason}</div> : null}
                  </div>
                );
              })}
            </OptionGroup>
          );
        })}
      </div>
    </>
  );
}

function FeatField({ archetype, caster, domain, domainFeats, featLimit, fighter, keywords, proficiencyFeats, selectedFeatRules, tradition, type, onToggle, onSkilledCraftsmanUpgrade }) {
  const selectedNames = selectedFeatRules.map((feat) => feat.name);

  return (
    <PickerField
      wrapper="panel"
      panelTitle="Feats"
      actionLabel="Select feats"
      hasSelection={fighter.feats.length > 0}
      statusPill={
        <Pill tone={fighter.feats.length === featLimit ? "amber" : "zinc"}>
          {fighter.feats.length}/{featLimit}
        </Pill>
      }
      summary={
        <div className="grid gap-1 text-xs text-cream-400">
          {Array.from({ length: featLimit }).map((_, index) => (
            <div key={index} className="flex items-center justify-between rounded border border-night-800 bg-night-900 px-2 py-1">
              <span>Feat {index + 1}</span>
              <span className={selectedNames[index] ? "text-cream-100" : "text-cream-500"}>{selectedNames[index] ?? "Empty"}</span>
            </div>
          ))}
        </div>
      }
      footer={
        selectedFeatRules.length ? (
          <div className="mt-2 space-y-2">
            {selectedFeatRules.map((feat) => (
              <RuleBlock key={feat.id} title={feat.name} rules={feat.rules} />
            ))}
          </div>
        ) : null
      }
      modalAriaLabel="Select feats"
      modalEyebrow="Feat selection"
      modalTitle={fighter.name}
      modalHeaderSummary={
        <>
          <Pill tone={fighter.feats.length === featLimit ? "amber" : "zinc"}>{fighter.feats.length}/{featLimit}</Pill>
          {Array.from({ length: featLimit }).map((_, index) => (
            <div key={index} className="rounded border border-night-800 bg-night-900 px-2 py-1 text-xs">
              <span className="text-cream-500">Feat {index + 1}: </span>
              <span className={selectedNames[index] ? "text-cream-100" : "text-cream-500"}>{selectedNames[index] ?? "Empty"}</span>
            </div>
          ))}
        </>
      }
    >
      {() => (
        <FeatPickerContent
          archetype={archetype}
          caster={caster}
          domain={domain}
          domainFeats={domainFeats}
          featLimit={featLimit}
          fighter={fighter}
          keywords={keywords}
          proficiencyFeats={proficiencyFeats}
          tradition={tradition}
          type={type}
          onToggle={onToggle}
          onSkilledCraftsmanUpgrade={onSkilledCraftsmanUpgrade}
        />
      )}
    </PickerField>
  );
}

function SkilledCraftsmanWeaponPicker({ fighter, onUpgrade }) {
  const weapons = getFighterWeapons(fighter);
  if (!hasSkilledCraftsmanFeat(fighter) || !weapons.length || fighter.skilledCraftsman) return null;

  return (
    <div className="rounded border border-accent-500/30 bg-accent-500/10 p-3">
      <div className="text-xs font-semibold uppercase tracking-wider text-accent-200">Skilled Craftsman — choose a weapon</div>
      <div className="mt-2 space-y-2">
        {weapons.map(({ item, quantity }) => (
          <div key={item.id} className="rounded border border-night-800 bg-night-950 p-2">
            <div className="text-sm font-semibold text-cream-100">
              {item.name}
              {quantity > 1 ? ` ×${quantity}` : ""}
            </div>
            <SkilledCraftsmanBoostPicker weaponId={item.id} currentBoost={null} onSelect={onUpgrade} />
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatPickerContent({ archetype, caster, domain, domainFeats, featLimit, fighter, keywords, proficiencyFeats, tradition, type, onToggle, onSkilledCraftsmanUpgrade }) {
  const groups = [
    { title: "Proficiency Feats", feats: proficiencyFeats, introRules: archetype.proficiencyRules },
    { title: `${archetype.name} Feats`, feats: archetype.feats },
    { title: "Universal Feats", feats: UNIVERSAL_FEATS },
    { title: `${domain} Domain Feats`, feats: domainFeats },
  ].filter((group) => group.feats.length);

  const selectedCount = fighter.feats.length;
  const builtInProficiencies = getBuiltInProficiencies(fighter, type);

  const builtInFirearms = type?.builtInChoice?.options?.includes("firearms") && fighter.builtInChoice === "firearms";

  return (
    <div className="space-y-4">
      {groups.map((group) => (
        <OptionGroup key={group.title} title={group.title} introRules={group.introRules}>
          {group.feats.map((feat) => {
            const selected = fighter.feats.some((id) => normalizeFeatId(id) === feat.id);
            const builtIn = feat.isProficiency && builtInProficiencies.includes(feat.id);
            const firearmsLocked = feat.id === "firearms" && !canTakeFirearmsFeat(keywords);
            const firearmsBuiltIn = feat.id === "firearms" && builtInFirearms;
            const casterLocked = feat.casterOnly && !caster;
            const limitLocked = !selected && selectedCount >= featLimit;
            const locked = builtIn || firearmsBuiltIn || firearmsLocked || casterLocked || limitLocked;
            return (
              <button
                key={feat.id}
                type="button"
                disabled={locked}
                onClick={() => onToggle(feat)}
                className={cx(
                  "rounded-lg border p-3 text-left text-xs disabled:cursor-not-allowed disabled:opacity-45",
                  selected || builtIn ? "border-accent-400 bg-accent-500/10" : "border-night-800 bg-night-900 hover:border-cream-600",
                )}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-sm font-semibold text-cream-100">{feat.name}</div>
                  <div className="flex flex-wrap gap-1">
                    {selected ? <Pill tone="amber">Selected</Pill> : null}
                    {builtIn || firearmsBuiltIn ? <Pill tone="cyan">Built-in</Pill> : null}
                    {feat.casterOnly ? <Pill tone={casterLocked ? "rose" : "cyan"}>Requires Caster</Pill> : null}
                    {firearmsLocked ? <Pill tone="rose">Requires Mortal; forbids Caster</Pill> : null}
                    {limitLocked ? <Pill tone="rose">Limit reached</Pill> : null}
                  </div>
                </div>
                <div className="mt-2">
                  <RuleList rules={feat.rules} compact />
                </div>
              </button>
            );
          })}
        </OptionGroup>
      ))}
      <SkilledCraftsmanWeaponPicker fighter={fighter} onUpgrade={onSkilledCraftsmanUpgrade} />
    </div>
  );
}

function getFighterWarnings(fighter, type, archetype, tradition, selectedSpecialChoice, domain, spellLimit, slots, slotLimit, caster) {
  const warnings = [];
  if (!type) return warnings;
  if (type.boost && fighter.statBoosts.length !== type.boost.count) {
    warnings.push(`${type.name} needs ${type.boost.count} attribute boost${type.boost.count === 1 ? "" : "s"}.`);
  }
  if (type.builtInChoice && !fighter.builtInChoice) warnings.push(`${type.name} needs a built-in training choice.`);
  if (caster && fighter.spells.length !== spellLimit) warnings.push(`Choose ${spellLimit} spell${spellLimit === 1 ? "" : "s"}.`);
  if (!caster && fighter.spells.length) warnings.push("Non-Caster has spells selected.");
  if (fighter.feats.length > getFeatLimit(fighter, type)) warnings.push(`Too many feats selected. Limit is ${getFeatLimit(fighter, type)}.`);
  if (slots > slotLimit) warnings.push(`Weapon slots exceed ${slotLimit} by ${slots - slotLimit}.`);
  if (isRatBeastman(tradition, selectedSpecialChoice) && slots > 3 && getRatExtraWeaponCount(fighter) === 0) {
    warnings.push("Rat's extra weapon must be a one-handed weapon.");
  }
  if (getOneHandedMeleeWeaponCount(fighter) >= 2 && fighterHasShield(fighter)) {
    warnings.push("Shield carried: cannot use it while dual-wielding.");
  }
  if (hasSkilledCraftsmanFeat(fighter)) {
    const weapons = getFighterWeapons(fighter);
    if (weapons.length && !fighter.skilledCraftsman) {
      warnings.push("Skilled Craftsman needs a weapon upgrade (+1 Mt or +1 Sk).");
    }
    if (fighter.skilledCraftsman?.weaponId && !(fighter.equipment?.[fighter.skilledCraftsman.weaponId] > 0)) {
      warnings.push("Skilled Craftsman upgrade points to an unequipped weapon.");
    }
  }
  for (const feat of [...getProficiencyFeats(archetype), ...archetype.feats, ...UNIVERSAL_FEATS, ...getSelectableDomainFeats(domain)]) {
    if (fighter.feats.some((id) => normalizeFeatId(id) === feat.id) && feat.casterOnly && !caster) {
      warnings.push(`${feat.name} requires Caster.`);
    }
  }
  for (const [itemId, quantity] of Object.entries(fighter.equipment ?? {})) {
    if (quantity <= 0) continue;
    const item = getEquipment(itemId);
    const reason = getEquipmentBlockReason(item, archetype, fighter, type, tradition, domain);
    if (reason) warnings.push(`${item.name}: ${reason}`);
  }
  return [...new Set(warnings)];
}

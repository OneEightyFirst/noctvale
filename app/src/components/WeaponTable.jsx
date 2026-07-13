import React from "react";
import { parseWeaponProfile } from "../lib/fighter.js";
import RuleLink from "./RuleLink.jsx";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

const WEAPON_TYPE_ICONS = {
  sword: "/images/weapon-icon-sword.svg",
  axe: "/images/weapon-icon-axe.svg",
  spear: "/images/weapon-icon-spear.svg",
};

function WeaponTypeIcon({ type }) {
  const src = WEAPON_TYPE_ICONS[type];
  if (!src) return null;
  return (
    <img
      src={src}
      alt=""
      className="-mt-0.5 mr-1.5 inline-block h-[1.15em] w-auto align-middle"
    />
  );
}

function RuleCell({ specialRules }) {
  if (!specialRules.length) return <span className="text-cream-600">—</span>;
  return (
    <span className="flex flex-wrap gap-x-1">
      {specialRules.map((rule, index) => (
        <span key={`${rule.name || rule.text}-${index}`}>
          {rule.name ? (
            <RuleLink label={rule.name} body={rule.text} />
          ) : (
            rule.text
          )}
          {index < specialRules.length - 1 ? "," : ""}
        </span>
      ))}
    </span>
  );
}

export default function WeaponTable({ weapons, rows = null, skilledCraftsman = null, className, compact = false, linkRules = false }) {
  const displayRows = rows ?? buildWeaponRows(weapons, skilledCraftsman);
  if (!displayRows.length) return null;

  if (linkRules) {
    return (
      <div className={cx("min-w-0 overflow-x-auto", className)}>
        <table className={cx("w-full border-collapse text-left", compact ? "text-xs" : "text-sm")}>
          <thead>
            <tr className="border-b border-night-800 text-cream-500">
              <th className="px-1.5 py-1.5 font-semibold uppercase tracking-wide">Name</th>
              <th className="px-1.5 py-1.5 font-semibold uppercase tracking-wide">Kit</th>
              <th className="px-1.5 py-1.5 font-semibold uppercase tracking-wide">Rng</th>
              <th className="px-1.5 py-1.5 font-semibold uppercase tracking-wide">Mt</th>
              <th className="px-1.5 py-1.5 font-semibold uppercase tracking-wide">Sk</th>
              <th className="px-1.5 py-1.5 font-semibold uppercase tracking-wide">Rules</th>
            </tr>
          </thead>
          <tbody>
            {displayRows.map((row) => (
              <tr key={row.id ?? row.name} className="border-b border-night-800/80 align-top text-cream-100">
                <td className="px-1.5 py-1.5 font-semibold">
                  <WeaponTypeIcon type={row.type} />
                  {row.name}
                  {row.quantity > 1 ? ` ×${row.quantity}` : ""}
                </td>
                <td className="px-1.5 py-1.5">{row.slots}</td>
                <td className="px-1.5 py-1.5">{row.range ?? "—"}</td>
                <td className="px-1.5 py-1.5">{row.mt}</td>
                <td className="px-1.5 py-1.5">{row.sk}</td>
                <td className="px-1.5 py-1.5 text-cream-200">
                  <RuleCell specialRules={row.specialRules ?? []} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className={cx("min-w-0 overflow-x-auto", className)}>
      <table className={cx("w-full border-collapse text-left", compact ? "text-xs" : "text-sm")}>
        <thead>
          <tr className="border-b border-night-800 text-cream-500">
            <th className="px-1.5 py-1.5 font-semibold uppercase tracking-wide">Name</th>
            <th className="px-1.5 py-1.5 font-semibold uppercase tracking-wide">Kit</th>
            <th className="px-1.5 py-1.5 font-semibold uppercase tracking-wide">Rng</th>
            <th className="px-1.5 py-1.5 font-semibold uppercase tracking-wide">Mt</th>
            <th className="px-1.5 py-1.5 font-semibold uppercase tracking-wide">Sk</th>
          </tr>
        </thead>
        <tbody>
          {displayRows.map((row) => {
            const specialRules = row.specialRules ?? [];
            return (
              <React.Fragment key={row.id ?? row.name}>
                <tr className="border-b border-night-800/80 align-top text-cream-100">
                  <td className="px-1.5 py-1.5 font-semibold">
                    <WeaponTypeIcon type={row.type} />
                    {row.name}
                    {row.quantity > 1 ? ` ×${row.quantity}` : ""}
                  </td>
                  <td className="px-1.5 py-1.5">{row.slots}</td>
                  <td className="px-1.5 py-1.5">{row.range ?? "—"}</td>
                  <td className="px-1.5 py-1.5">{row.mt}</td>
                  <td className="px-1.5 py-1.5">{row.sk}</td>
                </tr>
                {specialRules.length ? (
                  <tr className="border-b border-night-800/80 align-top text-cream-200">
                    <td colSpan={5} className="px-1.5 pb-1.5 pt-0">
                      <div className="space-y-0.5">
                        {specialRules.map((rule, index) => (
                          <div key={`${row.id ?? row.name}-rule-${index}`}>
                            {rule.name ? (
                              <>
                                <span className="font-semibold text-cream-100">{rule.name}</span>
                                {rule.text ? `: ${rule.text}` : null}
                              </>
                            ) : (
                              rule.text
                            )}
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function buildWeaponRows(weapons, skilledCraftsman) {
  return weapons.map(({ item, quantity }) => ({
    id: item.id,
    quantity,
    ...parseWeaponProfile(item, skilledCraftsman),
  }));
}

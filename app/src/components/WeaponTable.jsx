import React from "react";
import { parseWeaponProfile } from "../lib/fighter.js";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function WeaponTable({ weapons, rows = null, skilledCraftsman = null, className, compact = false }) {
  const displayRows = rows ?? buildWeaponRows(weapons, skilledCraftsman);
  if (!displayRows.length) return null;

  return (
    <div className={cx("min-w-0 overflow-x-auto", className)}>
      <table className={cx("w-full border-collapse text-left", compact ? "text-xs" : "text-sm")}>
        <thead>
          <tr className="border-b border-night-800 text-cream-500">
            <th className="px-1.5 py-1.5 font-semibold uppercase tracking-wide">Name</th>
            <th className="px-1.5 py-1.5 font-semibold uppercase tracking-wide">Slots</th>
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
                    {row.name}
                    {row.quantity > 1 ? ` ×${row.quantity}` : ""}
                  </td>
                  <td className="px-1.5 py-1.5">{row.slots}</td>
                  <td className="px-1.5 py-1.5">{row.mt}</td>
                  <td className="px-1.5 py-1.5">{row.sk}</td>
                </tr>
                {specialRules.length ? (
                  <tr className="border-b border-night-800/80 align-top text-cream-200">
                    <td colSpan={4} className="px-1.5 pb-1.5 pt-0">
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

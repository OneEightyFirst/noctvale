import React from "react";
import { parseWeaponProfile } from "../lib/fighter.js";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function WeaponTable({ weapons, skilledCraftsman = null, className, compact = false }) {
  if (!weapons.length) return null;

  return (
    <div className={cx("min-w-0 overflow-x-auto", className)}>
      <table className={cx("w-full border-collapse text-left", compact ? "text-[10px]" : "text-xs")}>
        <thead>
          <tr className="border-b border-night-800 text-cream-500">
            <th className="px-1 py-1 font-semibold uppercase tracking-wide">Name</th>
            <th className="px-1 py-1 font-semibold uppercase tracking-wide">Slots</th>
            <th className="px-1 py-1 font-semibold uppercase tracking-wide">Mt</th>
            <th className="px-1 py-1 font-semibold uppercase tracking-wide">Sk</th>
          </tr>
        </thead>
        <tbody>
          {weapons.map(({ item, quantity }) => {
            const profile = parseWeaponProfile(item, skilledCraftsman);
            const specialRules = profile.specialRules;
            return (
              <React.Fragment key={item.id}>
                <tr className="border-b border-night-800/80 align-top text-cream-100">
                  <td className="px-1 py-1 font-semibold">
                    {profile.name}
                    {quantity > 1 ? ` ×${quantity}` : ""}
                  </td>
                  <td className="px-1 py-1">{profile.slots}</td>
                  <td className="px-1 py-1">{profile.mt}</td>
                  <td className="px-1 py-1">{profile.sk}</td>
                </tr>
                {specialRules.length ? (
                  <tr className="border-b border-night-800/80 align-top text-cream-200">
                    <td colSpan={4} className="px-1 pb-1 pt-0">
                      <div className="space-y-0.5">
                        {specialRules.map((rule, index) => (
                          <div key={`${item.id}-rule-${index}`}>
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
    quantity,
    ...parseWeaponProfile(item, skilledCraftsman),
  }));
}

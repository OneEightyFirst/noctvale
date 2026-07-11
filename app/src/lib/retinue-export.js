import { STAT_KEYS } from "../data/noctvale.js";
import { buildRetinueSheet, formatStat } from "./retinue-sheet.js";

function indentLines(lines, prefix = "  ") {
  return lines.map((line) => `${prefix}${line}`);
}

function joinSection(title, lines) {
  if (!lines.length) return [];
  return [title, ...indentLines(lines), ""];
}

function formatFighterPlainText(fighter) {
  const lines = [
    fighter.name,
    [fighter.typeName, ...fighter.keywords, fighter.ancestry].filter(Boolean).join(" · "),
    `${fighter.cost}c`,
    STAT_KEYS.map((key) => `${key} ${formatStat(key, fighter.stats[key])}`).join(" · "),
  ];

  if (fighter.beastMark) {
    lines.splice(2, 0, `${fighter.beastMark.name} Beast-mark`);
    if (fighter.beastMark.rules?.length) {
      lines.push(...indentLines(fighter.beastMark.rules));
    }
  }

  if (fighter.weapons.length) {
    lines.push("Weapons:");
    lines.push("  Name | Slots | Mt | Sk");
    for (const weapon of fighter.weapons) {
      const name = `${weapon.name}${weapon.quantity > 1 ? ` ×${weapon.quantity}` : ""}`;
      lines.push(`  ${name} | ${weapon.slots} | ${weapon.mt} | ${weapon.sk}`);
      for (const rule of weapon.specialRules) {
        if (rule.name && rule.text) {
          lines.push(`    ${rule.name}: ${rule.text}`);
        } else if (rule.name) {
          lines.push(`    ${rule.name}`);
        } else if (rule.text) {
          lines.push(`    ${rule.text}`);
        }
      }
    }
  }

  if (fighter.dualWieldingRules.length) {
    lines.push("Dual wielding:");
    lines.push(...indentLines(fighter.dualWieldingRules));
  }

  for (const feat of fighter.ruleFeats) {
    lines.push(feat.name);
    lines.push(...indentLines(feat.rules ?? []));
  }

  if (fighter.companion) {
    lines.push(`Companion — ${fighter.companion.name}`);
    lines.push(
      STAT_KEYS.map((key) => `${key} ${formatStat(key, fighter.companion.stats[key])}`).join(" · "),
    );
    lines.push(
      `Tether ${fighter.companion.tether}"${fighter.companion.keywords.length ? ` · ${fighter.companion.keywords.join(", ")}` : ""} · M, Wi, Sa use Handler`,
    );
  }

  if (fighter.caster) {
    if (fighter.spells.length) {
      lines.push("Spells:");
      for (const spell of fighter.spells) {
        lines.push(...indentLines(spell.lines));
      }
    } else {
      lines.push("Caster");
    }
  }

  if (fighter.equipment.length) {
    lines.push("Equipment:");
    for (const item of fighter.equipment) {
      lines.push(`  ${item.name} ×${item.quantity}`);
      if (item.rules.length) {
        lines.push(...indentLines(item.rules, "    "));
      }
    }
  }

  return lines;
}

export function formatRetinuePlainText(data) {
  const sheet = buildRetinueSheet(data);
  const lines = [sheet.name];

  if (sheet.archetype) {
    lines.push(
      [sheet.archetype.name, sheet.tradition?.name, sheet.tradition ? `${sheet.tradition.domain} Domain` : ""]
        .filter(Boolean)
        .join(" · "),
    );
    if (sheet.archetype.identity) {
      lines.push(sheet.archetype.identity);
    }
  }

  if (sheet.specialChoice?.name) {
    lines.push(`${sheet.specialChoice.label}: ${sheet.specialChoice.name}`);
  }

  if (sheet.tradition) {
    lines.push(`Budget: ${sheet.totalCost}c / ${sheet.budget}c`);
  }

  lines.push("");

  for (const block of sheet.retinueRules) {
    lines.push(...joinSection(block.title, block.rules));
  }

  for (const fighter of sheet.fighters) {
    lines.push("---");
    lines.push(...formatFighterPlainText(fighter));
    lines.push("");
  }

  return lines.join("\n").trim();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderRulesList(rules) {
  if (!rules?.length) return "";
  return `<ul>${rules.map((rule) => `<li>${escapeHtml(rule)}</li>`).join("")}</ul>`;
}

function renderSpecialRulesHtml(rules) {
  if (!rules?.length) return "—";
  return rules
    .map((rule) => {
      if (rule.name && rule.text) {
        return `<div><strong>${escapeHtml(rule.name)}</strong>: ${escapeHtml(rule.text)}</div>`;
      }
      if (rule.name) return `<div><strong>${escapeHtml(rule.name)}</strong></div>`;
      return `<div>${escapeHtml(rule.text)}</div>`;
    })
    .join("");
}

function renderStatGridHtml(stats) {
  return `<div class="stat-grid">${STAT_KEYS.map(
    (key) => `<div class="stat-cell"><div class="stat-label">${key}</div><div class="stat-value">${escapeHtml(formatStat(key, stats[key]))}</div></div>`,
  ).join("")}</div>`;
}

function renderWeaponTableHtml(weapons) {
  if (!weapons.length) return "";

  const rows = weapons
    .map((weapon) => {
      const name = `${escapeHtml(weapon.name)}${weapon.quantity > 1 ? ` ×${weapon.quantity}` : ""}`;
      const specialRow = weapon.specialRules.length
        ? `<tr class="weapon-special"><td colspan="4">${renderSpecialRulesHtml(weapon.specialRules)}</td></tr>`
        : "";

      return `<tr class="weapon-row">
        <td><strong>${name}</strong></td>
        <td>${escapeHtml(String(weapon.slots))}</td>
        <td>${escapeHtml(String(weapon.mt))}</td>
        <td>${escapeHtml(String(weapon.sk))}</td>
      </tr>${specialRow}`;
    })
    .join("");

  return `<table class="weapon-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Slots</th>
        <th>Mt</th>
        <th>Sk</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>`;
}

function renderFighterHtml(fighter) {
  const meta = [
    fighter.typeName,
    ...fighter.keywords,
    fighter.ancestry,
    fighter.beastMark ? `${fighter.beastMark.name} Beast-mark` : null,
    `${fighter.cost}c`,
  ]
    .filter(Boolean)
    .map(escapeHtml)
    .join(" · ");

  const sections = [
    `<section class="fighter">`,
    `<h2>${escapeHtml(fighter.name)}</h2>`,
    `<p class="meta">${meta}</p>`,
    renderStatGridHtml(fighter.stats),
  ];

  if (fighter.beastMark?.rules?.length) {
    sections.push(`<div class="block"><strong>${escapeHtml(fighter.beastMark.name)} Beast-mark</strong>${renderRulesList(fighter.beastMark.rules)}</div>`);
  }

  if (fighter.weapons.length) {
    sections.push("<h3>Weapons</h3>");
    sections.push(renderWeaponTableHtml(fighter.weapons));
  }

  if (fighter.dualWieldingRules.length) {
    sections.push(`<div class="block"><strong>Dual wield</strong>${renderRulesList(fighter.dualWieldingRules)}</div>`);
  }

  for (const feat of fighter.ruleFeats) {
    sections.push(`<div class="block"><strong>${escapeHtml(feat.name)}</strong>${renderRulesList(feat.rules)}</div>`);
  }

  if (fighter.companion) {
    sections.push(`<h3>Companion — ${escapeHtml(fighter.companion.name)}</h3>`);
    sections.push(renderStatGridHtml(fighter.companion.stats));
    sections.push(
      `<p class="detail">Tether ${fighter.companion.tether}"${fighter.companion.keywords.length ? ` · ${escapeHtml(fighter.companion.keywords.join(", "))}` : ""} · M, Wi, Sa use Handler</p>`,
    );
  }

  if (fighter.caster) {
    sections.push("<h3>Spells</h3>");
    if (fighter.spells.length) {
      sections.push(renderRulesList(fighter.spells.flatMap((spell) => spell.lines)));
    } else {
      sections.push('<p class="detail">Caster</p>');
    }
  }

  if (fighter.equipment.length) {
    sections.push("<h3>Gear</h3>");
    for (const item of fighter.equipment) {
      sections.push(
        `<div class="block"><strong>${escapeHtml(item.name)} ×${item.quantity}</strong>${renderRulesList(item.rules)}</div>`,
      );
    }
  }

  sections.push("</section>");
  return sections.join("");
}

export function buildRetinuePrintHtml(data) {
  const sheet = buildRetinueSheet(data);
  const identity = [
    sheet.archetype?.name,
    sheet.tradition?.name,
    sheet.tradition ? `${sheet.tradition.domain} Domain` : "",
  ]
    .filter(Boolean)
    .map(escapeHtml)
    .join(" · ");

  const retinueRules = sheet.retinueRules
    .map((block) => `<div class="block"><strong>${escapeHtml(block.title)}</strong>${renderRulesList(block.rules)}</div>`)
    .join("");

  const fighters = sheet.fighters.length
    ? `<div class="roster">${sheet.fighters.map(renderFighterHtml).join("")}</div>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(sheet.name)}</title>
  <style>
    :root {
      color-scheme: light;
    }
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0.4in;
      font: 10px/1.35 "Helvetica Neue", Arial, sans-serif;
      color: #111;
      background: #fff;
    }
    header {
      margin-bottom: 0.5rem;
      padding-bottom: 0.35rem;
      border-bottom: 1px solid #999;
    }
    h1, h2, h3 {
      margin: 0;
      line-height: 1.2;
    }
    h1 {
      font-size: 16px;
      font-weight: 700;
    }
    h2 {
      font-size: 11px;
      font-weight: 700;
      margin-bottom: 0.15rem;
    }
    h3 {
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: #444;
      margin-top: 0.35rem;
      margin-bottom: 0.1rem;
    }
    p {
      margin: 0.1rem 0;
    }
    .meta, .detail {
      color: #333;
    }
    .meta, .detail {
      font-size: 9px;
    }
    .stat-grid {
      display: grid;
      grid-template-columns: repeat(9, 1fr);
      width: 100%;
      margin: 0.25rem 0 0.35rem;
      border: 1px solid #333;
    }
    .stat-cell {
      min-width: 0;
      border-right: 1px solid #333;
      text-align: center;
    }
    .stat-cell:last-child {
      border-right: none;
    }
    .stat-label {
      font-size: 7px;
      font-weight: 700;
      text-transform: uppercase;
      border-bottom: 1px solid #333;
      padding: 0.12rem 0.05rem;
    }
    .stat-value {
      font-size: 9px;
      padding: 0.18rem 0.05rem;
    }
    .weapon-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 0.15rem;
      font-size: 9px;
    }
    .weapon-table th,
    .weapon-table td {
      border: 1px solid #bbb;
      padding: 0.15rem 0.2rem;
      vertical-align: top;
      text-align: left;
    }
    .weapon-table th {
      font-size: 8px;
      text-transform: uppercase;
      color: #444;
      background: #f5f5f5;
    }
    .weapon-special td {
      border-top: none;
      padding-top: 0;
      color: #222;
    }
    .budget {
      margin-top: 0.25rem;
      font-weight: 600;
      font-size: 10px;
    }
    .block {
      margin-top: 0.25rem;
    }
    ul {
      margin: 0.1rem 0 0;
      padding-left: 0.9rem;
    }
    li {
      margin: 0;
    }
    li + li {
      margin-top: 0.1rem;
    }
    .roster {
      column-count: 2;
      column-gap: 0.35rem;
    }
    .fighter {
      border: 1px solid #333;
      padding: 0.35rem 0.4rem;
      margin-bottom: 0.35rem;
      display: inline-block;
      width: 100%;
      break-inside: avoid;
      page-break-inside: avoid;
      -webkit-column-break-inside: avoid;
    }
    @media print {
      body {
        padding: 0.35in;
      }
      .roster {
        column-gap: 0.3rem;
      }
      .fighter {
        margin-bottom: 0.3rem;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>${escapeHtml(sheet.name)}</h1>
    ${identity ? `<p class="identity">${identity}</p>` : ""}
    ${sheet.specialChoice?.name ? `<p class="identity">${escapeHtml(sheet.specialChoice.label)}: ${escapeHtml(sheet.specialChoice.name)}</p>` : ""}
    ${sheet.tradition ? `<p class="budget">Budget: ${sheet.totalCost}c / ${sheet.budget}c</p>` : ""}
    ${retinueRules}
  </header>
  ${fighters}
</body>
</html>`;
}

export async function copyRetinueToClipboard(data) {
  const text = formatRetinuePlainText(data);
  await navigator.clipboard.writeText(text);
  return text;
}

export function printRetinue(data) {
  const html = buildRetinuePrintHtml(data);

  const iframe = document.createElement("iframe");
  iframe.setAttribute("title", "Retinue print preview");
  iframe.setAttribute("aria-hidden", "true");
  iframe.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0;";
  document.body.appendChild(iframe);

  const printWindow = iframe.contentWindow;
  const doc = printWindow?.document;
  if (!doc) {
    iframe.remove();
    return false;
  }

  doc.open();
  doc.write(html);
  doc.close();

  const cleanup = () => {
    iframe.remove();
  };

  printWindow.addEventListener("afterprint", cleanup, { once: true });
  window.setTimeout(cleanup, 60_000);

  const triggerPrint = () => {
    printWindow.focus();
    printWindow.print();
  };

  if (doc.readyState === "complete") {
    triggerPrint();
  } else {
    printWindow.addEventListener("load", triggerPrint, { once: true });
  }

  return true;
}

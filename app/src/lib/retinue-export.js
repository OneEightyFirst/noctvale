import { STAT_KEYS } from "../data/noctvale.js";
import { buildRetinueSheet, buildRulesReference, formatStat } from "./retinue-sheet.js";

function indentLines(lines, prefix = "  ") {
  return lines.map((line) => `${prefix}${line}`);
}

function joinSection(title, lines) {
  if (!lines.length) return [];
  return [title, ...indentLines(lines), ""];
}

function formatSpellPlainText(spell) {
  const keywordText = spell.keywords?.length ? ` (${spell.keywords.join(", ")})` : "";
  const statLine = [
    spell.difficulty ? `Difficulty ${spell.difficulty}` : null,
    spell.range ? `Range ${spell.range}` : null,
    spell.castingStat ? `Cast ${spell.castingStat}` : null,
    spell.hit ? `Hit ${spell.hit}` : null,
    spell.mt ? `Mt ${spell.mt}` : null,
    spell.sk ? `Sk ${spell.sk}` : null,
  ]
    .filter(Boolean)
    .join(" · ");

  const lines = [`${spell.name}${keywordText}`];
  if (statLine) lines.push(`  ${statLine}`);
  if (spell.effect) lines.push(`  ${spell.effect}`);
  if (spell.mishap) lines.push(`  Mishap: ${spell.mishap}`);
  return lines;
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
    lines.push("  Name | Slots | Rng | Mt | Sk | Rules");
    for (const weapon of fighter.weapons) {
      const name = `${weapon.name}${weapon.quantity > 1 ? ` ×${weapon.quantity}` : ""}`;
      const ruleNames = weapon.specialRules.map((rule) => rule.name || rule.text).join(", ") || "—";
      lines.push(`  ${name} | ${weapon.slots} | ${weapon.range ?? "—"} | ${weapon.mt} | ${weapon.sk} | ${ruleNames}`);
    }
  }

  if (fighter.dualWieldingRules.length) {
    lines.push("Dual wielding");
  }

  if (fighter.ruleFeats.length) {
    lines.push(`Feats: ${fighter.ruleFeats.map((feat) => feat.name).join(", ")}`);
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
    lines.push(fighter.spells.length ? `Spells: ${fighter.spells.map((spell) => spell.name).join(", ")}` : "Caster");
  }

  if (fighter.equipment.length) {
    lines.push(`Equipment: ${fighter.equipment.map((item) => `${item.name}${item.quantity > 1 ? ` ×${item.quantity}` : ""}`).join(", ")}`);
  }

  return lines;
}

function formatRulesReferencePlainText(reference) {
  const lines = [];

  if (reference.weaponRules.length) {
    lines.push(...joinSection("Weapon Rules", reference.weaponRules.map((rule) => `${rule.name}: ${rule.text}`)));
  }

  if (reference.feats.length) {
    for (const feat of reference.feats) {
      lines.push(feat.name);
      lines.push(...indentLines(feat.rules));
    }
    lines.push("");
  }

  if (reference.spells.length) {
    for (const spell of reference.spells) {
      lines.push(...formatSpellPlainText(spell));
    }
    lines.push("");
  }

  if (reference.equipment.length) {
    for (const item of reference.equipment) {
      lines.push(item.name);
      lines.push(...indentLines(item.rules));
    }
    lines.push("");
  }

  if (!lines.length) return [];
  return ["Rules Reference", "", ...lines];
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

  const referenceLines = formatRulesReferencePlainText(buildRulesReference(sheet));
  if (referenceLines.length) {
    lines.push("---");
    lines.push(...referenceLines);
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

function renderSpecialRuleNamesHtml(rules) {
  if (!rules?.length) return "—";
  return rules.map((rule) => escapeHtml(rule.name || rule.text)).join(", ");
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
      return `<tr class="weapon-row">
        <td><strong>${name}</strong></td>
        <td>${escapeHtml(String(weapon.slots))}</td>
        <td>${escapeHtml(String(weapon.range ?? "—"))}</td>
        <td>${escapeHtml(String(weapon.mt))}</td>
        <td>${escapeHtml(String(weapon.sk))}</td>
        <td>${renderSpecialRuleNamesHtml(weapon.specialRules)}</td>
      </tr>`;
    })
    .join("");

  return `<table class="weapon-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Slots</th>
        <th>Rng</th>
        <th>Mt</th>
        <th>Sk</th>
        <th>Rules</th>
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
    sections.push(`<p class="detail">Dual wielding</p>`);
  }

  if (fighter.ruleFeats.length) {
    sections.push(`<p class="detail"><strong>Feats:</strong> ${fighter.ruleFeats.map((feat) => escapeHtml(feat.name)).join(", ")}</p>`);
  }

  if (fighter.companion) {
    sections.push(`<h3>Companion — ${escapeHtml(fighter.companion.name)}</h3>`);
    sections.push(renderStatGridHtml(fighter.companion.stats));
    sections.push(
      `<p class="detail">Tether ${fighter.companion.tether}"${fighter.companion.keywords.length ? ` · ${escapeHtml(fighter.companion.keywords.join(", "))}` : ""} · M, Wi, Sa use Handler</p>`,
    );
  }

  if (fighter.caster) {
    sections.push(
      `<p class="detail"><strong>Spells:</strong> ${
        fighter.spells.length ? fighter.spells.map((spell) => escapeHtml(spell.name)).join(", ") : "Caster"
      }</p>`,
    );
  }

  if (fighter.equipment.length) {
    sections.push(
      `<p class="detail"><strong>Equipment:</strong> ${fighter.equipment
        .map((item) => `${escapeHtml(item.name)}${item.quantity > 1 ? ` ×${item.quantity}` : ""}`)
        .join(", ")}</p>`,
    );
  }

  sections.push("</section>");
  return sections.join("");
}

function renderSpellReferenceHtml(spell) {
  const keywordText = spell.keywords?.length ? ` (${spell.keywords.join(", ")})` : "";
  const statLine = [
    spell.difficulty ? `Difficulty ${spell.difficulty}` : null,
    spell.range ? `Range ${spell.range}` : null,
    spell.castingStat ? `Cast ${spell.castingStat}` : null,
    spell.hit ? `Hit ${spell.hit}` : null,
    spell.mt ? `Mt ${spell.mt}` : null,
    spell.sk ? `Sk ${spell.sk}` : null,
  ]
    .filter(Boolean)
    .join(" · ");

  return `<div class="ref-item">
    <strong>${escapeHtml(spell.name)}${escapeHtml(keywordText)}</strong>
    ${statLine ? `<div class="ref-meta">${escapeHtml(statLine)}</div>` : ""}
    ${spell.effect ? `<div>${escapeHtml(spell.effect)}</div>` : ""}
    ${spell.mishap ? `<div class="ref-meta">Mishap: ${escapeHtml(spell.mishap)}</div>` : ""}
  </div>`;
}

function renderRulesReferenceHtml(reference) {
  const groups = [];

  if (reference.weaponRules.length) {
    groups.push(`<div class="ref-group">
      <h4>Weapon Rules</h4>
      ${reference.weaponRules
        .map((rule) => `<div class="ref-item"><strong>${escapeHtml(rule.name)}:</strong> ${escapeHtml(rule.text)}</div>`)
        .join("")}
    </div>`);
  }

  if (reference.feats.length) {
    groups.push(`<div class="ref-group">
      <h4>Feats</h4>
      ${reference.feats
        .map((feat) => `<div class="ref-item"><strong>${escapeHtml(feat.name)}</strong>${renderRulesList(feat.rules)}</div>`)
        .join("")}
    </div>`);
  }

  if (reference.spells.length) {
    groups.push(`<div class="ref-group">
      <h4>Spells</h4>
      ${reference.spells.map(renderSpellReferenceHtml).join("")}
    </div>`);
  }

  if (reference.equipment.length) {
    groups.push(`<div class="ref-group">
      <h4>Equipment</h4>
      ${reference.equipment
        .map((item) => `<div class="ref-item"><strong>${escapeHtml(item.name)}</strong>${renderRulesList(item.rules)}</div>`)
        .join("")}
    </div>`);
  }

  if (!groups.length) return "";
  return `<section class="rules-reference"><h2>Rules Reference</h2><div class="ref-columns">${groups.join("")}</div></section>`;
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

  const leftCol = sheet.fighters.filter((_, i) => i % 2 === 0).map(renderFighterHtml).join("");
  const rightCol = sheet.fighters.filter((_, i) => i % 2 === 1).map(renderFighterHtml).join("");
  const fighters = sheet.fighters.length
    ? `<table class="roster"><tr><td class="roster-col">${leftCol}</td><td class="roster-col">${rightCol}</td></tr></table>`
    : "";
  const rulesReference = renderRulesReferenceHtml(buildRulesReference(sheet));

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
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.5rem 1rem;
      align-items: start;
      margin-bottom: 0.5rem;
      padding-bottom: 0.35rem;
      border-bottom: 1px solid #999;
    }
    .header-left {
      min-width: 0;
    }
    .header-right {
      border-left: 1px solid #ccc;
      padding-left: 0.75rem;
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
    .rules-reference {
      margin-top: 0.5rem;
      padding-top: 0.35rem;
      border-top: 1px solid #999;
    }
    .rules-reference h2 {
      margin-bottom: 0.25rem;
    }
    .ref-columns {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0 0.75rem;
    }
    .ref-group {
      break-inside: avoid;
      page-break-inside: avoid;
      margin-bottom: 0.3rem;
    }
    .ref-group h4 {
      margin: 0 0 0.15rem;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: #444;
      border-bottom: 1px solid #ccc;
      padding-bottom: 0.1rem;
    }
    .ref-item {
      margin-bottom: 0.2rem;
      break-inside: avoid;
      page-break-inside: avoid;
    }
    .ref-meta {
      color: #555;
      font-size: 8px;
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
      width: 100%;
      border-collapse: separate;
      border-spacing: 0.35rem 0;
      table-layout: fixed;
    }
    .roster-col {
      width: 50%;
      vertical-align: top;
      padding: 0;
    }
    .fighter {
      border: 1px solid #333;
      padding: 0.35rem 0.4rem;
      margin-bottom: 0.35rem;
      break-inside: avoid;
      page-break-inside: avoid;
    }
    @media print {
      body {
        padding: 0.35in;
      }
      .roster {
        border-spacing: 0.3rem 0;
      }
      .fighter {
        margin-bottom: 0.3rem;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="header-left">
      <h1>${escapeHtml(sheet.name)}</h1>
      ${identity ? `<p class="identity">${identity}</p>` : ""}
      ${sheet.specialChoice?.name ? `<p class="identity">${escapeHtml(sheet.specialChoice.label)}: ${escapeHtml(sheet.specialChoice.name)}</p>` : ""}
      ${sheet.tradition ? `<p class="budget">Budget: ${sheet.totalCost}c / ${sheet.budget}c</p>` : ""}
    </div>
    ${retinueRules ? `<div class="header-right">${retinueRules}</div>` : ""}
  </header>
  ${fighters}
  ${rulesReference}
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
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const iframe = document.createElement("iframe");
  iframe.setAttribute("title", "Retinue print preview");
  iframe.setAttribute("aria-hidden", "true");
  iframe.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0;";

  const cleanup = () => {
    iframe.remove();
    URL.revokeObjectURL(url);
  };

  iframe.addEventListener("load", () => {
    const printWindow = iframe.contentWindow;
    if (!printWindow) {
      cleanup();
      return;
    }
    printWindow.addEventListener("afterprint", cleanup, { once: true });
    window.setTimeout(cleanup, 60_000);
    printWindow.focus();
    printWindow.print();
  }, { once: true });

  iframe.src = url;
  document.body.appendChild(iframe);

  return true;
}

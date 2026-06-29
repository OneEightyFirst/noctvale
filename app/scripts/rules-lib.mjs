import { readFileSync } from "node:fs";
import path from "node:path";

export const DOCUMENT_DEFS = [
  {
    id: "intro",
    label: "Introduction",
    category: "Introduction",
    path: "rules/intro.md",
    html: "index.html",
    legacyHtml: "intro.html",
  },
  {
    id: "what-you-need-to-play",
    label: "What You Need to Play",
    category: "Core Rules",
    path: "rules/what-you-need-to-play.md",
    html: "core-rules/index.html",
    legacyHtml: "core-rules.html",
    legacyPaths: ["rules/core-rules.md", "core-rules.md"],
  },
  {
    id: "attributes",
    label: "Attributes",
    category: "Core Rules",
    path: "rules/attributes.md",
    html: "attributes/index.html",
  },
  {
    id: "battle-setup",
    label: "Battle Setup",
    category: "Core Rules",
    path: "rules/battle-setup.md",
    html: "battle-setup/index.html",
  },
  {
    id: "the-turn",
    label: "The Turn",
    category: "Core Rules",
    path: "rules/the-turn.md",
    html: "the-turn/index.html",
  },
  {
    id: "actions",
    label: "Actions",
    category: "Core Rules",
    path: "rules/actions.md",
    html: "actions/index.html",
  },
  {
    id: "combat",
    label: "Combat",
    category: "Core Rules",
    path: "rules/combat.md",
    html: "combat/index.html",
  },
  {
    id: "conditions",
    label: "Conditions",
    category: "Core Rules",
    path: "rules/conditions.md",
    html: "conditions/index.html",
  },
  {
    id: "retinue-building",
    label: "Retinue Building",
    category: "Retinues",
    path: "rules/retinue-building.md",
    html: "retinue/index.html",
    legacyHtml: "retinue.html",
    legacyPaths: ["rules/retinue.md", "retinue.md"],
  },
  {
    id: "archetypes",
    label: "Archetypes",
    category: "Retinues",
    path: "rules/archetypes.md",
    html: "archetypes/index.html",
  },
  {
    id: "traditions",
    label: "Traditions",
    category: "Retinues",
    path: "rules/traditions.md",
    html: "traditions/index.html",
  },
  {
    id: "feats",
    label: "Feats",
    category: "Retinues",
    path: "rules/feats.md",
    html: "feats/index.html",
  },
  {
    id: "domains",
    label: "Domains",
    category: "Retinues",
    path: "rules/domains.md",
    html: "domains/index.html",
  },
  {
    id: "magic",
    label: "Magic",
    category: "Retinues",
    path: "rules/magic.md",
    html: "magic/index.html",
  },
  {
    id: "crown-costs",
    label: "Crown Costs",
    category: "Equipment",
    path: "rules/crown-costs.md",
    html: "equipment/index.html",
    legacyHtml: "equipment.html",
    legacyPaths: ["rules/equipment.md", "equipment.md"],
  },
  {
    id: "weapons",
    label: "Weapons",
    category: "Equipment",
    path: "rules/weapons.md",
    html: "weapons/index.html",
  },
  {
    id: "gear",
    label: "Equipment",
    category: "Equipment",
    path: "rules/gear.md",
    html: "gear/index.html",
  },
  {
    id: "companions",
    label: "Companions",
    category: "Equipment",
    path: "rules/companions.md",
    html: "companions/index.html",
  },
  {
    id: "how-to-run-a-campaign",
    label: "How to Run a Campaign",
    category: "Campaign",
    path: "rules/how-to-run-a-campaign.md",
    html: "campaign/index.html",
    legacyHtml: "campaign.html",
    legacyPaths: ["rules/campaign.md", "campaign.md"],
  },
  {
    id: "advancement",
    label: "Leveling and Advancement",
    category: "Campaign",
    path: "rules/advancement.md",
    html: "advancement/index.html",
  },
  {
    id: "scenarios",
    label: "Scenarios",
    category: "Campaign",
    path: "rules/scenarios.md",
    html: "scenarios/index.html",
  },
  {
    id: "post-game-sequence",
    label: "Post-Game Sequence",
    category: "Campaign",
    path: "rules/post-game-sequence.md",
    html: "post-game/index.html",
  },
  {
    id: "survival-rolls",
    label: "Survival Rolls",
    category: "Campaign",
    path: "rules/survival-rolls.md",
    html: "survival-rolls/index.html",
  },
  {
    id: "economy",
    label: "Economy",
    category: "Campaign",
    path: "rules/economy.md",
    html: "economy/index.html",
  },
];

const RULES_OUTLINE = [
  {
    label: "Intro",
    articleId: "intro",
    includeHeadings: true,
  },
  {
    label: "Core Rules",
    articleId: "what-you-need-to-play",
    children: [
      { label: "What You Need to Play", articleId: "what-you-need-to-play", includeHeadings: true },
      { label: "Attributes", articleId: "attributes", includeHeadings: true },
      { label: "Battle Setup", articleId: "battle-setup", includeHeadings: true },
      { label: "The Turn", articleId: "the-turn", includeHeadings: true },
      { label: "Actions", articleId: "actions", includeHeadings: true },
      { label: "Combat", articleId: "combat", includeHeadings: true },
      { label: "Conditions", articleId: "conditions", includeHeadings: true },
    ],
  },
  {
    label: "Retinues",
    articleId: "retinue-building",
    children: [
      { label: "Retinue Building", articleId: "retinue-building", includeHeadings: true },
      { label: "Archetypes", articleId: "archetypes", includeHeadings: true },
      { label: "Traditions", articleId: "traditions", includeHeadings: true },
      { label: "Feats", articleId: "feats", includeHeadings: true },
      { label: "Domains", articleId: "domains", includeHeadings: true },
      { label: "Magic", articleId: "magic", includeHeadings: true },
    ],
  },
  {
    label: "Equipment",
    articleId: "crown-costs",
    children: [
      { label: "Crown Costs", articleId: "crown-costs", includeHeadings: true },
      { label: "Weapons", articleId: "weapons", includeHeadings: true },
      { label: "Equipment", articleId: "gear", includeHeadings: true },
      { label: "Companions", articleId: "companions", includeHeadings: true },
    ],
  },
  {
    label: "Campaign",
    articleId: "how-to-run-a-campaign",
    children: [
      { label: "How to Run a Campaign", articleId: "how-to-run-a-campaign", includeHeadings: true },
      { label: "Leveling and Advancement", articleId: "advancement", includeHeadings: true },
      { label: "Scenarios", articleId: "scenarios", includeHeadings: true },
      { label: "Post-Game Sequence", articleId: "post-game-sequence", includeHeadings: true },
      { label: "Survival Rolls", articleId: "survival-rolls", includeHeadings: true },
      { label: "Economy", articleId: "economy", includeHeadings: true },
    ],
  },
];

export function stripMarkdown(value = "") {
  return value
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/#+/g, "")
    .trim();
}

export function slugify(value = "") {
  return stripMarkdown(value)
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function uniqueSlug(base, used) {
  const root = base || "section";
  const count = used.get(root) ?? 0;
  used.set(root, count + 1);
  return count === 0 ? root : `${root}-${count + 1}`;
}

function extractTitle(markdown, fallback) {
  const firstHeading = markdown.match(/^#\s+(.+)$/m);
  return firstHeading ? stripMarkdown(firstHeading[1]) : fallback;
}

function extractSummary(markdown) {
  const lines = markdown.split("\n");
  let pastTitle = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith("# ")) {
      pastTitle = true;
      continue;
    }
    if (!pastTitle) continue;
    if (trimmed.startsWith("#") || trimmed.startsWith("|") || trimmed.startsWith("-") || trimmed.startsWith(">")) continue;
    return stripMarkdown(trimmed);
  }

  return "Rules reference.";
}

function extractHeadings(markdown) {
  const used = new Map();
  const headings = [];

  for (const line of markdown.split("\n")) {
    const blockquoteMatch = line.match(/^>\s+(#{1,6})\s+(.+?)\s*#*$/);
    const normalMatch = !blockquoteMatch && line.match(/^(#{1,6})\s+(.+?)\s*#*$/);
    const match = blockquoteMatch || normalMatch;
    if (!match) continue;

    const level = match[1].length;
    const label = stripMarkdown(match[2]);
    const baseSlug = slugify(label);
    if (blockquoteMatch && used.has(baseSlug)) continue;

    headings.push({
      level,
      label,
      anchor: uniqueSlug(baseSlug, used),
    });
  }

  return headings;
}

function stripArticleTitleBlock(markdown, title, summary) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  let index = 0;

  while (index < lines.length && !lines[index].trim()) index += 1;

  const firstHeading = lines[index]?.match(/^#\s+(.+?)\s*#*$/);
  if (firstHeading && stripMarkdown(firstHeading[1]) === title) {
    index += 1;
  }

  while (index < lines.length && !lines[index].trim()) index += 1;

  const subtitle = lines[index]?.trim();
  const subtitleText = subtitle ? stripMarkdown(subtitle) : "";
  if (subtitle && subtitleText && subtitleText === summary) {
    index += 1;
    while (index < lines.length && !lines[index].trim()) index += 1;
    if (/^---+$/.test(lines[index]?.trim())) {
      index += 1;
    }
  }

  while (index < lines.length && !lines[index].trim()) index += 1;

  return lines.slice(index).join("\n");
}

function buildHeadingTree(article) {
  const root = [];
  const stack = [{ level: 0, children: root }];

  for (const heading of article.headings) {
    const node = {
      id: `nav-${article.id}-${heading.anchor}`,
      label: heading.label,
      articleId: article.id,
      html: article.html,
      anchor: heading.anchor,
      level: heading.level,
      children: [],
    };

    while (stack.length > 1 && heading.level <= stack[stack.length - 1].level) {
      stack.pop();
    }

    stack[stack.length - 1].children.push(node);
    stack.push({ level: heading.level, children: node.children });
  }

  return root;
}

function normalizeRulesPath(rawPath = "") {
  let normalizedPath = rawPath.replace(/^\.\//, "");
  while (normalizedPath.startsWith("../")) {
    normalizedPath = normalizedPath.slice(3);
  }
  return normalizedPath;
}

export function buildDocumentPathMap() {
  return new Map(
    DOCUMENT_DEFS.flatMap((doc) => {
      const filename = doc.path.split("/").pop();
      return [
        [doc.path, doc.html],
        [filename, doc.html],
        [`../${doc.path}`, doc.html],
        [`../${filename}`, doc.html],
        ...(doc.legacyPaths ?? []).flatMap((legacyPath) => {
          const legacyFilename = legacyPath.split("/").pop();
          return [
            [legacyPath, doc.html],
            [legacyFilename, doc.html],
            [`../${legacyPath}`, doc.html],
            [`../${legacyFilename}`, doc.html],
          ];
        }),
      ];
    }),
  );
}

function rulesUrl(html, fragment = "") {
  const pathname = html === "index.html" ? "/" : `/${html.replace(/index\.html$/, "")}`;
  return `${pathname}${fragment}`;
}

export function rewriteMarkdownLinks(markdown, pathToHtml) {
  return markdown.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, href) => {
    if (/^(https?:|mailto:)/.test(href)) return match;

    const [rawPath, rawFragment = ""] = href.split("#");
    if (!rawPath) return match;

    const normalizedPath = normalizeRulesPath(rawPath);
    const filename = normalizedPath.split("/").filter(Boolean).pop() ?? "";
    const targetHtml = pathToHtml.get(normalizedPath) ?? pathToHtml.get(filename);
    if (!targetHtml) return match;

    const fragment = rawFragment ? `#${slugify(decodeURIComponent(rawFragment))}` : "";
    return `[${text}](${rulesUrl(targetHtml, fragment)})`;
  });
}

export function loadArticles(repoRoot) {
  const articles = DOCUMENT_DEFS.map((doc) => {
    const markdown = readFileSync(path.join(repoRoot, doc.path), "utf8");
    const title = extractTitle(markdown, doc.label);
    const summary = extractSummary(markdown);
    const displayMarkdown = stripArticleTitleBlock(markdown, title, summary);
    const headings = extractHeadings(displayMarkdown);

    return {
      ...doc,
      title,
      summary,
      displayMarkdown,
      headings,
      navChildren: buildHeadingTree({ ...doc, headings }),
    };
  });

  return articles;
}

export function buildNavTree(articles) {
  const articlesById = new Map(articles.map((article) => [article.id, article]));

  function buildOutlineNode(node, path = []) {
    const article = articlesById.get(node.articleId);
    if (!article) {
      throw new Error(`Rules outline references unknown article: ${node.articleId}`);
    }

    if (node.anchor && !article.headings.some((heading) => heading.anchor === node.anchor)) {
      throw new Error(`Rules outline references missing anchor: ${node.articleId}#${node.anchor}`);
    }

    const idParts = [...path, slugify(node.label)];
    const children = node.children?.map((child) => buildOutlineNode(child, idParts)) ?? [];

    return {
      id: `nav-${idParts.join("-")}`,
      label: node.label,
      articleId: node.articleId,
      html: article.html,
      anchor: node.anchor,
      children: node.includeHeadings ? [...children, ...article.navChildren] : children,
    };
  }

  return RULES_OUTLINE.map((node) => buildOutlineNode(node));
}

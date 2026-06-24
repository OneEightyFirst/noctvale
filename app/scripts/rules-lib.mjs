import { readFileSync } from "node:fs";
import path from "node:path";

export const DOCUMENT_DEFS = [
  {
    id: "intro",
    label: "Introduction",
    category: "Introduction",
    path: "intro.md",
    html: "index.html",
    legacyHtml: "intro.html",
  },
  {
    id: "core-rules",
    label: "Core Rules",
    category: "Core Rules",
    path: "rules/core-rules.md",
    html: "core-rules/index.html",
    legacyHtml: "core-rules.html",
  },
  {
    id: "retinue",
    label: "Retinues",
    category: "Retinues",
    path: "rules/retinue.md",
    html: "retinue/index.html",
    legacyHtml: "retinue.html",
  },
  {
    id: "equipment",
    label: "Equipment",
    category: "Equipment",
    path: "rules/equipment.md",
    html: "equipment/index.html",
    legacyHtml: "equipment.html",
  },
  {
    id: "campaign",
    label: "Campaign",
    category: "Campaign",
    path: "campaign/campaign.md",
    html: "campaign/index.html",
    legacyHtml: "campaign.html",
  },
];

const RULES_OUTLINE = [
  {
    label: "Intro",
    articleId: "intro",
    children: [
      { label: "What Is Noctvale?", articleId: "intro", anchor: "what-is-noctvale" },
      { label: "The Backstory", articleId: "intro", anchor: "the-backstory" },
    ],
  },
  {
    label: "Core Rules",
    articleId: "core-rules",
    children: [
      { label: "What You Need to Play", articleId: "core-rules", anchor: "what-you-need-to-play" },
      { label: "Getting Started", articleId: "core-rules", anchor: "getting-started" },
      {
        label: "Stats",
        articleId: "core-rules",
        anchor: "stats",
        children: [
          { label: "Stat Modifiers", articleId: "core-rules", anchor: "stat-modifiers" },
        ],
      },
      {
        label: "Battle Setup",
        articleId: "core-rules",
        anchor: "battle-setup",
        children: [
          { label: "Terrain", articleId: "core-rules", anchor: "terrain" },
          { label: "Difficult Terrain", articleId: "core-rules", anchor: "difficult-terrain" },
        ],
      },
      {
        label: "Activation",
        articleId: "core-rules",
        anchor: "activation",
        children: [
          { label: "Round at a Glance", articleId: "core-rules", anchor: "round-at-a-glance" },
          { label: "Turn Structure", articleId: "core-rules", anchor: "turn-structure" },
          { label: "Example Round", articleId: "core-rules", anchor: "example-a-round" },
          {
            label: "Ending the Battle",
            articleId: "core-rules",
            anchor: "ending-the-battle",
            children: [
              { label: "Escape", articleId: "core-rules", anchor: "escape" },
            ],
          },
          { label: "Overwatch", articleId: "core-rules", anchor: "overwatch" },
        ],
      },
      {
        label: "Actions",
        articleId: "core-rules",
        anchor: "actions",
        children: [
          {
            label: "Movement Actions",
            articleId: "core-rules",
            anchor: "movement-actions",
            children: [
              { label: "Falling", articleId: "core-rules", anchor: "falling" },
            ],
          },
          {
            label: "Combat Actions",
            articleId: "core-rules",
            anchor: "combat-actions",
            children: [
              { label: "Engagement Rules", articleId: "core-rules", anchor: "engagement-rules" },
              { label: "Multiple Engagement", articleId: "core-rules", anchor: "multiple-engagement" },
              { label: "Gang Up", articleId: "core-rules", anchor: "gang-up" },
            ],
          },
          { label: "Tactical Actions", articleId: "core-rules", anchor: "tactical-actions" },
          { label: "Interaction Actions", articleId: "core-rules", anchor: "interaction-actions" },
        ],
      },
      {
        label: "Combat",
        articleId: "core-rules",
        anchor: "combat",
        children: [
          {
            label: "Might & Skill Dice",
            articleId: "core-rules",
            anchor: "might-skill-dice",
            children: [
              { label: "Strike Pool", articleId: "core-rules", anchor: "strike-pool" },
            ],
          },
          { label: "Attack Sequence", articleId: "core-rules", anchor: "attack-sequence" },
          {
            label: "The Crit Triangle",
            articleId: "core-rules",
            anchor: "the-crit-triangle",
            children: [
              { label: "The Weapon Triangle", articleId: "core-rules", anchor: "weapon-triangle" },
              { label: "The Magic Triangle", articleId: "core-rules", anchor: "magic-triangle" },
              { label: "Firearms", articleId: "core-rules", anchor: "firearms" },
              { label: "Outside the Triangles", articleId: "core-rules", anchor: "outside-the-triangles" },
            ],
          },
          { label: "Ranged Reaction", articleId: "core-rules", anchor: "ranged-reaction" },
          { label: "Example Combat", articleId: "core-rules", anchor: "combat-example" },
        ],
      },
      {
        label: "Conditions",
        articleId: "core-rules",
        anchor: "conditions",
        children: [
          {
            label: "Wound States",
            articleId: "core-rules",
            anchor: "wound-states",
            children: [
              { label: "Active", articleId: "core-rules", anchor: "active" },
              { label: "Downed", articleId: "core-rules", anchor: "downed" },
              { label: "Stunned", articleId: "core-rules", anchor: "stunned" },
              { label: "Out of Action", articleId: "core-rules", anchor: "out-of-action" },
            ],
          },
          {
            label: "Afflictions",
            articleId: "core-rules",
            anchor: "afflictions",
            children: [
              { label: "Poisoned", articleId: "core-rules", anchor: "poisoned" },
              { label: "Weakened", articleId: "core-rules", anchor: "weakened" },
              { label: "Enfeebled", articleId: "core-rules", anchor: "enfeebled" },
              { label: "Bleeding", articleId: "core-rules", anchor: "bleeding" },
              { label: "Blinded", articleId: "core-rules", anchor: "blinded" },
              { label: "Fear", articleId: "core-rules", anchor: "fear" },
              { label: "Panic", articleId: "core-rules", anchor: "panic" },
              { label: "Insanity", articleId: "core-rules", anchor: "insanity" },
              { label: "Fearless", articleId: "core-rules", anchor: "fearless" },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Retinues",
    articleId: "retinue",
    children: [
      {
        label: "Building a Retinue",
        articleId: "retinue",
        anchor: "building-a-retinue",
        children: [
          { label: "Keywords", articleId: "retinue", anchor: "keywords" },
        ],
      },
      {
        label: "Archetypes",
        articleId: "retinue",
        anchor: "archetypes",
        children: [
          { label: "Knights", articleId: "retinue", anchor: "knights" },
          { label: "Hunters", articleId: "retinue", anchor: "hunters" },
          { label: "Folk", articleId: "retinue", anchor: "folk" },
          { label: "Cult", articleId: "retinue", anchor: "cult" },
        ],
      },
      {
        label: "Traditions",
        articleId: "retinue",
        anchor: "traditions",
        children: [
          { label: "Domains", articleId: "retinue", anchor: "domains" },
          { label: "Light", articleId: "retinue", anchor: "light" },
          { label: "Arcane", articleId: "retinue", anchor: "arcane" },
          { label: "Infernal", articleId: "retinue", anchor: "infernal" },
          { label: "Nature", articleId: "retinue", anchor: "nature" },
          { label: "Necromancy", articleId: "retinue", anchor: "necromancy" },
          { label: "Blood", articleId: "retinue", anchor: "blood" },
        ],
      },
      {
        label: "Feats",
        articleId: "retinue",
        anchor: "feats",
        children: [
          { label: "Universal Feats", articleId: "retinue", anchor: "universal-feats" },
          {
            label: "Archetype Feats",
            articleId: "retinue",
            anchor: "archetype-feats",
            children: [
              { label: "Knight", articleId: "retinue", anchor: "knights-2" },
              { label: "Hunter", articleId: "retinue", anchor: "hunters-2" },
              { label: "Folk", articleId: "retinue", anchor: "folk-2" },
              { label: "Cult", articleId: "retinue", anchor: "cult-2" },
            ],
          },
          {
            label: "Domain Feats",
            articleId: "retinue",
            anchor: "domain-feats",
            children: [
              { label: "Light", articleId: "retinue", anchor: "light-2" },
              { label: "Arcane", articleId: "retinue", anchor: "arcane-2" },
              { label: "Infernal", articleId: "retinue", anchor: "infernal-2" },
              { label: "Nature", articleId: "retinue", anchor: "nature-2" },
              { label: "Necromancy", articleId: "retinue", anchor: "necromancy-2" },
              { label: "Blood", articleId: "retinue", anchor: "blood-2" },
            ],
          },
        ],
      },
      {
        label: "Magic",
        articleId: "retinue",
        anchor: "magic",
        children: [
          { label: "Casting", articleId: "retinue", anchor: "casting" },
          { label: "Damage Spells", articleId: "retinue", anchor: "damage-spells" },
          { label: "Light", articleId: "retinue", anchor: "light-3" },
          { label: "Arcane", articleId: "retinue", anchor: "arcane-3" },
          { label: "Infernal", articleId: "retinue", anchor: "infernal-3" },
          { label: "Nature", articleId: "retinue", anchor: "nature-3" },
          { label: "Necromancy", articleId: "retinue", anchor: "necromancy-3" },
          { label: "Blood", articleId: "retinue", anchor: "blood-3" },
        ],
      },
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

  return markdown
    .split("\n")
    .map((line) => line.match(/^(#{1,6})\s+(.+?)\s*#*$/))
    .filter(Boolean)
    .map((match) => {
      const level = match[1].length;
      const label = stripMarkdown(match[2]);
      return {
        level,
        label,
        anchor: uniqueSlug(slugify(label), used),
      };
    });
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
      ];
    }),
  );
}

function rulesUrl(html, fragment = "") {
  const pathname = html === "index.html" ? "/rules/" : `/rules/${html.replace(/index\.html$/, "")}`;
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
    return {
      id: `nav-${idParts.join("-")}`,
      label: node.label,
      articleId: node.articleId,
      html: article.html,
      anchor: node.anchor,
      children: node.children?.map((child) => buildOutlineNode(child, idParts)) ?? [],
    };
  }

  return RULES_OUTLINE.map((node) => buildOutlineNode(node));
}

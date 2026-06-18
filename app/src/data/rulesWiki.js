import introMarkdown from "@noctvale-rules/intro.md?raw";
import coreRulesMarkdown from "@noctvale-rules/rules/core-rules.md?raw";
import retinueMarkdown from "@noctvale-rules/rules/retinue.md?raw";
import equipmentMarkdown from "@noctvale-rules/rules/equipment.md?raw";
import campaignMarkdown from "@noctvale-rules/campaign/campaign.md?raw";

const DOCUMENT_DEFS = [
  {
    id: "intro",
    label: "Introduction",
    category: "Introduction",
    path: "intro.md",
    markdown: introMarkdown,
  },
  {
    id: "core-rules",
    label: "Core Rules",
    category: "Core Rules",
    path: "rules/core-rules.md",
    markdown: coreRulesMarkdown,
  },
  {
    id: "retinue",
    label: "Retinues",
    category: "Retinues",
    path: "rules/retinue.md",
    markdown: retinueMarkdown,
  },
  {
    id: "equipment",
    label: "Equipment",
    category: "Equipment",
    path: "rules/equipment.md",
    markdown: equipmentMarkdown,
  },
  {
    id: "campaign",
    label: "Campaign",
    category: "Campaign",
    path: "campaign/campaign.md",
    markdown: campaignMarkdown,
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

function uniqueSlug(base, used) {
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
      anchor: heading.anchor,
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

export const RULES_ARTICLES = DOCUMENT_DEFS.map((doc) => {
  const title = extractTitle(doc.markdown, doc.label);
  const summary = extractSummary(doc.markdown);
  const displayMarkdown = stripArticleTitleBlock(doc.markdown, title, summary);
  const headings = extractHeadings(displayMarkdown);

  return {
    ...doc,
    title,
    summary,
    displayMarkdown,
    headings,
    search: `${doc.label} ${doc.category} ${title} ${summary} ${stripMarkdown(doc.markdown)}`.toLowerCase(),
  };
});

export const RULES_ARTICLE_BY_ID = new Map(RULES_ARTICLES.map((article) => [article.id, article]));

export const RULES_ARTICLE_ANCHORS = new Map(
  RULES_ARTICLES.map((article) => [article.id, new Set(article.headings.map((heading) => heading.anchor))]),
);

export function rulesHash(articleId, anchor = "") {
  const encodedArticleId = encodeURIComponent(articleId);
  const encodedAnchor = anchor ? `/${encodeURIComponent(anchor)}` : "";
  return `#rules/${encodedArticleId}${encodedAnchor}`;
}

function normalizeRulesPath(rawPath = "") {
  let normalizedPath = rawPath.replace(/^\.\//, "");
  while (normalizedPath.startsWith("../")) {
    normalizedPath = normalizedPath.slice(3);
  }
  return normalizedPath;
}

export function resolveRuleLink(href, currentArticleId) {
  if (!href || href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:")) {
    return { href, external: true };
  }

  const [rawPath, rawFragment = ""] = href.split("#");
  const normalizedPath = normalizeRulesPath(rawPath);
  const filename = normalizedPath.split("/").filter(Boolean).pop() ?? "";
  const targetArticleId = rawPath
    ? RULES_DOCUMENT_BY_PATH.get(normalizedPath) ?? RULES_DOCUMENT_BY_PATH.get(filename) ?? currentArticleId
    : currentArticleId;
  const targetAnchor = rawFragment ? slugify(decodeURIComponent(rawFragment)) : "";

  return {
    href: rulesHash(targetArticleId, targetAnchor),
    targetArticleId,
    targetAnchor,
    external: false,
  };
}

export const RULES_DOCUMENT_BY_PATH = new Map(
  RULES_ARTICLES.flatMap((article) => {
    const parts = article.path.split("/");
    const filename = parts[parts.length - 1];
    return [
      [article.path, article.id],
      [filename, article.id],
      [`../${article.path}`, article.id],
      [`../${filename}`, article.id],
    ];
  }),
);

export const RULES_NAV_TREE = RULES_ARTICLES.map((article) => ({
  id: `nav-${article.id}`,
  label: article.label,
  articleId: article.id,
  children: buildHeadingTree(article),
}));

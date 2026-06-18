import { readFileSync } from "node:fs";
import path from "node:path";

export const DOCUMENT_DEFS = [
  { id: "intro", label: "Introduction", category: "Introduction", path: "intro.md", html: "intro.html" },
  { id: "core-rules", label: "Core Rules", category: "Core Rules", path: "rules/core-rules.md", html: "core-rules.html" },
  { id: "retinue", label: "Retinues", category: "Retinues", path: "rules/retinue.md", html: "retinue.html" },
  { id: "equipment", label: "Equipment", category: "Equipment", path: "rules/equipment.md", html: "equipment.html" },
  { id: "campaign", label: "Campaign", category: "Campaign", path: "campaign/campaign.md", html: "campaign.html" },
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
    return `[${text}](${targetHtml}${fragment})`;
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
  return articles.map((article) => ({
    id: `nav-${article.id}`,
    label: article.label,
    articleId: article.id,
    html: article.html,
    children: article.navChildren,
  }));
}

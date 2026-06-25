import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync, execSync } from "node:child_process";
import { marked } from "marked";
import {
  buildDocumentPathMap,
  buildNavTree,
  loadArticles,
  rewriteMarkdownLinks,
  slugify,
  stripMarkdown,
  uniqueSlug,
} from "./rules-lib.mjs";

const appDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repoRoot = path.resolve(appDir, "..");
const outDir = path.join(appDir, "public", "rules");

function getGitSha() {
  try {
    return execSync("git rev-parse --short HEAD", { encoding: "utf8", cwd: repoRoot }).trim();
  } catch {
    return "dev";
  }
}

function assetUrl(pathname, assetVersion) {
  return `${pathname}?v=${encodeURIComponent(assetVersion)}`;
}

function rulesUrl(html, anchor = "") {
  const pathname = html === "index.html" ? "/rules/" : `/rules/${html.replace(/index\.html$/, "")}`;
  return `${pathname}${anchor ? `#${anchor}` : ""}`;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderNavNodes(nodes, currentHtml, depth = 0, { defaultExpanded = false } = {}) {
  return nodes
    .map((node) => {
      const href = rulesUrl(node.html, node.anchor);
      const hasChildren = Boolean(node.children?.length);
      const childrenId = `${node.id}-children`;
      const indent = 0.5 + depth * 0.85;
      const children = hasChildren ? renderNavNodes(node.children, currentHtml, depth + 1) : "";
      const startExpanded = defaultExpanded;

      const toggle = hasChildren
        ? `<button type="button" class="wiki-nav-toggle" aria-expanded="${startExpanded ? "true" : "false"}" aria-controls="${childrenId}" aria-label="${startExpanded ? "Collapse" : "Expand"} ${escapeHtml(node.label)}">
            <svg class="wiki-nav-chevron" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
          </button>`
        : `<span class="wiki-nav-spacer" aria-hidden="true"></span>`;

      return `
        <div class="wiki-nav-node${startExpanded ? " is-default-expanded" : ""}" data-nav-id="${node.id}">
          <div class="wiki-nav-row" style="padding-left:${indent}rem">
            ${toggle}
            <a href="${href}" class="wiki-nav-link">${escapeHtml(node.label)}</a>
          </div>
          ${hasChildren ? `<div class="wiki-nav-children${startExpanded ? "" : " is-collapsed"}" id="${childrenId}">${children}</div>` : ""}
        </div>`;
    })
    .join("");
}

function renderSidebar(navTree, currentHtml) {
  return `
    <div class="wiki-sidebar-panel">
      <div class="wiki-sidebar-heading">Rules Index</div>
      <label class="wiki-search">
        <span class="sr-only">Search rules</span>
        <input type="search" id="wiki-search" placeholder="Search rules" autocomplete="off" />
      </label>
      <div class="wiki-nav-tree" id="wiki-nav-tree">
        ${navTree.map((section) => renderNavNodes([section], currentHtml, 0, { defaultExpanded: true })).join("")}
      </div>
    </div>`;
}

function renderPlaytestCallout() {
  return `
        <section class="wiki-playtest-callout" aria-labelledby="playtest-welcome-title">
          <div class="wiki-playtest-eyebrow">Noctvale playtest</div>
          <h2 class="wiki-playtest-title" id="playtest-welcome-title">Welcome to Noctvale</h2>
          <div class="wiki-playtest-copy">
            <p>Noctvale is still in development. Rules, balance, wording, and the retinue builder will have issues while the game is being tested. Please send rules feedback and app problems through the feedback form in the account menu so they are tracked in the right place.</p>
            <p>Thanks for playing and helping shape the game.</p>
          </div>
          <div class="wiki-playtest-actions">
            <a href="/" class="wiki-playtest-btn">Build a retinue</a>
          </div>
        </section>`;
}

function renderPage(article, bodyHtml, navTree, assetVersion) {
  const headerBorder = article.id === "intro" ? "" : " wiki-article-header--bordered";
  const playtestCallout = article.id === "intro" ? renderPlaytestCallout() : "";
  const rulesHome = rulesUrl("index.html");
  const wikiCss = assetUrl("/rules/wiki.css", assetVersion);
  const wikiAuthJs = assetUrl("/rules/wiki-auth.js", assetVersion);
  const wikiJs = assetUrl("/rules/wiki.js", assetVersion);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(article.title)} — Noctvale Rules</title>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="stylesheet" href="${wikiCss}" />
</head>
<body class="wiki-body">
  <div class="wiki-backdrop" id="wiki-backdrop" hidden></div>
  <aside class="wiki-sidebar" id="wiki-sidebar" aria-label="Section navigation">
    <div class="wiki-logo-wrap">
      <a href="${rulesHome}"><img src="/images/noctvale-logo_ondark.svg" alt="Noctvale" class="wiki-logo" width="466" height="388" /></a>
    </div>
    <div class="wiki-sidebar-scroll">
      ${renderSidebar(navTree, article.html)}
    </div>
  </aside>
  <div class="wiki-main">
    <header class="wiki-header">
      <button type="button" class="wiki-menu-btn" id="wiki-menu-open" aria-label="Open navigation menu" aria-expanded="false" aria-controls="wiki-sidebar">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
      </button>
      <a href="${rulesHome}" class="wiki-mark-link"><img src="/images/noctvale-mark_dark.svg" alt="Noctvale" class="wiki-mark" width="169" height="169" /></a>
      <div class="wiki-header-actions">
        <nav class="wiki-top-nav" aria-label="App">
          <div class="wiki-view-toggle">
            <a href="${rulesHome}" class="wiki-view-link is-active" aria-current="page">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/></svg>
              Rules
            </a>
            <a href="/" class="wiki-view-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
              Retinues
            </a>
          </div>
        </nav>
        <div id="wiki-user-menu" class="wiki-user-menu-slot"></div>
      </div>
    </header>
    <main class="wiki-content-wrap">
      ${playtestCallout}
      <article class="wiki-article">
        <header class="wiki-article-header${headerBorder}">
          <div class="wiki-article-eyebrow">${escapeHtml(article.category)}</div>
          <h1 class="wiki-article-title" id="${article.id}">${escapeHtml(article.title)}</h1>
          <p class="wiki-article-summary">${escapeHtml(article.summary)}</p>
        </header>
        <div class="wiki-content">
          ${bodyHtml}
        </div>
      </article>
    </main>
  </div>
  <script type="module" src="${wikiAuthJs}"></script>
  <script src="${wikiJs}" defer></script>
</body>
</html>`;
}

function markdownToHtml(markdown) {
  const html = marked.parse(markdown, { gfm: true, breaks: false });
  const slugUsed = new Map();

  return html.replace(/<h([1-6])>([\s\S]*?)<\/h\1>/gi, (match, level, inner) => {
    const label = stripMarkdown(inner.replace(/<[^>]+>/g, ""));
    const id = uniqueSlug(slugify(label), slugUsed);
    return `<h${level} id="${id}">${inner}</h${level}>`;
  });
}

function renderRedirect(targetHtml) {
  const targetUrl = rulesUrl(targetHtml);
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta http-equiv="refresh" content="0; url=${targetUrl}" /><link rel="canonical" href="${targetUrl}" /><title>Noctvale Rules</title></head><body><p><a href="${targetUrl}">Noctvale Rules</a></p></body></html>`;
}

function buildWikiCss() {
  const result = spawnSync(
    "npx",
    ["tailwindcss", "-i", "./src/wiki.css", "-o", "./public/rules/wiki.css", "--minify"],
    { cwd: appDir, stdio: "inherit", shell: process.platform === "win32" },
  );

  if (result.status !== 0) {
    throw new Error("tailwindcss failed to build wiki.css");
  }
}

function buildWikiAuth() {
  const result = spawnSync(
    "npx",
    ["vite", "build", "--config", "vite.wiki-auth.config.js"],
    { cwd: appDir, stdio: "inherit", shell: process.platform === "win32" },
  );

  if (result.status !== 0) {
    throw new Error("vite failed to build wiki-auth.js");
  }
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

const pathToHtml = buildDocumentPathMap();
const articles = loadArticles(repoRoot);
const navTree = buildNavTree(articles);
const assetVersion = getGitSha();

for (const article of articles) {
  const linkedMarkdown = rewriteMarkdownLinks(article.displayMarkdown, pathToHtml);
  const bodyHtml = markdownToHtml(linkedMarkdown);
  const html = renderPage(article, bodyHtml, navTree, assetVersion);
  const articlePath = path.join(outDir, article.html);
  mkdirSync(path.dirname(articlePath), { recursive: true });
  writeFileSync(articlePath, html);

  if (article.legacyHtml) {
    const legacyHtml = article.html === "index.html" ? html : renderRedirect(article.html);
    writeFileSync(path.join(outDir, article.legacyHtml), legacyHtml);
  }
}

writeFileSync(
  path.join(outDir, "wiki.js"),
  readFileSync(path.join(appDir, "scripts", "wiki-shell.js"), "utf8"),
);

buildWikiCss();
buildWikiAuth();

console.log(`Built ${articles.length} rules pages → public/rules/`);

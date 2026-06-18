import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronRight, Library, Search, ScrollText } from "lucide-react";
import { RULES_ARTICLE_BY_ID, RULES_ARTICLES, RULES_DOCUMENT_BY_PATH, RULES_NAV_TREE, slugify, stripMarkdown } from "../data/rulesWiki.js";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function normalize(value) {
  return value.trim().toLowerCase();
}

function collectArticleIds(nodes, ids = []) {
  for (const node of nodes) {
    if (node.articleId) ids.push(node.articleId);
    if (node.children?.length) collectArticleIds(node.children, ids);
  }
  return ids;
}

function filterNavTree(nodes, visibleArticleIds) {
  return nodes
    .map((node) => {
      const children = node.children?.length ? filterNavTree(node.children, visibleArticleIds) : [];
      const selfVisible = node.articleId ? visibleArticleIds.has(node.articleId) : false;
      if (!selfVisible && !children.length) return null;
      return { ...node, children: selfVisible ? node.children ?? [] : children };
    })
    .filter(Boolean);
}

function uniqueSlug(base, used) {
  const root = base || "section";
  const count = used.get(root) ?? 0;
  used.set(root, count + 1);
  return count === 0 ? root : `${root}-${count + 1}`;
}

function rulesHash(articleId, anchor = "") {
  const encodedArticleId = encodeURIComponent(articleId);
  const encodedAnchor = anchor ? `/${encodeURIComponent(anchor)}` : "";
  return `#rules/${encodedArticleId}${encodedAnchor}`;
}

function parseRulesHash(hash = window.location.hash) {
  const match = hash.match(/^#rules\/([^/]+)(?:\/(.+))?$/);
  if (!match) return null;
  return {
    articleId: decodeURIComponent(match[1]),
    anchor: match[2] ? decodeURIComponent(match[2]) : "",
  };
}

function rulesHistoryState(articleId, anchor = "") {
  return { noctvaleView: "rules", articleId, anchor };
}

function articleIdOrDefault(articleId) {
  return RULES_ARTICLE_BY_ID.has(articleId) ? articleId : RULES_ARTICLES[0]?.id;
}

function parseTable(rows) {
  const cleanRows = rows.map((row) =>
    row
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => cell.trim()),
  );

  return {
    headers: cleanRows[0] ?? [],
    rows: cleanRows.slice(2),
  };
}

function isTableDivider(line) {
  return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
}

function resolveRuleLink(href, currentArticleId) {
  if (!href || href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:")) {
    return { href, external: true };
  }

  const [rawPath, rawFragment = ""] = href.split("#");
  const normalizedPath = rawPath.replace(/^\.\//, "").replace(/^\.\.\//, "");
  const filename = normalizedPath.split("/").filter(Boolean).pop();
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

function InlineMarkdown({ text, articleId, onNavigate }) {
  const parts = String(text).split(/(`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={`${part}-${index}`} className="rounded border border-night-700 bg-night-900 px-1 py-0.5 text-[0.9em] text-cream-100">
          {part.slice(1, -1)}
        </code>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={`${part}-${index}`}>{part.slice(1, -1)}</em>;
    }

    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const target = resolveRuleLink(link[2], articleId);
      return (
        <a
          key={`${part}-${index}`}
          href={target.href}
          target={target.external ? "_blank" : undefined}
          rel={target.external ? "noreferrer" : undefined}
          onClick={
            target.external
              ? undefined
              : (event) => {
                  event.preventDefault();
                  onNavigate(target.targetArticleId, target.targetAnchor);
                }
          }
          className="text-accent-200 underline underline-offset-4 hover:text-accent-100"
        >
          {link[1]}
        </a>
      );
    }

    return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
  });
}

function MarkdownTable({ headers, rows, articleId, onNavigate }) {
  return (
    <div className="my-4 overflow-x-auto rounded-lg border border-night-800">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-night-900 text-cream-100">
          <tr>
            {headers.map((header, index) => (
              <th key={`${header}-${index}`} scope="col" className="whitespace-nowrap border-b border-night-800 px-3 py-2 font-semibold">
                <InlineMarkdown text={header} articleId={articleId} onNavigate={onNavigate} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-night-800 text-cream-100">
          {rows.map((row, rowIndex) => (
            <tr key={`${row.join("-")}-${rowIndex}`} className="bg-night-950">
              {row.map((cell, cellIndex) => (
                <td key={`${cell}-${cellIndex}`} className="px-3 py-2 align-top">
                  <InlineMarkdown text={cell} articleId={articleId} onNavigate={onNavigate} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MarkdownList({ items, ordered, articleId, onNavigate }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={cx("my-3 space-y-1 pl-5 text-sm leading-relaxed text-cream-100", ordered ? "list-decimal" : "list-disc")}>
      {items.map((item, index) => (
        <li key={`${item}-${index}`}>
          <InlineMarkdown text={item} articleId={articleId} onNavigate={onNavigate} />
        </li>
      ))}
    </Tag>
  );
}

function parseMarkdownBlocks(markdown, article, nested, usedSlugs) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+?)\s*#*$/);
    if (heading) {
      const level = heading[1].length;
      const label = stripMarkdown(heading[2]);
      const anchor = uniqueSlug(slugify(label), usedSlugs);
      const isTitle = !nested && blocks.length === 0 && level === 1 && label === article.title;

      if (!isTitle) {
        blocks.push({ type: "heading", level, label, anchor });
      }
      index += 1;
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      blocks.push({ type: "hr" });
      index += 1;
      continue;
    }

    if (trimmed.startsWith("```")) {
      const code = [];
      index += 1;
      while (index < lines.length && !lines[index].trim().startsWith("```")) {
        code.push(lines[index]);
        index += 1;
      }
      index += 1;
      blocks.push({ type: "code", code: code.join("\n") });
      continue;
    }

    if (trimmed.startsWith(">")) {
      const quote = [];
      while (index < lines.length && lines[index].trim().startsWith(">")) {
        quote.push(lines[index].replace(/^\s*>\s?/, ""));
        index += 1;
      }
      blocks.push({ type: "blockquote", markdown: quote.join("\n") });
      continue;
    }

    if (trimmed.startsWith("|") && index + 1 < lines.length && isTableDivider(lines[index + 1])) {
      const tableRows = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        tableRows.push(lines[index]);
        index += 1;
      }
      blocks.push({ type: "table", ...parseTable(tableRows) });
      continue;
    }

    const unordered = trimmed.match(/^[-*]\s+(.+)$/);
    if (unordered) {
      const items = [];
      while (index < lines.length) {
        const item = lines[index].trim().match(/^[-*]\s+(.+)$/);
        if (!item) break;
        items.push(item[1]);
        index += 1;
      }
      blocks.push({ type: "list", ordered: false, items });
      continue;
    }

    const ordered = trimmed.match(/^\d+\.\s+(.+)$/);
    if (ordered) {
      const items = [];
      while (index < lines.length) {
        const item = lines[index].trim().match(/^\d+\.\s+(.+)$/);
        if (!item) break;
        items.push(item[1]);
        index += 1;
      }
      blocks.push({ type: "list", ordered: true, items });
      continue;
    }

    const paragraph = [trimmed];
    index += 1;
    while (index < lines.length) {
      const next = lines[index].trim();
      if (
        !next ||
        next.startsWith("#") ||
        next.startsWith(">") ||
        next.startsWith("|") ||
        next.startsWith("```") ||
        next.match(/^[-*]\s+/) ||
        next.match(/^\d+\.\s+/) ||
        /^---+$/.test(next)
      ) {
        break;
      }
      paragraph.push(next);
      index += 1;
    }
    blocks.push({ type: "paragraph", text: paragraph.join(" ") });
  }

  return blocks;
}

function MarkdownBlocks({ markdown, article, onNavigate, nested = false, usedSlugs: usedSlugsProp }) {
  const rootSlugsRef = useRef(null);
  const usedSlugs = usedSlugsProp ?? (nested ? new Map() : (rootSlugsRef.current ??= new Map()));

  const renderedBlocks = useMemo(() => {
    const blocks = parseMarkdownBlocks(markdown, article, nested, usedSlugs);

    return blocks.map((block, blockIndex) => {
    if (block.type === "heading") {
      const level = Math.min(block.level + (nested ? 1 : 0), 6);
      const HeadingTag = `h${level}`;
      return (
        <HeadingTag
          key={`${block.anchor}-${blockIndex}`}
          id={`${article.id}-${block.anchor}`}
          className={cx(
            "group scroll-mt-40 break-words font-semibold text-cream-100",
            level === 1 && "mt-8 text-3xl",
            level === 2 && "mt-8 border-t border-night-800 pt-6 text-2xl",
            level === 3 && "mt-6 text-xl",
            level === 4 && "mt-5 text-lg",
            level >= 5 && "mt-4 text-base",
          )}
        >
          <a
            href={rulesHash(article.id, block.anchor)}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(article.id, block.anchor);
            }}
            className="underline-offset-4 hover:underline"
          >
            {block.label}
          </a>
        </HeadingTag>
      );
    }

    if (block.type === "paragraph") {
      return (
        <p key={`${block.text}-${blockIndex}`} className="my-3 text-sm leading-relaxed text-cream-100">
          <InlineMarkdown text={block.text} articleId={article.id} onNavigate={onNavigate} />
        </p>
      );
    }

    if (block.type === "list") {
      return <MarkdownList key={`${block.items.join("-")}-${blockIndex}`} {...block} articleId={article.id} onNavigate={onNavigate} />;
    }

    if (block.type === "table") {
      return <MarkdownTable key={`${block.headers.join("-")}-${blockIndex}`} headers={block.headers} rows={block.rows} articleId={article.id} onNavigate={onNavigate} />;
    }

    if (block.type === "code") {
      return (
        <pre key={`${block.code}-${blockIndex}`} className="my-4 overflow-x-auto rounded-lg border border-night-800 bg-night-900 p-3 text-sm text-cream-100">
          <code>{block.code}</code>
        </pre>
      );
    }

    if (block.type === "blockquote") {
      return (
        <blockquote key={`${block.markdown}-${blockIndex}`} className="my-4 border-l-2 border-accent-400 bg-night-900/60 py-2 pl-4 pr-3">
          <MarkdownBlocks markdown={block.markdown} article={article} onNavigate={onNavigate} nested usedSlugs={usedSlugs} />
        </blockquote>
      );
    }

    if (block.type === "hr") {
      return <hr key={`hr-${blockIndex}`} className="my-6 border-night-800" />;
    }

    return null;
    });
  }, [markdown, article.id, article.title, nested, onNavigate, usedSlugs]);

  return renderedBlocks;
}

function NavNode({ node, depth, activeId, activeAnchor, expanded, forceExpanded, onToggle, onSelect }) {
  const hasChildren = Boolean(node.children?.length);
  const isExpanded = forceExpanded || Boolean(expanded[node.id]);
  const isActive = node.articleId === activeId && (node.anchor ? node.anchor === activeAnchor : !activeAnchor);
  const indent = { paddingLeft: `${0.5 + depth * 0.85}rem` };

  function handleLabelClick() {
    if (node.articleId) onSelect(node.articleId, node.anchor ?? "");
    else if (hasChildren) onToggle(node.id);
  }

  return (
    <div>
      <div
        className={cx(
          "group flex min-h-9 items-center gap-1 rounded border text-left",
          isActive ? "border-accent-400 bg-accent-500/10" : "border-transparent hover:border-night-700 hover:bg-night-950",
        )}
        style={indent}
      >
        {hasChildren ? (
          <button
            type="button"
            aria-label={isExpanded ? `Collapse ${node.label}` : `Expand ${node.label}`}
            aria-expanded={isExpanded}
            onClick={() => onToggle(node.id)}
            className="grid h-7 w-7 shrink-0 place-items-center rounded text-cream-100 hover:bg-night-800"
          >
            {isExpanded ? <ChevronDown className="h-4 w-4" aria-hidden="true" /> : <ChevronRight className="h-4 w-4" aria-hidden="true" />}
          </button>
        ) : (
          <span className="h-7 w-7 shrink-0" aria-hidden="true" />
        )}
        <button
          type="button"
          onClick={handleLabelClick}
          className={cx(
            "min-w-0 flex-1 py-2 pr-2 text-left text-sm",
            depth === 0 ? "font-semibold text-cream-100" : "font-normal text-cream-100",
          )}
        >
          <span className="block truncate">{node.label}</span>
        </button>
      </div>
      {hasChildren && isExpanded ? (
        <div className="mt-1 space-y-1">
          {node.children.map((child) => (
            <NavNode
              key={child.id}
              node={child}
              depth={depth + 1}
              activeId={activeId}
              activeAnchor={activeAnchor}
              expanded={expanded}
              forceExpanded={forceExpanded}
              onToggle={onToggle}
              onSelect={onSelect}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function RulesWiki() {
  const [query, setQuery] = useState("");
  const initialLocation = parseRulesHash();
  const initialArticleId = articleIdOrDefault(initialLocation?.articleId);
  const [activeId, setActiveId] = useState(initialArticleId);
  const [activeAnchor, setActiveAnchor] = useState(initialLocation?.anchor ?? "");
  const [expanded, setExpanded] = useState({});
  const articleTopRef = useRef(null);

  const articleById = RULES_ARTICLE_BY_ID;

  const filteredArticles = useMemo(() => {
    const needle = normalize(query);
    return RULES_ARTICLES.filter((article) => !needle || article.search.includes(needle));
  }, [query]);

  const filteredArticleIds = useMemo(() => new Set(filteredArticles.map((article) => article.id)), [filteredArticles]);
  const visibleTree = useMemo(() => filterNavTree(RULES_NAV_TREE, filteredArticleIds), [filteredArticleIds]);
  const forceExpanded = Boolean(normalize(query));

  useEffect(() => {
    if (!filteredArticles.length) return;
    const visibleIds = new Set(collectArticleIds(visibleTree));
    if (!visibleIds.has(activeId)) {
      setActiveId(filteredArticles[0].id);
      setActiveAnchor("");
    }
  }, [activeId, filteredArticles, visibleTree]);

  const activeArticle = articleById.get(activeId) ?? filteredArticles[0] ?? RULES_ARTICLES[0];

  useEffect(() => {
    const current = parseRulesHash();
    const articleId = articleIdOrDefault(current?.articleId);
    const anchor = current?.anchor ?? "";
    window.history.replaceState(rulesHistoryState(articleId, anchor), "", rulesHash(articleId, anchor));

    function handlePopState(event) {
      const state = event.state?.noctvaleView === "rules" ? event.state : parseRulesHash();
      if (!state) return;
      setActiveId(articleIdOrDefault(state.articleId));
      setActiveAnchor(state.anchor ?? "");
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const target = activeAnchor ? document.getElementById(`${activeArticle.id}-${activeAnchor}`) : articleTopRef.current;
    target?.scrollIntoView({ block: "start" });
  }, [activeArticle.id, activeAnchor]);

  const toggleNode = useCallback((nodeId) => {
    setExpanded((current) => ({ ...current, [nodeId]: !current[nodeId] }));
  }, []);

  const selectArticle = useCallback((articleId, anchor = "", options = {}) => {
    const nextArticleId = articleIdOrDefault(articleId);
    setActiveId(nextArticleId);
    setActiveAnchor(anchor);

    if (options.replace) {
      window.history.replaceState(rulesHistoryState(nextArticleId, anchor), "", rulesHash(nextArticleId, anchor));
      return;
    }

    window.history.pushState(rulesHistoryState(nextArticleId, anchor), "", rulesHash(nextArticleId, anchor));
  }, []);

  return (
    <main className="mx-auto grid w-full max-w-7xl flex-1 gap-4 px-4 pb-8 pt-4 lg:grid-cols-[20rem_1fr]">
      <aside className="min-w-0 lg:sticky lg:top-[8.75rem] lg:max-h-[calc(100vh-9.75rem)] lg:self-start">
        <div className="rounded-lg border border-night-800 bg-night-900/70 p-3">
          <div className="flex items-center gap-2 text-sm font-semibold text-cream-100">
            <Library className="h-4 w-4 text-accent-300" aria-hidden="true" />
            Rules Index
          </div>
          <label className="mt-3 flex min-h-10 items-center gap-2 rounded border border-night-700 bg-night-950 px-3 text-sm text-cream-300 focus-within:border-accent-400">
            <Search className="h-4 w-4 shrink-0 text-cream-500" aria-hidden="true" />
            <span className="sr-only">Search rules</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search rules"
              className="min-w-0 flex-1 bg-transparent py-2 text-cream-100 outline-none placeholder:text-cream-600"
            />
          </label>
        </div>

        <div className="mt-3 overflow-hidden rounded-lg border border-night-800 bg-night-900/70">
          {visibleTree.length ? (
            <div className="max-h-[28rem] overflow-y-auto p-2 lg:max-h-[calc(100vh-21rem)]">
              {visibleTree.map((node) => (
                <NavNode
                  key={node.id}
                  node={node}
                  depth={0}
                  activeId={activeArticle.id}
                  activeAnchor={activeAnchor}
                  expanded={expanded}
                  forceExpanded={forceExpanded}
                  onToggle={toggleNode}
                  onSelect={selectArticle}
                />
              ))}
            </div>
          ) : (
            <div className="p-4 text-sm text-cream-100">No rules match that search.</div>
          )}
        </div>
      </aside>

      <article ref={articleTopRef} className="min-w-0 scroll-mt-40 rounded-lg border border-night-800 bg-night-950">
        <div className="border-b border-night-800 p-4 sm:p-5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-cream-500">
            <ScrollText className="h-4 w-4 text-accent-300" aria-hidden="true" />
            {activeArticle.category}
          </div>
          <h2 id={`${activeArticle.id}`} className="mt-2 break-words text-2xl font-semibold text-cream-100">
            <a
              href={rulesHash(activeArticle.id)}
              onClick={(event) => {
                event.preventDefault();
                selectArticle(activeArticle.id);
              }}
              className="underline-offset-4 hover:underline"
            >
              {activeArticle.title}
            </a>
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-cream-100">{activeArticle.summary}</p>
        </div>

        <div className="p-4 sm:p-5">
          <MarkdownBlocks markdown={activeArticle.displayMarkdown} article={activeArticle} onNavigate={selectArticle} />
        </div>
      </article>
    </main>
  );
}

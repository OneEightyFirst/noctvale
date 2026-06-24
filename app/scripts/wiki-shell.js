(function () {
  const sidebar = document.getElementById("wiki-sidebar");
  const backdrop = document.getElementById("wiki-backdrop");
  const openButton = document.getElementById("wiki-menu-open");
  const searchInput = document.getElementById("wiki-search");
  const navTree = document.getElementById("wiki-nav-tree");

  function currentPage() {
    const rulesPath = window.location.pathname.split("/rules/")[1] ?? "";
    const trimmedPath = rulesPath.replace(/^\/+|\/+$/g, "");
    if (!trimmedPath || trimmedPath === "index.html") return "index.html";
    if (trimmedPath.endsWith("/index.html")) return trimmedPath;
    if (trimmedPath.endsWith(".html")) return trimmedPath;
    return `${trimmedPath}/index.html`;
  }

  function currentHrefs(page) {
    const explicitHref = `/rules/${page}`;
    const prettyHref = page === "index.html" ? "/rules/" : `/rules/${page.replace(/index\.html$/, "")}`;
    return [...new Set([prettyHref, explicitHref])];
  }

  function setExpanded(toggle, expanded) {
    if (!toggle) return;
    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    toggle.setAttribute(
      "aria-label",
      `${expanded ? "Collapse" : "Expand"} ${toggle.closest(".wiki-nav-row")?.querySelector(".wiki-nav-link")?.textContent?.trim() ?? "section"}`,
    );
    const panel = document.getElementById(toggle.getAttribute("aria-controls"));
    panel?.classList.toggle("is-collapsed", !expanded);
  }

  function expandAncestors(element) {
    let node = element?.closest(".wiki-nav-node");
    while (node) {
      const toggle = node.querySelector(":scope > .wiki-nav-row > .wiki-nav-toggle");
      setExpanded(toggle, true);
      node = node.parentElement?.closest(".wiki-nav-node");
    }
  }

  function markActiveLink() {
    const page = currentPage();
    const hash = window.location.hash.slice(1);

    navTree?.querySelectorAll(".wiki-nav-link").forEach((link) => {
      link.classList.remove("is-active");
    });

    const hrefs = currentHrefs(page);
    let active =
      (hash && hrefs.map((href) => navTree?.querySelector(`a[href="${href}#${hash}"]`)).find(Boolean)) ||
      hrefs.map((href) => navTree?.querySelector(`a[href="${href}"]`)).find(Boolean) ||
      navTree?.querySelector(`a[href$="/${page}"]`);

    if (active) {
      active.classList.add("is-active");
      expandAncestors(active);
    }
  }

  function collapseAllNav() {
    navTree?.querySelectorAll(".wiki-nav-toggle").forEach((toggle) => {
      setExpanded(toggle, false);
    });
  }

  function initNavToggles() {
    navTree?.querySelectorAll(".wiki-nav-toggle").forEach((toggle) => {
      toggle.addEventListener("click", () => {
        setExpanded(toggle, toggle.getAttribute("aria-expanded") !== "true");
      });
    });
  }

  function setMobileNav(open) {
    sidebar?.classList.toggle("is-open", open);
    backdrop?.toggleAttribute("hidden", !open);
    openButton?.setAttribute("aria-expanded", open ? "true" : "false");
    openButton?.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    document.body.classList.toggle("wiki-nav-open", open);
  }

  openButton?.addEventListener("click", () => {
    setMobileNav(!sidebar?.classList.contains("is-open"));
  });

  backdrop?.addEventListener("click", () => setMobileNav(false));

  sidebar?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 1023px)").matches) {
        setMobileNav(false);
      }
    });
  });

  searchInput?.addEventListener("input", () => {
    const needle = searchInput.value.trim().toLowerCase();

    if (needle) {
      navTree?.querySelectorAll(".wiki-nav-toggle").forEach((toggle) => {
        setExpanded(toggle, true);
      });
    } else {
      collapseAllNav();
      markActiveLink();
    }

    navTree?.querySelectorAll(".wiki-nav-node").forEach((node) => {
      const label = node.querySelector(":scope > .wiki-nav-row > .wiki-nav-link")?.textContent?.toLowerCase() ?? "";
      const childText = node.querySelector(":scope > .wiki-nav-children")?.textContent?.toLowerCase() ?? "";
      const visible = !needle || label.includes(needle) || childText.includes(needle);
      node.style.display = visible ? "" : "none";
    });
  });

  initNavToggles();
  markActiveLink();
})();

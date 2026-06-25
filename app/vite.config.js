import react from "@vitejs/plugin-react";
import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const appDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(appDir, "..");

function getGitSha() {
  try {
    return execSync("git rev-parse --short HEAD", { encoding: "utf8", cwd: repoRoot }).trim();
  } catch {
    return "dev";
  }
}

const pkg = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf8"));

const RULES_PAGE_DIRS = ["core-rules", "retinue", "equipment", "campaign"];

export default defineConfig({
  plugins: [
    react(),
    {
      name: "noctvale-html-cache-control",
      transformIndexHtml(html) {
        return html.replace(
          "<head>",
          '<head>\n    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />',
        );
      },
    },
    {
      name: "noctvale-rules-dev-routes",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = new URL(req.url ?? "", "http://localhost");

          if (url.pathname === "/retinue-builder") {
            req.url = `/retinue-builder/${url.search}`;
            return next();
          }

          if (url.pathname === "/retinue-builder/" || url.pathname === "/retinue-builder/index.html") {
            req.url = `/retinue-builder/index.html${url.search}`;
            return next();
          }

          if (url.pathname.startsWith("/retinue-builder/")) {
            return next();
          }

          if (url.pathname.startsWith("/rules/")) {
            const rest = url.pathname.replace(/^\/rules\/?/, "");
            res.statusCode = 302;
            res.setHeader("Location", `/${rest}${url.search}`);
            res.end();
            return;
          }

          if (url.pathname === "/" || url.pathname === "") {
            req.url = `/index.html${url.search}`;
            return next();
          }

          const rulesPage = RULES_PAGE_DIRS.find(
            (slug) => url.pathname === `/${slug}` || url.pathname === `/${slug}/`,
          );
          if (rulesPage) {
            req.url = `/${rulesPage}/index.html${url.search}`;
            return next();
          }

          next();
        });
      },
    },
  ],
  base: "/",
  build: {
    rollupOptions: {
      input: path.resolve(appDir, "retinue-builder/index.html"),
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/@firebase") || id.includes("node_modules/firebase")) return "firebase";
          if (id.includes("node_modules/react-dom") || id.includes("node_modules/react/")) return "react";
          if (id.includes("node_modules/lucide-react")) return "lucide";
        },
      },
    },
  },
  resolve: {
    alias: {
      "@noctvale-rules": repoRoot,
    },
  },
  server: {
    fs: {
      allow: [repoRoot],
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
    __GIT_SHA__: JSON.stringify(getGitSha()),
  },
});

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
        server.middlewares.use((req, _res, next) => {
          const url = new URL(req.url ?? "", "http://localhost");
          if (url.pathname === "/rules" || url.pathname === "/rules/") {
            req.url = `/rules/index.html${url.search}`;
          }

          const rulesPage = url.pathname.match(/^\/rules\/(core-rules|retinue|equipment|campaign)\/$/);
          if (rulesPage) {
            req.url = `/rules/${rulesPage[1]}/index.html${url.search}`;
          }
          next();
        });
      },
    },
  ],
  base: "/",
  build: {
    rollupOptions: {
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

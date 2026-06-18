// Legacy FTP deploy — use scripts/deploy.mjs (Duck + Keychain) instead.
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const deploy = path.join(path.dirname(fileURLToPath(import.meta.url)), "deploy.mjs");
const result = spawnSync(process.execPath, [deploy], { stdio: "inherit" });
process.exit(result.status ?? 1);

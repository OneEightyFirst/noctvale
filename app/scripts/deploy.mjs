import { access, readdir } from "node:fs/promises";
import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "dotenv";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");

config({ path: path.join(rootDir, ".env.local") });

function getEnv(name) {
  const value = process.env[name]?.trim();
  if (!value) {
    console.error(`Missing ${name}. Add it to .env.local (see .env.example).`);
    process.exit(1);
  }
  return value;
}

const host = getEnv("FTP_HOST");
const user = getEnv("FTP_USER");
const remoteDir = getEnv("FTP_REMOTE_DIR")
  .replace(/^\/home\/[^/]+\//, "")
  .replace(/^\//, "");

async function assertDistExists() {
  await access(distDir);
  const entries = await readdir(distDir);
  if (!entries.length) {
    console.error("dist/ is empty. Run npm run build first.");
    process.exit(1);
  }
}

function runDuckUpload() {
  const remoteUrl = `ftp://${user}@${host}/${remoteDir}/`;

  return new Promise((resolve, reject) => {
    console.log(`Uploading dist/ → ftp://${user}@${host}/${remoteDir}/`);
    const child = spawn(
      "duck",
      ["--existing", "overwrite", "--upload", remoteUrl, `${distDir}/`],
      { stdio: ["pipe", "inherit", "inherit"] },
    );

    child.on("error", (error) => {
      if (error.code === "ENOENT") {
        reject(new Error("duck not found. Install with: brew install duck"));
        return;
      }
      reject(error);
    });

    // Decline FTP-SSL upgrade; Cyberduck bookmark uses plain FTP on port 21.
    child.stdin.write("n\n");
    child.stdin.end();

    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`duck exited with code ${code}`));
    });
  });
}

await assertDistExists();
await runDuckUpload();
console.log("Deploy complete.");

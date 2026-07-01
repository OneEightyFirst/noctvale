const requiredFirebaseEnv = [
  "VITE_FIREBASE_API_KEY",
  "VITE_FIREBASE_AUTH_DOMAIN",
  "VITE_FIREBASE_PROJECT_ID",
  "VITE_FIREBASE_STORAGE_BUCKET",
  "VITE_FIREBASE_MESSAGING_SENDER_ID",
  "VITE_FIREBASE_APP_ID",
];

const missing = requiredFirebaseEnv.filter((key) => !process.env[key]);

if (missing.length > 0) {
  console.error("Missing Firebase web app config for the production build:");
  for (const key of missing) {
    console.error(`- ${key}`);
  }
  console.error(
    "Set these in app/.env.local for local builds, or as GitHub Actions repository variables/secrets before deploying.",
  );
  process.exit(1);
}

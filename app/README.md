# Noctvale Retinue Builder

A React and Tailwind retinue builder for Noctvale with Google sign-in and Firestore-backed saved retinues.

Rules prose lives in the parent repo (`intro.md`, `rules/`, `campaign/`). Static HTML rules pages are generated from those files at build time into `public/rules/` (see `npm run build:rules`).

## Run locally

From this directory (`app/`):

```sh
npm install
cp .env.example .env.local   # fill in Firebase values
npm run dev
```

## Firebase setup (one time)

1. Create a Firebase project on the **Spark (free)** plan.
2. Enable **Google** sign-in under Authentication.
3. Create a **Firestore** database (production mode).
4. Register a **web app** and copy config into `.env.local` as `VITE_FIREBASE_*`.
5. Add `localhost` and `noctvalegame.com` to Authentication → Authorized domains.
6. Link the project and deploy rules:

```sh
firebase login
firebase use --add          # pick your project, alias default
npm run deploy:rules
```

Update `.firebaserc` `default` project id or use `firebase use --add`.

## Playtest feedback → GitHub issues

The account menu includes **Send feedback**, which opens a bug report form. Submissions create GitHub issues on [OneEightyFirst/noctvale](https://github.com/OneEightyFirst/noctvale) with `[Playtest · Rules]` or `[Playtest · App]` titles.

This uses a Firebase callable Cloud Function with a GitHub personal access token stored as a secret (not in the client).

**One-time setup (requires Blaze plan for outbound GitHub API calls):**

1. Create a fine-grained GitHub PAT with **Issues: Read and write** on `OneEightyFirst/noctvale` (or a classic PAT with `repo` scope).
2. Store it in Firebase:

```sh
firebase functions:secrets:set GITHUB_TOKEN
```

3. Install function dependencies and deploy:

```sh
npm run deploy:functions
```

(`deploy:functions` runs `npm install` in `functions/` first.)

Optional: add `bug` and `playtest` labels so issues are tagged automatically.

## Deploy to noctvalegame.com

The site deploys through GitHub Actions on every push to `main`. The workflow in
`../.github/workflows/deploy.yml` installs dependencies in `app/`, runs
`npm run build`, and publishes `dist/` to the `gh-pages` branch for GitHub
Pages.

Set the Firebase `VITE_FIREBASE_*` values as GitHub Actions repository
variables or secrets so the production build has the same client config as local
development.

Firestore rules and Cloud Functions are still deployed separately with
`npm run deploy:rules` and `npm run deploy:functions` when those Firebase
resources change.

**Never commit `.env.local`.**

## App flow

1. Sign in with Google
2. **Library** — grid of saved retinues, or empty splash with **Add a retinue**
3. **Editor** — retinue builder with debounced auto-save (~1s) to Firestore

## Current scope

- Stepwise Archetype → Tradition → special Tradition choice → recruitment flow
- Fighter cards for species, stat boosts, Caster, spells, proficiencies, feats, equipment, costs, and rule text
- Legal option filtering for roster caps, Mortal/Caster limits, firearm tiers, armor access, companion access, and weapon proficiency
- Warnings for incomplete stat boosts, spell picks, roster size, caster caps, budget, and weapon slots

## Changelogs

- Game design decisions: `../decision-log.md`
- Builder data and enforcement changes: `rules-updates.md`

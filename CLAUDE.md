# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Orientation

INFINITY-CORE-ENGINE is the static + service stack behind hollywoodimaging.studio (KNOCKSSTUDiOS). The repository is **highly heterogeneous**: it bundles several overlapping runtimes that were dropped in side-by-side rather than unified. Before changing anything, identify which stack the file you are touching belongs to — assumptions made for one stack do not transfer.

The four runtimes that actually compile/run:

1. **Static "engine" frontend** (root `index.html` + `engine-*.html` / `engine-*.js` / `engine-*.css`). Vanilla JS, no bundler. Modules attach to `window.ENGINE_*` globals and are wired together by `engine-init.js` in the order declared in `engine-core-manifest.json` (network handshake → engine bridge → visual protocol → reality‑core → ultra instinct → DOM bindings → sync master). This is what the public site loads.
2. **Vite app** declared in the root `package.json` (`vite --host` / `vite build` / `vite preview`). The scripts exist but the matching `src/` tree is **not currently checked in** — it ships as `INFINITY-CORE-ENGINE-LIVE.tar.gz` and is described in `QUICK_START.md` / `START_HERE.md`. Treat the Vite scripts as aspirational unless that archive has been extracted into the working tree.
3. **Next.js App Router app** under `app/` with `next.config.js` (`output: "export"`, `distDir: "out"`). Supabase-backed auth (`app/auth/*`) and a todos demo (`app/todos`, `app/actions/todos.ts`). Database types live in `types/supabase.ts`. There is no `package.json` entry for `next` — running it requires installing Next + Supabase manually or going through the dev container.
4. **Express services**:
   - `server.js` (root) — tiny static server for `public/` on `PORT || 3000`.
   - `server/start.js` → `server/app.js` — production API with helmet/cors/morgan, mounts `/api` and `/api/engine` routers and JWT auth (`server/auth/authEngine.js`). DB access goes through the pluggable `server/db/dbAdapter.js` (currently a no-op stub).
   - `cinema-engine/server.js` — separate Express service with its own `cinema-engine/package.json` (express + multer + nanoid).
   - `backend/server.js` — older variant; do not confuse with `server/`.

There is also `engine/ai/*.py` (a large pile of thematically-named Python stubs), `ENGINE/` (audio/render/world/os subsystem skeletons), `sentinel/`, `pipeline/`, and `cinematic/` Python scripts. Most of these are scaffolding without runtime entry points — verify a file is actually imported before assuming changes have effect.

## Common commands

The root `package.json` only declares Vite scripts; everything else is run directly with `node`:

```bash
# Top-level Vite app (only works if src/ exists — see "Orientation" #2)
npm install
npm run dev          # vite --host, port 5173 (forwarded by .devcontainer)
npm run build        # vite build
npm run preview      # vite preview

# Static-file Express server for public/
node server.js                 # PORT=3000 by default

# Production API
node server/start.js           # PORT=8080 by default; expects ./routes/*

# Cinema engine (separate package)
cd cinema-engine && npm install && npm start    # node server.js
cd cinema-engine && npm run dev                 # NODE_ENV=development

# Next.js app (no script wired up — install ad hoc)
npx next dev                   # if running the app/ tree
npx next build && npx next export
```

There is **no lint, test, or typecheck script** configured anywhere in the repo. The `.github/dependabot.yml` file is misnamed — it actually contains an "Auto Fix Code" workflow that runs `npm run format --if-present` and `npm run lint --if-present -- --fix` on push to `dev`, both of which are no-ops today. Do not add a placeholder script just to silence the workflow; if you wire up real linting/testing, update that file too (and likely move it to `.github/workflows/`).

## Conventions worth preserving

- **Engine module pattern**: the static frontend assumes every `engine-*.js` registers a global on `window` (e.g. `window.ENGINE_NETWORK_HANDSHAKE`, `window.REALITY_CORE`, `window.ULTRA_INSTINCT`) and exposes either an `init()` or `applyState(state)` method. New subsystems must be added both as a `<script>` reference in the consuming HTML and as an entry in `engine-core-manifest.json` so `engine-init.js` boots them in order.
- **Server module shape** (under `server/`): files use ES module `export` but also append `if (typeof module !== "undefined" && module.exports) { module.exports = { ... } }` for CommonJS interop. Preserve this dual export when editing existing files in that tree.
- **Auth**: `server/auth/authEngine.js` reads `JWT_SECRET` from env and falls back to a literal placeholder. Any new protected route should go through the exported `requireAuth` middleware rather than rolling its own header parsing.
- **Brand tokens** (per `.github/copilot-instructions.md` and `index.html` `:root` vars): black background `#02030a`/`#000`, primary cyan `#00F0FF` (also referenced as `#00FFFF`), accent gold `#FFD700`, supporting `#FF3B3B` / `#00FF88` / `#B040FF`. Typography is Orbitron + Space Mono + Inter from Google Fonts. Keep dark-theme defaults and the cinematic/industrial aesthetic when editing UI.
- **Deploy targets**: `vercel.json` aliases `infinitycore.studio` and `hollywoodimaging.studio`, expects `VITE_API_KEY`/`VITE_STRIPE_KEY`/`VITE_AI_ENDPOINT`, and rewrites all routes to `/index.html`. `next.config.js` configures static export to `out/`. The repo also targets GitHub Pages via `CNAME`. A change that affects routing or asset paths usually needs to be reflected in all three.

## Repo hygiene

The root contains a large amount of stray content: DNS notes, "FORTRESS LAYER" / "ZERO-TRUST" / "UIGM-*" memos, single-line scratch files, and files whose names are full sentences or contain spaces (e.g. `app.use("`, `cinema ` with a trailing space, `gh repo clone KNOCKSSTUDiOS-labs`). These are documentation artifacts, not code — do not import from them, do not assume they are authoritative, and do not delete them as part of unrelated changes.

`.gitignore` already excludes `.env*`, `node_modules/`, `dist/`, `.next/`, `out/`, `.vercel/`, and `coverage/`. The committed `.env` and `.env.local` only contain Supabase **publishable** (public) keys; do not add anything else there.

## CODEOWNERS / review

`CODEOWNERS` requires `@KNOCKSSTUDiOS` review on `/.github/`, `/ENGINE/`, `/sentinel/`, `/pipeline/`, `/index.html`, `/vercel.json`, and `/CNAME`. Plan PRs accordingly — splitting unrelated changes out of those paths avoids blocking the rest of a change on owner review.

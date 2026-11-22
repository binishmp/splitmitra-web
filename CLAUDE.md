# Rules for every change to this repo
1. Show designs first, then change code (owner's rule). The approved design is the "Website home page" board on the "Split app demo screens" canvas.
2. Every change bumps the version: `npm run bump -- patch|minor|major`, then replace the placeholder line in `CHANGELOG.md`.
3. Never run or add a workflow that runs on push. Publishing is by hand only (`.github/workflows/deploy.yml`, workflow_dispatch) or from the owner's computer. Ask the owner before publishing.
4. This repo is PUBLIC: never commit secrets (service-account keys, payment keys, .env). Secrets live in GitHub Secrets or the app repo's Worker.
5. `public/app` is the web app copied from the app repo's `web/` build; don't edit it by hand.
6. Plain, simple wording (the owner reads it). Site texts, prices and links live in `src/content.ts`.

# Project notes
- React 19 + Vite + TypeScript, no router library: `src/main.tsx` picks the page from the path (/, /privacy, /terms, /delete-account).
- Firebase Hosting (`firebase.json`): `/app/**` → the web app, everything else → `index.html`.
- Colours from the logo: green #27A66F (dark #1E7F55 for text and buttons), orange #FDA51F. Fonts: Montserrat headings, Inter body, Noto Sans for Malayalam, Tamil, Hindi.
- Checks before pushing: `npm run build` (type check + build) and `npm run check:version`.

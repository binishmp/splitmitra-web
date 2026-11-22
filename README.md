# SplitMitra website
The public site for SplitMitra: home page, Privacy Policy, Terms and Delete my account, built with React + Vite and
served by Firebase Hosting (free plan). The web app (PWA) is built in the app repo
([splitmitra-react-native-app](https://github.com/binishmp/splitmitra-react-native-app)) and copied into `public/app`, so it is served at `/app`.

## Edit
- Texts, links, prices, FAQ: `src/content.ts` (Play Store link, support email, Pro price).
- Home page: `src/pages/Home.tsx` · legal pages: `src/pages/Legal.tsx` (drafts: get them checked before launch) · styles: `src/styles.css`.
- Logo and icons: `public/img`, `public/favicon.ico`.

## Run and build
```
npm install
npm run dev      # http://localhost:5173
npm run build    # type check + build into dist/
```

## Publish (Firebase Hosting)
1. Put the Firebase project id in `.firebaserc`.
2. Either publish from your computer: `npx firebase-tools login` once, then `npm run build && npx firebase-tools deploy --only hosting`,
3. or add the secret `FIREBASE_SERVICE_ACCOUNT` and run **Actions → Publish website** by hand. Pushing never publishes.

## Versions
Every change: `npm run bump -- patch|minor|major`, then describe it in `CHANGELOG.md`.

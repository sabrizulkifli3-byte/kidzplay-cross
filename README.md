# KidzPlay — Kids Educational Games

A bilingual (English / Bahasa Malaysia) React + TypeScript + Vite Progressive Web App for phones, tablets, and desktop browsers. It is installable on iOS and Android as a PWA; it is not a native App Store / Play Store package.

## Run locally
1. Install Node.js 20+.
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev` and open the local Vite URL shown in the terminal.

## Production build
- `npm run build`
- `npm run preview` to test the production build locally.
- Deploy the `dist/` folder to a static host with HTTPS (Netlify, Vercel, Cloudflare Pages, or GitHub Pages with appropriate base path).

## Install on iPhone / iPad
1. Open the deployed HTTPS site in **Safari**.
2. Tap Share.
3. Choose **Add to Home Screen**.
4. Tap Add. Open KidzPlay from the new icon.

## Install on Android
1. Open the deployed HTTPS site in **Chrome**.
2. Tap the Install app banner/menu item (or **Install app / Add to Home screen**).
3. Confirm installation and open KidzPlay from the launcher.

## Offline/PWA notes
The Vite PWA plugin generates a service worker and precaches production assets. The Web App Manifest and icon assets are included in `public/`. A first visit to the deployed site is required before offline use is available. All saved game progress uses local browser storage on that device.

## Project files
- `src/App.tsx`: app screens and game interactions
- `src/style.css`: styling and responsive layout
- `src/main.tsx`: React entry point
- `vite.config.ts`: Vite and PWA configuration
- `public/manifest.webmanifest`: PWA metadata
- `public/`: app icons

## Privacy
The app is designed for local-only progress and has no analytics or advertising integration. Font styling uses system fallback fonts so the app does not need to request remote font files.

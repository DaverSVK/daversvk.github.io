# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at localhost:3000 (hot reload)
npm run build      # Production build → /build
npm test           # Run Jest tests
npm run deploy     # Build + deploy to GitHub Pages (daversvk.github.io)
```

No custom lint command — ESLint runs through CRA defaults (`react-app` preset). To lint manually: `npx eslint src/`.

## Architecture

React 17 SPA bootstrapped with Create React App, deployed to GitHub Pages. No TypeScript, no global state management.

**Routing** (`src/App.js`): React Router v6 with a 1200ms preloader on mount.
- `/` — renders Home + About + Projects sections stacked on one page
- `/resume` — PDF viewer (react-pdf with CDN worker)
- `/automatic_greenhouse` — detailed project sub-page
- `*` — redirects to `/`

**Component layout:**
- `src/components/` — one folder per page section (Home, About, Projects, Resume, ProjectsList)
- `Navbar.js` / `Footer.js` — persistent across all routes
- `Pre.js` — preloader; `ScrollToTop.js` — scroll utility; `Particle.js` — currently disabled

**Styling:** Bootstrap 5 + React Bootstrap for layout, custom CSS variables in `style.css` for theming (green accent `#009200`, `--imp-text-color`, `--section-background-color`).

**Assets:** `src/Assets/` holds images and the resume PDF (`CV_EN_DavidSzepvolgyi.pdf`). Project screenshots live in `src/Assets/Projects/`.

**PDF viewer** in `src/components/Resume/ResumeNew.js` scales at 1.7× on desktop and 0.6× on mobile via window width check.

## Deployment Notes

`package.json` sets `"homepage": "https://daversvk.github.io"` — required for correct asset paths on GitHub Pages. `npm run deploy` uses `gh-pages -d build` and automatically runs `npm run build` first via the `predeploy` script.
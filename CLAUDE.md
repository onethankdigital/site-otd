# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:5173)
npm run build     # Production build → dist/
npm run lint      # ESLint
npm run preview   # Preview built output locally
```

Deploy: upload `dist/` contents to Napoleon Host cPanel. The `public/.htaccess` is copied automatically into `dist/` on build and handles SPA routing.

> `build-producao/` in the repo root is a committed production build artifact — not source.

## Architecture

### Routing

This project uses **manual path matching** — not react-router-dom. `App.jsx` reads `window.location.pathname` and returns different component trees via a chain of `if` blocks. Navigation uses `window.history.pushState` + a `popstate` event listener.

When adding a new route, update **two files**:
1. `src/App.jsx` — add a new `if (currentPath === '/slug' || currentPath === '/slug/')` block
2. `vite.config.js` — add the path to the `paths` array (drives sitemap generation)

### Component vs Page distinction

- `src/components/` — homepage sections rendered inside the home route (Hero, Navbar, ServicosCards, HorizontalScroll, Philosophy, Protocol, Footer, Quiz, Pilares, Historia, etc.)
- `src/pages/` — standalone route pages (BlogPage, BlogPostPage, CasesPage, ServicosGMN, ServicosSite, ServicosSEO, ServicosAutomacao, PrivacidadePage, TermosPage)

All components after `Hero` and all pages are `React.lazy` + `Suspense` for performance.

### Blog content

All blog articles live in `src/data/blogPosts.js` as structured JS objects (slug, sections, images). There is no CMS. Adding a post requires editing this file and adding the slug to the `paths` array in `vite.config.js`.

### Design tokens (Tailwind)

| Token | Value | Use |
|---|---|---|
| `bg-background` | `#050505` | Page background |
| `text-primary` | `#FFFFFF` | Body text |
| `accent` | `#e0040b` | OTD red — CTAs, highlights |
| `dark` | `#111111` | Cards, secondary surfaces |

Fonts: `font-heading` (Space Grotesk), `font-drama` (DM Serif Display), `font-mono` (Space Mono) — loaded via Google Fonts in `index.html`.

### Animations

GSAP + ScrollTrigger is the animation engine. `gsap.registerPlugin(ScrollTrigger)` is called once at the top of `App.jsx`. Each component that uses GSAP should do so inside `useLayoutEffect` with a `gsap.context()` that is reverted on cleanup.

### Global UI elements

`CustomCursor`, `CookieBanner`, and `WhatsAppButton` appear on every route — rendered outside the lazy `Suspense` boundary. The default browser cursor is hidden globally in `index.css`. The `.noise-overlay` div (SVG texture, `z-index: 100`, `pointer-events: none`) also appears on every route.

### SEO

Use `react-helmet-async` (`<Helmet>`) inside each page component for per-route `<title>` and meta tags. The `HelmetProvider` wraps the app in `main.jsx`.

## Key constraints

- **JavaScript (JSX), not TypeScript** — this project predates the TypeScript standard; do not convert existing files without being asked
- `vite.config.js` imports `blogPosts.js` at build time — keep that file's export shape stable
- `modulePreload: false` is intentional (PageSpeed optimization); do not remove it
- Performance target: PageSpeed ≥ 90 mobile / 95 desktop — validate after adding heavy dependencies

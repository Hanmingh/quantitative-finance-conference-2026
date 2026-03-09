# Quantitative Finance Conference 2026 Website

Public website for **Quantitative Finance Conference 2026** and the associated **QF2026 Summer Program** pages (Program, Summer School, Workshop).

## Tech stack

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui components
- React Router (client-side routing)

## Quick start (local)

Prerequisites: **Node.js** (recommended 18+), **npm**

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Scripts

```bash
npm run dev      # start dev server
npm run build    # typecheck + production build
npm run preview  # preview the production build locally
```

## Pages / routes

- `/` → Conference (`src/pages/Conference.tsx`)
- `/program` → Program (`src/pages/Program.tsx`)
- `/summer-school` → Summer School (`src/pages/SummerSchool.tsx`)
- `/workshop` → Workshop (`src/pages/Workshop.tsx`)

## Updating content

- **Page content**: `src/pages/*`
- **Keynotes**: `src/data/keynotes.ts`
- **Organizers**: `src/data/organizers.ts`
- **Navbar / navigation**: `src/components/navbar.tsx`

## Deployment notes (SPA routing)

This is a single-page app. If you deploy to static hosting, configure a fallback so **all routes serve `index.html`** (otherwise deep links like `/program` may 404).

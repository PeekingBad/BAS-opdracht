# Parts Finder

A mini Parts Finder for mechanics and workshops to quickly find the right truck part and compile a quote list. Built as a technical assignment for BAS World.

The original assignment can be found in [ASSIGNMENT.md](./ASSIGNMENT.md).

## Getting started

Requirements: Node.js 24 (LTS) and pnpm.

```bash
pnpm install   # install dependencies
pnpm dev       # start the dev server on http://localhost:3000
pnpm test      # run the tests
pnpm build     # build for production
```

## Tech stack

- Nuxt 4 + Vue 3
- TypeScript
- Tailwind CSS v4 (via the official Vite plugin)
- Pinia for the quote list
- @nuxt/icon with the Lucide icon set
- Vitest + @nuxt/test-utils for testing

## Features

- **Overview page** with part cards in a responsive grid (name, OEM number, brand, condition, price and stock)
- **Search** on part name or OEM number
- **Filters** on brand (multi-select) and condition, in a sidebar
- **Sorting** on price (low to high / high to low)
- **Empty state** with a button to clear all filters
- **Detail page** with a larger image, specifications and an "Add to quote" button
- **Custom error page** for unknown parts or routes
- **Quote list** in a drawer, with quantities, line totals, a total excl. VAT and remove buttons

## Project structure

For the folder and file structure, I followed the [Nuxt 4 directory structure docs](https://nuxt.com/docs/4.x/directory-structure).

```
app/
  components/   PartCard, StockBadge, FilterSidebar, QuoteDrawer
  layouts/      default layout with header
  pages/        overview (index) and detail page (parts/[id])
  stores/       Pinia store for the quote list
  utils/        formatPrice, filterParts, sortParts
  error.vue     custom error page
server/
  api/parts/    mock API: GET /api/parts and GET /api/parts/[id]
  data/         mock parts data
shared/
  types/        Part type, used by both the server and the app
test/
  unit/         tests for plain functions
  nuxt/         tests for components
```

## Choices I made

- **PNPM instead of NPM.** I use pnpm instead of npm for package management to ensure reliable, fast, and space-efficient builds.
- **Mock API as real server routes.** The app fetches data over HTTP from `/api/parts`, just like it would from a real backend. Replacing the mock with a real API would only require changes in `server/`.
- **Shared `Part` type in `shared/types/`.** Both the server and the app use the same type, so they can't drift apart.
- **Native `<dialog>` for the quote drawer.** The browser handles focus, the Escape key and the backdrop, which keeps it accessible without extra code.
- **Stretched link on the part cards.** The whole card is clickable, but there's only one short link for screen readers, and there's room for a button on the card later.
- **B2B details:** prices are shown excl. VAT, the colours follow the BAS brand, and the layout (filters on the left, sorting on the right) follows the BAS website so it feels familiar.


## What I would improve with more time

- Persist the quote in `localStorage`, storing only IDs and quantities and fetching fresh data on load, so prices are always up to date
- Quantity controls (+ / –) in the quote drawer
- "Available in colour" badge and colour selector
- More tests, for example for the quote store and sorting
- A collapsible filter menu on mobile
- Extract more parts of the pages into separate components to keep the code clean

## AI usage

Nuxt, Vue and testing were new to me when I started this assignment. I used AI as a mentor: it explained the concepts step by step, suggested code, and reviewed what I wrote. I made the decisions on structure, design and features by reading the Nuxt docs, adapted the code to my own preferences, and made sure I understand it.
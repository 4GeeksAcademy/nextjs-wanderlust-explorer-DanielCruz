# Wanderlust Labs — Experience Explorer

A Next.js App Router application for discovering, searching, and saving travel experiences from a local mock dataset.

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
  app/              → App Router pages
  components/       → Reusable UI components
  data/             → Local mock experience dataset
  hooks/            → Custom React hooks
  types/            → Shared TypeScript interfaces
```

## Routes

- `/` — Home with hero and CTA
- `/experiences` — Experience explorer grid
- `/experiences/[id]` — Experience detail page
- `/favorites` — Saved favorites
- `/profile` — User profile

## Design References

This project uses real travel discovery products as design references:

1. [GetYourGuide](https://www.getyourguide.com/) — inspiration for travel activity discovery, experience cards, ratings, pricing, and category-led browsing.
2. [Airbnb](https://www.airbnb.com/) — inspiration for clean card spacing, heart-based saving, responsive browsing, and favorites behavior.
3. [Viator](https://www.viator.com/) — inspiration for search-results filtering, comparison-friendly cards, and destination/activity marketplace structure.

These references are used for UX and visual direction only. This project does not copy logos, branding, proprietary layouts, or protected assets.

## Image Credits

Travel imagery used in this project was sourced from Unsplash and/or Pexels under their free-use licenses. Images are used for portfolio/demo purposes only.

Attribution is appreciated by the original image platforms and photographers.

- Croatia sailing image — Pexels / Pixabay
- Peru hiking image — Pexels / Nappy
- Desert adventure image — Pexels / Pixabay
- Kayaking coast image — Pexels / Quang Nguyen Vinh
- Kyoto culture image — Unsplash / Banter Snaps
- Morocco market image — Pexels / Pixabay
- Historic neighborhood image — Pexels / Pixabay
- Museum gallery image — Pexels / Pixabay
- Bangkok street food image — Unsplash / Chad Montano
- Tuscany food image — Unsplash / Eaters Collective
- Local market food image — Pexels / Ella Olsson
- Bali wellness image — Pexels / Polina Tankilevitch
- Thermal springs image — Pexels / Taryn Elliott
- Spa retreat image — Pexels / Shvets Anna
- Iceland nature image — Unsplash / v2osk
- Costa Rica rainforest image — Pexels / Pixabay
- Swiss Alps hiking image — Pexels / eberhard grossgasteiger
- Coastal landscape image — Unsplash / Sean O.
- Waterfall forest image — Unsplash / Kalen Emsley

## Scripts

```bash
npm run dev     # Start development server
npm run build   # Production build
npm run lint    # Run ESLint
npm run start   # Start production server
```

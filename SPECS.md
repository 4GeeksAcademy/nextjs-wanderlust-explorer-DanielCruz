# Wanderlust Explorer — Project Specs

A Next.js App Router project for exploring, searching, and favoriting travel
experiences from a local mock dataset.

## Stack

- **Framework:** Next.js (App Router), scaffolded via:
  ```
  npx create-next-app@latest nextjs-wanderlust-explorer --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
  ```
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS
- **State:** React built-ins only — `useState`, `useEffect`, custom hooks.
  No Context API, no Redux/Zustand/Jotai, no other state library.
- **Data:** Local TypeScript file (`src/data/experiences.ts`), 100 mock
  experience objects. No backend, no database, no API routes.
- **Persistence:** None. Favorites live in component state for this phase.
  `localStorage` is explicitly out of scope.
- **Repo:** Public GitHub repo, `nextjs-wanderlust-explorer`.

## Folder structure (driven by `--src-dir`)

```
src/
  app/
    page.tsx                  → /
    experiences/
      page.tsx                → /experiences
      [id]/
        page.tsx              → /experiences/[id]
    favorites/
      page.tsx                → /favorites
    profile/
      page.tsx                → /profile
    layout.tsx                 (root layout — owns favorites state, renders Navbar)
  components/
    Navbar.tsx
    ExperienceCard.tsx
    SearchBar.tsx
    FilterBar.tsx
    ... (split further as needed)
  hooks/
    useExperiences.ts  or  useFilters.ts   (at least one custom hook)
  data/
    experiences.ts
  types/
    experience.ts        (interface Experience)
```

## Data model

```ts
interface Experience {
  id: string;
  title: string;
  description: string;
  category: 'Adventure' | 'Culture' | 'Food' | 'Wellness' | 'Nature';
  destination: string; // city + country, e.g. "Kyoto, Japan"
  price: number;
  rating: number;
  imageUrl: string; // placeholder image, any source
}
```

- Defined once, used consistently everywhere (components, hooks, props). No `any`.
- 100 objects total, generated via AI assistant, saved to `src/data/experiences.ts`.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero section + CTA button that navigates to `/experiences` |
| `/experiences` | Explorer — all 100 cards in a grid, with search bar + category filter + destination filter |
| `/experiences/[id]` | Detail — full info for one experience, looked up by ID from the local dataset |
| `/favorites` | Favorites — only experiences currently in the favorites state |
| `/profile` | Profile — static mock user profile + count of saved favorites |

All navigation between pages must be client-side (no full-page reloads) —
use `next/link` or `useRouter`, never `<a href>`.

## Search & filtering

- **Search:** filters by title using a case-insensitive regex:
  ```ts
  new RegExp(term, 'i').test(experience.title)
  ```
  Not `.includes()`, not a fuzzy-match library.
- **Category filter:** one of the 5 fixed categories. Works independently.
- **Destination filter:** by city or country. Works independently.
- **Combining:** search term + category + destination combine as a logical
  AND — all active filters must apply simultaneously.
- **URL sync:** active search term and filters are reflected as query
  params (e.g. `?q=hiking&category=Adventure&destination=Peru`) using
  `useSearchParams` and `usePathname`.
- **On load:** existing query params are read on mount, used to pre-fill the
  search/filter inputs, and applied immediately — not just on next user
  interaction.
- **No results:** Explorer grid shows a "No results found" message when the
  combined filters produce zero matches.

## Favorites

- A single `useState<string[]>` (or `Set<string>`) holding favorited IDs,
  owned at a shared level (e.g. root layout or a shared parent) and passed
  down via props.
- Each `ExperienceCard` shows a heart icon that toggles favorite status via
  a handler passed down as a prop.
- Heart icon visually reflects current favorite state (filled vs outline).
- `/favorites` page reads from the same state to show only favorited items.
- `/profile` page reads the count from the same state.
- No persistence across refreshes required or expected.

## Required components (minimum)

`ExperienceCard`, `SearchBar`, `FilterBar`, `Navbar` — split further if a
page would otherwise hold too much inline JSX.

- **Navbar:** present on every page; active link styled using `usePathname`
  (compare current pathname against each link's `href`).

## Required hooks

- `useEffect` used meaningfully at least once (e.g. syncing filtered results
  when query params change, or setting `document.title` on the detail page).
  Correct dependency arrays — no infinite loops, no missing dependencies.
- At least one custom hook encapsulating real logic (e.g. `useExperiences`
  or `useFilters`) — not a trivial pass-through wrapper.

## UI requirements

- Responsive on mobile and desktop.
- Visually coherent across all 5 pages (consistent spacing, type, color use).
- Design references documented below — copy the section as-is into
  `README.md` under its own `## Design References` heading.

## Design References

This project's visual and interaction design is inspired by three real
travel marketplace products, adapted into a lightweight, simplified build.
Copy this section as-is into `README.md` under its own `## Design
References` heading.

1. **[GetYourGuide](https://www.getyourguide.com/)** — primary reference for
   the Explorer page. Borrowed: image-forward experience cards, category-based
   discovery, and the card metadata hierarchy (image → category/type badge →
   title → destination → rating with review count → price). GetYourGuide's
   own filtering spans time, destination, interest/category, price, and
   rating — this project simplifies that down to category + destination +
   title search.

2. **[Airbnb](https://www.airbnb.com/)** — reference for visual restraint and
   the favorites interaction model: heart icon on each card toggling
   saved/unsaved state, minimal white space, simple active-link navigation.

3. **[Viator](https://www.viator.com/)** — reference for search/filter
   interaction behavior: combining a search term with category and
   destination filters, showing a result count, and a clear empty state when
   filters produce no matches.

This app does not replicate any of these products' branding, layouts, or
booking functionality — it borrows interaction patterns and applies them to
a much smaller, static, client-state-only dataset of 100 mock experiences.

**Optional, additive nice-to-have:** a Viator-style result count (e.g. "42
results found") alongside the required "No results found" empty state.
This isn't a rubric requirement — don't let it take time away from the
items in the Definition of Done below.

## Explicit non-goals / things to avoid

- No Context API, Redux, Zustand, or any external state library.
- No Server Components handling filtering/favorites logic — this app is
  intentionally client-state-driven for grading purposes.
- No `localStorage` or any other persistence layer.
- No API routes or backend — data is a static imported TypeScript file.
- No testing setup, CI config, or extra abstraction layers beyond what's
  specified here — keep scope tight to the rubric.

## Definition of done

- [ ] 5 pages exist with working client-side navigation
- [ ] Search filters by title via case-insensitive regex
- [ ] Category and destination filters work independently and combine with search
- [ ] Search term + filters reflected in URL as query params
- [ ] Query params on load pre-fill inputs and pre-apply filtering
- [ ] `useEffect` used correctly (proper deps, no loops)
- [ ] `useState` manages favorites, passed down via props
- [ ] At least one custom hook encapsulates real logic
- [ ] App split into logical components — no single file holds everything
- [ ] TypeScript interfaces defined and used consistently, no `any`
- [ ] Responsive and visually coherent across pages
- [ ] Design References section copied into README.md
- [ ] "No results found" state on Explorer
- [ ] Navbar on all pages with active-link styling via `usePathname`

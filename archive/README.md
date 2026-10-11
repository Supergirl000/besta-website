# Preserved dashboard prototype

`besta-dashboard-prototype-2026-10-05.zip` preserves the previous demo before the Phase 1 architectural correction. It is not a second running application and is not published from `public/`.

Original source locations:

- `src/app/admin/`: route, layout and dashboard styles.
- `src/components/dashboard.tsx`: demo interface.
- `src/lib/dashboard.ts`: explicitly fictional fixtures.
- `scripts/verify-dashboard.mjs`: prototype checks.

The prototype is excluded from the active Next.js routes. The future business system must be designed as a separate project only when the user explicitly starts Phase 2. Its reports must derive from stored data, with empty states instead of fictional sales figures.

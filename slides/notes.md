# Notes

## Agenda zeigen

## Intro

### https://remix.run/

- SSR vs CSR vs SSG
- Fetch-Render-Waterfall
- Nested Routes
  - Alle Daten für Route bekannt
  - Einfaches Prefetching

### [Technical Explanation](https://remix.run/docs/en/v1/pages/technical-explanation)

- "react-router on steroids"
- Vergleich Vite
  - Benutzen beide esbuild
- [Vergleich NextJS](https://remix.run/blog/remix-vs-next)

### [Philosophy](https://remix.run/docs/en/v1/pages/philosophy)

- Entwickler von React Router und KCD
- "You can make your server fast, but you can't control the user's network."
- WebStandards (Fetch API, Browser Behavior)
- Progressive Enhancement

## Coding Examples

- [Conventions](https://remix.run/docs/en/v1/api/conventions)
- [File-Based Routing](https://remix.run/docs/en/v1/guides/routing)
  - https://remix.run/docs/en/v1/guides/routing#defining-routes
- [Route Module](https://remix.run/docs/en/v1/api/conventions#route-module-api)
  - default export
  - loader
  - action
  - headers, meta, links
  - CatchBoundary
  - ErrorBoundary
- [Remix-Stacks](https://remix.run/docs/en/v1/pages/stacks)
  - Siehe [README.md](../README.md)
- [Prisma](https://www.prisma.io/docs/concepts/components/prisma-schema#example)
  - [Schema File](../prisma/schema.prisma)
  - [Seed File](../prisma/seed.ts)
  - `npm run setup` nach Schema Änderungen

### Repo-Setup

- git clone https://github.com/davidjbng/lets-code-remix.git
- gh repo fork --clone davidjbng/lets-code-remix
- `npm i`
- `npm run setup`
- `npm run dev`

## Aufgaben

[TASKS.md](../TASKS.md)

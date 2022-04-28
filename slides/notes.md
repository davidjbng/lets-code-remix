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

- [Remix-Stacks](https://remix.run/docs/en/v1/pages/stacks)
  - Siehe [README.md](../README.md)
- [Conventions](https://remix.run/docs/en/v1/api/conventions#file-name-conventions)
  - [entry.server.tsx](../app/entry.server.tsx) / [entry.client.tsx](../app/entry.client.tsx)
  - [root.tsx](../app/root.tsx)
- [File-Based Routing](https://remix.run/docs/en/v1/guides/routing)
  - https://remix.run/docs/en/v1/guides/routing#defining-routes
- [Route Module](https://remix.run/docs/en/v1/api/conventions#route-module-api)
  - default export
    - _/settings_
  - `loader`
    - Läuft nur serverseitig, kommt nicht ins Browser bundle
    - Beispiel: load settings from db (accent-color)
  - meta, links, headers
  - CatchBoundary
  - ErrorBoundary
- [Module Constraints](https://remix.run/docs/en/v1/guides/constraints#no-module-side-effects)
  - No side effects: `console.log(prisma)`
- [Forms](https://remix.run/docs/en/v1/guides/data-writes)
  - Basic Html Form
    - form mit text input input
    - `action`
      - save settings
  - [Form Validation](https://remix.run/docs/en/v1/guides/data-writes#form-validation)
    - kein Javascript
  - `<Form/>` mit pending UI
- [Prisma](https://www.prisma.io/docs/concepts/components/prisma-schema#example)
  - [Schema File](../prisma/schema.prisma)
  - [Seed File](../prisma/seed.ts)
  - `npm run setup` nach Schema Änderungen

### Repo-Setup

- git clone https://github.com/davidjbng/lets-code-remix.git
- gh repo fork --clone davidjbng/lets-code-remix (Github Actions 🎉)
- `npm i`
- `npm run setup`
- `npm run dev`

## Aufgaben

[TASKS.md](../TASKS.md)

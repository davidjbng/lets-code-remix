# Tasks

## List Projects

1. Neue Seite _/projects_
2. Link in Navigation hinzufügen - [root.tsx](app/root.tsx)
3. Neues DB Model anlegen - [prisma.schema](prisma/schema.prisma) (siehe: [Prisma Schema](https://www.prisma.io/docs/concepts/components/prisma-schema))
   1. Title
   2. Description
   3. StartDate
   4. _optional_ Tags (n zu m)
4. Dummy Projects in [seed.ts](prisma/seed.ts) anlegen
5. DB Migration ausführen mit `npm run setup`
6. Zeige eine Liste aller Projekte an (siehe: [Data Loading](https://remix.run/docs/en/v1/guides/data-loading))

## Create Projects

1. Neue Seite _/projects/new_
2. Link unter _/projects_ hinzufügen
3. Form für Project hinzufügen (siehe: [Data Writes](https://remix.run/docs/en/v1/guides/data-writes))
   1. Title (input)
   2. Description (textarea)
   3. StartDate (date-picker)
   4. Tags (multi select)
4. Project innerhalb `action` speichern
5. Validierung
   1. Titel: required
   2. Start-Datum: >= heute
   3. Tags: mind. 1

## Link Notes -> Project

1. Prisma Schema anpassen: Jede Note kann einem Projekt zugeordnet werden
2. Project Auswahl (select) in _notes/new_ hinzufügen

# Project conventions

<!-- Keep this under 200 lines. When it grows, split into .claude/rules/ -->

## Commands

```bash
npm run dev          # Dev server, localhost:3000
npm run build        # Production build
npm run typecheck    # TypeScript, must pass before merge
npm run lint         # ESLint, must pass before merge
npm run test         # Vitest unit tests
npm run test:e2e     # Playwright end-to-end
```

## Stack

Locked. Do not introduce alternatives without asking.

- Next.js, App Router
- TypeScript, strict mode
- Tailwind CSS + shadcn/ui
- Supabase (Postgres, auth, storage)
- Vitest (unit), Playwright (e2e)
- Deployed on Vercel

## Structure

```
app/            Routes. Server Components by default.
components/     Shared UI. One component per file.
lib/            Business logic, database queries, utilities.
specs/          What each feature should do. Read before building.
decisions.md    Why things are the way they are.
```

## Rules

- Server Components by default. `"use client"` only when the component needs
  interactivity, and say why in the file header.
- Database access lives in `lib/`, never in a component.
- Every table has row-level security enabled. No exceptions, no "I'll add it later".
- Money is stored as integer cents. Never floats.
- Timestamps stored UTC, converted at display time only.
- All user input validated server-side with Zod, even when the form already
  validates in the browser.
- Named exports, not default exports.
- Tests sit next to source: `foo.ts` -> `foo.test.ts`.

## Environments

Work flows local -> preview -> production. Never skip preview.

Never run migrations or scripts against the production database. If a task
seems to require it, stop and ask.

## Before building a feature

Check `specs/` for a spec. If there isn't one, ask me to write one or run
`/spec` first. Don't build from a one-line description.

## Before finishing a task

- `npm run typecheck && npm run lint && npm run test` all pass
- New behaviour has a test
- Tell me the command to verify it and what I should click through in preview

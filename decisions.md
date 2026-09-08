# Decisions

One entry per non-obvious choice. Newest at the top. Keep each to a paragraph.
Write these as you go. The point is that in four months you know why something
is the way it is, instead of relitigating it.

Format:

## YYYY-MM-DD — <the decision>
**Context:** what problem forced a choice
**Decision:** what we did
**Alternative:** what we didn't do, and why not

---

## 2026-01-01 — Locked the stack
**Context:** Every technical choice I can't personally evaluate is one the AI
will make differently each time, and inconsistent choices compound into a
codebase nobody understands.
**Decision:** Next.js, TypeScript strict, Tailwind, Supabase, Vercel. Frozen
for the life of the project.
**Alternative:** Choosing per feature. Rejected — the flexibility is worthless
to me because I can't evaluate the tradeoffs anyway, and the inconsistency is
expensive.

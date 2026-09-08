---
description: Audits the project against the production-readiness checklist before a launch or major deploy
disable-model-invocation: true
---

## Current state

!`git status --short && echo "---" && git log --oneline -10`

Audit this project for production readiness. Check each item below by actually
looking at the code and config. Do not assume anything passes because it usually
does, and do not mark an item complete without evidence.

Report as three lists: **Blocking**, **Should fix**, and **Passed**. For every
item that isn't passing, give the specific file and the specific fix.

### Security

- Row-level security enabled on every Supabase table (check the migrations,
  not the dashboard). Flag any table without it as blocking.
- No secrets, API keys, or connection strings in committed code
- `.env*` in `.gitignore`, and nothing secret already in git history
- Every mutation and form validated server-side, not only in the browser
- Auth checked on every protected route and every server action
- Rate limiting on login, signup, password reset, and anything that sends email
- `npm audit` clean of high and critical

### Reliability

- Error tracking installed and receiving events
- Database backups enabled
- Custom 404 and 500 pages exist
- Every async operation has a loading state and an error state
- No unhandled promise rejections

### Quality

- Responsive down to 375px width
- All images have alt text
- Interactive elements reachable and usable by keyboard
- No console errors or warnings in a production build
- Metadata and Open Graph tags present

### Operations

- Privacy policy and terms pages exist and are linked
- Cookie consent present if any tracking runs
- Billing alerts configured on every paid service
- Environment variables set in Vercel for both preview and production

Finish with the single highest-risk thing you found, in one sentence.

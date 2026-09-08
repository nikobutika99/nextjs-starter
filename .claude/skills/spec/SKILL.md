---
description: Turns a rough feature idea into a written spec in specs/ before any code is written. Use when the user describes a new feature without an existing spec.
argument-hint: <short feature description>
---

Write a spec for: $ARGUMENTS

Do not write any code. Do not create any files other than the spec.

First, ask me about anything genuinely ambiguous. Ask up to three questions,
all at once, and only about things you cannot reasonably assume. Then write
the spec.

Save it to `specs/<kebab-case-name>.md` using this structure:

```markdown
# <Feature name>

## Purpose
One paragraph. What this is for and who needs it.

## User flow
Numbered steps of what the user actually does, start to finish.

## Rules
What must be true. Validation, limits, permissions.

## Failure cases
What happens when the user does it wrong, the network fails, or
data is missing. One line each.

## Must never happen
Security and data-integrity boundaries. Be specific:
"a user must never read another user's rows", not "must be secure".

## Done when
A checklist I can verify by using the app, not by reading code.

## Out of scope
What this feature deliberately does not do.
```

Write in plain English. No technical jargon and no implementation detail:
this describes behaviour, not code. Someone non-technical should be able to
read it and tell you whether it's right.

Keep it under one page. If it runs longer than that, the feature is too big
for one session and should be split into two specs. Say so if that happens.

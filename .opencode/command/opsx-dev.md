---
description: Log development progress to DEVLOG.md with detailed context
---

Logs development progress automatically to DEVLOG.md using git history for rich context.

**Mode 1: Input provided** (e.g., `/dev Added feature X`)

1. Read current DEVLOG.md
2. Parse input to extract:
   - Feature/category (from description)
   - Specific changes made
   - Files that were modified
3. Format new entry with:
   - Date header: ### YYYY-MM-DD
   - Feature block: - **<Feature Name>**
   - Changes: bullet list with full descriptions
   - Files Changed: complete file list
   - Metrics: build size, test results, coverage
4. Append to CHANGELOG section
5. Commit with message "chore: update DEVLOG"
6. Show detailed summary of what was logged

**Mode 2: Auto-detect** (e.g., `/dev` or `/dev auto`)

1. Get latest commit info:
   - `git log -1 --pretty=format:"%h %s %an %ae"` → hash, message, author
2. Get all changed files:
   - `git diff --name-only HEAD~1..HEAD`
3. Get change statistics:
   - `git diff --stat HEAD~1..HEAD` → files, insertions, deletions
4. Get build/test metrics:
   - Run `npm run build` silently or use cached values
   - Run `npm test` silently
5. Parse commit message into logical parts
6. Categorize files into: Components, Config, Pages, Tests
7. Format as detailed entry with all context
8. Append to CHANGELOG
9. Commit with "chore: update DEVLOG"
10. Show comprehensive summary

**Output Format (detailed):**

```markdown
### YYYY-MM-DD
- **<Feature Category>**
  - <detailed change 1 with context>
  - <detailed change 2 with context>
  - <detailed change 3 with context>

- **Files Changed**
  - Components: Component1.tsx, Component2.tsx
  - Config: next.config.js, package.json
  - Pages: app/page.tsx
  - Tests: Component.test.tsx

- **Metrics**
  - Overall: <X> files, <+Y> insertions, <-Z> deletions
  - Build: <size> kB | JS: <first-load> kB
  - Tests: <passed>/<total> passed
  - Coverage: <percentage>% (if available)
```

**What gets auto-detected:**
- Commit message → feature name
- Changed files → categorize by folder
- Insertions/deletions → change scope
- Build output → performance metrics
- Test output → quality metrics

**Example usage:**
- `/dev Added Docker configuration`
- `/dev Fixed authentication flow`
- `/dev` (uses auto-detect)
- `/dev auto` (explicit auto-detect)

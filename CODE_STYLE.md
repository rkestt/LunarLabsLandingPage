# Code Style Guide - Lunar Labs Landing Page

This document defines the coding conventions for the Lunar Labs landing page project.

## Language & Framework

- **Primary Language:** TypeScript
- **Style Enforcement:** Google TypeScript Style Guide (via `gts`)
- **Framework:** Next.js 14 with React

---

## Naming Conventions

### Files
- **Components:** `PascalCase.tsx` (e.g., `HeroSection.tsx`, `ServiceCard.tsx`)
- **Utilities:** `camelCase.ts` (e.g., `formatDate.ts`, `apiClient.ts`)
- **Styles:** Same name as component (e.g., `HeroSection.module.css`)
- **Tests:** `*.test.ts` or `*.spec.ts`

### TypeScript/JavaScript

| Element | Convention | Example |
|---------|------------|---------|
| Classes | `UpperCamelCase` | `UserService`, `ApiClient` |
| Interfaces | `UpperCamelCase` | `ProjectData`, `TeamMember` |
| Types | `UpperCamelCase` | `ServiceType`, `ApiResponse` |
| Functions | `lowerCamelCase` | `fetchProjects`, `handleSubmit` |
| Variables | `lowerCamelCase` | `isLoading`, `projectList` |
| Constants | `CONSTANT_CASE` | `API_BASE_URL`, `MAX_RETRIES` |
| Enum values | `CONSTANT_CASE` | `Status.PENDING`, `Status.COMPLETE` |
| React Components | `UpperCamelCase` | `HeroSection`, `ServiceCard` |

### ❌ Forbidden Naming Patterns
- Do NOT use `_` prefix or suffix for private properties
- Do NOT use `var` - use `const` or `let`

---

## File Organization

### Component Structure
```
components/
├── Hero/
│   ├── HeroSection.tsx
│   ├── HeroSection.module.css
│   └── index.ts              # Barrel export
├── Services/
│   ├── ServiceCard.tsx
│   └── ServicesGrid.tsx
└── ui/                       # Reusable UI components
    ├── Button.tsx
    └── Input.tsx
```

### Page Structure (Next.js App Router)
```
app/
├── layout.tsx
├── page.tsx
├── globals.css
└── (routes)/
    └── contact/
        └── page.tsx
```

---

## Import Style

### Order
1. React/Next.js imports
2. Third-party libraries
3. Internal components
4. Types and interfaces
5. Styles

### Examples
```typescript
// React/Next
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Third-party
import { motion } from 'framer-motion';

// Internal
import { Button } from '@/components/ui/Button';
import { fetchProjects } from '@/lib/api';

// Types
import type { Project } from '@/types/project';

// Styles
import styles from './HeroSection.module.css';
```

### Rules
- Use named exports: `export { MyComponent };`
- ❌ Do NOT use default exports
- Include `.js` extension in import paths for ES modules

---

## Code Patterns

### React Components
```typescript
// Functional component with props interface
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.icon}>{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

### Async Operations
```typescript
// Use async/await with proper error handling
async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch(API_BASE_URL + '/projects');
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}
```

### Class Properties
```typescript
class ApiClient {
  private baseUrl: string;
  readonly timeout: number;

  constructor(baseUrl: string, timeout = 5000) {
    this.baseUrl = baseUrl;
    this.timeout = timeout;
  }
}
```

---

## Error Handling

### Pattern
```typescript
// Use specific error types
class ApiError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// Throw meaningful errors
if (!response.ok) {
  throw new ApiError(
    `Request failed: ${response.statusText}`,
    response.status
  );
}
```

### Rules
- Always handle errors with try/catch
- Provide user-friendly error messages
- Log errors for debugging

---

## Logging

### Console Usage
```typescript
// Use appropriate log levels
console.error('Critical error:', error);    // Errors
console.warn('Deprecated usage:', warning); // Warnings
console.info('Operation completed:', data); // Info (optional)
```

---

## Testing

### Test File Naming
- Unit tests: `ComponentName.test.tsx`
- Integration tests: `feature.integration.test.ts`

### Test Structure
```typescript
describe('ServiceCard', () => {
  it('renders title and description', () => {
    render(<ServiceCard title="Test" description="Description" icon={<span />} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('handles missing icon gracefully', () => {
    render(<ServiceCard title="Test" description="Desc" icon={null} />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

### Requirements
- Unit tests required for all modules
- Test both success and failure cases
- Target >80% code coverage

---

## TypeScript Specific Rules

### Type Assertions
```typescript
// ❌ Avoid type assertions
const value = data as string;

// ✅ Use type guards
function isString(value: unknown): value is string {
  return typeof value === 'string';
}
```

### Nullability
```typescript
// ✅ Prefer optional properties
interface Config {
  apiKey?: string;
  timeout: number;
}

// ❌ Avoid |undefined union
interface Config {
  apiKey: string | undefined;  // Not preferred
}
```

### Arrays
```typescript
// Simple types: T[]
const names: string[] = [];

// Complex unions: Array<T>
const items: Array<string | number> = [];
```

---

## Tailwind CSS

### Class Organization
```typescript
// Group classes by category
<div className="
  flex flex-col items-center    /* Layout */
  p-4 m-2                       /* Spacing */
  bg-gray-900 text-white        /* Colors */
  rounded-lg shadow-md          /* Effects */
  hover:bg-gray-800             /* States */
  transition-colors duration-200 /* Transitions */
">
```

### Custom Classes
- Use `@apply` sparingly
- Prefer component-level styles with CSS modules for complex styling

---

## Do's and Don'ts

### ✅ Do
- Use `const` by default, `let` only when reassignment needed
- Use single quotes for strings: `'hello'`
- Use template literals for interpolation: `` `Hello, ${name}!` ``
- Always use `===` and `!==`
- End statements with semicolons
- Use JSDoc for documentation
- Keep functions small and focused

### ❌ Don't
- Use `var`
- Use default exports
- Use `any` type (prefer `unknown`)
- Use `#private` fields (use `private` modifier)
- Use type assertions without justification
- Use `eval()` or `Function(...string)`
- Modify built-in objects

---

## Quality Gates

Before committing, verify:
- [ ] All tests pass
- [ ] Code coverage >80%
- [ ] No linting errors
- [ ] Types are properly defined
- [ ] Documentation updated
- [ ] Mobile-friendly implementation

---

## References

- [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

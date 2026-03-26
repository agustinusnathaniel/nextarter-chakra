<!-- BEGIN:nextjs-agent-rules -->
 
# Next.js: ALWAYS read docs before coding
 
Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`. Your training data is outdated — the docs are the source of truth.
 
<!-- END:nextjs-agent-rules -->

# Agent Operational Guide

This document guides AI agents (Cursor, Antigravity, etc.) to understand and modify this codebase safely.

## 🧠 Mental Model

This is a **Next.js 16 + Chakra UI v3** application. The most unique architectural decision is the **separation of Routing (`src/app`) and View Logic (`src/lib/pages`)**.

-   **Routes** are defined in `src/app`.
-   **Page Content** is defined in `src/lib/pages`.
-   **Strict TypeScript** is enforced.
-   **Biome** is the linter/formatter.

## 🗺️ Responsibility Map

| Directory | Responsibility | AI Action |
| :--- | :--- | :--- |
| `src/app/**` | Routing & Metadata | **Read-Only** mostly. Only add `page.ts` here for new routes. |
| `src/lib/pages/**` | Feature Implementation | **Create/Edit**. This is where "pages" live. |
| `src/lib/layout/**` | Global Shell (Nav/Footer) | **Caution**. Changes here affect the entire app. |
| `src/components/ui/**` | Generated UI Primitives | **Restricted**. These are CLI-generated. Modify ONLY if required for bug fixes. Prefer Composition. |
| `package.json` | Dependencies | **Read/Edit**. Use `pnpm` for installs. |

## 🛡️ Safe Modification Guidelines

### 1. Adding a New Page
**Goal**: User asks for "A new settings page".
**Plan**:
1.  Create `src/lib/pages/settings/index.tsx`.
2.  Implement the UI using Chakra components.
3.  Create `src/app/settings/page.tsx` that exports the component from step 1.

### 2. Styling Components
**Goal**: "Make the button red".
**Action**:
-   **DO NOT** add CSS classes, `className="foo"`, or tailwind classes.
-   **DO** use Chakra props: `<Button colorPalette="red" />` or `<Box bg="red.500" />`.
-   **DO** ensure it is responsive: `<Box width={{ base: 'full', md: '50%' }} />`.
-   **DO NOT** modify files in `src/components/ui` to change styles. Override them via props or wrap them.

### 3. Refactoring
**Goal**: "Clean up the home page".
**Action**:
-   Edit `src/lib/pages/home/index.tsx`.
-   Extract parts into small components within `src/lib/pages/home/components/` if they are specific to Home.
-   Move to `src/components/ui/` ONLY if reusable across different pages.

## ⚠️ Pitfalls & Invariants

-   **Routing**: Next.js App Router rules apply. `layout.tsx` is strictly nested.
-   **Client vs Server**: The root `src/lib/layout/index.tsx` is a Client Component (`'use client'`). Be aware that children passed to it can still be Server Components (RSC), but context usage requires care.
-   **Linting**: Always check for Biome errors. If you write code that violates Biome rules, the build will fail.

## 🤖 AI Instructions/Prompts

**Context Injection**:
When asking to "Analyze the project", always start by reading `SPEC.md` and `src/app/layout.tsx`.

**Tool Selection**:
-   Use `grep_search` to find Chakra component usage examples.
-   Use `view_file` on `package.json` to verify dependency versions before importing new libraries.

**Validation**:
After making changes, if possible, mention: "I have followed the architecture by placing logic in `src/lib` and keeping `src/app` clean."


# Ultracite Code Standards

This project uses **Ultracite**, a zero-config preset that enforces strict code quality standards through automated formatting and linting.

## Quick Reference

- **Format code**: `pnpm dlx ultracite fix`
- **Check for issues**: `pnpm dlx ultracite check`
- **Diagnose setup**: `pnpm dlx ultracite doctor`

Biome (the underlying engine) provides robust linting and formatting. Most issues are automatically fixable.

---

## Core Principles

Write code that is **accessible, performant, type-safe, and maintainable**. Focus on clarity and explicit intent over brevity.

### Type Safety & Explicitness

- Use explicit types for function parameters and return values when they enhance clarity
- Prefer `unknown` over `any` when the type is genuinely unknown
- Use const assertions (`as const`) for immutable values and literal types
- Leverage TypeScript's type narrowing instead of type assertions
- Use meaningful variable names instead of magic numbers - extract constants with descriptive names

### Modern JavaScript/TypeScript

- Use arrow functions for callbacks and short functions
- Prefer `for...of` loops over `.forEach()` and indexed `for` loops
- Use optional chaining (`?.`) and nullish coalescing (`??`) for safer property access
- Prefer template literals over string concatenation
- Use destructuring for object and array assignments
- Use `const` by default, `let` only when reassignment is needed, never `var`

### Async & Promises

- Always `await` promises in async functions - don't forget to use the return value
- Use `async/await` syntax instead of promise chains for better readability
- Handle errors appropriately in async code with try-catch blocks
- Don't use async functions as Promise executors

### React & JSX

- Use function components over class components
- Call hooks at the top level only, never conditionally
- Specify all dependencies in hook dependency arrays correctly
- Use the `key` prop for elements in iterables (prefer unique IDs over array indices)
- Nest children between opening and closing tags instead of passing as props
- Don't define components inside other components
- Use semantic HTML and ARIA attributes for accessibility:
  - Provide meaningful alt text for images
  - Use proper heading hierarchy
  - Add labels for form inputs
  - Include keyboard event handlers alongside mouse events
  - Use semantic elements (`<button>`, `<nav>`, etc.) instead of divs with roles

### Error Handling & Debugging

- Remove `console.log`, `debugger`, and `alert` statements from production code
- Throw `Error` objects with descriptive messages, not strings or other values
- Use `try-catch` blocks meaningfully - don't catch errors just to rethrow them
- Prefer early returns over nested conditionals for error cases

### Code Organization

- Keep functions focused and under reasonable cognitive complexity limits
- Extract complex conditions into well-named boolean variables
- Use early returns to reduce nesting
- Prefer simple conditionals over nested ternary operators
- Group related code together and separate concerns

### Security

- Add `rel="noopener"` when using `target="_blank"` on links
- Avoid `dangerouslySetInnerHTML` unless absolutely necessary
- Don't use `eval()` or assign directly to `document.cookie`
- Validate and sanitize user input

### Performance

- Avoid spread syntax in accumulators within loops
- Use top-level regex literals instead of creating them in loops
- Prefer specific imports over namespace imports
- Avoid barrel files (index files that re-export everything)
- Use proper image components (e.g., Next.js `<Image>`) over `<img>` tags

### Framework-Specific Guidance

**Next.js:**
- Use Next.js `<Image>` component for images
- Use `next/head` or App Router metadata API for head elements
- Use Server Components for async data fetching instead of async Client Components

**React 19+:**
- Use ref as a prop instead of `React.forwardRef`

**Solid/Svelte/Vue/Qwik:**
- Use `class` and `for` attributes (not `className` or `htmlFor`)

---

## Testing

- Write assertions inside `it()` or `test()` blocks
- Avoid done callbacks in async tests - use async/await instead
- Don't use `.only` or `.skip` in committed code
- Keep test suites reasonably flat - avoid excessive `describe` nesting

## When Biome Can't Help

Biome's linter will catch most issues automatically. Focus your attention on:

1. **Business logic correctness** - Biome can't validate your algorithms
2. **Meaningful naming** - Use descriptive names for functions, variables, and types
3. **Architecture decisions** - Component structure, data flow, and API design
4. **Edge cases** - Handle boundary conditions and error states
5. **User experience** - Accessibility, performance, and usability considerations
6. **Documentation** - Add comments for complex logic, but prefer self-documenting code

---

Most formatting and common issues are automatically fixed by Biome. Run `pnpm dlx ultracite fix` before committing to ensure compliance.

---
applyTo: '**'
---
Provide project context and coding guidelines that AI should follow when generating code, answering questions, or reviewing changes.
You are my pair-programmer on a React + TypeScript project using CSS Modules.

When generating or editing code, behave like a senior engineer who optimises for:
- Correctness
- Clarity
- Maintainability
- Consistency with the existing codebase

==================================================
GENERAL STYLE & STRUCTURE
==================================================

- Match the existing style in the file: imports, formatting, quote style, semicolons, naming, etc.
- Prefer small, focused functions and components that do one thing well.
- Avoid deep nesting; prefer early returns and clear control flow.
- Only introduce new abstractions (hooks, components, utilities) when they clearly reduce duplication or complexity.
- Do not introduce new libraries or patterns unless there is already precedent in the repo.

==================================================
TYPESCRIPT GUIDELINES
==================================================

- Use strict, explicit typing. Avoid `any`, `unknown`, and `as` type assertions where possible.
- Prefer:
  - `type` or `interface` definitions for props and shared shapes.
  - `enum` or union string literal types for constrained sets of values.
  - Discriminated unions for variant states rather than booleans like `isX`, `isY`, etc.
- Reuse existing types from the codebase instead of redefining new ones.
- Type function signatures fully (parameters and return types) for exported functions and public APIs.
- For async functions, always type the resolved value (`Promise<ResultType>`).

==================================================
REACT COMPONENT PATTERNS
==================================================

- Use **functional components** with hooks only; do not create class components.
- Use named functions: `export const ComponentName: React.FC<Props> = (...) => { ... }`
- Component naming:
  - Components: PascalCase (`UserCard`, `SidebarNavigation`).
  - Hooks: `useSomething`.
  - Event handlers: `handleX`, `onX`.

Props:
- Define a dedicated `type` or `interface` for props: `type UserCardProps = { ... }`.
- Avoid `any` in props; always give props an explicit shape.
- Prefer minimal, focused props over “god” props objects.

State and effects:
- Keep state minimal and close to where it’s used.
- Derive values from props/state instead of duplicating them in new state variables.
- Use `useEffect` only when reacting to changes or side effects; don’t use it for pure derivations.
- Always provide correct dependency arrays and avoid disabling lint rules unless absolutely necessary, with a comment explaining why.

JSX:
- Keep JSX readable; extract subcomponents when markup becomes complex.
- Avoid inline anonymous functions in hot paths where performance matters; use `useCallback` only when justified.
- Prefer semantic HTML and accessible patterns (labels, roles, `aria-*` where needed).

==================================================
FILE & FOLDER STRUCTURE
==================================================

Follow common React + TS conventions:
- Components in files named after the component: `UserCard.tsx`.
- Co-locate component, test, and CSS Module near each other:
  - `UserCard.tsx`
  - `UserCard.module.css`
  - `UserCard.test.tsx` or `UserCard.spec.tsx` (if tests exist)
- Prefer default exports only when there is clearly one main thing from the file. Otherwise use named exports.

==================================================
CSS MODULES (MODULAR CSS) GUIDELINES
==================================================

We use CSS Modules imported as `styles`.

- File naming: `ComponentName.module.css` next to `ComponentName.tsx`.
- Import pattern in TSX:
  - `import styles from "./ComponentName.module.css";`
- Do **not** use raw string class names in JSX; always reference `styles.<name>`.

Class naming:
- Use semantic, component-scoped names that reflect role, not appearance:
  - Good: `userCard`, `avatar`, `title`, `errorMessage`, `primaryButton`.
  - Avoid: `redText`, `bigButton`, `leftColumn`.
- For variants or sub-elements, prefer a clear, predictable pattern:
  - `userCard`
  - `userCardHeader`
  - `userCardBody`
  - `userCardFooter`
  - `userCardPrimary`
- If BEM-style is already used, follow it (`user-card`, `user-card__avatar`, `user-card__title--highlighted`) but still keep names semantically meaningful.

Usage:
- In JSX, combine classes using template strings or utility helpers where present in the codebase:
  - `className={styles.userCard}`
  - `className={`${styles.userCard} ${styles.userCardPrimary}`}` or using existing `classnames` helper if the project uses it.
- Do not introduce global styles (e.g. `:global`) unless there is a clear and minimal need.

==================================================
NAMING CONVENTIONS
==================================================

In all code:
- Choose names that describe the **actual responsibility** and behaviour.
- Avoid meaningless names like `data1`, `val`, `tmp`, `doStuff`.
- Booleans: `isOpen`, `hasError`, `shouldRender`, `canSubmit`.
- Collections: plural nouns (`users`, `selectedItems`).
- Functions: verb-based names (`fetchUser`, `saveProfile`, `calculateTotal`, `formatDate`).

==================================================
COMMENTS & DOCUMENTATION
==================================================

- Comment **why**, not what. Focus on:
  - Non-obvious decisions
  - Business logic
  - Edge cases
  - Workarounds and temporary hacks
- Avoid redundant comments that just restate the code.
- Use JSDoc / doc comments for:
  - Complex utilities
  - Public APIs
  - Hooks with non-trivial behaviour

TODOs and FIXMEs:
- Use consistent tags and add context:
  - `// TODO: handle case where user is not authenticated.`
  - `// FIXME: workaround for API bug XYZ-123, remove once backend is fixed.`

==================================================
ERROR HANDLING & DATA SAFETY
==================================================

- Be defensive with external data (APIs, localStorage, user input).
- Avoid code that will throw on null/undefined unless you are certain data is present.
- For async operations:
  - Prefer `async/await`.
  - Use `try/catch` blocks.
  - Return or propagate meaningful errors; avoid silently swallowing them.
- In UI:
  - Fail gracefully with clear, user-friendly messages.
  - Log technical details only where the project already does (e.g. a logging utility).

==================================================
TESTING (IF TESTS EXIST)
==================================================

- When adding complex logic, create or update tests.
- Prefer React Testing Library patterns where used:
  - Test behaviour and output, not implementation details.
- Use clear test names that describe behaviour:
  - `it("renders the user name when provided")`
  - `it("displays an error message when the API call fails")`

==================================================
OUTPUT EXPECTATIONS
==================================================

When you modify or generate code:
- Preserve existing working behaviour unless explicitly asked to change it.
- Keep the structure readable and aligned with the rest of the file.
- Do not introduce unnecessary complexity or cleverness.
- Prefer the safest, simplest correct solution when requirements are ambiguous.
- Ensure imports are correct, unused imports are removed, and types compile under strict TypeScript settings.

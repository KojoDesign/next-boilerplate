# Best Practices

While this repository is entirely yours to modify as you see fit, there are a handful of best practices I use when working with NextJS you may find helps you write cleaner and more maintainable code.

## Import from `@`

This repo is configured to point `@` to `src`, saving you from relative import hell. Always prefer `@`, unless you're importing code in the same directory.

### ❌ Don't

```ts
import "../../../../components/ui/Button.tsx";

import "./Hero.tsx";
```

### ✅ Do

```ts
import "@/components/ui/Button.tsx";

import "./Hero.tsx";
```

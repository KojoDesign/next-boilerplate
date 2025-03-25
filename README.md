# Kojo's Marketing Site Starter Kit (NextJS Edition)

This repository is a NextJS port of the [Astro Boilerplate](https://github.com/KojoDesign/astro-boilerplate), which contains everything you need to start and maintain a SEO-ready, performance-optimized marketing website you can customize to your hearts desire!

To get started, simply hit the "Use This Template" button on this repo to start your own project with this boilerplate.

## What's Inside

### Building Blocks

- 📦 **[pnpm](https://pnpm.io)** for package management, as it's much faster and more performant than NPM. It's configured using Corepack, so you should be able to install it via `corepack enable` (this command comes with Node).
- 🚀 **[NextJS](https://nextjs.org)**, a React framework for creating high-performant React apps and webpages.
- 👷 **[TypeScript](https://www.typescriptlang.org/)** for writing type-safe, maintainable code.

### UI & Styling

- 🪁 **[Tailwind CSS](https://tailwindcss.com)** for modular, consistent CSS styling. Includes plugins such as [tailwindcss-typography](https://github.com/tailwindlabs/tailwindcss-typography) and [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate).
- 📥 **[shadcn-ui](https://ui.shadcn.com/)** for rapidly adding pre-configured UI components to your website.
- 🦄 **[unplugin-icons](https://github.com/unplugin/unplugin-icons)** for easily inlining thousands of on-demand icons in React components.
- ⚒️ Custom component primitives such as [Typography](src/components/ui/Typography.tsx) and [Stack](src/components/ui/Stack.tsx).

### Animations

- 🚥 **[Rive](https://rive.app)** for embedding performant, interactive animations on your site.
- 🏃 **[Motion](https://motion.dev)** (formerly Framer Motion) for creating realistic spring animations in JavaScript.

### Developer Experience

- 📝 **[biome](biomejs.dev)** for lightning-fast linting in JavaScript and TypeScript (written in Rust)
- 🎨 **[Prettier](prettier.io)** for opinionated formatting (only used because Biome's HTML formatting is [incomplete](https://biomejs.dev/internals/language-support/)).
- 🐶 **[Husky](https://github.com/typicode/husky)** with **[lint-staged](https://github.com/lint-staged/lint-staged)** to automatically run linting on new commits.

## Guides

- [Best Practices](docs/best-practices.md)
- [Creating UI components](docs/shadcn.md)
- [Adding new Tailwind colors](docs/tailwind.md)
- [Using icons & SVGs](docs/icons.md)
- [Using Motion](docs/motion.md)
- [Using Rive](docs/rive.md)

### Using Astro

- [Adding Images in Astro](https://docs.astro.build/en/guides/images)
- [Using Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) (useful for blogs and articles)

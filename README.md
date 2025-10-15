# Nx Monorepo

This workspace contains a Next.js application (`web`) and a shared React UI library (`ui`) managed by Nx and pnpm.

## Prerequisites

- Node.js 18 or newer
- [pnpm](https://pnpm.io/installation)

## Setup

Install dependencies at the repository root:

```bash
pnpm install
```

## Development

Run the Next.js development server for the `web` app:

```bash
pnpm dev
```

Open your browser to http://localhost:4200 to view the app. Hot reloading is enabled by default.

## Useful Commands

```bash
pnpm build   # Build the Next.js app for production
pnpm lint    # Run lint checks across the workspace
pnpm format  # Format files with Prettier
pnpm check   # Run build and lint targets
```

## Project Structure

- `apps/web` – Next.js App Router application
- `libs/ui` – Shared UI components and theming utilities
- `tailwind.config.ts` – TailwindCSS configuration shared across the workspace
- `nx.json`, `project.json` – Nx task and target configuration

For more details on available targets, run `pnpm nx list` or `pnpm nx graph`.

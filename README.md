# Dawn UI React

A React component library for building polished product interfaces with composable primitives, Tailwind CSS styling, and accessible interaction patterns.

[![Sponsor on GitHub](https://img.shields.io/badge/Sponsor-GitHub-DB61A2?logo=githubsponsors&logoColor=white)](https://github.com/sponsors/PHNTMbandit)
[![npm version](https://img.shields.io/npm/v/dawn-ui-react?logo=npm)](https://www.npmjs.com/package/dawn-ui-react)
[![npm weekly downloads](https://img.shields.io/npm/dw/dawn-ui-react?logo=npm)](https://www.npmjs.com/package/dawn-ui-react)
[![License](https://img.shields.io/npm/l/dawn-ui-react)](LICENSE)
[![TypeScript declarations](https://img.shields.io/npm/types/dawn-ui-react)](https://www.npmjs.com/package/dawn-ui-react)

Dawn UI React is currently in release-candidate testing for `1.0.0`. APIs are nearing stability, but breaking changes may still happen before the stable release.

## Features

- Accessible React components built on modern primitives.
- Tailwind CSS 4 styling with reusable design tokens.
- TypeScript-first exports for components, hooks, and utilities.
- Storybook coverage for component development and review.
- Semantic-release powered alpha, beta, release-candidate, and stable channels.
- Vite+ unified tooling for development, formatting, linting, type checking, and tests.

## Installation

Install Dawn UI React with your package manager:

```sh
npm install dawn-ui-react
pnpm add dawn-ui-react
yarn add dawn-ui-react
bun add dawn-ui-react
```

Install the required peer dependencies if your app does not already include them:

```sh
npm install react react-dom
pnpm add react react-dom
yarn add react react-dom
bun add react react-dom
```

Import the library styles once in your app entry file:

```ts
import 'dawn-ui-react/styles'
```

## Usage

```tsx
import { Button } from 'dawn-ui-react'

export function Example() {
  return <Button>Continue</Button>
}
```

## Available Components

Dawn UI React includes primitives for accordions, alerts, dialogs, autocomplete, avatars, badges, breadcrumbs, buttons, charts, checkboxes, code blocks, comboboxes, context menus, drawers, dropzones, fields, forms, inputs, menus, navigation, popovers, profiles, progress, radio groups, scroll areas, selects, sidebars, sliders, switches, tables, tabs, text areas, toasts, toggles, tooltips, and more.

## Sponsor Development

If Dawn UI React saves you time or helps your product, consider [sponsoring its development on GitHub](https://github.com/sponsors/PHNTMbandit). Sponsorship helps fund ongoing maintenance, accessibility improvements, documentation, testing, and new components. One-time and recurring support are both welcome, and sponsorship is never required to use or contribute to the library.

## Development

```sh
vp install
vp run storybook
```

Vite+ provides the `vp` CLI for the project toolchain. Use its built-in commands for checks and tests, and `vp run <script>` to run a script from `package.json`.

```sh
vp check
vp test
vp run build
vp run build-storybook
```

See the [Vite+ guide](https://viteplus.dev/guide/) for CLI details.

## Release Channels

This repository uses semantic-release with prerelease branches:

- `alpha` publishes `1.0.0-alpha.x`
- `beta` publishes `1.0.0-beta.x`
- `rc` publishes `1.0.0-rc.x`
- `main` publishes stable releases

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## Security

Please report vulnerabilities privately using the guidance in [SECURITY.md](SECURITY.md).

## License

MIT. See [LICENSE](LICENSE).

# Dawn UI React

A React component library for building polished product interfaces with composable primitives, Tailwind CSS styling, and accessible interaction patterns.

Dawn UI React is currently in release-candidate testing for `1.0.0`. APIs are nearing stability, but breaking changes may still happen before the stable release.

## Features

- Accessible React components built on modern primitives.
- Tailwind CSS 4 styling with reusable design tokens.
- TypeScript-first exports for components, hooks, and utilities.
- Storybook coverage for component development and review.
- Semantic-release powered alpha, beta, release-candidate, and stable channels.
- Vite+ unified tooling for development, formatting, linting, type checking, and tests.

## Installation

```sh
pnpm add dawn-ui-react
```

Install the required peer dependencies if your app does not already include them:

```sh
pnpm add react react-dom
```

Import the library styles once in your app entry file:

```ts
import 'dawn-ui-react/styles.css'
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

## Development

```sh
vp install
vp run storybook
```

Vite+ provides the `vp` CLI for the project toolchain. Use its built-in commands for checks and tests, and `vp run <script>` to run a script from `package.json`.

```sh
vp check
vp test
pnpm run build
pnpm run build-storybook
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

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { playwright } from '@vitest/browser-playwright'
import path, { resolve } from 'node:path'
import url, { fileURLToPath } from 'node:url'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vitest/config'
import pkg from './package.json' with { type: 'json' }

const dirname = path.dirname(url.fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      exclude: ['**/*.test.tsx', '**/*.stories.tsx'],
      entryRoot: 'src',
      insertTypesEntry: true,
    }),
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'dawnUIReact',
      fileName: 'dawn-ui',
    },
    rollupOptions: {
      external: (id) => {
        if (
          Object.keys(pkg.peerDependencies).some((dep) => id === dep || id.startsWith(`${dep}/`))
        ) {
          return true
        }

        if (id.startsWith('react') || id.startsWith('react-dom')) {
          return true
        }

        if (id.startsWith('use-sync-external-store')) {
          return true
        }

        return false
      },
    },
  },
  test: {
    css: true,
    environment: 'jsdom',
    globals: true,
    passWithNoTests: true,
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

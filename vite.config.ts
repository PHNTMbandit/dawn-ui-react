import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { playwright } from '@vitest/browser-playwright'
import path, { resolve } from 'node:path'
import url, { fileURLToPath } from 'node:url'
import { esmExternalRequirePlugin } from 'rolldown/plugins'
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
      fileName: 'dawn-ui-react',
    },
    rollupOptions: {
      plugins: [
        esmExternalRequirePlugin({
          external: [/^react($|\/)/, /^react-dom($|\/)/],
        }),
      ],
      external: (id) => {
        if (/^react($|\/)/.test(id) || /^react-dom($|\/)/.test(id)) {
          return false
        }

        if (
          Object.keys(pkg.peerDependencies).some((dep) => id === dep || id.startsWith(`${dep}/`))
        ) {
          return true
        }

        return false
      },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
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

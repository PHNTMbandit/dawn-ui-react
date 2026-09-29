import { withThemeByDataAttribute } from '@storybook/addon-themes'
import '../src/styles/output.css'

import type { Preview } from '@storybook/react-vite'

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'error',
    },
    docs: {
      toc: true,
    },
  },
  decorators: [
    withThemeByDataAttribute({
      defaultTheme: 'dark',
      themes: { dark: 'dark', light: 'light' },
      attributeName: 'data-theme',
    }),
  ],
}

export default preview

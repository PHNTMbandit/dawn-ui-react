import { ColourPicker } from './colour-picker'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Colour Picker',
  component: ColourPicker,
} satisfies Meta<typeof ColourPicker>

type Story = StoryObj<typeof ColourPicker>

export const Default: Story = {}

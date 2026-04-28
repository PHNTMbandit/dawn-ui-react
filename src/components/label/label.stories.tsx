import { Label } from './label'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Label',
  component: Label,
  parameters: {
    docs: {
      subtitle: 'A component for displaying text labels associated with form elements.',
      description: {
        component:
          'The Label component is used to provide descriptive text for form elements such as input fields, checkboxes, and radio buttons. It enhances accessibility by linking the label text to the corresponding form control, making it easier for users to understand the purpose of the input. This component supports various styling options to match different design requirements.',
      },
    },
  },
  args: {
    htmlFor: 'example-input',
  },
  render: (args) => <Label {...args}>Example Input</Label>,
} satisfies Meta<typeof Label>

type Story = StoryObj<typeof Label>

export const Default: Story = {}

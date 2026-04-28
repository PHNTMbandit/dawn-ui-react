import { TextArea } from './text-area'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Text Area',
  component: TextArea,
  parameters: {
    subtitle: 'A multi-line text input field for user input.',
    description: {
      component:
        'The TextArea component provides a multi-line input field that allows users to enter and edit larger amounts of text. It supports visual variants, max length feedback, and disabled states for form workflows.',
    },
  },
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary'],
      description: 'Visual style for the textarea container.',
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'primary' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when empty.',
      table: {
        type: { summary: 'string' },
      },
    },
    maxLength: {
      control: { type: 'number', min: 1, max: 1000, step: 1 },
      description: 'Maximum characters allowed. Shows character counter when set.',
      table: {
        type: { summary: 'number' },
      },
    },
    rows: {
      control: { type: 'number', min: 2, max: 12, step: 1 },
      description: 'Visible number of text rows.',
      table: {
        type: { summary: 'number' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables editing and interactions.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    variant: 'primary',
    placeholder: 'Enter your text here...',
    maxLength: 120,
    rows: 4,
    cols: 50,
  },
} satisfies Meta<typeof TextArea>

type Story = StoryObj<typeof TextArea>

export const Playground: Story = {
  render: (args) => (
    <div className="w-[500px]">
      <TextArea {...args} />
    </div>
  ),
}

export const StatePrimary: Story = {
  args: {
    variant: 'primary',
    placeholder: 'Write a short note...',
    maxLength: 120,
  },
}

export const StateSecondary: Story = {
  args: {
    variant: 'secondary',
    placeholder: 'Describe your request...',
    maxLength: 180,
  },
}

export const BehaviorDisabled: Story = {
  args: {
    disabled: true,
    placeholder: 'This field is disabled',
    maxLength: 120,
  },
}

export const BehaviorNoCounter: Story = {
  args: {
    maxLength: undefined,
    placeholder: 'No character counter because maxLength is not set',
  },
}

export const CompositionFeedbackForm: Story = {
  render: () => (
    <div className="w-[500px] space-y-md rounded-lg bg-surface p-md shadow-2xs">
      <header className="space-y-xs">
        <h3 className="style-text-strong-1">Product Feedback</h3>
        <p className="style-text-prose--1 text-on-surface-variant">
          Tell us what worked well and what we can improve.
        </p>
      </header>
      <TextArea
        variant="secondary"
        placeholder="Share your experience..."
        maxLength={250}
        rows={6}
      />
    </div>
  ),
}

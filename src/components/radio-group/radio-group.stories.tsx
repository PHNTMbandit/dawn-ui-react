import { Radio } from './radio'
import { RadioGroup } from './radio-group'

import type { Meta, StoryObj } from '@storybook/react-vite'

const OPTIONS = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
] as const

export default {
  title: 'Components/Radio Group',
  component: RadioGroup,
  subcomponents: { Radio },
  argTypes: {
    defaultValue: {
      control: { type: 'select' },
      options: OPTIONS.map((option) => option.value),
      description: 'Initial selected value when the component is uncontrolled.',
      table: {
        defaultValue: { summary: 'option1' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables all radio options in the group.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Marks the group as required in form contexts.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    name: {
      control: 'text',
      description: 'Shared field name used for form submission.',
    },
  },
  parameters: {
    docs: {
      subtitle: 'A single-select option set composed from Radio items.',
      description: {
        component:
          'The Radio Group component lets users choose one value from a list of options. Use `RadioGroup` as the state container and compose each option with `Radio`. This pattern works well for forms, filters, and settings where exactly one choice is required. Radio items support visual variants (`elevated` and `inSurface`) for different surface contexts.',
      },
    },
  },
  args: {
    defaultValue: 'option1',
    disabled: false,
    required: false,
  },
  render: (args) => (
    <RadioGroup {...args}>
      {OPTIONS.map((option) => (
        <Radio key={option.value} value={option.value}>
          {option.label}
        </Radio>
      ))}
    </RadioGroup>
  ),
} satisfies Meta<typeof RadioGroup>

type Story = StoryObj<typeof RadioGroup>

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use controls to test default selection and group-level form behavior.',
      },
    },
  },
}

export const Default: Story = {
  name: 'State / Default',
}

export const Disabled: Story = {
  name: 'State / Disabled',
  args: {
    disabled: true,
  },
}

export const Required: Story = {
  name: 'State / Required',
  args: {
    required: true,
    name: 'shippingSpeed',
  },
}

export const ElevatedVariant: Story = {
  name: 'Variant / Elevated',
  render: (args) => (
    <RadioGroup {...args}>
      {OPTIONS.map((option) => (
        <Radio key={option.value} value={option.value} variant="elevated">
          {option.label}
        </Radio>
      ))}
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Default elevated style intended for standard neutral surfaces.',
      },
    },
  },
}

export const InSurfaceVariant: Story = {
  name: 'Variant / In Surface',
  render: (args) => (
    <div className="rounded-xl bg-surface p-sm">
      <RadioGroup {...args}>
        {OPTIONS.map((option) => (
          <Radio key={option.value} value={option.value} variant="inSurface">
            {option.label}
          </Radio>
        ))}
      </RadioGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'In-surface style better blends with already elevated containers and cards.',
      },
    },
  },
}

export const PaymentMethodExample: Story = {
  name: 'Composition / Payment Method',
  args: {
    defaultValue: 'card',
  },
  render: (args) => (
    <RadioGroup {...args} className="w-full max-w-sm">
      <Radio value="card">Credit Card</Radio>
      <Radio value="bank">Bank Transfer</Radio>
      <Radio value="wallet">Digital Wallet</Radio>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A realistic form example for selecting a single checkout payment method.',
      },
    },
  },
}

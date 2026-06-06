import { NumberField } from './number-field'

import type { Meta, StoryObj } from '@storybook/react-vite'

const SIZES = ['small', 'medium', 'large'] as const

export default {
  title: 'Components/Number Field',
  component: NumberField,
  argTypes: {
    label: {
      control: 'text',
      description: 'Optional label displayed in the scrub area above the input group.',
    },
    defaultValue: {
      control: { type: 'number' },
      description: 'Initial value used for uncontrolled usage.',
    },
    min: {
      control: { type: 'number' },
      description: 'Minimum allowed numeric value.',
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum allowed numeric value.',
    },
    step: {
      control: { type: 'number' },
      description: 'Step size applied when pressing increment/decrement controls.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables manual input, scrubbing, and stepper controls.',
      table: {
        defaultValue: { summary: '' },
      },
    },
    size: {
      control: { type: 'select' },
      options: SIZES,
      description: 'Controls the input and stepper height scale.',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    'aria-invalid': {
      control: 'boolean',
      description:
        'Manual invalid override. The field also auto-invalidates when value is out of min/max bounds.',
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'A numeric input with stepper buttons, keyboard support, and drag scrubbing.',
      description: {
        component:
          'The Number Field component supports typed input, increment/decrement controls, and scrub-area dragging for fast numeric adjustments. Use `min`, `max`, and `step` to constrain value behavior and `format` for localized display (such as currency). The field automatically enters an invalid visual state when the current value is below `min` or above `max`, with optional manual override via `aria-invalid`.',
      },
    },
  },
  args: {
    defaultValue: 50,
    size: 'medium',
    disabled: false,
    'aria-invalid': false,
  },
  render: (args) => <NumberField {...args} id="number-field" className={'w-[300px]'} />,
} satisfies Meta<typeof NumberField>

type Story = StoryObj<typeof NumberField>

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground for testing min/max/step, size, disabled, and invalid states.',
      },
    },
  },
}

export const Default: Story = {
  name: 'State / Default',
}

export const WithLabel: Story = {
  name: 'State / With Label',
  args: {
    label: 'Quantity',
    defaultValue: 10,
  },
}

export const Disabled: Story = {
  name: 'State / Disabled',
  args: {
    label: 'Quantity',
    defaultValue: 10,
    disabled: true,
  },
}

export const Sizes: Story = {
  name: 'Appearance / Sizes',
  args: {
    defaultValue: 50,
  },
  render: (args) => (
    <div className="flex flex-col items-start gap-md">
      <NumberField {...args} size="small" id="number-field-small" className={'w-[300px]'} />
      <NumberField {...args} size="medium" id="number-field-medium" className={'w-[300px]'} />
      <NumberField {...args} size="large" id="number-field-large" className={'w-[300px]'} />
    </div>
  ),
}

export const WithMinMax: Story = {
  name: 'Behavior / Min and Max',
  args: {
    label: 'Quantity',
    defaultValue: 5,
    min: 0,
    max: 10,
  },
}

export const WithStep: Story = {
  name: 'Behavior / Step',
  args: {
    label: 'Quantity',
    defaultValue: 0,
    step: 5,
  },
}

export const WithFormatting: Story = {
  name: 'Behavior / Formatting',
  args: {
    label: 'Price',
    defaultValue: 1000,
    step: 100,
    format: { style: 'currency', currency: 'USD' },
  },
}

export const Invalid: Story = {
  name: 'State / Invalid',
  args: {
    label: 'Quantity',
    defaultValue: -5,
    min: 0,
    max: 10,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Invalid styling matches Input and is automatically applied when value is outside the provided min/max range.',
      },
    },
  },
}

export const Suffix: Story = {
  name: 'Appearance / Suffix',
  args: {
    label: 'Duration',
    defaultValue: 60,
    step: 30,
  },
  render: (args) => (
    <NumberField {...args} id="number-field-suffix" className={'w-[200px]'}>
      rem
    </NumberField>
  ),
}

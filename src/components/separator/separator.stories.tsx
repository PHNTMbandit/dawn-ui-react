import { Separator } from './separator'

import type { Meta, StoryObj } from '@storybook/react-vite'

const ORIENTATIONS = ['horizontal', 'vertical'] as const
const STYLES = ['rounded', 'square'] as const
const VARIANTS = ['default', 'strong'] as const
const WEIGHTS = ['thinnest', 'thin', 'medium', 'thick'] as const

const PreviewFrame = ({
  orientation,
  children,
}: {
  orientation?: (typeof ORIENTATIONS)[number]
  children: React.ReactNode
}) => (
  <div
    className="flex items-center justify-center"
    style={{
      height: orientation === 'vertical' ? '250px' : 'auto',
      width: orientation === 'vertical' ? 'auto' : '500px',
    }}
  >
    {children}
  </div>
)

export default {
  title: 'Components/Separator',
  component: Separator,
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ORIENTATIONS,
      description: 'Direction of the dividing line.',
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    style: {
      control: { type: 'select' },
      options: STYLES,
      description: 'Corner treatment of the separator line.',
      table: {
        defaultValue: { summary: 'rounded' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: VARIANTS,
      description: 'Visual emphasis token for separator color.',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    weight: {
      control: { type: 'select' },
      options: WEIGHTS,
      description: 'Thickness of the separator line.',
      table: {
        defaultValue: { summary: 'thinnest' },
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'A flexible divider line for separating content, sections, and surfaces.',
      description: {
        component:
          'Separator visually partitions related content while preserving layout rhythm. It supports horizontal and vertical orientation, multiple thickness weights, and style/variant options for subtle or stronger emphasis. Common use cases include menus, sidebars, toolbars, and card sections.',
      },
    },
  },
  args: {
    variant: 'default',
    orientation: 'horizontal',
    style: 'rounded',
    weight: 'thinnest',
  },
  render: (args) => (
    <PreviewFrame orientation={args.orientation}>
      <Separator {...args} />
    </PreviewFrame>
  ),
} satisfies Meta<typeof Separator>

type Story = StoryObj<typeof Separator>

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use controls to experiment with orientation, weight, style, and variant.',
      },
    },
  },
}

export const Default: Story = {
  name: 'Variant / Default',
}

export const Strong: Story = {
  name: 'Variant / Strong',
  args: {
    variant: 'strong',
  },
}

export const Horizontal: Story = {
  name: 'Orientation / Horizontal',
  args: {
    orientation: 'horizontal',
  },
}

export const Vertical: Story = {
  name: 'Orientation / Vertical',
  args: {
    orientation: 'vertical',
  },
}

export const Thinnest: Story = {
  name: 'Weight / Thinnest',
  args: {
    weight: 'thinnest',
  },
}

export const Thin: Story = {
  name: 'Weight / Thin',
  args: {
    weight: 'thin',
  },
}

export const Medium: Story = {
  name: 'Weight / Medium',
  args: {
    weight: 'medium',
  },
}

export const Thick: Story = {
  name: 'Weight / Thick',
  args: {
    weight: 'thick',
  },
}

export const BetweenContent: Story = {
  name: 'Composition / Between Content',
  args: {
    orientation: 'horizontal',
    variant: 'default',
    weight: 'thin',
  },
  render: (args) => (
    <div className="w-[500px] space-y-sm rounded-xl bg-surface p-md">
      <div>
        <p className="style-text-strong--1 text-on-surface">Profile Settings</p>
        <p className="style-text-default--1 text-on-surface-variant">Manage account preferences.</p>
      </div>
      <Separator {...args} />
      <div>
        <p className="style-text-strong--1 text-on-surface">Notifications</p>
        <p className="style-text-default--1 text-on-surface-variant">
          Control alert channels and frequency.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Typical section divider use in cards, forms, and settings pages.',
      },
    },
  },
}

export const VerticalMenuDivider: Story = {
  name: 'Composition / Vertical Menu Divider',
  args: {
    orientation: 'vertical',
    weight: 'thin',
    variant: 'strong',
    style: 'square',
  },
  render: (args) => (
    <div className="flex h-[64px] items-center rounded-xl bg-surface p-sm">
      <button className="px-sm style-text-default--1 text-on-surface">Overview</button>
      <Separator {...args} />
      <button className="px-sm style-text-default--1 text-on-surface">Usage</button>
      <Separator {...args} />
      <button className="px-sm style-text-default--1 text-on-surface">Billing</button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical separators are useful for compact horizontal nav and toolbar grouping.',
      },
    },
  },
}

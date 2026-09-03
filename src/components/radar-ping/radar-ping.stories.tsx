import { Button } from '../button'
import { RadarPing } from './radar-ping'

import type { Meta, StoryObj } from '@storybook/react-vite'

const TONES = ['brand', 'accent', 'neutral', 'error', 'info', 'success', 'warning'] as const
const SIZES = ['small', 'medium', 'large'] as const

export default {
  title: 'Components/Radar Ping',
  component: RadarPing,
  argTypes: {
    tone: {
      control: { type: 'select' },
      options: TONES,
      description: 'Semantic color applied to the dot and its pulsing animation.',
      table: {
        defaultValue: { summary: 'brand' },
      },
    },
    size: {
      control: { type: 'select' },
      options: SIZES,
      description: 'Controls the badge dot, text size, and offset from its anchor element.',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    hidePing: {
      control: 'boolean',
      description: 'Suppresses the pulsing animation, showing only the static dot.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'Optional count or label rendered inside the dot (e.g. notification count).',
    },
  },
  parameters: {
    docs: {
      subtitle: 'An animated dot badge for drawing attention to notifications and new content.',
      description: {
        component:
          'The RadarPing renders an absolutely-positioned pulsing dot anchored to the top-right corner of its relative container. It is well-suited for notification badges, unread indicators, and live-status signals. Use `tone` to communicate semantic intent, `size` to align with the parent element, `hidePing` to suppress the animation, and `children` to display a numeric count inside the dot.',
      },
    },
  },
  args: {
    hidePing: false,
    tone: 'brand',
    size: 'medium',
  },
  render: (args) => (
    <div className="relative inline-flex">
      <Button tone="neutral" variant="elevated">
        Notifications
      </Button>
      <RadarPing {...args} />
    </div>
  ),
} satisfies Meta<typeof RadarPing>

type Story = StoryObj<typeof RadarPing>

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground for tone, size, hidePing, and optional count label.',
      },
    },
  },
}

export const Brand: Story = {
  name: 'Tone / Brand',
  args: { tone: 'brand' },
}

export const Accent: Story = {
  name: 'Tone / Accent',
  args: { tone: 'accent' },
}

export const Neutral: Story = {
  name: 'Tone / Neutral',
  args: { tone: 'neutral' },
}

// biome-ignore lint/suspicious/noShadowRestrictedNames: story name
export const Error: Story = {
  name: 'Tone / Error',
  args: { tone: 'error' },
}

export const Info: Story = {
  name: 'Tone / Info',
  args: { tone: 'info' },
}

export const Success: Story = {
  name: 'Tone / Success',
  args: { tone: 'success' },
}

export const Warning: Story = {
  name: 'Tone / Warning',
  args: { tone: 'warning' },
}

export const AllTones: Story = {
  name: 'Composition / All Tones',
  render: () => (
    <div className="flex flex-wrap items-center gap-lg">
      {TONES.map((tone) => (
        <div key={tone} className="flex flex-col items-center gap-xs">
          <div className="relative inline-flex">
            <Button size="small" tone="neutral" variant="elevated">
              Activity
            </Button>
            <RadarPing tone={tone} />
          </div>
          <span className="style-text-default--1 text-on-surface-variant capitalize">{tone}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All semantic tones shown together for quick visual comparison.',
      },
    },
  },
}

export const AllSizes: Story = {
  name: 'Composition / All Sizes',
  render: () => (
    <div className="flex items-end gap-lg">
      {SIZES.map((size) => (
        <div key={size} className="flex flex-col items-center gap-xs">
          <div className="relative inline-flex">
            <Button size={size} tone="neutral" variant="elevated">
              Updates
            </Button>
            <RadarPing size={size} tone="brand" />
          </div>
          <span className="style-text-default--1 text-on-surface-variant capitalize">{size}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All sizes side-by-side with matching button scale for alignment reference.',
      },
    },
  },
}

export const WithCount: Story = {
  name: 'Composition / With Count',
  render: () => (
    <div className="flex items-end gap-lg">
      {SIZES.map((size) => (
        <div key={size} className="flex flex-col items-center gap-xs">
          <div className="relative inline-flex">
            <Button size={size} tone="neutral" variant="elevated">
              Notifications
            </Button>
            <RadarPing size={size} tone="error">
              {size === 'small' ? '5' : size === 'medium' ? '12' : '99'}
            </RadarPing>
          </div>
          <span className="style-text-default--1 text-on-surface-variant capitalize">{size}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Numeric count inside the dot, shown across all sizes for layout reference.',
      },
    },
  },
}

export const StaticDot: Story = {
  name: 'State / Static Dot',
  args: {
    hidePing: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Set `hidePing` to suppress the animation for low-priority or read states.',
      },
    },
  },
}

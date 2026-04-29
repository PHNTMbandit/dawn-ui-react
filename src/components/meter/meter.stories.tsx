import { SpinnerGapIcon, XIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { Meter } from './meter'
import { MeterFooter } from './meter-footer'
import { MeterHeader } from './meter-header'
import { MeterIndicator } from './meter-indicator'
import { MeterLabel } from './meter-label'
import { MeterSubtitle } from './meter-subtitle'
import { MeterTrack } from './meter-track'
import { MeterValue } from './meter-value'

import type { Meta, StoryObj } from '@storybook/react-vite'

const ORIENTATIONS = ['vertical', 'horizontal'] as const
const SIZES = ['small', 'medium', 'large'] as const
const TONES = ['brand', 'accent', 'neutral', 'error', 'info', 'success', 'warning'] as const

export default {
  title: 'Components/Meter',
  component: Meter,
  subcomponents: {
    MeterHeader,
    MeterFooter,
    MeterIndicator,
    MeterLabel,
    MeterTrack,
    MeterValue,
    MeterSubtitle,
  },
  argTypes: {
    value: {
      control: { type: 'number', min: 0, max: 100, step: 1 },
      description: 'Current progress value displayed by the meter.',
      table: {
        defaultValue: { summary: '25' },
      },
    },
    min: {
      control: { type: 'number' },
      description: 'Lower bound used when calculating value percentage.',
      table: {
        defaultValue: { summary: '0' },
      },
    },
    max: {
      control: { type: 'number' },
      description: 'Upper bound used when calculating value percentage.',
      table: {
        defaultValue: { summary: '100' },
      },
    },
    orientation: {
      control: { type: 'select' },
      options: ORIENTATIONS,
      description: 'Layout direction of meter content and track.',
      table: {
        defaultValue: { summary: 'vertical' },
      },
    },
    size: {
      control: { type: 'select' },
      options: SIZES,
      description: 'Visual thickness of the meter track.',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    tone: {
      control: { type: 'select' },
      options: TONES,
      description: 'Semantic color of the meter indicator.',
      table: {
        defaultValue: { summary: 'brand' },
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'A flexible progress indicator for completion, capacity, and health-style values.',
      description: {
        component:
          'The Meter component visualizes bounded values such as upload progress, quota usage, battery levels, and background task completion. It supports vertical and horizontal layouts, three track sizes (`small`, `medium`, `large`), and semantic tones (`brand`, `accent`, `neutral`, `error`, `info`, `success`, `warning`). Compose it with `MeterHeader`, `MeterLabel`, and `MeterValue` to build informative status UIs.',
      },
    },
  },
  args: {
    value: 25,
    orientation: 'vertical',
    size: 'medium',
    tone: 'brand',
    min: 0,
    max: 100,
  },
  render: (args) => (
    <Meter className="w-[500px]" {...args}>
      <MeterHeader>
        <MeterLabel>Progress</MeterLabel>
      </MeterHeader>
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
      <MeterFooter>
        <MeterSubtitle>Uploading file...</MeterSubtitle>
        <MeterValue />
      </MeterFooter>
    </Meter>
  ),
} satisfies Meta<typeof Meter>

type Story = StoryObj<typeof Meter>

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground for exploring value, direction, size, and tone combinations.',
      },
    },
  },
}

export const Vertical: Story = {
  name: 'Orientation / Vertical',
  args: {
    orientation: 'vertical',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default vertical composition with title, value, and full-width track.',
      },
    },
  },
}

export const Horizontal: Story = {
  name: 'Orientation / Horizontal',
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <Meter className="w-[500px]" {...args}>
      <MeterLabel>
        Progress
        <SpinnerGapIcon className="animate-spin" />
      </MeterLabel>
      <MeterSubtitle>Uploading file...</MeterSubtitle>
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
      <MeterValue />
      <Button size={'iconSmall'} tone="error" variant="ghost">
        <XIcon weight="bold" />
      </Button>
    </Meter>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Horizontal layout optimized for compact toolbars, inline task rows, and list items.',
      },
    },
  },
}

export const Downloading: Story = {
  name: 'Composition / Downloading',
  render: (args) => (
    <Meter className="w-[500px]" {...args}>
      <MeterHeader>
        <MeterLabel>
          <SpinnerGapIcon className="animate-spin" />
          Downloading File...
        </MeterLabel>
      </MeterHeader>
      <MeterTrack>
        <MeterIndicator />
      </MeterTrack>
      <MeterFooter>
        <MeterSubtitle>Estimated time remaining: 2 minutes</MeterSubtitle>
        <MeterValue />
      </MeterFooter>
      <Button tone="error" className={'w-full'} size={'small'}>
        <XIcon weight="bold" /> Cancel
      </Button>
    </Meter>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Practical asynchronous workflow with progress, status label, and cancel action.',
      },
    },
  },
}

export const AllSizes: Story = {
  name: 'Composition / All Sizes',
  render: () => (
    <div className="flex w-[500px] flex-col gap-md">
      {SIZES.map((size) => (
        <Meter key={size} orientation="vertical" size={size} tone="brand" value={56}>
          <MeterHeader>
            <MeterLabel className="capitalize">{size}</MeterLabel>
          </MeterHeader>
          <MeterTrack>
            <MeterIndicator />
          </MeterTrack>
          <MeterFooter>
            <MeterValue />
          </MeterFooter>
        </Meter>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Comparison view of all track sizes for choosing visual weight by context.',
      },
    },
  },
}

export const AllTones: Story = {
  name: 'Composition / All Tones',
  render: () => (
    <div className="flex w-[500px] flex-col gap-sm">
      {TONES.map((tone) => (
        <Meter key={tone} orientation="vertical" size="medium" tone={tone} value={62}>
          <MeterHeader>
            <MeterLabel className="capitalize">{tone}</MeterLabel>
          </MeterHeader>
          <MeterTrack>
            <MeterIndicator />
          </MeterTrack>
          <MeterFooter>
            <MeterSubtitle>Status: {tone}</MeterSubtitle>
            <MeterValue />
          </MeterFooter>
        </Meter>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Reference set showing each semantic tone for status-driven progress UI.',
      },
    },
  },
}

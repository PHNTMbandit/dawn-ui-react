import { CheckIcon } from '@phosphor-icons/react'
import { Progress } from './progress'
import { ProgressBar } from './progress-bar'
import { ProgressIndicator } from './progress-indicator'

import type { Meta, StoryObj } from '@storybook/react-vite'

const STEP_ITEMS = [
  {
    title: 'Account',
    description: 'Set your account details',
  },
  {
    title: 'Verification',
    description: 'Confirm contact information',
  },
  {
    title: 'Complete',
    description: 'Finalize your setup',
  },
] as const

const StepsTemplate = ({
  currentIndex = 1,
  withIcons = false,
}: {
  currentIndex?: number
  withIcons?: boolean
}) => (
  <Progress className="w-[300px]" currentIndex={currentIndex}>
    {STEP_ITEMS.map((item, index) => (
      <div key={item.title} className="contents">
        <ProgressIndicator description={item.description} title={item.title}>
          {withIcons && index + 1 < currentIndex ? <CheckIcon weight="bold" /> : index + 1}
        </ProgressIndicator>
        {index < STEP_ITEMS.length - 1 ? <ProgressBar /> : null}
      </div>
    ))}
  </Progress>
)

export default {
  title: 'Components/Progress',
  component: Progress,
  subcomponents: { ProgressIndicator, ProgressBar },
  argTypes: {
    currentIndex: {
      control: { type: 'number', min: 1, max: 3, step: 1 },
      description: 'Current active step index (1-based).',
      table: {
        defaultValue: { summary: '1' },
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'A step-based progress tracker composed from indicators and connecting bars.',
      description: {
        component:
          'The Progress component helps represent multi-step workflows such as onboarding, checkout, and setup flows. Compose steps with `ProgressIndicator` and connectors with `ProgressBar`, then control the highlighted state with `currentIndex`. Indicators support optional titles and descriptions for richer guidance.',
      },
    },
  },
  args: {
    currentIndex: 1,
  },
  render: (args) => <StepsTemplate currentIndex={args.currentIndex} />,
} satisfies Meta<typeof Progress>

type Story = StoryObj<typeof Progress>
type IndicatorStory = StoryObj<typeof ProgressIndicator>
type BarStory = StoryObj<typeof ProgressBar>

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Use controls to test how step highlighting changes as `currentIndex` updates.',
      },
    },
  },
}

export const Default: Story = {
  name: 'State / Numeric Steps',
}

export const WithCompletionIcons: Story = {
  name: 'State / Completion Icons',
  args: {
    currentIndex: 2,
  },
  render: (args) => <StepsTemplate currentIndex={args.currentIndex} withIcons />,
  parameters: {
    docs: {
      description: {
        story:
          'Completed steps can display icons while the current step stays numeric for clarity.',
      },
    },
  },
}

export const IndicatorText: IndicatorStory = {
  name: 'Primitive / Indicator Text',
  args: {
    title: 'Profile',
    description: 'Complete your profile details',
  },
  render: (args) => <ProgressIndicator {...args}>1</ProgressIndicator>,
  parameters: {
    docs: {
      description: {
        story: 'A text indicator primitive with title and description metadata.',
      },
    },
  },
}

export const IndicatorIcon: IndicatorStory = {
  name: 'Primitive / Indicator Icon',
  args: {
    title: 'Verified',
    description: 'Step completed successfully',
  },
  render: (args) => (
    <ProgressIndicator {...args}>
      <CheckIcon weight="bold" />
    </ProgressIndicator>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon indicator primitive for completed milestones.',
      },
    },
  },
}

export const Bar: BarStory = {
  name: 'Primitive / Bar',
  render: (args) => (
    <div className="w-3xl">
      <ProgressBar {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Connector bar primitive used between step indicators in composed layouts.',
      },
    },
  },
}

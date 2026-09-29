import { Button } from '../button'
import { Tooltip } from './tooltip'
import { TooltipContent } from './tooltip-context'
import { TooltipTrigger } from './tooltip-trigger'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  subcomponents: { TooltipContent, TooltipTrigger },
  parameters: {
    subtitle: 'Tooltips display informative text when users hover over, focus, or tap an element.',
    description: {
      component:
        'Tooltip provides contextual hints without adding permanent UI clutter. These stories show placement, offset configuration, and common composition patterns.',
    },
  },
} satisfies Meta<typeof Tooltip>

type Story = StoryObj<typeof Tooltip>

export const Playground: Story = {
  render: (args) => (
    <div className="flex w-[500px] items-center justify-center py-xl">
      <Tooltip {...args}>
        <TooltipTrigger>
          <span className="hover:cursor-pointer hover:underline">Hover me</span>
        </TooltipTrigger>
        <TooltipContent>Tooltip</TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const PositionTop: Story = {
  render: (args) => (
    <div className="flex w-[500px] items-center justify-center py-xl">
      <Tooltip {...args}>
        <TooltipTrigger>
          <span className="hover:cursor-pointer hover:underline">Top tooltip</span>
        </TooltipTrigger>
        <TooltipContent side="top">Shown above trigger</TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const PositionRight: Story = {
  render: (args) => (
    <div className="flex w-[500px] items-center justify-center py-xl">
      <Tooltip {...args}>
        <TooltipTrigger>
          <span className="hover:cursor-pointer hover:underline">Right tooltip</span>
        </TooltipTrigger>
        <TooltipContent side="right">Shown on the right</TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const BehaviorWithOffset: Story = {
  render: (args) => (
    <div className="flex w-[500px] items-center justify-center py-xl">
      <Tooltip {...args}>
        <TooltipTrigger>
          <span className="hover:cursor-pointer hover:underline">Offset tooltip</span>
        </TooltipTrigger>
        <TooltipContent side="bottom" sideOffset={12} alignOffset={8}>
          Increased side and align offsets
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const CompositionIconButtonHelp: Story = {
  render: (args) => (
    <div className="w-[500px] rounded-lg border border-surface-3 bg-surface p-md">
      <div className="flex items-center justify-between">
        <span className="style-text-default-0">API Key</span>
        <Tooltip {...args}>
          <TooltipTrigger>
            <Button size="iconSmall" tone="neutral" variant="soft" aria-label="What is this?">
              ?
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">Used to authenticate your requests.</TooltipContent>
        </Tooltip>
      </div>
    </div>
  ),
}

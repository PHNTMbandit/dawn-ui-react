import { Button } from '../button'
import { PreviewCard } from './preview-card'
import { PreviewCardPopup } from './preview-card-popup'
import { PreviewCardTrigger } from './preview-card-trigger'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Preview Card',
  component: PreviewCard,
  parameters: {
    docs: {
      description: {
        component: 'A card component for previewing content.',
      },
    },
  },
  render: (args) => (
    <PreviewCard {...args}>
      The principles of good{' '}
      <PreviewCardTrigger href="https://en.wikipedia.org/wiki/Typography">
        <Button variant={'link'} tone="neutral">
          typography
        </Button>
      </PreviewCardTrigger>{' '}
      remain in the digital age.
      <PreviewCardPopup>
        <div className="flex w-min flex-col gap-2xs p-xs">
          <img
            width="224"
            height="150"
            className="block max-w-none rounded-lg"
            src="https://images.unsplash.com/photo-1619615391095-dfa29e1672ef?q=80&w=448&h=300"
            alt="Station Hofplein signage in Rotterdam, Netherlands"
          />
          <p className="text-sm">
            <strong>Typography</strong> is the art and science of arranging type to make written
            language clear, visually appealing, and effective in communication.
          </p>
        </div>
      </PreviewCardPopup>
    </PreviewCard>
  ),
} satisfies Meta<typeof PreviewCard>

type Story = StoryObj<typeof PreviewCard>

export const Playground: Story = {}

import { Collapsible } from './collapsible'
import { CollapsiblePanel } from './collapsible-panel'
import { CollapsibleTrigger } from './collapsible-trigger'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Collapsible',
  component: Collapsible,
  subcomponents: {
    CollapsiblePanel,
    CollapsibleTrigger,
  },
  parameters: {
    docs: {
      subtitle: 'Collapsibles are used to hide and show content.',
      description: {
        component:
          'The Collapsible component is used to create collapsible sections of content. It typically consists of a trigger that can be clicked to expand or collapse the content.',
      },
    },
  },
  render: (args) => (
    <Collapsible {...args}>
      <CollapsibleTrigger>Toggle Content</CollapsibleTrigger>
      <CollapsiblePanel>
        <div>alien-bean-pasta</div>
        <div>wild-irish-burrito</div>
        <div>horse-battery-staple</div>
      </CollapsiblePanel>
    </Collapsible>
  ),
} satisfies Meta<typeof Collapsible>

type Story = StoryObj<typeof Collapsible>

export const Default: Story = {}

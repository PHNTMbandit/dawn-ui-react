import { CommandIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../input-group'
import { Kbd } from './kbd'
import { KbdGroup } from './kbd-group'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Kbd',
  component: Kbd,
  subcomponents: { KbdGroup },
  argTypes: {
    children: {
      control: 'text',
      description: 'Shortcut label shown inside the keycap.',
      table: {
        defaultValue: { summary: 'Ctrl + K' },
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'A visual keycap for displaying keyboard shortcuts and key hints.',
      description: {
        component:
          'The Kbd component highlights keyboard keys or shortcut combinations in compact keycap styling. Use it alongside buttons, inputs, command palettes, and instructional content. Compose multiple keys with `KbdGroup` for modifier and sequence combinations.',
      },
    },
  },
  args: {
    children: 'Ctrl + K',
  },
  render: (args) => <Kbd {...args} />,
} satisfies Meta<typeof Kbd>

type Story = StoryObj<typeof Kbd>

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground for trying key labels and observing spacing inside the keycap.',
      },
    },
  },
}

export const Text: Story = {
  name: 'Content / Text',
  args: {
    children: 'Ctrl + K',
  },
  parameters: {
    docs: {
      description: {
        story: 'Standard textual shortcut presentation for command hints and docs.',
      },
    },
  },
}

export const Icon: Story = {
  name: 'Content / Icon',
  args: {
    children: undefined,
  },
  render: (args) => (
    <Kbd {...args}>
      <CommandIcon />
    </Kbd>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon-only keycap variant useful for command key or platform-specific symbols.',
      },
    },
  },
}

export const ShortcutGroup: Story = {
  name: 'Composition / Shortcut Group',
  render: (args) => (
    <KbdGroup>
      <Kbd {...args}>Ctrl</Kbd>
      <Kbd {...args}>Shift</Kbd>
      <Kbd {...args}>P</Kbd>
    </KbdGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Combine multiple keycaps with `KbdGroup` for modifier-based shortcuts.',
      },
    },
  },
}

export const WithButton: Story = {
  name: 'Composition / Button',
  args: {
    children: 'Enter',
  },
  render: (args) => (
    <Button>
      Generate
      <Kbd {...args}>
        <p>Enter</p>
      </Kbd>
    </Button>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Attach a key hint to action buttons for quick discoverability.',
      },
    },
  },
}

export const WithInput: Story = {
  name: 'Composition / Input',
  args: {
    children: 'Ctrl + F',
  },
  render: (args) => (
    <InputGroup>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <Kbd {...args}>
          <p>Ctrl + F</p>
        </Kbd>
      </InputGroupAddon>
    </InputGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Embed keyboard hints inside input add-ons for searchable interfaces.',
      },
    },
  },
}

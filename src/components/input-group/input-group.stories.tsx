import {
  CheckIcon,
  CircleNotchIcon,
  MagnifyingGlassIcon,
  TagIcon,
  XIcon,
} from '@phosphor-icons/react'
import { Button } from '../button'
import { Kbd } from '../kbd'
import { InputGroup } from './input-group'
import { InputGroupAddon } from './input-group-addon'
import { InputGroupInput } from './input-group-input'
import { InputGroupSeparator } from './input-group-separator'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Input Group',
  component: InputGroup,
  subcomponents: {
    InputGroupAddon,
    InputGroupInput,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Applies the same surface variant styles as the base Input component.',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    'aria-invalid': {
      control: 'boolean',
      description: 'Marks the group as invalid to trigger error state styling.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    variant: 'primary',
  },
  parameters: {
    docs: {
      subtitle: 'A composed input container with leading/trailing addons and shared state styling.',
      description: {
        component:
          'Input Group combines one editable input with optional addons (icons, text labels, shortcuts, spinners, and buttons) into a single cohesive control. It supports the same variants as Input (`primary`, `secondary`) and responds to invalid state using `aria-invalid`.',
      },
    },
  },
} satisfies Meta<typeof InputGroup>

type Story = StoryObj<typeof InputGroup>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      description: {
        story:
          'Use controls to toggle variants and invalid state. This template demonstrates icon addons on both sides.',
      },
    },
  },
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupAddon>
        <MagnifyingGlassIcon weight="bold" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search projects" />
      <InputGroupAddon>
        <CheckIcon weight="bold" />
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const Primary: Story = {
  name: 'Variant / Primary',
  args: {
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default elevated style for standard forms and filters.',
      },
    },
  },
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupAddon>
        <TagIcon weight="bold" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Campaign name" />
    </InputGroup>
  ),
}

export const Secondary: Story = {
  name: 'Variant / Secondary',
  args: {
    variant: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Subtle surface style for dense layouts or nested containers.',
      },
    },
  },
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupAddon>
        <MagnifyingGlassIcon weight="bold" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search by keyword" />
    </InputGroup>
  ),
}

export const IconAddons: Story = {
  name: 'Addon / Icon',
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupAddon>
        <MagnifyingGlassIcon weight="bold" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search users" />
      <InputGroupAddon size={'large'}>
        <CheckIcon weight="bold" />
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const TextAddons: Story = {
  name: 'Addon / Text',
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupAddon>$</InputGroupAddon>
      <InputGroupInput placeholder="0.00" type="number" />
      <InputGroupAddon size="small">AUD</InputGroupAddon>
    </InputGroup>
  ),
}

export const ButtonAddon: Story = {
  name: 'Addon / Button',
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupInput placeholder="Invite by email" type="email" />
      <InputGroupAddon>
        <Button size="small" tone="neutral" variant="outline">
          Send
        </Button>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const KeyboardHint: Story = {
  name: 'Addon / Keyboard Hint',
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupInput placeholder="Search across workspace" />
      <InputGroupAddon>
        <Kbd>⌘ K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  ),
}

export const LoadingState: Story = {
  name: 'State / Loading',
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupInput placeholder="Saving changes..." value="Project Atlas" />
      <InputGroupAddon>
        Saving
        <CircleNotchIcon className="size-sm animate-spin" weight="bold" />
      </InputGroupAddon>
    </InputGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Shows asynchronous save feedback using a trailing spinner addon.',
      },
    },
  },
}

export const InvalidState: Story = {
  name: 'State / Invalid',
  render: (args) => (
    <InputGroup {...args} aria-invalid>
      <InputGroupInput defaultValue="invalid@email" placeholder="Enter email" type="email" />
      <InputGroupAddon>
        <XIcon weight="bold" />
      </InputGroupAddon>
    </InputGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Apply `aria-invalid` on the wrapper to style both input and addons consistently.',
      },
    },
  },
}

export const SearchBar: Story = {
  name: 'Composition / Search Bar',
  render: (args) => (
    <div className="w-[480px]">
      <InputGroup {...args} variant="secondary">
        <InputGroupAddon>
          <MagnifyingGlassIcon weight="bold" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search projects, files, and users" />
        <InputGroupAddon>
          <Kbd>⌘ F</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A complete search bar pattern combining icon and keyboard shortcut addons.',
      },
    },
  },
}

export const CurrencyInput: Story = {
  name: 'Composition / Currency Input',
  render: (args) => (
    <div className="w-[320px]">
      <InputGroup {...args}>
        <InputGroupAddon>$</InputGroupAddon>
        <InputGroupInput defaultValue="1250" inputMode="decimal" type="number" placeholder="0.00" />
        <InputGroupAddon>AUD</InputGroupAddon>
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A common financial input pattern with prefix/suffix text addons.',
      },
    },
  },
}

export const MultiInput: Story = {
  name: 'Composition / Multi-Input',
  render: (args) => (
    <div className="w-[480px]">
      <InputGroup {...args} variant="secondary">
        <InputGroupAddon>
          <TagIcon weight="bold" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Campaign name" />
        <InputGroupSeparator orientation="vertical" />
        <InputGroupAddon>
          <TagIcon weight="bold" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Campaign name" />
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Stack multiple input groups together for complex forms.',
      },
    },
  },
}

export const Color: Story = {
  name: 'Composition / Color Input',
  render: (args) => (
    <div className="w-[480px]">
      <InputGroup {...args}>
        <InputGroupInput type="color" />
      </InputGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A color input pattern with a leading icon addon.',
      },
    },
  },
}

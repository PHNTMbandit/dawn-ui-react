import { CaretUpDownIcon, CheckIcon, CrownIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { Popover, PopoverDescription, PopoverPanel, PopoverTitle, PopoverTrigger } from '../popover'
import { Profile } from './profile'

import type { Meta, StoryObj } from '@storybook/react-vite'

const AVATAR_SIZES = ['small', 'medium', 'large'] as const
const BADGE_TONES = ['brand', 'accent', 'neutral', 'error', 'info', 'success', 'warning'] as const
const BADGE_POSITIONS = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'] as const

export default {
  title: 'Components/Profile',
  component: Profile,
  argTypes: {
    profileName: {
      control: 'text',
      description: 'Primary user name displayed next to the avatar.',
    },
    profileEmail: {
      control: 'text',
      description: 'Secondary email or supporting identity text.',
    },
    imageUrl: {
      control: 'text',
      description: 'Avatar image URL. Leave empty to use fallback initials.',
    },
    fallbackText: {
      control: 'text',
      description: 'Optional custom initials. Auto-generated from profile name when omitted.',
    },
    compact: {
      control: 'boolean',
      description: 'Hides profile text for compact avatar-first layouts.',
    },
    hideEmail: {
      control: 'boolean',
      description: 'Hides the email row while keeping the name visible.',
    },
    avatarSize: {
      control: { type: 'select' },
      options: AVATAR_SIZES,
      description: 'Avatar size token applied to the profile avatar.',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
    showBadge: {
      control: 'boolean',
      description: 'Enables AvatarBadge rendering on top of the profile avatar.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    badgeTone: {
      control: { type: 'select' },
      options: BADGE_TONES,
      description: 'Semantic tone for the avatar badge.',
      table: {
        defaultValue: { summary: 'success' },
      },
    },
    badgePosition: {
      control: { type: 'select' },
      options: BADGE_POSITIONS,
      description: 'Placement of the badge relative to the avatar.',
      table: {
        defaultValue: { summary: 'bottomRight' },
      },
    },
    badgeContent: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      subtitle: 'A profile identity row with built-in avatar, optional badge support, and actions.',
      description: {
        component:
          'The Profile component combines avatar, user identity text, and optional right-side actions. It is optimized for account menus, sidebars, and header controls. Badge support is built in (`showBadge`, `badgeTone`, `badgePosition`, `badgeContent`) so you can quickly represent status, role, or notifications without composing avatar internals manually.',
      },
    },
  },
  args: {
    imageUrl: 'https://github.com/shadcn.png',
    profileName: 'John Smith',
    profileEmail: 'john.smith@example.com',
    compact: false,
    hideEmail: false,
    avatarSize: 'medium',
    showBadge: false,
    badgeTone: 'success',
    badgePosition: 'bottomRight',
  },
} satisfies Meta<typeof Profile>

type Story = StoryObj<typeof Profile>

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use controls to explore profile display variants and built-in avatar badge settings.',
      },
    },
  },
}

export const Default: Story = {
  name: 'State / Default',
}

export const Compact: Story = {
  name: 'State / Compact',
  args: {
    compact: true,
  },
}

export const WithoutImage: Story = {
  name: 'State / Fallback Initials',
  args: {
    imageUrl: undefined,
    profileName: 'Taylor Morgan',
    profileEmail: 'taylor.morgan@example.com',
    fallbackText: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'When no image URL is provided, initials are generated automatically from the name.',
      },
    },
  },
}

export const WithBadgeDot: Story = {
  name: 'Badge / Dot',
  args: {
    showBadge: true,
    badgeTone: 'success',
  },
  parameters: {
    docs: {
      description: {
        story: 'Enable a simple status dot badge without additional content.',
      },
    },
  },
}

export const WithBadgeIcon: Story = {
  name: 'Badge / Icon',
  args: {
    showBadge: true,
    badgeTone: 'brand',
    badgeContent: <CrownIcon weight="bold" />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Use icon content to communicate role or priority directly on the avatar badge.',
      },
    },
  },
}

export const WithChildren: Story = {
  name: 'Composition / With Action',
  render: (args) => (
    <Profile {...args} className="w-[400px]">
      <CaretUpDownIcon />
    </Profile>
  ),
}

export const AsButton: Story = {
  name: 'Composition / In Popover Trigger',
  render: (args) => (
    <Popover>
      <PopoverTrigger>
        <Button variant={'ghost'} tone="neutral" size={'large'}>
          <Profile {...args} className="w-[400px]">
            <CaretUpDownIcon />
          </Profile>
        </Button>
      </PopoverTrigger>
      <PopoverPanel side="top">
        <PopoverTitle>Profile Options</PopoverTitle>
        <PopoverDescription>View your profile, settings, or log out.</PopoverDescription>
      </PopoverPanel>
    </Popover>
  ),
}

export const VerifiedAccount: Story = {
  name: 'Composition / Verified Account',
  args: {
    profileName: 'Sofia Lee',
    profileEmail: 'sofia.lee@example.com',
    showBadge: true,
    badgeTone: 'info',
    badgeContent: <CheckIcon weight="bold" />,
  },
  render: (args) => (
    <Profile {...args} className="w-[400px]">
      <Button size="small" tone="neutral" variant="ghost">
        Manage
      </Button>
    </Profile>
  ),
}

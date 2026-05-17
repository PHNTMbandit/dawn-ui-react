import { CaretUpDownIcon, CheckIcon, SealCheckIcon } from '@phosphor-icons/react'
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from '../avatar'
import { Button } from '../button'
import { Popover, PopoverDescription, PopoverPanel, PopoverTitle, PopoverTrigger } from '../popover'
import { Profile } from './profile'
import { ProfileAction } from './profile-action'
import { ProfileContent } from './profile-content'
import { ProfileName } from './profile-name'
import { ProfileSubname } from './profile-subname'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Profile',
  component: Profile,
  parameters: {
    docs: {
      subtitle: 'A profile identity row with avatar, content, and optional actions.',
      description: {
        component:
          'The Profile component combines avatar, user identity text, and optional right-side actions. It is optimized for account menus, sidebars, and header controls. Compose with `Avatar`, `AvatarBadge`, `ProfileContent`, `ProfileName`, and `ProfileSubname` for full control over layout and styling.',
      },
    },
  },
  render: (args) => (
    <Profile {...args}>
      <Avatar>
        <AvatarFallback>DP</AvatarFallback>
        <AvatarImage src={'https://github.com/shadcn.png'} alt={'Profile Image'} />
      </Avatar>
      <ProfileContent>
        <ProfileName>Domenic Pittari</ProfileName>
        <ProfileSubname>dom.pittari@gmail.com</ProfileSubname>
      </ProfileContent>
    </Profile>
  ),
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

export const WithoutImage: Story = {
  name: 'State / Fallback Initials',
  parameters: {
    docs: {
      description: {
        story: 'When no image URL is provided, initials are generated automatically from the name.',
      },
    },
  },
  render: (args) => (
    <Profile {...args}>
      <Avatar>
        <AvatarFallback>DP</AvatarFallback>
      </Avatar>
      <ProfileContent>
        <ProfileName>Domenic Pittari</ProfileName>
        <ProfileSubname>dom.pittari@gmail.com</ProfileSubname>
      </ProfileContent>
    </Profile>
  ),
}

export const WithBadgeDot: Story = {
  name: 'Badge / Dot',
  parameters: {
    docs: {
      description: {
        story: 'Enable a simple status dot badge without additional content.',
      },
    },
  },
  render: (args) => (
    <Profile {...args}>
      <Avatar>
        <AvatarFallback>DP</AvatarFallback>
        <AvatarImage src={''} alt={'Profile Image'} />
        <AvatarBadge tone="success" />
      </Avatar>
      <ProfileContent>
        <ProfileName>Domenic Pittari</ProfileName>
        <ProfileSubname>dom.pittari@gmail.com</ProfileSubname>
      </ProfileContent>
    </Profile>
  ),
}

export const WithBadgeIcon: Story = {
  name: 'Badge / Icon',
  parameters: {
    docs: {
      description: {
        story: 'Use icon content to communicate role or priority directly on the avatar badge.',
      },
    },
  },
  render: (args) => (
    <Profile {...args}>
      <Avatar>
        <AvatarFallback>DP</AvatarFallback>
        <AvatarImage src={''} alt={'Profile Image'} />
        <AvatarBadge tone="success">
          <CheckIcon weight="bold" />
        </AvatarBadge>
      </Avatar>
      <ProfileContent>
        <ProfileName>Domenic Pittari</ProfileName>
        <ProfileSubname>dom.pittari@gmail.com</ProfileSubname>
      </ProfileContent>
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
            <Avatar>
              <AvatarFallback>DP</AvatarFallback>
              <AvatarImage src={''} alt={'Profile Image'} />
              <AvatarBadge tone="success">
                <CheckIcon weight="bold" />
              </AvatarBadge>
            </Avatar>
            <ProfileContent>
              <ProfileName>Domenic Pittari</ProfileName>
              <ProfileSubname>dom.pittari@gmail.com</ProfileSubname>
            </ProfileContent>
            <ProfileAction>
              <CaretUpDownIcon />
            </ProfileAction>
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
  render: (args) => (
    <Profile {...args}>
      <Avatar>
        <AvatarFallback>DP</AvatarFallback>
        <AvatarImage src={''} alt={'Profile Image'} />
        <AvatarBadge tone="success">
          <CheckIcon weight="bold" />
        </AvatarBadge>
      </Avatar>
      <ProfileContent>
        <ProfileName>
          Domenic Pittari
          <SealCheckIcon weight="fill" className="text-success-default" />
        </ProfileName>
        <ProfileSubname>dom.pittari@gmail.com</ProfileSubname>
      </ProfileContent>
    </Profile>
  ),
}

import { BellIcon, ChartBarIcon, UserIcon } from '@phosphor-icons/react'
import React from 'react'
import { Avatar, AvatarImage } from '../avatar'
import { Button } from '../button'
import { Popover } from './popover'
import { PopoverContent } from './popover-content'
import { PopoverDescription } from './popover-description'
import { PopoverHeader } from './popover-header'
import { PopoverPanel } from './popover-panel'
import { PopoverTitle } from './popover-title'
import { PopoverTrigger } from './popover-trigger'
import { popoverHandle } from './popover.types'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Popover',
  component: Popover,
  subcomponents: {
    PopoverDescription,
    PopoverPanel,
    PopoverTitle,
    PopoverTrigger,
  },
  parameters: {
    docs: {
      subtitle: 'A component for displaying contextual overlays.',
      description: {
        component:
          'The Popover component provides a way to display additional information or actions in a floating container that appears on user interaction, such as clicking or hovering over an element. It is useful for showing tooltips, menus, or other contextual content without cluttering the main interface.',
      },
    },
  },

  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger>
        <span className="style-text-default-0 hover:cursor-pointer hover:underline">Click me</span>
      </PopoverTrigger>
      <PopoverPanel side="top">
        <PopoverHeader>
          <PopoverTitle>Popover Title</PopoverTitle>
          <PopoverDescription>
            Popover content goes here. Popover content goes here. Popover content goes here.{' '}
          </PopoverDescription>
        </PopoverHeader>
        <PopoverContent>
          <Button size="medium" className={'w-full'}>
            Action
          </Button>
        </PopoverContent>
      </PopoverPanel>
    </Popover>
  ),
} satisfies Meta<typeof Popover>

type Story = StoryObj<typeof Popover>

export const Default: Story = {}
export const Animated: Story = {
  render: (args) => (
    <div className="flex gap-2xs">
      <PopoverTrigger handle={popoverHandle} payload={NotificationsPanel}>
        <Button size="iconMedium" variant={'ghost'} tone="neutral">
          <BellIcon weight="bold" />
        </Button>
      </PopoverTrigger>
      <PopoverTrigger handle={popoverHandle} payload={ProfilePanel}>
        <Button size="iconMedium" variant={'ghost'} tone="neutral">
          <UserIcon weight="bold" />
        </Button>
      </PopoverTrigger>
      <PopoverTrigger handle={popoverHandle} payload={ActivityPanel}>
        <Button size="iconMedium" variant={'ghost'} tone="neutral">
          <ChartBarIcon weight="bold" />
        </Button>
      </PopoverTrigger>
      <Popover handle={popoverHandle} {...args}>
        {({ payload }) => {
          const Payload = payload as React.ComponentType | undefined
          return <PopoverPanel side="top">{Payload !== undefined && <Payload />}</PopoverPanel>
        }}
      </Popover>
    </div>
  ),
}

function NotificationsPanel() {
  return (
    <React.Fragment>
      <PopoverTitle>Notifications</PopoverTitle>
      <PopoverDescription>You are all caught up. Good job!</PopoverDescription>
    </React.Fragment>
  )
}

function ProfilePanel() {
  return (
    <div className="-mx-2xs grid grid-cols-[auto_auto] gap-x-xs">
      <PopoverTitle>Jason Eventon</PopoverTitle>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80"
          width="48"
          height="48"
          className="size-full object-cover"
        />
      </Avatar>
      <span className="col-start-2 col-end-3 row-start-2 row-end-3 text-sm">Pro plan</span>
      <div className="col-start-1 col-end-3 row-start-3 row-end-4 mt-2xs flex flex-col gap-2xs border-t pt-3xs text-sm">
        <a href="#" className="no-underline hover:underline">
          Profile settings
        </a>
        <a href="#" className="no-underline hover:underline">
          Log out
        </a>
      </div>
    </div>
  )
}

function ActivityPanel() {
  return (
    <React.Fragment>
      <PopoverTitle className="m-0 text-base font-medium">Activity</PopoverTitle>
      <PopoverDescription className="m-0 text-base">
        Nothing interesting happened recently.
      </PopoverDescription>
    </React.Fragment>
  )
}

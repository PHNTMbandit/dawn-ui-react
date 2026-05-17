import {
  CaretUpDownIcon,
  ChartLineIcon,
  ChatIcon,
  CloudRainIcon,
  GridFourIcon,
  MapTrifoldIcon,
  MegaphoneIcon,
  MountainsIcon,
  NotePencilIcon,
  QuestionIcon,
  UserIcon,
} from '@phosphor-icons/react'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'
import { Avatar, AvatarFallback } from '../avatar'
import { Profile, ProfileName } from '../profile'
import { Sidebar } from './sidebar'
import { SidebarContent } from './sidebar-content'
import { SidebarFooter } from './sidebar-footer'
import { SidebarGroup } from './sidebar-group'
import { SidebarGroupContent } from './sidebar-group-content'
import { SidebarGroupLabel } from './sidebar-group-label'
import { SidebarHeader } from './sidebar-header'
import { SidebarMenu } from './sidebar-menu'
import { SidebarMenuBadge } from './sidebar-menu-badge'
import { SidebarMenuButton } from './sidebar-menu-button'
import { SidebarMenuCollapsible } from './sidebar-menu-collapsible'
import { SidebarMenuCollapsiblePanel } from './sidebar-menu-collapsible-panel'
import { SidebarMenuCollapsibleTrigger } from './sidebar-menu-collapsible-trigger'
import { SidebarMenuItem } from './sidebar-menu-item'
import { SidebarProvider } from './sidebar-provider'
import { SidebarToggle } from './sidebar-toggle'

import type { Meta, StoryObj } from '@storybook/react-vite'

const TONES = ['default', 'ghost'] as const

const APP_FRAME_CLASS = 'h-[70vh] w-[1100px] overflow-hidden rounded-2xl border border-border'

const SidebarLogo = ({ isExpanded }: { isExpanded: boolean }) => (
  <>
    <GridFourIcon weight="fill" />
    {isExpanded ? <span>My Application</span> : null}
  </>
)

const PrimaryNavigation = () => (
  <SidebarGroup>
    <SidebarGroupLabel>Menu</SidebarGroupLabel>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton isActive>
          <GridFourIcon weight="bold" />
          <span>Dashboard</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <MapTrifoldIcon weight="bold" />
          <span>Map</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <ChartLineIcon weight="bold" />
          <span>Usage</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuCollapsible>
        <SidebarMenuCollapsibleTrigger>
          <NotePencilIcon weight="bold" />
          <span>Projects</span>
        </SidebarMenuCollapsibleTrigger>
        <SidebarMenuCollapsiblePanel>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <CloudRainIcon weight="bold" />
              <span>Point Cloud Viewer</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <MountainsIcon weight="bold" />
              <span>3D Tile Projects</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenuCollapsiblePanel>
      </SidebarMenuCollapsible>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <MegaphoneIcon weight="bold" />
          <span>Announcements</span>
        </SidebarMenuButton>
        <SidebarMenuBadge tone="accent">9</SidebarMenuBadge>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <QuestionIcon weight="bold" />
          <span>Help Center</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
)

const SecondaryNavigation = () => (
  <SidebarGroup>
    <SidebarGroupLabel>Admin</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <ChatIcon weight="bold" />
            <span>Communications</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <UserIcon weight="bold" />
            <span>Team Members</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
)

const SidebarShell = ({
  tone,
  width,
  provider,
}: {
  tone?: (typeof TONES)[number]
  width?: number
  provider?: { collapsible?: 'icon' | 'offcanvas' | 'none'; side?: 'left' | 'right' }
}) => (
  <div className={APP_FRAME_CLASS}>
    <SidebarProvider collapsible={provider?.collapsible} side={provider?.side}>
      <Sidebar tone={tone} width={width}>
        <SidebarHeader>{(isExpanded) => <SidebarLogo isExpanded={isExpanded} />}</SidebarHeader>
        <SidebarContent>
          <PrimaryNavigation />
          <SecondaryNavigation />
        </SidebarContent>
        <SidebarFooter>
          {(isExpanded) =>
            isExpanded ? (
              <Profile>
                <ProfileName>Demo User</ProfileName>
                <CaretUpDownIcon />
              </Profile>
            ) : (
              <Avatar>
                <AvatarFallback>DP</AvatarFallback>
              </Avatar>
            )
          }
        </SidebarFooter>
      </Sidebar>

      <div className="flex flex-1 flex-col gap-sm bg-surface-background p-md">
        <div className="flex items-center justify-between rounded-lg bg-surface-low p-sm">
          <p className="style-text-strong--1 text-on-surface">Workspace Content</p>
          <SidebarToggle />
        </div>
        <div className="flex-1 rounded-lg bg-surface-low p-sm style-text-default--1 text-on-surface-variant">
          Main content area to demonstrate sidebar positioning and collapse behavior.
        </div>
      </div>
    </SidebarProvider>
  </div>
)

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  subcomponents: {
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuCollapsible,
    SidebarMenuCollapsiblePanel,
    SidebarMenuCollapsibleTrigger,
    SidebarMenuItem,
    SidebarProvider,
    SidebarToggle,
  },
  argTypes: {
    tone: {
      control: { type: 'select' },
      options: TONES,
      description: 'Visual surface treatment for the sidebar container.',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    width: {
      control: { type: 'number', min: 220, max: 520, step: 10 },
      description: 'Expanded sidebar width in pixels.',
      table: {
        defaultValue: { summary: '400' },
      },
    },
  },
  args: {
    tone: 'default',
    width: 400,
  },
  parameters: {
    docs: {
      subtitle:
        'A composable navigation sidebar with collapse modes, grouped menus, and app-shell behavior.',
      description: {
        component:
          'Sidebar is a layout-aware navigation surface built from composable primitives such as groups, menu items, badges, and collapsible sections. Pair `SidebarProvider` with `Sidebar` to control side placement and collapse mode (`icon`, `offcanvas`, `none`). Use `SidebarToggle` to expose runtime control in app-shell layouts.',
      },
    },
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
  },
  render: (args) => <SidebarShell tone={args.tone} width={args.width as number} />,
} satisfies Meta<typeof Sidebar>

type Story = StoryObj<typeof Sidebar>

export const Playground: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground for width and tone with icon-collapse sidebar behavior.',
      },
    },
  },
}

export const CollapsibleIcon: Story = {
  name: 'Behavior / Collapsible Icon',
  render: (args) => (
    <SidebarShell
      provider={{ collapsible: 'icon' }}
      tone={args.tone}
      width={args.width as number}
    />
  ),
}

export const CollapsibleOffcanvas: Story = {
  name: 'Behavior / Collapsible Offcanvas',
  render: (args) => (
    <SidebarShell
      provider={{ collapsible: 'offcanvas' }}
      tone={args.tone}
      width={args.width as number}
    />
  ),
}

export const NonCollapsible: Story = {
  name: 'Behavior / Non Collapsible',
  render: (args) => (
    <SidebarShell
      provider={{ collapsible: 'none' }}
      tone={args.tone}
      width={args.width as number}
    />
  ),
}

export const GhostTone: Story = {
  name: 'Tone / Ghost',
  args: {
    tone: 'ghost',
  },
  render: (args) => (
    <SidebarShell
      provider={{ collapsible: 'icon' }}
      tone={args.tone}
      width={args.width as number}
    />
  ),
}

export const RightSide: Story = {
  name: 'Position / Right Side',
  render: (args) => (
    <SidebarShell provider={{ side: 'right' }} tone={args.tone} width={args.width as number} />
  ),
}

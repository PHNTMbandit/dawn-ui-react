import {
  BellIcon,
  ChartLineIcon,
  GearIcon,
  HouseIcon,
  MagnifyingGlassIcon,
} from '@phosphor-icons/react'
import { NavBar } from './nav-bar'
import { NavBarItem } from './nav-bar-item'
import { NavBarItemIcon } from './nav-bar-item-icon'
import { NavBarItemLabel } from './nav-bar-item-label'

import type { NavBarItemProps } from './nav-bar.types'
import type { Meta, StoryObj } from '@storybook/react-vite'

const SIZES = ['small', 'medium', 'large'] as const
const VARIANTS = ['outline', 'floating'] as const
const TONES = ['brand', 'accent', 'neutral', 'error', 'info', 'success', 'warning'] as const

// ─── Mobile shell ────────────────────────────────────────────────────────────

const PHONE_SIZES = {
  small: { w: 320, h: 568 },
  medium: { w: 390, h: 844 },
  large: { w: 430, h: 932 },
} as const

const MobileShell = ({
  children,
  navBar,
  size = 'medium',
}: {
  children?: React.ReactNode
  navBar: React.ReactNode
  size?: keyof typeof PHONE_SIZES
}) => {
  const { w, h } = PHONE_SIZES[size]
  return (
    <div
      className="relative mx-auto flex flex-col overflow-hidden rounded-3xl border-[6px] border-neutral-default bg-surface-background shadow-lg"
      style={{ width: w, height: h }}
    >
      {/* Status bar */}
      <div className="flex shrink-0 items-center justify-between px-sm pt-xs pb-3xs">
        <span className="style-text-strong--2 text-on-surface">9:41</span>
        <div className="flex items-center gap-3xs opacity-50">
          <div className="h-[6px] w-[16px] rounded-sm bg-on-surface" />
          <div className="size-[6px] rounded-sm bg-on-surface" />
          <div className="size-[6px] rounded-sm bg-on-surface" />
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-1 flex-col gap-sm overflow-hidden px-md pb-sm">
        {children ?? (
          <>
            <p className="style-text-strong-0 text-on-surface">Dashboard</p>
            <div className="flex-1 rounded-2xl bg-surface-low" />
            <div className="grid grid-cols-2 gap-sm">
              <div className="h-[96px] rounded-xl bg-surface-low" />
              <div className="h-[96px] rounded-xl bg-surface-low" />
            </div>
          </>
        )}
      </div>

      {/* Nav bar pinned to bottom */}
      <div className="flex shrink-0 justify-center pt-xs">{navBar}</div>
    </div>
  )
}

// ─── Shared nav items ─────────────────────────────────────────────────────────

const DefaultItems = ({ tone }: { tone?: NavBarItemProps['tone'] }) => (
  <>
    <NavBarItem isActive tone={tone}>
      <NavBarItemIcon>
        <HouseIcon />
      </NavBarItemIcon>
      <NavBarItemLabel>Home</NavBarItemLabel>
    </NavBarItem>
    <NavBarItem tone={tone}>
      <NavBarItemIcon>
        <MagnifyingGlassIcon />
      </NavBarItemIcon>
      <NavBarItemLabel>Search</NavBarItemLabel>
    </NavBarItem>
    <NavBarItem tone={tone}>
      <NavBarItemIcon>
        <ChartLineIcon />
      </NavBarItemIcon>
      <NavBarItemLabel>Stats</NavBarItemLabel>
    </NavBarItem>
    <NavBarItem tone={tone}>
      <NavBarItemIcon>
        <BellIcon />
      </NavBarItemIcon>
      <NavBarItemLabel>Alerts</NavBarItemLabel>
    </NavBarItem>
  </>
)

export default {
  title: 'Components/Nav Bar',
  component: NavBar,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: SIZES,
      table: { defaultValue: { summary: 'medium' } },
    },
    variant: {
      control: { type: 'select' },
      options: VARIANTS,
      table: { defaultValue: { summary: 'outline' } },
    },
  },
  args: {
    size: 'medium',
    variant: 'outline',
  },
  parameters: {
    docs: {
      subtitle: 'A floating navigation bar for mobile app-shell layouts.',
      description: {
        component:
          'NavBar is a compact bottom navigation surface composed of `NavBarItem`, `NavBarItemIcon`, and `NavBarItemLabel`. It supports three sizes, two visual variants, and per-item tone coloring.',
      },
    },
  },
} satisfies Meta<typeof NavBar>

type Story = StoryObj<typeof NavBar>

// ─── Playground ───────────────────────────────────────────────────────────────

export const Playground: Story = {
  render: (args) => (
    <MobileShell
      navBar={
        <NavBar {...args}>
          <DefaultItems />
        </NavBar>
      }
    />
  ),
}

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-end justify-center gap-xl">
      {SIZES.map((size) => (
        <div key={size} className="flex flex-col items-center gap-sm">
          <MobileShell
            size={size}
            navBar={
              <NavBar {...args} size={size}>
                <DefaultItems />
              </NavBar>
            }
          />
          <span className="style-text-strong--1 text-on-surface capitalize">{size}</span>
        </div>
      ))}
    </div>
  ),
}

// ─── Variants ────────────────────────────────────────────────────────────────

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-end justify-center gap-xl">
      {VARIANTS.map((variant) => (
        <div key={variant} className="flex flex-col items-center gap-sm">
          <MobileShell
            navBar={
              <NavBar {...args} variant={variant}>
                <DefaultItems />
              </NavBar>
            }
          />
          <span className="style-text-strong--1 text-on-surface capitalize">{variant}</span>
        </div>
      ))}
    </div>
  ),
}

// ─── Tones ───────────────────────────────────────────────────────────────────

export const Tones: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-end justify-center gap-xl">
      {TONES.map((tone) => (
        <div key={tone} className="flex flex-col items-center gap-sm">
          <MobileShell
            navBar={
              <NavBar {...args}>
                <NavBarItem isActive tone={tone}>
                  <NavBarItemIcon>
                    <HouseIcon />
                  </NavBarItemIcon>
                  <NavBarItemLabel>Home</NavBarItemLabel>
                </NavBarItem>
                <NavBarItem tone={tone}>
                  <NavBarItemIcon>
                    <MagnifyingGlassIcon />
                  </NavBarItemIcon>
                  <NavBarItemLabel>Search</NavBarItemLabel>
                </NavBarItem>
                <NavBarItem tone={tone}>
                  <NavBarItemIcon>
                    <GearIcon />
                  </NavBarItemIcon>
                  <NavBarItemLabel>Settings</NavBarItemLabel>
                </NavBarItem>
              </NavBar>
            }
          />
          <span className="style-text-strong--1 text-on-surface capitalize">{tone}</span>
        </div>
      ))}
    </div>
  ),
}

export const HorizontalItems: Story = {
  render: (args) => (
    <MobileShell
      navBar={
        <NavBar {...args} itemOrientation="horizontal">
          <DefaultItems />
        </NavBar>
      }
    />
  ),
}

import { XIcon, GearIcon, UserIcon, BellIcon, ListIcon } from '@phosphor-icons/react'
import { useState } from 'react'
import { Button } from '../button/button'
import { Input } from '../input/input'
import { Drawer } from './drawer'
import { DrawerClose } from './drawer-close'
import { DrawerContent } from './drawer-content'
import { DrawerDescription } from './drawer-description'
import { DrawerHeader } from './drawer-header'
import { DrawerPopup } from './drawer-popup'
import { DrawerProvider } from './drawer-provider'
import { DrawerTitle } from './drawer-title'
import { DrawerTrigger } from './drawer-trigger'

import type { DrawerProps } from './drawer.types'
import type { Meta, StoryObj } from '@storybook/react-vite'

const SWIPE_DIRECTIONS = ['right', 'left', 'up', 'down'] as const

type DrawerStoryArgs = DrawerProps & {
  showTitle?: boolean
  showDescription?: boolean
}

const DrawerDemo = ({ showTitle = true, showDescription = true, ...props }: DrawerStoryArgs) => (
  <DrawerProvider>
    <Drawer {...props}>
      <DrawerTrigger>
        <Button tone="brand" variant="fill">
          Open drawer
        </Button>
      </DrawerTrigger>
      <DrawerPopup>
        <DrawerContent>
          <DrawerHeader>
            <div>
              {showTitle && <DrawerTitle>Settings</DrawerTitle>}
              {showDescription && (
                <DrawerDescription>
                  Manage your account preferences and application settings.
                </DrawerDescription>
              )}
            </div>
            <DrawerClose>
              <Button aria-label="Close drawer" size="iconSmall" tone="neutral" variant="ghost">
                <XIcon weight="bold" />
              </Button>
            </DrawerClose>
          </DrawerHeader>
          <SettingsItem
            icon={<UserIcon />}
            label="Profile"
            description="Update your personal information"
          />
          <SettingsItem
            icon={<BellIcon />}
            label="Notifications"
            description="Configure alert preferences"
          />
          <SettingsItem
            icon={<GearIcon />}
            label="General"
            description="App behavior and display"
          />
        </DrawerContent>
      </DrawerPopup>
    </Drawer>
  </DrawerProvider>
)

const SettingsItem = ({
  icon,
  label,
  description,
}: {
  icon: React.ReactNode
  label: string
  description: string
}) => (
  <button
    className="flex items-center gap-md rounded-md text-left transition-colors hover:bg-surface-3"
    type="button"
  >
    <span className="text-on-surface-variant">{icon}</span>
    <div className="flex flex-col">
      <span className="style-text-default-0 text-on-surface">{label}</span>
      <span className="style-text-default--1 text-on-surface-variant">{description}</span>
    </div>
  </button>
)

export default {
  title: 'Components/Drawer',
  component: Drawer,
  subcomponents: {
    DrawerProvider,
    DrawerTrigger,
    DrawerPopup,
    DrawerContent,
    DrawerTitle,
    DrawerDescription,
    DrawerClose,
  },
  argTypes: {
    defaultOpen: {
      control: 'boolean',
      description: 'Whether the drawer is initially open in uncontrolled mode.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    swipeDirection: {
      control: 'select',
      options: SWIPE_DIRECTIONS,
      description:
        'The direction to swipe to dismiss the drawer, which also determines the edge it slides in from. `right` = right edge, `left` = left edge, `down` = bottom edge, `up` = top edge.',
      table: {
        defaultValue: { summary: 'right' },
      },
    },
    modal: {
      control: 'boolean',
      description:
        'Whether the drawer should trap focus and block interaction with the rest of the page.',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    disablePointerDismissal: {
      control: 'boolean',
      description:
        'Prevents closing the drawer by clicking outside. Users must use the explicit close button.',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    showTitle: {
      control: 'boolean',
      description: 'Show the drawer title (story control only).',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    showDescription: {
      control: 'boolean',
      description: 'Show the drawer description (story control only).',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
  parameters: {
    docs: {
      subtitle:
        'A slide-out panel anchored to the edge of the viewport for secondary content and navigation.',
      description: {
        component:
          "The Drawer component presents supplementary content in a panel that slides in from the edge of the screen. It supports swipe-to-dismiss gestures on touch devices, modal or non-modal behavior, and integrates with the app layout via the Provider/Indent pattern for smooth push animations. Use drawers for settings panels, navigation menus, detail views, and multi-step flows that shouldn't replace the main content.\n\n**Positioning:** Use the `swipeDirection` prop on `Drawer` to control which edge the drawer appears from: `right` (default), `left`, `down` (bottom sheet), or `up` (top sheet).",
      },
    },
  },
  args: {
    defaultOpen: false,
    swipeDirection: 'right',
    modal: true,
    disablePointerDismissal: false,
    showTitle: true,
    showDescription: true,
  },
  render: (args) => <DrawerDemo {...args} />,
} satisfies Meta<DrawerStoryArgs>

type Story = StoryObj<DrawerStoryArgs>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      description: {
        story:
          'Use the controls panel to explore drawer behavior including swipe direction, modal mode, pointer dismissal, and content visibility options.',
      },
    },
  },
}

export const Default: Story = {
  name: 'Usage / Default',
  parameters: {
    docs: {
      description: {
        story:
          'Standard drawer with title, description, close button, and content. The drawer slides in from the right edge by default.',
      },
    },
  },
}

export const SwipeRight: Story = {
  name: 'Position / Right',
  args: {
    swipeDirection: 'right',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Drawer sliding in from the right edge of the viewport. This is the default position, ideal for detail panels, settings, and secondary content. Swipe right to dismiss on touch devices.',
      },
    },
  },
}

export const SwipeLeft: Story = {
  name: 'Position / Left',
  args: {
    swipeDirection: 'left',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Drawer sliding in from the left edge of the viewport. Common for navigation menus and sidebars. Swipe left to dismiss on touch devices.',
      },
    },
  },
}

export const SwipeDown: Story = {
  name: 'Position / Bottom',
  args: {
    swipeDirection: 'down',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Drawer sliding up from the bottom edge (bottom sheet). Popular on mobile for action sheets, filters, and contextual options. Swipe down to dismiss on touch devices.',
      },
    },
  },
}

export const SwipeUp: Story = {
  name: 'Position / Top',
  args: {
    swipeDirection: 'up',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Drawer sliding down from the top edge. Useful for notifications, alerts, or dropdown-style content. Swipe up to dismiss on touch devices.',
      },
    },
  },
}

export const WithoutTitle: Story = {
  name: 'Usage / Without Title',
  args: {
    showTitle: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Drawer without a title for simpler content presentations. Ensure accessibility by providing an aria-label on the drawer.',
      },
    },
  },
}

export const WithoutDescription: Story = {
  name: 'Usage / Without Description',
  args: {
    showDescription: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Drawer with title only, omitting the description for more compact headers.',
      },
    },
  },
}

export const NonDismissible: Story = {
  name: 'Behavior / Non-Dismissible',
  args: {
    disablePointerDismissal: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Prevents closing via backdrop click. Users must use the explicit close button or swipe gesture. Useful for critical flows requiring confirmation.',
      },
    },
  },
}

export const Controlled: Story = {
  name: 'State / Controlled',
  parameters: {
    docs: {
      description: {
        story:
          'Controlled drawer where the open state is managed externally. Useful for programmatic opening/closing or integrating with external state management.',
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div className="flex items-center gap-md">
        <DrawerProvider>
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger>
              <Button tone="brand" variant="fill">
                Open drawer
              </Button>
            </DrawerTrigger>
            <DrawerPopup>
              <DrawerContent>
                <div className="flex flex-col gap-md p-lg">
                  <div className="flex items-start justify-between">
                    <DrawerTitle>Controlled Drawer</DrawerTitle>
                    <DrawerClose>
                      <Button
                        aria-label="Close drawer"
                        size="iconSmall"
                        tone="neutral"
                        variant="ghost"
                      >
                        <XIcon weight="bold" />
                      </Button>
                    </DrawerClose>
                  </div>
                  <DrawerDescription>
                    This drawer's state is controlled externally via React state.
                  </DrawerDescription>
                  <Button onClick={() => setOpen(false)} tone="brand" variant="fill">
                    Close from inside
                  </Button>
                </div>
              </DrawerContent>
            </DrawerPopup>
          </Drawer>
        </DrawerProvider>
        <span>Drawer is {open ? 'open' : 'closed'}</span>
      </div>
    )
  },
}

export const NavigationMenu: Story = {
  name: 'Composition / Navigation Menu',
  parameters: {
    docs: {
      description: {
        story:
          'A common mobile navigation pattern using a left-positioned drawer as a slide-out menu. Uses `swipeDirection="left"` for natural swipe-to-close.',
      },
    },
  },
  render: () => (
    <DrawerProvider>
      <Drawer swipeDirection="left">
        <DrawerTrigger>
          <Button aria-label="Open menu" size="iconMedium" tone="neutral" variant="ghost">
            <ListIcon weight="bold" />
          </Button>
        </DrawerTrigger>
        <DrawerPopup>
          <DrawerContent>
            <nav className="flex flex-col p-lg">
              <div className="mb-lg flex items-center justify-between">
                <span className="style-text-strong-0 text-on-surface">Menu</span>
                <DrawerClose>
                  <Button aria-label="Close menu" size="iconSmall" tone="neutral" variant="ghost">
                    <XIcon weight="bold" />
                  </Button>
                </DrawerClose>
              </div>
              <ul className="flex flex-col gap-xs">
                {['Dashboard', 'Projects', 'Team', 'Reports', 'Settings'].map((item) => (
                  <li key={item}>
                    <a
                      className="block rounded-md p-sm style-text-default-0 text-on-surface transition-colors hover:bg-surface-3"
                      href="#"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </DrawerContent>
        </DrawerPopup>
      </Drawer>
    </DrawerProvider>
  ),
}

export const BottomSheet: Story = {
  name: 'Composition / Bottom Sheet',
  parameters: {
    docs: {
      description: {
        story:
          'A bottom sheet pattern common on mobile for action selection, filters, and quick options. Uses `swipeDirection="down"` for natural pull-down dismissal.',
      },
    },
  },
  render: () => (
    <DrawerProvider>
      <Drawer swipeDirection="down">
        <DrawerTrigger>
          <Button tone="brand" variant="fill">
            Show actions
          </Button>
        </DrawerTrigger>
        <DrawerPopup>
          <DrawerContent>
            <div className="flex flex-col gap-md p-lg">
              <div className="flex items-center justify-between">
                <DrawerTitle>Quick Actions</DrawerTitle>
                <DrawerClose>
                  <Button aria-label="Close sheet" size="iconSmall" tone="neutral" variant="ghost">
                    <XIcon weight="bold" />
                  </Button>
                </DrawerClose>
              </div>
              <div className="flex flex-col gap-sm">
                {['Share', 'Copy link', 'Edit', 'Move to folder', 'Delete'].map((action) => (
                  <button
                    key={action}
                    className="rounded-md p-sm text-left style-text-default-0 text-on-surface transition-colors hover:bg-surface-3"
                    type="button"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </DrawerContent>
        </DrawerPopup>
      </Drawer>
    </DrawerProvider>
  ),
}

export const DetailPanel: Story = {
  name: 'Composition / Detail Panel',
  parameters: {
    docs: {
      description: {
        story:
          'A detail panel pattern showing expanded information about a selected item, common in list-detail layouts.',
      },
    },
  },
  render: () => (
    <DrawerProvider>
      <Drawer>
        <DrawerTrigger>
          <Button tone="neutral" variant="outline">
            View project details
          </Button>
        </DrawerTrigger>
        <DrawerPopup>
          <DrawerContent>
            <div className="flex flex-col gap-lg p-lg">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-xs">
                  <DrawerTitle className="text-on-surface">Project Alpha</DrawerTitle>
                  <span className="style-text-default--1 text-on-surface-variant">
                    Created on Jan 15, 2026
                  </span>
                </div>
                <DrawerClose>
                  <Button aria-label="Close panel" size="iconSmall" tone="neutral" variant="ghost">
                    <XIcon weight="bold" />
                  </Button>
                </DrawerClose>
              </div>
              <div className="flex flex-col gap-md">
                <div className="flex flex-col gap-xs">
                  <span className="style-text-default--1 text-on-surface-variant">Status</span>
                  <span className="style-text-default-0 text-on-surface">In Progress</span>
                </div>
                <div className="flex flex-col gap-xs">
                  <span className="style-text-default--1 text-on-surface-variant">Team</span>
                  <span className="style-text-default-0 text-on-surface">
                    Design, Engineering, Product
                  </span>
                </div>
                <div className="flex flex-col gap-xs">
                  <span className="style-text-default--1 text-on-surface-variant">Description</span>
                  <p className="style-text-default-0 text-on-surface">
                    A comprehensive redesign of the customer dashboard with improved analytics,
                    real-time updates, and enhanced mobile responsiveness.
                  </p>
                </div>
              </div>
              <div className="flex gap-sm">
                <Button tone="brand" variant="fill">
                  Edit project
                </Button>
                <Button tone="neutral" variant="outline">
                  View timeline
                </Button>
              </div>
            </div>
          </DrawerContent>
        </DrawerPopup>
      </Drawer>
    </DrawerProvider>
  ),
}

export const FormDrawer: Story = {
  name: 'Composition / Form Drawer',
  parameters: {
    docs: {
      description: {
        story: 'A drawer containing a form for data entry without leaving the current context.',
      },
    },
  },
  render: () => (
    <DrawerProvider>
      <Drawer>
        <DrawerTrigger>
          <Button tone="brand" variant="fill">
            Add new contact
          </Button>
        </DrawerTrigger>
        <DrawerPopup>
          <DrawerContent>
            <form className="flex flex-col gap-lg p-lg">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-xs">
                  <DrawerTitle>New Contact</DrawerTitle>
                  <DrawerDescription>Add a new contact to your address book.</DrawerDescription>
                </div>
                <DrawerClose>
                  <Button
                    aria-label="Close form"
                    size="iconSmall"
                    tone="neutral"
                    type="button"
                    variant="ghost"
                  >
                    <XIcon weight="bold" />
                  </Button>
                </DrawerClose>
              </div>
              <div className="flex flex-col gap-md">
                <div className="flex flex-col gap-xs">
                  <label className="style-text-default-0 text-on-surface" htmlFor="name">
                    Full name
                  </label>
                  <Input id="name" placeholder="John Doe" type="text" />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="style-text-default-0 text-on-surface" htmlFor="email">
                    Email
                  </label>
                  <Input id="email" placeholder="john@example.com" type="email" />
                </div>
                <div className="flex flex-col gap-xs">
                  <label className="style-text-default-0 text-on-surface" htmlFor="phone">
                    Phone
                  </label>
                  <Input id="phone" placeholder="+1 (555) 000-0000" type="tel" />
                </div>
              </div>
              <div className="flex gap-sm">
                <Button tone="brand" type="submit" variant="fill">
                  Save contact
                </Button>
                <DrawerClose>
                  <Button tone="neutral" type="button" variant="outline">
                    Cancel
                  </Button>
                </DrawerClose>
              </div>
            </form>
          </DrawerContent>
        </DrawerPopup>
      </Drawer>
    </DrawerProvider>
  ),
}

export const NestedDrawers: Story = {
  name: 'Composition / Nested Drawers',
  parameters: {
    docs: {
      description: {
        story:
          'Multiple drawer levels for drill-down workflows. Each drawer opens on top of the previous one.',
      },
    },
  },
  render: () => (
    <DrawerProvider>
      <Drawer>
        <DrawerTrigger>
          <Button tone="brand" variant="fill">
            Open settings
          </Button>
        </DrawerTrigger>
        <DrawerPopup>
          <DrawerContent>
            <div className="flex flex-col gap-md p-lg">
              <div className="flex items-start justify-between">
                <DrawerTitle>Settings</DrawerTitle>
                <DrawerClose>
                  <Button aria-label="Close drawer" size="iconSmall" tone="neutral" variant="ghost">
                    <XIcon weight="bold" />
                  </Button>
                </DrawerClose>
              </div>

              <Drawer>
                <DrawerTrigger>
                  <Button tone="neutral" variant="outline">
                    <UserIcon weight="bold" />
                    Account settings
                  </Button>
                </DrawerTrigger>
                <DrawerPopup>
                  <DrawerContent>
                    <div className="flex flex-col gap-md p-lg">
                      <div className="flex items-start justify-between">
                        <DrawerTitle>Account</DrawerTitle>
                        <DrawerClose>
                          <Button
                            aria-label="Close nested drawer"
                            size="iconSmall"
                            tone="neutral"
                            variant="ghost"
                          >
                            <XIcon weight="bold" />
                          </Button>
                        </DrawerClose>
                      </div>
                      <DrawerDescription>
                        Manage your account details, security preferences, and connected services.
                      </DrawerDescription>
                    </div>
                  </DrawerContent>
                </DrawerPopup>
              </Drawer>

              <Drawer>
                <DrawerTrigger>
                  <Button tone="neutral" variant="outline">
                    <BellIcon weight="bold" />
                    Notification settings
                  </Button>
                </DrawerTrigger>
                <DrawerPopup>
                  <DrawerContent>
                    <div className="flex flex-col gap-md p-lg">
                      <div className="flex items-start justify-between">
                        <DrawerTitle>Notifications</DrawerTitle>
                        <DrawerClose>
                          <Button
                            aria-label="Close nested drawer"
                            size="iconSmall"
                            tone="neutral"
                            variant="ghost"
                          >
                            <XIcon weight="bold" />
                          </Button>
                        </DrawerClose>
                      </div>
                      <DrawerDescription>
                        Configure how and when you receive notifications from the app.
                      </DrawerDescription>
                    </div>
                  </DrawerContent>
                </DrawerPopup>
              </Drawer>
            </div>
          </DrawerContent>
        </DrawerPopup>
      </Drawer>
    </DrawerProvider>
  ),
}

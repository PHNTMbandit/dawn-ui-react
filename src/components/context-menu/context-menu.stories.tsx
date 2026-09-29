import {
  CardsIcon,
  ClipboardIcon,
  CommandIcon,
  CopyIcon,
  ScissorsIcon,
  TrashIcon,
} from '@phosphor-icons/react'
import { Kbd } from '../kbd'
import { KbdGroup } from '../kbd/kbd-group'
import { ContextMenu } from './context-menu'
import { ContextMenuCheckboxItem } from './context-menu-checkbox-item'
import { ContextMenuGroup } from './context-menu-group'
import { ContextMenuGroupLabel } from './context-menu-group-label'
import { ContextMenuItem } from './context-menu-item'
import { ContextMenuPopup } from './context-menu-popup'
import { ContextMenuRadioGroup } from './context-menu-radio-group'
import { ContextMenuRadioItem } from './context-menu-radio-item'
import { ContextMenuSeparator } from './context-menu-separator'
import { ContextMenuShortcut } from './context-menu-shortcut'
import { ContextMenuSubmenu } from './context-menu-submenu'
import { ContextMenuSubmenuTrigger } from './context-menu-submenu-trigger'
import { ContextMenuTrigger } from './context-menu-trigger'

import type { Meta, StoryObj } from '@storybook/react-vite'

const TriggerSurface = ({ label = 'Right Click Me' }: { label?: string }) => (
  <ContextMenuTrigger>
    <div className="flex h-3xl w-[320px] items-center justify-center rounded-xl border border-border bg-surface-2 text-on-surface shadow-2xs">
      {label}
    </div>
  </ContextMenuTrigger>
)

export default {
  title: 'Components/Context Menu',
  component: ContextMenu,
  subcomponents: {
    ContextMenuTrigger,
    ContextMenuPopup,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuCheckboxItem,
    ContextMenuRadioItem,
    ContextMenuGroup,
    ContextMenuGroupLabel,
    ContextMenuShortcut,
    ContextMenuSubmenu,
    ContextMenuSubmenuTrigger,
  },
  parameters: {
    docs: {
      subtitle: 'A secondary-action menu revealed by right-click or equivalent context gesture.',
      description: {
        component:
          'The Context Menu component exposes contextual actions tied to a specific surface or selection. It supports standard items, destructive actions, grouped sections, checkbox and radio controls, shortcuts, and nested submenus.',
      },
    },
  },
  render: (args) => (
    <ContextMenu {...args}>
      <TriggerSurface />
      <ContextMenuPopup>
        <ContextMenuItem>
          <CopyIcon weight="bold" /> Copy
        </ContextMenuItem>
        <ContextMenuItem>
          <ClipboardIcon weight="bold" /> Paste
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <ScissorsIcon weight="bold" /> Cut
        </ContextMenuItem>
        <ContextMenuSubmenu>
          <ContextMenuSubmenuTrigger>More Actions</ContextMenuSubmenuTrigger>
          <ContextMenuPopup>
            <ContextMenuItem>Select Duplicates</ContextMenuItem>
            <ContextMenuItem tone="error">Delete Selection</ContextMenuItem>
          </ContextMenuPopup>
        </ContextMenuSubmenu>
      </ContextMenuPopup>
    </ContextMenu>
  ),
} satisfies Meta<typeof ContextMenu>

type Story = StoryObj<typeof ContextMenu>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      description: {
        story:
          'Right-click the preview surface to open the base context menu and inspect its composition.',
      },
    },
  },
}

export const Default: Story = {
  name: 'Composition / Action Surface',
}

export const Icons: Story = {
  name: 'Composition / Icons',
  parameters: {
    docs: {
      description: {
        story: 'Icons provide quick visual recognition for common contextual actions.',
      },
    },
  },
  render: (args) => (
    <ContextMenu {...args}>
      <TriggerSurface />
      <ContextMenuPopup>
        <ContextMenuItem>
          <CopyIcon weight="bold" /> Copy
        </ContextMenuItem>
        <ContextMenuItem>
          <ClipboardIcon weight="bold" /> Paste
        </ContextMenuItem>
        <ContextMenuItem>
          <ScissorsIcon weight="bold" /> Cut
        </ContextMenuItem>
        <ContextMenuItem>
          <CardsIcon weight="bold" /> Select All
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem tone="error">
          <TrashIcon weight="bold" /> Delete
        </ContextMenuItem>
      </ContextMenuPopup>
    </ContextMenu>
  ),
}

export const Shortcuts: Story = {
  name: 'Composition / Shortcuts',
  parameters: {
    docs: {
      description: {
        story:
          'Shortcut hints are especially useful in context menus because actions are often duplicated elsewhere in the interface.',
      },
    },
  },
  render: (args) => (
    <ContextMenu {...args}>
      <TriggerSurface />
      <ContextMenuPopup>
        <ContextMenuItem>
          <CopyIcon weight="bold" /> Copy
          <ContextMenuShortcut>
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>C</Kbd>
            </KbdGroup>
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <ClipboardIcon weight="bold" /> Paste
          <ContextMenuShortcut>
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>V</Kbd>
            </KbdGroup>
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <ScissorsIcon weight="bold" /> Cut
          <ContextMenuShortcut>
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>X</Kbd>
            </KbdGroup>
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <CardsIcon weight="bold" /> Select All
          <ContextMenuShortcut>
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>A</Kbd>
            </KbdGroup>
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem tone="error">
          <TrashIcon weight="bold" /> Delete
          <ContextMenuShortcut>
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>⌫</Kbd>
            </KbdGroup>
          </ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuPopup>
    </ContextMenu>
  ),
}

export const Groups: Story = {
  name: 'Composition / Groups',
  parameters: {
    docs: {
      description: {
        story: 'Group labels divide contextual actions into logical sections for easier scanning.',
      },
    },
  },
  render: (args) => (
    <ContextMenu {...args}>
      <TriggerSurface />
      <ContextMenuPopup>
        <ContextMenuGroup>
          <ContextMenuGroupLabel>Group 1</ContextMenuGroupLabel>
          <ContextMenuItem>Option 1</ContextMenuItem>
          <ContextMenuItem>Option 2</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuGroupLabel>Group 2</ContextMenuGroupLabel>
          <ContextMenuItem>Option 3</ContextMenuItem>
          <ContextMenuItem>Option 4</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuPopup>
    </ContextMenu>
  ),
}

export const RadioAndCheckboxItems: Story = {
  name: 'Composition / Radio and Checkbox Items',
  parameters: {
    docs: {
      description: {
        story:
          'Context menus can embed lightweight toggle and choice controls for surface-specific settings.',
      },
    },
  },
  render: (args) => (
    <ContextMenu {...args}>
      <TriggerSurface />
      <ContextMenuPopup>
        <ContextMenuGroup>
          <ContextMenuGroupLabel>Checkbox Group</ContextMenuGroupLabel>
          <ContextMenuCheckboxItem>Checkbox Item</ContextMenuCheckboxItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuGroupLabel>Radio Group</ContextMenuGroupLabel>
          <ContextMenuRadioGroup>
            <ContextMenuRadioItem value="option1">Radio Option 1</ContextMenuRadioItem>
            <ContextMenuRadioItem value="option2">Radio Option 2</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuPopup>
    </ContextMenu>
  ),
}

export const Submenu: Story = {
  name: 'Composition / Submenu',
  parameters: {
    docs: {
      description: {
        story:
          'Submenus keep less common contextual actions available without crowding the first level.',
      },
    },
  },
  render: () => (
    <ContextMenu>
      <TriggerSurface label="Right Click for Nested Actions" />
      <ContextMenuPopup>
        <ContextMenuItem>Rename</ContextMenuItem>
        <ContextMenuItem>Duplicate</ContextMenuItem>
        <ContextMenuSubmenu>
          <ContextMenuSubmenuTrigger>Share</ContextMenuSubmenuTrigger>
          <ContextMenuPopup>
            <ContextMenuItem>Email Link</ContextMenuItem>
            <ContextMenuItem>Copy Public URL</ContextMenuItem>
          </ContextMenuPopup>
        </ContextMenuSubmenu>
      </ContextMenuPopup>
    </ContextMenu>
  ),
}

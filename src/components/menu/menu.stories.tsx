import {
  CardsIcon,
  ClipboardIcon,
  CommandIcon,
  CopyIcon,
  ScissorsIcon,
  TrashIcon,
} from '@phosphor-icons/react'
import React from 'react'
import { Button } from '../button'
import { Kbd } from '../kbd'
import { KbdGroup } from '../kbd/kbd-group'
import { Menu } from './menu'
import { MenuCheckboxItem } from './menu-checkbox-item'
import { MenuGroup } from './menu-group'
import { MenuGroupLabel } from './menu-group-label'
import { MenuItem } from './menu-item'
import { MenuPopup } from './menu-popup'
import { MenuRadioGroup } from './menu-radio-group'
import { MenuRadioItem } from './menu-radio-item'
import { MenuSeparator } from './menu-separator'
import { MenuShortcut } from './menu-shortcut'
import { MenuSubmenu } from './menu-submenu'
import { MenuSubmenuTrigger } from './menu-submenu-trigger'
import { MenuTrigger } from './menu-trigger'

import type { Meta, StoryObj } from '@storybook/react-vite'

const BasicActionMenu = () => (
  <Menu>
    <MenuTrigger>
      <Button>Open Menu</Button>
    </MenuTrigger>
    <MenuPopup>
      <MenuItem>
        <CopyIcon /> Copy
      </MenuItem>
      <MenuItem>
        <ClipboardIcon /> Paste
      </MenuItem>
      <MenuSeparator />
      <MenuItem>
        <ScissorsIcon /> Cut
      </MenuItem>
      <MenuItem tone={'error'}>
        <TrashIcon /> Delete
      </MenuItem>
      <MenuSeparator />
      <MenuItem>
        <CardsIcon /> Select All
      </MenuItem>
    </MenuPopup>
  </Menu>
)

export default {
  title: 'Components/Menu',
  component: Menu,
  subcomponents: {
    MenuTrigger,
    MenuPopup,
    MenuItem,
    MenuSeparator,
    MenuCheckboxItem,
    MenuRadioItem,
    MenuGroup,
    MenuGroupLabel,
    MenuSubmenu,
    MenuSubmenuTrigger,
    MenuShortcut,
  },
  parameters: {
    docs: {
      subtitle: 'Provides a dropdown menu for navigation or actions.',
      description: {
        component:
          'The Menu component displays a popup list of actions anchored to a trigger. It supports destructive actions, grouped sections, checkbox and radio items, nested submenus, and keyboard shortcut affordances.',
      },
    },
  },
  render: () => <BasicActionMenu />,
} satisfies Meta<typeof Menu>

type Story = StoryObj<typeof Menu>

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      description: {
        story:
          'Baseline action menu showing common menu items, separators, and a destructive action.',
      },
    },
  },
}

export const Default: Story = {
  name: 'Composition / Action Menu',
}

export const CheckboxItems: Story = {
  name: 'Composition / Checkbox Items',
  parameters: {
    docs: {
      description: {
        story:
          'Checkbox items are useful for toggling independent visibility, filter, or preference states.',
      },
    },
  },
  render: (args) => {
    const [showCopy, setShowCopy] = React.useState(false)
    const [showPaste, setShowPaste] = React.useState(false)
    const [showCut, setShowCut] = React.useState(false)
    const [showDelete, setShowDelete] = React.useState(false)

    return (
      <Menu {...args}>
        <MenuTrigger>
          <Button>Open Menu</Button>
        </MenuTrigger>
        <MenuPopup>
          <MenuCheckboxItem checked={showCopy} onCheckedChange={() => setShowCopy((prev) => !prev)}>
            Option 1
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={showPaste}
            onCheckedChange={() => setShowPaste((prev) => !prev)}
          >
            Option 2
          </MenuCheckboxItem>
          <MenuCheckboxItem checked={showCut} onCheckedChange={() => setShowCut((prev) => !prev)}>
            Option 3
          </MenuCheckboxItem>
          <MenuCheckboxItem
            checked={showDelete}
            onCheckedChange={() => setShowDelete((prev) => !prev)}
          >
            Option 4
          </MenuCheckboxItem>
        </MenuPopup>
      </Menu>
    )
  },
}

export const RadioItems: Story = {
  name: 'Composition / Radio Items',
  parameters: {
    docs: {
      description: {
        story: 'Radio items model mutually exclusive settings such as sort order or view mode.',
      },
    },
  },
  render: (args) => {
    const [value, setValue] = React.useState('date')

    return (
      <Menu {...args}>
        <MenuTrigger>
          <Button>Open Menu</Button>
        </MenuTrigger>
        <MenuPopup align="center">
          <MenuRadioGroup onValueChange={setValue} value={value}>
            <MenuRadioItem value="date">Date</MenuRadioItem>
            <MenuRadioItem value="name">Name</MenuRadioItem>
            <MenuRadioItem value="type">Type</MenuRadioItem>
          </MenuRadioGroup>
        </MenuPopup>
      </Menu>
    )
  },
}

export const GroupLabels: Story = {
  name: 'Composition / Grouped Sections',
  parameters: {
    docs: {
      description: {
        story: 'Groups and labels help organize larger menus into clearer semantic sections.',
      },
    },
  },
  render: (args) => (
    <Menu {...args}>
      <MenuTrigger>
        <Button>Open Menu</Button>
      </MenuTrigger>
      <MenuPopup>
        <MenuGroup>
          <MenuGroupLabel>Group 1</MenuGroupLabel>
          <MenuItem>Option 1</MenuItem>
          <MenuItem>Option 2</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuGroupLabel>Group 2</MenuGroupLabel>
          <MenuItem>Option 3</MenuItem>
          <MenuItem>Option 4</MenuItem>
        </MenuGroup>
      </MenuPopup>
    </Menu>
  ),
}

export const Submenus: Story = {
  name: 'Composition / Submenus',
  parameters: {
    docs: {
      description: {
        story:
          'Submenus let you progressively reveal secondary actions without overcrowding the first level.',
      },
    },
  },
  render: (args) => (
    <Menu {...args}>
      <MenuTrigger>
        <Button>Open Menu</Button>
      </MenuTrigger>
      <MenuPopup>
        <MenuItem>Option 1</MenuItem>
        <MenuSubmenu>
          <MenuSubmenuTrigger>More Options</MenuSubmenuTrigger>
          <MenuPopup>
            <MenuItem>Option 2</MenuItem>
            <MenuItem>Option 3</MenuItem>
          </MenuPopup>
        </MenuSubmenu>
      </MenuPopup>
    </Menu>
  ),
}

export const Shortcuts: Story = {
  name: 'Composition / Shortcuts',
  parameters: {
    docs: {
      description: {
        story:
          'Shortcut hints communicate keyboard access for frequent actions without changing interaction behavior.',
      },
    },
  },
  render: (args) => (
    <Menu {...args}>
      <MenuTrigger>
        <Button>Open Menu</Button>
      </MenuTrigger>
      <MenuPopup>
        <MenuItem>
          <CopyIcon /> Copy
          <MenuShortcut>
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>C</Kbd>
            </KbdGroup>
          </MenuShortcut>
        </MenuItem>
        <MenuItem>
          <ClipboardIcon /> Paste
          <MenuShortcut>
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>V</Kbd>
            </KbdGroup>
          </MenuShortcut>
        </MenuItem>
        <MenuItem>
          <ScissorsIcon /> Cut
          <MenuShortcut>
            <KbdGroup>
              <Kbd>
                <CommandIcon />
              </Kbd>
              <Kbd>X</Kbd>
            </KbdGroup>
          </MenuShortcut>
        </MenuItem>
      </MenuPopup>
    </Menu>
  ),
}

export const DestructiveAction: Story = {
  name: 'State / Destructive Action',
  parameters: {
    docs: {
      description: {
        story: 'Use the `error` tone for irreversible or high-risk menu actions.',
      },
    },
  },
  render: () => (
    <Menu>
      <MenuTrigger>
        <Button tone="error" variant="soft">
          Open Destructive Menu
        </Button>
      </MenuTrigger>
      <MenuPopup>
        <MenuItem>
          <CopyIcon /> Duplicate Project
        </MenuItem>
        <MenuSeparator />
        <MenuItem tone="error">
          <TrashIcon /> Delete Project
        </MenuItem>
      </MenuPopup>
    </Menu>
  ),
}

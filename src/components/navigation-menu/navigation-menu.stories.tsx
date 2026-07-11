import { CaretDownIcon } from '@phosphor-icons/react'
import { NavigationMenu } from './navigation-menu'
import { NavigationMenuContent } from './navigation-menu-content'
import { NavigationMenuIcon } from './navigation-menu-icon'
import { NavigationMenuItem } from './navigation-menu-item'
import { NavigationMenuLink } from './navigation-menu-link'
import { NavigationMenuList } from './navigation-menu-list'
import { NavigationMenuPopup } from './navigation-menu-popup'
import { NavigationMenuTrigger } from './navigation-menu-trigger'

import type { Meta, StoryObj } from '@storybook/react-vite'

const overviewLinks = [
  {
    href: '/react/overview/quick-start',
    title: 'Quick Start',
    description: 'Install and assemble your first component.',
  },
  {
    href: '/react/overview/accessibility',
    title: 'Accessibility',
    description: 'Learn how we build accessible components.',
  },
  {
    href: '/react/overview/releases',
    title: 'Releases',
    description: "See what's new in the latest Base UI versions.",
  },
  {
    href: '/react/overview/about',
    title: 'About',
    description: 'Learn more about Base UI and our mission.',
  },
] as const

const handbookLinks = [
  {
    href: '/react/handbook/styling',
    title: 'Styling',
    description: 'Style with plain CSS, Tailwind, CSS-in-JS, or CSS Modules.',
  },
  {
    href: '/react/handbook/animation',
    title: 'Animation',
    description: 'Animate with CSS transitions, CSS animations, or JS libraries.',
  },
  {
    href: '/react/handbook/composition',
    title: 'Composition',
    description: 'Replace and compose components with your own existing components.',
  },
] as const

export default {
  title: 'Components/Navigation Menu',
  component: NavigationMenu,
  subcomponents: {
    NavigationMenuContent,
    NavigationMenuIcon,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuPopup,
    NavigationMenuTrigger,
  },
  parameters: {
    docs: {
      description: {
        component: `
A collection of links and menus for website navigation, built on top of
[Base UI NavigationMenu](https://base-ui.com/react/components/navigation-menu).

**Anatomy**

\`\`\`
<NavigationMenu>           — Root <nav>
  <NavigationMenuList>     — <ul> of items
    <NavigationMenuItem>   — <li>
      <NavigationMenuTrigger>
        <NavigationMenuIcon />
      </NavigationMenuTrigger>
      <NavigationMenuContent />
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuPopup />  — Shared floating popup (Portal → Positioner → Popup → Viewport)
</NavigationMenu>
\`\`\`

> **Important:** \`<NavigationMenuPopup />\` must be placed **outside** of
> \`<NavigationMenuList>\` as a sibling. It is shared across all items in the list.
        `,
      },
    },
  },
} as Meta<typeof NavigationMenu>

type Story = StoryObj<typeof NavigationMenu>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'A single dropdown item containing a grid of link cards. ' +
          '`NavigationMenuPopup` is rendered as a sibling to `NavigationMenuList` so it is shared across all items.',
      },
    },
  },
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Overview
            <NavigationMenuIcon>
              <CaretDownIcon weight="bold" />
            </NavigationMenuIcon>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              {overviewLinks.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink>
                    <h3 className="mb-1 leading-4 m-0 text-sm font-normal">{item.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 m-0 text-sm">
                      {item.description}
                    </p>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuPopup />
    </NavigationMenu>
  ),
}

export const MultipleItems: Story = {
  name: 'Multiple Items',
  parameters: {
    docs: {
      description: {
        story:
          'Multiple menu items sharing a single `NavigationMenuPopup`. ' +
          'The third item is a plain `NavigationMenuLink` with no dropdown — ' +
          'use this pattern for top-level links like "GitHub" or "Releases".',
      },
    },
  },
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Overview
            <NavigationMenuIcon>
              <CaretDownIcon weight="bold" />
            </NavigationMenuIcon>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              {overviewLinks.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink>
                    <h3 className="mb-1 leading-4 m-0 text-sm font-normal">{item.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 m-0 text-sm">
                      {item.description}
                    </p>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            Handbook
            <NavigationMenuIcon>
              <CaretDownIcon weight="bold" />
            </NavigationMenuIcon>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul>
              {handbookLinks.map((item) => (
                <li key={item.href}>
                  <NavigationMenuLink>
                    <h3 className="mb-1 leading-4 m-0 text-sm font-normal">{item.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 m-0 text-sm">
                      {item.description}
                    </p>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink>GitHub</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuPopup />
    </NavigationMenu>
  ),
}

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`size` is a design-system extension on `NavigationMenuTrigger` (not a Base UI prop). ' +
          'Available values: `small`, `medium` (default), `large`.',
      },
    },
  },
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger size="small">
            Small
            <NavigationMenuIcon>
              <CaretDownIcon weight="bold" />
            </NavigationMenuIcon>
          </NavigationMenuTrigger>
          <NavigationMenuContent>Small content</NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger size="medium">
            Medium
            <NavigationMenuIcon>
              <CaretDownIcon weight="bold" />
            </NavigationMenuIcon>
          </NavigationMenuTrigger>
          <NavigationMenuContent>Medium content</NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger size="large">
            Large
            <NavigationMenuIcon>
              <CaretDownIcon weight="bold" />
            </NavigationMenuIcon>
          </NavigationMenuTrigger>
          <NavigationMenuContent>Large content</NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuPopup />
    </NavigationMenu>
  ),
}

export const Tones: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`tone` is a design-system extension on `NavigationMenuTrigger` (not a Base UI prop). ' +
          'Available values: `brand`, `accent`, `neutral`, `error`, `info`, `success`, `warning`.',
      },
    },
  },
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        {(['brand', 'accent', 'neutral', 'error', 'info', 'success', 'warning'] as const).map(
          (tone) => (
            <NavigationMenuItem key={tone}>
              <NavigationMenuTrigger tone={tone}>
                {tone.charAt(0).toUpperCase() + tone.slice(1)}
                <NavigationMenuIcon>
                  <CaretDownIcon weight="bold" />
                </NavigationMenuIcon>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {' '}
                <ul>
                  {handbookLinks.map((item) => (
                    <li key={item.href}>
                      <NavigationMenuLink tone={tone}>
                        <h3 className="style-text-strong-0">{item.title}</h3>
                        <p className="style-text-prose--1">{item.description}</p>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
      <NavigationMenuPopup />
    </NavigationMenu>
  ),
}

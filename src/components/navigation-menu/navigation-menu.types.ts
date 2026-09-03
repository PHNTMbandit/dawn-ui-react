import { NavigationMenu } from '@base-ui/react'
import { cva, type VariantProps } from 'class-variance-authority'

import type { navigationMenuTriggerVariants } from './navigation-menu-trigger'

export type NavigationMenuProps = React.ComponentProps<typeof NavigationMenu.Root>
export type NavigationMenuListProps = React.ComponentProps<typeof NavigationMenu.List>
export type NavigationMenuItemProps = React.ComponentProps<typeof NavigationMenu.Item>
export type NavigationMenuTriggerProps = React.ComponentProps<typeof NavigationMenu.Trigger> &
  VariantProps<typeof navigationMenuTriggerVariants> & { isActive?: boolean }
export type NavigationMenuIconProps = React.ComponentProps<typeof NavigationMenu.Icon>
export type NavigationMenuContentProps = React.ComponentProps<typeof NavigationMenu.Content>
export type NavigationMenuPopupProps = React.ComponentProps<typeof NavigationMenu.Positioner>

export const navigationMenuLinkVariants = cva(
  'rounded-lg px-sm py-xs transition-colors hover:cursor-pointer',
  {
    variants: {
      tone: {
        brand: 'text-brand-on-container hover:bg-brand-container',
        accent: 'text-accent-on-container hover:bg-accent-container',
        neutral: 'text-neutral-on-container hover:bg-neutral-container',
        error: 'text-error-on-container hover:bg-error-container',
        info: 'text-info-on-container hover:bg-info-container',
        success: 'text-success-on-container hover:bg-success-container',
        warning: 'text-warning-on-container hover:bg-warning-container',
      },
    },
    defaultVariants: {
      tone: 'neutral',
    },
  },
)

export type NavigationMenuLinkProps = VariantProps<typeof navigationMenuLinkVariants> &
  React.ComponentProps<'div'>

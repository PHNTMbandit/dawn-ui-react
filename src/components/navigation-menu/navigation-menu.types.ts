import { NavigationMenu } from '@base-ui/react'

import type { navigationMenuTriggerVariants } from './navigation-menu-trigger'
import type { VariantProps } from 'class-variance-authority'

export type NavigationMenuProps = React.ComponentProps<typeof NavigationMenu.Root>
export type NavigationMenuListProps = React.ComponentProps<typeof NavigationMenu.List>
export type NavigationMenuItemProps = React.ComponentProps<typeof NavigationMenu.Item>
export type NavigationMenuTriggerProps = React.ComponentProps<typeof NavigationMenu.Trigger> &
  VariantProps<typeof navigationMenuTriggerVariants>
export type NavigationMenuIconProps = React.ComponentProps<typeof NavigationMenu.Icon>
export type NavigationMenuContentProps = React.ComponentProps<typeof NavigationMenu.Content>
export type NavigationMenuPopupProps = React.ComponentProps<typeof NavigationMenu.Positioner>
export type NavigationMenuLinkProps = React.ComponentProps<'div'> & { isActive?: boolean }

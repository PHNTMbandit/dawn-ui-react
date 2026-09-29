import type { Badge } from '../badge'
import type { Button } from '../button'
import type { Collapsible, CollapsiblePanel, CollapsibleTrigger } from '../collapsible'

export type SidebarToggleProps = Omit<React.ComponentProps<typeof Button>, 'children'> & {
  children: React.ReactNode | ((open?: boolean) => React.ReactNode)
}
export type SidebarContentProps = React.ComponentProps<'div'>
export type SidebarGroupContentProps = React.ComponentProps<'div'>
export type SidebarGroupLabelProps = React.ComponentProps<'span'>
export type SidebarGroupProps = React.ComponentProps<'div'>
export type SidebarHeaderProps = Omit<React.ComponentProps<'div'>, 'children'> & {
  children: (isExpanded?: boolean) => React.ReactNode
}
export type SidebarFooterProps = Omit<React.ComponentProps<'div'>, 'children'> & {
  children: (isExpanded?: boolean) => React.ReactNode
}
export type SidebarMenuProps = React.ComponentProps<'div'>
export type SidebarProps = React.ComponentProps<'div'> & {
  tone?: 'primary' | 'secondary' | 'ghost'
  width?: string | number
}

export type SidebarMenuButtonProps = React.ComponentProps<'button'> & {
  isActive?: boolean
}
export type SidebarMenuItemProps = React.ComponentProps<'div'>
export type SidebarMenuBadgeProps = React.ComponentProps<typeof Badge>
export type SidebarMenuCollapsibleTriggerProps = React.ComponentProps<typeof CollapsibleTrigger>
export type SidebarMenuCollapsibleProps = React.ComponentProps<typeof Collapsible>
export type SidebarMenuCollapsiblePanelProps = React.ComponentProps<typeof CollapsiblePanel>

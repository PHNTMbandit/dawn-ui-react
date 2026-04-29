import { Badge } from '../badge'
import { useSidebar } from './sidebar-provider'
import { cn } from '@/utils/cn'

import type { SidebarMenuBadgeProps } from './sidebar.types'

export const SidebarMenuBadge = ({ className, children, ref, ...props }: SidebarMenuBadgeProps) => {
  const { open } = useSidebar()

  return (
    <Badge className={cn(!open && 'hidden', className)} ref={ref} {...props}>
      {children}
    </Badge>
  )
}

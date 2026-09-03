import { Collapsible } from '../collapsible'
import { Popover } from '../popover'
import { useSidebar } from './sidebar-provider'
import { cn } from '@/utils/cn'

import type { SidebarMenuCollapsibleProps } from './sidebar.types'

export const SidebarMenuCollapsible = ({
  className,
  children,
  ref,
  ...props
}: SidebarMenuCollapsibleProps) => {
  const { open } = useSidebar()

  if (!open) {
    return <Popover>{children}</Popover>
  }

  return (
    <Collapsible className={cn('', className)} ref={ref} {...props}>
      {children}
    </Collapsible>
  )
}

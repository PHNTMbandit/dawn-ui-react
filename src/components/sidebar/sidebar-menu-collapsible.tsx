import { Children, isValidElement } from 'react'
import { Collapsible } from '../collapsible'
import { Popover } from '../popover'
import { useSidebar } from './sidebar-provider'
import { cn } from '@/utils/cn'

import type { SidebarMenuCollapsibleProps } from './sidebar.types'
import type { ReactNode } from 'react'

const hasActiveDescendant = (children: ReactNode): boolean =>
  Children.toArray(children).some((child) => {
    if (!isValidElement(child)) {
      return false
    }

    const props = child.props as { isActive?: boolean; children?: ReactNode }

    return props.isActive === true || hasActiveDescendant(props.children)
  })

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
    <Collapsible
      defaultOpen={hasActiveDescendant(children)}
      className={cn('', className)}
      ref={ref}
      {...props}
    >
      {children}
    </Collapsible>
  )
}

import { cn } from '@/utils/cn'

import type { SidebarMenuItemProps } from './sidebar.types'

export const SidebarMenuItem = ({ className, children, ref, ...props }: SidebarMenuItemProps) => {
  return (
    <div
      className={cn('flex h-xl w-full items-center justify-between gap-2xs', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}

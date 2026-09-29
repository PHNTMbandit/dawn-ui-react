import { cn } from '@/utils/cn'

import type { SidebarMenuProps } from './sidebar.types'

export const SidebarMenu = ({ className, children, ref, ...props }: SidebarMenuProps) => {
  return (
    <div
      className={cn('flex w-full flex-col items-start gap-3xs p-3xs', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
}

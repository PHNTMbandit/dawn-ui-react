import { useSidebar } from './sidebar-provider'
import { cn } from '@/utils/cn'

import type { SidebarFooterProps } from './sidebar.types'

export const SidebarFooter = ({ className, children, ref, ...props }: SidebarFooterProps) => {
  const { open, collapsible } = useSidebar()
  const isExpanded = collapsible === 'none' || open
  return (
    <div
      className={cn(
        'flex shrink-0 animate-in items-center truncate p-3xs transition-all duration-300 ease-in-out',
        open ? 'justify-start fade-in-0' : 'justify-center fade-out-0',
        className,
      )}
      ref={ref}
      {...props}
    >
      {typeof children === 'function' ? children(isExpanded!) : children}
    </div>
  )
}

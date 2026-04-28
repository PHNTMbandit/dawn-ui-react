import { useSidebar } from './sidebar-provider'
import { SidebarToggle } from './sidebar-toggle'
import { cn } from '@/utils/cn'

import type { SidebarHeaderProps } from './sidebar.types'

export const SidebarHeader = ({ className, children, ref, ...props }: SidebarHeaderProps) => {
  const { open, collapsible } = useSidebar()
  const isExpanded = collapsible === 'none' || open

  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-between truncate style-text-strong-1 transition-all duration-300 ease-in-out',
        !open ? 'self-center' : 'h-2xl pr-3xs pl-xs',
        className,
      )}
      ref={ref}
      {...props}
    >
      <div
        className={cn(
          'flex items-center justify-center gap-xs transition-all duration-200 ease-out',
          open && 'justify-start',
          collapsible !== 'none' && 'animate-in',
          isExpanded ? 'fade-in-0' : 'fade-out-0',
        )}
      >
        {typeof children === 'function' ? children(isExpanded!) : children}
      </div>
      {open && <SidebarToggle />}
    </div>
  )
}

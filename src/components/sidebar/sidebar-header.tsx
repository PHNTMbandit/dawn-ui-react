import { useSidebar } from './sidebar-provider'
import { cn } from '@/utils/cn'

import type { SidebarHeaderProps } from './sidebar.types'

export const SidebarHeader = ({ className, children, ref, ...props }: SidebarHeaderProps) => {
  const { open, collapsible } = useSidebar()
  const isExpanded = collapsible === 'none' || open

  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-start gap-xs truncate style-text-strong-1 transition-all duration-200 ease-out',
        !open ? 'self-center' : 'h-2xl pr-3xs pl-xs',
        open && 'justify-between',
        collapsible !== 'none' && 'animate-in',
        isExpanded ? 'fade-in-0' : 'fade-out-0',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children(isExpanded)}
    </div>
  )
}

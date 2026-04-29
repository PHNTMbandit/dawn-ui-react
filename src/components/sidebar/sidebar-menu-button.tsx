import { useSidebar } from './sidebar-provider'
import { cn } from '@/utils/cn'

import type { SidebarMenuButtonProps } from './sidebar.types'

export const SidebarMenuButton = ({
  isActive,
  className,
  children,
  ref,
  ...props
}: SidebarMenuButtonProps) => {
  const { open, collapsible } = useSidebar()
  const showText = collapsible === 'none' || open

  return (
    <button
      className={cn(
        'inline-flex cursor-pointer items-center gap-2xs rounded-full border border-transparent style-text-default-0 whitespace-nowrap transition-all duration-200 ease-out select-none active:scale-95 disabled:pointer-events-none disabled:opacity-50 [&>svg]:shrink-0',
        isActive
          ? 'pointer-events-none bg-surface text-on-surface shadow-2xs'
          : 'text-neutral-default hover:bg-neutral-container hover:text-neutral-on-container',
        !showText && 'mx-auto',
        !open ? 'size-xl justify-center *:hidden [&>svg]:block' : 'h-xl w-full pl-sm',
        collapsible !== 'none' && open && 'animate-in fade-in-0 slide-in-from-left-2',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
}

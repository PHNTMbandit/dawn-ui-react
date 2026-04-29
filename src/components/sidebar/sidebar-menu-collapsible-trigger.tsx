import { CaretRightIcon } from '@phosphor-icons/react'
import { CollapsibleTrigger } from '../collapsible'
import { PopoverTrigger } from '../popover'
import { useSidebar } from './sidebar-provider'
import { cn } from '@/utils/cn'

import type { SidebarMenuCollapsibleTriggerProps } from './sidebar.types'

export const SidebarMenuCollapsibleTrigger = ({
  className,
  children,
  ref,
  ...props
}: SidebarMenuCollapsibleTriggerProps) => {
  const { open } = useSidebar()

  if (!open)
    return (
      <PopoverTrigger>
        <button
          className={cn(
            'flex size-xl items-center justify-center rounded-xl shadow-none! transition-colors *:hidden hover:cursor-pointer hover:bg-neutral-container hover:text-neutral-on-container data-popup-open:bg-neutral-container [&>svg]:block',
          )}
        >
          {children}
          <CaretRightIcon
            weight="bold"
            className="absolute right-2xs size-xs text-on-surface-variant"
          />
        </button>
      </PopoverTrigger>
    )

  return (
    <CollapsibleTrigger
      className={cn(
        'gap-2xs! whitespace-nowrap shadow-none! transition-all duration-200 ease-out select-none hover:bg-neutral-container hover:text-neutral-on-container data-panel-open:bg-neutral-container! [&>svg]:shrink-0!',
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
    </CollapsibleTrigger>
  )
}

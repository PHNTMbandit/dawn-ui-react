import { CollapsiblePanel } from '../collapsible'
import { PopoverContent, PopoverPanel } from '../popover'
import { useSidebar } from './sidebar-provider'
import { cn } from '@/utils/cn'

import type { SidebarMenuCollapsiblePanelProps } from './sidebar.types'

export const SidebarMenuCollapsiblePanel = ({
  className,
  children,
  ref,
  ...props
}: SidebarMenuCollapsiblePanelProps) => {
  const { open } = useSidebar()

  if (!open) {
    return (
      <PopoverPanel side="right" className={'w-fit p-[0.5rem_0.5rem]'}>
        <PopoverContent className="flex gap-3xs">{children}</PopoverContent>
      </PopoverPanel>
    )
  }

  return (
    <CollapsiblePanel className={cn('', className)} ref={ref} {...props}>
      {children}
    </CollapsiblePanel>
  )
}

import { ContextMenu as BaseContextMenu } from '@base-ui/react/context-menu'
import { cn } from '@/index'

import type { ContextMenuTriggerProps } from './context-menu.types'

export const ContextMenuTrigger = ({
  className,
  children,
  ref,
  ...props
}: ContextMenuTriggerProps) => {
  return (
    <BaseContextMenu.Trigger className={cn('flex min-w-0 flex-1', className)} ref={ref} {...props}>
      {children}
    </BaseContextMenu.Trigger>
  )
}

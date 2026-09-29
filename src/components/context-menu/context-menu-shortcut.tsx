import { cn } from '@/utils/cn'

import type { ContextMenuShortcutProps } from './context-menu.types'

export const ContextMenuShortcut = ({
  className,
  children,
  ref,
  ...props
}: ContextMenuShortcutProps) => {
  return (
    <div className={cn('ml-auto inline-flex items-center gap-3xs', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}

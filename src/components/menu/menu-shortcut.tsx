import { cn } from '@/utils/cn'

import type { MenuShortcutProps } from './menu.types'

export const MenuShortcut = ({ className, children, ref, ...props }: MenuShortcutProps) => {
  return (
    <div className={cn('ml-auto inline-flex items-center gap-3xs', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}

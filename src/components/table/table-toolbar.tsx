import { cn } from '@/utils/cn'

import type { TableToolbarProps } from './table.types'

export const TableToolbar = ({ className, children, ref, ...props }: TableToolbarProps) => {
  return (
    <div className={cn('flex items-center gap-3xs', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}

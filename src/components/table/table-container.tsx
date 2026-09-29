import { cn } from '@/utils/cn'

import type { TableContainerProps } from './table.types'

export const TableContainer = ({ className, children, ref, ...props }: TableContainerProps) => {
  return (
    <div className={cn('flex flex-col gap-xs', className)} ref={ref} {...props}>
      {children}
    </div>
  )
}

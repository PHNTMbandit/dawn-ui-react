import { useCellContext } from './table-context'
import { cn } from '@/utils/cn'

import type { TableNumberCellProps } from './table.types'

export const TableNumberCell = ({ className, children, ref, ...props }: TableNumberCellProps) => {
  const cell = useCellContext<number>()

  return (
    <span className={cn('', className)} ref={ref} {...props}>
      {children}
      {cell.getValue().toLocaleString()}
    </span>
  )
}

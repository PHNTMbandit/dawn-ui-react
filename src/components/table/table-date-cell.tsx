import { useCellContext } from './table-context'
import { cn } from '@/utils/cn'

import type { TableDateCellProps } from './table.types'

export const TableDateCell = ({ className, children, ref, ...props }: TableDateCellProps) => {
  const cell = useCellContext<Date>()

  return (
    <span className={cn('', className)} ref={ref} {...props}>
      {children}
      {cell.getValue().toLocaleDateString()}
    </span>
  )
}

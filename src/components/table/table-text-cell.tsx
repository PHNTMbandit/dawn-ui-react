import { useCellContext } from './table-context'
import { cn } from '@/utils/cn'

import type { TableTextCellProps } from './table.types'

export const TableTextCell = ({ className, children, ref, ...props }: TableTextCellProps) => {
  const cell = useCellContext<string>()

  return (
    <span className={cn('', className)} ref={ref} {...props}>
      {children}
      {cell.getValue()}
    </span>
  )
}

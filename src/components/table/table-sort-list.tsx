import { useTableContext } from './table-context'
import { TableSortChip } from './table-sort-chip'
import { cn } from '@/utils/cn'

import type { TableSortListProps } from './table.types'

export const TableSortList = ({ className, children, ref, ...props }: TableSortListProps) => {
  const table = useTableContext()

  if (!table.getAllColumns().some((column) => column.getIsSorted())) {
    return null
  }

  return (
    <table.Subscribe selector={(state) => state.sorting}>
      {() => (
        <ul className={cn('flex flex-wrap items-center gap-xs', className)} ref={ref} {...props}>
          {children}
          {table.getAllColumns().map((column) => {
            if (!column.getIsSorted()) {
              return null
            }

            return <TableSortChip key={column.id} column={column} />
          })}
        </ul>
      )}
    </table.Subscribe>
  )
}

import { useTable } from './table'
import { TableRowGrid } from './table-row-grid'
import { cn } from '@/utils/cn'

import type { TableBodyGridProps } from './table.types'

export const TableBodyGrid = <TData,>({
  className,
  children,
  ref,
  ...props
}: TableBodyGridProps<TData>) => {
  const { view, table } = useTable()
  const rows = table.getRowModel().rows

  if (view !== 'grid') {
    return null
  }

  return (
    <tbody className={cn('grid h-full gap-sm overflow-y-auto', className)} ref={ref} {...props}>
      {rows.map((row) => {
        return (
          <TableRowGrid key={row.id} row={row}>
            {children ? children(row) : null}
          </TableRowGrid>
        )
      })}
    </tbody>
  )
}

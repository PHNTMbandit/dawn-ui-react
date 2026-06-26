import { useTable } from './table'
import { TableRowList } from './table-row-list'
import { cn } from '@/utils/cn'

import type { TableBodyListProps } from './table.types'

export const TableBodyList = ({ className, children, ref, ...props }: TableBodyListProps) => {
  const { view, table } = useTable()
  const rows = table.getRowModel().rows

  if (view !== 'list') {
    return null
  }

  return (
    <tbody className={cn('divide-y divide-border overflow-y-auto', className)} ref={ref} {...props}>
      {children}
      {rows.map((row) => {
        return <TableRowList key={row.id} row={row} />
      })}
    </tbody>
  )
}

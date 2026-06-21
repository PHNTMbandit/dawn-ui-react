import { useTable } from './table'
import { TableRowGrid, TableRowList } from '@/index'
import { cn } from '@/utils/cn'

import type { TableBodyProps } from './table.types'

export const TableBody = <TData,>({
  rowGridOverride: RowGridOverride,
  rowListOverride: RowListOverride,
  className,
  children,
  ref,
  ...props
}: TableBodyProps<TData>) => {
  const { view, table } = useTable()
  const rows = table.getRowModel().rows

  return (
    <tbody
      className={cn(
        '',
        view === 'grid' ? 'grid grid-cols-5 gap-sm' : 'divide-y divide-border',
        className,
      )}
      ref={ref}
      {...props}
    >
      {rows.map((row) => {
        if (children) {
          return children(row)
        }

        if (view === 'grid') {
          return RowGridOverride ? (
            <RowGridOverride key={row.id} row={row} />
          ) : (
            <TableRowGrid key={row.id} row={row} />
          )
        }

        if (view === 'list') {
          return RowListOverride ? (
            <RowListOverride key={row.id} row={row} />
          ) : (
            <TableRowList key={row.id} row={row} />
          )
        }

        return null
      })}
    </tbody>
  )
}

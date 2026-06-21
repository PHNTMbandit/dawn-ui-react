import { flexRender } from '@tanstack/react-table'
import { useTable } from './table'
import { cn } from '@/utils/cn'

import type { TableRowListProps } from './table.types'

export const TableRowList = <TData,>({
  row,
  className,
  children,
  ref,
  ...props
}: TableRowListProps<TData>) => {
  const { table } = useTable()

  const isSelected = table.getSelectedRowModel().flatRows.some((r) => r.id === row.id)

  return (
    <tr
      className={cn('transition-colors', className)}
      ref={ref}
      style={{
        backgroundColor: isSelected ? 'var(--color-neutral-container-high)' : 'transparent',
      }}
      {...props}
    >
      {row.getVisibleCells().map((cell) => {
        return (
          <td
            className="px-sm py-xs first:rounded-l-full last:rounded-r-full"
            key={cell.id}
            style={{
              width: cell.column.getSize(),
              minWidth: cell.column.columnDef.minSize,
              maxWidth: cell.column.columnDef.maxSize,
            }}
          >
            {children}
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        )
      })}
    </tr>
  )
}

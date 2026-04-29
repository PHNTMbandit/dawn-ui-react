import { flexRender } from '@tanstack/react-table'
import { cn } from '@/utils/cn'

import type { TableRowListProps } from './table.types'

export const TableRowList = ({ row, className, children, ref, ...props }: TableRowListProps) => {
  return (
    <tr className={cn('', className)} ref={ref} {...props}>
      {row.getVisibleCells().map((cell) => {
        return (
          <td
            className="p-sm"
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

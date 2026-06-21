import { flexRender } from '@tanstack/react-table'
import { cn } from '@/utils/cn'

import type { TableRowGridProps } from './table.types'

export const TableRowGrid = <TData,>({
  row,
  className,
  children,
  ref,
  ...props
}: TableRowGridProps<TData>) => {
  return (
    <tr
      className={cn('aspect-video min-h-2xl rounded-md bg-neutral-container p-xs', className)}
      ref={ref}
      {...props}
    >
      {row.getVisibleCells().map((cell) => {
        return (
          <td key={cell.id}>
            {children}
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        )
      })}
    </tr>
  )
}

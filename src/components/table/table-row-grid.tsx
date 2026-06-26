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
  if (children) {
    return (
      <tr className={cn('size-full', className)} ref={ref} {...props}>
        <td className="size-full" style={{ display: 'block' }}>
          {children}
        </td>
      </tr>
    )
  }

  return (
    <tr className={cn('size-full', className)} ref={ref} {...props}>
      {row.getVisibleCells().map((cell) => {
        return (
          <td key={cell.id} className="size-full" style={{ display: 'block' }}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        )
      })}
    </tr>
  )
}

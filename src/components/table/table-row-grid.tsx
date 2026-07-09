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
      <div role="row" className={cn('size-full', className)} ref={ref} {...props}>
        {children}
      </div>
    )
  }

  return (
    <div role="row" className={cn('size-full', className)} ref={ref} {...props}>
      {row.getVisibleCells().map((cell) => (
        <div key={cell.id} role="gridcell" className="size-full">
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </div>
      ))}
    </div>
  )
}

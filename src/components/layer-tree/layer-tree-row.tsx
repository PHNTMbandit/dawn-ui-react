import { flexRender } from '@tanstack/react-table'
import { cn } from '@/utils/cn'

import type { LayerTreeRowProps } from './layer-tree.types'

export const LayerTreeRow = ({ row, className, children, ref, ...props }: LayerTreeRowProps) => {
  return (
    <div
      className={cn('flex items-center justify-between gap-3xs', className)}
      ref={ref}
      {...props}
    >
      {children}
      {row.getVisibleCells().map((cell) => {
        return (
          <div
            key={cell.id}
            style={{
              width: cell.column.getSize() === 0 ? 'auto' : cell.column.getSize(),
              minWidth: cell.column.columnDef.minSize,
              maxWidth: cell.column.columnDef.maxSize,
            }}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </div>
        )
      })}
    </div>
  )
}

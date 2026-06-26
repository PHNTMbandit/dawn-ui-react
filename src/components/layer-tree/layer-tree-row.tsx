import { flexRender } from '@tanstack/react-table'
import { cn } from '@/utils/cn'

import type { LayerTreeRowProps } from './layer-tree.types'

export const LayerTreeRow = <TData,>({
  row,
  className,
  children,
  ref,
  ...props
}: LayerTreeRowProps<TData>) => {
  return (
    <div className={cn('flex w-full items-center gap-3xs', className)} ref={ref} {...props}>
      {children}
      {row.getVisibleCells().map((cell, index) => {
        const isFirstCell = index === 0
        return (
          <div
            key={cell.id}
            className={cn(isFirstCell && 'flex min-w-0 flex-1')}
            style={
              isFirstCell
                ? undefined
                : {
                    width: cell.column.getSize() === 0 ? 'auto' : cell.column.getSize(),
                    minWidth: cell.column.columnDef.minSize,
                    maxWidth: cell.column.columnDef.maxSize,
                  }
            }
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </div>
        )
      })}
    </div>
  )
}

import { useDroppable } from '@dnd-kit/react'
import { useTableContext } from './layer-tree-context'
import { LayerTreeRow } from './layer-tree-row'
import { cn } from '@/utils/cn'

import type { LayerTreeBodyProps } from './layer-tree.types'

export const LayerTreeBody = ({ className, children, ...props }: LayerTreeBodyProps) => {
  const table = useTableContext()
  const { isDropTarget, ref } = useDroppable({
    id: 'root-dropzone',
    data: {
      folderId: 'root',
      nodeId: 'root',
    },
  })

  return (
    <table.Subscribe selector={(state) => state}>
      {() => (
        <div className={cn('flex min-h-0 w-full grow flex-col', className)} {...props}>
          {children}
          <ul className="flex min-h-0 w-full flex-col gap-xs overflow-y-auto">
            {table.getRowModel().rows.map((row) => (
              <LayerTreeRow key={row.id} rowId={row.id} />
            ))}
          </ul>
          <div
            ref={ref}
            className={cn(
              'grow',
              isDropTarget &&
                'rounded-lg bg-success-container ring-1 ring-success-default ring-inset',
            )}
          />
        </div>
      )}
    </table.Subscribe>
  )
}

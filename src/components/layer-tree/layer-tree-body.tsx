import { useDroppable } from '@dnd-kit/react'
import { useLayerTree } from './layer-tree'
import { LayerTreeRow } from './layer-tree-row'
import { cn } from '@/utils/cn'

import type { LayerTreeBodyProps } from './layer-tree.types'

export const LayerTreeBody = <TData,>({ className, children, ...props }: LayerTreeBodyProps) => {
  const { table } = useLayerTree<TData>()
  const { isDropTarget, ref } = useDroppable({
    id: 'root-dropzone',
    data: {
      folderId: 'root',
      nodeId: 'root',
    },
  })

  return (
    <div className={cn('flex grow flex-col', className)} {...props}>
      {children}
      <ul className="flex flex-col gap-xs">
        {table.getRowModel().rows.map((row) => (
          <LayerTreeRow key={row.id} row={row} />
        ))}
      </ul>
      <div
        ref={ref}
        className={cn(
          'grow',
          isDropTarget && 'rounded-lg bg-success-container ring-1 ring-success-default ring-inset',
        )}
      />
    </div>
  )
}

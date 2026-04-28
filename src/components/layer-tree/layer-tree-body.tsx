import { useLayerTree } from './layer-tree'
import { LayerTreeRow } from './layer-tree-row'
import { cn } from '@/utils/cn'

import type { LayerTreeBodyProps } from './layer-tree.types'

export const LayerTreeBody = ({ className, children, ref, ...props }: LayerTreeBodyProps) => {
  const { table } = useLayerTree()

  return (
    <div className={cn('flex flex-col gap-xs', className)} ref={ref} {...props}>
      {children}
      {table.getRowModel().rows.map((row) => (
        <LayerTreeRow key={row.id} row={row} />
      ))}
    </div>
  )
}

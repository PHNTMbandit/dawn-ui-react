import { MagnifyingGlassIcon } from '@phosphor-icons/react'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../input-group'
import { useLayerTree } from './layer-tree'
import { cn } from '@/utils/cn'

import type { LayerTreeSearchProps } from './layer-tree.types'

export const LayerTreeSearch = ({ className, children, ref, ...props }: LayerTreeSearchProps) => {
  const { table } = useLayerTree()

  return (
    <InputGroup>
      <InputGroupAddon>
        <MagnifyingGlassIcon weight="bold" />
      </InputGroupAddon>
      <InputGroupInput
        onChange={(event) => table.setGlobalFilter(event.target.value)}
        value={table.getState().globalFilter ?? ''}
        className={cn('', className)}
        ref={ref}
        {...props}
      />
      {children}
    </InputGroup>
  )
}

import { MagnifyingGlassIcon } from '@phosphor-icons/react'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../input-group'
import { useLayerTree } from './layer-tree'
import { cn } from '@/utils/cn'

import type { LayerTreeSearchProps } from './layer-tree.types'

export const LayerTreeSearch = ({
  placeholder,
  className,
  children,
  ref,
  ...props
}: LayerTreeSearchProps) => {
  const { table } = useLayerTree()

  return (
    <InputGroup className={cn('', className)} ref={ref} {...props}>
      <InputGroupAddon>
        <MagnifyingGlassIcon weight="bold" />
      </InputGroupAddon>
      <InputGroupInput
        placeholder={placeholder}
        onChange={(event) => table.setGlobalFilter(event.target.value)}
        value={table.getState().globalFilter ?? ''}
      />
      {children}
    </InputGroup>
  )
}

import { Button } from '../button'
import { useLayerTree } from './layer-tree'
import { cn } from '@/utils/cn'

import type { LayerTreeNodeToggleProps } from './layer-tree.types'

export const LayerTreeNodeToggle = <TData,>({
  value,
  columnId,
  rows,
  children,
  className,
  ref,
  ...props
}: LayerTreeNodeToggleProps<TData>) => {
  const { setDataSet } = useLayerTree()

  const handleClick = () => {
    rows.forEach((row) => {
      row.original[columnId] = !value as TData[typeof columnId]
    })

    setDataSet((currentDataSet) => ({
      ...currentDataSet,
      data: [...currentDataSet.data],
    }))
  }

  return (
    <Button
      tone="neutral"
      size="iconSmall"
      variant={'ghost'}
      className={cn('', className)}
      ref={ref}
      onClick={handleClick}
      {...props}
    >
      {children(value)}
    </Button>
  )
}

import { FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { useLayerTree } from './layer-tree'
import { cn } from '@/utils/cn'

import type { LayerTreeExpandAllProps } from './layer-tree.types'

export const LayerTreeExpandAll = ({ className, ref, ...props }: LayerTreeExpandAllProps) => {
  const { table } = useLayerTree()

  const handleClick = () => {
    if (table.getIsSomeRowsExpanded()) {
      table.toggleAllRowsExpanded(false)
    } else {
      table.toggleAllRowsExpanded(true)
    }
  }

  return (
    <Button
      size={'iconSmall'}
      tone="neutral"
      variant={'ghost'}
      onClick={handleClick}
      className={cn('', className)}
      ref={ref}
      {...props}
    >
      {table.getIsSomeRowsExpanded() ? (
        <FolderSimpleIcon weight="bold" />
      ) : (
        <FolderOpenIcon weight="bold" />
      )}
    </Button>
  )
}

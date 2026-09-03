import { FolderOpenIcon, FolderSimpleIcon } from '@phosphor-icons/react'
import { Button } from '../button'
import { useTableContext } from './layer-tree-context'
import { cn } from '@/utils/cn'

import type { LayerTreeExpandAllProps } from './layer-tree.types'

export const LayerTreeExpandAll = ({ className, ref, ...props }: LayerTreeExpandAllProps) => {
  const table = useTableContext()

  const handleClick = () => {
    if (table.getIsSomeRowsExpanded()) {
      table.toggleAllRowsExpanded(false)
    } else {
      table.toggleAllRowsExpanded(true)
    }
  }

  return (
    <table.Subscribe selector={(state) => state.expanded}>
      {() => (
        <Button
          size={'iconMedium'}
          tone="neutral"
          variant={'ghost'}
          onClick={handleClick}
          className={cn('', className)}
          ref={ref}
          {...props}
        >
          {table.getIsSomeRowsExpanded() ? (
            <FolderOpenIcon weight="bold" />
          ) : (
            <FolderSimpleIcon weight="bold" />
          )}
        </Button>
      )}
    </table.Subscribe>
  )
}

import { FolderIcon, FolderOpenIcon, type Icon } from '@phosphor-icons/react'
import { createElement } from 'react'
import { useCellContext, useTableContext } from './layer-tree-context'
import { cn } from '@/utils/cn'

import type { LayerTreeIconCellProps } from './layer-tree.types'

export const LayerTreeIconCell = ({
  className,
  children,
  ref,
  ...props
}: LayerTreeIconCellProps) => {
  const cell = useCellContext<Icon>()
  const table = useTableContext()
  const icon = cell.getValue()
  const row = cell.row
  const hasChildren = row.getCanExpand() && row.getLeafRows().length > 0

  return (
    <table.Subscribe selector={(state) => state.expanded}>
      {() => {
        const isExpanded = row.getIsExpanded()

        return (
          <div
            className={cn('flex w-fit shrink-0 items-center [&>svg]:size-sm', className)}
            ref={ref}
            {...props}
          >
            {children}
            {hasChildren ? (
              isExpanded ? (
                <FolderOpenIcon />
              ) : (
                <FolderIcon weight={hasChildren && 'fill'} />
              )
            ) : (
              createElement(icon, {
                weight: 'bold',
              })
            )}
          </div>
        )
      }}
    </table.Subscribe>
  )
}

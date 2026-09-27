import { FolderIcon, FolderOpenIcon } from '@phosphor-icons/react'
import { useCellContext } from './layer-tree-context'
import { cn } from '@/utils/cn'

import type { LayerTreeNodeIconProps } from './layer-tree.types'

export const LayerTreeNodeIcon = ({
  icon: NodeIcon,
  className,
  children,
  ref,
  ...props
}: LayerTreeNodeIconProps) => {
  const cell = useCellContext()
  const row = cell.row
  const hasChildren = row.getCanExpand() && row.getLeafRows().length > 0

  return (
    <div className={cn('', className)} ref={ref} {...props}>
      {children}
      {hasChildren ? (
        row.getIsExpanded() ? (
          <FolderOpenIcon />
        ) : (
          <FolderIcon weight="fill" />
        )
      ) : (
        <NodeIcon weight="bold" />
      )}
    </div>
  )
}

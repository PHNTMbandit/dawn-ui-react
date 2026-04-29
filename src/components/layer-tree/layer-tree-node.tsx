import { FolderIcon, FolderOpenIcon } from '@phosphor-icons/react'
import { useLayerTree } from './layer-tree'
import { cn } from '@/utils/cn'

import type { LayerTreeNodeProps } from './layer-tree.types'

export const LayerTreeNode = <TData,>({
  className,
  children,
  ref,
  row,
  icon: Icon,
  ...props
}: LayerTreeNodeProps<TData>) => {
  const { table } = useLayerTree()
  const hasChildren = row.getCanExpand()
  const indent = row.depth * 24

  const handleClick = () => {
    if (hasChildren) {
      row.toggleExpanded()
      return
    }

    if (row.getCanSelect()) {
      table.resetRowSelection()
      row.toggleSelected()
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{
        marginLeft: indent,
        width: `calc(100% - ${indent}px)`,
      }}
      className={cn(
        'flex h-lg min-w-0 items-center justify-start gap-2xs truncate rounded-lg px-xs style-text-default-0 transition-all hover:cursor-pointer [&>svg]:size-sm [&>svg]:shrink-0',
        row.getIsSelected()
          ? 'bg-brand-default text-brand-on-default'
          : 'hover:bg-brand-container hover:text-brand-on-container',
        className,
      )}
      ref={ref}
      {...props}
    >
      {hasChildren ? (
        row.getIsExpanded() ? (
          <FolderOpenIcon weight="bold" />
        ) : (
          <FolderIcon weight="fill" />
        )
      ) : Icon ? (
        <Icon weight="bold" />
      ) : null}
      {children}
    </button>
  )
}

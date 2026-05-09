import { useDraggable, useDroppable } from '@dnd-kit/react'
import { FolderIcon, FolderOpenIcon } from '@phosphor-icons/react'
import React from 'react'
import { useLayerTree } from './layer-tree'
import { cn } from '@/utils/cn'

import type { LayerTreeNodeProps } from './layer-tree.types'

export const LayerTreeNode = <TData,>({
  className,
  children,
  row,
  icon: Icon,
  dndDisabled,
  ...props
}: LayerTreeNodeProps<TData>) => {
  const { table, draggingNodeId } = useLayerTree<TData>()
  const hasChildren = row.getCanExpand()
  const { ref: draggableRef, isDragging } = useDraggable({
    id: row.id,
    data: {
      isFolder: hasChildren,
      nodeId: row.id,
    },
    disabled: dndDisabled,
  })
  const { ref: droppableRef, isDropTarget } = useDroppable({
    id: `folder:${row.id}`,
    data: {
      folderId: row.id,
      isFolder: hasChildren,
    },
    disabled: dndDisabled,
  })

  const indent = row.depth * 24

  const setNodeRef = React.useCallback(
    (element: Element | null) => {
      draggableRef(element)
      droppableRef(element)
    },
    [draggableRef, droppableRef],
  )

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

  const isAncestorDragging = React.useMemo(() => {
    if (!draggingNodeId) return false
    let parent = row.getParentRow()
    while (parent) {
      if (parent.id === draggingNodeId) return true
      parent = parent.getParentRow()
    }
    return false
  }, [draggingNodeId, row])

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        style={{
          marginLeft: indent,
          width: `calc(100% - ${indent}px)`,
        }}
        className={cn(
          'flex h-lg min-w-0 items-center justify-start gap-2xs truncate rounded-lg px-xs style-text-default-0 transition-all hover:cursor-pointer [&>svg]:size-sm [&>svg]:shrink-0',
          hasChildren &&
            isDropTarget &&
            'bg-success-container text-success-on-container ring ring-success-border',
          row.getIsSelected()
            ? 'bg-brand-default text-brand-on-default'
            : 'hover:bg-brand-container hover:text-brand-on-container',
          (isDragging || isAncestorDragging) && 'opacity-60',
          className,
        )}
        ref={setNodeRef}
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
    </>
  )
}

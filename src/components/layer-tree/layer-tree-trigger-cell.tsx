import { useDraggable, useDroppable } from '@dnd-kit/react'
import React from 'react'
import { useLayerTree } from './layer-tree'
import { useCellContext } from './layer-tree-context'
import { cn } from '@/utils/cn'

import type { LayerTreeTriggerCellProps } from './layer-tree.types'

export const LayerTreeTriggerCell = ({
  className,
  children,
  dndDisabled,
  ...props
}: LayerTreeTriggerCellProps) => {
  const cell = useCellContext<string>()
  const { draggingNodeId } = useLayerTree()
  const row = cell.row
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
      nodeId: row.id,
      isFolder: hasChildren,
    },
    disabled: dndDisabled || !hasChildren,
  })

  const setNodeRef = React.useCallback(
    (element: Element | null) => {
      draggableRef(element)
      droppableRef(element)
    },
    [draggableRef, droppableRef],
  )

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (hasChildren) {
      row.toggleExpanded()
      return
    }
    if (!row.getCanSelect()) return
    if (!event.shiftKey) cell.table.resetRowSelection()
    row.getToggleSelectedHandler()({ target: { checked: true }, shiftKey: event.shiftKey })
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
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        'flex h-lg min-w-0 grow items-center justify-start gap-2xs truncate rounded-lg px-2xs style-text-default-0 transition-all hover:cursor-pointer [&>svg]:size-sm [&>svg]:shrink-0',
        hasChildren &&
          isDropTarget &&
          'bg-success-container text-success-on-container ring ring-success-border',
        row.getIsSelected()
          ? 'bg-neutral-default text-neutral-on-default'
          : 'hover:bg-neutral-container hover:text-neutral-on-container',
        (isDragging || isAncestorDragging) && 'opacity-60',
        className,
      )}
      ref={setNodeRef}
      {...props}
    >
      {children}
      {cell.getValue()}
    </button>
  )
}

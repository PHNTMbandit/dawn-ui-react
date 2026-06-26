import { Feedback } from '@dnd-kit/dom'
import {
  DragDropProvider,
  DragOverlay,
  type DragEndEvent,
  type DragStartEvent,
} from '@dnd-kit/react'
import React from 'react'
import { Badge } from '../badge'
import { cn } from '@/utils/cn'

import type { LayerTreeProps } from './layer-tree.types'

type LayerTreeContextType<TData> = LayerTreeProps<TData> & {
  draggingNodeId: string | null
}

const LayerTreeContext = React.createContext<LayerTreeContextType<any> | null>(null)

export const LayerTree = <TData,>({
  table,
  onDNDStart: onDragStart,
  onDNDEnd: onDragEnd,
  className,
  children,
  ref,
  ...props
}: LayerTreeProps<TData>) => {
  const [draggingNodeId, setDraggingNodeId] = React.useState<string | null>(null)

  const handleDragStart = ({ operation: { source } }: DragStartEvent) => {
    setDraggingNodeId(source?.data.nodeId ?? null)
    if (onDragStart) {
      onDragStart({ nodeId: source?.data.nodeId ?? '' })
    }
  }

  const handleDragEnd = ({ operation: { source, target } }: DragEndEvent) => {
    setDraggingNodeId(null)
    if (onDragEnd) {
      const targetNodeId = target?.data.folderId ?? target?.data.nodeId ?? null
      onDragEnd({
        sourceNodeId: source?.data.nodeId ?? '',
        targetNodeId,
      })
    }
  }

  return (
    <DragDropProvider
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      plugins={(defaults) => [...defaults, Feedback.configure({ dropAnimation: null })]}
    >
      <LayerTreeContext.Provider
        value={{
          table,
          className,
          children,
          ref,
          draggingNodeId,
          ...props,
        }}
      >
        <div className={cn('flex flex-col justify-between', className)} ref={ref} {...props}>
          {children}
          <DragOverlay>
            {(source) => (
              <div
                className={cn(
                  'relative rounded-md border border-neutral-border bg-neutral-container px-xs py-3xs opacity-80 shadow-md transition-opacity',
                )}
              >
                {table.getRow(String(source.id)).renderValue('name') ?? source.id}
                <Badge className="absolute -top-xs -right-xs" size={'iconSmall'}>
                  {table.getRow(String(source.id))?.subRows.length + 1}
                </Badge>
              </div>
            )}
          </DragOverlay>
        </div>
      </LayerTreeContext.Provider>
    </DragDropProvider>
  )
}

export const useLayerTree = <TData,>() => {
  const context = React.useContext<LayerTreeContextType<TData> | null>(LayerTreeContext)

  if (!context) {
    throw new Error('useLayerTree must be used within a LayerTreeProvider')
  }

  return context
}

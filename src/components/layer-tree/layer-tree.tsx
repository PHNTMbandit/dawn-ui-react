import { Feedback } from '@dnd-kit/dom'
import {
  DragDropProvider,
  DragOverlay,
  type DragEndEvent,
  type DragStartEvent,
} from '@dnd-kit/react'
import React from 'react'
import { Badge } from '../badge'
import {
  moveLayerTreeNode,
  moveLayerTreeNodeToRoot,
  type LayerTreeNodeData,
} from './layer-tree-utils'
import { cn } from '@/utils/cn'

import type { LayerTreeDataSet, LayerTreeProps } from './layer-tree.types'

type LayerTreeContextType<TData> = LayerTreeProps<TData> & {
  dataSet: LayerTreeDataSet<TData>
  setDataSet: React.Dispatch<React.SetStateAction<LayerTreeDataSet<TData>>>
  draggingNodeId: string | null
}

const LayerTreeContext = React.createContext<LayerTreeContextType<any> | null>(null)

export const LayerTree = <TData,>({
  table,
  dataSet,
  setDataSet,
  className,
  children,
  ref,
  ...props
}: LayerTreeProps<TData>) => {
  const [internalDataSet, setInternalDataSet] = React.useState<LayerTreeDataSet<TData>>({
    data: [],
  })
  const [draggingNodeId, setDraggingNodeId] = React.useState<string | null>(null)

  const resolvedDataSet = dataSet ?? internalDataSet
  const resolvedSetDataSet = setDataSet ?? setInternalDataSet

  const handleDragStart = ({ operation: { source } }: DragStartEvent) => {
    setDraggingNodeId(source?.data.nodeId ?? null)
  }

  const handleDragEnd = ({ operation: { source, target } }: DragEndEvent) => {
    setDraggingNodeId(null)
    if (!target) return

    const sourceId = source?.data.nodeId
    const targetId = target.data.folderId

    if (!sourceId || sourceId === targetId) return

    if (targetId === 'root') {
      resolvedSetDataSet((currentDataSet) => ({
        ...currentDataSet,
        data: moveLayerTreeNodeToRoot(
          currentDataSet.data as LayerTreeNodeData[],
          sourceId,
        ) as TData[],
      }))
      return
    }

    resolvedSetDataSet((currentDataSet) => ({
      ...currentDataSet,
      data: moveLayerTreeNode(
        currentDataSet.data as LayerTreeNodeData[],
        sourceId,
        targetId,
      ) as TData[],
    }))
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
          ...props,
          dataSet: resolvedDataSet,
          setDataSet: resolvedSetDataSet,
          draggingNodeId,
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

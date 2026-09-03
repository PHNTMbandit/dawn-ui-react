import { faker } from '@faker-js/faker'
import {
  CircleIcon,
  ClipboardIcon,
  CopyIcon,
  FolderIcon,
  ImageIcon,
  PlusIcon,
  ScissorsIcon,
  SquareIcon,
  StarIcon,
  TextAaIcon,
  TriangleIcon,
} from '@phosphor-icons/react'
import { functionalUpdate } from '@tanstack/react-table'
import React from 'react'
import { Button } from '../button'
import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '../context-menu'
import { createAppColumnHelper, useAppTable } from './layer-tree-context'
import { moveLayerTreeNode, moveLayerTreeNodeToRoot } from './layer-tree-utils'

import type { ExpandedState } from '@tanstack/react-table'

export default {
  title: 'Components/Layer Tree',
  parameters: {
    docs: {
      subtitle: 'A hierarchical tree for managing nested layers with drag-and-drop support.',
      description: {
        component: `The Layer Tree component displays hierarchical data using TanStack Table. It supports:

- **Drag-and-drop** reordering between folders
- **Expandable/collapsible** folder nodes  
- **Search filtering** across the tree
- **Custom toggle columns** (e.g., visibility, lock state)

The component is data-agnostic—you provide your own data structure with \`id\` and optional \`children\` fields. Use the exported utility functions (\`moveLayerTreeNode\`, \`removeLayerTreeNode\`, etc.) or bring your own logic for tree manipulation.`,
      },
    },
  },
}

/**
 * Your data type only needs `id` and optional `children`.
 * Add any other fields your app requires.
 */
type Layer = {
  id: string
  name: string
  icon: React.ElementType
  visible: boolean
  locked: boolean
  children?: Layer[]
}

const layerIcons = [SquareIcon, CircleIcon, TriangleIcon, StarIcon, TextAaIcon, ImageIcon]

const makeLayer = (): Layer => ({
  id: faker.string.uuid(),
  name: faker.commerce.product(),
  icon: faker.helpers.arrayElement(layerIcons),
  visible: faker.datatype.boolean(0.85),
  locked: faker.datatype.boolean(0.15),
})

const makeGroup = (depth: number): Layer => ({
  id: faker.string.uuid(),
  name: faker.commerce.department(),
  icon: FolderIcon,
  visible: true,
  locked: false,
  children: Array.from({ length: faker.number.int({ min: 2, max: 4 }) }, () =>
    depth > 0 && faker.datatype.boolean(0.35) ? makeGroup(depth - 1) : makeLayer(),
  ),
})

const makeLayers = (count: number): Layer[] =>
  Array.from({ length: count }, () => (faker.datatype.boolean(0.6) ? makeGroup(1) : makeLayer()))

const initialLayers = makeLayers(5)

/** Reads a boolean prop from every node into a row-id map. */
const collectRowState = (nodes: Layer[], key: 'visible' | 'locked'): Record<string, boolean> => {
  const state: Record<string, boolean> = {}
  const walk = (items: Layer[]) => {
    for (const item of items) {
      state[item.id] = item[key]
      if (item.children) walk(item.children)
    }
  }
  walk(nodes)
  return state
}

/** Writes a row-id map of booleans back onto the matching nodes. */
const applyRowState = (
  nodes: Layer[],
  key: 'visible' | 'locked',
  next: Record<string, boolean>,
): Layer[] =>
  nodes.map((node) => ({
    ...node,
    [key]: next[node.id] ?? node[key],
    children: node.children ? applyRowState(node.children, key, next) : node.children,
  }))

export const Default = {
  name: 'Default',
  parameters: {
    docs: {
      description: {
        story:
          'Minimal setup showing drag-and-drop, expand/collapse, and search. Bring your own data manipulation logic.',
      },
    },
  },
  render: function Render() {
    const [layers, setLayers] = React.useState<Layer[]>(initialLayers)
    const [expanded, setExpanded] = React.useState<ExpandedState>({})
    const rowVisibility = React.useMemo(() => collectRowState(layers, 'visible'), [layers])
    const rowLocked = React.useMemo(() => collectRowState(layers, 'locked'), [layers])

    const columnHelper = createAppColumnHelper<Layer>()
    const columns = columnHelper.columns([
      columnHelper.accessor('icon', {
        cell: ({ cell }) => <cell.LayerTreeIconCell />,
        enableSorting: false,
      }),
      columnHelper.accessor('name', {
        header: 'Layer Name',
        cell: ({ cell, row }) => (
          <ContextMenu>
            <ContextMenuTrigger>
              <cell.LayerTreeTriggerCell dndDisabled={row.original.locked} />
            </ContextMenuTrigger>
            <ContextMenuPopup>
              <ContextMenuItem>
                <CopyIcon weight="bold" /> Copy
              </ContextMenuItem>
              <ContextMenuItem>
                <ClipboardIcon weight="bold" /> Paste
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>
                <ScissorsIcon weight="bold" /> Cut
              </ContextMenuItem>
            </ContextMenuPopup>
          </ContextMenu>
        ),
      }),
      columnHelper.accessor('visible', {
        header: 'Visible',
        cell: ({ cell }) => <cell.LayerTreeVisibilityCell />,
      }),
      columnHelper.accessor('locked', {
        header: 'Locked',
        cell: ({ cell }) => <cell.LayerTreeLockedCell />,
      }),
    ])

    const table = useAppTable({
      key: 'layer-tree-table',
      columns,
      data: layers,
      state: {
        expanded,
        rowVisibility,
        rowLocked,
        pagination: {
          pageIndex: 0,
          pageSize: 100,
        },
      },
      filterFromLeafRows: true,
      autoResetExpanded: false,
      getRowCanExpand: (row) => !!row.original.children?.length,
      enableRowSelection: (row) => !row.original.children?.length,
      getRowId: (row, index) => row.id ?? String(index),
      getSubRows: (row) => row.children ?? [],
      onExpandedChange: setExpanded,
      onRowVisibilityChange: (updater) =>
        setLayers((prev) =>
          applyRowState(
            prev,
            'visible',
            functionalUpdate(updater, collectRowState(prev, 'visible')),
          ),
        ),
      onRowLockedChange: (updater) =>
        setLayers((prev) =>
          applyRowState(prev, 'locked', functionalUpdate(updater, collectRowState(prev, 'locked'))),
        ),
    })

    const addLayer = () => {
      setLayers((prev) => [...prev, makeLayer()])
    }

    const handleDragEnd = ({
      sourceNodeId,
      targetNodeId,
    }: {
      sourceNodeId: string
      targetNodeId: string | null
    }) => {
      if (!sourceNodeId || !targetNodeId || sourceNodeId === targetNodeId) return

      setLayers((prev) =>
        targetNodeId === 'root'
          ? moveLayerTreeNodeToRoot(prev, sourceNodeId)
          : moveLayerTreeNode(prev, sourceNodeId, targetNodeId),
      )

      if (targetNodeId !== 'root') {
        setExpanded((prev) => (typeof prev === 'object' ? { ...prev, [targetNodeId]: true } : prev))
      }
    }

    return (
      <table.AppTable>
        <table.LayerTree onDNDEnd={handleDragEnd} className="h-[600px] w-[360px]">
          <table.LayerTreeBody />
          <table.LayerTreeFooter>
            <div className="flex items-center justify-between">
              <Button tone="neutral" size="iconMedium" variant="ghost" onClick={addLayer}>
                <PlusIcon weight="bold" />
              </Button>
              <table.LayerTreeSort />
              <table.LayerTreeVisibilityAll size="iconMedium" />
              <table.LayerTreeLockedAll size="iconMedium" />
              <table.LayerTreeExpandAll size="iconMedium" />
            </div>
            <table.LayerTreeSearch placeholder="Search layers..." />
          </table.LayerTreeFooter>
        </table.LayerTree>
      </table.AppTable>
    )
  },
}

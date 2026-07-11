import {
  ClipboardIcon,
  CopyIcon,
  EyeIcon,
  EyeSlashIcon,
  FolderIcon,
  FolderPlusIcon,
  LockIcon,
  LockSimpleOpenIcon,
  ScissorsIcon,
  SquareIcon,
  TextAaIcon,
} from '@phosphor-icons/react'
import {
  createColumnHelper,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  useReactTable,
  type ExpandedState,
} from '@tanstack/react-table'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Button } from '../button'
import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '../context-menu'
import { LayerTree } from './layer-tree'
import { LayerTreeBody } from './layer-tree-body'
import { LayerTreeExpandAll } from './layer-tree-expand-all'
import { LayerTreeFooter } from './layer-tree-footer'
import { LayerTreeNode } from './layer-tree-node'
import { LayerTreeNodeToggle } from './layer-tree-node-toggle'
import { LayerTreeSearch } from './layer-tree-search'
import { LayerTreeSort } from './layer-tree-sort'
import { moveLayerTreeNode, moveLayerTreeNodeToRoot } from './layer-tree-utils'
import { cn } from '@/utils/cn'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Layer Tree',
  component: LayerTree,
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
} satisfies Meta<typeof LayerTree>

type Story = StoryObj<typeof LayerTree>

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
  nestedProps?: {
    boolean1: boolean
    boolean2: boolean
    string1: string
    string2: string
  }
}

const initialLayers: Layer[] = [
  {
    id: 'folder-1',
    name: 'Background',
    icon: FolderIcon,
    visible: true,
    locked: false,
    children: [
      {
        id: 'layer-1',
        name: 'Sky Gradient',
        icon: SquareIcon,
        visible: true,
        locked: true,
        nestedProps: { boolean1: true, boolean2: false, string1: 'value1', string2: 'value2' },
      },
      {
        id: 'layer-2',
        name: 'Mountains',
        icon: SquareIcon,
        visible: true,
        locked: false,
        nestedProps: { boolean1: false, boolean2: true, string1: 'value3', string2: 'value4' },
      },
    ],
  },
  {
    id: 'folder-2',
    name: 'Foreground',
    icon: FolderIcon,
    visible: true,
    locked: false,
    children: [
      {
        id: 'layer-3',
        name: 'Title Text',
        icon: TextAaIcon,
        visible: true,
        locked: false,
        nestedProps: { boolean1: true, boolean2: false, string1: 'value5', string2: 'value6' },
      },
      {
        id: 'layer-4',
        name: 'Logo',
        icon: SquareIcon,
        visible: false,
        locked: false,
        nestedProps: { boolean1: false, boolean2: true, string1: 'value7', string2: 'value8' },
      },
    ],
  },
  {
    id: 'layer-5',
    name: 'Overlay',
    icon: SquareIcon,
    visible: true,
    locked: false,
    nestedProps: { boolean1: true, boolean2: false, string1: 'value9', string2: 'value10' },
  },
]

export const Default: Story = {
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
    const [globalFilter, setGlobalFilter] = React.useState('')

    // Force re-render when toggling mutable fields
    const refresh = () => setLayers((prev) => [...prev])

    const columnHelper = createColumnHelper<Layer>()
    const columns = [
      columnHelper.accessor('name', {
        cell: (info) => (
          <ContextMenu>
            <ContextMenuTrigger>
              <LayerTreeNode
                row={info.row}
                icon={info.row.original.icon}
                dndDisabled={info.row.original.locked}
                className={cn(!info.row.original.visible && 'opacity-50')}
              >
                {info.getValue()}
              </LayerTreeNode>
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
        cell: (info) => (
          <LayerTreeNodeToggle
            value={info.getValue()}
            accessorKey="nestedProps.boolean1"
            rows={[info.row, ...info.row.getLeafRows()]}
            onToggle={refresh}
          >
            {(v) => (v ? <EyeIcon /> : <EyeSlashIcon />)}
          </LayerTreeNodeToggle>
        ),
      }),
      columnHelper.accessor('locked', {
        cell: (info) => (
          <LayerTreeNodeToggle
            value={info.getValue()}
            accessorKey="locked"
            rows={[info.row, ...info.row.getLeafRows()]}
            onToggle={refresh}
          >
            {(v) => (v ? <LockIcon weight="fill" /> : <LockSimpleOpenIcon />)}
          </LayerTreeNodeToggle>
        ),
      }),
    ]

    const table = useReactTable({
      data: layers,
      columns,
      state: { expanded, globalFilter },
      getRowId: (row) => row.id,
      getSubRows: (row) => row.children,
      getRowCanExpand: (row) => !!row.original.children,
      getCoreRowModel: getCoreRowModel(),
      getExpandedRowModel: getExpandedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      filterFromLeafRows: true,
      onExpandedChange: setExpanded,
      onGlobalFilterChange: setGlobalFilter,
      defaultColumn: { size: 0, minSize: 0 },
    })

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

    const addFolder = () => {
      const newFolder: Layer = {
        id: uuidv4(),
        name: 'New Folder',
        icon: FolderIcon,
        visible: true,
        locked: false,
        children: [],
      }
      setLayers((prev) => [...prev, newFolder])
    }

    const allVisible = table.getRowModel().flatRows.every((row) => row.original.visible)
    const allLocked = table.getRowModel().flatRows.every((row) => row.original.locked)

    return (
      <div className="pointer-events-auto z-10 bg-surface">
        <LayerTree table={table} onDNDEnd={handleDragEnd} className="h-[400px] w-[360px]">
          <LayerTreeBody />
          <LayerTreeFooter>
            <div className="flex items-center justify-between">
              <LayerTreeSort />
              <LayerTreeNodeToggle<Layer>
                accessorKey="visible"
                rows={table.getRowModel().flatRows}
                size="iconMedium"
                value={allVisible}
                onToggle={refresh}
              >
                {(v) => (v ? <EyeSlashIcon /> : <EyeIcon />)}
              </LayerTreeNodeToggle>
              <LayerTreeNodeToggle<Layer>
                accessorKey="locked"
                size="iconMedium"
                rows={table.getRowModel().flatRows}
                value={allLocked}
                onToggle={refresh}
              >
                {(v) => (v ? <LockIcon weight="fill" /> : <LockSimpleOpenIcon />)}
              </LayerTreeNodeToggle>
              <LayerTreeExpandAll />
              <Button variant="ghost" size="iconMedium" tone="neutral" onClick={addFolder}>
                <FolderPlusIcon />
              </Button>
            </div>
            <LayerTreeSearch placeholder="Search layers..." />
          </LayerTreeFooter>
        </LayerTree>
      </div>
    )
  },
}

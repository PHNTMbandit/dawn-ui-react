import { AlertDialog as BaseAlertDialog } from '@base-ui/react'
import {
  DotIcon,
  EyeIcon,
  EyeSlashIcon,
  FolderIcon,
  FolderPlusIcon,
  LineSegmentIcon,
  LockIcon,
  LockSimpleOpenIcon,
  PenIcon,
  PlusIcon,
  SquareIcon,
  TextAaIcon,
  TrashIcon,
  XCircleIcon,
  type Icon,
} from '@phosphor-icons/react'
import {
  createColumnHelper,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  type ExpandedState,
  type SortingState,
} from '@tanstack/react-table'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  AlertDialogActions,
  AlertDialogClose,
  AlertDialogConfirm,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../alert-dialog'
import { Button } from '../button'
import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuSubmenu,
  ContextMenuSubmenuTrigger,
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
import { insertLayerTreeNode, removeLayerTreeNode } from './layer-tree-utils'
import { cn } from '@/utils/cn'

import type { LayerTreeDataSet } from './layer-tree.types'
import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Layer Tree',
  component: LayerTree,
  subcomponents: {
    LayerTreeBody,
    LayerTreeExpandAll,
    LayerTreeNode,
    LayerTreeNodeToggle,
    LayerTreeSearch,
  },
  parameters: {
    docs: {
      subtitle: 'A hierarchical tree for managing nested layers with drag-and-drop support.',
      description: {
        component:
          'The Layer Tree component displays and manages hierarchical data structures, similar to a file explorer or layer panel in design tools. It supports drag-and-drop reordering, visibility and lock toggles, context menus for CRUD operations, and global search filtering. Built on TanStack Table for robust data handling.',
      },
    },
  },
} satisfies Meta<typeof LayerTree>

type Story = StoryObj<typeof LayerTree>

type LayerTreeRecordTypeId =
  | 'folder'
  | 'pixel'
  | 'text'
  | 'shape'
  | 'line'
  | 'group'
  | 'smart-object'
  | 'adjustment'
  | 'effect'
  | 'mask'

type LayerTreeRecordType = {
  id: LayerTreeRecordTypeId
  icon: Icon
  defaultName: string
  description: string
}

type LayerTreeRecord = {
  id: string
  type: LayerTreeRecordType
  name: string
  visible: boolean
  locked: boolean
  children?: LayerTreeRecord[]
}

const layerTreeRecordTypes: Record<LayerTreeRecordTypeId, LayerTreeRecordType> = {
  folder: {
    id: 'folder',
    defaultName: 'Folder',
    description: 'A folder that organizes related layers',
    icon: FolderIcon,
  },
  group: {
    id: 'group',
    defaultName: 'Group',
    description: 'A group that contains nested layers',
    icon: FolderIcon,
  },
  pixel: {
    id: 'pixel',
    defaultName: 'Pixel Layer',
    description: 'Raster artwork layer',
    icon: DotIcon,
  },
  'smart-object': {
    id: 'smart-object',
    defaultName: 'Smart Object',
    description: 'Embedded artwork with linked content',
    icon: SquareIcon,
  },
  text: {
    id: 'text',
    defaultName: 'Text Layer',
    description: 'Editable text content',
    icon: TextAaIcon,
  },
  adjustment: {
    id: 'adjustment',
    defaultName: 'Adjustment Layer',
    description: 'Non-destructive tonal or color adjustment',
    icon: DotIcon,
  },
  effect: {
    id: 'effect',
    defaultName: 'Effect Layer',
    description: 'Visual effect applied to another layer',
    icon: SquareIcon,
  },
  shape: {
    id: 'shape',
    defaultName: 'Shape Layer',
    description: 'Vector shape layer',
    icon: SquareIcon,
  },
  line: {
    id: 'line',
    defaultName: 'Line Layer',
    description: 'Vector line layer',
    icon: LineSegmentIcon,
  },
  mask: {
    id: 'mask',
    defaultName: 'Mask Layer',
    description: 'Visibility mask for the parent layer',
    icon: SquareIcon,
  },
}

export const Playground: Story = {
  name: 'Playground',
  parameters: {
    docs: {
      description: {
        story:
          'Interactive demo showcasing drag-and-drop, context menus, visibility toggles, and layer management. Right-click any layer to access CRUD operations.',
      },
    },
  },
  render: () => {
    const initialData: LayerTreeRecord[] = [
      {
        id: 'group-001',
        type: layerTreeRecordTypes.group,
        name: 'Poster Artwork',
        visible: true,
        locked: false,
        children: [
          {
            id: 'layer-001-001',
            type: layerTreeRecordTypes.pixel,
            name: 'Background Gradient',
            visible: true,
            locked: true,
          },
          {
            id: 'layer-001-002',
            type: layerTreeRecordTypes['smart-object'],
            name: 'Model Cutout',
            visible: true,
            locked: false,
          },
          {
            id: 'layer-001-003',
            type: layerTreeRecordTypes.adjustment,
            name: 'Curves 1',
            visible: true,
            locked: false,
          },
        ],
      },
      {
        id: 'group-002',
        type: layerTreeRecordTypes.group,
        name: 'Typography',
        visible: true,
        locked: false,
        children: [
          {
            id: 'layer-002-001',
            type: layerTreeRecordTypes.text,
            name: 'Main Title',
            visible: true,
            locked: false,
          },
          {
            id: 'layer-002-002',
            type: layerTreeRecordTypes.text,
            name: 'Subtitle',
            visible: true,
            locked: false,
          },
          {
            id: 'layer-002-003',
            type: layerTreeRecordTypes.effect,
            name: 'Title Drop Shadow',
            visible: true,
            locked: true,
          },
        ],
      },
      {
        id: 'group-003',
        type: layerTreeRecordTypes.group,
        name: 'Badges',
        visible: true,
        locked: false,
        children: [
          {
            id: 'layer-003-001',
            type: layerTreeRecordTypes.shape,
            name: 'Sale Badge Circle',
            visible: true,
            locked: false,
          },
          {
            id: 'layer-003-002',
            type: layerTreeRecordTypes.line,
            name: 'Badge Divider',
            visible: true,
            locked: false,
          },
          {
            id: 'layer-003-003',
            type: layerTreeRecordTypes.mask,
            name: 'Badge Mask',
            visible: false,
            locked: false,
          },
        ],
      },
      {
        id: 'layer-standalone-001',
        type: layerTreeRecordTypes.adjustment,
        name: 'Color Lookup: Teal Orange',
        visible: true,
        locked: false,
      },
    ]

    const demoAlertDialog = BaseAlertDialog.createHandle<{ rowName: string; rowId: string }>()
    const columnHelper = createColumnHelper<LayerTreeRecord>()
    const columns = [
      columnHelper.accessor('name', {
        size: 300,
        enableMultiSort: false,
        cell: (info) => {
          return (
            <>
              <ContextMenu disabled={info.row.original.locked}>
                <ContextMenuTrigger>
                  <LayerTreeNode
                    className={cn(info.row.original.visible ? '' : 'opacity-50')}
                    row={info.row}
                    icon={info.row.original.type.icon}
                    dndDisabled={info.row.original.locked}
                  >
                    {info.getValue()}
                  </LayerTreeNode>
                </ContextMenuTrigger>
                <ContextMenuPopup>
                  <ContextMenuSubmenu>
                    <ContextMenuSubmenuTrigger>
                      <PlusIcon /> Add
                    </ContextMenuSubmenuTrigger>
                    <ContextMenuPopup>
                      <ContextMenuItem
                        onClick={() => {
                          const newLayer: LayerTreeRecord = {
                            id: uuidv4(),
                            type: layerTreeRecordTypes.folder,
                            name: 'New Folder',
                            visible: true,
                            locked: false,
                            children: [],
                          }
                          setDataSet((currentDataSet) => ({
                            ...currentDataSet,
                            data: insertLayerTreeNode(currentDataSet.data, info.row.id, newLayer),
                          }))
                        }}
                      >
                        <FolderIcon /> Folder
                      </ContextMenuItem>
                      <ContextMenuItem>
                        <TextAaIcon /> Text Layer
                      </ContextMenuItem>
                      <ContextMenuItem>
                        <DotIcon /> Pixel Layer
                      </ContextMenuItem>
                      <ContextMenuItem>
                        <SquareIcon /> Shape Layer
                      </ContextMenuItem>
                    </ContextMenuPopup>
                  </ContextMenuSubmenu>
                  <ContextMenuItem>
                    <PenIcon /> Rename
                  </ContextMenuItem>
                  <ContextMenuItem>
                    <FolderPlusIcon /> Duplicate
                  </ContextMenuItem>
                  <AlertDialogTrigger
                    handle={demoAlertDialog}
                    nativeButton={false}
                    payload={{ rowId: info.row.id, rowName: info.row.original.name }}
                  >
                    <ContextMenuItem tone="error">
                      <TrashIcon /> Delete
                    </ContextMenuItem>
                  </AlertDialogTrigger>
                </ContextMenuPopup>
              </ContextMenu>
              <BaseAlertDialog.Root handle={demoAlertDialog}>
                {({ payload }) => (
                  <AlertDialogPopup tone="error">
                    <AlertDialogHeader>
                      <XCircleIcon weight="fill" />
                      <AlertDialogContent>
                        <AlertDialogTitle>Delete {payload?.rowName}</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete this layer? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogContent>
                    </AlertDialogHeader>
                    <AlertDialogActions>
                      <AlertDialogClose>Cancel</AlertDialogClose>
                      <AlertDialogConfirm
                        onClick={() => {
                          if (!payload?.rowId) return
                          setDataSet((currentDataSet) => {
                            const { nextNodes } = removeLayerTreeNode(
                              currentDataSet.data,
                              payload.rowId,
                            )
                            return { ...currentDataSet, data: nextNodes }
                          })
                        }}
                      >
                        Delete
                      </AlertDialogConfirm>
                    </AlertDialogActions>
                  </AlertDialogPopup>
                )}
              </BaseAlertDialog.Root>
            </>
          )
        },
        sortingFn: 'alphanumeric',
      }),
      columnHelper.accessor('visible', {
        enableMultiSort: false,
        sortingFn: (rowA, rowB) => {
          const a = rowA.original.visible
          const b = rowB.original.visible
          if (a === b) return 0
          return a ? -1 : 1
        },
        cell: (info) => (
          <LayerTreeNodeToggle<LayerTreeRecord>
            value={info.getValue()}
            columnId={'visible'}
            rows={[info.row, ...info.row.getLeafRows()]}
            onToggle={() =>
              setDataSet((currentDataSet) => ({
                ...currentDataSet,
                data: [...currentDataSet.data],
              }))
            }
          >
            {(value) => (value ? <EyeIcon /> : <EyeSlashIcon />)}
          </LayerTreeNodeToggle>
        ),
      }),
      columnHelper.accessor('locked', {
        header: 'Locked',
        enableMultiSort: false,
        sortingFn: (rowA, rowB) => {
          const a = rowA.original.locked
          const b = rowB.original.locked
          if (a === b) return 0
          return a ? -1 : 1
        },
        cell: (info) => (
          <LayerTreeNodeToggle<LayerTreeRecord>
            value={info.getValue()}
            columnId={'locked'}
            rows={[info.row, ...info.row.getLeafRows()]}
            onToggle={() =>
              setDataSet((currentDataSet) => ({
                ...currentDataSet,
                data: [...currentDataSet.data],
              }))
            }
          >
            {(value) => (value ? <LockIcon weight="fill" /> : <LockSimpleOpenIcon />)}
          </LayerTreeNodeToggle>
        ),
      }),
    ]
    const [dataSet, setDataSet] = React.useState<LayerTreeDataSet<LayerTreeRecord>>({
      data: initialData,
    })
    const [expanded, setExpanded] = React.useState<ExpandedState>({})
    const [rowSelection, setRowSelection] = React.useState({})
    const [globalFilter, setGlobalFilter] = React.useState('')
    const [sorting, setSorting] = React.useState<SortingState>([
      {
        id: 'name',
        desc: false,
      },
      {
        id: 'locked',
        desc: true,
      },
      {
        id: 'visible',
        desc: false,
      },
    ])

    const table = useReactTable({
      defaultColumn: {
        minSize: 0,
        size: 0,
      },
      data: dataSet.data,
      columns: columns,
      state: {
        expanded,
        rowSelection,
        globalFilter,
        sorting,
      },
      enableRowSelection: (row) => !row.getCanExpand(),
      filterFromLeafRows: true,
      getCoreRowModel: getCoreRowModel(),
      getExpandedRowModel: getExpandedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getRowCanExpand: (row) => !!row.original.children,
      getRowId: (row) => row.id,
      getSortedRowModel: getSortedRowModel(),
      getSubRows: (row) => row.children,
      onExpandedChange: setExpanded,
      onGlobalFilterChange: setGlobalFilter,
      onRowSelectionChange: setRowSelection,
      onSortingChange: setSorting,
    })

    return (
      <LayerTree table={table} dataSet={dataSet} setDataSet={setDataSet} className="h-[800px]">
        <LayerTreeBody />
        <LayerTreeFooter>
          <div className="flex items-center justify-between">
            <LayerTreeSort />
            <LayerTreeNodeToggle<LayerTreeRecord>
              columnId={'visible'}
              rows={table.getRowModel().flatRows}
              size={'iconMedium'}
              value={table.getRowModel().flatRows.every((row) => row.original.visible)}
            >
              {(value) => (value ? <EyeSlashIcon /> : <EyeIcon />)}
            </LayerTreeNodeToggle>
            <LayerTreeNodeToggle<LayerTreeRecord>
              columnId={'locked'}
              size={'iconMedium'}
              rows={table.getRowModel().flatRows}
              value={table.getRowModel().flatRows.every((row) => row.original.locked)}
            >
              {(value) => (value ? <LockIcon weight="fill" /> : <LockSimpleOpenIcon />)}
            </LayerTreeNodeToggle>
            <LayerTreeExpandAll />
            <Button
              variant="ghost"
              size="iconMedium"
              tone="neutral"
              onClick={() => {
                const newLayer: LayerTreeRecord = {
                  id: uuidv4(),
                  type: layerTreeRecordTypes.folder,
                  name: 'New Layer',
                  visible: true,
                  locked: false,
                  children: [],
                }
                setDataSet((currentDataSet) => ({
                  ...currentDataSet,
                  data: [...currentDataSet.data, newLayer],
                }))
              }}
            >
              <FolderPlusIcon />
            </Button>
            <Button
              variant="ghost"
              size="iconMedium"
              tone="error"
              disabled={Object.keys(rowSelection).length === 0}
              onClick={() => {
                const selectedRows = Object.keys(rowSelection)
                let nextData = [...dataSet.data]
                selectedRows.forEach((rowId) => {
                  const { nextNodes } = removeLayerTreeNode(nextData, rowId)
                  nextData = nextNodes
                })
                setDataSet((currentDataSet) => ({
                  ...currentDataSet,
                  data: nextData,
                }))
              }}
            >
              <TrashIcon />
            </Button>
          </div>
          <LayerTreeSearch placeholder={'Search layers...'} />
        </LayerTreeFooter>
      </LayerTree>
    )
  },
}

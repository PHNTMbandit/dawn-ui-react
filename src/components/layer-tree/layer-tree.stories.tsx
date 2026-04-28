import {
  DotIcon,
  EyeIcon,
  EyeSlashIcon,
  FolderIcon,
  LineSegmentIcon,
  LockIcon,
  LockSimpleOpenIcon,
  SquareIcon,
  TextAaIcon,
  type Icon,
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
import { LayerTree } from './layer-tree'
import { LayerTreeBody } from './layer-tree-body'
import { LayerTreeExpandAll } from './layer-tree-expand-all'
import { LayerTreeNode } from './layer-tree-node'
import { LayerTreeNodeToggle } from './layer-tree-node-toggle'
import { LayerTreeSearch } from './layer-tree-search'
import { cn } from '@/utils/cn'

import type { Meta, StoryObj } from '@storybook/react-vite'

export default {
  title: 'Components/Layer Tree',
  component: LayerTree,
  parameters: {
    subtitle:
      'A component that represents a hierarchical structure of layers, allowing users to manage and organize them effectively.',
    description: {
      component:
        'The Layer Tree component is designed to display and manage a hierarchical structure of layers, similar to a file explorer. It allows users to easily navigate through nested layers, toggle their visibility, and perform actions such as renaming or deleting layers. This component is particularly useful in applications that involve complex data visualization or design, where managing multiple layers is essential for organization and clarity.',
    },
  },
} as Meta<typeof LayerTree>

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

    const columnHelper = createColumnHelper<LayerTreeRecord>()
    const [data, setData] = React.useState<LayerTreeRecord[]>(initialData)
    const [expanded, setExpanded] = React.useState<ExpandedState>({})
    const [rowSelection, setRowSelection] = React.useState({})
    const [globalFilter, setGlobalFilter] = React.useState('')

    const columns = [
      columnHelper.accessor('name', {
        size: 300,
        cell: (info) => {
          return (
            <LayerTreeNode
              className={cn(info.row.original.visible ? '' : 'opacity-50')}
              row={info.row}
              icon={info.row.getCanExpand() ? undefined : info.row.original.type.icon}
            >
              {info.getValue()}
            </LayerTreeNode>
          )
        },
        sortingFn: 'alphanumeric',
      }),
      columnHelper.accessor('visible', {
        cell: (info) => (
          <LayerTreeNodeToggle<LayerTreeRecord>
            value={info.getValue()}
            columnId={'visible'}
            rows={[info.row, ...info.row.getLeafRows()]}
            onToggle={() => setData([...data])}
          >
            {(value) => (value ? <EyeIcon /> : <EyeSlashIcon weight="bold" />)}
          </LayerTreeNodeToggle>
        ),
      }),
      columnHelper.accessor('locked', {
        cell: (info) => (
          <LayerTreeNodeToggle<LayerTreeRecord>
            value={info.getValue()}
            columnId={'locked'}
            rows={[info.row, ...info.row.getLeafRows()]}
            onToggle={() => setData([...data])}
          >
            {(value) => (value ? <LockSimpleOpenIcon /> : <LockIcon weight="fill" />)}
          </LayerTreeNodeToggle>
        ),
      }),
    ]

    const table = useReactTable({
      defaultColumn: {
        minSize: 0,
        size: 0,
      },
      data,
      columns,
      state: {
        expanded,
        rowSelection,
        globalFilter,
      },
      enableRowSelection: (row) => !row.getCanExpand(),
      filterFromLeafRows: true,
      getCoreRowModel: getCoreRowModel(),
      getExpandedRowModel: getExpandedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getRowCanExpand: (row) => !!row.original.children,
      getSubRows: (row) => row.children,
      onExpandedChange: setExpanded,
      onGlobalFilterChange: setGlobalFilter,
      onRowSelectionChange: setRowSelection,
    })

    return (
      <LayerTree table={table}>
        <LayerTreeBody />
        <LayerTreeSearch placeholder={'Search layers...'} />
        <LayerTreeNodeToggle<LayerTreeRecord>
          value={table.getRowModel().flatRows.every((row) => row.original.visible)}
          columnId={'visible'}
          rows={table.getRowModel().flatRows}
          onToggle={() => {
            setData([...data])
          }}
        >
          {(value) => (value ? <EyeSlashIcon weight="bold" /> : <EyeIcon />)}
        </LayerTreeNodeToggle>
        <LayerTreeNodeToggle<LayerTreeRecord>
          value={table.getRowModel().flatRows.every((row) => row.original.locked)}
          columnId={'locked'}
          rows={table.getRowModel().flatRows}
          onToggle={() => {
            setData([...data])
          }}
        >
          {(value) => (value ? <LockIcon weight="fill" /> : <LockSimpleOpenIcon />)}
        </LayerTreeNodeToggle>
        <LayerTreeExpandAll />
      </LayerTree>
    )
  },
}

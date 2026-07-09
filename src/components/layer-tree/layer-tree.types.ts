import { InputGroup } from '../input-group'

import type { Button } from '../button'
import type { DeepKeys, Row, Table as TanstackTable } from '@tanstack/react-table'
import type React from 'react'

export type LayerTreeNodeToggleProps<TData> = Omit<
  React.ComponentProps<typeof Button>,
  'value' | 'children'
> & {
  value: boolean
  accessorKey: DeepKeys<TData>
  rows: Row<TData>[]
  onToggle?: () => void
  children: (value: boolean) => React.ReactNode
}

export type LayerTreeProps<TData> = React.ComponentProps<'div'> & {
  table: TanstackTable<TData>
  onDNDStart?: (event: { nodeId: string }) => void
  onDNDEnd?: (event: { sourceNodeId: string; targetNodeId: string }) => void
}

export type LayerTreeBodyProps = React.ComponentProps<'div'>
export type LayerTreeRowProps<TData> = React.ComponentProps<'div'> & {
  row: Row<TData>
}

export type LayerTreeNodeProps<TData> = React.ComponentProps<'button'> & {
  row: Row<TData>
  icon?: React.ElementType
  dndDisabled?: boolean
}
export type LayerTreeSearchProps = React.ComponentProps<typeof InputGroup> & {
  placeholder?: string
}
export type LayerTreeExpandAllProps = React.ComponentProps<'button'>
export type LayerTreeNodeActionProps = React.ComponentProps<'button'>
export type LayerTreeFooterProps = React.ComponentProps<'div'>
export type LayerTreeSortProps = React.ComponentProps<'button'>

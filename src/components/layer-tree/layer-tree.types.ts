import type { Button } from '../button'
import type { Row, Table as TanstackTable } from '@tanstack/react-table'

export type LayerTreeProps<TData = any> = React.ComponentProps<'div'> & {
  table: TanstackTable<TData>
}
export type LayerTreeBodyProps = React.ComponentProps<'div'>
export type LayerTreeRowProps<TData = any> = React.ComponentProps<'div'> & {
  row: Row<TData>
}

export type LayerTreeNodeToggleProps<TData = any> = Omit<
  React.ComponentProps<typeof Button>,
  'value' | 'children'
> & {
  value: boolean
  columnId: { [K in keyof TData]: TData[K] extends boolean ? K : never }[keyof TData]
  rows: Row<TData>[]
  onToggle: () => void
  children: (value: boolean) => React.ReactNode
}

export type LayerTreeNodeProps<TData> = React.ComponentProps<'button'> & {
  row: Row<TData>
  icon?: React.ElementType
}
export type LayerTreeSearchProps = React.ComponentProps<'input'>
export type LayerTreeExpandAllProps = React.ComponentProps<'button'>

import type { Button } from '../button'
import type { Row, Table as TanstackTable } from '@tanstack/react-table'

export type LayerTreeDataSet<TData> = {
  data: TData[]
}

export type LayerTreeProps<TData> = React.ComponentProps<'div'> & {
  table: TanstackTable<TData>
  dataSet?: LayerTreeDataSet<TData>
  setDataSet?: React.Dispatch<React.SetStateAction<LayerTreeDataSet<TData>>>
}

export type LayerTreeBodyProps = React.ComponentProps<'div'>
export type LayerTreeRowProps<TData> = React.ComponentProps<'div'> & {
  row: Row<TData>
}

export type LayerTreeNodeToggleProps<TData> = Omit<
  React.ComponentProps<typeof Button>,
  'value' | 'children'
> & {
  value: boolean
  columnId: { [K in keyof TData]: TData[K] extends boolean ? K : never }[keyof TData]
  rows: Row<TData>[]
  children: (value: boolean) => React.ReactNode
}

export type LayerTreeNodeProps<TData> = React.ComponentProps<'button'> & {
  row: Row<TData>
  icon?: React.ElementType
  dndDisabled?: boolean
}
export type LayerTreeSearchProps = React.ComponentProps<'input'>
export type LayerTreeExpandAllProps = React.ComponentProps<'button'>
export type LayerTreeNodeActionProps = React.ComponentProps<'button'>
export type LayerTreeFooterProps = React.ComponentProps<'div'>

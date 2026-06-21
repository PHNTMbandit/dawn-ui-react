import { MenuTrigger } from '../menu'
import { SelectTrigger } from '../select'
import { Tabs } from '../tabs'

import type { Button } from '../button'
import type { inputVariants } from '../input/input.types'
import type { filterDefinitions } from './table.constants'
import type { Column, ColumnDef, Row, Table as TanstackTable } from '@tanstack/react-table'
import type { VariantProps } from 'class-variance-authority'
import type { z } from 'zod'

export type FilterOperator =
  | 'equals'
  | 'notEquals'
  | 'contains'
  | 'notContains'
  | 'startsWith'
  | 'endsWith'
  | 'greaterThan'
  | 'greaterThanOrEqual'
  | 'lessThan'
  | 'lessThanOrEqual'
  | 'before'
  | 'after'
  | 'between'
  | 'anyOf'
  | 'noneOf'
  | 'empty'
  | 'notEmpty'

export type TextOperator = Extract<
  FilterOperator,
  'equals' | 'notEquals' | 'contains' | 'notContains' | 'startsWith' | 'endsWith'
>

export type SelectOperator = Extract<FilterOperator, 'equals' | 'notEquals' | 'anyOf' | 'noneOf'>
export type NumberOperator = Extract<
  FilterOperator,
  | 'equals'
  | 'notEquals'
  | 'greaterThan'
  | 'greaterThanOrEqual'
  | 'lessThan'
  | 'lessThanOrEqual'
  | 'between'
>
export type FilterType = 'text' | 'select' | 'number'
export type TextFilterValue = { filterOperator: TextOperator; filterValue: string }
export type SelectFilterValue = { filterOperator: SelectOperator; filterValue: string | string[] }
export type NumberFilterValue = {
  filterOperator: NumberOperator
  filterValue: number | [number, number]
}

export type TableFilterProps = React.ComponentProps<typeof MenuTrigger> & {
  operatorLabels?: Partial<Record<FilterOperator, string>>
}
export type TableFirstPageProps = React.ComponentProps<typeof Button>
export type TableFooterProps = React.ComponentProps<'tfoot'>
export type TableHeaderProps = React.ComponentProps<'thead'>
export type TableLastPageProps = React.ComponentProps<typeof Button>
export type TablePaginationProps = React.ComponentProps<'div'> & {
  truncateFrom?: number
  truncateTo?: number
}
export type TableNextPageProps = React.ComponentProps<typeof Button>
export type TableResultsProps = Omit<React.ComponentProps<'div'>, 'children'> & {
  children: (start: number, end: number, totalRows: number) => React.ReactElement
}
export type TablePreviousPageProps = React.ComponentProps<typeof Button>
export type TableRefreshProps = React.ComponentProps<typeof Button>
export type TableSearchProps = React.ComponentProps<'input'> & VariantProps<typeof inputVariants>
export type TableProps<TData, TValue> = React.ComponentProps<'div'> & {
  table: TanstackTable<TData>
  dataSets?: TableDataSet<TData, TValue>[]
  currentDataSet?: TableDataSet<TData, TValue>
  setCurrentDataSet?: React.Dispatch<React.SetStateAction<TableDataSet<TData, TValue>>>
  defaultView?: TableView
}
export type TableColumnToggleProps = React.ComponentProps<typeof MenuTrigger>
export type TableRowListProps<TData> = React.ComponentProps<'tr'> & {
  row: Row<TData>
}
export type TableBodyProps<TData> = Omit<React.ComponentProps<'tbody'>, 'children'> & {
  children?: (row: Row<TData>) => React.ReactNode
  rowGridOverride?: React.ComponentType<TableRowGridProps<TData>>
  rowListOverride?: React.ComponentType<TableRowListProps<TData>>
}
export type TableRowGridProps<TData> = React.ComponentProps<'tr'> & {
  row: Row<TData>
}
export type TableNavProps = React.ComponentProps<'div'>
export type TableContentProps = React.ComponentProps<'div'>
export type TablePagingProps = React.ComponentProps<'div'> & {
  min?: number
  max?: number
}
export type TableContainerProps = React.ComponentProps<'table'>
export type TableToolbarProps = React.ComponentProps<'div'>
export type TableFiltersProps = React.ComponentProps<'ul'> & {
  operatorLabels?: Partial<Record<FilterOperator, string>>
}
export type TableFilterFormProps<
  TData,
  TValue,
  TFilterType extends keyof typeof filterDefinitions,
> = React.ComponentProps<'form'> & {
  column: Column<TData, TValue>
  filterType: TFilterType
  operatorLabels?: Partial<Record<FilterOperator, string>>
  clearLabel?: React.ReactNode
  submitLabel?: React.ReactNode
  renderClearButton?: (defaultButton: React.ReactNode) => React.ReactNode
  renderSubmitButton?: (defaultButton: React.ReactNode) => React.ReactNode
}
export type FilterValue<T extends keyof typeof filterDefinitions> = z.infer<
  (typeof filterDefinitions)[T]['schema']
>
export type TableSortProps = React.ComponentProps<typeof MenuTrigger> & {
  ascendingLabel?: string
  descendingLabel?: string
}
export type TableDataSet<TData, TValue> = {
  id: string
  label: string
  data: TData[]
  columns: ColumnDef<TData, TValue>[]
}
export type TableView = 'grid' | 'list'
export type TableDataSetSelectProps = React.ComponentProps<typeof SelectTrigger>
export type TableDataSetTabsProps = React.ComponentProps<typeof Tabs>

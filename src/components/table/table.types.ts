import z from 'zod'
import { MenuTrigger } from '../menu'

import type { BadgeProps } from '../badge'
import type { Button } from '../button'
import type { Checkbox } from '../checkbox'
import type { inputVariants } from '../input/input.types'
import type { features } from './table-context'
import type { Column, RowData } from '@tanstack/react-table'
import type { VariantProps } from 'class-variance-authority'

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
export type TableColumnToggleProps = React.ComponentProps<typeof MenuTrigger>
export type TableRowProps = React.ComponentProps<'tr'>
export type TableBodyProps = React.ComponentProps<'tbody'> & {
  showDivider?: boolean
}
export type TableNavProps = React.ComponentProps<'div'> & {
  sticky?: boolean
}
export type TableContentProps = React.ComponentProps<'div'>
export type TablePagingProps = React.ComponentProps<'div'> & {
  min?: number
  max?: number
}
export type TableContainerProps = React.ComponentProps<'div'>
export type TableToolbarProps = React.ComponentProps<'div'> & {
  sticky?: boolean
}
export type TableFilterMenuProps = React.ComponentProps<'button'>
export type TableFilterListProps = React.ComponentProps<'ul'>
export type TableDateFilterFormProps<TData extends RowData> = React.ComponentProps<'form'> & {
  column: Column<typeof features, TData, unknown>
}
export type TableDateFilterChipProps<TData extends RowData> = React.ComponentProps<'button'> & {
  column: Column<typeof features, TData, unknown>
}
export type TableStringFilterFormProps<TData extends RowData> = React.ComponentProps<'form'> & {
  column: Column<typeof features, TData, unknown>
}
export type TableStringFilterChipProps<TData extends RowData> = React.ComponentProps<'button'> & {
  column: Column<typeof features, TData, unknown>
}
export type TableNumberFilterFormProps<TData extends RowData> = React.ComponentProps<'form'> & {
  column: Column<typeof features, TData, unknown>
}
export type TableNumberFilterChipProps<TData extends RowData> = React.ComponentProps<'button'> & {
  column: Column<typeof features, TData, unknown>
}
export type TableSelectFilterFormProps<TData extends RowData> = React.ComponentProps<'form'> & {
  column: Column<typeof features, TData, unknown>
}
export type TableSelectFilterChipProps<TData extends RowData> = React.ComponentProps<'button'> & {
  column: Column<typeof features, TData, unknown>
}
export type TableSelectFilterOption = string | number | boolean
export type TableSelectFilterValue = TableSelectFilterOption[]

export type TableSortChipProps<TData extends RowData> = React.ComponentProps<'button'> & {
  column: Column<typeof features, TData, unknown>
}

export type TableSortMenuProps = React.ComponentProps<typeof MenuTrigger>
export type TableChangeViewProps = React.ComponentProps<typeof Button>
export type TableCheckboxCellProps = React.ComponentProps<typeof Checkbox>
export type TableSelectHeaderProps = React.ComponentProps<typeof Checkbox>
export type TableTextCellProps = React.ComponentProps<'span'>
export type TableDateCellProps = React.ComponentProps<'span'>
export type TableNumberCellProps = React.ComponentProps<'span'>
export type TableImageCellProps = React.ComponentProps<'img'>
export type TableViewportProps = React.ComponentProps<'table'>
export type TableSortListProps = React.ComponentProps<'ul'>
export type TableBadgeCellProps = Omit<BadgeProps, 'tone'> & {
  tone?: BadgeProps['tone'] | ((value: string) => BadgeProps['tone'])
}

export const stringFilterOperators = [
  'equals',
  'notEquals',
  'contains',
  'notContains',
  'startsWith',
  'endsWith',
] as const

export const numberFilterOperators = [
  'equals',
  'notEquals',
  'greaterThan',
  'lessThan',
  'between',
] as const

export const dateFilterOperators = [
  'equals',
  'notEquals',
  'greaterThan',
  'lessThan',
  'between',
] as const

export type DateFilterOperator = (typeof dateFilterOperators)[number]
export type StringFilterOperator = (typeof stringFilterOperators)[number]
export type NumberFilterOperator = (typeof numberFilterOperators)[number]
export type FilterOperator = StringFilterOperator | NumberFilterOperator

export const defaultFilterOperatorLabels = {
  equals: 'Is',
  notEquals: 'Is not',
  contains: 'Contains',
  notContains: 'Does not contain',
  startsWith: 'Starts with',
  endsWith: 'Ends with',
  greaterThan: 'Is greater than',
  lessThan: 'Is less than',
  between: 'Is between',
} satisfies Record<FilterOperator, string>

export interface TableColumnMeta {
  filterVariant?: 'range' | 'select' | 'date' | 'string' | 'number'
}

export interface TableMeta {
  translations?: {
    filterOperatorLabels?: Partial<Record<FilterOperator, string>>
    buttonLabels?: {
      reset?: string
      apply?: string
      ascending?: string
      descending?: string
    }
  }
}

export const dateFilterSchema = z.object({
  filterOperator: z.enum(dateFilterOperators),
  filterValueFrom: z.union([z.literal(''), z.iso.date()]),
  filterValueTo: z.union([z.literal(''), z.iso.date()]),
})

export const stringFilterSchema = z.object({
  filterOperator: z.enum(stringFilterOperators),
  filterValue: z.string(),
})

export const numberFilterSchema = z.object({
  filterOperator: z.enum(numberFilterOperators),
  filterValueFrom: z.string(),
  filterValueTo: z.string(),
})
